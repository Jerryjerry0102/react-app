import { Component } from "react";

class StateEventPrac1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "검정색",
      color: "black",
    };
  }
  // 화살표 함수를 쓰면 아래 this.changeText만 써도 가능
  changeColor = (color, e) => {
    this.setState({
      text: e.target.innerText,
      color: color,
    });
  };

  render() {
    return (
      <>
        <div>
          <h1 style={{ color: this.state.color }}>{this.state.text} 글씨</h1>
          <button
            onClick={(e) => {
              this.changeColor("red", e);
            }}
          >
            빨간색
          </button>
          <button
            onClick={(e) => {
              this.changeColor("blue", e);
            }}
          >
            파란색
          </button>
        </div>
      </>
    );
  }
}
export default StateEventPrac1;
