import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const userState = useSelector((state) => state.user13th);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.userId === "") {
      navigate("/");
    }
  }, []);

  return (
    <div
      className="font-['YOON-Gothic-normal'] tracking-wide"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "400px",
          maxWidth: "400px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
