import React, { useState } from "react";
import { Card, Tabs } from "flowbite-react";
import ETFDangerFilter from "../../components/ETF/Filter/ETFDangerFilter";
import ETFAssetFilter from "../../components/ETF/Filter/ETFAssetFilter";
import MyResponsiveLine from "../../components/ETF/Main/MyResponsiveLine";
import ALLETF from "~/components/ETF/Main/ALLETF";
import Chart from "./Chart";

const ETFMain = () => {
  const [dangerDegree, setDangerDegree] = useState(0);

  const data = [
    {
      id: "series1", // 시리즈 ID

      data: [
        {
          x: "1",
          y: 55,
        },
        {
          x: "2",
          y: 262,
        },
        {
          x: "3",
          y: 73,
        },
        {
          x: "4",
          y: 77,
        },
        {
          x: "5",
          y: 104,
        },
        {
          x: "6",
          y: 217,
        },
        {
          x: "7",
          y: 85,
        },
        {
          x: "8",
          y: 9,
        },
        {
          x: "9",
          y: 203,
        },
        {
          x: "10",
          y: 104,
        },
      ],
    },
  ];

  return (
    <div className="bg-blue-100">
      <div className="bg-white mt-8  mb-2 text-3xl font-extrabold">
        <p className="ml-1">인기 종목 포함 ETF</p>
      </div>

      <div className="flex flex-row mt-3 mb-3 font-medium text-lg">
        <p className="font-bold mr-1 ml-2">신한금융지주</p> 포함 ETF
      </div>
      <Card className="m-4 w-2/5">
        <div className="flex flex-col">
          <h5 className="font-bold text-gray-900 dark:text-white">
            SOL 미국S&P500
          </h5>
          {/* 차트를 감싸는 div에 높이 지정 */}
          <div className="relative h-24 w-28">
            {" "}
            {/* 여기서 높이를 조정하세요 */}
            <MyResponsiveLine data={data} />
          </div>
        </div>
      </Card>

      <div className="bg-white">
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="전체" className="bg-blue-100">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter />
            </div>
            <div className="mb-4">
              <ALLETF />
            </div>
          </Tabs.Item>
          <Tabs.Item title="거래량">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="시가총액">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Settings associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="관심">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="최근">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default ETFMain;
