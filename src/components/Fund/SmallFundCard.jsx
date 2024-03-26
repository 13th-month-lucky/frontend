import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function SimpleFundCard(props) {
  const userState = useSelector((state) => state.user13th);
  const navigate = useNavigate();

  const fund = props.fund;
  const currentTab = props.currentTab;

  const title = fund.data.펀드명;
  const riskDegree = parseInt(fund.data.위험등급);
  const profit = fund.profit.표;
  const code = fund.code;
  const size = fund.data.규모;

  const profitPeriod = "3개월";

  let optionStyle = "font-bold text-xl text-right";
  if (profit[profitPeriod][0] === "-") {
    optionStyle += " text-blue-500";
  } else {
    optionStyle += " text-red-500";
  }

  return (
    <div
      className="relative flex-shrink-0 w-48 p-4 bg-white rounded-xl ml-4"
      onClick={() => navigate("/fund/detail/" + code)}
      style={{ cursor: "pointer" }}
    >
      <p>{title}</p>

      <div className="absolute bottom-4 right-4">
        <p className="text-sm text-right">{profitPeriod}</p>
        <p className={optionStyle}>{profit[profitPeriod]}%</p>
      </div>
    </div>
  );
}
