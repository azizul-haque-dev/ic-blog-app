import { getAllAdminBlogPost } from "@/actions/post.action";
import AdminBlogPagination from "@/app/Components/adminComponets/AdminBlogPagination";
import PostEditAndDeleteButton from "@/app/Components/adminComponets/PostEditAndDeleteButton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function Page({ searchParams }) {
  const { page } = searchParams;
  const currentPage = Number(page) || 1;

  const postData = await getAllAdminBlogPost({
    page: currentPage,
    category: "",
    search: ""
  });

  const posts = postData?.posts || [];
  const totalPages = postData?.totalPages || 1;

  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <h1 className="text-2xl text-white font-medium mb-4">All posts</h1>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50 text-sm text-gray-700">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">Image</th>
            <th className="py-3 px-4 text-left font-semibold">Title</th>
            <th className="py-3 px-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-800">
          {posts.map((post) => (
            <tr
              key={post._id}
              className="border-t border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <td className="py-3 px-4">
                <Image
                  src={post.imageUrl}
                  alt={`Image for ${post.title}`}
                  width={80}
                  height={60}
                  className="rounded-md object-cover border border-gray-300"
                />
              </td>
              <td className="p-2 text-blue-600 underline">
                <Link href={`/admin/allposts/${post._id}`}>{post.title}</Link>
              </td>
              <td className="py-3 px-4">
                <PostEditAndDeleteButton post={post} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Suspense fallback={<div>Loading...</div>}>
        <AdminBlogPagination
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Suspense>
    </div>
  );
}

export default Page;
