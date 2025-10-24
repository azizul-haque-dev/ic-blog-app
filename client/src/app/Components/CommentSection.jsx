"use client";
import React, { useState } from "react";
import CommentSectionUI from "./CommentSectionUI";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  //  Add Comment
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const commentData = {
      _id: Date.now().toString(),
      postId: postId || "p101",
      userId: "u999",
      userName: "Current User",
      userProfile: "/defaultProfile.png",
      content: newComment,
      createdAt: new Date().toISOString(),
    };
    setComments([commentData, ...comments]);
    setNewComment("");
  };

  // Cancel
  const handleCancel = () => setNewComment("");

  //  Start Editing
  const handleEditStart = (id, text) => {
    setEditingId(id);
    setEditText(text);
    setOpenMenu(null);
  };

  // Save Edit
  const handleEditSave = (id) => {
    setComments(
      comments.map((c) =>
        c._id === id
          ? { ...c, content: editText, updatedAt: new Date().toISOString() }
          : c
      )
    );
    setEditingId(null);
    setEditText("");
  };

  // Delete
  const handleDelete = (id) => {
    setComments(comments.filter((c) => c._id !== id));
  };

  //  Toggle Menu
  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <CommentSectionUI
      comments={comments}
      newComment={newComment}
      setNewComment={setNewComment}
      handleAddComment={handleAddComment}
      handleCancel={handleCancel}
      editingId={editingId}
      editText={editText}
      setEditText={setEditText}
      handleEditStart={handleEditStart}
      handleEditSave={handleEditSave}
      handleDelete={handleDelete}
      openMenu={openMenu}
      toggleMenu={toggleMenu}
      setEditingId={setEditingId}
    />
  );
}
