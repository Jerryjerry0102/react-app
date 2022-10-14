import { useParams, useNavigate } from "react-router-dom";

const PracProduct = () => {
  const { id, name } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1>상세페이지 입니다</h1>
      <h3>{id}번 상품페이지 입니다.</h3>
      <h3>상품 이름은 {name}</h3>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
    </>
  );
};

export default PracProduct;
