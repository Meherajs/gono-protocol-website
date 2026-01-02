"use client";

import { useState } from "react";

const categories = ["All", "Planet", "Politics", "Society", "Economy", "Tech", "Creativity"];

const archiveItems = [
    {
        emoji: "🌍",
        category: "Planet",
        title: "Climate Summit 2024",
        excerpt: "Historic agreements captured and preserved with blockchain provenance.",
        date: "Dec 15, 2024",
        hash: "0x8f3d...2e1a",
    },
    {
        emoji: "🗳️",
        category: "Politics",
        title: "Global Elections 2024",
        excerpt: "Verified documentation of electoral events worldwide.",
        date: "Nov 5, 2024",
        hash: "0x2a7c...9f4b",
    },
    {
        emoji: "🤖",
        category: "Tech",
        title: "AI Revolution",
        excerpt: "Documenting the rapid advancement of artificial intelligence.",
        date: "Oct 22, 2024",
        hash: "0x5e9a...1c3d",
    },
];

export default function Archive() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section id="archive" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                        Archive
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Numbers <em className="font-serif italic text-cyan-400">Archive</em>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Preserving significant moments in history with verified provenance.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === cat
                                    ? "gradient-primary text-white"
                                    : "text-zinc-400 border border-white/[0.08] hover:text-white hover:border-white/[0.15]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {archiveItems.map((item, i) => (
                        <article
                            key={i}
                            className="glass rounded-2xl overflow-hidden glass-hover transition-all hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-44 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex items-center justify-center">
                                <span className="text-5xl">{item.emoji}</span>
                                <span className="absolute top-4 right-4 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                                    Verified
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-400 mb-4">{item.excerpt}</p>
                                <div className="flex justify-between text-xs text-zinc-500">
                                    <span>{item.date}</span>
                                    <span className="font-mono">{item.hash}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Link */}
                <div className="text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                    >
                        Explore Full Archive
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
