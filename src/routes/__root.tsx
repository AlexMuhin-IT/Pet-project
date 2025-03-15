// import * as React from 'react'
import {Link, Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {createContext, useState} from "react";

export const AuthContext = createContext()

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

	const login = (token) => {
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
					<ul className="headerContainer">
						<li>
							<Link to="/" activeProps={activeProps}> Home </Link>
						</li>
						<li>
							<Link to="/about" activeProps={activeProps}> O нас </Link>
						</li>
						<li>
							<Link to="/todo" activeProps={activeProps}> Todolist </Link>
						</li>
						<li>
							<Link to="/login" activeProps={activeProps}> Логин </Link>
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
