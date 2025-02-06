export default function Inputs({
  bill,
  youSatisfac,
  frndSatisfac,
  setBill,
  setYouSatisfac,
  setFrndSatisfac,
}) {
  return (
    <div className="inputs-container">
      <InputBill billState={bill} onInput={setBill} />
      <InputSatisfaction satisfacState={youSatisfac} onSelect={setYouSatisfac}>
        <p className="input-label">How satisfied are you with the service?</p>
      </InputSatisfaction>
      <InputSatisfaction
        satisfacState={frndSatisfac}
        onSelect={setFrndSatisfac}
      >
        <p className="input-label">
          How satisfied is your friend with the service?
        </p>
      </InputSatisfaction>
    </div>
  );
}

function InputBill({ billState, onInput }) {
  return (
    <div className="input">
      <p className="input-label">How much was the bill?</p>
      <input
        type="text"
        className="input-field"
        placeholder="Enter Input"
        value={billState}
        onChange={(e) => onInput(e.target.value)}
      />
    </div>
  );
}

function InputSatisfaction({ satisfacState, onSelect, children }) {
  const handleSelect = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    onSelect({
      satisfaction: e.target.value,
      tip: selectedOption.dataset.tip,
    });
  };
  return (
    <div className="input">
      {children}
      <select
        value={satisfacState}
        className="input-field"
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        <option data-tip={0} value="Dissatisfied">
          Dissatisfied
        </option>
        <option data-tip={0.05} value="It was okay">
          It was okay
        </option>
        <option data-tip={0.1} value="It was good">
          It was good
        </option>
        <option data-tip={0.2} value="Absolutely Amazing!">
          Absolutely Amazing!
        </option>
      </select>
    </div>
  );
}
