import React from "react";
import CardComponent from "~/components/Preview/Card";
import HousingFundLoan from "~/components/Preview/HousingFundLoan";
import PersonComponent from "~/components/Preview/Person";
import SmallBusiness from "~/components/Preview/SmallBusiness";
import MonthlyRental from "~/components/Preview/MonthlyRental";
import PendingAndIRP from "~/components/Preview/PendingAndIRP";

export default function PreviewSolutionPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold mb-1 mt-6">
          솔루션 이행시 최대 0원까지 아낄 수 있어요!
        </h1>
        <div className="text-center">
          <p className="text-gray-500 mb-3 text-base">
            아래 공제를 추가해보세요. <br />
            추가할 때마다 아낄 수 있는 돈이 늘어나요.
          </p>
        </div>
      </div>
      <CardComponent />
      <PersonComponent />
      <MonthlyRental />
      <HousingFundLoan />
      <SmallBusiness />
      <PendingAndIRP />
      <button className="bg-blue-500 text-white text-lg w-full h-20 rounded-lg font-semibold">
        결과 확인하기
      </button>
    </>
  );
}
