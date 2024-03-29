import React from "react";
import { useSelector } from "react-redux";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import BlueButton from "~/components/Button/BlueButton";
import Tip from "~/components/Tip/Tip";

export default function prevPreviewPage() {
  const userState = useSelector((state) => state.user13th);

  return (
    <div>
      <TopBackBar />

      <p>이전 연말정산 결과 보기 페이지</p>

      <div className="mt-16">
        <Tip />
      </div>

      <div className="mt-8 flex justify-center">
        <BlueButton text="메인으로" destination="/main" />
      </div>
    </div>
  );
}
