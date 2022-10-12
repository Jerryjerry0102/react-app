import book from "./odung.jpg";
import "./PropsPrac2.css";

function PropsPrac2(props) {
  let { content, writer, price, sort } = props;
  return (
    <>
      <div className="bestSeller">
        <div className="inner">
          <div className="top">
            <div className="title">이번주 베스트셀러</div>
            <img src={book}></img>
            <div className="content">{content}</div>
          </div>
          <div className="detail">
            <div>저자: {writer}</div>
            <div>판매가: {price}</div>
            <div>구분: {sort}</div>
          </div>
        </div>
      </div>
    </>
  );
}

PropsPrac2.defaultProps = { food: "불보쌈" };

export default PropsPrac2;
