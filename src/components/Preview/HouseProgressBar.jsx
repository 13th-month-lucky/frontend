import React from "react";

const HouseProgressBar = ({ value1, value2 }) => {
  const totalValue = 4000000; // 전체 값
  const percentage1 = (value1 / totalValue) * 100;
  const percentage2 = (value2 / totalValue) * 100;

  return (
    <div className="relative w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-3 mt-2">
      <div className="flex h-full relative">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full"
          style={{ width: `${percentage1}%` }}
        >
          <div className="absolute left-3 top-5 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
            {value1}원
          </div>
        </div>
        <div
          className="absolute top-0 right-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full"
          style={{ width: `${percentage2}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
            {value2}원
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-3 transform translate-x-2 -translate-y-2 text-black text-xs font-bold">
        400만원
      </div>
    </div>
  );
};

export default HouseProgressBar;
