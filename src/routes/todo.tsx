import { createFileRoute } from '@tanstack/react-router'
import {TodoIndex} from "../pages/todo/";

export const Route = createFileRoute('/todo')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div>
        <h3>Hello world!</h3>
        <hr style={{border: '2px solid green'}}/>
        <TodoIndex/>
    </div>
  )
}
