"use client";
import { useState, useRef } from "react";

const EditModal = ({ post, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    content: post.content,
    categories: post.categories || "Programming",
    image: post.image,
  });
  const [preview, setPreview] = useState(post.image);
  const fileRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      setFormData((prev) => ({ ...prev, image: previewURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...post, ...formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl text-[#7050ff] text-center font-semibold mb-4">
          Edit Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-800 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-[#7050ff] rounded-lg focus:ring-2 focus:ring-[#7050ff]"
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
              className="w-full p-2 border border-[#7050ff] rounded-lg focus:ring-2 focus:ring-[#7050ff]"
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
              ref={fileRef}
              onChange={handleImageUpload}
              className="w-full p-2 border border-[#7050ff] rounded-lg"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 rounded-md w-40 h-32 object-cover border border-[#7050ff]"
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
              className="w-full p-2 border border-[#7050ff] rounded-lg focus:ring-2 focus:ring-[#7050ff]"
              required
            >
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
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#7050ff] text-white rounded hover:bg-[#5a3de0]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
