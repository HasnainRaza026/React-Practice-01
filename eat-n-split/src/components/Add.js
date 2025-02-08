import { useState } from "react";
export default function Add({ onOpenAdd, friends, onAddFriends }) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("https://i.pravatar.cc/50");

  const handleAddFriend = (event) => {
    event.preventDefault();
    if (!nameInput || !imageInput) {
      return;
    }

    const newArray = [
      ...friends,
      {
        id: friends[friends.length - 1].id + 1,
        name: nameInput,
        image: imageInput,
        balance: 0,
      },
    ];

    onAddFriends(newArray);
    onOpenAdd((prev) => !prev);
  };
  return (
    <div className="add-main-container">
      <form onSubmit={(e) => handleAddFriend(e)}>
        <div className="form-fields">
          <Field
            label={"👫 Friend name"}
            InputState={nameInput}
            onInput={setNameInput}
          />
          <Field
            label={"🌄 Image URL"}
            InputState={imageInput}
            onInput={setImageInput}
          />
        </div>
        <Buttons onOpenAdd={onOpenAdd} handleAddFriend={handleAddFriend} />
      </form>
    </div>
  );
}

function Field({ label, InputState, onInput }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type="text"
        value={InputState}
        onChange={(e) => onInput(e.target.value)}
      />
    </div>
  );
}

function Buttons({ onOpenAdd, handleAddFriend }) {
  const handleOpenAdd = () => {
    onOpenAdd((prev) => !prev);
  };
  return (
    <div className="form-buttons">
      <button onClick={handleOpenAdd}>Close</button>
      <button onClick={(e) => handleAddFriend(e)}>Add</button>
    </div>
  );
}
