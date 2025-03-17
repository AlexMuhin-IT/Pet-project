// import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProviderApp} from "./routes/provider.tsx";

const App = (<RouterProviderApp />)
const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(App)
}
