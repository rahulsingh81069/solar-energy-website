import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-center text-white">
      <h2 className="text-5xl font-bold mb-4">
        Ready To Switch To Solar?
      </h2>

      <p className="mb-8 text-xl">
        Get a free consultation from JayDada Solar today.
      </p>

      <Link
        to="/contact"
        className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
      >
        Request Free Consultation
      </Link>
    </section>
  );
}