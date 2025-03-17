import {create} from 'zustand'
import FilterTodo from "../../components/todo/filterTodo.tsx";

export interface TodoType {
	id: number
	title: string;
	completed: boolean;
}

type FilterTodo = 'all' | 'completed' | 'uncompleted'

interface State {
	todos: TodoType[];
	filter: FilterTodo;
	loading: boolean;
	error: string | null;
}

interface Actions {
	addTodo: (title: string) => void;
	toggleTodo: (todoId: number) => void;
	setFilter: (filter: FilterTodo) => void
}

type Store = State & Actions;
export const useTodos = create<Store>((set, get) => ({
	todos: [
		{id: 1, title: 'Alex_Myxin', completed: false},
		{id: 2, title: 'Sanya_Limon', completed: false},
		{id: 3, title: 'Dimon_Dobro', completed: false},
	],
	filter: 'all',
	loading: false,
	error: null,
	addTodo: (title) => {
		const newTodo = {id: Number(new Date()), title, completed: false}
		set({todos: [...get().todos, newTodo]})
	},
	toggleTodo: (todoId) => set({
		todos: get().todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo),
	}),
	setFilter: (filter) => set({filter}),

}))
export type PostType = {
	userId?: number,
	id: number,
	title: string,
	body: string,
}
type PostsType = {
	posts: PostType[],
}
type ActionPostType = {
	fetchData: () => void,
}
type usePostsType = PostsType & ActionPostType

export const useDataPosts = create<usePostsType>((set) => ({
	posts: [],
	fetchData: async () => {
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts')
			const data = await res.json();
			set({posts: data})
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
		}
	}
}))