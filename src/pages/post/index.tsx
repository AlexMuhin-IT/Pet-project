// import * as React from 'react'

import { createFileRoute } from '@tanstack/react-router'
import {Posts} from "./posts.tsx";

export const Route = createFileRoute('/posts')({
  component: PostsPage,
})

function PostsPage() {
  return (
    <>
      <h1 className="m-auto flex justify-center gap-10 text-4xl text-black-200 bg-green-200">New post</h1>
      <Posts/>
    </>

  )
}
