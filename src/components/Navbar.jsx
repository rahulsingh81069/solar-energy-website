export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-950">

      <div>
        <h1 className="text-3xl font-bold text-green-400">
          SolarX
        </h1>
      </div>

      <div className="hidden md:flex gap-8">
        <a href="#home" className="text-white hover:text-green-400">Home</a>
        <a href="#services" className="text-white hover:text-green-400">Services</a>
        <a href="#calculator" className="text-white hover:text-green-400">Calculator</a>
        <a href="#contact" className="text-white hover:text-green-400">Contact</a>
      </div>

      <button className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600">
        Get Quote
      </button>

    </nav>
  );
}