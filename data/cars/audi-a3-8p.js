// AutoDuel Vehicle Data — audi-a3-8p
registerAutoDuelVehicle({
  roster: {
    id: 'audi-a3-8p',
    number: '14',
    carType: 'hatchback',
    gridOrder: 14,
    gridLabel: 'Audi A3 (8P)',
    yearMake: '2003-2013 AUDI',
    shortTitle: 'A3 (8P)',
    fullName: '2003-2013 Audi A3 Sportback (8P)',
    rarityClass: 'rarity-common',
    drivetrain: 'FWD',
    image: 'assets/audi-a3-8p.webp',
    defaultEngineId: '2.0-tdi-140',
    sharedBuyerFit: {
      cards: {
        a38pCabinBenchmark: {
          en: 'You want premium compact build quality: Soft-touch materials and solid Audi switchgear still feel upmarket for the price.',
          de: 'Du willst Premium-Haptik im Kompaktformat: Soft-Touch-Cockpit und solide Schalter wirken bis heute hochwertig.',
          ru: 'Ты ценишь премиальное качество в компакт-классе: Мягкий пластик и чёткие кнопки до сих пор ощущаются дорого.'
        },
        a38pCompactAgile: {
          en: 'You want a compact footprint with multi-link poise: Easy 4.29 m parking paired with composed Autobahn stability.',
          de: 'Du willst handliche Maße mit Mehrlenker-Stabilität: Kompakte 4,29 m Länge treffen auf ruhigen Geradeauslauf.',
          ru: 'Тебе нужен компактный размер и устойчивость: Длина 4,29 м удобна в городе, а многорычажка стабильна на трассе.'
        },
        a38pMpiBulletproof: {
          en: 'You want foolproof old-school simplicity: The 8-valve 1.6 MPI avoids turbochargers, direct injection, and timing chains.',
          de: 'Du willst unverwüstliche Einfachheit: Der klassische 1.6 MPI verzichtet auf Turbo, Direkteinspritzung und Steuerkette.',
          ru: 'Тебе нужна максимальная простота: Старый добрый 1.6 MPI обходится без турбины, прямого впрыска и цепи ГРМ.'
        },
        a38pFsiNoTurbo: {
          en: 'You want naturally aspirated direct injection: Smooth linear throttle response with no turbocharger or boost hoses.',
          de: 'Du willst einen Saugmotor ohne Turbo-Technik: Gleichmäßiges Ansprechverhalten ohne Turbolader oder Ladeluftschläuche.',
          ru: 'Тебе нужен атмосферный мотор без турбины: Ровный отклик на газ без турбокомпрессора и патрубков наддува.'
        },
        a38pTfsiPunch: {
          en: 'You want brisk turbo acceleration: Punchy low-end torque and refined delivery make highway merging effortless.',
          de: 'Du willst spritzigen Turbo-Durchzug: Kräftiges Drehmoment aus dem Keller sorgt für souveräne Zwischensprints.',
          ru: 'Тебе нужна бодрая турбо-тяга: Уверенный подхват с низов делает обгоны и перестроения лёгкими.'
        },
        a38pTdiDurability: {
          en: 'You cover serious motorway miles: Strong low-end TDI torque eats up long distances with ~5 L/100km economy.',
          de: 'Du fährst viele Autobahn-Kilometer: Kräftiges TDI-Drehmoment kombiniert langen Atem mit ~5 L/100km Verbrauch.',
          ru: 'Ты много ездишь по трассе: Уверенный дизельный момент сочетается с расходом около 5 л/100 км на больших пробегах.'
        },
        a38pChainOilRisk: {
          en: 'You want zero timing-chain drama: Pre-2012 chain-driven TFSI engines need documented tensioner and chain replacement proof.',
          de: 'Du willst kein Steuerketten-Risiko: Frühe Ketten-TFSI (vor 2012) brauchen einen klaren Nachweis über erneuerte Kette und Spanner.',
          ru: 'Ты не хочешь проблем с цепью ГРМ: Ранние цепные TFSI (до 2012 г.) требуют подтверждённой замены цепи и натяжителя.'
        },
        a38p18TfsiOilRisk: {
          en: 'You want zero oil-burning or chain drama: Early 1.8 TFSI (EA888 Gen 2) engines carry costly piston-ring and tensioner risks unless rebuilt.',
          de: 'Du willst keinen Ölverbrauch oder Kettenschaden: Frühe 1.8 TFSI (EA888 Gen 2) haben teure Kolbenring- und Spanner-Risiken ohne Umbau.',
          ru: 'Ты не хочешь масложора и проблем с цепью: Ранние 1.8 TFSI (EA888 Gen 2) склонны к расходу масла и износу натяжителя без переборки.'
        },
        a38pDryDsgCare: {
          en: 'You sit in heavy stop-and-go traffic with an automatic: The 7-speed dry-clutch DSG wears clutches and mechatronics faster in cities.',
          de: 'Du stehst oft im Stadt-Stau mit Automatik: Das trockene 7-Gang-DSG verschleißt Kupplungen und Mechatronik im Stop-and-Go schneller.',
          ru: 'Ты часто стоишь в пробках на автомате: Сухая 7-DSG быстрее изнашивает сцепления и мехатроник в плотном городе.'
        },
        a38pWetDsgFluid: {
          en: 'You skip 60,000 km gearbox servicing: Optional 6-speed wet-clutch DSG units require strict fluid and filter changes to stay smooth.',
          de: 'Du willst keinen DSG-Service alle 60.000 km: Das nasse 6-Gang-DSG verlangt pünktliche Öl- und Filterwechsel für saubere Schaltvorgänge.',
          ru: 'Ты не хочешь тратиться на ТО коробки каждые 60 тыс. км: Мокрая 6-DSG требует регулярной замены масла и фильтра.'
        },
        a38pSlow90HpPace: {
          en: 'You want brisk motorway overtaking or an automatic: The 90 HP tune is manual-only and feels modest on fast highway climbs.',
          de: 'Du willst flinke Überholmanöver oder Automatik: Die 90-PS-Basis gibt es nur als 5-Gang-Schalter mit gemächlichem Durchzug.',
          ru: 'Тебе нужна бодрая динамика или автомат: Версия 90 л.с. шла только с 5-ступенчатой механикой и едет весьма спокойно.'
        },
        a38pDatedInfotainment: {
          en: 'You expect modern screen tech: Older RNS-E navigation and optional Bluetooth feel dated next to newer hatchbacks.',
          de: 'Du erwartest moderne Infotainment-Technik: Altes RNS-E-Navi und damaliges Bluetooth wirken heute spürbar überholt.',
          ru: 'Тебе нужна современная мультимедиа: Старая навигация RNS-E и опциональный Bluetooth сегодня выглядят устаревшими.'
        },
        a38pSmallBoot: {
          en: 'You need big family luggage capacity: The 370 L boot (302 L on Quattro) and snug rear legroom fall behind larger hatchbacks.',
          de: 'Du brauchst großen Familien-Kofferraum: 370 L (nur 302 L beim Quattro) und knapper Fond sind nichts für sperriges Gepäck.',
          ru: 'Тебе нужен большой семейный багажник: Объём 370 л (и 302 л у Quattro) уступает более крупным хэтчбекам.'
        },
        a38pHighRevNa: {
          en: 'You want brisk motorway overtaking: Modest non-turbo torque requires downshifts on steep hills and highway merges.',
          de: 'Du willst souveräne Autobahn-Überholmanöver: Ohne Turbo verlangen die Saugmotoren am Berg rechtzeitiges Runterschalten.',
          ru: 'Ты любишь быстрые обгоны на трассе: Без турбины атмосферным моторам не хватает запаса на подъёмах.'
        },
        a38pCabinWear: {
          en: 'You want scratch-free switch trim: Soft-touch coatings on window switches and climate buttons peel with age.',
          de: 'Du willst makellose Schalter ohne Abnutzung: Der Softlack an Fensterhebern und Klimatasten blättert im Alter gern ab.',
          ru: 'Ты не хочешь потёртых кнопок: Покрытие софт-тач на кнопках стеклоподъёмников и климата со временем стирается.'
        },
        a38p140PdHeadRisk: {
          en: 'You want hassle-free diesel reliability: Pre-2007 2.0 TDI PD 140 HP models risk porous cylinder heads and oil-pump hex-shaft wear.',
          de: 'Du willst einen sorgenfreien Diesel: Frühe 2.0 TDI PD (140 PS, vor 2007) bergen Risiken bei Zylinderkopf-Rissen und Ölpumpen-Mitnehmer.',
          ru: 'Ты хочешь беспроблемный дизель: Ранний 2.0 TDI PD (140 л.с., до 2007 г.) имеет риски трещин ГБЦ и износа шестигранника маслонасоса.'
        },
        a38p170PdPiezoRisk: {
          en: 'You want hassle-free diesel reliability: Early 2.0 TDI PD 170 HP models use failure-prone Siemens piezo injectors unless recall-replaced.',
          de: 'Du willst einen sorgenfreien Diesel: Frühe 2.0 TDI PD (170 PS) nutzen anfällige Siemens-Piezo-Injektoren ohne nachgewiesenen Rückruf.',
          ru: 'Ты хочешь беспроблемный дизель: Ранний 2.0 TDI PD (170 л.с.) оснащён капризными пьезофорсунками Siemens без замены по отзыву.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'A well-built compact Audi for shorter commutes — pick the simple 1.6 MPI for lowest risk if modest pace suits you.',
          de: 'Ein hochwertig verarbeiteter Kompakt-Audi — der simple 1.6 MPI ist ideal für Kurzstrecken, wenn dir gemächliches Tempo reicht.',
          ru: 'Добротный компактный Audi для города — простой 1.6 MPI идеален для коротких поездок при спокойном темпе.'
        },
        ideal: [
          'a38pMpiBulletproof',
          'a38pCabinBenchmark',
          'a38pCompactAgile',
          'globalPetrolCityZones'
        ],
        skip: ['a38pSmallBoot', 'a38pHighRevNa', 'a38pDatedInfotainment', 'a38pCabinWear']
      },
      'turbo-petrol': {
        summary: {
          en: 'A refined, punchy compact hatchback — only buy with documented timing chain, tensioner, or piston rebuild proof.',
          de: 'Ein kultivierter, spritziger Kompakter — nur kaufen, wenn Steuerkette, Spanner bzw. Kolbenringe nachweislich gemacht sind.',
          ru: 'Бодрый и качественный хэтчбек — покупать только при наличии чеков на замену цепи, натяжителя или поршневой.'
        },
        ideal: ['a38pTfsiPunch', 'a38pCabinBenchmark', 'a38pCompactAgile', 'globalPetrolCityZones'],
        skip: ['a38pChainOilRisk', 'a38pDryDsgCare', 'a38pSmallBoot', 'a38pCabinWear']
      },
      'diesel-cr': {
        summary: {
          en: 'A frugal, refined premium commuter — choose 2008+ Common-Rail 2.0 TDI or legendary 1.9 TDI for strong highway endurance.',
          de: 'Ein sparsamer, kultivierter Premium-Pendler — am besten als 2008+ Common-Rail 2.0 TDI oder unverwüstlicher 1.9 TDI.',
          ru: 'Экономичный и тихий премиум-хэтчбек для трассы — лучше всего брать 2.0 TDI Common-Rail (с 2008 г.) или 1.9 TDI.'
        },
        ideal: ['a38pTdiDurability', 'a38pCabinBenchmark', 'a38pCompactAgile', 'globalDieselLongRange'],
        skip: ['globalDieselShortTripRisk', 'a38pSmallBoot', 'a38pWetDsgFluid', 'a38pCabinWear']
      },
      'diesel-pd': {
        summary: {
          en: 'Punchy early Pumpe-Düse torque, but strictly inspect cylinder head or recall injector history — later Common-Rail models are safer.',
          de: 'Kräftiger Pumpe-Düse-Durchzug, aber Zylinderkopf bzw. Injektor-Rückruf genau prüfen — spätere Common-Rail sind sicherer.',
          ru: 'Резвый ранний дизель PD, но нужна строгая проверка ГБЦ или отзыва по форсункам — версии Common-Rail надёжнее.'
        },
        ideal: ['a38pTdiDurability', 'a38pCabinBenchmark', 'a38pCompactAgile', 'globalDieselLongRange'],
        skip: ['a38p140PdHeadRisk', 'globalDieselShortTripRisk', 'a38pSmallBoot', 'a38pWetDsgFluid']
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Galvanized Shell • Clean Cabin Trim — Watch Front Subframe & Sill Edges',
          strengths: [
            'Galvanized Shell • Clean Cabin Trim keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Check lower door seams, front fender lips, and front steel subframe for corrosion.',
            'Watch Front Subframe & Sill Edges.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Verzinkte Karosserie • Solider Innenraum — Vorderachse & Schwellerkanten prüfen',
          strengths: [
            'Verzinkte Karosserie • Solider Innenraum hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Untere Türfalze, vordere Kotflügelkanten und vorderen Achsträger auf Rost prüfen.',
            'Vorderachse & Schwellerkanten prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Оцинкованный кузов • Крепкий салон — Проверить подрамник и кромки порогов',
          strengths: [
            'Оцинкованный кузов • Крепкий салон надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Проверьте нижние кромки дверей, передние крылья и передний подрамник на ржавчину.',
            'Проверить подрамник и кромки порогов.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Benchmark Compact Cabin Materials',
          strengths: [
            'Benchmark Compact Cabin Materials ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Benchmark soft-touch dash quality for its era; soft-touch window switches can peel with age.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Klassenbeste Materialanmutung',
          strengths: [
            'Klassenbeste Materialanmutung sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Vorbildliche Materialqualität; Softlack an Fensterhebern nutzt sich mit den Jahren ab.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Эталонные материалы отделки в классе',
          strengths: [
            'Эталонные материалы отделки в классе обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Эталонное качество материалов для тех лет, но софт-тач на кнопках со временем стирается.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '4.29 m Compact Length • 10.7 m Turn',
          strengths: [
            '4.29 m Compact Length • 10.7 m Turn makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Compact 4.29 m body and 10.7 m turning circle, though wide rear C-pillars limit shoulder checks.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '4,29 m Kompaktmaß • 10,7 m Wendekreis',
          strengths: [
            '4,29 m Kompaktmaß • 10,7 m Wendekreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Kompakte 4,29 m Länge und 10,7 m Wendekreis, aber breite C-Säulen nach schräg hinten.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Компактные 4,29 м • Разворот 10,7 м',
          strengths: [
            'Компактные 4,29 м • Разворот 10,7 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Компактная длина 4,29 м и разворот 10,7 м, но широкие стойки ухудшают обзор назад.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 4★ (2003 Standard) — 6 Airbags + ESP Standard',
          strengths: [
            'Euro NCAP 4★ (2003 Standard) provides solid passive crash protection for its class and era.',
            '6 Airbags + ESP Standard standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 4★ (2003-Norm) — 6 Airbags + ESP serienmäßig',
          strengths: [
            'Euro NCAP 4★ (2003-Norm) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '6 Airbags + ESP serienmäßig serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 4★ (стандарт 2003) — 6 подушек + ESP в базе',
          strengths: [
            'Euro NCAP 4★ (стандарт 2003) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + ESP в базе входят в оснащение большинства версий.'
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
          headline: 'Supportive Front Seats • Low Driving Pos.',
          strengths: [
            'Supportive Front Seats • Low Driving Pos. keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Average Rear Legroom for Adults.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Gute Sportsitze • Tiefe Sitzposition',
          strengths: [
            'Gute Sportsitze • Tiefe Sitzposition sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Knieraum im Fond klassenüblich.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Удобные кресла • Низкая посадка',
          strengths: [
            'Удобные кресла • Низкая посадка обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Средний запас места сзади.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '370 L Boot (1,100 L Folded)',
          strengths: [
            'Practical 370L boot (1,100L folded; Quattro models drop to 302L).',
            'Quattro Models Drop to 302 L improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '370 L Kofferraum (1.100 L umgeklappt)',
          strengths: [
            'Praktischer Nutzwert: 370 L Kofferraum (1.100 L umgeklappt; Quattro nur 302 L).',
            'Quattro-Modelle nur 302 L erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 370 л (1100 л слож.)',
          strengths: [
            'Практичный объём: багажник 370 л (до 1 100 л; у версий Quattro — 302 л).',
            'У Quattro — 302 л добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Multi-Link Rear • Crisp Turn-In',
          strengths: [
            'Multi-link rear suspension gives predictable, crisp turn-in and strong highway stability.',
            'Predictable Front-Drive Balance.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Mehrlenker-Hinterachse • Präzises Einlenken',
          strengths: [
            'Mehrlenker-Hinterachse sorgt für präzises Einlenken und ruhigen Geradeauslauf.',
            'Sicheres, neutrales Fahrverhalten.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Многорычажка сзади • Точный вход',
          strengths: [
            'Многорычажная задняя подвеска даёт точные реакции и устойчивость на скорости.',
            'Предсказуемый баланс шасси.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 36.4 m — Strong Pedal Bite • All-Round Discs',
          strengths: [
            '100–0 km/h: 36.4 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 36,4 m — Guter Druckpunkt • 4× Scheibenbremsen',
          strengths: [
            '100–0 km/h: 36,4 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 36,4 м — Чёткая педаль • Диски по кругу',
          strengths: [
            '100–0 км/ч: 36,4 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '520–560 kg Payload • 75 kg Roof • 1,200–1,600 kg Braked Towing',
          strengths: [
            '520–560 kg Payload • 75 kg Roof and 1,200–1,600 kg Braked Towing handle typical cargo and trailer needs.'
          ],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '520–560 kg Zuladung • 75 kg Dachlast • 1.200–1.600 kg Anhängelast gebremst',
          strengths: [
            '520–560 kg Zuladung • 75 kg Dachlast und 1.200–1.600 kg Anhängelast gebremst bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 520–560 кг • Крыша 75 кг • Прицеп до 1200–1600 кг',
          strengths: [
            'Нагрузка 520–560 кг • Крыша 75 кг и Прицеп до 1200–1600 кг закрывают повседневные задачи по загрузке.'
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
          headline: 'Strong Audi Badge Resale Demand',
          strengths: [
            'Strong Audi Badge Resale Demand helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Hohe Nachfrage nach Audi-Modellen',
          strengths: [
            'Hohe Nachfrage nach Audi-Modellen sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Высокая ликвидность бренда Audi',
          strengths: [
            'Высокая ликвидность бренда Audi поддерживает стабильный спрос на вторичном рынке.',
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
      'petrol-dry-dsg': {
        transmissionDriveline: {
          en: {
            headline: '6-MT Solid • 7-DSG Dry-Clutch Care — Smooth Low-Speed Shifts',
            strengths: [
              '6-MT Solid • 7-DSG Dry-Clutch Care matches this powertrain well for everyday driving.',
              'Single-turbo design avoids supercharger clutch & piston issues.'
            ],
            watchouts: [
              'The 7-speed dry-clutch DSG wears clutches and mechatronics faster in heavy stop-and-go traffic.',
              'Juddering when creeping uphill or reversing signals a worn clutch pack.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '6-Gang solide • 7-DSG Kupplung prüfen — Leichte Schaltbarkeit',
            strengths: [
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.',
              'Bewährte Schaltmechanik und haltbare Zahnräder bei rechtzeitigem Ölservice.'
            ],
            watchouts: [
              '6-Gang solide • 7-DSG Kupplung prüfen passt gut zur Motorcharakteristik im Alltag.',
              'Das trockene 7-Gang-DSG verschleißt Kupplungen und Mechatronik im Stop-and-Go schneller.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '6-МКПП надёжна • 7-DSG с сухим сцеплением — Чёткие переключения',
            strengths: [
              '6-МКПП надёжна • 7-DSG с сухим сцеплением хорошо сочетается с данным двигателем в повседневной езде.',
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
            ],
            watchouts: [
              'Сухая 7-DSG быстрее изнашивает сцепления и мехатроник в плотных пробках.',
              'Дёрганье при медленном трогании в горку или задним ходом говорит об износе пакета сцеплений.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheap Routine Parts — Chain Replacement ~€850',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Chain Replacement ~€850.',
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige Verschleißteile — Steuerkette ca. 850 €',
            strengths: [
              'Günstige Verschleißteile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Steuerkette ca. 850 €.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Недорогие расходники — Замена цепи ~€850',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Замена цепи ~€850.',
              'Возрастной износ сайлентблоков подвески, тормозов и выхлопной системы требует плановых ежегодных трат.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-5mt': {
        transmissionDriveline: {
          en: {
            headline: '5-MT Simple & Tough — Watch Early Pinion Bearing Whine',
            strengths: [
              '5-MT Simple & Tough matches this powertrain well for everyday driving.',
              '5-speed gearbox bearing whine at high mileage.'
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
            headline: 'Einfaches 5-Gang-Getriebe — Auf Lagergeräusche im 5. Gang achten',
            strengths: [
              'Einfaches 5-Gang-Getriebe passt gut zur Motorcharakteristik im Alltag.',
              'Bewährte Schaltmechanik und haltbare Zahnräder bei rechtzeitigem Ölservice.'
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
            headline: 'Простая 5-МКПП — Проверить гул подшипников на 5-й',
            strengths: [
              'Простая 5-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Гул подшипников 5-МКПП на больших пробегах.'
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
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Lowest Repair Bills in Class — Timing Belt ~€450',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Timing Belt ~€450.', 'Lowest Repair Bills in Class.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Niedrigste Reparaturkosten — Zahnriemen ca. 450 €',
            strengths: [
              'Niedrigste Reparaturkosten hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Zahnriemen ca. 450 €.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Минимальные счета на СТО — Ремень ГРМ ~€450',
            strengths: [
              'Минимальные счета на СТО помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Ремень ГРМ ~€450.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-6mt': {
        transmissionDriveline: {
          en: {
            headline: '6-Speed Manual Durable — Good Shift Precision',
            strengths: [
              '6-Speed Manual Durable matches this powertrain well for everyday driving.',
              '6-speed gearbox keeps highway RPM down.'
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
            headline: '6-Gang-Schaltgetriebe haltbar — Präzise Schaltung',
            strengths: [
              '6-Gang-Schaltgetriebe haltbar passt gut zur Motorcharakteristik im Alltag.',
              '6-Gang-Getriebe senkt Autobahndrehzahl.'
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
            headline: 'Надёжная 6-МКПП — Чёткий ход кулисы',
            strengths: [
              'Надёжная 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              '6-ступенчатая коробка снижает обороты на трассе.'
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
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'NOx Sensor ~€450 — Chain Kit ~€850',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Chain Kit ~€850.', 'NOx Sensor ~€450.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'NOx-Sensor ca. 450 € — Kettensatz ca. 850 €',
            strengths: [
              'NOx-Sensor ca. 450 € hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Kettensatz ca. 850 €.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Датчик NOx ~€450 — Цепь ГРМ ~€850',
            strengths: [
              'Датчик NOx ~€450 помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Цепь ГРМ ~€850.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: '6-MT & 6-AT Aisin Both Solid — Change 6-AT Fluid Every 60k km',
            strengths: [
              '6-MT & 6-AT Aisin Both Solid matches this powertrain well for everyday driving.',
              'No turbocharger and available with tough Aisin 6-speed auto.'
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
            headline: '6-Gang & 6-Stufen-Wandler solide — Automatiköl alle 60 Tkm wechseln',
            strengths: [
              '6-Gang & 6-Stufen-Wandler solide passt gut zur Motorcharakteristik im Alltag.',
              'Bewährte Schaltmechanik und haltbare Zahnräder bei rechtzeitigem Ölservice.'
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
            headline: '6-МКПП и 6-АКПП Aisin надёжны — Менять масло в АКПП раз в 60 тыс.',
            strengths: [
              '6-МКПП и 6-АКПП Aisin надёжны хорошо сочетается с данным двигателем в повседневной езде.',
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
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
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Belt + Chain Link Service — Cam Follower Cheap (€45)',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Cam Follower Cheap (€45).'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Belt + Chain Link Service.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Zahnriemen + kurze Kette hinten — Pumpenstößel günstig (45 €)',
            strengths: [
              'Zahnriemen + kurze Kette hinten hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Pumpenstößel günstig (45 €).'
            ],
            watchouts: [
              'Auch bei einfacher Technik altern nach 10+ Jahren Schläuche, Fahrwerksbuchsen, Bremsen und Reifen.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень + задняя цепь — Толкатель ТНВД дешёвый (€45)',
            strengths: [
              'Ремень + задняя цепь помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Толкатель ТНВД дешёвый (€45).'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-wet-dsg': {
        transmissionDriveline: {
          en: {
            headline: 'Wet 6-DSG & 6-MT Both Tough — Service DSG Oil Every 60,000 km',
            strengths: [
              'Wet 6-DSG & 6-MT Both Tough matches this powertrain well for everyday driving.',
              '200 hp / 280 Nm with tough wet-clutch 6-DSG or 6-MT.'
            ],
            watchouts: [
              'The wet-clutch 6-speed DSG needs strict 60,000 km oil and filter changes to keep shifts smooth.',
              'Mechatronic faults show up as jerky low-speed shifts or a flashing gear indicator.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: 'Nasses 6-DSG & 6-Gang sehr robust — DSG-Ölwechsel alle 60.000 km',
            strengths: [
              'Nasses 6-DSG & 6-Gang sehr robust passt gut zur Motorcharakteristik im Alltag.',
              '200 PS mit standfestem 6-Gang-Nass-DSG.'
            ],
            watchouts: [
              'Das nasse 6-Gang-DSG braucht strikte Öl- und Filterwechsel alle 60.000 km für saubere Schaltvorgänge.',
              'Mechatronik-Fehler zeigen sich durch ruckige Schaltungen bei niedrigem Tempo oder blinkende Ganganzeige.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: 'Мокрая 6-DSG и 6-МКПП крепки — Масло в 6-DSG менять раз в 60 тыс.',
            strengths: [
              'Мокрая 6-DSG и 6-МКПП крепки хорошо сочетается с данным двигателем в повседневной езде.',
              '200 л.с. в паре с надёжной мокрой 6-DSG.'
            ],
            watchouts: [
              'Мокрой 6-DSG нужна строгая замена масла и фильтра каждые 60 000 км для плавных переключений.',
              'Неисправность мехатроника проявляется рывками на малой скорости или мигающим индикатором передачи.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'DSG Oil Service ~€280 — Chain/Oil Fix Can Be Costly',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Chain/Oil Fix Can Be Costly.', 'DSG Oil Service ~€280.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'DSG-Ölservice ca. 280 € — Ketten-/Kolben-Reparatur teuer',
            strengths: [
              'DSG-Ölservice ca. 280 € hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Ketten-/Kolben-Reparatur teuer.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Замена масла DSG ~€280 — Ремонт цепи/поршневой дорог',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Ремонт цепи/поршневой дорог.', 'Замена масла DSG ~€280.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-5mt': {
        transmissionDriveline: {
          en: {
            headline: '5-MT Durable & Simple — Solid-Mass or Long-Life Clutch',
            strengths: [
              '5-MT Durable & Simple matches this powertrain well for everyday driving.',
              'Proven shift linkage and durable gearsets when transmission fluid is maintained.'
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
            headline: 'Robustes 5-Gang-Schaltgetriebe — Haltbare Kupplung',
            strengths: [
              'Robustes 5-Gang-Schaltgetriebe passt gut zur Motorcharakteristik im Alltag.',
              'Bewährte Schaltmechanik und haltbare Zahnräder bei rechtzeitigem Ölservice.'
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
            headline: 'Надёжная 5-МКПП — Долговечное сцепление',
            strengths: [
              'Надёжная 5-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
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
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Long 210k km Belt Interval — Injector Replacement ~€450 Each',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Injector Replacement ~€450 Each.', 'Long 210k km Belt Interval.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: '210 Tkm Zahnriemen-Intervall — Injektor ca. 450 € / Stück',
            strengths: [
              '210 Tkm Zahnriemen-Intervall hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Injektor ca. 450 € / Stück.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень ГРМ на 210 тыс. км — Форсунка ~€450 за шт.',
            strengths: [
              'Ремень ГРМ на 210 тыс. км помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Форсунка ~€450 за шт.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-dry-dsg': {
        transmissionDriveline: {
          en: {
            headline: '5-MT Solid • 7-DSG Dry-Clutch Care — 250 Nm At 7-DSG Limit',
            strengths: [
              '5-MT Solid • 7-DSG Dry-Clutch Care matches this powertrain well for everyday driving.',
              'Proven shift linkage and durable gearsets when transmission fluid is maintained.'
            ],
            watchouts: [
              'The 7-speed dry-clutch DSG wears clutches and mechatronics faster in heavy stop-and-go traffic.',
              'Juddering when creeping uphill or reversing signals a worn clutch pack.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '5-Gang solide • 7-DSG prüfen — 250 Nm am 7-DSG-Limit',
            strengths: [
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.',
              '7-Gang-Trocken-DSG am Drehmomentlimit.'
            ],
            watchouts: [
              '5-Gang solide • 7-DSG prüfen passt gut zur Motorcharakteristik im Alltag.',
              'Das trockene 7-Gang-DSG verschleißt Kupplungen und Mechatronik im Stop-and-Go schneller.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '5-МКПП надёжна • 7-DSG на пределе — 250 Н·м — предел сухой DSG',
            strengths: [
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
            ],
            watchouts: [
              '5-МКПП надёжна • 7-DSG на пределе хорошо сочетается с данным двигателем в повседневной езде.',
              'Сухая 7-DSG быстрее изнашивает сцепления и мехатроник в плотных пробках.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: '210k km Belt Interval — Injectors/EGR Main Cost',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Injectors/EGR Main Cost.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: '210 Tkm Zahnriemen — Injektoren/AGR Hauptkosten',
            strengths: [
              '210 Tkm Zahnriemen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Injektoren/AGR Hauptkosten.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень раз в 210 тыс. км — Основные траты — форсунки/EGR',
            strengths: [
              'Ремень раз в 210 тыс. км помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Основные траты — форсунки/EGR.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-wet-dsg': {
        transmissionDriveline: {
          en: {
            headline: '5-MT & Wet 6-DSG Both Tough — Flywheel Wear After 180k km',
            strengths: [
              '5-MT & Wet 6-DSG Both Tough matches this powertrain well for everyday driving.',
              'Crisp shift feel and well-matched ratios keep everyday driving composed and predictable.'
            ],
            watchouts: [
              'The wet-clutch 6-speed DSG needs strict 60,000 km oil and filter changes to keep shifts smooth.',
              'Mechatronic faults show up as jerky low-speed shifts or a flashing gear indicator.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '5-Gang & nasses 6-DSG robust — ZMS-Verschleiß ab ca. 180 Tkm',
            strengths: [
              '5-Gang & nasses 6-DSG robust passt gut zur Motorcharakteristik im Alltag.',
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.'
            ],
            watchouts: [
              'Das nasse 6-Gang-DSG braucht strikte Öl- und Filterwechsel alle 60.000 km für saubere Schaltvorgänge.',
              'Mechatronik-Fehler zeigen sich durch ruckige Schaltungen bei niedrigem Tempo oder blinkende Ganganzeige.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '5-МКПП и мокрая 6-DSG очень крепки — Маховик к 180 тыс. км',
            strengths: [
              '5-МКПП и мокрая 6-DSG очень крепки хорошо сочетается с данным двигателем в повседневной езде.',
              'Маховик к 180 тыс. км.'
            ],
            watchouts: [
              'Мокрой 6-DSG нужна строгая замена масла и фильтра каждые 60 000 км для плавных переключений.',
              'Неисправность мехатроника проявляется рывками на малой скорости или мигающим индикатором передачи.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Mature Electronics • Few ECU Glitches',
            strengths: [
              'Mature Electronics • Few ECU Glitches keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Watch Door Wiring Loom & Window Motors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Ausgereifte Elektronik • Solide Steuergeräte',
            strengths: [
              'Ausgereifte Elektronik • Solide Steuergeräte sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Türkabelbaum & Fensterheber prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Зрелая электрика • Стабильные блоки',
            strengths: [
              'Зрелая электрика • Стабильные блоки упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Проверить жгуты дверей и стеклоподъёмники.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Composed Multi-Link Ride',
            strengths: [
              'Composed Multi-Link Ride delivers pleasant everyday composure.',
              'Quiet Cabin (Facelift Insulation).'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ausgewogenes Mehrlenker-Fahrwerk',
            strengths: [
              'Ausgewogenes Mehrlenker-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Geräuschdämmung (Facelift).'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная многорычажная подвеска',
            strengths: [
              'Собранная многорычажная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон после рестайлинга.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheap Parts Everywhere — No Piezo Injectors to Fail',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Überall günstige Teile — Robuste PD-Elemente',
            strengths: [
              'Überall günstige Teile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Robuste PD-Elemente.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дешёвые запчасти везде — Нет капризных пьезофорсунок',
            strengths: [
              'Дешёвые запчасти везде помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Нет капризных пьезофорсунок.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedSpecs: {
      rustProtection: '@rustVeryGood',
      suspensionWear: '@suspMultiLink',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLowMod',
      rideTuning: { en: 'Firm-Planted German', de: 'Straff-Satt (Deutsch)', ru: 'Плотная / Собранная' },
      highwayNoise: { en: '~68 dB · Quiet Premium', de: '~68 dB · Ruhig (Premium)', ru: '~68 дБ · Тихий премиум' },
      cabinMaterials: { en: 'Best-in-Class Soft-Touch', de: 'Klassenbeste Haptik', ru: 'Эталонный мягкий салон' },
      controls: '@physButtons',
      turningCircle: '10.7 m',
      visibility: { en: 'Clear Upright · Good', de: 'Gute Rundumsicht', ru: 'Хороший круговой обзор' },
      euroNcap: '★★★★☆ (2003)',
      safetyTech: { en: '✓ ESP · ✓ 6 Airbags', de: '✓ ESP · ✓ 6 Airbags', ru: '✓ ESP · ✓ 6 подушек' },
      rearRoom: { en: 'Tight-ish · Tall Tunnel', de: 'Eher knapp · Hoher Tunnel', ru: 'Тесновато · Высокий тоннель' },
      isofixEntry: { en: '✓ 2× ISOFIX · Sportback 5d', de: '✓ 2× ISOFIX · Sportback 5T', ru: '✓ 2× ISOFIX · Sportback 5дв' },
      bootVolume: '370 L / 1,100 L',
      seatUtility: { en: '✓ 60/40 Split Fold', de: '✓ 60/40 teilbar', ru: '✓ Спинка 60/40' },
      payloadRoof: '540 kg · 75 kg',
      driveline: { en: 'FWD / Opt. Haldex Quattro', de: 'Front / Opt. Haldex-Quattro', ru: 'Передний / Опц. Quattro' },
      chassisFeel: { en: 'Poised · Tight & Accurate', de: 'Satt · Präzise & neutral', ru: 'Собранное · Точное' },
      tractionDiff: { en: 'FWD · ESP (Opt. Quattro)', de: 'Front · ESP (Opt. Quattro)', ru: 'Передний · ESP (Опц. Quattro)' },
      braking1000: '~36.2 m',
      brakeSetup: '@discs4',
      valueRetention: '@retHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'VW-Group 5/6-MT · Dry 7-DSG (DQ200) or Wet 6-DSG (DQ250)', de: 'VW-Konzern 5/6-Gang · Trockenes 7-DSG (DQ200) / Nasses 6-DSG (DQ250)', ru: '5/6-МКПП · Сухой 7-DSG (DQ200) или мокрый 6-DSG (DQ250)' } }, { k: 'shiftQuality', v: { en: 'Crisp Manual · Wet 6-DSG Tough (60k Oil); Dry 7-DSG Needs Care', de: 'Exakter Schalter · Nasses 6-DSG robust (60 Tkm Öl); DQ200 sensibel', ru: 'Чёткая МКПП · Мокрый 6-DSG крепкий; сухой DQ200 капризнее' } }], note: { en: 'Manuals and wet 6-speed DSG (DQ250, 60k oil changes) are solid; treat dry-clutch 7-speed DSG (DQ200 on ≤250 Nm engines) with caution.', de: 'Handschalter und nasses 6-Gang-DSG (60.000-km-Ölwechsel) sind robust; beim trockenen 7-Gang-DSG (DQ200 bis 250 Nm) genau auf Ruckeln achten.', ru: 'МКПП и мокрый 6-DSG (масло каждые 60 000 км) надёжны; к сухому 7-DSG (DQ200 до 250 Н·м) относитесь осторожнее.' } }, clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'PQ35 Platform · Independent Multi-Link Rear (Firm S-Line)', de: 'PQ35-Plattform · Mehrlenker-Hinterachse (S-Line sehr straff)', ru: 'Платформа PQ35 · Многорычажка сзади (S-Line жёстче)' } },
            { k: 'seatSupport', v: { en: 'Firm Supportive German Seats · Great Long-Trip Posture', de: 'Straffe ergonomische Sitze · Top Langstrecken-Halt', ru: 'Плотные немецкие кресла · Отличная посадка' } }
          ],
          note: { en: 'Standard/Attraction suspension rides nicely; Ambition & S-Line trims are noticeably firm over rough city streets.', de: 'Serienfahrwerk federt ausgewogen; Ambition und S-Line sind auf schlechten Stadtstraßen spürbar hart.', ru: 'Базовая подвеска комфортна; версии Ambition и S-Line ощутимо жёстче на городских стыках.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~68 dB(A) at 130 km/h (Quiet Premium Isolation)', de: '~68 dB(A) bei 130 km/h (Leise Premium-Dämmung)', ru: '~68 дБ(А) при 130 км/ч (Тихая премиум-изоляция)' } },
            { k: 'acousticGlass', v: { en: 'Thick Door Seals & Solid Bulkhead Soundproofing', de: 'Dicke Türdichtungen & solide Spritzwand-Dämmung', ru: 'Плотные уплотнители и качественная шумоизоляция' } }
          ],
          note: { en: 'Feels like a baby executive car on the Autobahn — quieter than Japanese and French compact rivals of the same era.', de: 'Wirkt auf der Autobahn eine Klasse höher — deutlich ruhiger als Kompakt-Rivalen gleicher Baujahre.', ru: 'На трассе ощущается классом выше — тише большинства одноклассников тех же лет.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashboardTrim', v: { en: 'Plush Soft-Touch Plastics · Knurled Aluminium Air Vents', de: 'Hochwertige Soft-Touch-Flächen · Alu-Lüftungsdüsen', ru: 'Дорогой мягкий пластик · Алюминиевые дефлекторы' } },
            { k: 'seatUpholstery', v: { en: 'Hard-Wearing Audi Cloth, Alcantara or Fine Nappa Leather', de: 'Robuster Stoff, Alcantara oder feines Nappa-Leder', ru: 'Износостойкая ткань, алькантара или кожа Nappa' } }
          ],
          note: { en: 'Benchmark compact interior of 2003–2012; switchgear and trim stay rattle-free well past 200,000 km.', de: 'Referenz-Innenraum der Kompaktklasse 2003–2012; klapperfrei und hochwertig auch weit über 200.000 km.', ru: 'Эталонный салон C-класса 2003–2012 годов — без скрипов и с отличной износостойкостью.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turnDiameter', v: { en: '10.7 m (Compact & City-Friendly)', de: '10,7 m (Handlich in der Stadt)', ru: '10,7 м (Удобный в городе)' } },
            { k: 'steeringType', v: { en: 'Electro-Mechanical Steering · Weighted & Accurate', de: 'Elektromechanische Lenkung · Präzise & ausgewogen', ru: 'Электромеханический руль · Точный и собранный' } }
          ],
          note: { en: 'Compact 4.29 m Sportback length and 10.7 m turning circle make tight urban parking effortless.', de: 'Kompakte 4,29 m Länge (Sportback) und 10,7 m Wendekreis machen Stadt-Parken mühelos.', ru: 'Длина 4,29 м и разворот 10,7 м делают парковку в тесных дворах очень простой.' }
        },
        visibility: {
          specs: [
            { k: 'allRoundView', v: { en: 'Clean Upright Glasshouse · Slim A-Pillars', de: 'Klare aufrechte Fensterflächen · Schlanke A-Säulen', ru: 'Чёткое остекление · Умеренные передние стойки' } },
            { k: 'rearView', v: { en: 'Square Hatchback Tail Easy to Judge', de: 'Steiles Heck gut abschätzbar', ru: 'Прямоугольная корма легко чувствуется' } }
          ],
          note: { en: 'Far better all-round visibility than modern high-beltline hatchbacks.', de: 'Deutlich bessere Rundumsicht als moderne Kompaktwagen mit hoher Gürtellinie.', ru: 'Обзорность заметно лучше, чем у современных хэтчбеков с узкими окнами.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'crashRating', v: { en: '4 Stars Euro NCAP (2003) · Solid Galvanized PQ35 Shell', de: '4 Sterne Euro NCAP (2003) · Solide PQ35-Karosserie', ru: '4 звезды Euro NCAP (2003) · Крепкий кузов PQ35' } },
            { k: 'bodyStructure', v: { en: '6 Standard Airbags + Laser-Welded Roof Seams', de: '6 Serien-Airbags + lasergeschweißte Dachnähte', ru: '6 подушек в базе + лазерная сварка кузова' } }
          ],
          note: { en: 'Tested under the older 2003 protocol; structurally sturdy with standard ESP and 6 airbags.', de: 'Nach dem älteren 2003er Protokoll getestet; strukturell sehr solide mit Serien-ESP und 6 Airbags.', ru: 'Испытан по протоколу 2003 года; жёсткий кузов с базовыми ESP и 6 подушками.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeSafety', v: { en: 'ESP, ASR, EDS Diff Lock & Hydraulic Brake Assist', de: 'ESP, ASR, EDS-Differentialsperre & Bremsassistent', ru: 'ESP, ASR, электронная блокировка EDS и Brake Assist' } },
            { k: 'driverAssists', v: { en: 'Optional Bi-Xenon, Park Assist & Hill-Hold (2008+ Facelift)', de: 'Optional Bi-Xenon, Parklenkassistent & Berganfahrhilfe (ab 2008)', ru: 'Опционально биксенон, автопарковщик и помощь в горку (2008+)' } }
          ],
          note: { en: '2008+ facelift models added LED daytime running lights, Hill-Hold, and optional self-parking.', de: 'Ab Facelift 2008 mit LED-Tagfahrlicht, Berganfahrassistent und optionalem Parklenkassistent.', ru: 'Рестайлинг 2008+ получил LED ДХО, помощь при старте в горку и опцию автопарковки.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'rearSpace', v: { en: 'Adequate for 2 Adults · Tall Central Quattro Tunnel', de: 'Ordentlich für 2 Erwachsene · Hoher Mitteltunnel', ru: 'Комфортно для двоих · Высокий центральный тоннель' } },
            { k: 'frontErgo', v: { en: 'Superb Driving Position · Wide Seat & Wheel Adjustment', de: 'Perfekte Fahrerposition · Großer Verstellbereich', ru: 'Образцовая посадка водителя с большим диапазоном регулировок' } }
          ],
          note: { en: 'Front ergonomics are class-leading; rear legroom is slightly tighter than a Civic or Golf Plus, best for two adults or kids.', de: 'Vorn erstklassige Ergonomie; hinten etwas knapper als im Civic, ideal für zwei Erwachsene oder Kinder.', ru: 'Спереди эргономика эталонная; сзади чуть теснее Civic, оптимально для двоих взрослых или детей.' }
        },
        isofixEntry: {
          specs: [
            { k: 'childSeats', v: { en: '2× Outer Rear ISOFIX (+ Optional Front Passenger ISOFIX)', de: '2× ISOFIX hinten (+ optional Beifahrersitz-ISOFIX)', ru: '2× ISOFIX сзади (+ опционально на переднем кресле)' } },
            { k: 'doorAccess', v: { en: '5-Door Sportback Strongly Recommended for Family Use', de: '5-Türer Sportback klar für Familien empfohlen', ru: '5-дверный Sportback намного удобнее для семьи' } }
          ],
          note: { en: 'Choose the 5-door Sportback over the 3-door if fitting child seats regularly.', de: 'Für regelmäßige Kindersitz-Nutzung unbedingt den 5-türigen Sportback wählen.', ru: 'Для частой установки детских кресел однозначно выбирайте 5-дверный Sportback.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootCapacity', v: { en: '370 L (Sportback) / 350 L (3-Door) · 1,100 L Folded', de: '370 L (Sportback) / 350 L (3-Türer) · 1.100 L umgeklappt', ru: '370 л (Sportback) / 350 л (3-дв.) · 1 100 л сложено' } },
            { k: 'loadingLip', v: { en: 'Square Neat Cargo Bay (Quattro Loses ~68 L Depth)', de: 'Sauber geschnittener Kofferraum (Quattro -68 L)', ru: 'Ровный аккуратный багажник (Quattro меньше на ~68 л)' } }
          ],
          note: { en: 'Practical everyday compact boot; note that Quattro AWD models have a higher boot floor (-68 L).', de: 'Alltagstauglicher Kompakt-Kofferraum; Quattro-Modelle haben durch das Heckdifferential einen höheren Ladeboden.', ru: 'Удобный багажник для города; у версий Quattro пол выше из-за заднего редуктора (-68 л).' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingSystem', v: { en: '✓ 60/40 Split-Fold Rear Seats (Slight Step When Folded)', de: '✓ 60/40 umklappbare Rückbank (leichte Stufe)', ru: '✓ Спинка 60/40 (небольшая ступенька при складывании)' } }
          ],
          note: { en: 'Simple 60/40 split fold with quality carpeted trim and sturdy tie-down hooks.', de: 'Solide 60/40-Umklappung mit hochwertiger Teppichauskleidung und stabilen Verzurrösen.', ru: 'Простое складывание 60/40, качественная обивка и крепкие петли для груза.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: { en: '~540 kg (520–560 kg Depending on Engine)', de: '~540 kg (520–560 kg je nach Motor)', ru: '~540 кг (520–560 кг в зависимости от мотора)' } },
            { k: 'roofLoad', v: { en: '75 kg Approved Dynamic Roof Load', de: '75 kg zugelassene Dachlast', ru: '75 кг допустимая нагрузка на крышу' } }
          ],
          note: { en: 'Impressive 540 kg payload for a compact hatch, plus up to 1,600 kg braked towing on 2.0 TDI models.', de: 'Starke 540 kg Zuladung für die Kompaktklasse und bis zu 1.600 kg Anhängelast beim 2.0 TDI.', ru: 'Отличный запас 540 кг для компактного хэтчбека и до 1 600 кг буксировки на 2.0 TDI.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'steeringFeel', v: { en: 'Direct, Well-Weighted Steering · Confident High-Speed Poise', de: 'Direkte, sauber gewichtete Lenkung · Sehr stabil bei Tempo', ru: 'Точный руль с приятным усилием · Уверенность на скорости' } },
            { k: 'cornering', v: { en: 'Independent Multi-Link Rear Keeps It Planted in Fast Sweeps', de: 'Mehrlenker-Hinterachse sorgt für sattes Kurvenverhalten', ru: 'Задняя многорычажка держит траекторию в быстрых поворотах' } }
          ],
          note: { en: 'Composed, secure German chassis that feels rock-solid at 180+ km/h on the Autobahn.', de: 'Sehr sicheres, sattes Fahrwerk, das auch bei 180+ km/h auf der Autobahn souverän liegt.', ru: 'Собранное немецкое шасси, уверенно стоящее на трассе даже на 180+ км/ч.' }
        },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retHigh', resaleDemand: '@demFast' }
    },
    sharedGearboxes: {
      'mq200-5mt-sc': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'MQ200 · Manual · Single Clutch', de: 'MQ200 · Schaltgetriebe · Kupplung', ru: 'MQ200 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ200 5-Speed Manual', de: 'VW/Audi MQ200 5-Gang-Schaltgetriebe', ru: '5-ст. МКПП VW/Audi MQ200' } }], note: { en: 'Simple mechanical 5-speed gearbox without a dual-mass flywheel.', de: 'Einfaches mechanisches 5-Gang-Getriebe ohne Zweimassenschwungrad.', ru: 'Простая 5-ст. механика без двухмассового маховика.' } }, clutchDmf: '@clutchSingle' } },
        dossier: {
          en: { headline: 'VW/Audi MQ200 5-Speed Manual — Simple & Cheap Single Clutch', strengths: ['No DMF or DSG mechatronic risk; affordable clutch replacement (€480–€700).'], watchouts: ['Listen for slight differential/pinion bearing hum on high-mileage cars.'], beforeYouBuy: ['Test quiet cruising in 5th gear at 90–110 km/h with light throttle.'] },
          de: { headline: 'VW/Audi MQ200 5-Gang-Getriebe — Einfach & günstig ohne ZMS', strengths: ['Kein ZMS- oder DSG-Risiko; günstiger Kupplungstausch (480–700 €).'], watchouts: ['Bei hohen Laufleistungen auf leichtes Lagergeräusch unter Teillast achten.'], beforeYouBuy: ['Im 5. Gang bei 90–110 km/h auf ruhigen Getriebelauf achten.'] },
          ru: { headline: 'Механика VW/Audi MQ200 5-МКПП — Простая и недорогая без ДММ', strengths: ['Нет риска ДММ и мехатроника DSG; замена сцепления €480–700.'], watchouts: ['На больших пробегах возможен лёгкий шум подшипников дифференциала.'], beforeYouBuy: ['Проверьте тишину на 5-й передаче на 90–110 км/ч под лёгким газом.'] }
        }
      },
      'mq250-5mt-dmf': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'MQ250 · Manual + DMF', de: 'MQ250 · Schaltgetriebe + ZMS', ru: 'MQ250 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ250 5-Speed Manual', de: 'VW/Audi MQ250 5-Gang-Schaltgetriebe', ru: '5-ст. МКПП VW/Audi MQ250' } }], note: { en: 'Tough 5-speed diesel manual paired with a dual-mass flywheel.', de: 'Robustes 5-Gang-Dieselgetriebe mit Zweimassenschwungrad.', ru: 'Крепкая 5-ст. дизельная механика с ДММ.' } }, clutchDmf: '@clutchDmf' } },
        dossier: {
          en: { headline: 'VW/Audi MQ250 5-MT — Tough Diesel Box, Watch DMF', strengths: ['Avoids DSG mechatronic repairs while handling 250 Nm TDI torque cleanly.'], watchouts: ['Dual-mass flywheel wears around 170k–220k km (€850–€1,250).'], beforeYouBuy: ['Listen for DMF rattle at idle and test 4th-gear pull from 1,800 rpm.'] },
          de: { headline: 'VW/Audi MQ250 5-Gang — Robustes Dieselgetriebe, ZMS prüfen', strengths: ['Kein DSG-Mechatronik-Risiko bei 250 Nm TDI-Drehmoment.'], watchouts: ['ZMS verschleißt ab ca. 170–220 Tkm (850–1.250 €).'], beforeYouBuy: ['Auf ZMS-Rasseln im Leerlauf und sauberen Kraftschluss im 4. Gang achten.'] },
          ru: { headline: 'Механика VW/Audi MQ250 5-МКПП — Крепкая коробка, контроль ДММ', strengths: ['Без рисков мехатроника DSG при тяге 250 Н·м.'], watchouts: ['ДММ изнашивается к 170–220 тыс. км (€850–1 250).'], beforeYouBuy: ['Послушайте стук ДММ на холостых и проверьте тягу на 4-й передаче.'] }
        }
      },
      'mq250-6mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ250 · Manual · Single Clutch', de: 'MQ250 · Schaltgetriebe · Kupplung', ru: 'MQ250 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ250 6-Speed Manual', de: 'VW/Audi MQ250 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП VW/Audi MQ250' } }], note: { en: 'Durable mechanical 6-speed gearbox with single-mass clutch.', de: 'Langlebiges mechanisches 6-Gang-Getriebe ohne ZMS.', ru: 'Надёжная 6-ст. механика с одномассовым сцеплением.' } }, clutchDmf: '@clutchSingle' } },
        dossier: {
          en: { headline: 'VW/Audi MQ250 6-Speed Manual — Reliable & Affordable', strengths: ['Zero DSG complexity and affordable clutch replacement (€520–€750).'], watchouts: ['Test cold 1→2 shifts on older urban examples.'], beforeYouBuy: ['Check smooth cold gear engagement and clutch bite point.'] },
          de: { headline: 'VW/Audi MQ250 6-Gang-Getriebe — Zuverlässig & günstig', strengths: ['Kein DSG-Risiko und bezahlbarer Kupplungswechsel (520–750 €).'], watchouts: ['Kalte Schaltvorgänge 1→2 bei Stadtfahrzeugen prüfen.'], beforeYouBuy: ['Kaltes Durchschalten und Druckpunkt der Kupplung testen.'] },
          ru: { headline: 'Механика VW/Audi MQ250 6-МКПП — Надёжная и недорогая', strengths: ['Без сложного робота DSG и с доступным сцеплением (€520–750).'], watchouts: ['Проверьте включение 1→2 на холодную.'], beforeYouBuy: ['Оцените чёткость переключений на холодную и момент схватывания сцепления.'] }
        }
      },
      'mq250-6mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ250 · Manual + DMF', de: 'MQ250 · Schaltgetriebe + ZMS', ru: 'MQ250 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ250 6-Speed Manual', de: 'VW/Audi MQ250 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП VW/Audi MQ250' } }], note: { en: 'Proven mechanical 6-speed gearbox paired with a dual-mass flywheel.', de: 'Bewährtes 6-Gang-Getriebe mit Zweimassenschwungrad.', ru: 'Проверенная 6-ст. механика с ДММ.' } }, clutchDmf: '@clutchDmf' } },
        dossier: {
          en: { headline: 'VW/Audi MQ250 6-MT — Solid Gearbox, Watch DMF', strengths: ['Mechanical reliability without dry-DSG mechatronic headaches.'], watchouts: ['Dual-mass flywheel wears around 160k–210k km (€900–€1,300).'], beforeYouBuy: ['Listen for DMF chatter at idle and test 4th-gear pull.'] },
          de: { headline: 'VW/Audi MQ250 6-Gang — Robust, ZMS im Blick behalten', strengths: ['Mechanische Zuverlässigkeit ohne trockenes DSG-Risiko.'], watchouts: ['ZMS verschleißt bei 160–210 Tkm (900–1.300 €).'], beforeYouBuy: ['Im Leerlauf auf ZMS-Rasseln und im 4. Gang auf Kupplungsrutschen testen.'] },
          ru: { headline: 'Механика VW/Audi MQ250 6-МКПП — Крепкая, контроль ДММ', strengths: ['Механическая надёжность без проблем сухого DSG.'], watchouts: ['ДММ изнашивается к 160–210 тыс. км (€900–1 300).'], beforeYouBuy: ['Послушайте маховик на холостых и проверьте тягу на 4-й передаче.'] }
        }
      },
      'mq350-6mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ350 · Manual + DMF', de: 'MQ350 · Schaltgetriebe + ZMS', ru: 'MQ350 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ350 6-Speed Manual', de: 'VW/Audi MQ350 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП VW/Audi MQ350' } }], note: { en: 'Overbuilt 6-speed gearbox for 280–350 Nm engines.', de: 'Verstärktes 6-Gang-Getriebe für 280–350 Nm.', ru: 'Усиленная 6-ст. механика под 280–350 Н·м.' } }, clutchDmf: '@clutchDmf' } },
        dossier: {
          en: { headline: 'Heavy-Duty MQ350 6-Speed Manual — Bulletproof Gearset, Watch DMF', strengths: ['Handles 350 Nm TDI and 2.0 TFSI torque effortlessly.'], watchouts: ['DMF and concentric slave cylinder wear around 160k–200k km (€1,000–€1,450).'], beforeYouBuy: ['Test full-throttle 4th-gear pull from 2,000 rpm and check clean pedal return.'] },
          de: { headline: 'Verstärktes MQ350 6-Gang-Getriebe — Sehr robust, ZMS prüfen', strengths: ['Verkraftet 350 Nm TDI- und 2.0-TFSI-Drehmoment mühelos.'], watchouts: ['ZMS und Ausrücklager werden bei 160–200 Tkm fällig (1.000–1.450 €).'], beforeYouBuy: ['Volllast im 4. Gang ab 2.000 U/min testen und Pedalrücklauf prüfen.'] },
          ru: { headline: 'Усиленная 6-ст. МКПП MQ350 — Очень крепкая, контроль ДММ', strengths: ['Легко держит тягу 2.0 TDI и 2.0 TFSI.'], watchouts: ['ДММ и выжимной служат 160–200 тыс. км (€1 000–1 450).'], beforeYouBuy: ['Проверьте сцепление на 4-й передаче с 2 000 об/мин.'] }
        }
      },
      'aisin-6at': {
        category: 'automatic',
        label: { en: '6-Speed Tiptronic', de: '6-Stufen-Tiptronic', ru: '6-ст. Tiptronic' },
        shortLabel: { en: '6-AT', de: '6-AT', ru: '6-АКПП' },
        subLabel: { en: 'Aisin 09G · Hydraulic Torque Converter', de: 'Aisin 09G · Wandlerautomatik', ru: 'Aisin 09G · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto6', clutchDmf: '@torqueConv' },
        subStatDeltas: { transmissionDriveline: { score: 8.2, badges: { en: ['Aisin 09G Torque-Converter 6-AT', 'Refresh ATF Every 60k km'], de: ['Aisin 09G 6-Wandler-AT', 'ATF-Wechsel alle 60 Tkm'], ru: ['Aisin 09G 6-АКПП', 'Замена ATF каждые 60 тыс.'] } } },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Aisin 09G 6-Speed Tiptronic Auto', de: 'Aisin 09G 6-Stufen-Tiptronic', ru: '6-ст. АКПП Aisin 09G Tiptronic' } }], note: { en: 'Conventional Aisin hydraulic automatic; change ATF every 60,000 km to keep valvebody solenoids smooth.', de: 'Klassische Aisin-Wandlerautomatik; alle 60.000 km Ölwechsel für saubere Schaltventile.', ru: 'Классическая АКПП Aisin; замена масла каждые 60 тыс. км для плавной работы гидроблока.' } }, clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: { headline: 'Aisin 09G 6-Speed Tiptronic — Smooth Torque Auto, Check Warm Shifts', strengths: ['Avoids early DSG clutch/mechatronic failures.'], watchouts: ['Valvebody solenoids flare on 2→3 / 3→4 when hot if lifetime ATF was never changed.'], beforeYouBuy: ['Drive 20+ minutes until fully hot and check smooth downshifts 4→3→2.'] },
          de: { headline: 'Aisin 09G 6-Stufen-Tiptronic — Solider Wandler, warm testen', strengths: ['Umgeht frühe DSG-Kupplungs- und Mechatronik-Probleme.'], watchouts: ['Ohne Ölwechsel neigt der Schieberkasten warm zu Schaltrucken (2→3).'], beforeYouBuy: ['Mindestens 20 Minuten warmfahren und sanftes Schalten prüfen.'] },
          ru: { headline: 'АКПП Aisin 09G Tiptronic — Надёжнее ранних DSG, проверять на горячую', strengths: ['Нет ранних поломок сцеплений и мехатроника DSG.'], watchouts: ['При отсутствии замены масла гидроблок пинается на горячую (2→3).'], beforeYouBuy: ['Прогрейте КПП в поездке 20 минут и проверьте плавность всех переключений.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Aisin 09G Tiptronic ATF drain-and-fill', de: 'Aisin 09G Tiptronic Getriebeölwechsel', ru: 'Замена масла ATF в АКПП Aisin 09G' }, cost: '€220–320' }] }
      },
      'dq200-7-dry': {
        category: 'automatic',
        label: { en: '7-Speed Dry S tronic', de: '7-Gang Trocken-S tronic', ru: '7-ст. Сухая S tronic' },
        shortLabel: { en: '7-DSG (Dry)', de: '7-DSG (Trocken)', ru: '7-DSG (Сух.)' },
        subLabel: { en: 'DQ200 · Dry Dual-Clutch', de: 'DQ200 · Trocken-Doppelkupplung', ru: 'DQ200 · Сухое двойное сцепление' },
        specOverrides: { gearbox: '@dsg7Dry', clutchDmf: '@dualClutchDry' },
        subStatDeltas: {
          transmissionDriveline: { score: 5.4, badges: { en: ['Early Dry 7-DSG (DQ200)', 'High Mechatronic & Clutch Risk'], de: ['Frühes Trocken-7-DSG (DQ200)', 'Hohes Mechatronik-Risiko'], ru: ['Ранний сухой 7-DSG (DQ200)', 'Высокий риск мехатроника'] } },
          maintenanceRepairCosts: { score: 5.6, badges: { en: ['€1.4k–€2.5k DQ200 Repair Risk', 'Prefer 6-MT on 8P'], de: ['1.400–2.500 € DQ200-Risiko', 'Schalter beim 8P sicherer'], ru: ['Риск ремонта €1.4–2.5k', 'Механика надёжнее на 8P'] } }
        },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Early 7-Speed Dry Dual-Clutch (DQ200)', de: 'Frühes 7-Gang Trocken-DSG (DQ200)', ru: 'Ранний 7-ст. сухой DSG (DQ200)' } }], note: { en: 'Early 2008–2012 DQ200 units are notorious for worn dry clutches and mechatronic pressure failures (€1,400–€2,500).', de: 'Frühe DQ200 (2008–2012) sind bekannt für Kupplungsrupfen und Mechatronik-Schäden (1.400–2.500 €).', ru: 'Ранние DQ200 2008–2012 гг. известны износом сухих сцеплений и поломками мехатроника (€1 400–2 500).' } }, clutchDmf: '@dualClutchDry' } },
        dossier: {
          en: { headline: 'Early Dry 7-Speed DQ200 — Major €1.4k–€2.5k Repair Watchout on 8P', strengths: ['Quick shifts and good fuel economy when healthy.'], watchouts: ['Early 8P-era DQ200 dry clutches and mechatronics frequently fail past 100k–150k km.'], beforeYouBuy: ['Creep slowly uphill in D1/D2 for clutch judder and check for mechatronic recall/repair invoices.'] },
          de: { headline: 'Frühes Trocken-7-DSG (DQ200) — Großes 1.400–2.500-€-Risiko beim 8P', strengths: ['Schnelle Schaltvorgänge und niedriger Verbrauch im intakten Zustand.'], watchouts: ['Frühe 8P-DQ200 neigen ab 100–150 Tkm zu Kupplungsverschleiß und Mechatronik-Ausfällen.'], beforeYouBuy: ['Langsam bergauf anrollen (Rupfen?) und nach Mechatronik-Rechnungen fragen.'] },
          ru: { headline: 'Ранняя сухая 7-ст. DSG (DQ200) — Серьёзный риск €1 400–2 500 на 8P', strengths: ['Быстрые переключения и экономичность на исправной коробке.'], watchouts: ['Ранние DQ200 поколения 8P часто требуют ремонта сцеплений и мехатроника к 100–150 тыс. км.'], beforeYouBuy: ['Проверьте плавный старт в горку на рывки и ищите чеки на ремонт мехатроника.'] }
        },
        repairGuideExtra: { critical: [{ when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'Early DQ200 dry clutch pack & mechatronic unit rebuild', de: 'Frühes DQ200 Kupplungssatz & Mechatronik-Überholung', ru: 'Замена сухого сцепления и ремонт мехатроника DQ200' }, cost: '€1,400–2,500', risk: { en: 'Loss of drive or flashing PRNDS fault', de: 'Kein Vortrieb / blinkende Ganganzeige', ru: 'Потеря тяги, авария КПП' }, damage: '€2,600–3,800' }] }
      },
      'dq250-6-wet': {
        category: 'automatic',
        label: { en: '6-Speed Wet S tronic', de: '6-Gang Nass-S tronic', ru: '6-ст. Мокрая S tronic' },
        shortLabel: { en: '6-DSG (Wet)', de: '6-DSG (Nass)', ru: '6-DSG (Мокр.)' },
        subLabel: { en: 'DQ250 · Wet Dual-Clutch + DMF', de: 'DQ250 · Nass-Doppelkupplung + ZMS', ru: 'DQ250 · Мокрое сцепление + ДММ' },
        specOverrides: { gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet' },
        subStatDeltas: {
          transmissionDriveline: { score: 7.4, badges: { en: ['Wet 6-DSG (DQ250)', 'Requires 60k DSG Oil History'], de: ['Nass-6-DSG (DQ250)', '60-Tkm-Ölwechsel nötig'], ru: ['Мокрый 6-DSG (DQ250)', 'Нужна замена масла 60 тыс.'] } },
          maintenanceRepairCosts: { score: 6.8, badges: { en: ['€280–€380 DSG Oil Every 60k km', 'Far Tougher Than Dry DQ200'], de: ['280–380 € DSG-Öl alle 60 Tkm', 'Viel robuster als DQ200'], ru: ['€280–€380 масло каждые 60 тыс.', 'Надёжнее сухого DQ200'] } }
        },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: '6-Speed Wet Dual-Clutch S tronic (DQ250)', de: '6-Gang Nass-Doppelkupplung S tronic (DQ250)', ru: '6-ст. мокрая РКПП S tronic (DQ250)' } }], note: { en: 'Oil-cooled wet 6-speed DSG — strong if 60,000 km fluid & filter changes were kept.', de: 'Ölgekühltes 6-Gang-Nass-DSG — robust bei regelmäßigem 60.000-km-Ölwechsel.', ru: 'Мокрая 6-ст. DSG — надёжна при регулярной замене масла каждые 60 тыс. км.' } }, clutchDmf: '@dualClutchWet' } },
        dossier: {
          en: { headline: 'Oil-Cooled Wet 6-Speed DQ250 — Tough 8P Automatic With 60k Service', strengths: ['Handles 320–350 Nm torque far better than dry DQ200.'], watchouts: ['Skipped 60,000 km oil changes cause valvebody wear; DMF also wears around 180k km.'], beforeYouBuy: ['Confirm 60k/120k/180k km DSG fluid invoices and smooth warm R→D shifts.'] },
          de: { headline: 'Ölgekühltes 6-Gang-Nass-DSG (DQ250) — Robust bei 60-Tkm-Pflege', strengths: ['Hält 320–350 Nm deutlich besser aus als das trockene DQ200.'], watchouts: ['Versäumte 60.000-km-Ölwechsel schaden der Mechatronik; ZMS altert ab 180 Tkm.'], beforeYouBuy: ['DSG-Ölwechsel-Rechnungen (alle 60 Tkm) und weiches R→D-Schalten prüfen.'] },
          ru: { headline: 'Мокрая 6-ст. S tronic (DQ250) — Крепкий автомат 8P при ТО 60 тыс.', strengths: ['Уверенно переваривает 320–350 Н·м в отличие от сухого DQ200.'], watchouts: ['Пропуски замены масла раз в 60 тыс. км бьют по мехатронику; ДММ ходит ~180 тыс. км.'], beforeYouBuy: ['Проверьте чеки на замену масла DSG каждые 60 тыс. км.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'DQ250 wet DSG oil & filter service', de: 'DQ250 Nass-DSG Öl- & Filterwechsel', ru: 'Замена масла и фильтра мокрого DSG (DQ250)' }, cost: '€280–380' }] }
      }
    },
    engines: [
      {
        id: '1.2-tfsi',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€6,700',
            specOverrides: { sprint0100: '10.8 s', topSpeed: '192 km/h', realWorldFuel: '6.4 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.2,
                badges: {
                  en: ['0–100 km/h: 10.8 s (DSG)', '192 km/h Top Speed'],
                  de: ['0–100 km/h: 10,8 s (DSG)', '192 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,8 s (DSG)', 'Макс. 192 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.0,
                badges: {
                  en: ['6.4 L/100km (DSG)'],
                  de: ['6,4 L/100km (DSG)'],
                  ru: ['6,4 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'turbo-petrol',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 105,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.2 TFSI (8P)',
        fullName: '2010 Audi A3 1.2 TFSI (8P)',
        engineBadge: '1.2L TFSI • 105 HP',
        engineSubLabel: {
          en: '1.2L Turbo Chain Petrol (11/2009–03/2013) • 6-MT / 7-DSG • 175 Nm • FWD',
          de: '1.2L TFSI Kettenmotor (11/2009–03/2013) • 6-Gang / 7-DSG • 175 Nm • FWD',
          ru: '1.2L TFSI цепной (11/2009–03/2013) • 6-МКПП / 7-DSG • 175 Н·м • FWD'
        },
        rarityLabel: {
          en: 'CITY TURBO',
          de: 'STADT-TURBO',
          ru: 'ГОРОДСКОЙ ТУРБО'
        },
        originalMsrp: {
          en: '€22,400 New',
          de: '22.400 € Neu',
          ru: '€22 400 новый'
        },
        estUsedPrice: '€5,900',
        perkLabel: {
          en: '✦ Low Road Tax • Punchy City Torque • Watch Early Timing Chain',
          de: '✦ Niedrige Steuer • Spritzig in der Stadt • Frühe Steuerkette prüfen',
          ru: '✦ Низкий налог • Тяга в городе • Проверить цепь ГРМ'
        },
        remarkablePositives: {
          en: [
            'Low fuel consumption in city driving',
            'Light front nose improves turn-in',
            'Cheap insurance & tax bracket'
          ],
          de: [
            'Sparsam im Stadtverkehr',
            'Leichte Vorderachse für agiles Einlenken',
            'Günstige Steuer- & Versicherungsklasse'
          ],
          ru: [
            'Экономичен в городе',
            'Лёгкий передок улучшает управляемость',
            'Низкий налог и страховка'
          ]
        },
        notableNegatives: {
          en: [
            'Known early timing chain stretch',
            'Optional 7-speed dry DSG needs care',
            'Runs out of puff above 130 km/h'
          ],
          de: [
            'Bekannte Probleme mit gelängter Steuerkette',
            '7-Gang-Trocken-DSG teils ruckelig',
            'Über 130 km/h wenig Reserven'
          ],
          ru: [
            'Риск растяжения цепи ГРМ на ранних авто',
            'Сухая 7-DSG требует внимания',
            'Слабоват на трассе выше 130 км/ч'
          ]
        },
        specOverrides: {
          engineName: { en: '1.2L I4 TFSI (Simplex Chain)', de: '1.2L Reihenvierzylinder TFSI (Kette)', ru: '1.2L R4 TFSI (Цепь EA111)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch', towingBraked: '1,200 kg',
          sprint0100: '10.6 s', topSpeed: '192 km/h', peakTorque: '175 Nm @ 1,550 rpm',
          passingPunch: { en: 'Lively Low-End City Pull', de: 'Spritzig in der Stadt', ru: 'Бодрый подхват в городе' },
          realWorldFuel: '6.2 L/100km', tankRange: '55 L (~885 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierLow', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 4.3,
            badges: {
              en: ['Updated Chain Kit Fixes Stretch', 'Watch Cold-Start Rattle'],
              de: ['Verstärkter Kettensatz löst Problem', 'Kaltstart-Rasseln prüfen'],
              ru: ['Усиленный комплект цепи решает вопрос', 'Слушать треск на холодную']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CBZB (EA111) · 1,197 cc' }, { k: 'architecture', v: { en: 'Inline-4 8V Aluminium · Small Turbo + Simplex Chain', de: 'Reihenvierzylinder 8V Alu · Kleiner Turbo + Simplex-Kette', ru: 'Рядный 4-цил. 8V алюминий · Турбо + тонкая цепь EA111' } }], note: { en: 'Frugal and punchy around town, but notorious for stretched EA111 simplex timing chains — verify updated chain kit receipt before buying.', de: 'Sparsam und spritzig in der Stadt, aber berüchtigt für gelängte EA111-Simplex-Steuerketten — Nachweis über Kettentausch zwingend prüfen.', ru: 'Экономичный и живой в городе, но известен растяжением тонкой цепи ГРМ EA111 — проверяйте историю её замены.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Thrifty Small Turbo — Early Timing Chain Stretch Pulls Reliability Down',
                lowScoreReasons: [
                  'Premature Timing Chain Stretch (Pre-2012): Narrow single-row chain and early tensioners often rattle and stretch between 60,000 and 110,000 km (€850–€1,200 repair; fatal if skipped).',
                  'Turbo Wastegate Actuator & Oil Dilution: Sticking wastegate linkages cause limp mode, while short-trip fuel dilution accelerates chain wear.'
                ],
                strengths: [
                  'Very light fuel consumption and low annual road tax in city/commuter use.',
                  'Can reach 180,000–220,000+ km once the updated Audi chain kit is fitted and oil is changed every 10,000–12,000 km.'
                ],
                watchouts: [
                  'Ignition coil/spark-plug lead corrosion and direct-injection valve carbon buildup past 100,000 km.',
                  'Strict 10,000–12,000 km synthetic oil intervals are essential; avoid 30,000 km LongLife schedules.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for a 2–3 second metallic chain rattle at startup.',
                  'Ask for invoices proving the upgraded Audi timing chain and tensioner kit were already installed.',
                  'Test smooth acceleration up to highway speed to verify zero wastegate hesitation or misfires.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 3–4 yrs',
                    action: 'Strict 10,000–12,000 km full-synthetic oil changes & spark plugs',
                    cost: '€150–€230',
                    ifIgnored: 'Extended oil intervals accelerate timing chain and turbo wear',
                    damageCost: '€1,300–€2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Inspect plastic coolant pump housing, hoses & PCV valve diaphragm',
                    cost: '€280–€480',
                    ifIgnored: 'Cracked plastic cooling parts cause sudden overheating',
                    damageCost: '€1,000–€2,000'
                  },
                  {
                    tier: 'orange',
                    km: '80,000–120,000 km / 6–9 yrs',
                    action: 'Timing chain stretch & tensioner failure — full timing chain & guide rail kit',
                    cost: '€850–€1,450',
                    ifIgnored: 'Jumped timing chain bends valves and wrecks top end',
                    damageCost: '€2,800–€4,800'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–160,000 km / 8–10 yrs',
                    action: 'Intake valve walnut blasting (direct injection) & turbo wastegate check',
                    cost: '€380–€750',
                    ifIgnored: 'Carbon buildup causes misfires; seized wastegate cuts boost',
                    damageCost: '€1,100–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km / 10–12 yrs',
                    action: 'Replace clutch / DSG mechatronic service & piston ring / oil seal check',
                    cost: '€800–€1,600',
                    ifIgnored: 'Heavy oil consumption destroys catalytic converter',
                    damageCost: '€2,200–€3,800'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km / 12+ yrs',
                    action: 'Refresh suspension wishbones, dampers, wheel bearings & engine mounts',
                    cost: '€800–€1,400',
                    ifIgnored: 'Clunking front axle and uneven tire wear',
                    damageCost: '€1,400–€2,200'
                  }
                ]
              },
              de: {
                headline: 'Sparsamer Mini-Turbo — frühe Steuerketten-Längung drückt die Zuverlässigkeit',
                lowScoreReasons: [
                  'Vorzeitige Steuerketten-Längung (bis 2012): Die schmale Einfachkette längt sich oft schon bei 60.000–110.000 km (850–1.200 € Wechselkosten; sonst droht Motorschaden).',
                  'Klemmendes Turbo-Wastegate & Ölverdünnung: Festsitzende Gestänge lösen Notlauf aus, und Kurzstrecken-Sprit im Öl beschleunigt den Kettenverschleiß.'
                ],
                strengths: [
                  'Sehr niedriger Verbrauch und geringe Kfz-Steuer im Stadt- und Pendelbetrieb.',
                  'Erreicht 180.000–220.000+ km, sobald der verstärkte Steuerkettensatz verbaut ist und Öl alle 10.000–12.000 km gewechselt wird.'
                ],
                watchouts: [
                  'Zündkabel/Zündspulen sowie Verkokung der Einlassventile durch Direkteinspritzung ab 100.000 km beachten.',
                  '30.000er-LongLife-Intervalle unbedingt meiden — jährliche Ölwechsel sind Pflicht.'
                ],
                beforeYouBuy: [
                  'Beim völlig kalten Motorstart genau auf ein 2–3 Sekunden langes Kettenrasseln achten.',
                  'Rechnung für den bereits verbauten verstärkten Audi-Steuerkettensatz vorlegen lassen.',
                  'Sauber bis 120 km/h durchbeschleunigen, um klemmendes Turbo-Wastegate oder Zündaussetzer auszuschließen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 3–4 J.',
                    action: 'Strikter 10.000–12.000 km Ölwechsel & Zündkerzen-Service',
                    cost: '150–230 €',
                    ifIgnored: 'Lange Intervalle beschleunigen Ketten- & Turboverschleiß',
                    damageCost: '1.300–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Kunststoff-Wasserpumpe, Schläuche & Kurbelgehäuseentlüftung prüfen',
                    cost: '280–480 €',
                    ifIgnored: 'Spröde Kunststoffteile führen zu plötzlichem Kühlmittelverlust',
                    damageCost: '1.000–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '80.000–120.000 km / 6–9 J.',
                    action: 'Steuerkettenlängung & Spanner-Versagen — Steuerkettensatz inkl. Spanner & Schienen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Übersprungene Kette verursacht kapitalen Motorschaden',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–160.000 km / 8–10 J.',
                    action: 'Einlassventile reinigen (Verkokung) & Turbolader-Gestänge prüfen',
                    cost: '380–750 €',
                    ifIgnored: 'Zündaussetzer durch Ruß; klemmendes Gestänge kostet Ladedruck',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km / 10–12 J.',
                    action: 'Kupplung / DSG-Service & Kolbenringe / Dichtungen auf Ölverbrauch prüfen',
                    cost: '800–1.600 €',
                    ifIgnored: 'Hoher Ölverbrauch ruiniert den Katalysator',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km / 12+ J.',
                    action: 'Querlenker, Stoßdämpfer, Radlager & Motorlager überholen',
                    cost: '800–1.400 €',
                    ifIgnored: 'Polternde Vorderachse & TÜV-Durchfall',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Экономичный турбомотор 1.2 — раннее растяжение цепи снижает оценку',
                lowScoreReasons: [
                  'Быстрое растяжение цепи ГРМ (до 2012 г.): Тонкая цепь и старый натяжитель часто вытягиваются уже к 60–110 тыс. км (замена €850–1 200; обрыв губит мотор).',
                  'Подклинивание актуатора турбины и разжижение масла: Закисание тяги вестгейта вызывает сброс тяги, а короткие поездки ускоряют износ цепи.'
                ],
                strengths: [
                  'Низкий расход топлива и минимальный налог в городском режиме.',
                  'Проходит 180 000–220 000+ км после установки усиленного комплекта цепи и при замене масла раз в 10–12 тыс. км.'
                ],
                watchouts: [
                  'Проверяйте высоковольтные провода, катушку и нагар на клапанах после 100 000 км.',
                  'Откажитесь от интервалов LongLife по 30 000 км в пользу ежегодной смены масла.'
                ],
                beforeYouBuy: [
                  'Послушать полностью холодный пуск — металлический треск первые 2–3 секунды говорит о растянутой цепи.',
                  'Попросить чеки на замену цепи обновлённым ремкомплектом Audi.',
                  'Проверить уверенный разгон без провалов и ошибок по наддуву или пропускам зажигания.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 3–4 года',
                    action: 'Строгая замена масла каждые 10–12 тыс. км и свечей зажигания',
                    cost: '€150–€230',
                    ifIgnored: 'Редкие ТО ускоряют износ цепи ГРМ и турбины',
                    damageCost: '€1 300–€2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Проверка пластиковой помпы, патрубков и мембраны ВКГ',
                    cost: '€280–€480',
                    ifIgnored: 'Трещины пластика вызывают утечку антифриза и перегрев',
                    damageCost: '€1 000–€2 000'
                  },
                  {
                    tier: 'orange',
                    km: '80 000–120 000 km / 6–9 лет',
                    action: 'Растяжение цепи ГРМ и отказ натяжителя — замена комплекта цепи и натяжителя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Перескок цепи ведёт к встрече клапанов с поршнями',
                    damageCost: '€2 800–€4 800'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–160 000 км / 8–10 лет',
                    action: 'Чистка впускных клапанов от нагара и проверка актуатора турбины',
                    cost: '€380–€750',
                    ifIgnored: 'Пропуски зажигания и потеря наддува',
                    damageCost: '€1 100–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км / 10–12 лет',
                    action: 'Замена сцепления / сервис DSG и контроль масложора (кольца/сальники)',
                    cost: '€800–€1 600',
                    ifIgnored: 'Высокий расход масла выводит из строя катализатор',
                    damageCost: '€2 200–€3 800'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км / 12+ лет',
                    action: 'Обновление рычагов подвески, амортизаторов, ступиц и опор мотора',
                    cost: '€800–€1 400',
                    ifIgnored: 'Стуки в подвеске и неравномерный износ шин',
                    damageCost: '€1 400–€2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 5.3,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Smooth Low-Speed Shifts'],
              de: ['6-Gang solide • 7-DSG Kupplung prüfen', 'Leichte Schaltbarkeit'],
              ru: ['6-МКПП надёжна • 7-DSG с сухим сцеплением', 'Чёткие переключения']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 10.6 s • 192 km/h', 'Lively Below 80 km/h'],
              de: ['0–100 km/h: 10,6 s • 192 km/h', 'Spritzig bis 80 km/h'],
              ru: ['0–100 км/ч: 10,6 с • 192 км/ч', 'Бодрый до 80 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.4,
            badges: {
              en: ['175 Nm @ 1,550 rpm', 'Good Low-End City Pull'],
              de: ['175 Nm ab 1.550 U/min', 'Guter Durchzug im Stadtverkehr'],
              ru: ['175 Н·м с 1550 об/мин', 'Уверенная тяга в городе']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.9–6.4 L/100km', 'Efficient Light Turbo'],
              de: ['5,9–6,4 L/100km', 'Sparsamer Klein-Turbo'],
              ru: ['5,9–6,4 л/100 км', 'Экономичный турбомотор']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['1.2L Lowest Tax Bracket', 'Affordable Insurance'],
              de: ['Niedrigste Kfz-Steuer', 'Günstige Typklasse'],
              ru: ['Минимальный налог за 1.2 л', 'Доступная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 6.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€160–250' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect turbo wastegate actuator rod & water pump / thermostat', de: 'Turbo-Wastegate-Gestänge & Wasserpumpe / Thermostat prüfen', ru: 'Проверка актуатора вестгейта турбины и помпы' }, cost: '€140–240' }
              ],
              critical: [
                { when: { en: '60,000–120,000 km', de: '60.000–120.000 km', ru: '60 000–120 000 км' }, action: { en: 'EA111 simplex timing chain & tensioner upgrade kit (cold-start rattle!)', de: 'EA111 Simplex-Steuerkette & Spanner (Kaltstart-Rasseln = Alarm!)', ru: 'Замена тонкой цепи ГРМ EA111 и натяжителя (треск при холодном пуске!)' }, cost: '€750–1,200', risk: { en: 'Stretched simplex chain jumps teeth on startup and bends all valves', de: 'Gelängte Simplex-Kette überspringt beim Start — kapitaler Motorschaden', ru: 'Растянутая цепь перескакивает при пуске и гнёт клапаны' }, damage: '€3,000–4,800' },
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'Dry 7-speed DSG (DQ200) mechatronic & clutch pack (if automatic)', de: 'Trockenes 7-Gang-DSG (DQ200) Mechatronik & Kupplungspaket (falls AT)', ru: 'Мехатроник и сцепление сухого 7-DSG (DQ200, если автомат)' }, cost: '€1,300–2,100', risk: { en: 'Shuddering in 2nd gear, lost gears, or cracked pressure accumulator', de: 'Ruckeln im 2. Gang, Gangausfall oder geplatzter Druckspeicher', ru: 'Рывки на 2-й передаче, потеря передач или трещина гидроплиты' }, damage: '€2,200–3,200' }
              ]
            },
            badges: {
              en: ['Cheap Routine Parts', 'Chain Replacement ~€850'],
              de: ['Günstige Verschleißteile', 'Steuerkette ca. 850 €'],
              ru: ['Недорогие расходники', 'Замена цепи ~€850']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.4-tfsi',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€7,200',
            specOverrides: { sprint0100: '9.3 s', topSpeed: '203 km/h', realWorldFuel: '6.8 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.7,
                badges: {
                  en: ['6.8 L/100km (DSG)'],
                  de: ['6,8 L/100km (DSG)'],
                  ru: ['6,8 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'turbo-petrol',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 125,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.4 TFSI (8P)',
        fullName: '2010 Audi A3 1.4 TFSI (8P)',
        engineBadge: '1.4L TFSI • 125 HP',
        engineSubLabel: {
          en: '1.4L Single-Turbo Chain Petrol (08/2007–03/2013) • 6-MT / 7-DSG • 200 Nm • FWD',
          de: '1.4L Single-Turbo Kettenmotor (08/2007–03/2013) • 6-Gang / 7-DSG • 200 Nm • FWD',
          ru: '1.4L турбо цепной (08/2007–03/2013) • 6-МКПП / 7-DSG • 200 Н·м • FWD'
        },
        rarityLabel: {
          en: 'BALANCED PETROL',
          de: 'ALLROUND-BENZINER',
          ru: 'СБАЛАНСИРОВАННЫЙ'
        },
        originalMsrp: {
          en: '€24,100 New',
          de: '24.100 € Neu',
          ru: '€24 100 новый'
        },
        estUsedPrice: '€6,400',
        perkLabel: {
          en: '✦ Single-Turbo (No Supercharger) • 200 Nm • Smooth Daily Driver',
          de: '✦ Single-Turbo (kein Kompressor) • 200 Nm • Ruhiger Alltagsmotor',
          ru: '✦ Один турбокомпрессор • 200 Н·м • Удачнее Twincharger'
        },
        remarkablePositives: {
          en: [
            'Simpler single-turbo than 160 hp Twincharger',
            'Refined & quiet in daily driving',
            '200 Nm makes city & B-roads effortless'
          ],
          de: [
            'Ohne anfälligen Kompressor (nur Turbo)',
            'Sehr ruhiger, kultivierter Lauf',
            '200 Nm sorgen für entspannten Durchzug'
          ],
          ru: [
            'Нет проблемного компрессора (только турбина)',
            'Тихий и эластичный в городе',
            '200 Н·м с низов'
          ]
        },
        notableNegatives: {
          en: [
            'Timing chain stretch still possible',
            '7-DSG dry clutch wear in city traffic',
            'Turbo wastegate rattle on high mileage'
          ],
          de: [
            'Steuerkettenlängung weiterhin möglich',
            '7-Gang-Trocken-DSG im Stadtstau anfällig',
            'Wastegate-Rasseln bei hoher Laufleistung'
          ],
          ru: [
            'Цепь ГРМ всё ещё требует контроля',
            'Сухая 7-DSG изнашивается в пробках',
            'Люфт калитки вестгейта к 150 тыс. км'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L I4 TFSI (Simplex Chain)', de: '1.4L Reihenvierzylinder TFSI (Kette)', ru: '1.4L R4 TFSI (Цепь EA111)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch', towingBraked: '1,200 kg',
          sprint0100: '9.4 s', topSpeed: '203 km/h', peakTorque: '200 Nm @ 1,500 rpm',
          passingPunch: { en: 'Flat 200 Nm Turbo Band', de: 'Breites 200-Nm-Band', ru: 'Ровная полка 200 Н·м' },
          realWorldFuel: '6.6 L/100km', tankRange: '55 L (~830 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierLowMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 5.3,
            badges: {
              en: ['Better Than 1.4 Twincharger', 'Watch Chain & Turbo Actuator'],
              de: ['Deutlich robuster als Twincharger', 'Kette & Wastegate prüfen'],
              ru: ['Надёжнее версии Twincharger', 'Проверить цепь и вестгейт']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CAXC (EA111) · 1,390 cc' }, { k: 'architecture', v: { en: 'Inline-4 Single-Turbo (No Supercharger) · Simplex Chain', de: 'Reihenvierzylinder Mono-Turbo (kein Kompressor) · Kette', ru: 'Рядный 4-цил. моно-турбо (без компрессора) · Цепь EA111' } }], note: { en: 'Much safer than VW’s twincharged 160 HP 1.4 TSI, yet still suffers EA111 simplex chain stretch — buy one with the revised chain & 6-MT.', de: 'Viel robuster als der 160-PS-Twincharger, leidet aber an der EA111-Simplex-Kette — am besten mit erneuerter Kette und 6-Gang kaufen.', ru: 'Намного надёжнее 160-сильного Twincharger, но страдает растяжением цепи EA111 — ищите с обновлённой цепью и 6-МКПП.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Sensible Single-Turbo 1.4 TFSI — Timing Chain Stretch Limits Long-Term Score',
                lowScoreReasons: [
                  'Timing Chain Stretch & Tensioner Wear: Single-row chain stretches if LongLife 30,000 km oil intervals were used, causing cold-start rattle (€900–€1,200 replacement).',
                  'Turbo Wastegate Rod Rattle & Valve Carbon: Worn wastegate actuator linkages buzz on deceleration and direct injection coats intake valves past 100,000 km.'
                ],
                strengths: [
                  'Single-turbo setup delivers 200 Nm from 1,500 rpm without complex supercharger hardware.',
                  'Can reach 200,000–240,000+ km once the updated timing chain is fitted and oil is changed every 10,000–15,000 km.'
                ],
                watchouts: [
                  'Check water pump and plastic coolant pipes for slow weeping.',
                  'Keep spark plugs and ignition coils fresh to prevent boost misfires.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for any metallic chain rattle during the first 2–3 seconds.',
                  'Listen for a metallic buzzing rattle around 2,000 rpm when lifting off the throttle (wastegate rod).',
                  'Verify documented 10,000–15,000 km oil changes or timing chain replacement invoices.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 3–4 yrs',
                    action: 'Strict 10,000–12,000 km full-synthetic oil changes & spark plugs',
                    cost: '€150–€230',
                    ifIgnored: 'Extended oil intervals accelerate timing chain and turbo wear',
                    damageCost: '€1,300–€2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Inspect plastic coolant pump housing, hoses & PCV valve diaphragm',
                    cost: '€280–€480',
                    ifIgnored: 'Cracked plastic cooling parts cause sudden overheating',
                    damageCost: '€1,000–€2,000'
                  },
                  {
                    tier: 'orange',
                    km: '90,000–130,000 km / 6–9 yrs',
                    action: 'Timing chain stretch & tensioner failure — full timing chain & guide rail kit',
                    cost: '€850–€1,450',
                    ifIgnored: 'Jumped timing chain bends valves and wrecks top end',
                    damageCost: '€2,800–€4,800'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–160,000 km / 8–10 yrs',
                    action: 'Intake valve walnut blasting (direct injection) & turbo wastegate check',
                    cost: '€380–€750',
                    ifIgnored: 'Carbon buildup causes misfires; seized wastegate cuts boost',
                    damageCost: '€1,100–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km / 10–12 yrs',
                    action: 'Replace clutch / DSG mechatronic service & piston ring / oil seal check',
                    cost: '€800–€1,600',
                    ifIgnored: 'Heavy oil consumption destroys catalytic converter',
                    damageCost: '€2,200–€3,800'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km / 12+ yrs',
                    action: 'Refresh suspension wishbones, dampers, wheel bearings & engine mounts',
                    cost: '€800–€1,400',
                    ifIgnored: 'Clunking front axle and uneven tire wear',
                    damageCost: '€1,400–€2,200'
                  }
                ]
              },
              de: {
                headline: 'Vernünftiger 1.4 TFSI Single-Turbo — Steuerketten-Längung drückt die Note',
                lowScoreReasons: [
                  'Steuerketten-Längung durch LongLife-Intervalle: Bei 30.000er-Ölwechseln längt sich die Einfachkette oft schon unter 120.000 km (900–1.200 € Wechselkosten).',
                  'Wastegate-Rasseln & Einlassverkokung: Ausgeschlagenes Turbolader-Gestänge klappert beim Gaswegnehmen; Direkteinspritzung verkokt die Ventile.'
                ],
                strengths: [
                  'Reiner Single-Turbo liefert 200 Nm ab 1.500 U/min ohne komplexe Kompressor-Zusatztechnik.',
                  'Erreicht 200.000–240.000+ km mit erneuerter Steuerkette und Ölwechseln alle 10.000–15.000 km.'
                ],
                watchouts: [
                  'Wasserpumpe und Kunststoff-Kühlmittelanschlüsse auf leichtes Schwitzen prüfen.',
                  'Zündkerzen und Zündspulen rechtzeitig erneuern, um Aussetzer unter Ladedruck zu vermeiden.'
                ],
                beforeYouBuy: [
                  'Beim kalten Motorstart auf 2–3 Sekunden Steuerketten-Rasseln achten.',
                  'Bei ca. 2.000 U/min vom Gas gehen und auf metallisches Wastegate-Schnarren horchen.',
                  'Kurze Ölwechsel (10.000–15.000 km) oder einen bereits erneuerten Kettensatz im Scheckheft prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 3–4 J.',
                    action: 'Strikter 10.000–12.000 km Ölwechsel & Zündkerzen-Service',
                    cost: '150–230 €',
                    ifIgnored: 'Lange Intervalle beschleunigen Ketten- & Turboverschleiß',
                    damageCost: '1.300–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Kunststoff-Wasserpumpe, Schläuche & Kurbelgehäuseentlüftung prüfen',
                    cost: '280–480 €',
                    ifIgnored: 'Spröde Kunststoffteile führen zu plötzlichem Kühlmittelverlust',
                    damageCost: '1.000–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '90.000–130.000 km / 6–9 J.',
                    action: 'Steuerkettenlängung & Spanner-Versagen — Steuerkettensatz inkl. Spanner & Schienen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Übersprungene Kette verursacht kapitalen Motorschaden',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–160.000 km / 8–10 J.',
                    action: 'Einlassventile reinigen (Verkokung) & Turbolader-Gestänge prüfen',
                    cost: '380–750 €',
                    ifIgnored: 'Zündaussetzer durch Ruß; klemmendes Gestänge kostet Ladedruck',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km / 10–12 J.',
                    action: 'Kupplung / DSG-Service & Kolbenringe / Dichtungen auf Ölverbrauch prüfen',
                    cost: '800–1.600 €',
                    ifIgnored: 'Hoher Ölverbrauch ruiniert den Katalysator',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km / 12+ J.',
                    action: 'Querlenker, Stoßdämpfer, Radlager & Motorlager überholen',
                    cost: '800–1.400 €',
                    ifIgnored: 'Polternde Vorderachse & TÜV-Durchfall',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Удачный 1.4 TFSI с одной турбиной — растяжение цепи снижает оценку',
                lowScoreReasons: [
                  'Растяжение цепи ГРМ: Однорядная цепь быстро вытягивается при редких заменах масла LongLife (замена €900–1 200).',
                  'Звон тяги вестгейта и нагар на клапанах: Разбитый привод заслонки турбины дребезжит под сброс газа, а прямой впрыск даёт нагар после 100 тыс. км.'
                ],
                strengths: [
                  'Простая схема с одной турбиной выдаёт 200 Н·м с 1 500 об/мин без сложного механического нагнетателя.',
                  'Ходит 200 000–240 000+ км после замены цепи ГРМ и при смене масла каждые 10–15 тыс. км.'
                ],
                watchouts: [
                  'Проверяйте водяную помпу и пластиковые патрубки охлаждения на подтёки.',
                  'Своевременно меняйте свечи и катушки для ровной работы под наддувом.'
                ],
                beforeYouBuy: [
                  'Послушать полностью холодный пуск — не должно быть металлического треска цепи.',
                  'Сбросить газ с 2 000 об/мин и прислушаться к дребезгу тяги вестгейта турбины.',
                  'Проверить чеки на замену цепи или частые замены масла каждые 10–15 тыс. км.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 3–4 года',
                    action: 'Строгая замена масла каждые 10–12 тыс. км и свечей зажигания',
                    cost: '€150–€230',
                    ifIgnored: 'Редкие ТО ускоряют износ цепи ГРМ и турбины',
                    damageCost: '€1 300–€2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Проверка пластиковой помпы, патрубков и мембраны ВКГ',
                    cost: '€280–€480',
                    ifIgnored: 'Трещины пластика вызывают утечку антифриза и перегрев',
                    damageCost: '€1 000–€2 000'
                  },
                  {
                    tier: 'orange',
                    km: '90 000–130 000 km / 6–9 лет',
                    action: 'Растяжение цепи ГРМ и отказ натяжителя — замена комплекта цепи и натяжителя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Перескок цепи ведёт к встрече клапанов с поршнями',
                    damageCost: '€2 800–€4 800'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–160 000 км / 8–10 лет',
                    action: 'Чистка впускных клапанов от нагара и проверка актуатора турбины',
                    cost: '€380–€750',
                    ifIgnored: 'Пропуски зажигания и потеря наддува',
                    damageCost: '€1 100–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км / 10–12 лет',
                    action: 'Замена сцепления / сервис DSG и контроль масложора (кольца/сальники)',
                    cost: '€800–€1 600',
                    ifIgnored: 'Высокий расход масла выводит из строя катализатор',
                    damageCost: '€2 200–€3 800'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км / 12+ лет',
                    action: 'Обновление рычагов подвески, амортизаторов, ступиц и опор мотора',
                    cost: '€800–€1 400',
                    ifIgnored: 'Стуки в подвеске и неравномерный износ шин',
                    damageCost: '€1 400–€2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 5.5,
            badges: {
              en: ['6-MT Recommended • 7-DSG Needs Care', 'Crisp Clutch Feel'],
              de: ['6-Gang empfohlen • 7-DSG prüfen', 'Saubere Schaltung'],
              ru: ['6-МКПП надёжнее • 7-DSG проверять', 'Чёткое сцепление']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.4,
            badges: {
              en: ['0–100 km/h: 9.4 s • 203 km/h', 'Confident Daily Pace'],
              de: ['0–100 km/h: 9,4 s • 203 km/h', 'Flott genug für die Autobahn'],
              ru: ['0–100 км/ч: 9,4 с • 203 км/ч', 'Бодрый для города и трассы']
            }
          },
          midRangeTorquePassing: {
            score: 6.9,
            badges: {
              en: ['200 Nm @ 1,500 rpm', 'Flat Turbo Torque Band'],
              de: ['200 Nm ab 1.500 U/min', 'Breites Drehmomentband'],
              ru: ['200 Н·м с 1500 об/мин', 'Ровная полка тяги']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 7.9,
            badges: {
              en: ['6.4–6.9 L/100km', 'Good Petrol Economy'],
              de: ['6,4–6,9 L/100km', 'Guter Alltagsverbrauch'],
              ru: ['6,4–6,9 л/100 км', 'Умеренный расход']
            }
          },
          taxInsuranceNorm: {
            score: 8.3,
            badges: {
              en: ['1.4L Low Tax & Insurance', 'Euro 5 Compliant'],
              de: ['Günstige 1.4L-Steuer', 'Euro-5-Einstufung'],
              ru: ['Низкий налог за 1.4 л', 'Евро-5']
            }
          },
          maintenanceRepairCosts: {
            score: 6.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€160–250' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect turbo wastegate actuator rod & water pump / thermostat', de: 'Turbo-Wastegate-Gestänge & Wasserpumpe / Thermostat prüfen', ru: 'Проверка актуатора вестгейта турбины и помпы' }, cost: '€140–240' }
              ],
              critical: [
                { when: { en: '60,000–120,000 km', de: '60.000–120.000 km', ru: '60 000–120 000 км' }, action: { en: 'EA111 simplex timing chain & tensioner upgrade kit (cold-start rattle!)', de: 'EA111 Simplex-Steuerkette & Spanner (Kaltstart-Rasseln = Alarm!)', ru: 'Замена тонкой цепи ГРМ EA111 и натяжителя (треск при холодном пуске!)' }, cost: '€750–1,200', risk: { en: 'Stretched simplex chain jumps teeth on startup and bends all valves', de: 'Gelängte Simplex-Kette überspringt beim Start — kapitaler Motorschaden', ru: 'Растянутая цепь перескакивает при пуске и гнёт клапаны' }, damage: '€3,000–4,800' },
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'Dry 7-speed DSG (DQ200) mechatronic & clutch pack (if automatic)', de: 'Trockenes 7-Gang-DSG (DQ200) Mechatronik & Kupplungspaket (falls AT)', ru: 'Мехатроник и сцепление сухого 7-DSG (DQ200, если автомат)' }, cost: '€1,300–2,100', risk: { en: 'Shuddering in 2nd gear, lost gears, or cracked pressure accumulator', de: 'Ruckeln im 2. Gang, Gangausfall oder geplatzter Druckspeicher', ru: 'Рывки на 2-й передаче, потеря передач или трещина гидроплиты' }, damage: '€2,200–3,200' }
              ]
            },
            badges: {
              en: ['Affordable Routine Service', 'Chain Kit ~€900'],
              de: ['Überschaubare Wartungskosten', 'Kettensatz ca. 900 €'],
              ru: ['Недорогое ТО', 'Замена цепи ~€900']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.6-mpi',
        defaultGearboxId: 'mq200-5mt-sc',
        gearboxes: [{ id: 'mq200-5mt-sc', isDefault: true }],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-5mt',
        isDefault: false,
        fuelType: 'petrol',
        hp: 102,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 (8P)',
        fullName: '2009 Audi A3 1.6 (8P)',
        engineBadge: '1.6L MPI • 102 HP',
        engineSubLabel: {
          en: '1.6L 8V Port-Injection Belt Petrol (03/2003–04/2010) • 5-MT • 148 Nm • FWD',
          de: '1.6L 8V Saugmotor Zahnriemen (03/2003–04/2010) • 5-Gang • 148 Nm • FWD',
          ru: '1.6L 8V атмосферный (03/2003–04/2010) • 5-МКПП • 148 Н·м • FWD'
        },
        rarityLabel: {
          en: 'BULLETPROOF SIMPLE',
          de: 'UNVERWÜSTLICH',
          ru: 'НЕУБИВАЕМЫЙ'
        },
        originalMsrp: {
          en: '€21,500 New',
          de: '21.500 € Neu',
          ru: '€21 500 новый'
        },
        estUsedPrice: '€4,900',
        perkLabel: {
          en: '✦ No Turbo • No Direct Injection • Bulletproof 8V Simplicity',
          de: '✦ Kein Turbo • Keine Direkteinspritzung • Extrem langlebig',
          ru: '✦ Без турбины • Распределённый впрыск • Легендарный ресурс'
        },
        remarkablePositives: {
          en: [
            'Simplest, most reliable petrol engine in A3 8P',
            'Cheap parts & easy timing belt service',
            'Tolerates short city trips effortlessly'
          ],
          de: [
            'Zuverlässigster Benzinmotor im A3 8P',
            'Sehr günstige Ersatzteile & Zahnriemen',
            'Ideal für Kurzstrecken'
          ],
          ru: [
            'Самый надёжный бензиновый мотор A3 8P',
            'Дешёвые запчасти и простой ремень ГРМ',
            'Не боится коротких поездок'
          ]
        },
        notableNegatives: {
          en: [
            'Modest 102 hp performance',
            'Short 5-speed gearing (loud at 130 km/h)',
            'Higher fuel use than 1.2/1.4 TFSI'
          ],
          de: [
            'Gemütliche Fahrleistungen (102 PS)',
            'Kurzes 5-Gang-Getriebe auf Autobahn laut',
            'Höherer Verbrauch als TFSI'
          ],
          ru: [
            'Скромная динамика (102 л.с.)',
            'Короткая 5-МКПП — шумноват на трассе',
            'Расход выше, чем у TFSI'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 MPI Petrol (Belt)', de: '1.6L Reihenvierzylinder Sauger (Riemen)', ru: '1.6L R4 MPI Бензин (Ремень)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@belt', gearbox: '@manual5', clutchDmf: '@singleClutch',
          towingBraked: '1,200 kg', sprint0100: '11.9 s', topSpeed: '185 km/h', peakTorque: '148 Nm @ 3,800 rpm',
          passingPunch: { en: 'Unrushed · Needs Downshifts', de: 'Gemütlich · Runterschalten', ru: 'Спокойная · Нужны обороты' },
          realWorldFuel: '7.6 L/100km', tankRange: '55 L (~725 km)', euroNorm: 'Euro 4/5 (Petrol)', taxInsurance: '@tierLow', serviceWear: '@tierVeryLow'
        },
        subStats: {
          powertrainDurability: {
            score: 9.3,
            badges: {
              en: ['Port-Injected 8V Iron-Clad Reliability', 'Easy 300,000+ km Potential'],
              de: ['Robuster 8V-Saugmotor ohne Turbo', '300.000+ km problemlos möglich'],
              ru: ['Простой 8-клапанный атмосферник', 'Ресурс легко 300 000+ км']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'BSE / BSF (EA113) · 1,595 cc' }, { k: 'architecture', v: { en: 'Inline-4 8V Aluminium · Port Injection + Timing Belt', de: 'Reihenvierzylinder 8V Alu · Saugrohr + Zahnriemen', ru: 'Рядный 4-цил. 8V · Распределённый впрыск + ремень' } }], note: { en: 'The bulletproof legend of the A3 8P: slow and a bit thirsty on highways, but zero turbo, zero direct-injection carbon, and zero simplex-chain risk.', de: 'Der unverwüstliche Dauerläufer im A3 8P: gemütlich und etwas durstig, aber ohne Turbo, ohne Verkokung und ohne Steuerketten-Risiko.', ru: 'Самый неубиваемый мотор A3 8P: спокойный и чуть прожорливый, но без турбины, нагара и проблем с цепью.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Old-school 8-valve port-injected workhorse— slow, but nearly indestructible.',
                strengths: [
                  'No turbo, no direct injection, no timing chain.',
                  'Very cheap maintenance and high mileage tolerance.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Minor valve stem seal oil consumption after 200,000 km.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Check timing belt date/mileage sticker.',
                  'Verify smooth idle (vac hoses/throttle body).',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 4 yrs',
                    action: 'Annual oil/filter service (15,000 km max) & cabin/air filters',
                    cost: '€130–€200',
                    ifIgnored: 'Sludge buildup and premature cam lobe wear',
                    damageCost: '€800–€1,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Replace spark plugs, ignition coils & age-hardened coolant hoses',
                    cost: '€220–€380',
                    ifIgnored: 'Misfires damage catalytic converter; old hoses split',
                    damageCost: '€900–€1,500'
                  },
                  {
                    tier: 'orange',
                    km: '120,000 km / 6–8 yrs',
                    action: 'Timing belt, water pump & thermostat housing replacement',
                    cost: '€520–€820',
                    ifIgnored: 'Aged rubber belt snaps and bends valves',
                    damageCost: '€2,500–€4,000'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Clutch kit / dry-DSG clutch pack & crankcase breather valve service',
                    cost: '€650–€1,300',
                    ifIgnored: 'Slipping clutch or vacuum leaks cause rough idle',
                    damageCost: '€1,400–€2,200'
                  },
                  {
                    tier: 'red',
                    km: '170,000–210,000 km / 10–12 yrs',
                    action: 'Exhaust flexi-pipe, catalytic converter & camshaft seal refresh',
                    cost: '€450–€950',
                    ifIgnored: 'Oil leaks onto exhaust and failed emissions test',
                    damageCost: '€1,200–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front wishbone bushings, dampers & engine mounts',
                    cost: '€750–€1,300',
                    ifIgnored: 'Vague steering and tire wear',
                    damageCost: '€1,300–€2,000'
                  }
                ]
              },
              de: {
                headline: 'Klassischer 8V-Saugmotor— gemächlich, aber nahezu unzerstörbar.',
                strengths: [
                  'Kein Turbo, keine Direkteinspritzung, keine Steuerkette.',
                  'Extrem günstige Wartung.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Getriebelager-Geräusche bei sehr hoher Laufleistung.',
                  'Leichter Ölverbrauch über Ventilschaftdichtungen im Alter.'
                ],
                beforeYouBuy: [
                  'Im 4./5. Gang im Schubbetrieb auf Getriebeheulen hören.',
                  'Zahnriemen-Wechseldatum prüfen.',
                  'Auf ruhigen Leerlauf achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterservice (max. 15.000 km)',
                    cost: '130–200 €',
                    ifIgnored: 'Ölschlamm und erhöhter Nockenwellen-Verschleiß',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Zündkerzen, Zündspulen & gealterte Kühlerschläuche ersetzen',
                    cost: '220–380 €',
                    ifIgnored: 'Zündaussetzer schädigen Katalysator; spröde Schläuche platzen',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000 km / 6–8 J.',
                    action: 'Zahnriemen-Wechsel inkl. Wasserpumpe & Thermostatgehäuse',
                    cost: '520–820 €',
                    ifIgnored: 'Alternder Zahnriemen reißt und verursacht Motorschaden',
                    damageCost: '2.500–4.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Kupplungssatz / Trocken-DSG-Kupplung & Entlüftungsventil erneuern',
                    cost: '650–1.300 €',
                    ifIgnored: 'Rutschende Kupplung oder unrunder Leerlauf',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'red',
                    km: '170.000–210.000 km / 10–12 J.',
                    action: 'Flexrohr, Katalysator & Nockenwellen-Dichtungen erneuern',
                    cost: '450–950 €',
                    ifIgnored: 'Ölverlust und nicht bestandene AU',
                    damageCost: '1.200–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Querlenkerbuchsen, Stoßdämpfer & Motorlager überholen',
                    cost: '750–1.300 €',
                    ifIgnored: 'Schwammiges Fahrverhalten & Reifenverschleiß',
                    damageCost: '1.300–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Классический 8-клапанный атмосферник— неспешный, но почти вечный.',
                strengths: [
                  'Нет турбины, прямого впрыска и цепи ГРМ.',
                  'Копеечное обслуживание.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Небольшой расход масла через колпачки после 200 тыс. км.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Проверить дату замены ремня ГРМ.',
                  'Оценить ровность холостого хода.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и фильтров',
                    cost: '€130–€200',
                    ifIgnored: 'Нагар и ускоренный износ распредвалов',
                    damageCost: '€800–€1 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Замена свечей, катушек зажигания и стареющих патрубков охлаждения',
                    cost: '€220–€380',
                    ifIgnored: 'Пропуски сжигают катализатор; старые шланги лопаются',
                    damageCost: '€900–€1 500'
                  },
                  {
                    tier: 'orange',
                    km: '120 000 km / 6–8 лет',
                    action: 'Замена ремня ГРМ, водяной помпы и корпуса термостата',
                    cost: '€520–€820',
                    ifIgnored: 'Обрыв ремня от возраста или пробега гнёт клапаны',
                    damageCost: '€2 500–€4 000'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена сцепления / фрикционов сухой DSG и клапана ВКГ',
                    cost: '€650–€1 300',
                    ifIgnored: 'Пробуксовка сцепления и подсос воздуха',
                    damageCost: '€1 400–€2 200'
                  },
                  {
                    tier: 'red',
                    km: '170 000–210 000 км / 10–12 лет',
                    action: 'Замена гофры выхлопа, катализатора и сальников распредвала',
                    cost: '€450–€950',
                    ifIgnored: 'Течи масла и проблемы с выхлопом на техосмотре',
                    damageCost: '€1 200–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков рычагов, амортизаторов и опор',
                    cost: '€750–€1 300',
                    ifIgnored: 'Разболтанная подвеска и износ шин',
                    damageCost: '€1 300–€2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.2,
            badges: {
              en: ['5-MT Simple & Tough', 'Watch Early Pinion Bearing Whine'],
              de: ['Einfaches 5-Gang-Getriebe', 'Auf Lagergeräusche im 5. Gang achten'],
              ru: ['Простая 5-МКПП', 'Проверить гул подшипников на 5-й']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.4,
            badges: {
              en: ['0–100 km/h: 11.9 s • 185 km/h', 'Unrushed Highway Pace'],
              de: ['0–100 km/h: 11,9 s • 185 km/h', 'Gemütliches Reisetempo'],
              ru: ['0–100 км/ч: 11,9 с • 185 км/ч', 'Спокойный разгон']
            }
          },
          midRangeTorquePassing: {
            score: 5.2,
            badges: {
              en: ['148 Nm @ 3,800 rpm', 'Needs Downshifts to Overtake'],
              de: ['148 Nm bei 3.800 U/min', 'Zum Überholen herunterschalten'],
              ru: ['148 Н·м при 3800 об/мин', 'Для обгона нужно понижать передачу']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 6.6,
            badges: {
              en: ['7.3–7.9 L/100km', 'Thirsty on Motorway'],
              de: ['7,3–7,9 L/100km', 'Auf Autobahn etwas durstig'],
              ru: ['7,3–7,9 л/100 км', 'На трассе выше среднего']
            }
          },
          taxInsuranceNorm: {
            score: 8.0,
            badges: {
              en: ['Low Insurance & Tax', 'Cheapest A3 Entry Point'],
              de: ['Günstige Versicherung & Steuer', 'Preiswertester A3-Einstieg'],
              ru: ['Низкий налог и страховка', 'Самый доступный вход в Audi']
            }
          },
          maintenanceRepairCosts: {
            score: 9.1,
            repairGuide: {
              routine: [
                { when: { en: 'Every 120,000 km / 7 yrs', de: 'Alle 120.000 km / 7 J.', ru: 'Каждые 120 000 км / 7 лет' }, action: { en: 'Replace timing belt, tensioner roller & water pump', de: 'Zahnriemen, Spannrolle & Wasserpumpe erneuern', ru: 'Замена ремня ГРМ, ролика и помпы' }, cost: '€380–560' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, HT leads & check 5-MT gearbox oil', de: 'Zündkerzen, Zündkabel & 5-Gang-Getriebeöl prüfen/wechseln', ru: 'Замена свечей, проводов и проверка масла в 5-МКПП' }, cost: '€130–210' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: '5-MT pinion bearing whine (early DUU/0AF boxes) & oil-ring wear', de: '5-Gang-Getriebelager-Heulen & Ölabstreifringe ab hoher Laufleistung', ru: 'Гул подшипника 5-МКПП и износ маслосъёмных колец на больших пробегах' }, cost: '€550–1,100', risk: { en: 'Loud gearbox whine in 1st–3rd gear or rising oil consumption', de: 'Lautes Getriebeheulen oder steigender Ölverbrauch', ru: 'Сильный гул коробки передач или рост расхода масла' }, damage: '€1,300–2,000' }
              ]
            },
            badges: {
              en: ['Lowest Repair Bills in Class', 'Timing Belt ~€450'],
              de: ['Niedrigste Reparaturkosten', 'Zahnriemen ca. 450 €'],
              ru: ['Минимальные счета на СТО', 'Ремень ГРМ ~€450']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.6-fsi',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [{ id: 'mq250-6mt-sc', isDefault: true }],
        buyerFitGroup: 'na-petrol',
        buyerFitOverrides: {
          ideal: ['a38pFsiNoTurbo', 'a38pCabinBenchmark', 'a38pCompactAgile', 'globalPetrolCityZones']
        },
        dossierGroup: 'petrol-6mt',
        isDefault: false,
        fuelType: 'petrol',
        hp: 115,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 FSI (8P)',
        fullName: '2006 Audi A3 1.6 FSI (8P)',
        engineBadge: '1.6L FSI • 115 HP',
        engineSubLabel: {
          en: '1.6L Direct-Injection Chain Petrol (07/2003–08/2007) • 6-MT • 155 Nm • FWD',
          de: '1.6L FSI Direkteinspritzer Kette (07/2003–08/2007) • 6-Gang • 155 Nm • FWD',
          ru: '1.6L FSI прямой впрыск цепь (07/2003–08/2007) • 6-МКПП • 155 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EARLY FSI',
          de: 'FRÜHER FSI',
          ru: 'РАННИЙ FSI'
        },
        originalMsrp: {
          en: '€22,600 New',
          de: '22.600 € Neu',
          ru: '€22 600 новый'
        },
        estUsedPrice: '€4,600',
        perkLabel: {
          en: '✦ 6-Speed Gearbox • Revvy 16V • Watch Timing Chain & NOx Sensor',
          de: '✦ 6-Gang-Getriebe • Drehfreudig • Kette & NOx-Sensor prüfen',
          ru: '✦ 6-ст. МКПП • Крутильный 16V • Цепь и датчик NOx'
        },
        remarkablePositives: {
          en: [
            '6-speed manual quieter on highway than 1.6 MPI',
            'Clean throttle response',
            'Decent mid-range once revved'
          ],
          de: [
            '6-Gang-Getriebe ruhiger als 1.6 MPI',
            'Direktes Ansprechverhalten',
            'Drehfreudig im oberen Bereich'
          ],
          ru: ['6-МКПП тише на трассе, чем 1.6 MPI', 'Отзывчивая педаль газа', 'Неплохо крутится']
        },
        notableNegatives: {
          en: [
            'Timing chain rattle & tensioner issues',
            'Expensive NOx sensor & carbon buildup',
            'Prefers 98 RON fuel; 1.6 MPI is more reliable'
          ],
          de: [
            'Steuerketten-Probleme beim Kaltstart',
            'Teurer NOx-Sensor & Verkokung',
            'Empfiehlt Super Plus; 1.6 MPI robuster'
          ],
          ru: [
            'Проблемы с цепью ГРМ',
            'Дорогой датчик NOx и нагар на клапанах',
            'Просит АИ-98; 1.6 MPI надёжнее'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 FSI Petrol (Chain)', de: '1.6L Reihenvierzylinder FSI (Kette)', ru: '1.6L R4 FSI Бензин (Цепь)' },
          forcedInduction: '@na', injection: '@direct', timingDrive: '@chain', gearbox: '@manual6', clutchDmf: '@singleClutch',
          towingBraked: '1,200 kg', sprint0100: '10.9 s', topSpeed: '196 km/h', peakTorque: '155 Nm @ 4,000 rpm',
          passingPunch: { en: 'Must Be Revved Hard', de: 'Braucht hohe Drehzahl', ru: 'Требует высоких оборотов' },
          realWorldFuel: '7.1 L/100km', tankRange: '55 L (~775 km)', euroNorm: 'Euro 4 (Petrol)', taxInsurance: '@tierLow', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 4.9,
            badges: {
              en: ['Watch Timing Chain & NOx Sensor', 'Carbon Buildup on Intake Valves'],
              de: ['Steuerkette & NOx-Sensor prüfen', 'Verkokung an Einlassventilen'],
              ru: ['Проверить цепь и датчик NOx', 'Нагар на впускных клапанах']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'BLP / BLF (EA111) · 1,598 cc' }, { k: 'architecture', v: { en: 'Inline-4 16V · Early Direct Injection + Simplex Chain', de: 'Reihenvierzylinder 16V · Frühe Direkteinspritzung + Kette', ru: 'Рядный 4-цил. 16V · Ранний FSI + цепь EA111' } }], note: { en: 'Slightly quicker and thriftier than the 1.6 MPI, but adds NOx sensor, intake carbon, and EA111 chain complexity for little extra punch.', de: 'Etwas flotter als der 1.6 MPI, bringt aber NOx-Sensor, Verkokung und EA111-Steuerkette für wenig Mehrleistung mit.', ru: 'Чуть бодрее 1.6 MPI, но добавляет дорогой датчик NOx, нагар на клапанах и риск по цепи EA111.' } },
              forcedInduction: '@naNoTurbo', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Early Direct-Injection 1.6L FSI — Crisp Throttle Response With Sensitive NOx & Fuel Sensors',
                lowScoreReasons: [
                  'Cold-Start Timing Chain Stretch & Tensioner Wear: Early FSI timing chains and hydraulic tensioners rattle on cold startup and can jump timing if neglected (€850–€1,200).',
                  'Expensive NOx Exhaust Sensor & Intake Carbon: Failing NOx sensors (€400–€550) and direct-injection carbon buildup on intake valves trigger recurring check-engine lights and rough idle.'
                ],
                strengths: [
                  'Naturally aspirated with no turbocharger or intercooler to fail.',
                  'Can reach 200,000–240,000+ km once the timing chain kit is refreshed and oil is changed every 10,000–12,000 km.'
                ],
                watchouts: [
                  'Ignition coil packs and high-pressure fuel sensors require periodic attention as mileage climbs.',
                  'Requires 98-octane fuel for rated efficiency and smooth running on early stratified-charge setups.'
                ],
                beforeYouBuy: [
                  'Listen closely on a dead-cold start for a 2-second metallic timing chain rattle.',
                  'Check the dashboard for check-engine lights or a stored NOx sensor fault history.',
                  'Verify smooth idle and crisp acceleration with no ignition coil misfire stumbles.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 3–4 yrs',
                    action: 'Strict 10,000–12,000 km full-synthetic oil changes & spark plugs',
                    cost: '€150–€230',
                    ifIgnored: 'Extended oil intervals accelerate timing chain and turbo wear',
                    damageCost: '€1,300–€2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Inspect plastic coolant pump housing, hoses & PCV valve diaphragm',
                    cost: '€280–€480',
                    ifIgnored: 'Cracked plastic cooling parts cause sudden overheating',
                    damageCost: '€1,000–€2,000'
                  },
                  {
                    tier: 'orange',
                    km: '90,000–130,000 km / 6–9 yrs',
                    action: 'Timing chain stretch & tensioner failure — full timing chain & guide rail kit',
                    cost: '€850–€1,450',
                    ifIgnored: 'Jumped timing chain bends valves and wrecks top end',
                    damageCost: '€2,800–€4,800'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–160,000 km / 8–10 yrs',
                    action: 'Intake valve walnut blasting (direct injection) & turbo wastegate check',
                    cost: '€380–€750',
                    ifIgnored: 'Carbon buildup causes misfires; seized wastegate cuts boost',
                    damageCost: '€1,100–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km / 10–12 yrs',
                    action: 'Replace clutch / DSG mechatronic service & piston ring / oil seal check',
                    cost: '€800–€1,600',
                    ifIgnored: 'Heavy oil consumption destroys catalytic converter',
                    damageCost: '€2,200–€3,800'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km / 12+ yrs',
                    action: 'Refresh suspension wishbones, dampers, wheel bearings & engine mounts',
                    cost: '€800–€1,400',
                    ifIgnored: 'Clunking front axle and uneven tire wear',
                    damageCost: '€1,400–€2,200'
                  }
                ]
              },
              de: {
                headline: 'Früher 1.6L FSI Direkteinspritzer — direktes Ansprechverhalten, aber empfindliche NOx- und Kraftstoffsensorik',
                lowScoreReasons: [
                  'Steuerketten-Längung beim Kaltstart: Kette und Spanner neigen ab mittlerer Laufleistung zum Rasseln und kosten im Tausch ca. 850–1.200 €.',
                  'Teurer NOx-Sensor & Einlassverkokung: Defekte NOx-Abgassensoren (400–550 €) und verkokte Einlassventile sorgen häufig für Motorkontrollleuchte und unrunden Lauf.'
                ],
                strengths: [
                  'Reiner Saugmotor ohne Turbolader oder Ladeluftkühler.',
                  'Erreicht 200.000–240.000+ km bei erneuertem Kettensatz und Ölwechseln alle 10.000–12.000 km.'
                ],
                watchouts: [
                  'Stabzündspulen und Hochdruck-Kraftstoffsensorik benötigen im Alter öfter Aufmerksamkeit.',
                  'Für volle Leistung und sauberen Lauf oft Super Plus (98 ROZ) empfohlen.'
                ],
                beforeYouBuy: [
                  'Beim völlig kalten Motorstart genau auf kurzes metallisches Steuerketten-Rasseln achten.',
                  'Sicherstellen, dass keine Motorkontrollleuchte brennt und keine NOx-Sensor-Fehler vorliegen.',
                  'Auf ruhigen Leerlauf und ruckfreies Hochdrehen ohne Zündaussetzer achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 3–4 J.',
                    action: 'Strikter 10.000–12.000 km Ölwechsel & Zündkerzen-Service',
                    cost: '150–230 €',
                    ifIgnored: 'Lange Intervalle beschleunigen Ketten- & Turboverschleiß',
                    damageCost: '1.300–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Kunststoff-Wasserpumpe, Schläuche & Kurbelgehäuseentlüftung prüfen',
                    cost: '280–480 €',
                    ifIgnored: 'Spröde Kunststoffteile führen zu plötzlichem Kühlmittelverlust',
                    damageCost: '1.000–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '90.000–130.000 km / 6–9 J.',
                    action: 'Steuerkettenlängung & Spanner-Versagen — Steuerkettensatz inkl. Spanner & Schienen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Übersprungene Kette verursacht kapitalen Motorschaden',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–160.000 km / 8–10 J.',
                    action: 'Einlassventile reinigen (Verkokung) & Turbolader-Gestänge prüfen',
                    cost: '380–750 €',
                    ifIgnored: 'Zündaussetzer durch Ruß; klemmendes Gestänge kostet Ladedruck',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km / 10–12 J.',
                    action: 'Kupplung / DSG-Service & Kolbenringe / Dichtungen auf Ölverbrauch prüfen',
                    cost: '800–1.600 €',
                    ifIgnored: 'Hoher Ölverbrauch ruiniert den Katalysator',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km / 12+ J.',
                    action: 'Querlenker, Stoßdämpfer, Radlager & Motorlager überholen',
                    cost: '800–1.400 €',
                    ifIgnored: 'Polternde Vorderachse & TÜV-Durchfall',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Ранний 1.6 FSI с прямым впрыском — живой отклик на газ, но капризные датчики NOx и давления топлива',
                lowScoreReasons: [
                  'Растяжение цепи ГРМ на холодную: Цепь и гидронатяжитель часто гремят при пуске и требуют замены (€850–1 200).',
                  'Дорогой датчик NOx и нагар на клапанах: Поломка датчика NOx (€400–550) и отложения на впускных клапанах вызывают ошибки и неровную работу.'
                ],
                strengths: [
                  'Атмосферный двигатель без турбины и интеркулера.',
                  'Проходит 200 000–240 000+ км после обновления комплекта цепи и при смене масла каждые 10–12 тыс. км.'
                ],
                watchouts: [
                  'Катушки зажигания и датчики высокого давления топлива требуют внимания с возрастом.',
                  'Чувствителен к качеству бензина — лучше заправлять АИ-98/95 высокого качества.'
                ],
                beforeYouBuy: [
                  'Прислушаться к полностью холодному пуску — не должно быть 2-секундного звона цепи.',
                  'Проверить отсутствие ошибок на панели и истории проблем с датчиком NOx.',
                  'Оценить ровный холостой ход и разгон без пропусков зажигания.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 3–4 года',
                    action: 'Строгая замена масла каждые 10–12 тыс. км и свечей зажигания',
                    cost: '€150–€230',
                    ifIgnored: 'Редкие ТО ускоряют износ цепи ГРМ и турбины',
                    damageCost: '€1 300–€2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Проверка пластиковой помпы, патрубков и мембраны ВКГ',
                    cost: '€280–€480',
                    ifIgnored: 'Трещины пластика вызывают утечку антифриза и перегрев',
                    damageCost: '€1 000–€2 000'
                  },
                  {
                    tier: 'orange',
                    km: '90 000–130 000 km / 6–9 лет',
                    action: 'Растяжение цепи ГРМ и отказ натяжителя — замена комплекта цепи и натяжителя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Перескок цепи ведёт к встрече клапанов с поршнями',
                    damageCost: '€2 800–€4 800'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–160 000 км / 8–10 лет',
                    action: 'Чистка впускных клапанов от нагара и проверка актуатора турбины',
                    cost: '€380–€750',
                    ifIgnored: 'Пропуски зажигания и потеря наддува',
                    damageCost: '€1 100–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км / 10–12 лет',
                    action: 'Замена сцепления / сервис DSG и контроль масложора (кольца/сальники)',
                    cost: '€800–€1 600',
                    ifIgnored: 'Высокий расход масла выводит из строя катализатор',
                    damageCost: '€2 200–€3 800'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км / 12+ лет',
                    action: 'Обновление рычагов подвески, амортизаторов, ступиц и опор мотора',
                    cost: '€800–€1 400',
                    ifIgnored: 'Стуки в подвеске и неравномерный износ шин',
                    damageCost: '€1 400–€2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 6.9,
            badges: {
              en: ['6-Speed Manual Durable', 'Good Shift Precision'],
              de: ['6-Gang-Schaltgetriebe haltbar', 'Präzise Schaltung'],
              ru: ['Надёжная 6-МКПП', 'Чёткий ход кулисы']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.1,
            badges: {
              en: ['0–100 km/h: 10.9 s • 196 km/h', 'Slightly Quicker Than 1.6 MPI'],
              de: ['0–100 km/h: 10,9 s • 196 km/h', 'Etwas flotter als 1.6 MPI'],
              ru: ['0–100 км/ч: 10,9 с • 196 км/ч', 'Чуть быстрее 1.6 MPI']
            }
          },
          midRangeTorquePassing: {
            score: 5.5,
            badges: {
              en: ['155 Nm @ 4,000 rpm', 'Must Be Revved Hard'],
              de: ['155 Nm bei 4.000 U/min', 'Braucht Drehzahl'],
              ru: ['155 Н·м при 4000 об/мин', 'Любит обороты']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 7.0,
            badges: {
              en: ['6.8–7.4 L/100km', 'Prefers 98 RON Fuel'],
              de: ['6,8–7,4 L/100km', 'Empfiehlt Super Plus 98'],
              ru: ['6,8–7,4 л/100 км', 'Предпочитает АИ-98']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Low 1.6L Tax Bracket', 'Euro 4'],
              de: ['Niedrige 1.6L-Steuer', 'Euro 4'],
              ru: ['Низкий налог 1.6 л', 'Евро-4']
            }
          },
          maintenanceRepairCosts: {
            score: 6.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen, Zündspulen & 6-Gang-Getriebeöl prüfen/wechseln', ru: 'Замена свечей, катушек и масла в 6-МКПП' }, cost: '€160–240' }
              ],
              critical: [
                { when: { en: '90,000–160,000 km', de: '90.000–160.000 km', ru: '90 000–160 000 км' }, action: { en: 'EA111 timing chain kit & exhaust NOx sensor replacement', de: 'EA111-Steuerkettensatz & Abgas-NOx-Sensor erneuern', ru: 'Замена цепи ГРМ EA111 и датчика NOx в выхлопе' }, cost: '€750–1,350', risk: { en: 'Stretched chain jumps teeth; faulty NOx sensor triggers CEL and high fuel burn', de: 'Übersprungene Kette zerstört Ventile; defekter NOx-Sensor erhöht Verbrauch', ru: 'Перескок цепи гнёт клапаны; сбой NOx зажигает Check Engine и повышает расход' }, damage: '€2,800–4,200' }
              ]
            },
            badges: {
              en: ['NOx Sensor ~€450', 'Chain Kit ~€850'],
              de: ['NOx-Sensor ca. 450 €', 'Kettensatz ca. 850 €'],
              ru: ['Датчик NOx ~€450', 'Цепь ГРМ ~€850']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.8-tfsi',
        defaultGearboxId: 'mq250-6mt-dmf',
        gearboxes: [
          { id: 'mq250-6mt-dmf', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€7,600',
            specOverrides: { sprint0100: '7.6 s', topSpeed: '222 km/h', realWorldFuel: '8.0 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 6.6,
                badges: {
                  en: ['8.0 L/100km (DSG)'],
                  de: ['8,0 L/100km (DSG)'],
                  ru: ['8,0 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'turbo-petrol',
        buyerFitOverrides: {
          skip: ['a38p18TfsiOilRisk', 'a38pDryDsgCare', 'a38pSmallBoot', 'a38pCabinWear']
        },
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 160,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.8 TFSI (8P)',
        fullName: '2010 Audi A3 1.8 TFSI (8P)',
        engineBadge: '1.8L TFSI • 160 HP',
        engineSubLabel: {
          en: '1.8L Turbo Chain Petrol (01/2007–03/2013) • 6-MT / 7-DSG • 250 Nm • FWD/Quattro',
          de: '1.8L TFSI Kettenmotor (01/2007–03/2013) • 6-Gang / 7-DSG • 250 Nm • FWD/Quattro',
          ru: '1.8L TFSI цепь (01/2007–03/2013) • 6-МКПП / 7-DSG • 250 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'OIL RISK WARNING',
          de: 'ÖLVERBRAUCH-RISIKO',
          ru: 'РИСК МАСЛОЖОРА'
        },
        originalMsrp: {
          en: '€27,400 New',
          de: '27.400 € Neu',
          ru: '€27 400 новый'
        },
        estUsedPrice: '€6,800',
        perkLabel: {
          en: '⚠ High Oil Consumption Risk (2008–2011) • Strong 250 Nm Pull',
          de: '⚠ Hohes Ölverbrauchs-Risiko (2008–2011) • Kräftige 250 Nm',
          ru: '⚠ Риск сильного масложора (2008–2011) • Тяга 250 Н·м'
        },
        remarkablePositives: {
          en: [
            'Strong, smooth 160 hp / 250 Nm punch',
            'Refined cruising & effortless overtaking',
            'Available with Quattro AWD'
          ],
          de: [
            'Kräftige, kultivierte 160 PS / 250 Nm',
            'Souveräner Autobahn-Durchzug',
            'Optional mit Quattro-Allrad'
          ],
          ru: [
            'Бодрая и ровная тяга 160 л.с. / 250 Н·м',
            'Лёгкие обгоны на трассе',
            'Доступен полный привод Quattro'
          ]
        },
        notableNegatives: {
          en: [
            'Notorious piston ring oil consumption (2008–2011)',
            'Timing chain tensioner failure risk',
            'Expensive rebuild if piston rings not fixed'
          ],
          de: [
            'Bekannter massiver Ölverbrauch durch Kolbenringe',
            'Steuerkettenspanner-Ausfallrisiko',
            'Teure Motorüberholung ohne Nachbesserung'
          ],
          ru: [
            'Известный масложор из-за поршневых колец',
            'Риск отказа натяжителя цепи ГРМ',
            'Дорогой капремонт без замены поршневой'
          ]
        },
        specOverrides: {
          engineName: { en: '1.8L I4 TFSI (EA888 Chain)', de: '1.8L Reihenvierzylinder TFSI (EA888)', ru: '1.8L R4 TFSI (Цепь EA888)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf', towingBraked: '1,400 kg',
          sprint0100: '7.7 s', topSpeed: '222 km/h', peakTorque: '250 Nm @ 1,500 rpm',
          passingPunch: { en: 'Instant 250 Nm Surge', de: 'Sofortiger 250-Nm-Schub', ru: 'Мгновенный подхват 250 Н·м' },
          realWorldFuel: '7.8 L/100km', tankRange: '55 L (~705 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 2.6,
            badges: {
              en: ['Piston Ring Oil Consumption Risk', 'Verify Rebuild Invoice Before Buying'],
              de: ['Kolbenring-Ölverbrauch-Risiko', 'Nur mit überholten Kolben kaufen'],
              ru: ['Риск масложора (кольца поршней)', 'Брать только после замены поршневой']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CDAA / BZB (EA888) · 1,798 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron Block · Turbo + Chain (Oil-Ring Watchout)', de: 'Reihenvierzylinder Grauguss · Turbo + Kette (Kolbenring-Risiko)', ru: 'Рядный 4-цил. чугунный блок · Турбо + цепь (риск масложора)' } }], note: { en: 'Quick, refined warm hatch, but 2009–2011 CDAA engines are infamous for clogged oil-control rings burning 1L/1,000 km and jumping chain tensioners.', de: 'Flott und kultiviert, aber 2009–2011er CDAA-Motoren sind berüchtigt für Ölverbrauch (Kolbenringe) und überspringende Kettenspanner.', ru: 'Быстрый и тихий, но моторы CDAA 2009–2011 печально известны масложором (кольца) и перескоком цепи ГРМ.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Fast and Refined, but Infamous for Severe Oil Burning & Chain Tensioner Failure',
                lowScoreReasons: [
                  'Defective Piston Oil Rings (2008–2011 EA888 Gen 2): Factory 1.5 mm oil scraper rings clog with carbon, causing extreme oil consumption of 1L every 300–800 km. Permanent repair requires modified pistons and connecting rods (€2,500–€3,800).',
                  'Ratchet Timing Chain Tensioner Failure: Early hydraulic tensioner locking teeth can slip on a cold start, letting the chain jump timing and bend the intake valves (€2,000–€3,500+ engine damage).'
                ],
                strengths: [
                  'Strong 250 Nm low-end turbo pull and refined 4-cylinder delivery.',
                  'Can reach 200,000–240,000+ km only once upgraded pistons and the revised chain tensioner are fitted.'
                ],
                watchouts: [
                  'Plastic water pump and thermostat housing mounted on the block are prone to cracking and leaking coolant.',
                  'Direct-injection intake valves build up carbon deposits past 100,000 km, causing rough cold idle.'
                ],
                beforeYouBuy: [
                  'Demand workshop invoices proving the piston & connecting-rod oil-consumption rebuild was completed.',
                  'Verify the revised timing chain & tensioner kit was installed and listen to a dead-cold start for rattle.',
                  'Wipe inside the tailpipe — thick, greasy black soot warns that the engine is actively burning oil.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 3–4 yrs',
                    action: 'Strict 10,000–12,000 km full-synthetic oil changes & spark plugs',
                    cost: '€150–€230',
                    ifIgnored: 'Extended oil intervals accelerate timing chain and turbo wear',
                    damageCost: '€1,300–€2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Inspect plastic coolant pump housing, hoses & PCV valve diaphragm',
                    cost: '€280–€480',
                    ifIgnored: 'Cracked plastic cooling parts cause sudden overheating',
                    damageCost: '€1,000–€2,000'
                  },
                  {
                    tier: 'orange',
                    km: '80,000–120,000 km / 6–9 yrs',
                    action: 'Timing chain tensioner & piston ring failure — full timing chain & guide rail kit',
                    cost: '€850–€1,450',
                    ifIgnored: 'Jumped timing chain bends valves and wrecks top end',
                    damageCost: '€2,800–€4,800'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–160,000 km / 8–10 yrs',
                    action: 'Intake valve walnut blasting (direct injection) & turbo wastegate check',
                    cost: '€380–€750',
                    ifIgnored: 'Carbon buildup causes misfires; seized wastegate cuts boost',
                    damageCost: '€1,100–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km / 10–12 yrs',
                    action: 'Replace clutch / DSG mechatronic service & piston ring / oil seal check',
                    cost: '€800–€1,600',
                    ifIgnored: 'Heavy oil consumption destroys catalytic converter',
                    damageCost: '€2,200–€3,800'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km / 12+ yrs',
                    action: 'Refresh suspension wishbones, dampers, wheel bearings & engine mounts',
                    cost: '€800–€1,400',
                    ifIgnored: 'Clunking front axle and uneven tire wear',
                    damageCost: '€1,400–€2,200'
                  }
                ]
              },
              de: {
                headline: 'Spritzig & kultiviert, aber berüchtigt für extremen Ölverbrauch & Kettenspanner-Schäden',
                lowScoreReasons: [
                  'Fehlerhafte Kolbenringe (2008–2011 EA888 Gen 2): Zu kleine Ölabstreifbohrungen verkoken und führen zu massivem Ölverbrauch von bis zu 1 Liter auf 300–800 km. Dauerhafte Abhilfe schaffen nur geänderte Kolben & Pleuel (2.500–3.800 €).',
                  'Versagender Steuerkettenspanner: Der frühe Ratschen-Kettenspanner kann beim Kaltstart überspringen und zu einem kapitalen Motorschaden durch krumme Ventile führen (2.000–3.500 €+).'
                ],
                strengths: [
                  'Kräftige 250 Nm schon ab niedriger Drehzahl und sehr kultivierter Motorlauf.',
                  'Erreicht 200.000–240.000+ km erst dann zuverlässig, wenn geänderte Kolben und der neue Kettenspanner verbaut wurden.'
                ],
                watchouts: [
                  'Das am Block montierte Kunststoff-Wasserpumpen- und Thermostatgehäuse neigt zu Rissen und Kühlmittelverlust.',
                  'Direkteinspritzung führt ab ca. 100.000 km zu verkokten Einlassventilen und unruhigem Kaltleerlauf.'
                ],
                beforeYouBuy: [
                  'Unbedingt Werkstattrechnungen über eine vollständige Kolben-/Pleuel-Überholung gegen Ölverbrauch verlangen.',
                  'Nachweis für den geänderten Steuerketten- & Spannersatz prüfen und beim Kaltstart genau auf Rasseln achten.',
                  'Auspuffendrohr innen auswischen — dicker, öliger Ruß verrät akuten Ölverbrauch.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 3–4 J.',
                    action: 'Strikter 10.000–12.000 km Ölwechsel & Zündkerzen-Service',
                    cost: '150–230 €',
                    ifIgnored: 'Lange Intervalle beschleunigen Ketten- & Turboverschleiß',
                    damageCost: '1.300–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Kunststoff-Wasserpumpe, Schläuche & Kurbelgehäuseentlüftung prüfen',
                    cost: '280–480 €',
                    ifIgnored: 'Spröde Kunststoffteile führen zu plötzlichem Kühlmittelverlust',
                    damageCost: '1.000–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '80.000–120.000 km / 6–9 J.',
                    action: 'Kettenspanner- & Kolbenring-Versagen — Steuerkettensatz inkl. Spanner & Schienen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Übersprungene Kette verursacht kapitalen Motorschaden',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–160.000 km / 8–10 J.',
                    action: 'Einlassventile reinigen (Verkokung) & Turbolader-Gestänge prüfen',
                    cost: '380–750 €',
                    ifIgnored: 'Zündaussetzer durch Ruß; klemmendes Gestänge kostet Ladedruck',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km / 10–12 J.',
                    action: 'Kupplung / DSG-Service & Kolbenringe / Dichtungen auf Ölverbrauch prüfen',
                    cost: '800–1.600 €',
                    ifIgnored: 'Hoher Ölverbrauch ruiniert den Katalysator',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km / 12+ J.',
                    action: 'Querlenker, Stoßdämpfer, Radlager & Motorlager überholen',
                    cost: '800–1.400 €',
                    ifIgnored: 'Polternde Vorderachse & TÜV-Durchfall',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Быстрый и тихий, но печально известен масложором и перескоком цепи',
                lowScoreReasons: [
                  'Дефектные маслосъёмные кольца (2008–2011 EA888 Gen 2): Узкие дренажные отверстия закоксовываются и вызывают расход масла до 1 л на 300–800 км. Надёжно лечится только заменой поршневой (€2 500–3 800).',
                  'Отказ натяжителя цепи ГРМ: Фиксатор старого гидронатяжителя срывается при холодном пуске, что ведёт к перескоку цепи и загибу клапанов (ремонт от €2 000–3 500+).'
                ],
                strengths: [
                  'Уверенная тяга 250 Н·м с низов и тихая, благородная работа двигателя.',
                  'Способен пройти 200 000–240 000+ км только после замены поршневой группы и обновлённого натяжителя цепи.'
                ],
                watchouts: [
                  'Пластиковый корпус помпы и термостата на блоке часто трескается и подтекает антифризом.',
                  'Прямой впрыск после 100 000 км даёт нагар на впускных клапанах и неровный холостой ход.'
                ],
                beforeYouBuy: [
                  'Требовать заказ-наряды на капремонт с заменой поршней и шатунов под толстые кольца.',
                  'Проверить документы о замене цепи с новым натяжителем и послушать пуск на полностью холодном моторе.',
                  'Провести пальцем внутри выхлопной трубы — жирный чёрный нагар говорит о сильном угаре масла.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 3–4 года',
                    action: 'Строгая замена масла каждые 10–12 тыс. км и свечей зажигания',
                    cost: '€150–€230',
                    ifIgnored: 'Редкие ТО ускоряют износ цепи ГРМ и турбины',
                    damageCost: '€1 300–€2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Проверка пластиковой помпы, патрубков и мембраны ВКГ',
                    cost: '€280–€480',
                    ifIgnored: 'Трещины пластика вызывают утечку антифриза и перегрев',
                    damageCost: '€1 000–€2 000'
                  },
                  {
                    tier: 'orange',
                    km: '80 000–120 000 km / 6–9 лет',
                    action: 'Отказ натяжителя цепи и залегание колец — замена комплекта цепи и натяжителя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Перескок цепи ведёт к встрече клапанов с поршнями',
                    damageCost: '€2 800–€4 800'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–160 000 км / 8–10 лет',
                    action: 'Чистка впускных клапанов от нагара и проверка актуатора турбины',
                    cost: '€380–€750',
                    ifIgnored: 'Пропуски зажигания и потеря наддува',
                    damageCost: '€1 100–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км / 10–12 лет',
                    action: 'Замена сцепления / сервис DSG и контроль масложора (кольца/сальники)',
                    cost: '€800–€1 600',
                    ifIgnored: 'Высокий расход масла выводит из строя катализатор',
                    damageCost: '€2 200–€3 800'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км / 12+ лет',
                    action: 'Обновление рычагов подвески, амортизаторов, ступиц и опор мотора',
                    cost: '€800–€1 400',
                    ifIgnored: 'Стуки в подвеске и неравномерный износ шин',
                    damageCost: '€1 400–€2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 4.8,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Limit', '250 Nm Maxes Out 7-DSG'],
              de: ['6-Gang solide • 7-DSG am Limit', '250 Nm belasten Trocken-DSG'],
              ru: ['6-МКПП надёжна • 7-DSG на пределе', '250 Н·м нагружают сухую DSG']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.0,
            badges: {
              en: ['0–100 km/h: 7.7 s • 222 km/h', 'Quick Mid-Size Hatch'],
              de: ['0–100 km/h: 7,7 s • 222 km/h', 'Flotter Kompakter'],
              ru: ['0–100 км/ч: 7,7 с • 222 км/ч', 'Быстрый хэтчбек']
            }
          },
          midRangeTorquePassing: {
            score: 7.7,
            badges: {
              en: ['250 Nm @ 1,500 rpm', 'Instant Mid-Range Surge'],
              de: ['250 Nm ab 1.500 U/min', 'Kräftiger Durchzug'],
              ru: ['250 Н·м с 1500 об/мин', 'Мощный подхват с низов']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 6.8,
            badges: {
              en: ['7.4–Thirsty (8.2 L/100km)', 'Plus Oil Top-Ups if Unfixed'],
              de: ['7,4–Durstig (8,2 L/100km)', 'Plus Ölverbrauch ohne Überholung'],
              ru: ['7,4–Прожорливый (8,2 л/100 км)', 'Плюс доливы масла до ремонта']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['Moderate 1.8L Tax', 'Higher Insurance Than 1.4'],
              de: ['Mittlere 1.8L-Steuer', 'Teurere Versicherung als 1.4'],
              ru: ['Средний налог 1.8 л', 'Страховка выше 1.4']
            }
          },
          maintenanceRepairCosts: {
            score: 2.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if 2.0 TFSI) + spark plugs & PCV valve check', de: 'Nasses 6-DSG-Öl wechseln (bei 2.0 TFSI) + Zündkerzen & KGE prüfen', ru: 'Замена масла в мокром 6-DSG (если есть) + свечи и клапан ВКГ (PCV)' }, cost: '€240–390' },
                { when: { en: 'Every 90,000–120,000 km', de: 'Alle 90.000–120.000 km', ru: 'Каждые 90–120 тыс. км' }, action: { en: 'Direct-injection intake valve walnut-blasting & water pump inspection', de: 'Einlassventile reinigen (Verkokung) & Wasserpumpe prüfen', ru: 'Чистка впускных клапанов от нагара и проверка помпы' }, cost: '€350–550' }
              ],
              critical: [
                { when: { en: '80,000–140,000 km', de: '80.000–140.000 km', ru: '80 000–140 000 км' }, action: { en: 'EA888 Gen2 thin oil-control piston rings (1L/1,000 km oil burn fix)', de: 'EA888 Gen2 Kolbenringe/Kolben-Umbau (bekanntes Ölverbrauchs-Problem)', ru: 'Замена поршней/колец EA888 Gen2 (масложор до 1 л / 1 000 км)' }, cost: '€2,600–4,200', risk: { en: 'Clogged rings burn oil rapidly, foul plugs, and score cylinder walls', de: 'Verkokte Ölabstreifringe führen zu extremem Ölverbrauch und Motorschaden', ru: 'Закоксовка колец вызывает дикий масложор и разрушение поршневой' }, damage: '€4,500–6,500' },
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'Timing chain & revised tensioner upgrade (pre-2012 weak tensioner!)', de: 'Steuerkette & verbesserter Kettenspanner (alte Spanner versagen!)', ru: 'Замена цепи ГРМ и натяжителя на обновлённый (старый перескакивает!)' }, cost: '€950–1,450', risk: { en: 'Ratchet failure on startup jumps chain and destroys cylinder head', de: 'Defekter Spanner lässt Kette beim Anlassen überspringen — Motorschaden', ru: 'Отказ натяжителя при запуске — перескок цепи и загиб клапанов' }, damage: '€3,500–5,500' }
              ]
            },
            badges: {
              en: ['Piston Rebuild €2,500–€3,800', 'Chain Kit ~€1,100'],
              de: ['Kolben-Revision 2.500–3.800 €', 'Steuerkette ca. 1.100 €'],
              ru: ['Капремонт поршневой €2500–€3800', 'Цепь ГРМ ~€1100']
            }
          },
          depreciationResale: {
            score: 5.6,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '2.0-fsi',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'aisin-6at',
            estUsedPrice: '€5,100',
            specOverrides: { sprint0100: '9.5 s', topSpeed: '209 km/h', realWorldFuel: '8.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 6.2,
                badges: {
                  en: ['0–100 km/h: 9.5 s (6-AT)', '209 km/h Top Speed'],
                  de: ['0–100 km/h: 9,5 s (6-AT)', '209 km/h Spitze'],
                  ru: ['0–100 км/ч: 9,5 s (6-AT)', 'Макс. 209 km/h']
                }
              },
              efficiencyFuel: {
                score: 5.4,
                badges: {
                  en: ['8.8 L/100km (6-AT)'],
                  de: ['8,8 L/100km (6-AT)'],
                  ru: ['8,8 L/100km (6-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol',
        buyerFitOverrides: {
          ideal: ['a38pFsiNoTurbo', 'a38pCabinBenchmark', 'a38pCompactAgile', 'globalPetrolCityZones']
        },
        dossierGroup: 'petrol-conv-auto',
        isDefault: false,
        fuelType: 'petrol',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 FSI (8P)',
        fullName: '2005 Audi A3 2.0 FSI (8P)',
        engineBadge: '2.0L FSI • 150 HP',
        engineSubLabel: {
          en: '2.0L Naturally Aspirated Direct-Inj. (03/2003–11/2006) • 6-MT / 6-AT • 200 Nm',
          de: '2.0L Saugmotor Direkteinspritzer (03/2003–11/2006) • 6-Gang / 6-AT • 200 Nm',
          ru: '2.0L FSI атмосферный (03/2003–11/2006) • 6-МКПП / 6-АКПП • 200 Н·м'
        },
        rarityLabel: {
          en: 'CLASSIC 2.0 NA',
          de: 'KLASSISCHER SAUGER',
          ru: 'АТМОСФЕРНЫЙ 2.0'
        },
        originalMsrp: {
          en: '€24,900 New',
          de: '24.900 € Neu',
          ru: '€24 900 новый'
        },
        estUsedPrice: '€4,500',
        perkLabel: {
          en: '✦ No Turbo • Traditional 6-Speed Auto Option • Prefers 98 RON',
          de: '✦ Kein Turbo • Wandler-Automatik möglich • Braucht Super Plus',
          ru: '✦ Без турбины • Классический 6-АКПП • Любит АИ-98'
        },
        remarkablePositives: {
          en: [
            'No turbocharger complexity',
            'Available with reliable Aisin 6-speed torque-converter auto',
            'Linear naturally aspirated feel'
          ],
          de: [
            'Kein Turbolader-Risiko',
            'Solide 6-Gang-Wandlerautomatik verfügbar',
            'Lineare Leistungsentfaltung'
          ],
          ru: ['Нет турбины', 'Надёжный 6-ст. классический автомат Aisin', 'Ровная линейная тяга']
        },
        notableNegatives: {
          en: [
            'Cam follower & intake carbon buildup',
            'NOx sensor & EGR issues on early cars',
            'Feels flat low down vs 1.4/2.0 TFSI'
          ],
          de: [
            'Hochdruckpumpen-Stößel & Verkokung',
            'NOx-Sensor & AGR oft defekt',
            'Untenrum träger als TFSI-Turbos'
          ],
          ru: [
            'Износ толкателя ТНВД и нагар на клапанах',
            'Ошибки по датчику NOx и EGR',
            'Снизу уступает турбомоторам'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 FSI Petrol (Belt)', de: '2.0L Reihenvierzylinder FSI (Riemen)', ru: '2.0L R4 FSI Бензин (Ремень)' },
          forcedInduction: '@na', injection: '@direct', timingDrive: '@belt',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch', towingBraked: '1,400 kg',
          sprint0100: '9.1 s', topSpeed: '211 km/h', peakTorque: '200 Nm @ 3,500 rpm',
          passingPunch: { en: 'Linear Pull Above 3,500', de: 'Linear ab 3.500/min', ru: 'Ровная тяга выше 3 500' },
          realWorldFuel: '8.2 L/100km', tankRange: '55 L (~670 km)', euroNorm: 'Euro 4 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 6.2,
            badges: {
              en: ['Solid Bottom End • No Turbo', 'Watch Cam Follower & NOx Sensor'],
              de: ['Robuster Rumpf • Kein Turbo', 'Stößel & NOx-Sensor prüfen'],
              ru: ['Крепкий блок • Без турбины', 'Проверить толкатель ТНВД и NOx']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'BLR / BVY (EA113) · 1,984 cc' }, { k: 'architecture', v: { en: 'Inline-4 Naturally Aspirated FSI · Belt + Rear Cam Chain', de: 'Reihenvierzylinder Sauger FSI · Zahnriemen + hintere Kette', ru: 'Рядный 4-цил. атмосферный FSI · Ремень + малая цепь валов' } }], note: { en: 'Solid naturally aspirated 2.0 with optional Aisin 6-AT; prefers 98 RON petrol and watch the high-pressure fuel-pump cam follower.', de: 'Solider 2.0-Sauger mit robuster Aisin-6-AT-Option; bevorzugt Super Plus und braucht gelegentlich neue Hochdruckpumpen-Stößel.', ru: 'Крепкий атмосферник 2.0 с надёжным 6-АКПП Aisin; любит 98-й бензин и требует контроля толкателя ТНВД.' } },
              forcedInduction: '@naNoTurbo', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Early 2.0 non-turbo FSI— decent mechanicals if cam follower and NOx sensor are healthy.',
                strengths: [
                  'Timing belt front drive is straightforward.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'High-pressure fuel pump cam follower wear.',
                  'Intake carbon buildup and NOx sensor faults.'
                ],
                beforeYouBuy: [
                  'Check for loud diesel-like tick from rear chain/cam follower.',
                  'Scan for NOx / EGR fault codes.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 4 yrs',
                    action: 'Annual oil/filter service (15,000 km max) & cabin/air filters',
                    cost: '€130–€200',
                    ifIgnored: 'Sludge buildup and premature cam lobe wear',
                    damageCost: '€800–€1,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Replace spark plugs, ignition coils & age-hardened coolant hoses',
                    cost: '€220–€380',
                    ifIgnored: 'Misfires damage catalytic converter; old hoses split',
                    damageCost: '€900–€1,500'
                  },
                  {
                    tier: 'orange',
                    km: '120,000 km / 6–8 yrs',
                    action: 'Timing belt, water pump & thermostat housing replacement',
                    cost: '€520–€820',
                    ifIgnored: 'Aged rubber belt snaps and bends valves',
                    damageCost: '€2,500–€4,000'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Clutch kit / dry-DSG clutch pack & crankcase breather valve service',
                    cost: '€650–€1,300',
                    ifIgnored: 'Slipping clutch or vacuum leaks cause rough idle',
                    damageCost: '€1,400–€2,200'
                  },
                  {
                    tier: 'red',
                    km: '170,000–210,000 km / 10–12 yrs',
                    action: 'Exhaust flexi-pipe, catalytic converter & camshaft seal refresh',
                    cost: '€450–€950',
                    ifIgnored: 'Oil leaks onto exhaust and failed emissions test',
                    damageCost: '€1,200–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front wishbone bushings, dampers & engine mounts',
                    cost: '€750–€1,300',
                    ifIgnored: 'Vague steering and tire wear',
                    damageCost: '€1,300–€2,000'
                  }
                ]
              },
              de: {
                headline: 'Früher 2.0-Saug-FSI— mechanisch solide, wenn Pumpenstößel & NOx-Sensor intakt sind.',
                strengths: [
                  'Kein Turbolader; robuste Aisin-6-Gang-Automatik.',
                  'Zahnriemenantrieb vorne unkompliziert.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: ['Verschleiß am Stößel der Hochdruckpumpe.', 'Verkokung & defekter NOx-Sensor.'],
                beforeYouBuy: [
                  'Auf lautes Nageln hinten (Steuerkette/Stößel) achten.',
                  '6-Gang-Automatik warm weich schaltend testen.',
                  'Fehlerspeicher auf NOx/AGR prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterservice (max. 15.000 km)',
                    cost: '130–200 €',
                    ifIgnored: 'Ölschlamm und erhöhter Nockenwellen-Verschleiß',
                    damageCost: '800–1.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Zündkerzen, Zündspulen & gealterte Kühlerschläuche ersetzen',
                    cost: '220–380 €',
                    ifIgnored: 'Zündaussetzer schädigen Katalysator; spröde Schläuche platzen',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000 km / 6–8 J.',
                    action: 'Zahnriemen-Wechsel inkl. Wasserpumpe & Thermostatgehäuse',
                    cost: '520–820 €',
                    ifIgnored: 'Alternder Zahnriemen reißt und verursacht Motorschaden',
                    damageCost: '2.500–4.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Kupplungssatz / Trocken-DSG-Kupplung & Entlüftungsventil erneuern',
                    cost: '650–1.300 €',
                    ifIgnored: 'Rutschende Kupplung oder unrunder Leerlauf',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'red',
                    km: '170.000–210.000 km / 10–12 J.',
                    action: 'Flexrohr, Katalysator & Nockenwellen-Dichtungen erneuern',
                    cost: '450–950 €',
                    ifIgnored: 'Ölverlust und nicht bestandene AU',
                    damageCost: '1.200–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Querlenkerbuchsen, Stoßdämpfer & Motorlager überholen',
                    cost: '750–1.300 €',
                    ifIgnored: 'Schwammiges Fahrverhalten & Reifenverschleiß',
                    damageCost: '1.300–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Ранний атмосферный 2.0 FSI— крепок по железу при уходе за толкателем ТНВД и NOx.',
                strengths: [
                  'Простой ременной привод спереди.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: ['Износ толкателя ТНВД.', 'Нагар на впуске и ошибки датчика NOx.'],
                beforeYouBuy: [
                  'Слушать цокот сзади мотора (цепь/толкатель).',
                  'Проверить ошибки по NOx и EGR.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и фильтров',
                    cost: '€130–€200',
                    ifIgnored: 'Нагар и ускоренный износ распредвалов',
                    damageCost: '€800–€1 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Замена свечей, катушек зажигания и стареющих патрубков охлаждения',
                    cost: '€220–€380',
                    ifIgnored: 'Пропуски сжигают катализатор; старые шланги лопаются',
                    damageCost: '€900–€1 500'
                  },
                  {
                    tier: 'orange',
                    km: '120 000 km / 6–8 лет',
                    action: 'Замена ремня ГРМ, водяной помпы и корпуса термостата',
                    cost: '€520–€820',
                    ifIgnored: 'Обрыв ремня от возраста или пробега гнёт клапаны',
                    damageCost: '€2 500–€4 000'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена сцепления / фрикционов сухой DSG и клапана ВКГ',
                    cost: '€650–€1 300',
                    ifIgnored: 'Пробуксовка сцепления и подсос воздуха',
                    damageCost: '€1 400–€2 200'
                  },
                  {
                    tier: 'red',
                    km: '170 000–210 000 км / 10–12 лет',
                    action: 'Замена гофры выхлопа, катализатора и сальников распредвала',
                    cost: '€450–€950',
                    ifIgnored: 'Течи масла и проблемы с выхлопом на техосмотре',
                    damageCost: '€1 200–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков рычагов, амортизаторов и опор',
                    cost: '€750–€1 300',
                    ifIgnored: 'Разболтанная подвеска и износ шин',
                    damageCost: '€1 300–€2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.4,
            badges: {
              en: ['6-MT & 6-AT Aisin Both Solid', 'Change 6-AT Fluid Every 60k km'],
              de: ['6-Gang & 6-Stufen-Wandler solide', 'Automatiköl alle 60 Tkm wechseln'],
              ru: ['6-МКПП и 6-АКПП Aisin надёжны', 'Менять масло в АКПП раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.6,
            badges: {
              en: ['0–100 km/h: 9.1 s • 211 km/h', 'Needs Revs Above 3,500 rpm'],
              de: ['0–100 km/h: 9,1 s • 211 km/h', 'Braucht Drehzahl ab 3.500 U/min'],
              ru: ['0–100 км/ч: 9,1 с • 211 км/ч', 'Оживает после 3500 об/мин']
            }
          },
          midRangeTorquePassing: {
            score: 6.4,
            badges: {
              en: ['200 Nm @ 3,500 rpm', 'Linear NA Torque'],
              de: ['200 Nm bei 3.500 U/min', 'Gleichmäßiger Sauger'],
              ru: ['200 Н·м при 3500 об/мин', 'Ровная атмосферная тяга']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 6.0,
            badges: {
              en: ['7.8–Thirsty (8.6 L/100km)', 'Prefers 98 RON Fuel'],
              de: ['7,8–Durstig (8,6 L/100km)', 'Empfiehlt Super Plus 98'],
              ru: ['7,8–Прожорливый (8,6 л/100 км)', 'Просит АИ-98']
            }
          },
          taxInsuranceNorm: {
            score: 7.0,
            badges: {
              en: ['2.0L Older Euro 4 Tax', 'Affordable Purchase Price'],
              de: ['2.0L-Steuer (Euro 4)', 'Günstiger Kaufpreis'],
              ru: ['Налог за 2.0 л Евро-4', 'Низкая цена покупки']
            }
          },
          maintenanceRepairCosts: {
            score: 6.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 120,000 km / 7 yrs', de: 'Alle 120.000 km / 7 J.', ru: 'Каждые 120 000 км / 7 лет' }, action: { en: 'Replace timing belt kit & water pump; change Aisin 6-AT fluid every 60k', de: 'Zahnriemensatz & Wasserpumpe wechseln; Aisin-6-AT-Öl alle 60.000 km', ru: 'Замена ремня ГРМ и помпы; масло в 6-АКПП Aisin каждые 60 000 км' }, cost: '€480–750' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Inspect HPFP cam follower tappet & spark plugs', de: 'Becherstößel der Hochdruckpumpe & Zündkerzen prüfen', ru: 'Проверка толкателя ТНВД и замена свечей' }, cost: '€160–250' }
              ],
              critical: [
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'HPFP cam follower wear, intake manifold flap motor & rear cam chain', de: 'HPFP-Becherstößel, Saugrohrklappen-Stellmotor & Nockenwellenkette', ru: 'Износ толкателя ТНВД, привод заслонок впуска и цепь распредвалов' }, cost: '€450–950', risk: { en: 'Worn cam follower grinds down intake camshaft lobe and HPFP', de: 'Durchgeschliffener Stößel zerstört Nockenwelle und Hochdruckpumpe', ru: 'Протёртый толкатель уничтожает кулачок распредвала и ТНВД' }, damage: '€1,800–2,800' }
              ]
            },
            badges: {
              en: ['Belt + Chain Link Service', 'Cam Follower Cheap (€45)'],
              de: ['Zahnriemen + kurze Kette hinten', 'Pumpenstößel günstig (45 €)'],
              ru: ['Ремень + задняя цепь', 'Толкатель ТНВД дешёвый (€45)']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '2.0-tfsi',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€9,100',
            specOverrides: { sprint0100: '6.8 s', topSpeed: '236 km/h', realWorldFuel: '9.2 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 5.3,
                badges: {
                  en: ['9.2 L/100km (DSG)'],
                  de: ['9,2 L/100km (DSG)'],
                  ru: ['9,2 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'turbo-petrol',
        buyerFitOverrides: {
          skip: ['a38pChainOilRisk', 'a38pWetDsgFluid', 'a38pSmallBoot', 'a38pCabinWear']
        },
        dossierGroup: 'petrol-wet-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 200,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TFSI (8P)',
        fullName: '2010 Audi A3 2.0 TFSI (8P)',
        engineBadge: '2.0L TFSI • 200 HP',
        engineSubLabel: {
          en: '2.0L Turbo Petrol (07/2004–03/2013) • 6-MT / 6-DSG • 280 Nm • FWD/Quattro',
          de: '2.0L TFSI Turbo (07/2004–03/2013) • 6-Gang / 6-DSG • 280 Nm • FWD/Quattro',
          ru: '2.0L TFSI турбо (07/2004–03/2013) • 6-МКПП / 6-DSG • 280 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'GTI-POWERED A3',
          de: 'GTI-MOTORISIERUNG',
          ru: 'С ДУШОЙ GTI'
        },
        originalMsrp: {
          en: '€30,600 New',
          de: '30.600 € Neu',
          ru: '€30 600 новый'
        },
        estUsedPrice: '€8,200',
        perkLabel: {
          en: '✦ Golf GTI Heart • Wet 6-DSG / Quattro • Watch Oil/Cam Follower',
          de: '✦ Golf-GTI-Motor • Nasses 6-DSG / Quattro • Öl/Stößel prüfen',
          ru: '✦ Мотор от Golf GTI • Мокрая 6-DSG / Quattro • Контроль масла/ТНВД'
        },
        remarkablePositives: {
          en: [
            '200 hp / 280 Nm hot-hatch pace in discreet clothes',
            'Wet 6-speed DSG is much tougher than 7-DSG',
            'Available with Quattro AWD'
          ],
          de: [
            '200 PS / 280 Nm im dezenten Kleid',
            'Nasses 6-Gang-DSG deutlich haltbarer',
            'Mit Quattro-Allrad erhältlich'
          ],
          ru: [
            'Динамика хот-хэтча (200 л.с. / 280 Н·м)',
            'Мокрая 6-DSG намного крепче сухой',
            'Есть версии с Quattro'
          ]
        },
        notableNegatives: {
          en: [
            'Early belt engines: cam follower wear; late chain engines: oil consumption',
            'High-mileage timing chain tensioner risk (2008+)',
            'Thirsty under boost (8.5–10 L/100km)'
          ],
          de: [
            'Früh: Pumpenstößel; Spät (2008+): Ölverbrauch & Kette',
            'Steuerkettenspanner ab 2008 prüfen',
            'Bei flottem Tempo 8,5–10 L/100km'
          ],
          ru: [
            'Ранние: толкатель ТНВД; поздние (2008+): масложор и цепь',
            'Натяжитель цепи требует проверки',
            'Расход под нагрузкой 8,5–10 л'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TFSI (200 HP Turbo)', de: '2.0L Reihenvierzylinder TFSI (200 PS)', ru: '2.0L R4 TFSI (200 л.с. Турбо)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@dsg6Wet', towingBraked: '1,400 kg',
          sprint0100: '6.9 s', topSpeed: '238 km/h', peakTorque: '280 Nm @ 1,800 rpm',
          passingPunch: { en: 'Effortless Warm-Hatch Pull', de: 'Souveräner Warm-Hatch-Schub', ru: 'Мощный подхват хот-хэтча' },
          realWorldFuel: '8.9 L/100km', tankRange: '55 L (~620 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierModHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 4.2,
            badges: {
              en: ['2004–08 Belt Engine Better Than 2009–11 Chain', 'Check Cam Follower or Oil Burn'],
              de: ['2004–08 Zahnriemen solider als 2009–11 Kette', 'Stößel bzw. Ölverbrauch prüfen'],
              ru: ['Ременной 2004–08 удачнее цепного 2009–11', 'Проверить толкатель / масложор']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CCZA (EA888) / BWA (EA113) · 1,984 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron Turbo · Pairs With Wet 6-DSG (DQ250)', de: 'Reihenvierzylinder Grauguss-Turbo · Mit nassem 6-DSG', ru: 'Рядный 4-цил. чугунный турбо · Мокрый 6-DSG (DQ250)' } }], note: { en: 'Rapid 6.9 s sleeper with the tough wet-clutch 6-DSG; facelift CCZA needs the updated chain tensioner and oil-burn check before purchase.', de: 'Schneller 6,9-s-Sleeper mit robustem nassem 6-DSG; Facelift-CCZA unbedingt auf Kettenspanner-Update und Ölverbrauch prüfen.', ru: 'Быстрый хэтч (6,9 с) с крепким мокрым 6-DSG; у рестайлинга CCZA проверяйте натяжитель цепи и расход масла.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Punchy 200 HP Turbo — Split Between Cam-Follower Wear & EA888 Oil Burning',
                lowScoreReasons: [
                  'Two Distinct High-Risk Generations: Facelift 2008–2011 chain engines share the EA888 piston-ring oil-burning & chain-tensioner failure, while early 2004–2008 belt engines wear out the fuel-pump cam follower.',
                  'Diverter Valve, PCV & Direct-Injection Carbon: Torn boost/PCV valves and clogged intake valves frequently cause rough idle and power loss.'
                ],
                strengths: [
                  'Potent 200 HP / 280 Nm punch, with early belt-driven builds avoiding the worst oil burning.',
                  'Can reach 200,000–240,000+ km once cam-follower or piston/tensioner updates and 10,000 km oil changes are maintained.'
                ],
                watchouts: [
                  'Early 2004–2008 cars need fuel-pump cam follower inspection every 40,000 km (a €45 part that wrecks the camshaft if neglected).',
                  'Check thermostat housing and rear main oil seal for coolant/oil seepage.'
                ],
                beforeYouBuy: [
                  'Identify whether the car is pre-2008 (belt-driven) or 2008+ (chain-driven) and verify its specific fix (cam follower vs piston/tensioner rebuild).',
                  'Inspect oil consumption history and tailpipe soot, especially on 2008–2011 facelift models.',
                  'Verify smooth, surge-free full boost under load with no whistling PCV breather leaks.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km / 3–4 yrs',
                    action: 'Strict 10,000–12,000 km full-synthetic oil changes & spark plugs',
                    cost: '€150–€230',
                    ifIgnored: 'Extended oil intervals accelerate timing chain and turbo wear',
                    damageCost: '€1,300–€2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '60,000–90,000 km / 5–7 yrs',
                    action: 'Inspect plastic coolant pump housing, hoses & PCV valve diaphragm',
                    cost: '€280–€480',
                    ifIgnored: 'Cracked plastic cooling parts cause sudden overheating',
                    damageCost: '€1,000–€2,000'
                  },
                  {
                    tier: 'orange',
                    km: '90,000–130,000 km / 6–9 yrs',
                    action: 'Timing chain stretch & tensioner failure — full timing chain & guide rail kit',
                    cost: '€850–€1,450',
                    ifIgnored: 'Jumped timing chain bends valves and wrecks top end',
                    damageCost: '€2,800–€4,800'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–160,000 km / 8–10 yrs',
                    action: 'Intake valve walnut blasting (direct injection) & turbo wastegate check',
                    cost: '€380–€750',
                    ifIgnored: 'Carbon buildup causes misfires; seized wastegate cuts boost',
                    damageCost: '€1,100–€1,900'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km / 10–12 yrs',
                    action: 'Replace clutch / DSG mechatronic service & piston ring / oil seal check',
                    cost: '€800–€1,600',
                    ifIgnored: 'Heavy oil consumption destroys catalytic converter',
                    damageCost: '€2,200–€3,800'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km / 12+ yrs',
                    action: 'Refresh suspension wishbones, dampers, wheel bearings & engine mounts',
                    cost: '€800–€1,400',
                    ifIgnored: 'Clunking front axle and uneven tire wear',
                    damageCost: '€1,400–€2,200'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger 200-PS-Turbo — je nach Baujahr Becherstößel- oder Kolbenring-Risiko',
                lowScoreReasons: [
                  'Zwei kritische Fehlerbilder je nach Generation: Facelift-Motoren (2008–2011) leiden unter EA888-Kolbenring-Ölverbrauch & Kettenspanner-Versagen; frühe Zahnriemen-Motoren (2004–2008) verschleißen den Hochdruckpumpen-Stößel.',
                  'Schubumluftventil, Kurbelgehäuseentlüftung (PCV) & Verkokung: Gerissene Membranen und Ölkohle an den Einlassventilen kosten spürbar Leistung.'
                ],
                strengths: [
                  'Souveräne 200 PS / 280 Nm; frühe Zahnriemen-Versionen (bis 2008) sind frei vom extremen Ölverbrauch.',
                  'Erreicht 200.000–240.000+ km bei behobener Generationen-Schwachstelle und Ölwechseln alle 10.000 km.'
                ],
                watchouts: [
                  'Bei Modellen bis 2008 den Becherstößel der Hochdruckpumpe alle 40.000 km prüfen (sonst Nockenwellenschaden).',
                  'Thermostatgehäuse und Kurbelwellendichtring auf Kühlmittel- bzw. Ölverlust kontrollieren.'
                ],
                beforeYouBuy: [
                  'Baujahr prüfen: Vor-2008 auf Becherstößel/Zahnriemen, 2008+ auf Kolben-/Kettenspanner-Nachweise achten.',
                  'Ölverbrauch erfragen und Endrohre auf dicken, öligen Ruß kontrollieren.',
                  'Unter Volllast sauber durchbeschleunigen — kein Ruckeln, Pfeifen oder Ladedruckabfall.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km / 3–4 J.',
                    action: 'Strikter 10.000–12.000 km Ölwechsel & Zündkerzen-Service',
                    cost: '150–230 €',
                    ifIgnored: 'Lange Intervalle beschleunigen Ketten- & Turboverschleiß',
                    damageCost: '1.300–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '60.000–90.000 km / 5–7 J.',
                    action: 'Kunststoff-Wasserpumpe, Schläuche & Kurbelgehäuseentlüftung prüfen',
                    cost: '280–480 €',
                    ifIgnored: 'Spröde Kunststoffteile führen zu plötzlichem Kühlmittelverlust',
                    damageCost: '1.000–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '90.000–130.000 km / 6–9 J.',
                    action: 'Steuerkettenlängung & Spanner-Versagen — Steuerkettensatz inkl. Spanner & Schienen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Übersprungene Kette verursacht kapitalen Motorschaden',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–160.000 km / 8–10 J.',
                    action: 'Einlassventile reinigen (Verkokung) & Turbolader-Gestänge prüfen',
                    cost: '380–750 €',
                    ifIgnored: 'Zündaussetzer durch Ruß; klemmendes Gestänge kostet Ladedruck',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km / 10–12 J.',
                    action: 'Kupplung / DSG-Service & Kolbenringe / Dichtungen auf Ölverbrauch prüfen',
                    cost: '800–1.600 €',
                    ifIgnored: 'Hoher Ölverbrauch ruiniert den Katalysator',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km / 12+ J.',
                    action: 'Querlenker, Stoßdämpfer, Radlager & Motorlager überholen',
                    cost: '800–1.400 €',
                    ifIgnored: 'Polternde Vorderachse & TÜV-Durchfall',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Бодрый турбо 200 л.с. — риск толкателя ТНВД (до 2008) или масложора (после 2008)',
                lowScoreReasons: [
                  'Разные серьёзные риски по годам: Рестайлинговые моторы (2008–2011) страдают масложором колец и срывом натяжителя цепи EA888, а ранние ременные (2004–2008) протирают толкатель ТНВД с износом распредвала.',
                  'Клапаны ВКГ (PCV), байпас и нагар: Порванные мембраны и закоксовка впуска вызывают подсосы воздуха и потерю тяги.'
                ],
                strengths: [
                  'Отличная динамика (200 л.с. / 280 Н·м), а ранние ременные версии не страдают повальным масложором.',
                  'Ходит 200 000–240 000+ км после устранения возрастных болячек и при смене масла каждые 10 000 км.'
                ],
                watchouts: [
                  'На машинах 2004–2008 гг. проверяйте толкатель ТНВД каждые 40 000 км (недорогая деталь спасает распредвал).',
                  'Осмотрите корпус термостата и задний сальник коленвала на течи.'
                ],
                beforeYouBuy: [
                  'Уточнить поколение мотора: до 2008 г. проверить толкатель ТНВД и ремень, с 2008 г. — ремонт поршневой и цепи.',
                  'Проверить уровень масла и нагар в выхлопной трубе на рестайлинговых версиях.',
                  'Убедиться в ровном разгоне под полным наддувом без свиста подсосов воздуха.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км / 3–4 года',
                    action: 'Строгая замена масла каждые 10–12 тыс. км и свечей зажигания',
                    cost: '€150–€230',
                    ifIgnored: 'Редкие ТО ускоряют износ цепи ГРМ и турбины',
                    damageCost: '€1 300–€2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '60 000–90 000 км / 5–7 лет',
                    action: 'Проверка пластиковой помпы, патрубков и мембраны ВКГ',
                    cost: '€280–€480',
                    ifIgnored: 'Трещины пластика вызывают утечку антифриза и перегрев',
                    damageCost: '€1 000–€2 000'
                  },
                  {
                    tier: 'orange',
                    km: '90 000–130 000 km / 6–9 лет',
                    action: 'Растяжение цепи ГРМ и отказ натяжителя — замена комплекта цепи и натяжителя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Перескок цепи ведёт к встрече клапанов с поршнями',
                    damageCost: '€2 800–€4 800'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–160 000 км / 8–10 лет',
                    action: 'Чистка впускных клапанов от нагара и проверка актуатора турбины',
                    cost: '€380–€750',
                    ifIgnored: 'Пропуски зажигания и потеря наддува',
                    damageCost: '€1 100–€1 900'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км / 10–12 лет',
                    action: 'Замена сцепления / сервис DSG и контроль масложора (кольца/сальники)',
                    cost: '€800–€1 600',
                    ifIgnored: 'Высокий расход масла выводит из строя катализатор',
                    damageCost: '€2 200–€3 800'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км / 12+ лет',
                    action: 'Обновление рычагов подвески, амортизаторов, ступиц и опор мотора',
                    cost: '€800–€1 400',
                    ifIgnored: 'Стуки в подвеске и неравномерный износ шин',
                    damageCost: '€1 400–€2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['Wet 6-DSG & 6-MT Both Tough', 'Service DSG Oil Every 60,000 km'],
              de: ['Nasses 6-DSG & 6-Gang sehr robust', 'DSG-Ölwechsel alle 60.000 km'],
              ru: ['Мокрая 6-DSG и 6-МКПП крепки', 'Масло в 6-DSG менять раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.8,
            badges: {
              en: ['0–100 km/h: 6.9 s • 238 km/h', 'True Warm-Hatch Speed'],
              de: ['0–100 km/h: 6,9 s • 238 km/h', 'Echtes GTI-Tempo'],
              ru: ['0–100 км/ч: 6,9 с • 238 км/ч', 'Настоящая динамика GTI']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['280 Nm @ 1,800 rpm', 'Effortless Pulling Power'],
              de: ['280 Nm ab 1.800 U/min', 'Druck in jeder Lebenslage'],
              ru: ['280 Н·м с 1800 об/мин', 'Мощная тяга с низов']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 5.6,
            badges: {
              en: ['8.3–Thirsty (9.5 L/100km)', 'Likes 98 RON Fuel'],
              de: ['8,3–Durstig (9,5 L/100km)', 'Bevorzugt Super Plus 98'],
              ru: ['8,3–Прожорливый (9,5 л/100 км)', 'Предпочитает АИ-98']
            }
          },
          taxInsuranceNorm: {
            score: 6.4,
            badges: {
              en: ['Higher Insurance & 2.0L Tax', 'Performance Trim Costs'],
              de: ['Höhere Versicherung & 2.0L-Steuer', 'GTI-Niveau beim Unterhalt'],
              ru: ['Повышенная страховка и налог', 'Уровень содержания хот-хэтча']
            }
          },
          maintenanceRepairCosts: {
            score: 4.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if 2.0 TFSI) + spark plugs & PCV valve check', de: 'Nasses 6-DSG-Öl wechseln (bei 2.0 TFSI) + Zündkerzen & KGE prüfen', ru: 'Замена масла в мокром 6-DSG (если есть) + свечи и клапан ВКГ (PCV)' }, cost: '€240–390' },
                { when: { en: 'Every 90,000–120,000 km', de: 'Alle 90.000–120.000 km', ru: 'Каждые 90–120 тыс. км' }, action: { en: 'Direct-injection intake valve walnut-blasting & water pump inspection', de: 'Einlassventile reinigen (Verkokung) & Wasserpumpe prüfen', ru: 'Чистка впускных клапанов от нагара и проверка помпы' }, cost: '€350–550' }
              ],
              critical: [
                { when: { en: '80,000–140,000 km', de: '80.000–140.000 km', ru: '80 000–140 000 км' }, action: { en: 'EA888 Gen2 thin oil-control piston rings (1L/1,000 km oil burn fix)', de: 'EA888 Gen2 Kolbenringe/Kolben-Umbau (bekanntes Ölverbrauchs-Problem)', ru: 'Замена поршней/колец EA888 Gen2 (масложор до 1 л / 1 000 км)' }, cost: '€2,600–4,200', risk: { en: 'Clogged rings burn oil rapidly, foul plugs, and score cylinder walls', de: 'Verkokte Ölabstreifringe führen zu extremem Ölverbrauch und Motorschaden', ru: 'Закоксовка колец вызывает дикий масложор и разрушение поршневой' }, damage: '€4,500–6,500' },
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'Timing chain & revised tensioner upgrade (pre-2012 weak tensioner!)', de: 'Steuerkette & verbesserter Kettenspanner (alte Spanner versagen!)', ru: 'Замена цепи ГРМ и натяжителя на обновлённый (старый перескакивает!)' }, cost: '€950–1,450', risk: { en: 'Ratchet failure on startup jumps chain and destroys cylinder head', de: 'Defekter Spanner lässt Kette beim Anlassen überspringen — Motorschaden', ru: 'Отказ натяжителя при запуске — перескок цепи и загиб клапанов' }, damage: '€3,500–5,500' }
              ]
            },
            badges: {
              en: ['DSG Oil Service ~€280', 'Chain/Oil Fix Can Be Costly'],
              de: ['DSG-Ölservice ca. 280 €', 'Ketten-/Kolben-Reparatur teuer'],
              ru: ['Замена масла DSG ~€280', 'Ремонт цепи/поршневой дорог']
            }
          },
          depreciationResale: {
            score: 6.4,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.6-tdi-90',
        defaultGearboxId: 'mq200-5mt-sc',
        gearboxes: [{ id: 'mq200-5mt-sc', isDefault: true }],
        buyerFitGroup: 'diesel-cr',
        buyerFitOverrides: {
          skip: ['globalDieselShortTripRisk', 'a38pSlow90HpPace', 'a38pSmallBoot', 'a38pCabinWear']
        },
        dossierGroup: 'diesel-5mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 90,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 TDI 90 (8P)',
        fullName: '2010 Audi A3 1.6 TDI (90 HP, 8P)',
        engineBadge: '1.6L TDI • 90 HP',
        engineSubLabel: {
          en: '1.6L Common-Rail Diesel (05/2009–10/2012) • 5-MT • 230 Nm • FWD',
          de: '1.6L Common-Rail-Diesel (05/2009–10/2012) • 5-Gang • 230 Nm • FWD',
          ru: '1.6L TDI Common-Rail (05/2009–10/2012) • 5-МКПП • 230 Н·м • FWD'
        },
        rarityLabel: {
          en: 'FLEET ECO',
          de: 'SPAR-DIESEL',
          ru: 'ЭКО-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€23,600 New',
          de: '23.600 € Neu',
          ru: '€23 600 новый'
        },
        estUsedPrice: '€5,700',
        perkLabel: {
          en: '✦ 4.5 L/100km Economy • Watch Injectors & EGR Cooler',
          de: '✦ 4,5 L/100km Verbrauch • Injektoren & AGR-Kühler prüfen',
          ru: '✦ Расход 4,5 л/100 км • Проверить форсунки и EGR'
        },
        remarkablePositives: {
          en: [
            'Very low fuel consumption (~4.5 L/100km)',
            'Quiet common-rail refinement vs old 1.9 TDI',
            'Low tax & insurance'
          ],
          de: [
            'Sehr niedriger Verbrauch (~4,5 L/100km)',
            'Laufruhiger als der alte 1.9 TDI',
            'Günstige Steuer & Versicherung'
          ],
          ru: [
            'Очень низкий расход (~4,5 л/100 км)',
            'Тише старого 1.9 TDI',
            'Низкие налоги и страховка'
          ]
        },
        notableNegatives: {
          en: [
            'Modest 90 hp / 5-speed gearing',
            'Siemens/Continental piezo injectors can fail',
            'EGR cooler replacement is labor-heavy'
          ],
          de: [
            'Bescheidene 90 PS mit 5-Gang-Getriebe',
            'Piezo-Injektoren anfällig',
            'AGR-Kühler-Tausch aufwendig'
          ],
          ru: [
            'Скромные 90 л.с. и 5-МКПП',
            'Капризные пьезофорсунки Siemens',
            'Дорогая замена радиатора EGR'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 TDI 90 (CR Belt)', de: '1.6L Reihenvierzylinder TDI (Riemen)', ru: '1.6L R4 TDI 90 (CR Ремень)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt', gearbox: '@manual5', clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg', sprint0100: '12.2 s', topSpeed: '180 km/h', peakTorque: '230 Nm @ 1,500 rpm',
          passingPunch: { en: 'Frugal Low-End Commuter', de: 'Sparsam & entspannt', ru: 'Экономичная городская тяга' },
          realWorldFuel: '4.6 L/100km', tankRange: '55 L (~1,195 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierLow', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 5.7,
            badges: {
              en: ['Solid Bottom End • 210k Belt', 'Watch Piezo Injectors & EGR Cooler'],
              de: ['Robuster Rumpf • 210 Tkm Zahnriemen', 'Piezo-Injektoren & AGR-Kühler prüfen'],
              ru: ['Крепкий блок • Ремень 210 тыс.', 'Проверить пьезофорсунки и EGR']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CAYB (EA189) · 1,598 cc' }, { k: 'architecture', v: { en: 'Inline-4 Common-Rail Diesel · 210k Timing Belt', de: 'Reihenvierzylinder Common-Rail-Diesel · 210-Tkm-Zahnriemen', ru: 'Рядный 4-цил. дизель Common-Rail · Ремень 210 тыс. км' } }], note: { en: 'Ultra-economical 1,195 km commuter; simple 5-MT avoids DSG bills, though EA189 EGR cooler and Siemens injectors remain watchouts.', de: 'Extrem sparsamer 1.195-km-Pendler; simpler 5-Gang vermeidet DSG-Kosten, aber EA189-AGR-Kühler und Injektoren bleiben Schwachstellen.', ru: 'Сверхэкономичный дизель с запасом хода 1 195 км; простая 5-МКПП, но следите за клапаном EGR и форсунками Siemens.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Ultra-thrifty commuter diesel— check injector smoothness and EGR cooler history.',
                strengths: [
                  'Sub-5 L/100km real economy.',
                  '210,000 km timing belt interval.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Piezo injector knocking / rough idle when cold.',
                  'EGR valve & cooler leaks on DPF-equipped cars.'
                ],
                beforeYouBuy: [
                  'Check cold idle for smooth running (no injector knock).',
                  'Ask if EGR cooler was already replaced.',
                  'Verify highway DPF regens (not city-only).'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '210,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '170,000–210,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Sehr sparsamer Pendler-Diesel— Injektorenlauf & AGR-Kühler prüfen.',
                strengths: [
                  'Realverbrauch unter 5 L/100km.',
                  'Langes 210.000-km-Zahnriemenintervall.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: ['Nageln der Piezo-Injektoren im Kaltlauf.', 'AGR-Kühler-Undichtigkeiten.'],
                beforeYouBuy: [
                  'Kaltlauf auf sauberen Leerlauf ohne Nageln prüfen.',
                  'Nach bereits getauschtem AGR-Kühler fragen.',
                  'Kurzstrecken-Verstopfung des DPF ausschließen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '170.000–210.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Сверхэкономичный дизель— проверяйте плавность форсунок и клапан EGR.',
                strengths: [
                  'Реальный расход до 5 л/100 км.',
                  'Большой ресурс ремня ГРМ (210 тыс. км).',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: ['Стук пьезофорсунок на холодную.', 'Утечки или клин охладителя EGR.'],
                beforeYouBuy: [
                  'Оценить ровность работы на холодную (форсунки).',
                  'Уточнить, менялся ли радиатор EGR.',
                  'Исключить забитый DPF от коротких поездок.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '210 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '170 000–210 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.4,
            badges: {
              en: ['5-MT Durable & Simple', 'Solid-Mass or Long-Life Clutch'],
              de: ['Robustes 5-Gang-Schaltgetriebe', 'Haltbare Kupplung'],
              ru: ['Надёжная 5-МКПП', 'Долговечное сцепление']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.2,
            badges: {
              en: ['0–100 km/h: 12.2 s • 180 km/h', 'Built for Cruise Efficiency'],
              de: ['0–100 km/h: 12,2 s • 180 km/h', 'Für sparsames Gleiten gebaut'],
              ru: ['0–100 км/ч: 12,2 с • 180 км/ч', 'Для спокойной экономичной езды']
            }
          },
          midRangeTorquePassing: {
            score: 6.5,
            badges: {
              en: ['230 Nm @ 1,500 rpm', 'Decent Low-End Pull'],
              de: ['230 Nm ab 1.500 U/min', 'Ordentlicher Antritt untenrum'],
              ru: ['230 Н·м с 1500 об/мин', 'Уверенная тяга в городе']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 9.2,
            badges: {
              en: ['4.4–Efficient (4.9 L/100km)', '1,100+ km Tank Range'],
              de: ['4,4–Sparsam (4,9 L/100km)', 'Über 1.100 km Reichweite'],
              ru: ['4,4–Экономичный (4,9 л/100 км)', 'Запас хода 1100+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.5,
            badges: {
              en: ['Low 1.6L Euro 5 Tax', 'Cheap Insurance'],
              de: ['Günstige 1.6L Euro-5-Steuer', 'Niedrige Versicherung'],
              ru: ['Низкий налог 1.6 л Евро-5', 'Дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 6.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 180,000–210,000 km / 8 yrs', de: 'Alle 180.000–210.000 km / 8 J.', ru: 'Каждые 180–210 тыс. км / 8 лет' }, action: { en: 'Replace timing belt kit, tensioners & water pump', de: 'Zahnriemensatz, Spannrollen & Wasserpumpe wechseln', ru: 'Замена комплекта ремня ГРМ, роликов и помпы' }, cost: '€580–850' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if 2.0 TDI DSG) & diesel fuel filter', de: 'Nasses 6-DSG-Öl (bei 2.0 TDI DSG) & Dieselfilter wechseln', ru: 'Замена масла в мокром 6-DSG (если есть) и топливного фильтра' }, cost: '€240–360' }
              ],
              critical: [
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'EA189 EGR cooler/valve assembly (especially on 1.6 TDI & post-update cars)', de: 'EA189 AGR-Kühler/Ventil-Einheit (besonders nach Software-Update)', ru: 'Модуль клапана и охладителя EGR EA189 (частая болезнь)' }, cost: '€650–1,050', risk: { en: 'Flashing glow-plug light, coolant loss, and limp mode', de: 'Blinkende Vorglühlampe, Kühlmittelverlust und Notlauf', ru: 'Мигающая спираль, потеря антифриза и аварийный режим' }, damage: '€1,200–1,800' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'Dual-mass flywheel + clutch & DPF ash-load check (1.6 TDI: Siemens injectors)', de: 'ZMS + Kupplung & DPF-Aschebeladung (1.6 TDI: Injektoren prüfen)', ru: 'Двухмассовый маховик + сцепление и проверка сажевого фильтра (1.6: форсунки)' }, cost: '€950–1,600', risk: { en: 'Idle knock, blocked DPF, or knocking injectors on 1.6 TDI', de: 'Starkes ZMS-Klappern, voller DPF oder nagelnde 1.6-TDI-Injektoren', ru: 'Стук маховика, забитый DPF или стук пьезофорсунок на 1.6 TDI' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['Long 210k km Belt Interval', 'Injector Replacement ~€450 Each'],
              de: ['210 Tkm Zahnriemen-Intervall', 'Injektor ca. 450 € / Stück'],
              ru: ['Ремень ГРМ на 210 тыс. км', 'Форсунка ~€450 за шт.']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.6-tdi-105',
        defaultGearboxId: 'mq250-5mt-dmf',
        gearboxes: [
          { id: 'mq250-5mt-dmf', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€6,900',
            specOverrides: { sprint0100: '11.7 s', topSpeed: '194 km/h', realWorldFuel: '5.0 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 4.6,
                badges: {
                  en: ['0–100 km/h: 11.7 s (DSG)', '194 km/h Top Speed'],
                  de: ['0–100 km/h: 11,7 s (DSG)', '194 km/h Spitze'],
                  ru: ['0–100 км/ч: 11,7 s (DSG)', 'Макс. 194 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.8,
                badges: {
                  en: ['5.0 L/100km (DSG)'],
                  de: ['5,0 L/100km (DSG)'],
                  ru: ['5,0 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-cr',
        buyerFitOverrides: {
          skip: ['globalDieselShortTripRisk', 'a38pDryDsgCare', 'a38pSmallBoot', 'a38pCabinWear']
        },
        dossierGroup: 'diesel-dry-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 105,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 TDI 105 (8P)',
        fullName: '2010 Audi A3 1.6 TDI (105 HP, 8P)',
        engineBadge: '1.6L TDI • 105 HP',
        engineSubLabel: {
          en: '1.6L Common-Rail Diesel (06/2009–03/2013) • 5-MT / 7-DSG • 250 Nm • FWD',
          de: '1.6L Common-Rail-Diesel (06/2009–03/2013) • 5-Gang / 7-DSG • 250 Nm • FWD',
          ru: '1.6L TDI Common-Rail (06/2009–03/2013) • 5-МКПП / 7-DSG • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'HIGHWAY ECONOMIZER',
          de: 'LANGSTRECKEN-SPARER',
          ru: 'ЭКОНОМ-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€24,500 New',
          de: '24.500 € Neu',
          ru: '€24 500 новый'
        },
        estUsedPrice: '€6,100',
        perkLabel: {
          en: '✦ 4.5 L/100km • 250 Nm • Watch Injectors, EGR & 7-DSG',
          de: '✦ 4,5 L/100km • 250 Nm • Injektoren, AGR & 7-DSG prüfen',
          ru: '✦ 4,5 л/100 км • 250 Н·м • Форсунки, EGR и 7-DSG'
        },
        remarkablePositives: {
          en: [
            '250 Nm gives solid everyday pull',
            '4.4–4.9 L/100km real-world economy',
            'Refined Euro 5 common-rail'
          ],
          de: [
            '250 Nm sorgen für guten Alltags-Durchzug',
            '4,4–Sparsam (4,9 L/100km)',
            'Kultivierter Euro-5-Common-Rail'
          ],
          ru: [
            '250 Н·м для уверенной езды',
            'Реальный расход 4,4–4,9 л/100 км',
            'Тихий дизель Евро-5'
          ]
        },
        notableNegatives: {
          en: [
            'Same piezo injector & EGR cooler risk as 90 hp',
            '5-speed manual lacks a 6th gear on Autobahn',
            '7-DSG dry clutch wears faster in traffic'
          ],
          de: [
            'Gleiches Injektor- & AGR-Risiko wie 90 PS',
            '5-Gang-Schalter fehlt 6. Gang auf Autobahn',
            '7-Gang-Trocken-DSG im Stau anfällig'
          ],
          ru: [
            'Те же риски по форсункам и EGR',
            '5-МКПП не хватает 6-й передачи на трассе',
            'Сухая 7-DSG чувствительна к пробкам'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 TDI 105 (CR Belt)', de: '1.6L Reihenvierzylinder TDI (Riemen)', ru: '1.6L R4 TDI 105 (CR Ремень)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt',
          gearbox: '@manual5',
          clutchDmf: '@clutchDmf', towingBraked: '1,400 kg',
          sprint0100: '11.4 s', topSpeed: '194 km/h', peakTorque: '250 Nm @ 1,500 rpm',
          passingPunch: { en: 'Smooth 250 Nm Cruise', de: 'Ruhige 250 Nm', ru: 'Ровные 250 Н·м' },
          realWorldFuel: '4.7 L/100km', tankRange: '55 L (~1,170 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierLowMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 5.7,
            badges: {
              en: ['Tough Block • 210k Belt', 'Watch Piezo Injectors & EGR'],
              de: ['Robuster Block • 210 Tkm Riemen', 'Injektoren & AGR prüfen'],
              ru: ['Крепкий блок • Ремень 210 тыс.', 'Проверить форсунки и EGR']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CAYC (EA189) · 1,598 cc' }, { k: 'architecture', v: { en: 'Inline-4 Common-Rail Diesel · Long-Life Belt', de: 'Reihenvierzylinder Common-Rail · Langlebiger Zahnriemen', ru: 'Рядный 4-цил. дизель Common-Rail · Долговечный ремень' } }], note: { en: 'Refined, thrifty Euro 5 commuter; pick the 5-MT over the dry 7-DSG and check if the EGR cooler was already replaced.', de: 'Kultivierter, sparsamer Euro-5-Pendler; lieber mit 5-Gang als trockenem 7-DSG kaufen und AGR-Kühler-Historie prüfen.', ru: 'Тихий и экономичный дизель Euro 5; лучше брать на 5-МКПП (без сухого DQ200) и проверить замену охладителя EGR.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Frugal 105 HP Common-Rail — Low Highway Fuel Burn With Sensitive Injectors & EGR',
                strengths: [
                  'Low fuel bills and smooth common-rail torque.',
                  '210,000 km timing belt schedule.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Piezo injector failure & EGR cooler leaks.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Check cold start for injector knock or smoke.',
                  'Inspect EGR cooler area for coolant crust.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '210,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '170,000–210,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Sparsamer 105-PS-Diesel — niedriger Verbrauch, aber empfindliche Injektoren und AGR',
                strengths: [
                  'Sehr niedriger Verbrauch und ruhiger Lauf.',
                  'Langes Zahnriemen-Intervall.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Defekte Piezo-Injektoren & AGR-Kühler.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Kaltstart auf Injektor-Nageln prüfen.',
                  'AGR-Kühler auf Kühlmittelspuren checken.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '170.000–210.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Экономичный дизель 105 л.с. — малый расход, но капризные форсунки и клапан ЕГР',
                strengths: [
                  'Низкий расход топлива и тихая работа.',
                  'Большой интервал замены ремня ГРМ.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Отказы пьезофорсунок и охладителя EGR.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Проверить работу форсунок на холодную.',
                  'Осмотреть район EGR на подтёки антифриза.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '210 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '170 000–210 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 5.8,
            badges: {
              en: ['5-MT Solid • 7-DSG Dry-Clutch Care', '250 Nm At 7-DSG Limit'],
              de: ['5-Gang solide • 7-DSG prüfen', '250 Nm am 7-DSG-Limit'],
              ru: ['5-МКПП надёжна • 7-DSG на пределе', '250 Н·м — предел сухой DSG']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.8,
            badges: {
              en: ['0–100 km/h: 11.4 s • 194 km/h', 'Adequate Highway Merge'],
              de: ['0–100 km/h: 11,4 s • 194 km/h', 'Ausreichend für Überland'],
              ru: ['0–100 км/ч: 11,4 с • 194 км/ч', 'Достаточен для трассы']
            }
          },
          midRangeTorquePassing: {
            score: 7.0,
            badges: {
              en: ['250 Nm @ 1,500 rpm', 'Stronger Mid-Range Than 1.6 Petrol'],
              de: ['250 Nm ab 1.500 U/min', 'Kräftiger als 1.6 Benziner'],
              ru: ['250 Н·м с 1500 об/мин', 'Тяговитее бензинового 1.6']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 9.2,
            badges: {
              en: ['4.5–Efficient (5.0 L/100km)', 'Top Commuter Economy'],
              de: ['4,5–Sparsam (5,0 L/100km)', 'Top-Pendlerverbrauch'],
              ru: ['4,5–Экономичный (5,0 л/100 км)', 'Отличная экономичность']
            }
          },
          taxInsuranceNorm: {
            score: 8.5,
            badges: {
              en: ['Low 1.6L Euro 5 Tax', 'Affordable Insurance'],
              de: ['Günstige 1.6L Euro-5-Steuer', 'Günstige Versicherung'],
              ru: ['Низкий налог 1.6 л Евро-5', 'Доступная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 6.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 180,000–210,000 km / 8 yrs', de: 'Alle 180.000–210.000 km / 8 J.', ru: 'Каждые 180–210 тыс. км / 8 лет' }, action: { en: 'Replace timing belt kit, tensioners & water pump', de: 'Zahnriemensatz, Spannrollen & Wasserpumpe wechseln', ru: 'Замена комплекта ремня ГРМ, роликов и помпы' }, cost: '€580–850' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if 2.0 TDI DSG) & diesel fuel filter', de: 'Nasses 6-DSG-Öl (bei 2.0 TDI DSG) & Dieselfilter wechseln', ru: 'Замена масла в мокром 6-DSG (если есть) и топливного фильтра' }, cost: '€240–360' }
              ],
              critical: [
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'EA189 EGR cooler/valve assembly (especially on 1.6 TDI & post-update cars)', de: 'EA189 AGR-Kühler/Ventil-Einheit (besonders nach Software-Update)', ru: 'Модуль клапана и охладителя EGR EA189 (частая болезнь)' }, cost: '€650–1,050', risk: { en: 'Flashing glow-plug light, coolant loss, and limp mode', de: 'Blinkende Vorglühlampe, Kühlmittelverlust und Notlauf', ru: 'Мигающая спираль, потеря антифриза и аварийный режим' }, damage: '€1,200–1,800' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'Dual-mass flywheel + clutch & DPF ash-load check (1.6 TDI: Siemens injectors)', de: 'ZMS + Kupplung & DPF-Aschebeladung (1.6 TDI: Injektoren prüfen)', ru: 'Двухмассовый маховик + сцепление и проверка сажевого фильтра (1.6: форсунки)' }, cost: '€950–1,600', risk: { en: 'Idle knock, blocked DPF, or knocking injectors on 1.6 TDI', de: 'Starkes ZMS-Klappern, voller DPF oder nagelnde 1.6-TDI-Injektoren', ru: 'Стук маховика, забитый DPF или стук пьезофорсунок на 1.6 TDI' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Injectors/EGR Main Cost'],
              de: ['210 Tkm Zahnriemen', 'Injektoren/AGR Hauptkosten'],
              ru: ['Ремень раз в 210 тыс. км', 'Основные траты — форсунки/EGR']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '1.9-tdi',
        defaultGearboxId: 'mq250-5mt-dmf',
        gearboxes: [
          { id: 'mq250-5mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€5,900',
            specOverrides: { sprint0100: '11.1 s', topSpeed: '187 km/h', realWorldFuel: '5.5 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.0,
                badges: {
                  en: ['0–100 km/h: 11.1 s (DSG)', '187 km/h Top Speed'],
                  de: ['0–100 km/h: 11,1 s (DSG)', '187 km/h Spitze'],
                  ru: ['0–100 км/ч: 11,1 s (DSG)', 'Макс. 187 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.3,
                badges: {
                  en: ['5.5 L/100km (DSG)'],
                  de: ['5,5 L/100km (DSG)'],
                  ru: ['5,5 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-cr',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 105,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.9 TDI (8P)',
        fullName: '2007 Audi A3 1.9 TDI (8P)',
        engineBadge: '1.9L TDI • 105 HP',
        engineSubLabel: {
          en: '1.9L Pumpe-Düse Diesel (05/2003–10/2009) • 5-MT / 6-DSG • 250 Nm • FWD',
          de: '1.9L Pumpe-Düse-Diesel (05/2003–10/2009) • 5-Gang / 6-DSG • 250 Nm • FWD',
          ru: '1.9L TDI насос-форсунка (05/2003–10/2009) • 5-МКПП / 6-DSG • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'MILLION-KM LEGEND',
          de: 'DAUERLÄUFER-LEGENDE',
          ru: 'ЛЕГЕНДА РЕСУРСА'
        },
        originalMsrp: {
          en: '€23,800 New',
          de: '23.800 € Neu',
          ru: '€23 800 новый'
        },
        estUsedPrice: '€5,200',
        perkLabel: {
          en: '✦ Legendary 1.9 PD Toughness • Wet 6-DSG • Watch 2007–08 Rod Bearings',
          de: '✦ Legendärer 1.9 PD • Nasses 6-DSG • 2007–08 Pleuellager prüfen',
          ru: '✦ Легендарный 1.9 PD • Мокрая 6-DSG • Вкладыши на 2007–08'
        },
        remarkablePositives: {
          en: [
            'Legendary 400,000+ km Pumpe-Düse durability',
            'Punchy 250 Nm & ~5.0 L/100km economy',
            'Wet 6-DSG is far tougher than 7-DSG'
          ],
          de: [
            'Legendäre 400.000+ km Pumpe-Düse-Haltbarkeit',
            'Kräftige 250 Nm & ~5,0 L/100km',
            'Nasses 6-DSG sehr robust'
          ],
          ru: [
            'Легендарный ресурс 400 000+ км',
            'Бодрые 250 Н·м и ~5 л/100 км',
            'Крепкая мокрая 6-DSG'
          ]
        },
        notableNegatives: {
          en: [
            'Loud, clattery diesel soundtrack',
            '2007–2008 BXE code needs conrod bearing check',
            'Euro 4 only (urban diesel bans)'
          ],
          de: [
            'Rauer, lauter Pumpe-Düse-Klang',
            'Baujahr 2007–08 (BXE) Pleuellager prüfen',
            'Nur Euro 4 (Fahrverbote in Umweltzonen)'
          ],
          ru: [
            'Шумный тракторный звук насос-форсунок',
            'На версиях 2007–08 проверить шатунные вкладыши',
            'Только Евро-4'
          ]
        },
        specOverrides: {
          engineName: { en: '1.9L I4 TDI (Pumpe-Düse)', de: '1.9L Reihenvierzylinder PD (Riemen)', ru: '1.9L R4 TDI (Насос-форсунки)' },
          forcedInduction: '@turbo', injection: '@pumpDuse', timingDrive: '@belt',
          gearbox: '@manual5',
          clutchDmf: '@clutchDmf', towingBraked: '1,400 kg',
          sprint0100: '11.4 s', topSpeed: '187 km/h', peakTorque: '250 Nm @ 1,900 rpm',
          passingPunch: { en: 'Punchy PD Mid-Range Kick', de: 'Typischer PD-Drehmoment-Kick', ru: 'Бодрый толчок насос-форсунок' },
          realWorldFuel: '5.1 L/100km', tankRange: '55 L (~1,080 km)', euroNorm: 'Euro 4 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierLowMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.9,
            badges: {
              en: ['400k+ km Legend (Best: BKC)', 'Check 2007–08 BXE Rod Bearings'],
              de: ['400 Tkm+ Legende (Top: BKC)', '2007–08 BXE-Pleuellager prüfen'],
              ru: ['Легенда 400+ тыс. км (лучший BKC)', 'На BXE 2007–08 проверить вкладыши']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'BKC / BXE / BLS (EA188) · 1,896 cc' }, { k: 'architecture', v: { en: 'Inline-4 8V Cast-Iron · Mechanical Unit Injectors (PD)', de: 'Reihenvierzylinder 8V Grauguss · Pumpe-Düse (PD)', ru: 'Рядный 4-цил. 8V чугун · Насос-форсунки (PD)' } }], note: { en: 'Legendary half-million-km workhorse (especially BKC); on 2006–2008 BXE codes, replace conrod bearings preventively to avoid a thrown rod.', de: 'Legendärer Dauerläufer (besonders BKC); bei 2006–2008er BXE-Motoren die Pleuellager präventiv wechseln gegen Pleuelabriss.', ru: 'Легендарный ресурсный мотор (особенно BKC); на коде BXE (2006–2008) профилактически меняйте шатунные вкладыши.' } },
              forcedInduction: '@turboDiesel', injection: { specs: [{ k: 'injectionType', v: { en: 'Pumpe-Düse (Unit Injectors) · Cam-Driven High Pressure', de: 'Pumpe-Düse-Einspritzung · Nockenwellen-Hochdruck', ru: 'Насос-форсунки (Pumpe-Düse) с приводом от распредвала' } }], note: { en: 'Rougher sound than Common-Rail, but mechanically tough and immune to high-pressure fuel-pump metal-shaving failures.', de: 'Rauer im Klang als Common-Rail, aber extrem robust und frei von Hochdruckpumpen-Spänen.', ru: 'Шумнее Common-Rail, но механически неубиваем и не боится стружки от ТНВД.' } }, timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'The durability king of the A3 8P— noisy, but will outlast almost anything if serviced.',
                strengths: [
                  'Simple, tough 8-valve Pumpe-Düse architecture.',
                  'Many examples have no DPF and run 400,000+ km.'
                ],
                watchouts: [
                  '2007–2008 builds can suffer premature connecting-rod bearing wear.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Verify exact VW 505.01 / 507.00 oil was used.',
                  'On 2007–2008 cars, check if rod bearings were replaced.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–150,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '180,000–240,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Der Haltbarkeits-König im A3 8P— rau, aber bei Pflege fast unkaputtbar.',
                strengths: ['Robuster 8V-Pumpe-Düse-Motor.', 'Oft ohne DPF— 400.000+ km erreichbar.'],
                watchouts: [
                  'Baujahr 2007–08 teils mit Pleuellager-Schwäche.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Korrekte VW-505.01/507.00-Ölnorm prüfen.',
                  'Bei 2007–08 Pleuellager-Tausch erfragen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–150.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '180.000–240.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Король ресурса в A3 8P— шумноват, но переживёт почти любой современный мотор.',
                strengths: ['Крепкий 8-клапанный блок.', 'Часто без DPF— ходит 400 000+ км.'],
                watchouts: [
                  'На авто 2007–08 гг. возможен износ шатунных вкладышей.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Проверить использование масла с допуском VW 505.01/507.00.',
                  'На авто 2007–08 уточнить замену вкладышей.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–150 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '180 000–240 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.1,
            badges: {
              en: ['5-MT & Wet 6-DSG Both Tough', 'Flywheel Wear After 180k km'],
              de: ['5-Gang & nasses 6-DSG robust', 'ZMS-Verschleiß ab ca. 180 Tkm'],
              ru: ['5-МКПП и мокрая 6-DSG очень крепки', 'Маховик к 180 тыс. км']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.8,
            badges: {
              en: ['0–100 km/h: 11.4 s • 187 km/h', 'Feels Faster Than Paper'],
              de: ['0–100 km/h: 11,4 s • 187 km/h', 'Fühlt sich kräftiger an als 105 PS'],
              ru: ['0–100 км/ч: 11,4 с • 187 км/ч', 'Едет бодрее паспортных цифр']
            }
          },
          midRangeTorquePassing: {
            score: 7.3,
            badges: {
              en: ['250 Nm @ 1,900 rpm', 'Signature PD Mid-Range Punch'],
              de: ['250 Nm bei 1.900 U/min', 'Typischer PD-Schub'],
              ru: ['250 Н·м при 1900 об/мин', 'Фирменный подхват PD']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 8.8,
            badges: {
              en: ['4.8–Efficient (5.4 L/100km)', 'Very Thrifty Everywhere'],
              de: ['4,8–Sparsam (5,4 L/100km)', 'Überall extrem sparsam'],
              ru: ['4,8–Экономичный (5,4 л/100 км)', 'Очень экономичный']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['Euro 4 Diesel Tax Higher', 'Cheap Insurance'],
              de: ['Höhere Euro-4-Dieselsteuer', 'Günstige Versicherung'],
              ru: ['Налог на дизель Евро-4', 'Дешёвая страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 8.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 120,000 km / 6 yrs', de: 'Alle 120.000 km / 6 J.', ru: 'Каждые 120 000 км / 6 лет' }, action: { en: 'Replace timing belt kit, rollers & water pump', de: 'Zahnriemensatz, Rollen & Wasserpumpe erneuern', ru: 'Замена ремня ГРМ, роликов и помпы' }, cost: '€520–780' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if DSG) & diesel fuel filter; use VW 505.01 PD oil', de: '6-DSG-Öl (falls DSG) & Dieselfilter wechseln; strikt PD-Öl VW 505.01', ru: 'Замена масла в 6-DSG (если есть) и фильтра; строго масло допуска PD' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'PD-specific weak spots: BXE conrod bearings (1.9) / BKD head cracks & oil-pump hex drive (2.0)', de: 'PD-Schwachstellen: BXE-Pleuellager (1.9) / BKD-Kopfrisse & Ölpumpen-Sechskant (2.0)', ru: 'Болезни PD: вкладыши BXE (1.9) / трещины ГБЦ BKD и шестигранник маслонасоса (2.0)' }, cost: '€600–1,800', risk: { en: 'Thrown conrod through block (BXE) or sudden zero oil pressure (2.0 PD)', de: 'Pleuelabriss (BXE) oder plötzlicher Öldruckverlust (2.0 PD)', ru: 'Обрыв шатуна (BXE) или внезапная потеря давления масла (2.0 PD)' }, damage: '€3,500–5,500' },
                { when: { en: '160,000–230,000 km', de: '160.000–230.000 km', ru: '160 000–230 000 км' }, action: { en: 'Dual-mass flywheel + clutch & PD injector loom / seals', de: 'Zweimassenschwungrad + Kupplung & PD-Kabelbaum / Dichtringe', ru: 'Двухмассовый маховик + сцепление и коса/уплотнители насос-форсунок' }, cost: '€950–1,500', risk: { en: 'Misfiring under load, hard hot starts, and heavy flywheel rattle', de: 'Aussetzer unter Last, schlechter Warmstart und starkes ZMS-Rasseln', ru: 'Троение под нагрузкой, плохой горячий пуск и стук маховика' }, damage: '€1,800–2,600' }
              ]
            },
            badges: {
              en: ['Cheap Parts Everywhere', 'No Piezo Injectors to Fail'],
              de: ['Überall günstige Teile', 'Robuste PD-Elemente'],
              ru: ['Дешёвые запчасти везде', 'Нет капризных пьезофорсунок']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '2.0-tdi-140-pd',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€6,100',
            specOverrides: { sprint0100: '9.2 s', topSpeed: '207 km/h', realWorldFuel: '6.0 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 6.5,
                badges: {
                  en: ['0–100 km/h: 9.2 s (DSG)', '207 km/h Top Speed'],
                  de: ['0–100 km/h: 9,2 s (DSG)', '207 km/h Spitze'],
                  ru: ['0–100 км/ч: 9,2 s (DSG)', 'Макс. 207 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.9,
                badges: {
                  en: ['6.0 L/100km (DSG)'],
                  de: ['6,0 L/100km (DSG)'],
                  ru: ['6,0 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-pd',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 140,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TDI PD (8P)',
        fullName: '2006 Audi A3 2.0 TDI PD (140 HP, 8P)',
        engineBadge: '2.0L TDI PD • 140 HP',
        engineSubLabel: {
          en: '2.0L Pumpe-Düse Diesel (03/2003–04/2008) • 6-MT / 6-DSG • 320 Nm • FWD/Quattro',
          de: '2.0L Pumpe-Düse (03/2003–04/2008) • 6-Gang / 6-DSG • 320 Nm • FWD/Quattro',
          ru: '2.0L TDI PD (03/2003–04/2008) • 6-МКПП / 6-DSG • 320 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'PRE-FACELIFT PD',
          de: 'VOR-FACELIFT PD',
          ru: 'ДОРЕСТАЙЛ PD'
        },
        originalMsrp: {
          en: '€26,400 New',
          de: '26.400 € Neu',
          ru: '€26 400 новый'
        },
        estUsedPrice: '€5,400',
        perkLabel: {
          en: '⚠ Early 2003–05 Cylinder Head Crack Risk • Strong 320 Nm',
          de: '⚠ Frühe 2003–05 Zylinderkopf-Rissgefahr • Starke 320 Nm',
          ru: '⚠ Риск трещин ГБЦ на 2003–05 • Мощные 320 Н·м'
        },
        remarkablePositives: {
          en: [
            'Strong 320 Nm mid-range punch',
            '6-speed manual & wet 6-DSG available',
            '5.5 L/100km real economy'
          ],
          de: [
            'Kräftige 320 Nm Durchzugskraft',
            '6-Gang & nasses 6-DSG verfügbar',
            'Sparsam (5,5 L/100km)'
          ],
          ru: ['Мощная тяга 320 Н·м', '6-МКПП и мокрая 6-DSG', 'Реальный расход 5,5 л/100 км']
        },
        notableNegatives: {
          en: [
            '2003–2005 16V heads prone to porous cracking',
            'Oil pump hex-shaft wear on later PD',
            'Harsh PD noise; 2008+ CR is much better'
          ],
          de: [
            '2003–2005 Köpfe anfällig für Haarrisse',
            'Ölpumpen-Mitnehmer-Verschleiß',
            'Rauer Klang; 2008+ CR deutlich besser'
          ],
          ru: [
            'ГБЦ 2003–2005 склонны к трещинам',
            'Износ шестигранника маслонасоса',
            'Шумный; рестайлинг CR (2008+) намного лучше'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TDI 140 PD (Belt)', de: '2.0L Reihenvierzylinder PD (Riemen)', ru: '2.0L R4 TDI 140 PD (Ремень)' },
          forcedInduction: '@turbo', injection: '@pumpDuse', timingDrive: '@belt',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf', towingBraked: '1,500 kg',
          sprint0100: '9.5 s', topSpeed: '207 km/h', peakTorque: '320 Nm @ 1,750 rpm',
          passingPunch: { en: 'Punchy 320 Nm PD Surge', de: 'Kräftiger 320-Nm-PD-Schub', ru: 'Резкий подхват 320 Н·м PD' },
          realWorldFuel: '5.6 L/100km', tankRange: '55 L (~980 km)', euroNorm: 'Euro 4 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 3.8,
            badges: {
              en: ['2003–05 Head Crack Risk', '2006+ Updated Head Better'],
              de: ['2003–05 Kopf-Rissgefahr', 'Ab 2006 verbesserter Kopf'],
              ru: ['Риск трещины ГБЦ на 2003–05', 'С 2006 г. ГБЦ доработана']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'BKD / BMM (EA188) · 1,968 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron · Pumpe-Düse + Timing Belt', de: 'Reihenvierzylinder Grauguss · Pumpe-Düse + Zahnriemen', ru: 'Рядный 4-цил. чугун · Насос-форсунки + ремень' } }], note: { en: 'Strong, frugal 320 Nm highway runner; check early 2003–2006 BKD cylinder-head revision ("C" casting) and oil-pump hex drive.', de: 'Kräftiger 320-Nm-Diesel; bei frühen BKD (2003–2006) auf Zylinderkopf-Revision ("C") und Ölpumpen-Mitnehmer achten.', ru: 'Тяговитый 320-Н·м дизель; на ранних BKD проверяйте ревизию ГБЦ ("C") и шестигранник привода маслонасоса.' } },
              forcedInduction: '@turboDiesel', injection: { specs: [{ k: 'injectionType', v: { en: 'Pumpe-Düse (Bosch Unit Injectors)', de: 'Pumpe-Düse (Bosch-Einheiten)', ru: 'Насос-форсунки Bosch (PD)' } }], note: { en: 'Delivers an addictive mid-range punch; strictly requires VW 505.01 PD-spec oil to protect camshaft lobes.', de: 'Satter Durchzug in der Mitte; zwingend Motoröl nach VW-Norm 505.01 für die Nockenwelle nutzen.', ru: 'Мощный подхват в середине; требует строго масла допуска VW 505.01 для защиты распредвала.' } }, timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Punchy Early 2.0 TDI PD — Vulnerable to Cracked Cylinder Heads on Early Builds',
                lowScoreReasons: [
                  'Porous / Cracked Cylinder Heads (2003–2005 BKD): Early castings frequently crack internally, causing invisible coolant loss, hard cold starts, and white exhaust smoke (€1,600–€2,500 repair).',
                  'Variable Turbo Vane Sticking & Oil-Pump Hex Drive: Soot-jammed turbo vanes trigger sudden highway limp mode, and balancer-shaft oil-pump drives wear past 180,000 km.'
                ],
                strengths: [
                  'Strong 320 Nm torque and improved cylinder head castings on later 2006–2008 builds.',
                  'Can reach 240,000–280,000+ km on post-2006 revisions when oil and timing belts are kept on schedule.'
                ],
                watchouts: [
                  'Timing belt and water pump require replacement every 120,000–150,000 km.',
                  'Keep oil changes under 15,000 km with VW-spec oil to prevent camshaft lobe wear.'
                ],
                beforeYouBuy: [
                  'Check the coolant expansion tank for unexplained low level, pressure buildup, or oil residue.',
                  'Verify the cylinder-head casting revision on 2003–2005 cars (or choose a 2006+ / Common-Rail build).',
                  'Accelerate hard in 3rd and 4th gear to ensure full boost with no sudden limp-mode cutoff.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–150,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '170,000–220,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger früher 2.0 TDI PD — Risiko von Zylinderkopfrissen bei frühen Baujahren',
                lowScoreReasons: [
                  'Haarrisse im Zylinderkopf (2003–2005 BKD): Frühe Gussserien verlieren schleichend Kühlwasser nach innen — erkennbar an weißem Rauch und Startproblemen (1.600–2.500 € Schaden).',
                  'Verkokte VTG-Turbolader & Ölpumpen-Mitnehmer: Klemmende Leitschaufeln verursachen Notlauf unter Last; ab 180.000 km droht zudem Verschleiß am Ölpumpen-Sechskant.'
                ],
                strengths: [
                  'Kräftige 320 Nm Durchzug und deutlich standfestere Zylinderköpfe ab Modelljahr 2006–2008.',
                  'Erreicht ab Baujahr 2006 bei pünktlichen Öl- und Zahnriemenwechseln problemlos 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Zahnriemen und Wasserpumpe sind alle 120.000–150.000 km fällig.',
                  'Ölwechsel alle 15.000 km mit passender Norm schützen die Pumpe-Düse-Nockenwelle vor Einlaufen.'
                ],
                beforeYouBuy: [
                  'Kühlmittelbehälter auf niedrigen Stand, Überdruck oder Ölfilm prüfen (Hinweis auf Zylinderkopfriss).',
                  'Bei Baujahr 2003–2005 Kopf-Revision oder Tauschbeleg prüfen — alternativ direkt zum 2008+ Common Rail greifen.',
                  'Im 3. und 4. Gang voll durchbeschleunigen, um klemmende Turbolader-Schaufeln (Notlauf) auszuschließen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–150.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '170.000–220.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Тяговитый ранний 2.0 TDI PD — риск трещин ГБЦ на машинах первых лет',
                lowScoreReasons: [
                  'Трещины головки блока цилиндров (2003–2005 BKD): Ранние отливки ГБЦ склонны к внутренним микротрещинам с уходом антифриза и белым дымом (ремонт €1 600–2 500).',
                  'Подклинивание геометрии турбины и привод маслонасоса: Нагар на лопатках даёт аварийный сброс наддува на трассе, а к 180 тыс. км изнашивается привод маслонасоса.'
                ],
                strengths: [
                  'Уверенная тяга 320 Н·м и доработанная головка блока на версиях 2006–2008 годов.',
                  'Версии после 2006 г. при своевременном обслуживании и смене ремня ГРМ ходят 240 000–280 000+ км.'
                ],
                watchouts: [
                  'Ремень ГРМ и помпу нужно менять каждые 120 000–150 000 км.',
                  'Меняйте масло со строгим допуском каждые 15 000 км для защиты кулачков распредвала.'
                ],
                beforeYouBuy: [
                  'Проверить расширительный бачок на потерю антифриза, давление или плёнку масла.',
                  'На машинах 2003–2005 гг. проверить замену/ревизию ГБЦ либо выбрать более поздний Common-Rail.',
                  'Интенсивно разогнаться на 3–4 передаче, чтобы исключить уход турбины в аварийный режим.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–150 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '170 000–220 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT & Wet 6-DSG Solid', 'Dual-Mass Flywheel at 180k'],
              de: ['6-Gang & nasses 6-DSG solide', 'ZMS bei ca. 180 Tkm'],
              ru: ['6-МКПП и мокрая 6-DSG крепки', 'Маховик к 180 тыс. км']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.3,
            badges: {
              en: ['0–100 km/h: 9.5 s • 207 km/h', 'Strong Highway Overtaker'],
              de: ['0–100 km/h: 9,5 s • 207 km/h', 'Souverän auf der Autobahn'],
              ru: ['0–100 км/ч: 9,5 с • 207 км/ч', 'Уверенный на трассе']
            }
          },
          midRangeTorquePassing: {
            score: 8.2,
            badges: {
              en: ['320 Nm @ 1,750 rpm', 'Punchy PD Surge'],
              de: ['320 Nm ab 1.750 U/min', 'Kräftiger PD-Punch'],
              ru: ['320 Н·м с 1750 об/мин', 'Бодрый дизельный рывок']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['5.3–5.9 L/100km', 'Very Efficient 2.0L'],
              de: ['5,3–5,9 L/100km', 'Sparsamer 2.0L'],
              ru: ['5,3–5,9 л/100 км', 'Экономичный 2.0 л']
            }
          },
          taxInsuranceNorm: {
            score: 7.0,
            badges: {
              en: ['Euro 4 2.0L Diesel Tax', 'Moderate Insurance'],
              de: ['2.0L Euro-4-Dieselsteuer', 'Normale Versicherung'],
              ru: ['Налог 2.0 л Евро-4', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 4.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 120,000 km / 6 yrs', de: 'Alle 120.000 km / 6 J.', ru: 'Каждые 120 000 км / 6 лет' }, action: { en: 'Replace timing belt kit, rollers & water pump', de: 'Zahnriemensatz, Rollen & Wasserpumpe erneuern', ru: 'Замена ремня ГРМ, роликов и помпы' }, cost: '€520–780' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if DSG) & diesel fuel filter; use VW 505.01 PD oil', de: '6-DSG-Öl (falls DSG) & Dieselfilter wechseln; strikt PD-Öl VW 505.01', ru: 'Замена масла в 6-DSG (если есть) и фильтра; строго масло допуска PD' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'PD-specific weak spots: BXE conrod bearings (1.9) / BKD head cracks & oil-pump hex drive (2.0)', de: 'PD-Schwachstellen: BXE-Pleuellager (1.9) / BKD-Kopfrisse & Ölpumpen-Sechskant (2.0)', ru: 'Болезни PD: вкладыши BXE (1.9) / трещины ГБЦ BKD и шестигранник маслонасоса (2.0)' }, cost: '€600–1,800', risk: { en: 'Thrown conrod through block (BXE) or sudden zero oil pressure (2.0 PD)', de: 'Pleuelabriss (BXE) oder plötzlicher Öldruckverlust (2.0 PD)', ru: 'Обрыв шатуна (BXE) или внезапная потеря давления масла (2.0 PD)' }, damage: '€3,500–5,500' },
                { when: { en: '160,000–230,000 km', de: '160.000–230.000 km', ru: '160 000–230 000 км' }, action: { en: 'Dual-mass flywheel + clutch & PD injector loom / seals', de: 'Zweimassenschwungrad + Kupplung & PD-Kabelbaum / Dichtringe', ru: 'Двухмассовый маховик + сцепление и коса/уплотнители насос-форсунок' }, cost: '€950–1,500', risk: { en: 'Misfiring under load, hard hot starts, and heavy flywheel rattle', de: 'Aussetzer unter Last, schlechter Warmstart und starkes ZMS-Rasseln', ru: 'Троение под нагрузкой, плохой горячий пуск и стук маховика' }, damage: '€1,800–2,600' }
              ]
            },
            badges: {
              en: ['Head Replacement ~€1,800', '120k–150k Belt Interval'],
              de: ['Kopf-Tausch ca. 1.800 €', '120–150 Tkm Zahnriemen'],
              ru: ['Замена ГБЦ ~€1800', 'Ремень каждые 120–150 тыс.']
            }
          },
          depreciationResale: {
            score: 6.0,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '2.0-tdi-140',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€8,100',
            specOverrides: { sprint0100: '8.9 s', topSpeed: '209 km/h', realWorldFuel: '5.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 6.8,
                badges: {
                  en: ['0–100 km/h: 8.9 s (DSG)', '209 km/h Top Speed'],
                  de: ['0–100 km/h: 8,9 s (DSG)', '209 km/h Spitze'],
                  ru: ['0–100 км/ч: 8,9 s (DSG)', 'Макс. 209 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.1,
                badges: {
                  en: ['5.8 L/100km (DSG)'],
                  de: ['5,8 L/100km (DSG)'],
                  ru: ['5,8 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-cr',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: true,
        fuelType: 'diesel',
        hp: 140,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TDI (8P)',
        fullName: '2010 Audi A3 2.0 TDI (140 HP CR, 8P)',
        engineBadge: '2.0L TDI CR • 140 HP',
        engineSubLabel: {
          en: '2.0L Common-Rail Diesel (04/2008–03/2013) • 6-MT / 6-DSG • 320 Nm • FWD/Quattro',
          de: '2.0L Common-Rail (04/2008–03/2013) • 6-Gang / 6-DSG • 320 Nm • FWD/Quattro',
          ru: '2.0L TDI CR (04/2008–03/2013) • 6-МКПП / 6-DSG • 320 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'SWEET-SPOT 8P',
          de: 'BESTWERT-8P',
          ru: 'ОПТИМАЛЬНЫЙ 8P'
        },
        originalMsrp: {
          en: '€27,900 New',
          de: '27.900 € Neu',
          ru: '€27 900 новый'
        },
        estUsedPrice: '€7,200',
        perkLabel: {
          en: '✦ Best A3 8P Engine • Quiet Common-Rail • Tough Wet 6-DSG',
          de: '✦ Bester A3-8P-Motor • Ruhiger Common-Rail • Starkes 6-DSG',
          ru: '✦ Лучший мотор A3 8P • Тихий Common-Rail • Мокрая 6-DSG'
        },
        remarkablePositives: {
          en: [
            'Fixes PD head cracks & noise — smooth, quiet Common Rail',
            'Effortless 320 Nm + 5.2 L/100km highway economy',
            'Pairs with tough 6-MT or wet 6-DSG'
          ],
          de: [
            'Behebt PD-Probleme — sehr ruhiger Common-Rail',
            'Souveräne 320 Nm bei ~5,2 L/100km',
            'Robustes 6-Gang oder nasses 6-DSG'
          ],
          ru: [
            'Нет проблем PD с ГБЦ — тихий Common-Rail',
            'Отличные 320 Н·м и ~5,2 л/100 км по трассе',
            'Надёжная 6-МКПП и мокрая 6-DSG'
          ]
        },
        notableNegatives: {
          en: [
            'Watch EGR valve & DPF on city-only cars',
            'Early 2008–09 oil-pump hex drive check at 200k km',
            'Higher road tax in Euro 5 diesel markets'
          ],
          de: [
            'AGR & DPF bei reiner Kurzstrecke prüfen',
            'Ölpumpen-Mitnehmer bei 2008–09 ab 200 Tkm prüfen',
            'Höhere Diesel-Kfz-Steuer'
          ],
          ru: [
            'EGR и DPF не любят короткие городские поездки',
            'На ранних 2008–09 проверить шестигранник маслонасоса',
            'Дизельный налог выше бензинового'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TDI 140 CR (Belt)', de: '2.0L Reihenvierzylinder CR (Riemen)', ru: '2.0L R4 TDI 140 CR (Ремень)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf', towingBraked: '1,600 kg',
          sprint0100: '9.1 s', topSpeed: '209 km/h', peakTorque: '320 Nm @ 1,750 rpm',
          passingPunch: { en: 'Effortless 6th-Gear Passing', de: 'Souverän im 6. Gang', ru: 'Лёгкий обгон на 6-й передаче' },
          realWorldFuel: '5.4 L/100km', tankRange: '55 L (~1,020 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.7,
            badges: {
              en: ['Facelift CR Fixes Early PD Issues', 'Easy 300,000+ km Highway Runner'],
              de: ['Facelift-CR behebt PD-Schwächen', '300.000+ km Langstreckenläufer'],
              ru: ['Рестайлинг CR избавлен от болячек PD', 'Ресурс 300 000+ км на трассе']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CBAB / CFFB (EA189) · 1,968 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron Common-Rail · 210k Timing Belt', de: 'Reihenvierzylinder Common-Rail · 210-Tkm-Zahnriemen', ru: 'Рядный 4-цил. Common-Rail · Ремень на 210 тыс. км' } }], note: { en: 'The #1 all-round engine in the A3 8P: quiet, refined Common-Rail, 1,000+ km range, tough wet 6-DSG option, and far more reliable than early PD or TSI units.', de: 'Der beste Allrounder im A3 8P: leiser Common-Rail, über 1.000 km Reichweite, robustes nasses 6-DSG und viel standfester als frühe PD/TSI.', ru: 'Лучший универсальный мотор A3 8P: тихий Common-Rail, 1 000+ км на баке, крепкий мокрый 6-DSG и высокий ресурс.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'The pick of the A3 8P range— quiet, punchy, and far more reliable than the early PD.',
                strengths: [
                  'Common-Rail injection eliminates early 2.0 PD cylinder-head cracks.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'EGR valve / DPF clogging if used only for short city hops.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Check DPF ash load / highway usage history.',
                  'Inspect timing belt & water pump replacement date.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–210,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '180,000–230,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Die beste Wahl im A3 8P— leise, kräftig und viel zuverlässiger als der alte PD.',
                strengths: [
                  'Common-Rail vermeidet die alten Zylinderkopf-Risse.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'AGR & DPF bei reinem Kurzstreckenbetrieb.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Fahrprofil prüfen (Langstrecke besser als Kurzstrecke).',
                  'Zahnriemen- & Wasserpumpen-Datum checken.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–210.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '180.000–230.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Лучший мотор в линейке A3 8P— тихий, тяговитый и намного надёжнее старого PD.',
                strengths: [
                  'Система Common-Rail решила проблему трещин ГБЦ.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Загрязнение EGR и DPF при чисто городской езде.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Убедиться, что авто ездило по трассе (для DPF).',
                  'Проверить дату замены ремня ГРМ и помпы.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–210 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '180 000–230 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.3,
            badges: {
              en: ['6-MT & Wet 6-DSG Both Proven', 'Service DSG Fluid Every 60k km'],
              de: ['6-Gang & nasses 6-DSG bewährt', 'DSG-Ölwechsel alle 60 Tkm'],
              ru: ['6-МКПП и мокрая 6-DSG проверены', 'Масло 6-DSG менять раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.6,
            badges: {
              en: ['0–100 km/h: 9.1 s • 209 km/h', 'Brisk Everyday Acceleration'],
              de: ['0–100 km/h: 9,1 s • 209 km/h', 'Flottes Autobahntempo'],
              ru: ['0–100 км/ч: 9,1 с • 209 км/ч', 'Бодрый разгон']
            }
          },
          midRangeTorquePassing: {
            score: 8.3,
            badges: {
              en: ['320 Nm @ 1,750 rpm', 'Effortless 6th-Gear Passing'],
              de: ['320 Nm ab 1.750 U/min', 'Müheloses Überholen im 6. Gang'],
              ru: ['320 Н·м с 1750 об/мин', 'Уверенный обгон на 6-й передаче']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 8.6,
            badges: {
              en: ['5.1–5.7 L/100km', '1,000+ km Highway Range'],
              de: ['5,1–5,7 L/100km', 'Über 1.000 km Reichweite'],
              ru: ['5,1–5,7 л/100 км', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['Euro 5 Diesel Tax', 'Reasonable Insurance'],
              de: ['Euro-5-Dieselsteuer', 'Faire Versicherungsklasse'],
              ru: ['Налог Евро-5', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 180,000–210,000 km / 8 yrs', de: 'Alle 180.000–210.000 km / 8 J.', ru: 'Каждые 180–210 тыс. км / 8 лет' }, action: { en: 'Replace timing belt kit, tensioners & water pump', de: 'Zahnriemensatz, Spannrollen & Wasserpumpe wechseln', ru: 'Замена комплекта ремня ГРМ, роликов и помпы' }, cost: '€580–850' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if 2.0 TDI DSG) & diesel fuel filter', de: 'Nasses 6-DSG-Öl (bei 2.0 TDI DSG) & Dieselfilter wechseln', ru: 'Замена масла в мокром 6-DSG (если есть) и топливного фильтра' }, cost: '€240–360' }
              ],
              critical: [
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'EA189 EGR cooler/valve assembly (especially on 1.6 TDI & post-update cars)', de: 'EA189 AGR-Kühler/Ventil-Einheit (besonders nach Software-Update)', ru: 'Модуль клапана и охладителя EGR EA189 (частая болезнь)' }, cost: '€650–1,050', risk: { en: 'Flashing glow-plug light, coolant loss, and limp mode', de: 'Blinkende Vorglühlampe, Kühlmittelverlust und Notlauf', ru: 'Мигающая спираль, потеря антифриза и аварийный режим' }, damage: '€1,200–1,800' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'Dual-mass flywheel + clutch & DPF ash-load check (1.6 TDI: Siemens injectors)', de: 'ZMS + Kupplung & DPF-Aschebeladung (1.6 TDI: Injektoren prüfen)', ru: 'Двухмассовый маховик + сцепление и проверка сажевого фильтра (1.6: форсунки)' }, cost: '€950–1,600', risk: { en: 'Idle knock, blocked DPF, or knocking injectors on 1.6 TDI', de: 'Starkes ZMS-Klappern, voller DPF oder nagelnde 1.6-TDI-Injektoren', ru: 'Стук маховика, забитый DPF или стук пьезофорсунок на 1.6 TDI' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['180k–210k Timing Belt Interval', 'Huge Parts Availability'],
              de: ['180–210 Tkm Zahnriemen-Intervall', 'Günstige Teileversorgung'],
              ru: ['Ремень ГРМ 180–210 тыс. км', 'Огромный выбор запчастей']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '2.0-tdi-170-pd',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€6,500',
            specOverrides: { sprint0100: '7.9 s', topSpeed: '222 km/h', realWorldFuel: '6.5 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 7.6,
                badges: {
                  en: ['0–100 km/h: 7.9 s (DSG)', '222 km/h Top Speed'],
                  de: ['0–100 km/h: 7,9 s (DSG)', '222 km/h Spitze'],
                  ru: ['0–100 км/ч: 7,9 s (DSG)', 'Макс. 222 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.4,
                badges: {
                  en: ['6.5 L/100km (DSG)'],
                  de: ['6,5 L/100km (DSG)'],
                  ru: ['6,5 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-pd',
        buyerFitOverrides: {
          skip: ['a38p170PdPiezoRisk', 'globalDieselShortTripRisk', 'a38pSmallBoot', 'a38pWetDsgFluid']
        },
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 170,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TDI 170 PD',
        fullName: '2007 Audi A3 2.0 TDI PD (170 HP, 8P)',
        engineBadge: '2.0L TDI PD • 170 HP',
        engineSubLabel: {
          en: '2.0L Pumpe-Düse Diesel (03/2006–04/2008) • 6-MT / 6-DSG • 350 Nm • FWD/Quattro',
          de: '2.0L Pumpe-Düse (03/2006–04/2008) • 6-Gang / 6-DSG • 350 Nm • FWD/Quattro',
          ru: '2.0L TDI PD (03/2006–04/2008) • 6-МКПП / 6-DSG • 350 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'PIEZO PD RISK',
          de: 'PIEZO-PD-RISIKO',
          ru: 'РИСК ФОРСУНОК PD'
        },
        originalMsrp: {
          en: '€28,900 New',
          de: '28.900 € Neu',
          ru: '€28 900 новый'
        },
        estUsedPrice: '€5,800',
        perkLabel: {
          en: '⚠ Siemens Piezo PD Injector Failures • Strong 350 Nm',
          de: '⚠ Anfällige Siemens-Piezo-PD-Elemente • Starke 350 Nm',
          ru: '⚠ Капризные пьезо-НФ Siemens • Мощные 350 Н·м'
        },
        remarkablePositives: {
          en: [
            'Fierce 350 Nm mid-range punch',
            '6-speed manual & wet 6-DSG',
            'Available with Quattro AWD'
          ],
          de: ['Brachiale 350 Nm Durchzugskraft', '6-Gang & nasses 6-DSG', 'Mit Quattro erhältlich'],
          ru: ['Мощнейший подхват 350 Н·м', '6-МКПП и мокрая 6-DSG', 'Есть версии с Quattro']
        },
        notableNegatives: {
          en: [
            'Siemens piezo PD injectors fail (recall check essential)',
            'Early DPF clogs easily on short trips',
            '2008+ 170 hp CR is vastly better'
          ],
          de: [
            'Siemens-Piezo-Elemente anfällig (Rückruf prüfen)',
            'Früher DPF verstopft auf Kurzstrecke',
            'Ab 2008 ist der 170-PS-CR klar besser'
          ],
          ru: [
            'Пьезо-насос-форсунки Siemens часто отказывают',
            'Ранний DPF быстро забивается в городе',
            'Рестайлинг CR (2008+) намного надёжнее'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TDI 170 PD (Belt)', de: '2.0L Reihenvierzylinder 170 PD', ru: '2.0L R4 TDI 170 PD (Ремень)' },
          forcedInduction: '@turbo', injection: '@pumpDuse', timingDrive: '@belt',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf', towingBraked: '1,600 kg',
          sprint0100: '8.2 s', topSpeed: '222 km/h', peakTorque: '350 Nm @ 1,750 rpm',
          passingPunch: { en: 'Huge 350 Nm PD Surge', de: 'Wuchtiger 350-Nm-PD-Schub', ru: 'Мощнейший рывок 350 Н·м PD' },
          realWorldFuel: '6.1 L/100km', tankRange: '55 L (~900 km)', euroNorm: 'Euro 4 (Diesel)', taxInsurance: '@tierModHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 3.5,
            badges: {
              en: ['Siemens Piezo PD Injector Recall', 'Early DPF + Oil Pump Shaft'],
              de: ['Siemens-Piezo-Rückruf prüfen', 'Früher DPF & Ölpumpen-Mitnehmer'],
              ru: ['Проверить отзыв по форсункам Siemens', 'Ранний DPF и привод маслонасоса']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'BMN (EA188) · 1,968 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron · Piezo Pumpe-Düse + Early DPF', de: 'Reihenvierzylinder Grauguss · Piezo-PD + früher DPF', ru: 'Рядный 4-цил. чугун · Пьезо насос-форсунки + ранний DPF' } }], note: { en: 'Rapid 350 Nm diesel hatch, but early BMN engines had notorious Siemens piezo PD injector failures (confirm recall replacement) and sensitive early DPFs.', de: 'Flotter 350-Nm-Diesel, aber frühe BMN hatten anfällige Siemens-Piezo-PD-Elemente (Rückruf-Nachweis prüfen) und empfindliche DPF.', ru: 'Очень бодрый дизель (350 Н·м), но ранние BMN славились отказом пьезо-форсунок Siemens (проверяйте отзывную) и капризным DPF.' } },
              forcedInduction: '@turboDiesel', injection: { specs: [{ k: 'injectionType', v: { en: 'Siemens Piezo Pumpe-Düse (Verify Recall Update)', de: 'Siemens Piezo-Pumpe-Düse (Rückruf-Update prüfen)', ru: 'Пьезо насос-форсунки Siemens (проверьте замену по отзывной)' } }], note: { en: 'Ensure the factory Siemens injector recall was completed; updated units are far more dependable.', de: 'Sicherstellen, dass der Werks-Rückruf der Siemens-PD-Elemente durchgeführt wurde.', ru: 'Убедитесь, что проведена заводская замена пьезо-форсунок Siemens.' } }, timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Fast Early 170 HP Diesel, Haunted by Piezo Injector & Oil-Pump Drive Risks',
                lowScoreReasons: [
                  'Sudden Siemens Piezo Injector Failures: Original pump-nozzle piezo injectors can short-circuit internally and shut the engine down mid-drive (€1,500–€2,400 if un-recalled).',
                  'Oil-Pump Hex Drive & Early DPF Stress: High-mileage balancer-shaft hex shafts can round off and starve the engine of oil, while early DPFs choke rapidly in city driving.'
                ],
                strengths: [
                  'Strong 350 Nm mid-range torque delivers brisk highway overtaking.',
                  'Can reach 220,000–250,000+ km if all 4 Siemens injectors were replaced under recall and highway miles dominate.'
                ],
                watchouts: [
                  'Check timing belt replacement history (every 120,000–150,000 km) and turbo boost hoses.',
                  'Coarse Pumpe-Düse diesel clatter when cold compared to the smoother 2008+ Common-Rail unit.'
                ],
                beforeYouBuy: [
                  'Confirm with Audi paperwork that all 4 Siemens piezo injectors were replaced under the factory recall.',
                  'Check DPF regeneration history and verify no soot-filter or glow-plug warnings appear.',
                  'Listen carefully for unusual lower-engine whine or knock on high-mileage cars (oil-pump hex drive check).'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '120,000–150,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '150,000–190,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger früher 170-PS-Diesel, belastet durch Piezo-PD-Elemente & DPF-Risiken',
                lowScoreReasons: [
                  'Ausfall der Siemens-Piezo-Pumpe-Düse-Elemente: Elektrische Kurzschlüsse im Injektor können den Motor während der Fahrt schlagartig abstellen (1.500–2.400 € ohne Rückruf-Tausch).',
                  'Sechskant-Mitnehmer der Ölpumpe & früher DPF: Bei hoher Laufleistung droht Öldruckverlust durch einen rundgedrehten Sechskant; zudem verstopft der frühe DPF im Stadtverkehr schnell.'
                ],
                strengths: [
                  'Starke 350 Nm Drehmoment sorgen für müheloses Überholen auf der Autobahn.',
                  'Erreicht 220.000–250.000+ km, sofern alle 4 Piezo-Elemente per Rückruf getauscht wurden und Langstrecke überwiegt.'
                ],
                watchouts: [
                  'Zahnriemen-Wechselintervall (alle 120.000–150.000 km) und Ladeluftschläuche regelmäßig prüfen.',
                  'Rauerer Pumpe-Düse-Klang im Kaltlauf als beim späteren Common-Rail-Nachfolger.'
                ],
                beforeYouBuy: [
                  'Audi-Nachweis verlangen, dass alle 4 Siemens-Piezo-Elemente im Rahmen des Rückrufs ersetzt wurden.',
                  'Partikelfilter-Historie prüfen — bei reinem Stadtbetrieb drohen teure DPF-Schäden.',
                  'Zahnriemen-Alter prüfen und auf sauberen Öldruck / ruhigen Motorlauf ohne Nebengeräusche achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '120.000–150.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '150.000–190.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Мощный ранний 170-сильный дизель — слабые пьезофорсунки Siemens и привод маслонасоса',
                lowScoreReasons: [
                  'Отказы пьезонасос-форсунок Siemens: Внутреннее замыкание пьезоэлемента внезапно глушит мотор прямо на ходу (€1 500–2 400 без замены по отзыву).',
                  'Шестигранник привода маслонасоса и ранний DPF: Износ привода грозит падением давления масла, а ранний сажевый фильтр быстро забивается в городе.'
                ],
                strengths: [
                  'Уверенные 350 Н·м тяги обеспечивают быстрые обгоны на трассе.',
                  'Способен пройти 220 000–250 000+ км после замены всех 4 форсунок по отзыву и при трассовой эксплуатации.'
                ],
                watchouts: [
                  'Следите за регламентом ремня ГРМ (120–150 тыс. км) и герметичностью патрубков наддува.',
                  'Более жёсткая и шумная работа насос-форсунок на холодную по сравнению с версией Common-Rail.'
                ],
                beforeYouBuy: [
                  'Проверить документы о замене всех 4 пьезофорсунок Siemens по заводской отзывной кампании.',
                  'Уточнить трассовый пробег и состояние сажевого фильтра без горящих ошибок.',
                  'Проверить дату замены ремня ГРМ и прислушаться к отсутствию постороннего воя снизу блока.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '120 000–150 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '150 000–190 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.4,
            badges: {
              en: ['6-MT & Wet 6-DSG Tough', '350 Nm Works Clutch/DMF Hard'],
              de: ['6-Gang & nasses 6-DSG robust', '350 Nm fordern Kupplung/ZMS'],
              ru: ['6-МКПП и мокрая 6-DSG крепки', '350 Н·м нагружают маховик']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.2 s • 222 km/h', 'Rapid Diesel Hatch'],
              de: ['0–100 km/h: 8,2 s • 222 km/h', 'Sehr flotter Diesel'],
              ru: ['0–100 км/ч: 8,2 с • 222 км/ч', 'Быстрый дизельный хэтч']
            }
          },
          midRangeTorquePassing: {
            score: 8.6,
            badges: {
              en: ['350 Nm @ 1,750 rpm', 'Huge Mid-Range Surge'],
              de: ['350 Nm ab 1.750 U/min', 'Mächtiger Zwischenspurt'],
              ru: ['350 Н·м с 1750 об/мин', 'Огромный запас тяги']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 7.9,
            badges: {
              en: ['5.8–6.4 L/100km', 'Efficient For 170 HP'],
              de: ['5,8–6,4 L/100km', 'Sparsam für 170 PS'],
              ru: ['5,8–6,4 л/100 км', 'Экономичен для 170 л.с.']
            }
          },
          taxInsuranceNorm: {
            score: 6.6,
            badges: {
              en: ['Euro 4 2.0L Diesel Tax', 'Higher Insurance Group'],
              de: ['2.0L Euro-4-Dieselsteuer', 'Höhere Typklasse'],
              ru: ['Налог 2.0 л Евро-4', 'Повышенная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 4.3,
            repairGuide: {
              routine: [
                { when: { en: 'Every 120,000 km / 6 yrs', de: 'Alle 120.000 km / 6 J.', ru: 'Каждые 120 000 км / 6 лет' }, action: { en: 'Replace timing belt kit, rollers & water pump', de: 'Zahnriemensatz, Rollen & Wasserpumpe erneuern', ru: 'Замена ремня ГРМ, роликов и помпы' }, cost: '€520–780' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if DSG) & diesel fuel filter; use VW 505.01 PD oil', de: '6-DSG-Öl (falls DSG) & Dieselfilter wechseln; strikt PD-Öl VW 505.01', ru: 'Замена масла в 6-DSG (если есть) и фильтра; строго масло допуска PD' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'PD-specific weak spots: BXE conrod bearings (1.9) / BKD head cracks & oil-pump hex drive (2.0)', de: 'PD-Schwachstellen: BXE-Pleuellager (1.9) / BKD-Kopfrisse & Ölpumpen-Sechskant (2.0)', ru: 'Болезни PD: вкладыши BXE (1.9) / трещины ГБЦ BKD и шестигранник маслонасоса (2.0)' }, cost: '€600–1,800', risk: { en: 'Thrown conrod through block (BXE) or sudden zero oil pressure (2.0 PD)', de: 'Pleuelabriss (BXE) oder plötzlicher Öldruckverlust (2.0 PD)', ru: 'Обрыв шатуна (BXE) или внезапная потеря давления масла (2.0 PD)' }, damage: '€3,500–5,500' },
                { when: { en: '160,000–230,000 km', de: '160.000–230.000 km', ru: '160 000–230 000 км' }, action: { en: 'Dual-mass flywheel + clutch & PD injector loom / seals', de: 'Zweimassenschwungrad + Kupplung & PD-Kabelbaum / Dichtringe', ru: 'Двухмассовый маховик + сцепление и коса/уплотнители насос-форсунок' }, cost: '€950–1,500', risk: { en: 'Misfiring under load, hard hot starts, and heavy flywheel rattle', de: 'Aussetzer unter Last, schlechter Warmstart und starkes ZMS-Rasseln', ru: 'Троение под нагрузкой, плохой горячий пуск и стук маховика' }, damage: '€1,800–2,600' }
              ]
            },
            badges: {
              en: ['Piezo PD Elements Expensive', 'DPF & Flywheel Maintenance'],
              de: ['Piezo-PD-Elemente teuer', 'DPF & ZMS kostenintensiv'],
              ru: ['Дорогие пьезо-НФ', 'Обслуживание DPF и маховика']
            }
          },
          depreciationResale: {
            score: 6.0,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      },
      {
        id: '2.0-tdi-170-cr',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€8,800',
            specOverrides: { sprint0100: '7.8 s', topSpeed: '222 km/h', realWorldFuel: '6.1 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 7.7,
                badges: {
                  en: ['0–100 km/h: 7.8 s (DSG)', '222 km/h Top Speed'],
                  de: ['0–100 km/h: 7,8 s (DSG)', '222 km/h Spitze'],
                  ru: ['0–100 км/ч: 7,8 s (DSG)', 'Макс. 222 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.7,
                badges: {
                  en: ['6.1 L/100km (DSG)'],
                  de: ['6,1 L/100km (DSG)'],
                  ru: ['6,1 L/100km (DSG)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-cr',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 170,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TDI 170 CR',
        fullName: '2010 Audi A3 2.0 TDI CR (170 HP, 8P)',
        engineBadge: '2.0L TDI CR • 170 HP',
        engineSubLabel: {
          en: '2.0L Common-Rail Diesel (04/2008–10/2012) • 6-MT / 6-DSG • 350 Nm • FWD/Quattro',
          de: '2.0L Common-Rail (04/2008–10/2012) • 6-Gang / 6-DSG • 350 Nm • FWD/Quattro',
          ru: '2.0L TDI CR (04/2008–10/2012) • 6-МКПП / 6-DSG • 350 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'FAST & RELIABLE CR',
          de: 'SCHNELL & SOLIDE CR',
          ru: 'БЫСТРЫЙ И КРЕПКИЙ'
        },
        originalMsrp: {
          en: '€30,100 New',
          de: '30.100 € Neu',
          ru: '€30 100 новый'
        },
        estUsedPrice: '€7,900',
        perkLabel: {
          en: '✦ 170 HP / 350 Nm Common-Rail • Tough Wet 6-DSG • 5.5 L/100km',
          de: '✦ 170 PS / 350 Nm Common-Rail • Starkes 6-DSG • 5,5 L/100km',
          ru: '✦ 170 л.с. / 350 Н·м Common-Rail • Мокрая 6-DSG • 5,5 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Fixes PD injector issues with smooth Common Rail',
            '350 Nm + 8.2 s 0–100 km/h pace',
            '5.5 L/100km real economy even at Autobahn speed'
          ],
          de: [
            'Behebt PD-Probleme dank Common-Rail',
            '350 Nm & 8,2 s auf 100 km/h',
            '5,5 L/100km selbst bei flottem Tempo'
          ],
          ru: [
            'Common-Rail без проблем старых форсунок PD',
            '350 Н·м и 8,2 с до 100 км/ч',
            'Расход ~5,5 л/100 км даже на трассе'
          ]
        },
        notableNegatives: {
          en: [
            'EGR cooler & swirl flaps at high mileage',
            'Higher insurance than 140 hp TDI',
            'Front tires wear fast on FWD without Quattro'
          ],
          de: [
            'AGR-Kühler & Saugrohrklappen im Alter',
            'Teurere Versicherung als 140 PS',
            'Vorderreifen ohne Quattro stärker belastet'
          ],
          ru: [
            'Охладитель EGR и заслонки к 180 тыс. км',
            'Страховка выше, чем у 140 л.с.',
            'На переднем приводе быстрее стираются шины'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TDI 170 CR (Belt)', de: '2.0L Reihenvierzylinder 170 CR', ru: '2.0L R4 TDI 170 CR (Ремень)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf', towingBraked: '1,600 kg',
          sprint0100: '8.2 s', topSpeed: '224 km/h', peakTorque: '350 Nm @ 1,750 rpm',
          passingPunch: { en: 'GTI-Rivaling 350 Nm Pull', de: 'GTI-ähnlicher 350-Nm-Durchzug', ru: 'Мощная тяга 350 Н·м' },
          realWorldFuel: '5.7 L/100km', tankRange: '55 L (~965 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierModHigh', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.3,
            badges: {
              en: ['Proven Facelift Common-Rail', '180–210k km Belt • Watch EGR'],
              de: ['Bewährter Facelift-Common-Rail', '180–210 Tkm Riemen • AGR prüfen'],
              ru: ['Надёжный рестайлинг Common-Rail', 'Ремень 180–210 тыс. • Контроль EGR']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CBBB / CFGB (EA189) · 1,968 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron Common-Rail · 170 HP / 350 Nm', de: 'Reihenvierzylinder Common-Rail · 170 PS / 350 Nm', ru: 'Рядный 4-цил. Common-Rail · 170 л.с. / 350 Н·м' } }], note: { en: 'Effortless Autobahn express: fixes the old BMN piezo-injector headaches, delivers 224 km/h cruise, and pairs cleanly with wet 6-DSG or Quattro.', de: 'Souveräner Autobahn-Express: behebt die alten BMN-Schwächen, läuft 224 km/h und harmoniert top mit nassem 6-DSG oder Quattro.', ru: 'Отличный скоростной дизель: избавлен от проблем старого BMN, едет 224 км/ч и отлично сочетается с 6-DSG или Quattro.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'All the punch of the 170 PD without the Siemens injector headaches— a rapid, frugal mile-eater.',
                strengths: [
                  'Smooth Common-Rail replaces fragile PD piezo injectors.',
                  '350 Nm torque and 5.5 L/100km highway economy.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'EGR cooler leaks and intake swirl-flap actuator wear.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Check coolant level & EGR cooler for leaks.',
                  'Confirm timing belt service history.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60,000 km / 4 yrs',
                    action: 'Annual 15,000 km oil & filter service plus brake fluid every 2 yrs',
                    cost: '€160–€240',
                    ifIgnored: 'Long-life 30,000 km intervals carbonize turbo oil feed lines',
                    damageCost: '€1,100–€1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '80,000–120,000 km / 6–8 yrs',
                    action: 'Replace coolant thermostat, glow plugs & inspect rubber boost hoses',
                    cost: '€250–€450',
                    ifIgnored: 'Cracked hoses or stuck thermostat block DPF regeneration',
                    damageCost: '€900–€1,600'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km / 8–10 yrs',
                    action: 'Dual-mass flywheel, clutch & EGR cooler / valve clean or replace',
                    cost: '€950–€1,550',
                    ifIgnored: 'Failing flywheel damages gearbox input bearing; clogged EGR stalls car',
                    damageCost: '€2,000–€3,000'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–210,000 km / 7–10 yrs',
                    action: 'Full timing belt, water pump & auxiliary belt kit replacement',
                    cost: '€650–€950',
                    ifIgnored: 'Belt snap bends valves and destroys cylinder head',
                    damageCost: '€3,000–€5,000'
                  },
                  {
                    tier: 'red',
                    km: '180,000–230,000 km / 10+ yrs',
                    action: 'Professional DPF cleaning/replacement & injector seal / high-pressure pump check',
                    cost: '€600–€1,400',
                    ifIgnored: 'Fuel dilution in oil ruins turbocharger and main bearings',
                    damageCost: '€2,500–€4,500'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km / 12+ yrs',
                    action: 'Overhaul front/rear suspension bushings, dampers & engine mounts',
                    cost: '€850–€1,450',
                    ifIgnored: 'Worn bushings ruin tires and cause MOT failure',
                    damageCost: '€1,500–€2,400'
                  }
                ]
              },
              de: {
                headline: 'Die volle Kraft des 170er ohne Piezo-Sorgen— schneller, sparsamer Kilometerfresser.',
                strengths: [
                  'Common-Rail ersetzt anfällige Piezo-PD-Elemente.',
                  '350 Nm bei nur 5,5 L/100km.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'AGR-Kühler & Saugrohrklappen im Alter.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Kühlmittel & AGR-Kühler kontrollieren.',
                  'Zahnriemen-Nachweis einsehen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60.000 km / 4 J.',
                    action: 'Jährlicher Öl- & Filterwechsel (max. 15.000 km) + Bremsflüssigkeit alle 2 J.',
                    cost: '160–240 €',
                    ifIgnored: 'Longlife-30.000-km-Intervalle verkoken Turbo-Ölleitungen',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '80.000–120.000 km / 6–8 J.',
                    action: 'Thermostat, Glühkerzen & alternde Ladedruckschläuche prüfen/tauschen',
                    cost: '250–450 €',
                    ifIgnored: 'Offenes Thermostat verhindert DPF-Regeneration',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km / 8–10 J.',
                    action: 'Zweimassenschwungrad, Kupplung sowie AGR-Ventil/Kühler erneuern',
                    cost: '950–1.550 €',
                    ifIgnored: 'Defektes ZMS schädigt Getriebelager; verstopftes AGR legt Motor lahm',
                    damageCost: '2.000–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–210.000 km / 7–10 J.',
                    action: 'Zahnriemen-Satz inkl. Wasserpumpe & Keilrippenriemen wechseln',
                    cost: '650–950 €',
                    ifIgnored: 'Riemenriss führt zum kapitalen Motorschaden',
                    damageCost: '3.000–5.000 €'
                  },
                  {
                    tier: 'red',
                    km: '180.000–230.000 km / 10+ J.',
                    action: 'DPF-Reinigung/-Tausch, Injektor-Dichtungen & Hochdruckpumpe prüfen',
                    cost: '600–1.400 €',
                    ifIgnored: 'Ölverdünnung zerstört Turbolader und Kurbelwellenlager',
                    damageCost: '2.500–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km / 12+ J.',
                    action: 'Fahrwerkslager, Stoßdämpfer & Motorlager komplett überholen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ausgeschlagene Achsen, ungleicher Reifenabrieb & TÜV-Mängel',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Вся мощь 170-сильного дизеля без проблем с пьезофорсунками— быстрый и экономичный.',
                strengths: [
                  'Надёжный Common-Rail вместо проблемных НФ Siemens.',
                  '350 Н·м при расходе ~5,5 л/100 км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекания охладителя EGR и привод заслонок.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Проверить уровень антифриза и EGR.',
                  'Проверить историю замены ГРМ.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–60 000 км / 4 года',
                    action: 'Ежегодная замена масла (раз в 10–15 тыс. км) и тормозной жидкости раз в 2 года',
                    cost: '€160–€240',
                    ifIgnored: 'Интервалы 30 тыс. км закоксовывают маслоподачу турбины',
                    damageCost: '€1 100–€1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '80 000–120 000 км / 6–8 лет',
                    action: 'Замена термостата, свечей накала и проверка резиновых патрубков наддува',
                    cost: '€250–€450',
                    ifIgnored: 'Недогрев двигателя срывает прожиг сажевого фильтра',
                    damageCost: '€900–€1 600'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км / 8–10 лет',
                    action: 'Замена двухмассового маховика, сцепления и чистка/замена клапана EGR',
                    cost: '€950–€1 550',
                    ifIgnored: 'Разбитый маховик губит подшипник КПП; клин EGR душит мотор',
                    damageCost: '€2 000–€3 000'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–210 000 km / 7–10 лет',
                    action: 'Замена комплекта ремня ГРМ, помпы и приводного ремня',
                    cost: '€650–€950',
                    ifIgnored: 'Обрыв ремня загибает клапаны и ломает ГБЦ',
                    damageCost: '€3 000–€5 000'
                  },
                  {
                    tier: 'red',
                    km: '180 000–230 000 km / 10+ лет',
                    action: 'Промывка/замена DPF, проверка форсунок и ТНВД на стружку',
                    cost: '€600–€1 400',
                    ifIgnored: 'Разжижение масла топливом или стружка убивают мотор',
                    damageCost: '€2 500–€4 500'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км / 12+ лет',
                    action: 'Переборка сайлентблоков подвески, амортизаторов и опор двигателя',
                    cost: '€850–€1 450',
                    ifIgnored: 'Люфты в шасси, жор резины и непрохождение ТО',
                    damageCost: '€1 500–€2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.1,
            badges: {
              en: ['6-MT & Wet 6-DSG Both Strong', 'Service DSG Oil Every 60k km'],
              de: ['6-Gang & nasses 6-DSG stark', 'DSG-Öl alle 60 Tkm wechseln'],
              ru: ['6-МКПП и мокрая 6-DSG очень крепки', 'Масло 6-DSG раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Galvanized Shell • Clean Cabin Trim', 'Watch Front Subframe & Sill Edges'],
              de: ['Verzinkte Karosserie • Solider Innenraum', 'Vorderachse & Schwellerkanten prüfen'],
              ru: ['Оцинкованный кузов • Крепкий салон', 'Проверить подрамник и кромки порогов']
            }
          },
          electronicsReliability: {
            score: 6.0,
            badges: {
              en: ['Mature Electronics • Few ECU Glitches', 'Watch Door Wiring Loom & Window Motors'],
              de: ['Ausgereifte Elektronik • Solide Steuergeräte', 'Türkabelbaum & Fensterheber prüfen'],
              ru: ['Зрелая электрика • Стабильные блоки', 'Проверить жгуты дверей и стеклоподъёмники']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['Composed Multi-Link Ride', 'Quiet Cabin (Facelift Insulation)'],
              de: ['Ausgewogenes Mehrlenker-Fahrwerk', 'Gute Geräuschdämmung (Facelift)'],
              ru: ['Собранная многорычажная подвеска', 'Тихий салон после рестайлинга']
            }
          },
          interiorQualityFeatures: {
            score: 8.3,
            badges: {
              en: ['Benchmark Compact Cabin Materials', 'Solid Switchgear & Soft-Touch Dash'],
              de: ['Klassenbeste Materialanmutung', 'Präzise Schalter & Soft-Touch-Cockpit'],
              ru: ['Эталонные материалы отделки в классе', 'Чёткие кнопки и мягкий пластик']
            }
          },
          visibilityManeuverability: {
            score: 7.1,
            badges: {
              en: ['4.29 m Compact Length • 10.7 m Turn', 'Wide C-Pillar Rear Quarter'],
              de: ['4,29 m Kompaktmaß • 10,7 m Wendekreis', 'Breite C-Säule nach schräg hinten'],
              ru: ['Компактные 4,29 м • Разворот 10,7 м', 'Широкая задняя стойка']
            }
          },
          safetyProtection: {
            score: 6.3,
            badges: {
              en: ['Euro NCAP 4★ (2003 Standard)', '6 Airbags + ESP Standard'],
              de: ['Euro NCAP 4★ (2003-Norm)', '6 Airbags + ESP serienmäßig'],
              ru: ['Euro NCAP 4★ (стандарт 2003)', '6 подушек + ESP в базе']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.3,
            badges: {
              en: ['Supportive Front Seats • Low Driving Pos.', 'Average Rear Legroom for Adults'],
              de: ['Gute Sportsitze • Tiefe Sitzposition', 'Knieraum im Fond klassenüblich'],
              ru: ['Удобные кресла • Низкая посадка', 'Средний запас места сзади']
            }
          },
          interiorBootSpace: {
            score: 5.9,
            badges: {
              en: ['370 L Boot (1,100 L Folded)', 'Quattro Models Drop to 302 L'],
              de: ['370 L Kofferraum (1.100 L umgeklappt)', 'Quattro-Modelle nur 302 L'],
              ru: ['Багажник 370 л (1100 л слож.)', 'У Quattro — 302 л']
            }
          },
          payloadTowing: {
            score: 6.6,
            badges: {
              en: ['520–560 kg Payload • 75 kg Roof', '1,200–1,600 kg Braked Towing'],
              de: ['520–560 kg Zuladung • 75 kg Dachlast', '1.200–1.600 kg Anhängelast gebremst'],
              ru: ['Нагрузка 520–560 кг • Крыша 75 кг', 'Прицеп до 1200–1600 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.2 s • 224 km/h', 'Effortless Autobahn Cruiser'],
              de: ['0–100 km/h: 8,2 s • 224 km/h', 'Souveräner Autobahn-Gleiter'],
              ru: ['0–100 км/ч: 8,2 с • 224 км/ч', 'Уверенный трассовый боец']
            }
          },
          midRangeTorquePassing: {
            score: 8.8,
            badges: {
              en: ['350 Nm @ 1,750 rpm', 'GTI-Rivaling Mid-Range'],
              de: ['350 Nm ab 1.750 U/min', 'Durchzug auf GTI-Niveau'],
              ru: ['350 Н·м с 1750 об/мин', 'Тяга на уровне хот-хэтча']
            }
          },
          handlingAgility: {
            score: 7.4,
            badges: {
              en: ['Multi-Link Rear • Crisp Turn-In', 'Predictable Front-Drive Balance'],
              de: ['Mehrlenker-Hinterachse • Präzises Einlenken', 'Sicheres, neutrales Fahrverhalten'],
              ru: ['Многорычажка сзади • Точный вход', 'Предсказуемый баланс шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', 'Strong Pedal Bite • All-Round Discs'],
              de: ['100–0 km/h: 36,4 m', 'Guter Druckpunkt • 4× Scheibenbremsen'],
              ru: ['100–0 км/ч: 36,4 м', 'Чёткая педаль • Диски по кругу']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.4–6.0 L/100km', 'Great Power-to-Fuel Ratio'],
              de: ['5,4–6,0 L/100km', 'Top Verhältnis aus Kraft & Verbrauch'],
              ru: ['5,4–6,0 л/100 км', 'Отличный баланс тяги и расхода']
            }
          },
          taxInsuranceNorm: {
            score: 6.8,
            badges: {
              en: ['Euro 5 2.0L Diesel Tax', 'Slightly Higher Insurance'],
              de: ['2.0L Euro-5-Steuer', 'Etwas höhere Versicherung'],
              ru: ['Налог 2.0 л Евро-5', 'Страховка чуть выше 140 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 7.3,
            repairGuide: {
              routine: [
                { when: { en: 'Every 180,000–210,000 km / 8 yrs', de: 'Alle 180.000–210.000 km / 8 J.', ru: 'Каждые 180–210 тыс. км / 8 лет' }, action: { en: 'Replace timing belt kit, tensioners & water pump', de: 'Zahnriemensatz, Spannrollen & Wasserpumpe wechseln', ru: 'Замена комплекта ремня ГРМ, роликов и помпы' }, cost: '€580–850' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG oil (if 2.0 TDI DSG) & diesel fuel filter', de: 'Nasses 6-DSG-Öl (bei 2.0 TDI DSG) & Dieselfilter wechseln', ru: 'Замена масла в мокром 6-DSG (если есть) и топливного фильтра' }, cost: '€240–360' }
              ],
              critical: [
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'EA189 EGR cooler/valve assembly (especially on 1.6 TDI & post-update cars)', de: 'EA189 AGR-Kühler/Ventil-Einheit (besonders nach Software-Update)', ru: 'Модуль клапана и охладителя EGR EA189 (частая болезнь)' }, cost: '€650–1,050', risk: { en: 'Flashing glow-plug light, coolant loss, and limp mode', de: 'Blinkende Vorglühlampe, Kühlmittelverlust und Notlauf', ru: 'Мигающая спираль, потеря антифриза и аварийный режим' }, damage: '€1,200–1,800' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'Dual-mass flywheel + clutch & DPF ash-load check (1.6 TDI: Siemens injectors)', de: 'ZMS + Kupplung & DPF-Aschebeladung (1.6 TDI: Injektoren prüfen)', ru: 'Двухмассовый маховик + сцепление и проверка сажевого фильтра (1.6: форсунки)' }, cost: '€950–1,600', risk: { en: 'Idle knock, blocked DPF, or knocking injectors on 1.6 TDI', de: 'Starkes ZMS-Klappern, voller DPF oder nagelnde 1.6-TDI-Injektoren', ru: 'Стук маховика, забитый DPF или стук пьезофорсунок на 1.6 TDI' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['210k Belt Interval', 'EGR/DMF Main Wear Items'],
              de: ['210 Tkm Zahnriemen', 'AGR & ZMS Hauptverschleiß'],
              ru: ['Ремень раз в 210 тыс. км', 'Основные траты — EGR и маховик']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Audi Badge Resale Demand', 'Bottomed Out • Steady Value'],
              de: ['Hohe Nachfrage nach Audi-Modellen', 'Wertverlust größtenteils abgeschlossen'],
              ru: ['Высокая ликвидность бренда Audi', 'Цена уже устоялась на рынке']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Phantom Black Pearl', code: 'LZ9Y', hex: '#181a1f', glow: 'rgba(65, 76, 92, 0.18)' },
    { name: 'Brilliant Black', code: 'LY9B', hex: '#14161a', glow: 'rgba(60, 70, 84, 0.18)' },
    { name: 'Ice Silver Metallic', code: 'LX7W', hex: '#b8c0c8', glow: 'rgba(184, 192, 200, 0.16)' },
    { name: 'Lava Grey Pearl', code: 'LZ7L', hex: '#494e56', glow: 'rgba(73, 78, 86, 0.18)' },
    { name: 'Ibis White', code: 'LY9C', hex: '#f1f3f6', glow: 'rgba(241, 243, 246, 0.16)' },
    { name: 'Brilliant Red', code: 'LY3J', hex: '#c41d24', glow: 'rgba(196, 29, 36, 0.2)' },
    { name: 'Scuba Blue Metallic', code: 'LX5Q', hex: '#214b80', glow: 'rgba(33, 75, 128, 0.2)' },
    { name: 'Mauritius Blue', code: 'LZ5C', hex: '#1f365c', glow: 'rgba(31, 54, 92, 0.2)' },
    { name: 'Monsoon Grey', code: 'LX7R', hex: '#636971', glow: 'rgba(99, 105, 113, 0.18)' },
    { name: 'Akoya Silver', code: 'LY7H', hex: '#9da5ae', glow: 'rgba(157, 165, 174, 0.16)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '2.0-tdi-140',
    defaultGroupKey: 'tdi-cr',
    engineCosts: {
      '1.2-tfsi':       { group: 'tfsi-chain', avgFuelL100: 6.2, fuelPrice: 1.75, tax: 72,  ins: 520, service: 320 },
      '1.4-tfsi':       { group: 'tfsi-chain', avgFuelL100: 6.6, fuelPrice: 1.75, tax: 92,  ins: 560, service: 340 },
      '1.6-mpi':        { group: 'mpi-fsi',    avgFuelL100: 7.6, fuelPrice: 1.75, tax: 128, ins: 510, service: 250 },
      '1.6-fsi':        { group: 'mpi-fsi',    avgFuelL100: 7.1, fuelPrice: 1.75, tax: 118, ins: 530, service: 290 },
      '1.8-tfsi':       { group: 'tfsi-chain', avgFuelL100: 7.8, fuelPrice: 1.75, tax: 148, ins: 640, service: 410 },
      '2.0-fsi':        { group: 'mpi-fsi',    avgFuelL100: 8.2, fuelPrice: 1.75, tax: 158, ins: 610, service: 320 },
      '2.0-tfsi':       { group: 'tfsi-chain', avgFuelL100: 8.9, fuelPrice: 1.75, tax: 184, ins: 740, service: 440 },
      '1.6-tdi-90':     { group: 'tdi-cr',     avgFuelL100: 4.6, fuelPrice: 1.65, tax: 162, ins: 540, service: 330 },
      '1.6-tdi-105':    { group: 'tdi-cr',     avgFuelL100: 4.7, fuelPrice: 1.65, tax: 168, ins: 560, service: 340 },
      '1.9-tdi':        { group: 'tdi-pd',     avgFuelL100: 5.1, fuelPrice: 1.65, tax: 293, ins: 590, service: 310 },
      '2.0-tdi-140-pd': { group: 'tdi-pd',     avgFuelL100: 5.6, fuelPrice: 1.65, tax: 308, ins: 640, service: 370 },
      '2.0-tdi-140':    { group: 'tdi-cr',     avgFuelL100: 5.4, fuelPrice: 1.65, tax: 228, ins: 650, service: 360 },
      '2.0-tdi-170-pd': { group: 'tdi-pd',     avgFuelL100: 6.1, fuelPrice: 1.65, tax: 308, ins: 690, service: 400 },
      '2.0-tdi-170-cr': { group: 'tdi-cr',     avgFuelL100: 5.7, fuelPrice: 1.65, tax: 238, ins: 700, service: 380 }
    },
    groups: {
      'mpi-fsi': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid (Simple Tech)', note: '1.6 MPI is among the lowest-risk budget compacts; watch age-related suspension bushes' },
            { source: 'ADAC Pannenstatistik', value: 'High (1.6 MPI)', note: 'Port-injected 1.6 MPI is virtually bulletproof; 1.6/2.0 FSI need timing/NOx care' },
            { source: 'WhatCar? Survey', value: '93.5% Reliability', note: 'Low electrical defect rate, though 20-year-old seals and window regulators age' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide (Simple Technik)', note: 'Der 1.6 MPI punktet mit simpler Robustheit; altersbedingt Fahrwerkslager prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Stark (1.6 MPI)', note: 'Saugrohreinspritzer 1.6 MPI extrem pannensicher; FSI braucht mehr Pflege (NOx/Kette)' },
            { source: 'WhatCar? Umfrage', value: '93,5 % Zuverlässigkeit', note: 'Geringe Elektronikprobleme, jedoch altern Türschlösser, Fensterheber und Gummilager' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Надёжно (простая база)', note: '1.6 MPI — один из самых беспроблемных моторов поколения; следить за сайлентблоками' },
            { source: 'ADAC Pannenstatistik', value: 'Отлично (1.6 MPI)', note: 'Распределённый впрыск 1.6 MPI почти неубиваем; у FSI возможны вопросы по NOx и цепи' },
            { source: 'Рейтинг WhatCar?', value: '93,5% надёжности', note: 'Простая электрика, основные возрастные мелочи — стеклоподъёмники и замки дверей' }
          ]
        },
        extendedChecks: {
          en: [
            'Verify timing-belt age on 1.6 MPI / 2.0 FSI (change every 5–6 yrs) or listen for cold-start chain rattle on 1.6 FSI.',
            'Test all 5/6 manual gears smoothly; listen for input-shaft bearing whine on older 5-speed DUU/JHT gearboxes.',
            'Inspect rear multi-link trailing arms, wheel-arch edges, and tailgate latch area for early rust bubbles.',
            'Check window regulators for smooth travel and test A/C compressor engagement on warm days.'
          ],
          de: [
            'Zahnriemenalter bei 1.6 MPI / 2.0 FSI prüfen (alle 5–6 Jahre) bzw. beim 1.6 FSI auf ruhigen Ketten-Kaltstart achten.',
            '5-/6-Gang-Getriebe sauber durchschalten und bei älteren 5-Gang-Boxen auf ruhigen Lagerlauf im Schiebebetrieb hören.',
            'Hintere Mehrlenker-Achse, Radlaufkanten und Heckklappengriff auf beginnende Korrosion untersuchen.',
            'Alle elektrischen Fensterheber auf gleichmäßigen Lauf und die Klimaanlage auf rasche Kühlleistung testen.'
          ],
          ru: [
            'Проверить возраст ремня ГРМ на 1.6 MPI / 2.0 FSI или послушать цепь при холодном пуске 1.6 FSI.',
            'Проверить чёткость всех передач МКПП и отсутствие гула подшипников на старых 5-ступенчатых коробках.',
            'Осмотреть заднюю многорычажку, кромки арок и зону замка пятой двери на предмет начальной коррозии.',
            'Проверить плавность всех стеклоподъёмников и быстрое включение компрессора кондиционера.'
          ]
        },
        savingsNote: {
          en: '7.1–8.2 L/100 km burns more petrol than newer turbo models, yet €4,500–€4,900 buy-in and cheap 1.6 MPI parts keep surprise repair bills near zero.',
          de: '7,1–8,2 L/100 km verbrauchen mehr als moderne Turbos, doch niedrige Kaufpreise (4.500–4.900 €) und simple 1.6-MPI-Teile sparen teure Defekte.',
          ru: 'Расход 7,1–8,2 л/100 км выше, чем у свежих турбомоторов, но цена €4 500–4 900 и копеечные запчасти 1.6 MPI страхуют от крупных трат.'
        },
        market: {
          supplyDemand: {
            en: 'Very affordable entry point into the Audi badge; clean manual 1.6 MPI Sportbacks still sell fast to first-time and city buyers.',
            de: 'Günstigster Einstieg in die Audi-Welt; saubere 1.6 MPI Sportback-Schalter sind bei Stadt- und Erstkäufern begehrt.',
            ru: 'Самый доступный вход в премиальный С-класс Audi; живые 1.6 MPI Sportback на механике быстро забирают для города.'
          },
          sweetSpot: {
            en: '2008–2010 1.6 MPI Sportback Facelift (102 HP, 5-MT, Ambition) with clean history under 150,000 km (€4,800–€5,900).',
            de: '2008–2010 1.6 MPI Sportback Facelift (102 PS, 5-Gang, Ambition) mit sauberer Historie unter 150.000 km (4.800–5.900 €).',
            ru: '2008–2010 гг. 1.6 MPI Sportback рестайлинг (102 л.с., 5-МКПП, Ambition) с пробегом до 150 000 км (€4 800–5 900).'
          },
          outlook3to5yr: {
            en: 'Already near its floor (€2,800–€3,800 in 3–5 yrs); minimal further depreciation on tidy rust-free examples.',
            de: 'Bereits nahe am Preisboden (ca. 2.800–3.800 € in 3–5 Jahren); bei gepflegten Exemplaren kaum weiterer Wertverlust.',
            ru: 'Цена уже у нижней границы (€2 800–3 800 через 3–5 лет); ухоженные машины без ржавчины почти не дешевеют.'
          }
        },
        watchoutExtra: {
          en: [
            '1.6 FSI and 2.0 FSI direct-injection engines suffer carbon buildup, NOx-sensor faults, and chain rattle (1.6 FSI) — the simpler 1.6 MPI avoids all three.',
            'Aged soft-touch interior switch coatings peel easily, and door wiring looms/window regulators are common 15+ year repairs.'
          ],
          de: [
            '1.6 FSI und 2.0 FSI neigen zu Verkokung, NOx-Sensor-Fehlern und Kettenrasseln (1.6 FSI) — der simple 1.6 MPI umgeht all diese Risiken.',
            'Abgeblätterter Softlack an Schaltern, Kabelbrüche in den Türfaltenbälgen und Fensterheber sind typische Alterserscheinungen.'
          ],
          ru: [
            'На моторах FSI (1.6/2.0) возможны нагар на клапанах, ошибки датчика NOx и растяжение цепи (1.6 FSI) — простой 1.6 MPI лишён этих проблем.',
            'Возрастное облезание покрытия софт-тач на кнопках, перетирание жгута в гофре двери и пластиковые направляющие стеклоподъёмников.'
          ]
        }
      },
      'tfsi-chain': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Average (Engine Care)', note: 'Chassis passes well, but 2008–2011 chain-driven TFSI reliability depends on prior fixes' },
            { source: 'ADAC Pannenstatistik', value: 'Watch Chain & Oil', note: '1.2/1.4/1.8 TFSI need updated chain tensioners; 1.8 EA888 risks oil burning' },
            { source: 'WhatCar? Survey', value: '87.5% Reliability', note: 'DQ200 7-speed dry DSG mechatronics and timing chains pull ratings down' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Durchschnitt (Motorpflege)', note: 'Fahrwerk solide, doch Ketten-TFSI (2008–2011) stehen und fallen mit Vorreparaturen' },
            { source: 'ADAC Pannenstatistik', value: 'Achtung Kette & Öl', note: '1.2/1.4/1.8 TFSI brauchen aktualisierte Kettenspanner; 1.8 EA888 oft mit Ölverbrauch' },
            { source: 'WhatCar? Umfrage', value: '87,5 % Zuverlässigkeit', note: 'Trockenes 7-Gang-DSG (DQ200) und frühe Steuerketten drücken die Zuverlässigkeitswerte' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Средне (зависит от ТО)', note: 'Ходовая крепкая, но ресурс цепных TFSI 2008–2011 гг. критически зависит от проведённых доработок' },
            { source: 'ADAC Pannenstatistik', value: 'Риск цепи и масла', note: '1.2/1.4/1.8 TFSI требуют обновлённых натяжителей цепи; ранний 1.8 EA888 склонен к масложору' },
            { source: 'Рейтинг WhatCar?', value: '87,5% надёжности', note: 'Сухая 7-ступенчатая DSG (DQ200) и ранние цепи ГРМ заметно снижают рейтинг' }
          ]
        },
        extendedChecks: {
          en: [
            'Demand documented proof of updated timing chain & tensioner replacement on 1.2, 1.4, and 1.8 TFSI engines (listen closely on cold start).',
            'On 1.8 TFSI (EA888 Gen 2, 2009–2012), verify whether oversized piston rings were fitted — ask directly about oil top-up consumption per 1,000 km.',
            'If equipped with the 7-speed dry DSG (DQ200 on 1.2/1.4/1.8 TFSI), test smooth uphill creep and reverse engagement with zero shudder.',
            'On 2.0 TFSI, inspect the cam-follower (early EA113) or timing tensioner (later EA888), PCV valve, and diverter valve.'
          ],
          de: [
            'Bei 1.2, 1.4 und 1.8 TFSI zwingend Nachweise über erneuerte Steuerkette samt Spanner fordern und Kaltstart genau abhören.',
            'Beim 1.8 TFSI (EA888 Gen 2) nach einem Kolbenring-Umbau fragen — unbehandelte Motoren verbrauchen oft über 0,5–1,0 L Öl auf 1.000 km.',
            'Beim trockenen 7-Gang-DSG (DQ200 in 1.2/1.4/1.8 TFSI) ruckfreies Anrollen am Berg und Rückwärtsgang-Einlegen prüfen.',
            'Beim 2.0 TFSI je nach Baujahr Becherstößel der Hochdruckpumpe (EA113) oder Kettenspanner (EA888) sowie KGE prüfen.'
          ],
          ru: [
            'На 1.2, 1.4 и 1.8 TFSI обязательно требовать документы о замене цепи и натяжителя, а также слушать холодный запуск.',
            'На 1.8 TFSI (EA888 Gen 2) проверить, менялась ли поршневая — без ремонта эти моторы часто расходуют до 0,5–1 л масла на 1 000 км.',
            'С сухой 7-DSG (DQ200 на 1.2/1.4/1.8 TFSI) проверить плавность трогания в подъём и включение задней без вибраций.',
            'На 2.0 TFSI осмотреть толкатель ТНВД (ранний EA113) или натяжитель цепи (поздний EA888), мембрану ВКГ и байпас.'
          ]
        },
        savingsNote: {
          en: 'Lower 6.2–7.8 L/100 km fuel use looks tempting, yet a single unaddressed timing chain (€900–€1,600), DQ200 mechatronic (€1,400), or EA888 ring rebuild (€3,000+) wipes out years of fuel savings.',
          de: '6,2–7,8 L/100 km wirken sparsam, doch eine fällige Steuerkette (900–1.600 €), DQ200-Mechatronik (1.400 €) oder EA888-Überholung (3.000+ €) frisst jede Ersparnis auf.',
          ru: 'Расход 6,2–7,8 л/100 км выглядит выгодно, но ремонт цепи (€900–1 600), мехатроника DQ200 (€1 400) или поршневой EA888 (€3 000+) перекрывает экономию на годы.'
        },
        market: {
          supplyDemand: {
            en: 'Heavily discounted compared to newer A3 8V models; only cars with verified chain/piston fixes fetch strong money.',
            de: 'Deutlich günstiger als der Nachfolger A3 8V; echte Preise erzielen nur Exemplare mit nachgewiesener Ketten- bzw. Kolben-Sanierung.',
            ru: 'Заметно дешевле преемника A3 8V; хорошую цену держат только машины с документально устранёнными болезнями цепи и поршневой.'
          },
          sweetSpot: {
            en: '2011–2012 1.4 TFSI (125 HP, 6-MT) with documented updated timing chain kit and clean history (€5,800–€6,900).',
            de: '2011–2012 1.4 TFSI (125 PS, 6-Gang-Schalter) mit belegtem aktuellem Steuerketten-Satz (5.800–6.900 €).',
            ru: '2011–2012 гг. 1.4 TFSI (125 л.с., 6-МКПП) с документальной заменой обновлённого комплекта ГРМ (€5 800–6 900).'
          },
          outlook3to5yr: {
            en: 'Drops toward €3,400–€4,900 in 3–5 yrs (2.0 TFSI S line holds firmer around €5,500+); maintenance history dictates resale speed.',
            de: 'Sinkt in 3–5 Jahren Richtung 3.400–4.900 € (2.0 TFSI S line stabiler bei 5.500+ €); Rechnungsordner entscheidet über den Verkauf.',
            ru: 'Снизится к €3 400–4 900 за 3–5 лет (2.0 TFSI S line удержится выше €5 500); папка заказ-нарядов критична для продажи.'
          }
        },
        watchoutExtra: {
          en: [
            'Honest EA888 / TFSI alert: early 1.8 TFSI oil-control rings clog badly (heavy oil burn), while 1.2/1.4/1.8/2.0 TFSI timing-chain tensioners can jump teeth if stretched.',
            '7-speed dry-clutch DSG (DQ200) fitted to ≤250 Nm TFSI autos suffers clutch shudder and mechatronic pressure-accumulator cracks — prefer 6-speed manuals or wet 6-DSG (2.0 TFSI).'
          ],
          de: [
            'Klare EA888-/TFSI-Warnung: Frühe 1.8 TFSI verbrauchen wegen zu enger Kolbenringe oft extrem viel Öl; Steuerketten-Spanner der 1.2–2.0 TFSI drohen bei Längung mit Übersprung.',
            'Das trockene 7-Gang-DSG (DQ200 bis 250 Nm) leidet im Stadtverkehr unter Kupplungsrupfen und Mechatronik-Rissen — Handschalter oder nasses 6-DSG (2.0 TFSI) bevorzugen.'
          ],
          ru: [
            'Честное предупреждение по EA888 / TFSI: ранний 1.8 TFSI славится сильным масложором из-за колец, а цепи и натяжители 1.2–2.0 TFSI склонны к растяжению и перескоку.',
            'Сухой 7-DSG (DQ200 на моторах до 250 Н·м) не любит пробки и страдает по износу сцеплений и трещинам плиты мехатроника — надёжнее 6-МКПП или мокрая 6-DSG на 2.0 TFSI.'
          ]
        }
      },
      'tdi-pd': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Split (1.9 vs 2.0 PD)', note: '1.9 TDI (BKC/BXE) is ultra-tough; early 2.0 TDI PD suffers head & oil-pump risks' },
            { source: 'ADAC Pannenstatistik', value: 'Very Good (1.9 TDI)', note: '1.9 TDI runs 400k+ km with belts; 2.0 TDI 170 PD had Siemens piezo recalls' },
            { source: 'WhatCar? Survey', value: '91.8% Reliability', note: 'High mileage lowers average score; mechanical simplicity keeps 1.9 TDI beloved' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Zweigeteilt (1.9 vs. 2.0 PD)', note: '1.9 TDI extrem langlebig; frühe 2.0 TDI PD zeigen Riss- und Ölpumpen-Risiken' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr gut (1.9 TDI)', note: '1.9 TDI schafft 400.000+ km; beim 2.0 TDI 170 PD auf Siemens-Injektor-Rückruf achten' },
            { source: 'WhatCar? Umfrage', value: '91,8 % Zuverlässigkeit', note: 'Hohe Laufleistungen drücken den Schnitt; der 1.9 TDI bleibt ein Dauerläufer-Favorit' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Контраст (1.9 vs 2.0 PD)', note: '1.9 TDI вынослив на огромных пробегах; ранний 2.0 TDI PD имеет слабые места ГБЦ и маслонасоса' },
            { source: 'ADAC Pannenstatistik', value: 'Отлично (1.9 TDI)', note: '1.9 TDI ходит 400+ тыс. км; на 2.0 TDI 170 PD важен отзыв по пьезофорсункам Siemens' },
            { source: 'Рейтинг WhatCar?', value: '91,8% надёжности', note: 'Среднюю оценку снижают большие пробеги и возраст, но простой 1.9 TDI очень ценят' }
          ]
        },
        extendedChecks: {
          en: [
            'On pre-2007 2.0 TDI PD 140 HP (BKD), check coolant reservoir for pressure/loss (porous cylinder heads) and check oil-pump hex drive updates.',
            'On 2.0 TDI PD 170 HP (BMN), verify Siemens PPD piezo-injector recall replacement and clean DPF regeneration.',
            'On 1.9 TDI (especially BXE engine code), check service history for regular oil changes and listen for any bottom-end bearing knock.',
            'Inspect dual-mass flywheel chatter at idle, wet 6-speed DSG 60,000 km oil history, and timing-belt interval.'
          ],
          de: [
            'Beim frühen 2.0 TDI PD 140 PS (BKD vor 2007) Kühlmittelausgleichsbehälter auf Druck/Verlust (Zylinderkopf-Risse) sowie Ölpumpen-Mitnehmer prüfen.',
            'Beim 2.0 TDI PD 170 PS (BMN) Beleg für den Austausch der Siemens-Piezo-Pumpe-Düse-Elemente und freien DPF verlangen.',
            'Beim 1.9 TDI (besonders Motorkennbuchstabe BXE) auf lückenlose Ölwechsel achten und auf ruhigen Kurbeltrieb hören.',
            'Zweimassenschwungrad im Leerlauf abhören, 60.000-km-Ölwechsel des nassen 6-DSG und Zahnriemenalter kontrollieren.'
          ],
          ru: [
            'На 2.0 TDI PD 140 л.с. (BKD до 2007 г.) проверить бачок антифриза на уход жидкости и газы (трещины ГБЦ) и износ шестигранника маслонасоса.',
            'На 2.0 TDI PD 170 л.с. (BMN) убедиться в замене проблемных пьезофорсунок Siemens и живом сажевом фильтре.',
            'На 1.9 TDI (особенно код BXE) проверить частую замену масла и отсутствие стука вкладышей под нагрузкой.',
            'Оценить двухмассовый маховик на холостых, замену масла в мокрой 6-DSG каждые 60 тыс. км и срок ремня ГРМ.'
          ]
        },
        savingsNote: {
          en: '5.1–6.1 L/100 km diesel burn and low buy-in (€5,200–€5,800) are economical, though Euro 4 urban restrictions and higher German diesel tax hurt city buyers.',
          de: '5,1–6,1 L/100 km und günstige Einstiegspreise (5.200–5.800 €) sind sparsam, doch Euro-4-Einstufung und höhere Steuer erschweren den Stadtbetrieb.',
          ru: 'Расход 5,1–6,1 л/100 км и доступная цена (€5 200–5 800) выгодны на трассе, но класс Euro 4 ограничивает въезд в эко-зоны городов.'
        },
        market: {
          supplyDemand: {
            en: 'Aging Euro 4 inventory with 200k+ km common; clean 1.9 TDI manuals still have loyal budget-commuter demand outside city low-emission zones.',
            de: 'Älterer Euro-4-Bestand mit oft über 200.000 km; saubere 1.9 TDI Schalter finden außerhalb von Umweltzonen weiter treue Käufer.',
            ru: 'Пожилой парк Euro 4 с пробегами за 200 тыс. км; живые 1.9 TDI на механике всё ещё востребованы у пригородных водителей.'
          },
          sweetSpot: {
            en: '2007–2009 1.9 TDI (105 HP, BKC/BLS, 5-MT) with documented timing belt and tidy sills under 210,000 km (€4,600–€5,600).',
            de: '2007–2009 1.9 TDI (105 PS, BKC/BLS) mit frischem Zahnriemen und sauberen Schwellern unter 210.000 km (4.600–5.600 €).',
            ru: '2007–2009 гг. 1.9 TDI (105 л.с., МКПП) со свежим ремнём ГРМ и целыми порогами до 210 000 км (€4 600–5 600).'
          },
          outlook3to5yr: {
            en: 'Levels out around €2,800–€3,800 in 3–5 yrs; Euro 4 emissions cap upside, though rugged 1.9 TDI cars retain solid export & utility value.',
            de: 'Pegelt sich in 3–5 Jahren bei 2.800–3.800 € ein — Euro 4 begrenzt den Preis, aber gute 1.9 TDI behalten Export- und Alltagswert.',
            ru: 'Остановится у уровня €2 800–3 800 через 3–5 лет — нормы Euro 4 ограничивают рост, но живучий 1.9 TDI сохраняет спрос.'
          }
        },
        watchoutExtra: {
          en: [
            'Pre-2007 2.0 TDI PD (140 HP) porous cylinder heads and balance-shaft oil-pump hex wear, plus Siemens piezo failures on 170 HP PD.',
            'Euro 4 diesel status (or aftermarket DPF retrofits) restricts entry into many European city centers.'
          ],
          de: [
            'Frühe 2.0 TDI PD (140 PS vor 2007) mit Risiko für Zylinderkopf-Risse und Ölpumpen-Mitnehmer; beim 170 PS PD teure Siemens-Injektoren.',
            'Euro-4-Einstufung schränkt die Zufahrt in zahlreiche europäische Umweltzonen spürbar ein.'
          ],
          ru: [
            'Трещины ГБЦ и износ шестигранника маслонасоса на раннем 2.0 TDI PD 140 л.с., а также ненадёжные форсунки Siemens на 170 PD.',
            'Стандарт Euro 4 ограничивает въезд в низкоэмиссионные зоны многих европейских городов.'
          ]
        }
      },
      'tdi-cr': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 20% (Post-2008 CR)', note: 'Common-Rail 2.0 TDI (140/170 CR) cured older PD head and injector headaches' },
            { source: 'ADAC Pannenstatistik', value: 'Very Dependable', note: '2.0 TDI CR + wet 6-DSG or 6-MT is the strongest 8P diesel; watch 1.6 TDI EGR/injectors' },
            { source: 'WhatCar? Survey', value: '93.9% Reliability', note: 'Smooth refinement and Euro 5 compliance make 2009–2012 CR diesels the 8P benchmark' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 20 % (ab 2008 CR)', note: 'Common-Rail 2.0 TDI (140/170 CR) löste die alten Pumpe-Düse-Probleme souverän' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: '2.0 TDI CR mit 6-Gang oder nassem 6-DSG top; beim 1.6 TDI auf AGR & Injektoren achten' },
            { source: 'WhatCar? Umfrage', value: '93,9 % Zuverlässigkeit', note: 'Ruhiger Lauf und Euro 5 machen späte 2009–2012 CR-Diesel zum besten A3 8P' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-20% (с 2008 CR)', note: 'Дизели Common Rail 2.0 TDI (140/170 CR) полностью избавились от болезней старых насос-форсунок' },
            { source: 'ADAC Pannenstatistik', value: 'Очень надёжно', note: '2.0 TDI CR с 6-МКПП или мокрой 6-DSG — лучший выбор 8P; на 1.6 TDI следить за EGR и форсунками' },
            { source: 'Рейтинг WhatCar?', value: '93,9% надёжности', note: 'Тихий ход и Euro 5 делают поздние версии Common Rail эталоном среди A3 8P' }
          ]
        },
        extendedChecks: {
          en: [
            'On 1.6 TDI (90/105 HP, EA189), test for cold-start knocking injectors and EGR cooler leaks/clogging (expensive under-turbo access).',
            'If equipped with 7-speed dry DSG (on 1.6 TDI 105 HP), verify zero clutch shudder; prefer wet 6-speed DSG (2.0 TDI) with 60,000 km fluid records.',
            'Verify whether the VW EA189 emissions software update was applied (some cars see faster EGR/DPF wear afterward) and check DPF ash load.',
            'Confirm timing-belt replacement (180k–210k km or 7–8 yrs) and check thermostat operation (gauge must hold steady at 90°C).'
          ],
          de: [
            'Beim 1.6 TDI (90/105 PS) beim Kaltstart auf nagelnde Injektoren und auf Fehler bzw. Undichtigkeiten des schwer zugänglichen AGR-Kühlers achten.',
            'Bei 1.6 TDI 105 PS mit trockenem 7-DSG (DQ200) auf Ruckeln achten; beim 2.0 TDI das nasse 6-DSG mit 60.000-km-Ölwechsel bevorzugen.',
            'Status des EA189-Software-Updates sowie aktuelle DPF-Aschebeladung per Diagnose prüfen.',
            'Zahnriemen-Intervall (180–210 Tkm / ca. 7–8 Jahre) und stabiles Erreichen der 90-°C-Kühlmitteltemperatur testen.'
          ],
          ru: [
            'На 1.6 TDI (90/105 л.с.) послушать форсунки на холодную и проверить дорогой в замене модуль клапана и охладителя EGR.',
            'На 1.6 TDI 105 л.с. с сухой 7-DSG проверить плавность старта; на 2.0 TDI с мокрой 6-DSG убедиться в замене масла раз в 60 тыс. км.',
            'Проверить заполнение сажевого фильтра DPF и уточнить наличие дилерского обновления ПО EA189.',
            'Проверить замену ремня ГРМ (180–210 тыс. км или 7–8 лет) и стабильный прогрев двигателя до 90 °C.'
          ]
        },
        savingsNote: {
          en: '4.6–5.7 L/100 km real diesel economy combined with durable 2.0 TDI CR mechanics yields the best balance of pace, thrift, and repair predictability in the 8P range.',
          de: '4,6–5,7 L/100 km Realverbrauch und die ausgereifte 2.0-TDI-CR-Technik bieten das beste Verhältnis aus Durchzug, Sparsamkeit und Kalkulierbarkeit im 8P.',
          ru: 'Реальный расход 4,6–5,7 л/100 км и выносливая конструкция 2.0 TDI CR дают лучший баланс тяги, экономичности и предсказуемости в семействе 8P.'
        },
        market: {
          supplyDemand: {
            en: 'Strongest buyer demand among all A3 8P engines; tidy 2009–2012 2.0 TDI 140 CR Sportback cars sell quickly.',
            de: 'Stärkste Nachfrage aller A3 8P; gepflegte 2009–2012 2.0 TDI 140 CR Sportbacks finden rasch Käufer.',
            ru: 'Самый высокий спрос среди всех A3 8P; ухоженные 2.0 TDI 140 CR Sportback 2009–2012 гг. уходят быстро.'
          },
          sweetSpot: {
            en: '2010–2012 2.0 TDI 140 CR (Euro 5, Ambition, 6-MT or wet 6-DSG) around 130,000–175,000 km (€6,800–€8,200).',
            de: '2010–2012 2.0 TDI 140 CR (Euro 5, Ambition, 6-Gang oder nasses 6-DSG) mit 130.000–175.000 km (6.800–8.200 €).',
            ru: '2010–2012 гг. 2.0 TDI 140 CR (Euro 5, Ambition, 6-МКПП или мокрая 6-DSG) с пробегом 130–175 тыс. км (€6 800–8 200).'
          },
          outlook3to5yr: {
            en: 'Softens gradually toward €4,000–€5,400 in 3–5 yrs; Euro 5 status weighs slightly in big cities, yet private commuter demand remains high.',
            de: 'Sinkt moderat auf ca. 4.000–5.400 € in 3–5 Jahren — Euro 5 drückt in Metropolen etwas, doch Pendler-Nachfrage hält den Preis.',
            ru: 'Плавно снизится до €4 000–5 400 за 3–5 лет — нормы Euro 5 сдерживают цену в мегаполисах, но спрос у пригородных водителей стабилен.'
          }
        },
        watchoutExtra: {
          en: [
            '1.6 TDI EA189 EGR cooler/valve failures and Siemens/Continental injector wear, plus dry 7-DSG (DQ200) clutch risks on 1.6 TDI autos.',
            '2.0 TDI CR dual-mass flywheel wear past 180,000 km and DPF soot accumulation if used mainly for short urban trips.'
          ],
          de: [
            'Beim 1.6 TDI EA189 teure AGR-Kühler- und Injektorschäden sowie beim 1.6 TDI Automatik das trockene 7-DSG (DQ200).',
            'Beim 2.0 TDI CR verschleißen ab 180.000 km Zweimassenschwungrad und bei viel Kurzstrecke der DPF.'
          ],
          ru: [
            'На 1.6 TDI EA189 — дорогостоящая замена блока EGR и капризные форсунки, а на версиях с автоматом — сухая 7-DSG (DQ200).',
            'На 2.0 TDI CR после 180 тыс. км возможен износ двухмассового маховика, а в городе — загрязнение DPF.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (8P)', de: 'EU / DE Ausstattungslinien (8P)', ru: 'Европейские комплектации (8P)' },
      sectionHint: { en: 'Look for post-2005 Singleframe or 2008+ LED-facelift cars with clean soft-touch switchgear', de: 'Empfehlenswert sind Modelle ab Singleframe-Facelift (2005) bzw. LED-Facelift (2008+) mit gepflegtem Innenraum', ru: 'Оптимально искать рестайлинг Singleframe (2005+) или LED-обновление (2008+) с целыми кнопками' },
      faceliftTitle: { en: '2005 Singleframe & 2008 LED Facelift Upgrades', de: '2005 Singleframe & 2008 Facelift-Upgrades', ru: 'Обновления 2005 Singleframe и 2008 Facelift' },
      faceliftKicker: { en: '2005 & 2008 Refreshes', de: 'Facelifts 2005 & 2008', ru: 'Рестайлинги 2005 и 2008' },
      trims: [
        {
          id: 'attraction',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Attraction', de: 'Attraction', ru: 'Attraction' },
          delta: { en: '-€700 – €1,100', de: '-700 – 1.100 €', ru: '-€700 – €1 100' },
          isSweetSpot: false,
          summary: {
            en: 'Entry trim with solid Audi soft-touch cabin plastics, but standard comfort suspension and sparse options.',
            de: 'Basismodell mit solider Softtouch-Verarbeitung, aber Serienfahrwerk und ohne Extras teils schlicht.',
            ru: 'Базовая версия с качественным мягким пластиком, но на стандартной подвеске и со скромными опциями.'
          },
          highlights: {
            en: ['16" wheels & comfort suspension', '4-spoke wheel & standard cloth seats', 'Manual A/C (Climatronic optional)'],
            de: ['16"-Räder & Komfort-Serienfahrwerk', '4-Speichen-Lenkrad & Stoffsitze', 'Manuelle Klima (Climatronic optional)'],
            ru: ['Диски 16" и комфортная подвеска', '4-спицевый руль и тканевый салон', 'Кондиционер (Climatronic опция)']
          }
        },
        {
          id: 'ambiente',
          tierClass: 'tier-3',
          tier: { en: 'Comfort', de: 'Komfort-Linie', ru: 'Комфорт' },
          name: { en: 'Ambiente', de: 'Ambiente', ru: 'Ambiente' },
          delta: { en: '-€200 – €500', de: '-200 – 500 €', ru: '-€200 – €500' },
          isSweetSpot: false,
          summary: {
            en: 'Comfort-focused cruiser adding cruise control, rain/light sensors, interior light pack, and Vavona wood/alu.',
            de: 'Komfort-Linie mit Tempomat, Licht-/Regensensor, Innenlichtpaket, Mittelarmlehne und Alcantara/Komfortsitzen.',
            ru: 'Комфортная версия с круиз-контролем, датчиками света/дождя, пакетом подсветки и подлокотником.'
          },
          highlights: {
            en: ['16" alloys & comfort ride tuning', 'Cruise control & rain/light sensors', 'Ambient light pack & centre armrest'],
            de: ['16"-Alus & komfortable Abstimmung', 'Tempomat & Licht-/Regensensor', 'Lichtpaket & Mittelarmlehne vorn'],
            ru: ['Диски 16" и мягкая подвеска', 'Круиз-контроль и датчики света/дождя', 'Пакет подсветки и подлокотник']
          }
        },
        {
          id: 'ambition',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Ambition', de: 'Ambition', ru: 'Ambition' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'The A3 8P sweet spot — adds heavily bolstered sports seats, 3-spoke leather wheel, 17" alloys, and -15 mm chassis.',
            de: 'Bester 8P-Sweet-Spot: stark ausgeformte Sportsitze, 3-Speichen-Lenkrad, 17"-Alus und -15 mm Sportfahrwerk.',
            ru: 'Оптимальный выбор на вторичке: цепкие спорткресла, 3-спицевый руль, диски 17" и шасси -15 мм.'
          },
          highlights: {
            en: ['Bolstered sports seats & 3-spoke leather wheel', '17" 5-spoke alloys & front fog lights', '15 mm lowered sport suspension'],
            de: ['Sportsitze & 3-Speichen-Sportlenkrad', '17"-Alufelgen & Nebelscheinwerfer', 'Sportfahrwerk (-15 mm)'],
            ru: ['Спортивные сиденья и 3-спицевый руль', 'Диски 17" и противотуманки', 'Спортивная подвеска (-15 мм)']
          }
        },
        {
          id: 's-line',
          tierClass: 'tier-6',
          tier: { en: 'Sport Spec', de: 'Sport-Paket', ru: 'Спорт' },
          name: { en: 'S line', de: 'S line', ru: 'S line' },
          delta: { en: '+€500 – €1,000', de: '+500 – 1.000 €', ru: '+€500 – €1 000' },
          isSweetSpot: false,
          summary: {
            en: 'Sought-after sport package bringing 18" wheels, black headliner, brushed aluminium, and -25 mm S line chassis.',
            de: 'Gesuchte Sport-Linie mit 18"-Rädern, schwarzem Dachhimmel, gebürstetem Alu und -25 mm Sportfahrwerk.',
            ru: 'Востребованный спорт-пакет с дисками 18", чёрным потолком, алюминием и подвеской -25 мм.'
          },
          highlights: {
            en: ['18" S line alloys & perforated steering wheel', 'Half-leather S line seats & black headliner', 'Brushed aluminium inlays & -25 mm chassis'],
            de: ['18"-S-line-Felgen & gelochtes Sportlenkrad', 'Teilleder-S-line-Sitze & schwarzer Himmel', 'Alu-Dekore & S-line-Sportfahrwerk (-25 mm)'],
            ru: ['Диски 18" и перфорированный руль', 'Комбинированный салон и чёрный потолок', 'Алюминий в салоне и шасси -25 мм']
          }
        },
        {
          id: 's-line-plus',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Top-Ausstattung', ru: 'Флагман' },
          name: { en: 'S line Plus / Exclusive', de: 'S line Plus / Exclusive', ru: 'S line Plus / Exclusive' },
          delta: { en: '+€900 – €1,600', de: '+900 – 1.600 €', ru: '+€900 – €1 600' },
          isSweetSpot: false,
          summary: {
            en: 'Full-loaded late flagship combining S line exterior aero, Bi-Xenon + LED DRLs, Bose audio, and RNS-E nav.',
            de: 'Vollausgestattetes Topmodell mit S-line-Exterieur, Bi-Xenon + LED-Tagfahrlicht, Bose-Sound und RNS-E.',
            ru: 'Максимальная сборка: внешний обвес S line, биксенон с LED ДХО, звук Bose и навигация RNS-E.'
          },
          highlights: {
            en: ['S line exterior aero bumpers & roof spoiler', 'Bi-Xenon + LED DRLs (2008+ facelift)', 'Bose sound, heated seats & RNS-E navigation'],
            de: ['S-line-Exterieurpaket & Dachkantenspoiler', 'Bi-Xenon + LED-Tagfahrlicht (ab 2008)', 'Bose-Sound, Sitzheizung & RNS-E Navi'],
            ru: ['Внешний обвес S line и спойлер', 'Биксенон + LED ДХО (с 2008 г.)', 'Звук Bose, подогрев и навигация RNS-E']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Sports Front Seats & 3-Spoke Wheel', de: 'Sportsitze vorn & 3-Speichen-Lenkrad', ru: 'Спорткресла и 3-спицевый руль' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Climate Control (Climatronic)', de: '2-Zonen-Klimaautomatik (Climatronic)', ru: '2-зонный климат (Climatronic)' }, vals: ['opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: '17" / 18" Alloy Wheels', de: '17"- / 18"-Leichtmetallfelgen', ru: 'Литые диски 17" / 18"' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Cruise Control & Light/Rain Sensors', de: 'Tempomat & Licht-/Regensensor', ru: 'Круиз и датчики света/дождя' }, vals: ['no', 'std', 'opt', 'opt', 'std'] },
        { feature: { en: 'Bi-Xenon Headlights + LED DRLs (2008+)', de: 'Bi-Xenon + LED-Tagfahrlicht (ab 2008)', ru: 'Биксенон + LED ДХО (с 2008 г.)' }, vals: ['no', 'opt', 'opt', 'opt', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['opt', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Sports Suspension (-15 / -25 mm)', de: 'Sportfahrwerk (-15 / -25 mm)', ru: 'Спортивная подвеска (-15 / -25 мм)' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'RNS-E Navigation & Bose Sound', de: 'RNS-E Navigation & Bose-Soundsystem', ru: 'Навигация RNS-E и звук Bose' }, vals: ['no', 'opt', 'opt', 'opt', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Benchmark mid-2000s soft-touch dashboard plastics and solid rotary climate dials, though soft-touch paint on window/radio buttons often peels.',
          'Sportback 5-door adds welcome rear headroom over the 3-door, yet the tall center tunnel and 370 L boot (302 L on Quattro) keep family space modest.',
          'Early Concert/Chorus radios lack native Bluetooth music streaming — verify AUX/AMI retrofit or budget a discreet aftermarket head-unit.'
        ],
        de: [
          'Sehr hochwertiges Soft-Touch-Armaturenbrett und satt rastende Drehregler, doch die Softlack-Beschichtung an Fensterheber- und Radiotasten blättert oft ab.',
          'Der 5-türige Sportback bietet spürbar mehr Kopffreiheit als der 3-Türer; 370 Liter Kofferraum (302 Liter beim Quattro) bleiben kompakt.',
          'Ältere Concert-/Chorus-Radios haben meist kein Bluetooth-Musikstreaming — AUX/AMI-Anschluss prüfen oder Nachrüstlösung einplanen.'
        ],
        ru: [
          'Эталонный для своего времени мягкий пластик панели и чёткие шайбы климата, однако покрытие софт-тач на кнопках часто облезает.',
          '5-дверный Sportback удобнее 3-дверки по высоте сзади, но высокий тоннель и багажник 370 л (302 л у Quattro) скромны для большой семьи.',
          'Штатные магнитолы Concert/Chorus часто не поддерживают потоковый Bluetooth — при покупке стоит проверить наличие AUX или заложить адаптер.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: 'Petrol 8P cabins range from simple 5-speed manuals (1.6 MPI) and 6-speed manuals (1.4/1.8/2.0 TFSI) to S tronic paddles; 2.0 TFSI pairs with the tougher wet 6-speed DSG, whereas 1.2/1.4/1.8 TFSI automatics use the dry 7-speed DQ200.',
          de: 'Benziner im A3 8P fahren mit 5-Gang (1.6 MPI), 6-Gang-Schalter oder S tronic mit Schaltwippen; der 2.0 TFSI nutzt das nasse 6-Gang-DSG, während 1.2/1.4/1.8 TFSI das trockene 7-Gang-DQ200 verwenden.',
          ru: 'Бензиновые A3 8P оснащались 5-МКПП (1.6 MPI), 6-МКПП или S tronic с лепестками; на 2.0 TFSI стоит крепкая мокрая 6-DSG, тогда как на 1.2/1.4/1.8 TFSI — сухая 7-DSG (DQ200).'
        },
        diesel: {
          en: 'Diesel 8P models feel notably quieter once switched from Pumpe-Düse (2003–2008) to Common-Rail (2008+); 2.0 TDI automatics feature the robust wet 6-speed DSG, while 1.6 TDI 105 HP automatics use the dry 7-speed DQ200.',
          de: 'Diesel im A3 8P laufen ab Umstellung auf Common-Rail (2008+) deutlich kultivierter als die älteren Pumpe-Düse-Motoren; 2.0 TDI Automatik nutzt das robuste nasse 6-DSG, der 1.6 TDI 105 PS das trockene 7-DSG.',
          ru: 'Дизельные 8P стали заметно тише после перехода с насос-форсунок (2003–2008) на Common Rail (с 2008 г.); 2.0 TDI с автоматом получил выносливую мокрую 6-DSG, а 1.6 TDI 105 — сухую 7-DSG.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2005 Singleframe refresh standardized the full-height Audi grille across 3-door and Sportback models and improved steering-wheel ergonomics.',
          '2008 major facelift brought swept-back headlights with optional LED daytime running lights, restyled bumpers, and revised tail lamps.',
          '2008+ cabins introduced chrome-trimmed air vents, higher-contrast white instrument backlighting, and updated RNS-E navigation with SDHC support.',
          '2008+ mechanical shift replaced noisy 2.0 TDI Pumpe-Düse diesels with far smoother, quieter Euro 5 Common-Rail units.'
        ],
        de: [
          'Das Singleframe-Facelift 2005 brachte den großen trapezförmigen Kühlergrill für alle Karosserien und das modernisierte Lenkraddesign.',
          'Das große Facelift 2008 ergänzte markante Scheinwerfer mit optionalem LED-Tagfahrlicht, neue Stoßfänger und überarbeitete Rückleuchten.',
          'Ab 2008 im Innenraum: verchromte Lüftungsdüsen, klare weiße Instrumentenbeleuchtung sowie RNS-E mit hochauflösendem Display.',
          'Technisch wichtigster Sprung 2008: Wechsel von ruppigen Pumpe-Düse-Dieseln auf ruhige, kultivierte Euro-5-Common-Rail-Aggregate.'
        ],
        ru: [
          'Обновление 2005 года принесло фирменную решётку Singleframe для 3-дверных и Sportback версий и более удобный руль.',
          'Крупный рестайлинг 2008 года изменил фары (добавив опциональные светодиодные ДХО), бамперы и задние фонари.',
          'В салоне с 2008 года появились хромированные дефлекторы, чёткая белая подсветка приборов и обновлённая навигация RNS-E.',
          'Главный технический апгрейд 2008 года — переход с шумных дизелей PD на тихие и тяговитые моторы Common Rail Euro 5.'
        ]
      }
    }
  }
});