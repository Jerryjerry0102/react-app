import React, { useState } from "react";

const Event_ex = () => {
  let listTemp = [
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ];
  const [list, setList] = useState(listTemp);
  const [info, setInfo] = useState({ name: "", email: "" });
  const { name, email } = info;
  const onChange = (e) => {
    let newInfo = { ...info, [e.target.name]: e.target.value };
    // console.log(newInfo);
    setInfo(newInfo);
  };
  const register = () => {
    let newList = list.concat(info);
    setList(newList);
    setInfo({ name: "", email: "" });
  };
  const onEnter = (e) => {
    if (e.key === "Enter") register();
  };
  const onDoubleClick = (value) => {
    let newList = list.filter((value2) => {
      return value2.email !== value.email;
    });
    setList(newList);
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        type="email"
        placeholder="이메일"
        name="email"
        value={email}
        onChange={onChange}
        onKeyPress={onEnter}
      ></input>
      <button onClick={register}>등록</button>
      <ul>
        {list.map((value) => {
          return (
            <li
              key={value.email}
              onDoubleClick={() => {
                onDoubleClick(value);
              }}
            >
              {value.name + ": " + value.email}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Event_ex;
