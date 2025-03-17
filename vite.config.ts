import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
	plugins: [
		TanStackRouterVite({
			// target: 'react',
			autoCodeSplitting: true, // Enable automatic code-splitting
		}),
		react(),
	],
})
// import {defineConfig} from 'vite'
// import react from '@vitejs/plugin-react'
// import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
//
// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [TanStackRouterVite(), react()],
// })
