export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Residential Solar",
      description:
        "Reduce electricity bills and power your home with clean solar energy.",
    },
    {
      icon: "🏢",
      title: "Commercial Solar",
      description:
        "Lower operating costs and improve business sustainability.",
    },
    {
      icon: "🏭",
      title: "Industrial Solar",
      description:
        "High-capacity solar solutions for factories and industrial facilities.",
    },
    {
      icon: "🔋",
      title: "Battery Storage",
      description:
        "Store excess solar energy for use during outages and peak hours.",
    },
    {
      icon: "🛠",
      title: "Maintenance & Support",
      description:
        "Professional maintenance services to maximize system performance.",
    },
    {
      icon: "📊",
      title: "Energy Assessment",
      description:
        "Detailed analysis to determine the ideal solar solution.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            Our Solar Services
          </h1>

          <p className="text-gray-400 text-lg">
            Smart and reliable solar solutions for homes,
            businesses and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4 text-green-400">
                {service.title}
              </h2>

              <p className="text-gray-400">
                {service.description}
              </p>

              <button className="mt-6 text-orange-400 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}