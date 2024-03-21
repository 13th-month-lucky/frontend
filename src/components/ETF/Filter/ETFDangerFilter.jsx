import React, { useState } from "react";
import { Button } from "flowbite-react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const buttons = [
  { id: "very-low", text: "매우 낮은 위험", color: "blue" },
  { id: "low", text: "낮은 위험" },
  { id: "medium", text: "보통위험", color: "success" },
  { id: "high", text: "높은 위험", color: "warning" },
  { id: "very-high", text: "매우 높은 위험", color: "failure" },
];

const ETFDangerFilter = () => {
  const [selected, setSelected] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelected(buttonId);
  };

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
          }
        `}
      </style>
      <ScrollMenu onWheel={onWheel}>
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
    </>
  );
};

export default ETFDangerFilter;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}
