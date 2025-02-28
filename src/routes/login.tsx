import { createFileRoute } from '@tanstack/react-router'
import {LoginComponent} from "../pages/login/login.tsx";

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><LoginComponent/></div>
}
