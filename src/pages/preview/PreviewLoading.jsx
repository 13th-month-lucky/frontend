import React from "react";
import dollarImg from "~/assets/dollar-color.png";
import LoadingComments from "~/components/preview/loadingComments";

const PreviewLoading = () => {
  return (
    <div className="bg-white h-screen p-4">
      <div className="flex flex-col items-center mt-32">
        <div>
          <p className="text-center text-4xl font-bold">
            마이데이터를
            <br /> 불러오는 중
          </p>
        </div>

        <div className="mt-16">
          {/* Hover scale effect added here */}
          <img
            src={dollarImg}
            alt="Magnifying glass"
            className="w-36 h-50 transition-transform duration-300 ease-in-out hover:scale-150"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl font-semibold mt-4">
            <LoadingComments />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewLoading;
