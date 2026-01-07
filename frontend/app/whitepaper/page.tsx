import { Navbar, Footer } from "@/components";

export default function WhitepaperPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                            Gono - Provenance Creates True Values
                        </h1>
                        <p className="text-xl text-gray-400">
                            Provenance infrastructure for humans & AI. Once on-chain, it remains forever.
                        </p>
                        <p className="text-lg text-gray-500 mt-4">
                            Capture, certify, and check digital and real-world assets with verifiable proof at every step.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Section 01: Why Now */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-indigo-400">01.</span> Why Now
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Several converging trends make this the definitive moment for Gono Protocol:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>AI Systems as Content Buyers:</strong> AI companies have begun paying for licensed data; Gono automates this through machine-native per-request payments.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Matured Standards:</strong> The ecosystem now supports HTTP 402, C2PA content credentials, and ERC-7053 for on-chain indexing.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Mainstream Stablecoins:</strong> Using stablecoins removes volatility; Gono keeps all transactions in stablecoins for enterprise predictability.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Efficiency in RWA & DePIN:</strong> Provenance reduces due diligence from weeks to minutes and ensures rewards flow to verified work.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 02: The Gono Platform */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-indigo-400">02.</span> The Gono Platform
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Gono Platform provides a unified provenance network for digital and physical assets through a single pipeline.
                            </p>

                            {/* Capture */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-3">Capture</h3>
                                <p className="text-gray-300 mb-4">Capture anchors assets to an immutable chain by generating tamper-evident evidence.</p>
                                <ul className="space-y-2 text-gray-400">
                                    <li><strong className="text-gray-300">Generate Proof:</strong> The Capture SDK generates a cryptographic hash of the asset and embeds C2PA metadata.</li>
                                    <li><strong className="text-gray-300">Privacy-First:</strong> For high-stakes journalism, the zk-SNARKs Privacy Pallet proves personhood while keeping the user's wallet anonymous.</li>
                                </ul>
                            </div>

                            {/* Store */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-3">Store <span className="text-sm text-gray-500">(Optional)</span></h3>
                                <p className="text-gray-300 mb-4">For content requiring absolute permanence, the Store Pallet provides a native bridge to Arweave.</p>
                                <ul className="space-y-2 text-gray-400">
                                    <li><strong className="text-gray-300">Censorship Resistance:</strong> Users pay a one-time "Storage Endowment" in GONO tokens to fund hosting forever.</li>
                                </ul>
                            </div>

                            {/* Verify */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-3">Verify <span className="text-sm text-gray-500">(Optional)</span></h3>
                                <p className="text-gray-300 mb-4">Assets are submitted for assessment by community verifiers or automated AI Oracles.</p>
                                <ul className="space-y-2 text-gray-400">
                                    <li><strong className="text-gray-300">Reputation Engine:</strong> Results are processed through the SANUB reputation engine to calculate credibility.</li>
                                </ul>
                            </div>

                            {/* Certify */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-3">Certify</h3>
                                <p className="text-gray-300 mb-4">Certify appends provenance to an asset, enriching its history without overwriting prior entries.</p>
                                <ul className="space-y-2 text-gray-400">
                                    <li><strong className="text-gray-300">Media Receipts:</strong> The final state—including storage links and metadata—is indexed via ERC-7053.</li>
                                    <li><strong className="text-gray-300">Version Control:</strong> This functions as a decentralized version control system, akin to Git, for asset management.</li>
                                </ul>
                            </div>

                            {/* Check */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-3">Check</h3>
                                <p className="text-gray-300 mb-4">Check enables public auditing and transparency for any user or automated system.</p>
                                <ul className="space-y-2 text-gray-400">
                                    <li><strong className="text-gray-300">Public Auditing:</strong> Cross-reference a file's hash against the on-chain registry to confirm authenticity via the Gono Explorer.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 03: Why Gono Protocol */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-indigo-400">03.</span> Why Gono Protocol
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Gono is uniquely positioned due to its head start in standards and modular product stack.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Standards Leadership:</strong> We utilize open standards like C2PA and ERC-7053, ensuring cross-chain indexing of media provenance.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Field-Proven Technology:</strong> Our tech has been tested in high-trust environments, from investigative journalism to war archives.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Product-Ready Stack:</strong> Gono iterates on existing SDKs and developer APIs that produce credentials readable by major interfaces.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong>Uniquely Positioned:</strong> We integrate payment, proof, and provenance into a single, seamless product.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 04: Role of the GONO Token */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-indigo-400">04.</span> Role of the GONO Token
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                GONO is the native utility-and-governance token that powers the network.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">⚡ Proof-as-a-Fee</h4>
                                    <p className="text-gray-400 text-sm">Every ERC-7053 write (new captures, receipt mints) requires GONO as "provenance gas."</p>
                                </div>
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">💾 Storage Endowment</h4>
                                    <p className="text-gray-400 text-sm">A one-time upfront fee in GONO secures permanent space on Arweave.</p>
                                </div>
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">💎 Network Security</h4>
                                    <p className="text-gray-400 text-sm">Nodes securing modular pallets must stake GONO and are subject to slashing for poor service.</p>
                                </div>
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">🗳️ Governance</h4>
                                    <p className="text-gray-400 text-sm">Staked GONO provides rights to vote on technical upgrades and fee schedules.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 05: Case Studies */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-indigo-400">05.</span> Case Studies
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-purple-300 mb-2">📰 High-Stakes Journalism</h4>
                                    <p className="text-gray-300">Reporters use the Privacy Pallet to capture geo-tagged evidence anonymously, with funds released upon milestone attestations.</p>
                                </div>
                                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-cyan-300 mb-2">🤖 AI Data Marketplaces</h4>
                                    <p className="text-gray-300">AI agents use x402 micropayments to license data, receiving a verifiable usage certificate instantly.</p>
                                </div>
                                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-emerald-300 mb-2">🏢 Real Estate Pilot</h4>
                                    <p className="text-gray-300">Digital twins of physical property record every booking and payout on-chain, replacing manual audits with real-time transparency.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 06: FAQ */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-indigo-400">06.</span> FAQ
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">What is Gono Platform?</h4>
                                    <p className="text-gray-400">A unified provenance rail for digital and physical assets utilizing a Capture → Store → Verify → Certify → Check pipeline.</p>
                                </div>
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">How does it handle payments?</h4>
                                    <p className="text-gray-400">Settlements occur in stablecoins via x402 micropayments, while GONO covers protocol fees.</p>
                                </div>
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                                    <h4 className="text-lg font-bold text-white mb-2">What are witness nodes?</h4>
                                    <p className="text-gray-400">GONO-staked third parties authorized to attest to real-world outcomes, anchoring off-chain truth to the blockchain.</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center bg-gradient-to-r from-indigo-900/50 to-cyan-900/50 border border-indigo-500/30 rounded-2xl p-12">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Ready to Build on Gono?
                            </h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join the future of provenance infrastructure and start building verifiable applications today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/#products"
                                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="https://github.com/gono-protocol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-indigo-500/50 hover:text-white transition-all"
                                >
                                    View Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
