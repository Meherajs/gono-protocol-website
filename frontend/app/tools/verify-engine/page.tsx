"use client";

import { Navbar, Footer } from "@/components";
import { useState } from "react";

export default function VerifyEnginePage() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState<"nid" | "address" | "image">("nid");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchValue.trim()) return;

        setIsSearching(true);
        // Simulate search - in real implementation, this would query the blockchain
        setTimeout(() => {
            setIsSearching(false);
            // Show results or "not found" message
        }, 1500);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 sm:py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                                <span className="text-2xl">🔍</span>
                                <span className="text-sm font-medium text-emerald-400">Verify Engine</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                                Verify Digital Content
                            </h1>
                            
                            <p className="text-xl sm:text-2xl text-zinc-400 mb-4">
                                Instant Blockchain Verification
                            </p>
                            
                            <p className="text-base sm:text-lg text-zinc-500 max-w-3xl mx-auto">
                                Search by Content ID, wallet address, or upload an image to verify its authenticity 
                                and view complete provenance history stored on the Gono Protocol blockchain.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-8 sm:py-12">
                    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="glass rounded-2xl p-6 sm:p-8 border border-zinc-800">
                            {/* Search Type Selector */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <button
                                    onClick={() => setSearchType("nid")}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                        searchType === "nid"
                                            ? "bg-emerald-500 text-white"
                                            : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                    }`}
                                >
                                    Content NID
                                </button>
                                <button
                                    onClick={() => setSearchType("address")}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                        searchType === "address"
                                            ? "bg-emerald-500 text-white"
                                            : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                    }`}
                                >
                                    Wallet Address
                                </button>
                                <button
                                    onClick={() => setSearchType("image")}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                        searchType === "image"
                                            ? "bg-emerald-500 text-white"
                                            : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                    }`}
                                >
                                    Upload Image
                                </button>
                            </div>

                            {/* Search Form */}
                            {searchType !== "image" ? (
                                <form onSubmit={handleSearch} className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={searchValue}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            placeholder={
                                                searchType === "nid"
                                                    ? "Enter Content NID (e.g., 0x7f3d...8e2a)"
                                                    : "Enter wallet address (e.g., 0x742d...B2f5)"
                                            }
                                            className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-all"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!searchValue.trim() || isSearching}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSearching ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Searching...
                                                </span>
                                            ) : (
                                                "Search"
                                            )}
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Searching the Gono Protocol blockchain for registered content</span>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-4">
                                    <div className="border-2 border-dashed border-zinc-700 rounded-xl p-12 text-center hover:border-emerald-500/50 transition-all cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id="image-upload"
                                        />
                                        <label htmlFor="image-upload" className="cursor-pointer">
                                            <div className="text-5xl mb-4">📸</div>
                                            <h3 className="text-xl font-bold text-white mb-2">Click to Upload Image</h3>
                                            <p className="text-zinc-400">or drag and drop</p>
                                            <p className="text-sm text-zinc-500 mt-2">PNG, JPG, WEBP up to 10MB</p>
                                        </label>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Your image is hashed locally - original file never leaves your device</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Coming Soon Notice */}
                        <div className="mt-8 text-center">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                                <span className="text-2xl">⚠️</span>
                                <span className="text-lg font-semibold text-emerald-400">Feature in Development</span>
                            </div>
                            <p className="text-zinc-500 mt-4">
                                Verify Engine will be available once the Gono Protocol testnet launches in Q2 2026
                            </p>
                        </div>
                    </div>
                </section>

                {/* What You Can Verify */}
                <section className="py-16 sm:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                                What You Can Verify
                            </h2>
                            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                                Access complete provenance data stored immutably on the blockchain
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">📋</div>
                                <h3 className="text-xl font-bold text-white mb-3">Content Metadata</h3>
                                <ul className="space-y-2 text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Creation timestamp
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Original creator
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Device fingerprint
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        GPS location
                                    </li>
                                </ul>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🔐</div>
                                <h3 className="text-xl font-bold text-white mb-3">Cryptographic Proof</h3>
                                <ul className="space-y-2 text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Content hash (SHA-256)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Digital signature
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        C2PA manifest
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Blockchain transaction
                                    </li>
                                </ul>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">📜</div>
                                <h3 className="text-xl font-bold text-white mb-3">Provenance History</h3>
                                <ul className="space-y-2 text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Edit history
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Ownership transfers
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        License changes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Attribution chain
                                    </li>
                                </ul>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">👤</div>
                                <h3 className="text-xl font-bold text-white mb-3">Creator Profile</h3>
                                <ul className="space-y-2 text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Verified identity
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Content portfolio
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Reputation score
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Social links
                                    </li>
                                </ul>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-3">AI Detection</h3>
                                <ul className="space-y-2 text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Deepfake analysis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Manipulation detection
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        AI generation markers
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Confidence scores
                                    </li>
                                </ul>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">⚖️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Legal Status</h3>
                                <ul className="space-y-2 text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Copyright info
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        License type
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        Usage rights
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">•</span>
                                        DMCA claims
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 sm:py-20">
                    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                                Who Uses Verify Engine?
                            </h2>
                            <p className="text-lg text-zinc-400">
                                Essential tool for anyone who needs to verify digital content authenticity
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📰</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Journalists & Media</h3>
                                        <p className="text-zinc-400">
                                            Verify sources and images before publication to maintain credibility and avoid misinformation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🏛️</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Legal Professionals</h3>
                                        <p className="text-zinc-400">
                                            Authenticate photographic evidence and establish chain of custody for court cases.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🛡️</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Fact Checkers</h3>
                                        <p className="text-zinc-400">
                                            Quickly determine if viral images are authentic or manipulated to combat fake news.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">🎨</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Content Creators</h3>
                                        <p className="text-zinc-400">
                                            Protect your work and prove ownership when content is stolen or used without permission.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                            Start Verifying Soon
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Verify Engine will launch with our testnet. Learn more about the Gono Protocol ecosystem.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/docs"
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/20"
                            >
                                Read Documentation
                            </a>
                            <a
                                href="/#products"
                                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all"
                            >
                                Explore Products
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
