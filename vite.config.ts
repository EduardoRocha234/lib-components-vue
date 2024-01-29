import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import {defineConfig} from 'vite'

export default defineConfig({
	plugins: [vue(), dts()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'LibComponentsVue',
			fileName: 'lib-components-vue',
		},
		rollupOptions: {
			external: ['vue', 'tailwindcss'],
			output: {
				globals: {
					vue: 'Vue',
					tailwindcss: 'TailwindCSS',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
