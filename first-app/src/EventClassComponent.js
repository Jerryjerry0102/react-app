import { Component } from "react";

class EventClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    // 여기서 this는 class 자체
    // 이렇게 constructor에서 미리 bind해주면
    // 아래에서 <button onClick={this.changeNumber}>버튼</button>
    // 이렇게 쓸 수 있다.
    // this.changeNumber = this.changeNumber.bind(this);
  }
  changeNumber(e) {
    // e.target안에 button이 담김
    console.log(e.target);
    console.log(e.target.innerText);
    this.setState({ number: this.state.number + 1 });
  }
  // 화살표 함수를 하면 bind에서 this를 보낼 필요도
  // constructor에서 미리 bind해 줄 필요도 없다.
  changeNumber = (e) => {
    console.log(e.target);
    console.log(e.target.innerText);
    this.setState({ number: this.state.number + 1 });
  };

  consoleLog(a, name) {
    console.log(a.target.innerText);
    console.log(name, "안녕");
  }
  render() {
    return (
      <>
        {/* 화살표 함수를 만들어야 함수에 ()를 칠 수 있다. */}
        {/* 화살표 함수를 만들지 않고 바로 써주게 되면 ()치면 안 된다. */}
        <button
          onClick={(a) => {
            this.consoleLog(a, "김소연");
          }}
        >
          안녕
        </button>
        {/* bind함수를 쓸 수도 있음 */}
        <button onClick={this.consoleLog.bind(this, "김소연")}>안녕</button>

        <h1>{this.state.number}</h1>
        <button onClick={this.changeNumber.bind(this)}>버튼</button>
        <button onClick={this.changeNumber}>버튼</button>
        <button
          onClick={(e) => {
            this.changeNumber(e);
          }}
        >
          버튼
        </button>
      </>
    );
  }
}

export default EventClassComponent;
