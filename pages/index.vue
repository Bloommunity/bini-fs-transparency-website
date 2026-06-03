<template>
	<div class="min-h-screen flex flex-col bg-slate-50 text-bini-black">
		<Header />
		<HeroSection />

		<main class="flex-1 px-6 md:px-12 pb-20 pt-10">
			<div class="max-w-6xl mx-auto space-y-16">
				<section id="sheets" class="scroll-mt-20">
					<div class="mb-10">
						<div class="inline-flex items-center gap-2 mb-4">
							<div
								class="w-1 h-8 rounded-full bg-gradient-to-b from-bini-teal to-bini-lightTeal"></div>
							<span
								class="text-sm font-bold uppercase tracking-wider text-bini-teal"
								>Available Sheets</span
							>
						</div>
						<h2
							class="text-4xl md:text-5xl font-black text-bini-darkTeal mb-3">
							Financial Records
							<span class="text-bini-lightTeal">∞</span>
						</h2>
						<p
							class="text-lg text-slate-600 max-w-2xl leading-relaxed">
							Explore transparency reports with a BLOOM-inspired
							visual system, built around trusted data, floral
							styling, and a modern teal palette.
						</p>
					</div>
					<div class="mt-6 max-w-3xl">
						<label class="sr-only" for="sheet-search"
							>Search records</label
						>
						<div class="relative">
							<span
								class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-bini-teal/70">
								<svg
									class="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
								</svg>
							</span>
							<input
								id="sheet-search"
								type="search"
								v-model="searchQuery"
								@keydown.enter.prevent="scrollToResults"
								placeholder="Search records by title, description, or tab names"
								class="w-full rounded-3xl border border-bini-teal/20 bg-white py-4 pl-14 pr-5 text-base text-bini-black shadow-sm focus:border-bini-teal focus:outline-none focus:ring-2 focus:ring-bini-teal/20" />
						</div>
						<p class="mt-3 text-sm text-slate-500">
							Search by title, description, id, or tab names.
						</p>
					</div>

					<div
						class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
						<p class="text-sm text-slate-600">
							Showing
							<span class="font-semibold text-bini-darkTeal">{{
								filteredSheets.length
							}}</span>
							of
							<span class="font-semibold text-bini-darkTeal">{{
								validSheets.length
							}}</span>
							available records.
						</p>
						<p class="text-sm text-slate-500">
							Type a keyword and results will appear below.
						</p>
					</div>
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<NuxtLink
							v-for="(sheet, index) in filteredSheets"
							:key="sheet.id"
							:to="`/sheets/${sheet.id}`"
							class="block cursor-pointer"
							:style="{ animationDelay: `${index * 100}ms` }">
							<GumamelaCard :sheet="sheet" />
						</NuxtLink>
					</div>

					<div
						v-if="filteredSheets.length === 0"
						class="text-center py-20">
						<div
							class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-bini-teal/10">
							<svg
								class="h-10 w-10 text-bini-teal/50"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<p class="text-bini-darkTeal/60 font-semibold text-lg">
							No sheets available yet
						</p>
						<p class="text-slate-500 mt-2">
							Check back soon for the latest BLOOM transparency
							records.
						</p>
					</div>
				</section>
			</div>
		</main>

		<footer
			class="border-t border-bini-teal/15 bg-gradient-to-br from-bini-darkTeal via-bini-darkTeal to-bini-teal text-white mt-24">
			<div class="max-w-6xl mx-auto px-6 md:px-12 py-12">
				<div
					class="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
					<div class="max-w-xl">
						<div
							class="flex items-center gap-2 mb-4 group cursor-default">
							<span class="text-3xl font-black">∞</span>
							<span class="font-black text-xl"
								>BLOOM TRANSPARENCY HUB</span
							>
						</div>
						<p
							class="text-white/75 text-base leading-relaxed font-light">
							A transparent hub for BLOOM fan fund management
							built on community trust and financial integrity.
						</p>
					</div>

					<div class="flex flex-col gap-3">
						<h4 class="font-bold text-lg">Connect</h4>
						<p class="text-white/75">
							Have questions or found an issue? Reach out to the
							community.
						</p>
						<div class="mt-3 flex gap-4">
							<a
								href="mailto:contact@bloom.example"
								class="text-white/90 hover:text-white font-medium"
								>Email</a
							>
							<a
								href="#"
								class="text-white/90 hover:text-white font-medium"
								>Community</a
							>
						</div>
					</div>
				</div>

				<div class="border-t border-white/10 pt-8 mt-8">
					<p class="text-center text-white/60 text-sm font-light">
						© 2026 BLOOM TRANSPARENCY HUB. Rooted in trust and
						integrity. ∞
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import HeroSection from "~/components/HeroSection.vue";
import GumamelaCard from "~/components/GumamelaCard.vue";
import { computed, onMounted } from "vue";
import { useHead } from "#imports";

useHead({
	title: "BLOOM TRANSPARENCY HUB | Open Fan-Funding Transparency",
	meta: [
		{
			name: "description",
			content:
				"BLOOM TRANSPARENCY HUB publishes verified fan fund records, live sheet previews, and open financial accountability for community trust.",
		},
		{
			property: "og:title",
			content: "BLOOM TRANSPARENCY HUB | Open Fan-Funding Transparency",
		},
		{
			property: "og:description",
			content:
				"BLOOM TRANSPARENCY HUB publishes verified fan fund records, live sheet previews, and open financial accountability for community trust.",
		},
		{ property: "og:type", content: "website" },
		{
			name: "twitter:title",
			content: "BLOOM TRANSPARENCY HUB | Open Fan-Funding Transparency",
		},
		{
			name: "twitter:description",
			content:
				"BLOOM TRANSPARENCY HUB publishes verified fan fund records, live sheet previews, and open financial accountability for community trust.",
		},
	],
});

const sheets = useState("sheetSearchSheets", () => []);
const searchQuery = useState("sheetSearchQuery", () => "");

const validSheets = computed(() =>
	sheets.value.filter((sheet) => sheet?.url && sheet?.sheetId && sheet?.id),
);

const normalizedQuery = computed(() => searchQuery.value.trim().toLowerCase());

const filteredSheets = computed(() => {
	if (!normalizedQuery.value) {
		return validSheets.value;
	}

	return validSheets.value.filter((sheet) => {
		const searchableText = [
			sheet.id,
			sheet.title,
			sheet.description,
			sheet.url,
			...(sheet.tabs || []).map((tab) => tab.title),
		]
			.join(" ")
			.toLowerCase();

		return searchableText.includes(normalizedQuery.value);
	});
});

const scrollToResults = () => {
	if (process.client) {
		const target = document.querySelector("#sheets");
		if (target) {
			const offset = 96;
			const top =
				target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top, behavior: "smooth" });
		}
	}
};

const load = async () => {
	try {
		const data = await $fetch("/sheets-data.json");
		sheets.value = Array.isArray(data) ? data : [];
	} catch (e) {
		console.error("Failed to load sheets:", e);
	}
};

onMounted(() => {
	load();
});
</script>

<style scoped>
::-webkit-scrollbar {
	width: 8px;
}

::-webkit-scrollbar-track {
	background: transparent;
}

::-webkit-scrollbar-thumb {
	background: #00796b;
	border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
	background: #004d40;
}

.line-clamp-2 {
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.card-hover {
	animation: slideUp 0.6s ease-out forwards;
	opacity: 0;
}

@keyframes slideUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
