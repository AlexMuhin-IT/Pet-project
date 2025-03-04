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
		<header>
			<div >
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
	)
}
