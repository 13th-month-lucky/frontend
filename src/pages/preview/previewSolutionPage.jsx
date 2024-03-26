import React, { useEffect, useState } from "react";
import CardComponent from "~/components/Preview/Card";
import HousingFundLoan from "~/components/Preview/HousingFundLoan";
import PersonComponent from "~/components/Preview/Person";
import SmallBusiness from "~/components/Preview/SmallBusiness";
import MonthlyRental from "~/components/Preview/MonthlyRental";
import PendingAndIRP from "~/components/Preview/PendingAndIRP";
import MonthAndHouse from "~/components/Preview/MonthAndHouse";
import BlueButton from "~/components/BlueButton/BlueButton";
import { useSelector, useDispatch } from "react-redux";
import { getMyData } from "~/lib/apis/myData";
import { findUserWithNickname } from "~/lib/apis/user";

export default function PreviewSolutionPage() {
  const [total, setTotal] = React.useState({
    person: 0,
    house: 0,
    business: 0,
  });
  const [result, setResult] = React.useState(0);
  const userState = useSelector((state) => state.user13th);
  const [user, setUser] = useState({});
  const [mydata, setMydata] = useState({});

  const nickname = userState.nickname;

  useEffect(() => {
    findUserWithNickname(nickname).then((resp) => {
      // console.log(resp);
      setUser(resp);
    });
    getMyData(userState.userId).then((resp) => {
      // console.log(resp);
      setMydata(resp);
    });
  }, []);

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
      <PersonComponent updateTotal={updateTotal} user={user} myData={mydata} />
      <MonthAndHouse updateTotal={updateTotal} user={user} myData={mydata} />
      <SmallBusiness updateTotal={updateTotal} user={user} myData={mydata} />
      <PendingAndIRP updateTotal={updateTotal} user={user} myData={mydata} />
      <div className="flex justify-center">
        <BlueButton text="결과 확인하기" destination="/preview/result/detail" />
      </div>
    </>
  );
}
