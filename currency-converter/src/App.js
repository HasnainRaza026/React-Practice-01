import { useState, useEffect } from "react";
import "./index.css";
import { Select, SelectCurrency, ReverseButton } from "./Select";

const currencyData = [
  {
    flag: "./Assets/america.png",
    symbol: "USD",
  },
  {
    flag: "./Assets/england.png",
    symbol: "GBP",
  },
  {
    flag: "./Assets/india.png",
    symbol: "INR",
  },
  {
    flag: "./Assets/pakistan.png",
    symbol: "PKR",
  },
];

function App() {
  const [fromCurrency, setFromCurrency] = useState(currencyData[0]);
  const [toCurrency, setToCurrency] = useState(currencyData[1]);

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      const newToCurrency = currencyData.filter(
        (elem) => elem !== fromCurrency
      )[0];
      setToCurrency(newToCurrency);
    }
  }, [fromCurrency, toCurrency]);

  return (
    <div className="app">
      <div className="content">
        <Select>
          <SelectCurrency
            currencyData={currencyData}
            selectedCurrency={fromCurrency}
            onSelectCurrency={setFromCurrency}
          />
          <ReverseButton
            fromCurrency={fromCurrency}
            setFromCurrency={setFromCurrency}
            toCurrency={toCurrency}
            setToCurrency={setToCurrency}
          />
          <SelectCurrency
            currencyData={currencyData}
            selectedCurrency={toCurrency}
            onSelectCurrency={setToCurrency}
          />
        </Select>
      </div>
    </div>
  );
}

export default App;
