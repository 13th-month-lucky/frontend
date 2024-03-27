import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Risk from "~/components/ETF/Risk/Risk";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

import {
  pushLikedEtf,
  pullLikedEtf,
  pushLikedFund,
  pullLikedFund,
  findUserWithNickname,
} from "~/lib/apis/user";

export default function CommonInfo(props) {
  const userState = useSelector((state) => state.user13th);
  const code = props.code;
  const title = props.title;
  const riskDegree = props.riskDegree;
  const isFund = props.isFund;

  const [isLiked, setIsLiked] = useState(false);

  let heartImg = blankLikeIcon;
  if (isLiked) {
    heartImg = redLikeIcon;
  }

  useEffect(() => {
    findUserWithNickname(userState.nickname).then((resp) => {
      if (resp.likedEtf.includes(code)) {
        setIsLiked(true);
        return;
      }
      if (isFund === true && resp.likedFund.includes(code)) {
        setIsLiked(true);
        return;
      }
    });
  }, []);

  const clickEtfLike = () => {
    if (isFund === true) {
      if (isLiked) {
        setIsLiked(false);
        pullLikedFund(userState.userId, code);
        return;
      }

      setIsLiked(true);
      pushLikedFund(userState.userId, code);
      return;
    }

    if (isLiked) {
      setIsLiked(false);
      pullLikedEtf(userState.userId, code);
      return;
    }

    setIsLiked(true);
    pushLikedEtf(userState.userId, code);
  };

  return (
    <div className="ml-2 mt-2 mb-8">
      <Risk riskDegree={parseInt(riskDegree)} />

      <div className="flex justify-between">
        <div className="left-div mt-2">
          <p className="text-3xl mr-3 font-bold w-80">{title}</p>
          <p className="text-md text-gray-500 font-medium mt-1">{code}</p>
        </div>

        <div className="right-div mt-2">
          <img
            src={heartImg}
            className="h-8"
            onClick={() => {
              clickEtfLike();
            }}
          />
        </div>
      </div>
    </div>
  );
}
