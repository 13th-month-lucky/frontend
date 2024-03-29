import React from "react";

import FindOutPage from "~/pages/findout/findout";
import Tip from "~/components/Tip/Tip";

export default function FindOut() {
  return (
    <div className="">
      <FindOutPage />

      <div className="mt-10 mb-8">
        <Tip />
      </div>
    </div>
  );
}
