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

        <div className="flex justify-center mt-14">
          <img className="rounded-t-lg mb-5 w-40" src={businessBagImg} alt="" />
        </div>

        <div className="flex justify-center mt-20">
          <Button
            className=" bg-blue-500 text-white text-lg font-semibold rounded-2xl shadow-md w-9/12 h-12 focus:ring-blue-200 enabled:hover:bg-blue-100 tracking-tight"
            onClick={() => navigate("/quiz")}
          >
            <span className="text-xl"> 퀴즈 풀러 가기</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
