import BlogPost from "@/app/Components/BlogPost";
import { posts } from "@/damyData/post-damyData";


export default async function BlogPage() {
  // const res = await fetch(`${process.env.NEXT_API_URL}/post/get`, {
  //   cache: "no-store"
  // });
  // const postsData = await res.json();

  return (
    <div className="min-h-screen text-white">
      <BlogPost posts={posts} />
    </div>
  );
}
