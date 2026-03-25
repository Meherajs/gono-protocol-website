import Link from "next/link";
import { Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-16 sm:mb-20">
            <div className="inline-block px-4 py-2 bg-zinc-900/70 border border-zinc-700/50 rounded-full text-zinc-200 text-xs sm:text-sm uppercase tracking-[0.2em] mb-6">
              Gono Protocol
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Provenance infrastructure
              <span className="block gradient-text">for humans and AI</span>
            </h1>
            <p className="max-w-3xl mx-auto text-zinc-300 text-base sm:text-lg leading-relaxed">
              Build trust into digital media, data exchange, and autonomous transactions.
              Gono combines payment verification, immutable receipts, and content provenance
              into one professional protocol surface.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-4 mb-12 sm:mb-16">
            {[
              {
                title: "Capture",
                detail: "Generate cryptographic fingerprints and provenance metadata at origin.",
              },
              {
                title: "Certify",
                detail: "Anchor verification state on-chain as durable media receipts.",
              },
              {
                title: "Check",
                detail: "Audit authenticity and transaction history with transparent traceability.",
              },
            ].map((item) => (
              <article key={item.title} className="glass rounded-xl p-5 sm:p-6 border border-white/[0.08]">
                <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </section>

          <section className="glass rounded-2xl border border-white/[0.08] p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Read The Complete Technical Whitepaper</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Explore architecture, security assumptions, token utility, and protocol-level workflows
              in the full document.
            </p>
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Open Whitepaper
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
