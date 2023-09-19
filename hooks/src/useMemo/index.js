import { useEffect, useState, useMemo } from "react";

import "../App.css";

function Child() {
  const data = useMemo(() => {
    return Math.random() + Math.random + console.log("Hey you!");
  }, []);

  return <div>Child</div>;
}

export default function Memo() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setState((prev) => prev + 1), 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main className="App-header">
      Hello You! {state} <Child />
    </main>
  );
}
