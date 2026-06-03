<template>
	<div>
		<div v-if="loading" class="py-24 text-center">
			<div class="inline-block mb-4">
				<svg
					class="w-10 h-10 animate-spin text-bini-teal"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</div>
			<p class="text-base font-bold text-bini-teal">Fetching sheet data...</p>
		</div>

		<div
			v-else-if="error"
			class="py-16 px-6 bg-gradient-to-br from-red-50 to-red-50/50 rounded-2xl border border-red-200 text-center"
		>
			<div
				class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4"
			>
				<svg
					class="w-6 h-6 text-red-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4v2m0 4v2M6.75 15H4.5A2.25 2.25 0 012.25 12.75V11.1c0-.366.298-.75.75-.75h15c.452 0 .75.384.75.75v1.65A2.25 2.25 0 0119.5 15h-2.25m-13.5-4h2.25m13.5 0h-2.25"
					/>
				</svg>
			</div>
			<p class="text-base font-bold text-red-800 mb-2">Failed to load sheet data</p>
			<p class="text-sm text-red-600 mb-4">{{ error }}</p>
			<button
				@click="refresh"
				class="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
				Try Again
			</button>
		</div>

		<div
			v-else-if="rows.length === 0"
			class="py-16 px-6 bg-gradient-to-br from-bini-teal/10 to-bini-lightTeal/5 rounded-2xl border border-bini-teal/20 text-center"
		>
			<div
				class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bini-teal/20 mb-4"
			>
				<svg
					class="w-6 h-6 text-bini-teal"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
					/>
				</svg>
			</div>
			<p class="text-base font-bold text-bini-teal">No data found</p>
			<p class="text-sm text-bini-teal/70 mt-2">This sheet appears to be empty.</p>
		</div>

		<div v-else class="space-y-6">
			<!-- Key Metrics -->
			<div class="grid gap-4 sm:grid-cols-3">
				<div
					class="group rounded-xl border border-bini-teal/20 bg-gradient-to-br from-bini-teal/10 to-bini-lightTeal/5 p-5 hover:from-bini-teal/15 hover:to-bini-lightTeal/10 hover:border-bini-teal/40 transition-all hover:shadow-md"
				>
					<p class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
						Total Donations
					</p>
					<p
						class="mt-3 text-3xl font-black text-bini-darkTeal group-hover:scale-105 transition-transform origin-left"
					>
						{{ formatNumber(totalDonations) }}
					</p>
				</div>
				<div
					class="group rounded-xl border border-bini-teal/20 bg-gradient-to-br from-bini-lightTeal/10 to-bini-teal/5 p-5 hover:from-bini-lightTeal/15 hover:to-bini-teal/10 hover:border-bini-teal/40 transition-all hover:shadow-md"
				>
					<p class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
						Total Expenses
					</p>
					<p
						class="mt-3 text-3xl font-black text-bini-darkTeal group-hover:scale-105 transition-transform origin-left"
					>
						{{ formatNumber(totalExpenses) }}
					</p>
				</div>
				<div
					class="group rounded-xl border border-bini-teal/20 bg-gradient-to-br from-bini-teal/5 to-bini-lightTeal/10 p-5 hover:from-bini-teal/10 hover:to-bini-lightTeal/15 hover:border-bini-teal/40 transition-all hover:shadow-md"
				>
					<p class="text-xs uppercase tracking-wider font-bold text-bini-teal/80">
						Funds Left
					</p>
					<p
						class="mt-3 text-3xl font-black text-bini-darkTeal group-hover:scale-105 transition-transform origin-left"
					>
						{{ formatNumber(totalFundsLeft) }}
					</p>
				</div>
			</div>

			<div
				class="rounded-2xl border border-bini-teal/15 bg-bini-teal/5 p-6 text-slate-700 shadow-sm"
			>
				<p class="text-sm font-medium">Table view removed — displaying totals only.</p>
				<p class="mt-2 text-xs text-slate-500">
					Live totals are computed from the sheet export. If the sheet data fails to load,
					the debug panel below will help identify the issue.
				</p>
			</div>

			<div class="mt-6 text-right">
				<button
					@click="showDebug = !showDebug"
					class="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
				>
					{{ showDebug ? "Hide debug panel" : "Show debug panel" }}
				</button>
				<div
					v-if="showDebug"
					class="mt-4 bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 space-y-3"
				>
					<p><span class="font-semibold">Headers:</span> {{ headers.length }} columns</p>
					<p><span class="font-semibold">Rows:</span> {{ rows.length }} parsed rows</p>
					<p><span class="font-semibold">Sheet ID:</span> {{ props.sheet.sheetId }}</p>
					<p>
						<span class="font-semibold">Raw CSV length:</span>
						{{ rawCsv.length }} characters
					</p>
					<button
						@click="showRaw = !showRaw"
						type="button"
						class="mt-2 px-3 py-1 bg-bini-teal/10 text-bini-teal rounded-lg"
					>
						{{ showRaw ? "Hide raw CSV" : "Show raw CSV sample" }}
					</button>
					<div
						v-if="showRaw"
						class="mt-3 bg-white rounded-xl border border-slate-200 p-3 overflow-auto max-h-64 font-mono text-[11px] leading-relaxed text-slate-700"
					>
						<pre>{{ rawCsv.slice(0, 1200) || "No raw CSV available yet" }}</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({ sheet: { type: Object, required: true } });

const loading = ref(false);
const error = ref(null);
const headers = ref([]);
const rows = ref([]);

const totalDonations = ref(0);
const totalExpenses = ref(0);
const totalFundsLeft = ref(0);
const rawCsv = ref("");
const showDebug = ref(false);
const showRaw = ref(false);

// Parse CSV with proper handling of quoted fields
const parseCSV = (text) => {
	const lines = [];
	let currentLine = [];
	let currentField = "";
	let insideQuotes = false;

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const nextChar = text[i + 1];

		if (char === '"') {
			if (insideQuotes && nextChar === '"') {
				// Escaped quote
				currentField += '"';
				i++;
			} else {
				// Toggle quote state
				insideQuotes = !insideQuotes;
			}
		} else if (char === "," && !insideQuotes) {
			// Field separator
			currentLine.push(currentField);
			currentField = "";
		} else if ((char === "\n" || char === "\r") && !insideQuotes) {
			// Line separator
			if (currentField || currentLine.length > 0) {
				currentLine.push(currentField);
				lines.push(currentLine);
				currentLine = [];
				currentField = "";
			}
			// Skip CRLF
			if (char === "\r" && nextChar === "\n") {
				i++;
			}
		} else {
			currentField += char;
		}
	}

	// Add last field and line
	if (currentField || currentLine.length > 0) {
		currentLine.push(currentField);
		lines.push(currentLine);
	}

	return lines;
};

const toNumber = (val) => {
	if (val == null) return 0;
	let s = String(val).trim();
	s = s.replace(/[^0-9\-\.\,\(\)]/g, "");
	if (!s) return 0;
	let neg = false;
	if (s.startsWith("(") && s.endsWith(")")) {
		neg = true;
		s = s.slice(1, -1);
	}
	s = s.replace(/,/g, "");
	const n = parseFloat(s);
	if (isNaN(n)) return 0;
	return neg ? -n : n;
};

const findHeaderIndex = (hdrs, keys) => {
	const lower = hdrs.map((h) => h.toLowerCase());
	for (const k of keys) {
		const idx = lower.findIndex((h) => h.includes(k));
		if (idx >= 0) return idx;
	}
	return -1;
};

const fetchCsv = async () => {
	loading.value = true;
	error.value = null;
	headers.value = [];
	rows.value = [];

	const csvUrl = `/api/sheet-csv?sheetId=${encodeURIComponent(props.sheet.sheetId)}${props.sheet.sheetGid ? `&sheetGid=${encodeURIComponent(props.sheet.sheetGid)}` : ""}`;
	if (!props.sheet.sheetId) {
		error.value = "Invalid sheet ID";
		loading.value = false;
		return;
	}

	try {
		const { csv } = await $fetch(csvUrl, { method: "GET" });
		rawCsv.value = csv;
		const lines = parseCSV(csv);

		if (lines.length === 0) {
			error.value = "Sheet is empty";
			loading.value = false;
			return;
		}

		// Find first non-empty row to use as headers
		let headerIndex = 0;
		for (let i = 0; i < lines.length; i++) {
			const nonEmptyCells = lines[i].filter((cell) => cell.trim());
			if (nonEmptyCells.length > 0) {
				headerIndex = i;
				break;
			}
		}

		headers.value = lines[headerIndex].map((h) => h.trim()).filter((h) => h);
		rows.value = lines.slice(headerIndex + 1).filter((row) => row.some((cell) => cell.trim()));

		// Scan all parsed lines for label-style totals
		const scanLabelTotals = (allLines) => {
			let found = { donations: null, expenses: null, funds: null };
			const labelMatches = [
				{
					key: "donations",
					patterns: [/total\s*donat/i, /total\s*donations/i, /total\s*donation/i],
				},
				{ key: "expenses", patterns: [/total\s*expens/i, /total\s*expense/i, /less/i] },
				{
					key: "funds",
					patterns: [
						/total\s*funds?\s*left/i,
						/funds\s*left/i,
						/total\s*funds/i,
						/remaining/i,
						/balance/i,
					],
				},
			];

			for (const row of allLines) {
				for (let c = 0; c < row.length; c++) {
					const cell = String(row[c] || "").trim();
					if (!cell) continue;
					for (const lm of labelMatches) {
						if (found[lm.key] != null) continue;
						if (lm.patterns.some((re) => re.test(cell))) {
							let val = null;
							val = toNumber(cell);
							if (!val) {
								for (let n = c + 1; n < Math.min(row.length, c + 4); n++) {
									const v = toNumber(row[n]);
									if (v) {
										val = v;
										break;
									}
								}
							}
							if (val) found[lm.key] = val;
						}
					}
				}
			}
			return found;
		};

		const labelTotals = scanLabelTotals(lines);
		if (
			labelTotals.donations != null ||
			labelTotals.expenses != null ||
			labelTotals.funds != null
		) {
			totalDonations.value = labelTotals.donations || 0;
			totalExpenses.value = labelTotals.expenses || 0;
			totalFundsLeft.value =
				labelTotals.funds != null
					? labelTotals.funds
					: totalDonations.value - totalExpenses.value;
			loading.value = false;
			return;
		}

		// Compute totals based on heuristics for header names
		const donIdx = findHeaderIndex(headers.value, [
			"donation",
			"donations",
			"amount",
			"donated",
			"contribution",
		]);
		const expIdx = findHeaderIndex(headers.value, [
			"expense",
			"expenses",
			"cost",
			"spent",
			"expenditure",
		]);
		const fundsIdx = findHeaderIndex(headers.value, [
			"funds left",
			"funds_left",
			"funds",
			"balance",
			"remaining",
			"available",
		]);

		let sumDon = 0;
		let sumExp = 0;
		let sumFunds = 0;

		rows.value.forEach((row) => {
			if (donIdx >= 0) sumDon += toNumber(row[donIdx]);
			if (expIdx >= 0) sumExp += toNumber(row[expIdx]);
			if (fundsIdx >= 0) sumFunds += toNumber(row[fundsIdx]);
		});

		if (fundsIdx < 0) {
			sumFunds = sumDon - sumExp;
		}

		totalDonations.value = sumDon;
		totalExpenses.value = sumExp;
		totalFundsLeft.value = sumFunds;

		if (headers.value.length === 0) {
			if (rows.value.length > 0) {
				headers.value = rows.value[0].map((_, idx) => `Column ${idx + 1}`);
			} else {
				error.value = "No data found in this sheet";
			}
		}
	} catch (err) {
		console.error("Failed to fetch CSV:", err);
		let msg = "Failed to fetch sheet data. Make sure the sheet is publicly viewable.";
		try {
			if (err?.data?.message) msg = err.data.message;
			else if (err?.message) msg = err.message;
			else if (typeof err === "string") msg = err;
		} catch (e) {}
		error.value = msg;
	} finally {
		loading.value = false;
	}
};

watch(() => props.sheet, fetchCsv, { immediate: true });

const refresh = () => fetchCsv();

const formatNumber = (n) => {
	try {
		return new Intl.NumberFormat().format(Math.round((n + Number.EPSILON) * 100) / 100);
	} catch (e) {
		return String(n);
	}
};
</script>
