import PostContent from "@/app/Components/PostContent";

export default async function PostDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_API_URL}/post/get/${id}`, {
    cache: "no-store"
  });
  const post = await res.json();
  console.log(id, post);
  // const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Post not found 😢
      </div>
    );
  }
  return <PostContent post={post.post} />;
}
