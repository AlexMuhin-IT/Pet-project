// import * as React from 'react'

import { createFileRoute } from '@tanstack/react-router'
import {Posts} from "./posts.tsx";

export const Route = createFileRoute('/posts')({
  component: PostsPage,
})

function PostsPage() {
  return (
    <>
      <h1>New post</h1>
      <Posts/>
    </>

  )
}
