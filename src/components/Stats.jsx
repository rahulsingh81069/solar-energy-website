export default function Stats() {
  const stats = [
    { number: "5000+", label: "Homes Powered" },
    { number: "40%", label: "Bill Savings" },
    { number: "25 Years", label: "Warranty" },
    { number: "10+", label: "States Served" },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
          >
            <h2 className="text-4xl font-bold text-green-400">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}