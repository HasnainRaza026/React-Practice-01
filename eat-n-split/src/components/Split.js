import { useState } from "react";

export default function Split() {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [pay, setPay] = useState("You");

  return (
    <div className="split-main-container">
      <Heading />
      <div>
        <form>
          <div className="form-fields">
            <Fields
              label={"💰 Bill value"}
              isDisabled={false}
              isInput={true}
              onInput={setBill}
              inputVal={bill}
            />
            <Fields
              label={"🧍‍♀️ Your expense"}
              isDisabled={false}
              isInput={true}
              onInput={setMyExpense}
              inputVal={myExpense}
            />
            <Fields
              label={"👫 Sarah's expense"}
              isDisabled={true}
              isInput={true}
              onInput={setFriendExpense}
              inputVal={friendExpense}
            />
            <Fields
              label={"🤑 Who is paying the bill"}
              isDisabled={false}
              isInput={false}
              onInput={setPay}
              inputVal={pay}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function Heading() {
  return <p className="split-heading">SPLIT A BILL WITH HASNAIN</p>;
}

function Fields({ label, isDisabled, isInput, inputVal, onInput }) {
  return (
    <div className="field">
      <label>{label}</label>
      {isInput ? (
        <input
          type="text"
          disabled={isDisabled}
          value={inputVal}
          onChange={(e) => onInput(e.target.value)}
        />
      ) : (
        <select value={inputVal} onChange={(e) => onInput(e.target.value)}>
          <option value="You">You</option>
          <option value="Hasnain">Hasnain</option>
        </select>
      )}
    </div>
  );
}
