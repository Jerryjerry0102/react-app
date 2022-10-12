import { Component } from "react";
import "./ScrollBox.css";

class ScrollBox extends Component {
  topScroll = () => {
    this.div.scrollTop = 0;
  };
  bottomScroll = () => {
    this.div.scrollTop = this.div.scrollHeight - this.div.clientHeight;
  };

  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.div = ref;
          }}
          className="div1"
        >
          <div className="div2"></div>
        </div>
        <button onClick={this.topScroll}>맨 위로</button>
        <button onClick={this.bottomScroll}>맨 밑으로</button>
      </>
    );
  }
}

export default ScrollBox;
