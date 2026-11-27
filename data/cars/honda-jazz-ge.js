// AutoDuel Vehicle Data — honda-jazz-ge
registerAutoDuelVehicle({
  roster: {
    id: 'honda-jazz-ge',
    number: '08',
    carType: 'subcompact',
    gridOrder: 8,
    gridLabel: 'Honda Jazz',
    yearMake: '2008-2015 HONDA',
    shortTitle: 'JAZZ (GE)',
    fullName: '2008-2015 Honda Jazz (GE)',
    rarityClass: 'rarity-legendary',
    drivetrain: 'FWD',
    image: 'assets/honda-jazz-ge.webp',
    defaultEngineId: '1.3-ivtec',
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspTorsion',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Firm / Nimble City', de: 'Straff / Stadt-agil', ru: 'Упругая / Городская' },
      highwayNoise: { en: '~72 dB · Buzzier Hwy', de: '~72 dB · Lauter AB', ru: '~72 дБ · Шумнее на трассе' },
      cabinMaterials: { en: 'Tough Practical Plastics', de: 'Robuster Alltagskunststoff', ru: 'Практичный пластик' },
      controls: '@physButtons',
      turningCircle: '9.8 m',
      visibility: { en: 'Panoramic · Huge Glass', de: 'Panorama-Rundumsicht', ru: 'Отличный панорамный обзор' },
      euroNcap: '★★★★★ (2009)',
      safetyTech: { en: '✓ ESP/VSA · ✕ AEB', de: '✓ ESP/VSA · ✕ Kein AEB', ru: '✓ ESP/VSA · ✕ Без AEB' },
      rearRoom: { en: 'Huge for Subcompact', de: 'Riesig für Kleinwagen', ru: 'Огромно для B-класса' },
      isofixEntry: { en: '✓ 2× ISOFIX · Tall Doors', de: '✓ 2× ISOFIX · Hohe Türen', ru: '✓ 2× ISOFIX · Высокие двери' },
      bootVolume: '399 L / 1,321 L',
      seatUtility: { en: '✓ Magic Seats (Fold-Up)', de: '✓ Magic Seats (Hochklapp.)', ru: '✓ Magic Seats (складные)' },
      payloadRoof: '410 kg · 50 kg',
      driveline: 'FWD',
      chassisFeel: { en: 'Zippy · Easy Urban', de: 'Wendig · Leicht', ru: 'Юркое · Лёгкое' },
      tractionDiff: { en: 'FWD · Open Diff', de: 'FWD · Offen', ru: 'FWD · Своб. дифф.' },
      braking1000: '~37.0 m',
      brakeSetup: '@discs4',
      valueRetention: '@retVeryHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual5Honda', clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspTorsionBeam' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: { specs: [{ k: 'damperSetup', v: { en: 'Short-Wheelbase City Tuning (Firm on 16" Wheels)', de: 'Kurzer Radstand · Etwas straff (besonders auf 16")', ru: 'Упругая городская подвеска (жёстче на 16")' } }, { k: 'seatSupport', v: { en: 'High Upright MPV-Style Seating', de: 'Hohe aufrechte Sitzposition (Mini-Van-Gefühl)', ru: 'Высокая вертикальная посадка' } }], note: { en: '15-inch wheels give noticeably smoother city comfort than 16-inch alloys.', de: 'Auf 15-Zoll-Rädern spürbar komfortabler als mit 16-Zoll-Alufelgen.', ru: 'На 15-дюймовых колёсах едет заметно мягче, чем на 16-дюймовых.' } },
        highwayNoise: { specs: [{ k: 'cabinNoise130', v: { en: '~72 dB(A) at 130 km/h (Short 5th Gear)', de: '~72 dB(A) bei 130 km/h (Hohe Drehzahl im 5. Gang)', ru: '~72 дБ(А) при 130 км/ч (короткая 5-я передача)' } }, { k: 'acousticGlass', v: { en: 'Light City-Car Insulation', de: 'Leichte Kleinwagen-Dämmung', ru: 'Лёгкая шумоизоляция B-класса' } }], note: { en: 'Whisper-quiet in town, noticeably busier at 130+ km/h motorway speeds.', de: 'In der Stadt sehr leise, bei über 130 km/h auf der Autobahn hörbar lauter.', ru: 'Тихий в городе, но на трассе выше 120–130 км/ч мотор слышно.' } }
      },
      interiorQualityFeatures: {
        cabinMaterials: { specs: [{ k: 'dashTrim', v: { en: 'Hard-Wearing Plastics · Huge Dual Gloveboxes & 10 Cupholders', de: 'Robuster Kunststoff · Doppel-Handschuhfach & viele Ablagen', ru: 'Прочный пластик · Двойной бардачок и масса ниш' } }, { k: 'buildFit', v: { en: 'Exceptionally Durable · Built to Take Daily Abuse', de: 'Extrem widerstandsfähig im Alltag', ru: 'Очень износостойкий салон' } }], note: { en: 'Smartest small-car packaging ever built.', de: 'Genialste Raumausnutzung der gesamten Kleinwagenklasse.', ru: 'Гениальная компоновка салона среди компактных авто.' } },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: { specs: [{ k: 'turningDiam', v: '9.8 m (Class-Leading)' }, { k: 'bodyDimensions', v: '3,900 × 1,695 mm' }], note: { en: 'Sub-4-meter length + 9.8 m turning circle makes parking anywhere effortless.', de: 'Unter 4 Meter lang + 9,8 m Wendekreis — passt in praktisch jede Parklücke.', ru: 'Длина 3.9 м и разворот 9.8 м — паркуется в любом дворе.' } },
        visibility: { specs: [{ k: 'sightlines', v: { en: 'Huge Windscreen & Large Side Glass · Small Front Quarter Windows', de: 'Riesige Glasflächen & hohe Sitzposition', ru: 'Огромное остекление и высокая посадка' } }, { k: 'parkingAids', v: { en: 'Rarely Needed · Rear Sensors Optional', de: 'Kaum nötig · Parksensoren hinten optional', ru: 'Почти не нужны благодаря габаритам' } }], note: { en: 'Outstanding 360-degree visibility for new drivers and city commuters.', de: 'Hervorragende Rundumsicht für Fahranfänger und Stadtverkehr.', ru: 'Прекрасный круговой обзор для города.' } }
      },
      safetyProtection: {
        euroNcap: { specs: [{ k: 'ncapOverall', v: '★★★★★ (2009)' }, { k: 'ncapBreakdown', v: { en: '78% Adult · 79% Child · 60% Pedestrian', de: '78 % Erwachsene · 79 % Kinder · 60 % Fußgänger', ru: '78% Взрослые · 79% Дети · 60% Пешеходы' } }, { k: 'airbagsCount', v: { en: '6 Airbags + Active Headrests', de: '6 Airbags + aktive Kopfstützen', ru: '6 подушек + активные подголовники' } }], note: { en: 'Strong 5-star subcompact safety with standard VSA stability control.', de: 'Starke 5-Sterne-Kleinwagensicherheit mit serienmäßigem VSA-ESP.', ru: 'Крепкие 5 звёзд для B-класса со стандартной ESP.' } },
        safetyTech: { specs: [{ k: 'activeAssists', v: { en: '✓ ESP/VSA Standard · ✕ No AEB / Lane Assist', de: '✓ ESP/VSA Serie · ✕ Kein Notbrems-/Spurassistent', ru: '✓ ESP/VSA в базе · ✕ Без AEB и полосы' } }], note: { en: 'Simple, reliable mechanical safety without modern camera assists.', de: 'Klassisch-solide Sicherheit ohne moderne Kamera-Assistenten.', ru: 'Классическая надёжная безопасность без сложных камер.' } }
      },
      passengerSpaceErgonomics: {
        rearRoom: { specs: [{ k: 'wheelbase', v: '2,500 mm' }, { k: 'rearLegHead', v: { en: 'Compact-Class Legroom & Tall Headroom in a 3.9 m Car', de: 'Bein- & Kopffreiheit auf Kompaktklasse-Niveau bei 3,9 m Länge', ru: 'Простор уровня C-класса в кузове длиной 3.9 м' } }], note: { en: 'Center fuel tank unlocks rear cabin space that shames much larger cars.', de: 'Mittig verbauter Tank schafft Fondplatz wie in einer Fahrzeugklasse höher.', ru: 'Центральный бак даёт простор сзади на уровне более крупных авто.' } },
        isofixEntry: { specs: [{ k: 'isofixAccess', v: { en: '✓ 2× ISOFIX · Tall Square Rear Doors', de: '✓ 2× ISOFIX · Hohe, weit öffnende Türen', ru: '✓ 2× ISOFIX · Высокие удобные двери' } }], note: { en: 'Effortless entry and child-seat loading.', de: 'Müheloses Einsteigen und Kindersitz-Einbau.', ru: 'Очень лёгкая посадка и установка детских кресел.' } }
      },
      interiorBootSpace: {
        bootVolume: { specs: [{ k: 'bootUpDown', v: '399 L / 1,321 L (300 L IMA)' }, { k: 'loadSill', v: { en: '~605 mm (Ultra-Low Sill)', de: '~605 mm (Extrem niedrige Ladekante)', ru: '~605 мм (очень низкий порог)' } }], note: { en: '399 L boot beats even the larger Toyota Auris!', de: '399 L Kofferraum schlagen sogar den größeren Toyota Auris!', ru: 'Багажник 399 л больше, чем у более крупного Toyota Auris!' } },
        seatUtility: { specs: [{ k: 'foldingMech', v: { en: '✓ Honda Magic Seats (Cinema Fold-Up + Flat Floor)', de: '✓ Honda Magic Seats (Hochklappbar + Ebener Boden)', ru: '✓ Honda Magic Seats (подъём + ровный пол)' } }], note: { en: 'Swallows tall plants, washing machines, and bicycles inside a sub-4m hatchback.', de: 'Schluckt Fahrräder, Pflanzen und Umzugskartons auf unter 4 Metern Länge.', ru: 'Вмещает велосипеды, высокие растения и коробки в 3.9-метровом кузове.' } }
      },
      payloadTowing: {
        payloadRoof: { specs: [{ k: 'maxPayload', v: '~410 kg' }, { k: 'roofLoad', v: '50 kg' }], note: { en: 'Generous payload for a lightweight subcompact.', de: 'Gute Zuladung für einen leichten Kleinwagen.', ru: 'Хорошая загрузка для лёгкого субкомпакта.' } },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: { specs: [{ k: 'kerbWeight', v: '1,070–1,162 kg' }, { k: 'handlingChar', v: { en: 'Featherweight Urban Agility · Light Electric Steering', de: 'Federleicht & wendig in der Stadt · Leichte Lenkung', ru: 'Лёгкость и юркость в городе · Лёгкий руль' } }, { k: 'tyreSizes', v: '175/65 R15 · 185/55 R16' }], note: { en: 'Tiny tyres keep replacement costs rock-bottom.', de: 'Kleine Reifengrößen halten Folgekosten extrem niedrig.', ru: 'Небольшие шины обходятся очень дёшево.' } },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },    sharedBuyerFit: {
      cards: {
        jazzMagicSpace: {
          en: 'You want maximum space in a tiny footprint: Flip-up Magic Seats and a 399 L boot outclass cars a full size larger.',
          de: 'Du willst ein Raumwunder auf Kleinwagen-Fläche: Die hochklappbaren Magic Seats und 399 L Kofferraum schlagen größere Autos.',
          ru: 'Тебе нужен максимум места при минимуме габаритов: Складные сиденья Magic Seats и багажник 399 л превосходят машины классом выше.'
        },
        jazzCityReliability: {
          en: 'You want near-zero breakdown stress: Simple i-VTEC engineering and top reliability records make city ownership effortless.',
          de: 'Du willst maximale Pannen-Sicherheit: Simple i-VTEC-Technik und Top-Zuverlässigkeit machen den Stadt-Alltag völlig entspannt.',
          ru: 'Тебе нужна максимальная безотказность: Простая техника i-VTEC и высокая надёжность делают городскую езду беззаботной.'
        },
        jazzMotorwayNoise: {
          en: 'You cruise 130+ km/h daily: Cabin wind and tyre noise rise noticeably on fast motorways and steep climbs need downshifts.',
          de: 'Du fährst täglich 130+ km/h Autobahn: Wind- und Abrollgeräusche nehmen bei hohem Tempo deutlich zu und Steigungen fordern Drehzahl.',
          ru: 'Ты часто ездишь 130+ км/ч по трассе: На высокой скорости заметно шумнее от ветра и шин, а на обгонах нужно крутить мотор.'
        },
        jazzNoTowing: {
          en: 'You need to haul trailers: Subcompact chassis and CVT/IMA variants have minimal or zero towing capability.',
          de: 'Du willst Anhänger ziehen: Kleinwagen-Plattform sowie CVT- und IMA-Varianten bieten kaum bis gar keine Anhängelast.',
          ru: 'Тебе нужно таскать прицеп: Субкомпактная платформа и версии с вариатором/IMA почти не рассчитаны на буксировку.'
        },
        jazzImaHybrid: {
          en: 'You commute smoothly in stop-and-go traffic: The 1.3 IMA mild-hybrid + CVT glides effortlessly while saving fuel in town.',
          de: 'Du pendelst entspannt im Stadtverkehr: Der 1.3-IMA-Hybrid samt CVT gleitet ruckfrei und spart im Stop-and-Go spürbar Sprit.',
          ru: 'Ты спокойно ездишь по городским пробкам: Мягкий гибрид 1.3 IMA с вариатором едет плавно и экономит топливо в городе.'
        },
        jazzFirmLowSpeedRide: {
          en: 'You want plush suspension over bad city streets: The short wheelbase and firm rear axle feel choppy on speed bumps and potholes.',
          de: 'Du willst weichen Federungskomfort auf schlechten Straßen: Der kurze Radstand und die straffe Hinterachse hoppeln über Schwellen spürbar.',
          ru: 'Ты ждёшь мягкой подвески на разбитых улицах: Короткая база и жёсткая задняя балка заметно трясут на лежачих полицейских и ямах.'
        },
        jazzHardPlastics: {
          en: 'You want soft-touch cabin luxury: Hard scratch-resistant plastics prioritize family durability over plushness.',
          de: 'Du wünschst dir weiche Soft-Touch-Materialien: Kratzfestes Hartplastik setzt klar auf Haltbarkeit statt Wohnzimmer-Flair.',
          ru: 'Тебе важна мягкая дорогая отделка: Жёсткий износостойкий пластик рассчитан на практичность, а не на премиум-ощущения.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'The smartest urban space-saver in its class — unbeatable practicality and reliability, best suited to city and regional roads.',
          de: 'Der cleverste Raumriese seiner Klasse — unschlagbar praktisch und zuverlässig, am wohlsten in Stadt und Umland.',
          ru: 'Самый вместительный и надёжный субкомпакт в классе — идеален для города и пригорода.'
        },
        ideal: [
          'jazzMagicSpace',
          'jazzCityReliability',
          'globalSimpleNoTurbo',
          'globalPetrolCityZones'
        ],
        skip: ['jazzMotorwayNoise', 'jazzFirmLowSpeedRide', 'jazzNoTowing', 'jazzHardPlastics']
      },
      hybrid: {
        summary: {
          en: 'An easy-driving, frugal city hybrid with Magic Seat versatility — not built for fast autobahn cruising or towing.',
          de: 'Ein leichtfüßiger, sparsamer Stadt-Hybrid mit Magic-Seat-Variabilität — nicht für hohes Autobahn-Tempo oder Anhänger gebaut.',
          ru: 'Простой и экономичный городской гибрид с трансформируемым салоном — не рассчитан на быструю трассу и прицепы.'
        },
        ideal: ['jazzMagicSpace', 'jazzImaHybrid', 'jazzCityReliability', 'globalPetrolCityZones'],
        skip: ['jazzMotorwayNoise', 'jazzFirmLowSpeedRide', 'jazzNoTowing', 'jazzHardPlastics']
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Low TÜV Suspension Defects — Check Rear Sill Seams',
          strengths: [
            'Low TÜV Suspension Defects keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Lift the spare-wheel floor to check for rainwater seepage from roof seams and check rear arches.',
            'Check Rear Sill Seams.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Geringe TÜV-Achsmängel — Hintere Schwellerfalze prüfen',
          strengths: [
            'Geringe TÜV-Achsmängel hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Reserveradmulde auf Regenwasser-Eintritt und hintere Radläufe auf Rost prüfen.',
            'Hintere Schwellerfalze prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Минимум дефектов подвески TÜV — Проверка задних порогов',
          strengths: [
            'Минимум дефектов подвески TÜV надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Проверьте нишу запаски на сухость (уплотнение крыши) и задние арки на ржавчину.',
            'Проверка задних порогов.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Foolproof Rotary Dials • 10 Holders',
          strengths: [
            'Foolproof Rotary Dials • 10 Holders ensures intuitive daily ergonomics.',
            'Functional layout keeps essential controls easy to reach while driving.'
          ],
          watchouts: [
            'Hard scratch-resistant plastics throughout and firm city ride over sharp potholes.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Narrensichere Drehregler • 10 Halter',
          strengths: [
            'Narrensichere Drehregler • 10 Halter sorgt für eine intuitive Bedienung im Alltag.',
            'Übersichtliche Anordnung hält alle wichtigen Bedienelemente griffbereit.'
          ],
          watchouts: [
            'Durchgehend harte Kunststoffe und auf Querfugen etwas straffe Hinterachse.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Удобные шайбы и 10 подстаканников',
          strengths: [
            'Удобные шайбы и 10 подстаканников обеспечивает удобную и понятную эргономику на каждый день.',
            'Функциональная компоновка позволяет легко дотянуться до всех органов управления.'
          ],
          watchouts: [
            'Пластик салона жёсткий, а задняя балка плотновата на острых стыках.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: 'Tight 9.8 m Turning Circle',
          strengths: [
            'Tight 9.8 m Turning Circle makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Short 3.90 m body, tall glass, and tight 9.8 m turning circle make parking effortless.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: 'Enge 9,8 m Wendekreis',
          strengths: [
            'Enge 9,8 m Wendekreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            '3,90 m Länge, große Glasflächen und 9,8 m Wendekreis machen Einparken kinderleicht.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Малый разворот 9,8 м',
          strengths: [
            'Малый разворот 9,8 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Короткая длина 3,90 м, огромные окна и разворот 9,8 м идеальны для города.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2009) — 6 Airbags + VSA Stability',
          strengths: [
            'Euro NCAP 5★ (2009) provides solid passive crash protection for its class and era.',
            '6 Airbags + VSA Stability standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2009) — 6 Airbags + VSA-ESP',
          strengths: [
            'Euro NCAP 5★ (2009) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '6 Airbags + VSA-ESP serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (2009) — 6 подушек + ESP (VSA)',
          strengths: [
            'Euro NCAP 5★ (2009) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + ESP (VSA) входят в оснащение большинства версий.'
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
          headline: 'Big Rear Kneeroom In 3.90 m',
          strengths: [
            'Big Rear Kneeroom In 3.90 m keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Wide 80° Opening Rear Doors.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Viel Beinfreiheit auf 3,90 m',
          strengths: [
            'Viel Beinfreiheit auf 3,90 m sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Weit öffnende Fondtüren.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Удивительный простор сзади',
          strengths: [
            'Удивительный простор сзади обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Задние двери открываются широко.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '399L Boot + 1,321L Max',
          strengths: [
            'Practical 399L boot (1,321L max) with upright Magic Seats in a 3.90 m footprint.',
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
          headline: '399L Kofferraum (1.321L Max)',
          strengths: [
            'Praktischer Nutzwert: 399 L Kofferraum (max. 1.321 L) samt hochklappbaren Magic Seats auf 3,90 m Länge.',
            'Geniale Magic Seats erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 399 л (до 1 321 л)',
          strengths: [
            'Практичный объём: багажник 399 л (до 1 321 л) и сиденья Magic Seats при длине 3,90 м.',
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
          headline: '1,075 kg Nimble City Feel',
          strengths: [
            '1,075 kg light weight feels nimble around town, though tall body leans in fast corners.',
            'Some Body Roll in Corners.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: '1.075 kg Leichtgewicht',
          strengths: [
            '1.075 kg Leergewicht wirken wendig in der Stadt bei spürbarer Seitenneigung in Kurven.',
            'Etwas Seitenneigung.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Лёгкий вес 1 075 кг',
          strengths: [
            'Лёгкий кузов (1 075 кг) маневренен в городе, но кренится в быстрых поворотах.',
            'Небольшие крены в поворотах.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 37.8 m — Light Curb Weight • 4-Wheel Discs',
          strengths: [
            '100–0 km/h: 37.8 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 37,8 m — Geringes Gewicht • 4× Scheiben',
          strengths: [
            '100–0 km/h: 37,8 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 37,8 м — Малый вес • 4 дисковых тормоза',
          strengths: [
            '100–0 км/ч: 37,8 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '1,000 kg Braked Tow • 420 kg Subcompact Payload',
          strengths: [
            '1,000 kg Braked Tow and 420 kg Subcompact Payload handle typical cargo and trailer needs.'
          ],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '1.000 kg Anhängelast • 420 kg Zuladung',
          strengths: [
            '1.000 kg Anhängelast und 420 kg Zuladung bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Прицеп до 1 000 кг • Грузоподъёмность 420 кг',
          strengths: [
            'Прицеп до 1 000 кг и Грузоподъёмность 420 кг закрывают повседневные задачи по загрузке.'
          ],
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
          headline: 'Strong Used Jazz Demand',
          strengths: [
            'Strong Used Jazz Demand helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Hohe Gebrauchtnachfrage',
          strengths: [
            'Hohe Gebrauchtnachfrage sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Высокий спрос на вторичке',
          strengths: [
            'Высокий спрос на вторичке поддерживает стабильный спрос на вторичном рынке.',
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
      'petrol-5mt': {
        transmissionDriveline: {
          en: {
            headline: 'Light 5-Speed Manual — Watch Input Shaft Bearings',
            strengths: [
              'Light 5-Speed Manual matches this powertrain well for everyday driving.',
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
            headline: 'Leichtes 5-Gang-Getriebe — Eingangslager auf Geräusche',
            strengths: [
              'Leichtes 5-Gang-Getriebe passt gut zur Motorcharakteristik im Alltag.',
              'Eingangslager auf Geräusche.'
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
            headline: 'Лёгкая 5-МКПП — Шум подшипника первичного вала',
            strengths: [
              'Лёгкая 5-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Шум подшипника первичного вала.'
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
            headline: 'Ultra-Simple Loom & ECU',
            strengths: [
              'Ultra-Simple Loom & ECU keeps electrical diagnostics straightforward.',
              'Near-Zero Electrical Faults.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Simples Bordnetz & ECU',
            strengths: [
              'Simples Bordnetz & ECU sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Kaum Elektronik-Defekte.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Простейшая проводка и ЭБУ',
            strengths: [
              'Простейшая проводка и ЭБУ упрощает диагностику и обслуживание электрооборудования.',
              'Минимум отказов электрики.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Choppy Short-Wheelbase Ride',
            strengths: [
              'Upright, airy seating position reduces fatigue in city stop-and-go traffic.',
              'Predictable, supple damping over gentle everyday road surfaces.'
            ],
            watchouts: [
              'Short wheelbase feels choppy over consecutive speed bumps and motorway expansion joints.',
              'Wind and tyre roar become noticeable above 120 km/h.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ],
            lowScoreReasons: [
              'Short wheelbase transmits choppy vertical motion over broken city tarmac.',
              'Limited sound insulation lets wind and tyre noise build above 120 km/h.'
            ]
          },
          de: {
            headline: 'Kurzer Radstand hoppelt etwas',
            strengths: [
              'Aufrechte, übersichtliche Sitzposition macht Stadtverkehr und Einparken entspannt.',
              'Auf normalem Stadt- und Landstraßen-Asphalt gutmütig abgestimmt.'
            ],
            watchouts: [
              'Durch den kurzen Radstand neigt das Fahrwerk auf Querfugen zum Hoppeln.',
              'Ab 120 km/h nehmen Wind- und Abrollgeräusche im Innenraum spürbar zu.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ],
            lowScoreReasons: [
              'Der kurze Radstand sorgt auf schlechten Straßen für ein unruhiges, hoppeliges Abrollen.',
              'Zurückhaltende Dämmung lässt Wind- und Abrollgeräusche ab 120 km/h deutlich hörbar werden.'
            ]
          },
          ru: {
            headline: 'Короткая база потряхивает',
            strengths: [
              'Высокая удобная посадка снижает усталость в городских пробках.',
              'На ровном покрытии подвеска работает предсказуемо и мягко.'
            ],
            watchouts: [
              'Из-за короткой базы машина заметно подпрыгивает на стыках и лежачих полицейских.',
              'После 120 км/ч на трассе ощутимо растут шумы ветра и колёсных арок.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ],
            lowScoreReasons: [
              'Короткая колёсная база передаёт мелкую тряску на неровном асфальте.',
              'Скромная шумоизоляция даёт о себе знать гулом ветра и шин после 120 км/ч.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Tiny 15" Tyres & Cheap Brakes — Zero Turbo / DPF / DMF Bills',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Zero Turbo / DPF / DMF Bills.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Tiny 15" Tyres & Cheap Brakes.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige 15-Zoll-Reifen & Bremsen — Kein Turbo, DPF oder ZMS',
            strengths: [
              'Günstige 15-Zoll-Reifen & Bremsen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Kein Turbo, DPF oder ZMS.'
            ],
            watchouts: [
              'Auch bei einfacher Technik altern nach 10+ Jahren Schläuche, Fahrwerksbuchsen, Bremsen und Reifen.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дешёвые шины 15" и колодки — Нет турбины, DPF и маховика',
            strengths: [
              'Дешёвые шины 15" и колодки помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Возрастной износ сайлентблоков подвески, тормозов и выхлопной системы требует плановых ежегодных трат.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-cvt': {
        transmissionDriveline: {
          en: {
            headline: '5-MT / Reliable Honda CVT — 40k km CVT Fluid Interval',
            strengths: [
              '5-MT / Reliable Honda CVT matches this powertrain well for everyday driving.',
              '40k km CVT Fluid Interval.'
            ],
            watchouts: [
              'CVT fluid must be changed every 40,000–60,000 km; old fluid causes belt slip and whine.',
              'Listen for a rising whine under light throttle and feel for judder when pulling away.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '5-Gang / Robuste CVT — CVT-Öl alle 40.000 km',
            strengths: [
              '5-Gang / Robuste CVT passt gut zur Motorcharakteristik im Alltag.',
              'CVT-Öl alle 40.000 km.'
            ],
            watchouts: [
              'CVT-Öl alle 40.000–60.000 km wechseln — altes Öl führt zu Schubgliederband-Rutschen und Heulen.',
              'Auf ansteigendes Heulen bei leichtem Gas und Ruckeln beim Anfahren achten.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '5-МКПП / Вариатор Honda — Замена масла CVT раз в 40 тыс.',
            strengths: [
              '5-МКПП / Вариатор Honda хорошо сочетается с данным двигателем в повседневной езде.',
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
            ],
            watchouts: [
              'Масло в вариаторе менять каждые 40 000–60 000 км — старое масло ведёт к проскальзыванию ремня и вою.',
              'Прислушайтесь к нарастающему вою при лёгком газе и проверьте отсутствие рывков при трогании.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Ultra-Simple Loom & ECU',
            strengths: [
              'Ultra-Simple Loom & ECU keeps electrical diagnostics straightforward.',
              'Near-Zero Electrical Faults.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Simples Bordnetz & ECU',
            strengths: [
              'Simples Bordnetz & ECU sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Kaum Elektronik-Defekte.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Простейшая проводка и ЭБУ',
            strengths: [
              'Простейшая проводка и ЭБУ упрощает диагностику и обслуживание электрооборудования.',
              'Минимум отказов электрики.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Choppy Short-Wheelbase Ride',
            strengths: [
              'Upright, airy seating position reduces fatigue in city stop-and-go traffic.',
              'Predictable, supple damping over gentle everyday road surfaces.'
            ],
            watchouts: [
              'Short wheelbase feels choppy over consecutive speed bumps and motorway expansion joints.',
              'Wind and tyre roar become noticeable above 120 km/h.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ],
            lowScoreReasons: [
              'Short wheelbase transmits choppy vertical motion over broken city tarmac.',
              'Limited sound insulation lets wind and tyre noise build above 120 km/h.'
            ]
          },
          de: {
            headline: 'Kurzer Radstand hoppelt etwas',
            strengths: [
              'Aufrechte, übersichtliche Sitzposition macht Stadtverkehr und Einparken entspannt.',
              'Auf normalem Stadt- und Landstraßen-Asphalt gutmütig abgestimmt.'
            ],
            watchouts: [
              'Durch den kurzen Radstand neigt das Fahrwerk auf Querfugen zum Hoppeln.',
              'Ab 120 km/h nehmen Wind- und Abrollgeräusche im Innenraum spürbar zu.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ],
            lowScoreReasons: [
              'Der kurze Radstand sorgt auf schlechten Straßen für ein unruhiges, hoppeliges Abrollen.',
              'Zurückhaltende Dämmung lässt Wind- und Abrollgeräusche ab 120 km/h deutlich hörbar werden.'
            ]
          },
          ru: {
            headline: 'Короткая база потряхивает',
            strengths: [
              'Высокая удобная посадка снижает усталость в городских пробках.',
              'На ровном покрытии подвеска работает предсказуемо и мягко.'
            ],
            watchouts: [
              'Из-за короткой базы машина заметно подпрыгивает на стыках и лежачих полицейских.',
              'После 120 км/ч на трассе ощутимо растут шумы ветра и колёсных арок.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ],
            lowScoreReasons: [
              'Короткая колёсная база передаёт мелкую тряску на неровном асфальте.',
              'Скромная шумоизоляция даёт о себе знать гулом ветра и шин после 120 км/ч.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Tiny 15" Tyres & Cheap Parts — 40k km Fluid On CVT Trims',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['40k km Fluid On CVT Trims.', 'Tiny 15" Tyres & Cheap Parts.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige Kleinwagen-Teile — Bei CVT alle 40k km Ölwechsel',
            strengths: [
              'Günstige Kleinwagen-Teile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Bei CVT alle 40k km Ölwechsel.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дешёвые расходники — Масло в вариаторе каждые 40 тыс.',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Масло в вариаторе каждые 40 тыс.', 'Дешёвые расходники.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'hybrid-cvt': {
        transmissionDriveline: {
          en: {
            headline: 'Torque-Converter Honda CVT — Strict 40k km CVT Oil Change',
            strengths: [
              'Torque-Converter Honda CVT matches this powertrain well for everyday driving.',
              'Crisp shift feel and well-matched ratios keep everyday driving composed and predictable.'
            ],
            watchouts: [
              'CVT fluid must be changed every 40,000–60,000 km; old fluid causes belt slip and whine.',
              'Listen for a rising whine under light throttle and feel for judder when pulling away.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: 'Honda-CVT mit Wandler — CVT-Öl alle 40.000 km Pflicht',
            strengths: [
              'Honda-CVT mit Wandler passt gut zur Motorcharakteristik im Alltag.',
              'CVT-Öl alle 40.000 km Pflicht.'
            ],
            watchouts: [
              'CVT-Öl alle 40.000–60.000 km wechseln — altes Öl führt zu Schubgliederband-Rutschen und Heulen.',
              'Auf ansteigendes Heulen bei leichtem Gas und Ruckeln beim Anfahren achten.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: 'Вариатор с гидротрансформатором — Масло CVT строго раз в 40 тыс.',
            strengths: [
              'Вариатор с гидротрансформатором хорошо сочетается с данным двигателем в повседневной езде.',
              'Масло CVT строго раз в 40 тыс.'
            ],
            watchouts: [
              'Масло в вариаторе менять каждые 40 000–60 000 км — старое масло ведёт к проскальзыванию ремня и вою.',
              'Прислушайтесь к нарастающему вою при лёгком газе и проверьте отсутствие рывков при трогании.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Reliable IMA Hybrid ECU',
            strengths: [
              'Reliable IMA Hybrid ECU keeps electrical diagnostics straightforward.',
              'Keep 12V Battery Fresh.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Zuverlässige IMA-Steuerung',
            strengths: [
              'Zuverlässige IMA-Steuerung sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              '12V-Batterie fit halten.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжный блок IMA',
            strengths: [
              'Надёжный блок IMA упрощает диагностику и обслуживание электрооборудования.',
              'Следить за АКБ 12 В.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Choppy Short-Wheelbase Ride',
            strengths: [
              'Upright, airy seating position reduces fatigue in city stop-and-go traffic.',
              'Predictable, supple damping over gentle everyday road surfaces.'
            ],
            watchouts: [
              'Short wheelbase feels choppy over consecutive speed bumps and motorway expansion joints.',
              'Wind and tyre roar become noticeable above 120 km/h.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ],
            lowScoreReasons: [
              'Short wheelbase transmits choppy vertical motion over broken city tarmac.',
              'Limited sound insulation lets wind and tyre noise build above 120 km/h.'
            ]
          },
          de: {
            headline: 'Kurzer Radstand hoppelt etwas',
            strengths: [
              'Aufrechte, übersichtliche Sitzposition macht Stadtverkehr und Einparken entspannt.',
              'Auf normalem Stadt- und Landstraßen-Asphalt gutmütig abgestimmt.'
            ],
            watchouts: [
              'Durch den kurzen Radstand neigt das Fahrwerk auf Querfugen zum Hoppeln.',
              'Ab 120 km/h nehmen Wind- und Abrollgeräusche im Innenraum spürbar zu.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ],
            lowScoreReasons: [
              'Der kurze Radstand sorgt auf schlechten Straßen für ein unruhiges, hoppeliges Abrollen.',
              'Zurückhaltende Dämmung lässt Wind- und Abrollgeräusche ab 120 km/h deutlich hörbar werden.'
            ]
          },
          ru: {
            headline: 'Короткая база потряхивает',
            strengths: [
              'Высокая удобная посадка снижает усталость в городских пробках.',
              'На ровном покрытии подвеска работает предсказуемо и мягко.'
            ],
            watchouts: [
              'Из-за короткой базы машина заметно подпрыгивает на стыках и лежачих полицейских.',
              'После 120 км/ч на трассе ощутимо растут шумы ветра и колёсных арок.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ],
            lowScoreReasons: [
              'Короткая колёсная база передаёт мелкую тряску на неровном асфальте.',
              'Скромная шумоизоляция даёт о себе знать гулом ветра и шин после 120 км/ч.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Regen Saves Brake Wear — 40k CVT Oil • Ageing NiMH Pack',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['40k CVT Oil • Ageing NiMH Pack.', 'Regen Saves Brake Wear.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Rekuperation schont Bremsen — CVT-Öl (40k) • Alterung IMA-Akku',
            strengths: [
              'Rekuperation schont Bremsen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['CVT-Öl (40k) • Alterung IMA-Akku.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Рекуперация бережёт тормоза — Масло CVT 40 тыс. • Износ батареи',
            strengths: [
              'Рекуперация бережёт тормоза помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Масло CVT 40 тыс. • Износ батареи.'],
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
        subLabel: { en: 'Honda M5 · Manual · Single Clutch', de: 'Honda M5 · Schaltgetriebe · Kupplung', ru: 'Honda M5 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual5Honda', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: {
            headline: 'Honda 5-Speed Manual — Light Shift, Cheap Single-Mass Clutch',
            strengths: ['Simple mechanical box with light pedal and low clutch replacement cost (€380–€550).'],
            watchouts: ['Input-shaft bearing can whine lightly in neutral on neglected high-mileage cars.'],
            beforeYouBuy: ['Listen with the clutch released in neutral for any input-shaft bearing hum.']
          },
          de: {
            headline: 'Honda 5-Gang-Schaltgetriebe — Leichtgängig & günstig im Unterhalt',
            strengths: ['Unkomplizierte Mechanik und sehr günstiger Kupplungswechsel (380–550 €).'],
            watchouts: ['Getriebeeingangslager kann bei hoher Laufleistung im Leerlauf leicht surren.'],
            beforeYouBuy: ['Im Leerlauf bei losgelassener Kupplung auf Lagergeräusche achten.']
          },
          ru: {
            headline: 'Механика Honda 5-МКПП — Лёгкая и недорогая в ремонте',
            strengths: ['Простая коробка с лёгкой педалью и дешёвой заменой сцепления (€380–550).'],
            watchouts: ['Подшипник первичного вала иногда подвывает на холостых при большом пробеге.'],
            beforeYouBuy: ['Прислушайтесь на холостых с отпущенным сцеплением к шуму подшипника.']
          }
        }
      },
      'cvt': {
        category: 'automatic',
        label: { en: 'CVT Automatic', de: 'CVT-Automatik', ru: 'Вариатор CVT' },
        shortLabel: { en: 'CVT', de: 'CVT', ru: 'CVT' },
        subLabel: { en: 'Honda Multi-Matic · Belt CVT', de: 'Honda Multi-Matic · Riemen-CVT', ru: 'Honda Multi-Matic · Вариатор' },
        specOverrides: { gearbox: '@cvt', clutchDmf: '@noClutch' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.2,
            badges: { en: ['Honda Torque-Converter CVT', 'Needs ATF/CVTF Every 45k km'], de: ['Honda Wandler-CVT', 'CVT-Öl alle 45 Tkm nötig'], ru: ['Вариатор Honda с ГТ', 'Масло каждые 45 тыс. км'] }
          }
        },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbCvtHonda', clutchDmf: '@clutchNone' } },
        dossier: {
          en: {
            headline: 'GE-Generation Honda CVT — Improved Torque-Converter Launch, Refresh Fluid',
            strengths: ['2nd-gen Jazz GE uses a torque converter (fixing 1st-gen GD start-clutch judder).'],
            watchouts: ['Requires genuine Honda CVTF/HMMF drain-and-fill every 40,000–45,000 km.'],
            beforeYouBuy: ['Test smooth uphill creep from standstill with zero launch shudder.']
          },
          de: {
            headline: 'Honda CVT (GE-Generation) — Mit Anfahrwandler deutlich haltbarer',
            strengths: ['Die 2. Jazz-Generation nutzt einen Wandler statt der alten Anfahrkupplung.'],
            watchouts: ['Alle 40.000–45.000 km frisches Honda CVTF-Öl erforderlich.'],
            beforeYouBuy: ['Sanftes Anfahren am Berg ohne Ruckeln oder Schlupf testen.']
          },
          ru: {
            headline: 'Вариатор Honda Jazz GE — С гидротрансформатором, надёжнее 1-го поколения',
            strengths: ['Второе поколение получило гидротрансформатор вместо проблемного стартового пакета.'],
            watchouts: ['Требует замены оригинальной жидкости Honda CVTF/HMMF каждые 40–45 тыс. км.'],
            beforeYouBuy: ['Проверьте плавный старт в горку без рывков и вибраций.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 45,000 km', de: 'Alle 45.000 km', ru: 'Каждые 45 000 км' }, action: { en: 'Honda CVT fluid drain-and-fill (HMMF / CVTF)', de: 'Honda CVT-Ölwechsel (HMMF / CVTF)', ru: 'Замена масла вариатора Honda HMMF / CVTF' }, cost: '€130–190' }
          ]
        }
      }
    },
    engines: [
      {
        id: '1.2-ivtec',
        defaultGearboxId: '5-mt-sc',
        gearboxes: [{ id: '5-mt-sc', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.2L i-VTEC NA', de: '1.2L i-VTEC Sauger', ru: '1.2L i-VTEC Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual5', clutchDmf: '@singleClutch',
          towingBraked: '1,000 kg', sprint0100: '12.6 s', topSpeed: '177 km/h', peakTorque: '114 Nm @ 4,900',
          passingPunch: { en: 'City-Focused · Revvy', de: 'Stadt-Motor · Drehfreudig', ru: 'Городской · Любит обороты' },
          realWorldFuel: '5.5–6.1 L/100 km', tankRange: '42 L · ~720 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierVeryLow', timingDrive: '@chain', serviceWear: '@tierVeryLow'
        },
        dossierGroup: 'petrol-5mt',
        buyerFitGroup: 'na-petrol',
        isDefault: false,
        fuelType: 'petrol',
        hp: 90,
        shortTitle: 'JAZZ 1.2 i-VTEC',
        fullName: '2011 Honda Jazz 1.2 i-VTEC',
        engineBadge: '1.2L i-VTEC NA • 90 HP',
        engineSubLabel: {
          en: 'L12B1 Chain NA (11/2008–09/2015) • 5-MT • 114 Nm',
          de: 'L12B1 Ketten-Saugmotor (11/2008–09/2015) • 5-Gang • 114 Nm',
          ru: 'Цепной L12B1 (11/2008–09/2015) • 5-ст. МКПП • 114 Н·м'
        },
        rarityLabel: {
          en: 'CITY RELIABILITY KING',
          de: 'STADT-DAUERLÄUFER',
          ru: 'КОРОЛЬ ГОРОДА'
        },
        originalMsrp: {
          en: '€14,950 New',
          de: '14.950 € Neu',
          ru: '€14 950 новый'
        },
        estUsedPrice: '€5,800',
        perkLabel: {
          en: '✦ 399L Boot + Magic Seats • Bulletproof L12B1 Chain NA • 5.6 L/100km',
          de: '✦ 399L Kofferraum + Magic Seats • Unverwüstlicher L12B1 • 5,6 L/100km',
          ru: '✦ Багажник 399 л + Magic Seats • Вечный L12B1 • 5,6 л/100 км'
        },
        remarkablePositives: {
          en: [
            'MAGIC SEATS (1,321L CARGO)',
            '399L CLASS-LEADING SUBCOMPACT BOOT',
            'BULLETPROOF L12B1 CHAIN ENGINE',
            '5.6 L/100KM ECONOMY',
            '9.8M TIGHT TURNING CIRCLE'
          ],
          de: [
            'MAGIC SEATS (1.321L LADERAUM)',
            '399L RIESIGER KLEINWAGEN-KOFFERRAUM',
            'UNVERWÜSTLICHER L12B1 KETTENMOTOR',
            '5,6 L/100KM VERBRAUCH',
            '9,8M WENDEKREIS IN DER STADT'
          ],
          ru: [
            'ТРАНСФОРМАЦИЯ MAGIC SEATS (1 321 Л)',
            'ОГРОМНЫЙ БАГАЖНИК 399 Л В КЛАССЕ',
            'ВЕЧНЫЙ ЦЕПНОЙ ДВИГАТЕЛЬ L12B1',
            'РАСХОД 5,6 Л/100 КМ',
            'МАЛЫЙ РАДИУС РАЗВОРОТА 9,8 М'
          ]
        },
        notableNegatives: {
          en: [
            'MODEST 12.6S 0–100 HIGHWAY PACE',
            'HIGH-REVVING ON AUTOBAHN INCLINES',
            'NOISY AT HIGHWAY SPEEDS'
          ],
          de: [
            'GEMÄCHLICHE 12,6S 0–100 AUF DER BAHN',
            'HOHE DREHZAHLEN BEI 130 KM/H',
            'LAUT BEI AUTOBAHN-TEMPO'
          ],
          ru: [
            'СПОКОЙНЫЙ РАЗГОН 12,6 С ДО 100',
            'ВЫСОКИЕ ОБОРОТЫ НА ТРАССЕ',
            'ШУМНОВАТ НА ВЫСОКОЙ СКОРОСТИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 9.0,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 6.2,
          runningCostsTco: 9.1
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.2L i-VTEC Inline-4 NA (L12B1)', de: '1.2L i-VTEC Reihenvierzylinder Sauger (L12B1)', ru: '1.2L i-VTEC рядный 4-цил. атмосферный (L12B1)' } },
                  { k: 'displacement', v: '1,198 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V SOHC', de: '4 Zylinder · 16V SOHC', ru: '4 цилиндра · 16V SOHC' } },
                  { k: 'output', v: { en: '66 kW (90 HP)', de: '66 kW (90 PS)', ru: '66 кВт (90 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Virtually indestructible L12 four-cylinder — top TÜV reliability scores year after year.', de: 'Nahezu unverwüstlicher L12-Vierzylinder mit Spitzenwerten im TÜV-Report.', ru: 'Практически вечный 4-цилиндровый атмосферник с топовой надёжностью TÜV.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.7,
            badges: {
              en: ['Bulletproof L12B1 Chain NA', 'No Turbo / Zero EGR Issues'],
              de: ['Robuster L12B1 Kettenmotor', 'Kein Turbo / Keine AGR-Probleme'],
              ru: ['Вечный цепной L12B1', 'Без турбины и проблем с EGR']
            },
            dossier: {
              en: {
                headline: 'Ultra-Simple Port-Injected Chain Engine Built for 300,000+ km City Abuse',
                strengths: [
                  'Washes intake valves cleanly, avoiding the carbon buildup common on direct-injection city cars.',
                  'Durable steel timing chain with no wet-belt or scheduled timing-belt replacement costs.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Mechanical valve clearance inspection every ~80,000–100,000 km keeps idle smooth and fuel consumption low.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Check rear brake discs for rust/dragging and confirm all 8 spark plugs were serviced.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.',
                  'Check the oil dipstick and coolant expansion tank for clean fluids without milky residue.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 0W-20/5W-30 oil & 2-yr brake fluid flush + inspect rear brake slides for winter rust',
                    cost: '€110–180',
                    ifIgnored: 'Old sludged oil causes valve tick; rusty rear brake sliders seize pads early',
                    damageCost: '€700–1,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Adjust valve gaps (~80k), swap plugs, change 5-MT oil & check 6-yr aging drive belt / boot seals',
                    cost: '€230–370',
                    ifIgnored: 'Tight valves lose mpg, dry 6-yr drive belt frays & aged tailgate seam sealer leaks rain',
                    damageCost: '€850–1,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust valve clearances, replace spark plugs & clean exhaust ports',
                    cost: '€220–360',
                    ifIgnored: 'Hesitant low-speed jerking & engine misfires (rubber/plastic & seals also harden with age)',
                    damageCost: '€800–1,400'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Replace manual gearbox input shaft bearings if whirring starts',
                    cost: '€550–850',
                    ifIgnored: 'Worn bearing seizes and cracks gearbox housing (components & fluids also degrade over years)',
                    damageCost: '€1,300–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace clutch kit & reseal roof/tailgate water leaks',
                    cost: '€450–700',
                    ifIgnored: 'Slipping clutch & rusted damp spare-wheel floor (rubber/plastic & seals also harden with age)',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'yellow',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace water pump, drive belt & free seized rear brakes',
                    cost: '€300–520',
                    ifIgnored: 'Overheating or dragging rear brake calipers (rubber/plastic & seals also harden with age)',
                    damageCost: '€900–1,400'
                  }
                ]
              },
              de: {
                headline: 'Extrem schlichter Ketten-Saugmotor für 300.000+ km im Stadtalltag',
                strengths: [
                  'Spült die Einlassventile sauber— keine Verkokungsprobleme wie bei modernen Direkteinspritzern.',
                  'Wartungsarme Metall-Steuerkette ohne teure Zahnriemenwechsel-Intervalle.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Bei hoher Laufleistung auf das Eingangswellenlager des 5-Gang-Getriebes achten (Geräusch im Leerlauf, das beim Kupplungstreten verschwindet).',
                  'Ventilspiel alle ca. 80.000–100.000 km prüfen für ruhigen Leerlauf und niedrigen Verbrauch.'
                ],
                beforeYouBuy: [
                  'Hintere Bremsscheiben auf Rost/Schleifen prüfen und Wechsel aller 8 Zündkerzen kontrollieren.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.',
                  'Ölmessstab und Kühlmittelbehälter auf saubere Flüssigkeiten ohne Ölspuren prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 0W-20/5W-30 Öl & alle 2 J. Bremsflüssigkeit; hintere Bremssättel auf Rost prüfen',
                    cost: '110–180 €',
                    ifIgnored: 'Altöl verstärkt Ventiltickern; festgerostete hintere Bremssättel verschleißen Beläge',
                    damageCost: '700–1.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ventilspiel einstellen (~80 Tkm), Kerzen/Getriebeöl tauschen & 6-J.-Riemen sowie Kofferraum-Dichtung prüfen',
                    cost: '230–370 €',
                    ifIgnored: 'Strammes Ventilspiel kostet Leistung; gealterte Dichtnaht am Dach lässt Regen rein',
                    damageCost: '850–1.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventile einstellen, Zündkerzen tauschen & Abgaskanäle reinigen',
                    cost: '220–360 €',
                    ifIgnored: 'Ruckeln bei niedrigem Tempo & Zündaussetzer (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Lager der Getriebe-Eingangswelle bei Laufgeräusch ersetzen',
                    cost: '550–850 €',
                    ifIgnored: 'Lagerschaden zerstört das gesamte Getriebegehäuse (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Kupplungssatz tauschen & Kofferraum-Dichtnähte abdichten',
                    cost: '450–700 €',
                    ifIgnored: 'Rutschende Kupplung & durchrostete Kofferraummulde (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe, Keilriemen & hintere Bremssättel warten',
                    cost: '300–520 €',
                    ifIgnored: 'Überhitzung oder festsitzende Bremsen hinten (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '900–1.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Простейший цепной атмосферник с ресурсом свыше 300 000 км в городе',
                strengths: [
                  'Бензин омывает впускные клапаны, полностью исключая нагар.',
                  'Надёжная металлическая цепь без затрат на замену ремня.',
                  'При базовом ТО со сменой масла и фильтров уверенно ходит 300 000–350 000+ км.'
                ],
                watchouts: [
                  'Регулировка зазоров клапанов каждые ~80–100 тыс. км сохраняет тихую работу и низкий расход.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Заглянуть под пол багажника в нишу запаски— там бывает вода из-за микротрещин герметика на крыше.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.',
                  'Проверить щуп масла и расширительный бачок— жидкости должны быть чистыми без эмульсии.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год масло 0W-20/5W-30, раз в 2 года тормозная жидкость и профилактика задних тормозных скоб',
                    cost: '€110–180',
                    ifIgnored: 'Старое масло даёт стук клапанов, а задние суппорты быстро закисают зимой',
                    damageCost: '€700–1 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Регулировка клапанов (~80 тыс.), свечи, масло МКПП и проверка старого за 6 лет ремня / уплотнителей',
                    cost: '€230–370',
                    ifIgnored: 'Зажатые клапаны снижают экономичность, а старый герметик крыши пропускает дождь',
                    damageCost: '€850–1 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Отрегулировать клапаны, заменить свечи зажигания и почистить каналы',
                    cost: '€220–360',
                    ifIgnored: 'Подёргивания на малом ходу и пропуски зажигания (узлы и жидкости также стареют с годами)',
                    damageCost: '€800–1 400'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Заменить подшипник первичного вала механики при появлении шума',
                    cost: '€550–850',
                    ifIgnored: 'Заклинивший подшипник ломает корпус коробки передач (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 300–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Поменять сцепление и промазать швы крыши от протечек в багажник',
                    cost: '€450–700',
                    ifIgnored: 'Пробуксовка сцепления и ржавчина пола багажника (узлы и жидкости также стареют с годами)',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'yellow',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить водяной насос, ремень и обслужить задние суппорты',
                    cost: '€300–520',
                    ifIgnored: 'Перегрев двигателя или подклинивающие задние тормоза (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€900–1 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.1,
            badges: {
              en: ['Light 5-Speed Manual', 'Watch Input Shaft Bearings'],
              de: ['Leichtes 5-Gang-Getriebe', 'Eingangslager auf Geräusche'],
              ru: ['Лёгкая 5-МКПП', 'Шум подшипника первичного вала']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Low TÜV Suspension Defects', 'Check Rear Sill Seams'],
              de: ['Geringe TÜV-Achsmängel', 'Hintere Schwellerfalze prüfen'],
              ru: ['Минимум дефектов подвески TÜV', 'Проверка задних порогов']
            }
          },
          electronicsReliability: {
            score: 9.5,
            badges: {
              en: ['Ultra-Simple Loom & ECU', 'Near-Zero Electrical Faults'],
              de: ['Simples Bordnetz & ECU', 'Kaum Elektronik-Defekte'],
              ru: ['Простейшая проводка и ЭБУ', 'Минимум отказов электрики']
            }
          },
          rideNoiseComfort: {
            score: 5.9,
            badges: {
              en: ['Choppy Short-Wheelbase Ride', 'Audible Wind & Tyre Above 120'],
              de: ['Kurzer Radstand hoppelt etwas', 'Lauter ab 120 km/h Autobahn'],
              ru: ['Короткая база потряхивает', 'Шумно выше 120 км/ч на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 5.9,
            badges: {
              en: ['Foolproof Rotary Dials • 10 Holders', 'Hard Scratchy Plastics Throughout'],
              de: ['Narrensichere Drehregler • 10 Halter', 'Hartes Plastik im ganzen Innenraum'],
              ru: ['Удобные шайбы и 10 подстаканников', 'Жёсткий пластик отделки']
            }
          },
          visibilityManeuverability: {
            score: 9.5,
            badges: {
              en: ['Tight 9.8 m Turning Circle', '3.90 m Length & Giant Glass'],
              de: ['Enge 9,8 m Wendekreis', '3,90 m Länge & viel Glas'],
              ru: ['Малый разворот 9,8 м', 'Длина 3,90 м и большая площадь остекления']
            }
          },
          safetyProtection: {
            score: 7.0,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + VSA Stability'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + VSA-ESP'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + ESP (VSA)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.9,
            badges: {
              en: ['Big Rear Kneeroom In 3.90 m', 'Wide 80° Opening Rear Doors'],
              de: ['Viel Beinfreiheit auf 3,90 m', 'Weit öffnende Fondtüren'],
              ru: ['Удивительный простор сзади', 'Задние двери открываются широко']
            }
          },
          interiorBootSpace: {
            score: 6.8,
            badges: {
              en: ['399L Boot + 1,321L Max', 'Fold-Up Magic Seats'],
              de: ['399L Kofferraum (1.321L Max)', 'Geniale Magic Seats'],
              ru: ['Багажник 399 л (до 1 321 л)', 'Сиденья Magic Seats']
            }
          },
          payloadTowing: {
            score: 5.6,
            badges: {
              en: ['1,000 kg Braked Tow', '420 kg Subcompact Payload'],
              de: ['1.000 kg Anhängelast', '420 kg Zuladung'],
              ru: ['Прицеп до 1 000 кг', 'Грузоподъёмность 420 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.2,
            badges: {
              en: ['0–100 km/h: 12.6 s', '177 km/h Top Speed'],
              de: ['0–100 km/h: 12,6 s', '177 km/h Spitze'],
              ru: ['0–100 км/ч: 12,6 с', 'Макс. 177 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 3.7,
            badges: {
              en: ['114 Nm • Light City Tune', 'Plan Highway Overtakes Ahead'],
              de: ['114 Nm • Stadt-Auslegung', 'Überholmanöver gut planen'],
              ru: ['114 Н·м • Городской мотор', 'Обгоны на трассе заранее']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['1,075 kg Nimble City Feel', 'Some Body Roll in Corners'],
              de: ['1.075 kg Leichtgewicht', 'Etwas Seitenneigung'],
              ru: ['Лёгкий вес 1 075 кг', 'Небольшие крены в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.1,
            badges: {
              en: ['100–0 km/h: 37.8 m', 'Light Curb Weight • 4-Wheel Discs'],
              de: ['100–0 km/h: 37,8 m', 'Geringes Gewicht • 4× Scheiben'],
              ru: ['100–0 км/ч: 37,8 м', 'Малый вес • 4 дисковых тормоза']
            }
          },
          efficiencyFuel: {
            score: 7.5,
            badges: {
              en: ['5.6 L/100km', '123 g/km CO2'],
              de: ['5,6 L/100km', '123 g/km CO2'],
              ru: ['5,6 л/100 км', '123 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 9.3,
            badges: {
              en: ['€60/yr Small Tax • Euro 5', 'Lowest Subcompact Insurance'],
              de: ['60 €/Jahr Steuer • Euro 5', 'Günstigste Kleinwagen-Versicherung'],
              ru: ['Минимальный налог €60 • Euro 5', 'Самая дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Valve-Clearance Check & Iridium Spark Plugs', de: 'Ventilspiel prüfen & Iridium-Zündkerzen wechseln', ru: 'Регулировка клапанов и иридиевые свечи' }, cost: '€190–300' },
                { when: '~100,000 km · 6 yrs', action: { en: 'Honda MTF-3 5-Speed Gearbox Oil Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в 5-ст. МКПП (MTF-3)' }, cost: '€100–160' }
              ],
              critical: [
                { when: '140–200k km · 10–14 yrs', action: { en: 'Manual Gearbox Input-Shaft Bearing (Whirring Noise)', de: 'Getriebeeingangslager (Mahlgeräusch im Leerlauf)', ru: 'Подшипник первичного вала МКПП (шум на нейтрали)' }, cost: '€550–850', risk: { en: 'Loud bearing whine & eventual gearbox wear', de: 'Lauter werdendes Getriebegeräusch & Lagerschaden', ru: 'Усиление гула и износ подшипников КПП' }, damage: '€1,200–1,800' }
              ]
            },
            score: 9.5,
            badges: {
              en: ['Tiny 15" Tyres & Cheap Brakes', 'Zero Turbo / DPF / DMF Bills'],
              de: ['Günstige 15-Zoll-Reifen & Bremsen', 'Kein Turbo, DPF oder ZMS'],
              ru: ['Дешёвые шины 15" и колодки', 'Нет турбины, DPF и маховика']
            }
          },
          depreciationResale: {
            score: 9.4,
            badges: {
              en: ['Strong Used Jazz Demand', 'Minimal Value Drop'],
              de: ['Hohe Gebrauchtnachfrage', 'Sehr wertstabil'],
              ru: ['Высокий спрос на вторичке', 'Минимальная потеря цены']
            }
          }
        }
      },
      {
        id: '1.3-ivtec',
        defaultGearboxId: '5-mt-sc',
        gearboxes: [
          { id: '5-mt-sc', isDefault: true },
          {
            id: 'cvt',
            estUsedPrice: '€7,400',
            specOverrides: { sprint0100: '12.6 s', topSpeed: '175 km/h', realWorldFuel: '5.9–6.6 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 4.0,
                badges: {
                  en: ['0–100 km/h: 12.6 s (CVT)', '175 km/h Top Speed'],
                  de: ['0–100 km/h: 12,6 s (CVT)', '175 km/h Spitze'],
                  ru: ['0–100 км/ч: 12,6 s (CVT)', 'Макс. 175 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.3,
                badges: {
                  en: ['5.9–6.6 L/100 km (CVT)'],
                  de: ['5,9–6,6 L/100 km (CVT)'],
                  ru: ['5,9–6,6 L/100 km (CVT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '1.3L i-VTEC NA', de: '1.3L i-VTEC Sauger', ru: '1.3L i-VTEC Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual5', clutchDmf: '@singleClutch',
          towingBraked: '1,000 kg', sprint0100: '11.4 s', topSpeed: '182 km/h', peakTorque: '127 Nm @ 4,800',
          passingPunch: { en: 'Peppy City · High Revs Hwy', de: 'Spritzig Stadt · Drehzahl AB', ru: 'Бодро в городе · Обороты на трассе' },
          realWorldFuel: '5.6–6.2 L/100 km', tankRange: '42 L · ~710 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierVeryLow', timingDrive: '@chain', serviceWear: '@tierVeryLow'
        },
        dossierGroup: 'petrol-cvt',
        buyerFitGroup: 'na-petrol',
        isDefault: true,
        fuelType: 'petrol',
        hp: 99,
        shortTitle: 'JAZZ 1.3 i-VTEC',
        fullName: '2011 Honda Jazz 1.3 i-VTEC',
        engineBadge: '1.3L i-VTEC NA • 99 HP',
        engineSubLabel: {
          en: 'L13Z1 Chain NA (11/2008–09/2015) • 5-MT / Opt. CVT • 127 Nm',
          de: 'L13Z1 Ketten-Saugmotor (11/2008–09/2015) • 5-Gang / Opt. CVT • 127 Nm',
          ru: 'Цепной L13Z1 (11/2008–09/2015) • 5-МКПП / Опц. CVT • 127 Н·м'
        },
        rarityLabel: {
          en: 'SPACE & RELIABILITY ICON',
          de: 'RAUMWUNDER & DAUERLÄUFER',
          ru: 'ЭТАЛОН ПРАКТИЧНОСТИ'
        },
        originalMsrp: {
          en: '€16,800 New',
          de: '16.800 € Neu',
          ru: '€16 800 новый'
        },
        estUsedPrice: '€6,500',
        perkLabel: {
          en: '✦ Magic Seats + 399L Boot • Bulletproof L13Z1 Chain NA • 5.8 L/100km',
          de: '✦ Magic Seats + 399L Kofferraum • Robuster L13Z1 • 5,8 L/100km',
          ru: '✦ Magic Seats + Багажник 399 л • Вечный L13Z1 • 5,8 л/100 км'
        },
        remarkablePositives: {
          en: [
            'MAGIC SEATS (1,321L CARGO)',
            '399L CLASS-LEADING SUBCOMPACT BOOT',
            'BULLETPROOF L13Z1 CHAIN ENGINE',
            '5.8 L/100KM ECONOMY',
            '9.8M TIGHT TURNING CIRCLE'
          ],
          de: [
            'MAGIC SEATS (1.321L LADERAUM)',
            '399L RIESIGER KLEINWAGEN-KOFFERRAUM',
            'UNVERWÜSTLICHER L13Z1 KETTENMOTOR',
            '5,8 L/100KM VERBRAUCH',
            '9,8M WENDEKREIS IN DER STADT'
          ],
          ru: [
            'ТРАНСФОРМАЦИЯ MAGIC SEATS (1 321 Л)',
            'ОГРОМНЫЙ БАГАЖНИК 399 Л В КЛАССЕ',
            'ВЕЧНЫЙ ЦЕПНОЙ ДВИГАТЕЛЬ L13Z1',
            'РАСХОД 5,8 Л/100 КМ',
            'МАЛЫЙ РАДИУС РАЗВОРОТА 9,8 М'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH-REVVING FOR HIGHWAY PASSES',
            'FIRMER LOW-SPEED RIDE ON 16" WHEELS',
            'NOISY AT HIGHWAY SPEEDS'
          ],
          de: [
            'BRAUCHT DREHZAHL BEIM ÜBERHOLEN',
            'MIT 16"-FELGEN ETWAS STRAFF',
            'LAUT BEI AUTOBAHN-TEMPO'
          ],
          ru: ['НУЖНО КРУТИТЬ ПРИ ОБГОНАХ', 'ПЛОТНАЯ ПОДВЕСКА НА R16', 'ШУМНОВАТ НА ВЫСОКОЙ СКОРОСТИ']
        },
        pillarScores: {
          reliabilityQuality: 8.9,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 6.5,
          runningCostsTco: 9.0
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.3L i-VTEC Inline-4 NA (L13Z1)', de: '1.3L i-VTEC Reihenvierzylinder Sauger (L13Z1)', ru: '1.3L i-VTEC рядный 4-цил. атмосферный (L13Z1)' } },
                  { k: 'displacement', v: '1,339 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V SOHC', de: '4 Zylinder · 16V SOHC', ru: '4 цилиндра · 16V SOHC' } },
                  { k: 'output', v: { en: '73 kW (99 HP)', de: '73 kW (99 PS)', ru: '73 кВт (99 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Sweet-spot Jazz engine — bulletproof timing-chain reliability and rock-bottom running costs.', de: 'Der perfekte Jazz-Motor — unverwüstliche Steuerkette und minimale Unterhaltskosten.', ru: 'Оптимальный мотор для Jazz — неубиваемая цепь ГРМ и копеечное содержание.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.7,
            badges: {
              en: ['Bulletproof L13Z1 Chain NA', 'Clean Multi-Point Port Injection'],
              de: ['Robuster L13Z1 Kettenmotor', 'Saubere Saugrohreinspritzung'],
              ru: ['Вечный цепной L13Z1', 'Чистый распределённый впрыск MPI']
            },
            dossier: {
              en: {
                headline: 'Proven 1.3L Chain-Driven SOHC Engine— One of Europe\'s Most Reliable Subcompacts',
                strengths: [
                  'No timing belt intervals and zero intake-valve carbon buildup.',
                  'Consistently ranks among the lowest-defect used small cars in Germany and the UK.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.',
                  'Check spark plugs, ignition coils, and rubber cooling hoses for age-related wear.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.',
                  'Check the oil dipstick and coolant expansion tank for clean fluids without milky residue.',
                  'Verify documented 10,000–15,000 km oil changes and spark-plug / timing-belt receipts.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual synthetic oil + STRICT CVT auto fluid every 40,000 km / 3 yrs (if automatic) + brake flush',
                    cost: '€130–240',
                    ifIgnored: 'Aged CVT fluid triggers takeoff judder on Jazz automatics within years 3–5',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Adjust valve clearances, replace spark plugs & inspect 6-yr aging rubber drive belt and coolant hoses',
                    cost: '€240–390',
                    ifIgnored: 'Tight valves hurt fuel economy & brittle aged rubber belt or hoses leak',
                    damageCost: '€850–1,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust valves, replace spark plugs & change automatic CVT oil every 40k km',
                    cost: '€240–400',
                    ifIgnored: 'Start-up shudder in automatic box & rough acceleration (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace manual gearbox input bearing (or automated shift motor)',
                    cost: '€550–950',
                    ifIgnored: 'Loud gearbox whine or stuck gear selector leaving car immobile (components & fluids also degrade over years)',
                    damageCost: '€1,400–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace water pump, ignition coils & clean exhaust passages',
                    cost: '€280–480',
                    ifIgnored: 'Engine misfires on hills & coolant leakage (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,000–1,600'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace manual clutch kit & noisy rear wheel bearings',
                    cost: '€480–750',
                    ifIgnored: 'Slipping clutch & loud humming from rear wheels (components & fluids also degrade over years)',
                    damageCost: '€1,000–1,500'
                  }
                ]
              },
              de: {
                headline: 'Bewährter 1.3L Ketten-Saugmotor— einer der zuverlässigsten Kleinwagen Europas',
                strengths: [
                  'Keine Zahnriemenwechsel und keine Einlass-Verkokung.',
                  'Belegt regelmäßig vordere Plätze bei den mängelärmsten Gebrauchtwagen.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Ventilspiel bei 80.000–100.000 km prüfen und bei 5-Gang-Schaltern auf Lagergeräusche achten.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Im Leerlauf auf Getriebelager-Geräusche hören (Schalter) bzw. Ölwechsel alle 40.000 km prüfen (Automatik).',
                  'Kofferraummulde unter dem Teppich auf Nässe durch undichte Dachnähte kontrollieren.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Motoröl + STRENG alle 40.000 km / 3 J. CVT-Automatiköl (falls CVT) & Bremsflüssigkeit',
                    cost: '130–240 €',
                    ifIgnored: 'Gealtertes CVT-Öl verursacht starkes Anfahrruckeln schon ab dem 3.–5. Jahr',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ventilspiel einstellen, Kerzen erneuern & gealterten 6-J.-Keilriemen samt Kühlerschläuchen prüfen',
                    cost: '240–390 €',
                    ifIgnored: 'Verstellte Ventile treiben Verbrauch hoch; altersbrüchige Schläuche lecken',
                    damageCost: '850–1.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventile einstellen, Zündkerzen & Automatiköl alle 40.000 km tauschen',
                    cost: '240–400 €',
                    ifIgnored: 'Starkes Anfahr-Ruppeln im Getriebe & Leistungsverlust (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Getriebelager vorn (oder i-Shift-Kupplungsmotor) überholen',
                    cost: '550–950 €',
                    ifIgnored: 'Lautes Getriebeheulen oder blockierte Gangwahl (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Wasserpumpe, Zündspulen & Abgaskanäle erneuern',
                    cost: '280–480 €',
                    ifIgnored: 'Zündaussetzer am Berg & Kühlwasserverlust (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.000–1.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Kupplungssatz (Schalter) & hintere Radlager tauschen',
                    cost: '480–750 €',
                    ifIgnored: 'Rutschende Kupplung & lautes Brummen von hinten',
                    damageCost: '1.000–1.500 €'
                  }
                ]
              },
              ru: {
                headline: 'Проверенный цепной 1.3L— один из самых надёжных компактных авто в Европе',
                strengths: [
                  'Без замены ремня ГРМ и без проблем с нагаром на клапанах.',
                  'Стабильно занимает верхние строчки по минимальному количеству поломок.',
                  'При базовом ТО со сменой масла и фильтров уверенно ходит 300 000–350 000+ км.'
                ],
                watchouts: [
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.',
                  'Проверяйте свечи, катушки зажигания и резиновые патрубки охлаждения на возрастной износ.'
                ],
                beforeYouBuy: [
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.',
                  'Проверить щуп масла и расширительный бачок— жидкости должны быть чистыми без эмульсии.',
                  'Сверить историю замены масла каждые 10 000–15 000 км и отметки по свечам/ремню ГРМ.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно масло мотора + СТРОГО менять жидкость вариатора CVT каждые 40 тыс. км / 3 года (на АКПП)',
                    cost: '€130–240',
                    ifIgnored: 'Постаревшее масло вариатора вызывает рывки при старте уже к 3–5 годам',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Проверить клапаны, свечи и осмотреть стареющие к 6 годам приводной ремень и шланги охлаждения',
                    cost: '€240–390',
                    ifIgnored: 'Зажатые клапаны повышают расход, а высохшие от времени патрубки подтекают',
                    damageCost: '€850–1 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Настроить клапаны, свечи зажигания и менять масло вариатора раз в 40 тыс. км',
                    cost: '€240–400',
                    ifIgnored: 'Вибрация при старте вариатора и рывки на ходу (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить подшипник вала МКПП (или актуатор сцепления робота)',
                    cost: '€550–950',
                    ifIgnored: 'Сильный гул коробки или отказ переключения передач (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 400–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить помпу охлаждения, катушки зажигания и прочистить каналы',
                    cost: '€280–480',
                    ifIgnored: 'Пропуски зажигания под нагрузкой и перегрев (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 000–1 600'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить сцепление (МКПП) и гудящие задние ступичные подшипники',
                    cost: '€480–750',
                    ifIgnored: 'Пробуксовка сцепления и навязчивый гул сзади (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 000–1 500'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-MT / Reliable Honda CVT', '40k km CVT Fluid Interval'],
              de: ['5-Gang / Robuste CVT', 'CVT-Öl alle 40.000 km'],
              ru: ['5-МКПП / Вариатор Honda', 'Замена масла CVT раз в 40 тыс.']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Low TÜV Suspension Defects', 'Check Rear Sill Seams'],
              de: ['Geringe TÜV-Achsmängel', 'Hintere Schwellerfalze prüfen'],
              ru: ['Минимум дефектов подвески TÜV', 'Проверка задних порогов']
            }
          },
          electronicsReliability: {
            score: 9.5,
            badges: {
              en: ['Ultra-Simple Loom & ECU', 'Near-Zero Electrical Faults'],
              de: ['Simples Bordnetz & ECU', 'Kaum Elektronik-Defekte'],
              ru: ['Простейшая проводка и ЭБУ', 'Минимум отказов электрики']
            }
          },
          rideNoiseComfort: {
            score: 5.9,
            badges: {
              en: ['Choppy Short-Wheelbase Ride', 'Audible Wind & Tyre Above 120'],
              de: ['Kurzer Radstand hoppelt etwas', 'Lauter ab 120 km/h Autobahn'],
              ru: ['Короткая база потряхивает', 'Шумно выше 120 км/ч на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 5.9,
            badges: {
              en: ['Foolproof Rotary Dials • 10 Holders', 'Hard Scratchy Plastics Throughout'],
              de: ['Narrensichere Drehregler • 10 Halter', 'Hartes Plastik im ganzen Innenraum'],
              ru: ['Удобные шайбы и 10 подстаканников', 'Жёсткий пластик отделки']
            }
          },
          visibilityManeuverability: {
            score: 9.5,
            badges: {
              en: ['Tight 9.8 m Turning Circle', '3.90 m Length & Giant Glass'],
              de: ['Enge 9,8 m Wendekreis', '3,90 m Länge & viel Glas'],
              ru: ['Малый разворот 9,8 м', 'Длина 3,90 м и большая площадь остекления']
            }
          },
          safetyProtection: {
            score: 7.0,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + VSA Stability'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + VSA-ESP'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + ESP (VSA)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.9,
            badges: {
              en: ['Big Rear Kneeroom In 3.90 m', 'Wide 80° Opening Rear Doors'],
              de: ['Viel Beinfreiheit auf 3,90 m', 'Weit öffnende Fondtüren'],
              ru: ['Удивительный простор сзади', 'Задние двери открываются широко']
            }
          },
          interiorBootSpace: {
            score: 6.8,
            badges: {
              en: ['399L Boot + 1,321L Max', 'Fold-Up Magic Seats'],
              de: ['399L Kofferraum (1.321L Max)', 'Geniale Magic Seats'],
              ru: ['Багажник 399 л (до 1 321 л)', 'Сиденья Magic Seats']
            }
          },
          payloadTowing: {
            score: 5.6,
            badges: {
              en: ['1,000 kg Braked Tow', '425 kg Subcompact Payload'],
              de: ['1.000 kg Anhängelast', '425 kg Zuladung'],
              ru: ['Прицеп до 1 000 кг', 'Грузоподъёмность 425 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.0,
            badges: {
              en: ['0–100 km/h: 11.4 s', '182 km/h Top Speed'],
              de: ['0–100 km/h: 11,4 s', '182 km/h Spitze'],
              ru: ['0–100 км/ч: 11,4 с', 'Макс. 182 км/ч']
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
            score: 6.4,
            badges: {
              en: ['1,095 kg Nimble Handling', 'Facelift Suspension Tuning'],
              de: ['1.095 kg Handlichkeit', 'Verbessertes Facelift-Fahrwerk'],
              ru: ['Лёгкий вес 1 095 кг', 'Доработанная подвеска']
            }
          },
          brakingPerformance: {
            score: 7.1,
            badges: {
              en: ['100–0 km/h: 37.8 m', 'Light Curb Weight • 4-Wheel Discs'],
              de: ['100–0 km/h: 37,8 m', 'Geringes Gewicht • 4× Scheiben'],
              ru: ['100–0 км/ч: 37,8 м', 'Малый вес • 4 дисковых тормоза']
            }
          },
          efficiencyFuel: {
            score: 7.4,
            badges: {
              en: ['5.8 L/100km', '126 g/km CO2'],
              de: ['5,8 L/100km', '126 g/km CO2'],
              ru: ['5,8 л/100 км', '126 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 9.3,
            badges: {
              en: ['€68/yr Small Tax • Euro 5', 'Very Low Insurance Class'],
              de: ['68 €/Jahr Steuer • Euro 5', 'Sehr günstige Versicherung'],
              ru: ['Минимальный налог €68 • Euro 5', 'Очень дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Valve-Clearance Check & Iridium Spark Plugs', de: 'Ventilspiel prüfen & Iridium-Zündkerzen wechseln', ru: 'Регулировка клапанов и иридиевые свечи' }, cost: '€190–300' },
                { when: '~100,000 km · 6 yrs', action: { en: 'Honda MTF-3 5-Speed Gearbox Oil Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в 5-ст. МКПП (MTF-3)' }, cost: '€100–160' }
              ],
              critical: [
                { when: '140–200k km · 10–14 yrs', action: { en: 'Manual Gearbox Input-Shaft Bearing (Whirring Noise)', de: 'Getriebeeingangslager (Mahlgeräusch im Leerlauf)', ru: 'Подшипник первичного вала МКПП (шум на нейтрали)' }, cost: '€550–850', risk: { en: 'Loud bearing whine & eventual gearbox wear', de: 'Lauter werdendes Getriebegeräusch & Lagerschaden', ru: 'Усиление гула и износ подшипников КПП' }, damage: '€1,200–1,800' }
              ]
            },
            score: 9.4,
            badges: {
              en: ['Tiny 15" Tyres & Cheap Parts', '40k km Fluid On CVT Trims'],
              de: ['Günstige Kleinwagen-Teile', 'Bei CVT alle 40k km Ölwechsel'],
              ru: ['Дешёвые расходники', 'Масло в вариаторе каждые 40 тыс.']
            }
          },
          depreciationResale: {
            score: 9.4,
            badges: {
              en: ['High Used Jazz Demand', 'Minimal Value Drop'],
              de: ['Hohe Gebrauchtnachfrage', 'Sehr wertstabil'],
              ru: ['Высокий спрос на вторичке', 'Минимальная потеря цены']
            }
          }
        }
      },
      {
        id: '1.3-ima',
        defaultGearboxId: 'cvt',
        gearboxes: [{ id: 'cvt', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.3L IMA Hybrid', de: '1.3L IMA Hybrid', ru: '1.3L IMA Гибрид' },
          forcedInduction: '@hybridEMotor', injection: '@port', gearbox: '@cvt', clutchDmf: '@noClutch',
          bootVolume: '300 L / 1,320 L', towingBraked: '0 kg (No Tow)', sprint0100: '12.1 s', topSpeed: '175 km/h',
          peakTorque: { en: '167 Nm System', de: '167 Nm System', ru: '167 Н·м системн.' },
          passingPunch: { en: 'Smooth City E-Boost', de: 'Sanfter E-Schub Stadt', ru: 'Плавный подхват в городе' },
          brakeSetup: '@discsRegen', realWorldFuel: '4.6–5.3 L/100 km', tankRange: '40 L · ~800 km',
          euroNorm: 'Euro 5', taxInsurance: '@tierVeryLow', timingDrive: '@chain', serviceWear: '@tierLow'
        },
        dossierGroup: 'hybrid-cvt',
        buyerFitGroup: 'hybrid',
        isDefault: false,
        fuelType: 'hybrid',
        hp: 98,
        shortTitle: 'JAZZ 1.3 IMA HYBRID',
        fullName: '2011 Honda Jazz 1.3 IMA Hybrid',
        engineBadge: '1.3L i-DSI i-VTEC IMA • 98 HP',
        engineSubLabel: {
          en: 'LDA-MF6 Mild Hybrid (04/2011–09/2015) • CVT • 167 Nm Combined',
          de: 'LDA-MF6 IMA-Hybrid (04/2011–09/2015) • CVT-Automatik • 167 Nm System',
          ru: 'Гибрид LDA-MF6 IMA (04/2011–09/2015) • Вариатор CVT • 167 Н·м'
        },
        rarityLabel: {
          en: 'CITY HYBRID PIONEER',
          de: 'STADT-HYBRID-PIONIER',
          ru: 'ГОРОДСКОЙ ГИБРИД'
        },
        originalMsrp: {
          en: '€19,900 New',
          de: '19.900 € Neu',
          ru: '€19 900 новый'
        },
        estUsedPrice: '€7,200',
        perkLabel: {
          en: '✦ Efficient (4.8 L/100km) City Economy • CVT Auto • Magic Seats Retained',
          de: '✦ 4,8 L/100km Stadtverbrauch • CVT-Automatik • Magic Seats bleiben',
          ru: '✦ Расход 4,8 л/100 км • Вариатор CVT • Сохранены Magic Seats'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 4.8 L/100KM',
            'SMOOTH CVT CITY DRIVING',
            'MAGIC SEATS STILL FOLD FLAT',
            'SIMPLE MILD-HYBRID ARCHITECTURE',
            '104 G/KM LOW CO2 TAX'
          ],
          de: [
            'SPARSAM: 4,8 L/100KM',
            'SANFTE CVT-STADTAUTOMATIK',
            'MAGIC SEATS BLEIBEN ERHALTEN',
            'ROBUSTES IMA-HYBRIDSYSTEM',
            '104 G/KM NIEDRIGE KFZ-STEUER'
          ],
          ru: [
            'РАСХОД 4,8 Л/100 КМ В ГОРОДЕ',
            'ПЛАВНЫЙ ВАРИАТОР CVT',
            'СОХРАНЕНЫ СИДЕНЬЯ MAGIC SEATS',
            'ПРОСТАЯ СХЕМА ГИБРИДА IMA',
            'НИЗКИЙ ВЫБРОС 104 Г/КМ CO2'
          ]
        },
        notableNegatives: {
          en: [
            'SMALLER 300L BOOT (IMA BATTERY)',
            '0 KG TOWING RATING (NO TRAILER)',
            'AGED NIMH PACK NEEDS HEALTH CHECK'
          ],
          de: [
            'KLEINERER 300L KOFFERRAUM (AKKU)',
            '0 KG ANHÄNGELAST (KEIN HÄNGER)',
            'NIMH-HYBRIDAKKU PRÜFEN LASSEN'
          ],
          ru: [
            'МЕНЬШИЙ БАГАЖНИК 300 Л (АКБ)',
            'БУКСИРОВКА ПРИЦЕПА ЗАПРЕЩЕНА',
            'ПРОВЕРИТЬ СОСТОЯНИЕ БАТАРЕИ NIMH'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.7,
          comfortCabin: 7.8,
          spacePracticality: 7.5,
          performanceDynamics: 6.6,
          runningCostsTco: 9.0
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.3L i-VTEC IMA Inline-4 Hybrid (LDA3)', de: '1.3L i-VTEC IMA Reihenvierzylinder Hybrid (LDA3)', ru: '1.3L i-VTEC IMA рядный 4-цил. гибрид (LDA3)' } },
                  { k: 'displacement', v: '1,339 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 8V SOHC (Dual Spark)', de: '4 Zylinder · 8V SOHC (Doppelzündung)', ru: '4 цилиндра · 8V SOHC (8 свечей)' } },
                  { k: 'output', v: { en: '65 kW (88 HP) · System: 72 kW (98 HP)', de: '65 kW (88 PS) · System: 72 kW (98 PS)', ru: '65 кВт (88 л.с.) · Сист.: 72 кВт (98 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol / Electric · Timing Chain', de: 'Benzin / Elektro · Steuerkette', ru: 'Бензин / Электро · Цепь ГРМ' } }
                ],
                note: { en: 'Simple parallel IMA hybrid with timing chain; keeps driving on petrol even if the small battery ages.', de: 'Simpler Parallel-Hybrid mit Steuerkette; bleibt selbst bei gealtertem Akku fahrbereit.', ru: 'Простой параллельный гибрид с цепью ГРМ.' }
              },
              forcedInduction: '@hybridIma', injection: '@portInj'
            },
            score: 9.3,
            badges: {
              en: ['Reliable LDA Chain Engine', 'Check NiMH IMA Battery'],
              de: ['Robuster LDA-Kettenmotor', 'NiMH-Akku prüfen'],
              ru: ['Надёжный цепной LDA', 'Проверить батарею NiMH']
            },
            dossier: {
              en: {
                headline: 'Simple Parallel Mild-Hybrid System with Proven Chain-Driven Petrol Core',
                strengths: [
                  'Low-compression i-VTEC/i-DSI engine tuned for economy with zero turbocharger or direct-injection hardware.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  '10+ year-old NiMH IMA battery packs can lose capacity over time— check for IMA warning lights or frequent state-of-charge drops.',
                  'Monitor cooling system health and check hybrid battery ventilation on older high-mileage cars.'
                ],
                beforeYouBuy: [
                  'Watch the hybrid battery charge bar on the dash during a 15-minute drive— sudden plunges from full to empty mean tired battery cells.',
                  'Ask for proof that all 8 spark plugs were replaced and check the boot floor under the battery area for moisture.',
                  'Verify seamless cold start and quiet electric-to-petrol transitions during a 15-minute test drive.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 0W-20 oil, clean hybrid cooling vent + STRICT CVT fluid every 40,000 km / 2–3 yrs',
                    cost: '€180–290',
                    ifIgnored: 'Dirty aged CVT oil wrecks start clutch & blocked vent overheats hybrid pack',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace all 8 twin-spark plugs, test 12V battery & check 6-yr aging rubber belt + hybrid pack health',
                    cost: '€290–470',
                    ifIgnored: 'Worn twin plugs fry expensive ignition coils & hybrid cells weaken past year 6–7',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Change automatic CVT oil strictly every 40,000 km & replace 8 plugs',
                    cost: '€250–420',
                    ifIgnored: 'Severe take-off shudder & worn automatic belt drive (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,500'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Recondition or refresh aging hybrid IMA battery pack (cells also weaken with 10+ yrs age)',
                    cost: '€700–1,400',
                    ifIgnored: 'IMA warning light, weak boost & dead 12V battery',
                    damageCost: '€1,800–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Adjust engine valve clearances & clean exhaust gas passages',
                    cost: '€220–380',
                    ifIgnored: 'Rough low-speed hesitation & rising fuel consumption (components & fluids also degrade over years)',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace water pump & service sticky rear brake calipers',
                    cost: '€380–650',
                    ifIgnored: 'Engine overheating or dragging rusted rear brakes (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  }
                ]
              },
              de: {
                headline: 'Einfaches Parallel-Hybridsystem auf Basis eines bewährten Ketten-Benziners',
                strengths: [
                  'Auf Sparsamkeit ausgelegter Saugmotor ohne Turbolader oder Direkteinspritzung.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Über 10 Jahre alte NiMH-Hybridakkus können an Kapazität verlieren— auf IMA-Warnleuchten und Ladezustand achten.',
                  'Kühlsystem und Batteriekühlung bei älteren Fahrzeugen regelmäßig kontrollieren.'
                ],
                beforeYouBuy: [
                  'Während der Fahrt die grüne/blaue Hybrid-Ladeanzeige beobachten— stürzt sie plötzlich ab, ist die Batterie ermüdet.',
                  'Wechsel aller 8 Zündkerzen kontrollieren und Kofferraumboden auf Feuchtigkeit absuchen.',
                  'Bei der Probefahrt auf sanften Kaltstart und ruckfreie Übergänge zwischen Elektro und Benziner achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 0W-20 Öl, Hybrid-Lüftung säubern + STRENG alle 40.000 km / 2–3 J. CVT-Getriebeöl wechseln',
                    cost: '180–290 €',
                    ifIgnored: 'Verbrauchtes CVT-Öl zerstört Anfahrkupplung & Hitzestau lässt den Akku altern',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Alle 8 Doppelzünd-Kerzen tauschen, 12V-Akku testen & 6-J.-Riemen sowie Hybrid-Akku prüfen',
                    cost: '290–470 €',
                    ifIgnored: 'Alte Kerzen zerstören Zündspulen & der kleine IMA-Akku schwächelt ab dem 6.–7. Jahr',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'CVT-Getriebeöl streng alle 40.000 km wechseln & 8 Kerzen tauschen',
                    cost: '250–420 €',
                    ifIgnored: 'Heftiges Anfahr-Ruppeln & teurer Getriebeschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Gealterte IMA-Hybridbatterie auffrischen oder regenerieren',
                    cost: '700–1.400 €',
                    ifIgnored: 'IMA-Warnleuchte, fehlender E-Schub & leere 12V-Batterie',
                    damageCost: '1.800–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Ventilspiel einstellen & Abgas-Kanäle von Ruß befreien',
                    cost: '220–380 €',
                    ifIgnored: 'Stottern bei Stadttempo & steigender Benzinverbrauch (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe tauschen & schwergängige Hinterradbremsen lösen',
                    cost: '380–650 €',
                    ifIgnored: 'Motorüberhitzung oder festsitzende Bremsscheiben hinten (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Простой параллельный гибрид на базе надёжного цепного мотора 1.3L',
                strengths: [
                  'Спокойный атмосферник без турбины и прямого впрыска.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Батарея NiMH старше 10 лет может терять ёмкость— важно проверить отсутствие ошибок IMA.',
                  'Контролируйте систему охлаждения и вентиляцию гибридной батареи с возрастом.'
                ],
                beforeYouBuy: [
                  'Понаблюдать за шкалой заряда батареи на приборке: резкие скачки от полного к пустому говорят об усталости ячеек.',
                  'Убедиться в замене всех 8 свечей и сухости багажника рядом с нишей батареи.',
                  'Проверить плавный холодный пуск и незаметные переходы между электротягой и ДВС на тест-драйве.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год 0W-20, чистка обдува батареи + СТРОГО смена масла вариатора CVT каждые 40 тыс. / 2–3 года',
                    cost: '€180–290',
                    ifIgnored: 'Старая жидкость сжигает стартовое сцепление CVT, а пыль перегревает батарею',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить все 8 свечей зажигания, проверить АКБ 12В, стареющий ремень (6 лет) и состояние батареи IMA',
                    cost: '€290–470',
                    ifIgnored: 'Изношенные свечи сжигают катушки, а гибридная батарея IMA стареет к 6–7 годам',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Менять масло в вариаторе строго раз в 40 000 км и 8 свечей',
                    cost: '€250–420',
                    ifIgnored: 'Сильные рывки с места и износ шкивов вариатора (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 500'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Восстановить или заменить просевшие элементы гибридной батареи (ячейки стареют и к 10+ годам)',
                    cost: '€700–1 400',
                    ifIgnored: 'Ошибка IMA, потеря электротяги и разряд малого АКБ',
                    damageCost: '€1 800–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Отрегулировать клапаны и почистить каналы отработавших газов',
                    cost: '€220–380',
                    ifIgnored: 'Толчки на малом ходу и повышенный расход топлива (узлы и жидкости также стареют с годами)',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить помпу охлаждения и перебрать задние тормоза',
                    cost: '€380–650',
                    ifIgnored: 'Перегрев мотора или закисшие задние суппорты (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.7,
            badges: {
              en: ['Torque-Converter Honda CVT', 'Strict 40k km CVT Oil Change'],
              de: ['Honda-CVT mit Wandler', 'CVT-Öl alle 40.000 km Pflicht'],
              ru: ['Вариатор с гидротрансформатором', 'Масло CVT строго раз в 40 тыс.']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Low TÜV Suspension Defects', 'Check Rear Sill Seams'],
              de: ['Geringe TÜV-Achsmängel', 'Hintere Schwellerfalze prüfen'],
              ru: ['Минимум дефектов подвески TÜV', 'Проверка задних порогов']
            }
          },
          electronicsReliability: {
            score: 9.3,
            badges: {
              en: ['Reliable IMA Hybrid ECU', 'Keep 12V Battery Fresh'],
              de: ['Zuverlässige IMA-Steuerung', '12V-Batterie fit halten'],
              ru: ['Надёжный блок IMA', 'Следить за АКБ 12 В']
            }
          },
          rideNoiseComfort: {
            score: 5.9,
            badges: {
              en: ['Choppy Short-Wheelbase Ride', 'Audible Wind & Tyre Above 120'],
              de: ['Kurzer Radstand hoppelt etwas', 'Lauter ab 120 km/h Autobahn'],
              ru: ['Короткая база потряхивает', 'Шумно выше 120 км/ч на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 5.9,
            badges: {
              en: ['Foolproof Rotary Dials • 10 Holders', 'Hard Scratchy Plastics Throughout'],
              de: ['Narrensichere Drehregler • 10 Halter', 'Hartes Plastik im ganzen Innenraum'],
              ru: ['Удобные шайбы и 10 подстаканников', 'Жёсткий пластик отделки']
            }
          },
          visibilityManeuverability: {
            score: 9.5,
            badges: {
              en: ['Tight 9.8 m Turning Circle', '3.90 m Length & Giant Glass'],
              de: ['Enge 9,8 m Wendekreis', '3,90 m Länge & viel Glas'],
              ru: ['Малый разворот 9,8 м', 'Длина 3,90 м и большая площадь остекления']
            }
          },
          safetyProtection: {
            score: 7.0,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + VSA Stability'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + VSA-ESP'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + ESP (VSA)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.9,
            badges: {
              en: ['Big Rear Kneeroom In 3.90 m', 'Wide 80° Opening Rear Doors'],
              de: ['Viel Beinfreiheit auf 3,90 m', 'Weit öffnende Fondtüren'],
              ru: ['Удивительный простор сзади', 'Задние двери открываются широко']
            }
          },
          interiorBootSpace: {
            score: 6.0,
            badges: {
              en: ['300L Boot (Battery Under Floor)', 'Magic Seats Retained'],
              de: ['300L Kofferraum (Akku unter Boden)', 'Magic Seats erhalten'],
              ru: ['Багажник 300 л (АКБ под полом)', 'Magic Seats сохранены']
            }
          },
          payloadTowing: {
            score: 2.8,
            badges: {
              en: ['0 kg Towing Limit', '370 kg Payload'],
              de: ['0 kg Anhängelast', '370 kg Zuladung'],
              ru: ['Без буксировки прицепа', 'Грузоподъёмность 370 кг']
            },
            dossier: {
              en: {
                headline: '0 kg Towing Limit • 370 kg Payload',
                lowScoreReasons: [
                  'Zero factory towing rating (0 kg) due to the rear IMA hybrid battery packaging and CVT drivetrain.',
                  'Hybrid battery pack cuts available payload to 370 kg, tightening margins with four adults and heavy luggage.'
                ],
                strengths: [
                  'Rear IMA battery sits neatly below the boot floor without spoiling everyday grocery capacity.'
                ],
                watchouts: ['Check load distribution when carrying 4 adults plus luggage over rough speed bumps.'],
                beforeYouBuy: ['Confirm rear springs are level and not sagging under age or past heavy loads.']
              },
              de: {
                headline: '0 kg Anhängelast • 370 kg Zuladung',
                lowScoreReasons: [
                  'Keine Anhänger-Freigabe ab Werk (0 kg) wegen der hinten verbauten IMA-Hybridbatterie und des CVT-Getriebes.',
                  'Durch das Hybrid-Batteriepaket sinkt die Nutzlast auf 370 kg, was bei voller Besetzung knapp wird.'
                ],
                strengths: [
                  'Der kompakte IMA-Akku liegt platzsparend unter dem Kofferraumboden ohne große Alltagseinbußen.'
                ],
                watchouts: [
                  'Bei vier Erwachsenen samt Gepäck die begrenzte Zuladung an steilen Einfahrten im Blick behalten.'
                ],
                beforeYouBuy: [
                  'Prüfen, ob die Hinterachse unbeladen sauber waagerecht steht und die Federn nicht durchhängen.'
                ]
              },
              ru: {
                headline: 'Без буксировки прицепа • Грузоподъёмность 370 кг',
                lowScoreReasons: [
                  'Буксировка прицепов запрещена заводом (0 кг) из-за задней гибридной батареи IMA и вариатора CVT.',
                  'Масса гибридного блока снижает полезную нагрузку до 370 кг — запас при полной посадке невелик.'
                ],
                strengths: [
                  'Батарея IMA компактно размещена под полом багажника и почти не мешает повседневным перевозкам.'
                ],
                watchouts: ['При посадке четырёх взрослых с багажом следите за просветом на неровностях.'],
                beforeYouBuy: ['Осмотрите задние пружины и корму без груза на предмет просадки.']
              }
            }
          },
          accelerationOvertaking: {
            score: 4.5,
            badges: {
              en: ['0–100 km/h: 12.1 s', '175 km/h Top Speed'],
              de: ['0–100 km/h: 12,1 s', '175 km/h Spitze'],
              ru: ['0–100 км/ч: 12,1 с', 'Макс. 175 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.7,
            badges: {
              en: ['167 Nm + Instant e-CVT', 'High-RPM Passing Noise'],
              de: ['167 Nm + E-Antrieb', 'Laut beim Überholen ab 100'],
              ru: ['167 Н·м + электротяга', 'Шумит при обгоне на трассе']
            }
          },
          handlingAgility: {
            score: 5.7,
            badges: {
              en: ['1,162 kg City Agility', 'Soft Eco-Tuned Ride'],
              de: ['1.162 kg Wendigkeit', 'Komfortables Eco-Fahrwerk'],
              ru: ['Лёгкость в городе (1 162 кг)', 'Мягкая настройка']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 37.8 m', 'Light Curb Weight • 4-Wheel Discs'],
              de: ['100–0 km/h: 37,8 m', 'Geringes Gewicht • 4× Scheiben'],
              ru: ['100–0 км/ч: 37,8 м', 'Малый вес • 4 дисковых тормоза']
            }
          },
          efficiencyFuel: {
            score: 8.3,
            badges: {
              en: ['Efficient (4.8 L/100km)', '104 g/km CO2'],
              de: ['Sparsam (4,8 L/100km)', '104 g/km CO2'],
              ru: ['Экономичный (4,8 л/100 км)', '104 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 9.4,
            badges: {
              en: ['€38/yr Hybrid Tax • Euro 5', 'Very Low Hybrid Insurance'],
              de: ['38 €/Jahr Hybridsteuer • Euro 5', 'Sehr günstige Versicherung'],
              ru: ['Налог гибрида €38 • Euro 5', 'Очень дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~40,000 km · 3 yrs', action: { en: 'Honda CVT Transmission Fluid Change (Strict Interval)', de: 'Honda CVT-Getriebeöl wechseln (Strikt alle 40.000 km)', ru: 'Замена масла в вариаторе CVT (строго раз в 40 тыс. км)' }, cost: '€130–210' },
                { when: '~100,000 km · 6 yrs', action: { en: '8× Iridium Spark Plugs (Dual-Spark Head) & Valve Check', de: '8× Iridium-Zündkerzen (Doppelzündung) & Ventilspiel', ru: '8 иридиевых свечей и проверка клапанов' }, cost: '€260–400' }
              ],
              critical: [
                { when: '150–230k km · 10–15 yrs', action: { en: '0.6 kWh NiMH IMA Hybrid Battery Pack Refresh', de: '0,6 kWh NiMH IMA-Hybridakku aufbereiten / tauschen', ru: 'Восстановление или замена батареи IMA (0.6 кВт·ч)' }, cost: '€750–1,400', risk: { en: 'IMA warning light & loss of electric assist', de: 'IMA-Warnleuchte & Wegfall der E-Unterstützung', ru: 'Ошибка IMA и отключение электропомощи' }, damage: '€1,500–2,200' }
              ]
            },
            score: 9.0,
            badges: {
              en: ['Regen Saves Brake Wear', '40k CVT Oil • Ageing NiMH Pack'],
              de: ['Rekuperation schont Bremsen', 'CVT-Öl (40k) • Alterung IMA-Akku'],
              ru: ['Рекуперация бережёт тормоза', 'Масло CVT 40 тыс. • Износ батареи']
            }
          },
          depreciationResale: {
            score: 9.4,
            badges: {
              en: ['High City Hybrid Demand', 'Strong Resale Value'],
              de: ['Hohe Hybrid-Nachfrage', 'Guter Werterhalt'],
              ru: ['Высокий спрос на гибрид', 'Отлично держит цену']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: { sideRear: true },
  paints: [
    { name: 'Deep Sapphire Blue', code: 'B-548P', hex: '#213f6e', glow: 'rgba(33, 63, 110, 0.2)' },
    { name: 'Alabaster Silver', code: 'NH-700M', hex: '#b8c0c8', glow: 'rgba(184, 192, 200, 0.16)' },
    { name: 'Crystal Black Pearl', code: 'NH-731P', hex: '#171a1f', glow: 'rgba(65, 76, 92, 0.18)' },
    { name: 'Taffeta White', code: 'NH-578', hex: '#f1f3f6', glow: 'rgba(241, 243, 246, 0.16)' },
    { name: 'Milano Red', code: 'R-81', hex: '#c81c24', glow: 'rgba(200, 28, 36, 0.2)' },
    { name: 'Polished Metal Metallic', code: 'NH-737M', hex: '#5b6168', glow: 'rgba(91, 97, 104, 0.18)' },
    { name: 'Cerulean Blue', code: 'B-549M', hex: '#4e7da8', glow: 'rgba(78, 125, 168, 0.2)', isDefault: true },
    { name: 'Urban Titanium', code: 'YR-578M', hex: '#6c6861', glow: 'rgba(108, 104, 97, 0.18)' },
    { name: 'Fresh Lime Metallic', code: 'G-531M', hex: '#869a47', glow: 'rgba(134, 154, 71, 0.2)' },
    { name: 'Deep Violet Pearl', code: 'RP-43P', hex: '#3e2d49', glow: 'rgba(62, 45, 73, 0.2)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '1.3-ivtec',
    defaultGroupKey: 'petrol-na',
    engineCosts: {
      '1.2-ivtec': { group: 'petrol-na', avgFuelL100: 5.8, fuelPrice: 1.75, tax: 60, ins: 460, service: 220 },
      '1.3-ivtec': { group: 'petrol-na', avgFuelL100: 5.9, fuelPrice: 1.75, tax: 68, ins: 480, service: 240 },
      '1.3-ima':   { group: 'hybrid',    avgFuelL100: 4.9, fuelPrice: 1.75, tax: 38, ins: 490, service: 260 }
    },
    groups: {
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 5%', note: 'Repeatedly among the lowest-defect used small cars in Germany across 6–13 yr tests' },
            { source: 'ADAC Pannenstatistik', value: 'Benchmark Reliable', note: 'Simple chain-driven L-series petrol with minimal roadside breakdown risk' },
            { source: 'WhatCar? Survey', value: '98.5% Reliability', note: 'Consistently leads the Used Small Car class for trouble-free ownership' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 5 %', note: 'Gehört bei 6–13 Jahre alten Kleinwagen seit Jahren zu den mängelärmsten Modellen' },
            { source: 'ADAC Pannenstatistik', value: 'Klassen-Referenz', note: 'Simpler Ketten-Benziner der L-Serie mit extrem niedriger Pannenquote' },
            { source: 'WhatCar? Umfrage', value: '98,5 % Zuverlässigkeit', note: 'Dauersieger bei zuverlässigen gebrauchten Kleinwagen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-5%', note: 'Многократно в числе самых беспроблемных авто B-класса в возрасте 6–13 лет' },
            { source: 'ADAC Pannenstatistik', value: 'Эталон надёжности', note: 'Простой цепной мотор серии L с минимальным риском поломок в дороге' },
            { source: 'Рейтинг WhatCar?', value: '98,5% надёжности', note: 'Многолетний лидер рейтинга надёжности подержанных компакт-хэтчей' }
          ]
        },
        extendedChecks: {
          en: [
            'Lift the boot carpet and spare-wheel well for dampness — aging roof-rail seam sealer near the tailgate hinges can weep rain.',
            'Listen at idle with clutch released vs. pressed for light whirring from manual gearbox input-shaft bearings.',
            'Inspect rear brake discs for deep corrosion grooves and verify parking brake releases cleanly on both rear calipers.',
            'If fitted with optional CVT automatic (2011+ 1.3), verify 40,000 km fluid changes and zero takeoff shudder.'
          ],
          de: [
            'Kofferraumboden und Reserveradmulde auf Feuchtigkeit prüfen — alte Dichtnähte an der Dachrinne/Heckklappe können lecken.',
            'Im Leerlauf Kupplung lösen und treten: auf leichtes Mahlen vom Getriebeeingangslager achten.',
            'Hintere Bremsscheiben auf Rostränder prüfen und sicherstellen, dass die Handbremse sauber löst.',
            'Bei 1.3 CVT-Automatik (ab 2011) strikte 40.000-km-Getriebeölwechsel und ruckfreies Anfahren kontrollieren.'
          ],
          ru: [
            'Поднять коврик багажника и проверить нишу запаски на влагу — старый герметик швов крыши у петель может подтекать.',
            'На холостых послушать коробку с отпущенным и нажатым сцеплением на предмет гула входного подшипника.',
            'Осмотреть задние тормозные диски на коррозию и проверить, не подклинивают ли задние суппорты.',
            'На версии 1.3 с вариатором CVT (2011+) убедиться в замене масла каждые 40 тыс. км и отсутствии рывков при старте.'
          ]
        },
        savingsNote: {
          en: 'Rock-bottom €60–€68/yr tax, cheap 15" consumables, and zero turbo/DPF complexity keep Jazz GE running costs ~€450–€650/yr below class average.',
          de: 'Niedrige 60–68 €/Jahr Steuer, günstige 15"-Reifen und null Turbo-/DPF-Risiko drücken die Jahreskosten deutlich unter den Klassenschnitt.',
          ru: 'Минимальный налог (€60–68/год), недорогие шины R15 и отсутствие турбины/DPF держат расходы заметно ниже среднего по классу.'
        },
        market: {
          supplyDemand: {
            en: 'High private-buyer demand keeps clean low-mileage 1.3 i-VTEC manuals scarce; tidy cars sell fast at firm prices.',
            de: 'Hohe Privatnachfrage macht gepflegte 1.3 i-VTEC Schalter mit wenig Kilometern rar und wertstabil.',
            ru: 'Высокий спрос со стороны частников делает ухоженные 1.3 i-VTEC на механике с небольшим пробегом дефицитными.'
          },
          sweetSpot: {
            en: '2011–2015 Facelift 1.3 i-VTEC Comfort (5-MT) under 115,000 km with dry boot well and stamped service book (€6,200–€7,800).',
            de: 'Facelift 2011–2015 als 1.3 i-VTEC Comfort (5-Gang) unter 115.000 km mit trockenem Kofferraum (6.200–7.800 €).',
            ru: 'Рестайлинг 2011–2015 гг. 1.3 i-VTEC Comfort (5-ст. МКПП) до 115 тыс. км с сухим багажником (€6 200–7 800).'
          },
          outlook3to5yr: {
            en: 'Very slow depreciation toward €4,200–€5,200 in 3–5 yrs; Jazz practicality and reliability give it one of the highest price floors in the segment.',
            de: 'Sehr langsamer Wertverlust Richtung 4.200–5.200 € in 3–5 Jahren — Raumkonzept und Zuverlässigkeit stützen den Preis stark.',
            ru: 'Медленное снижение до €4 200–5 200 через 3–5 лет: практичность Magic Seats и надёжность удерживают цену лучше конкурентов.'
          }
        },
        watchoutExtra: {
          en: [
            'Roof-channel seam sealer at the top of the tailgate can dry out on 10+ yr cars and drip water into the spare-wheel well.',
            'Manual 5-speed gearbox input-shaft bearings can develop an audible idle whine around 140,000–180,000 km if oil changes were neglected.'
          ],
          de: [
            'Dichtmasse in den Dachkanälen oben an der Heckklappe härtet nach 10+ Jahren teils aus und lässt Regenwasser in den Kofferraum.',
            'Das Eingangslager des 5-Gang-Schaltgetriebes kann bei 140–180 Tkm ein leichtes Jaulen im Leerlauf entwickeln.'
          ],
          ru: [
            'Шовный герметик в водостоках крыши у пятой двери со временем трескается и пропускает воду в нишу запаски.',
            'К 140–180 тыс. км подшипник первичного вала 5-ст. МКПП может начать подвывать на холостых.'
          ]
        }
      },
      hybrid: {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 8%', note: 'Mechanical chassis and petrol core hold up excellently; watch rear brakes on regen-driven cars' },
            { source: 'ADAC Pannenstatistik', value: 'High Reliability', note: 'Dependable parallel IMA hardware; 12V auxiliary battery is the primary age-related callout' },
            { source: 'WhatCar? Survey', value: '96.8% Reliability', note: 'Very few powertrain faults, though CVT fluid and 10+ yr NiMH pack health matter' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 8 %', note: 'Mechanik und Benzinmotor sind extrem haltbar; hintere Bremsen durch Rekuperation auf Rost prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr pannensicher', note: 'Solide IMA-Technik; altersbedingt schwächelt am ehesten die kleine 12V-Starterbatterie' },
            { source: 'WhatCar? Umfrage', value: '96,8 % Zuverlässigkeit', note: 'Kaum Antriebsdefekte; strikter CVT-Ölwechsel und 10+ Jahre Akku-Zustand entscheidend' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-8%', note: 'Ходовая и бензиновая часть очень надёжны; задние тормоза страдают от редкого нажатия из-за рекуперации' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Простая система IMA редко подводит; чаще всего с возрастом устаёт обычный 12В аккумулятор' },
            { source: 'Рейтинг WhatCar?', value: '96,8% надёжности', note: 'Минимум поломок при условии свежего масла в CVT и живой высоковольтной батареи NiMH' }
          ]
        },
        extendedChecks: {
          en: [
            'Watch the dash IMA battery gauge during a 15-minute test drive: sudden drops from full to 1–2 bars indicate aging NiMH cells.',
            'Verify strict 40,000 km / 3-yr Honda CVT transmission fluid receipts and test smooth creeping uphill without judder.',
            'Confirm all 8 twin-spark plugs were replaced on schedule (~80–100k km) and check for smooth Eco-Idle restart.',
            'Check the rear under-floor IMA battery compartment for boot water-leak moisture and clean cooling duct airflow.'
          ],
          de: [
            'IMA-Ladeanzeige auf 15-minütiger Probefahrt beobachten: plötzliche Sprünge von voll auf leer deuten auf gealterte Zellen hin.',
            'Belege für strikte CVT-Ölwechsel alle 40.000 km / 3 Jahre prüfen und sanftes Anfahren am Berg ohne Ruckeln testen.',
            'Wechsel aller 8 Zündkerzen (Doppelzündung) laut Serviceheft prüfen und sauberen Start-Stopp-Wiederanlauf testen.',
            'Unterbodenfach des IMA-Akkus im Kofferraum auf Feuchtigkeit (Dachnaht-Undichtigkeit) und freie Kühlluftzufuhr prüfen.'
          ],
          ru: [
            'На 15-минутной поездке следить за шкалой заряда IMA: резкие провалы с максимума до 1–2 делений говорят об износе ячеек NiMH.',
            'Проверить чеки замены масла Honda CVT каждые 40 000 км и плавный старт в горку без рывков.',
            'Убедиться в своевременной замене всех 8 свечей зажигания и мягком перезапуске двигателя в режиме старт-стоп.',
            'Осмотреть отсек батареи IMA под полом багажника на сухость и чистоту воздуховода охлаждения.'
          ]
        },
        savingsNote: {
          en: 'Urban ~4.9 L/100 km fuel use, €38/yr tax, and regenerative braking save ~€400–€650/yr vs. subcompact petrol rivals, offset slightly by 8-plug & 40k CVT upkeep.',
          de: 'Rund 4,9 L/100 km Stadtverbrauch, 38 €/Jahr Steuer und Rekuperation sparen ca. 400–650 €/Jahr gegenüber Konkurrenten.',
          ru: 'Городской расход ~4,9 л/100 км, минимальный налог и рекуперация экономят около €400–650 в год по сравнению с бензиновыми аналогами.'
        },
        market: {
          supplyDemand: {
            en: 'Smaller supply than conventional 1.3 petrol Jazz; prized by urban drivers seeking automatic CVT ease and low emissions.',
            de: 'Seltener als der normale 1.3 Benziner; sehr beliebt bei Stadtfahrern wegen CVT-Automatik und niedrigem Verbrauch.',
            ru: 'Встречается реже обычного 1.3; востребован в городе благодаря вариатору CVT и низкому расходу.'
          },
          sweetSpot: {
            en: '2012–2015 Jazz 1.3 IMA Comfort / Elegance under 120,000 km with documented CVT oil & healthy IMA charge stability (€6,800–€8,400).',
            de: '2012–2015 Jazz 1.3 IMA Comfort / Elegance unter 120.000 km mit belegtem CVT-Service & stabilem Akku (6.800–8.400 €).',
            ru: '2012–2015 гг. Jazz 1.3 IMA Comfort / Elegance до 120 тыс. км с историей ТО вариатора и живой батареей (€6 800–8 400).'
          },
          outlook3to5yr: {
            en: 'Holds ~€4,600–€5,800 in 3–5 yrs if the NiMH pack remains healthy; cars with weak IMA packs sell at a €1,000–€1,400 discount.',
            de: 'Bleibt bei intaktem Akku in 3–5 Jahren stabil bei ca. 4.600–5.800 €; schwache Batterien drücken den Preis um 1.000–1.400 €.',
            ru: 'При исправной батарее удерживает €4 600–5 800 через 3–5 лет; экземпляры с уставшей АКБ продаются с дисконтом €1 000–1 400.'
          }
        },
        watchoutExtra: {
          en: [
            '0.6 kWh NiMH battery pack under the boot floor shrinks cargo capacity from 399 L to 300 L and removes trailer towing approval (0 kg).',
            'Reconditioning or replacing an aged 12+ yr IMA battery pack costs roughly €750–€1,400 if IMA warning lights appear.'
          ],
          de: [
            'Der 0,6-kWh-NiMH-Akku unter dem Ladeboden verkleinert den Kofferraum von 399 auf 300 L und streicht die Anhängelast (0 kg).',
            'Nach 12+ Jahren kann eine Aufbereitung oder ein Tausch des IMA-Akkus ca. 750–1.400 € kosten.'
          ],
          ru: [
            'Батарея NiMH (0.6 кВт·ч) под полом уменьшает багажник с 399 до 300 л и полностью исключает буксировку прицепа (0 кг).',
            'Восстановление или замена возрастной батареи IMA старше 12 лет обойдётся примерно в €750–1 400.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (Jazz GE)', de: 'EU / DE Ausstattungslinien (Jazz GE)', ru: 'Европейские комплектации (Jazz GE)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2011+ facelift condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Facelift-Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: '2011 Facelift (GE II) Cabin & Chassis Upgrades', de: 'Facelift-Upgrades ab 2011 (GE II)', ru: 'Обновления рестайлинга 2011 года (GE II)' },
      faceliftKicker: { en: '2011+ Refresh', de: 'Facelift 2011+', ru: 'Рестайлинг 2011+' },
      trims: [
        {
          id: 's',
          tierClass: 'tier-1',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'S', de: 'S', ru: 'S' },
          delta: { en: '-€600 – €900', de: '-600 – 900 €', ru: '-€600 – €900' },
          isSweetSpot: false,
          summary: {
            en: 'Bare-bones city spec with Magic Seats intact, but steel wheels and often no A/C on early cars.',
            de: 'Schlichtes Basismodell mit Magic Seats, aber Stahlfelgen und teils ohne Klimaanlage bei frühen Baujahren.',
            ru: 'Базовая городская версия с креслами Magic Seats, но на штамповках и иногда без кондиционера.'
          },
          highlights: {
            en: ['Honda Magic Seats & VSA stability control', '15" steel wheels & basic CD radio', 'Manual windows rear on earliest base cars'],
            de: ['Honda Magic Seats & VSA-Stabilitätsprogramm', '15"-Stahlfelgen & Basis-CD-Radio', 'Teils manuelle Fensterheber hinten'],
            ru: ['Кресла Magic Seats и система VSA', 'Штампованные диски 15" и CD-магнитола', 'На ранних версиях сзади вёсла']
          }
        },
        {
          id: 'trend',
          tierClass: 'tier-2',
          tier: { en: 'Essential', de: 'Einstieg', ru: 'Стандарт' },
          name: { en: 'Trend', de: 'Trend', ru: 'Trend' },
          delta: { en: '-€200 – €400', de: '-200 – 400 €', ru: '-€200 – €400' },
          isSweetSpot: false,
          summary: {
            en: 'Sensible starter spec adding manual A/C, all-round electric windows, and multifunction steering wheel.',
            de: 'Vernünftiger Einstieg mit Klimaanlage, 4x elektrischen Fensterhebern und Multifunktionslenkrad.',
            ru: 'Рациональная база с кондиционером, полным электропакетом и кнопками на руле.'
          },
          highlights: {
            en: ['Manual A/C & 4× electric windows', 'USB / AUX audio & multifunction wheel', 'Heated electric door mirrors'],
            de: ['Klimaanlage & 4x elektrische Fensterheber', 'USB / AUX & Multifunktionslenkrad', 'Beheizbare Außenspiegel'],
            ru: ['Кондиционер и 4 электростеклоподъёмника', 'USB / AUX и мультируль', 'Обогрев боковых зеркал']
          }
        },
        {
          id: 'comfort',
          tierClass: 'tier-3',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Comfort', de: 'Comfort', ru: 'Comfort' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'The used Jazz sweet spot — brings 15" alloys, automatic climate control, and chilled glovebox.',
            de: 'Der beste Jazz-Allrounder: 15"-Alufelgen, Klimaautomatik, gekühltes Handschuhfach und Lederlenkrad.',
            ru: 'Оптимальный выбор на вторичке: литые диски 15", климат-контроль и охлаждаемый бардачок.'
          },
          highlights: {
            en: ['15" alloy wheels & single-zone auto climate', 'Leather wheel & cooled upper glovebox', 'Power-folding mirrors & rear speakers'],
            de: ['15"-Alufelgen & Klimaautomatik', 'Lederlenkrad & gekühltes Handschuhfach', 'Elektrisch anklappbare Spiegel'],
            ru: ['Диски 15" и климат-контроль', 'Кожаный руль и охлаждаемый бардачок', 'Электроскладывание зеркал']
          }
        },
        {
          id: 'elegance',
          tierClass: 'tier-4',
          tier: { en: 'Plus', de: 'Gehoben', ru: 'Плюс' },
          name: { en: 'Elegance', de: 'Elegance', ru: 'Elegance' },
          delta: { en: '+€300 – €600', de: '+300 – 600 €', ru: '+€300 – €600' },
          isSweetSpot: false,
          summary: {
            en: 'Popular high-spec trim adding cruise control, rain/light sensors, and 16" alloys.',
            de: 'Beliebte gehobene Ausstattung mit Tempomat, Licht-/Regensensor, Parksensoren und 16"-Alus.',
            ru: 'Богатая комплектация с круиз-контролем, датчиками света/дождя и дисками 16".'
          },
          highlights: {
            en: ['16" alloys & front fog lights', 'Cruise control & auto wipers/headlights', 'Rear parking sensors common'],
            de: ['16"-Alufelgen & Nebelscheinwerfer', 'Tempomat & Licht-/Regensensor', 'Oft Einparkhilfe hinten'],
            ru: ['Диски 16" и противотуманные фары', 'Круиз-контроль и датчики света/дождя', 'Часто задний парктроник']
          }
        },
        {
          id: 'exclusive',
          tierClass: 'tier-6',
          tier: { en: 'Flagship Comfort', de: 'Exclusive', ru: 'Премиум' },
          name: { en: 'Exclusive', de: 'Exclusive', ru: 'Exclusive' },
          delta: { en: '+€600 – €1,100', de: '+600 – 1.100 €', ru: '+€600 – €1 100' },
          isSweetSpot: false,
          summary: {
            en: 'Top comfort trim featuring the signature full-length panoramic glass roof, heated seats, and privacy glass.',
            de: 'Top-Komfortlinie mit großem Panorama-Glasdach, Sitzheizung vorn und dunkel getönten Fondscheiben.',
            ru: 'Топовая комфортная версия с большой панорамной крышей, подогревом сидений и тонировкой.'
          },
          highlights: {
            en: ['Full-length panoramic glass roof', 'Heated front seats & privacy glass', 'Leather / upgraded seat trim option'],
            de: ['Großes Panorama-Glasdach', 'Sitzheizung vorn & Privacy-Verglasung', 'Optional mit Leder-Ausstattung'],
            ru: ['Большая панорамная крыша', 'Подогрев сидений и заводская тонировка', 'Опциональный кожаный салон']
          }
        },
        {
          id: 'si',
          tierClass: 'tier-7',
          tier: { en: 'Sport Spec', de: 'Sportmodell', ru: 'Спорт' },
          name: { en: 'Si', de: 'Si', ru: 'Si' },
          delta: { en: '+€700 – €1,200', de: '+700 – 1.200 €', ru: '+€700 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Rare late-model sporty edition with sharper dampers, bespoke 16" wheels, aero bumpers, and sport seats.',
            de: 'Seltene Sport-Edition mit strafferer Abstimmung, eigenen 16"-Felgen, Sportstoßfängern und Kontursitzen.',
            ru: 'Редкая спортивная версия с более плотной подвеской, обвесом, дисками 16" и спорткреслами.'
          },
          highlights: {
            en: ['Sport aero bumpers & side skirts', 'Revised stiffer dampers & quick steering', '16" dark-silver Si alloys & sport upholstery'],
            de: ['Sport-Stoßfänger & Seitenschweller', 'Strafferes Sportfahrwerk & direktere Lenkung', 'Eigene 16"-Si-Felgen & Sportsitze'],
            ru: ['Спортивный обвес и накладки порогов', 'Более плотная подвеска и острое рулевое', 'Фирменные диски 16" и спортсиденья']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Air Conditioning / Auto Climate', de: 'Klimaanlage / Klimaautomatik', ru: 'Кондиционер / Климат-контроль' }, vals: ['opt', 'std', 'std', 'std', 'std', 'std'] },
        { feature: { en: '15" / 16" Alloy Wheels', de: '15"- / 16"-Leichtmetallfelgen', ru: 'Литые диски 15" / 16"' }, vals: ['no', 'no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'USB Audio & Multifunction Wheel', de: 'USB-Audio & Multifunktionslenkrad', ru: 'USB-аудио и мультируль' }, vals: ['no', 'std', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Cruise Control', de: 'Tempomat', ru: 'Круиз-контроль' }, vals: ['no', 'no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Rear Parking Sensors', de: 'Parksensoren hinten', ru: 'Задние парктроники' }, vals: ['no', 'no', 'opt', 'std', 'std', 'opt'] },
        { feature: { en: 'Panoramic Glass Roof', de: 'Panorama-Glasdach', ru: 'Панорамная крыша' }, vals: ['no', 'no', 'no', 'opt', 'std', 'no'] },
        { feature: { en: 'Auto Headlights & Rain Sensor', de: 'Licht- & Regensensor', ru: 'Датчики света и дождя' }, vals: ['no', 'no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats (or Sport Chassis)', de: 'Sitzheizung vorn (bzw. Sportfahrwerk)', ru: 'Подогрев сидений (или спортподвеска)' }, vals: ['no', 'no', 'opt', 'opt', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Tall MPV-like seating and huge front glass deliver class-leading city visibility and effortless step-in height.',
          'Dual gloveboxes (upper cooled) plus 10 cupholders and door pockets swallow family clutter with ease.',
          'Magic Seats fold completely flat or flip upright like cinema chairs, yielding 399 L boot (300 L IMA) and 1,321 L max cargo.'
        ],
        de: [
          'Hohe Sitzposition und riesige Glasflächen bieten erstklassige Stadt-Rundumsicht und bequemen Einstieg.',
          'Doppel-Handschuhfach (oben gekühlt) und zehn Getränkehalter bieten außergewöhnlich viele Alltagslösungen.',
          'Magic Seats lassen sich flach umlegen oder hochklappen — 399 L Kofferraum (300 L IMA) bis 1.321 L Ladevolumen.'
        ],
        ru: [
          'Высокая посадка и огромная площадь остекления дают образцовый круговой обзор и удобный вход.',
          'Двойной бардачок (верхний с охлаждением) и десять подстаканников вмещают массу мелочей.',
          'Сиденья Magic Seats складываются в ровный пол или поднимаются вверх: багажник 399 л (300 л у IMA) и до 1 321 л.'
        ]
      },
      cabinByPowertrain: {
        hybrid: {
          en: '1.3 IMA Hybrid swaps standard gauges for blue-glowing Eco Assist dials with an IMA Charge/Assist bar, adds an ECON mode button and paddle-shift CVT lever, and houses the 0.6 kWh battery beneath the boot floor (300 L boot vs. 399 L, Magic Seats unchanged).',
          de: 'Der 1.3 IMA Hybrid besitzt blau leuchtende Eco-Assist-Instrumente mit Lade-/Assistenzanzeige, ECON-Taste, CVT-Wählhebel mit Schaltwippen und den 0,6-kWh-Akku unter dem Ladeboden (300 L statt 399 L Kofferraum, Magic Seats bleiben voll nutzbar).',
          ru: 'Гибрид 1.3 IMA отличается синей подсветкой приборов Eco Assist со шкалой заряда, кнопкой ECON, селектором CVT с подрулевыми лепестками и батареей под полом (багажник 300 л вместо 399 л при сохранённых Magic Seats).'
        },
        conventional: {
          en: '1.2 and 1.3 i-VTEC petrol cabins pair crisp amber/white analog gauges with a light, precise 5-speed manual (or 2011+ CVT on 1.3) and unlock the full deep 399 L under-floor luggage well.',
          de: '1.2 und 1.3 i-VTEC Benziner kombinieren klar ablesbare Rundinstrumente mit der leichtgängigen 5-Gang-Schaltung (oder optionaler CVT ab 2011) und nutzen den vollen 399-Liter-Kofferraum inklusive tiefem Unterfach.',
          ru: 'Бензиновые 1.2 и 1.3 i-VTEC оснащены классическими приборами, лёгкой 5-ст. МКПП (или опциональным CVT на 1.3 с 2011 г.) и используют весь глубокий багажник объёмом 399 л.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2011+ restyled front/rear bumpers and underbody tweaks cut drag coefficient from 0.336 to 0.330 for cleaner cruising.',
          'Re-valved suspension dampers and tweaked electric steering calibration improved ride comfort and straight-line stability.',
          'Darker, higher-grade seat fabrics with subtle stitching and satin chrome vent accents freshened cabin quality.',
          'Reintroduced smooth CVT automatic option for 1.3 i-VTEC (replacing clunky i-SHIFT automated manual) and added 1.3 IMA Hybrid.'
        ],
        de: [
          'Überarbeitete Stoßfänger und Feinschliff ab 2011 senken den Luftwiderstand (cW 0,330 statt 0,336).',
          'Neu abgestimmte Stoßdämpfer und präzisere Lenkung verbessern Abrollkomfort und Geradeauslauf spürbar.',
          'Dunklere, hochwertigere Sitzbezüge mit Kontrastnähten sowie Chromakzente werten das Interieur auf.',
          'Stufenlose CVT-Automatik für den 1.3 i-VTEC ersetzt das ruppige i-SHIFT-Getriebe; neu hinzu kommt der 1.3 IMA Hybrid.'
        ],
        ru: [
          'Обновлённые бамперы 2011+ и доработанная аэродинамика снизили коэффициент сопротивления с 0.336 до 0.330.',
          'Перенастроенные амортизаторы и рулевое управление улучшили плавность хода и устойчивость на прямой.',
          'Более тёмные и износостойкие ткани сидений с контрастной строчкой и хромированные акценты освежили салон.',
          'На смену дёрганому «роботу» i-SHIFT для 1.3 вернулся плавный вариатор CVT, а также дебютировал гибрид 1.3 IMA.'
        ]
      }
    }
  }
});