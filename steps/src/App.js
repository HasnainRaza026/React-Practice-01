import { useState } from "react";
import "./index.css";

const stepsData = [
  "Step 1: Learn React ⚛️",
  "Step 2: Apply for jobs 💼",
  "Step 3: Invest your new income 🤑",
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, stepsData.length - 1));
  };

  return (
    <div className="container">
      <div className="steps">
        {stepsData.map((_, index) => (
          <Step key={index} step={index + 1} isActive={index <= currentStep} />
        ))}
      </div>
      <div className="message">
        <Message text={stepsData[currentStep]} />
      </div>
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === stepsData.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Step({ step, isActive }) {
  return <div className={isActive ? "active" : ""}>{step}</div>;
}

function Message({ text }) {
  return <p>{text}</p>;
}

export default App;
