import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
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
          width: "450px",
          maxWidth: "450px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}