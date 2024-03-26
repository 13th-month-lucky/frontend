import React from "react";
import { useNavigate } from "react-router";

import BackImg from "~/assets/images/backBarIcons/backIcon.png";

export default function TopBackBar() {
  const navigate = useNavigate();

  return (
    <div className="pt-2 pb-2 bg-white" style={{ width: "400px" }}>
      <img
        src={BackImg}
        className="h-8"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      ></img>
    </div>
  );
}
