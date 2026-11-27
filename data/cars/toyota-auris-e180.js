// AutoDuel Vehicle Data — toyota-auris-e180
registerAutoDuelVehicle({
  roster: {
    id: 'toyota-auris-e180',
    number: '01',
    carType: 'hatchback',
    gridOrder: 1,
    gridLabel: 'Toyota Auris',
    yearMake: '2012-2019 TOYOTA',
    shortTitle: 'AURIS (E180)',
    fullName: '2012-2019 Toyota Auris (E180)',
    rarityClass: 'rarity-legendary',
    drivetrain: 'FWD',
    image: 'assets/toyota-auris-e180.webp',
    defaultEngineId: '1.8-hybrid',
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Comfort-Biased Springs & Progressive Dampers', de: 'Komfortbetonte Federung & sanfte Dämpfer', ru: 'Мягкая комфортная подвеска' } },
            { k: 'seatSupport', v: { en: 'Supportive Cushioning · Relaxed Upright Posture', de: 'Bequeme Polsterung · Entspannte Sitzposition', ru: 'Мягкие кресла · Удобная посадка' } }
          ],
          note: { en: 'Soaks up rough city streets and cobblestones with noticeably less jolt than sportier rivals.', de: 'Schluckt Schlaglöcher und Kopfsteinpflaster deutlich geschmeidiger als straffere Konkurrenten.', ru: 'Отлично сглаживает ямы и неровности города заметно мягче многих одноклассников.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~69 dB(A) at 130 km/h (Quiet for Class)', de: '~69 dB(A) bei 130 km/h (Klassenleise)', ru: '~69 дБ(А) при 130 км/ч (тихо для класса)' } },
            { k: 'acousticGlass', v: { en: 'Acoustic Windscreen + Firewall Insulation (2015+ FL)', de: 'Akustik-Frontscheibe + Stirnwanddämmung (ab 2015)', ru: 'Акустическое лобовое + доп. изоляция (с 2015)' } }
          ],
          note: { en: 'Calm tyre and wind isolation on steady highway cruises; hybrid stays near-silent in city traffic.', de: 'Ruhige Wind- und Abrollgeräusche auf der Autobahn; im Stadtverkehr als Hybrid fast lautlos.', ru: 'Тихая езда на трассе, а гибридная версия в городе почти бесшумна.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashTrim', v: { en: 'Soft-Touch Upper Dash + Stitched Leatherette Trim (FL)', de: 'Soft-Touch-Armaturenbrett + Lederoptik-Zierleiste (FL)', ru: 'Мягкий верх панели + вставка с прострочкой' } },
            { k: 'buildFit', v: { en: 'Tight Panel Gaps · Low Squeak/Rattle Rate', de: 'Saubere Spaltmaße · Kaum Klappergeräusche', ru: 'Плотная подгонка · Минимум сверчков' } }
          ],
          note: { en: 'Post-2015 facelift cabins feel noticeably fresher and hold up cleanly past 200,000 km.', de: 'Besonders das Facelift ab 2015 wirkt hochwertig und altert auch jenseits von 200.000 km sauber.', ru: 'Салон после рестайлинга 2015 года выглядит солидно и достойно сохраняется после 200 тыс. км.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turningDiam', v: '10.4 m' },
            { k: 'bodyDimensions', v: '4,330 × 1,760 mm' }
          ],
          note: { en: 'Tight 10.4 m turning circle makes tight multi-storey garages and U-turns effortless.', de: 'Knapper 10,4 m Wendekreis macht enge Parkhäuser und Wendemanöver kinderleicht.', ru: 'Компактный разворот 10.4 м делает парковку в тесных дворах очень лёгкой.' }
        },
        visibility: {
          specs: [
            { k: 'sightlines', v: { en: 'Good Forward & Side · Medium C-Pillar', de: 'Gute Sicht vorn/seitlich · Mittlere C-Säule', ru: 'Хороший обзор спереди/сбоку · Средняя стойка C' } },
            { k: 'parkingAids', v: { en: 'Rear Camera Common (Most Trims)', de: 'Rückfahrkamera häufig Serie', ru: 'Камера заднего вида в большинстве версий' } }
          ],
          note: { en: 'Clean, uncluttered rear window with widely fitted reversing cameras on most European trims.', de: 'Saubere Heckscheibe und bei den meisten Ausstattungen serienmäßige Rückfahrkamera.', ru: 'Чистое заднее стекло без перемычек плюс часто встречающаяся камера заднего вида.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'ncapOverall', v: '★★★★★ (2013)' },
            { k: 'ncapBreakdown', v: { en: '92% Adult · 84% Child · 68% Pedestrian', de: '92 % Erwachsene · 84 % Kinder · 68 % Fußgänger', ru: '92% Взрослые · 84% Дети · 68% Пешеходы' } },
            { k: 'airbagsCount', v: { en: '7 Airbags (incl. Driver Knee Airbag)', de: '7 Airbags (inkl. Fahrer-Knieairbag)', ru: '7 подушек (вкл. коленную водителя)' } }
          ],
          note: { en: 'Strong 5-star crash shell with standard knee airbag across all trims.', de: 'Stabile 5-Sterne-Sicherheitszelle inklusive Knieairbag in allen Ausstattungen.', ru: 'Крепкий 5-звёздочный кузов с коленной подушкой уже в базе.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeAssists', v: { en: '✓ ESP/VSC · ✓ Toyota Safety Sense AEB (2015+ FL)', de: '✓ ESP/VSC · ✓ Toyota Safety Sense Notbrems (ab 2015)', ru: '✓ ESP/VSC · ✓ Safety Sense AEB (с 2015)' } }
          ],
          note: { en: 'Post-2015 facelift models add Pre-Collision AEB, Lane Departure Alert, and Road Sign Assist.', de: 'Facelift-Modelle ab 2015 bieten Notbrems-, Spurhalte- und Verkehrszeichenassistent.', ru: 'Рестайлинг с 2015 года добавил автоторможение AEB, контроль полосы и распознавание знаков.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'wheelbase', v: '2,600 mm' },
            { k: 'rearLegHead', v: { en: 'Adequate for Adults up to ~1.82 m · Flat Center Floor', de: 'Solide bis ca. 1,82 m · Flacher Mitteltunnel', ru: 'Норма для взрослых до ~1.82 м · Ровный пол' } }
          ],
          note: { en: 'Flat rear floor makes middle-seat footroom better than most hatchbacks.', de: 'Der flache Boden im Fond schafft spürbar mehr Fußraum auf dem mittleren Platz.', ru: 'Ровный пол сзади делает посадку центрального пассажира заметно удобнее.' }
        },
        isofixEntry: {
          specs: [
            { k: 'isofixAccess', v: { en: '✓ 2× Outer ISOFIX · Wide-Opening Doors', de: '✓ 2× ISOFIX außen · Weit öffnende Türen', ru: '✓ 2× ISOFIX · Широкий проём дверей' } }
          ],
          note: { en: 'Easy child-seat mounting and comfortable sill height for everyday family use.', de: 'Gut zugängliche ISOFIX-Anker und angenehme Einstiegshöhe für den Alltag.', ru: 'Удобный доступ к креплениям ISOFIX и комфортная посадка.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootUpDown', v: '360 L / 1,200 L' },
            { k: 'loadSill', v: { en: '~690 mm · Dual-Height Boot Floor', de: '~690 mm · Doppelter Ladeboden', ru: '~690 мм · Двухуровневый пол' } }
          ],
          note: { en: 'Hybrid battery sits under the rear seat so E180 Hybrid keeps the full 360 L boot.', de: 'Hybridakku sitzt unter der Rückbank — der E180 Hybrid behält volle 360 L Kofferraum.', ru: 'Батарея гибрида под задним диваном, поэтому багажник сохраняет все 360 литров.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingMech', v: { en: '60/40 Split-Fold · Flat Floor in Upper Position', de: '60/40 geteilt klappbar · Ebener Ladeboden', ru: 'Складывание 60/40 · Ровный пол' } }
          ],
          note: { en: 'Clean square load bay with adjustable floor board to eliminate the step when folded.', de: 'Quadratischer Zuschnitt und variabler Boden für eine ebene Ladefläche.', ru: 'Правильная форма отсека и ровная площадка при сложенных спинках.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: '~430 kg' },
            { k: 'roofLoad', v: '75 kg' }
          ],
          note: { en: 'Solid compact-hatch carry capacity for 4 adults plus holiday luggage or roof box.', de: 'Solide Kompaktklasse-Zuladung für 4 Personen samt Gepäck oder Dachbox.', ru: 'Хорошая грузоподъёмность для 4 человек с багажом или автобоксом.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: {
        sprint0100: '@sprintDynamic',
        topSpeed: '@vmaxDynamic'
      },
      midRangeTorquePassing: {
        peakTorque: '@torqueDynamic',
        passingPunch: '@passingDynamic'
      },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'kerbWeight', v: '1,235–1,390 kg' },
            { k: 'handlingChar', v: { en: 'Neutral, Composed & Safe · Light City Steering', de: 'Neutral, sicher & gutmütig · Leichte Stadtlenkung', ru: 'Нейтральное, безопасное · Лёгкий руль' } },
            { k: 'tyreSizes', v: '205/55 R16 · 225/45 R17' }
          ],
          note: { en: 'Lower center of gravity on E180 improves stability over the older generation.', de: 'Tieferer Schwerpunkt beim E180 sorgt für spürbar ruhigere Kurvenlage.', ru: 'Сниженный центр тяжести E180 обеспечивает уверенную устойчивость в поворотах.' }
        },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: {
        braking1000: '@brakingDistDynamic',
        brakeSetup: '@brakeSetupDiscs4'
      },
      efficiencyFuel: {
        realWorldFuel: '@fuelDynamic',
        tankRange: '@tankDynamic'
      },
      taxInsuranceNorm: {
        euroNorm: '@euroDynamic',
        taxInsurance: '@taxInsDynamic'
      },
      maintenanceRepairCosts: {
        timingDrive: '@timingDynamic',
        serviceWear: '@serviceDynamic'
      },
      depreciationResale: {
        valueRetention: '@retentionDynamic',
        resaleDemand: '@demandDynamic'
      }
    },
    sharedSpecs: {
      rustProtection: { en: 'Good (Galvanized)', de: 'Gut (Verzinkt)', ru: 'Хорошая (оцинковка)' },
      suspensionWear: { en: 'Multi-Link Rear', de: 'Mehrlenker-HA', ru: 'Многорычажка сзади' },
      starterAlternator: { en: '✓ Standard 12V', de: '✓ Klassisch 12V', ru: '✓ Обычные 12В' },
      electronicsRisk: { en: 'Low (Simple Bus)', de: 'Gering (Robust)', ru: 'Низкий риск' },
      rideTuning: { en: 'Soft / Comfort', de: 'Weich / Komfort', ru: 'Мягкая / Комфорт' },
      highwayNoise: { en: '~69 dB · Quiet', de: '~69 dB · Leise', ru: '~69 дБ · Тихо' },
      cabinMaterials: { en: 'Soft-Touch Upper', de: 'Soft-Touch oben', ru: 'Мягкий верх панели' },
      controls: { en: '✓ Physical Buttons', de: '✓ Echte Tasten', ru: '✓ Физ. кнопки' },
      turningCircle: '10.4 m',
      visibility: { en: 'Good All-Round', de: 'Gute Rundumsicht', ru: 'Хороший обзор' },
      euroNcap: '★★★★★ (2013)',
      safetyTech: { en: '✓ ESP · ✓ AEB (2015+)', de: '✓ ESP · ✓ Notbrems (ab 15)', ru: '✓ ESP · ✓ AEB (с 2015)' },
      rearRoom: { en: 'Compact / Adequate', de: 'Kompakt / Solide', ru: 'Компактно / Норма' },
      isofixEntry: { en: '✓ 2× ISOFIX · Low', de: '✓ 2× ISOFIX · Tief', ru: '✓ 2× ISOFIX · Низкий' },
      bootVolume: '360 L / 1,200 L',
      seatUtility: { en: '60/40 Flat Floor', de: '60/40 Ebener Boden', ru: '60/40 Ровный пол' },
      payloadRoof: '430 kg · 75 kg',
      driveline: 'FWD',
      chassisFeel: { en: 'Neutral / Safe', de: 'Neutral / Sicher', ru: 'Нейтральное / Безоп.' },
      tractionDiff: { en: 'FWD · Open Diff', de: 'FWD · Offen', ru: 'FWD · Своб. дифф.' },
      braking1000: '~36.5 m',
      brakeSetup: { en: '4× Disc Brakes', de: '4× Scheibenbremsen', ru: '4× Дисковые' },
      valueRetention: { en: 'High', de: 'Hoch', ru: 'Высокий' },
      resaleDemand: { en: 'Steady Demand', de: 'Stabile Nachfrage', ru: 'Стабильный спрос' }
    },
    sharedBuyerFit: {
      cards: {
        // Shared Chassis & Auris-Wide Cards
        naProvenReliability: {
          en: 'You hate surprise repair bills: Proven Japanese naturally aspirated reliability with timing-chain simplicity and low workshop costs.',
          de: 'Du hasst unerwartete Werkstattrechnungen: Bewährte japanische Sauger-Zuverlässigkeit mit robuster Steuerkette und günstigen Werkstattkosten.',
          ru: 'Ты не любишь внезапные траты на сервис: Проверенная японская надёжность атмосферника с цепным ГРМ и недорогим обслуживанием.'
        },
        toyotaEverydayComfort: {
          en: 'You want an easy, refined daily driver: Comfortable ride, light controls, and solid Toyota build quality for everyday commuting.',
          de: 'Du willst ein entspanntes, kultiviertes Alltagsauto: Komfortables Fahrwerk, leichte Bedienung und solide Toyota-Verarbeitungsqualität.',
          ru: 'Тебе нужен спокойный и удобный авто на каждый день: Комфортная подвеска, лёгкое управление и добротная сборка Toyota.'
        },
        bmwDieselWatchout: {
          en: 'You want classic Toyota diesel durability: This 1.6 is BMW-sourced (not a Toyota block) — budget carefully for cooling-system and timing-chain upkeep.',
          de: 'Du willst klassische Toyota-Diesel-Robustheit: Dieser 1.6 stammt von BMW (kein Toyota-Block) — plane Kühlungs- und Steuerketten-Pflege ein.',
          ru: 'Ты ждёшь классической неубиваемости Toyota: Этот 1.6 разработан BMW (не блок Toyota) — следи за системой охлаждения и цепью ГРМ.'
        },
        simpleNoTurbo: {
          en: 'You want simple mechanics: No turbocharger, no high-pressure diesel pump, and no costly dual-mass flywheel to fail on you.',
          de: 'Du willst simple Technik: Kein Turbolader, keine Hochdruck-Dieselpumpe und kein teures Zweimassenschwungrad, das kaputtgehen kann.',
          ru: 'Тебе нужна простая конструкция: Без турбины, дорогого ТНВД и двухмассового маховика, которым нечему ломаться.'
        },
        petrolCityZones: {
          en: 'You drive in urban low-emission zones: Clean Euro 5/6 petrol status means zero diesel-ban headaches and cheap road tax.',
          de: 'Du fährst in Umweltzonen: Sauberer Euro-5/6-Benziner ohne Fahrverbots-Sorgen und mit günstiger Kfz-Steuer.',
          ru: 'Ты ездишь по крупным городам: Чистый бензиновый класс Euro 5/6 избавляет от дизельных ограничений и лишних налогов.'
        },
        cityHatchback: {
          en: 'You park in tight city spots: Light controls, good visibility, and compact dimensions make tight parking effortless for you.',
          de: 'Du parkst oft in engen Stadtlücken: Leichtgängige Bedienung, gute Übersicht und kompakte Maße machen dir das Parken leicht.',
          ru: 'Ты часто паркуешься в тесном городе: Лёгкое управление, хороший обзор и компактные габариты упрощают парковку.'
        },
        compactBoot: {
          en: 'You regularly pack bulky family luggage: The compact 360 L boot handles groceries and weekend bags fine, but you\'ll feel tight on space with big strollers or heavy holiday loads.',
          de: 'Du packst oft sperriges Familiengepäck ein: Der kompakte 360-L-Kofferraum reicht für Einkäufe und Wochenendtaschen, wird mit großem Kinderwagen oder Urlaubsgepäck aber eng.',
          ru: 'Ты часто возишь крупный семейный багаж: Компактного 360-литрового багажника хватит для покупок и сумок на выходные, но с большой коляской и чемоданами будет тесновато.'
        },
        plainPlastics: {
          en: 'You crave sporty feedback or plush luxury: The steering feels light and the lower cabin plastics are plain — it\'s built to be sensible for you, not exciting.',
          de: 'Du suchst sportliches Feedback oder Luxus-Flair: Die Lenkung wirkt leichtgängig und unten im Innenraum dominiert schlichtes Plastik — vernünftig für dich gebaut, nicht aufregend.',
          ru: 'Ты ждёшь острого руля и премиум-салона: Руль здесь лёгкий, а внизу салона простой пластик — машину делали практичной для тебя, а не азартной.'
        },

        // 1.8 Hybrid Cards
        hybridCity: {
          en: 'You commute in city traffic: You\'ll glide through stop-and-go streets in near-silent EV mode at around 4.5 L/100 km — and you never have to plug it in.',
          de: 'Du pendelst im Stadtverkehr: Du gleitest im Stop-and-Go fast lautlos im EV-Modus mit rund 4,5 L/100 km — ganz ohne jemals ein Ladekabel einzustecken.',
          ru: 'Ты ездишь по городским пробкам: Ты плавно катишься в тихом EV-режиме с расходом около 4,5 л/100 км — и при этом никаких проводов и розеток.'
        },
        hybridNoWearParts: {
          en: 'You hate surprise repair bills: With TÜV Top 3% reliability and no clutch, turbo, starter motor, or alternator, there are simply fewer parts that can break on you.',
          de: 'Du hasst unerwartete Werkstattrechnungen: Mit TÜV-Top-3%-Zuverlässigkeit und ohne Kupplung, Turbo, Anlasser oder Lichtmaschine geht bei dir einfach weniger kaputt.',
          ru: 'Ты не любишь внезапные траты на ремонт: Надёжность в топ-3% TÜV и отсутствие сцепления, турбины, стартера и генератора означают, что у тебя просто меньшему ломаться.'
        },
        hybridLowTax: {
          en: 'You want low everyday running costs: Minimal road tax, clean city-zone access, and gentle brake wear mean more money stays in your pocket every month.',
          de: 'Du willst niedrige laufende Kosten: Minimale Kfz-Steuer, freie Fahrt in Umweltzonen und geringer Bremsenverschleiß lassen dir jeden Monat mehr Geld in der Tasche.',
          ru: 'Тебе важны низкие расходы каждый день: Минимальный налог, свободный въезд в эко-зоны и щадящий износ тормозов оставляют больше денег в твоём бюджете.'
        },
        hybridKeepLong: {
          en: 'You plan to keep the car for years: Easygoing automatic-style driving and a proven hybrid setup make it a stress-free companion well past 200,000 km.',
          de: 'Du willst dein Auto viele Jahre fahren: Entspanntes Automatik-Feeling und die bewährte Hybridtechnik machen ihn auch jenseits von 200.000 km zum treuen Begleiter.',
          ru: 'Ты берёшь машину на долгие годы: Лёгкая езда как на автомате и проверенный гибрид делают её спокойным спутником далеко за 200 000 км.'
        },
        hybridTowingCap: {
          en: 'You need to tow a trailer: With a strict 385 kg towing limit, this isn\'t for you if you haul a caravan or utility trailer (a bike rack is fine, though).',
          de: 'Du musst einen Anhänger ziehen: Mit strikten 385 kg Anhängelast ist er nichts für dich, wenn du Wohnwagen oder Lastenanhänger ziehst (ein Fahrradträger passt aber).',
          ru: 'Тебе нужно таскать прицеп: При строгом лимите в 385 кг машина не для тебя, если нужен прицеп или дом на колёсах (а вот велокрепление подойдёт).'
        },
        hybridHillDrone: {
          en: 'You push hard on hills or the motorway: Floor it to overtake or climb steep inclines and you\'ll notice the 10.9 s pace and the engine drone under load.',
          de: 'Du fährst gern zügig bergauf oder auf der Autobahn: Gibst du beim Überholen oder am Berg Vollgas, merkst du die 10,9 s Tempo und das Aufheulen des Motors unter Last.',
          ru: 'Ты любишь активно ехать в гору и по трассе: При резком обгоне или на затяжном подъёме сразу чувствуются 10,9 с разгона и заметный гул мотора под нагрузкой.'
        },

        // 1.33 Dual VVT-i Cards
        na133Budget: {
          en: 'You\'re buying on a tight budget: Much cheaper to buy and insure than the Hybrid, while still keeping servicing bills remarkably low.',
          de: 'Du achtest aufs Budget: Deutlich günstiger in der Anschaffung und Versicherung als der Hybrid, bei ähnlich niedrigen Wartungskosten.',
          ru: 'У тебя ограниченный бюджет: Заметно дешевле гибрида при покупке и в страховке, при этом обслуживание остаётся копеечным.'
        },
        na133SlowOvertake: {
          en: 'You overtake often or drive loaded: With 99 HP and a 12.6 s 0–100 km/h sprint, you\'ll need to downshift early and plan every pass.',
          de: 'Du überholst oft oder fährst voll beladen: Mit 99 PS und 12,6 s auf 100 km/h musst du früh herunterschalten und jeden Überholvorgang planen.',
          ru: 'Ты часто обгоняешь или ездишь с полной загрузкой: Со 99 л.с. и 12,6 с до 100 км/ч придётся заранее понижать передачу и рассчитывать каждый обгон.'
        },
        na133HighRevs: {
          en: 'You cruise fast on the motorway: Above 120 km/h the 1.33 revs high, gets noticeably louder, and loses its fuel-economy edge.',
          de: 'Du fährst oft schnell Autobahn: Über 120 km/h dreht der 1.33 hoch, wird spürbar lauter und verliert seinen Verbrauchsvorteil.',
          ru: 'Ты много ездишь по быстрой трассе: После 120 км/ч мотор крутится высоко, заметно шумит и теряет свою экономичность.'
        },

        // 1.6 Valvematic Cards
        na16BalancedPace: {
          en: 'You want lively petrol power without a turbo: With 132 HP and a crisp 6-speed manual, you get confident overtakes without turbo complexity.',
          de: 'Du willst flotte Benziner-Leistung ohne Turbo: Mit 132 PS und knackigem 6-Gang-Getriebe überholst du souverän, ohne Turbo-Risiko.',
          ru: 'Ты хочешь бодрый бензин без турбины: 132 л.с. и чёткая 6-ступенчатая механика дают уверенный разгон без турбо-рисков.'
        },
        na16HigherFuel: {
          en: 'You drive mostly stop-and-go city miles: Unlike the Hybrid, city traffic pushes real-world consumption up to around 7.5–8.5 L/100 km.',
          de: 'Du fährst fast nur Stadtverkehr: Anders als beim Hybrid steigt dein realer Verbrauch im Stop-and-Go auf etwa 7,5–8,5 L/100 km.',
          ru: 'Ты в основном стоишь в городских пробках: В отличие от гибрида, реальный расход в городе поднимается до 7,5–8,5 л/100 км.'
        },
        na16RevOnMotorway: {
          en: 'You want effortless low-rev pull: Without a turbo, you\'ll need to rev past 4,000 rpm for brisk hills or motorway passes.',
          de: 'Du willst mühelosen Durchzug aus dem Drehzahlkeller: Ohne Turbo musst du am Berg oder beim Überholen über 4.000/min drehen.',
          ru: 'Тебе нужна лёгкая тяга с низов: Без турбины для бодрого обгона или подъёма мотор придётся крутить выше 4000 об/мин.'
        },

        // 1.2 Turbo Cards
        turboLowEndTorque: {
          en: 'You prefer effortless low-rev pull: Turbo torque from 1,500 rpm lets you accelerate smoothly without constantly revving the engine.',
          de: 'Du magst mühelosen Durchzug ab Drehzahlkeller: Turbo-Drehmoment ab 1.500/min lässt dich entspannt beschleunigen, ohne hochzudrehen.',
          ru: 'Тебе нравится тяга с низов: Турбо-момент уже с 1500 об/мин позволяет ускоряться плавно, не выкручивая мотор.'
        },
        turboQuietCruise: {
          en: 'You want a quieter motorway petrol: Taller gearing and smooth 4-cylinder refinement keep cabin noise lower at 130 km/h than the 1.33.',
          de: 'Du willst einen leiseren Autobahn-Benziner: Länger übersetzt und kultivierter als der 1.33 bleibt er bei 130 km/h deutlich ruhiger.',
          ru: 'Ты хочешь тихий бензин для трассы: Длинные передачи и мягкая работа делают его заметно тише на 130 км/ч, чем 1.33.'
        },
        turboShortTripPenalty: {
          en: 'You only do 5-minute cold-engine hops: Direct-injection turbos dislike constant short trips, raising carbon buildup and fuel use.',
          de: 'Du fährst fast nur 5-Minuten-Kurzstrecken: Direkteinspritzer-Turbos mögen ständigen Kaltbetrieb nicht — das erhöht Verbrauch und Verkokung.',
          ru: 'У тебя одни короткие поездки по 5 минут: Турбомотор с прямым впрыском не любит вечный недогрев — растёт расход и нагар.'
        },
        turboHighSpeedFuel: {
          en: 'You drive hard at high speeds: Push the small 1.2T fast on the Autobahn and real-world consumption climbs quickly past 7.5 L/100 km.',
          de: 'Du fährst gern Vollgas auf der Autobahn: Forderst du den kleinen 1.2T dauerhaft, klettert der Verbrauch schnell über 7,5 L/100 km.',
          ru: 'Ты любишь быстро ехать по трассе: Если активно давить на газ, маленький 1.2T быстро выходит за 7,5 л/100 км.'
        },

        // Diesel Cards (1.4 / 1.6 / 2.0 D-4D)
        diesel90Economy: {
          en: 'You rack up steady commuter miles on a budget: Simple 90 HP diesel sips ~4.2–4.8 L/100 km on country roads and costs far less to buy than the Hybrid.',
          de: 'Du fährst viele Pendel-Kilometer zum Sparpreis: Der simple 90-PS-Diesel begnügt sich mit ca. 4,2–4,8 L/100 km und kostet deutlich weniger als der Hybrid.',
          ru: 'Ты много ездишь за городом и экономишь бюджет: Простой 90-сильный дизель тратит ~4,2–4,8 л/100 км и стоит заметно дешевле гибрида.'
        },
        diesel90SlowHighway: {
          en: 'You expect punchy highway passing: With 90 HP and 12.5 s to 100 km/h, brisk motorway merges and steep climbs take patience.',
          de: 'Du erwartest kraftvolle Autobahn-Reserven: Mit 90 PS und 12,5 s auf 100 km/h brauchst du bei schnellen Überholmanövern Geduld.',
          ru: 'Ты ждёшь бодрых обгонов на трассе: Со 90 л.с. и 12,5 с до 100 км/ч обгоны и затяжные подъёмы требуют терпения.'
        },
        dieselHighwayTorque: {
          en: 'You cover long motorway distances: Strong mid-range torque and relaxed 6-speed gearing let you cruise 130 km/h effortlessly at ~5 L/100 km.',
          de: 'Du fährst regelmäßig lange Autobahnstrecken: Kräftiger Durchzug und das lange 6-Gang-Getriebe lassen dich mühelos mit ca. 5 L/100 km reisen.',
          ru: 'Ты регулярно ездишь на дальние расстояния: Уверенная тяга в середине и 6-я передача позволяют легко держать 130 км/ч при ~5 л/100 км.'
        },
        dieselTowing: {
          en: 'You occasionally pull a trailer: Unlike the Hybrid (385 kg), the stronger diesel hauls up to 1,300–1,500 kg braked without breaking a sweat.',
          de: 'Du ziehst gelegentlich einen Anhänger: Anders als der Hybrid (385 kg) zieht der kräftigere Diesel problemlos 1.300–1.500 kg gebremst.',
          ru: 'Ты иногда таскаешь прицеп: В отличие от гибрида (385 кг), тяговитый дизель уверенно берёт прицеп до 1300–1500 кг.'
        },
        dieselDpfShortTrips: {
          en: 'You mainly do short city errands: The particulate filter needs regular warm highway runs — constant short trips will trigger DPF warning lights.',
          de: 'Du fährst fast nur kurze Stadtwege: Der Partikelfilter braucht regelmäßige Warmfahrten — reine Kurzstrecke führt früher oder später zu DPF-Problemen.',
          ru: 'Ты ездишь только по коротким городским делам: Сажевому фильтру (DPF) нужны регулярные прогревы на трассе, иначе в городе он быстро забьётся.'
        },
        dieselUrbanBan: {
          en: 'You live inside strict diesel-ban cities: Pre-2015 Euro 5 diesels face tightening urban restrictions and slower city resale demand.',
          de: 'Du wohnst in Städten mit strengen Diesel-Regeln: Euro-5-Diesel vor 2015 unterliegen teils Fahrverboten und verkaufen sich in Großstädten zäher.',
          ru: 'Ты живёшь в зоне строгих эко-ограничений: Дизели Euro 5 до 2015 года сталкиваются с запретами в ряде городов и ниже спросом на вторичке.'
        }
      }
    },
    buyerFitGroups: {
      hybrid: {
        summary: {
          en: 'A stress-free, ultra-reliable city & commuter hybrid — built for low running costs, not speed or towing.',
          de: 'Ein stressfreier, extrem zuverlässiger Stadt- und Pendler-Hybrid — gebaut für niedrige Kosten, nicht für Tempo oder Anhänger.',
          ru: 'Спокойный и сверхнадёжный городской гибрид — создан для минимальных расходов, а не для гонок или прицепов.'
        },
        ideal: ['hybridCity', 'hybridNoWearParts', 'hybridLowTax', 'hybridKeepLong'],
        skip: ['hybridTowingCap', 'hybridHillDrone', 'compactBoot', 'plainPlastics']
      },
      'na-petrol-133': {
        summary: {
          en: 'An honest, low-budget city & short-trip hatchback — ultra-simple mechanics, modest highway pace.',
          de: 'Ein ehrlicher, günstiger Stadt- und Kurzstrecken-Kompakter — extrem simple Technik, gemächliches Autobahntempo.',
          ru: 'Честный и недорогой городской хэтчбек — максимально простая техника, но без запаса мощности на трассе.'
        },
        ideal: ['na133Budget', 'simpleNoTurbo', 'naProvenReliability', 'petrolCityZones'],
        skip: ['na133SlowOvertake', 'na133HighRevs', 'compactBoot', 'plainPlastics']
      },
      'na-petrol-16': {
        summary: {
          en: 'A dependable all-rounder with honest 132 HP non-turbo punch — ideal if you want brisk simplicity over hybrid tech.',
          de: 'Ein zuverlässiger Allrounder mit ehrlichen 132 Sauger-PS — ideal, wenn du flotte Einfachheit statt Hybridtechnik willst.',
          ru: 'Надёжный универсал со 132 атмосферными силами — отличный выбор, если хочется простой тяги без гибрида и турбины.'
        },
        ideal: ['na16BalancedPace', 'simpleNoTurbo', 'naProvenReliability', 'petrolCityZones'],
        skip: ['na16HigherFuel', 'na16RevOnMotorway', 'compactBoot', 'plainPlastics']
      },
      'turbo-petrol': {
        summary: {
          en: 'A smooth, quiet modern petrol hatchback — great low-end pull for mixed driving, best kept warm on longer runs.',
          de: 'Ein ruhiger, moderner Turbo-Benziner — kräftiger Durchzug im Alltag, fühlt sich auf längeren Strecken am wohlsten.',
          ru: 'Тихий и современный турбо-хэтчбек — приятная тяга с низов на каждый день, но не любит вечно холодных коротких поездок.'
        },
        ideal: ['turboLowEndTorque', 'turboQuietCruise', 'toyotaEverydayComfort', 'petrolCityZones'],
        skip: ['turboShortTripPenalty', 'turboHighSpeedFuel', 'compactBoot', 'plainPlastics']
      },
      'small-diesel': {
        summary: {
          en: 'A thrifty, simple 90 HP commuter diesel for steady country-road miles — skip it if you stay in city traffic.',
          de: 'Ein sparsamer, simpler 90-PS-Pendlerdiesel für Überlandstrecken — nichts für reine Stadtfahrer.',
          ru: 'Экономичный и простой 90-сильный дизель для загородных поездок — не лучший выбор, если не выезжаешь из города.'
        },
        ideal: ['diesel90Economy', 'toyotaEverydayComfort', 'cityHatchback', 'dieselTowing'],
        skip: ['dieselDpfShortTrips', 'diesel90SlowHighway', 'dieselUrbanBan', 'compactBoot']
      },
      'highway-diesel': {
        summary: {
          en: 'A torquey, fuel-efficient motorway commuter with solid towing reserve — wasted on short city hops.',
          de: 'Ein durchzugsstarker, sparsamer Langstrecken-Diesel mit Anhänger-Reserve — auf kurzen Stadtwegen fehl am Platz.',
          ru: 'Тяговитый трассовый дизель для дальних дорог и прицепа — бессмысленный вариант для коротких городских поездок.'
        },
        ideal: ['dieselHighwayTorque', 'dieselTowing', 'toyotaEverydayComfort', 'cityHatchback'],
        skip: ['dieselDpfShortTrips', 'dieselUrbanBan', 'compactBoot', 'plainPlastics']
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Solid Underbody Protection & Long-Lived Suspension',
          strengths: [
            'Factory underbody coating and wheel-arch liners protect key sills and floorpans well against winter salt.',
            'Front MacPherson struts, ball joints, and bushings routinely reach 150,000+ km without premature play.'
          ],
          watchouts: [
            'Surface rust can form on rear subframe welds and exhaust hangers in heavy-salt regions.',
            'Thin Toyota clearcoat on front bumper and bonnet chips easily on motorway commutes.'
          ],
          beforeYouBuy: [
            'Check rear subframe, sills, and jacking points on a lift for flaking rust.',
            'Inspect door lower seams and tailgate edge for stone chips.'
          ]
        },
        de: {
          headline: 'Solider Unterbodenschutz & langlebiges Fahrwerk',
          strengths: [
            'Werksseitiger Unterbodenschutz und Radhausschalen schützen Schweller und Bodenblech gut vor Streusalz.',
            'Vorderachse, Traggelenke und Querlenkerlager erreichen oft problemlos über 150.000 km.'
          ],
          watchouts: [
            'Oberflächenrost kann an hinteren Achsträger-Schweißnähten und Auspuffhaltern auftreten.',
            'Dünner Klarlack an Frontschürze und Motorhaube neigt zu Steinschlägen.'
          ],
          beforeYouBuy: [
            'Hinteren Achsträger, Schweller und Wagenheberaufnahmen auf Rost prüfen.',
            'Türkanten und Heckklappe auf Steinschläge kontrollieren.'
          ]
        },
        ru: {
          headline: 'Хороший антикор днища и выносливая подвеска',
          strengths: [
            'Заводская обработка днища и подкрылки надёжно защищают пороги от зимних реагентов.',
            'Шаровые опоры и сайлентблоки передней подвески спокойно служат 150 000+ км.'
          ],
          watchouts: [
            'Поверхностная ржавчина возможна на сварных швах заднего подрамника и креплениях глушителя.',
            'Тонкий слой лака на капоте и переднем бампере легко собирает сколы.'
          ],
          beforeYouBuy: [
            'Осмотреть задний подрамник и пороги на подъёмнике.',
            'Проверить кромки дверей и крышки багажника на наличие сколов.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Ergonomic Physical Controls with Modest Lower Plastics',
          strengths: [
            'Separate physical dials and buttons for climate control make adjustments effortless without taking eyes off the road.',
            'Touch 2 infotainment supports Bluetooth, rear camera, and optional navigation with reliable touch response.'
          ],
          watchouts: [
            'Hard, scratch-prone plastics on lower door cards and centre console; pre-2015 models feel utilitarian.',
            'Piano-black trim and fabric seat bolsters show wear around 120,000+ km.'
          ],
          beforeYouBuy: [
            'Test all Touch 2 screen zones, Bluetooth pairing, and dual-zone climate flaps.'
          ]
        },
        de: {
          headline: 'Ergonomische Tastenbedienung bei schlichter Materialwahl',
          strengths: [
            'Klare physische Drehregler und Tasten für die Klimaanlage erlauben blinde Bedienung während der Fahrt.',
            'Toyota Touch 2 bietet solide Bluetooth-Anbindung, Rückfahrkamera und intuitive Grundfunktionen.'
          ],
          watchouts: [
            'Harte, kratzempfindliche Kunststoffe im unteren Türbereich; Vor-Facelift wirkt recht nüchtern.',
            'Klavierlack-Blenden und Sitzwangen zeigen ab ca. 120.000 km sichtbare Gebrauchsspuren.'
          ],
          beforeYouBuy: [
            'Touch-2-Display, Bluetooth-Verbindung und Klimastellmotoren testen.'
          ]
        },
        ru: {
          headline: 'Удобная эргономика кнопок при простом пластике',
          strengths: [
            'Отдельный блок физических кнопок и ручек климата позволяет управлять им не отвлекаясь от дороги.',
            'Мультимедиа Touch 2 стабильно работает с Bluetooth и камерой заднего вида.'
          ],
          watchouts: [
            'Жёсткий пластик в нижней части дверей и консоли легко царапается; дорестайлинг выглядит скромно.',
            'Глянцевые вставки и боковины сидений изнашиваются к 120 000+ км.'
          ],
          beforeYouBuy: [
            'Проверить отклик сенсора Touch 2, Bluetooth и заслонки климат-контроля.'
          ]
        }
      },
      visibilityManeuverability: {
        en: {
          headline: 'Nimble 10.4 m Turning Circle Offset by Thick Rear Pillars',
          strengths: [
            'Compact 4.28 m length and tight 10.4 m turning circle make tight city streets and parallel parking easy.',
            'Standard reverse camera on most mid/high trims compensates well for the high rear window line.'
          ],
          watchouts: [
            'Wide C-pillars and a narrow rear screen create noticeable over-the-shoulder blind spots.',
            'Rear camera lens sits exposed above the plate and easily collects road grime in wet weather.'
          ],
          beforeYouBuy: [
            'Check that the reverse camera image is crisp and not fogged by moisture.'
          ]
        },
        de: {
          headline: 'Wendiger 10,4-m-Wendekreis, breite C-Säulen',
          strengths: [
            'Kompakte 4,28 m Außenlänge und 10,4 m Wendekreis erleichtern das Rangieren in engen Innenstädten.',
            'Serienmäßige Rückfahrkamera (ab mittlerer Ausstattung) gleicht die hohe Hecklinie gut aus.'
          ],
          watchouts: [
            'Breite C-Säulen und eine schmale Heckscheibe erzeugen spürbare tote Winkel beim Schulterblick.',
            'Die Kameralinse verschmutzt bei Regenwetter schnell.'
          ],
          beforeYouBuy: [
            'Prüfen, ob die Rückfahrkamera ein klares Bild liefert und nicht beschlagen ist.'
          ]
        },
        ru: {
          headline: 'Маневренность в городе при широких задних стойках',
          strengths: [
            'Длина 4,28 м и радиус разворота 10,4 м делают парковку и развороты в узких дворах лёгкими.',
            'Камера заднего вида (в большинстве комплектаций) компенсирует высокую линию багажника.'
          ],
          watchouts: [
            'Широкие задние стойки и узкое стекло ограничивают обзор назад при перестроениях.',
            'Объектив камеры быстро пачкается в слякоть.'
          ],
          beforeYouBuy: [
            'Проверить чистоту и чёткость изображения камеры заднего вида.'
          ]
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5-Star Structure with 7 Airbags',
          strengths: [
            'Scored 5 stars in Euro NCAP (2013) with 92% adult occupant protection and 7 airbags including driver knee bag.',
            'Standard VSC stability control, hill-start assist, and ISOFIX anchors; 2015+ facelift added optional Toyota Safety Sense.'
          ],
          watchouts: [
            'Pre-2015 models lack autonomous emergency braking (AEB) and lane-departure warning.',
            'Blind-spot monitoring was not widely fitted even on mid-level trims.'
          ],
          beforeYouBuy: [
            'Verify no airbag or VSC warning lights stay illuminated on startup.'
          ]
        },
        de: {
          headline: 'Euro NCAP 5-Sterne-Karosserie mit 7 Airbags',
          strengths: [
            '5 Sterne im Euro-NCAP-Crashtest (2013) mit 92 % Insassenschutz und 7 Airbags inkl. Knieairbag.',
            'Serie mit VSC-ESP und Berganfahrhilfe; ab Facelift 2015 optional mit Toyota Safety Sense (Notbremsassistent).'
          ],
          watchouts: [
            'Vor-Facelift-Modelle vor 2015 besitzen noch keinen automatischen Notbremsassistenten.',
            'Totwinkel-Assistent ist selbst bei mittleren Ausstattungen selten.'
          ],
          beforeYouBuy: [
            'Kontrollieren, dass beim Start keine Airbag- oder VSC-Warnleuchten anbleiben.'
          ]
        },
        ru: {
          headline: '5 звёзд Euro NCAP и 7 подушек безопасности',
          strengths: [
            '5 звёзд Euro NCAP (2013): 92% защиты взрослых пассажиров и 7 подушек, включая коленную для водителя.',
            'Система курсовой устойчивости VSC и помощь на подъёме в базе; с 2015 года доступен пакет Safety Sense.'
          ],
          watchouts: [
            'На дорестайлинговых авто (до 2015 г.) нет автоматического экстренного торможения.',
            'Контроль слепых зон встречается редко даже в средних комплектациях.'
          ],
          beforeYouBuy: [
            'Убедиться, что контрольные лампы подушек и VSC гаснут после запуска.'
          ]
        }
      },
      passengerSpaceErgonomics: {
        en: {
          headline: 'Supportive Front Seats with Average Compact Rear Legroom',
          strengths: [
            'Well-bolstered front seats with generous headroom and tilt/telescopic steering adjustment for tall drivers.',
            'Nearly flat rear floor makes the middle seat usable for short trips.'
          ],
          watchouts: [
            'Rear knee room is tighter than class leaders like Honda Civic or Skoda Octavia behind tall front passengers.',
            'Sloping roofline slightly reduces rear headroom for adults over 1.85 m.'
          ],
          beforeYouBuy: [
            'Sit in the back behind your own driving position if you regularly carry adult passengers.'
          ]
        },
        de: {
          headline: 'Bequeme Vordersitze, durchschnittlicher Fond-Platz',
          strengths: [
            'Gut geformte Vordersitze mit viel Kopffreiheit und großem Verstellbereich für Lenkrad und Sitz.',
            'Flacher Mitteltunnel hinten erleichtert das Sitzen auf dem mittleren Platz.'
          ],
          watchouts: [
            'Kniefreiheit im Fond fällt knapper aus als bei Honda Civic oder VW Golf.',
            'Abgeschwächte Dachlinie begrenzt die Kopffreiheit hinten für Personen über 1,85 m.'
          ],
          beforeYouBuy: [
            'Bei häufiger Nutzung des Fonds die Beinfreiheit hinter der eigenen Sitzposition testen.'
          ]
        },
        ru: {
          headline: 'Удобная посадка спереди и средний запас сзади',
          strengths: [
            'Комфортные передние кресла с хорошей боковой поддержкой и широким диапазоном регулировок руля.',
            'Практически ровный пол сзади упрощает посадку третьего пассажира.'
          ],
          watchouts: [
            'Запас места для коленей сзади скромнее, чем у Honda Civic или Skoda Octavia.',
            'Покатая крыша слегка ограничивает запас над головой для пассажиров выше 1,85 м.'
          ],
          beforeYouBuy: [
            'Примериться на заднем ряду «сам за собой», если планируются поездки с взрослыми пассажирами.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: 'Practical 360 L Dual-Floor Boot (Uncompromised in Hybrid)',
          strengths: [
            '360 L boot (1,200 L folded) with a two-level adjustable floor that creates a flat load bay when seats fold.',
            'Hybrid battery sits under the rear seats, so the Hybrid keeps the exact same 360 L luggage capacity as petrol/diesel.'
          ],
          watchouts: [
            'Smaller overall volume than Honda Civic (477 L) or Touring Sports estate if carrying bulky strollers.',
            'High load lip requires lifting heavy suitcases slightly over the bumper.'
          ],
          beforeYouBuy: [
            'Check that the removable dual-level boot floor panel is present and unbroken.'
          ]
        },
        de: {
          headline: 'Praktischer 360-L-Kofferraum (auch im Hybrid voll nutzbar)',
          strengths: [
            '360 Liter Volumen (1.200 L umgeklappt) mit doppeltem Ladeboden für eine nahezu ebene Ladefläche.',
            'Da der Hybrid-Akku unter der Rückbank liegt, verliert der Hybrid keinen Liter Kofferraumvolumen.'
          ],
          watchouts: [
            'Insgesamt kleiner als beim Honda Civic (477 L) — für große Kinderwagen ggf. Kombi (Touring Sports) wählen.',
            'Deutliche Ladekante erfordert Anheben schwerer Koffer.'
          ],
          beforeYouBuy: [
            'Prüfen, ob der doppelte Ladeboden vollständig und unbeschädigt vorhanden ist.'
          ]
        },
        ru: {
          headline: 'Практичный багажник 360 л с двухуровневым полом',
          strengths: [
            '360 л объёма (1 200 л при сложенных сиденьях) и регулируемый пол, дающий ровную площадку.',
            'Батарея гибрида размещена под задним сиденьем, поэтому объём багажника такой же, как у бензина/дизеля.'
          ],
          watchouts: [
            'Общий объём меньше, чем у Honda Civic (477 л) — для крупных колясок лучше версия универсал.',
            'Высокий порог проёма требует приподнимать тяжёлые грузы.'
          ],
          beforeYouBuy: [
            'Проверить наличие и целостность съёмного двухуровневого пола багажника.'
          ]
        }
      },
      brakingPerformance: {
        en: {
          headline: 'All-Round Discs with Natural Pedal Modulation',
          strengths: [
            'Linear hydraulic brake pedal without hybrid regenerative blending.',
            'Good fade resistance and inexpensive pad/disc replacements.'
          ],
          watchouts: [
            'Lacks regenerative braking assist, so pads wear at normal rates in heavy city use.',
            'Rear caliper slide pins can seize if uncleaned during service.'
          ]
        },
        de: {
          headline: 'Scheibenbremsen rundum mit direktem Druckpunkt',
          strengths: [
            'Natürliches Bremsgefühl und solide Standfestigkeit.',
            'Günstige Ersatzteilpreise für Scheiben und Beläge.'
          ],
          watchouts: [
            'Ohne Rekuperation normaler Belagverschleiß im Stadtverkehr.',
            'Hintere Bremssattel-Führungen bei Wartung regelmäßig reinigen.'
          ]
        },
        ru: {
          headline: 'Дисковые тормоза с понятной обратной связью',
          strengths: [
            'Естественное усилие на педали и стабильное торможение.',
            'Доступная стоимость расходников.'
          ],
          watchouts: [
            'Без рекуперации колодки изнашиваются быстрее, чем у гибрида.',
            'Важно обслуживать направляющие задних суппортов.'
          ]
        }
      },
      handlingAgility: {
        en: {
          headline: 'Multi-Link Rear Suspension & Balanced Petrol Weight',
          strengths: [
            'Pairs the multi-link rear axle with a lighter front end than diesel models.',
            'Composed cornering and predictable wet-weather balance.'
          ],
          watchouts: [
            'Light electric steering prioritizes comfort over sharp sport-hatch feedback.',
            'Soft suspension allows moderate body roll in fast corners.'
          ]
        },
        de: {
          headline: 'Mehrlenker-Hinterachse & ausgewogene Gewichtsverteilung',
          strengths: [
            'Nutzt die hochwertigere Mehrlenker-Hinterachse bei leichterem Vorderwagen als beim Diesel.',
            'Sehr ausgewogenes, sicheres Fahrverhalten.'
          ],
          watchouts: [
            'Leichtgängige Lenkung bietet wenig sportliche Rückmeldung.',
            'Komfortables Fahrwerk neigt in schnellen Kurven leicht zur Seitenneigung.'
          ]
        },
        ru: {
          headline: 'Многорычажная подвеска и лёгкий перед',
          strengths: [
            'Получает более продвинутую многорычажную заднюю подвеску и лёгкий бензиновый мотор.',
            'Сбалансированная и предсказуемая управляемость.'
          ],
          watchouts: [
            'Лёгкий руль не даёт спортивной информативности.',
            'Мягкая подвеска допускает умеренные крены в быстрых виражах.'
          ]
        }
      },
      payloadTowing: {
        en: {
          headline: '440 kg Payload & Strong 1,300 kg Braked Towing',
          strengths: [
            '1,300 kg braked towing capacity easily handles utility trailers and small caravans.',
            '440 kg cabin payload suits family holidays well.'
          ],
          watchouts: [
            'Naturally aspirated torque means hills with a heavy trailer require lower gears and higher RPM.',
            'Fuel consumption climbs sharply when towing near the 1,300 kg limit.'
          ]
        },
        de: {
          headline: '440 kg Zuladung & starke 1.300 kg Anhängelast',
          strengths: [
            '1.300 kg Anhängelast (gebremst) machen ihn deutlich vielseitiger als den Hybrid.',
            '440 kg Zuladung bieten gute Reserven für Urlaubsgepäck.'
          ],
          watchouts: [
            'Am Berg mit schwerem Anhänger erfordert der Saugmotor hohe Drehzahlen.',
            'Verbrauch steigt im Anhängerbetrieb spürbar an.'
          ]
        },
        ru: {
          headline: 'Нагрузка 440 кг и прицеп до 1300 кг',
          strengths: [
            'Разрешена буксировка прицепа с тормозами до 1300 кг — серьёзное преимущество перед гибридом.',
            'Запас грузоподъёмности 440 кг подходит для семейных поездок.'
          ],
          watchouts: [
            'С тяжёлым прицепом на подъёмах требуется крутить мотор на пониженных передачах.',
            'Расход топлива заметно возрастает при буксировке.'
          ]
        }
      },
      depreciationResale: {
        en: {
          headline: 'Solid Petrol Resale for Buyers Avoiding Hybrids or Diesels',
          strengths: [
            'Appeals to traditional buyers wanting simple petrol power with Toyota reliability.',
            'Manual models remain popular in regions with low hybrid adoption.'
          ],
          watchouts: [
            'Depreciates slightly faster than the high-demand 1.8 Hybrid.',
            'Higher fuel use makes buyers favour the 1.8 Hybrid or 1.2T in cities.'
          ]
        },
        de: {
          headline: 'Solider Wiederverkauf bei Fans klassischer Benziner',
          strengths: [
            'Gefragt bei Käufern, die bewusst keinen Diesel und keinen Hybrid möchten.',
            'Handschalter bleiben auf dem Gebrauchtmarkt beliebt.'
          ],
          watchouts: [
            'Wertverlust etwas höher als beim stark gefragten 1.8 Hybrid.',
            'Höherer Verbrauch bremst die Nachfrage bei Stadtpendlern.'
          ]
        },
        ru: {
          headline: 'Хороший спрос среди любителей простых бензиновых авто',
          strengths: [
            'Ценится покупателями, ищущими надёжный атмосферник без гибрида и дизеля.',
            'Версии на механике стабильно востребованы.'
          ],
          watchouts: [
            'Дешевеет быстрее гибрида из-за более высокого расхода топлива.',
            'В крупных городах уступает по спросу гибриду и 1.2 Turbo.'
          ]
        }
      }
    },
    dossierGroups: {
      'na-petrol': {
        transmissionDriveline: {
          en: {
            headline: 'Simple, Durable 6-Speed Manual Gearbox',
            strengths: [
              'Light clutch action and mechanical 6-speed shift linkage with low failure rates.',
              'Conventional single-mass flywheel keeps clutch replacement inexpensive (~€550–750).'
            ],
            watchouts: [
              'Short gearing helps the 99 hp engine in town but spins at ~3,400 rpm at 120 km/h.',
              '1st-to-2nd shift can feel slightly notchy when transmission oil is cold.'
            ],
            beforeYouBuy: [
              'Test smooth 1st-to-2nd engagement when cold and check clutch bite point.'
            ]
          },
          de: {
            headline: 'Einfaches, haltbares 6-Gang-Schaltgetriebe',
            strengths: [
              'Leichtgängige Kupplung und zuverlässiges mechanisches 6-Gang-Getriebe.',
              'Einmassenschwungrad hält einen späteren Kupplungswechsel günstig (ca. 550–750 €).'
            ],
            watchouts: [
              'Kurze Übersetzung hilft in der Stadt, sorgt bei 120 km/h aber für ca. 3.400 U/min.',
              'Schaltvorgang vom 1. in den 2. Gang kalt mitunter etwas hakelig.'
            ],
            beforeYouBuy: [
              'Sauberes Schalten vom 1. in den 2. Gang im kalten Zustand testen.'
            ]
          },
          ru: {
            headline: 'Простая и надёжная 6-ступенчатая МКПП',
            strengths: [
              'Лёгкое сцепление и выносливая механика без сложных узлов.',
              'Обычный одномассовый маховик делает замену сцепления недорогой.'
            ],
            watchouts: [
              'Короткие передачи удобны в городе, но на 120 км/ч обороты держатся около 3400 об/мин.',
              'Переключение 1–2 на холодную может быть слегка тугим.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Minimalist Petrol Electronics with Few Sensors',
            strengths: [
              'No high-voltage system, no turbo actuators, and no complex emissions sensors.',
              'Standard 12V architecture keeps electrical troubleshooting straightforward.'
            ],
            watchouts: [
              'Start-stop batteries (AGM/EFB) cost more when replaced every 5–6 years.',
              'Weak 12V voltage disables the start-stop system first as an early warning.'
            ]
          },
          de: {
            headline: 'Schlichte, sehr zuverlässige Benziner-Elektrik',
            strengths: [
              'Weder Hochvolt-Technik noch Turbo-Stellmotoren oder komplexe Abgassensoren.',
              'Klassische 12V-Technik lässt sich von jeder Werkstatt günstig warten.'
            ],
            watchouts: [
              'Start-Stopp-Batterie (EFB/AGM) ist beim Tausch etwas teurer als eine Standardbatterie.',
              'Schwächelnde Batterie deaktiviert zuerst die Start-Stopp-Funktion.'
            ]
          },
          ru: {
            headline: 'Простая и безотказная электрика без лишних датчиков',
            strengths: [
              'Нет высоковольтной части, актуаторов турбины и сложных датчиков выхлопа.',
              'Стандартная 12В система легко обслуживается в любом сервисе.'
            ],
            watchouts: [
              'Аккумулятор Start-Stop (EFB/AGM) стоит дороже обычного при замене раз в 5–6 лет.',
              'При просадке заряда система Start-Stop отключается первой.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Quiet City Idle, Busy Engine Note on Motorways',
            strengths: [
              'Smooth, vibration-free 4-cylinder idle at traffic lights.',
              'Quiet and pleasant around town under 70 km/h.'
            ],
            watchouts: [
              'Short 6th gear raises cabin engine noise above 110 km/h on long motorway runs.',
              'Working the engine hard on hills brings noticeable 4-cylinder buzz.'
            ]
          },
          de: {
            headline: 'Ruhig im Stadtverkehr, hochtourig auf der Autobahn',
            strengths: [
              'Laufruhiger 4-Zylinder ohne Diesel-Nageln im Stadtverkehr.',
              'Bis 70 km/h angenehm leise.'
            ],
            watchouts: [
              'Durch die kurze Übersetzung ab 110 km/h auf der Autobahn deutlich hörbar.',
              'Hohe Drehzahlen am Berg erhöhen den Geräuschpegel spürbar.'
            ]
          },
          ru: {
            headline: 'Тихая работа в городе, шумнее на трассе',
            strengths: [
              'Ровный 4-цилиндровый мотор без вибраций на холостом ходу.',
              'Комфортно тихий в городе до 70 км/ч.'
            ],
            watchouts: [
              'На скоростях выше 110 км/ч высокие обороты добавляют шума в салоне.',
              'На подъёмах приходится крутить мотор, что слышно в салоне.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Ultra-Cheap Routine Servicing & Simple Parts',
            strengths: [
              'Timing chain, port injection, and no turbo keep annual maintenance bills minimal.',
              'Inexpensive tyres, brakes, and clutch replacements.'
            ],
            watchouts: [
              'Watch for slight oil consumption on high-mileage 1NR-FE engines if oil intervals were stretched.',
              'Check dipstick level and inspect service book for regular 15,000 km oil changes.'
            ],
            beforeYouBuy: [
              'Confirm oil level is clean and full on the dipstick before buying.'
            ]
          },
          de: {
            headline: 'Extrem günstige Wartung ohne Turbo- oder ZMS-Risiken',
            strengths: [
              'Steuerkette, Saugrohreinspritzung und kein Turbo halten Werkstattkosten niedrig.',
              'Günstige Verschleißteile für Bremsen, Reifen und Kupplung.'
            ],
            watchouts: [
              'Bei vernachlässigten Ölwechseln ist leichter Ölverbrauch über 150.000 km möglich.',
              'Regelmäßige 15.000-km-Ölwechsel sind entscheidend für die Kolbenringe.'
            ],
            beforeYouBuy: [
              'Ölstand prüfen und auf regelmäßige 15.000-km-Ölwechsel achten.'
            ]
          },
          ru: {
            headline: 'Копеечное ТО без турбины, ТНВД и маховика',
            strengths: [
              'Цепь ГРМ и распределённый впрыск сводят регулярные траты к минимуму.',
              'Недорогие расходники, шины и сцепление.'
            ],
            watchouts: [
              'При затянутых интервалах замены масла возможен небольшой угар после 150 тыс. км.',
              'Важно соблюдать интервал замены масла не реже 15 000 км.'
            ],
            beforeYouBuy: [
              'Проверить уровень масла и частоту его замены в сервисной книжке.'
            ]
          }
        }
      },
      'd4d-diesel': {
        transmissionDriveline: {
          en: {
            headline: 'Robust 6-Speed Manual Built for 310 Nm Torque',
            strengths: [
              'Beefy 6-speed gearbox handles highway cruising at relaxed RPM.',
              'Accurate shift gate and durable gearsets.'
            ],
            watchouts: [
              'Dual-mass flywheel (DMF) and clutch typically wear between 160,000–220,000 km.',
              'Heavy city stop-and-go accelerates DMF wear.'
            ],
            beforeYouBuy: [
              'Listen for metallic chatter at idle or when depressing the clutch halfway.'
            ]
          },
          de: {
            headline: 'Kräftiges 6-Gang-Getriebe für 310 Nm Drehmoment',
            strengths: [
              'Stabiles Schaltgetriebe mit langer Autobahn-Übersetzung für niedriges Drehzahlniveau.',
              'Präzise Schaltung und robuste Zahnräder.'
            ],
            watchouts: [
              'Zweimassenschwungrad (ZMS) und Kupplung halten meist 160.000–220.000 km.',
              'Viel Stadtverkehr verkürzt die Lebensdauer des ZMS.'
            ],
            beforeYouBuy: [
              'Auf Klappern im Leerlauf oder beim leichten Treten des Kupplungspedals achten.'
            ]
          },
          ru: {
            headline: 'Усиленная 6-МКПП под 310 Н·м крутящего момента',
            strengths: [
              'Крепкая коробка передач с длинной 6-й передачей для тихого хода по трассе.',
              'Чёткое включение передач.'
            ],
            watchouts: [
              'Двухмассовый маховик и сцепление обычно служат 160–220 тыс. км.',
              'Частые пробки ускоряют износ маховика.'
            ],
            beforeYouBuy: [
              'Послушать, нет ли металлического стука на холостых или при полувыжатом сцеплении.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Simple Diesel Electrics with Fewer Sensors Than 2.0/1.6',
            strengths: [
              'Fewer complex swirl-flap and NOx systems than larger Euro 6 diesels.',
              'Main ECU and wiring harness are well sealed.'
            ],
            watchouts: [
              'Glow plug relay and DPF differential pressure sensor can need attention past 150k km.',
              'Short-trip DPF clogging can trigger warning lights.'
            ],
            beforeYouBuy: [
              'Scan for stored DPF or glow-plug fault codes before buying.'
            ]
          },
          de: {
            headline: 'Überschaubare Diesel-Elektrik',
            strengths: [
              'Weniger komplexe Abgas-Sensorik als bei großen Euro-6-Dieseln.',
              'Robuste Steuergeräte und Verkabelung.'
            ],
            watchouts: [
              'Glühkerzen und Differenzdrucksensor können ab ca. 150.000 km fällig werden.',
              'Kurzstrecken führen schneller zu DPF-Warnmeldungen.'
            ],
            beforeYouBuy: [
              'Fehlerspeicher auf DPF- oder Glühkerzen-Einträge auslesen lassen.'
            ]
          },
          ru: {
            headline: 'Простая электрика с минимумом дизельных датчиков',
            strengths: [
              'Меньше сложных систем очистки выхлопа, чем у более крупных дизелей.',
              'Надёжная проводка и блок управления.'
            ],
            watchouts: [
              'Свечи накала и датчик давления DPF могут потребовать внимания после 150 тыс. км.',
              'Короткие поездки провоцируют ошибки по сажевому фильтру.'
            ],
            beforeYouBuy: [
              'Сделать компьютерную диагностику по DPF и свечам накала.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Audible Cold Diesel Clatter, Quiet at Steady Cruise',
            strengths: [
              'Settles down nicely at 100–120 km/h motorway cruising speeds.',
              'Compliant suspension handles rough rural roads well.'
            ],
            watchouts: [
              'Distinct 4-cylinder diesel clatter when cold and under city acceleration.',
              'Noticeable idle vibration compared to petrol and hybrid Auris models.'
            ]
          },
          de: {
            headline: 'Kalt deutlich als Diesel hörbar, ruhig auf Landstraße',
            strengths: [
              'Bei konstant 100–120 km/h angenehm unauffällig.',
              'Komfortable Federung auf schlechten Landstraßen.'
            ],
            watchouts: [
              'Typisches Diesel-Nageln beim Kaltstart und Beschleunigen in der Stadt.',
              'Im Leerlauf spürbar mehr Vibrationen als bei Benzinern und Hybrid.'
            ]
          },
          ru: {
            headline: 'Дизельный рокот на холодную, спокойно на трассе',
            strengths: [
              'На ровных 100–120 км/ч двигатель практически не напрягает.',
              'Комфортная подвеска для загородных дорог.'
            ],
            watchouts: [
              'При холодном запуске и разгоне в городе отчётливо слышен дизельный звук.',
              'На холостых заметнее вибрации по сравнению с бензином и гибридом.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Most Affordable Toyota Diesel to Maintain',
            strengths: [
              '8-valve SOHC design with timing chain and simpler injectors than larger diesels.',
              'Routine oil/filter bills are reasonable for a modern turbo-diesel.'
            ],
            watchouts: [
              'Still requires DPF care on longer drives and eventual clutch/DMF checks past 180k km.',
              'Neglected oil changes can clog the turbo oil feed or DPF.'
            ],
            beforeYouBuy: [
              'Check for DPF warning history and confirm regular 5W-30 low-SAPS oil changes.'
            ]
          },
          de: {
            headline: 'Günstigster Toyota-Diesel im Unterhalt',
            strengths: [
              'Robuster 8-Ventiler mit Steuerkette und einfacherer Technik als größere Diesel.',
              'Überschaubare Routine-Servicekosten.'
            ],
            watchouts: [
              'Benötigt dennoch regelmäßige Überlandfahrten für den DPF.',
              'Kupplung/ZMS können jenseits von 180.000 km fällig werden.'
            ],
            beforeYouBuy: [
              'Auf lückenlose Ölwechsel mit aschearmem Öl (C2) und DPF-Status achten.'
            ]
          },
          ru: {
            headline: 'Самый доступный в обслуживании дизель Toyota',
            strengths: [
              'Простой 8-клапанный мотор с цепью ГРМ.',
              'Умеренная стоимость планового ТО для современного дизеля.'
            ],
            watchouts: [
              'Требует регулярных выездов на трассу для регенерации сажевого фильтра (DPF).',
              'После 180 тыс. км возможен износ сцепления и маховика.'
            ],
            beforeYouBuy: [
              'Проверить историю регенерации DPF и регулярность замены малозольного масла.'
            ]
          }
        },
        depreciationResale: {
          en: {
            headline: 'Budget Commuter Appeal, Modest Urban Resale',
            strengths: [
              'Strong value for high-mileage rural commuters.',
              'Lower used purchase price than the Hybrid attracts budget diesel buyers.'
            ],
            watchouts: [
              'Urban diesel sentiment softens city resale demand, especially for Euro 5 models.',
              'Trails the 1.8 Hybrid significantly in resale speed.'
            ]
          },
          de: {
            headline: 'Günstig für Vielfahrer, schwächere Stadt-Nachfrage',
            strengths: [
              'Attraktiver Gebrauchtpreis für Langstrecken-Pendler.',
              'Beliebt in ländlichen Regionen mit viel Autobahnanteil.'
            ],
            watchouts: [
              'In Großstädten wegen Diesel-Debatte (besonders Euro 5) geringere Nachfrage.',
              'Deutlich langsamerer Wiederverkauf als beim 1.8 Hybrid.'
            ]
          },
          ru: {
            headline: 'Выгоден для трассовых пробегов, сдержанный спрос в мегаполисах',
            strengths: [
              'Отличный бюджетный вариант для больших загородных пробегов.',
              'Дешевле гибрида при покупке.'
            ],
            watchouts: [
              'В крупных городах спрос на дизель (особенно Euro 5) снижен.',
              'Продаётся медленнее, чем 1.8 Hybrid.'
            ]
          }
        }
      }
    },
    sharedGearboxes: {
      'ecvt': {
        category: 'automatic',
        label: { en: 'Planetary e-CVT', de: 'Planeten-e-CVT', ru: 'Планетарный e-CVT' },
        shortLabel: { en: 'e-CVT', de: 'e-CVT', ru: 'e-CVT' },
        subLabel: { en: 'Toyota P410 · Planetary Power-Split', de: 'Toyota P410 · Planeten-Leistungsverzweigung', ru: 'Toyota P410 · Планетарный редуктор' },
        specOverrides: { gearbox: '@eCvt', clutchDmf: '@noClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbECvt', clutchDmf: '@clutchNone' } },
        dossier: {
          en: {
            headline: 'Planetary e-CVT — Benchmark Reliability With Zero Clutch or Belts',
            strengths: ['No clutch, dual-mass flywheel, torque converter, or steel drive belt to wear out.'],
            watchouts: ['Engine revs rise noticeably under hard acceleration ("rubber-band" acoustics).'],
            beforeYouBuy: ['Test smooth silent EV crawl and clean petrol-engine engagement.', 'Verify e-CVT transaxle fluid refresh on cars above 120,000 km.']
          },
          de: {
            headline: 'Planeten-e-CVT — Dauerläufer ohne Kupplung, ZMS oder Riemen',
            strengths: ['Weder Kupplung, ZMS, Wandler noch Schubgliederband können verschleißen.'],
            watchouts: ['Beim starken Beschleunigen dreht der Motor hörbar höher auf.'],
            beforeYouBuy: ['Leises elektrisches Anrollen und ruckfreies Zuschalten des Benziners testen.', 'Getriebeölwechsel ab ca. 120.000 km prüfen.']
          },
          ru: {
            headline: 'Планетарный e-CVT — Эталон надёжности без сцепления и ремней',
            strengths: ['Нет сцепления, двухмассового маховика, гидротрансформатора и стального ремня.'],
            watchouts: ['При интенсивном разгоне мотор держит повышенные обороты.'],
            beforeYouBuy: ['Проверьте плавный электро-старт и незаметное подключение ДВС.', 'Уточните замену жидкости e-CVT на пробеге свыше 120 тыс. км.']
          }
        }
      },
      '6-mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Toyota EC60 / C64 · Manual · Single Clutch', de: 'Toyota EC60 / C64 · Schaltgetriebe · Kupplung', ru: 'Toyota EC60 / C64 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: {
            headline: 'Toyota 6-Speed Manual — Durable Box With Simple Single-Mass Clutch',
            strengths: ['Proven mechanical reliability and affordable single-mass clutch replacement.'],
            watchouts: ['Inspect 1st/2nd gear synchros on high-mileage urban cars.'],
            beforeYouBuy: ['Test cold 1→2→3 shifts and clutch pedal bite height.']
          },
          de: {
            headline: 'Toyota 6-Gang-Schaltgetriebe — Robust mit einfacher Kupplung',
            strengths: ['Hohe mechanische Zuverlässigkeit und günstiger Kupplungstausch ohne ZMS.'],
            watchouts: ['Bei Stadtfahrzeugen Synchronringe von 1. und 2. Gang kalt testen.'],
            beforeYouBuy: ['Kaltes Durchschalten 1→2→3 und Druckpunkt der Kupplung prüfen.']
          },
          ru: {
            headline: 'Механика Toyota 6-МКПП — Надёжная коробка с простым сцеплением',
            strengths: ['Высокий ресурс и недорогое одномассовое сцепление.'],
            watchouts: ['На городских авто проверьте синхронизаторы 1-й и 2-й передач на холодную.'],
            beforeYouBuy: ['Проверьте включение 1→2→3 на холодную и момент схватывания сцепления.']
          }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Toyota EC60 · Manual + DMF', de: 'Toyota EC60 · Schaltgetriebe + ZMS', ru: 'Toyota EC60 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: {
            headline: 'Toyota 6-Speed Manual — Solid Box, Watch DMF on High Mileage',
            strengths: ['Strong mechanical gearset and smooth motorway ratios.'],
            watchouts: ['Dual-mass flywheel adds €850–€1,250 when clutch replacement comes due.'],
            beforeYouBuy: ['Listen for DMF rattle at idle and test 4th-gear pull from 1,800 rpm.']
          },
          de: {
            headline: 'Toyota 6-Gang-Schaltgetriebe — Robust, ZMS bei hoher Laufleistung prüfen',
            strengths: ['Standfeste Mechanik und ruhige Autobahnübersetzung.'],
            watchouts: ['Zweimassenschwungrad erhöht den Kupplungstausch auf ca. 850–1.250 €.'],
            beforeYouBuy: ['ZMS-Geräusche im Leerlauf und Kraftschluss im 4. Gang ab 1.800 U/min testen.']
          },
          ru: {
            headline: 'Механика Toyota 6-МКПП — Крепкая коробка, контроль ДММ',
            strengths: ['Выносливые валы и удачные передаточные числа для трассы.'],
            watchouts: ['Двухмассовый маховик удорожает замену сцепления до €850–1 250.'],
            beforeYouBuy: ['Послушайте маховик на холостых и проверьте тягу на 4-й передаче с 1 800 об/мин.']
          }
        }
      },
      'multidrive-s': {
        category: 'automatic',
        label: { en: 'Multidrive S CVT', de: 'Multidrive S CVT', ru: 'Вариатор Multidrive S' },
        shortLabel: { en: 'CVT', de: 'CVT', ru: 'CVT' },
        subLabel: { en: 'Toyota K311 · Belt CVT', de: 'Toyota K311 · Riemen-CVT', ru: 'Toyota K311 · Клиноременный вариатор' },
        specOverrides: { gearbox: '@cvt', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.2,
            badges: {
              en: ['Toyota Multidrive S CVT', 'Smooth City Belt-CVT'],
              de: ['Toyota Multidrive S CVT', 'Sanfte Stadt-Automatik'],
              ru: ['Вариатор Toyota Multidrive S', 'Плавный городской ход']
            }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'Toyota Multidrive S Belt CVT (K311)', de: 'Toyota Multidrive S Riemen-CVT (K311)', ru: 'Вариатор Toyota Multidrive S (K311)' } }],
              note: { en: 'Smooth steel-belt CVT with torque-converter launch; refresh Toyota CVT-FE fluid every 60,000 km.', de: 'Sanftes Riemen-CVT mit Anfahrwandler; alle 60.000 km CVT-FE-Öl wechseln.', ru: 'Плавный вариатор с гидротрансформатором; замена масла CVT-FE каждые 60 тыс. км.' }
            },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: {
            headline: 'Toyota Multidrive S CVT — Smooth Urban Comfort, Needs 60k Fluid Care',
            strengths: ['Stepless, jerk-free city driving and proven Toyota CVT reliability when serviced.'],
            watchouts: ['Higher motorway rpm under load and sensitive to neglected CVT fluid past 100k km.'],
            beforeYouBuy: ['Listen for bearing whine under steady 60–90 km/h cruise.', 'Confirm Toyota CVT-FE fluid change history.']
          },
          de: {
            headline: 'Toyota Multidrive S CVT — Ruckfreier Komfort, 60-Tkm-Ölwechsel nötig',
            strengths: ['Stufenloses, sehr sanftes Anfahren im Stadtverkehr und solide Haltbarkeit bei Pflege.'],
            watchouts: ['Höheres Drehzahlniveau unter Last; reagiert empfindlich auf überaltertes CVT-Öl.'],
            beforeYouBuy: ['Bei 60–90 km/h auf Heulgeräusche der Lager achten.', 'Nachweise für CVT-Ölwechsel einsehen.']
          },
          ru: {
            headline: 'Вариатор Toyota Multidrive S — Плавность в городе, требует свежего масла',
            strengths: ['Бесступенчатый комфорт без рывков и хороший ресурс при регулярном обслуживании.'],
            watchouts: ['Повышенные обороты при разгоне и чувствительность к старому маслу после 100 тыс. км.'],
            beforeYouBuy: ['Прислушайтесь к возможному гулу подшипников на 60–90 км/ч.', 'Проверьте историю замены жидкости CVT-FE.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Multidrive S CVT-FE fluid drain-and-fill', de: 'Multidrive S CVT-FE Getriebeölwechsel', ru: 'Замена жидкости вариатора Toyota CVT-FE' }, cost: '€180–260' }
          ]
        }
      }
    },
    engines: [
      {
        id: '1.8-hybrid',
        defaultGearboxId: 'ecvt',
        gearboxes: [{ id: 'ecvt', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.8L NA Hybrid', de: '1.8L Sauger-Hybrid', ru: '1.8L Атм. гибрид' },
          forcedInduction: { en: '✓ E-Motor · ✕ Turbo', de: '✓ E-Motor · ✕ Turbo', ru: '✓ Эл. мотор · ✕ Турбо' },
          injection: { en: '✓ Port (Indirect)', de: '✓ Saugrohr (Indirekt)', ru: '✓ Распред. (непрямой)' },
          gearbox: { en: 'Planetary e-CVT', de: 'Planeten-e-CVT', ru: 'Планетарный e-CVT' },
          clutchDmf: { en: '✕ No Clutch / DMF', de: '✕ Ohne Kupplung/ZMS', ru: '✕ Без сцепл. и мах.' },
          starterAlternator: { en: '✕ None (Hybrid MG)', de: '✕ Keine (Hybrid-MG)', ru: '✕ Нет (гибрид MG)' },
          towingBraked: '385 kg',
          sprint0100: '10.9 s',
          topSpeed: '180 km/h',
          peakTorque: { en: '142 Nm + E-Assist', de: '142 Nm + E-Boost', ru: '142 Н·м + Эл. тяга' },
          passingPunch: { en: 'Instant City · Mild Hwy', de: 'Direkt Stadt · Ruhig AB', ru: 'Бодро в городе' },
          brakeSetup: { en: '✓ Regen + 4× Discs', de: '✓ Rekup. + 4× Scheibe', ru: '✓ Рекуп. + 4× Диски' },
          realWorldFuel: '4.5–5.2 L/100 km',
          tankRange: '45 L · ~850 km',
          euroNorm: 'Euro 5 / 6',
          taxInsurance: { en: 'Very Low', de: 'Sehr niedrig', ru: 'Очень низкие' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Low (Long-Life Brakes)', de: 'Gering (Lange Bremsen)', ru: 'Низкие (долгие тормоза)' },
          valueRetention: { en: 'Very High', de: 'Sehr hoch', ru: 'Очень высокий' },
          resaleDemand: { en: 'Fast Seller', de: 'Sehr gefragt', ru: 'Быстрая продажа' }
        },
        buyerFitGroup: 'hybrid',
        isDefault: true,
        fuelType: 'hybrid',
        hp: 136,
        shortTitle: 'AURIS 1.8 HYBRID',
        fullName: '2014 Toyota Auris 1.8 Hybrid',
        engineBadge: '1.8L HSD e-CVT • 136 HP',
        engineSubLabel: {
          en: '2ZR-FXE Hybrid Synergy Drive • e-CVT • 142 Nm',
          de: '2ZR-FXE Vollhybrid (HSD) • Planeten-e-CVT • 142 Nm',
          ru: '2ZR-FXE Гибрид (HSD) • Планетарная e-CVT • 142 Н·м'
        },
        rarityLabel: {
          en: 'HYBRID ICON',
          de: 'HYBRID-IKONE',
          ru: 'ИКОНА ГИБРИДОВ'
        },
        originalMsrp: {
          en: '€24,950 New',
          de: '24.950 € Neu',
          ru: '€24 950 новый'
        },
        estUsedPrice: '€9,400',
        perkLabel: {
          en: '✦ TÜV Top 3% Reliability • ~4.8 L/100km Economy',
          de: '✦ TÜV Top 3% Zuverlässigkeit • Sparsam (~4,8 L/100km)',
          ru: '✦ Надёжность Топ 3% TÜV • Расход ~4,8 л/100 км'
        },
        remarkablePositives: {
          en: [
            'TÜV TOP 3% RELIABILITY',
            'EFFICIENT ~4.8 L/100KM',
            'LOW RUNNING COSTS',
            'FEWER PARTS THAT CAN BREAK',
            'SILENT EV CITY DRIVING'
          ],
          de: [
            'TÜV TOP 3% ZUVERLÄSSIGKEIT',
            'SPARSAM: ~4,8 L/100KM',
            'NIEDRIGE HALTUNGSKOSTEN',
            'WENIGER VERSCHLEISSTEILE',
            'LAUTLOSES EV-STADTFAHREN'
          ],
          ru: [
            'НАДЁЖНОСТЬ ТОП 3% TÜV',
            'РАСХОД ~4,8 Л/100 КМ',
            'ДЕШЁВОЕ ОБСЛУЖИВАНИЕ',
            'МЕНЬШЕ ДЕТАЛЕЙ ДЛЯ ПОЛОМОК',
            'ТИХИЙ EV-РЕЖИМ В ГОРОДЕ'
          ]
        },
        notableNegatives: {
          en: [
            '385 KG TOWING LIMIT',
            'COMPACT 360L BOOT',
            'ENGINE DRONE ON INCLINES'
          ],
          de: [
            'NUR 385 KG ANHÄNGELAST',
            'KOMPAKTER 360L KOFFERRAUM',
            'MOTORHEULEN AM BERG'
          ],
          ru: [
            'БУКСИРОВКА ЛИШЬ 385 КГ',
            'СКРОМНЫЙ БАГАЖНИК 360 Л',
            'ГУЛ МОТОРА НА ПОДЪЁМАХ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 9.5,
          comfortCabin: 8.0,
          spacePracticality: 7.4,
          performanceDynamics: 6.7,
          runningCostsTco: 9.3
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.8L VVT-i Atkinson Inline-4 Hybrid (2ZR-FXE)', de: '1.8L VVT-i Atkinson Reihenvierzylinder Hybrid (2ZR-FXE)', ru: '1.8L VVT-i Аткинсон рядный 4-цил. гибрид (2ZR-FXE)' } },
                  { k: 'displacement', v: '1,798 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '73 kW (99 HP) · System: 100 kW (136 HP)', de: '73 kW (99 PS) · System: 100 kW (136 PS)', ru: '73 кВт (99 л.с.) · Сист.: 100 кВт (136 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol / Electric · Timing Chain', de: 'Benzin / Elektro · Steuerkette', ru: 'Бензин / Электро · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Taxi-fleet proven past 400,000+ km (TÜV top 3%) with electric water pump and zero drive belts.',
                  de: 'Im Taxibetrieb über 400.000+ km bewährt (TÜV Top 3 %) mit elektrischer Wasserpumpe ohne Keilriemen.',
                  ru: 'Проверен в такси на 400 000+ км (Топ-3% TÜV) — электропомпа и полное отсутствие приводных ремней.'
                }
              },
              forcedInduction: '@hybridEMotor',
              injection: '@portInj'
            },
            score: 9.8,
            badges: {
              en: ['TÜV Top 3% Defects', 'No Turbo, Starter or Alternator'],
              de: ['TÜV Top 3% Mängel', 'Kein Turbo, Anlasser oder LiMa'],
              ru: ['Топ 3% TÜV', 'Без турбины, стартера и генератора']
            },
            dossier: {
              en: {
                headline: 'Bulletproof Atkinson-Cycle Hybrid with Minimal Wear Parts',
                strengths: [
                  'Port fuel injection washes the intake valves, avoiding the carbon buildup common in direct-injection engines.',
                  'No turbocharger, starter motor, alternator, or serpentine belts — common wear items simply don\'t exist.',
                  'Taxi-fleet proven to exceed 400,000+ km with routine servicing (TÜV top 3% defect-free rating).'
                ],
                watchouts: [
                  'EGR cooler & pipe cleaning is advised around 150,000 km to prevent clogging and head gasket stress.',
                  'Keep the hybrid battery cooling inlet under the rear seat clear of dust for long battery life.'
                ],
                beforeYouBuy: [
                  'Ask for a recent Toyota hybrid battery health report and check that the rear-seat cooling vent is clean.',
                  'Listen on a cold start — rough knocking or rattling can signal a clogged EGR or early head gasket wear.',
                  'Verify seamless electric-to-petrol transitions and check that the brake discs aren\'t rusted from light use.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Annual 0W-20 oil & clean under-seat battery fan vent; clean rusty rear brake discs', cost: '€130–220', ifIgnored: 'Dusty vent ages hybrid cells faster; unused rear brake pads rust and stick', damageCost: '€850–1,600' },
                  { tier: 'yellow', km: '50,000–100,000 km • 4–7 yrs', action: 'Change e-CVT automatic fluid (60–90k / 5 yrs), brake fluid & test aging 12V battery / hoses', cost: '€220–380', ifIgnored: 'Aged fluids wear electric transaxle; weak 5–6 yr 12V battery locks hybrid start', damageCost: '€900–1,700' },
                  { tier: 'yellow', km: '100,000–140,000 km • 7–9 yrs', action: 'Clean hybrid battery cooling fan & change automatic gearbox oil', cost: '€120–220', ifIgnored: 'Hot battery ages much faster and wears out early (components & fluids also degrade over years)', damageCost: '€1,500–2,400' },
                  { tier: 'red', km: '140,000–180,000 km • 9–11 yrs', action: 'Deep-clean exhaust recirculation valve & intake pipes', cost: '€220–380', ifIgnored: 'Heavy morning shaking & blown engine head gasket (rubber/plastic & seals also harden with age)', damageCost: '€1,800–2,800' },
                  { tier: 'orange', km: '180,000–220,000 km • 11–13 yrs', action: 'Replace electric water pump & cooling pump check', cost: '€300–480', ifIgnored: 'Sudden highway overheating & warped engine top (rubber/plastic & seals also harden with age)', damageCost: '€1,500–2,500' },
                  { tier: 'orange', km: '210,000–250,000 km • 13–15+ yrs', action: 'Recondition or refresh aging hybrid battery cells (cells also weaken with 10+ yrs age)', cost: '€900–1,800', ifIgnored: 'Hybrid warning lights & very weak fuel economy', damageCost: '€2,200–3,000' }
                ]
              },
              de: {
                headline: 'Unverwüstlicher Atkinson-Hybrid mit minimalen Verschleißteilen',
                strengths: [
                  'Saugrohreinspritzung spült die Einlassventile sauber und verhindert Verkokung wie bei Direkteinspritzern.',
                  'Kein Turbolader, kein Anlasser, keine Lichtmaschine und keine Keilrippenriemen — klassische Verschleißteile entfallen.',
                  'Im Taxibetrieb über 400.000+ km bewährt und regelmäßig in den Top 3% des TÜV-Reports.'
                ],
                watchouts: [
                  'Reinigung von AGR-Kühler und -Rohr ab ca. 150.000 km empfohlen, um Verstopfung und Kopfdichtungsstress zu vermeiden.',
                  'Lufteinlass der Hybridbatterie unter der Rücksitzbank staubfrei halten für lange Akkulebensdauer.'
                ],
                beforeYouBuy: [
                  'Aktuellen Toyota Hybrid-Batteriecheck zeigen lassen und das Lüftungsgitter unter der Rückbank prüfen.',
                  'Beim Kaltstart genau hinhören — hartes Klappern deutet oft auf ein verkoktes AGR oder Kopfdichtungsverschleiß hin.',
                  'Ruckfreien Übergang zwischen Elektro- und Benzinmotor sowie rostfreie Bremsscheiben prüfen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Jährlich 0W-20 Öl wechseln, Batterie-Lüftungsgitter reinigen & Bremsscheiben freibremsen', cost: '130–220 €', ifIgnored: 'Staub lässt den Akku durch Hitze schneller altern; hintere Bremsen verrosten', damageCost: '850–1.600 €' },
                  { tier: 'yellow', km: '50.000–100.000 km • 4–7 J.', action: 'e-CVT-Öl (60–90 Tkm / 5 J.) & Bremsflüssigkeit wechseln, 12V-Batterie & Schläuche prüfen', cost: '220–380 €', ifIgnored: 'Gealtertes Getriebeöl erhöht Verschleiß; schwache 5–6-J.-Batterie verhindert Start', damageCost: '900–1.700 €' },
                  { tier: 'yellow', km: '100.000–140.000 km • 7–9 J.', action: 'Hybrid-Batterielüfter reinigen & Automatik-Getriebeöl wechseln', cost: '120–220 €', ifIgnored: 'Überhitzte Batterie altert deutlich schneller', damageCost: '1.500–2.400 €' },
                  { tier: 'red', km: '140.000–180.000 km • 9–11 J.', action: 'Abgas-Rückführventil (AGR) & Ansaugrohre komplett reinigen', cost: '220–380 €', ifIgnored: 'Starkes Ruckeln beim Kaltstart & kaputte Zylinderkopfdichtung (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.800–2.800 €' },
                  { tier: 'orange', km: '180.000–220.000 km • 11–13 J.', action: 'Elektrische Haupt-Wasserpumpe vorsorglich erneuern', cost: '300–480 €', ifIgnored: 'Plötzliches Überhitzen auf der Autobahn & Motorschaden (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.500–2.500 €' },
                  { tier: 'orange', km: '210.000–250.000 km • 13–15+ J.', action: 'Gealterte Hybrid-Batteriezellen auffrischen oder tauschen', cost: '900–1.800 €', ifIgnored: 'Notlauf des Hybridsystems & teurer Komplett-Tausch', damageCost: '2.200–3.000 €' }
                ]
              },
              ru: {
                headline: 'Неубиваемый гибрид Аткинсона с минимумом изнашиваемых деталей',
                strengths: [
                  'Распределённый впрыск омывает впускные клапаны, исключая нагар, характерный для прямого впрыска.',
                  'Нет турбины, стартера, генератора и приводных ремней — главных источников поломок просто нет.',
                  'Проверен в такси на пробегах 400 000+ км при плановом ТО (топ 3% надёжности TÜV).'
                ],
                watchouts: [
                  'Около 150 000 км рекомендуется чистка теплообменника и каналов EGR, чтобы избежать закоксовки и нагрузки на прокладку ГБЦ.',
                  'Держите воздухозаборник охлаждения батареи под задним сиденьем в чистоте для долгого ресурса ячеек.'
                ],
                beforeYouBuy: [
                  'Запросить свежий отчёт диагностики гибридной батареи и проверить чистоту решётки обдува под задним сиденьем.',
                  'Прислушаться к холодному пуску — стук или вибрация могут указывать на забитый EGR или ранний износ прокладки ГБЦ.',
                  'Проверить плавность перехода между электротягой и ДВС и отсутствие коррозии на тормозных дисках.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Менять масло 0W-20 раз в год, чистить фильтр батареи под сиденьем и тормоза от ржавчины', cost: '€130–220', ifIgnored: 'Забитый обдув ускоряет старение батареи; задние диски закисают от рекуперации', damageCost: '€850–1 600' },
                  { tier: 'yellow', km: '50 000–100 000 км • 4–7 лет', action: 'Сменить масло в трансмиссии e-CVT (60–90 тыс. / 5 лет), проверить 12В АКБ и шланги', cost: '€220–380', ifIgnored: 'Старая жидкость изнашивает редуктор, а севшая за 5–6 лет батарея 12В блокирует запуск', damageCost: '€900–1 700' },
                  { tier: 'yellow', km: '100 000–140 000 км • 7–9 лет', action: 'Почистить вентилятор гибридной батареи и сменить масло в коробке', cost: '€120–220', ifIgnored: 'Перегрев и быстрая деградация ячеек батареи (узлы и жидкости также стареют с годами)', damageCost: '€1 500–2 400' },
                  { tier: 'red', km: '140 000–180 000 км • 9–11 лет', action: 'Промыть клапан отработавших газов и каналы впуска от сажи', cost: '€220–380', ifIgnored: 'Сильная тряска утром и пробой прокладки головки блока (узлы и жидкости также стареют с годами)', damageCost: '€1 800–2 800' },
                  { tier: 'orange', km: '180 000–220 000 км • 11–13 лет', action: 'Заменить электрический водяной насос охлаждения', cost: '€300–480', ifIgnored: 'Внезапный перегрев на трассе и дорогой ремонт двигателя (резина, пластик и уплотнения стареют и по годам)', damageCost: '€1 500–2 500' },
                  { tier: 'orange', km: '210 000–250 000 км • 13–15+ лет', action: 'Восстановить или частично обновить ячейки гибридной батареи (ячейки стареют и к 10+ годам)', cost: '€900–1 800', ifIgnored: 'Ошибки гибридной системы и аварийный режим', damageCost: '€2 200–3 000' }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { gearbox: '@gbECvt', clutchDmf: '@clutchNone' },
            score: 9.8,
            badges: {
              en: ['Planetary e-CVT', 'Zero Clutch / Zero DMF'],
              de: ['Planeten-e-CVT', 'Ohne Kupplung & ZMS'],
              ru: ['Планетарная e-CVT', 'Нет сцепления и маховика']
            },
            dossier: {
              en: {
                headline: 'Wear-Free Planetary e-CVT Power-Split Device',
                strengths: [
                  'Uses a single planetary gearset and two electric motor-generators (MG1/MG2) running in synthetic ATF.',
                  'Zero friction clutches, zero dual-mass flywheel, zero torque converter, and zero push-belts to wear out.'
                ],
                watchouts: [
                  'Under hard uphill throttle, engine RPM rises independently of road speed ("rubber-band" feel).',
                  'Not designed for heavy towing; transaxle fluid refresh every 60,000–90,000 km keeps bearings pristine.'
                ],
                beforeYouBuy: [
                  'Verify smooth, jerk-free creep in Drive and Reverse.',
                  'Confirm ATF transaxle fluid has been refreshed if mileage exceeds 100,000 km.'
                ]
              },
              de: {
                headline: 'Verschleißfreies Planeten-e-CVT ohne Kupplung & ZMS',
                strengths: [
                  'Kombiniert ein einfaches Planetengetriebe mit zwei Elektromotoren (MG1/MG2) im synthetischen Ölbad.',
                  'Keine Reibungskupplung, kein Zweimassenschwungrad, kein Wandler und kein Schubgliederband.'
                ],
                watchouts: [
                  'Bei Vollgas am Berg dreht der Motor akustisch spürbar vor der Beschleunigung hoch ("Gummiband-Effekt").',
                  'Getriebeölwechsel alle 60.000–90.000 km empfohlen, obwohl Toyota es oft als Lifetime führt.'
                ],
                beforeYouBuy: [
                  'Auf ruckfreies Anrollen in D und R sowie saubere Schaltübergänge achten.',
                  'Bei über 100.000 km nach erfolgtem e-CVT-Ölwechsel fragen.'
                ]
              },
              ru: {
                headline: 'Вечный планетарный редуктор e-CVT без сцепления',
                strengths: [
                  'Простой планетарный ряд и два электромотора (MG1/MG2) работают в масляной ванне практически без трения.',
                  'Нет сцепления, двухмассового маховика, гидротрансформатора и ремней вариатора.'
                ],
                watchouts: [
                  'При резком газе в гору обороты держатся высокими независимо от скорости (эффект вариатора).',
                  'Замена масла в трансмиссии каждые 60–90 тыс. км продлевает ресурс подшипников.'
                ],
                beforeYouBuy: [
                  'Проверить плавное трогание в D и R без толчков и постороннего гула.',
                  'Уточнить историю замены масла e-CVT при пробеге свыше 100 000 км.'
                ]
              }
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            specBreakdown: { starterAlternator: '@starterHybridMg' },
            score: 9.5,
            badges: {
              en: ['No Starter / No Alternator', 'Bulletproof Hybrid Inverter'],
              de: ['Kein Anlasser / Generator', 'Robuster Hybrid-Inverter'],
              ru: ['Нет стартера и генератора', 'Надёжный инвертор гибрида']
            },
            dossier: {
              en: {
                headline: 'Simplified High-Voltage Architecture Without Starter or Alternator',
                strengths: [
                  'Eliminates 12V starter motor and belt-driven alternator; MG1 cranks the engine and DC-DC converter charges 12V.',
                  'Proven Toyota inverter and ECU modules rarely fail when cooling circuits are maintained.'
                ],
                watchouts: [
                  'A weak small 12V auxiliary battery (every 5–7 years) prevents the hybrid computer from booting.',
                  'Inverter coolant pump can age past 180,000 km if coolant is neglected.'
                ],
                beforeYouBuy: [
                  'Check 12V battery age and ask for the official Toyota Hybrid Health Check printout.'
                ]
              },
              de: {
                headline: 'Robuste Hybrid-Elektronik ohne Anlasser & Lichtmaschine',
                strengths: [
                  'Kein klassischer 12V-Anlasser und keine Lichtmaschine — MG1 startet den Motor, der Inverter lädt die 12V-Batterie.',
                  'Inverter und Steuergeräte gelten bei gewartetem Kühlkreislauf als extrem ausfallsicher.'
                ],
                watchouts: [
                  'Eine schwache 12V-Hilfsbatterie (alle 5–7 Jahre) verhindert das Hochfahren des Hybridsystems.',
                  'Inverter-Wasserpumpe sollte bei sehr hohen Laufleistungen (>180.000 km) geprüft werden.'
                ],
                beforeYouBuy: [
                  'Alter der 12V-Batterie prüfen und Hybrid-Check-Protokoll zeigen lassen.'
                ]
              },
              ru: {
                headline: 'Надёжная электроника без стартера и генератора',
                strengths: [
                  'Отсутствуют обычный стартер и генератор — запуск идёт через MG1, а заряд 12В через DC-DC инвертор.',
                  'Инвертор и блоки управления очень надёжны при своевременном обслуживании охлаждения.'
                ],
                watchouts: [
                  'Севший 12В аккумулятор (раз в 5–7 лет) блокирует запуск гибридной системы.',
                  'Помпа охлаждения инвертора требует внимания при пробегах свыше 180 000 км.'
                ],
                beforeYouBuy: [
                  'Проверить возраст 12В АКБ и попросить отчёт диагностики гибридной системы.'
                ]
              }
            }
          },
          rideNoiseComfort: {
            score: 7.7,
            badges: {
              en: ['Silent EV City Gliding', 'CVT Rev Drone Under Hard Gas'],
              de: ['Lautlos im EV-Stadtbetrieb', 'Aufheulen unter Volllast'],
              ru: ['Тихая езда в городе на EV', 'Гул мотора при резком газе']
            },
            dossier: {
              en: {
                headline: 'Whisper-Quiet City EV Gliding, Audible Drone Under Load',
                strengths: [
                  'Near-silent electric crawling and smooth start-stop transitions in urban traffic.',
                  'Supple suspension tuning absorbs broken city tarmac comfortably.'
                ],
                watchouts: [
                  'Engine revs stay high and audible during motorway merges or steep mountain climbs.',
                  'Wind and tyre roar become noticeable above 120 km/h on coarse asphalt.'
                ]
              },
              de: {
                headline: 'Flüsterleise in der Stadt, hörbar unter Volllast',
                strengths: [
                  'Nahezu lautloses elektrisches Gleiten im Stadtverkehr mit unmerklichen Motorstarts.',
                  'Komfortabel abgestimmtes Fahrwerk bügelt schlechte Stadtstraßen sauber weg.'
                ],
                watchouts: [
                  'Beim starken Beschleunigen oder am Berg bleibt die Motordrehzahl hörbar hoch.',
                  'Wind- und Abrollgeräusche nehmen ab 120 km/h spürbar zu.'
                ]
              },
              ru: {
                headline: 'Тишина электротяги в городе и гул под нагрузкой',
                strengths: [
                  'Бесшумное движение на электротяге в пробках и незаметный запуск ДВС.',
                  'Мягкая энергоёмкая подвеска комфортно отрабатывает неровности города.'
                ],
                watchouts: [
                  'При резком обгоне или подъёме мотор громко держит высокие обороты.',
                  'После 120 км/ч усиливается шум шин и ветра.'
                ]
              }
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.4 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,4 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Two-Level Split Boot Floor'],
              de: ['360L Kofferraum (1.200L Max)', 'Zweistufiger Ladeboden'],
              ru: ['Багажник 360–1 200 л', 'Двухуровневый пол']
            }
          },
          payloadTowing: {
            score: 4.6,
            badges: {
              en: ['425 kg Payload', '385 / 385 kg Towing'],
              de: ['425 kg Zuladung', '385 / 385 kg Zuglast'],
              ru: ['Нагрузка 425 кг', 'Прицеп: 385 / 385 кг']
            },
            dossier: {
              en: {
                headline: '425 kg Cabin Payload, Strictly Limited to 385 kg Towing',
                strengths: [
                  '425 kg payload handles four adults and weekend luggage comfortably.',
                  'Towbar can still mount a 2-bike carrier for recreational use.'
                ],
                watchouts: [
                  '385 kg max braked/unbraked towing limit rules out caravans and heavy utility trailers.',
                  'Confirm towbar nose-weight rating if fitting a bike rack.'
                ]
              },
              de: {
                headline: '425 kg Zuladung, aber nur 385 kg Anhängelast',
                strengths: [
                  '425 kg Zuladung reichen problemlos für vier Erwachsene plus Gepäck.',
                  'Anhängerkupplung eignet sich gut als Träger für bis zu zwei Fahrräder.'
                ],
                watchouts: [
                  'Maximal 385 kg Anhängelast (gebremst/ungebremst) schließen Wohnwagen und schwere Anhänger aus.',
                  'Stützlast prüfen, falls ein Fahrradträger montiert werden soll.'
                ]
              },
              ru: {
                headline: 'Запас нагрузки 425 кг при лимите прицепа 385 кг',
                strengths: [
                  'Грузоподъёмности 425 кг хватает для четырёх взрослых с багажом.',
                  'Фаркоп отлично подходит для установки велобагажника.'
                ],
                watchouts: [
                  'Ограничение буксировки 385 кг исключает перевозку тяжёлых прицепов и автодомов.',
                  'Уточнить допустимую вертикальную нагрузку при установке велокрепления.'
                ]
              }
            }
          },
          accelerationOvertaking: {
            score: 5.3,
            badges: {
              en: ['0–100 km/h: 10.9 s', '180 km/h Top Speed'],
              de: ['0–100 km/h: 10,9 s', '180 km/h Spitze'],
              ru: ['0–100 км/ч: 10,9 с', 'Макс. 180 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.5,
            badges: {
              en: ['142 Nm + Instant e-CVT', 'High-RPM Passing Noise'],
              de: ['142 Nm + E-Antrieb', 'Laut beim Überholen ab 100'],
              ru: ['142 Н·м + электротяга', 'Шумит при обгоне на трассе']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Multi-Link Rear + Low Battery CG', 'Comfort Tune • Safe Wet Grip'],
              de: ['Mehrlenkerachse + tiefer Schwerpunkt', 'Sichere Nässe-Traktion'],
              ru: ['Многорычажка + низкий центр тяжести', 'Предсказуемая курсовая тяга']
            },
            dossier: {
              en: {
                headline: 'Multi-Link Rear Suspension & Low Battery Centre of Gravity',
                strengths: [
                  'Hybrid uses a sophisticated multi-link rear axle plus low-mounted battery weight.',
                  'Very composed, predictable wet-weather grip and stable motorway tracking.'
                ],
                watchouts: [
                  'Light, numb electric steering prioritizes ease of parking over sporty feedback.',
                  'Eco-focused tyres trade ultimate cornering grip for lower rolling resistance.'
                ]
              },
              de: {
                headline: 'Mehrlenker-Hinterachse & tiefer Akku-Schwerpunkt',
                strengths: [
                  'Der Hybrid besitzt eine aufwendige Mehrlenker-Hinterachse und einen tiefen Schwerpunkt durch den Akku.',
                  'Sehr ruhiges, sicheres Fahrverhalten bei Nässe und hohem Autobahntempo.'
                ],
                watchouts: [
                  'Leichtgängige Lenkung bietet wenig sportliche Rückmeldung.',
                  'Spritsparreifen begrenzen den maximalen Kurvengrip.'
                ]
              },
              ru: {
                headline: 'Многорычажка сзади и низкий центр тяжести',
                strengths: [
                  'Гибрид оснащён многорычажной задней подвеской, а батарея снижает центр тяжести.',
                  'Устойчивое и предсказуемое поведение на мокрой дороге и трассе.'
                ],
                watchouts: [
                  'Лёгкий руль настроен на городской комфорт, а не на острую обратную связь.',
                  'Экономичные шины ограничивают предел сцепления в быстрых поворотах.'
                ]
              }
            }
          },
          brakingPerformance: {
            specBreakdown: { brakeSetup: '@brakeSetupRegen' },
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            },
            dossier: {
              en: {
                headline: '36.2 m Stopping Power with Regenerative Pad Preservation',
                strengths: [
                  'All-round disc brakes deliver solid 36.2 m (100–0 km/h) stops.',
                  'Regenerative braking handles most gentle slowing, allowing pads to last 100,000+ km.'
                ],
                watchouts: [
                  'Rear brake discs frequently develop surface rust from light mechanical use.',
                  'Brake pedal feel transitions slightly as regen hands over to friction pads.'
                ],
                beforeYouBuy: [
                  'Inspect rear disc faces for deep pitting or rust ridges before buying.'
                ]
              },
              de: {
                headline: '36,2 m Bremsweg — Rekuperation schont Beläge extrem',
                strengths: [
                  'Rundherum Scheibenbremsen mit soliden 36,2 m Bremsweg aus 100 km/h.',
                  'Rekuperation übernimmt den Großteil leichter Bremsungen — Beläge halten oft über 100.000 km.'
                ],
                watchouts: [
                  'Hintere Bremsscheiben setzen durch geringe Beanspruchung häufig Rost an.',
                  'Leicht synthetisches Pedalgefühl am Übergang zur Reibungsbremse.'
                ],
                beforeYouBuy: [
                  'Hintere Bremsscheiben auf Rostränder und Riefen prüfen.'
                ]
              },
              ru: {
                headline: 'Тормозной путь 36,2 м и огромный ресурс колодок',
                strengths: [
                  'Дисковые тормоза по кругу обеспечивают уверенную остановку (36,2 м со 100 км/ч).',
                  'Рекуперация берёт на себя большую часть замедлений — колодки ходят 100 000+ км.'
                ],
                watchouts: [
                  'Задние тормозные диски часто ржавеют из-за редкого механического износа.',
                  'Лёгкая искусственность педали при переходе от рекуперации к колодкам.'
                ],
                beforeYouBuy: [
                  'Осмотреть задние диски на наличие глубокой коррозии перед покупкой.'
                ]
              }
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['4.5–5.2 L/100km', 'Silent EV City Mode'],
              de: ['4,5–5,2 L/100km', 'Lautloser EV-Modus'],
              ru: ['4,5–5,2 л/100 км', 'EV-режим в городе']
            }
          },
          taxInsuranceNorm: {
            score: 9.5,
            badges: {
              en: ['€36/yr DE Tax • Euro 5/6', 'Moderate Hybrid Insurance'],
              de: ['36 €/Jahr Steuer • Euro 5/6', 'Faire Hybrid-Versicherung'],
              ru: ['Налог €36/год • Euro 5/6', 'Умеренная страховка гибрида']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~90,000 km · 6 yrs', action: { en: 'e-CVT Transaxle Fluid Change (ATF-WS)', de: 'e-CVT Getriebeölwechsel (ATF-WS)', ru: 'Замена масла в e-CVT (ATF-WS)' }, cost: '€150–240' },
                { when: '~100,000 km · 6 yrs', action: { en: 'Hybrid Battery Fan & Rear-Seat Filter Cleaning', de: 'Hybrid-Lüfter & Ansaugfilter unter Rückbank reinigen', ru: 'Чистка вентилятора и фильтра батареи под сиденьем' }, cost: '€80–150' },
                { when: '~150,000 km · 10 yrs', action: { en: 'Engine & Hybrid Inverter Coolant Flush (SLLC)', de: 'Kühlmittelwechsel Motor & Hybrid-Inverter (SLLC)', ru: 'Замена антифриза ДВС и инвертора (SLLC)' }, cost: '€180–280' }
              ],
              critical: [
                { when: '140–180k km · 9–12 yrs', action: { en: 'EGR Cooler & Intake Passage Deep-Clean', de: 'AGR-Kühler & Ansaugkanal gründlich reinigen', ru: 'Глубокая чистка охладителя EGR и впуска' }, cost: '€250–420', risk: { en: 'Clogged EGR causes cold-start rattle & head-gasket stress', de: 'Verstopftes AGR verursacht Kaltstart-Ruckeln & Kopfdichtungsschaden', ru: 'Забитый EGR вызывает стуки на холодную и риск пробоя ГБЦ' }, damage: '€1,800–2,800' },
                { when: '180–220k km · 11–14 yrs', action: { en: 'Electric Engine Water Pump Replacement', de: 'Elektrische Motor-Wasserpumpe ersetzen', ru: 'Замена электрической помпы охлаждения ДВС' }, cost: '€300–480', risk: { en: 'Highway overheating & warped cylinder head', de: 'Überhitzung auf der Autobahn & verzogener Zylinderkopf', ru: 'Перегрев на трассе и деформация ГБЦ' }, damage: '€1,500–2,500' },
                { when: '210–250k km · 12–15 yrs', action: { en: 'NiMH Hybrid Battery Cell Reconditioning / Replacement', de: 'NiMH-Hybridbatterie aufbereiten oder ersetzen', ru: 'Восстановление или замена элементов батареи NiMH' }, cost: '€900–1,800', risk: { en: 'Hybrid warning lights & sharp fuel-economy drop', de: 'Hybrid-Warnmeldung & deutlich steigender Verbrauch', ru: 'Ошибки гибридной системы и резкий рост расхода' }, damage: '€2,200–3,000' }
              ]
            },
            score: 9.5,
            badges: {
              en: ['Regen Saves Brake Discs/Pads', 'Zero Clutch, Starter Or Belt'],
              de: ['Rekuperation schont Bremsen', 'Keine Kupplung, Anlasser, ZMS'],
              ru: ['Рекуперация бережёт колодки', 'Нет сцепления и стартера']
            },
            dossier: {
              en: {
                headline: 'Low Routine Bills — Zero Clutch, Belts, or Turbo Repairs',
                strengths: [
                  'Annual oil and filter service is simple and affordable; brakes and tyres last unusually long.',
                  'No dual-mass flywheel, clutch, turbocharger, DPF, or starter motor bills over 250,000 km.'
                ],
                watchouts: [
                  'Main mid/long-term preventative costs are 150k km EGR cleaning and eventual 12V or HV battery refresh.',
                  'Hybrid battery fan duct cleaning is essential to prevent premature cell heat wear.'
                ],
                beforeYouBuy: [
                  'Verify yearly Toyota service stamps to keep 15-year Relax warranty eligibility (where offered).'
                ]
              },
              de: {
                headline: 'Günstiger Unterhalt ohne Kupplungs-, Turbo- oder DPF-Kosten',
                strengths: [
                  'Jährliche Ölwechsel sind günstig; Bremsen und Reifen verschleißen extrem langsam.',
                  'Keine teuren Reparaturen an Kupplung, ZMS, Turbolader, Partikelfilter oder Anlasser.'
                ],
                watchouts: [
                  'Größere Posten im Alter: AGR-Reinigung (~150 Tkm) und irgendwann 12V- oder Hybrid-Akku.',
                  'Reinigung des Batterie-Lüftergitters verhindert vorzeitige Hitzealterung der Zellen.'
                ],
                beforeYouBuy: [
                  'Lückenloses Toyota-Scheckheft sichert oft die bis zu 15-jährige Relax-Garantie.'
                ]
              },
              ru: {
                headline: 'Низкие затраты без сцепления, турбины и сажевого фильтра',
                strengths: [
                  'Простое и недорогое годовое ТО; тормоза и шины изнашиваются медленно.',
                  'Исключены расходы на сцепление, маховик, турбину, DPF и стартер.'
                ],
                watchouts: [
                  'Основные вложения с пробегом: чистка EGR (~150 тыс. км) и обслуживание батареи со временем.',
                  'Необходима периодическая очистка канала охлаждения тяговой батареи.'
                ],
                beforeYouBuy: [
                  'Проверить регулярность ТО у дилера для сохранения расширенной гарантии.'
                ]
              }
            }
          },
          depreciationResale: {
            score: 9.1,
            badges: {
              en: ['High Hybrid Demand', '15-Yr Relax Warranty'],
              de: ['Hohe Hybrid-Nachfrage', '15 J. Relax-Garantie'],
              ru: ['Высокий спрос б/у', 'Гарантия Relax 15 лет']
            },
            dossier: {
              en: {
                headline: 'Top-Tier Hybrid Resale Demand & Slow Value Drop',
                strengths: [
                  'Strong used-market demand for proven Toyota hybrids keeps resale prices firm.',
                  'Toyota Relax service-activated warranty (up to 15 years) boosts buyer confidence on older examples.'
                ],
                watchouts: [
                  'Higher upfront used purchase price compared to petrol or diesel Auris equivalents.',
                  'Cars lacking hybrid battery health history sell noticeably slower.'
                ]
              },
              de: {
                headline: 'Sehr hohe Gebrauchtwagen-Nachfrage & stabiler Restwert',
                strengths: [
                  'Große Beliebtheit als sparsamer, haltbarer Gebrauchtwagen hält den Wiederverkaufswert hoch.',
                  'Service-aktivierte Toyota-Relax-Garantie (bis 15 Jahre) steigert das Käufervertrauen enorm.'
                ],
                watchouts: [
                  'Höherer Gebrauchtwagen-Einstiegspreis als bei Benzin- oder Diesel-Varianten.',
                  'Fahrzeuge ohne nachweisbaren Hybrid-Check erzielen deutlich schwächere Preise.'
                ]
              },
              ru: {
                headline: 'Высокая ликвидность и медленная потеря цены',
                strengths: [
                  'Надёжные гибриды Toyota пользуются стабильно высоким спросом на вторичном рынке.',
                  'Продлеваемая гарантия Toyota Relax (до 15 лет) повышает цену и доверие покупателей.'
                ],
                watchouts: [
                  'Более высокая цена покупки на вторичке по сравнению с бензином и дизелем.',
                  'Автомобили без подтверждённого теста батареи продаются сложнее.'
                ]
              }
            }
          }
        }
      },
      {
        id: '1.33-dual-vvti',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [{ id: '6-mt-sc', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.33L Dual VVT-i NA', de: '1.33L Dual-VVT-i Sauger', ru: '1.33L Dual VVT-i Атм.' },
          forcedInduction: { en: '✕ Turbo / E-Motor', de: '✕ Turbo / E-Motor', ru: '✕ Турбо / Эл. мотор' },
          injection: { en: '✓ Port (Indirect)', de: '✓ Saugrohr (Indirekt)', ru: '✓ Распред. (непрямой)' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Single Clutch (✕ DMF)', de: '✓ Kupplung (✕ ZMS)', ru: '✓ Сцепление (✕ ДММ)' },
          suspensionWear: { en: 'Torsion Beam (Simple)', de: 'Verbundlenker (Simpel)', ru: 'Балка (простая)' },
          towingBraked: '1,300 kg',
          sprint0100: '12.6 s',
          topSpeed: '175 km/h',
          peakTorque: '128 Nm @ 3,800',
          passingPunch: { en: 'Rev-Dependent', de: 'Drehzahlabhängig', ru: 'Нужны обороты' },
          realWorldFuel: '5.9–6.5 L/100 km',
          tankRange: '50 L · ~800 km',
          euroNorm: 'Euro 5 / 6',
          taxInsurance: { en: 'Very Low', de: 'Sehr niedrig', ru: 'Очень низкие' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Very Low', de: 'Sehr gering', ru: 'Очень низкие' }
        },
        buyerFitGroup: 'na-petrol-133',
        isDefault: false,
        dossierGroup: 'na-petrol',
        fuelType: 'petrol',
        hp: 99,
        shortTitle: 'AURIS 1.33 DUAL VVT-i',
        fullName: '2014 Toyota Auris 1.33 Dual VVT-i',
        engineBadge: '1.33L Dual VVT-i • 99 HP',
        engineSubLabel: {
          en: '1NR-FE Naturally Aspirated Petrol • 6-MT • 128 Nm',
          de: '1NR-FE Saugbenziner • 6-Gang-Schaltgetriebe • 128 Nm',
          ru: '1NR-FE Атмосферный бензин • 6-ст. МКПП • 128 Н·м'
        },
        rarityLabel: {
          en: 'ENTRY CITY SAVER',
          de: 'BASIS-SPARMEISTER',
          ru: 'ГОРОДСКОЙ БАЗОВЫЙ'
        },
        originalMsrp: {
          en: '€15,950 New',
          de: '15.950 € Neu',
          ru: '€15 950 новый'
        },
        estUsedPrice: '€6,900',
        perkLabel: {
          en: '✦ €6,900 Entry Price • Simple 1.33 NA Chain Engine • 1,000 kg Towing',
          de: '✦ 6.900 € Einstiegspreis • Einfacher 1.33 Kettenmotor • 1.000 kg Anhängelast',
          ru: '✦ Доступная цена €6 900 • Простой цепной мотор 1.33 • Буксировка 1 000 кг'
        },
        remarkablePositives: {
          en: [
            'LOW €6,900 ENTRY PRICE',
            'SIMPLE 1.33 CHAIN ENGINE',
            'LOW TAX & INSURANCE',
            '1,000 KG BRAKED TOWING',
            'LIGHT CITY STEERING'
          ],
          de: [
            '6.900 € EINSTIEGSPREIS',
            'SIMPLER 1.33 KETTENMOTOR',
            'NIEDRIGE STEUER & VERSICHERUNG',
            '1.000 KG ANHÄNGELAST',
            'LEICHTE STADTLENKUNG'
          ],
          ru: [
            'ЦЕНА ОТ €6 900 Б/У',
            'ЦЕПНОЙ МОТОР 1.33 NA',
            'НИЗКИЙ НАЛОГ И СТРАХОВКА',
            'БУКСИРОВКА ДО 1 000 КГ',
            'ЛЁГКИЙ РУЛЬ В ГОРОДЕ'
          ]
        },
        notableNegatives: {
          en: [
            'WEAK OVERTAKING (128 NM)',
            'SLOW 12.6S 0–100 KM/H',
            'COMMON PISTON RING ISSUES',
            'COMPACT 360L BOOT',
            'BUMPIER REAR RIDE'
          ],
          de: [
            'WENIG DURCHZUG (128 NM)',
            'TRÄGE 12,6S 0–100 KM/H',
            'BEKANNTE KOLBENRING-PROBLEME',
            'KOMPAKTER 360L KOFFERRAUM',
            'HOLPRIGERE HINTERACHSE'
          ],
          ru: [
            'СЛАБАЯ ТЯГА (128 Н·М)',
            'РАЗГОН 12,6 С ДО 100',
            'ЧАСТЫЕ ПРОБЛЕМЫ С КОЛЬЦАМИ',
            'СКРОМНЫЙ БАГАЖНИК 360 Л',
            'ЖЁСТЧЕ НА КОЧКАХ СЗАДИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.9,
          comfortCabin: 7.8,
          spacePracticality: 7.6,
          performanceDynamics: 6.1,
          runningCostsTco: 8.5
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.33L Dual VVT-i Inline-4 NA (1NR-FE)', de: '1.33L Dual-VVT-i Reihenvierzylinder Sauger (1NR-FE)', ru: '1.33L Dual VVT-i рядный 4-цил. атмосферный (1NR-FE)' } },
                  { k: 'displacement', v: '1,329 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '73 kW (99 HP)', de: '73 kW (99 PS)', ru: '73 кВт (99 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Lightweight, low-stress city engine with minimal wear components and inexpensive servicing.',
                  de: 'Leichter, entspannter Stadtmotor mit minimalen Verschleißteilen und günstiger Wartung.',
                  ru: 'Лёгкий и простой городской атмосферник с минимумом сложных узлов и недорогим ТО.'
                }
              },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj'
            },
            score: 8.7,
            badges: {
              en: ['Chain-Driven 1.33 NA', 'Watch Short-Trip Oil Use'],
              de: ['1.33 Saugmotor (Kette)', 'Ölverbrauch beachten'],
              ru: ['Цепной мотор 1.33', 'Контроль расхода масла']
            },
            dossier: {
              en: {
                headline: 'Simple Chain-Driven 1.33L Petrol — Watch Short-Trip Oil Use',
                strengths: [
                  'Timing chain and port fuel injection keep the valvetrain maintenance-free and intake valves clean.',
                  'No turbocharger, intercooler, or high-pressure fuel pump — far fewer expensive parts to fail.',
                  'Expected to run 250,000+ km with basic servicing if oil is changed every 10,000–15,000 km.'
                ],
                watchouts: [
                  'Piston oil rings can gum up on short city trips if 0W-20 oil intervals were stretched past 15,000 km.',
                  'EGR passages and the water pump can need attention around 120,000 km on stop-start commuters.'
                ],
                beforeYouBuy: [
                  'Check the service book for oil changes every 10,000–15,000 km (missed services cause oil burning).',
                  'Wipe inside the exhaust pipe — thick oily soot warns of high oil consumption.',
                  'Test Start-Stop at traffic lights and confirm no warning lights stay on.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Strict 10–15,000 km / 1 yr 0W-20 oil changes & 2-yr brake fluid flush', cost: '€130–210', ifIgnored: 'Aged short-trip oil gums up thin piston oil rings before 100,000 km', damageCost: '€1,500–2,400' },
                  { tier: 'yellow', km: '50,000–100,000 km • 4–7 yrs', action: 'Replace spark plugs, flush coolant (6–7 yrs) & inspect aging rubber drive belt / AGM battery', cost: '€240–390', ifIgnored: 'Old plugs misfire & cracked 6-yr drive belt + aged battery leave car stranded', damageCost: '€750–1,300' },
                  { tier: 'red', km: '100,000–130,000 km • 7–9 yrs', action: 'Engine carbon flush & strict 10,000 km fresh oil services', cost: '€150–300', ifIgnored: 'Stuck piston rings, heavy oil burning & ruined exhaust cat (components & fluids also degrade over years)', damageCost: '€1,800–3,000' },
                  { tier: 'orange', km: '130,000–170,000 km • 9–11 yrs', action: 'Replace stretched timing chain & hydraulic tensioner', cost: '€650–950', ifIgnored: 'Chain rattles, jumps timing & destroys engine valves (components & fluids also degrade over years)', damageCost: '€2,000–3,200' },
                  { tier: 'yellow', km: '160,000–200,000 km • 11–13 yrs', action: 'Replace water pump, drive belt & spark plugs', cost: '€250–380', ifIgnored: 'Coolant leak causes engine overheating and breakdown (rubber/plastic & seals also harden with age)', damageCost: '€1,200–2,000' },
                  { tier: 'orange', km: '200,000–250,000 km • 13–15+ yrs', action: 'Replace worn clutch kit & check gearbox input bearings', cost: '€550–800', ifIgnored: 'Slipping clutch or noisy manual gearbox damage (components & fluids also degrade over years)', damageCost: '€1,200–1,900' }
                ]
              },
              de: {
                headline: 'Schlichter 1.33L Ketten-Saugmotor — Kurzstrecken-Ölwechsel beachten',
                strengths: [
                  'Steuerkette und Saugrohreinspritzung halten den Ventiltrieb wartungsarm und die Einlassventile sauber.',
                  'Kein Turbolader, kein Ladeluftkühler und keine Hochdruckpumpe — kaum teure Fehlerquellen.',
                  'Erreicht bei Basiswartung und Ölwechseln alle 10.000–15.000 km problemlos 250.000+ km.'
                ],
                watchouts: [
                  'Kolbenringe können bei viel Kurzstrecke verkoken, wenn 0W-20-Ölwechsel über 15.000 km überzogen wurden.',
                  'AGR-Kanäle und Wasserpumpe sollten bei Stadtfahrzeugen ab ca. 120.000 km geprüft werden.'
                ],
                beforeYouBuy: [
                  'Serviceheft auf Ölwechsel alle 10.000–15.000 km prüfen (überzogene Intervalle führen zu Ölverbrauch).',
                  'Auspuffendrohr innen prüfen — dicker, öliger Ruß deutet auf erhöhten Ölverbrauch hin.',
                  'Start-Stopp im Stadtverkehr testen und sicherstellen, dass keine Warnleuchte angeht.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Streng alle 10–15.000 km / 1 J. 0W-20 Öl wechseln & alle 2 J. Bremsflüssigkeit', cost: '130–210 €', ifIgnored: 'Überaltertes Kurzstreckenöl verklebt die feinen Kolbenringe schon früh', damageCost: '1.500–2.400 €' },
                  { tier: 'yellow', km: '50.000–100.000 km • 4–7 J.', action: 'Zündkerzen wechseln, Kühlmittel spülen (6–7 J.) & gealterten Keilriemen / AGM-Batterie prüfen', cost: '240–390 €', ifIgnored: 'Alte Kerzen belasten Spulen; poröser 6-J.-Riemen und schwache Batterie streiken', damageCost: '750–1.300 €' },
                  { tier: 'red', km: '100.000–130.000 km • 7–9 J.', action: 'Ölschlamm-Spülung & konsequenter Ölwechsel alle 10.000 km', cost: '150–300 €', ifIgnored: 'Verklebte Kolbenringe, hoher Ölverbrauch & kaputter Katalysator (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.800–3.000 €' },
                  { tier: 'orange', km: '130.000–170.000 km • 9–11 J.', action: 'Gelängte Steuerkette & Kettenspanner erneuern', cost: '650–950 €', ifIgnored: 'Kette springt über und zerstört Kolben und Ventile (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '2.000–3.200 €' },
                  { tier: 'yellow', km: '160.000–200.000 km • 11–13 J.', action: 'Wasserpumpe, Keilriemen & Zündkerzen tauschen', cost: '250–380 €', ifIgnored: 'Kühlwasserverlust, Überhitzung und Liegenbleiben (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.200–2.000 €' },
                  { tier: 'orange', km: '200.000–250.000 km • 13–15+ J.', action: 'Verschlissene Kupplung & Getriebelager prüfen bzw. ersetzen', cost: '550–800 €', ifIgnored: 'Rutschende Kupplung oder teurer Getriebeschaden (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.200–1.900 €' }
                ]
              },
              ru: {
                headline: 'Простой цепной атмосферник 1.33 л — важны частые замены масла',
                strengths: [
                  'Цепь ГРМ и распределённый впрыск не требуют замены ремня и защищают впускные клапаны от нагара.',
                  'Нет турбины, интеркулера и ТНВД — минимум дорогих узлов, способных выйти из строя.',
                  'При базовом ТО и замене масла раз в 10 000–15 000 км ресурс составляет 250 000+ км.'
                ],
                watchouts: [
                  'При коротких поездках и интервалах масла свыше 15 000 км маслосъёмные кольца склонны к закоксовке.',
                  'На городских авто к 120 000 км могут потребовать внимания каналы EGR и водяная помпа.'
                ],
                beforeYouBuy: [
                  'Проверить в сервисной книжке замену масла каждые 10–15 тыс. км (при редкой замене мотор ест масло).',
                  'Осмотреть край выхлопной трубы — жирная чёрная копоть говорит о высоком угаре масла.',
                  'Проверить работу системы Start-Stop в городе и отсутствие ошибок на панели приборов.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Строго менять масло 0W-20 раз в 10–15 тыс. км / 1 год и тормозную жидкость раз в 2 года', cost: '€130–210', ifIgnored: 'Старое городское масло закоксовывает тонкие поршневые кольца ещё до 100 тыс. км', damageCost: '€1 500–2 400' },
                  { tier: 'yellow', km: '50 000–100 000 км • 4–7 лет', action: 'Заменить свечи, обновить антифриз (к 6–7 годам), проверить стареющий ремень и АКБ Start-Stop', cost: '€240–390', ifIgnored: 'Изношенные свечи портят катушки, а треснувший к 6 годам ремень оборвётся в пути', damageCost: '€750–1 300' },
                  { tier: 'red', km: '100 000–130 000 км • 7–9 лет', action: 'Раскоксовка поршневых колец и переход на замену масла раз в 10 000 км', cost: '€150–300', ifIgnored: 'Масложор литрами и быстрый выход из строя катализатора (узлы и жидкости также стареют с годами)', damageCost: '€1 800–3 000' },
                  { tier: 'orange', km: '130 000–170 000 км • 9–11 лет', action: 'Заменить растянутую цепь двигателя и натяжитель', cost: '€650–950', ifIgnored: 'Перескок цепи на зубья и дорогой ремонт головки блока (узлы и жидкости также стареют с годами)', damageCost: '€2 000–3 200' },
                  { tier: 'yellow', km: '160 000–200 000 км • 11–13 лет', action: 'Заменить помпу охлаждения, приводной ремень и свечи', cost: '€250–380', ifIgnored: 'Течь антифриза, перегрев и эвакуатор (резина, пластик и уплотнения стареют и по годам)', damageCost: '€1 200–2 000' },
                  { tier: 'orange', km: '200 000–250 000 км • 13–15+ лет', action: 'Заменить комплект сцепления и проверить подшипники коробки', cost: '€550–800', ifIgnored: 'Пробуксовка сцепления или поломка ручной коробки (узлы и жидкости также стареют с годами)', damageCost: '€1 200–1 900' }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.3,
            badges: {
              en: ['Light-Duty 6-Speed Manual', 'Simple Single-Mass Flywheel'],
              de: ['Leichtes 6-Gang-Getriebe', 'Einfaches Einmassenschwungrad'],
              ru: ['Лёгкая 6-ступ. МКПП', 'Простой одномассовый маховик']
            }
          },
          buildQualityRust: {
            specBreakdown: { suspensionWear: '@suspTorsionBeam' },
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            score: 9.4,
            badges: {
              en: ['Minimal ECU Sensors', 'Simple Reliable Wiring'],
              de: ['Minimalistische Sensorik', 'Zuverlässiges Bordnetz'],
              ru: ['Минимум датчиков ЭБУ', 'Простая надёжная проводка']
            }
          },
          rideNoiseComfort: {
            score: 6.4,
            badges: {
              en: ['Simple Torsion-Beam Rear', 'Audible Road Noise at 130 km/h'],
              de: ['Einfache Verbundlenkerachse', 'Mehr Abrollgeräusch bei 130 km/h'],
              ru: ['Простая балка сзади', 'Заметный шум колёс на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.4 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,4 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Two-Level Split Boot Floor'],
              de: ['360L Kofferraum (1.200L Max)', 'Zweistufiger Ladeboden'],
              ru: ['Багажник 360–1 200 л', 'Двухуровневый пол']
            }
          },
          payloadTowing: {
            score: 6.5,
            badges: {
              en: ['485 kg Payload', '450 / 1,000 kg Towing'],
              de: ['485 kg Zuladung', '450 / 1.000 kg Zuglast'],
              ru: ['Нагрузка 485 кг', 'Прицеп: 450 / 1 000 кг']
            },
            dossier: {
              en: {
                headline: '440 kg Payload & 1,000 kg Braked Towing',
                strengths: [
                  'Lighter kerb weight frees up slightly more cabin payload than the Hybrid.',
                  '1,000 kg braked towing capacity handles small utility or garden trailers.'
                ],
                watchouts: [
                  '99 hp and 128 Nm struggle on steep hills when towing near the limit.',
                  'Fully loaded family trips noticeably blunt acceleration.'
                ]
              },
              de: {
                headline: '440 kg Zuladung & 1.000 kg Anhängelast',
                strengths: [
                  'Geringeres Leergewicht ermöglicht 440 kg Zuladung.',
                  '1.000 kg Anhängelast (gebremst) reichen für kleine Transport- oder Gartenanhänger.'
                ],
                watchouts: [
                  'Mit 99 PS am Berg mit Anhänger spürbar gefordert.',
                  'Voll beladen lässt der Durchzug deutlich nach.'
                ]
              },
              ru: {
                headline: 'Нагрузка 440 кг и прицеп до 1000 кг',
                strengths: [
                  'Меньшая снаряжённая масса даёт запас грузоподъёмности 440 кг.',
                  'Разрешена буксировка прицепа с тормозами до 1000 кг для бытовых задач.'
                ],
                watchouts: [
                  'При полной загрузке или с прицепом на подъёмах мощности 99 л.с. впритык.',
                  'Обгоны с полной загрузкой требуют длинной прямой.'
                ]
              }
            }
          },
          accelerationOvertaking: {
            score: 4.1,
            badges: {
              en: ['0–100 km/h: 12.6 s', '175 km/h Top Speed'],
              de: ['0–100 km/h: 12,6 s', '175 km/h Spitze'],
              ru: ['0–100 км/ч: 12,6 с', 'Макс. 175 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.1,
            badges: {
              en: ['128 Nm • Light City Tune', 'Plan Highway Overtakes Ahead'],
              de: ['128 Nm • Stadt-Auslegung', 'Überholmanöver gut planen'],
              ru: ['128 Н·м • Городской мотор', 'Обгоны на трассе заранее']
            }
          },
          handlingAgility: {
            score: 5.5,
            badges: {
              en: ['Predictable Body Control', 'Light Urban FWD Handling'],
              de: ['Vorhersehbares Fahrverhalten', 'Handlich im Stadtverkehr'],
              ru: ['Предсказуемое шасси', 'Лёгкая рулёжка в городе']
            },
            dossier: {
              en: {
                headline: 'Light Front Nose, Simpler Torsion-Beam Rear Axle',
                lowScoreReasons: [
                  'Torsion-beam rear suspension lacks the composure of the multi-link axle fitted to Hybrid and 2.0L trims.',
                  'Light, comfort-tuned steering prioritizes easy urban parking over sharp cornering feedback.'
                ],
                strengths: [
                  'Lighter 1.33 engine gives nimble front turn-in at city speeds.',
                  'Safe, predictable understeer balance for everyday driving.'
                ],
                watchouts: [
                  'Slightly firmer, bouncier rear ride over sharp mid-corner bumps.'
                ]
              },
              de: {
                headline: 'Leichte Front, einfache Verbundlenker-Hinterachse',
                lowScoreReasons: [
                  'Die einfache Verbundlenker-Hinterachse erreicht nicht die Ruhe der Mehrlenkerachse von Hybrid und 2.0 Diesel.',
                  'Leichtgängige, komfortbetonte Lenkung bietet bei zügiger Kurvenfahrt wenig Rückmeldung.'
                ],
                strengths: [
                  'Geringes Motorgewicht macht die Vorderachse handlich in der Stadt.',
                  'Sicheres, gutmütiges Fahrverhalten.'
                ],
                watchouts: [
                  'Bei Querfugen spürbar unruhiger als der Hybrid.'
                ]
              },
              ru: {
                headline: 'Лёгкий передок и простая задняя балка',
                lowScoreReasons: [
                  'Задняя полузависимая балка уступает по плавности и устойчивости многорычажке у версий Hybrid и 2.0.',
                  'Лёгкий городской руль настроен на комфорт при парковке, а не на острую обратную связь.'
                ],
                strengths: [
                  'Небольшой вес двигателя делает переднюю ось лёгкой в поворотах.',
                  'Предсказуемая и безопасная настройка шасси.'
                ],
                watchouts: [
                  'На неровностях в повороте корма отрабатывает жёстче.'
                ]
              }
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            }
          },
          efficiencyFuel: {
            score: 7.1,
            badges: {
              en: ['6.1 L/100km', 'Stop & Start System'],
              de: ['6,1 L/100km', 'Start-Stopp-System'],
              ru: ['6,1 л/100 км', 'Система Старт-Стоп']
            }
          },
          taxInsuranceNorm: {
            score: 9.1,
            badges: {
              en: ['Low 1.33L Tax • Euro 5/6', 'Low Compact Insurance'],
              de: ['Niedrige 1.33-Steuer • Euro 5/6', 'Günstige Versicherung'],
              ru: ['Низкий налог 1,33 • Euro 5/6', 'Дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~90,000 km · 6 yrs', action: { en: 'Iridium Spark Plugs & Coolant Inspection', de: 'Iridium-Zündkerzen & Kühlmittel-Check', ru: 'Иридиевые свечи и проверка антифриза' }, cost: '€140–220' },
                { when: '~120,000 km · 8 yrs', action: { en: '6-Speed Manual Gearbox Oil (75W LV)', de: '6-Gang Schaltgetriebeöl wechseln (75W LV)', ru: 'Замена масла в 6-ст. МКПП (75W LV)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '120–180k km · 8–12 yrs', action: { en: 'Piston Oil-Control Ring Wear (Pre-2014 Units)', de: 'Ölabstreifringe prüfen (Baujahre vor 2014)', ru: 'Износ маслосъёмных колец (выпуск до 2014 г.)' }, cost: '€600–1,200', risk: { en: 'Rising oil burn & catalytic converter fouling', de: 'Steigender Ölverbrauch & Katalysator-Schäden', ru: 'Прогрессирующий масложор и выход из строя катализатора' }, damage: '€1,800–2,600' }
              ]
            },
            score: 9.2,
            badges: {
              en: ['Cheap Toyota Service Parts', 'No Turbo / DPF Repair Risk'],
              de: ['Günstige Toyota-Wartungsteile', 'Kein Turbo-/DPF-Risiko'],
              ru: ['Дешёвые запчасти Toyota', 'Нет турбины и сажевого']
            }
          },
          depreciationResale: {
            score: 8.1,
            badges: {
              en: ['Low Price Floor', 'Popular Starter Car'],
              de: ['Geringer Wertverlust', 'Beliebtes Stadtauto'],
              ru: ['Малая потеря цены', 'Ликвидный хэтчбек']
            }
          }
        }
      },
      {
        id: '1.6-valvematic',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: 'multidrive-s',
            estUsedPrice: '€9,100',
            specOverrides: { sprint0100: '11.1 s', topSpeed: '190 km/h', realWorldFuel: '6.6–7.3 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.0,
                badges: {
                  en: ['0–100 km/h: 11.1 s (CVT)', '190 km/h Top Speed'],
                  de: ['0–100 km/h: 11,1 s (CVT)', '190 km/h Spitze'],
                  ru: ['0–100 км/ч: 11,1 s (CVT)', 'Макс. 190 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.8,
                badges: {
                  en: ['6.6–7.3 L/100 km (CVT)'],
                  de: ['6,6–7,3 L/100 km (CVT)'],
                  ru: ['6,6–7,3 L/100 km (CVT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '1.6L Valvematic NA', de: '1.6L Valvematic Sauger', ru: '1.6L Valvematic Атм.' },
          forcedInduction: { en: '✕ Turbo / E-Motor', de: '✕ Turbo / E-Motor', ru: '✕ Турбо / Эл. мотор' },
          injection: { en: '✓ Port (Indirect)', de: '✓ Saugrohr (Indirekt)', ru: '✓ Распред. (непрямой)' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Single Clutch (✕ DMF)', de: '✓ Kupplung (✕ ZMS)', ru: '✓ Сцепление (✕ ДММ)' },
          towingBraked: '1,300 kg',
          sprint0100: '10.0 s',
          topSpeed: '200 km/h',
          peakTorque: '160 Nm @ 4,400',
          passingPunch: { en: 'Smooth · Needs Revs', de: 'Linear · Braucht Drehzahl', ru: 'Ровно · Нужны обороты' },
          realWorldFuel: '6.4–7.1 L/100 km',
          tankRange: '50 L · ~730 km',
          euroNorm: 'Euro 5 / 6',
          taxInsurance: { en: 'Low', de: 'Niedrig', ru: 'Низкие' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Low', de: 'Gering', ru: 'Низкие' }
        },
        buyerFitGroup: 'na-petrol-16',
        isDefault: false,
        dossierGroup: 'na-petrol',
        fuelType: 'petrol',
        hp: 132,
        shortTitle: 'AURIS 1.6 VALVEMATIC',
        fullName: '2014 Toyota Auris 1.6 Valvematic',
        engineBadge: '1.6L Valvematic • 132 HP',
        engineSubLabel: {
          en: '1ZR-FAE Naturally Aspirated Petrol • 6-MT • 160 Nm',
          de: '1ZR-FAE Valvematic Saugbenziner • 6-MT • 160 Nm',
          ru: '1ZR-FAE Атмосферный бензин • 6-ст. МКПП • 160 Н·м'
        },
        rarityLabel: {
          en: 'NA ALL-ROUNDER',
          de: 'SAUGER-ALLROUNDER',
          ru: 'КЛАССИЧЕСКИЙ АТМО'
        },
        originalMsrp: {
          en: '€19,750 New',
          de: '19.750 € Neu',
          ru: '€19 750 новый'
        },
        estUsedPrice: '€8,200',
        perkLabel: {
          en: '✦ Bulletproof 1.6 Valvematic • 1,300 kg Towing • Multi-Link Rear',
          de: '✦ Robuster 1.6 Valvematic • 1.300 kg Anhängelast • Mehrlenkerachse',
          ru: '✦ Неубиваемый 1.6 Valvematic • Буксировка 1 300 кг • Многорычажка'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 1.6 CHAIN NA',
            '1,300 KG BRAKED TOWING',
            'MULTI-LINK REAR AXLE',
            'NO TURBO OR HYBRID PARTS',
            'SMOOTH 6-MT (200 KM/H)'
          ],
          de: [
            'ROBUSTER 1.6 KETTENMOTOR',
            '1.300 KG ANHÄNGELAST',
            'MEHRLENKER-HINTERACHSE',
            'OHNE TURBO-KOMPLEXITÄT',
            '6-GANG-SCHALTER (200 KM/H)'
          ],
          ru: [
            'НАДЁЖНЫЙ ЦЕПНОЙ 1.6 NA',
            'БУКСИРОВКА ДО 1 300 КГ',
            'МНОГОРЫЧАЖКА СЗАДИ',
            'БЕЗ ТУРБИНЫ И ГИБРИДА',
            '6-СТ. МКПП (200 КМ/Ч)'
          ]
        },
        notableNegatives: {
          en: [
            'NEEDS REVS FOR TORQUE',
            '6.6 L/100KM ECONOMY',
            'COMPACT 360L BOOT'
          ],
          de: [
            'BRAUCHT VIEL DREHZAHL',
            '6,6 L/100KM VERBRAUCH',
            'KOMPAKTER 360L KOFFERRAUM'
          ],
          ru: [
            'ТРЕБУЕТ ВЫСОКИХ ОБОРОТОВ',
            'РАСХОД 6,6 Л/100 КМ',
            'СКРОМНЫЙ БАГАЖНИК 360 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 9.1,
          comfortCabin: 7.9,
          spacePracticality: 7.8,
          performanceDynamics: 6.8,
          runningCostsTco: 8.2
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L Valvematic Inline-4 NA (1ZR-FAE)', de: '1.6L Valvematic Reihenvierzylinder Sauger (1ZR-FAE)', ru: '1.6L Valvematic рядный 4-цил. атмосферный (1ZR-FAE)' } },
                  { k: 'displacement', v: '1,598 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '97 kW (132 HP)', de: '97 kW (132 PS)', ru: '97 кВт (132 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Proven 250,000–300,000+ km naturally aspirated block with simple annual oil servicing.',
                  de: 'Bewährter Saugmotor für 250.000–300.000+ km bei regulärem jährlichem Ölwechsel.',
                  ru: 'Проверенный атмосферный блок на 250–300+ тыс. км при простом ежегодном ТО.'
                }
              },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj'
            },
            score: 9.6,
            badges: {
              en: ['1.6 Timing Chain NA', '300,000+ km Lifespan'],
              de: ['1.6 Ketten-Saugmotor', '300.000+ km Laufleistung'],
              ru: ['Цепной мотор 1.6', 'Ресурс 300 000+ км']
            },
            dossier: {
              en: {
                headline: 'Ultra-Durable 1.6L Chain Engine Built for High Mileage',
                strengths: [
                  'Port fuel injection and a heavy-duty timing chain prevent intake carbon buildup and belt changes.',
                  'No turbocharger, intercooler, high-pressure fuel pump, or DPF — simple naturally aspirated reliability.',
                  'Routinely runs 300,000+ km with basic oil and coolant servicing.'
                ],
                watchouts: [
                  'The Valvematic variable valve-lift unit can fail expensively if oil changes were neglected.',
                  'Water pump weeping and ignition coil wear are standard maintenance items around 120,000–160,000 km.'
                ],
                beforeYouBuy: [
                  'Start the engine cold and confirm a steady idle with zero dashboard warning lights.',
                  'Look around the water pump and engine block for dried pink coolant crust or fresh oil leaks.',
                  'Check service records for regular annual oil changes to ensure the valve-lift unit is healthy.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Yearly fresh synthetic oil (keeps valve-lift actuator clean) & 2-yr brake fluid flush', cost: '€130–220', ifIgnored: 'Sludged aged oil stresses expensive electronic variable valve-lift unit', damageCost: '€1,000–1,500' },
                  { tier: 'yellow', km: '50,000–100,000 km • 4–7 yrs', action: 'Change CVT auto oil (60k / 4–5 yrs) or MT oil, swap plugs & check 6-yr aging rubber belt/hoses', cost: '€250–420', ifIgnored: 'Aged CVT fluid wears belt pulleys; dry rubber accessory belt cracks with age', damageCost: '€1,800–2,800' },
                  { tier: 'yellow', km: '100,000–140,000 km • 7–9 yrs', action: 'Replace long-life spark plugs & change automatic gearbox oil (if CVT)', cost: '€180–320', ifIgnored: 'Jerky shifting, misfires & premature automatic gearbox wear (rubber/plastic & seals also harden with age)', damageCost: '€2,000–3,200' },
                  { tier: 'yellow', km: '140,000–180,000 km • 9–11 yrs', action: 'Replace leaking water pump & flush fresh engine coolant', cost: '€220–350', ifIgnored: 'Coolant loss & sudden overheating in summer traffic (rubber/plastic & seals also harden with age)', damageCost: '€1,400–2,200' },
                  { tier: 'orange', km: '160,000–200,000 km • 11–13 yrs', action: 'Replace electronic valve-lift control unit if warning light triggers', cost: '€750–1,100', ifIgnored: 'Car locks into slow crawl mode and fails road inspection (components & fluids also degrade over years)', damageCost: '€1,100–1,400' },
                  { tier: 'yellow', km: '200,000–250,000 km • 13–15+ yrs', action: 'Replace manual clutch kit & reseal minor timing cover oil seep', cost: '€550–850', ifIgnored: 'Oil drips onto alternator/belts & slipping clutch', damageCost: '€1,000–1,500' }
                ]
              },
              de: {
                headline: 'Extrem langlebiger 1.6L Ketten-Saugmotor für hohe Laufleistungen',
                strengths: [
                  'Saugrohreinspritzung und kräftige Steuerkette verhindern Verkokung und Zahnriemenwechsel.',
                  'Kein Turbolader, kein Ladeluftkühler, keine Hochdruckpumpe und kein Partikelfilter.',
                  'Läuft mit normaler Öl- und Kühlmittelwartung problemlos 300.000+ km.'
                ],
                watchouts: [
                  'Die Valvematic-Ventilhubsteuerung kann bei vernachlässigten Ölwechseln teuer ausfallen.',
                  'Wasserpumpe und Stabzündspulen sind zwischen 120.000 und 160.000 km typische Verschleißteile.'
                ],
                beforeYouBuy: [
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Warnleuchten bei der Probefahrt achten.',
                  'An Wasserpumpe und Motorblock nach getrockneten rosa Kühlmittelresten oder Ölverlust schauen.',
                  'Regelmäßige jährliche Ölwechsel im Scheckheft prüfen, um teure Ventilhub-Schäden auszuschließen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Jährlich frisches Synthetiköl (schützt Valvematic-Einheit) & alle 2 J. Bremsflüssigkeit', cost: '130–220 €', ifIgnored: 'Verschlammtes Altöl schädigt die teure elektronische Ventilhub-Steuerung', damageCost: '1.000–1.500 €' },
                  { tier: 'yellow', km: '50.000–100.000 km • 4–7 J.', action: 'CVT-Automatiköl (60 Tkm / 4–5 J.) / Schaltöl & Kerzen wechseln; 6-J.-Riemen prüfen', cost: '250–420 €', ifIgnored: 'Altes Automatiköl verschleißt Schubriemen; gealterter Gummiriemen reißt', damageCost: '1.800–2.800 €' },
                  { tier: 'yellow', km: '100.000–140.000 km • 7–9 J.', action: 'Zündkerzen erneuern & bei Automatik das Getriebeöl wechseln', cost: '180–320 €', ifIgnored: 'Ruckelndes Schalten & vorzeitiger Getriebeschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '2.000–3.200 €' },
                  { tier: 'yellow', km: '140.000–180.000 km • 9–11 J.', action: 'Wasserpumpe & Kühlmittel bei ersten Tropfspuren tauschen', cost: '220–350 €', ifIgnored: 'Kühlwasserverlust & Überhitzen im Sommerstau (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.400–2.200 €' },
                  { tier: 'orange', km: '160.000–200.000 km • 11–13 J.', action: 'Elektrische Ventilhub-Steuerung (Valvematic) bei Störung erneuern', cost: '750–1.100 €', ifIgnored: 'Dauerhafter Notlauf & keine Hauptuntersuchung möglich (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.100–1.400 €' },
                  { tier: 'yellow', km: '200.000–250.000 km • 13–15+ J.', action: 'Kupplungssatz (Schalter) ersetzen & leichten Ölverlust abdichten', cost: '550–850 €', ifIgnored: 'Öl verschmutzt Riemen/Lichtmaschine & Kupplung rutscht durch', damageCost: '1.000–1.500 €' }
                ]
              },
              ru: {
                headline: 'Сверхнадёжный цепной атмосферник 1.6 л для больших пробегов',
                strengths: [
                  'Распределённый впрыск и прочная цепь ГРМ защищают клапаны от нагара и избавляют от замены ремня.',
                  'Нет турбины, интеркулера, ТНВД и сажевого фильтра — простая атмосферная конструкция.',
                  'При базовой замене масла и антифриза стабильно ходит 300 000+ км.'
                ],
                watchouts: [
                  'Блок управления подъёмом клапанов Valvematic чувствителен к старому маслу и дорог в замене.',
                  'Водяная помпа и катушки зажигания обычно требуют замены на пробеге 120 000–160 000 км.'
                ],
                beforeYouBuy: [
                  'Запустить холодный мотор: обороты должны стоять ровно, а ошибки на панели не загораться.',
                  'Осмотреть помпу и стыки блока на наличие розовых подтёков антифриза и следов масла.',
                  'Проверить регулярность ежегодной замены масла, чтобы узел Valvematic был в порядке.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Ежегодно менять синтетическое масло (беречь блок подъёма клапанов) и тормозную жидкость раз в 2 года', cost: '€130–220', ifIgnored: 'Грязное старое масло выводит из строя дорогой блок управления клапанами', damageCost: '€1 000–1 500' },
                  { tier: 'yellow', km: '50 000–100 000 км • 4–7 лет', action: 'Сменить масло в вариаторе CVT (60 тыс. / 4–5 лет) или МКПП, свечи и стареющий ремень', cost: '€250–420', ifIgnored: 'Изношенная жидкость портит ремень вариатора, а старый ремень навесного трескается к 6 годам', damageCost: '€1 800–2 800' },
                  { tier: 'yellow', km: '100 000–140 000 км • 7–9 лет', action: 'Заменить свечи зажигания и обновить масло в коробке-вариаторе', cost: '€180–320', ifIgnored: 'Рывки при разгоне и ускоренный износ вариатора (узлы и жидкости также стареют с годами)', damageCost: '€2 000–3 200' },
                  { tier: 'yellow', km: '140 000–180 000 км • 9–11 лет', action: 'Заменить водяной насос и полностью освежить антифриз', cost: '€220–350', ifIgnored: 'Утечка антифриза и перегрев мотора в пробке (резина, пластик и уплотнения стареют и по годам)', damageCost: '€1 400–2 200' },
                  { tier: 'orange', km: '160 000–200 000 км • 11–13 лет', action: 'Заменить блок управления подъёмом клапанов при появлении ошибки', cost: '€750–1 100', ifIgnored: 'Аварийный режим, потеря тяги и отказ в прохождении ТО (узлы и жидкости также стареют с годами)', damageCost: '€1 100–1 400' },
                  { tier: 'yellow', km: '200 000–250 000 км • 13–15+ лет', action: 'Поменять сцепление (на МКПП) и устранить мелкое запотевание масла', cost: '€550–850', ifIgnored: 'Попадание масла на ремень генератора и пробуксовка сцепления (узлы и жидкости также стареют с годами)', damageCost: '€1 000–1 500' }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.2,
            badges: {
              en: ['Smooth 6-Speed Manual', 'Low 160 Nm Gearbox Stress'],
              de: ['Sauberes 6-Gang-Getriebe', 'Geringe Last bei 160 Nm'],
              ru: ['Чёткая 6-ступ. МКПП', 'Низкая нагрузка (160 Н·м)']
            },
            dossier: {
              en: {
                headline: 'Crisp 6-Speed Manual (Optional Multidrive S CVT)',
                strengths: [
                  '6-speed manual offers positive throws and reliable synchros.',
                  'Conventional flywheel keeps manual clutch service affordable.'
                ],
                watchouts: [
                  'Optional Multidrive S CVT is smooth in town but needs fluid changes every 60,000 km to avoid belt wear.',
                  'Manual is noticeably more durable past 180,000 km than the CVT.'
                ],
                beforeYouBuy: [
                  'Prefer the 6-speed manual; if buying Multidrive S CVT, verify transmission fluid service records.'
                ]
              },
              de: {
                headline: 'Präzises 6-Gang-Schaltgetriebe (optional Multidrive S)',
                strengths: [
                  '6-Gang-Schaltgetriebe schaltet sauber und hält bei normaler Fahrweise extrem lange.',
                  'Günstiger Kupplungstausch dank klassischem Schwungrad.'
                ],
                watchouts: [
                  'Optionale Multidrive-S-Automatik erfordert regelmäßige Ölwechsel alle 60.000 km.',
                  'Handschalter ist jenseits von 180.000 km klar langlebiger.'
                ],
                beforeYouBuy: [
                  'Für maximale Haltbarkeit Handschalter bevorzugen; bei Multidrive S Ölwechselbelege prüfen.'
                ]
              },
              ru: {
                headline: 'Чёткая 6-МКПП (или опциональный вариатор Multidrive S)',
                strengths: [
                  'Механическая 6-ступенчатая коробка отличается чётким ходом и высоким ресурсом.',
                  'Недорогое обслуживание сцепления.'
                ],
                watchouts: [
                  'Вариатор Multidrive S требует замены масла каждые 60 000 км и дороже в ремонте.',
                  'На больших пробегах механика заметно надёжнее.'
                ]
              }
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            score: 9.3,
            badges: {
              en: ['Proven Denso Electronics', 'Reliable Valvematic ECU'],
              de: ['Bewährte Denso-Elektronik', 'Zuverlässiges Steuergerät'],
              ru: ['Надёжная электрика Denso', 'Стабильная работа ЭБУ']
            },
            dossier: {
              en: {
                headline: 'Proven Toyota Petrol Electrics (Watch Valvematic Actuator)',
                strengths: [
                  'Straightforward 12V architecture without high-voltage components.',
                  'Standard sensors and coils are widely available and inexpensive.'
                ],
                watchouts: [
                  'Valvematic variable-lift controller (1ZR-FAE) is generally reliable, though costly if it fails past 180k km.',
                  'Faulty Valvematic unit triggers limp mode and check-engine light.'
                ],
                beforeYouBuy: [
                  'Verify smooth idle and zero engine warning lights during a cold-to-warm test drive.'
                ]
              },
              de: {
                headline: 'Solide Elektrik (Valvematic-Stellmotor beachten)',
                strengths: [
                  'Unkomplizierte 12V-Bordelektrik ohne Hochvolt-Technik.',
                  'Günstige und weit verbreitete Standard-Sensoren.'
                ],
                watchouts: [
                  'Valvematic-Ventilhubsteuerung ist meist haltbar, bei Defekt im hohen Alter aber kostspielig.',
                  'Ein Defekt führt sofort zu Notlauf und Motorkontrollleuchte.'
                ],
                beforeYouBuy: [
                  'Auf ruhigen Leerlauf und fehlerfreien Warmfahrtest achten.'
                ]
              },
              ru: {
                headline: 'Надёжная электрика (проверять блок Valvematic)',
                strengths: [
                  'Классическая 12В электрика без сложных высоковольтных систем.',
                  'Доступные датчики и катушки зажигания.'
                ],
                watchouts: [
                  'Контроллер подъёма клапанов Valvematic обычно надёжен, но дорог при редких отказах после 180 тыс. км.',
                  'При сбое блока мотор переходит в аварийный режим.'
                ],
                beforeYouBuy: [
                  'Проверить ровный холостой ход и отсутствие ошибок на приборной панели.'
                ]
              }
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Multi-Link Rear Absorption', 'Moderate Wind Noise on Highway'],
              de: ['Mehrlenkerachse schluckt gut', 'Mäßige Windgeräusche AB'],
              ru: ['Многорычажка сглаживает ямы', 'Умеренный шум на высокой скорости']
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.4 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,4 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Two-Level Split Boot Floor'],
              de: ['360L Kofferraum (1.200L Max)', 'Zweistufiger Ladeboden'],
              ru: ['Багажник 360–1 200 л', 'Двухуровневый пол']
            }
          },
          payloadTowing: {
            score: 6.5,
            badges: {
              en: ['520 kg Payload', '450 / 1,300 kg Towing'],
              de: ['520 kg Zuladung', '450 / 1.300 kg Zuglast'],
              ru: ['Нагрузка 520 кг', 'Прицеп: 450 / 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.2,
            badges: {
              en: ['0–100 km/h: 10.0 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 10,0 s', '200 km/h Spitze'],
              ru: ['0–100 км/ч: 10,0 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.5,
            badges: {
              en: ['160 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['160 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['160 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 7.0,
            badges: {
              en: ['Multi-Link Rear Axle Stability', 'Composed Highway Turn-In'],
              de: ['Mehrlenker-Hinterachse', 'Stabiles Autobahnhandling'],
              ru: ['Задняя многорычажка', 'Уверенная трассовая устойчивость']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            }
          },
          efficiencyFuel: {
            score: 6.5,
            badges: {
              en: ['6.6 L/100km', 'Valvematic Lift'],
              de: ['6,6 L/100km', 'Valvematic-System'],
              ru: ['6,6 л/100 км', 'Фазы Valvematic']
            }
          },
          taxInsuranceNorm: {
            score: 8.3,
            badges: {
              en: ['Moderate 1.6L Tax • Euro 5/6', 'Reasonable Compact Insurance'],
              de: ['Faire 1.6-Steuer • Euro 5/6', 'Normale Versicherung'],
              ru: ['Умеренный налог 1,6 • Euro 5/6', 'Средняя страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~90,000 km · 6 yrs', action: { en: 'Iridium Spark Plugs & Coolant Flush', de: 'Iridium-Zündkerzen & Kühlmittelwechsel', ru: 'Иридиевые свечи и замена антифриза' }, cost: '€150–240' },
                { when: '~120,000 km · 8 yrs', action: { en: '6-Speed Manual Gearbox Oil (75W LV)', de: '6-Gang Schaltgetriebeöl wechseln (75W LV)', ru: 'Замена масла в 6-ст. МКПП (75W LV)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '140–210k km · 9–14 yrs', action: { en: 'Valvematic Variable Valve-Lift Actuator Module', de: 'Valvematic-Stellmodul (Ventilhubsteuerung)', ru: 'Блок управления подъёмом клапанов Valvematic' }, cost: '€850–1,250', risk: { en: 'Limp-home mode, rough idle & loss of throttle response', de: 'Notlauf, unrunder Leerlauf & Leistungsverlust', ru: 'Аварийный режим, нестабильный холостой ход' }, damage: '€1,300–1,700' }
              ]
            },
            score: 9.2,
            badges: {
              en: ['Simple NA Routine Upkeep', 'No Turbo / High-Pressure Parts'],
              de: ['Günstiger Sauger-Service', 'Kein Turbo-/Hochdruck-Risiko'],
              ru: ['Недорогое плановое ТО', 'Без турбины и ТНВД']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['Sought-After 1.6 NA', 'Strong Private Resale'],
              de: ['Gefragter 1.6 Sauger', 'Hohe Wertstabilität'],
              ru: ['Спрос на 1.6 атмо', 'Отличная ликвидность']
            }
          }
        }
      },
      {
        id: '1.4-d4d',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [{ id: '6-mt-sc', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.4L D-4D Diesel', de: '1.4L D-4D Diesel', ru: '1.4L D-4D Дизель' },
          forcedInduction: { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
          injection: { en: '✓ Common-Rail DI', de: '✓ Common-Rail Direkt', ru: '✓ Common-Rail прямой' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Single Clutch (✕ DMF)', de: '✓ Kupplung (✕ ZMS)', ru: '✓ Сцепление (✕ ДММ)' },
          suspensionWear: { en: 'Torsion Beam (Simple)', de: 'Verbundlenker (Simpel)', ru: 'Балка (простая)' },
          towingBraked: '1,000 kg',
          sprint0100: '12.5 s',
          topSpeed: '180 km/h',
          peakTorque: '205 Nm @ 1,800',
          passingPunch: { en: 'Strong Low-End', de: 'Guter Antritt unten', ru: 'Хорошая тяга с низов' },
          realWorldFuel: '4.6–5.2 L/100 km',
          tankRange: '50 L · ~1,000 km',
          euroNorm: 'Euro 5 / 6 (DPF)',
          taxInsurance: { en: 'Low–Moderate', de: 'Niedrig–Mittel', ru: 'Низкие–Средние' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Low–Moderate', de: 'Gering–Mittel', ru: 'Низкие–Средние' }
        },
        buyerFitGroup: 'small-diesel',
        isDefault: false,
        dossierGroup: 'd4d-diesel',
        fuelType: 'diesel',
        hp: 90,
        shortTitle: 'AURIS 1.4 D-4D',
        fullName: '2014 Toyota Auris 1.4 D-4D',
        engineBadge: '1.4L D-4D • 90 HP',
        engineSubLabel: {
          en: '1ND-TV 8v Turbo-Diesel • 6-MT • 205 Nm',
          de: '1ND-TV 1.4L Turbodiesel • 6-Gang-Schaltgetriebe • 205 Nm',
          ru: '1ND-TV 1.4L Турбодизель • 6-ст. МКПП • 205 Н·м'
        },
        rarityLabel: {
          en: 'FRUGAL DIESEL',
          de: 'SPAR-DIESEL',
          ru: 'ЭКОНОМ-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€19,200 New',
          de: '19.200 € Neu',
          ru: '€19 200 новый'
        },
        estUsedPrice: '€7,100',
        perkLabel: {
          en: '✦ 4.7 L/100km Diesel Economy • Tough 8v 1ND-TV Block • Low Tax',
          de: '✦ 4,7 L/100km Dieselverbrauch • Robuster 1ND-TV Motor • Günstige Steuer',
          ru: '✦ Расход 4,7 л/100 км • Надёжный дизель 1ND-TV • Малый налог'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 4.7 L/100KM',
            'TOUGH 1.4 DIESEL ENGINE',
            'CHEAPER CLUTCH REPAIRS',
            'LOW 1.4L DIESEL ROAD TAX',
            '1,000 KG BRAKED TOWING'
          ],
          de: [
            'SPARSAM: 4,7 L/100KM',
            'ROBUSTER 1.4 DIESELMOTOR',
            'GÜNSTIGERE KUPPLUNGSREPARATUR',
            'NIEDRIGE 1.4L KFZ-STEUER',
            '1.000 KG ANHÄNGELAST'
          ],
          ru: [
            'РАСХОД 4,7 Л/100 КМ',
            'НАДЁЖНЫЙ ДИЗЕЛЬ 1.4',
            'ДЕШЁВЫЙ РЕМОНТ СЦЕПЛЕНИЯ',
            'МАЛЫЙ НАЛОГ И СТРАХОВКА',
            'БУКСИРОВКА ДО 1 000 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 12.5S 0–100 KM/H',
            'DPF DISLIKES SHORT TRIPS',
            'EURO 5 CITY RESTRICTIONS',
            'COMPACT 360L BOOT'
          ],
          de: [
            'TRÄGE 12,5S 0–100 KM/H',
            'DPF MAG KEINE KURZSTRECKE',
            'EURO-5-UMWELTZONEN',
            'KOMPAKTER 360L KOFFERRAUM'
          ],
          ru: [
            'РАЗГОН 12,5 С ДО 100',
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'СКРОМНЫЙ БАГАЖНИК 360 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.9,
          comfortCabin: 7.7,
          spacePracticality: 7.6,
          performanceDynamics: 6.7,
          runningCostsTco: 8.3
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.4L D-4D Inline-4 Turbodiesel (1ND-TV)', de: '1.4L D-4D Reihenvierzylinder Turbodiesel (1ND-TV)', ru: '1.4L D-4D рядный 4-цил. турбодизель (1ND-TV)' } },
                  { k: 'displacement', v: '1,364 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 8V SOHC', de: '4 Zylinder · 8V SOHC', ru: '4 цилиндра · 8V SOHC' } },
                  { k: 'output', v: { en: '66 kW (90 HP)', de: '66 kW (90 PS)', ru: '66 кВт (90 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: {
                  en: 'One of the toughest small diesels of its era — routinely crosses 250,000+ km on highway commutes.',
                  de: 'Einer der standfestesten Kleindiesel seiner Generation — auf Pendlerstrecken oft über 250.000+ km.',
                  ru: 'Один из самых выносливых малых дизелей — на трассе уверенно проходит 250 000+ км.'
                }
              },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi'
            },
            score: 9.3,
            badges: {
              en: ['Simple 8v Chain Diesel', 'Proven Cast-Iron / SOHC Core'],
              de: ['Simpler 8V Kettenmotor', 'Robuster 8-Ventil-SOHC-Block'],
              ru: ['Простой 8-кл. дизель', 'Ресурсный блок SOHC без сложного ГРМ']
            },
            dossier: {
              en: {
                headline: 'Frugal 8-Valve Chain Diesel Built for Commuter Longevity',
                strengths: [
                  'Simple 8-valve timing-chain layout with durable Bosch common-rail pump and solenoid injectors.',
                  'Single-mass flywheel design avoids the expensive dual-mass flywheel bills of larger diesels.',
                  'Easily reaches 300,000+ km with timely oil, fuel-filter servicing, and regular highway runs.'
                ],
                watchouts: [
                  'Short city trips clog the DPF and dilute engine oil with diesel — strictly an intercity commuter.',
                  'Turbo oil feed and EGR valve require oil changes under 15,000 km and soot cleaning after 150,000 km.'
                ],
                beforeYouBuy: [
                  'Ask if the car mostly drove outside the city — pure short trips quickly clog the diesel soot filter.',
                  'Lift the plastic engine cover and check for black tar or exhaust smell around the fuel injectors.',
                  'Confirm timely 15,000 km oil and 2-year fuel-filter changes in the service history.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Annual low-ash oil, diesel fuel filter every 2 yrs & regular highway drives for soot filter', cost: '€160–260', ifIgnored: 'Water in old fuel harms injectors; pure city driving clogs diesel soot filter early', damageCost: '€1,100–1,800' },
                  { tier: 'yellow', km: '50,000–100,000 km • 4–7 yrs', action: 'Change manual gearbox oil (60–80k / 5 yrs), brake fluid & check 6-yr aging rubber turbo hoses', cost: '€190–320', ifIgnored: 'Perished rubber boost/vacuum hoses crack with age & trigger boost leaks', damageCost: '€750–1,300' },
                  { tier: 'yellow', km: '100,000–140,000 km • 7–9 yrs', action: 'Clean exhaust recirculation valve & soot-filter pressure hoses', cost: '€180–300', ifIgnored: 'Sluggish acceleration & blocked diesel soot filter (rubber/plastic & seals also harden with age)', damageCost: '€1,000–1,600' },
                  { tier: 'orange', km: '140,000–180,000 km • 9–11 yrs', action: 'Replace leaking copper injector washers & check turbo oil line', cost: '€200–380', ifIgnored: 'Black tar seals injectors shut & starves turbocharger of oil (rubber/plastic & seals also harden with age)', damageCost: '€1,200–1,900' },
                  { tier: 'orange', km: '180,000–220,000 km • 11–13 yrs', action: 'Replace clutch kit (or clutch actuator motor on automated trim)', cost: '€550–1,200', ifIgnored: 'Car refuses to shift into gear and leaves you stranded (components & fluids also degrade over years)', damageCost: '€1,400–2,000' },
                  { tier: 'red', km: '200,000–250,000 km • 13–15+ yrs', action: 'Professional diesel soot filter deep-clean & timing chain check', cost: '€400–750', ifIgnored: 'Completely choked exhaust & blown turbo/engine damage (components & fluids also degrade over years)', damageCost: '€1,800–2,800' }
                ]
              },
              de: {
                headline: 'Sparsamer 8-Ventil-Kettendiesel für lange Pendlerstrecken',
                strengths: [
                  'Schlichter 8-Ventil-Kettenmotor mit robuster Bosch Common-Rail-Pumpe und langlebigen Injektoren.',
                  'Einmassenschwungrad ab Werk erspart den teuren Zweimassenschwungrad-Tausch größerer Diesel.',
                  'Erreicht bei regelmäßigen Öl-/Kraftstofffilterwechseln und Überlandfahrt problemlos 300.000+ km.'
                ],
                watchouts: [
                  'Kurzstrecken setzen den Partikelfilter (DPF) zu und verdünnen das Öl — reiner Langstrecken-/Pendlerdiesel.',
                  'Turbolader-Ölversorgung und AGR-Ventil brauchen Ölwechsel unter 15.000 km und Reinigung ab 150.000 km.'
                ],
                beforeYouBuy: [
                  'Fahrprofil erfragen: Langstrecken-Autos wählen, da reine Stadtfahrten den Partikelfilter schnell verstopfen.',
                  'Unter der Motorabdeckung prüfen, ob schwarzer Teer oder Abgasgeruch um die Einspritzdüsen austritt.',
                  'Belege für Ölwechsel alle 15.000 km und Dieselfilterwechsel alle 2 Jahre im Scheckheft prüfen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Jährlich Low-Ash-Öl, alle 2 J. Dieselfilter wechseln & regelmäßig Überland für DPF fahren', cost: '160–260 €', ifIgnored: 'Wasser im Kraftstoff schadet Injektoren; Kurzstrecken verstopfen den DPF früh', damageCost: '1.100–1.800 €' },
                  { tier: 'yellow', km: '50.000–100.000 km • 4–7 J.', action: 'Schaltgetriebeöl (60–80 Tkm / 5 J.) wechseln & nach 6 J. gealterte Turboschläuche prüfen', cost: '190–320 €', ifIgnored: 'Altersbedingt spröde Gummischläuche reißen & verursachen Ladedruckverlust', damageCost: '750–1.300 €' },
                  { tier: 'yellow', km: '100.000–140.000 km • 7–9 J.', action: 'Abgas-Rückführventil (AGR) & Partikelfilter-Schläuche reinigen', cost: '180–300 €', ifIgnored: 'Leistungsverlust & verstopfter Dieselpartikelfilter (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.000–1.600 €' },
                  { tier: 'orange', km: '140.000–180.000 km • 9–11 J.', action: 'Dichtringe der Einspritzdüsen tauschen & Turbo-Ölleitung prüfen', cost: '200–380 €', ifIgnored: 'Verharzte Düsen & Ölmangel zerstören den Turbolader (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.200–1.900 €' },
                  { tier: 'orange', km: '180.000–220.000 km • 11–13 J.', action: 'Kupplung erneuern (bei Halbautomatik auch den Schaltmotor)', cost: '550–1.200 €', ifIgnored: 'Kein Gang lässt sich mehr einlegen, Fahrzeug bleibt stehen (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.400–2.000 €' },
                  { tier: 'red', km: '200.000–250.000 km • 13–15+ J.', action: 'Professionelle Partikelfilter-Reinigung & Steuerkette prüfen', cost: '400–750 €', ifIgnored: 'Verstopfter Auspuff führt zu Turbo- und Motorschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.800–2.800 €' }
                ]
              },
              ru: {
                headline: 'Экономичный 8-клапанный цепной дизель для трассы и пригорода',
                strengths: [
                  'Простой 8-клапанный блок с цепью ГРМ, крепким ТНВД Bosch и электромагнитными форсунками.',
                  'Одномассовый маховик избавляет от дорогих замен демпферного маховика, как на 2.0-дизелях.',
                  'При своевременной замене масла, топливного фильтра и езде по трассе ходит 300 000+ км.'
                ],
                watchouts: [
                  'Частые короткие поездки быстро забивают сажевый фильтр (DPF) и разжижают масло соляркой.',
                  'Турбина и клапан EGR требуют смены масла не реже 15 000 км и чистки после 150 000 км.'
                ],
                beforeYouBuy: [
                  'Узнать, ездила ли машина по трассе — частые короткие поездки по городу быстро забивают DPF.',
                  'Заглянуть под крышку двигателя — вокруг форсунок не должно быть чёрной смолы и запаха выхлопа.',
                  'Проверить в сервисной истории замену масла каждые 15 000 км и топливного фильтра раз в 2 года.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Ежегодно менять малозольное масло, топливный фильтр раз в 2 года и выезжать на трассу для сажевого', cost: '€160–260', ifIgnored: 'Влага в топливе губит форсунки, а короткие поездки быстро забивают фильтр сажи', damageCost: '€1 100–1 800' },
                  { tier: 'yellow', km: '50 000–100 000 км • 4–7 лет', action: 'Сменить масло в 6-МКПП (60–80 тыс. / 5 лет) и проверить стареющие к 6 годам резиновые патрубки', cost: '€190–320', ifIgnored: 'Рассохшиеся с возрастом шланги трескаются и вызывают утечку наддува', damageCost: '€750–1 300' },
                  { tier: 'yellow', km: '100 000–140 000 км • 7–9 лет', action: 'Почистить клапан отработавших газов и трубки сажевого фильтра', cost: '€180–300', ifIgnored: 'Пропажа тяги и дорогостоящее забивание сажевого фильтра (узлы и жидкости также стареют с годами)', damageCost: '€1 000–1 600' },
                  { tier: 'orange', km: '140 000–180 000 км • 9–11 лет', action: 'Заменить медные шайбы форсунок и прочистить масляную трубку турбины', cost: '€200–380', ifIgnored: 'Закоксовка форсунок и масляное голодание турбины (резина, пластик и уплотнения стареют и по годам)', damageCost: '€1 200–1 900' },
                  { tier: 'orange', km: '180 000–220 000 км • 11–13 лет', action: 'Заменить сцепление (а на роботе — ещё и привод переключения)', cost: '€550–1 200', ifIgnored: 'Коробка перестаёт включать передачи прямо в пути (узлы и жидкости также стареют с годами)', damageCost: '€1 400–2 000' },
                  { tier: 'red', km: '200 000–250 000 км • 13–15+ лет', action: 'Профессиональная промывка сажевого фильтра и проверка цепи ГРМ', cost: '€400–750', ifIgnored: 'Закупорка выхлопа и поломка турбины с двигателем (узлы и жидкости также стареют с годами)', damageCost: '€1 800–2 800' }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['Durable 6-Speed Manual', 'No Dual-Mass Flywheel'],
              de: ['Robustes 6-Gang-Getriebe', 'Kein ZMS-Verschleiß'],
              ru: ['Надёжная 6-МКПП', 'Без двухмассового маховика']
            },
            dossier: {
              en: {
                headline: 'Light 6-Speed Manual (Avoid Early MMT Automated Manual)',
                strengths: [
                  '6-speed manual shifts cleanly and handles the 1.4 diesel torque comfortably.',
                  'Clutch and single/dual-mass components last well under normal highway use.'
                ],
                watchouts: [
                  'Avoid the rare MultiMode (MMT) automated manual — jerky shifts and actuator wear.',
                  'Test clutch bite and smooth gear engagement across all 6 ratios.'
                ],
                beforeYouBuy: [
                  'Confirm it is a true 6-speed manual and check clutch release smoothness.'
                ]
              },
              de: {
                headline: 'Solides 6-Gang-Schaltgetriebe (MMT-Automatik meiden)',
                strengths: [
                  'Das 6-Gang-Schaltgetriebe passt sehr gut zum sparsamen 1.4 D-4D.',
                  'Lange Haltbarkeit bei moderater Überlandnutzung.'
                ],
                watchouts: [
                  'Seltenes MultiMode-(MMT-)Automatikgetriebe meiden — neigt zu Ruckeln und Aktuator-Verschleiß.',
                  'Kupplung und alle 6 Gänge sauber durchschalten.'
                ],
                beforeYouBuy: [
                  'Echten 6-Gang-Handschalter wählen und Druckpunkt der Kupplung prüfen.'
                ]
              },
              ru: {
                headline: 'Надёжная 6-МКПП (избегать робота MMT)',
                strengths: [
                  'Механическая 6-ступенчатая коробка работает чётко и без проблем переваривает тягу 1.4.',
                  'Хороший ресурс при спокойной трассовой эксплуатации.'
                ],
                watchouts: [
                  'Редкий робот MultiMode (MMT) лучше обходить стороной из-за рывков и износа актуатора.',
                  'Проверить чёткость включения всех 6 передач и плавность сцепления.'
                ]
              }
            }
          },
          buildQualityRust: {
            specBreakdown: { suspensionWear: '@suspTorsionBeam' },
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            score: 9.2,
            badges: {
              en: ['Simple Diesel Sensor Setup', 'Solid Toyota Relays'],
              de: ['Einfache Diesel-Sensorik', 'Robuste Toyota-Relais'],
              ru: ['Простая электрика дизеля', 'Надёжные реле и проводка']
            }
          },
          rideNoiseComfort: {
            score: 6.2,
            badges: {
              en: ['Simple Torsion-Beam Rear', 'Compact Diesel Vibration'],
              de: ['Einfache Verbundlenkerachse', 'Deutlicherer Diesel-Klang'],
              ru: ['Простая задняя балка', 'Вибрации и звук дизеля']
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.4 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,4 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Two-Level Split Boot Floor'],
              de: ['360L Kofferraum (1.200L Max)', 'Zweistufiger Ladeboden'],
              ru: ['Багажник 360–1 200 л', 'Двухуровневый пол']
            }
          },
          payloadTowing: {
            score: 5.9,
            badges: {
              en: ['505 kg Payload', '450 / 1,000 kg Towing'],
              de: ['505 kg Zuladung', '450 / 1.000 kg Zuglast'],
              ru: ['Нагрузка 505 кг', 'Прицеп: 450 / 1 000 кг']
            },
            dossier: {
              en: {
                headline: '440 kg Payload & 1,000 kg Braked Towing',
                strengths: [
                  '205 Nm low-end torque pulls light trailers more easily than the 1.33 petrol.',
                  '440 kg payload handles family trips well.'
                ],
                watchouts: [
                  '1,000 kg braked towing limit is lower than the 1.6/2.0 Auris models.',
                  '90 hp runs out of steam on long motorway climbs with a trailer.'
                ]
              },
              de: {
                headline: '440 kg Zuladung & 1.000 kg Anhängelast',
                strengths: [
                  '205 Nm Drehmoment ziehen kleine Anhänger entspannter als der 1.33 Benziner.',
                  '440 kg Zuladung für den Familienalltag.'
                ],
                watchouts: [
                  '1.000 kg Anhängelast liegen unter den stärkeren 1.6/2.0-Modellen.',
                  'Mit 90 PS am langen Berg mit Anhänger spürbar gefordert.'
                ]
              },
              ru: {
                headline: 'Нагрузка 440 кг и прицеп до 1000 кг',
                strengths: [
                  'Крутящий момент 205 Н·м уверенно тянет лёгкий прицеп до 1000 кг.',
                  'Грузоподъёмность 440 кг подходит для семьи.'
                ],
                watchouts: [
                  'Лимит буксировки меньше, чем у версий 1.6 и 2.0 (1300–1500 кг).',
                  'С грузом на затяжных подъёмах мощности 90 л.с. впритык.'
                ]
              }
            }
          },
          accelerationOvertaking: {
            score: 4.3,
            badges: {
              en: ['0–100 km/h: 12.5 s', '180 km/h Top Speed'],
              de: ['0–100 km/h: 12,5 s', '180 km/h Spitze'],
              ru: ['0–100 км/ч: 12,5 с', 'Макс. 180 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.0,
            badges: {
              en: ['205 Nm Early Turbo Spool', 'Modest Top-End Passing Reserve'],
              de: ['205 Nm früher Turbo-Schub', 'Mäßige Reserve über 130 km/h'],
              ru: ['205 Н·м ранний подхват', 'Скромный запас выше 130']
            }
          },
          handlingAgility: {
            score: 5.5,
            badges: {
              en: ['Predictable Body Control', 'Light Urban FWD Handling'],
              de: ['Vorhersehbares Fahrverhalten', 'Handlich im Stadtverkehr'],
              ru: ['Предсказуемое шасси', 'Лёгкая рулёжка в городе']
            },
            dossier: {
              en: {
                headline: 'Torsion-Beam Rear Axle & Predictable Commuter Setup',
                lowScoreReasons: [
                  'Torsion-beam rear axle feels noticeably busier over mid-corner bumps than the Hybrid/2.0 multi-link.',
                  'Comfort-biased suspension and tall-sidewall tyres prioritize soft daily ride over cornering agility.'
                ],
                strengths: [
                  'Safe, neutral understeer balance with light steering.',
                  'Lightweight diesel block keeps front-end response tidy.'
                ],
                watchouts: [
                  'Body roll builds earlier than sharper European hatchbacks in fast motorway sweepers.'
                ]
              },
              de: {
                headline: 'Verbundlenker-Hinterachse & sichere Abstimmung',
                lowScoreReasons: [
                  'Die Verbundlenker-Hinterachse reagiert auf Querfugen spürbar unruhiger als die Mehrlenkerachse.',
                  'Komfortbetonte Abstimmung und Serienbereifung setzen klar auf Alltagskomfort statt Kurvendynamik.'
                ],
                strengths: [
                  'Gutmütiges, neutrales Fahrverhalten mit leichter Lenkung.',
                  'Kompakter Motor hält das Gewicht auf der Vorderachse gering.'
                ],
                watchouts: [
                  'In schnellen Autobahnkurven neigt sich der Aufbau früher als bei sportlicheren Rivalen.'
                ]
              },
              ru: {
                headline: 'Задняя балка и спокойная настройка шасси',
                lowScoreReasons: [
                  'Полузависимая балка сзади жёстче отрабатывает стыки в повороте по сравнению с многорычажкой.',
                  'Настройка подвески и шин ориентирована на мягкий ход, а не на активную рулёжку.'
                ],
                strengths: [
                  'Безопасная и предсказуемая управляемость без сюрпризов.',
                  'Компактный мотор не перегружает переднюю ось.'
                ],
                watchouts: [
                  'Крены кузова в быстрых поворотах заметнее, чем у более жёстких хэтчбеков.'
                ]
              }
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['Efficient (4.7 L/100km)', '1,000+ km Tank Range'],
              de: ['Sparsam (4,7 L/100km)', '1.000+ km Reichweite'],
              ru: ['Экономичный (4,7 л/100 км)', 'Запас хода 1 000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.4,
            badges: {
              en: ['Low 1.4L Diesel Tax • Euro 5/6', 'Affordable Commuter Insurance'],
              de: ['Günstige 1.4-Dieselsteuer', 'Faire Pendler-Versicherung'],
              ru: ['Низкий дизельный налог 1,4', 'Недорогая страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & EGR Valve Cleaning', de: 'Dieselfilter wechseln & AGR-Ventil reinigen', ru: 'Топливный фильтр и профилактика клапана EGR' }, cost: '€140–230' },
                { when: '~120,000 km · 8 yrs', action: { en: '6-Speed Manual Gearbox Oil (75W LV)', de: '6-Gang Schaltgetriebeöl wechseln', ru: 'Замена масла в 6-ст. МКПП' }, cost: '€120–190' }
              ],
              critical: [
                { when: '140–200k km · 9–13 yrs', action: { en: 'DPF Soot Cleaning & Pressure Sensor', de: 'DPF-Reinigung & Differenzdrucksensor', ru: 'Чистка сажевого фильтра (DPF) и датчик давления' }, cost: '€350–650', risk: { en: 'Blocked DPF raises turbo backpressure & dilutes oil', de: 'Voller DPF belastet Turbolader & verdünnt Motoröl', ru: 'Забитый DPF создаёт противодавление и вредит турбине' }, damage: '€1,400–2,200' }
              ]
            },
            score: 8.7,
            badges: {
              en: ['No Dual-Mass Flywheel Cost', 'Regular Diesel Filter & Oil'],
              de: ['Kein ZMS-Wechsel nötig', 'Solide Verschleißkosten'],
              ru: ['Нет дорогого маховика', 'Стандартное дизельное ТО']
            }
          },
          depreciationResale: {
            score: 6.9,
            badges: {
              en: ['Euro 5 City Discount', 'Popular Commuter Car'],
              de: ['Euro-5-Abschlag', 'Gefragtes Pendlerauto'],
              ru: ['Эко-класс Евро-5', 'Ликвидный дизель']
            }
          }
        }
      },
      {
        id: '2.0-d4d',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.0L D-4D Diesel', de: '2.0L D-4D Diesel', ru: '2.0L D-4D Дизель' },
          forcedInduction: { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
          injection: { en: '✓ Common-Rail DI', de: '✓ Common-Rail Direkt', ru: '✓ Common-Rail прямой' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Clutch + DMF', de: '✓ Kupplung + ZMS', ru: '✓ Сцепление + ДММ' },
          towingBraked: '1,500 kg',
          sprint0100: '10.0 s',
          topSpeed: '200 km/h',
          peakTorque: '310 Nm @ 1,600',
          passingPunch: { en: 'Effortless Highway', de: 'Souveräner Durchzug', ru: 'Уверенная тяга' },
          realWorldFuel: '5.2–5.9 L/100 km',
          tankRange: '50 L · ~900 km',
          euroNorm: 'Euro 5 (DPF)',
          taxInsurance: { en: 'Moderate', de: 'Mittel', ru: 'Средние' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Moderate', de: 'Mittel', ru: 'Средние' }
        },
        buyerFitGroup: 'highway-diesel',
        isDefault: false,
        dossierGroup: 'd4d-diesel',
        fuelType: 'diesel',
        hp: 124,
        shortTitle: 'AURIS 2.0 D-4D',
        fullName: '2014 Toyota Auris 2.0 D-4D',
        engineBadge: '2.0L D-4D • 124 HP',
        engineSubLabel: {
          en: '1AD-FTV 16v Turbo-Diesel • 6-MT • 310 Nm',
          de: '1AD-FTV 2.0L Turbodiesel • 6-Gang-Schaltgetriebe • 310 Nm',
          ru: '1AD-FTV 2.0L Турбодизель • 6-ст. МКПП • 310 Н·м'
        },
        rarityLabel: {
          en: 'HIGHWAY CRUISER',
          de: 'AUTOBAHN-GLEITER',
          ru: 'ТРАССОВЫЙ КРУИЗЕР'
        },
        originalMsrp: {
          en: '€23,150 New',
          de: '23.150 € Neu',
          ru: '€23 150 новый'
        },
        estUsedPrice: '€7,600',
        perkLabel: {
          en: '✦ 310 Nm Torque • 1,500 kg Braked Towing • Multi-Link Rear',
          de: '✦ 310 Nm Drehmoment • 1.500 kg Anhängelast • Mehrlenkerachse',
          ru: '✦ Тяга 310 Н·м • Буксировка 1 500 кг • Многорычажная подвеска'
        },
        remarkablePositives: {
          en: [
            '310 NM LOW-RPM TORQUE',
            '1,500 KG BRAKED TOWING',
            'MULTI-LINK REAR AXLE',
            '200 KM/H HIGHWAY CRUISER',
            'EFFICIENT 5.3 L/100KM'
          ],
          de: [
            '310 NM DREHMOMENT',
            '1.500 KG ANHÄNGELAST',
            'MEHRLENKER-HINTERACHSE',
            '200 KM/H AUTOBAHN-GLEITER',
            'SPARSAM: 5,3 L/100KM'
          ],
          ru: [
            'ТЯГА 310 Н·М С НИЗОВ',
            'БУКСИРОВКА ДО 1 500 КГ',
            'МНОГОРЫЧАЖКА СЗАДИ',
            'КРУИЗЕР (200 КМ/Ч)',
            'РАСХОД 5,3 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH 2.0L DIESEL ROAD TAX',
            'EGR & DPF DISLIKE CITY USE',
            'EURO 5 CITY RESTRICTIONS',
            'COMPACT 360L BOOT'
          ],
          de: [
            'HÖHERE 2.0L KFZ-STEUER',
            'AGR & DPF BEI KURZSTRECKE',
            'EURO-5-UMWELTZONEN',
            'KOMPAKTER 360L KOFFERRAUM'
          ],
          ru: [
            'ВЫШЕ НАЛОГ (2.0 ДИЗЕЛЬ)',
            'EGR И DPF В ПРОБКАХ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'СКРОМНЫЙ БАГАЖНИК 360 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.6,
          comfortCabin: 7.8,
          spacePracticality: 8.0,
          performanceDynamics: 7.5,
          runningCostsTco: 7.8
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L D-4D Inline-4 Turbodiesel (1AD-FTV)', de: '2.0L D-4D Reihenvierzylinder Turbodiesel (1AD-FTV)', ru: '2.0L D-4D рядный 4-цил. турбодизель (1AD-FTV)' } },
                  { k: 'displacement', v: '1,998 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '91 kW (124 HP)', de: '91 kW (124 PS)', ru: '91 кВт (124 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Strong timing-chain bottom end built for relaxed motorway cruising and long highway life.',
                  de: 'Solide Steuerketten-Mechanik für entspannte Langstrecken-Etappen.',
                  ru: 'Крепкая цепная механика, рассчитанная на спокойную и долгую трассовую езду.'
                }
              },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi'
            },
            score: 9.0,
            badges: {
              en: ['Revised 2.0 Chain Block', 'Periodic EGR Cleaning'],
              de: ['Robuster 2.0 Kettenmotor', 'AGR-Reinigung ratsam'],
              ru: ['Цепной дизель 2.0', 'Чистка EGR и DPF']
            },
            dossier: {
              en: {
                headline: 'Updated 2.0L Highway Diesel — Much Stronger Than Pre-2012 Versions',
                strengths: [
                  'Revised 2012+ head gasket and piston spec fixes the oil-consumption issues of earlier 2.0 D-4D engines.',
                  'Effortless 310 Nm timing-chain block cruises at low rpm on the highway with minimal mechanical stress.',
                  'Expected to exceed 300,000+ km on long highway commutes with regular oil and fuel-filter changes.'
                ],
                watchouts: [
                  'EGR cooler soot buildup and Denso fuel-pressure valve (SCV) wear can cause rough idle or hard cold starts.',
                  'Piezo injectors and the DPF 5th regeneration injector need clean diesel and periodic highway runs after 180,000 km.'
                ],
                beforeYouBuy: [
                  'Start the engine cold — uneven idle or long cranking usually points to a worn fuel pressure valve.',
                  'Check inside the coolant bottle for clean pink fluid with no white crust or oily film.',
                  'Verify clean highway usage and timely fuel-filter receipts to protect the high-pressure injectors.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Annual low-ash oil, clean diesel fuel filter every 2 yrs & regular motorway stretches', cost: '€170–280', ifIgnored: 'Dirty diesel wears high-pressure pump & urban soot clogs exhaust valve early', damageCost: '€1,200–2,000' },
                  { tier: 'yellow', km: '50,000–100,000 km • 4–7 yrs', action: 'Replace 6-yr aging rubber drive belt, flush coolant/brake fluid & change gearbox oil', cost: '€230–390', ifIgnored: 'Age-hardened serpentine belt snaps & stale fluids speed bearing/pump wear', damageCost: '€900–1,500' },
                  { tier: 'yellow', km: '100,000–140,000 km • 7–9 yrs', action: 'Clean exhaust valve & replace fuel pump pressure valve', cost: '€250–420', ifIgnored: 'Stalling at traffic lights, hard cold starts & soot buildup (rubber/plastic & seals also harden with age)', damageCost: '€1,100–1,800' },
                  { tier: 'orange', km: '150,000–190,000 km • 9–11 yrs', action: 'Replace heavy clutch kit & dual-mass flywheel', cost: '€950–1,400', ifIgnored: 'Loud rattling shakes gearbox and can crack the casing (components & fluids also degrade over years)', damageCost: '€1,800–2,600' },
                  { tier: 'orange', km: '180,000–220,000 km • 11–13 yrs', action: 'Deep-clean diesel soot filter (DPF) & 5th exhaust fuel nozzle', cost: '€350–650', ifIgnored: 'Permanent limp mode & diesel thinning out the engine oil', damageCost: '€1,600–2,400' },
                  { tier: 'red', km: '200,000–250,000 km • 13–15+ yrs', action: 'Test and refurbish worn high-pressure diesel fuel injectors', cost: '€800–1,400', ifIgnored: 'Dripping faulty injector melts a hole in an engine piston (components & fluids also degrade over years)', damageCost: '€3,000–4,200' }
                ]
              },
              de: {
                headline: 'Überarbeiteter 2.0L Autobahndiesel — deutlich standfester als bis 2012',
                strengths: [
                  'Modifizierte Zylinderkopfdichtung und Kolben (ab 2012) beheben die frühen Ölverbrauchsprobleme.',
                  'Durchzugsstarker 310-Nm-Kettenmotor läuft auf der Autobahn mit niedriger Drehzahl und geringem Verschleiß.',
                  'Erreicht auf Langstrecken bei regelmäßigen Öl- und Dieselfilterwechseln problemlos 300.000+ km.'
                ],
                watchouts: [
                  'AGR-Verkokung bei Stadtfahrt und Verschleiß am Denso-Druckregelventil (SCV) führen zu unrundem Leerlauf.',
                  'Piezo-Injektoren und die 5. DPF-Düse brauchen sauberen Kraftstoff und regelmäßige Autobahnfahrten ab 180.000 km.'
                ],
                beforeYouBuy: [
                  'Kalten Motor starten — unruhiger Leerlauf oder langes Orgeln deuten auf ein verschlissenes SCV-Ventil hin.',
                  'Kühlmittelbehälter prüfen — die Flüssigkeit muss sauber rosa sein, ohne weiße Krusten oder Ölspuren.',
                  'Langstrecken-Historie und regelmäßige Dieselfilterwechsel prüfen, um teure Injektorschäden auszuschließen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Jährlich Low-Ash-Öl, alle 2 J. Dieselfilter & regelmäßige Autobahnfahrten für den Auspuff', cost: '170–280 €', ifIgnored: 'Schmutziger Kraftstoff schädigt Hochdruckpumpe & Ruß setzt das AGR früh zu', damageCost: '1.200–2.000 €' },
                  { tier: 'yellow', km: '50.000–100.000 km • 4–7 J.', action: 'Gealterten Keilrippenriemen (6 J.), Kühl-/Bremsflüssigkeit & Getriebeöl erneuern', cost: '230–390 €', ifIgnored: 'Altersbrüchiger Riemen reißt plötzlich & altes Öl verschleißt Lager schneller', damageCost: '900–1.500 €' },
                  { tier: 'yellow', km: '100.000–140.000 km • 7–9 J.', action: 'Abgasventil reinigen & Kraftstoff-Druckregelventil erneuern', cost: '250–420 €', ifIgnored: 'Schlechter Kaltstart, Absterben & verrußter Partikelfilter (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.100–1.800 €' },
                  { tier: 'orange', km: '150.000–190.000 km • 9–11 J.', action: 'Kupplung zusammen mit dem Zweimassenschwungrad erneuern', cost: '950–1.400 €', ifIgnored: 'Starkes Schlagen ruiniert Lager und Getriebegehäuse (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.800–2.600 €' },
                  { tier: 'orange', km: '180.000–220.000 km • 11–13 J.', action: 'Partikelfilter professionell spülen & Abgas-Einspritzdüse säubern', cost: '350–650 €', ifIgnored: 'Dauerhafter Notlauf & Diesel-Verdünnung im Motoröl', damageCost: '1.600–2.400 €' },
                  { tier: 'red', km: '200.000–250.000 km • 13–15+ J.', action: 'Diesel-Injektoren prüfen und rechtzeitig überholen lassen', cost: '800–1.400 €', ifIgnored: 'Tropfende Einspritzdüse brennt ein Loch in den Kolben (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '3.000–4.200 €' }
                ]
              },
              ru: {
                headline: 'Доработанный трассовый дизель 2.0 — заметно надёжнее ранних версий',
                strengths: [
                  'Усиленная прокладка ГБЦ и поршневая (с 2012 г.) устранили прежний масложор ранних 2.0 D-4D.',
                  'Тяговитый цепной блок (310 Н·м) работает на трассе на низких оборотах с минимальным износом.',
                  'На трассовых пробегах при регулярной смене масла и топливных фильтров служит 300 000+ км.'
                ],
                watchouts: [
                  'Сажа в клапане EGR в городе и износ регулятора давления топлива Denso SCV вызывают неровный холостой ход.',
                  'Пьезофорсунки и 5-я форсунка прожига DPF требуют чистого дизеля и выездов на трассу после 180 000 км.'
                ],
                beforeYouBuy: [
                  'Запустить мотор на холодную — плавающие обороты и долгий пуск обычно указывают на клапан SCV.',
                  'Проверить бачок антифриза — жидкость должна быть чистой розовой без налёта и масляной плёнки.',
                  'Убедиться в трассовой эксплуатации и своевременной замене топливных фильтров для защиты форсунок.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Раз в год малозольное масло, топливный фильтр каждые 2 года и регулярный выезд на трассу', cost: '€170–280', ifIgnored: 'Грязь в топливе изнашивает ТНВД, а пробки быстро забивают клапан отработавших газов', damageCost: '€1 200–2 000' },
                  { tier: 'yellow', km: '50 000–100 000 км • 4–7 лет', action: 'Заменить постаревший за 6 лет приводной ремень, антифриз и масло в 6-МКПП', cost: '€230–390', ifIgnored: 'Потрескавшийся от времени ремень рвётся, а старые жидкости ускоряют износ', damageCost: '€900–1 500' },
                  { tier: 'yellow', km: '100 000–140 000 км • 7–9 лет', action: 'Почистить клапан выхлопных газов и заменить регулятор давления топлива', cost: '€250–420', ifIgnored: 'Трудный утренний запуск, глохнущий мотор и засор сажевого фильтра (узлы и жидкости также стареют с годами)', damageCost: '€1 100–1 800' },
                  { tier: 'orange', km: '150 000–190 000 км • 9–11 лет', action: 'Заменить сцепление вместе с двухмассовым маховиком', cost: '€950–1 400', ifIgnored: 'Сильная вибрация разбивает подшипники и корпус коробки (узлы и жидкости также стареют с годами)', damageCost: '€1 800–2 600' },
                  { tier: 'orange', km: '180 000–220 000 км • 11–13 лет', action: 'Промыть сажевый фильтр и очистить дополнительную форсунку прожига', cost: '€350–650', ifIgnored: 'Аварийный режим и разжижение моторного масла соляркой (узлы и жидкости также стареют с годами)', damageCost: '€1 600–2 400' },
                  { tier: 'red', km: '200 000–250 000 км • 13–15+ лет', action: 'Проверить на стенде и отремонтировать дизельные форсунки', cost: '€800–1 400', ifIgnored: 'Льющая форсунка способна прожечь поршень в двигателе (узлы и жидкости также стареют с годами)', damageCost: '€3 000–4 200' }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { clutchDmf: '@clutchDmf' },
            score: 7.8,
            badges: {
              en: ['Sturdy 6-Speed Manual', '310 Nm DMF & Clutch Wear'],
              de: ['Kräftiges 6-Gang-Getriebe', 'Kupplung & ZMS bei 310 Nm'],
              ru: ['Прочная 6-МКПП', 'Износ сцепления и маховика']
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            score: 8.9,
            badges: {
              en: ['Denso Common-Rail ECU', 'Watch DPF Pressure Sensors'],
              de: ['Denso-Common-Rail-Steuerung', 'DPF-Sensoren beachten'],
              ru: ['Электроника Denso CR', 'Контроль датчиков DPF']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Multi-Link Rear Absorption', 'Moderate Wind Noise on Highway'],
              de: ['Mehrlenkerachse schluckt gut', 'Mäßige Windgeräusche AB'],
              ru: ['Многорычажка сглаживает ямы', 'Умеренный шум на высокой скорости']
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,8 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,8 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Two-Level Split Boot Floor'],
              de: ['360L Kofferraum (1.200L Max)', 'Zweistufiger Ladeboden'],
              ru: ['Багажник 360–1 200 л', 'Двухуровневый пол']
            }
          },
          payloadTowing: {
            score: 6.9,
            badges: {
              en: ['535 kg Payload', '450 / 1,500 kg Towing'],
              de: ['535 kg Zuladung', '450 / 1.500 kg Zuglast'],
              ru: ['Нагрузка 535 кг', 'Прицеп: 450 / 1 500 кг']
            },
            dossier: {
              en: {
                headline: 'Best Auris Tow Car — 1,500 kg Braked Capacity',
                strengths: [
                  '310 Nm and 1,500 kg braked towing rating handle caravans and boat trailers with ease.',
                  '425–440 kg cabin payload supports touring gear.'
                ],
                watchouts: [
                  'Heavy towing accelerates clutch and dual-mass flywheel wear.',
                  'Monitor coolant temperature on long mountain climbs when towing near 1,500 kg.'
                ]
              },
              de: {
                headline: 'Bestes Auris-Zugfahrzeug mit 1.500 kg Anhängelast',
                strengths: [
                  '310 Nm und 1.500 kg Anhängelast (gebremst) ziehen Wohnwagen und Anhänger souverän.',
                  'Gute Zuladungsreserven für Reisen.'
                ],
                watchouts: [
                  'Häufiger Schwerlast-Anhängerbetrieb belastet Kupplung und ZMS stärker.',
                  'Auf langen Passstraßen mit Anhänger Kühlmitteltemperatur im Blick behalten.'
                ]
              },
              ru: {
                headline: 'Лучший тягач в линейке — прицеп до 1500 кг',
                strengths: [
                  'Мощная тяга 310 Н·м уверенно справляется с прицепами массой до 1500 кг.',
                  'Достойная грузоподъёмность для путешествий.'
                ],
                watchouts: [
                  'Частая буксировка тяжёлых прицепов ускоряет износ сцепления и маховика.',
                  'На затяжных подъёмах с грузом стоит следить за температурой ОЖ.'
                ]
              }
            }
          },
          accelerationOvertaking: {
            score: 6.2,
            badges: {
              en: ['0–100 km/h: 10.0 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 10,0 s', '200 km/h Spitze'],
              ru: ['0–100 км/ч: 10,0 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.7,
            badges: {
              en: ['310 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['310 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['310 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 7.0,
            badges: {
              en: ['Multi-Link Rear Axle Stability', 'Composed Highway Turn-In'],
              de: ['Mehrlenker-Hinterachse', 'Stabiles Autobahnhandling'],
              ru: ['Задняя многорычажка', 'Уверенная трассовая устойчивость']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            }
          },
          efficiencyFuel: {
            score: 7.7,
            badges: {
              en: ['Efficient (5.3 L/100km)', '940+ km Tank Range'],
              de: ['Sparsam (5,3 L/100km)', '940+ km Reichweite'],
              ru: ['Экономичный (5,3 л/100 км)', 'Запас хода 940+ км']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['2.0L Diesel Tax • Euro 5 Zone', 'Mid-Class Diesel Insurance'],
              de: ['Höhere 2.0-Dieselsteuer', 'Mittlere Diesel-Versicherung'],
              ru: ['Налог за 2.0 дизель • Euro 5', 'Средняя страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & EGR Valve Cleaning', de: 'Dieselfilter wechseln & AGR-Ventil reinigen', ru: 'Топливный фильтр и чистка клапана EGR' }, cost: '€160–260' },
                { when: '~120,000 km · 8 yrs', action: { en: '6-Speed Manual Gearbox Oil', de: '6-Gang Schaltgetriebeöl wechseln', ru: 'Замена масла в 6-ст. МКПП' }, cost: '€130–200' }
              ],
              critical: [
                { when: '140–190k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplungssatz', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,100–1,650', risk: { en: 'Idle rattling, harsh vibration & gearbox input-shaft stress', de: 'Leerlauf-Rasseln, starke Vibration & Getriebelager-Schaden', ru: 'Стуки на холостом ходу, вибрации и износ вала КПП' }, damage: '€2,000–2,800' },
                { when: '160–220k km · 10–14 yrs', action: { en: 'EGR Cooler & Head-Gasket Seepage Check', de: 'AGR-Kühler & Zylinderkopfdichtung prüfen', ru: 'Проверка охладителя EGR и прокладки ГБЦ' }, cost: '€450–750', risk: { en: 'Coolant loss & cylinder-head overheating', de: 'Kühlmittelverlust & Zylinderkopf-Überhitzung', ru: 'Утечка антифриза и перегрев ГБЦ' }, damage: '€2,200–3,200' }
              ]
            },
            score: 7.3,
            badges: {
              en: ['Chain-Driven • Watch EGR', 'Costly DPF & DMF Service'],
              de: ['Steuerkette • AGR pflegen', 'Teurere ZMS- & DPF-Arbeiten'],
              ru: ['Цепь ГРМ • Чистка клапана EGR', 'Дорогой ремонт DPF и маховика']
            },
            dossier: {
              en: {
                headline: 'Long-Lived Timing Chain, Higher DMF & Injector Costs',
                strengths: [
                  'Timing chain architecture avoids periodic timing-belt replacement bills.',
                  'Well-known Toyota diesel with strong independent workshop familiarity.'
                ],
                watchouts: [
                  'DMF/clutch (~€1,100–1,500) and DPF/EGR cleaning apply past 160,000 km.',
                  'Pre-2013 1AD-FTV units require verifying no head-gasket coolant consumption.'
                ],
                beforeYouBuy: [
                  'Verify cold-start smoothness and check for white smoke or coolant loss.'
                ]
              },
              de: {
                headline: 'Robuste Steuerkette, aber höhere ZMS- & Diesel-Kosten',
                strengths: [
                  'Steuerkette spart regelmäßige Zahnriemenwechsel.',
                  'Bewährte Technik, die freie Werkstätten gut kennen.'
                ],
                watchouts: [
                  'ZMS/Kupplung (ca. 1.100–1.500 €) und AGR/DPF fallen ab ca. 160.000 km ins Gewicht.',
                  'Bei frühen Baujahren bis 2013 auf möglichen Kühlwasserverlust (Kopfdichtung) achten.'
                ],
                beforeYouBuy: [
                  'Kaltstart ohne weißen Rauch sowie Kühlwasserstand genau prüfen.'
                ]
              },
              ru: {
                headline: 'Надёжная цепь ГРМ, но дороже маховик и топливная',
                strengths: [
                  'Цепной привод ГРМ избавляет от плановой замены ремня.',
                  'Хорошо изученный сервисами двигатель.'
                ],
                watchouts: [
                  'К 160–200 тыс. км возможна замена двухмассового маховика и чистка EGR/DPF.',
                  'На ранних экземплярах до 2013 г. проверять отсутствие ухода антифриза.'
                ],
                beforeYouBuy: [
                  'Проверить ровный холодный запуск и отсутствие расхода антифриза.'
                ]
              }
            }
          },
          depreciationResale: {
            score: 6.7,
            badges: {
              en: ['Euro 5 City Discount', 'Popular Tow / Tourer'],
              de: ['Euro-5-Abschlag', 'Gefragtes Zugfahrzeug'],
              ru: ['Эко-класс Евро-5', 'Ценится для трассы']
            }
          }
        }
      },
      {
        id: '1.2-turbo',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [
          { id: '6-mt-dmf', isDefault: true },
          {
            id: 'multidrive-s',
            estUsedPrice: '€11,300',
            specOverrides: { sprint0100: '10.5 s', topSpeed: '195 km/h', realWorldFuel: '6.0–6.8 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.3,
                badges: {
                  en: ['0–100 km/h: 10.5 s (CVT)', '195 km/h Top Speed'],
                  de: ['0–100 km/h: 10,5 s (CVT)', '195 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,5 s (CVT)', 'Макс. 195 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.2,
                badges: {
                  en: ['6.0–6.8 L/100 km (CVT)'],
                  de: ['6,0–6,8 L/100 km (CVT)'],
                  ru: ['6,0–6,8 L/100 km (CVT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '1.2L VVT-iW Turbo', de: '1.2L VVT-iW Turbo', ru: '1.2L VVT-iW Турбо' },
          forcedInduction: { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
          injection: { en: '✓ Direct (D-4T)', de: '✓ Direkteinspr. (D-4T)', ru: '✓ Прямой (D-4T)' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Clutch + DMF', de: '✓ Kupplung + ZMS', ru: '✓ Сцепление + ДММ' },
          towingBraked: '1,300 kg',
          sprint0100: '10.1 s',
          topSpeed: '200 km/h',
          peakTorque: '185 Nm @ 1,500',
          passingPunch: { en: 'Punchy Mid-Range', de: 'Kräftige Mitte', ru: 'Бодрая середина' },
          realWorldFuel: '5.8–6.6 L/100 km',
          tankRange: '50 L · ~800 km',
          euroNorm: 'Euro 6',
          taxInsurance: { en: 'Low', de: 'Niedrig', ru: 'Низкие' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Low–Moderate', de: 'Gering–Mittel', ru: 'Низкие–Средние' }
        },
        buyerFitGroup: 'turbo-petrol',
        isDefault: false,
        fuelType: 'petrol',
        hp: 116,
        shortTitle: 'AURIS 1.2 TURBO',
        fullName: '2014 Toyota Auris 1.2 Turbo',
        engineBadge: '1.2L Turbo • 116 HP',
        engineSubLabel: {
          en: '8NR-FTS 1.2L Turbo Petrol (06/2015–03/2019) • 6-MT • 185 Nm',
          de: '8NR-FTS 1.2L Turbobenziner (06/2015–03/2019) • 6-Gang • 185 Nm',
          ru: '8NR-FTS 1.2L Турбобензин (06/2015–03/2019) • 6-ст. МКПП • 185 Н·м'
        },
        rarityLabel: {
          en: 'FACELIFT TURBO',
          de: 'FACELIFT-TURBO',
          ru: 'РЕСТАЙЛ-ТУРБО'
        },
        originalMsrp: {
          en: '€21,290 New',
          de: '21.290 € Neu',
          ru: '€21 290 новый'
        },
        estUsedPrice: '€10,400',
        perkLabel: {
          en: '✦ 185 Nm Low-End Turbo Pull • Multi-Link Rear • Toyota Relax Eligible',
          de: '✦ 185 Nm Turbo-Durchzug • Mehrlenker-Hinterachse • Toyota Relax fähig',
          ru: '✦ Тяга 185 Н·м с низов • Многорычажка сзади • Надёжность Toyota'
        },
        remarkablePositives: {
          en: [
            'PUNCHY 185 NM LOW-END PULL',
            '6.5 L/100KM ECONOMY',
            'COMFORTABLE REAR SUSPENSION',
            'TOYOTA BUILD QUALITY',
            '1,300 KG BRAKED TOWING'
          ],
          de: [
            'KRAFTVOLLE 185 NM AB 1.500/MIN',
            '6,5 L/100KM VERBRAUCH',
            'KOMFORTABLE MEHRLENKERACHSE',
            'SOLIDE TOYOTA-VERARBEITUNG',
            '1.300 KG ANHÄNGELAST'
          ],
          ru: [
            'БОДРАЯ ТЯГА 185 Н·М С НИЗОВ',
            'РАСХОД 6,5 Л/100 КМ',
            'КОМФОРТНАЯ ЗАДНЯЯ МНОГОРЫЧАЖКА',
            'КАЧЕСТВО СБОРКИ TOYOTA',
            'БУКСИРОВКА ДО 1 300 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'VALVE CARBON BUILDUP RISK',
            'MORE COMPLEX THAN 1.6 NA',
            '360L AVERAGE BOOT SPACE'
          ],
          de: [
            'VERKOKUNG DER EINLASSVENTILE',
            'KOMPLEXER ALS 1.6 SAUGMOTOR',
            '360L DURCHSCHNITTS-KOFFERRAUM'
          ],
          ru: [
            'НАГАР НА ВПУСКНЫХ КЛАПАНАХ',
            'СЛОЖНЕЕ АТМОСФЕРНИКА 1.6',
            'СРЕДНИЙ БАГАЖНИК 360 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.7,
          comfortCabin: 7.9,
          spacePracticality: 7.5,
          performanceDynamics: 7.2,
          runningCostsTco: 8.4
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.2L VVT-iW Inline-4 Turbo (8NR-FTS)', de: '1.2L VVT-iW Reihenvierzylinder Turbo (8NR-FTS)', ru: '1.2L VVT-iW рядный 4-цил. турбо (8NR-FTS)' } },
                  { k: 'displacement', v: '1,197 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '85 kW (116 HP)', de: '85 kW (116 PS)', ru: '85 кВт (116 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Four-cylinder timing-chain design runs smoother and generally lasts longer than rival wet-belt 3-cylinders.',
                  de: 'Vierzylinder mit Steuerkette läuft ruhiger und meist robuster als 3-Zylinder mit Ölbad-Zahnriemen.',
                  ru: 'Четырёхцилиндровый мотор с цепью ГРМ тише и надёжнее многих 3-цилиндровых конкурентов с ремнём в масле.'
                }
              },
              forcedInduction: '@turboPetrol',
              injection: '@directInjPetrol'
            },
            score: 8.5,
            badges: {
              en: ['8NR-FTS Chain Turbo', 'DI Carbon Watchout'],
              de: ['8NR-FTS Ketten-Turbo', 'Verkokung im Blick'],
              ru: ['Цепной турбо 8NR-FTS', 'Следить за нагаром']
            },
            dossier: {
              en: {
                headline: 'Refined Downsized 1.2L Turbo — Reliable with Direct-Injection Care',
                strengths: [
                  'Low-end 185 Nm torque from 1,500 rpm gives effortless city and highway merging.',
                  'Timing chain and water-cooled intercooler warm up fast and show solid TÜV reliability.',
                  'Expected to run 200,000–250,000 km with strict 10,000–15,000 km oil and spark-plug care.'
                ],
                watchouts: [
                  'Direct fuel injection can build carbon on the intake valves past 100,000 km on short city trips.',
                  'Turbo wastegate rattle and fuel-pump updates should be checked in the service history.'
                ],
                beforeYouBuy: [
                  'Check service stamps for oil changes every 10,000–15,000 km and confirm the fuel-pump recall was done.',
                  'Accelerate smoothly from low speed in 3rd gear — watch for hesitation or metallic turbo rattle.',
                  'Check spark-plug receipts, as small turbo petrols wear plugs faster than naturally aspirated engines.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Strict 10–12,000 km / 1 yr oil changes & clean petrol (protects small turbo & fuel pump)', cost: '€140–230', ifIgnored: 'Stretched oil intervals coke turbo bearings & wear timing chain early', damageCost: '€1,500–2,400' },
                  { tier: 'yellow', km: '50,000–100,000 km • 4–7 yrs', action: 'Replace turbo iridium spark plugs (60k), brake fluid & check 5–6 yr aging coolant/turbo hoses', cost: '€260–420', ifIgnored: 'Weak plugs misfire under boost & aged small rubber/plastic coolant lines weep', damageCost: '€950–1,600' },
                  { tier: 'orange', km: '100,000–130,000 km • 7–9 yrs', action: 'Clean carbon soot buildup off the engine intake valves', cost: '€300–480', ifIgnored: 'Shaky cold starts, power loss & misfires damaging engine', damageCost: '€1,400–2,200' },
                  { tier: 'red', km: '120,000–160,000 km • 9–11 yrs', action: 'Replace stretched timing chain & check turbo flap linkage', cost: '€750–1,100', ifIgnored: 'Chain skips timing or worn turbo flap ruins turbocharger (components & fluids also degrade over years)', damageCost: '€2,200–3,500' },
                  { tier: 'yellow', km: '150,000–190,000 km • 11–13 yrs', action: 'Replace spark plugs, ignition coils & inspect fuel pump', cost: '€250–450', ifIgnored: 'Jerky acceleration & overheated exhaust catalytic converter (rubber/plastic & seals also harden with age)', damageCost: '€1,100–1,800' },
                  { tier: 'orange', km: '200,000–250,000 km • 13–15+ yrs', action: 'Service turbocharger oil feed pipes & electric cooler pump', cost: '€350–600', ifIgnored: 'Turbocharger overheats from oil starvation and seizes (rubber/plastic & seals also harden with age)', damageCost: '€1,400–2,200' }
                ]
              },
              de: {
                headline: 'Kultivierter 1.2L Downsizing-Turbo — solide bei Direkteinspritzer-Pflege',
                strengths: [
                  'Kräftige 185 Nm ab 1.500/min sorgen für deutlich souveräneren Durchzug als der 1.33er Saugmotor.',
                  'Steuerkette und wassergekühlter Ladeluftkühler erwärmen sich schnell und überzeugen im TÜV-Report.',
                  'Erreicht bei strikten Öl- und Zündkerzenwechseln alle 10.000–15.000 km rund 200.000–250.000 km.'
                ],
                watchouts: [
                  'Direkteinspritzung kann bei viel Kurzstrecke ab ca. 100.000 km zu Verkokung der Einlassventile führen.',
                  'Wastegate-Rasseln am Turbo und durchgeführte Kraftstoffpumpen-Rückrufe sollten geprüft werden.'
                ],
                beforeYouBuy: [
                  'Scheckheft auf Ölwechsel alle 10.000–15.000 km prüfen und nach dem Kraftstoffpumpen-Rückruf fragen.',
                  'Im 3. Gang aus niedriger Drehzahl beschleunigen — kein Stottern und kein metallisches Turbo-Rasseln.',
                  'Zündkerzen-Belege prüfen, da kleine Turbobenziner Kerzen schneller verschleißen als Saugmotoren.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Strikte Ölwechsel alle 10–12.000 km / 1 J. & guter Sprit (schützt kleinen Turbo & Pumpe)', cost: '140–230 €', ifIgnored: 'Überzogenes Öl verkokt Turbolager & längt die Steuerkette vorzeitig', damageCost: '1.500–2.400 €' },
                  { tier: 'yellow', km: '50.000–100.000 km • 4–7 J.', action: 'Turbo-Zündkerzen bei 60 Tkm tauschen & nach 5–6 J. gealterte Turbo-/Kühlerschläuche prüfen', cost: '260–420 €', ifIgnored: 'Alte Kerzen verursachen Aussetzer; gealterte Plastik-/Gummileitungen werden undicht', damageCost: '950–1.600 €' },
                  { tier: 'orange', km: '100.000–130.000 km • 7–9 J.', action: 'Ruß- und Ölkohle-Beläge an den Einlassventilen reinigen lassen', cost: '300–480 €', ifIgnored: 'Stottern beim Kaltstart, Leistungsverlust & verbrannte Ventile (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '1.400–2.200 €' },
                  { tier: 'red', km: '120.000–160.000 km • 9–11 J.', action: 'Gelängte Steuerkette tauschen & Turbolader-Gestänge prüfen', cost: '750–1.100 €', ifIgnored: 'Kettensprung oder ausgeschlagener Turbolader-Schaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '2.200–3.500 €' },
                  { tier: 'yellow', km: '150.000–190.000 km • 11–13 J.', action: 'Zündkerzen, Zündspulen & Hochdruck-Kraftstoffpumpe prüfen', cost: '250–450 €', ifIgnored: 'Ruckeln unter Last & beschädigter Katalysator (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.100–1.800 €' },
                  { tier: 'orange', km: '200.000–250.000 km • 13–15+ J.', action: 'Turbolader-Ölleitungen & elektrische Ladeluft-Pumpe warten', cost: '350–600 €', ifIgnored: 'Überhitzung & Festfressen des Turboladers (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.400–2.200 €' }
                ]
              },
              ru: {
                headline: 'Тяговитый турбомотор 1.2 л — надёжен при правильном уходе за прямым впрыском',
                strengths: [
                  'Уверенные 185 Н·м уже с 1 500 об/мин дают лёгкий разгон в городе и при обгонах.',
                  'Цепь ГРМ и жидкостный интеркулер обеспечивают быстрый прогрев и хорошие рейтинги TÜV.',
                  'При частой смене масла (10–15 тыс. км) и свечей ходит порядка 200 000–250 000 км.'
                ],
                watchouts: [
                  'Прямой впрыск при частых коротких поездках даёт нагар на впускных клапанах после 100 000 км.',
                  'Стоит проверить отзывную кампанию по топливному насосу и отсутствие звона вестгейта турбины.'
                ],
                beforeYouBuy: [
                  'Проверить в сервисной книжке замену масла каждые 10–15 тыс. км и отзыв по топливному насосу.',
                  'Плавно разогнаться на 3-й передаче с низов — не должно быть рывков и металлического звона турбины.',
                  'Уточнить дату замены свечей, так как турбомоторы износят их заметно быстрее атмосферников.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Строгая смена масла раз в 10–12 тыс. км / 1 год и качественный бензин (беречь турбину)', cost: '€140–230', ifIgnored: 'Старое масло закоксовывает подшипники турбины и ускоряет износ цепи', damageCost: '€1 500–2 400' },
                  { tier: 'yellow', km: '50 000–100 000 км • 4–7 лет', action: 'Заменить иридиевые свечи к 60 тыс. км и проверить стареющие к 5–6 годам патрубки охлаждения', cost: '€260–420', ifIgnored: 'Изношенные свечи дают пропуски под наддувом, а старые трубки начинают подтекать', damageCost: '€950–1 600' },
                  { tier: 'orange', km: '100 000–130 000 км • 7–9 лет', action: 'Почистить впускные клапаны от плотного нагара', cost: '€300–480', ifIgnored: 'Троение на холодную, потеря тяги и прогар клапанов (узлы и жидкости также стареют с годами)', damageCost: '€1 400–2 200' },
                  { tier: 'red', km: '120 000–160 000 км • 9–11 лет', action: 'Заменить цепь двигателя и проверить заслонку турбины', cost: '€750–1 100', ifIgnored: 'Перескок цепи или дорогая замена турбины в сборе (узлы и жидкости также стареют с годами)', damageCost: '€2 200–3 500' },
                  { tier: 'yellow', km: '150 000–190 000 км • 11–13 лет', action: 'Заменить свечи, катушки зажигания и проверить топливный насос', cost: '€250–450', ifIgnored: 'Рывки на разгоне и разрушение катализатора (резина, пластик и уплотнения стареют и по годам)', damageCost: '€1 100–1 800' },
                  { tier: 'orange', km: '200 000–250 000 км • 13–15+ лет', action: 'Обслужить масляные трубки турбины и насос охлаждения воздуха', cost: '€350–600', ifIgnored: 'Перегрев и заклинивание турбокомпрессора (резина, пластик и уплотнения стареют и по годам)', damageCost: '€1 400–2 200' }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { clutchDmf: '@clutchDmf' },
            score: 9.0,
            badges: {
              en: ['Refined 6-Speed Manual', 'Light 185 Nm Load'],
              de: ['Präzises 6-Gang-Getriebe', 'Moderate 185-Nm-Last'],
              ru: ['Мягкая 6-МКПП', 'Умеренная нагрузка (185 Н·м)']
            },
            dossier: {
              en: {
                headline: 'Crisp 6-Speed Manual (Optional Multidrive S CVT)',
                strengths: [
                  '6-speed manual pairs smoothly with the 1.2T flat torque band.',
                  'Light clutch and refined gearshift action for city commuting.'
                ],
                watchouts: [
                  'Optional Multidrive S CVT needs transmission fluid changes every 60,000 km.',
                  'Manual version is more durable and cheaper to repair long term.'
                ],
                beforeYouBuy: [
                  'Test smooth clutch engagement and check CVT fluid history if automatic.'
                ]
              },
              de: {
                headline: 'Leichtes 6-Gang-Getriebe (optional Multidrive S)',
                strengths: [
                  '6-Gang-Handschalter harmoniert ideal mit dem drehmomentstarken Turbomotor.',
                  'Leichtgängige Kupplung und präzise Schaltwege.'
                ],
                watchouts: [
                  'Optionale Multidrive-S-Automatik alle 60.000 km mit Ölwechsel pflegen.',
                  'Handschalter langfristig robuster und günstiger im Unterhalt.'
                ],
                beforeYouBuy: [
                  'Bei Multidrive-S-Automatik auf belegte Getriebeölwechsel achten.'
                ]
              },
              ru: {
                headline: 'Чёткая 6-МКПП (или вариатор Multidrive S)',
                strengths: [
                  'Механика отлично сочетается с ровной тягой турбомотора.',
                  'Лёгкое сцепление для комфортной езды по городу.'
                ],
                watchouts: [
                  'Вариатору Multidrive S нужна замена масла раз в 60 тыс. км.',
                  'Механика надёжнее и дешевле на больших пробегах.'
                ],
                beforeYouBuy: [
                  'Проверить плавность сцепления или историю замены масла в вариаторе.'
                ]
              }
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            score: 8.8,
            badges: {
              en: ['Facelift Safety Sense ECU', 'More Turbo Sensors Than NA'],
              de: ['Facelift Safety-Sense', 'Mehr Sensorik als Saugmotor'],
              ru: ['Электрика Safety Sense', 'Больше датчиков турбины']
            },
            dossier: {
              en: {
                headline: 'Modern Facelift Electronics & Stop-Start System',
                strengths: [
                  'Updated 2015+ facelift wiring with available Toyota Safety Sense.',
                  'Reliable ignition and direct-injection ECU controls.'
                ],
                watchouts: [
                  'EFB/AGM start-stop battery is pricier to replace every 5–6 years.',
                  'Electronic turbo wastegate actuator can need inspection at high mileage.'
                ],
                beforeYouBuy: [
                  'Check start-stop operation and ensure no Safety Sense or engine warnings appear.'
                ]
              },
              de: {
                headline: 'Moderne Facelift-Elektronik mit Start-Stopp',
                strengths: [
                  'Zuverlässige 2015+-Elektronik inklusive optionalem Toyota Safety Sense.',
                  'Stabile Motorsteuerung.'
                ],
                watchouts: [
                  'EFB/AGM-Start-Stopp-Batterie beim Tausch teurer als Standardbatterien.',
                  'Elektronischer Turbo-Stellmotor bei hohen Laufleistungen prüfenswert.'
                ],
                beforeYouBuy: [
                  'Start-Stopp-Funktion und eventuelle Safety-Sense-Anzeigen testen.'
                ]
              },
              ru: {
                headline: 'Современная рестайлинговая электроника',
                strengths: [
                  'Обновлённая электрика 2015+ года с поддержкой пакета Safety Sense.',
                  'Надёжные блоки управления.'
                ],
                watchouts: [
                  'Аккумулятор Start-Stop (EFB/AGM) дороже при замене раз в 5–6 лет.',
                  'Электронный актуатор турбины требует внимания на больших пробегах.'
                ],
                beforeYouBuy: [
                  'Проверить работу Start-Stop и отсутствие ошибок систем безопасности.'
                ]
              }
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Multi-Link Rear Absorption', 'Moderate Wind Noise on Highway'],
              de: ['Mehrlenkerachse schluckt gut', 'Mäßige Windgeräusche AB'],
              ru: ['Многорычажка сглаживает ямы', 'Умеренный шум на высокой скорости']
            },
            dossier: {
              en: {
                headline: 'Quietest Non-Hybrid Auris Engine',
                strengths: [
                  'Smooth 4-cylinder turbo stays quiet in town and cruises at low RPM on the motorway.',
                  'Improved 2015+ facelift cabin sound insulation over early models.'
                ],
                watchouts: [
                  'Tyre and wind roar become audible above 120 km/h on coarse asphalt.',
                  'Slightly firm ride if fitted with optional 17-inch alloy wheels.'
                ]
              },
              de: {
                headline: 'Laufruhigster Nicht-Hybrid-Auris',
                strengths: [
                  'Sehr leiser, vibrationsarmer 4-Zylinder-Turbo in Stadt und Autobahn.',
                  'Verbesserte Facelift-Geräuschdämmung ab 2015.'
                ],
                watchouts: [
                  'Ab 120 km/h nehmen Wind- und Abrollgeräusche auf rauem Belag zu.',
                  'Mit 17-Zoll-Felgen etwas straffer abrollend.'
                ]
              },
              ru: {
                headline: 'Самый тихий негибридный двигатель Auris',
                strengths: [
                  'Плавный 4-цилиндровый турбомотор остаётся тихим и в городе, и на трассе.',
                  'Улучшенная шумоизоляция рестайлинга 2015+ года.'
                ],
                watchouts: [
                  'После 120 км/ч на шершавом покрытии слышен шум шин и ветра.',
                  'Версии на 17-дюймовых дисках едут чуть жёстче.'
                ]
              }
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.4 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,4 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,199L Max)', 'Flat Fold-Down Cargo Floor'],
              de: ['360L Kofferraum (1.199L Max)', 'Ebener Ladeboden umgeklappt'],
              ru: ['Багажник 360–1 199 л', 'Ровный пол при складывании']
            }
          },
          payloadTowing: {
            score: 6.5,
            badges: {
              en: ['515 kg Payload', '1,300 kg Braked Tow'],
              de: ['515 kg Zuladung', '1.300 kg Anhängelast'],
              ru: ['Нагрузка 515 кг', 'Прицеп до 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.1,
            badges: {
              en: ['0–100 km/h: 10.1 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 10,1 s', '200 km/h Spitze'],
              ru: ['0–100 км/ч: 10,1 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.7,
            badges: {
              en: ['185 Nm Early Turbo Spool', 'Modest Top-End Passing Reserve'],
              de: ['185 Nm früher Turbo-Schub', 'Mäßige Reserve über 130 km/h'],
              ru: ['185 Н·м ранний подхват', 'Скромный запас выше 130']
            }
          },
          handlingAgility: {
            score: 7.6,
            badges: {
              en: ['Multi-Link Rear Axle', 'Light Turbo Nose'],
              de: ['Mehrlenker-Hinterachse', 'Leichte Vorderachse'],
              ru: ['Многорычажка сзади', 'Лёгкий передок']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            }
          },
          efficiencyFuel: {
            score: 7.0,
            badges: {
              en: ['6.5 L/100km', '106–112 g/km CO2'],
              de: ['6,5 L/100km', '106–112 g/km CO2'],
              ru: ['6,5 л/100 км', '106–112 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.9,
            badges: {
              en: ['Low 1.2L CO2 Tax • Euro 6', 'Low Compact Insurance'],
              de: ['Niedrige CO2-Steuer • Euro 6', 'Günstige Versicherung'],
              ru: ['Низкий налог CO2 • Euro 6', 'Дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Direct-Injection Spark Plugs & Intercooler Coolant Check', de: 'DI-Zündkerzen & Ladeluft-Kühlkreislauf prüfen', ru: 'Свечи прямого впрыска и проверка контура интеркулера' }, cost: '€180–280' },
                { when: '~120,000 km · 8 yrs', action: { en: '6-Speed Manual Gearbox Oil', de: '6-Gang Schaltgetriebeöl wechseln', ru: 'Замена масла в 6-ст. МКПП' }, cost: '€120–190' }
              ],
              critical: [
                { when: '130–180k km · 8–12 yrs', action: { en: 'Intake Valve Carbon Walnut-Blasting', de: 'Einlassventile entkoken (Walnussstrahlen)', ru: 'Чистка впускных клапанов от нагара' }, cost: '€350–550', risk: { en: 'Cold-start misfires & sluggish turbo throttle response', de: 'Kaltstart-Aussetzer & träges Turbo-Ansprechen', ru: 'Пропуски зажигания на холодную и потеря тяги' }, damage: '€900–1,400' },
                { when: '150–200k km · 10–14 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplung', ru: 'Двухмассовый маховик + сцепление' }, cost: '€1,050–1,550', risk: { en: 'Juddering take-off & driveline vibration', de: 'Rupfendes Anfahren & Antriebsstrang-Vibration', ru: 'Рывки при старте и вибрации трансмиссии' }, damage: '€1,800–2,400' }
              ]
            },
            score: 8.4,
            badges: {
              en: ['Reasonable 1.2T Parts Cost', 'More Complex Than Old 1.6 NA'],
              de: ['Faire 1.2T-Teilepreise', 'Komplexer als der 1.6 Sauger'],
              ru: ['Доступные расходники 1,2T', 'Сложнее простого 1,6']
            },
            dossier: {
              en: {
                headline: 'Moderate Turbo Servicing — Watch Direct-Injection Carbon',
                strengths: [
                  'Timing chain design avoids periodic timing-belt replacement.',
                  'Smaller oil capacity and simple filters keep routine services affordable.'
                ],
                watchouts: [
                  'Direct injection (8NR-FTS) requires strict 10k–15k km synthetic oil changes to protect turbo and chain.',
                  'Intake valves can accumulate carbon past 120,000 km if mostly driven short trips.'
                ],
                beforeYouBuy: [
                  'Check service history for 10k–15k km oil changes rather than stretched 20k+ intervals.'
                ]
              },
              de: {
                headline: 'Regelmäßige Ölwechsel für Turbo & Direkteinspritzung',
                strengths: [
                  'Steuerkette spart teure Zahnriemenwechsel.',
                  'Überschaubare Kosten für Öl und Filter.'
                ],
                watchouts: [
                  'Strenge Ölwechsel alle 10–15 Tkm schützen Turbolader und Steuerkette.',
                  'Bei über 120.000 km und viel Kurzstrecke ist Einlassverkokung möglich.'
                ],
                beforeYouBuy: [
                  'Wartungsheft auf regelmäßige 10.000–15.000-km-Ölwechsel prüfen.'
                ]
              },
              ru: {
                headline: 'Требует частой замены масла для ресурса турбины',
                strengths: [
                  'Цепь ГРМ избавляет от плановой замены ремня.',
                  'Недорогие фильтры и расходники для ТО.'
                ],
                watchouts: [
                  'Прямой впрыск и турбина нуждаются в замене масла каждые 10–12 тыс. км.',
                  'К 120 000+ км при коротких поездках возможен нагар на впускных клапанах.'
                ],
                beforeYouBuy: [
                  'Проверить сервисную историю на предмет частых замен масла.'
                ]
              }
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['2015+ Facelift Value', '15-Yr Relax Eligible'],
              de: ['2015+ Facelift-Wert', '15-J.-Relax-fähig'],
              ru: ['Свежий рестайл 2015+', 'Высокая ликвидность']
            },
            dossier: {
              en: {
                headline: 'Strong Facelift (2015+) Resale Value',
                strengths: [
                  'Newer Euro 6 petrol turbo status holds value well for buyers wanting modern refinement.',
                  'Facelift styling and Safety Sense trim options stay attractive.'
                ],
                watchouts: [
                  'Faces stiff used-market competition from the ultra-popular 1.8 Hybrid.',
                  'Higher-mileage turbo examples draw more buyer scrutiny than naturally aspirated models.'
                ]
              },
              de: {
                headline: 'Guter Restwert als modernes Facelift-Modell (2015+)',
                strengths: [
                  'Gefragt bei Käufern, die einen jungen, laufruhigen Euro-6-Benziner suchen.',
                  'Modernere Facelift-Optik stützt den Preis.'
                ],
                watchouts: [
                  'Starke Konkurrenz im eigenen Haus durch den sehr beliebten 1.8 Hybrid.',
                  'Bei hohen Laufleistungen achten Käufer kritischer auf den Turbolader.'
                ]
              },
              ru: {
                headline: 'Хорошая ликвидность рестайлинга (2015+)',
                strengths: [
                  'Свежий год и класс Euro 6 поддерживают высокий спрос на вторичке.',
                  'Обновлённый дизайн привлекателен для покупателей.'
                ],
                watchouts: [
                  'Конкурирует со сверхпопулярным гибридом 1.8 в том же бюджете.',
                  'При больших пробегах покупатели осторожнее относятся к турбомотору.'
                ]
              }
            }
          }
        }
      },
      {
        id: '1.6-d4d',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.6L D-4D Diesel', de: '1.6L D-4D Diesel', ru: '1.6L D-4D Дизель' },
          forcedInduction: { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
          injection: { en: '✓ Common-Rail DI', de: '✓ Common-Rail Direkt', ru: '✓ Common-Rail прямой' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Clutch + DMF', de: '✓ Kupplung + ZMS', ru: '✓ Сцепление + ДММ' },
          towingBraked: '1,300 kg',
          sprint0100: '10.5 s',
          topSpeed: '195 km/h',
          peakTorque: '270 Nm @ 1,750',
          passingPunch: { en: 'Strong Hwy Cruise', de: 'Starker Durchzug', ru: 'Хорошая тяга' },
          realWorldFuel: '4.8–5.4 L/100 km',
          tankRange: '50 L · ~960 km',
          euroNorm: 'Euro 6 (DPF)',
          taxInsurance: { en: 'Low–Moderate', de: 'Niedrig–Mittel', ru: 'Низкие–Средние' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Moderate', de: 'Mittel', ru: 'Средние' }
        },
        buyerFitGroup: 'highway-diesel',
        isDefault: false,
        dossierGroup: 'd4d-diesel',
        fuelType: 'diesel',
        hp: 112,
        shortTitle: 'AURIS 1.6 D-4D',
        fullName: '2014 Toyota Auris 1.6 D-4D',
        engineBadge: '1.6L D-4D • 112 HP',
        engineSubLabel: {
          en: '1WW (BMW N47) 1.6L Turbo-Diesel (06/2015–01/2018) • 6-MT • 270 Nm',
          de: '1WW (BMW N47) 1.6L Turbodiesel (06/2015–01/2018) • 6-Gang • 270 Nm',
          ru: '1WW (BMW N47) 1.6L Турбодизель (06/2015–01/2018) • 6-ст. МКПП • 270 Н·м'
        },
        rarityLabel: {
          en: 'BMW-SOURCED DIESEL',
          de: 'BMW-KOOP-DIESEL',
          ru: 'ДИЗЕЛЬ ОТ BMW'
        },
        originalMsrp: {
          en: '€23,990 New',
          de: '23.990 € Neu',
          ru: '€23 990 новый'
        },
        estUsedPrice: '€9,600',
        buyerFitOverrides: {
          skip: ['dieselDpfShortTrips', 'bmwDieselWatchout', 'compactBoot', 'plainPlastics']
        },
        perkLabel: {
          en: '✦ Efficient 5.4 L/100km • 270 Nm Torque • Euro 6 Compliant',
          de: '✦ Sparsam (5,4 L/100km) • 270 Nm Drehmoment • Euro 6',
          ru: '✦ Расход 5,4 л/100 км • Тяга 270 Н·м • Эко-класс Евро-6'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 5.4 L/100KM',
            'STRONG 270 NM TORQUE',
            'EURO 6 HIGHWAY CRUISER',
            '1,300 KG BRAKED TOWING',
            'TOYOTA BUILD QUALITY'
          ],
          de: [
            'SPARSAM: 5,4 L/100KM',
            'STARKE 270 NM DREHMOMENT',
            'EURO-6 LANGSTRECKEN-DIESEL',
            '1.300 KG ANHÄNGELAST',
            'SOLIDE TOYOTA-VERARBEITUNG'
          ],
          ru: [
            'РАСХОД 5,4 Л/100 КМ',
            'ОТЛИЧНАЯ ТЯГА 270 Н·М',
            'ЕВРО-6 ДЛЯ ДАЛЬНИХ ТРАСС',
            'БУКСИРОВКА ДО 1 300 КГ',
            'КАЧЕСТВО СБОРКИ TOYOTA'
          ]
        },
        notableNegatives: {
          en: [
            'BMW-BASED DIESEL (NOT TOYOTA)',
            'COOLING & DPF SHORT-TRIP RISK',
            '360L AVERAGE BOOT SPACE'
          ],
          de: [
            'BMW-MOTORBASIS (KEIN TOYOTA-BLOCK)',
            'KÜHLUNG & DPF BEI KURZSTRECKE',
            '360L DURCHSCHNITTS-KOFFERRAUM'
          ],
          ru: [
            'МОТОР БАЗЫ BMW (НЕ TOYOTA)',
            'РИСК ОХЛАЖДЕНИЯ И DPF В ГОРОДЕ',
            'СРЕДНИЙ БАГАЖНИК 360 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 7.9,
          spacePracticality: 7.5,
          performanceDynamics: 7.3,
          runningCostsTco: 8.1
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L D-4D Inline-4 Turbodiesel (1WW / N47)', de: '1.6L D-4D Reihenvierzylinder Turbodiesel (1WW / N47)', ru: '1.6L D-4D рядный 4-цил. турбодизель (1WW / N47)' } },
                  { k: 'displacement', v: '1,598 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '82 kW (112 HP)', de: '82 kW (112 PS)', ru: '82 кВт (112 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Rear Timing Chain', de: 'Diesel · Steuerkette (hinten)', ru: 'Дизель · Цепь ГРМ (сзади)' } }
                ],
                note: {
                  en: 'BMW-sourced aluminium diesel delivering strong motorway economy with regular oil care.',
                  de: 'Von BMW zugelieferter Alu-Diesel mit starker Autobahneffizienz bei gepflegter Ölhistorie.',
                  ru: 'Алюминиевый дизель разработки BMW с отличной трассовой экономичностью при регулярном ТО.'
                }
              },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi'
            },
            score: 6.7,
            badges: {
              en: ['BMW 1WW 1.6 Diesel', 'Check Coolant & DPF'],
              de: ['BMW 1WW 1.6 Diesel', 'Kühlung & DPF prüfen'],
              ru: ['Дизель BMW 1WW 1.6', 'Проверить ОЖ и DPF']
            },
            dossier: {
              en: {
                headline: 'BMW-Sourced 1.6L Euro 6 Diesel — Frugal Cruiser with Stricter Care',
                strengths: [
                  'Strong 270 Nm torque with Euro 6 emissions and low CO2 (104–108 g/km) for highway cruising.',
                  'Runs 220,000–250,000+ km if oil is changed every 10,000–15,000 km and the EGR cooler recall is done.'
                ],
                watchouts: [
                  'BMW N47-based rear timing chain wears fast if factory 30,000 km oil intervals were used.',
                  'EGR cooler leaks and DPF soot buildup on short trips require regular highway runs and coolant checks.'
                ],
                beforeYouBuy: [
                  'Listen near the rear of the engine on a cold start for a metallic timing-chain scraping sound.',
                  'Check coolant level and ask for proof that the leaky EGR cooler recall was completed.',
                  'Only buy if engine oil was changed every 10,000–15,000 km rather than 30,000 km intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50,000 km • 1–3 yrs', action: 'Strict 10–15,000 km / 1 yr oil changes (never run 30k intervals!) & fuel filter every 2 yrs', cost: '€170–280', ifIgnored: 'Long factory intervals wear the rear timing chain severely from year one', damageCost: '€2,500–4,000' },
                  { tier: 'orange', km: '50,000–100,000 km • 4–7 yrs', action: 'Verify exhaust cooler recall, inspect 6-yr aging rubber crank pulley damper & change gearbox oil', cost: '€320–550', ifIgnored: 'Aged rubber crank damper splits cleanly off; leaky cooler risks engine overheating', damageCost: '€1,200–2,100' },
                  { tier: 'red', km: '100,000–140,000 km • 7–9 yrs', action: 'Replace rear-mounted timing chain kit as soon as any rattle starts', cost: '€1,100–1,600', ifIgnored: 'Chain snaps without warning & wrecks the entire engine (rubber/plastic & seals also harden with age)', damageCost: '€3,500–5,000+' },
                  { tier: 'orange', km: '130,000–170,000 km • 9–11 yrs', action: 'Replace leaking exhaust cooler & exhaust recirculation valve', cost: '€450–750', ifIgnored: 'Coolant leaks unseen into intake, risking engine damage/fire (components & fluids also degrade over years)', damageCost: '€1,800–2,800' },
                  { tier: 'yellow', km: '160,000–200,000 km • 11–13 yrs', action: 'Replace brittle oil filter housing seals & rubber crank pulley', cost: '€280–450', ifIgnored: 'Oil leaks onto belts and rubber pulley snaps in traffic', damageCost: '€800–1,400' },
                  { tier: 'orange', km: '200,000–250,000 km • 13–15+ yrs', action: 'Replace clutch & flywheel + deep-clean diesel soot filter (DPF)', cost: '€1,100–1,600', ifIgnored: 'Severe shudder, blocked exhaust & gearbox failure (components & fluids also degrade over years)', damageCost: '€2,200–3,200' }
                ]
              },
              de: {
                headline: 'BMW-basierter 1.6L Euro-6-Diesel — sparsam, aber pflegebedürftiger',
                strengths: [
                  'Kräftige 270 Nm Drehmoment bei Euro-6-Abgasnorm und niedrigen 104–108 g/km CO2 auf Langstrecken.',
                  'Erreicht 220.000–250.000+ km, wenn Öl alle 10.000–15.000 km gewechselt und der AGR-Kühler getauscht wurde.'
                ],
                watchouts: [
                  'Hinten sitzende Steuerkette (BMW N47-Basis) verschleißt bei 30.000er-Ölintervallen deutlich schneller.',
                  'Undichte AGR-Kühler und DPF-Belastung auf Kurzstrecken erfordern regelmäßige Kühlmittel-Checks und Autobahnfahrt.'
                ],
                beforeYouBuy: [
                  'Beim Kaltstart am hinteren Motorbereich horchen — schleifende Kettengeräusche sind ein Warnsignal.',
                  'Kühlwasserstand prüfen und Beleg für den Rückruf-Tausch des AGR-Kühlers zeigen lassen.',
                  'Nur kaufen, wenn Ölwechsel alle 10.000–15.000 km statt im 30.000er-Intervall durchgeführt wurden.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50.000 km • 1–3 J.', action: 'Öl streng alle 10–15.000 km / 1 J. wechseln (keine 30.000er-Intervalle!) & alle 2 J. Kraftstofffilter', cost: '170–280 €', ifIgnored: 'Lange Intervalle lassen die hintere BMW-Steuerkette rasant verschleißen', damageCost: '2.500–4.000 €' },
                  { tier: 'orange', km: '50.000–100.000 km • 4–7 J.', action: 'Abgaskühler-Rückruf prüfen, 6-J.-Gummischwingungsdämpfer kontrollieren & Getriebeöl wechseln', cost: '320–550 €', ifIgnored: 'Altersrissiger Schwingungsdämpfer fliegt ab; undichter Kühler überhitzt Motor', damageCost: '1.200–2.100 €' },
                  { tier: 'red', km: '100.000–140.000 km • 7–9 J.', action: 'Hinten sitzende Steuerkette sofort tauschen, sobald Rasseln beginnt', cost: '1.100–1.600 €', ifIgnored: 'Kette reißt plötzlich & verursacht kapitalen Motorschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '3.500–5.000 €+' },
                  { tier: 'orange', km: '130.000–170.000 km • 9–11 J.', action: 'Undichten Abgas-Kühler (AGR) & Ventil komplett ersetzen', cost: '450–750 €', ifIgnored: 'Kühlwasser tritt unbemerkt ein — Motorgefahr bis Brandschaden (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '1.800–2.800 €' },
                  { tier: 'yellow', km: '160.000–200.000 km • 11–13 J.', action: 'Ölfiltergehäuse-Dichtungen & Gummidämpfer der Riemenscheibe tauschen', cost: '280–450 €', ifIgnored: 'Ölleck zerstört Riemen oder Riemenscheibe reißt während der Fahrt (Gummi, Kunststoff & Dichtungen altern auch zeitlich)', damageCost: '800–1.400 €' },
                  { tier: 'orange', km: '200.000–250.000 km • 13–15+ J.', action: 'Kupplung + Schwungrad erneuern & Partikelfilter spülen lassen', cost: '1.100–1.600 €', ifIgnored: 'Starkes Ruckeln, verstopfter Auspuff & Getriebeschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)', damageCost: '2.200–3.200 €' }
                ]
              },
              ru: {
                headline: 'Дизель 1.6 Евро-6 от BMW — экономичный, но требовательный к уходу',
                strengths: [
                  'Уверенные 270 Н·м тяги при эконорме Евро-6 и низких выбросах (104–108 г/км) для трассы.',
                  'Служит 220 000–250 000+ км при замене масла раз в 10 000–15 000 км и заменённом охладителе EGR.'
                ],
                watchouts: [
                  'Задняя цепь ГРМ (база BMW N47) быстро изнашивается при заводских интервалах масла по 30 000 км.',
                  'Возможные утечки охладителя EGR и засор DPF в городе требуют контроля антифриза и поездок по трассе.'
                ],
                beforeYouBuy: [
                  'При холодном пуске послушать у задней стенки капота — не должно быть металлического шелеста цепи.',
                  'Проверить уровень антифриза и документы о замене охладителя EGR по отзывной кампании.',
                  'Покупать только при замене масла каждые 10–15 тыс. км, а не раз в 30 тыс. км.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–50 000 км • 1–3 года', action: 'Масло строго раз в 10–15 тыс. км / 1 год (не тяните до 30 тыс.!) и топливный фильтр раз в 2 года', cost: '€170–280', ifIgnored: 'Растянутые интервалы с первых лет ускоряют износ задней цепи ГРМ', damageCost: '€2 500–4 000' },
                  { tier: 'orange', km: '50 000–100 000 км • 4–7 лет', action: 'Проверить отзыв по охладителю выхлопа, демпфер шкива (резина стареет к 6 годам) и масло КПП', cost: '€320–550', ifIgnored: 'Потрескавшийся резиновый демпфер шкива срывает ремень; течь охладителя опасна', damageCost: '€1 200–2 100' },
                  { tier: 'red', km: '100 000–140 000 км • 7–9 лет', action: 'Заменить заднюю цепь двигателя сразу при появлении шелеста', cost: '€1 100–1 600', ifIgnored: 'Внезапный обрыв цепи и полное разрушение мотора (узлы и жидкости также стареют с годами)', damageCost: '€3 500–5 000+' },
                  { tier: 'orange', km: '130 000–170 000 км • 9–11 лет', action: 'Заменить негерметичный охладитель и клапан выхлопных газов', cost: '€450–750', ifIgnored: 'Скрытая утечка антифриза во впуск и тяжёлая поломка двигателя (узлы и жидкости также стареют с годами)', damageCost: '€1 800–2 800' },
                  { tier: 'yellow', km: '160 000–200 000 км • 11–13 лет', action: 'Заменить прокладки корпуса масляного фильтра и демпфер шкива', cost: '€280–450', ifIgnored: 'Течь масла на приводной ремень и обрыв шкива в дороге (резина, пластик и уплотнения стареют и по годам)', damageCost: '€800–1 400' },
                  { tier: 'orange', km: '200 000–250 000 км • 13–15+ лет', action: 'Заменить сцепление с маховиком и промыть сажевый фильтр', cost: '€1 100–1 600', ifIgnored: 'Сильная вибрация, забитый выхлоп и поломка коробки (узлы и жидкости также стареют с годами)', damageCost: '€2 200–3 200' }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { clutchDmf: '@clutchDmf' },
            score: 7.6,
            badges: {
              en: ['6-Speed Manual', 'Budget DMF Replacement'],
              de: ['6-Gang-Schaltgetriebe', 'ZMS-Wechsel einplanen'],
              ru: ['6-ступ. МКПП', 'Контроль маховика при 270 Н·м']
            },
            dossier: {
              en: {
                headline: 'Smooth 6-Speed Manual (Watch DMF Past 160k km)',
                strengths: [
                  'Long-geared 6-speed manual keeps motorway RPM low and shifts smoothly.',
                  'Handles 270 Nm cleanly at highway speeds.'
                ],
                watchouts: [
                  'Dual-mass flywheel (DMF) and clutch wear past 160,000 km with heavy urban use.',
                  'Clutch/DMF replacement is noticeably pricier than on petrol Auris models.'
                ],
                beforeYouBuy: [
                  'Listen for idle rattle and test smooth clutch take-up in 1st gear.'
                ]
              },
              de: {
                headline: 'Lang übersetztes 6-Gang-Schaltgetriebe',
                strengths: [
                  'Niedrige Drehzahlen auf der Autobahn durch lange 6.-Gang-Übersetzung.',
                  'Sauberes Schaltgefühl.'
                ],
                watchouts: [
                  'ZMS- und Kupplungsverschleiß ab ca. 160.000 km einkalkulieren.',
                  'Tausch deutlich teurer als bei den Saugbenzinern.'
                ],
                beforeYouBuy: [
                  'Auf ruhiges Anfahren und Geräuschfreiheit im Leerlauf achten.'
                ]
              },
              ru: {
                headline: 'Длинная 6-МКПП (контроль маховика после 160 тыс. км)',
                strengths: [
                  'Низкие обороты на трассе и чёткое переключение.',
                  'Уверенно передаёт 270 Н·м момента.'
                ],
                watchouts: [
                  'Маховик и сцепление могут потребовать внимания к 160–200 тыс. км.',
                  'Замена комплекта сцепления и маховика обходится дороже бензиновых версий.'
                ],
                beforeYouBuy: [
                  'Проверить плавность трогания и отсутствие стука маховика на холостых.'
                ]
              }
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Suspension Joints'],
              de: ['Guter Unterbodenschutz', 'Robuste Achsgelenke'],
              ru: ['Хороший антикор днища', 'Живучая подвеска']
            }
          },
          electronicsReliability: {
            score: 8.4,
            badges: {
              en: ['Euro 6 NOx & DPF Sensors', 'Check Battery State Early'],
              de: ['Euro-6-NOx- & DPF-Sensoren', 'Batteriezustand prüfen'],
              ru: ['Датчики NOx и DPF Euro 6', 'Важен живой аккумулятор']
            },
            dossier: {
              en: {
                headline: 'Euro 6 Diesel Sensors & NOx/EGR Controls',
                strengths: [
                  'Modern 2015+ facelift electronics with clean Euro 6 calibration.',
                  'Main cabin and infotainment systems remain reliable.'
                ],
                watchouts: [
                  'BMW-sourced N47 (1WW) architecture adds more complex NOx/DPF/EGR sensors than older Toyota diesels.',
                  'Sensor faults can trigger limp mode if ignored.'
                ],
                beforeYouBuy: [
                  'Read out full engine fault memory before purchase.'
                ]
              },
              de: {
                headline: 'Komplexere Euro-6-Sensorik (N47-Basis)',
                strengths: [
                  'Moderne Facelift-Elektronik mit aktueller Euro-6-Steuerung.',
                  'Zuverlässige Innenraum- und Infotainment-Technik.'
                ],
                watchouts: [
                  'Mehr Abgas- und NOx-Sensoren als bei älteren Toyota-Dieseln.',
                  'Sensorfehler führen schnell zum Notlauf.'
                ],
                beforeYouBuy: [
                  'Fehlerspeicher vor dem Kauf unbedingt auslesen lassen.'
                ]
              },
              ru: {
                headline: 'Сложная электроника Euro 6 (база BMW N47)',
                strengths: [
                  'Современная электрика рестайлинга 2015+ года.',
                  'Стабильная работа салонной электроники.'
                ],
                watchouts: [
                  'Больше датчиков выхлопа, NOx и DPF, чем на старых дизелях Toyota.',
                  'Неисправность датчиков быстро переводит мотор в аварийный режим.'
                ],
                beforeYouBuy: [
                  'Перед покупкой обязательна компьютерная диагностика.'
                ]
              }
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Multi-Link Rear Absorption', 'Moderate Wind Noise on Highway'],
              de: ['Mehrlenkerachse schluckt gut', 'Mäßige Windgeräusche AB'],
              ru: ['Многорычажка сглаживает ямы', 'Умеренный шум на высокой скорости']
            }
          },
          interiorQualityFeatures: {
            score: 6.4,
            badges: {
              en: ['Clear Physical Climate Buttons', 'Touch 2 Screen • Basic Plastics'],
              de: ['Klare physische Klimatasten', 'Touch-2-Display • Schlichtes Plastik'],
              ru: ['Понятные кнопки климата', 'Экран Touch 2 • Простой пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.4 m Turning Circle', '4.28 m Body + Reverse Camera'],
              de: ['10,4 m Wendekreis', '4,28 m Länge + Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Компактные 4,28 м + камера']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC Stability'],
              de: ['Euro NCAP 5★ (2013)', '7 Airbags + VSC-ESP'],
              ru: ['Euro NCAP 5★ (2013)', '7 подушек + ESP (VSC)']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Cabin', 'Average Compact-Class Rear'],
              de: ['Angenehmes Platzgefühl vorn', 'Durchschnittlicher Kompakt-Fond'],
              ru: ['Комфортно впереди', 'Средний простор на заднем ряду']
            }
          },
          interiorBootSpace: {
            score: 6.3,
            badges: {
              en: ['360L Boot (1,199L Max)', 'Flat Fold-Down Cargo Floor'],
              de: ['360L Kofferraum (1.199L Max)', 'Ebener Ladeboden umgeklappt'],
              ru: ['Багажник 360–1 199 л', 'Ровный пол при складывании']
            }
          },
          payloadTowing: {
            score: 6.5,
            badges: {
              en: ['515 kg Payload', '1,300 kg Braked Tow'],
              de: ['515 kg Zuladung', '1.300 kg Anhängelast'],
              ru: ['Нагрузка 515 кг', 'Прицеп до 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.8,
            badges: {
              en: ['0–100 km/h: 10.5 s', '195 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '195 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5 с', 'Макс. 195 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.1,
            badges: {
              en: ['270 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['270 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['270 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 7.2,
            badges: {
              en: ['Balanced Highway Ride', 'Heavier Diesel Nose'],
              de: ['Ruhiger Geradeauslauf', 'Schwerere Diesel-Front'],
              ru: ['Стабильность на трассе', 'Тяжелее передок']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'All-Round Discs • Regen Assist'],
              de: ['100–0 km/h: 36,2 m', 'Scheibenbremsen • Rekuperation'],
              ru: ['100–0 км/ч: 36,2 м', 'Дисковые тормоза • Рекуперация']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['Efficient (5.4 L/100km)', '104–108 g/km CO2'],
              de: ['Sparsam (5,4 L/100km)', '104–108 g/km CO2'],
              ru: ['Экономичный (5,4 л/100 км)', '104–108 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.4,
            badges: {
              en: ['Low 1.6L Tax • Euro 6 Clean', 'Moderate Diesel Insurance'],
              de: ['Günstige 1.6-Steuer • Euro 6', 'Solide Diesel-Versicherung'],
              ru: ['Налог 1,6 л • Чистый Euro 6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & EGR Passage Check', de: 'Dieselfilter wechseln & AGR-Kanal prüfen', ru: 'Топливный фильтр и проверка EGR' }, cost: '€160–260' },
                { when: '~120,000 km · 8 yrs', action: { en: '6-Speed Manual Gearbox Oil', de: '6-Gang Schaltgetriebeöl wechseln', ru: 'Замена масла в 6-ст. МКПП' }, cost: '€130–200' }
              ],
              critical: [
                { when: '140–200k km · 9–13 yrs', action: { en: 'Rear-Mounted Timing Chain Kit (BMW N47 Architecture)', de: 'Getriebeseitige Steuerkette ersetzen (BMW-N47-Basis)', ru: 'Замена задней цепи ГРМ (архитектура BMW N47)' }, cost: '€1,400–2,100', risk: { en: 'Chain stretch or snap destroys valves & pistons', de: 'Kettenlängung oder -riss führt zum kapitalen Motorschaden', ru: 'Растяжение или обрыв цепи ведёт к капитальному ремонту ДВС' }, damage: '€4,000–6,500' },
                { when: '150–200k km · 10–14 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplung', ru: 'Двухмассовый маховик + сцепление' }, cost: '€1,100–1,650', risk: { en: 'Heavy idle rattle & transmission bearing wear', de: 'Starkes Leerlauf-Rasseln & Getriebelager-Verschleiß', ru: 'Сильный стук на холостых и износ подшипников КПП' }, damage: '€1,900–2,600' }
              ]
            },
            score: 6.5,
            badges: {
              en: ['Small Tyres & Brakes', 'Costly BMW-Spec Engine Parts'],
              de: ['Kleine günstige Bremsen', 'Teurere BMW-Motorteile'],
              ru: ['Недорогие тормоза и шины', 'Дорогие запчасти мотора BMW']
            },
            dossier: {
              en: {
                headline: 'Rear-Mounted Timing Chain Requires Strict Oil Intervals',
                strengths: [
                  'No scheduled timing-belt replacement interval.',
                  'Routine oil and filter services are straightforward.'
                ],
                watchouts: [
                  '1WW (BMW N47) timing chain sits at the rear of the block — expensive if stretched from 30k km oil intervals.',
                  'DPF and EGR valves require regular highway runs to stay clean.'
                ],
                beforeYouBuy: [
                  'Listen closely for chain rattle at cold start and insist on 10k–15k km oil change records.'
                ]
              },
              de: {
                headline: 'Hinten liegende Steuerkette — kurze Ölwechsel entscheidend',
                strengths: [
                  'Kein turnusmäßiger Zahnriemenwechsel nötig.',
                  'Normale Inspektionen bleiben preislich im Rahmen.'
                ],
                watchouts: [
                  'N47-Basis (1WW): Steuerkette sitzt getriebeseitig, daher ist ein Tausch teuer.',
                  'DPF und AGR brauchen regelmäßige Langstrecken.'
                ],
                beforeYouBuy: [
                  'Kaltstart auf Rasseln prüfen und auf 10.000–15.000-km-Ölwechsel achten.'
                ]
              },
              ru: {
                headline: 'Цепь ГРМ со стороны КПП — важна частая замена масла',
                strengths: [
                  'Не требует плановой замены ремня ГРМ.',
                  'Обычное плановое ТО обходится умеренно.'
                ],
                watchouts: [
                  'На моторе 1WW (BMW N47) цепь стоит сзади, поэтому её замена стоит дорого.',
                  'Сажевый фильтр и EGR нуждаются в регулярных трассовых поездках.'
                ],
                beforeYouBuy: [
                  'Слушать холодный запуск на звон цепи и требовать историю частых замен масла.'
                ]
              }
            }
          },
          depreciationResale: {
            score: 7.6,
            badges: {
              en: ['Euro 6 Diesel Value', 'Fleet Commuter Demand'],
              de: ['Euro-6-Vorteil', 'Gefragt bei Pendlern'],
              ru: ['Плюс Евро-6', 'Спрос у трассовых водителей']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: { sideRear: true },
  paints: [
    { name: 'Pure White', code: '040', hex: '#f4f6f9', glow: 'rgba(244, 246, 249, 0.16)', isDefault: true },
    { name: 'Pearl White', code: '070', hex: '#eceef2', glow: 'rgba(236, 238, 242, 0.16)' },
    { name: 'Silver Metallic', code: '1F7', hex: '#b6bec8', glow: 'rgba(182, 190, 200, 0.16)' },
    { name: 'Granite Grey', code: '1G3', hex: '#545b63', glow: 'rgba(84, 91, 99, 0.18)' },
    { name: 'Eclipse Black', code: '209', hex: '#1a1d22', glow: 'rgba(70, 82, 98, 0.18)' },
    { name: 'Tokyo Red', code: '3R3', hex: '#a9202b', glow: 'rgba(169, 32, 43, 0.2)' },
    { name: 'Avantgarde Bronze', code: '4V8', hex: '#766454', glow: 'rgba(118, 100, 84, 0.18)' },
    { name: 'Dark Steel Blue', code: '8T5', hex: '#283c58', glow: 'rgba(40, 60, 88, 0.2)' },
    { name: 'Skyview Blue', code: '8U6', hex: '#4f7ea8', glow: 'rgba(79, 126, 168, 0.2)' },
    { name: 'Cobalt Blue', code: '8T7', hex: '#1e4a8a', glow: 'rgba(30, 74, 138, 0.2)' }
  ],
  engineDates: {
    '1.8-hybrid': '12/2012–12/2018',
    '1.33-dual-vvti': '12/2012–03/2018',
    '1.6-valvematic': '12/2012–03/2018',
    '1.4-d4d': '12/2012–03/2018',
    '2.0-d4d': '12/2012–04/2015'
  },
  inDepth: {
    defaultEngineId: '1.8-hybrid',
    defaultGroupKey: 'hybrid',
    engineCosts: {
      '1.8-hybrid':     { group: 'hybrid',       avgFuelL100: 4.8, fuelPrice: 1.75, tax: 36,  ins: 580, service: 260 },
      '1.33-dual-vvti': { group: 'petrol-na',    avgFuelL100: 6.2, fuelPrice: 1.75, tax: 112, ins: 540, service: 290 },
      '1.6-valvematic': { group: 'petrol-na',    avgFuelL100: 6.8, fuelPrice: 1.75, tax: 136, ins: 590, service: 300 },
      '1.2-turbo':      { group: 'petrol-turbo', avgFuelL100: 6.2, fuelPrice: 1.75, tax: 88,  ins: 560, service: 330 },
      '1.4-d4d':        { group: 'diesel',       avgFuelL100: 4.9, fuelPrice: 1.65, tax: 164, ins: 620, service: 350 },
      '1.6-d4d':        { group: 'diesel',       avgFuelL100: 5.1, fuelPrice: 1.65, tax: 176, ins: 640, service: 380 },
      '2.0-d4d':        { group: 'diesel',       avgFuelL100: 5.5, fuelPrice: 1.65, tax: 228, ins: 670, service: 390 }
    },
    groups: {
      hybrid: {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 3%', note: 'Minimal drivetrain & brake-wear defects across 6–11 yr inspections' },
            { source: 'ADAC Pannenstatistik', value: 'Very Low Breakdowns', note: 'Main roadside call-out is simply an aged 12V auxiliary battery' },
            { source: 'WhatCar? Survey', value: '98.4% Reliability', note: 'Consistently ranks #1–#2 in Used Family Car reliability' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 3 %', note: 'Kaum Mängel an Antrieb und Bremsen selbst bei 6–11 Jahre alten Fahrzeugen' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr pannensicher', note: 'Häufigste Pannenursache ist lediglich eine schwache 12V-Hilfsbatterie' },
            { source: 'WhatCar? Umfrage', value: '98,4 % Zuverlässigkeit', note: 'Regelmäßig Platz 1–2 bei gebrauchten Kompaktwagen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-3%', note: 'Минимум нареканий по агрегатам и тормозам на осмотрах 6–11 лет' },
            { source: 'ADAC Pannenstatistik', value: 'Минимум поломок', note: 'Главная причина вызовов эвакуатора — лишь старый 12В аккумулятор' },
            { source: 'Рейтинг WhatCar?', value: '98,4% надёжности', note: 'Стабильно занимает 1–2 места среди подержанных хэтчбеков C-класса' }
          ]
        },
        extendedChecks: {
          en: [
            'Check rear subframe, exhaust heat-shields and rear brake discs for surface corrosion on salt-belt cars.',
            'Verify smooth electric-to-petrol transitions in slow city traffic with zero shudder under light throttle.',
            'Confirm both rear-seat hybrid battery intake vents are unobstructed and dust-free.',
            'Inspect water pump housing and inverter coolant reservoir for pink crust or level drops.'
          ],
          de: [
            'Hinterachsträger, Hitzeschutzbleche und hintere Bremsscheiben auf Winter-Rost oder Riefenbildung prüfen.',
            'Sanften Übergang zwischen E-Motor und Benziner im Stadtverkehr ohne Ruckeln unter Teillast testen.',
            'Beide Lüftungsschlitze der Hybridbatterie unter der Rückbank auf freie, staubfreie Luftzufuhr prüfen.',
            'Wasserpumpe und Ausgleichsbehälter des Inverter-Kühlkreislaufs auf rosa Krusten oder Verlust checken.'
          ],
          ru: [
            'Осмотреть задний подрамник, тепловые экраны и задние тормозные диски на предмет ржавчины от реагентов.',
            'Проверить плавность перехода с электротяги на бензин в пробке без толчков и вибраций.',
            'Убедиться, что решётки охлаждения батареи под задним сиденьем не забиты пылью и ворсом.',
            'Проверить помпы и бачок охлаждения инвертора на наличие подтёков или розового налёта.'
          ]
        },
        savingsNote: {
          en: 'Zero clutch, starter, alternator, or timing belt bills plus ~4.8 L/100 km real fuel use typically save €450–€750/yr vs. conventional petrol rivals.',
          de: 'Keine Kosten für Kupplung, Anlasser, Lichtmaschine oder Zahnriemen sowie ca. 4,8 L/100 km sparen oft 450–750 €/Jahr gegenüber klassischen Benzinern.',
          ru: 'Отсутствие сцепления, стартера, генератора и ремня ГРМ при расходе ~4,8 л/100 км экономит около €450–750 в год по сравнению с обычными бензиновыми конкурентами.'
        },
        market: {
          supplyDemand: {
            en: 'High used supply, yet clean 2015–2018 facelift hybrids sell within days due to strong commuter and city-zone demand.',
            de: 'Gutes Marktangebot, doch gepflegte 2015–2018 Facelift-Hybride sind wegen hoher Nachfrage oft in wenigen Tagen verkauft.',
            ru: 'Предложение хорошее, но ухоженные рестайлинговые гибриды 2015–2018 гг. быстро находят покупателя благодаря высокому спросу в городах.'
          },
          sweetSpot: {
            en: '2016–2018 Facelift (Executive / Design) with 80,000–130,000 km and documented Toyota Hybrid Health Checks (€9,500–€12,200).',
            de: 'Facelift 2016–2018 (Executive / Edition-S+) mit 80.000–130.000 km und lückenlosem Hybrid-Health-Check (9.500–12.200 €).',
            ru: 'Рестайлинг 2016–2018 гг. с пробегом 80–130 тыс. км и историей проверки батареи у дилера (€9 500–12 200).'
          },
          outlook3to5yr: {
            en: 'Flattening depreciation floor (~€6,200–€7,400 in 3–5 yrs). Hybrid city compliance keeps Auris Hybrid values noticeably firmer than diesel compacts.',
            de: 'Sehr flacher Wertverlust-Boden (ca. 6.200–7.400 € in 3–5 Jahren). Umweltzonen-Tauglichkeit hält den Hybrid deutlich stabiler als Diesel.',
            ru: 'Пологая кривая снижения цены (около €6 200–7 400 через 3–5 лет). Спрос на надёжные гибриды удерживает ликвидность заметно лучше дизелей.'
          }
        },
        watchoutExtra: {
          en: [
            'HV NiMH traction battery cells age after ~12–15 years or 200,000+ km (plan ~€1,600–€2,400 for replacement or refurbishment).',
            'Under-seat battery cooling fan can overheat if the intake grille becomes clogged with dust and lint.'
          ],
          de: [
            'NiMH-Hybridbatterie altert nach ca. 12–15 Jahren bzw. über 200.000 km (ca. 1.600–2.400 € für Tausch oder Aufbereitung einplanen).',
            'Lüftungsgitter der Batterie unter der Rücksitzbank kann bei starker Verschmutzung zu Überhitzung führen.'
          ],
          ru: [
            'Тяговая NiMH-батарея постепенно деградирует после 12–15 лет или 200+ тыс. км (замена или восстановление около €1 600–2 400).',
            'Вентилятор охлаждения батареи под задним сиденьем перегревается, если фильтр и решётка забиты пылью.'
          ]
        }
      },
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 10%', note: 'Simple chain-driven atmospheric petrols with very few mechanical defects' },
            { source: 'ADAC Pannenstatistik', value: 'Highly Reliable', note: 'Zero turbo, zero dual-mass flywheel & simple port fuel injection' },
            { source: 'WhatCar? Survey', value: '96.8% Reliability', note: 'Low-cost predictable servicing and rare unplanned garage visits' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 10 %', note: 'Schlichte Sauger mit Steuerkette und sehr geringer Mängelquote' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Kein Turbolader, kein ZMS und unkomplizierte Saugrohreinspritzung' },
            { source: 'WhatCar? Umfrage', value: '96,8 % Zuverlässigkeit', note: 'Günstige, planbare Wartung ohne teure Überraschungsreparaturen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-10%', note: 'Простые цепные атмосферники с минимальным количеством отказов' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Нет турбины, двухмассового маховика и капризного прямого впрыска' },
            { source: 'Рейтинг WhatCar?', value: '96,8% надёжности', note: 'Недорогое обслуживание и редкие внеплановые визиты на СТО' }
          ]
        },
        extendedChecks: {
          en: [
            'Check clutch bite point and listen for Valvematic actuator clicking or timing-chain rattle on cold startup.',
            'Inspect rear trailing-arm bushes and shock absorbers for leaks on higher-mileage urban examples.',
            'Verify 10,000–15,000 km oil history (prevents piston-ring carbon on 1.33L city cars).',
            'Test all 6 manual gears smoothly and confirm A/C compressor blows cold immediately.'
          ],
          de: [
            'Kupplungsdruckpunkt prüfen und beim Kaltstart auf ruhigen Kettenlauf sowie unauffälliges Valvematic-Geräusch achten.',
            'Hinterachslager und Stoßdämpfer bei höheren Stadt-Laufleistungen auf Ölverlust kontrollieren.',
            'Ölwechsel-Intervalle (10.000–15.000 km) prüfen — schützt beim 1.33 vor verkokten Kolbenringen.',
            'Alle 6 Schaltgänge sauber durchschalten und schnelle Kühlleistung der Klimaanlage testen.'
          ],
          ru: [
            'Проверить ход сцепления и послушать холодный пуск на отсутствие стука цепи ГРМ или привода Valvematic.',
            'Осмотреть задние сайлентблоки и амортизаторы на сухость при городских пробегах.',
            'Убедиться в замене масла раз в 10–15 тыс. км (критично для чистоты колец на моторе 1.33).',
            'Проверить чёткость включения всех 6 передач МКПП и быстрое охлаждение кондиционера.'
          ]
        },
        savingsNote: {
          en: 'Higher fuel burn than the Hybrid, but low buy-in price and zero complex turbo/DPF/battery parts keep surprise repair risk near zero.',
          de: 'Etwas mehr Verbrauch als der Hybrid, aber günstiger Kaufpreis und fehlende Turbo-/DPF-Teile halten unerwartete Reparaturen extrem niedrig.',
          ru: 'Расход выше, чем у гибрида, но низкая цена покупки и отсутствие турбины, DPF и батареи сводят риск дорогих поломок к минимуму.'
        },
        market: {
          supplyDemand: {
            en: 'Steady budget-buyer demand for clean manual 1.6 Valvematic examples; 1.33 models attract entry-level city commuters.',
            de: 'Stabile Nachfrage nach gepflegten 1.6 Valvematic-Schaltern; der 1.33 ist ein gefragter, günstiger Stadt- und Einstiegswagen.',
            ru: 'Стабильный спрос на простые атмосферные версии с МКПП; особенно ценят 1.6 Valvematic за баланс цены и простоты.'
          },
          sweetSpot: {
            en: '2014–2017 1.6 Valvematic (6-MT) under 125,000 km with annual oil records (€7,200–€9,000).',
            de: '2014–2017 1.6 Valvematic (6-Gang) unter 125.000 km mit jährlichen Ölwechseln (7.200–9.000 €).',
            ru: '2014–2017 гг. 1.6 Valvematic (6-ст. МКПП) с пробегом до 125 000 км и историей ТО (€7 200–9 000).'
          },
          outlook3to5yr: {
            en: 'Gradual drop toward a €4,500–€5,800 budget floor in 3–5 yrs; simple petrol mechanics make resale easy to private buyers.',
            de: 'Ruhiger Rückgang Richtung 4.500–5.800 € Boden in 3–5 Jahren — einfache Benzintechnik bleibt im Privatverkauf gefragt.',
            ru: 'Плавное снижение к уровню €4 500–5 800 за 3–5 лет — простой атмосферник всегда легко продать частному покупателю.'
          }
        },
        watchoutExtra: {
          en: [
            'Short-trip 1.33L cars with long oil intervals can develop piston-ring oil consumption over higher mileages.',
            'Modest low-rpm torque requires downshifting for confident highway overtakes or steep motorway grades.'
          ],
          de: [
            'Kurzstrecken-1.33er mit überzogenen Ölwechseln neigen bei hoher Laufleistung zu erhöhtem Ölverbrauch über die Kolbenringe.',
            'Geringes Drehmoment bei niedrigen Drehzahlen erfordert vor Autobahnsprints oder Steigungen häufiges Herunterschalten.'
          ],
          ru: [
            'На моторах 1.33 после городской езды с редкой заменой масла возможен угар масла из-за залегания колец.',
            'Невысокая тяга на низах требует активных переключений на пониженную передачу при обгонах на трассе.'
          ]
        }
      },
      'petrol-turbo': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average', note: 'Newer 2015–2018 facelift platform with solid chassis & brake pass rates' },
            { source: 'ADAC Pannenstatistik', value: 'Solid (Check Plugs/Coils)', note: 'Reliable overall; watch early direct-injection carbon & coil packs' },
            { source: 'WhatCar? Survey', value: '94.2% Reliability', note: 'Well-sorted small turbo petrol when serviced on strict 10–12k intervals' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich', note: 'Jüngeres 2015–2018 Facelift-Chassis mit soliden Prüfquoten' },
            { source: 'ADAC Pannenstatistik', value: 'Solide (Kerzen/Spulen)', note: 'Insgesamt verlässlich; Direkteinspritzung braucht frische Kerzen & Öl' },
            { source: 'WhatCar? Umfrage', value: '94,2 % Zuverlässigkeit', note: 'Ausgereifter kleiner Turbo bei strengen 10–12-Tkm-Ölwechseln' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего', note: 'Свежий рестайлинг 2015–2018 гг. с крепкой ходовой и тормозами' },
            { source: 'ADAC Pannenstatistik', value: 'Хорошо (свечи/катушки)', note: 'Надёжен в целом; прямой впрыск любит качественное топливо и масло' },
            { source: 'Рейтинг WhatCar?', value: '94,2% надёжности', note: 'Удачный малолитражный турбомотор при ТО каждые 10–12 тыс. км' }
          ]
        },
        extendedChecks: {
          en: [
            'Verify 10,000–12,000 km synthetic oil history and check for hesitation under full-throttle boost from 1,800 rpm.',
            'Inspect turbocharger coolant lines and plastic thermostat housing for dried coolant residue.',
            'On Multidrive S CVT models, test smooth uphill creeping and verify transmission fluid service if past 60k–80k km.',
            'Listen for intake valve rough idle when cold — direct-injection carbon builds up on short-trip cars.'
          ],
          de: [
            'Kurze 10.000–12.000-km-Ölwechsel prüfen und kräftiges Durchziehen ab 1.800/min ohne Aussetzer testen.',
            'Kühlmittelschläuche am Turbolader und Thermostatgehäuse auf getrocknete Rückstände kontrollieren.',
            'Bei Multidrive-S-CVT sanftes Anrollen am Berg prüfen und Getriebeöl-Service ab 60–80 Tkm erfragen.',
            'Kaltlauf auf ruhigen Leerlauf prüfen — häufiger Kurzstreckenbetrieb fördert Verkokung an den Ventilen.'
          ],
          ru: [
            'Проверить замены масла каждые 10–12 тыс. км и ровный разгон с 1 800 об/мин без провалов и рывков.',
            'Осмотреть патрубки охлаждения турбины и корпус термостата на отсутствие следов антифриза.',
            'На версиях с вариатором Multidrive S проверить плавность старта в горку и замену масла в КПП.',
            'Оценить стабильность холостого хода на холодную — при коротких поездках возможен нагар на впуске.'
          ]
        },
        savingsNote: {
          en: 'Low Euro 6 road tax (€88/yr) and ~6.2 L/100 km real fuel use keep annual running costs ~€200–€350 below older 1.6–2.0 NA petrol rivals.',
          de: 'Niedrige Euro-6-Steuer (ca. 88 €/J.) und rund 6,2 L/100 km sparen etwa 200–350 €/Jahr gegenüber älteren Saugmotoren.',
          ru: 'Низкий налог Euro 6 и расход около 6,2 л/100 км экономят примерно €200–350 в год по сравнению со старыми 1.6–2.0 атмосферниками.'
        },
        market: {
          supplyDemand: {
            en: 'Lower supply than Hybrid; sought by buyers wanting a newer 2015–2018 petrol Auris with Euro 6 compliance and low tax.',
            de: 'Seltener als der Hybrid; beliebt bei Käufern, die einen jüngeren Euro-6-Benziner mit kleiner Kfz-Steuer suchen.',
            ru: 'Встречается реже гибрида; интересен тем, кто ищет свежий рестайлинг 2015–2018 гг. с классом Euro 6 и низким налогом.'
          },
          sweetSpot: {
            en: '2016–2018 1.2 Turbo 6-MT under 100,000 km with full Toyota service history (€9,500–€11,500).',
            de: '2016–2018 1.2 Turbo (6-Gang) unter 100.000 km mit vollständigem Serviceheft (9.500–11.500 €).',
            ru: '2016–2018 гг. 1.2 Turbo (6-ст. МКПП) с пробегом до 100 000 км и полной историей ТО (€9 500–11 500).'
          },
          outlook3to5yr: {
            en: 'Moderate depreciation to ~€6,500–€7,800 in 3–5 yrs; younger production year supports resale, though slightly behind the Hybrid.',
            de: 'Moderater Wertverlust auf ca. 6.500–7.800 € in 3–5 Jahren — junges Baujahr stützt den Preis, knapp hinter dem Hybrid.',
            ru: 'Умеренное снижение до €6 500–7 800 за 3–5 лет: свежие годы выпуска поддерживают цену чуть ниже уровня гибрида.'
          }
        },
        watchoutExtra: {
          en: [
            'Direct-injection intake valves gradually build up carbon on short city commutes — strict 10–12k km oil changes & fresh spark plugs help.',
            'Plastic thermostat housing & turbo coolant lines can weep coolant past 100,000–130,000 km; check Multidrive S CVT fluid if automatic.'
          ],
          de: [
            'Direkteinspritzung begünstigt bei viel Kurzstrecke Verkokungen an den Einlassventilen — Ölwechsel alle 10–12 Tkm und frische Zündkerzen sind Pflicht.',
            'Thermostatgehäuse und Turbolader-Kühlmittelschläuche können ab 100–130 Tkm leicht schwitzen; beim Multidrive-S-CVT Ölwechsel prüfen.'
          ],
          ru: [
            'Прямой впрыск при частых коротких поездках приводит к нагару на впускных клапанах — важна замена масла раз в 10–12 тыс. км.',
            'Корпус термостата и трубки охлаждения турбины к 100–130 тыс. км могут подтекать; на вариаторе проверьте историю замены масла.'
          ]
        }
      },
      diesel: {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid (High Mileage)', note: '1.4/2.0 Toyota diesels hold up well; watch DPF & EGR on short-trip cars' },
            { source: 'ADAC Pannenstatistik', value: 'Good Highway Record', note: 'Dependable on long commutes; 1.6 D-4D (BMW N47) needs chain/EGR checks' },
            { source: 'WhatCar? Survey', value: '91.5% Reliability', note: 'Lower than Auris Hybrid mostly due to DPF, EGR & DMF wear above 150k km' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide (Langstrecke)', note: '1.4/2.0-Diesel sind robust; Kurzstrecken setzen DPF & AGR spürbar zu' },
            { source: 'ADAC Pannenstatistik', value: 'Gut auf Langstrecke', note: 'Stark auf der Autobahn; beim 1.6 D-4D (N47) Steuerkette & AGR prüfen' },
            { source: 'WhatCar? Umfrage', value: '91,5 % Zuverlässigkeit', note: 'Etwas hinter dem Hybrid durch DPF-, AGR- & ZMS-Verschleiß ab 150 Tkm' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Крепкий на трассе', note: 'Дизели 1.4/2.0 надёжны на дальняке; городские пробеги забивают DPF и EGR' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен на шоссе', note: 'Хорош для трассы; на 1.6 D-4D (BMW N47) важен осмотр цепи ГРМ и EGR' },
            { source: 'Рейтинг WhatCar?', value: '91,5% надёжности', note: 'Ниже гибрида из-за ресурса сажевого фильтра, EGR и двухмассового маховика' }
          ]
        },
        extendedChecks: {
          en: [
            'Check tailpipe soot, active DPF regeneration history, and verify the car was driven on highways rather than short city hops.',
            'Listen at idle with clutch pressed vs. released for dual-mass flywheel chatter/knocking.',
            'On 1.6 D-4D (BMW N47), listen closely near the firewall for timing-chain rattle; on 2.0 D-4D watch injector & head-gasket health.',
            'Verify clean cold start with zero white/blue smoke and crisp boost delivery from 1,750 rpm.'
          ],
          de: [
            'Auspuffendrohr (Ruß), DPF-Regenerationen und Langstrecken-Nutzung im Vorbesitz prüfen.',
            'Im Leerlauf Kupplung treten und lösen — auf Klappern des Zweimassenschwungrads achten.',
            'Beim 1.6 D-4D (BMW N47) an der Spritzwand auf Kettengeräusche hören; beim 2.0 D-4D Injektoren & Kühlwasser prüfen.',
            'Sauberen Kaltstart ohne Blaurauch und gleichmäßigen Turboschub ab ca. 1.750/min testen.'
          ],
          ru: [
            'Проверить выхлоп на сажу и убедиться, что машина регулярно ездила по трассе (для прожига DPF).',
            'На холостых выжать и отпустить сцепление — не должно быть стука двухмассового маховика.',
            'На 1.6 D-4D (BMW N47) послушать цепь со стороны моторного щита; на 2.0 D-4D проверить форсунки и антифриз.',
            'Проверить чистый холодный пуск без дыма и уверенную тягу турбины с 1 750 об/мин.'
          ]
        },
        savingsNote: {
          en: 'Low ~4.9–5.5 L/100 km fuel burn pays off above 20,000 km/yr, but higher diesel road tax and DPF/DMF upkeep narrow the savings vs. Auris Hybrid.',
          de: 'Niedriger Verbrauch (4,9–5,5 L/100 km) lohnt ab >20.000 km/J., doch höhere Steuer und DPF/ZMS reduzieren den Vorteil gegenüber dem Hybrid.',
          ru: 'Экономичный расход (4,9–5,5 л/100 км) выгоден при пробегах свыше 20 тыс. км/год, но более высокий налог и уход за DPF/маховиком сближают итог с гибридом.'
        },
        market: {
          supplyDemand: {
            en: 'Lower buyer demand in cities due to Euro 5/diesel restrictions, making clean highway Auris diesels noticeably cheaper to buy upfront.',
            de: 'Geringere Nachfrage in Großstädten (Euro 5 / Fahrverbote) macht gepflegte Langstrecken-Diesel beim Kaufpreis deutlich günstiger.',
            ru: 'Сниженный спрос в городах из-за эко-норм делает дизельный Auris ощутимо дешевле при покупке на вторичном рынке.'
          },
          sweetSpot: {
            en: '1.4 D-4D (simple & frugal) or documented Euro 6 1.6 D-4D highway cars around 110,000–150,000 km (€6,800–€8,800).',
            de: 'Sparsamer 1.4 D-4D oder gepflegter Euro-6 1.6 D-4D mit Langstrecken-Historie (110–150 Tkm, 6.800–8.800 €).',
            ru: 'Экономичный 1.4 D-4D или ухоженный трассовый 1.6 D-4D (Euro 6) с пробегом 110–150 тыс. км (€6 800–8 800).'
          },
          outlook3to5yr: {
            en: 'Drops faster toward €4,000–€5,400 over 3–5 yrs as urban buyers favor Hybrid/Petrol; best held long-term by high-mileage commuters.',
            de: 'Fällt in 3–5 Jahren stärker Richtung 4.000–5.400 € — lohnt sich vor allem, wenn man den Wagen als Vielfahrer bis zum Ende nutzt.',
            ru: 'Дешевеет быстрее до €4 000–5 400 за 3–5 лет из-за перекоса спроса к гибридам и бензину — выгоднее брать для долгих пробегов.'
          }
        },
        watchoutExtra: {
          en: [
            'DPF soot and EGR valve clogging accelerate sharply if driven mostly on short urban trips.',
            'Dual-mass flywheel wear (~150–190k km) and firewall-side timing chain wear on 1.6 D-4D (BMW N47) require careful listening.'
          ],
          de: [
            'DPF-Partikelfilter und AGR-Ventil setzen sich bei häufigem Kurzstreckenbetrieb schnell zu.',
            'Zweimassenschwungrad ab ca. 150–190 Tkm sowie die rückseitige Steuerkette beim 1.6 D-4D (N47) vor dem Kauf genau prüfen.'
          ],
          ru: [
            'Сажевый фильтр DPF и клапан EGR быстро забиваются при регулярных коротких поездках по городу.',
            'К 150–190 тыс. км возможен износ двухмассового маховика, а на 1.6 D-4D (BMW N47) важно проверить заднюю цепь ГРМ.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (E180)', de: 'EU / DE Ausstattungslinien (E180)', ru: 'Европейские комплектации (E180)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2015+ facelift condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Facelift-Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: '2015 Facelift (E180 II) Cabin Upgrades', de: 'Facelift-Upgrades ab 2015 (E180 II)', ru: 'Обновления салона рестайлинга 2015 (E180 II)' },
      faceliftKicker: { en: '2015+ Refresh', de: 'Facelift 2015+', ru: 'Рестайлинг 2015+' },
      trims: [
        {
          id: 'cool',
          tierClass: 'tier-1',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Cool', de: 'Cool', ru: 'Cool' },
          delta: { en: '-€900 – €1,300', de: '-900 – 1.300 €', ru: '-€900 – €1 300' },
          isSweetSpot: false,
          summary: {
            en: 'Fleet-spec starter trim focused strictly on reliability and low buy-in price.',
            de: 'Schlanke Einstiegs- und Flottenausstattung mit Fokus auf niedrigen Einstiegspreis.',
            ru: 'Базовая версия для автопарков с акцентом на минимальную цену входа.'
          },
          highlights: {
            en: ['15" / 16" steel wheels with covers', 'Manual A/C & basic audio', 'Halogen headlights & fabric seats'],
            de: ['15"/16"-Stahlfelgen mit Radkappen', 'Manuelle Klimaanlage & Basis-Radio', 'Halogen-Scheinwerfer & Stoffsitze'],
            ru: ['Штампованные диски 15"/16"', 'Ручной кондиционер и базовое аудио', 'Галогеновые фары и тканевый салон']
          }
        },
        {
          id: 'life',
          tierClass: 'tier-2',
          tier: { en: 'Essential', de: 'Einstieg', ru: 'Стандарт' },
          name: { en: 'Life', de: 'Life', ru: 'Life' },
          delta: { en: '-€400 – €700', de: '-400 – 700 €', ru: '-€400 – €700' },
          isSweetSpot: false,
          summary: {
            en: 'Step-up daily trim adding automatic climate control, fog lamps, and steering-wheel audio controls.',
            de: 'Solide Einstiegsstufe mit Klimaautomatik, Nebelscheinwerfern und Multifunktionslenkrad.',
            ru: 'Практичная начальная ступень с климат-контролем, противотуманками и кнопками на руле.'
          },
          highlights: {
            en: ['Single-zone auto climate & fog lamps', 'Multifunction steering wheel & Bluetooth', 'LED daytime running lights'],
            de: ['Klimaautomatik & Nebelscheinwerfer', 'Multifunktionslenkrad & Bluetooth', 'LED-Tagfahrlicht'],
            ru: ['Климат-контроль и противотуманные фары', 'Мультируль и Bluetooth', 'Светодиодные ходовые огни']
          }
        },
        {
          id: 'comfort',
          tierClass: 'tier-3',
          tier: { en: 'Core Daily', de: 'Komfort', ru: 'Комфорт' },
          name: { en: 'Comfort', de: 'Comfort', ru: 'Comfort' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: false,
          summary: {
            en: 'Most common European trim covering everyday dual-zone climate, alloy, and touchscreen essentials.',
            de: 'Meistverkaufte EU-Ausstattung mit 2-Zonen-Klimaautomatik, Alufelgen und Touchscreen.',
            ru: 'Самая распространённая европейская версия с 2-зонным климатом, литыми дисками и экраном.'
          },
          highlights: {
            en: ['16" alloy wheels & dual-zone climate', 'Toyota Touch 2 (7") + rear camera', 'Power-folding mirrors & cruise option'],
            de: ['16"-Leichtmetallfelgen & 2-Zonen-Klima', 'Toyota Touch 2 (7") + Rückfahrkamera', 'Elektrisch anklappbare Spiegel'],
            ru: ['Литые диски 16" и 2-зонный климат', 'Toyota Touch 2 (7") + камера заднего вида', 'Электроскладывание зеркал']
          }
        },
        {
          id: 'edition-s',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Edition-S', de: 'Edition-S', ru: 'Edition-S' },
          delta: { en: '+€500 – €900', de: '+500 – 900 €', ru: '+€500 – €900' },
          isSweetSpot: true,
          summary: {
            en: 'Best used-market value — adds key comfort options and sharper looks without Executive markup.',
            de: 'Bestes Preis-Leistungs-Verhältnis — wichtige Komfort-Extras ohne den vollen Executive-Aufpreis.',
            ru: 'Лучшее соотношение цены и оснащения на вторичке без переплаты за топ-версию.'
          },
          highlights: {
            en: ['17" two-tone alloys & privacy glass', 'Heated front seats & cruise control', 'Leather steering wheel & sportier trim'],
            de: ['17"-Zweifarbfelgen & Privacy-Verglasung', 'Sitzheizung vorn & Tempomat', 'Lederlenkrad & sportlichere Dekore'],
            ru: ['Двухцветные диски 17" и тонировка', 'Подогрев сидений и круиз-контроль', 'Кожаный руль и более выразительный декор']
          }
        },
        {
          id: 'executive',
          tierClass: 'tier-6',
          tier: { en: 'Premium', de: 'Executive', ru: 'Бизнес' },
          name: { en: 'Executive', de: 'Executive', ru: 'Executive' },
          delta: { en: '+€1,000 – €1,600', de: '+1.000 – 1.600 €', ru: '+€1 000 – €1 600' },
          isSweetSpot: false,
          summary: {
            en: 'High-spec Auris bringing Bi-LED lighting, keyless entry, and upgraded cabin materials.',
            de: 'Hochwertige Top-Linie mit Bi-LED-Licht, Smart-Key und aufgewerteten Sitzbezügen.',
            ru: 'Богатая комплектация с Bi-LED-оптикой, бесключевым доступом и улучшенной отделкой.'
          },
          highlights: {
            en: ['Bi-LED headlights & Smart Entry', 'Half-leather / Alcantara bolsters', 'Parking sensors & SIPA self-park'],
            de: ['Bi-LED-Scheinwerfer & Smart-Key', 'Teilleder / Alcantara-Sitzwangen', 'Parksensoren & Einparkautomatik (SIPA)'],
            ru: ['Фары Bi-LED и бесключевой доступ', 'Комбинированный салон кожа/алькантара', 'Парктроники и автопарковщик SIPA']
          }
        },
        {
          id: 'lounge',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Topmodell', ru: 'Флагман' },
          name: { en: 'Lounge', de: 'Lounge', ru: 'Lounge' },
          delta: { en: '+€1,400 – €2,100', de: '+1.400 – 2.100 €', ru: '+€1 400 – €2 100' },
          isSweetSpot: false,
          summary: {
            en: 'Rare top flagship trim with full leather upholstery, navigation, and full safety/glass roof options.',
            de: 'Seltene Luxus-Endstufe mit Vollleder, Navigation sowie häufigem Panorama-Glasdach.',
            ru: 'Редкий флагманский пакет с полностью кожаным салоном, навигацией и панорамной крышей.'
          },
          highlights: {
            en: ['Full leather seats & lumbar support', 'Touch 2 & Go navigation + upgraded audio', 'Panoramic Skyview roof & full Safety Sense'],
            de: ['Vollleder-Sitze mit Lordosenstütze', 'Toyota Touch 2 & Go Navi + Klangpaket', 'Panorama-Glasdach & volles Safety Sense'],
            ru: ['Кожаный салон с поясничной поддержкой', 'Навигация Touch 2 & Go и улучшенный звук', 'Панорама Skyview и полный Safety Sense']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Toyota Touch 2 (7") + Rear Camera', de: 'Toyota Touch 2 (7") + Rückfahrkamera', ru: 'Toyota Touch 2 (7") + камера' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Bi-LED Headlights', de: 'Bi-LED-Scheinwerfer', ru: 'Светодиодные фары Bi-LED' }, vals: ['no', 'no', 'no', 'opt', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'opt', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Smart Entry & Push-Button Start', de: 'Smart-Key & Startknopf', ru: 'Бесключевой доступ и кнопка старта' }, vals: ['no', 'no', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Parking Sensors & Self-Park (SIPA)', de: 'Parksensoren & Einparkhilfe (SIPA)', ru: 'Парктроники и автопарковщик (SIPA)' }, vals: ['no', 'no', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Toyota Safety Sense (2015+ Facelift)', de: 'Toyota Safety Sense (ab Facelift 2015)', ru: 'Toyota Safety Sense (рестайлинг 2015+)' }, vals: ['opt', 'opt', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Panoramic Skyview Glass Roof / Full Leather', de: 'Panorama-Glasdach / Vollleder', ru: 'Панорамная крыша / Полная кожа' }, vals: ['no', 'no', 'no', 'opt', 'opt', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Logical physical climate knobs and clear steering-wheel buttons keep eyes on the road.',
          'Harder lower door plastics are durable and rattle-resistant, even on 150,000+ km cars.',
          '360 L luggage capacity with a flat load floor and well-shaped rear bench for two adults.'
        ],
        de: [
          'Logische Drehregler für Klima und klare Lenkradtasten ermöglichen blinde Bedienung.',
          'Robuste, klapperfreie Kunststoffe im unteren Türbereich halten auch über 150.000 km sauber.',
          '360 Liter Kofferraum mit ebener Ladefläche und gut nutzbarer Rückbank für zwei Erwachsene.'
        ],
        ru: [
          'Удобные физические регуляторы климата и понятные кнопки на руле не отвлекают от дороги.',
          'Жёсткий пластик в нижней части дверей износостоек и почти не скрипит даже после 150 000 км.',
          'Багажник объёмом 360 л с ровным полом и достойным запасом места на втором ряду для двоих взрослых.'
        ]
      },
      cabinByPowertrain: {
        hybrid: {
          en: '1.8 HSD Hybrid cabin features the signature blue shift-by-wire joystick, EV / ECO / PWR drive mode buttons, a Hybrid System Indicator instead of a rev counter, and an under-seat battery preserving the full 360 L cargo space.',
          de: 'Der 1.8 HSD Hybrid bietet den blauen Shift-by-Wire-Joystick, EV / ECO / PWR-Tasten, eine Hybrid-Systemanzeige statt Drehzahlmesser sowie die Batterie unter der Rückbank — ohne Verlust beim 360-Liter-Kofferraum.',
          ru: 'Гибрид 1.8 HSD отличается фирменным синим джойстиком e-CVT, кнопками EV / ECO / PWR, экономайзером вместо тахометра и батареей под задним диваном без ущерба для багажника (360 л).'
        },
        conventional: {
          en: 'Petrol and Diesel models use a conventional mechanical gear lever (5/6-speed manual or Multidrive S selector) paired with an analog tachometer and a slightly lower-mounted center console storage tray.',
          de: 'Benziner und Diesel nutzen einen klassischen Schalthebel (5/6-Gang-Schaltgetriebe bzw. Multidrive S) mit analogem Drehzahlmesser und etwas tiefer gesetzter Ablage in der Mittelkonsole.',
          ru: 'Бензиновые и дизельные версии оснащаются классическим рычагом КПП (5/6-ст. МКПП или вариатор), аналоговым тахометром и более глубокой нишей на центральной консоли.'
        }
      },
      faceliftUpgrades: {
        en: [
          'Redesigned 2015+ dashboard swaps flat vertical plastic for softer-touch trim and cleaner silver accents.',
          'Upgraded 4.2" colour TFT driver display between the dials and flush capacitive-edge Toyota Touch 2 unit.',
          'Noticeably thicker firewall & wheel-arch sound insulation cuts motorway wind and tyre roar.',
          'Available Toyota Safety Sense adds autonomous pre-collision braking, lane alert, and road-sign assist.'
        ],
        de: [
          'Überarbeitetes Armaturenbrett ab 2015 mit weicheren Oberflächen, klareren Zierleisten und neuer Mittelkonsole.',
          'Schärferes 4,2"-TFT-Farbdisplay zwischen den Rundinstrumenten sowie bündiges Toyota Touch 2 Infotainment.',
          'Spürbar verbesserte Stirnwand- und Radhausdämmung senkt Wind- und Abrollgeräusche auf der Autobahn.',
          'Optionales Toyota Safety Sense ergänzt Notbremsassistent, Spurhaltewarner und Verkehrszeichenerkennung.'
        ],
        ru: [
          'Обновлённая передняя панель 2015+ получила более мягкую отделку, аккуратные вставки и новую консоль.',
          'Цветной экран 4,2" на приборной панели и обновлённая мультимедиа Toyota Touch 2 с сенсорной рамкой.',
          'Усиленная шумоизоляция моторного щита и колёсных арок заметно снизила гул на трассе.',
          'Появился комплекс Toyota Safety Sense: автоторможение, контроль полосы и распознавание знаков.'
        ]
      }
    }
  }
});