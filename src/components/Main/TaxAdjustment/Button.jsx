import React from "react";

export default function Button(props) {
  const firstOfTitle = props.firstOfTitle;
  const secondOfTitle = props.secondOfTitle;

  const firstOfSubTitle = props.firstOfSubTitle;
  const secondOfSubTitle = props.secondOfSubTitle;

  const imageSrc = props.imageSrc;

  return (
    <div
      className="bg-white border rounded-xl p-4 relative"
      style={{ width: "100%", height: "100%" }}
    >
      <p className="text-xl font-bold mb-1">
        {firstOfTitle}
        <br></br>
        {secondOfTitle}
      </p>

      <p className="text-medium text-slate-500">
        {firstOfSubTitle}
        <br></br>
        {secondOfSubTitle}
      </p>

      <div className="absolute right-3 bottom-3">
        <img className="h-8" src={imageSrc}></img>
      </div>
    </div>
  );
}
