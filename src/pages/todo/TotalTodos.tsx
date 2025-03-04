// import React from 'react';

import {useTodos} from "../../store.js";

const TotalTodos = () => {
const count = useTodos(state => state.todos.length);
	return (
		<div>
			<span>Count: {count}</span>
		</div>
	);
};

export default TotalTodos;