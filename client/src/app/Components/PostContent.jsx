import Link from "next/link";
import CommentCard from "./CommentCard";

export default function PostContent({ post }) {
  const likeCount = post.likes.length;
  const dislikeCount = post.dislikes.length;
  //
  // bg-[#ddddf0] text-gray-200 rounded-2xl shadow-lg bg-[#aaaada]
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-black text-gray-200 rounded-2xl shadow-2xs  ">
      {/* Hero Image */}
      <div className="relative w-full h-72 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="bg-purple-700/90 text-white text-sm px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      {/* Title & Meta */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-white">
        {post.title}
      </h1>
      <div className="flex flex-wrap justify-between items-center mt-3 text-sm text-gray-400">
        <p>
          Published on{" "}
          <span className="font-medium text-gray-300">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
        <p>
          Updated:{" "}
          <span className="text-gray-300">
            {new Date(post.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </p>
      </div>
      {/* Content */}
      <div className="mt-8 text-gray-300 leading-relaxed text-lg">
        {post.content}
      </div>
      Like / Dislike Section
      <div className="mt-8 flex gap-4 items-center">
        <button className="flex items-center gap-2 bg-green-900/40 hover:bg-green-800 text-green-400 px-4 py-2 rounded-full transition">
          👍 {likeCount}
        </button>
        <button className="flex items-center gap-2 bg-red-900/40 hover:bg-red-800 text-red-400 px-4 py-2 rounded-full transition">
          👎 {dislikeCount}
        </button>
      </div>
      {/* Status */}
      {/* <p
        className={`mt-5 inline-block px-4 py-1 text-sm rounded-full ${
          post.status === "approved"
            ? "bg-green-900/40 text-green-400"
            : "bg-yellow-900/40 text-yellow-400"
        }`}
      >
        Status: {post.status}
      </p> */}
      <CommentCard />
      {/* Back Button */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
