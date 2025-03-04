// import React from "react";
import Filter from "./Filter.tsx";
import TodoList from "./TodoList.tsx";
import TotalTodos from "./TotalTodos.tsx";
import NewTodo from "./NewTodo.tsx";




export const TodoIndex = () => {
  return <div>
      <Filter/>
      <TodoList/>
      <TotalTodos/>
      <NewTodo/>
  </div>
}
