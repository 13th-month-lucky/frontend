import React, { useEffect, useState } from "react";
import "./Accordion-custom.css";
import cardImg from "~/assets/images/preview/card-dynamic-color.png";
import ProgressBar from "~/components/Preview/ProgressBar";
import { Card, Tooltip } from "flowbite-react";
import { useSelector } from "react-redux";

const CardComponent = ({ updateTotal, myData }) => {
  const yearTaxState = useSelector((state) => state.yearTax);
  const [isAnimationWork, setIsAnimationWork] = useState(false);
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");

  // user data
  const [salary, setSalary] = useState(0);
  const [creditAmount, setCreditAmount] = useState(0); // 신용카드
  const [checkAmount, setCheckAmount] = useState(0); // 체크카드
  const [cashAmount, setCashAmount] = useState(0); // 현금영수증
  const [minAmount, setMinAmount] = useState(0); // 최소 공제 기준 금액
  const [limit, setLimit] = useState(0); // 공제 한도
  const [creditDeductionAmount, setCreditDeductionAmount] = useState(0); // 신용카드 공제액
  const [cashDeductionAmount, setCashDeductionAmount] = useState(0); // 현금영수증, 직불, 선불카드 공제액

  const [flag, setFlag] = useState(true);

  const limitThreshold = 70000000; // 공제 한도 기준 급여액
  const unit = 10000; // 단위

  useEffect(() => {
    setMinAmount(salary * 0.25); // 25%
    setLimit(salary <= limitThreshold ? 3000000 : 2500000);
  }, [salary]);

  useEffect(() => {
    setSalary(yearTaxState.data.salary);
  }, [yearTaxState.salary]);

  useEffect(() => {
    if (myData) {
      if (myData.카드) {
        setCheckAmount(myData.카드.체크카드);
        setCreditAmount(myData.카드.신용카드);
        setCreditDeductionAmount(myData.카드.신용카드 * 0.15);
        setCashAmount(myData.카드.현금영수증);
        setCashDeductionAmount(
          (myData.카드.체크카드 + myData.카드.현금영수증) * 0.3
        );
      }
    }
  }, [myData]);

  useEffect(() => {
    updateTotal("card", cashDeductionAmount + creditDeductionAmount);
  }, [cashDeductionAmount, creditDeductionAmount]);

  useEffect(() => {
    if (cashAmount + checkAmount + creditAmount < minAmount) {
      // 최소 공제 기준 금액을 넘지 못했을 경우
      setMsg1("소비금액이 적어 \n 카드 소득공제를 받을 수 없어요. 😅");
      setMsg2(
        `앞으로 지출은 ${minAmount / unit}만원까지 신용카드,
        그 이상은 체크카드를 써보아요!\n`
      );
      setFlag(false);
    } else if (cashDeductionAmount + creditDeductionAmount >= limit) {
      // 공제 한도를 모두 채웠을 경우
      setMsg1("소비금액이 많아 카드 소득공제를 최대로 받을 수 있어요!");
      setMsg2(`앞으로 지출은 혜택이 좋은 신용카드를 사용해도 좋아요 😊`);
    } else {
      setMsg1("황금비율로 쓰면 카드 소득 공제를 최대로 받을 수 있어요.");
      // 최소 공제 기준 이상 공제 한도 미만
      if (creditAmount < minAmount) {
        // 신용카드 사용액이 최소 공제 기준을 넘지 못했을 경우
        setMsg2(
          `혜택이 좋은 신용카드를 ${
            (minAmount - creditAmount) / unit
          }만원 추가로 사용 후 공제율이 높은 체크카드, 현금을 사용하세요!`
        );
      } else {
        // 한도까지 체크카드 권유
        if (cashDeductionAmount < limit) {
          setMsg2(
            `체크카드 공제 한도가 ${(
              (limit - cashDeductionAmount) /
              unit
            ).toFixed()}만원 남았어요!`
          );
        } else {
          // 한도 다채우면 다시 신용카드
          setMsg2(`앞으로 지출은 혜택이 좋은 신용카드를 사용해도 좋아요 😊`);
        }
      }
    }
  }, [
    cashAmount,
    checkAmount,
    creditAmount,
    minAmount,
    cashDeductionAmount,
    creditDeductionAmount,
    limit,
  ]);

  const handleButton = () => {
    const accordionBody = document.getElementById("accordion-color-body-1");
    if (isAnimationWork) {
      setIsAnimationWork(false);
      accordionBody.classList.add("hidden");
    } else {
      setIsAnimationWork(true);
      accordionBody.classList.remove("hidden");
    }
  };

  return (
    <>
      <div
        className="pl-5 pr-5"
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl rounded-b-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1"
            onClick={handleButton}
            style={
              isAnimationWork
                ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    backgroundColor: "#E1EFFE",
                  }
                : null
            }
          >
            <div className="flex items-center">
              <img src={cardImg} alt="card" className="w-11 h-13 mr-2 mb-1" />
              <span className="text-xl text-black">카드 공제 사용하기</span>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className="hidden"
          aria-labelledby="accordion-color-heading-1"
        >
          <div className="p-5 border border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 bg-gray-100">
            <Card>
              <p className="text-center text-pretty	text-start font-bold whitespace-pre-line">
                {msg1}
              </p>
              <div className="flex gap-2 item-center">
                <p className="text-center text-xs text-start text-pretty text-blue-500 whitespace-pre-line">
                  {msg2}
                </p>

                {msg2 ? (
                  <Tooltip
                    style="light"
                    placement="top"
                    content={
                      <div>
                        <p className="text-sm font-bold">💡 TIP</p>
                        <p className="text-xs">
                          {">"} 급여의 25%인 {minAmount / unit}만원 이상
                          소비금액부터 카드 소득 공제 대상이에요. <br /> {">"}
                          체크카드는 신용카드보다 공제율이 2배 높아요.
                        </p>
                      </div>
                    }
                  >
                    <button>
                      <svg
                        className="h-5 w-5 text-neutral-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="9" />{" "}
                        <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                      </svg>
                    </button>
                  </Tooltip>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col gap-5 items-start">
                <ProgressBar
                  amount={creditAmount}
                  color={"#8DB4FF"}
                  percentage={(creditAmount * 100) / salary}
                  isAnimation={isAnimationWork}
                  limit={salary}
                />

                <div className="flex items-center justify-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#8DB4FF] rounded-sm" />{" "}
                  <div className="text-[10px]">신용카드</div>
                </div>
              </div>

              <div className="flex flex-col gap-5 items-start">
                <ProgressBar
                  amount={cashAmount + checkAmount}
                  percentage={((cashAmount + checkAmount) * 100) / salary}
                  color={"#FEA6FA"}
                  isAnimation={isAnimationWork}
                  limit={salary}
                />

                <div className="flex items-center justify-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#FEA6FA] rounded-sm" />{" "}
                  <div className="text-[10px]">체크카드, 현금, 페이</div>
                </div>
              </div>

              <div className="flex flex-col gap-5 items-start">
                <ProgressBar
                  amount={
                    flag ? cashDeductionAmount + creditDeductionAmount : 0
                  }
                  percentage={
                    flag
                      ? ((cashDeductionAmount + creditDeductionAmount) * 100) /
                        limit
                      : 0
                  }
                  color={"#FFDB97"}
                  isAnimation={isAnimationWork}
                  limit={limit}
                />

                <div className="flex items-center justify-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#FFDB97] rounded-sm" />{" "}
                  <div className="text-[10px]">카드 공제 금액</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
