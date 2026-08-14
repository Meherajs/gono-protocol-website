//! Unit tests for pallet-gono-privacy

use crate::verifier::verify_zk_proof;

#[test]
fn test_zk_proof_verification() {
    let dummy_proof = b"proof_bytes";
    let dummy_inputs = b"public_inputs";
    assert!(verify_zk_proof(dummy_proof, dummy_inputs));
}
