import React from "react";

import Risk from "../ETF/Risk/Risk";
import LongFundCard from "./LongFundCard";

export default function Funds(props) {
  const funds = props.funds;
  const currentTab = props.currentTab;

  return (
    <div className="mt-2">
      {funds.map((ele, idx) => (
        <LongFundCard key={ele.code} fund={ele} currentTab={currentTab} />
      ))}
    </div>
  );
}
