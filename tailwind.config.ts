import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'woodsmoke': {
					'50': '#f7f7f8',
					'100': '#eeeef0',
					'200': '#d9d9de',
					'300': '#b8b9c1',
					'400': '#91939f',
					'500': '#747583',
					'600': '#5e5f6b',
					'700': '#4d4e57',
					'800': '#42424a',
					'900': '#3a3a40',
					'950': '#111113',
				},
				'red': {
					'50': '#fff0f0',
					'100': '#ffdddd',
					'200': '#ffc0c0',
					'300': '#ff9494',
					'400': '#ff5757',
					'500': '#ff2323',
					'600': '#ff0000',
					'700': '#d70000',
					'800': '#b10303',
					'900': '#920a0a',
					'950': '#500000',
				},

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
