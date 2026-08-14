//! Unit tests for pallet-gono-verify

use crate::math::{calculate_belief_sigmoid, compute_credibility_score};

#[test]
fn test_sanub_math() {
    assert_eq!(calculate_belief_sigmoid(50), 50);
    assert_eq!(compute_credibility_score(90, 80, 70), 80);
}
