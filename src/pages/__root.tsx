// import * as React from 'react'
import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {createContext, useState} from "react";
import {AuthContextType} from "../app/api/home/type/type.ts";

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: false,
	login: () => {
	},
	logout: () => {
	},
});

export const Route = createRootRoute({
	component: RootComponent,
})


function RootComponent() {
	const [isAuthenticated, setAuthenticated] = useState(false)


	const activeProps = {
		style: {
			fontWeight: 'bold',
		}
	}
	const login = (token: string) => {
		localStorage.setItem('token', token)
		setAuthenticated(true)
	}
	const logout = () => {
		localStorage.removeItem('token');
		setAuthenticated(false)
	}

	return (
		<AuthContext.Provider value={{isAuthenticated, login, logout}}>
			<header>
				<div>
					<ul className="m-auto flex justify-center gap-10 text-4xl">
						{/*<li>*/}
						{/*	<Link to="/login" activeProps={activeProps}> Логин </Link>*/}
						{/*</li>*/}
						<li className="">
							<Link to="/" activeProps={activeProps}> Home </Link>
						</li>
						<li>
							<Link to="/about" activeProps={activeProps}> O нас </Link>
						</li>
						<li>
							<Link to="/todo" activeProps={activeProps}> Todolist </Link>
						</li>
						<li>
							<Link to="/post" activeProps={activeProps}> Posts </Link>
						</li>
					</ul>
				</div>
				<hr/>
				<div>
					<Outlet/>
					<TanStackRouterDevtools position="bottom-right"/>
				</div>
			</header>
		</AuthContext.Provider>
	)
}
