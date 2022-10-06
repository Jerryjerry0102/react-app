// react 라이브러리에 있는 component를 상속 받는다
import { Component } from "react";

class ClassComponent extends Component {
  // constructor 대신
  render() {
    return (
      <>
        <div>안녕?</div>
        <div>클래스형 컴포넌트</div>
      </>
    );
  }
}

export default ClassComponent;
