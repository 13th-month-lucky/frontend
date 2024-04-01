import React from "react";

import Services from "./Services";
import Hello from "./Hello";
import Tip from "~/components/Tip/Tip";
import Accounting from "./Accounting";

export default function TaxAdjustment(props) {
  const setCurrentTab = props.setCurrentTab;

  return (
    <div className="mb-16">
      <Hello setCurrentTab={setCurrentTab} />
      <Services />
      <Accounting />
      <Tip />
    </div>
  );
}
