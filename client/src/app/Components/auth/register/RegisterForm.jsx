"use client";

import { sendEmail } from "@/actions/sendEmail";
import { VERIFICATION_EMAIL_TEMPLATE } from "@/services/emaiTempletes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        setIsLoading(false);
        return;
      }

      // Send verification email
      await sendEmail({
        to: email,
        subject: "Verify your account",
        html: VERIFICATION_EMAIL_TEMPLATE(data?.code),
      });

      toast.success("Registration successful! Please verify your email.");
      setTimeout(() => router.push(`/verifyemail/${data?.emailToken}`), 1500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Registration error:", error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          placeholder="Enter your password"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Remember me */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" className="accent-blue-600" /> Remember me
        </label>
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#7050ff] text-white py-2 rounded-lg hover:bg-[#7033ff] transition duration-200 font-semibold disabled:bg-gray-400"
      >
        {!isLoading ? "Sign Up" : "Creating New User... ⏳"}
      </button>

      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </form>
  );
}
