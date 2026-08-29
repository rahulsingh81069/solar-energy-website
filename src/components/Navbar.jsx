import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-950">

      <h1 className="text-3xl font-bold text-green-400">
        SolarX
      </h1>

      <div className="flex gap-8">

        <Link to="/" className="hover:text-green-400">
          Home
        </Link>

        <Link to="/calculator" className="hover:text-green-400">
          Calculator
        </Link>

        <Link to="/services" className="hover:text-green-400">
         Services
        </Link>

        <Link to="/contact" className="hover:text-green-400">
          Contact
        </Link>

      </div>

      <button className="bg-green-500 px-5 py-2 rounded-lg">
        Get Quote
      </button>

    </nav>
  );
}