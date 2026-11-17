# CARDUEL — Head-to-Head Car Comparison

An interactive head-to-head vehicle comparison web application built around a zero-build static architecture and an **AI-native engineering harness** (`AGENTS.md` & `GEMINI.md`).

**[Launch Live Demo](https://devdinges.github.io/CarDuel-Website/)**

## Core Features

- **Contender Grid & Dual-Stage Arena:** Select two vehicles to compare against each other in a side-by-side comparison stage (or pit two engine configurations of the same model against each other)
- **5-Pillar Evaluation System (19 Sub-Categories):** Weighted sub-ratings across:
   1. **Reliability & Durability** (Engine, Gearbox/Clutch, Rust/Chassis, Electrics)
   2. **Comfort, Cabin & Safety** (Ride/NVH, Materials/Controls, Visibility, Euro NCAP Safety)
   3. **Space & Practicality** (Passenger Room, Boot Volume, Payload/Towing)
   4. **Performance & Dynamics** (0–100 km/h Sprint, Mid-Range Torque, Handling, Braking)
   5. **Running Costs & Value** (Real-World Fuel Economy, Tax/Insurance, Maintenance, Resale)
- **Priority Equalizer & Dealbreaker Logic:** Weight sliders (`0.25×` to `2.0×`) dynamically recalculate overall scores (`0.0–10.0`) and `F` to `S+` index tiers including an automatic dealbreaker penalty for critical mechanical/maintenance scores below `6.5`.
- **Market & Depreciation Breakdown (`€`):** Interactive popover calculating total depreciation (`€` and `%`), retained value, annual loss, and resale outlook from original MSRP vs. current used market estimates.
- **5-Angle Showroom Lightbox:** Inspect Front, Front-Side, Side, Side-Rear, and Rear view for every car.
- **Trilingual & Multi-Theme:** Switching between **English (`EN`)**, **German (`DE`)**, and **Russian (`RU`)**, with 4 UI themes (`Dark`, `Dark Soft`, `Light`, `Light Soft`).

## Architecture & Engineering Highlights

* **Zero-Build Dependency-Free Stack:** Pure `index.html`, `styles.css`, `cars-data.js`, and `app.js` with relative asset paths—runs directly in any browser or static host without bundlers or runtime dependencies, **[see Live Demo](https://devdinges.github.io/CarDuel-Website/)**
* **Strict Data / Logic Separation:** Vehicle rosters, engine specs, and showroom angle mappings live exclusively in `cars-data.js` (`CAR_ROSTER`), while scoring algorithms, UI state, and DOM rendering live in `app.js`.
* **3-Tier DRY Data Schema:** Shared chassis engineering dossiers (`sharedDossiers`), powertrain-group templates (`dossierGroups`), and keyed buyer-fit cards (`sharedBuyerFit`) eliminate N×M data duplication across 15 vehicles, 50+ engine variants, and 3 languages.

## AI-Native Workflow & Agent Harness

This project is developed iteratively using **Antigravity** and **Gemini 4 (Hydrogen / Argon)** governed by explicit repository-level agent contracts:

* **[`AGENTS.md`](./AGENTS.md) — Project Invariants & Schema Contract:** Enforces UI invariants (single-row HUD, `C1`/`C2` labeling, 4 CSS themes, trilingual terminology rules) and strict vehicle schema validation across all 19 `subStats` keys and 5-angle image assets.
* **[`GEMINI.md`](./GEMINI.md) — Execution Protocol & Verification Gate:** Requires a pre-execution assumption & plan check before multi-file edits, enforces DRY data modeling, and defines a PowerShell bracket/brace integrity verification script (`cars-data.js` & `app.js`).

## Included Vehicle Roster (15 Models • 75 Assets)

| # | Model | Body Type | Powertrains Covered |
| :--- | :--- | :--- | :--- |
| **01** | **2012–2019 Toyota Auris (E180)** | Hatchback | `1.33 Dual VVT-i`, `1.2 Turbo`, `1.6 Valvematic`, `1.8 Hybrid`, `1.4 / 1.6 / 2.0 D-4D` |
| **02** | **2011–2017 Honda Civic (FK)** | Hatchback | `1.4 i-VTEC`, `1.8 i-VTEC`, `1.6 i-DTEC`, `2.2 i-DTEC` |
| **03** | **2006–2012 Honda CR-V (RE)** | SUV | `2.0 i-VTEC`, `2.4 i-VTEC`, `2.2 i-CTDI`, `2.2 i-DTEC` |
| **04** | **2015–2020 Peugeot 308 GTi (T9)** | Hot-Hatch | `1.6 THP GTi (263 HP)` |
| **05** | **2007–2014 Ford Mondeo (BA7)** | Sedan | `1.6 / 2.0 / 2.3 Duratec`, `1.6 / 2.0 EcoBoost`, `2.5T`, `1.6 / 1.8 / 2.0 / 2.2 TDCi` |
| **06** | **2015–2017 Honda Civic Type R (FK)** | Hot-Hatch | `2.0 VTEC Turbo (310 HP)` |
| **07** | **2008–2015 Honda Accord (CU)** | Sedan | `2.0 i-VTEC`, `2.4 i-VTEC`, `2.2 i-DTEC` |
| **08** | **2008–2015 Honda Jazz (GE)** | Subcompact | `1.2 i-VTEC`, `1.3 i-VTEC`, `1.3 IMA Hybrid` |
| **09** | **2007–2015 Mercedes-Benz C-Class (W204)** | Sedan | `C 180–350 Kompressor/CGI/V6`, `C 180–350 CDI` |
| **10** | **2006–2013 Toyota RAV4 (CA30W)** | SUV | `2.0 VVT-i`, `2.0 Valvematic`, `2.2 D-4D`, `2.2 D-CAT` |
| **11** | **2010–2015 Kia Sportage (SL)** | SUV | `1.6 GDI`, `2.0 CVVT`, `2.0 GDI`, `1.7 CRDi`, `2.0 CRDi (136/184 HP)` |
| **12** | **2008–2012 Mazda 6 (GH)** | Sedan | `1.8 / 2.0 / 2.5 MZR`, `2.0 MZR-DISI`, `2.0 / 2.2 MZR-CD` |
| **13** | **2008–2018 Toyota Avensis (T27)** | Sedan | `1.6 / 1.8 / 2.0 Valvematic`, `1.6 / 2.0 / 2.2 D-4D`, `2.2 D-CAT` |
| **14** | **2003–2013 Audi A3 Sportback (8P)** | Hatchback | `1.2–2.0 TFSI / FSI`, `1.6 / 1.9 / 2.0 TDI (PD & CR)` |
| **15** | **2012–2020 Audi A3 Sportback (8V)** | Hatchback | `1.0–2.0 TFSI`, `g-tron`, `e-tron PHEV`, `1.6 / 2.0 TDI` |

## Running Locally

No build step or package manager required — open `index.html` directly in any modern browser or serve the folder with any static HTTP server.

## Changelog
* **v4 (17.11.2026):** New Homepage, infinity scroll-design, various new animations, 'buyers-fit' for quick personalized guidance, extended "i"-dossier for all categories 
* **v3 (15.11.2026):** Interactive Priority Equalizer sliders, high-mileage repair roadmaps (`0–250,000 km`), `Before You Buy` checklists, and expanded vehicle roster.
* **v2 (14.11.2026):** Comprehensive homepage redesign, Smash-style contender selection grid, and additional models.
* **v1 (13.11.2026):** Initial release and GitHub Pages deployment.
