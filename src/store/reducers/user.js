import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  kakaoToken: "",
  nickname: "",
  profileImageUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
      console.log("setUserId");
    },
    setkakaoToken(state, action) {
      state.kakaoToken = action.payload;
      console.log("setkakaoToken");
    },
    setNickname(state, action) {
      state.nickname = action.payload;
      console.log("setNickname");
    },
    setProfileImageUrl(state, action) {
      state.profileImageUrl = action.payload;
      console.log("setProfileImageUrl");
    },
    removeUser(state, action) {
      console.log("Init");
      return initialState;
    },
  },
});

export const {
  setUserId,
  setkakaoToken,
  setNickname,
  setProfileImageUrl,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;
