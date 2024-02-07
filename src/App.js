import { Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import Category from "./components/category/category.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
    </Routes>
  );
};

export default App;
