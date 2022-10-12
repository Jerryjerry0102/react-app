import odung from "./odung.jpg";

function FunctionTest2() {
  let style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20px",
  };
  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={odung}></img>
      </div>
    </>
  );
}

export default FunctionTest2;
