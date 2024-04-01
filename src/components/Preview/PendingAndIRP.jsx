import { Accordion } from "flowbite-react";
import moneyBagImg from "~/assets/images/preview/money-bag.png";
import React, { useEffect, useState } from "react";
import SavingsCalculator from "~/components/Preview/SavingsCalculator";
import { useSelector } from "react-redux";

export default function PendingAndIRP({ updateTotal, myData }) {
  const yearTaxState = useSelector((state) => state.yearTax);

  // 유저 데이터
  const [remainPrice, setRemainPrice] = useState(300000); // 남는 금액
  const [salary, setSalary] = useState(0); // 총급여액

  const [pending, setPending] = useState({
    계좌유무: false,
    납입액: 0,
  });

  const [irp, setIRP] = useState({
    계좌유무: false,
    납입액: 0,
  });

  // 세액 공제 기준 금액
  const salaryThreshold = 550000000;
  const irpLimitPrice = 9000000; // IRP 세액공제 한도
  const pendingLimitPrice = 6000000; // 연금저축 세액공제 한도

  const [rate, setRate] = useState(0); // 세액 공제율
  const [remainPendingLimitPrice, setRemainPendingLimitPrice] = useState(0);

  useEffect(() => {
    setSalary(yearTaxState.data.salary);
  }, [yearTaxState.data.salary]);

  useEffect(() => {
    setRate(salary > salaryThreshold ? 0.12 : 0.15);
  }, [salary]);

  useEffect(() => {
    if (myData) {
      if (myData.IRP) {
        setIRP(myData["IRP"]);
      }
      if (myData["연금저축"]) {
        setPending(myData["연금저축"]);
      }

      if (myData["남은돈"]) {
        setRemainPrice(myData["남은돈"]);
      }
    }
  }, [myData]);

  useEffect(() => {
    setRemainPendingLimitPrice(
      Math.min(
        // 연금저축 세액공제 남은 한도 (irp 납입액 차액)
        pendingLimitPrice,
        irpLimitPrice - irp["납입액"]
      )
    );
  }, [irp]);

  return (
    <Accordion collapseAll className="m-5">
      <Accordion.Panel>
        <Accordion.Title className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <div className="flex flex-row align-center">
            <img src={moneyBagImg} className="w-10 h-10 mt-1" />
            <h2 className="ml-2 mt-2">연금저축 및 IRP 추가하기</h2>
          </div>
        </Accordion.Title>
        <Accordion.Content className="bg-gray-100">
          <p className="text-center text-gray-600">
            소비 패턴 분석 결과, <br /> 매달 약
            <b> {remainPrice.toLocaleString("kr-Kr")}원</b>이 자고 있어요.{" "}
            <br />
            저축도 하고 세액공제도 받는 건 어때요?
          </p>
          <div className="flex flex-col gap-8 mt-4">
            <SavingsCalculator
              updateTotal={updateTotal}
              keyword="pending"
              title="연금저축"
              limitPrice={pendingLimitPrice}
              data={pending}
              rate={rate}
              remainPendingLimitPrice={remainPendingLimitPrice}
            ></SavingsCalculator>
            <SavingsCalculator
              updateTotal={updateTotal}
              keyword="irp"
              title="IRP"
              limitPrice={irpLimitPrice}
              data={irp}
              rate={rate}
            ></SavingsCalculator>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
