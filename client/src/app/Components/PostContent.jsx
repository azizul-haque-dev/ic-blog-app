import Link from "next/link";

export default function PostContent({ post }) {
  const likeCount = post.likes.length;
  const dislikeCount = post.dislikes.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero Image */}
      <div className="relative w-full h-72 rounded-2xl shadow-lg overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="object-cover" />
        <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="bg-blue-600/90 text-white text-sm px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Title & Meta */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-6">{post.title}</h1>

      <div className="flex flex-wrap justify-between items-center mt-3 text-sm text-gray-500">
        <p>
          Published on{" "}
          <span className="font-medium">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
        <p>
          Updated:{" "}
          {new Date(post.updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 text-gray-700 leading-relaxed text-lg">
        {post.content}
      </div>

      {/* Like / Dislike Section */}

      <div className="mt-8 flex gap-4 items-center">
        <button className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-full transition">
          👍 {likeCount}
        </button>
        <button className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-full transition">
          👎 {dislikeCount}
        </button>
      </div>

      {/* Status */}
      <p
        className={`mt-5 inline-block px-4 py-1 text-sm rounded-full ${
          post.status === "approved"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        Status: {post.status}
      </p>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
