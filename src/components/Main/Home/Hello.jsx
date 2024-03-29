import { Alert, Toast } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function Hello(props) {
  const userState = useSelector((state) => state.user13th);
  const setCurrentTab = props.setCurrentTab;

  return (
    <div className="flex mt-2">
      <div
        className="mr-6 ml-auto flex items-center justify-start gap-2"
        style={{ cursor: "pointer" }}
        onClick={() => setCurrentTab(3)}
      >
        <div
          id="toast-default"
          className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
            <img
              className="h-8 w-8 rounded-full"
              src={userState.profileImageUrl}
            ></img>
          </div>
          <div className="ml-3 text-sm font-normal">
            {userState.nickname}님, 좋은 하루 되세요!
          </div>
        </div>
      </div>
    </div>
  );
}
