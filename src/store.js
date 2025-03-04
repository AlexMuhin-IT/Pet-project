import {create} from 'zustand'
import filter from "./components/todo/Filter.jsx";

export const useTodos = create((set, get) => ({
     todos: [
        {id: 1, title: 'Alex_Myxin', completed: false},
        {id: 2, title: 'Sanya_Limon', completed: false},
        {id: 3, title: 'Dimon_Dobro', completed: false},
    ],
    filter: 'all',
    loading: false,
    error: null,

    addTodo: (title) => {
        const newTodo = {id: new Date(), title, completed: false}
        // console.log("Adding todo:", newTodo);
        set({todos: [...get().todos, newTodo]})
    },
    toggleTodo: (todoId) => set({
        todos: get().todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo),
    }),

    setFilter: (filter)=>set({filter}),

}))
