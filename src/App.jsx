import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [state, setState] = useState(["dog", "cat", "giraffe", "lion"]);
  const inputRef = useRef(null);

  const valid = () => {
    inputRef.current.focus();
  };
  const enterEl = (e) => {
    if (e.key === "Enter") {
      if (text.trim() !== "") {
        setState([...state, text]);
        setText("");
      }
    }
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          border: "3px solid rgb(227 125 125 / 61%)",
        }}
      >
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={enterEl}
        />
        <button
          onClick={() => valid()}
          style={{ marginLeft: "33px", background: "palegoldenrod" }}>
          Фокус
        </button>
      </div>

      <List array={state} />
    </>
  );
}

export default App;
