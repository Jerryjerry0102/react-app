import { Component } from "react";
import PropTypes from "prop-types";

class PropsPrac3 extends Component {
  static defaultProps = {
    text: "이건 기본 text props입니다.",
  };
  static propTypes = { text: PropTypes.string };
  valid() {
    console.log("안녕");
  }
  render() {
    let { text } = this.props;
    return (
      <>
        <div>{text}</div>
        <button onClick={() => this.valid()}> 콘솔 메세지</button>
      </>
    );
  }
}

export default PropsPrac3;
