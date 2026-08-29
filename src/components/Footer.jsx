export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Company */}

        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            JayDada Solar
          </h2>

          <p className="text-gray-400">
            JayDada Solar provides residential, commercial and
            industrial solar solutions designed to reduce
            electricity costs and promote sustainable energy.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>Calculator</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>📞 +91 9054131458</p>

            <p>📧 contact@jaydadasolar.com</p>

            <p>
              📍 2nd Floor, B-2, 222,
                <br />
                    The Landmark,
                <br />
                     Kudasan, Gandhinagar,
                <br />
                    Gujarat - 382421
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 JayDada Solar. All Rights Reserved.
      </div>
    </footer>
  );
}