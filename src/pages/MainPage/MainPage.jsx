import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "~/components/preview/cardComponent";
import SmallBusiness from "~/components/preview/smallBusinessComponent";

export default function MainPage() {
  const userState = useSelector((state) => state.user);
  console.log("state: ", userState);

  return (
    <div>
      <p>MainPage</p>
      <SmallBusiness />
    </div>
  );
}
