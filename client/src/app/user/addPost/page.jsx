"use client";

import { useState, useRef } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
    categories: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const [blogPreview, setBlogPreview] = useState(null);
  const blogFileRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setBlogPreview(URL.createObjectURL(file));

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      // const res = await fetch("YOUR_UPLOAD_ENDPOINT", {
      //   method: "POST",
      //   body: formDataUpload,
      // });
      // const data = await res.json();

      if (res.ok) {
        setFormData((prev) => ({ ...prev, imageUrl: data.url }));
      } else {
        setMessage("Image upload failed!");
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Something went wrong while uploading image!");
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);

    try {
      // const res = await fetch("YOUR_SUBMIT_ENDPOINT", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      if (res.ok) {
        setMessage("✅ Blog added successfully!");
        setFormData({
          title: "",
          content: "",
          imageUrl: "",
          categories: "",
        });
        setBlogPreview(null);
        if (blogFileRef.current) blogFileRef.current.value = "";
      } else {
        setMessage("Failed to add blog!");
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-xl border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#7050ff]">
        Add New Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-800">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#7050ff] outline-none"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium text-gray-800">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#7050ff] outline-none"
            required
          />
        </div>

        {/* Blog Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-800">
            Blog Image
          </label>
          <input
            type="file"
            accept="image/*"
            ref={blogFileRef}
            onChange={handleImageUpload}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none"
            required
          />
          {blogPreview && (
            <img
              src={blogPreview}
              alt="blog preview"
              className="mt-3 rounded-lg w-40 h-40 object-cover border border-gray-200"
            />
          )}
        </div>

        {/* Categories */}
        <div>
          <label className="block mb-1 font-medium text-gray-800">
            Category
          </label>
          <select
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#7050ff] outline-none"
            required>
            <option value="" disabled>
              -- Select a Category --
            </option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
            <option value="Programming">Programming</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7050ff] text-white p-3 rounded-lg hover:bg-[#5a3de0] transition font-semibold">
          {loading ? "Submitting..." : "Add Blog"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-5 text-center font-medium ${
            error ? "text-red-500" : "text-green-600"
          }`}>
          {message}
        </p>
      )}
    </div>
  );
}
