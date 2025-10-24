import PostCard from "../Components/PostCard";
import { posts } from "../damyData/post-damyData";

function BlogPost() {
  return (
    <div
      className="min-h-screen 
     text-white py-10 px-6"
    >
      <h1 className="text-3xl font-bold mb-8 text-green-400 text-center">
        All Blog Posts
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
