import React, { useEffect, useState } from "react";

import SmallFundCard from "./SmallFundCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Mousewheel } from "swiper/modules";

export default function HotFund(props) {
  const rising = props.rising;
  const include = props.include;

  return (
    <div className="bg-sky-100 pt-4 pb-4 rounded-xl">
      <div>
        <Swiper
          direction={"vertical"}
          modules={[Autoplay, Mousewheel]}
          className="mySwiper"
          style={{ height: "200px" }}
          loop={true}
          spaceBetween={30}
          mousewheel={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          {include.map((stocks, idx) => {
            return (
              <SwiperSlide key={idx}>
                <p className="text-lg ml-4 mb-2">
                  <span className="font-bold">{rising[idx]}</span> 포함 펀드
                </p>

                <div className="flex overflow-x-auto h-40">
                  {stocks.map((ele, idx) => (
                    <SmallFundCard key={ele.code} fund={ele} />
                  ))}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
