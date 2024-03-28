import React from "react";
import lenseImg from "~/assets/images/preview/lense.png";
import style from "~/pages/preview/previewMain.module.css";
import { Link } from "react-router-dom";
import BlueButton from "~/components/Button/BlueButton";

import TopBackBar from "~/components/TopBackBar/TopBackBar";

const PreviewMain = () => {
  return (
    <div>
      <TopBackBar />

      <div className="bg-white h-screen p-4">
        <div className="flex flex-col items-center mt-2">
          <div>
            <p className="h1 text-center">연말정산 미리보기</p>
          </div>

          <div className="mt-14">
            {/* Hover scale effect added here */}
            <img
              src={lenseImg}
              alt="Magnifying glass"
              // className="w-36 h-36 transition-transform duration-300 ease-in-out hover:scale-150 img3"
              className={style.img3}
            />
          </div>
          <div className="text-center mt-4">
            <p className="h3 mt-4">13월의 강도에서 13일의 월급으로</p>
            <p className="h3 mt-4">연말정산</p>
            <p className="h3 mt-4">미리미리 준비하세요!</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 w-full">
            <BlueButton
              text="연말정산 계산하기"
              destination="/preview/loading"
            />
            <BlueButton text="이전결과 확인하기" destination="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewMain;
