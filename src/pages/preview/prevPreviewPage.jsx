import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import BlueButton from "~/components/Button/BlueButton";
import Tip from "~/components/Tip/Tip";
import { getAllResult } from "~/lib/apis/result";
import YeartaxResultBlock from "~/components/YearTax/YeartaxResultBlock";
import YeartaxResultChart from "~/components/YearTax/YeartaxResultChart";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";

export default function prevPreviewPage() {
  const userState = useSelector((state) => state.user13th);
  const [resultList, setResultList] = useState([]);
  const unit = 10000;

  const [currentTab, setCurrentTab] = useState(0);
  const detailTabs = ["보드 보기", "차트 보기", "표 보기"];

  useEffect(() => {
    getAllResult(userState.userId).then((resp) => {
      const formattedResultList = resp.map((result) => {
        return {
          resultId: result._id,
          createdDate: result.createdDate,
          돌려받은돈: (result.data.돌려받는돈 / unit).toFixed(),
          총급여: (result.data.총급여 / unit).toFixed(),
        };
      });

      setResultList(formattedResultList);
    });
  }, []);

  return (
    <div className="bg-white h-screen p-4">
      <TopBackBar title="이전 연말정산 결과 보기" />

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {currentTab == 0 && (
        <div className="bg-[#F7F8FC] flex flex-col gap-5 p-5">
          {[...resultList].reverse().map((ele, idx) => (
            <YeartaxResultBlock key={idx} result={ele} />
          ))}
        </div>
      )}

      {currentTab == 1 && <YeartaxResultChart data={resultList} />}

      <div className="mt-5">
        <Tip />
      </div>
      <div className="flex justify-center my-10 w-full">
        <BlueButton text="메인으로" destination="/main" />
      </div>
    </div>
  );
}
