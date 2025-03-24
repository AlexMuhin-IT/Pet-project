import { createFileRoute } from '@tanstack/react-router'
import Home from "../components/home/home.tsx";

export const Route = createFileRoute('/')({
  component:  App
})

function App() {
  return (
    <div className="p-2">
      <Home/>
    </div>
  )
}
