import { getDetailPost, Post } from "@/app/lib/api";

interface PageProps {
  params: {
    id: string; // id dari URL selalu string
  };
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const { id } = params;

  // tunggu hasil fetch
  const post: Post = await getDetailPost(id);

  console.log("ID dari URL:", id);
  console.log("Post detail:", post);

  return (
    <div className="pos-detail">
      <h1>{post.title}</h1>
      <div className="content">{post.body}</div>
    </div>
  );
}
