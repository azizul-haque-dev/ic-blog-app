"use server";

import { customFetch } from "@/services/customFetch";
import { redirect } from "next/navigation";

// getData handles redirect itself
export async function getData({ url, options }) {
  const data = await customFetch(url, options);

  // If access token is invalid → redirect immediately
  if (!data?.success && data?.message === "expired access token") {
    redirect("/logout");
  }
  if (!data?.success && data?.message === "Invalid access token") {
    redirect("/login");
  }

  return data;
}

// getUser just calls getData; do NOT wrap redirect in try/catch
export async function getUser() {
  const url = `${process.env.NEXT_APP_SERVER}/user/profile`;
  const options = { method: "GET" };
  const data = await getData({ url, options });
  return data;
}
