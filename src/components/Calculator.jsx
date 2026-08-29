import { useState } from "react";

export default function Calculator() {
  const [bill, setBill] = useState("");

  return (
    <section className="min-h-screen bg-slate-950 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Solar Savings Calculator
          </h1>

          <p className="text-gray-400 text-lg">
            Discover the ideal solar solution for your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}

          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl">

            <div className="mb-6">
              <label className="block mb-2">
                Monthly Electricity Bill (₹)
              </label>

              <input
                type="number"
                placeholder="e.g. 3500"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Monthly Electricity Consumption (Units / kWh)
              </label>

              <input
                type="number"
                placeholder="e.g. 400"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Property Type
              </label>

              <select className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700">
                <option>Select Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Solar Purpose
              </label>

              <select className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700">
                <option>Select Solar Purpose</option>
                <option>Reduce Electricity Bills</option>
                <option>Energy Independence</option>
                <option>EV Charging</option>
                <option>Business Cost Reduction</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Available Rooftop / Installation Area (sq. ft.)
              </label>

              <input
                type="number"
                placeholder="e.g. 500"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div className="mb-8">
              <label className="block mb-2">
                Approximate Investment Budget (₹) - Optional
              </label>

              <input
                type="number"
                placeholder="e.g. 150000"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold">
                Calculate
              </button>

              <button className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-xl">
                Reset
              </button>
            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="bg-gradient-to-br from-blue-700 to-blue-950 p-8 rounded-3xl shadow-xl">

            <h2 className="text-3xl font-bold mb-8">
              Estimated Solar Outlook
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-gray-300">
                  Estimated Solar Capacity Required
                </p>
                <h3 className="text-2xl font-bold">--</h3>
              </div>

              <div>
                <p className="text-gray-300">
                  Estimated Monthly Solar Generation
                </p>
                <h3 className="text-2xl font-bold">--</h3>
              </div>

              <div>
                <p className="text-gray-300">
                  Estimated Monthly Savings
                </p>
                <h3 className="text-2xl font-bold">--</h3>
              </div>

              <div>
                <p className="text-gray-300">
                  Estimated Annual Savings
                </p>
                <h3 className="text-2xl font-bold">--</h3>
              </div>

              <div>
                <p className="text-gray-300">
                  Estimated Solar System Cost
                </p>
                <h3 className="text-2xl font-bold">--</h3>
              </div>

              <div>
                <p className="text-gray-300">
                  Estimated Investment Information
                </p>
                <h3 className="text-2xl font-bold">--</h3>
              </div>

              <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold">
                Get Free Quote
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}