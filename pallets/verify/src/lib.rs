#![cfg_attr(not(feature = "std"), no_std)]

//! # Gono Verify Pallet (SANUB Credibility Scoring Math)
//!
//! Implements SANUB reputation algorithms and verification score calculations.

pub mod math;

#[cfg(test)]
mod tests;

pub use math::*;
