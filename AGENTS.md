# 🤖 AGENTS.md — Gono Protocol AI Agent Context File

> **Purpose**: This file is the canonical reference for AI coding agents (Antigravity, Cursor, Copilot, etc.) working on the Gono Protocol codebase. Read this file FIRST before making any changes. It contains the project structure, tech stack, implementation status, architectural decisions, dependency constraints, and conventions that every agent session needs to understand.

> **Last Updated**: 2026-08-15

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| **Name** | Gono Protocol |
| **Description** | Provenance infrastructure for humans and AI — a modular blockchain built on Substrate as a Polkadot Parachain |
| **Whitepaper** | [`GonoProtocol_whitepaper.txt`](./GonoProtocol_whitepaper.txt) (43 KB, full protocol spec) |
| **Analysis** | [`gono_protocol_analysis.md`](./gono_protocol_analysis.md) (study prerequisites & architecture deep-dive) |
| **Repository** | `https://github.com/Meherajs/gono-protocol-website` |
| **Branch** | `main` |
| **License** | Apache-2.0 |

---

## 2. Tech Stack & Versions

### Blockchain / Backend

| Dependency | Version | Notes |
|------------|---------|-------|
| **Rust Edition** | 2021 | All crates use `edition = "2021"` |
| **parity-scale-codec** | `3.7.5` | Workspace alias: `codec`, features: `derive`, `max-encoded-len` |
| **scale-info** | `2.11.6` | Feature: `derive` |
| **frame-support** | `45.0.0` | Direct dependency (NOT the `polkadot-sdk-frame` umbrella) |
| **frame-system** | `45.0.0` | Direct dependency |
| **pallet-balances** | `46.0.0` | Direct dependency for tests / runtime backing |
| **sp-core** | `39.0.0` | Direct/dev dependency, aligned with frame-support v45 |
| **sp-io** | `44.0.0` | Dev dependency, aligned with frame-support v45 |
| **sp-runtime** | `45.0.0` | Both runtime and dev dependency |
| **Actix-web** | `4.0` | Backend REST API (`backend/` crate, separate from workspace) |

> **⚠️ CRITICAL**: `sp-core`, `sp-io`, and `sp-runtime` versions MUST stay aligned with `frame-support`. If you upgrade `frame-support`, run `cargo tree -i sp-storage` to verify no duplicate `sp-storage` versions exist. Mismatched versions cause `Storage` type conflicts at compile time.

### Frontend

| Dependency | Version |
|------------|---------|
| **Next.js** | 16 |
| **React** | 19 |
| **Tailwind CSS** | 4.0 |
| **Deployment** | Vercel (`vercel.json` in root) |

---

## 3. Repository Structure

```
gono-protocol/
├── Cargo.toml                     # Root workspace configuration
├── AGENTS.md                      # THIS FILE — AI agent reference
├── README.md                      # Human-facing project README
├── GonoProtocol_whitepaper.txt    # Full protocol whitepaper
├── gono_protocol_analysis.md      # Whitepaper deep analysis & learning roadmap
├── vercel.json                    # Vercel deployment config (frontend)
│
├── pallets/                       # ═══ Substrate FRAME Pallets ═══
│   ├── store/                     # [142] ERC-7053 Media Receipts & CID Provenance
│   │   ├── Cargo.toml             # Deps: frame-support, frame-system, codec, scale-info
│   │   └── src/
│   │       ├── lib.rs             # Full #[frame_support::pallet] implementation
│   │       ├── types.rs           # MediaReceipt<T> struct definition
│   │       ├── mock.rs            # Test mock runtime (derive_impl + construct_runtime!)
│   │       └── tests.rs           # 9 test cases (11 total with auto-generated)
│   │
│   ├── verify/                    # [144] SANUB Credibility Scoring & Reputation
│   │   ├── Cargo.toml             # Deps: + sp-runtime (for FixedU128)
│   │   └── src/
│   │       ├── lib.rs             # Full FRAME pallet (523 lines)
│   │       ├── types.rs           # Verdict enum, AnalystReview, CidOf type alias
│   │       ├── math.rs            # FixedU128 SANUB math (Equations 2-8)
│   │       ├── mock.rs            # Test runtime with ContentInspector mock
│   │       └── tests.rs           # Comprehensive test suite (13 tests)
│   │
│   ├── x402/                      # [148] HTTP 402 State Channel Micropayments
│   │   ├── Cargo.toml             # Deps: frame-support, frame-system, sp-runtime, sp-core, pallet-balances
│   │   └── src/
│   │       ├── lib.rs             # Full FRAME pallet implementation
│   │       ├── types.rs           # ChannelDetails, BalanceOf, ChannelIdOf, voucher helper
│   │       ├── mock.rs            # Test mock runtime with Balances backing
│   │       └── tests.rs           # 26 comprehensive unit tests
│   │
│   └── privacy/                   # [146] ZK-SNARK Attestation & Proof Verifier
│       ├── Cargo.toml             # Deps: frame-support, frame-system, codec, scale-info, sp-core, sp-runtime
│       └── src/
│           ├── lib.rs             # Full FRAME pallet implementation
│           ├── types.rs           # ProofType enum, Attestation<T> struct, NullifierHash
│           ├── verifier.rs        # ZkVerifier trait, MockZkVerifier, FailingZkVerifier
│           ├── mock.rs            # Test mock runtime with TestZkVerifier
│           └── tests.rs           # 18 comprehensive unit tests
│
├── chain/                         # ═══ Polkadot SDK Parachain ═══
│   ├── runtime/                   # Parachain Runtime (full template from Polkadot SDK)
│   │   ├── Cargo.toml             # References polkadot-sdk umbrella + cumulus pallets
│   │   └── src/                   # apis.rs, benchmarks.rs, configs/, weights/, lib.rs
│   └── node/                      # Collator Node CLI (full template from Polkadot SDK)
│       ├── Cargo.toml             # References polkadot-sdk umbrella
│       └── src/                   # chain_spec.rs, cli.rs, command.rs, rpc.rs, service.rs
│
├── backend/                       # ═══ REST API Service ═══
│   ├── Cargo.toml                 # Standalone crate (NOT in workspace)
│   └── src/main.rs                # Actix-web API server
│
└── frontend/                      # ═══ Next.js Web App ═══
    ├── app/                       # App Router (/ and /whitepaper routes)
    ├── components/                # React UI components
    └── public/                    # Static assets
```

---

## 4. Workspace Configuration

### Active Members (compile & test)
```toml
members = [
    "pallets/store",
    "pallets/verify",
    "pallets/privacy",
    "pallets/x402",
]
```

### Excluded Members (need full parachain deps)
```toml
# "chain/runtime"   — requires polkadot-sdk umbrella, cumulus pallets, homepage field
# "chain/node"      — requires polkadot-sdk umbrella, clap, jsonrpsee, etc.
```

> **Why excluded?** The `chain/runtime` and `chain/node` Cargo.toml files reference `homepage.workspace = true` and `[lints] workspace = true` which aren't defined in the root workspace. They also depend on the full `polkadot-sdk` umbrella crate with `cumulus-*` features. Re-enabling them requires adding ~20 workspace dependencies. This is planned for later.

### `backend/` Is NOT a Workspace Member
The `backend/` crate uses Actix-web and runs independently. It has its own `Cargo.lock`.

---

## 5. Pallet Implementation Status

| Pallet | Crate Name | Status | Files | Tests |
|--------|-----------|--------|-------|-------|
| **store** | `pallet-gono-store` | ✅ **COMPLETE** | `lib.rs` (258 lines), `types.rs`, `mock.rs`, `tests.rs` | 11 passing |
| **verify** | `pallet-gono-verify` | ✅ **COMPLETE** | `lib.rs` (523 lines), `types.rs`, `math.rs`, `mock.rs`, `tests.rs` | 13 passing |
| **x402** | `pallet-gono-x402` | ✅ **COMPLETE** | `lib.rs`, `types.rs`, `mock.rs`, `tests.rs` | 26 passing |
| **privacy** | `pallet-gono-privacy` | ✅ **COMPLETE** | `lib.rs`, `types.rs`, `verifier.rs`, `mock.rs`, `tests.rs` | 18 passing |

---

## 6. Pallet Architecture Reference

### 6.1 `pallet-gono-store` (ERC-7053 Media Receipts)

**Standard**: ERC-7053 Media Receipt adapted for Substrate

**Config trait constants**:
| Constant | Type | Test Value | Purpose |
|----------|------|------------|---------|
| `MaxCidLength` | `u32` | `68` | Max CID bytes (CIDv1) |
| `MaxC2paUriLength` | `u32` | `256` | Max C2PA manifest URI bytes |
| `MaxChildRevisions` | `u32` | `64` | Max DAG children per parent |

**Storage**:
| Item | Type | Key → Value |
|------|------|-------------|
| `Receipts` | `StorageMap` | `CidOf<T>` → `MediaReceipt<T>` |
| `AuthorReceipts` | `StorageDoubleMap` | `(AccountId, CidOf<T>)` → `()` |
| `ProvenanceDAG` | `StorageMap` | `CidOf<T>` → `BoundedVec<CidOf<T>>` |

**`MediaReceipt<T>` fields**: `cid`, `content_hash: [u8; 32]`, `author: AccountId`, `timestamp: BlockNumber`, `c2pa_manifest_uri`, `parent_cid: Option<CidOf<T>>`

**Extrinsics**:
| Call Index | Function | Description |
|------------|----------|-------------|
| `0` | `commit_receipt(cid, content_hash, c2pa_uri, parent_cid)` | Register new asset with optional DAG parent |
| `1` | `transfer_asset_ownership(cid, new_owner)` | Transfer ownership (author-only) |

**Events**: `ReceiptCommitted`, `ProvenanceUpdated`, `OwnershipTransferred`
**Errors**: `CIDAlreadyExists`, `ParentNotFound`, `Unauthorized`, `CIDNotFound`, `MaxChildRevisionsExceeded`

---

### 6.2 `pallet-gono-verify` (SANUB Credibility Scoring)

**Standard**: SANUB Framework (Whitepaper Section 8.2, Balouchestani et al. ISCISC 2019)

**Key design decisions**:
- All arithmetic uses `sp_runtime::FixedU128` (18-decimal fixed-point) for deterministic on-chain math
- Sigmoid function implemented via 12th-order Taylor series (no floating point)
- `ContentInspector` trait for decoupled CID validation (can point to `pallet-gono-store` or mock)

**Config trait constants**:
| Constant | Type | Purpose |
|----------|------|---------|
| `MaxCidLength` | `u32` | Shared CID bound |
| `MinVerifiers` | `u32` | Min votes before finalization |
| `EvaluationPeriod` | `BlockNumber` | Blocks before permissionless finalization |

**Storage** (12 items): `VerifierScores`, `AnalystReviews`, `AnalystCredit`, `ReporterCredit`, `ContentCredibility`, `VerifierCount`, `VerifierApprovals`, `TotalActiveVerifiers`, `HasVotedBefore`, `ContentReporter`, `ContentSubmittedAt`, `ContentFinalized`

**Extrinsics**: `register_content`, `vote_as_verifier`, `submit_analyst_review`, `finalize_content_score`

**Math module** (`math.rs`): `calculate_public_belief`, `calculate_content_importance`, `calculate_belief_sigmoid`, `calculate_analyst_credit`, `calculate_reporter_credit`, `calculate_content_credibility`

---

### 6.3 `pallet-gono-x402` (HTTP 402 State Channel Micropayments)

**Standard**: x402 Open Standard (Whitepaper Sections 5.4, 10.2)

**Key design decisions**:
- Uses `frame_support::traits::fungible::hold` for native GONO token deposit locking
- Off-chain vouchers signed by channel sender over deterministic payload: `(b"gono-x402-voucher", channel_id, cumulative_amount, nonce)`
- Verified on-chain via `sp_runtime::traits::Verify` (sr25519/ed25519/ecdsa)
- Cumulative settlement model with replay-protected `NonceRegistry`
- Dispute grace period (`DisputePeriod`) enables recipients to submit final settlements before senders can claim timeouts

**Config trait**:
| Associated Type / Constant | Type / Bound | Purpose |
|----------------------------|--------------|---------|
| `NativeBalance` | `fungible::Inspect + Mutate + hold::Inspect + hold::Mutate` | Native token ledger operations |
| `RuntimeHoldReason` | `From<HoldReason>` | Composite hold reason for channel deposits |
| `Signature` | `Parameter + Verify<Signer = Self::Signer>` | Cryptographic signature type |
| `Signer` | `Parameter + IdentifyAccount<AccountId = Self::AccountId>` | Public key identifying sender AccountId |
| `MaxChannelDuration` | `Get<BlockNumberFor<Self>>` | Upper bound on channel lifetime |
| `DisputePeriod` | `Get<BlockNumberFor<Self>>` | Grace period after expiration |

**Storage**:
| Item | Type | Key → Value | Purpose |
|------|------|-------------|---------|
| `Channels` | `StorageMap` | `ChannelIdOf<T>` → `ChannelDetails<T>` | Primary channel state |
| `NonceRegistry` | `StorageDoubleMap` | `(ChannelIdOf<T>, u64)` → `bool` | Voucher replay protection |
| `SenderChannelCount` | `StorageMap` | `T::AccountId` → `u64` | Per-sender channel counter for deterministic ID derivation |
| `ChannelCount` | `StorageValue` | `u32` | Protocol-wide active channel counter |

**Extrinsics**:
| Call Index | Function | Description |
|------------|----------|-------------|
| `0` | `open_channel(recipient, deposit, duration)` | Open payment channel, hold deposit, derive ChannelId |
| `1` | `top_up_channel(channel_id, additional_deposit)` | Sender locks additional funds into active channel |
| `2` | `settle_channel(channel_id, cumulative_amount, nonce, signature, close_channel)` | Recipient submits signed voucher, receives payout diff, optionally closes channel |
| `3` | `claim_channel_timeout(channel_id)` | Sender reclaims unspent deposit after expiration + dispute period |

**Events**: `ChannelOpened`, `ChannelToppedUp`, `ChannelSettled`, `ChannelTimedOut`
**Errors**: `ChannelNotFound`, `ChannelAlreadyExists`, `NotChannelSender`, `NotChannelRecipient`, `ChannelExpired`, `ChannelNotExpired`, `DisputePeriodActive`, `NonceAlreadyUsed`, `InvalidSignature`, `InvalidSettlementAmount`, `SettlementExceedsDeposit`, `DurationExceedsMax`, `InvalidDuration`, `ChannelAlreadyClosed`, `ZeroDeposit`, `ZeroAmount`

---

### 6.4 `pallet-gono-privacy` (ZK-SNARK Attestation & Proof Verifier)

**Standard**: Whitepaper Section 8.3 (Zero-Knowledge Proof Circuits)

**Key design decisions**:
- Pluggable `ZkVerifier<ProofType>` trait decouples circuit proving engines (Groth16/BN254, PLONK, STARKs) from the runtime
- Supports 3 core proof types: `HumanityProof`, `CredentialVerification`, and `JurisdictionProof`
- Cryptographic `NullifierRegistry` (H256 -> bool) prevents proof replay / double-attestation attacks
- Attestations mapped by `(AccountId, ProofType)` with self-revocation capability (`revoke_attestation`)
- Nullifier remains permanently spent even after an attestation is revoked to prevent replaying old proofs

**Config trait**:
| Associated Type / Constant | Type / Bound | Purpose |
|----------------------------|--------------|---------|
| `Verifier` | `ZkVerifier<ProofType>` | Pluggable ZK proof verification engine |
| `MaxProofSize` | `Get<u32>` | Upper bound on proof bytes payload |
| `MaxPublicInputsSize` | `Get<u32>` | Upper bound on public inputs payload |

**Storage**:
| Item | Type | Key → Value | Purpose |
|------|------|-------------|---------|
| `NullifierRegistry` | `StorageMap` | `H256` → `bool` | Consumed nullifier registry (replay protection) |
| `VerifiedAttestations` | `StorageDoubleMap` | `(AccountId, ProofType)` → `Attestation<T>` | Active on-chain verified attestations |

**Extrinsics**:
| Call Index | Function | Description |
|------------|----------|-------------|
| `0` | `verify_and_attest(proof_type, proof_bytes, public_inputs, nullifier_hash)` | Verify ZK proof, spend nullifier, register on-chain attestation |
| `1` | `revoke_attestation(proof_type, nullifier_hash)` | Revoke caller's active attestation; nullifier remains spent |

**Events**: `AttestationVerified`, `AttestationRevoked`
**Errors**: `ProofVerificationFailed`, `NullifierAlreadyUsed`, `AttestationNotFound`, `InvalidNullifier`, `ProofTooLarge`, `PublicInputsTooLarge`

---

## 7. Development Conventions

### Pallet Structure Pattern
Every FRAME pallet follows this file layout:
```
pallets/<name>/
├── Cargo.toml          # Workspace deps, [features] with std gates
└── src/
    ├── lib.rs          # #[frame_support::pallet] mod pallet { ... }
    ├── types.rs        # Data structs (Encode, Decode, TypeInfo, MaxEncodedLen)
    ├── mock.rs         # #[cfg(test)] mock runtime
    └── tests.rs        # #[cfg(test)] unit tests
```

### Key Patterns Used
- **`#[frame_support::pallet]`** — NOT `#[frame::pallet]` (we use direct deps, not umbrella)
- **`frame_support::pallet_prelude::*`** + **`frame_system::pallet_prelude::*`** — standard imports
- **`#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]`** — mock runtime config
- **`frame_system::mocking::MockBlock<Test>`** — test block type
- **`frame_support::sp_runtime::BuildStorage`** — must be imported for `GenesisConfig::build_storage()`
- **`BoundedVec<u8, T::MaxSomething>`** — all variable-length on-chain data uses bounded types
- **`#[scale_info(skip_type_params(T))]`** — on generic structs stored on-chain

### Testing
```bash
# Test a specific pallet (use CARGO_INCREMENTAL=0 on Windows to avoid file lock issues)
$env:CARGO_INCREMENTAL="0"; cargo test -p pallet-gono-privacy --target-dir target-ci

# Test all pallets
$env:CARGO_INCREMENTAL="0"; cargo test --workspace --target-dir target-ci
```

> **⚠️ Windows File Lock Issue**: rust-analyzer locks `.o` files in `target/`. Always use `CARGO_INCREMENTAL=0` and/or `--target-dir target-ci` when running tests from a terminal while the IDE is open.

### Git Conventions
- **Commit messages**: `feat:`, `fix:`, `refactor:`, `docs:`, `test:` prefixes
- **Author**: `Meheraj <maharajmd7@gmail.com>`
- **Branch**: `main`

---

## 8. Known Issues & Gotchas

| Issue | Description | Workaround |
|-------|-------------|------------|
| **`RuntimeEvent` deprecation warning** | `frame-support v45` auto-appends `RuntimeEvent` bound. Having `type RuntimeEvent` in Config is deprecated but still works. | Cosmetic warning only. Will be removed in a future cleanup. |
| **`chain/runtime` + `chain/node` excluded** | They reference `homepage.workspace`, `[lints] workspace`, and the full `polkadot-sdk` umbrella which aren't configured. | Commented out in workspace `members`. Re-enable after adding full parachain deps. |
| **Windows `.o` file locks** | rust-analyzer locks incremental compilation artifacts. | `CARGO_INCREMENTAL=0` + separate `--target-dir`. |
| **Duplicate `sp-storage` / `sp-runtime` versions** | Happens when `sp-io`/`sp-core`/`sp-runtime`/`pallet-balances` versions don't match `frame-support`. | Keep all `sp-*` versions aligned. Use `cargo tree -i sp-storage` and `cargo tree -i sp-runtime` to verify. |

---

## 9. Dependency Upgrade Checklist

When upgrading Polkadot SDK / FRAME dependencies:

1. Check the [Polkadot SDK releases](https://github.com/nicktesla/polkadot-sdk/releases) for the target version
2. Update `frame-support` and `frame-system` together (same minor version)
3. Find matching `sp-core`, `sp-io`, `sp-runtime`, `pallet-balances` versions via `cargo tree`
4. Update `codec` and `scale-info` if the new frame requires it
5. Run `cargo tree -d` to check for duplicate crate versions
6. Run `cargo test --workspace` to verify

---

## 10. Next Implementation Priorities

1. **`chain/runtime`** — Integrate all 4 Gono pallets (`pallet-gono-store`, `pallet-gono-verify`, `pallet-gono-x402`, `pallet-gono-privacy`) into the parachain runtime
2. **`chain/node`** — Configure collator with Gono runtime
3. **Cross-pallet integration** — Wire `ContentInspector` from verify → store pallet


