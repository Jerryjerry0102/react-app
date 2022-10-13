import { useReducer, useState } from "react";
const HookTest2 = () => {
  // useReducer 뒤에 오는 첫 번째 인자는 함수, 두 번째 인자는 초기값
  // state를 효율적으로 사용하기 위해서
  const [state, dispatch] = useReducer(reducer, { number: 0, text: "" });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // reducer 안에 매개변수 2개를 받아야 함
  // state: 현재 state
  // action: 어떤 동작을 할 건지
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, number: state.number + 1 };
      case "DECREMENT":
        return { ...state, number: state.number - 1 };
      default:
        return state;
    }
  }
  return (
    <>
      <h1>{state.number}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </>
  );
};

export default HookTest2;
