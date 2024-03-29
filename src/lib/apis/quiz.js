import axios from "axios";

export const getQuiz = async () => {
  try {
    const url = "/api/quiz/info";

    const resp = await axios.get(url);
    // console.log(resp.data);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
