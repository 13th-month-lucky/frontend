import axios from "axios";

export const getAllTips = async () => {
  try {
    const url = "/api/tip/";
    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
