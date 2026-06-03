import { defineEventHandler, getQuery, createError } from "h3";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const sheetId = String(query.sheetId || "");

	if (!sheetId) {
		throw createError({ statusCode: 400, statusMessage: "Missing sheetId query parameter" });
	}

	try {
		// Use Google Sheets API v4 to get sheet metadata
		// This works for publicly accessible sheets without authentication
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties(sheetId,title)`;

		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok || data.error) {
			throw new Error(data.error?.message || "Failed to fetch sheet metadata");
		}

		// Extract sheet information
		const sheets = data.sheets || [];
		const tabs = sheets.map((sheet: any) => ({
			title: sheet.properties.title,
			gid: String(sheet.properties.sheetId),
		}));

		return { tabs };
	} catch (err) {
		console.error("Failed to fetch sheet tabs:", err);
		throw createError({
			statusCode: 502,
			statusMessage: `Failed to fetch sheet tabs: ${String(err)}`,
		});
	}
});
