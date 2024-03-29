import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";
import Chart from "~/components/ETF/Detail/Chart/Chart";
import DailyPrice from "~/components/ETF/Detail/DailyPrice/DailyPrice";
import StockInfo from "~/components/ETF/Detail/StockInfo/StockInfo";
import Community from "~/components/ETF/Detail/Community/Community";

import { getFundInfo } from "~/lib/apis/fundDetail";
import CommonInfo from "~/components/ETF/Detail/CommonInfo";
import { pushFundHistory } from "~/store/reducers/user";
import { useDispatch, useSelector } from "react-redux";

export default function fuindDetailPage() {
  const userState = useSelector((state) => state.user13th);

  const { code } = useParams();
  const [fundInfo, setFundInfo] = useState();
  const [currentTab, setCurrentTab] = useState(0);
  const [priceData, setPriceData] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [ratio, setRatio] = useState();

  const dispatch = useDispatch();

  console.log("code: ", code);

  const detailTabs = ["차트", "일별 시세", "종목 정보", "커뮤니티"];
  const detailComponents = [
    <Chart code={code} priceData={priceData} isFund={true} />,
    <DailyPrice code={code} priceData={priceData} isFund={true} />,
    <StockInfo code={code} stockInfo={infoData} ratio={ratio} isFund={true} />,
    <Community code={code} />,
  ];

  useEffect(() => {
    getFundInfo(code).then((resp) => {
      setFundInfo(resp);
      setPriceData(resp.basePrice);
      setInfoData(resp.data);
      setRatio(resp.portfolio["보유종목 Top10"]);
    });

    dispatch(pushFundHistory(code));
  }, []);

  return (
    <div>
      <TopBackBar />

      {fundInfo ? (
        <CommonInfo
          code={fundInfo.code}
          title={fundInfo.data.펀드명.split(" (")[0]}
          riskDegree={fundInfo.data.위험등급}
          isFund={true}
        />
      ) : (
        <></>
      )}

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {fundInfo ? detailComponents[currentTab] : <></>}
    </div>
  );
}
