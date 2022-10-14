import React from "react";
import Names from "classnames/bind";
import style from "./Mycss.module.css";

const setting = Names.bind(style);
const isYellow = true;

const Mycss = ({ yellow, green }) => {
  return (
    <>
      <div className={setting("box", "second")}>
        <h2>CSS를 적용합니다.</h2>
      </div>

      <div className={setting({ yellow }, green)}>조건부적용</div>
    </>
  );
};

export default Mycss;
