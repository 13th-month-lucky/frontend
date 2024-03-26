import React from "react";

export default function Detail(props) {
  const code = props.code;
  const stockInfo = props.stockInfo;
  const isFund = props.isFund;

  let infos;
  if (isFund) {
    infos = {
      설명: `${stockInfo.특징} ${stockInfo.운용전략.replace(/-/g, ". ")}`,
      규모: stockInfo.규모,
      운용사: stockInfo.운용사,
      설정일: stockInfo.설정일,
      보수: stockInfo.보수,
      "모닝스타 등급": stockInfo.모닝스타_등급,
      "상품 유형": stockInfo.상품_유형,
      판매수수료: stockInfo.판매수수료,
    };
  }

  if (!isFund) {
    infos = {
      설명: stockInfo.basicInfo.종목설명,
      "순자산 총액": stockInfo.basicInfo.순자산총액,
      사무수탁사: stockInfo.basicInfo.사무수탁사,
      상장일: stockInfo.basicInfo.상장일,
      수탁은행: stockInfo.basicInfo.수탁은행,
      설정단위: stockInfo.basicInfo.설정단위,
      분배금지급: stockInfo.basicInfo.분배금지급,
      최소거래단위: stockInfo.basicInfo.최소거래단위,
    };
  }

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
