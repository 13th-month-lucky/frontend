import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import BlueButton from "../Button/BlueButton";
import GrayButton from "../Button/GrayButton";
import MoneyBagInHandImg from "~/assets/images/preview/moneybag-in-hand.png";

export default function SavingsCalculator({
  title,
  payment,
  limitPrice,
  rate,
  remainPendingLimitPrice,
}) {
  const [deductiblePrice, setDeductiblePrice] = useState(0); // 공제 금액
  const [value, setValue] = useState(0); // 연금 저축 납입액
  const [currLimitPrice, setCurrLimitPrice] = useState(limitPrice); // 현재 남은 한도
  const [link, setLink] = useState("");
  const remainPrice = 500000; // 남는 금액

  const unit = 10000; // 만원 단위
  const [fullPrice, setFullPrice] = useState(0); // 남은 돈 다 넣었을 경우

  useEffect(() => {
    setValue(payment / unit);
    setFullPrice((payment + remainPrice) / unit);
    if (title === "IRP") {
      setLink("https://m.shinhansec.com/mweb/fnin/peni/fpeni1001");
    } else if (title === "연금저축") {
      setLink("https://m.shinhansec.com/mweb/fnin/pens/fpens1002?tab=0");
    }
  }, []);

  useEffect(() => {
    // 가격에 만원 단위 곱하여 계산
    if (remainPendingLimitPrice !== undefined) {
      if (remainPendingLimitPrice <= 0) {
        setCurrLimitPrice(0);
        setDeductiblePrice(0);
      } else {
        setCurrLimitPrice(remainPendingLimitPrice - value * unit);
        setDeductiblePrice(value * unit * rate);
      }
    } else {
      setCurrLimitPrice(limitPrice - value * unit);
      setDeductiblePrice(value * unit * rate);
    }
  }, [value]);

  return (
    <Card>
      {payment === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <img className="w-1/4" src={MoneyBagInHandImg} />
          <div className="text-center font-normal">
            {title} 계좌를 개설하면 <br />
            <b> {rate * 100}% 세액공제 혜택</b>을 받을 수 있어요!
          </div>
          <GrayButton
            text={title + " 계좌 개설하기"}
            destination={link}
          ></GrayButton>
        </div>
      ) : (
        <>
          <div className="text-center font-normal">
            {currLimitPrice <= 0 ? (
              <p>
                <b>{title + " "} 세액공제 한도가 모두 찼어요!</b>
              </p>
            ) : (
              <p>
                <b>{title + " "}</b> 세액공제 한도가 <br />
                <b>{currLimitPrice.toLocaleString("ko-KR")}원</b> 남았어요!
              </p>
            )}

            <p>
              <b>{deductiblePrice.toLocaleString("ko-KR")}원</b> 공제받을 수
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
              style={{
                background: `linear-gradient(to right, #1B64F2 0%, #1B64F2 ${
                  (value / (limitPrice / unit)) * 100
                }%, #D1D5DB ${
                  (value / (limitPrice / unit)) * 100
                }%, #D1D5DB 100%)`,
              }}
            />
            <div className="absolute top-6 left-0 w-full flex justify-between text-xs text-gray-400">
              <div className={fullPrice < value ? "text-red-500" : ""}>
                {value}
              </div>
              <div>{limitPrice / unit}</div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
