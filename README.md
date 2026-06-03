# Transparency Dashboard

Minimal Nuxt 3 + Tailwind starter to list and view public Google Sheets used for fund transparency.

Setup

```bash
npm install
npm run dev
```

How it works

- Add your public Google Sheets to `sheets.json` as either an array of URLs or as objects containing `url`, optional `title`, and optional `description`.
- The generator now fetches the sheet title automatically from Google and creates a better description for SEO and search.
- Each sheet page fetches a CSV export of the public sheet and renders a simple table.

Notes

- For better CSV parsing and large sheets, replace the simple parser in `components/SheetTable.vue` with a robust CSV parser (e.g., `papaparse`).
- For richer metadata and sheet tab extraction, set `GOOGLE_SHEETS_API_KEY` before running `npm run generate-sheets`.
