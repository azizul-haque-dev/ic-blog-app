"use client";

import { useLogout } from "@/services/auth.services";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const redirectTo = user?.role === "admin" ? "/admin" : "/user";
  const logout = useLogout();

  return (
    <nav className="mx-auto mt-4 sticky top-4 z-50 px-3">
      <div className="max-w-7xl mx-auto bg-white rounded-xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between shadow-md">
        {/* Logo */}
        <Link href="/" className="text-[#7050ff] text-xl font-bold">
          BlogKori
        </Link>

        {/* Mobile view */}
        <div className="md:hidden flex gap-2 items-center">
          {!user?.id ? (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm sm:text-base"
            >
              Sign In
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="btn btn-ghost btn-circle avatar flex items-center justify-center"
              >
                {user.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-200"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </button>

              {isDropdownOpen && (
                <ul className="absolute right-0 mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10">
                  <li>
                    <Link href={redirectTo}>Profile</Link>
                  </li>
                  <li>
                    <Link href="/settings">Settings</Link>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              )}
            </div>
          )}

          {/* Mobile toggle button */}
          <button
            className="flex flex-col gap-1 text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-[2px] bg-gray-700"></span>
            <span className="block w-6 h-[2px] bg-gray-700"></span>
            <span className="block w-6 h-[2px] bg-gray-700"></span>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about" className="text-[#3F404D] font-semibold hover:text-[#7050ff]">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#3F404D] font-semibold hover:text-[#7050ff]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#3F404D] font-semibold hover:text-[#7050ff]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop auth/profile */}
        <div className="hidden md:flex gap-2 items-center">
          {!user ? (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm sm:text-base"
            >
              Sign In
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="btn btn-ghost btn-circle avatar flex items-center justify-center"
              >
                {user.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-200"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </button>

              {isDropdownOpen && (
                <ul className="absolute right-0 mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10">
                  <li>
                    <Link href={redirectTo}>Profile</Link>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">
          <Link href="/about" className="text-[#3F404D] font-semibold hover:text-[#7050ff]">
            About
          </Link>
          <Link href="/blog" className="text-[#3F404D] font-semibold hover:text-[#7050ff]">
            Blog
          </Link>
          <Link href="/contact" className="text-[#3F404D] font-semibold hover:text-[#7050ff]">
            Contact
          </Link>

          {!user?.id ? (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm sm:text-base"
            >
              Sign In
            </Link>
          ) : (
            <button onClick={logout} className="text-red-500 font-semibold">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
