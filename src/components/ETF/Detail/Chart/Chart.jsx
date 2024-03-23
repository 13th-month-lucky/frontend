import React, { useState } from "react";

import Graph from "./Graph";
import PeriodTabBar from "../PeriodTabBar";

export default function Chart(props) {
  const code = props.code;
  const priceData = props.priceData;

  const [currentPeriod, setCurrentPeriod] = useState(0);

  return (
    <div className="pt-4">
      <Graph code={code} currentPeriod={currentPeriod} chartData={priceData} />

      <PeriodTabBar
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
      />
    </div>
  );
}
