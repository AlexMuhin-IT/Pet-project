// import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProviderApp} from "./routes/provider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = (
	<QueryClientProvider client={queryClient}>
		<RouterProviderApp/>
	</QueryClientProvider>
)

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(App)
}
