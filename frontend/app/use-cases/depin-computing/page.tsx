import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function DePINComputingPage() {
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
                            Use Case C
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Decentralized GPU Computing Infrastructure
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Trust-minimized physical infrastructure with proof of service delivery and transparent revenue distribution
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            Author: Jonayet Hossain
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-amber max-w-none">
                        {/* The Problem */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-4">The Problem</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Decentralized physical infrastructure (DePIN) projects face:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>
                                    <strong className="text-white">No proof of service delivery</strong> — Investors can't verify that compute resources are actually being used
                                </li>
                                <li>
                                    <strong className="text-white">Opaque revenue distribution</strong> — Capital providers don't know if they're receiving fair payouts
                                </li>
                                <li>
                                    <strong className="text-white">Trust deficit for new backers</strong> — No auditable history to perform due diligence
                                </li>
                                <li>
                                    <strong className="text-white">Dispute resolution</strong> — No verifiable record of what services were actually provided
                                </li>
                            </ul>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-6">The Solution: Gono Protocol for DePIN Provenance</h2>
                            
                            <div className="space-y-8">
                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Capture</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• A group of investors sponsors a decentralized GPU computing center</li>
                                        <li>• The facility is represented on Gono Protocol by an NFT (digital twin of physical GPUs)</li>
                                        <li>• The NFT encodes investors' rights to a portion of revenue</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Certify</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Clients submit compute jobs and pay in stablecoins</li>
                                        <li>• Upon payment, the platform schedules the task</li>
                                        <li>• When completed, a usage certificate NFT is issued</li>
                                        <li>• Payment is routed into an on-chain revenue-split contract</li>
                                        <li>• Investors automatically receive their share in stablecoins</li>
                                        <li>• Witness nodes attest that computing service was delivered, logging verification of GPU utilization</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Check</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Any investor can verify GPU performance: tasks run, revenue earned, correct payouts received</li>
                                        <li>• Cumulative on-chain data becomes an auditable financial statement</li>
                                        <li>• New potential backers can check history for due diligence</li>
                                        <li>• Physical hardware becomes a trust-minimized, revenue-generating on-chain asset</li>
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
                                        <strong className="text-white">Proof of Service:</strong>
                                        <span className="text-gray-300"> Verifiable compute delivery</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Automated Payouts:</strong>
                                        <span className="text-gray-300"> Fair revenue distribution</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Auditable History:</strong>
                                        <span className="text-gray-300"> Complete performance timeline</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Trust-Minimized:</strong>
                                        <span className="text-gray-300"> Physical assets on-chain</span>
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
