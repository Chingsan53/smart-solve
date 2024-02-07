import { Router, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import NavBar from "./components/navbar/navbar.component";
import Category from "./components/category/category.component";

const App = () => {
  return (
    <Routes>
      {/* <NavBar /> */}
      <Route path="/" element={<NavBar />}>
        <Route path="/category" element={<Category />}>
          <Route path="currency-converter" element={<CurrencyConverter />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
