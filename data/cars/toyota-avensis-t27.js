// AutoDuel Vehicle Data — toyota-avensis-t27
registerAutoDuelVehicle({
  roster: {
    id: 'toyota-avensis-t27',
    number: '13',
    carType: 'sedan',
    gridOrder: 13,
    gridLabel: 'Toyota Avensis',
    yearMake: '2008-2018 TOYOTA',
    shortTitle: 'AVENSIS (T27)',
    fullName: '2008-2018 Toyota Avensis (T27)',
    rarityClass: 'rarity-common',
    drivetrain: 'FWD',
    image: 'assets/toyota-avensis-t27.webp',
    defaultEngineId: '1.8-valvematic',
    sharedBuyerFit: {
      cards: {
        avensisComfortRide: {
          en: 'You want a calm, comfortable highway cruiser: Soft-tuned suspension and quiet cruising take the stress out of long journeys.',
          de: 'Du suchst einen ruhigen Langstrecken-Gleiter: Komfortable Federung und gelassenes Fahrverhalten machen weite Fahrten entspannt.',
          ru: 'Тебе нужен спокойный комфортный седан для трассы: Мягкая подвеска и тихий ход берегут силы в дальней дороге.'
        },
        avensisSpaceSafety: {
          en: 'You want generous family space & 5-star safety: Roomy rear legroom, 509 L boot, and 7 airbags (with knee airbag) protect everyone.',
          de: 'Du willst viel Platz und 5-Sterne-Sicherheit: Großer Knieraum hinten, 509 L Kofferraum und 7 Airbags überzeugen im Alltag.',
          ru: 'Тебе важен простор и безопасность 5★: Много места сзади, багажник 509 л и 7 подушек безопасности.'
        },
        avensisValvematic: {
          en: 'You want simple Toyota durability: Port injection and timing chain avoid turbo, DPF, and direct-injection headaches.',
          de: 'Du willst bewährte Toyota-Zuverlässigkeit: Saugrohreinspritzung und Steuerkette umgehen Turbo- und DPF-Risiken.',
          ru: 'Тебе нужна проверенная надёжность Toyota: Распределённый впрыск и цепь ГРМ без турбины и сажевого фильтра.'
        },
        avensisD4dTorque: {
          en: 'You want effortless diesel motorway torque: Strong mid-range pull and tall gearing keep highway fuel bills low.',
          de: 'Du spulst viele Autobahn-Kilometer ab: Kräftiger Diesel-Durchzug und lange Übersetzung halten den Verbrauch niedrig.',
          ru: 'Ты много ездишь по трассе: Уверенная дизельная тяга и спокойные обороты обеспечивают низкий расход.'
        },
        avensisRefinedCabin: {
          en: 'You want a quiet, supportive long-distance cabin: Low wind noise and ergonomic seats keep multi-hour trips fatigue-free.',
          de: 'Du willst einen ruhigen, langstreckentauglichen Innenraum: Wenig Windgeräusche und bequeme Sitze machen weite Fahrten entspannt.',
          ru: 'Тебе нужен тихий и удобный салон для дальних поездок: Хорошая шумоизоляция и эргономичные сиденья берегут спину.'
        },
        avensisCalmHandling: {
          en: 'You crave sporty steering feedback: Soft comfort tuning prioritizes stability over sharp, engaging cornering.',
          de: 'Du suchst sportliches Kurven-Feedback: Die weiche Komfort-Abstimmung stellt Gelassenheit klar vor Fahrdynamik.',
          ru: 'Ты любишь азартную управляемость: Мягкое шасси настроено на плавность хода, а не на острые повороты.'
        },
        avensisDatedTech: {
          en: 'You expect crisp modern infotainment: Older Toyota Touch graphics and styling feel conservative next to newer rivals.',
          de: 'Du erwartest modernes Infotainment: Grafik und Cockpit-Optik wirken im Vergleich zu jüngeren Modellen konservativ.',
          ru: 'Тебе нужна современная мультимедиа: Графика экрана и интерьер выглядят довольно консервативно.'
        },
        avensisModestPull: {
          en: 'You want effortless low-rev punch: Naturally aspirated Valvematic units need higher revs when overtaking with a full load.',
          de: 'Du willst mühelosen Schub aus dem Keller: Ohne Turbo verlangen die Valvematic-Motoren beim Überholen mehr Drehzahl.',
          ru: 'Тебе нужна тяга с самых низов: Атмосферный Valvematic требует раскрутки при обгонах с полной загрузкой.'
        },
        avensisSedanOpening: {
          en: 'You load tall boxy cargo often: The 4-door sedan boot lid has a narrower opening than a wagon.',
          de: 'Du lädst oft sperrige Kartons ein: Die Limousinen-Heckklappe ist schmaler als beim Kombi.',
          ru: 'Ты часто возишь габаритный груз: Проём багажника седана уже, чем у универсала.'
        },
        avensisBmwDieselChain: {
          en: 'You want zero timing-chain worries: The 2015+ BMW-derived diesel places its timing chain at the rear and needs EGR-cooler recall proof.',
          de: 'Du willst kein Steuerketten-Risiko: Der BMW-basierte Diesel ab 2015 hat die Steuerkette getriebeseitig und braucht den AGR-Kühler-Rückruf.',
          ru: 'Ты не хочешь рисковать цепью ГРМ: Дизель от BMW (с 2015 г.) имеет цепь со стороны КПП и требует проверки отзыва по радиатору ЕГР.'
        },
        avensisToyota20HeadWatch: {
          en: 'You want zero diesel-seal worries: Early 2008–2011 Toyota 2.0 D-4D units can seep coolant at the head gasket and soot up the EGR.',
          de: 'Du willst keinerlei Dichtungs-Risiken: Frühe Toyota 2.0 D-4D (2008–2011) können an der Kopfdichtung schwitzen und das AGR verkoken.',
          ru: 'Ты не хочешь рисков по прокладке ГБЦ: Ранние Toyota 2.0 D-4D (2008–2011) склонны к подтеканию антифриза и нагару в клапане ЕГР.'
        },
        avensis22HeadGasket: {
          en: 'You want zero head-gasket or injector worries: The 2.2 D-4D 150 HP requires clean coolant history and carbon-free EGR maintenance.',
          de: 'Du willst kein Kopfdichtungs-Risiko: Der 2.2 D-4D (150 PS) verlangt einwandfreie Kühlmittel-Historie und gepflegtes AGR-System.',
          ru: 'Ты не хочешь проблем с ГБЦ: 2.2 D-4D (150 л.с.) требует чистой истории по системе охлаждения и обслуженного ЕГР.'
        },
        avensisDcatComplexity: {
          en: 'You want simple emissions hardware: The 177 HP D-CAT adds a sensitive 5th-injector DPNR catalyst alongside head-gasket checks.',
          de: 'Du willst schlichte Abgastechnik: Der 177-PS-D-CAT hat zusätzlich einen empfindlichen 5.-Injektor-DPNR-Kat und Kopfdichtungs-Checks.',
          ru: 'Тебе нужна простая система очистки выхлопа: Версия D-CAT (177 л.с.) оснащена капризной 5-й форсункой DPNR и требует проверки ГБЦ.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'A calm, roomy, low-risk family sedan — ideal if you prioritize comfort and Toyota reliability over sportiness.',
          de: 'Eine ruhige, geräumige und risikoarme Familienlimousine — ideal, wenn Komfort und Toyota-Zuverlässigkeit vor Sportlichkeit stehen.',
          ru: 'Спокойный, просторный и надёжный семейный седан — идеален, если комфорт и ресурс Toyota важнее азарта.'
        },
        ideal: [
          'avensisComfortRide',
          'avensisSpaceSafety',
          'avensisValvematic',
          'globalPetrolCityZones'
        ],
        skip: ['avensisCalmHandling', 'avensisModestPull', 'avensisDatedTech', 'avensisSedanOpening']
      },
      diesel: {
        summary: {
          en: 'A comfortable, frugal motorway cruiser — just match the right diesel year and verify highway service history.',
          de: 'Ein komfortabler, sparsamer Autobahn-Gleiter — achte auf das passende Baujahr und eine saubere Langstrecken-Historie.',
          ru: 'Комфортный и экономичный седан для трассы — важно выбрать удачный год выпуска и проверить историю обслуживания.'
        },
        ideal: ['avensisComfortRide', 'avensisSpaceSafety', 'avensisD4dTorque', 'avensisRefinedCabin'],
        skip: [
          'globalDieselShortTripRisk',
          'avensisToyota20HeadWatch',
          'avensisCalmHandling',
          'avensisDatedTech'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Solid Toyota Build • Low TÜV Defects — Check Rear Wheel-Arch Lips',
          strengths: [
            'Solid Toyota Build • Low TÜV Defects keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Generally low TÜV rust defects; check rear wheel-arch lips and electronic parking brake actuator.',
            'Check Rear Wheel-Arch Lips.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Solide Toyota-Verarbeitung • Wenig TÜV-Mängel — Hintere Radlaufkanten prüfen',
          strengths: [
            'Solide Toyota-Verarbeitung • Wenig TÜV-Mängel hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Wenig TÜV-Mängel; hintere Radlaufkanten und elektrische Parkbremse prüfen.',
            'Hintere Radlaufkanten prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Крепкая сборка Toyota • Мало замечаний TÜV — Проверить кромки задних арок',
          strengths: [
            'Крепкая сборка Toyota • Мало замечаний TÜV надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Низкий уровень коррозии по отчётам TÜV; проверьте задние арки и электроручник.',
            'Проверить кромки задних арок.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Soft-Touch Dash • Clear Controls',
          strengths: [
            'Soft-Touch Dash • Clear Controls ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Soft-touch upper dash holds up well, though earlier touchscreen graphics feel dated.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Weiche Armaturen • Klare Bedienung',
          strengths: [
            'Weiche Armaturen • Klare Bedienung sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Solide Soft-Touch-Materialien oben, aber ältere Touchscreen-Grafik.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Мягкая панель • Понятное управление',
          strengths: [
            'Мягкая панель • Понятное управление обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Мягкий верх панели износостойкий, но графика мультимедиа устарела.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '4.75 m Sedan • 10.9 m Turning Circle',
          strengths: [
            '4.75 m Sedan • 10.9 m Turning Circle makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            '4.75 m sedan length with compact 10.9 m turning circle; rear sensors ease tight parking.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '4,75 m Limousine • 10,9 m Wendekreis',
          strengths: [
            '4,75 m Limousine • 10,9 m Wendekreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            '4,75 m Länge bei handlichem 10,9-m-Wendekreis; Parksensoren erleichtern das Rangieren.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Седан 4,75 м • Разворот 10,9 м',
          strengths: [
            'Седан 4,75 м • Разворот 10,9 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Длина 4,75 м при умеренном развороте 10,9 м; парктроники помогают при парковке.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2009) — 7 Airbags + Knee + VSC+',
          strengths: [
            'Euro NCAP 5★ (2009) provides solid passive crash protection for its class and era.',
            '7 Airbags + Knee + VSC+ standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2009) — 7 Airbags inkl. Knie + VSC+',
          strengths: [
            'Euro NCAP 5★ (2009) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '7 Airbags inkl. Knie + VSC+ serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (2009) — 7 подушек (вкл. коленную) + VSC+',
          strengths: [
            'Euro NCAP 5★ (2009) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '7 подушек (вкл. коленную) + VSC+ входят в оснащение большинства версий.'
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
          headline: 'Roomy Rear Legroom',
          strengths: [
            'Roomy Rear Legroom keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Wide-Opening Doors.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Viel Beinfreiheit hinten',
          strengths: [
            'Viel Beinfreiheit hinten sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Weit öffnende Türen.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Просторный второй ряд',
          strengths: [
            'Просторный второй ряд обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Широко открывающиеся двери.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '509L Sedan Boot',
          strengths: [
            'Practical 509L sedan boot with wide-opening doors and generous rear legroom.',
            'Split-Folding Rear Seats improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '509L Kofferraum',
          strengths: [
            'Praktischer Nutzwert: 509 L Limousinen-Kofferraum, weit öffnende Türen und viel Beinfreiheit im Fond.',
            'Geteilt umklappbare Rückbank erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник седана 509 л',
          strengths: [
            'Практичный объём: багажник седана 509 л, широкие двери и просторный задний ряд.',
            'Раздельно складывающийся диван добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Calm Stable Handling',
          strengths: [
            'Tuned squarely for calm, comfortable highway stability over aggressive cornering.',
            'Comfort Over Corner Sharpness.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Ruhig & stabil in Kurven',
          strengths: [
            'Klar auf ruhigen Langstreckenkomfort statt sportlicher Kurvenhatz abgestimmt.',
            'Komfort vor Kurven-Schärfe.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Спокойная устойчивая управляемость',
          strengths: [
            'Подвеска настроена на спокойный и комфортный ход по трассе.',
            'Комфорт важнее остроты в поворотах.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 36.9 m — 295 mm Discs • Steady Stopper',
          strengths: [
            '100–0 km/h: 36.9 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 36,9 m — 295 mm Scheiben • Solide Bremsleistung',
          strengths: [
            '100–0 km/h: 36,9 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 36,9 м — 295 мм диски • Стабильное замедление',
          strengths: [
            '100–0 км/ч: 36,9 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '520 kg Payload • 1,300 kg Braked Towing',
          strengths: ['520 kg Payload and 1,300 kg Braked Towing handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '520 kg Zuladung • 1.300 kg Anhängelast',
          strengths: [
            '520 kg Zuladung und 1.300 kg Anhängelast bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 520 кг • Прицеп до 1 300 кг',
          strengths: ['Нагрузка 520 кг и Прицеп до 1 300 кг закрывают повседневные задачи по загрузке.'],
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
          headline: 'Trusted Reliable Toyota Name',
          strengths: [
            'Trusted Reliable Toyota Name helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Vertrauenswürdiger Toyota-Name',
          strengths: [
            'Vertrauenswürdiger Toyota-Name sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Репутация надёжной Toyota',
          strengths: [
            'Репутация надёжной Toyota поддерживает стабильный спрос на вторичном рынке.',
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
            headline: 'Slick 6-Speed Manual Only — Light Clutch',
            strengths: [
              'Slick 6-Speed Manual Only matches this powertrain well for everyday driving.',
              'Light Clutch.'
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
            headline: 'Leichtgängiges 6-Gang-Getriebe — Leichte Kupplung',
            strengths: [
              'Leichtgängiges 6-Gang-Getriebe passt gut zur Motorcharakteristik im Alltag.',
              'Leichte Kupplung.'
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
            headline: 'Лёгкая 6-ст. МКПП — Мягкое сцепление',
            strengths: [
              'Лёгкая 6-ст. МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Мягкое сцепление.'
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
            headline: 'Dependable Toyota Electrics',
            strengths: [
              'Dependable Toyota Electrics keeps electrical diagnostics straightforward.',
              'Simple Switchgear • Few Faults.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Zuverlässige Toyota-Elektrik',
            strengths: [
              'Zuverlässige Toyota-Elektrik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Schlichte Bedienung • Wenige Defekte.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная электрика Toyota',
            strengths: [
              'Надёжная электрика Toyota упрощает диагностику и обслуживание электрооборудования.',
              'Простые блоки • Мало отказов.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Soft Comfort-Tuned Ride',
            strengths: [
              'Soft Comfort-Tuned Ride delivers pleasant everyday composure.',
              'Quiet Cabin On The Motorway.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Weiches Komfort-Fahrwerk',
            strengths: [
              'Weiches Komfort-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser Innenraum auf der Autobahn.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая комфортная подвеска',
            strengths: [
              'Мягкая комфортная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон на трассе.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'No Turbo / DPF / Belt Bills — Affordable Routine Parts',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Affordable Routine Parts.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'No Turbo / DPF / Belt Bills.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kein Turbo / DPF / Zahnriemen — Günstige Verschleißteile',
            strengths: [
              'Kein Turbo / DPF / Zahnriemen hält die planbaren jährlichen Wartungskosten im Rahmen.',
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
            headline: 'Нет трат на турбину, DPF и ремень — Недорогие расходники',
            strengths: [
              'Нет трат на турбину, DPF и ремень помогает держать ежегодные затраты на ТО под контролем.',
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
            headline: '6-MT Or Smooth CVT — CVT Needs Fluid Changes',
            strengths: [
              '6-MT Or Smooth CVT matches this powertrain well for everyday driving.',
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
            headline: '6-Gang oder sanfte CVT — CVT braucht Ölwechsel',
            strengths: [
              '6-Gang oder sanfte CVT passt gut zur Motorcharakteristik im Alltag.',
              'CVT braucht Ölwechsel.'
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
            headline: '6-МКПП или плавный вариатор — Вариатору нужна замена масла',
            strengths: [
              '6-МКПП или плавный вариатор хорошо сочетается с данным двигателем в повседневной езде.',
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
            headline: 'Dependable Toyota Electrics',
            strengths: [
              'Dependable Toyota Electrics keeps electrical diagnostics straightforward.',
              'Simple Switchgear • Few Faults.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Zuverlässige Toyota-Elektrik',
            strengths: [
              'Zuverlässige Toyota-Elektrik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Schlichte Bedienung • Wenige Defekte.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная электрика Toyota',
            strengths: [
              'Надёжная электрика Toyota упрощает диагностику и обслуживание электрооборудования.',
              'Простые блоки • Мало отказов.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Soft Comfort-Tuned Ride',
            strengths: [
              'Soft Comfort-Tuned Ride delivers pleasant everyday composure.',
              'Quiet Cabin On The Motorway.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Weiches Komfort-Fahrwerk',
            strengths: [
              'Weiches Komfort-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser Innenraum auf der Autobahn.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая комфортная подвеска',
            strengths: [
              'Мягкая комфортная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон на трассе.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'No Turbo / DPF / Belt Bills — Affordable Routine Parts',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Affordable Routine Parts.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'No Turbo / DPF / Belt Bills.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kein Turbo / DPF / Zahnriemen — Günstige Verschleißteile',
            strengths: [
              'Kein Turbo / DPF / Zahnriemen hält die planbaren jährlichen Wartungskosten im Rahmen.',
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
            headline: 'Нет трат на турбину, DPF и ремень — Недорогие расходники',
            strengths: [
              'Нет трат на турбину, DPF и ремень помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Возрастной износ сайлентблоков подвески, тормозов и выхлопной системы требует плановых ежегодных трат.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-6mt': {
        transmissionDriveline: {
          en: {
            headline: '6-MT Only • Mind The Flywheel — Light Clutch Feel',
            strengths: [
              'Proven 6-speed manual gearbox delivers positive shift feel and durable gearsets.',
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
            headline: 'Nur 6-Gang • Schwungrad beachten — Leichte Kupplung',
            strengths: [
              'Bewährtes 6-Gang-Schaltgetriebe mit sauberer Führung und langlebigen Radsätzen.',
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
            headline: 'Только 6-МКПП • Следить за маховиком — Лёгкое сцепление',
            strengths: [
              'Проверенная 6-ступенчатая механика радует чётким переключением и ресурсом.',
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
            headline: 'Dependable Toyota Electrics',
            strengths: [
              'Dependable Toyota Electrics keeps electrical diagnostics straightforward.',
              'Simple Switchgear • Few Faults.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Zuverlässige Toyota-Elektrik',
            strengths: [
              'Zuverlässige Toyota-Elektrik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Schlichte Bedienung • Wenige Defekte.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная электрика Toyota',
            strengths: [
              'Надёжная электрика Toyota упрощает диагностику и обслуживание электрооборудования.',
              'Простые блоки • Мало отказов.'
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
            headline: 'Soft Comfort-Tuned Ride',
            strengths: [
              'Soft Comfort-Tuned Ride delivers pleasant everyday composure.',
              'Quiet Cabin On The Motorway.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Weiches Komfort-Fahrwerk',
            strengths: [
              'Weiches Komfort-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser Innenraum auf der Autobahn.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая комфортная подвеска',
            strengths: [
              'Мягкая комфортная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон на трассе.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Rear Timing Chain = Costly If Neglected — Flywheel & Filter Care',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Flywheel & Filter Care.', 'Rear Timing Chain = Costly If Neglected.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Hintere Steuerkette teuer bei Vernachlässigung — Schwungrad & Filter pflegen',
            strengths: [
              'Planbare Wartungsintervalle mit klaren Vorgaben halten die laufenden Servicekosten kalkulierbar.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: [
              'Schwungrad & Filter pflegen.',
              'Hintere Steuerkette teuer bei Vernachlässigung.'
            ],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Цепь сзади дорога при запуске — Уход за маховиком и фильтром',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Уход за маховиком и фильтром.',
              'Цепь сзади дорога при запуске.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: '6-MT Or 6-Speed Auto — Flywheel Wear Item',
            strengths: [
              '6-MT Or 6-Speed Auto matches this powertrain well for everyday driving.',
              'Proven shift linkage and durable gearsets when transmission fluid is maintained.'
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
            headline: '6-Gang oder 6-Stufen-Automatik — Schwungrad Verschleißteil',
            strengths: [
              '6-Gang oder 6-Stufen-Automatik passt gut zur Motorcharakteristik im Alltag.',
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
            headline: '6-МКПП или 6-АКПП — Маховик расходник',
            strengths: [
              '6-МКПП или 6-АКПП хорошо сочетается с данным двигателем в повседневной езде.',
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
            headline: 'Dependable Toyota Electrics',
            strengths: [
              'Dependable Toyota Electrics keeps electrical diagnostics straightforward.',
              'Simple Switchgear • Few Faults.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Zuverlässige Toyota-Elektrik',
            strengths: [
              'Zuverlässige Toyota-Elektrik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Schlichte Bedienung • Wenige Defekte.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная электрика Toyota',
            strengths: [
              'Надёжная электрика Toyota упрощает диагностику и обслуживание электрооборудования.',
              'Простые блоки • Мало отказов.'
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
            headline: 'Soft Comfort-Tuned Ride',
            strengths: [
              'Soft Comfort-Tuned Ride delivers pleasant everyday composure.',
              'Quiet Cabin On The Motorway.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Weiches Komfort-Fahrwerk',
            strengths: [
              'Weiches Komfort-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser Innenraum auf der Autobahn.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Мягкая комфортная подвеска',
            strengths: [
              'Мягкая комфортная подвеска обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон на трассе.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Head Seal, Flywheel & Filter Costs — Heavier Diesel Wear Items',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Heavier Diesel Wear Items.', 'Head Seal, Flywheel & Filter Costs.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kopfdichtung, Schwungrad & Filter kosten — Teurere Diesel-Verschleißteile',
            strengths: [
              'Kopfdichtung, Schwungrad & Filter kosten hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teurere Diesel-Verschleißteile.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Затраты на ГБЦ, маховик и фильтр — Дороже расходники дизеля',
            strengths: [
              'Затраты на ГБЦ, маховик и фильтр помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дороже расходники дизеля.'],
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
      rideTuning: { en: 'Plush / Highway Cruiser', de: 'Komfortabel / Gleiter', ru: 'Мягкая / Трассовый круизер' },
      highwayNoise: { en: '~67 dB · Very Quiet', de: '~67 dB · Sehr leise', ru: '~67 дБ · Очень тихо' },
      cabinMaterials: { en: 'Sober Soft-Touch Quality', de: 'Solides Soft-Touch-Cockpit', ru: 'Качественный строгий салон' },
      controls: '@physButtons',
      turningCircle: '10.8 m',
      visibility: { en: 'Good Forward · High Boot', de: 'Vorn top · Hohes Heck', ru: 'Хороший вперёд · Высокий багажник' },
      euroNcap: '★★★★★ (2009)',
      safetyTech: { en: '✓ VSC+ · ✓ 7 Airbags (Knee)', de: '✓ VSC+ · ✓ 7 Airbags (Knie)', ru: '✓ VSC+ · ✓ 7 подушек (коленная)' },
      rearRoom: { en: 'Spacious · Flat Rear Floor', de: 'Geräumig · Flacher Boden', ru: 'Просторно · Ровный пол сзади' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Doors', de: '✓ 2× ISOFIX · Große Türen', ru: '✓ 2× ISOFIX · Широкие двери' },
      bootVolume: '509 L / 1,400 L',
      seatUtility: { en: '✓ 60/40 Split + Ski Hatch', de: '✓ 60/40 + Durchlade', ru: '✓ 60/40 + лючок для лыж' },
      payloadRoof: '530 kg · 75 kg',
      driveline: { en: 'FWD (Low-Loss)', de: 'Frontantrieb (Effizient)', ru: 'Передний привод' },
      chassisFeel: { en: 'Calm · Safe & Composed', de: 'Ruhig · Sicher & gelassen', ru: 'Спокойное · Надёжный курс' },
      tractionDiff: { en: 'FWD · VSC+ Stability', de: 'Frontantrieb · VSC+', ru: 'Передний привод · VSC+' },
      braking1000: '~36.8 m',
      brakeSetup: '@discs4',
      valueRetention: '@retHigh',
      resaleDemand: '@demSteady'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspDoubleWishbone' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Comfort-Biased Springs · Double-Wishbone Rear', de: 'Komfort-Abstimmung · Doppelquerlenker hinten', ru: 'Комфортная подвеска · Двухрычажка сзади' } },
            { k: 'seatSupport', v: { en: 'Wide Long-Distance Seats · Low Fatigue', de: 'Breite Langstreckensitze · Sehr ermüdungsarm', ru: 'Широкие кресла для дальних поездок' } }
          ],
          note: { en: 'Built as a relaxed European Autobahn cruiser — prioritizes plush suspension compliance over sharp cornering.', de: 'Als entspannter Reisewagen abgestimmt — schluckt lange Autobahn-Etappen und schlechte Straßen souverän weg.', ru: 'Создан как спокойный европейский круизер — мягко глотает неровности и не утомляет на трассе.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~67 dB(A) at 130 km/h (Quiet Petrols)', de: '~67 dB(A) bei 130 km/h (Leise Benziner)', ru: '~67 дБ(А) при 130 км/ч (Тихие бензины)' } },
            { k: 'acousticGlass', v: { en: 'Strong Firewall & Door Sealing · Calm Cruise', de: 'Gute Stirnwand- & Türdämmung · Ruhiges Gleiten', ru: 'Хорошая шумоизоляция щита и дверей' } }
          ],
          note: { en: 'Notably quieter at motorway speeds than a Mazda 6 or compact hatchbacks.', de: 'Auf der Autobahn spürbar leiser als ein Mazda 6 oder Kompaktwagen.', ru: 'Заметно тише на трассе, чем Mazda 6 или хэтчбеки C-класса.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashboardTrim', v: { en: 'Soft-Touch Dash · Conservative, Tightly Screwed Cabin', de: 'Soft-Touch-Armaturenbrett · Sehr solide verschraubt', ru: 'Мягкая панель · Добротная, нескрипучая сборка' } },
            { k: 'seatUpholstery', v: { en: 'Durable Cloth, Alcantara/Leather or Full Leather', de: 'Robuster Stoff, Alcantara/Leder oder Vollleder', ru: 'Износостойкая ткань, алькантара или кожа' } }
          ],
          note: { en: 'Understated design, but cabin trim and switchgear hold up remarkably well at 200,000+ km.', de: 'Unaufgeregtes Design, aber extrem abriebfeste Schalter und Verkleidungen auch jenseits von 200.000 km.', ru: 'Сдержанный дизайн, но материалы и кнопки сохраняют свежий вид даже после 200 000 км.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turnDiameter', v: { en: '10.8 m (Surprisingly Tight for a 4.7 m Sedan)', de: '10,8 m (Sehr handlich für 4,7 m Länge)', ru: '10,8 м (Компактный разворот для 4,7 м)' } },
            { k: 'steeringType', v: { en: 'Light Electric Power Steering (EPS)', de: 'Leichte elektrische Servolenkung (EPS)', ru: 'Лёгкий электроусилитель (ЭУР)' } }
          ],
          note: { en: 'Tight 10.8 m turning circle makes city U-turns and parking easier than a Mondeo or Mazda 6.', de: 'Der enge 10,8-m-Wendekreis macht Stadtverkehr und Parken leichter als bei Mondeo oder Mazda 6.', ru: 'Разворот 10,8 м делает маневрирование в городе проще, чем на Mondeo или Mazda 6.' }
        },
        visibility: {
          specs: [
            { k: 'allRoundView', v: { en: 'Good Forward Glass · High Sedan Boot Deck', de: 'Gute Sicht nach vorn · Hohes Limousinen-Heck', ru: 'Хороший обзор вперёд · Высокая корма седана' } },
            { k: 'rearView', v: { en: 'Reversing Camera Common on 2012+ Facelift Trims', de: 'Rückfahrkamera ab Facelift 2012 häufig verbaut', ru: 'Камера заднего вида часто есть с рестайлинга 2012' } }
          ],
          note: { en: '2012+ Toyota Touch infotainment trims typically include a crisp factory reversing camera.', de: 'Modelle ab 2012 mit Toyota-Touch-Display bieten meist eine serienmäßige Rückfahrkamera.', ru: 'Версии с 2012 года с экраном Toyota Touch обычно оснащены штатной камерой заднего вида.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'crashRating', v: { en: '5 Stars Euro NCAP (2009) · 90% Adult / 86% Child', de: '5 Sterne Euro NCAP (2009) · 90% Erwachsene / 86% Kinder', ru: '5 звёзд Euro NCAP (2009) · 90% взрослые / 86% дети' } },
            { k: 'bodyStructure', v: { en: '7 Standard Airbags incl. Driver Knee + Active Headrests', de: '7 Serien-Airbags inkl. Knieairbag + aktive Kopfstützen', ru: '7 подушек в базе (вкл. коленную) + активные подголовники' } }
          ],
          note: { en: 'High 5-star crash score with 7 standard airbags across every trim level.', de: 'Starkes 5-Sterne-Crashtestergebnis mit 7 serienmäßigen Airbags in jeder Ausstattung.', ru: 'Высокий 5-звёздочный рейтинг с 7 подушками безопасности в любой комплектации.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeSafety', v: { en: 'VSC+ (Steering-Assist Stability), TRC, ABS/EBD, Brake Assist', de: 'VSC+ (Lenk-ESP), TRC, ABS/EBD, Bremsassistent', ru: 'VSC+ (стабилизация с подруливанием), TRC, ABS/EBD' } },
            { k: 'driverAssists', v: { en: 'Optional Adaptive Cruise (ACC) & Pre-Crash on Top Trims', de: 'Optional Abstandstempomat (ACC) & Pre-Crash in Top-Trims', ru: 'Опционально адаптивный круиз (ACC) в топ-версиях' } }
          ],
          note: { en: 'Solid active safety suite; later 2015+ facelift cars even added Toyota Safety Sense autonomous braking.', de: 'Solide aktive Sicherheit; das zweite Facelift ab 2015 ergänzte sogar Toyota Safety Sense mit Notbremsassistent.', ru: 'Надёжная активная безопасность; после рестайлинга 2015 года добавился комплекс Toyota Safety Sense.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'rearSpace', v: { en: 'Generous Rear Legroom · Almost Completely Flat Rear Floor', de: 'Sehr viel Beinfreiheit · Nahezu ebener Fondboden', ru: 'Просторный второй ряд · Почти идеально ровный пол' } },
            { k: 'frontErgo', v: { en: 'Relaxed Touring Position · Good Visibility & Armrests', de: 'Entspannte Reise-Sitzposition · Gute Ablagen', ru: 'Удобная туристическая посадка и подлокотники' } }
          ],
          note: { en: 'Flat rear floor makes carrying three passengers across the back far more comfortable than RWD rivals.', de: 'Durch den flachen Boden im Fond sitzen auch drei Personen deutlich bequemer als in Hecktrieblern.', ru: 'Ровный пол сзади делает поездки втроём намного удобнее, чем в заднеприводных седанах.' }
        },
        isofixEntry: {
          specs: [
            { k: 'childSeats', v: { en: '2× Outer Rear ISOFIX + Top-Tether Anchors', de: '2× ISOFIX außen hinten + Top-Tether', ru: '2× ISOFIX сзади + Top-Tether' } },
            { k: 'doorAccess', v: { en: 'Wide Rear Doors · Ample Depth for Rear-Facing Seats', de: 'Weite Fondtüren · Genug Tiefe für Reboarder-Sitze', ru: 'Широкие задние двери · Достаточно места для кресел' } }
          ],
          note: { en: 'Easy family access with generous distance between rear bench and front seatbacks.', de: 'Familienfreundlicher Zugang mit großem Abstand zwischen Rückbank und Vordersitzen.', ru: 'Удобный семейный доступ и большой запас места для установки детских кресел.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootCapacity', v: { en: '509 L (Sedan) / 543–1,609 L (Touring Sports Wagon)', de: '509 L (Limousine) / 543–1.609 L (Kombi)', ru: '509 л (Седан) / 543–1 609 л (Универсал)' } },
            { k: 'loadingLip', v: { en: 'Deep Square Sedan Trunk · Wide Opening', de: 'Tiefer rechteckiger Kofferraum · Breite Öffnung', ru: 'Глубокий квадратный багажник с широким проёмом' } }
          ],
          note: { en: 'Generous 509 L sedan trunk swallows full family luggage effortlessly.', de: 'Geräumiger 509-Liter-Kofferraum schluckt Familiengepäck mühelos.', ru: 'Вместительный 509-литровый багажник без труда вмещает семейный багаж.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingSystem', v: { en: '✓ 60/40 Split-Fold Rear Seats + Center Ski Pass-Through', de: '✓ 60/40 umklappbare Rückbank + Ski-Durchlade', ru: '✓ Спинка 60/40 + лючок для длинномеров' } }
          ],
          note: { en: 'Standard 60/40 folding plus center ski hatch adds long-item flexibility to the classic sedan shape.', de: '60/40-Umklappung samt Durchladeklappe macht auch die Limousine alltagstauglich für lange Gegenstände.', ru: 'Складная спинка 60/40 и лючок позволяют перевозить длинные предметы в седане.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: { en: '~530 kg (5 Adults + Full Luggage)', de: '~530 kg (5 Personen + volles Gepäck)', ru: '~530 кг (5 человек + полный багажник)' } },
            { k: 'roofLoad', v: { en: '75 kg Approved Dynamic Roof Load', de: '75 kg zugelassene Dachlast', ru: '75 кг допустимая нагрузка на крышу' } }
          ],
          note: { en: 'Solid 530 kg payload handles holiday loads smoothly; 2.2 diesels tow up to 1,800 kg.', de: 'Solide 530 kg Zuladung für Urlaubsfahrten; die 2.2-Diesel ziehen bis zu 1.800 kg.', ru: 'Запас 530 кг отлично подходит для путешествий; дизели 2.2 тянут до 1 800 кг.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'steeringFeel', v: { en: 'Calm, Isolated EPS · Rock-Steady Straight-Line Tracking', de: 'Ruhige EPS-Lenkung · Sehr stabiler Geradeauslauf', ru: 'Спокойный ЭУР · Отличная курсовая устойчивость' } },
            { k: 'cornering', v: { en: 'Safe Understeer Bias · Built for Stability, Not Apexes', de: 'Sicheres Untersteuern · Auf Stabilität ausgelegt', ru: 'Безопасный баланс · Настроен на стабильность' } }
          ],
          note: { en: 'Less playful than a Mazda 6 or Mondeo, but reassuringly calm and predictable in wet highway weather.', de: 'Weniger sportlich als Mazda 6 oder Mondeo, dafür bei Regen und hohem Tempo extrem gelassen und sicher.', ru: 'Менее азартный, чем Mazda 6 или Mondeo, но очень спокойный и предсказуемый на мокрой трассе.' }
        },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retHigh', resaleDemand: '@demSteady' }
    },
    sharedGearboxes: {
      '6-mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Toyota EC60 · Manual · Single Clutch', de: 'Toyota EC60 · Schaltgetriebe · Kupplung', ru: 'Toyota EC60 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: { headline: 'Toyota EC60 6-Speed Manual — Reliable & Affordable Single Clutch', strengths: ['Durable mechanical linkage with no DMF or CVT fluid expenses.'], watchouts: ['Check 1st/2nd synchros when cold on urban high-milers.'], beforeYouBuy: ['Test cold 1→2→3 shifts and clutch bite height.'] },
          de: { headline: 'Toyota EC60 6-Gang-Getriebe — Zuverlässig ohne ZMS', strengths: ['Robuste Mechanik ohne ZMS- oder CVT-Wartungskosten.'], watchouts: ['Bei hohen Stadtlaufleistungen 1./2. Gang kalt testen.'], beforeYouBuy: ['Kalte Schaltvorgänge 1→2→3 und Kupplungsdruckpunkt prüfen.'] },
          ru: { headline: 'Механика Toyota EC60 6-МКПП — Надёжная коробка без ДММ', strengths: ['Простая механика без расходов на двухмассовый маховик или вариатор.'], watchouts: ['Проверьте 1-ю и 2-ю передачи на холодную на городских авто.'], beforeYouBuy: ['Проверьте включение 1→2→3 на холодную.'] }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Toyota EA60 · Manual + DMF', de: 'Toyota EA60 · Schaltgetriebe + ZMS', ru: 'Toyota EA60 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Toyota', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: { headline: 'Toyota EA60 6-Speed Manual — Strong Diesel Box, Watch DMF', strengths: ['Handles 310–400 Nm diesel torque reliably for high motorway mileage.'], watchouts: ['Dual-mass flywheel & clutch kit cost €950–€1,400 around 170k–220k km.'], beforeYouBuy: ['Test 4th-gear pull from 1,800 rpm and listen for DMF idle rattle.'] },
          de: { headline: 'Toyota EA60 6-Gang-Getriebe — Stark für Diesel, ZMS beachten', strengths: ['Verkraftet 310–400 Nm Diesel-Drehmoment souverän auf der Langstrecke.'], watchouts: ['ZMS und Kupplung kosten bei ca. 170–220 Tkm etwa 950–1.400 €.'], beforeYouBuy: ['Im 4. Gang ab 1.800 U/min testen und auf ZMS-Geräusche im Leerlauf achten.'] },
          ru: { headline: 'Механика Toyota EA60 6-МКПП — Выносливая, контроль ДММ', strengths: ['Уверенно держит 310–400 Н·м дизельной тяги на трассе.'], watchouts: ['Замена ДММ и сцепления к 170–220 тыс. км стоит €950–1 400.'], beforeYouBuy: ['Проверьте сцепление на 4-й передаче с 1 800 об/мин и стук ДММ на холостых.'] }
        }
      },
      'multidrive-s': {
        category: 'automatic',
        label: { en: 'Multidrive S CVT', de: 'Multidrive S CVT', ru: 'Вариатор Multidrive S' },
        shortLabel: { en: 'CVT', de: 'CVT', ru: 'CVT' },
        subLabel: { en: 'Toyota K311 · Belt CVT', de: 'Toyota K311 · Riemen-CVT', ru: 'Toyota K311 · Клиноременный вариатор' },
        specOverrides: { gearbox: '@cvt', clutchDmf: '@torqueConv' },
        subStatDeltas: { transmissionDriveline: { score: 8.2, badges: { en: ['Toyota Multidrive S CVT', 'Smooth City Belt-CVT'], de: ['Toyota Multidrive S CVT', 'Sanfte Stadt-Automatik'], ru: ['Вариатор Toyota Multidrive S', 'Плавный городской ход'] } } },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Toyota Multidrive S Belt CVT (K311)', de: 'Toyota Multidrive S Riemen-CVT (K311)', ru: 'Вариатор Toyota Multidrive S (K311)' } }], note: { en: 'Smooth stepless CVT; refresh Toyota CVT-FE fluid every 60,000 km.', de: 'Stufenloses CVT-Getriebe; alle 60.000 km CVT-FE-Öl wechseln.', ru: 'Плавный вариатор; замена масла CVT-FE каждые 60 тыс. км.' } }, clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: { headline: 'Toyota Multidrive S CVT — Calm Commuter, Needs 60k Fluid Changes', strengths: ['Smooth, stepless city comfort with strong Toyota CVT durability when serviced.'], watchouts: ['Higher revs under brisk acceleration; avoid neglected CVT fluid past 100k km.'], beforeYouBuy: ['Check steady-speed bearing quietness and CVT fluid invoices.'] },
          de: { headline: 'Toyota Multidrive S CVT — Entspannter Gleiter, 60-Tkm-Ölwechsel', strengths: ['Ruckfreier Komfort und gute Haltbarkeit bei regelmäßigem Ölwechsel.'], watchouts: ['Höhere Drehzahl beim Beschleunigen; überaltertes CVT-Öl meiden.'], beforeYouBuy: ['Bei 60–90 km/h auf Lagergeräusche achten und Ölwechsel belegen lassen.'] },
          ru: { headline: 'Вариатор Toyota Multidrive S — Спокойный комфорт, масло раз в 60 тыс.', strengths: ['Плавный ход без рывков и хороший ресурс при регулярном обслуживании.'], watchouts: ['Повышенные обороты при обгонах; не любит старого масла.'], beforeYouBuy: ['Проверьте тишину подшипников на 60–90 км/ч и историю замены масла.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Multidrive S CVT-FE fluid drain-and-fill', de: 'Multidrive S CVT-FE Getriebeölwechsel', ru: 'Замена жидкости вариатора Toyota CVT-FE' }, cost: '€180–260' }] }
      },
      'aisin-6at': {
        category: 'automatic',
        label: { en: '6-Speed Torque Auto', de: '6-Stufen-Wandlerautomatik', ru: '6-ст. Автомат' },
        shortLabel: { en: '6-AT', de: '6-AT', ru: '6-АКПП' },
        subLabel: { en: 'Aisin U660E · Hydraulic Torque Converter', de: 'Aisin U660E · Wandlerautomatik', ru: 'Aisin U660E · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto6', clutchDmf: '@torqueConv' },
        subStatDeltas: { transmissionDriveline: { score: 8.7, badges: { en: ['Proven Aisin U660E 6-AT', 'No Diesel DMF/Clutch Wear'], de: ['Robuste Aisin 6-Wandler-AT', 'Kein ZMS-/Kupplungsverschleiß'], ru: ['Надёжная 6-АКПП Aisin', 'Без износа ДММ и сцепления'] } } },
        dossierBreakdowns: { transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Aisin U660E 6-Speed Torque Auto', de: 'Aisin U660E 6-Stufen-Wandlerautomatik', ru: '6-ст. АКПП Aisin U660E' } }], note: { en: 'Smooth hydraulic 6-speed auto avoiding diesel clutch/DMF replacements; change Toyota ATF WS every 60,000 km.', de: 'Komfortable Aisin-6-Stufen-Automatik ohne ZMS-Verschleiß; ATF WS alle 60.000 km wechseln.', ru: 'Комфортная 6-ст. АКПП Aisin без ДММ; замена Toyota ATF WS каждые 60 тыс. км.' } }, clutchDmf: '@clutchTorqueConv' } },
        dossier: {
          en: { headline: 'Aisin U660E 6-Speed Auto — Effortless Diesel Cruiser, No DMF Bills', strengths: ['Pairs smoothly with high-torque 2.2 D-4D engines with zero clutch/DMF wear.'], watchouts: ['Adds ~0.6–0.7 L/100km fuel burn vs 6-MT.'], beforeYouBuy: ['Test warm shifts for smooth 2→3 engagement and check WS ATF history.'] },
          de: { headline: 'Aisin U660E 6-Stufen-Automatik — Ruhiger Reisebegleiter ohne ZMS', strengths: ['Harmoniert sehr gut mit dem 2.2 D-4D und spart teure ZMS-Wechsel.'], watchouts: ['Ca. 0,6–0,7 L/100km Mehrverbrauch gegenüber dem Schalter.'], beforeYouBuy: ['Warme Schaltvorgänge und Nachweise über ATF-WS-Wechsel prüfen.'] },
          ru: { headline: 'Автомат Aisin U660E 6-АКПП — Комфортный дизельный круизёр без ДММ', strengths: ['Отлично сочетается с тягой 2.2 D-4D и избавляет от замены ДММ.'], watchouts: ['Добавляет ~0,6–0,7 л/100 км расхода.'], beforeYouBuy: ['Проверьте плавность переключений на горячую и историю замены ATF WS.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Aisin 6-AT Toyota ATF WS drain-and-fill', de: 'Aisin 6-AT Toyota ATF WS Getriebeölwechsel', ru: 'Замена масла Toyota ATF WS в АКПП Aisin 6-AT' }, cost: '€200–290' }] }
      }
    },
    engines: [
      {
        id: '1.6-valvematic',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [{ id: '6-mt-sc', isDefault: true }],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-6mt',
        isDefault: false,
        fuelType: 'petrol',
        hp: 132,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 1.6 VALVEMATIC',
        fullName: '2012 Toyota Avensis 1.6 Valvematic',
        engineBadge: '1.6L Valvematic • 132 HP',
        engineSubLabel: {
          en: '1.6L Valvematic Chain Petrol (12/2008–04/2018) • 6-MT • 160 Nm • FWD',
          de: '1.6L Valvematic-Kettenmotor (12/2008–04/2018) • 6-Gang • 160 Nm • FWD',
          ru: '1.6L Valvematic цепной (12/2008–04/2018) • 6-ст. МКПП • 160 Н·м • FWD'
        },
        rarityLabel: {
          en: 'BUDGET COMMUTER',
          de: 'PREISWERTER PENDLER',
          ru: 'БЮДЖЕТНЫЙ СЕДАН'
        },
        originalMsrp: {
          en: '€24,950 New',
          de: '24.950 € Neu',
          ru: '€24 950 новый'
        },
        estUsedPrice: '€7,400',
        perkLabel: {
          en: '✦ Lowest Price & Tax • Simple Chain Petrol • 509L Sedan Boot',
          de: '✦ Günstigster Preis & Steuer • Schlichter Kettenmotor • 509L Kofferraum',
          ru: '✦ Самая низкая цена и налог • Простой цепной мотор • Багажник 509 л'
        },
        remarkablePositives: {
          en: [
            'LOWEST PURCHASE PRICE & TAX',
            'SIMPLE CHAIN PETROL, NO TURBO',
            'ROOMY 509L SEDAN BOOT',
            'QUIET COMFORTABLE CRUISER'
          ],
          de: [
            'NIEDRIGSTER PREIS & STEUER',
            'SCHLICHTER KETTENBENZINER OHNE TURBO',
            'GERÄUMIGER 509L-KOFFERRAUM',
            'LEISER KOMFORT-GLEITER'
          ],
          ru: [
            'САМАЯ НИЗКАЯ ЦЕНА И НАЛОГ',
            'ПРОСТОЙ ЦЕПНОЙ МОТОР БЕЗ ТУРБИНЫ',
            'ПРОСТОРНЫЙ БАГАЖНИК 509 Л',
            'ТИХИЙ КОМФОРТНЫЙ КРЕЙСЕР'
          ]
        },
        notableNegatives: {
          en: ['WEAK 160 NM — SLOW WHEN LOADED', 'ONLY A 6-SPEED MANUAL', 'EARLY CARS CAN BURN OIL'],
          de: [
            'SCHWACHE 160 NM — LAHM BELADEN',
            'NUR MIT 6-GANG-SCHALTUNG',
            'FRÜHE AUTOS KÖNNEN ÖL VERBRAUCHEN'
          ],
          ru: [
            'СЛАБЫЕ 160 Н·М — ВЯЛО С ГРУЗОМ',
            'ТОЛЬКО 6-СТ. МЕХАНИКА',
            'РАННИЕ МАШИНЫ МОГУТ ЕСТЬ МАСЛО'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.6,
          comfortCabin: 7.8,
          spacePracticality: 8.2,
          performanceDynamics: 6.5,
          runningCostsTco: 8.2
        },
        specOverrides: {
          engineName: { en: '1.6L I4 Valvematic (Chain)', de: '1.6L Reihenvierzylinder (Kette)', ru: '1.6L R4 Valvematic (Цепь)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@chain', gearbox: '@manual6', clutchDmf: '@singleClutch',
          payloadRoof: '520 kg · 75 kg', towingBraked: '1,300 kg',
          sprint0100: '11.0 s', topSpeed: '195 km/h', peakTorque: '160 Nm @ 4,400 rpm',
          passingPunch: { en: 'Needs Revs To Overtake', de: 'Braucht Drehzahl', ru: 'Нужны обороты для обгона' },
          realWorldFuel: '7.2 L/100km', tankRange: '60 L (~830 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierLow', serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 9.2,
            badges: {
              en: ['Simple 1.6 Chain Petrol', 'Check Oil Level & History'],
              de: ['Einfacher 1.6-Kettenmotor', 'Ölstand & Historie prüfen'],
              ru: ['Простой цепной 1.6', 'Следить за маслом и историей']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '1ZR-FAE · 1,598 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Valvematic Variable Lift (Chain)', de: 'Reihenvierzylinder Alu · Valvematic-Steuerung (Kette)', ru: 'Рядный 4-цил. алюминий · Valvematic (Цепь)' } }], note: { en: 'Reliable, economical entry petrol; modest torque for a 1.4-ton sedan, so best suited to flat commuting rather than heavy mountain towing.', de: 'Sehr zuverlässiger, sparsamer Einstiegsbenziner; für die 1,4-Tonnen-Limousine eher gemütlich, aber extrem wartungsarm.', ru: 'Надёжный и экономичный базовый атмосферник; спокойный для тяжёлого седана, но очень дешёвый в содержании.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Entry 1.6L Valvematic— Simple, Cheap To Run, But Short On Pull',
                strengths: [
                  'Smallest engine and tax bracket in the Avensis range with proven Toyota reliability.',
                  'No direct-injection carbon, no rubber timing belt and no turbo— simple, proven Toyota hardware that tolerates short trips.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Some 2008–2011 cars burn oil past 120,000 km— check the oil level and service history.',
                  'Stretched oil changes can upset the variable valve-lift unit on top of the engine (rough idle, reduced power).'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick and ask how much oil the owner tops up between services— constantly low oil on a Valvematic engine is a red flag.',
                  'On a cold start the engine must idle smoothly with no rattling or check-engine light.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual oil (never past 15,000 km) + check air & cabin filters',
                    cost: '€170–260',
                    ifIgnored: 'Old oil clogs the valve-lift unit on top of the engine',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change spark plugs, brake fluid & CVT gearbox oil (if fitted); check 6-yr aging rubber hoses',
                    cost: '€280–450',
                    ifIgnored: 'Worn plugs strain the ignition coils & stale gearbox oil makes shifts jerky',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace water pump & thermostat housing before they leak',
                    cost: '€300–520',
                    ifIgnored: 'A weeping pump drips coolant and can overheat the engine (plastic & seals age too)',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace clutch (manual) or change gearbox oil again (CVT) + renew engine mounts',
                    cost: '€350–620',
                    ifIgnored: 'A slipping clutch or shuddering gearbox & sagging mounts shake the cabin',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Refresh rear suspension bushings & shock absorbers; check exhaust mid-section',
                    cost: '€420–750',
                    ifIgnored: 'Tired dampers bounce & worn bushings wear tyres unevenly (rubber ages with the years)',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Renew oxygen sensors, coolant hoses & check the air-con compressor',
                    cost: '€450–800',
                    ifIgnored: 'Lazy sensors raise fuel use & brittle old hoses split on long trips',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: 'Einstiegs-1.6L-Valvematic— schlicht, günstig im Unterhalt, aber wenig Schub',
                strengths: [
                  'Kleinster Motor und niedrigste Steuerklasse im Avensis-Angebot bei bewährter Toyota-Haltbarkeit.',
                  'Keine Verkokung der Ventile, kein Zahnriemen und kein Turbo— einfache, bewährte Toyota-Technik, die Kurzstrecken verzeiht.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Manche 2008–2011er verbrauchen ab 120.000 km Öl— Ölstand und Serviceheft prüfen.',
                  'Überzogene Ölwechsel können die variable Ventilhub-Einheit oben am Motor stören (unruhiger Leerlauf, weniger Leistung).'
                ],
                beforeYouBuy: [
                  'Ölpeilstab prüfen und fragen, wie viel Öl zwischen den Services nachgefüllt wird— dauerhaft niedriger Ölstand ist bei Valvematic ein Warnzeichen.',
                  'Beim Kaltstart muss der Motor ruhig laufen, ohne Rasseln und ohne Motorkontrollleuchte.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Ölwechsel (nie über 15.000 km) + Luft- & Pollenfilter prüfen',
                    cost: '170–260 €',
                    ifIgnored: 'Altes Öl verstopft die Ventilhub-Einheit oben am Motor',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Zündkerzen, Bremsflüssigkeit & CVT-Öl (falls vorhanden) wechseln; 6-J.-Gummischläuche prüfen',
                    cost: '280–450 €',
                    ifIgnored: 'Alte Kerzen belasten die Zündspulen & altes Getriebeöl lässt das Getriebe ruckeln',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Wasserpumpe & Thermostatgehäuse tauschen, bevor sie lecken',
                    cost: '300–520 €',
                    ifIgnored: 'Eine schwitzende Pumpe verliert Kühlmittel und kann den Motor überhitzen (Kunststoff & Dichtungen altern auch)',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupplung (Schalter) erneuern oder CVT-Öl erneut wechseln + Motorlager tauschen',
                    cost: '350–620 €',
                    ifIgnored: 'Rutschende Kupplung oder ruckelndes Getriebe & durchhängende Lager schütteln den Innenraum',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Hinterachs-Buchsen & Stoßdämpfer erneuern; Auspuff-Mittelteil prüfen',
                    cost: '420–750 €',
                    ifIgnored: 'Müde Dämpfer poltern & ausgeschlagene Buchsen fahren Reifen schief ab (Gummi altert auch zeitlich)',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Lambdasonden & Kühlschläuche erneuern, Klimakompressor prüfen',
                    cost: '450–800 €',
                    ifIgnored: 'Müde Sonden erhöhen den Verbrauch & spröde Schläuche reißen auf langen Fahrten',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Базовый 1.6 Valvematic— простой и недорогой, но с невысокой тягой',
                strengths: [
                  'Самый маленький мотор и налог в линейке при проверенной надёжности Toyota.',
                  'Нет нагара прямого впрыска, ремня ГРМ и турбины— простая проверенная техника Toyota, спокойно переносит короткие поездки.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Часть машин 2008–2011 г. после 120 000 км «ест» масло— проверьте уровень и историю обслуживания.',
                  'Растянутые замены масла могут вывести из строя механизм сверху мотора (плавают обороты, падает мощность).'
                ],
                beforeYouBuy: [
                  'Проверьте щуп и спросите, сколько масла владелец доливает между ТО— постоянный недолив на Valvematic тревожный признак.',
                  'На холодную мотор должен работать ровно, без стука и без ошибки двигателя.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло раз в год (не реже 15 тыс. км) + воздушный и салонный фильтры',
                    cost: '€170–260',
                    ifIgnored: 'Старое масло забивает блок подъёма клапанов сверху мотора',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить свечи, тормозную жидкость и масло вариатора (если есть); проверить резиновые шланги (6 лет)',
                    cost: '€280–450',
                    ifIgnored: 'Старые свечи бьют по катушкам, а старое масло в коробке вызывает рывки',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить помпу и корпус термостата до появления течи',
                    cost: '€300–520',
                    ifIgnored: 'Потекшая помпа теряет антифриз и может перегреть мотор (пластик и уплотнения тоже стареют)',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить сцепление (МКПП) или снова масло в вариаторе + опоры двигателя',
                    cost: '€350–620',
                    ifIgnored: 'Буксующее сцепление или дёргающийся вариатор и просевшие опоры дают вибрацию в салоне',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Обновить сайлентблоки и амортизаторы задней подвески; проверить средний отрезок выхлопа',
                    cost: '€420–750',
                    ifIgnored: 'Уставшие амортизаторы и убитые сайлентблоки съедают шины (резина стареет и по годам)',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить кислородные датчики и патрубки охлаждения, проверить компрессор кондиционера',
                    cost: '€450–800',
                    ifIgnored: 'Старые датчики повышают расход, а высохшие патрубки лопаются в дороге',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.3,
            badges: {
              en: ['Slick 6-Speed Manual Only', 'Light Clutch'],
              de: ['Leichtgängiges 6-Gang-Getriebe', 'Leichte Kupplung'],
              ru: ['Лёгкая 6-ст. МКПП', 'Мягкое сцепление']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.2,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.2,
            badges: {
              en: ['520 kg Payload', '1,300 kg Braked Towing'],
              de: ['520 kg Zuladung', '1.300 kg Anhängelast'],
              ru: ['Нагрузка 520 кг', 'Прицеп до 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 11.0 s', '195 km/h Top Speed'],
              de: ['0–100 km/h: 11,0 s', '195 km/h Spitze'],
              ru: ['0–100 km/h: 11.0 с', 'Макс. 195 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.5,
            badges: {
              en: ['160 Nm', 'Needs Revs To Overtake'],
              de: ['160 Nm', 'Drehzahl zum Überholen nötig'],
              ru: ['160 Н·м', 'Для обгона нужны обороты']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['Calm Stable Handling', 'Comfort Over Corner Sharpness'],
              de: ['Ruhig & stabil in Kurven', 'Komfort vor Kurven-Schärfe'],
              ru: ['Спокойная устойчивая управляемость', 'Комфорт важнее остроты в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 6.4,
            badges: {
              en: ['7.2 L/100km', '142 g/km CO2 (Euro 5)'],
              de: ['7,2 L/100km', '142 g/km CO2 (Euro 5)'],
              ru: ['7,2 л/100 км', '142 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 8.5,
            badges: {
              en: ['1.6L Petrol Tax • Euro 5', 'Mid-Size 132 HP Insurance Class'],
              de: ['1.6-Benzin-Steuer • Euro 5', 'Mittelklasse-Tarif (132 PS)'],
              ru: ['Налог за 1.6 л бензин • Евро-5', 'Страховка на 132 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 9.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change Multidrive S CVT fluid (if automatic) or 6-MT gearbox oil', de: 'Multidrive-S-CVT-Öl (bei Automatik) oder 6-Gang-Getriebeöl wechseln', ru: 'Замена жидкости вариатора Multidrive S (если CVT) или масла 6-МКПП' }, cost: '€160–290' },
                { when: { en: 'Every 90,000 km', de: 'Alle 90.000 km', ru: 'Каждые 90 000 км' }, action: { en: 'Replace iridium spark plugs & inspect auxiliary drive belt', de: 'Iridium-Zündkerzen wechseln & Keilrippenriemen prüfen', ru: 'Замена иридиевых свечей и проверка приводного ремня' }, cost: '€150–230' },
                { when: { en: '150,000 km / 10 yrs', de: '150.000 km / 10 J.', ru: '150 000 км / 10 лет' }, action: { en: 'Flush Toyota SLLC coolant & inspect water pump for seepage', de: 'Toyota-SLLC-Kühlmittel wechseln & Wasserpumpe prüfen', ru: 'Замена антифриза SLLC и проверка помпы на течь' }, cost: '€130–200' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'Valvematic variable-lift actuator module (if Check Engine / limp mode)', de: 'Valvematic-Stellmotor (bei Motorkontrollleuchte / Notlauf)', ru: 'Блок управления Valvematic (при ошибке и потере тяги)' }, cost: '€900–1,400', risk: { en: 'Engine stuck in limp mode with flat power delivery', de: 'Dauerhafter Notlauf mit stark gedrosselter Leistung', ru: 'Постоянный аварийный режим и резкая потеря мощности' }, damage: '€1,400–1,800' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) rear actuator module', de: 'T27 elektronische Feststellbremse (EPB-Stellmodul hinten)', ru: 'Блок электронного стояночного тормоза (EPB) T27' }, cost: '€550–1,050', risk: { en: 'Warning lights or jammed rear parking brake cables', de: 'Fehlermeldung oder blockierende elektrische Handbremse', ru: 'Ошибки на панели или заклинивание ручника' }, damage: '€1,100–1,500' }
              ]
            },
            badges: {
              en: ['No Turbo / DPF / Belt Bills', 'Affordable Routine Parts'],
              de: ['Kein Turbo / DPF / Zahnriemen', 'Günstige Verschleißteile'],
              ru: ['Нет трат на турбину, DPF и ремень', 'Недорогие расходники']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Trusted Reliable Toyota Name', 'Low-Risk Used Buy'],
              de: ['Vertrauenswürdiger Toyota-Name', 'Gebrauchtkauf mit wenig Risiko'],
              ru: ['Репутация надёжной Toyota', 'Покупка на вторичке без риска']
            }
          }
        }
      },
      {
        id: '1.8-valvematic',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: 'multidrive-s',
            estUsedPrice: '€9,100',
            specOverrides: { sprint0100: '10.4 s', topSpeed: '200 km/h', realWorldFuel: '7.6 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 6.6,
                badges: {
                  en: ['7.6 L/100km (CVT)'],
                  de: ['7,6 L/100km (CVT)'],
                  ru: ['7,6 L/100km (CVT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-cvt',
        isDefault: true,
        fuelType: 'petrol',
        hp: 147,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 1.8 VALVEMATIC',
        fullName: '2012 Toyota Avensis 1.8 Valvematic',
        engineBadge: '1.8L Valvematic • 147 HP',
        engineSubLabel: {
          en: '1.8L Valvematic Chain Petrol (12/2008–04/2018) • 6-MT / Opt. Multidrive S CVT • 180 Nm • FWD',
          de: '1.8L Valvematic-Kettenmotor (12/2008–04/2018) • 6-Gang / Opt. Multidrive-S-CVT • 180 Nm • FWD',
          ru: '1.8L Valvematic цепной (12/2008–04/2018) • 6-МКПП / Опц. вариатор Multidrive S • 180 Н·м • FWD'
        },
        rarityLabel: {
          en: 'BEST ALL-ROUNDER',
          de: 'BESTER ALLROUNDER',
          ru: 'ЛУЧШИЙ ВЫБОР'
        },
        originalMsrp: {
          en: '€26,500 New',
          de: '26.500 € Neu',
          ru: '€26 500 новый'
        },
        estUsedPrice: '€8,200',
        perkLabel: {
          en: '✦ Reliable Chain Petrol • 6-MT Or Smooth CVT • 509L Boot & Facelift Looks',
          de: '✦ Robuster Kettenbenziner • 6-Gang oder sanfte CVT • 509L Kofferraum & Facelift',
          ru: '✦ Надёжный цепной бензин • 6-МКПП или плавный вариатор • Багажник 509 л и рестайлинг'
        },
        remarkablePositives: {
          en: [
            'BEST BALANCE OF PRICE & POWER',
            'TURBO-FREE CHAIN-DRIVEN PETROL',
            'AVAILABLE SMOOTH CVT AUTOMATIC',
            'ROOMY 509L SEDAN BOOT',
            'QUIET COMFORTABLE CRUISER'
          ],
          de: [
            'BESTES VERHÄLTNIS AUS PREIS & LEISTUNG',
            'KETTENBENZINER OHNE TURBO',
            'WAHLWEISE SANFTE CVT-AUTOMATIK',
            'GERÄUMIGER 509L-KOFFERRAUM',
            'LEISER KOMFORT-GLEITER'
          ],
          ru: [
            'ЛУЧШИЙ БАЛАНС ЦЕНЫ И МОЩНОСТИ',
            'ЦЕПНОЙ БЕНЗИН БЕЗ ТУРБИНЫ',
            'ДОСТУПЕН ПЛАВНЫЙ ВАРИАТОР',
            'ПРОСТОРНЫЙ БАГАЖНИК 509 Л',
            'ТИХИЙ КОМФОРТНЫЙ КРЕЙСЕР'
          ]
        },
        notableNegatives: {
          en: [
            'MODEST 180 NM PULLING POWER',
            'CVT FEELS DRONY WHEN REVVED',
            'EARLY CARS CAN BURN OIL'
          ],
          de: [
            'MÄSSIGE 180 NM DURCHZUG',
            'CVT DRÖHNT BEI HOHEN DREHZAHLEN',
            'FRÜHE AUTOS KÖNNEN ÖL VERBRAUCHEN'
          ],
          ru: [
            'СКРОМНЫЕ 180 Н·М ТЯГИ',
            'ВАРИАТОР ГУДИТ НА ВЫСОКИХ ОБОРОТАХ',
            'РАННИЕ МАШИНЫ МОГУТ ЕСТЬ МАСЛО'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.7,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 6.9,
          runningCostsTco: 8.2
        },
        specOverrides: {
          engineName: { en: '1.8L I4 Valvematic (Chain)', de: '1.8L Reihenvierzylinder (Kette)', ru: '1.8L R4 Valvematic (Цепь)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch', towingBraked: '1,500 kg',
          sprint0100: '10.4 s', topSpeed: '200 km/h', peakTorque: '180 Nm @ 4,000 rpm',
          passingPunch: { en: 'Relaxed Linear Pull', de: 'Gleichmäßiger Durchzug', ru: 'Ровная спокойная тяга' },
          realWorldFuel: '7.4 L/100km', tankRange: '60 L (~810 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierLowMod', serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 9.3,
            badges: {
              en: ['Proven 1.8 Chain Petrol', 'Check Oil Level & History'],
              de: ['Bewährter 1.8-Kettenmotor', 'Ölstand & Historie prüfen'],
              ru: ['Проверенный цепной 1.8', 'Следить за маслом и историей']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2ZR-FAE · 1,798 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Valvematic Chain Petrol', de: 'Reihenvierzylinder Alu · Valvematic-Kettenbenziner', ru: 'Рядный 4-цил. алюминий · Цепной Valvematic' } }], note: { en: 'The #1 pick of the T27 Avensis range: combines Corolla-like longevity with enough punch for family highway cruising and zero diesel traps.', de: 'Der klare Favorit im T27 Avensis: extrem langlebig, kräftig genug für die Autobahn und komplett frei von Diesel-Risiken.', ru: 'Лучший выбор в линейке Avensis T27: легендарный ресурс, достаточная динамика и отсутствие дизельных проблем.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '1.8L Valvematic— The Sweet Spot: Reliable, Frugal And Comfortable',
                strengths: [
                  '147 HP is enough for relaxed overtaking without the cost of the bigger engines.',
                  'No direct-injection carbon, no rubber timing belt and no turbo— simple, proven Toyota hardware that tolerates short trips.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Some 2008–2011 cars burn oil past 120,000 km— check the oil level and service history.',
                  'Stretched oil changes can upset the variable valve-lift unit on top of the engine (rough idle, reduced power).'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick and ask how much oil the owner tops up between services— constantly low oil on a Valvematic engine is a red flag.',
                  'On a cold start the engine must idle smoothly with no rattling or check-engine light.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual oil (never past 15,000 km) + check air & cabin filters',
                    cost: '€170–260',
                    ifIgnored: 'Old oil clogs the valve-lift unit on top of the engine',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change spark plugs, brake fluid & CVT gearbox oil (if fitted); check 6-yr aging rubber hoses',
                    cost: '€280–450',
                    ifIgnored: 'Worn plugs strain the ignition coils & stale gearbox oil makes shifts jerky',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace water pump & thermostat housing before they leak',
                    cost: '€300–520',
                    ifIgnored: 'A weeping pump drips coolant and can overheat the engine (plastic & seals age too)',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace clutch (manual) or change gearbox oil again (CVT) + renew engine mounts',
                    cost: '€350–620',
                    ifIgnored: 'A slipping clutch or shuddering gearbox & sagging mounts shake the cabin',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Refresh rear suspension bushings & shock absorbers; check exhaust mid-section',
                    cost: '€420–750',
                    ifIgnored: 'Tired dampers bounce & worn bushings wear tyres unevenly (rubber ages with the years)',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Renew oxygen sensors, coolant hoses & check the air-con compressor',
                    cost: '€450–800',
                    ifIgnored: 'Lazy sensors raise fuel use & brittle old hoses split on long trips',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: '1.8L Valvematic— der Mittelweg: zuverlässig, sparsam und komfortabel',
                strengths: [
                  '147 PS reichen für entspanntes Überholen ohne die Kosten der größeren Motoren.',
                  'Keine Verkokung der Ventile, kein Zahnriemen und kein Turbo— einfache, bewährte Toyota-Technik, die Kurzstrecken verzeiht.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Manche 2008–2011er verbrauchen ab 120.000 km Öl— Ölstand und Serviceheft prüfen.',
                  'Überzogene Ölwechsel können die variable Ventilhub-Einheit oben am Motor stören (unruhiger Leerlauf, weniger Leistung).'
                ],
                beforeYouBuy: [
                  'Ölpeilstab prüfen und fragen, wie viel Öl zwischen den Services nachgefüllt wird— dauerhaft niedriger Ölstand ist bei Valvematic ein Warnzeichen.',
                  'Beim Kaltstart muss der Motor ruhig laufen, ohne Rasseln und ohne Motorkontrollleuchte.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Ölwechsel (nie über 15.000 km) + Luft- & Pollenfilter prüfen',
                    cost: '170–260 €',
                    ifIgnored: 'Altes Öl verstopft die Ventilhub-Einheit oben am Motor',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Zündkerzen, Bremsflüssigkeit & CVT-Öl (falls vorhanden) wechseln; 6-J.-Gummischläuche prüfen',
                    cost: '280–450 €',
                    ifIgnored: 'Alte Kerzen belasten die Zündspulen & altes Getriebeöl lässt das Getriebe ruckeln',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Wasserpumpe & Thermostatgehäuse tauschen, bevor sie lecken',
                    cost: '300–520 €',
                    ifIgnored: 'Eine schwitzende Pumpe verliert Kühlmittel und kann den Motor überhitzen (Kunststoff & Dichtungen altern auch)',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupplung (Schalter) erneuern oder CVT-Öl erneut wechseln + Motorlager tauschen',
                    cost: '350–620 €',
                    ifIgnored: 'Rutschende Kupplung oder ruckelndes Getriebe & durchhängende Lager schütteln den Innenraum',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Hinterachs-Buchsen & Stoßdämpfer erneuern; Auspuff-Mittelteil prüfen',
                    cost: '420–750 €',
                    ifIgnored: 'Müde Dämpfer poltern & ausgeschlagene Buchsen fahren Reifen schief ab (Gummi altert auch zeitlich)',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Lambdasonden & Kühlschläuche erneuern, Klimakompressor prüfen',
                    cost: '450–800 €',
                    ifIgnored: 'Müde Sonden erhöhen den Verbrauch & spröde Schläuche reißen auf langen Fahrten',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: '1.8 Valvematic— золотая середина: надёжно, экономично и комфортно',
                strengths: [
                  '147 л.с. достаточно для спокойных обгонов без затрат больших моторов.',
                  'Нет нагара прямого впрыска, ремня ГРМ и турбины— простая проверенная техника Toyota, спокойно переносит короткие поездки.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Часть машин 2008–2011 г. после 120 000 км «ест» масло— проверьте уровень и историю обслуживания.',
                  'Растянутые замены масла могут вывести из строя механизм сверху мотора (плавают обороты, падает мощность).'
                ],
                beforeYouBuy: [
                  'Проверьте щуп и спросите, сколько масла владелец доливает между ТО— постоянный недолив на Valvematic тревожный признак.',
                  'На холодную мотор должен работать ровно, без стука и без ошибки двигателя.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло раз в год (не реже 15 тыс. км) + воздушный и салонный фильтры',
                    cost: '€170–260',
                    ifIgnored: 'Старое масло забивает блок подъёма клапанов сверху мотора',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить свечи, тормозную жидкость и масло вариатора (если есть); проверить резиновые шланги (6 лет)',
                    cost: '€280–450',
                    ifIgnored: 'Старые свечи бьют по катушкам, а старое масло в коробке вызывает рывки',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить помпу и корпус термостата до появления течи',
                    cost: '€300–520',
                    ifIgnored: 'Потекшая помпа теряет антифриз и может перегреть мотор (пластик и уплотнения тоже стареют)',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить сцепление (МКПП) или снова масло в вариаторе + опоры двигателя',
                    cost: '€350–620',
                    ifIgnored: 'Буксующее сцепление или дёргающийся вариатор и просевшие опоры дают вибрацию в салоне',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Обновить сайлентблоки и амортизаторы задней подвески; проверить средний отрезок выхлопа',
                    cost: '€420–750',
                    ifIgnored: 'Уставшие амортизаторы и убитые сайлентблоки съедают шины (резина стареет и по годам)',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить кислородные датчики и патрубки охлаждения, проверить компрессор кондиционера',
                    cost: '€450–800',
                    ifIgnored: 'Старые датчики повышают расход, а высохшие патрубки лопаются в дороге',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.6,
            badges: {
              en: ['6-MT Or Smooth CVT', 'CVT Needs Fluid Changes'],
              de: ['6-Gang oder sanfte CVT', 'CVT braucht Ölwechsel'],
              ru: ['6-МКПП или плавный вариатор', 'Вариатору нужна замена масла']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.2,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.7,
            badges: {
              en: ['530 kg Payload', '1,500 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.500 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.9,
            badges: {
              en: ['0–100 km/h: 10.4 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 10,4 s', '200 km/h Spitze'],
              ru: ['0–100 km/h: 10.4 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.0,
            badges: {
              en: ['180 Nm', 'Relaxed Pull From 2,500 rpm'],
              de: ['180 Nm', 'Entspannter Zug ab 2.500 U/min'],
              ru: ['180 Н·м', 'Спокойная тяга с 2 500 об/мин']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Calm Stable Handling', 'Comfort Over Corner Sharpness'],
              de: ['Ruhig & stabil in Kurven', 'Komfort vor Kurven-Schärfe'],
              ru: ['Спокойная устойчивая управляемость', 'Комфорт важнее остроты в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 6.2,
            badges: {
              en: ['7.4 L/100km', '148–153 g/km CO2 (Euro 5)'],
              de: ['7,4 L/100km', '148–153 g/km CO2 (Euro 5)'],
              ru: ['7,4 л/100 км', '148–153 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 8.3,
            badges: {
              en: ['1.8L Petrol Tax • Euro 5', 'Mid-Size 147 HP Insurance Class'],
              de: ['1.8-Benzin-Steuer • Euro 5', 'Mittelklasse-Tarif (147 PS)'],
              ru: ['Налог за 1.8 л бензин • Евро-5', 'Страховка на 147 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 9.1,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change Multidrive S CVT fluid (if automatic) or 6-MT gearbox oil', de: 'Multidrive-S-CVT-Öl (bei Automatik) oder 6-Gang-Getriebeöl wechseln', ru: 'Замена жидкости вариатора Multidrive S (если CVT) или масла 6-МКПП' }, cost: '€160–290' },
                { when: { en: 'Every 90,000 km', de: 'Alle 90.000 km', ru: 'Каждые 90 000 км' }, action: { en: 'Replace iridium spark plugs & inspect auxiliary drive belt', de: 'Iridium-Zündkerzen wechseln & Keilrippenriemen prüfen', ru: 'Замена иридиевых свечей и проверка приводного ремня' }, cost: '€150–230' },
                { when: { en: '150,000 km / 10 yrs', de: '150.000 km / 10 J.', ru: '150 000 км / 10 лет' }, action: { en: 'Flush Toyota SLLC coolant & inspect water pump for seepage', de: 'Toyota-SLLC-Kühlmittel wechseln & Wasserpumpe prüfen', ru: 'Замена антифриза SLLC и проверка помпы на течь' }, cost: '€130–200' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'Valvematic variable-lift actuator module (if Check Engine / limp mode)', de: 'Valvematic-Stellmotor (bei Motorkontrollleuchte / Notlauf)', ru: 'Блок управления Valvematic (при ошибке и потере тяги)' }, cost: '€900–1,400', risk: { en: 'Engine stuck in limp mode with flat power delivery', de: 'Dauerhafter Notlauf mit stark gedrosselter Leistung', ru: 'Постоянный аварийный режим и резкая потеря мощности' }, damage: '€1,400–1,800' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) rear actuator module', de: 'T27 elektronische Feststellbremse (EPB-Stellmodul hinten)', ru: 'Блок электронного стояночного тормоза (EPB) T27' }, cost: '€550–1,050', risk: { en: 'Warning lights or jammed rear parking brake cables', de: 'Fehlermeldung oder blockierende elektrische Handbremse', ru: 'Ошибки на панели или заклинивание ручника' }, damage: '€1,100–1,500' }
              ]
            },
            badges: {
              en: ['No Turbo / DPF / Belt Bills', 'Affordable Routine Parts'],
              de: ['Kein Turbo / DPF / Zahnriemen', 'Günstige Verschleißteile'],
              ru: ['Нет трат на турбину, DPF и ремень', 'Недорогие расходники']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Trusted Reliable Toyota Name', 'Low-Risk Used Buy'],
              de: ['Vertrauenswürdiger Toyota-Name', 'Gebrauchtkauf mit wenig Risiko'],
              ru: ['Репутация надёжной Toyota', 'Покупка на вторичке без риска']
            }
          }
        }
      },
      {
        id: '2.0-valvematic',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: 'multidrive-s',
            estUsedPrice: '€8,800',
            specOverrides: { sprint0100: '10.0 s', topSpeed: '205 km/h', realWorldFuel: '8.0 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.8,
                badges: {
                  en: ['0–100 km/h: 10.0 s (CVT)', '205 km/h Top Speed'],
                  de: ['0–100 km/h: 10,0 s (CVT)', '205 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,0 s (CVT)', 'Макс. 205 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.0,
                badges: {
                  en: ['8.0 L/100km (CVT)'],
                  de: ['8,0 L/100km (CVT)'],
                  ru: ['8,0 L/100km (CVT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-cvt',
        isDefault: false,
        fuelType: 'petrol',
        hp: 152,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 2.0 VALVEMATIC',
        fullName: '2012 Toyota Avensis 2.0 Valvematic',
        engineBadge: '2.0L Valvematic • 152 HP',
        engineSubLabel: {
          en: '2.0L Valvematic Chain Petrol (12/2008–04/2015) • 6-MT / Opt. Multidrive S CVT • 196 Nm • FWD',
          de: '2.0L Valvematic-Kettenmotor (12/2008–04/2015) • 6-Gang / Opt. Multidrive-S-CVT • 196 Nm • FWD',
          ru: '2.0L Valvematic цепной (12/2008–04/2015) • 6-МКПП / Опц. вариатор Multidrive S • 196 Н·м • FWD'
        },
        rarityLabel: {
          en: 'SMOOTH PETROL CRUISER',
          de: 'SANFTER BENZIN-GLEITER',
          ru: 'ПЛАВНЫЙ БЕНЗИН'
        },
        originalMsrp: {
          en: '€27,950 New',
          de: '27.950 € Neu',
          ru: '€27 950 новый'
        },
        estUsedPrice: '€7,900',
        perkLabel: {
          en: '✦ Strongest Petrol • 9.8s 0–100 km/h • Rust-Free Reliable Toyota Build',
          de: '✦ Stärkster Benziner • 9,8s auf 100 km/h • Solide Toyota-Haltbarkeit',
          ru: '✦ Самый мощный бензин • 9,8 с до 100 км/ч • Надёжная сборка Toyota'
        },
        remarkablePositives: {
          en: [
            'STRONGEST PETROL (152 HP)',
            '9.8S 0–100 KM/H & 205 KM/H',
            'TURBO-FREE CHAIN-DRIVEN PETROL',
            'AVAILABLE SMOOTH CVT AUTOMATIC'
          ],
          de: [
            'STÄRKSTER BENZINER (152 PS)',
            '9,8S AUF 100 KM/H & 205 KM/H',
            'KETTENBENZINER OHNE TURBO',
            'WAHLWEISE SANFTE CVT-AUTOMATIK'
          ],
          ru: [
            'САМЫЙ МОЩНЫЙ БЕНЗИН (152 Л.С.)',
            '9,8 С ДО 100 И 205 КМ/Ч',
            'ЦЕПНОЙ БЕНЗИН БЕЗ ТУРБИНЫ',
            'ДОСТУПЕН ПЛАВНЫЙ ВАРИАТОР'
          ]
        },
        notableNegatives: {
          en: ['THIRSTIER 7.8 L/100KM', 'ONLY 196 NM — NOT TORQUEY', 'HIGHER 2.0L TAX & INSURANCE'],
          de: [
            'DURSTIGER: 7,8 L/100KM',
            'NUR 196 NM — NICHT DREHMOMENTSTARK',
            'HÖHERE 2.0L-STEUER & VERSICHERUNG'
          ],
          ru: [
            'ПРОЖОРЛИВЕЕ: 7,8 Л/100 КМ',
            'ВСЕГО 196 Н·М — НЕ ТЯГОВИТ',
            'ВЫШЕ НАЛОГ И СТРАХОВКА 2,0 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.7,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 7.1,
          runningCostsTco: 7.6
        },
        specOverrides: {
          engineName: { en: '2.0L I4 Valvematic (Chain)', de: '2.0L Reihenvierzylinder (Kette)', ru: '2.0L R4 Valvematic (Цепь)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch', towingBraked: '1,500 kg',
          sprint0100: '9.8 s', topSpeed: '205 km/h', peakTorque: '196 Nm @ 4,000 rpm',
          passingPunch: { en: 'Smooth Confident Delivery', de: 'Souveräner ruhiger Antritt', ru: 'Плавная уверенная тяга' },
          realWorldFuel: '7.8 L/100km', tankRange: '60 L (~770 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 9.3,
            badges: {
              en: ['Proven 2.0 Chain Petrol', 'Check Oil Level & History'],
              de: ['Bewährter 2.0-Kettenmotor', 'Ölstand & Historie prüfen'],
              ru: ['Проверенный цепной 2.0', 'Следить за маслом и историей']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '3ZR-FAE · 1,987 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · 2.0L Valvematic Chain', de: 'Reihenvierzylinder Alu · 2.0L Valvematic-Kette', ru: 'Рядный 4-цил. алюминий · 2.0L Valvematic (Цепь)' } }], note: { en: 'Refined top petrol option with noticeably fuller low-end torque than the 1.6/1.8 while retaining Toyota chain-driven simplicity.', de: 'Souveräner Top-Benziner mit spürbar mehr Druck untenrum als 1.6/1.8 bei gleicher robuster Toyota-Ketten-Technik.', ru: 'Спокойный топовый бензин с более плотной тягой на низах и высокой надёжностью цепного атмосферника.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '2.0L Valvematic— Smooth And Strong Petrol, Pays For It At The Pump',
                strengths: [
                  '152 HP gives the best acceleration of the Valvematic engines.',
                  'No direct-injection carbon, no rubber timing belt and no turbo— simple, proven Toyota hardware that tolerates short trips.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Some 2008–2011 cars burn oil past 120,000 km— check the oil level and service history.',
                  'Stretched oil changes can upset the variable valve-lift unit on top of the engine (rough idle, reduced power).'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick and ask how much oil the owner tops up between services— constantly low oil on a Valvematic engine is a red flag.',
                  'On a cold start the engine must idle smoothly with no rattling or check-engine light.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual oil (never past 15,000 km) + check air & cabin filters',
                    cost: '€170–260',
                    ifIgnored: 'Old oil clogs the valve-lift unit on top of the engine',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change spark plugs, brake fluid & CVT gearbox oil (if fitted); check 6-yr aging rubber hoses',
                    cost: '€280–450',
                    ifIgnored: 'Worn plugs strain the ignition coils & stale gearbox oil makes shifts jerky',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace water pump & thermostat housing before they leak',
                    cost: '€300–520',
                    ifIgnored: 'A weeping pump drips coolant and can overheat the engine (plastic & seals age too)',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace clutch (manual) or change gearbox oil again (CVT) + renew engine mounts',
                    cost: '€350–620',
                    ifIgnored: 'A slipping clutch or shuddering gearbox & sagging mounts shake the cabin',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Refresh rear suspension bushings & shock absorbers; check exhaust mid-section',
                    cost: '€420–750',
                    ifIgnored: 'Tired dampers bounce & worn bushings wear tyres unevenly (rubber ages with the years)',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Renew oxygen sensors, coolant hoses & check the air-con compressor',
                    cost: '€450–800',
                    ifIgnored: 'Lazy sensors raise fuel use & brittle old hoses split on long trips',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: '2.0L Valvematic— kräftiger, ruhiger Benziner, der an der Tankstelle kostet',
                strengths: [
                  '152 PS bieten die beste Beschleunigung der Valvematic-Motoren.',
                  'Keine Verkokung der Ventile, kein Zahnriemen und kein Turbo— einfache, bewährte Toyota-Technik, die Kurzstrecken verzeiht.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Manche 2008–2011er verbrauchen ab 120.000 km Öl— Ölstand und Serviceheft prüfen.',
                  'Überzogene Ölwechsel können die variable Ventilhub-Einheit oben am Motor stören (unruhiger Leerlauf, weniger Leistung).'
                ],
                beforeYouBuy: [
                  'Ölpeilstab prüfen und fragen, wie viel Öl zwischen den Services nachgefüllt wird— dauerhaft niedriger Ölstand ist bei Valvematic ein Warnzeichen.',
                  'Beim Kaltstart muss der Motor ruhig laufen, ohne Rasseln und ohne Motorkontrollleuchte.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Ölwechsel (nie über 15.000 km) + Luft- & Pollenfilter prüfen',
                    cost: '170–260 €',
                    ifIgnored: 'Altes Öl verstopft die Ventilhub-Einheit oben am Motor',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Zündkerzen, Bremsflüssigkeit & CVT-Öl (falls vorhanden) wechseln; 6-J.-Gummischläuche prüfen',
                    cost: '280–450 €',
                    ifIgnored: 'Alte Kerzen belasten die Zündspulen & altes Getriebeöl lässt das Getriebe ruckeln',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Wasserpumpe & Thermostatgehäuse tauschen, bevor sie lecken',
                    cost: '300–520 €',
                    ifIgnored: 'Eine schwitzende Pumpe verliert Kühlmittel und kann den Motor überhitzen (Kunststoff & Dichtungen altern auch)',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupplung (Schalter) erneuern oder CVT-Öl erneut wechseln + Motorlager tauschen',
                    cost: '350–620 €',
                    ifIgnored: 'Rutschende Kupplung oder ruckelndes Getriebe & durchhängende Lager schütteln den Innenraum',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Hinterachs-Buchsen & Stoßdämpfer erneuern; Auspuff-Mittelteil prüfen',
                    cost: '420–750 €',
                    ifIgnored: 'Müde Dämpfer poltern & ausgeschlagene Buchsen fahren Reifen schief ab (Gummi altert auch zeitlich)',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Lambdasonden & Kühlschläuche erneuern, Klimakompressor prüfen',
                    cost: '450–800 €',
                    ifIgnored: 'Müde Sonden erhöhen den Verbrauch & spröde Schläuche reißen auf langen Fahrten',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: '2.0 Valvematic— мощный и плавный бензин, но с большим расходом',
                strengths: [
                  '152 л.с. дают лучший разгон среди Valvematic.',
                  'Нет нагара прямого впрыска, ремня ГРМ и турбины— простая проверенная техника Toyota, спокойно переносит короткие поездки.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Часть машин 2008–2011 г. после 120 000 км «ест» масло— проверьте уровень и историю обслуживания.',
                  'Растянутые замены масла могут вывести из строя механизм сверху мотора (плавают обороты, падает мощность).'
                ],
                beforeYouBuy: [
                  'Проверьте щуп и спросите, сколько масла владелец доливает между ТО— постоянный недолив на Valvematic тревожный признак.',
                  'На холодную мотор должен работать ровно, без стука и без ошибки двигателя.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло раз в год (не реже 15 тыс. км) + воздушный и салонный фильтры',
                    cost: '€170–260',
                    ifIgnored: 'Старое масло забивает блок подъёма клапанов сверху мотора',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить свечи, тормозную жидкость и масло вариатора (если есть); проверить резиновые шланги (6 лет)',
                    cost: '€280–450',
                    ifIgnored: 'Старые свечи бьют по катушкам, а старое масло в коробке вызывает рывки',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить помпу и корпус термостата до появления течи',
                    cost: '€300–520',
                    ifIgnored: 'Потекшая помпа теряет антифриз и может перегреть мотор (пластик и уплотнения тоже стареют)',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить сцепление (МКПП) или снова масло в вариаторе + опоры двигателя',
                    cost: '€350–620',
                    ifIgnored: 'Буксующее сцепление или дёргающийся вариатор и просевшие опоры дают вибрацию в салоне',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Обновить сайлентблоки и амортизаторы задней подвески; проверить средний отрезок выхлопа',
                    cost: '€420–750',
                    ifIgnored: 'Уставшие амортизаторы и убитые сайлентблоки съедают шины (резина стареет и по годам)',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить кислородные датчики и патрубки охлаждения, проверить компрессор кондиционера',
                    cost: '€450–800',
                    ifIgnored: 'Старые датчики повышают расход, а высохшие патрубки лопаются в дороге',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.5,
            badges: {
              en: ['6-MT Or Smooth CVT', 'CVT Needs Fluid Changes'],
              de: ['6-Gang oder sanfte CVT', 'CVT braucht Ölwechsel'],
              ru: ['6-МКПП или плавный вариатор', 'Вариатору нужна замена масла']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.2,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.7,
            badges: {
              en: ['530 kg Payload', '1,500 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.500 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.3,
            badges: {
              en: ['0–100 km/h: 9.8 s', '205 km/h Top Speed'],
              de: ['0–100 km/h: 9,8 s', '205 km/h Spitze'],
              ru: ['0–100 km/h: 9.8 с', 'Макс. 205 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.3,
            badges: {
              en: ['196 Nm', 'Smooth Linear Delivery'],
              de: ['196 Nm', 'Gleichmäßige Kraftentfaltung'],
              ru: ['196 Н·м', 'Ровная подача мощности']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Calm Stable Handling', 'Comfort Over Corner Sharpness'],
              de: ['Ruhig & stabil in Kurven', 'Komfort vor Kurven-Schärfe'],
              ru: ['Спокойная устойчивая управляемость', 'Комфорт важнее остроты в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 5.8,
            badges: {
              en: ['7.8 L/100km', '155–159 g/km CO2 (Euro 5)'],
              de: ['7,8 L/100km', '155–159 g/km CO2 (Euro 5)'],
              ru: ['7,8 л/100 км', '155–159 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 7.4,
            badges: {
              en: ['2.0L Petrol Tax • Euro 5', 'Mid-Size 152 HP Insurance Class'],
              de: ['2.0-Benzin-Steuer • Euro 5', 'Mittelklasse-Tarif (152 PS)'],
              ru: ['Налог за 2.0 л бензин • Евро-5', 'Страховка на 152 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 8.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change Multidrive S CVT fluid (if automatic) or 6-MT gearbox oil', de: 'Multidrive-S-CVT-Öl (bei Automatik) oder 6-Gang-Getriebeöl wechseln', ru: 'Замена жидкости вариатора Multidrive S (если CVT) или масла 6-МКПП' }, cost: '€160–290' },
                { when: { en: 'Every 90,000 km', de: 'Alle 90.000 km', ru: 'Каждые 90 000 км' }, action: { en: 'Replace iridium spark plugs & inspect auxiliary drive belt', de: 'Iridium-Zündkerzen wechseln & Keilrippenriemen prüfen', ru: 'Замена иридиевых свечей и проверка приводного ремня' }, cost: '€150–230' },
                { when: { en: '150,000 km / 10 yrs', de: '150.000 km / 10 J.', ru: '150 000 км / 10 лет' }, action: { en: 'Flush Toyota SLLC coolant & inspect water pump for seepage', de: 'Toyota-SLLC-Kühlmittel wechseln & Wasserpumpe prüfen', ru: 'Замена антифриза SLLC и проверка помпы на течь' }, cost: '€130–200' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'Valvematic variable-lift actuator module (if Check Engine / limp mode)', de: 'Valvematic-Stellmotor (bei Motorkontrollleuchte / Notlauf)', ru: 'Блок управления Valvematic (при ошибке и потере тяги)' }, cost: '€900–1,400', risk: { en: 'Engine stuck in limp mode with flat power delivery', de: 'Dauerhafter Notlauf mit stark gedrosselter Leistung', ru: 'Постоянный аварийный режим и резкая потеря мощности' }, damage: '€1,400–1,800' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) rear actuator module', de: 'T27 elektronische Feststellbremse (EPB-Stellmodul hinten)', ru: 'Блок электронного стояночного тормоза (EPB) T27' }, cost: '€550–1,050', risk: { en: 'Warning lights or jammed rear parking brake cables', de: 'Fehlermeldung oder blockierende elektrische Handbremse', ru: 'Ошибки на панели или заклинивание ручника' }, damage: '€1,100–1,500' }
              ]
            },
            badges: {
              en: ['No Turbo / DPF / Belt Bills', 'Affordable Routine Parts'],
              de: ['Kein Turbo / DPF / Zahnriemen', 'Günstige Verschleißteile'],
              ru: ['Нет трат на турбину, DPF и ремень', 'Недорогие расходники']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Trusted Reliable Toyota Name', 'Low-Risk Used Buy'],
              de: ['Vertrauenswürdiger Toyota-Name', 'Gebrauchtkauf mit wenig Risiko'],
              ru: ['Репутация надёжной Toyota', 'Покупка на вторичке без риска']
            }
          }
        }
      },
      {
        id: '1.6-d4d',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'avensisBmwDieselChain',
            'avensisCalmHandling',
            'avensisDatedTech'
          ]
        },
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 112,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 1.6 D-4D',
        fullName: '2016 Toyota Avensis 1.6 D-4D',
        engineBadge: '1.6L D-4D • 112 HP',
        engineSubLabel: {
          en: '1.6L D-4D Chain Turbo-Diesel (04/2015–04/2018) • 6-MT • 270 Nm • FWD',
          de: '1.6L D-4D Ketten-Turbodiesel (04/2015–04/2018) • 6-Gang • 270 Nm • FWD',
          ru: '1.6L D-4D цепной турбодизель (04/2015–04/2018) • 6-ст. МКПП • 270 Н·м • FWD'
        },
        rarityLabel: {
          en: 'MODERN FRUGAL DIESEL',
          de: 'MODERNER SPARDIESEL',
          ru: 'СОВРЕМЕННЫЙ ЭКОНОМИЧНЫЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€28,200 New',
          de: '28.200 € Neu',
          ru: '€28 200 новый'
        },
        estUsedPrice: '€10,800',
        perkLabel: {
          en: '✦ Frugal 5.0 L/100km • 270 Nm Low-Rev Pull • Youngest, Euro 6 Avensis',
          de: '✦ Sparsame 5,0 L/100km • 270 Nm ab niedrigen Drehzahlen • Jüngster Euro-6-Avensis',
          ru: '✦ Экономичные 5,0 л/100 км • 270 Н·м с низов • Самый свежий Avensis Евро-6'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 5.0 L/100KM',
            '270 NM FROM LOW REVS',
            'YOUNGEST CARS, EURO 6 EMISSIONS',
            'QUIET MODERN DIESEL'
          ],
          de: [
            'SPARSAME SPARSAM: 5,0 L/100KM',
            '270 NM AB NIEDRIGEN DREHZAHLEN',
            'JÜNGSTE AUTOS, EURO 6',
            'LEISER MODERNER DIESEL'
          ],
          ru: [
            'ЭКОНОМИЧНЫЕ 5,0 Л/100 КМ',
            '270 Н·М С НИЗКИХ ОБОРОТОВ',
            'САМЫЕ СВЕЖИЕ АВТО, ЕВРО-6',
            'ТИХИЙ СОВРЕМЕННЫЙ ДИЗЕЛЬ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 12.0S TO 100 KM/H',
            'REAR TIMING CHAIN = COSTLY IF NEGLECTED',
            'DPF DISLIKES SHORT TRIPS'
          ],
          de: [
            'LAHME 12,0S AUF 100 KM/H',
            'HINTERE STEUERKETTE TEUER BEI VERNACHLÄSSIGUNG',
            'DPF MAG KEINE KURZSTRECKEN'
          ],
          ru: [
            'МЕДЛЕННЫЕ 12,0 С ДО 100 КМ/Ч',
            'ЦЕПЬ СЗАДИ ДОРОГА ПРИ ЗАПУСКЕ',
            'DPF НЕ ЛЮБИТ КОРОТКИЕ ПОЕЗДКИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 6.8,
          runningCostsTco: 8.2
        },
        specOverrides: {
          engineName: { en: '1.6L I4 D-4D (BMW-Derived)', de: '1.6L Reihenvierzylinder Diesel', ru: '1.6L R4 D-4D (база BMW)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          payloadRoof: '520 kg · 75 kg', towingBraked: '1,500 kg',
          sprint0100: '12.0 s', topSpeed: '190 km/h', peakTorque: '270 Nm @ 1,750 rpm',
          passingPunch: { en: 'Frugal 270 Nm Cruise', de: 'Sparsame 270 Nm', ru: 'Экономичные 270 Н·м' },
          realWorldFuel: '5.0 L/100km', tankRange: '60 L (~1,200 km)', euroNorm: 'Euro 6 (Diesel)', taxInsurance: '@tierLowMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.1,
            badges: {
              en: ['Modern 1.6 Diesel Chain', 'Cold-Start Rattle = Warning'],
              de: ['Moderner 1.6-Diesel mit Kette', 'Rasseln beim Kaltstart = Warnung'],
              ru: ['Современный 1.6 с цепью', 'Стук на холодную = тревога']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '1WW (BMW N47-Derived) · 1,598 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Rear-Mounted Timing Chain', de: 'Reihenvierzylinder Alu-Diesel · Hinten liegende Kette', ru: 'Рядный 4-цил. дизель (база BMW) · Цепь сзади' } }], note: { en: 'Clean Euro 6 economy champion (1,200 km range), sourced from BMW’s N47 family — listen for rear timing-chain scrape past 150,000 km.', de: 'Sauberer Euro-6-Sparmeister (1.200 km Reichweite) auf BMW-N47-Basis — ab 150.000 km auf Schleifgeräusche der hinteren Steuerkette achten.', ru: 'Очень экономичный дизель Euro 6 (база BMW N47) с запасом хода 1 200 км — слушайте заднюю цепь ГРМ после 150 000 км.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '1.6L D-4D (BMW-Built)— Frugal Modern Diesel, Needs Cold-Start Attention',
                strengths: [
                  'Just 5.0 L/100km in real driving thanks to the modern 1.6L engine.',
                  'Quieter, smoother and more efficient than the older Toyota diesels, with modern Euro 6 emissions.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'If it ever stretches the repair is labour-heavy— a rattle on cold start must never be ignored.',
                  'Short trips clog them; a leaking EGR cooler can lose coolant.'
                ],
                beforeYouBuy: [
                  'Listen to a cold start: any rattle or whine from the back of the engine that lasts more than a second is a warning.',
                  'Check the coolant level and ask for proof of oil changes every 10,000–15,000 km or 1 year.',
                  'Make sure the particulate filter warning light has never appeared and ask how the car was driven.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Oil every 10,000 km / 1 yr (low-ash diesel oil) + fuel filter',
                    cost: '€190–290',
                    ifIgnored: 'Diesel-thinned oil speeds up timing chain wear at the back of the engine',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Clean intake, check the EGR cooler; change coolant & brake fluid; inspect 6-yr rubber hoses',
                    cost: '€320–520',
                    ifIgnored: 'A sooty EGR cooler can leak coolant & old fluids age the parts',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'red',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Test the timing chain; replace the chain kit if it rattles (rear-mounted, labour heavy)',
                    cost: '€380–650',
                    ifIgnored: 'A stretched chain can jump a tooth and wreck the engine',
                    damageCost: '€2,800–4,800'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel & clutch (manual) + particulate filter clean',
                    cost: '€850–1,400',
                    ifIgnored: 'A worn flywheel damages the gearbox & a blocked filter cuts power',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew water pump, thermostat & aging boost hoses',
                    cost: '€460–820',
                    ifIgnored: 'Plastic housings and hoses crack with age & coolant leaks lead to overheating',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check suspension bushings, engine mounts & injectors',
                    cost: '€500–850',
                    ifIgnored: 'Worn bushings and tired mounts add noise and vibration (rubber ages with the years)',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: '1.6L D-4D (BMW-Motor)— sparsamer moderner Diesel, Kaltstart genau beachten',
                strengths: [
                  'Nur 5,0 L/100km im Alltag dank des modernen 1.6L-Motors.',
                  'Leiser, ruhiger und sparsamer als die älteren Toyota-Diesel, mit moderner Euro-6-Norm.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Längt sie sich, ist die Reparatur sehr aufwendig— Rasseln beim Kaltstart nie ignorieren.',
                  'Kurzstrecken verstopfen sie; ein undichter AGR-Kühler kann Kühlmittel verlieren.'
                ],
                beforeYouBuy: [
                  'Kaltstart anhören: Jedes Rasseln oder Surren hinten am Motor, das länger als eine Sekunde anhält, ist ein Warnsignal.',
                  'Kühlmittelstand prüfen und Nachweise über Ölwechsel alle 10.000–15.000 km bzw. 1 Jahr verlangen.',
                  'Sicherstellen, dass die Partikelfilter-Warnleuchte nie aufgeleuchtet hat, und nach der Fahrweise fragen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Ölwechsel alle 10.000 km / 1 J. (aschearmes Dieselöl) + Dieselfilter',
                    cost: '190–290 €',
                    ifIgnored: 'Mit Diesel verdünntes Öl beschleunigt den Steuerkettenverschleiß hinten am Motor',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ansaugtrakt reinigen, AGR-Kühler prüfen; Kühl- & Bremsflüssigkeit wechseln; 6-J.-Schläuche prüfen',
                    cost: '320–520 €',
                    ifIgnored: 'Ein verrußter AGR-Kühler kann Kühlmittel verlieren & alte Flüssigkeiten lassen Teile altern',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Steuerkette prüfen; bei Rasseln Kettensatz erneuern (hinten verbaut, aufwendig)',
                    cost: '380–650 €',
                    ifIgnored: 'Eine gelängte Kette kann überspringen und den Motor zerstören',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad & Kupplung (Schalter) erneuern + Partikelfilter reinigen',
                    cost: '850–1.400 €',
                    ifIgnored: 'Ein verschlissenes Schwungrad schädigt das Getriebe & ein zugesetzter Filter nimmt Leistung',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Wasserpumpe, Thermostat & alternde Ladeluftschläuche erneuern',
                    cost: '460–820 €',
                    ifIgnored: 'Kunststoffgehäuse und Schläuche reißen altersbedingt & Kühlmittelverlust führt zu Überhitzung',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Fahrwerksbuchsen, Motorlager & Injektoren prüfen',
                    cost: '500–850 €',
                    ifIgnored: 'Ausgeschlagene Buchsen und müde Lager sorgen für Geräusche und Vibrationen (Gummi altert zeitlich)',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: '1.6 D-4D (мотор BMW)— экономичный современный дизель, важен холодный пуск',
                strengths: [
                  'Всего 5,0 л/100 км в реальной езде благодаря современному 1.6.',
                  'Тише, мягче и экономичнее старых дизелей Toyota, норма Евро-6.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Если она растянется, ремонт очень трудоёмкий— стук на холодную нельзя игнорировать.',
                  'Короткие поездки забивают их; течь охладителя ЕГР уносит антифриз.'
                ],
                beforeYouBuy: [
                  'Послушайте холодный пуск: любой стук или свист сзади мотора дольше секунды— тревожный сигнал.',
                  'Проверьте уровень антифриза и попросите чеки на замену масла каждые 10–15 тыс. км или раз в год.',
                  'Убедитесь, что лампа сажевого фильтра не загоралась, и спросите, как эксплуатировали машину.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло каждые 10 тыс. км / 1 год (малозольное дизельное) + топливный фильтр',
                    cost: '€190–290',
                    ifIgnored: 'Разбавленное соляркой масло ускоряет износ цепи ГРМ сзади мотора',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Почистить впуск, проверить охладитель ЕГР; заменить антифриз и тормозную жидкость; шланги (6 лет)',
                    cost: '€320–520',
                    ifIgnored: 'Закоксованный охладитель ЕГР течёт, а старые жидкости изнашивают узлы',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'red',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Проверить цепь ГРМ; при стуке заменить комплект (расположен сзади, трудоёмко)',
                    cost: '€380–650',
                    ifIgnored: 'Растянутая цепь может перескочить и убить мотор',
                    damageCost: '€2 800–4 800'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить двухмассовый маховик и сцепление (МКПП) + промыть сажевый фильтр',
                    cost: '€850–1 400',
                    ifIgnored: 'Изношенный маховик убивает коробку, а забитый фильтр забирает мощность',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить помпу, термостат и стареющие шланги наддува',
                    cost: '€460–820',
                    ifIgnored: 'Пластик и шланги трескаются от возраста, а утечка антифриза ведёт к перегреву',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить сайлентблоки, опоры двигателя и форсунки',
                    cost: '€500–850',
                    ifIgnored: 'Изношенные сайлентблоки и опоры дают шум и вибрации (резина стареет по годам)',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.2,
            badges: {
              en: ['6-MT Only • Mind The Flywheel', 'Light Clutch Feel'],
              de: ['Nur 6-Gang • Schwungrad beachten', 'Leichte Kupplung'],
              ru: ['Только 6-МКПП • Следить за маховиком', 'Лёгкое сцепление']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 8.9,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.6,
            badges: {
              en: ['520 kg Payload', '1,500 kg Braked Towing'],
              de: ['520 kg Zuladung', '1.500 kg Anhängelast'],
              ru: ['Нагрузка 520 кг', 'Прицеп до 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.7,
            badges: {
              en: ['0–100 km/h: 12.0 s', '190 km/h Top Speed'],
              de: ['0–100 km/h: 12,0 s', '190 km/h Spitze'],
              ru: ['0–100 km/h: 12.0 с', 'Макс. 190 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.1,
            badges: {
              en: ['270 Nm', 'Good Pull From 1,750 rpm'],
              de: ['270 Nm', 'Guter Zug ab 1.750 U/min'],
              ru: ['270 Н·м', 'Хорошая тяга с 1 750 об/мин']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['Stable Highway Poise', 'Heavy Diesel Nose Pushes In Corners'],
              de: ['Stabiler Geradeauslauf', 'Schwere Dieselnase schiebt über die Vorderräder'],
              ru: ['Устойчив на трассе', 'Тяжёлый дизельный нос сносит в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 8.6,
            badges: {
              en: ['Efficient (5.0 L/100km)', '109–112 g/km CO2 (Euro 6)'],
              de: ['Sparsam (5,0 L/100km)', '109–112 g/km CO2 (Euro 6)'],
              ru: ['Экономичный (5,0 л/100 км)', '109–112 г/км CO2 (Евро-6)']
            }
          },
          taxInsuranceNorm: {
            score: 8.0,
            badges: {
              en: ['1.6L Diesel Tax • Euro 6', 'Mid-Size 112 HP Insurance Class'],
              de: ['1.6-Diesel-Steuer • Euro 6', 'Mittelklasse-Tarif (112 PS)'],
              ru: ['Налог за 1.6 л дизель • Евро-6', 'Страховка на 112 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 6.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace diesel fuel filter & inspect 6-MT gearbox oil', de: 'Dieselfilter wechseln & 6-Gang-Getriebeöl prüfen', ru: 'Замена топливного фильтра и проверка масла в 6-МКПП' }, cost: '€140–220' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect harmonic crank pulley & clean EGR cooler/valve', de: 'Kurbelwellen-Riemenscheibe prüfen & AGR-Ventil reinigen', ru: 'Проверка демпферного шкива коленвала и чистка EGR' }, cost: '€200–320' }
              ],
              critical: [
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'Rear-mounted timing chain kit (BMW N47-derived 1WW/2WW architecture)', de: 'Hinten liegender Steuerkettensatz (BMW-N47-Basis 1WW/2WW)', ru: 'Замена задней цепи ГРМ (архитектура BMW N47 — 1WW/2WW)' }, cost: '€1,400–2,100', risk: { en: 'Scraping/rattling chain at firewall can snap and destroy valves', de: 'Schleifende Kette an der Spritzwand kann reißen — kapitaler Motorschaden', ru: 'Шуршащая цепь у моторного щита может оборваться и погнуть клапаны' }, damage: '€4,000–6,000' },
                { when: { en: '140,000–200,000 km', de: '140.000–200.000 km', ru: '140 000–200 000 км' }, action: { en: 'Dual-mass flywheel + clutch & T27 EPB parking brake actuator', de: 'ZMS + Kupplung & T27-EPB-Feststellbremsmodul', ru: 'Двухмассовый маховик + сцепление и блок EPB' }, cost: '€950–1,450', risk: { en: 'Heavy idle vibration or jammed electric parking brake', de: 'Starkes Leerlauf-Rasseln oder blockierte Handbremse', ru: 'Сильная вибрация на холостых или отказ электроручника' }, damage: '€1,800–2,400' }
              ]
            },
            badges: {
              en: ['Rear Timing Chain = Costly If Neglected', 'Flywheel & Filter Care'],
              de: ['Hintere Steuerkette teuer bei Vernachlässigung', 'Schwungrad & Filter pflegen'],
              ru: ['Цепь сзади дорога при запуске', 'Уход за маховиком и фильтром']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Youngest Avensis Holds Value Best', 'Euro 6 Future-Proof'],
              de: ['Jüngster Avensis behält Wert am besten', 'Euro 6 zukunftssicher'],
              ru: ['Самый свежий Avensis держит цену', 'Евро-6 безопаснее по запретам']
            }
          }
        }
      },
      {
        id: '2.0-d4d-126',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 126,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 2.0 D-4D 126',
        fullName: '2010 Toyota Avensis 2.0 D-4D 126',
        engineBadge: '2.0L D-4D • 126 HP',
        engineSubLabel: {
          en: '2.0L D-4D Chain Turbo-Diesel (12/2008–12/2011) • 6-MT • 310 Nm • FWD',
          de: '2.0L D-4D Ketten-Turbodiesel (12/2008–12/2011) • 6-Gang • 310 Nm • FWD',
          ru: '2.0L D-4D цепной турбодизель (12/2008–12/2011) • 6-ст. МКПП • 310 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EARLY 2.0 DIESEL',
          de: 'FRÜHER 2.0-DIESEL',
          ru: 'РАННИЙ ДИЗЕЛЬ 2.0'
        },
        originalMsrp: {
          en: '€29,200 New',
          de: '29.200 € Neu',
          ru: '€29 200 новый'
        },
        estUsedPrice: '€5,900',
        perkLabel: {
          en: '✦ Cheap Entry To Diesel • 310 Nm Low-Rev Torque • Pre-Facelift Engine',
          de: '✦ Günstiger Diesel-Einstieg • 310 Nm bei niedrigen Drehzahlen • Vor-Facelift-Motor',
          ru: '✦ Недорогой вход в дизель • 310 Н·м с низов • Мотор дорестайла'
        },
        remarkablePositives: {
          en: [
            'LOWEST DIESEL PRICE (5.9K)',
            '310 NM LOW-REV TORQUE',
            'CHAIN-DRIVEN ENGINE, NO BELT',
            'FRUGAL 5.9 L/100KM'
          ],
          de: [
            'GÜNSTIGSTER DIESEL (5,9K)',
            '310 NM BEI NIEDRIGEN DREHZAHLEN',
            'KETTENMOTOR OHNE ZAHNRIEMEN',
            'SPARSAME 5,9 L/100KM'
          ],
          ru: [
            'САМЫЙ ДЕШЁВЫЙ ДИЗЕЛЬ (5,9К)',
            'ТЯГА 310 Н·М С НИЗОВ',
            'ЦЕПНОЙ МОТОР БЕЗ РЕМНЯ',
            'ЭКОНОМИЧНЫЕ 5,9 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'HEAD SEAL SEEPAGE RISK (2008–2011)',
            'ONLY EURO 4/5 — OLDER CAR',
            'DPF & EGR DISLIKE CITY TRIPS'
          ],
          de: [
            'KOPFDICHTUNGS-RISIKO (2008–2011)',
            'NUR EURO 4/5 — ÄLTERES AUTO',
            'DPF & AGR MÖGEN KEINE STADTFAHRTEN'
          ],
          ru: [
            'РИСК ПРОКЛАДКИ ГБЦ (2008–2011)',
            'ТОЛЬКО ЕВРО-4/5 — СТАРОЕ АВТО',
            'DPF И ЕГР НЕ ЛЮБЯТ ГОРОД'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 7.4,
          runningCostsTco: 7.2
        },
        specOverrides: {
          engineName: { en: '2.0L I4 D-4D 126 (Chain)', de: '2.0L Reihenvierzylinder 126 PS', ru: '2.0L R4 D-4D 126 (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg', sprint0100: '10.5 s', topSpeed: '200 km/h', peakTorque: '310 Nm @ 1,600 rpm',
          passingPunch: { en: 'Easy 310 Nm Highway Pull', de: 'Solide 310 Nm ab 1.600/min', ru: 'Уверенные 310 Н·м с низов' },
          realWorldFuel: '5.9 L/100km', tankRange: '60 L (~1,015 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 6.2,
            badges: {
              en: ['Chain 2.0 Diesel (Early Build)', 'Head Seal & Soot Need Checks'],
              de: ['2.0-Kettendiesel (Frühe Serie)', 'Kopfdichtung & Ruß prüfen'],
              ru: ['Цепной дизель 2.0 (ранний)', 'Проверять ГБЦ и сажу']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '1AD-FTV · 1,998 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Toyota Diesel · Timing Chain', de: 'Reihenvierzylinder Toyota-Alu-Diesel · Steuerkette', ru: 'Рядный 4-цил. дизель Toyota · Цепь ГРМ' } }], note: { en: 'More dependable than the 2.2L 2AD sibling with far fewer head-gasket issues; keep EGR clean and drive regularly on highways for DPF health.', de: 'Zuverlässiger als der 2.2-Liter-Bruder mit deutlich weniger Kopfdichtungs-Risiko; AGR sauber halten und Langstrecke für den DPF fahren.', ru: 'Надёжнее 2.2-литрового собрата и почти без проблем с прокладкой ГБЦ; следите за чистотой EGR и регенерацией DPF.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Early 2.0L D-4D (126 HP)— Cheap And Torquey, But Check The Engine Head Seal',
                strengths: [
                  'Lowest buying price of any diesel in the range, with strong low-rev pull.',
                  'Proven engine with a timing chain instead of a rubber belt and a relaxed, frugal motorway character.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Early cars can lose coolant slowly— watch for a falling coolant level or white exhaust smoke.',
                  'Short city trips clog the exhaust recirculation valve and filter; regular motorway runs keep them clean.'
                ],
                beforeYouBuy: [
                  'Check the coolant tank level and look for white smoke on a warm restart— signs of a weeping engine head seal.',
                  'Ask when the particulate filter and EGR valve were last cleaned and whether the car mostly did motorway miles.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash diesel oil + fuel filter; check the coolant level for slow loss',
                    cost: '€180–280',
                    ifIgnored: 'Slow coolant loss from the engine head seal goes unnoticed until overheating',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Clean EGR valve & intake pipes, check the particulate filter; renew 6-yr aging belts/hoses',
                    cost: '€300–480',
                    ifIgnored: 'Soot chokes the EGR valve & dirty intake causes smoke and cold-start shake',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Check the engine head seal (coolant loss / white smoke) & replace the water pump',
                    cost: '€350–600',
                    ifIgnored: 'A blown head gasket overheats the engine and bills climb fast (seals age over the years)',
                    damageCost: '€2,000–3,200'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel & clutch + deep-clean the particulate filter',
                    cost: '€850–1,450',
                    ifIgnored: 'A rattling flywheel damages the gearbox & a blocked filter cuts power and heats the turbo',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew injector seals, turbo hoses & glow plugs',
                    cost: '€450–800',
                    ifIgnored: 'Leaking seals blacken the oil & split old hoses cause reduced-power mode',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check timing chain noise, engine mounts & rear suspension bushings',
                    cost: '€480–820',
                    ifIgnored: 'A loose chain rattles on cold start & worn mounts add cabin vibration (rubber ages too)',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: 'Früher 2.0L D-4D (126 PS)— günstig und durchzugsstark, aber Kopfdichtung prüfen',
                strengths: [
                  'Niedrigster Kaufpreis aller Diesel im Angebot, mit kräftigem Durchzug.',
                  'Bewährter Motor mit Steuerkette statt Zahnriemen und entspanntem, sparsamem Autobahn-Charakter.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Frühe Autos verlieren teils langsam Kühlmittel— auf sinkenden Kühlmittelstand oder weißen Abgasrauch achten.',
                  'Kurzstrecken verstopfen AGR-Ventil und Filter; regelmäßige Autobahnfahrten halten sie sauber.'
                ],
                beforeYouBuy: [
                  'Kühlmittelstand prüfen und beim Warmstart auf weißen Rauch achten— Zeichen einer schwitzenden Zylinderkopfdichtung.',
                  'Fragen, wann Partikelfilter und AGR-Ventil zuletzt gereinigt wurden und ob überwiegend Autobahn gefahren wurde.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich aschearmes Dieselöl + Dieselfilter; Kühlmittelstand auf schleichenden Verlust prüfen',
                    cost: '180–280 €',
                    ifIgnored: 'Schleichender Kühlmittelverlust an der Kopfdichtung fällt erst bei Überhitzung auf',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'AGR-Ventil & Ansaugrohre reinigen, Partikelfilter prüfen; 6-J.-Riemen/Schläuche erneuern',
                    cost: '300–480 €',
                    ifIgnored: 'Ruß verstopft das AGR-Ventil & verschmutzter Ansaugtrakt verursacht Rauch und Kaltstart-Ruckeln',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Zylinderkopfdichtung prüfen (Kühlmittelverlust / weißer Rauch) & Wasserpumpe tauschen',
                    cost: '350–600 €',
                    ifIgnored: 'Durchgebrannte Kopfdichtung überhitzt den Motor und wird schnell teuer (Dichtungen altern auch zeitlich)',
                    damageCost: '2.000–3.200 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad & Kupplung erneuern + Partikelfilter gründlich reinigen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ein klapperndes Schwungrad schädigt das Getriebe & ein zugesetzter Filter nimmt Leistung und heizt den Turbo auf',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Injektor-Dichtungen, Ladeluftschläuche & Glühkerzen erneuern',
                    cost: '450–800 €',
                    ifIgnored: 'Undichte Dichtungen verrußen das Öl & rissige Schläuche lösen den Notlauf aus',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette abhören, Motorlager & Hinterachs-Buchsen prüfen',
                    cost: '480–820 €',
                    ifIgnored: 'Eine lockere Kette rasselt beim Kaltstart & ausgeschlagene Lager brummen im Innenraum (Gummi altert auch)',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Ранний 2.0 D-4D (126 л.с.)— дёшево и тяговито, но проверьте прокладку ГБЦ',
                strengths: [
                  'Минимальная цена среди дизелей с сильной тягой на низах.',
                  'Проверенный мотор с цепью вместо ремня и спокойным экономичным характером на трассе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Ранние машины могут медленно терять антифриз— следите за уровнем и белым дымом.',
                  'Короткие городские поездки забивают клапан ЕГР и фильтр; регулярная трасса их очищает.'
                ],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и белый дым при тёплом перезапуске— признаки подтекающей прокладки ГБЦ.',
                  'Спросите, когда чистили сажевый фильтр и клапан ЕГР и ездила ли машина в основном по трассе.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно малозольное дизельное масло + топливный фильтр; проверять уровень антифриза',
                    cost: '€180–280',
                    ifIgnored: 'Медленная потеря антифриза из-под ГБЦ остаётся незамеченной до перегрева',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Почистить клапан ЕГР и впуск, проверить сажевый фильтр; обновить стареющие ремни/шланги (6 лет)',
                    cost: '€300–480',
                    ifIgnored: 'Сажа забивает ЕГР, а грязный впуск даёт дым и тряску на холодную',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Проверить прокладку ГБЦ (потеря антифриза / белый дым) и заменить помпу',
                    cost: '€350–600',
                    ifIgnored: 'Пробитая прокладка перегревает мотор, ремонт быстро дорожает (уплотнения стареют по годам)',
                    damageCost: '€2 000–3 200'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить двухмассовый маховик и сцепление + глубоко промыть сажевый фильтр',
                    cost: '€850–1 450',
                    ifIgnored: 'Гремящий маховик убивает коробку, а забитый фильтр душит мотор и греет турбину',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить уплотнения форсунок, шланги наддува и свечи накала',
                    cost: '€450–800',
                    ifIgnored: 'Подтекающие уплотнения чернят масло, а лопнувшие шланги вводят аварийный режим',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить цепь ГРМ, опоры двигателя и сайлентблоки задней подвески',
                    cost: '€480–820',
                    ifIgnored: 'Растянутая цепь шумит на холодную, а старые опоры дают вибрацию в салоне (резина стареет)',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 6.5,
            badges: {
              en: ['6-MT • Flywheel Wear Item', 'Smooth Shift Action'],
              de: ['6-Gang • Schwungrad Verschleißteil', 'Leichte Schaltung'],
              ru: ['6-МКПП • Маховик расходник', 'Лёгкие переключения']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.1,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.7,
            badges: {
              en: ['530 kg Payload', '1,500 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.500 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.9,
            badges: {
              en: ['0–100 km/h: 10.5 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '200 km/h Spitze'],
              ru: ['0–100 km/h: 10.5 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.7,
            badges: {
              en: ['310 Nm', 'Pull From 1,600 rpm'],
              de: ['310 Nm', 'Zug ab 1.600 U/min'],
              ru: ['310 Н·м', 'Тяга с 1 600 об/мин']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['Stable Highway Poise', 'Heavy Diesel Nose Pushes In Corners'],
              de: ['Stabiler Geradeauslauf', 'Schwere Dieselnase schiebt über die Vorderräder'],
              ru: ['Устойчив на трассе', 'Тяжёлый дизельный нос сносит в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 7.7,
            badges: {
              en: ['5.9 L/100km', '129–138 g/km CO2 (Euro 5)'],
              de: ['5,9 L/100km', '129–138 g/km CO2 (Euro 5)'],
              ru: ['5,9 л/100 км', '129–138 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['2.0L Diesel Tax • Euro 5', 'Mid-Size 126 HP Insurance Class'],
              de: ['2.0-Diesel-Steuer • Euro 5', 'Mittelklasse-Tarif (126 PS)'],
              ru: ['Налог за 2.0 л дизель • Евро-5', 'Страховка на 126 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 6.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Clean EGR valve, replace diesel fuel filter & change gearbox oil', de: 'AGR-Ventil reinigen, Dieselfilter & Getriebeöl wechseln', ru: 'Чистка клапана EGR, замена топливного фильтра и масла в КПП' }, cost: '€200–330' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect glow plugs, auxiliary belt & Denso SCV fuel valve', de: 'Glühkerzen, Keilrippenriemen & Denso-SCV-Ventil prüfen', ru: 'Проверка свечей накала, ремня и клапана SCV Denso' }, cost: '€180–280' }
              ],
              critical: [
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130 000–190 000 км' }, action: { en: 'DPF clogging / 5th injector soot & dual-mass flywheel (6-MT)', de: 'DPF-Beladung / 5. Einspritzdüse & Zweimassenschwungrad (6-Gang)', ru: 'Засорение DPF / 5-й форсунки и двухмассовый маховик (6-МКПП)' }, cost: '€950–1,600', risk: { en: 'Limp mode, high backpressure, and driveline clatter', de: 'Notlauf, hoher Abgasgegendruck und starkes Kupplungsrasseln', ru: 'Аварийный режим, высокое противодавление и стук маховика' }, damage: '€2,000–3,200' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) actuator & 2AD gasket check (2.2L)', de: 'T27-EPB-Stellmodul & 2AD-Kopfdichtungs-Check (bei 2.2L)', ru: 'Блок электроручника EPB и контроль ГБЦ 2AD (на 2.2L)' }, cost: '€550–1,800', risk: { en: 'Jammed EPB or coolant pressurization on high-mileage 2.2 diesels', de: 'Blockierte Feststellbremse oder Kühlwasserverlust beim 2.2-Diesel', ru: 'Заклинивший ручник или газы в антифризе на 2.2 дизеле' }, damage: '€1,500–3,800' }
              ]
            },
            badges: {
              en: ['Flywheel, EGR & Filter Care', 'Head Seal Worth Checking'],
              de: ['Schwungrad, AGR & Filter pflegen', 'Kopfdichtung im Blick behalten'],
              ru: ['Уход за маховиком, ЕГР и фильтром', 'Проверять прокладку ГБЦ']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Diesel Buyers Want Service Proof', 'Strong Fleet-Car Demand'],
              de: ['Diesel-Käufer wollen Servicebelege', 'Gefragter Flottenwagen'],
              ru: ['Покупатели дизеля ждут чеков', 'Хороший спрос как у парковых авто']
            }
          }
        }
      },
      {
        id: '2.0-d4d-124',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 124,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 2.0 D-4D 124',
        fullName: '2013 Toyota Avensis 2.0 D-4D 124',
        engineBadge: '2.0L D-4D • 124 HP',
        engineSubLabel: {
          en: '2.0L D-4D Chain Turbo-Diesel Facelift (12/2011–04/2015) • 6-MT • 310 Nm • FWD',
          de: '2.0L D-4D Ketten-Turbodiesel Facelift (12/2011–04/2015) • 6-Gang • 310 Nm • FWD',
          ru: '2.0L D-4D цепной турбодизель рестайлинг (12/2011–04/2015) • 6-ст. МКПП • 310 Н·м • FWD'
        },
        rarityLabel: {
          en: 'FACELIFT 2.0 DIESEL',
          de: 'FACELIFT-2.0-DIESEL',
          ru: 'ДИЗЕЛЬ РЕСТАЙЛИНГА'
        },
        originalMsrp: {
          en: '€29,600 New',
          de: '29.600 € Neu',
          ru: '€29 600 новый'
        },
        estUsedPrice: '€7,300',
        perkLabel: {
          en: '✦ Facelift Diesel (2012–2015) • Frugal 5.7 L/100km • 310 Nm Low-Rev Torque',
          de: '✦ Facelift-Diesel (2012–2015) • Sparsame 5,7 L/100km • 310 Nm bei niedrigen Drehzahlen',
          ru: '✦ Дизель рестайлинга (2012–2015) • Экономичные 5,7 л/100 км • 310 Н·м с низов'
        },
        remarkablePositives: {
          en: [
            'FACELIFT-ERA REFINEMENT (2012–2015)',
            'FRUGAL 5.7 L/100KM',
            '310 NM LOW-REV TORQUE',
            'CHAIN-DRIVEN ENGINE, NO BELT'
          ],
          de: [
            'FACELIFT-VERFEINERUNG (2012–2015)',
            'SPARSAME 5,7 L/100KM',
            '310 NM BEI NIEDRIGEN DREHZAHLEN',
            'KETTENMOTOR OHNE ZAHNRIEMEN'
          ],
          ru: [
            'ДОРАБОТКИ РЕСТАЙЛИНГА (2012–2015)',
            'ЭКОНОМИЧНЫЕ 5,7 Л/100 КМ',
            'ТЯГА 310 Н·М С НИЗОВ',
            'ЦЕПНОЙ МОТОР БЕЗ РЕМНЯ'
          ]
        },
        notableNegatives: {
          en: [
            'STILL A HEAD SEAL CHECK ITEM',
            'DUAL-MASS FLYWHEEL WEARS ~150K KM',
            'DPF & EGR DISLIKE CITY TRIPS'
          ],
          de: [
            'KOPFDICHTUNG WEITERHIN PRÜFEN',
            'ZWEIMASSENSCHWUNGRAD VERSCHLEISST AB ~150TKM',
            'DPF & AGR MÖGEN KEINE STADTFAHRTEN'
          ],
          ru: [
            'ПРОКЛАДКУ ГБЦ ВСЁ ЕЩЁ ПРОВЕРЯТЬ',
            'МАХОВИК ИЗНАШИВАЕТСЯ К ~150 ТЫС.',
            'DPF И ЕГР НЕ ЛЮБЯТ ГОРОД'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 7.4,
          runningCostsTco: 7.5
        },
        specOverrides: {
          engineName: { en: '2.0L I4 D-4D 124 (Chain)', de: '2.0L Reihenvierzylinder 124 PS', ru: '2.0L R4 D-4D 124 (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg', sprint0100: '10.7 s', topSpeed: '200 km/h', peakTorque: '310 Nm @ 1,600 rpm',
          passingPunch: { en: 'Smooth 310 Nm Mid-Range', de: 'Ruhige 310 Nm Durchzug', ru: 'Ровная тяга 310 Н·м' },
          realWorldFuel: '5.7 L/100km', tankRange: '60 L (~1,050 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 6.7,
            badges: {
              en: ['Chain 2.0 Diesel (Facelift)', 'Head Seal & Soot Need Checks'],
              de: ['2.0-Kettendiesel (Facelift)', 'Kopfdichtung & Ruß prüfen'],
              ru: ['Цепной дизель 2.0 (рестайлинг)', 'Проверять ГБЦ и сажу']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '1AD-FTV (2012 Facelift) · 1,998 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Revised Turbo & Lower CO2', de: 'Reihenvierzylinder Alu-Diesel · Überarbeiteter Turbo', ru: 'Рядный 4-цил. дизель · Доработанная турбина (2012+)' } }], note: { en: 'Updated 2012+ Toyota 2.0 D-4D with quicker turbo spool and lower fuel burn — the safest all-round Toyota-built diesel in the Avensis.', de: 'Überarbeiteter 2012+ Toyota-Diesel mit besserem Ansprechverhalten — der rundeste hauseigene Diesel im Avensis.', ru: 'Обновлённый в 2012 году дизель 1AD-FTV — самый сбалансированный и надёжный собственный дизель Toyota в Avensis.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Facelift 2.0L D-4D (124 HP)— The Sensible Diesel Match For The 2012–2015 Car',
                strengths: [
                  'Built alongside the 2012–2015 facelift sedan, with refined Euro 5 tuning.',
                  'Proven engine with a timing chain instead of a rubber belt and a relaxed, frugal motorway character.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Early cars can lose coolant slowly— watch for a falling coolant level or white exhaust smoke.',
                  'Short city trips clog the exhaust recirculation valve and filter; regular motorway runs keep them clean.'
                ],
                beforeYouBuy: [
                  'Check the coolant tank level and look for white smoke on a warm restart— signs of a weeping engine head seal.',
                  'Ask when the particulate filter and EGR valve were last cleaned and whether the car mostly did motorway miles.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash diesel oil + fuel filter; check the coolant level for slow loss',
                    cost: '€180–280',
                    ifIgnored: 'Slow coolant loss from the engine head seal goes unnoticed until overheating',
                    damageCost: '€1,300–2,200'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Clean EGR valve & intake pipes, check the particulate filter; renew 6-yr aging belts/hoses',
                    cost: '€300–480',
                    ifIgnored: 'Soot chokes the EGR valve & dirty intake causes smoke and cold-start shake',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Check the engine head seal (coolant loss / white smoke) & replace the water pump',
                    cost: '€350–600',
                    ifIgnored: 'A blown head gasket overheats the engine and bills climb fast (seals age over the years)',
                    damageCost: '€2,000–3,200'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel & clutch + deep-clean the particulate filter',
                    cost: '€850–1,450',
                    ifIgnored: 'A rattling flywheel damages the gearbox & a blocked filter cuts power and heats the turbo',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew injector seals, turbo hoses & glow plugs',
                    cost: '€450–800',
                    ifIgnored: 'Leaking seals blacken the oil & split old hoses cause reduced-power mode',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check timing chain noise, engine mounts & rear suspension bushings',
                    cost: '€480–820',
                    ifIgnored: 'A loose chain rattles on cold start & worn mounts add cabin vibration (rubber ages too)',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: 'Facelift-2.0L-D-4D (124 PS)— der vernünftige Diesel für den Avensis 2012–2015',
                strengths: [
                  'Gebaut parallel zur Limousine 2012–2015, mit verfeinerter Euro-5-Abstimmung.',
                  'Bewährter Motor mit Steuerkette statt Zahnriemen und entspanntem, sparsamem Autobahn-Charakter.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Frühe Autos verlieren teils langsam Kühlmittel— auf sinkenden Kühlmittelstand oder weißen Abgasrauch achten.',
                  'Kurzstrecken verstopfen AGR-Ventil und Filter; regelmäßige Autobahnfahrten halten sie sauber.'
                ],
                beforeYouBuy: [
                  'Kühlmittelstand prüfen und beim Warmstart auf weißen Rauch achten— Zeichen einer schwitzenden Zylinderkopfdichtung.',
                  'Fragen, wann Partikelfilter und AGR-Ventil zuletzt gereinigt wurden und ob überwiegend Autobahn gefahren wurde.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich aschearmes Dieselöl + Dieselfilter; Kühlmittelstand auf schleichenden Verlust prüfen',
                    cost: '180–280 €',
                    ifIgnored: 'Schleichender Kühlmittelverlust an der Kopfdichtung fällt erst bei Überhitzung auf',
                    damageCost: '1.300–2.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'AGR-Ventil & Ansaugrohre reinigen, Partikelfilter prüfen; 6-J.-Riemen/Schläuche erneuern',
                    cost: '300–480 €',
                    ifIgnored: 'Ruß verstopft das AGR-Ventil & verschmutzter Ansaugtrakt verursacht Rauch und Kaltstart-Ruckeln',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Zylinderkopfdichtung prüfen (Kühlmittelverlust / weißer Rauch) & Wasserpumpe tauschen',
                    cost: '350–600 €',
                    ifIgnored: 'Durchgebrannte Kopfdichtung überhitzt den Motor und wird schnell teuer (Dichtungen altern auch zeitlich)',
                    damageCost: '2.000–3.200 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad & Kupplung erneuern + Partikelfilter gründlich reinigen',
                    cost: '850–1.450 €',
                    ifIgnored: 'Ein klapperndes Schwungrad schädigt das Getriebe & ein zugesetzter Filter nimmt Leistung und heizt den Turbo auf',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Injektor-Dichtungen, Ladeluftschläuche & Glühkerzen erneuern',
                    cost: '450–800 €',
                    ifIgnored: 'Undichte Dichtungen verrußen das Öl & rissige Schläuche lösen den Notlauf aus',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette abhören, Motorlager & Hinterachs-Buchsen prüfen',
                    cost: '480–820 €',
                    ifIgnored: 'Eine lockere Kette rasselt beim Kaltstart & ausgeschlagene Lager brummen im Innenraum (Gummi altert auch)',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Рестайлинговый 2.0 D-4D (124 л.с.)— разумный дизель для Avensis 2012–2015',
                strengths: [
                  'Выпускался вместе с седаном 2012–2015, с доработанной настройкой Евро-5.',
                  'Проверенный мотор с цепью вместо ремня и спокойным экономичным характером на трассе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Ранние машины могут медленно терять антифриз— следите за уровнем и белым дымом.',
                  'Короткие городские поездки забивают клапан ЕГР и фильтр; регулярная трасса их очищает.'
                ],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и белый дым при тёплом перезапуске— признаки подтекающей прокладки ГБЦ.',
                  'Спросите, когда чистили сажевый фильтр и клапан ЕГР и ездила ли машина в основном по трассе.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно малозольное дизельное масло + топливный фильтр; проверять уровень антифриза',
                    cost: '€180–280',
                    ifIgnored: 'Медленная потеря антифриза из-под ГБЦ остаётся незамеченной до перегрева',
                    damageCost: '€1 300–2 200'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Почистить клапан ЕГР и впуск, проверить сажевый фильтр; обновить стареющие ремни/шланги (6 лет)',
                    cost: '€300–480',
                    ifIgnored: 'Сажа забивает ЕГР, а грязный впуск даёт дым и тряску на холодную',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Проверить прокладку ГБЦ (потеря антифриза / белый дым) и заменить помпу',
                    cost: '€350–600',
                    ifIgnored: 'Пробитая прокладка перегревает мотор, ремонт быстро дорожает (уплотнения стареют по годам)',
                    damageCost: '€2 000–3 200'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить двухмассовый маховик и сцепление + глубоко промыть сажевый фильтр',
                    cost: '€850–1 450',
                    ifIgnored: 'Гремящий маховик убивает коробку, а забитый фильтр душит мотор и греет турбину',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить уплотнения форсунок, шланги наддува и свечи накала',
                    cost: '€450–800',
                    ifIgnored: 'Подтекающие уплотнения чернят масло, а лопнувшие шланги вводят аварийный режим',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить цепь ГРМ, опоры двигателя и сайлентблоки задней подвески',
                    cost: '€480–820',
                    ifIgnored: 'Растянутая цепь шумит на холодную, а старые опоры дают вибрацию в салоне (резина стареет)',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 6.9,
            badges: {
              en: ['6-MT • Flywheel Wear Item', 'Smooth Shift Action'],
              de: ['6-Gang • Schwungrad Verschleißteil', 'Leichte Schaltung'],
              ru: ['6-МКПП • Маховик расходник', 'Лёгкие переключения']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.1,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.7,
            badges: {
              en: ['530 kg Payload', '1,500 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.500 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.7,
            badges: {
              en: ['0–100 km/h: 10.7 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 10,7 s', '200 km/h Spitze'],
              ru: ['0–100 km/h: 10.7 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.7,
            badges: {
              en: ['310 Nm', 'Pull From 1,600 rpm'],
              de: ['310 Nm', 'Zug ab 1.600 U/min'],
              ru: ['310 Н·м', 'Тяга с 1 600 об/мин']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Stable Highway Poise', 'Heavy Diesel Nose Pushes In Corners'],
              de: ['Stabiler Geradeauslauf', 'Schwere Dieselnase schiebt über die Vorderräder'],
              ru: ['Устойчив на трассе', 'Тяжёлый дизельный нос сносит в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 7.9,
            badges: {
              en: ['5.7 L/100km', '124–132 g/km CO2 (Euro 5)'],
              de: ['5,7 L/100km', '124–132 g/km CO2 (Euro 5)'],
              ru: ['5,7 л/100 км', '124–132 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['2.0L Diesel Tax • Euro 5', 'Mid-Size 124 HP Insurance Class'],
              de: ['2.0-Diesel-Steuer • Euro 5', 'Mittelklasse-Tarif (124 PS)'],
              ru: ['Налог за 2.0 л дизель • Евро-5', 'Страховка на 124 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 6.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Clean EGR valve, replace diesel fuel filter & change gearbox oil', de: 'AGR-Ventil reinigen, Dieselfilter & Getriebeöl wechseln', ru: 'Чистка клапана EGR, замена топливного фильтра и масла в КПП' }, cost: '€200–330' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect glow plugs, auxiliary belt & Denso SCV fuel valve', de: 'Glühkerzen, Keilrippenriemen & Denso-SCV-Ventil prüfen', ru: 'Проверка свечей накала, ремня и клапана SCV Denso' }, cost: '€180–280' }
              ],
              critical: [
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130 000–190 000 км' }, action: { en: 'DPF clogging / 5th injector soot & dual-mass flywheel (6-MT)', de: 'DPF-Beladung / 5. Einspritzdüse & Zweimassenschwungrad (6-Gang)', ru: 'Засорение DPF / 5-й форсунки и двухмассовый маховик (6-МКПП)' }, cost: '€950–1,600', risk: { en: 'Limp mode, high backpressure, and driveline clatter', de: 'Notlauf, hoher Abgasgegendruck und starkes Kupplungsrasseln', ru: 'Аварийный режим, высокое противодавление и стук маховика' }, damage: '€2,000–3,200' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) actuator & 2AD gasket check (2.2L)', de: 'T27-EPB-Stellmodul & 2AD-Kopfdichtungs-Check (bei 2.2L)', ru: 'Блок электроручника EPB и контроль ГБЦ 2AD (на 2.2L)' }, cost: '€550–1,800', risk: { en: 'Jammed EPB or coolant pressurization on high-mileage 2.2 diesels', de: 'Blockierte Feststellbremse oder Kühlwasserverlust beim 2.2-Diesel', ru: 'Заклинивший ручник или газы в антифризе на 2.2 дизеле' }, damage: '€1,500–3,800' }
              ]
            },
            badges: {
              en: ['Flywheel, EGR & Filter Care', 'Head Seal Worth Checking'],
              de: ['Schwungrad, AGR & Filter pflegen', 'Kopfdichtung im Blick behalten'],
              ru: ['Уход за маховиком, ЕГР и фильтром', 'Проверять прокладку ГБЦ']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Diesel Buyers Want Service Proof', 'Strong Fleet-Car Demand'],
              de: ['Diesel-Käufer wollen Servicebelege', 'Gefragter Flottenwagen'],
              ru: ['Покупатели дизеля ждут чеков', 'Хороший спрос как у парковых авто']
            }
          }
        }
      },
      {
        id: '2.0-d4d-143',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'avensisBmwDieselChain',
            'avensisCalmHandling',
            'avensisDatedTech'
          ]
        },
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 143,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 2.0 D-4D 143',
        fullName: '2016 Toyota Avensis 2.0 D-4D 143',
        engineBadge: '2.0L D-4D • 143 HP',
        engineSubLabel: {
          en: '2.0L D-4D Chain Turbo-Diesel (04/2015–04/2018) • 6-MT / Opt. Multidrive S • 320 Nm • FWD',
          de: '2.0L D-4D Ketten-Turbodiesel (04/2015–04/2018) • 6-Gang / Opt. Multidrive S • 320 Nm • FWD',
          ru: '2.0L D-4D цепной турбодизель (04/2015–04/2018) • 6-МКПП / Опц. Multidrive S • 320 Н·м • FWD'
        },
        rarityLabel: {
          en: 'NEWEST DIESEL (2015+)',
          de: 'NEUESTER DIESEL (2015+)',
          ru: 'САМЫЙ СВЕЖИЙ ДИЗЕЛЬ (2015+)'
        },
        originalMsrp: {
          en: '€30,800 New',
          de: '30.800 € Neu',
          ru: '€30 800 новый'
        },
        estUsedPrice: '€11,900',
        perkLabel: {
          en: '✦ Modern BMW-Built 143 HP Diesel • 9.7s 0–100 • Frugal 5.5 L/100km • Euro 6',
          de: '✦ Moderner BMW-Diesel mit 143 PS • 9,7s auf 100 • Sparsame 5,5 L/100km • Euro 6',
          ru: '✦ Современный дизель BMW 143 л.с. • 9,7 с до 100 • Экономичные 5,5 л/100 км • Евро-6'
        },
        remarkablePositives: {
          en: [
            'MODERN QUIET DIESEL (EURO 6)',
            '9.7S 0–100 KM/H & 210 KM/H',
            'EFFICIENT 5.5 L/100KM',
            'YOUNGEST CARS, LOWEST WEAR'
          ],
          de: [
            'MODERNER LEISER DIESEL (EURO 6)',
            '9,7S AUF 100 KM/H & 210 KM/H',
            'SPARSAME SPARSAM: 5,5 L/100KM',
            'JÜNGSTE AUTOS, WENIG VERSCHLEISS'
          ],
          ru: [
            'СОВРЕМЕННЫЙ ТИХИЙ ДИЗЕЛЬ (ЕВРО-6)',
            '9,7 С ДО 100 И 210 КМ/Ч',
            'ЭКОНОМИЧНЫЕ 5,5 Л/100 КМ',
            'САМЫЕ СВЕЖИЕ АВТО, МАЛЫЙ ИЗНОС'
          ]
        },
        notableNegatives: {
          en: [
            'HIGHEST USED PRICE OF THE RANGE',
            'REAR TIMING CHAIN = COSTLY IF NEGLECTED',
            'DPF DISLIKES SHORT TRIPS'
          ],
          de: [
            'HÖCHSTER GEBRAUCHTPREIS DER REIHE',
            'HINTERE STEUERKETTE TEUER BEI VERNACHLÄSSIGUNG',
            'DPF MAG KEINE KURZSTRECKEN'
          ],
          ru: [
            'САМАЯ ВЫСОКАЯ ЦЕНА НА ВТОРИЧКЕ',
            'ЦЕПЬ СЗАДИ ДОРОГА ПРИ ЗАПУСКЕ',
            'DPF НЕ ЛЮБИТ КОРОТКИЕ ПОЕЗДКИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 7.8,
          spacePracticality: 8.4,
          performanceDynamics: 7.7,
          runningCostsTco: 8.0
        },
        specOverrides: {
          engineName: { en: '2.0L I4 D-4D 143 (BMW-Derived)', de: '2.0L Reihenvierzylinder 143 PS', ru: '2.0L R4 D-4D 143 (база BMW)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg', sprint0100: '9.7 s', topSpeed: '210 km/h', peakTorque: '320 Nm @ 1,750 rpm',
          passingPunch: { en: 'Brisk 320 Nm Euro-6 Pull', de: 'Flotte 320 Nm (Euro 6)', ru: 'Бодрые 320 Н·м (Euro 6)' },
          realWorldFuel: '5.5 L/100km', tankRange: '60 L (~1,090 km)', euroNorm: 'Euro 6 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.6,
            badges: {
              en: ['Modern 2.0 Diesel Chain', 'Cold-Start Rattle = Warning'],
              de: ['Moderner 2.0-Diesel mit Kette', 'Rasseln beim Kaltstart = Warnung'],
              ru: ['Современный 2.0 с цепью', 'Стук на холодную = тревога']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2WW (BMW N47-Derived) · 1,995 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Euro 6 + Rear Timing Chain', de: 'Reihenvierzylinder Alu-Diesel · Euro 6 + hintere Kette', ru: 'Рядный 4-цил. дизель (база BMW) · Euro 6 + задняя цепь' } }], note: { en: 'Refined, punchy Euro 6 facelift diesel with 1,090 km range; uses BMW’s revised N47 rear-chain layout, so keep oil intervals at 15,000 km.', de: 'Kultivierter, starker Euro-6-Facelift-Diesel mit 1.090 km Reichweite; wegen der hinteren N47-Kette Öl alle 15.000 km wechseln.', ru: 'Тихий и тяговитый дизель Euro 6 с запасом хода 1 090 км; из-за задней цепи N47 меняйте масло каждые 15 000 км.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '2.0L D-4D (BMW-Built, 143 HP)— Modern, Quiet And Fast, Treat The Chain With Respect',
                strengths: [
                  '143 HP, 320 Nm and only 5.5 L/100km with Euro 6 cleanliness.',
                  'Quieter, smoother and more efficient than the older Toyota diesels, with modern Euro 6 emissions.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'If it ever stretches the repair is labour-heavy— a rattle on cold start must never be ignored.',
                  'Short trips clog them; a leaking EGR cooler can lose coolant.'
                ],
                beforeYouBuy: [
                  'Listen to a cold start: any rattle or whine from the back of the engine that lasts more than a second is a warning.',
                  'Check the coolant level and ask for proof of oil changes every 10,000–15,000 km or 1 year.',
                  'Make sure the particulate filter warning light has never appeared and ask how the car was driven.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Oil every 10,000 km / 1 yr (low-ash diesel oil) + fuel filter',
                    cost: '€190–290',
                    ifIgnored: 'Diesel-thinned oil speeds up timing chain wear at the back of the engine',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Clean intake, check the EGR cooler; change coolant & brake fluid; inspect 6-yr rubber hoses',
                    cost: '€320–520',
                    ifIgnored: 'A sooty EGR cooler can leak coolant & old fluids age the parts',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'red',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Test the timing chain; replace the chain kit if it rattles (rear-mounted, labour heavy)',
                    cost: '€380–650',
                    ifIgnored: 'A stretched chain can jump a tooth and wreck the engine',
                    damageCost: '€2,800–4,800'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel & clutch (manual) + particulate filter clean',
                    cost: '€850–1,400',
                    ifIgnored: 'A worn flywheel damages the gearbox & a blocked filter cuts power',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew water pump, thermostat & aging boost hoses',
                    cost: '€460–820',
                    ifIgnored: 'Plastic housings and hoses crack with age & coolant leaks lead to overheating',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check suspension bushings, engine mounts & injectors',
                    cost: '€500–850',
                    ifIgnored: 'Worn bushings and tired mounts add noise and vibration (rubber ages with the years)',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: '2.0L D-4D (BMW-Motor, 143 PS)— modern, leise und flott, Steuerkette ernst nehmen',
                strengths: [
                  '143 PS, 320 Nm und nur 5,5 L/100km bei Euro-6-Abgasreinheit.',
                  'Leiser, ruhiger und sparsamer als die älteren Toyota-Diesel, mit moderner Euro-6-Norm.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Längt sie sich, ist die Reparatur sehr aufwendig— Rasseln beim Kaltstart nie ignorieren.',
                  'Kurzstrecken verstopfen sie; ein undichter AGR-Kühler kann Kühlmittel verlieren.'
                ],
                beforeYouBuy: [
                  'Kaltstart anhören: Jedes Rasseln oder Surren hinten am Motor, das länger als eine Sekunde anhält, ist ein Warnsignal.',
                  'Kühlmittelstand prüfen und Nachweise über Ölwechsel alle 10.000–15.000 km bzw. 1 Jahr verlangen.',
                  'Sicherstellen, dass die Partikelfilter-Warnleuchte nie aufgeleuchtet hat, und nach der Fahrweise fragen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Ölwechsel alle 10.000 km / 1 J. (aschearmes Dieselöl) + Dieselfilter',
                    cost: '190–290 €',
                    ifIgnored: 'Mit Diesel verdünntes Öl beschleunigt den Steuerkettenverschleiß hinten am Motor',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ansaugtrakt reinigen, AGR-Kühler prüfen; Kühl- & Bremsflüssigkeit wechseln; 6-J.-Schläuche prüfen',
                    cost: '320–520 €',
                    ifIgnored: 'Ein verrußter AGR-Kühler kann Kühlmittel verlieren & alte Flüssigkeiten lassen Teile altern',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Steuerkette prüfen; bei Rasseln Kettensatz erneuern (hinten verbaut, aufwendig)',
                    cost: '380–650 €',
                    ifIgnored: 'Eine gelängte Kette kann überspringen und den Motor zerstören',
                    damageCost: '2.800–4.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad & Kupplung (Schalter) erneuern + Partikelfilter reinigen',
                    cost: '850–1.400 €',
                    ifIgnored: 'Ein verschlissenes Schwungrad schädigt das Getriebe & ein zugesetzter Filter nimmt Leistung',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Wasserpumpe, Thermostat & alternde Ladeluftschläuche erneuern',
                    cost: '460–820 €',
                    ifIgnored: 'Kunststoffgehäuse und Schläuche reißen altersbedingt & Kühlmittelverlust führt zu Überhitzung',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Fahrwerksbuchsen, Motorlager & Injektoren prüfen',
                    cost: '500–850 €',
                    ifIgnored: 'Ausgeschlagene Buchsen und müde Lager sorgen für Geräusche und Vibrationen (Gummi altert zeitlich)',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: '2.0 D-4D (мотор BMW, 143 л.с.)— современный, тихий и быстрый, цепь требует внимания',
                strengths: [
                  '143 л.с., 320 Н·м и всего 5,5 л/100 км с чистотой Евро-6.',
                  'Тише, мягче и экономичнее старых дизелей Toyota, норма Евро-6.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Если она растянется, ремонт очень трудоёмкий— стук на холодную нельзя игнорировать.',
                  'Короткие поездки забивают их; течь охладителя ЕГР уносит антифриз.'
                ],
                beforeYouBuy: [
                  'Послушайте холодный пуск: любой стук или свист сзади мотора дольше секунды— тревожный сигнал.',
                  'Проверьте уровень антифриза и попросите чеки на замену масла каждые 10–15 тыс. км или раз в год.',
                  'Убедитесь, что лампа сажевого фильтра не загоралась, и спросите, как эксплуатировали машину.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло каждые 10 тыс. км / 1 год (малозольное дизельное) + топливный фильтр',
                    cost: '€190–290',
                    ifIgnored: 'Разбавленное соляркой масло ускоряет износ цепи ГРМ сзади мотора',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Почистить впуск, проверить охладитель ЕГР; заменить антифриз и тормозную жидкость; шланги (6 лет)',
                    cost: '€320–520',
                    ifIgnored: 'Закоксованный охладитель ЕГР течёт, а старые жидкости изнашивают узлы',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'red',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Проверить цепь ГРМ; при стуке заменить комплект (расположен сзади, трудоёмко)',
                    cost: '€380–650',
                    ifIgnored: 'Растянутая цепь может перескочить и убить мотор',
                    damageCost: '€2 800–4 800'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить двухмассовый маховик и сцепление (МКПП) + промыть сажевый фильтр',
                    cost: '€850–1 400',
                    ifIgnored: 'Изношенный маховик убивает коробку, а забитый фильтр забирает мощность',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить помпу, термостат и стареющие шланги наддува',
                    cost: '€460–820',
                    ifIgnored: 'Пластик и шланги трескаются от возраста, а утечка антифриза ведёт к перегреву',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить сайлентблоки, опоры двигателя и форсунки',
                    cost: '€500–850',
                    ifIgnored: 'Изношенные сайлентблоки и опоры дают шум и вибрации (резина стареет по годам)',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.4,
            badges: {
              en: ['6-MT Or Smooth Automatic', 'Mind Flywheel On Manual'],
              de: ['6-Gang oder sanfte Automatik', 'Beim Schalter Schwungrad beachten'],
              ru: ['6-МКПП или плавный автомат', 'На механике следить за маховиком']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 8.9,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 7.7,
            badges: {
              en: ['530 kg Payload', '1,500 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.500 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.4,
            badges: {
              en: ['0–100 km/h: 9.7 s', '210 km/h Top Speed'],
              de: ['0–100 km/h: 9,7 s', '210 km/h Spitze'],
              ru: ['0–100 km/h: 9.7 с', 'Макс. 210 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.9,
            badges: {
              en: ['320 Nm', 'Strong Pull From 1,750 rpm'],
              de: ['320 Nm', 'Starker Zug ab 1.750 U/min'],
              ru: ['320 Н·м', 'Сильная тяга с 1 750 об/мин']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Stable Highway Poise', 'Heavy Diesel Nose Pushes In Corners'],
              de: ['Stabiler Geradeauslauf', 'Schwere Dieselnase schiebt über die Vorderräder'],
              ru: ['Устойчив на трассе', 'Тяжёлый дизельный нос сносит в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 8.1,
            badges: {
              en: ['Efficient (5.5 L/100km)', '112–119 g/km CO2 (Euro 6)'],
              de: ['Sparsam (5,5 L/100km)', '112–119 g/km CO2 (Euro 6)'],
              ru: ['Экономичный (5,5 л/100 км)', '112–119 г/км CO2 (Евро-6)']
            }
          },
          taxInsuranceNorm: {
            score: 7.4,
            badges: {
              en: ['2.0L Diesel Tax • Euro 6', 'Mid-Size 143 HP Insurance Class'],
              de: ['2.0-Diesel-Steuer • Euro 6', 'Mittelklasse-Tarif (143 PS)'],
              ru: ['Налог за 2.0 л дизель • Евро-6', 'Страховка на 143 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 6.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace diesel fuel filter & inspect 6-MT gearbox oil', de: 'Dieselfilter wechseln & 6-Gang-Getriebeöl prüfen', ru: 'Замена топливного фильтра и проверка масла в 6-МКПП' }, cost: '€140–220' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect harmonic crank pulley & clean EGR cooler/valve', de: 'Kurbelwellen-Riemenscheibe prüfen & AGR-Ventil reinigen', ru: 'Проверка демпферного шкива коленвала и чистка EGR' }, cost: '€200–320' }
              ],
              critical: [
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'Rear-mounted timing chain kit (BMW N47-derived 1WW/2WW architecture)', de: 'Hinten liegender Steuerkettensatz (BMW-N47-Basis 1WW/2WW)', ru: 'Замена задней цепи ГРМ (архитектура BMW N47 — 1WW/2WW)' }, cost: '€1,400–2,100', risk: { en: 'Scraping/rattling chain at firewall can snap and destroy valves', de: 'Schleifende Kette an der Spritzwand kann reißen — kapitaler Motorschaden', ru: 'Шуршащая цепь у моторного щита может оборваться и погнуть клапаны' }, damage: '€4,000–6,000' },
                { when: { en: '140,000–200,000 km', de: '140.000–200.000 km', ru: '140 000–200 000 км' }, action: { en: 'Dual-mass flywheel + clutch & T27 EPB parking brake actuator', de: 'ZMS + Kupplung & T27-EPB-Feststellbremsmodul', ru: 'Двухмассовый маховик + сцепление и блок EPB' }, cost: '€950–1,450', risk: { en: 'Heavy idle vibration or jammed electric parking brake', de: 'Starkes Leerlauf-Rasseln oder blockierte Handbremse', ru: 'Сильная вибрация на холостых или отказ электроручника' }, damage: '€1,800–2,400' }
              ]
            },
            badges: {
              en: ['Rear Timing Chain = Costly If Neglected', 'Flywheel & Filter Care'],
              de: ['Hintere Steuerkette teuer bei Vernachlässigung', 'Schwungrad & Filter pflegen'],
              ru: ['Цепь сзади дорога при запуске', 'Уход за маховиком и фильтром']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Youngest Avensis Holds Value Best', 'Euro 6 Future-Proof'],
              de: ['Jüngster Avensis behält Wert am besten', 'Euro 6 zukunftssicher'],
              ru: ['Самый свежий Avensis держит цену', 'Евро-6 безопаснее по запретам']
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
            estUsedPrice: '€7,600',
            specOverrides: { sprint0100: '9.8 s', topSpeed: '205 km/h', realWorldFuel: '7.3 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.9,
                badges: {
                  en: ['0–100 km/h: 9.8 s (6-AT)', '205 km/h Top Speed'],
                  de: ['0–100 km/h: 9,8 s (6-AT)', '205 km/h Spitze'],
                  ru: ['0–100 км/ч: 9,8 s (6-AT)', 'Макс. 205 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.3,
                badges: {
                  en: ['7.3 L/100km (6-AT)'],
                  de: ['7,3 L/100km (6-AT)'],
                  ru: ['7,3 L/100km (6-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'avensis22HeadGasket',
            'avensisCalmHandling',
            'avensisDatedTech'
          ]
        },
        dossierGroup: 'diesel-conv-auto',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 2.2 D-4D 150',
        fullName: '2011 Toyota Avensis 2.2 D-4D 150',
        engineBadge: '2.2L D-4D • 150 HP',
        engineSubLabel: {
          en: '2.2L D-4D Chain Turbo-Diesel (12/2008–03/2015) • 6-MT / Opt. 6-AT • 340 Nm • FWD',
          de: '2.2L D-4D Ketten-Turbodiesel (12/2008–03/2015) • 6-Gang / Opt. 6-AT • 340 Nm • FWD',
          ru: '2.2L D-4D цепной турбодизель (12/2008–03/2015) • 6-МКПП / Опц. 6-АКПП • 340 Н·м • FWD'
        },
        rarityLabel: {
          en: '2.2 TORQUE TOURER',
          de: '2.2-DREHMOMENT-TOURER',
          ru: 'ТЯГОВИТЫЙ 2.2'
        },
        originalMsrp: {
          en: '€31,200 New',
          de: '31.200 € Neu',
          ru: '€31 200 новый'
        },
        estUsedPrice: '€6,700',
        perkLabel: {
          en: '✦ 340 Nm Effortless Pull • 6-AT Option • 1,800 kg Towing • 9.5s 0–100',
          de: '✦ 340 Nm müheloser Zug • 6-AT wählbar • 1.800 kg Anhängelast • 9,5s auf 100',
          ru: '✦ Тяга 340 Н·м • Опция 6-АКПП • Прицеп 1 800 кг • 9,5 с до 100'
        },
        remarkablePositives: {
          en: [
            '340 NM EFFORTLESS TORQUE',
            '1,800 KG BRAKED TOWING',
            'AVAILABLE 6-SPEED AUTOMATIC',
            'RELAXED LONG-DISTANCE CRUISER'
          ],
          de: [
            'MÜHELOSE 340 NM DREHMOMENT',
            '1.800 KG ANHÄNGELAST',
            'WAHLWEISE 6-STUFEN-AUTOMATIK',
            'ENTSPANNTER LANGSTRECKEN-GLEITER'
          ],
          ru: [
            'ТЯГА 340 Н·М БЕЗ УСИЛИЙ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'ДОСТУПНА 6-АКПП',
            'СПОКОЙНЫЙ ТРАССОВЫЙ КРЕЙСЕР'
          ]
        },
        notableNegatives: {
          en: [
            'HEAD GASKET SEEPAGE KNOWN (EARLY CARS)',
            'HIGHER 2.2L TAX & REAL 6.6 L/100KM',
            'DPF & EGR DISLIKE CITY TRIPS'
          ],
          de: [
            'KOPFDICHTUNGS-PROBLEM BEKANNT (FRÜHE AUTOS)',
            'HÖHERE 2.2L-STEUER & 6,6 L/100KM REAL',
            'DPF & AGR MÖGEN KEINE STADTFAHRTEN'
          ],
          ru: [
            'ИЗВЕСТНА ТЕЧЬ ПРОКЛАДКИ ГБЦ (РАННИЕ)',
            'ВЫШЕ НАЛОГ 2,2 Л И РАСХОД 6,6 Л/100 КМ',
            'DPF И ЕГР НЕ ЛЮБЯТ ГОРОД'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 7.8,
          spacePracticality: 8.6,
          performanceDynamics: 7.8,
          runningCostsTco: 6.8
        },
        specOverrides: {
          engineName: { en: '2.2L I4 D-4D 150 (Chain)', de: '2.2L Reihenvierzylinder 150 PS', ru: '2.2L R4 D-4D 150 (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@torqueConv', towingBraked: '1,800 kg',
          sprint0100: '9.5 s', topSpeed: '205 km/h', peakTorque: '340 Nm @ 1,400 rpm',
          passingPunch: { en: 'Strong 340 Nm Tow Torque', de: 'Kräftige 340 Nm Zugkraft', ru: 'Мощная тяга 340 Н·м' },
          realWorldFuel: '6.6 L/100km', tankRange: '60 L (~910 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierModHigh', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 5.5,
            badges: {
              en: ['Strong 2.2 Chain Diesel', 'Head Seal History Critical'],
              de: ['Starker 2.2-Kettendiesel', 'Kopfdichtungs-Historie kritisch'],
              ru: ['Сильный цепной дизель 2.2', 'История ГБЦ критична']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2AD-FTV · 2,231 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Available With Aisin 6-AT', de: 'Reihenvierzylinder Alu-Diesel · Mit robuster Aisin-6-AT', ru: 'Рядный 4-цил. дизель · Доступен с 6-АКПП Aisin' } }], note: { en: 'Strong 1,800 kg towing cruiser and the only Avensis diesel with a proper 6-speed torque-converter automatic; watch DPF and coolant level.', de: 'Starker 1.800-kg-Zugwagen und einziger Diesel mit klassischer 6-Gang-Automatik; DPF und Kühlwasserstand im Blick behalten.', ru: 'Отличный тягач (1 800 кг) и редкий дизель с классическим 6-АКПП Aisin; контролируйте DPF и уровень антифриза.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Torquey 2.2L D-4D — Watch Pre-2011 Head Gasket Seepage & DPF Soot',
                lowScoreReasons: [
                  'Head Gasket & Coolant Blow-By (Pre-2011): Early 2.2 D-4D builds can suffer carbon-induced cylinder-head gasket seepage, pushing coolant out under motorway load (€1,600–€2,500).',
                  'DPF & EGR Soot Buildup: Short urban commutes rapidly clog the particulate filter and EGR cooler, triggering expensive limp-mode repairs.'
                ],
                strengths: [
                  'Strong 340 Nm torque and timing-chain layout suit long motorway and towing duties.',
                  'Can reach 220,000–260,000+ km on post-2011 units when driven on highways with regular oil changes.'
                ],
                watchouts: [
                  'Use low-ash synthetic diesel oil every 10,000–15,000 km to limit carbon buildup.',
                  'Inspect injectors and water pump for weeping past 150,000 km.'
                ],
                beforeYouBuy: [
                  'Check the coolant expansion tank and hoses for dried pink spray marks or low coolant level.',
                  'Verify consistent highway mileage so the DPF and EGR stayed clean.',
                  'Test brisk acceleration in 3rd/4th gear with zero warning lights or soot smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash diesel oil + fuel filter; check the coolant level',
                    cost: '€190–290',
                    ifIgnored: 'Slow coolant loss from the engine head seal goes unnoticed',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Clean EGR valve & intake, check the particulate filter; renew 6-yr belts/hoses',
                    cost: '€320–520',
                    ifIgnored: 'Soot chokes the EGR valve & old rubber cracks with age',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'red',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Check the engine head seal & replace the water pump (early signs: coolant loss, white smoke)',
                    cost: '€400–700',
                    ifIgnored: 'A failed head gasket overheats the engine; many early cars needed one (seals age too)',
                    damageCost: '€2,400–4,000'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel + clutch (manual) or service the 6-speed auto oil; clean the filter',
                    cost: '€880–1,500',
                    ifIgnored: 'A worn flywheel damages the gearbox & stale auto oil makes shifts rough',
                    damageCost: '€1,900–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew injector seals, turbo hoses & glow plugs',
                    cost: '€480–850',
                    ifIgnored: 'Leaking seals blacken the oil & split hoses cause reduced-power mode',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check timing chain rattle, engine mounts & rear suspension rubber',
                    cost: '€500–860',
                    ifIgnored: 'A loose chain rattles on cold start & aged rubber adds vibration',
                    damageCost: '€1,300–2,100'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger 2.2L D-4D — auf Kopfdichtung (vor 2011) & DPF-Belastung achten',
                lowScoreReasons: [
                  'Zylinderkopfdichtungs-Schwitzen (vor 2011): Frühe 2.2 D-4D neigen durch Verkokung zu undichten Kopfdichtungen mit Kühlwasserverlust unter Autobahndruck (1.600–2.500 €).',
                  'DPF- & AGR-Verkokung: Häufige Stadtfahrten setzen Partikelfilter und AGR-Kühler schnell zu.'
                ],
                strengths: [
                  'Kräftige 340 Nm Drehmoment und Steuerkette passen gut zu langen Autobahnetappen.',
                  'Erreicht ab Baujahr 2011 auf Langstrecken bei regelmäßiger Wartung 220.000–260.000+ km.'
                ],
                watchouts: [
                  'Aschearmes Synthetiköl alle 10.000–15.000 km wechseln, um Verkokung zu bremsen.',
                  'Injektoren und Wasserpumpe ab 150.000 km auf Undichtigkeit prüfen.'
                ],
                beforeYouBuy: [
                  'Kühlmittelbehälter und Schläuche auf rosa Trockenspuren oder niedrigen Stand kontrollieren.',
                  'Langstrecken-Historie erfragen, damit DPF und AGR frei arbeiten konnten.',
                  'Im 3. und 4. Gang kräftig beschleunigen — ohne Warnleuchten oder dunkle Rußfahnen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich aschearmes Dieselöl + Dieselfilter; Kühlmittelstand prüfen',
                    cost: '190–290 €',
                    ifIgnored: 'Schleichender Kühlmittelverlust an der Kopfdichtung bleibt unbemerkt',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'AGR-Ventil & Ansaugtrakt reinigen, Partikelfilter prüfen; 6-J.-Riemen/Schläuche erneuern',
                    cost: '320–520 €',
                    ifIgnored: 'Ruß verstopft das AGR-Ventil & altes Gummi reißt altersbedingt',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Kopfdichtung prüfen & Wasserpumpe tauschen (Frühwarnung: Kühlmittelverlust, weißer Rauch)',
                    cost: '400–700 €',
                    ifIgnored: 'Defekte Kopfdichtung überhitzt den Motor; viele frühe Autos brauchten eine neue (Dichtungen altern auch)',
                    damageCost: '2.400–4.000 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad + Kupplung (Schalter) oder 6-AT-Öl wechseln; Filter reinigen',
                    cost: '880–1.500 €',
                    ifIgnored: 'Verschlissenes Schwungrad schädigt das Getriebe & altes AT-Öl schaltet ruppig',
                    damageCost: '1.900–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Injektor-Dichtungen, Ladeluftschläuche & Glühkerzen erneuern',
                    cost: '480–850 €',
                    ifIgnored: 'Undichte Dichtungen verrußen das Öl & rissige Schläuche lösen den Notlauf aus',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette abhören, Motorlager & Hinterachs-Gummis prüfen',
                    cost: '500–860 €',
                    ifIgnored: 'Lockere Kette rasselt beim Kaltstart & gealtertes Gummi sorgt für Vibrationen',
                    damageCost: '1.300–2.100 €'
                  }
                ]
              },
              ru: {
                headline: 'Тяговитый 2.2 D-4D — следите за прокладкой ГБЦ (до 2011 г.) и DPF',
                lowScoreReasons: [
                  'Прокладка ГБЦ (до 2011 г.): На ранних 2.2 D-4D нагар нередко приводит к пробою прокладки ГБЦ и выбросу антифриза под нагрузкой (€1 600–2 500).',
                  'Засорение DPF и EGR: Короткие городские поездки быстро забивают сажевый фильтр и теплообменник EGR.'
                ],
                strengths: [
                  'Уверенная тяга 340 Н·м и цепь ГРМ хорошо подходят для трассы и буксировки.',
                  'Машины после 2011 г. на трассовых пробегах спокойно ходят 220 000–260 000+ км.'
                ],
                watchouts: [
                  'Меняйте малозольное масло каждые 10–15 тыс. км для снижения нагара.',
                  'После 150 000 км проверяйте помпу и форсунки на подтёки.'
                ],
                beforeYouBuy: [
                  'Проверить бачок антифриза и патрубки на розовые следы выброса жидкости.',
                  'Убедиться в регулярной езде по трассе для чистоты DPF и EGR.',
                  'Проверить уверенный разгон на 3–4 передаче без ошибок и копоти.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно малозольное масло + топливный фильтр; проверять уровень антифриза',
                    cost: '€190–290',
                    ifIgnored: 'Медленная потеря антифриза из-под ГБЦ остаётся незамеченной',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Почистить ЕГР и впуск, проверить сажевый фильтр; ремни/шланги (6 лет)',
                    cost: '€320–520',
                    ifIgnored: 'Сажа забивает ЕГР, а старая резина трескается от возраста',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'red',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Проверить прокладку ГБЦ и заменить помпу (ранние признаки: потеря антифриза, белый дым)',
                    cost: '€400–700',
                    ifIgnored: 'Пробитая прокладка перегревает мотор; многим ранним машинам её меняли (уплотнения стареют)',
                    damageCost: '€2 400–4 000'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить маховик + сцепление (МКПП) или масло 6-АКПП; промыть фильтр',
                    cost: '€880–1 500',
                    ifIgnored: 'Изношенный маховик убивает коробку, а старое масло в автомате даёт рывки',
                    damageCost: '€1 900–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить уплотнения форсунок, шланги наддува и свечи накала',
                    cost: '€480–850',
                    ifIgnored: 'Течь уплотнений чернит масло, а лопнувшие шланги вводят аварийный режим',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить цепь ГРМ, опоры двигателя и резину задней подвески',
                    cost: '€500–860',
                    ifIgnored: 'Растянутая цепь шумит на холодную, а старая резина даёт вибрации',
                    damageCost: '€1 300–2 100'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 6.5,
            badges: {
              en: ['6-MT Or 6-Speed Auto', 'Flywheel Wear Item'],
              de: ['6-Gang oder 6-Stufen-Automatik', 'Schwungrad Verschleißteil'],
              ru: ['6-МКПП или 6-АКПП', 'Маховик расходник']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.1,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['530 kg Payload', '1,800 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.5,
            badges: {
              en: ['0–100 km/h: 9.5 s', '205 km/h Top Speed'],
              de: ['0–100 km/h: 9,5 s', '205 km/h Spitze'],
              ru: ['0–100 km/h: 9.5 с', 'Макс. 205 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.2,
            badges: {
              en: ['340 Nm', 'Pull From 1,400 rpm'],
              de: ['340 Nm', 'Zug ab 1.400 U/min'],
              ru: ['340 Н·м', 'Тяга с 1 400 об/мин']
            }
          },
          handlingAgility: {
            score: 6.2,
            badges: {
              en: ['Stable Highway Poise', 'Heavy Diesel Nose Pushes In Corners'],
              de: ['Stabiler Geradeauslauf', 'Schwere Dieselnase schiebt über die Vorderräder'],
              ru: ['Устойчив на трассе', 'Тяжёлый дизельный нос сносит в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 7.0,
            badges: {
              en: ['6.6 L/100km', '149–159 g/km CO2 (Euro 5)'],
              de: ['6,6 L/100km', '149–159 g/km CO2 (Euro 5)'],
              ru: ['6,6 л/100 км', '149–159 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 6.2,
            badges: {
              en: ['2.2L Diesel Tax • Euro 5', 'Mid-Size 150 HP Insurance Class'],
              de: ['2.2-Diesel-Steuer • Euro 5', 'Mittelklasse-Tarif (150 PS)'],
              ru: ['Налог за 2.2 л дизель • Евро-5', 'Страховка на 150 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Clean EGR valve, replace diesel fuel filter & change gearbox oil', de: 'AGR-Ventil reinigen, Dieselfilter & Getriebeöl wechseln', ru: 'Чистка клапана EGR, замена топливного фильтра и масла в КПП' }, cost: '€200–330' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect glow plugs, auxiliary belt & Denso SCV fuel valve', de: 'Glühkerzen, Keilrippenriemen & Denso-SCV-Ventil prüfen', ru: 'Проверка свечей накала, ремня и клапана SCV Denso' }, cost: '€180–280' }
              ],
              critical: [
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130 000–190 000 км' }, action: { en: 'DPF clogging / 5th injector soot & dual-mass flywheel (6-MT)', de: 'DPF-Beladung / 5. Einspritzdüse & Zweimassenschwungrad (6-Gang)', ru: 'Засорение DPF / 5-й форсунки и двухмассовый маховик (6-МКПП)' }, cost: '€950–1,600', risk: { en: 'Limp mode, high backpressure, and driveline clatter', de: 'Notlauf, hoher Abgasgegendruck und starkes Kupplungsrasseln', ru: 'Аварийный режим, высокое противодавление и стук маховика' }, damage: '€2,000–3,200' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) actuator & 2AD gasket check (2.2L)', de: 'T27-EPB-Stellmodul & 2AD-Kopfdichtungs-Check (bei 2.2L)', ru: 'Блок электроручника EPB и контроль ГБЦ 2AD (на 2.2L)' }, cost: '€550–1,800', risk: { en: 'Jammed EPB or coolant pressurization on high-mileage 2.2 diesels', de: 'Blockierte Feststellbremse oder Kühlwasserverlust beim 2.2-Diesel', ru: 'Заклинивший ручник или газы в антифризе на 2.2 дизеле' }, damage: '€1,500–3,800' }
              ]
            },
            badges: {
              en: ['Head Seal, Flywheel & Filter Costs', 'Heavier Diesel Wear Items'],
              de: ['Kopfdichtung, Schwungrad & Filter kosten', 'Teurere Diesel-Verschleißteile'],
              ru: ['Затраты на ГБЦ, маховик и фильтр', 'Дороже расходники дизеля']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Diesel Buyers Want Service Proof', 'Strong Fleet-Car Demand'],
              de: ['Diesel-Käufer wollen Servicebelege', 'Gefragter Flottenwagen'],
              ru: ['Покупатели дизеля ждут чеков', 'Хороший спрос как у парковых авто']
            }
          }
        }
      },
      {
        id: '2.2-d4d-dcat',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [
          { id: '6-mt-dmf', isDefault: true },
          {
            id: 'aisin-6at',
            estUsedPrice: '€8,600',
            specOverrides: { sprint0100: '8.9 s', topSpeed: '215 km/h', realWorldFuel: '7.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 6.7,
                badges: {
                  en: ['0–100 km/h: 8.9 s (6-AT)', '215 km/h Top Speed'],
                  de: ['0–100 km/h: 8,9 s (6-AT)', '215 km/h Spitze'],
                  ru: ['0–100 км/ч: 8,9 s (6-AT)', 'Макс. 215 km/h']
                }
              },
              efficiencyFuel: {
                score: 5.8,
                badges: {
                  en: ['7.8 L/100km (6-AT)'],
                  de: ['7,8 L/100km (6-AT)'],
                  ru: ['7,8 L/100km (6-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'diesel',
        buyerFitOverrides: {
          skip: [
            'globalDieselShortTripRisk',
            'avensisDcatComplexity',
            'avensisCalmHandling',
            'avensisDatedTech'
          ]
        },
        dossierGroup: 'diesel-conv-auto',
        isDefault: false,
        fuelType: 'diesel',
        hp: 177,
        drivetrain: 'FWD',
        shortTitle: 'AVENSIS 2.2 D-CAT 177',
        fullName: '2011 Toyota Avensis 2.2 D-4D D-CAT 177',
        engineBadge: '2.2L D-4D D-CAT • 177 HP',
        engineSubLabel: {
          en: '2.2L D-4D D-CAT Chain Turbo-Diesel (12/2008–03/2015) • 6-MT / 6-AT • 400 Nm • FWD',
          de: '2.2L D-4D D-CAT Ketten-Turbodiesel (12/2008–03/2015) • 6-Gang / 6-AT • 400 Nm • FWD',
          ru: '2.2L D-4D D-CAT цепной турбодизель (12/2008–03/2015) • 6-МКПП / 6-АКПП • 400 Н·м • FWD'
        },
        rarityLabel: {
          en: 'D-CAT FLAGSHIP',
          de: 'D-CAT-TOPMODELL',
          ru: 'ФЛАГМАН D-CAT'
        },
        originalMsrp: {
          en: '€34,500 New',
          de: '34.500 € Neu',
          ru: '€34 500 новый'
        },
        estUsedPrice: '€7,800',
        perkLabel: {
          en: '✦ Massive 400 Nm (8.4s 0–100) • 220 km/h Top Speed • 1,800 kg Towing • Top Trim',
          de: '✦ Gewaltige 400 Nm (8,4s auf 100) • 220 km/h Spitze • 1.800 kg Anhängelast • Top-Ausstattung',
          ru: '✦ Мощнейшая тяга 400 Н·м (8,4 с до 100) • 220 км/ч • Прицеп 1 800 кг • Топ-комплектации'
        },
        remarkablePositives: {
          en: [
            '400 NM • 8.4S 0–100 KM/H',
            '220 KM/H EFFORTLESS TOP SPEED',
            '1,800 KG BRAKED TOWING',
            'RICH TOP-TRIM EQUIPMENT'
          ],
          de: [
            '400 NM • 8,4S AUF 100 KM/H',
            '220 KM/H MÜHELOSE SPITZE',
            '1.800 KG ANHÄNGELAST',
            'MEIST TOP-AUSSTATTUNG'
          ],
          ru: [
            '400 Н·М • 8,4 С ДО 100 КМ/Ч',
            '220 КМ/Ч БЕЗ НАТУГИ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'БОГАТАЯ ТОП-КОМПЛЕКТАЦИЯ'
          ]
        },
        notableNegatives: {
          en: [
            'D-CAT EXHAUST INJECTOR CAN CLOG',
            'HIGHEST DIESEL REPAIR RISK',
            'HIGHER 177 HP TAX & INSURANCE'
          ],
          de: [
            'D-CAT-ABGASDÜSE KANN VERSTOPFEN',
            'HÖCHSTES DIESEL-REPARATURRISIKO',
            'HÖHERE 177-PS-STEUER & VERSICHERUNG'
          ],
          ru: [
            'ФОРСУНКА D-CAT МОЖЕТ ЗАБИТЬСЯ',
            'САМЫЙ ВЫСОКИЙ РИСК РЕМОНТОВ',
            'ДОРОЖЕ НАЛОГ И СТРАХОВКА 177 Л.С.'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.8,
          comfortCabin: 7.8,
          spacePracticality: 8.6,
          performanceDynamics: 8.2,
          runningCostsTco: 6.5
        },
        specOverrides: {
          engineName: { en: '2.2L I4 D-CAT 177 (Chain)', de: '2.2L Reihenvierzylinder D-CAT', ru: '2.2L R4 D-CAT 177 (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf', towingBraked: '1,800 kg',
          sprint0100: '8.4 s', topSpeed: '220 km/h', peakTorque: '400 Nm @ 1,500 rpm',
          passingPunch: { en: 'Massive 400 Nm Surge', de: 'Wuchtiger 400-Nm-Schub', ru: 'Мощнейший рывок 400 Н·м' },
          realWorldFuel: '7.2 L/100km', tankRange: '60 L (~830 km)', euroNorm: 'Euro 5 (D-CAT)', taxInsurance: '@tierHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 4.4,
            badges: {
              en: ['Strong 2.2 + D-CAT System', 'Exhaust Injector & Head Seal Care'],
              de: ['Starker 2.2 mit D-CAT', 'Abgasdüse & Kopfdichtung pflegen'],
              ru: ['Сильный 2.2 с системой D-CAT', 'Следить за форсункой и ГБЦ']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: '2AD-FHV (D-CAT) · 2,231 cc' }, { k: 'architecture', v: { en: 'Inline-4 High-Output Diesel · Piezo Injectors + 5th Exhaust Injector', de: 'Reihenvierzylinder Top-Diesel · Piezo-Injektoren + 5. Düse', ru: 'Рядный 4-цил. форсированный дизель · Пьезофорсунки + D-CAT' } }], note: { en: 'Fastest Avensis ever built (8.4 s, 400 Nm), but also the costliest to maintain due to D-CAT 5th-injector soot, piezo injectors, and head-gasket risk.', de: 'Schnellster Avensis seiner Zeit (8,4 s, 400 Nm), aber am teuersten im Unterhalt durch D-CAT-5.-Düse, Piezo-Injektoren und ZKD-Risiko.', ru: 'Самый быстрый Avensis (8,4 с, 400 Н·м), но самый дорогой в ремонте из-за системы D-CAT, пьезофорсунок и риска по ГБЦ.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Complex 177 HP D-CAT Diesel — Expensive Piezo, DPNR & Head Gasket Risks',
                lowScoreReasons: [
                  'Cylinder Head Gasket Blow-By: High cylinder pressure and carbon buildup on the 2AD-FHV alloy block can warp or blow the head gasket (€1,800–€3,000 repair).',
                  'Expensive Piezo Injectors, 5th Injector & DPNR Catalyst: Unrepairable Denso piezo injectors and clogged D-CAT exhaust catalysts cost €1,500–€2,500+ to fix.'
                ],
                strengths: [
                  'Effortless 400 Nm highway overtaking punch with timing-chain drive.',
                  'Can reach 200,000–240,000 km on pure motorway commutes once head gasket and D-CAT system are healthy.'
                ],
                watchouts: [
                  'EGR cooler and 5th exhaust fuel nozzle clog quickly if driven in city traffic.',
                  'Higher fuel consumption and running costs in mixed and urban driving.'
                ],
                beforeYouBuy: [
                  'Inspect the white coolant bottle and hoses for dried pink spray marks from head-gasket pressure.',
                  'Check for white smoke on acceleration and verify pure highway usage.',
                  'Ensure zero dashboard warnings and smooth cold start with no injector knock.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash diesel oil + fuel filter; check that the exhaust filter regenerates normally',
                    cost: '€200–300',
                    ifIgnored: 'A clogged exhaust injector over-fuels the filter & thins the oil',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Service the D-CAT exhaust injector & clean the particulate filter + EGR',
                    cost: '€340–560',
                    ifIgnored: 'A clogged extra injector over-fuels the exhaust & ruins the filter',
                    damageCost: '€2,000–3,400'
                  },
                  {
                    tier: 'red',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Check the engine head seal, water pump & thermostat',
                    cost: '€420–720',
                    ifIgnored: 'A failed head gasket overheats the engine under 400 Nm of load (seals age too)',
                    damageCost: '€2,600–4,300'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel + clutch / 6-speed auto oil service; inspect the turbo',
                    cost: '€900–1,550',
                    ifIgnored: 'A worn flywheel & stale auto oil damage the gearbox under heavy torque',
                    damageCost: '€2,100–3,500'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew turbo hoses, injector seals & glow plugs; check the D-CAT filter',
                    cost: '€520–900',
                    ifIgnored: 'Split hoses and leaking seals cause reduced-power mode and black smoke',
                    damageCost: '€1,700–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check timing chain rattle, engine mounts & suspension bushings',
                    cost: '€520–880',
                    ifIgnored: 'A loose chain rattles & aged mounts add vibration (rubber ages with the years)',
                    damageCost: '€1,300–2,100'
                  }
                ]
              },
              de: {
                headline: 'Komplexer 177-PS-D-CAT — teure Risiken bei Kopfdichtung, Piezo-Düsen & DPNR',
                lowScoreReasons: [
                  'Zylinderkopfdichtungs-Schäden: Hoher Verbrennungsdruck und Verkokung führen beim 2AD-FHV-Alublock häufig zu schleichendem Kühlwasserverlust oder durchgebrannter Kopfdichtung (1.800–3.000 €).',
                  'Teure Piezo-Injektoren & DPNR-Katalysator: Nicht überholbare Denso-Piezo-Injektoren, 5. Abgasdüse und der D-CAT-Speicherkat verursachen schnell 1.500–2.500 €+ Kosten.'
                ],
                strengths: [
                  'Souveräne 400 Nm Drehmoment für müheloses Autobahntempo mit Steuerkette.',
                  'Erreicht 200.000–240.000 km auf reinen Langstrecken bei intakter Kopfdichtung und sauberem D-CAT.'
                ],
                watchouts: [
                  'AGR-Kühler und 5. Einspritzdüse setzen sich im Stadtverkehr rasch zu.',
                  'Spürbar höherer Verbrauch und Unterhalt im Stadt- und Mischbetrieb.'
                ],
                beforeYouBuy: [
                  'Kühlmittelbehälter und Schläuche auf getrocknete rosa Spritzspuren durch Überdruck prüfen.',
                  'Auf weißen Rauch beim Beschleunigen achten und reine Langstreckennutzung erfragen.',
                  'Kalten Motor starten — sauberer Lauf ohne Injektor-Nageln und ohne Warnleuchten ist Pflicht.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich aschearmes Dieselöl + Dieselfilter; prüfen, ob der Filter normal regeneriert',
                    cost: '200–300 €',
                    ifIgnored: 'Eine zugesetzte Abgasdüse überfettet den Filter & verdünnt das Öl',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'D-CAT-Abgasdüse warten & Partikelfilter + AGR reinigen',
                    cost: '340–560 €',
                    ifIgnored: 'Eine zugesetzte Zusatzdüse überfettet das Abgas & ruiniert den Filter',
                    damageCost: '2.000–3.400 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Kopfdichtung, Wasserpumpe & Thermostat prüfen',
                    cost: '420–720 €',
                    ifIgnored: 'Defekte Kopfdichtung überhitzt den Motor unter 400 Nm Last (Dichtungen altern auch)',
                    damageCost: '2.600–4.300 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad + Kupplung / 6-AT-Ölservice; Turbolader prüfen',
                    cost: '900–1.550 €',
                    ifIgnored: 'Verschlissenes Schwungrad & altes AT-Öl schädigen das Getriebe unter hohem Drehmoment',
                    damageCost: '2.100–3.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Ladeluftschläuche, Injektor-Dichtungen & Glühkerzen erneuern; D-CAT-Filter prüfen',
                    cost: '520–900 €',
                    ifIgnored: 'Rissige Schläuche und undichte Dichtungen lösen Notlauf und schwarzen Rauch aus',
                    damageCost: '1.700–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette abhören, Motorlager & Fahrwerksbuchsen prüfen',
                    cost: '520–880 €',
                    ifIgnored: 'Lockere Kette rasselt & gealterte Lager vibrieren (Gummi altert zeitlich)',
                    damageCost: '1.300–2.100 €'
                  }
                ]
              },
              ru: {
                headline: 'Сложный дизель 177 л.с. D-CAT — риски прокладки ГБЦ, пьезофорсунок и DPNR',
                lowScoreReasons: [
                  'Пробой прокладки ГБЦ: Высокое давление и нагар на алюминиевом блоке 2AD-FHV нередко вызывают выдувание антифриза через прокладку ГБЦ (ремонт €1 800–3 000).',
                  'Дорогие пьезофорсунки и катализатор DPNR: Неремонтопригодные пьезофорсунки Denso, 5-я форсунка и забитый фильтр D-CAT обходятся в €1 500–2 500+.'
                ],
                strengths: [
                  'Мощные 400 Н·м тяги и цепной привод ГРМ для быстрых трассовых обгонов.',
                  'Проходит 200 000–240 000 км при чисто трассовой езде и исправной ГБЦ с системой D-CAT.'
                ],
                watchouts: [
                  'Теплообменник EGR и 5-я форсунка прожига быстро забиваются в городе.',
                  'Повышенный расход топлива и стоимость обслуживания в смешанном цикле.'
                ],
                beforeYouBuy: [
                  'Осмотреть расширительный бачок и патрубки на розовые подтёки от прорыва газов в охлаждение.',
                  'Проверить отсутствие белого дыма под нагрузкой и убедиться в трассовой истории.',
                  'Проверить ровный холодный пуск без стука форсунок и ошибок.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно малозольное масло + топливный фильтр; проверять нормальную регенерацию фильтра',
                    cost: '€200–300',
                    ifIgnored: 'Забитая форсунка в выхлопе переливает топливо в фильтр и разжижает масло',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Обслужить форсунку D-CAT, промыть сажевый фильтр и ЕГР',
                    cost: '€340–560',
                    ifIgnored: 'Забитая доп. форсунка переливает выхлоп и убивает фильтр',
                    damageCost: '€2 000–3 400'
                  },
                  {
                    tier: 'red',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Проверить прокладку ГБЦ, помпу и термостат',
                    cost: '€420–720',
                    ifIgnored: 'Пробитая прокладка перегревает мотор под нагрузкой 400 Н·м (уплотнения стареют)',
                    damageCost: '€2 600–4 300'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить маховик + сцепление / масло 6-АКПП; осмотреть турбину',
                    cost: '€900–1 550',
                    ifIgnored: 'Изношенный маховик и старое масло АКПП вредят коробке под большим моментом',
                    damageCost: '€2 100–3 500'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить шланги наддува, уплотнения форсунок и свечи накала; проверить фильтр D-CAT',
                    cost: '€520–900',
                    ifIgnored: 'Лопнувшие шланги и течь уплотнений дают аварийный режим и чёрный дым',
                    damageCost: '€1 700–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить цепь ГРМ, опоры двигателя и сайлентблоки',
                    cost: '€520–880',
                    ifIgnored: 'Растянутая цепь шумит, а старые опоры вибрируют (резина стареет по годам)',
                    damageCost: '€1 300–2 100'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 5.8,
            badges: {
              en: ['6-MT Or 6-Speed Auto', '400 Nm Tests Flywheel'],
              de: ['6-Gang oder 6-Stufen-Automatik', '400 Nm fordern das Schwungrad'],
              ru: ['6-МКПП или 6-АКПП', '400 Н·м нагружают маховик']
            }
          },
          buildQualityRust: {
            score: 8.5,
            badges: {
              en: ['Solid Toyota Build • Low TÜV Defects', 'Check Rear Wheel-Arch Lips'],
              de: ['Solide Toyota-Verarbeitung • Wenig TÜV-Mängel', 'Hintere Radlaufkanten prüfen'],
              ru: ['Крепкая сборка Toyota • Мало замечаний TÜV', 'Проверить кромки задних арок']
            }
          },
          electronicsReliability: {
            score: 9.1,
            badges: {
              en: ['Dependable Toyota Electrics', 'Simple Switchgear • Few Faults'],
              de: ['Zuverlässige Toyota-Elektrik', 'Schlichte Bedienung • Wenige Defekte'],
              ru: ['Надёжная электрика Toyota', 'Простые блоки • Мало отказов']
            }
          },
          rideNoiseComfort: {
            score: 7.9,
            badges: {
              en: ['Soft Comfort-Tuned Ride', 'Quiet Cabin On The Motorway'],
              de: ['Weiches Komfort-Fahrwerk', 'Leiser Innenraum auf der Autobahn'],
              ru: ['Мягкая комфортная подвеска', 'Тихий салон на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.0,
            badges: {
              en: ['Soft-Touch Dash • Clear Controls', 'Dated Infotainment Screen'],
              de: ['Weiche Armaturen • Klare Bedienung', 'Veraltetes Infotainment'],
              ru: ['Мягкая панель • Понятное управление', 'Устаревшая мультимедиа']
            }
          },
          visibilityManeuverability: {
            score: 6.9,
            badges: {
              en: ['4.75 m Sedan • 10.9 m Turning Circle', 'Parking Sensors Helpful'],
              de: ['4,75 m Limousine • 10,9 m Wendekreis', 'Parksensoren sind hilfreich'],
              ru: ['Седан 4,75 м • Разворот 10,9 м', 'Парктроник пригодится']
            }
          },
          safetyProtection: {
            score: 8.2,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '7 Airbags + Knee + VSC+'],
              de: ['Euro NCAP 5★ (2009)', '7 Airbags inkl. Knie + VSC+'],
              ru: ['Euro NCAP 5★ (2009)', '7 подушек (вкл. коленную) + VSC+']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.7,
            badges: {
              en: ['Roomy Rear Legroom', 'Wide-Opening Doors'],
              de: ['Viel Beinfreiheit hinten', 'Weit öffnende Türen'],
              ru: ['Просторный второй ряд', 'Широко открывающиеся двери']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['509L Sedan Boot', 'Split-Folding Rear Seats'],
              de: ['509L Kofferraum', 'Geteilt umklappbare Rückbank'],
              ru: ['Багажник седана 509 л', 'Раздельно складывающийся диван']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['530 kg Payload', '1,800 kg Braked Towing'],
              de: ['530 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 530 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.4 s', '220 km/h Top Speed'],
              de: ['0–100 km/h: 8,4 s', '220 km/h Spitze'],
              ru: ['0–100 km/h: 8.4 с', 'Макс. 220 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.2,
            badges: {
              en: ['400 Nm', 'Massive Pull From 1,500 rpm'],
              de: ['400 Nm', 'Gewaltiger Zug ab 1.500 U/min'],
              ru: ['400 Н·м', 'Мощная тяга с 1 500 об/мин']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Stable Highway Poise', 'Heavy Diesel Nose Pushes In Corners'],
              de: ['Stabiler Geradeauslauf', 'Schwere Dieselnase schiebt über die Vorderräder'],
              ru: ['Устойчив на трассе', 'Тяжёлый дизельный нос сносит в поворотах']
            }
          },
          brakingPerformance: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 36.9 m', '295 mm Discs • Steady Stopper'],
              de: ['100–0 km/h: 36,9 m', '295 mm Scheiben • Solide Bremsleistung'],
              ru: ['100–0 км/ч: 36,9 м', '295 мм диски • Стабильное замедление']
            }
          },
          efficiencyFuel: {
            score: 6.4,
            badges: {
              en: ['7.2 L/100km', '156–165 g/km CO2 (Euro 5)'],
              de: ['7,2 L/100km', '156–165 g/km CO2 (Euro 5)'],
              ru: ['7,2 л/100 км', '156–165 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 5.5,
            badges: {
              en: ['2.2L Diesel Tax • Euro 5', 'Mid-Size 177 HP Insurance Class'],
              de: ['2.2-Diesel-Steuer • Euro 5', 'Mittelklasse-Tarif (177 PS)'],
              ru: ['Налог за 2.2 л дизель • Евро-5', 'Страховка на 177 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Clean EGR valve, replace diesel fuel filter & change gearbox oil', de: 'AGR-Ventil reinigen, Dieselfilter & Getriebeöl wechseln', ru: 'Чистка клапана EGR, замена топливного фильтра и масла в КПП' }, cost: '€200–330' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect glow plugs, auxiliary belt & Denso SCV fuel valve', de: 'Glühkerzen, Keilrippenriemen & Denso-SCV-Ventil prüfen', ru: 'Проверка свечей накала, ремня и клапана SCV Denso' }, cost: '€180–280' }
              ],
              critical: [
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130 000–190 000 км' }, action: { en: 'DPF clogging / 5th injector soot & dual-mass flywheel (6-MT)', de: 'DPF-Beladung / 5. Einspritzdüse & Zweimassenschwungrad (6-Gang)', ru: 'Засорение DPF / 5-й форсунки и двухмассовый маховик (6-МКПП)' }, cost: '€950–1,600', risk: { en: 'Limp mode, high backpressure, and driveline clatter', de: 'Notlauf, hoher Abgasgegendruck und starkes Kupplungsrasseln', ru: 'Аварийный режим, высокое противодавление и стук маховика' }, damage: '€2,000–3,200' },
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'T27 electronic parking brake (EPB) actuator & 2AD gasket check (2.2L)', de: 'T27-EPB-Stellmodul & 2AD-Kopfdichtungs-Check (bei 2.2L)', ru: 'Блок электроручника EPB и контроль ГБЦ 2AD (на 2.2L)' }, cost: '€550–1,800', risk: { en: 'Jammed EPB or coolant pressurization on high-mileage 2.2 diesels', de: 'Blockierte Feststellbremse oder Kühlwasserverlust beim 2.2-Diesel', ru: 'Заклинивший ручник или газы в антифризе на 2.2 дизеле' }, damage: '€1,500–3,800' }
              ]
            },
            badges: {
              en: ['D-CAT Injector, Filter & Head Seal', 'Highest Diesel Repair Risk'],
              de: ['D-CAT-Düse, Filter & Kopfdichtung', 'Höchstes Diesel-Reparaturrisiko'],
              ru: ['Форсунка D-CAT, фильтр и ГБЦ', 'Самый высокий риск ремонтов']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Diesel Buyers Want Service Proof', 'Strong Fleet-Car Demand'],
              de: ['Diesel-Käufer wollen Servicebelege', 'Gefragter Flottenwagen'],
              ru: ['Покупатели дизеля ждут чеков', 'Хороший спрос как у парковых авто']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Granite Grey', code: '1G3', hex: '#545b63', glow: 'rgba(84, 91, 99, 0.18)' },
    { name: 'Silver Metallic', code: '1F7', hex: '#b6bec8', glow: 'rgba(182, 190, 200, 0.16)' },
    { name: 'Night Sky Black', code: '209', hex: '#181b20', glow: 'rgba(66, 76, 92, 0.18)' },
    { name: 'Pure White', code: '040', hex: '#f2f4f7', glow: 'rgba(242, 244, 247, 0.16)' },
    { name: 'Pearl White', code: '070', hex: '#eceef2', glow: 'rgba(236, 238, 242, 0.16)' },
    { name: 'Dark Steel Blue', code: '8T5', hex: '#283c58', glow: 'rgba(40, 60, 88, 0.2)', isDefault: true },
    { name: 'Tokyo Red', code: '3R3', hex: '#a42029', glow: 'rgba(164, 32, 41, 0.2)' },
    { name: 'Champagne Gold', code: '4T8', hex: '#9a8f7a', glow: 'rgba(154, 143, 122, 0.18)' },
    { name: 'Slate Grey', code: '1H2', hex: '#444b53', glow: 'rgba(68, 75, 83, 0.18)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '1.8-valvematic',
    defaultGroupKey: 'petrol-na',
    engineCosts: {
      '1.6-valvematic': { group: 'petrol-na',     avgFuelL100: 7.2, fuelPrice: 1.75, tax: 142, ins: 560, service: 300 },
      '1.8-valvematic': { group: 'petrol-na',     avgFuelL100: 7.4, fuelPrice: 1.75, tax: 158, ins: 600, service: 310 },
      '2.0-valvematic': { group: 'petrol-na',     avgFuelL100: 7.8, fuelPrice: 1.75, tax: 176, ins: 640, service: 320 },
      '1.6-d4d':        { group: 'diesel-bmw',    avgFuelL100: 5.0, fuelPrice: 1.65, tax: 192, ins: 630, service: 380 },
      '2.0-d4d-126':    { group: 'diesel-toyota', avgFuelL100: 5.9, fuelPrice: 1.65, tax: 256, ins: 660, service: 370 },
      '2.0-d4d-124':    { group: 'diesel-toyota', avgFuelL100: 5.7, fuelPrice: 1.65, tax: 244, ins: 650, service: 360 },
      '2.0-d4d-143':    { group: 'diesel-bmw',    avgFuelL100: 5.5, fuelPrice: 1.65, tax: 248, ins: 680, service: 400 },
      '2.2-d4d-150':    { group: 'diesel-22',     avgFuelL100: 6.6, fuelPrice: 1.65, tax: 324, ins: 730, service: 430 },
      '2.2-d4d-dcat':   { group: 'diesel-22',     avgFuelL100: 7.2, fuelPrice: 1.65, tax: 356, ins: 780, service: 470 }
    },
    groups: {
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 5%', note: 'Minimal chassis, emissions & engine defects even at 8–12 years old' },
            { source: 'ADAC Pannenstatistik', value: 'Exceptionally Reliable', note: 'Chain-driven Valvematic petrols rarely suffer roadside breakdowns' },
            { source: 'WhatCar? Survey', value: '97.2% Reliability', note: 'One of Europe’s highest-scoring used midsize family sedans' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 5 %', note: 'Sehr geringe Mängelquote bei Fahrwerk, Abgas und Antrieb auch nach 8–12 Jahren' },
            { source: 'ADAC Pannenstatistik', value: 'Extrem pannensicher', note: 'Die kettengetriebenen Valvematic-Benziner fallen unterwegs kaum jemals aus' },
            { source: 'WhatCar? Umfrage', value: '97,2 % Zuverlässigkeit', note: 'Gehört regelmäßig zu den zuverlässigsten Mittelklassewagen Europas' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-5%', note: 'Минимум нареканий по подвеске, выхлопу и мотору даже в возрасте 8–12 лет' },
            { source: 'ADAC Pannenstatistik', value: 'Исключительно надёжен', note: 'Цепные бензиновые Valvematic практически не ломаются в дороге' },
            { source: 'Рейтинг WhatCar?', value: '97,2% надёжности', note: 'Один из самых надёжных подержанных седанов D-класса в Европе' }
          ]
        },
        extendedChecks: {
          en: [
            'Engage and release the electric parking brake (EPB) several times — check for error warnings or sluggish rear actuator sound.',
            'On 1.8 / 2.0 Valvematic cars with Multidrive S CVT, test smooth uphill creeping and verify 60,000–80,000 km CVT fluid service.',
            'Check cold startup for silent timing-chain operation and steady idle without Valvematic controller warning codes.',
            'Inspect rear wheel-arch stone-chip lips and rear brake discs for rust scoring on low-mileage cars.'
          ],
          de: [
            'Elektrische Parkbremse (EPB) mehrfach anziehen und lösen — auf Fehlermeldungen oder träge Stellmotoren achten.',
            'Bei Multidrive-S-CVT sanftes Anfahren am Berg prüfen und Getriebeölwechsel alle 60.000–80.000 km erfragen.',
            'Kaltstart auf ruhige Steuerkette und sauberen Leerlauf ohne Fehler der Valvematic-Steuerung testen.',
            'Hintere Radlaufkanten auf Steinschlagrost und hintere Bremsscheiben auf Tragbild prüfen.'
          ],
          ru: [
            'Несколько раз включить и выключить электроручник (EPB) — не должно быть ошибок и тугого жужжания моторчиков.',
            'На версиях с вариатором Multidrive S проверить плавный старт в горку и историю замены масла раз в 60–80 тыс. км.',
            'Послушать тишину цепи на холодную и убедиться в отсутствии ошибок блока Valvematic.',
            'Осмотреть кромки задних арок на сколы и задние тормозные диски на предмет ржавчины.'
          ]
        },
        savingsNote: {
          en: 'No turbo, no DPF, and no high-pressure injectors keep unscheduled repairs near zero; ~7.2–7.8 L/100 km fuel burn easily beats complex diesels below 18,000 km/yr.',
          de: 'Ohne Turbo, DPF oder teure Injektoren bleiben Überraschungsreparaturen extrem selten; 7,2–7,8 L/100 km schlagen komplexe Diesel unter 18.000 km/Jahr.',
          ru: 'Отсутствие турбины, DPF и дорогого ТНВД сводит риск внепланового ремонта к минимуму — при пробеге до 18 тыс. км/год выгоднее дизеля.'
        },
        market: {
          supplyDemand: {
            en: 'Strong private-buyer demand for 1.8 Valvematic manuals & automatics; clean 2012–2018 facelift petrols sell quickly.',
            de: 'Hohe Privatkäufer-Nachfrage nach dem 1.8 Valvematic (Schalter wie CVT); gepflegte Facelifts ab 2012 sind rasch verkauft.',
            ru: 'Высокий спрос на 1.8 Valvematic с МКПП и вариатором; ухоженные рестайлинги 2012–2018 гг. быстро находят покупателей.'
          },
          sweetSpot: {
            en: '2012–2016 1.8 Valvematic (6-MT) Edition-S / Tec under 130,000 km with documented annual oil changes (€8,200–€10,600).',
            de: '2012–2016 1.8 Valvematic (6-Gang) Edition-S / Tec unter 130.000 km mit sauberem Serviceheft (8.200–10.600 €).',
            ru: '2012–2016 гг. 1.8 Valvematic (6-МКПП) Edition-S / Tec до 130 тыс. км с историей ТО (€8 200–10 600).'
          },
          outlook3to5yr: {
            en: 'Very gentle drop toward €5,600–€7,200 in 3–5 yrs; Toyota petrol reputation keeps resale firmer than European D-segment peers.',
            de: 'Sehr ruhiger Rückgang Richtung 5.600–7.200 € in 3–5 Jahren — der Ruf als Dauerläufer stützt den Wiederverkauf.',
            ru: 'Плавное снижение к €5 600–7 200 через 3–5 лет: репутация надёжного бензинового седана удерживает цену лучше конкурентов.'
          }
        },
        watchoutExtra: {
          en: [
            'Electric parking brake (EPB) actuator module mounted near the rear axle is expensive (~€650–€950) if water ingress or seizing occurs.',
            'Valvematic lift-control module can trigger check-engine warnings past 160,000+ km if oil changes were stretched.'
          ],
          de: [
            'Das Steuergerät/Stellmodul der elektrischen Parkbremse (EPB) an der Hinterachse kostet bei Defekt ca. 650–950 €.',
            'Die Valvematic-Ventilhubsteuerung kann jenseits von 160.000 km bei überzogenen Ölwechseln Fehlermeldungen auslösen.'
          ],
          ru: [
            'Блок актуатора электроручника (EPB) у задней оси чувствителен к влаге и закисанию (замена €650–950).',
            'При редкой замене масла после 160 тыс. км блок управления подъёмом клапанов Valvematic может выдавать ошибку.'
          ]
        }
      },
      'diesel-toyota': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average', note: 'Chassis & brakes score well; 2012+ 124 HP revisions outperform early 126 HP units' },
            { source: 'ADAC Pannenstatistik', value: 'Good (Highway)', note: 'Dependable on long commutes once EGR & early head-gasket checks pass' },
            { source: 'WhatCar? Survey', value: '91.8% Reliability', note: 'Solid Toyota 1AD block, held back slightly by EGR soot & DMF wear' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich', note: 'Fahrwerk und Bremsen solide; überarbeiteter 124-PS-Diesel ab 2012 klar besser als 126 PS' },
            { source: 'ADAC Pannenstatistik', value: 'Gut (Langstrecke)', note: 'Verlässlicher Autobahn-Motor nach Prüfung von AGR-Ventil & früher Kopfdichtung' },
            { source: 'WhatCar? Umfrage', value: '91,8 % Zuverlässigkeit', note: 'Solider 1AD-Block, lediglich AGR-Verkokung und ZMS senken den Schnitt etwas' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего', note: 'Крепкая ходовая и тормоза; обновлённый 124 л.с. (с 2012 г.) надёжнее раннего 126 л.с.' },
            { source: 'ADAC Pannenstatistik', value: 'Хорошо (на трассе)', note: 'Надёжен на дальних маршрутах при чистом EGR и исправной ГБЦ' },
            { source: 'Рейтинг WhatCar?', value: '91,8% надёжности', note: 'Крепкий блок 1AD; рейтинг немного снижают нагар в EGR и ресурс маховика' }
          ]
        },
        extendedChecks: {
          en: [
            'On 2008–2011 126 HP cars, check the coolant expansion tank cap & overflow hose for crusty white/pink residue (head-gasket check).',
            'Verify clean EGR operation & DPF regeneration history — hesitant throttle around 1,800 rpm signals soot buildup.',
            'Test the electric parking brake (EPB) and listen at idle with clutch depressed vs. released for dual-mass flywheel chatter.',
            'Ensure 2012+ 124 HP examples have documented 15,000 km oil history and clean cold starts with zero smoke.'
          ],
          de: [
            'Bei 2008–2011er 126-PS-Modellen Ausgleichsbehälter & Überlaufschlauch auf weiße/rosa Krusten (Kopfdichtung) prüfen.',
            'Ruckelfreien Durchzug um 1.800/min prüfen — Zögern deutet oft auf verkoktes AGR-Ventil oder vollen DPF hin.',
            'Elektrische Parkbremse (EPB) testen und im Leerlauf auf Klappern des Zweimassenschwungrads achten.',
            'Bei 124-PS-Modellen ab 2012 jährliche Ölwechsel (max. 15.000 km) und rauchfreien Kaltstart prüfen.'
          ],
          ru: [
            'На ранних 126 л.с. (2008–2011 гг.) осмотреть бачок охлаждения и трубку сброса на белый/розовый налёт (проверка ГБЦ).',
            'Проверить плавность тяги около 1 800 об/мин — подёргивания часто выдают забитый клапан EGR или DPF.',
            'Проверить электроручник (EPB) и послушать двухмассовый маховик при выжиме сцепления на холостых.',
            'На версиях 124 л.с. с 2012 года убедиться в замене масла каждые 15 тыс. км и чистом холодном пуске.'
          ]
        },
        savingsNote: {
          en: 'Moderate ~5.7–5.9 L/100 km real diesel consumption suits 18,000+ km/yr highway drivers, though Euro 5 tax and DPF/DMF upkeep narrow the gap vs. 1.8 Valvematic.',
          de: 'Rund 5,7–5,9 L/100 km lohnen ab ca. 18.000 km/Jahr Autobahn, doch Euro-5-Steuer und DPF/ZMS relativieren den Vorteil zum 1.8 Valvematic.',
          ru: 'Расход 5,7–5,9 л/100 км окупается на трассе от 18 тыс. км/год, однако налог Euro 5 и обслуживание DPF/маховика сближают итог с 1.8 Valvematic.'
        },
        market: {
          supplyDemand: {
            en: 'Ample used fleet supply; Euro 5 status makes 2.0 D-4D sedans roughly €1,200–€1,800 cheaper than equivalent Valvematic petrols.',
            de: 'Großes Flottenangebot; durch Euro 5 liegen 2.0 D-4D rund 1.200–1.800 € unter vergleichbaren Valvematic-Benzinern.',
            ru: 'Широкий выбор бывших корпоративных машин; из-за норм Euro 5 дизели 2.0 D-4D дешевле бензиновых на €1 200–1 800.'
          },
          sweetSpot: {
            en: '2012–2015 Facelift 2.0 D-4D (124 HP) Edition-S / Life with highway records around 130,000–170,000 km (€6,800–€8,200).',
            de: 'Facelift 2012–2015 2.0 D-4D (124 PS) Edition-S / Life mit Langstrecken-Nachweis (130–170 Tkm, 6.800–8.200 €).',
            ru: 'Рестайлинг 2012–2015 гг. 2.0 D-4D (124 л.с.) Edition-S / Life с трассовым пробегом 130–170 тыс. км (€6 800–8 200).'
          },
          outlook3to5yr: {
            en: 'Settles around €4,000–€5,200 in 3–5 yrs; best value if you need a comfortable budget motorway commuter.',
            de: 'Pendelt sich in 3–5 Jahren bei 4.000–5.200 € ein — starkes Preis-Leistungs-Verhältnis für ruhige Autobahn-Pendler.',
            ru: 'Через 3–5 лет стабилизируется около €4 000–5 200 — выгодный бюджетный вариант для спокойной езды по трассе.'
          }
        },
        watchoutExtra: {
          en: [
            'Pre-2011 1AD-FTV 2.0 D-4D engines can suffer head-gasket combustion pressure seepage under heavy Autobahn load.',
            'Electric parking brake (EPB) rear cables/motor and EGR soot clogging are common age/urban weak spots.'
          ],
          de: [
            'Frühe 1AD-FTV 2.0 D-4D (vor 2011) neigen unter hoher Autobahnlast gelegentlich zu Kopfdichtungs-Leckagen.',
            'Elektrische Parkbremse (EPB) und verkoktes AGR-Ventil zählen zu den typischen Alters-/Kurzstreckenpunkten.'
          ],
          ru: [
            'На ранних 1AD-FTV (до 2011 г.) под высокой нагрузкой на трассе возможен пробой прокладки ГБЦ.',
            'Электроручник (EPB) и закоксованный клапан EGR — главные возрастные и городские риски модели.'
          ]
        }
      },
      'diesel-bmw': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 15% (Younger Years)', note: '2015–2018 facelift chassis passes easily; monitor N47-based chain & EGR recall' },
            { source: 'ADAC Pannenstatistik', value: 'Good (Verify Recall)', note: 'Frugal Euro 6 BMW-derived 1WW/2WW units; check EGR-cooler campaign' },
            { source: 'WhatCar? Survey', value: '92.9% Reliability', note: 'Refined highway economy, though rear-mounted timing chain adds caution past 150k km' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 15 % (Jüngere Jahre)', note: 'Jüngeres 2015–2018-Chassis überzeugt; N47-Steuerkette & AGR-Rückruf prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Gut (Rückruf prüfen)', note: 'Sparsame Euro-6-1WW/2WW-Motoren (BMW-Basis); AGR-Kühler-Aktion kontrollieren' },
            { source: 'WhatCar? Umfrage', value: '92,9 % Zuverlässigkeit', note: 'Sehr sparsamer Reisebegleiter; getriebeseitige Steuerkette verlangt ab 150 Tkm Gehör' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-15% (свежие годы)', note: 'Свежий рестайлинг 2015–2018 гг. радует ходовой; следить за цепью N47 и отзывом EGR' },
            { source: 'ADAC Pannenstatistik', value: 'Хорошо (проверить отзыв)', note: 'Экономичные дизели Euro 6 1WW/2WW (база BMW); проверьте кампанию по радиатору EGR' },
            { source: 'Рейтинг WhatCar?', value: '92,9% надёжности', note: 'Тихие и экономичные, но задняя цепь ГРМ требует внимания после 150 тыс. км' }
          ]
        },
        extendedChecks: {
          en: [
            'Listen closely near the passenger-side firewall on a cold start for metallic timing-chain rasp (BMW N47-derived rear-chain layout).',
            'Verify Toyota dealer proof that the EGR-cooler safety recall (coolant leak/fire risk) has been completed.',
            'Inspect 10,000–15,000 km oil service logs (long 20k/30k km intervals accelerate chain wear on 1WW/2WW diesels).',
            'Test the electric parking brake (EPB), Toyota Safety Sense sensors, and smooth 6-MT clutch engagement.'
          ],
          de: [
            'Beim Kaltstart an der Spritzwand genau hinhören — Rasseln deutet auf gelängte hintere Steuerkette (BMW N47-Basis 1WW/2WW) hin.',
            'Toyota-Nachweis über den durchgeführten AGR-Kühler-Rückruf (Kühlmittelverlust-Risiko) vorlegen lassen.',
            'Kurze Ölwechsel-Intervalle (10.000–15.000 km) prüfen — lange Intervalle beschleunigen den Kettenverschleiß deutlich.',
            'Elektrische Parkbremse (EPB), Toyota Safety Sense und Kupplungsdruckpunkt testen.'
          ],
          ru: [
            'На холодную внимательно послушать мотор со стороны моторного щита — шелест/звон выдаёт заднюю цепь ГРМ (1WW/2WW, база BMW N47).',
            'Запросить у дилера Toyota подтверждение выполненной отзывной кампании по охладителю EGR.',
            'Проверить частые замены масла (раз в 10–15 тыс. км) — длинные интервалы быстро изнашивают цепь.',
            'Протестировать электроручник (EPB), датчики Toyota Safety Sense и работу сцепления 6-МКПП.'
          ]
        },
        savingsNote: {
          en: 'Euro 6 compliance and ~5.0–5.5 L/100 km real fuel use deliver the lowest fuel & city-tax bills in the T27 diesel lineup, provided timing chain maintenance is respected.',
          de: 'Euro 6 und ca. 5,0–5,5 L/100 km sorgen für die niedrigsten Sprit- und Steuerkosten der T27-Diesel — sofern die Steuerkette sauber gepflegt wird.',
          ru: 'Нормы Euro 6 и расход 5,0–5,5 л/100 км дают минимальные затраты на топливо среди всех дизелей T27 при условии своевременного контроля цепи ГРМ.'
        },
        market: {
          supplyDemand: {
            en: 'Newer 2015–2018 facelift Euro 6 models command €10,500–€12,800; 2.0 D-4D 143 HP is preferred over the modest 112 HP 1.6 D-4D.',
            de: 'Jüngere 2015–2018er Euro-6-Modelle kosten 10.500–12.800 €; der 143-PS-2.0 D-4D ist gefragter als der 112-PS-1.6 D-4D.',
            ru: 'Свежие рестайлинги Euro 6 (2015–2018 гг.) стоят €10 500–12 800; версию 2.0 (143 л.с.) ценят выше 1.6 (112 л.с.).'
          },
          sweetSpot: {
            en: '2016–2018 2.0 D-4D (143 HP) Edition-S / Tec under 130,000 km with EGR recall proof and 15k km oil logs (€11,200–€12,800).',
            de: '2016–2018 2.0 D-4D (143 PS) Edition-S / Tec unter 130.000 km mit AGR-Rückruf-Beleg & 15-Tkm-Ölwechseln (11.200–12.800 €).',
            ru: '2016–2018 гг. 2.0 D-4D (143 л.с.) Edition-S / Tec до 130 тыс. км с отметкой об отзыве EGR и частым ТО (€11 200–12 800).'
          },
          outlook3to5yr: {
            en: 'Drops toward €7,200–€8,800 over 3–5 yrs; Euro 6 emissions rating shields residual value better than older Euro 5 diesels.',
            de: 'Sinkt in 3–5 Jahren Richtung 7.200–8.800 € — die Euro-6-Norm schützt den Restwert spürbar besser als bei Euro-5-Dieseln.',
            ru: 'За 3–5 лет снизится до €7 200–8 800: класс Euro 6 удерживает остаточную стоимость заметно лучше старых Euro 5.'
          }
        },
        watchoutExtra: {
          en: [
            '1WW (1.6) & 2WW (2.0 143 HP) BMW N47-based engines place the timing chain at the gearbox side — replacement requires pulling engine/transmission (~€1,500–€2,200).',
            'Check for EGR-cooler coolant leaks and DPF soot accumulation on short-commute cars.'
          ],
          de: [
            'Die BMW-N47-basierten 1WW (1.6) & 2WW (2.0 143 PS) tragen die Steuerkette getriebeseitig — ein Tausch kostet ca. 1.500–2.200 €.',
            'AGR-Kühler-Leckagen und DPF-Beladung bei Kurzstrecken-Nutzung genau prüfen.'
          ],
          ru: [
            'Моторы 1WW (1.6) и 2WW (2.0 143 л.с.) на базе BMW N47 имеют цепь ГРМ со стороны КПП — замена требует снятия агрегата (€1 500–2 200).',
            'Важно проверять утечки радиатора EGR и степень забитости сажевого фильтра после городских пробегов.'
          ]
        }
      },
      'diesel-22': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Average (Watch Emissions)', note: 'Strong chassis, yet 2.2 head gaskets & D-CAT emissions hardware push repair costs up' },
            { source: 'ADAC Pannenstatistik', value: 'Caution (D-CAT / Head)', note: 'Watch coolant push-out, piezo injectors & 5th-injector DPNR catalyst on 177 HP' },
            { source: 'WhatCar? Survey', value: '88.6% Reliability', note: 'Lowest-rated Avensis engine family due to costly D-CAT & head-seal repairs' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Durchschnitt (Abgas prüfen)', note: 'Solides Chassis, doch Kopfdichtung & D-CAT-Abgastechnik treiben die Kosten hoch' },
            { source: 'ADAC Pannenstatistik', value: 'Vorsicht (D-CAT / Kopf)', note: 'Auf Kühlmittelverlust, Piezo-Injektoren & 5.-Injektor-DPNR-Kat (177 PS) achten' },
            { source: 'WhatCar? Umfrage', value: '88,6 % Zuverlässigkeit', note: 'Anfälligste T27-Motorengruppe durch teure D-CAT- und Kopfdichtungs-Schäden' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Средний (выхлоп/ГБЦ)', note: 'Ходовая крепкая, но прокладка ГБЦ и система D-CAT удорожают содержание' },
            { source: 'ADAC Pannenstatistik', value: 'Внимание (D-CAT / ГБЦ)', note: 'Проверять выброс антифриза, пьезофорсунки и 5-ю форсунку DPNR на 177 л.с.' },
            { source: 'Рейтинг WhatCar?', value: '88,6% надёжности', note: 'Наименее беспроблемная линейка T27 из-за дорогих ремонтов D-CAT и ГБЦ' }
          ]
        },
        extendedChecks: {
          en: [
            'Drive hard uphill for 10 minutes and inspect the coolant overflow tank for bubbling or dried white/pink crust (2AD head-gasket test).',
            'On 177 HP D-CAT, check tailpipe for white smoke puffs (failing 5th DPNR injector) and verify clean idle without piezo knock.',
            'On 150 HP 6-speed torque-converter automatics, check smooth hot shifting and ask for ATF change history.',
            'Test the electric parking brake (EPB) and inspect rear suspension bushes & brake lines.'
          ],
          de: [
            'Bei zügiger Autobahn-/Bergfahrt prüfen, ob Kühlmittel über den Ausgleichsbehälter gedrückt wird (2AD-Kopfdichtung).',
            'Beim 177-PS-D-CAT auf weißen Qualm aus dem Auspuff (5. Injektor / DPNR) und ruhigen Piezo-Injektor-Lauf achten.',
            'Bei der 150-PS-6-Stufen-Automatik weiches Schalten im warmen Zustand und Getriebeölwechsel prüfen.',
            'Elektrische Parkbremse (EPB) sowie hintere Achslager und Bremsleitungen kontrollieren.'
          ],
          ru: [
            'После активного разгона под нагрузкой осмотреть расширительный бачок на следы выброса антифриза (проверка ГБЦ 2AD).',
            'На D-CAT (177 л.с.) проверить отсутствие белого дыма из выхлопа (5-я форсунка DPNR) и ровный звук пьезофорсунок.',
            'На 6-АКПП (150 л.с.) убедиться в плавных переключениях на горячую и наличии замен ATF.',
            'Проверить электроручник (EPB), сайлентблоки задней подвески и тормозные магистрали.'
          ]
        },
        savingsNote: {
          en: 'Heavier ~6.6–7.2 L/100 km fuel use, higher 2.2L tax, and costly piezo/DPNR/head-gasket risks make 2.2 D-4D models notably pricier to run than the 2.0 D-4D or 1.8 petrol.',
          de: 'Höherer Verbrauch (6,6–7,2 L/100 km), höhere 2,2-L-Steuer sowie teure Piezo-/DPNR-/Kopfdichtungs-Risiken machen den 2.2er deutlich teurer als 2.0 D-4D oder 1.8 Benziner.',
          ru: 'Расход 6,6–7,2 л/100 км, высокий налог за 2.2 л и дорогие риски по ГБЦ/форсункам/DPNR делают содержание заметно дороже 2.0 D-4D или 1.8 бензина.'
        },
        market: {
          supplyDemand: {
            en: 'Limited buyer appetite; 150 HP 6-AT appeals to tow/automatic buyers, while 177 HP D-CAT sells slowly at discounts.',
            de: 'Verhaltene Nachfrage; der 150-PS-6-AT interessiert Automatik-/Zugwagen-Käufer, der 177-PS-D-CAT steht oft länger.',
            ru: 'Сдержанный спрос: версию 150 л.с. с 6-АКПП берут ради автомата и прицепа, а 177 л.с. D-CAT продаётся с дисконтом.'
          },
          sweetSpot: {
            en: 'Only 2012+ Facelift 2.2 D-4D 150 HP Executive 6-AT with documented coolant & ATF records (€7,200–€8,600); avoid unvetted D-CAT.',
            de: 'Am ehesten Facelift 2012+ 2.2 D-4D 150 PS Executive 6-AT mit sauberer Kühlmittel-/Getriebe-Historie (7.200–8.600 €); D-CAT ohne Belege meiden.',
            ru: 'Лишь рестайлинг 2012+ 2.2 D-4D 150 л.с. Executive 6-АКПП с чистой историей охлаждения и АКПП (€7 200–8 600); D-CAT брать только с проверкой.'
          },
          outlook3to5yr: {
            en: 'Depreciates toward €3,900–€5,200 in 3–5 yrs; high potential repair bills cap future resale upside.',
            de: 'Fällt in 3–5 Jahren Richtung 3.900–5.200 € — hohe potenzielle Reparaturkosten begrenzen den Restwert.',
            ru: 'Снизится к €3 900–5 200 за 3–5 лет: дорогие потенциальные ремонты сдерживают спрос на вторичке.'
          }
        },
        watchoutExtra: {
          en: [
            'Aluminum 2AD head/block warping can push coolant out of the expansion bottle under sustained high-speed loads (expensive ~€1,800–€2,600 repair).',
            '177 HP D-CAT uses non-rebuildable piezo injectors and a 5th-injector DPNR catalyst prone to white-smoke soot issues.'
          ],
          de: [
            'Der 2AD-Alumotor kann unter hoher Dauerlast Abgas ins Kühlsystem drücken — teure Kopfdichtungs-/Block-Reparatur (1.800–2.600 €).',
            'Der 177-PS-D-CAT nutzt nicht instandsetzbare Piezo-Injektoren sowie einen anfälligen 5.-Injektor-DPNR-Kat.'
          ],
          ru: [
            'Алюминиевый блок 2AD при перегревах и нагрузках склонен к выдуванию антифриза через бачок (ремонт ГБЦ €1 800–2 600).',
            'Версия D-CAT (177 л.с.) оснащена неремонтируемыми пьезофорсунками и капризным катализатором DPNR с 5-й форсункой.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (T27)', de: 'EU / DE Ausstattungslinien (T27)', ru: 'Европейские комплектации (T27)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2012 / 2015 facelift age', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & 2012/2015-Facelift', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и годе рестайлинга' },
      faceliftTitle: { en: '2012 & 2015 Facelift (T27 II/III) Upgrades', de: 'Facelift-Upgrades 2012 & 2015 (T27 II/III)', ru: 'Обновления рестайлингов 2012 и 2015 (T27)' },
      faceliftKicker: { en: '2012 & 2015 Refresh', de: 'Facelift 2012 & 2015', ru: 'Рестайлинг 2012 / 2015' },
      trims: [
        {
          id: 'base',
          tierClass: 'tier-1',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Base', de: 'Base', ru: 'Base' },
          delta: { en: '-€800 – €1,200', de: '-800 – 1.200 €', ru: '-€800 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Fleet-spec entry trim with manual A/C, steel wheels, and durable fabric upholstery.',
            de: 'Schlichte Flotten-Basis mit manueller Klimaanlage, Stahlfelgen und robusten Stoffsitzen.',
            ru: 'Скромная базовая версия с кондиционером, стальными дисками и износостойкой тканью.'
          },
          highlights: {
            en: ['16" steel wheels & manual A/C', '7 airbags (incl. knee) & VSC+', 'Halogen headlamps & basic audio'],
            de: ['16"-Stahlfelgen & manuelle Klima', '7 Airbags (inkl. Knie) & VSC+', 'Halogen-Licht & Basis-Radio'],
            ru: ['Штампованные диски 16" и кондиционер', '7 подушек (вкл. коленную) и VSC+', 'Галогеновые фары и базовое аудио']
          }
        },
        {
          id: 'life',
          tierClass: 'tier-2',
          tier: { en: 'Essential', de: 'Einstieg', ru: 'Стандарт' },
          name: { en: 'Life', de: 'Life', ru: 'Life' },
          delta: { en: '-€300 – €600', de: '-300 – 600 €', ru: '-€300 – €600' },
          isSweetSpot: false,
          summary: {
            en: 'Step-up daily trim adding automatic climate control, fog lamps, and leather steering wheel.',
            de: 'Solide Einstiegsstufe mit Klimaautomatik, Nebelscheinwerfern und Lederlenkrad.',
            ru: 'Практичная ступень с климат-контролем, противотуманками и кожаным рулём.'
          },
          highlights: {
            en: ['Auto climate & front fog lamps', 'Leather wheel & Bluetooth audio', '16" alloys optional / standard on late FL'],
            de: ['Klimaautomatik & Nebelscheinwerfer', 'Lederlenkrad & Bluetooth-Audio', '16"-Alus (teils Serie ab Facelift)'],
            ru: ['Климат-контроль и противотуманки', 'Кожаный руль и Bluetooth', 'Диски 16" (на поздних версиях в базе)']
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
            en: 'Popular European mid-tier with dual-zone climate, alloy wheels, and Toyota Touch screen.',
            de: 'Beliebte EU-Mitte mit 2-Zonen-Klimaautomatik, Alufelgen und Toyota Touch-Bildschirm.',
            ru: 'Популярная средняя версия с 2-зонным климатом, литыми дисками и экраном Toyota Touch.'
          },
          highlights: {
            en: ['16" / 17" alloys & dual-zone climate', 'Toyota Touch screen + rear camera (2012+)', 'Cruise control & rain/light sensors'],
            de: ['16"/17"-Alus & 2-Zonen-Klimaautomatik', 'Toyota Touch + Rückfahrkamera (ab 2012)', 'Tempomat & Licht-/Regensensor'],
            ru: ['Диски 16"/17" и 2-зонный климат', 'Экран Toyota Touch + камера (с 2012 г.)', 'Круиз-контроль и датчики света/дождя']
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
            en: 'Best used Avensis sweet spot — adds heated seats, 17" alloys, Alcantara accents, and smart key.',
            de: 'Bester Avensis-Sweet-Spot mit Sitzheizung, 17"-Alus, Alcantara-Akzenten und Smart-Key.',
            ru: 'Оптимальный выбор на вторичке: подогрев сидений, диски 17", вставки из алькантары и Smart Key.'
          },
          highlights: {
            en: ['17" two-tone alloys & privacy glass', 'Heated front seats & Alcantara trim', 'Smart Key entry & push-button start'],
            de: ['17"-Zweifarbfelgen & Privacy-Glas', 'Sitzheizung & Teilleder/Alcantara', 'Smart-Key & Startknopf'],
            ru: ['Двухцветные диски 17" и тонировка', 'Подогрев сидений и алькантара', 'Бесключевой доступ и кнопка старта']
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
            en: 'Executive touring trim adding Bi-Xenon/Bi-LED headlamps, full leather, and electric memory seats.',
            de: 'Hochwertige Reiselimousine mit Bi-Xenon/Bi-LED, Vollleder und elektrischen Memory-Sitzen.',
            ru: 'Бизнес-комплектация с фарами Bi-Xenon/Bi-LED, кожаным салоном и памятью кресел.'
          },
          highlights: {
            en: ['Bi-Xenon (2012) / Bi-LED (2015+) headlamps', 'Full leather & electric memory seats', '17" / 18" alloys & Touch & Go navigation'],
            de: ['Bi-Xenon (2012) / Bi-LED (ab 2015)', 'Vollleder & elektrische Memory-Sitze', '17"/18"-Alus & Touch & Go Navi'],
            ru: ['Фары Bi-Xenon (2012) / Bi-LED (2015+)', 'Полная кожа и электропамять сидений', 'Диски 17"/18" и навигация Touch & Go']
          }
        },
        {
          id: 'tec-edition',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Topmodell', ru: 'Флагман' },
          name: { en: 'Tec-Edition', de: 'Tec-Edition', ru: 'Tec-Edition' },
          delta: { en: '+€1,400 – €2,200', de: '+1.400 – 2.200 €', ru: '+€1 400 – €2 200' },
          isSweetSpot: false,
          summary: {
            en: 'Top technology flagship bundling adaptive lighting, lane/pre-crash safety, and premium audio.',
            de: 'Technik-Topmodell mit Kurvenlicht, Toyota Safety Sense / Pre-Crash und Top-Audiosystem.',
            ru: 'Технологический флагман с адаптивным светом, пакетом систем безопасности и топ-аудио.'
          },
          highlights: {
            en: ['Adaptive Bi-LED / AFS & high-beam assist', 'Full Toyota Safety Sense / Pre-Crash', '18" alloys, premium audio & panoramic roof opt.'],
            de: ['Adaptives Kurvenlicht & Fernlichtassistent', 'Volles Safety Sense / Pre-Crash-System', '18"-Alus, Premium-Audio & Glasdach opt.'],
            ru: ['Адаптивный свет и автодальний', 'Полный комплекс Safety Sense / Pre-Crash', 'Диски 18", премиум-аудио и панорама опц.']
          }
        }
      ],
      matrix: [
        { feature: { en: '7 Airbags (incl. Knee) & VSC+', de: '7 Airbags (inkl. Knie) & VSC+', ru: '7 подушек (вкл. коленную) и VSC+' }, vals: ['std', 'std', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Toyota Touch Screen + Rear Camera (2012+)', de: 'Toyota Touch + Rückfahrkamera (ab 2012)', ru: 'Экран Toyota Touch + камера (с 2012 г.)' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'opt', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Smart Key Entry & Push-Button Start', de: 'Smart-Key & Startknopf', ru: 'Бесключевой доступ и кнопка старта' }, vals: ['no', 'no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Bi-Xenon (2012) / Bi-LED Headlights (2015)', de: 'Bi-Xenon (2012) / Bi-LED-Licht (2015)', ru: 'Фары Bi-Xenon (2012) / Bi-LED (2015)' }, vals: ['no', 'no', 'no', 'opt', 'std', 'std'] },
        { feature: { en: 'Full Leather + Electric Memory Seats', de: 'Vollleder + elektrische Memory-Sitze', ru: 'Полная кожа + память электросидений' }, vals: ['no', 'no', 'no', 'no', 'std', 'std'] },
        { feature: { en: 'Toyota Safety Sense (2015+ Facelift)', de: 'Toyota Safety Sense (ab Facelift 2015)', ru: 'Toyota Safety Sense (рестайлинг 2015+)' }, vals: ['opt', 'opt', 'opt', 'std', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Conservative, rattle-free cabin construction with soft upper dash materials that resist wear past 200,000+ km.',
          'Flat rear floor and wide doors seat three rear passengers comfortably; 509 L sedan boot includes a handy ski hatch.',
          'Electronic parking brake (EPB) button sits low right of the steering column on pre-2015 cars (watch rear actuator health).'
        ],
        de: [
          'Unaufgeregter, extrem klapperfreier Innenraum mit robusten Soft-Touch-Flächen, die auch über 200.000 km sauber altern.',
          'Nahezu ebener Fondboden für drei Passagiere; 509 Liter Kofferraum samt praktischer Ski-Durchlade.',
          'Schalter der elektrischen Parkbremse (EPB) sitzt bis 2015 etwas versteckt rechts unten am Lenkrad (Stellmotor prüfen).'
        ],
        ru: [
          'Сдержанный и очень крепкий салон с мягким верхом панели, который отлично сохраняется даже после 200 000+ км.',
          'Почти ровный пол сзади удобен для троих пассажиров; багажник 509 л оснащён лючком для длинномеров.',
          'Клавиша электроручника (EPB) до 2015 года расположена справа под рулём (обязательно проверяйте задний актуатор).'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: 'Valvematic petrol models pair hushed ~67 dB motorway refinement with either a light 6-speed manual or the smooth Multidrive S CVT featuring Sport mode and steering paddles on higher trims.',
          de: 'Die Valvematic-Benziner verbinden flüsterleise ~67 dB Autobahn-Ruhe mit einem leichtgängigen 6-Gang-Schalter oder dem weichen Multidrive-S-CVT (inkl. Sport-Taste & Wippen in höheren Linien).',
          ru: 'Бензиновые Valvematic отличаются тихим ходом (~67 дБ на трассе) и сочетаются с лёгкой 6-МКПП либо плавным вариатором Multidrive S с режимом Sport.'
        },
        diesel: {
          en: 'D-4D diesel cabins swap in taller motorway gearing and extra firewall damping; 1.6/2.0-143 (2015+) units add a quieter BMW-sourced idle and Euro 6 dash readouts, while 2.2-150 offers an optional 6-speed auto.',
          de: 'Die D-4D-Diesel nutzen lang übersetzte 6-Gang-Getriebe und verstärkte Stirnwand-Dämmung; die 2015+ 1.6/2.0-143 (BMW-Basis) laufen ruhiger, während der 2.2-150 optional eine 6-Stufen-Automatik bietet.',
          ru: 'Дизельные D-4D получили длинные передачи и усиленную изоляцию щита; моторы 1.6 и 2.0-143 (с 2015 г., база BMW) заметно тише, а для 2.2-150 доступен 6-АКПП.'
        },
        conventional: {
          en: 'Calm long-distance touring ergonomics with wide supportive seats, clear twin-dial gauges, and straightforward physical climate controls.',
          de: 'Ruhige Reise-Ergonomie mit bequemen Langstreckensitzen, klaren Rundinstrumenten und intuitiven Klimatasten.',
          ru: 'Спокойная туристическая эргономика с удобными креслами, читаемыми приборами и понятными кнопками климата.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2012 Facelift (T27 II): Sharper front grille/headlights, revised cabin trim, Toyota Touch touchscreen & stiffer body welds.',
          '2015 Second Facelift (T27 III): Bold Lexus-inspired nose with Bi-LED headlights and completely redesigned twin-pod dashboard.',
          '2015+ cabins gained an 8" Touch 2 display, 4.2" colour driver TFT, thicker acoustic glass/insulation, and improved front seats.',
          '2015+ standard Toyota Safety Sense added autonomous pre-collision braking, plus 1.6/2.0 D-4D (BMW 1WW/2WW) Euro 6 diesels.'
        ],
        de: [
          'Facelift 2012 (T27 II): Geschärfte Front, neue Polster, Toyota-Touch-Bildschirm und verstärkte Karosseriepunkte.',
          'Zweites Facelift 2015 (T27 III): Markantere Front mit Bi-LED-Scheinwerfern und komplett neu gezeichnetes Armaturenbrett.',
          'Ab 2015 mit 8"-Touch-2-Monitor, 4,2"-Farb-TFT im Tacho, besserer Geräuschdämmung und komfortableren Vordersitzen.',
          'Ab 2015 Toyota Safety Sense (Notbremsassistent) Serie sowie Wechsel auf Euro-6-Diesel 1.6/2.0 D-4D (BMW-Basis 1WW/2WW).'
        ],
        ru: [
          'Рестайлинг 2012 (T27 II): обновлённая оптика и решётка, улучшенная отделка, экран Toyota Touch и более жёсткий кузов.',
          'Второй рестайлинг 2015 (T27 III): новая передняя часть с фарами Bi-LED и полностью переработанная передняя панель.',
          'Салон 2015+ получил 8" экран Touch 2, цветной дисплей 4,2" в приборке, усиленную шумоизоляцию и новые передние кресла.',
          'Комплекс Toyota Safety Sense стал базовым с 2015 года, а дизели заменили на Euro 6 1.6 и 2.0 D-4D (BMW 1WW/2WW).'
        ]
      }
    }
  }
});