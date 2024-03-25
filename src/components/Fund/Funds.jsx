import React from "react";

import Risk from "../ETF/Risk/Risk";
import LongFundCard from "./LongFundCard";

export default function Funds(props) {
  const funds = props.funds;

  console.log("funds: ", funds);
  return (
    <div className="mt-2">
      {funds.map((ele, idx) => (
        <LongFundCard
          title={ele.data.펀드명}
          riskDegree={ele.data.위험등급}
          profit={ele.profit.표}
        />
      ))}
    </div>
  );
}
