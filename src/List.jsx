import React from "react";
import { useState, useEffect } from "react";

const List = ({ array }) => {
  const [state, setState] = useState(array);
  const arrId = state.map((el, index) => {
    return { id: index, el };
  });

  useEffect(() => {
    setState(array);
  }, [array]);

  const changeEl = (id) => {
    setState((prevState) => {
      const newState = [...prevState];
      newState[id] = "!!!" + newState[id];
      return newState;
    });
  };
  console.log(arrId);
  return (
    <>
      <ul
        style={{
          listStyleType: "none",
          padding: "10px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          border: "3px solid rgb(227 125 125 / 61%)",
        }}
      >
        {arrId.map((el) => (
          <li
            key={el.id}
            style={{
              display: "grid",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "175px",
              border: "3px solid rgb(227 125 125)",
              padding: "10px 40px",
            }}
          >
            {el.el}
            <button
              onClick={() => changeEl(el.id)}
              style={{ background: "palegoldenrod" }}
            >
              Кнопка
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
