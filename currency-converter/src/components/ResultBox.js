export function ResultBox({ children }) {
  return <div className="input-main">{children}</div>;
}

export function Input({ input, setInput }) {
  const handleSetInput = (event) => {
    const inputValue = parseFloat(event.target.value);
    if (isNaN(inputValue) || inputValue <= 0) {
      setInput(0);
      return;
    }
    setInput(event.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={(event) => handleSetInput(event)}
    />
  );
}

export function Result({ toCurrency, conversionResult }) {
  return (
    <div className="result">
      <p className="value">{conversionResult}</p>
      <p className="symbol">{toCurrency.symbol}</p>
    </div>
  );
}
