//! Unit tests for pallet-gono-x402

use crate::settle_micropayment;

#[test]
fn test_micropayment_settlement() {
    let res_id = [1u8; 32];
    assert!(settle_micropayment(100, &res_id));
}
