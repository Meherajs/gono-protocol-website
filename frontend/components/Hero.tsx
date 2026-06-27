import { api, Stats } from "@/lib/api";
import { Camera, Link, CheckCircle } from "lucide-react";
import { StatSkeleton } from "./Skeleton";

async function HeroStats() {
    const stats = await api.getStats();

    if (!stats) {
        return (
            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8 w-full">
                <StatSkeleton />
                <div className="hidden sm:block w-px h-10 bg-white/[0.08]" />
                <StatSkeleton />
                <div className="hidden sm:block w-px h-10 bg-white/[0.08]" />
                <StatSkeleton />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-8 w-full justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start">
                <span className="text-lg sm:text-2xl font-bold font-mono gradient-text-primary">
                    {stats.assets_registered}
                </span>
                <span className="text-[10px] sm:text-sm text-zinc-500 text-center md:text-left">Assets<br className="sm:hidden" /> Registered</span>
            </div>
            <div className="w-px h-10 bg-white/[0.08] hidden sm:block" />
            <div className="flex flex-col items-center md:items-start">
                <span className="text-lg sm:text-2xl font-bold font-mono gradient-text-primary">
                    {stats.active_users}
                </span>
                <span className="text-[10px] sm:text-sm text-zinc-500 text-center md:text-left">Active<br className="sm:hidden" /> Users</span>
            </div>
            <div className="w-px h-10 bg-white/[0.08] hidden sm:block" />
            <div className="flex flex-col items-center md:items-start">
                <span className="text-lg sm:text-2xl font-bold font-mono gradient-text-primary">
                    {stats.partners}+
                </span>
                <span className="text-[10px] sm:text-sm text-zinc-500">Partners</span>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-x-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-full max-w-[200vw] h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-60" />
                <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]" />
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_60%)] rounded-full blur-3xl animate-float" />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Content */}
                <div className="animate-fade-in-up w-full text-center md:text-left">
                    {/* Badge */}


                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-4 sm:mb-6">
                        <span className="block">Provenance infrastructure</span>
                        <span className="block gradient-text">
                            for humans <em className="font-serif italic text-cyan-400">&</em> AI
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
                        Secure digital media authenticity through blockchain technology.
                        Create immutable records of attribution and ownership for every piece of content.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <a
                            href="/coming-soon"
                            className="gradient-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 transition-all glow-sm group"
                        >
                            Start Building
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a
                            href="/docs"
                            className="px-6 py-3 rounded-lg font-medium glass glass-hover transition-all hover:scale-105 text-center"
                        >
                            View Documentation
                        </a>
                    </div>

                    {/* Stats */}
                    <HeroStats />
                </div>

                {/* Visual Card */}
                <div className="hidden md:flex justify-center animate-fade-in-up delay-200">
                    <div className="w-full max-w-md glass rounded-2xl overflow-hidden shadow-2xl hover:shadow-indigo-500/10 transition-shadow">
                        <div className="flex gap-1.5 p-4 border-b border-white/[0.08]">
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                        </div>
                        <div className="p-6 space-y-4">

                            {[
                                { icon: <Camera className="w-5 h-5" />, label: "Capture", detail: "2026-01-09 17:30:00" },
                                { icon: <Link className="w-5 h-5" />, label: "Register", detail: "0x7f3d...8e2a" },
                                { icon: <CheckCircle className="w-5 h-5" />, label: "Verified", detail: "Authentic", highlight: true },
                            ].map((node, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-4 p-4 glass rounded-lg glass-hover transition-all cursor-pointer group hover:scale-[1.02]">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-lg text-xl group-hover:scale-110 transition-transform">
                                            {node.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{node.label}</span>
                                            <span className={`text-sm font-mono ${node.highlight ? "text-emerald-400" : "text-zinc-500"}`}>
                                                {node.detail}
                                            </span>
                                        </div>
                                    </div>
                                    {i < 2 && (
                                        <div className="w-0.5 h-5 ml-9 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
