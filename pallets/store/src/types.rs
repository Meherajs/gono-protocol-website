//! Data types for pallet-gono-store (ERC-7053 Media Receipts & CIDs)
//!
//! Defines the on-chain representation of a Media Receipt following the ERC-7053
//! standard, adapted for Substrate's bounded-type and SCALE-codec constraints.

use codec::{Decode, DecodeWithMemTracking, Encode, MaxEncodedLen};
use frame_support::pallet_prelude::*;
use frame_system::pallet_prelude::BlockNumberFor;

/// Upper bound for CID byte length (CIDv1 typically ≤ 68 bytes).
pub type CidOf<T> = BoundedVec<u8, <T as crate::pallet::Config>::MaxCidLength>;

/// Upper bound for C2PA Manifest URI length.
pub type C2paUriOf<T> = BoundedVec<u8, <T as crate::pallet::Config>::MaxC2paUriLength>;

/// Upper bound for C2PA Signer Fingerprint length (64 bytes hex SHA-256).
pub type SignerFingerprintOf<T> =
	BoundedVec<u8, <T as crate::pallet::Config>::MaxSignerFingerprintLength>;

/// Upper bound for C2PA Manifest Label length (128 bytes URN string).
pub type ManifestLabelOf<T> = BoundedVec<u8, <T as crate::pallet::Config>::MaxManifestLabelLength>;

/// An on-chain Media Receipt adhering to the ERC-7053 standard.
///
/// Fields map to the ERC-7053 Commit event:
/// - `cid`: Content Identifier (CIDv1, self-describing hash)
/// - `content_hash`: SHA-256 / Keccak-256 digest of the raw media bytes
/// - `author`: Account that originally committed the receipt
/// - `timestamp`: Block number when the receipt was committed
/// - `c2pa_manifest_uri`: Optional URI pointing to the full C2PA manifest
/// - `parent_cid`: Optional parent CID linking this receipt into a DAG provenance chain
/// - `c2pa_signer_fingerprint`: Optional SHA-256 fingerprint of the C2PA signing certificate
/// - `c2pa_manifest_label`: Optional URN label of the active C2PA manifest
#[derive(
	Encode, Decode, DecodeWithMemTracking, Clone, PartialEq, Eq, Debug, TypeInfo, MaxEncodedLen,
)]
#[scale_info(skip_type_params(T))]
pub struct MediaReceipt<T: crate::pallet::Config> {
	pub cid: CidOf<T>,
	pub content_hash: [u8; 32],
	pub author: T::AccountId,
	pub timestamp: BlockNumberFor<T>,
	pub c2pa_manifest_uri: C2paUriOf<T>,
	pub parent_cid: Option<CidOf<T>>,
	pub c2pa_signer_fingerprint: Option<SignerFingerprintOf<T>>,
	pub c2pa_manifest_label: Option<ManifestLabelOf<T>>,
}
