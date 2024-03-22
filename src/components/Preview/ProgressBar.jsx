import React, { useState, useEffect } from "react";

function ProgressBar({ percentage, color, isAnimation }) {
  const [currentPercentage, setCurrentPercentage] = useState(0);

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
  }, [currentPercentage, percentage, isAnimation]);

  const progressBarStyle = {
    width: `${currentPercentage}%`,
    backgroundColor: color,
    color: "black",
    transition: "width 0.2s ease", // 너비 변화에 대한 애니메이션 추가
  };

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={progressBarStyle}
      >
        {currentPercentage}만원
      </div>
    </div>
  );
}

export default ProgressBar;
