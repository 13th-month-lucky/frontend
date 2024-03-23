import axios from "axios";

export const getEtfInfo = async (code) => {
  try {
    const getEtfInfoUrl = "/api/etf/" + code + "/info";

    const resp = await axios.get(getEtfInfoUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const getEtfPriceData = async (code) => {
  try {
    const getEtfPriceDataUrl = "/api/etf/" + code + "/chart";

    const resp = await axios.get(getEtfPriceDataUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
