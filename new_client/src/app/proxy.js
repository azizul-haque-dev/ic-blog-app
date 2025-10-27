import jwtDecode from "jwt-decode";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const token = req.cookies.get("accessToken")?.value;
  const url = req.nextUrl.pathname;

  const protectedPaths = ["/admin", "/user"];
  const restrictedForLoggedIn = [
    "/login",
    "/register",
    "/verifyemail",
    "/credential"
  ];

  // ✅ লগ দেখার জন্য (শুধু dev mode)
  if (process.env.NODE_ENV === "development") {
    console.log("🧩 Middleware running on:", url);
    console.log("Token found:", !!token);
  }

  // ✅ টোকেন থাকলে
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const { role, exp } = decoded;

      // টোকেন মেয়াদ চেক
      if (exp * 1000 < Date.now()) {
        const res = NextResponse.redirect(new URL("/login", req.url));
        res.cookies.delete("accessToken");
        return res;
      }

      // লগইন করা ইউজার যেন public রুটে না ঢোকে
      if (restrictedForLoggedIn.some((path) => url.startsWith(path))) {
        if (role === "admin")
          return NextResponse.redirect(new URL("/admin", req.url));
        if (role === "user")
          return NextResponse.redirect(new URL("/user", req.url));
      }

      // Role mismatch হলে redirect
      if (url.startsWith("/admin") && role !== "admin")
        return NextResponse.redirect(new URL("/user", req.url));
      if (url.startsWith("/user") && role !== "user")
        return NextResponse.redirect(new URL("/admin", req.url));
    } catch (err) {
      const res = NextResponse.redirect(new URL("/login", req.url));
      res.cookies.delete("accessToken");
      return res;
    }
  } else {
    // টোকেন নাই কিন্তু প্রটেক্টেড রুটে ঢুকতে চাইলে
    const isProtected = protectedPaths.some((path) => url.startsWith(path));
    if (isProtected) return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ যদি সব ঠিক থাকে
  return NextResponse.next();
}

// ✅ এখন এই config ব্যবহার করতে হবে
export const config = {
  matcher: [
    "/login",
    "/register",
    "/verifyemail",
    "/credential",
    "/credential/:path*",
    "/admin/:path*",
    "/user/:path*"
  ]
};
