import style from "./Earthworm.module.css";
import glass from "./glass.png";

const Earthworm = () => {
  return (
    <>
      <div className={style.a}>
        <div className={style.div1}></div>
        <div className={style.div2}></div>
        <div className={style.div3}></div>
        <div className={style.div4}></div>
        <div className={style.div5}></div>
        <div className={style.div6}></div>
        <div className={style.div7}></div>
        <img src={glass} className={style.div8}></img>
        <img src={glass} className={style.div9}></img>
        <img src={glass} className={style.div10}></img>
      </div>
    </>
  );
};

export default Earthworm;
