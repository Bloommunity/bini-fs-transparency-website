<template>
	<div class="group relative">
		<!-- Card background with gradient border -->
		<div
			class="absolute inset-0 pointer-events-none bg-gradient-to-br from-bini-teal/20 to-bini-lightTeal/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
		></div>

		<!-- Main card -->
		<div
			class="relative border border-bini-teal/20 rounded-xl p-6 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 cursor-pointer group-hover:border-bini-teal/50 group-hover:shadow-xl"
		>
			<!-- Decorative gumamela corner -->
			<div
				class="absolute top-3 right-3 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
			>
				<svg class="w-8 h-8 text-bini-teal" viewBox="0 0 100 100" fill="currentColor">
					<circle cx="50" cy="50" r="8" fill="currentColor" />
					<ellipse cx="50" cy="25" rx="12" ry="20" fill="currentColor" opacity="0.9" />
					<ellipse cx="50" cy="75" rx="12" ry="20" fill="currentColor" opacity="0.9" />
					<ellipse cx="25" cy="50" rx="20" ry="12" fill="currentColor" opacity="0.8" />
					<ellipse cx="75" cy="50" rx="20" ry="12" fill="currentColor" opacity="0.8" />
				</svg>
			</div>

			<!-- Icon with gradient -->
			<div class="mb-4 flex items-center justify-between">
				<div
					class="w-14 h-14 bg-gradient-to-br from-bini-teal/20 to-bini-lightTeal/20 rounded-lg flex items-center justify-center group-hover:from-bini-teal/40 group-hover:to-bini-lightTeal/40 transition-all"
				>
					<svg
						class="w-7 h-7 text-bini-teal"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path>
					</svg>
				</div>
				<span
					class="inline-flex items-center gap-1 px-3 py-1 bg-bini-teal/10 text-bini-teal rounded-full text-xs font-bold"
				>
					<span class="w-1.5 h-1.5 bg-bini-teal rounded-full"></span>
					Active
				</span>
			</div>

			<!-- Content -->
			<h3
				class="heading-3 mb-2 text-bini-darkTeal group-hover:text-bini-accent transition-colors"
			>
				{{ sheet.title }}
			</h3>
			<p class="text-slate-600 text-sm mb-4 line-clamp-2">
				{{ sheet.description }}
			</p>

			<!-- Footer with infinity symbol -->
			<div class="flex items-center justify-between pt-4 border-t border-bini-teal/10">
				<div class="flex items-center gap-2">
					<span class="text-xs text-bini-teal font-mono">{{ sheet.id }}</span>
					<span class="text-bini-teal/30">∞</span>
				</div>
				<svg
					class="w-5 h-5 text-bini-teal group-hover:translate-x-1 transition-transform"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					></path>
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	sheet: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.heading-3 {
	@apply text-lg font-bold;
}
</style>
