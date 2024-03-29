import React, { useEffect, useState } from "react";

import Button from "./Button";
import { useSelector } from "react-redux";
import coinImg from "~/assets/images/preview/coin.png";
import chartImg from "~/assets/images/preview/chart.png";
import lenseImg from "~/assets/images/preview/lense.png";
import moneyBagImg from "~/assets/images/preview/moneyBag.png";
import {
  FcBullish,
  FcMoneyTransfer,
  FcIdea,
  FcOnlineSupport,
} from "react-icons/fc";

export default function Services() {
  const userState = useSelector((state) => state.user13th);

  const firstOfTitle1 = "어려운 연말정산!";
  const secondOfTitle1 = `${userState.nickname}님에게는 13월의 강도일까요,\n13월의 월급일까요?`;
  const subTitle1 = "지금 연말정산 미리보기";
  const link1 = "/preview/main";

  const title2 = "ETF 추천";
  const firstOfSubTitle2 = "나에게 꼭 맞는";
  const secondOfSubTitle2 = "ETF 찾기!";
  const link2 = "/etf/main";

  const title3 = "펀드 추천";
  const firstOfSubTitle3 = "나에게 꼭 맞는";
  const secondOfSubTitle3 = "펀드 찾기!";
  const link3 = "/fund/main";

  return (
    <div className="mb-2 p-6">
      <div className="flex items-center justify-start gap-2 mb-2 ml-1">
        <p className="h2">돈 버는 서비스</p>
        <FcMoneyTransfer size="40" />
      </div>

      <div className="w-1/1 mb-3" style={{ height: "160px" }}>
        <Button
          firstOfTitle={firstOfTitle1}
          secondOfTitle={secondOfTitle1}
          firstOfSubTitle={subTitle1}
          imageSrc={lenseImg}
          link={link1}
          icon={FcIdea}
        ></Button>
      </div>

      <div className="flex gap-2">
        <div className="w-1/2 " style={{ height: "140px" }}>
          <Button
            firstOfTitle={title2}
            firstOfSubTitle={firstOfSubTitle2}
            secondOfSubTitle={secondOfSubTitle2}
            imageSrc={chartImg}
            link={link2}
            icon={FcBullish}
          ></Button>
        </div>

        <div className="w-1/2" style={{ height: "140px" }}>
          <Button
            firstOfTitle={title3}
            firstOfSubTitle={firstOfSubTitle3}
            secondOfSubTitle={secondOfSubTitle3}
            imageSrc={moneyBagImg}
            icon={FcOnlineSupport}
            link={link3}
          ></Button>
        </div>
      </div>
    </div>
  );
}
