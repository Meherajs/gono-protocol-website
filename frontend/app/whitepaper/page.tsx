import { Navbar, Footer } from "@/components";

export default function WhitepaperPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile Glossary - Collapsible */}
                    <details className="lg:hidden mb-8 bg-amber-100/5 border border-amber-700/30 rounded-lg overflow-hidden">
                        <summary className="p-4 cursor-pointer hover:bg-amber-100/10 transition-colors list-none">
                            <h3 className="text-base font-bold text-amber-500 uppercase tracking-wider inline-flex items-center gap-2">
                                📖 Glossary
                                <span className="text-xs text-gray-400 font-normal">(Tap to expand)</span>
                            </h3>
                        </summary>
                        <div className="p-4 pt-2 space-y-4 text-sm max-h-96 overflow-y-auto">
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
                    </details>

                    <div className="flex gap-8">
                    {/* Desktop Sidebar - Glossary */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="bg-amber-100/5 border border-amber-700/30 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-wider">
                                    Glossary
                                </h3>
                                
                                <div className="space-y-6 text-sm max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
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
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-xs sm:text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider">
                                Whitepaper
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent px-4">
                                Gono Protocol
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 font-medium px-4">
                                Provenance infrastructure for humans & AI. Once on-chain, it remains forever.
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 mt-3 sm:mt-4 max-w-3xl mx-auto px-4">
                                Capture, certify, and check digital and real-world assets with verifiable proof at every step.
                            </p>
                        </div>

                        {/* Content Sections */}
                        <div className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
                        {/* Section 01: Why Now */}
                        <section className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-3 sm:pb-4">
                                <span className="text-amber-500">01.</span> Why Now
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                                Several converging trends make this the definitive moment for Gono Protocol:
                            </p>
                            <ul className="space-y-3 sm:space-y-4 text-gray-200">
                                <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl">•</span>
                                    <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">AI Systems as Content Buyers:</strong> AI companies have begun paying for licensed data; Gono automates this through machine-native per-request payments.</span>
                                </li>
                                <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl">•</span>
                                    <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">Matured Standards:</strong> The ecosystem now supports HTTP 402, C2PA content credentials, and ERC-7053 for on-chain indexing.</span>
                                </li>
                                <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl">•</span>
                                    <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">Mainstream Stablecoins:</strong> Using stablecoins removes volatility; Gono keeps all transactions in stablecoins for enterprise predictability.</span>
                                </li>
                                <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4 hover:border-amber-700/50 transition-colors">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl">•</span>
                                    <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">Efficiency in RWA & DePIN:</strong> Provenance reduces due diligence from weeks to minutes and ensures rewards flow to verified work.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 02: The Gono Platform */}
                        <section className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-3 sm:pb-4">
                                <span className="text-amber-500">02.</span> The Gono Platform
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                                Gono Platform provides a unified provenance network for digital and physical assets through a single pipeline.
                            </p>

                            {/* Capture */}
                            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3">Capture</h3>
                                <p className="text-gray-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Capture anchors assets to an immutable chain by generating tamper-evident evidence.</p>
                                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                                    <li className="leading-relaxed"><strong className="text-white">Generate Proof:</strong> The Capture SDK generates a cryptographic hash of the asset and embeds C2PA metadata.</li>
                                    <li className="leading-relaxed"><strong className="text-white">Privacy-First:</strong> For high-stakes journalism, the zk-SNARKs Privacy Pallet proves personhood while keeping the user's wallet anonymous.</li>
                                </ul>
                            </div>

                            {/* Store */}
                            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-l-4 border-gray-600 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-2 sm:mb-3">Store <span className="text-xs sm:text-sm text-gray-500 font-normal">(Optional)</span></h3>
                                <p className="text-gray-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">For content requiring absolute permanence, the Store Pallet provides a native bridge to Arweave.</p>
                                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                                    <li className="leading-relaxed"><strong className="text-white">Censorship Resistance:</strong> Users pay a one-time "Storage Endowment" in GONO tokens to fund hosting forever.</li>
                                </ul>
                            </div>

                            {/* Verify */}
                            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-l-4 border-gray-600 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-2 sm:mb-3">Verify <span className="text-xs sm:text-sm text-gray-500 font-normal">(Optional)</span></h3>
                                <p className="text-gray-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Assets are submitted for assessment by community verifiers or automated AI Oracles.</p>
                                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                                    <li className="leading-relaxed"><strong className="text-white">Reputation Engine:</strong> Results are processed through the SANUB reputation engine to calculate credibility.</li>
                                </ul>
                            </div>

                            {/* Certify */}
                            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3">Certify</h3>
                                <p className="text-gray-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Certify appends provenance to an asset, enriching its history without overwriting prior entries.</p>
                                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                                    <li className="leading-relaxed"><strong className="text-white">Media Receipts:</strong> The final state—including storage links and metadata—is indexed via ERC-7053.</li>
                                    <li className="leading-relaxed"><strong className="text-white">Version Control:</strong> This functions as a decentralized version control system, akin to Git, for asset management.</li>
                                </ul>
                            </div>

                            {/* Check */}
                            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3">Check</h3>
                                <p className="text-gray-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Check enables public auditing and transparency for any user or automated system.</p>
                                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                                    <li className="leading-relaxed"><strong className="text-white">Public Auditing:</strong> Cross-reference a file's hash against the on-chain registry to confirm authenticity via the Gono Explorer.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 03: Why Gono Protocol */}
                        <section className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-3 sm:pb-4">
                                <span className="text-amber-500">03.</span> Why Gono Protocol
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                                Gono is uniquely positioned due to its head start in standards and modular product stack.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex gap-3 sm:gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-3 sm:p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white text-sm sm:text-base">Standards Leadership:</strong>
                                        <p className="text-gray-300 mt-1 text-sm sm:text-base">We utilize open standards like C2PA and ERC-7053, ensuring cross-chain indexing of media provenance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 sm:gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-3 sm:p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white text-sm sm:text-base">Field-Proven Technology:</strong>
                                        <p className="text-gray-300 mt-1 text-sm sm:text-base">Our tech has been tested in high-trust environments, from investigative journalism to war archives.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 sm:gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-3 sm:p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white text-sm sm:text-base">Product-Ready Stack:</strong>
                                        <p className="text-gray-300 mt-1 text-sm sm:text-base">Gono iterates on existing SDKs and developer APIs that produce credentials readable by major interfaces.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 sm:gap-4 bg-gradient-to-r from-amber-900/10 to-transparent p-3 sm:p-4 rounded-lg hover:from-amber-900/20 transition-all">
                                    <span className="text-amber-500 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                    <div>
                                        <strong className="text-white text-sm sm:text-base">Uniquely Positioned:</strong>
                                        <p className="text-gray-300 mt-1 text-sm sm:text-base">We integrate payment, proof, and provenance into a single, seamless product.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 04: Role of the GONO Token */}
                        <section className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-3 sm:pb-4">
                                <span className="text-amber-500">04.</span> Role of the GONO Token
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                                GONO is the native utility-and-governance token that powers the network.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">⚡</span> Proof-as-a-Fee
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">Every ERC-7053 write (new captures, receipt mints) requires GONO as "provenance gas."</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">💾</span> Storage Endowment
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">A one-time upfront fee in GONO secures permanent space on Arweave.</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">💎</span> Network Security
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">Nodes securing modular pallets must stake GONO and are subject to slashing for poor service.</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">🗳️</span> Governance
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">Staked GONO provides rights to vote on technical upgrades and fee schedules.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 05: Case Studies */}
                        <section className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-3 sm:pb-4">
                                <span className="text-amber-500">05.</span> Case Studies
                            </h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">🎨</span> Creator Monetization
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                                        Artists register original content with C2PA credentials on-chain. AI agents license work via x402 micropayments, receiving verifiable usage certificates. Fans pre-fund projects with NFT passes, getting automatic delivery receipts when content is released.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">🏠</span> Real Estate Rental
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                                        Properties linked to digital-twin NFTs with verifiable condition photos captured via C2PA. Witness nodes attest check-in/check-out states. Revenue splits execute automatically, providing investors real-time auditable booking and payout history.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">💻</span> DePIN GPU Computing
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                                        Decentralized GPU facilities represented as NFTs encoding investor rights. Clients pay in stablecoins for compute tasks, receiving usage certificate NFTs. Revenue automatically splits per on-chain contract, creating auditable financial statements for due diligence.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                                        <span className="text-xl sm:text-2xl">📰</span> Field Journalism
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                                        Journalists create assignment anchors with milestones and budgets. Sponsors fund via smart contract escrow. Witness nodes attest milestone completion, releasing payments. Geo-tagged C2PA photos prove field work authenticity. Readers access via x402 micropayments.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 06: FAQ */}
                        <section className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-3 sm:pb-4">
                                <span className="text-amber-500">06.</span> FAQ
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-amber-500/50 transition-all">
                                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">What is Gono Platform?</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">A unified provenance rail for digital and physical assets utilizing a Capture → Store → Verify → Certify → Check pipeline.</p>
                                </div>
                                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-amber-500/50 transition-all">
                                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">How does it handle payments?</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">Settlements occur in stablecoins via x402 micropayments, while GONO covers protocol fees.</p>
                                </div>
                                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-amber-500/50 transition-all">
                                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">What are witness nodes?</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">GONO-staked third parties authorized to attest to real-world outcomes, anchoring off-chain truth to the blockchain.</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-2 border-amber-500/30 rounded-2xl p-6 sm:p-8 md:p-12 hover:border-amber-500/50 transition-all">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                Ready to Build on Gono?
                            </h3>
                            <p className="text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                                Join the future of provenance infrastructure and start building verifiable applications today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <a
                                    href="/#products"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all text-sm sm:text-base"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="https://github.com/gono-protocol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/50 border border-amber-600/50 text-gray-200 rounded-lg font-semibold hover:border-amber-500 hover:text-white hover:bg-gray-800 transition-all text-sm sm:text-base"
                                >
                                    View Documentation
                                </a>
                            </div>
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
