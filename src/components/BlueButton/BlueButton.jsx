import React from "react";
import { Link } from "react-router-dom";

export default function BlueButton({ text, destination }) {
  return (
    <div className="w-9/12 mb-4">
      <Link to={destination}>
        <button className="bg-blue-500 text-white text-lg w-full py-3 rounded-[15px] font-semibold">
          {text}
        </button>
      </Link>
    </div>
  );
}
