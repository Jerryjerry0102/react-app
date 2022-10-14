import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Product from "./Product";
function RouterTest() {
  return (
    <BrowserRouter>
      <div>안녕</div>
      <a href="/"></a>
      <Link to="/" style={{ margin: "0 10px" }}>
        메인
      </Link>
      <Link to="/product/1/박재희" style={{ margin: "0 10px" }}>
        1번 상품
      </Link>
      <Link to="/product/2/유승연" style={{ margin: "0 10px" }}>
        2번 상품
      </Link>
      {/* query는 client가 적는 부분만 ?를 적으면 된다 */}
      <Link
        to="/product/3/익명?productname=가방&price=1000#test"
        style={{ margin: "0 10px" }}
      >
        3번 상품
      </Link>
      <Routes>
        {/* element에는 path에 따른 주소로 들어갔을 때 보여줄 컴포넌트 */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id/:name" element={<Product />}></Route>
        {/* <Routes path="*" element={< />}></Routes> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterTest;
