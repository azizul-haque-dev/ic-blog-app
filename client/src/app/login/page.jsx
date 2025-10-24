"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { login, user, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  //  If already logged in → redirect
  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/user");
      }
    }
  }, [user, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await login(email, password);

    if (!res.success) {
      setError(res.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-6 py-12 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">

          {/* Illustration Section */}
          <div className="w-full max-w-md flex justify-center">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/woman-working-servers-dark.png"
                alt="Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Login Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-10 space-y-8 border border-gray-100">

            {/* Welcome Text */}
            <div className="text-center space-y-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
                Welcome Back 👋
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Please enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email address*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    👁️
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-600">Remember Me</span>
                </label>
                <a href="#" className="text-purple-600 hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm text-center font-medium">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#7033ff] to-[#8b5cff] text-white py-2.5 rounded-md hover:opacity-90 transition font-semibold shadow-md disabled:opacity-50"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Create account link */}
            <div className="text-center text-sm text-gray-600">
              New on our platform?{" "}
              <Link href="/register" className="text-purple-600 font-medium hover:underline">
                Create an account
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
