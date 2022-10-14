import { Link } from "react-router-dom";
const style = { backgroundColor: "green" };
const styles = { margin: "0 10px" };
const PracNav = () => {
  return (
    <>
      <div style={style}>
        <h3>navbar입니다</h3>
        <Link to="/">메인</Link>
        <Link to="/product/1/가방" style={styles}>
          1번 상품
        </Link>
        <Link to="/product/2/신발" style={styles}>
          2번 상품
        </Link>
        <Link to="/product/3/의류" style={styles}>
          3번 상품
        </Link>
      </div>
    </>
  );
};

export default PracNav;
