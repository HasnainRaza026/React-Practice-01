import { useState } from "react";

export function SelectBox({ children }) {
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
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div>
          <img
            src={selectedCurrency.flag}
            alt={`${selectedCurrency.currency} flag`}
          />
          <p>{selectedCurrency.currency}</p>
        </div>
        <img
          className="img-expand"
          src="./Assets/expand_arrow.svg"
          alt="Expand options"
        />
      </div>

      {isOpen && (
        <ul>
          {currencyData.map((elem) => (
            <li
              key={elem.currency}
              onClick={() => handleOnSelectCurrency(elem)}
            >
              <img src={elem.flag} alt="flag" />
              <p>{elem.currency}</p>
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
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <button onClick={handleOnCurrencySwap}>
      <img src="./Assets/arrow.svg" alt="button" />
    </button>
  );
}
