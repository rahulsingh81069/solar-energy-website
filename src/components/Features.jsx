export default function Features() {
  const features = [
    "Lower Electricity Bills",
    "Federal Tax Benefits",
    "Increase Home Value",
    "Clean Renewable Energy",
    "25-Year Warranty",
    "Professional Installation",
  ];

  return (
    <section className="py-20 bg-slate-950">

      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">
          Why Choose Solar?
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-green-400">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}