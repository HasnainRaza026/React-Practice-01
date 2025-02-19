import { useState, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./index.css";
import { useGeolocator } from "./hooks/useGeolocator";

function App() {
  const [location, setLocation] = useState(null);
  const mapElem = useRef(null);
  const map = useRef(null);

  // Use the environment variable
  maptilersdk.config.apiKey = process.env.REACT_APP_MAPTILER_API_KEY;

  // Function to get the user's location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error obtaining location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Initialize Street View once location is available
  useGeolocator(map, mapElem, location);

  return (
    <div className="app">
      <button onClick={handleGetLocation}>Get My Location</button>
      <div id="map" ref={mapElem} />
    </div>
  );
}

export default App;
