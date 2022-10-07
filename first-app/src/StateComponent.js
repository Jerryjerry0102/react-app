import { Component } from "react";
import PropTypes from "prop-types";

class StateComponent extends Component {
  //* 기존 형태
  // constructor(props) {
  //   // super라는 함수는 부모 클래스에 생성자를 실행시킨다.
  //   super(props);
  //   // state는 class형에서 객체로 생성한다.
  //   this.state = {
  //     number: 0,
  //     text: "안녕하세요",
  //   };
  // }

  //* 현재 버전
  state = { number: 0, text: "안녕하세요" };

  render() {
    const { number, text } = this.state;
    return (
      <>
        <h1>{number}</h1>
        <div>{text}</div>
        <button
          onClick={() => {
            // this.setState() -> state의 값을 바꾸는 함수(비동기함수)
            // 값을 변경하고 싶은 것을 객체형태로 넣어주면 된다.
            // 바로 동작하는 것이 아닌, 저장해놓고 나중에 실행되는 것이기 때문에
            // setState를 2번 쓴다 해서 2번 동작하는 것은 아니다.
            this.setState((prev) => ({ number: prev.number + 1 }));
            // this.setState 안에 메소드를 넣어서 객체를 return하게 되면
            // 동기적인 함수를 실행시킬 수 있다.
            // 흔한 상황은 아님
            this.setState((prev) => {
              return { number: prev.number + 1 };
            });
            // this.setState({ number: this.state.number + 1 });
          }}
        >
          {" "}
          설정{" "}
        </button>
      </>
    );
  }
}

export default StateComponent;
