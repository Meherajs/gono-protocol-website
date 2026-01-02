const partners = [
    "Reuters",
    "Filecoin",
    "Protocol Labs",
    "C2PA",
    "IPTC",
    "Starling Lab",
];

export default function Partners() {
    return (
        <section className="py-16 border-y border-white/[0.08] bg-[#111111]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-zinc-500 uppercase tracking-wider mb-10">
                    Trusted by leading organizations
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    {partners.map((partner) => (
                        <div
                            key={partner}
                            className="opacity-50 hover:opacity-100 transition-opacity"
                        >
                            <span className="text-xl font-semibold text-zinc-400 tracking-wide">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
