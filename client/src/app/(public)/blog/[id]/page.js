import { getSinglePost } from "@/actions/post.action";
import PostContent from "@/app/Components/PostContent";

export default async function PostDetails({ params }) {
  const { id } = await params;
  const postData = await getSinglePost({ postId: id });
  console.log({ postData });
  const post = postData?.post;

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Post not found 😢
      </div>
    );
  }
  return <PostContent post={post} />;
}
