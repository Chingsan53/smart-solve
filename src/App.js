import { Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import Category from "./components/category/category.component";
import TipCalculator from "./components/tip-calculator/tip-calculator.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/tip-calculator" element={<TipCalculator />} />
    </Routes>
  );
};

export default App;
