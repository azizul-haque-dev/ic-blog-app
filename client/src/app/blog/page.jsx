import BlogPost from "../Components/BlogPost";

export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_API_URL}/post/get`, {
    cache: "no-store"
  });
  const postsData = await res.json();

  return (
    <div className="min-h-screen text-white">
      <BlogPost posts={postsData?.posts} />
    </div>
  );
}
