// AutoDuel Vehicle Data — peugeot-308-gti-t9
registerAutoDuelVehicle({
  roster: {
    id: 'peugeot-308-gti-t9',
    number: '04',
    carType: 'hot-hatch',
    gridOrder: 4,
    gridLabel: '308 GTi',
    yearMake: '2015-2020 PEUGEOT',
    shortTitle: '308 GTi (T9)',
    fullName: '2015-2020 Peugeot 308 GTi (T9)',
    rarityClass: 'rarity-epic',
    drivetrain: 'FWD',
    image: 'assets/peugeot-308-gti-t9.webp',
    imageFacing: 'left',
    defaultEngineId: '1.6-thp-263',
    sharedSpecs: {
      rustProtection: '@rustVeryGood',
      suspensionWear: '@suspSport',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLowMod',
      rideTuning: { en: 'Firm / Compliant Sport', de: 'Straff / Alltagstauglich', ru: 'Упругая спортподвеска' },
      highwayNoise: { en: '~70 dB · Refined', de: '~70 dB · Ruhig', ru: '~70 дБ · Достойно' },
      cabinMaterials: { en: 'Alcantara Buckets · Upscale', de: 'Alcantara-Sitze · Wertig', ru: 'Алькантара · Солидно' },
      controls: { en: 'Touchscreen Climate (i-Cockpit)', de: 'Klima über Touchscreen', ru: 'Климат через экран' },
      turningCircle: '10.8 m',
      visibility: { en: 'Good Forward · Thick C-Pillar', de: 'Gut vorn · Breite C-Säule', ru: 'Хорошо спереди · Широкая C' },
      euroNcap: '★★★★★ (2013)',
      safetyTech: { en: '✓ ESP · ✓ AEB & Lane Assist', de: '✓ ESP · ✓ Notbrems & Spur', ru: '✓ ESP · ✓ AEB и полоса' },
      rearRoom: { en: 'Tight for Tall Adults', de: 'Knapp für Große', ru: 'Тесновато высоким' },
      isofixEntry: { en: '✓ 2× ISOFIX · Low Sport', de: '✓ 2× ISOFIX · Tief', ru: '✓ 2× ISOFIX · Низкая' },
      bootVolume: '420 L / 1,228 L',
      seatUtility: { en: '60/40 Split-Fold', de: '60/40 Klappbank', ru: 'Складывание 60/40' },
      payloadRoof: '440 kg · 70 kg',
      driveline: 'FWD · Torsen LSD',
      chassisFeel: { en: 'Razor-Sharp · Agile', de: 'Messerscharf · Agil', ru: 'Острое · Азартное' },
      tractionDiff: { en: 'FWD · ✓ Mechanical Torsen LSD', de: 'FWD · ✓ Torsen-Sperre', ru: 'FWD · ✓ Блокировка Torsen' },
      braking1000: '~33.8 m',
      brakeSetup: { en: '380 mm Alcon 4-Piston', de: '380 mm Alcon 4-Kolben', ru: '380 мм Alcon 4-поршн.' },
      valueRetention: '@retHigh',
      resaleDemand: '@demNiche'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Psa', clutchDmf: '@clutchDmf', driveline: '@driveFwdLsd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspSportHotHatch' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Peugeot Sport Lowered (-11 mm) Sport Suspension', de: 'Peugeot Sport Sportfahrwerk (-11 mm)', ru: 'Спортподвеска Peugeot Sport (-11 мм)' } },
            { k: 'seatSupport', v: { en: 'Peugeot Sport Alcantara Bucket Seats (Massage/Heated)', de: 'Alcantara-Schalensitze mit Massage & Sitzheizung', ru: 'Ковши Alcantara с массажем и подогревом' } }
          ],
          note: { en: 'Surprisingly supple for a hardcore hot hatch — far easier to daily than harsher track rivals.', de: 'Überraschend alltagstauglich abgestimmt — deutlich komfortabler als kompromisslose Rennstrecken-Gegner.', ru: 'Удивительно комфортный для хот-хэтча — легко подходит на каждый день.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~70 dB(A) at 130 km/h', de: '~70 dB(A) bei 130 km/h', ru: '~70 дБ(А) при 130 км/ч' } },
            { k: 'acousticGlass', v: { en: 'Calm Cruise · Sport Button Adds Cabin Sound', de: 'Ruhig im Normalmodus · Sport-Taste schärft Klang', ru: 'Тихий круиз · Кнопка Sport усиливает звук' } }
          ],
          note: { en: 'Genuinely civilised motorway cruiser when Sport mode is switched off.', de: 'Im Normalmodus ein sehr entspannter Autobahngleiter.', ru: 'Спокойный и тихий на трассе в обычном режиме.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashTrim', v: { en: 'Minimalist Soft-Touch Dash + Red Contrast Stitching', de: 'Aufgeräumtes Soft-Touch-Cockpit mit roten Nähten', ru: 'Минималистичная мягкая панель с красной строчкой' } },
            { k: 'buildFit', v: { en: 'Clean Modern Feel · Tiny Sport Steering Wheel', de: 'Hochwertige Haptik · Sehr kleines Sportlenkrad', ru: 'Приятные материалы · Компактный спорт-руль' } }
          ],
          note: { en: 'Test the Peugeot i-Cockpit driving position first — the tiny wheel can clip the dials for some heights.', de: 'Sitzposition im i-Cockpit unbedingt testen — das kleine Lenkrad verdeckt je nach Größe Teile des Tachos.', ru: 'Обязательно примерьте посадку i-Cockpit — маленький руль может перекрывать приборы.' }
        },
        controls: {
          specs: [
            { k: 'climateUi', v: { en: 'Touchscreen-Integrated Climate Control', de: 'Klima-Bedienung im zentralen Touchscreen', ru: 'Управление климатом через сенсорный экран' } }
          ],
          note: { en: 'Clean minimalist look, though adjusting cabin temperature takes an extra screen tap.', de: 'Schick und aufgeräumt, aber Temperatur-Änderungen erfordern einen Klick im Menü.', ru: 'Стильный минимализм, но регулировка климата требует касания экрана.' }
        }
      },
      visibilityManeuverability: {
        turningCircle: { specs: [{ k: 'turningDiam', v: '10.8 m' }, { k: 'bodyDimensions', v: '4,253 × 1,804 mm' }], note: { en: 'Compact and easy to thread through tight city streets.', de: 'Kompakt und handlich im engen Stadtverkehr.', ru: 'Компактный и юркий в тесных городских условиях.' } },
        visibility: { specs: [{ k: 'sightlines', v: { en: 'Good Forward · Thick Rear Pillars', de: 'Gut nach vorn · Breite C-Säulen hinten', ru: 'Хорошо спереди · Широкие задние стойки' } }, { k: 'parkingAids', v: { en: 'Standard Front/Rear Sensors + Reversing Camera', de: 'Parksensoren vorn/hinten + Kamera Serie', ru: 'Парктроники спереди/сзади и камера в базе' } }], note: { en: 'Standard parking sensors and camera offset the wide rear pillars.', de: 'Serienmäßige Kamera und Sensoren gleichen die breite C-Säule gut aus.', ru: 'Штатная камера и парктроники компенсируют широкие стойки.' } }
      },
      safetyProtection: {
        euroNcap: { specs: [{ k: 'ncapOverall', v: '★★★★★ (2013)' }, { k: 'ncapBreakdown', v: { en: '92% Adult · 79% Child · 64% Pedestrian', de: '92 % Erwachsene · 79 % Kinder · 64 % Fußgänger', ru: '92% Взрослые · 79% Дети · 64% Пешеходы' } }, { k: 'airbagsCount', v: { en: '6 Airbags', de: '6 Airbags', ru: '6 подушек безопасности' } }], note: { en: 'Strong EMP2 5-star crash structure with low kerb weight.', de: 'Moderne 5-Sterne-EMP2-Sicherheitsstruktur trotz niedrigem Gewicht.', ru: 'Крепкая 5-звёздочная платформа EMP2 при малом весе.' } },
        safetyTech: { specs: [{ k: 'activeAssists', v: { en: '✓ ESP (Fully Defeatable) · ✓ AEB & Lane Assist (2018+)', de: '✓ ESP (Abschaltbar) · ✓ Notbrems & Spurhalteassistent', ru: '✓ ESP (отключаемая) · ✓ AEB и контроль полосы' } }], note: { en: '2018+ facelift GTi models include modern active safety assists as standard.', de: 'Facelift-Modelle ab 2018 bieten moderne Assistenzsysteme ab Werk.', ru: 'Рестайлинговые версии с 2018 года оснащены современными ассистентами.' } }
      },
      passengerSpaceErgonomics: {
        rearRoom: { specs: [{ k: 'wheelbase', v: '2,620 mm' }, { k: 'rearLegHead', v: { en: 'Compact Rear Kneeroom (Best for Kids/Short Trips)', de: 'Knappe Kniefreiheit im Fond (Eher für Kinder)', ru: 'Тесновато в коленях сзади' } }], note: { en: 'Prioritizes front bucket comfort and boot volume over rear legroom.', de: 'Fokus liegt klar auf vorderen Sportsitzen und großem Kofferraum statt Fondplatz.', ru: 'Приоритет отдан передним креслам и багажнику, а не заднему ряду.' } },
        isofixEntry: { specs: [{ k: 'isofixAccess', v: { en: '✓ 2× Outer ISOFIX · Low Sport Roofline', de: '✓ 2× ISOFIX außen · Flache Sport-Dachlinie', ru: '✓ 2× ISOFIX · Низкая линия крыши' } }], note: { en: 'Usable 5-door practicality in a discreet sleeper body.', de: 'Alltagstaugliche 5-Türer-Karosserie im dezenten Sleeper-Look.', ru: 'Удобный 5-дверный кузов в сдержанном стиле.' } }
      },
      interiorBootSpace: {
        bootVolume: { specs: [{ k: 'bootUpDown', v: '420 L / 1,228 L' }, { k: 'loadSill', v: { en: '~690 mm · Deep Square Bay', de: '~690 mm · Tiefer, gut nutzbarer Raum', ru: '~690 мм · Глубокий прямоугольный отсек' } }], note: { en: 'Generous 420 L boot makes it one of the most practical hot hatches.', de: 'Großzügige 420 L Kofferraum machen ihn zu einem extrem praktischen Hot-Hatch.', ru: 'Вместительный багажник 420 л — один из лучших среди хот-хэтчей.' } },
        seatUtility: { specs: [{ k: 'foldingMech', v: { en: '60/40 Split-Fold Rear Seat', de: '60/40 geteilt umklappbare Rückbank', ru: 'Складывание спинки 60/40' } }], note: { en: 'Easily fits weekend luggage or track-day spare wheels.', de: 'Genug Platz für Urlaubsgepäck oder einen Satz Trackday-Räder.', ru: 'Легко вмещает багаж для путешествий или комплект колёс.' } }
      },
      payloadTowing: {
        payloadRoof: { specs: [{ k: 'maxPayload', v: '~440 kg' }, { k: 'roofLoad', v: '70 kg' }], note: { en: 'Standard 5-door hatchback payload.', de: 'Normale Kompaktwagen-Zuladung.', ru: 'Стандартная грузоподъёмность хэтчбека.' } },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'kerbWeight', v: '1,280 kg (Featherweight)' },
            { k: 'handlingChar', v: { en: 'Playful, Super-Light Turn-In · Neutral Balance', de: 'Extrem leichtfüßiges Einlenken · Spielerische Balance', ru: 'Сверхлёгкий вход в поворот · Игривый баланс' } },
            { k: 'tyreSizes', v: '235/35 R19 (Michelin Pilot Super Sport)' }
          ],
          note: { en: 'At just 1,280 kg, it feels 150 kg lighter than most modern AWD hot hatches.', de: 'Mit nur 1.280 kg spürbar leichtfüßiger als die meisten modernen Allrad-Hot-Hatches.', ru: 'При массе всего 1280 кг ощущается намного легче полноприводных конкурентов.' }
        },
        tractionDiff: '@tractionFwdLsd'
      },
      brakingPerformance: {
        braking1000: '@brakingDistDynamic',
        brakeSetup: {
          specs: [
            { k: 'discHardware', v: { en: '380 mm Alcon Two-Piece Floating Front Discs + 4-Piston Fixed Calipers', de: '380 mm Alcon-Zweiteiler vorn (schwimmend) + 4-Kolben-Festsättel', ru: '380 мм составные диски Alcon спереди + 4-поршневые суппорты' } }
          ],
          note: { en: 'Supercar-sized 380 mm Alcon brakes deliver immense fade-free stopping power — budget €1,100–€1,650 when front discs eventually wear out.', de: '380-mm-Alcon-Anlage auf Sportwagen-Niveau mit enormer Standfestigkeit — Ersatzscheiben vorn kosten jedoch ca. 1.100–1.650 €.', ru: 'Огромные 380-мм тормоза Alcon уровня суперкаров — невероятная эффективность, но замена передних дисков стоит €1 100–1 650.' }
        }
      },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },    sharedBuyerFit: {
      cards: {
        gti308Featherweight: {
          en: 'You love agile, lightweight handling: At just 1,205 kg with a tiny steering wheel and taut chassis, it darts through corners effortlessly.',
          de: 'Du liebst leichtfüßiges Handling: Mit nur 1.205 kg Leergewicht und straffem Fahrwerk giert er präziser in Kurven als fast alle Rivalen.',
          ru: 'Ты любишь лёгкую и точную управляемость: При массе всего 1 205 кг и собранном шасси он проходит повороты острее большинства конкурентов.'
        },
        gti308EverydayBoot: {
          en: 'You still need real-world practicality: Despite track-ready 263 HP pace, the 420 L boot and 5 doors handle daily errands easily.',
          de: 'Du brauchst trotzdem Alltagsnutzen: Trotz 263 PS bleibt der 420-L-Kofferraum samt fünf Türen voll alltagstauglich.',
          ru: 'Тебе всё ещё нужна практичность на каждый день: Несмотря на 263 л.с., 5 дверей и багажник 420 л спокойно справляются с бытовыми задачами.'
        },
        gti308BrakeBill: {
          en: 'You balk at four-figure brake jobs: The 380 mm two-piece front discs and Alcon calipers deliver huge stopping power, but replacements are pricey.',
          de: 'Du scheust hohe Bremsen-Kosten: Die 380-mm-Verbundscheiben und Alcon-Sättel packen brutal zu, kosten beim Tausch aber spürbar Geld.',
          ru: 'Тебя пугают дорогие расходники: Двухсоставные 380-мм диски и суппорты Alcon тормозят мощно, но стоят недешево при замене.'
        },
        gti308TouchscreenUi: {
          en: 'You prefer physical climate dials: Heating and A/C adjustments run through the center touchscreen, which takes eyes off the road.',
          de: 'Du magst echte Drehregler fürs Klima: Temperatur und Lüftung laufen über den Touchscreen und lenken während der Fahrt ab.',
          ru: 'Ты предпочитаешь физические крутилки: Управление климатом зашито в сенсорный экран, что отвлекает в движении.'
        },
        gti308LsdCornering: {
          en: 'You love carving B-roads: The mechanical Torsen differential pulls you cleanly out of tight wet corners without understeer.',
          de: 'Du liebst kurvige Landstraßen: Das mechanische Torsen-Sperrdifferenzial zieht dich selbst auf nasser Fahrbahn sauber aus engen Kehren.',
          ru: 'Ты любишь извилистые дороги: Механический самоблок Torsen уверенно вытягивает машину из скользких поворотов без сноса.'
        }
      }
    },
    buyerFitGroups: {
      'hot-hatch': {
        summary: {
          en: 'A lightweight, mechanical-LSD hot hatch that doubles as a practical 5-door daily — if you budget for performance brake and tyre wear.',
          de: 'Ein leichtgewichtiger Hot-Hatch mit Sperrdifferenzial und überraschend viel Alltagsnutzen — sofern du das Budget für Sportbremsen und Reifen einplanst.',
          ru: 'Лёгкий горячий хэтчбек с самоблоком и практичным 5-дверным кузовом — отличный выбор, если ты готов к тратам на спорт-тормоза и резину.'
        },
        ideal: [
          'gti308Featherweight',
          'gti308LsdCornering',
          'gti308EverydayBoot',
          'globalPetrolCityZones'
        ],
        skip: [
          'gti308BrakeBill',
          'globalHotHatchStiff',
          'globalHotHatchRunningCosts',
          'gti308TouchscreenUi'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Hot-Dip Galvanized Body — Hard-Driven Front Bushings',
          strengths: [
            'Hot-Dip Galvanized Body keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Check front lower control arm bushings and 380 mm Alcon brake disc wear.',
            'Hard-Driven Front Bushings.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Vollverzinkte Karosserie — Vorderachslager prüfen',
          strengths: [
            'Vollverzinkte Karosserie hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Vordere Querlenkerbuchsen und Verschleiß der 380-mm-Alcon-Bremsscheiben prüfen.',
            'Vorderachslager prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Оцинкованный кузов EMP2 — Нагрузка на передние рычаги',
          strengths: [
            'Оцинкованный кузов EMP2 надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Проверьте сайлентблоки передних рычагов и износ 380-мм тормозных дисков Alcon.',
            'Нагрузка на передние рычаги.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Alcantara & Red-Stitched Cabin',
          strengths: [
            'Alcantara & Red-Stitched Cabin ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Climate controls are buried in the touchscreen and tiny wheel can obscure dials.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Alcantara & rote Ziernähte',
          strengths: [
            'Alcantara & rote Ziernähte sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Klimasteuerung liegt im Touchscreen; kleines Lenkrad kann den Tacho verdecken.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Алькантара и красная прострочка',
          strengths: [
            'Алькантара и красная прострочка обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Климат-контроль убран в экран, а маленький руль может перекрывать приборы.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '10.4 m Compact Turn • 4.25 m',
          strengths: [
            '10.4 m Compact Turn • 4.25 m makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Thick C-pillars and small rear window make reverse cameras essential.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '10,4 m Wendekreis • 4,25 m',
          strengths: [
            '10,4 m Wendekreis • 4,25 m macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Breite C-Säulen und kleines Heckfenster machen die Rückfahrkamera wichtig.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Разворот 10,4 м • 4,25 м',
          strengths: [
            'Разворот 10,4 м • 4,25 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Широкие задние стойки ограничивают обзор — пригодится камера заднего вида.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2013) — 6 Airbags + Active Safety',
          strengths: [
            'Euro NCAP 5★ (2013) provides solid passive crash protection for its class and era.',
            '6 Airbags + Active Safety standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2013) — 6 Airbags + Notbremsassistent',
          strengths: [
            'Euro NCAP 5★ (2013) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '6 Airbags + Notbremsassistent serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (2013) — 6 подушек + автоторможение',
          strengths: [
            'Euro NCAP 5★ (2013) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + автоторможение входят в оснащение большинства версий.'
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
          headline: 'Comfortable Front Sport Space',
          strengths: [
            'Comfortable Front Sport Space keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Compact Rear Knee Clearance.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Gutes Raumgefühl vorn',
          strengths: [
            'Gutes Raumgefühl vorn sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Knapper Knieraum im Fond.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Удобно на передних ковшах',
          strengths: [
            'Удобно на передних ковшах обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Скромный запас сзади.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '420L Boot (1,228L Max)',
          strengths: [
            'Practical 420L hatchback boot (1,228L max) keeps everyday practicality intact.',
            'Large Hot-Hatch Boot improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '420L Kofferraum (1.228L Max)',
          strengths: [
            'Praktischer Nutzwert: 420 L Kofferraum (max. 1.228 L) erhalten volle Alltagstauglichkeit.',
            'Groß für 263-PS-Sportler erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 420–1 228 л',
          strengths: [
            'Практичный объём: багажник 420 л (до 1 228 л) сохраняет практичность на каждый день.',
            'Большой для хот-хэтча добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Torsen LSD + 1,205 kg Lightness',
          strengths: [
            '1,205 kg curb weight, Torsen LSD, and 380 mm Alcon 4-pot brakes deliver razor-sharp grip.',
            'Sharp Turn-In • Wet-Grip LSD.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Torsen-Sperre + 1.205 kg',
          strengths: [
            '1.205 kg Leergewicht, Torsen-Sperre und 380-mm-Alcon-Bremse bieten enormes Gripniveau.',
            'Messerscharf & gute Traktion.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Самоблок Torsen + 1 205 кг',
          strengths: [
            'Масса 1 205 кг, дифференциал Torsen и 4-поршневые тормоза Alcon 380 мм дают острый зацеп.',
            'Острый вход и зацеп в дождь.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 33.2 m — 380 mm Alcon 4-Pot Calipers',
          strengths: [
            '100–0 km/h: 33.2 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 33,2 m — 380 mm Alcon 4-Kolben-Anlage',
          strengths: [
            '100–0 km/h: 33,2 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 33,2 м — 380 мм Alcon 4-поршневые',
          strengths: [
            '100–0 км/ч: 33,2 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '470 kg Payload • 0 / 0 kg Towing',
          lowScoreReasons: [
            'Zero factory towing approval (0 kg braked/unbraked) due to the GTi rear diffuser and twin exhaust layout.',
            'Sport-tuned rear beam and lowered stance are not engineered for trailer towing.'
          ],
          strengths: ['470 kg payload easily accommodates four adults and weekend luggage.'],
          watchouts: [
            'Lowered GTi stance and rear diffuser require care on steep garage ramps when fully loaded.'
          ],
          beforeYouBuy: [
            'Check rear bump stops, springs, and lower diffuser tabs for scrapes or heavy load wear.'
          ]
        },
        de: {
          headline: '470 kg Zuladung • 0 / 0 kg Anhängelast',
          lowScoreReasons: [
            'Keine Anhängelast-Freigabe ab Werk (0 kg) wegen GTi-Heckdiffusor und Doppelrohr-Abgasanlage.',
            'Tiefergelegtes Sportfahrwerk und Heckschürze sind nicht für Anhängerbetrieb homologiert.'
          ],
          strengths: ['470 kg Zuladung reichen problemlos für vier Erwachsene und Wochenendgepäck.'],
          watchouts: [
            'Tiefe Karosserie und Heckdiffusor verlangen bei voller Besetzung Vorsicht an steilen Rampen.'
          ],
          beforeYouBuy: ['Hintere Federn, Anschlagpuffer und Heckdiffusor auf Aufsetzer prüfen.']
        },
        ru: {
          headline: 'Нагрузка 470 кг • Прицеп: 0 / 0 кг',
          lowScoreReasons: [
            'Заводская буксировка запрещена (0 кг) из-за заднего диффузора GTi и раздвоенного выхлопа.',
            'Заниженная спортивная подвеска не рассчитана на буксировку прицепов.'
          ],
          strengths: ['Полезной нагрузки 470 кг хватает для четырёх взрослых и багажа на уик-энд.'],
          watchouts: [
            'При полной загрузке салона заниженный задний бампер требует аккуратности на крутых съездах.'
          ],
          beforeYouBuy: ['Проверьте задние пружины и нижний диффузор на предмет следов задевания.']
        }
      },
      depreciationResale: {
        en: {
          headline: 'Final Pure-ICE GTi',
          strengths: [
            'Final Pure-ICE GTi helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Letzter Verbrenner-GTi',
          strengths: [
            'Letzter Verbrenner-GTi sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Последний бенз. GTi',
          strengths: [
            'Последний бенз. GTi поддерживает стабильный спрос на вторичном рынке.',
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
      'petrol-6mt-lsd': {
        transmissionDriveline: {
          en: {
            headline: '6-MT + Torsen Helical LSD — Notchy Throw • Sport Clutch',
            strengths: [
              '6-MT + Torsen Helical LSD matches this powertrain well for everyday driving.',
              'Mechanical helical LSD puts high front-wheel torque down cleanly out of tight corners.'
            ],
            watchouts: [
              'Check clutch bite height and listen for dual-mass flywheel rattle at idle on high-mileage cars.',
              'Verify crisp 2nd-gear engagement when cold and smooth helical LSD pull under hard acceleration.'
            ],
            beforeYouBuy: [
              'Shift quickly into 1st, 2nd, and 3rd gear cold and warm to verify crisp, crunch-free synchros.',
              'Hold the clutch halfway at idle and accelerate in 4th gear to rule out flywheel chatter or clutch slip.'
            ]
          },
          de: {
            headline: '6-Gang + Torsen-Sperrdiff. — Hakelig • Sport-Kupplungslast',
            strengths: [
              '6-Gang + Torsen-Sperrdiff. passt gut zur Motorcharakteristik im Alltag.',
              'Die mechanische Differenzialsperre bringt das hohe Drehmoment sauber auf die Straße.'
            ],
            watchouts: [
              'Bei hoher Laufleistung Kupplungs-Greifpunkt prüfen und im Leerlauf auf ZMS-Klappern achten.',
              'Sauberes Einlegen des 2. Gangs im kalten Zustand und ruckfreie Sperrwirkung unter Last prüfen.'
            ],
            beforeYouBuy: [
              'Im kalten wie warmen Zustand zügig vom 1. in den 2. und 3. Gang schalten — ohne Kratzen.',
              'Kupplung im Leerlauf halb treten (ZMS-Test) und im 4. Gang stark beschleunigen (Rutschtest).'
            ]
          },
          ru: {
            headline: '6-МКПП + самоблок Torsen — Длинный ход • Нагрузка на диск',
            strengths: [
              '6-МКПП + самоблок Torsen хорошо сочетается с данным двигателем в повседневной езде.',
              'Длинный ход • Нагрузка на диск.'
            ],
            watchouts: [
              'На больших пробегах проверяйте точку схватывания сцепления и стук двухмассового маховика на холостых.',
              'Проверьте чёткое включение 2-й передачи на холодную и плавную работу самоблока под нагрузкой.'
            ],
            beforeYouBuy: [
              'Чётко переключить 1–2–3 передачи на холодную и на горячую — хруста синхронизаторов быть не должно.',
              'Нажать сцепление наполовину на холостых (проверка маховика) и ускориться на 4-й передаче.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Watch Battery & BSI Health',
            strengths: [
              'Well-documented electrical architecture keeps independent diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Battery & BSI Health.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'BSI & Batteriespannung',
            strengths: [
              'Gut dokumentierte Bordelektronik ermöglicht eine unkomplizierte Diagnose in freien Werkstätten.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'BSI & Batteriespannung.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Контроль BSI и АКБ',
            strengths: [
              'Хорошо изученная бортовая электроника упрощает диагностику и обслуживание в сервисе.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Контроль BSI и АКБ.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Firm Lowered Sport Chassis',
            strengths: [
              'Supportive GTi bucket seats and calm cruise control keep long motorway runs manageable.',
              'Composed damping over smooth asphalt without excessive bounce.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ],
            lowScoreReasons: [
              'Lowered firm sport suspension transmits sharp urban potholes into the cabin.',
              'Low-profile 19-inch tyres create noticeable road noise on coarse tarmac.'
            ]
          },
          de: {
            headline: 'Straffes Sportfahrwerk (-11 mm)',
            strengths: [
              'Gut konturierte GTi-Sportsitze halten auch auf längeren Etappen angenehm bequem.',
              'Auf gutem Asphalt liegt das Sportfahrwerk ruhig ohne Nachschwingen.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ],
            lowScoreReasons: [
              'Das tiefergelegte, straffe Sportfahrwerk gibt harte Stadtschlaglöcher direkt weiter.',
              'Flache 19-Zoll-Sportreifen erzeugen auf rauem Asphalt deutliche Abrollgeräusche.'
            ]
          },
          ru: {
            headline: 'Жёсткое заниженное шасси',
            strengths: [
              'Удобные спортивные кресла GTi хорошо поддерживают спину в дальних поездках.',
              'На ровном асфальте подвеска собрана и не допускает раскачки.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ],
            lowScoreReasons: [
              'Заниженная жёсткая подвеска заметно передаёт городские ямы и стыки в салон.',
              'Низкопрофильные 19-дюймовые шины ощутимо гудят на шершавом асфальте.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: '€1,000+ 380 mm Front Discs — 19" Performance Tyres & 10k Oil',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['19" Performance Tyres & 10k Oil.', '€1,000+ 380 mm Front Discs.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Über 1.000 € für 380-mm-Bremsen — Teure 19-Zoll-Reifen & Wartung',
            strengths: [
              'Über 1.000 € für 380-mm-Bremsen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teure 19-Zoll-Reifen & Wartung.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Тормозные диски 380 мм >€1000 — Дорогие 19" шины и частая замена масла',
            strengths: [
              'Тормозные диски 380 мм >€1000 помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогие 19" шины и частая замена масла.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedGearboxes: {
      '6-mt-torsen': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'PSA MCM · Manual + Torsen LSD', de: 'PSA MCM · Schaltgetriebe + Torsen-Sperre', ru: 'PSA MCM · Механика + Блокировка Torsen' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Psa', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: {
            headline: 'PSA MCM 6-Speed Manual + Torsen LSD — Sharp Traction, Longer Throw',
            strengths: ['Mechanical Torsen limited-slip diff claws out of tight corners with remarkable front-end grip.'],
            watchouts: ['Gear throw is slightly longer than a Civic Type-R; refresh gear oil every 60,000 km for Torsen health.'],
            beforeYouBuy: ['Check clean 2nd/3rd synchro engagement and verify zero diff whine under partial throttle.']
          },
          de: {
            headline: 'PSA MCM 6-Gang-Getriebe + Torsen-Sperre — Enormer Kurvengrip',
            strengths: ['Mechanische Torsen-Differenzialsperre zieht den 308 GTi sauber aus engen Kehren.'],
            watchouts: ['Schaltwege sind etwas länger als beim Type-R; Getriebeöl alle 60.000 km für das Torsen-Diff wechseln.'],
            beforeYouBuy: ['Saubere Synchronisation von 2./3. Gang und ruhiges Laufgeräusch der Sperre prüfen.']
          },
          ru: {
            headline: 'Механика PSA MCM + Torsen LSD — Мощный зацеп в поворотах',
            strengths: ['Механическая блокировка Torsen эффективно вытягивает переднюю ось из крутых поворотов.'],
            watchouts: ['Ходы кулисы длиннее, чем у Type-R; желательно менять масло каждые 60 тыс. км ради дифференциала.'],
            beforeYouBuy: ['Проверьте плавность 2-й и 3-й передач и отсутствие гула дифференциала под тягой.']
          }
        }
      }
    },
    engines: [
      {
        id: '1.6-thp-263',
        defaultGearboxId: '6-mt-torsen',
        gearboxes: [{ id: '6-mt-torsen', isDefault: true }],
        specOverrides: {
          engineName: { en: '1.6L THP 263 Turbo', de: '1.6L THP 263 Turbo', ru: '1.6L THP 263 Турбо' },
          forcedInduction: '@turbo', injection: '@direct', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '0 kg (No Tow)', sprint0100: '6.0 s', topSpeed: '250 km/h', peakTorque: '340 Nm @ 2,100',
          passingPunch: { en: 'Explosive Mid-Range', de: 'Brachialer Durchzug', ru: 'Взрывная середина' },
          realWorldFuel: '7.5–9.2 L/100 km', tankRange: '53 L · ~630 km', euroNorm: 'Euro 6d-TEMP (OPF)',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierHigh'
        },
        dossierGroup: 'petrol-6mt-lsd',
        buyerFitGroup: 'hot-hatch',
        isDefault: true,
        fuelType: 'petrol',
        hp: 263,
        shortTitle: '308 GTi 1.6',
        fullName: '2019 Peugeot 308 GTi 1.6',
        engineBadge: '1.6L THP GTi • 263 HP',
        engineSubLabel: {
          en: 'EP6FADTX 1.6L Twin-Scroll Turbo • 6-MT + Torsen LSD • 340 Nm',
          de: 'EP6FADTX 1.6L Twin-Scroll-Turbo • 6-Gang + Torsen-Sperre • 340 Nm',
          ru: 'EP6FADTX 1.6L Твин-скролл Турбо • 6-ст. МКПП + Torsen • 340 Н·м'
        },
        rarityLabel: {
          en: 'PEUGEOT SPORT',
          de: 'PEUGEOT SPORT',
          ru: 'PEUGEOT SPORT'
        },
        originalMsrp: {
          en: '€39,100 New',
          de: '39.100 € Neu',
          ru: '€39 100 новый'
        },
        estUsedPrice: '€20,900',
        perkLabel: {
          en: '✦ 6.0s 0–100 • Torsen LSD & 380mm Alcon Brakes • 1,205 kg Featherweight',
          de: '✦ 6,0s 0–100 • Torsen-Sperre & 380mm Alcon-Bremse • Nur 1.205 kg',
          ru: '✦ 6,0 с 0–100 • Самоблок Torsen и тормоза Alcon 380 мм • Вес 1 205 кг'
        },
        remarkablePositives: {
          en: [
            '1,205 KG FEATHERWEIGHT',
            'HIGH-GRIP FRONT DIFF',
            'BIG BRAKES FROM FACTORY (380MM)',
            '6.0S 0–100 • 250 KM/H TOP SPEED',
            '7.4 L/100KM ECONOMY',
            '420L BOOT & MASSAGE SEATS'
          ],
          de: [
            'NUR 1.205 KG LEERGEWICHT',
            'SPERRDIFFERENTIAL VORN',
            'GROSSE BREMSEN AB WERK (380MM)',
            '6,0S 0–100 • 250 KM/H SPITZE',
            '7,4 L/100KM VERBRAUCH',
            '420L KOFFERRAUM & MASSAGESITZE'
          ],
          ru: [
            'ВЕС ВСЕГО 1 205 КГ',
            'ПЕРЕДНИЙ САМОБЛОК ДИФФ.',
            'БОЛЬШИЕ ТОРМОЗА С ЗАВОДА (380 ММ)',
            '6,0 С ДО 100 • МАКС. 250 КМ/Ч',
            'РАСХОД 7,4 Л/100 КМ',
            'БАГАЖНИК 420 Л + МАССАЖ'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH BRAKE REPLACEMENT COSTS',
            'TOUCHSCREEN-ONLY CLIMATE',
            '0 KG TOWING (NO TRAILER)',
            'FIRM 19-INCH SPORT RIDE'
          ],
          de: [
            'HOHE BREMSEN-ERSATZKOSTEN',
            'KLIMA NUR IM TOUCHSCREEN',
            '0 KG ANHÄNGELAST (KEINE AHK)',
            'STRAFFES 19-ZOLL-FAHRWERK'
          ],
          ru: [
            'ДОРОГАЯ ЗАМЕНА ТОРМОЗОВ',
            'КЛИМАТ ТОЛЬКО В ЭКРАНЕ',
            '0 КГ БУКСИРОВКА (БЕЗ ТСУ)',
            'ЖЁСТКАЯ ПОДВЕСКА НА R19'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 7.5,
          spacePracticality: 7.3,
          performanceDynamics: 9.0,
          runningCostsTco: 7.2
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6L THP Forged-Piston Inline-4 Turbo (EP6FADTXR)', de: '1.6L THP Schmiedekolben Reihenvierzylinder Turbo (EP6FADTXR)', ru: '1.6L THP кованый рядный 4-цил. турбо (EP6FADTXR)' } },
                  { k: 'displacement', v: '1,598 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '193 kW (263 HP)', de: '193 kW (263 PS)', ru: '193 кВт (263 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol (98 RON) · Reinforced Timing Chain', de: 'Super Plus · Verstärkte Steuerkette', ru: 'Бензин (АИ-98) · Усиленная цепь ГРМ' } }
                ],
                note: { en: 'Heavily upgraded Mahle forged-piston GTi block — far more robust than early 2007–2012 Prince engines.', de: 'Stark überarbeiteter Block mit Mahle-Schmiedekolben — deutlich haltbarer als frühe THP-Motoren.', ru: 'Серьёзно доработанный мотор с коваными поршнями Mahle — намного крепче ранних THP.' }
              },
              forcedInduction: '@turboHotHatch', injection: '@directInjPetrol'
            },
            score: 7.4,
            badges: {
              en: ['Forged Mahle Pistons', '8–10k km Oil Service'],
              de: ['Mahle-Schmiedekolben', 'Ölwechsel alle 8–10k km'],
              ru: ['Кованые поршни Mahle', 'Масло каждые 7–8 тыс. км']
            },
            dossier: {
              en: {
                headline: 'Reinforced Peugeot Sport Turbo Engine with High Service Demands',
                strengths: [
                  'High-strength Mahle lightweight forged pistons with dedicated cooling galleries and polymer-coated main bearings withstand high cylinder pressures.',
                  'Sodium-filled exhaust valves and reinforced cylinder head engineered specifically for the 263 HP GTi.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Direct injection means fuel never washes the intake valves; manual walnut shell decoking is typically required around 80,000–100,000 km.',
                  'With 164 HP per liter output, oil degrades rapidly. Exceeding 10k km leads to turbo oil feed coking and timing chain tensioner fatigue.',
                  'High-Pressure Fuel Pump (HPFP): Demands high-quality 98+ octane fuel; sensitive to thermal cycles.'
                ],
                beforeYouBuy: [
                  'Measure lip/wear on the giant 380 mm front brake discs— a fresh front disc set costs over €1,000 alone.',
                  'Verify strict 8,000–10,000 km high-spec synthetic oil changes and listen for any timing chain rattle when cold.',
                  'Check front differential traction on tight acceleration out of corners and inspect 19-inch tyres for inner wear.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict 8–10,000 km / 1 yr racing-spec oil & annual high-temp brake fluid (263 hp + 380 mm brakes)',
                    cost: '€180–300',
                    ifIgnored: 'Sheared aged oil stretches chain & scorched fluid boils under spirited braking',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change Torsen LSD gearbox oil every 50–60k, swap spark plugs & check 5–6 yr heat-aged turbo pipes',
                    cost: '€380–620',
                    ifIgnored: 'Heat-aged plastic/rubber boost pipes crack & worn plugs trigger engine knock',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Replace 380 mm front brake discs, pads & iridium spark plugs',
                    cost: '€950–1,400',
                    ifIgnored: 'Warped, cracked discs & high-speed misfires (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,600'
                  },
                  {
                    tier: 'red',
                    km: '120,000–160,000 km • 9–11 yrs',
                    action: 'Replace timing chain kit & clean intake valve carbon',
                    cost: '€850–1,300',
                    ifIgnored: 'Chain skips teeth or engine detonation cracks pistons (components & fluids also degrade over years)',
                    damageCost: '€3,000–4,800'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–190,000 km • 11–13 yrs',
                    action: 'Replace high-pressure fuel pump & turbo boost valve',
                    cost: '€550–900',
                    ifIgnored: 'Sudden limp mode & lean fuel mix overheating turbo (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '190,000–250,000 km • 13–15+ yrs',
                    action: 'Replace sport clutch kit, flywheel & limited-slip gearbox oil',
                    cost: '€1,100–1,600',
                    ifIgnored: 'Slipping clutch & worn front differential lock (components & fluids also degrade over years)',
                    damageCost: '€2,200–3,400'
                  }
                ]
              },
              de: {
                headline: 'Verstärkter Peugeot-Sport-Turbomotor mit hohem Wartungsanspruch',
                strengths: [
                  'Hochfeste Leichtbau-Schmiedekolben mit integrierten Kühlkanälen und polymerbeschichteten Lagern für extreme Zylinderdrücke.',
                  'Natrium-gefüllte Auslassventile und verstärkter Zylinderkopf speziell für den 263-PS-GTi.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Durch die Benzindirekteinspritzung verrußen die Einlassventile; Walnussschalen-Reinigung ab ca. 80.000–100.000 km ratsam.',
                  'Bei 164 PS/Liter thermisch hoch belastet. Überzogene Intervalle schädigen Turbolader-Ölleitungen und Spanner.',
                  'Benötigt zwingend Super Plus (98/102 Oktan) für maximale Haltbarkeit.'
                ],
                beforeYouBuy: [
                  'Verschleiß der riesigen 380-mm-Bremsscheiben vorn prüfen— ein neuer Satz kostet allein über 1.000 €.',
                  'Strikte Ölwechsel alle 8.000–10.000 km nachweisen lassen und beim Kaltstart auf Steuerketten-Rasseln hören.',
                  'Sperrdifferenzial beim Herausbeschleunigen testen und 19-Zoll-Reifen auf gleichmäßigen Abrieb prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Öl streng alle 8–10.000 km / 1 J. wechseln & jährlich Bremsflüssigkeit für die 380er-Anlage',
                    cost: '180–300 €',
                    ifIgnored: 'Thermisch verbrauchtes Öl längt die Steuerkette; alte Bremsflüssigkeit kocht schnell',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Torsen-Sperrdiff-Getriebeöl (50–60 Tkm) & Kerzen tauschen; hitzegealterte Schläuche nach 5–6 J. prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Durch Turbohitze versprödete Kunststoffrohre reißen; alte Kerzen gefährden Kolben',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: '380-mm-Bremsscheiben vorn, Beläge & Iridium-Kerzen tauschen',
                    cost: '950–1.400 €',
                    ifIgnored: 'Rissige Bremsscheiben & Zündaussetzer unter Volllast (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.600 €'
                  },
                  {
                    tier: 'red',
                    km: '120.000–160.000 km • 9–11 J.',
                    action: 'Steuerkettensatz erneuern & Einlassventile von Ruß reinigen',
                    cost: '850–1.300 €',
                    ifIgnored: 'Kette springt über oder Glühzündungen zerstören Kolben (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '3.000–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–190.000 km • 11–13 J.',
                    action: 'Hochdruck-Kraftstoffpumpe & Schubumluftventil erneuern',
                    cost: '550–900 €',
                    ifIgnored: 'Plötzlicher Notlauf & Abmagerung schadet Turbolader (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '190.000–250.000 km • 13–15+ J.',
                    action: 'Sportkupplung, Schwungrad & Öl im Sperrdifferenzial wechseln',
                    cost: '1.100–1.600 €',
                    ifIgnored: 'Rutschende Kupplung & Verschleiß am Front-Differenzial (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.200–3.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Усиленный турбомотор Peugeot Sport с высокими требованиями к сервису',
                strengths: [
                  'Лёгкие и сверхпрочные поршни с масляными каналами охлаждения и полимерным напылением коренных вкладышей.',
                  'Выпускные клапаны с натриевым наполнением и усиленная ГБЦ, разработанная специально под 263 л.с.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Прямой впрыск не омывает клапаны; к 80 000–100 000 км требуется чистка ореховой скорлупой (Walnut blasting).',
                  'Высокая форсировка (164 л.с. с литра) быстро окисляет масло. Затягивание ведёт к закоксовке маслоподачи турбины.',
                  'Топливная система (ТНВД): Требует качественный бензин АИ-98 / АИ-100 и чувствительна к перегревам.'
                ],
                beforeYouBuy: [
                  'Требовать чеки замены синтетики каждые 8–10 тыс. км и внимательно слушать цепь на холодном пуске.',
                  'Проверить работу передней блокировки в повороте под газом и износ 19-дюймовых шин.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло строго раз в 8–10 тыс. км / 1 год и ежегодно тормозную жидкость для 380-мм тормозов',
                    cost: '€180–300',
                    ifIgnored: 'Старое перегретое масло растягивает цепь, а старая жидкость вскипает при торможении',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в МКПП с блокировкой Torsen (50–60 тыс.), свечи и проверить пластик турбины к 5–6 годам',
                    cost: '€380–620',
                    ifIgnored: 'Охрупченные жаром пластиковые патрубки лопаются, а старые свечи дают детонацию',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Заменить передние диски 380 мм, колодки и свечи зажигания',
                    cost: '€950–1 400',
                    ifIgnored: 'Трещины перегретых дисков и пропуски зажигания',
                    damageCost: '€1 800–2 600'
                  },
                  {
                    tier: 'red',
                    km: '120 000–160 000 км • 9–11 лет',
                    action: 'Заменить комплект цепи двигателя и почистить впуск от нагара',
                    cost: '€850–1 300',
                    ifIgnored: 'Перескок цепи или детонация с прогаром поршней (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 000–4 800'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–190 000 км • 11–13 лет',
                    action: 'Заменить топливный насос высокого давления и клапан турбины',
                    cost: '€550–900',
                    ifIgnored: 'Аварийное падение тяги и обеднение смеси под нагрузкой (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '190 000–250 000 км • 13–15+ лет',
                    action: 'Заменить спорт-сцепление, маховик и масло в коробке с блокировкой',
                    cost: '€1 100–1 600',
                    ifIgnored: 'Пробуксовка сцепления и износ самоблока (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 200–3 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.1,
            badges: {
              en: ['6-MT + Torsen Helical LSD', 'Notchy Throw • Sport Clutch'],
              de: ['6-Gang + Torsen-Sperrdiff.', 'Hakelig • Sport-Kupplungslast'],
              ru: ['6-МКПП + самоблок Torsen', 'Длинный ход • Нагрузка на диск']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Hot-Dip Galvanized Body', 'Hard-Driven Front Bushings'],
              de: ['Vollverzinkte Karosserie', 'Vorderachslager prüfen'],
              ru: ['Оцинкованный кузов EMP2', 'Нагрузка на передние рычаги']
            }
          },
          electronicsReliability: {
            score: 7.2,
            badges: {
              en: ['Watch Battery & BSI Health', 'French Loom & Screen Quirks'],
              de: ['BSI & Batteriespannung', 'Touchscreen teils träge'],
              ru: ['Контроль BSI и АКБ', 'Возможны глюки мультимедиа']
            }
          },
          rideNoiseComfort: {
            score: 5.5,
            badges: {
              en: ['Firm Lowered Sport Chassis', 'Supportive Massage Bucket Seats'],
              de: ['Straffes Sportfahrwerk (-11 mm)', 'Bequeme Schalen mit Massage'],
              ru: ['Жёсткое заниженное шасси', 'Удобные ковши с массажем']
            }
          },
          interiorQualityFeatures: {
            score: 7.7,
            badges: {
              en: ['Alcantara & Red-Stitched Cabin', 'Climate Buried In Touchscreen'],
              de: ['Alcantara & rote Ziernähte', 'Klima nur über Touchscreen'],
              ru: ['Алькантара и красная прострочка', 'Климат запрятан в сенсорный экран']
            }
          },
          visibilityManeuverability: {
            score: 7.8,
            badges: {
              en: ['10.4 m Compact Turn • 4.25 m', 'Thick Rear C-Pillars'],
              de: ['10,4 m Wendekreis • 4,25 m', 'Breite C-Säulen schränken ein'],
              ru: ['Разворот 10,4 м • 4,25 м', 'Широкие задние стойки']
            }
          },
          safetyProtection: {
            score: 8.4,
            badges: {
              en: ['Euro NCAP 5★ (2013)', '6 Airbags + Active Safety'],
              de: ['Euro NCAP 5★ (2013)', '6 Airbags + Notbremsassistent'],
              ru: ['Euro NCAP 5★ (2013)', '6 подушек + автоторможение']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.6,
            badges: {
              en: ['Comfortable Front Sport Space', 'Compact Rear Knee Clearance'],
              de: ['Gutes Raumgefühl vorn', 'Knapper Knieraum im Fond'],
              ru: ['Удобно на передних ковшах', 'Скромный запас сзади']
            }
          },
          interiorBootSpace: {
            score: 6.9,
            badges: {
              en: ['420L Boot (1,228L Max)', 'Large Hot-Hatch Boot'],
              de: ['420L Kofferraum (1.228L Max)', 'Groß für 263-PS-Sportler'],
              ru: ['Багажник 420–1 228 л', 'Большой для хот-хэтча']
            }
          },
          payloadTowing: {
            score: 3.2,
            badges: {
              en: ['470 kg Payload', '0 / 0 kg Towing'],
              de: ['470 kg Zuladung', '0 / 0 kg Anhängelast'],
              ru: ['Нагрузка 470 кг', 'Прицеп: 0 / 0 кг']
            }
          },
          accelerationOvertaking: {
            score: 9.3,
            badges: {
              en: ['0–100 km/h: 6.0 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,0 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,0 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.9,
            badges: {
              en: ['340 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['340 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['340 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 9.4,
            badges: {
              en: ['Torsen LSD + 1,205 kg Lightness', 'Sharp Turn-In • Wet-Grip LSD'],
              de: ['Torsen-Sperre + 1.205 kg', 'Messerscharf & gute Traktion'],
              ru: ['Самоблок Torsen + 1 205 кг', 'Острый вход и зацеп в дождь']
            }
          },
          brakingPerformance: {
            score: 9.2,
            badges: {
              en: ['100–0 km/h: 33.2 m', '380 mm Alcon 4-Pot Calipers'],
              de: ['100–0 km/h: 33,2 m', '380 mm Alcon 4-Kolben-Anlage'],
              ru: ['100–0 км/ч: 33,2 м', '380 мм Alcon 4-поршневые']
            }
          },
          efficiencyFuel: {
            score: 4.4,
            badges: {
              en: ['7.4 L/100km', 'Light 1.6L Efficiency'],
              de: ['7,4 L/100km', 'Sparsamer 1.6L Turbo'],
              ru: ['7,4 л/100 км', 'Экономичный 1.6 турбо']
            }
          },
          taxInsuranceNorm: {
            score: 5.8,
            badges: {
              en: ['Low 1.6L Tax • Euro 6', 'High 263 HP GTi Insurance'],
              de: ['Niedrige 1.6-Steuer • Euro 6', 'Teure GTi-Versicherung'],
              ru: ['Малый налог 1,6 • Euro 6', 'Дорогая страховка GTi']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~40,000 km · 3 yrs', action: { en: 'Iridium Performance Spark Plugs & Ignition Coils Check', de: 'Sport-Zündkerzen wechseln & Zündspulen prüfen', ru: 'Спортивные свечи зажигания и проверка катушек' }, cost: '€180–280' },
                { when: '~60,000 km · 4 yrs', action: { en: 'MCM 6-Speed + Torsen LSD Gearbox Oil Change', de: 'Getriebe- & Torsen-Sperren-Öl wechseln', ru: 'Замена масла в КПП с блокировкой Torsen' }, cost: '€150–240' }
              ],
              critical: [
                { when: '60–100k km · Wear', action: { en: '380 mm Alcon Two-Piece Front Brake Discs & Caliper Pistons', de: '380 mm Alcon-Sportbremsscheiben vorn & Bremssattelkolben', ru: 'Передние составные диски Alcon 380 мм и поршни суппортов' }, cost: '€1,100–1,650', risk: { en: 'Seized aluminium caliper pistons & warped discs', de: 'Festgehende Bremssattelkolben & rubbelnde Scheiben', ru: 'Заклинивание поршней суппорта и биение дисков' }, damage: '€2,000–2,800' },
                { when: '90–140k km · 6–10 yrs', action: { en: 'Intake Valve Carbon Cleaning & High-Pressure Fuel Pump (HPFP)', de: 'Einlassventile entkoken & Hochdruckpumpe (HDP) prüfen', ru: 'Чистка клапанов от нагара и проверка ТНВД' }, cost: '€450–900', risk: { en: 'Boost cuts, misfires & cold-start hesitation', de: 'Zündaussetzer, Ladedruck-Abbruch & Kaltstartprobleme', ru: 'Пропуски зажигания и падение давления наддува' }, damage: '€1,200–1,800' }
              ]
            },
            score: 2.8,
            badges: {
              en: ['€1,000+ 380 mm Front Discs', '19" Performance Tyres & 10k Oil'],
              de: ['Über 1.000 € für 380-mm-Bremsen', 'Teure 19-Zoll-Reifen & Wartung'],
              ru: ['Тормозные диски 380 мм >€1000', 'Дорогие 19" шины и частая замена масла']
            }
          },
          depreciationResale: {
            score: 7.9,
            badges: {
              en: ['Final Pure-ICE GTi', '2019 Collector Status'],
              de: ['Letzter Verbrenner-GTi', '2019er Sammlerstatus'],
              ru: ['Последний бенз. GTi', 'Редкий 2019 год']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: { frontSide: true, side: true, sideRear: true },
  paints: [
    { name: 'Pearlescent White', code: 'KWE', hex: '#eef1f5', glow: 'rgba(238, 241, 245, 0.16)' },
    { name: 'Perla Nera Black', code: 'KTV', hex: '#17191e', glow: 'rgba(64, 74, 88, 0.18)' },
    { name: 'Bianca White', code: 'EWP', hex: '#f5f6f8', glow: 'rgba(245, 246, 248, 0.16)' },
    { name: 'Artense Grey', code: 'KCA', hex: '#9ea5ad', glow: 'rgba(158, 165, 173, 0.16)' },
    { name: 'Hurricane Grey', code: 'VL', hex: '#4f555c', glow: 'rgba(79, 85, 92, 0.18)' },
    { name: 'Ultimate Red', code: 'EGD', hex: '#c71d28', glow: 'rgba(199, 29, 40, 0.22)', isDefault: true },
    { name: 'Magnetic Blue', code: 'EGQ', hex: '#1c539e', glow: 'rgba(28, 83, 158, 0.2)' },
    { name: 'Coupe Franche (Red / Black)', code: 'KTV-EGD', hex: '#961923', glow: 'rgba(199, 29, 40, 0.22)' }
  ],
  engineDates: {
    '1.6-thp-263': '09/2018–12/2020'
  },
  inDepth: {
    defaultEngineId: '1.6-thp-263',
    defaultGroupKey: 'petrol-turbo',
    engineCosts: {
      '1.6-thp-263': { group: 'petrol-turbo', avgFuelL100: 8.3, fuelPrice: 1.75, tax: 168, ins: 920, service: 490 }
    },
    groups: {
      'petrol-turbo': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average (Chassis)', note: 'Hot-dip galvanized T9 shell resists rust well; track-driven front bushes & discs wear faster' },
            { source: 'ADAC Pannenstatistik', value: 'Solid (Strict Oil Care)', note: 'Late EP6FADTXR Mahle forged-piston engine avoids early Prince timing failures if serviced every 8–10k km' },
            { source: 'WhatCar? Survey', value: '91.8% Reliability', note: 'Reliable mechanical core; high running costs stem from 380 mm Alcon brakes, 19" tyres & coil/plug upkeep' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich (Karosserie)', note: 'Vollverzinkte T9-Karosserie sehr rostresistent; Vorderachslager & Bremsscheiben leiden bei sportlicher Gangart' },
            { source: 'ADAC Pannenstatistik', value: 'Solide (Ölwechsel-Pflicht)', note: 'Später EP6FADTXR mit Mahle-Schmiedekolben deutlich haltbarer als frühe THP-Motoren bei 8–10-Tkm-Intervallen' },
            { source: 'WhatCar? Umfrage', value: '91,8 % Zuverlässigkeit', note: 'Robuste Grundsubstanz; hohe Kosten entstehen vor allem durch 380-mm-Alcon-Bremsen, 19-Zöller & Zündspulen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего (кузов)', note: 'Оцинкованный кузов T9 не ржавеет; при активной езде быстрее изнашиваются передние сайлентблоки и диски' },
            { source: 'ADAC Pannenstatistik', value: 'Хорошо (при частой замене масла)', note: 'Поздний мотор EP6FADTXR с коваными поршнями Mahle избежал ранних проблем цепи при ТО каждые 8–10 тыс. км' },
            { source: 'Рейтинг WhatCar?', value: '91,8% надёжности', note: 'Механика выносливая; главные траты связаны с тормозами Alcon 380 мм, шинами 19" и расходом на катушки/свечи' }
          ]
        },
        extendedChecks: {
          en: [
            'Measure the outer lip on the two-piece 380 mm Alcon front brake discs and inspect caliper dust boots for heat cracking.',
            'Verify 8,000–10,000 km 0W-30/5W-30 synthetic oil invoices and listen on a cold start for timing-chain tensioner rattle.',
            'Test tight full-throttle corner exits to confirm smooth Torsen LSD lock-up with zero clunking or pulling under braking.',
            'Inspect rear brake discs for rust scoring and verify smooth BSI electronics (infotainment, parking sensors, A/C condenser).'
          ],
          de: [
            'Randgrat und Verschleiß der zweiteiligen 380-mm-Alcon-Bremsscheiben vorn messen und Staubmanschetten der Sättel auf Hitzerisse prüfen.',
            'Ölwechsel-Belege im 8.000–10.000-km-Rhythmus prüfen und beim Kaltstart auf ruhigen Lauf des Kettenspanners achten.',
            'Beim Herausbeschleunigen aus engen Kurven sauber greifende Torsen-Sperre ohne Schlagen oder Ziehen beim Bremsen testen.',
            'Hintere Bremsscheiben auf Rostriefen kontrollieren und BSI-Elektronik (Touchscreen, Parksensoren, Klima) vollständig testen.'
          ],
          ru: [
            'Замерить выработку составных передних дисков Alcon 380 мм и осмотреть пыльники 4-поршневых суппортов на трещины от перегрева.',
            'Проверить заказ-наряды на замену масла каждые 8–10 тыс. км и послушать холодный пуск на отсутствие стука натяжителя цепи.',
            'В резком разгоне на выходе из поворота оценить плавную работу самоблока Torsen без ударов и уводов при торможении.',
            'Осмотреть задние тормозные диски на ржавчину и проверить работу мультимедиа, парктроников и кондиционера.'
          ]
        },
        savingsNote: {
          en: 'Light 1,205 kg kerb weight keeps fuel use reasonable (~8.3 L/100 km), though two-piece 380 mm front rotors (€1,000+) and 19" Michelin tyres raise yearly upkeep.',
          de: 'Dank 1.205 kg Leergewicht bleibt der Verbrauch moderat (~8,3 L/100 km), doch 380-mm-Alcon-Scheiben (>1.000 €) und 19"-Reifen erhöhen die Unterhaltskosten.',
          ru: 'Малая масса (1 205 кг) сдерживает расход (~8,3 л/100 км), но составные тормозные диски 380 мм (>€1 000) и шины 19" повышают годовые траты.'
        },
        market: {
          supplyDemand: {
            en: 'Low European supply, especially unmodified 2017–2020 facelift examples with complete Peugeot Sport service history.',
            de: 'Geringes Angebot auf dem Markt — besonders unverbastelte 2017–2020 Facelift-Modelle mit lückenloser Historie sind rar.',
            ru: 'Предложение невелико; ухоженные рестайлинговые экземпляры 2017–2020 гг. без чип-тюнинга встречаются редко и быстро уходят.'
          },
          sweetSpot: {
            en: '2016–2018 GTi 270 by Peugeot Sport (pre-OPF sound, Torsen LSD, 380 mm brakes) with 60,000–110,000 km (€16,500–€20,500).',
            de: '2016–2018 GTi 270 by Peugeot Sport (ohne OPF, mit Torsen-Sperre & 380-mm-Bremse), 60.000–110.000 km (16.500–20.500 €).',
            ru: '2016–2018 GTi 270 by Peugeot Sport (до установки OPF, с Torsen и 380 мм тормозами) с пробегом 60–110 тыс. км (€16 500–20 500).'
          },
          outlook3to5yr: {
            en: 'Strong collector floor (~€14,500–€17,500 in 3–5 yrs) as the final pure-petrol, manual-only Peugeot Sport GTi.',
            de: 'Sehr stabiler Restwert (ca. 14.500–17.500 € in 3–5 Jahren) als letzter reiner Verbrenner-GTi mit Schaltgetriebe von Peugeot Sport.',
            ru: 'Высокий уровень остаточной цены (€14 500–17 500 через 3–5 лет) как последний чисто бензиновый GTi на механике от Peugeot Sport.'
          }
        },
        watchoutExtra: {
          en: [
            'Replacement two-piece 380 mm front brake rotors & pads cost €1,000–€1,400 for parts alone; never confuse them with standard 250 HP single-piece brakes.',
            'Direct-injection intake valves accumulate carbon by 80,000–100,000 km, and high-pressure fuel pumps dislike low-octane 95 RON fuel.'
          ],
          de: [
            'Zweiteilige 380-mm-Bremsscheiben vorn kosten samt Belägen oft 1.000–1.400 € nur an Material — deutlich teurer als beim 250-PS-Basismodell.',
            'Einlassventile verkoken ab 80.000–100.000 km durch Direkteinspritzung; die Hochdruckpumpe verlangt zwingend 98-Oktan-Kraftstoff.'
          ],
          ru: [
            'Замена составных передних дисков 380 мм с колодками обходится в €1 000–1 400 только за детали — намного дороже обычной версии 250 л.с.',
            'К 80–100 тыс. км впускные клапаны требуют чистки от нагара (прямой впрыск), а ТНВД чувствителен к топливу ниже АИ-98.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE GTi Lineup (T9)', de: 'EU / DE GTi-Modellvarianten (T9)', ru: 'Европейские версии GTi (T9)' },
      sectionHint: { en: 'Hardware differences are huge — 270 & 263 add Torsen LSD and 380 mm Alcon brakes', de: 'Große Technik-Unterschiede — 270 & 263 bringen Torsen-Sperre und 380-mm-Alcon-Bremsen', ru: 'Большая разница по железу — версии 270 и 263 получили самоблок Torsen и тормоза Alcon 380 мм' },
      faceliftTitle: { en: '2017/2018 Facelift (T9 II) Upgrades', de: 'Facelift-Upgrades 2017/2018 (T9 II)', ru: 'Обновления рестайлинга 2017/2018 (T9 II)' },
      faceliftKicker: { en: '2017/2018 Refresh', de: 'Facelift 2017/2018', ru: 'Рестайлинг 2017/2018' },
      trims: [
        {
          id: 'gti-250',
          tierClass: 'tier-bronze',
          tier: { en: 'Entry GTi', de: 'Einstiegs-GTi', ru: 'Базовый GTi' },
          name: { en: 'GTi 250', de: 'GTi 250', ru: 'GTi 250' },
          delta: { en: '-€2,200 – €3,200', de: '-2.200 – 3.200 €', ru: '-€2 200 – €3 200' },
          isSweetSpot: false,
          summary: {
            en: 'Pre-facelift 250 HP spec without Torsen LSD or 380 mm Alcon brakes; lower running costs.',
            de: 'Vorfacelift-Version mit 250 PS ohne Torsen-Sperre und 380-mm-Alcon-Bremse — günstiger im Unterhalt.',
            ru: 'Дорестайлинговая версия на 250 л.с. без самоблока Torsen и тормозов 380 мм — дешевле в содержании.'
          },
          highlights: {
            en: ['18" Diamant alloys & standard 330 mm brakes', 'Open differential (no Torsen LSD)', 'Half-leather sport seats & 250 HP tune'],
            de: ['18"-Diamant-Felgen & 330-mm-Serienbremse', 'Offenes Differential (ohne Torsen-Sperre)', 'Teilleder-Sportsitze & 250-PS-Abstimmung'],
            ru: ['Диски 18" Diamant и тормоза 330 мм', 'Свободный дифференциал (без Torsen)', 'Спортивные кресла из полукожи и 250 л.с.']
          }
        },
        {
          id: 'gti-270',
          tierClass: 'tier-gold',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'GTi 270 by Peugeot Sport', de: 'GTi 270 by Peugeot Sport', ru: 'GTi 270 by Peugeot Sport' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'Purist driver sweet spot — mechanical Torsen LSD, 380 mm Alcon brakes, bucket seats & pre-OPF bark.',
            de: 'Fahrer-Empfehlung — mechanische Torsen-Sperre, 380-mm-Alcon-Bremse, Schalensitze & ungefilterter Klang.',
            ru: 'Лучший выбор для драйва — механический самоблок Torsen, тормоза Alcon 380 мм, ковши и звук без OPF.'
          },
          highlights: {
            en: ['Torsen helical LSD & 380 mm Alcon 4-pot brakes', '19" Carbone19 forged alloys & bucket seats', '272 HP pre-OPF Euro 6b calibration'],
            de: ['Torsen-Sperrdifferential & 380-mm-Alcon-4-Kolben', '19"-Carbone19-Schmiedefelgen & Schalensitze', '272 PS Euro 6b ohne OPF-Filter'],
            ru: ['Самоблок Torsen и 4-поршневые Alcon 380 мм', 'Кованые диски 19" Carbone19 и ковши', '272 л.с. (Euro 6b, без сажевого фильтра OPF)']
          }
        },
        {
          id: 'gti-263-opf',
          tierClass: 'tier-diamond',
          tier: { en: 'Final OPF Spec', de: 'Späte OPF-Serie', ru: 'Финальная OPF' },
          name: { en: 'GTi 263 (2018+ OPF)', de: 'GTi 263 (2018+ OPF)', ru: 'GTi 263 (2018+ OPF)' },
          delta: { en: '+€1,800 – €3,000', de: '+1.800 – 3.000 €', ru: '+€1 800 – €3 000' },
          isSweetSpot: false,
          summary: {
            en: 'Newest 2018–2020 Euro 6d-TEMP cars keeping full Peugeot Sport chassis hardware plus CarPlay.',
            de: 'Jüngste 2018–2020er Baujahre (Euro 6d-TEMP) mit voller Peugeot-Sport-Hardware und modernem Infotainment.',
            ru: 'Самые свежие авто 2018–2020 гг. (Euro 6d-TEMP) с полным шасси Peugeot Sport и мультимедиа с CarPlay.'
          },
          highlights: {
            en: ['Retains Torsen LSD, 380 mm Alcons & 19" forged wheels', 'Euro 6d-TEMP with petrol particulate filter (OPF)', 'Updated capacitive NAC screen + CarPlay/Android Auto'],
            de: ['Behält Torsen-Sperre, 380-mm-Alcon & 19"-Schmiederäder', 'Euro 6d-TEMP mit Otto-Partikelfilter (OPF)', 'Schnelleres NAC-Display inkl. CarPlay & Android Auto'],
            ru: ['Сохраняет Torsen, тормоза 380 мм и ковку 19"', 'Экокласс Euro 6d-TEMP с фильтром OPF', 'Обновлённый экран NAC с CarPlay и Android Auto']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Mechanical Torsen Helical LSD', de: 'Mechanisches Torsen-Sperrdifferential', ru: 'Механический самоблок Torsen' }, vals: ['no', 'std', 'std'] },
        { feature: { en: '380 mm Alcon 4-Piston Front Brakes', de: '380-mm-Alcon-4-Kolben-Bremsanlage', ru: 'Передние тормоза Alcon 380 мм (4 поршня)' }, vals: ['no', 'std', 'std'] },
        { feature: { en: '19" Lightweight Carbone19 Alloys', de: '19"-Leichtmetall-Schmiedefelgen Carbone19', ru: 'Кованые диски 19" Carbone19' }, vals: ['no', 'std', 'std'] },
        { feature: { en: 'Peugeot Sport Alcantara Bucket Seats', de: 'Peugeot Sport Alcantara-Schalensitze', ru: 'Спортивные ковши Alcantara' }, vals: ['no', 'std', 'std'] },
        { feature: { en: 'Full-LED Headlights & Dynamic Indicators', de: 'Voll-LED-Scheinwerfer & Laufblinker', ru: 'Полностью светодиодные фары' }, vals: ['std', 'std', 'std'] },
        { feature: { en: 'Coupe Franche Two-Tone Paint Option', de: 'Coupe-Franche-Zweifarblackierung', ru: 'Двухцветный окрас Coupe Franche' }, vals: ['no', 'opt', 'opt'] },
        { feature: { en: 'Capacitive NAC + Apple CarPlay / Android Auto', de: 'Kapazitives NAC inkl. CarPlay / Android Auto', ru: 'Экран NAC с CarPlay / Android Auto' }, vals: ['no', 'opt', 'std'] },
        { feature: { en: 'Panoramic Glass Roof / Reversing Camera', de: 'Panorama-Glasdach / Rückfahrkamera', ru: 'Панорамная крыша / камера заднего вида' }, vals: ['opt', 'opt', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Signature Peugeot i-Cockpit pairs a tiny 350 mm flat-bottom wheel with high-set dials — adjust seat height before judging rim sightlines.',
          'Alcantara/TEP sport buckets on 270/263 trims hold tightly in corners and hide wear better than full-leather bolsters.',
          'Clean minimalist center stack moves climate controls into the 9.7" touchscreen; 420 L boot stays family-usable.'
        ],
        de: [
          'Typisches Peugeot i-Cockpit mit kleinem, tief gesetztem Lenkrad und hoch platziertem Tacho — Sitzposition sorgfältig einstellen.',
          'Alcantara-Schalensitze der 270/263-Versionen bieten top Seitenhalt und altern unempfindlicher als Volllederwangen.',
          'Aufgeräumte Mittelkonsole integriert die Klima in den 9,7"-Touchscreen; der 420-Liter-Kofferraum bleibt voll alltagstauglich.'
        ],
        ru: [
          'Фирменная архитектура i-Cockpit с компактным рулём и приборами поверх обода — перед покупкой настройте посадку под свой рост.',
          'Ковши из алькантары и кожзама на версиях 270/263 отлично держат в поворотах и меньше затираются на боковинах.',
          'Минималистичная консоль перенесла климат в экран 9,7"; при этом багажник на 420 л сохраняет практичность семейного хэтча.'
        ]
      },
      cabinByPowertrain: {
        conventional: {
          en: 'Every 308 GTi comes exclusively with a 6-speed manual aluminium-topped gear knob, red-stitched dash & door trims, Driver Sport Pack button (red gauges + sharper throttle), and a 420 L flat-floor boot.',
          de: 'Jeder 308 GTi bietet serienmäßig das 6-Gang-Schaltgetriebe mit Alu-Schaltknauf, rote Kontrastnähte, die Driver-Sport-Pack-Taste (rote Instrumente & direktere Gasannahme) sowie 420 Liter Kofferraum.',
          ru: 'Каждый 308 GTi комплектуется только 6-ступенчатой МКПП с алюминиевым набалдашником, красной прострочкой салона, кнопкой Driver Sport Pack (красная приборка и острее отклик газа) и багажником 420 л.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2017/2018 facelift introduces a sharper vertical grille, new front bumper intakes, and revised 3-claw LED taillights.',
          'Replaces slow resistive SMEG+ screen with capacitive TomTom 3D NAC infotainment supporting Apple CarPlay & Android Auto.',
          'Adds Driver Attention Alert, Active Blind Spot Monitoring, and automatic high-beam assist on late T9 II cars.',
          '2018+ GTi 263 adds an exhaust OPF to meet Euro 6d-TEMP (slightly quieter exhaust note, 340 Nm torque intact).'
        ],
        de: [
          'Facelift 2017/2018 bringt steileren Kühlergrill, größere Lufteinlässe vorn und dunkler gefasste 3-Krallen-LED-Rückleuchten.',
          'Träges SMEG+-Display wird durch das reaktionsschnelle NAC-Infotainment mit TomTom-3D-Navi, CarPlay und Android Auto ersetzt.',
          'Späte T9-II-Baujahre ergänzen Spurhaltewarner, Totwinkelassistent und Fernlichtautomatik.',
          'Ab 2018 erhält der GTi 263 einen Otto-Partikelfilter (Euro 6d-TEMP): etwas leiserer Klang bei vollen 340 Nm Drehmoment.'
        ],
        ru: [
          'Рестайлинг 2017/2018 освежил решётку радиатора, передний бампер и фирменные задние фонари с тремя LED-полосами.',
          'Медлительная система SMEG+ заменена на быстрый экран NAC с 3D-навигацией TomTom, Apple CarPlay и Android Auto.',
          'Появились расширенные ассистенты: контроль полосы, мониторинг слепых зон и автоматический дальний свет.',
          'С 2018 года версия GTi 263 получила фильтр OPF под нормы Euro 6d-TEMP — чуть тише выхлоп, но те же 340 Н·м тяги.'
        ]
      }
    }
  }
});