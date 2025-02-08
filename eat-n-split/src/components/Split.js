import { useState, useEffect } from "react";

export default function Split({ onSplitId, friends }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [pay, setPay] = useState("You");

  useEffect(() => {
    const billValue = Number(bill) || 0;
    const myExpenseValue = Number(myExpense) || 0;
    setFriendExpense(billValue - myExpenseValue);
  }, [bill, myExpense]);

  const handleUserInput = (event) => {
    const { dataset, value } = event.target;
    if (dataset.id === "pay") {
      setPay(value);
      return;
    }
    dataset.id === "bill" ? setBill(value) : setMyExpense(value);
  };

  const handleSubmit = () => {
    if (!bill || !myExpense || !friendExpense || !pay) {
      return;
    }

    const newArray = friends.map((friend) =>
      friend.id === onSplitId ? { ...friend, balance: 0 } : friend
    );
  };

  return (
    <div className="split-main-container">
      <div className="content">
        {friends.map((friend) =>
          friend.id === onSplitId ? <Heading name={friend.name} /> : null
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <Fields
              label={"💰 Bill value"}
              isDisabled={false}
              isInput={true}
              onInput={handleUserInput}
              inputVal={bill}
              id={"bill"}
            />
            <Fields
              label={"🧍‍♀️ Your expense"}
              isDisabled={false}
              isInput={true}
              onInput={handleUserInput}
              inputVal={myExpense}
              id={"myExpense"}
            />
            <Fields
              label={"👫 Sarah's expense"}
              isDisabled={true}
              isInput={true}
              onInput={handleUserInput}
              inputVal={friendExpense}
              id={"friendExpense"}
            />
            <Fields
              label={"🤑 Who is paying the bill"}
              isDisabled={false}
              isInput={false}
              onInput={handleUserInput}
              inputVal={pay}
              id={"pay"}
            />
          </div>
          <div className="form-buttons">
            <Buttons onSplitId={onSplitId} onSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

function Heading({ name }) {
  return <p className="split-heading">SPLIT A BILL WITH {name}</p>;
}

function Fields({ label, isDisabled, isInput, inputVal, onInput, id }) {
  return (
    <div className="field">
      <label>{label}</label>
      {isInput ? (
        <input
          type="text"
          disabled={isDisabled}
          value={inputVal}
          data-id={id}
          onChange={(e) => onInput(e)}
        />
      ) : (
        <select value={inputVal} data-id={id} onChange={(e) => onInput(e)}>
          <option value="You">You</option>
          <option value="Hasnain">Hasnain</option>
        </select>
      )}
    </div>
  );
}

function Buttons({ onSplitId, onSubmit }) {
  return (
    <>
      <button onClick={() => onSplitId(null)}>Close</button>
      <button onClick={onSubmit}>Split</button>
    </>
  );
}
