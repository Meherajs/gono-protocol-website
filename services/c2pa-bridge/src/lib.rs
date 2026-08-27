//! Gono Protocol C2PA Bridge library.
//!
//! Provides modules for signing media with C2PA metadata, verifying manifests,
//! uploading to IPFS, and preparing on-chain commit payloads.

pub mod commit;
pub mod ipfs;
pub mod sign;
pub mod verify;
