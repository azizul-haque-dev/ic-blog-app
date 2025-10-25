import Pagination from "@/app/Components/blog/Pagination";
import BlogPost from "@/app/Components/BlogPost";
import { posts } from "@/damyData/post-damyData";

export default function BlogPage() {
  const categories = [
    "Technology",
    "Lifestyle",
    "Health",
    "Education",
    "Business",
    "Programming"
  ];

  const totalPages = 5;
  const currentPage = 1;

  return (
    <div className="min-h-screen text-white p-4">
      {/* Category & Search UI */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 items-center">
        <div>

        
        <input
          type="text"
          placeholder="Search posts..."
          className="px-3 py-2 text-black rounded w-full md:w-1/3"
        />
        <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Search
        </button>
        </div>
        <select className="px-3 py-2 text-black rounded w-full md:w-1/4">
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts */}
      <BlogPost posts={posts} />

      {/* Pagination UI */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
