import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {TodoIndex} from "../components/todo/index.jsx";

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Hello world!</h3>
      <hr style={{border: '2px solid green'}}/>
      <TodoIndex/>
    </div>
  )
}
