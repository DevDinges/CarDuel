---
name: add-car
description: >-
  Deterministic single-prompt AutoDuel vehicle onboarding workflow (slot
  discovery, WebP 5-angle + thumb processing, DRY schema authoring from
  _template.js, manifest rebuild, and validate.ps1 v2 verification). Trigger
  this skill when the user invokes /add-car or asks to add a new car/vehicle
  to AutoDuel.
---

# Add Car (`/add-car`)

Onboard a new vehicle into AutoDuel's zero-build modular architecture (`15 -> 100+` cars) in one clean, deterministic flow without editing `index.html`, `css/*.css`, or `js/*.js`.

---

## Step 1 — Discover Next Slot & Schema Dictionary (Token-Lean)

Never read existing `data/cars/*.js` files just to find numbering or schema structure. Instead:

1. Run slot discovery:
   ```powershell
   powershell -ExecutionPolicy Bypass -File ./scripts/build-manifest.ps1 -NextSlot
   ```
   Use the printed next zero-padded `number` and `gridOrder`.
2. Read [data/cars/_template.js](../../data/cars/_template.js) as the canonical structural skeleton.
3. Read only the shared constant tables (`STAT_PILLARS`, `SUB_STAT_SPEC_ROWS`, `SPEC_TOKENS`, `DOSSIER_TECH_LABELS`, `SPEC_DOSSIER_PRESETS`, `SHARED_BUYER_FIT_CARDS`) in [js/i18n-schema.js](../../js/i18n-schema.js) so every `@token`, `@preset`, tech key `k`, and Buyer Fit card key reuses the single source of truth.
4. **List `data/engines/*.js` before authoring any engine.** If an engine you are adding (same engine code, output and tune) already exists there, do NOT write it again: set `engineRef: '<ref>'` on the engine entry and author only the car-owned values. If the engine is already used by another car file but is not yet in `data/engines/`, create the shared engine file first (see Step 4) and switch the existing car to `engineRef` too.

---

## Step 2 — Enforce `GEMINI.md` Pre-Execution Gate (When Needed)

Confirm or clarify these inputs before writing files if anything is missing or ambiguous:
- **ID & Slot:** `<brand>-<model>-<chassis>` slug (lowercase, never `-YYYY` year suffix), body `carType` (`subcompact | hatchback | hot-hatch | sedan | suv`), European production span (`YYYY-YYYY BRAND`), and `drivetrain` (`FWD | RWD | AWD`).
- **Engine & Gearbox Lineup:** Specific European market engines, `fuelType` (`petrol | diesel | hybrid`), `hp`, `MM/YYYY–MM/YYYY` production dates, `defaultEngineId`, European `sharedGearboxes` + `gearboxes[]` (`category: 'manual' | 'automatic'`, 2-line OEM `subLabel` = `OEM Code · Architecture` with no fluff or service-interval tails, single-variant `specOverrides` without `MT/AT` dual strings), approximate original MSRP & used market values (`€`), and all authentic OEM factory paint colors (`>= 5`; `7+` triggers the horizontal slider; mark exactly one entry with `isDefault: true` matching the default `frontSide` showroom image color).
- **5-Angle Source Renders:** Confirm raw/source images exist in `assets/raw/` or `assets/` matching `<id>.{png,jpg,jpeg,webp}`, `<id>-front.*`, `<id>-side.*`, `<id>-side-rear.*`, `<id>-rear.*`.

*(If the user already provided unambiguous specs + images are staged, execute immediately; otherwise output the compact Gate block and wait for go-ahead.)*

---

## Step 3 — Process 5 Showroom WebPs + Thumbnail

Generate standardized `1376×768` WebP renders (`q=0.88`) and the `600px` card thumbnail (`q=0.82`) with zero manual renaming:

```powershell
powershell -ExecutionPolicy Bypass -File ./scripts/process-assets.ps1 -CarId <id>
```

- Verifies all `5` angles (`assets/<id>.webp`, `-front.webp`, `-side.webp`, `-side-rear.webp`, `-rear.webp`) plus `assets/thumbs/<id>.webp` with valid `RIFF....WEBP` headers.
- Always generate `frontSide`, `side`, and `sideRear` with the **front of the car facing RIGHT** so `GOLF`/model badges and number plates read forward natively (never rely on `mirroredAngles` for generated renders). Set `mirroredAngles` or `imageFacing: 'left'` only for genuine legacy exceptions.

---

## Step 4 — Author `data/cars/<id>.js` (UTF-8 Without BOM)

Create `data/cars/<brand>-<model>-<chassis>.js` modeled on [data/cars/_template.js](../../data/cars/_template.js), strictly following all `AGENTS.md` invariants:

- **DRY 3-Tier Architecture:** Put chassis-wide specs in `sharedSpecs`, chassis breakdowns in `sharedDossierBreakdowns`, shared non-powertrain dossiers in `sharedDossiers` + `dossierGroups`, and reusable Buyer Fit bullet cards in `sharedBuyerFit.cards` + `buyerFitGroups` + `SHARED_BUYER_FIT_CARDS`. Only override engine-specific deltas in `engines[]`.
- **Shared Engine Library (same engine in several cars = one file):** Engines used by 2+ cars live in `data/engines/<ref>.js` (`window.registerAutoDuelEngine({ id, definition: { engines: [ {...} ] } })`, same indentation as a car's `engines[]` so `calibrate-scores.ps1` can parse it; copy any existing file as the template). The shared file owns only: `fuelType`, `hp`, `specOverrides.{forcedInduction, injection, timingDrive, peakTorque, passingPunch}`, `subStats.powertrainDurability` (score, badges, `specBreakdown`, `dossier`, brand-neutral wording, no model/platform names) and `subStats.midRangeTorquePassing`. The car engine entry gets `engineRef: '<ref>'` right after `id` and must NOT repeat those keys (validator error). Car-owned values stay in the car file: `sprint0100`, `topSpeed`, `braking1000`, handling, ride, space, `towingBraked`, `payloadRoof`, `realWorldFuel`, `tankRange`, prices, tax, resale, `engineName`, `engineBadge`, `engineSubLabel`, dates, buyer fit. Scores such as `accelerationOvertaking` or `efficiencyFuel` stay car-owned because weight and gearing change them; only engine-intrinsic facts are shared. Never share an engine with conflicting torque/output between cars: first fix the facts, then share.
- **Mandatory Roster & Gearbox Hygiene:** Always include trilingual `rarityLabel` (`{ en, de, ru }`) on `roster`. Always verify `mirroredAngles` (`null` when `frontSide`, `side`, and `sideRear` natively face right). Never reuse brand-specific gearbox presets (`@gbManual6Toyota`, `@gbManual6Honda`, `@gbManual6Ford`, `@gbManual6Psa`) on unrelated makes — write OEM-accurate `gearbox` breakdowns on `sharedDossierBreakdowns` and wrap `sharedGearboxes` overrides under `dossierBreakdowns: { transmissionDriveline: { gearbox: ... } }`. Never append `(~€.../100km)` inside `realWorldFuel`.
- **40/40 Spec Rows, 19/19 Sub-Stats & Calibrated Scoring:** Every engine must resolve all `40` `SUB_STAT_SPEC_ROWS` keys (`sharedSpecs ∪ specOverrides`) and all `19` `subStats` keys (`0.0–10.0` + **2 crisp `{ en, de, ru }` `badges[]`** per sub-rating, using explicit fuel units like `'6.0 L/100km'` — never `'6.0 Real'`). Give every engine **`3–4` `remarkablePositives`** and **`2–3` `notableNegatives`**. Run `powershell -ExecutionPolicy Bypass -File ./scripts/calibrate-scores.ps1 -Apply` so all 7 objective metrics match the site-wide formula. Never embed hardcoded `(X.X/10)` text in headlines or invent unknown `@tokens`/`@presets`/`DOSSIER_TECH_LABELS` `k` keys.
- **Thorough Dossiers, Repair Guide & Buyer Fit Depth:**
  - `powertrainDurability.dossier` (`en` / `de` / `ru`): `headline`, `strengths[]` (`>= 2`), `watchouts[]` (`>= 2`), `beforeYouBuy[]` (`>= 3` plain-language physical buyer checks — no OBD/engine codes), and `6` `highMileage` milestones (`yellow | orange | red`).
  - `maintenanceRepairCosts.repairGuide`: `>= 2` `routine[]` (must explicitly include timing belt kit replacement if `timingDrive` is `@belt`) + `>= 2` `critical[]` model-specific weak spots, excluding generic engine oil/filters/pads/tyres.
  - `buyerFit`: `>= 3` `ideal` + `>= 3` `skip` cards per group in personal `"you"` tone (`Title: explanation`).
  - `inDepth.groups`: `>= 3` `extendedChecks` + `>= 2` `watchoutExtra` per group.
  - Never include `"Nm Torque"` wording in `engineSubLabel`, never include `KH/TK/VK`, and use German **`Kofferraum`** (never `Boot`), **`Sportfahrwerk` / `Rennstrecken-`** (never `Track`), **`Steuer & Versicherung`**, **`Reihenvierzylinder`** (never `Inline-4`), and **`Sauger`** (never `NA`).
- **Complete 7-Tab `inDepth`:** Populate `paints` (all authentic OEM factory colors, `>= 5`; `7+` triggers the horizontal paint slider; mark exactly one entry with `isDefault: true` matching the default `frontSide` showroom image color), `engineCosts`, group `stats` (TÜV / ADAC / WhatCar? or equivalent), `extendedChecks`, `savingsNote`, `market`, `watchoutExtra`, and `trimsData` (`2–12` `trims` using `id`, `tierClass` `tier-1..tier-10`, automotive-only `tier` `{ en, de, ru }`, `name`, `delta`, `isSweetSpot`, `summary`, `highlights`; plus `>=6` `matrix` rows with `'std' | 'opt' | 'no'` matching trim count, `interiorNotes`, `cabinByPowertrain`, `faceliftUpgrades`) in `en`/`de`/`ru`.

---

## Step 5 — Rebuild Manifest & Run Deep Schema Verification (`/verify-loop`)

Run manifest generation and deep validation (`validate.ps1` v2):

```powershell
powershell -ExecutionPolicy Bypass -File ./scripts/calibrate-scores.ps1 -Apply
powershell -ExecutionPolicy Bypass -File ./scripts/build-manifest.ps1
powershell -ExecutionPolicy Bypass -File ./validate.ps1
```

Fix any reported schema, translation, or asset issues (max 3 attempts per `/verify-loop`) until `validate.ps1` exits `0`, and spot-check the new card in Showroom, Compare Arena, and `#vehicle-stage` if the local preview server is active.
