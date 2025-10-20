import { posts } from "@/app/damyData/post-damyData";

import PostContent from "@/app/Components/PostContent";

export default async function PostDetails({ params }) {
  const resolvedParams = await params; // await kore nite hobe
  const id = Number(resolvedParams.id);

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Post not found 😢
      </div>
    );
  }
  return <PostContent post={post} />;
}
