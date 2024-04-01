import React from "react";

import logoImg from "~/assets/images/logo.png";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold text-center mt-32">
        <p>
          13월에도
          <br />
          월급을 받을 수 있다면?
        </p>
      </div>

      <div className="mt-24">
        <img src={logoImg} className="w-44"></img>
      </div>
    </div>
  );
}
