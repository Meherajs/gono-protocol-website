const products = [
    {
        title: "Capture App",
        description: "The blockchain camera that captures photos and videos with instant provenance registration. Available on iOS and Android.",
        features: ["📱 Mobile First", "⛓️ Instant Registration", "🎨 NFT Creation"],
        link: "Download App",
        preview: (
            <div className="w-40 h-72 bg-[#0a0a0a] border-[3px] border-zinc-600 rounded-3xl overflow-hidden p-2">
                <div className="w-full h-full bg-[#1a1a1a] rounded-2xl flex flex-col">
                    <div className="flex items-center gap-2 p-2 text-xs font-semibold">
                        <span className="text-indigo-500">◎</span>
                        <span>Capture</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4">
                        <div className="w-20 h-20 border-2 border-indigo-500 rounded-lg" />
                        <div className="w-10 h-10 gradient-primary rounded-full glow" />
                    </div>
                    <div className="flex items-center justify-center gap-1 p-2 text-[10px] text-zinc-500">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span>Blockchain Ready</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Numbers Search",
        description: "Search engine for digital media provenance. Find origin, ownership, and history of any registered content.",
        features: ["🔍 Reverse Image Search", "🤖 AI-Powered", "🌐 Multi-Network"],
        link: "Try Search",
        preview: (
            <div className="w-full max-w-[280px] bg-[#0a0a0a] border border-white/[0.08] rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 px-3 py-2 bg-[#1a1a1a] border-b border-white/[0.08]">
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                        <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                        <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                    </div>
                    <div className="flex-1 text-[10px] text-zinc-500 font-mono bg-[#0a0a0a] px-2 py-1 rounded">
                        search.numbersprotocol.io
                    </div>
                </div>
                <div className="p-3 space-y-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-white/[0.08] rounded-full text-[10px] text-zinc-500">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>Search by image or hash...</span>
                    </div>
                    <div className="space-y-2">
                        <div className="h-10 bg-[#1a1a1a] rounded-lg" />
                        <div className="h-10 bg-[#1a1a1a] rounded-lg" />
                        <div className="h-10 bg-[#1a1a1a] rounded-lg" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Dashboard",
        description: "Manage your digital assets, track provenance history, and control AI mining permissions in one place.",
        features: ["📊 Analytics", "🔐 Access Control", "💰 Monetization"],
        link: "Open Dashboard",
        preview: (
            <div className="w-full max-w-[280px] h-44 bg-[#0a0a0a] border border-white/[0.08] rounded-xl overflow-hidden flex">
                <div className="w-10 bg-[#1a1a1a] border-r border-white/[0.08] p-2 flex flex-col gap-1">
                    <div className="h-6 bg-indigo-500 rounded" />
                    <div className="h-6 bg-white/[0.03] rounded" />
                    <div className="h-6 bg-white/[0.03] rounded" />
                    <div className="h-6 bg-white/[0.03] rounded" />
                </div>
                <div className="flex-1 p-2 flex flex-col gap-2">
                    <div className="h-5 bg-[#1a1a1a] rounded" />
                    <div className="grid grid-cols-2 gap-1 flex-1">
                        <div className="bg-[#1a1a1a] rounded" />
                        <div className="bg-[#1a1a1a] rounded" />
                        <div className="col-span-2 bg-[#1a1a1a] rounded" />
                    </div>
                </div>
            </div>
        ),
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-[#111111]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                        Products
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Complete <em className="font-serif italic text-cyan-400">ecosystem</em> for digital provenance
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className="glass rounded-2xl overflow-hidden glass-hover transition-all hover:-translate-y-1"
                        >
                            {/* Preview */}
                            <div className="p-8 flex justify-center items-center min-h-[280px] bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 border-b border-white/[0.08]">
                                {product.preview}
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4">{product.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.features.map((feat, j) => (
                                        <span
                                            key={j}
                                            className="text-xs px-2 py-1 bg-[#1a1a1a] rounded-full text-zinc-500"
                                        >
                                            {feat}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                                >
                                    {product.link}
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
