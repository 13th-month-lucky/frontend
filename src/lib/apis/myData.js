import axios from "axios";

export const createAndGetNewMydata = async (userId) => {
  try {
    const createAndGetNewMydataUrl = "/api/mydata/create";
    const body = {
      userId: userId,
    };

    const resp = await axios.post(createAndGetNewMydataUrl, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMyData = async (userId) => {
  try {
    const getMyDataUrl = "/api/mydata";
    const body = {
      userId: userId,
    };

    const resp = await axios.post(getMyDataUrl, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
