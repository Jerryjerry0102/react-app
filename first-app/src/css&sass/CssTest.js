import style from "./CssTest.module.css";

const CssTest = () => {
  return (
    <>
      <div className={`${style.test} ${style.txt}`}>안녕</div>
    </>
  );
};

export default CssTest;
