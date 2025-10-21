"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const postsData = [
  {
    id: 1,
    title: "My First Post",
    content: "This is my first blog post!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Another Post",
    content: "Some interesting content here.",
    image: "https://via.placeholder.com/150",
  },
];

function Dashboard() {
  const [posts, setPosts] = useState(postsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleDelete = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== selectedPost.id));
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  <PencilIcon className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(post)}
                  className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  <TrashIcon className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl text-center font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete "{selectedPost.title}"?</p>
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
    </div>
  );
}

export default Dashboard;
