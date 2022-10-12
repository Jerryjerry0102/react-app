// react 라이브러리에 있는 component를 상속 받는다.
// 객체 분해(Component라는 value와 아마 key값이 class일 것)해서 react안에 있는 Component 가져옴
import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  static defaultProps = {
    title: "기본 제목",
    content: "기본 내용",
  };

  static propTypes = {
    title: PropTypes.string,
  };

  // constructor 대신
  render() {
    // this.props = {
    //   title: "TITLE",
    //   content: "CONTENT"
    // };
    let { title } = this.props;
    return (
      <>
        <div>클래스형 컴포넌트</div>
        <div>title: {title}</div>
        <div>content: {this.props.content}</div>
      </>
    );
  }
}

export default ClassComponent;
