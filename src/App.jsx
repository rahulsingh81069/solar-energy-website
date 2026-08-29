import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CalculatorPage from "./pages/CalculatorPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/calculator"
          element={<CalculatorPage />}
        />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;