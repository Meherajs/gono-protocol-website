import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
    title: "About Us | Gono Protocol - Building Trust in the Digital Age",
    description: "Two students from MBSTU, Bangladesh, building the future of digital provenance. Our mission to restore trust, transparency, and truth through blockchain technology.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
                {/* Back Button */}
                <div className="fixed top-24 left-4 sm:left-6 z-50">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-zinc-400 hover:text-white hover:border-amber-500/50 transition-all group"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                </div>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-full max-w-[200vw] h-full bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.15)_0%,transparent_70%)] opacity-60" />
                        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]" />
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
                        {/* Badge */}
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-zinc-400 group hover:border-amber-500/50 transition-colors">
                                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-glow" />
                                <span>About Gono Protocol</span>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                            <span className="block mb-2">Building Trust in the</span>
                            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                                Digital Age
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto">
                            Two students. One vision. A revolution in digital provenance.
                        </p>

                        {/* Opening Story */}
                        <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
                            <p>
                                From a university classroom in Tangail, Bangladesh, to building the future of digital trust—
                                Gono Protocol began with a simple question: <strong className="text-white">In a world where AI can fake anything,
                                    how do we prove what's real?</strong>
                            </p>

                            <p>
                                We are two students from <strong className="text-amber-400">Mawlana Bhashani Science and Technology University (MBSTU)</strong>,
                                united by a shared belief that blockchain technology can restore truth, transparency,
                                and trust to the digital world. What started as a learning journey has evolved into
                                something far greater—a mission to create infrastructure that ensures every piece of
                                content, every asset, and every transaction carries an immutable record of its origin.
                            </p>

                            <p>
                                Gono Protocol is more than code. It's our commitment to a future where creators own
                                their work, journalists can prove their stories, and communities can verify truth
                                without intermediaries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-16 sm:py-24 bg-[#111111] overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                            {/* Mission */}
                            <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 glass-hover transition-all hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
                                        🎯
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
                                </div>
                                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
                                    To build the world's most accessible provenance infrastructure—empowering humans and
                                    AI to verify, trust, and transact with confidence.
                                </p>
                                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                                    We believe that in the age of deepfakes, content theft, and opaque systems, provenance
                                    isn't just a feature—it's a fundamental right. Every creator deserves attribution.
                                    Every user deserves truth. Every transaction deserves transparency.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 glass-hover transition-all hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl">
                                        🔮
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
                                </div>
                                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
                                    A world where:
                                </p>
                                <ul className="space-y-3 text-sm sm:text-base text-zinc-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 mt-1">•</span>
                                        <span>Every digital asset carries an unbreakable chain of custody</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 mt-1">•</span>
                                        <span>Creators are fairly compensated for their work—automatically</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 mt-1">•</span>
                                        <span>Journalists can prove their stories without fear</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 mt-1">•</span>
                                        <span>Communities can audit institutions in real-time</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-amber-400 mt-1">•</span>
                                        <span>Trust is built on mathematics, not promises</span>
                                    </li>
                                </ul>
                                <p className="text-sm sm:text-base text-zinc-300 mt-6 italic">
                                    We're building the rails for this future, one block at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Started Section */}
                <section className="py-16 sm:py-24 overflow-hidden relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent pointer-events-none"></div>

                    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent">
                                Why We Started
                            </h2>
                            <p className="text-xl sm:text-2xl text-zinc-400">
                                The Problem We Saw
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
                            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
                                As students diving deep into blockchain technology, we witnessed a growing crisis:
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: '🚨', text: 'AI systems scraping content without attribution' },
                                    { icon: '🚨', text: 'Creators losing revenue to platforms and algorithms' },
                                    { icon: '🚨', text: 'Journalists struggling to prove authenticity in conflict zones' },
                                    { icon: '🚨', text: 'Communities unable to verify where their money goes' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                        <p className="text-sm sm:text-base text-zinc-300 mt-1">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                                <p>
                                    Traditional solutions weren't enough. Centralized platforms control the narrative.
                                    Manual verification doesn't scale. Legal systems move too slowly for the internet age.
                                </p>

                                <p className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    We realized blockchain could solve this—but only if it was modular, accessible,
                                    and built on open standards.
                                </p>

                                <p className="text-white font-bold text-xl sm:text-2xl">
                                    That's why we created Gono Protocol.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Road Ahead Section */}
                <section className="py-16 sm:py-24 bg-[#111111] overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                                The Road Ahead
                            </h2>
                            <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto">
                                We're just getting started.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-center">
                                Gono Protocol is live, but our vision is far from complete. We're working on:
                            </p>

                            {/* Roadmap Cards */}
                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                {[
                                    {
                                        icon: '🔗',
                                        title: 'Parachain Integration',
                                        description: 'Integration with Polkadot for enterprise-grade security',
                                        color: 'from-indigo-500 to-purple-600'
                                    },
                                    {
                                        icon: '💰',
                                        title: 'x402 SDK',
                                        description: 'Seamless micropayments between humans and AI',
                                        color: 'from-cyan-500 to-blue-600'
                                    },
                                    {
                                        icon: '📱',
                                        title: 'Mobile Apps',
                                        description: 'Capturing provenance anywhere, anytime',
                                        color: 'from-amber-500 to-orange-600'
                                    },
                                    {
                                        icon: '🤝',
                                        title: 'Strategic Partnerships',
                                        description: 'Newsrooms, creative platforms, and DePIN networks',
                                        color: 'from-emerald-500 to-green-600'
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="glass rounded-xl p-6 glass-hover transition-all hover:-translate-y-1">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-400">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Closing Message */}
                            <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 mt-8 sm:mt-12">
                                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
                                    Every milestone brings us closer to a world where trust is the default, not the exception.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                                        But we can't do it alone. We need:
                                    </p>
                                    <ul className="space-y-3 text-sm sm:text-base text-zinc-400">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">•</span>
                                            <span>Developers to build with our protocol</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">•</span>
                                            <span>Organizations to pilot real-world use cases</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">•</span>
                                            <span>Community members to govern the future</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">•</span>
                                            <span>Believers who share our vision</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center border-t border-white/[0.08] pt-8">
                                    <p className="text-lg sm:text-xl text-white font-semibold mb-4">
                                        If you're reading this, you're early.
                                    </p>
                                    <p className="text-base sm:text-lg text-amber-400 font-bold">
                                        And the early believers shape the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-orange-950/20 to-amber-950/20 pointer-events-none"></div>

                    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Join the Revolution
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                            We're two students from Bangladesh who believe code can change the world.
                            We don't have Silicon Valley funding. We don't have decades of experience.
                            What we have is conviction, curiosity, and a commitment to building something that matters.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a
                                href="/whitepaper"
                                className="w-full sm:w-auto gradient-primary px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 transition-all glow-sm group"
                            >
                                Read Whitepaper
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Meherajs/gono-protocol-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium glass glass-hover transition-all hover:scale-105 text-center"
                            >
                                View on GitHub
                            </a>
                        </div>

                        <p className="text-xl sm:text-2xl text-amber-400 font-bold">
                            Let's build the future of trust. Together.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
