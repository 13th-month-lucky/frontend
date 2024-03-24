import React, { useEffect } from "react";
import CardComponent from "~/components/Preview/Card";
import HousingFundLoan from "~/components/Preview/HousingFundLoan";
import PersonComponent from "~/components/Preview/Person";
import SmallBusiness from "~/components/Preview/SmallBusiness";
import MonthlyRental from "~/components/Preview/MonthlyRental";
import PendingAndIRP from "~/components/Preview/PendingAndIRP";
import MonthAndHouse from "~/components/Preview/MonthAndHouse";
import { useSearchParams } from "react-router-dom";
import BlueButton from "~/components/Button/BlueButton";

export default function PreviewSolutionPage() {
  const [total, setTotal] = React.useState({
    person: 0,
    house: 0,
    business: 0,
  });
  const [result, setResult] = React.useState(0);

  function updateTotal(type, value) {
    setTotal((prevTotal) => ({
      ...prevTotal,
      [type]: value,
    }));
  }

  function calculateTotal() {
    const temp = total.person + total.business + total.house;
    setResult(temp);
  }

  useEffect(() => {
    // totalPeopleNum이 변경될 때마다 totalPrice를 업데이트합니다.
    calculateTotal();
  }, [total, calculateTotal]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold mb-1 mt-6">
          솔루션 이행시 최대 {result}원까지 아낄 수 있어요!
        </h1>
        <div className="text-center">
          <p className="mediumGreyText mb-3 text-base">
            아래 공제를 추가해보세요. <br />
            추가할 때마다 아낄 수 있는 돈이 늘어나요.
          </p>
        </div>
      </div>
      <CardComponent />
      <PersonComponent updateTotal={updateTotal} />
      <MonthAndHouse updateTotal={updateTotal} />
      <SmallBusiness updateTotal={updateTotal} />
      <PendingAndIRP updateTotal={updateTotal} />
      <button className="bg-blue-500 text-white text-lg w-full h-20 rounded-lg font-semibold">
        결과 확인하기
      </button>
    </>
  );
}
