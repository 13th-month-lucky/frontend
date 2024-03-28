import React, { useState } from "react";

import Graph from "./Graph";
import PeriodTabBar from "../PeriodTabBar";
import Tip from "~/components/Tip/Tip";
import Kospi from "~/components/Kospi/Kospi";

export default function Chart(props) {
  const code = props.code;
  const priceData = props.priceData;
  const isFund = props.isFund;

  const [currentPeriod, setCurrentPeriod] = useState(0);

  return (
    <div className="pt-4">
      <Graph
        code={code}
        currentPeriod={currentPeriod}
        chartData={priceData}
        isFund={isFund}
      />

      <PeriodTabBar
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
      />

      <div>
        <Kospi currentPeriod={currentPeriod} />
      </div>

      <div className="mt-12 mb-20">
        <Tip />
      </div>
    </div>
  );
}
