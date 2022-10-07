// 함수형 컴포넌트에서 state를 이용하려면 이 한 줄 필요
import React, { useState } from "react";

const UseStateComponent2 = (props) => {
  // 구조분해 할당
  // useState가 return하는 값이 배열
  // 0번 인덱스 -> 변수
  // 1번 인덱스 -> 함수
  // 배열구조분해 할당을 해야함
  //   function useState(초기값){
  //     ~~~~~~~

  //     return [변수, 함수]
  //   }
  let [message, setMessage] = useState("");
  const onClickEnter = () => {
    setMessage("안녕하세요~");
  };
  const onClickLeave = () => {
    setMessage("안녕히가세요~");
  };
  return (
    <>
      <div>
        <h1>{message}</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>
    </>
  );
};

export default UseStateComponent2;
