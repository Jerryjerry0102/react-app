// 10.11 React 수업
import React, { useState } from "react";

function Map() {
  let listTemp = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 4, value: "d" },
    { id: 5, value: "e" },
  ];

  let [list, setList] = useState(listTemp);
  let [inputValue, setInputValue] = useState("");
  let [inputId, setInputId] = useState(list.length + 1);

  let animals = ["dog", "turtle", "rabbit"];
  let newAnimals = animals.filter((animal) => {
    return animal !== "turtle";
  });

  return (
    <>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let newList = list.concat({
            id: inputId,
            value: inputValue,
          });
          setList(newList);
          setInputValue("");
          setInputId((prevState) => prevState + 1);
        }}
      >
        추가
      </button>
      <ul>
        {list.map((value) => {
          return (
            <li
              key={value.id}
              onDoubleClick={(e) => {
                let newList = list.filter((value2) => {
                  return value2.id !== value.id;
                });
                setList(newList);
              }}
            >
              {value.value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Map;
