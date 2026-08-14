#![cfg_attr(not(feature = "std"), no_std)]

//! # Gono Privacy Pallet (ZK-SNARK Attestation & Proof Verifier)
//!
//! Handles zero-knowledge proof verification and anonymous user attestations.

pub mod verifier;

#[cfg(test)]
mod tests;

pub use verifier::*;
