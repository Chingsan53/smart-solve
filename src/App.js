import { Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import Category from "./components/category/category.component";
import TipCalculator from "./components/tip-calculator/tip-calculator.component";
import WeatherForcast from "./components/weather-forecast/weather-forecast.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/tip-calculator" element={<TipCalculator />} />
      <Route path="/weather-forecast" element={<WeatherForcast />} />
    </Routes>
  );
};

export default App;
