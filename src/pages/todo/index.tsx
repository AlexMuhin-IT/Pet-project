import FilterTodo from "../../components/todo/filterTodo.tsx";
import TodoList from "../../components/todo/todoList.tsx";
import TotalTodos from "../../components/todo/totalTodos.tsx";
import NewTodo from "../../components/todo/newTodo.tsx";

export const TodoIndex = () => {
  return <div>
      <FilterTodo/>
      <TodoList/>
      <TotalTodos/>
      <NewTodo/>
  </div>
}
