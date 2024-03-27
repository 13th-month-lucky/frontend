import React from "react";
import findOutImg from "~/assets/images/tabBarIcons/findOut.png";
import findOutBlueImg from "~/assets/images/tabBarIcons/findOutBlue.png";
import quizImg from "~/assets/images/tabBarIcons/quiz.png";
import quizBlueImg from "~/assets/images/tabBarIcons/quizBlue.png";
import homeImg from "~/assets/images/tabBarIcons/home.png";
import homeBlueImg from "~/assets/images/tabBarIcons/homeBlue.png";
import myPageImg from "~/assets/images/tabBarIcons/myPage.png";
import myPageBlueImg from "~/assets/images/tabBarIcons/myPageBlue.png";
import entireMenuImg from "~/assets/images/tabBarIcons/entireMenu.png";
import entireMenuBlueImg from "~/assets/images/tabBarIcons/entireMenuBlue.png";

const tabs = [findOutImg, quizImg, homeImg, myPageImg, entireMenuImg];
const blueTabs = [
  findOutBlueImg,
  quizBlueImg,
  homeBlueImg,
  myPageBlueImg,
  entireMenuBlueImg,
];
const tabNames = ["알아보기", "퀴즈", "홈", "마이페이지", "전체 메뉴"];

export default function TabBar(props) {
  const currentTab = props.currentTab;
  const setCurrentTab = props.setCurrentTab;

  let tabClassName = "max-h-full h-8";

  return (
    <div className="fixed bottom-0 h-16 pl-2" style={{ width: "400px" }}>
      <div className="flex justify-between h-full rounded-tl-lg rounded-tr-lg shadow-inner w-full bg-white">
        {tabs.map((ele, idx) => {
          let textColor = "text-gray-500";
          let src = ele;
          if (idx == currentTab) {
            src = blueTabs[idx];
            textColor = "text-blue-500";
          }

          if (idx == 4) {
            tabClassName += " p-1";
          }

          return (
            <div
              className="w-1/5 flex flex-col justify-center items-center text-xs"
              key={ele}
              onClick={() => setCurrentTab(idx)}
              style={{ cursor: "pointer" }}
            >
              <img className={tabClassName} src={src}></img>
              <p className={textColor}>{tabNames[idx]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
