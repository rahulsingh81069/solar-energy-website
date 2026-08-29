//import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-slate-950/90 backdrop-blur-md text-white">

      <Link to="/" className="flex items-center gap-3">
            <img
          src="/images/logo.jpg"
          alt="logo"
          className="w-14 h-14 rounded-full"
        />
        <div>
        <h1 className="text-2xl font-bold text-green-400">
              JayDada Solar
        </h1>

          <p className="text-xs text-gray-400">
            Clean Energy Solutions
          </p>
        </div>
      </Link>

      <div className="flex gap-8">

        <Link to="/" className="hover:text-green-400">
          Home
        </Link>

        <Link to="/calculator" className="hover:text-green-400">
          Calculator
        </Link>

        <NavLink
          to="/services"
           className={({ isActive }) =>
            isActive ? "text-green-400 font-bold" : "hover:text-green-400"
          }
          >
            Services
        </NavLink>

        <Link to="/contact" className="hover:text-green-400">
          Contact
        </Link>

      </div>

      <Link
        to="/contact"
        className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg"
      >
      Get Quote
    </Link>

    </nav>
  );
}