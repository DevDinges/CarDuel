# CARDUEL — Head-to-Head Car Comparison

An interactive head-to-head vehicle comparison web application built with vanilla HTML, CSS, and JavaScript—developed iteratively using AI coding agents governed by structured rule files (`AGENTS.md` & `GEMINI.md`).

**[Launch Live Demo](https://devdinges.github.io/CarDuel/)**

## Core Features

- **Contender Grid & Dual-Stage Arena:** Select two vehicles to compare against each other in a side-by-side comparison stage (or pit two engine configurations of the same model against each other)
- **5-Pillar Evaluation System (19 Sub-Categories):** Weighted sub-ratings across:
   1. **Reliability & Durability** (Engine, Gearbox/Clutch, Rust/Chassis, Electrics)
   2. **Comfort, Cabin & Safety** (Ride/NVH, Materials/Controls, Visibility, Euro NCAP Safety)
   3. **Space & Practicality** (Passenger Room, Boot Volume, Payload/Towing)
   4. **Performance & Dynamics** (0–100 km/h Sprint, Mid-Range Torque, Handling, Braking)
   5. **Running Costs & Value** (Real-World Fuel Economy, Tax/Insurance, Maintenance, Resale)
- **Priority Equalizer & Dealbreaker Logic:** Weight sliders (`0.25×` to `2.0×`) dynamically recalculate overall scores (`0.0–10.0`) and `F` to `S+` index tiers including an automatic dealbreaker penalty for critical mechanical/maintenance scores below `6.5`.
- **Engineering Dossiers (`i`) & Buyer Fit:** Clickable inspection checklists (`Before You Buy`), `0–250,000 km` service roadmaps and personalized `Buyer Fit` recommendations.
- **Market & Depreciation Breakdown (`€`):** Interactive popover calculating total depreciation (`€` and `%`), retained value, annual loss, and resale outlook from original MSRP vs. current used market estimates.
- **5-Angle Showroom Lightbox:** Inspect Front, Front-Side, Side, Side-Rear, and Rear view for every car.
- **Trilingual & Multi-Theme:** Switching between **English (`EN`)**, **German (`DE`)**, and **Russian (`RU`)**, with 4 UI themes (`Dark`, `Dark Soft`, `Light`, `Light Soft`).

## How It Is Built

* **Pure HTML, CSS & JavaScript (No Build Tools):** Runs directly in any browser without frameworks, package managers, or build steps—hosted statically on GitHub Pages, **[see Live Demo](https://devdinges.github.io/CarDuel/)**
* **Separation of Data & Logic:** All vehicle specs, engine variants, and image angle mappings are stored separately in `cars-data.js`, while the rating calculations, UI state, and page rendering live in `app.js`.
* **Reusable Data Structure (No Copy-Paste Bloat):** Instead of duplicating identical text across 15 cars, 50+ engines, and 3 languages, shared vehicle info (`sharedDossiers`), engine-group notes (`dossierGroups`), and buyer-fit points (`sharedBuyerFit`) are stored once and referenced by key.


## Working with AI Agents (`AGENTS.md` & `GEMINI.md`)

I build and expand this project with **Antigravity** and **Gemini 4 (Hydrogen / Argon)** using two rule files inside the repository to keep the code clean and consistent:

* **[`AGENTS.md`](./AGENTS.md) — Project Rules & Data Structure:** Defines fixed UI rules (layout structure, `C1`/`C2` labels, 4 color themes, English/German/Russian translations) and the exact fields required for every car (19 sub-ratings and 5 camera angles).
* **[`GEMINI.md`](./GEMINI.md) — Step-by-Step Workflow & Checks:** Instructs the agent to outline its plan before editing multiple files, avoid duplicate data, and verify with a PowerShell script that all brackets and braces in `cars-data.js` and `app.js` match properly.

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
* **v5 (19.11.2026):** Major Overhaul of the Duel-Site, merging of stat-boxes, info-dossier 2.0 
* **v4 (17.11.2026):** New Homepage, animated background marquee, various new animations, 'Buyer Fit' for quick personalized guidance, extended "i"-dossier for all categories 
* **v3 (15.11.2026):** Interactive Priority Equalizer sliders, high-mileage repair roadmaps (`0–250,000 km`), `Before You Buy` checklists, and expanded vehicle roster.
* **v2 (14.11.2026):** Comprehensive homepage redesign, Smash-style contender selection grid, and additional models.
* **v1 (13.11.2026):** Initial release and GitHub Pages deployment.
