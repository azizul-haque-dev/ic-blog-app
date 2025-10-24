"use client";
import { useState, useMemo } from "react";

export default function SearchPost(posts) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const allCategories = useMemo(() => {
    return ["All", ...new Set(posts.flatMap((post) => post.categories))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.categories.includes(selectedCategory);

      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchTerm]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    allCategories,
    filteredPosts,
  };
}
