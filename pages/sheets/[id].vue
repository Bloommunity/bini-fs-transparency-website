<template>
	<div
		class="min-h-screen bg-gradient-to-br from-white via-bini-teal/3 to-white">
		<!-- Header -->
		<Header />

		<header
			class="border-b border-bini-teal/15 bg-white/60 backdrop-blur-md mt-16 sticky top-0 z-40 shadow-sm">
			<div
				class="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between gap-4">
				<NuxtLink
					to="/"
					class="inline-flex items-center gap-2 text-bini-darkTeal font-bold hover:text-bini-teal transition-colors group">
					<svg
						class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<path d="M15 18l-6-6 6-6" />
					</svg>
					Back to Records
				</NuxtLink>
				<div class="text-right">
					<p
						class="text-xs uppercase tracking-wider font-semibold text-bini-teal/70">
						Financial Record
					</p>
					<h1 class="text-2xl font-black text-bini-darkTeal">
						{{ sheet?.title || "Loading..." }}
					</h1>
				</div>
			</div>
		</header>

		<main class="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-12">
			<div v-if="!sheet" class="text-center py-32">
				<div class="inline-block mb-4">
					<div
						class="w-14 h-14 border-4 border-bini-teal/20 border-t-bini-teal rounded-full animate-spin"></div>
				</div>
				<p class="text-bini-teal font-bold text-lg">Loading sheet...</p>
			</div>

			<div v-else class="space-y-12">
				<!-- Record Info Section -->
				<section
					class="rounded-2xl border border-bini-teal/15 bg-white/60 shadow-lg overflow-hidden hover:shadow-xl transition-all backdrop-blur-sm">
					<div
						class="grid gap-8 lg:grid-cols-[1.6fr_1fr] p-8 md:p-10">
						<div class="space-y-5">
							<p
								class="text-xs font-bold uppercase tracking-[0.3em] text-bini-teal">
								Record Summary
							</p>
							<h1
								class="text-4xl md:text-5xl font-black text-bini-darkTeal leading-tight">
								{{ sheet.title }}
							</h1>
							<p
								class="text-lg leading-relaxed text-slate-600 font-light">
								{{ sheet.description }}
							</p>
						</div>
						<div class="grid gap-4">
							<div
								class="group rounded-xl bg-gradient-to-br from-bini-teal/10 to-bini-lightTeal/5 p-5 border border-bini-teal/20 hover:from-bini-teal/15 hover:to-bini-lightTeal/10 transition-all hover:border-bini-teal/40">
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/70">
									Record ID
								</p>
								<p
									class="mt-3 font-mono text-sm text-bini-darkTeal break-all font-bold">
									{{ sheet.id }}
								</p>
							</div>
							<div
								class="group rounded-xl bg-gradient-to-br from-bini-lightTeal/10 to-bini-teal/5 p-5 border border-bini-teal/20 hover:from-bini-lightTeal/15 hover:to-bini-teal/10 transition-all hover:border-bini-teal/40">
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/70">
									Sheet ID
								</p>
								<p
									class="mt-3 font-mono text-sm text-bini-darkTeal break-all font-bold">
									{{ sheet.sheetId }}
								</p>
							</div>
							<div
								class="group rounded-xl bg-gradient-to-br from-bini-teal/5 to-bini-lightTeal/10 p-5 border border-bini-teal/20 hover:from-bini-teal/10 hover:to-bini-lightTeal/15 transition-all hover:border-bini-teal/40">
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/70">
									Status
								</p>
								<div
									class="mt-3 inline-flex items-center gap-2">
									<span
										class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
									<p
										class="text-sm font-bold text-bini-darkTeal">
										Public & Viewable
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="px-8 pb-8 md:px-10 md:pb-10 border-t border-bini-teal/10 pt-8">
						<div
							class="rounded-2xl bg-gradient-to-r from-bini-teal/8 to-bini-lightTeal/8 p-6 border border-bini-teal/20 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
									Review Actions
								</p>
								<p
									class="mt-2 text-base text-slate-600 font-light">
									Open the sheet source or preview it on this
									page.
								</p>
							</div>
							<div class="flex flex-wrap gap-3">
								<a
									:href="sheet.url"
									target="_blank"
									class="inline-flex items-center gap-2 bg-gradient-to-r from-bini-teal to-bini-lightTeal text-white font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-bini-teal/30 transition-all duration-200 hover:scale-105">
									<svg
										class="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
									Open Sheet
								</a>
								<a
									:href="previewLink"
									target="_blank"
									class="inline-flex items-center gap-2 border-2 border-bini-teal text-bini-teal font-bold px-6 py-3 rounded-lg hover:bg-bini-teal/5 transition-all duration-200 hover:border-bini-lightTeal">
									<svg
										class="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
									</svg>
									Preview
								</a>
							</div>
						</div>
					</div>
					<div
						class="px-8 pb-8 md:px-10 md:pb-10 border-t border-bini-teal/10 pt-8">
						<div class="grid gap-4 sm:grid-cols-3">
							<div
								class="group rounded-2xl border border-bini-teal/15 bg-gradient-to-br from-bini-teal/10 to-bini-lightTeal/5 p-6 shadow-sm">
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
									Total Donations
								</p>
								<p
									class="mt-4 text-3xl font-black text-bini-darkTeal">
									{{ formatNumber(totalDonations) }}
								</p>
							</div>
							<div
								class="group rounded-2xl border border-bini-teal/15 bg-gradient-to-br from-bini-lightTeal/10 to-bini-teal/5 p-6 shadow-sm">
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
									Total Expenses
								</p>
								<p
									class="mt-4 text-3xl font-black text-bini-darkTeal">
									{{ formatNumber(totalExpenses) }}
								</p>
							</div>
							<div
								class="group rounded-2xl border border-bini-teal/15 bg-gradient-to-br from-bini-teal/5 to-bini-lightTeal/10 p-6 shadow-sm">
								<p
									class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
									Funds Left
								</p>
								<p
									class="mt-4 text-3xl font-black text-bini-darkTeal">
									{{ formatNumber(totalFundsLeft) }}
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					class="rounded-2xl border border-bini-teal/15 bg-white/60 shadow-lg overflow-hidden hover:shadow-xl transition-all backdrop-blur-sm">
					<div
						class="px-8 md:px-10 py-6 md:py-8 bg-gradient-to-r from-bini-teal/10 to-bini-lightTeal/10 border-b border-bini-teal/15">
						<div>
							<p
								class="text-xs font-bold uppercase tracking-[0.3em] text-bini-teal/80">
								Live Spreadsheet Embed
							</p>
							<h2
								class="mt-2 text-3xl font-black text-bini-darkTeal leading-tight">
								Live Spreadsheet
							</h2>
						</div>
					</div>
					<div class="px-8 md:px-10 py-8 md:py-10">
						<div
							class="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
							<iframe
								:src="embedUrl"
								class="w-full min-h-[720px]"
								title="Google Sheet embed"
								loading="lazy"
								allowfullscreen
								style="border: 0"></iframe>
						</div>
						<p class="mt-4 text-sm text-slate-500">
							Embedded Google Sheet preview. Use the sheet tabs at
							the bottom of the embedded sheet to switch between
							Overview, Donations, Expenses, and Report.
						</p>
					</div>
				</section>
			</div>
		</main>

		<!-- Footer (revamped) -->
		<footer
			class="border-t border-bini-teal/15 bg-gradient-to-br from-bini-darkTeal via-bini-darkTeal to-bini-teal text-white mt-24">
			<div class="max-w-6xl mx-auto px-6 md:px-12 py-8">
				<div class="text-center">
					<p class="text-sm text-white/70 font-light">
						Financial record verified and publicly available. 🌺 ∞
					</p>
					<p class="text-xs text-white/60 mt-3">
						Questions?
						<a
							href="mailto:contact@bloom.example"
							class="underline hover:text-white"
							>Contact us</a
						>
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "#imports";

const route = useRoute();
const sheet = ref(null);
const loadingTotals = ref(false);
const errorTotals = ref(null);
const totalDonations = ref(0);
const totalExpenses = ref(0);
const totalFundsLeft = ref(0);

const pageTitle = computed(() =>
	sheet.value
		? `${sheet.value.title} | BLOOM TRANSPARENCY HUB`
		: "BLOOM TRANSPARENCY HUB",
);
const pageDescription = computed(
	() =>
		sheet.value?.description ||
		"Verified fan fund transparency details from BLOOM TRANSPARENCY HUB.",
);

useHead({
	title: pageTitle,
	meta: [
		{ name: "description", content: pageDescription },
		{ property: "og:title", content: pageTitle },
		{ property: "og:description", content: pageDescription },
		{ property: "og:type", content: "article" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: pageTitle },
		{ name: "twitter:description", content: pageDescription },
	],
});

const load = async () => {
	const all = await $fetch("/sheets-data.json");
	const id = route.params.id;
	sheet.value = all.find((s) => s.id === id);
};

const parseCSV = (text) => {
	if (!text) return [];
	const splitLine = (line) =>
		line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((field) =>
			field
				.trim()
				.replace(/^"(.*)"$/, "$1")
				.replaceAll('""', '"'),
		);

	return text
		.replaceAll("\r\n", "\n")
		.replaceAll("\r", "\n")
		.split("\n")
		.map(splitLine);
};

const toNumber = (val) => {
	if (val == null) return 0;
	let s = String(val).trim();
	s = s.replace(/[^0-9\-.,()]/g, "");
	if (!s) return 0;
	let neg = false;
	if (s.startsWith("(") && s.endsWith(")")) {
		neg = true;
		s = s.slice(1, -1);
	}
	s = s.replaceAll(",", "");
	const n = Number.parseFloat(s);
	if (Number.isNaN(n)) return 0;
	return neg ? -n : n;
};

const findHeaderIndex = (hdrs, keys) => {
	const lower = hdrs.map((h) => h.toLowerCase());
	for (const key of keys) {
		const idx = lower.findIndex((h) => h.includes(key));
		if (idx >= 0) return idx;
	}
	return -1;
};

const findValueInRow = (row, startIndex) => {
	for (let j = startIndex; j < Math.min(row.length, startIndex + 4); j++) {
		const value = toNumber(row[j]);
		if (value) return value;
	}
	return null;
};

const scanLabelTotals = (lines) => {
	const labels = [
		{
			key: "amount",
			patterns: [/total\s*amount/i, /^amount$/i, /amounts?/i],
		},
		{
			key: "fundsLeft",
			patterns: [
				/total\s*funds\s*left/i,
				/funds\s*left/i,
				/remaining\s*funds/i,
				/net\s*funds/i,
			],
		},
		{
			key: "donations",
			patterns: [
				/total\s*donat/i,
				/donations?/i,
				/donated/i,
				/contributions?/i,
			],
		},
		{
			key: "expenses",
			patterns: [
				/total\s*expens/i,
				/expenses?/i,
				/costs?/i,
				/spent/i,
				/expenditure/i,
			],
		},
	];

	const found = {
		amount: null,
		fundsLeft: null,
		donations: null,
		expenses: null,
	};

	for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
		const row = lines[rowIndex];
		for (let i = 0; i < row.length; i++) {
			const cell = String(row[i] || "").trim();
			if (!cell) continue;

			const label = labels.find(
				(labelEntry) =>
					found[labelEntry.key] == null &&
					labelEntry.patterns.some((re) => re.test(cell)),
			);
			if (!label) continue;

			let value = toNumber(cell) || findValueInRow(row, i + 1);
			if (!value) {
				const nextRow = lines[rowIndex + 1] || [];
				value = findValueInRow(nextRow, i);
			}

			if (value) {
				found[label.key] = value;
			}
		}
	}

	return found;
};

const fetchTotals = async () => {
	if (!sheet.value?.sheetId) return;
	loadingTotals.value = true;
	errorTotals.value = null;
	totalDonations.value = 0;
	totalExpenses.value = 0;
	totalFundsLeft.value = 0;

	try {
		const params = { sheetId: sheet.value.sheetId };
		if (sheet.value.sheetGid) params.sheetGid = sheet.value.sheetGid;
		const { csv } = await $fetch("/api/sheet-csv", {
			query: params,
		});

		const lines = parseCSV(csv);
		if (lines.length === 0) return;

		const labelTotals = scanLabelTotals(lines);
		if (
			labelTotals.donations !== null ||
			labelTotals.expenses !== null ||
			labelTotals.amount !== null ||
			labelTotals.fundsLeft !== null
		) {
			totalDonations.value = labelTotals.donations || 0;
			totalExpenses.value = labelTotals.expenses || 0;
			totalFundsLeft.value =
				labelTotals.fundsLeft != null
					? labelTotals.fundsLeft
					: totalDonations.value - totalExpenses.value;
			return;
		}

		let headerIndex = 0;
		for (let i = 0; i < lines.length; i++) {
			const nonEmpty = lines[i].filter((cell) => cell.trim()).length;
			if (nonEmpty > 0) {
				headerIndex = i;
				break;
			}
		}

		const headers = lines[headerIndex].map((h) => h.trim()).filter(Boolean);
		const rows = lines
			.slice(headerIndex + 1)
			.filter((row) => row.some((cell) => cell.trim()));

		const amountIdx = findHeaderIndex(headers, [
			"amount",
			"total amount",
			"amt",
			"amounts",
		]);
		const donIdx = findHeaderIndex(headers, [
			"donation",
			"donations",
			"donated",
			"contribution",
		]);
		const expIdx = findHeaderIndex(headers, [
			"expense",
			"expenses",
			"cost",
			"spent",
			"expenditure",
		]);
		const fundsIdx = findHeaderIndex(headers, [
			"funds left",
			"funds_left",
			"funds",
			"balance",
			"remaining",
			"available",
		]);

		let sumAmount = 0;
		let sumDon = 0;
		let sumExp = 0;
		let sumFunds = 0;

		rows.forEach((row) => {
			if (amountIdx >= 0) sumAmount += toNumber(row[amountIdx]);
			if (donIdx >= 0) sumDon += toNumber(row[donIdx]);
			if (expIdx >= 0) sumExp += toNumber(row[expIdx]);
			if (fundsIdx >= 0) sumFunds += toNumber(row[fundsIdx]);
		});

		totalDonations.value = sumDon;
		totalExpenses.value = sumExp;
		totalFundsLeft.value = fundsIdx >= 0 ? sumFunds : sumDon - sumExp;
	} catch (err) {
		console.error("Failed to fetch totals:", err);
		errorTotals.value = String(err);
	} finally {
		loadingTotals.value = false;
	}
};

const embedUrl = computed(() => {
	if (!sheet.value) return "";
	const gid = sheet.value.sheetGid;
	const gidParam = gid ? `?gid=${gid}` : "";
	return `https://docs.google.com/spreadsheets/d/${sheet.value.sheetId}/htmlembed${gidParam}`;
});

const previewLink = computed(() => {
	return sheet.value
		? `https://docs.google.com/spreadsheets/d/${sheet.value.sheetId}/preview`
		: "#";
});

const formatNumber = (value) => {
	try {
		return new Intl.NumberFormat().format(
			Math.round((value + Number.EPSILON) * 100) / 100,
		);
	} catch {
		return String(value);
	}
};

watch(
	() => route.params.id,
	() => {
		load();
	},
	{ immediate: true },
);

watch(sheet, () => {
	if (sheet.value) fetchTotals();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap");

html {
	scroll-behavior: smooth;
}

.scrollbar-hide {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
</style>
