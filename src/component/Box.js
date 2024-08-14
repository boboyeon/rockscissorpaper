import React from "react";

const Box = (props) => {
    console.log("props",props);
    let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""  ) {
 // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {// 위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }

  // result에 따라 CSS 클래스를 변경
  const resultClass = result === "win" ? "win" : result === "lose" ? "lose" : "tie";

  return (
    <div className={`box ${resultClass}`}>
      <h1>{props.title}</h1>
      <img
        className="item_img"
        src={props.item && props.item.img}
        alt=""
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
