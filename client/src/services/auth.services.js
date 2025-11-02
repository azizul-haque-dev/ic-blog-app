"use client";
import { deleteAuthToken } from "@/actions/session.action";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    try {
      await deleteAuthToken();
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  return logout;
}
