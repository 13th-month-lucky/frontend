import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "~/store/reducers/user";
import { useNavigate } from "react-router";

export default function MyPage() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = userState.userId;
  const nickname = userState.nickname;
  const profileImageUrl = userState.profileImageUrl;

  const clickLogoutBtn = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => clickLogoutBtn()}>logout</button>
    </div>
  );
}
