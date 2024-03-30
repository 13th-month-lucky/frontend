import { current } from "@reduxjs/toolkit";
import React from "react";

export default function DetailTabBar(props) {
  const detailTabs = props.detailTabs;
  const currentTab = props.currentTab;
  const setCurrentTab = props.setCurrentTab;

  return (
    <div className="mt-3 flex border-b-[1px]">
      {detailTabs.map((ele, idx) => {
        let tabClass = "mr-6 text-medium";

        if (idx === currentTab) {
          tabClass += " font-bold border-b-2 border-black";
        } else {
          tabClass += " text-gray-500";
        }

        return (
          <>
            <div
              key={ele}
              className={tabClass}
              onClick={() => {
                setCurrentTab(idx);
              }}
              style={{ cursor: "pointer" }}
            >
              {ele}
            </div>
          </>
        );
      })}
    </div>
  );
}
