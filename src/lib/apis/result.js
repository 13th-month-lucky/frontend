import axios from "axios";

//user의 연말정산 결과 모두 조회
export const getAllResult = async (userId) => {
  try {
    const url = "/api/result";

    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

//user의 연말정산 결과 추가
export const addResult = async (userId, data) => {
  try {
    const url = "/api/result/" + userId;
    const body = { data };

    const resp = await axios.post(url, body);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

// 연말정산 결과 수정하기
export const updateResult = async (resultId, newData) => {
  console.log("hhhh");
  try {
    const url = "/api/result/" + resultId;
    const body = {
      data: newData,
    };
    const resp = await axios.put(url, body);
    console.log(resp);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
