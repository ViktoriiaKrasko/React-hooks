import { useEffect, useRef } from "react";

import "../App.css";

export default function RefFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.focus(); //Фокус на введені післі завантаження компонента
  }, []);

  return (
    <main className="App-header">
      <input ref={inputRef} placeholder="Enter your complaint" />
      <input type="text" placeholder="Enter your contacts" />
    </main>
  );
}
