import React, { useState } from "react";
import { Button } from "flowbite-react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const ETFAssetFilter = ({ onTypeSelect }) => {
  const [selectedKey, setSelectedKey] = useState("");

  const handleItemClick = (key) => {
    setSelectedKey((prevSelectedKey) => (prevSelectedKey === key ? "" : key));
    onTypeSelect(key); // Call the callback function to notify the selected type
  };

  const types = [
    { key: "domestic", text: "국내주식" },
    { key: "foreign", text: "해외주식" },
    { key: "bond", text: "채권" },
    { key: "commodity", text: "원자재" },
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
          }
          /* Centering the items */
          .scroll-menu-wrapper {
            justify-content: center;
          }
        `}
      </style>
      <div className="flex justify-center">
        {" "}
        {/* This wrapper centers the ScrollMenu */}
        <ScrollMenu onWheel={onWheel} style={{ margin: "0 -1rem" }}>
          {types.map((type) => (
            <Button
              key={type.key}
              color={selectedKey === type.key ? "blue" : "light"}
              pill
              className="mx-1"
              onClick={() => handleItemClick(type.key)}
            >
              {type.text}
            </Button>
          ))}
        </ScrollMenu>
      </div>
    </>
  );
};

export default ETFAssetFilter;

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
