import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진정보, 결과값)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다
// 4. 컴퓨터는 아이템이 랜덤하게 선택된다
// 5. 3,4의 결과로 승패를 가린다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (승 - 초록, 패 - 빨강, 무 - 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/1/_/1_41_5.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};
function App() {
  const [userSelect,setUserSelect] = useState(null)

  const play = (userChoice) => {
    console.log("선택됨!", userChoice);
    setUserSelect(choice[userChoice])
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={userSelect}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
