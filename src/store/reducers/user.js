import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  kakaoToken: '',
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
      console.log('setUserId');
    },
    setkakaoToken(state, action) {
      state.kakaoToken = action.payload;
      console.log('setkakaoToken');
    },
    removeUser(state, action) {
      console.log('Init');
      return initialState;
    },
  },
});

export const { setUserId, setkakaoToken, removeUser } = userSlice.actions;

export default userSlice.reducer;
