import {useTodos} from '../../app/store/store.tsx'
import {useState} from "react";
import {Button} from "../common";


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
		<div className=" w-96 flex justify-center">
			<input
				className="border-2 rounded-md p-2 mr-2 mb-2"
				placeholder="Add a new todo..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button
				name={"Add Todos"}
				onClick={handleAddTodo}
				className="border-2 rounded-md p-2 mb-2 w-40 hover:bg-fuchsia-500"
			/>
			{/*<button onClick={handleAddTodo}>Add Todos</button>*/}
		</div>
	);
};

export default NewTodo;