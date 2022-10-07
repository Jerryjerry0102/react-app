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

function App() {
  return (
    <>
      {/* <EventClassComponent></EventClassComponent> */}
      <StateEventPrac1 />
      <StateEventPrac2 />
    </>
  );
}

// 이 코드는 다른 파일에서 이 파일을 import할 때,
// 위에서 선언한 App 함수를 불러오도록 설정하는 코드
export default App;
