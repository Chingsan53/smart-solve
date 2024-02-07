import { useEffect, useState } from "react";
import "./currency-converter.component.scss";
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);

  const [fromCur, setFromCur] = useState("AUD");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");
  useEffect(() => {
    async function convert() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        if (!res.ok) {
          throw new Error(`API call failed: ${res.status}`);
        }
        const data = await res.json();
        if (data.rates && data.rates.hasOwnProperty(toCur)) {
          setConverted(data.rates[toCur]);
          console.log(typeof(data.date));
          setDate(data.date);
        } else {
          console.error('Rates or currency not found in response');
          // Optionally set a default state or show an error message here
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Optionally handle the error here
      } finally {
        setIsLoading(false);
      }
    }
  
    if (fromCur === toCur && fromCur === 0) {
      setConverted(amount);
    } else {
      convert();
    }
  }, [amount, fromCur, toCur, date]);
  

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
      <p>Latest update: <span>{date}</span></p>
    </div>
  );
};

export default CurrencyConverter;
