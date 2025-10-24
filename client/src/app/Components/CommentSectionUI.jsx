import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function CommentSectionUI({
  comments,
  newComment,
  setNewComment,
  handleAddComment,
  handleCancel,
  editingId,
  editText,
  setEditText,
  handleEditStart,
  handleEditSave,
  handleDelete,
  openMenu,
  toggleMenu,
  setEditingId,
}) {
  return (
    <div className="bg-[#f1f1f1] mt-2 text-white p-6 rounded-xl  ">
      <h2 className="text-2xl  font-semibold mb-4 text-black">
        Comments ({comments.length})
      </h2>

      <div className="flex items-start gap-3 mb-5">
        <img
          src="/defaultProfile.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full bg-[#e0e0f3] text-gray-900 p-3 rounded-lg resize-none h-20 focus:outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>
          <div className="flex gap-3 mt-2">
            <button
              onClick={handleAddComment}
              className="bg-[#9812f8] hover:bg-[#7a0ec6] px-4 py-1 rounded-md text-sm font-medium"
            >
              Comment
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="relative flex items-start gap-3 bg-[#e0e0f3]  p-3 rounded-lg"
          >
            <img
              src={comment.userProfile}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />

            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                {comment.userName}
              </h4>

              {/* Edit Mode */}
              {editingId === comment._id ? (
                <>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full  text-gray-800 p-2 rounded-lg resize-none mt-1 focus:outline-none"
                  ></textarea>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEditSave(comment._id)}
                      className="bg-[#9812f8] hover:bg-[#8538bc] px-3 py-1 rounded-md text-sm font-medium cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-[#e0101a] hover:bg-[#b01018] px-3 py-1 rounded-md text-sm font-medium cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-gray-900 text-sm mt-1">{comment.content}</p>
              )}

              <p className="text-xs text-gray-500 mt-1">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>

            {/* 3-Dot Menu */}
            <div className="absolute right-3 top-3">
              <button onClick={() => toggleMenu(comment._id)}>
                <BsThreeDotsVertical className="text-gray-500 hover:text-white" />
              </button>

              {openMenu === comment._id && (
                <div className="absolute right-0 mt-2 w-28 bg-[#cacae3] rounded-lg shadow-lg">
                  <button
                    onClick={() =>
                      handleEditStart(comment._id, comment.content)
                    }
                    className="text-black w-full text-left px-4 py-2 text-sm hover:bg-[#a9a9ba]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#a9a9ba] text-red-400"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
