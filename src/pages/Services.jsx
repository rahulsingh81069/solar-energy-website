export default function Services() {
  const services = [
    "Residential Solar Installation",
    "Commercial Solar Solutions",
    "Solar Panel Maintenance",
    "Solar Battery Storage",
    "Solar Consultation",
    "Energy Audits",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-green-400">
              {service}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}