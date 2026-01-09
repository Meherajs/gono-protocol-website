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
│   └── src/
│       └── main.rs             # API server with 7 endpoints
│
├── vercel.json                 # Vercel deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | >= 18.x |
| npm | >= 9.x |
| Rust | >= 1.75 (edition 2021) |

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gono-protocol

# Install frontend dependencies
cd frontend && npm install

# Build backend
cd ../backend && cargo build --release
```

### Running the Application

Open **two terminals**:

**Terminal 1 - Backend (port 8080)**
```bash
cd backend
RUST_LOG=info cargo run
```

**Terminal 2 - Frontend (port 3000)**
```bash
cd frontend
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🌐 Available Pages

| Route | Description |
|-------|-------------|
| `/` | Main homepage with all sections |
| `/about` | About Gono Protocol |
| `/archive` | Content archive |
| `/build` | Build with Gono |
| `/careers` | Career opportunities |
| `/docs` | Documentation |
| `/staking` | GONO token staking |
| `/tools` | Developer tools |
| `/whitepaper` | Technical whitepaper |
| `/use-cases` | Use cases overview |
| `/use-cases/journalism` | Gono Moncho - Journalist protection |
| `/use-cases/news-verification` | Cross-source news verification |
| `/use-cases/deepfake-protection` | AI deepfake protection |
| `/use-cases/voting-integrity` | Voting integrity solution |
| `/use-cases/academic-credentials` | Academic credential verification |
| `/use-cases/intellectual-property` | IP protection |
| `/use-cases/utilities` | Utility applications |

---

## 📡 API Reference

All endpoints return structured JSON:
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2024-01-15T09:42:33Z"
}
```

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check with uptime |
| `/api/stats` | GET | Site statistics (assets, users, partners) |
| `/api/features` | GET | List of platform features |
| `/api/archive` | GET | Archived content items |
| `/api/partners` | GET | Partner organizations |
| `/api/products` | GET | Product catalog |
| `/api/token` | GET | GONO token information |

**Example:**
```bash
curl http://localhost:8080/api/stats
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0a0a0a` | Page background |
| `--primary` | `#6366f1` | Indigo accent |
| `--secondary` | `#22d3ee` | Cyan accent |
| `--accent-green` | `#34d399` | Success states |

### Typography

- **Body**: Inter
- **Mono**: Roboto Mono
- **Display**: System serif (for italics)

### Effects

- **Glassmorphism**: `glass` utility class
- **Gradients**: `gradient-primary`, `gradient-secondary`
- **Glow**: `glow`, `glow-sm`
- **Animations**: `animate-float`, `animate-pulse-glow`, `animate-fade-in-up`

---

## 🛠️ Development

### Frontend Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend Commands

```bash
cargo run              # Development mode
cargo build --release  # Production build
cargo test             # Run tests
cargo clippy           # Lint code
```

### Environment Variables

Create a `.env.local` in the frontend:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## � Deployment

### Vercel (Frontend)

The project includes a `vercel.json` configuration for seamless deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

Simply connect your repository to Vercel for automatic deployments.

---

## �📦 Tech Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Frontend | Next.js | 16.1.1 | React framework with App Router |
| UI Library | React | 19.2.3 | Component-based UI |
| Styling | Tailwind CSS | 4.x | Utility-first CSS |
| Language | TypeScript | 5.x | Type safety |
| Backend | Rust | 2021 Edition | Systems programming |
| Server | Actix-web | 4.x | High-performance web framework |
| Serialization | Serde | 1.0 | JSON handling |
| Deployment | Vercel | - | Frontend hosting |

---

## 📄 License

---

<p align="center">
  Built with ❤️ using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Rust</strong>
</p>
