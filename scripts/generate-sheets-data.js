#!/usr/bin/env node

/**
 * Build script to generate sheets-data.json from sheets.json URLs
 * Fetches metadata from Google Sheets API and populates sheet details
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sheetsJsonPath = path.join(__dirname, "../public/sheets.json");
const sheetsDataPath = path.join(__dirname, "../public/sheets-data.json");

/**
 * Extract sheet ID from Google Sheets URL
 */
function extractSheetId(url) {
	const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
	return match ? match[1] : null;
}

/**
 * Fetch sheet metadata from Google Sheets API
 */
async function fetchSheetMetadata(sheetId) {
	try {
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=properties.title,sheets.properties(sheetId,title)`;
		const response = await fetch(url);

		if (!response.ok) {
			console.warn(
				`Warning: Failed to fetch metadata for sheet ${sheetId}`,
			);
			return null;
		}

		const data = await response.json();

		if (data.error) {
			console.warn(
				`Warning: API error for sheet ${sheetId}:`,
				data.error.message,
			);
			return null;
		}

		return {
			title: data.properties?.title || "Untitled Sheet",
			sheets: data.sheets || [],
		};
	} catch (err) {
		console.warn(
			`Warning: Error fetching metadata for sheet ${sheetId}:`,
			err.message,
		);
		return null;
	}
}

/**
 * Generate a unique ID from the sheet URL
 */
function generateSheetId(url, index) {
	const sheetId = extractSheetId(url);
	if (sheetId) {
		return sheetId.substring(0, 8);
	}
	return `sheet-${index + 1}`;
}

/**
 * Main function to generate sheets data
 */
async function generateSheetsData() {
	try {
		// Read sheets.json
		if (!fs.existsSync(sheetsJsonPath)) {
			console.error(`Error: sheets.json not found at ${sheetsJsonPath}`);
			process.exit(1);
		}

		const sheetsJson = JSON.parse(fs.readFileSync(sheetsJsonPath, "utf-8"));

		if (!Array.isArray(sheetsJson)) {
			console.error("Error: sheets.json must be an array of URLs");
			process.exit(1);
		}

		console.log(`Processing ${sheetsJson.length} sheets...`);

		const sheetsData = [];

		for (let i = 0; i < sheetsJson.length; i++) {
			const url = sheetsJson[i];

			if (typeof url !== "string" || !url.includes("docs.google.com")) {
				console.warn(`Skipping invalid URL at index ${i}: ${url}`);
				continue;
			}

			const sheetId = extractSheetId(url);
			if (!sheetId) {
				console.warn(`Failed to extract sheet ID from URL: ${url}`);
				continue;
			}

			console.log(
				`[${i + 1}/${sheetsJson.length}] Fetching metadata for ${sheetId}...`,
			);

			const metadata = await fetchSheetMetadata(sheetId);

			const sheet = {
				id: generateSheetId(url, i),
				url: url,
				sheetId: sheetId,
				title: metadata?.title || "Transparency Record",
				description:
					"Financial transparency record from BLOOM. Click to view details and embedded spreadsheet.",
				sheetGid:
					metadata?.sheets?.[0]?.properties?.sheetId?.toString() ||
					"0",
				status: "active",
				createdAt: new Date().toISOString(),
			};

			sheetsData.push(sheet);
		}

		// Write sheets-data.json
		fs.writeFileSync(sheetsDataPath, JSON.stringify(sheetsData, null, 2));

		console.log(
			`\n✓ Successfully generated sheets-data.json with ${sheetsData.length} sheets`,
		);
		console.log(`  Location: ${sheetsDataPath}`);
	} catch (err) {
		console.error("Error generating sheets data:", err);
		process.exit(1);
	}
}

// Run the script
generateSheetsData();
