import Link from "next/link";
import CommentCard from "./CommentCard";
import { comments } from "@/damyData/post-damyData";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export default function PostContent({ post, isAdmin = false }) {
  const likeCount = post.likes?.length || 0;
  const dislikeCount = post.dislikes?.length || 0;
  const postComments = comments.filter(
    (comment) => comment.post_id == post._id
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-10 bg-white text-gray-700 rounded-2xl shadow-lg">
      {/* Hero Image */}
      <div className="relative w-full h-72 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={post?.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
          {post.categories?.map((cat) => (
            <span
              key={cat}
              className="bg-purple-700/90 text-white text-sm px-3 py-1 rounded-full">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Title & Meta */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-800">
        {post.title}
      </h1>
      <div className="flex flex-wrap justify-between items-center mt-3 text-sm text-gray-500">
        <p>
          Published on:{" "}
          <span className="font-medium text-gray-400">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
        <p>
          Updated:{" "}
          <span className="text-gray-400">
            {new Date(post.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 text-gray-700 leading-relaxed text-lg">
        {post.content}
      </div>

      {/* Like / Dislike */}

      <div className="mt-2 flex gap-2 items-center">
        <button className="flex items-center gap-2  px-4 py-2 rounded-full transition">
          <ThumbsUp /> {likeCount}
        </button>
        <button className="flex items-center gap-2  px-4 py-2 rounded-full transition">
          <ThumbsDown /> {dislikeCount}
        </button>
      </div>

      {/* Add Comment UI */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add a Comment
        </h2>

        <div className="flex flex-col md:flex-col items-start gap-4">
          <textarea
            placeholder="Write your comment..."
            className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7050ff] transition duration-200 placeholder-gray-500"
            rows={4}
          />

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-[#7050ff] text-white font-semibold rounded-lg hover:bg-[#623ffb] transition duration-200 shadow-sm">
            Post Comment
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-8">
        <CommentCard comments={postComments} isAdmin={isAdmin} />
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
