"use client";
import PostCard from "../Components/PostCard";
import { posts } from "../damyData/post-damyData";
import SearchPost from "./SearchPost";

export default function BlogPost() {
  const {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    allCategories,
    filteredPosts,
  } = SearchPost(posts);

  return (
    <section className="min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#6d56d6]">
        Blog Posts
      </h1>

      <div className="flex flex-row  justify-between items-center gap-4 mb-8 max-w-5xl mx-auto">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-5 py-2 rounded-md text-sm font-medium border transition-all duration-200 ${
            selectedCategory === "All"
              ? "bg-[#7936E9] text-white border-blue-600"
              : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"
          }`}
        >
          All
        </button>

        {/* Middle: Category Select */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border text-black rounded-md px-3 py-2 text-sm w-full sm:w-48 focus:outline-gray-300 focus:ring-2 focus:ring-gray-400"
          >
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 text-gray-500 rounded-md pl-10 pr-4 py-2 w-full text-sm focus:outline-gray-300 focus:ring-2 focus:ring-[#7936E9]"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No posts found.
          </p>
        )}
      </div>
    </section>
  );
}
