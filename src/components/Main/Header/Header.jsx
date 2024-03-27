import React from "react";
import logoImg from "~/assets/images/logo.png";
export default function Header(props) {
  const setCurrentTab = props.setCurrentTab;

  return (
    <div
      className="flex items-center justify-start h-30 w-full m-2"
      style={{ cursor: "pointer" }}
      onClick={() => setCurrentTab(2)}
    >
      <img src={logoImg} className="w-12 h-12 mr-2"></img>
      <p className="h2">13월</p>
    </div>
  );
}
