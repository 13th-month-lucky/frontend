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
    <Accordion>
      <Accordion.Panel className={"accordion"}>
        <Accordion.Title className={"accordion-title"}>
          <div className="flex align-items-center">
            <div>
              <img
                src={moneyBagImg}
                alt="money bag"
                style={{ width: "2rem", height: "2rem" }}
              ></img>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              연금저축 및 IRP 추가하기
            </h5>
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
