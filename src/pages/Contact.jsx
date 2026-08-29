export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Get Your Free Solar Consultation
          </h1>

          <p className="text-gray-400">
            Tell us about your property and our team will contact you.
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="block mb-2">Property Type</label>
              <select className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">
                Monthly Electricity Bill (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 5000"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="block mb-2">City</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2">Message</label>

            <textarea
              rows="5"
              placeholder="Tell us about your solar requirement..."
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />
          </div>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold">
            Request Free Consultation
          </button>

        </div>
      </div>
    </section>
  );
}