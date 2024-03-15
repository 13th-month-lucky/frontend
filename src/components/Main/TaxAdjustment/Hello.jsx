import React from "react";
import { useSelector } from "react-redux";

export default function Hello() {
  const userState = useSelector((state) => state.user);

  return (
    <div className="flex mt-2">
      <div className="mr-6 ml-auto flex items-center justify-start gap-2">
        <img className="h-6 rounded-full" src={userState.profileImageUrl}></img>
        <p className="text-sm"> {userState.nickname}님, 좋은 하루 되세요!</p>
      </div>
    </div>
  );
}
