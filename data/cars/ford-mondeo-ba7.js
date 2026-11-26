// AutoDuel Vehicle Data — ford-mondeo-ba7
registerAutoDuelVehicle({
  roster: {
    id: 'ford-mondeo-ba7',
    number: '05',
    carType: 'sedan',
    gridOrder: 5,
    gridLabel: 'Ford Mondeo',
    yearMake: '2007-2014 FORD',
    shortTitle: 'MONDEO (BA7)',
    fullName: '2007-2014 Ford Mondeo (BA7)',
    rarityClass: 'rarity-dependable',
    drivetrain: 'FWD',
    image: 'assets/ford-mondeo-ba7.webp',
    defaultEngineId: '1.6-ecoboost',
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspMultiLink',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLowMod',
      rideTuning: { en: 'Supple / Autobahn-Ready', de: 'Komfortabel / Autobahn', ru: 'Мягкая / Трассовая' },
      highwayNoise: { en: '~68 dB · Quiet', de: '~68 dB · Sehr leise', ru: '~68 дБ · Тихо' },
      cabinMaterials: { en: 'Solid Mid-Size Trim', de: 'Solide Mittelklasse', ru: 'Добротный D-класс' },
      controls: '@physButtons',
      turningCircle: '11.6 m',
      visibility: { en: 'Good Forward · Long Rear', de: 'Gut vorn · Langes Heck', ru: 'Хорошо спереди · Длинный кузов' },
      euroNcap: '★★★★★ (2007)',
      safetyTech: { en: '✓ ESP · ✓ 7 Airbags (Knee)', de: '✓ ESP · ✓ 7 Airbags (Knie)', ru: '✓ ESP · ✓ 7 подушек' },
      rearRoom: { en: 'Huge Limousine Space', de: 'Riesig (Oberklasse-Niveau)', ru: 'Огромный простор сзади' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Doors', de: '✓ 2× ISOFIX · Breite Türen', ru: '✓ 2× ISOFIX · Широкие двери' },
      bootVolume: '540 L / 1,460 L',
      seatUtility: { en: '60/40 Huge Hatchback Lid', de: '60/40 Große Heckklappe', ru: '60/40 Огромный лифтбек' },
      payloadRoof: '540 kg · 75 kg',
      driveline: 'FWD',
      chassisFeel: { en: 'Class-Best Steering', de: 'Klassenbeste Lenkung', ru: 'Эталонная управляемость' },
      tractionDiff: { en: 'FWD · Open Diff', de: 'FWD · Offen', ru: 'FWD · Своб. дифф.' },
      braking1000: '~36.0 m',
      brakeSetup: '@discs4',
      valueRetention: '@retMod',
      resaleDemand: '@demSteady'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Ford', clutchDmf: '@clutchDmf', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: { specs: [{ k: 'damperSetup', v: { en: 'Long-Wheelbase Control-Blade Multi-Link Rear', de: 'Langer Radstand · Control-Blade-Mehrlenker-HA', ru: 'Длинная база · Задняя многорычажка Control Blade' } }, { k: 'seatSupport', v: { en: 'Wide Long-Distance Seats (Heated/Ventilated Opt.)', de: 'Breite Langstrecken-Sitze (Optional belüftet)', ru: 'Широкие кресла для дальних поездок' } }], note: { en: 'Soaks up motorway miles with executive-class composure.', de: 'Fährt sich auf langen Autobahnetappen ausgesprochen ruhig und erwachsen.', ru: 'Поглощает трассовые километры с комфортом бизнес-класса.' } },
        highwayNoise: { specs: [{ k: 'cabinNoise130', v: { en: '~68 dB(A) at 130 km/h (Quiet Cruiser)', de: '~68 dB(A) bei 130 km/h (Sehr ruhig)', ru: '~68 дБ(А) при 130 км/ч (тихий круизер)' } }, { k: 'acousticGlass', v: { en: 'Good Soundproofing · Low Wind Noise', de: 'Gute Dämmung · Wenig Windgeräusche', ru: 'Хорошая шумоизоляция · Минимум шума ветра' } }], note: { en: 'One of the quietest mainstream family cars of its generation.', de: 'Eines der ruhigsten Familienautos seiner Generation.', ru: 'Один из самых тихих семейных автомобилей своего времени.' } }
      },
      interiorQualityFeatures: {
        cabinMaterials: { specs: [{ k: 'dashTrim', v: { en: 'Soft-Touch Dash · Convers+ Color Cluster (Titanium)', de: 'Soft-Touch-Cockpit · Convers+-Display (Titanium)', ru: 'Мягкая панель · Экран Convers+ (Titanium)' } }, { k: 'buildFit', v: { en: 'Solid German Build (Genk Plant)', de: 'Solide Verarbeitung (Werk Genk)', ru: 'Добротная европейская сборка' } }], note: { en: 'Titanium trims feel noticeably more upscale than base Trend models.', de: 'Titanium-Ausstattungen wirken deutlich hochwertiger als einfache Trend-Versionen.', ru: 'Версии Titanium ощущаются заметно богаче базовых.' } },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: { specs: [{ k: 'turningDiam', v: '11.6 m' }, { k: 'bodyDimensions', v: '4,778 × 1,886 mm' }], note: { en: 'Big 4.78 m × 1.89 m footprint feels huge on highways, tight in old European garages.', de: 'Mit 4,78 m × 1,89 m sehr stattlich — braucht in engen Parkhäusern etwas Platz.', ru: 'Крупный кузов (4.78 × 1.89 м) — простор на трассе, но аккуратность в тесных дворах.' } },
        visibility: { specs: [{ k: 'sightlines', v: { en: 'Good Forward · Long Sloping Liftback Rear', de: 'Gut vorn · Langes Fließheck hinten', ru: 'Хорошо спереди · Длинная корма лифтбека' } }, { k: 'parkingAids', v: { en: 'Front & Rear Parking Sensors Common', de: 'Parksensoren vorn & hinten weit verbreitet', ru: 'Парктроники спереди и сзади часто в базе' } }], note: { en: 'Front/rear sensors are very helpful given the 4.78 m length.', de: 'Parksensoren sind bei 4,78 m Außenlänge sehr hilfreich.', ru: 'Парктроники сильно упрощают маневрирование.' } }
      },
      safetyProtection: {
        euroNcap: { specs: [{ k: 'ncapOverall', v: '★★★★★ (2007)' }, { k: 'ncapBreakdown', v: { en: '35/37 Adult · 4★ Child · 2★ Pedestrian', de: '35/37 Erwachsene · 4★ Kinder · 2★ Fußgänger', ru: '35/37 Взрослые · 4★ Дети · 2★ Пешеходы' } }, { k: 'airbagsCount', v: { en: '7 Airbags (incl. Driver Knee Airbag)', de: '7 Airbags (inkl. Fahrer-Knieairbag)', ru: '7 подушек (вкл. коленную водителя)' } }], note: { en: 'Heavy, wide Euro-platform shell with 7 standard airbags.', de: 'Schwere, breite Karosserie mit 7 serienmäßigen Airbags.', ru: 'Тяжёлый крепкий кузов и 7 подушек уже в базе.' } },
        safetyTech: { specs: [{ k: 'activeAssists', v: { en: '✓ ESP Standard · Optional ACC / Blind-Spot (FL)', de: '✓ ESP Serie · Optional ACC & Totwinkel (Facelift)', ru: '✓ ESP в базе · Опционально ACC / слепые зоны' } }], note: { en: '2011+ facelift models offer rare-for-its-era blind-spot and lane warnings.', de: 'Facelift-Modelle ab 2011 bieten optional Totwinkel- und Spurwarner.', ru: 'Рестайлинг с 2011 года добавил контроль слепых зон.' } }
      },
      passengerSpaceErgonomics: {
        rearRoom: { specs: [{ k: 'wheelbase', v: '2,850 mm (Limousine-Class)' }, { k: 'rearLegHead', v: { en: 'Cavernous Rear Legroom & 3-Across Width', de: 'Riesige Beinfreiheit & volle 3er-Breite im Fond', ru: 'Огромный запас для ног и ширина на троих' } }], note: { en: '2,850 mm wheelbase beats many E-segment luxury sedans for back-seat legroom.', de: '2.850 mm Radstand bieten mehr Beinfreiheit als viele Oberklasse-Limousinen.', ru: 'База 2850 мм дарит простор уровня бизнес-класса.' } },
        isofixEntry: { specs: [{ k: 'isofixAccess', v: { en: '✓ 2× ISOFIX · Wide Rear Doors · Easy Child Seats', de: '✓ 2× ISOFIX · Breite Fondtüren', ru: '✓ 2× ISOFIX · Широкие задние двери' } }], note: { en: 'Swallows bulky rear-facing child seats without cramping front passengers.', de: 'Schluckt selbst große Reboarder-Kindersitze ohne Enge vorn.', ru: 'Легко вмещает крупные детские кресла, не стесняя передних пассажиров.' } }
      },
      interiorBootSpace: {
        bootVolume: { specs: [{ k: 'bootUpDown', v: '540 L / 1,460 L (Liftback)' }, { k: 'loadSill', v: { en: '~680 mm · Massive Wide Hatch Opening', de: '~680 mm · Riesige Fließheck-Öffnung', ru: '~680 мм · Огромный проём лифтбека' } }], note: { en: 'Massive 540 L liftback boot swallows strollers and furniture almost like an estate.', de: 'Riesiger 540-L-Kofferraum mit großer Heckklappe — fast auf Kombi-Niveau.', ru: 'Гигантский 540-литровый багажник лифтбека почти не уступает универсалу.' } },
        seatUtility: { specs: [{ k: 'foldingMech', v: { en: '60/40 Split-Fold Rear Bench', de: '60/40 geteilt umklappbare Rückbank', ru: 'Складывание спинки 60/40' } }], note: { en: 'Huge 1,460 L flat cargo bay when folded.', de: 'Enorme 1.460 L Ladevolumen bei umgeklappter Bank.', ru: 'Огромные 1460 л при сложенном заднем ряде.' } }
      },
      payloadTowing: {
        payloadRoof: { specs: [{ k: 'maxPayload', v: '~540 kg' }, { k: 'roofLoad', v: '75 kg' }], note: { en: 'Heavy-duty family payload.', de: 'Hohe Familien-Zuladung.', ru: 'Отличная грузоподъёмность для всей семьи.' } },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: { specs: [{ k: 'kerbWeight', v: '1,435–1,610 kg' }, { k: 'handlingChar', v: { en: 'Hydraulic Steering Feedback · Benchmark D-Segment Agility', de: 'Direkte hydraulische Lenkung · Klassenbeste Dynamik', ru: 'Честный гидроусилитель · Эталон рулёжки D-класса' } }, { k: 'tyreSizes', v: '215/55 R16 · 235/45 R17' }], note: { en: 'Widely considered the best-handling mainstream family car of its era.', de: 'Gilt als der handlichste Mittelklassewagen seiner Generation.', ru: 'Признан лучшим по управляемости семейным авто своего поколения.' } },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },    sharedBuyerFit: {
      cards: {
        mondeoCabinBoot: {
          en: 'You want mid-size family space: Wide rear legroom and a huge 528–550 L boot handle road trips and family gear with ease.',
          de: 'Du brauchst echtes Mittelklasse-Format: Großzügige Beinfreiheit im Fond und 528–550 L Kofferraum meistern Reisen und Familiengepäck locker.',
          ru: 'Тебе нужен просторный салон D-класса: Много места сзади и огромный багажник 528–550 л легко вмещают семейный багаж.'
        },
        mondeoSharpChassis: {
          en: 'You enjoy confident steering in a big car: Direct chassis tuning makes the Mondeo feel lighter and sharper than most rivals.',
          de: 'Du magst präzises Handling trotz Größe: Das ausgewogene Fahrwerk lässt den Mondeo spürbar agiler einlenken als viele Konkurrenten.',
          ru: 'Тебе нравится точная управляемость в большом кузове: Собранное шасси делает Mondeo живее и понятнее большинства конкурентов.'
        },
        mondeoLongParking: {
          en: 'You squeeze into tight city bays daily: At 4.84 meters long, parallel parking in narrow urban streets takes patience.',
          de: 'Du parkst täglich in engen Innenstädten: Mit 4,84 Metern Länge wird die Parklückensuche in schmalen Straßen schnell mühsam.',
          ru: 'Ты каждый день паркуешься в тесном центре: Длина 4,84 метра усложняет поиск места на узких городских улицах.'
        },
        mondeoBaseUnderpowered: {
          en: 'You drive loaded on fast hills: The 115–120 HP base engines feel sluggish when overtaking or climbing with passengers.',
          de: 'Du fährst oft voll beladen bergauf: Die 115–120-PS-Basismotoren wirken beim Überholen oder mit Gepäck spürbar angestrengt.',
          ru: 'Ты часто ездишь гружёным по холмам: Базовые 115–120 л.с. заметно теряют темп при обгонах и на затяжных подъёмах.'
        },
        mondeoPowerShiftRisk: {
          en: 'You want worry-free automatic shifting: The wet PowerShift dual-clutch gearbox demands strict 60,000 km fluid changes to avoid costly repairs.',
          de: 'Du willst eine sorglose Automatik: Das PowerShift-Doppelkupplungsgetriebe verlangt zwingend alle 60.000 km frisches Öl, sonst wird es teuer.',
          ru: 'Ты хочешь беспроблемный автомат: Робот PowerShift строго требует замены масла каждые 60 000 км, иначе ремонт выйдет дорогим.'
        },
        mondeo25tEnthusiast: {
          en: 'You want sleeper 5-cylinder punch: The 220 HP 2.5T pulls hard with a rich soundtrack, though fuel and insurance bills climb.',
          de: 'Du suchst einen unauffälligen 5-Zylinder-Sleeper: Der 220-PS-2.5T schiebt mit tollem Klang kräftig an, kostet aber spürbar Sprit und Unterhalt.',
          ru: 'Ты хочешь скрытый драйв 5 цилиндров: 220-сильный 2.5T отлично едет и звучит, но требует больше расходов на бензин и содержание.'
        },
        mondeoDieselTowing: {
          en: 'You cover heavy motorway miles or tow: The 2.0 and 2.2 TDCi diesels combine relaxed highway cruising with strong towing torque.',
          de: 'Du fährst viel Autobahn oder ziehst Anhänger: 2.0 und 2.2 TDCi verbinden entspanntes Reisetempo mit satter Zugkraft.',
          ru: 'Ты много ездишь по трассе или с прицепом: Дизели 2.0 и 2.2 TDCi сочетают уверенную тягу с низким расходом на дальняке.'
        },
        mondeoInteriorAge: {
          en: 'You want a modern, upscale cabin: Silver-painted center trim and older Ford infotainment feel dated next to newer rivals.',
          de: 'Du erwartest ein modernes Premium-Cockpit: Silbernes Hartplastik in der Mittelkonsole und das ältere Infotainment wirken heute angestaubt.',
          ru: 'Ты хочешь современный и дорогой интерьер: Серебристый пластик центральной консоли и старая мультимедиа выглядят устаревшими.'
        },
        mondeoEcoBoostCare: {
          en: 'You skip strict cooling & oil checks: Early 1.6 EcoBoost units need verified cooling-hose updates and regular oil changes.',
          de: 'Du nimmst Wartung auf die leichte Schulter: Frühe 1.6 EcoBoost brauchen geprüfte Kühlmittel-Leitungen und strikte Ölwechsel.',
          ru: 'Ты не хочешь следить за охлаждением и маслом: Ранние 1.6 EcoBoost требуют проверки патрубков охлаждения и частой замены масла.'
        },
        mondeo25tCosts: {
          en: 'You want low fuel and tax bills: The 5-cylinder 2.5T drinks 9–11 L/100 km and carries noticeably higher tax & insurance.',
          de: 'Du willst niedrige Sprit- und Fixkosten: Der 5-Zylinder-2.5T verbraucht 9–11 L/100 km und liegt bei Steuer & Versicherung deutlich höher.',
          ru: 'Ты ищешь минимальные расходы на бензин и налоги: 5-цилиндровый 2.5T расходует 9–11 л/100 км и дороже по налогам и страховке.'
        },
        mondeoNaThirst: {
          en: 'You expect modern turbo economy: The 2.0/2.3 naturally aspirated petrols rev higher on the motorway and use more fuel.',
          de: 'Du erwartest modernen Turbo-Sparsamkeit: Die 2.0/2.3-Sauger drehen auf der Autobahn höher und verbrauchen spürbar mehr.',
          ru: 'Ты ждёшь экономичности современного турбомотора: Атмосферники 2.0/2.3 на трассе держат высокие обороты и расходуют больше.'
        },
        mondeoTurboPull: {
          en: 'You want effortless mid-range punch: Turbocharged torque moves this large D-segment sedan briskly without constant downshifting.',
          de: 'Du willst souveränen Durchzug: Das Turbo-Drehmoment schiebt den großen Mondeo mühelos voran, ohne dass du ständig schalten musst.',
          ru: 'Тебе нужна лёгкая тяга в середине: Турбомотор уверенно тянет крупный седан без постоянных переключений вниз.'
        },
        mondeoRearArchCheck: {
          en: 'You want zero underbody wear checks: High-mileage rear trailing-arm bushes and wheel-arch stone-chip edges need inspection.',
          de: 'Du willst keinerlei Fahrwerks-/Rost-Checks: Hintere Längslenkerbuchsen und Steinschlag-Radläufe brauchen bei hoher Laufleistung Kontrolle.',
          ru: 'Ты не хочешь следить за подвеской и кромками: Задние сайлентблоки и арки со сколами требуют осмотра на большом пробеге.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'A spacious, sharp-handling mid-size sedan with simple naturally aspirated mechanics — best if you skip heavy motorway overtaking.',
          de: 'Eine geräumige, fahraktive Mittelklasse mit simpler Sauger-Technik — ideal, wenn du keine schnellen Autobahn-Überholmanöver brauchst.',
          ru: 'Просторный и хорошо управляемый седан D-класса с простым атмосферником — хорош, если не гоняешь на трассе.'
        },
        ideal: [
          'mondeoCabinBoot',
          'mondeoSharpChassis',
          'globalSimpleNoTurbo',
          'globalPetrolCityZones'
        ],
        skip: ['mondeoLongParking', 'mondeoNaThirst', 'mondeoInteriorAge', 'mondeoRearArchCheck']
      },
      'turbo-petrol': {
        summary: {
          en: 'A roomy, comfortable family cruiser with brisk turbocharged pace — watch dual-clutch service history on automatic versions.',
          de: 'Ein geräumiger Reisewagen mit kräftigem Turbobenziner — prüfe bei Automatik-Versionen unbedingt die PowerShift-Wartung.',
          ru: 'Просторный семейный седан с бодрым турбобензином — на версиях с автоматом обязательно проверяй обслуживание PowerShift.'
        },
        ideal: ['mondeoCabinBoot', 'mondeoSharpChassis', 'mondeoTurboPull', 'globalPetrolCityZones'],
        skip: [
          'mondeoLongParking',
          'mondeoPowerShiftRisk',
          'mondeoInteriorAge',
          'mondeoRearArchCheck'
        ]
      },
      diesel: {
        summary: {
          en: 'A classic long-distance motorway and towing workhorse — wasted on short urban trips.',
          de: 'Ein klassischer Langstrecken- und Zugwagen für die Autobahn — auf kurzen Stadtwegen fehl am Platz.',
          ru: 'Классический трассовый и тягловый седан для дальних дорог — не подходит для коротких городских поездок.'
        },
        ideal: ['mondeoCabinBoot', 'mondeoSharpChassis', 'mondeoDieselTowing', 'globalDieselLongRange'],
        skip: [
          'globalDieselShortTripRisk',
          'mondeoLongParking',
          'mondeoInteriorAge',
          'mondeoRearArchCheck'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Solid Crash Structure — Check Rear Bushes & Arches',
          strengths: [
            'Solid Crash Structure keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Inspect rear trailing-arm bushes and wheel-arch stone-chip edges for corrosion.',
            'Check Rear Bushes & Arches.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Solide Karosseriestruktur — Hinterachslager & Radläufe',
          strengths: [
            'Solide Karosseriestruktur hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Hintere Längslenkerbuchsen und Radlaufkanten auf Steinschlag-Rost prüfen.',
            'Hinterachslager & Radläufe.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Крепкая структура кузова — Задние рычаги и кромки арок',
          strengths: [
            'Крепкая структура кузова надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Проверьте сайлентблоки задних продольных рычагов и кромки задних арок.',
            'Задние рычаги и кромки арок.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Foamed Dash & Titanium Features',
          strengths: [
            'Foamed Dash & Titanium Features ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Early Sony/Nav screens look dated; check heated windscreen filaments all work.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Geschäumtes Cockpit & Extras',
          strengths: [
            'Geschäumtes Cockpit & Extras sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Ältere Sony-Infotainment-Systeme wirken betagt; Frontscheibenheizung komplett testen.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Мягкий пластик и оснащение',
          strengths: [
            'Мягкий пластик и оснащение обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Старая мультимедиа устарела; проверьте целостность нитей обогрева лобового стекла.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: 'Large 4.85 m Footprint',
          strengths: [
            'Large 4.85 m Footprint makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Long 4.85 m body and high trunk lip make front/rear parking sensors essential.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: 'Große 4,85 m Außenmaße',
          strengths: [
            'Große 4,85 m Außenmaße macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            '4,85 m Länge und hohes Heck erfordern Parksensoren vorn und hinten.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Крупный кузов 4,85 м',
          strengths: [
            'Крупный кузов 4,85 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Длина 4,85 м и высокая корма требуют парктроников спереди и сзади.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2007) — 7 Airbags + Knee Airbag',
          strengths: [
            'Euro NCAP 5★ (2007) provides solid passive crash protection for its class and era.',
            '7 Airbags + Knee Airbag standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2007) — 7 Airbags inkl. Knieairbag',
          strengths: [
            'Euro NCAP 5★ (2007) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '7 Airbags inkl. Knieairbag serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (2007) — 7 подушек (вкл. коленную)',
          strengths: [
            'Euro NCAP 5★ (2007) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '7 подушек (вкл. коленную) входят в оснащение большинства версий.'
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
          headline: 'Limousine-Class Rear Legroom',
          strengths: [
            'Limousine-Class Rear Legroom keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Wide 3-Across Bench + ISOFIX.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Üppige Beinfreiheit im Fond',
          strengths: [
            'Üppige Beinfreiheit im Fond sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Breite Rückbank & leichtes ISOFIX.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Королевский запас для ног',
          strengths: [
            'Королевский запас для ног обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Широкий диван и удобный ISOFIX.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '550L Deep Sedan Boot',
          strengths: [
            'Practical 550L deep sedan boot with huge rear passenger legroom.',
            'Narrow 4-Door Trunk Opening improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '550L Stufenheck-Kofferraum',
          strengths: [
            'Praktischer Nutzwert: 550 L tiefer Kofferraum mit oberklasseähnlicher Beinfreiheit im Fond.',
            'Schmale Limousinen-Öffnung erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Глубокий багажник 550 л',
          strengths: [
            'Практичный объём: глубокий багажник 550 л и огромный запас места сзади.',
            'Узкий проём крышки седана добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Class-Leading Chassis',
          strengths: [
            'Multi-link rear suspension sets the class benchmark for high-speed stability.',
            'Stable at 180+ km/h.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Klassenbestes Fahrwerk',
          strengths: [
            'Mehrlenker-Hinterachse setzt Klassenmaßstäbe bei Autobahntempo und Komfort.',
            'Stabil bei 180+ km/h.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Эталонное шасси',
          strengths: [
            'Многорычажная задняя подвеска — эталон стабильности и комфорта на трассе.',
            'Стабилен на 180+ км/ч.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 37.5 m — 300 mm Discs • Good Stability',
          strengths: [
            '100–0 km/h: 37.5 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 37,5 m — 300 mm Scheiben • Stabil bei Tempo',
          strengths: [
            '100–0 km/h: 37,5 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 37,5 м — 300 мм диски • Стабильны на трассе',
          strengths: [
            '100–0 км/ч: 37,5 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '585 kg Payload • 1,600 kg Braked Tow',
          strengths: ['585 kg Payload and 1,600 kg Braked Tow handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '585 kg Zuladung • 1.600 kg Anhängelast',
          strengths: [
            '585 kg Zuladung und 1.600 kg Anhängelast bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 585 кг • Прицеп до 1 600 кг',
          strengths: ['Нагрузка 585 кг и Прицеп до 1 600 кг закрывают повседневные задачи по загрузке.'],
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
          headline: 'High Value Used Buy',
          strengths: [
            'High Value Used Buy helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Viel Auto fürs Geld',
          strengths: [
            'Viel Auto fürs Geld sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Много авто за свои деньги',
          strengths: [
            'Много авто за свои деньги поддерживает стабильный спрос на вторичном рынке.',
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
            headline: 'Smooth 6-Speed Manual — Moderate DMF Wear',
            strengths: [
              'Smooth 6-Speed Manual matches this powertrain well for everyday driving.',
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
            headline: 'Leichtgängiges 6-Gang — Normaler ZMS-Verschleiß',
            strengths: [
              'Leichtgängiges 6-Gang passt gut zur Motorcharakteristik im Alltag.',
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
            headline: 'Чёткая 6-МКПП — Умеренный износ маховика',
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
            headline: 'Convers+ Cluster Joints',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Tailgate Wiring Loom.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Convers+-Lötstellen prüfen',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Convers+-Lötstellen prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Пайка приборки Convers+',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Пайка приборки Convers+.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Plush Long-Wheelbase Ride',
            strengths: [
              'Plush Long-Wheelbase Ride delivers pleasant everyday composure.',
              'Quiet Cabin & Wide Seats.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveräner Langstreckenkomfort',
            strengths: [
              'Souveräner Langstreckenkomfort sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leise Dämmung & breite Sitze.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавный трассовый ход',
            strengths: [
              'Плавный трассовый ход обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон и широкие кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheap Chassis Wear Parts — Watch Cooling & Turbo Plumbing',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Watch Cooling & Turbo Plumbing.',
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige Fahrwerksteile — Kühlsystem & Turbo teurer',
            strengths: [
              'Günstige Fahrwerksteile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Kühlsystem & Turbo teurer.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дешёвые детали шасси — Дорогой ремонт охлаждения и турбо',
            strengths: [
              'Дешёвые детали шасси помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогой ремонт охлаждения и турбо.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-5mt': {
        transmissionDriveline: {
          en: {
            headline: 'Simple 5-Speed Manual — Cheap Clutch Kit',
            strengths: [
              'Simple 5-Speed Manual matches this powertrain well for everyday driving.',
              'Cheap Clutch Kit.'
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
            headline: 'Einfaches 5-Gang-Getriebe — Günstiger Kupplungssatz',
            strengths: [
              'Einfaches 5-Gang-Getriebe passt gut zur Motorcharakteristik im Alltag.',
              'Günstiger Kupplungssatz.'
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
            headline: 'Простая 5-МКПП — Дешёвый комплект сцепления',
            strengths: [
              'Простая 5-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Дешёвый комплект сцепления.'
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
            headline: 'Convers+ Cluster Joints',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Tailgate Wiring Loom.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Convers+-Lötstellen prüfen',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Convers+-Lötstellen prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Пайка приборки Convers+',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Пайка приборки Convers+.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Plush Long-Wheelbase Ride',
            strengths: [
              'Plush Long-Wheelbase Ride delivers pleasant everyday composure.',
              'Quiet Cabin & Wide Seats.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveräner Langstreckenkomfort',
            strengths: [
              'Souveräner Langstreckenkomfort sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leise Dämmung & breite Sitze.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавный трассовый ход',
            strengths: [
              'Плавный трассовый ход обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон и широкие кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Very Cheap Ford Parts — Simple Belt & NA Maintenance',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Simple Belt & NA Maintenance.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Very Cheap Ford Parts.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Sehr günstige Ford-Teile — Einfache Sauger-Wartung',
            strengths: [
              'Sehr günstige Ford-Teile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Einfache Sauger-Wartung.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Очень дешёвые запчасти Ford — Простейшее ТО атмосферника',
            strengths: [
              'Очень дешёвые запчасти Ford помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Простейшее ТО атмосферника.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-powershift': {
        transmissionDriveline: {
          en: {
            headline: '6-Speed PowerShift Wet-DCT — Strict 60k km Oil Change Req.',
            strengths: [
              'Fast, seamless dual-clutch upshifts make highway merging smooth when fluid is fresh.',
              'Eliminates manual clutch-pedal fatigue in heavy commuter traffic.'
            ],
            watchouts: [
              'Check all reverse-to-drive engagements when warm for shudder or delay before committing.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ],
            lowScoreReasons: [
              'PowerShift (MPS6) wet-clutch dual-clutch gearbox suffers costly clutch-damper and mechatronic failures if 60,000 km fluid intervals were missed.',
              'Repairing a worn PowerShift unit or control module often costs €2,000–€3,500+.'
            ]
          },
          de: {
            headline: '6-Gang PowerShift (DKG) — Alle 60.000 km Ölwechsel Pflicht',
            strengths: [
              'Schnelle, nahtlose Doppelkupplungs-Schaltvorgänge bei frischem Getriebeöl.',
              'Erspart ständiges Kuppeln im dichten Berufsverkehr.'
            ],
            watchouts: [
              'Im warmen Zustand mehrfach von R auf D schalten und auf Verzögerung oder Rucken achten.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ],
            lowScoreReasons: [
              'Das nasse PowerShift-Doppelkupplungsgetriebe (MPS6) reagiert empfindlich auf überzogene 60.000-km-Ölwechsel mit teuren Kupplungs- und Mechatronikschäden.',
              'Instandsetzungen an Kupplungspaket oder Mechatronik erreichen schnell 2.000–3.500 €.'
            ]
          },
          ru: {
            headline: 'Робот PowerShift (6 ст.) — Замена масла строго раз в 60 тыс.',
            strengths: [
              'Быстрые и плавные переключения преселектива при свежем масле в коробке.',
              'Избавляет от необходимости выжимать сцепление в плотных городских пробках.'
            ],
            watchouts: ['На прогретой коробке проверьте переключение R–D без толчков и задержек.'],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ],
            lowScoreReasons: [
              'Мокрый робот PowerShift (MPS6) при пропуске замены масла каждые 60 000 км страдает износом демпфера сцепления и мехатроника.',
              'Ремонт сцепления или блока управления часто обходится в €2 000–3 500+.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Convers+ Cluster Joints',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Tailgate Wiring Loom.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Convers+-Lötstellen prüfen',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Convers+-Lötstellen prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Пайка приборки Convers+',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Пайка приборки Convers+.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Plush Long-Wheelbase Ride',
            strengths: [
              'Plush Long-Wheelbase Ride delivers pleasant everyday composure.',
              'Quiet Cabin & Wide Seats.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveräner Langstreckenkomfort',
            strengths: [
              'Souveräner Langstreckenkomfort sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leise Dämmung & breite Sitze.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавный трассовый ход',
            strengths: [
              'Плавный трассовый ход обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон и широкие кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Costly PowerShift Oil & Clutches — Expensive DI Turbo & Manifold',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Expensive DI Turbo & Manifold.', 'Costly PowerShift Oil & Clutches.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Teurer PowerShift-Service — Komplexe Turbo-/Krümmer-Teile',
            strengths: [
              'Teurer PowerShift-Service hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Komplexe Turbo-/Krümmer-Teile.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дорогое ТО робота PowerShift — Дорогие турбина и форсунки',
            strengths: [
              'Дорогое ТО робота PowerShift помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогие турбина и форсунки.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: 'Reliable Aisin 6-Speed Auto — Avoids PowerShift DCT Risk',
            strengths: [
              'Reliable Aisin 6-Speed Auto matches this powertrain well for everyday driving.',
              'Avoids PowerShift DCT Risk.'
            ],
            watchouts: [
              'Torque-converter automatics need documented 50,000–60,000 km fluid changes to avoid lockup shudder.',
              'Harsh or delayed 2–3 upshifts when warm signal worn valve-body or solenoid parts.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: 'Robuste Aisin 6-Automatik — Kein PowerShift-Risiko',
            strengths: [
              'Robuste Aisin 6-Automatik passt gut zur Motorcharakteristik im Alltag.',
              'Kein PowerShift-Risiko.'
            ],
            watchouts: [
              'Wandlerautomatiken brauchen nachgewiesene Ölwechsel alle 50.000–60.000 km, sonst droht Wandler-Ruckeln.',
              'Harte oder verzögerte 2–3-Schaltungen im warmen Zustand deuten auf verschlissenen Ventilkörper oder Magnetventile.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: 'Надёжный автомат Aisin 6 — Классический гидротрансформатор',
            strengths: [
              'Надёжный автомат Aisin 6 хорошо сочетается с данным двигателем в повседневной езде.',
              'Классический гидротрансформатор.'
            ],
            watchouts: [
              'Гидротрансформаторным АКПП нужна подтверждённая замена масла каждые 50 000–60 000 км, иначе появляются рывки блокировки.',
              'Жёсткие или запоздалые переключения 2–3 на горячую указывают на износ гидроблока или соленоидов.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Convers+ Cluster Joints',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Tailgate Wiring Loom.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Convers+-Lötstellen prüfen',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Convers+-Lötstellen prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Пайка приборки Convers+',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Пайка приборки Convers+.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Plush Long-Wheelbase Ride',
            strengths: [
              'Plush Long-Wheelbase Ride delivers pleasant everyday composure.',
              'Quiet Cabin & Wide Seats.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveräner Langstreckenkomfort',
            strengths: [
              'Souveräner Langstreckenkomfort sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leise Dämmung & breite Sitze.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавный трассовый ход',
            strengths: [
              'Плавный трассовый ход обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон и широкие кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Low Unscheduled Repair Risk — Cheap Parts + Routine 6-AT Oil',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Cheap Parts + Routine 6-AT Oil.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Low Unscheduled Repair Risk.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kaum teure Überraschungen — Günstige Teile + ATF-Wechsel',
            strengths: [
              'Planbare Wartungsintervalle mit klaren Vorgaben halten die laufenden Servicekosten kalkulierbar.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: [
              'Altersbedingter Verschleiß an Fahrwerksbuchsen, Bremsen und Abgasanlage erfordert weiterhin planbare Rücklagen.',
              'Kaum teure Überraschungen.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Низкий риск поломок — Простые запчасти + масло в АКПП',
            strengths: [
              'Низкий риск поломок помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Простые запчасти + масло в АКПП.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-6mt': {
        transmissionDriveline: {
          en: {
            headline: '6-Speed Manual — Watch 270 Nm DMF',
            strengths: [
              '6-Speed Manual matches this powertrain well for everyday driving.',
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
            headline: '6-Gang-Schaltgetriebe — ZMS bei 270 Nm beachten',
            strengths: [
              '6-Gang-Schaltgetriebe passt gut zur Motorcharakteristik im Alltag.',
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
            headline: '6-ступ. МКПП — Контроль маховика',
            strengths: [
              '6-ступ. МКПП хорошо сочетается с данным двигателем в повседневной езде.',
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
            headline: 'Convers+ Cluster Joints',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check Tailgate Wiring Loom.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Convers+-Lötstellen prüfen',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Convers+-Lötstellen prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Пайка приборки Convers+',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Пайка приборки Convers+.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Plush Long-Wheelbase Ride',
            strengths: [
              'Plush Long-Wheelbase Ride delivers pleasant everyday composure.',
              'Quiet Cabin & Wide Seats.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveräner Langstreckenkomfort',
            strengths: [
              'Souveräner Langstreckenkomfort sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leise Dämmung & breite Sitze.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавный трассовый ход',
            strengths: [
              'Плавный трассовый ход обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон и широкие кресла.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheap Filters & Chassis Parts — Budget Piezo Injectors & DPF',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Budget Piezo Injectors & DPF.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige Verschleißteile — Injektoren & DPF einplanen',
            strengths: [
              'Günstige Verschleißteile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Injektoren & DPF einplanen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дешёвые фильтры и подвеска — Затраты на форсунки и DPF',
            strengths: [
              'Дешёвые фильтры и подвеска помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Затраты на форсунки и DPF.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: '6-MT / Tough Aisin 6-AT — 420 Nm DMF • No PowerShift',
            strengths: [
              '6-MT / Tough Aisin 6-AT matches this powertrain well for everyday driving.',
              '420 Nm DMF • No PowerShift.'
            ],
            watchouts: [
              'Torque-converter automatics need documented 50,000–60,000 km fluid changes to avoid lockup shudder.',
              'Harsh or delayed 2–3 upshifts when warm signal worn valve-body or solenoid parts.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '6-Gang / Aisin 6-Automatik — Kein PowerShift • 420 Nm Last',
            strengths: [
              '6-Gang / Aisin 6-Automatik passt gut zur Motorcharakteristik im Alltag.',
              'Kein PowerShift • 420 Nm Last.'
            ],
            watchouts: [
              'Wandlerautomatiken brauchen nachgewiesene Ölwechsel alle 50.000–60.000 km, sonst droht Wandler-Ruckeln.',
              'Harte oder verzögerte 2–3-Schaltungen im warmen Zustand deuten auf verschlissenen Ventilkörper oder Magnetventile.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '6-МКПП / Автомат Aisin 6 — Без робота DCT • Момент 420 Н·м',
            strengths: [
              '6-МКПП / Автомат Aisin 6 хорошо сочетается с данным двигателем в повседневной езде.',
              'Без робота DCT • Момент 420 Н·м.'
            ],
            watchouts: [
              'Гидротрансформаторным АКПП нужна подтверждённая замена масла каждые 50 000–60 000 км, иначе появляются рывки блокировки.',
              'Жёсткие или запоздалые переключения 2–3 на горячую указывают на износ гидроблока или соленоидов.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Convers+ Cluster Joints',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check Tailgate Wiring Loom.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Convers+-Lötstellen prüfen',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Convers+-Lötstellen prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Пайка приборки Convers+',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Пайка приборки Convers+.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Balanced Highway Poise',
            strengths: [
              'Balanced Highway Poise delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              'Often Paired With Sport Ride.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Satter Autobahn-Komfort',
            strengths: [
              'Satter Autobahn-Komfort sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Oft straffere Titanium-S-Feder.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Уверенный ход по трассе',
            strengths: [
              'Уверенный ход по трассе обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'Часто жёсткая спорт-подвеска.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Aisin Auto Avoids PowerShift — High 420 Nm Clutch/DMF & Tyres',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'High 420 Nm Clutch/DMF & Tyres.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Aisin-AT vermeidet PowerShift — Teures ZMS/Kupplung & Reifen',
            strengths: [
              'Aisin-AT vermeidet PowerShift hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teures ZMS/Kupplung & Reifen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Надёжный автомат Aisin — Дорогие маховик, сцепление и шины',
            strengths: [
              'Надёжный автомат Aisin помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогие маховик, сцепление и шины.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedGearboxes: {
      '5-mt-sc': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'Ford iB5 / MTX-75 · Manual · Single Clutch', de: 'Ford iB5 / MTX-75 · Schaltgetriebe · Kupplung', ru: 'Ford iB5 / MTX-75 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual5Ford', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: {
            headline: 'Ford iB5 / MTX-75 5-Speed Manual — Simple & Cheap to Maintain',
            strengths: ['No dual-mass flywheel and inexpensive clutch kits (€420–€650).'],
            watchouts: ['Missing 6th gear makes 130+ km/h highway cruising busier.'],
            beforeYouBuy: ['Check clean 2nd/3rd synchros and clutch slave cylinder dryness.']
          },
          de: {
            headline: 'Ford iB5 / MTX-75 5-Gang-Getriebe — Einfach & günstig',
            strengths: ['Kein Zweimassenschwungrad und preiswerter Kupplungstausch (420–650 €).'],
            watchouts: ['Ohne 6. Gang auf der Autobahn hörbar höhere Drehzahlen.'],
            beforeYouBuy: ['Sauberes Schalten in 2./3. Gang und Dichtheit des Nehmerzylinders prüfen.']
          },
          ru: {
            headline: 'Механика Ford iB5 / MTX-75 5-МКПП — Простая и дешёвая',
            strengths: ['Нет двухмассового маховика и недорогое сцепление (€420–650).'],
            watchouts: ['Без 6-й передачи повышены обороты на трассе.'],
            beforeYouBuy: ['Проверьте чёткость 2/3-й передач и отсутствие течи выжимного цилиндра.']
          }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Ford MMT6 / M66 · Manual + DMF', de: 'Ford MMT6 / M66 · Schaltgetriebe + ZMS', ru: 'Ford MMT6 / M66 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Ford', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: {
            headline: 'Ford MMT6 / M66 6-Speed Manual — Tough High-Torque Box, Watch DMF',
            strengths: ['Handles 320–420 Nm diesel & 2.5T torque reliably with far lower risk than PowerShift.'],
            watchouts: ['Dual-mass flywheel & concentric slave cylinder wear around 160k–210k km (€950–€1,400).'],
            beforeYouBuy: ['Test hard 4th-gear pull from 1,800 rpm and inspect beneath bellhousing for brake-fluid weep.']
          },
          de: {
            headline: 'Ford MMT6 / M66 6-Gang-Getriebe — Deutlich sicherer als PowerShift',
            strengths: ['Verkraftet 320–420 Nm souverän ohne PowerShift-Mechatronik-Risiken.'],
            watchouts: ['ZMS und Zentralausrücker verschleißen ab 160–210 Tkm (950–1.400 €).'],
            beforeYouBuy: ['Im 4. Gang ab 1.800 U/min testen und auf Bremsflüssigkeits-Spuren an der Kupplungsglocke achten.']
          },
          ru: {
            headline: 'Механика Ford MMT6 / M66 — Надёжнее PowerShift, контроль ДММ',
            strengths: ['Спокойно держит 320–420 Н·м без дорогих рисков робота PowerShift.'],
            watchouts: ['ДММ и выжимной подшипник требуют замены к 160–210 тыс. км (€950–1 400).'],
            beforeYouBuy: ['Проверьте сцепление на 4-й передаче с 1 800 об/мин и сухость стыка КПП.']
          }
        }
      },
      'aisin-6at': {
        category: 'automatic',
        label: { en: '6-Speed Torque Auto', de: '6-Stufen-Wandlerautomatik', ru: '6-ст. Автомат' },
        shortLabel: { en: '6-AT', de: '6-AT', ru: '6-АКПП' },
        subLabel: { en: 'Aisin TF-81SC · Hydraulic Torque Converter', de: 'Aisin TF-81SC · Wandlerautomatik', ru: 'Aisin TF-81SC · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto6', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.4,
            badges: { en: ['Proven Aisin TF-81SC 6-AT', 'Far Safer Than PowerShift'], de: ['Robuste Aisin 6-Wandler-AT', 'Viel sicherer als PowerShift'], ru: ['Надёжная 6-АКПП Aisin', 'Намного надёжнее PowerShift'] }
          }
        },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbAuto6Ford', clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: {
            headline: 'Aisin TF-81SC 6-Speed Torque Auto — The Durable Automatic Choice',
            strengths: ['Japanese Aisin hydraulic automatic avoids PowerShift damper/mechatronic failures.'],
            watchouts: ['Adds ~0.8 L/100 km fuel burn; change ATF every 60,000 km for smooth valvebody life.'],
            beforeYouBuy: ['Test warm shifts for any 2→3 flare or harsh N→D thump.']
          },
          de: {
            headline: 'Aisin TF-81SC 6-Stufen-Automatik — Die langlebige Automatik-Wahl',
            strengths: ['Klassische Aisin-Wandlerautomatik ohne PowerShift-Kupplungsrisiko.'],
            watchouts: ['Etwa 0,8 L/100 km Mehrverbrauch; alle 60.000 km ATF-Wechsel empfohlen.'],
            beforeYouBuy: ['Im warmen Zustand auf weiche 2→3-Schaltvorgänge und ruhiges N→D-Einlegen achten.']
          },
          ru: {
            headline: 'Автомат Aisin TF-81SC — Надёжная альтернатива роботу PowerShift',
            strengths: ['Японский классический гидротрансформатор избавляет от проблем PowerShift.'],
            watchouts: ['Добавляет ~0,8 л/100 км расхода; меняйте ATF каждые 60 000 км.'],
            beforeYouBuy: ['Проверьте прогретую АКПП на отсутствие пробуксовки 2→3 и толчков N→D.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Aisin 6-AT automatic transmission fluid change', de: 'Aisin 6-AT Getriebeölwechsel', ru: 'Замена масла в АКПП Aisin TF-81SC' }, cost: '€220–320' }
          ]
        }
      },
      'powershift-6wet': {
        category: 'automatic',
        label: { en: '6-Speed PowerShift', de: '6-Gang PowerShift (DKG)', ru: '6-ст. PowerShift (РКПП)' },
        shortLabel: { en: '6-PS (Wet)', de: '6-PS (Nass)', ru: '6-PS (Мокр.)' },
        subLabel: { en: 'Getrag 6DCT450 · Wet Dual-Clutch + DMF', de: 'Getrag 6DCT450 · Nass-DKG + ZMS', ru: 'Getrag 6DCT450 · Мокрая РКПП + ДММ' },
        specOverrides: { gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 5.4,
            badges: { en: ['Getrag 6DCT450 PowerShift', 'Strict 60k Oil + Damper Risk'], de: ['Getrag 6DCT450 PowerShift', '60-Tkm-Öl & Dämpfer-Risiko'], ru: ['Getrag 6DCT450 PowerShift', 'Строгое ТО 60 тыс. и демпфер'] }
          },
          maintenanceRepairCosts: {
            score: 5.2,
            badges: { en: ['€300–€420 PowerShift Oil @ 60k', '€1.8k–€3.2k Clutch/Damper Risk'], de: ['300–420 € Ölwechsel alle 60 Tkm', '1.800–3.200 € Dämpfer-Risiko'], ru: ['€300–€420 масло каждые 60 тыс.', 'Риск ремонта €1.8–3.2k'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'Getrag 6DCT450 6-Speed Wet PowerShift', de: 'Getrag 6DCT450 6-Gang Nass-PowerShift', ru: '6-ст. мокрый робот Getrag 6DCT450 PowerShift' } }],
              note: { en: 'Plastic clutch-damper springs break down and clog the mechatronic valvebody if the 60,000 km fluid & filter service is skipped (€1,800–€3,200).', de: 'Kunststoff-Dämpferfedern zerbröseln bei überzogenem 60.000-km-Ölwechsel und verstopfen die Mechatronik (1.800–3.200 €).', ru: 'При пропуске замены масла раз в 60 тыс. км разрушается пластиковый демпфер сцепления и забивает мехатроник (€1 800–3 200).' }
            },
            clutchDmf: '@dualClutchWet'
          }
        },
        dossier: {
          en: {
            headline: 'Wet 6-Speed PowerShift (6DCT450) — High €2k+ Repair Risk Without 60k Receipts',
            strengths: ['Fast dual-clutch shifts and decent highway economy when properly serviced.'],
            watchouts: ['Plastic damper retainers disintegrate and contaminate mechatronics if 60,000 km oil changes were missed (€1,800–€3,200 rebuild).'],
            beforeYouBuy: ['Walk away unless every 60,000 km / 3-year PowerShift oil & external filter change is documented.', 'Test hot creeping and look for any "Transmission Limited Function" warnings.']
          },
          de: {
            headline: '6-Gang PowerShift (6DCT450) — Ohne 60-Tkm-Ölnachweise hohes Risiko',
            strengths: ['Schnelle Schaltvorgänge und guter Verbrauch bei gepflegten Fahrzeugen.'],
            watchouts: ['Kunststoff-Dämpferteile lösen sich auf und blockieren die Mechatronik (1.800–3.200 € Schaden).'],
            beforeYouBuy: ['Nur kaufen, wenn alle 60.000-km-/3-Jahres-Getriebeölwechsel per Rechnung belegt sind.', 'Warmes Anrollen und Fehlerspeicher auf Getriebemeldungen prüfen.']
          },
          ru: {
            headline: 'Робот PowerShift (6DCT450) — Высокий риск без строгого ТО 60 тыс. км',
            strengths: ['Быстрые переключения и хорошая экономичность на трассе.'],
            watchouts: ['Пластиковые элементы демпфера сцепления рассыпаются и забивают мехатроник (€1 800–3 200).'],
            beforeYouBuy: ['Покупайте только при наличии чеков на замену масла и фильтра PowerShift каждые 60 тыс. км.', 'Проверьте прогретую КПП на рывки и ошибки по трансмиссии.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000 km / 3 yrs', de: 'Alle 60.000 km / 3 J.', ru: 'Каждые 60 000 км / 3 года' }, action: { en: 'PowerShift 6DCT450 wet dual-clutch oil & external filter service', de: 'PowerShift 6DCT450 Getriebeöl- & Filterwechsel', ru: 'Замена масла и внешнего фильтра PowerShift 6DCT450' }, cost: '€300–420' }
          ],
          critical: [
            { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'PowerShift clutch damper rebuild & mechatronic flush', de: 'PowerShift Kupplungsdämpfer-Überholung & Mechatronik', ru: 'Переборка демпфера сцепления и промывка мехатроника PowerShift' }, cost: '€1,800–3,200', risk: { en: 'Loss of even/odd gears or limp mode', de: 'Ausfall ganzer Ganggruppen / Notlauf', ru: 'Пропадание чётных/нечётных передач, аварийный режим' }, damage: '€3,500–4,800' }
          ]
        }
      }
    },
    engines: [
      {
        id: '1.6-ecoboost',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.6L EcoBoost Turbo', de: '1.6L EcoBoost Turbo', ru: '1.6L EcoBoost Турбо' },
          forcedInduction: '@turbo', injection: '@direct', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,600 kg', sprint0100: '9.3 s', topSpeed: '215 km/h', peakTorque: '240 Nm @ 1,600',
          passingPunch: { en: 'Punchy Turbo Mid-Range', de: 'Kräftiger Turbo-Durchzug', ru: 'Бодрая тяга с низов' },
          realWorldFuel: '7.4–8.4 L/100 km', tankRange: '70 L · ~890 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierMod', timingDrive: '@belt', serviceWear: '@tierMod'
        },
        dossierGroup: 'petrol-6mt',
        buyerFitGroup: 'turbo-petrol',
        buyerFitOverrides: {
          skip: ['mondeoLongParking', 'mondeoEcoBoostCare', 'mondeoInteriorAge', 'mondeoRearArchCheck']
        },
        isDefault: true,
        fuelType: 'petrol',
        hp: 160,
        shortTitle: 'MONDEO 1.6 ECOBOOST',
        fullName: '2012 Ford Mondeo 1.6 EcoBoost',
        engineBadge: '1.6L EcoBoost Turbo • 160 HP',
        engineSubLabel: {
          en: 'JTBA 1.6L GTDi Turbo Petrol • 6-MT • 240 Nm',
          de: 'JTBA 1.6L GTDi Turbobenziner • 6-Gang • 240 Nm',
          ru: 'JTBA 1.6L GTDi Турбобензин • 6-ст. МКПП • 240 Н·м'
        },
        rarityLabel: {
          en: 'HIGHWAY CRUISER',
          de: 'LANGSTRECKEN-PROFI',
          ru: 'ТРАССОВЫЙ КРЕЙСЕР'
        },
        originalMsrp: {
          en: '€27,950 New',
          de: '27.950 € Neu',
          ru: '€27 950 новый'
        },
        estUsedPrice: '€6,900',
        perkLabel: {
          en: '✦ Huge 550L Sedan Boot • 240 Nm Turbo Torque • Composed Autobahn Ride',
          de: '✦ Riesiger 550L Kofferraum • 240 Nm Turbo-Drehmoment • Ruhiger Gleiter',
          ru: '✦ Огромный багажник 550 л • Тяга 240 Н·м • Комфорт на трассе'
        },
        remarkablePositives: {
          en: [
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING',
            '7.7 L/100KM ECONOMY',
            '1,600 KG BRAKED TOWING'
          ],
          de: [
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG',
            '7,7 L/100KM VERBRAUCH',
            '1.600 KG ANHÄNGELAST'
          ],
          ru: [
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ',
            'РАСХОД 7,7 Л/100 КМ',
            'БУКСИРОВКА ДО 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'COOLANT & HEAD GASKET RISK',
            'VALVE CARBON BUILDUP RISK',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'KÜHLMITTEL- & ZYLINDERKOPF-RISIKO',
            'VERKOKUNG DER EINLASSVENTILE',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'РИСК ПЕРЕГРЕВА И ПРОКЛАДКИ ГБЦ',
            'НАГАР НА ВПУСКНЫХ КЛАПАНАХ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.7,
          comfortCabin: 8.0,
          spacePracticality: 8.7,
          performanceDynamics: 7.5,
          runningCostsTco: 7.6
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L EcoBoost Inline-4 Turbo (JTBA)', de: '1.6L EcoBoost Reihenvierzylinder Turbo (JTBA)', ru: '1.6L EcoBoost рядный 4-цил. турбо (JTBA)' } },
                  { k: 'displacement', v: '1,596 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '118 kW (160 HP)', de: '118 kW (160 PS)', ru: '118 кВт (160 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Dry Timing Belt', de: 'Benzin · Trockener Zahnriemen', ru: 'Бензин · Сухой ремень ГРМ' } }
                ],
                note: { en: 'Punchy 160 HP downsized turbo; verify coolant-hose recall & timely belt replacement.', de: 'Durchzugsstarker Turbo; Kühlmittelschlauch-Rückruf und Zahnriemenwechsel unbedingt prüfen.', ru: 'Бодрый турбомотор — важно проверить замену патрубков охлаждения и ремня ГРМ.' }
              },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol'
            },
            score: 5.3,
            badges: {
              en: ['Coolant Line Recall', 'Watch Degas Hose & Cooling'],
              de: ['Kühlwasser-Rückruf prüfen', 'Kühlmittelleitungen prüfen'],
              ru: ['Проверить отзыв по ОЖ', 'Следить за патрубками охлаждения']
            },
            dossier: {
              en: {
                headline: 'Punchy 1.6L EcoBoost — Vulnerable to Coolant Loss & Head Overheating',
                lowScoreReasons: [
                  'Brittle Coolant Pipes & Cylinder-Head Cracking: Early 1.6 EcoBoost return lines crack silently; low coolant causes rapid overheating that warps or cracks the aluminum head (€1,800–€3,000).',
                  'Direct-Injection Carbon & Turbo Plumbing: Intake valves build up carbon past 100,000 km and small boost/coolant hoses age faster under turbo heat.'
                ],
                strengths: [
                  'Lively 240 Nm (270 Nm overboost) low-end torque makes the heavy Mondeo feel brisk in town.',
                  'Can reach 200,000–240,000 km if Ford’s coolant-level sensor recall was done and belts/pipes are maintained.'
                ],
                watchouts: [
                  'Timing belt replacement is required around 160,000 km or 8–10 years.',
                  'Stick to 10,000–12,000 km oil changes to protect the small turbo bearings.'
                ],
                beforeYouBuy: [
                  'Confirm Ford’s coolant-level sensor safety recall was completed and inspect plastic coolant pipes for hairline cracks.',
                  'Ask for timing belt replacement proof if the car is near 160,000 km or 10 years old.',
                  'Check smooth highway boost acceleration and verify clean coolant in the expansion tank.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual Ford 5W-20/5W-30 turbo oil & verify coolant level + updated degas pipe recall',
                    cost: '€150–250',
                    ifIgnored: 'Heat-aged brittle thin plastic coolant pipe cracks & overheats engine rapidly',
                    damageCost: '€2,000–3,500'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change gearbox oil, spark plugs & inspect 6–7 yr aging rubber turbo/coolant hoses and timing belt',
                    cost: '€320–520',
                    ifIgnored: 'Aged rubber timing belt & coolant hoses weaken with years even at lower mileage',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'red',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Upgrade plastic coolant return pipes & expansion bottle',
                    cost: '€200–380',
                    ifIgnored: 'Burst coolant pipe drains water & cracks engine head (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,500–3,800'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace timing belt, water pump & auxiliary belt (or every 8–10 yrs max, rubber ages)',
                    cost: '€600–900',
                    ifIgnored: 'Snapped timing belt wrecks all engine valves',
                    damageCost: '€2,400–3,500'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Clean intake valve carbon & replace turbo boost control valve',
                    cost: '€350–600',
                    ifIgnored: 'Shaky idle, misfires & sudden loss of turbo power (components & fluids also degrade over years)',
                    damageCost: '€1,300–2,000'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace clutch kit & dual-mass flywheel',
                    cost: '€850–1,250',
                    ifIgnored: 'Heavy clutch pedal vibration & slipping gears (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,300'
                  }
                ]
              },
              de: {
                headline: 'Spritziger 1.6 EcoBoost — anfällig für Kühlwasserverlust & Kopfschäden',
                lowScoreReasons: [
                  'Spröde Kühlmittelleitungen & Überhitzungsschäden: Frühe Rücklaufleitungen reißen unbemerkt; Kühlmittelmangel überhitzt und verzieht den Alukopf schnell (1.800–3.000 €).',
                  'Einlassverkokung & Thermik: Direkteinspritzung verkokt ab 100.000 km und Turbo-Kühlleitungen altern unter hoher Hitze.'
                ],
                strengths: [
                  'Kräftige 240 Nm (270 Nm Overboost) sorgen für agilen Durchzug aus dem Drehzahlkeller.',
                  'Erreicht 200.000–240.000 km, sofern der Kühlmittel-Rückruf erledigt ist und Leitungen/Zahnriemen gepflegt werden.'
                ],
                watchouts: [
                  'Zahnriemenwechsel ist bei ca. 160.000 km oder alle 8–10 Jahre fällig.',
                  'Ölwechsel alle 10.000–12.000 km schützen den kleinen Turbolader.'
                ],
                beforeYouBuy: [
                  'Durchgeführten Ford-Kühlmittelsensor-Rückruf bestätigen lassen und Kunststoffleitungen auf Haarrisse prüfen.',
                  'Bei rund 160.000 km oder 10 Jahren Fahrzeugalter den Zahnriemenwechsel per Rechnung belegen lassen.',
                  'Sauberen Ladedruckaufbau testen und Kühlmittelstand sowie -farbe prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 5W-20/5W-30 Turbo-Öl wechseln & Rückruf der dünnen Kühlmittel-Rücklaufleitung prüfen',
                    cost: '150–250 €',
                    ifIgnored: 'Gealtertes dünnes Plastikrohr bricht & überhitzt den Alublock blitzschnell',
                    damageCost: '2.000–3.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebeöl & Kerzen erneuern sowie nach 6–7 J. gealterte Gummischläuche und Zahnriemen prüfen',
                    cost: '320–520 €',
                    ifIgnored: 'Zahnriemen und Kühlerschläuche altern auch über die Jahre und reißen unerwartet',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Spröde Kunststoff-Kühlleitungen & Ausgleichsbehälter erneuern',
                    cost: '200–380 €',
                    ifIgnored: 'Geplatzte Leitung verursacht Überhitzung & Kopf-Riss',
                    damageCost: '2.500–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zahnriemen, Wasserpumpe & Keilriemen ersetzen (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '600–900 €',
                    ifIgnored: 'Gerissener Zahnriemen zerstört Kolben und Ventile',
                    damageCost: '2.400–3.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Einlassventile von Ruß reinigen & Ladedruck-Ventil tauschen',
                    cost: '350–600 €',
                    ifIgnored: 'Unruhiger Leerlauf, Aussetzer & fehlender Turboschub (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.300–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad erneuern',
                    cost: '850–1.250 €',
                    ifIgnored: 'Starkes Pedalvibrieren & rutschende Kupplung (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.300 €'
                  }
                ]
              },
              ru: {
                headline: 'Бодрый 1.6 EcoBoost — уязвим к утечкам антифриза и перегреву ГБЦ',
                lowScoreReasons: [
                  'Хрупкие трубки охлаждения и риск перегрева ГБЦ: Пластиковые трубки трескаются, а потеря антифриза быстро ведёт к короблению или трещинам головки блока (€1 800–3 000).',
                  'Нагар на клапанах и термонагрузка: Прямой впрыск к 100 тыс. км обрастает нагаром, а шланги турбины стареют от высокой температуры.'
                ],
                strengths: [
                  'Живые 240 Н·м (270 Н·м в овербусте) легко тянут тяжёлый Mondeo в городе.',
                  'Проходит 200 000–240 000 км при выполненном отзыве по датчику охлаждения и своевременной замене ремня и патрубков.'
                ],
                watchouts: [
                  'Ремень ГРМ требует замены примерно на 160 000 км или раз в 8–10 лет.',
                  'Меняйте масло каждые 10–12 тыс. км для защиты подшипников турбины.'
                ],
                beforeYouBuy: [
                  'Проверить прохождение отзыва Ford по датчику уровня антифриза и осмотреть пластиковые трубки на трещины.',
                  'Уточнить замену ремня ГРМ, если пробег близок к 160 000 км или возраст к 10 годам.',
                  'Оценить ровный разгон на трассе и чистоту антифриза в бачке.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло 5W-20/5W-30 и проверить отзыв по тонкой пластиковой трубке охлаждения',
                    cost: '€150–250',
                    ifIgnored: 'Хрупкий пластиковый патрубок трескается от нагрева и мгновенно перегревает мотор',
                    damageCost: '€2 000–3 500'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Обновить масло в КПП, свечи и осмотреть ремень ГРМ со шлангами (резина стареет к 6–7 годам)',
                    cost: '€320–520',
                    ifIgnored: 'Зубчатый ремень и патрубки теряют прочность с годами даже на небольшом пробеге',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'red',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить хрупкие пластиковые трубки охлаждения и бачок',
                    cost: '€200–380',
                    ifIgnored: 'Разрыв трубки, мгновенный перегрев и трещина головки (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 500–3 800'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить ремень двигателя, водяной насос и приводной ремень (или раз в 8–10 лет, резина стареет)',
                    cost: '€600–900',
                    ifIgnored: 'Обрыв ремня с загибом всех клапанов двигателя',
                    damageCost: '€2 400–3 500'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Почистить впускные клапаны и заменить клапан наддува турбины',
                    cost: '€350–600',
                    ifIgnored: 'Плавающие обороты, троение и пропажа тяги (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 300–2 000'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить сцепление вместе с двухмассовым маховиком',
                    cost: '€850–1 250',
                    ifIgnored: 'Сильная дрожь педали и пробуксовка сцепления (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 300'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.6,
            badges: {
              en: ['Smooth 6-Speed Manual', 'Moderate DMF Wear'],
              de: ['Leichtgängiges 6-Gang', 'Normaler ZMS-Verschleiß'],
              ru: ['Чёткая 6-МКПП', 'Умеренный износ маховика']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.5,
            badges: {
              en: ['585 kg Payload', '1,600 kg Braked Tow'],
              de: ['585 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 585 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.2,
            badges: {
              en: ['0–100 km/h: 9.3 s', '215 km/h Top Speed'],
              de: ['0–100 km/h: 9,3 s', '215 km/h Spitze'],
              ru: ['0–100 км/ч: 9,3 с', 'Макс. 215 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.7,
            badges: {
              en: ['240 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['240 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['240 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.3,
            badges: {
              en: ['Class-Leading Chassis', 'Stable at 180+ km/h'],
              de: ['Klassenbestes Fahrwerk', 'Stabil bei 180+ km/h'],
              ru: ['Эталонное шасси', 'Стабилен на 180+ км/ч']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 7.6,
            badges: {
              en: ['7.7 L/100km', '149 g/km CO2'],
              de: ['7,7 L/100km', '149 g/km CO2'],
              ru: ['7,7 л/100 км', '149 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.0,
            badges: {
              en: ['Low 1.6L CO2 Tax • Euro 5', 'Affordable Midsize Insurance'],
              de: ['Günstige 1.6-Steuer • Euro 5', 'Faire Mittelklasse-Versicherung'],
              ru: ['Низкий налог 1,6 • Euro 5', 'Доступная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '200k km · 10 yrs', action: { en: 'Timing Belt & Water Pump Kit', de: 'Zahnriemen & Wasserpumpe wechseln', ru: 'Замена ремня ГРМ и помпы' }, cost: '€550–850' },
                { when: '~120,000 km · 8 yrs', action: { en: 'MMT6 6-Speed Gearbox Oil & Spark Plugs', de: '6-Gang Getriebeöl & Zündkerzen wechseln', ru: 'Масло в 6-ст. МКПП и свечи' }, cost: '€220–340' }
              ],
              critical: [
                { when: '100–160k km · 7–11 yrs', action: { en: 'Coolant Return Hose & Expansion Tank Upgrade', de: 'Kühlmittel-Rücklaufleitung & Ausgleichsbehälter (Rückruf)', ru: 'Патрубок охлаждения и расширительный бачок' }, cost: '€180–320', risk: { en: 'Sudden coolant loss causes severe overheating & cracked head', de: 'Plötzlicher Kühlmittelverlust führt zu Überhitzung & Kopfriss', ru: 'Внезапная утечка антифриза и перегрев ГБЦ' }, damage: '€2,800–4,500' }
              ]
            },
            score: 5.4,
            badges: {
              en: ['Cheap Chassis Wear Parts', 'Watch Cooling & Turbo Plumbing'],
              de: ['Günstige Fahrwerksteile', 'Kühlsystem & Turbo teurer'],
              ru: ['Дешёвые детали шасси', 'Дорогой ремонт охлаждения и турбо']
            }
          },
          depreciationResale: {
            score: 7.6,
            badges: {
              en: ['High Value Used Buy', 'Affordable Entry Price'],
              de: ['Viel Auto fürs Geld', 'Günstiger Einstiegspreis'],
              ru: ['Много авто за свои деньги', 'Доступная цена на вторичке']
            }
          }
        }
      },
      {
        id: '1.6-tivct',
        defaultGearboxId: '5-mt-sc',
        gearboxes: [{ id: '5-mt-sc', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.6L Ti-VCT NA', de: '1.6L Ti-VCT Sauger', ru: '1.6L Ti-VCT Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual5', clutchDmf: '@singleClutch',
          towingBraked: '1,100 kg', sprint0100: '12.3 s', topSpeed: '195 km/h', peakTorque: '160 Nm @ 4,100',
          passingPunch: { en: 'Modest · Heavy Body', de: 'Gemächlich · Schweres Auto', ru: 'Спокойно · Тяжёлый кузов' },
          realWorldFuel: '7.5–8.3 L/100 km', tankRange: '70 L · ~880 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierLowMod', timingDrive: '@belt', serviceWear: '@tierLow'
        },
        dossierGroup: 'petrol-5mt',
        buyerFitGroup: 'na-petrol',
        isDefault: false,
        fuelType: 'petrol',
        hp: 120,
        shortTitle: 'MONDEO 1.6 Ti-VCT',
        fullName: '2012 Ford Mondeo 1.6 Ti-VCT',
        engineBadge: '1.6L Ti-VCT NA • 120 HP',
        engineSubLabel: {
          en: 'KGBA 1.6L Naturally Aspirated • 5-MT • 160 Nm',
          de: 'KGBA 1.6L Saugbenziner • 5-Gang • 160 Nm',
          ru: 'KGBA 1.6L Атмосферный бензин • 5-ст. МКПП • 160 Н·м'
        },
        rarityLabel: {
          en: 'SIMPLE ENTRY',
          de: 'SOLIDE BASIS',
          ru: 'ПРОСТАЯ БАЗА'
        },
        originalMsrp: {
          en: '€24,500 New',
          de: '24.500 € Neu',
          ru: '€24 500 новый'
        },
        estUsedPrice: '€5,900',
        perkLabel: {
          en: '✦ No Turbo or Direct Injection • 550L Boot • Lowest Routine Repair Risk',
          de: '✦ Kein Turbo & keine Direkteinspritzung • 550L Kofferraum • Geringstes Risiko',
          ru: '✦ Без турбины и прямого впрыска • Багажник 550 л • Простая обслуга'
        },
        remarkablePositives: {
          en: [
            'SIMPLE NO-TURBO ENGINE',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING',
            'THIRSTY 8.0 L/100KM'
          ],
          de: [
            'EINFACHER SAUGMOTOR OHNE TURBO',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG',
            'DURSTIG: 8,0 L/100KM'
          ],
          ru: [
            'ПРОСТОЙ АТМОСФЕРНИК БЕЗ ТУРБИНЫ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ',
            'РАСХОД 8,0 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'WEAK 160 NM FOR 1.5-TON WEIGHT',
            '5-SPEED MANUAL (HIGH REVS)',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'SCHWACHE 160 NM FÜR 1,5 TONNEN',
            'NUR 5 GÄNGE (HOHE DREHZAHL)',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'СЛАБЫЕ 160 Н·М НА 1,5 ТОННЫ',
            '5-СТ. МКПП (ВЫСОКИЕ ОБОРОТЫ)',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 8.0,
          spacePracticality: 8.3,
          performanceDynamics: 6.5,
          runningCostsTco: 8.0
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L Duratec Ti-VCT Inline-4 NA (KGBA)', de: '1.6L Duratec Ti-VCT Reihenvierzylinder Sauger (KGBA)', ru: '1.6L Duratec Ti-VCT рядный 4-цил. атмосферный (KGBA)' } },
                  { k: 'displacement', v: '1,596 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '88 kW (120 HP)', de: '88 kW (120 PS)', ru: '88 кВт (120 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Dry Timing Belt', de: 'Benzin · Trockener Zahnriemen', ru: 'Бензин · Сухой ремень ГРМ' } }
                ],
                note: { en: 'Simple, rugged naturally aspirated petrol — slow in the big Mondeo, but very cheap to keep running.', de: 'Schlichter, robuster Sauger — im großen Mondeo gemütlich, dafür sehr wartungsfreundlich.', ru: 'Простой и выносливый атмосферник — неспешный, но максимально дешёвый в ремонте.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 8.9,
            badges: {
              en: ['Port-Injected NA', 'Simple Low-Stress 16V Block'],
              de: ['Saugrohreinspritzung', 'Einfacher 16V-Saugmotor (kein Turbo)'],
              ru: ['Распределённый впрыск', 'Простой атмосферник 16V без турбины']
            },
            dossier: {
              en: {
                headline: 'Simple Port-Injected 1.6L Built for Low Maintenance, Not Speed',
                strengths: [
                  'Port fuel injection keeps intake valves clean, and there is no turbocharger or high-pressure fuel pump to fail.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Unlike the 2.0/2.3 Duratec chains, the 1.6 Ti-VCT uses a timing belt that must be changed every 8–10 years or 160,000 km.',
                  'With 160 Nm moving a large D-segment sedan, overtaking on highways requires downshifting.'
                ],
                beforeYouBuy: [
                  'Verify the timing belt replacement receipt (due around 160,000 km or 8–10 years).',
                  'Listen at warm idle for clicking camshaft gears at the front of the engine.',
                  'Test highway overtaking— with 120 HP and no turbo, make sure the pace matches how you drive.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual Ford 5W-30 oil changes & 2-yr brake fluid flush',
                    cost: '€120–200',
                    ifIgnored: 'Dirty aged oil clogs variable-cam pulleys & causes noisy morning rattles',
                    damageCost: '€750–1,200'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Inspect rubber timing belt (replace by 8 yrs max even at low km!) & swap spark plugs/gear oil',
                    cost: '€350–580',
                    ifIgnored: 'Calendar-aged rubber timing belt hardens after 7–8 yrs, snaps & bends engine valves',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace ignition coil pack, plug wires & spark plugs',
                    cost: '€150–260',
                    ifIgnored: 'Engine stutters under throttle & ruins exhaust cat (rubber/plastic & seals also harden with age)',
                    damageCost: '€800–1,400'
                  },
                  {
                    tier: 'red',
                    km: '140,000–170,000 km • 9–11 yrs',
                    action: 'Replace timing belt, water pump & noisy cam gears (or every 8–10 yrs max, rubber ages)',
                    cost: '€550–850',
                    ifIgnored: 'Snapped timing belt bends valves and wrecks engine top',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace plastic thermostat housing & flush coolant',
                    cost: '€180–300',
                    ifIgnored: 'Cracked plastic housing dumps coolant and overheats (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace simple single-mass clutch & rear trailing-arm bushes',
                    cost: '€550–850',
                    ifIgnored: 'Slipping clutch & clunking over bumps at the rear (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,700'
                  }
                ]
              },
              de: {
                headline: 'Schlichter Saugmotor für geringe Wartungskosten statt Tempo',
                strengths: [
                  'Saugrohreinspritzung verhindert Verkokung, kein Turbolader und keine Hochdruckpumpe.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Anders als beim 2.0/2.3 mit Kette ist beim 1.6 Ti-VCT alle 8–10 Jahre bzw. 160.000 km ein Zahnriemenwechsel fällig.',
                  '160 Nm erfordern auf der Autobahn fleißiges Herunterschalten.'
                ],
                beforeYouBuy: [
                  'Rechnung für den Zahnriemenwechsel prüfen (fällig rund um 160.000 km oder alle 8–10 Jahre).',
                  'Im warmen Leerlauf auf klackernde Nockenwellen-Verstellräder vorn am Motor achten.',
                  'Auf der Autobahn testen, ob dir die ruhige Beschleunigung der 120 PS ohne Turbolader ausreicht.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlicher 5W-30 Ölwechsel & Bremsflüssigkeit alle 2 Jahre erneuern',
                    cost: '120–200 €',
                    ifIgnored: 'Altöl verschmutzt die variablen Nockenwellenräder & sorgt für Klappern beim Start',
                    damageCost: '750–1.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Zahnriemen auf Alterung prüfen (spätestens nach 8 J. tauschen!) sowie Kerzen & Getriebeöl',
                    cost: '350–580 €',
                    ifIgnored: 'Auch bei wenig Kilometern altert Gummi nach 7–8 J. und reißt mit Ventilschaden',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Zündspule, Zündkabel & Zündkerzen ersetzen',
                    cost: '150–260 €',
                    ifIgnored: 'Stottern beim Beschleunigen & defekter Katalysator',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–170.000 km • 9–11 J.',
                    action: 'Zahnriemen, Wasserpumpe & klackernde Nockenwellenräder tauschen (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '550–850 €',
                    ifIgnored: 'Gerissener Zahnriemen verbiegt alle Motorventile',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Kunststoff-Thermostatgehäuse & Kühlmittel erneuern',
                    cost: '180–300 €',
                    ifIgnored: 'Gehäuse reißt, Kühlwasser läuft aus & Motor überhitzt (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Einfache Kupplung & hintere Längslenkerbuchsen tauschen',
                    cost: '550–850 €',
                    ifIgnored: 'Rutschende Kupplung & Poltern an der Hinterachse (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.700 €'
                  }
                ]
              },
              ru: {
                headline: 'Простой атмосферник для недорогой эксплуатации без спешки',
                strengths: [
                  'Распределённый впрыск не даёт нагара на клапанах, нет турбины и дорогого ТНВД.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'В отличие от цепных 2.0 и 2.3, здесь ремень— замена каждые 8–10 лет или 160 тыс. км.',
                  '160 Н·м с трудом хватает для обгонов на трассе при полной загрузке.'
                ],
                beforeYouBuy: [
                  'Проверить чек на замену ремня двигателя (срок службы около 160 тыс. км или 8–10 лет).',
                  'Послушать тёплый двигатель на холостых— не должно быть дизельного цокота шестерён спереди.',
                  'Оценить разгон при обгоне— спокойный атмосферник на 120 л.с. не любит спешки.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло 5W-30 и каждые 2 года тормозную жидкость',
                    cost: '€120–200',
                    ifIgnored: 'Старое масло забивает муфты распредвалов и вызывает стук при запуске',
                    damageCost: '€750–1 200'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Проверить ремень ГРМ по возрасту (менять не позже 8 лет даже при малом пробеге!), свечи и масло КПП',
                    cost: '€350–580',
                    ifIgnored: 'За 7–8 лет резина ремня дубеет и рвётся независимо от пробега, гнёт клапаны',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить катушку зажигания, провода и свечи',
                    cost: '€150–260',
                    ifIgnored: 'Дёрганье на разгоне и разрушение катализатора',
                    damageCost: '€800–1 400'
                  },
                  {
                    tier: 'red',
                    km: '140 000–170 000 км • 9–11 лет',
                    action: 'Заменить ремень двигателя, помпу и изношенные шестерни (или раз в 8–10 лет, резина стареет)',
                    cost: '€550–850',
                    ifIgnored: 'Обрыв ремня с загибом всех клапанов',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить пластиковый корпус термостата и антифриз',
                    cost: '€180–300',
                    ifIgnored: 'Трещина корпуса вызывает мгновенную потерю антифриза (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Поменять простое сцепление и задние сайлентблоки',
                    cost: '€550–850',
                    ifIgnored: 'Пробуксовка сцепления и стуки задней подвески (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 700'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { gearbox: '@gbManual5Ford', clutchDmf: '@clutchSingle' },
            score: 8.8,
            badges: {
              en: ['Simple 5-Speed Manual', 'Cheap Clutch Kit'],
              de: ['Einfaches 5-Gang-Getriebe', 'Günstiger Kupplungssatz'],
              ru: ['Простая 5-МКПП', 'Дешёвый комплект сцепления']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['590 kg Payload', '1,100 kg Braked Tow'],
              de: ['590 kg Zuladung', '1.100 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 1 100 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.2,
            badges: {
              en: ['0–100 km/h: 12.3 s', '195 km/h Top Speed'],
              de: ['0–100 km/h: 12,3 s', '195 km/h Spitze'],
              ru: ['0–100 км/ч: 12,3 с', 'Макс. 195 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.3,
            badges: {
              en: ['160 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['160 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['160 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 7.8,
            badges: {
              en: ['Class-Leading Chassis', 'Lighter Front Nose'],
              de: ['Klassenbestes Fahrwerk', 'Leichtere Vorderachse'],
              ru: ['Эталонное шасси', 'Лёгкий передок']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 7.2,
            badges: {
              en: ['Thirsty (8.0 L/100km)', '159 g/km CO2'],
              de: ['Durstig (8,0 L/100km)', '159 g/km CO2'],
              ru: ['Прожорливый (8,0 л/100 км)', '159 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.3,
            badges: {
              en: ['Low 1.6L Tax • Euro 5', 'Lowest Mondeo Insurance'],
              de: ['Günstige 1.6-Steuer • Euro 5', 'Günstigste Mondeo-Versicherung'],
              ru: ['Низкий налог 1,6 • Euro 5', 'Минимальная страховка Mondeo']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '160k km · 8 yrs', action: { en: 'Timing Belt & Water Pump Replacement', de: 'Zahnriemen & Wasserpumpe wechseln', ru: 'Замена ремня ГРМ и помпы' }, cost: '€480–750' },
                { when: '~120,000 km · 8 yrs', action: { en: 'IB5 5-Speed Gearbox Oil Change', de: '5-Gang Schaltgetriebeöl wechseln', ru: 'Замена масла в 5-ст. МКПП' }, cost: '€110–170' }
              ],
              critical: [
                { when: '150–210k km · 10–14 yrs', action: { en: 'Rear Control-Blade Trailing-Arm Bushings', de: 'Hinterachs-Längslenkerlager (Control-Blade)', ru: 'Сайлентблоки задних продольных рычагов' }, cost: '€280–480', risk: { en: 'Rear clunking & rapid inner tyre wear', de: 'Poltern hinten & starker Reifenverschleiß', ru: 'Стук сзади и быстрый износ резины' }, damage: '€650–950' }
              ]
            },
            score: 9.0,
            badges: {
              en: ['Very Cheap Ford Parts', 'Simple Belt & NA Maintenance'],
              de: ['Sehr günstige Ford-Teile', 'Einfache Sauger-Wartung'],
              ru: ['Очень дешёвые запчасти Ford', 'Простейшее ТО атмосферника']
            }
          },
          depreciationResale: {
            score: 7.4,
            badges: {
              en: ['Lowest Entry Price', 'Sought by Budget Buyers'],
              de: ['Günstigster Einstieg', 'Beliebt bei Sparfüchsen'],
              ru: ['Самая низкая цена', 'Популярен у экономных']
            }
          }
        }
      },
      {
        id: '2.0-duratec',
        defaultGearboxId: '5-mt-sc',
        gearboxes: [{ id: '5-mt-sc', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.0L Duratec NA', de: '2.0L Duratec Sauger', ru: '2.0L Duratec Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual5', clutchDmf: '@singleClutch',
          towingBraked: '1,400 kg', sprint0100: '9.9 s', topSpeed: '210 km/h', peakTorque: '185 Nm @ 4,500',
          passingPunch: { en: 'Smooth · Needs Revs', de: 'Linear · Braucht Drehzahl', ru: 'Ровно · Нужны обороты' },
          realWorldFuel: '8.0–9.0 L/100 km', tankRange: '70 L · ~820 km', euroNorm: 'Euro 4 / 5',
          taxInsurance: '@tierMod', timingDrive: '@chain', serviceWear: '@tierLow'
        },
        dossierGroup: 'petrol-5mt',
        buyerFitGroup: 'na-petrol',
        buyerFitOverrides: {
          skip: ['mondeoLongParking', 'mondeoNaThirst', 'mondeoInteriorAge', 'mondeoRearArchCheck']
        },
        isDefault: false,
        fuelType: 'petrol',
        hp: 145,
        shortTitle: 'MONDEO 2.0 DURATEC',
        fullName: '2012 Ford Mondeo 2.0',
        engineBadge: '2.0L Duratec NA • 145 HP',
        engineSubLabel: {
          en: 'AOBA 2.0L Naturally Aspirated • 5-MT • 185 Nm',
          de: 'AOBA 2.0L Saugbenziner • 5-Gang • 185 Nm',
          ru: 'AOBA 2.0L Атмосферный бензин • 5-ст. МКПП • 185 Н·м'
        },
        rarityLabel: {
          en: 'BULLETPROOF NA',
          de: 'DAUERLÄUFER',
          ru: 'НЕУБИВАЕМЫЙ'
        },
        originalMsrp: {
          en: '€26,450 New',
          de: '26.450 € Neu',
          ru: '€26 450 новый'
        },
        estUsedPrice: '€6,600',
        perkLabel: {
          en: '✦ Bulletproof 2.0 Chain NA • 550L Boot • Most Reliable Mk4 Petrol',
          de: '✦ Unverwüstlicher 2.0-Kettenmotor • 550L Kofferraum • Zuverlässigster Benziner',
          ru: '✦ Неубиваемый цепной 2.0 • Багажник 550 л • Самый надёжный бензин Mk4'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 2.0 NA ENGINE',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING',
            '1,600 KG BRAKED TOWING'
          ],
          de: [
            'UNZERSTÖRBARER 2.0 SAUGMOTOR',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG',
            '1.600 KG ANHÄNGELAST'
          ],
          ru: [
            'НЕУБИВАЕМЫЙ МОТОР 2.0',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ',
            'БУКСИРОВКА ДО 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            '5-SPEED MANUAL (HIGH REVS)',
            'THIRSTY 8.6 L/100KM',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'NUR 5 GÄNGE (HOHE DREHZAHL)',
            'DURSTIG: 8,6 L/100KM',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            '5-СТ. МКПП (ВЫСОКИЕ ОБОРОТЫ)',
            'РАСХОД 8,6 Л/100 КМ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.3,
          comfortCabin: 8.0,
          spacePracticality: 8.6,
          performanceDynamics: 7.0,
          runningCostsTco: 7.8
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L Duratec HE Inline-4 NA (AOBA · Mazda L-Block)', de: '2.0L Duratec HE Reihenvierzylinder Sauger (AOBA · Mazda-Basis)', ru: '2.0L Duratec HE рядный 4-цил. атмосферный (база Mazda L)' } },
                  { k: 'displacement', v: '1,999 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '107 kW (145 HP)', de: '107 kW (145 PS)', ru: '107 кВт (145 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Mazda-engineered timing-chain Duratec — the safest, lowest-risk petrol engine in the Mk4 Mondeo.', de: 'Mazda-entwickelter Steuerketten-Sauger — der risikoärmste Benziner im Mondeo Mk4.', ru: 'Атмосферник с цепью ГРМ (база Mazda) — самый надёжный бензиновый мотор Mondeo Mk4.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.5,
            badges: {
              en: ['2.0 Chain-Driven NA', 'Zero Turbo / DI Issues'],
              de: ['2.0 Ketten-Saugmotor', 'Kein Turbo / Keine DI'],
              ru: ['Цепной мотор 2.0', 'Без турбины и ТНВД']
            },
            dossier: {
              en: {
                headline: 'Mazda-Derived L-Series Chain Engine: The Gold Standard for Mk4 Longevity',
                strengths: [
                  'No timing belt intervals, no turbocharger, and no direct-injection valve coking—easily exceeds 300,000 km with basic oil changes.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Plastic thermostat housings can seep coolant with age; pre-2010 swirl flaps should be checked on high-mileage cars.',
                  'Cruises around 3,500+ rpm at 130 km/h, increasing noise and fuel use on long Autobahn trips.'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick carefully— high-mileage engines driven low on oil can burn oil through worn rings.',
                  'Listen at idle with the hood open for a plastic clicking rattle from the black intake manifold flaps.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 5W-30 synthetic oil changes & 2-yr brake/steering fluid checks',
                    cost: '€130–210',
                    ifIgnored: 'Old sludged oil sticks piston oil rings & accelerates early oil burning',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace iridium plugs, flush aging coolant & check 6-yr aging rubber belt/hoses + gearbox oil',
                    cost: '€250–400',
                    ifIgnored: 'Weak aged plugs wear coils & perished 6–7 yr coolant hoses burst on trips',
                    damageCost: '€800–1,400'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace rattling plastic air flaps inside intake manifold',
                    cost: '€300–550',
                    ifIgnored: 'Broken plastic flap pin gets sucked into engine cylinders (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace heated thermostat, water pump & spark plugs',
                    cost: '€240–400',
                    ifIgnored: 'Engine runs too cold, wastes fuel or overheats (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace clutch kit & hydraulic clutch cylinder inside box',
                    cost: '€600–900',
                    ifIgnored: 'Clutch pedal drops to floor and car cannot shift (components & fluids also degrade over years)',
                    damageCost: '€1,100–1,700'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Carbon-flush piston rings & inspect timing chain wear',
                    cost: '€400–750',
                    ifIgnored: 'Heavy oil burning ruins exhaust cat and fails test (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,500'
                  }
                ]
              },
              de: {
                headline: 'Mazda-basierter Ketten-Saugmotor: Der langlebigste Benziner im Mondeo',
                strengths: [
                  'Kein Zahnriemenwechsel, kein Turbolader, keine Verkokung– läuft bei guter Pflege weit über 300.000 km.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Alternde Kunststoff-Thermostate können leicht undicht werden.',
                  'Bei 130 km/h auf der Autobahn etwas höheres Drehzahlniveau.'
                ],
                beforeYouBuy: [
                  'Ölstand am Peilstab genau prüfen— bei vernachlässigten Motoren droht Ölverbrauch durch verklebte Kolbenringe.',
                  'Bei geöffneter Haube im Leerlauf auf Kunststoff-Klappern der Drallklappen im Ansaugkrümmer hören.',
                  'Servolenkungsleitungen auf feuchte Tropfspuren kontrollieren.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlicher 5W-30 Ölwechsel & alle 2 Jahre Brems-/Servolenkungs-Flüssigkeit prüfen',
                    cost: '130–210 €',
                    ifIgnored: 'Verschlepptes Altöl lässt die Ölabstreifringe verkleben & treibt den Ölverbrauch hoch',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Iridium-Zündkerzen & Getriebeöl wechseln sowie 6-J.-Schläuche/Keilriemen/Kühlmittel prüfen',
                    cost: '250–400 €',
                    ifIgnored: 'Alte Kerzen ruinieren Zündspulen & gealterte Schläuche platzen im Sommerstau',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Klappernde Kunststoff-Klappen im Ansaugkrümmer ersetzen',
                    cost: '300–550 €',
                    ifIgnored: 'Abgebrochenes Teil fällt in den Motor & ruiniert Zylinder (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Thermostat, Wasserpumpe & Zündkerzen erneuern',
                    cost: '240–400 €',
                    ifIgnored: 'Motor wird nicht warm, verbraucht mehr oder überhitzt (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Kupplungssatz inklusive hydraulischem Ausrücklager tauschen',
                    cost: '600–900 €',
                    ifIgnored: 'Kupplungspedal fällt durch & Schalten wird unmöglich (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Kolbenring-Spülung gegen Ölverbrauch & Steuerkette prüfen',
                    cost: '400–750 €',
                    ifIgnored: 'Starkes Ölverbrennen zerstört Katalysator & Abgastest (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.500 €'
                  }
                ]
              },
              ru: {
                headline: 'Цепной мотор серии L (Mazda): эталон надёжности среди бензиновых Mk4',
                strengths: [
                  'Нет ремня, турбины и нагара на клапанах— спокойно ходит 300+ тыс. км при своевременной замене масла.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'На больших пробегах пластиковый корпус может начать подтекать.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Осмотреть уровень масла щупом— при редких заменах залегают кольца и появляется расход масла.',
                  'При открытом капоте послушать пластиковый стрёкот заслонок впускного коллектора на холостых.',
                  'Проверить снизу сухость трубок гидроусилителя руля.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена масла 5W-30 и контроль жидкостей тормозов/ГУР каждые 2 года',
                    cost: '€130–210',
                    ifIgnored: 'Редкие замены приводят к залеганию колец и раннему расходу масла',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить иридиевые свечи, масло в МКПП и осмотреть стареющие к 6 годам шланги и ремень',
                    cost: '€250–400',
                    ifIgnored: 'Старые свечи бьют по катушкам, а рассохшиеся шланги дают утечку антифриза',
                    damageCost: '€800–1 400'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить гремящие пластиковые заслонки во впуске',
                    cost: '€300–550',
                    ifIgnored: 'Обломок заслонки затягивает в цилиндр с поломкой мотора (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить термостат, водяной насос и свечи зажигания',
                    cost: '€240–400',
                    ifIgnored: 'Недогрев, лишний расход бензина или перегрев летом',
                    damageCost: '€1 200–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить комплект сцепления вместе с выжимным цилиндром',
                    cost: '€600–900',
                    ifIgnored: 'Провал педали сцепления и невозможность ехать (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 700'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Промыть поршневые кольца от кокса и проверить цепь',
                    cost: '€400–750',
                    ifIgnored: 'Сильный угар масла и выход из строя катализатора (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 500'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { gearbox: '@gbManual5Ford', clutchDmf: '@clutchSingle' },
            score: 9.0,
            badges: {
              en: ['Robust 5-Speed Manual', 'Long-Lasting Clutch'],
              de: ['Solides 5-Gang-Getriebe', 'Langlebige Kupplung'],
              ru: ['Прочная 5-МКПП', 'Долговечное сцепление']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['595 kg Payload', '1,600 kg Braked Tow'],
              de: ['595 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 595 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.8,
            badges: {
              en: ['0–100 km/h: 9.9 s', '210 km/h Top Speed'],
              de: ['0–100 km/h: 9,9 s', '210 km/h Spitze'],
              ru: ['0–100 км/ч: 9,9 с', 'Макс. 210 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.8,
            badges: {
              en: ['185 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['185 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['185 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Linear NA Response'],
              de: ['Klassenbestes Fahrwerk', 'Direktes Ansprechverhalten'],
              ru: ['Эталонное шасси', 'Линейный отклик']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 6.4,
            badges: {
              en: ['Thirsty (8.6 L/100km)', '179 g/km CO2'],
              de: ['Durstig (8,6 L/100km)', '179 g/km CO2'],
              ru: ['Прожорливый (8,6 л/100 км)', '179 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['Higher 179 g CO2 Tax • Euro 4/5', 'Reasonable Midsize Insurance'],
              de: ['Höhere CO2-Steuer (179 g)', 'Normale Versicherung'],
              ru: ['Повышенный налог за 2.0', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Spark Plugs, Thermostat & MTX-75 Gearbox Fluid', de: 'Zündkerzen, Thermostat & Getriebeöl wechseln', ru: 'Свечи, термостат и масло в МКПП' }, cost: '€240–380' }
              ],
              critical: [
                { when: '150–220k km · 10–14 yrs', action: { en: 'Intake Manifold Swirl-Flap Bushings & Rear Trailing-Arm Bushes', de: 'Drallklappen-Lagerung Ansaugbrücke & Hinterachs-Buchsen', ru: 'Вихревые заслонки впуска и задние сайлентблоки' }, cost: '€350–650', risk: { en: 'Rattling intake manifold & uneven rear tyre wear', de: 'Klappernde Ansaugbrücke & hoher Reifenverschleiß', ru: 'Стук впуска и ускоренный износ шин' }, damage: '€1,200–1,800' }
              ]
            },
            score: 8.9,
            badges: {
              en: ['Abundant Cheap Ford Parts', 'No Turbo / No DPF / No DMF'],
              de: ['Viele günstige Ersatzteile', 'Kein Turbo, DPF oder ZMS'],
              ru: ['Изобилие дешёвых запчастей', 'Нет турбины, DPF и маховика']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strong Used Demand', 'Valued for Reliability'],
              de: ['Gefragter Gebrauchter', 'Beliebt für Zuverlässigkeit'],
              ru: ['Высокий спрос на вторичке', 'Ценят за надёжность']
            }
          }
        }
      },
      {
        id: '2.0-ecoboost-203',
        defaultGearboxId: 'powershift-6wet',
        gearboxes: [{ id: 'powershift-6wet', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.0L EcoBoost Turbo (203 HP)', de: '2.0L EcoBoost Turbo (203 PS)', ru: '2.0L EcoBoost Турбо (203 л.с.)' },
          forcedInduction: '@turbo', injection: '@direct', gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet',
          towingBraked: '1,800 kg', sprint0100: '7.9 s', topSpeed: '232 km/h', peakTorque: '300 Nm @ 1,750',
          passingPunch: { en: 'Very Strong Autobahn', de: 'Sehr starker Durchzug', ru: 'Мощная тяга на трассе' },
          realWorldFuel: '8.5–9.6 L/100 km', tankRange: '70 L · ~770 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierModHigh'
        },
        dossierGroup: 'petrol-powershift',
        buyerFitGroup: 'turbo-petrol',
        isDefault: false,
        fuelType: 'petrol',
        hp: 203,
        shortTitle: 'MONDEO 2.0 ECOBOOST 203',
        fullName: '2012 Ford Mondeo 2.0 EcoBoost (203 HP)',
        engineBadge: '2.0L EcoBoost • 203 HP',
        engineSubLabel: {
          en: 'TNBA 2.0L Turbo • 6-Speed PowerShift • 300 Nm',
          de: 'TNBA 2.0L Turbo • 6-Gang PowerShift • 300 Nm',
          ru: 'TNBA 2.0L Турбо • 6-ст. PowerShift • 300 Н·м'
        },
        rarityLabel: {
          en: 'AUTO EXPRESS',
          de: 'AUTOBAHN-EXPRESS',
          ru: 'БЫСТРЫЙ АВТОМАТ'
        },
        originalMsrp: {
          en: '€33,400 New',
          de: '33.400 € Neu',
          ru: '€33 400 новый'
        },
        estUsedPrice: '€7,900',
        perkLabel: {
          en: '✦ 203 HP Turbo • 7.9s 0–100 • 1,800 kg Towing',
          de: '✦ 203 PS Turbo • 7,9s 0–100 • 1.800 kg Anhängelast',
          ru: '✦ 203 л.с. Турбо • 7,9 с до 100 • Прицеп 1 800 кг'
        },
        remarkablePositives: {
          en: [
            'FAST 203 HP TURBO',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            '1,800 KG BRAKED TOWING',
            'SHARP MONDEO STEERING'
          ],
          de: [
            'SCHNELLER 203 PS TURBO',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            '1.800 KG ANHÄNGELAST',
            'PRÄZISE MONDEO-LENKUNG'
          ],
          ru: [
            'БЫСТРЫЙ ТУРБО 203 Л.С.',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ'
          ]
        },
        notableNegatives: {
          en: [
            'RISKY POWERSHIFT AUTO',
            'THIRSTY 9.2L/100KM',
            'VALVE CARBON BUILDUP RISK',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'ANFÄLLIGES POWERSHIFT-GETRIEBE',
            'HOHER VERBRAUCH (9,2L/100KM)',
            'VERKOKUNG DER EINLASSVENTILE',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'КАПРИЗНЫЙ РОБОТ POWERSHIFT',
            'ВЫСОКИЙ РАСХОД 9,2 Л/100 КМ',
            'НАГАР НА ВПУСКНЫХ КЛАПАНАХ',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.0,
          comfortCabin: 8.0,
          spacePracticality: 8.7,
          performanceDynamics: 7.8,
          runningCostsTco: 6.6
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L EcoBoost Inline-4 Turbo (TNBA)', de: '2.0L EcoBoost Reihenvierzylinder Turbo (TNBA)', ru: '2.0L EcoBoost рядный 4-цил. турбо (TNBA)' } },
                  { k: 'displacement', v: '1,999 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '149 kW (203 HP)', de: '149 kW (203 PS)', ru: '149 кВт (203 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Fast 203 HP timing-chain turbo; main ownership risk is the PowerShift DCT gearbox rather than the block.', de: 'Schneller 203-PS-Steuerketten-Turbo; Hauptrisiko ist meist das PowerShift-Doppelkupplungsgetriebe.', ru: 'Быстрый цепной турбомотор (203 л.с.); главный узел риска — робот PowerShift.' }
              },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol'
            },
            score: 4.3,
            badges: {
              en: ['Check Exhaust Manifold Studs', '203 HP • 300 Nm Tune'],
              de: ['Krümmerbolzen & Turbo prüfen', '203 PS • 300 Nm Stufe'],
              ru: ['Шпильки коллектора и турбина', 'Версия 203 л.с. • 300 Н·м']
            },
            dossier: {
              en: {
                headline: 'Strong 2.0L 203 HP Turbo Engine — High Thermal & Exhaust Manifold Repair Risks',
                lowScoreReasons: [
                  'Integrated Exhaust Manifold / Turbo Cracking: The exhaust manifold and turbocharger are cast as one piece; heat cracks and rattling wastegate flaps require costly full-assembly replacement (€1,500–€2,200).',
                  'Direct-Injection Carbon & Injector/Piston Stress: Extended oil intervals and low-octane fuel promote pre-ignition and carbon buildup, risking costly internal engine wear.'
                ],
                strengths: [
                  'Effortless 203 HP highway acceleration with a sturdy open-deck 2.0L aluminum block.',
                  'Can reach 180,000–220,000+ km with strict 10,000 km synthetic oil changes and documented turbo/manifold care.'
                ],
                watchouts: [
                  'Follow annual 10,000–12,000 km synthetic oil intervals and inspect coolant hoses for age seepage.',
                  'Check intake valve cleanliness and spark-plug condition on cars above 120,000 km.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for chirping or ticking from warped turbo manifold bolts and timing-chain rattle.',
                  'Verify regular 10,000–12,000 km oil changes and check the oil dipstick and coolant bottle for clean fluids.',
                  'Test hard highway acceleration for smooth boost with zero misfires or hesitation.'
                ],
                highMileage: [
                  {
                    tier: 'orange',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual turbo oil + STRICT PowerShift dual-clutch fluid & filter change at 50–60k km / 3–4 yrs',
                    cost: '€360–560',
                    ifIgnored: 'Skipping 4-yr PowerShift oil & filter overheats wet clutches and destroys mechatronics',
                    damageCost: '€2,500–4,200'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace hot-running spark plugs (60k), flush coolant & check 6-yr heat-aged turbo/coolant hoses',
                    cost: '€340–540',
                    ifIgnored: 'Heat-aged plastic/rubber hoses crack & old plugs cause dangerous engine knock',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'red',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Change PowerShift automatic gearbox oil & external filter',
                    cost: '€320–480',
                    ifIgnored: 'Dirty fluid destroys gearbox shift control & wet clutches (components & fluids also degrade over years)',
                    damageCost: '€2,400–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Replace warped exhaust manifold studs & gasket',
                    cost: '€450–750',
                    ifIgnored: 'Hot exhaust leak warps turbocharger casing (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km • 11–13 yrs',
                    action: 'Rebuild PowerShift wet clutch pack & cracked plastic damper',
                    cost: '€1,600–2,400',
                    ifIgnored: 'Car loses odd or even gears and refuses to drive (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,200–4,500'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace timing chain kit & clean intake valve carbon',
                    cost: '€750–1,150',
                    ifIgnored: 'Stretched chain jumps timing and wrecks valves (components & fluids also degrade over years)',
                    damageCost: '€2,500–3,800'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger 2.0-Turbomotor (203 PS) — hohe thermische Belastung an Krümmer & Turbo',
                lowScoreReasons: [
                  'Risse an Krümmer & Turbolader-Einheit: Abgaskrümmer und Turbogehäuse bilden ein Bauteil — Hitzerisse oder klappernde Wastegate-Klappen erfordern den teuren Kompletttausch (1.500–2.200 €).',
                  'Verkokung & Kolbenbelastung bei Wartungsstau: Überzogene Ölwechsel und schlechter Sprit begünstigen Verkokung sowie Frühzündungen unter Volllast.'
                ],
                strengths: [
                  'Souveräne 203-PS-Autobahnleistung mit robustem 2.0-Liter-Aluminiumblock.',
                  'Erreicht 180.000–220.000+ km bei strengen Ölwechseln alle 10.000 km und intaktem Turbolader.'
                ],
                watchouts: [
                  'Ölwechsel alle 10.000–12.000 km strikt einhalten und Kunststoff-Kühlerschläuche auf Risse prüfen.',
                  'Einlassventile und Zündkerzen ab ca. 120.000 km auf Ablagerungen und Verschleiß kontrollieren.'
                ],
                beforeYouBuy: [
                  'Beim Kaltstart auf Zwitschern oder Tickern am Turbokrümmer sowie ruhigen Kettenlauf achten.',
                  'Kurze Ölwechsel-Intervalle (10.000–12.000 km) und saubere Flüssigkeiten an Ölstab und Ausgleichsbehälter prüfen.',
                  'Auf der Autobahn kräftig durchbeschleunigen — kein Stottern, Ruckeln oder Ladedruckabfall.'
                ],
                highMileage: [
                  {
                    tier: 'orange',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Turbo-Öl + STRENG alle 50–60 Tkm / 3–4 J. PowerShift-Getriebeöl samt Filter wechseln',
                    cost: '360–560 €',
                    ifIgnored: 'Ohne 4-J.-PowerShift-Service verbrennen Nasskupplungen & Mechatronik geht kaputt',
                    damageCost: '2.500–4.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Turbo-Zündkerzen (60 Tkm) & Kühlmittel tauschen sowie nach 6 J. hitzegealterte Schläuche prüfen',
                    cost: '340–540 €',
                    ifIgnored: 'Hitzegealterte Gummi-/Plastikschläuche reißen; alte Kerzen schaden den Kolben',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: 'PowerShift-Getriebeöl samt äußerem Feinfilter wechseln',
                    cost: '320–480 €',
                    ifIgnored: 'Altes Öl zerstört Mechatronik-Steuerung & Nasskupplung (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.400–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Verzogene Abgaskrümmer-Bolzen & Dichtung ersetzen',
                    cost: '450–750 €',
                    ifIgnored: 'Undichtigkeit verzieht und reißt das Turbolader-Gehäuse (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km • 11–13 J.',
                    action: 'PowerShift-Doppelkupplung & brüchigen Kunststoff-Dämpfer überholen',
                    cost: '1.600–2.400 €',
                    ifIgnored: 'Ausfall ganzer Ganggruppen bis zum Totalausfall (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.200–4.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkettensatz erneuern & Einlassventile säubern',
                    cost: '750–1.150 €',
                    ifIgnored: 'Überspringende Kette zerstört Ventile und Kolben (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.500–3.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Мощный 2.0 турбо (203 л.с.) — высокие риски по трещинам коллектора и турбины',
                lowScoreReasons: [
                  'Трещины выпускного коллектора и турбины: Коллектор отлит заодно с горячей частью турбины — трещины от перегрева и звон калитки вестгейта требуют замены узла в сборе (€1 500–2 200).',
                  'Риск детонации и нагара на прямом впрыске: Затянутые интервалы масла и низкий октан провоцируют закоксовку и разрушение перегородок поршней.'
                ],
                strengths: [
                  'Уверенная трассовая динамика (203 л.с.) и крепкий 2,0-литровый алюминиевый блок.',
                  'Проходит 180 000–220 000+ км при замене масла каждые 10 000 км и исправном наддуве.'
                ],
                watchouts: [
                  'Меняйте масло строго каждые 10 000–12 000 км и проверяйте пластиковые патрубки охлаждения.',
                  'После 120 000 км контролируйте состояние свечей и нагар на впускных клапанах.'
                ],
                beforeYouBuy: [
                  'Послушать холодный пуск на свист или цокот со стороны выпускного коллектора и цепи ГРМ.',
                  'Убедиться в частой замене масла (10–12 тыс. км) и чистоте масла и антифриза.',
                  'Проверить ровный разгон под полным газом без пропусков зажигания и провалов тяги.'
                ],
                highMileage: [
                  {
                    tier: 'orange',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно масло мотора + СТРОГО менять масло и фильтр робота PowerShift раз в 50–60 тыс. / 3–4 года',
                    cost: '€360–560',
                    ifIgnored: 'Пропуск 4-летнего ТО коробки перегревает сцепления и убивает мехатроник',
                    damageCost: '€2 500–4 200'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить свечи к 60 тыс. км, освежить антифриз и проверить стареющие от жара трубки (6 лет)',
                    cost: '€340–540',
                    ifIgnored: 'Пересохшие от температуры пластиковые и резиновые трубки трескаются и текут',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'red',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Сменить масло и наружный фильтр в роботе PowerShift',
                    cost: '€320–480',
                    ifIgnored: 'Грязное масло убивает мехатроник и сцепления коробки (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 400–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Заменить оборванные шпильки выпускного коллектора и прокладку',
                    cost: '€450–750',
                    ifIgnored: 'Прорыв горячих газов ведёт к трещинам корпуса турбины (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км • 11–13 лет',
                    action: 'Перебрать сцепление и демпфер в коробке PowerShift',
                    cost: '€1 600–2 400',
                    ifIgnored: 'Пропадает половина передач и машина встаёт на месте (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 200–4 500'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить цепь двигателя и почистить впускные клапаны',
                    cost: '€750–1 150',
                    ifIgnored: 'Перескок растянутой цепи и поломка головки блока (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 500–3 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 4.0,
            badges: {
              en: ['6-Speed PowerShift Wet-DCT', 'Strict 60k km Oil Change Req.'],
              de: ['6-Gang PowerShift (DKG)', 'Alle 60.000 km Ölwechsel Pflicht'],
              ru: ['Робот PowerShift (6 ст.)', 'Замена масла строго раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.8,
            badges: {
              en: ['580 kg Payload', '1,800 kg Braked Tow'],
              de: ['580 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 580 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.6,
            badges: {
              en: ['0–100 km/h: 7.9 s', '232 km/h Top Speed'],
              de: ['0–100 km/h: 7,9 s', '232 km/h Spitze'],
              ru: ['0–100 км/ч: 7,9 с', 'Макс. 232 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.7,
            badges: {
              en: ['300 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['300 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['300 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Heavier Front End'],
              de: ['Klassenbestes Fahrwerk', 'Schwerere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжелее передок']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 5.2,
            badges: {
              en: ['Thirsty (9.2 L/100km)', '179 g/km CO2'],
              de: ['Durstig (9,2 L/100km)', '179 g/km CO2'],
              ru: ['Прожорливый (9,2 л/100 км)', '179 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.2,
            badges: {
              en: ['2.0L Turbo Tax • Euro 5', '203 HP Insurance Bracket'],
              de: ['2.0-Turbosteuer • Euro 5', '203-PS-Versicherungsklasse'],
              ru: ['Налог за 2,0 турбо • Euro 5', 'Страховка за 203 л.с.']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '60,000 km · 3 yrs', action: { en: 'PowerShift Wet-DCT Fluid & External Filter (Strictly Mandatory)', de: 'PowerShift-Getriebeöl & Filter wechseln (Strikt alle 60.000 km)', ru: 'Масло и фильтр робота PowerShift (строго раз в 60 тыс. км)' }, cost: '€320–480' }
              ],
              critical: [
                { when: '120–180k km · 8–12 yrs', action: { en: 'PowerShift Wet-Clutch Damper Springs & Mechatronics', de: 'PowerShift-Kupplungsdämpfer & Mechatronik', ru: 'Демпфер сцепления и мехатроник PowerShift' }, cost: '€1,600–2,600', risk: { en: 'Harsh shifting, plastic damper fragments & gearbox failure', de: 'Ruckartiges Schalten & kapitaler Getriebeschaden', ru: 'Рывки при переключении и выход КПП из строя' }, damage: '€3,500–5,500' }
              ]
            },
            score: 3.5,
            badges: {
              en: ['Costly PowerShift Oil & Clutches', 'Expensive DI Turbo & Manifold'],
              de: ['Teurer PowerShift-Service', 'Komplexe Turbo-/Krümmer-Teile'],
              ru: ['Дорогое ТО робота PowerShift', 'Дорогие турбина и форсунки']
            }
          },
          depreciationResale: {
            score: 5.4,
            badges: {
              en: ['Steep Initial Drop', 'PowerShift Discounts'],
              de: ['Hoher Wertverlust', 'PowerShift-Abschlag'],
              ru: ['Сильная уценка', 'Скидка из-за PowerShift']
            }
          }
        }
      },
      {
        id: '2.0-ecoboost-240',
        defaultGearboxId: 'powershift-6wet',
        gearboxes: [{ id: 'powershift-6wet', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.0L EcoBoost Turbo (240 HP)', de: '2.0L EcoBoost Turbo (240 PS)', ru: '2.0L EcoBoost Турбо (240 л.с.)' },
          forcedInduction: '@turbo', injection: '@direct', gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet',
          towingBraked: '1,800 kg', sprint0100: '7.5 s', topSpeed: '246 km/h', peakTorque: '340 Nm @ 1,900',
          passingPunch: { en: 'Effortless Flagship Pull', de: 'Souveräner Top-Durchzug', ru: 'Мощнейшая тяга на обгонах' },
          realWorldFuel: '8.9–10.2 L/100 km', tankRange: '70 L · ~730 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierHigh', timingDrive: '@chain', serviceWear: '@tierModHigh'
        },
        dossierGroup: 'petrol-powershift',
        buyerFitGroup: 'turbo-petrol',
        isDefault: false,
        fuelType: 'petrol',
        hp: 240,
        shortTitle: 'MONDEO 2.0 ECOBOOST 240',
        fullName: '2012 Ford Mondeo 2.0 EcoBoost (240 HP)',
        engineBadge: '2.0L EcoBoost • 240 HP',
        engineSubLabel: {
          en: 'TPBA 2.0L Turbo • 6-Speed PowerShift • 340 Nm',
          de: 'TPBA 2.0L Turbo • 6-Gang PowerShift • 340 Nm',
          ru: 'TPBA 2.0L Турбо • 6-ст. PowerShift • 340 Н·м'
        },
        rarityLabel: {
          en: 'TOP PETROL',
          de: 'TOP-BENZINER',
          ru: 'ТОП-БЕНЗИН'
        },
        originalMsrp: {
          en: '€36,200 New',
          de: '36.200 € Neu',
          ru: '€36 200 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ 240 HP Flagship Turbo • 7.5s 0–100 • 246 km/h',
          de: '✦ 240 PS Top-Turbo • 7,5s 0–100 • 246 km/h',
          ru: '✦ 240 л.с. Топ-Турбо • 7,5 с до 100 • 246 км/ч'
        },
        remarkablePositives: {
          en: [
            'FAST 240 HP FLAGSHIP TURBO',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            '1,800 KG BRAKED TOWING',
            'SHARP MONDEO STEERING'
          ],
          de: [
            'SCHNELLER 240 PS TOP-TURBO',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            '1.800 KG ANHÄNGELAST',
            'PRÄZISE MONDEO-LENKUNG'
          ],
          ru: [
            'БЫСТРЫЙ ТОП-ТУРБО 240 Л.С.',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ'
          ]
        },
        notableNegatives: {
          en: [
            'RISKY POWERSHIFT AUTO',
            'THIRSTY 9.8L/100KM',
            'VALVE CARBON BUILDUP RISK',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'ANFÄLLIGES POWERSHIFT-GETRIEBE',
            'HOHER VERBRAUCH (9,8L/100KM)',
            'VERKOKUNG DER EINLASSVENTILE',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'КАПРИЗНЫЙ РОБОТ POWERSHIFT',
            'ВЫСОКИЙ РАСХОД 9,8 Л/100 КМ',
            'НАГАР НА ВПУСКНЫХ КЛАПАНАХ',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 6.9,
          comfortCabin: 8.0,
          spacePracticality: 8.7,
          performanceDynamics: 8.2,
          runningCostsTco: 6.3
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L EcoBoost Inline-4 Turbo (TPBA)', de: '2.0L EcoBoost Reihenvierzylinder Turbo (TPBA)', ru: '2.0L EcoBoost рядный 4-цил. турбо (TPBA)' } },
                  { k: 'displacement', v: '1,999 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '176 kW (240 HP)', de: '176 kW (240 PS)', ru: '176 кВт (240 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Top 240 HP timing-chain turbo; extra boost and 340 Nm torque increase thermal stress on the exhaust manifold and PowerShift DCT.', de: 'Stärkster 240-PS-Steuerketten-Turbo; höherer Ladedruck und 340 Nm belasten Krümmer und PowerShift stärker.', ru: 'Топовый цепной турбомотор (240 л.с.); повышенный наддув и 340 Н·м сильнее нагружают коллектор и робот PowerShift.' }
              },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol'
            },
            score: 3.8,
            badges: {
              en: ['Check Exhaust Manifold Studs', '240 HP • 340 Nm Top Tune'],
              de: ['Krümmerbolzen & Turbo prüfen', '240 PS • 340 Nm Topstufe'],
              ru: ['Шпильки коллектора и турбина', 'Топ-версия 240 л.с. • 340 Н·м']
            },
            dossier: {
              en: {
                headline: 'Potent 2.0L 240 HP Turbo Flagship — Highest Thermal & PowerShift Stress',
                lowScoreReasons: [
                  'Integrated Exhaust Manifold / Turbo Cracking: Under 240 HP boost heat, the one-piece cast manifold and turbo housing crack or develop loose wastegate flaps more readily (€1,500–€2,200).',
                  'High-Boost Carbon & Piston Stress: Running 340 Nm through direct injection demands strict 98-octane fuel and short oil intervals to avoid pre-ignition and intake carbon.'
                ],
                strengths: [
                  'Fastest mainstream Mondeo ever built — effortless 240 HP / 340 Nm autobahn passing punch.',
                  'Capable of 180,000–220,000 km when warmed gently, run on premium fuel, and maintained on 8,000–10,000 km oil changes.'
                ],
                watchouts: [
                  'Stick strictly to 8,000–10,000 km synthetic oil changes and allow cool-down after hard motorway runs.',
                  'Watch intake valve buildup, turbo oil-feed lines, and PowerShift clutch engagement at high mileage.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for chirping or ticking from warped turbo manifold bolts and timing-chain rattle.',
                  'Verify documented 10,000 km oil changes and check the oil dipstick and coolant bottle for clean fluids.',
                  'Test full-throttle acceleration through multiple gears for clean 240 HP pull without misfires, boost leaks, or clutch flare.'
                ],
                highMileage: [
                  {
                    tier: 'orange',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual turbo oil + STRICT PowerShift dual-clutch fluid & filter change at 50–60k km / 3–4 yrs',
                    cost: '€360–560',
                    ifIgnored: 'Skipping 4-yr PowerShift oil & filter under 340 Nm overheats wet clutches and destroys mechatronics',
                    damageCost: '€2,500–4,200'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace hot-running spark plugs (50–60k), flush coolant & check 6-yr heat-aged turbo/coolant hoses',
                    cost: '€340–540',
                    ifIgnored: 'Heat-aged plastic/rubber hoses crack & worn plugs trigger high-boost misfires or knock',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'red',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Change PowerShift automatic gearbox oil & external filter',
                    cost: '€320–480',
                    ifIgnored: 'Dirty fluid destroys gearbox shift control & wet clutches (components & fluids also degrade over years)',
                    damageCost: '€2,400–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Replace warped exhaust manifold studs, gasket & inspect turbo/wastegate housing',
                    cost: '€480–800',
                    ifIgnored: 'Hot exhaust leak warps and cracks the integrated turbocharger housing (seals also harden with age)',
                    damageCost: '€1,600–2,400'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km • 11–13 yrs',
                    action: 'Rebuild PowerShift wet clutch pack & cracked plastic damper',
                    cost: '€1,600–2,400',
                    ifIgnored: '340 Nm load causes odd or even gears to drop out completely (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,200–4,500'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace timing chain kit & clean intake valve carbon',
                    cost: '€750–1,150',
                    ifIgnored: 'Stretched chain jumps timing and wrecks valves (components & fluids also degrade over years)',
                    damageCost: '€2,500–3,800'
                  }
                ]
              },
              de: {
                headline: 'Starker 2.0-Turbomotor (240 PS) — höchste thermische & PowerShift-Belastung',
                lowScoreReasons: [
                  'Risse an Krümmer & Turbolader-Einheit: Bei 240 PS Ladedruck entstehen an der einteiligen Krümmer-Turbo-Einheit leichter Hitzerisse oder klappernde Wastegates (Kompletttausch 1.500–2.200 €).',
                  'Hohe Ladedruck- & Verkokungsbelastung: 340 Nm erfordern guten Kraftstoff und kurze Ölwechsel-Intervalle, sonst drohen Verkokung und Frühzündungen unter Last.'
                ],
                strengths: [
                  'Schnellster Serien-Mondeo seiner Generation — mühelose 240 PS / 340 Nm auf der Autobahn.',
                  'Erreicht 180.000–220.000 km bei Warm-/Kaltfahren, gutem Sprit und Ölwechseln alle 8.000–10.000 km.'
                ],
                watchouts: [
                  'Ölwechsel alle 8.000–10.000 km strikt einhalten und Turbo nach zügiger Autobahnfahrt kurz nachlaufen lassen.',
                  'Einlassventile, Turbo-Leitungen und PowerShift-Schaltverhalten bei höherer Laufleistung genau beobachten.'
                ],
                beforeYouBuy: [
                  'Beim Kaltstart auf Zwitschern oder Tickern am Turbokrümmer sowie ruhigen Kettenlauf achten.',
                  'Kurze Ölwechsel-Intervalle (ca. 10.000 km) und saubere Flüssigkeiten an Ölstab und Ausgleichsbehälter prüfen.',
                  'Auf der Autobahn voll durchbeschleunigen — satter 240-PS-Schub ohne Aussetzer, Ladedruckverlust oder Kupplungsrutschen.'
                ],
                highMileage: [
                  {
                    tier: 'orange',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Turbo-Öl + STRENG alle 50–60 Tkm / 3–4 J. PowerShift-Getriebeöl samt Filter wechseln',
                    cost: '360–560 €',
                    ifIgnored: 'Ohne 4-J.-PowerShift-Service verbrennen die bei 340 Nm belasteten Nasskupplungen & die Mechatronik',
                    damageCost: '2.500–4.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Turbo-Zündkerzen (50–60 Tkm) & Kühlmittel tauschen sowie nach 6 J. hitzegealterte Schläuche prüfen',
                    cost: '340–540 €',
                    ifIgnored: 'Hitzegealterte Schläuche reißen; verschlissene Kerzen lösen unter Volllast Klopfen aus',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: 'PowerShift-Getriebeöl samt äußerem Feinfilter wechseln',
                    cost: '320–480 €',
                    ifIgnored: 'Altes Öl zerstört Mechatronik-Steuerung & Nasskupplung (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.400–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Verzogene Abgaskrümmer-Bolzen & Dichtung ersetzen sowie Turbogehäuse prüfen',
                    cost: '480–800 €',
                    ifIgnored: 'Undichtigkeit verzieht und reißt das integrierte Turbolader-Gehäuse (Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.400 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km • 11–13 J.',
                    action: 'PowerShift-Doppelkupplung & brüchigen Kunststoff-Dämpfer überholen',
                    cost: '1.600–2.400 €',
                    ifIgnored: 'Bei 340 Nm fallen ganze Ganggruppen bis zum Totalausfall aus (Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.200–4.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkettensatz erneuern & Einlassventile säubern',
                    cost: '750–1.150 €',
                    ifIgnored: 'Überspringende Kette zerstört Ventile und Kolben (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.500–3.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Флагманский 2.0 турбо (240 л.с.) — максимальная термонагрузка и нагрузка на PowerShift',
                lowScoreReasons: [
                  'Трещины выпускного коллектора и турбины: При наддуве версии 240 л.с. литой коллектор с турбиной быстрее перегревается, даёт трещины и люфт вестгейта (замена в сборе €1 500–2 200).',
                  'Риск детонации и нагара под высокой нагрузкой: 340 Н·м и прямой впрыск критичны к 98-му бензину и частым заменам масла для защиты поршней.'
                ],
                strengths: [
                  'Самый быстрый серийный Mondeo — лёгкий трассовый разгон (240 л.с. и 340 Н·м).',
                  'Проходит 180 000–220 000 км при спокойном прогреве/охлаждении, хорошем топливе и смене масла раз в 8–10 тыс. км.'
                ],
                watchouts: [
                  'Меняйте масло каждые 8 000–10 000 км и давайте турбине остыть после быстрой трассы.',
                  'На больших пробегах следите за нагаром на клапанах, масляными трубками турбины и работой PowerShift.'
                ],
                beforeYouBuy: [
                  'Послушать холодный пуск на свист или цокот со стороны выпускного коллектора и цепи ГРМ.',
                  'Убедиться в заменах масла каждые 10 тыс. км и чистоте масла и антифриза.',
                  'Проверить разгон «в пол» на нескольких передачах: тяга на 240 л.с. должна быть ровной, без провалов и пробуксовки робота.'
                ],
                highMileage: [
                  {
                    tier: 'orange',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно масло мотора + СТРОГО менять масло и фильтр робота PowerShift раз в 50–60 тыс. / 3–4 года',
                    cost: '€360–560',
                    ifIgnored: 'При моменте 340 Н·м пропуск ТО коробки быстро перегревает сцепления и убивает мехатроник',
                    damageCost: '€2 500–4 200'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить свечи (50–60 тыс. км), освежить антифриз и проверить стареющие от жара трубки (6 лет)',
                    cost: '€340–540',
                    ifIgnored: 'Пересохшие трубки текут, а старые свечи под высоким наддувом вызывают пропуски и детонацию',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'red',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Сменить масло и наружный фильтр в роботе PowerShift',
                    cost: '€320–480',
                    ifIgnored: 'Грязное масло убивает мехатроник и сцепления коробки (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 400–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Заменить шпильки/прокладку выпускного коллектора и проверить горячую часть турбины',
                    cost: '€480–800',
                    ifIgnored: 'Прорыв горячих газов коробит и разрушает корпус турбины (уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 400'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км • 11–13 лет',
                    action: 'Перебрать сцепление и демпфер в коробке PowerShift',
                    cost: '€1 600–2 400',
                    ifIgnored: 'Под моментом 340 Н·м пропадает ряд передач и машина встаёт (узлы и жидкости стареют с годами)',
                    damageCost: '€3 200–4 500'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить цепь двигателя и почистить впускные клапаны',
                    cost: '€750–1 150',
                    ifIgnored: 'Перескок растянутой цепи и поломка головки блока (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 500–3 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 3.7,
            badges: {
              en: ['6-Speed PowerShift Wet-DCT', 'Strict 60k km Oil • 340 Nm Load'],
              de: ['6-Gang PowerShift (DKG)', 'Alle 60.000 km Öl • 340 Nm Last'],
              ru: ['Робот PowerShift (6 ст.)', 'Масло раз в 60 тыс. • 340 Н·м']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.8,
            badges: {
              en: ['580 kg Payload', '1,800 kg Braked Tow'],
              de: ['580 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 580 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.4,
            badges: {
              en: ['0–100 km/h: 7.5 s', '246 km/h Top Speed'],
              de: ['0–100 km/h: 7,5 s', '246 km/h Spitze'],
              ru: ['0–100 км/ч: 7,5 с', 'Макс. 246 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['340 Nm Effortless Mid-Range', 'Fast Autobahn Passing Punch'],
              de: ['340 Nm satter Durchzug', 'Starke Autobahn-Reserve'],
              ru: ['340 Н·м уверенной тяги', 'Мощный запас на трассе']
            }
          },
          handlingAgility: {
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Heavier Front End'],
              de: ['Klassenbestes Fahrwerk', 'Schwerere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжелее передок']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 4.8,
            badges: {
              en: ['Thirsty (9.8 L/100km)', '179 g/km CO2'],
              de: ['Durstig (9,8 L/100km)', '179 g/km CO2'],
              ru: ['Прожорливый (9,8 л/100 км)', '179 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.6,
            badges: {
              en: ['2.0L Turbo Tax • Euro 5', 'Higher 240 HP Insurance Tier'],
              de: ['2.0-Turbosteuer • Euro 5', 'Höhere 240-PS-Versicherung'],
              ru: ['Налог за 2,0 турбо • Euro 5', 'Повышенная страховка за 240 л.с.']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '60,000 km · 3 yrs', action: { en: 'PowerShift Wet-DCT Fluid & External Filter (Strictly Mandatory)', de: 'PowerShift-Getriebeöl & Filter wechseln (Strikt alle 60.000 km)', ru: 'Масло и фильтр робота PowerShift (строго раз в 60 тыс. км)' }, cost: '€320–480' }
              ],
              critical: [
                { when: '120–180k km · 8–12 yrs', action: { en: 'PowerShift Wet-Clutch Damper Springs & Mechatronics', de: 'PowerShift-Kupplungsdämpfer & Mechatronik', ru: 'Демпфер сцепления и мехатроник PowerShift' }, cost: '€1,600–2,600', risk: { en: 'Harsh shifting, plastic damper fragments & gearbox failure', de: 'Ruckartiges Schalten & kapitaler Getriebeschaden', ru: 'Рывки при переключении и выход КПП из строя' }, damage: '€3,500–5,500' }
              ]
            },
            score: 3.3,
            badges: {
              en: ['Costly PowerShift Oil & Clutches', 'High-Boost Turbo & Manifold Costs'],
              de: ['Teurer PowerShift-Service', 'Hohe Turbo-/Krümmer-Kosten'],
              ru: ['Дорогое ТО робота PowerShift', 'Дорогие турбина и форсунки']
            }
          },
          depreciationResale: {
            score: 5.4,
            badges: {
              en: ['Rarer 240 HP Flagship', 'PowerShift Discounts'],
              de: ['Seltener 240-PS-Topmotor', 'PowerShift-Abschlag'],
              ru: ['Редкий топ-мотор 240 л.с.', 'Скидка из-за PowerShift']
            }
          }
        }
      },
      {
        id: '2.3-duratec',
        defaultGearboxId: 'aisin-6at',
        gearboxes: [{ id: 'aisin-6at', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.3L Duratec NA', de: '2.3L Duratec Sauger', ru: '2.3L Duratec Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@auto6', clutchDmf: '@torqueConv',
          towingBraked: '1,600 kg', sprint0100: '10.5 s', topSpeed: '207 km/h', peakTorque: '208 Nm @ 4,200',
          passingPunch: { en: 'Smooth Auto Cruiser', de: 'Sanfter Wandler-Gleiter', ru: 'Плавный автомат-круизер' },
          realWorldFuel: '9.5–10.8 L/100 km', tankRange: '70 L · ~690 km', euroNorm: 'Euro 4 / 5',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierLowMod'
        },
        dossierGroup: 'petrol-conv-auto',
        buyerFitGroup: 'na-petrol',
        buyerFitOverrides: {
          skip: ['mondeoLongParking', 'mondeoNaThirst', 'mondeoInteriorAge', 'mondeoRearArchCheck']
        },
        isDefault: false,
        fuelType: 'petrol',
        hp: 161,
        shortTitle: 'MONDEO 2.3 AUTO',
        fullName: '2012 Ford Mondeo 2.3',
        engineBadge: '2.3L Duratec NA • 161 HP',
        engineSubLabel: {
          en: 'SEBA 2.3L NA (03/2007–04/2010) • 6-Speed Aisin Auto • 208 Nm',
          de: 'SEBA 2.3L Saugmotor (03/2007–04/2010) • 6-Gang Aisin-Automatik • 208 Nm',
          ru: 'SEBA 2.3L Атмосферник (03/2007–04/2010) • 6-ст. АКПП Aisin • 208 Н·м'
        },
        rarityLabel: {
          en: 'TOUGH AUTO',
          de: 'SOLIDE AUTOMATIK',
          ru: 'НАДЁЖНЫЙ АВТОМАТ'
        },
        originalMsrp: {
          en: '€30,650 New',
          de: '30.650 € Neu',
          ru: '€30 650 новый'
        },
        estUsedPrice: '€6,400',
        perkLabel: {
          en: '✦ Durable 6-Speed Aisin Auto • Bulletproof 2.3 Chain NA • 550L Boot',
          de: '✦ Robuste 6-Gang-Aisin-Automatik • Haltbarer 2.3-Kettenmotor • 550L Kofferraum',
          ru: '✦ Надёжный автомат Aisin • Цепной 2.3 атмосферник • Багажник 550 л'
        },
        remarkablePositives: {
          en: [
            'DURABLE 6-SPEED AUTO',
            'BULLETPROOF 2.3 NA ENGINE',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            '1,600 KG BRAKED TOWING'
          ],
          de: [
            'ROBUSTE 6-GANG-AUTOMATIK',
            'UNZERSTÖRBARER 2.3 SAUGMOTOR',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            '1.600 KG ANHÄNGELAST'
          ],
          ru: [
            'НАДЁЖНЫЙ 6-СТ. АВТОМАТ AISIN',
            'НЕУБИВАЕМЫЙ МОТОР 2.3',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'БУКСИРОВКА ДО 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 10.2L/100KM',
            'PRE-FACELIFT ONLY (TO 2010)',
            'HIGH CO2 TAX (223G)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'HOHER VERBRAUCH (10,2L/100KM)',
            'NUR VORFACELIFT (BIS 04/2010)',
            'HOHE CO2-STEUER (223G)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'БОЛЬШОЙ РАСХОД 10,2 Л/100 КМ',
            'ТОЛЬКО ДОРЕСТАЙЛ (ДО 04/2010)',
            'ВЫСОКИЙ НАЛОГ (223 Г CO2)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.3,
          comfortCabin: 8.0,
          spacePracticality: 8.6,
          performanceDynamics: 6.9,
          runningCostsTco: 6.8
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.3L Duratec HE Inline-4 NA (SEBA · Mazda L3)', de: '2.3L Duratec HE Reihenvierzylinder Sauger (SEBA · Mazda-Basis)', ru: '2.3L Duratec HE рядный 4-цил. атмосферный (база Mazda L3)' } },
                  { k: 'displacement', v: '2,261 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '118 kW (161 HP)', de: '118 kW (161 PS)', ru: '118 кВт (161 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Thirsty but ultra-durable combination: naturally aspirated timing-chain engine + Japanese Aisin 6-speed torque auto.', de: 'Durstig, aber extrem haltbar: Steuerketten-Sauger plus japanische Aisin-6-Gang-Wandlerautomatik.', ru: 'Прожорливая, но супернадёжная связка: цепной атмосферник + 6-ст. автомат Aisin.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.3,
            badges: {
              en: ['Naturally Aspirated Port Injection', '2.3 Chain-Driven NA'],
              de: ['Saubere Saugrohreinspritzung', '2.3 Ketten-Saugmotor'],
              ru: ['Надёжный распределённый впрыск', 'Цепной мотор 2.3']
            },
            dossier: {
              en: {
                headline: 'The Safest Automatic Mondeo Mk4: Mazda 2.3L Chain',
                strengths: [
                  'No turbo, no direct injection, and a durable timing chain (produced 03/2007–04/2010).',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.',
                  'Check spark plugs, ignition coils, and rubber cooling hoses for age-related wear.'
                ],
                beforeYouBuy: [
                  'Check engine oil level carefully— worn rings can burn oil quickly if earlier changes were skipped.',
                  'Drive until fully warm to confirm the 6-speed traditional automatic shifts smoothly up and down.',
                  'Listen at idle for any plastic rattling sound coming from the intake manifold flaps.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 5W-30 oil changes & 2-yr brake fluid flush + monitor oil level cleanly',
                    cost: '€140–220',
                    ifIgnored: 'Long oil intervals glaze cylinder walls & cause early oil ring sticking',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Drain & refill 6-speed Aisin auto oil at 60–80k km / 4–5 yrs + plugs & 6-yr aging rubber hoses',
                    cost: '€340–520',
                    ifIgnored: '"Sealed-for-life" auto fluid ages with heat, burning valve body solenoids early',
                    damageCost: '€1,700–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Drain and refill 6-speed Aisin automatic gearbox oil',
                    cost: '€220–360',
                    ifIgnored: 'Harsh gear bumps & worn internal shift valves (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Replace rattling intake manifold air flaps',
                    cost: '€320–580',
                    ifIgnored: 'Loose flap rod drops into engine cylinders',
                    damageCost: '€1,900–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Flush piston rings & check oil level every 2,000 km',
                    cost: '€150–300',
                    ifIgnored: 'Running dry on oil ruins lower crankshaft bearings (components & fluids also degrade over years)',
                    damageCost: '€2,500–3,600'
                  },
                  {
                    tier: 'yellow',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace water pump, thermostat & drive belt',
                    cost: '€280–450',
                    ifIgnored: 'Coolant leak & overheating on long highway trips (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,200'
                  }
                ]
              },
              de: {
                headline: 'Die sicherste Mondeo-Automatik: Mazda 2.3L Kette-Wandler',
                strengths: [
                  'Kein Turbo, keine Direkteinspritzung (gebaut 03/2007–04/2010).',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: ['Alle 60.000–80.000 km empfohlen für lange Lebensdauer.', 'Über 10 L/100km im Alltag.'],
                beforeYouBuy: [
                  'Ölstand am Peilstab sorgfältig prüfen— vernachlässigte Motoren verbrauchen über die Ringe teils viel Öl.',
                  'Probefahrt bis Betriebstemperatur ausdehnen, damit die 6-Gang-Wandlerautomatik heiß sauber schaltet.',
                  'Im Leerlauf auf leichtes Klappern der Ansaugkrümmer-Klappen achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 5W-30 Öl wechseln, Bremsflüssigkeit alle 2 J. & Ölstand regelmäßig im Blick behalten',
                    cost: '140–220 €',
                    ifIgnored: 'Überzogenes Altöl fördert frühzeitig verkokte Ölabstreifringe beim 2.3er',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '6-Gang-Aisin-Automatiköl nach 60–80 Tkm / 4–5 J. wechseln + Kerzen & 6-J.-Schläuche prüfen',
                    cost: '340–520 €',
                    ifIgnored: 'Sogenannte „Lebensdauerfüllung“ altert thermisch & ruiniert die Schaltventile',
                    damageCost: '1.700–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ölwechsel an der 6-Gang-Aisin-Automatik durchführen',
                    cost: '220–360 €',
                    ifIgnored: 'Ruppiges Schalten & Verschleiß am Schieberkasten (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Ausgeschlagene Luftklappen im Ansaugkrümmer tauschen',
                    cost: '320–580 €',
                    ifIgnored: 'Gelöste Welle fällt in den Motor & verursacht Motorschaden',
                    damageCost: '1.900–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Ölstand oft kontrollieren & Kolbenringe spülen',
                    cost: '150–300 €',
                    ifIgnored: 'Fahren mit zu wenig Öl zerstört Kurbelwellenlager (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.500–3.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe, Thermostat & Keilriemen ersetzen',
                    cost: '280–450 €',
                    ifIgnored: 'Kühlwasserverlust & Überhitzen auf der Autobahn (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Самый надёжный Mondeo на автомате: цепной 2.3 + гидротрансформатор Aisin',
                strengths: [
                  'Без турбины и прямого впрыска (выпускался 03/2007–04/2010).',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Более 10 л/100 км в смешанном цикле.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Внимательно проверить уровень масла щупом— при редком ТО мотор начинает активно расходовать масло.',
                  'Послушать под капотом на холостом ходу пластиковый стук заслонок впускного коллектора.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло 5W-30, тормозную жидкость раз в 2 года и следить за уровнем масла',
                    cost: '€140–220',
                    ifIgnored: 'Затянутые интервалы ускоряют закоксовку маслосъёмных колец',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в 6-ступ. автомате Aisin на 60–80 тыс. / 4–5 лет, свечи и шланги (6 лет)',
                    cost: '€340–520',
                    ifIgnored: '«Вечная» жидкость АКПП стареет от нагрева и быстро изнашивает гидроблок',
                    damageCost: '€1 700–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Освежить масло в классическом 6-ступенчатом автомате Aisin',
                    cost: '€220–360',
                    ifIgnored: 'Грубые толчки при смене передач и износ гидроблока (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Заменить разболтанные заслонки во впускном коллекторе',
                    cost: '€320–580',
                    ifIgnored: 'Стержень или деталь заслонки провалится в цилиндр',
                    damageCost: '€1 900–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Регулярно проверять уровень масла и сделать раскоксовку колец',
                    cost: '€150–300',
                    ifIgnored: 'Масляное голодание проворачивает вкладыши двигателя (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 500–3 600'
                  },
                  {
                    tier: 'yellow',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить водяной насос, термостат и ремень навесного',
                    cost: '€280–450',
                    ifIgnored: 'Течь антифриза и перегрев в дальней поездке (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            specBreakdown: { gearbox: '@gbAuto6Ford', clutchDmf: '@clutchTorqueConv' },
            score: 9.1,
            badges: {
              en: ['Reliable Aisin 6-Speed Auto', 'Avoids PowerShift DCT Risk'],
              de: ['Robuste Aisin 6-Automatik', 'Kein PowerShift-Risiko'],
              ru: ['Надёжный автомат Aisin 6', 'Классический гидротрансформатор']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['580 kg Payload', '1,600 kg Braked Tow'],
              de: ['580 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 580 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.2,
            badges: {
              en: ['0–100 km/h: 10.5 s', '207 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '207 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5 с', 'Макс. 207 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.2,
            badges: {
              en: ['208 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['208 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['208 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 7.6,
            badges: {
              en: ['Class-Leading Chassis', 'Relaxed Auto Tuning'],
              de: ['Klassenbestes Fahrwerk', 'Komfort-Abstimmung'],
              ru: ['Эталонное шасси', 'Комфортная настройка']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 4.2,
            badges: {
              en: ['Thirsty (10.2 L/100km)', '223 g/km CO2'],
              de: ['Durstig (10,2 L/100km)', '223 g/km CO2'],
              ru: ['Прожорливый (10,2 л/100 км)', '223 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.5,
            badges: {
              en: ['High 223 g CO2 Tax • Euro 4', 'Moderate Midsize Insurance'],
              de: ['Hohe 223-g-CO2-Steuer', 'Mittlere Versicherung'],
              ru: ['Высокий налог за CO2 (223 г)', 'Средняя страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~70,000 km · 5 yrs', action: { en: 'Aisin TF-80SC 6-Speed Automatic ATF Flush', de: 'Aisin 6-Gang-Wandlerautomatik ATF-Ölwechsel', ru: 'Замена масла ATF в 6-ст. автомате Aisin' }, cost: '€240–380' }
              ],
              critical: [
                { when: '150–220k km · 10–14 yrs', action: { en: 'Rear Control-Blade Bushings & Valve-Body Solenoid Wear (If ATF Neglected)', de: 'Hinterachs-Buchsen & Wandler-Ventilkörper (bei vernachlässigtem ATF)', ru: 'Задние сайлентблоки и гидроблок АКПП (при старом ATF)' }, cost: '€350–850', risk: { en: 'Flaring shifts & uneven rear tyre wear', de: 'Schaltstöße & einseitiger Reifenverschleiß', ru: 'Пинки при переключениях и износ шин' }, damage: '€1,600–2,400' }
              ]
            },
            score: 8.2,
            badges: {
              en: ['Low Unscheduled Repair Risk', 'Cheap Parts + Routine 6-AT Oil'],
              de: ['Kaum teure Überraschungen', 'Günstige Teile + ATF-Wechsel'],
              ru: ['Низкий риск поломок', 'Простые запчасти + масло в АКПП']
            }
          },
          depreciationResale: {
            score: 7.4,
            badges: {
              en: ['Rare Reliable Auto', 'Pre-2010 Age Factor'],
              de: ['Seltene Top-Automatik', 'Alter vor 2010'],
              ru: ['Редкий надёжный АКПП', 'Возраст до 2010 года']
            }
          }
        }
      },
      {
        id: '2.5t',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.5T 5-Cyl Turbo', de: '2.5T 5-Zyl. Turbo', ru: '2.5T 5-цил. Турбо' },
          forcedInduction: '@turbo', injection: '@port', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,800 kg', sprint0100: '7.5 s', topSpeed: '245 km/h', peakTorque: '320 Nm @ 1,500',
          passingPunch: { en: 'Effortless 5-Cyl Surge', de: 'Satter 5-Zylinder-Schub', ru: 'Мощная тяга 5 цилиндров' },
          realWorldFuel: '9.8–11.5 L/100 km', tankRange: '70 L · ~650 km', euroNorm: 'Euro 4',
          taxInsurance: '@tierHigh', timingDrive: '@belt', serviceWear: '@tierModHigh'
        },
        dossierGroup: 'petrol-6mt',
        buyerFitGroup: 'turbo-petrol',
        buyerFitOverrides: {
          ideal: [
            'mondeo25tEnthusiast',
            'mondeoCabinBoot',
            'mondeoSharpChassis',
            'globalPetrolCityZones'
          ],
          skip: ['mondeoLongParking', 'mondeo25tCosts', 'mondeoInteriorAge', 'mondeoRearArchCheck']
        },
        isDefault: false,
        fuelType: 'petrol',
        hp: 220,
        shortTitle: 'MONDEO 2.5T',
        fullName: '2012 Ford Mondeo 2.5T',
        engineBadge: '2.5L 5-Cyl Turbo • 220 HP',
        engineSubLabel: {
          en: 'HUBA 2.5L Volvo I5 Turbo (03/2007–11/2010) • 6-MT • 320 Nm',
          de: 'HUBA 2.5L Volvo R5-Turbo (03/2007–11/2010) • 6-Gang • 320 Nm',
          ru: 'HUBA 2.5L Volvo R5 Турбо (03/2007–11/2010) • 6-ст. МКПП • 320 Н·м'
        },
        rarityLabel: {
          en: '5-CYL SLEEPER',
          de: '5-ZYLINDER-SLEEPER',
          ru: '5-ЦИЛИНДРОВЫЙ СЛИПЕР'
        },
        originalMsrp: {
          en: '€32,750 New',
          de: '32.750 € Neu',
          ru: '€32 750 новый'
        },
        estUsedPrice: '€8,200',
        perkLabel: {
          en: '✦ Iconic Volvo 5-Cyl Sound • 245 km/h Sleeper • 1,800 kg Towing',
          de: '✦ Legendärer Volvo 5-Zylinder-Sound • 245 km/h • 1.800 kg Anhängelast',
          ru: '✦ Культовый звук 5 цилиндров Volvo • 245 км/ч • Прицеп 1 800 кг'
        },
        remarkablePositives: {
          en: [
            'ICONIC 5-CYLINDER SOUND',
            '7.5S 0–100 • 245 KM/H',
            'DURABLE ENGINE FROM VOLVO',
            'HUGE 550L SEDAN BOOT',
            '1,800 KG BRAKED TOWING'
          ],
          de: [
            'LEGENDÄRER 5-ZYLINDER-SOUND',
            '7,5S 0–100 • 245 KM/H',
            'ROBUSTER MOTOR VON VOLVO',
            'RIESIGER 550L KOFFERRAUM',
            '1.800 KG ANHÄNGELAST'
          ],
          ru: [
            'КУЛЬТОВЫЙ ЗВУК 5 ЦИЛИНДРОВ',
            '7,5 С ДО 100 • МАКС. 245 КМ/Ч',
            'НАДЁЖНЫЙ ДВИГАТЕЛЬ ОТ VOLVO',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'БУКСИРОВКА ДО 1 800 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 10.8L/100KM',
            'HIGH CO2 TAX (222G)',
            'PRE-FACELIFT ONLY (TO 2010)',
            'PCV OIL TRAP & HOSE WEAR'
          ],
          de: [
            'HOHER VERBRAUCH (10,8L/100KM)',
            'HOHE CO2-STEUER (222G)',
            'NUR VORFACELIFT (BIS 11/2010)',
            'KURBELGEHÄUSE-ENTLÜFTUNG (PCV)'
          ],
          ru: [
            'БОЛЬШОЙ РАСХОД 10,8 Л/100 КМ',
            'ВЫСОКИЙ НАЛОГ (222 Г CO2)',
            'ТОЛЬКО ДОРЕСТАЙЛ (ДО 11/2010)',
            'ВКГ (МАСЛОУЛОВИТЕЛЬ) И ШЛАНГИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.0,
          spacePracticality: 8.7,
          performanceDynamics: 8.0,
          runningCostsTco: 6.4
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.5L Duratec ST Inline-5 Turbo (HUBA · Volvo T5)', de: '2.5L Duratec ST Reihenfünfzylinder Turbo (HUBA · Volvo T5)', ru: '2.5L Duratec ST рядный 5-цил. турбо (Volvo T5)' } },
                  { k: 'displacement', v: '2,521 cc' },
                  { k: 'cylinders', v: { en: '5 Cylinders · 20V DOHC', de: '5 Zylinder · 20V DOHC', ru: '5 цилиндров · 20V DOHC' } },
                  { k: 'output', v: { en: '162 kW (220 HP)', de: '162 kW (220 PS)', ru: '162 кВт (220 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Belt', de: 'Benzin · Zahnriemen', ru: 'Бензин · Ремень ГРМ' } }
                ],
                note: { en: 'Charismatic Volvo-built 5-cylinder turbo with port injection — strong & melodic when left stock.', de: 'Charakterstarker Volvo-Fünfzylinder mit Saugrohreinspritzung — im Serienzustand sehr standfest.', ru: 'Харизматичный 5-цилиндровый мотор Volvo с распределённым впрыском — очень крепок в стоке.' }
              },
              forcedInduction: '@turboPetrol', injection: '@portInj'
            },
            score: 8.1,
            badges: {
              en: ['Volvo 5-Cyl Block', 'Check PCV Oil Trap & Timing Belt'],
              de: ['Volvo 5-Zylinder-Block', 'KGE-Ölfalle & Zahnriemen prüfen'],
              ru: ['Блок Volvo 5 цилиндров', 'Проверить мембрану ВКГ и ГРМ']
            },
            dossier: {
              en: {
                headline: 'Over-Engineered Volvo B5254T3 5-Cylinder Turbo with Cult Following',
                strengths: [
                  'Broad torque plateau from 1,500–4,800 rpm delivers effortless Autobahn acceleration.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'A torn PCV membrane causes a loud whistling noise and crankcase pressure that can blow out cam/crank seals.',
                  'Belt + water pump due every 10 years / 160,000 km; aging rubber boost hoses can split.'
                ],
                beforeYouBuy: [
                  'Pull the oil dipstick slightly up while idling— a loud whistling whine means the oil-trap breather diaphragm is torn.',
                  'Check the timing belt change receipt (due every 10 years or 160,000–200,000 km on this Volvo 5-cylinder).',
                  'Floor the throttle gently in 3rd gear to make sure acceleration is smooth with no fuel-pressure stumbles.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 0W-30/5W-30 Volvo-spec oil & check coolant bottle + oil-trap breather diaphragm',
                    cost: '€170–270',
                    ifIgnored: 'Overheated aged oil splits crankcase rubber diaphragm early, whistling & leaking oil seals',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change gearbox oil, plugs & inspect 7–8 yr aging rubber timing belt + turbo hoses (belt max 8–10 yrs!)',
                    cost: '€420–680',
                    ifIgnored: 'Time-aged rubber timing belt snaps from age even on low-km collector cars',
                    damageCost: '€2,800–4,200'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace oil filter housing breather box & rubber hoses',
                    cost: '€280–480',
                    ifIgnored: 'High crankcase pressure blows out camshaft oil seals (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace timing belt, water pump & auxiliary belts (or every 8–10 yrs max, rubber ages)',
                    cost: '€600–950',
                    ifIgnored: 'Snapped timing belt wrecks all 20 valves',
                    damageCost: '€2,800–4,200'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace clutch, flywheel & fuel rail pressure sensor',
                    cost: '€950–1,450',
                    ifIgnored: 'Slipping clutch & stuttering throttle under 320 Nm boost (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Inspect cooling hoses & turbocharger oil pipes closely',
                    cost: '€300–550',
                    ifIgnored: 'Overheating can crack the thin 5-cylinder walls (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,200–4,800'
                  }
                ]
              },
              de: {
                headline: 'Überdimensionierter Volvo-5-Zylinder-Turbo mit Kultstatus',
                strengths: [
                  'Kraftvolles Drehmomentplateau von 1.500 bis 4.800/min.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Defekte Membran führt zu Pfeifen und undichten Simmerringen.',
                  'Zahnriemen alle 10 Jahre/160.000 km; poröse Turboschläuche prüfen.'
                ],
                beforeYouBuy: [
                  'Im Leerlauf kurz den Ölmessstab ziehen— ein lautes Pfeifen zeigt eine gerissene Kurbelgehäuse-Membran am Ölfilter.',
                  'Zahnriemen-Wechselbeleg beim 5-Zylinder prüfen (fällig spätestens nach 10 Jahren oder 160.000–200.000 km).',
                  'Im 3. Gang sauber durchbeschleunigen— kein Ruckeln durch alten Benzindrucksensor.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 0W-30/5W-30 nach Volvo-Norm wechseln & Ölfalle/Kurbelgehäuse-Membran prüfen',
                    cost: '170–270 €',
                    ifIgnored: 'Altes heißes Öl zerreißt die Gummimembran der Entlüftung & drückt Dichtringe raus',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebeöl & Kerzen wechseln sowie Zahnriemen + Schläuche auf 7–8 J. Alterung prüfen (Riemen max 8–10 J.!)',
                    cost: '420–680 €',
                    ifIgnored: 'Gealterter Gummizahnriemen reißt auch bei wenig Kilometern mit 5-Zylinder-Motorschaden',
                    damageCost: '2.800–4.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ölfalle-Gehäuse der Motorentlüftung komplett tauschen',
                    cost: '280–480 €',
                    ifIgnored: 'Überdruck drückt teure Nockenwellen-Dichtringe heraus (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zahnriemen, Wasserpumpe & Antriebsriemen ersetzen (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '600–950 €',
                    ifIgnored: 'Gerissener Riemen zerstört alle 20 Ventile im 5-Zylinder',
                    damageCost: '2.800–4.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Kupplung, Schwungrad & Kraftstoffdrucksensor erneuern',
                    cost: '950–1.450 €',
                    ifIgnored: 'Rutschende Kupplung & Aussetzer unter 320 Nm Last (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Kühlerschläuche & Turbo-Leitungen sorgfältig prüfen',
                    cost: '300–550 €',
                    ifIgnored: 'Überhitzung kann zu Rissen in den dünnen Zylinderwänden führen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.200–4.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Ресурсный 5-цилиндровый турбомотор Volvo с культовым статусом',
                strengths: [
                  'Ровная полка момента с 1 500 до 4 800 об/мин.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'При разрыве появляется свист и давит сальники двигателя.',
                  'Замена ремня раз в 10 лет / 160 тыс. км; резиновые патрубки наддува со временем трескаются.'
                ],
                beforeYouBuy: [
                  'На холостом ходу слегка вытянуть щуп масла— громкий свист означает порванную мембрану маслоуловителя.',
                  'Проверить замену ремня двигателя (на этом 5-цилиндровом моторе Volvo он служит 10 лет или 160–200 тыс. км).',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год масло 0W-30/5W-30 (допуск Volvo) и проверка мембраны маслоотделителя',
                    cost: '€170–270',
                    ifIgnored: 'Горячее старое масло рвёт резиновую мембрану вентиляции и выдавливает сальники',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло КПП, свечи и оценить возраст ремня ГРМ и шлангов (ремень не дольше 8–10 лет!)',
                    cost: '€420–680',
                    ifIgnored: 'Резина ремня ГРМ стареет за 8–10 лет даже без пробега и ломает клапаны 5 цилиндров',
                    damageCost: '€2 800–4 200'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить корпус вентиляции картера и масляного фильтра',
                    cost: '€280–480',
                    ifIgnored: 'Лишнее давление выдавливает сальники распредвалов (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить ремень двигателя, помпу и вспомогательные ремни (или раз в 8–10 лет, резина стареет)',
                    cost: '€600–950',
                    ifIgnored: 'Обрыв ремня ломает все 20 клапанов пяти цилиндров',
                    damageCost: '€2 800–4 200'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить сцепление, маховик и датчик давления топлива',
                    cost: '€950–1 450',
                    ifIgnored: 'Пробуксовка сцепления и сбои подачи топлива (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Проверить все шланги охлаждения и трубки турбины',
                    cost: '€300–550',
                    ifIgnored: 'Перегрев опасен трещинами тонких стенок цилиндров (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€3 200–4 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.7,
            badges: {
              en: ['Heavy-Duty M66 6-Speed', '320 Nm Clutch & DMF Load'],
              de: ['Kräftiges M66 6-Gang', 'Kupplung/ZMS bei 320 Nm'],
              ru: ['Усиленная 6-МКПП M66', 'Сцепление под 320 Н·м']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.8,
            badges: {
              en: ['575 kg Payload', '1,800 kg Braked Tow'],
              de: ['575 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 575 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.9,
            badges: {
              en: ['0–100 km/h: 7.5 s', '245 km/h Top Speed'],
              de: ['0–100 km/h: 7,5 s', '245 km/h Spitze'],
              ru: ['0–100 км/ч: 7,5 с', 'Макс. 245 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.9,
            badges: {
              en: ['320 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['320 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['320 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.3,
            badges: {
              en: ['Class-Leading Chassis', 'Effortless 5-Cyl Torque'],
              de: ['Klassenbestes Fahrwerk', 'Satter 5-Zylinder-Schub'],
              ru: ['Эталонное шасси', 'Мощная тяга 5 цилиндров']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 3.7,
            badges: {
              en: ['Thirsty (10.8 L/100km)', '222 g/km CO2'],
              de: ['Durstig (10,8 L/100km)', '222 g/km CO2'],
              ru: ['Прожорливый (10,8 л/100 км)', '222 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.0,
            badges: {
              en: ['High 2.5L CO2 Tax • Euro 4', 'Pricey 220 HP Sport Insurance'],
              de: ['Hohe 2.5L-Steuer • Euro 4', 'Teure 220-PS-Versicherung'],
              ru: ['Высокий налог 2,5 л • Euro 4', 'Дорогая страховка за 220 л.с.']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '200k km · 10 yrs', action: { en: 'Volvo 5-Cyl Timing Belt, Water Pump & PCV Oil-Trap Check', de: 'Zahnriemen, Wasserpumpe & Kurbelgehäuse-Entlüftung (PCV)', ru: 'Ремень ГРМ, помпа и проверка вентиляции картера (PCV)' }, cost: '€650–950' }
              ],
              critical: [
                { when: '140–200k km · 10–14 yrs', action: { en: 'PCV Diaphragm Membrane & Dual-Mass Flywheel (DMF)', de: 'PCV-Membran (Ölfiltergehäuse) & Zweimassenschwungrad (ZMS)', ru: 'Мембрана маслоотделителя (PCV) и двухмассовый маховик' }, cost: '€450–1,600', risk: { en: 'Blown camshaft seals (oil leaks) or heavy DMF vibration', de: 'Herausgedrückte Simmerringe (Ölverlust) oder ZMS-Rasseln', ru: 'Выдавливание сальников (течь масла) или стук ДММ' }, damage: '€1,800–2,800' }
              ]
            },
            score: 4.3,
            badges: {
              en: ['Costly Volvo 5-Cyl Parts', 'PCV, Timing Belt & Heavy Tyres'],
              de: ['Teurere Volvo-Motorteile', 'Ölfalle, Zahnriemen & Reifen'],
              ru: ['Дорогие запчасти Volvo I5', 'Затраты на ВКГ, ГРМ и шины']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['Enthusiast Collector Value', 'Rare 5-Cyl Sedan'],
              de: ['Liebhaber-Wertstabilität', 'Seltener 5-Zylinder'],
              ru: ['Ценится фанатами', 'Редкий 5-цил. седан']
            }
          }
        }
      },
      {
        id: '1.6-tdci',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.6L TDCi Diesel', de: '1.6L TDCi Diesel', ru: '1.6L TDCi Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,200 kg', sprint0100: '11.9 s', topSpeed: '190 km/h', peakTorque: '270 Nm @ 1,750',
          passingPunch: { en: 'Frugal Cruiser', de: 'Sparsamer Gleiter', ru: 'Экономичный круизер' },
          realWorldFuel: '4.9–5.6 L/100 km', tankRange: '70 L · ~1,320 km', euroNorm: 'Euro 5 (DPF)',
          taxInsurance: '@tierLowMod', timingDrive: '@belt', serviceWear: '@tierMod'
        },
        dossierGroup: 'diesel-6mt',
        buyerFitGroup: 'diesel',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'mondeoBaseUnderpowered',
            'mondeoLongParking',
            'mondeoInteriorAge'
          ]
        },
        isDefault: false,
        fuelType: 'diesel',
        hp: 115,
        shortTitle: 'MONDEO 1.6 TDCi',
        fullName: '2012 Ford Mondeo 1.6 TDCi',
        engineBadge: '1.6L TDCi Diesel • 115 HP',
        engineSubLabel: {
          en: 'T1BA 1.6L 8v Turbo-Diesel (12/2010–08/2014) • 6-MT • 270 Nm',
          de: 'T1BA 1.6L 8V Turbodiesel (12/2010–08/2014) • 6-Gang • 270 Nm',
          ru: 'T1BA 1.6L 8v Турбодизель (12/2010–08/2014) • 6-ст. МКПП • 270 Н·м'
        },
        rarityLabel: {
          en: 'ECO COMMUTER',
          de: 'SPAR-DIESEL',
          ru: 'ЭКО-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€27,250 New',
          de: '27.250 € Neu',
          ru: '€27 250 новый'
        },
        estUsedPrice: '€6,300',
        perkLabel: {
          en: '✦ Efficient 5.4 L/100km • 109–114g CO2 • Huge 550L Sedan Boot',
          de: '✦ Sparsam (5,4 L/100km) • 109–114g CO2 • Riesiger 550L Kofferraum',
          ru: '✦ Расход 5,4 л/100 км • 109–114 г CO2 • Огромный багажник 550 л'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 5.4 L/100KM',
            'LOW 1.6L DIESEL TAX',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING'
          ],
          de: [
            'SPARSAM: 5,4 L/100KM',
            'GÜNSTIGE 1.6L DIESEL-STEUER',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG'
          ],
          ru: [
            'РАСХОД 5,4 Л/100 КМ',
            'НИЗКИЙ НАЛОГ НА 1.6 ДИЗЕЛЬ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 11.9S 0–100 ACCEL',
            'CLOGGED DPF ON SHORT TRIPS',
            'INJECTOR SEAL & TURBO WEAR',
            'NARROW BOOT OPENING (4-DOOR SEDAN)'
          ],
          de: [
            'TRÄGE 11,9S 0–100 BESCHL.',
            'DPF-VERSTOPFUNG IM KURZSTRECKEN-BETRIEB',
            'INJEKTORDICHTUNGEN & TURBO-VERSCHLEISS',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)'
          ],
          ru: [
            'МЕДЛЕННЫЙ РАЗГОН 11,9 С ДО 100',
            'САЖЕВЫЙ ФИЛЬТР НЕ ЛЮБИТ ГОРОД',
            'РИСК ПО ФОРСУНКАМ И ТУРБИНЕ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.7,
          comfortCabin: 8.0,
          spacePracticality: 8.4,
          performanceDynamics: 7.2,
          runningCostsTco: 8.1
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L TDCi 8V Inline-4 Turbodiesel (T1BA · PSA DV6C)', de: '1.6L TDCi 8V Reihenvierzylinder Turbodiesel (T1BA · PSA DV6C)', ru: '1.6L TDCi 8V рядный 4-цил. турбодизель (PSA DV6C)' } },
                  { k: 'displacement', v: '1,560 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 8V SOHC', de: '4 Zylinder · 8V SOHC', ru: '4 цилиндра · 8V SOHC' } },
                  { k: 'output', v: { en: '85 kW (115 HP)', de: '85 kW (115 PS)', ru: '85 кВт (115 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Belt', de: 'Diesel · Zahnriemen', ru: 'Дизель · Ремень ГРМ' } }
                ],
                note: { en: 'Improved 8-valve PSA 1.6 diesel — far more reliable than older 16V versions with 1,300+ km tank range.', de: 'Überarbeiteter 8-Ventil-PSA-Diesel — deutlich haltbarer als frühe 16V-Versionen.', ru: 'Доработанный 8-клапанный дизель PSA — надёжнее старых 16V и невероятно экономичен.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 5.9,
            badges: {
              en: ['Updated 8v PSA DV6', '15k km Oil Rule'],
              de: ['Überarbeiteter 8V DV6', '15.000 km Öl-Regel'],
              ru: ['Обновлённый 8v PSA DV6', 'Масло каждые 15 тыс. км']
            },
            dossier: {
              en: {
                headline: 'Updated 8-Valve PSA 1.6 TDCi: Frugal Cruiser if Oil & DPF Are Respected',
                strengths: [
                  'Pulls cleanly in town and cruises quietly at 120 km/h.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Leaking injector seals ("black death") contaminate engine oil and can starve the turbocharger if ignored.',
                  'Strictly needs regular highway runs; short city commutes quickly clog the particulate filter.'
                ],
                beforeYouBuy: [
                  'Look around the 4 fuel injectors on top of the engine for black crusty tar or a puffing noise.',
                  'Check receipts for fresh engine oil every 10,000–15,000 km— stretched oil changes choke turbo bearings.',
                  'Verify the car drove outside city traffic often enough to keep its diesel soot filter clear.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict 10–15,000 km / 1 yr low-ash oil, clean fuel filter & regular highway runs for soot filter',
                    cost: '€160–260',
                    ifIgnored: 'Aged oil cokes tiny turbo oil feed screen & burns turbocharger prematurely',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Check copper injector washers for soot blow-by, change gearbox oil & check 6–7 yr aging timing/aux belts',
                    cost: '€280–460',
                    ifIgnored: 'Hardened copper injector seals fill oil with black tar & old rubber belts fray',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace copper injector seals & clean turbo oil strainer',
                    cost: '€250–450',
                    ifIgnored: 'Black carbon blocks turbo oil line & kills turbocharger (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace timing belt, water pump & fresh coolant (or every 8–10 yrs max, rubber ages)',
                    cost: '€500–780',
                    ifIgnored: 'Snapped timing belt destroys engine top half',
                    damageCost: '€2,200–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace clutch, dual-mass flywheel & clean exhaust valve',
                    cost: '€850–1,300',
                    ifIgnored: 'Heavy clutch vibration & exhaust limp mode (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Deep-clean diesel soot filter & refill filter fluid pouch',
                    cost: '€400–750',
                    ifIgnored: 'Blocked exhaust & engine refuses to rev or start (components & fluids also degrade over years)',
                    damageCost: '€1,500–2,300'
                  }
                ]
              },
              de: {
                headline: 'Überarbeiteter 8V PSA 1.6 TDCi: Sparsamer Gleiter bei guter Ölpflege',
                strengths: [
                  'Ausreichend Durchzug für ruhiges Langstrecken-Pendeln.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Undichte Kupferringe verrußen das Öl und können den Turbolader schädigen.',
                  'Benötigt regelmäßige Autobahnetappen zur Regeneration.'
                ],
                beforeYouBuy: [
                  'Um alle 4 Einspritzdüsen nach schwarzer Teerkruste oder zischendem Abgasgeräusch schauen.',
                  'Ölwechsel alle 10.000–15.000 km prüfen— zu langes Öl verstopft das Ölsieb zum Turbolader.',
                  'Erfragen, ob das Auto regelmäßig über Land gefahren wurde, damit der Partikelfilter frei bleibt.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10–15 Tkm / 1 J. Low-Ash-Öl, Dieselfilter & regelmäßige Überlandfahrten für DPF',
                    cost: '160–260 €',
                    ifIgnored: 'Altöl verstopft das feine Turbo-Ölsieb & führt früh zum Turboschaden',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Injektor-Kupferdichtungen auf Blasen prüfen, Getriebeöl wechseln & 6–7-J.-Riemen kontrollieren',
                    cost: '280–460 €',
                    ifIgnored: 'Undichte Dichtringe verrußen das Motoröl zu Schlamm; gealterte Riemen fasern aus',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Kupferdichtringe der Düsen tauschen & Turbo-Ölsieb reinigen',
                    cost: '250–450 €',
                    ifIgnored: 'Ölkohle verstopft Leitung & ruiniert Turbolader sofort (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zahnriemen, Wasserpumpe & Kühlmittel erneuern (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '500–780 €',
                    ifIgnored: 'Gerissener Riemen verursacht schweren Motorschaden',
                    damageCost: '2.200–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Kupplung, Zweimassenschwungrad & Abgasventil erneuern',
                    cost: '850–1.300 €',
                    ifIgnored: 'Starkes Ruckeln beim Anfahren & Motor-Notlauf (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Partikelfilter spülen & Additiv-Beutel auffüllen',
                    cost: '400–750 €',
                    ifIgnored: 'Verstopfter Auspuff verhindert Leistung und Start',
                    damageCost: '1.500–2.300 €'
                  }
                ]
              },
              ru: {
                headline: 'Обновлённый 8-клапанный PSA 1.6 TDCi: экономичный, но требует ухода',
                strengths: [
                  'Спокойно держит крейсерскую скорость на трассе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Прогар шайб закоксовывает масло и убивает турбину при затянутых ТО.',
                  'Противопоказаны короткие городские поездки без выезда на трассу.'
                ],
                beforeYouBuy: [
                  'Проверить колодцы всех 4 форсунок сверху на чёрный нагар и цокающий звук газов.',
                  'Искать подтверждение замены масла каждые 10–15 тыс. км— старое масло забивает сетку подачи на турбину.',
                  'Убедиться, что машина бывала на трассе для очистки сажевого фильтра.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Строго менять малозольное масло раз в 10–15 тыс. км, топливный фильтр и выезжать на трассу',
                    cost: '€160–260',
                    ifIgnored: 'Старое масло забивает сеточку маслоподачи и быстро выводит турбину из строя',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Проверить шайбы форсунок, сменить масло в КПП и осмотреть стареющие к 6–7 годам ремни',
                    cost: '€280–460',
                    ifIgnored: 'Пропуск газов через кольца форсунок превращает масло в гудрон, а ремни стареют',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить шайбы форсунок и почистить сетку масла турбины',
                    cost: '€250–450',
                    ifIgnored: 'Засор масляного канала мгновенно выводит турбину из строя (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить ремень двигателя, помпу и антифриз (или раз в 8–10 лет, резина стареет)',
                    cost: '€500–780',
                    ifIgnored: 'Обрыв ремня с тяжёлой поломкой головки блока',
                    damageCost: '€2 200–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить сцепление с маховиком и почистить клапан газов',
                    cost: '€850–1 300',
                    ifIgnored: 'Сильная вибрация и переход в аварийный режим (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Промыть сажевый фильтр и заправить бачок присадки',
                    cost: '€400–750',
                    ifIgnored: 'Полная закупорка выхлопа и потеря тяги',
                    damageCost: '€1 500–2 300'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.5,
            badges: {
              en: ['6-Speed Manual', 'Watch 270 Nm DMF'],
              de: ['6-Gang-Schaltgetriebe', 'ZMS bei 270 Nm beachten'],
              ru: ['6-ступ. МКПП', 'Контроль маховика']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['590 kg Payload', '1,300 kg Braked Tow'],
              de: ['590 kg Zuladung', '1.300 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.4,
            badges: {
              en: ['0–100 km/h: 11.9 s', '190 km/h Top Speed'],
              de: ['0–100 km/h: 11,9 s', '190 km/h Spitze'],
              ru: ['0–100 км/ч: 11,9 с', 'Макс. 190 км/ч']
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
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Light Front Axle'],
              de: ['Klassenbestes Fahrwerk', 'Leichte Vorderachse'],
              ru: ['Эталонное шасси', 'Лёгкий передок']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 9.3,
            badges: {
              en: ['Efficient (5.4 L/100km)', '109–114 g/km CO2'],
              de: ['Sparsam (5,4 L/100km)', '109–114 g/km CO2'],
              ru: ['Экономичный (5,4 л/100 км)', '109–114 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Lowest Mondeo Diesel Tax • Euro 5', 'Moderate Commuter Insurance'],
              de: ['Niedrigste Mondeo-Dieselsteuer', 'Faire Pendler-Versicherung'],
              ru: ['Низкий дизельный налог • Euro 5', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '180k km · 10 yrs', action: { en: 'Timing Belt, Water Pump & Diesel Fuel Filter', de: 'Zahnriemen, Wasserpumpe & Dieselfilter wechseln', ru: 'Ремень ГРМ, помпа и топливный фильтр' }, cost: '€520–800' }
              ],
              critical: [
                { when: '140–200k km · 9–13 yrs', action: { en: 'Injector Copper Seals & DPF Soot Cleaning', de: 'Injektor-Kupferdichtungen & DPF-Reinigung', ru: 'Медные шайбы форсунок и чистка DPF' }, cost: '€350–700', risk: { en: 'Black carbon tar around injectors & oil sludge', de: 'Verkokung um die Injektoren & Ölschlamm-Risiko', ru: 'Прорыв газов и закоксовка масла' }, damage: '€1,600–2,500' }
              ]
            },
            score: 7.3,
            badges: {
              en: ['Cheap Filters & Chassis Parts', 'Budget Piezo Injectors & DPF'],
              de: ['Günstige Verschleißteile', 'Injektoren & DPF einplanen'],
              ru: ['Дешёвые фильтры и подвеска', 'Затраты на форсунки и DPF']
            }
          },
          depreciationResale: {
            score: 7.4,
            badges: {
              en: ['Low Running Costs', 'Budget Commuter Pick'],
              de: ['Geringer Unterhalt', 'Beliebter Pendler-Diesel'],
              ru: ['Низкие затраты', 'Популярный эконом-дизель']
            }
          }
        }
      },
      {
        id: '1.8-tdci',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.8L TDCi Diesel', de: '1.8L TDCi Diesel', ru: '1.8L TDCi Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,600 kg', sprint0100: '10.5 s', topSpeed: '200 km/h', peakTorque: '320 Nm @ 1,800',
          passingPunch: { en: 'Old-School Turbo Lag', de: 'Spürbares Turboloch', ru: 'Заметная турбояма' },
          realWorldFuel: '5.8–6.5 L/100 km', tankRange: '70 L · ~1,130 km', euroNorm: 'Euro 4 (✕ No DPF)',
          taxInsurance: '@tierMod', timingDrive: '@wetBelt', serviceWear: '@tierMod'
        },
        dossierGroup: 'diesel-6mt',
        buyerFitGroup: 'diesel',
        isDefault: false,
        fuelType: 'diesel',
        hp: 100,
        shortTitle: 'MONDEO 1.8 TDCi',
        fullName: '2012 Ford Mondeo 1.8 TDCi',
        engineBadge: '1.8L TDCi • 100 / 125 HP',
        engineSubLabel: {
          en: 'FFBA/QYBA 1.8L Ford Lynx Diesel (03/2007–09/2007) • 5/6-MT • 280–320 Nm',
          de: 'FFBA/QYBA 1.8L Ford-Lynx-Diesel (03/2007–09/2007) • 5/6-Gang • 280–320 Nm',
          ru: 'FFBA/QYBA 1.8L Дизель Ford Lynx (03/2007–09/2007) • 5/6-ст. МКПП • 280–320 Н·м'
        },
        rarityLabel: {
          en: 'OLD-SCHOOL DIESEL',
          de: 'KLASSIK-DIESEL',
          ru: 'СТАРАЯ ШКОЛА'
        },
        originalMsrp: {
          en: '€26,900 New',
          de: '26.900 € Neu',
          ru: '€26 900 новый'
        },
        estUsedPrice: '€4,900',
        perkLabel: {
          en: '✦ 100 or 125 HP • Often No Factory DPF (2007) • 6.3 L/100km Economy',
          de: '✦ 100 oder 125 PS • Oft ohne DPF (2007) • 6,3 L/100km Verbrauch',
          ru: '✦ 100 или 125 л.с. • Часто без сажевого фильтра (2007) • 6,3 л/100 км'
        },
        remarkablePositives: {
          en: [
            'TOUGH CAST-IRON BLOCK',
            '6.3 L/100KM ECONOMY',
            'OFTEN NO DPF CLOGGING (2007)',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT'
          ],
          de: [
            'ROBUSTER GUSS-MOTORBLOCK',
            '6,3 L/100KM VERBRAUCH',
            'OFT OHNE DPF-PROBLEME (2007)',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT'
          ],
          ru: [
            'КРЕПКИЙ ЧУГУННЫЙ БЛОК',
            'РАСХОД 6,3 Л/100 КМ',
            'ЧАСТО БЕЗ САЖЕВОГО (2007)',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ'
          ]
        },
        notableNegatives: {
          en: [
            'NOISIER & ROUGHER DIESEL',
            'WET TIMING BELT RISK',
            'PRE-FACELIFT ONLY (2007)',
            'NARROW BOOT OPENING (4-DOOR SEDAN)'
          ],
          de: [
            'RAUER & LAUTER DIESEL-LAUF',
            'NASSER ZAHNRIEMEN (ÖLBAD)',
            'NUR FRÜHES BAUJAHR (2007)',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)'
          ],
          ru: [
            'ШУМНЫЙ И ЖЁСТКИЙ В РАБОТЕ',
            'РИСК МОКРОГО РЕМНЯ В МАСЛЕ',
            'ТОЛЬКО РАННИЙ 2007 ГОД',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.7,
          comfortCabin: 7.9,
          spacePracticality: 8.5,
          performanceDynamics: 7.3,
          runningCostsTco: 7.5
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.8L Lynx TDCi Inline-4 Turbodiesel (QYBA)', de: '1.8L Lynx TDCi Reihenvierzylinder Turbodiesel (QYBA)', ru: '1.8L Lynx TDCi рядный 4-цил. турбодизель (QYBA)' } },
                  { k: 'displacement', v: '1,753 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 8V SOHC (Cast-Iron Block)', de: '4 Zylinder · 8V SOHC (Graugussblock)', ru: '4 цилиндра · 8V SOHC (чугунный блок)' } },
                  { k: 'output', v: { en: '74–92 kW (100 / 125 HP)', de: '74–92 kW (100 / 125 PS)', ru: '74–92 кВт (100 / 125 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Upper Dry Belt + Lower Wet Belt', de: 'Diesel · Trocken- + Ölbad-Zahnriemen', ru: 'Дизель · Сухой + нижний ремень в масле' } }
                ],
                note: { en: 'Tough iron block with NO factory DPF, but post-2007 units use a lower wet timing belt that must be verified.', de: 'Robuster Gussblock ohne DPF, aber ab 2007 mit unterem Ölbad-Zahnriemen — Wechselhistorie prüfen.', ru: 'Крепкий чугунный блок без сажевого фильтра, но важно проверить замену нижнего ремня в масле.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 7.1,
            badges: {
              en: ['Cast-Iron Ford Block', 'Check Wet Belt Service'],
              de: ['Robuster Gussblock', 'Ölbad-Riemen prüfen'],
              ru: ['Чугунный блок Ford', 'Проверить мокрый ремень']
            },
            dossier: {
              en: {
                headline: 'Ford Lynx 1.8 TDCi (100 HP): Tough Cast-Iron Block with One Big Catch',
                strengths: [
                  'Built on Ford’s own cast-iron Lynx block, often sold in 2007 without a DPF.',
                  'Punchy torque and simple manual gearboxes.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Early 2007 units use a timing chain, while later/updated setups use a wet belt running in engine oil to drive the fuel pump—if it snaps, the engine is ruined.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Ask specifically whether the hidden lower oil-soaked timing belt (2007+ models) has been replaced— not just the top belt.',
                  'Inspect thick black air pipes in front of the engine for oil leaks and splits.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual fresh Ford 5W-30 oil & fuel filter — clean oil protects the internal oil-bathed lower wet belt',
                    cost: '€160–260',
                    ifIgnored: 'Diesel/soot in aged oil swells and softens the rubber wet timing belt early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'red',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Plan upper timing belt & lower oil-bath wet belt check/swap by 7–9 yrs (even below 140k km!)',
                    cost: '€750–1,250',
                    ifIgnored: 'Age-degraded rubber wet belt sheds teeth in oil & snaps catastrophically',
                    damageCost: '€2,800–4,500'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean sticky exhaust valve & replace split turbo hose',
                    cost: '€200–380',
                    ifIgnored: 'Black exhaust smoke, bucking & sudden power drop (rubber/plastic & seals also harden with age)',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace BOTH upper belt AND lower oil-bath timing belt (or every 8–10 yrs max, rubber ages)',
                    cost: '€750–1,150',
                    ifIgnored: 'Broken lower belt ruins timing and wrecks engine',
                    damageCost: '€2,600–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '160,000–200,000 km • 11–13 yrs',
                    action: 'Replace hard-worked clutch kit & dual-mass flywheel',
                    cost: '€900–1,350',
                    ifIgnored: 'Metal dust jams starter motor & leaves car stranded (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Refurbish diesel fuel injectors & replace glow plugs',
                    cost: '€650–1,100',
                    ifIgnored: 'Won’t start in winter & loud engine knocking (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,600'
                  }
                ]
              },
              de: {
                headline: 'Ford Lynx 1.8 TDCi (100 PS): Robuster Gussblock mit einer Schwachstelle',
                strengths: [
                  'Bewährter Ford-Gussblock, 2007 oft noch ab Werk ohne DPF.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Der Antrieb der Hochdruckpumpe läuft im Öl– vernachlässigte Wechsel führen zum Motorschaden.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Unbedingt nachfragen, ob auch der untere Zahnriemen im Ölbad (ab 2007) ersetzt wurde— nicht nur der obere.',
                  'Beim Kaltstart auf hartes Klappern des Schwungrads achten und sauberen Durchzug ab 1.800 U/min testen.',
                  'Dicke schwarze Ladeluftschläuche vorn am Motor auf Risse und Ölnebel prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich frisches 5W-30 Öl & Kraftstofffilter – sauberes Öl schützt den im Öl laufenden unteren Riemen',
                    cost: '160–260 €',
                    ifIgnored: 'Dieselruß im Altöl greift den Gummi-Ölbadriemen chemisch an & lässt ihn aufquellen',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'red',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Oberen Zahnriemen UND unteren Ölbadriemen nach spätestens 7–9 J. erneuern (auch bei wenig km!)',
                    cost: '750–1.250 €',
                    ifIgnored: 'Durch Alter und heißes Öl zersetzter Ölbadriemen reißt mit totalem Motorschaden',
                    damageCost: '2.800–4.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Verklebtes Abgasventil reinigen & gerissenen Turboschlauch ersetzen',
                    cost: '200–380 €',
                    ifIgnored: 'Schwarzer Ruß, starkes Ruckeln & Motor-Notlauf (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'BEIDE Zahnriemen (oberen Riemen UND unteren Ölbadriemen) tauschen (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '750–1.150 €',
                    ifIgnored: 'Gerissener unterer Riemen führt zum kapitalen Motorschaden',
                    damageCost: '2.600–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '160.000–200.000 km • 11–13 J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad erneuern',
                    cost: '900–1.350 €',
                    ifIgnored: 'Metallabrieb blockiert den Anlasser bis zum Totalausfall (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Diesel-Injektoren überholen & Glühkerzen ersetzen',
                    cost: '650–1.100 €',
                    ifIgnored: 'Springt im Winter schlecht an & nagelt hart (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.600 €'
                  }
                ]
              },
              ru: {
                headline: 'Ford Lynx 1.8 TDCi (100 л.с.): крепкий чугунный блок с нюансом по ГРМ',
                strengths: [
                  'Чугунный блок собственной разработки Ford, в 2007 году часто шёл без DPF.',
                  'Хороший подхват с низов и простая механика.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Привод ТНВД в масляной ванне требует своевременной замены (часто меняют на цепь), иначе обрыв гнёт клапаны.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Обязательно уточнить замену нижнего ремня в масляной ванне (на машинах с 2007 г.), а не только верхнего.',
                  'Осмотреть толстые воздушные патрубки спереди мотора на масляные трещины.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло 5W-30 и топливный фильтр — чистое масло бережёт нижний «мокрый» ремень в масле',
                    cost: '€160–260',
                    ifIgnored: 'Сажа и солярка в старом масле разъедают резину нижнего ремня ГРМ раньше срока',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'red',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Запланировать замену верхнего ремня И нижнего масляного ремня к 7–9 годам даже при малом пробеге!',
                    cost: '€750–1 250',
                    ifIgnored: 'Разложившийся от возраста и масла ремень теряет зубья и ломает двигатель',
                    damageCost: '€2 800–4 500'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан выхлопных газов и заменить лопнувший патрубок',
                    cost: '€200–380',
                    ifIgnored: 'Чёрный дым, подёргивания и сброс мощности (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить ОБА привода: верхний ремень И нижний ремень в масле (или раз в 8–10 лет, резина стареет)',
                    cost: '€750–1 150',
                    ifIgnored: 'Обрыв нижнего ремня полностью разрушает двигатель',
                    damageCost: '€2 600–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '160 000–200 000 км • 11–13 лет',
                    action: 'Заменить комплект сцепления с двухмассовым маховиком',
                    cost: '€900–1 350',
                    ifIgnored: 'Стружка от маховика клинит стартер и обездвиживает авто (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Отремонтировать дизельные форсунки и заменить свечи накала',
                    cost: '€650–1 100',
                    ifIgnored: 'Отказ запуска в мороз и громкий стук мотора (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 600'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.8,
            badges: {
              en: ['5/6-Speed Manual', 'Known DMF Rattles'],
              de: ['5/6-Gang-Schaltgetriebe', 'ZMS-Verschleiß bekannt'],
              ru: ['5/6-ступ. МКПП', 'Частый износ маховика']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.5,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Loom & Glow'],
              de: ['Convers+-Lötstellen prüfen', 'Heckklappe & Glührelais'],
              ru: ['Пайка приборки Convers+', 'Жгут багажника и реле накала']
            }
          },
          rideNoiseComfort: {
            score: 8.5,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Louder Early Iron-Block Diesel'],
              de: ['Gute Federung • Ruhige Lage', 'Rauerer 1.8-Gussdiesel'],
              ru: ['Мягкая подвеска Mondeo', 'Шумноватый ранний 1.8 дизель']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.0,
            badges: {
              en: ['585 kg Payload', '1,600 kg Braked Tow'],
              de: ['585 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 585 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.8,
            badges: {
              en: ['0–100 km/h: 10.5–12.3 s', '185–200 km/h Top Speed'],
              de: ['0–100 km/h: 10,5–12,3 s', '185–200 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5–12,3 с', 'Макс. 185–200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.6,
            badges: {
              en: ['280–320 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['280–320 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['280–320 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 7.8,
            badges: {
              en: ['Class-Leading Chassis', 'Heavy Diesel Nose'],
              de: ['Klassenbestes Fahrwerk', 'Schwerere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжёлый дизельный нос']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['6.3 L/100km', '154 g/km CO2'],
              de: ['6,3 L/100km', '154 g/km CO2'],
              ru: ['6,3 л/100 км', '154 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.4,
            badges: {
              en: ['1.8L Euro 4 Diesel Tax', 'Urban Euro 4 City Restrictions'],
              de: ['1.8-Euro-4-Dieselsteuer', 'Euro-4-Umweltzone beachten'],
              ru: ['Налог дизеля 1,8 Euro 4', 'Ограничения Euro 4 в городах']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '150–180k km · 8 yrs', action: { en: 'Upper Dry Timing Belt + Lower Wet Timing Belt Kit', de: 'Oberen & unteren Ölbad-Zahnriemen komplett ersetzen', ru: 'Замена верхнего и нижнего (в масле) ремней ГРМ' }, cost: '€750–1,150' }
              ],
              critical: [
                { when: '140–190k km · 9–13 yrs', action: { en: 'Lower Wet Belt Degradation & Dual-Mass Flywheel (DMF)', de: 'Unterer Ölbad-Zahnriemen & Zweimassenschwungrad (ZMS)', ru: 'Износ нижнего ремня в масле и маховика (ДММ)' }, cost: '€950–1,600', risk: { en: 'Snapped wet belt destroys engine valves instantly', de: 'Riss des unteren Riemens führt zum Motorschaden', ru: 'Обрыв нижнего ремня ведёт к встрече клапанов' }, damage: '€3,000–4,500' }
              ]
            },
            score: 6.5,
            badges: {
              en: ['No Factory DPF Upkeep', 'Pricey Wet Timing Belt & DMF'],
              de: ['Kein DPF-Ärger', 'Teurer nasser Zahnriemen & ZMS'],
              ru: ['Нет хлопот с сажевым', 'Дорогой ремень в масле и маховик']
            }
          },
          depreciationResale: {
            score: 7.2,
            badges: {
              en: ['Very Cheap Used Buy', 'Pre-2008 Age Factor'],
              de: ['Sehr günstiger Preis', 'Frühes Baujahr 2007'],
              ru: ['Очень низкая цена', 'Возраст 2007 года']
            }
          }
        }
      },
      {
        id: '2.0-tdci',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [
          { id: '6-mt-dmf', isDefault: true },
          {
            id: 'aisin-6at',
            estUsedPrice: '€8,000',
            specOverrides: { sprint0100: '10.2 s', topSpeed: '205 km/h', realWorldFuel: '6.4–7.2 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.6,
                badges: {
                  en: ['0–100 km/h: 10.2 s (6-AT)', '205 km/h Top Speed'],
                  de: ['0–100 km/h: 10,2 s (6-AT)', '205 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,2 s (6-AT)', 'Макс. 205 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.7,
                badges: {
                  en: ['6.4–7.2 L/100 km (6-AT)'],
                  de: ['6,4–7,2 L/100 km (6-AT)'],
                  ru: ['6,4–7,2 L/100 km (6-AT)']
                }
              }
            }
          },
          {
            id: 'powershift-6wet',
            estUsedPrice: '€7,600',
            specOverrides: { sprint0100: '9.5 s', topSpeed: '210 km/h', realWorldFuel: '5.8–6.6 L/100 km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 8.2,
                badges: {
                  en: ['5.8–6.6 L/100 km (6-PS)'],
                  de: ['5,8–6,6 L/100 km (6-PS)'],
                  ru: ['5,8–6,6 L/100 km (6-PS)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.0L TDCi Diesel', de: '2.0L TDCi Diesel', ru: '2.0L TDCi Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,800 kg', sprint0100: '9.5 s', topSpeed: '210 km/h', peakTorque: '320–340 Nm @ 1,750',
          passingPunch: { en: 'Effortless Autobahn', de: 'Souveräner Durchzug', ru: 'Уверенная тяга на трассе' },
          realWorldFuel: '5.5–6.3 L/100 km', tankRange: '70 L · ~1,180 km', euroNorm: 'Euro 5 (DPF)',
          taxInsurance: '@tierMod', timingDrive: '@belt', serviceWear: '@tierLowMod'
        },
        dossierGroup: 'diesel-6mt',
        buyerFitGroup: 'diesel',
        isDefault: false,
        fuelType: 'diesel',
        hp: 115,
        shortTitle: 'MONDEO 2.0 TDCi',
        fullName: '2012 Ford Mondeo 2.0 TDCi',
        engineBadge: '2.0L TDCi • 115 / 130 / 140 / 163 HP',
        engineSubLabel: {
          en: 'DW10 PSA 2.0L Turbo-Diesel (2007–2014) • 6-MT / Opt. Auto • 300–340 Nm',
          de: 'DW10 PSA 2.0L Turbodiesel (2007–2014) • 6-Gang / Opt. Automatik • 300–340 Nm',
          ru: 'DW10 PSA 2.0L Турбодизель (2007–2014) • 6-ст. МКПП / Опц. АКПП • 300–340 Н·м'
        },
        rarityLabel: {
          en: 'BEST MK4 DIESEL',
          de: 'BESTSELLER-DIESEL',
          ru: 'ЛУЧШИЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€29,950 New',
          de: '29.950 € Neu',
          ru: '€29 950 новый'
        },
        estUsedPrice: '€7,200',
        perkLabel: {
          en: '✦ 115–163 HP PSA DW10 • 6.4 L/100km • 1,800 kg Towing • 400k+ km Proven',
          de: '✦ 115–163 PS PSA DW10 • 6,4 L/100km • 1.800 kg Anhängelast • Dauerläufer',
          ru: '✦ 115–163 л.с. PSA DW10 • 6,4 л/100 км • Прицеп 1 800 кг • Ресурс 400+ тыс. км'
        },
        remarkablePositives: {
          en: [
            'PROVEN 400K+ KM DIESEL',
            '6.4 L/100KM ECONOMY',
            '1,800 KG BRAKED TOWING',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT'
          ],
          de: [
            'BEWÄHRTER 400.000-KM-DIESEL',
            '6,4 L/100KM VERBRAUCH',
            '1.800 KG ANHÄNGELAST',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT'
          ],
          ru: [
            'РЕСУРСНЫЙ ДИЗЕЛЬ 400+ ТЫС. КМ',
            'РАСХОД 6,4 Л/100 КМ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ'
          ]
        },
        notableNegatives: {
          en: [
            'AVOID NEGLECTED POWERSHIFT',
            'EGR & DPF ON SHORT TRIPS',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'UNGEPFLEGTES POWERSHIFT MEIDEN',
            'AGR & DPF AUF KURZSTRECKEN',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'ОСТОРОЖНО С РОБОТОМ POWERSHIFT',
            'ЕГР И САЖЕВЫЙ В ГОРОДЕ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.0,
          spacePracticality: 8.7,
          performanceDynamics: 7.7,
          runningCostsTco: 8.0
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L TDCi Inline-4 Turbodiesel (QXBA / UFBA · PSA DW10)', de: '2.0L TDCi Reihenvierzylinder Turbodiesel (PSA DW10)', ru: '2.0L TDCi рядный 4-цил. турбодизель (PSA DW10)' } },
                  { k: 'displacement', v: '1,997 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '103–120 kW (140 / 163 HP)', de: '103–120 kW (140 / 163 PS)', ru: '103–120 кВт (140 / 163 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Dry Timing Belt', de: 'Diesel · Trockener Zahnriemen', ru: 'Дизель · Сухой ремень ГРМ' } }
                ],
                note: { en: 'Legendary PSA DW10 diesel — the sweet-spot Mondeo engine, routinely crossing 350,000–450,000 km.', de: 'Legendärer PSA-DW10-Diesel — der beste Mondeo-Motor, regelmäßig über 350.000–450.000 km.', ru: 'Легендарный дизель PSA DW10 — лучший мотор для Mondeo с ресурсом 350–450 тыс. км.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 9.2,
            badges: {
              en: ['PSA DW10 Workhorse', 'Robust Cast-Iron Block'],
              de: ['PSA DW10 Dauerläufer', 'Robuster Grauguss-Dieselblock'],
              ru: ['Надёжный PSA DW10', 'Ресурсный чугунный дизельный блок']
            },
            dossier: {
              en: {
                headline: 'PSA DW10 2.0 TDCi (115 HP): The Sweet Spot of the Mk4 Range',
                strengths: [
                  'Taxi-Proven Longevity: Built on the ultra-tough 115 HP / 300 Nm PSA DW10 block—regularly reaches 400,000+ km.',
                  'Quiet, well-isolated common-rail combustion at motorway cruising speeds.'
                ],
                watchouts: [
                  'Facelift 2.0 TDCi uses a DPF fuel vaporizer that can fail, plus standard EGR/crank-sensor wear at high mileage.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Verify regular highway mileage so the diesel soot filter cleans itself properly.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.',
                  'Check coolant level and inspect around the injectors and turbo pipes for oil mist or black tar.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, clean fuel filter & STRICT 60,000 km / 3–4 yr PowerShift oil service (if auto)',
                    cost: '€180–420',
                    ifIgnored: 'Skipped 4-yr PowerShift service overheats dual clutches; dirty diesel harms injectors',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Check 6–7 yr aging rubber intercooler hoses, flush coolant & plan timing belt before 8–10 yrs',
                    cost: '€280–460',
                    ifIgnored: 'Age-cracked boost hose drops power on motorway & brittle belt risks snapping',
                    damageCost: '€1,200–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean exhaust valve & fuel filter (plus PowerShift oil if auto)',
                    cost: '€220–480',
                    ifIgnored: 'Engine stalling or costly automatic gearbox damage (components & fluids also degrade over years)',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'red',
                    km: '150,000–190,000 km • 9–11 yrs',
                    action: 'Replace timing belt, water pump & accessory belt (or every 8–10 yrs max, rubber ages)',
                    cost: '€550–850',
                    ifIgnored: 'Broken belt destroys engine valves and rockers',
                    damageCost: '€2,400–3,600'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace clutch kit & dual-mass flywheel (manual)',
                    cost: '€900–1,350',
                    ifIgnored: 'Heavy shudder shakes gearbox and damages casing (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Deep-clean diesel soot filter & replace exhaust fuel igniter',
                    cost: '€380–680',
                    ifIgnored: 'Blocked exhaust locks car into slow limp mode',
                    damageCost: '€1,500–2,300'
                  }
                ]
              },
              de: {
                headline: 'PSA DW10 2.0 TDCi (115 PS): Der beste Mondeo-Mk4-Diesel',
                strengths: [
                  'Taxierprobte Langlebigkeit: Basiert auf dem extrem robusten 115-PS-/300-Nm-PSA-DW10-Block — läuft oft über 400.000 km.',
                  'Ruhiger, kultivierter Common-Rail-Lauf bei Autobahntempo.'
                ],
                watchouts: [
                  'Bei Kurzstrecken drohen AGR- und DPF-Probleme.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Auf regelmäßige Langstreckenfahrten achten, damit sich der Partikelfilter sauber regeneriert.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.',
                  'Kühlmittelstand sowie Injektoren und Ladeluftrohre auf Ölnebel oder Verkokung prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, Dieselfilter & STRENG alle 60 Tkm / 3–4 J. PowerShift-Öl (falls Automatik)',
                    cost: '180–420 €',
                    ifIgnored: 'Versäumtes 4-J.-PowerShift-Öl überhitzt Kupplungen; dreckiger Diesel schadet Düsen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Gealterte 6–7-J.-Ladeluftschläuche & Kühlmittel prüfen sowie Zahnriemenalter Richtung 8–10 J. planen',
                    cost: '280–460 €',
                    ifIgnored: 'Altersrissiger Turboschlauch verursacht Notlauf; überalterter Riemen reißt',
                    damageCost: '1.200–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Abgasventil & Dieselfilter (bei Automatik: PowerShift-Öl) wechseln',
                    cost: '220–480 €',
                    ifIgnored: 'Absterbender Motor oder teurer Automatik-Schaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'red',
                    km: '150.000–190.000 km • 9–11 J.',
                    action: 'Zahnriemen, Wasserpumpe & Keilriemen ersetzen (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '550–850 €',
                    ifIgnored: 'Gerissener Zahnriemen zerstört Motorventile & Kipphebel',
                    damageCost: '2.400–3.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad tauschen (Schalter)',
                    cost: '900–1.350 €',
                    ifIgnored: 'Starkes Klappern beschädigt Lager & Getriebegehäuse',
                    damageCost: '1.800–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Partikelfilter spülen & Abgas-Glühstift für Filter erneuern',
                    cost: '380–680 €',
                    ifIgnored: 'Verstopfter Auspuff sperrt das Auto im Notlauf',
                    damageCost: '1.500–2.300 €'
                  }
                ]
              },
              ru: {
                headline: 'PSA DW10 2.0 TDCi (115 л.с.): лучший дизель Mondeo Mk4',
                strengths: [
                  'Проверенный в такси ресурс: построен на выносливом блоке PSA DW10 (115 л.с., 300 Н·м) и ходит 400 000+ км.',
                  'Мягкая и тихая работа системы Common-Rail на крейсерской скорости.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'В городе возможны ошибки по клапану ЕГР и форсунке прожига DPF.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Убедиться, что машина бывала на трассе для регулярной очистки сажевого фильтра.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.',
                  'Проверить уровень антифриза, форсунки и патрубки турбины на отсутствие нагара и подтёков масла.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно масло и топливный фильтр + СТРОГО менять масло PowerShift раз в 60 тыс. / 3–4 года (на АКПП)',
                    cost: '€180–420',
                    ifIgnored: 'Пропуск 4-летнего ТО автомата сжигает сцепления; грязное топливо портит форсунки',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Проверить стареющие за 6–7 лет патрубки интеркулера, антифриз и срок ремня ГРМ по возрасту (8–10 лет)',
                    cost: '€280–460',
                    ifIgnored: 'Треснувший от старости шланг сбрасывает наддув, а старый ремень грозит обрывом',
                    damageCost: '€1 200–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан газов, фильтр топлива (и масло робота на АКПП)',
                    cost: '€220–480',
                    ifIgnored: 'Глохнущий мотор или дорогой ремонт робота (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'red',
                    km: '150 000–190 000 км • 9–11 лет',
                    action: 'Заменить ремень двигателя, помпу и приводной ремень (или раз в 8–10 лет, резина стареет)',
                    cost: '€550–850',
                    ifIgnored: 'Обрыв ремня ломает клапаны и рокеры мотора',
                    damageCost: '€2 400–3 600'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить сцепление вместе с двухмассовым маховиком',
                    cost: '€900–1 350',
                    ifIgnored: 'Сильный стук разбивает корпус и подшипники коробки (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Промыть сажевый фильтр и заменить свечу его прожига',
                    cost: '€380–680',
                    ifIgnored: 'Закупорка фильтра и вечный аварийный режим',
                    damageCost: '€1 500–2 300'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.1,
            badges: {
              en: ['6-MT Solid • Avoid Early DCT', 'Manual Beats PowerShift'],
              de: ['6-Gang Top • PowerShift meiden', 'Schalter deutlich robuster'],
              ru: ['6-МКПП прочная • DCT риск', 'Лучше брать с механикой']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.9,
            badges: {
              en: ['Plush Long-Wheelbase Ride', 'Quiet Cabin & Wide Seats'],
              de: ['Souveräner Langstreckenkomfort', 'Leise Dämmung & breite Sitze'],
              ru: ['Плавный трассовый ход', 'Тихий салон и широкие кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 8.8,
            badges: {
              en: ['590 kg Payload', '1,800 kg Braked Tow'],
              de: ['590 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.0,
            badges: {
              en: ['0–100 km/h: 8.9–10.9 s', '192–215 km/h Top Speed'],
              de: ['0–100 km/h: 8,9–10,9 s', '192–215 km/h Spitze'],
              ru: ['0–100 км/ч: 8,9–10,9 с', 'Макс. 192–215 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.9,
            badges: {
              en: ['300–340 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['300–340 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['300–340 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.3,
            badges: {
              en: ['Class-Leading Chassis', 'Effortless Overtaking'],
              de: ['Klassenbestes Fahrwerk', 'Souveräner Durchzug'],
              ru: ['Эталонное шасси', 'Уверенные обгоны']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 8.6,
            badges: {
              en: ['6.4 L/100km', '139–156 g/km CO2'],
              de: ['6,4 L/100km', '139–156 g/km CO2'],
              ru: ['6,4 л/100 км', '139–156 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['2.0L Diesel Tax • Euro 4/5', 'Higher Fleet-Miles Insurance'],
              de: ['2.0-Dieselsteuer • Euro 4/5', 'Höhere Vielfahrer-Versicherung'],
              ru: ['Налог за 2,0 дизель', 'Повышенная ставка страховки']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '200k km · 10 yrs', action: { en: 'Dry Timing Belt & Water Pump Kit', de: 'Zahnriemen & Wasserpumpe wechseln', ru: 'Замена ремня ГРМ и помпы' }, cost: '€520–780' },
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & MMT6 Gearbox Oil (@ 120k)', de: 'Dieselfilter & 6-Gang Getriebeöl (bei 120tkm)', ru: 'Топливный фильтр и масло МКПП (к 120 тыс.)' }, cost: '€140–240' }
              ],
              critical: [
                { when: '160–220k km · 10–14 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplung', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,050–1,550', risk: { en: 'Idle knock & heavy driveline vibration', de: 'Leerlauf-Klopfen & Vibrationen', ru: 'Стук на холостых и вибрации' }, damage: '€1,900–2,600' }
              ]
            },
            score: 7.6,
            badges: {
              en: ['Abundant PSA Spare Parts', 'Manual Keeps Repair Bills Low'],
              de: ['Riesige PSA-Teileauswahl', 'Schalter hält Kosten niedrig'],
              ru: ['Дешёвые запчасти PSA', 'Механика экономит на ремонте']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Highest Used Demand', 'Easy Parts & Resale'],
              de: ['Gefragtester Mondeo', 'Leichter Wiederverkauf'],
              ru: ['Самый ликвидный Mondeo', 'Легко продать и чинить']
            }
          }
        }
      },
      {
        id: '2.2-tdci',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [
          { id: '6-mt-dmf', isDefault: true },
          {
            id: 'aisin-6at',
            estUsedPrice: '€8,900',
            specOverrides: { sprint0100: '8.7 s', topSpeed: '225 km/h', realWorldFuel: '7.1–8.0 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 6.8,
                badges: {
                  en: ['0–100 km/h: 8.7 s (6-AT)', '225 km/h Top Speed'],
                  de: ['0–100 km/h: 8,7 s (6-AT)', '225 km/h Spitze'],
                  ru: ['0–100 км/ч: 8,7 s (6-AT)', 'Макс. 225 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.8,
                badges: {
                  en: ['7.1–8.0 L/100 km (6-AT)'],
                  de: ['7,1–8,0 L/100 km (6-AT)'],
                  ru: ['7,1–8,0 L/100 km (6-AT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.2L TDCi Diesel', de: '2.2L TDCi Diesel', ru: '2.2L TDCi Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '2,000 kg', sprint0100: '8.1 s', topSpeed: '230 km/h', peakTorque: '420 Nm @ 1,750',
          passingPunch: { en: 'Massive 420 Nm Surge', de: 'Brachiale 420 Nm', ru: 'Огромная тяга 420 Н·м' },
          realWorldFuel: '6.3–7.2 L/100 km', tankRange: '70 L · ~1,040 km', euroNorm: 'Euro 5 (DPF)',
          taxInsurance: '@tierModHigh', timingDrive: '@belt', serviceWear: '@tierMod'
        },
        dossierGroup: 'diesel-conv-auto',
        buyerFitGroup: 'diesel',
        isDefault: false,
        fuelType: 'diesel',
        hp: 175,
        shortTitle: 'MONDEO 2.2 TDCi',
        fullName: '2012 Ford Mondeo 2.2 TDCi',
        engineBadge: '2.2L TDCi • 175 / 200 HP',
        engineSubLabel: {
          en: 'DW12 PSA 2.2L Turbo-Diesel (2008–2014) • 6-MT / Opt. Aisin 6-AT • 400–420 Nm',
          de: 'DW12 PSA 2.2L Turbodiesel (2008–2014) • 6-Gang / Opt. Aisin-6-AT • 400–420 Nm',
          ru: 'DW12 PSA 2.2L Турбодизель (2008–2014) • 6-ст. МКПП / Опц. АКПП Aisin • 400–420 Н·м'
        },
        rarityLabel: {
          en: 'TORQUE MONSTER',
          de: 'DREHMOMENT-KÖNIG',
          ru: 'КОРОЛЬ ТЯГИ'
        },
        originalMsrp: {
          en: '€34,950 New',
          de: '34.950 € Neu',
          ru: '€34 950 новый'
        },
        estUsedPrice: '€8,100',
        perkLabel: {
          en: '✦ 175 or 200 HP • 420 Nm Torque (450 Overboost) • 1,800–2,000 kg Towing',
          de: '✦ 175 oder 200 PS • 420 Nm (450 Overboost) • Bis 2.000 kg Anhängelast',
          ru: '✦ 175 или 200 л.с. • 420 Н·м (450 овербуст) • Прицеп до 2 000 кг'
        },
        remarkablePositives: {
          en: [
            'MASSIVE 420 NM TORQUE',
            '2,000 KG BRAKED TOWING',
            '7.2 L/100KM ECONOMY',
            'HUGE 550L SEDAN BOOT',
            'RELIABLE AISIN 6-AT OPTION'
          ],
          de: [
            'GEWALTIGE 420 NM DREHMOMENT',
            'BIS 2.000 KG ANHÄNGELAST',
            '7,2 L/100KM VERBRAUCH',
            'RIESIGER 550L KOFFERRAUM',
            'ROBUSTE AISIN-6-AUTOMATIK'
          ],
          ru: [
            'МОЩНЕЙШАЯ ТЯГА 420 Н·М',
            'БУКСИРОВКА ДО 2 000 КГ',
            'РАСХОД 7,2 Л/100 КМ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'НАДЁЖНЫЙ АВТОМАТ AISIN'
          ]
        },
        notableNegatives: {
          en: [
            'HEAVY CLUTCH & DMF WEAR',
            'HIGH 2.2L DIESEL ROAD TAX',
            'OIL-PUMP CHAIN WEAR RISK',
            'NARROW BOOT OPENING (4-DOOR SEDAN)'
          ],
          de: [
            'HOHER KUPPLUNGS- & ZMS-VERSCHLEISS',
            'HOHE 2.2L DIESEL-STEUER',
            'ÖLPUMPENKETTEN-RISIKO (VIEL KM)',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)'
          ],
          ru: [
            'БЫСТРЫЙ ИЗНОС СЦЕПЛЕНИЯ И ZMS',
            'ВЫСОКИЙ НАЛОГ НА 2.2 ДИЗЕЛЬ',
            'РИСК ИЗНОСА ЦЕПИ МАСЛОНАСОСА',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.0,
          spacePracticality: 8.8,
          performanceDynamics: 8.0,
          runningCostsTco: 7.3
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.2L TDCi Inline-4 Turbodiesel (KNBA · PSA DW12)', de: '2.2L TDCi Reihenvierzylinder Turbodiesel (PSA DW12)', ru: '2.2L TDCi рядный 4-цил. турбодизель (PSA DW12)' } },
                  { k: 'displacement', v: '2,179 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '129–147 kW (175 / 200 HP)', de: '129–147 kW (175 / 200 PS)', ru: '129–147 кВт (175 / 200 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Dry Timing Belt', de: 'Diesel · Trockener Zahnriemen', ru: 'Дизель · Сухой ремень ГРМ' } }
                ],
                note: { en: 'Torquey 200 HP PSA DW12 highway express — very durable block with 2,000 kg towing rating.', de: 'Bärenstarker 200-PS-PSA-Diesel mit 2.000 kg Anhängelast und robuster Grundmechanik.', ru: 'Мощнейший 200-сильный дизель PSA с тягой 420 Н·м и крепкой базой.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 8.0,
            badges: {
              en: ['PSA DW12 175/200 HP', 'Water-Cooled VGT Turbo'],
              de: ['PSA DW12 175/200 PS', 'Wassergekühlter VTG-Turbo'],
              ru: ['PSA DW12 175/200 л.с.', 'Турбина VTG с водяным охлаждением']
            },
            dossier: {
              en: {
                headline: 'Flagship PSA DW12 2.2 TDCi (175 HP): Huge Torque & Aisin Auto',
                strengths: [
                  'Torquey 175 HP diesel setup delivers effortless highway cruising when serviced on time.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'High-mileage units (180k+ km) should have oil pressure / oil-pump chain tensioner checked.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Check lower rubber turbo pipes under the bumper for oil splits— a tiny tear kills boost immediately.',
                  'Verify regular highway trips to keep the heavy-duty diesel soot filter clear.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, fuel filter every 2 yrs & regular highway drives for 2.2 soot filter',
                    cost: '€180–290',
                    ifIgnored: 'Urban short trips dilute oil & choke large diesel soot filter prematurely',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change Aisin 6-AT or MT oil at 60–80k / 5 yrs & inspect 6–7 yr aging rubber lower boost hose + belt',
                    cost: '€320–520',
                    ifIgnored: 'Heat-aged lower rubber turbo hose splits cleanly & stale 6-AT oil wears valve body',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace split lower turbo air hose & clean exhaust valve',
                    cost: '€220–400',
                    ifIgnored: 'Sudden boost leak, black smoke & clogged diesel filter (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–1,900'
                  },
                  {
                    tier: 'red',
                    km: '150,000–190,000 km • 9–11 yrs',
                    action: 'Replace timing belt, water pump & flush 6-speed auto oil (or every 8–10 yrs max, rubber ages)',
                    cost: '€650–980',
                    ifIgnored: 'Snapped timing belt or burnt automatic gearbox clutches',
                    damageCost: '€2,600–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace heavy clutch & dual-mass flywheel (manual)',
                    cost: '€1,000–1,450',
                    ifIgnored: '420 Nm torque tears apart worn clutch & flywheel (components & fluids also degrade over years)',
                    damageCost: '€1,900–2,700'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Deep-clean diesel soot filter & test diesel fuel injectors',
                    cost: '€450–850',
                    ifIgnored: 'Blocked exhaust overheats and wrecks turbocharger (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,900'
                  }
                ]
              },
              de: {
                headline: 'Top-Diesel PSA DW12 2.2 TDCi (175 PS): Gewaltiger Schub & Aisin-Automatik',
                strengths: [
                  'Souveräne Autobahn-Performance.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Ab ca. 180.000 km Öldruck/Ölpumpenkette im Blick behalten.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Untere Gummischläuche des Turbos auf Risse und Öl prüfen— schon ein kleiner Riss kostet sofort Leistung.',
                  'Bei der robusten 6-Gang-Wandlerautomatik heißes Schaltverhalten testen (oder Rutschen beim Schalter).',
                  'Langstrecken-Anteil erfragen, damit der Partikelfilter sauber bleibt.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, alle 2 J. Dieselfilter & regelmäßige Autobahnfahrten für großen Partikelfilter',
                    cost: '180–290 €',
                    ifIgnored: 'Kurzstrecken verdünnen das Motoröl & setzen den großen Dieselpartikelfilter früh zu',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Aisin-6-Gang-Automatik- oder Schaltöl (60–80 Tkm / 5 J.) wechseln & 6–7-J.-Turboschlauch prüfen',
                    cost: '320–520 €',
                    ifIgnored: 'Altersbrüchiger unterer Turboschlauch reißt bei 400+ Nm; altes Automatiköl schädigt',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Porösen unteren Turboschlauch tauschen & Abgasventil säubern',
                    cost: '220–400 €',
                    ifIgnored: 'Plötzlicher Leistungsverlust, Ruß & verstopfter Filter (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '150.000–190.000 km • 9–11 J.',
                    action: 'Zahnriemen, Wasserpumpe & Wandler-Automatiköl wechseln (oder spätestens alle 8–10 J., Gummi altert)',
                    cost: '650–980 €',
                    ifIgnored: 'Gerissener Riemen oder überhitzte Automatik-Kupplungen',
                    damageCost: '2.600–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Verstärkte Kupplung & Zweimassenschwungrad ersetzen (Schalter)',
                    cost: '1.000–1.450 €',
                    ifIgnored: '420 Nm Drehmoment zerlegen die verschlissene Kupplung',
                    damageCost: '1.900–2.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Partikelfilter spülen & Einspritzdüsen am Prüfstand checken',
                    cost: '450–850 €',
                    ifIgnored: 'Zu hoher Abgasgegendruck zerstört den Turbolader',
                    damageCost: '1.800–2.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Флагманский дизель PSA DW12 2.2 TDCi (175 л.с.): огромная тяга',
                strengths: [
                  'Ураганная тяга на трассе.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'На пробегах 180+ тыс. км стоит контролировать состояние привода маслонасоса.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Проверить нижние резиновые патрубки турбины под бампером— даже мелкая трещина сразу обрубает тягу.',
                  'Убедиться, что машина регулярно ездила по трассе для прочистки сажевого фильтра.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год малозольное масло, топливный фильтр каждые 2 года и выезды на трассу для прожига',
                    cost: '€180–290',
                    ifIgnored: 'Городская езда разжижает масло и преждевременно забивает сажевый фильтр 2.2',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в 6-ст. АКПП Aisin или МКПП (60–80 тыс. / 5 лет) и проверить шланги/ремень к 6–7 годам',
                    cost: '€320–520',
                    ifIgnored: 'Охрупченный от времени нижний шланг турбины лопается под тягой, а старое масло губит АКПП',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить лопнувший нижний патрубок турбины и почистить клапан газов',
                    cost: '€220–400',
                    ifIgnored: 'Потеря наддува, чёрный дым и засор фильтра (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 200–1 900'
                  },
                  {
                    tier: 'red',
                    km: '150 000–190 000 км • 9–11 лет',
                    action: 'Заменить ремень двигателя, помпу и масло в классическом автомате (или раз в 8–10 лет, резина стареет)',
                    cost: '€650–980',
                    ifIgnored: 'Обрыв ремня или перегрев фрикционов автомата',
                    damageCost: '€2 600–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить усиленное сцепление и маховик (на механике)',
                    cost: '€1 000–1 450',
                    ifIgnored: 'Момент 420 Н·м быстро добивает изношенное сцепление (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 900–2 700'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Промыть сажевый фильтр и проверить дизельные форсунки',
                    cost: '€450–850',
                    ifIgnored: 'Перегрев выхлопа выводит из строя турбину (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.6,
            badges: {
              en: ['6-MT / Tough Aisin 6-AT', '420 Nm DMF • No PowerShift'],
              de: ['6-Gang / Aisin 6-Automatik', 'Kein PowerShift • 420 Nm Last'],
              ru: ['6-МКПП / Автомат Aisin 6', 'Без робота DCT • Момент 420 Н·м']
            }
          },
          buildQualityRust: {
            score: 7.1,
            badges: {
              en: ['Solid Crash Structure', 'Check Rear Bushes & Arches'],
              de: ['Solide Karosseriestruktur', 'Hinterachslager & Radläufe'],
              ru: ['Крепкая структура кузова', 'Задние рычаги и кромки арок']
            }
          },
          electronicsReliability: {
            score: 6.7,
            badges: {
              en: ['Convers+ Cluster Joints', 'Check Tailgate Wiring Loom'],
              de: ['Convers+-Lötstellen prüfen', 'Kabelbaum Heckklappe'],
              ru: ['Пайка приборки Convers+', 'Жгут крышки багажника']
            }
          },
          rideNoiseComfort: {
            score: 8.6,
            badges: {
              en: ['Balanced Highway Poise', 'Often Paired With Sport Ride'],
              de: ['Satter Autobahn-Komfort', 'Oft straffere Titanium-S-Feder'],
              ru: ['Уверенный ход по трассе', 'Часто жёсткая спорт-подвеска']
            }
          },
          interiorQualityFeatures: {
            score: 7.9,
            badges: {
              en: ['Foamed Dash & Titanium Features', 'Heated Windscreen & Logical UI'],
              de: ['Geschäumtes Cockpit & Extras', 'Frontscheibenheizung & Logik'],
              ru: ['Мягкий пластик и оснащение', 'Обогрев лобового и понятный климат']
            }
          },
          visibilityManeuverability: {
            score: 6.0,
            badges: {
              en: ['Large 4.85 m Footprint', '11.4–11.6 m Turn • Sensors Help'],
              de: ['Große 4,85 m Außenmaße', '11,4–11,6 m Kreis • PDC ratsam'],
              ru: ['Крупный кузов 4,85 м', 'Разворот 11,4–11,6 м • Нужны датчики']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2007)', '7 Airbags + Knee Airbag'],
              de: ['Euro NCAP 5★ (2007)', '7 Airbags inkl. Knieairbag'],
              ru: ['Euro NCAP 5★ (2007)', '7 подушек (вкл. коленную)']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.5,
            badges: {
              en: ['Limousine-Class Rear Legroom', 'Wide 3-Across Bench + ISOFIX'],
              de: ['Üppige Beinfreiheit im Fond', 'Breite Rückbank & leichtes ISOFIX'],
              ru: ['Королевский запас для ног', 'Широкий диван и удобный ISOFIX']
            }
          },
          interiorBootSpace: {
            score: 8.1,
            badges: {
              en: ['550L Deep Sedan Boot', 'Narrow 4-Door Trunk Opening'],
              de: ['550L Stufenheck-Kofferraum', 'Schmale Limousinen-Öffnung'],
              ru: ['Глубокий багажник 550 л', 'Узкий проём крышки седана']
            }
          },
          payloadTowing: {
            score: 9.1,
            badges: {
              en: ['590 kg Payload', 'Up to 2,000 kg Tow'],
              de: ['590 kg Zuladung', 'Bis 2.000 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.1,
            badges: {
              en: ['0–100 km/h: 8.1–8.7 s', '223–230 km/h Top Speed'],
              de: ['0–100 km/h: 8,1–8,7 s', '223–230 km/h Spitze'],
              ru: ['0–100 км/ч: 8,1–8,7 с', 'Макс. 223–230 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.0,
            badges: {
              en: ['400–420 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['400–420 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['400–420 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Heavy Front Axle'],
              de: ['Klassenbestes Fahrwerk', 'Schwere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжёлая передняя ось']
            }
          },
          brakingPerformance: {
            score: 7.4,
            badges: {
              en: ['100–0 km/h: 37.5 m', '300 mm Discs • Good Stability'],
              de: ['100–0 km/h: 37,5 m', '300 mm Scheiben • Stabil bei Tempo'],
              ru: ['100–0 км/ч: 37,5 м', '300 мм диски • Стабильны на трассе']
            }
          },
          efficiencyFuel: {
            score: 7.6,
            badges: {
              en: ['7.2 L/100km', '165–179 g/km CO2'],
              de: ['7,2 L/100km', '165–179 g/km CO2'],
              ru: ['7,2 л/100 км', '165–179 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.2,
            badges: {
              en: ['High 2.2L Diesel Tax • Euro 4/5', 'Higher 200 HP Insurance'],
              de: ['Hohe 2.2-Dieselsteuer', 'Teurere 200-PS-Versicherung'],
              ru: ['Высокий налог за 2,2 л', 'Дорогая страховка за 200 л.с.']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '200k km · 10 yrs', action: { en: 'Timing Belt, Water Pump & Intercooler Hose Check', de: 'Zahnriemen, Wasserpumpe & Ladeluftschläuche prüfen', ru: 'Ремень ГРМ, помпа и патрубки интеркулера' }, cost: '€580–880' }
              ],
              critical: [
                { when: '150–200k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Heavy-Duty Clutch', de: 'Zweimassenschwungrad (ZMS) + Kupplung (420 Nm Last)', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,150–1,750', risk: { en: 'Clutch slip in 5th/6th gear under full torque', de: 'Kupplungsrutschen unter 420 Nm Volllast', ru: 'Пробуксовка сцепления под нагрузкой 420 Н·м' }, damage: '€2,100–2,900' }
              ]
            },
            score: 4.7,
            badges: {
              en: ['Aisin Auto Avoids PowerShift', 'High 420 Nm Clutch/DMF & Tyres'],
              de: ['Aisin-AT vermeidet PowerShift', 'Teures ZMS/Kupplung & Reifen'],
              ru: ['Надёжный автомат Aisin', 'Дорогие маховик, сцепление и шины']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Sought-After 200 HP', 'Strong Towing Demand'],
              de: ['Gesuchter 200-PS-Diesel', 'Beliebt als Zugfahrzeug'],
              ru: ['Востребован на вторичке', 'Ценят как тягач']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Panther Black Metallic', code: '2851', hex: '#191c22', glow: 'rgba(65, 76, 92, 0.18)' },
    { name: 'Frozen White', code: '7VTA', hex: '#f2f4f7', glow: 'rgba(242, 244, 247, 0.16)' },
    { name: 'Moondust Silver', code: '2431', hex: '#b6bec7', glow: 'rgba(182, 190, 200, 0.16)' },
    { name: 'Sea Grey', code: '8CWA', hex: '#5b616a', glow: 'rgba(91, 97, 106, 0.18)' },
    { name: 'Midnight Sky', code: 'BCTA', hex: '#38414d', glow: 'rgba(56, 65, 77, 0.18)' },
    { name: 'Lunar Sky', code: 'CCTA', hex: '#7c766d', glow: 'rgba(124, 118, 109, 0.18)' },
    { name: 'Hypnotic Silver', code: '8CQA', hex: '#9fa6ae', glow: 'rgba(159, 166, 174, 0.16)' },
    { name: 'Ink Blue', code: '8CZA', hex: '#1e3554', glow: 'rgba(30, 53, 84, 0.2)' },
    { name: 'Tango Red', code: '6DYE', hex: '#9b232a', glow: 'rgba(155, 35, 42, 0.2)' },
    { name: 'Chill Metallic', code: '8CUA', hex: '#888378', glow: 'rgba(136, 131, 120, 0.18)' }
  ],
  engineDates: {
    '1.6-ecoboost': '12/2010–12/2014',
    '1.6-tivct': '06/2007–12/2014',
    '2.0-duratec': '06/2007–12/2014',
    '2.0-ecoboost-203': '05/2010–12/2014',
    '2.0-ecoboost-240': '09/2010–12/2014'
  },
  inDepth: {
    defaultEngineId: '1.6-ecoboost',
    defaultGroupKey: 'petrol-ecoboost',
    engineCosts: {
      '1.6-ecoboost':     { group: 'petrol-ecoboost',   avgFuelL100: 7.9,  fuelPrice: 1.75, tax: 128, ins: 630, service: 360 },
      '1.6-tivct':        { group: 'petrol-na',         avgFuelL100: 7.9,  fuelPrice: 1.75, tax: 146, ins: 560, service: 290 },
      '2.0-duratec':      { group: 'petrol-na',         avgFuelL100: 8.5,  fuelPrice: 1.75, tax: 184, ins: 610, service: 300 },
      '2.0-ecoboost-203': { group: 'petrol-powershift', avgFuelL100: 9.1,  fuelPrice: 1.75, tax: 204, ins: 730, service: 440 },
      '2.0-ecoboost-240': { group: 'petrol-powershift', avgFuelL100: 9.6,  fuelPrice: 1.75, tax: 218, ins: 790, service: 460 },
      '2.3-duratec':      { group: 'petrol-na',         avgFuelL100: 10.2, fuelPrice: 1.75, tax: 226, ins: 670, service: 330 },
      '2.5t':             { group: 'petrol-5cyl',       avgFuelL100: 10.7, fuelPrice: 1.75, tax: 268, ins: 810, service: 430 },
      '1.6-tdci':         { group: 'diesel-tdci',       avgFuelL100: 5.3,  fuelPrice: 1.65, tax: 188, ins: 610, service: 350 },
      '1.8-tdci':         { group: 'diesel-18',         avgFuelL100: 6.2,  fuelPrice: 1.65, tax: 278, ins: 620, service: 380 },
      '2.0-tdci':         { group: 'diesel-tdci',       avgFuelL100: 5.9,  fuelPrice: 1.65, tax: 248, ins: 670, service: 380 },
      '2.2-tdci':         { group: 'diesel-tdci',       avgFuelL100: 6.8,  fuelPrice: 1.65, tax: 326, ins: 750, service: 420 }
    },
    groups: {
      'petrol-ecoboost': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average (2011+)', note: 'Post-2010 facelift chassis & steering hold up well; watch cooling hoses' },
            { source: 'ADAC Pannenstatistik', value: 'Average (Cooling Recall)', note: 'Punchy 1.6 turbo, but coolant-pipe & reservoir recall proof is essential' },
            { source: 'WhatCar? Survey', value: '91.4% Reliability', note: 'Chassis earns praise; early 1.6 EcoBoost coolant-loss history hurts scores' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich (ab 2011)', note: 'Facelift-Fahrwerk und Lenkung sehr stabil; Kühlmittelschläuche genau prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Mittel (Kühlmittel-Rückruf)', note: 'Durchzugsstarker 1.6-Turbo, aber Kühlmittel-Rückruf muss zwingend belegt sein' },
            { source: 'WhatCar? Umfrage', value: '91,4 % Zuverlässigkeit', note: 'Tolles Fahrwerk; frühe 1.6-EcoBoost-Kühlmittelverluste drücken den Schnitt' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего (2011+)', note: 'Крепкое рестайлинговое шасси и рулевое; важно проверить шланги охлаждения' },
            { source: 'ADAC Pannenstatistik', value: 'Средне (отзыв по охлаждению)', note: 'Бодрый 1.6 турбо, но обязательна отметка об отзывной по системе охлаждения' },
            { source: 'Рейтинг WhatCar?', value: '91,4% надёжности', note: 'Отличное шасси; оценку снижают ранние утечки антифриза на 1.6 EcoBoost' }
          ]
        },
        extendedChecks: {
          en: [
            'Verify Ford dealer completion of the 1.6 EcoBoost cooling-system recall (coolant level sensor & revised bypass pipe).',
            'Inspect the coolant expansion tank for hairline cracks and look beneath the water pump for dried pink crust.',
            'Check the Convers+ instrument cluster screen for flickering or dead backlight zones (solder-joint fatigue).',
            'Listen over bumps from the rear axle — worn trailing-arm bushes and lower wishbones are common past 140,000 km.'
          ],
          de: [
            'Ford-Nachweis über den durchgeführten 1.6-EcoBoost-Kühlmittel-Rückruf (Sensor & geänderte Leitung) prüfen.',
            'Kühlmittel-Ausgleichsbehälter auf Haarrisse und Wasserpumpe auf getrocknete rosa Rückstände kontrollieren.',
            'Convers+-Kombiinstrument auf Flackern, Aussetzer oder kalte Lötstellen prüfen.',
            'An der Hinterachse auf Poltern achten — Längslenkerbuchsen verschleißen ab ca. 140.000 km gern.'
          ],
          ru: [
            'Проверить выполнение дилерской отзывной кампании по системе охлаждения 1.6 EcoBoost (датчик уровня и патрубок).',
            'Осмотреть расширительный бачок на микротрещины и помпу на следы подтекания антифриза.',
            'Проверить цветной экран приборки Convers+ на мерцание и пропадание подсветки из-за пайки.',
            'Проверить заднюю подвеску на кочках — большие сайлентблоки продольных рычагов часто сдаются к 140 тыс. км.'
          ]
        },
        savingsNote: {
          en: 'Low ~€128/yr Euro 5 tax and ~7.9 L/100 km fuel use undercut older 2.0/2.3 NA petrols by €250–€450/yr, provided cooling-system maintenance keeps head overheating away.',
          de: 'Niedrige Euro-5-Steuer (~128 €/J.) und ca. 7,9 L/100 km sparen 250–450 €/Jahr vs. alte 2.0/2.3-Sauger — sofern das Kühlsystem sauber gewartet bleibt.',
          ru: 'Низкий налог Euro 5 и расход около 7,9 л/100 км экономят €250–450/год против старых атмосферников 2.0/2.3 при исправной системе охлаждения.'
        },
        market: {
          supplyDemand: {
            en: 'Popular 2011–2014 facelift petrol choice; buyers heavily favor cars with verified cooling-recall paperwork and timing-belt history.',
            de: 'Gefragter 2011–2014-Facelift-Benziner; Käufer achten stark auf belegten Kühlmittel-Rückruf und frischen Zahnriemen.',
            ru: 'Популярный рестайлинговый бензин 2011–2014 гг.; экземпляры с отметкой об отзыве охлаждения и свежим ГРМ ценятся выше.'
          },
          sweetSpot: {
            en: '2012–2014 Titanium 1.6 EcoBoost (6-MT) under 135,000 km with cooling recall & timing-belt proof (€6,800–€8,200).',
            de: '2012–2014 Titanium 1.6 EcoBoost (6-Gang) unter 135.000 km mit Kühlmittel-Rückruf & Zahnriemen-Beleg (6.800–8.200 €).',
            ru: '2012–2014 гг. Titanium 1.6 EcoBoost (6-МКПП) до 135 тыс. км с чеками по отзыву и ремню ГРМ (€6 800–8 200).'
          },
          outlook3to5yr: {
            en: 'Drops gradually toward €4,300–€5,400 over 3–5 yrs; spacious liftback practicality keeps private family demand steady.',
            de: 'Sinkt ruhig Richtung 4.300–5.400 € in 3–5 Jahren — enormer Nutzwert hält die Nachfrage bei Familien stabil.',
            ru: 'Плавно снизится до €4 300–5 400 через 3–5 лет: огромный салон и лифтбек сохраняют семейный спрос.'
          }
        },
        watchoutExtra: {
          en: [
            'Coolant loss from brittle plastic pipes or the degas bottle can quickly warp the alloy head if driven without a level sensor.',
            'Dual-mass flywheel & timing belt (around 160,000–200,000 km / 10 yrs) represent key mid-life maintenance costs.'
          ],
          de: [
            'Kühlmittelverlust durch spröde Leitungen oder Ausgleichsbehälter führt ohne Level-Sensor rasch zu Überhitzung am Alukopf.',
            'Zweimassenschwungrad und Zahnriemen (ca. 160.000–200.000 km / 10 Jahre) bilden die wichtigsten größeren Wartungsposten.'
          ],
          ru: [
            'Утечка антифриза из-за хрупких патрубков или бачка без датчика уровня грозит быстрым перегревом ГБЦ.',
            'Двухмассовый маховик и ремень ГРМ (к 160–200 тыс. км или 10 годам) — главные плановые траты.'
          ]
        }
      },
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid (Mechanicals)', note: 'Mazda-derived 2.0/2.3 chain engines & 1.6 Ti-VCT rarely fail mechanical checks' },
            { source: 'ADAC Pannenstatistik', value: 'Highly Reliable', note: 'Zero turbo, zero DPF & Aisin 6-AT (on 2.3) make these the safest old Mondeos' },
            { source: 'WhatCar? Survey', value: '95.0% Reliability', note: 'Simple port-injected petrol durability offsets higher fuel burn' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide (Technik top)', note: 'Mazda-basierte 2.0/2.3-Kettenmotoren und 1.6 Ti-VCT überzeugen bei der Prüfung' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Kein Turbo, kein DPF — und der 2.3 nutzt die robuste Aisin-Wandlerautomatik' },
            { source: 'WhatCar? Umfrage', value: '95,0 % Zuverlässigkeit', note: 'Schlichte Saugrohreinspritzung gleicht den etwas höheren Verbrauch durch Ruhe aus' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Надёжен (по технике)', note: 'Цепные моторы 2.0/2.3 (база Mazda) и 1.6 Ti-VCT редко получают замечания по агрегатам' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Без турбины и DPF, а на 2.3 стоит крепкий классический 6-АКПП Aisin' },
            { source: 'Рейтинг WhatCar?', value: '95,0% надёжности', note: 'Простой распределённый впрыск компенсирует повышенный расход минимальными поломками' }
          ]
        },
        extendedChecks: {
          en: [
            'On 2.0 / 2.3 Duratec (Mazda L-series), check cold idle & oil history — neglected cars can develop piston-ring oil consumption.',
            'On 2.3 Duratec with the Aisin 6-speed torque-converter automatic, verify smooth 2–3 shifts and ask for ATF changes every 60,000 km.',
            'On 1.6 Ti-VCT, verify timing-belt + water-pump replacement (every 8 yrs / 160,000 km) and listen for VCT cam-gear rattle.',
            'Check Convers+ display soldering, front windscreen heated-element zones, and rear trailing-arm bushes.'
          ],
          de: [
            'Bei 2.0 / 2.3 Duratec auf saubere Ölwechsel-Historie achten — vernachlässigte Exemplare neigen ab hoher Laufleistung zu Ölverbrauch.',
            'Bei der Aisin-6-Stufen-Automatik im 2.3 Duratec weiche Schaltvorgänge (besonders 2–3) und Getriebeölwechsel prüfen.',
            'Beim 1.6 Ti-VCT Zahnriemenwechsel (alle 8 Jahre / 160.000 km) und ruhige Nockenwellenversteller beim Kaltstart checken.',
            'Convers+-Display, alle Heizdrähte der Frontscheibe und hintere Längslenkerbuchsen testen.'
          ],
          ru: [
            'На 2.0 / 2.3 Duratec проверить историю замен масла — при затянутых интервалах на больших пробегах залегают кольца.',
            'На 2.3 Duratec с классическим 6-АКПП Aisin проверить плавность переключений и замену ATF каждые 60 тыс. км.',
            'На 1.6 Ti-VCT проверить замену ремня ГРМ (раз в 8 лет / 160 тыс. км) и отсутствие стука фазорегуляторов.',
            'Проверить приборку Convers+, нити обогрева лобового стекла и задние сайлентблоки.'
          ]
        },
        savingsNote: {
          en: 'Higher ~7.9–10.2 L/100 km fuel use, yet zero turbo, PowerShift DCT, or DPF bills save €600+ in surprise repairs vs. complex turbo/diesel Mondeos.',
          de: 'Höherer Verbrauch (7,9–10,2 L/100 km), aber ohne Turbo, PowerShift-DKG oder DPF bleiben teure Überraschungen praktisch aus.',
          ru: 'Расход 7,9–10,2 л/100 км выше среднего, но отсутствие турбины, робота PowerShift и DPF страхует от крупных внеплановых счетов.'
        },
        market: {
          supplyDemand: {
            en: 'Steady demand from risk-averse buyers seeking cheap-to-fix 2.0 Duratec manuals or 2.3 Aisin automatics.',
            de: 'Stabile Nachfrage bei Sicherheitskäufern, die den robusten 2.0 Duratec Schalter oder den 2.3 mit Aisin-Automatik suchen.',
            ru: 'Устойчивый спрос среди практичных покупателей, ищущих простой 2.0 Duratec на МКПП или 2.3 с надёжным автоматом Aisin.'
          },
          sweetSpot: {
            en: '2009–2012 2.0 Duratec (145 HP, 5-MT) or 2.3 Duratec (Aisin 6-AT) Titanium under 150,000 km (€6,200–€7,600).',
            de: '2009–2012 2.0 Duratec (145 PS, 5-Gang) oder 2.3 Duratec (Aisin 6-AT) Titanium unter 150.000 km (6.200–7.600 €).',
            ru: '2009–2012 гг. 2.0 Duratec (145 л.с., МКПП) или 2.3 Duratec (Aisin 6-АКПП) Titanium до 150 тыс. км (€6 200–7 600).'
          },
          outlook3to5yr: {
            en: 'Very flat value curve (~€3,800–€4,900 in 3–5 yrs); simple port-injected petrol durability keeps resale effortless.',
            de: 'Sehr flacher Wertverlust (ca. 3.800–4.900 € in 3–5 Jahren) — schlichte Sauger bleiben im Privatmarkt leicht verkäuflich.',
            ru: 'Минимальное падение цены (€3 800–4 900 через 3–5 лет): простые атмосферники всегда легко продать.'
          }
        },
        watchoutExtra: {
          en: [
            '1.6 Ti-VCT (120 HP) feels sluggish in a 1.5-tonne Mondeo, while 2.3 Duratec (Aisin 6-AT) burns ~10 L/100 km in mixed driving.',
            'Intake manifold swirl flaps on older 2.0 Duratec engines can rattle at idle around 160,000+ km.'
          ],
          de: [
            'Der 1.6 Ti-VCT (120 PS) wirkt im 1,5-Tonnen-Mondeo zäh, während der 2.3 Duratec (Aisin-Automatik) im Schnitt ca. 10 L/100 km braucht.',
            'Drallklappen im Ansaugkrümmer älterer 2.0 Duratec können jenseits von 160.000 km im Leerlauf klappern.'
          ],
          ru: [
            'Базовый 1.6 Ti-VCT (120 л.с.) тяжеловат для 1,5-тонного кузова, а 2.3 Duratec (Aisin 6-АКПП) расходует около 10 л/100 км.',
            'На старых 2.0 Duratec к 160+ тыс. км иногда начинают стучать вихревые заслонки впускного коллектора.'
          ]
        }
      },
      'petrol-powershift': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Average (Watch Exhaust/Oil)', note: 'Strong chassis & brakes, yet high-output turbo heat stresses manifolds & gaskets' },
            { source: 'ADAC Pannenstatistik', value: 'Caution (PowerShift DCT)', note: '6-speed wet PowerShift DCT needs strict 60k km oil & filter service' },
            { source: 'WhatCar? Survey', value: '88.9% Reliability', note: 'Fast and refined, but DCT mechatronics & turbo manifold repairs pull scores down' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Durchschnitt (Krümmer/Öl)', note: 'Starkes Fahrwerk, aber hohe Abgastemperaturen belasten Krümmer & Dichtungen' },
            { source: 'ADAC Pannenstatistik', value: 'Vorsicht (PowerShift)', note: 'Das 6-Gang-PowerShift-DKG braucht zwingend alle 60.000 km Öl- und Filterwechsel' },
            { source: 'WhatCar? Umfrage', value: '88,9 % Zuverlässigkeit', note: 'Schnell und souverän, doch PowerShift-Mechatronik & Turbokrümmer drücken die Quote' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Средний (выпуск/масло)', note: 'Ходовая крепкая, но высокая термонагрузка 2.0 турбо бьёт по коллектору и прокладкам' },
            { source: 'ADAC Pannenstatistik', value: 'Внимание (PowerShift)', note: 'Мокрый робот PowerShift строго требует замены масла и фильтра каждые 60 тыс. км' },
            { source: 'Рейтинг WhatCar?', value: '88,9% надёжности', note: 'Мощный и комфортный, но ремонт мехатроника PowerShift и турбоколлектора снижает балл' }
          ]
        },
        extendedChecks: {
          en: [
            'Demand ironclad receipts showing PowerShift 6DCT450 wet dual-clutch oil & external filter changes every 60,000 km / 4 yrs.',
            'Test slow reverse parking, stop-start creeping, and hot 1–2–3 shifts for shudder, flare, or delayed engagement.',
            'Inspect around the turbo exhaust manifold (integrated cast housing) for cracking, exhaust tick on cold start, or oil seepage.',
            'Verify 10,000–12,000 km synthetic oil history — direct injection + high boost heat stress turbo bearings and pistons.'
          ],
          de: [
            'Lückenlose Belege für PowerShift-Getriebeöl- und Filterwechsel alle 60.000 km / 4 Jahre vorlegen lassen.',
            'Bei warmem Getriebe langsames Rangieren rückwärts sowie 1–2–3-Schaltvorgänge auf Ruckeln oder Verzögerung testen.',
            'Integrierten Abgaskrümmer/Turbolader beim Kaltstart auf Risse, Abgasgeräusch und Ölverlust untersuchen.',
            'Kurze Ölwechsel-Intervalle (10.000–12.000 km) prüfen — hoher Ladedruck fordert Öl und Kolben stark.'
          ],
          ru: [
            'Потребовать чеки на замену масла и внешнего фильтра робота PowerShift (6DCT450) каждые 60 тыс. км / 4 года.',
            'На горячую проверить медленное движение в горку, задний ход и переключения 1–2–3 на отсутствие рывков и задержек.',
            'Осмотреть турбоколлектор на трещины (свист/цокот на холодную) и подтёки масла.',
            'Проверить замены моторного масла раз в 10–12 тыс. км — высокая нагрузка требует свежего масла.'
          ]
        },
        savingsNote: {
          en: 'Strong 203–240 HP pace costs ~9.1–9.6 L/100 km plus ~€320 PowerShift fluid servicing every 60k km — clearly built for performance rather than budget motoring.',
          de: 'Starke 203–240 PS kosten rund 9,1–9,6 L/100 km plus ca. 320 € PowerShift-Service alle 60.000 km — Fokus liegt klar auf Souveränität statt Sparen.',
          ru: 'Динамика 203–240 л.с. требует 9,1–9,6 л/100 км и ТО робота PowerShift (~€320 каждые 60 тыс. км) — выбор ради мощности, а не экономии.'
        },
        market: {
          supplyDemand: {
            en: 'Fast 203/240 HP Titanium & Titanium S models attract buyers wanting affordable executive pace, though PowerShift fears slow unserviced listings.',
            de: 'Schnelle 203/240-PS-Titanium-S sind als günstige Power-Limousine gefragt, stehen ohne PowerShift-Servicebelege aber länger.',
            ru: 'Мощные Titanium и Titanium S (203/240 л.с.) привлекают ценой, но машины без истории обслуживания PowerShift продаются туго.'
          },
          sweetSpot: {
            en: '2011–2014 Titanium / Titanium S 2.0 EcoBoost 203 HP under 135,000 km with documented 60k km PowerShift services (€7,600–€9,400).',
            de: '2011–2014 Titanium / Titanium S 2.0 EcoBoost 203 PS unter 135.000 km mit belegtem 60-Tkm-PowerShift-Service (7.600–9.400 €).',
            ru: '2011–2014 гг. Titanium / Titanium S 2.0 EcoBoost 203 л.с. до 135 тыс. км с подтверждённым ТО PowerShift (€7 600–9 400).'
          },
          outlook3to5yr: {
            en: 'Drops toward €4,800–€6,200 over 3–5 yrs; 240 HP Titanium S holds slightly firmer if gearbox & turbo are healthy.',
            de: 'Sinkt in 3–5 Jahren Richtung 4.800–6.200 € — gepflegte 240-PS-Titanium-S halten bei intaktem Getriebe etwas stabiler.',
            ru: 'Снизится к €4 800–6 200 за 3–5 лет; ухоженные Titanium S 240 л.с. с исправным роботом держат цену лучше.'
          }
        },
        watchoutExtra: {
          en: [
            'Unlike the 2.3 Duratec & 2.2 TDCi (which use a durable Aisin 6-speed torque converter), 2.0 EcoBoost uses the wet 6-speed PowerShift DCT (expensive €1,800–€3,000 clutch/mechatronic rebuild if neglected).',
            'Integrated sheet-metal exhaust manifold cracks & turbo wastegate wear are known thermal weak points past 120,000–160,000 km.'
          ],
          de: [
            'Anders als 2.3 Duratec & 2.2 TDCi (robuste Aisin-6-Stufen-Wandlerautomatik) nutzt der 2.0 EcoBoost das PowerShift-DKG (Überholung bei Wartungsstau 1.800–3.000 €).',
            'Der integrierte Blech-Abgaskrümmer reißt bei hoher Hitzebelastung ab 120.000–160.000 km gelegentlich.'
          ],
          ru: [
            'В отличие от 2.3 Duratec и 2.2 TDCi (где стоит надёжный автомат Aisin), 2.0 EcoBoost оснащён роботом PowerShift (ремонт при запущенном ТО — €1 800–3 000).',
            'Тонкостенный выпускной коллектор и вестгейт турбины подвержены термотрещинам на пробегах 120–160 тыс. км.'
          ]
        }
      },
      'petrol-5cyl': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average', note: 'Pre-facelift enthusiast chassis; Volvo 5-cylinder internals age remarkably well' },
            { source: 'ADAC Pannenstatistik', value: 'Solid (Check PCV/Belt)', note: 'Dependable Volvo B5254T3 6-MT drivetrain; watch PCV oil trap & cooling hoses' },
            { source: 'WhatCar? Survey', value: '93.8% Reliability', note: 'Stout 2.5T block & manual gearbox avoid PowerShift/DPF headaches entirely' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich', note: 'Solide Mechanik — der Volvo-Fünfzylinder-Block erreicht sehr hohe Laufleistungen' },
            { source: 'ADAC Pannenstatistik', value: 'Solide (KGE/Riemen prüfen)', note: 'Robuster B5254T3 mit 6-Gang-Schalter; Kurbelgehäuseentlüftung & Schläuche prüfen' },
            { source: 'WhatCar? Umfrage', value: '93,8 % Zuverlässigkeit', note: 'Kein PowerShift und kein DPF — deutlich zäher als spätere 2.0-EcoBoost-Modelle' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего', note: 'Крепкий шведский 5-цилиндровый блок Volvo отлично держит большие пробеги' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен (ВКГ/ремень)', note: 'Связка B5254T3 с 6-МКПП вынослива; проверять клапан ВКГ и патрубки охлаждения' },
            { source: 'Рейтинг WhatCar?', value: '93,8% надёжности', note: 'Нет робота PowerShift и сажевого фильтра — ресурс выше, чем у позднего 2.0 EcoBoost' }
          ]
        },
        extendedChecks: {
          en: [
            'Check PCV oil-trap diaphragm with the engine idling — a high-pitched whistle or vacuum pull on the dipstick signals a torn membrane.',
            'Verify timing-belt + water-pump replacement (every 10 yrs / 160,000–200,000 km) and inspect turbo coolant hoses for age.',
            'Check clutch & dual-mass flywheel engagement under full 3rd-gear boost and verify unmodified ECU/exhaust if originality matters.',
            'Inspect rear trailing-arm bushes, Convers+ screen solder joints, and heated windscreen function.'
          ],
          de: [
            'Im Leerlauf Ölpeilstab leicht ziehen — Pfeifen oder starker Unterdruck weist auf eine gerissene Membran der Kurbelgehäuseentlüftung (KGE/PCV) hin.',
            'Zahnriemen- inkl. Wasserpumpenwechsel (alle 10 Jahre / 160–200 Tkm) und Alter der Kühlmittelschläuche prüfen.',
            'Kupplung/ZMS unter Volllast im 3. Gang testen und auf unverbastelten Serienzustand achten.',
            'Hintere Längslenkerbuchsen, Convers+-Display und Frontscheibenheizung kontrollieren.'
          ],
          ru: [
            'На холостых приподнять щуп масла: свист или сильное разрежение говорят о порванной мембране маслоотделителя ВКГ (PCV).',
            'Проверить замену ремня ГРМ с помпой (раз в 10 лет / 160–200 тыс. км) и состояние резиновых патрубков.',
            'Проверить сцепление и маховик под полной тягой на 3-й передаче, а также отсутствие нештатного чип-тюнинга.',
            'Осмотреть задние сайлентблоки, дисплей Convers+ и обогрев лобового стекла.'
          ]
        },
        savingsNote: {
          en: 'At ~10.7 L/100 km plus higher Euro 4 tax & insurance, the 2.5T is expensive to feed, yet its stout 6-MT Volvo 5-cylinder often costs less in major repairs than a 2.0 EcoBoost PowerShift.',
          de: 'Mit ca. 10,7 L/100 km und höherer Steuer/Versicherung im Unterhalt teuer, doch der robuste Volvo-5-Zylinder (6-Gang) spart oft teure Getriebe-/Krümmer-Schäden.',
          ru: 'Расход ~10,7 л/100 км и высокий налог недёшевы, однако крепкий 5-цилиндровый Volvo с 6-МКПП обходится без дорогого ремонта робота PowerShift.'
        },
        market: {
          supplyDemand: {
            en: 'Rare cult-classic sleeper; unmodified Titanium / Titanium S 2.5T sedans command enthusiastic private-buyer demand.',
            de: 'Seltener Fünfzylinder-Sleeper; unverbastelte Titanium- und Titanium-S-2.5T genießen echte Liebhabernachfrage.',
            ru: 'Редкий харизматичный «слипер»; стоковые Titanium и Titanium S 2.5T стабильно востребованы среди энтузиастов.'
          },
          sweetSpot: {
            en: 'Unmodified 2008–2010 Titanium / Titanium S 2.5T (6-MT) under 170,000 km with belt & PCV proof (€7,800–€9,600).',
            de: 'Unverbastelter 2008–2010 Titanium / Titanium S 2.5T (6-Gang) unter 170.000 km mit Zahnriemen-/KGE-Beleg (7.800–9.600 €).',
            ru: 'Стоковый 2008–2010 гг. Titanium / Titanium S 2.5T (6-МКПП) до 170 тыс. км с чеками по ГРМ и ВКГ (€7 800–9 600).'
          },
          outlook3to5yr: {
            en: 'Flattening enthusiast floor (~€5,800–€7,400 in 3–5 yrs); the last 5-cylinder Mondeo holds value far better than standard Mk4s.',
            de: 'Sehr stabiler Liebhaber-Boden (ca. 5.800–7.400 € in 3–5 Jahren) — als letzter 5-Zylinder-Mondeo extrem wertstabil.',
            ru: 'Устойчивый ценник энтузиастов (€5 800–7 400 через 3–5 лет): последний 5-цилиндровый Mondeo дешевеет медленнее обычных версий.'
          }
        },
        watchoutExtra: {
          en: [
            'Failed PCV oil-trap diaphragm pressurizes crankcase seals (cam/crank oil leaks) if left whistling.',
            'High fuel consumption (~10–11.5 L/100 km) and Euro 4 emission status require budgeting for running costs.'
          ],
          de: [
            'Eine defekte KGE-/PCV-Membran drückt Kurbelgehäusedruck gegen Simmerringe — bei Pfeifgeräuschen sofort tauschen.',
            'Hoher Realverbrauch (ca. 10–11,5 L/100 km) und Euro-4-Einstufung treiben die laufenden Kosten nach oben.'
          ],
          ru: [
            'Порванная мембрана ВКГ создаёт давление в картере и выдавливает сальники распредвалов — менять сразу при появлении свиста.',
            'Высокий реальный расход (10–11,5 л/100 км) и класс Euro 4 заметно увеличивают годовые расходы.'
          ]
        }
      },
      'diesel-18': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Below Average (Age)', note: 'High-mileage early 2007–2009 fleet cars show suspension & wet-belt wear' },
            { source: 'ADAC Pannenstatistik', value: 'Caution (Wet Belt)', note: 'Cast-iron Lynx block is tough, but lower wet timing belt can snap without proof' },
            { source: 'WhatCar? Survey', value: '88.2% Reliability', note: 'No DPF helps urban trips, yet wet-belt, starter & DMF age lower reliability' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Unterdurchschnittlich (Alter)', note: 'Frühe 2007–2009-Flottenwagen zeigen altersbedingt Achs- und Verschleißmängel' },
            { source: 'ADAC Pannenstatistik', value: 'Vorsicht (Nassriemen)', note: 'Robuster Gussblock, aber der untere im Öl laufende Zahnriemen muss belegt sein' },
            { source: 'WhatCar? Umfrage', value: '88,2 % Zuverlässigkeit', note: 'Ohne DPF weniger Kurzstreckenärger, doch Nassriemen, Anlasser & ZMS drücken die Note' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Ниже среднего (возраст)', note: 'Ранние машины 2007–2009 гг. имеют солидные пробеги, износ подвески и узлов ГРМ' },
            { source: 'ADAC Pannenstatistik', value: 'Внимание (ремень в масле)', note: 'Чугунный блок Lynx вынослив, но критична замена нижнего мокрого ремня/цепи' },
            { source: 'Рейтинг WhatCar?', value: '88,2% надёжности', note: 'Отсутствие DPF плюс для города, но износ маховика и привода ТНВД снижает оценку' }
          ]
        },
        extendedChecks: {
          en: [
            'Demand documented proof of BOTH the upper timing belt AND the lower oil-bathed wet belt/chain cassette conversion.',
            'Listen carefully at idle with clutch pressed vs. released for heavy dual-mass flywheel knocking.',
            'Test cold-start cranking speed — iron filings from DMF wear frequently jam the starter motor.',
            'Inspect rear trailing-arm bushes, Convers+ display flicker, and heated front windscreen operation.'
          ],
          de: [
            'Zwingend Rechnungen für den oberen Zahnriemen UND den unteren im Ölbad laufenden Zahnriemen (bzw. Ketten-Umbau) prüfen.',
            'Im Leerlauf Kupplung treten und lösen — starkes Schlagen kündigt ein fälliges Zweimassenschwungrad an.',
            'Kaltstartverhalten testen: Abrieb des ZMS setzt dem Anlasser häufig zu.',
            'Hintere Längslenkerbuchsen, Convers+-Display und Frontscheibenheizung kontrollieren.'
          ],
          ru: [
            'Обязательно проверить чеки на замену не только верхнего ремня ГРМ, но и нижнего ремня в масляной ванне (или перехода на цепь).',
            'На холостых выжать и отпустить сцепление — стук указывает на износ двухмассового маховика.',
            'Проверить бодрость прокрутки стартера: стружка от маховика нередко выводит стартер из строя.',
            'Осмотреть задние сайлентблоки, экран Convers+ и обогрев лобового стекла.'
          ]
        },
        savingsNote: {
          en: 'Low ~€4,900 buy-in and zero DPF avoid particulate-filter bills, yet lower wet-belt (~€900–€1,200) and DMF replacement quickly dwarf the low purchase price.',
          de: 'Günstiger Kaufpreis (~4.900 €) ohne DPF-Kosten — doch ein fälliger Nassriemen-Tausch (900–1.200 €) plus ZMS übersteigt schnell den Preisvorteil.',
          ru: 'Низкая цена входа (~€4 900) и отсутствие DPF привлекательны, но замена нижнего ремня в масле (€900–1 200) и маховика нивелируют выгоду.'
        },
        market: {
          supplyDemand: {
            en: 'Budget-tier Euro 4 diesel with sluggish 100 HP pace; low demand outside rural or export buyers.',
            de: 'Günstiger Euro-4-Einstiegsdiesel mit zähen 100 PS — außerhalb ländlicher Regionen kaum gefragt.',
            ru: 'Бюджетный дизель Euro 4 со скромной динамикой 100 л.с. — спрос ограничен за пределами регионов.'
          },
          sweetSpot: {
            en: 'Only documented cars converted from the lower wet belt to the updated chain cassette (€4,500–€5,400); otherwise step up to 2.0 TDCi.',
            de: 'Nur Exemplare mit belegtem Umbau auf die untere Steuerkette (4.500–5.400 €) — sonst klar den 2.0 TDCi vorziehen.',
            ru: 'Только экземпляры с задокументированным переводом нижнего привода на цепь (€4 500–5 400); иначе лучше взять 2.0 TDCi.'
          },
          outlook3to5yr: {
            en: 'Settles near €2,500–€3,500 floor over 3–5 yrs; Euro 4 restrictions limit urban resale.',
            de: 'Pendelt sich in 3–5 Jahren bei 2.500–3.500 € ein — Euro-4-Norm bremst den Stadt-Wiederverkauf.',
            ru: 'Опустится к базовому уровню €2 500–3 500 через 3–5 лет из-за ограничений класса Euro 4.'
          }
        },
        watchoutExtra: {
          en: [
            'Ford 1.8 TDCi (2008+) replaced the lower timing chain with a rubber belt submerged in hot engine oil — snapping destroys the engine.',
            '100 HP feels underpowered for a 1.55-tonne Mondeo when loaded on motorways.'
          ],
          de: [
            'Ab 2008 ersetzte Ford die untere Steuerkette durch einen im Öl laufenden Zahnriemen — reißt er, droht ein Kapital-Motorschaden.',
            '100 PS wirken im rund 1,55 Tonnen schweren Mondeo auf der Autobahn und am Berg spürbar zäh.'
          ],
          ru: [
            'С 2008 года нижнюю цепь привода ТНВД заменили на ремень в масле — его обрыв приводит к тяжёлой поломке двигателя.',
            'Мощности 100 л.с. заметно не хватает крупному Mondeo при обгонах и полной загрузке.'
          ]
        }
      },
      'diesel-tdci': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average (2.0 DW10)', note: 'PSA-derived 2.0 & 2.2 TDCi blocks regularly pass 250k–350k km on motorways' },
            { source: 'ADAC Pannenstatistik', value: 'Strong Highway Cruiser', note: 'Very reliable with 6-MT or Aisin 6-AT (2.2); PowerShift models need 60k fluid proof' },
            { source: 'WhatCar? Survey', value: '93.2% Reliability', note: '2.0 TDCi ranks as the standout high-mileage workhorse of the BA7 range' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich (2.0 DW10)', note: 'PSA-basierte 2.0 & 2.2 TDCi erreichen auf Langstrecken häufig 250–350 Tkm' },
            { source: 'ADAC Pannenstatistik', value: 'Starker Langstreckler', note: 'Sehr verlässlich mit 6-Gang oder Aisin-6-AT (2.2); PowerShift braucht 60-Tkm-Ölwechsel' },
            { source: 'WhatCar? Umfrage', value: '93,2 % Zuverlässigkeit', note: 'Der 2.0 TDCi gilt als ausgereiftester Dauerläufer der gesamten BA7-Baureihe' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего (2.0 DW10)', note: 'Дизели 2.0 и 2.2 TDCi (PSA) уверенно выхаживают 250–350 тыс. км на трассе' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжный трассовый дизель', note: 'Крепкий с 6-МКПП и 6-АКПП Aisin (2.2); робот PowerShift требует ТО каждые 60 тыс. км' },
            { source: 'Рейтинг WhatCar?', value: '93,2% надёжности', note: 'Мотор 2.0 TDCi признан самым удачным и живучим в линейке Mondeo Mk4' }
          ]
        },
        extendedChecks: {
          en: [
            'Identify the automatic gearbox: 2.2 TDCi uses a tough Aisin 6-AT torque converter, whereas 2.0 TDCi autos (2010+) use PowerShift needing 60,000 km fluid proof.',
            'Verify timing-belt + water-pump replacement (every 10 yrs / 180,000–200,000 km) and check DPF vaporizer/EGR operation.',
            'Listen at idle for dual-mass flywheel chatter and inspect around 1.6 TDCi injector seats for black tar blow-by.',
            'Check rear trailing-arm bushes, Convers+ instrument display flicker, and front/rear park sensor reliability.'
          ],
          de: [
            'Automatik genau unterscheiden: Der 2.2 TDCi nutzt die robuste Aisin-6-Stufen-Wandlerautomatik, der 2.0 TDCi (ab 2010) das PowerShift-DKG (60-Tkm-Ölwechsel nötig).',
            'Zahnriemen- inkl. Wasserpumpenwechsel (10 Jahre / 180–200 Tkm) sowie einwandfreie DPF-/AGR-Funktion prüfen.',
            'ZMS im Leerlauf abhören und beim 1.6 TDCi Injektorsitze auf schwarze Verkokung kontrollieren.',
            'Hintere Längslenkerbuchsen, Convers+-Tacho und Parksensoren durchchecken.'
          ],
          ru: [
            'Различать тип АКПП: на 2.2 TDCi стоит крепкий гидроавтомат Aisin, а на 2.0 TDCi (2010+) — робот PowerShift с заменой масла раз в 60 тыс. км.',
            'Проверить замену ремня ГРМ с помпой (10 лет / 180–200 тыс. км), прожиг DPF и работу клапана EGR.',
            'Послушать маховик на холостых, а на 1.6 TDCi осмотреть колодцы форсунок на предмет сажи.',
            'Проверить задние сайлентблоки, экран Convers+ и исправность датчиков парковки.'
          ]
        },
        savingsNote: {
          en: 'Frugal ~5.3–5.9 L/100 km on 1.6/2.0 TDCi delivers ~1,180–1,320 km tank range and lowest cost-per-km for 20,000+ km/yr highway drivers.',
          de: 'Sparsame 5,3–5,9 L/100 km (1.6/2.0 TDCi) ermöglichen bis zu 1.320 km Reichweite und niedrigste Kilometerkosten ab 20.000 km/Jahr.',
          ru: 'Расход 5,3–5,9 л/100 км на 1.6/2.0 TDCi даёт запас хода до 1 320 км и минимальную стоимость километра при пробегах от 20 тыс. км/год.'
        },
        market: {
          supplyDemand: {
            en: 'Highest used liquidity in the Mondeo range; 2.0 TDCi Titanium 6-MT and 2.2 TDCi Aisin 6-AT sell briskly to highway commuters.',
            de: 'Meistgefragte Mondeo-Motorisierung; gepflegte 2.0 TDCi Titanium (6-Gang) und 2.2 TDCi Aisin sind bei Vielfahrern schnell weg.',
            ru: 'Самая ликвидная часть предложения Mondeo; ухоженные 2.0 TDCi Titanium (МКПП) и 2.2 TDCi Aisin быстро находят покупателей.'
          },
          sweetSpot: {
            en: '2011–2014 Facelift 2.0 TDCi (140/163 or 115 HP 6-MT) Titanium under 170,000 km with belt & DPF service (€6,800–€8,400).',
            de: 'Facelift 2011–2014 2.0 TDCi (6-Gang) Titanium unter 170.000 km mit Zahnriemen- & DPF-Historie (6.800–8.400 €).',
            ru: 'Рестайлинг 2011–2014 гг. 2.0 TDCi (6-МКПП) Titanium до 170 тыс. км с историей ГРМ и DPF (€6 800–8 400).'
          },
          outlook3to5yr: {
            en: 'Settles cleanly around €4,200–€5,400 over 3–5 yrs; cheap parts & spacious Mondeo utility keep rural/commuter demand steady.',
            de: 'Pendelt sich in 3–5 Jahren bei 4.200–5.400 € ein — günstige Teile und riesiger Raum halten den Preis stabil.',
            ru: 'Через 3–5 лет сохранится около €4 200–5 400: доступные запчасти и огромный салон поддерживают стабильный спрос.'
          }
        },
        watchoutExtra: {
          en: [
            'DPF fuel-vaporizer glow plug (in the exhaust downpipe) on 2.0 TDCi can fail, blocking active regeneration until replaced.',
            'PowerShift wet DCT on 2.0 TDCi autos requires strict 60k km oil/filter proof; 2.2 TDCi Aisin 6-AT is noticeably tougher.'
          ],
          de: [
            'Die DPF-Kraftstoff-Glühkerze (Verdampfer im Abgasstrang) beim 2.0 TDCi fällt im Alter gern aus und verhindert dann die Regeneration.',
            'Beim 2.0 TDCi mit PowerShift auf strenge 60-Tkm-Ölwechsel achten; die Aisin-6-AT im 2.2 TDCi gilt als robuster.'
          ],
          ru: [
            'Испаритель DPF (свеча дожига в выхлопной трубе) на 2.0 TDCi со временем выходит из строя и блокирует прожиг фильтра.',
            'Робот PowerShift на 2.0 TDCi требует замены масла каждые 60 тыс. км; гидроавтомат Aisin на 2.2 TDCi заметно выносливее.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (BA7)', de: 'EU / DE Ausstattungslinien (BA7)', ru: 'Европейские комплектации (BA7)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2010+ facelift condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Facelift-Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: '2010 Facelift (Mk4 II) Upgrades', de: 'Facelift-Upgrades ab 2010 (Mk4 II)', ru: 'Обновления рестайлинга 2010 (Mk4 II)' },
      faceliftKicker: { en: '2010+ Refresh', de: 'Facelift 2010+', ru: 'Рестайлинг 2010+' },
      trims: [
        {
          id: 'ambiente',
          tierClass: 'tier-1',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Ambiente', de: 'Ambiente', ru: 'Ambiente' },
          delta: { en: '-€900 – €1,400', de: '-900 – 1.400 €', ru: '-€900 – €1 400' },
          isSweetSpot: false,
          summary: {
            en: 'Spartan fleet-spec starter trim with steel wheels, manual A/C, and standard analog gauges.',
            de: 'Schlichte Flotten-Basis mit Stahlfelgen, manueller Klimaanlage und einfachem Analog-Tacho.',
            ru: 'Скромная базовая версия со штампованными дисками, ручным кондиционером и простой приборкой.'
          },
          highlights: {
            en: ['16" steel wheels & manual A/C', '7 airbags (incl. knee) & ESP', 'Standard trip computer & cloth seats'],
            de: ['16"-Stahlfelgen & manuelle Klimaanlage', '7 Airbags (inkl. Knieairbag) & ESP', 'Einfacher Bordcomputer & Stoffsitze'],
            ru: ['Штампованные диски 16" и кондиционер', '7 подушек (вкл. коленную) и ESP', 'Базовый БК и тканевый салон']
          }
        },
        {
          id: 'trend',
          tierClass: 'tier-2',
          tier: { en: 'Core Daily', de: 'Alltags-Basis', ru: 'Стандарт' },
          name: { en: 'Trend', de: 'Trend', ru: 'Trend' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: false,
          summary: {
            en: 'Common mid-tier family spec adding dual-zone climate, cruise control, and alloy wheels.',
            de: 'Weit verbreitete Alltags-Linie mit 2-Zonen-Klimaautomatik, Tempomat und Leichtmetallfelgen.',
            ru: 'Популярная средняя версия с 2-зонным климатом, круиз-контролем и литыми дисками.'
          },
          highlights: {
            en: ['16" / 17" alloys & dual-zone climate', 'Cruise control & leather wheel', 'Heated windscreen (Quickclear) common'],
            de: ['16"/17"-Alufelgen & 2-Zonen-Klimaautomatik', 'Tempomat & Lederlenkrad', 'Oft beheizbare Frontscheibe'],
            ru: ['Диски 16"/17" и 2-зонный климат-контроль', 'Круиз-контроль и кожаный руль', 'Часто обогрев лобового стекла']
          }
        },
        {
          id: 'ghia',
          tierClass: 'tier-3',
          tier: { en: 'Classic Comfort', de: 'Komfort-Linie', ru: 'Комфорт' },
          name: { en: 'Ghia', de: 'Ghia', ru: 'Ghia' },
          delta: { en: '+€300 – €700', de: '+300 – 700 €', ru: '+€300 – €700' },
          isSweetSpot: false,
          summary: {
            en: 'Traditional plush touring trim with wood-effect accents, chrome trim, and extra convenience kit.',
            de: 'Klassisch-komfortable Linie mit Holzdekor, Chromakzenten, Licht-/Regensensor und Velours-Charakter.',
            ru: 'Классическая комфортная комплектация с декором под дерево, хромом и расширенным пакетом удобств.'
          },
          highlights: {
            en: ['17" multi-spoke alloys & chrome grille', 'Auto headlights, rain sensor & dimming mirror', 'Plush velour/comfort seats & wood-tone inlays'],
            de: ['17"-Vielspeichen-Alus & Chrom-Optik', 'Licht-/Regensensor & Abblendspiegel', 'Komfort-Sitze & klassische Holzoptik-Dekore'],
            ru: ['Диски 17" и хромированная отделка', 'Датчики света/дождя и автозатемнение зеркала', 'Мягкие комфортные сиденья и декор под дерево']
          }
        },
        {
          id: 'titanium',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Titanium', de: 'Titanium', ru: 'Titanium' },
          delta: { en: '+€600 – €1,100', de: '+600 – 1.100 €', ru: '+€600 – €1 100' },
          isSweetSpot: true,
          summary: {
            en: 'The Mondeo sweet spot — adds the signature Convers+ color cluster, sport seats, and key comfort tech.',
            de: 'Die begehrteste Linie — bringt das markante Convers+-Farbdisplay, Sportsitze und wichtige Komfort-Extras.',
            ru: 'Оптимальный выбор на вторичке — цветная приборка Convers+, комфортные сиденья и богатое оснащение.'
          },
          highlights: {
            en: ['Convers+ color LCD instrument cluster', 'Heated front seats & Quickclear screen', '17" alloys, keyless start & front/rear sensors'],
            de: ['Convers+-Farbdisplay im Kombiinstrument', 'Sitzheizung & beheizbare Frontscheibe', '17"-Alus, Startknopf & Parksensoren v/h'],
            ru: ['Цветной экран приборки Convers+', 'Подогрев сидений и лобового стекла', 'Диски 17", кнопка старта и парктроники']
          }
        },
        {
          id: 'titanium-s',
          tierClass: 'tier-6',
          tier: { en: 'Sport Spec', de: 'Sport-Linie', ru: 'Спорт' },
          name: { en: 'Titanium S', de: 'Titanium S', ru: 'Titanium S' },
          delta: { en: '+€1,200 – €1,900', de: '+1.200 – 1.900 €', ru: '+€1 200 – €1 900' },
          isSweetSpot: false,
          summary: {
            en: 'Sport-executive trim with Alcantara/red-stitched seats, factory aero body kit, and 18" wheels.',
            de: 'Sportliches Topmodell mit Alcantara-/Leder-Sitzen (rote Nähte), Bodykit und 18"-Rädern.',
            ru: 'Спортивный пакет с салоном кожа/алькантара (красная строчка), заводским обвесом и дисками 18".'
          },
          highlights: {
            en: ['18" Y-spoke alloys & factory aero body kit', 'Alcantara/leather seats with red stitching', 'Lowered sport chassis & aluminium pedals'],
            de: ['18"-Y-Speichen-Felgen & Styling-Bodykit', 'Alcantara/Leder-Sitze mit roten Ziernähten', 'Tieferes Sportfahrwerk & Alupedale'],
            ru: ['Диски 18" и заводской спортивный обвес', 'Салон кожа/алькантара с красной строчкой', 'Заниженная подвеска и алюминиевые накладки']
          }
        },
        {
          id: 'titanium-x',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Topmodell', ru: 'Флагман' },
          name: { en: 'Titanium X', de: 'Titanium X', ru: 'Titanium X' },
          delta: { en: '+€1,500 – €2,400', de: '+1.500 – 2.400 €', ru: '+€1 500 – €2 400' },
          isSweetSpot: false,
          summary: {
            en: 'Luxury-focused flagship adding full Windsor leather, Bi-Xenon lighting, and power memory seating.',
            de: 'Luxus-Topmodell mit Vollleder-Ausstattung, Bi-Xenon-Licht, Keyless Entry und elektrischer Sitzmemory.',
            ru: 'Флагманская люкс-версия с полной кожаной отделкой, биксеноном, бесключевым доступом и памятью кресел.'
          },
          highlights: {
            en: ['Full Windsor leather & ventilated front seats', 'Bi-Xenon headlights & Keyless Entry', 'Power driver seat with memory & Sony audio'],
            de: ['Vollleder-Sitze (oft klimatisiert)', 'Bi-Xenon-Scheinwerfer & Keyless Entry', 'Elektrischer Fahrersitz mit Memory & Sony-Audio'],
            ru: ['Полная кожа и вентиляция передних сидений', 'Биксеноновые фары и бесключевой доступ', 'Электропривод кресла с памятью и аудио Sony']
          }
        }
      ],
      matrix: [
        { feature: { en: '7 Airbags (incl. Driver Knee) & ESP', de: '7 Airbags (inkl. Knie) & ESP', ru: '7 подушек (вкл. коленную) и ESP' }, vals: ['std', 'std', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'std', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Convers+ Color Instrument Cluster', de: 'Convers+-Farbdisplay im Tacho', ru: 'Цветной дисплей приборки Convers+' }, vals: ['no', 'no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Windscreen (Quickclear)', de: 'Beheizbare Frontscheibe', ru: 'Обогрев лобового стекла' }, vals: ['opt', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats (Ventilated Opt.)', de: 'Sitzheizung vorn (Belüftung opt.)', ru: 'Подогрев сидений (вентиляция опц.)' }, vals: ['no', 'opt', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Front & Rear Parking Sensors', de: 'Parksensoren vorn & hinten', ru: 'Парктроники спереди и сзади' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Bi-Xenon Headlights & LED DRL (FL)', de: 'Bi-Xenon-Licht & LED-Tagfahrlicht (FL)', ru: 'Биксенон и LED ДХО (рестайлинг)' }, vals: ['no', 'no', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Aero Body Kit / Full Leather & Memory', de: 'Bodykit / Vollleder & Sitzmemory', ru: 'Обвес / Полная кожа и память кресел' }, vals: ['no', 'no', 'no', 'no', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Limousine-class 2,850 mm wheelbase gives adults huge rear knee room and a cavernous 540–1,460 L liftback cargo bay.',
          'Silver-painted center console plastic scratches easily on high-mile cars, while Convers+ clusters can need solder reflow.',
          'Quickclear heated front windscreen is a signature winter blessing — verify every vertical filament warms cleanly.'
        ],
        de: [
          'Oberklasse-Radstand (2.850 mm) liefert riesige Beinfreiheit im Fond sowie einen 540–1.460 L großen Fließheck-Kofferraum.',
          'Silber lackiertes Hartplastik in der Mittelkonsole verkratzt leicht; Convers+-Tachos zeigen im Alter teils Lötstellen-Flackern.',
          'Beheizbare Frontscheibe ist im Winter Gold wert — beim Kauf testen, ob alle Heizdrähte durchgängig abtauen.'
        ],
        ru: [
          'Колёсная база 2 850 мм дарит огромный простор сзади и гигантский багажник лифтбека 540–1 460 л.',
          'Серебристый пластик консоли легко царапается, а приборка Convers+ с возрастом иногда требует пропайки контактов.',
          'Обогрев лобового стекла отлично выручает зимой — при покупке проверьте целостность всех нитей.'
        ]
      },
      cabinByPowertrain: {
        '2.3-duratec': {
          en: '2.3 Duratec models pair exclusively with the durable Aisin 6-speed torque-converter automatic (with manual +/- gate), avoiding PowerShift dual-clutch risks while keeping cabin refinement relaxed.',
          de: 'Der 2.3 Duratec ist exklusiv an die robuste Aisin-6-Stufen-Wandlerautomatik gekoppelt und verzichtet völlig auf PowerShift-Doppelkupplungstechnik.',
          ru: 'Версия 2.3 Duratec оснащалась только классическим 6-ступенчатым автоматом Aisin, избавляя от рисков робота PowerShift и сохраняя плавный ход.'
        },
        '2.2-tdci': {
          en: '2.2 TDCi combines massive 400–420 Nm diesel torque with either a heavy-duty 6-speed manual or the dependable Aisin 6-speed torque-converter automatic (unlike 2.0 TDCi PowerShift), plus hushed Autobahn gearing.',
          de: 'Der 2.2 TDCi kombiniert 400–420 Nm Durchzug mit robustem 6-Gang-Schalter oder der soliden Aisin-6-Stufen-Wandlerautomatik (statt PowerShift beim 2.0 TDCi).',
          ru: 'Дизель 2.2 TDCi сочетает тягу 400–420 Н·м с крепкой 6-МКПП либо надёжным гидроавтоматом Aisin (в отличие от робота PowerShift на 2.0 TDCi).'
        },
        '2.0-ecoboost-203': {
          en: '2.0 EcoBoost 203 HP pairs exclusively with the 6-speed wet PowerShift dual-clutch transmission, delivering rapid paddles-free shifts and refined petrol quietness alongside extra boost-gauge/shift care.',
          de: 'Der 2.0 EcoBoost (203 PS) ist stets mit dem 6-Gang-PowerShift-Doppelkupplungsgetriebe kombiniert — schaltet blitzschnell, verlangt aber zwingend alle 60.000 km Ölwechsel.',
          ru: 'Мотор 2.0 EcoBoost (203 л.с.) шёл только с 6-ступенчатым роботом PowerShift: быстрые переключения и тишина в салоне при строгом ТО раз в 60 тыс. км.'
        },
        '2.0-ecoboost-240': {
          en: '240 HP flagship EcoBoost pairs exclusively with the 6-speed wet PowerShift DCT, adding crisp downshift blips in Sport mode and flagship acceleration inside a quiet executive cabin.',
          de: 'Das 240-PS-Topmodell nutzt ausschließlich das 6-Gang-PowerShift-DKG mit schnellem S-Modus und kräftigem Durchzug in einem leisen Reise-Cockpit.',
          ru: 'Флагман 2.0 EcoBoost (240 л.с.) работает только с 6-ст. роботом PowerShift, обеспечивая быстрые переключения в режиме S и тихую динамику.'
        },
        petrol: {
          en: 'Petrol Mondeos blend hushed ~68 dB cruising with either slick 5/6-speed manuals (1.6 / 2.0 / 2.5T) or automatic gearboxes (Aisin 6-AT on 2.3; PowerShift 6-DCT on 2.0 EcoBoost).',
          de: 'Die Benziner bieten ruhige ~68 dB Reisekultur mit leichtgängigen 5-/6-Gang-Schaltern oder Automatik (Aisin 6-AT im 2.3; PowerShift im 2.0 EcoBoost).',
          ru: 'Бензиновые Mondeo сочетают тишину (~68 дБ) с чёткой 5/6-МКПП или автоматами (гидроавтомат Aisin на 2.3; робот PowerShift на 2.0 EcoBoost).'
        },
        diesel: {
          en: 'TDCi diesels add extra sound insulation and tall 6th gears for effortless 130+ km/h Autobahn cruising; 2.2 TDCi offers the robust Aisin 6-AT while 2.0 TDCi autos (2010+) use PowerShift.',
          de: 'TDCi-Diesel überzeugen mit starker Dämmung und langer 6. Fahrstufe auf der Autobahn; der 2.2 TDCi nutzt die robuste Aisin-Automatik, der 2.0 TDCi ab 2010 PowerShift.',
          ru: 'Дизели TDCi выделяются хорошей шумоизоляцией и длинной 6-й передачей; на 2.2 TDCi ставился автомат Aisin, на 2.0 TDCi с 2010 г. — PowerShift.'
        },
        conventional: {
          en: 'Wide ergonomic cockpit with soft-touch upper dash, intuitive physical HVAC knobs, and optional Convers+ color cluster on Titanium trims.',
          de: 'Großzügiges Cockpit mit geschäumtem Oberteil, klaren Klimadrehreglern und dem beliebten Convers+-Farbdisplay ab Titanium.',
          ru: 'Широкий эргономичный салон с мягким верхом панели, удобными крутилками климата и цветным дисплеем Convers+ с версии Titanium.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2010 Facelift (Mk4 II): Slimmer upper grille, wider lower trapezoidal intake, LED daytime running lights & LED tail lamps.',
          'Upgraded center console, softer door-armrest padding, ambient interior lighting & revised Convers+ software graphics.',
          'New Euro 5 1.6 & 2.0 EcoBoost turbo petrols plus updated 2.0 TDCi (115–163 HP) & 2.2 TDCi (200 HP) diesels.',
          'Added blind-spot monitoring (BLIS), lane-departure warning, driver-alertness monitor, and rear-view camera options.'
        ],
        de: [
          'Facelift 2010 (Mk4 II): Schmalerer oberer Grill, größerer unterer Lufteinlass, LED-Tagfahrlicht und LED-Rückleuchten.',
          'Überarbeitete Mittelkonsole, weichere Türarmlehnen, Ambientebeleuchtung und modernisierte Convers+-Grafik.',
          'Neue Euro-5-Motoren: 1.6 & 2.0 EcoBoost-Benziner sowie überarbeitete 2.0 TDCi und 2.2 TDCi.',
          'Neue Assistenten optional: Totwinkelwarner (BLIS), Spurhalteassistent, Müdigkeitswarner und Rückfahrkamera.'
        ],
        ru: [
          'Рестайлинг 2010 (Mk4 II): узкая верхняя решётка, крупный нижний воздухозаборник, LED ДХО и светодиодные задние фонари.',
          'Обновлённая центральная консоль, более мягкие подлокотники дверей, фоновая подсветка и свежая графика Convers+.',
          'Появились турбомоторы Euro 5 1.6 и 2.0 EcoBoost, а также модернизированные дизели 2.0 и 2.2 TDCi.',
          'Добавились опции контроля слепых зон (BLIS), удержания в полосе, контроля усталости и камера заднего вида.'
        ]
      }
    }
  }
});