import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { Datepicker, TextInput } from "flowbite-react";
import moment from "moment";
import "moment/locale/ko";

export default function MyPage() {
  const userState = useSelector((state) => state.user13th);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState({
    birthday: "",
    email: "",
    salary: "",
    address: "",
  });

  const userId = userState.userId;
  const nickname = userState.nickname;
  const profileImageUrl = userState.profileImageUrl;

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

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
      setIsEditing(false); // Turn off edit mode
    } catch (error) {
      console.error("Error saving changes:", error);
      // Handle error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:3000/api/user/find", {
          nickname: nickname,
        });
        const data = res.data;
        setEditedUserInfo({
          birthday: data.birthday,
          email: data.email,
          salary: data.salary,
          address: data.address,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10 text-center mb-20">
      <div className="text-2xl font-bold mb-4">{nickname}님의 정보</div>

      <div className="flex items-center justify-center">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="h-32 w-32 rounded-full"
        />
      </div>

      <div className="mt-6">
        <div className="font-bold">이름</div>
        <div>{nickname}</div>
      </div>

      <div className="mt-4">
        <div className="font-bold">생일</div>

        {isEditing ? (
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
        ) : (
          <div>{editedUserInfo.birthday}</div>
        )}
      </div>

      <div className="mt-4">
        <div className="font-bold">이메일</div>

        {isEditing ? (
          <TextInput
            type="email1"
            name="email"
            value={editedUserInfo.email}
            placeholder="name@naver.com"
            onChange={handleInputChange}
            className="px-2 py-1"
          />
        ) : (
          <div>{editedUserInfo.email}</div>
        )}
      </div>

      <div className="mt-4">
        <div className="font-bold">총 급여</div>
        {isEditing ? (
          <TextInput
            type="text"
            name="salary"
            value={editedUserInfo.salary}
            onChange={handleInputChange}
            className=" px-2 py-1"
          />
        ) : (
          <div>{editedUserInfo.salary}</div>
        )}
      </div>

      <div className="mt-4">
        <div className="font-bold">주소</div>
        {isEditing ? (
          <TextInput
            type="text"
            name="address"
            value={editedUserInfo.address}
            onChange={handleInputChange}
            className=" px-2 py-1"
          />
        ) : (
          <div>{editedUserInfo.address}</div>
        )}
      </div>

      <div>
        {isEditing ? (
          <button
            className="mt-8 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={saveChanges}
          >
            저장
          </button>
        ) : (
          <button
            className="mt-8 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={toggleEditMode}
          >
            수정
          </button>
        )}
        <button className="mt-8 ml-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
          내 연말정산
        </button>
      </div>
    </div>
  );
}
