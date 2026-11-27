// AutoDuel Vehicle Data — honda-civic-fk
registerAutoDuelVehicle({
  roster: {
    id: 'honda-civic-fk',
    number: '02',
    carType: 'hatchback',
    gridOrder: 2,
    gridLabel: 'Honda Civic',
    yearMake: '2011-2017 HONDA',
    shortTitle: 'CIVIC (FK)',
    fullName: '2011-2017 Honda Civic (FK)',
    rarityClass: 'rarity-dependable',
    drivetrain: 'FWD',
    image: 'assets/honda-civic-fk.webp',
    defaultEngineId: '1.8-ivtec',
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspTorsionBeam' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Firm, Composed Tuning · Fluid-Filled Rear Bushings', de: 'Straff-stabile Abstimmung · Hydro-Hinterachslager', ru: 'Упругая собранная подвеска · Гидроопоры сзади' } },
            { k: 'seatSupport', v: { en: 'Contoured Bolstered Front Seats · Low Driving Position', de: 'Gut konturierte Sitze · Tiefe, sportliche Sitzposition', ru: 'Хорошая боковая поддержка · Низкая посадка' } }
          ],
          note: { en: 'Noticeably firmer than Toyota Auris over sharp city bumps, but very settled at motorway speeds.', de: 'Auf kurzen Kanten straffer als der Auris, dafür sehr ruhig und spurstabil auf der Autobahn.', ru: 'Жёстче Auris на мелких стыках, но отлично держит прямую на высоких скоростях.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~71 dB(A) at 130 km/h (Average for Class)', de: '~71 dB(A) bei 130 km/h (Klassenschnitt)', ru: '~71 дБ(А) при 130 км/ч (средне для класса)' } },
            { k: 'acousticGlass', v: { en: 'Standard Glass · Mild Rear Tyre Road Noise', de: 'Standardverglasung · Leichtes Abrollgeräusch hinten', ru: 'Обычные стёкла · Умеренный шум шин сзади' } }
          ],
          note: { en: 'Low aerodynamic drag keeps wind noise modest; quiet touring tyres noticeably improve cabin calm.', de: 'Gute Aerodynamik hält Windgeräusche im Rahmen; leise Reifen verbessern den Komfort spürbar.', ru: 'Низкое сопротивление воздуху снижает шум ветра; тихая резина делает салон ещё спокойнее.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashTrim', v: { en: 'Dual-Tier Cockpit · Soft Upper Dash + Tough Plastics', de: 'Zweistöckiges Cockpit · Soft-Touch oben + robuster Kunststoff', ru: 'Двухуровневая панель · Мягкий верх + прочный пластик' } },
            { k: 'buildFit', v: { en: 'Solid Japanese Assembly · Durable Seat Fabrics', de: 'Solide Verarbeitung · Strapazierfähige Sitzbezüge', ru: 'Крепкая сборка · Износостойкая ткань сидений' } }
          ],
          note: { en: 'Futuristic split digital speedo puts speed right in your line of sight like a head-up display.', de: 'Der hochgesetzte Digitaltacho liegt fast wie ein Head-up-Display direkt im Sichtfeld.', ru: 'Высокий цифровой спидометр читается почти как проекционный дисплей.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turningDiam', v: '11.3 m' },
            { k: 'bodyDimensions', v: '4,300 × 1,770 mm' }
          ],
          note: { en: 'Slightly wider 11.3 m turning circle than Auris — needs an extra shunt in very tight garages.', de: 'Mit 11,3 m etwas größerer Wendekreis als der Auris — in engen Parkhäusern etwas weniger handlich.', ru: 'Радиус разворота чуть шире (11.3 м), чем у Auris — в тесных дворах требуется больше манёвров.' }
        },
        visibility: {
          specs: [
            { k: 'sightlines', v: { en: 'Good Forward · Split Rear Window Spoiler Obstructs View', de: 'Gute Sicht vorn · Geteilte Heckscheibe mit Spoilerbalken', ru: 'Хороший обзор спереди · Перемычка на заднем стекле' } },
            { k: 'parkingAids', v: { en: 'Rear Camera / Sensors Highly Recommended', de: 'Rückfahrkamera / Parksensoren sehr empfehlenswert', ru: 'Камера / парктроники очень желательны' } }
          ],
          note: { en: 'The signature split rear glass cuts across rearview mirror sightlines; pick a trim with reversing camera.', de: 'Der Querträger in der Heckscheibe teilt die Rücksicht — Rückfahrkamera lohnt sich hier besonders.', ru: 'Фирменная перемычка делит обзор назад — лучше выбирать комплектацию с камерой.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'ncapOverall', v: '★★★★★ (2012)' },
            { k: 'ncapBreakdown', v: { en: '94% Adult · 83% Child · 69% Pedestrian', de: '94 % Erwachsene · 83 % Kinder · 69 % Fußgänger', ru: '94% Взрослые · 83% Дети · 69% Пешеходы' } },
            { k: 'airbagsCount', v: { en: '6 Airbags (Front, Side, Full Curtain)', de: '6 Airbags (Front-, Seiten-, Kopfairbags)', ru: '6 подушек (фронтальные, боковые, шторки)' } }
          ],
          note: { en: 'Very high 94% Adult Occupant Euro NCAP score with rigid ACE crash structure.', de: 'Sehr starke 94 % Erwachsenenschutz im Euro-NCAP-Crashtest dank ACE-Karosseriestruktur.', ru: 'Высочайший балл 94% за защиту взрослых по Euro NCAP благодаря силовой структуре ACE.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeAssists', v: { en: '✓ ESP/VSA · ✓ City-Brake Active (CTBA from 2014+)', de: '✓ ESP/VSA · ✓ City-Notbremsassistent (CTBA ab 2014)', ru: '✓ ESP/VSA · ✓ Автоторможение CTBA (с 2014)' } }
          ],
          note: { en: '2014+ facelift models add low-speed City-Brake Active (CTBA) and optional blind-spot monitoring.', de: 'Ab Facelift 2014 mit City-Notbremsassistent (CTBA) und optionalem Totwinkelwarner.', ru: 'С 2014 года добавлено городское автоторможение CTBA и опциональный контроль слепых зон.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'wheelbase', v: '2,595 mm' },
            { k: 'rearLegHead', v: { en: 'Generous Rear Legroom · Slight Sloping Roofline', de: 'Großzügige Beinfreiheit · Leicht abfallendes Dach', ru: 'Просторно для ног сзади · Слегка покатая крыша' } }
          ],
          note: { en: 'Clever under-front-seat fuel tank layout frees up class-leading rear cabin flexibility.', de: 'Der mittig unter den Vordersitzen platzierte Tank schafft außergewöhnlich viel nutzbaren Raum.', ru: 'Бак под передними сиденьями освобождает максимум полезного пространства в салоне.' }
        },
        isofixEntry: {
          specs: [
            { k: 'isofixAccess', v: { en: '✓ 2× Outer ISOFIX · Wide Rear Door Opening', de: '✓ 2× ISOFIX außen · Große hintere Türöffnung', ru: '✓ 2× ISOFIX · Широкое открытие задних дверей' } }
          ],
          note: { en: 'Easy child-seat access with hidden rear door handles in the C-pillar.', de: 'Bequemer Zugang für Kindersitze trotz versteckter Türgriffe in der C-Säule.', ru: 'Удобная установка детских кресел и широкий проём задних дверей.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootUpDown', v: '477 L / 1,378 L' },
            { k: 'loadSill', v: { en: '~675 mm · Deep Underfloor Well', de: '~675 mm · Tiefes Unterbodenfach', ru: '~675 мм · Глубокая ниша под полом' } }
          ],
          note: { en: 'Class-leading 477 L boot rivals compact estates — swallows strollers and holiday suitcases easily.', de: 'Klassenbester 477-L-Kofferraum auf Kombi-Niveau — schluckt Kinderwagen und Koffer mühelos.', ru: 'Рекордный в классе багажник 477 л — по вместительности близок к универсалам.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingMech', v: { en: '✓ Honda Magic Seats (Cinema Fold-Up + Flat Fold)', de: '✓ Honda Magic Seats (Kinositz-Klappung + Ebener Boden)', ru: '✓ Honda Magic Seats (вертикальный подъём + ровный пол)' } }
          ],
          note: { en: 'Rear seat cushions flip up like cinema seats so you can stand tall bikes or plants right behind the front seats.', de: 'Sitzflächen klappen wie Kinositze hoch — perfekt für hohe Pflanzen, Fahrräder oder Kartons.', ru: 'Подушки заднего дивана поднимаются вертикально для перевозки высоких грузов и велосипедов.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: '~475 kg' },
            { k: 'roofLoad', v: '75 kg' }
          ],
          note: { en: 'Generous ~475 kg payload matches its oversized boot for heavy family road trips.', de: 'Großzügige ~475 kg Zuladung passen perfekt zum riesigen Kofferraum für Urlaubsfahrten.', ru: 'Отличная грузоподъёмность ~475 кг дополняет огромный багажник в дальних поездках.' }
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
            { k: 'kerbWeight', v: '1,205–1,410 kg' },
            { k: 'handlingChar', v: { en: 'Direct, Agile Turn-In · Flat Cornering Composure', de: 'Direktes Einlenken · Geringe Seitenneigung', ru: 'Острый вход в поворот · Малые крены' } },
            { k: 'tyreSizes', v: '205/55 R16 · 225/45 R17' }
          ],
          note: { en: 'Feels sharper and more driver-focused than Auris while staying composed on fast highways.', de: 'Fährt sich spürbar direkter und agiler als der Auris, bleibt aber auf der Autobahn absolut stabil.', ru: 'Ощущается острее и азартнее Auris, сохраняя отличную стабильность на скорости.' }
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
      suspensionWear: { en: 'Torsion Beam (Durable)', de: 'Verbundlenker (Robust)', ru: 'Балка (надёжная)' },
      starterAlternator: { en: '✓ Standard 12V', de: '✓ Klassisch 12V', ru: '✓ Обычные 12В' },
      electronicsRisk: { en: 'Low (Simple Bus)', de: 'Gering (Robust)', ru: 'Низкий риск' },
      rideTuning: { en: 'Firm / Composed', de: 'Straff / Stabil', ru: 'Упругая / Собранная' },
      highwayNoise: { en: '~71 dB · Average', de: '~71 dB · Mittel', ru: '~71 дБ · Средне' },
      cabinMaterials: { en: 'Durable Soft/Hard', de: 'Solider Materialmix', ru: 'Практичный пластик' },
      controls: { en: '✓ Physical Buttons', de: '✓ Echte Tasten', ru: '✓ Физ. кнопки' },
      turningCircle: '11.3 m',
      visibility: { en: 'Limited Rear (Split)', de: 'Eingeschränkt hinten', ru: 'Ограничен сзади' },
      euroNcap: '★★★★★ (2012)',
      safetyTech: { en: '✓ ESP · ✓ CTBA (2014+)', de: '✓ ESP · ✓ Notbrems (ab 14)', ru: '✓ ESP · ✓ AEB (с 2014)' },
      rearRoom: { en: 'Generous', de: 'Großzügig', ru: 'Просторно' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide', de: '✓ 2× ISOFIX · Breit', ru: '✓ 2× ISOFIX · Широкий' },
      bootVolume: '477 L / 1,378 L',
      seatUtility: { en: '✓ Magic Seats (Fold-Up)', de: '✓ Magic Seats (Hochklapp.)', ru: '✓ Magic Seats (складные)' },
      payloadRoof: '475 kg · 75 kg',
      driveline: 'FWD',
      chassisFeel: { en: 'Direct / Agile', de: 'Direkt / Agil', ru: 'Острое / Азартное' },
      tractionDiff: { en: 'FWD · Open Diff', de: 'FWD · Offen', ru: 'FWD · Своб. дифф.' },
      braking1000: '~36.0 m',
      brakeSetup: { en: '4× Disc Brakes', de: '4× Scheibenbremsen', ru: '4× Дисковые' },
      valueRetention: { en: 'High', de: 'Hoch', ru: 'Высокий' },
      resaleDemand: { en: 'Steady Demand', de: 'Stabile Nachfrage', ru: 'Стабильный спрос' }
    },
    sharedBuyerFit: {
      cards: {
        civicSpaceUtility: {
          en: 'You haul bulky items in a compact footprint: Honda Magic Seats and the 477 L boot swallow bikes, boxes, and strollers with ease.',
          de: 'Du transportierst oft sperrige Dinge im Kompaktformat: Hondas Magic Seats und der 477-L-Kofferraum schlucken Fahrräder, Kartons und Kinderwagen mühelos.',
          ru: 'Ты часто возишь объёмные грузы в компактном кузове: Сиденья Magic Seats и багажник 477 л легко вмещают велосипеды, коробки и коляски.'
        },
        civicReliableVtec: {
          en: 'You want bulletproof Japanese mechanics: Proven timing-chain i-VTEC engineering with minimal workshop surprises.',
          de: 'Du willst extrem standfeste japanische Technik: Bewährte i-VTEC-Steuerketten-Motoren mit minimalen Werkstatt-Überraschungen.',
          ru: 'Тебе нужна максимально надёжная японская техника: Проверенные атмосферники i-VTEC с цепным приводом без лишних сюрпризов.'
        },
        civicRearVisibility: {
          en: 'You rely on mirrors without sensors: The split rear spoiler and thick C-pillars limit rearward visibility when parking.',
          de: 'Du parkst viel nach Augenmaß: Der geteilte Heckspoiler und breite C-Säulen schränken die Sicht nach hinten spürbar ein.',
          ru: 'Ты паркуешься без камеры и датчиков: Разделённый спойлером задний обзор и широкие стойки ухудшают видимость назад.'
        },
        civicFirmRide: {
          en: 'You prioritize plush suspension comfort: The firm chassis feels planted on bends, but transmits sharp urban potholes.',
          de: 'Du suchst maximale Sänften-Federung: Das straffe Fahrwerk liegt satt in Kurven, gibt harte Schlaglöcher aber spürbar weiter.',
          ru: 'Ты ценишь мягкую плавность хода: Упругая подвеска отлично держит повороты, но жёстко отрабатывает острые ямы.'
        },
        civic14ModestPace: {
          en: 'You overtake often on fast highways: With 100 HP, the 1.4 i-VTEC needs high revs and downshifts when loaded.',
          de: 'Du überholst oft auf der Autobahn: Mit 100 PS braucht der 1.4 i-VTEC bei voller Beladung hohe Drehzahlen und fleißiges Schalten.',
          ru: 'Ты часто обгоняешь на трассе: Со 100 л.с. мотор 1.4 i-VTEC при полной загрузке требует раскрутки и пониженных передач.'
        },
        civicDieselTorque: {
          en: 'You want effortless motorway punch: The i-DTEC diesel pulls strongly from low revs while keeping fuel bills low.',
          de: 'Du willst souveränen Autobahn-Durchzug: Der i-DTEC-Diesel schiebt schon aus niedrigen Drehzahlen kräftig und sparsam an.',
          ru: 'Тебе нужна уверенная тяга на трассе: Дизель i-DTEC бодро тянет с низов и радует скромным расходом.'
        },
        civicCabinPlastics: {
          en: 'You want plush cabin materials: Hard lower door and dash plastics plus pre-2015 infotainment feel dated next to newer rivals.',
          de: 'Du erwartest edle Innenraum-Materialien: Hartplastik im unteren Bereich und das Vor-Facelift-Infotainment wirken schlicht.',
          ru: 'Тебе нужен мягкий дорогой салон: Жёсткий пластик внизу дверей и старая мультимедиа уступают более свежим конкурентам.'
        },
        civicHighRevPull: {
          en: 'You want effortless low-rev pull: Naturally aspirated i-VTEC engines need revs past 4,000 rpm for brisk hills or overtakes.',
          de: 'Du willst mühelosen Durchzug ab Leerlauf: Die Saugmotoren brauchen über 4.000/min, wenn es bergauf oder beim Überholen flott gehen soll.',
          ru: 'Тебе нужна тяга с самых низов: Атмосферный i-VTEC нужно крутить выше 4 000 об/мин для бодрого обгона и подъёмов.'
        },
        civicSmoothManual: {
          en: 'You enjoy a crisp manual gearbox: Honda’s short-throw 6-speed shifter makes long motorway commutes genuinely engaging.',
          de: 'Du schätzt knackiges Schalten: Das präzise Honda-6-Gang-Getriebe macht auch lange Pendelstrecken angenehm direkt.',
          ru: 'Ты ценишь чёткую механику: Короткоходная 6-ступенчатая коробка Honda делает дальние поездки приятными.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'A remarkably practical, ultra-reliable compact hatchback — ideal if you value boot space and simple mechanics over soft luxury.',
          de: 'Ein enorm praktischer, extrem zuverlässiger Kompaktwagen — ideal, wenn dir Kofferraum und simple Technik wichtiger sind als weicher Luxus.',
          ru: 'Очень практичный и сверхустойчивый компактный хэтчбек — идеален, если тебе важнее багажник и простота конструкции, чем мягкий люкс.'
        },
        ideal: [
          'civicSpaceUtility',
          'civicReliableVtec',
          'globalSimpleNoTurbo',
          'globalPetrolCityZones'
        ],
        skip: ['civicRearVisibility', 'civicFirmRide', 'civicHighRevPull', 'civicCabinPlastics']
      },
      diesel: {
        summary: {
          en: 'A spacious, frugal motorway commuter with strong mid-range pull — wasted on short urban errands.',
          de: 'Ein geräumiger, sparsamer Autobahn-Pendler mit kräftigem Durchzug — auf kurzen Stadtwegen fehl am Platz.',
          ru: 'Вместительный и экономичный дизельный хэтчбек для трассы — не лучший выбор для коротких городских поездок.'
        },
        ideal: ['civicSpaceUtility', 'civicDieselTorque', 'globalDieselLongRange', 'civicSmoothManual'],
        skip: [
          'globalDieselShortTripRisk',
          'civicRearVisibility',
          'civicFirmRide',
          'civicCabinPlastics'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Galvanized Body Protection — Long-Life Axle Bushings',
          strengths: [
            'Galvanized Body Protection keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: ['Inspect rear beam bushings and front lower control arms for wear.'],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Verzinkte Karosserie — Langlebige Achslager',
          strengths: [
            'Verzinkte Karosserie hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Hinterachslager und vordere Querlenkerbuchsen auf Spiel prüfen.',
            'Hintere Radlaufkanten, Achsträger-Aufnahmen und Bremsleitungen am Unterboden auf Winter-Korrosion prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Хорошая защита от коррозии — Износостойкие сайлентблоки',
          strengths: [
            'Хорошая защита от коррозии надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Проверьте сайлентблоки задней балки и передних рычагов.',
            'Проверьте кромки задних арок, крепления подрамника и тормозные трубки снизу на зимнюю коррозию.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Driver-Angled Two-Tier Dash',
          strengths: [
            'Driver-Angled Two-Tier Dash ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Lower dash plastics are hard and pre-2015 infotainment feels dated.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Fahrerorientiertes 2-Ebenen-Cockpit',
          strengths: [
            'Fahrerorientiertes 2-Ebenen-Cockpit sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Hartplastik im unteren Bereich; Vor-Facelift-Infotainment wirkt schlicht.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Двухъярусная панель приборов',
          strengths: [
            'Двухъярусная панель приборов обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Нижний пластик салона жёсткий, а мультимедиа до рестайлинга устарела.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '4.30 m Compact • 10.9 m Turn',
          strengths: [
            '4.30 m Compact • 10.9 m Turn makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Split tailgate glass and rear spoiler cut rearward mirror visibility.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '4,30 m Kompakt • 10,9 m Kreis',
          strengths: [
            '4,30 m Kompakt • 10,9 m Kreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Der geteilte Heckspoiler schränkt die Sicht nach hinten im Rückspiegel ein.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Длина 4,30 м • Разворот 10,9 м',
          strengths: [
            'Длина 4,30 м • Разворот 10,9 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Спойлер на стекле пятой двери делит и сужает обзор в зеркало заднего вида.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2012) — 6 Airbags + City Brake (Facelift)',
          strengths: [
            'Euro NCAP 5★ (2012) provides solid passive crash protection for its class and era.',
            '6 Airbags + City Brake (Facelift) standard or widely fitted across trims.'
          ],
          watchouts: [
            'Older cars lack modern active lane-keep or blind-spot radar unless optioned on late trims.',
            'Ensure no airbag or ABS warning lights stay illuminated or were masked.'
          ],
          beforeYouBuy: [
            'Turn ignition on and confirm ABS, ESP, and airbag icons light up and then clear cleanly.'
          ]
        },
        de: {
          headline: 'Euro NCAP 5★ (2012) — 6 Airbags + City-Notbremse',
          strengths: [
            'Euro NCAP 5★ (2012) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '6 Airbags + City-Notbremse serienmäßig bzw. weit verbreitet.'
          ],
          watchouts: [
            'Ältere Jahrgänge bieten noch keine modernen Spurhalte- oder Totwinkel-Assistenten.',
            'Sicherstellen, dass keine Airbag- oder ABS-Warnleuchte leuchtet oder überbrückt wurde.'
          ],
          beforeYouBuy: [
            'Bei Zündung prüfen, ob Airbag-, ABS- und ESP-Kontrollleuchten aufleuchten und sauber erlöschen.'
          ]
        },
        ru: {
          headline: 'Euro NCAP 5★ (2012) — 6 подушек + City Brake',
          strengths: [
            'Euro NCAP 5★ (2012) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + City Brake входят в оснащение большинства версий.'
          ],
          watchouts: [
            'На ранних версиях отсутствуют современные ассистенты удержания в полосе и слепых зон.',
            'Убедитесь, что индикаторы подушек безопасности и ABS зажигаются и гаснут штатно.'
          ],
          beforeYouBuy: ['При включении зажигания проверьте тест ламп ABS, ESP и подушек безопасности.']
        }
      },
      passengerSpaceErgonomics: {
        en: {
          headline: 'Good Knee Room + Magic Seats',
          strengths: [
            'Good Knee Room + Magic Seats keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Sloping Roof Tight Above 1.88 m.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Guter Knieraum + Magic Seats',
          strengths: [
            'Guter Knieraum + Magic Seats sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Dachlinie knapp ab 1,88 m.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Много места в ногах + Magic Seats',
          strengths: [
            'Много места в ногах + Magic Seats обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Скос крыши давит высоким.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '477L Boot (1,378L Max)',
          strengths: [
            'Practical 477L boot (1,378L folded) plus flip-up Magic Seats.',
            'Fold-Up Magic Seats improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '477L Kofferraum (1.378L Max)',
          strengths: [
            'Praktischer Nutzwert: 477 L Kofferraum (1.378 L umgeklappt) und klappbare Magic Seats.',
            'Magic Seats Rückbank erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 477–1 378 л',
          strengths: [
            'Практичный объём: багажник 477 л (до 1 378 л) и сиденья-трансформеры Magic Seats.',
            'Сиденья Magic Seats добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Direct Steering Feel',
          strengths: [
            'Direct steering and crisp body control give confident cornering.',
            'Firmer City Ride.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Direkte Lenkung',
          strengths: [
            'Direkte Lenkung und straffe Abstimmung sorgen für agiles Kurvenverhalten.',
            'Straffes Stadt-Setup.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Точный руль',
          strengths: [
            'Острый руль и собранная подвеска обеспечивают уверенную управляемость.',
            'Жёстче в городе.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 35.8 m — Crisp Pedal • Low Fade',
          strengths: [
            '100–0 km/h: 35.8 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 35,8 m — Direktes Pedal • Standfest',
          strengths: [
            '100–0 km/h: 35,8 m bietet souveräne Verzögerungswerte im Alltag.',
            'Vier-Scheiben-Bremsanlage mit guter und günstiger Ersatzteilverfügbarkeit.'
          ],
          watchouts: [
            'Hintere Bremsscheiben und Bremssättel rosten bzw. gehen fest, wenn das Auto wenig bewegt wird.'
          ],
          beforeYouBuy: [
            'Aus 80 km/h kräftig bremsen (kein Lenkradflattern) und hintere Bremsscheiben auf Rost prüfen.'
          ]
        },
        ru: {
          headline: '100–0 км/ч: 35,8 м — Чёткая педаль • Без перегрева',
          strengths: [
            '100–0 км/ч: 35,8 м обеспечивает уверенное торможение в повседневных условиях.',
            'Дисковые тормоза по кругу с доступными колодками и дисками.'
          ],
          watchouts: ['Задние тормозные диски и суппорты склонны к закисанию при редкой эксплуатации.'],
          beforeYouBuy: [
            'Энергично затормозите с 80 км/ч — не должно быть биения в руль; осмотрите задние диски.'
          ]
        }
      },
      payloadTowing: {
        en: {
          headline: '490 kg Payload • 500 / 1,400 kg Towing',
          strengths: ['490 kg Payload and 500 / 1,400 kg Towing handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '490 kg Zuladung • 500 / 1.400 kg Zuglast',
          strengths: [
            '490 kg Zuladung und 500 / 1.400 kg Zuglast bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 490 кг • Прицеп: 500 / 1 400 кг',
          strengths: ['Нагрузка 490 кг и Прицеп: 500 / 1 400 кг закрывают повседневные задачи по загрузке.'],
          watchouts: [
            'При планировании буксировки сверьте точную допустимую массу прицепа в документах авто.'
          ],
          beforeYouBuy: [
            'Если установлен фаркоп, проверьте просадку задних пружин и отсутствие следов тяжёлой эксплуатации.'
          ]
        }
      },
      depreciationResale: {
        en: {
          headline: 'Popular 1.8 VTEC',
          strengths: [
            'Popular 1.8 VTEC helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Gefragter 1.8 VTEC',
          strengths: [
            'Gefragter 1.8 VTEC sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
            'Der größte Wertverlust liegt bereits hinter dem Fahrzeug.'
          ],
          watchouts: [
            'Lückenloses Scheckheft, rostfreier Zustand und gefragte Ausstattung bestimmen den Wiederverkaufspreis.'
          ],
          beforeYouBuy: [
            'Alle Rechnungen, HU-Berichte und zwei funktionierende Schlüssel für den späteren Verkauf sichern.'
          ]
        },
        ru: {
          headline: 'Ликвидный 1.8 VTEC',
          strengths: [
            'Ликвидный 1.8 VTEC поддерживает стабильный спрос на вторичном рынке.',
            'Основная потеря стоимости уже позади — дальнейшее удешевление минимально.'
          ],
          watchouts: [
            'Скорость перепродажи напрямую зависит от сервисной истории, чистоты кузова и комплектации.'
          ],
          beforeYouBuy: ['Сохраняйте заказ-наряды, техосмотры и два ключа для выгодной последующей продажи.']
        }
      }
    },
    dossierGroups: {
      'petrol-6mt': {
        transmissionDriveline: {
          en: {
            headline: 'Crisp Honda 6-Speed Manual — Long-Life Clutch & Synchros',
            strengths: [
              'Crisp Honda 6-Speed Manual matches this powertrain well for everyday driving.',
              'Long-Life Clutch & Synchros.'
            ],
            watchouts: [
              'Check clutch bite height and listen for dual-mass flywheel rattle at idle on high-mileage cars.',
              'Cold shifts into 2nd and 3rd should stay crunch-free; grinding points to worn synchros.'
            ],
            beforeYouBuy: [
              'Shift quickly into 1st, 2nd, and 3rd gear cold and warm to verify crisp, crunch-free synchros.',
              'Hold the clutch halfway at idle and accelerate in 4th gear to rule out flywheel chatter or clutch slip.'
            ]
          },
          de: {
            headline: 'Knackiges Honda-6-Gang — Langlebige Kupplung & Gänge',
            strengths: [
              'Knackiges Honda-6-Gang passt gut zur Motorcharakteristik im Alltag.',
              'Langlebige Kupplung & Gänge.'
            ],
            watchouts: [
              'Bei hoher Laufleistung Kupplungs-Greifpunkt prüfen und im Leerlauf auf ZMS-Klappern achten.',
              'Kalte Schaltvorgänge in den 2. und 3. Gang müssen kratzfrei sein — Kratzen deutet auf verschlissene Synchronringe.'
            ],
            beforeYouBuy: [
              'Im kalten wie warmen Zustand zügig vom 1. in den 2. und 3. Gang schalten — ohne Kratzen.',
              'Kupplung im Leerlauf halb treten (ZMS-Test) und im 4. Gang stark beschleunigen (Rutschtest).'
            ]
          },
          ru: {
            headline: 'Чёткая 6-МКПП Honda — Ресурсное сцепление',
            strengths: [
              'Чёткая 6-МКПП Honda хорошо сочетается с данным двигателем в повседневной езде.',
              'Ресурсное сцепление.'
            ],
            watchouts: [
              'На больших пробегах проверяйте точку схватывания сцепления и стук двухмассового маховика на холостых.',
              'Переключения на 2-ю и 3-ю на холодную должны идти без хруста — хруст говорит об износе синхронизаторов.'
            ],
            beforeYouBuy: [
              'Чётко переключить 1–2–3 передачи на холодную и на горячую — хруста синхронизаторов быть не должно.',
              'Нажать сцепление наполовину на холостых (проверка маховика) и ускориться на 4-й передаче.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Solid Multiplex Wiring',
            strengths: [
              'Solid Multiplex Wiring keeps electrical diagnostics straightforward.',
              'Zero Common ECU Faults.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Robuste Multiplex-Elektrik',
            strengths: [
              'Robuste Multiplex-Elektrik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Kaum Steuergerät-Fehler.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Крепкая японская проводка',
            strengths: [
              'Крепкая японская проводка упрощает диагностику и обслуживание электрооборудования.',
              'Безотказные блоки ЭБУ.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Supportive Front Seats',
            strengths: [
              'Supportive Front Seats delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              'Firm Torsion-Beam Bump Feel.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Bequeme Vordersitze',
            strengths: [
              'Bequeme Vordersitze sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Straffe Hinterachse auf Gullideckeln.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Хорошие передние кресла',
            strengths: [
              'Хорошие передние кресла обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'Жёсткая задняя балка на ямах.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheap OEM Service & Pads — No Turbo / DPF / Injector Risk',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'No Turbo / DPF / Injector Risk.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige OEM-Wartung — Kein Turbo-/DPF-Risiko',
            strengths: [
              'Günstige OEM-Wartung hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Kein Turbo-/DPF-Risiko.'
            ],
            watchouts: [
              'Auch bei einfacher Technik altern nach 10+ Jahren Schläuche, Fahrwerksbuchsen, Bremsen und Reifen.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Недорогое оригинальное ТО — Без турбины и сажевого',
            strengths: [
              'Недорогое оригинальное ТО помогает держать ежегодные затраты на ТО под контролем.',
              'Без турбины и сажевого.'
            ],
            watchouts: [
              'Даже при простом моторе спустя 10+ лет требуют трат шланги, сайлентблоки, тормоза и шины.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-6mt': {
        transmissionDriveline: {
          en: {
            headline: 'Crisp 6-Speed Manual — Watch 300 Nm Clutch & DMF',
            strengths: [
              'Crisp 6-Speed Manual matches this powertrain well for everyday driving.',
              'Crisp shift feel and well-matched ratios keep everyday driving composed and predictable.'
            ],
            watchouts: [
              'Check clutch bite height and listen for dual-mass flywheel rattle at idle on high-mileage cars.',
              'Cold shifts into 2nd and 3rd should stay crunch-free; grinding points to worn synchros.'
            ],
            beforeYouBuy: [
              'Shift quickly into 1st, 2nd, and 3rd gear cold and warm to verify crisp, crunch-free synchros.',
              'Hold the clutch halfway at idle and accelerate in 4th gear to rule out flywheel chatter or clutch slip.'
            ]
          },
          de: {
            headline: 'Knackiges 6-Gang-Getriebe — Kupplung/ZMS bei 300 Nm prüfen',
            strengths: [
              'Knackiges 6-Gang-Getriebe passt gut zur Motorcharakteristik im Alltag.',
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.'
            ],
            watchouts: [
              'Bei hoher Laufleistung Kupplungs-Greifpunkt prüfen und im Leerlauf auf ZMS-Klappern achten.',
              'Kalte Schaltvorgänge in den 2. und 3. Gang müssen kratzfrei sein — Kratzen deutet auf verschlissene Synchronringe.'
            ],
            beforeYouBuy: [
              'Im kalten wie warmen Zustand zügig vom 1. in den 2. und 3. Gang schalten — ohne Kratzen.',
              'Kupplung im Leerlauf halb treten (ZMS-Test) und im 4. Gang stark beschleunigen (Rutschtest).'
            ]
          },
          ru: {
            headline: 'Чёткая 6-МКПП — Контроль маховика (300 Н·м)',
            strengths: [
              'Чёткая 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
            ],
            watchouts: [
              'На больших пробегах проверяйте точку схватывания сцепления и стук двухмассового маховика на холостых.',
              'Переключения на 2-ю и 3-ю на холодную должны идти без хруста — хруст говорит об износе синхронизаторов.'
            ],
            beforeYouBuy: [
              'Чётко переключить 1–2–3 передачи на холодную и на горячую — хруста синхронизаторов быть не должно.',
              'Нажать сцепление наполовину на холостых (проверка маховика) и ускориться на 4-й передаче.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Proven Bosch Diesel ECU',
            strengths: [
              'Proven Bosch Diesel ECU keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Watch DPF Pressure Sensor.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solide Bosch-Diesel-ECU',
            strengths: [
              'Solide Bosch-Diesel-ECU sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'DPF-Drucksensor prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Стабильная электрика Bosch',
            strengths: [
              'Стабильная электрика Bosch упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Контроль датчика сажевого.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Supportive Front Seats',
            strengths: [
              'Supportive Front Seats delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              'Firm Torsion-Beam Bump Feel.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Bequeme Vordersitze',
            strengths: [
              'Bequeme Vordersitze sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Straffe Hinterachse auf Gullideckeln.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Хорошие передние кресла',
            strengths: [
              'Хорошие передние кресла обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'Жёсткая задняя балка на ямах.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Chain-Driven (No Timing Belt) — 15k km Oil • Watch DPF Trips',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              '15k km Oil • Watch DPF Trips.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Steuerkette statt Zahnriemen — DPF braucht Langstrecke',
            strengths: [
              'Steuerkette statt Zahnriemen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['DPF braucht Langstrecke.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Цепь ГРМ вместо ремня — Контроль DPF при коротких поездках',
            strengths: [
              'Цепь ГРМ вместо ремня помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Контроль DPF при коротких поездках.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedGearboxes: {
      '6-mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Honda M6 · Manual · Single Clutch', de: 'Honda M6 · Schaltgetriebe · Kupplung', ru: 'Honda M6 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: {
            headline: 'Honda M6 6-Speed Manual — Snappy Throw & No DMF Wear',
            strengths: ['One of the best-feeling mechanical shifters in the compact class with zero DMF cost.'],
            watchouts: ['Clutch master cylinder can occasionally squeak or weep fluid past 120k km (€180–€280).'],
            beforeYouBuy: ['Test crisp 1→2→3 engagement and check clutch master cylinder around the pedal.']
          },
          de: {
            headline: 'Honda M6 6-Gang-Getriebe — Präzise Gassen ohne ZMS-Risiko',
            strengths: ['Eines der besten Schaltgetriebe der Kompaktklasse ohne teures Zweimassenschwungrad.'],
            watchouts: ['Kupplungsgeberzylinder kann ab 120 Tkm quietschen oder schwitzen (180–280 €).'],
            beforeYouBuy: ['Präzises Schalten 1→2→3 und Geberzylinder am Kupplungspedal prüfen.']
          },
          ru: {
            headline: 'Механика Honda M6 6-МКПП — Эталонная чёткость без ДММ',
            strengths: ['Один из лучших механизмов переключения в классе без дорогого маховика.'],
            watchouts: ['Главный цилиндр сцепления иногда скрипит или подтекает после 120 тыс. км (€180–280).'],
            beforeYouBuy: ['Проверьте чёткость 1→2→3 и сухость цилиндра над педалью сцепления.']
          }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Honda M6 · Manual + DMF', de: 'Honda M6 · Schaltgetriebe + ZMS', ru: 'Honda M6 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: {
            headline: 'Honda M6 6-Speed Manual — Handles Diesel Torque, Watch DMF',
            strengths: ['Gearbox internals easily handle 300–350 Nm diesel torque.'],
            watchouts: ['Dual-mass flywheel & clutch wear around 160k–210k km (€900–€1,350).'],
            beforeYouBuy: ['Test full throttle in 4th gear from 1,800 rpm for slip and listen for DMF idle rattle.']
          },
          de: {
            headline: 'Honda M6 6-Gang-Getriebe — Standfest, Diesel-ZMS beachten',
            strengths: ['Getriebemechanik verkraftet 300–350 Nm Diesel-Drehmoment problemlos.'],
            watchouts: ['ZMS und Kupplung verschleißen ab 160–210 Tkm (900–1.350 €).'],
            beforeYouBuy: ['Im 4. Gang ab 1.800 U/min voll beschleunigen und im Leerlauf auf ZMS-Rasseln hören.']
          },
          ru: {
            headline: 'Механика Honda M6 6-МКПП — Держит дизельный момент, контроль ДММ',
            strengths: ['Сама коробка спокойно переваривает 300–350 Н·м крутящего момента.'],
            watchouts: ['Двухмассовый маховик и сцепление требуют замены к 160–210 тыс. км (€900–1 350).'],
            beforeYouBuy: ['Проверьте тягу на 4-й передаче с 1 800 об/мин и отсутствие стука маховика на холостых.']
          }
        }
      },
      '5-at': {
        category: 'automatic',
        label: { en: '5-Speed Torque Auto', de: '5-Stufen-Wandlerautomatik', ru: '5-ст. Автомат' },
        shortLabel: { en: '5-AT', de: '5-AT', ru: '5-АКПП' },
        subLabel: { en: 'Honda 5AT · Hydraulic Torque Converter', de: 'Honda 5AT · Wandlerautomatik', ru: 'Honda 5AT · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto5', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.8,
            badges: { en: ['Proven Honda 5AT', 'Hydraulic Torque Converter'], de: ['Robuste Honda 5AT', 'Wandlerautomatik'], ru: ['Надёжная 5-АКПП Honda', 'Гидротрансформатор'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'Honda 5-Speed Hydraulic Automatic (5AT)', de: 'Honda 5-Stufen-Wandlerautomatik (5AT)', ru: '5-ст. гидромеханическая АКПП Honda (5AT)' } }],
              note: { en: 'Long-lived Honda multi-shaft 5-speed automatic; drain-and-fill with Honda ATF DW-1 every 50,000 km.', de: 'Sehr robuste Honda-5-Stufenautomatik; alle 50.000 km Teilölwechsel mit ATF DW-1.', ru: 'Долговечный 5-ст. автомат Honda; частичная замена ATF DW-1 каждые 50 тыс. км.' }
            },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: {
            headline: 'Honda 5-Speed Torque Auto — Bulletproof Smoothness, Calmer Pace',
            strengths: ['Zero clutch/DMF wear and far more durable than small dry dual-clutch boxes.'],
            watchouts: ['Only 5 gears soften 0–100 sprinting and add ~0.7 L/100 km fuel use.'],
            beforeYouBuy: ['Check clean red ATF on the dipstick and smooth shifts with paddle shifters.']
          },
          de: {
            headline: 'Honda 5-Stufen-Wandlerautomatik — Sehr robust, etwas gemächlicher',
            strengths: ['Kein Kupplungs-/ZMS-Verschleiß und deutlich haltbarer als trockene Doppelkuppler.'],
            watchouts: ['5 Gänge kosten ca. 1,5 s beim Sprint und ~0,7 L/100 km Mehrverbrauch.'],
            beforeYouBuy: ['ATF-Farbe am Peilstab und saubere Schaltvorgänge über Schaltwippen prüfen.']
          },
          ru: {
            headline: 'Автомат Honda 5AT — Очень надёжный гидротрансформатор',
            strengths: ['Нет износа сцепления и ДММ, заметно живучее сухих роботов.'],
            watchouts: ['5 ступеней замедляют разгон и добавляют ~0,7 л/100 км расхода.'],
            beforeYouBuy: ['Проверьте чистоту красной ATF на щупе и плавность работы подрулевых лепестков.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 50,000 km', de: 'Alle 50.000 km', ru: 'Каждые 50 000 км' }, action: { en: 'Honda 5AT drain-and-fill with genuine ATF DW-1', de: 'Honda 5AT Teilölwechsel mit ATF DW-1', ru: 'Частичная замена ATF DW-1 в АКПП Honda 5AT' }, cost: '€140–210' }
          ]
        }
      }
    },
    engines: [
      {
        id: '1.8-ivtec',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: '5-at',
            estUsedPrice: '€9,800',
            specOverrides: { sprint0100: '10.9 s', topSpeed: '210 km/h', realWorldFuel: '7.2–8.0 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.1,
                badges: {
                  en: ['0–100 km/h: 10.9 s (5-AT)', '210 km/h Top Speed'],
                  de: ['0–100 km/h: 10,9 s (5-AT)', '210 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,9 s (5-AT)', 'Макс. 210 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.5,
                badges: {
                  en: ['7.2–8.0 L/100 km (5-AT)'],
                  de: ['7,2–8,0 L/100 km (5-AT)'],
                  ru: ['7,2–8,0 L/100 km (5-AT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '1.8L i-VTEC NA', de: '1.8L i-VTEC Sauger', ru: '1.8L i-VTEC Атм.' },
          forcedInduction: { en: '✕ Turbo / E-Motor', de: '✕ Turbo / E-Motor', ru: '✕ Турбо / Эл. мотор' },
          injection: { en: '✓ Port (Indirect)', de: '✓ Saugrohr (Indirekt)', ru: '✓ Распред. (непрямой)' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Single Clutch (✕ DMF)', de: '✓ Kupplung (✕ ZMS)', ru: '✓ Сцепление (✕ ДММ)' },
          towingBraked: '1,400 kg',
          sprint0100: '9.4 s',
          topSpeed: '215 km/h',
          peakTorque: '174 Nm @ 4,300',
          passingPunch: { en: 'Needs Downshift', de: 'Braucht Herunterschalten', ru: 'Нужно понижать передачу' },
          realWorldFuel: '6.5–7.2 L/100 km',
          tankRange: '50 L · ~720 km',
          euroNorm: 'Euro 5 / 6',
          taxInsurance: { en: 'Low–Moderate', de: 'Niedrig–Mittel', ru: 'Низкие–Средние' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Low', de: 'Gering', ru: 'Низкие' }
        },
        dossierGroup: 'petrol-6mt',
        buyerFitGroup: 'na-petrol',
        isDefault: true,
        fuelType: 'petrol',
        hp: 142,
        shortTitle: 'CIVIC 1.8 i-VTEC',
        fullName: '2014 Honda Civic 1.8 i-VTEC',
        engineBadge: '1.8L i-VTEC NA • 142 HP',
        engineSubLabel: {
          en: 'R18Z4 Naturally Aspirated Petrol • 6-MT • 174 Nm',
          de: 'R18Z4 Saugbenziner • 6-Gang-Schaltgetriebe • 174 Nm',
          ru: 'R18Z4 Атмосферный бензин • 6-ст. МКПП • 174 Н·м'
        },
        rarityLabel: {
          en: 'SPACE MASTER',
          de: 'RAUMWUNDER',
          ru: 'МАСТЕР ПРОСТРАНСТВА'
        },
        originalMsrp: {
          en: '€23,200 New',
          de: '23.200 € Neu',
          ru: '€23 200 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ 477L Class-Leading Boot • Fold-Up Magic Seats',
          de: '✦ 477L Klassenbester Kofferraum • Magic Seats',
          ru: '✦ Лучший багажник 477 л • Сиденья Magic Seats'
        },
        remarkablePositives: {
          en: [
            'CLASS-LEADING 477L BOOT',
            'FOLD-UP MAGIC SEATS',
            'BULLETPROOF 1.8L NA VTEC',
            '1,400 KG BRAKED TOWING'
          ],
          de: [
            'KLASSENBESTE 477L KOFFERRAUM',
            'HOCHKLAPPBARE MAGIC SEATS',
            'UNZERSTÖRBARER 1.8L SAUGMOTOR',
            '1.400 KG GEBREMSTE ANHÄNGELAST'
          ],
          ru: [
            'ЛУЧШИЙ В КЛАССЕ БАГАЖНИК 477 Л',
            'СКЛАДНЫЕ СИДЕНЬЯ MAGIC SEATS',
            'НЕУБИВАЕМЫЙ АТМОСФЕРНИК 1.8 i-VTEC',
            'БУКСИРОВКА ДО 1 400 КГ'
          ]
        },
        notableNegatives: {
          en: ['IMPAIRED REAR VISIBILITY', 'THIRSTIER IN URBAN TRAFFIC', 'FIRMER CITY RIDE'],
          de: [
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'HÖHERER STADTVERBRAUCH',
            'STRAFFERES FAHRWERK IN DER STADT'
          ],
          ru: [
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ПОВЫШЕННЫЙ РАСХОД В ПРОБКАХ',
            'БОЛЕЕ ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 9.1,
          comfortCabin: 7.6,
          spacePracticality: 8.9,
          performanceDynamics: 7.1,
          runningCostsTco: 8.2
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.8L i-VTEC Inline-4 NA (R18Z4)', de: '1.8L i-VTEC Reihenvierzylinder Sauger (R18Z4)', ru: '1.8L i-VTEC рядный 4-цил. атмосферный (R18Z4)' } },
                  { k: 'displacement', v: '1,798 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V SOHC', de: '4 Zylinder · 16V SOHC', ru: '4 цилиндра · 16V SOHC' } },
                  { k: 'output', v: { en: '104 kW (142 HP)', de: '104 kW (142 PS)', ru: '104 кВт (142 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Legendary R18 block routinely passes 300,000+ km on simple oil changes and ~100k km valve checks.',
                  de: 'Legendärer R18-Block schafft mit simplen Ölwechseln und Ventilspiel-Kontrolle regelmäßig 300.000+ km.',
                  ru: 'Легендарный блок R18 легко проходит 300 000+ км при регулярной замене масла и проверке зазоров клапанов.'
                }
              },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj'
            },
            score: 9.7,
            badges: {
              en: ['1.8 Chain-Driven NA', 'Bulletproof R18Z4 SOHC Block'],
              de: ['1.8 Ketten-Saugmotor', 'Unverwüstlicher R18Z4-Block'],
              ru: ['Цепной мотор 1.8', 'Неубиваемый блок R18Z4 SOHC']
            },
            dossier: {
              en: {
                headline: 'Legendary Low-Friction SOHC VTEC with Lifetime Timing Chain',
                strengths: [
                  'Multi-point injection ensures intake valves remain spotless with zero direct-injection carbon fouling.',
                  'High-durability silent roller chain engineered for vehicle lifetime without stretch or tensioner failure.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Manual screw-type valve clearance check recommended every 100,000 km (rarely requires adjustment).',
                  'Use specified low-viscosity 0W-20 or 5W-30 synthetic oil to maintain VTEC spool valve solenoid operation.'
                ],
                beforeYouBuy: [
                  'Listen at cold start for quiet, even ticking— loud tapping means the engine valves need adjustment.',
                  'Check the oil dipstick carefully: sporty driving consumes a little oil if changes were skipped.',
                  'Shift quickly into 2nd and 3rd gears on the test drive to ensure smooth, crunch-free changes.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual synthetic 0W-20/5W-30 oil & filter + 2-yr brake/clutch fluid flush',
                    cost: '€130–210',
                    ifIgnored: 'Dirty aged oil clogs variable-cam solenoid screen & promotes piston ring varnish',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change manual gearbox oil (~80k / 5 yrs), check valve gaps & inspect 6-yr aging drive belt',
                    cost: '€260–420',
                    ifIgnored: 'Tight valves lose power & age-cracked serpentine belt leaves alternator dead',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust engine valve clearances & replace spark plugs',
                    cost: '€180–300',
                    ifIgnored: 'Rough idle, power drop & burnt exhaust valves (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Change gearbox oil & flush fresh engine coolant',
                    cost: '€140–240',
                    ifIgnored: 'Stiff gear changes & worn gearbox rings (components & fluids also degrade over years)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace worn clutch kit & drive belt tensioner',
                    cost: '€600–900',
                    ifIgnored: 'Slipping clutch or snapped belt leaving you stranded (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Refresh starter motor / alternator & rear suspension bushes',
                    cost: '€300–550',
                    ifIgnored: 'Car refuses to start or knocks over bumps',
                    damageCost: '€800–1,300'
                  }
                ]
              },
              de: {
                headline: 'Legendärer reibungsarmer SOHC-VTEC mit wartungsfreier Steuerkette',
                strengths: [
                  'Saubere Einlassventile ohne Verkokungsprobleme moderner Direkteinspritzer.',
                  'Hochfeste Zahnkette ohne Dehnungsprobleme über die gesamte Fahrzeuglebensdauer.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Ventilspielkontrolle per Einstellschrauben alle 100.000 km empfohlen (verstellt sich selten).',
                  'Vorgeschriebenes 0W-20 oder 5W-30 Synthetiköl einhalten für einwandfreie Funktion des VTEC-Ventils.'
                ],
                beforeYouBuy: [
                  'Beim Kaltstart auf leisen Lauf achten— lautes Tickern bedeutet, dass das Ventilspiel eingestellt werden muss.',
                  'Ölstand am Peilstab prüfen: Sportliche Fahrweise ohne regelmäßige Ölwechsel verbraucht etwas Öl.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich frisches 0W-20/5W-30 Öl & alle 2 J. Brems-/Kupplungsflüssigkeit wechseln',
                    cost: '130–210 €',
                    ifIgnored: 'Veraltetes Öl verstopft das VTEC-Sieb & fördert Verkokung an den Ringen',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Schaltgetriebeöl (~80 Tkm / 5 J.) wechseln, Ventilspiel prüfen & 6-J.-Keilriemen checken',
                    cost: '260–420 €',
                    ifIgnored: 'Zu enges Ventilspiel kostet Leistung; poröser Riemen reißt mit dem Alter',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventilspiel einstellen & Zündkerzen erneuern',
                    cost: '180–300 €',
                    ifIgnored: 'Unruhiger Leerlauf, weniger Leistung & verbrannte Ventile (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Getriebeöl wechseln & Kühlflüssigkeit erneuern',
                    cost: '140–240 €',
                    ifIgnored: 'Hakelige Schaltung & Verschleiß im Schaltgetriebe (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Kupplungssatz & Riemenspanner ersetzen',
                    cost: '600–900 €',
                    ifIgnored: 'Rutschende Kupplung oder gerissener Antriebsriemen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Anlasser / Lichtmaschine & Fahrwerksbuchsen prüfen',
                    cost: '300–550 €',
                    ifIgnored: 'Auto springt nicht mehr an oder poltert über Bodenwellen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '800–1.300 €'
                  }
                ]
              },
              ru: {
                headline: 'Легендарный атмосферный SOHC i-VTEC с вечной цепью ГРМ',
                strengths: [
                  'Клапаны всегда остаются чистыми, нет проблем с нагаром, как у турбомоторов с прямым впрыском.',
                  'Рассчитана на весь срок службы автомобиля и не требует плановой замены.',
                  'При базовом ТО со сменой масла и фильтров уверенно ходит 300 000–350 000+ км.'
                ],
                watchouts: [
                  'Проверка тепловых зазоров клапанов (винтовая регулировка) каждые 100 000 км.',
                  'Регулярная замена качественного масла 0W-20 / 5W-30 для безупречной работы соленоида VTEC.'
                ],
                beforeYouBuy: [
                  'Послушать холодный пуск— громкий стук означает необходимость регулировки клапанов двигателя.',
                  'Проверить уровень масла щупом: при активной езде и редких заменах мотор может подъедать масло.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло 0W-20/5W-30 и каждые 2 года жидкость тормозов и сцепления',
                    cost: '€130–210',
                    ifIgnored: 'Старое масло забивает сеточку клапана VTEC и закоксовывает кольца',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в 6-МКПП (~80 тыс. / 5 лет), проверить зазоры клапанов и стареющий за 6 лет ремень',
                    cost: '€260–420',
                    ifIgnored: 'Зажатые клапаны теряют тягу, а высохший от возраста ремень рвётся в пути',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Отрегулировать зазоры клапанов и заменить свечи зажигания',
                    cost: '€180–300',
                    ifIgnored: 'Неровная работа, потеря тяги и прогар клапанов (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 400–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить масло в коробке передач и освежить антифриз',
                    cost: '€140–240',
                    ifIgnored: 'Тугие переключения и износ синхронизаторов (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить комплект сцепления и натяжитель ремня',
                    cost: '€600–900',
                    ifIgnored: 'Пробуксовка сцепления или обрыв ремня в дороге (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 200–1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Обслужить стартер, генератор и сайлентблоки подвески',
                    cost: '€300–550',
                    ifIgnored: 'Внезапный отказ запуска или стуки на неровностях (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€800–1 300'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Crisp Honda 6-Speed Manual', 'Long-Life Clutch & Synchros'],
              de: ['Knackiges Honda-6-Gang', 'Langlebige Kupplung & Gänge'],
              ru: ['Чёткая 6-МКПП Honda', 'Ресурсное сцепление']
            }
          },
          buildQualityRust: {
            score: 8.8,
            badges: {
              en: ['Galvanized Body Protection', 'Long-Life Axle Bushings'],
              de: ['Verzinkte Karosserie', 'Langlebige Achslager'],
              ru: ['Хорошая защита от коррозии', 'Износостойкие сайлентблоки']
            }
          },
          electronicsReliability: {
            score: 9.3,
            badges: {
              en: ['Solid Multiplex Wiring', 'Zero Common ECU Faults'],
              de: ['Robuste Multiplex-Elektrik', 'Kaum Steuergerät-Fehler'],
              ru: ['Крепкая японская проводка', 'Безотказные блоки ЭБУ']
            }
          },
          rideNoiseComfort: {
            score: 6.6,
            badges: {
              en: ['Supportive Front Seats', 'Firm Torsion-Beam Bump Feel'],
              de: ['Bequeme Vordersitze', 'Straffe Hinterachse auf Gullideckeln'],
              ru: ['Хорошие передние кресла', 'Жёсткая задняя балка на ямах']
            }
          },
          interiorQualityFeatures: {
            score: 7.3,
            badges: {
              en: ['Driver-Angled Two-Tier Dash', 'Physical Dials + Reverse Cam'],
              de: ['Fahrerorientiertes 2-Ebenen-Cockpit', 'Klare Drehregler & Kamera'],
              ru: ['Двухъярусная панель приборов', 'Физические кнопки и камера']
            }
          },
          visibilityManeuverability: {
            score: 6.4,
            badges: {
              en: ['4.30 m Compact • 10.9 m Turn', 'Spoiler Splits Rear Mirror View'],
              de: ['4,30 m Kompakt • 10,9 m Kreis', 'Heckspoiler teilt Sichtfeld'],
              ru: ['Длина 4,30 м • Разворот 10,9 м', 'Спойлер делит заднее стекло']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2012)', '6 Airbags + City Brake (Facelift)'],
              de: ['Euro NCAP 5★ (2012)', '6 Airbags + City-Notbremse'],
              ru: ['Euro NCAP 5★ (2012)', '6 подушек + City Brake']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.9,
            badges: {
              en: ['Good Knee Room + Magic Seats', 'Sloping Roof Tight Above 1.88 m'],
              de: ['Guter Knieraum + Magic Seats', 'Dachlinie knapp ab 1,88 m'],
              ru: ['Много места в ногах + Magic Seats', 'Скос крыши давит высоким']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Kofferraum (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          payloadTowing: {
            score: 7.1,
            badges: {
              en: ['490 kg Payload', '500 / 1,400 kg Towing'],
              de: ['490 kg Zuladung', '500 / 1.400 kg Zuglast'],
              ru: ['Нагрузка 490 кг', 'Прицеп: 500 / 1 400 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.7,
            badges: {
              en: ['0–100 km/h: 9.1 s', '215 km/h Top Speed'],
              de: ['0–100 km/h: 9,1 s', '215 km/h Spitze'],
              ru: ['0–100 км/ч: 9,1 с', 'Макс. 215 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.7,
            badges: {
              en: ['174 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['174 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['174 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Direct Steering Feel', 'Firmer City Ride'],
              de: ['Direkte Lenkung', 'Straffes Stadt-Setup'],
              ru: ['Точный руль', 'Жёстче в городе']
            }
          },
          brakingPerformance: {
            score: 7.7,
            badges: {
              en: ['100–0 km/h: 35.8 m', 'Crisp Pedal • Low Fade'],
              de: ['100–0 km/h: 35,8 m', 'Direktes Pedal • Standfest'],
              ru: ['100–0 км/ч: 35,8 м', 'Чёткая педаль • Без перегрева']
            }
          },
          efficiencyFuel: {
            score: 6.4,
            badges: {
              en: ['6.3 L/100km', 'ECON Eco Mode'],
              de: ['6,3 L/100km', 'ECON-Sparmodus'],
              ru: ['6,3 л/100 км', 'Эко-режим ECON']
            }
          },
          taxInsuranceNorm: {
            score: 8.3,
            badges: {
              en: ['Moderate 1.8L Tax • Euro 5/6', 'Reasonable Compact Insurance'],
              de: ['Normale 1.8-Steuer • Euro 5/6', 'Mittlere Versicherung'],
              ru: ['Налог за 1,8 л • Euro 5/6', 'Средняя страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Manual Valve-Clearance Check & Iridium Spark Plugs', de: 'Ventilspiel prüfen/einstellen & Iridium-Zündkerzen', ru: 'Регулировка зазоров клапанов и иридиевые свечи' }, cost: '€200–320' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Fluid Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€110–180' }
              ],
              critical: [
                { when: '160–220k km · 10–15 yrs', action: { en: 'A/C Compressor Clutch Relay & Drive Belt Tensioner', de: 'Klimakompressor-Magnetkupplung & Keilriemenspanner', ru: 'Муфта компрессора кондиционера и натяжитель ремня' }, cost: '€180–340', risk: { en: 'Sudden loss of A/C cooling or charging belt slip', de: 'Plötzlicher Ausfall der Klimaanlage oder rutschender Riemen', ru: 'Отказ кондиционера или проскальзывание приводного ремня' }, damage: '€700–1,100' }
              ]
            },
            score: 9.1,
            badges: {
              en: ['Cheap OEM Service & Pads', 'No Turbo / DPF / Injector Risk'],
              de: ['Günstige OEM-Wartung', 'Kein Turbo-/DPF-Risiko'],
              ru: ['Недорогое оригинальное ТО', 'Без турбины и сажевого']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['Popular 1.8 VTEC', 'Strong Private Demand'],
              de: ['Gefragter 1.8 VTEC', 'Hohe Wertstabilität'],
              ru: ['Ликвидный 1.8 VTEC', 'Высокий спрос б/у']
            }
          }
        }
      },
      {
        id: '1.4-ivtec',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [{ id: '6-mt-sc', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.4L i-VTEC NA', de: '1.4L i-VTEC Sauger', ru: '1.4L i-VTEC Атм.' },
          forcedInduction: { en: '✕ Turbo / E-Motor', de: '✕ Turbo / E-Motor', ru: '✕ Турбо / Эл. мотор' },
          injection: { en: '✓ Port (Indirect)', de: '✓ Saugrohr (Indirekt)', ru: '✓ Распред. (непрямой)' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Single Clutch (✕ DMF)', de: '✓ Kupplung (✕ ZMS)', ru: '✓ Сцепление (✕ ДММ)' },
          towingBraked: '1,000 kg',
          sprint0100: '13.4 s',
          topSpeed: '187 km/h',
          peakTorque: '127 Nm @ 4,800',
          passingPunch: { en: 'City-Focused', de: 'Stadt-orientiert', ru: 'Для города' },
          realWorldFuel: '5.8–6.4 L/100 km',
          tankRange: '50 L · ~800 km',
          euroNorm: 'Euro 5 / 6',
          taxInsurance: { en: 'Very Low', de: 'Sehr niedrig', ru: 'Очень низкие' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Very Low', de: 'Sehr gering', ru: 'Очень низкие' }
        },
        dossierGroup: 'petrol-6mt',
        buyerFitGroup: 'na-petrol',
        buyerFitOverrides: {
          skip: ['civic14ModestPace', 'civicRearVisibility', 'civicFirmRide', 'civicCabinPlastics']
        },
        isDefault: false,
        fuelType: 'petrol',
        hp: 100,
        shortTitle: 'CIVIC 1.4 i-VTEC',
        fullName: '2014 Honda Civic 1.4 i-VTEC',
        engineBadge: '1.4L i-VTEC NA • 100 HP',
        engineSubLabel: {
          en: 'L13Z4 Naturally Aspirated Petrol • 6-MT • 127 Nm',
          de: 'L13Z4 Saugbenziner • 6-Gang-Schaltgetriebe • 127 Nm',
          ru: 'L13Z4 Атмосферный бензин • 6-ст. МКПП • 127 Н·м'
        },
        rarityLabel: {
          en: 'PRACTICAL SAVER',
          de: 'RAUM-SPARMEISTER',
          ru: 'ПРАКТИЧНЫЙ БАЗОВЫЙ'
        },
        originalMsrp: {
          en: '€16,950 New',
          de: '16.950 € Neu',
          ru: '€16 950 новый'
        },
        estUsedPrice: '€7,400',
        perkLabel: {
          en: '✦ Bulletproof 1.4 i-VTEC • 477L Boot & Magic Seats • Low Running Costs',
          de: '✦ Unverwüstlicher 1.4 i-VTEC • 477L Kofferraum & Magic Seats',
          ru: '✦ Надёжный 1.4 i-VTEC • Багажник 477 л и сиденья Magic Seats'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 1.4 CHAIN NA',
            '477L BOOT & MAGIC SEATS',
            'LOWEST CIVIC TAX & INS.',
            'LIGHT 1,180 KG AGILITY',
            '1,200 KG BRAKED TOWING'
          ],
          de: [
            'ROBUSTER 1.4 KETTENMOTOR',
            '477L KOFFERRAUM & MAGIC SEATS',
            'NIEDRIGSTE STEUER & VERSICHERUNG',
            'LEICHTE 1.180 KG AGILITÄT',
            '1.200 KG ANHÄNGELAST'
          ],
          ru: [
            'НАДЁЖНЫЙ ЦЕПНОЙ 1.4 NA',
            'БАГАЖНИК 477 Л + MAGIC SEATS',
            'НИЗКИЙ НАЛОГ И СТРАХОВКА',
            'ЛЁГКИЙ КУЗОВ (1 180 КГ)',
            'БУКСИРОВКА ДО 1 200 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 13.4S 0–100 KM/H',
            'NEEDS FREQUENT DOWNSHIFTS',
            'IMPAIRED REAR VISIBILITY',
            'FIRMER CITY RIDE'
          ],
          de: [
            'TRÄGE 13,4S 0–100 KM/H',
            'WENIG DURCHZUG AM BERG',
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'STRAFFERES STADTFAHRWERK'
          ],
          ru: [
            'РАЗГОН 13,4 С ДО 100',
            'СЛАБАЯ ТЯГА ПОД НАГРУЗКОЙ',
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 9.2,
          comfortCabin: 7.6,
          spacePracticality: 8.7,
          performanceDynamics: 6.2,
          runningCostsTco: 8.7
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.4L i-VTEC Inline-4 NA (L13Z4)', de: '1.4L i-VTEC Reihenvierzylinder Sauger (L13Z4)', ru: '1.4L i-VTEC рядный 4-цил. атмосферный (L13Z4)' } },
                  { k: 'displacement', v: '1,339 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V SOHC', de: '4 Zylinder · 16V SOHC', ru: '4 цилиндра · 16V SOHC' } },
                  { k: 'output', v: { en: '73 kW (100 HP)', de: '73 kW (100 PS)', ru: '73 кВт (100 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Ultra-simple L-series four-cylinder built for stress-free urban durability with virtually no weak points.',
                  de: 'Extrem schlichter Vierzylinder für stressfreie Stadt-Zuverlässigkeit nahezu ohne Schwachstellen.',
                  ru: 'Максимально простой мотор серии L для беспроблемной городской езды почти без слабых мест.'
                }
              },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj'
            },
            score: 9.7,
            badges: {
              en: ['1.4 Chain-Driven NA', 'Indestructible Block'],
              de: ['1.4 Ketten-Saugmotor', 'Unverwüstlicher Bau'],
              ru: ['Цепной мотор 1.4', 'Вечный ресурс']
            },
            dossier: {
              en: {
                headline: 'Ultra-Simple 1.4L SOHC Chain Engine— Built Like an Appliance With Near-Zero Mechanical Risk',
                strengths: [
                  'Clean intake valves with zero direct-injection carbon deposits and minimal moving valvegear.',
                  'Heavy-duty roller chain avoids belt replacement bills across 250,000+ km.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Mechanical screw-type rockers should be checked every 100,000 km during spark plug service.',
                  'Simple external service items that can chirp after 140,000 km.'
                ],
                beforeYouBuy: [
                  'Check service history for valve clearance adjustments and timely replacement of all 8 spark plugs.',
                  'Take the car on an uphill or highway merge to make sure the modest 99 HP engine suits your driving.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual synthetic oil changes & 2-yr brake fluid flush + cabin/air filters',
                    cost: '€120–200',
                    ifIgnored: 'Old urban oil causes noisy valve tick & premature Start-Stop battery drop',
                    damageCost: '€750–1,300'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change manual gearbox oil (~80k / 5 yrs), spark plugs & check 6-yr aging rubber belt/hoses',
                    cost: '€230–380',
                    ifIgnored: 'Worn plugs overload ignition coils & 6-yr dry rubber accessory belt cracks',
                    damageCost: '€700–1,200'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust valve clearances & replace spark plugs',
                    cost: '€180–320',
                    ifIgnored: 'Sluggish acceleration, misfires & higher fuel use (rubber/plastic & seals also harden with age)',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Clean exhaust valve passages & check gearbox bearing noise',
                    cost: '€250–500',
                    ifIgnored: 'Loud gearbox whine in neutral and early gears (components & fluids also degrade over years)',
                    damageCost: '€1,100–1,700'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace clutch kit & aging water pump',
                    cost: '€550–850',
                    ifIgnored: 'Slipping clutch or coolant leak causing overheating',
                    damageCost: '€1,200–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Reseal timing cover oil seep & replace drive belt',
                    cost: '€200–350',
                    ifIgnored: 'Oil drips onto driveway & frayed belt failure (rubber/plastic & seals also harden with age)',
                    damageCost: '€700–1,200'
                  }
                ]
              },
              de: {
                headline: 'Extrem simpler 1.4L SOHC-Kettenmotor mit nahezu null mechanischem Risiko',
                strengths: [
                  'Einlassventile bleiben sauber ohne Verkokung, extrem wenige bewegliche Teile im Zylinderkopf.',
                  'Robuste Rollenkette ohne Zahnriemen-Wechselintervalle für über 250.000 km ausgelegt.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Prüfung alle 100.000 km im Rahmen der großen Wartung empfehlenswert.',
                  'Günstige Verschleißteile im Nebentrieb, die ab ca. 140.000 km Geräusche machen können.'
                ],
                beforeYouBuy: [
                  'Im Serviceheft prüfen, ob das Ventilspiel eingestellt und alle 8 Zündkerzen regelmäßig gewechselt wurden.',
                  'Auf einer Autobahnauffahrt testen, ob die ruhigen 99 PS zu deinem Alltag passen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlicher Ölwechsel & Bremsflüssigkeit alle 2 J. inklusive Luft-/Innenraumfilter',
                    cost: '120–200 €',
                    ifIgnored: 'Altöl verstärkt Ventiltickern & Kurzstrecken schwächen die Start-Stopp-Batterie',
                    damageCost: '750–1.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebeöl (~80 Tkm / 5 J.) & Zündkerzen tauschen sowie 6-J.-Riemen und Schläuche prüfen',
                    cost: '230–380 €',
                    ifIgnored: 'Verbrauchte Kerzen schädigen Zündspulen; gealterter Riemen wird spröde',
                    damageCost: '700–1.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventilspiel einstellen & Zündkerzen tauschen',
                    cost: '180–320 €',
                    ifIgnored: 'Zähe Beschleunigung, Zündaussetzer & höherer Verbrauch (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Abgaskanäle säubern & Getriebe-Eingangslager prüfen',
                    cost: '250–500 €',
                    ifIgnored: 'Lautes Heulen im Leerlauf bis zum Getriebeschaden (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Kupplungssatz & alternde Wasserpumpe ersetzen',
                    cost: '550–850 €',
                    ifIgnored: 'Rutschende Kupplung oder Kühlwasserverlust',
                    damageCost: '1.200–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Leichten Ölverlust am Steuerdeckel abdichten & Keilriemen tauschen',
                    cost: '200–350 €',
                    ifIgnored: 'Ölflecken unter dem Auto & gerissener Riemen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '700–1.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Максимально простой цепной мотор 1.4 SOHC с околонулевым риском поломок',
                strengths: [
                  'Впускные клапаны не обрастают нагаром, а конструкция ГБЦ предельно проста и живуча.',
                  'Ресурс превышает 250 000 км без регламентной замены ремней.'
                ],
                watchouts: [
                  'Винтовые коромысла стоит проверять каждые 100 000 км при замене свечей.',
                  'Скромный момент 127 Н·м требует частых переключений вниз на трассе и подъёмах.',
                  'Недорогие расходники навесного оборудования ближе к 140 000 км.'
                ],
                beforeYouBuy: [
                  'Проверить по сервисной книжке регулировку клапанов и замену всех 8 свечей зажигания.',
                  'Разогнаться на трассе или в горку, чтобы убедиться, что спокойных 99 л.с. достаточно для ваших задач.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло и каждые 2 года тормозную жидкость с фильтрами',
                    cost: '€120–200',
                    ifIgnored: 'Старое масло усиливает стук клапанов и снижает ресурс батареи Start-Stop',
                    damageCost: '€750–1 300'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Обновить масло в 6-МКПП (~80 тыс. / 5 лет), свечи и проверить стареющий за 6 лет ремень',
                    cost: '€230–380',
                    ifIgnored: 'Изношенные свечи сжигают катушки, а старый ремень навесного трескается',
                    damageCost: '€700–1 200'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Отрегулировать клапаны и заменить свечи зажигания зажигания',
                    cost: '€180–320',
                    ifIgnored: 'Потеря тяги, пропуски зажигания и рост расхода (узлы и жидкости также стареют с годами)',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Почистить каналы рециркуляции и проверить подшипник коробки',
                    cost: '€250–500',
                    ifIgnored: 'Нарастающий вой коробки на низких передачах (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 700'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить комплект сцепления и водяной насос',
                    cost: '€550–850',
                    ifIgnored: 'Пробуксовка сцепления или утечка антифриза (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 200–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Устранить течь крышки двигателя и обновить приводной ремень',
                    cost: '€200–350',
                    ifIgnored: 'Пятна масла на парковке и обрыв ремня (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€700–1 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.5,
            badges: {
              en: ['Crisp Honda 6-Speed Manual', 'Minimal Driveline Strain'],
              de: ['Knackiges Honda-6-Gang', 'Minimaler Antriebsverschleiß'],
              ru: ['Чёткая 6-МКПП Honda', 'Минимальный износ приводов']
            }
          },
          buildQualityRust: {
            score: 8.8,
            badges: {
              en: ['Galvanized Body Protection', 'Long-Life Axle Bushings'],
              de: ['Verzinkte Karosserie', 'Langlebige Achslager'],
              ru: ['Хорошая защита от коррозии', 'Износостойкие сайлентблоки']
            }
          },
          electronicsReliability: {
            score: 9.4,
            badges: {
              en: ['Minimal Sensor Count', 'Rock-Solid ECU Stability'],
              de: ['Wenig anfällige Sensoren', 'Sehr stabiles Bordnetz'],
              ru: ['Минимум датчиков', 'Максимальная стабильность ЭБУ']
            }
          },
          rideNoiseComfort: {
            score: 6.6,
            badges: {
              en: ['Supportive Front Seats', 'Firm Torsion-Beam Bump Feel'],
              de: ['Bequeme Vordersitze', 'Straffe Hinterachse auf Gullideckeln'],
              ru: ['Хорошие передние кресла', 'Жёсткая задняя балка на ямах']
            }
          },
          interiorQualityFeatures: {
            score: 7.3,
            badges: {
              en: ['Driver-Angled Two-Tier Dash', 'Physical Dials + Reverse Cam'],
              de: ['Fahrerorientiertes 2-Ebenen-Cockpit', 'Klare Drehregler & Kamera'],
              ru: ['Двухъярусная панель приборов', 'Физические кнопки и камера']
            }
          },
          visibilityManeuverability: {
            score: 6.4,
            badges: {
              en: ['4.30 m Compact • 10.9 m Turn', 'Spoiler Splits Rear Mirror View'],
              de: ['4,30 m Kompakt • 10,9 m Kreis', 'Heckspoiler teilt Sichtfeld'],
              ru: ['Длина 4,30 м • Разворот 10,9 м', 'Спойлер делит заднее стекло']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2012)', '6 Airbags + City Brake (Facelift)'],
              de: ['Euro NCAP 5★ (2012)', '6 Airbags + City-Notbremse'],
              ru: ['Euro NCAP 5★ (2012)', '6 подушек + City Brake']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.9,
            badges: {
              en: ['Good Knee Room + Magic Seats', 'Sloping Roof Tight Above 1.88 m'],
              de: ['Guter Knieraum + Magic Seats', 'Dachlinie knapp ab 1,88 m'],
              ru: ['Много места в ногах + Magic Seats', 'Скос крыши давит высоким']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Kofferraum (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          payloadTowing: {
            score: 6.3,
            badges: {
              en: ['495 kg Payload', '500 / 1,200 kg Towing'],
              de: ['495 kg Zuladung', '500 / 1.200 kg Zuglast'],
              ru: ['Нагрузка 495 кг', 'Прицеп: 500 / 1 200 кг']
            }
          },
          accelerationOvertaking: {
            score: 3.8,
            badges: {
              en: ['0–100 km/h: 13.4 s', '187 km/h Top Speed'],
              de: ['0–100 km/h: 13,4 s', '187 km/h Spitze'],
              ru: ['0–100 км/ч: 13,4 с', 'Макс. 187 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 3.9,
            badges: {
              en: ['127 Nm • Light City Tune', 'Plan Highway Overtakes Ahead'],
              de: ['127 Nm • Stadt-Auslegung', 'Überholmanöver gut planen'],
              ru: ['127 Н·м • Городской мотор', 'Обгоны на трассе заранее']
            }
          },
          handlingAgility: {
            score: 6.8,
            badges: {
              en: ['Light 1,180 kg Weight', 'Firmer City Ride'],
              de: ['Leichte 1.180 kg', 'Straffes Stadt-Setup'],
              ru: ['Малый вес 1 180 кг', 'Жёстче в городе']
            }
          },
          brakingPerformance: {
            score: 7.7,
            badges: {
              en: ['100–0 km/h: 35.8 m', 'Crisp Pedal • Low Fade'],
              de: ['100–0 km/h: 35,8 m', 'Direktes Pedal • Standfest'],
              ru: ['100–0 км/ч: 35,8 м', 'Чёткая педаль • Без перегрева']
            }
          },
          efficiencyFuel: {
            score: 7.2,
            badges: {
              en: ['5.9 L/100km', 'ECON + Idle Stop'],
              de: ['5,9 L/100km', 'ECON & Start-Stopp'],
              ru: ['5,9 л/100 км', 'ECON + Старт-Стоп']
            }
          },
          taxInsuranceNorm: {
            score: 9.2,
            badges: {
              en: ['Lowest Civic Tax • Euro 5', 'Budget Starter Insurance'],
              de: ['Kleinste Civic-Steuer • Euro 5', 'Günstige Versicherung'],
              ru: ['Минимальный налог • Euro 5', 'Бюджетная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Manual Valve-Clearance Check & Iridium Spark Plugs', de: 'Ventilspiel prüfen/einstellen & Iridium-Zündkerzen', ru: 'Регулировка зазоров клапанов и иридиевые свечи' }, cost: '€200–320' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Fluid Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€110–180' }
              ],
              critical: [
                { when: '160–220k km · 10–15 yrs', action: { en: 'A/C Compressor Clutch Relay & Drive Belt Tensioner', de: 'Klimakompressor-Magnetkupplung & Keilriemenspanner', ru: 'Муфта компрессора кондиционера и натяжитель ремня' }, cost: '€180–340', risk: { en: 'Sudden loss of A/C cooling or charging belt slip', de: 'Plötzlicher Ausfall der Klimaanlage oder rutschender Riemen', ru: 'Отказ кондиционера или проскальзывание приводного ремня' }, damage: '€700–1,100' }
              ]
            },
            score: 9.4,
            badges: {
              en: ['Minimal Wear-Part Bills', 'Tiny Tyres & Simple NA Oil'],
              de: ['Minimale Verschleißkosten', 'Günstige Reifen & einfacher Ölwechsel'],
              ru: ['Минимальные траты на расходники', 'Дешёвые шины и простое ТО']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Low Price Floor', 'Popular City Hatch'],
              de: ['Geringer Wertverlust', 'Gefragtes Stadtauto'],
              ru: ['Малая потеря цены', 'Высокий спрос б/у']
            }
          }
        }
      },
      {
        id: '1.6-idtec',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.6L i-DTEC Diesel', de: '1.6L i-DTEC Diesel', ru: '1.6L i-DTEC Дизель' },
          forcedInduction: { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
          injection: { en: '✓ Common-Rail DI', de: '✓ Common-Rail Direkt', ru: '✓ Common-Rail прямой' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Clutch + DMF', de: '✓ Kupplung + ZMS', ru: '✓ Сцепление + ДММ' },
          towingBraked: '1,400 kg',
          sprint0100: '10.5 s',
          topSpeed: '207 km/h',
          peakTorque: '300 Nm @ 2,000',
          passingPunch: { en: 'Effortless Highway', de: 'Souveräner Durchzug', ru: 'Уверенная тяга' },
          realWorldFuel: '4.2–4.9 L/100 km',
          tankRange: '50 L · ~1,080 km',
          euroNorm: 'Euro 5 / 6 (DPF)',
          taxInsurance: { en: 'Low', de: 'Niedrig', ru: 'Низкие' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Low–Moderate', de: 'Gering–Mittel', ru: 'Низкие–Средние' }
        },
        dossierGroup: 'diesel-6mt',
        buyerFitGroup: 'diesel',
        isDefault: false,
        fuelType: 'diesel',
        hp: 120,
        shortTitle: 'CIVIC 1.6 i-DTEC',
        fullName: '2014 Honda Civic 1.6 i-DTEC',
        engineBadge: '1.6L i-DTEC • 120 HP',
        engineSubLabel: {
          en: 'N16A1 Earth Dreams Turbo-Diesel • 6-MT • 300 Nm',
          de: 'N16A1 Earth Dreams Turbodiesel • 6-MT • 300 Nm',
          ru: 'N16A1 Earth Dreams Турбодизель • 6-ст. МКПП • 300 Н·м'
        },
        rarityLabel: {
          en: 'EFFICIENCY KING',
          de: 'EFFIZIENZ-MEISTER',
          ru: 'КОРОЛЬ ЭКОНОМИИ'
        },
        originalMsrp: {
          en: '€21,950 New',
          de: '21.950 € Neu',
          ru: '€21 950 новый'
        },
        estUsedPrice: '€8,600',
        perkLabel: {
          en: '✦ 4.3 L/100km Economy • 300 Nm Earth Dreams Diesel • 477L Kofferraum',
          de: '✦ Sparsam (4,3 L/100km) • 300 Nm Earth-Dreams-Diesel • 477L Kofferraum',
          ru: '✦ Расход 4,3 л/100 км • 300 Н·м дизель Earth Dreams • Багажник 477 л'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 4.3 L/100KM',
            '1,100+ KM TANK RANGE',
            '300 NM TORQUE (N16A1)',
            '477L BOOT & MAGIC SEATS',
            '1,400 KG BRAKED TOWING'
          ],
          de: [
            'SPARSAM: 4,3 L/100KM',
            '1.100+ KM TANKREICHWEITE',
            '300 NM ALU-DIESEL (N16A1)',
            '477L KOFFERRAUM & MAGIC SEATS',
            '1.400 KG ANHÄNGELAST'
          ],
          ru: [
            'РАСХОД 4,3 Л/100 КМ',
            'ЗАПАС ХОДА 1 100+ КМ',
            'ТЯГА 300 Н·М (N16A1)',
            'БАГАЖНИК 477 Л + MAGIC SEATS',
            'БУКСИРОВКА ДО 1 400 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'DPF DISLIKES SHORT TRIPS',
            'EURO 5 CITY RESTRICTIONS',
            'IMPAIRED REAR VISIBILITY',
            'FIRMER CITY RIDE'
          ],
          de: [
            'DPF MAG KEINE KURZSTRECKE',
            'EURO-5-UMWELTZONEN',
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'STRAFFERES STADTFAHRWERK'
          ],
          ru: [
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.8,
          comfortCabin: 7.6,
          spacePracticality: 8.9,
          performanceDynamics: 7.5,
          runningCostsTco: 8.5
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L i-DTEC Earth Dreams Turbodiesel (N16A1)', de: '1.6L i-DTEC Reihenvierzylinder Turbodiesel (N16A1)', ru: '1.6L i-DTEC рядный 4-цил. турбодизель (N16A1)' } },
                  { k: 'displacement', v: '1,597 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '88 kW (120 HP)', de: '88 kW (120 PS)', ru: '88 кВт (120 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Lightweight low-friction aluminium diesel with solid timing-chain durability on regular highway runs.',
                  de: 'Leichter, reibungsarmer Alu-Diesel mit robuster Steuerkette auf regelmäßigen Langstrecken.',
                  ru: 'Лёгкий алюминиевый дизель с низким трением и надёжной цепью ГРМ при трассовой эксплуатации.'
                }
              },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi'
            },
            score: 9.5,
            badges: {
              en: ['Earth Dreams 1.6 Chain', 'Low-Friction Alu Block'],
              de: ['1.6 Alu-Kettenmotor', 'Reibungsarmer Block'],
              ru: ['Цепной 1.6 дизель', 'Алюминиевый блок']
            },
            dossier: {
              en: {
                headline: 'Open-Deck Low-Friction Aluminum 1.6L Diesel— Exceptionally Tough When Driven on Distance',
                strengths: [
                  'Reduced reciprocating inertia and Honda’s Earth Dreams engineering deliver outstanding fuel economy and crisp throttle response.',
                  'Uses durable timing chain and service-friendly Bosch injectors rather than fragile piezo units.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Closed-coupled DPF clogs quickly if restricted to cold urban commutes below 10 km.',
                  'Replace fuel filter on schedule to guard Bosch pump tolerances.'
                ],
                beforeYouBuy: [
                  'Avoid cars driven only on short city hops— this small diesel needs regular highway runs to clean its soot filter.',
                  'Check service bills for the correct low-ash synthetic diesel oil every 15,000–20,000 km.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash 0W-30 oil, diesel fuel filter every 30k & regular highway drives for soot filter',
                    cost: '€160–260',
                    ifIgnored: 'Short city trips choke soot filter early & dirty fuel wears precision injectors',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change gearbox/brake fluid (60–80k / 5 yrs) & inspect 6-yr aging rubber intake boots and belt',
                    cost: '€240–390',
                    ifIgnored: 'Age-cracked rubber turbo intake hose splits cleanly & triggers limp mode',
                    damageCost: '€800–1,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean exhaust valve (EGR) & intake pressure sensor',
                    cost: '€200–350',
                    ifIgnored: 'Hesitant throttle, power loss & warning lights (components & fluids also degrade over years)',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace copper injector seals & diesel fuel filter',
                    cost: '€220–400',
                    ifIgnored: 'Black tar around injectors & exhaust smell in cabin (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace worn clutch kit & dual-mass flywheel',
                    cost: '€950–1,400',
                    ifIgnored: 'Heavy shaking at pull-away & gearbox damage (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,500'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Deep-clean diesel soot filter & inspect timing chain',
                    cost: '€450–850',
                    ifIgnored: 'Blocked exhaust limp mode or stretched timing chain (components & fluids also degrade over years)',
                    damageCost: '€2,000–3,200'
                  }
                ]
              },
              de: {
                headline: 'Leichter Alu-Ketten-Diesel (Earth Dreams 1.6)— extrem zäh bei Langstreckeneinsatz',
                strengths: [
                  'Geringes Gewicht und optimierte Kolbenreibung sorgen für Rekordverbrauch und agiles Einlenken.',
                  'Langlebiger Kettenantrieb und reparaturfreundliche Bosch-Technik statt empfindlicher Piezo-Düsen.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Braucht regelmäßige Überland- oder Autobahnfahrten für saubere DPF-Regeneration.',
                  'Filterwechsel konsequent einhalten, um Hochdruckpumpe und Dichtsitze zu schützen.'
                ],
                beforeYouBuy: [
                  'Keine reinen Kurzstrecken-Autos kaufen— der kleine Diesel braucht regelmäßige Überlandfahrten für den Rußfilter.',
                  'Rechnungen auf passendes aschearmes Dieselöl mit Intervallen um 15.000–20.000 km prüfen.',
                  'Luftschläuche rund um den Turbolader auf Ölfeuchte kontrollieren und ruhiges Einkuppeln testen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 0W-30 Low-Ash-Öl, alle 30 Tkm Dieselfilter & regelmäßige Autobahnfahrten für DPF',
                    cost: '160–260 €',
                    ifIgnored: 'Reiner Stadtbetrieb verstopft den Filter früh; Wasser im Diesel schadet Injektoren',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebe-/Bremsflüssigkeit (60–80 Tkm / 5 J.) wechseln & 6-J.-Gummiansaugschlauch prüfen',
                    cost: '240–390 €',
                    ifIgnored: 'Altersbedingt reißender Gummi-Ansaugschlauch führt sofort zum Leistungsabfall',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Abgas-Rückführventil (AGR) & Ladedrucksensor reinigen',
                    cost: '200–350 €',
                    ifIgnored: 'Ruckelnde Gasannahme, Leistungsverlust & Warnlampe (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupferdichtringe der Einspritzdüsen & Dieselfilter ersetzen',
                    cost: '220–400 €',
                    ifIgnored: 'Schwarze Verkrustung & Abgasgeruch im Innenraum (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad erneuern',
                    cost: '950–1.400 €',
                    ifIgnored: 'Starkes Rupfen beim Anfahren & Getriebeschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.500 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Partikelfilter professionell reinigen & Steuerkette prüfen',
                    cost: '450–850 €',
                    ifIgnored: 'Dauerhafter Notlauf oder gelängte Steuerkette (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.000–3.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Лёгкий алюминиевый дизель Earth Dreams 1.6— эталон экономичности на трассе',
                strengths: [
                  'Малый вес снижает нагрузку на переднюю ось и обеспечивает рекордный расход топлива.',
                  'Электромагнитные форсунки Bosch проще и долговечнее капризных пьезоаналогов.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'При частых коротких поездках сажевый фильтр не успевает очищаться.',
                  'Важно менять топливный фильтр строго по регламенту для защиты ТНВД.'
                ],
                beforeYouBuy: [
                  'Не брать машину после чисто городской езды— этому дизелю нужна трасса для самоочистки сажевого фильтра.',
                  'Проверить по чекам использование малозольного синтетического масла с заменой раз в 15–20 тыс. км.',
                  'Осмотреть патрубки турбины на запотевание маслом и убедиться в отсутствии рывков при трогании.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять малозольное масло 0W-30, топливный фильтр раз в 30 тыс. и выезжать на трассу',
                    cost: '€160–260',
                    ifIgnored: 'Короткие поездки рано забивают сажевый фильтр, а грязное топливо портит форсунки',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в КПП (60–80 тыс. / 5 лет) и проверить стареющий к 6 годам резиновый патрубок впуска',
                    cost: '€240–390',
                    ifIgnored: 'Потрескавшийся от времени резиновый шланг рвётся и переводит мотор в аварийный режим',
                    damageCost: '€800–1 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан выхлопных газов и датчик на впуске',
                    cost: '€200–350',
                    ifIgnored: 'Провалы тяги, вялый разгон и ошибки на панели (узлы и жидкости также стареют с годами)',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить медные шайбы форсунок и топливный фильтр',
                    cost: '€220–400',
                    ifIgnored: 'Закоксовка колодцев форсунок и запах гари в салоне (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить сцепление вместе с двухмассовым маховиком',
                    cost: '€950–1 400',
                    ifIgnored: 'Жёсткая вибрация при старте и поломка коробки (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 500'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Промыть сажевый фильтр и проверить состояние цепи двигателя',
                    cost: '€450–850',
                    ifIgnored: 'Глубокая закупорка выхлопа или растяжение цепи (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 000–3 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { clutchDmf: '@clutchDmf' },
            score: 8.6,
            badges: {
              en: ['Crisp 6-Speed Manual', 'Watch 300 Nm Clutch & DMF'],
              de: ['Knackiges 6-Gang-Getriebe', 'Kupplung/ZMS bei 300 Nm prüfen'],
              ru: ['Чёткая 6-МКПП', 'Контроль маховика (300 Н·м)']
            }
          },
          buildQualityRust: {
            score: 8.8,
            badges: {
              en: ['Galvanized Body Protection', 'Long-Life Axle Bushings'],
              de: ['Verzinkte Karosserie', 'Langlebige Achslager'],
              ru: ['Хорошая защита от коррозии', 'Износостойкие сайлентблоки']
            }
          },
          electronicsReliability: {
            score: 8.9,
            badges: {
              en: ['Proven Bosch Diesel ECU', 'Watch DPF Pressure Sensor'],
              de: ['Solide Bosch-Diesel-ECU', 'DPF-Drucksensor prüfen'],
              ru: ['Стабильная электрика Bosch', 'Контроль датчика сажевого']
            }
          },
          rideNoiseComfort: {
            score: 6.6,
            badges: {
              en: ['Supportive Front Seats', 'Firm Torsion-Beam Bump Feel'],
              de: ['Bequeme Vordersitze', 'Straffe Hinterachse auf Gullideckeln'],
              ru: ['Хорошие передние кресла', 'Жёсткая задняя балка на ямах']
            }
          },
          interiorQualityFeatures: {
            score: 7.3,
            badges: {
              en: ['Driver-Angled Two-Tier Dash', 'Physical Dials + Reverse Cam'],
              de: ['Fahrerorientiertes 2-Ebenen-Cockpit', 'Klare Drehregler & Kamera'],
              ru: ['Двухъярусная панель приборов', 'Физические кнопки и камера']
            }
          },
          visibilityManeuverability: {
            score: 6.4,
            badges: {
              en: ['4.30 m Compact • 10.9 m Turn', 'Spoiler Splits Rear Mirror View'],
              de: ['4,30 m Kompakt • 10,9 m Kreis', 'Heckspoiler teilt Sichtfeld'],
              ru: ['Длина 4,30 м • Разворот 10,9 м', 'Спойлер делит заднее стекло']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2012)', '6 Airbags + City Brake (Facelift)'],
              de: ['Euro NCAP 5★ (2012)', '6 Airbags + City-Notbremse'],
              ru: ['Euro NCAP 5★ (2012)', '6 подушек + City Brake']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.9,
            badges: {
              en: ['Good Knee Room + Magic Seats', 'Sloping Roof Tight Above 1.88 m'],
              de: ['Guter Knieraum + Magic Seats', 'Dachlinie knapp ab 1,88 m'],
              ru: ['Много места в ногах + Magic Seats', 'Скос крыши давит высоким']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Kofferraum (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          payloadTowing: {
            score: 7.1,
            badges: {
              en: ['490 kg Payload', '500 / 1,400 kg Towing'],
              de: ['490 kg Zuladung', '500 / 1.400 kg Zuglast'],
              ru: ['Нагрузка 490 кг', 'Прицеп: 500 / 1 400 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.9,
            badges: {
              en: ['0–100 km/h: 10.5 s', '207 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '207 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5 с', 'Макс. 207 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.6,
            badges: {
              en: ['300 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['300 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['300 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 7.2,
            badges: {
              en: ['Light 1.6 Alu Front', 'Sharp Turn-In'],
              de: ['Leichte Alu-Vorderachse', 'Agiles Einlenken'],
              ru: ['Лёгкий передок', 'Точный вход в поворот']
            }
          },
          brakingPerformance: {
            score: 7.7,
            badges: {
              en: ['100–0 km/h: 35.8 m', 'Crisp Pedal • Low Fade'],
              de: ['100–0 km/h: 35,8 m', 'Direktes Pedal • Standfest'],
              ru: ['100–0 км/ч: 35,8 м', 'Чёткая педаль • Без перегрева']
            }
          },
          efficiencyFuel: {
            score: 8.7,
            badges: {
              en: ['Efficient (4.3 L/100km)', '1,100+ km Tank Range'],
              de: ['Sparsam (4,3 L/100km)', '1.100+ km Reichweite'],
              ru: ['Экономичный (4,3 л/100 км)', 'Запас хода 1 100+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.4,
            badges: {
              en: ['Low 1.6L Tax • Euro 5/6', 'Moderate Diesel Insurance'],
              de: ['Günstige 1.6-Steuer • Euro 5/6', 'Faire Diesel-Versicherung'],
              ru: ['Низкий налог 1,6 • Euro 5/6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & EGR System Inspection', de: 'Dieselfilter wechseln & AGR-System prüfen', ru: 'Топливный фильтр и проверка системы EGR' }, cost: '€150–240' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Fluid Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€110–180' }
              ],
              critical: [
                { when: '140–200k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplungssatz', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,150–1,750', risk: { en: 'Clutch slip under high diesel torque & idle knock', de: 'Rutschende Kupplung unter hohem Drehmoment & ZMS-Klopfen', ru: 'Пробуксовка сцепления под высоким моментом и стук ДММ' }, damage: '€2,100–2,900' },
                { when: '140–210k km · 9–14 yrs', action: { en: 'DPF Soot Cleaning & Differential Pressure Sensor', de: 'DPF-Reinigung & Differenzdrucksensor', ru: 'Чистка DPF и замена датчика дифф. давления' }, cost: '€350–650', risk: { en: 'Limp mode & excessive turbocharger backpressure', de: 'Notlauf & erhöhter Abgasgegendruck am Turbolader', ru: 'Аварийный режим и перегрузка турбины противодавлением' }, damage: '€1,500–2,300' }
              ]
            },
            score: 8.3,
            badges: {
              en: ['Chain-Driven (No Timing Belt)', '15k km Oil • Watch DPF Trips'],
              de: ['Steuerkette statt Zahnriemen', 'DPF braucht Langstrecke'],
              ru: ['Цепь ГРМ вместо ремня', 'Контроль DPF при коротких поездках']
            }
          },
          depreciationResale: {
            score: 8.0,
            badges: {
              en: ['Top Civic Diesel', 'High Commuter Demand'],
              de: ['Gefragtester Diesel', 'Beliebt bei Pendlern'],
              ru: ['Ликвидный дизель', 'Высокий спрос б/у']
            }
          }
        }
      },
      {
        id: '2.2-idtec',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.2L i-DTEC Diesel', de: '2.2L i-DTEC Diesel', ru: '2.2L i-DTEC Дизель' },
          forcedInduction: { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
          injection: { en: '✓ Common-Rail DI', de: '✓ Common-Rail Direkt', ru: '✓ Common-Rail прямой' },
          gearbox: { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
          clutchDmf: { en: '✓ Clutch + DMF', de: '✓ Kupplung + ZMS', ru: '✓ Сцепление + ДММ' },
          towingBraked: '1,500 kg',
          sprint0100: '8.5 s',
          topSpeed: '217 km/h',
          peakTorque: '350 Nm @ 2,000',
          passingPunch: { en: 'Very Strong Hwy', de: 'Sehr starker Durchzug', ru: 'Очень мощная тяга' },
          realWorldFuel: '5.0–5.8 L/100 km',
          tankRange: '50 L · ~920 km',
          euroNorm: 'Euro 5 (DPF)',
          taxInsurance: { en: 'Moderate', de: 'Mittel', ru: 'Средние' },
          timingDrive: { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
          serviceWear: { en: 'Moderate', de: 'Mittel', ru: 'Средние' }
        },
        dossierGroup: 'diesel-6mt',
        buyerFitGroup: 'diesel',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        shortTitle: 'CIVIC 2.2 i-DTEC',
        fullName: '2014 Honda Civic 2.2 i-DTEC',
        engineBadge: '2.2L i-DTEC • 150 HP',
        engineSubLabel: {
          en: 'N22B4 2.2L Turbo-Diesel • 6-MT • 350 Nm',
          de: 'N22B4 2.2L Turbodiesel • 6-Gang-Schaltgetriebe • 350 Nm',
          ru: 'N22B4 2.2L Турбодизель • 6-ст. МКПП • 350 Н·м'
        },
        rarityLabel: {
          en: 'TORQUE TOURER',
          de: 'LANGSTRECKEN-ASS',
          ru: 'ДИЗЕЛЬНЫЙ ТУРЕР'
        },
        originalMsrp: {
          en: '€25,650 New',
          de: '25.650 € Neu',
          ru: '€25 650 новый'
        },
        estUsedPrice: '€8,400',
        perkLabel: {
          en: '✦ 350 Nm Torque • 5.1 L/100km • 477L Boot & Magic Seats',
          de: '✦ 350 Nm Drehmoment • 5,1 L/100km • 477L Kofferraum',
          ru: '✦ 350 Н·м тяги • 5,1 л/100 км • Багажник 477 л'
        },
        remarkablePositives: {
          en: [
            '350 NM HIGHWAY TORQUE',
            'EFFICIENT 5.1 L/100KM',
            'CLASS-LEADING 477L BOOT',
            'FOLD-UP MAGIC SEATS',
            '1,500 KG BRAKED TOWING',
            'TOUGH N22B4 ALU DIESEL'
          ],
          de: [
            '350 NM AUTOBAHN-DURCHZUG',
            'SPARSAM: 5,1 L/100KM',
            '477L KOFFERRAUM',
            'HOCHKLAPPBARE MAGIC SEATS',
            '1.500 KG ANHÄNGELAST',
            'ROBUSTER N22B4 DIESEL'
          ],
          ru: [
            'ТЯГА 350 Н·М НА ТРАССЕ',
            'РАСХОД 5,1 Л/100 КМ',
            'БАГАЖНИК 477 Л',
            'СИДЕНЬЯ MAGIC SEATS',
            'БУКСИРОВКА ДО 1 500 КГ',
            'НАДЁЖНЫЙ ДИЗЕЛЬ N22B4'
          ]
        },
        notableNegatives: {
          en: [
            'DPF DISLIKES SHORT TRIPS',
            'HIGH 2.2L DIESEL ROAD TAX',
            'EURO 5 CITY RESTRICTIONS',
            'IMPAIRED REAR VISIBILITY',
            'FIRMER CITY RIDE'
          ],
          de: [
            'DPF MAG KEINE KURZSTRECKE',
            'HÖHERE 2.2L KFZ-STEUER',
            'EURO-5-UMWELTZONEN',
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'STRAFFERES STADTFAHRWERK'
          ],
          ru: [
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ВЫШЕ НАЛОГ (2.2 ДИЗЕЛЬ)',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.6,
          comfortCabin: 7.5,
          spacePracticality: 9.0,
          performanceDynamics: 7.8,
          runningCostsTco: 7.7
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.2L i-DTEC Inline-4 Turbodiesel (N22B4)', de: '2.2L i-DTEC Reihenvierzylinder Turbodiesel (N22B4)', ru: '2.2L i-DTEC рядный 4-цил. турбодизель (N22B4)' } },
                  { k: 'displacement', v: '2,199 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '110 kW (150 HP)', de: '110 kW (150 PS)', ru: '110 кВт (150 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: {
                  en: 'Heavy-duty motorway diesel with proven 300,000+ km mechanical endurance on long trips.',
                  de: 'Kräftiger Langstrecken-Diesel mit bewährter Mechanik für über 300.000+ km.',
                  ru: 'Выносливый трассовый дизель с проверенным механическим ресурсом 300 000+ км.'
                }
              },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi'
            },
            score: 9.5,
            badges: {
              en: ['Updated 2.2 Chain Block', 'Watch City DPF Regeneration'],
              de: ['Überarb. 2.2 Kettenmotor', 'DPF bei Kurzstrecke beachten'],
              ru: ['Обновл. цепной дизель 2.2', 'Следить за регенерацией DPF']
            },
            dossier: {
              en: {
                headline: 'Second-Gen N22B4 2.2L Aluminum Diesel— Solves Early N22A Manifold & Chain Issues',
                strengths: [
                  'Fixed the cracked exhaust manifold and early timing-chain wear issues of the pre-2009 i-CTDi generation.',
                  'High-mileage highway examples routinely pass 300,000+ km with regular 0W-30/5W-30 oil changes.'
                ],
                watchouts: [
                  'DPF Saturation on Urban Duty Cycles: Requires regular sustained 70+ km/h runs to complete active regeneration cleanly.',
                  'Intake manifold flaps/passages accumulate soot past 180,000 km.'
                ],
                beforeYouBuy: [
                  'Verify the car regularly drove highway distances so the diesel soot filter stayed healthy.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.',
                  'Check coolant level and inspect around the injectors and turbo pipes for oil mist or black tar.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil every 10–15k, diesel filter every 30k & regular highway regen runs',
                    cost: '€180–290',
                    ifIgnored: 'Diluted oil harms turbocharger bearings & city soot clogs exhaust filter early',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change manual gearbox fluid, flush coolant (6–7 yrs) & inspect aging 6-yr boost hoses and belt',
                    cost: '€260–420',
                    ifIgnored: 'Aged rubber intercooler hoses split under 350 Nm boost & soot chokes exhaust',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean exhaust recirculation valve & intake flaps',
                    cost: '€220–380',
                    ifIgnored: 'Sluggish boost response & clogged diesel filter (components & fluids also degrade over years)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace heavy-duty clutch & dual-mass flywheel',
                    cost: '€1,000–1,500',
                    ifIgnored: 'Flywheel shatters from 350 Nm torque and strands car (components & fluids also degrade over years)',
                    damageCost: '€1,900–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Professional diesel soot filter clean & injector seal check',
                    cost: '€400–700',
                    ifIgnored: 'Blocked exhaust & diesel fuel diluting engine oil (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,700'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace stretched timing chain & tensioner',
                    cost: '€800–1,200',
                    ifIgnored: 'Loud chain rattle risks skipping teeth and ruining valves (components & fluids also degrade over years)',
                    damageCost: '€2,500–3,800'
                  }
                ]
              },
              de: {
                headline: 'Überarbeiteter N22B4 2.2L Alu-Diesel— frei von den Krümmer- und Kettenmängeln des Vorgängers',
                strengths: [
                  'Behebt die bekannten Abgaskrümmer-Risse und Steuerketten-Probleme des älteren 2.2 i-CTDi.',
                  'Langstrecken-Exemplare erreichen mit regelmäßigem Ölwechsel problemlos 300.000+ km.'
                ],
                watchouts: [
                  'Benötigt regelmäßige Landstraßen- oder Autobahnfahrten für vollständige Regeneration.',
                  'Ab ca. 180.000 km kann eine Reinigung des AGR-Systems nötig werden.'
                ],
                beforeYouBuy: [
                  'Langstrecken-Historie prüfen, damit der Dieselpartikelfilter nicht kurz vor dem Verstopfen steht.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.',
                  'Kühlmittelstand sowie Injektoren und Ladeluftrohre auf Ölnebel oder Verkokung prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Alle 10–15.000 km / 1 J. Low-Ash-Öl, alle 30 Tkm Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '180–290 €',
                    ifIgnored: 'Ölverdünnung schadet Turbolager & Kurzstrecken setzen DPF vorzeitig zu',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebeöl wechseln, Kühlmittel spülen (6–7 J.) & gealterte Ladedruckschläuche/Riemen prüfen',
                    cost: '260–420 €',
                    ifIgnored: 'Altersbrüchige Schläuche platzen bei 350 Nm Schub & verrußen den Partikelfilter',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Abgas-Rückführventil (AGR) & Ansaugklappen reinigen',
                    cost: '220–380 €',
                    ifIgnored: 'Zähes Ansprechen & verstopfter Partikelfilter (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad erneuern',
                    cost: '1.000–1.500 €',
                    ifIgnored: '350 Nm zerlegen das alte Schwungrad bis zum Stillstand (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.900–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Partikelfilter spülen & Einspritzdüsen-Dichtungen prüfen',
                    cost: '400–700 €',
                    ifIgnored: 'Verstopfter Auspuff & Diesel-Verdünnung im Motoröl (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Gelängte Steuerkette & Spanner erneuern',
                    cost: '800–1.200 €',
                    ifIgnored: 'Rasselnde Kette springt über und zerstört Ventile (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.500–3.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Доработанный дизель N22B4 2.2— без детских болезней раннего поколения i-CTDi',
                strengths: [
                  'Устранены проблемы с трещинами выпускного коллектора и быстрым износом цепи ранних 2.2 i-CTDi.',
                  'При регулярной замене масла 0W-30/5W-30 моторы спокойно проходят свыше 300 000 км.'
                ],
                watchouts: [
                  'Для стабильного прожига сажевого фильтра необходимы регулярные выезды на трассу.',
                  'К 180 000 км полезно очистить клапан и теплообменник системы рециркуляции.'
                ],
                beforeYouBuy: [
                  'Убедиться, что машина регулярно ездила по трассе и сажевый фильтр не забит городской сажей.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.',
                  'Проверить уровень антифриза, форсунки и патрубки турбины на отсутствие нагара и подтёков масла.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять малозольное масло раз в 10–15 тыс. км, топливный фильтр раз в 30 тыс. и ездить по трассе',
                    cost: '€180–290',
                    ifIgnored: 'Разжиженное масло изнашивает турбину, а пробки быстро забивают сажевый фильтр',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в КПП, освежить антифриз к 6–7 годам и осмотреть стареющие шланги наддува',
                    cost: '€260–420',
                    ifIgnored: 'Постаревшие резиновые патрубки лопаются под моментом 350 Нм и забивают выхлоп',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан выхлопных газов и заслонки впуска',
                    cost: '€220–380',
                    ifIgnored: 'Задумчивый разгон и быстрый засор сажевого фильтра (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить сцепление вместе с двухмассовым маховиком',
                    cost: '€1 000–1 500',
                    ifIgnored: 'Высокий крутящий момент разрушает маховик до поломки (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 900–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Промыть сажевый фильтр и заменить уплотнения форсунок',
                    cost: '€400–700',
                    ifIgnored: 'Закупорка выхлопа и попадание солярки в моторное масло (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 700'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить растянутую цепь двигателя и натяжитель',
                    cost: '€800–1 200',
                    ifIgnored: 'Шумная цепь может перескочить и загнуть клапаны (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 500–3 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { clutchDmf: '@clutchDmf' },
            score: 7.6,
            badges: {
              en: ['Tough 6-Speed Manual', '350 Nm Dual-Mass Wear'],
              de: ['Kräftiges 6-Gang-Getriebe', 'ZMS-Verschleiß bei 350 Nm'],
              ru: ['Усиленная 6-МКПП', 'Износ двухмассового маховика']
            }
          },
          buildQualityRust: {
            score: 8.8,
            badges: {
              en: ['Galvanized Body Protection', 'Long-Life Axle Bushings'],
              de: ['Verzinkte Karosserie', 'Langlebige Achslager'],
              ru: ['Хорошая защита от коррозии', 'Износостойкие сайлентблоки']
            }
          },
          electronicsReliability: {
            score: 8.8,
            badges: {
              en: ['Solid Japanese Wiring', 'DPF & Exhaust Sensors'],
              de: ['Solide Bordnetz-Technik', 'Abgas- & DPF-Sensorik'],
              ru: ['Надёжная проводка Honda', 'Датчики выхлопа и DPF']
            }
          },
          rideNoiseComfort: {
            score: 6.6,
            badges: {
              en: ['Supportive Front Seats', 'Firm Torsion-Beam Bump Feel'],
              de: ['Bequeme Vordersitze', 'Straffe Hinterachse auf Gullideckeln'],
              ru: ['Хорошие передние кресла', 'Жёсткая задняя балка на ямах']
            }
          },
          interiorQualityFeatures: {
            score: 7.3,
            badges: {
              en: ['Driver-Angled Two-Tier Dash', 'Physical Dials + Reverse Cam'],
              de: ['Fahrerorientiertes 2-Ebenen-Cockpit', 'Klare Drehregler & Kamera'],
              ru: ['Двухъярусная панель приборов', 'Физические кнопки и камера']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['11.3 m Turning Circle', 'Spoiler Splits Rear Mirror View'],
              de: ['11,3 m Wendekreis', 'Heckspoiler teilt Sichtfeld'],
              ru: ['Разворот 11,3 м', 'Спойлер перекрывает обзор назад']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2012)', '6 Airbags + City Brake (Facelift)'],
              de: ['Euro NCAP 5★ (2012)', '6 Airbags + City-Notbremse'],
              ru: ['Euro NCAP 5★ (2012)', '6 подушек + City Brake']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.9,
            badges: {
              en: ['Good Knee Room + Magic Seats', 'Sloping Roof Tight Above 1.88 m'],
              de: ['Guter Knieraum + Magic Seats', 'Dachlinie knapp ab 1,88 m'],
              ru: ['Много места в ногах + Magic Seats', 'Скос крыши давит высоким']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Kofferraum (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          payloadTowing: {
            score: 7.3,
            badges: {
              en: ['500 kg Payload', '500 / 1,500 kg Towing'],
              de: ['500 kg Zuladung', '500 / 1.500 kg Zuglast'],
              ru: ['Нагрузка 500 кг', 'Прицеп: 500 / 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.3,
            badges: {
              en: ['0–100 km/h: 8.5 s', '217 km/h Top Speed'],
              de: ['0–100 km/h: 8,5 s', '217 km/h Spitze'],
              ru: ['0–100 км/ч: 8,5 с', 'Макс. 217 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['350 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['350 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['350 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 6.6,
            badges: {
              en: ['Stable Highway Cruiser', 'Heavier 2.2 Front Axle'],
              de: ['Souverän auf Autobahn', 'Schwerere 2.2-Achse'],
              ru: ['Устойчив на трассе', 'Тяжелее передок (2.2)']
            }
          },
          brakingPerformance: {
            score: 7.7,
            badges: {
              en: ['100–0 km/h: 35.8 m', 'Crisp Pedal • Low Fade'],
              de: ['100–0 km/h: 35,8 m', 'Direktes Pedal • Standfest'],
              ru: ['100–0 км/ч: 35,8 м', 'Чёткая педаль • Без перегрева']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['Efficient (5.1 L/100km)', '950+ km Tank Range'],
              de: ['Sparsam (5,1 L/100km)', '950+ km Reichweite'],
              ru: ['Экономичный (5,1 л/100 км)', 'Запас хода 950+ км']
            }
          },
          taxInsuranceNorm: {
            score: 6.7,
            badges: {
              en: ['Higher 2.2L Tax • Euro 5', 'Mid-High Diesel Insurance'],
              de: ['Hohe 2.2L-Dieselsteuer', 'Etwas teurere Versicherung'],
              ru: ['Высокий налог за 2,2 л', 'Страховка выше среднего']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & EGR System Inspection', de: 'Dieselfilter wechseln & AGR-System prüfen', ru: 'Топливный фильтр и проверка системы EGR' }, cost: '€150–240' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Fluid Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€110–180' }
              ],
              critical: [
                { when: '140–200k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplungssatz', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,150–1,750', risk: { en: 'Clutch slip under high diesel torque & idle knock', de: 'Rutschende Kupplung unter hohem Drehmoment & ZMS-Klopfen', ru: 'Пробуксовка сцепления под высоким моментом и стук ДММ' }, damage: '€2,100–2,900' },
                { when: '140–210k km · 9–14 yrs', action: { en: 'DPF Soot Cleaning & Differential Pressure Sensor', de: 'DPF-Reinigung & Differenzdrucksensor', ru: 'Чистка DPF и замена датчика дифф. давления' }, cost: '€350–650', risk: { en: 'Limp mode & excessive turbocharger backpressure', de: 'Notlauf & erhöhter Abgasgegendruck am Turbolader', ru: 'Аварийный режим и перегрузка турбины противодавлением' }, damage: '€1,500–2,300' }
              ]
            },
            score: 6.7,
            badges: {
              en: ['Durable Chain & Auxiliaries', 'Expensive DMF, Clutch & DPF'],
              de: ['Langlebige Kette & Nebenaggregate', 'Teure Kupplung, ZMS & DPF'],
              ru: ['Долговечная цепь ГРМ', 'Дорогой ремонт DPF и маховика']
            }
          },
          depreciationResale: {
            score: 7.2,
            badges: {
              en: ['Euro 5 City Discount', 'Popular Highway Tourer'],
              de: ['Euro-5-Abschlag', 'Beliebt für Langstrecke'],
              ru: ['Эко-класс Евро-5', 'Ценится для трассы']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'White Orchid Pearl', code: 'NH-788P', hex: '#eef1f6', glow: 'rgba(238, 241, 246, 0.16)' },
    { name: 'Crystal Black Pearl', code: 'NH-731P', hex: '#16191e', glow: 'rgba(65, 76, 92, 0.18)' },
    { name: 'Polished Metal Metallic', code: 'NH-737M', hex: '#5b6168', glow: 'rgba(91, 97, 104, 0.18)' },
    { name: 'Alabaster Silver', code: 'NH-700M', hex: '#b4bcc4', glow: 'rgba(180, 188, 196, 0.16)' },
    { name: 'Milano Red', code: 'R-81', hex: '#c81c24', glow: 'rgba(200, 28, 36, 0.2)' },
    { name: 'Passion Red Pearl', code: 'R-543P', hex: '#8f1b24', glow: 'rgba(143, 27, 36, 0.2)', isDefault: true },
    { name: 'Brilliant Sporty Blue', code: 'B-593M', hex: '#1b5eb8', glow: 'rgba(27, 94, 184, 0.2)' },
    { name: 'Twilight Blue', code: 'B-578M', hex: '#283e56', glow: 'rgba(40, 62, 86, 0.2)' },
    { name: 'Urban Titanium', code: 'YR-578M', hex: '#6c6861', glow: 'rgba(108, 104, 97, 0.18)' },
    { name: 'Emerald Green', code: 'G-536M', hex: '#264f46', glow: 'rgba(38, 79, 70, 0.18)' }
  ],
  engineDates: {
    '1.8-ivtec': '02/2012–02/2017',
    '1.4-ivtec': '02/2012–02/2017',
    '1.6-idtec': '01/2013–02/2017',
    '2.2-idtec': '02/2012–12/2014'
  },
  inDepth: {
    defaultEngineId: '1.8-ivtec',
    defaultGroupKey: 'petrol-na',
    engineCosts: {
      '1.8-ivtec': { group: 'petrol-na', avgFuelL100: 6.8, fuelPrice: 1.75, tax: 120, ins: 590, service: 280 },
      '1.4-ivtec': { group: 'petrol-na', avgFuelL100: 6.1, fuelPrice: 1.75, tax: 96,  ins: 520, service: 250 },
      '1.6-idtec': { group: 'diesel',    avgFuelL100: 4.5, fuelPrice: 1.65, tax: 152, ins: 610, service: 330 },
      '2.2-idtec': { group: 'diesel',    avgFuelL100: 5.4, fuelPrice: 1.65, tax: 265, ins: 680, service: 380 }
    },
    groups: {
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 8%', note: 'Chain-driven R18 & L13 petrols pass older inspections with very few engine or exhaust defects' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Port fuel injection with zero turbo or dual-mass flywheel; rare roadside issues' },
            { source: 'WhatCar? Survey', value: '97.2% Reliability', note: 'Repeatedly top-ranked used family hatchback for trouble-free petrol ownership' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 8 %', note: 'Robuste Ketten-Sauger R18 & L13 bestehen Hauptuntersuchungen meist ohne Antriebsmängel' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Saugrohreinspritzung ohne Turbolader oder Zweimassenschwungrad; kaum Pannen' },
            { source: 'WhatCar? Umfrage', value: '97,2 % Zuverlässigkeit', note: 'Regelmäßig ganz vorn bei zuverlässigen gebrauchten Kompaktwagen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-8%', note: 'Цепные атмосферники R18 и L13 проходят возрастные осмотры почти без замечаний' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Распределённый впрыск без турбины и двухмассового маховика — минимум поломок' },
            { source: 'Рейтинг WhatCar?', value: '97,2% надёжности', note: 'Стабильно в лидерах среди подержанных семейных хэтчбеков C-класса' }
          ]
        },
        extendedChecks: {
          en: [
            'Check rear brake discs for uneven rust bands and listen for sticky rear caliper sliders on low-mileage city cars.',
            'Inspect clutch bite point, pedal return, and crisp 2nd/3rd gear synchro engagement at full operating temperature.',
            'Confirm A/C compressor engages immediately with cold airflow (compressor clutch relays can tire with age).',
            'Look along the top windscreen edge and tailgate seams for stone-chip surface rust or water ingress in the boot well.'
          ],
          de: [
            'Hintere Bremsscheiben auf Rostränder und festsitzende Bremssattelführungen bei Kurzstreckenfahrzeugen prüfen.',
            'Kupplungsdruckpunkt und sauberes, kratzfreies Schalten in den 2. und 3. Gang bei warmem Getriebe testen.',
            'Sofortige Kühlleistung der Klimaanlage prüfen (Relais der Magnetkupplung altert gelegentlich).',
            'Windschutzscheiben-Oberkante und Heckklappendichtung auf Steinschlagrost oder Feuchtigkeit in der Reserveradmulde prüfen.'
          ],
          ru: [
            'Осмотреть задние тормозные диски на коррозию и проверить направляющие суппортов у городских машин.',
            'Проверить сцепление и чёткость включения 2-й и 3-й передач на полностью прогретой коробке.',
            'Убедиться, что кондиционер сразу дует холодным (реле муфты компрессора со временем устаёт).',
            'Проверить верхнюю кромку лобового стекла на сколы/ржавчину и нишу багажника на сухость.'
          ]
        },
        savingsNote: {
          en: 'Simple port-injected 1.4/1.8 petrol mechanics avoid turbo, DPF, and dual-mass flywheel bills, saving €300–€550/yr on unexpected repairs vs. turbo rivals.',
          de: 'Schlichte Sauger-Technik ohne Turbolader, DPF und ZMS spart im Schnitt 300–550 €/Jahr an unerwarteten Reparaturen gegenüber Turbobenzinern.',
          ru: 'Простая атмосферная конструкция без турбины, DPF и двухмассового маховика экономит €300–550 в год на непредвиденных ремонтах.'
        },
        market: {
          supplyDemand: {
            en: 'Healthy European supply; clean 1.8 i-VTEC manual cars in Sport or Executive spec are sought after and sell steadily.',
            de: 'Solides Angebot am Markt; gepflegte 1.8 i-VTEC Schalter als Sport oder Executive sind besonders gefragt.',
            ru: 'Хорошее предложение на вторичке; ухоженные 1.8 i-VTEC на механике в версиях Sport и Executive быстро находят покупателей.'
          },
          sweetSpot: {
            en: '2015–2017 Facelift 1.8 i-VTEC Sport (6-MT) with 80,000–130,000 km and documented valve-clearance check (€8,500–€10,800).',
            de: 'Facelift 2015–2017 als 1.8 i-VTEC Sport (6-Gang) mit 80–130 Tkm und belegter Ventilspiel-Kontrolle (8.500–10.800 €).',
            ru: 'Рестайлинг 2015–2017 гг. 1.8 i-VTEC Sport (6-ст. МКПП) с пробегом 80–130 тыс. км и историей ТО (€8 500–10 800).'
          },
          outlook3to5yr: {
            en: 'Gentle depreciation toward €5,500–€6,800 in 3–5 yrs; bulletproof 1.8 NA reputation keeps resale noticeably stronger than downsized turbos.',
            de: 'Sehr moderater Wertverlust auf ca. 5.500–6.800 € in 3–5 Jahren — der Ruf des unverwüstlichen 1.8 Saugers stützt den Restwert.',
            ru: 'Плавное снижение цены к €5 500–6 800 через 3–5 лет: репутация неубиваемого 1.8 удерживает ликвидность лучше малообъёмных турбо.'
          }
        },
        watchoutExtra: {
          en: [
            'Some 2012–2013 early 1.8 R18Z4 engines can use mild oil if driven hard on long 20,000 km oil intervals.',
            'Top windscreen rubber trim can trap grit and initiate roof-edge paint bubbling if stone chips go untouched.'
          ],
          de: [
            'Frühe 2012–2013er 1.8 R18Z4 können bei langen 20.000-km-Ölintervallen und Autobahntempo leicht Öl verbrauchen.',
            'Am oberen Rand der Windschutzscheibe sammelt sich teils Schmutz, der bei unbehandelten Steinschlägen zu Rostbläschen führt.'
          ],
          ru: [
            'Ранние моторы 1.8 (2012–2013) при редкой замене масла раз в 20 тыс. км могут допускать умеренный угар масла.',
            'Верхняя кромка крыши над лобовым стеклом склонна к коррозии при незаделанных сколах от камней.'
          ]
        }
      },
      diesel: {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average', note: '1.6 & 2.2 i-DTEC blocks are mechanically stout; emissions & wear items reflect highway mileage' },
            { source: 'ADAC Pannenstatistik', value: 'Strong Long-Haul', note: 'Low roadside failure rate when driven on sustained motorway commutes' },
            { source: 'WhatCar? Survey', value: '94.6% Reliability', note: '1.6 i-DTEC scores strongly for fuel efficiency and drivetrain longevity' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich', note: '1.6 & 2.2 i-DTEC sind mechanisch zäh; Mängel betreffen eher hohe Langstrecken-Laufleistung' },
            { source: 'ADAC Pannenstatistik', value: 'Stark auf Langstrecke', note: 'Sehr geringe Pannenquote bei regelmäßigem Autobahn- und Pendelbetrieb' },
            { source: 'WhatCar? Umfrage', value: '94,6 % Zuverlässigkeit', note: 'Der 1.6 i-DTEC überzeugt durch sehr hohe Effizienz und lange Lebensdauer' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего', note: 'Дизели 1.6 и 2.2 i-DTEC механически крепки; замечания обычно связаны с большими пробегами' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен на трассе', note: 'Низкий процент поломок при регулярной загородной эксплуатации' },
            { source: 'Рейтинг WhatCar?', value: '94,6% надёжности', note: '1.6 i-DTEC высоко ценят за экономичность и ресурс силового агрегата' }
          ]
        },
        extendedChecks: {
          en: [
            'Check tailpipe for heavy black soot and verify regular motorway journeys so DPF regenerations completed properly.',
            'Test idle with clutch pedal in vs. out to catch dual-mass flywheel rattle or shudder under low-rpm torque.',
            'Inspect rubber turbo intake boot and intercooler hoses for hairline splits or oil weeping.',
            'Verify whether 1.6 i-DTEC is Euro 5 (2013–2014) or Euro 6 (2015+ facelift) if urban emission zones matter.'
          ],
          de: [
            'Endrohr auf Ruß prüfen und Langstrecken-Nutzung im Vorbesitz erfragen, damit der DPF sauber regenerieren konnte.',
            'Im Leerlauf Kupplung treten und lösen — auf Klappern des Zweimassenschwungrads unter Drehmoment achten.',
            'Ansaugschlauch vor dem Turbolader und Ladeluftschläuche auf feine Risse oder Ölnebel kontrollieren.',
            'Bei Umweltzonen genau prüfen, ob der 1.6 i-DTEC Euro 5 (2013–2014) oder Euro 6 (ab Facelift 2015) erfüllt.'
          ],
          ru: [
            'Осмотреть выхлопную трубу на сажу и убедиться, что машина регулярно ездила по трассе для прожига DPF.',
            'На холостых выжать и отпустить сцепление — проверить отсутствие стука двухмассового маховика.',
            'Проверить резиновый патрубок впуска к турбине и шланги интеркулера на трещины и масляный пот.',
            'Уточнить эко-класс 1.6 i-DTEC: Euro 5 (2013–2014) или Euro 6 (рестайлинг 2015+).'
          ]
        },
        savingsNote: {
          en: 'Real-world 4.5 L/100 km (1.6 i-DTEC) saves €500–€800/yr in fuel on 20,000+ km/yr commutes, offsetting higher diesel servicing and road tax.',
          de: 'Reale 4,5 L/100 km beim 1.6 i-DTEC sparen ab 20.000 km/Jahr rund 500–800 € Spritkosten und gleichen höhere Steuer und Wartung aus.',
          ru: 'Реальный расход 4,5 л/100 км у 1.6 i-DTEC экономит €500–800 в год на топливе при пробегах от 20 тыс. км/год.'
        },
        market: {
          supplyDemand: {
            en: 'Good availability of 1.6 i-DTEC fleet and commuter hatches; 2.2 i-DTEC models are scarcer and mostly Euro 5 pre-facelift.',
            de: 'Gutes Angebot beim sparsamen 1.6 i-DTEC; der ältere 2.2 i-DTEC (Euro 5) ist seltener und günstiger eingepreist.',
            ru: 'На рынке много экономичных 1.6 i-DTEC; более мощный 2.2 i-DTEC встречается реже и стоит дешевле из-за Euro 5.'
          },
          sweetSpot: {
            en: '2015–2017 Euro 6 1.6 i-DTEC Sport with 100,000–150,000 km and clean motorway service history (€8,000–€10,200).',
            de: '2015–2017 Euro-6 1.6 i-DTEC Sport mit 100–150 Tkm und sauberer Langstrecken-Wartung (8.000–10.200 €).',
            ru: '2015–2017 гг. Euro 6 1.6 i-DTEC Sport с пробегом 100–150 тыс. км и трассовой историей (€8 000–10 200).'
          },
          outlook3to5yr: {
            en: 'Gradual drop to €4,500–€6,000 over 3–5 yrs; Euro 5 2.2 i-DTEC depreciates steeper in cities but remains a bargain long-distance cruiser.',
            de: 'Rückgang auf ca. 4.500–6.000 € in 3–5 Jahren; Euro-5-Diesel (2.2) verlieren in Städten schneller, bleiben aber starke Dauerläufer.',
            ru: 'Снижение до €4 500–6 000 за 3–5 лет; дизель 2.2 (Euro 5) дешевеет быстрее в мегаполисах, но остаётся отличным трассовым авто.'
          }
        },
        watchoutExtra: {
          en: [
            '2.2 i-DTEC carries noticeably higher German/EU CO2 & displacement diesel tax plus heavier front-end tyre/DMF wear.',
            'Both diesels rely on clean EGR valves and unobstructed DPF sensors — budget ~€350–€650 if soot cleaning is overdue past 160,000 km.'
          ],
          de: [
            'Der 2.2 i-DTEC verursacht spürbar höhere Kfz-Steuer sowie stärkere Belastung an Vorderreifen und Zweimassenschwungrad.',
            'Bei beiden Dieseln auf sauberes AGR-Ventil und intakten DPF-Differenzdrucksensor achten (Reinigung ab 160 Tkm ca. 350–650 €).'
          ],
          ru: [
            'Дизель 2.2 i-DTEC заметно дороже по налогу и быстрее нагружает передние шины с двухмассовым маховиком.',
            'Оба дизеля чувствительны к чистоте клапана EGR и датчика перепада давления DPF при пробегах свыше 160 тыс. км.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (Civic IX FK)', de: 'EU / DE Ausstattungslinien (Civic IX FK)', ru: 'Европейские комплектации (Civic IX FK)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2015+ facelift condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Facelift-Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: '2015 Facelift (FK II) Cabin & Chassis Upgrades', de: 'Facelift-Upgrades ab 2015 (FK II)', ru: 'Обновления рестайлинга 2015 года (FK II)' },
      faceliftKicker: { en: '2015+ Refresh', de: 'Facelift 2015+', ru: 'Рестайлинг 2015+' },
      trims: [
        {
          id: 's',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'S', de: 'S', ru: 'S' },
          delta: { en: '-€800 – €1,200', de: '-800 – 1.200 €', ru: '-€800 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Entry trim keeping Honda Magic Seats and safety basics, but with manual A/C and basic wheels.',
            de: 'Basismodell mit Magic Seats und solider Sicherheit, aber manueller Klimaanlage und schlichten Rädern.',
            ru: 'Базовая версия с фирменными креслами Magic Seats, но ручным кондиционером и простым оснащением.'
          },
          highlights: {
            en: ['Honda Magic Seats & 4-wheel disc brakes', '16" alloys & LED daytime running lights', 'Manual A/C & basic audio'],
            de: ['Honda Magic Seats & 4x Scheibenbremsen', '16"-Alus & LED-Tagfahrlicht', 'Manuelle Klimaanlage & Basis-Radio'],
            ru: ['Кресла-трансформеры Magic Seats', 'Диски 16" и светодиодные ДХО', 'Кондиционер и базовое аудио']
          }
        },
        {
          id: 'comfort',
          tierClass: 'tier-3',
          tier: { en: 'Core Daily', de: 'Komfort', ru: 'Комфорт' },
          name: { en: 'Comfort', de: 'Comfort', ru: 'Comfort' },
          delta: { en: '-€300 – €600', de: '-300 – 600 €', ru: '-€300 – €600' },
          isSweetSpot: false,
          summary: {
            en: 'Common daily spec adding automatic climate control, heated mirrors, and multifunction controls.',
            de: 'Solide Alltags-Linie mit Klimaautomatik, beheizbaren Spiegeln und Multifunktionslenkrad.',
            ru: 'Практичная средняя версия с климат-контролем, обогревом зеркал и мультирулём.'
          },
          highlights: {
            en: ['Single-zone auto climate & USB audio', '16" alloys & cruise control (late FL)', 'Heated door mirrors & 6-speaker audio'],
            de: ['Klimaautomatik & USB-Audio', '16"-Alus & Tempomat (spätere Modelle)', 'Beheizbare Spiegel & 6 Lautsprecher'],
            ru: ['Климат-контроль и USB-аудио', 'Диски 16" и круиз-контроль', 'Обогрев зеркал и 6 динамиков']
          }
        },
        {
          id: 'sport',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Sport', de: 'Sport', ru: 'Sport' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'Best used Civic IX sweet spot — adds dual-zone climate, reversing camera, 17" alloys, and black headliner.',
            de: 'Bester Gebraucht-Sweet-Spot: 2-Zonen-Klima, Rückfahrkamera, 17"-Alus, schwarzer Himmel und Sportschürzen.',
            ru: 'Оптимальный выбор: 2-зонный климат, камера заднего вида, диски 17" и тёмный потолок.'
          },
          highlights: {
            en: ['17" alloys & Sport front/rear mesh trim', 'Dual-zone auto climate & reversing camera', 'Cruise control, fog lights & leather wheel'],
            de: ['17"-Alus & Sport-Wabengrill', '2-Zonen-Klima & Rückfahrkamera', 'Tempomat, Nebelscheinwerfer & Lederlenkrad'],
            ru: ['Диски 17" и спортивная решётка', '2-зонный климат и камера заднего вида', 'Круиз-контроль и кожаный руль']
          }
        },
        {
          id: 'lifestyle',
          tierClass: 'tier-6',
          tier: { en: 'Premium', de: 'Lifestyle', ru: 'Премиум' },
          name: { en: 'Lifestyle', de: 'Lifestyle', ru: 'Lifestyle' },
          delta: { en: '+€500 – €900', de: '+500 – 900 €', ru: '+€500 – €900' },
          isSweetSpot: false,
          summary: {
            en: 'High-value upper trim adding Bi-Xenon headlights, heated seats, parking sensors, and premium subwoofer audio.',
            de: 'Hochwertige Linie mit Bi-Xenon, Sitzheizung, Parksensoren rundum und Premium-Soundsystem samt Subwoofer.',
            ru: 'Богатая комплектация с биксеноном, подогревом сидений, парктрониками и аудио с сабвуфером.'
          },
          highlights: {
            en: ['Bi-Xenon headlamps + high-beam assist', 'Heated front seats & front/rear sensors', '8-speaker premium audio + subwoofer'],
            de: ['Bi-Xenon-Licht + Fernlichtassistent', 'Sitzheizung vorn & Parksensoren v/h', 'Premium-Sound (8 Lautsprecher + Subwoofer)'],
            ru: ['Биксеноновые фары + автодальний', 'Подогрев сидений и парктроники вкруг', 'Премиум-аудио с сабвуфером']
          }
        },
        {
          id: 'executive',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Executive', ru: 'Флагман' },
          name: { en: 'Executive', de: 'Executive', ru: 'Executive' },
          delta: { en: '+€1,000 – €1,700', de: '+1.000 – 1.700 €', ru: '+€1 000 – €1 700' },
          isSweetSpot: false,
          summary: {
            en: 'Full flagship Civic IX with perforated leather seats, panoramic glass roof, keyless entry, and LED lights (FL).',
            de: 'Voll ausgestattetes Topmodell mit Vollleder, Panoramaglasdach, Keyless Entry und LED-Licht (ab Facelift).',
            ru: 'Максимальная комплектация с кожей, панорамной крышей, бесключевым доступом и LED-оптикой.'
          },
          highlights: {
            en: ['Full leather seats + power lumbar', 'Panoramic glass roof & Smart Entry', 'Bi-Xenon / LED (2015+) & Honda Connect nav opt.'],
            de: ['Vollleder-Sitze mit elektr. Lendenwirbelstütze', 'Panorama-Glasdach & Smart Entry', 'Bi-Xenon / LED (ab 2015) & Honda Connect'],
            ru: ['Кожаный салон с электроподпором', 'Панорамная крыша и бесключевой доступ', 'Bi-Xenon / LED (с 2015 г.) и Honda Connect']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Rear Parking Camera', de: 'Rückfahrkamera', ru: 'Камера заднего вида' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Honda Connect (7" 2015+ Facelift)', de: 'Honda Connect (7" ab Facelift 2015)', ru: 'Honda Connect (7" рестайлинг 2015+)' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'no', 'opt', 'std', 'std'] },
        { feature: { en: 'Bi-Xenon / LED Headlights', de: 'Bi-Xenon- / LED-Scheinwerfer', ru: 'Фары Bi-Xenon / LED' }, vals: ['no', 'no', 'no', 'std', 'std'] },
        { feature: { en: 'Full Leather Upholstery', de: 'Vollleder-Ausstattung', ru: 'Кожаная обивка салона' }, vals: ['no', 'no', 'no', 'no', 'std'] },
        { feature: { en: 'Panoramic Glass Roof', de: 'Panorama-Glasdach', ru: 'Панорамная крыша' }, vals: ['no', 'no', 'no', 'no', 'std'] },
        { feature: { en: 'City-Brake Active (CTBA 2015+)', de: 'City-Notbremsassistent (CTBA 2015+)', ru: 'Автоторможение CTBA (2015+)' }, vals: ['opt', 'opt', 'std', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Two-tier spacecraft dashboard places the high digital speedometer directly in the driver’s forward sightline.',
          'Under-seat fuel tank unlocks flip-up rear Magic Seats and a class-leading 477 L deep boot.',
          'Split rear-window spoiler bar bisects mirror visibility — trims with rear camera and sensors are worth prioritizing.'
        ],
        de: [
          'Zweistöckiges Cockpit legt den digitalen Tacho fast wie ein Head-up-Display direkt ins Blickfeld.',
          'Mittiger Kraftstofftank ermöglicht hochklappbare Magic Seats und einen riesigen 477-Liter-Kofferraum.',
          'Der Spoilerbalken teilt die Heckscheibe — Versionen mit Rückfahrkamera und Sensoren sind im Alltag Gold wert.'
        ],
        ru: [
          'Двухуровневая передняя панель выносит цифровой спидометр прямо на линию взгляда водителя.',
          'Бак под передними сиденьями дал складные подушки Magic Seats и огромный багажник 477 л.',
          'Перемычка на заднем стекле режет обзор назад — комплектации с камерой и парктрониками предпочтительнее.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: '1.4 and 1.8 i-VTEC cabins pair a crisp short-throw 6-speed shifter with a high-revving 7,000 rpm tachometer, a green ECON dashboard button, and calm idle refinement.',
          de: '1.4 und 1.8 i-VTEC kombinieren den knackigen 6-Gang-Schalthebel mit einem bis 7.000/min reichenden Drehzahlmesser, ECON-Taste und ruhigem Leerlauf.',
          ru: 'Бензиновые 1.4 и 1.8 i-VTEC сочетают чёткую 6-ст. МКПП с тахометром до 7 000 об/мин, кнопкой ECON и тихой работой на холостых.'
        },
        diesel: {
          en: '1.6 and 2.2 i-DTEC diesel models feature a lower-scale 5,500 rpm tachometer, extra firewall sound deadening, and effortless tall-gear cruising ergonomics with a slightly heavier clutch pedal.',
          de: 'Die 1.6 und 2.2 i-DTEC Diesel bieten einen bis 5.500/min skalierten Drehzahlmesser, zusätzliche Spritzwanddämmung sowie langstreckentaugliche Übersetzung bei etwas festerem Kupplungspedal.',
          ru: 'Дизельные 1.6 и 2.2 i-DTEC оснащены тахометром до 5 500 об/мин, усиленной шумоизоляцией моторного щита и длинными передачами при чуть более упругом сцеплении.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2015+ restyled front bumper, integrated LED daytime running lights, and sharper black mesh grille.',
          'New 7" Honda Connect Android touchscreen infotainment with faster Bluetooth and optional Garmin navigation.',
          'Revised front/rear dampers plus Agile Handling Assist (brake-based torque vectoring) improve cornering composure.',
          'Standard City-Brake Active (CTBA) laser emergency braking plus newly available Driver Assistance safety pack.'
        ],
        de: [
          'Überarbeitete Frontschürze ab 2015 mit integrierten LED-Tagfahrlichtern und sportlicherem Grill.',
          'Neues 7"-Honda-Connect-Infotainment (Android-basiert) mit flinkerem Bluetooth und optionaler Garmin-Navigation.',
          'Neu abgestimmte Stoßdämpfer samt Agile Handling Assist verbessern Lenkpräzision und Abrollkomfort.',
          'Serienmäßiger City-Notbremsassistent (CTBA) sowie optionales Fahrassistenz-Paket mit Spur- und Totwinkelwarner.'
        ],
        ru: [
          'Обновлённый передний бампер 2015+ с интегрированными ДХО и более выразительной решёткой радиатора.',
          'Новая 7-дюймовая мультимедиа Honda Connect на базе Android с улучшенным Bluetooth и навигацией Garmin.',
          'Перенастроенные амортизаторы и система Agile Handling Assist улучшили плавность хода и устойчивость в поворотах.',
          'Стандартное автоторможение в городе (CTBA) и расширенный пакет ассистентов водителя.'
        ]
      }
    }
  }
});