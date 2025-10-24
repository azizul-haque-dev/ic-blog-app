import PostContent from "@/app/Components/PostContent";
import React from "react";

function page({ params }) {
  const { id } = params;

  // fack data
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

  const post = postsData.find((p) => p.id === parseInt(id));
  if (!post) return <div className="">post DoseNot foud</div>;
  return <div className="">{post.title}</div>;
}

export default page;
