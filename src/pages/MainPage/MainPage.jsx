import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function MainPage() {
  const userState = useSelector((state) => state.user);
  console.log('state: ', userState);

  return (
    <div>
      <p>MainPage</p>
      <button className="m-4" onClick={() => clickTestBtn()}>
        test
      </button>

      <button className="m-4" onClick={() => clickRemoveBtn()}>
        remove
      </button>
    </div>
  );
}
