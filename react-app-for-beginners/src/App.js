import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";
import ToDoList from "./ToDoList";
import "./styles.css";

function App() {
  return (
    <div>
      {/* <ToDoList /> */}
      {/* <CoinTracker /> */}
      <MovieApp />
    </div>
  );
}

export default App;

// #6 EFFECTS (useEffect cleanUp function 관련)
// import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prevState) => !prevState);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// export default App;

// #6 EFFECTS (useEffect 관련)
// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setCounter((prevState) => prevState + 1);
//   const onChange = (e) => setKeyword(e.target.value);
//   useEffect(() => console.log("I run only once."), []);
//   useEffect(() => console.log("I run when 'keyword' changes."), [keyword]);
//   useEffect(() => console.log("I run when 'counter' changes."), [counter]);
//   useEffect(
//     () => console.log("I run when 'keyword & counter' changes."),
//     [keyword, counter]
//   );

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

// #5 CREATE REACT APP (css 관련)
// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"continue"} />
//     </div>
//   );
// }

// export default App;
