import React, { useState, useEffect } from "react";

function ProgressBar({ amount, percentage, color, isAnimation, limit }) {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [adjustedPercentage, setAdjustedPercentage] = useState(0);
  const unit = 10000;

  useEffect(() => {
    setAdjustedPercentage(Math.min(currentPercentage, 100));
  }, [currentPercentage]);

  useEffect(() => {
    if (isAnimation) {
      const interval = setInterval(() => {
        if (currentPercentage < percentage) {
          setCurrentPercentage((prevPercentage) =>
            Math.min(prevPercentage + 1, percentage)
          );
        } else {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [currentPercentage, adjustedPercentage, isAnimation]);

  const progressBarStyle = {
    width: `${adjustedPercentage}%`,
    backgroundColor: color,
    color: "black",
    transition: "width 0.2s ease", // 너비 변화에 대한 애니메이션 추가
  };

  return (
    <div className="relative w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={progressBarStyle}
      >
        {currentPercentage.toFixed()}%
      </div>
      <div className="absolute w-full flex justify-between text-xs text-gray-400 px-2 mt-1">
        <div>{amount / unit}</div>
        <div>{limit / unit} (만원)</div>
      </div>
    </div>
  );
}

export default ProgressBar;
