"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
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
      router.push("/verifyemail");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center px-4 py-12 gap-10">
        {/* Form Section */}
        <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center">Create account</h1>
          <p className="text-sm text-gray-600 text-center">
            Let's start with your basic information
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-700 mb-1">
                Name
              </label>
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

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
              <Link
                className="text-blue-600 hover:underline"
                href="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7050ff] text-white py-2 rounded-lg hover:bg-[#7033ff] transition duration-200 font-semibold">
              {!isLoading ? "Sign Up" : "Creating New user..."}
            </button>

            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
          </form>

          <Link
            href="/login"
            className="text-sm text-blue-600 hover:underline text-center block">
            You already have an account? Sign in
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md flex justify-center">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/woman-laptop-sitting-dark.png"
              alt="Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
