import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/app/lib/api";   // gunakan alias @ untuk src
import PostList from "@/components/PostList"; // panggil dari folder components




export default async function Page() {
  const posts = await getAllPost();

  return (
    <>
      <div className="main-heading">
        <h2>Daftar Blog</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem
          consequuntur sed tempora quis excepturi possimus reprehenderit
          provident ut iusto?
        </p>
      </div>
      <PostList posts={posts}/>
    </>
  );
}
