import React from "react";
import Link from "next/link";

function Button() {
  return (
    <div className="text-center mt-12">
      <Link
        href="/blog"
        className="px-4 py-2 bg-[#6D28D9] text-white rounded-md hover:bg-[#9c45f4] transition duration-200 cursor-pointer "
      >
        View All Posts
      </Link>
    </div>
  );
}

export default Button;
