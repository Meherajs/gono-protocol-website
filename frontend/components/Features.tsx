const features = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Blockchain Provenance",
        description: "Every digital asset receives an immutable blockchain record, creating a transparent and verifiable chain of custody that can never be altered.",
        large: true,
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Real-time Verification",
        description: "Instantly verify the authenticity and origin of any digital content with our AI-powered verification engine.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path d="M24 4l20 10v20L24 44 4 34V14L24 4z" stroke="currentColor" strokeWidth="2" />
                <path d="M24 24v20M4 14l20 10 20-10" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Decentralized Storage",
        description: "Content is stored across a distributed network, ensuring permanence and censorship resistance.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M40 40L30 28l-8 8-6-6-8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "AI Detection",
        description: "Identify AI-generated content and deepfakes with advanced detection algorithms and metadata analysis.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                <path d="M4 24h40M24 4c5 5 8 12 8 20s-3 15-8 20c-5-5-8-12-8-20s3-15 8-20z" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Global Standards",
        description: "Compatible with C2PA, IPTC, and EIP-7053 standards for universal interoperability.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-16 sm:py-24 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                        Features
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                        Built for the <em className="font-serif italic text-cyan-400">future</em> of digital trust
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Our comprehensive suite of tools ensures every piece of content maintains its integrity from creation to consumption.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`p-8 glass rounded-2xl glass-hover transition-all hover:-translate-y-1 ${feature.large ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            <div className="w-12 h-12 text-indigo-500 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-zinc-400">{feature.description}</p>

                            {feature.large && (
                                <div className="mt-8 flex items-center justify-center gap-3">
                                    {[1, 2, 3, 4, 5].map((_, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-12 h-12 glass rounded-lg ${idx === 4 ? "gradient-primary glow" : ""}`} />
                                            {idx < 4 && (
                                                <div className="w-8 h-0.5 bg-gradient-to-r from-white/[0.08] to-indigo-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
