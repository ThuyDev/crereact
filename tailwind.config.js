module.exports = {
	purge: ['./src/**/*.{js,jsx,html}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'Helvetica', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
