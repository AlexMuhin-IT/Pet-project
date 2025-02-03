import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todo/')({
  component: TodoIndex,
})

function TodoIndex() {
  return <div>Hello "/todo/"!</div>
}
