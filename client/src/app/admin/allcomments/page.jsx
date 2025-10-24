"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const commentsData = [
  {
    _id: "c001",
    userImage: "/defaultProfile.png",
    username: "john_doe",
    commentText: "This blog was really helpful!",
    postTitle: "Getting Started with Next.js",
    date: "2025-10-20",
    status: "VISIBLE",
  },
  {
    _id: "c002",
    userImage: "/defaultProfile.png",
    username: "jane_smith",
    commentText: "Great explanation. Thanks!",
    postTitle: "React Hooks Deep Dive",
    date: "2025-10-21",
    status: "VISIBLE",
  },
  {
    _id: "c003",
    userImage: "/defaultProfile.png",
    username: "mikebrown",
    commentText: "I think there’s a typo in line 34.",
    postTitle: "Understanding useEffect",
    date: "2025-10-22",
    status: "HIDDEN",
  },
];

function AllCommentsPage() {
  const [comments, setComments] = useState(commentsData);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleHideShow = (id) => {
    console.log("Toggle Comment Visibility:", id);
    setOpenMenu(null);
  };

  const handleDelete = (id) => {
    console.log("Delete Comment:", id);
    setOpenMenu(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl text-white font-semibold">All Comments</h2>

      {/* Desktop Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm hidden md:block mt-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50 text-sm text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">User</th>
              <th className="py-3 px-4 text-left font-semibold">Comment</th>

              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-800">
            {comments.map((comment) => (
              <tr
                key={comment._id}
                className="border-t border-gray-200 hover:bg-gray-100 transition-colors relative">
                <td className="py-3 px-4 flex items-center gap-3">
                  <Image
                    src={comment.userImage}
                    alt={comment.username}
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-300"
                  />
                  <span className="font-medium text-[#7050ff]">
                    {comment.username}
                  </span>
                </td>

                <td className="py-3 px-4 text-gray-700 max-w-xs truncate">
                  {comment.commentText}
                </td>

                <td className="py-3 px-4 text-gray-600">{comment.date}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    comment.status === "VISIBLE"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}>
                  {comment.status}
                </td>

                <td className="py-3 px-4 relative">
                  <button
                    onClick={() => toggleMenu(comment._id)}
                    className="p-2 rounded-full hover:bg-gray-200">
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                  </button>

                  {openMenu === comment._id && (
                    <div className="absolute right-4 top-12 bg-white border border-gray-200 shadow-md rounded-md w-40 z-10">
                      <ul className="text-sm text-gray-700">
                        <li
                          onClick={() => handleHideShow(comment._id)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {comment.status === "VISIBLE"
                            ? "Hide Comment"
                            : "Show Comment"}
                        </li>
                        <li
                          onClick={() => handleDelete(comment._id)}
                          className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                          Delete Comment
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="space-y-4 md:hidden mt-4">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white rounded-lg shadow border border-gray-200 p-4 relative">
            <div className="flex justify-between items-start gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={comment.userImage}
                  alt={comment.username}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-[#7050ff]">
                    {comment.username}
                  </p>
                  <p className="text-sm text-gray-600">{comment.commentText}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {comment.postTitle} • {comment.date}
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleMenu(comment._id)}
                className="p-2 rounded-full hover:bg-gray-100">
                <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-between mt-3 text-sm">
              <span
                className={`font-semibold ${
                  comment.status === "VISIBLE"
                    ? "text-green-600"
                    : "text-red-500"
                }`}>
                {comment.status}
              </span>
            </div>

            {openMenu === comment._id && (
              <div className="absolute right-4 top-12 bg-white border border-gray-200 shadow-md rounded-md w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li
                    onClick={() => handleHideShow(comment._id)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {comment.status === "VISIBLE"
                      ? "Hide Comment"
                      : "Show Comment"}
                  </li>
                  <li
                    onClick={() => handleDelete(comment._id)}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                    Delete Comment
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCommentsPage;
