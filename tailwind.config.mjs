// -*- mode: typescript-ts -*-
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
	// https://uicolors.app
	// https://www.w3schools.com/colors/colors_picker.asp
	colors: {
	    transparent: 'transparent',
	    current: 'currentColor',
	    black: colors.black,
	    white: colors.white,
	    gray: colors.gray,
	    darkgray: '#35363C', // rgb(53, 54, 60) hsl(231, 6%, 22%)
	},
    },
    plugins: [],
}
