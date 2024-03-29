import React from "react";
import { Button } from "flowbite-react";
import businessBagImg from "~/assets/images/preview/travel-dynamic-color.png";
import { useNavigate } from "react-router";

export default function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-lg items-center mt-6">
      <div className="p-5 flex-col">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-5 text-center tracking-normal">
          퀴즈를 풀며 <br />
          연말 정산과 친해져봐요!
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-xl tracking-normal mt-3 mb-5">
          열심히 풀다보면 나도 금잘알!
        </p>

        <div className="flex justify-center mt-14 mb-28">
          <img className="rounded-t-lg mb-5 w-40" src={businessBagImg} alt="" />
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-blue-200 text-black font-semibold rounded-lg shadow-md h-14 w-72 focus:ring-blue-300 enabled:hover:bg-blue-300"
            onClick={() => navigate("/quiz")}
          >
            <span className="absolute inset-0 flex items-center justify-center w-full text-xl">
              퀴즈 풀러 가기
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
