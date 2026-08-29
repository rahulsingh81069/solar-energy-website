import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CalculatorPage from "./pages/CalculatorPage";

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

    </BrowserRouter>
  );
}

export default App;