import axios from "axios";

export const getCodeWithKakaoLogin = () => {
  try {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = kakaoLoginUrl;
  } catch (err) {
    console.log(err);
  }
};

export const getKakaoToken = async (code) => {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", import.meta.env.VITE_KAKAO_REST_API_KEY);
    params.append("redirect_uri", import.meta.env.VITE_KAKAO_REDIRECT_URI);
    params.append("code", code);

    const kakaoTokenUrl = `https://kauth.kakao.com/oauth/token`;

    const resp = await axios.post(kakaoTokenUrl, params, {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    });

    return resp.data;
  } catch (err) {
    console.log("err: ", err);
  }
};

export const getKakaoInfo = async (token) => {
  try {
    const kakaoInfoUrl = "https://kapi.kakao.com/v2/user/me";

    const resp = await axios.get(kakaoInfoUrl, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const findUserWithNickname = async (nickname) => {
  const findUserUrl = "/api/user/find";
  const body = {
    nickname: nickname,
  };

  const resp = await axios.post(findUserUrl, body);
  return resp.data;
};

export const createUser = async (nickname) => {
  const createUserUrl = "/api/user/create";
  const body = {
    nickname: nickname,
  };

  const resp = await axios.post(createUserUrl, body);
  return resp.data;
};

export const pushLikedEtf = async (userId, code) => {
  const pushLikedEtfUrl = "/api/user/like/etf";
  const body = {
    userId: userId,
    code: code,
  };

  const resp = await axios.put(pushLikedEtfUrl, body);
  return resp.data;
};

export const pushLikedFund = async (userId, code) => {
  const pushLikedFundUrl = "/api/user/like/fund";
  const body = {
    userId: userId,
    code: code,
  };

  const resp = await axios.put(pushLikedFundUrl, body);
  return resp.data;
};

export const pullLikedEtf = async (userId, code) => {
  const pullLikedEtfUrl = "/api/user/dislike/etf";
  const body = {
    userId: userId,
    code: code,
  };

  const resp = await axios.put(pullLikedEtfUrl, body);
  return resp.data;
};

export const pullLikedFund = async (userId, code) => {
  const pullLikedFundUrl = "/api/user/dislike/fund";
  const body = {
    userId: userId,
    code: code,
  };

  const resp = await axios.put(pullLikedFundUrl, body);
  return resp.data;
};
