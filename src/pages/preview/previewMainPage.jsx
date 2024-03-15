import React from "react";
import lenseImg from "~/assets/images/preview/lense.png";
import style from "~/pages/preview/previewMain.module.css";
import { Link } from "react-router-dom";

const PreviewMain = () => {
  return (
    <div className="bg-white h-screen p-4">
      <div className="flex flex-col items-center mt-28">
        <div>
          <p className="text-center text-4xl font-bold">연말정산 미리보기</p>
        </div>

        <div className="mt-16">
          {/* Hover scale effect added here */}
          <img
            src={lenseImg}
            alt="Magnifying glass"
            // className="w-36 h-36 transition-transform duration-300 ease-in-out hover:scale-150 img3"
            className={style.img3}
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl font-semibold mt-4">
            13월의 강도에서 13일의 월급으로
          </p>
          <p className="text-xl font-semibold mt-4">연말정산</p>
          <p className="text-xl font-semibold mt-4">미리미리 준비하세요!</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 w-full">
          <div className="w-9/12">
            <Link to="/preview/loading">
              <button className="bg-blue-500 text-white text-lg w-full h-12 py-2 rounded-full font-semibold mb-4">
                연말정산 계산하기
              </button>
            </Link>
          </div>
          <div className="w-9/12">
            <button className="bg-blue-500 text-white text-lg w-full h-12 py-2 rounded-full font-semibold">
              이전결과 확인하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewMain;
