// AutoDuel Vehicle Data — toyota-rav4-xa30
registerAutoDuelVehicle({
  roster: {
    id: 'toyota-rav4-xa30',
    number: '10',
    carType: 'suv',
    gridOrder: 10,
    gridLabel: 'Toyota RAV4',
    yearMake: '2006-2013 TOYOTA',
    shortTitle: 'RAV4 (XA30)',
    fullName: '2006-2013 Toyota RAV4 (XA30)',
    rarityClass: 'rarity-common',
    drivetrain: 'AWD',
    image: 'assets/toyota-rav4-xa30.webp',
    defaultEngineId: '2.0-valvematic',
    sharedBuyerFit: {
      cards: {
        rav4CargoSpace: {
          en: 'You haul family gear & winter luggage: The 586 L boot (1,752 L folded), sliding rear bench, and deep underfloor bin swallow bulky loads easily.',
          de: 'Du transportierst viel Familiengepäck: 586 L Kofferraum (max. 1.752 L), Schieberückbank und tiefes Unterbodenfach schlucken enorm viel.',
          ru: 'Ты возишь много багажа: Отсек на 586 л (до 1 752 л), сдвижной диван и глубокое подполье вмещают всё нужное.'
        },
        rav4WinterAwd: {
          en: 'You drive in snow, mud, or steep winter hills: 4WD Lock up to 40 km/h and high ground clearance keep traction confident.',
          de: 'Du fährst bei Schnee, Matsch oder Steigungen: 4WD-Lock bis 40 km/h und Bodenfreiheit bieten sichere Winter-Traktion.',
          ru: 'Ты ездишь по снегу и просёлкам: Блокировка 4WD Lock до 40 km/ч и клиренс дают уверенность зимой.'
        },
        rav4ValvematicReliable: {
          en: 'You want bulletproof simple reliability: Port injection, timing chain, and zero turbo/DPF make short winter trips stress-free.',
          de: 'Du willst unverwüstliche Technik: Saugrohreinspritzung, Steuerkette und kein Turbo/DPF verzeihen auch kalte Kurzstrecken.',
          ru: 'Тебе нужна неубиваемая простая техника: Распределённый впрыск и цепь ГРМ не боятся зимних коротких поездок.'
        },
        rav4TowingMuscle: {
          en: 'You tow trailers or caravans: Up to 2,000 kg braked towing capacity and strong torque handle heavy loads cleanly.',
          de: 'Du ziehst Anhänger oder Wohnwagen: Bis zu 2.000 kg Anhängelast und kräftiges Drehmoment meistern schwere Lasten souverän.',
          ru: 'Ты таскаешь прицепы: Допустимая тяга до 2 000 кг и уверенный момент справляются с нагрузкой.'
        },
        rav4SideTailgate: {
          en: 'You parallel park in tight city spaces: The side-hinged rear tailgate swings wide toward the curb and needs clear room behind.',
          de: 'Du parkst oft eng längs zur Straße: Die seitlich öffnende Hecktür braucht beim Ausladen viel Platz nach hinten.',
          ru: 'Ты часто паркуешься впритык: Распашная пятая дверь требует свободного места сзади для открытия.'
        },
        rav4HardPlastics: {
          en: 'You want plush soft-touch luxury: Utilitarian hard plastics and firm SUV ride prioritize ruggedness over refinement.',
          de: 'Du erwartest edlen Soft-Touch-Innenraum: Nüchternes Hartplastik und straffe SUV-Federung setzen auf Robustheit statt Luxus.',
          ru: 'Тебе нужен мягкий премиальный салон: Утилитарный жёсткий пластик рассчитан на практичность, а не на лоск.'
        },
        rav4PetrolThirst: {
          en: 'You want sub-7 L/100km fuel bills: Pushing an AWD SUV at motorway speeds brings 8.5–10 L/100km real consumption.',
          de: 'Du erwartest unter 7 L/100km Verbrauch: Allrad und SUV-Stirnfläche sorgen bei Autobahntempo für 8,5–10 L/100km.',
          ru: 'Ты ждёшь низкого расхода топлива: Полный привод и высокий кузов дают 8,5–10 л/100 км в реальной езде.'
        },
        rav4ModestHighwayPull: {
          en: 'You want effortless low-rev overtaking: Non-turbo 2.0L torque needs higher revs on steep climbs or when towing.',
          de: 'Du willst mühelosen Durchzug am Berg: Ohne Turbo brauchen die 2.0L-Saugmotoren bei Steigungen spürbar mehr Drehzahl.',
          ru: 'Тебе нужна лёгкая тяга на подъёмах: Без турбины 2,0-литровый мотор приходится крутить при обгонах и загрузке.'
        },
        rav4DieselUpkeep: {
          en: 'You want minimal SUV wear-part bills: Heavy AWD clutch/flywheel, 4WD tyres, and diesel servicing cost noticeably more than the 2.0L.',
          de: 'Du willst minimale SUV-Unterhaltskosten: Kräftige Kupplung/ZMS, Allrad-Reifen und Diesel-Wartung kosten mehr als beim 2.0L.',
          ru: 'Ты хочешь минимальных трат на содержание: Тяжёлое сцепление/маховик, полный привод и ТО дизеля дороже версии 2.0 л.'
        },
        rav4136HeadRisk: {
          en: 'You want zero head-gasket worries: Early 2006–2008 136 HP 2.2 diesels can suffer head-gasket coolant leaks and carbon-clogged EGR.',
          de: 'Du willst keinerlei Kopfdichtungs-Risiko: Frühe 136-PS-2.2-Diesel (2006–2008) neigen zu Kopfdichtungs-Schäden und verkokten AGR-Ventilen.',
          ru: 'Ты не хочешь рисковать прокладкой ГБЦ: Ранний 2.2 (136 л.с., 2006–2008) склонен к пробою прокладки и нагару в ЕГР.'
        },
        rav4DcatRisk: {
          en: 'You want simple diesel emissions tech: The 177 HP D-CAT adds a complex 5th-injector DPNR catalyst alongside head-gasket sensitivity.',
          de: 'Du willst unkomplizierte Abgastechnik: Der 177-PS-D-CAT hat einen empfindlichen 5.-Injektor-DPNR-Kat plus Kopfdichtungs-Risiko.',
          ru: 'Тебе нужна простая топливная система: Версия D-CAT (177 л.с.) оснащена капризной 5-й форсункой DPNR и требует контроля ГБЦ.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol-awd': {
        summary: {
          en: 'One of the most dependable compact family SUVs — ideal for winter traction and short trips if you accept 8.5–10 L/100km fuel use.',
          de: 'Eines der zuverlässigsten Kompakt-SUVs — ideal für Winter und Kurzstrecken, wenn 8,5–10 L/100km Verbrauch für dich passen.',
          ru: 'Один из самых надёжных семейных кроссоверов — идеален для зимы и города, если устраивает расход 8,5–10 л/100 км.'
        },
        ideal: ['rav4ValvematicReliable', 'rav4CargoSpace', 'rav4WinterAwd', 'globalPetrolCityZones'],
        skip: ['rav4PetrolThirst', 'rav4ModestHighwayPull', 'rav4SideTailgate', 'rav4HardPlastics']
      },
      'diesel-awd': {
        summary: {
          en: 'A spacious, high-towing winter SUV for highway miles — pick the updated 2009+ 150 HP model over early 136/177 HP units.',
          de: 'Ein geräumiges Zug- und Winter-SUV für Langstrecken — greife klar zum überarbeiteten 150-PS-Facelift ab 2009.',
          ru: 'Вместительный тяговитый кроссовер для трассы и зимы — лучше выбирать обновлённую версию 150 л.с. (с 2009 г.).'
        },
        ideal: ['rav4TowingMuscle', 'rav4CargoSpace', 'rav4WinterAwd', 'globalDieselLongRange'],
        skip: ['globalDieselShortTripRisk', 'rav4136HeadRisk', 'rav4SideTailgate', 'rav4HardPlastics']
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Tough SUV Axles & Bushings — Check Subframe & Mounts',
          strengths: [
            'Tough SUV Axles & Bushings keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Check rear subframe mounts, trailing arms, and side-swing tailgate hinges for wear or rust.',
            'Check Subframe & Mounts.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Robuste SUV-Achsen & Lager — Achsträger & Auspuffhalter',
          strengths: [
            'Robuste SUV-Achsen & Lager hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Hinteren Achsträger, Längslenker und Scharniere der seitlichen Hecktür auf Rost/Spiel prüfen.',
            'Achsträger & Auspuffhalter.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Выносливая подвеска RAV4 — Проверка подрамника и крепежа',
          strengths: [
            'Выносливая подвеска RAV4 надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Осмотрите задний подрамник, рычаги и петли распашной пятой двери.',
            'Проверка подрамника и крепежа.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Logical Oversized Controls',
          strengths: [
            'Logical Oversized Controls ensures intuitive daily ergonomics.',
            'Functional layout keeps essential controls easy to reach while driving.'
          ],
          watchouts: [
            'Utilitarian hard dashboard plastics prioritize durability over luxury soft-touch feel.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Große griffige Drehregler',
          strengths: [
            'Große griffige Drehregler sorgt für eine intuitive Bedienung im Alltag.',
            'Übersichtliche Anordnung hält alle wichtigen Bedienelemente griffbereit.'
          ],
          watchouts: [
            'Nüchternes Hartplastik-Cockpit setzt klar auf Robustheit statt Luxus-Anmutung.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Крупные удобные регуляторы',
          strengths: [
            'Крупные удобные регуляторы обеспечивает удобную и понятную эргономику на каждый день.',
            'Функциональная компоновка позволяет легко дотянуться до всех органов управления.'
          ],
          watchouts: [
            'Жёсткий утилитарный пластик рассчитан на долговечность, а не на премиум-лоск.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: 'Tight 10.2 m SUV Turn',
          strengths: [
            'Tight 10.2 m SUV Turn makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Tight 10.2 m SUV turn and tall seating, though side-hinged tailgate needs rear curb space.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: 'Nur 10,2 m Wendekreis',
          strengths: [
            'Nur 10,2 m Wendekreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Handlicher 10,2-m-Wendekreis; seitlich öffnende Hecktür braucht jedoch Platz nach hinten.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Разворот 10,2 м',
          strengths: [
            'Разворот 10,2 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Удобный разворот 10,2 м, но распашной задней двери нужно место при парковке у стен.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 4★ (2006) — 7 Airbags + VSC+ Stability',
          strengths: [
            'Euro NCAP 4★ (2006) provides solid passive crash protection for its class and era.',
            '7 Airbags + VSC+ Stability standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 4★ (2006) — 7 Airbags + VSC+ ESP',
          strengths: [
            'Euro NCAP 4★ (2006) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '7 Airbags + VSC+ ESP serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 4★ (2006) — 7 подушек + VSC+ (ESP)',
          strengths: [
            'Euro NCAP 4★ (2006) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '7 подушек + VSC+ (ESP) входят в оснащение большинства версий.'
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
          headline: 'Sliding & Reclining Rear Seats',
          strengths: [
            'Sliding & Reclining Rear Seats keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['High Step-In Door Access.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Verschieb- & neigbarer Fond',
          strengths: [
            'Verschieb- & neigbarer Fond sorgt für guten Reisekomfort auf den Sitzplätzen.',
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
          headline: 'Сдвижные и наклонные спинки',
          strengths: [
            'Сдвижные и наклонные спинки обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Удобный высокий вход в салон.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '586L Boot (1,752L Max)',
          strengths: [
            'Practical 586L boot (1,752L max) with deep underfloor bin and sliding rear bench.',
            'Deep Underfloor Storage improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '586L Kofferraum (1.752L Max)',
          strengths: [
            'Praktischer Nutzwert: 586 L Kofferraum (max. 1.752 L) samt tiefem Unterbodenfach und Schieberückbank.',
            'Großes Unterbodenfach erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 586–1 752 л',
          strengths: [
            'Практичный объём: багажник 586 л (до 1 752 л) с глубоким подпольем и сдвижным диваном.',
            'Глубокий подпол багажника добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: '4WD Lock Snow & Mud Traction',
          strengths: [
            '4WD Lock traction up to 40 km/h and up to 2,000 kg towing handle winter roads effortlessly.',
            'Predictable SUV Body Roll.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: '4WD-Lock Winter-Traktion',
          strengths: [
            '4WD-Lock-Traktion bis 40 km/h und bis zu 2.000 kg Anhängelast meistern Schnee mühelos.',
            'Vorhersehbare Seitenneigung.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Блокировка 4WD зимой и в грязи',
          strengths: [
            'Блокировка 4WD Lock до 40 км/ч и тяга до 2 000 кг уверенно работают зимой.',
            'Предсказуемые крены SUV.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 37.5 m — Average Pedal Feel • SUV Weight',
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
          headline: '100–0 km/h: 37,5 m — Mittlerer Druckpunkt • SUV-Masse',
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
          headline: '100–0 км/ч: 37,5 м — Средняя информативность • Масса SUV',
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
          headline: '540 kg Payload • 750 / 2,000 kg Towing',
          strengths: ['540 kg Payload and 750 / 2,000 kg Towing handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '540 kg Zuladung • 750 / 2.000 kg Anhängelast',
          strengths: [
            '540 kg Zuladung und 750 / 2.000 kg Anhängelast bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 540 кг • Прицеп: 750 / 2 000 кг',
          strengths: ['Нагрузка 540 кг и Прицеп: 750 / 2 000 кг закрывают повседневные задачи по загрузке.'],
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
          headline: 'Cult Used SUV Demand',
          strengths: [
            'Cult Used SUV Demand helps keep used demand healthy.',
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
          headline: 'Огромный спрос на б/у',
          strengths: [
            'Огромный спрос на б/у поддерживает стабильный спрос на вторичном рынке.',
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
      'petrol-cvt': {
        transmissionDriveline: {
          en: {
            headline: '6-MT / Multidrive S CVT + AWD — Service CVT Fluid & AWD Lock',
            strengths: [
              '6-MT / Multidrive S CVT + AWD matches this powertrain well for everyday driving.',
              'Crisp shift feel and well-matched ratios keep everyday driving composed and predictable.'
            ],
            watchouts: [
              'CVT fluid must be changed every 40,000–60,000 km; old fluid causes belt slip and whine.',
              'Listen for bearing whine or driveline shudder from the AWD system on tight full-lock turns.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '6-Gang / CVT + Allrad-Lock — CVT-Öl & Hinterachskupplung',
            strengths: [
              '6-Gang / CVT + Allrad-Lock passt gut zur Motorcharakteristik im Alltag.',
              'CVT-Öl & Hinterachskupplung.'
            ],
            watchouts: [
              'CVT-Öl alle 40.000–60.000 km wechseln — altes Öl führt zu Schubgliederband-Rutschen und Heulen.',
              'Auf Lagerheulen oder Verspannen des Allradantriebs bei voll eingeschlagener Lenkung achten.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '6-МКПП / Вариатор + AWD — ТО вариатора и муфты AWD',
            strengths: [
              '6-МКПП / Вариатор + AWD хорошо сочетается с данным двигателем в повседневной езде.',
              'ТО вариатора и муфты AWD.'
            ],
            watchouts: [
              'Масло в вариаторе менять каждые 40 000–60 000 км — старое масло ведёт к проскальзыванию ремня и вою.',
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
            headline: 'Dependable Toyota Relays',
            strengths: [
              'Dependable Toyota Relays keeps electrical diagnostics straightforward.',
              'Clean Simple Facelift Loom.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Zuverlässige Toyota-Relais',
            strengths: [
              'Zuverlässige Toyota-Relais sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Klares Facelift-Bordnetz.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжные реле Toyota',
            strengths: [
              'Надёжные реле Toyota упрощает диагностику и обслуживание электрооборудования.',
              'Простая штатная проводка.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Comfortable Upright Posture',
            strengths: [
              'Comfortable Upright Posture delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              'Firm Short-Bump SUV Bounce.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Bequeme hohe Sitzposition',
            strengths: [
              'Bequeme hohe Sitzposition sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Poltrig auf kurzen Stößen.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Удобная высокая посадка',
            strengths: [
              'Удобная высокая посадка обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'Жёстче на мелких неровностях.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'No Turbo / DPF Bills — 4WD Tyres & Routine Oils',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['4WD Tyres & Routine Oils.', 'No Turbo / DPF Bills.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Keine Turbo-/DPF-Reparaturen — SUV-Reifen & Differentialöl',
            strengths: [
              'Keine Turbo-/DPF-Reparaturen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['SUV-Reifen & Differentialöl.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Нет расходов на турбину и DPF — Шины SUV и масло в трансмиссии',
            strengths: [
              'Нет расходов на турбину и DPF помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Шины SUV и масло в трансмиссии.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: '5-MT / Indestructible 4-AT — Simple Electromagnetic AWD',
            strengths: [
              '5-MT / Indestructible 4-AT matches this powertrain well for everyday driving.',
              'Simple Electromagnetic AWD.'
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
            headline: '5-Gang / Unzerstörbare 4-AT — Einfache Allrad-Magnetkupplung',
            strengths: [
              '5-Gang / Unzerstörbare 4-AT passt gut zur Motorcharakteristik im Alltag.',
              'Einfache Allrad-Magnetkupplung.'
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
            headline: '5-МКПП / Неубиваемый 4-АКПП — Простая электромуфта привода',
            strengths: [
              '5-МКПП / Неубиваемый 4-АКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Простая электромуфта привода.'
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
            headline: 'Minimal Early Sensor Setup',
            strengths: [
              'Minimal Early Sensor Setup keeps electrical diagnostics straightforward.',
              'Proven Japanese Wiring.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Minimale frühe Sensorik',
            strengths: [
              'Minimale frühe Sensorik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Robuste Japan-Elektrik.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Минимум ранних датчиков',
            strengths: [
              'Минимум ранних датчиков упрощает диагностику и обслуживание электрооборудования.',
              'Надёжная японская электрика.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Comfortable Upright Posture',
            strengths: [
              'Comfortable Upright Posture delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              'Firm Short-Bump SUV Bounce.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Bequeme hohe Sitzposition',
            strengths: [
              'Bequeme hohe Sitzposition sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Poltrig auf kurzen Stößen.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Удобная высокая посадка',
            strengths: [
              'Удобная высокая посадка обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'Жёстче на мелких неровностях.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Very Simple 4-AT / 5-MT Upkeep — Affordable Japanese Parts',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Affordable Japanese Parts.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Very Simple 4-AT / 5-MT Upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Simpler 4-AT-/5-MT-Service — Günstige Japan-Ersatzteile',
            strengths: [
              'Simpler 4-AT-/5-MT-Service hält die planbaren jährlichen Wartungskosten im Rahmen.',
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
            headline: 'Простое ТО коробки и мотора — Доступные запчасти Toyota',
            strengths: [
              'Простое ТО коробки и мотора помогает держать ежегодные затраты на ТО под контролем.',
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
            headline: 'Sturdy 6-MT + AWD Lock — 310 Nm Clutch & DMF Watch',
            strengths: [
              'Sturdy 6-MT + AWD Lock matches this powertrain well for everyday driving.',
              'Crisp shift feel and well-matched ratios keep everyday driving composed and predictable.'
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
            headline: 'Robustes 6-Gang + Allrad — Kupplung & ZMS beachten',
            strengths: [
              'Robustes 6-Gang + Allrad passt gut zur Motorcharakteristik im Alltag.',
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.'
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
            headline: 'Прочная 6-МКПП + AWD — Контроль сцепления и маховика',
            strengths: [
              'Прочная 6-МКПП + AWD хорошо сочетается с данным двигателем в повседневной езде.',
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
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
            headline: 'Simpler Solenoid Controls',
            strengths: [
              'Simpler Solenoid Controls keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Watch Alternator At High Km.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Einfache Magnetventil-ECU',
            strengths: [
              'Einfache Magnetventil-ECU sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Lichtmaschine bei hoher Laufleistung.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Простые электромагнитные цепи',
            strengths: [
              'Простые электромагнитные цепи упрощает диагностику и обслуживание электрооборудования.',
              'Ресурс генератора на пробеге.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Comfortable Upright Posture',
            strengths: [
              'Comfortable Upright Posture delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              'Firm Short-Bump SUV Bounce.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Bequeme hohe Sitzposition',
            strengths: [
              'Bequeme hohe Sitzposition sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Poltrig auf kurzen Stößen.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Удобная высокая посадка',
            strengths: [
              'Удобная высокая посадка обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'Жёстче на мелких неровностях.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheaper Solenoid Injectors — Watch Head Gasket & DMF Cost',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Watch Head Gasket & DMF Cost.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstigere Magnet-Injektoren — Kopfdichtung & ZMS beachten',
            strengths: [
              'Günstigere Magnet-Injektoren hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Kopfdichtung & ZMS beachten.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Более дешёвые форсунки — Риск прокладки ГБЦ и маховика',
            strengths: [
              'Более дешёвые форсунки помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Риск прокладки ГБЦ и маховика.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: '6-MT / Proven Aisin 6-AT — 6-AT Spares Dual-Mass Clutch',
            strengths: [
              '6-MT / Proven Aisin 6-AT matches this powertrain well for everyday driving.',
              '6-AT Spares Dual-Mass Clutch.'
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
            headline: '6-Gang / Aisin 6-Automatik — 6-AT schont ZMS & Kupplung',
            strengths: [
              '6-Gang / Aisin 6-Automatik passt gut zur Motorcharakteristik im Alltag.',
              '6-AT schont ZMS & Kupplung.'
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
            headline: '6-МКПП / Автомат Aisin 6 — Автомат бережёт сцепление и маховик',
            strengths: [
              '6-МКПП / Автомат Aisin 6 хорошо сочетается с данным двигателем в повседневной езде.',
              'Автомат бережёт сцепление и маховик.'
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
            headline: 'Updated Euro 5 Diesel ECU',
            strengths: [
              'Updated Euro 5 Diesel ECU keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check DPF Pressure Sensors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Aktualisierte Euro-5-ECU',
            strengths: [
              'Aktualisierte Euro-5-ECU sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
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
            headline: 'Обновлённый ЭБУ Euro 5',
            strengths: [
              'Обновлённый ЭБУ Euro 5 упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Датчики давления сажевого.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Comfortable Upright Posture',
            strengths: [
              'Comfortable Upright Posture delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              'Firm Short-Bump SUV Bounce.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Bequeme hohe Sitzposition',
            strengths: [
              'Bequeme hohe Sitzposition sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Poltrig auf kurzen Stößen.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Удобная высокая посадка',
            strengths: [
              'Удобная высокая посадка обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'Жёстче на мелких неровностях.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Revised Facelift Block — High DPF, Clutch & SUV Tyre Cost',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['High DPF, Clutch & SUV Tyre Cost.', 'Revised Facelift Block.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Überarbeiteter Facelift-Block — Teurer DPF-, ZMS- & Reifenservice',
            strengths: [
              'Überarbeiteter Facelift-Block hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teurer DPF-, ZMS- & Reifenservice.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Доработанный блок рестайлинга — Дорогие DPF, маховик и шины SUV',
            strengths: [
              'Доработанный блок рестайлинга помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогие DPF, маховик и шины SUV.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspDoubleWishbone',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Firm-Composed SUV', de: 'Straff-Komfortabel SUV', ru: 'Упругая / Собранная SUV' },
      highwayNoise: { en: '~71 dB · Moderate', de: '~71 dB · Mittel', ru: '~71 дБ · Умеренно' },
      cabinMaterials: { en: 'Hard-Wearing Utility', de: 'Robuster Nutz-Mix', ru: 'Износостойкий пластик' },
      controls: '@physButtons',
      turningCircle: '11.0 m',
      visibility: { en: 'High Upright · Clear', de: 'Hoch aufrecht · Sehr gut', ru: 'Высокая посадка · Отлично' },
      euroNcap: '★★★★☆ (2006)',
      safetyTech: { en: '✓ VSC+ · ✓ Hill-Start Assist', de: '✓ VSC+ · ✓ Berganfahrhilfe', ru: '✓ VSC+ · ✓ Помощь в горку' },
      rearRoom: { en: 'Generous · Sliding Bench', de: 'Großzügig · Verschiebbar', ru: 'Просторно · Сдвижной ряд' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Doors', de: '✓ 2× ISOFIX · Große Türen', ru: '✓ 2× ISOFIX · Широкий проём' },
      bootVolume: '586 L / 1,469 L',
      seatUtility: { en: '✓ Easy-Flat + Deep Well', de: '✓ Easy-Flat + Tiefes Fach', ru: '✓ Easy-Flat + глубокая ниша' },
      payloadRoof: '540 kg · 75 kg',
      driveline: '@awdOnDemand',
      chassisFeel: { en: 'Composed · Tight Turn-In', de: 'Stabil · Handlich', ru: 'Собранное · Манёвренный' },
      tractionDiff: { en: 'AWD + Lock Button · VSC', de: 'Allrad + Lock-Taste · VSC', ru: 'Полный + Lock · VSC' },
      braking1000: '~37.8 m',
      brakeSetup: '@discs4',
      valueRetention: '@retVeryHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle', driveline: { specs: [{ k: 'drivelineArch', v: { en: 'Active Torque Control AWD (Electromagnetic Coupling + Lock)', de: 'Aktiver Allradantrieb (Elektromagnetkupplung + Lock)', ru: 'Подключаемый полный привод (электромуфта + Lock)' } }, { k: 'transferCase', v: { en: 'Front Transfer Case + Rear Differential (Requires Oil Service)', de: 'Verteilergetriebe + Hinterachsdiff (Ölwechsel nötig)', ru: 'Раздатка + задний дифференциал (требуют замены масла)' } }], note: { en: 'Reliable electromagnetic AWD with a 50:50 Lock button up to 40 km/h; refresh transfer and rear diff oil every 60,000 km.', de: 'Zuverlässiger Allrad mit 50:50-Sperrtaste bis 40 km/h; Verteiler- und Hinterachsöl alle 60.000 km wechseln.', ru: 'Надёжный полный привод с блокировкой Lock до 40 км/ч; меняйте масло в раздатке и редукторе каждые 60 000 км.' } } },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspDoubleWishbone' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Taut SUV Springs · Independent Double-Wishbone Rear', de: 'Straffe SUV-Abstimmung · Doppelquerlenker hinten', ru: 'Упругая подвеска SUV · Двухрычажка сзади' } },
            { k: 'seatSupport', v: { en: 'Upright Touring Seating · Good Thigh Support', de: 'Aufrechte Sitzposition · Guter Halt', ru: 'Высокая посадка · Удобная поддержка' } }
          ],
          note: { en: 'Slightly firmer than a CR-V over sharp city potholes, but stays planted and controlled on winding country roads.', de: 'Etwas straffer als ein CR-V auf harten Stadtfugen, dafür sehr stabil auf Landstraßen.', ru: 'Чуть жёстче CR-V на острых стыках, зато собраннее на трассе и в поворотах.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~71 dB(A) at 130 km/h', de: '~71 dB(A) bei 130 km/h', ru: '~71 дБ(А) при 130 км/ч' } },
            { k: 'acousticGlass', v: { en: 'Standard SUV Glazing · Noticeable Mirror Wind Above 120 km/h', de: 'Standard-Verglasung · Windgeräusche ab 120 km/h', ru: 'Обычные стёкла · Шум ветра выше 120 км/ч' } }
          ],
          note: { en: 'Comfortable up to 120 km/h; upright SUV shape and taller 17-inch tyres add wind and tyre hum at fast motorway speeds.', de: 'Bis 120 km/h angenehm; hohe SUV-Form und Reifen bringen bei schnellem Autobahntempo hörbares Rauschen.', ru: 'Комфортен до 120 км/ч; на высокой скорости заметен аэродинамический шум и гул шин.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashboardTrim', v: { en: 'Durable Hard-Wearing Plastics · Solid Fitment', de: 'Robuste Hartkunststoffe · Solide Verarbeitung', ru: 'Износостойкий жёсткий пластик · Крепкая сборка' } },
            { k: 'seatUpholstery', v: { en: 'Tough Woven Cloth or Optional Full Leather', de: 'Strapazierfähiger Stoff oder optional Vollleder', ru: 'Прочная ткань или опциональная кожа' } }
          ],
          note: { en: 'Utilitarian rather than plush, but switches and trim resist wear well even past 200,000 km.', de: 'Eher funktional als luxuriös, dafür extrem abriebfest und klapperarm auch über 200.000 km.', ru: 'Без премиальной мягкости, но фурнитура и панели спокойно выдерживают пробеги за 200 000 км.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turnDiameter', v: { en: '11.0 m (Tight for a Compact SUV)', de: '11,0 m (Handlich für ein Kompakt-SUV)', ru: '11,0 м (Компактный разворот для SUV)' } },
            { k: 'steeringType', v: { en: 'Electric Power Steering (EPS) · Light Parking Effort', de: 'Elektrische Servolenkung (EPS) · Leicht beim Parken', ru: 'Электроусилитель (ЭУР) · Лёгкий руль на парковке' } }
          ],
          note: { en: 'Compact 4.4 m footprint and tight 11.0 m turning circle make it far easier to park than larger crossovers.', de: 'Kompakte 4,4 m Länge und 11,0 m Wendekreis machen ihn deutlich stadttauglicher als größere SUVs.', ru: 'Длина 4,4 м и разворот 11,0 м делают парковку проще, чем у большинства одноклассников.' }
        },
        visibility: {
          specs: [
            { k: 'allRoundView', v: { en: 'High Seating · Large Upright Side Glass', de: 'Hohe Sitzposition · Große steile Fensterflächen', ru: 'Высокая посадка · Большая площадь остекления' } },
            { k: 'rearView', v: { en: 'Side-Hinged Tailgate (Watch Swing Space Behind)', de: 'Seitlich öffnende Hecktür (Platz nach hinten beachten)', ru: 'Распашная дверь багажника (нужно место сзади)' } }
          ],
          note: { en: 'Commanding forward view; note that the side-hinged tailgate swings toward the kerb and needs room when parallel parked.', de: 'Sehr gute Rundumsicht; die seitlich öffnende Hecktür braucht beim Längsparken allerdings Platz nach hinten.', ru: 'Отличный обзор вперёд; учитывайте распашную заднюю дверь при тесной параллельной парковке.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'crashRating', v: { en: '4 Stars Euro NCAP (2006) · 7 Airbags incl. Driver Knee', de: '4 Sterne Euro NCAP (2006) · 7 Airbags inkl. Knieairbag', ru: '4 звезды Euro NCAP (2006) · 7 подушек (вкл. коленную)' } },
            { k: 'bodyStructure', v: { en: 'High-Rigidity SUV Unibody · Standard Knee Airbag', de: 'Steife SUV-Karosserie · Serienmäßiger Knieairbag', ru: 'Жёсткий кузов SUV · Коленная подушка в базе' } }
          ],
          note: { en: 'Strong occupant protection for its 2006–2012 era with a rare standard driver knee airbag and integrated VSC+ stability.', de: 'Solider Insassenschutz für 2006–2012 mit seltenem Serien-Knieairbag und integriertem VSC+.', ru: 'Надёжная пассивная безопасность для 2006–2012 годов плюс редкая в классе коленная подушка.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeSafety', v: { en: 'VSC+ (Steering-Assist Stability), TRC, ABS/EBD, HAC', de: 'VSC+ (Lenk-ESP), TRC, ABS/EBD, Berganfahrhilfe', ru: 'VSC+ (стабилизация с подруливанием), TRC, ABS, HAC' } },
            { k: 'driverAssists', v: { en: 'No Modern AEB / Lane Keep (Era-Standard)', de: 'Kein moderner Notbrems-/Spurassistent (zeitgemäß)', ru: 'Без современных AEB и удержания в полосе (по возрасту)' } }
          ],
          note: { en: 'Toyota VSC+ coordinates steering torque, brakes, and AWD coupling automatically in slippery winter conditions.', de: 'Toyotas VSC+ vernetzt Lenkung, Bremse und Allrad automatisch bei Schnee und Nässe.', ru: 'Система VSC+ согласует руль, тормоза и муфту полного привода на скользком покрытии.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'rearSpace', v: { en: '60/40 Sliding & Reclining Rear Bench · Flat Floor', de: '60/40 verschieb- & neigbare Rückbank · Flacher Boden', ru: 'Сдвижной ряд 60/40 с регулировкой спинки · Ровный пол' } },
            { k: 'frontErgo', v: { en: 'Tall Upright Cabin · Ample Headroom for 1.90 m+', de: 'Hoher luftiger Innenraum · Viel Kopffreiheit ab 1,90 m', ru: 'Высокий потолок · Запас места для пассажиров 1,90 м+' } }
          ],
          note: { en: 'Sliding and reclining rear bench lets you trade extra legroom for cargo length in seconds.', de: 'Verschiebbare und neigbare Rückbank passt Beinfreiheit und Kofferraumlänge flexibel an.', ru: 'Сдвижной задний диван с регулировкой наклона позволяет гибко менять баланс между ногами и багажником.' }
        },
        isofixEntry: {
          specs: [
            { k: 'childSeats', v: { en: '2× Outer Rear ISOFIX + Top-Tether Anchors', de: '2× ISOFIX außen hinten + Top-Tether', ru: '2× ISOFIX сзади + якорные крепления Top-Tether' } },
            { k: 'doorAccess', v: { en: 'High Hip Point · Effortless Entry Without Bending', de: 'Hoher Einstieg · Rückenschonendes Ein- & Aussteigen', ru: 'Высокий проём · Удобная посадка без наклона' } }
          ],
          note: { en: 'Elevated seat height makes strapping in child seats or getting in and out effortless.', de: 'Hohe Sitzposition macht das Anschnallen von Kindersitzen und den Einstieg sehr bequem.', ru: 'Высокая посадка облегчает установку детских кресел и ежедневный вход/выход.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootCapacity', v: { en: '586 L (Seats Up incl. Underfloor) / 1,469 L (Folded)', de: '586 L (inkl. Unterbodenfach) / 1.469 L (Umgeklappt)', ru: '586 л (с подпольем) / 1 469 л (сложено)' } },
            { k: 'loadingLip', v: { en: 'Low Flat Floor · Huge 100 L Underfloor Compartment', de: 'Flacher Ladeboden · Riesiges 100-L-Unterbodenfach', ru: 'Низкий пол · Огромная ниша 100 л под полом' } }
          ],
          note: { en: 'Class-leading 586 L total volume thanks to the huge underfloor well; note the side-hinged tailgate opens sideways.', de: 'Sehr große 586 L dank riesigem Unterbodenfach; die seitliche Hecktür braucht allerdings Platz nach hinten.', ru: 'Один из лучших объёмов в классе (586 л) за счёт глубокого подполья; учитывайте распашную дверь.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingSystem', v: { en: '✓ Easy-Flat One-Touch Levers in Boot · Completely Flat Floor', de: '✓ Easy-Flat-Hebel im Kofferraum · Komplett ebener Boden', ru: '✓ Рычаги Easy-Flat в багажнике · Абсолютно ровный пол' } }
          ],
          note: { en: 'Pull one lever in the boot and the rear seats drop flat automatically without removing headrests.', de: 'Ein Zug am Hebel im Kofferraum klappt die Rückbank komplett eben um — ohne Kopfstützen-Ausbau.', ru: 'Один рычаг в багажнике складывает задний ряд в ровный пол без снятия подголовников.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: { en: '~540 kg (5 Adults + Heavy Holiday Luggage)', de: '~540 kg (5 Personen + schweres Urlaubsgepäck)', ru: '~540 кг (5 человек + тяжёлый багаж)' } },
            { k: 'roofLoad', v: { en: '75 kg Approved Dynamic Roof Load', de: '75 kg zugelassene Dachlast', ru: '75 кг допустимая нагрузка на крышу' } }
          ],
          note: { en: 'Strong 540 kg payload handles family holiday loads and roof boxes without sagging.', de: 'Hohe 540 kg Zuladung meistern Urlaubsgepäck und Dachbox mühelos.', ru: 'Запас 540 кг спокойно выдерживает полную загрузку семьи и багажник на крыше.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'steeringFeel', v: { en: 'Direct Electric Steering · Predictable SUV Balance', de: 'Direkte EPS-Lenkung · Berechenbare SUV-Balance', ru: 'Точный ЭУР · Понятный баланс SUV' } },
            { k: 'cornering', v: { en: 'Double-Wishbone Rear Keeps Body Roll Well Contained', de: 'Doppelquerlenker hinten halten Seitenneigung im Zaum', ru: 'Задняя двухрычажка хорошо сдерживает крены' } }
          ],
          note: { en: 'Feels tighter and more agile than most soft-sprung 2006–2012 compact SUVs.', de: 'Wirkt handlicher und straffer als die meisten weich abgestimmten Kompakt-SUVs von 2006–2012.', ru: 'Управляется собраннее и точнее большинства мягких кроссоверов 2006–2012 годов.' }
        },
        tractionDiff: '@tractionAwd'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retVeryHigh', resaleDemand: '@demFast' }
    },
    sharedGearboxes: {
      '5-mt-sc': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'Toyota E352F · Manual · Single Clutch', de: 'Toyota E352F · Schaltgetriebe · Kupplung', ru: 'Toyota E352F · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Toyota E352F 5-Speed Manual', de: 'Toyota E352F 5-Gang-Schaltgetriebe', ru: '5-ст. МКПП Toyota E352F' } }], note: { en: 'Simple mechanical 5-speed SUV gearbox without a dual-mass flywheel.', de: 'Einfaches 5-Gang-SUV-Schaltgetriebe ohne Zweimassenschwungrad.', ru: 'Простая 5-ст. механика кроссовера без ДММ.' } }, clutchDmf: '@clutchSingle' } },
        dossier: {
          en: { headline: 'Toyota E352F 5-Speed Manual — Simple & Tough, Busy @ 130 km/h', strengths: ['Zero DMF or automatic repair costs; simple single-mass clutch.'], watchouts: ['Only 5 ratios raise motorway revs; check 2nd-gear synchro when cold.'], beforeYouBuy: ['Test cold 1→2 shifts and listen for transfer-case bearing whine.'] },
          de: { headline: 'Toyota E352F 5-Gang-Getriebe — Robust ohne ZMS, höhere Drehzahl', strengths: ['Kein ZMS und günstige Kupplungskosten.'], watchouts: ['Fehlender 6. Gang erhöht das Autobahntempo-Geräusch.'], beforeYouBuy: ['Kaltes Schalten 1→2 und ruhigen Lauf des Verteilergetriebes prüfen.'] },
          ru: { headline: 'Механика Toyota E352F 5-МКПП — Простая и крепкая, без 6-й передачи', strengths: ['Нет ДММ и недорогая замена сцепления.'], watchouts: ['На трассе выше обороты из-за 5 передач.'], beforeYouBuy: ['Проверьте 1→2 на холодную и отсутствие гула раздатки.'] }
        }
      },
      '6-mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Toyota EB62F · Manual · Single Clutch', de: 'Toyota EB62F · Schaltgetriebe · Kupplung', ru: 'Toyota EB62F · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: { headline: 'Toyota EB62F 6-Speed Manual — Relaxed 6th Gear & Simple Clutch', strengths: ['6th gear quiets motorway cruising while keeping single-mass clutch simplicity.'], watchouts: ['Check clutch release bearing and rear diff coupling noise on AWD trims.'], beforeYouBuy: ['Test 1→2→3 cold shifts and full-lock tight turns for AWD coupling smoothness.'] },
          de: { headline: 'Toyota EB62F 6-Gang-Getriebe — Ruhiger 6. Gang ohne ZMS', strengths: ['Der 6. Gang senkt die Drehzahl bei einfacher Kupplungstechnik.'], watchouts: ['Ausrücklager und Allrad-Visco-/Magnetkupplung prüfen.'], beforeYouBuy: ['Kalte Schaltvorgänge und enge Kurven auf Allrad-Geräusche testen.'] },
          ru: { headline: 'Механика Toyota EB62F 6-МКПП — Комфортная 6-я передача без ДММ', strengths: ['6-я передача снижает шум на трассе при простом одномассовом сцеплении.'], watchouts: ['Проверьте выжимной и муфту заднего привода.'], beforeYouBuy: ['Проверьте переключения на холодную и тишину муфты 4WD в крутых поворотах.'] }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Toyota EA61F · Manual + DMF', de: 'Toyota EA61F · Schaltgetriebe + ZMS', ru: 'Toyota EA61F · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: { headline: 'Heavy-Duty Toyota EA61F 6-MT — Watch Diesel DMF & Clutch', strengths: ['Handles 310–400 Nm D-4D diesel torque cleanly with 2,000 kg towing.'], watchouts: ['Dual-mass flywheel & clutch wear around 160k–200k km (€1,000–€1,450).'], beforeYouBuy: ['Accelerate hard in 4th gear from 1,800 rpm to check for clutch slip.'] },
          de: { headline: 'Toyota EA61F 6-Gang-Getriebe — Kräftig, Diesel-ZMS beachten', strengths: ['Verkraftet 310–400 Nm Diesel-Drehmoment und 2.000 kg Anhängelast.'], watchouts: ['ZMS und Kupplung kosten ab 160–200 Tkm ca. 1.000–1.450 €.'], beforeYouBuy: ['Im 4. Gang ab 1.800 U/min voll durchbeschleunigen und auf Kupplungsrutschen testen.'] },
          ru: { headline: 'Механика Toyota EA61F 6-МКПП — Держит до 400 Н·м, контроль ДММ', strengths: ['Уверенно переваривает тягу D-4D и прицеп до 2 000 кг.'], watchouts: ['ДММ и сцепление просят замены к 160–200 тыс. км (€1 000–1 450).'], beforeYouBuy: ['Ускорьтесь на 4-й передаче с 1 800 об/мин, проверяя сцепление.'] }
        }
      },
      '4-at': {
        category: 'automatic',
        label: { en: '4-Speed Torque Auto', de: '4-Stufen-Wandlerautomatik', ru: '4-ст. Автомат' },
        shortLabel: { en: '4-AT', de: '4-AT', ru: '4-АКПП' },
        subLabel: { en: 'Aisin U140F · Hydraulic Torque Converter', de: 'Aisin U140F · Wandlerautomatik', ru: 'Aisin U140F · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto5', clutchDmf: '@torqueConv' },
        subStatDeltas: { transmissionDriveline: { score: 8.8, badges: { en: ['Bulletproof Aisin U140F 4-AT', 'Thirsty 4-Speed Ratios'], de: ['Unverwüstliche Aisin 4-AT', 'Hoher Verbrauch durch 4 Gänge'], ru: ['Неубиваемая 4-АКПП Aisin', 'Высокий расход на 4 ступенях'] } } },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Aisin U140F 4-Speed Torque Auto', de: 'Aisin U140F 4-Stufen-Wandlerautomatik', ru: '4-ст. АКПП Aisin U140F' } }], note: { en: 'Extremely tough 4-speed hydraulic auto, though tall gear gaps hurt 0–100 sprint and fuel economy.', de: 'Extrem robuste 4-Stufen-Automatik, aber lange Gangsprünge erhöhen Verbrauch und Sprintzeit.', ru: 'Очень живучий 4-ст. автомат, но длинные передачи ухудшают разгон и расход.' } }, clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: { headline: 'Aisin U140F 4-Speed Auto — Virtually Indestructible, Thirsty on Highways', strengths: ['Classic 4-speed Aisin durability routinely clears 300k+ km with ATF changes.'], watchouts: ['Only 4 gears slow 0–100 to 12.0 s and raise fuel consumption near 10 L/100km.'], beforeYouBuy: ['Check clean red Toyota Type T-IV / WS ATF and smooth kickdown.'] },
          de: { headline: 'Aisin U140F 4-Stufen-Automatik — Extrem haltbar, aber durstig', strengths: ['Legendäre Aisin-Haltbarkeit weit über 300.000 km bei regelmäßigem Ölwechsel.'], watchouts: ['Nur 4 Gänge kosten Sprintzeit (12,0 s) und erhöhen den Verbrauch Richtung 10 L/100km.'], beforeYouBuy: ['Sauberes rotes ATF und ruckfreien Kickdown prüfen.'] },
          ru: { headline: 'Автомат Aisin U140F 4-АКПП — Неубиваемый, но прожорливый на трассе', strengths: ['Классический автомат Aisin легко ходит 300+ тыс. км при смене масла.'], watchouts: ['Всего 4 передачи замедляют разгон до 12,0 с и поднимают расход почти к 10 л/100 км.'], beforeYouBuy: ['Проверьте чистоту масла ATF и мягкость кикдауна.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Aisin 4-AT ATF drain-and-fill', de: 'Aisin 4-AT Getriebeölwechsel', ru: 'Замена масла ATF в АКПП Aisin U140F' }, cost: '€160–240' }] }
      },
      'multidrive-s': {
        category: 'automatic',
        label: { en: 'Multidrive S CVT', de: 'Multidrive S CVT', ru: 'Вариатор Multidrive S' },
        shortLabel: { en: 'CVT', de: 'CVT', ru: 'CVT' },
        subLabel: { en: 'Toyota K111F · Belt CVT', de: 'Toyota K111F · Riemen-CVT', ru: 'Toyota K111F · Клиноременный вариатор' },
        specOverrides: { gearbox: '@cvt', clutchDmf: '@torqueConv' },
        subStatDeltas: { transmissionDriveline: { score: 8.2, badges: { en: ['Toyota Multidrive S CVT', 'Smooth City Belt-CVT'], de: ['Toyota Multidrive S CVT', 'Sanfte Stadt-Automatik'], ru: ['Вариатор Toyota Multidrive S', 'Плавный городской ход'] } } },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Toyota Multidrive S Belt CVT (K111F)', de: 'Toyota Multidrive S Riemen-CVT (K111F)', ru: 'Вариатор Toyota Multidrive S (K111F)' } }], note: { en: 'Smooth stepless CVT; refresh Toyota CVT fluid every 60,000 km.', de: 'Stufenloses CVT-Getriebe; alle 60.000 km CVT-Öl wechseln.', ru: 'Плавный вариатор; замена масла CVT каждые 60 тыс. км.' } }, clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: { headline: 'Toyota Multidrive S CVT — Smooth Urban SUV Cruiser, Needs 60k Oil', strengths: ['Effortless stop-and-go smoothness with solid Toyota CVT longevity when serviced.'], watchouts: ['Drones under steep uphill acceleration and dislikes neglected CVT fluid.'], beforeYouBuy: ['Listen for bearing whine at 60–90 km/h and verify CVT fluid history.'] },
          de: { headline: 'Toyota Multidrive S CVT — Ruhig im Alltag, 60-Tkm-Ölwechsel nötig', strengths: ['Sehr sanftes Anfahren im Stadtverkehr und ordentliche Standfestigkeit bei Pflege.'], watchouts: ['Dreht am Berg höher aus; überaltertes CVT-Öl vermeiden.'], beforeYouBuy: ['Bei 60–90 km/h auf Lagergeräusche hören und CVT-Ölwechsel prüfen.'] },
          ru: { headline: 'Вариатор Toyota Multidrive S — Комфортный в городе, требует ТО 60 тыс.', strengths: ['Мягкий разгон без переключений и хороший ресурс при замене масла.'], watchouts: ['Держит повышенные обороты на подъёмах; не терпит старого масла.'], beforeYouBuy: ['Прислушайтесь к возможному вою подшипников на 60–90 км/ч.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Multidrive S CVT fluid service', de: 'Multidrive S CVT-Ölwechsel', ru: 'Замена масла вариатора Multidrive S' }, cost: '€180–260' }] }
      },
      'aisin-6at': {
        category: 'automatic',
        label: { en: '6-Speed Torque Auto', de: '6-Stufen-Wandlerautomatik', ru: '6-ст. Автомат' },
        shortLabel: { en: '6-AT', de: '6-AT', ru: '6-АКПП' },
        subLabel: { en: 'Aisin U660F · Hydraulic Torque Converter', de: 'Aisin U660F · Wandlerautomatik', ru: 'Aisin U660F · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto6', clutchDmf: '@torqueConv' },
        subStatDeltas: { transmissionDriveline: { score: 8.7, badges: { en: ['Proven Aisin U660F 6-AT', 'No Diesel DMF/Clutch Wear'], de: ['Robuste Aisin 6-Wandler-AT', 'Kein ZMS-/Kupplungsverschleiß'], ru: ['Надёжная 6-АКПП Aisin', 'Без износа ДММ и сцепления'] } } },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Aisin U660F 6-Speed Torque Auto', de: 'Aisin U660F 6-Stufen-Wandlerautomatik', ru: '6-ст. АКПП Aisin U660F' } }], note: { en: 'Smooth, durable Aisin 6-speed automatic that eliminates diesel DMF/clutch bills; refresh Toyota WS ATF every 60,000 km.', de: 'Robuste Aisin-6-Stufen-Automatik ohne ZMS-Verschleiß; Toyota WS-Öl alle 60.000 km wechseln.', ru: 'Надёжный 6-ст. автомат Aisin без ДММ; замена Toyota ATF WS каждые 60 тыс. км.' } }, clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: { headline: 'Aisin U660F 6-Speed Auto — Tough Diesel Cruiser, No DMF Bills', strengths: ['Handles 340 Nm diesel torque smoothly while eliminating clutch/DMF wear.'], watchouts: ['Adds ~0.8 L/100km fuel burn and softens 0–100 slightly vs 6-MT.'], beforeYouBuy: ['Test warm shifts for clean 2→3 engagement and check WS ATF service history.'] },
          de: { headline: 'Aisin U660F 6-Stufen-Automatik — Robuster Diesel-Gleiter ohne ZMS', strengths: ['Verkraftet 340 Nm Diesel-Drehmoment sauber ohne Kupplungs-/ZMS-Verschleiß.'], watchouts: ['Ca. 0,8 L/100km Mehrverbrauch gegenüber dem Schalter.'], beforeYouBuy: ['Warme Schaltvorgänge prüfen und nach Getriebeölwechseln fragen.'] },
          ru: { headline: 'Автомат Aisin U660F 6-АКПП — Надёжный дизельный круизёр без ДММ', strengths: ['Спокойно держит 340 Н·м и избавляет от замены сцепления с маховиком.'], watchouts: ['Добавляет ~0,8 л/100 км расхода по сравнению с механикой.'], beforeYouBuy: ['Проверьте плавность переключений 2→3 на горячую и историю замены ATF WS.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Aisin 6-AT Toyota ATF WS drain-and-fill', de: 'Aisin 6-AT Toyota ATF WS Getriebeölwechsel', ru: 'Замена масла Toyota ATF WS в АКПП Aisin 6-AT' }, cost: '€200–290' }] }
      }
    },
    engines: [
      {
        id: '2.0-valvematic',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: 'multidrive-s',
            estUsedPrice: '€11,500',
            specOverrides: { sprint0100: '11.0 s', topSpeed: '185 km/h', realWorldFuel: '8.5 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.0,
                badges: {
                  en: ['0–100 km/h: 11.0 s (CVT)', '185 km/h Top Speed'],
                  de: ['0–100 km/h: 11,0 s (CVT)', '185 km/h Spitze'],
                  ru: ['0–100 км/ч: 11,0 s (CVT)', 'Макс. 185 km/h']
                }
              },
              efficiencyFuel: {
                score: 5.8,
                badges: {
                  en: ['8.5 L/100km (CVT)'],
                  de: ['8,5 L/100km (CVT)'],
                  ru: ['8,5 L/100km (CVT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol-awd',
        dossierGroup: 'petrol-cvt',
        isDefault: true,
        fuelType: 'petrol',
        hp: 158,
        shortTitle: 'RAV4 2.0 VALVEMATIC',
        fullName: '2010 Toyota RAV4 2.0 Valvematic',
        engineBadge: '2.0L Valvematic AWD • 158 HP',
        engineSubLabel: {
          en: '3ZR-FAE 2.0L Valvematic Chain NA (2009–2013) • 6-MT / Opt. Multidrive S CVT • 198 Nm',
          de: '3ZR-FAE 2.0L Valvematic-Kettenmotor (2009–2013) • 6-Gang / Opt. Multidrive-S-CVT • 198 Nm',
          ru: '3ZR-FAE 2.0L Valvematic цепной (2009–2013) • 6-ст. МКПП / Опц. вариатор CVT • 198 Н·м'
        },
        rarityLabel: {
          en: 'BEST ALL-ROUNDER',
          de: 'BESTER ALLROUNDER',
          ru: 'ЛУЧШИЙ ВЫБОР'
        },
        originalMsrp: {
          en: '€27,950 New',
          de: '27.950 € Neu',
          ru: '€27 950 новый'
        },
        estUsedPrice: '€10,600',
        perkLabel: {
          en: '✦ Bulletproof 2.0 Valvematic • 586L Boot + Underfloor Bin • 2,000 kg Towing & 4WD Lock',
          de: '✦ Robuster 2.0 Valvematic • 586L Kofferraum + Unterbodenfach • 2.000 kg Anhängelast',
          ru: '✦ Надёжный 2.0 Valvematic • Багажник 586 л + ниша в полу • Прицеп 2 000 кг и 4WD Lock'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 2.0 CHAIN ENGINE',
            '586L BOOT + UNDERFLOOR BIN',
            'EASY-FLAT SLIDING REAR SEATS',
            '4WD LOCK BUTTON (UP TO 40 KM/H)',
            '2,000 KG BRAKED TOWING (6-MT)',
            'TIGHT 10.2M TURNING CIRCLE'
          ],
          de: [
            'ROBUSTER 2.0 KETTENMOTOR',
            '586L KOFFERRAUM + UNTERBODENFACH',
            'VERSCHIEBBARE EASY-FLAT-SITZE',
            '4WD-LOCK-TASTE (BIS 40 KM/H)',
            '2.000 KG ANHÄNGELAST (6-GANG)',
            'WENDIGER 10,2M WENDEKREIS'
          ],
          ru: [
            'ВЕЧНЫЙ ЦЕПНОЙ МОТОР 2.0',
            'БАГАЖНИК 586 Л + НИША В ПОЛУ',
            'СДВИЖНОЙ РЯД EASY-FLAT',
            'КНОПКА 4WD LOCK (ДО 40 КМ/Ч)',
            'БУКСИРОВКА 2 000 КГ (6-МКПП)',
            'МАЛЫЙ РАЗВОРОТ 10,2 М'
          ]
        },
        notableNegatives: {
          en: [
            'SIDE-HINGED TAILGATE NEEDS SPACE',
            'THIRSTY 8.3 L/100KM',
            'MODEST 198 NM PULLING POWER',
            'HARD DASHBOARD PLASTICS'
          ],
          de: [
            'HECKTÜR BRAUCHT PLATZ HINTEN',
            'DURSTIG: 8,3 L/100KM',
            'MÄSSIGE 198 NM DURCHZUGSKRAFT',
            'HARTPLASTIK IM ARMATURENBRETT'
          ],
          ru: [
            'РАСПАШНАЯ ДВЕРЬ ТРЕБУЕТ МЕСТА',
            'РАСХОД 8,3 Л/100 КМ',
            'СКРОМНАЯ ТЯГА 198 Н·М',
            'ЖЁСТКИЙ ПЛАСТИК САЛОНА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.8,
          comfortCabin: 7.8,
          spacePracticality: 9.0,
          performanceDynamics: 6.7,
          runningCostsTco: 8.0
        },
        specOverrides: {
          engineName: { en: '2.0L I4 Valvematic (Chain)', de: '2.0L Reihenvierzylinder (Kette)', ru: '2.0L R4 Valvematic (Цепь)' },
          forcedInduction: '@na',
          injection: '@port',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '2,000 kg',
          sprint0100: '10.2 s',
          topSpeed: '185 km/h',
          peakTorque: '198 Nm @ 4,400 rpm',
          passingPunch: { en: 'Needs Revs Above 4,000 rpm', de: 'Braucht Drehzahl >4.000/min', ru: 'Тяга выше 4 000 об/мин' },
          realWorldFuel: '8.3 L/100km',
          tankRange: '60 L (~720 km)',
          euroNorm: 'Euro 5 (Petrol)',
          taxInsurance: '@tierMod',
          serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 9.7,
            badges: {
              en: ['3ZR-FAE Chain NA', '300,000+ km Potential'],
              de: ['3ZR-FAE Kettenmotor', '300.000+ km Potenzial'],
              ru: ['Цепной 3ZR-FAE NA', 'Ресурс 300 000+ км']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '3ZR-FAE · 1,987 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Variable Valve Lift (Valvematic)', de: 'Reihenvierzylinder Alu · Variabler Ventilhub (Valvematic)', ru: 'Рядный 4-цил. алюминий · Valvematic' } }], note: { en: 'Smooth, durable Toyota chain petrol; keeps fuel use slightly lower than the older 1AZ-FE while remaining naturally aspirated.', de: 'Ruhiger, langlebiger Toyota-Kettenbenziner; sparsamer als der alte 1AZ-FE und komplett ohne Turbo.', ru: 'Надёжный цепной атмосферник Toyota; экономичнее старого 1AZ-FE и без турбины.' } },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Facelift 3ZR-FAE Port-Injected Chain Engine— Peak Petrol Reliability in the CA30W Generation',
                strengths: [
                  'Multi-point injection keeps intake valves clean with zero direct-injection carbon buildup, paired with a lifetime chain.',
                  'Automatically engages the rear axle on slip and adds an electronic 4WD Lock mode up to 40 km/h for snow or mud.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Rare failure if oil changes are stretched past 15,000 km— verify smooth cold idle and no codes.',
                  'Simple external bolt-on water pump can weep pinkish coolant; affordable preventive replacement.',
                  'Listen for a rear-axle drone at 60–80 km/h and refresh transfer/differential gear oil every 60,000 km.'
                ],
                beforeYouBuy: [
                  'Look for any check-engine light or reduced engine power on test drive— the variable valve-lift unit on top of the engine can fail at higher miles.',
                  'Listen at 60–80 km/h from the rear floor for a humming bearing sound coming from the all-wheel-drive rear coupling.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual synthetic oil (protects valve-lift box) & change rear AWD diff oil every 40–50k km / 3 yrs',
                    cost: '€180–290',
                    ifIgnored: 'Dirty aged oil clogs valve-lift actuator & old rear diff oil wears AWD coupling early',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change CVT auto fluid at 60k km / 4–5 yrs (if CVT), swap plugs & check 6-yr aging rubber hoses/belt',
                    cost: '€300–490',
                    ifIgnored: 'Stale CVT oil wears belt drive & age-cracked drive belt/water pump hoses leak',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Change CVT automatic & rear AWD differential oils + inspect water pump',
                    cost: '€280–450',
                    ifIgnored: 'Noisy CVT belt wear & coolant weeping onto drive belt (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Replace noisy rear AWD coupling bearing before it ruins the unit',
                    cost: '€380–620',
                    ifIgnored: 'Loud cabin drone turns into seized rear all-wheel-drive clutch (components & fluids also degrade over years)',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'red',
                    km: '155,000–205,000 km • 11–13 yrs',
                    action: 'Replace variable valve-lift control unit ("Valvematic") if error triggers',
                    cost: '€850–1,450',
                    ifIgnored: 'Car stuck in weak limp mode with slow highway acceleration (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '195,000–245,000 km • 13–15+ yrs',
                    action: 'Refresh clutch (manual), suspension bushings & oxygen sensors',
                    cost: '€550–900',
                    ifIgnored: 'High fuel burn, clunking suspension & worn-out clutch (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–1,900'
                  }
                ]
              },
              de: {
                headline: 'Facelift-Motor 3ZR-FAE mit Steuerkette & Saugrohreinspritzung— langlebigster Benziner im RAV4 III',
                strengths: [
                  'Keine Verkokung der Einlassventile und wartungsfreie Steuerkette für sehr hohe Laufleistungen.',
                  'Schaltet bei Schlupf blitzschnell zu und sperrt per Knopfdruck bis 40 km/h für Schnee oder Matsch.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Selten bei Wartung, aber empfindlich gegen überzogene Ölwechsel (>15.000 km)— ruhigen Kaltleerlauf ohne-Codes prüfen.',
                  'Leichtes Kühlmittel-Schwitzen an der Pumpenwelle tritt altersbedingt auf und ist günstig tauschbar.',
                  'Auf Brummgeräusche bei 60–80 km/h achten und Verteiler-/Achsöl alle 60.000 km wechseln.'
                ],
                beforeYouBuy: [
                  'Auf der Probefahrt auf Warnleuchten und volle Drehfreude achten– das Valvematic-Steuerteil für den Ventilhub oben am Motor kann bei hoher Laufleistung ausfallen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.',
                  'Ölmessstab und Kühlmittelbehälter auf saubere Flüssigkeiten ohne Ölspuren prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Synthetiköl (schützt Valvematic) & alle 40–50 Tkm / 3 J. das Hinterachs-Allradöl wechseln',
                    cost: '180–290 €',
                    ifIgnored: 'Schmutziges Öl schadet Ventilhub-Einheit & altes Allradöl lässt die Kupplung heulen',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'CVT-Automatiköl bei 60 Tkm / 4–5 J. wechseln, Zündkerzen tauschen & 6-J.-Schläuche/Riemen prüfen',
                    cost: '300–490 €',
                    ifIgnored: 'Gealtertes CVT-Öl schädigt Schubriemen; poröse 6-J.-Schläuche und Riemen reißen',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'CVT-Getriebe- und Allrad-Öl wechseln sowie Wasserpumpe prüfen',
                    cost: '280–450 €',
                    ifIgnored: 'Verschleißender CVT-Schubriemen & leckende Kühlflüssigkeit (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Brummendes Lager der hinteren Allrad-Magnetkupplung tauschen',
                    cost: '380–620 €',
                    ifIgnored: 'Dröhnen im Innenraum bis zum Blockieren der Allrad-Einheit (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'red',
                    km: '155.000–205.000 km • 11–13 J.',
                    action: 'Valvematic-Ventilhub-Steuerbox bei Fehlermeldung ersetzen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Dauerhafter Notlauf mit stark gedrosselter Motorleistung (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '195.000–245.000 km • 13–15+ J.',
                    action: 'Schaltkupplung, Fahrwerksbuchsen & Lambdasonden erneuern',
                    cost: '550–900 €',
                    ifIgnored: 'Erhöhter Benzinverbrauch, Poltern & rutschende Kupplung (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–1.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Рестайлинговый цепной 3ZR-FAE с распределённым впрыском— самый надёжный бензин RAV4 III',
                strengths: [
                  'Впускные клапаны всегда чистые без нагара, а привод ГРМ спокойно служит весь срок авто.',
                  'При базовом ТО со сменой масла и фильтров уверенно ходит 300 000–350 000+ км.'
                ],
                watchouts: [
                  'При редкой замене масла возможны сбои— проверяйте ровный холодный пуск.',
                  'Возможно подтекание антифриза через сальник; недорогая плановая замена.'
                ],
                beforeYouBuy: [
                  'На тест-драйве не должно быть ошибок двигателя и потери тяги— с пробегом на этом моторе может отказать блок управления подъёмом клапанов Valvematic.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.',
                  'Проверить щуп масла и расширительный бачок— жидкости должны быть чистыми без эмульсии.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно синтетика (беречь блок подъёма клапанов) и масло заднего редуктора раз в 40–50 тыс. / 3 года',
                    cost: '€180–290',
                    ifIgnored: 'Грязное масло губит Valvematic, а старое масло редуктора изнашивает муфту 4WD',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить жидкость вариатора CVT на 60 тыс. / 4–5 лет (на АКПП), свечи и осмотреть ремень/шланги (6 лет)',
                    cost: '€300–490',
                    ifIgnored: 'Старая жидкость изнашивает ремень вариатора, а резина к 6 годам теряет герметичность',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить масло в вариаторе, заднем редукторе и проверить водяной насос',
                    cost: '€280–450',
                    ifIgnored: 'Ускоренный износ ремня вариатора и утечка антифриза (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Заменить загудевший подшипник задней муфты полного привода',
                    cost: '€380–620',
                    ifIgnored: 'Сильный гул в салоне и разрушение всей муфты целиком (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'red',
                    km: '155 000–205 000 км • 11–13 лет',
                    action: 'Заменить блок управления подъёмом клапанов (Valvematic) при появлении ошибки',
                    cost: '€850–1 450',
                    ifIgnored: 'Постоянный аварийный режим с резкой потерей мощности (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '195 000–245 000 км • 13–15+ лет',
                    action: 'Обновить сцепление (на механике), сайлентблоки и кислородные датчики',
                    cost: '€550–900',
                    ifIgnored: 'Повышенный расход бензина, стуки в подвеске и пробуксовка сцепления (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 200–1 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.7,
            badges: {
              en: ['6-MT / Multidrive S CVT + AWD', 'Service CVT Fluid & AWD Lock'],
              de: ['6-Gang / CVT + Allrad-Lock', 'CVT-Öl & Hinterachskupplung'],
              ru: ['6-МКПП / Вариатор + AWD', 'ТО вариатора и муфты AWD']
            }
          },
          buildQualityRust: {
            score: 8.0,
            badges: {
              en: ['Tough SUV Axles & Bushings', 'Check Subframe & Mounts'],
              de: ['Robuste SUV-Achsen & Lager', 'Achsträger & Auspuffhalter'],
              ru: ['Выносливая подвеска RAV4', 'Проверка подрамника и крепежа']
            }
          },
          electronicsReliability: {
            score: 9.3,
            badges: {
              en: ['Dependable Toyota Relays', 'Clean Simple Facelift Loom'],
              de: ['Zuverlässige Toyota-Relais', 'Klares Facelift-Bordnetz'],
              ru: ['Надёжные реле Toyota', 'Простая штатная проводка']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['Comfortable Upright Posture', 'Firm Short-Bump SUV Bounce'],
              de: ['Bequeme hohe Sitzposition', 'Poltrig auf kurzen Stößen'],
              ru: ['Удобная высокая посадка', 'Жёстче на мелких неровностях']
            }
          },
          interiorQualityFeatures: {
            score: 6.0,
            badges: {
              en: ['Logical Oversized Controls', 'Utilitarian Hard Plastics'],
              de: ['Große griffige Drehregler', 'Schlichtes hartes SUV-Plastik'],
              ru: ['Крупные удобные регуляторы', 'Простой твёрдый пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.6,
            badges: {
              en: ['Tight 10.2 m SUV Turn', 'High View • Side-Swing Tailgate'],
              de: ['Nur 10,2 m Wendekreis', 'Hohe Übersicht • Seitliche Hecktür'],
              ru: ['Разворот 10,2 м', 'Высокая посадка • Дверь вбок']
            }
          },
          safetyProtection: {
            score: 6.5,
            badges: {
              en: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ Stability'],
              de: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ ESP'],
              ru: ['Euro NCAP 4★ (2006)', '7 подушек + VSC+ (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Sliding & Reclining Rear Seats', 'High Step-In Door Access'],
              de: ['Verschieb- & neigbarer Fond', 'Bequemer hoher SUV-Einstieg'],
              ru: ['Сдвижные и наклонные спинки', 'Удобный высокий вход в салон']
            }
          },
          interiorBootSpace: {
            score: 9.3,
            badges: {
              en: ['586L Boot (1,752L Max)', 'Deep Underfloor Storage'],
              de: ['586L Kofferraum (1.752L Max)', 'Großes Unterbodenfach'],
              ru: ['Багажник 586–1 752 л', 'Глубокий подпол багажника']
            }
          },
          payloadTowing: {
            score: 9.2,
            badges: {
              en: ['540 kg Payload', '750 / 2,000 kg Towing'],
              de: ['540 kg Zuladung', '750 / 2.000 kg Anhängelast'],
              ru: ['Нагрузка 540 кг', 'Прицеп: 750 / 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.5,
            badges: {
              en: ['0–100 km/h: 10.2 s', '185 km/h Top Speed'],
              de: ['0–100 km/h: 10,2 s', '185 km/h Spitze'],
              ru: ['0–100 км/ч: 10,2 с', 'Макс. 185 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.0,
            badges: {
              en: ['198 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['198 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['198 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 6.6,
            badges: {
              en: ['4WD Lock Snow & Mud Traction', 'Predictable SUV Body Roll'],
              de: ['4WD-Lock Winter-Traktion', 'Vorhersehbare Seitenneigung'],
              ru: ['Блокировка 4WD зимой и в грязи', 'Предсказуемые крены SUV']
            }
          },
          brakingPerformance: {
            score: 5.7,
            badges: {
              en: ['100–0 km/h: 37.5 m', 'Average Pedal Feel • SUV Weight'],
              de: ['100–0 km/h: 37,5 m', 'Mittlerer Druckpunkt • SUV-Masse'],
              ru: ['100–0 км/ч: 37,5 м', 'Средняя информативность • Масса SUV']
            }
          },
          efficiencyFuel: {
            score: 6.0,
            badges: {
              en: ['Thirsty (8.3 L/100km)', '174 g/km CO2 (Euro 5)'],
              de: ['Durstig (8,3 L/100km)', '174 g/km CO2 (Euro 5)'],
              ru: ['Прожорливый (8,3 л/100 км)', '174 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 7.4,
            badges: {
              en: ['2.0L SUV Tax • Euro 5', 'Moderate Compact SUV Insurance'],
              de: ['2.0-SUV-Steuer • Euro 5', 'Faire SUV-Versicherung'],
              ru: ['Налог 2,0 SUV • Euro 5', 'Умеренная страховка SUV']
            }
          },
          maintenanceRepairCosts: {
            score: 8.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km / 4 yrs', de: 'Alle 60.000 km / 4 J.', ru: 'Каждые 60 000 км / 4 г.' }, action: { en: 'Change AWD transfer case & rear differential oil (+ CVT fluid if automatic)', de: 'Verteilergetriebe- & Hinterachsöl wechseln (+ CVT-Öl bei Automatik)', ru: 'Замена масла в раздатке и заднем редукторе (+ жидкость CVT)' }, cost: '€180–340' },
                { when: { en: 'Every 90,000 km', de: 'Alle 90.000 km', ru: 'Каждые 90 000 км' }, action: { en: 'Replace iridium spark plugs & inspect auxiliary drive belt', de: 'Iridium-Zündkerzen wechseln & Keilrippenriemen prüfen', ru: 'Замена иридиевых свечей и проверка приводного ремня' }, cost: '€160–240' },
                { when: { en: '150,000 km / 10 yrs', de: '150.000 km / 10 J.', ru: '150 000 км / 10 лет' }, action: { en: 'Flush Toyota Super Long Life Coolant & inspect radiator hoses', de: 'Kühlmittel (SLLC) wechseln & Kühlerschläuche prüfen', ru: 'Замена антифриза SLLC и проверка патрубков' }, cost: '€120–180' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'Valvematic variable-lift actuator module (if Check Engine / limp mode appears)', de: 'Valvematic-Stellmotor (bei Motorkontrollleuchte / Notlauf)', ru: 'Блок управления Valvematic (при ошибке и потере тяги)' }, cost: '€900–1,400', risk: { en: 'Engine stuck in limp mode with flat throttle response', de: 'Dauerhafter Notlauf und stark reduzierter Vortrieb', ru: 'Двигатель уходит в аварийный режим с резкой потерей тяги' }, damage: '€1,400–1,800' },
                { when: { en: '130,000–180,000 km', de: '130.000–180.000 km', ru: '130 000–180 000 км' }, action: { en: 'Water pump bearing weep & rear AWD coupling bearing hum', de: 'Wasserpumpe (Lagerspiel/Leck) & Lager der Allrad-Magnetkupplung', ru: 'Течь помпы и гул подшипника электромуфты полного привода' }, cost: '€260–520', risk: { en: 'Coolant loss or loud rear driveline drone under load', de: 'Kühlmittelverlust oder starkes Dröhnen an der Hinterachse', ru: 'Утечка антифриза или сильный гул заднего редуктора' }, damage: '€900–1,600' }
              ]
            },
            badges: {
              en: ['No Turbo / DPF Bills', '4WD Tyres & Routine Oils'],
              de: ['Keine Turbo-/DPF-Reparaturen', 'SUV-Reifen & Differentialöl'],
              ru: ['Нет расходов на турбину и DPF', 'Шины SUV и масло в трансмиссии']
            }
          },
          depreciationResale: {
            score: 9.4,
            badges: {
              en: ['Cult Used SUV Demand', 'High Value Retention'],
              de: ['Extrem gefragtes SUV', 'Sehr wertstabil'],
              ru: ['Огромный спрос на б/у', 'Высокая ликвидность']
            }
          }
        }
      },
      {
        id: '2.0-vvti',
        defaultGearboxId: '5-mt-sc',
        gearboxes: [
          { id: '5-mt-sc', isDefault: true },
          {
            id: '4-at',
            estUsedPrice: '€9,100',
            specOverrides: { sprint0100: '12.0 s', topSpeed: '175 km/h', realWorldFuel: '9.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 4.3,
                badges: {
                  en: ['0–100 km/h: 12.0 s (4-AT)', '175 km/h Top Speed'],
                  de: ['0–100 km/h: 12,0 s (4-AT)', '175 km/h Spitze'],
                  ru: ['0–100 км/ч: 12,0 s (4-AT)', 'Макс. 175 km/h']
                }
              },
              efficiencyFuel: {
                score: 4.4,
                badges: {
                  en: ['9.8 L/100km (4-AT)'],
                  de: ['9,8 L/100km (4-AT)'],
                  ru: ['9,8 L/100km (4-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol-awd',
        dossierGroup: 'petrol-conv-auto',
        isDefault: false,
        fuelType: 'petrol',
        hp: 152,
        shortTitle: 'RAV4 2.0 VVT-i',
        fullName: '2007 Toyota RAV4 2.0 VVT-i',
        engineBadge: '2.0L VVT-i AWD • 152 HP',
        engineSubLabel: {
          en: '1AZ-FE 2.0L VVT-i Chain NA (2006–2009) • 5-MT / Opt. 4-AT • 194 Nm • AWD',
          de: '1AZ-FE 2.0L VVT-i Ketten-Saugmotor (2006–2009) • 5-Gang / Opt. 4-AT • 194 Nm • Allrad',
          ru: '1AZ-FE 2.0L VVT-i цепной атмо (2006–2009) • 5-ст. МКПП / Опц. 4-АКПП • 194 Н·м • AWD'
        },
        rarityLabel: {
          en: 'PROVEN CLASSIC',
          de: 'ROBUSTER KLASSIKER',
          ru: 'ПРОВЕРЕННАЯ КЛАССИКА'
        },
        originalMsrp: {
          en: '€26,700 New',
          de: '26.700 € Neu',
          ru: '€26 700 новый'
        },
        estUsedPrice: '€8,400',
        perkLabel: {
          en: '✦ Simple 1AZ-FE Chain Engine • Classic 4-Speed Auto Option • 2,000 kg Towing (5-MT)',
          de: '✦ Simpler 1AZ-FE Kettenmotor • Klassische 4-Stufen-Automatik • 2.000 kg Anhängelast',
          ru: '✦ Простой цепной 1AZ-FE • Классический 4-ст. автомат • Буксировка 2 000 кг'
        },
        remarkablePositives: {
          en: [
            'SIMPLE 1AZ-FE CHAIN ENGINE',
            'BULLETPROOF 4-SPEED AUTO OPTION',
            '586L BOOT + UNDERFLOOR BIN',
            '4WD LOCK BUTTON (UP TO 40 KM/H)',
            '2,000 KG BRAKED TOWING (5-MT)'
          ],
          de: [
            'SIMPLER 1AZ-FE KETTENMOTOR',
            'ROBUSTE 4-STUFEN-AUTOMATIK',
            '586L KOFFERRAUM + UNTERBODENFACH',
            '4WD-LOCK-TASTE (BIS 40 KM/H)',
            '2.000 KG ANHÄNGELAST (5-GANG)'
          ],
          ru: [
            'ПРОСТОЙ ЦЕПНОЙ МОТОР 1AZ-FE',
            'НАДЁЖНЫЙ 4-СТ. АВТОМАТ (ОПЦ.)',
            'БАГАЖНИК 586 Л + НИША В ПОЛУ',
            'КНОПКА 4WD LOCK (ДО 40 КМ/Ч)',
            'БУКСИРОВКА 2 000 КГ (5-МКПП)'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 9.1 L/100KM FUEL USE',
            'ONLY 5 MANUAL / 4 AUTO GEARS',
            'SIDE-HINGED TAILGATE NEEDS SPACE',
            'MODEST 194 NM TORQUE'
          ],
          de: [
            'DURSTIGE DURSTIG: 9,1 L/100KM',
            'NUR 5-GANG / 4-STUFEN-AUTOMATIK',
            'HECKTÜR BRAUCHT PLATZ HINTEN',
            'MÄSSIGE 194 NM DURCHZUGSKRAFT'
          ],
          ru: [
            'ВЫСОКИЙ РАСХОД 9,1 Л/100 КМ',
            'ВСЕГО 5 МКПП / 4 АКПП ПЕРЕДАЧ',
            'РАСПАШНАЯ ДВЕРЬ ТРЕБУЕТ МЕСТА',
            'СКРОМНАЯ ТЯГА 194 Н·М'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.9,
          comfortCabin: 7.7,
          spacePracticality: 9.0,
          performanceDynamics: 6.5,
          runningCostsTco: 7.7
        },
        specOverrides: {
          engineName: { en: '2.0L I4 VVT-i (Chain)', de: '2.0L Reihenvierzylinder (Kette)', ru: '2.0L R4 VVT-i (Цепь)' },
          forcedInduction: '@na',
          injection: '@port',
          timingDrive: '@chain',
          gearbox: '@manual5',
          clutchDmf: '@torqueConv',
          towingBraked: '2,000 kg',
          sprint0100: '10.6 s',
          topSpeed: '185 km/h',
          peakTorque: '194 Nm @ 4,000 rpm',
          passingPunch: { en: 'Modest · High-Revving', de: 'Gemütlich · Drehzahlorientiert', ru: 'Спокойная · Любит обороты' },
          realWorldFuel: '9.1 L/100km',
          tankRange: '60 L (~660 km)',
          euroNorm: 'Euro 4 (Petrol)',
          taxInsurance: '@tierMod',
          serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 9.6,
            badges: {
              en: ['Updated 2006+ 1AZ-FE', 'Clean Multi-Point Port Injection'],
              de: ['Verbesserter 1AZ-FE', 'Saubere Saugrohreinspritzung'],
              ru: ['Доработанный 1AZ-FE', 'Надёжный распределённый впрыск']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '1AZ-FE · 1,998 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Simple VVT-i (No Valvematic)', de: 'Reihenvierzylinder Alu · Simples VVT-i (kein Valvematic)', ru: 'Рядный 4-цил. алюминий · Простой VVT-i' } }], note: { en: 'Ultra-simple old-school Toyota petrol with zero turbo, zero direct injection, and zero Valvematic actuator risk — just thirstier.', de: 'Extrem simpler Toyota-Sauger ohne Turbo, ohne Direkteinspritzung und ohne Valvematic — lediglich etwas durstiger.', ru: 'Максимально простой атмосферник Toyota без турбины, прямого впрыска и Valvematic — лишь более прожорливый.' } },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Updated 2006+ 1AZ-FE Chain Engine',
                strengths: [
                  'Revised CA30W 1AZ-FE Specification: Eliminates the early 2001–2003 head bolt thread stripping issue with deeper block threads and port injection.',
                  'Minimal sensor count and clean cold starts even past 250,000 km.',
                  'Routinely reaches 300,000–350,000+ km with regular oil and filter servicing.'
                ],
                watchouts: [
                  'Keep 10,000 km oil changes with quality 5W-30 to prevent oil control ring coking.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick and ask if oil needs topping up between services— high-mile 2.0 VVT-i engines can burn some oil.',
                  'Listen at 60–80 km/h for a rear humming noise from the all-wheel-drive coupling bearing.',
                  'Look around the valve cover edge and water pump for oil or pink coolant weeping, and make sure the exhaust sounds leak-free.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict 10,000 km / 1 yr oil changes & rear AWD differential oil every 40–50k km / 3 yrs',
                    cost: '€170–270',
                    ifIgnored: 'Long oil intervals stick piston rings early & aged rear diff oil howls in AWD',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 4-AT / MT gearbox oil at 60–80k / 5 yrs, swap plugs & check 6-yr aging cover seal + hoses',
                    cost: '€270–440',
                    ifIgnored: 'Hardened rubber valve cover gasket weeps oil & brittle coolant hoses crack',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace leaking valve cover gasket, spark plugs & automatic/diff oil',
                    cost: '€240–400',
                    ifIgnored: 'Burnt oil fumes & premature wear inside gearbox and rear axle (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,000–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Replace water pump & noisy rear AWD coupling bearing',
                    cost: '€450–720',
                    ifIgnored: 'Overheating coolant leaks & seized all-wheel-drive rear unit (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '175,000–225,000 km • 11–13 yrs',
                    action: 'Replace aging exhaust oxygen sensors & keep strict 10,000 km oil checks',
                    cost: '€300–520',
                    ifIgnored: 'Check-engine light, high fuel burn & worn-out catalytic converter',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'orange',
                    km: '205,000–250,000 km • 13–15+ yrs',
                    action: 'Renew clutch or engine mounts & monitor piston-ring oil use',
                    cost: '€600–980',
                    ifIgnored: 'Slipping clutch, cabin rattle & low-oil engine damage if neglected (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–3,200'
                  }
                ]
              },
              de: {
                headline: 'Überarbeiteter 1AZ-FE Kettenmotor ab 2006',
                strengths: [
                  'Behebt die Zylinderkopf-Gewindeprobleme früher 2001–2003er Modelle; langlebige Steuerkette und Saugrohreinspritzung.',
                  'Sehr überschaubare Sensorik und extrem zuverlässig auch im harten Winterbetrieb.',
                  'Erreicht bei regelmäßiger Öl- und Filterwartung problemlos 300.000–350.000+ km.'
                ],
                watchouts: [
                  'Regelmäßige 10.000–12.000 km Ölwechsel mit 5W-30 verhindern Verkokung der Ölabstreifringe.',
                  'Kurze Übersetzung von 5-Gang und 4-AT erhöht Geräuschkulisse und Verbrauch über 120 km/h.',
                  'Auf Brummen bei ca. 60 km/h achten und Hinterachs-/Verteileröl regelmäßig wechseln.'
                ],
                beforeYouBuy: [
                  'Ölmessstab ziehen und fragen, ob zwischen den Inspektionen Öl nachgefüllt werden muss– ältere 2.0 VVT-i können etwas Öl verbrauchen.',
                  'Ventildeckeldichtung und Wasserpumpe auf Feuchtigkeit prüfen und auf einen leisen, dichten Auspuff achten.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10 Tkm / 1 J. Öl wechseln & alle 40–50 Tkm / 3 J. das Hinterachs-Allradöl erneuern',
                    cost: '170–270 €',
                    ifIgnored: 'Lange Intervalle fördern frühen Ölverbrauch & altes Allradöl lässt Lager heulen',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '4-Gang-Automatik- oder Schaltöl (60–80 Tkm / 5 J.) & Kerzen tauschen; 6-J.-Dichtungen prüfen',
                    cost: '270–440 €',
                    ifIgnored: 'Ausgehärtete Ventildeckeldichtung schwitzt Öl & alte Kühlerschläuche werden rissig',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Schwitzende Ventildeckeldichtung, Zündkerzen & Getriebe-/Achsöl wechseln',
                    cost: '240–400 €',
                    ifIgnored: 'Verbrannter Ölgeruch & erhöhter Verschleiß an Automatik und Allrad (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.000–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Wasserpumpe & brummendes Lager der hinteren Allrad-Kupplung tauschen',
                    cost: '450–720 €',
                    ifIgnored: 'Kühlwasserverlust mit Überhitzung oder defekte Allrad-Einheit (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '175.000–225.000 km • 11–13 J.',
                    action: 'Gealterte Lambdasonden ersetzen & Ölstand streng alle 10.000 km prüfen',
                    cost: '300–520 €',
                    ifIgnored: 'Warnleuchte, Mehrverbrauch & geschädigter Katalysator',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '205.000–250.000 km • 13–15+ J.',
                    action: 'Kupplung sowie Motorlager erneuern & eventuellen Ölverbrauch beobachten',
                    cost: '600–980 €',
                    ifIgnored: 'Rutschende Kupplung & Motorschaden bei zu niedrigem Ölstand (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–3.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Улучшенный цепной 1AZ-FE (с 2006 г.)— максимум простоты',
                strengths: [
                  'Усиленная резьба болтов ГБЦ (проблема первых лет 2001–2003 полностью решена) и распределённый впрыск.',
                  'Минимум сложных датчиков и уверенный запуск в любой мороз.',
                  'При базовом ТО со сменой масла и фильтров уверенно ходит 300 000–350 000+ км.'
                ],
                watchouts: [
                  'Для защиты маслосъёмных колец от закоксовки меняйте масло 5W-30 каждые 10 000 км.',
                  'Проверяйте наличие гула сзади на скорости около 60 км/ч.'
                ],
                beforeYouBuy: [
                  'Проверьте уровень масла и спросите о расходе на долив— на больших пробегах мотор 2.0 VVT-i может подъедать масло.',
                  'Осмотрите прокладку клапанной крышки и помпу на подтёки и убедитесь в герметичности выхлопа.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло строго раз в 10 тыс. / 1 год и замена масла заднего редуктора каждые 40–50 тыс. / 3 года',
                    cost: '€170–270',
                    ifIgnored: 'Редкие ТО вызывают ранний угар масла, а старое масло 4WD приводит к гулу',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 4-АКПП / МКПП (60–80 тыс. / 5 лет), свечи и проверить дубеющие к 6 годам шланги и прокладки',
                    cost: '€270–440',
                    ifIgnored: 'Засохшая прокладка клапанной крышки течёт, а старые патрубки трескаются',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить прокладку клапанной крышки, свечи и масло в АКПП/редукторе',
                    cost: '€240–400',
                    ifIgnored: 'Запах горелого масла и износ узлов трансмиссии (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 000–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Заменить водяной насос и шумящий подшипник задней муфты полного привода',
                    cost: '€450–720',
                    ifIgnored: 'Перегрев из-за утечки антифриза или поломка муфты (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '175 000–225 000 км • 11–13 лет',
                    action: 'Заменить уставшие лямбда-зонды и менять масло каждые 10 000 км',
                    cost: '€300–520',
                    ifIgnored: 'Ошибка двигателя, повышенный расход и выход катализатора из строя (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'orange',
                    km: '205 000–250 000 км • 13–15+ лет',
                    action: 'Обновить сцепление, опоры двигателя и контролировать угар масла',
                    cost: '€600–980',
                    ifIgnored: 'Пробуксовка сцепления и голодание двигателя при упущенном уровне (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–3 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.3,
            badges: {
              en: ['5-MT / Indestructible 4-AT', 'Simple Electromagnetic AWD'],
              de: ['5-Gang / Unzerstörbare 4-AT', 'Einfache Allrad-Magnetkupplung'],
              ru: ['5-МКПП / Неубиваемый 4-АКПП', 'Простая электромуфта привода']
            }
          },
          buildQualityRust: {
            score: 8.0,
            badges: {
              en: ['Tough SUV Axles & Bushings', 'Check Subframe & Mounts'],
              de: ['Robuste SUV-Achsen & Lager', 'Achsträger & Auspuffhalter'],
              ru: ['Выносливая подвеска RAV4', 'Проверка подрамника и крепежа']
            }
          },
          electronicsReliability: {
            score: 9.3,
            badges: {
              en: ['Minimal Early Sensor Setup', 'Proven Japanese Wiring'],
              de: ['Minimale frühe Sensorik', 'Robuste Japan-Elektrik'],
              ru: ['Минимум ранних датчиков', 'Надёжная японская электрика']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['Comfortable Upright Posture', 'Firm Short-Bump SUV Bounce'],
              de: ['Bequeme hohe Sitzposition', 'Poltrig auf kurzen Stößen'],
              ru: ['Удобная высокая посадка', 'Жёстче на мелких неровностях']
            }
          },
          interiorQualityFeatures: {
            score: 5.7,
            badges: {
              en: ['Logical Oversized Controls', 'Scratches Easily On Early Trim'],
              de: ['Große griffige Drehregler', 'Kratzempfindliches Hartplastik'],
              ru: ['Удобные крупные регуляторы', 'Маркий жёсткий пластик салона']
            }
          },
          visibilityManeuverability: {
            score: 8.6,
            badges: {
              en: ['Tight 10.2 m SUV Turn', 'High View • Side-Swing Tailgate'],
              de: ['Nur 10,2 m Wendekreis', 'Hohe Übersicht • Seitliche Hecktür'],
              ru: ['Разворот 10,2 м', 'Высокая посадка • Дверь вбок']
            }
          },
          safetyProtection: {
            score: 6.5,
            badges: {
              en: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ Stability'],
              de: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ ESP'],
              ru: ['Euro NCAP 4★ (2006)', '7 подушек + VSC+ (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Sliding & Reclining Rear Seats', 'High Step-In Door Access'],
              de: ['Verschieb- & neigbarer Fond', 'Bequemer hoher SUV-Einstieg'],
              ru: ['Сдвижные и наклонные спинки', 'Удобный высокий вход в салон']
            }
          },
          interiorBootSpace: {
            score: 9.3,
            badges: {
              en: ['586L Boot (1,752L Max)', 'Deep Underfloor Storage'],
              de: ['586L Kofferraum (1.752L Max)', 'Großes Unterbodenfach'],
              ru: ['Багажник 586–1 752 л', 'Глубокий подпол багажника']
            }
          },
          payloadTowing: {
            score: 9.2,
            badges: {
              en: ['540 kg Payload', '2,000 kg (5-MT) / 1,500 kg (4-AT)'],
              de: ['540 kg Zuladung', '2.000 kg (5-MT) / 1.500 kg (4-AT)'],
              ru: ['Нагрузка 540 кг', 'Прицеп: 2 000 / 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.2,
            badges: {
              en: ['0–100 km/h: 10.6 s', '185 km/h Top Speed'],
              de: ['0–100 km/h: 10,6 s', '185 km/h Spitze'],
              ru: ['0–100 км/ч: 10,6 с', 'Макс. 185 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.8,
            badges: {
              en: ['194 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['194 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['194 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['4WD Lock Snow & Mud Traction', 'Predictable SUV Body Roll'],
              de: ['4WD-Lock Winter-Traktion', 'Vorhersehbare Seitenneigung'],
              ru: ['Блокировка 4WD зимой и в грязи', 'Предсказуемые крены SUV']
            }
          },
          brakingPerformance: {
            score: 5.7,
            badges: {
              en: ['100–0 km/h: 37.5 m', 'Average Pedal Feel • SUV Weight'],
              de: ['100–0 km/h: 37,5 m', 'Mittlerer Druckpunkt • SUV-Masse'],
              ru: ['100–0 км/ч: 37,5 м', 'Средняя информативность • Масса SUV']
            }
          },
          efficiencyFuel: {
            score: 5.0,
            badges: {
              en: ['Thirsty (9.1 L/100km)', '5-MT / 4-AT High RPM'],
              de: ['Durstig (9,1 L/100km)', 'Höhere Autobahn-Drehzahl'],
              ru: ['Прожорливый (9,1 л/100 км)', 'Нет 6-й передачи']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['2.0L High CO2 Tax • Euro 4', 'Moderate SUV Insurance'],
              de: ['Höhere CO2-Steuer • Euro 4', 'Faire SUV-Versicherung'],
              ru: ['Повышенный налог CO2 • Euro 4', 'Умеренная страховка SUV']
            }
          },
          maintenanceRepairCosts: {
            score: 8.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km / 4 yrs', de: 'Alle 60.000 km / 4 J.', ru: 'Каждые 60 000 км / 4 г.' }, action: { en: 'Change 4-speed ATF (if auto) plus AWD transfer case & rear diff oil', de: '4-Gang-Automatiköl (falls AT) sowie Verteiler- & Hinterachsöl wechseln', ru: 'Замена масла в 4-АКПП (если есть), раздатке и заднем редукторе' }, cost: '€180–300' },
                { when: { en: 'Every 90,000 km', de: 'Alle 90.000 km', ru: 'Каждые 90 000 км' }, action: { en: 'Replace iridium spark plugs & serpentine drive belt', de: 'Iridium-Zündkerzen & Keilrippenriemen ersetzen', ru: 'Замена иридиевых свечей и приводного ремня' }, cost: '€160–240' },
                { when: { en: '150,000 km / 10 yrs', de: '150.000 km / 10 J.', ru: '150 000 км / 10 лет' }, action: { en: 'Coolant flush & inspect rubber steering rack boots', de: 'Kühlmittel wechseln & Lenkmanschetten prüfen', ru: 'Замена антифриза и проверка пыльников рулевой рейки' }, cost: '€130–200' }
              ],
              critical: [
                { when: { en: '160,000–240,000 km', de: '160.000–240.000 km', ru: '160 000–240 000 км' }, action: { en: 'Monitor oil consumption (stuck oil-control rings on neglected cars)', de: 'Ölverbrauch beobachten (verkokte Kolbenringe bei Wartungsstau)', ru: 'Контроль расхода масла (залегание колец при редких ТО)' }, cost: '€1,200–2,000', risk: { en: 'Low oil starvation damages crankshaft bearings & catalytic converter', de: 'Ölmangel schädigt Kurbelwellenlager und Katalysator', ru: 'Масляное голодание губит вкладыши и катализатор' }, damage: '€2,500–4,000' },
                { when: { en: '140,000–200,000 km', de: '140.000–200.000 km', ru: '140 000–200 000 км' }, action: { en: 'Rear AWD electromagnetic coupling bearing replacement', de: 'Lager der hinteren Allrad-Magnetkupplung erneuern', ru: 'Замена подшипника электромуфты заднего привода' }, cost: '€280–450', risk: { en: 'Progressive howling noise and seized coupling unit', de: 'Starkes Heulen bis zum Defekt der kompletten Kupplung', ru: 'Нарастающий вой и выход из строя всей муфты' }, damage: '€1,100–1,600' }
              ]
            },
            badges: {
              en: ['Very Simple 4-AT / 5-MT Upkeep', 'Affordable Japanese Parts'],
              de: ['Simpler 4-AT-/5-MT-Service', 'Günstige Japan-Ersatzteile'],
              ru: ['Простое ТО коробки и мотора', 'Доступные запчасти Toyota']
            }
          },
          depreciationResale: {
            score: 9.1,
            badges: {
              en: ['Affordable Toyota AWD', 'Strong Used Demand'],
              de: ['Gefragter Allrad-Einstieg', 'Hoher Werterhalt'],
              ru: ['Популярный полный привод', 'Стабильная цена б/у']
            }
          }
        }
      },
      {
        id: '2.2-d4d-136',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel-awd',
        dossierGroup: 'diesel-awd-mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 136,
        shortTitle: 'RAV4 2.2 D-4D (136)',
        fullName: '2007 Toyota RAV4 2.2 D-4D',
        engineBadge: '2.2L D-4D AWD • 136 HP',
        engineSubLabel: {
          en: '2AD-FTV 2.2L Chain Turbo-Diesel (2006–2009) • 6-MT • 310 Nm • AWD',
          de: '2AD-FTV 2.2L Ketten-Turbodiesel (2006–2009) • 6-Gang • 310 Nm • Allrad',
          ru: '2AD-FTV 2.2L Цепной турбодизель (2006–2009) • 6-ст. МКПП • 310 Н·м • AWD'
        },
        rarityLabel: {
          en: 'NO-DPF DIESEL',
          de: 'DIESEL OHNE DPF',
          ru: 'ДИЗЕЛЬ БЕЗ DPF'
        },
        originalMsrp: {
          en: '€28,200 New',
          de: '28.200 € Neu',
          ru: '€28 200 новый'
        },
        estUsedPrice: '€7,200',
        perkLabel: {
          en: '✦ 310 Nm Torque • Often No Factory DPF (Euro 4) • 2,000 kg Braked Towing',
          de: '✦ 310 Nm Drehmoment • Oft ab Werk ohne DPF (Euro 4) • 2.000 kg Anhängelast',
          ru: '✦ Тяга 310 Н·м • Часто без сажевого фильтра с завода • Буксировка 2 000 кг'
        },
        remarkablePositives: {
          en: [
            'OFTEN NO CLOGGING DPF (EURO 4)',
            'SIMPLER SOLENOID INJECTORS',
            'STRONG 310 NM DIESEL PULL',
            '2,000 KG BRAKED TOWING',
            '7.1 L/100KM SUV ECONOMY'
          ],
          de: [
            'OFT AB WERK OHNE DPF (EURO 4)',
            'ROBUSTERE MAGNET-INJEKTOREN',
            'STARKE 310 NM DURCHZUGSKRAFT',
            '2.000 KG ANHÄNGELAST',
            '7,1 L/100KM SUV-VERBRAUCH'
          ],
          ru: [
            'ЧАСТО БЕЗ DPF С ЗАВОДА (ЕВРО-4)',
            'ПРОСТЫЕ ФОРСУНКИ (НЕ ПЬЕЗО)',
            'УВЕРЕННАЯ ТЯГА 310 Н·М',
            'БУКСИРОВКА ДО 2 000 КГ',
            'РАСХОД 7,1 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'PRE-2009 2AD HEAD GASKET RISK',
            'HIGH 2.2L DIESEL ROAD TAX',
            'EURO 4 CITY ZONE LIMITS',
            'SIDE-HINGED TAILGATE NEEDS SPACE'
          ],
          de: [
            'ZYLINDERKOPFDICHTUNG VOR 2009 PRÜFEN',
            'HOHE 2.2L DIESEL-STEUER',
            'EURO-4-UMWELTZONEN',
            'HECKTÜR BRAUCHT PLATZ HINTEN'
          ],
          ru: [
            'РИСК ПРОКЛАДКИ ГБЦ ДО 2009 Г.',
            'ВЫСОКИЙ НАЛОГ НА 2.2 ДИЗЕЛЬ',
            'ОГРАНИЧЕНИЯ ЕВРО-4 В ГОРОДАХ',
            'РАСПАШНАЯ ДВЕРЬ ТРЕБУЕТ МЕСТА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 7.7,
          spacePracticality: 9.0,
          performanceDynamics: 7.0,
          runningCostsTco: 7.3
        },
        specOverrides: {
          engineName: { en: '2.2L I4 D-4D Diesel (Chain)', de: '2.2L Reihenvierzylinder Diesel', ru: '2.2L R4 D-4D Дизель (Цепь)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '2,000 kg',
          sprint0100: '10.5 s',
          topSpeed: '180 km/h',
          peakTorque: '310 Nm @ 2,000 rpm',
          passingPunch: { en: 'Strong Mid-Range Pull', de: 'Kräftiger Durchzug', ru: 'Уверенная тяга в середине' },
          realWorldFuel: '7.1 L/100km',
          tankRange: '60 L (~845 km)',
          euroNorm: 'Euro 4 (Diesel)',
          taxInsurance: '@tierHigh',
          serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 6.7,
            badges: {
              en: ['No D-CAT 5th Injector', 'Check Head Gasket History'],
              de: ['Ohne D-CAT-Komplexität', 'Kopfdichtung prüfen'],
              ru: ['Без системы D-CAT', 'Проверить ГБЦ до 2009 г.']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2AD-FTV · 2,231 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Open-Deck Block', de: 'Reihenvierzylinder Alu-Diesel · Open-Deck-Block', ru: 'Рядный 4-цил. алюминиевый дизель' } }], note: { en: 'Pre-2009 2AD-FTV engines are notorious for head-gasket blow-by and coolant loss; verify updated block/gasket history before buying.', de: 'Frühe 2AD-FTV bis 2009 sind bekannt für Zylinderkopfdichtungs-Schäden; nachweisliche Überholung beim Kauf prüfen.', ru: 'Ранние 2AD-FTV до 2009 года склонны к пробою прокладки ГБЦ; проверяйте историю ремонта и отсутствие газов в ОЖ.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Simple 136 HP 2AD-FTV Diesel, Marked by Pre-2009 Head Gasket Sensitivity',
                strengths: [
                  'Simple Exhaust System: Uses durable solenoid injectors without a complex 5th-injector catalyst.',
                  'Serviceable Solenoid Injectors: Uses durable Denso solenoid injectors rather than costly unrepairable piezo injectors.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Piston ring carboning and alloy block distortion can blow the head gasket (~120–180k km)— check coolant tank staining or Toyota replacement records.',
                  'Urban driving rapidly plugs the EGR cooler; periodic cleaning keeps power consistent.'
                ],
                beforeYouBuy: [
                  'Inspect the white plastic coolant expansion bottle and surrounding hoses for pink crusty spray marks— early 2.2 diesels can push coolant out under highway load if the head gasket weeps.',
                  'Accelerate cleanly from 1,500 rpm in 3rd gear and check for heavy black soot or hesitation from a clogged exhaust recirculation valve.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, clean fuel filter & rear AWD diff oil every 40–50k km / 3 yrs (check coolant bottle cleanliness early)',
                    cost: '€210–340',
                    ifIgnored: 'Short city trips choke exhaust valve/filter early & stale AWD oil grinds rear coupling',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Preventive exhaust-valve clean (~80k), change gearbox oil & inspect 6-yr aging rubber hoses/belt',
                    cost: '€310–510',
                    ifIgnored: 'Carbon buildup triggers rough morning starts & perished 6-yr hoses leak boost/coolant',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean sooted exhaust recirculation valve & replace fuel pressure valve',
                    cost: '€260–440',
                    ifIgnored: 'Hard morning starts, thick smoke & warning lights (components & fluids also degrade over years)',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'red',
                    km: '140,000–190,000 km • 9–11 yrs',
                    action: 'Monitor coolant closely & replace weeping head gasket before overheating',
                    cost: '€1,300–2,100',
                    ifIgnored: 'Coolant blows out under load & warps aluminum engine block (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,500–5,200'
                  },
                  {
                    tier: 'orange',
                    km: '165,000–215,000 km • 11–13 yrs',
                    action: 'Replace rattling dual-mass flywheel, clutch & rear AWD coupling bearing',
                    cost: '€1,050–1,650',
                    ifIgnored: 'Heavy pedal vibration, slipping clutch & howling rear differential (components & fluids also degrade over years)',
                    damageCost: '€2,100–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '205,000–250,000 km • 13–15+ yrs',
                    action: 'Test/recondition aging diesel injectors, glow plugs & starter motor',
                    cost: '€750–1,300',
                    ifIgnored: 'Knocking cold idle, poor fuel economy & stranded winter starts',
                    damageCost: '€1,800–2,800'
                  }
                ]
              },
              de: {
                headline: 'Unkomplizierter 136-PS-2AD-FTV-Diesel — Kopfdichtungs-Risiko vor 2009 beachten',
                strengths: [
                  'Robuste Magnetventil-Injektoren ohne empfindlichen 5.-Injektor-Abgaskatalysator.',
                  'Reparaturfreundlicher und haltbarer als die teuren Piezo-Injektoren des Topmodells.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Bei ca. 120–180 Tkm droht Kühlmittelverlust über den Ausgleichsbehälter— auf Toyota-Tauschblock/Rechnung achten.',
                  'Kurzstrecken setzen AGR-Kanäle zu; regelmäßiges Reinigen schützt vor Notlauf.'
                ],
                beforeYouBuy: [
                  'Kühlwasser-Ausgleichsbehälter und Umgebung nach rosa Spritzspuren absuchen– frühe 2.2-Diesel drücken bei alternder Kopfdichtung unter Autobahnlast Kühlwasser heraus.',
                  'Aus 1.500 U/min im 3. Gang sauber hochbeschleunigen: Starker Ruß oder Ruckeln zeigen meist ein verkoktes Abgasventil (AGR).',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, Dieselfilter & alle 40–50 Tkm / 3 J. Allradöl wechseln (Kühlmittelbehälter früh beobachten)',
                    cost: '210–340 €',
                    ifIgnored: 'Kurzstrecken verrußen Ventil/Filter früh & altes Allradöl verschleißt Kupplung',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Vorbeugende AGR-Reinigung (~80 Tkm), Getriebeöl wechseln & 6-J.-Gummischläuche/Riemen prüfen',
                    cost: '310–510 €',
                    ifIgnored: 'Ruß führt zu Kaltstart-Ruckeln & gealterte 6-J.-Schläuche verlieren Ladedruck/Wasser',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Verkoktes Abgasventil (AGR) reinigen & Kraftstoff-Druckregelventil tauschen',
                    cost: '260–440 €',
                    ifIgnored: 'Schlechter Kaltstart, starker Qualm & Notlauf (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–190.000 km • 9–11 J.',
                    action: 'Kühlwasserstand beobachten & schwitzende Zylinderkopfdichtung früh erneuern',
                    cost: '1.300–2.100 €',
                    ifIgnored: 'Kühlmittelverlust bei Autobahntempo verzieht den Alublock (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.500–5.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '165.000–215.000 km • 11–13 J.',
                    action: 'Zweimassenschwungrad, Kupplung & hinteres Allrad-Lager ersetzen',
                    cost: '1.050–1.650 €',
                    ifIgnored: 'Starkes Schütteln beim Anfahren & lautes Brummen von hinten (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.100–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '205.000–250.000 km • 13–15+ J.',
                    action: 'Injektoren prüfen, Glühkerzen erneuern & Anlasser überholen',
                    cost: '750–1.300 €',
                    ifIgnored: 'Lautes Nageln, hoher Verbrauch & liegenbleibender Winterstart (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Простой дизель 2AD-FTV (136 л.с.), но с риском прокладки ГБЦ до 2009 года',
                strengths: [
                  'Простая выпускная система без капризного катализатора DPNR и 5-й форсунки прожига.',
                  'Надёжные электромагнитные форсунки дешевле и проще в обслуживании.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Известная слабость ранних 2AD— проверяйте отсутствие следов выброса антифриза из бачка и историю замены мотора по гарантии.',
                  'Нагар в клапане EGR и впускном коллекторе: Требует периодической чистки при езде по городу.'
                ],
                beforeYouBuy: [
                  'Осмотрите расширительный бачок и пространство вокруг на розовый налёт— на ранних 2.2 дизелях под нагрузкой прокладка ГБЦ может выдавливать антифриз.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.',
                  'Проверить уровень антифриза, форсунки и патрубки турбины на отсутствие нагара и подтёков масла.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год малозольное масло, топливный фильтр и масло заднего редуктора раз в 40–50 тыс. / 3 года (рано следить за расширительным бачком)',
                    cost: '€210–340',
                    ifIgnored: 'Короткие поездки рано забивают ЕГР и сажевый фильтр, а старое масло губит муфту 4WD',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Профилактическая чистка клапана ЕГР (~80 тыс.), масло КПП и осмотр стареющих к 6 годам шлангов',
                    cost: '€310–510',
                    ifIgnored: 'Нагар мешает запуску, а постаревшие от времени патрубки дают утечку наддува или ОЖ',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан рециркуляции (ЕГР) и заменить клапан давления топлива',
                    cost: '€260–440',
                    ifIgnored: 'Трудный утренний запуск, чёрный дым и ошибки на панели (узлы и жидкости также стареют с годами)',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'red',
                    km: '140 000–190 000 км • 9–11 лет',
                    action: 'Следить за антифризом и вовремя сменить прокладку головки блока цилиндров',
                    cost: '€1 300–2 100',
                    ifIgnored: 'Выброс антифриза на трассе и коробление алюминиевого блока (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€3 500–5 200'
                  },
                  {
                    tier: 'orange',
                    km: '165 000–215 000 км • 11–13 лет',
                    action: 'Заменить маховик, сцепление и шумящий подшипник задней муфты',
                    cost: '€1 050–1 650',
                    ifIgnored: 'Вибрация педали, пробуксовка сцепления и гул сзади (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 100–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '205 000–250 000 км • 13–15+ лет',
                    action: 'Проверить форсунки, свечи накала и обслужить стартер',
                    cost: '€750–1 300',
                    ifIgnored: 'Жёсткий стук на холодную, рост расхода и отказ запуска в мороз (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.3,
            badges: {
              en: ['Sturdy 6-MT + AWD Lock', '310 Nm Clutch & DMF Watch'],
              de: ['Robustes 6-Gang + Allrad', 'Kupplung & ZMS beachten'],
              ru: ['Прочная 6-МКПП + AWD', 'Контроль сцепления и маховика']
            }
          },
          buildQualityRust: {
            score: 8.0,
            badges: {
              en: ['Tough SUV Axles & Bushings', 'Check Subframe & Mounts'],
              de: ['Robuste SUV-Achsen & Lager', 'Achsträger & Auspuffhalter'],
              ru: ['Выносливая подвеска RAV4', 'Проверка подрамника и крепежа']
            }
          },
          electronicsReliability: {
            score: 8.9,
            badges: {
              en: ['Simpler Solenoid Controls', 'Watch Alternator At High Km'],
              de: ['Einfache Magnetventil-ECU', 'Lichtmaschine bei hoher Laufleistung'],
              ru: ['Простые электромагнитные цепи', 'Ресурс генератора на пробеге']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['Comfortable Upright Posture', 'Firm Short-Bump SUV Bounce'],
              de: ['Bequeme hohe Sitzposition', 'Poltrig auf kurzen Stößen'],
              ru: ['Удобная высокая посадка', 'Жёстче на мелких неровностях']
            }
          },
          interiorQualityFeatures: {
            score: 5.7,
            badges: {
              en: ['Logical Oversized Controls', 'Simpler Pre-Facelift Trim'],
              de: ['Große griffige Drehregler', 'Schlichteres Vorfacelift-Trim'],
              ru: ['Удобные крупные регуляторы', 'Скромная отделка до рестайлинга']
            }
          },
          visibilityManeuverability: {
            score: 8.6,
            badges: {
              en: ['Tight 10.2 m SUV Turn', 'High View • Side-Swing Tailgate'],
              de: ['Nur 10,2 m Wendekreis', 'Hohe Übersicht • Seitliche Hecktür'],
              ru: ['Разворот 10,2 м', 'Высокая посадка • Дверь вбок']
            }
          },
          safetyProtection: {
            score: 6.5,
            badges: {
              en: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ Stability'],
              de: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ ESP'],
              ru: ['Euro NCAP 4★ (2006)', '7 подушек + VSC+ (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Sliding & Reclining Rear Seats', 'High Step-In Door Access'],
              de: ['Verschieb- & neigbarer Fond', 'Bequemer hoher SUV-Einstieg'],
              ru: ['Сдвижные и наклонные спинки', 'Удобный высокий вход в салон']
            }
          },
          interiorBootSpace: {
            score: 9.3,
            badges: {
              en: ['586L Boot (1,752L Max)', 'Deep Underfloor Storage'],
              de: ['586L Kofferraum (1.752L Max)', 'Großes Unterbodenfach'],
              ru: ['Багажник 586–1 752 л', 'Глубокий подпол багажника']
            }
          },
          payloadTowing: {
            score: 9.3,
            badges: {
              en: ['540 kg Payload', '750 / 2,000 kg Towing'],
              de: ['540 kg Zuladung', '750 / 2.000 kg Anhängelast'],
              ru: ['Нагрузка 540 кг', 'Прицеп: 750 / 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.2,
            badges: {
              en: ['0–100 km/h: 10.5 s', '180 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '180 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5 с', 'Макс. 180 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.6,
            badges: {
              en: ['310 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['310 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['310 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 6.0,
            badges: {
              en: ['4WD Lock Snow & Mud Traction', 'Predictable SUV Body Roll'],
              de: ['4WD-Lock Winter-Traktion', 'Vorhersehbare Seitenneigung'],
              ru: ['Блокировка 4WD зимой и в грязи', 'Предсказуемые крены SUV']
            }
          },
          brakingPerformance: {
            score: 5.7,
            badges: {
              en: ['100–0 km/h: 37.5 m', 'Average Pedal Feel • SUV Weight'],
              de: ['100–0 km/h: 37,5 m', 'Mittlerer Druckpunkt • SUV-Masse'],
              ru: ['100–0 км/ч: 37,5 м', 'Средняя информативность • Масса SUV']
            }
          },
          efficiencyFuel: {
            score: 7.3,
            badges: {
              en: ['7.1 L/100km', 'Euro 4 City Restrictions'],
              de: ['7,1 L/100km', 'Euro-4-Umweltzonen'],
              ru: ['7,1 л/100 км', 'Класс Евро-4']
            }
          },
          taxInsuranceNorm: {
            score: 5.8,
            badges: {
              en: ['High 2.2L Euro 4 Diesel Tax', 'Urban Euro 4 City Restrictions'],
              de: ['Hohe 2.2-Euro-4-Dieselsteuer', 'Euro-4-Fahrverbot beachten'],
              ru: ['Высокий налог 2,2 Euro 4', 'Ограничения Euro 4 в городах']
            }
          },
          maintenanceRepairCosts: {
            score: 6.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Clean EGR valve & intake ports; refresh 6-MT, transfer & rear diff oil', de: 'AGR-Ventil reinigen; 6-Gang-, Verteiler- & Hinterachsöl wechseln', ru: 'Чистка клапана EGR; замена масла в МКПП, раздатке и редукторе' }, cost: '€240–380' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace diesel fuel filter & drain water separator', de: 'Dieselfilter wechseln & Wasserabscheider entleeren', ru: 'Замена топливного фильтра и слив конденсата' }, cost: '€90–140' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: '2AD-FTV head gasket & cylinder block face erosion (pre-2009)', de: '2AD-FTV Zylinderkopfdichtung & Block-Erosion (bis 2009)', ru: 'Прокладка ГБЦ и эрозия привалочной плоскости блока (до 2009)' }, cost: '€1,800–2,800', risk: { en: 'Coolant blown out of expansion tank and warped aluminium block', de: 'Kühlmittelverlust aus Ausgleichsbehälter bis zum kapitalen Motorschaden', ru: 'Выдавливание антифриза и перегрев алюминиевого блока' }, damage: '€3,500–5,500' },
                { when: { en: '140,000–200,000 km', de: '140.000–200.000 km', ru: '140 000–200 000 км' }, action: { en: 'Dual-mass flywheel (DMF) + clutch kit & Denso SCV fuel valve', de: 'Zweimassenschwungrad (ZMS) + Kupplung & Denso-Saughubsteuerventil', ru: 'Двухмассовый маховик + сцепление и клапан SCV Denso' }, cost: '€1,100–1,600', risk: { en: 'Heavy idle rattle, hard cold starts, and gearbox input shaft wear', de: 'Starkes Leerlauf-Rasseln, Startprobleme und Getriebelagerschaden', ru: 'Стук на холостых, тяжёлый пуск и износ первичного вала КПП' }, damage: '€2,000–2,800' }
              ]
            },
            badges: {
              en: ['Cheaper Solenoid Injectors', 'Watch Head Gasket & DMF Cost'],
              de: ['Günstigere Magnet-Injektoren', 'Kopfdichtung & ZMS beachten'],
              ru: ['Более дешёвые форсунки', 'Риск прокладки ГБЦ и маховика']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Strong Tow/Export Market', 'Discounted for Age/Euro 4'],
              de: ['Gefragter Zugfahrzeug-Markt', 'Preisabschlag wegen Euro 4'],
              ru: ['Спрос для буксировки', 'Снижение цены из-за Евро-4']
            }
          }
        }
      },
      {
        id: '2.2-d4d-150',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [
          { id: '6-mt-dmf', isDefault: true },
          {
            id: 'aisin-6at',
            estUsedPrice: '€10,700',
            specOverrides: { sprint0100: '10.8 s', topSpeed: '185 km/h', realWorldFuel: '7.6 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.1,
                badges: {
                  en: ['0–100 km/h: 10.8 s (6-AT)', '185 km/h Top Speed'],
                  de: ['0–100 km/h: 10,8 s (6-AT)', '185 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,8 s (6-AT)', 'Макс. 185 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.8,
                badges: {
                  en: ['7.6 L/100km (6-AT)'],
                  de: ['7,6 L/100km (6-AT)'],
                  ru: ['7,6 L/100km (6-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel-awd',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'rav4DieselUpkeep',
            'rav4SideTailgate',
            'rav4HardPlastics'
          ]
        },
        dossierGroup: 'diesel-conv-auto',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        shortTitle: 'RAV4 2.2 D-4D (150)',
        fullName: '2010 Toyota RAV4 2.2 D-4D',
        engineBadge: '2.2L D-4D AWD • 150 HP',
        engineSubLabel: {
          en: '2AD-FTV/FHV 2.2L Chain Diesel (2009–2013) • 6-MT / Opt. 6-AT • 340 Nm • AWD',
          de: '2AD-FTV/FHV 2.2L Kettendiesel (2009–2013) • 6-Gang / Opt. 6-AT • 340 Nm • Allrad',
          ru: '2AD-FTV/FHV 2.2L Цепной дизель (2009–2013) • 6-ст. МКПП / Опц. 6-АКПП • 340 Н·м • AWD'
        },
        rarityLabel: {
          en: 'TOWING WORKHORSE',
          de: 'BELIEBTESTER DIESEL',
          ru: 'ЛУЧШИЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€29,900 New',
          de: '29.900 € Neu',
          ru: '€29 900 новый'
        },
        estUsedPrice: '€9,800',
        perkLabel: {
          en: '✦ Revised 2009+ 2.2 Block • 340 Nm & 2,000 kg Towing • Optional 6-Speed Auto',
          de: '✦ Überarbeiteter 2.2-Motor (ab 2009) • 340 Nm & 2.000 kg Zuglast • Opt. 6-AT',
          ru: '✦ Доработанный дизель 2.2 (с 2009 г.) • 340 Н·м и прицеп 2 000 кг • Опц. 6-АКПП'
        },
        remarkablePositives: {
          en: [
            'REVISED 2009+ GASKET SPEC',
            'STRONG 340 NM TORQUE',
            '6.8 L/100KM ECONOMY (6-MT)',
            '2,000 KG BRAKED TOWING',
            'OPTIONAL 6-SPEED AUTOMATIC'
          ],
          de: [
            'ÜBERARBEITETER BLOCK AB 2009',
            'STARKE 340 NM DREHMOMENT',
            '6,8 L/100KM VERBRAUCH (6-MT)',
            '2.000 KG ANHÄNGELAST',
            'OPTIONALE 6-STUFEN-AUTOMATIK'
          ],
          ru: [
            'ДОРАБОТАННЫЙ БЛОК С 2009 Г.',
            'ОТЛИЧНАЯ ТЯГА 340 Н·М',
            'РАСХОД 6,8 Л/100 КМ (6-МКПП)',
            'БУКСИРОВКА ДО 2 000 КГ',
            'ОПЦИОНАЛЬНЫЙ 6-СТ. АВТОМАТ'
          ]
        },
        notableNegatives: {
          en: [
            'DPF & EGR DISLIKE SHORT TRIPS',
            'HIGH 2.2L DIESEL ROAD TAX',
            'EURO 5 CITY RESTRICTIONS',
            'SIDE-HINGED TAILGATE NEEDS SPACE'
          ],
          de: [
            'DPF & AGR BEI KURZSTRECKE',
            'HOHE 2.2L DIESEL-STEUER',
            'EURO-5-UMWELTZONEN',
            'HECKTÜR BRAUCHT PLATZ HINTEN'
          ],
          ru: [
            'DPF И EGR НЕ ЛЮБЯТ ПРОБКИ',
            'ВЫСОКИЙ НАЛОГ НА 2.2 ДИЗЕЛЬ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ГОРОДАХ',
            'РАСПАШНАЯ ДВЕРЬ ТРЕБУЕТ МЕСТА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.4,
          comfortCabin: 7.8,
          spacePracticality: 9.1,
          performanceDynamics: 7.2,
          runningCostsTco: 7.5
        },
        specOverrides: {
          engineName: { en: '2.2L I4 D-4D Diesel (Chain)', de: '2.2L Reihenvierzylinder Diesel', ru: '2.2L R4 D-4D Дизель (Цепь)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@torqueConv',
          towingBraked: '2,000 kg',
          sprint0100: '10.2 s',
          topSpeed: '190 km/h',
          peakTorque: '340 Nm @ 2,000 rpm',
          passingPunch: { en: 'Effortless 340 Nm Surge', de: 'Souveräner 340-Nm-Durchzug', ru: 'Уверенная тяга 340 Н·м' },
          realWorldFuel: '6.8 L/100km',
          tankRange: '60 L (~880 km)',
          euroNorm: 'Euro 5 (Diesel)',
          taxInsurance: '@tierModHigh',
          serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.5,
            badges: {
              en: ['Updated 2009+ 2.2 Block', 'Revised Euro 5 Head Gasket Spec'],
              de: ['Überarb. 2.2 Block (2009+)', 'Überarbeitete Euro-5-Kopfdichtung'],
              ru: ['Обновл. блок 2.2 (2009+)', 'Доработанная прокладка ГБЦ Euro 5']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2AD-FTV (Rev. 2009+) · 2,231 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Revised Pistons & Gasket', de: 'Reihenvierzylinder Alu-Diesel · Überarbeitete Dichtung', ru: 'Рядный 4-цил. дизель · Доработанная ГБЦ (2009+)' } }], note: { en: 'Significantly more dependable than pre-2009 2AD diesels thanks to revised head gasket and pistons; pairs nicely with the tough Aisin 6-AT.', de: 'Deutlich standfester als frühe 2AD-Diesel dank verbesserter Kopfdichtung; harmoniert sehr gut mit der robusten Aisin-6-AT.', ru: 'Гораздо надёжнее ранних 2AD благодаря доработанной прокладке ГБЦ; отлично сочетается с крепким 6-ст. автоматом Aisin.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Updated Euro 5 Facelift 2.2L D-4D— Solves Early Gasket Issues & Adds Optional 6-AT',
                strengths: [
                  'Corrected the early 2006–2008 carbon-induced head gasket failure, making facelift units far tougher.',
                  'Pulls cleanly from low rpm for 2,000 kg trailers and relaxed 130 km/h Autobahn cruising.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.',
                  'Check glow plugs, injectors, and intercooler boost hoses for leaks or age wear.'
                ],
                beforeYouBuy: [
                  'Ask how the car was driven: mainly short city trips clog the exhaust recirculation valve and soot filter quickly on this 2.2 diesel.',
                  'Try starting the engine warm and cold to make sure it catches right away— slow starting often points to a worn fuel pump pressure valve.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, clean fuel filter & rear AWD diff oil every 40–50k km / 3 yrs (plus 6-AT auto oil if equipped)',
                    cost: '€210–340',
                    ifIgnored: 'Short city trips choke exhaust valve/filter early & stale AWD oil grinds rear coupling',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Preventive exhaust-valve clean (~80k), change gearbox oil & inspect 6-yr aging rubber hoses/belt',
                    cost: '€310–510',
                    ifIgnored: 'Carbon buildup triggers rough morning starts & perished 6-yr hoses leak boost/coolant',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean exhaust recirculation valve & swap fuel pump pressure control valve',
                    cost: '€280–460',
                    ifIgnored: 'Rough idle, stalling after cold start & blocked soot filter (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Force-clean soot filter if needed & replace rear AWD coupling bearing',
                    cost: '€480–820',
                    ifIgnored: 'Dashboard limp mode & loud grinding from rear all-wheel drive (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–220,000 km • 11–13 yrs',
                    action: 'Replace worn dual-mass flywheel / clutch or service 6-speed auto fluid',
                    cost: '€950–1,550',
                    ifIgnored: 'Judder on hill starts or harsh shifts under towing load (components & fluids also degrade over years)',
                    damageCost: '€2,000–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '205,000–250,000 km • 13–15+ yrs',
                    action: 'Check diesel injectors, water pump & glow plugs before deep winter',
                    cost: '€750–1,250',
                    ifIgnored: 'Heavy smoke under acceleration & hard freezing-weather starts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,800'
                  }
                ]
              },
              de: {
                headline: 'Überarbeiteter Euro-5-Diesel (ab 2009)— deutlich robuster und',
                strengths: [
                  'Beseitigt das frühe 2006–2008er Kopfdichtungs-Risiko nahezu vollständig.',
                  'Haltbare Wandlerautomatik ohne anfällige Doppelkupplungstechnik.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.',
                  'Glühkerzen, Injektoren und Ladeluftschläuche auf Undichtigkeit und Verschleiß prüfen.'
                ],
                beforeYouBuy: [
                  'Nach dem Fahrprofil fragen: Häufige Kurzstrecken setzen das Abgasventil (AGR) und den Partikelfilter dieses 2.2-Diesels schnell zu.',
                  'Kalt und warm starten: Springt er zögerlich an, ist oft das kleine Druckregelventil an der Kraftstoffpumpe verschlissen.',
                  'Bei 70 km/h hinten auf Lagergeräusche lauschen und sauberes Einkuppeln bzw. Schalten der 6-Gang-Automatik prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, Dieselfilter & alle 40–50 Tkm / 3 J. Allradöl wechseln (ggf. 6-Gang-Automatiköl tauschen)',
                    cost: '210–340 €',
                    ifIgnored: 'Kurzstrecken verrußen Ventil/Filter früh & altes Allradöl verschleißt Kupplung',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Vorbeugende AGR-Reinigung (~80 Tkm), Getriebeöl wechseln & 6-J.-Gummischläuche/Riemen prüfen',
                    cost: '310–510 €',
                    ifIgnored: 'Ruß führt zu Kaltstart-Ruckeln & gealterte 6-J.-Schläuche verlieren Ladedruck/Wasser',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Abgasventil (AGR) reinigen & Kraftstoff-Druckregelventil erneuern',
                    cost: '280–460 €',
                    ifIgnored: 'Absterben nach dem Kaltstart & schneller zusetzender Partikelfilter (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Partikelfilter freibrennen/reinigen & hinteres Allrad-Lager tauschen',
                    cost: '480–820 €',
                    ifIgnored: 'Notlauf-Warnleuchte & lautes Mahlen aus der Allrad-Kupplung (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–220.000 km • 11–13 J.',
                    action: 'Zweimassenschwungrad & Kupplung ersetzen (bzw. Automatiköl wechseln)',
                    cost: '950–1.550 €',
                    ifIgnored: 'Rupfen am Berg oder harte Schaltvorgänge im Anhängerbetrieb (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.000–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '205.000–250.000 km • 13–15+ J.',
                    action: 'Injektoren prüfen sowie Wasserpumpe & Glühkerzen erneuern',
                    cost: '750–1.250 €',
                    ifIgnored: 'Rauchentwicklung beim Überholen & schlechter Winterstart (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Модернизированный дизель Евро-5 (с 2009 г.)— без ранних проблем ГБЦ',
                strengths: [
                  'Исправлена главная слабость ранних моторов 2AD-FTV.',
                  'Уверенно тянет с низов прицепы до 2 000 кг и спокойно держит 130 км/ч на автобане.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.',
                  'Проверяйте свечи накала, форсунки и патрубки интеркулера на герметичность и износ.'
                ],
                beforeYouBuy: [
                  'Уточните, где ездила машина: короткие городские поездки быстро забивают клапан ЕГР и сажевый фильтр на этом дизеле.',
                  'Проверьте уверенный запуск и на холодную, и на горячую— задержка запуска выдаёт изношенный клапан на ТНВД.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год малозольное масло, топливный фильтр и масло заднего редуктора раз в 40–50 тыс. / 3 года (при наличии 6-АКПП сменить масло)',
                    cost: '€210–340',
                    ifIgnored: 'Короткие поездки рано забивают ЕГР и сажевый фильтр, а старое масло губит муфту 4WD',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Профилактическая чистка клапана ЕГР (~80 тыс.), масло КПП и осмотр стареющих к 6 годам шлангов',
                    cost: '€310–510',
                    ifIgnored: 'Нагар мешает запуску, а постаревшие от времени патрубки дают утечку наддува или ОЖ',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Очистить клапан ЕГР и заменить регулятор давления на топливном насосе',
                    cost: '€280–460',
                    ifIgnored: 'Мотор глохнет после запуска и забивает сажевый фильтр (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Промыть сажевый фильтр и заменить подшипник задней муфты',
                    cost: '€480–820',
                    ifIgnored: 'Аварийный режим и гул муфты полного привода (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–220 000 км • 11–13 лет',
                    action: 'Заменить маховик со сцеплением (или масло в 6-ступ. автомате)',
                    cost: '€950–1 550',
                    ifIgnored: 'Дёрганье при трогании в горку и толчки автомата под нагрузкой (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 000–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '205 000–250 000 км • 13–15+ лет',
                    action: 'Проверить форсунки, заменить водяной насос и свечи накала',
                    cost: '€750–1 250',
                    ifIgnored: 'Дым при разгоне и трудный пуск в сильный мороз (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.7,
            badges: {
              en: ['6-MT / Proven Aisin 6-AT', '6-AT Spares Dual-Mass Clutch'],
              de: ['6-Gang / Aisin 6-Automatik', '6-AT schont ZMS & Kupplung'],
              ru: ['6-МКПП / Автомат Aisin 6', 'Автомат бережёт сцепление и маховик']
            }
          },
          buildQualityRust: {
            score: 8.0,
            badges: {
              en: ['Tough SUV Axles & Bushings', 'Check Subframe & Mounts'],
              de: ['Robuste SUV-Achsen & Lager', 'Achsträger & Auspuffhalter'],
              ru: ['Выносливая подвеска RAV4', 'Проверка подрамника и крепежа']
            }
          },
          electronicsReliability: {
            score: 8.7,
            badges: {
              en: ['Updated Euro 5 Diesel ECU', 'Check DPF Pressure Sensors'],
              de: ['Aktualisierte Euro-5-ECU', 'DPF-Sensoren beachten'],
              ru: ['Обновлённый ЭБУ Euro 5', 'Датчики давления сажевого']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['Comfortable Upright Posture', 'Firm Short-Bump SUV Bounce'],
              de: ['Bequeme hohe Sitzposition', 'Poltrig auf kurzen Stößen'],
              ru: ['Удобная высокая посадка', 'Жёстче на мелких неровностях']
            }
          },
          interiorQualityFeatures: {
            score: 6.0,
            badges: {
              en: ['Logical Oversized Controls', 'Utilitarian Hard Plastics'],
              de: ['Große griffige Drehregler', 'Schlichtes hartes SUV-Plastik'],
              ru: ['Крупные удобные регуляторы', 'Простой твёрдый пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.6,
            badges: {
              en: ['Tight 10.2 m SUV Turn', 'High View • Side-Swing Tailgate'],
              de: ['Nur 10,2 m Wendekreis', 'Hohe Übersicht • Seitliche Hecktür'],
              ru: ['Разворот 10,2 м', 'Высокая посадка • Дверь вбок']
            }
          },
          safetyProtection: {
            score: 6.5,
            badges: {
              en: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ Stability'],
              de: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ ESP'],
              ru: ['Euro NCAP 4★ (2006)', '7 подушек + VSC+ (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Sliding & Reclining Rear Seats', 'High Step-In Door Access'],
              de: ['Verschieb- & neigbarer Fond', 'Bequemer hoher SUV-Einstieg'],
              ru: ['Сдвижные и наклонные спинки', 'Удобный высокий вход в салон']
            }
          },
          interiorBootSpace: {
            score: 9.3,
            badges: {
              en: ['586L Boot (1,752L Max)', 'Deep Underfloor Storage'],
              de: ['586L Kofferraum (1.752L Max)', 'Großes Unterbodenfach'],
              ru: ['Багажник 586–1 752 л', 'Глубокий подпол багажника']
            }
          },
          payloadTowing: {
            score: 9.4,
            badges: {
              en: ['540 kg Payload', '2,000 kg (MT) / 1,800 kg (AT)'],
              de: ['540 kg Zuladung', '2.000 kg (MT) / 1.800 kg (AT)'],
              ru: ['Нагрузка 540 кг', 'Прицеп: 2 000 / 1 800 кг']
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
              en: ['4WD Lock Snow & Mud Traction', 'Predictable SUV Body Roll'],
              de: ['4WD-Lock Winter-Traktion', 'Vorhersehbare Seitenneigung'],
              ru: ['Блокировка 4WD зимой и в грязи', 'Предсказуемые крены SUV']
            }
          },
          brakingPerformance: {
            score: 5.7,
            badges: {
              en: ['100–0 km/h: 37.5 m', 'Average Pedal Feel • SUV Weight'],
              de: ['100–0 km/h: 37,5 m', 'Mittlerer Druckpunkt • SUV-Masse'],
              ru: ['100–0 км/ч: 37,5 м', 'Средняя информативность • Масса SUV']
            }
          },
          efficiencyFuel: {
            score: 7.6,
            badges: {
              en: ['6.8 L/100km (MT)', '~7.9 L/100km on 6-AT'],
              de: ['6,8 L/100km (MT)', 'Ca. 7,9 L/100km (6-AT)'],
              ru: ['6,8 л/100 км (МКПП)', 'Около 7,9 л (АКПП)']
            }
          },
          taxInsuranceNorm: {
            score: 6.6,
            badges: {
              en: ['2.2L Diesel Tax • Euro 5', 'Moderate-High SUV Insurance'],
              de: ['Hohe 2.2-Dieselsteuer • Euro 5', 'Gehobene SUV-Versicherung'],
              ru: ['Высокий налог 2,2 • Euro 5', 'Повышенная страховка SUV']
            }
          },
          maintenanceRepairCosts: {
            score: 6.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change Aisin 6-AT / 6-MT fluid plus AWD transfer & rear diff oil', de: 'Aisin-6-AT- / 6-Gang-Öl sowie Verteiler- & Hinterachsöl wechseln', ru: 'Замена масла в АКПП Aisin / МКПП, раздатке и заднем редукторе' }, cost: '€240–390' },
                { when: { en: 'Every 60,000–80,000 km', de: 'Alle 60.000–80.000 km', ru: 'Каждые 60 000–80 000 км' }, action: { en: 'Clean EGR valve & replace diesel fuel filter', de: 'AGR-Ventil reinigen & Dieselfilter ersetzen', ru: 'Чистка клапана EGR и замена топливного фильтра' }, cost: '€180–260' }
              ],
              critical: [
                { when: { en: '130,000–200,000 km', de: '130.000–200.000 km', ru: '130 000–200 000 км' }, action: { en: 'DPF differential pressure sensor / clogged DPF on short-trip cars', de: 'DPF-Differenzdrucksensor / verstopfter DPF bei Kurzstrecke', ru: 'Датчик давления DPF / забитый сажевый фильтр при коротких поездках' }, cost: '€450–1,300', risk: { en: 'Limp mode, failed regenerations, and diesel dilution in engine oil', de: 'Notlauf, abgebrochene Regenerationen und Ölverdünnung', ru: 'Аварийный режим, срыв регенераций и разжижение масла дизелем' }, damage: '€1,800–2,800' },
                { when: { en: '150,000–210,000 km', de: '150.000–210.000 km', ru: '150 000–210 000 км' }, action: { en: 'Dual-mass flywheel + clutch (6-MT only; 6-AT avoids DMF)', de: 'Zweimassenschwungrad + Kupplung (nur 6-Gang; 6-AT ohne ZMS)', ru: 'Двухмассовый маховик + сцепление (только МКПП; АКПП без ДММ)' }, cost: '€1,000–1,450', risk: { en: 'Driveline shudder and clutch slip under 340 Nm towing loads', de: 'Rupfende Kupplung und Durchrutschen bei 340 Nm Anhängerlast', ru: 'Вибрации трансмиссии и пробуксовка под нагрузкой 340 Н·м' }, damage: '€1,800–2,400' }
              ]
            },
            badges: {
              en: ['Revised Facelift Block', 'High DPF, Clutch & SUV Tyre Cost'],
              de: ['Überarbeiteter Facelift-Block', 'Teurer DPF-, ZMS- & Reifenservice'],
              ru: ['Доработанный блок рестайлинга', 'Дорогие DPF, маховик и шины SUV']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['Popular Tow & 6-AT Model', 'Solid Facelift Demand'],
              de: ['Gesuchtes Zug- & 6-AT-Modell', 'Guter Facelift-Werterhalt'],
              ru: ['Спрос на дизель 6-АКПП', 'Хорошая ликвидность']
            }
          }
        }
      },
      {
        id: '2.2-dcat-177',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel-awd',
        buyerFitOverrides: {
          skip: ['globalDieselShortTripRisk', 'rav4DcatRisk', 'rav4SideTailgate', 'rav4HardPlastics']
        },
        dossierGroup: 'diesel-awd-mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 177,
        shortTitle: 'RAV4 2.2 D-CAT',
        fullName: '2010 Toyota RAV4 2.2 D-CAT',
        engineBadge: '2.2L D-CAT AWD • 177 HP',
        engineSubLabel: {
          en: '2AD-FHV 2.2L Piezo D-CAT Diesel (2006–2013) • 6-MT • 400 Nm • AWD',
          de: '2AD-FHV 2.2L D-CAT Turbodiesel (2006–2013) • 6-Gang • 400 Nm • Allrad',
          ru: '2AD-FHV 2.2L D-CAT Турбодизель (2006–2013) • 6-ст. МКПП • 400 Н·м • AWD'
        },
        rarityLabel: {
          en: '400 NM FLAGSHIP',
          de: '400-NM-TOPMODELL',
          ru: 'ФЛАГМАН 400 Н·М'
        },
        originalMsrp: {
          en: '€33,400 New',
          de: '33.400 € Neu',
          ru: '€33 400 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ Massive 400 Nm Torque (9.3s 0–100) • 200 km/h Top Speed • 2,000 kg Towing',
          de: '✦ Gewaltige 400 Nm Drehmoment (9,3s 0–100) • 200 km/h Spitze • 2.000 kg Zuglast',
          ru: '✦ Мощная тяга 400 Н·м (9,3 с до 100) • Макс. 200 км/ч • Буксировка 2 000 кг'
        },
        remarkablePositives: {
          en: [
            'MASSIVE 400 NM TORQUE',
            'BRISK 9.3S • 200 KM/H TOP SPEED',
            '2,000 KG BRAKED TOWING',
            'RICH EXECUTIVE / X-GRADE TRIM',
            '586L BOOT + UNDERFLOOR BIN'
          ],
          de: [
            'GEWALTIGE 400 NM DREHMOMENT',
            'FLOTTE 9,3S • 200 KM/H SPITZE',
            '2.000 KG ANHÄNGELAST',
            'UMFANGREICHE TOP-AUSSTATTUNG',
            '586L KOFFERRAUM + UNTERBODENFACH'
          ],
          ru: [
            'МОЩНЕЙШАЯ ТЯГА 400 Н·М',
            '9,3 С ДО 100 • МАКС. 200 КМ/Ч',
            'БУКСИРОВКА ДО 2 000 КГ',
            'БОГАТЫЕ КОМПЛЕКТАЦИИ TOP/X',
            'БАГАЖНИК 586 Л + НИША В ПОЛУ'
          ]
        },
        notableNegatives: {
          en: [
            'SENSITIVE D-CAT FILTER & 5TH INJECTOR',
            'PRE-2009 HEAD GASKET RISK',
            'THIRSTY 7.7 L/100KM DIESEL BURN',
            'EXPENSIVE PIEZO INJECTORS & DMF'
          ],
          de: [
            'EMPFINDLICHER D-CAT-FILTER & 5. DÜSE',
            'ZYLINDERKOPFDICHTUNG VOR 2009 PRÜFEN',
            'HOHER VERBRAUCH (7,7 L/100KM DIESEL)',
            'TEURE PIEZO-INJEKTOREN & ZMS'
          ],
          ru: [
            'КАПРИЗНЫЙ ФИЛЬТР D-CAT И 5-Я ФОРСУНКА',
            'РИСК ПРОКЛАДКИ ГБЦ ДО 2009 Г.',
            'ПОВЫШЕННЫЙ РАСХОД ДИЗЕЛЯ 7,7 Л/100',
            'ДОРОГИЕ ПЬЕЗОФОРСУНКИ И МАХОВИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.9,
          comfortCabin: 7.8,
          spacePracticality: 9.1,
          performanceDynamics: 7.6,
          runningCostsTco: 7.0
        },
        specOverrides: {
          engineName: { en: '2.2L I4 D-CAT Diesel (Chain)', de: '2.2L Reihenvierzylinder D-CAT', ru: '2.2L R4 D-CAT Дизель (Цепь)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '2,000 kg',
          sprint0100: '9.3 s',
          topSpeed: '200 km/h',
          peakTorque: '400 Nm @ 2,000 rpm',
          passingPunch: { en: 'Muscular 400 Nm Push', de: 'Wuchtiger 400-Nm-Schub', ru: 'Мощный подхват 400 Н·м' },
          realWorldFuel: '7.7 L/100km',
          tankRange: '60 L (~780 km)',
          euroNorm: 'Euro 4/5 (D-CAT)',
          taxInsurance: '@tierHigh',
          serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 4.4,
            badges: {
              en: ['400 Nm Piezo 2AD-FHV', 'Complex D-CAT Exhaust'],
              de: ['400 Nm Piezo 2AD-FHV', 'Komplexe D-CAT-Abgasanlage'],
              ru: ['Пьезо-дизель 400 Н·м', 'Сложная система D-CAT']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2AD-FHV · 2,231 cc' }, { k: 'architecture', v: { en: 'Inline-4 High-Output Diesel · Piezo Injectors + 5th Exhaust Injector', de: 'Reihenvierzylinder Top-Diesel · Piezo-Injektoren + 5. Düse', ru: 'Рядный 4-цил. форсированный дизель · Пьезофорсунки + 5-я форсунка' } }], note: { en: 'Fastest RAV4 XA30 with 400 Nm, but carries the highest repair risk: 2AD head gasket, complex D-CAT 5th injector, and costly piezo injectors.', de: 'Stärkster XA30-RAV4 mit 400 Nm, aber höchstes Kostenrisiko: 2AD-Kopfdichtung, komplexe D-CAT-Abgasnachbehandlung und teure Piezo-Injektoren.', ru: 'Самый быстрый RAV4 XA30 (400 Н·м), но самый рискованный по ремонту: прокладка ГБЦ 2AD, сложная система D-CAT и дорогие пьезофорсунки.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'High-Output 400 Nm D-CAT Diesel— Highway Rocket With Complex Emissions Hardware',
                strengths: [
                  'Designed around heavy timing chain and 400 Nm torque delivery with brisk highway passing power.',
                  'Updated piston/gasket specification largely avoids the pre-2009 head gasket corrosion/erosion issue.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Short trips clog the dual-action catalyst and cause white exhaust smoke or limp mode.',
                  'Early 2006–2008 units carry high risk unless documented Toyota goodwill engine replacement exists.'
                ],
                beforeYouBuy: [
                  'Check the exhaust and test hard acceleration once warm— thick white smoke clouds mean the special 5th exhaust injector or D-CAT filter is blocked.',
                  'Inspect around the white coolant expansion bottle for dried pink spray marks, a classic sign of early 177 hp head gasket blow-by.',
                  'Ask for invoices proving clean piezo fuel injectors and regular exhaust valve cleaning— this top diesel dislikes short city commutes.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, clean fuel filter & rear AWD diff oil every 40–50k km / 3 yrs (give regular highway runs to protect 5th exhaust injector)',
                    cost: '€210–340',
                    ifIgnored: 'Short city trips choke exhaust valve/filter early & stale AWD oil grinds rear coupling',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Preventive exhaust-valve clean (~80k), change gearbox oil & inspect 6-yr aging rubber hoses/belt',
                    cost: '€310–510',
                    ifIgnored: 'Carbon buildup triggers rough morning starts & perished 6-yr hoses leak boost/coolant',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Clean exhaust valve & 5th exhaust fuel injector before white smoke starts',
                    cost: '€300–520',
                    ifIgnored: 'Thick white smoke embarrasses & clogs expensive D-CAT catalyst (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'red',
                    km: '135,000–185,000 km • 9–11 yrs',
                    action: 'Check coolant leaks & replace head gasket early if pressure spikes',
                    cost: '€1,400–2,200',
                    ifIgnored: 'Coolant blows out on highway & warps engine block beyond repair (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,800–5,800'
                  },
                  {
                    tier: 'red',
                    km: '155,000–205,000 km • 11–13 yrs',
                    action: 'Replace worn high-precision piezo injectors (rarely rebuildable cleanly)',
                    cost: '€1,400–2,300',
                    ifIgnored: 'Heavy knocking, white smoke & ruined D-CAT exhaust unit (components & fluids also degrade over years)',
                    damageCost: '€2,800–4,200'
                  },
                  {
                    tier: 'orange',
                    km: '190,000–245,000 km • 13–15+ yrs',
                    action: 'Renew dual-mass flywheel, clutch & rear AWD coupling bearing under 400 Nm',
                    cost: '€1,100–1,750',
                    ifIgnored: 'Violent shudder off the line & howling rear differential (components & fluids also degrade over years)',
                    damageCost: '€2,200–3,300'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger 400-Nm-D-CAT-Diesel— starker Autobahn-SUV mit komplexer Abgasreinigung',
                strengths: [
                  'Starke 400 Nm Drehmoment sorgen für souveräne Autobahnetappen und zügige Überholmanöver.',
                  'Überarbeitete Kolben und Kopfdichtung reduzieren das bekannte Vorfacelift-Schadensrisiko deutlich.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Kurzstrecken führen häufig zu Verstopfung, weißem Rauch oder-Fehlermeldungen.',
                  'Frühe Baujahre 2006–2008 nur mit nachgewiesenem Toyota-Tauschblock kaufen.'
                ],
                beforeYouBuy: [
                  'Warmgefahren kräftig beschleunigen und in den Rückspiegel schauen– dichte weiße Rauchwolken zeigen eine verstopfte 5. Einspritzdüse oder ein volles D-CAT-System.',
                  'Am Kühlwasser-Behälter nach rosa Spritzflecken suchen– ein Warnzeichen für eine durchblasende Kopfdichtung bei der 177-PS-Version.',
                  'Nach Belegen zu intakten Piezo-Injektoren und Abgasventil-Reinigungen fragen; dieser Top-Diesel verträgt keine reinen Kurzstrecken.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, Dieselfilter & alle 40–50 Tkm / 3 J. Allradöl wechseln (regelmäßig Autobahn für die 5. Düse fahren)',
                    cost: '210–340 €',
                    ifIgnored: 'Kurzstrecken verrußen Ventil/Filter früh & altes Allradöl verschleißt Kupplung',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Vorbeugende AGR-Reinigung (~80 Tkm), Getriebeöl wechseln & 6-J.-Gummischläuche/Riemen prüfen',
                    cost: '310–510 €',
                    ifIgnored: 'Ruß führt zu Kaltstart-Ruckeln & gealterte 6-J.-Schläuche verlieren Ladedruck/Wasser',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Abgasventil (AGR) & 5. Auspuff-Einspritzdüse rechtzeitig reinigen',
                    cost: '300–520 €',
                    ifIgnored: 'Starke weiße Qualmwolken & verstopfter, sehr teurer D-CAT-Filter (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'red',
                    km: '135.000–185.000 km • 9–11 J.',
                    action: 'Kühlwasserdruck prüfen & Kopfdichtung bei ersten Spuren ersetzen',
                    cost: '1.400–2.200 €',
                    ifIgnored: 'Überkochen auf der Autobahn verzieht den Motorblock irreparabel (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.800–5.800 €'
                  },
                  {
                    tier: 'red',
                    km: '155.000–205.000 km • 11–13 J.',
                    action: 'Verschlissene Piezo-Injektoren durch Neuteile ersetzen',
                    cost: '1.400–2.300 €',
                    ifIgnored: 'Hartes Nageln, Dauerqualm & zerstörter D-CAT-Katalysator (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.800–4.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '190.000–245.000 km • 13–15+ J.',
                    action: 'Zweimassenschwungrad, Kupplung & hinteres Allrad-Lager bei 400 Nm tauschen',
                    cost: '1.100–1.750 €',
                    ifIgnored: 'Starkes Anfahrrubbeln & lautes Heulen der Hinterachse (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.200–3.300 €'
                  }
                ]
              },
              ru: {
                headline: 'Мощный дизель D-CAT (400 Н·м)— динамичный флагман со сложной экологией',
                strengths: [
                  '400 Н·м обеспечивают уверенный разгон на трассе и при обгонах.',
                  'Доработанная прокладка ГБЦ и поршни заметно снижают риск перегрева ранних версий.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'При езде по городу фильтр быстро забивается, вызывая белый дым и.',
                  'Ранние машины 2006–2008 гг. требуют строгой проверки истории замены двигателя по гарантии.'
                ],
                beforeYouBuy: [
                  'На прогретой машине резко ускорьтесь и посмотрите в зеркало— густой белый дым выдаёт забитую 5-ю форсунку в выпуске или фильтр D-CAT.',
                  'Осмотрите расширительный бачок на розовые следы выплеска— на 177-сильной версии бывает пробой прокладки головки блока.',
                  'Проверьте чеки по дорогим пьезофорсункам и чистке ЕГР: этот мощный дизель плохо переносит короткие городские поездки.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Раз в год малозольное масло, топливный фильтр и масло заднего редуктора раз в 40–50 тыс. / 3 года (регулярно выезжать на трассу ради 5-й форсунки)',
                    cost: '€210–340',
                    ifIgnored: 'Короткие поездки рано забивают ЕГР и сажевый фильтр, а старое масло губит муфту 4WD',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Профилактическая чистка клапана ЕГР (~80 тыс.), масло КПП и осмотр стареющих к 6 годам шлангов',
                    cost: '€310–510',
                    ifIgnored: 'Нагар мешает запуску, а постаревшие от времени патрубки дают утечку наддува или ОЖ',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Почистить клапан ЕГР и 5-ю форсунку дожига до появления белого дыма',
                    cost: '€300–520',
                    ifIgnored: 'Густой белый дым сзади и выход дорогого фильтра D-CAT из строя (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'red',
                    km: '135 000–185 000 км • 9–11 лет',
                    action: 'Контролировать систему охлаждения и вовремя сменить прокладку ГБЦ',
                    cost: '€1 400–2 200',
                    ifIgnored: 'Выдавливание антифриза на трассе и необратимый перегрев блока (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€3 800–5 800'
                  },
                  {
                    tier: 'red',
                    km: '155 000–205 000 км • 11–13 лет',
                    action: 'Заменить изношенные пьезофорсунки на новые (они плохо поддаются ремонту)',
                    cost: '€1 400–2 300',
                    ifIgnored: 'Жёсткая работа, постоянный дым и гибель дорогого нейтрализатора (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 800–4 200'
                  },
                  {
                    tier: 'orange',
                    km: '190 000–245 000 км • 13–15+ лет',
                    action: 'Обновить маховик, сцепление и подшипник задней муфты при 400 Нм',
                    cost: '€1 100–1 750',
                    ifIgnored: 'Сильная вибрация при старте и громкий гул полного привода (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 200–3 300'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['Heavy-Duty 6-MT + AWD', '400 Nm Clutch & DMF Load'],
              de: ['Kräftiges 6-Gang + Allrad', '400 Nm belasten ZMS/Kupplung'],
              ru: ['Усиленная 6-МКПП + AWD', 'Высокая нагрузка 400 Н·м']
            }
          },
          buildQualityRust: {
            score: 8.0,
            badges: {
              en: ['Tough SUV Axles & Bushings', 'Check Subframe & Mounts'],
              de: ['Robuste SUV-Achsen & Lager', 'Achsträger & Auspuffhalter'],
              ru: ['Выносливая подвеска RAV4', 'Проверка подрамника и крепежа']
            }
          },
          electronicsReliability: {
            score: 8.2,
            badges: {
              en: ['Extra D-CAT NOx / 5th Sensors', 'Check Exhaust Temp Wiring'],
              de: ['Zusätzliche D-CAT-Sensoren', 'Abgas-Sensorik prüfen'],
              ru: ['Сложные датчики системы D-CAT', 'Проводка датчиков выхлопа']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['Comfortable Upright Posture', 'Firm Short-Bump SUV Bounce'],
              de: ['Bequeme hohe Sitzposition', 'Poltrig auf kurzen Stößen'],
              ru: ['Удобная высокая посадка', 'Жёстче на мелких неровностях']
            }
          },
          interiorQualityFeatures: {
            score: 6.0,
            badges: {
              en: ['Logical Oversized Controls', 'Utilitarian Hard Plastics'],
              de: ['Große griffige Drehregler', 'Schlichtes hartes SUV-Plastik'],
              ru: ['Крупные удобные регуляторы', 'Простой твёрдый пластик']
            }
          },
          visibilityManeuverability: {
            score: 8.6,
            badges: {
              en: ['Tight 10.2 m SUV Turn', 'High View • Side-Swing Tailgate'],
              de: ['Nur 10,2 m Wendekreis', 'Hohe Übersicht • Seitliche Hecktür'],
              ru: ['Разворот 10,2 м', 'Высокая посадка • Дверь вбок']
            }
          },
          safetyProtection: {
            score: 6.5,
            badges: {
              en: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ Stability'],
              de: ['Euro NCAP 4★ (2006)', '7 Airbags + VSC+ ESP'],
              ru: ['Euro NCAP 4★ (2006)', '7 подушек + VSC+ (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Sliding & Reclining Rear Seats', 'High Step-In Door Access'],
              de: ['Verschieb- & neigbarer Fond', 'Bequemer hoher SUV-Einstieg'],
              ru: ['Сдвижные и наклонные спинки', 'Удобный высокий вход в салон']
            }
          },
          interiorBootSpace: {
            score: 9.3,
            badges: {
              en: ['586L Boot (1,752L Max)', 'Deep Underfloor Storage'],
              de: ['586L Kofferraum (1.752L Max)', 'Großes Unterbodenfach'],
              ru: ['Багажник 586–1 752 л', 'Глубокий подпол багажника']
            }
          },
          payloadTowing: {
            score: 9.5,
            badges: {
              en: ['540 kg Payload', '750 / 2,000 kg Towing'],
              de: ['540 kg Zuladung', '750 / 2.000 kg Anhängelast'],
              ru: ['Нагрузка 540 кг', 'Прицеп: 750 / 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.2,
            badges: {
              en: ['0–100 km/h: 9.3 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 9,3 s', '200 km/h Spitze'],
              ru: ['0–100 км/ч: 9,3 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.8,
            badges: {
              en: ['400 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['400 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['400 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 6.8,
            badges: {
              en: ['4WD Lock Snow & Mud Traction', 'Predictable SUV Body Roll'],
              de: ['4WD-Lock Winter-Traktion', 'Vorhersehbare Seitenneigung'],
              ru: ['Блокировка 4WD зимой и в грязи', 'Предсказуемые крены SUV']
            }
          },
          brakingPerformance: {
            score: 5.7,
            badges: {
              en: ['100–0 km/h: 37.5 m', 'Average Pedal Feel • SUV Weight'],
              de: ['100–0 km/h: 37,5 m', 'Mittlerer Druckpunkt • SUV-Masse'],
              ru: ['100–0 км/ч: 37,5 м', 'Средняя информативность • Масса SUV']
            }
          },
          efficiencyFuel: {
            score: 6.6,
            badges: {
              en: ['7.7 L/100km', 'D-CAT Regen Fuel Extra'],
              de: ['7,7 L/100km', 'Mehrverbrauch durch D-CAT'],
              ru: ['7,7 л/100 км', 'Доп. расход на D-CAT']
            }
          },
          taxInsuranceNorm: {
            score: 5.9,
            badges: {
              en: ['High 2.2L Diesel Tax • Euro 4/5', 'Higher 177 HP SUV Insurance'],
              de: ['Hohe 2.2-Steuer • Euro 4/5', 'Teurere 177-PS-SUV-Klasse'],
              ru: ['Высокий налог 2,2 л', 'Дорогая страховка за 177 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Clean EGR valve & 5th exhaust injector; change 6-MT & AWD oils', de: 'AGR-Ventil & 5. Einspritzdüse reinigen; Getriebe- & Allradöle wechseln', ru: 'Чистка EGR и 5-й форсунки; замена масла в МКПП и редукторах' }, cost: '€260–420' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace diesel fuel filter & run injector feedback scan', de: 'Dieselfilter wechseln & Injektor-Korrekturwerte prüfen', ru: 'Замена топливного фильтра и проверка коррекций форсунок' }, cost: '€100–160' }
              ],
              critical: [
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: '2AD-FHV head gasket failure & DPNR/D-CAT catalyst clogging', de: '2AD-FHV Zylinderkopfdichtung & verstopfter DPNR/D-CAT-Kat', ru: 'Пробой прокладки ГБЦ 2AD-FHV и забитый катализатор DPNR/D-CAT' }, cost: '€1,800–3,200', risk: { en: 'White smoke, coolant loss, and permanent limp mode', de: 'Weißrauch, Kühlwasserverlust und dauerhafter Notlauf', ru: 'Белый дым, выброс антифриза и постоянный аварийный режим' }, damage: '€4,000–6,000' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130 000–190 000 км' }, action: { en: '400 Nm dual-mass flywheel + heavy-duty clutch & piezo injectors', de: '400-Nm-Zweimassenschwungrad + Kupplung & Piezo-Injektoren', ru: 'Двухмассовый маховик под 400 Н·м + сцепление и пьезофорсунки' }, cost: '€1,300–2,400', risk: { en: 'Severe vibration, black smoke, and potential piston melt from leaking injector', de: 'Starke Vibrationen, Schwarzrauch bis Kolbenschaden durch tropfenden Injektor', ru: 'Сильные вибрации, чёрный дым и риск прогара поршня от льющей форсунки' }, damage: '€3,000–5,000' }
              ]
            },
            badges: {
              en: ['SUV Brakes & 18" Tyres', 'Very Expensive Piezo / D-CAT'],
              de: ['SUV-Bremsen & 18-Zoll-Reifen', 'Sehr teure Piezo-/D-CAT-Teile'],
              ru: ['Крупные тормоза и шины 18"', 'Очень дорогие пьезофорсунки D-CAT']
            }
          },
          depreciationResale: {
            score: 5.8,
            badges: {
              en: ['Top-Trim Spec Appeal', 'Buyers Wary of Early D-CAT'],
              de: ['Beliebt dank Top-Ausstattung', 'Abschlag bei frühen D-CAT'],
              ru: ['Привлекает комплектацией', 'Осторожный спрос на ранние D-CAT']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Silver Metallic', code: '1F7', hex: '#b6bec8', glow: 'rgba(182, 190, 200, 0.16)' },
    { name: 'Granite Grey', code: '1G3', hex: '#545b63', glow: 'rgba(84, 91, 99, 0.18)' },
    { name: 'Night Sky Black', code: '209', hex: '#191c21', glow: 'rgba(66, 76, 92, 0.18)' },
    { name: 'Pure White', code: '040', hex: '#f2f4f7', glow: 'rgba(242, 244, 247, 0.16)' },
    { name: 'Pearl White', code: '070', hex: '#eceef2', glow: 'rgba(236, 238, 242, 0.16)' },
    { name: 'Barcelona Red', code: '3R3', hex: '#9e2029', glow: 'rgba(158, 32, 41, 0.2)' },
    { name: 'Nautical Blue', code: '8S6', hex: '#243c5e', glow: 'rgba(36, 60, 94, 0.2)' },
    { name: 'Forest Green', code: '6T6', hex: '#2e4a3d', glow: 'rgba(46, 74, 61, 0.18)' },
    { name: 'Sahara Bronze', code: '4T3', hex: '#7a6856', glow: 'rgba(122, 104, 86, 0.18)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '2.0-valvematic',
    defaultGroupKey: 'petrol-valvematic',
    engineCosts: {
      '2.0-valvematic': { group: 'petrol-valvematic', avgFuelL100: 8.3, fuelPrice: 1.75, tax: 174, ins: 680, service: 290 },
      '2.0-vvti':       { group: 'petrol-vvti',       avgFuelL100: 9.1, fuelPrice: 1.75, tax: 196, ins: 660, service: 280 },
      '2.2-d4d-136':    { group: 'diesel-d4d-136',    avgFuelL100: 7.1, fuelPrice: 1.65, tax: 344, ins: 730, service: 390 },
      '2.2-d4d-150':    { group: 'diesel-d4d-150',    avgFuelL100: 6.8, fuelPrice: 1.65, tax: 326, ins: 750, service: 390 },
      '2.2-dcat-177':   { group: 'diesel-dcat-177',   avgFuelL100: 7.7, fuelPrice: 1.65, tax: 356, ins: 790, service: 440 }
    },
    groups: {
      'petrol-valvematic': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 10% (Age Class)', note: '3ZR-FAE Valvematic petrol avoids diesel gasket/EGR woes; check rear subframe & tailgate hinges' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Chain-driven port-injected petrol with zero turbo/DPF; watch rare Valvematic actuator faults past 180k km' },
            { source: 'WhatCar? Survey', value: '96.2% Reliability', note: 'Best-rated XA30 powertrain for low unplanned workshop bills' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 10 % (Altersklasse)', note: 'Der 3ZR-FAE-Benziner kennt keine Diesel-Kopfdichtungsprobleme; Hinterachsträger & Türscharnier prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr pannensicher', note: 'Ketten-Saugmotor ohne Turbo/DPF; bei >180 Tkm selten Valvematic-Stellmotor auffällig' },
            { source: 'WhatCar? Umfrage', value: '96,2 % Zuverlässigkeit', note: 'Zuverlässigste Motorisierung im RAV4 XA30 mit niedrigstem Reparaturrisiko' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-10% в возрасте', note: 'Бензиновый 3ZR-FAE лишён дизельных болячек ГБЦ и EGR; проверяйте подрамник и петли двери' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Цепной атмосферник без турбины и DPF; к 180+ тыс. км редко требует внимания блок Valvematic' },
            { source: 'Рейтинг WhatCar?', value: '96,2% надёжности', note: 'Самый беспроблемный и дешёвый по внеплановым ремонтам мотор поколения XA30' }
          ]
        },
        extendedChecks: {
          en: [
            'Check the rear side-hinged tailgate for sagging hinges and surface rust around the spare-wheel carrier mounts (if fitted).',
            'On Multidrive S CVT models, test smooth uphill creep with zero shudder and verify CVT fluid changes every 60,000–80,000 km.',
            'Listen for rear AWD electromagnetic coupling whine around 50–70 km/h and verify rear diff oil service.',
            'Inspect rear subframe, trailing-arm bushes, and fuel filler neck for winter salt rust.'
          ],
          de: [
            'Seitlich angeschlagene Hecktür auf abgesackte Scharniere sowie Rost rund um die Reserverad-Halterung prüfen.',
            'Bei Multidrive-S-CVT ruckfreies Anrollen am Berg testen und Getriebeöl-Wechsel alle 60.000–80.000 km erfragen.',
            'Hintere AWD-Magnetkupplung bei 50–70 km/h auf Heulen prüfen und regelmäßigen Hinterachsöl-Wechsel checken.',
            'Hinterachsträger, Längslenkerbuchsen und Tankeinfüllstutzen auf Rostschäden untersuchen.'
          ],
          ru: [
            'Проверить распашную заднюю дверь на провисание петель и очаги ржавчины под креплением запаски (если она есть).',
            'На версиях с вариатором Multidrive S проверить плавный старт в горку и замену жидкости раз в 60–80 тыс. км.',
            'При 50–70 км/ч послушать заднюю электромагнитную муфту AWD и проверить историю замены масла в редукторе.',
            'Осмотреть задний подрамник, сайлентблоки и заливную горловину бака на коррозию.'
          ]
        },
        savingsNote: {
          en: 'Uses ~8.3 L/100 km of petrol, but avoids the costly head-gasket, injector, and D-CAT bills of pre-2009 diesels — typically €500–€1,000/yr lower risk.',
          de: 'Verbraucht ca. 8,3 L/100 km Benzin, spart aber teure Kopfdichtungs-, Injektor- und D-CAT-Risiken der frühen Diesel — oft 500–1.000 €/Jahr weniger Risiko.',
          ru: 'Расход около 8,3 л/100 км, зато полностью исключены риски прокладки ГБЦ, форсунок и D-CAT — экономия на рисках до €500–1 000 в год.'
        },
        market: {
          supplyDemand: {
            en: 'Very high buyer demand for 2009–2012 2.0 Valvematic models; clean AWD examples command a clear premium over diesels.',
            de: 'Sehr hohe Nachfrage nach 2009–2012er 2.0 Valvematic-Modellen — saubere AWD-Exemplare kosten deutlich mehr als Diesel.',
            ru: 'Очень высокий спрос на рестайлинговые 2.0 Valvematic 2009–2012 гг.; ухоженные версии с 4WD заметно дороже дизелей.'
          },
          sweetSpot: {
            en: '2010–2012 Facelift 2.0 Valvematic AWD (Sol / Edition-S) with 90,000–150,000 km (€10,200–€12,800).',
            de: 'Facelift 2010–2012 2.0 Valvematic AWD (Life / Edition-S) mit 90.000–150.000 km (10.200–12.800 €).',
            ru: 'Рестайлинг 2010–2012 2.0 Valvematic AWD (Sol / Edition-S) с пробегом 90–150 тыс. км (€10 200–12 800).'
          },
          outlook3to5yr: {
            en: 'Holds value stubbornly (~€7,200–€8,800 in 3–5 yrs) thanks to legendary Toyota petrol SUV reputation.',
            de: 'Extrem wertstabil (ca. 7.200–8.800 € in 3–5 Jahren) dank des Rufs als unkompliziertester kompakter Japan-SUV.',
            ru: 'Высокая ликвидность (€7 200–8 800 через 3–5 лет) благодаря репутации самого неприхотливого японского кроссовера.'
          }
        },
        watchoutExtra: {
          en: [
            'Valvematic lift-control actuator module can fail above 160,000–200,000 km (check-engine limp mode; replacement ~€900–€1,400).',
            'Multidrive S CVT belt/bearings depend strictly on 60–80k km fluid changes; 6-MT models remain simpler long-term.'
          ],
          de: [
            'Die Valvematic-Verstelleinheit kann ab 160.000–200.000 km ausfallen (Notlauf; Tausch ca. 900–1.400 €).',
            'Das Multidrive-S-CVT braucht zwingend frisches Öl alle 60–80 Tkm — der 6-Gang-Schalter ist langfristig noch robuster.'
          ],
          ru: [
            'После 160–200 тыс. км изредка выходит из строя блок управления подъёмом клапанов Valvematic (замена €900–1 400).',
            'Вариатор Multidrive S чувствителен к интервалу замены масла (60–80 тыс. км); 6-ст. МКПП долговечнее при больших пробегах.'
          ]
        }
      },
      'petrol-vvti': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 15% (Pre-Facelift)', note: 'Simple 1AZ-FE chain petrol holds up cleanly; age-related subframe rust & bushes need checking' },
            { source: 'ADAC Pannenstatistik', value: 'Highly Dependable', note: '2006+ 1AZ-FE uses updated piston rings; conventional 4-AT & 5-MT are ultra-tough' },
            { source: 'WhatCar? Survey', value: '95.1% Reliability', note: 'Zero direct-injection or Valvematic complexity keeps repairs cheap' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 15 % (Vorfacelift)', note: 'Schlichter 1AZ-FE-Kettenbenziner bleibt extrem unauffällig; altersbedingter Rost am Unterboden prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr verlässlich', note: 'Ab 2006 mit verbesserten Kolbenringen; klassische 4-Stufen-Automatik & 5-Gang sind extrem zäh' },
            { source: 'WhatCar? Umfrage', value: '95,1 % Zuverlässigkeit', note: 'Ohne Direkteinspritzung oder Valvematic bleiben Reparaturen sehr günstig' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-15% (дорестайлинг)', note: 'Простой цепной 1AZ-FE почти не ломается; проверяйте возрастную коррозию подрамника и сайлентблоки' },
            { source: 'ADAC Pannenstatistik', value: 'Очень надёжен', note: 'Версия с 2006 г. с доработанными кольцами; классическая 4-АКПП и 5-МКПП исключительно живучи' },
            { source: 'Рейтинг WhatCar?', value: '95,1% надёжности', note: 'Отсутствие прямого впрыска и Valvematic делает ремонт максимально бюджетным' }
          ]
        },
        extendedChecks: {
          en: [
            'Ask about oil consumption between 10,000 km services — early neglected 1AZ-FE units can burn oil if intervals were stretched.',
            'Inspect rear AWD coupling bearing for whine at 50–70 km/h and verify rear differential oil changes.',
            'Check steering intermediate shaft for subtle knocking over cobblestones (common, inexpensive Toyota fix).',
            'Inspect rear wheel-arch seams, subframe, and exhaust flanges for 15+ yr corrosion.'
          ],
          de: [
            'Nach Ölverbrauch zwischen den 10.000-km-Intervallen fragen — überzogene Ölwechsel fördern bei frühen 1AZ-FE Ringverkokung.',
            'Hintere AWD-Kupplung bei 50–70 km/h auf Lagergeräusche prüfen und Hinterachsöl-Service checken.',
            'Lenkzwischenwelle auf leichtes Klackern auf Kopfsteinpflaster testen (bekannte, günstige Kleinigkeit).',
            'Radläufe, Hinterachsträger und Auspuffflansche gründlich auf Altersrost prüfen.'
          ],
          ru: [
            'Уточнить расход масла между заменами в 10 тыс. км — при затянутых интервалах 1AZ-FE склонен к закоксовке колец.',
            'Послушать подшипник задней муфты AWD на 50–70 км/ч и проверить замену масла в редукторе.',
            'Проверить промежуточный вал рулевой колонки на лёгкий стук на мелких кочках.',
            'Осмотреть задние арки, подрамник и фланцы выхлопа на предмет возрастной коррозии.'
          ]
        },
        savingsNote: {
          en: 'Thirstiest petrol at ~9.1 L/100 km (4-speed auto adds ~0.7 L), but rock-solid 1AZ-FE simplicity keeps surprise repair bills near zero.',
          de: 'Durstigster Benziner (~9,1 L/100 km, 4-AT +0,7 L), aber die unkomplizierte 1AZ-FE-Technik verhindert teure Überraschungsreparaturen.',
          ru: 'Самый прожорливый бензин (~9,1 л/100 км, с 4-АКПП ещё выше), но максимальная простота 1AZ-FE страхует от дорогих поломок.'
        },
        market: {
          supplyDemand: {
            en: 'Steady budget SUV demand — 4-speed automatics sell quickly to buyers wanting simple, non-CVT reliability.',
            de: 'Solide Nachfrage im Budget-SUV-Segment — vor allem die robuste 4-Stufen-Automatik ist als CVT-Alternative gesucht.',
            ru: 'Уверенный спрос в бюджете до €9 000 — версии с классическим 4-ст. автоматом особенно ценят за простоту.'
          },
          sweetSpot: {
            en: '2007–2008 2.0 VVT-i (Sol / Executive, 4-AT or 5-MT) with clean underbody and documented oil changes (€7,500–€9,400).',
            de: '2007–2008 2.0 VVT-i (Sol / Executive, 4-AT oder 5-Gang) mit sauberem Unterboden und Ölhistorie (7.500–9.400 €).',
            ru: '2007–2008 2.0 VVT-i (Sol / Executive, 4-АКПП или 5-МКПП) с живым днищем и историей ТО (€7 500–9 400).'
          },
          outlook3to5yr: {
            en: 'Flattens near €5,200–€6,500 in 3–5 yrs; simple petrol SUVs rarely drop far once below €8k.',
            de: 'Sehr flacher Rückgang Richtung 5.200–6.500 € in 3–5 Jahren — einfache Benzin-SUVs fallen unter 8.000 € kaum noch.',
            ru: 'Плавное снижение к €5 200–6 500 за 3–5 лет — простые бензиновые кроссоверы почти не дешевеют ниже этой планки.'
          }
        },
        watchoutExtra: {
          en: [
            '4-speed torque-converter automatic is virtually indestructible, though motorway cruising runs at higher revs than the later 6-MT/CVT.',
            'Check steering intermediate shaft play and rear tailgate hinges — minor mechanical wear items on 15+ yr examples.'
          ],
          de: [
            'Die 4-Stufen-Wandlerautomatik ist nahezu unzerstörbar, dreht auf der Autobahn aber höher als spätere 6-Gang-/CVT-Modelle.',
            'Spiel in der Lenkzwischenwelle und abgesackte Hecktürscharniere sind typische Altersspuren.'
          ],
          ru: [
            '4-ступенчатый автомат почти вечен, но на трассе держит повышенные обороты, увеличивая расход и шум.',
            'Люфт промежуточного вала руля и просевшие петли пятой двери — частые возрастные мелочи.'
          ]
        }
      },
      'diesel-d4d-136': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Below Average (Pre-2009 2AD)', note: 'Known 2006–2008 2AD head-gasket erosion & carbon issues hurt reliability perception' },
            { source: 'ADAC Pannenstatistik', value: 'Watch Coolant & EGR', note: 'Avoid unverified early units; engines with Toyota goodwill block replacement fare much better' },
            { source: 'WhatCar? Survey', value: '86.4% Reliability', note: 'Marked down for cylinder-head gasket failure, EGR clogging & DMF wear' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Unterdurchschnittlich (vor 2009)', note: 'Bekannte 2AD-Kopfdichtungs- und Verkokungsprobleme von 2006–2008 drücken die Bilanz' },
            { source: 'ADAC Pannenstatistik', value: 'Kühlwasser & AGR prüfen', note: 'Nur Exemplare mit belegtem Toyota-Kulanzblock oder nachweislich dichter Kopfdichtung wählen' },
            { source: 'WhatCar? Umfrage', value: '86,4 % Zuverlässigkeit', note: 'Abwertungen durch Kopfdichtungsschäden, verkokte AGR-Ventile und ZMS-Verschleiß' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Ниже среднего (до 2009 г.)', note: 'Известные проблемы прокладки ГБЦ и нагара на ранних дизелях 2AD 2006–2008 гг. портят статистику' },
            { source: 'ADAC Pannenstatistik', value: 'Контроль антифриза и EGR', note: 'Стоит брать только авто с подтверждённой заменой блока/прокладки по отзыву или проверять под нагрузкой' },
            { source: 'Рейтинг WhatCar?', value: '86,4% надёжности', note: 'Рейтинг снижен из-за пробоя прокладки ГБЦ, засорения EGR и ресурса маховика' }
          ]
        },
        extendedChecks: {
          en: [
            'Inspect the coolant expansion bottle and surrounding hoses for dried pink spray crust — classic sign of 2AD head-gasket blow-by.',
            'Verify whether the car received Toyota’s updated replacement short-block/head gasket repair before 180,000 km.',
            'Test clean pull from 1,500 rpm without soot clouds or limp mode (clogged EGR cooler/valve).',
            'Listen for dual-mass flywheel knock at idle and test 6-speed gearbox synchros.'
          ],
          de: [
            'Ausgleichsbehälter und Schläuche auf getrocknete rosa Kühlmittelspuren prüfen — typisches Warnzeichen für 2AD-Kopfdichtungsschaden.',
            'Erfragen, ob der Motor bereits den verbesserten Toyota-Tauschblock bzw. eine neue Kopfdichtung erhalten hat.',
            'Sauberes Durchziehen ab 1.500/min ohne Rußwolken oder Notlauf testen (AGR-Ventil/Kühler).',
            'Im Leerlauf auf ZMS-Klappern achten und alle 6 Gänge sauber durchschalten.'
          ],
          ru: [
            'Осмотреть расширительный бачок и шланги на розовые подтёки — классический признак пробоя прокладки ГБЦ на моторах 2AD.',
            'Уточнить, менялся ли шорт-блок или прокладка ГБЦ на усиленный вариант.',
            'Проверить разгон с 1 500 об/мин без чёрного дыма и провалов (засорённый клапан/охладитель EGR).',
            'Послушать двухмассовый маховик на холостых и проверить включение всех 6 передач.'
          ]
        },
        savingsNote: {
          en: 'Cheapest XA30 entry (~€6,500–€7,500) and ~7.1 L/100 km fuel use, yet a blown head gasket or DMF/clutch job (€1,800–€3,000) quickly erases the buy-in discount.',
          de: 'Günstigster Einstieg (~6.500–7.500 €) und ca. 7,1 L/100 km, doch ein Kopfdichtungs- oder ZMS-Schaden (1.800–3.000 €) frisst den Preisvorteil sofort auf.',
          ru: 'Самая низкая цена входа (€6 500–7 500) и расход ~7,1 л/100 км, но ремонт прокладки ГБЦ или маховика (€1 800–3 000) мгновенно съедает всю экономию.'
        },
        market: {
          supplyDemand: {
            en: 'High supply at low prices; savvy buyers either demand documented engine-block work or step up to the 2009+ 150 HP facelift.',
            de: 'Breites Angebot zu niedrigen Preisen — Kenner achten auf belegte Motor-Überholung oder wählen direkt den 2009+ 150-PS-Facelift.',
            ru: 'Предложений много и цены низкие — знающие покупатели требуют чеки по ГБЦ или доплачивают за рестайлинг 150 л.с.'
          },
          sweetSpot: {
            en: 'Only documented 2007–2008 cars with proven updated gasket/short-block work and clean EGR (€6,200–€7,600).',
            de: 'Nur 2007–2008er Exemplare mit nachweislich überholter Kopfdichtung/Tauschblock und sauberem AGR (6.200–7.600 €).',
            ru: 'Только машины 2007–2008 гг. с подтверждённым ремонтом ГБЦ/блока и чистым EGR (€6 200–7 600).'
          },
          outlook3to5yr: {
            en: 'Depreciates fast toward €3,000–€4,200 as Euro 4 diesels age out of urban markets.',
            de: 'Fällt als Euro-4-Diesel in 3–5 Jahren zügig Richtung 3.000–4.200 €.',
            ru: 'Быстро дешевеет к €3 000–4 200 по мере устаревания норм Euro 4.'
          }
        },
        watchoutExtra: {
          en: [
            'Pre-2009 2AD-FTV alloy block head-gasket blow-by causes coolant loss under sustained motorway load (€2,000–€3,500 repair).',
            'Short urban runs clog the EGR cooler and turbo VNT vanes, while DMF wear shows up around 160k–190k km.'
          ],
          de: [
            'Bis 2009 neigt der 2AD-FTV zu Kopfdichtungsschäden mit Kühlmittelverlust auf der Autobahn (2.000–3.500 € Schaden).',
            'Kurzstrecken setzen AGR-Kühler und VTG-Turbolader zu; ab 160–190 Tkm droht ZMS-Verschleiß.'
          ],
          ru: [
            'На моторах 2AD-FTV до 2009 года при трассовой нагрузке возможен пробой прокладки ГБЦ и выброс антифриза (ремонт €2 000–3 500).',
            'Городские поездки забивают теплообменник EGR и геометрию турбины; к 160–190 тыс. км изнашивается маховик.'
          ]
        }
      },
      'diesel-d4d-150': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid (2009+ Euro 5)', note: 'Updated 2009–2012 2AD-FTV largely fixes early gasket failures; watch DPF & injectors on city cars' },
            { source: 'ADAC Pannenstatistik', value: 'Good Highway Cruiser', note: 'Reliable motorway & towing workhorse; short trips trigger EGR & SCV valve faults' },
            { source: 'WhatCar? Survey', value: '91.8% Reliability', note: 'Clear step up over pre-2009 136/177 HP diesels; optional 6-speed auto is durable' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide (ab 2009 Euro 5)', note: 'Überarbeiteter 2AD-FTV (2009–2012) löst frühe Kopfdichtungs-Schwächen; DPF & Injektoren auf Langstrecke pflegen' },
            { source: 'ADAC Pannenstatistik', value: 'Gutes Reise- & Zugfahrzeug', note: 'Stark auf der Autobahn und mit Anhänger; Kurzstrecke belastet AGR & Saughubsteuerventil' },
            { source: 'WhatCar? Umfrage', value: '91,8 % Zuverlässigkeit', note: 'Deutlich standfester als frühe 136/177-PS-Diesel; die optionale 6-Gang-Automatik gilt als robust' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Крепкий (2009+ Euro 5)', note: 'Обновлённый 2AD-FTV (2009–2012) избавлен от ранней проблемы ГБЦ; важен трассовый режим для DPF' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен на трассе', note: 'Отличный тягач и крейсер; короткие поездки провоцируют закоксовку EGR и износ клапана SCV' },
            { source: 'Рейтинг WhatCar?', value: '91,8% надёжности', note: 'Заметно надёжнее ранних версий на 136/177 л.с.; опциональный 6-ст. автомат очень вынослив' }
          ]
        },
        extendedChecks: {
          en: [
            'Verify clean warm & cold starts — slow cranking or stalling points to a worn fuel-pump SCV (suction control valve).',
            'Ask for motorway usage history and inspect DPF differential pressure / EGR cleaning records.',
            'On 6-speed automatic versions, verify smooth shifting and ATF replacement every 80,000 km.',
            'Check rear AWD coupling noise and subframe/wheel-arch rust.'
          ],
          de: [
            'Kalt- und Warmstart testen — zögerliches Anspringen weist oft auf ein verschlissenes SCV-Ventil an der Hochdruckpumpe hin.',
            'Langstrecken-Anteil erfragen und DPF-/AGR-Wartung anhand von Belegen prüfen.',
            'Bei der 6-Stufen-Automatik weiche Schaltvorgänge und ATF-Wechsel alle 80.000 km verifizieren.',
            'AWD-Kupplung auf Geräusche sowie Unterboden/Radläufe auf Rost prüfen.'
          ],
          ru: [
            'Проверить быстрый запуск на холодную и горячую — долгий старт часто указывает на клапан SCV топливного насоса.',
            'Убедиться в преобладании трассовых пробегов и отсутствии ошибок по сажевому фильтру DPF и EGR.',
            'На версиях с 6-АКПП проверить плавность переключений и замену ATF каждые 80 тыс. км.',
            'Оценить тишину задней муфты AWD и состояние подрамника.'
          ]
        },
        savingsNote: {
          en: 'Best diesel balance (~6.8 L/100 km) with 2,000 kg towing and optional 6-speed auto; pays off cleanly for regular motorway and caravan drivers.',
          de: 'Beste Diesel-Balance (~6,8 L/100 km), 2.000 kg Anhängelast und optionale 6-AT — ideal für Langstrecken- und Gespannfahrer.',
          ru: 'Самый удачный дизель в линейке (~6,8 л/100 км) с допуском прицепа 2 000 кг и опцией 6-АКПП — выгоден для трассы и буксировки.'
        },
        market: {
          supplyDemand: {
            en: 'Sought after by towing and rural buyers, especially rare 2009–2012 6-speed automatic Executive models.',
            de: 'Gesucht von Zugwagen- und Langstreckenfahrern — besonders seltene 2009–2012 6-Gang-Automatik-Modelle.',
            ru: 'Стабильный спрос среди тех, кто ищет тяговитый кроссовер для трассы — особенно ценят редкие версии с 6-АКПП.'
          },
          sweetSpot: {
            en: '2010–2012 2.2 D-4D 150 (Sol / Edition-S, 6-AT or 6-MT) with 110,000–160,000 km (€8,800–€11,200).',
            de: '2010–2012 2.2 D-4D 150 (Life / Edition-S, 6-AT oder 6-Gang) mit 110.000–160.000 km (8.800–11.200 €).',
            ru: '2010–2012 2.2 D-4D 150 (Sol / Edition-S, 6-АКПП или МКПП) с пробегом 110–160 тыс. км (€8 800–11 200).'
          },
          outlook3to5yr: {
            en: 'Holds near €5,400–€6,800 in 3–5 yrs, outlasting older Euro 4 diesels thanks to Euro 5 status and 6-AT demand.',
            de: 'Hält sich in 3–5 Jahren bei ca. 5.400–6.800 € — deutlich stabiler als Euro-4-Vorgänger dank Euro 5 und 6-AT.',
            ru: 'Через 3–5 лет удержится в районе €5 400–6 800 — лучше дорестайлинговых дизелей за счёт Euro 5 и надёжной 6-АКПП.'
          }
        },
        watchoutExtra: {
          en: [
            'Short-trip DPF clogging and EGR carbon build-up remain the #1 causes of limp mode; give it regular 20-minute motorway runs.',
            'Fuel-pump SCV valve wear (hard starting) and Denso injector wear past 180,000 km should be budgeted on high-mileage units.'
          ],
          de: [
            'Kurzstrecken führen zu DPF- und AGR-Verkokung — regelmäßige Autobahnetappen verhindern Notlauf.',
            'Ab 160–180 Tkm sollten SCV-Ventil (Startprobleme) und Injektoren im Budget berücksichtigt werden.'
          ],
          ru: [
            'Короткие городские поездки быстро забивают DPF и EGR — машине необходимы регулярные выезды на трассу.',
            'На пробегах 160–180+ тыс. км возможна замена клапана SCV ТНВД или ревизия форсунок Denso.'
          ]
        }
      },
      'diesel-dcat-177': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Below Average (Complex Emissions)', note: 'Fast 400 Nm unit, but pre-2009 head gaskets and D-CAT 5th-injector systems cause frequent faults' },
            { source: 'ADAC Pannenstatistik', value: 'High Emissions Sensitivity', note: 'White exhaust smoke, clogged DPNR catalysts & EGR issues dominate roadside/workshop visits' },
            { source: 'WhatCar? Survey', value: '84.8% Reliability', note: 'Highest repair exposure in the XA30 range; requires strict motorway-only driving' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Unterdurchschnittlich (Abgas-Technik)', note: 'Starker 400-Nm-Motor, aber frühe Kopfdichtungs- und D-CAT-5.-Injektor-Probleme belasten die Quote' },
            { source: 'ADAC Pannenstatistik', value: 'Empfindliche Abgasreinigung', note: 'Weißer Rauch, verstopfter DPNR-Kat und AGR-Störungen sind typische Problemfelder' },
            { source: 'WhatCar? Umfrage', value: '84,8 % Zuverlässigkeit', note: 'Anspruchsvollste XA30-Motorisierung — funktioniert nur im reinen Langstrecken-Einsatz zuverlässig' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Ниже среднего (сложная экология)', note: 'Тяговитый мотор (400 Н·м), но ранние ГБЦ и система D-CAT с 5-й форсункой дают много отказов' },
            { source: 'ADAC Pannenstatistik', value: 'Капризная очистка выхлопа', note: 'Белый дым, забитый катализатор DPNR и клапан EGR — главные причины обращений на сервис' },
            { source: 'Рейтинг WhatCar?', value: '84,8% надёжности', note: 'Самый дорогой по рискам вариант в линейке XA30; подходит только для постоянной трассы' }
          ]
        },
        extendedChecks: {
          en: [
            'Warm up fully and accelerate hard under load — thick white smoke signals a failing 5th exhaust injector or blocked D-CAT catalyst.',
            'Inspect coolant bottle and hoses for pink spray crust (critical on 2006–2008 units without Toyota block replacement).',
            'Check for clean piezo injector receipts and recent EGR/DPNR cleaning; reject cars used for short school runs.',
            'Listen for dual-mass flywheel chatter (400 Nm torque stresses clutch/DMF heavily).'
          ],
          de: [
            'Warmfahren und kräftig beschleunigen — dichter weißer Rauch weist auf ein defektes 5. Einspritzventil oder verstopften D-CAT hin.',
            'Ausgleichsbehälter auf rosa Kühlmittelkrusten prüfen (kritisch bei 2006–2008 ohne Tauschblock).',
            'Belege über Piezo-Injektoren und AGR-/DPNR-Reinigung prüfen; reine Kurzstreckenfahrzeuge meiden.',
            'Bei 400 Nm Drehmoment besonders auf ZMS-Klappern und rutschende Kupplung achten.'
          ],
          ru: [
            'На прогретом авто резко ускориться под нагрузкой — густой белый дым указывает на неисправную 5-ю форсунку или забитый D-CAT.',
            'Проверить бачок антифриза на розовые следы (критично для авто 2006–2008 гг. без замены блока).',
            'Запросить чеки по пьезофорсункам и чистке EGR/DPNR; от машин с городской эксплуатацией лучше отказаться.',
            'При моменте 400 Н·м тщательно проверить состояние сцепления и двухмассового маховика.'
          ]
        },
        savingsNote: {
          en: 'Thrilling highway pull, yet higher ~7.7 L/100 km consumption plus expensive piezo injectors & D-CAT emissions hardware make it costlier to run than 2.2 D-4D 150.',
          de: 'Kräftiger Autobahnschub, aber höherer Verbrauch (~7,7 L/100 km) sowie teure Piezo-Injektoren und D-CAT-Technik verteuern den Unterhalt deutlich gegenüber dem 150-PS-Diesel.',
          ru: 'Отличная тяга на трассе, но расход ~7,7 л/100 км и дорогие пьезофорсунки с системой D-CAT делают содержание заметно дороже версии 150 л.с.'
        },
        market: {
          supplyDemand: {
            en: 'Discounted prices reflect buyer caution around D-CAT emissions & pre-2009 gaskets; 2009–2012 facelift D-CATs hold up slightly better.',
            de: 'Niedrigere Preise spiegeln die Skepsis gegenüber D-CAT & frühen Kopfdichtungen wider; 2009–2012er Modelle sind gefragter.',
            ru: 'Сниженные цены отражают осторожность покупателей к D-CAT; экземпляры после 2009 года ценятся чуть выше.'
          },
          sweetSpot: {
            en: '2009–2012 Facelift 2.2 D-CAT with proven motorway mileage and recent EGR/DPNR service (€8,200–€9,800).',
            de: 'Facelift 2009–2012 2.2 D-CAT mit sauberer Langstrecken-Historie und gepflegtem AGR/DPNR (8.200–9.800 €).',
            ru: 'Рестайлинг 2009–2012 2.2 D-CAT с трассовым пробегом и обслуженным EGR/DPNR (€8 200–9 800).'
          },
          outlook3to5yr: {
            en: 'Drops faster toward €4,000–€5,400 over 3–5 yrs as complex emissions repairs outweigh used car value.',
            de: 'Verliert in 3–5 Jahren schneller Richtung 4.000–5.400 €, da komplexe Abgasreparaturen schnell unwirtschaftlich werden.',
            ru: 'Быстрее теряет в цене (к €4 000–5 400 за 3–5 лет) из-за высокой стоимости ремонта экологии и форсунок.'
          }
        },
        watchoutExtra: {
          en: [
            '5th exhaust fuel injector & DPNR/D-CAT catalyst replacements easily cost €1,500–€2,600 if clogged by city driving.',
            'Piezo injectors cannot be rebuilt cheaply like solenoid units, and pre-2009 blocks carry the same 2AD head-gasket blow-by risk.'
          ],
          de: [
            'Das 5. Einspritzventil im Auspuff sowie der DPNR-Katalysator verursachen bei Kurzstrecken-Verstopfung schnell 1.500–2.600 € Kosten.',
            'Piezo-Injektoren sind teuer im Tausch, und Vorfacelift-Blöcke (vor 2009) tragen das bekannte Kopfdichtungs-Risiko.'
          ],
          ru: [
            'Выход из строя 5-й форсунки дожига и катализатора DPNR/D-CAT при городской езде обходится в €1 500–2 600.',
            'Пьезофорсунки Denso дороги и плохо поддаются ремонту, а моторы до 2009 года также подвержены пробою прокладки ГБЦ.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (RAV4 XA30)', de: 'EU / DE Ausstattungslinien (RAV4 XA30)', ru: 'Европейские комплектации (RAV4 XA30)' },
      sectionHint: { en: 'Sol / Life hits the comfort & value sweet spot; Executive adds leather, keyless & heated seats', de: 'Sol / Life bietet das beste Preis-Leistungs-Verhältnis; Executive ergänzt Leder & Smart-Key', ru: 'Sol / Life — оптимальный баланс оснащения; Executive добавляет кожу, бесключевой доступ и обогрев' },
      faceliftTitle: { en: '2009 & 2010 Facelift Upgrades (XA30 II/III)', de: 'Facelift-Upgrades 2009 & 2010 (XA30 II/III)', ru: 'Рестайлинги 2009 и 2010 (XA30 II/III)' },
      faceliftKicker: { en: '2009/2010 Refresh', de: 'Facelift 2009/2010', ru: 'Рестайлинг 2009/2010' },
      trims: [
        {
          id: 'rav4-base',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Base', de: 'Base', ru: 'Base' },
          delta: { en: '-€800 – €1,200', de: '-800 – 1.200 €', ru: '-€800 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Fleet/entry spec with steel or basic 17" wheels, manual A/C, and rear tailgate spare wheel on early cars.',
            de: 'Basismodell mit Stahl-/17"-Rädern, manueller Klima und frühem Heckklappen-Reserverad.',
            ru: 'Начальная версия с кондиционером и запаской на задней двери у ранних экземпляров.'
          },
          highlights: {
            en: ['7 airbags, VSC & sliding 60/40 rear bench', 'Manual A/C & basic CD audio', 'Steel or basic 17" alloy wheels'],
            de: ['7 Airbags, VSC & verschiebbare Rückbank', 'Manuelle Klimaanlage & Basis-CD-Radio', 'Stahl- oder einfache 17"-Felgen'],
            ru: ['7 подушек, VSC и сдвижной диван', 'Ручной кондиционер и CD-аудио', 'Штамповки или базовые диски 17"']
          }
        },
        {
          id: 'sol',
          tierClass: 'tier-3',
          tier: { en: 'Classic Mid', de: 'Solide Mitte', ru: 'Классик' },
          name: { en: 'Sol', de: 'Sol', ru: 'Sol' },
          delta: { en: '-€200 – €500', de: '-200 – 500 €', ru: '-€200 – €500' },
          isSweetSpot: false,
          summary: {
            en: 'Pre-facelift core trim adding dual-zone auto climate, 17" alloys, cruise control, and rain/light sensors.',
            de: 'Vor-Facelift-Mitte mit 2-Zonen-Klimaautomatik, 17"-Alus, Tempomat und Licht-/Regensensor.',
            ru: 'Дорестайлинговая средняя версия с 2-зонным климатом, дисками 17", круизом и датчиками.'
          },
          highlights: {
            en: ['17" alloys & dual-zone auto climate', 'Cruise control & rain/light sensors', 'Rear privacy glass & fog lights'],
            de: ['17"-Alus & 2-Zonen-Klimaautomatik', 'Tempomat & Licht-/Regensensor', 'Privacy-Verglasung & Nebelscheinwerfer'],
            ru: ['Диски 17" и 2-зонный климат-контроль', 'Круиз-контроль и датчики света/дождя', 'Тонировка и противотуманные фары']
          }
        },
        {
          id: 'life',
          tierClass: 'tier-4',
          tier: { en: 'Facelift Daily', de: 'FL Alltag', ru: 'Рест. Стандарт' },
          name: { en: 'Life', de: 'Life', ru: 'Life' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: false,
          summary: {
            en: 'Facelift core trim (2009+) bringing updated front fascia, Bluetooth audio, and improved cabin trim.',
            de: 'Facelift-Alltagslinie (ab 2009) mit überarbeiteter Front, Bluetooth und aufgefrischtem Innenraum.',
            ru: 'Рестайлинговая база (с 2009 г.) с обновлённым дизайном, Bluetooth и свежей отделкой.'
          },
          highlights: {
            en: ['2009+ facelift grille & Bluetooth audio', '17" alloys & dual-zone auto climate', 'Cruise control & auto-dimming mirror'],
            de: ['Facelift-Front ab 2009 & Bluetooth', '17"-Alus & 2-Zonen-Klimaautomatik', 'Tempomat & automatisch abblendender Spiegel'],
            ru: ['Рестайлинг с 2009 г. и Bluetooth', 'Диски 17" и 2-зонный климат', 'Круиз и автозатемнение зеркала']
          }
        },
        {
          id: 'edition-s',
          tierClass: 'tier-6',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Edition-S', de: 'Edition-S', ru: 'Edition-S' },
          delta: { en: '+€500 – €1,000', de: '+500 – 1.000 €', ru: '+€500 – €1 000' },
          isSweetSpot: true,
          summary: {
            en: 'The clean-tailgate sweet spot — deletes the heavy door-mounted spare and adds Alcantara + heated seats.',
            de: 'Der beliebteste XA30-Sweet-Spot ohne schweres Heckklappen-Reserverad, dafür mit Alcantara und Sitzheizung.',
            ru: 'Лучший выбор без тяжёлой запаски на двери: алькантара, подогрев сидений и диски 18".'
          },
          highlights: {
            en: ['Clean tailgate (no heavy external spare)', 'Half-leather / Alcantara + heated seats', '18" alloys & flared wheel-arch trim'],
            de: ['Glatte Heckklappe ohne Reserverad', 'Alcantara/Teilleder + Sitzheizung', '18"-Alus & verbreiterte Radläufe'],
            ru: ['Гладкая задняя дверь без запаски', 'Алькантара/кожа и подогрев сидений', 'Диски 18" и расширители арок']
          }
        },
        {
          id: 'executive',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Executive', ru: 'Флагман' },
          name: { en: 'Executive', de: 'Executive', ru: 'Executive' },
          delta: { en: '+€900 – €1,600', de: '+900 – 1.600 €', ru: '+€900 – €1 600' },
          isSweetSpot: false,
          summary: {
            en: 'Full-spec flagship with full leather, electric driver seat, Smart Entry, and touchscreen navigation + camera.',
            de: 'Voll ausgestattetes Topmodell mit Vollleder, elektrischem Fahrersitz, Smart-Key und Touch-Navi + Kamera.',
            ru: 'Максимальный флагман с кожаным салоном, электрокреслом, бесключевым доступом и навигацией.'
          },
          highlights: {
            en: ['Full leather & power driver seat', 'Smart Entry & push-button start', 'Touchscreen navigation + reversing camera'],
            de: ['Vollleder & elektrischer Fahrersitz', 'Smart-Key & Startknopf', 'Touchscreen-Navi + Rückfahrkamera'],
            ru: ['Полная кожа и электропривод кресла', 'Бесключевой доступ и кнопка старта', 'Сенсорная навигация + камера']
          }
        }
      ],
      matrix: [
        { feature: { en: '17"/18" Alloy Wheels', de: '17"-/18"-Leichtmetallfelgen', ru: 'Литые диски 17"/18"' }, vals: ['opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate Control', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Cruise Control & Rain/Light Sensors', de: 'Tempomat & Licht-/Regensensor', ru: 'Круиз и датчики света/дождя' }, vals: ['no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Full Leather / Alcantara Trim', de: 'Vollleder / Alcantara-Ausstattung', ru: 'Кожа / алькантара в салоне' }, vals: ['no', 'no', 'no', 'std', 'std'] },
        { feature: { en: 'Smart Entry & Push-Button Start', de: 'Smart-Key & Startknopf', ru: 'Бесключевой доступ и кнопка старта' }, vals: ['no', 'no', 'opt', 'opt', 'std'] },
        { feature: { en: 'Clean Tailgate (No External Spare)', de: 'Glatte Heckklappe (ohne Reserverad)', ru: 'Дверь багажника без внешней запаски' }, vals: ['no', 'no', 'opt', 'std', 'opt'] },
        { feature: { en: 'Sliding & Reclining 60/40 Rear Bench', de: 'Verschieb- & neigbare 60/40-Rückbank', ru: 'Сдвижной задний диван 60/40' }, vals: ['std', 'std', 'std', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Side-hinged tailgate opens toward the kerb/roadside (watch tight parallel parking spaces), revealing a huge 586 L flat-floor boot.',
          'Sliding and reclining 60/40 rear seats plus deep underfloor storage box add serious everyday family practicality.',
          'Chunky, intuitive dials survive heavy family use well, though silver dashboard trim scratches easily if bumped.'
        ],
        de: [
          'Die seitlich angeschlagene Hecktür braucht beim Öffnen Platz nach hinten (Achtung in engen Parklücken), gibt aber 586 Liter Kofferraum frei.',
          'Verschiebbare und neigungsverstellbare Rücksitze plus großes Unterbodenfach bieten enorme Variabilität.',
          'Große, logische Drehregler bleiben im Alltag top bedienbar — die silberfarbenen Zierleisten sind allerdings kratzempfindlich.'
        ],
        ru: [
          'Распашная вбок пятая дверь требует запаса места при параллельной парковке, но открывает удобный 586-литровый багажник.',
          'Сдвижной задний ряд с регулировкой наклона спинки и глубокое подполье повышают практичность в поездках.',
          'Крупные понятные регуляторы климата долговечны, но серебристые вставки панели легко собирают мелкие царапины.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: '2.0 VVT-i uses either a 5-speed manual or rugged 4-speed auto; 2009+ 2.0 Valvematic steps up to a 6-speed manual or Multidrive S CVT with paddle shifters and Sport mode.',
          de: 'Der 2.0 VVT-i kombiniert 5-Gang-Schalter oder robuste 4-AT; der 2.0 Valvematic ab 2009 bringt ein 6-Gang-Getriebe oder das Multidrive-S-CVT mit Schaltwippen.',
          ru: '2.0 VVT-i оснащался 5-МКПП или неубиваемым 4-ст. автоматом; рестайлинговый 2.0 Valvematic получил 6-МКПП либо вариатор Multidrive S с подрулевыми лепестками.'
        },
        diesel: {
          en: 'All 2.2 D-4D 136 and 2.2 D-CAT 177 models are 6-speed manual only; the 2009+ Euro 5 2.2 D-4D 150 uniquely offers a smooth 6-speed torque-converter automatic with steering paddles.',
          de: '2.2 D-4D 136 und 2.2 D-CAT 177 sind reine 6-Gang-Schalter; nur der Euro-5-Diesel 2.2 D-4D 150 ab 2009 bietet optional eine komfortable 6-Stufen-Wandlerautomatik.',
          ru: 'Версии 2.2 D-4D 136 и D-CAT 177 бывают только с 6-МКПП; и лишь рестайлинговый 2.2 D-4D 150 (Euro 5) предлагает классический 6-ступенчатый автомат.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2009 refresh introduces the cleaner 2.0 Valvematic (158 HP) & Euro 5 2.2 D-4D 150 (with 6-AT option), replacing early D-4D 136 units.',
          '2010 second facelift sharpens the front headlights, wide chrome-slat grille, and bumper fog-light surrounds.',
          'Adds flat-bottom steering wheel, revised white-lit instrument dials, and available Touch & Go navigation with reversing camera.',
          'Improved door seals and firewall insulation noticeably lower diesel and wind noise at 120–130 km/h.'
        ],
        de: [
          'Facelift 2009 bringt den sparsameren 2.0 Valvematic (158 PS) sowie den Euro-5-2.2 D-4D (150 PS, optional 6-AT) statt des frühen 136-PS-Diesels.',
          'Zweite Modellpflege 2010 schärft Scheinwerfer, breiteren Chromgrill und Frontstoßfänger deutlich nach.',
          'Abgeflachtes Lenkrad, klarere Instrumente und ab späten Baujahren Toyota Touch & Go inkl. Rückfahrkamera.',
          'Bessere Türdichtungen und Stirnwand-Dämmung senken Wind- und Motorgeräusche bei Autobahntempo.'
        ],
        ru: [
          'Обновление 2009 года принесло мотор 2.0 Valvematic (158 л.с.) и доработанный 2.2 D-4D 150 (Euro 5, опция 6-АКПП).',
          'Второе обновление 2010 года изменило переднюю часть: узкие фары, широкая хромированная решётка и новый бампер.',
          'Появился скошенный снизу руль, более чёткая приборная панель и мультимедиа Touch & Go с камерой заднего вида.',
          'Усиленные уплотнители дверей и шумоизоляция моторного щита заметно снизили шум на скорости 120–130 км/ч.'
        ]
      }
    }
  }
});