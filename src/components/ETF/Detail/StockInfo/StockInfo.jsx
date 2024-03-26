import React, { useState } from "react";

import Detail from "./Detail";
import Prossesion from "./Prossesion";

export default function StockInfo(props) {
  const code = props.code;
  const stockInfo = props.stockInfo;
  const isFund = props.isFund;
  const ratio = props.ratio;

  return (
    <div className="mb-32">
      <Detail code={code} stockInfo={stockInfo} isFund={isFund} />

      <Prossesion code={code} ratio={ratio} isFund={isFund} />
    </div>
  );
}
