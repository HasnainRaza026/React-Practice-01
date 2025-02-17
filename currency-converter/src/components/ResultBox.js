export function ResultBox({ children }) {
  return <div className="input-main">{children}</div>;
}

export function Input({ input, setInput }) {
  return (
    <input
      type="text"
      value={input}
      onChange={(event) => setInput(event.target.value)}
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
