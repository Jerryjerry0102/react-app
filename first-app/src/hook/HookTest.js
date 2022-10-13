import { useEffect, useRef, useState } from "react";
const HookTest = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let input = useRef(null);
  // 첫 번째 인자는 함수
  // 그 함수 안에서 일어나는 일은 mount될 때랑 update 될 때 일어남
  // componentDidMount, componenetDidUpdate 합쳐놓은 것
  // 둘을 구분하고 싶다면 두 번째 인자를 활용해야 한다.
  // 두 번째 인자에는 배열이 들어감
  // 빈배열을 넣어주면 mount 될 때만 일어남
  // componentDidMount 구현
  useEffect(() => {
    console.log("mount");

    console.log(input.current);

    let num = 0;
    // setInterval(function () {
    //   console.log("setInterval", num++);
    // }, 1000);
    // return 안에 들어가는 게
    // componentWillUnmount 안에서 일어나는 작업이라고 생각하면 됨.
    return () => {
      //   console.log("componentWillUnmount");
      //   clearInterval(this.time);
    };
  }, []);
  // 배열 안에 들어오는 값은 state 변수여야 한다.
  // name이라는 state를 배열 안에 넣어주면 name이 변경될 때 코드 실행
  // componenetDidUpdate 구현
  useEffect(() => {
    console.log("update");
  }, [name]);
  useEffect(() => {
    console.log("update2");
  }, [name, password]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {console.log("render")}
      <input ref={input} onChange={onChangeName}></input>
      <input type="password" onChange={onChangePassword}></input>
    </>
  );
};

export default HookTest;
