import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(new Date().toDateString());

  // Update the date every time count changes
  useEffect(() => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    setDate(newDate.toDateString());
  }, [count]);

  const handleStep = (operation) => {
    setStep((prevStep) =>
      operation === "plus" ? prevStep + 1 : Math.max(1, prevStep - 1)
    );
  };

  const handleCount = (operation) => {
    setCount((prevCount) =>
      operation === "plus" ? prevCount + step : prevCount - step
    );
  };

  const text =
    count === 0
      ? "Today is"
      : count > 0
      ? `${count} day${count > 1 ? "s" : ""} from today is`
      : `${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} ago was`;

  return (
    <div className="container">
      <Operation
        label={`Steps: ${step}`}
        onDecrement={() => handleStep("minus")}
        onIncrement={() => handleStep("plus")}
      />
      <Operation
        label={`Count: ${count}`}
        onDecrement={() => handleCount("minus")}
        onIncrement={() => handleCount("plus")}
      />
      <div className="date">{`${text} ${date}`}</div>
    </div>
  );
}

function Operation({ label, onIncrement, onDecrement }) {
  return (
    <div className="operation">
      <button onClick={onDecrement} className="oper" aria-label="decrement">
        -
      </button>
      <div>{label}</div>
      <button onClick={onIncrement} className="oper" aria-label="increment">
        +
      </button>
    </div>
  );
}

export default App;
