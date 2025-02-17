import { useState } from "react";

export function Select({ children }) {
  return <div className="select-main">{children}</div>;
}

export function SelectCurrency({
  currencyData,
  selectedCurrency,
  onSelectCurrency,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSelectCurrency = (elem) => {
    onSelectCurrency(elem);
    setIsOpen(false);
  };
  return (
    <div className="dropdown">
      <div
        className="selected-currency"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          <img src={selectedCurrency.flag} alt="flag" />
          <p>{selectedCurrency.symbol}</p>
        </div>
        <img
          className="img-expand"
          src="./Assets/expand_arrow.svg"
          alt="expand"
        />
      </div>
      {isOpen && (
        <ul>
          {currencyData.map((elem) => (
            <li key={elem.symbol} onClick={() => handleOnSelectCurrency(elem)}>
              <img src={elem.flag} alt="flag" />
              <p>{elem.symbol}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ReverseButton({
  fromCurrency,
  toCurrency,
  setFromCurrency,
  setToCurrency,
}) {
  const handleOnCurrencySwap = () => {
    const newFromCurrency = fromCurrency;
    const newToCurrency = toCurrency;
    setFromCurrency(newToCurrency);
    setToCurrency(newFromCurrency);
  };
  return (
    <button onClick={handleOnCurrencySwap}>
      <img src="./Assets/arrow.svg" alt="button" />
    </button>
  );
}
