import { useState } from "react";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [result, setResult] = useState(null);

  const calculateSavings = () => {
    const monthlyBill = Number(bill);

    if (!monthlyBill) return;

    const yearlyBill = monthlyBill * 12;
    const yearlySavings = yearlyBill * 0.8;
    const monthlySavings = yearlySavings / 12;
    const estimatedSystem = (monthlyBill / 25).toFixed(1);

    setResult({
      monthlySavings,
      yearlySavings,
      estimatedSystem,
    });
  };

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-10">
          Solar Savings Calculator
        </h2>

        <div className="bg-slate-800 p-8 rounded-3xl">

          <label className="block mb-3 text-lg">
            Monthly Electricity Bill ($)
          </label>

          <input
            type="number"
            placeholder="200"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full p-4 rounded-xl text-white bg-slate-700"
          />

          <button
            onClick={calculateSavings}
            className="mt-6 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-8">

              <div className="bg-slate-700 p-4 rounded-xl mb-4">
                <h3>
                  Recommended System Size:
                  <span className="text-green-400 font-bold">
                    {" "} {result.estimatedSystem} KW
                  </span>
                </h3>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl mb-4">
                <h3>
                  Monthly Savings:
                  <span className="text-green-400 font-bold">
                    {" "} ${result.monthlySavings.toFixed(0)}
                  </span>
                </h3>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl">
                <h3>
                  Yearly Savings:
                  <span className="text-green-400 font-bold">
                    {" "} ${result.yearlySavings.toFixed(0)}
                  </span>
                </h3>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}