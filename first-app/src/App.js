import logo from "./logo.svg";
import glass from "./glass.png";
import "./App.css";

function App() {
  const title = "Jerry World";
  return (
    <>
      <div className="a">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="div7"></div>
        <img className="div8" src={glass} />
        <img className="div9" src={glass} />
        <img className="div10" src={glass} />
      </div>
    </>
  );
}

export default App;
