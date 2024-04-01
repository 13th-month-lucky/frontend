import React from "react";

import { FcExport } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Accounting() {
  const accounts = ["ISA", "IRP", "연금저축"];
  const links = [
    "https://www.shinhansec.com/event2/240129_isaEvent/event.jsp?utm_source=pfm_google&utm_medium=sa&utm_campaign=isa_pc&utm_content=pwlink_brand&utm_term=%EC%8B%A0%ED%95%9C%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8Cisa%EA%B3%84%EC%A2%8C%EA%B0%9C%EC%84%A4&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYcCjNsSOnNjnHNGmz_eCOkUH0Md9nG3tuiwB6X2kofsGZ8AhKu_kmhoC1yUQAvD_BwE",
    "https://digitalshinhansec.com/irp",
    "https://www.shinhansec.com/siw/pension/saving-holder/49100301/view.do",
  ];

  const width = "w-1/" + accounts.length;
  const divStyle = width + " text-center";

  return (
    <div className="m-5">
      <div className="flex items-center justify-start gap-2 mb-2 ml-1">
        <p className="h2">계좌 개설하기</p>
        <FcExport size="40" />
      </div>

      <div className="flex rounded-lg border mb-12 h-12 items-center shadow-lg">
        {accounts.map((ele, idx) => {
          let paraStyle = "font-semibold";
          if (idx < accounts.length - 1) {
            paraStyle += " border-r";
          }

          return (
            <div
              key={idx}
              className={divStyle}
              onClick={() => window.open(links[idx])}
              style={{ cursor: "pointer" }}
            >
              <p className={paraStyle}>{ele}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
