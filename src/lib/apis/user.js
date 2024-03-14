import axios from 'axios';

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
    params.append('grant_type', 'authorization_code');
    params.append('client_id', import.meta.env.VITE_KAKAO_REST_API_KEY);
    params.append('redirect_uri', import.meta.env.VITE_KAKAO_REDIRECT_URI);
    params.append('code', code);

    const kakaoTokenUrl = `https://kauth.kakao.com/oauth/token`;

    const resp = await axios.post(kakaoTokenUrl, params, {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    });

    return resp.data;
  } catch (err) {
    console.log('err: ', err);
  }
};

export const getKakaoInfo = async (token) => {
  try {
    const kakaoInfoUrl = 'https://kapi.kakao.com/v2/user/me';

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
  const findUserUrl = '/api/user/find';
  const body = {
    nickname: nickname,
  };

  const resp = await axios.post(findUserUrl, body);
  return resp.data;
};

export const createUser = async (nickname, profile_image_url) => {
  const createUserUrl = '/api/user/create';
  const body = {
    nickname: nickname,
    profile_image_url: profile_image_url,
  };

  const resp = await axios.post(createUserUrl, body);
  return resp.data;
};
