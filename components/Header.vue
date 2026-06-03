<template>
	<nav
		class="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-bini-teal/10 shadow-sm"
	>
		<div class="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
			<NuxtLink to="/" class="flex items-center gap-4 group">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-bini-teal to-bini-darkTeal text-white shadow-lg shadow-bini-teal/20"
				>
					<span class="text-2xl font-black">∞</span>
				</div>
				<div>
					<div class="font-black text-lg text-bini-black">BLOOM</div>
					<div class="text-xs uppercase tracking-[0.32em] text-bini-teal">
						Transparency
					</div>
				</div>
			</NuxtLink>

			<div class="flex-1 min-w-0 px-4">
				<label class="sr-only" for="header-search">Search records</label>
				<div class="relative w-full max-w-2xl mx-auto">
					<span
						class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-bini-teal/70"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
							/>
						</svg>
					</span>
					<input
						id="header-search"
						type="search"
						v-model="searchQuery"
						@keydown.enter.prevent="scrollToResults"
						placeholder="Search sheets by title, description, or tab"
						class="h-12 w-full rounded-full border border-bini-teal/20 bg-white/95 pl-14 pr-24 text-sm text-bini-black shadow-sm focus:border-bini-teal focus:outline-none focus:ring-2 focus:ring-bini-teal/20"
					/>
					<button
						type="button"
						@click="scrollToResults"
						class="absolute right-1 top-1/2 -translate-y-1/2 inline-flex h-12 items-center justify-center rounded-full bg-bini-teal px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-bini-darkTeal"
					>
						Search
					</button>
				</div>
				<p v-if="searchQuery" class="mt-2 text-xs text-bini-black/60 hidden md:block">
					Press Enter or tap Search to jump to matching records.
				</p>
			</div>

			<NuxtLink
				to="/#sheets"
				class="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-bini-teal to-bini-lightTeal px-6 text-sm font-bold text-white shadow-lg shadow-bini-teal/20 transition hover:shadow-xl"
			>
				View Sheets
			</NuxtLink>
		</div>
	</nav>
</template>

<script setup>
const searchQuery = useState("sheetSearchQuery", () => "");

const scrollToResults = () => {
	if (process.client) {
		const target = document.querySelector("#sheets");
		if (target) {
			const offset = 96;
			const top = target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top, behavior: "smooth" });
		}
	}
};
</script>
