"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include"
          }
        );
        if (res.ok) {
          toast.success("Logout successful");
          router.push("/login");
        } else {
          toast.error("Logout failed");
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("Failed to logout. Try again.");
      }
    }
    logout();
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        <h1 className="text-lg font-semibold text-gray-700">
          Logging you out...
        </h1>
        <p className="text-gray-500 text-sm">Please wait a moment.</p>
      </div>
    </div>
  );
}

export default LogoutPage;
