export default function WhyChooseUs() {
  const features = [
    "Lower Electricity Bills",
    "High Efficiency Solar Panels",
    "25 Year Performance Warranty",
    "Professional Installation Team",
    "Government Subsidy Assistance",
    "Dedicated Customer Support",
  ];

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Why Choose JayDada Solar?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500 transition"
            >
              <div className="text-green-400 text-3xl mb-4">
                ⚡
              </div>

              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}