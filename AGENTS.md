# CarDuel — Project Rules & Agent Basis

This file is automatically loaded by Antigravity at the start of every new conversation in `CarDuel` on any machine (PC or laptop). Follow these conventions strictly.

## 1. Architecture & Multi-Machine Portability
- **Zero-build static web app:** `index.html`, `styles.css`, `app.js`, and `assets/`.
- **Always use relative paths** (e.g., `assets/honda-jazz-2011.png`). Never hardcode `C:\`, `D:\`, `file:///`, or machine-specific paths in source files.
- **Keep `backups/` local only:** `.gitignore` excludes `backups/`, `.env*`, and OS files (`Thumbs.db`, `.DS_Store`). Never commit secrets or personal paths.
- **Git workflow between PC & Laptop:**
  - Before starting work on a machine: `git pull`
  - After finishing changes: `git status`, `git add .`, `git commit -m "..."`, `git push`

## 2. UI, Layout & Styling Snapshot (Current State)
Keep all future changes consistent with the established visual design:
- **Top HUD (`.top-hud`):** 3-column grid (`1fr auto 1fr`) with `align-items: flex-end` so **C1 selector**, **THEME**, **EN**, **INDEX** (`.hud-p2 .class-menu-wrapper` with `margin: 0 auto` centered between Language and C2), and **C2 selector** sit on one horizontal line.
- **No Bottom Roster Dock:** The old bottom dock (`fighter-dock`) was intentionally removed. Only the **CAR SELECTION MENU** button (`#back-to-grid-btn` inside `#duel-verdict-bar`) sits centered at the bottom of the arena during a duel (no `P1 PILLARS` / `OVERALL RATING EDGE` pills).
- **Smash-Style Car Selection Grid (`.smash-picker-stage`):**
  - Default state on page load: `selectedLeftId = null`, `selectedRightId = null` (stats columns hidden via `.awaiting-selection` until both `C1` and `C2` are chosen, then animated in).
  - 3-column grid (2 columns under `900px`), `justify-content: flex-start`, `overflow-y: auto` with a Volt (`--forza-lime`) custom scrollbar so new cars flow cleanly into additional rows.
  - Grid cards show `car.image` (facing right) and short `gridLabel` (e.g., `Toyota Auris`, `Honda Civic`, `Civic Type-R`, `308 GTi`, `Ford Mondeo`, `Honda CR-V`, `Honda Accord`, `Honda Jazz`).
  - Sporty/derived variants sit directly next to their base model via `gridOrder` (e.g., standard Peugeot 308 will sit next to `308 GTi` when added).
  - Subtle hover zoom (`scale(1.035)`) with `20px` gaps so cards never crowd neighbors.
- **Duel Arena & Stat Columns:**
  - `#` background watermarks sit at `top: 52px` (`4.1rem`) above the outer top corners of the car images without clipping into `CAR 1` / `OPPONENT` or engine dropdowns.
  - Pros/Cons tray (`.car-traits-tray`) uses `max-height: 220px`, `0.84rem`/`0.82rem` pill tags, and `6px` gaps.
  - Tie indicator in stat comparisons uses `~` (not `—`), and Opponent column header is shortened to `Opp` / `Geg.` / `Соп.`.
  - Green **`€`** badge in `Est. Used Market` opens a hover/click **Market & Depreciation** popover showing MSRP, Current Value, Total Depreciation (`-€` / `-%`), Value Retained, Avg. Loss/Yr, and Value Expectation.
- **Theme & Typography:** Always use CSS variables from `styles.css` (`--forza-lime`, `--panel-bg`, `--popover-bg`, `--text-primary`, `--text-muted`, `--bar-track`, `--font-display`) so all 4 themes (`dark`, `dark-soft`, `light`, `light-soft`) work cleanly.
- **Contender Labels:** Always **`C1`** (`CONTENDER` / `KANDIDAT` / `УЧАСТНИК`) and **`C2`** (`OPPONENT` / `GEGNER` / `СОПЕРНИК`) — never `P1` / `P2`.
- **Trilingual Requirement (`en`, `de`, `ru`):** Every new UI label, tooltip, badge, trait, and dossier must be translated into English, German, and Russian.
  - German rules: use **`Kofferraum`** (never `Boot`), **`Sportfahrwerk`** (never `Track`), and **`Steuer & Versicherung`** (never vague `Typ`).

## 3. Current Vehicle Roster (`CAR_ROSTER`)
1. `#01` `toyota-auris-2014` (`hatchback`, `gridOrder: 1`) — `Toyota Auris` (7 engines)
2. `#02` `honda-civic-2014` (`hatchback`, `gridOrder: 2`) — `Honda Civic` (4 engines)
3. `#06` `honda-civic-type-r-2015` (`hot-hatch`, `gridOrder: 3`) — `Civic Type-R` (1 engine)
4. `#04` `peugeot-308-gti-2019` (`hot-hatch`, `gridOrder: 4`) — `308 GTi` (1 engine)
5. `#05` `ford-mondeo-2012` (`sedan`, `gridOrder: 5`) — `Ford Mondeo` (10 engines)
6. `#03` `honda-crv-2010` (`suv`, `gridOrder: 6`) — `Honda CR-V` (4 engines)
7. `#07` `honda-accord-2011` (`sedan`, `gridOrder: 7`) — `Honda Accord` (3 engines)
8. `#08` `honda-jazz-2011` (`subcompact`, `gridOrder: 8`) — `Honda Jazz` (3 engines, incl. `1.3-ima` Hybrid)

## 3. Adding a New Car Checklist (`app.js`)
When adding a car to `CAR_ROSTER`:
1. **Metadata & Naming:**
   - `id`: `<brand>-<model>-<year>` (lowercase kebab-case)
   - `number`: next zero-padded two-digit string (`'09'`, `'10'`, ...)
   - `carType`: one of `'subcompact' | 'hatchback' | 'hot-hatch' | 'sedan' | 'suv'` (ordered smallest to largest)
   - `gridOrder`: sequential number (or adjacent to base model for sporty variants)
   - `gridLabel`: short name for the Smash grid (`'Brand Model'`)
   - `yearMake`: `'YYYY-YYYY BRAND'` (e.g., `'2008-2015 HONDA'`)
   - `shortTitle`: `'MODEL (CODE)'` (e.g., `'JAZZ (GE)'`)
   - `fullName`: `'YYYY-YYYY Brand Model (Code)'`
2. **Engines (`engines: [...]`):**
   - Set `fuelType`: `'petrol' | 'diesel' | 'hybrid'` and numeric `hp` on every engine so engine categorization & sorting work automatically.
   - Keep trait wording **clear and non-technical** (e.g., `"High-Grip Front Diff"` instead of `"Mechanical Torsen LSD"`, `"Eco Coaching Dash Display"` instead of `"IMA Inverter"`).
3. **Exact `subStats` Keys (all 12 required — never invent key names or ratings will show `0.0`):**
   - Pillar 1: `powertrainDurability`, `electronicsInfotainment`, `buildQualityRust`
   - Pillar 2: `interiorBootSpace`, `cabinErgonomicsVisibility`, `payloadTowing`
   - Pillar 3: `accelerationOvertaking`, `handlingAgility`, `brakingSafety`
   - Pillar 4: `efficiencyFuel`, `depreciationResale`, `maintenanceInsurance`
4. **Powertrain Durability Dossier (`dossier`):**
   - Every engine **must** include `subStats.powertrainDurability.dossier` with `en`, `de`, and `ru` (`headline`, `strengths[]`, `watchouts[]`) so the clickable `i` info button appears.
5. **5 Showroom Images (`assets/`):**
   - Generate all 5 angles in the matching glass-and-concrete showroom with zoomed-out Mondeo-level side margins:
     - `assets/<id>.png` (Front-Side 3/4, facing right)
     - `assets/<id>-front.png` (Straight-on Front)
     - `assets/<id>-side.png` (Side profile, facing right)
     - `assets/<id>-side-rear.png` (Rear 3/4)
     - `assets/<id>-rear.png` (Straight-on Rear)
   - Register `'<id>': ['front', 'frontSide', 'side', 'sideRear', 'rear']` in `CAR_AVAILABLE_ANGLES`.
   - If the base image faces left, set `imageFacing: 'left'` on the car; if any gallery angle faces the opposite direction, add it to `CAR_MIRRORED_ANGLES`.

## 4. Verification Before Finishing Edits
Since Node.js may not be installed on every machine, verify `app.js` syntax balance and asset completeness in PowerShell after edits:
```powershell
$c = Get-Content -Raw app.js
$b=0; $sq=0; $p=0
foreach($ch in $c.ToCharArray()){ if($ch -eq '{'){$b++} elseif($ch -eq '}'){$b--} elseif($ch -eq '['){$sq++} elseif($ch -eq ']'){$sq--} elseif($ch -eq '('){$p++} elseif($ch -eq ')'){$p--} }
Write-Output "Braces: $b, Brackets: $sq, Parens: $p"
```
All three counts must be `0`.
