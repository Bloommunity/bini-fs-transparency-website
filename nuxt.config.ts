import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	compatibilityDate: "2026-05-26",
	ssr: false,
	experimental: {
		viteEnvironmentApi: true,
	},
	devtools: { enabled: false },
	css: ["~/assets/css/tailwind.css"],
	modules: [],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	tailwindcss: {
		config: {
			theme: {
				extend: {
					colors: {
						teal: {
							50: "#f0fdfa",
							100: "#ccfbf1",
							200: "#99f6e4",
							300: "#5eead4",
							400: "#2dd4bf",
							500: "#14b8a6",
							600: "#0d9488",
							700: "#0f766e",
							800: "#115e59",
							900: "#134e4a",
						},
					},
					fontFamily: {
						sans: ["Inter", "system-ui", "sans-serif"],
					},
					boxShadow: {
						sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
						md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
						lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
						xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
					},
				},
			},
		},
	},
	app: {
		head: {
			title: "BLOOM TRANSPARENCY HUB",
			titleTemplate: "%s | BLOOM TRANSPARENCY HUB",
			htmlAttrs: { lang: "en" },
			meta: [
				{ charset: "utf-8" },
				{
					name: "description",
					content:
						"BLOOM TRANSPARENCY HUB shares verified fan fund records with clear reporting, live sheet previews, and open ledger transparency for trusted community oversight.",
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "keywords",
					content:
						"transparency hub, fan fund tracking, financial records, open ledger, Google Sheets preview, community trust",
				},
				{ name: "theme-color", content: "#0d9488" },
				{ property: "og:title", content: "BLOOM TRANSPARENCY HUB" },
				{
					property: "og:description",
					content:
						"Verified fan-fund transparency built around clear financial records, live sheet previews, and open community trust.",
				},
				{ property: "og:type", content: "website" },
				{ name: "robots", content: "index,follow" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "BLOOM TRANSPARENCY HUB" },
				{
					name: "twitter:description",
					content:
						"Verified fan-fund transparency built around clear financial records, live sheet previews, and open community trust.",
				},
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
				},
			],
		},
	},
});
