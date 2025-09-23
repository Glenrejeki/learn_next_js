import Image from "next/image";
import Link from "next/link";
async function getLastPost(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const posts = await res.json()
  return posts;
}

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Selamat datang di Next JS News</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem consequuntur sed tempora quis excepturi possimus reprehenderit provident ut iusto?</p>
      </div>
      <div className="post-list">
        {
          posts.map((posts)=>{
            <h2><Link href='/' >{posts.title}</Link></h2>
          })
        }
        </div>
    </>
  );
}