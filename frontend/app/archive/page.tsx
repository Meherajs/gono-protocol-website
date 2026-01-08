import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function ArchivePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 sm:py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                                <span className="text-2xl">📚</span>
                                <span className="text-sm font-medium text-indigo-400">Blog Archive</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                                Blog & Articles
                            </h1>
                            
                            <p className="text-xl sm:text-2xl text-zinc-400 mb-4">
                                Coming Soon
                            </p>
                            
                            <p className="text-base sm:text-lg text-zinc-500 max-w-3xl mx-auto">
                                We're preparing in-depth articles about blockchain provenance, digital trust, and the future 
                                of content authenticity. Check back soon for our latest insights.
                            </p>
                        </div>

                        {/* Coming Soon Notice */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                                <span className="text-2xl">✍️</span>
                                <span className="text-lg font-semibold text-indigo-400">First Posts Coming Q1 2026</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topics Preview */}
                <section className="py-16 sm:py-20 relative">
                    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                                Upcoming Topics
                            </h2>
                            <p className="text-lg text-zinc-400">
                                What we'll be writing about
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🔗</div>
                                <h3 className="text-xl font-bold text-white mb-3">Technical Deep Dives</h3>
                                <p className="text-zinc-400">
                                    Detailed explanations of our protocol architecture, consensus mechanisms, and provenance tracking
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="text-xl font-bold text-white mb-3">Use Case Stories</h3>
                                <p className="text-zinc-400">
                                    Real-world applications in journalism, art, real estate, and content creation
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🌐</div>
                                <h3 className="text-xl font-bold text-white mb-3">Ecosystem Updates</h3>
                                <p className="text-zinc-400">
                                    Development progress, partnership announcements, and roadmap milestones
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-3">AI & Deepfakes</h3>
                                <p className="text-zinc-400">
                                    How blockchain provenance combats misinformation in the age of AI-generated content
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">💡</div>
                                <h3 className="text-xl font-bold text-white mb-3">Tutorials & Guides</h3>
                                <p className="text-zinc-400">
                                    Step-by-step guides for developers building on Gono Protocol
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🗣️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Community Highlights</h3>
                                <p className="text-zinc-400">
                                    Featuring community contributions, developer spotlights, and success stories
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                            Want to Contribute?
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            We welcome guest posts and community contributions. Get in touch if you'd like to share your insights.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/"
                                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
                            >
                                Back to Home
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all"
                            >
                                Learn About Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
