// import React from 'react';

import {useTodos} from "../../app/store/store.tsx";

const TotalTodos = () => {
const count = useTodos(state => state.todos.length);
	return (
		<div>
			<span className="ml-2 font-bold"> Count: <symbol className="text-red-400">{count}</symbol></span>
		</div>
	);
};

export default TotalTodos;