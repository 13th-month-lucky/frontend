import React from "react";
import lenseImg from "~/assets/images/preview/lense.png";
import style from "~/pages/preview/previewMain.module.css";
import { Link } from "react-router-dom";
import BlueButton from "~/components/Button/BlueButton";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import { setResultId } from "~/store/reducers/yearTax";
import { useDispatch, useSelector } from "react-redux";
import { addResult } from "~/lib/apis/result";

const PreviewMain = () => {
  const imgStyle = style.img3 + " w-44";
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user13th);
  const userId = userState.userId;

  function onClickAction() {
    // result DB 생성
    addResult(userId, {}).then((resp) => {
      const action = setResultId(resp._id);
      dispatch(action);
    });
  }

  return (
    <div>
      <TopBackBar />

      <div className="bg-white p-4">
        <div className="flex flex-col items-center mt-2">
          <div className="mt-4">
            <div className="w-400">
              <p className="text-2xl font-bold pr-10 text-gray-400">
                13월의 강도에서
              </p>
              <p className="text-3xl font-bold pl-10 mt-1">13월의 월급으로</p>
            </div>
          </div>

          <div className="mt-14">
            {/* Hover scale effect added here */}
            <img
              src={lenseImg}
              alt="Magnifying glass"
              // className="w-36 h-36 transition-transform duration-300 ease-in-out hover:scale-150 img3"
              className={imgStyle}
            />
          </div>

          <div className="mt-24 text-center">
            <p className="text-md">연말정산</p>
            <p className="text-md">미리미리 준비하세요!</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-4 w-full">
            <BlueButton
              text="연말정산 계산하기"
              destination="/preview/loading"
              onClickAction={onClickAction}
            />
            <BlueButton text="이전결과 확인하기" destination="/preview/prev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewMain;
