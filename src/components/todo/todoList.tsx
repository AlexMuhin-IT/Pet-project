import React from 'react';
import {TodoType, useTodos} from '../../app/store/store.tsx'


const useFilteredTodos = () => {
    const todos = useTodos((state) => state.todos);
    const filter = useTodos(state => state.filter);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'uncompleted') return !todo.completed;
        return true
    });
    return filteredTodos;
}

const TodoList = () => {
    const filteredTodos = useFilteredTodos()

    return (
        <div className="bg-red-600">
            {filteredTodos?.map((todo) => (
                <Todo key={todo.id} {...todo}/>
            ))}
        </div>

    )
};

const Todo = React.memo(({id, title, completed}:TodoType) => {
    const toggleTodo = useTodos(state => state.toggleTodo)

    return (
        <div className="bg-green-600">
            <input type='checkbox'
                   checked={completed}
                   onChange={() => toggleTodo(id)}/>
            <span className="ml-2 font-bold">{title}</span>
        </div>
    )
})
export default TodoList;