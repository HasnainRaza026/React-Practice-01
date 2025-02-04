import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectQuantityVal, setSelectQuantityVal] = useState(1);
  const [selectSortVal, setSelectSortVal] = useState("SORT BY INPUT ORDER");
  const [travelItems, setTravelItems] = useState(initialItems);

  const handleAdd = (event) => {
    event.preventDefault();
    if (!inputVal) return;
    const quantity = Number(selectQuantityVal);
    const newId =
      travelItems.length > 0 ? travelItems[travelItems.length - 1].id + 1 : 1;

    const newItem = {
      id: newId,
      description: inputVal,
      quantity: quantity,
      packed: false,
    };

    setTravelItems([...travelItems, newItem]);
    setInputVal("");
    setSelectQuantityVal(1);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setTravelItems([]);
    }
  };

  const handleDelete = (id) => {
    const newArray = travelItems.filter((item) => item.id !== id);
    setTravelItems(newArray);
  };

  const handleTogglePacked = (id) => {
    const updatedItems = travelItems.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setTravelItems(updatedItems);
  };

  const handleSort = (event) => {
    setSelectSortVal(event.target.value);
    const newArray = [...travelItems];

    if (event.target.value === "SORT BY DESCRIPTION") {
      newArray.sort((a, b) => a.description.localeCompare(b.description));
    } else if (event.target.value === "SORT BY PACKED STATUS") {
      newArray.sort((a, b) => Number(a.packed) - Number(b.packed)); // Convert booleans to numbers so false (0) comes before true (1)
    } else if (event.target.value === "SORT BY INPUT ORDER") {
      newArray.sort((a, b) => a.id - b.id); // Resorting the array based on id
    }

    // Update the state with the sorted array
    setTravelItems(newArray);
  };

  // Calculate packed count and percentage
  const packedCount = travelItems.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );
  const totalCount = travelItems.length;
  const percentage =
    totalCount > 0 ? Math.round((packedCount / totalCount) * 100) : 0;

  return (
    <div className="container">
      <div className="logo">
        <p>🏝️ &nbsp; Far &nbsp; &nbsp; Away &nbsp; 🧳</p>
      </div>
      <div className="add">
        <form onSubmit={handleAdd}>
          <p className="need">What do you need for your 😍 trip?</p>
          <select
            value={selectQuantityVal}
            onChange={(e) => setSelectQuantityVal(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <SelectOptions key={i + 1} optionValue={i + 1} />
            ))}
          </select>
          <input
            type="text"
            value={inputVal}
            placeholder="Items.."
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button>ADD</button>
        </form>
      </div>
      <div className="items-container">
        <div className="items">
          {travelItems.map((itm) => (
            <Item
              key={itm.id}
              item={itm}
              onDelete={handleDelete}
              onTogglePacked={handleTogglePacked}
            />
          ))}
        </div>
        <div className="select">
          <select value={selectSortVal} onChange={handleSort}>
            <ItemSort sortValue={"SORT BY INPUT ORDER"} />
            <ItemSort sortValue={"SORT BY DESCRIPTION"} />
            <ItemSort sortValue={"SORT BY PACKED STATUS"} />
          </select>
          <button onClick={handleClear}>CLEAR</button>
        </div>
      </div>
      <div className="footer">
        <p>
          {totalCount > 0
            ? `💼 You have ${totalCount} items on your list, and you already packed ${packedCount} (${percentage}%)`
            : "Start adding some items to your packing list 🚀"}
        </p>
      </div>
    </div>
  );
}

function SelectOptions({ optionValue }) {
  return <option value={optionValue}>{optionValue}</option>;
}

function ItemSort({ sortValue }) {
  return <option value={sortValue}>{sortValue}</option>;
}

function Item({ item, onDelete, onTogglePacked }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <p style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </p>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </div>
  );
}

export default App;
