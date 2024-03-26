import axios from "axios";

export const getAllFund = async () => {
  try {
    const url = "/api/fund/";

    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const getFundWithList = async (likedFund) => {
  try {
    const url = "/api/fund/info";
    const body = {
      fundCodeList: likedFund,
    };

    const resp = await axios.post(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
