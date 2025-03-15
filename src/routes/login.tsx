import { createFileRoute } from '@tanstack/react-router'
import {LoginContainer} from "../pages/login/LoginContainer.tsx";

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>    <LoginContainer/>  </div>
}
