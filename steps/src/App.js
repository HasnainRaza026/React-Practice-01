import { useState } from "react";
import "./index.css";

const stepsData = [
  "Step 1: Learn React ⚛️",
  "Step 2: Apply for jobs 💼",
  "Step 3: Invest your new income 🤑",
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [display, setDisplay] = useState(true);

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, stepsData.length - 1));
  };

  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <button className="close-btn" onClick={handleDisplay}>
        {display ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-counterclockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>
        )}
      </button>
      <div className={`container ${!display ? "display" : ""}`}>
        <div className="steps">
          {stepsData.map((_, index) => (
            <Step
              key={index}
              step={index + 1}
              isActive={index <= currentStep}
            />
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
    </>
  );
}

function Step({ step, isActive }) {
  return <div className={isActive ? "active" : ""}>{step}</div>;
}

function Message({ text }) {
  return <p>{text}</p>;
}

export default App;
