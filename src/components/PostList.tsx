import React from "react";
import Link from "next/link";
import { Post } from "@/app/lib/api";

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className="post-lisSt">
      {posts.map((post) => (
        <h2 key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
      ))}
    </div>
  );
}

export default PostList;
