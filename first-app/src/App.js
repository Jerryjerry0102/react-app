import logo from "./logo.svg";
// 이미지 불러오는 법
import glass from "./glass.png";
import "./App.css";
// .js 생략가능
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import ClassTest from "./ClassTest";
import ClassTest2 from "./ClassTest2";
import FunctionTest from "./FunctionTest";
import FunctionTest2 from "./FunctionTest2";
import PropsPrac from "./PropsPrac";
import PropsPrac2 from "./PropsPrac2";
import PropsPrac3 from "./PropsPrac3";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import StateComponent from "./StateComponent";
import StatePrac from "./StatePrac";
import UseStatePrac from "./UseStatePrac";
import EventClassComponent from "./EventClassComponent";
import EventHandling from "./EventHandling";
import StateEventPrac from "./StateEventPrac";
import StateEventPrac1 from "./StateEventPrac1";
import StateEventPrac2 from "./StateEventPrac2";
// 복습컨텐츠
import Counter from "./Counter";
import State from "./State";
import Say from "./Say";
import ReviewEvent from "./ReviewEvent";
import Map from "./Map";
import Event_ex from "./Event_ex";
import Sample from "./Sample";
// 수업 실습
import Event_prac from "./Event_prac";

function App() {
  return (
    <>
      {/* <Map /> */}
      {/* <Event_ex /> */}
      {/* <Event_prac /> */}
      <Sample />
    </>
  );
}

// 이 코드는 다른 파일에서 이 파일을 import할 때,
// 위에서 선언한 App 함수를 불러오도록 설정하는 코드
export default App;
