import { createFileRoute } from '@tanstack/react-router'
import {TodoIndex} from "./index.tsx";
import "tailwindcss";

export const Route = createFileRoute('/todo')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div>
        <h3 className="text-5xl bg-red-400 text-center border-b-4 border-red-400 hover:border-green-400">Hello world!</h3>
        {/*<hr />*/}
        <TodoIndex/>
    </div>
  )
}
