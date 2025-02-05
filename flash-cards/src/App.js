import { useState } from "react";
import "./index.css";

const data = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleAnswer = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="App">
      {data.map((val) => (
        <Card
          key={val.id}
          ques={val}
          handler={handleAnswer}
          isOpen={selectedId === val.id}
        />
      ))}
    </div>
  );
}

function Card({ ques, handler, isOpen }) {
  return (
    <div
      style={isOpen ? { backgroundColor: "red" } : {}}
      className="card"
      onClick={() => handler(ques.id)}
    >
      {isOpen ? (
        <div className="answer">{ques.answer}</div>
      ) : (
        <div>
          <div className="question-heading">Question</div>
          <div className="text">{ques.question}</div>
        </div>
      )}
    </div>
  );
}

export default App;
