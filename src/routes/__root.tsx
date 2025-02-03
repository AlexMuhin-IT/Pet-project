// import * as React from 'react'
import {Link, Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<>
			<div>
				<Link to="/"> Home </Link>
				<Link to="/about"> O нас </Link>
				<Link to="/login"> Login </Link>
			</div>
			<hr/>
			<Outlet/>
			<TanStackRouterDevtools position="bottom-right"/>
		</>
	)
}
