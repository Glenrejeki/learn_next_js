import React from "react"
import { getDetailPost } from "@/app/lib/api"

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps): Promise<React.ReactElement> {
  const { id } = params
  const post = await getDetailPost(id)

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <div className="content">{post.body}</div>
    </div>
  )
}
