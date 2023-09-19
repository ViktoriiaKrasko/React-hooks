import { useState, useEffect } from "react";

import "../App.css";

export default function GeoLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {location ? (
          <div>
            <h2>You geolocation: </h2>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>Receiving data... </p>
        )}
      </header>
    </div>
  );
}
