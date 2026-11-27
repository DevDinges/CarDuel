# AutoDuel — Post-V1.0 To-Do List

Roadmap after V1.0: finish items below → generous re-check → Phase B (add cars `#16` → `100` via `/add-car`).
Use the `GEMINI.md` Pre-Execution Gate (assumptions / questions / plan) before starting each item.

---

## 1. Rework "Trims & Interior" (unlimited trim levels + 10-tier color system)
- [x] Support **2–12 trims** with a 10-step Iron → Gold-Cyan Flagship color progression (`tier-1`..`tier-10`, automotive tier names only, `Bronze/Silver/Gold/Diamond` preserved for 4-trim cars), horizontal scroll strip + `‹`/`›` arrows for 5+ trims, sticky first column on the comparison matrix, updated `_template.js` + `validate.ps1` + `/add-car` skill, and expanded all multi-trim roster cars (Pass A + Pass B).

## 2. Factory Paint Palette — all OEM colors
- [x] Expanded all 15 cars from 5 swatches to their full European OEM factory paint catalogs (`5` on FK2 Type-R, `8–12` on all other models) with exact OEM paint codes, hex values, and ambient studio glow, rendered in a horizontal scrollable slider with `‹`/`›` arrows, color counter (`1/N`), and flicker-free in-place swatch selection.

## 3. BUG — Kia Sportage 2.0 CRDi 136 hp: two torque numbers inflate "Acceleration & Top Speed"
- [x] Immediate scoring fix (Milestone 1): Aligned `kia-sportage-sl.js` (`2.0-crdi-136` and cross-car sprint/torque calibration in `audi-a3-8p`, `mazda-6-gh`, `toyota-avensis-t27`) so Kia `2.0-crdi-136` (`5.1` / `7.7`) no longer outscores CR-V `2.2-idtec` (`6.0` / `8.0`).
- [x] Full MT/AT split & dual-value validator check (Milestone 2): All 15 cars migrated to `sharedGearboxes` + `gearboxes[]` with single-variant torque/sprint/top-speed/fuel/towing specs and strict `validate.ps1` enforcement.

## 4. Gearbox selection (manual vs automatic) as its own selector
- [x] Symmetrical Compare Arena `[C1] [Engine] [Gearbox] [Swap Car]` + `#vehicle-stage` gearbox selector with `AUTOMATIC` (P-R-N-D) / `MANUAL` (H-pattern) icons, compact OEM 2-line cards, DRY `sharedGearboxes` + `gearboxes[]` schema, gearbox-specific `dossier` + `repairGuideExtra`, gearbox-aware In-Depth fuel calculator, and full 15-car (`121`-engine) rollout.

---

## Deferred / Revisit Later
- [ ] **Dynamic Car Body Recoloring (Item 2a):** Deferred/scrapped for 2D studio photos (using plain OEM Factory Paint Palette + ambient studio glow).
- [ ] **Interior View (`≥ 2` pictures per car, Front/Rear):** Add an Interior gallery/toggle in `#vehicle-stage` (`assets/<id>-interior-front.webp`, `assets/<id>-interior-rear.webp` via `scripts/process-assets.ps1`) once interior photos are ready.

---

## Upcoming Homepage Modes (Under Development)
- [ ] **Enthusiast-Car Showdown:** Dedicated enthusiast/performance car duel mode (left racing-red homepage box).
- [ ] **Top 10 Ranking:** Ranked Top 10 vehicle leaderboard across categories and custom priority weights (center gold homepage box).
- [ ] **Car Suggestion:** Guided car recommendation / finder flow based on user priorities and budget (right dark-grey homepage box).

---

## Status
- **V1.0 Ready for Phase B (`#16` → `100` via `/add-car`):** `15` cars, `121` engines, Milestones 1–4 complete, `_template.js` + `validate.ps1` + `/add-car` skill synchronized and passing (`./validate.ps1` exit `0`).
