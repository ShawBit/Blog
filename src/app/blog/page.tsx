import BlogList from "@/components/blog/BlogList";
import { getBlogPosts } from "@/lib/blog";
import type { BlogPost } from "@/types";

async function BlogPage() {
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-4 px-48 pt-32 items-center">
        <div className="w-1/2 flex flex-col gap-8">
          <span className="text-4xl font-bold">Blog</span>
          <BlogList posts={posts} />
        </div>
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right"></div>
    </div>
  );
}

export default BlogPage;
