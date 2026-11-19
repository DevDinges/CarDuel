# GEMINI.md — Execution Protocol & Project Rules

## 1. Assumptions & Clarification Gate (High Signal-to-Token)

### Trigger Threshold
- **ENFORCE GATE** when a task involves:
  - **2 or more files**,
  - Architectural, layout, or state-management changes,
  - Ambiguous requirements (e.g., unspecified car variants/engines, unclear UI placement, missing translations), or
  - Destructive terminal or Git operations (`Remove-Item`, `git reset`, `git checkout --`, file overwrites).
- **BYPASS GATE** and execute immediately for:
  - Single-file bug fixes,
  - Typos or copy tweaks, or
  - Explicit step-by-step instructions with zero ambiguity.

### Pre-Execution Output Format (Mandatory Before Any File Edits)
When the gate triggers, output **only** this compact block before touching any file:

1. **Assumptions (Max 5 bullets):** Concrete technical assumptions about state (`selectedLeftId`, `selectedRightId`, `currentLang`, `currentTheme`), data schema (`CAR_ROSTER`, `subStats`, `dossier`), CSS variables, edge cases, and asset paths inferred from the codebase.
2. **Clarifying Questions (Max 3):** Only high-leverage questions where guessing wrong would force a multi-file rewrite. If everything is clear from the codebase, state: *"No blocking questions."*
3. **Proposed Plan (Max 5 bullets):** Exact files to create/modify and the verification step (PowerShell syntax/schema check or browser verification).

### Execution Gate & Self-Correction Loop
- **STOP and wait for explicit user approval** after outputting the gate block before editing any files or running state-changing commands.
- **Self-Correction Loop:** Whenever the user corrects a convention, pattern, wording, or mistake during a session, proactively offer a **1-line rule addition** to `GEMINI.md` (and `AGENTS.md` if project-specific) so the mistake is never repeated.
- **Anti-Bloat / DRY Gate:** Before generating repetitive N×M data across multiple engines or cars, always propose a shared-base / delta-override structure (e.g., `baseSubStats` + engine deltas or shared dossier templates) first.

---

## 2. Tech Stack, Tooling & Verification

- **Stack:** Zero-build vanilla HTML5 (`index.html`), CSS3 (`styles.css`), and JavaScript (`cars-data.js` roster data loaded before `app.js` logic) with local static images (`assets/*.png`).
- **Package Manager / Bundler:** None. Do not introduce `npm`, `pnpm`, or external runtime dependencies unless explicitly requested.
- **OS & Shell:** Windows PowerShell (portable across PC & laptop via GitHub Desktop / Git). Always use relative paths (`assets/...`) in source code—never hardcode `C:\`, `D:\`, or `file:///`.
- **Domain & Styling Conventions:** Follow `AGENTS.md` for HUD layout, Smash-style selection grid, `C1`/`C2` labels, 4 CSS-variable themes (`dark`, `dark-soft`, `light`, `light-soft`), mandatory `en`/`de`/`ru` translations, all 19 `subStats` keys, and 5-angle showroom assets.
- **CSS Variable Hygiene:** Always verify CSS custom properties against `:root` in `styles.css` (`--font-display`, `--control-bg`, `--text-main`, `--panel-border`, `--p1-accent`, `--p2-accent`); never invent aliases like `--font-heading`, `--bg-panel`, or `--text-primary`.
- **Post-Batch Data Audit:** After any `cars-data.js` edit, always verify delimiter balance (`0/0/0`), all 40 `SUB_STAT_SPEC_ROWS` keys across all 120 engines, `0` unknown `@tokens`/`@presets`, `0` missing `DOSSIER_TECH_LABELS`, and `0` English `Sportfahrwerk` leaks.
- **Standard Verification Command (PowerShell):**
  ```powershell
  foreach($f in './cars-data.js','./app.js'){ $c = Get-Content -Raw $f; $b=0; $sq=0; $p=0
  foreach($ch in $c.ToCharArray()){ if($ch -eq '{'){$b++} elseif($ch -eq '}'){$b--} elseif($ch -eq '['){$sq++} elseif($ch -eq ']'){$sq--} elseif($ch -eq '('){$p++} elseif($ch -eq ')'){$p--} }
  Write-Output "$f -> Braces: $b, Brackets: $sq, Parens: $p" }
  ```
  *(Run inside the `CarDuel` repository root; all three counts must equal `0` for each file.)*
