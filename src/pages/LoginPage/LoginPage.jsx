import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserId,
  setkakaoToken,
  removeUser,
} from '../../store/reducers/user';
import {
  getCodeWithKakaoLogin,
  getKakaoToken,
  getKakaoInfo,
  findUserWithNickname,
  createUser,
} from '../../lib/apis/user';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code !== null) {
      getKakaoToken(code)
        .then((token) => {
          dispatch(setkakaoToken(token));

          return getKakaoInfo(token);
        })
        .then(async (info) => {
          const kakaoProfile = info.kakao_account.profile;
          const foundUser = await findUserWithNickname(kakaoProfile.nickname);
          let userId = foundUser._id;

          if (foundUser._id === undefined) {
            const createdUser = await createUser(
              kakaoProfile.nickname,
              kakaoProfile.profile_image_url
            );
            userId = createdUser._id;
          }

          dispatch(setUserId(userId));
          navigate('/main');
        })
        .catch((err) => {
          console.log('err: ', err);
          dispatch(removeUser());
        });
    }
  }, []);

  const clickLoginBtn = async () => {
    getCodeWithKakaoLogin();
  };

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => clickLoginBtn()}>kakao login</button>
    </div>
  );
}
