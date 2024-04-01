import React from "react";
import BlueButton from "~/components/Button/BlueButton";
// import QuizButtons from "~/components/Quiz/QuizButtons";
import Problem from "~/components/Quiz/Problem";
import TopBackBar from "~/components/TopBackBar/TopBackBar";

import { FcMusic } from "react-icons/fc";

export default function QuizMain() {
  return (
    <>
      <TopBackBar
        title={
          <div className="flex items-center justify-center">
            <p className="h2">연말정산 퀴즈</p>
            <FcMusic size="28" className="mb-1" />
          </div>
        }
      />

      <div className="mt-3 w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center bg-blue-100">
        <Problem />
      </div>
    </>
  );
}
