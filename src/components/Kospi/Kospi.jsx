import React, { useEffect, useState } from "react";

import { getKospiPrices } from "~/lib/apis/kospi";

export default function Kospi(props) {
  const currentPeriod = props.currentPeriod;

  const [kospi, setKospi] = useState();
  const [message, setMessage] = useState();
  const [style, setStyle] = useState("");

  useEffect(() => {
    const resp = getKospiPrices().then((resp) => {
      setKospi(resp[0].data);
    });
  }, []);

  useEffect(() => {
    if (kospi) {
      const currentPrice = kospi[0].closePrice;
      const pastPrice = kospi[currentPeriod + 1].closePrice;
      const kospiChange = (
        ((currentPrice - pastPrice) / pastPrice) *
        100
      ).toFixed(2);

      console.log(
        "kos: ",
        kospi[0].closePrice,
        kospi[currentPeriod + 1].closePrice,
        kospiChange
      );

      console.log("kospi[0]: ", kospiChange[0]);
      if (kospiChange[0] === "-") {
        console.log("minus : ", kospiChange.substring(1));
        setMessage(kospiChange.substring(1) + "% 하락");
        setStyle("text-blue-500");
      } else {
        setMessage(kospiChange + "% 상승");
        setStyle("text-red-500");
      }
    }
  }, [kospi, currentPeriod]);

  return (
    <div className="text-center m-4 text-md font-semibold">
      <p>
        같은기간, 코스피는 <span className={style}>{message}</span>했어요
      </p>
    </div>
  );
}
