export default function Roadmap() {
    const phases = [
        {
            number: 1,
            title: "Research & Ideation",
            period: "Q3-Q4 2025",
            status: "completed",
            progress: 100,
            description: "Study blockchain provenance solutions and identify real-world problems to solve.",
            goals: [
                "Study blockchain provenance solutions",
                "Research Substrate/Polkadot ecosystem",
                "Identify real-world problems to solve",
                "Form founding team"
            ],
            deliverables: [
                { text: "Problem identification", done: true },
                { text: "Technology stack research", done: true },
                { text: "Competitive analysis", done: true },
                { text: "Team formation (2 co-founders from MBSTU)", done: true }
            ]
        },
        {
            number: 2,
            title: "Concept Development",
            period: "Q4 2025 - Q1 2026",
            status: "current",
            progress: 70,
            description: "Draft technical whitepaper, design protocol architecture, and create initial branding.",
            goals: [
                "Draft technical whitepaper",
                "Design protocol architecture",
                "Create initial branding & website",
                "Define token economics"
            ],
            deliverables: [
                { text: "Draft whitepaper (in progress)", done: true },
                { text: "Website v1.0", done: true },
                { text: "Architecture design (4-layer system)", done: false },
                { text: "Token economics model", done: false },
                { text: "Logo and brand identity", done: false }
            ]
        },
        {
            number: 3,
            title: "Technical Foundation",
            period: "Q2-Q3 2026",
            status: "upcoming",
            progress: 0,
            description: "Finalize whitepaper and build proof-of-concept with basic prototype.",
            goals: [
                "Finalize whitepaper",
                "Build proof-of-concept",
                "Set up development environment",
                "Create basic prototype"
            ],
            deliverables: [
                { text: "Whitepaper v1.0 (final)", done: false },
                { text: "GitHub repository setup", done: false },
                { text: "Basic Substrate node running", done: false },
                { text: "Simple Capture SDK demo", done: false },
                { text: "Technical documentation started", done: false }
            ]
        },
        {
            number: 4,
            title: "Development",
            period: "Q4 2026 - Q1 2027",
            status: "planned",
            progress: 0,
            description: "Build core protocol components and deploy to testnet.",
            goals: [
                "Build core protocol components",
                "Develop key pallets (Capture, Certify, Check)",
                "Create developer tools",
                "Deploy to testnet"
            ],
            deliverables: [
                { text: "Gono Protocol v0.1 (testnet)", done: false },
                { text: "Capture SDK with C2PA support", done: false },
                { text: "Basic API documentation", done: false },
                { text: "Test deployment on Kusama/Rococo", done: false },
                { text: "Developer onboarding guide", done: false }
            ]
        },
        {
            number: 5,
            title: "Testing & Partnerships",
            period: "Q2-Q3 2027",
            status: "planned",
            progress: 0,
            description: "Run internal testing, recruit pilot users, and build initial partnerships.",
            goals: [
                "Run internal testing",
                "Recruit pilot users",
                "Build initial partnerships",
                "Gather feedback"
            ],
            deliverables: [
                { text: "5-10 pilot partnerships", done: false },
                { text: "Bug fixes and improvements", done: false },
                { text: "Enhanced documentation", done: false },
                { text: "Community Discord/Telegram", done: false },
                { text: "First use case implementations", done: false }
            ]
        },
        {
            number: 6,
            title: "Alpha Launch",
            period: "Q4 2027",
            status: "planned",
            progress: 0,
            description: "Public testnet launch and open to developers with security audits.",
            goals: [
                "Public testnet launch",
                "Open to developers",
                "Security audits",
                "Community building"
            ],
            deliverables: [
                { text: "Public testnet with GONO tokens", done: false },
                { text: "Developer grants program", done: false },
                { text: "Security audit (1st round)", done: false },
                { text: "100+ registered assets", done: false },
                { text: "50+ active developers", done: false }
            ]
        },
        {
            number: 7,
            title: "Mainnet & Beyond",
            period: "2028+",
            status: "vision",
            progress: 0,
            description: "Mainnet launch, parachain slot acquisition, and global ecosystem growth.",
            goals: [
                "Mainnet launch",
                "Parachain slot acquisition",
                "Ecosystem growth",
                "Become provenance standard"
            ],
            deliverables: [
                { text: "10,000+ registered assets", done: false },
                { text: "1,000+ developers", done: false },
                { text: "Major platform integrations", done: false },
                { text: "Industry partnerships", done: false },
                { text: "Global adoption", done: false }
            ]
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return '✅';
            case 'current':
                return '🔄';
            case 'upcoming':
                return '📅';
            case 'planned':
                return '📋';
            case 'vision':
                return '🔮';
            default:
                return '○';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'from-emerald-500 to-green-600';
            case 'current':
                return 'from-amber-500 to-orange-600';
            case 'upcoming':
                return 'from-indigo-500 to-purple-600';
            case 'planned':
                return 'from-cyan-500 to-blue-600';
            case 'vision':
                return 'from-violet-500 to-purple-600';
            default:
                return 'from-zinc-500 to-gray-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'COMPLETED';
            case 'current':
                return 'IN PROGRESS';
            case 'upcoming':
                return 'NEXT';
            case 'planned':
                return 'PLANNED';
            case 'vision':
                return 'VISION';
            default:
                return 'PENDING';
        }
    };

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent pointer-events-none"></div>

            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent">
                        Our Roadmap
                    </h2>
                </div>

                {/* Current Status Card */}
                <div className="mb-12 sm:mb-16 max-w-2xl mx-auto">
                    <div className="glass rounded-2xl p-6 sm:p-8 border-2 border-amber-500/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 pointer-events-none"></div>
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">🎯</span>
                                <h3 className="text-xl sm:text-2xl font-bold text-amber-400">You Are Here</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-base sm:text-lg text-white font-semibold">Phase 2: Concept Development</span>
                                    <span className="text-amber-400 font-bold text-sm sm:text-base">70% Complete</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-400 pt-2">
                                    <div>📍 Focus: Whitepaper + Website</div>
                                    <div>📅 Target: Q1 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-500 to-violet-500 opacity-30"></div>

                    {/* Phases */}
                    <div className="space-y-8 sm:space-y-12">
                        {phases.map((phase, index) => (
                            <div key={phase.number} className="relative pl-16 sm:pl-20">
                                {/* Phase number badge */}
                                <div className={`absolute left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${getStatusColor(phase.status)} flex items-center justify-center shadow-lg ${phase.status === 'current' ? 'ring-4 ring-amber-500/30 animate-pulse-glow' : ''}`}>
                                    <span className="text-xl sm:text-2xl font-bold text-white">{phase.number}</span>
                                </div>

                                {/* Phase card */}
                                <div className={`glass rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1 ${phase.status === 'current' ? 'border-2 border-amber-500/30 shadow-xl shadow-amber-500/10' : phase.status === 'completed' ? 'opacity-80' : 'opacity-90'}`}>
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">{getStatusIcon(phase.status)}</span>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white">{phase.title}</h3>
                                            </div>
                                            <p className="text-sm sm:text-base text-zinc-400">{phase.period}</p>
                                        </div>
                                        <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${getStatusColor(phase.status)} text-white`}>
                                            {getStatusText(phase.status)}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-zinc-300 mb-6">{phase.description}</p>

                                    {/* Progress bar for current phase */}
                                    {phase.status === 'current' && (
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-zinc-400">Progress</span>
                                                <span className="text-sm font-semibold text-amber-400">{phase.progress}%</span>
                                            </div>
                                            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-all duration-500" style={{ width: `${phase.progress}%` }}></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Goals and Deliverables */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {/* Goals */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Goals</h4>
                                            <ul className="space-y-2">
                                                {phase.goals.map((goal, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                                                        <span className="text-amber-400 mt-0.5">→</span>
                                                        <span>{goal}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Deliverables */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Deliverables</h4>
                                            <ul className="space-y-2">
                                                {phase.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm">
                                                        <span className={item.done ? 'text-emerald-400' : 'text-zinc-500'}>
                                                            {item.done ? '✓' : '○'}
                                                        </span>
                                                        <span className={item.done ? 'text-zinc-300' : 'text-zinc-500'}>
                                                            {item.text}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector to next phase */}
                                {index < phases.length - 1 && (
                                    <div className="absolute left-6 sm:left-8 -bottom-6 sm:-bottom-8 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
