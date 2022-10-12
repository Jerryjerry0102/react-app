import { Component } from "react";
import odung from "./odung.jpg";
//이미지 삽입 방법
// 1) 원하는 이미지를 src 폴더에 넣어줍니다.
// 2) 이미지를 import 합니다.
// 예를 들어 import coding from "이미지 경로";
// 3) 이미지 태그를 작성합니다.
// 예를 들어 <img src={coding}>

class ClassTest2 extends Component {
  render() {
    let style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={odung}></img>
        </div>
      </>
    );
  }
}

export default ClassTest2;
