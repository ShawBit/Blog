import { BlogPost } from "@/types";
import dayjs from "dayjs";
import Link from "next/link";

export default async function WeeklyList({
  isSide,
  posts,
}: {
  isSide?: boolean;
  posts: BlogPost[];
}) {
  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => (
        <li
          id={post.id}
          key={post.metadata.slug}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          {isSide ? (
            <></>
          ) : (
            <span className="text-[#8585a8] min-w-28 font-medium">
              {dayjs(post.metadata.date).format("YYYY-MM-DD")}
            </span>
          )}
          <Link
            href={`/blog/${post.metadata.slug}`}
            className="hover:border-b hover:border-border truncate transition-colors duration-500 ease-in-out font-medium"
          >
            {post.metadata.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
