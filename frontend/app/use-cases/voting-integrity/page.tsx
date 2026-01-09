import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VotingIntegrityPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link 
                        href="/use-cases" 
                        className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6 uppercase tracking-wider">
                            Democracy & Governance
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Voting & Election Integrity
                        </h1>
                        <p className="text-xl text-gray-300 mb-6">
                            Protecting democracy through verifiable, transparent, and tamper-proof election infrastructure using blockchain provenance and zero-knowledge cryptography
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>Author: Meheraj Alam</span>
                            <span>•</span>
                            <span>January 1, 2026</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-amber max-w-none">
                        {/* The Crisis */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-6">The Global Democracy Crisis</h2>
                            
                            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                                <p className="text-gray-200 text-lg font-semibold mb-2">Democracy Under Attack</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>57% of global population</strong> lives in countries with declining democratic quality (V-Dem Institute, 2024)</li>
                                    <li><strong>89 countries</strong> experienced election integrity disputes in the past 5 years</li>
                                    <li><strong>$2.3 billion</strong> spent annually on election monitoring and dispute resolution</li>
                                    <li><strong>75% of voters</strong> in developing nations distrust official election results</li>
                                    <li><strong>68 million diaspora voters</strong> cannot participate due to logistical barriers</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4">Why Traditional Voting Systems Fail</h3>
                            
                            <div className="space-y-4">
                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-amber-400 font-semibold mb-2">🗳️ Paper Ballot Vulnerabilities</h4>
                                    <p className="text-gray-300">Physical ballots can be destroyed, stuffed, or miscounted. No cryptographic proof of accuracy. Recounts are slow, expensive, and often disputed. Chain of custody easily broken.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-amber-400 font-semibold mb-2">💻 Electronic Voting Machine (EVM) Hacks</h4>
                                    <p className="text-gray-300">Proprietary systems with no public audit trail. Researchers have demonstrated hacks on Diebold, ES&S, and Dominion machines. Vote tallies can be altered without detection. No voter-verifiable paper trail in many jurisdictions.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-amber-400 font-semibold mb-2">🌍 Diaspora Voter Suppression</h4>
                                    <p className="text-gray-300">Citizens abroad face impossible logistics: mail delays, embassy queues, postal vote fraud. Bangladesh has 10+ million overseas workers who cannot vote. India&apos;s 32 million NRIs largely disenfranchised.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-amber-400 font-semibold mb-2">📊 No Transparent Audit Trail</h4>
                                    <p className="text-gray-300">Voters cannot verify their vote was counted correctly. Election observers see only aggregates, not individual vote verification. Disputes drag on for months with no cryptographic proof.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-amber-400 font-semibold mb-2">⚖️ Post-Election Violence</h4>
                                    <p className="text-gray-300">Kenya 2007: 1,500 deaths over disputed elections. Bolivia 2019: President resigns amid fraud allegations. Myanmar 2021: Military coup justified by election fraud claims. Lack of verifiable proof fuels violence.</p>
                                </div>
                            </div>
                        </section>

                        {/* Real-World Impact */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-6">Real-World Election Integrity Failures</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-red-400 mb-3">🇺🇸 USA 2020: Trust Collapse</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Despite no evidence of widespread fraud, <strong>30% of Americans</strong> distrust the result. Hundreds of lawsuits filed. Capitol insurrection on Jan 6, 2021. Cost: <strong>$519 million</strong> in legal battles + immeasurable social division. <em>Root cause: No cryptographic proof of vote integrity.</em>
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-orange-400 mb-3">🇻🇪 Venezuela 2024: Digital Authoritarianism</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Government claimed Maduro won with 51%. Opposition has receipts proving otherwise. CNE (election authority) refuses to release precinct-level data. No international observers allowed. <strong>Result: Authoritarian regime continues, millions flee.</strong>
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-400 mb-3">🇧🇩 Bangladesh 2024: Boycotted Elections</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Opposition parties boycott, citing rigged EVMs and voter intimidation. <strong>Turnout disputed:</strong> Government claims 40%, independent observers estimate 10-15%. No transparent audit possible. Democracy undermined.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">🇰🇪 Kenya 2017: Nullified Election</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Supreme Court <strong>nullified presidential election</strong> due to &quot;irregularities and illegalities.&quot; Rerun held, but credibility damaged. Cost: <strong>$480 million</strong> for rerun + ethnic tensions escalate.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-white mb-3">📉 The Pattern: Lack of Verifiable Proof</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Across all these cases, the fundamental problem is identical: <strong>no cryptographic proof that votes were counted as cast.</strong> 
                                    Voters cannot verify their individual ballots. Election authorities cannot prove aggregate tallies are accurate. 
                                    Disputes devolve into &quot;he said, she said&quot; battles. Democracy erodes when citizens cannot trust the most basic civic act: voting.
                                </p>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-amber-400 mb-6">The Gono Protocol Solution: Verifiable Democracy Infrastructure</h2>
                            
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Gono Protocol creates a <strong>transparent, auditable, privacy-preserving</strong> voting system where every citizen can cryptographically verify their vote was counted while maintaining ballot secrecy. 
                                Combines blockchain immutability with zero-knowledge proofs for the world&apos;s first truly trustless elections.
                            </p>

                            {/* Phase 1: VOTER REGISTRATION */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-400 mb-3">Phase 1: CAPTURE — Secure Voter Registration & Identity</h3>
                                    <p className="text-gray-300 mb-4">
                                        Every eligible voter receives a cryptographic identity that proves their right to vote without revealing personal information.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🆔 Decentralized Voter IDs (DIDs)</h4>
                                        <p className="text-gray-300 mb-3">Election commission issues blockchain-anchored voter credentials:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>National ID linked to DID:</strong> Voter&apos;s NID verified by government database, then DID created</li>
                                            <li><strong>Biometric enrollment:</strong> Fingerprint/face scan linked to DID (stored locally, never on-chain)</li>
                                            <li><strong>Eligibility proof:</strong> Age, citizenship, residency verified cryptographically</li>
                                            <li><strong>One person, one vote:</strong> Duplicate registrations mathematically impossible (cryptographic uniqueness)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-amber-400 font-semibold mb-3">Example: Bangladesh Voter Registration</h4>
                                        <pre className="text-xs text-gray-300 overflow-x-auto">
{`{
  "voterDID": "did:gono:voter:bd:0x9f4a2c...",
  "nationalID": "19920615-1234-5678", // Hashed, never stored plaintext
  "eligibility": {
    "citizenship": "Bangladesh",
    "age": 32, // Proven via zk-SNARK without revealing birthdate
    "constituency": "Dhaka-10",
    "registrationDate": "2025-11-01"
  },
  "biometricHash": "QmX7k3p...", // Stored locally on voter's device
  "voterCardIssued": true,
  "blockchainRecord": {
    "txHash": "0xd4f8a1...",
    "block": 10284756,
    "timestamp": "2025-11-01T09:15:00Z"
  }
}`}
                                        </pre>
                                        <p className="text-gray-400 text-xs mt-3 italic">
                                            Voter&apos;s identity is verified once during registration. After that, they vote anonymously using zk-SNARKs.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔐 Privacy-Preserving Enrollment (zk-SNARKs)</h4>
                                        <p className="text-gray-300 mb-3">Voters prove eligibility without revealing identity:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Age verification:</strong> Prove &quot;I am over 18&quot; without revealing birthdate</li>
                                            <li><strong>Residency proof:</strong> Prove &quot;I live in Dhaka-10&quot; without revealing exact address</li>
                                            <li><strong>Citizenship:</strong> Prove Bangladeshi nationality without exposing NID number</li>
                                            <li><strong>Anti-coercion:</strong> No one can prove <em>how</em> you voted (even to yourself after voting!)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🌍 Diaspora Voter Inclusion</h4>
                                        <p className="text-gray-300 mb-3">Overseas citizens vote without traveling:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Bangladeshi worker in Dubai verifies identity via embassy-issued DID</li>
                                            <li>Votes from phone/computer with biometric authentication</li>
                                            <li>Vote encrypted, transmitted to blockchain, counted in real-time</li>
                                            <li><strong>No postal delays, no ballot destruction, no disenfranchisement</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2: VOTING PROCESS */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-amber-400 mb-3">Phase 2: CERTIFY — Anonymous Ballot Submission & Blockchain Registration</h3>
                                    <p className="text-gray-300 mb-4">
                                        Voters cast ballots that are cryptographically verifiable yet completely anonymous. Blockchain records every vote, but no one can trace votes to voters.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🗳️ Anonymous Ballot Casting</h4>
                                        <p className="text-gray-300 mb-3">How a vote is cast:</p>
                                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                            <li><strong>Voter authenticates</strong> at polling station (or via app for diaspora) using DID + biometric</li>
                                            <li><strong>Gono generates anonymous voting token</strong> using zk-SNARK:
                                                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside text-sm">
                                                    <li>Proves: &quot;I am a registered voter in this constituency&quot;</li>
                                                    <li>Proves: &quot;I have not voted yet in this election&quot;</li>
                                                    <li>Does NOT reveal: Who the voter is, their NID, or any identifying info</li>
                                                </ul>
                                            </li>
                                            <li><strong>Voter selects candidate</strong> on touchscreen/app interface</li>
                                            <li><strong>Vote encrypted with homomorphic encryption</strong> (allows tallying without decryption)</li>
                                            <li><strong>Encrypted vote submitted to blockchain</strong> with zero-knowledge proof of eligibility</li>
                                            <li><strong>Voter receives receipt code</strong> (proves vote was submitted, but not which candidate chosen)</li>
                                        </ol>
                                    </div>

                                    <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-amber-400 font-semibold mb-3">Ballot Submission Flow</h4>
                                        <div className="space-y-3 text-sm text-gray-300">
                                            <div className="flex items-start gap-3">
                                                <span className="text-blue-400 font-mono">1.</span>
                                                <div>
                                                    <strong className="text-white">Voter authenticates at polling station</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Fingerprint scan → DID verified → Voting token generated</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 font-mono">2.</span>
                                                <div>
                                                    <strong className="text-white">zk-SNARK proof generated</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Proves eligibility + hasn&apos;t voted yet, without revealing identity</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-purple-400 font-mono">3.</span>
                                                <div>
                                                    <strong className="text-white">Vote encrypted (candidate choice hidden)</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Homomorphic encryption allows tallying without seeing individual votes</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-amber-400 font-mono">4.</span>
                                                <div>
                                                    <strong className="text-white">Blockchain records encrypted vote</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Immutable, timestamped, verifiable — but anonymous</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-pink-400 font-mono">5.</span>
                                                <div>
                                                    <strong className="text-white">Voter receives receipt code</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Can verify vote was recorded, but cannot prove to others how they voted (prevents vote-buying)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔒 End-to-End Verifiable (E2E-V) Voting</h4>
                                        <p className="text-gray-300 mb-3">Three levels of verification guarantee accuracy:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Cast-as-intended:</strong> Voter confirms on screen that their choice matches their intent (before encryption)</li>
                                            <li><strong>Recorded-as-cast:</strong> Voter uses receipt code to verify their encrypted vote appears on blockchain</li>
                                            <li><strong>Counted-as-recorded:</strong> Anyone can verify the tally matches the blockchain records (public audit)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⚡ Real-Time Vote Recording</h4>
                                        <p className="text-gray-300 mb-2">Unlike paper ballots counted after polls close:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Each vote recorded on blockchain within 2-3 seconds of casting</li>
                                            <li>Election observers see encrypted votes appearing in real-time (cannot see choices, only that votes are being cast)</li>
                                            <li>Impossible to destroy ballots after polls close (already on blockchain)</li>
                                            <li>Results available <strong>instantly</strong> when voting period ends (just decrypt homomorphic tally)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-amber-400 font-semibold mb-3">Anti-Coercion Mechanism</h4>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>Problem:</strong> In authoritarian regimes or vote-buying schemes, voters may be forced to prove how they voted.
                                        </p>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>Gono Solution:</strong> Receipt-freeness via cryptographic commitments.
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                                            <li>Voter&apos;s receipt proves &quot;I voted&quot; but <em>cannot</em> prove <em>how</em> they voted</li>
                                            <li>Even if coerced, voter can show receipt to intimidator without revealing choice</li>
                                            <li>Optional: Voter can cast &quot;fake&quot; vote for intimidator, then revote privately (only final vote counts)</li>
                                            <li>Cryptographically impossible to create proof of vote choice after voting completes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3: VERIFICATION & AUDITING */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-green-400 mb-3">Phase 3: CHECK — Public Verification & Instant Audits</h3>
                                    <p className="text-gray-300 mb-4">
                                        Anyone — voters, candidates, international observers, media — can verify the election results independently using blockchain data. No trust required.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">✅ Individual Vote Verification</h4>
                                        <p className="text-gray-300 mb-3">After voting, each citizen can check:</p>
                                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                            <li>Enter receipt code into Gono Verify Engine</li>
                                            <li>System shows: &quot;Your encrypted vote is recorded in Block #10284758&quot;</li>
                                            <li>Voter confirms their vote exists on blockchain (without revealing who they voted for)</li>
                                            <li>If vote is missing or altered, voter can flag discrepancy with election commission</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">📊 Public Tally Verification</h4>
                                        <p className="text-gray-300 mb-3">After polls close, anyone can verify the count:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Download full blockchain ledger of encrypted votes</li>
                                            <li>Run Gono verification script to:
                                                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside text-sm">
                                                    <li>Confirm all votes have valid zk-SNARK proofs (no fake votes)</li>
                                                    <li>Verify no voter ID voted twice (uniqueness check)</li>
                                                    <li>Decrypt homomorphic tally to get final results</li>
                                                    <li>Compare against official results announced by election commission</li>
                                                </ul>
                                            </li>
                                            <li>If official results don&apos;t match blockchain tally → <strong>mathematically provable fraud</strong></li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-amber-400 font-semibold mb-3">Verification Dashboard Example</h4>
                                        <div className="space-y-2 text-sm text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span><strong>Total Votes Cast:</strong> 12,847,293 (matches blockchain record count)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span><strong>Eligible Voters:</strong> 119,000,000 (turnout: 10.8%)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span><strong>All zk-SNARK proofs valid:</strong> No fraudulent votes detected</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span><strong>No duplicate voter IDs:</strong> One person, one vote confirmed</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span><strong>Homomorphic tally:</strong> Candidate A: 6,234,812 | Candidate B: 6,612,481</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span><strong>Official result match:</strong> Election Commission result matches blockchain</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-400">ℹ</span>
                                                <span><strong>Audit completed in:</strong> 3 minutes 47 seconds</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-xs mt-4 italic">
                                            Any citizen, media outlet, or international observer can run this verification independently. No permission needed.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🌐 International Observer Integration</h4>
                                        <p className="text-gray-300 mb-3">UN, EU, OSCE, Carter Center observers gain superpowers:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Real-time monitoring:</strong> Watch encrypted votes being cast across all polling stations</li>
                                            <li><strong>Statistical anomaly detection:</strong> AI flags suspicious patterns (e.g., 100% turnout in one district)</li>
                                            <li><strong>Instant recounts:</strong> Re-run tally verification in seconds, not weeks</li>
                                            <li><strong>Tamper-proof evidence:</strong> If fraud detected, blockchain provides irrefutable proof for international tribunals</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⏱️ Instant Results & Dispute Resolution</h4>
                                        <p className="text-gray-300 mb-2">No more weeks of counting and recounting:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Polls close at 6 PM → Results at 6:02 PM</strong> (just decrypt homomorphic tally)</li>
                                            <li>If candidate disputes result, anyone can re-verify blockchain in minutes</li>
                                            <li>Court cases resolved with cryptographic proof, not allegations</li>
                                            <li>Eliminates post-election limbo that fuels violence</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* To Be Continued Section */}
                        <section className="mb-12">
                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-8 rounded-lg text-center">
                                <h3 className="text-2xl font-bold text-purple-400 mb-4">More Details Coming Soon</h3>
                                <p className="text-gray-300 mb-6">
                                    This use case will be expanded with technical implementation details, comparison tables, adoption roadmap, and impact metrics.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center text-sm text-gray-400">
                                    <span className="px-3 py-1 bg-gray-800 rounded-full">Phase 4: Dispute Resolution</span>
                                    <span className="px-3 py-1 bg-gray-800 rounded-full">Technical Implementation</span>
                                    <span className="px-3 py-1 bg-gray-800 rounded-full">Comparison Table</span>
                                    <span className="px-3 py-1 bg-gray-800 rounded-full">Adoption Roadmap</span>
                                    <span className="px-3 py-1 bg-gray-800 rounded-full">UN SDG Alignment</span>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center py-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg border border-amber-500/30">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Protect Democracy?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join election commissions, democracy advocates, and citizens building verifiable elections on Gono Protocol.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#products"
                                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-amber-500/50"
                                >
                                    Build Voting Infrastructure
                                </Link>
                                <Link
                                    href="/docs"
                                    className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    Read Documentation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
