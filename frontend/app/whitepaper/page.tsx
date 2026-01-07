import { Navbar, Footer } from "@/components";

export default function WhitepaperPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-7xl mx-auto flex gap-8">
                    {/* Left Sidebar - Glossary */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="bg-amber-100/5 border border-amber-700/30 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-wider">
                                    Glossary
                                </h3>
                                
                                <div className="space-y-6 text-sm">
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">x402</h4>
                                        <p className="text-gray-400 leading-relaxed">HTTP-402 crypto micropayments for AI-to-AI commerce (USDC/stablecoin)</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">C2PA</h4>
                                        <p className="text-gray-400 leading-relaxed">Content authenticity metadata standard embedded inside media files</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">ERC-7053</h4>
                                        <p className="text-gray-400 leading-relaxed">On-chain index of media/receipt history and provenance</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">GONO</h4>
                                        <p className="text-gray-400 leading-relaxed">Native utility token for network gas, storage, staking, and governance</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">zk-SNARKs</h4>
                                        <p className="text-gray-400 leading-relaxed">Zero-knowledge proofs for anonymous identity verification</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">SANUB</h4>
                                        <p className="text-gray-400 leading-relaxed">Stake-Aligned Neutral Unbiased Blockchain reputation algorithm</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">Arweave</h4>
                                        <p className="text-gray-400 leading-relaxed">Permanent decentralized storage network (pay-once, store-forever)</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">Substrate</h4>
                                        <p className="text-gray-400 leading-relaxed">Blockchain framework for building Polkadot parachains</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-amber-600 mb-1">Parachain</h4>
                                        <p className="text-gray-400 leading-relaxed">Blockchain running parallel to Polkadot relay chain with shared security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-grow max-w-4xl">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6 uppercase tracking-wider">
                                Whitepaper
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                                Gono Protocol
                            </h1>
                            <p className="text-xl text-gray-300 font-medium">
                                Provenance infrastructure for humans & AI. Once on-chain, it remains forever.
                            </p>
                            <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                                Capture, certify, and check digital and real-world assets with verifiable proof at every step.
                            </p>
                        </div>

                        {/* Content Sections */}
                        <div className="prose prose-invert prose-lg max-w-none">
                        {/* Section 01: Why Now */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-amber-500">01.</span> Why Now
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                                Several converging trends make this the definitive moment for Gono Protocol:
                            </p>
                            <ul className="space-y-4 text-gray-200">
                                <li className="flex gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-xl">•</span>
                                    <span className="leading-relaxed"><strong className="text-white">AI Systems as Content Buyers:</strong> AI companies have begun paying for licensed data; Gono automates this through machine-native per-request payments.</span>
                                </li>
                                <li className="flex gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-xl">•</span>
                                    <span className="leading-relaxed"><strong className="text-white">Matured Standards:</strong> The ecosystem now supports HTTP 402, C2PA content credentials, and ERC-7053 for on-chain indexing.</span>
                                </li>
                                <li className="flex gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-xl">•</span>
                                    <span className="leading-relaxed"><strong className="text-white">Mainstream Stablecoins:</strong> Using stablecoins removes volatility; Gono keeps all transactions in stablecoins for enterprise predictability.</span>
                                </li>
                                <li className="flex gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-xl">•</span>
                                    <span className="leading-relaxed"><strong className="text-white">Efficiency in RWA & DePIN:</strong> Provenance reduces due diligence from weeks to minutes and ensures rewards flow to verified work.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 02: The Gono Platform */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-amber-500">02.</span> The Gono Platform
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                                Gono Platform provides a unified provenance network for digital and physical assets through a single pipeline.
                            </p>

                            {/* Capture */}
                            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-amber-400 mb-3">Capture</h3>
                                <p className="text-gray-200 mb-4 leading-relaxed">Capture anchors assets to an immutable chain by generating tamper-evident evidence.</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="leading-relaxed"><strong className="text-white">Generate Proof:</strong> The Capture SDK generates a cryptographic hash of the asset and embeds C2PA metadata.</li>
                                    <li className="leading-relaxed"><strong className="text-white">Privacy-First:</strong> For high-stakes journalism, the zk-SNARKs Privacy Pallet proves personhood while keeping the user's wallet anonymous.</li>
                                </ul>
                            </div>

                            {/* Store */}
                            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-l-4 border-gray-600 rounded-r-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-gray-300 mb-3">Store <span className="text-sm text-gray-500 font-normal">(Optional)</span></h3>
                                <p className="text-gray-200 mb-4 leading-relaxed">For content requiring absolute permanence, the Store Pallet provides a native bridge to Arweave.</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="leading-relaxed"><strong className="text-white">Censorship Resistance:</strong> Users pay a one-time "Storage Endowment" in GONO tokens to fund hosting forever.</li>
                                </ul>
                            </div>

                            {/* Verify */}
                            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-l-4 border-gray-600 rounded-r-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-gray-300 mb-3">Verify <span className="text-sm text-gray-500 font-normal">(Optional)</span></h3>
                                <p className="text-gray-200 mb-4 leading-relaxed">Assets are submitted for assessment by community verifiers or automated AI Oracles.</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="leading-relaxed"><strong className="text-white">Reputation Engine:</strong> Results are processed through the SANUB reputation engine to calculate credibility.</li>
                                </ul>
                            </div>

                            {/* Certify */}
                            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-amber-400 mb-3">Certify</h3>
                                <p className="text-gray-200 mb-4 leading-relaxed">Certify appends provenance to an asset, enriching its history without overwriting prior entries.</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="leading-relaxed"><strong className="text-white">Media Receipts:</strong> The final state—including storage links and metadata—is indexed via ERC-7053.</li>
                                    <li className="leading-relaxed"><strong className="text-white">Version Control:</strong> This functions as a decentralized version control system, akin to Git, for asset management.</li>
                                </ul>
                            </div>

                            {/* Check */}
                            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-amber-400 mb-3">Check</h3>
                                <p className="text-gray-200 mb-4 leading-relaxed">Check enables public auditing and transparency for any user or automated system.</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="leading-relaxed"><strong className="text-white">Public Auditing:</strong> Cross-reference a file's hash against the on-chain registry to confirm authenticity via the Gono Explorer.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 03: Why Gono Protocol */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-amber-500">03.</span> Why Gono Protocol
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                                Gono is uniquely positioned due to its head start in standards and modular product stack.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white">Standards Leadership:</strong>
                                        <p className="text-gray-300 mt-1">We utilize open standards like C2PA and ERC-7053, ensuring cross-chain indexing of media provenance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white">Field-Proven Technology:</strong>
                                        <p className="text-gray-300 mt-1">Our tech has been tested in high-trust environments, from investigative journalism to war archives.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white">Product-Ready Stack:</strong>
                                        <p className="text-gray-300 mt-1">Gono iterates on existing SDKs and developer APIs that produce credentials readable by major interfaces.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white">Uniquely Positioned:</strong>
                                        <p className="text-gray-300 mt-1">We integrate payment, proof, and provenance into a single, seamless product.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 04: Role of the GONO Token */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-amber-500">04.</span> Role of the GONO Token
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                                GONO is the native utility-and-governance token that powers the network.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">⚡</span> Proof-as-a-Fee
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">Every ERC-7053 write (new captures, receipt mints) requires GONO as "provenance gas."</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">💾</span> Storage Endowment
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">A one-time upfront fee in GONO secures permanent space on Arweave.</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">💎</span> Network Security
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">Nodes securing modular pallets must stake GONO and are subject to slashing for poor service.</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🗳️</span> Governance
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">Staked GONO provides rights to vote on technical upgrades and fee schedules.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 05: Case Studies */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-amber-500">05.</span> Case Studies
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-l-4 border-purple-500 rounded-r-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">📰</span> High-Stakes Journalism
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">Reporters use the Privacy Pallet to capture geo-tagged evidence anonymously, with funds released upon milestone attestations.</p>
                                </div>
                                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-l-4 border-cyan-500 rounded-r-xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🤖</span> AI Data Marketplaces
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">AI agents use x402 micropayments to license data, receiving a verifiable usage certificate instantly.</p>
                                </div>
                                <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-l-4 border-emerald-500 rounded-r-xl p-6 hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-emerald-300 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🏢</span> Real Estate Pilot
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">Digital twins of physical property record every booking and payout on-chain, replacing manual audits with real-time transparency.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 06: FAQ */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-amber-500">06.</span> FAQ
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                    <h4 className="text-lg font-bold text-white mb-3">What is Gono Platform?</h4>
                                    <p className="text-gray-200 leading-relaxed">A unified provenance rail for digital and physical assets utilizing a Capture → Store → Verify → Certify → Check pipeline.</p>
                                </div>
                                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                    <h4 className="text-lg font-bold text-white mb-3">How does it handle payments?</h4>
                                    <p className="text-gray-200 leading-relaxed">Settlements occur in stablecoins via x402 micropayments, while GONO covers protocol fees.</p>
                                </div>
                                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                    <h4 className="text-lg font-bold text-white mb-3">What are witness nodes?</h4>
                                    <p className="text-gray-200 leading-relaxed">GONO-staked third parties authorized to attest to real-world outcomes, anchoring off-chain truth to the blockchain.</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-2 border-amber-500/30 rounded-2xl p-12 hover:border-amber-500/50 transition-all">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Ready to Build on Gono?
                            </h3>
                            <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join the future of provenance infrastructure and start building verifiable applications today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/#products"
                                    className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="https://github.com/gono-protocol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-gray-800/50 border border-amber-600/50 text-gray-200 rounded-lg font-semibold hover:border-amber-500 hover:text-white hover:bg-gray-800 transition-all"
                                >
                                    View Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
            <Footer/>
        </>
     );
}
