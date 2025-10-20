import Link from "next/link";

export default function Card({ post }) {
  const { title, content, imageUrl, categories, status, createdAt } = post;

  const statusColor =
    status === "approved"
      ? "text-green-600"
      : status === "pending"
      ? "text-yellow-500"
      : "text-red-600";

  return (
    <div className=" bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-[#000]">{title}</h2>
        <p className="text-gray-600 mb-3 line-clamp-3">{content}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((cat, index) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <span className={`text-sm font-medium ${statusColor}`}>
            Status: {status}
          </span>
          <span className="inline-block border border-blue-300 text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium">
            {createdAt}
          </span>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-100 to-transparent rounded-b-2xl"></div> */}
      <div className="flex justify-end mx-4 my-4">
        <Link href={`/post/${post.id}`}>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
}
