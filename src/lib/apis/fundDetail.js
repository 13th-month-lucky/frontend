import axios from "axios";

export const getFundInfo = async (code) => {
  try {
    const url = "/api/fund/" + code;

    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
