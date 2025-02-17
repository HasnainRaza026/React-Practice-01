import { useState, useEffect } from "react";
import "../index.css";
import { SelectBox, SelectCurrency, ReverseButton } from "./SelectBox";
import { ResultBox, Input, Result } from "./ResultBox";

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
  const [conversionResult, setConversionResult] = useState(0);

  useEffect(() => {
    if (fromCurrency.currency === toCurrency.currency) {
      const newToCurrency = currencyData.find(
        (currency) => currency.currency !== fromCurrency.currency
      );
      setToCurrency(newToCurrency);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const inputValue = parseFloat(input);
    if (isNaN(inputValue) || inputValue <= 0) {
      setConversionResult(0);
      return;
    }

    const controller = new AbortController();
    const convert = async () => {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${inputValue}&from=${fromCurrency.currency}&to=${toCurrency.currency}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setConversionResult(data.rates[toCurrency.currency]);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
        }
      }
    };

    convert();
    return () => controller.abort();
  }, [input, fromCurrency, toCurrency]);

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
