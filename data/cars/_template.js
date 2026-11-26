// AutoDuel Golden Vehicle Template — Copy to data/cars/<brand>-<model>-<chassis>.js
// Run `scripts/build-manifest.ps1 -NextSlot` for the next free `number` and `gridOrder`.
// Never load _template.js in index.html or CAR_ROSTER; scripts ignore files prefixed with `_`.
registerAutoDuelVehicle({
  roster: {
    id: '<brand>-<model>-<chassis>',
    number: '16',
    carType: 'hatchback', // 'subcompact' | 'hatchback' | 'hot-hatch' | 'sedan' | 'suv'
    gridOrder: 16,
    gridLabel: 'Brand Model',
    yearMake: '2015-2020 BRAND',
    shortTitle: 'MODEL (CHASSIS)',
    fullName: '2015-2020 Brand Model (Chassis)',
    rarityClass: 'rarity-common', // 'rarity-legendary' | 'rarity-epic' | 'rarity-dependable' | 'rarity-common'
    drivetrain: 'FWD', // 'FWD' | 'RWD' | 'AWD'
    image: 'assets/<brand>-<model>-<chassis>.webp',
    defaultEngineId: '1.6-petrol',

    // Chassis-shared specs (combine with engine specOverrides to cover all 40 SUB_STAT_SPEC_ROWS keys)
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspMultiLink',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Balanced Everyday Comfort', de: 'Ausgewogener Alltagskomfort', ru: 'Сбалансированная подвеска' },
      highwayNoise: { en: '~69 dB · Quiet Cabin', de: '~69 dB · Ruhiger Innenraum', ru: '~69 дБ · Тихий салон' },
      cabinMaterials: { en: 'Soft-Touch Dash · Cloth Seats', de: 'Weiches Cockpit · Stoffsitze', ru: 'Мягкий пластик · Тканевый салон' },
      controls: '@physButtons',
      turningCircle: '10.8 m',
      visibility: { en: 'Clear Front · Thick Rear Pillars', de: 'Gute Frontsicht · Breite C-Säule', ru: 'Хороший обзор вперёд · Широкие стойки' },
      euroNcap: '★★★★★ (2015)',
      safetyTech: { en: '✓ ESP · ✓ 6 Airbags · ✓ AEB', de: '✓ ESP · ✓ 6 Airbags · ✓ Notbrems', ru: '✓ ESP · ✓ 6 подушек · ✓ AEB' },
      rearRoom: { en: 'Good Adult Legroom', de: 'Gute Beinfreiheit hinten', ru: 'Достаточно места сзади' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Rear Doors', de: '✓ 2× ISOFIX · Weiter Einstieg', ru: '✓ 2× ISOFIX · Широкий проём' },
      bootVolume: '420 L / 1,350 L',
      seatUtility: { en: '60/40 Split-Fold Rear Bench', de: '60/40 geteilt umklappbare Bank', ru: 'Спинка складывается 60/40' },
      payloadRoof: '490 kg · 75 kg Roof',
      driveline: 'FWD · Open Diff',
      chassisFeel: { en: 'Composed & Predictable', de: 'Sicher & Berechenbar', ru: 'Надёжная и предсказуемая' },
      tractionDiff: { en: 'FWD · Electronic Traction', de: 'FWD · Traktionskontrolle', ru: 'FWD · Электронная антипробуксовка' },
      braking1000: '~36.0 m',
      brakeSetup: '@discs4',
      valueRetention: '@retHigh',
      resaleDemand: '@demSteady'
    },

    // Chassis-shared engineering datasheet presets (use SPEC_DOSSIER_PRESETS + DOSSIER_TECH_LABELS keys)
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [{ k: 'damperSetup', v: { en: 'Comfort-Tuned McPherson / Multi-Link', de: 'Komfortables McPherson- / Mehrlenkerfahrwerk', ru: 'Комфортная многорычажная подвеска' } }],
          note: { en: 'Absorbs urban potholes calmly while remaining stable on highways.', de: 'Filtert Schlaglöcher ruhig weg und bleibt auf der Autobahn spurtreu.', ru: 'Спокойно отрабатывает неровности и уверенно держит трассу.' }
        },
        highwayNoise: {
          specs: [{ k: 'cabinNoise130', v: { en: '~69 dB(A) at 130 km/h', de: '~69 dB(A) bei 130 km/h', ru: '~69 дБ(А) при 130 км/ч' } }],
          note: { en: 'Relaxed motorway sound levels for its compact segment.', de: 'Angenehm ruhiges Geräuschniveau für diese Fahrzeugklasse.', ru: 'Комфортный уровень шума на трассе для своего класса.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [{ k: 'dashTrim', v: { en: 'Soft-Touch Upper Dash · Durable Switchgear', de: 'Soft-Touch-Armaturenbrett · Robuste Schalter', ru: 'Мягкая панель · Износостойкие кнопки' } }],
          note: { en: 'Clean switchgear ergonomics without distracting capacitive sliders.', de: 'Klare Ergonomie mit echten Tasten ohne nervige Touch-Leisten.', ru: 'Понятная эргономика с физическими кнопками.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: { specs: [{ k: 'turningDiam', v: '10.8 m' }, { k: 'bodyDimensions', v: '4,350 × 1,800 mm' }], note: { en: 'Easy urban U-turns and compact parking footprint.', de: 'Handlicher Wendekreis für enge Innenstädte.', ru: 'Удобный радиус разворота для города и парковок.' } },
        visibility: { specs: [{ k: 'sightlines', v: { en: 'Clear Front View · Thick C-Pillars', de: 'Klare Sicht vorn · Breite C-Säulen', ru: 'Хороший обзор вперёд · Широкие задние стойки' } }], note: { en: 'Rear parking sensors help compensate for thick C-pillars.', de: 'Parksensoren hinten gleichen die breiten C-Säulen aus.', ru: 'Задние парктроники помогают при парковке.' } }
      },
      safetyProtection: {
        euroNcap: { specs: [{ k: 'ncapOverall', v: '★★★★★ (2015)' }, { k: 'airbagsCount', v: { en: '6 Airbags', de: '6 Airbags', ru: '6 подушек' } }], note: { en: 'Solid crash structure with modern active-safety options.', de: 'Solide Sicherheitszelle mit modernen Assistenzsystemen.', ru: 'Крепкий кузов и достойная пассивная безопасность.' } },
        safetyTech: { specs: [{ k: 'activeAssists', v: { en: '✓ ESP · ✓ City AEB', de: '✓ ESP · ✓ City-Notbremsassistent', ru: '✓ ESP · ✓ Автоторможение AEB' } }], note: { en: 'Verify active safety sensor calibration after windshield repairs.', de: 'Nach Scheibentausch Assistenz-Kamera auf Kalibrierung prüfen.', ru: 'После замены стекла проверяйте калибровку камеры ассистентов.' } }
      },
      passengerSpaceErgonomics: {
        rearRoom: { specs: [{ k: 'wheelbase', v: '2,650 mm' }], note: { en: 'Comfortable rear seating for two adults.', de: 'Bequemer Platz im Fond für zwei Erwachsene.', ru: 'Комфортный второй ряд для двух взрослых.' } },
        isofixEntry: { specs: [{ k: 'isofixAccess', v: { en: '✓ 2× ISOFIX · Wide Rear Doors', de: '✓ 2× ISOFIX · Große Türöffnung', ru: '✓ 2× ISOFIX · Удобные двери' } }], note: { en: 'Child seats install easily without awkward twisting.', de: 'Kindersitze lassen sich bequem und rückenschonend montieren.', ru: 'Устанавливать детские кресла легко и удобно.' } }
      },
      interiorBootSpace: {
        bootVolume: { specs: [{ k: 'bootUpDown', v: '420 L / 1,350 L' }], note: { en: 'Square luggage bay with a low loading lip.', de: 'Rechteckiger Kofferraum mit niedriger Ladekante.', ru: 'Правильная форма багажника с низким порогом.' } },
        seatUtility: { specs: [{ k: 'foldingMech', v: { en: '60/40 Split-Fold Rear Bench', de: '60/40 umklappbare Rückbank', ru: 'Складывание спинки 60/40' } }], note: { en: 'Rear backrest folds cleanly for bulky cargo.', de: 'Rückbank lässt sich sauber für sperriges Gepäck umlegen.', ru: 'Спинки складываются для перевозки длинномеров.' } }
      },
      payloadTowing: {
        payloadRoof: { specs: [{ k: 'maxPayload', v: '490 kg' }, { k: 'roofLoad', v: '75 kg' }], note: { en: 'Good roof-box and holiday luggage reserve.', de: 'Gute Reserven für Dachbox und Urlaubsgepäck.', ru: 'Хороший запас по нагрузке и для бокса на крышу.' } },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: { specs: [{ k: 'kerbWeight', v: '1,290 kg' }], note: { en: 'Safe, neutral front-drive balance for daily driving.', de: 'Sicheres, neutrales Fahrverhalten im Alltag.', ru: 'Надёжная и понятная управляемость.' } },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },

    // Personal "You..." Buyer Fit cards (combine with SHARED_BUYER_FIT_CARDS)
    sharedBuyerFit: {
      cards: {
        templateSimpleCommute: {
          en: 'You want stress-free daily commuting: Smooth controls and modest fuel bills keep weekly running costs predictable.',
          de: 'Du suchst einen entspannten Alltagsbegleiter: Leichte Bedienung und überschaubarer Verbrauch halten Kosten niedrig.',
          ru: 'Тебе нужна беспроблемная машина на каждый день: Мягкое управление и умеренный расход экономят бюджет.'
        },
        templateModestSprint: {
          en: 'You prefer effortless autobahn overtaking: The naturally aspirated base engine needs downshifts under heavy load.',
          de: 'Du willst souveränen Autobahn-Durchzug ohne Schalten: Der Basis-Sauger braucht bergauf spürbar Drehzahl.',
          ru: 'Ты любишь уверенный разгон без понижения передач: Атмосферному мотору на трассе нужны высокие обороты.'
        }
      }
    },
    buyerFitGroups: {
      'petrol-na': {
        summary: {
          en: 'Practical, uncomplicated everyday compact focused on predictable running costs and easy ergonomics.',
          de: 'Praktischer, unkomplizierter Alltagswagen mit Fokus auf planbare Kosten und gute Ergonomie.',
          ru: 'Практичный и простой городской автомобиль с понятными расходами на содержание.'
        },
        ideal: ['templateSimpleCommute', 'globalPetrolCityZones'],
        skip: ['templateModestSprint']
      }
    },

    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Solid Galvanized Shell — Check Lower Wishbone Bushes',
          strengths: ['Galvanized steel body panels resist surface rust well across central Europe.'],
          watchouts: ['Inspect front wishbone rear bushes and rear brake dust shields for winter road-salt wear.'],
          beforeYouBuy: ['Inspect sills and rear subframe underneath with a flashlight.']
        },
        de: {
          headline: 'Solide verzinkte Basis — Querlenkerbuchsen prüfen',
          strengths: ['Verzinkte Karosserie zeigt bei normaler Pflege kaum Rostprobleme.'],
          watchouts: ['Hintere Querlenkerlager und Bremsankerbleche auf Streusalz-Verschleiß prüfen.'],
          beforeYouBuy: ['Schweller und Hinterachsträger auf einer Hebebühne oder mit Taschenlampe prüfen.']
        },
        ru: {
          headline: 'Крепкий оцинкованный кузов — проверьте сайлентблоки',
          strengths: ['Оцинкованные кузовные панели хорошо противостоят коррозии при регулярной мойке.'],
          watchouts: ['Осмотрите сайлентблоки передних рычагов и защитные щитки тормозов на следы реагентов.'],
          beforeYouBuy: ['Осмотрите пороги и задний подрамник на подъёмнике или с фонариком.']
        }
      }
    },
    dossierGroups: {
      'standard-chassis': ['buildQualityRust']
    },

    // Optional per-car gearbox catalog (referenced by engine.gearboxes[] for Manual vs Automatic splits)
    sharedGearboxes: {
      '6-mt': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'OEM-MT6 · Single-Clutch Manual', de: 'OEM-MT6 · Schaltgetriebe', ru: 'OEM-MT6 · Механика' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' }
      },
      '6-at': {
        category: 'automatic',
        label: { en: '6-Speed Torque Auto', de: '6-Stufen-Wandlerautomatik', ru: '6-ст. Автомат' },
        shortLabel: { en: '6-AT', de: '6-AT', ru: '6-АКПП' },
        subLabel: { en: 'OEM-AT6 · Hydraulic Torque Converter', de: 'OEM-AT6 · Wandlerautomatik', ru: 'OEM-AT6 · Классический гидроавтомат' },
        specOverrides: { gearbox: '@auto6', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: { score: 8.0, badges: { en: ['Smooth Torque Auto'], de: ['Sanfte Wandlerautomatik'], ru: ['Плавный гидроавтомат'] } },
          accelerationOvertaking: { score: 5.5, badges: { en: ['11.2s 0–100 km/h'], de: ['11,2s 0–100 km/h'], ru: ['11,2с до 100 км/ч'] } },
          efficiencyFuel: { score: 7.0, badges: { en: ['7.1 L/100 km Real'], de: ['7,1 L/100 km real'], ru: ['7,1 л/100 км'] } }
        },
        dossier: {
          en: {
            headline: 'Durable 6-Speed Torque Converter — Refresh Fluid Every 60,000 km',
            strengths: ['Smooth urban shifts with no dual-clutch judder or dry-clutch wear.'],
            watchouts: ['Delayed cold engagement indicates aged ATF fluid.'],
            beforeYouBuy: ['Test Drive-to-Reverse engagement smoothness when warm.']
          },
          de: {
            headline: 'Robuste 6-Stufen-Wandlerautomatik — Ölwechsel alle 60.000 km',
            strengths: ['Sanftes Anfahren ohne Doppelkupplungs-Ruckeln im Stau.'],
            watchouts: ['Verzögertes Einlegen bei kaltem Öl deutet auf überaltertes ATF hin.'],
            beforeYouBuy: ['Warmgefahrenen Wechsel zwischen D und R auf weiche Schaltung prüfen.']
          },
          ru: {
            headline: 'Надёжный 6-ст. гидроавтомат — меняйте масло каждые 60 000 км',
            strengths: ['Плавные переключения в пробках без рывков сухого робота.'],
            watchouts: ['Задержки включения на холодную указывают на старую жидкость ATF.'],
            beforeYouBuy: ['На прогретом авто проверьте плавность переключения между D и R.']
          }
        },
        repairGuideExtra: {
          routine: [
            {
              when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' },
              action: { en: 'Automatic transmission fluid (ATF) drain & fill', de: 'Automatikgetriebeöl-Wechsel (ATF)', ru: 'Частичная замена масла АКПП (ATF)' },
              cost: '€240–€360'
            }
          ],
          critical: []
        }
      }
    },

    engines: [
      {
        id: '1.6-petrol',
        defaultGearboxId: '6-mt',
        gearboxes: [
          { id: '6-mt', isDefault: true },
          {
            id: '6-at',
            estUsedPrice: '€11,300',
            specOverrides: {
              sprint0100: '11.2 s',
              topSpeed: '190 km/h',
              realWorldFuel: '7.1 L/100km (~€12.20/100km)'
            }
          }
        ],
        buyerFitGroup: 'petrol-na',
        dossierGroup: 'standard-chassis',
        isDefault: true,
        fuelType: 'petrol',
        hp: 125,
        drivetrain: 'FWD',
        engineBadge: '1.6L Petrol • 125 HP',
        engineSubLabel: {
          en: '1.6L Naturally Aspirated (05/2015–08/2020) • 6-MT • 155 Nm',
          de: '1.6L Sauger (05/2015–08/2020) • 6-Gang • 155 Nm',
          ru: '1.6L Атмосферник (05/2015–08/2020) • 6-МКПП • 155 Н·м'
        },
        originalMsrp: { en: '€21,900 New', de: '21.900 € Neu', ru: '€21 900 новый' },
        estUsedPrice: '€10,500',
        perkLabel: { en: 'Proven NA Simplicity • Low Service Bills', de: 'Robuster Sauger • Günstige Wartung', ru: 'Надёжный атмосферник • Недорогое ТО' },
        remarkablePositives: {
          en: ['Proven naturally aspirated engine', 'Comfortable everyday suspension'],
          de: ['Bewährter Sauger ohne Turbo-Risiko', 'Komfortables Alltagsfahrwerk'],
          ru: ['Простой атмосферный мотор', 'Комфортная подвеска для города']
        },
        notableNegatives: {
          en: ['Modest highway overtaking punch'],
          de: ['Zurückhaltender Durchzug auf der Autobahn'],
          ru: ['Спокойная динамика на трассе']
        },
        specOverrides: {
          engineName: { en: '1.6L I4 Naturally Aspirated', de: '1.6L Reihenvierzylinder Sauger', ru: '1.6L R4 Атмосферный' },
          forcedInduction: '@na',
          injection: '@port',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,200 kg',
          sprint0100: '10.6 s',
          topSpeed: '195 km/h',
          peakTorque: '155 Nm @ 4,200 rpm',
          passingPunch: { en: 'Smooth · Needs Downshifts', de: 'Gleichmäßig · Braucht Drehzahl', ru: 'Ровная · Нужны обороты' },
          realWorldFuel: '6.6 L/100km (~€11.50/100km)',
          tankRange: '50 L (~750 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierLowMod',
          timingDrive: '@chain',
          serviceWear: '@tierLow'
        },
        // Scoring Rubric (0.0–10.0) & Intra-Pillar Weights (each pillar sums to 100%):
        //   9.5–10.0 = Industry benchmark | 8.5–9.4 = Segment leader | 7.5–8.4 = Strong/above average
        //   6.0–7.4  = Honest class average | 4.5–5.9 = Noticeable compromise | 2.0–4.4 = Major €3k–€6k risk
        //   Weights: Perf (30/30/25/15) | Rel (45/25/15/15) | Cost (35/30/20/15) | Comf (30/25/25/20) | Space (40/40/20)
        subStats: {
          powertrainDurability: {
            score: 8.2,
            badges: { en: ['Proven Chain NA Block'], de: ['Robuster Ketten-Sauger'], ru: ['Надёжный цепной атмосферник'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L Inline-4 Naturally Aspirated', de: '1.6L Reihenvierzylinder Sauger', ru: '1.6L рядный 4-цил. атмосферный' } },
                  { k: 'displacement', v: '1,598 cc' },
                  { k: 'output', v: { en: '92 kW (125 HP)', de: '92 kW (125 PS)', ru: '92 кВт (125 л.с.)' } }
                ],
                note: { en: 'Simple port-injected 1.6L unit with no turbocharger or high-pressure injector complexity.', de: 'Einfacher Saugrohreinspritzer ohne Turbolader oder Hochdruck-Injektoren.', ru: 'Простой мотор с распределённым впрыском без турбины.' }
              },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj'
            },
            dossier: {
              en: {
                headline: 'Simple Port-Injected Petrol Built for High Mileage',
                strengths: ['No turbocharger, dual-mass flywheel, or particulate filter failures.'],
                watchouts: ['Keep 10,000–12,000 km oil changes to preserve timing chain tensioner longevity.'],
                beforeYouBuy: [
                  'Start the engine dead cold and listen 3 seconds for any timing chain rattle.',
                  'Inspect valve cover and oil pan seams for sweating or seepage.',
                  'Check stamped annual oil-change history.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Clean annual oil changes & air filter service', cost: '€160–€220', ifIgnored: 'Accelerated varnish buildup', damageCost: '€450+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Iridium spark plugs & brake fluid flush', cost: '€180–€260', ifIgnored: 'Misfires under load & corroded ABS lines', damageCost: '€500–€900' },
                  { tier: 'orange', km: '90,000–130,000 km / 6–9 yrs', action: 'Coolant flush & drive belt / pulley inspection', cost: '€190–€290', ifIgnored: 'Belt snap or overheating', damageCost: '€900–€1,800' },
                  { tier: 'orange', km: '130,000–175,000 km / 8–12 yrs', action: 'Manual clutch kit refresh on city-driven examples', cost: '€520–€750', ifIgnored: 'Clutch slip stranding vehicle', damageCost: '€850+' },
                  { tier: 'orange', km: '175,000–215,000 km / 11–14 yrs', action: 'Front wishbone bushes, dampers & exhaust flex pipe', cost: '€480–€780', ifIgnored: 'Uneven tyre wear & MOT failure', damageCost: '€1,000+' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Timing chain tensioner & catalytic converter inspection', cost: '€650–€1,100', ifIgnored: 'Chain skip or emissions failure', damageCost: '€2,200–€3,500' }
                ]
              },
              de: {
                headline: 'Robuster Saugmotor mit hoher Laufleistungs-Reserve',
                strengths: ['Kein Turbolader, kein Zweimassenschwungrad und kein DPF-Risiko.'],
                watchouts: ['Kurze Ölwechsel alle 10–12 Tkm erhalten Steuerkette und Spanner langfristig sauber.'],
                beforeYouBuy: [
                  'Motor absolut kalt starten und 3 Sekunden auf kurzes Kettenrasseln achten.',
                  'Ventildeckel und Ölwanne auf Schwitzöl prüfen.',
                  'Lückenlose jährliche Ölwechsel-Nachweise kontrollieren.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel & Luftfilter-Service', cost: '160–220 €', ifIgnored: 'Ölkohleablagerungen', damageCost: '450 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zündkerzen & Bremsflüssigkeit erneuern', cost: '180–260 €', ifIgnored: 'Zündaussetzer & ABS-Korrosion', damageCost: '500–900 €' },
                  { tier: 'orange', km: '90.000–130.000 km / 6–9 J.', action: 'Kühlmittel & Keilrippenriemen prüfen/tauschen', cost: '190–290 €', ifIgnored: 'Riemenriss oder Überhitzung', damageCost: '900–1.800 €' },
                  { tier: 'orange', km: '130.000–175.000 km / 8–12 J.', action: 'Kupplungssatz bei viel Stadtbetrieb erneuern', cost: '520–750 €', ifIgnored: 'Durchrutschende Kupplung', damageCost: '850 €+' },
                  { tier: 'orange', km: '175.000–215.000 km / 11–14 J.', action: 'Querlenkerlager, Dämpfer & Flexrohr', cost: '480–780 €', ifIgnored: 'Sägezahn-Reifen & HU-Mangel', damageCost: '1.000 €+' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Steuerkettenspanner & Katalysator prüfen', cost: '650–1.100 €', ifIgnored: 'Steuerzeiten-Sprung oder AU-Ausfall', damageCost: '2.200–3.500 €' }
                ]
              },
              ru: {
                headline: 'Простой атмосферник с большим ресурсом',
                strengths: ['Нет турбины, двухмассового маховика и сажевого фильтра.'],
                watchouts: ['Замена масла каждые 10–12 тыс. км продлевает ресурс цепи и натяжителя.'],
                beforeYouBuy: [
                  'Запустите полностью холодный мотор и послушайте, нет ли треска цепи первые 3 секунды.',
                  'Проверьте стык клапанной крышки и поддона на подтёки масла.',
                  'Уточните регулярность ежегодной замены масла.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Ежегодное ТО: масло и воздушный фильтр', cost: '€160–220', ifIgnored: 'Ускоренное закоксовывание', damageCost: '€450+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи зажигания и замена тормозной жидкости', cost: '€180–260', ifIgnored: 'Пропуски зажигания и коррозия блока ABS', damageCost: '€500–900' },
                  { tier: 'orange', km: '90–130 тыс. км / 6–9 лет', action: 'Антифриз и проверка приводного ремня с роликами', cost: '€190–290', ifIgnored: 'Обрыв ремня или перегрев', damageCost: '€900–1 800' },
                  { tier: 'orange', km: '130–175 тыс. км / 8–12 лет', action: 'Замена комплекта сцепления (при городской езде)', cost: '€520–750', ifIgnored: 'Пробуксовка и поломка в пути', damageCost: '€850+' },
                  { tier: 'orange', km: '175–215 тыс. км / 11–14 лет', action: 'Сайлентблоки рычагов, амортизаторы и гофра глушителя', cost: '€480–780', ifIgnored: 'Износ шин и провал техосмотра', damageCost: '€1 000+' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия натяжителя цепи ГРМ и катализатора', cost: '€650–1 100', ifIgnored: 'Перескок цепи или ошибки экологии', damageCost: '€2 200–3 500' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 7.8, badges: { en: ['Smooth 6-MT'], de: ['Leichtgängige 6-Gang'], ru: ['Чёткая 6-МКПП'] } },
          buildQualityRust: { score: 7.4, badges: { en: ['Galvanized Shell'], de: ['Verzinkter Aufbau'], ru: ['Оцинкованный кузов'] } },
          electronicsReliability: { score: 7.7, badges: { en: ['Low Fault Rate'], de: ['Wenig Störungen'], ru: ['Минимум сбоев'] } },
          rideNoiseComfort: { score: 7.0, badges: { en: ['Supple Ride'], de: ['Komfortabel'], ru: ['Мягкий ход'] } },
          interiorQualityFeatures: { score: 6.8, badges: { en: ['Physical Controls'], de: ['Echte Tasten'], ru: ['Физ. кнопки'] } },
          visibilityManeuverability: { score: 7.1, badges: { en: ['10.8m Turning'], de: ['10,8m Wendekreis'], ru: ['Разворот 10,8м'] } },
          safetyProtection: { score: 7.4, badges: { en: ['5★ Euro NCAP'], de: ['5★ Euro NCAP'], ru: ['5★ Euro NCAP'] } },
          passengerSpaceErgonomics: { score: 7.2, badges: { en: ['Good Rear Room'], de: ['Guter Fondplatz'], ru: ['Просторный ряд'] } },
          interiorBootSpace: { score: 7.4, badges: { en: ['420L Practical Boot'], de: ['420L Kofferraum'], ru: ['Багажник 420 л'] } },
          payloadTowing: { score: 6.8, badges: { en: ['1,200 kg Braked'], de: ['1.200 kg Zuglast'], ru: ['Прицеп 1 200 кг'] } },
          accelerationOvertaking: { score: 5.8, badges: { en: ['10.6s 0–100 km/h'], de: ['10,6s 0–100 km/h'], ru: ['10,6с до 100 км/ч'] } },
          midRangeTorquePassing: { score: 5.5, badges: { en: ['Downshifts Needed'], de: ['Braucht Drehzahl'], ru: ['Любит обороты'] } },
          handlingAgility: { score: 6.7, badges: { en: ['Neutral Balance'], de: ['Neutral & Sicher'], ru: ['Надёжное шасси'] } },
          brakingPerformance: { score: 6.8, badges: { en: ['4× Discs · ~36m'], de: ['4× Scheiben · ~36m'], ru: ['4× диски · ~36м'] } },
          efficiencyFuel: { score: 7.4, badges: { en: ['6.6 L/100 km Real'], de: ['6,6 L/100 km real'], ru: ['6,6 л/100 км'] } },
          taxInsuranceNorm: { score: 7.5, badges: { en: ['Euro 6 · Moderate Class'], de: ['Euro 6 · Günstige Klasse'], ru: ['Euro 6 · Умеренный налог'] } },
          maintenanceRepairCosts: {
            score: 8.2,
            badges: { en: ['Affordable OEM Parts'], de: ['Günstige Ersatzteile'], ru: ['Доступные запчасти'] },
            repairGuide: {
              routine: [
                {
                  when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' },
                  action: { en: 'Transmission oil & coolant check/refresh', de: 'Getriebeöl & Kühlmittel prüfen/wechseln', ru: 'Проверка и замена масла МКПП и антифриза' },
                  cost: '€160–€240'
                }
              ],
              critical: [
                {
                  when: { en: '120,000–170,000 km', de: '120.000–170.000 km', ru: '120–170 тыс. км' },
                  action: { en: 'Accessory belt tensioner & water pump', de: 'Keilrippenriemen-Spanner & Wasserpumpe', ru: 'Натяжитель приводного ремня и помпа' },
                  cost: '€240–€380',
                  risk: { en: 'Coolant loss or serpentine belt snap', de: 'Kühlmittelverlust oder Riemenriss', ru: 'Утечка антифриза или обрыв ремня' },
                  damage: '€800–€1,600'
                }
              ]
            }
          },
          depreciationResale: { score: 7.4, badges: { en: ['Steady Private Demand'], de: ['Stabile Nachfrage'], ru: ['Стабильный спрос'] } }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  // All authentic OEM factory colors (>= 5; 7+ triggers horizontal slider with ‹/› arrows)
  paints: [
    { name: 'Glacier White Metallic', code: 'OEM-W1', hex: '#e9ecef', glow: 'rgba(226, 232, 240, 0.16)' },
    { name: 'Pure Solid White', code: 'OEM-W2', hex: '#f4f6f9', glow: 'rgba(244, 246, 249, 0.16)' },
    { name: 'Magnetic Silver Metallic', code: 'OEM-S1', hex: '#b6bec8', glow: 'rgba(182, 190, 200, 0.16)' },
    { name: 'Graphite Grey Metallic', code: 'OEM-G1', hex: '#545b63', glow: 'rgba(84, 91, 99, 0.18)' },
    { name: 'Deep Ocean Blue', code: 'OEM-B1', hex: '#1e4e79', glow: 'rgba(30, 78, 121, 0.2)' },
    { name: 'Crimson Red Pearl', code: 'OEM-R1', hex: '#a61c28', glow: 'rgba(166, 28, 40, 0.2)' },
    { name: 'Obsidian Black Pearl', code: 'OEM-K1', hex: '#171a21', glow: 'rgba(65, 76, 92, 0.18)' }
  ],
  engineDates: {
    '1.6-petrol': '05/2015–08/2020'
  },
  inDepth: {
    defaultEngineId: '1.6-petrol',
    defaultGroupKey: 'petrol-na',
    engineCosts: {
      '1.6-petrol': { group: 'petrol-na', avgFuelL100: 6.6, fuelPrice: 1.72, tax: 110, ins: 560, service: 260 }
    },
    groups: {
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Low Defect Rate', note: 'Clean suspension & brake results in 5–9 yr inspections.' },
            { source: 'ADAC Pannenstatistik', value: 'Rare Breakdowns', note: 'Simple NA electronics keep roadside callouts minimal.' },
            { source: 'Owner Survey', value: '93.5% Reliability', note: 'High satisfaction with low unscheduled repair bills.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Niedrige Mängelquote', note: 'Gute Fahrwerks- und Bremsenwerte bei 5–9 Jahre alten Wagen.' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr selten Pannen', note: 'Robuste Sauger-Technik sorgt für minimale Liegenbleiber.' },
            { source: 'Käufer-Feedback', value: '93,5 % Zuverlässigkeit', note: 'Hohe Zufriedenheit dank niedriger Reparaturkosten.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Низкий % поломок', note: 'Чистые проверки по подвеске и тормозам в возрасте 5–9 лет.' },
            { source: 'ADAC Pannenstatistik', value: 'Редкие отказы', note: 'Простая электрика и мотор без турбины крайне редко подводят в дороге.' },
            { source: 'Опрос владельцев', value: '93,5% надёжность', note: 'Высокая удовлетворённость за счёт невысокой цены владения.' }
          ]
        },
        extendedChecks: {
          en: ['Inspect cold-start timing chain quietness and clutch bite point.', 'Check service stamps for regular annual oil changes.'],
          de: ['Kaltstart auf ruhigen Kettenlauf sowie Kupplungs-Schleifpunkt prüfen.', 'Scheckheft auf regelmäßige jährliche Ölwechsel kontrollieren.'],
          ru: ['Проверьте холодный запуск и плавность включения сцепления.', 'Сверьте сервисную книжку по регулярным заменам масла.']
        },
        savingsNote: {
          en: 'Simple naturally aspirated layout avoids turbo, DPF, and dual-mass flywheel replacement bills.',
          de: 'Schlichter Saugmotor spart teure Turbo-, DPF- und ZMS-Reparaturen.',
          ru: 'Простой атмосферник избавляет от дорогих ремонтов турбины, DPF и двухмассового маховика.'
        },
        market: {
          supplyDemand: {
            en: 'Broad EU supply makes clean, low-mileage private examples easy to source.',
            de: 'Breites Angebot erleichtert die Suche nach gepflegten Privatfahrzeugen.',
            ru: 'Широкий выбор на рынке упрощает поиск ухоженного экземпляра.'
          },
          sweetSpot: {
            en: '2017–2019 mid-spec trim with <95,000 km and full service history (€9,500–€11,800).',
            de: 'Baujahr 2017–2019 in mittlerer Ausstattung unter 95 Tkm mit Scheckheft (9.500–11.800 €).',
            ru: '2017–2019 г.в. в средней комплектации с пробегом до 95 тыс. км (€9 500–11 800).'
          },
          outlook3to5yr: {
            en: 'Gradual, predictable depreciation (~€7,400–€8,800 in 3–5 yrs) backed by steady demand.',
            de: 'Ruhiger, planbarer Wertverlauf (ca. 7.400–8.800 € in 3–5 Jahren) dank konstanter Nachfrage.',
            ru: 'Плавное, предсказуемое снижение цены (€7 400–8 800 через 3–5 лет).'
          }
        },
        watchoutExtra: {
          en: ['Test AC compressor engagement and listen for worn front wishbone bushes over bumps.'],
          de: ['Klimakompressor-Einschalten prüfen und auf Poltern an den Querlenkern achten.'],
          ru: ['Проверьте включение компрессора кондиционера и тишину передних рычагов на кочках.']
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels', de: 'EU / DE Ausstattungslinien', ru: 'Европейские комплектации' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: 'Mid-Cycle Facelift Upgrades', de: 'Facelift-Upgrades', ru: 'Обновления рестайлинга' },
      faceliftKicker: { en: 'Facelift', de: 'Facelift', ru: 'Рестайлинг' },
      // Supports 2..12 trims (5+ triggers horizontal scroll + sticky matrix column).
      // tierClass is optional and auto-spreads across tier-1..tier-10; never use gaming rank names.
      trims: [
        {
          id: 'base',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Base', de: 'Base', ru: 'Base' },
          delta: { en: '-€800 – €1,200', de: '-800 – 1.200 €', ru: '-€800 – €1 200' },
          isSweetSpot: false,
          summary: { en: 'Manual AC, steel wheels, essential safety suite.', de: 'Klimaanlage manuell, Stahlfelgen, solide Sicherheit.', ru: 'Кондиционер, стальные диски, базовые системы безопасности.' },
          highlights: { en: ['6 Airbags & ESP', 'Manual AC'], de: ['6 Airbags & ESP', 'Manuelle Klima'], ru: ['6 подушек и ESP', 'Кондиционер'] }
        },
        {
          id: 'comfort',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Comfort', de: 'Comfort', ru: 'Comfort' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: { en: 'Best value: dual-zone climate, alloy wheels, rear sensors & heated seats.', de: 'Preis-Leistungs-Sieger: Klimaautomatik, Alufelgen, Parksensoren & Sitzheizung.', ru: 'Лучший выбор: климат-контроль, литые диски, парктроники и подогрев.' },
          highlights: { en: ['Dual-Zone Climate', 'Rear Parking Sensors', 'Heated Seats'], de: ['Klimaautomatik', 'Parksensoren hinten', 'Sitzheizung'], ru: ['Климат-контроль', 'Парктроники', 'Подогрев сидений'] }
        },
        {
          id: 'executive',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Topmodell', ru: 'Флагман' },
          name: { en: 'Executive', de: 'Executive', ru: 'Executive' },
          delta: { en: '+€1,200 – €1,900', de: '+1.200 – 1.900 €', ru: '+€1 200 – €1 900' },
          isSweetSpot: false,
          summary: { en: 'LED headlights, keyless entry, adaptive cruise & upgraded audio.', de: 'LED-Scheinwerfer, Keyless, adaptiver Tempomat & besseres Audio.', ru: 'LED-фары, бесключевой доступ, адаптивный круиз и топ-аудио.' },
          highlights: { en: ['LED Headlights', 'Adaptive Cruise', 'Keyless Entry'], de: ['LED-Scheinwerfer', 'Abstandstempomat', 'Keyless'], ru: ['LED-оптика', 'Адаптивный круиз', 'Бесключевой доступ'] }
        }
      ],
      matrix: [
        { feature: { en: 'Climate Control', de: 'Klimaautomatik', ru: 'Климат-контроль' }, vals: ['no', 'std', 'std'] },
        { feature: { en: '16–17" Alloy Wheels', de: 'Alufelgen 16–17"', ru: 'Литые диски 16–17"' }, vals: ['opt', 'std', 'std'] },
        { feature: { en: 'Rear Parking Sensors', de: 'Parksensoren hinten', ru: 'Парктроники сзади' }, vals: ['opt', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев сидений' }, vals: ['no', 'std', 'std'] },
        { feature: { en: 'LED Headlights', de: 'LED-Scheinwerfer', ru: 'LED-фары' }, vals: ['no', 'opt', 'std'] },
        { feature: { en: 'Adaptive Cruise Control', de: 'Abstandstempomat', ru: 'Адаптивный круиз' }, vals: ['no', 'opt', 'std'] }
      ],
      interiorNotes: {
        en: ['Clear analog gauges, sturdy seat fabric, and physical climate dials.'],
        de: ['Gut ablesbare Instrumente, robuste Sitzbezüge und echte Drehregler.'],
        ru: ['Читаемые приборы, износостойкая обивка и физические крутилки климата.']
      },
      cabinByPowertrain: {
        petrol: {
          en: 'Low engine vibration at idle and short-throw 6-speed shifter.',
          de: 'Ruhiger Leerlauf ohne Vibrationen und leichtgängige 6-Gang-Schaltung.',
          ru: 'Низкие вибрации на холостых и лёгкий ход 6-ст. механики.'
        }
      },
      faceliftUpgrades: {
        en: ['Mid-cycle refresh added standard AEB and improved sound insulation.'],
        de: ['Das Facelift brachte serienmäßigen Notbremsassistent und bessere Dämmung.'],
        ru: ['После рестайлинга добавили автоторможение AEB в базу и улучшили шумоизоляцию.']
      }
    }
  }
});
