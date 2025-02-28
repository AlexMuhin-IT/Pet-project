// import React from 'react';
// import {useRef} from "react";
import {useTodos} from '../../store.js'
import {useRef} from "react";


const NewTodo = () => {
    const ref = useRef()
    const addTodo = useTodos((state) => state.addTodo)

    const handleAddTodo = () => {
        // onClose()
        addTodo(ref.current.value)
    }
    return (
        <>
            <input placeholder="Add a new todo..."
                   ref={ref}
                   onKeyDown={(e)=> e.key === 'Enter' && handleAddTodo }
                   // onChange={handleAddTodo}
            />
            <button onClick={handleAddTodo}>Add Todos</button>
        </>
    );
};

export default NewTodo;