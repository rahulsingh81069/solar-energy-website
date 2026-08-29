import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CalculatorPage from "./pages/CalculatorPage";
import Services from "./pages/Services";

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
      </Routes>

    </BrowserRouter>
  );
}

export default App;