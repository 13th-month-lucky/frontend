import React from "react";
import { useNavigate } from "react-router";

export default function Button(props) {
  const navigate = useNavigate();

  const firstOfTitle = props.firstOfTitle;
  const secondOfTitle = props.secondOfTitle;
  const link = props.link;

  const firstOfSubTitle = props.firstOfSubTitle;
  const secondOfSubTitle = props.secondOfSubTitle;

  const imageSrc = props.imageSrc;

  return (
    <div
      className="bg-white border rounded-xl p-4 relative drop-shadow-lg"
      style={{ width: "100%", height: "100%", cursor: "pointer" }}
      onClick={() => navigate(link)}
    >
      <p className="h3 mb-1" style={{ whiteSpace: "pre-line" }}>
        {firstOfTitle}
        <br></br>
        {secondOfTitle}
      </p>

      <p className="mediumGreyText">
        {firstOfSubTitle}
        <br></br>
        {secondOfSubTitle}
      </p>

      <div className="absolute right-3 bottom-3">
        {props.icon && <props.icon size="40" />}
      </div>
    </div>
  );
}
