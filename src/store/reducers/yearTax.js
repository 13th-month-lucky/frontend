import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultId: "",
  data: {
    age: 0, // 나이
    salary: 0, // 총급여
    home: {
      address: "", // 주소
      size: 0, // 집 크기
    },
  },
  earnedIncome: 0, // 근로소득금액,
};

const yearTaxSlice = createSlice({
  name: "yearTax",
  initialState: initialState,
  reducers: {
    setResultId(state, action) {
      state.resultId = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setEarnedIncome(state, action) {
      state.earnedIncome = action.payload;
    },
  },
});

export const { setUserId, setResultId, setData, setEarnedIncome } =
  yearTaxSlice.actions;

export default yearTaxSlice.reducer;
