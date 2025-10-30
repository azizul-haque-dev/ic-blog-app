import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const sessionCookie = request.cookies.get("accessToken")?.value;
  console.log({ sessionCookie }, "session");

  const auth = jwt.verify(sessionCookie, process.env.ACCESS_SECRET);
  return NextResponse.json(auth);
}

export async function POST() {
  const cookieJar = await cookies();
  cookieJar.getAll().forEach((cookie) => {
    cookieJar.delete(cookie.name);
  });

  return NextResponse.json({ success: true });
}
