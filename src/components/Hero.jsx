export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-950 via-green-700 to-yellow-500">

      <h1 className="text-6xl font-bold mb-6">
        Power Your Home With Solar
      </h1>

      <p className="text-xl max-w-2xl mb-8">
        Reduce electricity bills, increase property value,
        and switch to clean renewable energy.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Calculate Savings
        </button>

        <button className="border border-white px-6 py-3 rounded-xl">
          Learn More
        </button>
      </div>

    </section>
  );
}