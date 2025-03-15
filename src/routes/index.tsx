// import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Home from "../components/Home/Home.tsx";

export const Route = createFileRoute('/')({
  component:  Home
})

function App() {
  return (
    <div className="p-2">
      <Home/>
    </div>
  )
}
