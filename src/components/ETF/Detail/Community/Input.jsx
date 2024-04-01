import React, { useState } from "react";
import { useSelector } from "react-redux";

import WriterInfo from "./WriterInfo";

import { publishComment, pushReplyIds } from "~/lib/apis/comment";
import { useLocation, useNavigate } from "react-router";

export default function Input(props) {
  const code = props.code;
  const depth = props.depth;
  const commentId = props.commentId;
  const nextUrl = props.nextUrl;

  const userState = useSelector((state) => state.user13th);

  const [content, setContent] = useState("");

  const clickPublishBtn = async () => {
    const newWriting = {
      code: code,
      depth: depth,
      nickname: userState.nickname,
      profileImageUrl: userState.profileImageUrl,
      content: content,
    };

    const resp = await publishComment(newWriting);

    if (depth === 1) {
      pushReplyIds(commentId, resp._id);
    }

    window.location.href = nextUrl;
  };

  return (
    <div className="p-2 rounded-md border ">
      <WriterInfo
        nickname={userState.nickname}
        profileImageUrl={userState.profileImageUrl}
      />

      <textarea
        className="w-full h-16 p-1 mb-2 text-top rounded-md border-gray-200"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      />

      <div className="flex justify-end border-t">
        <button
          id="publishBtn"
          className="bg-blue-500 text-white text-sm w-20 h-8 rounded-md font-semibold mt-2"
          onClick={() => {
            clickPublishBtn();
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}
