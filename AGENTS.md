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
| **sp-core** | `39.0.0` | Dev dependency, aligned with frame-support v45 |
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
│   │       └── tests.rs           # Comprehensive test suite
│   │
│   ├── privacy/                   # [146] ZK-SNARK Attestation & Proof Verifier
│   │   ├── Cargo.toml             # Scaffold — basic deps only
│   │   └── src/
│   │       ├── lib.rs             # Stub module declarations
│   │       ├── verifier.rs        # Stub verify_zk_proof() function
│   │       └── tests.rs           # Basic stub test
│   │
│   └── x402/                      # [148] HTTP 402 Micropayment Settlement
│       ├── Cargo.toml             # Scaffold — basic deps only
│       └── src/
│           ├── lib.rs             # Stub settle_micropayment() function
│           └── tests.rs           # Basic stub test
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
| **verify** | `pallet-gono-verify` | ✅ **COMPLETE** | `lib.rs` (523 lines), `types.rs`, `math.rs`, `mock.rs`, `tests.rs` | Full suite |
| **privacy** | `pallet-gono-privacy` | 🔲 **SCAFFOLD** | Stub `lib.rs`, `verifier.rs`, `tests.rs` | 1 stub test |
| **x402** | `pallet-gono-x402` | 🔲 **SCAFFOLD** | Stub `lib.rs`, `tests.rs` | 1 stub test |

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

### 6.3 `pallet-gono-privacy` (ZK-SNARK — SCAFFOLD)

**Planned**: Groth16 proof verification for humanity proofs, credential attestations, and anonymous verification.
**Current state**: Stub `verify_zk_proof(proof, public_inputs) -> bool` function.
**Next steps**: Implement Circom circuit integration, trusted setup verification keys, and a proper FRAME pallet with storage for verification keys and proof records.

### 6.4 `pallet-gono-x402` (Micropayments — SCAFFOLD)

**Planned**: HTTP 402 payment channel settlement, facilitator architecture, stablecoin/GONO token integration.
**Current state**: Stub `settle_micropayment(amount, resource_id) -> bool` function.
**Next steps**: Implement proper FRAME pallet with payment channels, escrow storage, and settlement extrinsics.

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
$env:CARGO_INCREMENTAL="0"; cargo test -p pallet-gono-store --target-dir target-ci

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
| **Duplicate `sp-storage` versions** | Happens when `sp-io`/`sp-core`/`sp-runtime` versions don't match `frame-support`. | Keep all `sp-*` versions aligned. Use `cargo tree -i sp-storage` to verify. |

---

## 9. Dependency Upgrade Checklist

When upgrading Polkadot SDK / FRAME dependencies:

1. Check the [Polkadot SDK releases](https://github.com/nicktesla/polkadot-sdk/releases) for the target version
2. Update `frame-support` and `frame-system` together (same minor version)
3. Find matching `sp-core`, `sp-io`, `sp-runtime` versions via `cargo tree`
4. Update `codec` and `scale-info` if the new frame requires it
5. Run `cargo tree -d` to check for duplicate crate versions
6. Run `cargo test --workspace` to verify

---

## 10. Next Implementation Priorities

1. **`pallet-gono-privacy`** — Convert scaffold to full FRAME pallet with ZK proof verification
2. **`pallet-gono-x402`** — Convert scaffold to full FRAME pallet with payment channels
3. **`chain/runtime`** — Integrate all 4 Gono pallets into the parachain runtime
4. **`chain/node`** — Configure collator with Gono runtime
5. **Cross-pallet integration** — Wire `ContentInspector` from verify → store pallet
