export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-green-800 text-white flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-green-400 font-semibold mb-4">
            CLEAN • AFFORDABLE • RENEWABLE
          </p>

          <h1 className="text-6xl font-bold mb-6">
            Power Your Future With JayDada Solar
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Trusted residential and commercial solar solutions designed
            to reduce energy costs and create a greener future.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-600">
              Get Free Quote
            </button>

            <button className="border border-white px-8 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200"
            alt="Solar Panels"
            className="rounded-3xl shadow-2xl w-full max-w-xl"
          />
        </div>

      </div>
    </section>
  );
}