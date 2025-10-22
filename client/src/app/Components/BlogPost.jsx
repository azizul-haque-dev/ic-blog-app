// import React from "react";
// import PostCard from "../Components/PostCard";

// function BlogPost() {
//   console.log("✅ BlogPost Rendered");
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-green-400 mb-6">
//         BlogPost Working ✅
//       </h1>
//       <PostCard />
//     </div>
//   );
// }

// export default BlogPost;
import PostCard from "../Components/PostCard";
import { posts } from "../damyData/post-damyData"; // dummy data import

function BlogPost() {
  // console.log("Posts:", posts);
  return (
    <div
      className="min-h-screen 
     text-white py-10 px-6"
    >
      <h1 className="text-3xl font-bold mb-8 text-green-400 text-center">
        All Blog Posts
      </h1>

      {/* posts array loop করে প্রত্যেক post কে PostCard এ পাঠানো হচ্ছে */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
