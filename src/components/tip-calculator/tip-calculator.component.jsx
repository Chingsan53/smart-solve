import { useState } from "react";
import './tip-calculator.component.scss'
const TipCalculator = () => {
    const [bill, setBill] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [tip, setTip] = useState(10);

    const roundToTwoDecimals = (num) => {
        return parseFloat(num.toFixed(2));
    }

    const calculateTotal = parseFloat(bill) + (parseFloat(bill) * tip)/100;
    const divideWithPeople = calculateTotal/quantity;
    

    return <div className="tip-calculator">
        <h2>Tips Calculator</h2>
        <div>
            <p>Total Bill in USD: </p>
            <input type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}></input>
        </div>
        <p>How many people?</p>
        <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>{Array.from({length: 20}, (_, i) => i + 1).map((num) => (<option value={num} key={num}>
            {num}
        </option>))}</select>

        <p>Tips</p>
        <select value={tip} onChange={e => setTip(Number(e.target.value))}>
            <option value={10}>10% Service is Poor</option>
            <option value={15}>15% Service is Good</option>
            <option value={20}>20% Service is Amazing</option>
        </select>
        

        <p>Total Tips: $ {(bill * tip)/100}</p>
        <p>Total Bill after tips: $ {calculateTotal}</p>
        <p>Each person will pay: $ {roundToTwoDecimals(divideWithPeople)} </p>

    </div>
}

export default TipCalculator;