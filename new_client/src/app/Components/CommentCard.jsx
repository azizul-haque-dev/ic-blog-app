
export default function CommentCard({ comments,isAdmin }) {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4 ">
      <h2 className="text-2xl font-bold mb-5 dark:text-gray-600">
        Comments ({comments?.length})
      </h2>

      <div className="space-y-4 shadow-lg ">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="border border-gray-100 dark:border-gray-300 rounded-xl p-4 hover:shadow-md transition bg-white dark:bg-[#dedee6]"
          >
            {/* Comment Content */}
            <p className="text-gray-900 dark:text-gray-900 mb-2">
              {comment.content}
            </p>

            {/* Comment Footer */}
            <div className="flex justify-between items-center text-sm">
              <span
                className={`px-2 py-1 rounded-md font-medium text-gray-400`}
              >
              {new Date(comment.createdAt).toLocaleDateString()}
              </span>

   {isAdmin && (
  <div className="flex gap-4 mt-4">
    <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
      Suspend
    </button>
    <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
      Delete
    </button>
  </div>
)}

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
