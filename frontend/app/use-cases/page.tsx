import { Navbar, Footer } from "@/components";
import Link from "next/link";
import Image from "next/image";

const useCases = [
    {
        id: "journalism",
        title: "Field Reporting & Transparent Journalism",
        category: "Gono Moncho",
        overview: "A complete decentralized ecosystem for verifiable journalism, built on the Gono Protocol blockchain. Empowering censorship-resistant publishing with privacy-preserving Zero-Knowledge Proofs.",
        date: "12.15.2025",
        image: "/images/use-cases/journalism.jpg", // Placeholder - will be replaced
    },
    {
        id: "deepfake-protection",
        title: "Deepfake Protection & Content Authenticity",
        category: "Content Verification",
        overview: "Creating an immutable registry of authentic content to combat the deepfake crisis. Prove what's REAL at the source with cryptographic verification.",
        date: "12.22.2025",
        image: "/images/use-cases/deepfake.jpg", // Placeholder - will be replaced
    },
    {
        id: "utilities",
        title: "Government & Utility Services",
        category: "Public Infrastructure",
        overview: "How BTRC, NEIR, and Electricity Providers can supercharge their services using blockchain provenance. Transparent, verifiable infrastructure for citizens.",
        date: "01.05.2026",
        image: "/images/use-cases/utilities.jpg", // Placeholder - will be replaced
    },
    {
        id: "news-verification",
        title: "Cross-Source News Verification",
        category: "isItTrue?",
        overview: "Harnessing the collective intelligence of global journalism through AI-powered aggregation, cross-source consensus scoring, and immutable blockchain provenance.",
        date: "12.12.2025",
        image: "/images/use-cases/news-verification.jpg", // Placeholder - will be replaced
    },
];

export default function UseCasesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6 uppercase tracking-wider">
                            Use Cases
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                            Real-World Applications
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover how Gono Protocol's Capture → Store → Verify → Certify → Check pipeline delivers value across multiple industries
                        </p>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {useCases.map((useCase) => (
                            <Link
                                key={useCase.id}
                                href={`/use-cases/${useCase.id}`}
                                className="group"
                            >
                                <div className="border border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:border-amber-500/50 h-full flex flex-col">
                                    {/* Content Section */}
                                    <div className="p-8 flex-grow">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 group-hover:text-amber-400 transition-colors">
                                            {useCase.title}
                                        </h2>

                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                                                    OVERVIEW
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {useCase.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image and Footer Section */}
                                    <div className="border-t border-gray-800 flex items-center justify-between p-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                USE CASES
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {useCase.date}
                                            </span>
                                        </div>
                                        
                                        {/* Placeholder for image - will be replaced with actual images */}
                                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                                            <span className="text-amber-500 text-xs">Image</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="mt-20 p-8 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                        <h2 className="text-2xl font-bold text-amber-400 mb-4">
                            Why Gono Protocol?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            All these use cases leverage Gono Protocol's core capabilities to transform physical assets, creative works, and journalistic output into trust-minimized, verifiable on-chain entities.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                <div>
                                    <strong className="text-white">ERC-7053 Provenance Rail:</strong>
                                    <span className="text-gray-400"> Immutable records for every transaction</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                <div>
                                    <strong className="text-white">Arweave Storage:</strong>
                                    <span className="text-gray-400"> Permanent, censorship-resistant archival</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                <div>
                                    <strong className="text-white">C2PA Integration:</strong>
                                    <span className="text-gray-400"> Verifiable content authenticity</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                <div>
                                    <strong className="text-white">x402 Micropayments:</strong>
                                    <span className="text-gray-400"> Seamless M2M and human payments</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                <div>
                                    <strong className="text-white">Witness Nodes:</strong>
                                    <span className="text-gray-400"> Staked attestors ensure verification</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                <div>
                                    <strong className="text-white">SANUB Trust Logic:</strong>
                                    <span className="text-gray-400"> Algorithmic credibility scoring</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
