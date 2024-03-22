import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

export default function SavingsCalculator({ title, limitPrice }) {
  const [deductiblePrice, setDeductiblePrice] = useState(0); // 공제 금액
  const [value, setValue] = useState(0); // 연금 저축 납입액
  const [currLimitPrice, setCurrLimitPrice] = useState(limitPrice); // 현재 남은 한도
  const ratio = 16.5; // 공제율
  const unit = 10000; // 만원 단위

  useEffect(() => {
    // 가격에 만원 단위 곱하여 계산
    setCurrLimitPrice(limitPrice - value * unit);
    setDeductiblePrice((value * unit * ratio) / 100);
  }, [value]);

  return (
    <Card>
      <div className="text-center font-normal">
        <p>
          <b>{title + " "}</b> 세액공제 한도가 <br />
          <b>{currLimitPrice.toLocaleString("ko-KR")}원</b> 남았어요!
        </p>
        <p>
          <b>{deductiblePrice.toLocaleString("ko-KR")}원</b>을 공제받을 수
          있어요.
        </p>
      </div>
      <div className="relative mb-6">
        <input
          id="labels-range-input"
          type="range"
          value={value}
          min="0"
          max={limitPrice / unit} // 만원 단위로 나눔 (총 400 스텝)
          step="1"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => {
            const newValue = e.target.value;
            setValue(newValue);
          }}
        />
      </div>
    </Card>
  );
}
