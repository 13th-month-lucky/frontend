import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  kakaoToken: "",
  nickname: "",
  profileImageUrl: "",
  etfHistory: [],
  fundHistory: [],
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
      if (!state.etfHistory.includes(action.payload)) {
        state.etfHistory.unshift(action.payload);
      }
    },
    pushFundHistory(state, action) {
      state.fundHistory.push(action.payload);
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
} = userSlice.actions;

export default userSlice.reducer;
