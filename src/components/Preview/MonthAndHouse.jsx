import React, { useState, useEffect } from "react";
import {
  Accordion,
  Checkbox,
  Label,
  TextInput,
  Radio,
  Card,
} from "flowbite-react";
import houseImg from "~/assets/images/preview/house.png";
import HouseProgressBar from "./HouseProgressBar";
import { useSelector } from "react-redux";
import { addResult } from "~/lib/apis/result";

const MonthAndHouse = ({ updateTotal, myData }) => {
  const [checkLoan, setCheckLoan] = useState(false);
  const [checkMonthly, setCheckMonthly] = useState(false); // 월세 체크
  const [checkYearly, setCheckYearly] = useState(false); // 전세 체크
  const [monthlyPay, setMonthlyPay] = useState(0); //월세 금액
  const [monthResult, setMonthResult] = useState(0); //월세 공제 금액
  const [housingDepositResult, setHousingDepositResult] = useState(0); // 청약 공제 금액
  const [loanResult, setLoanResult] = useState(0); // 전세 공제 금액
  const [houseTotalResult, setHouseTotalResult] = useState(0); // 주택 관련 총 공제 금액
  const [totalIncome, setTotalIncome] = useState(0); // 총급여
  const [loan, setLoan] = useState(0); //대출
  const [housingDeposit, setHousingDeposit] = useState(0); // 저축연금
  const user = useSelector((state) => state.user13th);

  //월세 및 전세금 있는 지 여부 체크 버튼 핸들링
  const handleCheckLoanChange = (event) => {
    setCheckLoan(event.target.checked);
    console.log(event.target.checked);
  };

  //월세/전세 두개중 하나 체크 버튼 핸들링
  const handleRadioChange = (event) => {
    if (event.target.value === "monthly") {
      setCheckMonthly(event.target.checked);
      setCheckYearly(false);
    } else if (event.target.value === "yearly") {
      setCheckYearly(event.target.checked);
      setCheckMonthly(false); // 자가 선택 시 checkMonthly 상태를 false로 설정
    }
  };

  //월세 입력 핸들링
  const handleMonthlyPay = (event) => {
    const value = event.target.value;
    setMonthlyPay(value);
  };

  // 월세 공제 결과 계산 함수
  const monthlyResultCalculate = () => {
    let result = 0;
    if (totalIncome > 55000000 && totalIncome <= 70000000) {
      result = monthlyPay * 10000 * 12 * 0.17;
      if (result > 7500000) {
        result = 7500000;
      }
    } else {
      result = monthlyPay * 10000 * 12 * 0.15;
    }
    setMonthResult(result);
    updateTotal("house", result);
    addResult(user.userId, { 월세공제: result });
  };

  //주택 공제 결과 계산 함수
  const houseResultCalculate = () => {
    const MAX_HOUSING_DEPOSIT = 3000000;
    const MAX_LOAN_AMOUNT = 4000000;
    const LOAN_PERCENTAGE = 0.4;

    let promise = Math.min(housingDeposit, MAX_HOUSING_DEPOSIT);
    let loanAmount = loan * LOAN_PERCENTAGE;
    let promiseAmount = promise * 12 * LOAN_PERCENTAGE;
    let result = 0;

    if (totalIncome <= 70000000) {
      result = Math.min(promiseAmount + loanAmount, MAX_LOAN_AMOUNT);
      setHousingDepositResult(promiseAmount);
      setLoanResult(Math.min(loanAmount, MAX_LOAN_AMOUNT));
    } else {
      result = Math.min(loanAmount, MAX_LOAN_AMOUNT);
      setLoanResult(Math.min(loanAmount, MAX_LOAN_AMOUNT));
    }

    setHouseTotalResult(result);
    updateTotal("house", result);
    addResult(user.userId, { 주택공제: result });
  };

  useEffect(() => {
    setTotalIncome(user.totalIncome);
    if (myData.주택) {
      if (myData.주택.전세원리금상환액) {
        setLoan(myData.주택.전세원리금상환액);
      }
      if (myData.주택.주택청약납입액) {
        setHousingDeposit(myData.주택.주택청약납입액);
      }
    }
    if (checkMonthly) {
      monthlyResultCalculate();
    } else {
      houseResultCalculate();
    }
  }, [
    monthlyPay,
    checkMonthly,
    checkYearly,
    housingDepositResult,
    loanResult,
    user,
    myData,
  ]);

  return (
    <>
      <div>
        <Accordion collapseAll className="m-5">
          <Accordion.Panel>
            <Accordion.Title className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
              <div className="flex flex-row">
                <img src={houseImg} className="w-10 h-10" />
                <h2 className="ml-2 mb-1">
                  월세 및 주택 대출 <br />
                  상환 공제 추가하기
                </h2>
              </div>
            </Accordion.Title>
            <Accordion.Content className="bg-gray-100">
              <div>
                {checkMonthly && checkLoan ? (
                  <div className="flex items-center ml-2 mb-2">
                    <p>월세 공제 시, 약 {monthResult}원 돌려받을 수 있어요!</p>
                  </div>
                ) : null}
                {checkYearly && checkLoan ? (
                  <>
                    <div className="flex items-center ml-2 mb-2">
                      <p>
                        전세 대출 공제 시, <br /> 약 {houseTotalResult}원
                        돌려받을 수 있어요!
                      </p>
                    </div>
                    <div>
                      <HouseProgressBar
                        value1={housingDepositResult}
                        value2={loanResult}
                      />
                    </div>
                  </>
                ) : null}
              </div>
              <Card>
                <div>
                  <div className="flex justify-between items-center gap-2 mb-3">
                    <p>무주택 세대 해당 여부</p>{" "}
                    <Checkbox id="accept" defaultChecked className="w-6 h-6" />
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <Label htmlFor="promotion" className=" mt-1 text-base">
                      월세 및 전세 대출 보유 여부
                    </Label>
                    <Checkbox
                      id="promotion"
                      checked={checkLoan}
                      onChange={handleCheckLoanChange}
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </div>
                {checkLoan && (
                  <div>
                    <div className="mt-1">
                      <div className="max-w-md">
                        <fieldset className="flex max-w-md flex-row gap-4 items-center justify-center mb-5">
                          <div className="flex items-center gap-2">
                            <Radio
                              id="monthly"
                              name="type"
                              value="monthly"
                              checked={checkMonthly}
                              onChange={handleRadioChange}
                            />
                            <Label htmlFor="monthly">월세</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio
                              id="yearly"
                              name="type"
                              value="yearly"
                              checked={checkYearly}
                              onChange={handleRadioChange}
                            />
                            <Label htmlFor="yearly">전세</Label>
                          </div>
                        </fieldset>
                        {checkMonthly ? (
                          <div className="flex justify-between items-center gap-2 ml-2 mr-2">
                            <p className="text-nowrap">월세</p>
                            <div className="flex justify-end items-center gap-2 text-nowrap">
                              <input
                                name="price"
                                id="price"
                                className="text-right block w-1/3 rounded-md border-0 py-1.5 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={monthlyPay}
                                onChange={handleMonthlyPay}
                              />
                              <span>만원</span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default MonthAndHouse;
