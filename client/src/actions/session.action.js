"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAuthCookie(data) {
  const cookieStore = await cookies();

  const token = jwt.sign(data, process.env.ACCESS_SECRET, {
    expiresIn: "1d"
  });

  // set the cookie
  cookieStore.set({
    name: "accessToken",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    sameSite: "lax"
  });
}

export async function deleteAuthToken() {
  const cookieJar = await cookies();

  cookieJar.getAll().forEach((cookie) => {
    cookieJar.delete(cookie.name);
  });

  redirect("/auth/login");
}
