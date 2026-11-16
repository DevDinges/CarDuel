---
name: verify-loop
description: >-
  Runs CarDuel's staged verification sequence (syntax/delimiter balance,
  roster/schema/asset integrity, and DOM/browser checks) with a strict
  3-strike circuit breaker and token-hygiene reporting. Trigger this skill
  whenever verifying code changes, after editing app.js/styles.css/index.html,
  or when the user invokes /verify-loop.
---

# Verify Loop (`/verify-loop`)

CarDuel is a **zero-build vanilla HTML/CSS/JS** application (`index.html`, `styles.css`, `app.js`, `assets/*.png`) with no `package.json`, `pyproject.toml`, or `Makefile`. Always verify changes using the staged sequence below.

## 1. Verification Sequence (Fastest -> Full Structural Check)

Run checks in this exact order, stopping at the first failure to enter the **3-Strike Circuit Breaker**:

### Stage A: Fast Syntax & Delimiter Check (Always Run After `app.js` or `styles.css` Edits)
1. **Node JS Syntax Check (if Node is available, with Windows path fallback):**
   ```powershell
   $node = @((Get-Command node -ErrorAction SilentlyContinue).Source, "$env:ProgramFiles\nodejs\node.exe", "$env:LOCALAPPDATA\Programs\nodejs\node.exe") | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1
   if ($node) { & $node --check ./app.js; Write-Output "node --check exit: $LASTEXITCODE" }
   ```
2. **PowerShell Delimiter Balance Check (Zero-Dependency Fallback — Mandatory):**
   ```powershell
   $c = Get-Content -Raw ./app.js; $b=0; $sq=0; $p=0
   foreach($ch in $c.ToCharArray()){ if($ch -eq '{'){$b++} elseif($ch -eq '}'){$b--} elseif($ch -eq '['){$sq++} elseif($ch -eq ']'){$sq--} elseif($ch -eq '('){$p++} elseif($ch -eq ')'){$p--} }
   Write-Output "app.js -> Braces: $b, Brackets: $sq, Parens: $p"
   ```
   *(All three counts must equal `0`. If `styles.css` was edited, run the same brace balance check on `./styles.css`.)*

### Stage B: Targeted Schema, Trilingual & Visual/Browser Check
1. **Schema, Trilingual & Asset Integrity (When `CAR_ROSTER`, `UI_TRANSLATIONS`, or Assets Change):**
   - Every car in `CAR_ROSTER` has a matching entry in `CAR_AVAILABLE_ANGLES` and all 5 showroom image files exist in `assets/` (`<id>.png`, `<id>-front.png`, `<id>-side.png`, `<id>-side-rear.png`, `<id>-rear.png`).
   - All 19 `subStats` keys across the 5 pillars and trilingual (`en`, `de`, `ru`) `powertrainDurability.dossier` entries (`beforeYouBuy` + 6 `highMileage` items) are present.
2. **Deterministic Browser Verification (When `styles.css`, `index.html`, or UI Rendering Logic in `app.js` Changes):**
   Run Antigravity's built-in `browser` subagent against the served page (preserving zero hardcoded paths in source files and obeying the 3-strike circuit breaker):
   - **Viewport Coverage:**
     - **Desktop (`1440x900`) — Blocking:** Sole blocking viewport for the 4 DOM/visual assertions below.
     - **Mobile (`390x844`) — Non-Blocking Info Only:** CarDuel is currently PC/laptop-only; if checked, log any `390x844` overflow or layout issues strictly as a non-blocking informational warning and **never** trigger or burn a 3-strike fix attempt on mobile viewports.
   - **Concrete Visual & DOM Assertions on Desktop `1440x900` (Check all 4):**
     1. **Zero Console/Page Errors:** Verify no uncaught JS exceptions or failed asset requests (`assets/*.png` 404s) appear in the browser console.
     2. **No Horizontal Overflow:** Confirm `document.documentElement.scrollWidth <= window.innerWidth` at `1440x900`.
     3. **Showroom & Angle Rendering:** Verify the active car image renders with `naturalWidth > 0` and switching camera angles updates the image cleanly without layout shift or clipping.
     4. **Trilingual Text Fit (`en` / `de` / `ru`):** Spot-check the longest language strings (especially German `de` and Russian `ru` labels/dossiers) to ensure no clipped buttons, overlapping badges, or broken card grids.

### Stage C: Structural Integrity / Static Build Check (When `index.html`, `styles.css`, or Core `app.js` Architecture Changes)
```powershell
$html = Get-Content -Raw ./index.html
$css  = Get-Content -Raw ./styles.css
$badPaths = Select-String -Path ./index.html, ./styles.css, ./app.js -Pattern '([A-Za-z]:\\|file:///)'
Write-Output "Hardcoded machine paths count: $($badPaths.Count)"
```
*(Must report `0` hardcoded machine paths and intact stylesheet/script links in `index.html`.)*

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

- **Never dump full passing logs**, raw DOM snapshots, base64 screenshots, or large `app.js` excerpts into the chat unless an assertion fails.
- For passing runs, report a single compact summary line including browser check status (e.g., `Verify Pass: Braces 0 / Brackets 0 / Parens 0 | 15 cars & 75 assets verified | Browser 1440x900 (4/4 assertions pass) | 0 hardcoded paths`).
- For failing runs, quote **only** the relevant failing lines, stack trace frames, or mismatched keys/counts.
