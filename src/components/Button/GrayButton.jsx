import React from "react";
import { Link } from "react-router-dom";

export default function GrayButton({ text, destination }) {
  return (
    <div className="w-3/5 mb-4">
      <Link target="_parent" to={destination}>
        <button className="bg-[#F4F6F9] text-[#323952] text-[14px] w-full py-3 rounded-[15px] font-semibold">
          {text}
        </button>
      </Link>
    </div>
  );
}
