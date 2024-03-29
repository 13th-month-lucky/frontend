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
import loginImg from "~/assets/images/login/kakao_login_large_wide_2.png";
import logoImg from "~/assets/images/logo.png";

export default function LoginPage() {
  const userState = useSelector((state) => state.user13th);
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
      <div className="text-2xl font-bold text-center mt-28">
        <p>
          13월에도
          <br />
          월급을 받을 수 있다면?
        </p>
      </div>

      <div className="mt-16">
        <img src={logoImg} className="w-44"></img>
      </div>

      <img
        className="h-10 mt-36"
        src={loginImg}
        onClick={() => clickLoginBtn()}
      />
    </div>
  );
}
