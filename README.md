# Transparency Dashboard

Minimal Nuxt 3 + Tailwind starter to list and view public Google Sheets used for fund transparency.

Setup

```bash
npm install
npm run dev
```

How it works

- Add your public Google Sheets to `sheets.json` with an `id`, `title`, `description`, and `url`.
- Each sheet page fetches a CSV export of the public sheet and renders a simple table.

Notes

- For better CSV parsing and large sheets, replace the simple parser in `components/SheetTable.vue` with a robust CSV parser (e.g., `papaparse`).
- If you prefer using the Google Sheets API and an API key, that can be added later for more control.
