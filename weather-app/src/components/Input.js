export function Input({ children }) {
  return <div className="input">{children}</div>;
}

export function AppHeading() {
  return <p className="app-heading">WEATHER APP</p>;
}

export function InputField({ inputVal, onInput }) {
  return (
    <input
      type="text"
      placeholder="SEARCH FORM LOCATION"
      value={inputVal}
      onChange={(event) => onInput(event.target.value)}
    />
  );
}
