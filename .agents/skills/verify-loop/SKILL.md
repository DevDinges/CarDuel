---
name: verify-loop
description: >-
  Runs AutoDuel's staged verification sequence (syntax/delimiter balance,
  roster/schema/asset integrity, and DOM/browser checks) with a strict
  3-strike circuit breaker and token-hygiene reporting. Trigger this skill
  whenever verifying code changes, after editing js/*.js/css/*.css/index.html,
  or when the user invokes /verify-loop.
---

# Verify Loop (`/verify-loop`)

AutoDuel is a **zero-build vanilla HTML/CSS/JS** application (`index.html`, `css/*.css`, `data/manifest.js`, per-car `data/cars/<id>.js` modules, `js/*.js`, `scripts/build-manifest.ps1`, `scripts/process-assets.ps1`, `validate.ps1`, `assets/*.webp`, `assets/thumbs/*.webp`) with no `package.json`, `pyproject.toml`, or `Makefile`. Always verify changes using the staged sequence below.

## 1. Verification Sequence (Fastest -> Full Structural Check)

Run checks in this exact order, stopping at the first failure to enter the **3-Strike Circuit Breaker**:

### Stage A: Fast Syntax, Delimiter & Validator Check (Always Run After `data/cars/*.js`, `js/*.js`, or `css/*.css` Edits)
1. **Master Validator Script (Mandatory — covers delimiter/brace balance, cross-module symbol uniqueness, manifest parity, script order, duplicate globals, roster assets, and translations):**
   ```powershell
   powershell -ExecutionPolicy Bypass -File ./validate.ps1
   ```
   *(Must exit `0`. Automatically runs `scripts/build-manifest.ps1 -Check` and `node --check` on `./data/manifest.js`, `./js/*.js`, and `./data/cars/*.js` when Node is installed, falling back cleanly when Node is absent.)*
2. **PowerShell Brace/Delimiter Balance Reference:**
   `validate.ps1` checks `{}`/`[]`/`()` balance (`0/0/0`) on `./data/manifest.js`, all `./js/*.js`, and all `./data/cars/*.js`, plus `{}` balance (`0`) across all `./css/*.css` modules.

### Stage B: Targeted Schema, Trilingual & Visual/Browser Check
1. **Schema, Trilingual & Asset Integrity (When `data/cars/*.js`, `UI_TRANSLATIONS`, or Assets Change):**
   - Scan `data/manifest.js` and `data/cars/*.js` (never `js/*.js`) for roster data: every car in `CAR_ROSTER` uses `<brand>-<model>-<chassis>` naming, has a matching `data/cars/<id>.js`, `CAR_AVAILABLE_ANGLES['<id>']`, non-empty `paints`, all 5 showroom WebPs (`<id>.webp`, `<id>-front.webp`, `<id>-side.webp`, `<id>-side-rear.webp`, `<id>-rear.webp`), and its WebP thumbnail (`assets/thumbs/<id>.webp`).
   - All 19 `subStats` keys (defined by `STAT_PILLARS` in `js/i18n-schema.js`) and trilingual (`en`, `de`, `ru`) `powertrainDurability.dossier` entries (`beforeYouBuy` + 6 `highMileage` items) are present on every engine in `data/cars/*.js`.
   - `js/*.js` must contain **zero** `CAR_ROSTER`, `CAR_AVAILABLE_ANGLES`, `CAR_MIRRORED_ANGLES`, `CAR_INDEPTH_DATA`, `CAR_FACTORY_PAINTS`, `ENGINE_DATE_FALLBACKS`, or `LEGACY_CAR_ID_MAP` declarations (duplicate `const` across scripts throws a `SyntaxError`), **zero** duplicate top-level declarations across `js/*.js`, and **zero** hardcoded roster car IDs.
2. **Deterministic Browser Verification (When `css/*.css`, `index.html`, or UI Rendering Logic in `js/*.js` Changes):**
   Run Antigravity's built-in `browser` subagent against the served page (preserving zero hardcoded paths in source files and obeying the 3-strike circuit breaker):
   - **Active Local Server Check (`localhost:5500` / `localhost:8000` / `localhost:8080`):**
     - **During automatic `/verify-loop` runs:** Keep the check passive—do not spawn a background server. Check whether a local static server is already listening on `http://localhost:5500`, `http://localhost:8000`, or `http://localhost:8080`.
     - If an active local server is found, run the 4 Desktop `1440x900` browser assertions below against it.
     - If no local server is running, mark Stage B2 as `SKIPPED (No active server on 5500/8000/8080)` in the summary line without failing or triggering the 3-strike fix loop.
     - **When the user explicitly asks to "start local server" (or similar):** Start a PowerShell `System.Net.HttpListener` static server on `http://localhost:8080/` in the background (`IsDaemon: true`, using `BypassSandbox: true` if needed) so the user can approve the prompt once and preview in the built-in browser or Chrome.
   - **Viewport Coverage:**
     - **Desktop (`1440x900`) — Blocking:** Sole blocking viewport for the 4 DOM/visual assertions below.
     - **Mobile (`390x844`) — Non-Blocking Info Only:** AutoDuel is currently PC/laptop-only; if checked, log any `390x844` overflow or layout issues strictly as a non-blocking informational warning and **never** trigger or burn a 3-strike fix attempt on mobile viewports.
   - **Concrete Visual & DOM Assertions on Desktop `1440x900` (Check all 4):**
     1. **Zero Console/Page Errors:** Verify no uncaught JS exceptions or failed asset requests (`assets/*.webp` 404s) appear in the browser console.
     2. **No Horizontal Overflow:** Confirm `document.documentElement.scrollWidth <= window.innerWidth` at `1440x900`.
     3. **Showroom & Angle Rendering:** Verify the active car image renders with `naturalWidth > 0` and switching camera angles updates the image cleanly without layout shift or clipping.
     4. **Trilingual Text Fit (`en` / `de` / `ru`):** Spot-check the longest language strings (especially German `de` and Russian `ru` labels/dossiers) to ensure no clipped buttons, overlapping badges, or broken card grids.

### Stage C: Structural Integrity / Static Build Check (When `index.html`, `css/*.css`, `data/manifest.js`, `data/cars/*.js`, or `js/*.js` Architecture Changes)
Covered automatically by `powershell -ExecutionPolicy Bypass -File ./validate.ps1` (also runnable directly for quick inspection):
```powershell
$badPaths = Select-String -Path ./index.html, ./css/*.css, ./data/manifest.js, ./js/*.js -Pattern '([A-Za-z]:\\|file:///)'
Write-Output "Hardcoded machine paths count: $($badPaths.Count)"
$html = Get-Content -Raw ./index.html
$order = $html.IndexOf('src="data/manifest.js') -ge 0 -and $html.IndexOf('src="data/manifest.js') -lt $html.IndexOf('src="js/app.js')
Write-Output "Script order (data/manifest.js -> js/*.js): $order"
```
*(Must report `0` hardcoded machine paths, `Script order: True`, and all 5 `css/*.css` links in `index.html`.)*

---

## 2. Bounded 3-Strike Circuit Breaker

- **Fix Loop (Max 3 Attempts):** If any blocking check fails:
  1. Read the failure output and pinpoint the exact line/key/selector causing the failure.
  2. Apply a minimal, targeted fix.
  3. Re-run the failed check.
  4. **Strictly cap fixes at 3 attempts** (`Attempt #1`, `Attempt #2`, `Attempt #3`).
- **Hard Stop After Attempt #3:** If `Attempt #3` still fails, **STOP IMMEDIATELY**. Do **not** attempt a 4th fix or improvise a workaround. Output a concise failure report containing:
  - **(a) What Failed:** The exact stage, command/check, and error/mismatch output.
  - **(b) Attempts Summary:** What `Attempt #1`, `Attempt #2`, and `Attempt #3` each changed and why each fell short.
  - **(c) 2 Concrete Root-Cause Hypotheses:** Two specific, actionable hypotheses for the user to choose between before proceeding.

---

## 3. Token Hygiene

- **Never dump full passing logs**, raw DOM snapshots, base64 screenshots, or large `js/*.js` excerpts into the chat unless an assertion fails.
- For passing runs, report a single compact summary line including browser check status (e.g., `Verify Pass: Braces 0 / Brackets 0 / Parens 0 | 15 cars & 75 assets verified | Browser 1440x900 (4/4 assertions pass) | 0 hardcoded paths`).
- For failing runs, quote **only** the relevant failing lines, stack trace frames, or mismatched keys/counts.
