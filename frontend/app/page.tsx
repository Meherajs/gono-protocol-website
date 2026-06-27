"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Box,
  CircleDashed,
  FileBadge2,
  Layers3,
  LockKeyhole,
  Newspaper,
  Orbit,
  ScanSearch,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Footer, HomeBackground, Navbar, Reveal } from "@/components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const FEATURE_CARDS = [
  {
    title: "Content Provenance",
    description: "Immutable receipts connect authorship, chain-of-custody, and media metadata from the first capture event onward.",
    icon: FileBadge2,
    accent: "Proof Layer",
  },
  {
    title: "Modular Pallets",
    description: "Compose storage, attestations, privacy, and payment services as interoperable modules rather than one monolithic stack.",
    icon: Layers3,
    accent: "Composable Services",
  },
  {
    title: "Zero-Knowledge Privacy",
    description: "Enable sensitive verification flows without disclosing identities, sources, locations, or operational context.",
    icon: LockKeyhole,
    accent: "Selective Disclosure",
  },
  {
    title: "AI-Native Micropayments",
    description: "Settle machine-to-machine requests with programmable payment rails designed for agents, APIs, and autonomous buyers.",
    icon: WalletCards,
    accent: "Settlement Rail",
  },
];

const ARCHITECTURE_LAYERS = [
  {
    title: "Security Layer",
    description: "Shared validator trust, cryptoeconomic guarantees, and durable finality secure every downstream module.",
    note: "Shared trust foundation",
    tone: "architecture-card--security",
    offset: "architecture-card--offset-0",
  },
  {
    title: "Core Execution Rail",
    description: "Canonical receipts, protocol state, and settlement logic keep provenance consistent across applications and markets.",
    note: "Canonical execution",
    tone: "architecture-card--core",
    offset: "architecture-card--offset-1",
  },
  {
    title: "Modular Service Pallets",
    description: "Plug in storage, verification, privacy, identity, and micropayment services as composable protocol primitives.",
    note: "Composable modules",
    tone: "architecture-card--module",
    offset: "architecture-card--offset-2",
  },
  {
    title: "Application Layer",
    description: "Media systems, asset registries, AI marketplaces, and high-trust workflows inherit a common verifiable base layer.",
    note: "Builders and operators",
    tone: "architecture-card--application",
    offset: "architecture-card--offset-3",
  },
];

const USE_CASES = [
  {
    title: "Journalism and Media Verification",
    description: "Anchor capture metadata, editorial handoffs, and publication receipts so audiences and platforms can verify origin with confidence.",
    icon: Newspaper,
  },
  {
    title: "Digital Asset Tracking",
    description: "Maintain auditable histories for content, collectibles, and tokenized records across issuance, custody, and downstream distribution.",
    icon: Box,
  },
  {
    title: "AI Agent Commerce",
    description: "Power machine-native licensing, retrieval, and payment flows where autonomous agents can buy, verify, and settle in one motion.",
    icon: Bot,
  },
  {
    title: "Private Verification Workflows",
    description: "Let institutions prove legitimacy, compliance, or source integrity without exposing the underlying sensitive data.",
    icon: ShieldCheck,
  },
];

const ROADMAP_PHASES = [
  {
    phase: "Phase 01",
    title: "Foundation",
    description: "Establish the execution rail, core receipt model, and developer primitives for trusted media provenance.",
  },
  {
    phase: "Phase 02",
    title: "Protocol Expansion",
    description: "Introduce modular pallets for storage, privacy, attestations, and micropayment orchestration across diverse workflows.",
  },
  {
    phase: "Phase 03",
    title: "Ecosystem Launch",
    description: "Open the network to application teams, data partners, and community operators building on top of the protocol stack.",
  },
];

const HERO_TAGS = ["Media Provenance", "Programmable Privacy", "Autonomous Settlement"];
const HERO_CHIPS = [
  { label: "C2PA", className: "hero-visual__chip--one" },
  { label: "zk Proofs", className: "hero-visual__chip--two" },
  { label: "x402", className: "hero-visual__chip--three" },
  { label: "Receipts", className: "hero-visual__chip--four" },
];

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Hero Parallax effect
    gsap.to(".hero-visual", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".hero-text-content", {
      y: -50,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Roadmap cards overlapping/stacking storytelling effect
    const roadmapCards = gsap.utils.toArray(".roadmap-card-anim") as HTMLElement[];
    roadmapCards.forEach((card, i) => {
      if (i === 0) return; // skip first
      gsap.fromTo(card, 
        { y: 100, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });

  }, { scope: container });

  return (
    <div className="home-page" ref={container}>
      <div className="home-page__surface">
        <Navbar />

        <main className="home-page__content">
          <section className="hero-section home-hero-section px-4 sm:px-6 lg:px-8">
            <div className="home-hero-section__background" aria-hidden="true">
              <HomeBackground />
              <div className="home-page__overlay" />
            </div>
            <div className="hero-section__backdrop" aria-hidden="true" />
            <div className="home-hero-section__text-glow" aria-hidden="true" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
              <div className="relative z-10 hero-text-content">
                <h1 className="hero-enter mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  A Modular Blockchain Infrastructure for{" "}
                  <span className="gradient-text">Verifiable Media and Autonomous Commerce</span>
                </h1>

                <p className="hero-enter mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg" style={{ animationDelay: "0.2s" }}>
                  Gono Protocol provides a secure, modular rail for media provenance,
                  verification, storage, privacy, and machine-to-machine payments, giving
                  builders a trusted base layer for credible content and programmable commerce.
                </p>

                <div className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.32s" }}>
                  <Link href="/architecture" className="button-primary">
                    Explore the Protocol
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/whitepaper" className="button-secondary">
                    Read Whitepaper
                  </Link>
                </div>

                <div className="hero-enter mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.42s" }}>
                  {HERO_TAGS.map((tag) => (
                    <span key={tag} className="hero-tag">{tag}</span>
                  ))}
                </div>

                <div className="hero-enter mt-10 grid gap-4 sm:grid-cols-3" style={{ animationDelay: "0.52s" }}>
                  <div className="metric-card">
                    <span className="metric-card__label">Trust Rail</span>
                    <p>Receipts, attestations, and settlement designed for auditable digital systems.</p>
                  </div>
                  <div className="metric-card">
                    <span className="metric-card__label">Composable</span>
                    <p>Adopt only the protocol modules your workflow needs, without architecture bloat.</p>
                  </div>
                  <div className="metric-card">
                    <span className="metric-card__label">AI Ready</span>
                    <p>Support machine buyers, private verification, and micropayments on the same rail.</p>
                  </div>
                </div>
              </div>

              <div className="hero-enter relative z-10 lg:justify-self-end" style={{ animationDelay: "0.22s" }}>
                <div className="hero-visual">
                  <div className="hero-visual__halo hero-visual__halo--one" aria-hidden="true" />
                  <div className="hero-visual__halo hero-visual__halo--two" aria-hidden="true" />
                  <div className="hero-visual__beam hero-visual__beam--one" aria-hidden="true" />
                  <div className="hero-visual__beam hero-visual__beam--two" aria-hidden="true" />
                  <div className="hero-visual__beam hero-visual__beam--three" aria-hidden="true" />
                  <div className="hero-visual__beam hero-visual__beam--four" aria-hidden="true" />

                  <div className="hero-visual__ring hero-visual__ring--outer" aria-hidden="true">
                    <span className="hero-visual__node hero-visual__node--one" />
                    <span className="hero-visual__node hero-visual__node--two" />
                  </div>
                  <div className="hero-visual__ring hero-visual__ring--middle" aria-hidden="true">
                    <span className="hero-visual__node hero-visual__node--three" />
                    <span className="hero-visual__node hero-visual__node--four" />
                  </div>
                  <div className="hero-visual__ring hero-visual__ring--inner" aria-hidden="true">
                    <span className="hero-visual__node hero-visual__node--five" />
                  </div>

                  {HERO_CHIPS.map((chip) => (
                    <div key={chip.label} className={`hero-visual__chip ${chip.className}`}>
                      {chip.label}
                    </div>
                  ))}

                  <div className="hero-visual__core">
                    <div className="hero-visual__core-card" style={{ animation: "pulse-soft 4s ease-in-out infinite" }}>
                      <div className="hero-visual__eyebrow">
                        <Orbit className="h-4 w-4" />
                        Gono Core Rail
                      </div>
                      <h2 className="hero-visual__title">
                        Verifiable execution for media, privacy, and payments
                      </h2>
                      <div className="hero-visual__badges">
                        <span>Proof</span>
                        <span>Privacy</span>
                        <span>Settlement</span>
                      </div>
                    </div>
                  </div>

                  <div className="hero-visual__signature">
                    <CircleDashed className="h-4 w-4" />
                    Layered, trusted, machine-native
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 relative z-10">
            <div className="mx-auto max-w-7xl">
              <div className="section-heading">
                <Reveal direction="up" distance={20} delay={0}>
                  <p className="section-kicker">Core Capabilities</p>
                </Reveal>
                <Reveal direction="up" distance={20} delay={100}>
                  <h2 className="section-title">A premium protocol surface built around trust and modularity</h2>
                </Reveal>
                <Reveal direction="up" distance={20} delay={200}>
                  <p className="section-copy">
                    The protocol is designed to feel focused, not overloaded: every layer exists
                    to strengthen provenance, privacy, and composable digital commerce.
                  </p>
                </Reveal>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {FEATURE_CARDS.map((feature, index) => (
                  <Reveal key={feature.title} delay={index * 100} direction="up" distance={20}>
                    <article className="feature-card">
                      <div className="feature-card__shine" aria-hidden="true" />
                      <div className="feature-card__icon">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <p className="feature-card__accent">{feature.accent}</p>
                      <h3 className="feature-card__title">{feature.title}</h3>
                      <p className="feature-card__description">{feature.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="architecture" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 relative z-10">
            <div className="mx-auto max-w-7xl">
              <div className="section-shell">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start relative">
                  <div className="architecture-sticky-content sticky top-32 self-start h-fit mb-12 lg:mb-0">
                    <Reveal direction="up" distance={20} delay={0}>
                      <p className="section-kicker">Architecture Preview</p>
                    </Reveal>
                    <Reveal direction="up" distance={20} delay={100}>
                      <h2 className="section-title">
                        A layered stack that keeps the protocol elegant at every altitude
                      </h2>
                    </Reveal>
                    <Reveal direction="up" distance={20} delay={200}>
                      <p className="section-copy">
                        Gono is structured as a clear vertical flow: security at the base,
                        canonical execution in the center, modular pallets above it, and
                        applications on top. The result is composable infrastructure without
                        technical clutter.
                      </p>
                    </Reveal>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <Reveal direction="up" distance={20} delay={300}>
                        <div className="info-panel">
                          <ScanSearch className="h-5 w-5 text-[var(--accent-cyan)]" />
                          <div>
                            <h3>Unified provenance</h3>
                            <p>Every application inherits the same trusted receipt and verification model.</p>
                          </div>
                        </div>
                      </Reveal>

                      <Reveal direction="up" distance={20} delay={400}>
                        <div className="info-panel">
                          <Layers3 className="h-5 w-5 text-[var(--accent-blue)]" />
                          <div>
                            <h3>Composed by modules</h3>
                            <p>Builders can add services incrementally rather than adopting a rigid full stack.</p>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>

                  <div className="architecture-flow flex flex-col gap-8">
                    {ARCHITECTURE_LAYERS.map((layer, index) => (
                      <article key={layer.title} className={`architecture-card ${layer.tone} ${layer.offset}`}>
                        <p className="architecture-card__note">{layer.note}</p>
                        <h3 className="architecture-card__title">{layer.title}</h3>
                        <p className="architecture-card__description">{layer.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="use-cases" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 relative z-10">
            <div className="mx-auto max-w-7xl">
              <div className="section-heading">
                <Reveal direction="up" distance={20} delay={0}>
                  <p className="section-kicker">Use Cases</p>
                </Reveal>
                <Reveal direction="up" distance={20} delay={100}>
                  <h2 className="section-title">Built for practical, high-trust digital workflows</h2>
                </Reveal>
                <Reveal direction="up" distance={20} delay={200}>
                  <p className="section-copy">
                    From public media verification to private machine commerce, Gono supports
                    applications where verifiability is part of the product itself.
                  </p>
                </Reveal>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {USE_CASES.map((useCase, index) => (
                  <Reveal key={useCase.title} delay={index * 100} direction="up" distance={20}>
                    <article className="use-case-card">
                      <div className="use-case-card__icon">
                        <useCase.icon className="h-5 w-5" />
                      </div>
                      <h3 className="use-case-card__title">{useCase.title}</h3>
                      <p className="use-case-card__description">{useCase.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="roadmap" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 relative z-10">
            <div className="mx-auto max-w-7xl flex flex-col items-center">
              <div className="section-shell w-full max-w-4xl">
                <div className="section-heading text-center">
                  <Reveal direction="up" distance={20} delay={0}>
                    <p className="section-kicker">Roadmap</p>
                  </Reveal>
                  <Reveal direction="up" distance={20} delay={100}>
                    <h2 className="section-title">A measured path from core rails to network effects</h2>
                  </Reveal>
                  <Reveal direction="up" distance={20} delay={200}>
                    <p className="section-copy mx-auto">
                      The rollout stays disciplined: establish the protocol base, expand the
                      modular surface, then open the ecosystem to builders and operators.
                    </p>
                  </Reveal>
                </div>

                <div className="roadmap-grid mt-24 relative flex flex-col gap-6 w-full">
                  {ROADMAP_PHASES.map((phase, index) => (
                    <article key={phase.title} className="roadmap-card roadmap-card-anim sticky top-32 z-10 origin-top shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                      <p className="roadmap-card__phase">{phase.phase}</p>
                      <h3 className="roadmap-card__title">{phase.title}</h3>
                      <p className="roadmap-card__description">{phase.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="community" className="px-4 pb-20 pt-12 sm:px-6 sm:pb-24 lg:px-8 relative z-10">
            <div className="mx-auto max-w-7xl">
              <div className="cta-shell">
                <Reveal direction="up" distance={20} delay={0}>
                  <p className="section-kicker">Join the Ecosystem</p>
                </Reveal>
                <Reveal direction="up" distance={20} delay={100}>
                  <h2 className="section-title max-w-4xl">
                    Build trust into digital media and autonomous commerce.
                  </h2>
                </Reveal>
                <Reveal direction="up" distance={20} delay={200}>
                  <p className="section-copy max-w-2xl">
                    Discover the protocol vision, follow the architecture, and prepare for the
                    next generation of high-integrity applications.
                  </p>
                </Reveal>

                <Reveal direction="up" distance={20} delay={300}>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a href="#" className="button-primary">
                      Join the Ecosystem
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/whitepaper" className="button-secondary">
                      Read Whitepaper
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
