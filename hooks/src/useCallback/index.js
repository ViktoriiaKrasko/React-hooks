import { useState, useCallback, useEffect } from "react";

import "../App.css";

function Child(state) {
  const handleClick = useCallback(() => alert(state), [state]);

  console.log("render");

  useEffect(() => {
    console.log("new handleClick");
  }, [handleClick]);

  return <div onClick={handleClick}> Child</div>;
}

export default function CallBack() {
  const [state, setState] = useState(0);

  const [state2, setState2] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);

    const id2 = setInterval(() => {
      setState2((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  return (
    <main className="App-header">
      Hello You! {state} <Child state={state2} />
    </main>
  );
}
