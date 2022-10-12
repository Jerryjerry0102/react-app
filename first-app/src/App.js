// import logo from "./logo.svg";
// // 이미지 불러오는 법
// import glass from "./glass.png";
// import "./App.css";
// // .js 생략가능

// function App() {
//   return (
//     <>
//     </>
//   );
// }

// // 이 코드는 다른 파일에서 이 파일을 import할 때,
// // 위에서 선언한 App 함수를 불러오도록 설정하는 코드
// export default App;

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

// 실습
// import React, { Component } from "react";
// import TestComponent from "./TestComponent";
// import LifeCyclePractice from "./LifeCyclePractice";

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

//         {this.state.value ? <LifeCyclePractice /> : <TestComponent />}
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

import React, { Component } from "react";
import LifeCycle from "./lifeCycle/LifeCycle";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>

        <LifeCycle color={this.state.color} />
      </div>
    );
  }
}

export default App;
