export default function StatsSection(){
  const stats = [
    { number: "10k+", label: "Active Users", color: "text-purple-600" },
    { number: "99.9%", label: "Uptime", color: "text-blue-500" },
    { number: "500k+", label: "Tasks Completed", color: "text-cyan-400" },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 bg-white/30 backdrop-blur-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className={`text-5xl font-bold ${stat.color}`}>
              {stat.number}
            </div>
            <div className="text-gray-600 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
