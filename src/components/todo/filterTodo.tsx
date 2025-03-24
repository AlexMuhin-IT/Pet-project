// import React from 'react';
import '../../app/app.css'
import {useTodos} from "../../app/store/store.tsx";
import {Button} from "../common";

const FilterTodo = () => {
	const {filter, setFilter} = useTodos()
	return (
		<div className='filterContainer m-6 '>
			<h1 className="m-auto flex justify-center gap-10 text-4xl text-black-200 bg-green-200 mb-4">Filter</h1>
			<Button name={"All"}
			        disabled={filter === 'all'}
			        onClick={() => setFilter('all')}
			        className="border-2 rounded-md p-2 mb-2 w-40 hover:bg-fuchsia-500"
			/>
			<Button name={"Uncompleted"}
			        disabled={filter === 'uncompleted'}
			        onClick={() => setFilter('uncompleted')}
			        className="border-2 rounded-md p-2 mb-2 w-40 hover:bg-fuchsia-500"
			/>
			<Button name={"Completed"}
			        disabled={filter === 'completed'}
			        onClick={() => setFilter('completed')}
			        className="border-2 rounded-md p-2 mb-2 w-40 hover:bg-fuchsia-500"
			/>
		</div>
	);
};

export default FilterTodo;