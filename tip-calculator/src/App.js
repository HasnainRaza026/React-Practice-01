import { useState } from "react";
import CalculatedTip from "./CalculatedTip";
import "./index.css";
import Inputs from "./Inputs";

function App() {
  const [youSatisfac, setYouSatisfac] = useState({
    satisfaction: "Dissatisfied",
    tip: 0,
  });
  const [frndSatisfac, setFrndSatisfac] = useState({
    satisfaction: "Dissatisfied",
    tip: 0,
  });
  const [bill, setBill] = useState("");

  let totalBill = null;
  let totalTip = null;

  if (bill) {
    totalBill = Number(bill);
    totalTip = (
      (Number(bill) * Number(youSatisfac.tip) +
        Number(bill) * Number(frndSatisfac.tip)) /
      2
    ).toFixed(2);
  }

  return (
    <div className="app">
      <Inputs
        youSatisfac={youSatisfac ? youSatisfac.satisfaction : null}
        frndSatisfac={frndSatisfac ? frndSatisfac.satisfaction : null}
        bill={bill}
        setYouSatisfac={setYouSatisfac}
        setFrndSatisfac={setFrndSatisfac}
        setBill={setBill}
      />
      <CalculatedTip
        totalBill={totalBill}
        totalTip={Number(totalTip)}
        setBill={setBill}
        setYouSatisfac={setYouSatisfac}
        setFrndSatisfac={setFrndSatisfac}
      />
    </div>
  );
}

export default App;
