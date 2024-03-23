import React from "react";

export default function Detail(props) {
  const code = props.code;
  const stockInfo = props.stockInfo;

  //test data
  const infos = {
    설명: stockInfo.basicInfo.종목설명,
    "순자산 총액": stockInfo.basicInfo.순자산총액,
    사무수탁사: stockInfo.basicInfo.사무수탁사,
    상장일: stockInfo.basicInfo.상장일,
    수탁은행: stockInfo.basicInfo.수탁은행,
    설정단위: stockInfo.basicInfo.설정단위,
    분배금지급: stockInfo.basicInfo.분배금지급,
    최소거래단위: stockInfo.basicInfo.최소거래단위,
  };

  return (
    <div className="pt-4">
      <div className="font-thin text-sm">{infos["설명"]}</div>

      <hr className="mt-8 border-black" />

      <div className="flex grid grid-cols-2 mb-16">
        {Object.keys(infos).map((key) => {
          if (key === "설명") {
            return;
          }

          return (
            <div key={key} className="p-4 m-2 border-b">
              <p className="text-xs text-gray-600 mb-1">{key}</p>
              <p className="font-bold">{infos[key]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
