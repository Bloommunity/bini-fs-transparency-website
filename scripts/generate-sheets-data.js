#!/usr/bin/env node

/**
 * Build script to generate sheets-data.json from sheets.json URLs.
 *
 * It supports two input styles in public/sheets.json:
 * - Array of sheet URLs
 * - Array of sheet descriptor objects with optional `url`, `title`, `description`
 *
 * For richer metadata, set GOOGLE_SHEETS_API_KEY in the environment.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sheetsJsonPath = path.join(__dirname, "../public/sheets.json");
const sheetsDataPath = path.join(__dirname, "../public/sheets-data.json");
const apiKey = process.env.GOOGLE_SHEETS_API_KEY?.trim();

function extractSheetId(url) {
	const match = String(url).match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
	return match ? match[1] : null;
}

function generateSheetId(url, index) {
	const sheetId = extractSheetId(url);
	if (sheetId) {
		return sheetId.slice(0, 8);
	}
	return `sheet-${index + 1}`;
}

function parseMetaValue(html, property) {
	const regex = new RegExp(
		`<meta\\s+property=["']${property}["'][^>]*content=["']([^"']+)["']`,
		"i",
	);
	const match = html.match(regex);
	return match ? match[1].trim() : null;
}

function createDescription(title) {
	if (!title) {
		return "Public financial transparency record from BLOOM. Open the sheet to review donations, expenses, and funding accountability.";
	}

	return `Public financial transparency record for “${title}”. Explore the live Google Sheet to review donations, expenses, and funding accountability in this verified community report.`;
}

async function fetchSheetMetadataFromApi(sheetId) {
	const fields =
		"properties(title,modifiedTime),sheets(properties(sheetId,title))";
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=${encodeURIComponent(fields)}${apiKey ? `&key=${apiKey}` : ""}`;

	const response = await fetch(url, {
		headers: {
			Accept: "application/json",
		},
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(
			`Google Sheets API responded ${response.status}: ${text}`,
		);
	}

	const data = await response.json();
	return {
		title: data.properties?.title,
		modifiedTime: data.properties?.modifiedTime,
		sheets: (data.sheets || []).map((sheet) => ({
			sheetId: String(sheet.properties?.sheetId || "0"),
			title: sheet.properties?.title || "Sheet",
		})),
	};
}

async function fetchSheetMetadataFromHtml(sheetId) {
	const url = `https://docs.google.com/spreadsheets/d/${sheetId}`;
	const response = await fetch(url, {
		headers: {
			Accept: "text/html",
		},
	});

	if (!response.ok) {
		throw new Error(`HTML fetch failed with ${response.status}`);
	}

	const html = await response.text();
	const title =
		parseMetaValue(html, "og:title") ||
		parseMetaValue(html, "twitter:title");
	const description =
		parseMetaValue(html, "og:description") ||
		parseMetaValue(html, "twitter:description");
	return {
		title,
		description,
		modifiedTime: null,
		sheets: [],
	};
}

async function fetchSheetMetadata(sheetId) {
	if (!sheetId) {
		return null;
	}

	if (apiKey) {
		try {
			return await fetchSheetMetadataFromApi(sheetId);
		} catch (err) {
			console.warn(
				`Google Sheets API lookup failed for ${sheetId}: ${err.message}`,
			);
			console.warn("Falling back to public sheet HTML metadata.");
		}
	}

	try {
		return await fetchSheetMetadataFromHtml(sheetId);
	} catch (err) {
		console.warn(
			`HTML metadata lookup failed for ${sheetId}: ${err.message}`,
		);
		return null;
	}
}

async function generateSheetsData() {
	if (!fs.existsSync(sheetsJsonPath)) {
		console.error(`Error: sheets.json not found at ${sheetsJsonPath}`);
		process.exit(1);
	}

	const rawJson = fs.readFileSync(sheetsJsonPath, "utf-8");
	const sheetsJson = JSON.parse(rawJson);
	if (!Array.isArray(sheetsJson)) {
		console.error(
			"Error: sheets.json must be an array of sheet URLs or sheet objects.",
		);
		process.exit(1);
	}

	console.log(`Processing ${sheetsJson.length} sheets...`);

	const sheetsData = [];

	for (let i = 0; i < sheetsJson.length; i += 1) {
		const item = sheetsJson[i];
		const url = typeof item === "string" ? item : item?.url;

		if (
			!url ||
			typeof url !== "string" ||
			!url.includes("docs.google.com")
		) {
			console.warn(
				`Skipping invalid sheet entry at index ${i}: ${JSON.stringify(item)}`,
			);
			continue;
		}

		const sheetId = extractSheetId(url);
		if (!sheetId) {
			console.warn(
				`Skipping invalid Google Sheets URL at index ${i}: ${url}`,
			);
			continue;
		}

		console.log(
			`Fetching metadata for sheet ${sheetId} (${i + 1}/${sheetsJson.length})...`,
		);
		const metadata = await fetchSheetMetadata(sheetId);

		const title = metadata?.title || item?.title || `Sheet ${i + 1}`;
		const description =
			metadata?.description ||
			item?.description ||
			createDescription(title);
		const tabs = metadata?.sheets?.length > 0 ? metadata.sheets : [];
		const sheetGid = tabs[0]?.sheetId || "0";

		sheetsData.push({
			id: generateSheetId(url, i),
			url,
			sheetId,
			title,
			description,
			sheetGid,
			tabs,
			status: "active",
			createdAt: new Date().toISOString(),
			updatedAt: metadata?.modifiedTime || new Date().toISOString(),
		});
	}

	fs.writeFileSync(sheetsDataPath, JSON.stringify(sheetsData, null, 2));
	console.log(
		`\n✓ Successfully generated ${sheetsDataPath} with ${sheetsData.length} sheets.`,
	);
}

generateSheetsData().catch((err) => {
	console.error("Error generating sheets data:", err);
	process.exit(1);
});
