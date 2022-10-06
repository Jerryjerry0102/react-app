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

function App() {
  return (
    <>
      <PropsPrac3 text="App 컴포넌트에서 넘겨준 text props입니다."></PropsPrac3>
      <PropsPrac3></PropsPrac3>
    </>
  );
}

export default App;
