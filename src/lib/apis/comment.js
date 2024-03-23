import axios from "axios";

export const getComment = async (code) => {
  try {
    const getCommentUrl = "/api/comment/" + code;
    const resp = await axios.get(getCommentUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const publishComment = async (body) => {
  try {
    const publishCommentUrl = "/api/comment";
    const resp = await axios.post(publishCommentUrl, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (commentId) => {
  try {
    const deleteCommentUrl = "/api/comment/" + commentId;

    const resp = await axios.delete(deleteCommentUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const pushReplyIds = async (commentId, replyId) => {
  try {
    const pushReplyIdsUrl = "/api/comment/reply";
    const body = {
      commentId: commentId,
      replyId: replyId,
    };
    const resp = await axios.put(pushReplyIdsUrl, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const likeComment = async (commentId, userId) => {
  try {
    const likeCommentUrl = "/api/comment/like";
    const body = {
      commentId: commentId,
      userId: userId,
    };
    const resp = await axios.put(likeCommentUrl, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const dislikeComment = async (commentId, userId) => {
  try {
    const dislikeCommentUrl = "/api/comment/dislike";
    const body = {
      commentId: commentId,
      userId: userId,
    };
    const resp = await axios.put(dislikeCommentUrl, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
