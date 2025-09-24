 export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function getLastPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: Post[] = await res.json();
  return posts;
}
