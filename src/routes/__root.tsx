// import * as React from 'react'
import {Link, Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: RootComponent,
})
const activeProps = {
	style: {
		fontWeight: 'bold',
	}
}

function RootComponent() {
	return (
		<>
			<h1>
				<ul>
					<li>
						<Link to="/" activeProps={activeProps}> Home </Link>
					</li>
					<li>
						<Link to="/about" activeProps={activeProps}> O нас </Link>
					</li>
					<li>
						<Link to="/login" activeProps={activeProps}> Логин </Link>
					</li>
				</ul>
			</h1>
			<div>
				{/*<Link to="/" activeProps={activeProps}> Home </Link>*/}
				{/*<Link to="/about" activeProps={activeProps}> O нас </Link>*/}
				{/*<Link to="/login"> Login </Link>*/}
				{/*<Link to="/todo"> Todolist </Link>*/}
			</div>
			<hr/>
			<Outlet/>
			<TanStackRouterDevtools position="bottom-right"/>
		</>
	)
}
