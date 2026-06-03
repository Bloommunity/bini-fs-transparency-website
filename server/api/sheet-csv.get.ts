import { defineEventHandler, getQuery, createError } from "h3";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const sheetId = String(query.sheetId || "");
	const sheetGid = query.sheetGid ? String(query.sheetGid) : "";

	if (!sheetId) {
		throw createError({ statusCode: 400, statusMessage: "Missing sheetId query parameter" });
	}

	const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv${sheetGid ? `&gid=${sheetGid}` : ""}`;

	const response = await fetch(csvUrl);
	if (!response.ok) {
		throw createError({
			statusCode: response.status,
			statusMessage: `Failed to fetch sheet CSV: ${response.statusText}`,
		});
	}

	const csv = await response.text();
	return { csv };
});
