import React from "react";
import { Link } from "react-router-dom";

export default function WhiteButton({ text, destination }) {
  return (
    <div className="w-1/3 mb-4">
      <Link to={destination}>
        <button className="bg-white text-gray-500 whitespace-pre w-full py-3 rounded-[15px] font-semibold shadow">
          {text}
        </button>
      </Link>
    </div>
  );
}
