import { useState } from "react";
import "../index.css";
import { Input, AppHeading, InputField } from "./Input";
import { useFetch } from "../hooks/useFetch";
import { Output, ResultHeading } from "../Output";

function App() {
  const [inputLocation, setInputLocation] = useState("");
  const [outputLocation, setOutputLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useFetch(inputLocation, setOutputLocation, setWeather, setIsLoading);

  return (
    <div className="app">
      <Input>
        <AppHeading />
        <InputField inputVal={inputLocation} onInput={setInputLocation} />
      </Input>
      {isLoading ? (
        <div className="loading">
          <div class="loader"></div>
        </div>
      ) : weather ? (
        <Output weather={weather}>
          <ResultHeading outputLocation={outputLocation} />
        </Output>
      ) : null}
    </div>
  );
}

export default App;
