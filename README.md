# CARDUEL — Head-to-Head Car Comparison

My first website (aside from self-study portfolio-projects).
CarDuel is a head-to-head car comparison website, where the user can select from a (yet small) variety of cars to compare with.
Its possible to compare the same car just with different powertrain setups (different engines).

## Purpose
The purpose of the website is to provide users with a data-driven evaluation, potential pitfalls, and ultimately a well-intentioned recommendation regarding the cars they are interested in, all presented in a stylish and intuitive format.

## Features

- **Car Selection Grid:** Select two cars (contenders) to compare against in a grid-style selection menu
- **Pillar Category Ratings:** Weighted sub-ratings across 
   - #1 Reliability & Durability, including clickable engineering dossiers (`i`) on powertrain durability and a high-mileage roadmap (up to 250.000km).
   - #2 Comfort, Cabin & Safety,
   - #3 Space & Practicality, 
   - #4 Performance & Dynamics and 
   - #5 Running costs & Value.
- **Multi-Engine Support:** Switch each contender's engine (Petrol, Diesel, Hybrid) with dynamic recalculation of ratings, pros/cons, market pricing, and overall `S+`–`F` index class.
- **Market & Depreciation Breakdown (`€`):** Hover or click the `€` badge next to Used Market price to inspect original MSRP, total depreciation (`€` and `%`), value retained, average annual loss, and value expectation.
- **5-Angle Showroom Lightbox:** Inspect Front, Front-Side, Side, Side-Rear, and Rear views for every car.
- **Trilingual & Multi-Theme:** Instant switching between **English (`EN`)**, **German (`DE`)**, and **Russian (`RU`)**, with 4 UI themes (`Dark`, `Dark Soft`, `Light`, `Light Soft`).

## Included Vehicles

2012–2019 Toyota Auris (E180) — 1.33 Dual VVT-i, 1.2 Turbo, 1.6 Valvematic, 1.8 Hybrid, 1.4 D-4D, 1.6 D-4D, 2.0 D-4D  
2011–2017 Honda Civic (FK) — 1.4 i-VTEC, 1.8 i-VTEC, 1.6 i-DTEC, 2.2 i-DTEC  
2006–2012 Honda CR-V (RE) — 2.0 i-VTEC, 2.4 i-VTEC, 2.2 i-CTDI, 2.2 i-DTEC  
2015–2020 Peugeot 308 GTi (T9) — 1.6 THP GTi (263 HP)  
2007–2014 Ford Mondeo (BA7) — 1.6 Ti-VCT, 1.6 EcoBoost, 2.0 Duratec, 2.0 EcoBoost, 2.3 Duratec, 2.5T, 1.6 TDCi, 1.8 TDCi, 2.0 TDCi, 2.2 TDCi  
2015–2017 Honda Civic Type R (FK) — 2.0 VTEC Turbo (310 HP)  
2008–2015 Honda Accord (CU) — 2.0 i-VTEC, 2.4 i-VTEC, 2.2 i-DTEC  
2008–2015 Honda Jazz (GE) — 1.2 i-VTEC, 1.3 i-VTEC, 1.3 i-DSI i-VTEC IMA (Hybrid)  
2007–2015 Mercedes-Benz C-Class (W204) — C 180/200 Kompressor, C 180/200/250 CGI & 1.6T, C 230/280/300/350 V6 & CGI/M276, C 180/200/220/250 CDI (OM646 & OM651), C 300/320/350 CDI V6 (excl. C 63 AMG)  
2006–2013 Toyota RAV4 (CA30W) — 2.0 VVT-i, 2.0 Valvematic, 2.2 D-4D (2007 & 2010), 2.2 D-CAT  
2010–2015 Kia Sportage (SL) — 1.6 GDI, 2.0 CVVT, 2.0 GDI, 1.7 CRDi, 2.0 CRDi (136/184)  
2008–2012 Mazda 6 (GH) — 1.8 MZR, 2.0 MZR, 2.0 MZR-DISI, 2.5 MZR, 2.0 MZR-CD, 2.2 MZR-CD (129/163/180)  
2008–2018 Toyota Avensis (T27) — 1.6 Valvematic, 1.8 Valvematic, 2.0 Valvematic, 1.6 D-4D, 2.0 D-4D (124/126/143), 2.2 D-4D (150), 2.2 D-4D D-CAT (177)  
2003–2013 Audi A3 Sportback (8P) — 1.2 TFSI, 1.4 TFSI, 1.6, 1.6 FSI, 1.8 TFSI, 2.0 FSI, 2.0 TFSI, 1.6 TDI (90/105 HP), 1.9 TDI, 2.0 TDI PD (140/170 HP), 2.0 TDI CR (140/170 HP) (excl. S3/RS3/3.2)  
2012–2020 Audi A3 Sportback (8V) — 1.0 TFSI, 1.2 TFSI (105/110), 1.4 TFSI (122/125/140 & COD 150), 1.5 TFSI COD, 1.8 TFSI, 2.0 TFSI, 1.4 TFSI g-tron / 30 g-tron, e-tron (1.4 PHEV) / 40 e-tron, 30/35/40 TFSI, 1.6 TDI (105/110/115), 2.0 TDI (150/184), 30/35/40 TDI (excl. S3/RS3)  

## Running Locally

No build step or package manager required — open `index.html` directly in any modern browser or serve the folder with any static HTTP server.

## Version
- Version 1 (13.11.26): initial Website creation and upload
- Version 2 (14.11.26): comprehensive re-design of the homepage, contender selection menu and more cars added
- Version 3 (15.11.26): Weighting via sliders, high-mileage roadmap, 'Before-you-buy:' and more cars added
