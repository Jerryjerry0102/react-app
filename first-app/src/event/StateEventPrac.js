import { Component } from "react";

class StateEventPrac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World",
    };
  }
  // 화살표 함수를 안 쓰면 아래 .bind(this) 붙이고
  changeText() {
    this.setState({ text: "Goodbye World!" });
  }
  // 화살표 함수를 쓰면 아래 this.changeText만 써도 가능
  changeText = () => {
    this.setState({ text: "Goodbye World!" });
  };
  render() {
    return (
      <>
        <div>
          <h1>{this.state.text}</h1>
          <button onClick={this.changeText.bind(this)}>클릭</button>
          <button onClick={this.changeText}>클릭</button>
        </div>
      </>
    );
  }
}
export default StateEventPrac;
