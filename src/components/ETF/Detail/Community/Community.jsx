import React, { useEffect, useState } from "react";

import Input from "./Input";
import Writing from "./Writing";

import { getComment } from "~/lib/apis/comment";

export default function Community(props) {
  const code = props.code;
  const isFund = props.isFund;

  const [writings, setWritings] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    getComment(code).then((resp) => {
      setWritings(resp);
    });

    let nextUrl = "/";
    if (isFund) {
      nextUrl += "fund";
    } else {
      nextUrl += "etf";
    }

    nextUrl += "/detail/" + code + "/3";

    setNextUrl(nextUrl);
  }, []);

  return (
    <div className="pt-2 mb-20 m-2">
      <p className="text-md m-1">
        <span className="font-bold">{writings.length}</span>개의 댓글
      </p>
      <Input code={code} depth={0} isFund={true} nextUrl={nextUrl} />

      {writings.map((ele, idx) => (
        <Writing
          key={idx}
          writing={ele}
          code={code}
          depth={0}
          nextUrl={nextUrl}
        />
      ))}
    </div>
  );
}
