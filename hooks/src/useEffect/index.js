import { useState, useEffect } from "react";

import "../App.css";

export default function UseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     function handleMove(e) {
  //       setPosition({ x: e.clientX, y: e.clientY });
  //     }

  //     window.addEventListener("pointermove", handleMove);

  //     return () => {
  //       window.removeEventListener("pointermove", handleMove);
  //     };
  //   }, []);

  useWindowListener("pointermove", (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });

  return (
    <div className="App">
      <h1>Hello UseEffect!</h1>
      <div
        style={{
          position: "absolute",
          backgroundColor: "lime",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      ></div>
    </div>
  );
}

// Custom hook
export function useWindowListener(eventType, listener) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
