import BlogList from "@/components/blog/BlogList";
import type { BlogPost } from "@/types";
import { getBlogPosts } from "@/utils/blog";

async function BlogPage() {
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-4 px-48 pt-72">
        <BlogList posts={posts} />
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right"></div>
    </div>
  );
}

export default BlogPage;
