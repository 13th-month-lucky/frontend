import React, { useEffect, useState } from "react";

import Risk from "../ETF/Risk/Risk";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";
import { findUserWithNickname } from "~/lib/apis/user";
import { useSelector } from "react-redux";
import { pushLikedFund, pullLikedFund } from "~/lib/apis/user";
import { useNavigate } from "react-router";

export default function LongFundCard(props) {
  const userState = useSelector((state) => state.user13th);
  const fund = props.fund;
  const currentTab = props.currentTab;

  const title = fund.data.펀드명;
  const riskDegree = parseInt(fund.data.위험등급);
  const profit = fund.profit.표;
  const code = fund.code;
  const size = fund.data.규모;

  const profitPeriod = "3개월";

  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  let heartImg = blankLikeIcon;
  if (isLiked) {
    heartImg = redLikeIcon;
  }

  let optionStyle = "font-bold text-xl text-right";

  let optionTitle;
  let optionValue;

  if (currentTab === 2) {
    optionTitle = "규모";
    optionValue = size;
  } else {
    optionTitle = profitPeriod;
    optionValue = profit[profitPeriod] + "%";

    if (optionValue[0] === "-") {
      optionStyle += " text-blue-500";
    } else {
      optionStyle += " text-red-500";
    }
  }

  useEffect(() => {
    findUserWithNickname(userState.nickname).then((resp) => {
      if (resp.likedFund.includes(code)) {
        setIsLiked(true);
      }
    });
  }, []);

  const clickLike = () => {
    if (isLiked) {
      setIsLiked(false);
      pullLikedFund(userState.userId, code);
      return;
    }

    setIsLiked(true);
    pushLikedFund(userState.userId, code);
  };

  const clickCard = () => {
    navigate("/fund/detail/" + code);
  };

  return (
    <div className="border-t pt-3 pb-3 flex justify-between">
      <div onClick={() => clickCard()} style={{ cursor: "pointer" }}>
        <Risk riskDegree={riskDegree} />
        <p className="text-lg mt-2 font-semibold">{title}</p>
      </div>

      <div className="w-28 mr-3">
        <div className="flex justify-end mb-8">
          <img
            src={heartImg}
            className="h-8"
            onClick={() => {
              clickLike();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div onClick={() => clickCard()} style={{ cursor: "pointer" }}>
          <p className="text-sm text-right">{optionTitle}</p>
          <p className={optionStyle}>{optionValue}</p>
        </div>
      </div>
    </div>
  );
}
