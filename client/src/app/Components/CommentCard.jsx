"use client";

import { comments } from "../damyData/post-damyData";

export default function CommentCard() {
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-500 bg-green-100 dark:bg-green-900/30";
      case "pending":
        return "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30";
      case "suspended":
        return "text-red-500 bg-red-100 dark:bg-red-900/30";
      default:
        return "text-gray-500 bg-gray-100 dark:bg-gray-800";
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-100">
        Comments ({comments.length})
      </h2>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition bg-white dark:bg-[#12121a]"
          >
            {/* Comment Content */}
            <p className="text-gray-800 dark:text-gray-300 mb-2">
              {comment.content}
            </p>

            {/* Comment Footer */}
            <div className="flex justify-between items-center text-sm">
              <span
                className={`px-2 py-1 rounded-md font-medium ${getStatusColor(
                  comment.status
                )}`}
              >
                {comment.status}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
