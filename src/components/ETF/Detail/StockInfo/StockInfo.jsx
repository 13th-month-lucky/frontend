import React from "react";

import Detail from "./Detail";
import Prossesion from "./Prossesion";

export default function StockInfo(props) {
  const code = props.code;
  const stockInfo = props.stockInfo;

  return (
    <div className="mb-32">
      <Detail code={code} stockInfo={stockInfo} />

      <Prossesion code={code} ratio={stockInfo.ratio} />
    </div>
  );
}
