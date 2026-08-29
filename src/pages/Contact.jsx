export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-2xl">

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-lg bg-slate-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-lg bg-slate-700"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 rounded-lg bg-slate-700"
          />

          <input
            type="text"
            placeholder="Address"
            className="p-4 rounded-lg bg-slate-700"
          />

          <textarea
            rows="4"
            placeholder="Tell us about your solar needs"
            className="p-4 rounded-lg bg-slate-700"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg"
          >
            Submit Request
          </button>

        </form>

      </div>
    </div>
  );
}