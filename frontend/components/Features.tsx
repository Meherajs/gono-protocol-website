import { Scan, Database, ShieldCheck, FileSignature, Search } from "lucide-react";

const features = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Immutable Provenance Records",
        description: "Every digital asset photo, video, document, or dataset receives a unique cryptographic fingerprint stored permanently on the blockchain. This creates an unalterable chain of custody from creation to any point in time, ensuring authenticity can always be verified.",
        large: true,
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Instant Authenticity Checks",
        description: "Upload any content and get immediate verification results. Our engine checks against registered provenance records and runs AI-powered analysis to detect tampering, deepfakes, and unauthorized modifications.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path d="M24 4l20 10v20L24 44 4 34V14L24 4z" stroke="currentColor" strokeWidth="2" />
                <path d="M24 24v20M4 14l20 10 20-10" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Permanent Decentralized Storage",
        description: "Optional integration with Arweave ensures your content is stored forever across a global network. No single point of failure, no censorship, no data loss content survives as long as the network exists.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M40 40L30 28l-8 8-6-6-8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Deepfake & AI Detection",
        description: "Advanced machine learning algorithms analyze metadata, pixel patterns, and compression artifacts to identify AI-generated or manipulated content. Know if an image or video is synthetic before trusting it.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                <path d="M4 24h40M24 4c5 5 8 12 8 20s-3 15-8 20c-5-5-8-12-8-20s3-15 8-20z" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Industry-Standard Compliance",
        description: "Built on C2PA (Coalition for Content Provenance and Authenticity), ERC-7053 (Ethereum Media Receipts), and IPTC metadata standards. Seamlessly integrates with existing newsroom workflows and enterprise systems.",
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`p-6 sm:p-8 glass rounded-2xl glass-hover transition-all hover:-translate-y-1 ${feature.large ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-500 mb-4 sm:mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-zinc-400">{feature.description}</p>

                            {feature.large && (
                                <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
                                    {[
                                        <Scan key="1" className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />,
                                        <Database key="2" className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />,
                                        <ShieldCheck key="3" className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />,
                                        <FileSignature key="4" className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />,
                                        <Search key="5" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    ].map((icon, idx) => (
                                        <div key={idx} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                                            <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 glass rounded-lg flex items-center justify-center ${idx === 4 ? "gradient-primary glow" : ""}`}>
                                                {icon}
                                            </div>
                                            {idx < 4 && (
                                                <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-white/[0.08] to-indigo-500 flex-shrink-0" />
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
