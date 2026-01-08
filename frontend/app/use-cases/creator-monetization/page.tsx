import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function CreatorMonetizationPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link 
                        href="/use-cases" 
                        className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6 uppercase tracking-wider">
                            Use Case A
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Creator Monetization & Intellectual Property
                        </h1>
                        <p className="text-xl text-gray-300">
                            Empowering content creators with proof of originality, transparent licensing, and direct payments
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-amber max-w-none">
                        {/* The Problem */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-4">The Problem</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Content creators (YouTubers, musicians, artists) face critical challenges:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>
                                    <strong className="text-white">No proof of originality</strong> — Easy for others to claim ownership of their work
                                </li>
                                <li>
                                    <strong className="text-white">Opaque licensing</strong> — When content is used by others (including AI systems), creators have no visibility
                                </li>
                                <li>
                                    <strong className="text-white">Payment friction</strong> — Complex intermediaries delay and reduce creator earnings
                                </li>
                                <li>
                                    <strong className="text-white">Fan trust deficit</strong> — Supporters who pre-fund projects have no guarantee of delivery
                                </li>
                            </ul>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-6">The Solution: Gono Protocol for Creator Provenance</h2>
                            
                            <div className="space-y-8">
                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Capture</h3>
                                    <p className="text-gray-300 mb-3">
                                        A creator registers their new content on Gono Protocol. As the content is produced, they:
                                    </p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Embed a C2PA content authenticity credential</li>
                                        <li>• Anchor a cryptographic record of the original file on-chain via ERC-7053</li>
                                        <li>• Issue limited digital access passes to fans as NFTs (promises of future content or perks)</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Certify</h3>
                                    <p className="text-gray-300 mb-3">
                                        When the promised content is released:
                                    </p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Gono Protocol automatically mints a verifiable receipt for each pass holder</li>
                                        <li>• If an AI agent licenses the content via x402 micropayment, the AI receives an on-chain usage certificate</li>
                                        <li>• Payments in stablecoins are routed directly to the creator</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Check</h3>
                                    <p className="text-gray-300 mb-3">
                                        Anyone can audit the complete history:
                                    </p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Inspect the content file's C2PA metadata</li>
                                        <li>• Cross-check on-chain records to verify original creator and timestamp</li>
                                        <li>• Confirm promised deliverables were provided to supporters</li>
                                        <li>• This provenance trail enhances creator credibility and protects fans</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Key Benefits */}
                        <section className="mb-12 bg-amber-500/5 border border-amber-500/20 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Benefits</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Proof of Originality:</strong>
                                        <span className="text-gray-300"> Immutable on-chain records</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Direct Payments:</strong>
                                        <span className="text-gray-300"> No intermediaries, instant settlement</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Transparent Licensing:</strong>
                                        <span className="text-gray-300"> Track all usage, including AI</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Fan Trust:</strong>
                                        <span className="text-gray-300"> Verifiable delivery guarantees</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center py-8">
                            <Link
                                href="/docs"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300"
                            >
                                Learn More in Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
