import { useEffect, useState } from "react";
import "./currency-converter.component.scss";
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);

  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        console.log(data);
        console.log(data.rates);
        setIsLoading(false);
      }
      if (fromCur === toCur && fromCur === 0) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="AUD">AUD</option>
        <option value="THB">THB</option>
      </select>

      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="AUD">AUD</option>
        <option value="THB">THB</option>
      </select>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
};

export default CurrencyConverter;
