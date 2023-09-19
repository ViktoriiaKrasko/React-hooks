import { useState, memo, useEffect } from "react";

import "../App.css";

const Child = memo(
  ({ value }) => {
    console.log("child render", value);

    return <div>{value}</div>;
  },
  (prev, next) => {
    console.log(prev, next);

    return false;
  }
);

export default function Memoization() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setValue((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="App-header">
      <Child value={value} />
    </main>
  );
}
