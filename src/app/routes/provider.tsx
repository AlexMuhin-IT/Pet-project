import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen.ts";

const router = createRouter({
	routeTree,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
export const RouterProviderApp = ()=>{

	return (
		<RouterProvider router={router} />
	)
}