import React, { useState } from "react";
import "./Accordion-custom.css";
import cardImg from "~/assets/images/preview/card-dynamic-color.png";
import ProgressBar from "~/components/Preview/ProgressBar";
import { Card } from "flowbite-react";

const CardComponent = () => {
  const [isAnimationWork, setIsAnimationWork] = useState(false);

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
              <p className="text-base">
                신용카드 공제 한도까지 100만원 남았습니다.
              </p>
              <ProgressBar
                percentage={30}
                color={"#8DB4FF"}
                isAnimation={isAnimationWork}
              />
              <p>현금카드 공제 한도까지 150만원 남았습니다.</p>
              <ProgressBar
                percentage={50}
                color={"#FEA6FA"}
                isAnimation={isAnimationWork}
              />
              <p>현금영수증 공제 한도까지 150만원 남았습니다.</p>
              <ProgressBar
                percentage={70}
                color={"#FFDB97"}
                isAnimation={isAnimationWork}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
