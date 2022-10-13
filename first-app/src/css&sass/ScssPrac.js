import "./ScssPrac.scss";
import glass from "./glass.png";

function ScssPrac() {
  return (
    <>
      <div className="a">
        <div className="circle body red"></div>
        <div className="circle body orange"></div>
        <div className="circle body yellow"></div>
        <div className="circle body green"></div>
        <div className="circle body skyblue"></div>
        <div className="circle white"></div>
        <div className="circle black"></div>
        <img src={glass} className="glass g1"></img>
        <img src={glass} className="glass g2"></img>
        <img src={glass} className="glass g3"></img>
      </div>
    </>
  );
}

export default ScssPrac;
