import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import BlueButton from "~/components/Button/BlueButton";
import Tip from "~/components/Tip/Tip";
import { getAllResult } from "~/lib/apis/result";
import YeartaxResultBlock from "~/components/YearTax/YeartaxResultBlock";

export default function prevPreviewPage() {
  const userState = useSelector((state) => state.user13th);
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    getAllResult(userState.userId).then((resp) => {
      console.log(resp);
      setResultList(resp);
    });
  }, []);

  return (
    <div className="bg-white h-screen p-4">
      <TopBackBar title="이전 연말정산 결과 보기" />

      <div className="mt-5 bg-[#F7F8FC] flex flex-col gap-5 p-5">
        {resultList.map((ele, idx) => (
          <YeartaxResultBlock key={idx} result={ele} />
        ))}
      </div>

      <div className="mt-5">
        <Tip />
      </div>
      <div className="flex justify-center my-10 w-full">
        <BlueButton text="메인으로" destination="/main" />
      </div>
    </div>
  );
}
