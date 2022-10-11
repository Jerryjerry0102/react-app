// 리액트를 불러와서 사용할 수 있게 해주는 코드
// 리액트 프로젝트를 만들 때 node_modules라는 디렉터리로 함께 생성되는데
// 프로젝트 생성 과정에서 node_modules 디렉터리에 react 모듈이 설치됨.
// 그리고 이렇게 import 구문을 통해 리액트를 불러와서 사용할 수 있는 것
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 리액트가 화면을 출력하는 코드는 ReactDom.render 이부분
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
