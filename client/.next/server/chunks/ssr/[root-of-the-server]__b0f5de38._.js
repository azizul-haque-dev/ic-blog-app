module.exports = [
"[project]/.next-internal/server/app/post/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
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
    }
];
}),
"[project]/src/app/Components/PostContent.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function PostContent({ post }) {
    const likeCount = post.likes.length;
    const dislikeCount = post.dislikes.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto px-4 py-10 bg-[#0F0F0F] text-gray-200 rounded-2xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-72 rounded-2xl shadow-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: post.imageUrl,
                        alt: post.title,
                        className: "object-cover w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/PostContent.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 left-3 flex gap-2 flex-wrap",
                        children: post.categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-purple-700/90 text-white text-sm px-3 py-1 rounded-full",
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/src/app/Components/PostContent.jsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/PostContent.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl sm:text-4xl font-bold mt-6 text-white",
                children: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-between items-center mt-3 text-sm text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Published on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-300",
                                children: new Date(post.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/PostContent.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/PostContent.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Updated:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: new Date(post.updatedAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/PostContent.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/PostContent.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-gray-300 leading-relaxed text-lg",
                children: post.content
            }, void 0, false, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            "Like / Dislike Section",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 bg-green-900/40 hover:bg-green-800 text-green-400 px-4 py-2 rounded-full transition",
                        children: [
                            "👍 ",
                            likeCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/PostContent.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 bg-red-900/40 hover:bg-red-800 text-red-400 px-4 py-2 rounded-full transition",
                        children: [
                            "👎 ",
                            dislikeCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/PostContent.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-5 inline-block px-4 py-1 text-sm rounded-full ${post.status === "approved" ? "bg-green-900/40 text-green-400" : "bg-yellow-900/40 text-yellow-400"}`,
                children: [
                    "Status: ",
                    post.status
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-block bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition",
                    children: "← Back to Home"
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/PostContent.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/PostContent.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/PostContent.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/post/[id]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$damyData$2f$post$2d$damyData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/damyData/post-damyData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$PostContent$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/PostContent.jsx [app-rsc] (ecmascript)");
;
;
;
async function PostDetails({ params }) {
    const resolvedParams = await params; // await kore nite hobe
    const id = Number(resolvedParams.id);
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$damyData$2f$post$2d$damyData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].find((p)=>p.id === id);
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 text-gray-600 text-xl",
            children: "Post not found 😢"
        }, void 0, false, {
            fileName: "[project]/src/app/post/[id]/page.js",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$PostContent$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        post: post
    }, void 0, false, {
        fileName: "[project]/src/app/post/[id]/page.js",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/post/[id]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/post/[id]/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0f5de38._.js.map