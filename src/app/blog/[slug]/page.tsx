import BlogList from "@/components/blog/BlogList";
import MDXComponents from "@/components/mdx/MDXComponents";
import TOC from "@/components/mdx/TOC";
import type { BlogPost } from "@/types";
import { getBlogPosts } from "@/utils/blog";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();
  const postIndex = posts.findIndex((post) => post.metadata.slug === slug);
  const post = posts[postIndex];

  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    notFound();
  }

  const { content, metadata } = post;

  return (
    <div className="min-h-screen w-full">
      <div className="flex px-48 pt-32">
        <aside className="hidden md:block w-1/5 h-full max-h-screen sticky top-32 left-0 overflow-auto">
          <BlogList
            isSide
            posts={posts}
          />
        </aside>
        <div className="w-full md:w-3/5">
          <article id="article">
            <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
            <div className="flex gap-24">
              <div>
                Updated time: {dayjs(metadata.date).format("YYYY-MM-DD")}
              </div>
              <div>Author: {metadata.author}</div>
            </div>
            <MDXRemote
              source={content}
              components={MDXComponents}
            />
          </article>
          <hr className="border-t border-gray-400 my-4" />
          <div className="relative w-full text-[1.15rem]">
            {prevPost ? (
              <Link
                href={prevPost.metadata.slug}
                className="hover:border-b hover:border-border absolute left-0"
              >
                Previous
              </Link>
            ) : (
              <></>
            )}
            {nextPost ? (
              <Link
                href={nextPost.metadata.slug}
                className="hover:border-b hover:border-border absolute right-0"
              >
                Next
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-start md:w-1/5 pl-4">
          <TOC />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
