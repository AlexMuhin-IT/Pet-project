import {useTodos} from '../../app/store/store.tsx'
import {useState} from "react";


const NewTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const addTodo = useTodos((state) => state.addTodo)

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    }
    return (
        <>
            <input placeholder="Add a new todo..."
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todos</button>
        </>
    );
};

export default NewTodo;