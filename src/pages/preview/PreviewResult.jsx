import React, { useState } from "react";
import sunImg from "~/assets/images/sun.png";
import cloudImg from "~/assets/images/cloud.png";
// import umbrellaImg from "~/assets/images/umbrella.png";
import "./PreviewMain.css";
import styled, { keyframes } from "styled-components";

const rotateImageInfiniteAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SunImg = styled.img`
  animation: ${rotateImageInfiniteAnimation} 6s linear infinite;
  transform-origin: 50% 50%;
`;

export default function PreviewResult() {
  const [name, setName] = useState("김신한");
  const [price, setPrice] = useState("200만");
  const [isReceive, setIsReceive] = useState(true);

  return (
    <div className="bg-white h-screen p-4">
      <div className="flex flex-col items-center mt-28">
        <div>
          <SunImg src={sunImg} alt="sun" />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl font-medium mt-4">{name}님은</p>
          <p className="text-xl font-extrabold mt-4">{price}원</p>
          <p className="text-xl font-medium mt-4">
            {isReceive ? "받을 수 있어요! 😊" : "더 내야 해요.. 😢"}
          </p>
          <div className="flex justify-content-center align-items-center">
            <p className="text-xs fond-thin text-[#A09F9F] mt-1">
              위 금액은 예상납부금입니다.
            </p>
            <button>
              <svg
                class="h-5 w-5 text-neutral-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 w-full">
          <div className="w-9/12">
            <button className="bg-blue-500 text-white text-lg w-full h-12 py-2 rounded-full font-semibold">
              솔루션 보러가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
