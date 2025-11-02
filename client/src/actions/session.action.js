"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAuthCookie(data) {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === "production";

  const token = jwt.sign(data, process.env.ACCESS_SECRET, {
    expiresIn: "1d"
  });

  // set the cookie
  cookieStore.set({
    name: "accessToken",
    value: token,
    httpOnly: true,
    path: "/",
    secure: isProduction,
    maxAge: 60 * 60 * 24, //  Also changed to 24 hours
    sameSite: isProduction ? "none" : "lax"
  });

  return { success: true };
}

export async function setEmailToken(email) {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === "production";

  try {
    if (!process.env.EMAIL_SECRET) {
      throw new Error("EMAIL_SECRET is not defined");
    }

    const token = jwt.sign({ email }, process.env.EMAIL_SECRET, {
      expiresIn: "15m"
    });

    // ✅ Set secure HTTP-only cookie
    cookieStore.set({
      name: "emailToken",
      value: token,
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
      maxAge: 60 * 15
    });

    return { success: true };
  } catch (error) {
    console.error("Error setting email token:", error);
    return { success: false, message: "Failed to set email token" };
  }
}

export async function deleteAuthToken() {
  const cookieJar = await cookies();

  //  Better approach - only delete specific cookies
  cookieJar.getAll().forEach((cookie) => {
    cookieJar.delete(cookie.name);
  });
 return {success:true}
}
