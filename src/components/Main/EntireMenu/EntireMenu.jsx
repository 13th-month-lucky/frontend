import React from "react";

import { useDispatch } from "react-redux";
import { removeUser } from "~/store/reducers/user";
import { useNavigate } from "react-router";

import {
  FcBullish,
  FcIdea,
  FcOnlineSupport,
  FcUnlock,
  FcReading,
  FcBriefcase,
  FcHome,
  FcFinePrint,
} from "react-icons/fc";

import Tip from "~/components/Tip/Tip";

export default function EntireMenu(props) {
  const setCurrentTab = props.setCurrentTab;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const divStyle = "border-b p-3 flex gap-2";
  const iconStyle = "h-6 w-6";
  const parStyle = "font-semibold mt-1";

  const menus = [
    {
      title: "연말정산 미리보기",
      link: "/preview/main",
      icon: <FcIdea className={iconStyle} />,
    },
    {
      title: "연말정산 결과 확인하기",
      link: "/preview/prev",
      icon: <FcFinePrint className={iconStyle} />,
    },
    {
      title: "ETF 추천",
      link: "/etf/main",
      icon: <FcBullish className={iconStyle} />,
    },
    {
      title: "펀드 추천",
      link: "/fund/main",
      icon: <FcOnlineSupport className={iconStyle} />,
    },
    {
      title: "연말정산 알아보기",
      state: 0,
      icon: <FcReading className={iconStyle} />,
    },
    {
      title: "연말정산 퀴즈",
      state: 1,
      icon: <FcBriefcase className={iconStyle} />,
    },
    {
      title: "마이페이지",
      state: 3,
      icon: <FcHome className={iconStyle} />,
    },
  ];

  return (
    <div className="">
      <div className="w-full h-16 bg-blue-50 flex items-center justify-center">
        <div
          className="m-4 border rounded-xl h-10 w-60 flex items-center justify-center bg-white hover:bg-blue-200"
          style={{ cursor: "pointer" }}
          onClick={() => alert("준비중입니다!")}
        >
          <p className="font-semibold">마이데이터 연결하기</p>
        </div>
      </div>

      {menus.map((ele, idx) => (
        <div
          key={ele.title}
          className={divStyle}
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (ele.link) {
              navigate(ele.link);
              return;
            }
            setCurrentTab(ele.state);
          }}
        >
          {ele.icon}
          <p className={parStyle}>{ele.title}</p>
        </div>
      ))}

      <div
        onClick={() => {
          dispatch(removeUser());
          window.location.href = "/";
        }}
        style={{ cursor: "pointer" }}
        className={divStyle}
      >
        <FcUnlock className={iconStyle} />
        <p className={parStyle}>로그아웃</p>
      </div>

      <div className="mt-8 mb-16">
        <Tip />
      </div>
    </div>
  );
}
