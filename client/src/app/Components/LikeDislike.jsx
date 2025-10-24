"use client";
import { useState, useEffect } from "react";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";

function LikeDislike({ post }) {
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const [dislikeCount, setDislikeCount] = useState(post.dislikes.length);
  const [userReaction, setUserReaction] = useState(null);

  useEffect(() => {
    const storedReaction = localStorage.getItem(`reaction-${post.id}`);
    if (storedReaction) setUserReaction(storedReaction);
  }, [post.id]);

  const handleReaction = (reaction) => {
    if (userReaction === reaction) {
      if (reaction === "like") setLikeCount(likeCount - 1);
      if (reaction === "dislike") setDislikeCount(dislikeCount - 1);
      setUserReaction(null);
      localStorage.removeItem(`reaction-${post.id}`);
      return;
    }

    if (userReaction === "like") setLikeCount(likeCount - 1);
    if (userReaction === "dislike") setDislikeCount(dislikeCount - 1);

    if (reaction === "like") setLikeCount(likeCount + 1);
    if (reaction === "dislike") setDislikeCount(dislikeCount + 1);

    setUserReaction(reaction);

    localStorage.setItem(`reaction-${post.id}`, reaction);

    // Future: Replace below with API call to update global like/dislike
    // await axios.post(`/api/posts/${post.id}/react`, { userId: currentUserId, reaction });
  };
  return (
    <div className="mt-8 flex gap-4 items-center">
      <button
        onClick={() => handleReaction("like")}
        // disabled={userReaction === "like"}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition cursor-pointer ${
          userReaction === "like"
            ? "bg-green-700 text-white  opacity-70"
            : "bg-green-900/80 hover:bg-green-900 text-green-400 "
        }`}
      >
        {userReaction === "like" ? (
          <AiFillLike size={20} />
        ) : (
          <AiOutlineLike size={20} />
        )}

        {likeCount}
      </button>

      <button
        onClick={() => handleReaction("dislike")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition cursor-pointer ${
          userReaction === "dislike"
            ? "bg-red-800 text-white  opacity-70"
            : "bg-red-900/70 hover:bg-red-800 text-red-500 "
        }`}
      >
        {userReaction === "dislike" ? (
          <AiFillDislike size={20} />
        ) : (
          <AiOutlineDislike size={20} />
        )}{" "}
        {dislikeCount}
      </button>
    </div>
  );
}

export default LikeDislike;
