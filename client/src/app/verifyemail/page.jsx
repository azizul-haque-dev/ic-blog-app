"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EnterVerificationCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // API call to verify the code

      router.push("/login");
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,6}$/.test(input)) {
      setCode(input);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-5xl w-full">
        {/* Illustration */}
        <div className="flex justify-center items-center">
          <Image
            src="/authentication-form-fields-dark.png"
            alt="Email verification illustration"
            width={520}
            height={360}
            className=""
            priority
          />
        </div>

        {/* Form */}
        <div className="w-full max-w-md bg-white border border-gray-200 px-8 py-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-extrabold mb-3 text-center text-gray-800 tracking-tight">
            Enter Verification Code
          </h2>
          <p className="text-sm text-gray-500 mb-8 text-center">
            We’ve sent a code to your email. Please enter it below to continue.
          </p>

          <form onSubmit={handleVerify} className="space-y-6">
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              placeholder="••••••"
              value={code}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-white text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7033ff] focus:border-[#7033ff] placeholder-gray-400 tracking-widest text-center text-lg font-mono"
              required
              disabled={timeLeft <= 0}
            />

            {timeLeft > 0 ? (
              <p className="text-sm text-center text-gray-600">
                ⏳ Code expires in{" "}
                <span className="font-semibold text-[#7033ff]">
                  {formatTime(timeLeft)}
                </span>
              </p>
            ) : (
              <p className="text-sm text-center text-red-500">
                ❌ Code expired. Please{" "}
                <span
                  className="underline cursor-pointer hover:text-[#7033ff]"
                  onClick={() => alert("Resend OTP API call korte hobe")}>
                  resend
                </span>{" "}
                to get a new one.
              </p>
            )}

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || timeLeft <= 0}
              className="w-full py-4 bg-[#7033ff] text-white font-semibold rounded-md hover:bg-[#5927d8] transition duration-200 disabled:opacity-60 shadow-md">
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-6 text-center">
            Didn’t receive the code?{" "}
            <span
              className="underline cursor-pointer hover:text-[#7033ff] font-semibold"
              onClick={() => alert("Resend OTP API call korte hobe")}>
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnterVerificationCode;
