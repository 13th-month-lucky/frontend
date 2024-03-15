import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonComponent from "~/components/preview/personComponent";

export default function MainPage() {
  const userState = useSelector((state) => state.user);
  console.log("state: ", userState);

  return (
    <div>
      <p>MainPageddddd</p>
      <PersonComponent />
    </div>
  );
}
