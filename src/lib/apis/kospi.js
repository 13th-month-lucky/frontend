import axios from "axios";

export const getKospiPrices = async () => {
  try {
    const url = "/api/kospi";
    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
