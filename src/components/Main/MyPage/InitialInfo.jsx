import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Datepicker, TextInput } from "flowbite-react";
import "moment/locale/ko";

export default function InitialInfo() {
  const userState = useSelector((state) => state.user13th);

  const [editedUserInfo, setEditedUserInfo] = useState({
    birthday: "",
    email: "",
    salary: "",
    address: "",
  });

  const userId = userState.userId;
  const nickname = userState.nickname;
  const profileImageUrl = userState.profileImageUrl;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserInfo({
      ...editedUserInfo,
      [name]: value,
    });
  };

  const saveChanges = async () => {
    try {
      await axios.put("http://localhost:3000/api/user/info", {
        userId: userId,
        email: editedUserInfo.email,
        birthday: editedUserInfo.birthday,
        salary: editedUserInfo.salary,
        address: editedUserInfo.address,
        nickname: nickname,
      });
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      <div className="text-2xl font-bold mb-4">추가정보 입력</div>

      <div className="flex items-center justify-center">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="h-32 w-32 rounded-full"
        />
      </div>

      <div className="mt-10">
        <div className="font-bold">이름</div>
        <div>{nickname}</div>
      </div>

      <div className="mt-4">
        <div className="font-bold">생일</div>

        <Datepicker
          onSelectedDateChanged={(date) => {
            setEditedUserInfo((prev) => ({
              ...prev,
              birthday: date.toLocaleDateString(),
            }));
          }}
          language="kr"
          className=" px-2 py-1"
          weekStart={1}
          // defaultValue={"2024-03-25"}
          value={editedUserInfo.birthday}
        />
      </div>

      <div className="mt-4">
        <div className="font-bold">이메일</div>

        <TextInput
          type="email1"
          name="email"
          value={editedUserInfo.email}
          placeholder="name@naver.com"
          onChange={handleInputChange}
          className="px-2 py-1 w-52"
        />
      </div>

      <div className="mt-4">
        <div className="font-bold">총 급여</div>

        <TextInput
          type="text"
          name="salary"
          value={editedUserInfo.salary}
          onChange={handleInputChange}
          className=" px-2 py-1 w-52"
        />
      </div>

      <div className="mt-4">
        <div className="font-bold">주소</div>
        <TextInput
          type="text"
          name="address"
          value={editedUserInfo.address}
          onChange={handleInputChange}
          className=" px-2 py-1 w-52"
        />
      </div>

      <div>
        <button
          className="mt-8 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={saveChanges}
        >
          저장
        </button>
      </div>
    </div>
  );
}
