# 🔗 Gono Protocol

> **Provenance infrastructure for humans and AI**

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Rust-2021-orange?style=for-the-badge&logo=rust" alt="Rust"/>
  <img src="https://img.shields.io/badge/Actix--web-4.0-000000?style=for-the-badge" alt="Actix"/>
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel" alt="Vercel"/>
</p>

---

## 🏢 About Gono Protocol

Gono Protocol is a modular blockchain infrastructure built on Substrate as a Polkadot Parachain. It provides a universal, content-addressable rail for verifiable media, digital assets, and autonomous AI commerce using a "Pluggable Module" approach.

---

## ✨ Features

### Frontend
- 🎨 **Premium Dark Theme** - Glassmorphism, gradients, and glow effects
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Server Components** - Fast rendering with Next.js App Router
- 🔄 **Multi-Page Architecture** - 10+ routes including use cases, tools, and documentation
- 💫 **Smooth Animations** - Hover effects, loading skeletons, micro-interactions
- 🔮 **Visual Provenance Flow** - Intuitive stepper diagrams for complex processes
- 🖼️ **Modern Iconography** - Professional Lucide React icons throughout
- 🎯 **TypeScript** - Full type safety across the codebase
- 🚀 **Vercel Deployment** - Production-ready deployment configuration

### Backend
- 🦀 **Rust + Actix-web** - High-performance async web server
- 📊 **7 API Endpoints** - Health, stats, features, archive, partners, products, token
- 📝 **Request Logging** - Built-in middleware for debugging
- 🗜️ **Compression** - Gzip/Brotli support
- 🔒 **CORS Configured** - Ready for frontend integration

---

## 📁 Project Structure

```
gono-protocol/
├── frontend/                    # Next.js 16 + Tailwind CSS 4
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Main homepage
│   │   ├── globals.css         # Custom dark theme styles
│   │   ├── about/              # About page
│   │   ├── archive/            # Archive page
│   │   ├── build/              # Build page
│   │   ├── careers/            # Careers page
│   │   ├── coming-soon/        # Coming soon placeholder
│   │   ├── docs/               # Documentation page
│   │   ├── staking/            # Staking page
│   │   ├── tools/              # Tools section
│   │   ├── use-cases/          # Use cases (7 dedicated pages)
│   │   │   ├── journalism/
│   │   │   ├── news-verification/
│   │   │   ├── deepfake-protection/
│   │   │   ├── voting-integrity/
│   │   │   ├── academic-credentials/
│   │   │   ├── intellectual-property/
│   │   │   └── utilities/
│   │   └── whitepaper/         # Whitepaper page
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with mega menu
│   │   ├── Hero.tsx            # Hero section with live stats
│   │   ├── Features.tsx        # Feature cards
│   │   ├── HowItWorks.tsx      # How it works section
│   │   ├── Architecture.tsx    # Architecture diagram
│   │   ├── Products.tsx        # Product showcase
│   │   ├── X402Micropayment.tsx # X402 micropayment section
│   │   ├── UseCases.tsx        # Use cases overview
│   │   ├── Roadmap.tsx         # Development roadmap
│   │   ├── Archive.tsx         # Archive with filters
│   │   ├── Ecosystem.tsx       # GONO token section
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── CTA.tsx             # Call-to-action
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── Skeleton.tsx        # Loading state components
│   │   ├── Partners.tsx        # Partner logos
│   │   └── index.ts            # Component exports
│   ├── lib/
│   │   └── api.ts              # API client with types
│   └── public/                 # Static assets
│
├── backend/                     # Rust + Actix-web
│   ├── Cargo.toml              # Dependencies
```

---

## 🚀 Quick Start

### Prerequisites
# Gono Protocol Website

Provenance infrastructure messaging site for humans and AI.

Official repository: https://github.com/Meherajs/gono-protocol-website

## Baseline Snapshot (March 2026)

This commit is intended as a clean baseline for new developers.

Current website scope:
- `/` Home page (minimal product overview)
- `/whitepaper` Technical whitepaper page

Legacy pages were intentionally removed and permanently redirected to `/` in `frontend/next.config.ts`.

## Why This Baseline Matters

Historically, the frontend had a much larger multi-page marketing IA (use-cases, tools, docs placeholders, and many section components). This baseline preserves the simplified, production-safe foundation and documents the new direction.

Use this commit when you need to:
- understand the first stable "2-page" architecture
- diff against previous broad-scope marketing versions
- onboard quickly without legacy routing noise

## Tech Stack

Frontend:
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

Backend:
- Rust (Edition 2021)
- Actix Web

Infra:
- Vercel deployment (`vercel.json`)

## Engineering Principles

This repository follows these practical principles:

1. Scope discipline
- Keep product surface intentionally small unless expansion is explicitly approved.
- Avoid placeholder routes/pages that create maintenance debt.

2. Route safety and backward compatibility
- Remove retired pages from filesystem.
- Add permanent redirects for retired URLs to prevent broken links and SEO regressions.

3. Simplicity over premature abstraction
- Keep only actively used shared components.
- Remove dead exports and unused UI modules.

4. Verifiability
- Every structural refactor should pass lint and build before merge.
- Prefer deterministic changes that are easy to review via git diff.

5. Maintainability
- Keep docs aligned with real architecture (routes, stack, run steps).
- Favor clear naming and small, focused files.

6. User trust and ethical engineering
- Use transparent claims and avoid misleading product capabilities.
- Prioritize accessibility, clear navigation, and graceful handling of legacy links.

## Project Structure

```text
gono-protocol-website/
|-- frontend/
|   |-- app/
|   |   |-- page.tsx
|   |   `-- whitepaper/page.tsx
|   |-- components/
|   |   |-- Navbar.tsx
|   |   |-- Footer.tsx
|   |   `-- index.ts
|   `-- next.config.ts
|-- backend/
|   |-- Cargo.toml
|   `-- src/main.rs
|-- vercel.json
`-- README.md
```

## Local Development

Prerequisites:
- Node.js 18+
- npm 9+
- Rust stable

Run frontend:

```bash
cd frontend
npm install
npm run dev
```

Run backend:

```bash
cd backend
cargo run
```

## Frontend Routing Policy

Allowed internal routes:
- `/`
- `/whitepaper`

Any new route should be proposed with:
- purpose
- ownership
- test/validation plan
- navigation impact

