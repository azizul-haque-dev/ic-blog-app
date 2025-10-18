import React from "react";
import Link from "next/link";

function Navber() {
  return (
    <nav className="mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href="/" className="btn  text-[#7050ff] text-xl">
            BlogKori
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/about"
                className="  text-[#3F404D] font-semibold hover:text-[#7050ff]">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className=" text-[#3F404D] font-semibold hover:text-[#7050ff]">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className=" text-[#3F404D] font-semibold hover:text-[#7050ff]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
