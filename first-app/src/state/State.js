import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  }

  render() {
    return (
      <button onClick={() => this.updateCount()}>
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default State;
