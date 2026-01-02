# Numbers Protocol

> Provenance infrastructure for humans and AI

A full-stack recreation of the Numbers Protocol website built with **Next.js + Tailwind CSS** for the frontend and **Rust + Actix-web** for the backend API.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Rust](https://img.shields.io/badge/Rust-1.75+-orange)

## 🚀 Features

- **Modern Dark Theme** - Premium design with gradients, glassmorphism, and animations
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Fast Performance** - Server-side rendering with Next.js App Router
- **Type-Safe** - TypeScript frontend + Rust backend
- **API Ready** - RESTful endpoints for stats, features, and archive data

## 📁 Project Structure

```
numbers-protocol/
├── frontend/                 # Next.js + Tailwind CSS
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts
│   │   ├── page.tsx          # Main page
│   │   └── globals.css       # Custom styles
│   └── components/
│       ├── Navbar.tsx        # Navigation bar
│       ├── Hero.tsx          # Hero section
│       ├── Partners.tsx      # Partner logos
│       ├── Features.tsx      # Feature cards
│       ├── Products.tsx      # Product showcase
│       ├── Archive.tsx       # Archive section
│       ├── Ecosystem.tsx     # NUM token section
│       ├── CTA.tsx           # Call-to-action
│       └── Footer.tsx        # Footer
│
└── backend/                  # Rust + Actix-web
    ├── Cargo.toml            # Dependencies
    └── src/
        └── main.rs           # API server
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Rust** >= 1.75

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd numbers-protocol
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Build backend**
   ```bash
   cd ../backend
   cargo build
   ```

### Running the Application

**Terminal 1 - Backend (port 8080)**
```bash
cd backend
cargo run
```

**Terminal 2 - Frontend (port 3000)**
```bash
cd frontend
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/stats` | GET | Site statistics |
| `/api/features` | GET | Features data |
| `/api/archive` | GET | Archive items |

## 🎨 Design Features

- **Color Palette**: Dark theme with indigo/violet (#6366f1) and cyan (#22d3ee) accents
- **Typography**: Inter, Roboto Mono
- **Effects**: CSS gradients, glassmorphism, glow effects
- **Animations**: Fade-in on scroll, hover transitions, spinning elements

## 📦 Tech Stack

### Frontend
- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### Backend
- [Rust](https://www.rust-lang.org/) - Systems programming
- [Actix-web](https://actix.rs/) - Web framework
- [Serde](https://serde.rs/) - Serialization

## 📄 License

This project is for educational purposes. The original design belongs to [Numbers Protocol](https://numbersprotocol.io/).

---

Built with ❤️ using Next.js, Tailwind CSS, and Rust
