export default function Stats() {
  const stats = [
    { label: 'Total Supply', value: '5,555' },
    { label: 'Holders', value: '2,100' },
    { label: 'Volume (ETH)', value: '75' },
    { label: 'Community', value: '10k+' },
  ];

  return (
    <section className="py-12 bg-[#020208] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-4 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md">
            <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
