module.exports = [
"[project]/src/app/admin/allusers/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const usersData = [
    {
        _id: "671a8f9a1c2e9001a1a00101",
        email: "john.doe@example.com",
        username: "johndoe",
        firstName: "John",
        lastName: "Doe",
        role: "USER",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00102",
        email: "jane.smith@example.com",
        username: "janesmith",
        firstName: "Jane",
        lastName: "Smith",
        role: "ADMIN",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00103",
        email: "michael.brown@example.com",
        username: "mikebrown",
        firstName: "Michael",
        lastName: "Brown",
        role: "USER",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00104",
        email: "sarah.johnson@example.com",
        username: "sarahj",
        firstName: "Sarah",
        lastName: "Johnson",
        role: "USER",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00105",
        email: "david.wilson@example.com",
        username: "davidw",
        firstName: "David",
        lastName: "Wilson",
        role: "ADMIN",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00106",
        email: "emily.taylor@example.com",
        username: "emilyt",
        firstName: "Emily",
        lastName: "Taylor",
        role: "USER",
        status: "SUSPENDED",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00107",
        email: "robert.miller@example.com",
        username: "robmiller",
        firstName: "Robert",
        lastName: "Miller",
        role: "USER",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00108",
        email: "olivia.anderson@example.com",
        username: "oliviaa",
        firstName: "Olivia",
        lastName: "Anderson",
        role: "USER",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00109",
        email: "william.thomas@example.com",
        username: "willt",
        firstName: "William",
        lastName: "Thomas",
        role: "USER",
        status: "SUSPENDED",
        image: "/defaultProfile.png"
    },
    {
        _id: "671a8f9a1c2e9001a1a00110",
        email: "ava.moore@example.com",
        username: "avamoore",
        firstName: "Ava",
        lastName: "Moore",
        role: "USER",
        status: "ACTIVE",
        image: "/defaultProfile.png"
    }
];
function Page() {
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(usersData);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Toggle suspend/activate
    const handleToggleStatus = (userId)=>{
        const updatedUsers = users.map((user)=>user._id === userId ? {
                ...user,
                status: user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE"
            } : user);
        setUsers(updatedUsers);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto rounded-lg shadow-sm mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full bg-white border border-gray-200 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50 text-sm text-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-3 px-4 text-left font-semibold tracking-wide",
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-3 px-4 text-left font-semibold tracking-wide",
                                children: "Username / Full Name"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-3 px-4 text-left font-semibold tracking-wide",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-3 px-4 text-left font-semibold tracking-wide",
                                children: "Role"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-3 px-4 text-left font-semibold tracking-wide",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-3 px-4 text-left font-semibold tracking-wide",
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/allusers/page.jsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "text-sm text-gray-800",
                    children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-t border-gray-200 hover:bg-gray-100 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-3 px-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: user.image,
                                        alt: user.username,
                                        width: 50,
                                        height: 50,
                                        className: "rounded-full object-cover border border-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/allusers/page.jsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-3 px-4 font-medium text-[#7050ff]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: user.username
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-xs",
                                                children: [
                                                    user.firstName,
                                                    " ",
                                                    user.lastName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/allusers/page.jsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/allusers/page.jsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-3 text-gray-600 px-4",
                                    children: user.email
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-3 text-gray-800 px-4",
                                    children: user.role
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: `py-3 px-4 font-semibold ${user.status === "ACTIVE" ? "text-green-600" : "text-red-500"}`,
                                    children: user.status
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-3 px-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleToggleStatus(user._id),
                                        className: `px-3 py-1.5 text-sm rounded-md font-medium ${user.status === "ACTIVE" ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-green-100 text-green-600 hover:bg-green-200"}`,
                                        children: user.status === "ACTIVE" ? "Suspend" : "Activate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/allusers/page.jsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, user._id, true, {
                            fileName: "[project]/src/app/admin/allusers/page.jsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/allusers/page.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/allusers/page.jsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/allusers/page.jsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Page;
}),
];

//# sourceMappingURL=src_app_admin_allusers_page_jsx_4a95a402._.js.map