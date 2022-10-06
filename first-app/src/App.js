import logo from "./logo.svg";
// 이미지 불러오는 법
import glass from "./glass.png";
import "./App.css";
// .js 생략가능
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
function App() {
  return (
    <>
      <div>JERRY WELT</div>
      <FunctionComponent></FunctionComponent>
      <FunctionComponent />
      <ClassComponent></ClassComponent>
      <ClassComponent />
    </>
  );
}

export default App;
