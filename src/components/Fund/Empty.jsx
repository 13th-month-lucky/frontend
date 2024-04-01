import React, { useEffect, useState } from "react";

import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

export default function Empty(props) {
  const currentTab = props.currentTab;

  return (
    <div className="mt-20">
      {currentTab === 3 ? (
        <div>
          <div className="flex items-center justify-center gap-2">
            <img src={redLikeIcon} className="h-8 mb-1" />
            <p className="">을 눌러 관심 종목을 추가해보세요!</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center gap-2">
            <p>종목을 눌러 자세한 정보를 확인해보세요!</p>
          </div>
        </div>
      )}
    </div>
  );
}
