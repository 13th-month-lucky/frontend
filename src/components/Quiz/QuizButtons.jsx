import React from "react";
import { Button } from "flowbite-react";
import BlueButton from "../BlueButton/BlueButton";

export default function QuizButtons() {
  return (
    <>
      <div className="flex mt-5 mb-5">
        {/* <Button className="bg-blue-100 text-black text-3xl font-bold rounded-lg shadow-md w-full h-20 focus:ring-blue-200 mr-1 ">
          <span className="text-xl"> 메인으로</span>
        </Button>
        <Button className=" bg-blue-100 text-black font-bold rounded-lg shadow-md w-full h-20 focus:ring-blue-200 enabled:hover:bg-blue-100  ml-1 mr-1">
          <span className="text-xl"> 다음 문제로</span>
        </Button> */}
        <div className="flex items-center justify-center mt-5 w-full">
          <BlueButton text="메인으로" destination="/main" />
          {/* <BlueButton text="랭킹보기" destination="/main" /> */}
        </div>
      </div>
    </>
  );
}
