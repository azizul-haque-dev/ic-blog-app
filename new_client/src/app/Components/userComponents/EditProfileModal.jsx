"use client";
import React, { useRef, useState } from "react";
import { MoreVertical, SquarePen } from "lucide-react";

export default function EditProfileModal({ user }) {
  const [editProfile, setEditProfile] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/upload/avater`,
        {
          method: "PATCH",
          credentials: "include",
          body: formData,
        }
      );
      const data = await res.json();
      console.log({ data });
    }
  };

  return (
    <>
      {/* More Button */}
      <div
        onClick={() => setEditProfile(true)}
        className="cursor-pointer hover:bg-gray-100 p-2 rounded-full transition">
        <SquarePen className="w-6 h-6 text-gray-600 hover:text-[#7050ff]" />
      </div>

      {/* Edit Modal */}
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

              {/* Form Inputs */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 focus:ring-2 focus:ring-[#7050ff] outline-none rounded mt-1"
                  defaultValue={user.name || "John"}
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
                  className="px-4 py-2 bg-[#7050ff] text-white rounded hover:bg-[#5931d1]">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
