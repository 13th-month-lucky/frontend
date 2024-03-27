import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getMyData } from "~/lib/apis/myData";
import { findUserWithNickname } from "~/lib/apis/user";

export default function Button(props) {
  const navigate = useNavigate();

  const firstOfTitle = props.firstOfTitle;
  const secondOfTitle = props.secondOfTitle;
  const link = props.link;

  const firstOfSubTitle = props.firstOfSubTitle;
  const secondOfSubTitle = props.secondOfSubTitle;

  const imageSrc = props.imageSrc;

  const userState = useSelector((state) => state.user13th);
  const [user, setUser] = useState({});
  const [mydata, setMydata] = useState({});

  const nickname = userState.nickname;

  useEffect(() => {
    findUserWithNickname(nickname).then((resp) => {
      // console.log(resp);
      setUser(resp);
    });
    getMyData(userState.userId).then((resp) => {
      // console.log(resp);
      setMydata(resp);
    });
  }, [nickname, userState.userId]);

  return (
    <div
      className="bg-white border rounded-xl p-4 relative drop-shadow-lg"
      style={{ width: "100%", height: "100%", cursor: "pointer" }}
      onClick={() => {
        if (link == "/preview/main") {
          if (user) {
            if (user.address && user.birthday && user.salary) {
              navigate(link);
            } else {
              const a = confirm(
                "연말정산 미리보기를 위해 추가 정보 입력이 필요해요! \n 마이페이지로 이동하실래요?"
              );
              console.log(a);
              if (a) {
                navigate("/main/3");
              }
            }
          } else {
            if (!alert("로그인이 필요합니다.")) {
              navigate("/");
            }
          }
        } else {
          navigate(link);
        }
      }}
    >
      <p className="h3 mb-1" style={{ whiteSpace: "pre-line" }}>
        {firstOfTitle}
        <br></br>
        {secondOfTitle}
      </p>

      <p className="mediumGreyText">
        {firstOfSubTitle}
        <br></br>
        {secondOfSubTitle}
      </p>

      <div className="absolute right-3 bottom-3">
        {props.icon && <props.icon size="40" />}
      </div>
    </div>
  );
}
