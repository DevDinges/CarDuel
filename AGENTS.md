# CarDuel — Project Invariants & Schema

## 1. Architecture & UI Invariants
- **Zero-Build Static App:** Always keep `index.html`, `styles.css`, `cars-data.js`, `app.js`, and `assets/*.png` dependency-free with relative paths; never hardcode `C:\`, `D:\`, `file:///`, or commit `backups/` / `.env*`.
- **Data/Logic Split:** Always keep `CAR_ROSTER`, `CAR_AVAILABLE_ANGLES`, and `CAR_MIRRORED_ANGLES` in `cars-data.js` (loaded via `<script>` before `app.js`); never redefine them in `app.js`. `STAT_PILLARS`, `UI_TRANSLATIONS`, `CAR_TYPE_ORDER`, and `CAR_TYPE_DOT_COLORS` stay in `app.js`.
- **Top HUD & Equalizer:** Always keep `.topbar` as a full-width `1fr auto 1fr` row: `[Showroom | Vehicle | Compare]` triple nav box on the left (`Vehicle` opens `#vehicle-stage` single-car Hero inspection), centered `CARDUEL` + `AUTOMOTIVE SHOWROOM` brand (no `CD` badge), and `[Weights] [Index] [EN|DE|RU] [Theme]` on the right (`Weights` & `Index` open right-aligned dropdown popovers); on Homepage Landing (`body.is-home-view`), hide `.topbar-left`, `Weights`, and `Index` so only centered `CARDUEL` + language + theme remain.
- **3-Column Fused Console:** Always render the duel as `[Car 1] | [Fused Center Console (#stats-center)] | [Car 2]` with mirrored top matchup banner, 5-pillar accordion + `Σ // TOTAL SCORE`, and Forza-native bottom summary + centered `€` popover; never restore `fighter-dock`, legacy 2-column `#stats-left` / `#stats-right`, or `CHANGE CAR 1` / `CHANGE CAR 2` arena pills.
- **Unified Dossiers & Navigation:** Always render Engineering Dossiers inside `.dossier-datasheet-box` with 4-way arrow-key navigation (`↑`/`↓` across 19 ratings, `←`/`→` switching `C1`/`C2`), a 2-section `5.3` `repairGuide` (`routine[]` + `critical[]`, excluding generic engine oil/brakes/tyres), and the `5.4` Market & Depreciation sheet.
- **Smash Picker Grid:** Always boot with `selectedLeftId = null` and `selectedRightId = null` (`.awaiting-selection` hides stat columns until both contenders are picked); use a `max-width: 1440px` controls bar (search + body-type filter pills + sort dropdown) and 3-column showcase grid (2 under `900px`) defaulted to `gridOrder` with right-facing `car.image`, top-left category tag, top-right lineup-average (`Ø`) Forza ranking badge, top-center `C1`/`C2`, bottom-center `✕` selection clear button, bottom-right `Inspect` pill opening `#vehicle-stage`, and a compact below-photo box (`yearMake · drivetrain`, `gridLabel`, `#` watermark, median `Est. Used Market` across all engines, HP range & engine count).
- **Arena & Popovers:** Never let `#` watermarks clip `CAR 1` / `OPPONENT` or engine dropdowns; use `~` for stat ties, shortened Opponent column headers (`Opp` / `Geg.` / `Соп.`), and the green `€` badge popover for Market & Depreciation.
- **Themes & Labels:** Always style with CSS variables from `styles.css` supporting the 2-mode Dark/Light toggle (`dark`, `light`) in the Top HUD; always label contenders **`C1`** / **`C2`** (never `P1` / `P2`).
- **Trilingual (`en` / `de` / `ru`):** Always translate every UI label, tooltip, badge, trait, and dossier into `en`, `de`, and `ru`; in German, always use **`Kofferraum`** (never `Boot`), **`Sportfahrwerk`** (never `Track`, and never leak `Sportfahrwerk` into English), **`Steuer & Versicherung`** (never `Typ`), **`Reihenvierzylinder`** (never `Inline-4`), and **`Sauger`** (never `NA`).

## 2. Current Roster (`CAR_ROSTER` — 15 Cars, 75 Assets)
1. `#01` `toyota-auris-2014` (`hatchback`, `gridOrder: 1`) — `Toyota Auris`
2. `#02` `honda-civic-2014` (`hatchback`, `gridOrder: 2`) — `Honda Civic`
3. `#06` `honda-civic-type-r-2015` (`hot-hatch`, `gridOrder: 3`) — `Civic Type-R`
4. `#04` `peugeot-308-gti-2019` (`hot-hatch`, `gridOrder: 4`) — `308 GTi`
5. `#05` `ford-mondeo-2012` (`sedan`, `gridOrder: 5`) — `Ford Mondeo`
6. `#03` `honda-crv-2010` (`suv`, `gridOrder: 6`) — `Honda CR-V`
7. `#07` `honda-accord-2011` (`sedan`, `gridOrder: 7`) — `Honda Accord`
8. `#08` `honda-jazz-2011` (`subcompact`, `gridOrder: 8`) — `Honda Jazz`
9. `#09` `mercedes-c-class-2011` (`sedan`, `gridOrder: 9`) — `Mercedes C-Class`
10. `#10` `toyota-rav4-2010` (`suv`, `gridOrder: 10`) — `Toyota RAV4`
11. `#11` `kia-sportage-2014` (`suv`, `gridOrder: 11`) — `Kia Sportage`
12. `#12` `mazda-6-2010` (`sedan`, `gridOrder: 12`) — `Mazda 6`
13. `#13` `toyota-avensis-2012` (`sedan`, `gridOrder: 13`) — `Toyota Avensis`
14. `#14` `audi-a3-8p-2010` (`hatchback`, `gridOrder: 14`) — `Audi A3 (8P)`
15. `#15` `audi-a3-8v-2016` (`hatchback`, `gridOrder: 15`) — `Audi A3 (8V)`

## 3. Vehicle Schema & Asset Invariants (`cars-data.js`)
- **Metadata:** Always set `id` (`<brand>-<model>-<year>`), zero-padded `number`, `carType` (`subcompact | hatchback | hot-hatch | sedan | suv`), `gridOrder`, `gridLabel`, `yearMake`, `shortTitle`, and `fullName`.
- **Engines:** Always set `fuelType` (`petrol | diesel | hybrid`) and numeric `hp` on every engine; keep trait wording non-technical.
- **All 19 `subStats` Keys (Required on Every Engine):**
  - `reliabilityQuality`: `powertrainDurability`, `transmissionDriveline`, `buildQualityRust`, `electronicsReliability`
  - `comfortCabin`: `rideNoiseComfort`, `interiorQualityFeatures`, `visibilityManeuverability`, `safetyProtection`
  - `spacePracticality`: `passengerSpaceErgonomics`, `interiorBootSpace`, `payloadTowing`
  - `performanceDynamics`: `accelerationOvertaking`, `midRangeTorquePassing`, `handlingAgility`, `brakingPerformance`
  - `runningCostsTco`: `efficiencyFuel`, `taxInsuranceNorm`, `maintenanceRepairCosts`, `depreciationResale`
- **3-Tier Dossiers & Keyed Buyer Fit:** Always put chassis-shared engineering dossiers in `sharedDossiers` + `dossierGroups` (`dossierGroup` on engines) and Buyer Fit profiles in `sharedBuyerFit.cards` + `buyerFitGroups` (`buyerFitGroup` + optional `buyerFitOverrides` on engines) instead of duplicating full blocks per engine.
- **Fused Spec & Dossier Schema:** Always populate `sharedSpecs` + `specOverrides` covering all 40 `SUB_STAT_SPEC_ROWS` keys (via `SPEC_TOKENS`), `sharedDossierBreakdowns` + `powertrainDurability.specBreakdown` (via `SPEC_DOSSIER_PRESETS` & `DOSSIER_TECH_LABELS`), and `maintenanceRepairCosts.repairGuide` (`routine[]` + `critical[]`); use red `✕` (`.is-negative`) for `0 kg` towing or roof load.
- **Dossier & Insurance Hygiene:** Never use country-specific insurance acronyms (`KH/TK/VK`) — keep cost phrasing universal; never put positive specs, generic filler, or brand/origin-specific claims (e.g., Japanese Denso) in shared presets applied to unrelated makes.
- **Buyer Fit Tone & Accuracy:** Keep `buyerFit.summary` concise and neutral, and write `idealFor` / `notIdealFor` in personal `"you"` tone (`Title: explanation`); never share engine-specific awards (e.g., `TÜV Top 3%`) or hardcoded used-price comparisons across unrelated powertrain groups.
- **Powertrain Dossier (`subStats.powertrainDurability.dossier`):** Always include `en`, `de`, and `ru` with `headline`, `strengths[]`, `watchouts[]`, `beforeYouBuy[]` (3 plain-language checks, no OBD/engine codes), and `highMileage[]` (6 milestones `0–250,000 km`: `{ tier: 'yellow' | 'orange' | 'red', km, action, cost, ifIgnored, damageCost }`).
- **5-Angle Showroom Assets (`assets/`) & Thumbnails (`assets/thumbs/`):** Always provide `<id>.png` (front-side 3/4 facing right), `<id>-front.png`, `<id>-side.png` (facing right), `<id>-side-rear.png`, and `<id>-rear.png`, plus a ~600px-wide WebP thumbnail `assets/thumbs/<id>.webp` (~82% quality) generated from `<id>.png`; register `'<id>': ['front', 'frontSide', 'side', 'sideRear', 'rear']` in `CAR_AVAILABLE_ANGLES` and mirror exceptions in `imageFacing: 'left'` or `CAR_MIRRORED_ANGLES`.
