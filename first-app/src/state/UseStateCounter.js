import { useState } from "react";

const UseStateCounter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>

      <button onClick={() => setNumber((prevState) => prevState - 1)}>
        -1
      </button>
      <button onClick={() => setNumber((prevState) => prevState + 1)}>
        +1
      </button>
    </>
  );
};

export default UseStateCounter;
