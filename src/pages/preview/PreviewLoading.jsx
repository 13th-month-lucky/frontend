import React from "react";
import dollarImg from "~/assets/dollar-color.png";
import LoadingComments from "~/components/preview/loadingComments";
import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FloatingIcon = styled.img`
  animation: ${floatAnimation} 1.5s ease-in-out infinite; // 둥실둥실 애니메이션 적용
  width: 100%;
  height: 100%;
`;

const PreviewLoading = () => {
  return (
    <div className="bg-white h-screen p-4">
      <div className="flex flex-col items-center mt-32">
        <div>
          <p className="text-center text-4xl font-bold">
            마이데이터를
            <br /> 불러오는 중
          </p>
        </div>

        <div className="mt-16">
          <FloatingIcon src={dollarImg} alt="Floating Icon" />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl font-semibold mt-4">
            <LoadingComments />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewLoading;
