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

const ETFMain = () => {
  const [selectedDangerDegree, setSelectedDangerDegree] = useState(null);

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
      <TopBackBar />

      <div className="bg-blue-100 rounded-xl">
        <HotIssue />

        <div className="bg-white mt-2">
          <Tabs aria-label="Default tabs" style="default">
            <Tabs.Item active title="전체" className="bg-blue-100">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />
              <div className="mb-4">
                <ALLETF
                  selectedDangerDegree={selectedDangerDegree}
                  selectedType={selectedType}
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="거래량">
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
            </Tabs.Item>
            <Tabs.Item title="시가총액">
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
            </Tabs.Item>
            <Tabs.Item title="관심">
              <ETFFilter
                onTypeSelect={handleTypeSelect}
                onDangerDegreeChange={handleDangerDegreeChange}
              />

              <LikedEtf
                selectedDangerDegree={selectedDangerDegree}
                selectedType={selectedType}
              />
            </Tabs.Item>
            <Tabs.Item title="최근">
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
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ETFMain;
