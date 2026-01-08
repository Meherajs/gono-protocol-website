export default function CTA() {
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-50" />

            <div className="relative max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Ready to secure your digital content?
                </h2>
                <p className="text-lg text-zinc-400 mb-8">
                    Join thousands of creators, journalists, and organizations protecting their digital assets with provenance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/coming-soon"
                        className="gradient-primary px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform glow-sm"
                    >
                        Get Started Free
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 12h14M12 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a
                        href="/coming-soon"
                        className="px-8 py-4 rounded-lg font-medium glass glass-hover transition-all"
                    >
                        Contact Sales
                    </a>
                </div>
            </div>
        </section>
    );
}
