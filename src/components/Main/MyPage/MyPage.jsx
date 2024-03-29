import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Datepicker, TextInput } from "flowbite-react";
import "moment/locale/ko";
import Address from "~/components/Preview/Address";
import { getAge, getEITC } from "~/lib/utils/calculator";
import { useNavigate } from "react-router";

export default function MyPage() {
  const userState = useSelector((state) => state.user13th);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState({
    birthday: "",
    email: "",
    salary: "",
    age: 0,
    home: {
      address: "",
      addressDetail: "",
      size: 4, // 규모 우선 4억으로 통일
      monthlyRent: null,
    },
  });

  const userId = userState.userId;
  const nickname = userState.nickname;
  const profileImageUrl = userState.profileImageUrl;
  const unit = 10000; // 단위
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "address" || name === "addressDetail") {
      setEditedUserInfo((prev) => ({
        ...prev,
        home: {
          ...prev.home,
          [name]: value,
        },
      }));
    } else {
      setEditedUserInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const saveChanges = async () => {
    try {
      const salary = editedUserInfo.salary * unit;
      const earnedIncome = salary - getEITC(salary); // 근로소득금액 = 총급여 - 근로소득공제액
      await axios.put("/api/user/info", {
        userId: userId,
        email: editedUserInfo.email,
        birthday: editedUserInfo.birthday,
        salary: salary,
        earnedIncome: earnedIncome,
        nickname: nickname,
        age: editedUserInfo.age,
        home: editedUserInfo.home,
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
        const res = await axios.post("/api/user/find", {
          nickname: nickname,
        });
        const data = res.data;
        setEditedUserInfo({
          birthday: data.birthday,
          email: data.email,
          salary: data.salary ? data.salary / unit : null,
          home: data.home,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const setAddressObj = (obj) => {
    // Assuming obj.areaAddress contains address and addressDetail
    setEditedUserInfo((prev) => ({
      ...prev,
      home: {
        ...prev.home,
        address: obj.areaAddress,
      },
    }));
  };

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

      <div className="w-3/4 flex flex-col gap-5 mt-10">
        <div className="flex justify-between">
          <div className="font-bold">이름</div>
          <div>{nickname}</div>
        </div>

        <div className="flex justify-between">
          <div className="font-bold">생일</div>

          {isEditing ? (
            <Datepicker
              onSelectedDateChanged={(date) => {
                setEditedUserInfo((prev) => ({
                  ...prev,
                  birthday: date.toLocaleDateString(),
                  age: getAge(date),
                }));
              }}
              language="kr"
              weekStart={1}
              // defaultValue={"2024-03-25"}
              value={editedUserInfo.birthday}
            />
          ) : (
            <div>
              {editedUserInfo.birthday === null
                ? "미입력"
                : editedUserInfo.birthday}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <div className="font-bold">이메일</div>

          {isEditing ? (
            <TextInput
              type="email"
              name="email"
              value={editedUserInfo.email}
              placeholder="name@naver.com"
              onChange={handleInputChange}
            />
          ) : (
            <div>
              {editedUserInfo.email === null ? "미입력" : editedUserInfo.email}
            </div>
          )}
        </div>

        <div className="flex justify-between item-center">
          <div className="font-bold">총 급여</div>
          {isEditing ? (
            <div className="flex items-center">
              <TextInput
                type="text"
                name="salary"
                value={editedUserInfo.salary}
                onChange={handleInputChange}
                placeholder="400(단위: 만원)"
              />
              <div className=""></div>
            </div>
          ) : (
            <div>
              {editedUserInfo.salary === null
                ? "미입력"
                : editedUserInfo.salary.toLocaleString("kr-Kr") + "만원"}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="font-bold whitespace-nowrap">주소</div>
          {isEditing ? (
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <TextInput
                  id="address"
                  type="text"
                  name="address"
                  placeholder="주소"
                  className="mt-2"
                  value={editedUserInfo.home.address}
                  onChange={handleInputChange}
                />
                <Address
                  className="items-end justify-end"
                  setAddressObj={setAddressObj}
                />
              </div>
              <div>
                <TextInput
                  name="addressDetail"
                  id="addressDetail"
                  type="text"
                  value={editedUserInfo.home.addressDetail}
                  placeholder="상세주소"
                  className="mt-2 mb-2"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          ) : (
            <div className="text-right">
              {editedUserInfo.home.address === null ? (
                "미입력"
              ) : (
                <>
                  {editedUserInfo.home.address} <br />{" "}
                  {editedUserInfo.home.addressDetail}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        {isEditing ? (
          <button
            className="mt-8 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[15px]"
            onClick={saveChanges}
          >
            저장
          </button>
        ) : (
          <button
            className="mt-8 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[15px]"
            onClick={toggleEditMode}
          >
            수정
          </button>
        )}
        <button
          className="mt-8 ml-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-[15px]"
          onClick={() => navigate("/preview/prev")}
        >
          내 연말정산
        </button>
      </div>
    </div>
  );
}
