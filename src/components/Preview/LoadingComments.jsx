import React, { useState, useEffect } from "react";

const TextRotator = ({ commentsArray, interval, length }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length); // 배열 범위 넘어가지 않기 위해서 % length
    }, interval);

    return () => clearInterval(intervalId);
  }, [length, interval]);

  return <div>{commentsArray[currentIndex]}</div>;
};

const LoadingComments = () => {
  const commentsArray = [
    "국세청 데이터를 불러오는 중...",
    "은행 데이터를 불러오는 중...",
    "증권 데이터를 불러오는 중...",
    "보험 데이터를 불러오는 중...",
  ]; // 변경할 텍스트 배열
  const interval = 1500; // 변경 간격
  const length = commentsArray.length;
  return (
    <TextRotator
      commentsArray={commentsArray}
      interval={interval}
      length={length}
    />
  );
};

export default LoadingComments;
