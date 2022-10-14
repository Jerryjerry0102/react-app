import {
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

function Product() {
  const { id, name } = useParams(); // 객체구조분해 { id: 1 }
  // const param = useParams(); // param.id로 쳐서 불러오면 됨

  const location = useLocation();
  console.log("useLocation: ", location);

  let [searchParam, setSearchParam] = useSearchParams();
  console.log("useSearchParam:", searchParam);
  // searchParam.get("") 이렇게 찾아 쓸 수 있다.

  // useNavigate는 함수를 반환한다. navigate는 변수처럼 보이지만 함수
  let navigate = useNavigate();

  return (
    <>
      <h1>{id}번 상품페이지 입니다.</h1>
      <h3>이름은 {name}</h3>
      <h3>{location.search}</h3>
      <h3>가격은 {searchParam.get("price")}</h3>
      <ul>
        <li>
          <button onClick={() => navigate(-2)}>Go 2 pages back</button>
          <button onClick={() => navigate(-1)}>Go back</button>
          <button onClick={() => navigate(1)}>Go forward</button>
          <button onClick={() => navigate(2)}>Go 2 pages forward</button>
          <button onClick={() => navigate("/")}>Go Root</button>
        </li>
      </ul>
    </>
  );
}

export default Product;
