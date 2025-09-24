import {getDetailPost} from "@/app/lib/api"


interface PageProps {
  params: {
    id: string; // id dari URL selalu string, nanti bisa dikonversi ke number kalau perlu
  };
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const { id } = params;
  const post = getDetailPost(id)
  console.log(post)

  console.log("ID dari URL:", id);

  return (
    <div>
      <h1>Detail Post ID: {id}</h1>
    </div>
  );
}
