import React, { useState } from "react";

const Say = () => {
  // useState 함수의 인자에는 상태의 초기값을 넣어준다.
  // useState의 초기값은 숫자일 수도, 문자열일 수도, 배열일 수도 있다. 값의 형태는 자유\
  // 함수를 호출하면 배열이 반환되는데,
  // 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔주는 함수이다.
  // 이러한 함수를 세터(setter) 함수라고 부른다.
  // 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 지어줄 수 있다.
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  //useState는 한 컴포넌트에서 여러번 사용해도 상관없다.
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>

      <button onClick={() => setColor("red")}>빨간색</button>
      <button onClick={() => setColor("blue")}>파란색</button>
      <button onClick={() => setColor("orange")}>주황색</button>
    </div>
  );
};

export default Say;
