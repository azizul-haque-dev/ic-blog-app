"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteAuthToken } from "@/actions/session.action";
import Timer from "./Timer";

export default function VerifyEmailForm() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });
  const [timeLeft, setTimeLeft] = useState(900);
  const router = useRouter();

  const handleVerify = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verify-email`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        let msg = data.message || "Verification failed. Please try again.";

        if (data.message === "Token expired")
          msg = "Verification code has expired. Please request a new one.";
        else if (data.message === "Invalid code")
          msg = "Invalid verification code. Please try again.";
        else if (res.status === 401)
          msg = "Session expired. Please register again.";

        setStatus({ loading: false, error: msg, success: "" });

        if (res.status === 401 && data.message !== "Invalid code")
          setTimeout(() => (window.location.href = "/register"), 3000);
        return;
      }

      // ✅ success
      setStatus({ loading: false, error: "", success: "Verification successful! Redirecting..." });
      await deleteAuthToken();
      setTimeout(() => router.push("/login"), 3000);

    } catch {
      setStatus({
        loading: false,
        error: "Something went wrong. Please try again.",
        success: "",
      });
    }
  };

  return (
    <form onSubmit={handleVerify} className="space-y-6">
      <input
        type="text"
        maxLength={6}
        placeholder="••••••"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        disabled={timeLeft <= 0 || status.loading}
        className="w-full px-4 py-4 bg-white text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7033ff] focus:border-[#7033ff] placeholder-gray-400 tracking-widest text-center text-lg font-mono"
      />

      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />

      {status.success && (
        <p className="text-green-600 text-sm text-center font-medium">{status.success}</p>
      )}
      {status.error && (
        <p className="text-red-500 text-sm text-center">{status.error}</p>
      )}

      <button
        type="submit"
        disabled={status.loading || timeLeft <= 0}
        className="w-full py-4 bg-[#7033ff] text-white font-semibold rounded-md hover:bg-[#5927d8] transition duration-200 disabled:opacity-60 shadow-md"
      >
        {status.loading ? "Verifying..." : "Verify Code"}
      </button>
    </form>
  );
}
