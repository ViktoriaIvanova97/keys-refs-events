import React from "react";
import { useState, useEffect } from "react";

const List = ({ arr }) => {
  const [state, setState] = useState(arr);
  const arrId = state.map((el, index) => {
    return { id: index, el };
  });

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
      <ul>
        {arrId.map((el) => (
          <li key={el.id}>
            {el.el}
            <button onClick={() => changeEl(el.id)}>Кнопка</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
