import React, { useEffect, useState } from "react";

import PeriodTabBar from "../PeriodTabBar";
import PriceTable from "./PriceTable";

export default function DailyPrice(props) {
  const priceData = props.priceData;
  const [currentPeriod, setCurrentPeriod] = useState(0);

  const periods = ["1주", "1개월", "3개월", "6개월", "1년"];
  const periodSizes = [7, 30, 90, 180, 365];
  const size = periodSizes[currentPeriod];

  let formattedData = [];

  for (let i = 0; i < Math.min(size, priceData.length); i++) {
    const ele = priceData[i];

    // 날짜
    const date = ele.stck_bsop_date;
    // 종가
    const stck_clpr = ele.stck_clpr;
    // 최고가
    const stck_hgpr = ele.stck_hgpr;
    // 최저가
    const stck_lwpr = ele.stck_lwpr;

    let variation = stck_clpr;
    if (i + 1 < priceData.length) {
      variation = (
        ((stck_clpr - priceData[i + 1].stck_clpr) /
          priceData[i + 1].stck_clpr) *
        100
      ).toFixed(2);
    }

    formattedData.push({
      기준일자: date,
      종가: stck_clpr,
      증감: variation,
      최저가: stck_lwpr,
      최고가: stck_hgpr,
    });
  }

  return (
    <div className="pt-4">
      <PeriodTabBar
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
        periods={periods}
      />

      {formattedData ? <PriceTable priceData={formattedData} /> : <></>}
    </div>
  );
}
