import { useState, useEffect, useRef } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const HookLifeCyclePractice = () => {
  const [width, setWidth] = useState(0);
  const widthChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    // 작성해주세요. : state의 width 변경 코드
    widthChange();
    // 작성해주세요. : window가 resize 될 때마다 state의 width를 setState 하는 코드
    // 힌트: window.addEventListener('resize', )
    window.addEventListener("resize", widthChange);
    // 작성해주세요. : 콘솔에 타이머 코드
    // 힌트: setInterval() 함수 사용
    let num = 0;
    let time = setInterval(function () {
      console.log("setInterval", num++);
    }, 1000);

    return () => {
      console.log("componentWillUnmount");

      // 작성해주세요. : 타이머 종료 코드
      clearInterval(time);
    };
  }, []);
  let box = useRef();
  useEffect(() => {
    // 작성해주세요: 화면 크기가 바뀔 때마다 배경 색생 바꾸는 코드
    // 힌트: ref를 이용하여 div를 담아둔 this.box 이용.
    // 힌트: 위에 만들어둔 getRandomColor 함수 이용.
    box.current.style.backgroundColor = getRandomColor();
  }, [width]);

  return (
    <>
      <div ref={box}>
        width가 변할 때마다 배경 색상이 바뀌어요.
        <br></br>
        width : {width}
      </div>
    </>
  );
};

export default HookLifeCyclePractice;
