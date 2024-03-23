import React from "react";

export default function PeriodTabBar(props) {
  const setCurrentPeriod = props.setCurrentPeriod;
  const currentPeriod = props.currentPeriod;

  const periods = ["1주", "1개월", "3개월", "6개월", "1년"];

  return (
    <div className="flex text-center">
      {periods.map((ele, idx) => {
        let divClass = "w-1/" + periods.length + " m-1 rounded-md";

        if (idx === currentPeriod) {
          divClass += " bg-blue-200";
        } else {
          divClass += " bg-white";
        }

        return (
          <div
            key={ele}
            className={divClass}
            onClick={() => {
              setCurrentPeriod(idx);
            }}
            style={{ cursor: "pointer" }}
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
}
