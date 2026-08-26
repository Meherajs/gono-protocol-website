//! Unit tests for pallet-gono-store
//!
//! Covers:
//! - Happy-path commit and query
//! - Duplicate CID rejection
//! - DAG provenance linking
//! - Parent-not-found error
//! - Max child revisions overflow
//! - Ownership transfer happy path
//! - Unauthorized transfer rejection
//! - Transfer of non-existent CID
//! - Multi-author provenance chain

use crate::{mock::*, Error, Event, ManifestLabelOf, SignerFingerprintOf};
use frame_support::{assert_noop, assert_ok, BoundedVec};

/// Helper: build a BoundedVec CID from raw bytes.
fn cid(bytes: &[u8]) -> BoundedVec<u8, MaxCidLength> {
	BoundedVec::try_from(bytes.to_vec()).expect("CID exceeds MaxCidLength")
}

/// Helper: build a BoundedVec C2PA URI from raw bytes.
fn c2pa(bytes: &[u8]) -> BoundedVec<u8, MaxC2paUriLength> {
	BoundedVec::try_from(bytes.to_vec()).expect("URI exceeds MaxC2paUriLength")
}

/// Helper: build a BoundedVec Signer Fingerprint from raw bytes.
fn fingerprint(bytes: &[u8]) -> SignerFingerprintOf<Test> {
	BoundedVec::try_from(bytes.to_vec()).expect("Fingerprint exceeds MaxSignerFingerprintLength")
}

/// Helper: build a BoundedVec Manifest Label from raw bytes.
fn manifest_label(bytes: &[u8]) -> ManifestLabelOf<Test> {
	BoundedVec::try_from(bytes.to_vec()).expect("Manifest label exceeds MaxManifestLabelLength")
}

// ─── commit_receipt tests ──────────────────────────────────────────

#[test]
fn commit_receipt_works() {
	new_test_ext().execute_with(|| {
		let author: u64 = 1;
		let test_cid = cid(b"bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetoju");
		let hash = [0xAA; 32];
		let uri = c2pa(b"https://c2pa.gono.io/manifest/abc123");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			test_cid.clone(),
			hash,
			uri.clone(),
			None,
			None,
			None,
		));

		// Verify storage
		let receipt = GonoStore::receipts(&test_cid).expect("Receipt must exist");
		assert_eq!(receipt.author, author);
		assert_eq!(receipt.content_hash, hash);
		assert_eq!(receipt.cid, test_cid);
		assert_eq!(receipt.c2pa_manifest_uri, uri);
		assert_eq!(receipt.parent_cid, None);
		assert_eq!(receipt.c2pa_signer_fingerprint, None);
		assert_eq!(receipt.c2pa_manifest_label, None);
		assert_eq!(receipt.timestamp, 1); // block_number set in new_test_ext

		// Verify author index
		assert!(GonoStore::author_receipts(author, &test_cid).is_some());

		// Verify event
		System::assert_has_event(
			Event::ReceiptCommitted {
				cid: test_cid,
				author,
				content_hash: hash,
				c2pa_signer_fingerprint: None,
				c2pa_manifest_label: None,
			}
			.into(),
		);
	});
}

#[test]
fn commit_duplicate_cid_fails() {
	new_test_ext().execute_with(|| {
		let test_cid = cid(b"bafkrei_duplicate_test");
		let hash = [0xBB; 32];
		let uri = c2pa(b"");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			test_cid.clone(),
			hash,
			uri.clone(),
			None,
			None,
			None,
		));

		// Second commit with same CID must fail
		assert_noop!(
			GonoStore::commit_receipt(
				RuntimeOrigin::signed(2),
				test_cid,
				hash,
				uri,
				None,
				None,
				None
			),
			Error::<Test>::CIDAlreadyExists,
		);
	});
}

#[test]
fn commit_with_parent_links_dag() {
	new_test_ext().execute_with(|| {
		let parent = cid(b"bafkrei_parent");
		let child = cid(b"bafkrei_child_v2");
		let hash = [0xCC; 32];
		let uri = c2pa(b"");

		// Commit parent first
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			parent.clone(),
			hash,
			uri.clone(),
			None,
			None,
			None,
		));

		// Commit child referencing parent
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			child.clone(),
			[0xDD; 32],
			uri,
			Some(parent.clone()),
			None,
			None,
		));

		// Verify DAG link
		let children = GonoStore::provenance_dag(&parent);
		assert_eq!(children.len(), 1);
		assert_eq!(children[0], child);

		// Verify child receipt has parent_cid set
		let child_receipt = GonoStore::receipts(&child).unwrap();
		assert_eq!(child_receipt.parent_cid, Some(parent.clone()));

		// Verify ProvenanceUpdated event
		System::assert_has_event(
			Event::ProvenanceUpdated {
				parent_cid: parent,
				child_cid: child,
			}
			.into(),
		);
	});
}

#[test]
fn commit_with_nonexistent_parent_fails() {
	new_test_ext().execute_with(|| {
		let orphan = cid(b"bafkrei_orphan");
		let ghost_parent = cid(b"bafkrei_does_not_exist");

		assert_noop!(
			GonoStore::commit_receipt(
				RuntimeOrigin::signed(1),
				orphan,
				[0xEE; 32],
				c2pa(b""),
				Some(ghost_parent),
				None,
				None,
			),
			Error::<Test>::ParentNotFound,
		);
	});
}

#[test]
fn commit_exceeding_max_children_fails() {
	new_test_ext().execute_with(|| {
		let parent = cid(b"bafkrei_many_children");
		let hash = [0xFF; 32];
		let uri = c2pa(b"");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			parent.clone(),
			hash,
			uri.clone(),
			None,
			None,
			None,
		));

		// Fill up to MaxChildRevisions (64)
		for i in 0..64u32 {
			let child_bytes = format!("bafkrei_child_{:04}", i);
			let child_cid = cid(child_bytes.as_bytes());
			assert_ok!(GonoStore::commit_receipt(
				RuntimeOrigin::signed(1),
				child_cid,
				hash,
				uri.clone(),
				Some(parent.clone()),
				None,
				None,
			));
		}

		// The 65th child must fail
		let overflow_child = cid(b"bafkrei_child_overflow");
		assert_noop!(
			GonoStore::commit_receipt(
				RuntimeOrigin::signed(1),
				overflow_child,
				hash,
				uri,
				Some(parent),
				None,
				None,
			),
			Error::<Test>::MaxChildRevisionsExceeded,
		);
	});
}

// ─── transfer_asset_ownership tests ────────────────────────────────

#[test]
fn transfer_ownership_works() {
	new_test_ext().execute_with(|| {
		let original_owner: u64 = 1;
		let new_owner: u64 = 2;
		let test_cid = cid(b"bafkrei_transferable");
		let hash = [0x11; 32];

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(original_owner),
			test_cid.clone(),
			hash,
			c2pa(b""),
			None,
			None,
			None,
		));

		assert_ok!(GonoStore::transfer_asset_ownership(
			RuntimeOrigin::signed(original_owner),
			test_cid.clone(),
			new_owner,
		));

		// Receipt author updated
		let receipt = GonoStore::receipts(&test_cid).unwrap();
		assert_eq!(receipt.author, new_owner);

		// Author index updated
		assert!(GonoStore::author_receipts(original_owner, &test_cid).is_none());
		assert!(GonoStore::author_receipts(new_owner, &test_cid).is_some());

		// Event emitted
		System::assert_has_event(
			Event::OwnershipTransferred {
				cid: test_cid,
				from: original_owner,
				to: new_owner,
			}
			.into(),
		);
	});
}

#[test]
fn transfer_by_non_owner_fails() {
	new_test_ext().execute_with(|| {
		let owner: u64 = 1;
		let attacker: u64 = 99;
		let test_cid = cid(b"bafkrei_secured");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(owner),
			test_cid.clone(),
			[0x22; 32],
			c2pa(b""),
			None,
			None,
			None,
		));

		assert_noop!(
			GonoStore::transfer_asset_ownership(
				RuntimeOrigin::signed(attacker),
				test_cid,
				attacker,
			),
			Error::<Test>::Unauthorized,
		);
	});
}

#[test]
fn transfer_nonexistent_cid_fails() {
	new_test_ext().execute_with(|| {
		let ghost = cid(b"bafkrei_ghost");

		assert_noop!(
			GonoStore::transfer_asset_ownership(RuntimeOrigin::signed(1), ghost, 2,),
			Error::<Test>::CIDNotFound,
		);
	});
}

// ─── Multi-author provenance chain ─────────────────────────────────

#[test]
fn multi_author_dag_chain() {
	new_test_ext().execute_with(|| {
		let alice: u64 = 1;
		let bob: u64 = 2;

		let original = cid(b"bafkrei_original_photo");
		let edit_v1 = cid(b"bafkrei_edit_v1");
		let edit_v2 = cid(b"bafkrei_edit_v2");

		// Alice commits original
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(alice),
			original.clone(),
			[0xAA; 32],
			c2pa(b"https://c2pa.example/original"),
			None,
			None,
			None,
		));

		// Bob creates edit referencing Alice's original
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(bob),
			edit_v1.clone(),
			[0xBB; 32],
			c2pa(b"https://c2pa.example/edit_v1"),
			Some(original.clone()),
			None,
			None,
		));

		// Alice creates another edit also referencing the original
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(alice),
			edit_v2.clone(),
			[0xCC; 32],
			c2pa(b""),
			Some(original.clone()),
			None,
			None,
		));

		// DAG should show two children under the original
		let children = GonoStore::provenance_dag(&original);
		assert_eq!(children.len(), 2);
		assert_eq!(children[0], edit_v1);
		assert_eq!(children[1], edit_v2);

		// Each author's index is correct
		assert!(GonoStore::author_receipts(alice, &original).is_some());
		assert!(GonoStore::author_receipts(bob, &edit_v1).is_some());
		assert!(GonoStore::author_receipts(alice, &edit_v2).is_some());
		// Bob does NOT own the original
		assert!(GonoStore::author_receipts(bob, &original).is_none());
	});
}

// ─── C2PA Metadata & Signer Lookup Tests ───────────────────────────

#[test]
fn commit_receipt_with_c2pa_metadata_works() {
	new_test_ext().execute_with(|| {
		let author: u64 = 1;
		let test_cid = cid(b"bafkrei_c2pa_signed_asset_001");
		let hash = [0x55; 32];
		let uri = c2pa(b"ipfs://bafkreimanifesturi123");
		let fp = fingerprint(b"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
		let label = manifest_label(b"urn:c2pa:9958beb9-adb0-43f6-aec7-af417fd3134a");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			test_cid.clone(),
			hash,
			uri.clone(),
			None,
			Some(fp.clone()),
			Some(label.clone()),
		));

		// Verify receipt in primary storage
		let receipt = GonoStore::receipts(&test_cid).expect("Receipt must exist");
		assert_eq!(receipt.author, author);
		assert_eq!(receipt.content_hash, hash);
		assert_eq!(receipt.cid, test_cid);
		assert_eq!(receipt.c2pa_manifest_uri, uri);
		assert_eq!(receipt.parent_cid, None);
		assert_eq!(receipt.c2pa_signer_fingerprint, Some(fp.clone()));
		assert_eq!(receipt.c2pa_manifest_label, Some(label.clone()));

		// Verify signer double-map index
		assert!(GonoStore::signer_assets(&fp, &test_cid).is_some());

		// Verify author index
		assert!(GonoStore::author_receipts(author, &test_cid).is_some());

		// Verify event
		System::assert_has_event(
			Event::ReceiptCommitted {
				cid: test_cid,
				author,
				content_hash: hash,
				c2pa_signer_fingerprint: Some(fp),
				c2pa_manifest_label: Some(label),
			}
			.into(),
		);
	});
}

#[test]
fn commit_receipt_without_c2pa_metadata_works() {
	new_test_ext().execute_with(|| {
		let author: u64 = 2;
		let test_cid = cid(b"bafkrei_legacy_plain_asset");
		let hash = [0x77; 32];
		let uri = c2pa(b"");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			test_cid.clone(),
			hash,
			uri,
			None,
			None,
			None,
		));

		// Verify storage fields are None
		let receipt = GonoStore::receipts(&test_cid).expect("Receipt must exist");
		assert_eq!(receipt.c2pa_signer_fingerprint, None);
		assert_eq!(receipt.c2pa_manifest_label, None);

		// Verify SignerAssets is NOT populated
		let fp = fingerprint(b"any_dummy_fingerprint");
		assert!(GonoStore::signer_assets(&fp, &test_cid).is_none());
	});
}

#[test]
fn signer_assets_query_works() {
	new_test_ext().execute_with(|| {
		let author: u64 = 1;
		let fp = fingerprint(b"cert_fingerprint_org_gono_news");
		let label1 = manifest_label(b"urn:c2pa:asset-one-uuid");
		let label2 = manifest_label(b"urn:c2pa:asset-two-uuid");

		let cid1 = cid(b"bafkrei_asset_1");
		let cid2 = cid(b"bafkrei_asset_2");
		let cid3 = cid(b"bafkrei_asset_3_different_signer");

		let other_fp = fingerprint(b"cert_fingerprint_other_entity");

		// Commit asset 1 with fp
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			cid1.clone(),
			[0x01; 32],
			c2pa(b"ipfs://manifest1"),
			None,
			Some(fp.clone()),
			Some(label1),
		));

		// Commit asset 2 with same fp
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			cid2.clone(),
			[0x02; 32],
			c2pa(b"ipfs://manifest2"),
			None,
			Some(fp.clone()),
			Some(label2),
		));

		// Commit asset 3 with different fp
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			cid3.clone(),
			[0x03; 32],
			c2pa(b"ipfs://manifest3"),
			None,
			Some(other_fp.clone()),
			None,
		));

		// Check fp has both cid1 and cid2
		assert!(GonoStore::signer_assets(&fp, &cid1).is_some());
		assert!(GonoStore::signer_assets(&fp, &cid2).is_some());
		assert!(GonoStore::signer_assets(&fp, &cid3).is_none());

		// Check other_fp only has cid3
		assert!(GonoStore::signer_assets(&other_fp, &cid3).is_some());
		assert!(GonoStore::signer_assets(&other_fp, &cid1).is_none());
	});
}
