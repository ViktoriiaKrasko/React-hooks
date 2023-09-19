import { useRef } from "react";

import "../App.css";

export default function NewRef() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollby(ref) {
    console.log(ref);
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollBy({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="App">
      <main>
        <button onClick={() => handleScrollby(firstCatRef)}>Tom</button>
        <button onClick={() => handleScrollby(secondCatRef)}>Twix</button>
        <button onClick={() => handleScrollby(thirdCatRef)}>Layla</button>
        <div>
          <ul
            style={{
              display: "grid",
              gap: "500px",
              marginBottom: "1000px",
              listStyle: "none",
            }}
          >
            <li>
              <img
                src="https://placekitten.com/g/200/200"
                alt="Tom"
                ref={firstCatRef}
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/300/200"
                alt="Twix"
                ref={secondCatRef}
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/250/200"
                alt="Layla"
                ref={thirdCatRef}
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
