module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/Components/card.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function Card({ post }) {
    const { title, content, imageUrl, categories, status, createdAt } = post;
    const statusColor = status === "approved" ? "text-green-600" : status === "pending" ? "text-yellow-500" : "text-red-600";
    return(// <div className=" bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform">
    //   <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    //   <div className="p-4">
    //     <h2 className="text-xl font-semibold mb-2 text-[#000]">{title}</h2>
    //     <p className="text-gray-600 mb-3 line-clamp-3">{content}</p>
    //     <div className="flex flex-wrap gap-2 mb-3">
    //       {categories.map((cat, index) => (
    //         <span
    //           key={cat}
    //           className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
    //         >
    //           {cat}
    //         </span>
    //       ))}
    //     </div>
    //     <div className="flex justify-between">
    //       <span className={`text-sm font-medium ${statusColor}`}>
    //         Status: {status}
    //       </span>
    //       <span className="inline-block border border-blue-300 text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium">
    //         {createdAt}
    //       </span>
    //     </div>
    //   </div>
    //   {/* <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-100 to-transparent rounded-b-2xl"></div> */}
    //   <div className="flex justify-end mx-4 my-4">
    //     <Link href={`/post/${post.id}`}>
    //       <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
    //         Read More →
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#0F0C1D] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform border border-[#2D1B4E]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: title,
                className: "w-full h-48 object-cover rounded-t-2xl"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/card.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-2 text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/card.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#B4A9C8] mb-3 line-clamp-3",
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/card.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-3",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-[#5B21B6]/30 text-[#C084FC] px-2 py-1 rounded text-sm backdrop-blur-sm border border-[#5B21B6]/50",
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/src/app/Components/card.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/card.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm font-medium ${status === "approved" ? "text-[#10B981]" : status === "pending" ? "text-[#FACC15]" : "text-[#EF4444]"}`,
                                children: [
                                    "Status: ",
                                    status
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/card.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block border border-[#7C3AED] text-[#C084FC] px-2 py-0.5 rounded-full text-xs font-medium",
                                children: createdAt
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/card.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/card.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/card.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mx-4 my-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/post/${post.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer",
                        children: "Read More →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/card.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/card.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/card.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/card.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this));
}
}),
"[project]/src/app/Components/button.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
function Button() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mt-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-4 py-2 bg-[#6D28D9] text-white rounded-md hover:bg-[#9c45f4] transition duration-200 cursor-pointer ",
            children: "View All Post"
        }, void 0, false, {
            fileName: "[project]/src/app/Components/button.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Components/button.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Button;
}),
"[project]/src/app/damyData/post-damyData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comments",
    ()=>comments,
    "posts",
    ()=>posts
]);
const posts = [
    {
        id: 1,
        title: "Exploring Node.js for Beginners",
        content: "Learn the basics of Node.js and build simple APIs using Express.",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        categories: [
            "Programming",
            "Node.js",
            "Backend"
        ],
        status: "approved",
        likes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        dislikes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        createdAt: "2025-10-19T12:30:45.123Z",
        updatedAt: "2025-10-19T12:30:45.123Z"
    },
    {
        id: 2,
        title: "Understanding Mongoose ",
        content: "How Mongoose populate works for referencing other collections.",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        categories: [
            "MongoDB",
            "Database"
        ],
        status: "pending",
        likes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        dislikes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        createdAt: "2025-10-19T12:30:45.123Z",
        updatedAt: "2025-10-19T12:30:45.123Z"
    },
    {
        id: 3,
        title: "Tailwind CSS vs Bootstrap",
        content: "We compare Tailwind CSS and Bootstrap for frontend developers.",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        categories: [
            "Frontend",
            "CSS",
            "UI Design"
        ],
        status: "approved",
        likes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        dislikes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        createdAt: "2025-10-19T12:30:45.123Z",
        updatedAt: "2025-10-19T12:30:45.123Z"
    },
    {
        id: 4,
        title: "Understanding Mongoose ",
        content: "How Mongoose populate works for referencing other collections.",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        categories: [
            "MongoDB",
            "Database"
        ],
        status: "pending",
        likes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        dislikes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        createdAt: "2025-10-19T12:30:45.123Z",
        updatedAt: "2025-10-19T12:30:45.123Z"
    },
    {
        id: 5,
        title: "Tailwind CSS vs Bootstrap",
        content: "We compare Tailwind CSS and Bootstrap for frontend developers.",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        categories: [
            "Frontend",
            "CSS",
            "UI Design"
        ],
        status: "approved",
        likes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        dislikes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        createdAt: "2025-10-19T12:30:45.123Z",
        updatedAt: "2025-10-19T12:30:45.123Z"
    },
    {
        id: 6,
        title: "The Power of Consistency",
        userId: "6713e89f2d8f4c124d3c27ab",
        content: "Consistency is the key to achieving long-term goals. Even small daily actions can lead to massive success over time.",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        imageId: "consistency_1729999999",
        categories: [
            "motivation",
            "self-improvement",
            "productivity"
        ],
        status: "approved",
        likes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        dislikes: [
            "6713e89f2d8f4c124d3c27ab"
        ],
        createdAt: "2025-10-19T12:30:45.123Z",
        updatedAt: "2025-10-19T12:30:45.123Z"
    }
];
const comments = [
    {
        _id: "1",
        postId: "p101",
        userId: "u201",
        status: "approved",
        content: "Great post! I learned a lot about consistency and focus.",
        createdAt: "2025-10-15T12:30:00.000Z"
    },
    {
        _id: "2",
        postId: "p101",
        userId: "u202",
        status: "pending",
        content: "Interesting perspective! Waiting for approval.",
        createdAt: "2025-10-16T08:10:00.000Z"
    },
    {
        _id: "3",
        postId: "p102",
        userId: "u203",
        status: "suspended",
        content: "This comment was flagged due to inappropriate content.",
        createdAt: "2025-10-17T09:45:00.000Z"
    },
    {
        _id: "4",
        postId: "p108",
        userId: "u203",
        status: "approved",
        content: "This comment was flagged due to inappropriate content.",
        createdAt: "2025-10-17T09:45:00.000Z"
    },
    {
        _id: "5",
        postId: "p102",
        userId: "u203",
        status: "pending",
        content: "This comment was flagged due to inappropriate content.",
        createdAt: "2025-10-17T09:45:00.000Z"
    }
];
}),
"[project]/src/app/Components/PostSection.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/Components/PostSection.jsx
__turbopack_context__.s([
    "default",
    ()=>PostSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/card.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$button$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/button.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$damyData$2f$post$2d$damyData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/damyData/post-damyData.js [app-rsc] (ecmascript)");
;
;
;
;
function PostSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#0A0814] py-10 px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-center mb-8 text-green-600",
                children: "Latest Posts"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/PostSection.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$damyData$2f$post$2d$damyData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        post: post
                    }, index, false, {
                        fileName: "[project]/src/app/Components/PostSection.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/PostSection.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$button$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/Components/PostSection.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/PostSection.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/Components/Footer.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/Components/Footer.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/Components/Footer.jsx <module evaluation>", "default");
}),
"[project]/src/app/Components/Footer.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/Components/Footer.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/Components/Footer.jsx", "default");
}),
"[project]/src/app/Components/Footer.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/Components/Footer.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/Components/Footer.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$PostSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/PostSection.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Footer.jsx [app-rsc] (ecmascript)");
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$PostSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96dbaf3a._.js.map