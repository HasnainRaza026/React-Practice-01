export function Output({ children, weather }) {
  return (
    <div className="output">
      {children}
      <ul>
        {weather.map((val) => (
          <Weather key={val.day} item={val} />
        ))}
      </ul>
    </div>
  );
}

export function ResultHeading({ outputLocation }) {
  return (
    <p>
      Weather at {outputLocation[0]} {outputLocation[1]}
    </p>
  );
}

function Weather({ item }) {
  return (
    <div className="weather">
      <div className="icon">
        <img src={item.icon} alt="icon" />
      </div>
      <div className="data">
        <p>{item.day}</p>
        <p>
          {item.temp_min}&deg; - <span>{item.temp_max}&deg;</span>
        </p>
      </div>
    </div>
  );
}
