"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const postsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content:
      "Next.js is a powerful React framework for building fast, SEO-friendly web applications.",
    image: "/404.png",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    content:
      "Hooks like useState and useEffect make React functional components much more powerful.",
    image: "/404.png",
  },
  {
    id: 3,
    title: "Top 5 VS Code Extensions for Developers",
    content:
      "From Prettier to ESLint, here are some must-have extensions to boost your coding workflow.",
    image: "/404.png",
  },
  {
    id: 4,
    title: "Mastering JavaScript ES6 Features",
    content:
      "Learn about modern JavaScript features like arrow functions, destructuring, and template literals.",
    image: "/404.png",
  },
  {
    id: 5,
    title: "CSS Tricks You Should Know",
    content:
      "Improve your front-end design skills with these handy CSS layout and animation tricks.",
    image: "/404.png",
    categories: "Programming",
  },
];

function Dashboard() {
  const [posts, setPosts] = useState(postsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogPrevew, setBlogPrivew] = useState("");
  const blogfileRef = useRef();
  const [formData, setFromData] = useState({
    title: "",
    content: "",
    categories: "",
    image: "",
  });

  // Delete functions here
  const handleDelete = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== selectedPost.id));
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  // Edit Functions here
  const Edithandler = (post) => {
    setSelectedPost(post);
    setFromData({
      title: post.title,
      content: post.content,
      categories: post.categories,
      image: post.image,
    });
    setBlogPrivew(post.image);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };

  // image upload functions here
  const handleImgeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setBlogPrivew(preview);
      setFromData((prev) => ({ ...prev, image: preview }));

      // img upload logic here
    }
  };

  // submit handeler function here
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {}
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl text-gray-700 font-bold mb-4">My All Posts</h1>

      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50 text-sm text-gray-700">
            <tr>
              <th
                scope="col"
                className="py-3 px-4 text-left font-semibold tracking-wide">
                Image
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left font-semibold tracking-wide">
                Title
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left font-semibold tracking-wide">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-800">
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-t border-gray-200 hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4">
                  <Image
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    width={80}
                    height={60}
                    className="rounded-md object-cover border border-gray-300"
                  />
                </td>

                <td className="py-3 px-4 text-[#7050ff] font-medium">
                  {post.title}
                </td>

                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      title="Edit post"
                      onClick={() => Edithandler(post)}
                      aria-label={`Edit ${post.title}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5  text-white text-sm font-medium rounded-md">
                      <PencilIcon className="w-4 hover:text-[#7050ff] text-gray-700 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post)}
                      title="Delete post"
                      aria-label={`Delete ${post.title}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5   text-white text-sm font-medium rounded-md  focus:outline-none ">
                      <TrashIcon className="w-4 text-gray-600 hover:text-[#7050ff] h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* delete Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl text-[#7050ff] text-center font-semibold mb-4">
              Confirm Delete
            </h2>
            <p className="text-gray-500">
              Are you sure you want to delete "{selectedPost.title}"?
            </p>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit  Modal  */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-xl text-[#7050ff] text-center font-semibold mb-4">
              Edit Post
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-800 font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border-1 border-[#7050ff]  outline-0 rounded-lg focus:ring-2 focus:ring-[#7050ff]"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-800 font-medium">
                  Content
                </label>
                <textarea
                  name="content"
                  rows="4"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full p-2 border-1 border-[#7050ff]  outline-0 rounded-lg focus:ring-2 focus:ring-[#7050ff]"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-800 font-medium">
                  Blog Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  ref={blogfileRef}
                  onChange={handleImgeUpload}
                  className="w-full p-2 border-1 border-[#7050ff]  outline-0 rounded-lg"
                />
                {blogPrevew && (
                  <img
                    src={blogPrevew}
                    alt="Preview"
                    className="mt-3 rounded-md w-40 h-32 object-cover border-1 border-[#7050ff]  outline-0"
                  />
                )}
              </div>

              <div>
                <label className="block mb-1 text-gray-800 font-medium">
                  Category
                </label>
                <select
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  className="w-full p-2 border-1 border-[#7050ff]  outline-0 rounded-lg focus:ring-2 focus:ring-[#7050ff]"
                  required>
                  <option value="Technology">Technology</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                  <option value="Business">Business</option>
                  <option value="Programming">Programming</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#7050ff] text-white rounded hover:bg-[#5a3de0]">
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
