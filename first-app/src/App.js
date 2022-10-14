// import logo from "./logo.svg";
// // 이미지 불러오는 법
// import HookTest from "./hook/HookTest";
// import HookTest2 from "./hook/HookTest2";
// import HookTest3 from "./hook/HookTest3";
// import CssTest from "./css&sass/CssTest";
// import Earthworm from "./css&sass/Earthworm";
// import Scss from "./css&sass/Scss";
// import ScssPrac from "./css&sass/ScssPrac";
// import ScssPrac2 from "./css&sass/ScssPrac2";
// import RouterTest from "./router/RouterTest";
// // .js 생략가능

import Mystyled from "./css&sass/Mystyled";

const App = () => {
  return (
    <>
      <Mystyled />
    </>
  );
};

// 이 코드는 다른 파일에서 이 파일을 import할 때,
// 위에서 선언한 App 함수를 불러오도록 설정하는 코드
export default App;

// 2022.10.12 수업
// import React, { Component } from "react";
// import LifeCycleTest from "./LifeCycleTest";

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000",
//     value: true,
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <button
//             onClick={() => {
//               this.setState({ value: !this.state.value });
//             }}
//           >
//             컴포넌트 바껴라!
//           </button>
//         </div>

//         <button onClick={this.handleClick}>랜덤 색상</button>

//         {this.state.value ? (
//           <LifeCycleTest color={this.state.color} />
//         ) : (
//           <div />
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// 실습;
// import React, { Component } from "react";
// import TestComponent from "./lifeCycle/TestComponent";
// import LifeCyclePractice from "./lifeCycle/LifeCyclePractice";
// import HookLifeCyclePractice from "./hook/HookLifeCyclePractice";

// class App extends Component {
//   state = {
//     value: true,
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <button
//             onClick={() => {
//               this.setState({ value: !this.state.value });
//             }}
//           >
//             컴포넌트 바껴라!
//           </button>
//         </div>

//         <hr style={{ margin: "50px 0" }}></hr>

//         {this.state.value ? <HookLifeCyclePractice /> : <TestComponent />}
//       </div>
//     );
//   }
// }

// export default App;

// 시작
// import React, { Component } from "react";
// import Scroll from "./ref/Scroll";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Scroll ref={(ref) => (this.Scroll = ref)} />
//         <button
//           onClick={() => {
//             this.Scroll.scrollBottom();
//           }}
//         >
//           맨 밑으로
//         </button>
//       </>
//     );
//   }
// }

// export default App;

// App.js
// import React, { Component } from "react";
// import LifeCycle from "./lifeCycle/LifeCycle";

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000",
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>

//         <LifeCycle color={this.state.color} />
//       </div>
//     );
//   }
// }

// export default App;

// .js 생략가능

// 10.14 Router수업
// import PracNav from "./router/PracNav";
// import PracContent from "./router/PracContent";
// import PracFooter from "./router/PracFooter";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <PracNav />
//         <PracContent />
//         <PracFooter />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import Info from "./hook/Info";
// import UseStateCounter from "./state/UseStateCounter";

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>

//       <hr />
//       {visible && <Info />}
//     </>
//   );
// };

// // 이 코드는 다른 파일에서 이 파일을 import할 때,
// // 위에서 선언한 App 함수를 불러오도록 설정하는 코드
// export default App;

// classnames
// import Mycss from "./css&sass/Mycss";
// import Sass_ex from "./css&sass/Sass_ex";

// const App = () => {
//   return (
//     <>
//       <Mycss yellow={true} green={"green"} />
//     </>
//   );
// };

// export default App;
