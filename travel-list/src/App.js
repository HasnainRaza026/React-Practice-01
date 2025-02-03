import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <p>🏝️ &nbsp; Far &nbsp; &nbsp; Away &nbsp; 🧳</p>
      </div>
      <div className="add">
        <div>
          <p className="need">What do you need for your 😍 trip?</p>
          <select id="options">
            {Array.from({ length: 20 }, (_, i) => (
              <SelectOptions key={i + 1} optionValue={i + 1} />
            ))}
          </select>
          <input type="text" placeholder="Items.." />
          <button>ADD</button>
        </div>
      </div>
      <div className="items"></div>
      <div className="footer">
        <p>Start adding some items to your packing list 🚀</p>
      </div>
    </div>
  );
}

function SelectOptions({ optionValue }) {
  return <option value={optionValue}>{optionValue}</option>;
}

export default App;
