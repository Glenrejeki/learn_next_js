import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "./lib/api";
import PostList from "../components/PostList";




export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Selamat datang di Next JS News</h1>
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
