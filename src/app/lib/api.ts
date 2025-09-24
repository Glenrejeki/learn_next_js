// types
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// ambil 5 post terakhir
export async function getLastPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) {
    throw new Error("Gagal fetch posts");
  }
  return res.json();
}

// ambil detail 1 post
export async function getDetailPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Gagal fetch detail post");
  }
  return res.json();
}

// ambil semua post
export async function getAllPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Gagal fetch semua post");
  }
  return res.json();
}
