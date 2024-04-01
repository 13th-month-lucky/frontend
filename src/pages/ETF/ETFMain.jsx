import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import ETFFilter from "../../components/ETF/Filter/ETFFilter";

import ALLETF from "~/components/ETF/Main/ALLETF";
import HotIssue from "~/components/ETF/Main/HotIssue";
import VolumeETF from "~/components/ETF/Main/VolumeETF";
import CapitalizationETF from "~/components/ETF/Main/CapitalizationETF";
import LikedEtf from "~/components/ETF/Main/LikedETF";
import RecentETF from "~/components/ETF/Main/RecentETF";
import TopBackBar from "~/components/TopBackBar/TopBackBar";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";

const ETFMain = () => {
  const [selectedDangerDegree, setSelectedDangerDegree] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const detailTabs = ["전체", "거래량", "시가총액", "관심", "최근"];

  const handleDangerDegreeChange = (dangerDegree) => {
    setSelectedDangerDegree(dangerDegree);
    // console.log(dangerDegree);
  };
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    // console.log(type);
    setSelectedType(type);
  };

  return (
    <div>
      <TopBackBar title="ETF 추천" />

      <HotIssue />

      <div className="bg-white mt-3">
        <DetailTabBar
          detailTabs={detailTabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        {/* 전체 */}
        {currentTab === 0 && (
          <>
            <div className="py-1">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
            </div>

            <div className="mb-4">
              <ALLETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </>
        )}
        {/* 거래량 */}
        {currentTab === 1 && (
          <>
            <ETFFilter
              onTypeSelect={handleTypeSelect}
              onDangerDegreeChange={handleDangerDegreeChange}
            />
            <div className="mb-4">
              <VolumeETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </>
        )}
        {/* 시가총액 */}
        {currentTab === 2 && (
          <>
            <ETFFilter
              onTypeSelect={handleTypeSelect}
              onDangerDegreeChange={handleDangerDegreeChange}
            />
            <div className="mb-4">
              <CapitalizationETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </>
        )}
        {/* 관심 */}
        {currentTab === 3 && (
          <>
            <ETFFilter
              onTypeSelect={handleTypeSelect}
              onDangerDegreeChange={handleDangerDegreeChange}
            />

            <LikedEtf
              selectedDangerDegree={selectedDangerDegree}
              selectedType={selectedType}
            />
          </>
        )}

        {/* 최근 */}
        {currentTab === 4 && (
          <>
            <ETFFilter
              onTypeSelect={handleTypeSelect}
              onDangerDegreeChange={handleDangerDegreeChange}
            />
            <div className="mb-4">
              <RecentETF
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ETFMain;
