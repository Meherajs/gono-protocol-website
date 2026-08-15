# 🔗 Gono Protocol

> **Provenance infrastructure for humans and AI**

<p align="center">
  <img src="https://img.shields.io/badge/Substrate-FRAME%20v45-blue?style=for-the-badge&logo=polkadot" alt="Substrate FRAME"/>
  <img src="https://img.shields.io/badge/Rust-2021-orange?style=for-the-badge&logo=rust" alt="Rust"/>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Actix--web-4.0-000000?style=for-the-badge" alt="Actix"/>
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel" alt="Vercel"/>
</p>

---

## 🏢 About Gono Protocol

Gono Protocol is a modular blockchain infrastructure built on Substrate as a Polkadot Parachain. It provides a universal, content-addressable rail for verifiable media, digital assets, and autonomous AI commerce using a pluggable pallet architecture:

- **ERC-7053 Media Receipts & DAG Provenance** (`pallet-gono-store`) — ✅ Complete
- **SANUB Credibility Scoring & Reputation Engine** (`pallet-gono-verify`) — ✅ Complete
- **HTTP 402 AI-Native Micropayments** (`pallet-gono-x402`) — ✅ Complete
- **zk-SNARK Anonymous Attestations & Humanity Proofs** (`pallet-gono-privacy`) — ✅ Complete

---

## 📁 Repository Structure

```text
gono-protocol/
├── pallets/                     # Substrate FRAME Pallets
│   ├── store/                  # ERC-7053 Media Receipts & CID Provenance ✅
│   ├── verify/                 # SANUB Credibility Scoring & Reputation ✅
│   ├── x402/                   # HTTP 402 State Channel Micropayments ✅
│   └── privacy/                # zk-SNARK Verifiers & Anonymous Attestations ✅
│
├── chain/                       # Polkadot SDK Parachain Runtime & Node
│   ├── runtime/                # Parachain Runtime Definition
│   └── node/                   # Parachain Node
│
├── backend/                     # Rust + Actix-web API Service
│   ├── Cargo.toml
│   └── src/
│
├── frontend/                    # Next.js 16 + Tailwind CSS 4 Web App
│   ├── app/                    # App Router (/ & /whitepaper)
│   ├── components/             # UI Components
│   └── public/                 # Static Assets
│
├── AGENTS.md                    # AI Agent Context & Architecture Reference
├── GonoProtocol_whitepaper.txt  # Full Protocol Whitepaper
└── Cargo.toml                   # Root Cargo Workspace
```

---

## ⚙️ Substrate Pallets Overview

### 1. `pallet-gono-store` (ERC-7053 Provenance) — ✅ Complete

On-chain content-addressed media indexing following the ERC-7053 standard. Full FRAME pallet with storage, extrinsics, events, errors, and comprehensive test suite.

- **`MediaReceipt<T>`**: CID (BoundedVec), ContentHash ([u8; 32]), Author (AccountId), Timestamp (BlockNumber), C2PA Manifest URI, ParentCID (DAG provenance link)
- **Storage**: `Receipts` (CID → Receipt), `AuthorReceipts` (AccountId × CID → ()), `ProvenanceDAG` (CID → BoundedVec\<CID\>)
- **Extrinsics**: `commit_receipt` (register asset with optional DAG parent), `transfer_asset_ownership` (author-only transfer)
- **Events**: `ReceiptCommitted`, `ProvenanceUpdated`, `OwnershipTransferred`
- **Tests**: 11 passing — happy paths, duplicate CID rejection, DAG linking, parent-not-found, max children overflow, unauthorized transfer, multi-author provenance chains

### 2. `pallet-gono-verify` (SANUB Framework) — ✅ Complete

Implements Section 8.2 of the Gono Protocol Whitepaper for community and AI-driven content credibility scoring.

- **Fixed-Point Arithmetic (`FixedU128`)**: Deterministic calculations of Public Belief $B_n$, Content Importance $I_n$, Belief Sigmoid $S(B_n)$, Analyst Credit $C_a$, Reporter Credit $C_r$, and Content Credibility $C_n$
- **Decoupled Verification Hooks**: Trait-based `ContentInspector` for zero-overhead integration with `pallet-gono-store`
- **Extrinsics**: `register_content`, `vote_as_verifier`, `submit_analyst_review`, `finalize_content_score`
- **Tests**: 13 passing — formula verification (Eqs 2–8), Taylor series expansion, multi-verifier consensus, analyst stake credit, reporter reputation, time-locked finalization

### 3. `pallet-gono-x402` (HTTP 402 State Channel Micropayments) — ✅ Complete

Implements Whitepaper Sections 5.4 and 10.2 — state channel micropayments for AI agent machine commerce via the x402 Open Standard.

- **State Channels**: AI Agents (310) open funded channels to Service Providers (330), streaming micropayments off-chain via signed vouchers without per-request on-chain gas costs
- **`fungible::hold`**: Channel deposits locked on-chain using FRAME's native hold mechanism (GONO token)
- **Off-Chain Voucher Verification**: Deterministic voucher hashing and cryptographic signature validation (sr25519/ed25519/ecdsa)
- **Replay Protection**: Per-channel `NonceRegistry` double-map prevents voucher reuse
- **Dispute Grace Period**: Configurable grace window (`DisputePeriod`) guarantees recipients can submit final settlements before senders can claim timeouts
- **Extrinsics**: `open_channel`, `top_up_channel`, `settle_channel`, `claim_channel_timeout`
- **Tests**: 26 passing — channel opening, top-ups, single/cumulative voucher settlement, invalid signature rejection, nonce replay protection, dispute period enforcement, timeout refund distribution, closed channel safety

### 4. `pallet-gono-privacy` (zk-SNARK Attestations) — ✅ Complete

Implements Whitepaper Section 8.3 — zero-knowledge proof circuits for humanity verification, credential verification, and anonymous jurisdiction proofs.

- **3 Core Proof Types**: `HumanityProof` (Sybil-resistant human registry), `CredentialVerification` (anonymous journalist press pass & whistleblower protection), `JurisdictionProof` (selective attribute disclosure without PII)
- **Pluggable `ZkVerifier` Trait**: Decouples proving engines (Groth16/BN254, PLONK, STARKs) from the runtime
- **Replay Protection**: `NullifierRegistry` (H256 -> bool) prevents proof double-spending and front-running
- **Attestation Lifecycle**: On-chain `VerifiedAttestations` registry with self-revocation support (`revoke_attestation`)
- **Extrinsics**: `verify_and_attest`, `revoke_attestation`
- **Tests**: 18 passing — humanity/credential/jurisdiction proof verification, nullifier double-spend prevention, proof/inputs size bound enforcement, self-revocation, persistent nullifier consumption

---

## 🚀 Quick Start & Testing

### Prerequisites
- **Rust toolchain** (stable & nightly for Wasm):
  ```bash
  rustup update stable
  rustup target add wasm32-unknown-unknown --toolchain stable
  ```
- **Node.js** 18+ & **npm** 9+

### 1. Running Pallet Test Suites
```bash
# Test store pallet (ERC-7053)
cargo test -p pallet-gono-store

# Test verify pallet (SANUB)
cargo test -p pallet-gono-verify

# Test x402 pallet (HTTP 402 State Channels)
cargo test -p pallet-gono-x402

# Test privacy pallet (zk-SNARK Attestations)
cargo test -p pallet-gono-privacy

# Test entire Substrate workspace (68 tests total)
cargo test --workspace


# Windows: use CARGO_INCREMENTAL=0 if rust-analyzer locks files
$env:CARGO_INCREMENTAL="0"; cargo test --workspace --target-dir target-ci
```

### 2. Running Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the web app.

### 3. Running Backend API
```bash
cd backend
cargo run
```

---

## 🤖 AI Agent Reference

For AI coding agents: read [`AGENTS.md`](./AGENTS.md) before making any changes. It contains:
- Complete tech stack with exact dependency versions
- Pallet architecture reference with storage layouts and extrinsic signatures
- Development conventions and known gotchas
- Dependency upgrade checklist

---

## 📜 License
Apache-2.0 / Unlicense
