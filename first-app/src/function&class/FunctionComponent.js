import PropTypes from "prop-types";

function FunctionComponent(props) {
  // props가 아래처럼 정의되어 있는 것
  // props = { title: "타이틀", name: "코딩온", children: "자식" };
  let { title, children } = props;
  // 구조분해 할당
  // 이러면 아래서 그냥 title로 사용할 수 있음.
  return (
    <>
      <div>제목 : {title}</div>
      <div>이름 : {props.name}</div>
      <div>{children}</div>
      <div>나이: {props.age}</div>
    </>
  );
}

// 화살표 함수
// const FunctinoComponent = () => {
//   return (
//     <>
//       <div>안녕</div>
//     </>
//   );
// };

FunctionComponent.propTypes = { title: PropTypes.string };

FunctionComponent.defaultProps = { title: "Jerry", name: "박재희", age: "25" };

export default FunctionComponent;
