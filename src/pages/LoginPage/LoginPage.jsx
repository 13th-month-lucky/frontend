import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserId,
  setkakaoToken,
  setNickname,
  setProfileImageUrl,
  removeUser,
} from "../../store/reducers/user";
import {
  getCodeWithKakaoLogin,
  getKakaoToken,
  getKakaoInfo,
  findUserWithNickname,
  createUser,
} from "../../lib/apis/user";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.nickname !== "") {
      navigate("/main");
    }

    const code = new URL(window.location.href).searchParams.get("code");

    if (code !== null) {
      getKakaoToken(code)
        .then((token) => {
          dispatch(setkakaoToken(token));

          return getKakaoInfo(token);
        })
        .then(async (info) => {
          const kakaoProfile = info.kakao_account.profile;
          const foundUser = await findUserWithNickname(kakaoProfile.nickname);
          let userId = foundUser._id;

          if (foundUser._id === undefined) {
            const createdUser = await createUser(kakaoProfile.nickname);
            userId = createdUser._id;
          }

          dispatch(setNickname(kakaoProfile.nickname));
          dispatch(setProfileImageUrl(kakaoProfile.profile_image_url));
          dispatch(setUserId(userId));
          navigate("/main");
        })
        .catch((err) => {
          console.log("err: ", err);
          dispatch(removeUser());
        });
    }
  }, []);

  const clickLoginBtn = async () => {
    getCodeWithKakaoLogin();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 mb-10" style={{ width: "40%" }}>
        <img src="src/assets/images/logo.png"></img>
      </div>

      <div className="text-center">
        <p className="font-mono">
          13월에도<br></br>월급을 받을 수 있다면?
        </p>
      </div>

      <img
        className="h-8 mt-40"
        src="src/components/Login/kakao_login_large_wide_2.png"
        onClick={() => clickLoginBtn()}
      ></img>
    </div>
  );
}
