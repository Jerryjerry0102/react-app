import React, { useState } from "react";
import "./Event_prac.css";

const Event_prac = () => {
  const [list, setList] = useState([]);
  const [EigenId, setEigenId] = useState(list.length + 1);
  const [info, setInfo] = useState({
    id: list.length + 1,
    title: "",
    writer: "",
  });
  const { id, title, writer } = info;
  const register = () => {
    let newList = list.concat(info);
    setList(newList);
    setEigenId((prevState) => prevState + 1);
    setInfo({ title: "", writer: "" });
    // console.log(newList);
  };
  const onChange = (e) => {
    let newInfo = { ...info, id: EigenId, [e.target.name]: e.target.value };
    // console.log(newInfo);
    setInfo(newInfo);
  };

  const [index, setIndex] = useState("0");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  const [searchInfo, setSearchInfo] = useState({
    id: "",
    title: "",
    writer: "",
  });
  const [searchList, setSearchList] = useState([]);
  const onSearch = (e) => {
    setSearchInfo(e.target.value);
  };
  const search = () => {
    let newSearchList = list.filter((value) => {
      if (index === "0") {
        return value.writer === searchInfo;
      } else if (index === "1") {
        return value.title === searchInfo;
      }
    });
    setSearchList(newSearchList);
    if (newSearchList.length == "0") alert("검색 결과가 없습니다");
  };
  return (
    <>
      <form id="form1" style={{ border: "solid 1px", padding: "5px" }}>
        <label htmlFor="writer">작성자: </label>
        <input
          id="writer"
          name="writer"
          placeholder="작성자"
          onChange={onChange}
          value={writer}
        ></input>
        <label htmlFor="title">제목: </label>
        <input
          id="title"
          name="title"
          placeholder="제목"
          onChange={onChange}
          value={title}
        ></input>
        <button type="button" onClick={register}>
          작성
        </button>
      </form>
      <br />
      <form>
        <select value={index} onChange={onSelect}>
          <option value="0">작성자</option>
          <option value="1">제목</option>
        </select>
        <input onChange={onSearch} style={{ margin: "10px" }}></input>
        <button type="button" onClick={search}>
          검색
        </button>
      </form>
      <table className="table1">
        <tbody>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
          {list.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br></br>
      <div>검색 결과</div>
      <table>
        <tbody>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
          {searchList.map((value, index, array) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Event_prac;
