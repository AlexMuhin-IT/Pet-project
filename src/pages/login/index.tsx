import { createFileRoute } from '@tanstack/react-router'
import {Login} from "./login.tsx";

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  return <Login/>
}
