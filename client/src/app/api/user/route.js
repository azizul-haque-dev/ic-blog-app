import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const cookieStore = await cookies();
    const accessToken = await cookieStore.get("accessToken");

    // If no token found
    if (!accessToken) {
      return NextResponse.json(
        { error: "Access token missing" },
        { status: 401 }
      );
    }

    // Verify token
    const user = jwt.verify(accessToken.value, process.env.ACCESS_SECRET);

    // Return user info
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Token verification failed:", error.message);

    // Handle token errors properly
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 403 }
    );
  }
}
