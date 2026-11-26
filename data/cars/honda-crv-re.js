// AutoDuel Vehicle Data — honda-crv-re
registerAutoDuelVehicle({
  roster: {
    id: 'honda-crv-re',
    number: '03',
    carType: 'suv',
    gridOrder: 6,
    gridLabel: 'Honda CR-V',
    yearMake: '2006-2012 HONDA',
    shortTitle: 'CR-V (RE)',
    fullName: '2006-2012 Honda CR-V (RE)',
    rarityClass: 'rarity-common',
    drivetrain: 'AWD',
    image: 'assets/honda-crv-re.webp',
    defaultEngineId: '2.0-ivtec',
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspMultiLink',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Soft / Composed SUV', de: 'Komfortabel / Stabil', ru: 'Мягкая / Комфорт SUV' },
      highwayNoise: { en: '~70 dB · Calm', de: '~70 dB · Ruhig', ru: '~70 дБ · Спокойно' },
      cabinMaterials: { en: 'Durable Family Trim', de: 'Robuster Familien-Mix', ru: 'Практичный салон' },
      controls: '@physButtons',
      turningCircle: '11.4 m',
      visibility: { en: 'Commanding · Large Glass', de: 'Hohe Sitzpos. · Sehr gut', ru: 'Высокая посадка · Отлично' },
      euroNcap: '★★★★☆ (2007)',
      safetyTech: { en: '✓ ESP/VSA · ✓ Trailer Assist', de: '✓ ESP/VSA · ✓ Gespann-Stab.', ru: '✓ ESP/VSA · ✓ Стаб. прицепа' },
      rearRoom: { en: 'Very Generous · Flat Floor', de: 'Sehr großzügig · Flach', ru: 'Очень просторно · Ровный пол' },
      isofixEntry: { en: '✓ 2× ISOFIX · High Entry', de: '✓ 2× ISOFIX · Hoher Einstieg', ru: '✓ 2× ISOFIX · Удобный вход' },
      bootVolume: '556 L / 1,532 L',
      seatUtility: { en: '✓ Sliding Bench + Dual-Deck', de: '✓ Verschiebbare Bank + Doppelb.', ru: '✓ Сдвижной ряд + полка' },
      payloadRoof: '510 kg · 75 kg',
      driveline: '@awdDualPump',
      chassisFeel: { en: 'Car-Like · Mild Body Roll', de: 'PKW-nah · Etwas Neigung', ru: 'Легковое · Умер. крены' },
      tractionDiff: { en: 'AWD (Dual-Pump) · ESP', de: 'Allrad (Dual-Pump) · ESP', ru: 'Полный (Dual-Pump) · ESP' },
      braking1000: '~37.5 m',
      brakeSetup: '@discs4',
      valueRetention: '@retVeryHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchSingle', driveline: '@driveAwdDualPump' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Compliant SUV Springs · Independent Rear Multi-Link', de: 'Komfortable SUV-Federung · Einzelrad-Mehrlenker', ru: 'Мягкая подвеска SUV · Независимая сзади' } },
            { k: 'seatSupport', v: { en: 'High Upright Armchair Seats · Relaxed Long Trips', de: 'Hohe aufrechte Sitze · Entspannt auf Langstrecke', ru: 'Высокие удобные кресла · Комфорт на дальняке' } }
          ],
          note: { en: 'Absorbs rough roads comfortably with none of the harshness of modern sport-trimmed crossovers.', de: 'Schluckt schlechte Straßen gelassen ohne die Härte moderner Sport-SUVs.', ru: 'Мягко отрабатывает разбитые дороги без жёсткости современных кроссоверов.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~70 dB(A) at 130 km/h', de: '~70 dB(A) bei 130 km/h', ru: '~70 дБ(А) при 130 км/ч' } },
            { k: 'acousticGlass', v: { en: 'Good Wind Sealing · Mild Upright SUV Drag', de: 'Gute Türdichtungen · Leichtes Windgeräusch', ru: 'Хорошие уплотнители · Умеренный шум ветра' } }
          ],
          note: { en: 'Refined cabin at 120–130 km/h; petrol versions stay notably quieter around town than older diesels.', de: 'Ruhiger Innenraum bei 120–130 km/h; Benziner in der Stadt deutlich leiser als frühe Diesel.', ru: 'Спокойный салон на 120–130 км/ч; бензиновые версии заметно тише в городе.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashTrim', v: { en: 'Hard-Wearing Family Plastics · Walk-Through Front Floor', de: 'Strapazierfähiger Kunststoff · Freier Durchgang vorn', ru: 'Износостойкий пластик · Свободный пол спереди' } },
            { k: 'buildFit', v: { en: 'Proven Honda Assembly · High Durability with Kids/Pets', de: 'Solide Honda-Qualität · Alltagstauglich für Familie', ru: 'Крепкая сборка Honda · Устойчивость к износу' } }
          ],
          note: { en: 'Dash-mounted shifter frees up huge center storage and walk-through cabin space.', de: 'Der hochgesetzte Schalthebel schafft enorme Ablagen und Luftigkeit vorn.', ru: 'Высокий рычаг КПП освобождает много места и ниш между сиденьями.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turningDiam', v: '11.4 m' },
            { k: 'bodyDimensions', v: '4,574 × 1,820 mm' }
          ],
          note: { en: 'Compact footprint for a family SUV — fits European parking bays effortlessly.', de: 'Kompakte Außenmaße für ein Familien-SUV — passt mühelos in normale Parklücken.', ru: 'Компактные габариты для семейного SUV — легко паркуется в городе.' }
        },
        visibility: {
          specs: [
            { k: 'sightlines', v: { en: 'Tall Seating · Huge Mirrors & Uncluttered Glass', de: 'Hohe Sitzposition · Große Spiegel & Glasflächen', ru: 'Высокая посадка · Крупные зеркала и стёкла' } },
            { k: 'parkingAids', v: { en: 'Front/Rear Sensors Common on Mid/High Trims', de: 'Parksensoren vorn/hinten häufig verbaut', ru: 'Парктроники часто в средних/верхних версиях' } }
          ],
          note: { en: 'One of the easiest-to-see-out-of SUVs of its era.', de: 'Eines der übersichtlichsten SUVs seiner Generation.', ru: 'Один из самых обзорных кроссоверов своего поколения.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'ncapOverall', v: '★★★★☆ (2007)' },
            { k: 'ncapBreakdown', v: { en: '33/37 Adult · 4★ Child · 2★ Pedestrian', de: '33/37 Erwachsene · 4★ Kinder · 2★ Fußgänger', ru: '33/37 Взрослые · 4★ Дети · 2★ Пешеходы' } },
            { k: 'airbagsCount', v: { en: '6 Airbags (Front, Side, Curtain)', de: '6 Airbags (Front, Seite, Kopf)', ru: '6 подушек безопасности' } }
          ],
          note: { en: 'Solid ACE crash structure with standard VSA stability control and Trailer Stability Assist.', de: 'Stabile ACE-Struktur mit serienmäßigem VSA-ESP und Gespann-Stabilisierung.', ru: 'Крепкий кузов ACE со стандартной ESP и стабилизацией прицепа.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeAssists', v: { en: '✓ ESP/VSA · ✓ Trailer Stability Assist · ✕ Standard AEB', de: '✓ ESP/VSA · ✓ Gespann-Stab. · ✕ Kein Serien-Notbrems', ru: '✓ ESP/VSA · ✓ Стаб. прицепа · ✕ Без AEB в базе' } }
          ],
          note: { en: 'Predictable mechanical safety with optional adaptive cruise (ACC/CMBS) on rare Executive trims.', de: 'Sicheres Fahrverhalten; optionaler Abstandstempomat nur in seltenen Top-Versionen.', ru: 'Надёжная пассивная безопасность; редкие топ-версии оснащались ACC.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'wheelbase', v: '2,630 mm' },
            { k: 'rearLegHead', v: { en: 'Generous Adult Space · Completely Flat Floor', de: 'Sehr viel Beinfreiheit · Komplett ebener Boden', ru: 'Огромный запас места · Полностью ровный пол' } }
          ],
          note: { en: 'Reclining & sliding rear bench seats 3 adults more comfortably than almost any rival.', de: 'Verschieb- und neigbare Rückbank bietet für 3 Personen außergewöhnlich viel Platz.', ru: 'Сдвижной и регулируемый диван сзади удобен даже для троих взрослых.' }
        },
        isofixEntry: {
          specs: [
            { k: 'isofixAccess', v: { en: '✓ 2× ISOFIX · Wide 80° Rear Doors · Easy Hip Height', de: '✓ 2× ISOFIX · Weit öffnende Türen · Bequeme Höhe', ru: '✓ 2× ISOFIX · Широкие двери · Удобная высота' } }
          ],
          note: { en: 'Ideal step-in height for parents buckling child seats or seniors getting in and out.', de: 'Perfekte Einstiegshöhe für Kindersitze und rückenschonendes Einsteigen.', ru: 'Идеальная высота посадки для семей с детьми и пожилых пассажиров.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootUpDown', v: '556 L / 1,532 L' },
            { k: 'loadSill', v: { en: '~665 mm (Low for SUV) · Dual-Deck Shelf', de: '~665 mm (Niedrig für SUV) · Doppelboden-Ablage', ru: '~665 мм (низко для SUV) · Двойная полка' } }
          ],
          note: { en: 'Square 556 L boot with removable dual-deck shelf splits groceries cleanly from bulky luggage.', de: 'Quadratischer 556-L-Kofferraum mit praktischer Zweitebene für Einkäufe und Koffer.', ru: 'Огромный 556-литровый багажник с фирменной двухъярусной полкой.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingMech', v: { en: '✓ 40/20/40 Sliding & Tumble-Fold Rear Bench', de: '✓ 40/20/40 Verschieb- & Klappbank', ru: '✓ Сдвижной диван 40/20/40 с откидыванием' } }
          ],
          note: { en: 'Center pass-through handles skis while keeping 4 full seats usable.', de: 'Mittel-Durchlade für Ski bei 4 voll nutzbaren Sitzplätzen.', ru: 'Лючок 40/20/40 позволяет возить лыжи вчетвером.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: '~510 kg' },
            { k: 'roofLoad', v: '75 kg' }
          ],
          note: { en: 'Strong family SUV payload handles 5 passengers plus full holiday gear.', de: 'Kräftige Familien-SUV-Zuladung für 5 Personen plus volles Urlaubsgepäck.', ru: 'Высокая грузоподъёмность для 5 человек и полного багажа.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'kerbWeight', v: '1,530–1,680 kg' },
            { k: 'handlingChar', v: { en: 'Car-Like Steering · Safe Predictable Balance', de: 'PKW-ähnliche Lenkung · Gutmütig & sicher', ru: 'Легковая управляемость · Предсказуемый баланс' } },
            { k: 'tyreSizes', v: '225/65 R17 · 225/60 R18' }
          ],
          note: { en: 'Drives more like a tall estate than a heavy truck.', de: 'Fährt sich eher wie ein hoher Kombi als ein schwerer Geländewagen.', ru: 'Управляется скорее как высокий универсал, чем тяжёлый внедорожник.' }
        },
        tractionDiff: '@tractionAwd'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },    sharedBuyerFit: {
      cards: {
        crvFamilySpace: {
          en: 'You need an easy-loading family SUV: Flat cabin floor, upright seating, and a wide 524 L boot handle strollers and holiday gear effortlessly.',
          de: 'Du brauchst ein praktisches Familien-SUV: Ebener Innenboden, hohe Sitzposition und der breite 524-L-Kofferraum schlucken Kinderwagen und Urlaubsgepäck mühelos.',
          ru: 'Тебе нужен удобный семейный кроссовер: Ровный пол салона, высокая посадка и широкий багажник 524 л легко вмещают коляску и багаж для отпуска.'
        },
        crvAwdAllWeather: {
          en: 'You drive in snow, rain, or gravel: Automatic Real Time AWD adds reassuring winter traction without heavy off-road bulk.',
          de: 'Du fährst bei Schnee, Regen oder auf Schotter: Der automatische Real-Time-Allrad gibt sichere Winter-Traktion ohne schweren Geländewagen-Ballast.',
          ru: 'Ты ездишь по снегу, дождю или грунтовке: Подключаемый полный привод Real Time AWD даёт уверенную тягу зимой без лишней тяжести рамника.'
        },
        crvVtecDurability: {
          en: 'You want low-stress petrol ownership: Timing-chain i-VTEC engines run reliably for high mileages with basic servicing.',
          de: 'Du willst stressfreien Benziner-Unterhalt: Die i-VTEC-Motoren mit Steuerkette laufen bei normaler Wartung extrem langlebig.',
          ru: 'Тебе нужен неприхотливый бензиновый мотор: Цепные двигатели i-VTEC при базовом обслуживании спокойно ходят большие пробеги.'
        },
        crvFuelWeight: {
          en: 'You expect compact-car fuel bills: Tall SUV aerodynamics and AWD weight push real-world petrol consumption noticeably higher.',
          de: 'Du erwartest Kleinwagen-Verbrauch: Hohe SUV-Karosserie und Allrad-Gewicht treiben den realen Benzinverbrauch spürbar nach oben.',
          ru: 'Ты рассчитываешь на расход как у легковушки: Высокий кузов кроссовера и полный привод заметно повышают реальный расход бензина.'
        },
        crv24Thirst: {
          en: 'You watch every euro at the pump: The 2.4-liter automatic is smooth, but drinks 9–11 L/100 km in mixed driving.',
          de: 'Du schaust an der Zapfsäule auf jeden Euro: Der 2.4-Liter-Automat läuft samtig, genehmigt sich im Schnitt aber 9–11 L/100 km.',
          ru: 'Ты считаешь каждый литр на заправке: 2.4-литровый автомат едет плавно, но в смешанном цикле расходует 9–11 л/100 км.'
        },
        crvDieselTowing: {
          en: 'You tow trailers or cruise long distances: Strong 340–350 Nm diesel torque makes 1,500–2,000 kg towing and motorway climbs effortless.',
          de: 'Du ziehst Anhänger oder fährst Langstrecke: Kräftige 340–350 Nm Diesel-Drehmoment meistern Anhängerlasten und Autobahnsteigungen souverän.',
          ru: 'Ты таскаешь прицеп или ездишь на дальние расстояния: Тяговитый дизель (340–350 Н·м) уверенно тянет прицеп и подъёмы на трассе.'
        },
        crvEuro4CityNote: {
          en: 'You commute into strict Euro 5/6 diesel-ban zones: The early 2.2 i-CTDi is Euro 4 — check local emission-zone rules before buying.',
          de: 'Du pendelst in strenge Umweltzonen: Der frühe 2.2 i-CTDi erfüllt nur Euro 4 — prüfe vor dem Kauf lokale Zufahrtsregeln.',
          ru: 'Ты ездишь в зоны жёстких эко-ограничений: Ранний 2.2 i-CTDi соответствует только Euro 4 — заранее проверь местные правила въезда.'
        },
        crvNotSporty: {
          en: 'You want sharp sports-sedan handling: High center of gravity and comfort-tuned steering favor relaxed cruising over fast corners.',
          de: 'Du suchst zackiges Kurven-Handling: Hoher Schwerpunkt und komfortable Lenkung sind auf entspanntes Gleiten statt Sportlichkeit ausgelegt.',
          ru: 'Ты ищешь острую управляемость: Высокий центр тяжести и мягкие настройки руля созданы для спокойной езды, а не быстрых поворотов.'
        },
        crvSubframeRustCheck: {
          en: 'You want zero underbody rust checks: 2007–2012 rear subframes and rear wheel arches need careful inspection on salted winter roads.',
          de: 'Du willst dich nicht um Unterbodenrost kümmern: Hintere Achsträger und Radläufe der Baujahre 2007–2012 verlangen auf Salzstraßen genaue Kontrolle.',
          ru: 'Ты не хочешь проверять днище на ржавчину: Задний подрамник и кромки арок 2007–2012 годов требуют осмотра после зимних реагентов.'
        },
        crvDatedInterior: {
          en: 'You want modern screens & soft luxury: Hard utilitarian plastics and older navigation units show the car’s 2007 design era.',
          de: 'Du suchst moderne Displays & Soft-Touch-Luxus: Nüchternes Hartplastik und alte Navis zeigen das Designjahr 2007.',
          ru: 'Тебе нужен современный экран и мягкий пластик: Утилитарный жёсткий салон выдаёт архитектуру 2007 года.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol-awd': {
        summary: {
          en: 'A dependable, family-friendly all-weather SUV — ideal for shorter trips and winter grip if you accept higher petrol consumption.',
          de: 'Ein zuverlässiges, familienfreundliches Allwetter-SUV — ideal für kürzere Strecken und Wintertraktion, wenn höherer Verbrauch ok ist.',
          ru: 'Надёжный семейный кроссовер на любую погоду — отличный выбор для коротких поездок и зимы, если готов к повышенному расходу.'
        },
        ideal: ['crvFamilySpace', 'crvAwdAllWeather', 'crvVtecDurability', 'globalPetrolCityZones'],
        skip: ['crvFuelWeight', 'crvNotSporty', 'crvSubframeRustCheck', 'crvDatedInterior']
      },
      'diesel-awd': {
        summary: {
          en: 'A capable long-distance and towing SUV with winter AWD traction — wasted on short urban errands.',
          de: 'Ein kräftiges Langstrecken- und Zug-SUV mit Winter-Allrad — für reine Kurzstrecken in der Stadt ungeeignet.',
          ru: 'Выносливый кроссовер для трассы, прицепа и зимы — не лучший вариант для коротких городских поездок.'
        },
        ideal: ['crvFamilySpace', 'crvAwdAllWeather', 'crvDieselTowing', 'globalDieselLongRange'],
        skip: [
          'globalDieselShortTripRisk',
          'crvNotSporty',
          'crvSubframeRustCheck',
          'crvDatedInterior'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Tough SUV Control Arms — Check Rear Subframe & Arches',
          strengths: [
            'Tough SUV Control Arms keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Inspect the rear subframe crossmember and rear wheel-arch lips for rust.',
            'Check Rear Subframe & Arches.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Robuste SUV-Querlenker — Achsträger & Radlaufrost',
          strengths: [
            'Robuste SUV-Querlenker hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Hinteren Achsträger und hintere Radläufe sorgfältig auf Rost prüfen.',
            'Achsträger & Radlaufrost.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Прочные рычаги кроссовера — Контроль ржавчины подрамника',
          strengths: [
            'Прочные рычаги кроссовера надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Осмотрите задний подрамник и кромки задних арок на предмет коррозии.',
            'Контроль ржавчины подрамника.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Dash Shifter & Smart Trays',
          strengths: [
            'Dash Shifter & Smart Trays ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Utilitarian hard plastics show scuffs on family workhorse examples.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Schalthebel im Cockpit',
          strengths: [
            'Schalthebel im Cockpit sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Robuste, aber harte Kunststoffe zeigen im Familienalltag schnell Kratzer.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Рычаг на панели и ниши',
          strengths: [
            'Рычаг на панели и ниши обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Практичный жёсткий пластик в багажнике и дверях легко царапается.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: 'Commanding High SUV View',
          strengths: [
            'Commanding High SUV View makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Wide 11.4 m turning circle requires parking sensors in tight garages.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: 'Erhöhte SUV-Rundumsicht',
          strengths: [
            'Erhöhte SUV-Rundumsicht macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Der 11,4-m-Wendekreis macht Parksensoren in engen Parkhäusern hilfreich.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Высокая командирская обзорность',
          strengths: [
            'Высокая командирская обзорность делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Радиус разворота 11,4 м делает парктроники или камеру очень полезными.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 4★ (2007) — 6 Airbags + Trailer Assist',
          strengths: [
            'Euro NCAP 4★ (2007) provides solid passive crash protection for its class and era.',
            '6 Airbags + Trailer Assist standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 4★ (2007) — 6 Airbags + Gespann-ESP',
          strengths: [
            'Euro NCAP 4★ (2007) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '6 Airbags + Gespann-ESP serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 4★ (2007) — 6 подушек + ESP прицепа',
          strengths: [
            'Euro NCAP 4★ (2007) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + ESP прицепа входят в оснащение большинства версий.'
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
          headline: 'Flat Floor + Sliding Rear Bench',
          strengths: [
            'Flat Floor + Sliding Rear Bench keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: [
            'Narrower center rear seating position limits three-across adult comfort on long highway journeys.'
          ],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Ebener Boden + verschiebbarer Fond',
          strengths: [
            'Ebener Boden + verschiebbarer Fond sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: [
            'Der mittlere Rücksitzplatz fällt schmaler aus und schränkt den Komfort für drei Erwachsene hinten ein.'
          ],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Ровный пол + сдвижной диван',
          strengths: [
            'Ровный пол + сдвижной диван обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: [
            'Узкое центральное место сзади снижает комфорт при посадке троих взрослых в дальней дороге.'
          ],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '556L Boot (1,532L Max)',
          strengths: [
            'Practical 556L boot (1,532L max) with sliding rear bench and double shelf.',
            'Sliding Rear + Shelf improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '556L Kofferraum (1.532L Max)',
          strengths: [
            'Praktischer Nutzwert: 556 L Kofferraum (max. 1.532 L) mit verschiebbarer Rückbank.',
            'Schiebebank & Doppelboden erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 556–1 532 л',
          strengths: [
            'Практичный объём: багажник 556 л (до 1 532 л) со сдвижным задним диваном.',
            'Сдвижной ряд + полка добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Real Time AWD Winter Traction',
          strengths: [
            'Tall seating posture and Real Time AWD give strong winter confidence.',
            'Comfortable Body Roll In Bends.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Allrad-Traktion bei Schnee',
          strengths: [
            'Erhöhte Sitzposition und Allradantrieb bieten hohe Winter-Traktion.',
            'Deutliche SUV-Seitenneigung.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Полный привод зимой',
          strengths: [
            'Высокая посадка и полный привод дают уверенность на зимней дороге.',
            'Заметные крены в поворотах.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 37.2 m — SUV Mass • Soft Initial Bite',
          strengths: [
            '100–0 km/h: 37.2 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 37,2 m — SUV-Gewicht • Weiches Ansprechen',
          strengths: [
            '100–0 km/h: 37,2 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 37,2 м — Масса кроссовера • Мягкий хват',
          strengths: [
            '100–0 км/ч: 37,2 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '535 kg Payload • 600 / 1,600 kg Towing',
          strengths: ['535 kg Payload and 600 / 1,600 kg Towing handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '535 kg Zuladung • 600 / 1.600 kg Zuglast',
          strengths: [
            '535 kg Zuladung und 600 / 1.600 kg Zuglast bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 535 кг • Прицеп: 600 / 1 600 кг',
          strengths: ['Нагрузка 535 кг и Прицеп: 600 / 1 600 кг закрывают повседневные задачи по загрузке.'],
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
          headline: 'High Used SUV Demand',
          strengths: [
            'High Used SUV Demand helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Extrem gefragtes SUV',
          strengths: [
            'Extrem gefragtes SUV sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Огромный спрос б/у',
          strengths: [
            'Огромный спрос б/у поддерживает стабильный спрос на вторичном рынке.',
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
      'petrol-awd-mt': {
        transmissionDriveline: {
          en: {
            headline: '6-MT + Dual-Pump AWD — Cheap Rear Diff Fluid Service',
            strengths: [
              '6-MT + Dual-Pump AWD matches this powertrain well for everyday driving.',
              'Cheap Rear Diff Fluid Service.'
            ],
            watchouts: [
              'Check clutch bite height and listen for dual-mass flywheel rattle at idle on high-mileage cars.',
              'Listen for bearing whine or driveline shudder from the AWD system on tight full-lock turns.'
            ],
            beforeYouBuy: [
              'Shift quickly into 1st, 2nd, and 3rd gear cold and warm to verify crisp, crunch-free synchros.',
              'Hold the clutch halfway at idle and accelerate in 4th gear to rule out flywheel chatter or clutch slip.'
            ]
          },
          de: {
            headline: '6-Gang + Dual-Pump-Allrad — Günstiges Hinterachsöl',
            strengths: [
              '6-Gang + Dual-Pump-Allrad passt gut zur Motorcharakteristik im Alltag.',
              'Günstiges Hinterachsöl.'
            ],
            watchouts: [
              'Bei hoher Laufleistung Kupplungs-Greifpunkt prüfen und im Leerlauf auf ZMS-Klappern achten.',
              'Auf Lagerheulen oder Verspannen des Allradantriebs bei voll eingeschlagener Lenkung achten.'
            ],
            beforeYouBuy: [
              'Im kalten wie warmen Zustand zügig vom 1. in den 2. und 3. Gang schalten — ohne Kratzen.',
              'Kupplung im Leerlauf halb treten (ZMS-Test) und im 4. Gang stark beschleunigen (Rutschtest).'
            ]
          },
          ru: {
            headline: '6-МКПП + гидро-AWD — Недорогое масло редуктора',
            strengths: [
              '6-МКПП + гидро-AWD хорошо сочетается с данным двигателем в повседневной езде.',
              'Недорогое масло редуктора.'
            ],
            watchouts: [
              'На больших пробегах проверяйте точку схватывания сцепления и стук двухмассового маховика на холостых.',
              'Прислушайтесь к вою подшипников или подклиниванию полного привода при полностью вывернутом руле.'
            ],
            beforeYouBuy: [
              'Чётко переключить 1–2–3 передачи на холодную и на горячую — хруста синхронизаторов быть не должно.',
              'Нажать сцепление наполовину на холостых (проверка маховика) и ускориться на 4-й передаче.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mechanical AWD (No ECU)',
            strengths: [
              'Mechanical AWD (No ECU) keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch AC Clutch Relay.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Allrad ohne Elektronik',
            strengths: [
              'Allrad ohne Elektronik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Klimarelais gelegentlich.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Полный привод без ЭБУ',
            strengths: [
              'Полный привод без ЭБУ упрощает диагностику и обслуживание электрооборудования.',
              'Простая электрика кондиционера.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Compliant SUV Springing',
            strengths: [
              'Compliant SUV Springing delivers pleasant everyday composure.',
              'Captain-Chair Front Armrests.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Komfortable SUV-Abstimmung',
            strengths: [
              'Komfortable SUV-Abstimmung sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Bequeme Armlehnen vorn.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая энергоёмкая подвеска',
            strengths: [
              'Мягкая энергоёмкая подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Удобные передние кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Simple Rear Diff Oil Changes — No Turbo / No DPF Bills',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'No Turbo / No DPF Bills.'
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
            headline: 'Günstiger Hinterachs-Ölwechsel — Keine Turbo-/DPF-Kosten',
            strengths: [
              'Günstiger Hinterachs-Ölwechsel hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Keine Turbo-/DPF-Kosten.'
            ],
            watchouts: [
              'Auch bei einfacher Technik altern nach 10+ Jahren Schläuche, Fahrwerksbuchsen, Bremsen und Reifen.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Недорогое ТО заднего редуктора — Нет турбины и сажевого',
            strengths: [
              'Недорогое ТО заднего редуктора помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Возрастной износ сайлентблоков подвески, тормозов и выхлопной системы требует плановых ежегодных трат.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: 'Bulletproof 5-Speed Auto — Proven Dual-Pump AWD',
            strengths: [
              'Bulletproof 5-Speed Auto matches this powertrain well for everyday driving.',
              'Proven Dual-Pump AWD.'
            ],
            watchouts: [
              'Torque-converter automatics need documented 50,000–60,000 km fluid changes to avoid lockup shudder.',
              'Listen for bearing whine or driveline shudder from the AWD system on tight full-lock turns.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: 'Unverwüstliche 5G-Automatik — Bewährter Dual-Pump-Allrad',
            strengths: [
              'Unverwüstliche 5G-Automatik passt gut zur Motorcharakteristik im Alltag.',
              'Bewährter Dual-Pump-Allrad.'
            ],
            watchouts: [
              'Wandlerautomatiken brauchen nachgewiesene Ölwechsel alle 50.000–60.000 km, sonst droht Wandler-Ruckeln.',
              'Auf Lagerheulen oder Verspannen des Allradantriebs bei voll eingeschlagener Lenkung achten.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: 'Неубиваемый 5-ст. автомат — Надёжный полный привод',
            strengths: [
              'Неубиваемый 5-ст. автомат хорошо сочетается с данным двигателем в повседневной езде.',
              'Надёжный полный привод.'
            ],
            watchouts: [
              'Гидротрансформаторным АКПП нужна подтверждённая замена масла каждые 50 000–60 000 км, иначе появляются рывки блокировки.',
              'Прислушайтесь к вою подшипников или подклиниванию полного привода при полностью вывернутом руле.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mechanical AWD (No ECU)',
            strengths: [
              'Mechanical AWD (No ECU) keeps electrical diagnostics straightforward.',
              'Dependable Denso Electrics.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Allrad ohne Elektronik',
            strengths: [
              'Allrad ohne Elektronik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Zuverlässige Denso-Technik.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Механический полный привод',
            strengths: [
              'Механический полный привод упрощает диагностику и обслуживание электрооборудования.',
              'Надёжная электрика Denso.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Compliant SUV Springing',
            strengths: [
              'Compliant SUV Springing delivers pleasant everyday composure.',
              'Captain-Chair Front Armrests.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Komfortable SUV-Abstimmung',
            strengths: [
              'Komfortable SUV-Abstimmung sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Bequeme Armlehnen vorn.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая энергоёмкая подвеска',
            strengths: [
              'Мягкая энергоёмкая подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Удобные передние кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Zero Turbo / Zero DPF Bills — Routine ATF & Diff Oil Only',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kein Turbo- oder DPF-Risiko — Nur reguläre Flüssigkeiten',
            strengths: [
              'Kein Turbo- oder DPF-Risiko hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: [
              'Altersbedingter Verschleiß an Fahrwerksbuchsen, Bremsen und Abgasanlage erfordert weiterhin planbare Rücklagen.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Нет риска турбины и DPF — Только замена масел по регламенту',
            strengths: [
              'Нет риска турбины и DPF помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Возрастной износ сайлентблоков подвески, тормозов и выхлопной системы требует плановых ежегодных трат.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-awd-mt': {
        transmissionDriveline: {
          en: {
            headline: '6-MT + Dual-Pump AWD — 350 Nm Clutch & DMF Load',
            strengths: [
              '6-MT + Dual-Pump AWD matches this powertrain well for everyday driving.',
              'Proven 6-MT gearbox and reliable hydraulic Real Time AWD handle winter roads effortlessly.'
            ],
            watchouts: [
              'Check clutch bite height and listen for dual-mass flywheel rattle at idle on high-mileage cars.',
              'Listen for bearing whine or driveline shudder from the AWD system on tight full-lock turns.'
            ],
            beforeYouBuy: [
              'Shift quickly into 1st, 2nd, and 3rd gear cold and warm to verify crisp, crunch-free synchros.',
              'Hold the clutch halfway at idle and accelerate in 4th gear to rule out flywheel chatter or clutch slip.'
            ]
          },
          de: {
            headline: '6-Gang + Dual-Pump-Allrad — ZMS- & Kupplungslast (350 Nm)',
            strengths: [
              '6-Gang + Dual-Pump-Allrad passt gut zur Motorcharakteristik im Alltag.',
              'Solide Kraftübertragung mit wartungsfreundlichem Real-Time-AWD für Winter und Anhängerbetrieb.'
            ],
            watchouts: [
              'Bei hoher Laufleistung Kupplungs-Greifpunkt prüfen und im Leerlauf auf ZMS-Klappern achten.',
              'Auf Lagerheulen oder Verspannen des Allradantriebs bei voll eingeschlagener Lenkung achten.'
            ],
            beforeYouBuy: [
              'Im kalten wie warmen Zustand zügig vom 1. in den 2. und 3. Gang schalten — ohne Kratzen.',
              'Kupplung im Leerlauf halb treten (ZMS-Test) und im 4. Gang stark beschleunigen (Rutschtest).'
            ]
          },
          ru: {
            headline: '6-МКПП + привод AWD — Нагрузка 350 Н·м на маховик',
            strengths: [
              '6-МКПП + привод AWD хорошо сочетается с данным двигателем в повседневной езде.',
              'Механическая коробка и гидравлическая муфта AWD отлично справляются с зимой и грунтовками.'
            ],
            watchouts: [
              'На больших пробегах проверяйте точку схватывания сцепления и стук двухмассового маховика на холостых.',
              'Прислушайтесь к вою подшипников или подклиниванию полного привода при полностью вывернутом руле.'
            ],
            beforeYouBuy: [
              'Чётко переключить 1–2–3 передачи на холодную и на горячую — хруста синхронизаторов быть не должно.',
              'Нажать сцепление наполовину на холостых (проверка маховика) и ускориться на 4-й передаче.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mechanical AWD • Euro 5 ECU',
            strengths: [
              'Mechanical AWD • Euro 5 ECU keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'DPF Pressure Sensors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Mechanischer AWD • Euro 5',
            strengths: [
              'Mechanischer AWD • Euro 5 sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'DPF-Sensoren beachten.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Механический AWD • Euro 5',
            strengths: [
              'Механический AWD • Euro 5 упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Контроль датчиков DPF.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Compliant SUV Springing',
            strengths: [
              'Compliant SUV Springing delivers pleasant everyday composure.',
              'Captain-Chair Front Armrests.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Komfortable SUV-Abstimmung',
            strengths: [
              'Komfortable SUV-Abstimmung sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Bequeme Armlehnen vorn.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая энергоёмкая подвеска',
            strengths: [
              'Мягкая энергоёмкая подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Удобные передние кресла.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Chain-Driven Block — High Clutch, DMF & DPF Costs',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'High Clutch, DMF & DPF Costs.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Robuste Steuerkette — Teure ZMS-, Kupplungs- & DPF-Jobs',
            strengths: [
              'Robuste Steuerkette hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teure ZMS-, Kupplungs- & DPF-Jobs.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Надёжный цепной привод — Дорогие сцепление, маховик и DPF',
            strengths: [
              'Надёжный цепной привод помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогие сцепление, маховик и DPF.'],
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
        dossierBreakdowns: {
          transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchSingle' }
        },
        dossier: {
          en: {
            headline: 'Mechanical Honda 6-Speed Manual — No DMF & Low Long-Term Cost',
            strengths: ['In-house Honda M6 gearbox shifts cleanly with zero dual-mass flywheel or mechatronic risk.'],
            watchouts: ['Mechanical Dual-Pump AWD needs clean rear-diff Dual-Pump Fluid II to prevent chatter on tight turns.'],
            beforeYouBuy: ['Do a tight figure-eight in a car park and listen for rear-diff groan or shudder.', 'Check smooth 2nd/3rd gear synchro engagement when cold.']
          },
          de: {
            headline: 'Mechanisches Honda 6-Gang-Schaltgetriebe — Kein ZMS, geringe Kosten',
            strengths: ['Honda M6 Schaltgetriebe arbeitet sauber ohne Zweimassenschwungrad oder Mechatronik-Risiko.'],
            watchouts: ['Das Dual-Pump-Allradsystem braucht frisches Hinterachsöl (DPSF-II), sonst rubbelt es in engen Kurven.'],
            beforeYouBuy: ['Enge Achten auf dem Parkplatz fahren und auf Geräusche/Rubbeln der Hinterachse achten.', 'Sauberes Einlegen von 2. und 3. Gang im kalten Zustand prüfen.']
          },
          ru: {
            headline: 'Механическая 6-ст. КПП Honda — Без ДММ и лишних расходов',
            strengths: ['Фирменная механика Honda M6 чётко переключается без двухмассового маховика и мехатроника.'],
            watchouts: ['Механический полный привод Dual-Pump требует свежего масла DPSF-II в заднем редукторе.'],
            beforeYouBuy: ['Сделайте пару плотных разворотов и прислушайтесь к вибрациям/гулу заднего редуктора.', 'Проверьте чёткость включения 2-й и 3-й передач на холодную.']
          }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Honda M6 · Manual + DMF', de: 'Honda M6 · Schaltgetriebe + ZMS', ru: 'Honda M6 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchDmf' }
        },
        dossier: {
          en: {
            headline: 'Tough Honda 6-Speed Manual — Watch Diesel Clutch & DMF Wear',
            strengths: ['Gearbox internals handle 340–350 Nm easily with 2,000 kg towing rating.'],
            watchouts: ['High diesel torque wears the clutch and dual-mass flywheel around 150k–200k km (€950–€1,400 replacement).'],
            beforeYouBuy: ['Test for clutch slip in 4th/5th gear uphill at 1,800–2,200 rpm.', 'Listen for DMF chatter when depressing the clutch pedal halfway at idle.']
          },
          de: {
            headline: 'Robustes Honda 6-Gang-Schaltgetriebe — Diesel-Kupplung & ZMS prüfen',
            strengths: ['Das Getriebe selbst verkraftet 340–350 Nm und 2.000 kg Anhängelast souverän.'],
            watchouts: ['Hohes Diesel-Drehmoment verschleißt Kupplung und ZMS ab ca. 150–200 Tkm (950–1.400 €).'],
            beforeYouBuy: ['Im 4./5. Gang bergauf bei 1.800–2.200 U/min auf Kupplungsrutschen testen.', 'Im Leerlauf bei halb getretener Kupplung auf ZMS-Rasseln achten.']
          },
          ru: {
            headline: 'Выносливая 6-ст. механика Honda — Контроль сцепления и ДММ',
            strengths: ['Сама коробка уверенно держит 340–350 Н·м и буксировку до 2 000 кг.'],
            watchouts: ['Высокий дизельный момент изнашивает сцепление и двухмассовый маховик к 150–200 тыс. км (€950–1 400).'],
            beforeYouBuy: ['Проверьте пробуксовку сцепления на 4/5-й передаче в гору с 1 800–2 200 об/мин.', 'Послушайте стук маховика при плавном выжиме педали на холостых.']
          }
        }
      },
      '5-at': {
        category: 'automatic',
        label: { en: '5-Speed Torque Auto', de: '5-Stufen-Wandlerautomatik', ru: '5-ст. Автомат' },
        shortLabel: { en: '5-AT', de: '5-AT', ru: '5-АКПП' },
        subLabel: { en: 'Honda 5AT · Hydraulic Torque Converter', de: 'Honda 5AT · Wandlerautomatik', ru: 'Honda 5AT · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto5', clutchDmf: '@torqueConv' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'Honda 5-Speed Hydraulic Automatic (5AT)', de: 'Honda 5-Stufen-Wandlerautomatik (5AT)', ru: '5-ст. гидромеханическая АКПП Honda (5AT)' } }],
              note: { en: 'Proven Honda multi-shaft 5-speed automatic — avoid flush machines and drain-and-fill with Honda ATF DW-1 every 45,000–60,000 km.', de: 'Bewährte Honda-5-Stufenautomatik — nicht spülen, sondern alle 45–60 Tkm mit Honda ATF DW-1 wechseln.', ru: 'Проверенный 5-ст. автомат Honda — частичная замена масла Honda ATF DW-1 каждые 45–60 тыс. км.' }
            },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: {
            headline: 'Durable Honda 5-Speed Automatic — No DMF, Smooth & Long-Lived',
            strengths: ['Avoids expensive diesel clutch/DMF bills and handles daily commuting effortlessly.'],
            watchouts: ['Only 5 ratios hurt motorway fuel economy; power-flush machines can harm Honda 5AT valves — always drain-and-fill with genuine ATF DW-1.'],
            beforeYouBuy: ['Check transmission dipstick fluid color (should be clean cherry red, never burnt brown).', 'Verify smooth R-to-D engagement and clean 2→3 shifts at light throttle.']
          },
          de: {
            headline: 'Langlebige Honda 5-Stufen-Automatik — Kein ZMS, sehr robust',
            strengths: ['Spart teure Kupplungs-/ZMS-Wechsel und schaltet im Alltag angenehm weich.'],
            watchouts: ['Nur 5 Gänge erhöhen den Autobahnverbrauch; keine Spülgeräte nutzen, sondern regelmäßig Teilölwechsel mit Honda ATF DW-1.'],
            beforeYouBuy: ['Getriebeöl am Peilstab prüfen (sollte klar kirschrot sein, nicht verbrannt braun).', 'Sanften R→D-Wechsel und ruckfreien 2→3-Schaltvorgang bei Teillast testen.']
          },
          ru: {
            headline: 'Надёжный 5-ст. автомат Honda — Без ДММ, большой ресурс',
            strengths: ['Избавляет от замены сцепления и ДММ; мягко работает в городском потоке.'],
            watchouts: ['Всего 5 передач повышают расход на трассе; избегайте аппаратной промывки — только частичная замена Honda ATF DW-1.'],
            beforeYouBuy: ['Проверьте цвет масла на щупе АКПП (должно быть чистым красным, без запаха гари).', 'Оцените плавность включения R→D и переключения 2→3 на лёгком газу.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 45,000–60,000 km', de: 'Alle 45.000–60.000 km', ru: 'Каждые 45–60 тыс. км' }, action: { en: 'Honda 5-AT drain-and-fill with genuine ATF DW-1 (no flush)', de: 'Honda 5-AT Teilölwechsel mit originalem ATF DW-1 (keine Spülung)', ru: 'Частичная замена масла Honda 5-AT оригинальным ATF DW-1' }, cost: '€140–220' }
          ]
        }
      }
    },
    engines: [
      {
        id: '2.0-ivtec',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: '5-at',
            estUsedPrice: '€10,600',
            specOverrides: { sprint0100: '12.2 s', topSpeed: '177 km/h', realWorldFuel: '9.0–9.8 L/100 km', towingBraked: '1,500 kg' },
            subStatDeltas: {
              transmissionDriveline: {
                score: 8.9,
                badges: { en: ['Proven Honda 5-AT + AWD', 'Use ATF DW-1 Fluid Only'], de: ['Robuste Honda 5-AT + AWD', 'Nur Honda ATF DW-1 nutzen'], ru: ['Крепкий 5-АКПП + AWD', 'Только масло ATF DW-1'] }
              },
              accelerationOvertaking: {
                score: 4.3,
                badges: { en: ['0–100 km/h: 12.2 s (5-AT)', '177 km/h Top Speed'], de: ['0–100 km/h: 12,2 s (5-AT)', '177 km/h Spitze'], ru: ['0–100 км/ч: 12,2 с (5-АКПП)', 'Макс. 177 км/ч'] }
              },
              efficiencyFuel: {
                score: 4.5,
                badges: { en: ['9.0–9.8 L/100km (5-AT)', '5-Speed Torque Converter'], de: ['9,0–9,8 L/100km (5-AT)', '5-Stufen-Wandler'], ru: ['9,0–9,8 л/100 км (5-АКПП)', '5-ст. гидротрансформатор'] }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.0L i-VTEC NA', de: '2.0L i-VTEC Sauger', ru: '2.0L i-VTEC Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual6', clutchDmf: '@singleClutch',
          towingBraked: '1,600 kg', sprint0100: '10.2 s', topSpeed: '190 km/h', peakTorque: '192 Nm @ 4,200',
          passingPunch: { en: 'Needs Downshift', de: 'Braucht Drehzahl', ru: 'Нужны обороты' },
          realWorldFuel: '8.2–9.0 L/100 km', tankRange: '58 L · ~680 km', euroNorm: 'Euro 4 / 5',
          taxInsurance: '@tierMod', timingDrive: '@chain', serviceWear: '@tierLow'
        },
        dossierGroup: 'petrol-awd-mt',
        buyerFitGroup: 'na-petrol-awd',
        isDefault: true,
        fuelType: 'petrol',
        hp: 150,
        shortTitle: 'CR-V 2.0 i-VTEC',
        fullName: '2010 Honda CR-V 2.0 i-VTEC',
        engineBadge: '2.0L i-VTEC AWD • 150 HP',
        engineSubLabel: {
          en: 'R20A2 Naturally Aspirated Petrol • 6-MT • 192 Nm • Real Time AWD',
          de: 'R20A2 Saugbenziner • 6-Gang-Schaltgetriebe • 192 Nm • Allrad',
          ru: 'R20A2 Атмосферный бензин • 6-ст. МКПП • 192 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'FAMILY SUV ICON',
          de: 'FAMILIEN-SUV-IKONE',
          ru: 'ЭТАЛОН КРОССОВЕРА'
        },
        originalMsrp: {
          en: '€28,900 New',
          de: '28.900 € Neu',
          ru: '€28 900 новый'
        },
        estUsedPrice: '€9,800',
        perkLabel: {
          en: '✦ 556L Double-Deck Boot • Bulletproof 2.0 i-VTEC • Real Time AWD',
          de: '✦ 556L Doppelboden-Kofferraum • Robuster 2.0 i-VTEC • Allrad',
          ru: '✦ Багажник 556 л (2 уровня) • Вечный 2.0 i-VTEC • Полный привод'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 2.0 NA ENGINE',
            '556L DOUBLE-DECK BOOT',
            'SLIDING 40:20:40 REAR SEATS',
            'GREAT ALL-AROUND VISIBILITY',
            '1,600 KG TOWING + AWD'
          ],
          de: [
            'ROBUSTER 2.0 KETTENMOTOR',
            '556L DOPPELBODEN-KOFFERRAUM',
            'VERSCHIEBBARE RÜCKBANK',
            'SEHR GUTE RUNDUMSICHT',
            '1.600 KG ZUGLAST & ALLRAD'
          ],
          ru: [
            'ВЕЧНЫЙ ЦЕПНОЙ 2.0 R20A2',
            'БАГАЖНИК 556 Л (2 ПОЛКИ)',
            'СДВИЖНОЙ ЗАДНИЙ РЯД',
            'ОТЛИЧНАЯ ОБЗОРНОСТЬ ВОКРУГ',
            'БУКСИРОВКА 1 600 КГ + AWD'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 8.4 L/100KM',
            'WEAK PULLING POWER (192 NM)',
            'REACTIVE DUAL-PUMP AWD',
            'SUV BODY ROLL IN CORNERS'
          ],
          de: [
            'DURSTIG: 8,4 L/100KM',
            'WENIG DURCHZUG (192 NM)',
            'TRÄGER DUAL-PUMP-ALLRAD',
            'MEHR KURVEN-SEITENNEIGUNG'
          ],
          ru: [
            'РАСХОД 8,4 Л/100 КМ',
            'СЛАБАЯ ТЯГА НА НИЗАХ (192 Н·М)',
            'ЗАДЕРЖКА МУФТЫ AWD',
            'КРЕНЫ КУЗОВА В ПОВОРОТАХ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.9,
          comfortCabin: 8.0,
          spacePracticality: 9.3,
          performanceDynamics: 6.6,
          runningCostsTco: 7.9
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L i-VTEC Inline-4 NA (R20A2)', de: '2.0L i-VTEC Reihenvierzylinder Sauger (R20A2)', ru: '2.0L i-VTEC рядный 4-цил. атмосферный (R20A2)' } },
                  { k: 'displacement', v: '1,997 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V SOHC', de: '4 Zylinder · 16V SOHC', ru: '4 цилиндра · 16V SOHC' } },
                  { k: 'output', v: { en: '110 kW (150 HP)', de: '110 kW (150 PS)', ru: '110 кВт (150 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Bulletproof R20 block routinely passes 350,000+ km with minimal repair surprises.', de: 'Extrem robuster R20-Sauger schafft problemlos 350.000+ km ohne teure Überraschungen.', ru: 'Сверхнадёжный атмосферник R20 спокойно ходит 350 000+ км.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.7,
            badges: {
              en: ['2.0 Chain-Driven NA', '350,000+ km Lifespan'],
              de: ['2.0 Ketten-Saugmotor', '350.000+ km Laufleistung'],
              ru: ['Цепной мотор 2.0', 'Ресурс 350 000+ км']
            },
            dossier: {
              en: {
                headline: 'Heavy-Duty 2.0L SOHC Workhorse with Cast-Iron Cylinder Liners',
                strengths: [
                  'Cast-iron cylinder sleeves provide extreme structural resistance against thermal cycling and continuous heavy load.',
                  'Engineered for lifetime durability without replacement, paired with ultra-reliable hydraulic tensioners.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Valve clearance check (screw adjustment) recommended around 100,000 km.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Make a slow, tight circle turn in a parking lot— groaning from the back means the rear all-wheel-drive oil is overdue.',
                  'Check service history for valve clearance adjustments and smooth air-conditioning engagement.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual synthetic oil & change Real Time AWD rear differential fluid every 40–50k km / 3 yrs',
                    cost: '€180–290',
                    ifIgnored: 'Aged rear diff fluid causes loud groaning/binding turns by 50–60k km',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Adjust valves (~80k), change gearbox oil & check 6-yr aging drive belt and rubber coolant hoses',
                    cost: '€280–450',
                    ifIgnored: 'Tight exhaust valves lose power & age-hardened hoses/belts crack unexpectedly',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust valves, replace spark plugs & change rear AWD diff oil',
                    cost: '€220–380',
                    ifIgnored: 'Rear axle groans/binds in tight turns & tight valves (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace A/C compressor clutch & worn starter motor contacts',
                    cost: '€350–600',
                    ifIgnored: 'Air conditioning stops cooling or engine fails to crank (components & fluids also degrade over years)',
                    damageCost: '€800–1,300'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace manual clutch kit (or flush automatic gearbox oil)',
                    cost: '€300–850',
                    ifIgnored: 'Slipping clutch or rough, delayed gear shifts (components & fluids also degrade over years)',
                    damageCost: '€1,400–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace water pump, thermostat & drive belt tensioner',
                    cost: '€280–450',
                    ifIgnored: 'Coolant leak & sudden overheating on highway trips (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,300–2,100'
                  }
                ]
              },
              de: {
                headline: 'Robuster 2.0L-SOHC-Dauerläufer mit Grauguss-Zylinderlaufbuchsen',
                strengths: [
                  'Extrem verzugsfest und thermisch unempfindlich selbst bei dauerhafter Zuglast.',
                  'Auf Fahrzeuglebensdauer ausgelegte Rollenkette ohne Längungsprobleme.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Hinterachsdifferential-Öl (DPS-F) alle 40.000–50.000 km wechseln, um Ruckeln bei engen Kurvenradien zu verhindern.',
                  'Ventilspielkontrolle per Einstellschrauben alle 100.000 km empfohlen.'
                ],
                beforeYouBuy: [
                  'Engen Kreis mit vollem Lenkeinschlag fahren— Brummen von hinten zeigt fälliges Öl im Hinterachs-Allrad.',
                  'Nachweise für eingestelltes Ventilspiel prüfen und testen, ob die Klimaanlage sofort eiskalt kühlt.',
                  'Unterboden am hinteren Hilfsrahmen und an den Radläufen gründlich auf Rost untersuchen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Motoröl & alle 40–50.000 km / 3 J. das Hinterachs-Allradöl (Dual Pump Fluid) wechseln',
                    cost: '180–290 €',
                    ifIgnored: 'Gealtertes Allradöl verursacht schon früh lautes Knarzen/Rubbeln beim Einlenken',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ventilspiel einstellen (~80 Tkm), Schaltgetriebeöl wechseln & 6-J.-Riemen/Schläuche prüfen',
                    cost: '280–450 €',
                    ifIgnored: 'Zu strammes Ventilspiel schadet Ventilen; gealterte Schläuche/Riemen werden rissig',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventilspiel einstellen, Kerzen & Hinterachs-Allradöl wechseln',
                    cost: '220–380 €',
                    ifIgnored: 'Hinterachse verspannt in engen Kurven & Ventilschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Klimakompressor-Kupplung & Anlasser-Kontakte erneuern',
                    cost: '350–600 €',
                    ifIgnored: 'Klimaanlage fällt aus oder Motor startet plötzlich nicht (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '800–1.300 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Kupplungssatz (oder Automatik-Getriebeölspülung) machen lassen',
                    cost: '300–850 €',
                    ifIgnored: 'Rutschende Kupplung oder harte Schaltstöße (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe, Thermostat & Riemenspanner ersetzen',
                    cost: '280–450 €',
                    ifIgnored: 'Kühlwasserverlust & Überhitzen auf Urlaubsfahrten (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.100 €'
                  }
                ]
              },
              ru: {
                headline: 'Выносливый 2.0L атмосферный двигатель с чугунными гильзами',
                strengths: [
                  'Рассчитана на пробег свыше 350 000+ км без замены.',
                  'Атмосферный мотор без турбин, ТНВД и дорогостоящих датчиков прямого впрыска.'
                ],
                watchouts: [
                  'Замена спецжидкости DPS-F в заднем редукторе каждые 40 000–50 000 км во избежание гула при вывороте руля.',
                  'Контроль зазоров клапанов каждые 100 000 км.'
                ],
                beforeYouBuy: [
                  'Сделать медленный разворот с вывернутым до упора рулём— гул сзади означает старое масло в заднем редукторе.',
                  'Проверить историю регулировки клапанов и чёткое включение муфты кондиционера.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло и раз в 40–50 тыс. км / 3 года жидкость заднего редуктора полного привода',
                    cost: '€180–290',
                    ifIgnored: 'Постаревшая жидкость вызывает гул и вибрацию муфты в поворотах уже к 50–60 тыс. км',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Отрегулировать клапаны (~80 тыс.), сменить масло в КПП и проверить стареющий за 6 лет ремень',
                    cost: '€280–450',
                    ifIgnored: 'Зажатые клапаны теряют мощность, а старые шланги и ремень трескаются с возрастом',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Отрегулировать клапаны, свечи и сменить масло в заднем редукторе',
                    cost: '€220–380',
                    ifIgnored: 'Рывки и износ заднего редуктора при разворотах (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить муфту кондиционера и контакты стартера',
                    cost: '€350–600',
                    ifIgnored: 'Отказ кондиционера или отказ запуска в самый неподходящий момент (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€800–1 300'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить сцепление (или обновить масло в 5-ст. автомате)',
                    cost: '€300–850',
                    ifIgnored: 'Пробуксовка сцепления или жёсткие толчки коробки (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 400–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить водяной насос, термостат и натяжитель ремня',
                    cost: '€280–450',
                    ifIgnored: 'Утечка антифриза и перегрев на трассе (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 300–2 100'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.1,
            badges: {
              en: ['6-MT + Dual-Pump AWD', 'Cheap Rear Diff Fluid Service'],
              de: ['6-Gang + Dual-Pump-Allrad', 'Günstiges Hinterachsöl'],
              ru: ['6-МКПП + гидро-AWD', 'Недорогое масло редуктора']
            }
          },
          buildQualityRust: {
            score: 7.6,
            badges: {
              en: ['Tough SUV Control Arms', 'Check Rear Subframe & Arches'],
              de: ['Robuste SUV-Querlenker', 'Achsträger & Radlaufrost'],
              ru: ['Прочные рычаги кроссовера', 'Контроль ржавчины подрамника']
            }
          },
          electronicsReliability: {
            score: 9.2,
            badges: {
              en: ['Mechanical AWD (No ECU)', 'Watch AC Clutch Relay'],
              de: ['Allrad ohne Elektronik', 'Klimarelais gelegentlich'],
              ru: ['Полный привод без ЭБУ', 'Простая электрика кондиционера']
            }
          },
          rideNoiseComfort: {
            score: 7.7,
            badges: {
              en: ['Compliant SUV Springing', 'Captain-Chair Front Armrests'],
              de: ['Komfortable SUV-Abstimmung', 'Bequeme Armlehnen vorn'],
              ru: ['Мягкая энергоёмкая подвеска', 'Удобные передние кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Dash Shifter & Smart Trays', 'Durable Hard-Wearing Plastics'],
              de: ['Schalthebel im Cockpit', 'Robuster Familien-Kunststoff'],
              ru: ['Рычаг на панели и ниши', 'Практичный износостойкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.3,
            badges: {
              en: ['Commanding High SUV View', '11.4 m Turn • Oversized Mirrors'],
              de: ['Erhöhte SUV-Rundumsicht', '11,4 m Wendekreis • Große Spiegel'],
              ru: ['Высокая командирская обзорность', 'Разворот 11,4 м • Крупные зеркала']
            }
          },
          safetyProtection: {
            score: 6.0,
            badges: {
              en: ['Euro NCAP 4★ (2007)', '6 Airbags + Trailer Assist'],
              de: ['Euro NCAP 4★ (2007)', '6 Airbags + Gespann-ESP'],
              ru: ['Euro NCAP 4★ (2007)', '6 подушек + ESP прицепа']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.3,
            badges: {
              en: ['Flat Floor + Sliding Rear Bench', 'Easy Upright SUV Door Entry'],
              de: ['Ebener Boden + verschiebbarer Fond', 'Bequemer hoher Einstieg'],
              ru: ['Ровный пол + сдвижной диван', 'Лёгкая высокая посадка']
            }
          },
          interiorBootSpace: {
            score: 9.7,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear + Shelf'],
              de: ['556L Kofferraum (1.532L Max)', 'Schiebebank & Doppelboden'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной ряд + полка']
            }
          },
          payloadTowing: {
            score: 9.2,
            badges: {
              en: ['535 kg Payload', '600 / 1,600 kg Towing'],
              de: ['535 kg Zuladung', '600 / 1.600 kg Zuglast'],
              ru: ['Нагрузка 535 кг', 'Прицеп: 600 / 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.5,
            badges: {
              en: ['0–100 km/h: 10.2 s', '190 km/h Top Speed'],
              de: ['0–100 km/h: 10,2 s', '190 km/h Spitze'],
              ru: ['0–100 км/ч: 10,2 с', 'Макс. 190 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.7,
            badges: {
              en: ['192 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['192 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['192 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['Real Time AWD Winter Traction', 'Comfortable Body Roll In Bends'],
              de: ['Allrad-Traktion bei Schnee', 'Deutliche SUV-Seitenneigung'],
              ru: ['Полный привод зимой', 'Заметные крены в поворотах']
            }
          },
          brakingPerformance: {
            score: 6.0,
            badges: {
              en: ['100–0 km/h: 37.2 m', 'SUV Mass • Soft Initial Bite'],
              de: ['100–0 km/h: 37,2 m', 'SUV-Gewicht • Weiches Ansprechen'],
              ru: ['100–0 км/ч: 37,2 м', 'Масса кроссовера • Мягкий хват']
            }
          },
          efficiencyFuel: {
            score: 5.8,
            badges: {
              en: ['Thirsty (8.4 L/100km)', 'SUV Aero & AWD Drag'],
              de: ['Durstig (8,4 L/100km)', 'SUV-Luftwiderstand'],
              ru: ['Прожорливый (8,4 л/100 км)', 'Аэродинамика SUV']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['2.0L SUV Tax • Euro 4/5 Petrol', 'Moderate Family Insurance'],
              de: ['2.0-Benzinsteuer • Euro 4/5', 'Faire Familien-Versicherung'],
              ru: ['Налог 2,0 бензин • Euro 4/5', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Rear Differential Dual-Pump Fluid (Honda DPSF)', de: 'Hinterachs-Allradöl wechseln (Honda DPSF)', ru: 'Замена масла в заднем редукторе (Honda DPSF)' }, cost: '€80–140' },
                { when: '~100,000 km · 6 yrs', action: { en: 'Valve-Clearance Check & MTF-3 Gearbox Oil', de: 'Ventilspiel prüfen & MTF-3 Getriebeöl wechseln', ru: 'Регулировка клапанов и масло MTF-3 в КПП' }, cost: '€240–380' }
              ],
              critical: [
                { when: '150–210k km · 10–14 yrs', action: { en: 'A/C Compressor Magnetic Clutch & Rear Camber Arms', de: 'Klimakompressor-Kupplung & hintere Sturzstreben', ru: 'Муфта кондиционера и задние развальные рычаги' }, cost: '€280–520', risk: { en: 'Loss of A/C cooling & uneven inner rear tyre wear', de: 'Ausfall Klimaanlage & einseitiger Hinterreifen-Verschleiß', ru: 'Отказ кондиционера и неравномерный износ задних шин' }, damage: '€900–1,400' }
              ]
            },
            score: 9.0,
            badges: {
              en: ['Simple Rear Diff Oil Changes', 'No Turbo / No DPF Bills'],
              de: ['Günstiger Hinterachs-Ölwechsel', 'Keine Turbo-/DPF-Kosten'],
              ru: ['Недорогое ТО заднего редуктора', 'Нет турбины и сажевого']
            }
          },
          depreciationResale: {
            score: 9.2,
            badges: {
              en: ['High Used SUV Demand', 'Rock-Solid Resale'],
              de: ['Extrem gefragtes SUV', 'Starker Werterhalt'],
              ru: ['Огромный спрос б/у', 'Высокая ликвидность']
            }
          }
        }
      },
      {
        id: '2.4-ivtec',
        defaultGearboxId: '5-at',
        gearboxes: [{ id: '5-at', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.4L i-VTEC NA', de: '2.4L i-VTEC Sauger', ru: '2.4L i-VTEC Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@auto5', clutchDmf: '@torqueConv',
          towingBraked: '1,500 kg', sprint0100: '11.0 s', topSpeed: '190 km/h', peakTorque: '220 Nm @ 4,200',
          passingPunch: { en: 'Smooth · Relaxed', de: 'Souverän · Ruhig', ru: 'Ровная · Спокойная' },
          realWorldFuel: '9.5–10.5 L/100 km', tankRange: '58 L · ~580 km', euroNorm: 'Euro 4 / 5',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierLowMod'
        },
        dossierGroup: 'petrol-conv-auto',
        buyerFitGroup: 'na-petrol-awd',
        buyerFitOverrides: {
          skip: ['crv24Thirst', 'crvNotSporty', 'crvSubframeRustCheck', 'crvDatedInterior']
        },
        isDefault: false,
        fuelType: 'petrol',
        hp: 166,
        shortTitle: 'CR-V 2.4 i-VTEC',
        fullName: '2010 Honda CR-V 2.4 i-VTEC',
        engineBadge: '2.4L i-VTEC AWD • 166 HP',
        engineSubLabel: {
          en: 'K24Z1/K24Z4 DOHC i-VTEC Petrol • 5-AT • 220 Nm • Real Time AWD',
          de: 'K24Z1/K24Z4 DOHC Saugbenziner • 5-Stufen-Automatik • 220 Nm • Allrad',
          ru: 'K24Z1/K24Z4 Атмосферный бензин • 5-ст. АКПП • 220 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'K-SERIES FLAGSHIP',
          de: 'K-SERIE TOPMODELL',
          ru: 'ФЛАГМАН K24'
        },
        originalMsrp: {
          en: '€31,800 New',
          de: '31.800 € Neu',
          ru: '€31 800 новый'
        },
        estUsedPrice: '€10,500',
        perkLabel: {
          en: '✦ Legendary K24 2.4L i-VTEC + 5-AT • 556L Boot • Real Time AWD',
          de: '✦ Legendärer K24 2.4L i-VTEC + 5-AT • 556L Kofferraum • Allrad',
          ru: '✦ Легендарный мотор 2.4 K24 + классическая 5-АКПП • Багажник 556 л'
        },
        remarkablePositives: {
          en: [
            'LEGENDARY 2.4 K24 ENGINE',
            'BULLETPROOF 5-SPEED AUTO',
            '556L DOUBLE-DECK BOOT',
            'STRONG 220 NM PULL',
            '1,500 KG TOWING + AWD'
          ],
          de: [
            'LEGENDÄRER 2.4 K24 MOTOR',
            'ROBUSTE 5-GANG-AUTOMATIK',
            '556L DOPPELBODEN-KOFFERRAUM',
            'SOUVERÄNE 220 NM KRAFT',
            '1.500 KG ZUGLAST & ALLRAD'
          ],
          ru: [
            'ЛЕГЕНДАРНЫЙ МОТОР 2.4 K24',
            'ВЕЧНЫЙ 5-СТ. АВТОМАТ',
            'БАГАЖНИК 556 Л (2 ПОЛКИ)',
            'УВЕРЕННАЯ ТЯГА 220 Н·М',
            'БУКСИРОВКА 1 500 КГ + AWD'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 9.6L/100KM',
            'HIGHER 2.4L ROAD TAX',
            'REACTIVE DUAL-PUMP AWD',
            'SUV BODY ROLL IN CORNERS'
          ],
          de: [
            'DURSTIGE 9,6 L/100KM',
            'HÖHERE 2.4L KFZ-STEUER',
            'TRÄGER DUAL-PUMP-ALLRAD',
            'MEHR KURVEN-SEITENNEIGUNG'
          ],
          ru: [
            'ВЫСОКИЙ РАСХОД 9,6 Л/100',
            'ДО 12 Л/100 В ПРОБКАХ',
            'ЗАДЕРЖКА МУФТЫ AWD',
            'КРЕНЫ КУЗОВА В ПОВОРОТАХ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 9.0,
          comfortCabin: 8.0,
          spacePracticality: 9.2,
          performanceDynamics: 6.7,
          runningCostsTco: 7.5
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.4L i-VTEC Inline-4 NA (K24Z4)', de: '2.4L i-VTEC Reihenvierzylinder Sauger (K24Z4)', ru: '2.4L i-VTEC рядный 4-цил. атмосферный (K24Z4)' } },
                  { k: 'displacement', v: '2,354 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '122 kW (166 HP)', de: '122 kW (166 PS)', ru: '122 кВт (166 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Legendary Honda K24 engine — ultra-durable 350,000+ km longevity paired with a tough 5-speed torque auto.', de: 'Legendärer Honda-K24-Motor für 350.000+ km kombiniert mit robuster 5-Gang-Wandlerautomatik.', ru: 'Легендарный мотор K24 с ресурсом 350 000+ км и крепким 5-ст. автоматом.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.8,
            badges: {
              en: ['Legendary 2.4 Chain NA', 'Long-Life K24Z Timing Chain'],
              de: ['Legendärer 2.4 Kettenmotor', 'Langlebige K24Z-Steuerkette'],
              ru: ['Легендарный 2.4 цепной', 'Долговечная цепь ГРМ K24Z']
            },
            dossier: {
              en: {
                headline: 'Honda K24 2.4L Chain NA',
                strengths: [
                  'Cast-iron sleeves, forged steel crank, port injection, and heavy-duty timing chain deliver effortless 350,000+ km durability.',
                  'No turbos, no DPF, no direct-injection soot— starts reliably in sub-zero winters.'
                ],
                watchouts: [
                  'Check for brief cold timing actuator rattle; inspect screw valve lash every 100,000 km.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Listen at cold morning start for a 2-second rattling/grinding sound from the upper engine— a worn camshaft gear.',
                  'Check the 5-speed automatic shifts smoothly and oil changes were done every 10,000 km.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict 10,000 km / 1 yr oil + change Honda 5-AT auto & rear AWD fluids every 40–50k km / 3 yrs',
                    cost: '€220–350',
                    ifIgnored: 'Aged 5-speed auto & AWD fluids cause torque-converter shudder and diff groan',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Refresh 5-AT/AWD oils again at 80–90k, replace spark plugs & inspect 6-yr aging steering/coolant hoses',
                    cost: '€320–500',
                    ifIgnored: 'Heat-aged power-steering/rubber hoses weep fluid onto hot exhaust',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust valves & change 5-speed auto + rear AWD oils',
                    cost: '€250–420',
                    ifIgnored: 'Jerky gear shifts, noisy rear AWD & burnt valves (components & fluids also degrade over years)',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace rattling cold-start camshaft gear & chain tensioner',
                    cost: '€550–850',
                    ifIgnored: 'Stretched timing chain & engine warning lights (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Reseal engine oil control gaskets & replace A/C clutch relay',
                    cost: '€200–400',
                    ifIgnored: 'Oil dripping onto hot exhaust pipe & dead A/C (rubber/plastic & seals also harden with age)',
                    damageCost: '€800–1,400'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace full timing chain kit & water pump',
                    cost: '€750–1,100',
                    ifIgnored: 'Chain skips teeth & causes major valve damage (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,200–3,400'
                  }
                ]
              },
              de: {
                headline: 'Legendärer K24 2.4L Ketten-Saugmotor— ein Dauerläufer',
                strengths: [
                  'Grauguss-Laufbuchsen, geschmiedete Kurbelwelle, Saugrohreinspritzung und langlebige Steuerkette für über 350.000 km.',
                  'Kein Turbolader, kein Partikelfilter und keine Direkteinspritzung— sehr winterfest und wartungsfreundlich.'
                ],
                watchouts: [
                  'Auf kurzes Kaltstart-Rasseln achten und Ventilspiel alle 100.000 km prüfen.',
                  'Hochdruck-Servoschlauch auf Schwitzen sowie hinteren Achsträger auf Unterbodenrost kontrollieren.'
                ],
                beforeYouBuy: [
                  'Beim kalten Morgenstart auf 2 Sekunden kurzes Rasseln achten— das verrät das verschlissene Nockenwellen-Verstellrad.',
                  'Engen Kreis fahren (Hinterachs-Allradöl prüfen) und Servolenkungsleitungen auf Ölverlust kontrollieren.',
                  'Sanftes Schalten der 5-Gang-Automatik testen und regelmäßige Ölwechsel alle 10.000 km prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10 Tkm / 1 J. Motoröl + alle 40–50 Tkm / 3 J. Automatik- & Allrad-Hinterachsöl wechseln',
                    cost: '220–350 €',
                    ifIgnored: 'Altes Automatik-/Allradöl führt früh zu Wandlerruckeln und Knarzen hinten',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatik-/Allradöl bei 80–90 Tkm wiederholen, Kerzen tauschen & 6-J.-Gummischläuche prüfen',
                    cost: '320–500 €',
                    ifIgnored: 'Altersbedingt spröde Lenk-/Kühlerschläuche tropfen auf den heißen Auspuff',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventile einstellen sowie 5-Gang-Automatik- & Allradöl wechseln',
                    cost: '250–420 €',
                    ifIgnored: 'Ruckelige Automatik, Hinterachs-Brummen & Ventilschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Rasselndes Nockenwellen-Zahnrad & Kettenspanner ersetzen',
                    cost: '550–850 €',
                    ifIgnored: 'Gelängte Steuerkette & Motorkontrollleuchte (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Öldichtungen am Zylinderkopf erneuern & Klima-Relais tauschen',
                    cost: '200–400 €',
                    ifIgnored: 'Öl tropft auf heißen Auspuff & Klima fällt aus (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Kompletten Steuerkettensatz & Wasserpumpe wechseln',
                    cost: '750–1.100 €',
                    ifIgnored: 'Überspringende Kette zerstört Motorventile (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.200–3.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Легендарный цепной мотор K24 2.4— один из самых живучих тандемов',
                strengths: [
                  'Чугунные гильзы, распределённый впрыск и прочная цепь ГРМ спокойно выдерживают пробеги за 350 000+ км.',
                  'Предельно надёжный запуск в любые морозы и минимальные требования к качеству топлива.'
                ],
                watchouts: [
                  'Возможен кратковременный стрекот муфты при холодном пуске; проверка клапанов каждые 100 000 км.',
                  'Осматривайте магистраль гидроусилителя на запотевание и заднюю подвеску на ржавчину.'
                ],
                beforeYouBuy: [
                  'Послушать холодный утренний запуск— 2-секундный треск сверху мотора говорит об износе шестерни распредвала.',
                  'Проверить тишину заднего редуктора в тесном развороте и сухость шлангов гидроусилителя руля.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло строго раз в 10 тыс. / 1 год, а жидкости 5-АКПП и заднего редуктора — раз в 40–50 тыс. / 3 года',
                    cost: '€220–350',
                    ifIgnored: 'Старая жидкость даёт вибрацию гидротрансформатора и гул заднего моста',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Повторно освежить жидкости АКПП и редуктора, сменить свечи и проверить шланги ГУР/ОЖ (6 лет)',
                    cost: '€320–500',
                    ifIgnored: 'Рассохшиеся с возрастом резиновые шланги начинают сочиться на горячий выпуск',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Отрегулировать клапаны и поменять масло в АКПП и заднем редукторе',
                    cost: '€250–420',
                    ifIgnored: 'Толчки автомата, гул полного привода и прогар клапанов (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить трещащую шестерню распредвала и натяжитель цепи',
                    cost: '€550–850',
                    ifIgnored: 'Быстрое растяжение цепи и ошибки двигателя (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить подтекающие прокладки клапана масла и реле муфты',
                    cost: '€200–400',
                    ifIgnored: 'Течь масла на горячий выпуск и отказ кондиционера (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€800–1 400'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить полный комплект цепи двигателя и водяную помпу',
                    cost: '€750–1 100',
                    ifIgnored: 'Перескок цепи и тяжёлый ремонт головки блока (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 200–3 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 5-Speed Auto', 'Proven Dual-Pump AWD'],
              de: ['Unverwüstliche 5G-Automatik', 'Bewährter Dual-Pump-Allrad'],
              ru: ['Неубиваемый 5-ст. автомат', 'Надёжный полный привод']
            }
          },
          buildQualityRust: {
            score: 7.6,
            badges: {
              en: ['Tough SUV Control Arms', 'Check Rear Subframe & Arches'],
              de: ['Robuste SUV-Querlenker', 'Achsträger & Radlaufrost'],
              ru: ['Прочные рычаги кроссовера', 'Контроль ржавчины подрамника']
            }
          },
          electronicsReliability: {
            score: 9.2,
            badges: {
              en: ['Mechanical AWD (No ECU)', 'Dependable Denso Electrics'],
              de: ['Allrad ohne Elektronik', 'Zuverlässige Denso-Technik'],
              ru: ['Механический полный привод', 'Надёжная электрика Denso']
            }
          },
          rideNoiseComfort: {
            score: 7.7,
            badges: {
              en: ['Compliant SUV Springing', 'Captain-Chair Front Armrests'],
              de: ['Komfortable SUV-Abstimmung', 'Bequeme Armlehnen vorn'],
              ru: ['Мягкая энергоёмкая подвеска', 'Удобные передние кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Dash Shifter & Smart Trays', 'Durable Hard-Wearing Plastics'],
              de: ['Schalthebel im Cockpit', 'Robuster Familien-Kunststoff'],
              ru: ['Рычаг на панели и ниши', 'Практичный износостойкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.3,
            badges: {
              en: ['Commanding High SUV View', '11.4 m Turn • Oversized Mirrors'],
              de: ['Erhöhte SUV-Rundumsicht', '11,4 m Wendekreis • Große Spiegel'],
              ru: ['Высокая командирская обзорность', 'Разворот 11,4 м • Крупные зеркала']
            }
          },
          safetyProtection: {
            score: 6.0,
            badges: {
              en: ['Euro NCAP 4★ (2007)', '6 Airbags + Trailer Assist'],
              de: ['Euro NCAP 4★ (2007)', '6 Airbags + Gespann-ESP'],
              ru: ['Euro NCAP 4★ (2007)', '6 подушек + ESP прицепа']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.3,
            badges: {
              en: ['Flat Floor + Sliding Rear Bench', 'Easy Upright SUV Door Entry'],
              de: ['Ebener Boden + verschiebbarer Fond', 'Bequemer hoher Einstieg'],
              ru: ['Ровный пол + сдвижной диван', 'Лёгкая высокая посадка']
            }
          },
          interiorBootSpace: {
            score: 9.7,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear + Shelf'],
              de: ['556L Kofferraum (1.532L Max)', 'Schiebebank & Doppelboden'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной ряд + полка']
            }
          },
          payloadTowing: {
            score: 9.0,
            badges: {
              en: ['525 kg Payload', '600 / 1,500 kg Towing'],
              de: ['525 kg Zuladung', '600 / 1.500 kg Zuglast'],
              ru: ['Нагрузка 525 кг', 'Прицеп: 600 / 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.1,
            badges: {
              en: ['0–100 km/h: 10.0 s', '190 km/h Top Speed'],
              de: ['0–100 km/h: 10,0 s', '190 km/h Spitze'],
              ru: ['0–100 км/ч: 10,0 с', 'Макс. 190 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.2,
            badges: {
              en: ['220 Nm Smooth Linear Pull', 'Strongest Above 3,500 RPM'],
              de: ['220 Nm linearer Sauger', 'Am stärksten ab 3.500/min'],
              ru: ['220 Н·м ровный атмосферник', 'Живеет после 3 500 об/мин']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['Real Time AWD Winter Traction', 'Comfortable Body Roll In Bends'],
              de: ['Allrad-Traktion bei Schnee', 'Deutliche SUV-Seitenneigung'],
              ru: ['Полный привод зимой', 'Заметные крены в поворотах']
            }
          },
          brakingPerformance: {
            score: 6.0,
            badges: {
              en: ['100–0 km/h: 37.2 m', 'SUV Mass • Soft Initial Bite'],
              de: ['100–0 km/h: 37,2 m', 'SUV-Gewicht • Weiches Ansprechen'],
              ru: ['100–0 км/ч: 37,2 м', 'Масса кроссовера • Мягкий хват']
            }
          },
          efficiencyFuel: {
            score: 4.6,
            badges: {
              en: ['Thirsty (9.6 L/100km)', '2.4 NA + 5-AT Thirst'],
              de: ['Durstig (9,6 L/100km)', 'Durstig im Stadtverkehr'],
              ru: ['Прожорливый (9,6 л/100 км)', 'Расход 2.4 АКПП в городе']
            }
          },
          taxInsuranceNorm: {
            score: 6.1,
            badges: {
              en: ['Higher 2.4L CO2 Tax • Euro 4/5', 'Mid-High SUV Insurance'],
              de: ['Höhere 2.4L-Steuer • Euro 4/5', 'Gehobene SUV-Versicherung'],
              ru: ['Высокий налог 2,4 л', 'Дороже страховка SUV']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Rear Differential Dual-Pump Fluid (Honda DPSF)', de: 'Hinterachs-Allradöl wechseln (Honda DPSF)', ru: 'Замена масла в заднем редукторе (Honda DPSF)' }, cost: '€80–140' },
                { when: '~100,000 km · 6 yrs', action: { en: 'Valve-Clearance Check & MTF-3 Gearbox Oil', de: 'Ventilspiel prüfen & MTF-3 Getriebeöl wechseln', ru: 'Регулировка клапанов и масло MTF-3 в КПП' }, cost: '€240–380' }
              ],
              critical: [
                { when: '150–210k km · 10–14 yrs', action: { en: 'A/C Compressor Magnetic Clutch & Rear Camber Arms', de: 'Klimakompressor-Kupplung & hintere Sturzstreben', ru: 'Муфта кондиционера и задние развальные рычаги' }, cost: '€280–520', risk: { en: 'Loss of A/C cooling & uneven inner rear tyre wear', de: 'Ausfall Klimaanlage & einseitiger Hinterreifen-Verschleiß', ru: 'Отказ кондиционера и неравномерный износ задних шин' }, damage: '€900–1,400' }
              ]
            },
            score: 8.9,
            badges: {
              en: ['Zero Turbo / Zero DPF Bills', 'Routine ATF & Diff Oil Only'],
              de: ['Kein Turbo- oder DPF-Risiko', 'Nur reguläre Flüssigkeiten'],
              ru: ['Нет риска турбины и DPF', 'Только замена масел по регламенту']
            }
          },
          depreciationResale: {
            score: 9.4,
            badges: {
              en: ['Rare 2.4 Auto Demand', 'Top Class Resale'],
              de: ['Begehrte 2.4 Automatik', 'Spitzen-Werterhalt'],
              ru: ['Бешеный спрос на 2.4', 'Рекордная ликвидность']
            }
          }
        }
      },
      {
        id: '2.2-idtec',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [
          { id: '6-mt-dmf', isDefault: true },
          {
            id: '5-at',
            estUsedPrice: '€9,800',
            specOverrides: { sprint0100: '10.6 s', topSpeed: '187 km/h', realWorldFuel: '7.5–8.4 L/100 km', towingBraked: '1,500 kg' },
            subStatDeltas: {
              transmissionDriveline: {
                score: 8.5,
                badges: { en: ['Tough 5-AT (No DMF/Clutch)', 'Towing Rated 1,500 kg'], de: ['Robuste 5-AT (Kein ZMS)', '1.500 kg Anhängelast'], ru: ['Крепкий 5-АКПП (без ДММ)', 'Прицеп до 1 500 кг'] }
              },
              accelerationOvertaking: {
                score: 5.3,
                badges: { en: ['0–100 km/h: 10.6 s (5-AT)', '187 km/h Top Speed'], de: ['0–100 km/h: 10,6 s (5-AT)', '187 km/h Spitze'], ru: ['0–100 км/ч: 10,6 с (5-АКПП)', 'Макс. 187 км/ч'] }
              },
              efficiencyFuel: {
                score: 6.3,
                badges: { en: ['7.5–8.4 L/100km (5-AT)', 'Smooth Highway Cruiser'], de: ['7,5–8,4 L/100km (5-AT)', 'Ruhiger Autobahn-Gleiter'], ru: ['7,5–8,4 л/100 км (5-АКПП)', 'Комфортный трассовый крейсер'] }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.2L i-DTEC Diesel', de: '2.2L i-DTEC Diesel', ru: '2.2L i-DTEC Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '2,000 kg', sprint0100: '9.6 s', topSpeed: '190 km/h', peakTorque: '350 Nm @ 2,000',
          passingPunch: { en: 'Strong Towing Pull', de: 'Kräftiger Durchzug', ru: 'Мощная тяга' },
          realWorldFuel: '6.6–7.4 L/100 km', tankRange: '58 L · ~830 km', euroNorm: 'Euro 5 (DPF)',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierMod'
        },
        dossierGroup: 'diesel-awd-mt',
        buyerFitGroup: 'diesel-awd',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        shortTitle: 'CR-V 2.2 i-DTEC',
        fullName: '2010 Honda CR-V 2.2 i-DTEC',
        engineBadge: '2.2L i-DTEC AWD • 150 HP',
        engineSubLabel: {
          en: 'N22B3 2.2L Turbo-Diesel • 6-MT • 350 Nm • Real Time AWD',
          de: 'N22B3 2.2L Turbodiesel • 6-Gang-Schaltgetriebe • 350 Nm • Allrad',
          ru: 'N22B3 2.2L Турбодизель • 6-ст. МКПП • 350 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'TOWING WORKHORSE',
          de: 'ZUGPFERD-SUV',
          ru: 'ТЯГОВЫЙ КРОССОВЕР'
        },
        originalMsrp: {
          en: '€31,400 New',
          de: '31.400 € Neu',
          ru: '€31 400 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ 2,000 kg Braked Towing • 350 Nm Torque • 556L Boot & AWD',
          de: '✦ 2.000 kg Anhängelast • 350 Nm Drehmoment • 556L Kofferraum',
          ru: '✦ Буксировка 2 000 кг • Тяга 350 Н·м • Багажник 556 л и AWD'
        },
        remarkablePositives: {
          en: [
            '2,000 KG BRAKED TOWING',
            '350 NM DIESEL TORQUE',
            '556L DOUBLE-DECK BOOT',
            '6.7L/100KM SUV ECONOMY',
            'REFINED N22B3 ALU DIESEL'
          ],
          de: [
            '2.000 KG ANHÄNGELAST',
            '350 NM DIESEL-DREHMOMENT',
            '556L DOPPELBODEN-KOFFERRAUM',
            '6,7 L/100KM SUV-VERBRAUCH',
            'ROBUSTER N22B3 ALU-DIESEL'
          ],
          ru: [
            'БУКСИРОВКА ДО 2 000 КГ',
            'ТЯГА ДИЗЕЛЯ 350 Н·М',
            'БАГАЖНИК 556 Л (2 ПОЛКИ)',
            'РАСХОД 6,7 Л/100 КМ',
            'НАДЁЖНЫЙ ДИЗЕЛЬ N22B3'
          ]
        },
        notableNegatives: {
          en: [
            'DPF DISLIKES SHORT TRIPS',
            'HIGH 2.2L DIESEL ROAD TAX',
            'CLUTCH & DMF WEAR RISK',
            'EURO 5 CITY RESTRICTIONS'
          ],
          de: [
            'DPF MAG KEINE KURZSTRECKE',
            'HOHE 2.2L DIESEL-STEUER',
            'ZMS- & KUPPLUNGSVERSCHLEISS',
            'EURO-5-UMWELTZONEN'
          ],
          ru: [
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ДОРОГОЙ НАЛОГ И ТО 2.2',
            'ИЗНОС ДВУХМАССА И СЦЕПЛЕНИЯ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.4,
          comfortCabin: 8.0,
          spacePracticality: 9.5,
          performanceDynamics: 7.3,
          runningCostsTco: 7.5
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.2L i-DTEC Inline-4 Turbodiesel (N22B3)', de: '2.2L i-DTEC Reihenvierzylinder Turbodiesel (N22B3)', ru: '2.2L i-DTEC рядный 4-цил. турбодизель (N22B3)' } },
                  { k: 'displacement', v: '2,199 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '110 kW (150 HP)', de: '110 kW (150 PS)', ru: '110 кВт (150 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: { en: 'Refined Euro 5 Honda diesel with 2,000 kg towing muscle and 300,000+ km motorway endurance.', de: 'Kultivierter Euro-5-Diesel mit 2.000 kg Zuglast und hoher Langstrecken-Standfestigkeit.', ru: 'Тихий дизель Euro 5 с отличной тягой для прицепа (2 000 кг) и большим ресурсом.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 9.3,
            badges: {
              en: ['2.2 Chain-Driven Block', 'Watch City DPF Regeneration'],
              de: ['2.2 Alu-Kettenmotor', 'DPF bei Kurzstrecke beachten'],
              ru: ['Цепной дизель 2.2', 'Следить за регенерацией DPF']
            },
            dossier: {
              en: {
                headline: 'Heavy-Duty N22B3 Facelift Diesel— 2,000 kg Towing Workhorse With Upgraded Block',
                strengths: [
                  'Revised 2010+ Facelift N22B3 Engine: Eliminates the cracked exhaust manifold weakness of the 2007–2009 i-CTDi while raising torque to 350 Nm.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Urban stop-start commuting prevents passive regeneration and accelerates oil dilution.',
                  'Differential Pressure Sensor & Intake Flaps: Monitor DPF pressure sensor lines and rear DPS-F fluid intervals for trouble-free operation.'
                ],
                beforeYouBuy: [
                  'Ask for highway usage history so the diesel soot filter has not been choked by short school runs.',
                  'Make a tight full-lock circle turn to make sure the rear all-wheel-drive differential stays silent.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, clean fuel filter & change AWD rear diff fluid every 40–50k km / 3 yrs',
                    cost: '€220–350',
                    ifIgnored: 'Aged AWD oil grinds on turns & urban trips load diesel soot filter early',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change manual gearbox oil, check glow system & inspect 6-yr aging boost hoses + serpentine belt',
                    cost: '€280–460',
                    ifIgnored: 'Age-weakened turbo boost hoses split under 350 Nm torque & trigger limp mode',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean exhaust valve (EGR) & change rear AWD diff oil',
                    cost: '€220–380',
                    ifIgnored: 'Rear differential binding & sluggish throttle response (components & fluids also degrade over years)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace heavy-duty clutch & dual-mass flywheel',
                    cost: '€1,100–1,600',
                    ifIgnored: 'Violent judder shakes gearbox & breaks input bearings (components & fluids also degrade over years)',
                    damageCost: '€2,000–2,900'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Deep-clean diesel soot filter & replace copper injector seals',
                    cost: '€400–750',
                    ifIgnored: 'Exhaust limp mode & fuel thinning engine oil (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace timing chain & oil pump chain kit',
                    cost: '€850–1,300',
                    ifIgnored: 'Stretched chain skips teeth or snaps (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,600–4,000'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger Facelift-Diesel (N22B3)— zuverlässiges 2.000-kg-Zugpferd ohne alte Krümmerprobleme',
                strengths: [
                  'Beseitigt die Abgaskrümmer-Risse des frühen i-CTDi und liefert kräftige 350 Nm Drehmoment.',
                  'Für hohe Anhängelasten (bis 2.000 kg) und lange Autobahn-Etappen ausgelegt.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Häufige Kurzfahrten verhindern die Regeneration und begünstigen Ölverdünnung.',
                  'Sensorleitungen sauber halten und Allradöl alle 40.000–50.000 km tauschen.'
                ],
                beforeYouBuy: [
                  'Langstrecken-Nutzung erfragen, damit der Partikelfilter nicht durch reinen Kurzstreckenverkehr verstopft ist.',
                  'Engen Kreis mit vollem Lenkeinschlag fahren, ob der Hinterrad-Allradantrieb ruhig arbeitet.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, Dieselfilter & alle 40–50 Tkm / 3 J. das Hinterachs-Allradöl wechseln',
                    cost: '220–350 €',
                    ifIgnored: 'Gealtertes Allradöl rubbelt beim Abbiegen & Kurzstrecken setzen den DPF früh zu',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebeöl wechseln, Glühanlage prüfen & nach 6 J. gealterte Turboschläuche/Riemen checken',
                    cost: '280–460 €',
                    ifIgnored: 'Altersbrüchige Ladedruckschläuche platzen bei 350 Nm & lösen Notlauf aus',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Abgas-Rückführventil reinigen & Hinterachs-Allradöl wechseln',
                    cost: '220–380 €',
                    ifIgnored: 'Verspannter Allradantrieb & träges Ansprechen (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Verstärkte Kupplung & Zweimassenschwungrad ersetzen',
                    cost: '1.100–1.600 €',
                    ifIgnored: 'Starkes Schlagen ruiniert Lager und Getriebe (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.000–2.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Partikelfilter spülen & Kupfer-Dichtringe der Düsen erneuern',
                    cost: '400–750 €',
                    ifIgnored: 'Notlauf-Sperre & Ölverdünnung zerstören den Turbolader (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette & Ölpumpenkette komplett tauschen',
                    cost: '850–1.300 €',
                    ifIgnored: 'Gelängte Kette reißt oder springt über (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.600–4.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Тяговитый рестайлинговый дизель N22B3— надёжный буксировщик (до 2 000 кг)',
                strengths: [
                  'Лишён проблем с трещинами выпускного коллектора раннего i-CTDi и развивает 350 Н·м.',
                  'Спроектирован с запасом под долгие нагрузки на трассе и тяжёлые прицепы массой до 2 000 кг.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'При регулярной езде по городу сажевый фильтр не прожигается и разжижает моторное масло.',
                  'Следите за трубками датчика DPF и меняйте масло DPS-F в заднем мосту вовремя.'
                ],
                beforeYouBuy: [
                  'Убедиться, что машина бывала на трассе и сажевый фильтр не забит короткими поездками.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.',
                  'Проверить уровень антифриза, форсунки и патрубки турбины на отсутствие нагара и подтёков масла.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно малозольное масло, топливный фильтр и раз в 40–50 тыс. / 3 года масло заднего редуктора',
                    cost: '€220–350',
                    ifIgnored: 'Старая жидкость вызывает хруст полного привода, а город забивает фильтр сажи',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в КПП и осмотреть стареющие за 6 лет патрубки турбины и приводной ремень',
                    cost: '€280–460',
                    ifIgnored: 'Потерявшие эластичность от возраста шланги рвутся под тягой 350 Нм',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан выхлопных газов и сменить масло в заднем редукторе',
                    cost: '€220–380',
                    ifIgnored: 'Закусывание полного привода и задумчивый разгон (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить усиленное сцепление и двухмассовый маховик',
                    cost: '€1 100–1 600',
                    ifIgnored: 'Сильная вибрация разрушает подшипники коробки передач (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 000–2 900'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Промыть сажевый фильтр и заменить медные шайбы форсунок',
                    cost: '€400–750',
                    ifIgnored: 'Аварийный режим и разжижение масла соляркой (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить комплект цепи двигателя и цепи маслонасоса',
                    cost: '€850–1 300',
                    ifIgnored: 'Растяжение или обрыв цепи с тяжёлым ремонтом (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 600–4 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.8,
            badges: {
              en: ['6-MT + Dual-Pump AWD', '350 Nm Clutch & DMF Load'],
              de: ['6-Gang + Dual-Pump-Allrad', 'ZMS- & Kupplungslast (350 Nm)'],
              ru: ['6-МКПП + привод AWD', 'Нагрузка 350 Н·м на маховик']
            }
          },
          buildQualityRust: {
            score: 7.6,
            badges: {
              en: ['Tough SUV Control Arms', 'Check Rear Subframe & Arches'],
              de: ['Robuste SUV-Querlenker', 'Achsträger & Radlaufrost'],
              ru: ['Прочные рычаги кроссовера', 'Контроль ржавчины подрамника']
            }
          },
          electronicsReliability: {
            score: 8.7,
            badges: {
              en: ['Mechanical AWD • Euro 5 ECU', 'DPF Pressure Sensors'],
              de: ['Mechanischer AWD • Euro 5', 'DPF-Sensoren beachten'],
              ru: ['Механический AWD • Euro 5', 'Контроль датчиков DPF']
            }
          },
          rideNoiseComfort: {
            score: 7.7,
            badges: {
              en: ['Compliant SUV Springing', 'Captain-Chair Front Armrests'],
              de: ['Komfortable SUV-Abstimmung', 'Bequeme Armlehnen vorn'],
              ru: ['Мягкая энергоёмкая подвеска', 'Удобные передние кресла']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Dash Shifter & Smart Trays', 'Durable Hard-Wearing Plastics'],
              de: ['Schalthebel im Cockpit', 'Robuster Familien-Kunststoff'],
              ru: ['Рычаг на панели и ниши', 'Практичный износостойкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.3,
            badges: {
              en: ['Commanding High SUV View', '11.4 m Turn • Oversized Mirrors'],
              de: ['Erhöhte SUV-Rundumsicht', '11,4 m Wendekreis • Große Spiegel'],
              ru: ['Высокая командирская обзорность', 'Разворот 11,4 м • Крупные зеркала']
            }
          },
          safetyProtection: {
            score: 6.0,
            badges: {
              en: ['Euro NCAP 4★ (2007)', '6 Airbags + Trailer Assist'],
              de: ['Euro NCAP 4★ (2007)', '6 Airbags + Gespann-ESP'],
              ru: ['Euro NCAP 4★ (2007)', '6 подушек + ESP прицепа']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.3,
            badges: {
              en: ['Flat Floor + Sliding Rear Bench', 'Easy Upright SUV Door Entry'],
              de: ['Ebener Boden + verschiebbarer Fond', 'Bequemer hoher Einstieg'],
              ru: ['Ровный пол + сдвижной диван', 'Лёгкая высокая посадка']
            }
          },
          interiorBootSpace: {
            score: 9.7,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear + Shelf'],
              de: ['556L Kofferraum (1.532L Max)', 'Schiebebank & Doppelboden'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной ряд + полка']
            }
          },
          payloadTowing: {
            score: 9.6,
            badges: {
              en: ['550 kg Payload', '600 / 2,000 kg Towing'],
              de: ['550 kg Zuladung', '600 / 2.000 kg Zuglast'],
              ru: ['Нагрузка 550 кг', 'Прицеп: 600 / 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.0,
            badges: {
              en: ['0–100 km/h: 9.6 s', '190 km/h Top Speed'],
              de: ['0–100 km/h: 9,6 s', '190 km/h Spitze'],
              ru: ['0–100 км/ч: 9,6 с', 'Макс. 190 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.0,
            badges: {
              en: ['350 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['350 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['350 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 6.0,
            badges: {
              en: ['Real Time AWD Winter Traction', 'Comfortable Body Roll In Bends'],
              de: ['Allrad-Traktion bei Schnee', 'Deutliche SUV-Seitenneigung'],
              ru: ['Полный привод зимой', 'Заметные крены в поворотах']
            }
          },
          brakingPerformance: {
            score: 6.0,
            badges: {
              en: ['100–0 km/h: 37.2 m', 'SUV Mass • Soft Initial Bite'],
              de: ['100–0 km/h: 37,2 m', 'SUV-Gewicht • Weiches Ansprechen'],
              ru: ['100–0 км/ч: 37,2 м', 'Масса кроссовера • Мягкий хват']
            }
          },
          efficiencyFuel: {
            score: 7.9,
            badges: {
              en: ['6.7 L/100km', '850+ km Tank Range'],
              de: ['6,7 L/100km', '850+ km Reichweite'],
              ru: ['6,7 л/100 км', 'Запас хода 850+ км']
            }
          },
          taxInsuranceNorm: {
            score: 6.4,
            badges: {
              en: ['2.2L Diesel Tax • Euro 5', 'Higher SUV Insurance Class'],
              de: ['Hohe 2.2-Dieselsteuer • Euro 5', 'Höhere SUV-Versicherung'],
              ru: ['Налог за 2,2 дизель • Euro 5', 'Повышенная страховка SUV']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Rear Dual-Pump Fluid (DPSF) + Diesel Fuel Filter', de: 'Hinterachsöl (DPSF) + Dieselfilter wechseln', ru: 'Масло DPSF в редукторе + топливный фильтр' }, cost: '€180–290' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Gearbox Fluid Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '140–195k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplungssatz', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,250–1,850', risk: { en: 'Slipping clutch under 350 Nm torque & idle knock', de: 'Rutschende Kupplung unter 350 Nm & ZMS-Klopfen', ru: 'Пробуксовка сцепления под тягой 350 Н·м и стук ДММ' }, damage: '€2,200–3,000' },
                { when: '140–210k km · 9–14 yrs', action: { en: 'DPF Soot Cleaning / Exhaust Manifold Crack Check (i-CTDi)', de: 'DPF-Reinigung / Abgaskrümmer-Prüfung (i-CTDi)', ru: 'Чистка DPF / проверка выпускного коллектора' }, cost: '€400–750', risk: { en: 'Exhaust smell in cabin or limp-home DPF blockage', de: 'Abgasgeruch im Innenraum oder DPF-Notlauf', ru: 'Запах выхлопа в салоне или аварийный режим DPF' }, damage: '€1,500–2,400' }
              ]
            },
            score: 6.5,
            badges: {
              en: ['Chain-Driven Block', 'High Clutch, DMF & DPF Costs'],
              de: ['Robuste Steuerkette', 'Teure ZMS-, Kupplungs- & DPF-Jobs'],
              ru: ['Надёжный цепной привод', 'Дорогие сцепление, маховик и DPF']
            }
          },
          depreciationResale: {
            score: 7.6,
            badges: {
              en: ['Popular Caravan Tow Car', 'Euro 5 City Discount'],
              de: ['Beliebtes Zugfahrzeug', 'Euro-5-Abschlag'],
              ru: ['Ценится для буксировки', 'Эко-класс Евро-5']
            }
          }
        }
      },
      {
        id: '2.2-ictdi',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.2L i-CTDi Diesel', de: '2.2L i-CTDi Diesel', ru: '2.2L i-CTDi Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '2,000 kg', sprint0100: '10.3 s', topSpeed: '187 km/h', peakTorque: '340 Nm @ 2,000',
          passingPunch: { en: 'Strong Low-End', de: 'Starker Antritt', ru: 'Хорошая тяга с низов' },
          realWorldFuel: '6.8–7.6 L/100 km', tankRange: '58 L · ~810 km', euroNorm: 'Euro 4 (DPF)',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierMod'
        },
        dossierGroup: 'diesel-awd-mt',
        buyerFitGroup: 'diesel-awd',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'crvEuro4CityNote',
            'crvNotSporty',
            'crvSubframeRustCheck'
          ]
        },
        isDefault: false,
        fuelType: 'diesel',
        hp: 140,
        shortTitle: 'CR-V (RE)',
        fullName: '2006-2012 Honda CR-V (RE)',
        engineBadge: '2.2L i-CTDi AWD • 140 HP',
        engineSubLabel: {
          en: 'N22A2 2.2L Turbo-Diesel (2007–2009) • 6-MT • 340 Nm • Real Time AWD',
          de: 'N22A2 2.2L Turbodiesel (2007–2009) • 6-Gang • 340 Nm • Allrad',
          ru: 'N22A2 2.2L Турбодизель (2007–2009) • 6-ст. МКПП • 340 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'EARLY DIESEL TOW',
          de: 'UR-DIESEL-ZUGTIER',
          ru: 'РАННИЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€31,500 New',
          de: '31.500 € Neu',
          ru: '€31 500 новый'
        },
        estUsedPrice: '€6,800',
        perkLabel: {
          en: '✦ 340 Nm Diesel Torque • 2,000 kg Towing • 7.4 L/100km Economy',
          de: '✦ 340 Nm Drehmoment • 2.000 kg Anhängelast • 7,4 L/100km Verbrauch',
          ru: '✦ Тяга 340 Н·м • Прицеп 2 000 кг • Расход 7,4 л/100 км'
        },
        remarkablePositives: {
          en: [
            '340 NM DIESEL TORQUE',
            '2,000 KG BRAKED TOWING',
            '7.4 L/100KM ECONOMY',
            'TOUGH N22A2 ALU DIESEL',
            '556L SQUARE SUV BOOT'
          ],
          de: [
            '340 NM DIESEL-DREHMOMENT',
            '2.000 KG ANHÄNGELAST',
            '7,4 L/100KM VERBRAUCH',
            'ROBUSTER N22A2 ALU-DIESEL',
            '556L KASTEN-KOFFERRAUM'
          ],
          ru: [
            'ДИЗЕЛЬНАЯ ТЯГА 340 Н·М',
            'БУКСИРОВКА ДО 2 000 КГ',
            'РАСХОД 7,4 Л/100 КМ',
            'КРЕПКИЙ ДИЗЕЛЬ N22A2',
            'КВАДРАТНЫЙ БАГАЖНИК 556 Л'
          ]
        },
        notableNegatives: {
          en: [
            'EXHAUST MANIFOLD CRACK RISK',
            'TIMING CHAIN & DMF WEAR',
            'HIGH 2.2L DIESEL ROAD TAX',
            'EURO 4 CITY ZONE LIMITS'
          ],
          de: [
            'RISIKO ABGASKRÜMMER-RISS',
            'STEUERKETTE & ZMS-VERSCHLEISS',
            'HOHE 2.2L DIESEL-STEUER',
            'EURO-4 UMWELTPLAKETTE'
          ],
          ru: [
            'ТРЕЩИНЫ ВЫПУСКНОГО КОЛЛЕКТОРА',
            'ИЗНОС ЦЕПИ ГРМ И МАХОВИКА',
            'ВЫСОКИЙ НАЛОГ НА 2.2 ДИЗЕЛЬ',
            'ЭКО-КЛАСС ЕВРО-4 (2007–2009)'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 7.9,
          spacePracticality: 9.1,
          performanceDynamics: 7.2,
          runningCostsTco: 7.2
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.2L i-CTDi Inline-4 Turbodiesel (N22A2)', de: '2.2L i-CTDi Reihenvierzylinder Turbodiesel (N22A2)', ru: '2.2L i-CTDi рядный 4-цил. турбодизель (N22A2)' } },
                  { k: 'displacement', v: '2,204 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '103 kW (140 HP)', de: '103 kW (140 PS)', ru: '103 кВт (140 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: { en: 'Tough earlier-generation Honda aluminium diesel with timing chain and strong 340 Nm pull.', de: 'Robuster Vorgänger-Alu-Diesel mit Steuerkette und kräftigen 340 Nm.', ru: 'Крепкий алюминиевый дизель ранней серии с цепью ГРМ и тягой 340 Н·м.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 8.3,
            badges: {
              en: ['Alu N22A2 2.2 Diesel', 'Check Manifold & Chain'],
              de: ['Alu-N22A2 2.2 Diesel', 'Krümmer & Kette prüfen'],
              ru: ['Алюминиевый N22A2', 'Проверить коллектор и цепь']
            },
            dossier: {
              en: {
                headline: 'Honda’s First In-House Diesel (N22A2): 300k+ km Tough with Two Known Watchouts',
                strengths: [
                  'Quiet, smooth 2.2L common-rail diesel with strong 340 Nm pull and no timing belt.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Cold-start ticking or exhaust smell in the cabin signals a cracked manifold (common on N22A2).',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Turn the cabin heater fan on while idling and smell for exhaust fumes (cracked exhaust manifold is common).',
                  'Listen at cold start for timing chain rattling inside the left side of the engine.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 0W-30 synthetic oil, fuel filter & change AWD rear diff fluid every 40–50k km / 3 yrs',
                    cost: '€210–330',
                    ifIgnored: 'Old oil speeds timing chain wear & neglected rear diff oil causes groaning turns',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change gearbox oil, check 6-yr aging rubber belt/hoses & sniff cabin for early manifold crack fumes',
                    cost: '€270–440',
                    ifIgnored: 'Heat-cycled exhaust manifold develops hairline crack leaking fumes into heater intake',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Repair or replace cracked cast exhaust manifold',
                    cost: '€400–700',
                    ifIgnored: 'Toxic exhaust fumes enter cabin & loss of turbo power',
                    damageCost: '€1,000–1,600'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace worn clutch kit & dual-mass flywheel',
                    cost: '€1,000–1,500',
                    ifIgnored: 'Slipping clutch & broken flywheel shrapnel jams starter (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,600'
                  },
                  {
                    tier: 'red',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace stretched main timing chain & oil pump chain',
                    cost: '€850–1,300',
                    ifIgnored: 'Snapped chain destroys cylinder head valves & pistons (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,800–4,200'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace copper injector seals & clean intake air flaps',
                    cost: '€300–550',
                    ifIgnored: 'Black tar locks injectors shut & hard cold starts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: 'Hondas erster Eigenbau-Diesel (N22A2): Sehr langlebig mit zwei bekannten Schwachstellen',
                strengths: [
                  'Kräftige 340 Nm, Steuerkette statt Zahnriemen, läuft bei Pflege über 300.000 km.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Abgasgeruch im Innenraum oder Tickern bei Kaltstart deutet auf einen gerissenen Krümmer hin.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Im Stand Gebläse einschalten und schnüffeln, ob Abgase im Innenraum riechen (gerissener Abgaskrümmer ist häufig).',
                  'Beim Kaltstart genau auf Steuerketten-Rasseln an der Motorseite hören.',
                  'Im 4. Gang Durchzug ohne Kupplungsrutschen testen und auf sauber arbeitenden Turbodruck achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 0W-30 Synthetiköl, Dieselfilter & alle 40–50 Tkm / 3 J. das Hinterachs-Allradöl',
                    cost: '210–330 €',
                    ifIgnored: 'Altöl verschleißt Steuerkette schneller & altes Allradöl rubbelt in engen Kurven',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebeöl wechseln, 6-J.-Gummischläuche prüfen & Abgaskrümmer auf feine Hitzerisse checken',
                    cost: '270–440 €',
                    ifIgnored: 'Durch Alter/Hitze gerissener Krümmer bläst Abgasgeruch in die Innenraumlüftung',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Gerissenen Abgaskrümmer schweißen oder ersetzen',
                    cost: '400–700 €',
                    ifIgnored: 'Giftige Abgase im Innenraum & verlorener Turboschub',
                    damageCost: '1.000–1.600 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad erneuern',
                    cost: '1.000–1.500 €',
                    ifIgnored: 'Rutschende Kupplung & Metallabrieb blockiert Anlasser (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.600 €'
                  },
                  {
                    tier: 'red',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Gelängte Steuerkette & Ölpumpenkette wechseln',
                    cost: '850–1.300 €',
                    ifIgnored: 'Kettenriss führt zum kapitalen Motorschaden (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.800–4.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Injektor-Kupferdichtungen tauschen & Ansaugklappen reinigen',
                    cost: '300–550 €',
                    ifIgnored: 'Verbackene Einspritzdüsen & schlechtes Anspringen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Первый собственный дизель Honda (N22A2): ресурс 300+ тыс. км с двумя нюансами',
                strengths: [
                  'Мощная тяга 340 Н·м с 2 000 об/мин и цепной привод ГРМ.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Запах выхлопа в салоне и цокот на холодную— частая болезнь N22A2.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Включить печку на месте и принюхаться— запах выхлопа в салоне указывает на трещину выпускного коллектора.',
                  'Послушать холодный пуск со стороны цепи двигателя на предмет металлического звона.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год масло 0W-30, топливный фильтр и замену жидкости заднего редуктора раз в 40–50 тыс. / 3 года',
                    cost: '€210–330',
                    ifIgnored: 'Старое масло ускоряет износ цепи, а грязная жидкость редуктора гудит в поворотах',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в 6-МКПП, проверить стареющие шланги/ремень (6 лет) и выпускной коллектор на трещины',
                    cost: '€270–440',
                    ifIgnored: 'От циклов нагрева и возраста трескается коллектор, и выхлоп тянет в салон',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заварить или заменить треснувший выпускной коллектор',
                    cost: '€400–700',
                    ifIgnored: 'Угарный газ в салоне и падение тяги турбины',
                    damageCost: '€1 000–1 600'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить сцепление вместе с двухмассовым маховиком',
                    cost: '€1 000–1 500',
                    ifIgnored: 'Пробуксовка сцепления и заклинивание стартера пылью (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 600'
                  },
                  {
                    tier: 'red',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить растянутую основную цепь и цепь маслонасоса',
                    cost: '€850–1 300',
                    ifIgnored: 'Обрыв цепи с полной поломкой головки блока (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 800–4 200'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить медные шайбы форсунок и почистить впуск',
                    cost: '€300–550',
                    ifIgnored: 'Прикипание форсунок в головке и тяжёлый пуск (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT + Dual-Pump AWD', 'Watch 340 Nm Clutch & DMF'],
              de: ['6-Gang + Dual-Pump-Allrad', 'Kupplung & ZMS beachten'],
              ru: ['6-МКПП + привод AWD', 'Контроль сцепления и маховика']
            }
          },
          buildQualityRust: {
            score: 7.6,
            badges: {
              en: ['Tough SUV Control Arms', 'Check Rear Subframe & Arches'],
              de: ['Robuste SUV-Querlenker', 'Achsträger & Radlaufrost'],
              ru: ['Прочные рычаги кроссовера', 'Контроль ржавчины подрамника']
            }
          },
          electronicsReliability: {
            score: 8.8,
            badges: {
              en: ['Simple Pre-2010 Electrics', 'Fewer Exhaust Sensors'],
              de: ['Einfache Vorfacelift-Technik', 'Weniger Abgassensoren'],
              ru: ['Простая электрика до 2010 г.', 'Минимум датчиков выхлопа']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Pre-FL Comfort Springing', 'More Road Noise Above 130 km/h'],
              de: ['Komfort-SUV-Federung', 'Mehr Windgeräusch ab 130 km/h'],
              ru: ['Комфортный ход кроссовера', 'Шум ветра выше 130 км/ч']
            }
          },
          interiorQualityFeatures: {
            score: 6.6,
            badges: {
              en: ['Ergonomic Dash Shifter', 'Simpler Pre-2010 Plastics'],
              de: ['Ergonomischer Schalthebel', 'Härteres Vorfacelift-Plastik'],
              ru: ['Удобный рычаг на панели', 'Жёсткий пластик до рестайла']
            }
          },
          visibilityManeuverability: {
            score: 8.3,
            badges: {
              en: ['Commanding High SUV View', '11.4 m Turn • Oversized Mirrors'],
              de: ['Erhöhte SUV-Rundumsicht', '11,4 m Wendekreis • Große Spiegel'],
              ru: ['Высокая командирская обзорность', 'Разворот 11,4 м • Крупные зеркала']
            }
          },
          safetyProtection: {
            score: 6.0,
            badges: {
              en: ['Euro NCAP 4★ (2007)', '6 Airbags + Trailer Assist'],
              de: ['Euro NCAP 4★ (2007)', '6 Airbags + Gespann-ESP'],
              ru: ['Euro NCAP 4★ (2007)', '6 подушек + ESP прицепа']
            }
          },
          passengerSpaceErgonomics: {
            score: 9.3,
            badges: {
              en: ['Flat Floor + Sliding Rear Bench', 'Easy Upright SUV Door Entry'],
              de: ['Ebener Boden + verschiebbarer Fond', 'Bequemer hoher Einstieg'],
              ru: ['Ровный пол + сдвижной диван', 'Лёгкая высокая посадка']
            }
          },
          interiorBootSpace: {
            score: 9.2,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear Bench'],
              de: ['556L Kofferraum (1.532L Max)', 'Verschiebbare Rückbank'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной задний диван']
            }
          },
          payloadTowing: {
            score: 9.2,
            badges: {
              en: ['560 kg Payload', '2,000 kg Braked Tow'],
              de: ['560 kg Zuladung', '2.000 kg Anhängelast'],
              ru: ['Нагрузка 560 кг', 'Прицеп до 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 10.3 s', '187 km/h Top Speed'],
              de: ['0–100 km/h: 10,3 s', '187 km/h Spitze'],
              ru: ['0–100 км/ч: 10,3 с', 'Макс. 187 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.0,
            badges: {
              en: ['340 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['340 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['340 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Real Time AWD Winter Traction', 'Comfortable Body Roll In Bends'],
              de: ['Allrad-Traktion bei Schnee', 'Deutliche SUV-Seitenneigung'],
              ru: ['Полный привод зимой', 'Заметные крены в поворотах']
            }
          },
          brakingPerformance: {
            score: 6.0,
            badges: {
              en: ['100–0 km/h: 37.2 m', 'SUV Mass • Soft Initial Bite'],
              de: ['100–0 km/h: 37,2 m', 'SUV-Gewicht • Weiches Ansprechen'],
              ru: ['100–0 км/ч: 37,2 м', 'Масса кроссовера • Мягкий хват']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['7.4 L/100km', '173 g/km CO2 (Euro 4)'],
              de: ['7,4 L/100km', '173 g/km CO2 (Euro 4)'],
              ru: ['7,4 л/100 км', '173 г/км CO2 (Евро-4)']
            }
          },
          taxInsuranceNorm: {
            score: 5.6,
            badges: {
              en: ['High 2.2L Euro 4 Diesel Tax', 'Urban Euro 4 City Restrictions'],
              de: ['Hohe 2.2-Euro-4-Steuer', 'Fahrverbot-Risiko Innenstadt'],
              ru: ['Высокий налог Euro 4', 'Ограничения въезда в города']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Rear Dual-Pump Fluid (DPSF) + Diesel Fuel Filter', de: 'Hinterachsöl (DPSF) + Dieselfilter wechseln', ru: 'Масло DPSF в редукторе + топливный фильтр' }, cost: '€180–290' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Gearbox Fluid Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '140–195k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplungssatz', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,250–1,850', risk: { en: 'Slipping clutch under 350 Nm torque & idle knock', de: 'Rutschende Kupplung unter 350 Nm & ZMS-Klopfen', ru: 'Пробуксовка сцепления под тягой 350 Н·м и стук ДММ' }, damage: '€2,200–3,000' },
                { when: '140–210k km · 9–14 yrs', action: { en: 'DPF Soot Cleaning / Exhaust Manifold Crack Check (i-CTDi)', de: 'DPF-Reinigung / Abgaskrümmer-Prüfung (i-CTDi)', ru: 'Чистка DPF / проверка выпускного коллектора' }, cost: '€400–750', risk: { en: 'Exhaust smell in cabin or limp-home DPF blockage', de: 'Abgasgeruch im Innenraum oder DPF-Notlauf', ru: 'Запах выхлопа в салоне или аварийный режим DPF' }, damage: '€1,500–2,400' }
              ]
            },
            score: 6.0,
            badges: {
              en: ['Proven Chain Block', 'Watch Manifold, Clutch & DMF'],
              de: ['Bewährte Steuerkette', 'Krümmer, Kupplung & ZMS teuer'],
              ru: ['Проверенная цепь ГРМ', 'Дорогой коллектор и маховик']
            }
          },
          depreciationResale: {
            score: 7.2,
            badges: {
              en: ['Affordable 4WD Tow SUV', 'Euro 4 Age Discount'],
              de: ['Günstiges 4WD-Zugfahrzeug', 'Euro-4-Abschlag'],
              ru: ['Доступный дизель 4WD', 'Возраст Евро-4']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Polished Metal Metallic', code: 'NH-737M', hex: '#5d646b', glow: 'rgba(93, 100, 107, 0.18)' },
    { name: 'Alabaster Silver', code: 'NH-700M', hex: '#b8c0c8', glow: 'rgba(184, 192, 200, 0.16)' },
    { name: 'Crystal Black Pearl', code: 'NH-731P', hex: '#171a1f', glow: 'rgba(65, 76, 92, 0.18)' },
    { name: 'Taffeta White', code: 'NH-578', hex: '#f0f2f5', glow: 'rgba(240, 242, 245, 0.16)' },
    { name: 'Glacier Blue', code: 'B-538M', hex: '#426a8f', glow: 'rgba(66, 106, 143, 0.2)' },
    { name: 'Tango Red Pearl', code: 'R-525P', hex: '#942129', glow: 'rgba(148, 33, 41, 0.2)' },
    { name: 'Sparkle Grey Pearl', code: 'NH-684P', hex: '#484d52', glow: 'rgba(72, 77, 82, 0.18)' },
    { name: 'Deep Bronze Pearl', code: 'YR-571P', hex: '#4c3e35', glow: 'rgba(76, 62, 53, 0.18)' },
    { name: 'Green Tea Metallic', code: 'G-526M', hex: '#6b7968', glow: 'rgba(107, 121, 104, 0.18)' }
  ],
  engineDates: {
    '2.0-ivtec': '01/2007–10/2012',
    '2.4-ivtec': '09/2009–10/2012',
    '2.2-idtec': '01/2010–10/2012'
  },
  inDepth: {
    defaultEngineId: '2.0-ivtec',
    defaultGroupKey: 'petrol-na',
    engineCosts: {
      '2.0-ivtec': { group: 'petrol-na',    avgFuelL100: 8.6,  fuelPrice: 1.75, tax: 184, ins: 680, service: 290 },
      '2.4-ivtec': { group: 'petrol-na',    avgFuelL100: 10.0, fuelPrice: 1.75, tax: 236, ins: 720, service: 310 },
      '2.2-idtec': { group: 'diesel-idtec', avgFuelL100: 7.0,  fuelPrice: 1.65, tax: 325, ins: 760, service: 390 },
      '2.2-ictdi': { group: 'diesel-ictdi', avgFuelL100: 7.2,  fuelPrice: 1.65, tax: 340, ins: 730, service: 380 }
    },
    groups: {
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 15% (Age Class)', note: 'Bulletproof R20/K24 petrol engines; inspect rear wheel arches & subframe for winter rust' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Zero turbo or DPF hardware; rare breakdowns usually stem from aging A/C clutch or 12V battery' },
            { source: 'WhatCar? Survey', value: '95.6% Reliability', note: 'One of the lowest unplanned repair rates among 2007–2012 family SUVs' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 15 % (Altersklasse)', note: 'Unverwüstliche R20/K24-Saugmotoren; bei älteren Jahrgängen hintere Radläufe & Achsträger auf Rost prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Kein Turbo und kein DPF — Ausfälle betreffen meist nur eine alte 12V-Batterie oder die Klimakupplung' },
            { source: 'WhatCar? Umfrage', value: '95,6 % Zuverlässigkeit', note: 'Gehört zu den wartungsärmsten Familien-SUV der Baujahre 2007–2012' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-15% в возрасте', note: 'Живучие атмосферники R20/K24; главное внимание — коррозии задних арок и подрамника' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Нет турбины и DPF; редкие отказы связаны со старой АКБ или муфтой компрессора кондиционера' },
            { source: 'Рейтинг WhatCar?', value: '95,6% надёжности', note: 'Один из самых беспроблемных семейных кроссоверов 2007–2012 годов' }
          ]
        },
        extendedChecks: {
          en: [
            'Do tight slow-speed figure-eights in a car park — groaning or binding from the rear axle signals overdue Dual-Pump AWD fluid.',
            'Inspect rear wheel arch lips, tailgate bottom edge, and rear subframe mounts closely for salt-belt corrosion.',
            'Verify valve-clearance adjustment records (~100,000 km) and check A/C compressor clutch engagement when warm.',
            'On 5-speed automatics, confirm smooth upshifts and periodic Honda ATF-DW1 fluid changes every 60,000 km.'
          ],
          de: [
            'Enge Kreise bei Schritttempo fahren — Brummen oder Verspannen von hinten deutet auf überfälliges Dual-Pump-AWD-Öl hin.',
            'Hintere Radlaufkanten, Heckklappen-Unterkante und Hinterachsträger gründlich auf Winter-Rost untersuchen.',
            'Ventilspiel-Einstellung (~100.000 km) im Serviceheft prüfen und sauberes Einkuppeln der Klimaanlage im Warmzustand testen.',
            'Bei der 5-Stufen-Automatik weiche Schaltvorgänge und regelmäßige ATF-Wechsel alle 60.000 km verifizieren.'
          ],
          ru: [
            'Сделать пару тугих кругов на парковке — гул или вибрация сзади говорят о просроченном масле в заднем редукторе Dual-Pump.',
            'Тщательно осмотреть кромки задних арок, низ пятой двери и задний подрамник на наличие ржавчины.',
            'Уточнить историю регулировки клапанов (~100 тыс. км) и проверить включение муфты кондиционера на горячую.',
            'На 5-ст. АКПП убедиться в мягких переключениях и замене оригинальной жидкости ATF каждые 60 тыс. км.'
          ]
        },
        savingsNote: {
          en: 'Higher ~8.6–10.0 L/100 km fuel burn than diesel, yet zero turbo, DPF, injector, or DMF bills often save €500–€900/yr in surprise repairs.',
          de: 'Höherer Verbrauch (~8,6–10,0 L/100 km) als der Diesel, aber fehlende Turbo-, DPF-, Injektor- und ZMS-Risiken sparen oft 500–900 €/Jahr an Reparaturen.',
          ru: 'Расход выше дизеля (~8,6–10,0 л/100 км), но отсутствие турбины, DPF, форсунок и двухмассового маховика экономит €500–900 в год на ремонтах.'
        },
        market: {
          supplyDemand: {
            en: 'Very strong private-buyer demand for clean 2.0 i-VTEC manuals and rare 2.4 i-VTEC automatics; good examples sell quickly.',
            de: 'Sehr hohe Privatnachfrage nach gepflegten 2.0 i-VTEC Schaltern und seltenen 2.4 i-VTEC Automatik-Modellen.',
            ru: 'Высокий спрос на ухоженные бензиновые 2.0 i-VTEC и редкие 2.4 i-VTEC с классическим автоматом — хорошие машины уходят быстро.'
          },
          sweetSpot: {
            en: '2010–2012 Facelift 2.0 i-VTEC (Elegance / Lifestyle) under 150,000 km with rust-free arches (€9,200–€11,800).',
            de: 'Facelift 2010–2012 2.0 i-VTEC (Elegance / Lifestyle) unter 150.000 km mit rostfreien Radläufen (9.200–11.800 €).',
            ru: 'Рестайлинг 2010–2012 2.0 i-VTEC (Elegance / Lifestyle) с пробегом до 150 тыс. км и целыми арками (€9 200–11 800).'
          },
          outlook3to5yr: {
            en: 'Very firm depreciation floor (~€6,800–€8,200 in 3–5 yrs); urban petrol compliance keeps CR-V III petrols ahead of diesels.',
            de: 'Extrem stabiler Restwert (ca. 6.800–8.200 € in 3–5 Jahren) — umweltzonentaugliche Benziner bleiben deutlich teurer als Diesel.',
            ru: 'Очень медленное снижение цены (€6 800–8 200 через 3–5 лет): надёжные бензиновые CR-V стабильно дороже дизельных.'
          }
        },
        watchoutExtra: {
          en: [
            'A/C compressor magnetic clutch gap wears around 120,000–160,000 km (causing warm air in summer traffic; shim or clutch fix ~€250–€450).',
            '2.0 i-VTEC feels modest on steep motorway climbs with 5 passengers and luggage — test 2.4 i-VTEC if you tow or cruise fast.'
          ],
          de: [
            'Magnetkupplung des Klimakompressors verschleißt oft bei 120.000–160.000 km (Klima fällt im Stau aus; Reparatur ca. 250–450 €).',
            'Der 2.0 i-VTEC wirkt voll beladen an Autobahnsteigungen etwas zäh — für Anhänger oder flottes Reisetempo lieber 2.4 i-VTEC testen.'
          ],
          ru: [
            'К 120–160 тыс. км изнашивается электромагнитная муфта компрессора кондиционера (в пробках дует тёплым; ремонт €250–450).',
            'Мотору 2.0 i-VTEC с полной загрузкой не хватает тяги на затяжных подъёмах — для трассы и прицепа лучше смотреть 2.4 i-VTEC.'
          ]
        }
      },
      'diesel-idtec': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid (Facelift Euro 5)', note: '2010+ N22B3 solves earlier cracked exhaust manifold issues; check DPF & suspension bushes' },
            { source: 'ADAC Pannenstatistik', value: 'Good Long-Trip Record', note: 'Dependable highway cruiser; short city commutes accelerate DPF regeneration issues' },
            { source: 'WhatCar? Survey', value: '91.4% Reliability', note: 'Strong engine block, pulled slightly down by DPF pressure sensors & dual-mass flywheel wear' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide (Facelift Euro 5)', note: 'Der N22B3 ab 2010 behebt frühe Krümmer-Risse; DPF und Fahrwerksbuchsen im Blick behalten' },
            { source: 'ADAC Pannenstatistik', value: 'Gut auf Langstrecke', note: 'Stark auf der Autobahn; häufige Kurzstrecken provozieren DPF-Regenerationen' },
            { source: 'WhatCar? Umfrage', value: '91,4 % Zuverlässigkeit', note: 'Robuster Block; leichte Abzüge durch DPF-Differenzdrucksensoren und ZMS-Verschleiß' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Крепкий (рестайлинг Euro 5)', note: 'В моторе N22B3 (с 2010 г.) исправлена проблема трещин коллектора; следите за DPF и подвеской' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен на трассе', note: 'Отличный вариант для дальних поездок; частый город быстро забивает сажевый фильтр' },
            { source: 'Рейтинг WhatCar?', value: '91,4% надёжности', note: 'Выносливый дизель; основные замечания — датчики DPF и ресурс двухмассового маховика' }
          ]
        },
        extendedChecks: {
          en: [
            'Check DPF differential pressure history and inspect engine oil dipstick for rising level (fuel dilution from aborted regens).',
            'Listen at idle with clutch half-depressed for dual-mass flywheel knock, or verify 5-speed automatic ATF history.',
            'Test Dual-Pump rear AWD engagement on tight low-speed turns for chatter or whining.',
            'Inspect rear subframe, brake lines, and wheel-arch seams for corrosion.'
          ],
          de: [
            'DPF-Differenzdruck prüfen und Ölmessstab auf Ölvermehrung durch abgebrochene Regenerationen kontrollieren.',
            'Im Leerlauf bei halb getretener Kupplung auf ZMS-Klappern achten bzw. bei der 5-AT den ATF-Wechsel prüfen.',
            'Dual-Pump-Allradantrieb bei langsamer enger Kurvenfahrt auf Verspannen oder Lagergeräusche testen.',
            'Hinterachsträger, Bremsleitungen und Radlaufkanten genau auf Rost untersuchen.'
          ],
          ru: [
            'Проверить показания датчика DPF и уровень масла на щупе (разжижение соляркой при частых прерванных прожигах).',
            'На МКПП послушать двухмассовый маховик при выжиме сцепления; на 5-ст. АКПП проверить историю замены ATF.',
            'Проверить работу заднего привода Dual-Pump в тугом повороте на отсутствие гула и рывков.',
            'Осмотреть задний подрамник, тормозные магистрали и арки на предмет коррозии.'
          ]
        },
        savingsNote: {
          en: 'Combines ~7.0 L/100 km diesel torque and 2,000 kg towing capability; pays off mainly above 18,000 km/yr on highways.',
          de: 'Verbindet rund 7,0 L/100 km Verbrauch mit 2.000 kg Anhängelast — lohnt sich vor allem für Vielfahrer ab 18.000 km/Jahr.',
          ru: 'Расход около 7,0 л/100 км и допуск прицепа до 2 000 кг окупаются прежде всего при трассовых пробегах от 18 тыс. км/год.'
        },
        market: {
          supplyDemand: {
            en: 'Healthy supply of 2010–2012 Euro 5 diesels; lower city demand keeps prices €1,000–€1,500 below equivalent 2.0 petrols.',
            de: 'Gutes Angebot an Euro-5-Dieseln (2010–2012); geringere Stadtnachfrage hält den Preis 1.000–1.500 € unter dem 2.0 Benziner.',
            ru: 'Предложение Euro 5 дизелей 2010–2012 гг. хорошее; меньший спрос в городах делает их на €1 000–1 500 дешевле бензиновых.'
          },
          sweetSpot: {
            en: '2010–2012 2.2 i-DTEC (Elegance / Executive, 6-MT or 5-AT) with motorway service history (€8,000–€10,200).',
            de: '2010–2012 2.2 i-DTEC (Elegance / Executive, 6-Gang oder 5-AT) mit Langstrecken-Nachweisen (8.000–10.200 €).',
            ru: '2010–2012 2.2 i-DTEC (Elegance / Executive, МКПП или 5-АКПП) с трассовой историей обслуживания (€8 000–10 200).'
          },
          outlook3to5yr: {
            en: 'Settles gently toward €4,800–€6,200 over 3–5 yrs; 5-speed automatic i-DTEC models retain the strongest niche towing demand.',
            de: 'Pendelt sich in 3–5 Jahren bei 4.800–6.200 € ein; vor allem 5-Gang-Automatik-Modelle bleiben als Zugwagen gesucht.',
            ru: 'Плавно снизится к €4 800–6 200 за 3–5 лет; версии с 5-АКПП дольше держат спрос среди тех, кто буксирует прицепы.'
          }
        },
        watchoutExtra: {
          en: [
            'Short urban trips clog the Euro 5 DPF and dilute engine oil with diesel; high-mileage cars also need differential pressure sensor checks.',
            '350 Nm torque wears the clutch and dual-mass flywheel around 160,000–200,000 km on manual tow cars (~€1,100–€1,600).'
          ],
          de: [
            'Kurzstrecken setzen dem Euro-5-DPF zu und verdünnen das Motoröl; ab 140.000 km fallen öfter DPF-Drucksensoren aus.',
            '350 Nm Drehmoment belasten bei Handschaltern ab 160.000–200.000 km Kupplung und ZMS (ca. 1.100–1.600 €).'
          ],
          ru: [
            'Короткие поездки забивают фильтр DPF и ведут к попаданию топлива в масло; к 140 тыс. км часто устают датчики перепада давления.',
            'Крутящий момент 350 Н·м изнашивает сцепление и двухмассовый маховик к 160–200 тыс. км (€1 100–1 600).'
          ]
        }
      },
      'diesel-ictdi': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Average (Pre-2010 Age)', note: 'Tough N22A2 chain block, but aging 2007–2009 chassis & emissions parts lower pass rates' },
            { source: 'ADAC Pannenstatistik', value: 'Dependable Highway Unit', note: '300k+ km capable engine; main risks are cracked exhaust manifold & early closed-DPF clogging' },
            { source: 'WhatCar? Survey', value: '89.5% Reliability', note: 'Older Euro 4 hardware shows higher wear on injectors, flywheel & manifold than facelift i-DTEC' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Durchschnitt (Alter 2007–2009)', note: 'Haltbarer N22A2-Kettenmotor, doch Alter an Fahrwerk, Rost und Abgassystem drückt die Quote' },
            { source: 'ADAC Pannenstatistik', value: 'Solider Dauerläufer', note: '300.000+ km möglich; Hauptthemen sind gerissene Abgaskrümmer & früher DPF bei Kurzstrecke' },
            { source: 'WhatCar? Umfrage', value: '89,5 % Zuverlässigkeit', note: 'Ältere Euro-4-Technik zeigt öfter Verschleiß an Injektoren, ZMS und Krümmer als der Facelift-i-DTEC' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Средне (возраст 2007–2009)', note: 'Крепкий цепной блок N22A2, но возрастная коррозия и выхлоп снижают рейтинг осмотров' },
            { source: 'ADAC Pannenstatistik', value: 'Выносливый на трассе', note: 'Ходит 300+ тыс. км; главные риски — трещина выпускного коллектора и ранний DPF' },
            { source: 'Рейтинг WhatCar?', value: '89,5% надёжности', note: 'Дорестайлинговая техника Euro 4 чаще требует внимания к форсункам, маховику и коллектору' }
          ]
        },
        extendedChecks: {
          en: [
            'Sniff for exhaust fumes inside the cabin at idle — early cast-iron exhaust manifolds commonly crack (updated steel manifold fix).',
            'Check Bosch injector leak-off smoothness and verify timing chain quietness on cold startup.',
            'Test clutch bite and dual-mass flywheel rattle, plus rear AWD fluid smoothness on full-lock turns.',
            'Inspect rear subframe, sills, and brake pipes thoroughly on 2007–2009 salt-belt examples.'
          ],
          de: [
            'Im Leerlauf im Innenraum auf Abgasgeruch achten — der frühe Guss-Abgaskrümmer reißt häufig (Update auf Stahlkrümmer prüfen).',
            'Injektor-Rücklauf und Kaltstart-Kettengeräusche prüfen sowie gleichmäßigen Leerlauf kontrollieren.',
            'Kupplung/ZMS-Klappern und Dual-Pump-Allrad bei engem Lenkeinschlag genau testen.',
            'Hinterachsträger, Schweller und Bremsleitungen bei 2007–2009er Fahrzeugen intensiv auf Rost prüfen.'
          ],
          ru: [
            'Проверить отсутствие запаха выхлопа в салоне на холостых — ранний чугунный коллектор часто трескается.',
            'Оценить ровность работы форсунок Bosch и тишину цепи ГРМ при холодном запуске.',
            'Проверить сцепление, двухмассовый маховик и отсутствие хруста/гула заднего редуктора в повороте.',
            'Тщательно осмотреть задний подрамник, пороги и тормозные трубки на машинах 2007–2009 гг.'
          ]
        },
        savingsNote: {
          en: 'Low €6,000–€7,500 buy-in and ~7.2 L/100 km fuel use look cheap, but Euro 4 city restrictions and aging DPF/manifold/clutch repairs shrink the margin.',
          de: 'Günstiger Einstieg (6.000–7.500 €) und ca. 7,2 L/100 km wirken attraktiv, doch Euro-4-Hürden und fällige Krümmer-/DPF-/ZMS-Reparaturen relativieren die Ersparnis.',
          ru: 'Низкая цена входа (€6 000–7 500) и ~7,2 л/100 км привлекательны, но класс Euro 4 и возрастные траты на коллектор, DPF и маховик быстро съедают выгоду.'
        },
        market: {
          supplyDemand: {
            en: 'Budget-tier supply with slower Euro 4 demand; buyers pay extra for the cleaner 2010+ 2.2 i-DTEC facelift.',
            de: 'Budget-Angebot mit gebremster Euro-4-Nachfrage; viele Käufer greifen direkt zum saubereren 2010+ 2.2 i-DTEC.',
            ru: 'Бюджетный сегмент с невысоким спросом из-за Euro 4; покупатели чаще доплачивают за рестайлинговый 2.2 i-DTEC.'
          },
          sweetSpot: {
            en: '2008–2009 2.2 i-CTDi with already-replaced exhaust manifold & clutch/DMF receipts (€5,800–€7,400).',
            de: '2008–2009 2.2 i-CTDi mit bereits erneuertem Abgaskrümmer sowie Kupplungs-/ZMS-Belegen (5.800–7.400 €).',
            ru: '2008–2009 2.2 i-CTDi с уже заменённым выпускным коллектором и чеками на сцепление/маховик (€5 800–7 400).'
          },
          outlook3to5yr: {
            en: 'Approaching a €3,200–€4,500 utility floor; value depends mainly on rust-free MOT/TÜV condition.',
            de: 'Nähert sich einem Nutzwert-Boden von 3.200–4.500 € — der Restwert hängt fast allein vom rostfreien TÜV-Zustand ab.',
            ru: 'Приближается к нижней планке практичных авто (€3 200–4 500); цена зависит прежде всего от живого кузова.'
          }
        },
        watchoutExtra: {
          en: [
            'Cracked exhaust manifold fumes enter the cabin via the HVAC intake (replacement ~€600–€950 if not already upgraded).',
            'Closed Euro 4 DPF units on 2007–2009 cars clog quickly in urban use, and early 0W-30 oil neglect wears timing chains.'
          ],
          de: [
            'Gerissene Abgaskrümmer leiten Abgase in die Lüftung (Tausch ca. 600–950 €, falls nicht bereits auf das verbesserte Teil umgerüstet).',
            'Nachgerüstete/geschlossene Euro-4-DPFs verstopfen im Stadtverkehr rasch; falsches Öl schadet der Steuerkette.'
          ],
          ru: [
            'Трещина выпускного коллектора даёт запах выхлопа в печку (замена €600–950, если узел ещё не меняли на усиленный).',
            'Закрытый сажевый фильтр Euro 4 быстро забивается в городе, а экономия на масле 0W-30 ускоряет износ цепи ГРМ.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (CR-V III / RE)', de: 'EU / DE Ausstattungslinien (CR-V III / RE)', ru: 'Европейские комплектации (CR-V III / RE)' },
      sectionHint: { en: 'Elegance hits the used-market sweet spot; Executive adds leather, xenon & panoramic roof', de: 'Elegance trifft den Preis-Leistungs-Punkt; Executive ergänzt Leder, Xenon & Panoramadach', ru: 'Elegance — лучший баланс цены; Executive добавляет кожу, ксенон и панорамную крышу' },
      faceliftTitle: { en: '2010 Facelift & i-DTEC Upgrades', de: 'Facelift 2010 & i-DTEC-Update', ru: 'Рестайлинг 2010 и переход на i-DTEC' },
      faceliftKicker: { en: '2010+ Refresh', de: 'Facelift 2010+', ru: 'Рестайлинг 2010+' },
      trims: [
        {
          id: 'comfort',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Comfort', de: 'Comfort', ru: 'Comfort' },
          delta: { en: '-€800 – €1,200', de: '-800 – 1.200 €', ru: '-€800 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Entry CR-V trim with practical sliding rear bench and dual-deck boot shelf, manual A/C, and cloth seats.',
            de: 'Solide Basis mit verschiebbarer Rückbank und doppeltem Ladeboden, aber manueller Klima und Stoff.',
            ru: 'Базовая версия со сдвижным задним диваном и двухъярусной полкой багажника, но с простым климатом.'
          },
          highlights: {
            en: ['Sliding 60/40 rear bench & dual-deck shelf', '17" alloys & manual A/C', 'VSA + trailer stability assist'],
            de: ['Verschiebbare Rückbank & doppelter Boden', '17"-Alus & manuelle Klimaanlage', 'VSA + Gespannstabilisierung'],
            ru: ['Сдвижной диван и полка багажника', 'Диски 17" и кондиционер', 'Система VSA и стабилизация прицепа']
          }
        },
        {
          id: 'elegance',
          tierClass: 'tier-3',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Elegance', de: 'Elegance', ru: 'Elegance' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'Most common European sweet spot — adds dual-zone climate, parking sensors, cruise control, and rain/light sensors.',
            de: 'Häufigster EU-Sweet-Spot mit 2-Zonen-Klima, Parksensoren, Tempomat und Licht-/Regensensor.',
            ru: 'Самый популярный оптимум: 2-зонный климат, парктроники, круиз-контроль и датчики света/дождя.'
          },
          highlights: {
            en: ['Dual-zone auto climate & cruise control', 'Front & rear parking sensors', 'Auto wipers, auto lights & folding mirrors'],
            de: ['2-Zonen-Klimaautomatik & Tempomat', 'Parksensoren vorn & hinten', 'Licht-/Regensensor & Anklappspiegel'],
            ru: ['2-зонный климат и круиз-контроль', 'Парктроники спереди и сзади', 'Датчики света/дождя и складывание зеркал']
          }
        },
        {
          id: 'lifestyle',
          tierClass: 'tier-4',
          tier: { en: 'Plus', de: 'Lifestyle', ru: 'Плюс' },
          name: { en: 'Lifestyle', de: 'Lifestyle', ru: 'Lifestyle' },
          delta: { en: '+€500 – €900', de: '+500 – 900 €', ru: '+€500 – €900' },
          isSweetSpot: false,
          summary: {
            en: 'Facelift-era upgrade adding half-leather/Alcantara seats, HID Xenon headlights, heated seats, and subwoofer audio.',
            de: 'Facelift-Linie mit Alcantara/Teilleder, Xenon-Scheinwerfern, Sitzheizung und Subwoofer-Audiosystem.',
            ru: 'Рестайлинговая комплектация с алькантарой, ксеноном, подогревом сидений и сабвуфером.'
          },
          highlights: {
            en: ['Half-leather / Alcantara & heated seats', 'HID Xenon headlights & privacy glass', '18" alloys & subwoofer audio upgrade'],
            de: ['Alcantara/Teilleder & Sitzheizung', 'Xenon-Licht & Privacy-Verglasung', '18"-Alus & Subwoofer-Soundsystem'],
            ru: ['Салон кожа/алькантара и подогрев', 'Ксеноновые фары и тонировка', 'Диски 18" и аудио с сабвуфером']
          }
        },
        {
          id: 'executive',
          tierClass: 'tier-6',
          tier: { en: 'Premium', de: 'Executive', ru: 'Бизнес' },
          name: { en: 'Executive', de: 'Executive', ru: 'Executive' },
          delta: { en: '+€900 – €1,500', de: '+900 – 1.500 €', ru: '+€900 – €1 500' },
          isSweetSpot: false,
          summary: {
            en: 'Top family cruiser with full leather upholstery, electric driver seat, panoramic glass roof, and Xenon.',
            de: 'Gehobenes Familienmodell mit Vollleder, elektrischem Fahrersitz, Panorama-Glasdach und Xenon.',
            ru: 'Богатая комплектация: кожаный салон, электропривод кресла водителя, панорамная крыша и ксенон.'
          },
          highlights: {
            en: ['Full leather & 8-way power driver seat', 'Panoramic glass roof & heated front seats', 'HID Xenon headlights & 18" alloys'],
            de: ['Vollleder & elektrischer Fahrersitz', 'Panorama-Glasdach & Sitzheizung', 'Xenon-Licht & 18"-Alufelgen'],
            ru: ['Полная кожа и электропривод кресла', 'Панорамная крыша и подогрев', 'Ксенон и диски 18"']
          }
        },
        {
          id: 'executive-plus',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Topmodell', ru: 'Флагман' },
          name: { en: 'Executive Plus', de: 'Executive Plus', ru: 'Executive Plus' },
          delta: { en: '+€1,200 – €1,900', de: '+1.200 – 1.900 €', ru: '+€1 200 – €1 900' },
          isSweetSpot: false,
          summary: {
            en: 'Full-loaded flagship bundling DVD navigation + rear camera, ACC adaptive cruise, and CMBS collision braking.',
            de: 'Vollausstattung mit DVD-Navi + Rückfahrkamera, ACC-Abstandstempomat und CMBS-Notbremsassistent.',
            ru: 'Максимальный флагман с навигацией + камерой, адаптивным круизом ACC и системой торможения CMBS.'
          },
          highlights: {
            en: ['Integrated navigation + rear-view camera', 'ACC adaptive cruise & CMBS collision mitigation', 'Full leather, panoramic roof & Xenon'],
            de: ['Werks-Navigation + Rückfahrkamera', 'ACC-Abstandstempomat & Notbremsassistent CMBS', 'Vollleder, Panoramadach & Xenon'],
            ru: ['Штатная навигация + камера заднего вида', 'Адаптивный круиз ACC и система CMBS', 'Кожа, панорамная крыша и ксенон']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Dual-Zone Auto Climate Control', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Front & Rear Parking Sensors', de: 'Parksensoren vorn & hinten', ru: 'Парктроники спереди и сзади' }, vals: ['no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'HID Xenon Headlights', de: 'Xenon-Scheinwerfer', ru: 'Ксеноновые фары' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Half-Leather/Alcantara or Full Leather', de: 'Alcantara/Teilleder bzw. Vollleder', ru: 'Алькантара / полная кожа' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Panoramic Glass Roof', de: 'Panorama-Glasdach', ru: 'Панорамная стеклянная крыша' }, vals: ['no', 'no', 'no', 'std', 'std'] },
        { feature: { en: 'Navigation + Rear-View Camera & ACC', de: 'Navigation + Rückfahrkamera & ACC', ru: 'Навигация + камера и ACC' }, vals: ['no', 'no', 'opt', 'opt', 'std'] },
        { feature: { en: 'Dual-Deck Boot Shelf + Sliding Rear Bench', de: 'Doppelter Kofferraumboden + verschiebbare Bank', ru: 'Двойная полка багажника + сдвижной диван' }, vals: ['std', 'std', 'std', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Dash-mounted gear lever opens a flat walkthrough gap between the front seats with flip-down captain armrests.',
          'Sliding 60/40 rear bench and 556 L boot (with removable double-deck shelf) swallow bulky prams and bikes with ease.',
          'Early 2007–2009 hard black plastics scratch easily — 2010+ facelifts improved textures and seat fabrics.'
        ],
        de: [
          'Der hoch platzierte Schalthebel schafft freien Durchgang zwischen den Vordersitzen mit bequemen Klapparmlehnen.',
          'Verschiebbare Rückbank und 556-Liter-Kofferraum mit zweiter Ladeebene bieten enorme Familien-Variabilität.',
          'Frühe 2007–2009er Hartkunststoffe verkratzen leicht — ab Facelift 2010 wurden Oberflächen und Bezüge spürbar aufgewertet.'
        ],
        ru: [
          'Рычаг КПП на передней панели освобождает проход между креслами, а откидные подлокотники удобны в дальней дороге.',
          'Сдвижной задний диван и багажник на 556 л со съёмной полкой-разделителем легко вмещают крупный семейный груз.',
          'Жёсткий пластик дорестайлинга 2007–2009 гг. легко царапается; в 2010 году материалы и обивку заметно освежили.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: '2.0 i-VTEC (6-MT / optional 5-AT) and 2.4 i-VTEC (standard 5-AT) run markedly quieter around town with zero diesel clatter; the 5-speed automatic uses a sleek console-integrated gate.',
          de: '2.0 i-VTEC (6-Gang oder 5-AT) und 2.4 i-VTEC (Serie 5-AT) laufen im Stadtverkehr deutlich ruhiger ohne Diesel-Nageln; die 5-Stufen-Automatik sitzt ergonomisch in der Mittelkonsole.',
          ru: 'Бензиновые 2.0 i-VTEC (6-МКПП или 5-АКПП) и 2.4 i-VTEC (только 5-АКПП) работают тише в городе без дизельных вибраций; селектор 5-ст. автомата удобно интегрирован в панель.'
        },
        diesel: {
          en: 'Pre-facelift 2.2 i-CTDi comes solely with a 6-speed manual; the 2010+ 2.2 i-DTEC adds a heavy-duty 5-speed automatic option, extra engine-bay sound insulation, and a gear-shift indicator.',
          de: 'Der frühe 2.2 i-CTDi kam ausschließlich als 6-Gang-Schalter; der 2.2 i-DTEC ab 2010 ergänzt optional eine robuste 5-Stufen-Automatik sowie zusätzliche Dämmung.',
          ru: 'Дорестайлинговый 2.2 i-CTDi оснащался только 6-ступенчатой МКПП; в 2010 году для 2.2 i-DTEC появилась опция крепкого 5-ступенчатого автомата и улучшенная шумоизоляция.'
        }
      },
      faceliftUpgrades: {
        en: [
          'Replaces the Euro 4 2.2 i-CTDi (140 HP) with the cleaner Euro 5 2.2 i-DTEC (150 HP), solving cracked exhaust manifolds and adding a 5-AT option.',
          'Subtle bumper, chrome-bar grille, and rear light refresh paired with improved sound deadening in doors and floorpan.',
          'Upgrades seat fabrics, adds USB/AUX connectivity and introduces the value-rich Lifestyle trim (Alcantara + Xenon).',
          'Re-tuned dampers and steering bushes sharpen motorway stability without sacrificing compliant SUV ride comfort.'
        ],
        de: [
          'Ersetzt den Euro-4-Diesel 2.2 i-CTDi (140 PS) durch den Euro-5-i-DTEC (150 PS) ohne Krümmerproblem und erstmals mit 5-AT-Option.',
          'Dezent überarbeitete Stoßfänger, Kühlergrill und Rückleuchten sowie spürbar verbesserte Tür- und Bodendämmung.',
          'Hochwertigere Sitzstoffe, USB/AUX-Anschluss und Einführung der attraktiven Lifestyle-Linie (Alcantara + Xenon).',
          'Feiner abgestimmte Stoßdämpfer und Fahrwerksbuchsen sorgen für ruhigeren Geradeauslauf auf der Autobahn.'
        ],
        ru: [
          'Дизель 2.2 i-CTDi (140 л.с., Euro 4) заменён на 2.2 i-DTEC (150 л.с., Euro 5) с усиленным коллектором и опцией 5-АКПП.',
          'Обновлены бамперы, решётка радиатора, фонари и усилена шумоизоляция дверей и пола.',
          'Появились улучшенные ткани отделки, разъём USB/AUX и сбалансированная комплектация Lifestyle (алькантара + ксенон).',
          'Перенастроенные амортизаторы и сайлентблоки сделали поведение на высокой скорости более собранным.'
        ]
      }
    }
  }
});