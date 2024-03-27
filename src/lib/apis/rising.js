import axios from "axios";

export const getRising = async () => {
  try {
    const url = "/api/rising";

    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
