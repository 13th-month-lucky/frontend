import React, { useEffect, useState } from "react";
import sunImg from "~/assets/images/preview/sun.png";
import cloudImg from "~/assets/images/preview/cloud.png";
import styled, { keyframes } from "styled-components";
import { Tooltip } from "flowbite-react";
import BlueButton from "~/components/BlueButton/BlueButton";
import { useSelector } from "react-redux";

import { getMyData } from "~/lib/apis/myData";

export default function PreviewResult() {
  const userState = useSelector((state) => state.user13th);

  const [isReceive, setIsReceive] = useState(true);

  const [taxToPaidMessage, setTaxToPaidMessage] = useState("");
  const [taxPaidMessage, setTaxPaidMessage] = useState("");
  const [resultReturn, setResultReturn] = useState();

  const simpleTaxRate = [
    [1200, 0.06],
    [4600, 0.15],
    [8800, 0.24],
    [15000, 0.35],
    [30000, 0.38],
    [50000, 0.4],
    [0, 0.42],
  ];

  const taxRate = [
    [1400, 0, 0],
    [5000, 84, 0.06],
    [8800, 624, 0.24],
    [15000, 1536, 0.35],
    [30000, 3706, 0.38],
    [50000, 9406, 0.4],
    [100000, 17406, 0.42],
    [0, 38406, 0.45],
  ];

  useEffect(() => {
    getMyData(userState.userId).then((resp) => {
      // 월급 입력받은 값 넣어야함
      const taxBaseMonth = 4000000;

      // 과세표준 (1년)
      const taxBaseYear = taxBaseMonth * 12;

      let taxToPaid;
      let taxRow;
      for (let row of taxRate) {
        if (taxBaseYear <= row[0] * 10000 || row[0] === 0) {
          taxToPaid = row[1] * 10000 + taxBaseYear * row[2];
          taxRow = row;
          break;
        }
      }

      let taxPaid;
      let simpleTaxRow;
      for (let row of simpleTaxRate) {
        if (taxBaseYear <= row[0] * 10000 || row[0] === 0) {
          taxPaid = taxBaseYear * row[1];
          simpleTaxRow = row;
          break;
        }
      }

      console.log("세전 월급 :\n", taxBaseMonth.toLocaleString());
      console.log(
        `예상 납부 세금 :\n소득 * ${simpleTaxRow[1]}%\n(소득 ${simpleTaxRow[0]}만원 이하)`
      );
      console.log(
        `납부해야하는 세금 :\n${taxRow[1]}만원 + 소득 * ${taxRow[2]}% \n(소득 ${taxRow[0]}만원 이하)`
      );

      if (taxToPaid > taxPaid) {
        setIsReceive(false);
        setResultReturn(`${(taxToPaid - taxPaid).toLocaleString()}`);
      } else {
        setResultReturn(`${(taxPaid - taxToPaid).toLocaleString()}`);
      }

      setTaxToPaidMessage(
        `예상 납부 세금(1년) : ${taxPaid.toLocaleString()}원`
      );
      setTaxPaidMessage(`내야하는 세금 : ${taxToPaid.toLocaleString()}원`);
    });
  }, []);

  return (
    <div className="bg-white h-screen p-4">
      <div className="flex flex-col items-center mt-16">
        <div>
          {isReceive ? (
            <SunImg src={sunImg} alt="sun" />
          ) : (
            <CloudImg src={cloudImg} alt="cloud" />
          )}
        </div>
        <div className="text-center mt-5">
          <p className="h3 mt-4">{userState.nickname}님은</p>
          <p className="text-xl font-extrabold mt-4">{resultReturn}원</p>
          <p className="h3 mt-4">
            {isReceive ? "받을 수 있어요! 😊" : "더 내야 해요.. 😢"}
          </p>
          <div className="flex justify-content-center align-items-center">
            <p className="mediumGreyText mt-1">위 금액은 예상납부금입니다.</p>
            <Tooltip
              style="light"
              placement="right"
              content={
                isReceive ? (
                  <div className="text-right">
                    {taxPaidMessage} <br />- {taxToPaidMessage} <br />
                    <hr
                      style={{ borderWidth: "1px", color: "black" }}
                      className="mt-1"
                    />
                    돌려받을 돈 : {resultReturn}원
                  </div>
                ) : (
                  <div className="text-right">
                    {taxToPaidMessage} <br />
                    {taxPaidMessage} <br />
                    <hr
                      style={{ borderWidth: "1.5px", color: "black" }}
                      className="mt-1"
                    />
                    더 내야하는 돈 : {resultReturn}원
                  </div>
                )
              }
            >
              <button>
                <svg
                  className="h-5 w-5 text-neutral-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                </svg>
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 w-full">
          {isReceive ? (
            <p className="h3 text-center mb-16">
              13월의 월급을 더 많이 받을 수 있는
              <br />
              방법을 알려드릴게요!
            </p>
          ) : (
            <p className="h3 text-center mb-16">
              13월의 강도에서 13월의 월급으로
              <br />
              바꾸는 방법을 알려드릴게요!
            </p>
          )}
          <BlueButton text="솔루션 보러가기" destination="/preview/solution" />
        </div>
      </div>
    </div>
  );
}

const rotateImageInfiniteAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SunImg = styled.img`
  height: 150px;
  animation: ${rotateImageInfiniteAnimation} 6s linear infinite;
  transform-origin: 50% 50%;
`;

const cloudFloatAnimation = keyframes`
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
`;

const CloudImg = styled.img`
  height: 150px;
  animation: ${cloudFloatAnimation} 4s ease-in-out infinite;
`;
