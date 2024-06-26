import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

import { formatDateWithDayOfWeek } from "~/lib/utils/dateFormat";

import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DetailBlueButton = ({ resultId }) => {
  return (
    <Link to={"/preview/result/detail/" + resultId}>
      <button className="bg-blue-500 text-white text-sm p-1 rounded-[12px] font-semibold flex items-center justify-center gap-1">
        <p className="ml-1">자세히 보기</p>
        <FaChevronRight color="white" />
      </button>
    </Link>
  );
};

export default function YeartaxResultBlock({ result }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(formatDateWithDayOfWeek(new Date(result.createdDate)));
  }, [result.createdDate]);

  return (
    <Card>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{date}</p>

          <DetailBlueButton resultId={result.id} />
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-500 font-semibold">
          <p>나의 총급여</p>
          <p>{result.총급여.toLocaleString("kr-Kr")}만원</p>
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-500 font-semibold">
          <p>돌려받은 돈</p>
          <p>{result.돌려받은돈.toLocaleString("kr-Kr")}만원</p>
        </div>
      </div>
    </Card>
  );
}
