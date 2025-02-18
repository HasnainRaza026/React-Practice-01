import { useState, useEffect } from "react";
import "../index.css";
import { SelectBox, SelectCurrency, ReverseButton } from "./SelectBox";
import { ResultBox, Input, Result } from "./ResultBox";
import { useFetch } from "../hooks/useFetch";

const currencyData = [
  {
    flag: "./Assets/america.png",
    currency: "USD",
    symbol: "$",
  },
  {
    flag: "./Assets/england.png",
    currency: "GBP",
    symbol: "£",
  },
  {
    flag: "./Assets/china.png",
    currency: "CNY",
    symbol: "¥",
  },
  {
    flag: "./Assets/india.png",
    currency: "INR",
    symbol: "₹",
  },
];

function App() {
  const [fromCurrency, setFromCurrency] = useState(currencyData[0]);
  const [toCurrency, setToCurrency] = useState(currencyData[1]);
  const [input, setInput] = useState("");
  const [conversionResult] = useFetch(
    `https://api.frankfurter.app/latest?amount=${input}&from=${fromCurrency.currency}&to=${toCurrency.currency}`,
    toCurrency
  );

  useEffect(() => {
    if (fromCurrency.currency === toCurrency.currency) {
      const newToCurrency = currencyData.find(
        (currency) => currency.currency !== fromCurrency.currency
      );
      setToCurrency(newToCurrency);
    }
  }, [fromCurrency, toCurrency]);

  return (
    <div className="app">
      <div className="content">
        <SelectBox>
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
        </SelectBox>

        <ResultBox>
          <Input input={input} setInput={setInput} />
          <Result toCurrency={toCurrency} conversionResult={conversionResult} />
        </ResultBox>
      </div>
    </div>
  );
}

export default App;
