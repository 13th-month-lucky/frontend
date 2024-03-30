import React from "react";
import { useNavigate } from "react-router";

import BackImg from "~/assets/images/backBarIcons/backIcon.png";

export default function TopBackBar({ title = null }) {
  const navigate = useNavigate();

  return (
    <div className="mt-5 p-2 pb-2 bg-white flex items-center">
      <img
        src={BackImg}
        className="h-8 p-1 ml-2 mb-1"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      ></img>

      {title && <p className="h2 flex-grow text-center">{title}</p>}
    </div>
  );
}
