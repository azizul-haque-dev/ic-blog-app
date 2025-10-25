"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Ban } from "lucide-react";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
const postsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content:
      "Next.js is a powerful React framework for building fast, SEO-friendly web applications.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    content:
      "Hooks like useState and useEffect make React functional components much more powerful.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 3,
    title: "Top 5 VS Code Extensions for Developers",
    content:
      "From Prettier to ESLint, here are some must-have extensions to boost your coding workflow.",
    image: "/404.png",
    categories: "Technology",
  },
  {
    id: 4,
    title: "Mastering JavaScript ES6 Features",
    content:
      "Learn about modern JavaScript features like arrow functions, destructuring, and template literals.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 5,
    title: "CSS Tricks You Should Know",
    content:
      "Improve your front-end design skills with these handy CSS layout and animation tricks.",
    image: "/404.png",
    categories: "Design",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    content:
      "TypeScript adds static typing to JavaScript for safer and more maintainable code.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 7,
    title: "Building REST APIs with Node.js",
    content:
      "Learn how to create fast and scalable REST APIs using Node.js and Express.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 8,
    title: "Responsive Web Design Tips",
    content:
      "Make your website look great on all devices with these responsive design techniques.",
    image: "/404.png",
    categories: "Design",
  },
  {
    id: 9,
    title: "State Management with Redux",
    content:
      "Redux helps manage complex state in React applications efficiently.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 10,
    title: "JavaScript Promises Explained",
    content:
      "Promises make asynchronous code easier to read and maintain in JavaScript.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 11,
    title: "Next.js Routing Basics",
    content:
      "Understand routing in Next.js including dynamic routes and nested pages.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 12,
    title: "Effective Debugging in Chrome DevTools",
    content:
      "Learn tips and tricks to debug your web apps efficiently using Chrome DevTools.",
    image: "/404.png",
    categories: "Technology",
  },
  {
    id: 13,
    title: "Animations with CSS Keyframes",
    content: "Create smooth animations for your website using CSS keyframes.",
    image: "/404.png",
    categories: "Design",
  },
  {
    id: 14,
    title: "Using Fetch API in JavaScript",
    content:
      "Learn how to make HTTP requests using the Fetch API in modern JavaScript.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 15,
    title: "Introduction to GraphQL",
    content:
      "GraphQL is a query language for APIs that gives clients the power to request exactly what they need.",
    image: "/404.png",
    categories: "Technology",
  },
  {
    id: 16,
    title: "Deploying Next.js Apps to Vercel",
    content:
      "Learn how to deploy your Next.js applications easily using Vercel.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 17,
    title: "Understanding Flexbox in CSS",
    content:
      "Flexbox helps you build responsive layouts quickly and efficiently.",
    image: "/404.png",
    categories: "Design",
  },
  {
    id: 18,
    title: "Using Local Storage in Web Apps",
    content:
      "Store data in the browser for better performance and offline capabilities.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 19,
    title: "Debugging React Components",
    content:
      "Learn how to identify and fix issues in React components effectively.",
    image: "/404.png",
    categories: "Programming",
  },
  {
    id: 20,
    title: "Accessibility in Web Design",
    content:
      "Make your website accessible for everyone by following web accessibility best practices.",
    image: "/404.png",
    categories: "Design",
  },
];

function PendigPostPage() {
  const [posts, setPosts] = useState(postsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Delete functions here
  const handleDelete = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== selectedPost.id));
    setIsModalOpen(false);
    setSelectedPost(null);
  };
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <h1 className="text-2xl text-white  font-medium mb-4">All posts </h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50 text-sm text-gray-700">
          <tr>
            <th
              scope="col"
              className="py-3 px-4 text-left font-semibold tracking-wide">
              Image
            </th>
            <th
              scope="col"
              className="py-3 px-4 text-left font-semibold tracking-wide">
              Title
            </th>
            <th
              scope="col"
              className="py-3 px-4 text-left font-semibold tracking-wide">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-800">
          {posts.map((post) => (
            <tr
              key={post.id}
              className="border-t border-gray-200 hover:bg-gray-100 transition-colors">
              <td className="py-3 px-4">
                <Image
                  src={post.image}
                  alt={`Image for ${post.title}`}
                  width={80}
                  height={60}
                  className="rounded-md object-cover border border-gray-300"
                />
              </td>
              <td className="p-2 text-blue-600 underline">
                <Link href={`/admin/allposts/${post.id}`}>{post.title}</Link>
              </td>

              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    title="Delete post"
                    aria-label={`Delete ${post.title}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5   text-[#3ab855] text-sm font-medium rounded-md  focus:outline-none ">
                    <Check />
                  </button>
                  <button
                    title="Delete post"
                    aria-label={`Delete ${post.title}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5   text-[#bb4f4f] text-sm font-medium rounded-md  focus:outline-none ">
                    <Ban />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* delete Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl text-[#7050ff] text-center font-semibold mb-4">
              Confirm Delete
            </h2>
            <p className="text-gray-500">
              Are you sure you want to delete "{selectedPost.title}"?
            </p>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PendigPostPage;
