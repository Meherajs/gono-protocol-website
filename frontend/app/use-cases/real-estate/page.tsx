import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function RealEstatePage() {
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
                            Use Case B
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Real Estate Rental & Asset Verification
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Transforming property management with verifiable records and transparent revenue distribution
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
                                Real estate transactions and rentals suffer from:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>
                                    <strong className="text-white">No verifiable property history</strong> — Condition, maintenance, and incident records are scattered
                                </li>
                                <li>
                                    <strong className="text-white">Trust issues between parties</strong> — Renters, owners, and managers dispute conditions and deposits
                                </li>
                                <li>
                                    <strong className="text-white">Opaque revenue distribution</strong> — Investors in rental properties can't verify earnings
                                </li>
                                <li>
                                    <strong className="text-white">Manual, error-prone processes</strong> — Paperwork, manual escrow, and after-the-fact audits
                                </li>
                            </ul>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-6">The Solution: Gono Protocol for Real Estate Provenance</h2>
                            
                            <div className="space-y-8">
                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Capture</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• A property is linked to a digital-twin NFT referencing the legal trust's cap table</li>
                                        <li>• Property manager uses TrustLens-like tools to capture verifiable condition photos with C2PA credentials</li>
                                        <li>• Photos are anchored on-chain via ERC-7053 as part of the asset's provenance profile</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Certify</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• At check-in, a GONO-staked witness node verifies identity and property condition</li>
                                        <li>• Witness uploads signed attestation with C2PA-tagged photos linked to rental credential</li>
                                        <li>• Key events are appended as signed, timestamped credentials:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>- Payment receipt</li>
                                                <li>- Rental credential</li>
                                                <li>- Check-in/check-out reports</li>
                                                <li>- Deposit escrow and refund/withhold decisions</li>
                                            </ul>
                                        </li>
                                        <li>• Revenue splits execute automatically according to the trust schedule</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-amber-500 mb-3">Check</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Investors and auditors inspect the Gono Protocol timeline to see every booking, payment, and payout</li>
                                        <li>• Renters have provable deposit and refund records backed by witness attestations</li>
                                        <li>• Complete rental history (occupancy, incidents, income) is instantly available for refinancing or sale</li>
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
                                        <strong className="text-white">Verifiable History:</strong>
                                        <span className="text-gray-300"> Complete property timeline</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Automated Revenue:</strong>
                                        <span className="text-gray-300"> Smart contract distribution</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Dispute Resolution:</strong>
                                        <span className="text-gray-300"> Timestamped photo evidence</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-amber-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Instant Audits:</strong>
                                        <span className="text-gray-300"> Real-time financial reporting</span>
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
