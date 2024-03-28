import React, { useState } from "react";
import { Button } from "flowbite-react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const ETFFilter = ({ onTypeSelect, onDangerDegreeChange }) => {
  const [selectedKey, setSelectedKey] = useState("");

  const handleItemClick = (key) => {
    if (selectedKey === key) {
      setSelectedKey("");
      onTypeSelect("");
    } else {
      setSelectedKey(key);
      onTypeSelect(key);
    }
  };

  const [selected, setSelected] = useState(null);

  const handleButtonClick = (buttonId) => {
    console.log(buttonId);
    console.log(selected);
    if (selected == buttonId) {
      setSelected("");
      onDangerDegreeChange("");
    } else {
      setSelected(buttonId);
      onDangerDegreeChange(buttonId);
    }
  };

  const buttons = [
    { id: "5", text: "매우 낮은 위험", color: "blue" },
    { id: "4", text: "낮은 위험" },
    { id: "3", text: "보통위험", color: "success" },
    { id: "2", text: "높은 위험", color: "warning" },
    { id: "1", text: "매우 높은 위험", color: "failure" },
  ];

  const types = [
    { key: "국내주식", text: "국내주식" },
    { key: "채권", text: "채권" },
    { key: "원자재", text: "원자재" },
    { key: "대표지수", text: "대표지수" },
  ];

  return (
    <>
      <style>
        {`
          .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
            display: none;
          }
          .react-horizontal-scrolling-menu--scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow-x: auto; /* 가로 스크롤 활성화 */
            white-space: nowrap; /* 가로로 긴 텍스트 줄바꿈 방지 */
          }
          /* Centering the items */
          .scroll-menu-wrapper {
            justify-content: center;
          }
        `}
      </style>
      <div className="m-1">
        <h1 className="text-center font-bold m-1 ">유형</h1>
      </div>
      <div className="flex justify-center overflow-x-auto">
        {types.map((type) => (
          <Button
            key={type.key}
            color={selectedKey === type.key ? "blue" : "light"}
            pill
            className="mx-1 w-28"
            onClick={() => handleItemClick(type.key)}
          >
            {type.text}
          </Button>
        ))}
      </div>

      <div className="m-4">
        <h1 className="text-center font-bold mb-1">위험도</h1>
        <ScrollMenu>
          {buttons.map((button) => (
            <Button
              key={button.id}
              className={`text-sm font-light mx-1 w-32 disenabled:hover:bg-light-200 ${
                selected === button.id ? "" : "bg-light-200"
              }`}
              color={selected === button.id ? button.color : "light"}
              pill
              onClick={() => handleButtonClick(button.id)}
            >
              {button.text}
            </Button>
          ))}
        </ScrollMenu>
      </div>
    </>
  );
};

export default ETFFilter;
