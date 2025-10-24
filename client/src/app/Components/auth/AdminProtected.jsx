"use client";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminProtected({ children }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) router.replace("/login");
      else if (user.role !== "admin") router.replace("/user");
    }
  }, [user, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (!user || user.role !== "admin") return null;

  return <>{children}</>;
}
