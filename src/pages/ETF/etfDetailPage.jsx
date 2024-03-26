import React, { useEffect, useState } from "react";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";

import CommonInfo from "~/components/ETF/Detail/CommonInfo";

import Chart from "~/components/ETF/Detail/Chart/Chart";
import DailyPrice from "~/components/ETF/Detail/DailyPrice/DailyPrice";
import StockInfo from "~/components/ETF/Detail/StockInfo/StockInfo";
import Community from "~/components/ETF/Detail/Community/Community";
import { useParams } from "react-router";

import { getEtfInfo, getEtfPriceData } from "~/lib/apis/etfDetail";

export default function etfDetailPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [stockInfo, setStockInfo] = useState();
  const [priceData, setPriceData] = useState([]);
  const [ratio, setRatio] = useState();

  const { code } = useParams();

  useEffect(() => {
    getEtfPriceData(code).then((resp) => {
      const prices = resp[0].chart.output2;
      setPriceData(prices);
    });

    getEtfInfo(code).then((resp) => {
      setStockInfo(resp[0].data);
      setRatio(resp[0].data.ratio);
    });
  }, []);

  const detailTabs = ["차트", "일별 시세", "종목 정보", "커뮤니티"];
  const detailComponents = [
    <Chart code={code} priceData={priceData} />,
    <DailyPrice code={code} priceData={priceData} />,
    <StockInfo code={code} stockInfo={stockInfo} ratio={ratio} />,
    <Community code={code} />,
  ];

  return (
    <div>
      <TopBackBar />

      {stockInfo ? (
        <CommonInfo
          code={code}
          title={stockInfo.basicInfo.종목이름.split(" (")[0]}
          riskDegree={stockInfo.dangerDegree}
        />
      ) : (
        <></>
      )}

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {stockInfo ? detailComponents[currentTab] : <></>}
    </div>
  );
}
