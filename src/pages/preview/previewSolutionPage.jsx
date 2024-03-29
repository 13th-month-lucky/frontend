import React, { useEffect, useState } from "react";
import CardComponent from "~/components/Preview/Card";
import HousingFundLoan from "~/components/Preview/HousingFundLoan";
import PersonComponent from "~/components/Preview/Person";
import SmallBusiness from "~/components/Preview/SmallBusiness";
import MonthlyRental from "~/components/Preview/MonthlyRental";
import PendingAndIRP from "~/components/Preview/PendingAndIRP";
import MonthAndHouse from "~/components/Preview/MonthAndHouse";
import BlueButton from "~/components/Button/BlueButton";
import { useSelector, useDispatch } from "react-redux";
import { getMyData } from "~/lib/apis/myData";
import { updateResult } from "~/lib/apis/result";

export default function PreviewSolutionPage() {
  const [total, setTotal] = React.useState({
    person: 0,
    house: 0,
    month: 0,
    business: 0,
    pending: 0,
    irp: 0,
    card: 0,
  });
  const [result, setResult] = React.useState(0);
  const userState = useSelector((state) => state.user13th);
  const yearTax = useSelector((state) => state.yearTax);
  const [mydata, setMydata] = useState({});

  useEffect(() => {
    getMyData(userState.userId).then((resp) => {
      setMydata(resp);
    });
  }, []);

  useEffect(() => {
    // totalPeopleNum이 변경될 때마다 totalPrice를 업데이트합니다.
    calculateTotal();
  }, [total, calculateTotal]);

  function updateTotal(type, value) {
    setTotal((prevTotal) => ({
      ...prevTotal,
      [type]: value,
    }));
  }

  function calculateTotal() {
    let totalSum = 0;
    for (const key in total) {
      totalSum += total[key];
    }
    setResult(totalSum);
  }

  const updateResultData = () => {
    const data = {
      종합소득공제: {
        카드공제: total.card,
        가족공제: total.person,
        주택공제: total.house,
      },
      세금공제: {
        월세공제: total.month,
        중소기업감면: total.business,
        연금공제: total.irp + total.pending,
      },
    };

    updateResult(yearTax.resultId, data);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-1 mt-4 text-center">
          솔루션 이행 시, <br />
          최대{" "}
          <span className="font-bold">
            {result.toLocaleString("ko-KR")}원
          </span>{" "}
          아낄 수 있어요!
        </h1>
        <div className="text-center mt-2">
          <p className="mediumGreyText mb-1 text-base">
            공제를 추가해보세요. <br />
            추가할 때마다 아낄 수 있는 돈이 늘어나요.
          </p>
        </div>
      </div>
      <CardComponent updateTotal={updateTotal} myData={mydata} />
      <PersonComponent updateTotal={updateTotal} myData={mydata} />
      <MonthAndHouse updateTotal={updateTotal} myData={mydata} />
      <SmallBusiness updateTotal={updateTotal} myData={mydata} />
      <PendingAndIRP updateTotal={updateTotal} myData={mydata} />
      <div className="flex justify-center">
        <BlueButton
          text="결과 확인하기"
          destination="/preview/result/detail"
          onClick={() => {
            updateResultData();
          }}
        />
      </div>
    </>
  );
}

// updateResult(yearTax.resultId, { 월세공제: 0 });
// updateResult(yearTax.resultId, { 월세공제: result });
// updateResult(yearTax.resultId, { 주택공제: result });
// updateResult(yearTax.resultId, { 중소기업감면: result });
