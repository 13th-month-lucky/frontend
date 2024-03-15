import React, { useEffect, useState } from "react";

import Button from "./Button";
import { useSelector } from "react-redux";
import coinImg from "~/assets/images/preview/coin.png";
import chartImg from "~/assets/images/preview/chart.png";
import lenseImg from "~/assets/images/preview/lense.png";
import moneyBagImg from "~/assets/images/preview/moneyBag.png";

export default function Services() {
  const userState = useSelector((state) => state.user);

  const firstOfTitle1 = userState.nickname + "님은 13월의 강도일까요,";
  const secondOfTitle1 = "13월의 월급일까요?";
  const subTitle1 = "지금 연말정산 미리보기";
  const imageSrc1 = "/src/assets/images/lense.png";
  const link1 = "/preview/main";

  const title2 = "ETF 추천";
  const firstOfSubTitle2 = "나에게 꼭 맞는";
  const secondOfSubTitle2 = "ETF 찾기!";

  const title3 = "펀드 추천";
  const firstOfSubTitle3 = "나에게 꼭 맞는";
  const secondOfSubTitle3 = "펀드 찾기!";

  return (
    <div className="mt-3 mb-10 p-6">
      <div className="flex items-center justify-start gap-2 mb-2 ml-1">
        <p className="text-2xl font-bold">돈 버는 서비스</p>
        <img className="h-10" src={coinImg}></img>
      </div>

      <div className="w-1/1 mb-3" style={{ height: "160px" }}>
        <Button
          firstOfTitle={firstOfTitle1}
          secondOfTitle={secondOfTitle1}
          firstOfSubTitle={subTitle1}
          imageSrc={imageSrc1}
          link={link1}
        ></Button>
      </div>

      <div className="flex gap-2">
        <div className="w-1/2 " style={{ height: "140px" }}>
          <Button
            firstOfTitle={title2}
            firstOfSubTitle={firstOfSubTitle2}
            secondOfSubTitle={secondOfSubTitle2}
            imageSrc={chartImg}
          ></Button>
        </div>

        <div className="w-1/2" style={{ height: "140px" }}>
          <Button
            firstOfTitle={title3}
            firstOfSubTitle={firstOfSubTitle3}
            secondOfSubTitle={secondOfSubTitle3}
            imageSrc={moneyBagImg}
          ></Button>
        </div>
      </div>
    </div>
  );
}
