module.exports = {
	content: [
		"./components/**/*.{vue,js}",
		"./pages/**/*.{vue,js}",
		"./app.vue",
		"./nuxt.config.ts",
	],
	theme: {
		extend: {
			colors: {
				primary: "#008080",
				bini: {
					teal: "#00796B",
					darkTeal: "#004D40",
					lightTeal: "#4DB8AA",
					black: "#0B0B0B",
					white: "#FFFFFF",
					accent: "#00BFA5",
				},
			},
			animation: {
				infinity: "infinity 4s ease-in-out infinite",
				float: "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
			},
			keyframes: {
				infinity: {
					"0%, 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(10px)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
					"50%": { transform: "translateY(-10px) rotate(5deg)" },
				},
				"pulse-glow": {
					"0%, 100%": { "box-shadow": "0 0 0 0 rgba(0, 201, 165, 0.4)" },
					"50%": { "box-shadow": "0 0 0 10px rgba(0, 201, 165, 0)" },
				},
			},
		},
	},
	plugins: [],
};
