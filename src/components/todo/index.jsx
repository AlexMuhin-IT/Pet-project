import React from "react";
import { createFileRoute } from '@tanstack/react-router'
import Filter from "./Filter.jsx";
import TodoList from "./TodoList.jsx";
import TotalTodos from "./TotalTodos.jsx";
import NewTodo from "./NewTodo.jsx";




export function TodoIndex() {
  return <div>
      <Filter/>
      <TodoList/>
      <TotalTodos/>
      <NewTodo/>
  </div>
}
