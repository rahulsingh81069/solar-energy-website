export default function Testimonials() {
  const reviews = [
    {
      name: "Shivam Singh",
      review: "My electric bill dropped by 70%. Best investment for my home.",
    },
    {
      name: "Prem",
      review: "Professional team and excellent customer service.",
    },
    {
      name: "Banke Bihari",
      review: "Installed in just a few days and started saving immediately.",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 mb-4">
                "{review.review}"
              </p>

              <h3 className="font-bold text-green-400">
                {review.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}