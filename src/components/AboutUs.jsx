export default function AboutUs() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-bold mb-6">
            About JayDada Solar
          </h2>

          <p className="text-gray-300 mb-4">
            JayDada Solar is committed to providing reliable,
            affordable and sustainable solar energy solutions
            for homes, businesses and industries.
          </p>

          <p className="text-gray-300 mb-4">
            Our mission is to help customers reduce electricity
            costs while contributing to a cleaner and greener future.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-4xl font-bold text-green-400">
                1000+
              </h3>
              <p>Installations</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">
                25+
              </h3>
              <p>Years Warranty</p>
            </div>
          </div>
        </div>

        <div>
          <img
            
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200"
                 alt="Solar Engineer"
 
                className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}