import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'pink-gradient': 'linear-gradient(to right, #AF7AF1, #CA2D6B)',
				'bg-img': 'url("/images/bg-img.png")',
			},
			colors: {
				'bg-main': '#151515',
				green: '#00b894',
				btns: '#2E2E34',
				'blue-purple-mix': '#5B62DE',
				'gray-46': '#2E2E34',
			},
			screens: {
				landscape: { raw: '(orientation: landscape)' },
			},
		},
	},
	plugins: [],
};
export default config;
