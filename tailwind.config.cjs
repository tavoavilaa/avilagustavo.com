/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		colors: {
			'spring-green': {
				'50': '#edfff8',
				'100': '#d5fff2',
				'200': '#aeffe4',
				'300': '#70ffd1',
				'400': '#2bfdb7',
				'500': '#02ffab',
				'600': '#00c07c',
				'700': '#009664',
				'800': '#067551',
				'900': '#076045',
				'950': '#003725',
			},
			'tiber': {
				'50': '#ecffff',
				'100': '#cefcff',
				'200': '#a3f8fe',
				'300': '#64eefc',
				'400': '#1ddcf3',
				'500': '#01bfd9',
				'600': '#0498b6',
				'700': '#0b7a93',
				'800': '#136277',
				'900': '#145165',
				'950': '#052834',
			},
			
			
		  },
		
	},
	plugins: [require('flowbite/plugin')],
}
