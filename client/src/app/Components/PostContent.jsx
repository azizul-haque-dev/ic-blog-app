import Link from "next/link";
import LikeDislike from "./LikeDislike";
import CommentSection from "./CommentSection";

export default function PostContent({ post }) {
  return (
    <div className="max-w-4xl mx-auto mt-2 px-4 py-10 bg-white text-gray-200 rounded-2xl shadow-2xs  ">
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

      <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-600">
        {post.title}
      </h1>
      <div className="flex flex-wrap justify-between items-center mt-3 text-sm text-gray-600">
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

      <div className="mt-8 text-gray-600 leading-relaxed text-lg">
        {post.content}
      </div>

      {/* component add kora hoichhe */}
      <LikeDislike post={post} />
      <CommentSection postId="p101" />

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
