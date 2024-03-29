import React from "react";
import BlueButton from "~/components/Button/BlueButton";
// import QuizButtons from "~/components/Quiz/QuizButtons";
import Problem from "~/components/Quiz/Problem";

export default function QuizMain() {
  return (
    <>
      <div className="w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center mt-20 bg-blue-100">
        <Problem />
      </div>
      <div className="flex mt-5 mb-5">
        <div className="flex items-center justify-center mt-5 w-full">
          <BlueButton text="메인으로" destination="/main" />
          {/* <BlueButton text="랭킹보기" destination="/main" /> */}
        </div>
      </div>
    </>
  );
}
