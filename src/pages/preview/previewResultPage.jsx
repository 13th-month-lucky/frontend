import React, { useState } from "react";
import sunImg from "~/assets/images/preview/sun.png";
import cloudImg from "~/assets/images/preview/cloud.png";
import styled, { keyframes } from "styled-components";
import { Tooltip } from "flowbite-react";
import BlueButton from "~/components/BlueButton/BlueButton";
import { useSelector } from "react-redux";

export default function PreviewResult() {
  const userState = useSelector((state) => state.user13th);

  const [price, setPrice] = useState("200만");
  const [isReceive, setIsReceive] = useState(true);

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
          <p className="text-xl font-extrabold mt-4">{price}원</p>
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
                    이미 낸 세금 200,000원 <br />
                    - 내야 하는 세금 100,000원 <br />
                    <hr
                      style={{ borderWidth: "1.5px", color: "black" }}
                      className="mt-1"
                    />
                    돌려받는 돈 100,000원
                  </div>
                ) : (
                  <div className="text-right">
                    내야 하는 세금 200,000원 <br />
                    - 이미 낸 세금 100,000원 <br />
                    <hr
                      style={{ borderWidth: "1.5px", color: "black" }}
                      className="mt-1"
                    />
                    더 내야 할 세금 100,000원
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
