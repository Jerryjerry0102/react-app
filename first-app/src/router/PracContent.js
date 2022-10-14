import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import PracProduct from "./PracProduct";

const PracContent = () => {
  return (
    <>
      <Routes>
        {/* element에는 path에 따른 주소로 들어갔을 때 보여줄 컴포넌트 */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id/:name" element={<PracProduct />}></Route>
        {/* <Routes path="*" element={< />}></Routes> */}
      </Routes>
    </>
  );
};

export default PracContent;
