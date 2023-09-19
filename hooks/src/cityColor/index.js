import { useState } from "react";
import "./index.css";

const getInitialColor = (length) => {
  if (length > 3) return 1;
  return 0;
};

export default function City() {
  const list = [
    { id: 1, city: "New York" },
    { id: 2, city: "Kyiv" },
    { id: 3, city: "London" },
    { id: 4, city: "Tokio" },
  ];

  const color = ["blue", "orange", "lime"];

  const [index, setIndex] = useState(0);

  const [colorIndex, setColorIndex] = useState(() =>
    getInitialColor(color.length)
  );

  const handleClick = () => {
    setIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickColor = () => {
    setColorIndex((prevColorIndex) =>
      prevColorIndex === color.length - 1 ? 0 : prevColorIndex + 1
    );
    console.log("update", colorIndex);
  };

  console.log("render", index, colorIndex);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Next city</button>
        <button onClick={handleClickColor}>Next color</button>

        <h1 style={{ color: color[colorIndex] }}>City: {list[index].city}</h1>
      </header>
    </div>
  );
}
