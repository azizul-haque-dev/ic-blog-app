"use client";
import { deleteAuthToken } from "@/actions/session.action";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    const res = await deleteAuthToken();
    if (res.success) {
      toast.success("Logout successful");
      router.push("/login");
    } else {
      toast.error("Logout faild");
    }
  };

  return logout;
}
