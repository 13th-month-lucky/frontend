import React from "react";
import { Button } from "flowbite-react";
import businessBagImg from "~/assets/images/preview/travel-dynamic-color.png";
import { useNavigate } from "react-router";

export default function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center mt-10">
      <div className="p-5">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-5 text-center tracking-normal">
          퀴즈를 풀며 <br />
          연말 정산과 친해져봐요!
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-xl tracking-normal mt-3 mb-5">
          열심히 풀다보면 나도 금잘알!
        </p>
        <img className="rounded-t-lg mb-5" src={businessBagImg} alt="" />
        <Button
          className="bg-blue-200 text-black font-semibold rounded-lg shadow-md w-full h-20 focus:ring-blue-300 enabled:hover:bg-blue-300 "
          onClick={() => navigate("/quiz")}
        >
          <span className="absolute inset-0 flex items-center justify-center w-full text-2xl">
            퀴즈 풀러 가기
          </span>
        </Button>
      </div>
    </div>
  );
}
