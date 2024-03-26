import React, { useEffect, useState } from "react";

import SmallFundCard from "./SmallFundCard";

export default function HotFund(props) {
  const rising = props.rising;
  const include = props.include;

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIdx((prev) => {
        if (prev + 1 < rising.length) {
          return prev + 1;
        }
        return 0;
      });
    }, 10000);
  }, []);

  return (
    <div className="bg-sky-50 pt-4 pb-4">
      <div>
        <p className="text-lg ml-4 mb-1">
          <span className="font-bold">{rising[idx]}</span> 포함 펀드
        </p>
      </div>

      <div className="flex overflow-x-auto h-40">
        {include[idx].map((ele, idx) => (
          <SmallFundCard key={ele.code} fund={ele} />
        ))}
      </div>
    </div>
  );
}
