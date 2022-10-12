import { Component } from "react";

class StateEventPrac2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: true,
    };
  }
  // 화살표 함수를 쓰면 아래 this.changeText만 써도 가능
  disappear = () => {
    this.setState({ showMe: false });
  };
  show = () => {
    this.setState({ showMe: true });
  };
  render() {
    return (
      <>
        <div>
          {this.state.showMe ? (
            <button onClick={this.disappear}>사라져라</button>
          ) : (
            <button onClick={this.show}>보여라</button>
          )}
          {this.state.showMe ? <div>안녕하세요</div> : null}
        </div>
      </>
    );
  }
}
export default StateEventPrac2;
