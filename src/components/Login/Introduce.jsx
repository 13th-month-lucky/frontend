import React from "react";

export default function Introduce(props) {
  const title1 = props.title1;
  const title2 = props.title2;
  const subTitle = props.subTitle;
  const img = props.img;

  const titleStyle = "font-bold text-2xl";
  const subTitleStyle = "mt-2 text-xl text-gray-500";
  return (
    <div>
      <div className="mt-24 text-center">
        <p className={titleStyle}>{title1}</p>
        <p className={titleStyle}>{title2}</p>
        <p className={subTitleStyle}>{subTitle}</p>
      </div>

      <div className="flex justify-center">
        <img src={img} className="mt-16 w-52" />
      </div>
    </div>
  );
}
