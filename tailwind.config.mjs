/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'calculator' : '0px 32px 43px 0px rgba(79, 166, 175, 0.20)'
			},
			colors: {
				'primary' : '#00474B',
				'secondary' : '#5E7A7D',
				'background' : '#F3F9FA',
				'accent' : '#26C2AE',
				'accent-2' : '#9FE8DF',
				'error' : '#E17457',
				'muted' : '#7F9D9F',
			},
		},
	},
	plugins: [],
}
