import { useState } from "react";

export default function Split({ splitId, onSplitId, friends, onEditFriend }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [pay, setPay] = useState("You");

  // Find the friend by id
  const friend = friends.find((f) => f.id === splitId);
  if (!friend) return null;

  const billValue = parseFloat(bill) || 0;
  const myExpenseValue = parseFloat(myExpense) || 0;
  const friendExpense = billValue - myExpenseValue;

  // Handle changes on inputs/select
  const handleChange = (event) => {
    const { dataset, value } = event.target;
    switch (dataset.id) {
      case "bill":
        setBill(value);
        break;
      case "myExpense":
        setMyExpense(value);
        break;
      case "pay":
        setPay(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bill === "" || myExpense === "" || pay === "") {
      return;
    }

    const newBalance =
      pay === "You" ? billValue - myExpenseValue : -myExpenseValue;

    const updatedFriends = friends.map((f) =>
      f.id === splitId ? { ...f, balance: newBalance } : f
    );
    onEditFriend(updatedFriends);

    // Reset the form
    setBill("");
    setMyExpense("");
    setPay("You");
    onSplitId(null);
  };

  return (
    <div className="split-main-container">
      <div className="content">
        <Heading name={friend.name} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-fields">
            <Fields
              label={"💰 Bill value"}
              isDisabled={false}
              isInput={true}
              onInput={handleChange}
              inputVal={bill}
              id={"bill"}
              name={friend.name}
            />
            <Fields
              label={"🧍‍♀️ Your expense"}
              isDisabled={false}
              isInput={true}
              onInput={handleChange}
              inputVal={myExpense}
              id={"myExpense"}
              name={friend.name}
            />
            <Fields
              label={"👫 Sarah's expense"}
              isDisabled={true}
              isInput={true}
              onInput={handleChange}
              inputVal={friendExpense}
              id={"friendExpense"}
              name={friend.name}
            />
            <Fields
              label={"🤑 Who is paying the bill"}
              isDisabled={false}
              isInput={false}
              onInput={handleChange}
              inputVal={pay}
              id={"pay"}
              name={friend.name}
            />
          </div>
          <div className="form-buttons">
            <Buttons onSplitId={onSplitId} />
          </div>
        </form>
      </div>
    </div>
  );
}

function Heading({ name }) {
  return <p className="split-heading">SPLIT A BILL WITH {name}</p>;
}

function Fields({ label, isDisabled, isInput, inputVal, onInput, id, name }) {
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
          <option value="Hasnain">{name}</option>
        </select>
      )}
    </div>
  );
}

// setting the type="submit" on a button in a form will automatically add onSubmit or onClick event listner in the button, with the handler function of that one defined in form tag
function Buttons({ onSplitId }) {
  return (
    <>
      <button onClick={() => onSplitId(null)}>Close</button>
      <button type="submit">Split</button>
    </>
  );
}
