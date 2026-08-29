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

        {/* Hero Banner */}

        <div className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-green-700 to-orange-500 p-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powering A Sustainable Future
            </h1>

            <p className="text-xl text-white/90">
              JayDada Solar delivers innovative residential,
              commercial and industrial solar solutions designed
              to reduce energy costs and create a greener future.
            </p>
          </div>
        </div>

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4">
            Our Solar Services
          </h2>

          <p className="text-gray-400 text-lg">
            Smart and reliable solar solutions for homes,
            businesses and industries.
          </p>
        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-green-400">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.description}
              </p>

              <button className="mt-6 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Stats */}

        <div className="mt-20 grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-green-400">
              1000+
            </h3>
            <p>Installations</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-green-400">
              25
            </h3>
            <p>Years Warranty</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-green-400">
              30%
            </h3>
            <p>Average Savings</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-green-400">
              24/7
            </h3>
            <p>Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}