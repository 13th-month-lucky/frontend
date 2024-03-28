import React, { useCallback, useEffect, useState } from "react";
import { FcAdvertising } from "react-icons/fc";

import { getAllTips } from "~/lib/apis/tip";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Tip() {
  const [allTips, setAllTips] = useState([]);

  useEffect(() => {
    getAllTips().then((tipResp) => {
      setAllTips(shuffleArray(tipResp));
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-100 rounded-xl p-2">
      <div className="flex gap-1 justify-center">
        <p className="text-gray-600">알고 계셨나요?</p>
        <FcAdvertising className="h-5 w-5" />
      </div>

      <Swiper
        direction={"vertical"}
        mousewheel={true}
        modules={[Autoplay, Mousewheel]}
        className="mySwiper"
        style={{ height: "100px" }}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
      >
        {allTips.length > 0 ? (
          allTips.map((ele, idx) => (
            <SwiperSlide key={idx}>
              <p className="text-sm font-semibold text-center m-2">
                {ele.content}
              </p>
              {ele.sub ? (
                <p className="text-xs text-center">{ele.sub}</p>
              ) : (
                <></>
              )}
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </div>
  );
}
