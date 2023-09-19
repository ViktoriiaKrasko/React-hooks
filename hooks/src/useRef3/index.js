import { useEffect, useRef, useState } from "react";

import "../App.css";

export default function RefSaveValue() {
  const prevValueRef = useRef(null);

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("value:", value);
    console.log("prevValueRef:", prevValueRef);

    prevValueRef.current = value;
  }, [value]);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  console.log("render");

  return (
    <main className="App-header">
      <p>Current value: {value}</p>
      <p>Previous value: {prevValueRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </main>
  );
}
