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
    "Programming",
  ];

  const totalPages = 5;
  const currentPage = 1;

  return (
    <div className="min-h-screen text-white p-4">
      {/* Category & Search UI */}
      <div className="mx-auto max-w-7xl mt-10 flex gap-5 flex-col  md:flex-row lg:flex-row justify-between ">
        {/* Left: Search Input + Button */}
        <div className="w-full flex gap-3 ">
          <input
            type="text"
            placeholder="Search posts..."
            className="border border-[#f7f6ff] rounded p-2 outline-0 "
          />
          <button
            type="submit"
            className="bg-white rounded px-5  font-semibold text-[#7050ff]">
            Search
          </button>
        </div>

        {/* Right: Category Dropdown */}
        <div className="w-full md:w-1/4">
          <select className="w-full px-4 py-2 font-semibold text-center bg-[#7567b4] text-white  rounded-lg shadow-sm  transition duration-200">
            <option className="" value="">
              All Categories
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Posts */}
      <BlogPost posts={posts} />

      {/* Pagination UI */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
