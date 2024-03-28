import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  kakaoToken: "",
  nickname: "",
  profileImageUrl: "",
  etfHistory: [],
  fundHistory: [],
  age: 0, // 나이
  totalIncome: 0, // 총급여
  home: {
    address: "", // 주소
    size: 0, // 집 크기
  },
  earnedIncome: 0, // 근로소득금액
};

const userSlice = createSlice({
  name: "user13th",
  initialState: initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setkakaoToken(state, action) {
      state.kakaoToken = action.payload;
    },
    setNickname(state, action) {
      state.nickname = action.payload;
    },
    setProfileImageUrl(state, action) {
      state.profileImageUrl = action.payload;
    },
    removeUser(state, action) {
      console.log("Init");
      return initialState;
    },
    pushEtfHistory(state, action) {
      state.etfHistory.push(action.payload);
    },
    pushFundHistory(state, action) {
      state.fundHistory.push(action.payload);
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setTotalIncome(state, action) {
      state.totalIncome = action.payload;
    },
    setHome(state, action) {
      state.home = action.payload;
    },
    setEarnedIncome(state, action) {
      state.earnedIncome = action.payload;
    },
  },
});

export const {
  setUserId,
  setkakaoToken,
  setNickname,
  setProfileImageUrl,
  removeUser,
  pushEtfHistory,
  pushFundHistory,
  setAge,
  setTotalIncome,
  setHome,
  setEarnedIncome,
} = userSlice.actions;

export default userSlice.reducer;
