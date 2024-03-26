import React from "react";

import { useDispatch } from "react-redux";
import { removeUser } from "~/store/reducers/user";

export default function EntireMenu() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeUser());
        window.location.href = "/";
      }}
    >
      EntireMenu
    </div>
  );
}
