import { Card } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

import BlueButton from "~/components/BlueButton/BlueButton";

const PreviewResultDetailPage = () => {
  const userState = useSelector((state) => state.user13th);

  const totalPay = 23018432;
  const returnMoney = 381160;

  const toggleAccordion = (accordionId) => {
    const accordionBody = document.getElementById(accordionId);
    accordionBody.classList.toggle("hidden");
  };

  return (
    <>
      <div className="bg-white h-screen p-4">
        <div className="flex flex-col items-center mt-9">
          <div>
            <p className="h2 text-center mb-10">
              {userState.nickname}님의 연말정산 내역이 <br /> 새롭게 업데이트
              됐어요 ✨
            </p>
          </div>

          <div
            id="accordion-flush"
            className="w-full"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold rtl:text-right text-black-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <div className="flex flex-row justify-between w-full text-sm">
                  <p>나의 총급여</p>
                  <p>{totalPay.toLocaleString("kr-Kr")}원</p>
                </div>
              </button>
            </h2>
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold rtl:text-right text-black-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-2"
                onClick={() => toggleAccordion("accordion-flush-body-2")}
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <div className="flex flex-row justify-between w-full text-sm">
                  <p>나의 공제 내역</p>
                  <p>확인하기</p>
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
              id="accordion-flush-body-2"
              aria-labelledby="accordion-flush-heading-3"
              className="p-5 flex flex-col gap-4 bg-gray-50"
            >
              <div className="flex flex-row justify-between w-full text-sm font-semibold text-slate-700">
                <div>근로소득 공제</div>
                <div>12,122,100</div>
              </div>
              <div>
                <div className="flex flex-row justify-between w-full text-sm font-semibold text-slate-700">
                  <div>종합소득 공제</div>
                  <div>12,122,100원</div>
                </div>

                <Card className="mt-5 text-xs font-semibold text-slate-500 bg-gray-100">
                  <div className="flex flex-row justify-between w-full">
                    <div>카드 공제</div>
                    <div>3,000,000원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>가족 공제</div>
                    <div>1,500,000원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>전통시장, 도서, 문화</div>
                    <div>2,146,268</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>4대 보험</div>
                    <div>4,595,740</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>주택 공제</div>
                    <div>965,568원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>기타 공제</div>
                    <div>2,146,268원</div>
                  </div>
                </Card>
              </div>

              <div className="flex flex-row justify-between w-full text-sm font-semibold text-slate-700">
                <div>공제 후 세금</div>
                <div> 126,485원</div>
              </div>

              <div>
                <div className="flex flex-row justify-between w-full text-sm font-semibold text-slate-700">
                  <div>세금 공제</div>
                  <div>1,617,675원</div>
                </div>

                <Card className="my-5 text-xs font-semibold text-slate-500 bg-gray-100">
                  <div className="flex flex-row justify-between w-full">
                    <div>중소기업 감면</div>
                    <div>0원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>월세 공제</div>
                    <div>0원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>연금 공제</div>
                    <div>0원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>보험료</div>
                    <div>120,000원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>의료비</div>
                    <div>39,108원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>교육비</div>
                    <div>1,389,000원</div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>기타</div>
                    <div>69,567원</div>
                  </div>
                </Card>

                <div className="flex flex-row justify-between w-full text-sm font-semibold text-slate-700">
                  <div>먼저 낸 세금</div>
                  <div> 381,160원</div>
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold rtl:text-right text-black-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <div className="flex flex-row justify-between w-full text-sm">
                  <p>돌려받는 돈</p>
                  <p>{returnMoney.toLocaleString("kr-Kr")}원</p>
                </div>
              </button>
            </h2>
          </div>

          <div className="flex justify-center mt-10 w-full">
            <BlueButton text="돌아가기" destination="/main" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewResultDetailPage;
