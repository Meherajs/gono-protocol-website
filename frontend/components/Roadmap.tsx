export default function Roadmap() {
    const phases = [
        {
            number: 1,
            title: "Research & Ideation",
            period: "Q3-Q4 2025",
            status: "completed",
            progress: 100,
            description: "Study blockchain provenance solutions and identify real-world problems to solve."
        },
        {
            number: 2,
            title: "Concept Development",
            period: "Q4 2025 - Q1 2026",
            status: "current",
            progress: 70,
            description: "Draft technical whitepaper, design protocol architecture, and create initial branding."
        },
        {
            number: 3,
            title: "Technical Foundation",
            period: "Q2-Q3 2026",
            status: "upcoming",
            progress: 0,
            description: "Finalize whitepaper and build proof-of-concept with basic prototype."
        },
        {
            number: 4,
            title: "Development",
            period: "Q4 2026 - Q1 2027",
            status: "planned",
            progress: 0,
            description: "Build core protocol components and deploy to testnet."
        },
        {
            number: 5,
            title: "Testing & Partnerships",
            period: "Q2-Q3 2027",
            status: "planned",
            progress: 0,
            description: "Run internal testing, recruit pilot users, and build initial partnerships."
        },
        {
            number: 6,
            title: "Alpha Launch",
            period: "Q4 2027",
            status: "planned",
            progress: 0,
            description: "Public testnet launch and open to developers with security audits."
        },
        {
            number: 7,
            title: "Mainnet & Beyond",
            period: "2028+",
            status: "vision",
            progress: 0,
            description: "Mainnet launch, parachain slot acquisition, and global ecosystem growth."
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
                                    <p className="text-sm sm:text-base text-zinc-300 mb-4">{phase.description}</p>

                                    {/* Progress bar for current phase */}
                                    {phase.status === 'current' && (
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-zinc-400">Progress</span>
                                                <span className="text-sm font-semibold text-amber-400">{phase.progress}%</span>
                                            </div>
                                            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-all duration-500" style={{ width: `${phase.progress}%` }}></div>
                                            </div>
                                        </div>
                                    )}
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
