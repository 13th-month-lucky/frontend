import React from "react";

export default function Header(props) {
  const setCurrentTab = props.setCurrentTab;

  return (
    <div
      className="flex items-center justify-start h-30 w-full m-2"
      style={{ cursor: "pointer" }}
      onClick={() => setCurrentTab(2)}
    >
      <img src="src/assets/images/logo.png" className="w-12 h-12 mr-2"></img>
      <p className="font-semibold text-2xl">13월</p>
    </div>
  );
}
