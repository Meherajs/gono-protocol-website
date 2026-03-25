import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="py-12 sm:py-16 bg-[#111111] border-t border-white/[0.08] overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                {/* Main */}
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <svg
                                className="w-7 h-7 text-indigo-500"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="8" fill="currentColor" />
                                <circle cx="20" cy="8" r="3" fill="currentColor" />
                                <circle cx="20" cy="32" r="3" fill="currentColor" />
                                <circle cx="8" cy="20" r="3" fill="currentColor" />
                                <circle cx="32" cy="20" r="3" fill="currentColor" />
                            </svg>
                            <span className="font-semibold text-lg">Gono Protocol</span>
                        </Link>
                        <p className="text-zinc-400 text-sm max-w-sm mb-6">
                            Provenance infrastructure for humans and AI. Explore the protocol and technical architecture through our focused two-page product experience.
                        </p>

                        {/* Social */}
                        <div className="flex gap-2">
                            <a
                                href="https://github.com/Meherajs/gono-protocol-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500 transition-all"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                                Navigate
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/whitepaper" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        Whitepaper
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                                Open Source
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/Meherajs/gono-protocol-website"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    >
                                        GitHub Repository
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.08] gap-4">
                    <p className="text-sm text-zinc-500">
                        © 2026 Gono Protocol. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
