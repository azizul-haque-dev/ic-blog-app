"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";
import Card from "@/app/Components/userComponents/card";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [totalLike, setTotalLike] = useState(120);
  const [totalUser, setTotalUser] = useState(45);
  const [totalDislike, setTotalDislike] = useState(18);
  const [totalPost, setTotalPost] = useState(25);
  const [totalComments, setTotalComments] = useState(60);
  const [loading, setloading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const EditeUsers = (e) => {};

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Header text */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl text-white font-semibold mb-8">
          Admin Dashboard
        </h2>

        {/* Profile and email name  */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Image
              src={imagePreview || "/defaultProfile.png"}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full border border-gray-200"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#7050ff]">
                John Doe
              </h3>
              <p className="text-lg text-gray-500">john@gmail.com</p>
            </div>
          </div>

          <div
            onClick={() => setEditProfile(true)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-full transition">
            <MoreVertical className="w-6 h-6 text-gray-600 hover:text-[#7050ff]" />
          </div>
        </div>

        {/*  Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Card
            title="Total Users"
            value={totalUser}
            icon={Users}
            color="bg-blue-500"
          />
          <Card
            title="Total Likes"
            value={totalLike}
            icon={ThumbsUp}
            color="bg-green-500"
          />
          <Card
            title="Total Dislikes"
            value={totalDislike}
            icon={ThumbsDown}
            color="bg-red-500"
          />
          <Card
            title="Total Posts"
            value={totalPost}
            icon={FileText}
            color="bg-[#7050ff]"
          />
          <Card
            title="Total Comments"
            value={totalComments}
            icon={MessageSquare}
            color="bg-yellow-500"
          />
        </div>
      </main>

      {/* Edit Profile Modal */}
      {editProfile && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center text-[#7050ff]">
              Edit Profile
            </h2>

            <form className="space-y-4">
              {/* Image Upload */}
              <div className="text-center mb-6">
                <div
                  onClick={() => fileInputRef.current.click()}
                  className="cursor-pointer group relative w-24 h-24 mx-auto rounded-full border border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">Upload</span>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white transition">
                    Change
                  </div>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              {/* Edite from */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-[#7050ff] outline-none rounded mt-1"
                  defaultValue={user.name || "John Doe"}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-[#7050ff] outline-none rounded mt-1"
                  defaultValue={user.email || "john@gmail.com"}
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  onClick={() => setEditProfile(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={EditeUsers}
                  className="px-4 py-2 bg-[#7050ff] text-white rounded hover:bg-[#5931d1]">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


import React from "react";
import AdminDashboard from "./AdminDashboard";
import AdminProtected from "../../Components/auth/AdminProtected";

export default function AdminDashboardPage() {
  return (
    <AdminProtected>
      <AdminDashboard />
    </AdminProtected>
  );
}
