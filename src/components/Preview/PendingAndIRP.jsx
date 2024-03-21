import { Accordion } from "flowbite-react";
import moneyBagImg from "~/assets/images/preview/money-bag.png";
import React from "react";
import SavingsCalculator from "~/components/Preview/SavingsCalculator";

export default function PendingAndIRP() {
  const remainPrice = 500000; // 남는 금액
  const pendingLimitPrice = 4000000; // 연금저축 세액공제 한도
  const irpLimitPrice = 7000000; // IRP 세액공제 한도

  // TODO : 계산식 적용하기
  /* 연금저축계좌 + 퇴직연금 <= 700
      (연금저축계좌 <= 400) */

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
              title="연금저축"
              limitPrice={pendingLimitPrice}
            ></SavingsCalculator>
            <SavingsCalculator
              title="IRP"
              limitPrice={irpLimitPrice}
            ></SavingsCalculator>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
