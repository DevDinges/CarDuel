// AutoDuel Vehicle Data — mazda-6-gh
registerAutoDuelVehicle({
  roster: {
    id: 'mazda-6-gh',
    number: '12',
    carType: 'sedan',
    gridOrder: 12,
    gridLabel: 'Mazda 6',
    yearMake: '2008-2012 MAZDA',
    shortTitle: 'MAZDA 6 (GH)',
    fullName: '2008-2012 Mazda 6 (GH)',
    rarityClass: 'rarity-common',
    drivetrain: 'FWD',
    image: 'assets/mazda-6-gh.webp',
    defaultEngineId: '2.0-mzr-disi',
    sharedBuyerFit: {
      cards: {
        m6SharpHandling: {
          en: 'You enjoy crisp, engaging steering: Double-wishbone front geometry makes this one of the sharpest-handling midsize sedans of its era.',
          de: 'Du magst präzises Lenkgefühl: Die Doppelquerlenker-Vorderachse macht den Mazda 6 zu einer der agilsten Limousinen seiner Klasse.',
          ru: 'Ты любишь острый и точный руль: Двухрычажная передняя подвеска делает управляемость одной из лучших в классе.'
        },
        m6SpaciousBoot: {
          en: 'You need generous passenger & trunk space: Long 2,725 mm wheelbase and a 519 L boot fit family trips comfortably.',
          de: 'Du brauchst viel Platz für Familie und Gepäck: 2.725 mm Radstand und 519 L Kofferraum bieten reichlich Raum.',
          ru: 'Тебе нужен просторный салон и багажник: Колёсная база 2 725 мм и отсек 519 л удобны для дальних поездок.'
        },
        m6PetrolReliability: {
          en: 'You want simple chain-driven longevity: Naturally aspirated MZR engines avoid turbochargers and DPF bills.',
          de: 'Du willst solide Ketten-Technik: Die MZR-Saugmotoren ersparen dir Turbolader- und DPF-Rechnungen.',
          ru: 'Ты хочешь простой цепной мотор: Атмосферники MZR избавляют от трат на турбину и сажевый фильтр.'
        },
        m6DieselTorque: {
          en: 'You cover long highway commutes: Strong 330–400 Nm diesel torque makes motorway overtaking effortless.',
          de: 'Du fährst lange Autobahnetappen: Kräftige 330–400 Nm Diesel-Drehmoment sorgen für souveränes Überholen.',
          ru: 'Ты много ездишь по трассе: Момент 330–400 Н·м делает обгоны лёгкими и экономичными.'
        },
        m6RustInspection: {
          en: 'You hate checking for underbody rust: Rear wheel arches, sills, and rear subframes are sensitive to winter road salt.',
          de: 'Du willst keine Rostvorsorge betreiben: Hintere Radläufe, Schweller und Achsträger reagieren empfindlich auf Streusalz.',
          ru: 'Ты не хочешь проверять кузов на ржавчину: Задние арки, пороги и подрамник чувствительны к зимним реагентам.'
        },
        m6CabinAge: {
          en: 'You want modern screens & plush cabin tech: Monochrome top display and firm plastics feel dated inside.',
          de: 'Du erwartest modernes Infotainment: Das schlichte Monochrom-Display und harte Kunststoffe wirken heute betagt.',
          ru: 'Тебе нужна современная мультимедиа: Монохромный экранчик и жёсткий пластик выглядят скромно.'
        },
        m6SedanOpening: {
          en: 'You load tall boxy cargo often: The 4-door sedan boot lid is narrower than a hatchback or estate.',
          de: 'Du lädst oft sperrige Gegenstände ein: Die Stufenheck-Ladeluke ist schmaler als beim Fließheck oder Kombi.',
          ru: 'Ты часто грузишь габаритные вещи: Проём седана заметно уже, чем у лифтбека или универсала.'
        },
        m6HighRevNa: {
          en: 'You want effortless low-rev pull: Non-turbo MZR engines need downshifts and revs for quick highway overtakes.',
          de: 'Du willst mühelosen Schub ab 1.800/min: Die Saugmotoren brauchen beim Überholen Drehzahl und Herunterschalten.',
          ru: 'Тебе нужна тяга с самых низов: Атмосферные моторы требуют раскрутки при обгонах.'
        },
        m6DieselCare: {
          en: 'You want low-maintenance diesel ownership: MZR-CD engines demand regular copper injector washer, oil-strainer, and chain/belt care.',
          de: 'Du willst einen anspruchslosen Diesel: MZR-CD-Motoren verlangen zwingend Pflege von Injektor-Kupferscheiben, Ölsieb und Steuerkette/-riemen.',
          ru: 'Ты хочешь неприхотливый дизель: Моторы MZR-CD требуют строгого контроля медных шайб форсунок, маслозаборника и ГРМ.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'One of the sharpest-driving, most dependable midsize petrol sedans — just inspect the rear arches and subframe for rust.',
          de: 'Eine der agilsten und zuverlässigsten Mittelklasse-Limousinen — einfach Radläufe und Unterboden sauber auf Rost prüfen.',
          ru: 'Один из самых драйверских и надёжных седанов D-класса — главное проверить задние арки и подрамник на коррозию.'
        },
        ideal: ['m6SharpHandling', 'm6SpaciousBoot', 'm6PetrolReliability', 'globalPetrolCityZones'],
        skip: ['m6RustInspection', 'm6CabinAge', 'm6SedanOpening', 'm6HighRevNa']
      },
      diesel: {
        summary: {
          en: 'A sharp-handling, torquey highway cruiser — only buy with documented copper-washer, sump-strainer, and timing service.',
          de: 'Ein agiler, durchzugsstarker Langstrecken-Gleiter — nur mit belegtem Injektor-Dichtungs-, Ölsieb- und Steuerzeiten-Service kaufen.',
          ru: 'Управляемый и тяговитый дизельный седан — покупать только с чеками на замену шайб форсунок, чистку маслозаборника и ГРМ.'
        },
        ideal: ['m6SharpHandling', 'm6SpaciousBoot', 'm6DieselTorque', 'globalDieselLongRange'],
        skip: ['globalDieselShortTripRisk', 'm6DieselCare', 'm6RustInspection', 'm6CabinAge']
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Strong Mechanical Arms — Inspect Rear Arches & Subframe Rust',
          strengths: [
            'Strong Mechanical Arms keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Underbody salt rust on rear wheel-arch lips, sills, and rear subframe is the #1 check.',
            'Inspect Rear Arches & Subframe Rust.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Stabile Achsmechanik — Hintere Radläufe & Achsträger prüfen',
          strengths: [
            'Stabile Achsmechanik hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Rost an hinteren Radläufen, Schwellern und Hinterachsträger ist der wichtigste Prüfpunkt.',
            'Hintere Radläufe & Achsträger prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Крепкая механика шасси — Осмотр задних арок и подрамника',
          strengths: [
            'Крепкая механика шасси надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Коррозия задних арок, порогов и заднего подрамника — главный пункт осмотра.',
            'Осмотр задних арок и подрамника.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Driver-Focused Controls • Good Seats',
          strengths: [
            'Driver-Focused Controls • Good Seats ensures intuitive daily ergonomics.',
            'Functional layout keeps essential controls easy to reach while driving.'
          ],
          watchouts: [
            'Dated monochrome top display and firm plastics on base trims.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Ergonomisches Cockpit • Gute Sitze',
          strengths: [
            'Ergonomisches Cockpit • Gute Sitze sorgt für eine intuitive Bedienung im Alltag.',
            'Übersichtliche Anordnung hält alle wichtigen Bedienelemente griffbereit.'
          ],
          watchouts: [
            'Schlichtes Monochrom-Display oben und feste Kunststoffe in Basisversionen.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Удобное кресло и руль',
          strengths: [
            'Удобное кресло и руль обеспечивает удобную и понятную эргономику на каждый день.',
            'Функциональная компоновка позволяет легко дотянуться до всех органов управления.'
          ],
          watchouts: [
            'Устаревший монохромный верхний экран и простой пластик в базовых версиях.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '4.76 m Long Sedan • 11.4 m Turn',
          strengths: [
            '4.76 m Long Sedan • 11.4 m Turn makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            '4.76 m length and high rear deck make rear parking sensors very helpful.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '4,76 m Stufenheck • 11,4 m Kreis',
          strengths: [
            '4,76 m Stufenheck • 11,4 m Kreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            '4,76 m Länge und hohes Heck machen Parksensoren hinten sehr hilfreich.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Седан 4,76 м • Разворот 11,4 м',
          strengths: [
            'Седан 4,76 м • Разворот 11,4 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Длина 4,76 м и высокая корма делают задний парктроник очень полезным.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2009) — 6 Airbags + RVM Blind-Spot Opt.',
          strengths: [
            'Euro NCAP 5★ (2009) provides solid passive crash protection for its class and era.',
            '6 Airbags + RVM Blind-Spot Opt. standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2009) — 6 Airbags + Totwinkel-Assistent Opt.',
          strengths: [
            'Euro NCAP 5★ (2009) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '6 Airbags + Totwinkel-Assistent Opt. serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (2009) — 6 подушек + контроль слепых зон',
          strengths: [
            'Euro NCAP 5★ (2009) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + контроль слепых зон входят в оснащение большинства версий.'
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
          headline: 'Spacious 2,725 mm Wheelbase',
          strengths: [
            'Spacious 2,725 mm Wheelbase keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Fold-Flat Lever Rear Seats.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Großzügiger Radstand hinten',
          strengths: [
            'Großzügiger Radstand hinten sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Praktische Fernentriegelung.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Просторный 2-й ряд (база 2 725 мм)',
          strengths: [
            'Просторный 2-й ряд (база 2 725 мм) обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Быстрое складывание спинок.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '519L Long Sedan Boot',
          strengths: [
            'Practical 519L sedan boot with fold-flat lever handles.',
            'Narrower Trunk Opening vs Liftback improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '519L großer Stufenheck-Kofferraum',
          strengths: [
            'Praktischer Nutzwert: 519 L großer Limousinen-Kofferraum mit Fernentriegelung für die Rücksitzlehnen.',
            'Kleinere Klappe als Fließheck erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник седана 519 л',
          strengths: [
            'Практичный объём: большой багажник 519 л с удобным складыванием спинок из багажника.',
            'Проём уже, чем у лифтбека добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Class-Best Sharp Steering',
          strengths: [
            'Double-wishbone front geometry delivers the sharpest steering feel in the 2010 midsize class.',
            'Double-Wishbone Front Precision.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Klassenbeste präzise Lenkung',
          strengths: [
            'Doppelquerlenker-Vorderachse liefert das präziseste Lenkgefühl seiner Mittelklasse-Generation.',
            'Doppelquerlenker-Vorderachse.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Лучшая рулёжка в D-классе',
          strengths: [
            'Двухрычажная передняя подвеска дарит лучшую управляемость в D-классе тех лет.',
            'Двухрычажная передняя подвеска.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 36.8 m — 299 mm Discs • Linear Pedal',
          strengths: [
            '100–0 km/h: 36.8 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 36,8 m — 299 mm Scheiben • Lineares Pedal',
          strengths: [
            '100–0 km/h: 36,8 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 36,8 м — 299 мм диски • Линейная педаль',
          strengths: [
            '100–0 км/ч: 36,8 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '540 kg Payload • 1,500 kg Braked Towing',
          strengths: ['540 kg Payload and 1,500 kg Braked Towing handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '540 kg Zuladung • 1,500 kg Anhängelast',
          strengths: [
            '540 kg Zuladung und 1,500 kg Anhängelast bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 540 кг • Прицеп до 1,500 кг',
          strengths: ['Нагрузка 540 кг и Прицеп до 1,500 кг закрывают повседневные задачи по загрузке.'],
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
          headline: 'Sought-After 2010+ Facelift',
          strengths: [
            'Sought-After 2010+ Facelift helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Gefragtes 2010+-Facelift',
          strengths: [
            'Gefragtes 2010+-Facelift sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Ликвидный рестайлинг 2010+',
          strengths: [
            'Ликвидный рестайлинг 2010+ поддерживает стабильный спрос на вторичном рынке.',
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
      'petrol-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: 'Crisp 6-MT / Tough 5-Speed Auto — Durable Driveshafts & Clutch',
            strengths: [
              'Crisp 6-MT / Tough 5-Speed Auto matches this powertrain well for everyday driving.',
              'Durable Driveshafts & Clutch.'
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
            headline: 'Präzises 6-Gang / Robuste 5-AT — Haltbare Wellen & Kupplung',
            strengths: [
              'Präzises 6-Gang / Robuste 5-AT passt gut zur Motorcharakteristik im Alltag.',
              'Haltbare Wellen & Kupplung.'
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
            headline: 'Чёткая 6-МКПП / Крепкая 5-АКПП — Выносливые приводы и сцепление',
            strengths: [
              'Чёткая 6-МКПП / Крепкая 5-АКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Выносливые приводы и сцепление.'
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
            headline: 'Updated 2010+ Steering Sensor',
            strengths: [
              'Updated 2010+ Steering Sensor keeps electrical diagnostics straightforward.',
              'Proven Japanese Switchgear.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Verbesserte Lenkung ab 2010',
            strengths: [
              'Verbesserte Lenkung ab 2010 sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Sehr solide Japan-Elektronik.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Доработанный ЭУР с 2010 г.',
            strengths: [
              'Доработанный ЭУР с 2010 г. упрощает диагностику и обслуживание электрооборудования.',
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
            headline: '2010+ Retuned Supple Ride',
            strengths: [
              '2010+ Retuned Supple Ride delivers pleasant everyday composure.',
              'Noticeable Road Noise Above 130.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ab 2010 feiner abgestimmt',
            strengths: [
              'Ab 2010 feiner abgestimmt sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Hörbare Abrollgeräusche ab 130.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'С 2010 г. подвеска мягче',
            strengths: [
              'С 2010 г. подвеска мягче обеспечивает комфортную езду в повседневных поездках.',
              'Шум шин выше 130 км/ч.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'No Turbo / DPF / DMF Bills — Affordable Routine Filters',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Affordable Routine Filters.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'No Turbo / DPF / DMF Bills.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kein Turbo / DPF / ZMS — Günstiger Verschleißteil-Unterhalt',
            strengths: [
              'Kein Turbo / DPF / ZMS hält die planbaren jährlichen Wartungskosten im Rahmen.',
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
            headline: 'Нет затрат на турбину и DPF — Недорогие расходники ТО',
            strengths: [
              'Нет затрат на турбину и DPF помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Возрастной износ сайлентблоков подвески, тормозов и выхлопной системы требует плановых ежегодных трат.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-5mt': {
        transmissionDriveline: {
          en: {
            headline: 'Slick 5-Speed Manual Only — Longer Highway Revs vs 6-MT',
            strengths: [
              'Slick 5-Speed Manual Only matches this powertrain well for everyday driving.',
              'Longer Highway Revs vs 6-MT.'
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
            headline: 'Leichtes 5-Gang-Getriebe — Etwas kürzer übersetzt ab 130',
            strengths: [
              'Leichtes 5-Gang-Getriebe passt gut zur Motorcharakteristik im Alltag.',
              'Etwas kürzer übersetzt ab 130.'
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
            headline: 'Чёткая 5-ст. МКПП — Выше обороты на трассе без 6-й',
            strengths: [
              'Чёткая 5-ст. МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Выше обороты на трассе без 6-й.'
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
            headline: 'Proven Relays & Modules',
            strengths: [
              'Proven Relays & Modules keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Early Torque Steering Pull.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solide Relais & Schalter',
            strengths: [
              'Solide Relais & Schalter sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Frühe Lenkhilfe auf Spiel prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная базовая электрика',
            strengths: [
              'Надёжная базовая электрика упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить ранний датчик ЭУР.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Crisp Euro-Tuned Damping',
            strengths: [
              'Crisp Euro-Tuned Damping delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              'Thicker Tyre/Road Hum on Concrete.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Straff-dynamische Abstimmung',
            strengths: [
              'Straff-dynamische Abstimmung sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Spürbare Abrollgeräusche.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная упругая подвеска',
            strengths: [
              'Собранная упругая подвеска обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'Заметный гул шин по трассе.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Lowest Parts Complexity — Check Oil & Intake Flaps',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Check Oil & Intake Flaps.', 'Lowest Parts Complexity.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Simpelste Technik im GH — Ölstand & Saugrohrklappen im Blick',
            strengths: [
              'Simpelste Technik im GH hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Ölstand & Saugrohrklappen im Blick.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Простейшая конструкция — Следить за маслом и заслонками',
            strengths: [
              'Простейшая конструкция помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Следить за маслом и заслонками.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-6mt': {
        transmissionDriveline: {
          en: {
            headline: 'Crisp Sport 6-Speed Manual — Stout 2.5 Clutch & Halfshafts',
            strengths: [
              'Crisp Sport 6-Speed Manual matches this powertrain well for everyday driving.',
              'Stout 2.5 Clutch & Halfshafts.'
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
            headline: 'Präzises Sport-6-Gang — Kräftige 2.5-Kupplung & Wellen',
            strengths: [
              'Präzises Sport-6-Gang passt gut zur Motorcharakteristik im Alltag.',
              'Kräftige 2.5-Kupplung & Wellen.'
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
            headline: 'Спортивная чёткая 6-МКПП — Усиленное сцепление и приводы',
            strengths: [
              'Спортивная чёткая 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Усиленное сцепление и приводы.'
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
            headline: 'Updated 2010+ Steering Sensor',
            strengths: [
              'Updated 2010+ Steering Sensor keeps electrical diagnostics straightforward.',
              'Proven Japanese Switchgear.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Verbesserte Lenkung ab 2010',
            strengths: [
              'Verbesserte Lenkung ab 2010 sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Sehr solide Japan-Elektronik.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Доработанный ЭУР с 2010 г.',
            strengths: [
              'Доработанный ЭУР с 2010 г. упрощает диагностику и обслуживание электрооборудования.',
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
            headline: '2010+ Retuned Supple Ride',
            strengths: [
              '2010+ Retuned Supple Ride delivers pleasant everyday composure.',
              'Noticeable Road Noise Above 130.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Ab 2010 feiner abgestimmt',
            strengths: [
              'Ab 2010 feiner abgestimmt sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Hörbare Abrollgeräusche ab 130.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'С 2010 г. подвеска мягче',
            strengths: [
              'С 2010 г. подвеска мягче обеспечивает комфортную езду в повседневных поездках.',
              'Шум шин выше 130 км/ч.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'No Turbo / DPF / Injector Bills — Hydro Mount & 18" Tyre Costs',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Hydro Mount & 18" Tyre Costs.', 'No Turbo / DPF / Injector Bills.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Kein Turbo / DPF / Injektor — Hydrolager & 18-Zoll-Reifen',
            strengths: [
              'Kein Turbo / DPF / Injektor hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Hydrolager & 18-Zoll-Reifen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Нет турбины и форсунок DPF — Траты на 18" шины и опору',
            strengths: [
              'Нет турбины и форсунок DPF помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Траты на 18" шины и опору.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-6mt': {
        transmissionDriveline: {
          en: {
            headline: '6-MT • Heavy 330 Nm Flywheel — Budget DMF At 150k+ km',
            strengths: [
              '6-MT • Heavy 330 Nm Flywheel matches this powertrain well for everyday driving.',
              'Identical strong 2.2 block de-tuned for efficiency, extending dual-mass flywheel and front tyre life.'
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
            headline: '6-Gang • ZMS ab 150.000 km prüfen — Nur als Schaltgetriebe',
            strengths: [
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.',
              'Identischer 2.2-Block mit gedrosselter Spitzenlast, was ZMS, Kupplung und Vorderreifen schont.'
            ],
            watchouts: [
              '6-Gang • ZMS ab 150.000 km prüfen passt gut zur Motorcharakteristik im Alltag.',
              'Bei hoher Laufleistung Kupplungs-Greifpunkt prüfen und im Leerlauf auf ZMS-Klappern achten.'
            ],
            beforeYouBuy: [
              'Im kalten wie warmen Zustand zügig vom 1. in den 2. und 3. Gang schalten — ohne Kratzen.',
              'Kupplung im Leerlauf halb treten (ZMS-Test) und im 4. Gang stark beschleunigen (Rutschtest).'
            ]
          },
          ru: {
            headline: '6-МКПП • Маховик под 330 Н·м — Замена маховика ближе к 160 тыс.',
            strengths: [
              '6-МКПП • Маховик под 330 Н·м хорошо сочетается с данным двигателем в повседневной езде.',
              'Дефорсированный блок 2.2 дольше бережёт маховик, сцепление и передние шины.'
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
            headline: 'Proven Relays & Modules',
            strengths: [
              'Proven Relays & Modules keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check Early Torque Steering Pull.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solide Relais & Schalter',
            strengths: [
              'Solide Relais & Schalter sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Frühe Lenkhilfe auf Spiel prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная базовая электрика',
            strengths: [
              'Надёжная базовая электрика упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Проверить ранний датчик ЭУР.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Crisp Euro-Tuned Damping',
            strengths: [
              'Crisp Euro-Tuned Damping delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              'Thicker Tyre/Road Hum on Concrete.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Straff-dynamische Abstimmung',
            strengths: [
              'Straff-dynamische Abstimmung sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Spürbare Abrollgeräusche.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Собранная упругая подвеска',
            strengths: [
              'Собранная упругая подвеска обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'Заметный гул шин по трассе.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Belt + Copper Washers + Sump — DMF & Early DPF Expenses',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['DMF & Early DPF Expenses.', 'Belt + Copper Washers + Sump.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Zahnriemen + Kupferringe + ZMS — Höheres Wartungsrisiko im Alter',
            strengths: [
              'Zahnriemen + Kupferringe + ZMS hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Höheres Wartungsrisiko im Alter.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень ГРМ + шайбы + поддон — Маховик и ранний DPF недёшевы',
            strengths: [
              'Ремень ГРМ + шайбы + поддон помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Маховик и ранний DPF недёшевы.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedSpecs: {
      rustProtection: '@rustWatch',
      suspensionWear: '@suspDoubleWishbone',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Taut / Driver-Focused', de: 'Straff / Fahrerorientiert', ru: 'Упругая / Драйверская' },
      highwayNoise: { en: '~69 dB · Slight Tyre Hum', de: '~69 dB · Leichtes Abrollen', ru: '~69 дБ · Лёгкий шум шин' },
      cabinMaterials: { en: 'Clean Sporty Cockpit', de: 'Sportliches klares Cockpit', ru: 'Спортивный строгий салон' },
      controls: '@physButtons',
      turningCircle: '11.4 m',
      visibility: { en: 'Sleek Sedan · Low Nose', de: 'Flache Limousine · Gut', ru: 'Низкий силуэт · Неплохо' },
      euroNcap: '★★★★★ (2009)',
      safetyTech: { en: '✓ DSC · ✓ Opt. RVM Blind-Spot', de: '✓ DSC · ✓ Opt. Totwinkel-RVM', ru: '✓ DSC · ✓ Опц. контроль мёртвых зон' },
      rearRoom: { en: 'Generous Midsize Legroom', de: 'Viel Beinfreiheit (Mittelkl.)', ru: 'Просторный задний ряд' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Doors', de: '✓ 2× ISOFIX · Große Türen', ru: '✓ 2× ISOFIX · Удобные двери' },
      bootVolume: '519 L / 1,702 L',
      seatUtility: { en: '✓ Karakuri 60/40 Flat Fold', de: '✓ Karakuri 60/40 eben', ru: '✓ Karakuri 60/40 в ровный пол' },
      payloadRoof: '540 kg · 100 kg',
      driveline: { en: 'FWD (Low-Loss)', de: 'Frontantrieb (Effizient)', ru: 'Передний привод' },
      chassisFeel: { en: 'Sharp · Agile Midsize', de: 'Agil · Sehr präzises Einlenken', ru: 'Острое · Азартный седан' },
      tractionDiff: { en: 'FWD · DSC Stability', de: 'Frontantrieb · DSC', ru: 'Передний привод · DSC' },
      braking1000: '~36.5 m',
      brakeSetup: '@discs4',
      valueRetention: '@retMod',
      resaleDemand: '@demSteady'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mazda 6-Speed Manual (Crisp Short Throw) / 5-Speed Auto', de: 'Mazda 6-Gang-Schalter (knackig) / 5-Gang-Automatik', ru: '6-ст. МКПП Mazda (короткий ход) / 5-ст. АКПП' } }, { k: 'shiftQuality', v: { en: 'Mechanical Precise Gate · Durable 5-AT Torque Converter', de: 'Mechanisch exakt · Sehr robuste 5-Gang-Wandlerautomatik', ru: 'Чёткие переключения · Крепкий 5-ст. автомат' } }], note: { en: 'One of the sharpest-shifting manuals in the midsize class; the optional 5-speed automatic on petrols is old-school and reliable.', de: 'Einer der knackigsten Handschalter der Mittelklasse; die optionale 5-Gang-Wandlerautomatik bei Benzinern gilt als sehr robust.', ru: 'Одна из лучших по чёткости МКПП в классе; опциональный 5-ст. автомат на бензиновых версиях прост и долговечен.' } }, clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: {
        rustProtection: {
          specs: [
            { k: 'antiCorrosion', v: { en: 'Improved vs 1st-Gen GG, but Thin Factory Underbody Wax', de: 'Besser als 1. Gen GG, aber dünner Werks-Unterbodenschutz', ru: 'Лучше первого поколения GG, но тонкий заводской антикор' } },
            { k: 'watchAreas', v: { en: 'Inspect Rear Subframe, Rear Wheel Arches & Floor Seams', de: 'Hinterachsträger, hintere Radläufe & Unterbodenfalze prüfen', ru: 'Осмотрите задний подрамник, арки и швы днища' } }
          ],
          note: { en: 'Much less rust-prone than the 2002–2007 Mazda 6, yet salted winter roads still attack rear subframes and arches unless cavity-waxed.', de: 'Deutlich besser als der alte GG, aber Streusalz greift Hinterachsträger und Radläufe an — Hohlraumkonservierung lohnt sich.', ru: 'Гораздо устойчивее старого поколения GG, но без дополнительного антикора зимой ржавеют подрамник и задние арки.' }
        },
        suspensionWear: '@suspDoubleWishbone'
      },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Double-Wishbone Front · E-Type Multi-Link Rear', de: 'Doppelquerlenker vorn · E-Typ-Mehrlenkerachse hinten', ru: 'Двухрычажка спереди · Многорычажка E-Type сзади' } },
            { k: 'seatSupport', v: { en: 'Low Sporty Driving Position · Good Lateral Support', de: 'Tiefe sportliche Sitzposition · Guter Seitenhalt', ru: 'Низкая спортивная посадка · Хорошая боковая поддержка' } }
          ],
          note: { en: '2010 facelift softened sharp low-speed bumps while preserving crisp body control and highway poise.', de: 'Das 2010er Facelift federt kurze Stöße spürbar harmonischer ab, ohne die straffe Straßenlage zu verlieren.', ru: 'Рестайлинг 2010 года стал мягче на мелких неровностях, сохранив собранность на трассе.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~69 dB(A) at 130 km/h (Audible Road/Tyre Noise on 18")', de: '~69 dB(A) bei 130 km/h (Abrollgeräusch auf 18-Zoll hörbar)', ru: '~69 дБ(А) при 130 км/ч (Заметный шум шин на 18")' } },
            { k: 'acousticGlass', v: { en: 'Aerodynamic 0.27 Cd Shell · Modest Wheel-Arch Insulation', de: 'Windschnittige 0,27 cW · Mäßige Radhausdämmung', ru: 'Отличная аэродинамика 0,27 Cd · Средняя изоляция арок' } }
          ],
          note: { en: 'Low wind noise thanks to sleek aerodynamics, though coarse tarmac transmits more tyre hum than a Mondeo or C-Class.', de: 'Geringe Windgeräusche durch flache Form, auf rauem Asphalt aber etwas mehr Abrollgeräusch als Mondeo oder C-Klasse.', ru: 'Тихий по ветру благодаря обтекаемому кузову, но на шершавом асфальте слышнее шум колёсных арок.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashboardTrim', v: { en: 'Soft Upper Dash · Piano-Black Facelift Trim · Red/Blue Gauges', de: 'Weiches Oberteil · Klavierlack im Facelift · Sportliche Instrumente', ru: 'Мягкий верх панели · Глянцевые вставки · Чёткие приборы' } },
            { k: 'seatUpholstery', v: { en: 'Hard-Wearing Cloth or Half/Full Leather (Bose Audio Common)', de: 'Robuster Stoff oder Teil-/Vollleder (Bose-Sound oft verbaut)', ru: 'Прочная ткань или кожа (часто встречается акустика Bose)' } }
          ],
          note: { en: 'Driver-focused Japanese cockpit that ages cleanly; steering-wheel CF-Net buttons take a day to learn but work reliably.', de: 'Fahrerorientiertes Cockpit mit guter Langzeitqualität; die Lenkrad-Tasten sind nach kurzer Eingewöhnung intuitiv.', ru: 'Строгий и долговечный японский салон; кнопки на руле CF-Net требуют дня привыкания, но служат безотказно.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turnDiameter', v: { en: '11.4 m (Standard for 4.75 m Midsize Sedan)', de: '11,4 m (Üblich für 4,75-m-Mittelklasse)', ru: '11,4 м (Стандарт для седана длиной 4,75 м)' } },
            { k: 'steeringType', v: { en: 'Electric Power Steering (EPS) · Crisp Centre Feel', de: 'Elektrische Servolenkung (EPS) · Präzise Mittellage', ru: 'Электроусилитель (ЭУР) · Точный ноль на руле' } }
          ],
          note: { en: 'Long 4.75 m body needs standard midsize parking spaces; front and rear park sensors are common on mid/high trims.', de: 'Die 4,75 m Länge brauchen normale Mittelklasse-Parklücken; Einparkhilfe vorn und hinten ist weit verbreitet.', ru: 'Длина 4,75 м требует стандартного места для D-класса; парктроники спереди и сзади есть в большинстве версий.' }
        },
        visibility: {
          specs: [
            { k: 'allRoundView', v: { en: 'Good Forward Sightlines · Sloping Rear Glass', de: 'Gute Sicht nach vorn · Flache Heckscheibe', ru: 'Хороший обзор вперёд · Покатое заднее стекло' } },
            { k: 'rearView', v: { en: 'High Tail Deck Benefits From Park Sensors', de: 'Hohes Heck profitiert von Einparksensoren', ru: 'Высокая корма — парктроники очень полезны' } }
          ],
          note: { en: 'Low bonnet makes front corners easy to place, while the high boot lid makes rear parking sensors valuable.', de: 'Die flache Motorhaube lässt sich gut abschätzen; hinten helfen Parksensoren beim hohen Kofferraumdeckel.', ru: 'Передние габариты чувствуются отлично, а сзади при парковке выручают датчики.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'crashRating', v: { en: '5 Stars Euro NCAP (2009) · High-Strength Lightweight Shell', de: '5 Sterne Euro NCAP (2009) · Leichte hochfeste Karosserie', ru: '5 звёзд Euro NCAP (2009) · Лёгкий высокопрочный кузов' } },
            { k: 'bodyStructure', v: { en: '6 Airbags + Active Front Headrests + Bi-Xenon AFS Option', de: '6 Airbags + aktive Kopfstützen + optionales Bi-Xenon-Kurvenlicht', ru: '6 подушек + активные подголовники + опц. биксенон AFS' } }
          ],
          note: { en: 'Full 5-star Euro NCAP protection in a remarkably light (~1,380 kg petrol) chassis.', de: 'Volle 5 Sterne im Euro NCAP trotz erfreulich geringem Fahrzeuggewicht (~1.380 kg Benziner).', ru: 'Полноценные 5 звёзд Euro NCAP при удивительно лёгком кузове (~1 380 кг у бензина).' }
        },
        safetyTech: {
          specs: [
            { k: 'activeSafety', v: { en: 'DSC Stability, TCS, EBA & Hill-Launch Assist (Facelift)', de: 'DSC-Stabilität, TCS, Bremsassistent & Berganfahrhilfe', ru: 'DSC, TCS, экстренное торможение и помощь на подъёме' } },
            { k: 'driverAssists', v: { en: 'Rare Era Option: RVM Radar Blind-Spot Monitoring', de: 'Seltene Option seiner Zeit: RVM-Radar-Totwinkelwarner', ru: 'Редкая для тех лет опция: радар слепых зон RVM' } }
          ],
          note: { en: 'Mazda was one of the first mainstream brands to offer radar blind-spot monitoring (RVM) in this price class.', de: 'Mazda bot als einer der ersten Volumenhersteller den RVM-Totwinkelwarner per Radar in dieser Klasse an.', ru: 'Mazda одной из первых в массовом сегменте предложила радарный контроль слепых зон (RVM).' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'rearSpace', v: { en: 'Generous Rear Legroom · Contoured 2-Adult Outer Seats', de: 'Großzügige Beinfreiheit hinten · Bequeme Außensitze', ru: 'Много места для ног сзади · Удобные крайние места' } },
            { k: 'frontErgo', v: { en: 'Long-Legged Front Ergonomics · Wide Adjustment Range', de: 'Sehr gute Ergonomie vorn · Weiter Verstellbereich', ru: 'Отличная посадка водителя · Большой диапазон регулировок' } }
          ],
          note: { en: 'Long 2,725 mm wheelbase gives adults comfortable knee room on long motorway trips.', de: 'Der lange 2.725-mm-Radstand bietet Erwachsenen im Fond entspannte Kniefreiheit auf Langstrecken.', ru: 'Длинная база 2 725 мм обеспечивает взрослым пассажирам комфортный запас места для коленей.' }
        },
        isofixEntry: {
          specs: [
            { k: 'childSeats', v: { en: '2× Outer Rear ISOFIX + Top-Tether Anchors', de: '2× ISOFIX außen hinten + Top-Tether', ru: '2× ISOFIX сзади + Top-Tether' } },
            { k: 'doorAccess', v: { en: 'Wide Rear Door Aperture · Lower Sedan Roofline', de: 'Weite hintere Türöffnung · Niedrigere Limousinen-Dachlinie', ru: 'Широкий дверной проём · Низкая крыша седана' } }
          ],
          note: { en: 'Easy ISOFIX access with plenty of depth for rear-facing child seats without cramping front passengers.', de: 'Gut erreichbare ISOFIX-Bügel und genug Tiefe für Reboarder, ohne die Vordersitze ganz nach vorn zu schieben.', ru: 'Удобные скобы ISOFIX и достаточно места для установки крупного детского кресла.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootCapacity', v: { en: '519 L (Seats Up) / 1,702 L (Folded Hatchback)', de: '519 L (Normal) / 1.702 L (Umgeklappt Fließheck)', ru: '519 л (обычный) / 1 702 л (сложено лифтбек)' } },
            { k: 'loadingLip', v: { en: 'Deep Wide Cargo Bay · Easy-Access Liftback Option', de: 'Tiefer breiter Laderaum · Riesige Öffnung beim Fließheck', ru: 'Глубокий широкий багажник · Огромный проём у лифтбека' } }
          ],
          note: { en: '519 L rivals bigger executive cars; the 5-door liftback version combines sedan looks with near-estate practicality.', de: '519 L liegen auf Oberklasse-Niveau; das 5-türige Fließheck verbindet Limousinen-Optik mit Kombi-Nutzwert.', ru: '519 л — один из лучших показателей в классе; версия лифтбек сочетает стиль седана с практичностью универсала.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingSystem', v: { en: '✓ Karakuri One-Touch Levers in Boot · Flat Load Floor', de: '✓ Karakuri-Hebel im Kofferraum · Ebene Ladefläche', ru: '✓ Система Karakuri (рычаги в багажнике) · Ровный пол' } }
          ],
          note: { en: 'Pulling the Karakuri levers in the boot drops the rear backrests flat in one motion.', de: 'Ein Zug an den Karakuri-Hebeln im Kofferraum legt die Rückbank sofort eben um.', ru: 'Рычаги Karakuri в багажнике складывают спинку дивана в ровный пол одним движением.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: { en: '~540 kg (515–555 kg Depending on Engine)', de: '~540 kg (515–555 kg je nach Motor)', ru: '~540 кг (515–555 кг в зависимости от мотора)' } },
            { k: 'roofLoad', v: { en: '100 kg Approved Dynamic Roof Load (Class-Leading)', de: '100 kg zugelassene Dachlast (Klassenbestwert)', ru: '100 кг допустимая нагрузка на крышу (лучше класса)' } }
          ],
          note: { en: 'Rare 100 kg roof-load rating easily handles heavy roof boxes, kayaks, or multiple bikes.', de: 'Seltene 100 kg Dachlast tragen problemlos große Dachboxen, Kajaks oder mehrere Fahrräder.', ru: 'Редкие 100 кг нагрузки на крышу спокойно выдерживают тяжёлый бокс или несколько велосипедов.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'steeringFeel', v: { en: 'Direct, Communicative Steering · Light ~1,400 kg Curb Weight', de: 'Direkte, präzise Lenkung · Geringes Leergewicht (~1.400 kg)', ru: 'Острый, понятный руль · Лёгкий кузов (~1 400 кг)' } },
            { k: 'cornering', v: { en: 'Double-Wishbone Front Gives Best-in-Class Turn-In', de: 'Doppelquerlenker vorn sorgen für klassenbestes Einlenken', ru: 'Передняя двухрычажка даёт лучшую в классе управляемость' } }
          ],
          note: { en: 'Noticeably lighter and nimbler than rival midsize sedans — genuinely enjoyable on winding B-roads.', de: 'Spürbar leichter und handlicher als klassische Mittelklasse-Limousinen — macht auf kurvigen Landstraßen richtig Freude.', ru: 'Заметно легче и проворнее конкурентов D-класса — дарит удовольствие на извилистых дорогах.' }
        },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retMod', resaleDemand: '@demSteady' }
    },
    sharedGearboxes: {
      '5-mt-sc': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'Mazda G35M-R · Manual · Single Clutch', de: 'Mazda G35M-R · Schaltgetriebe · Kupplung', ru: 'Mazda G35M-R · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@singleClutch' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mazda G35M-R 5-Speed Manual', de: 'Mazda G35M-R 5-Gang-Schaltgetriebe', ru: '5-ст. МКПП Mazda G35M-R' } }], note: { en: 'Simple mechanical 5-speed gearbox without a dual-mass flywheel.', de: 'Einfaches 5-Gang-Schaltgetriebe ohne Zweimassenschwungrad.', ru: 'Простая 5-ст. механика без двухмассового маховика.' } },
            clutchDmf: '@clutchSingle'
          }
        },
        dossier: {
          en: {
            headline: 'Mazda G35M-R 5-Speed Manual — Reliable & Affordable, Higher Highway Revs',
            strengths: ['Zero DMF or automatic complexity; clutch replacement stays inexpensive (€420–€650).'],
            watchouts: ['Missing 6th gear raises motorway rpm; check 2nd-gear synchro when cold.'],
            beforeYouBuy: ['Test cold 1→2 shifts and listen for release-bearing noise.']
          },
          de: {
            headline: 'Mazda G35M-R 5-Gang-Getriebe — Günstig & robust, ohne 6. Gang',
            strengths: ['Kein ZMS und günstiger Kupplungstausch (420–650 €).'],
            watchouts: ['Höhere Autobahndrehzahl ohne 6. Gang; 2.-Gang-Synchronring kalt prüfen.'],
            beforeYouBuy: ['Kalte 1→2-Schaltvorgänge und Ausrücklager im Leerlauf testen.']
          },
          ru: {
            headline: 'Механика Mazda G35M-R 5-МКПП — Надёжная, но без 6-й передачи',
            strengths: ['Нет ДММ и недорогая замена сцепления (€420–650).'],
            watchouts: ['Повышенные обороты на трассе без 6-й передачи; проверьте 2-ю передачу на холодную.'],
            beforeYouBuy: ['Проверьте включение 1→2 на холодную и отсутствие шума выжимного.']
          }
        }
      },
      '6-mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Mazda G66M-R · Manual · Single Clutch', de: 'Mazda G66M-R · Schaltgetriebe · Kupplung', ru: 'Mazda G66M-R · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mazda G66M-R 6-Speed Manual', de: 'Mazda G66M-R 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП Mazda G66M-R' } }], note: { en: 'Crisp-shifting 6-speed petrol manual with single-mass clutch.', de: 'Präzises 6-Gang-Benziner-Getriebe ohne Zweimassenschwungrad.', ru: 'Чёткая 6-ст. механика с одномассовым сцеплением.' } },
            clutchDmf: '@clutchSingle'
          }
        },
        dossier: {
          en: {
            headline: 'Mazda G66M-R 6-Speed Manual — Engaging Shift, No DMF Cost',
            strengths: ['Short, mechanical throw and durable internals without DMF replacement costs.'],
            watchouts: ['Occasionally stiff 1st/2nd gear shift when transmission oil is cold.'],
            beforeYouBuy: ['Test cold 1→2 shifts and smooth clutch engagement.']
          },
          de: {
            headline: 'Mazda G66M-R 6-Gang-Getriebe — Sportliches Gefühl ohne ZMS',
            strengths: ['Kurze Schaltwege und solide Mechanik ohne ZMS-Folgekosten.'],
            watchouts: ['Im kalten Zustand manchmal etwas hakelig vom 1. in den 2. Gang.'],
            beforeYouBuy: ['Kaltes Durchschalten 1→2 und Kupplungsdruckpunkt prüfen.']
          },
          ru: {
            headline: 'Механика Mazda G66M-R 6-МКПП — Чёткие ходы без ДММ',
            strengths: ['Короткие ходы рычага и надёжная конструкция без двухмассового маховика.'],
            watchouts: ['На холодную 1→2 может включаться чуть туго до прогрева масла.'],
            beforeYouBuy: ['Проверьте включение 1-й и 2-й передач на холодном автомобиле.']
          }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Mazda G66M-R · Manual + DMF', de: 'Mazda G66M-R · Schaltgetriebe + ZMS', ru: 'Mazda G66M-R · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mazda G66M-R 6-Speed Manual (Diesel)', de: 'Mazda G66M-R 6-Gang-Schaltgetriebe (Diesel)', ru: '6-ст. МКПП Mazda G66M-R (Дизель)' } }], note: { en: 'Reinforced 6-speed manual for 330–400 Nm diesel torque; uses a dual-mass flywheel.', de: 'Verstärktes 6-Gang-Getriebe für 330–400 Nm Diesel-Drehmoment mit ZMS.', ru: 'Усиленная 6-ст. механика под дизельный момент 330–400 Н·м с ДММ.' } },
            clutchDmf: '@clutchDmf'
          }
        },
        dossier: {
          en: {
            headline: 'Mazda G66M-R 6-MT — Handles 400 Nm Diesel Torque, Watch DMF',
            strengths: ['Strong gearset with zero automatic transmission complexity.'],
            watchouts: ['High diesel torque wears the dual-mass flywheel around 160k–200k km (€950–€1,400).'],
            beforeYouBuy: ['Test hard 4th-gear pull from 1,800 rpm and listen for idle DMF chatter.']
          },
          de: {
            headline: 'Mazda G66M-R 6-Gang — Hält 400 Nm Diesel-Drehmoment, ZMS prüfen',
            strengths: ['Standfestes Schaltgetriebe ohne Automatik-Risiko.'],
            watchouts: ['Hohes Drehmoment verschleißt das ZMS ab ca. 160–200 Tkm (950–1.400 €).'],
            beforeYouBuy: ['Im 4. Gang ab 1.800 U/min voll beschleunigen und auf ZMS-Rasseln im Leerlauf achten.']
          },
          ru: {
            headline: 'Механика Mazda G66M-R 6-МКПП — Держит до 400 Н·м, контроль ДММ',
            strengths: ['Крепкая механическая коробка без рисков автомата.'],
            watchouts: ['Высокий дизельный момент изнашивает ДММ к 160–200 тыс. км (€950–1 400).'],
            beforeYouBuy: ['Проверьте сцепление на 4-й передаче с 1 800 об/мин и стук маховика на холостых.']
          }
        }
      },
      '5-at': {
        category: 'automatic',
        label: { en: '5-Speed Torque Auto', de: '5-Stufen-Wandlerautomatik', ru: '5-ст. Автомат' },
        shortLabel: { en: '5-AT', de: '5-AT', ru: '5-АКПП' },
        subLabel: { en: 'Mazda FS5A-EL · Hydraulic Torque Converter', de: 'Mazda FS5A-EL · Wandlerautomatik', ru: 'Mazda FS5A-EL · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto5', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.4,
            badges: { en: ['Proven FS5A-EL 5-AT', 'Hydraulic Torque Converter'], de: ['Robuste FS5A-EL 5-AT', 'Wandlerautomatik'], ru: ['Надёжная 5-АКПП FS5A-EL', 'Гидротрансформатор'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mazda FS5A-EL 5-Speed Torque Auto', de: 'Mazda FS5A-EL 5-Stufen-Wandlerautomatik', ru: '5-ст. АКПП Mazda FS5A-EL' } }], note: { en: 'Durable 5-speed hydraulic automatic; change Mazda M-V ATF every 60,000 km.', de: 'Solide 5-Stufen-Wandlerautomatik; ATF M-V alle 60.000 km wechseln.', ru: 'Надёжная 5-ст. классическая АКПП; замена ATF M-V каждые 60 тыс. км.' } },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: {
            headline: 'Mazda FS5A-EL 5-Speed Auto — Smooth & Reliable, Softer Acceleration',
            strengths: ['Classic torque-converter reliability with zero dry-clutch headaches.'],
            watchouts: ['Only 5 ratios add ~0.7–0.8 s to 0–100 and ~0.7 L/100 km fuel burn.'],
            beforeYouBuy: ['Check clean red ATF M-V fluid and smooth 2→3 / 3→4 upshifts.']
          },
          de: {
            headline: 'Mazda FS5A-EL 5-Stufen-Automatik — Ruhig & solide, etwas langsamer',
            strengths: ['Klassische Wandler-Haltbarkeit ohne Doppelkupplungs-Risiken.'],
            watchouts: ['5 Gänge kosten ~0,7–0,8 s Sprintzeit und ~0,7 L/100 km Mehrverbrauch.'],
            beforeYouBuy: ['Klares rotes ATF und weiches Schalten 2→3 / 3→4 prüfen.']
          },
          ru: {
            headline: 'Автомат Mazda FS5A-EL 5-АКПП — Надёжный классический автомат',
            strengths: ['Проверенный гидротрансформатор без проблем сухих роботов.'],
            watchouts: ['5 передач добавляют ~0,7–0,8 с к разгону и ~0,7 л/100 км расхода.'],
            beforeYouBuy: ['Проверьте чистоту масла ATF M-V и мягкость переключений 2→3 / 3→4.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: '5-AT automatic transmission fluid change (ATF M-V)', de: '5-AT Getriebeölwechsel (ATF M-V)', ru: 'Замена масла 5-АКПП (Mazda ATF M-V)' }, cost: '€160–240' }
          ]
        }
      }
    },
    engines: [
      {
        id: '2.0-mzr-disi',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: '5-at',
            estUsedPrice: '€7,700',
            specOverrides: { sprint0100: '10.7 s', topSpeed: '210 km/h', realWorldFuel: '8.2 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.2,
                badges: {
                  en: ['0–100 km/h: 10.7 s (5-AT)', '210 km/h Top Speed'],
                  de: ['0–100 km/h: 10,7 s (5-AT)', '210 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,7 s (5-AT)', 'Макс. 210 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.3,
                badges: {
                  en: ['8.2 L/100km (5-AT)'],
                  de: ['8,2 L/100km (5-AT)'],
                  ru: ['8,2 L/100km (5-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-conv-auto',
        isDefault: true,
        fuelType: 'petrol',
        hp: 155,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.0 MZR-DISI',
        fullName: '2010 Mazda 6 2.0 MZR-DISI',
        engineBadge: '2.0L MZR-DISI • 155 HP',
        engineSubLabel: {
          en: '2.0L MZR-DISI Direct-Injection Chain Petrol (03/2010–12/2012) • 6-MT / Opt. 5-AT • 193 Nm',
          de: '2.0L MZR-DISI Direkteinspritzer-Kettenmotor (03/2010–12/2012) • 6-Gang / Opt. 5-AT • 193 Nm',
          ru: '2.0L MZR-DISI цепной с прямым впрыском (03/2010–12/2012) • 6-МКПП / Опц. 5-АКПП • 193 Н·м'
        },
        rarityLabel: {
          en: 'BEST ALL-ROUNDER',
          de: 'BESTER ALLROUNDER',
          ru: 'ЛУЧШИЙ ВЫБОР'
        },
        originalMsrp: {
          en: '€25,690 New',
          de: '25.690 € Neu',
          ru: '€25 690 новый'
        },
        estUsedPrice: '€6,900',
        perkLabel: {
          en: '✦ Class-Best Steering Precision • Reliable Chain 2.0 Petrol • 519L Boot & 2010+ Facelift Upgrades',
          de: '✦ Beste Lenkpräzision seiner Klasse • Robuster 2.0 Kettenmotor • 519L Kofferraum & Facelift',
          ru: '✦ Эталонная управляемость в классе • Надёжный цепной 2.0 • Багажник 519 л и рестайлинг'
        },
        remarkablePositives: {
          en: [
            'RAZOR-SHARP STEERING & CHASSIS',
            'RELIABLE 2010+ FACELIFT CHAIN 2.0',
            'NO TURBO OR DIESEL FILTER WORRIES',
            '519L SEDAN BOOT + FOLD-FLAT LEVERS',
            'IMPROVED 2010+ RIDE & CABIN TRIM',
            'GREAT DRIVER SEATING POSITION'
          ],
          de: [
            'MESSERSCHARFES FAHRWERK & LENKUNG',
            'ROBUSTER 2010+-KETTENBENZINER',
            'KEIN TURBOLADER ODER PARTIKELFILTER',
            '519L KOFFERRAUM + FERNENTRIEGELUNG',
            'FEINERES 2010+-FACELIFT-FAHRWERK',
            'HERVORRAGENDE SITZPOSITION'
          ],
          ru: [
            'ОБРАЗЦОВАЯ РУЛЁЖКА И ШАССИ',
            'НАДЁЖНЫЙ ЦЕПНОЙ РЕСТАЙЛ 2010+',
            'БЕЗ ТУРБИНЫ И САЖЕВОГО ФИЛЬТРА',
            'БАГАЖНИК 519 Л + СКЛАДЫВАНИЕ С РЫЧАГА',
            'УЛУЧШЕННАЯ ПОДВЕСКА С 2010 Г.',
            'ИДЕАЛЬНАЯ ПОСАДКА ВОДИТЕЛЯ'
          ]
        },
        notableNegatives: {
          en: [
            'CHECK REAR SUBFRAME & ARCH RUST',
            'AUDIBLE ROAD NOISE OVER 130 KM/H',
            'NARROWER SEDAN TRUNK APERTURE',
            'PLAIN INTERIOR SCREEN & HARD TRIM'
          ],
          de: [
            'ROST AN HINTERACHSE & RADLÄUFEN',
            'ABROLLGERÄUSCHE AB 130 KM/H LAUTER',
            'KLEINERE STUFENHECK-LADELUKE',
            'SCHLICHTES INFO-DISPLAY OBEN'
          ],
          ru: [
            'СКЛОННОСТЬ К РЖАВЧИНЕ АРОК И ДНИЩА',
            'ШУМ ШИН НА ТРАССЕ ВЫШЕ 130 КМ/Ч',
            'УЗКИЙ ПРОЁМ БАГАЖНИКА СЕДАНА',
            'ПРОСТОВАТЫЙ МОНОХРОМНЫЙ ЭКРАН'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.3,
          comfortCabin: 7.7,
          spacePracticality: 8.3,
          performanceDynamics: 7.5,
          runningCostsTco: 8.0
        },
        specOverrides: {
          engineName: { en: '2.0L I4 MZR-DISI (Chain)', de: '2.0L Reihenvierzylinder DISI', ru: '2.0L R4 MZR-DISI (Цепь)' },
          forcedInduction: '@na',
          injection: '@direct',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,500 kg',
          sprint0100: '10.0 s',
          topSpeed: '217 km/h',
          peakTorque: '193 Nm @ 4,500 rpm',
          passingPunch: { en: 'Clean Linear Mid-Range', de: 'Sauberer linearer Durchzug', ru: 'Ровная линейная тяга' },
          realWorldFuel: '7.5 L/100km',
          tankRange: '64 L (~850 km)',
          euroNorm: 'Euro 5 (Petrol)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLow'
        },
        subStats: {
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.8,
            badges: {
              en: ['Updated 2010+ Steering Sensor', 'Proven Japanese Switchgear'],
              de: ['Verbesserte Lenkung ab 2010', 'Sehr solide Japan-Elektronik'],
              ru: ['Доработанный ЭУР с 2010 г.', 'Надёжная японская электрика']
            }
          },
          rideNoiseComfort: {
            score: 7.3,
            badges: {
              en: ['2010+ Retuned Supple Ride', 'Noticeable Road Noise Above 130'],
              de: ['Ab 2010 feiner abgestimmt', 'Hörbare Abrollgeräusche ab 130'],
              ru: ['С 2010 г. подвеска мягче', 'Шум шин выше 130 км/ч']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.0,
            badges: {
              en: ['540 kg Payload', '1,500 kg Braked Towing'],
              de: ['540 kg Zuladung', '1,500 kg Anhängelast'],
              ru: ['Нагрузка 540 кг', 'Прицеп до 1,500 кг']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Class-Best Sharp Steering', 'Double-Wishbone Front Precision'],
              de: ['Klassenbeste präzise Lenkung', 'Doppelquerlenker-Vorderachse'],
              ru: ['Лучшая рулёжка в D-классе', 'Двухрычажная передняя подвеска']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 9.0,
            badges: {
              en: ['Facelift Chain 2.0 Petrol', 'No Turbo • Clean Direct Injection'],
              de: ['Robuster Facelift-Kettenmotor', 'Ohne Turbo • Direkteinspritzer'],
              ru: ['Надёжный цепной 2.0 рестайлинг', 'Без турбины • Прямой впрыск']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'LF-VD (MZR-DISI) · 1,999 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Direct Injection + i-stop (Facelift)', de: 'Reihenvierzylinder Alu · Direkteinspritzung + i-stop', ru: 'Рядный 4-цил. алюминий · Прямой впрыск + i-stop' } }], note: { en: 'Facelift Euro 5 sweet spot: crisp 155 HP naturally aspirated chain petrol with lower fuel burn and strong long-term reliability.', de: 'Der Facelift-Sweetspot: spritziger Euro-5-Ketten-Sauger mit 155 PS, geringerem Verbrauch und sehr hoher Langzeit-Zuverlässigkeit.', ru: 'Удачный рестайлинговый атмосферник Euro 5: цепной привод, 155 л.с., умеренный расход и высокая надёжность.' } },
              forcedInduction: '@naNoTurbo',
              injection: '@directInjPetrol',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Facelift 2.0L MZR-DISI Chain Petrol— Sharp, Crisp & Reliable Sweet Spot of the GH Series',
                strengths: [
                  'Introduces direct injection for cleaner mid-range pull and better economy, alongside upgraded steering bushings and smoother rear ride damping.',
                  'Zero Piston-Ring Burn Issues: Uses improved oil drainage compared to early 2008 1.8/2.0 cars, happily passing 250,000+ km with annual oil changes.'
                ],
                watchouts: [
                  'Direct injection gradually coats intake valves on short city runs— occasional highway drives and an intake clean around 120k–150k km keep power sharp.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Kneel down with a torch and check the rear suspension frame and inside edges of the rear wheel arches— early underbody wax saves thousands later.',
                  'Turn the steering wheel slowly at standstill: 2010+ cars improved the steering rack, so feel for zero pulling to one side and crisp return-to-center.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual fresh oil + wax-seal rear subframe & wheel arch seams against salt',
                    cost: '€180–290',
                    ifIgnored: 'Unsealed underbody metal begins rusting early in wet salted winters',
                    damageCost: '€900–1,700'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace iridium spark plugs, change 5-AT oil (if auto) & check 6-yr belt/hoses',
                    cost: '€260–420',
                    ifIgnored: 'Worn plugs strain ignition coils & age-cracked drive belt can snap',
                    damageCost: '€1,000–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean direct-injection intake valve carbon & grease front brake slide pins',
                    cost: '€300–480',
                    ifIgnored: 'Seized front brake pins warp discs & soot-choked valves dull acceleration',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Check timing chain stretch, replace clutch kit (MT) & aging thermostat housing',
                    cost: '€620–980',
                    ifIgnored: 'Cracked aged plastic coolant flange leaks coolant & slipping clutch strands car',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace water pump, alternator belt tensioner & rusty rear suspension arms',
                    cost: '€480–820',
                    ifIgnored: 'Seized rear camber bolts & perished rubber bushings wear out tyres fast',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Renew aging coolant hoses, right rubber engine mount & rear exhaust box',
                    cost: '€450–740',
                    ifIgnored: 'Brittle old hoses split under heat & sagging engine mount shakes steering wheel',
                    damageCost: '€1,100–1,800'
                  }
                ]
              },
              de: {
                headline: 'Facelift-2.0L-Kettenbenziner (MZR-DISI)— der ausgewogenste & fahraktivste Mazda 6 GH',
                strengths: [
                  'Spricht dank Direkteinspritzung sparsamer und spritziger an, dazu straffere Lenkungsbuchsen und besseres Abrollverhalten.',
                  'Überarbeitete Ölversorgung vermeidet den Ölverbrauch früherer Jahre— ideal für 250.000+ km.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Die Technik ist extrem haltbar; kritisch sind vor allem Rost an Hinterachsträger, hinteren Radläufen und Schwellern.',
                  'Durch Direkteinspritzung lagern kurze Stadtfahrten über 120.000 km Ruß an den Einlassventilen ab.'
                ],
                beforeYouBuy: [
                  'Mit Taschenlampe unter das Heck schauen: Hinterachsträger und innere Radlaufkanten gründlich auf Blasenrost prüfen (Konservierung lohnt sich!).',
                  'Beim Kaltstart auf ruhigen Lauf der Steuerkette achten und prüfen, ob der 2. und 3. Gang des 6-Gang-Getriebes sauber einrasten.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlicher Ölwechsel + Hinterachse & Radläufe mit Wachs versiegeln',
                    cost: '180–290 €',
                    ifIgnored: 'Ungeschützte Falze und Hinterachsträger setzen früh Streusalz-Rost an',
                    damageCost: '900–1.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Iridium-Kerzen, Automatiköl (falls 5-AT) & 6-J.-Keilriemen/Schläuche prüfen',
                    cost: '260–420 €',
                    ifIgnored: 'Alte Kerzen belasten Zündspulen & poröser Riemen reißt altersbedingt',
                    damageCost: '1.000–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Einlassventile von Ruß reinigen & vordere Bremssattel-Bolzen fetten',
                    cost: '300–480 €',
                    ifIgnored: 'Festsitzende Führungsbolzen verziehen Bremsscheiben & Ruß kostet Leistung',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Steuerkette prüfen, Kupplung (Schalter) & alterndes Kunststoff-Thermostat tauschen',
                    cost: '620–980 €',
                    ifIgnored: 'Spröder Kunststoffstutzen verliert Kühlwasser & verschlissene Kupplung rutscht',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Wasserpumpe, Riemenspanner & angerostete Hinterachs-Lenker/Buchsen erneuern',
                    cost: '480–820 €',
                    ifIgnored: 'Festgerostete Exzenterschrauben machen Achsvermessung extrem teuer',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Alternde Kühlschläuche, rechtes Motorlager & Endschalldämpfer auffrischen',
                    cost: '450–740 €',
                    ifIgnored: 'Poröse Schläuche reißen unter Last & gealtertes Hydrolager dröhnt',
                    damageCost: '1.100–1.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Рестайлинговый цепной 2.0 MZR-DISI— самый сбалансированный и ресурсный мотор Mazda 6 GH',
                strengths: [
                  'Прямой впрыск снизил расход и оживил середину, а подвеска и рулевое стали комфортнее и точнее.',
                  'Доработанные поршни спокойно выхаживают 250 000+ км при регулярном масле.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'По технике машина очень крепкая, но задние арки, пороги и подрамник боятся зимних реагентов.',
                  'Прямой впрыск со временем копит отложения в пробках— раз в 120–140 тыс. км желательна чистка.'
                ],
                beforeYouBuy: [
                  'На ровной дороге отпустите руль: машина 2010+ года должна ехать прямо без тяги в сторону (на дорестайле рейка слабее).',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.',
                  'Проверить щуп масла и расширительный бачок— жидкости должны быть чистыми без эмульсии.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена масла + антикор задних арок и подрамника',
                    cost: '€180–290',
                    ifIgnored: 'Без антикора кромки арок и задний подрамник быстро ржавеют от соли',
                    damageCost: '€900–1 700'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Иридиевые свечи, масло 5-АКПП (на автомате) + осмотр ремня и шлангов (6 лет)',
                    cost: '€260–420',
                    ifIgnored: 'Уставшие свечи выбивают катушки, а старый ремень трескается к 6 годам',
                    damageCost: '€1 000–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Чистка нагара впускных клапанов и смазка направляющих передних суппортов',
                    cost: '€300–480',
                    ifIgnored: 'Закисшие суппорты перегревают и ведут тормозные диски, а нагар душит мотор',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Проверить цепь ГРМ, заменить сцепление (МКПП) и стареющий термостат',
                    cost: '€620–980',
                    ifIgnored: 'Хрупкий от возраста пластиковый термостат даёт течь, а сцепление буксует',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить помпу, ролик натяжителя и закисшие рычаги/болты задней подвески',
                    cost: '€480–820',
                    ifIgnored: 'Прикипевшие развальные болты требуют срезания рычагов при ремонте',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Обновить стареющие патрубки охлаждения, правую гидроопору ДВС и глушитель',
                    cost: '€450–740',
                    ifIgnored: 'Просевшая опора передаёт вибрацию на руль, а старые шланги текут',
                    damageCost: '€1 100–1 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.7,
            badges: {
              en: ['Crisp 6-MT / Tough 5-Speed Auto', 'Durable Driveshafts & Clutch'],
              de: ['Präzises 6-Gang / Robuste 5-AT', 'Haltbare Wellen & Kupplung'],
              ru: ['Чёткая 6-МКПП / Крепкая 5-АКПП', 'Выносливые приводы и сцепление']
            }
          },
          accelerationOvertaking: {
            score: 5.9,
            badges: {
              en: ['0–100 km/h: 10.0 s', '217 km/h Top Speed'],
              de: ['0–100 km/h: 10,0 s', '217 km/h Spitze'],
              ru: ['0–100 км/ч: 10,0 с', 'Макс. 217 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.0,
            badges: {
              en: ['193 Nm • Clean Linear Pull', 'Direct Injection Sharper Mid-Range'],
              de: ['193 Nm • Sauberer Durchzug', 'DISI ab 3.000 U/min spritzig'],
              ru: ['193 Н·м • Ровная тяга', 'Прямой впрыск живее в середине']
            }
          },
          efficiencyFuel: {
            score: 7.0,
            badges: {
              en: ['7.5 L/100km', '159 g/km CO2 (Euro 5)'],
              de: ['7,5 L/100km', '159 g/km CO2 (Euro 5)'],
              ru: ['7,5 л/100 км', '159 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 8.0,
            badges: {
              en: ['Fair 2.0L Euro 5 Petrol Tax', 'Sensible Midsize Sedan Cover'],
              de: ['Faire 2.0-Euro-5-Steuer', 'Günstige Mittelklasse-Tarife'],
              ru: ['Умеренный налог за 2,0 Евро-5', 'Доступная страховка седана']
            }
          },
          maintenanceRepairCosts: {
            score: 8.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000–80,000 km', de: 'Alle 60.000–80.000 km', ru: 'Каждые 60–80 тыс. км' }, action: { en: 'Change 6-MT or 5-AT gearbox oil & inspect auxiliary belt', de: '6-Gang- oder 5-AT-Getriebeöl wechseln & Keilrippenriemen prüfen', ru: 'Замена масла в 6-МКПП или 5-АКПП и проверка приводного ремня' }, cost: '€140–250' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace iridium spark plugs & flush FL22 long-life coolant', de: 'Iridium-Zündkerzen wechseln & FL22-Kühlmittel erneuern', ru: 'Замена иридиевых свечей и антифриза FL22' }, cost: '€170–260' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Underbody / rear subframe rust-proofing & thermostat housing check', de: 'Unterboden-/Hinterachs-Rostvorsorge & Thermostat prüfen', ru: 'Антикор заднего подрамника и проверка термостата' }, cost: '€260–550', risk: { en: 'Advanced subframe rust fails safety inspection; stuck-open thermostat hurts MPG', de: 'Durchgerosteter Achsträger scheitert bei der HU; offenes Thermostat erhöht Verbrauch', ru: 'Сквозная коррозия подрамника; заклинивший термостат повышает расход' }, damage: '€1,100–1,800' },
                { when: { en: '120,000–170,000 km', de: '120.000–170.000 km', ru: '120 000–170 000 км' }, action: { en: 'DISI intake valve carbon cleaning (if rough cold idle develops)', de: 'DISI-Einlassventile reinigen (bei unrundem Kaltlauf)', ru: 'Чистка впускных клапанов DISI от нагара (при неровном холодном пуске)' }, cost: '€300–480', risk: { en: 'Hesitation and misfires under light throttle', de: 'Ruckeln und Zündaussetzer im Teillastbereich', ru: 'Провалы тяги и пропуски зажигания на малых оборотах' }, damage: '€700–1,100' }
              ]
            },
            badges: {
              en: ['No Turbo / DPF / DMF Bills', 'Affordable Routine Filters'],
              de: ['Kein Turbo / DPF / ZMS', 'Günstiger Verschleißteil-Unterhalt'],
              ru: ['Нет затрат на турбину и DPF', 'Недорогие расходники ТО']
            }
          },
          depreciationResale: {
            score: 8.0,
            badges: {
              en: ['Sought-After 2010+ Facelift', 'Clean Rust-Free Cars Hold Value'],
              de: ['Gefragtes 2010+-Facelift', 'Rostfreie Exemplare sehr begehrt'],
              ru: ['Ликвидный рестайлинг 2010+', 'Живой кузов высоко ценится']
            }
          }
        }
      },
      {
        id: '1.8-mzr',
        defaultGearboxId: '5-mt-sc',
        gearboxes: [{ id: '5-mt-sc', isDefault: true }],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-5mt',
        isDefault: false,
        fuelType: 'petrol',
        hp: 120,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 1.8 MZR',
        fullName: '2010 Mazda 6 1.8 MZR',
        engineBadge: '1.8L MZR • 120 HP',
        engineSubLabel: {
          en: '1.8L MZR Multi-Point Chain Petrol (2008–2012) • 5-MT • 165 Nm • FWD',
          de: '1.8L MZR Saugrohr-Kettenmotor (2008–2012) • 5-Gang • 165 Nm • FWD',
          ru: '1.8L MZR цепной с распределённым впрыском (2008–2012) • 5-ст. МКПП • 165 Н·м • FWD'
        },
        rarityLabel: {
          en: 'BUDGET CRUISER',
          de: 'PREISWERTER EINSTIEG',
          ru: 'БЮДЖЕТНЫЙ СЕДАН'
        },
        originalMsrp: {
          en: '€22,990 New',
          de: '22.990 € Neu',
          ru: '€22 990 новый'
        },
        estUsedPrice: '€5,600',
        perkLabel: {
          en: '✦ Lowest Purchase & Tax Cost • Simple Port-Injected 1.8 Chain • Sharp Chassis',
          de: '✦ Günstigster Kauf & Unterhalt • Schlichter 1.8-Kettenmotor • Agiles Fahrwerk',
          ru: '✦ Минимальная цена и налоги • Простой цепной мотор 1.8 • Отличная управляемость'
        },
        remarkablePositives: {
          en: [
            'LOWEST ENTRY PRICE & TAX',
            'PORT-INJECTED NO-TURBO SIMPLICITY',
            'SHARP DOUBLE-WISHBONE CHASSIS',
            '519L SEDAN BOOT + FOLD LEVERS',
            'LOW FRONT WEIGHT SAVES TYRES'
          ],
          de: [
            'NIEDRIGSTER PREIS & STEUER',
            'SIMPLEX-SAUGMOTOR OHNE TURBO',
            'HANDLICHES DOPPELQUERLENKER-CHASSIS',
            '519L KOFFERRAUM + FERNENTRIEGELUNG',
            'LEICHTE VORDERACHSE SCHONT REIFEN'
          ],
          ru: [
            'ЛУЧШАЯ ЦЕНА И НИЗКИЙ НАЛОГ',
            'ПРОСТОЙ АТМОСФЕРНИК БЕЗ ТУРБИНЫ',
            'ОСТРОЕ ШАССИ НА ДВУХРЫЧАЖКЕ',
            'БАГАЖНИК 519 Л И ПРОСТОРНЫЙ САЛОН',
            'ЛЁГКИЙ ПЕРЕДОК БЕРЕЖЁТ ПОДВЕСКУ'
          ]
        },
        notableNegatives: {
          en: [
            'ONLY 5 GEARS — LOUD ON MOTORWAY',
            'CHECK HIGH-MILE OIL BURN & RUST',
            'MODEST 165 NM WITH PASSENGERS',
            'NO AUTOMATIC OPTION'
          ],
          de: [
            'NUR 5 GÄNGE — HOHE DREHZAHL AB 130',
            'ÖLVERBRAUCH & ROST GENAU PRÜFEN',
            'MÄSSIGE 165 NM VOLL BELADEN',
            'KEINE AUTOMATIK VERFÜGBAR'
          ],
          ru: [
            'ТОЛЬКО 5-СТ. МКПП — ШУМНЕЕ НА ТРАССЕ',
            'ПРОВЕРЯТЬ УГАР МАСЛА И РЖАВЧИНУ',
            'ТЯГИ 165 Н·М МАЛОВАТО ПРИ ЗАГРУЗКЕ',
            'НЕТ ВЕРСИИ С АВТОМАТОМ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 7.6,
          spacePracticality: 8.2,
          performanceDynamics: 7.0,
          runningCostsTco: 8.0
        },
        specOverrides: {
          engineName: { en: '1.8L I4 MZR Petrol (Chain)', de: '1.8L Reihenvierzylinder (Kette)', ru: '1.8L R4 MZR Бензин (Цепь)' },
          forcedInduction: '@na',
          injection: '@port',
          timingDrive: '@chain',
          gearbox: '@manual5',
          clutchDmf: '@singleClutch',
          payloadRoof: '515 kg · 100 kg',
          towingBraked: '1,500 kg',
          sprint0100: '11.3 s',
          topSpeed: '200 km/h',
          peakTorque: '165 Nm @ 4,300 rpm',
          passingPunch: { en: 'Relaxed · Needs Downshifts', de: 'Gemütlich · Runterschalten', ru: 'Спокойная · Нужны обороты' },
          realWorldFuel: '7.4 L/100km',
          tankRange: '64 L (~865 km)',
          euroNorm: 'Euro 4/5 (Petrol)',
          taxInsurance: '@tierLow',
          serviceWear: '@tierVeryLow'
        },
        subStats: {
          buildQualityRust: {
            score: 5.8,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.5,
            badges: {
              en: ['Proven Relays & Modules', 'Check Early Torque Steering Pull'],
              de: ['Solide Relais & Schalter', 'Frühe Lenkhilfe auf Spiel prüfen'],
              ru: ['Надёжная базовая электрика', 'Проверить ранний датчик ЭУР']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['Crisp Euro-Tuned Damping', 'Thicker Tyre/Road Hum on Concrete'],
              de: ['Straff-dynamische Abstimmung', 'Spürbare Abrollgeräusche'],
              ru: ['Собранная упругая подвеска', 'Заметный гул шин по трассе']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 7.7,
            badges: {
              en: ['515 kg Payload', '1,500 kg Braked Towing'],
              de: ['515 kg Zuladung', '1,500 kg Anhängelast'],
              ru: ['Нагрузка 515 кг', 'Прицеп до 1,500 кг']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Lightest Nose & Crisp Turn-In', 'Balanced Double-Wishbone Front'],
              de: ['Leichteste Vorderachse', 'Flinkes Doppelquerlenker-Einlenken'],
              ru: ['Самый лёгкий нос и юркость', 'Острая передняя двухрычажка']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 8.3,
            badges: {
              en: ['Simple Port-Injected 1.8 Chain', 'Check Oil Use & Intake Flaps'],
              de: ['Einfacher 1.8 Ketten-Saugmotor', 'Ölverbrauch & Saugrohrklappen'],
              ru: ['Простой цепной 1.8 распределённый', 'Контроль масла и заслонок']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'L8-DE (MZR) · 1,798 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Port Injection (Simple Chain NA)', de: 'Reihenvierzylinder Alu · Saugrohreinspritzung (Sauger)', ru: 'Рядный 4-цил. алюминий · Распределённый впрыск' } }], note: { en: 'Ultra-simple, low-cost entry petrol with port injection and timing chain; modest highway pull with the 5-speed gearbox, but almost nothing expensive to fail.', de: 'Extrem simpler, günstiger Einstiegs-Sauger mit Kette und Saugrohreinspritzung; mit 5-Gang gemütlich, aber kaum teure Ausfallrisiken.', ru: 'Максимально простой и дешёвый в содержании цепной атмосферник; спокойный на трассе с 5-МКПП, зато почти нечему ломаться.' } },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Simple Port-Injected 1.8L Chain Petrol— Frugal Entry Option, Just Check Oil History',
                strengths: [
                  'Zero direct-injection valve soot, handles short trips and cold mornings effortlessly, and skips expensive timing belt jobs.',
                  'Featherlight front end protects front tyres, ball joints, and brake discs.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'On cars serviced lazily with 20,000+ km gaps, piston rings carbon up past 140,000 km and start burning engine oil.',
                  'Small plastic air flaps inside the intake rattle at idle around 130k+ km, alongside underbody salt rust.'
                ],
                beforeYouBuy: [
                  'Pull the oil dipstick and check behind the exhaust while someone revs a warm engine— dark blue smoke or low oil points to sticky piston rings.',
                  'Stand beside the bonnet at idle and listen for rapid plastic clicking/chattering from the front intake manifold (worn swirl-flap bushings).',
                  'Kneel down to inspect rear wheel arches and the rear suspension carrier for flaky rust.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict annual 5W-30 oil + wax-seal rear subframe & wheel arch seams',
                    cost: '€170–270',
                    ifIgnored: 'Long oil intervals coke thin piston oil rings & salt starts arch rust',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change spark plugs, gearbox oil & inspect 6-yr aging drive belt/hoses',
                    cost: '€230–370',
                    ifIgnored: 'Tired plugs overload coil pack & dry cracked belt snaps accessory drive',
                    damageCost: '€900–1,600'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Service rattling intake manifold flap bushings & grease front brake pins',
                    cost: '€260–440',
                    ifIgnored: 'Loose broken plastic flap pins risk getting sucked toward engine valves',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'red',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Renew aging thermostat, water pump & piston-ring soak if oil use climbs',
                    cost: '€450–850',
                    ifIgnored: 'Stuck thermostat overheats block and heavy oil burning fouls catalytic converter',
                    damageCost: '€1,600–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace 5-MT clutch kit & rusted rear suspension control arm bushings',
                    cost: '€580–940',
                    ifIgnored: 'Worn clutch slips on highway hills & seized rear arm bolts ruin tyre wear',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Refresh timing chain tensioner check, coolant hoses & right engine mount',
                    cost: '€420–720',
                    ifIgnored: 'Brittle aged coolant pipes leak & sagged mount vibrates idle (parts age too)',
                    damageCost: '€1,100–1,800'
                  }
                ]
              },
              de: {
                headline: 'Schlichter 1.8L-Saugrohrbenziner mit Kette— einfacher Einstieg, Ölstand prüfen',
                strengths: [
                  'Keine Direkteinspritzer-Verkokung, verträgt Kurzstrecken problemlos und spart Zahnriemenwechsel.',
                  'Schont vordere Reifen, Traggelenke und Bremsscheiben spürbar.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Bei seltenen Ölwechseln verkoken die dünnen Ölabstreifringe und der Motor beginnt Öl zu verbrauchen.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Ölmessstab ziehen und beim warmen Gasstoß auf blauen Abgasrauch achten— hoher Ölverbrauch durch verklebte Ringe kommt öfter vor.',
                  'Bei offener Haube am Ansaugkrümmer horchen: Klappert dort Kunststoff deutlich mit, sind die Klappenlager ausgeschlagen.',
                  'Unter dem Heck die Hinterachs-Aufnahme und die Kanten der hinteren Radläufe auf Rost prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng jährlich frisches 5W-30 Öl + Hinterachse & Radläufe konservieren',
                    cost: '170–270 €',
                    ifIgnored: 'Überzogene Ölwechsel verkoken Ölabstreifringe & Salz greift Falze an',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Zündkerzen, Getriebeöl wechseln & 6-J.-Keilriemen samt Schläuchen prüfen',
                    cost: '230–370 €',
                    ifIgnored: 'Alte Kerzen überlasten Zündspule & poröser Riemen reißt altersbedingt',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Klappernde Ansaug-Drallklappen überholen & Bremssattelbolzen fetten',
                    cost: '260–440 €',
                    ifIgnored: 'Abbrechende Klappen-Teile können vom Motor angesaugt werden',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Thermostat, Wasserpumpe erneuern & bei Ölverbrauch Spülung/Kolbenringe prüfen',
                    cost: '450–850 €',
                    ifIgnored: 'Defektes Thermostat überhitzt den Motor & starkes Ölverbrennen ruiniert Kat',
                    damageCost: '1.600–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: '5-Gang-Kupplung tauschen & angerostete Hinterachs-Lenker/Buchsen ersetzen',
                    cost: '580–940 €',
                    ifIgnored: 'Rutschende Kupplung & festgerostete Spurlenker fahren Reifen einseitig ab',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette abhören + alternde Kühlschläuche & rechtes Hydrolager tauschen',
                    cost: '420–720 €',
                    ifIgnored: 'Sprödes Gummi leckt Kühlmittel oder brummt im Leerlauf (Alterung)',
                    damageCost: '1.100–1.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Простой цепной 1.8 MZR— неприхотливый атмосферник с проверкой расхода масла',
                strengths: [
                  'Никакого нагара от прямого впрыска, уверенный запуск зимой и нетребовательность к короткому городу.',
                  'Подвеска и передние шины живут дольше всех в линейке.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'При редких сменах масла после 140 тыс. км возможен повышенный расход масла на угар.',
                  'Ближе к 130 тыс. км начинают тарахтеть заслонки впускного коллектора, плюс нужен осмотр арок на ржавчину.'
                ],
                beforeYouBuy: [
                  'Проверьте щуп и газаните на прогретом моторе: сизоватый дым или заметный угар масла говорят о залегших кольцах.',
                  'Послушайте на холостых зону впуска спереди— звонкое пластиковое стрекотание выдаёт изношенные оси вихревых заслонок.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодное масло 5W-30 + антикор задних арок и подрамника',
                    cost: '€170–270',
                    ifIgnored: 'Перепробеги коксуют тонкие кольца, а соль быстро съедает необработанные арки',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Свечи, масло 5-МКПП и проверка стареющего приводного ремня/шлангов (6 лет)',
                    cost: '€230–370',
                    ifIgnored: 'Старые свечи бьют по модулю зажигания, а высохший ремень рвётся к 6 годам',
                    damageCost: '€900–1 600'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Ремонт/замена гремящих заслонок впуска + смазка пальцев передних суппортов',
                    cost: '€260–440',
                    ifIgnored: 'Разболтавшиеся обломки заслонок могут попасть внутрь цилиндров',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'red',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Заменить старый термостат, помпу и сделать раскоксовку/кольца при масложоре',
                    cost: '€450–850',
                    ifIgnored: 'Подклинивший термостат перегревает мотор, а масложор убивает катализатор',
                    damageCost: '€1 600–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Комплект сцепления 5-МКПП + ржавые рычаги/сайлентблоки задней подвески',
                    cost: '€580–940',
                    ifIgnored: 'Буксующее сцепление и закисшие рычаги не дают выставить развал сзади',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверка цепи ГРМ + замена стареющих шлангов и правой гидроопоры ДВС',
                    cost: '€420–720',
                    ifIgnored: 'Треснувшие от лет патрубки подтекают, а просевшая опора даёт дрожь',
                    damageCost: '€1 100–1 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.5,
            badges: {
              en: ['Slick 5-Speed Manual Only', 'Longer Highway Revs vs 6-MT'],
              de: ['Leichtes 5-Gang-Getriebe', 'Etwas kürzer übersetzt ab 130'],
              ru: ['Чёткая 5-ст. МКПП', 'Выше обороты на трассе без 6-й']
            }
          },
          accelerationOvertaking: {
            score: 4.9,
            badges: {
              en: ['0–100 km/h: 11.3 s', '200 km/h Top Speed'],
              de: ['0–100 km/h: 11,3 s', '200 km/h Spitze'],
              ru: ['0–100 км/ч: 11,3 с', 'Макс. 200 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 4.7,
            badges: {
              en: ['165 Nm • Needs High Revs', 'Relaxed Pace When Loaded'],
              de: ['165 Nm • Drehzahl nötig', 'Gemütlich voll beladen'],
              ru: ['165 Н·м • Любит обороты', 'Спокойный разгон с грузом']
            }
          },
          efficiencyFuel: {
            score: 7.2,
            badges: {
              en: ['7.4 L/100km', '152–159 g/km CO2'],
              de: ['7,4 L/100km', '152–159 g/km CO2'],
              ru: ['7,4 л/100 км', '152–159 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.4,
            badges: {
              en: ['Low 1.8L Petrol Tax', 'Cheap 120 HP Sedan Cover'],
              de: ['Günstige 1.8-Steuer', 'Niedrige 120-PS-Versicherung'],
              ru: ['Низкий налог за 1,8 л', 'Дешёвая страховка на 120 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 8.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 80,000 km', de: 'Alle 80.000 km', ru: 'Каждые 80 000 км' }, action: { en: 'Change 5-MT gearbox oil & inspect serpentine belt', de: '5-Gang-Getriebeöl wechseln & Keilrippenriemen prüfen', ru: 'Замена масла в 5-МКПП и проверка приводного ремня' }, cost: '€120–180' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace iridium spark plugs & FL22 coolant', de: 'Iridium-Zündkerzen & FL22-Kühlmittel ersetzen', ru: 'Замена иридиевых свечей и антифриза FL22' }, cost: '€160–240' }
              ],
              critical: [
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'Monitor oil consumption on high-mileage cars (stuck oil rings if neglected)', de: 'Ölverbrauch ab hoher Laufleistung prüfen (verkokte Ölabstreifringe)', ru: 'Контроль расхода масла (залегание маслосъёмных колец при редких ТО)' }, cost: '€900–1,600', risk: { en: 'Running low on oil causes rapid big-end bearing knock', de: 'Zu niedriger Ölstand führt rasch zum Pleuellagerschaden', ru: 'Масляное голодание быстро проворачивает вкладыши' }, damage: '€2,200–3,400' },
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Rear subframe & wheel-arch rust treatment + swirl-flap rattle check', de: 'Hinterachsträger-/Radlauf-Konservierung & Drallklappen prüfen', ru: 'Антикор заднего подрамника и проверка заслонок впуска' }, cost: '€260–550', risk: { en: 'Structural subframe corrosion or loose intake swirl flaps', de: 'Durchgerosteter Achsträger oder ausgeschlagenes Saugrohr', ru: 'Глубокая коррозия подрамника или люфт заслонок коллектора' }, damage: '€1,100–1,800' }
              ]
            },
            badges: {
              en: ['Lowest Parts Complexity', 'Check Oil & Intake Flaps'],
              de: ['Simpelste Technik im GH', 'Ölstand & Saugrohrklappen im Blick'],
              ru: ['Простейшая конструкция', 'Следить за маслом и заслонками']
            }
          },
          depreciationResale: {
            score: 7.2,
            badges: {
              en: ['Budget Midsize Value Buy', 'Overshadowed By 2.0 MZR'],
              de: ['Günstiger Mittelklasse-Einstieg', '2.0er auf dem Markt beliebter'],
              ru: ['Доступный вход в D-класс', 'Покупатели чаще ищут 2.0']
            }
          }
        }
      },
      {
        id: '2.0-mzr',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: '5-at',
            estUsedPrice: '€6,600',
            specOverrides: { sprint0100: '10.8 s', topSpeed: '208 km/h', realWorldFuel: '8.5 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.1,
                badges: {
                  en: ['0–100 km/h: 10.8 s (5-AT)', '208 km/h Top Speed'],
                  de: ['0–100 km/h: 10,8 s (5-AT)', '208 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,8 s (5-AT)', 'Макс. 208 km/h']
                }
              },
              efficiencyFuel: {
                score: 5.7,
                badges: {
                  en: ['8.5 L/100km (5-AT)'],
                  de: ['8,5 L/100km (5-AT)'],
                  ru: ['8,5 L/100km (5-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-conv-auto',
        isDefault: false,
        fuelType: 'petrol',
        hp: 147,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.0 MZR',
        fullName: '2009 Mazda 6 2.0 MZR',
        engineBadge: '2.0L MZR • 147 HP',
        engineSubLabel: {
          en: '2.0L MZR Multi-Point Chain Petrol (2008–03/2010) • 6-MT / Opt. 5-AT • 184 Nm',
          de: '2.0L MZR Saugrohr-Kettenmotor (2008–03/2010) • 6-Gang / Opt. 5-AT • 184 Nm',
          ru: '2.0L MZR цепной распределённый впрыск (2008–03/2010) • 6-МКПП / Опц. 5-АКПП • 184 Н·м'
        },
        rarityLabel: {
          en: 'PRE-FACELIFT CLASSIC',
          de: 'SOLIDER VORFACELIFT',
          ru: 'КЛАССИЧЕСКИЙ 2.0'
        },
        originalMsrp: {
          en: '€24,900 New',
          de: '24.900 € Neu',
          ru: '€24 900 новый'
        },
        estUsedPrice: '€5,900',
        perkLabel: {
          en: '✦ Port Fuel Injection (Clean Valves) • Optional Tough 5-Speed Auto • 9.9s 0–100 km/h',
          de: '✦ Saubere Saugrohreinspritzung • Mit solider 5-Stufen-Automatik • 9,9s 0–100 km/h',
          ru: '✦ Распределённый впрыск (без нагара) • Опц. надёжная 5-АКПП • 9,9 с до 100'
        },
        remarkablePositives: {
          en: [
            'CLEAN PORT-INJECTED INTAKE VALVES',
            'AVAILABLE DURABLE 5-SPEED AUTO',
            'CRISP 6-MT + 9.9S PACE',
            'SHARP DOUBLE-WISHBONE CHASSIS',
            '519L BOOT + LOW BUYING PRICE'
          ],
          de: [
            'KEINE VENTIL-VERKOKUNG (SAUGROHR)',
            'WAHLWEISE MIT SOLIDER 5-AUTOMATIK',
            'FLINKES 6-GANG-GETRIEBE (9,9S)',
            'SEHR AGILES KURVENVERHALTEN',
            '519L KOFFERRAUM + FAIRER PREIS'
          ],
          ru: [
            'ЧИСТЫЕ КЛАПАНЫ БЕЗ ПРЯМОГО ВПРЫСКА',
            'ДОСТУПЕН С КРЕПКОЙ 5-АКПП',
            'БОДРАЯ 6-МКПП И 9,9 С ДО 100 КМ/Ч',
            'ОТТОЧЕННАЯ УПРАВЛЯЕМОСТЬ',
            'БОЛЬШОЙ БАГАЖНИК 519 Л И ДОСТУПНАЯ ЦЕНА'
          ]
        },
        notableNegatives: {
          en: [
            'PRE-2010 STEERING PULL TO CHECK',
            'UNDERBODY & REAR ARCH RUST RISK',
            'SLIGHTLY THIRSTIER THAN DISI',
            'NOISE & FIRM RIDE PRE-2010'
          ],
          de: [
            'FRÜHE LENKUNG BIS 2010 PRÜFEN',
            'UNTERBODEN- & RADLAUF-ROST PRÜFEN',
            'ETWAS DURSTIGER ALS 2.0 DISI',
            'VOR-FACELIFT STRAFFER & LAUTER'
          ],
          ru: [
            'ПРОВЕРЯТЬ УВОД РУЛЯ ДО 2010 Г.',
            'РИСК КОРРОЗИИ АРОК И ПОДРАМНИКА',
            'ЧУТЬ ПРОЖОРЛИВЕЕ 2.0 DISI',
            'ЖЁСТЧЕ И ШУМНЕЕ РЕСТАЙЛИНГА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 7.6,
          spacePracticality: 8.3,
          performanceDynamics: 7.3,
          runningCostsTco: 7.7
        },
        specOverrides: {
          engineName: { en: '2.0L I4 MZR Petrol (Chain)', de: '2.0L Reihenvierzylinder (Kette)', ru: '2.0L R4 MZR Бензин (Цепь)' },
          forcedInduction: '@na',
          injection: '@port',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          payloadRoof: '535 kg · 100 kg',
          towingBraked: '1,500 kg',
          sprint0100: '9.9 s',
          topSpeed: '214 km/h',
          peakTorque: '184 Nm @ 4,000 rpm',
          passingPunch: { en: 'Rev-Happy · Best With 6-MT', de: 'Drehfreudig · Top mit 6-Gang', ru: 'Охотно крутится · Лучше с 6-МКПП' },
          realWorldFuel: '7.8 L/100km',
          tankRange: '64 L (~820 km)',
          euroNorm: 'Euro 4/5 (Petrol)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierVeryLow'
        },
        subStats: {
          buildQualityRust: {
            score: 5.5,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.2,
            badges: {
              en: ['Proven Relays & Modules', 'Check Early Torque Steering Pull'],
              de: ['Solide Relais & Schalter', 'Frühe Lenkhilfe auf Spiel prüfen'],
              ru: ['Надёжная базовая электрика', 'Проверить ранний датчик ЭУР']
            }
          },
          rideNoiseComfort: {
            score: 6.6,
            badges: {
              en: ['Crisp Euro-Tuned Damping', 'Thicker Tyre/Road Hum on Concrete'],
              de: ['Straff-dynamische Abstimmung', 'Spürbare Abrollgeräusche'],
              ru: ['Собранная упругая подвеска', 'Заметный гул шин по трассе']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.0,
            badges: {
              en: ['535 kg Payload', '1,500 kg Braked Towing'],
              de: ['535 kg Zuladung', '1,500 kg Anhängelast'],
              ru: ['Нагрузка 535 кг', 'Прицеп до 1,500 кг']
            }
          },
          handlingAgility: {
            score: 8.6,
            badges: {
              en: ['Crisp Double-Wishbone Turn-In', 'Pre-2010 Steering Needs Alignment Check'],
              de: ['Sehr agiles Einlenken', 'Frühe Lenkung bis 2010 prüfen'],
              ru: ['Отзывчивый передний передок', 'Проверить датчик ЭУР до 2010 г.']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 8.5,
            badges: {
              en: ['Clean Port-Injected 2.0 Chain', 'Great LPG & Auto Candidate'],
              de: ['Bewährter 2.0 Saugrohr-Motor', 'Ohne Verkokung • Gute 5-AT'],
              ru: ['Чистый впуск на 2.0 с цепью', 'Дружелюбен к ГБО и 5-АКПП']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'LF-DE (MZR) · 1,999 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Port Injection (Chain, No Direct Inj.)', de: 'Reihenvierzylinder Alu · Saugrohreinspritzung (Kette)', ru: 'Рядный 4-цил. алюминий · Распределённый впрыск (Цепь)' } }], note: { en: 'Bulletproof port-injected 2.0 MZR with zero turbo or direct-injection carbon issues; arguably the most dependable engine in the GH lineup.', de: 'Extrem standfester 2.0-Saugrohreinspritzer ohne Turbo- und Verkokungsrisiko — wohl der zuverlässigste Motor der gesamten GH-Reihe.', ru: 'Неубиваемый цепной 2.0 с распределённым впрыском без турбины и нагара — самый беспроблемный мотор линейки GH.' } },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Pre-Facelift 2.0L MZR Port Petrol— Tough Classic Setup With Zero Direct-Injection Soot',
                strengths: [
                  'Robust aluminum block with metal timing chain and zero turbocharger expense.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Long 20,000 km oil gaps coke oil-control rings past 150k km; worn swirl flaps chatter at idle.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.',
                  'Check the oil dipstick and coolant expansion tank for clean fluids without milky residue.',
                  'Verify documented 10,000–15,000 km oil changes and spark-plug replacement receipts.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual fresh 5W-30 oil + wax-seal rear subframe & wheel arches early',
                    cost: '€180–280',
                    ifIgnored: 'Extended oil drains cake piston rings & salt starts rear arch rust',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT auto oil (at 60k), spark plugs & inspect 6-yr belt/hoses',
                    cost: '€260–420',
                    ifIgnored: 'Old auto oil delays gearshifts & cracked accessory belt strands car',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Fix rattling intake manifold flap bushings & grease caliper pins',
                    cost: '€280–450',
                    ifIgnored: 'Broken flap shafts damage valves & seized brake pins warp rotors',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Replace thermostat, water pump & manual clutch / 2nd auto fluid change',
                    cost: '€620–990',
                    ifIgnored: 'Stuck thermostat overheats cylinder head & worn clutch slips',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Check steering torque sensor calibration & replace rusted rear arms',
                    cost: '€460–780',
                    ifIgnored: 'Seized rear alignment bolts chew tyres & tiring steering pulls on motorway',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Inspect timing chain slack, aging coolant hoses & right engine mount',
                    cost: '€440–740',
                    ifIgnored: 'Brittle aged hoses leak coolant & sagged mount vibrates idle (parts age too)',
                    damageCost: '€1,100–1,800'
                  }
                ]
              },
              de: {
                headline: 'Vorfacelift-2.0L-Saugrohrbenziner (147 PS)— saubere Ventile & gute 5-AT',
                strengths: [
                  'Keine Direkteinspritzer-Verkokung, laufruhig mit 6-Gang oder sehr haltbarer 5-Stufen-Automatik.',
                  'Ohne Turbo oder Partikelfilter ideal für langfristigen Alltagseinsatz.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Lange Ölintervalle lassen Abstreifringe verkoken; Saugrohrklappen können klappern.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Auf ebener Straße kurz testen, ob das Lenkrad mittig läuft— frühe Modelle ziehen manchmal leicht nach einer Seite.',
                  'Ölstand kontrollieren und besonders sorgfältig die hinteren Radläufe sowie den Hinterachsträger auf Rost ableuchten.',
                  'Am Ansaugkrümmer im Leerlauf auf Klappern achten und saubere Schaltvorgänge (6-Gang oder 5-Automatik) prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 5W-30 Öl wechseln + Hinterachse & Radläufe früh versiegeln',
                    cost: '180–280 €',
                    ifIgnored: 'Lange Intervalle verkoken Ölabstreifringe & Salz lässt Radläufe rosten',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '5-AT-Automatiköl (60 Tkm), Zündkerzen & 6-J.-Keilriemen/Schläuche prüfen',
                    cost: '260–420 €',
                    ifIgnored: 'Verbrauchtes AT-Öl schaltet ruppig & poröser Riemen reißt altersbedingt',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Klappernde Saugrohrklappen überholen & Bremssattelbolzen schmieren',
                    cost: '280–450 €',
                    ifIgnored: 'Lockere Klappenteile gefährden Ventile & feste Bremsbolzen verziehen Scheiben',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Thermostat, Wasserpumpe & Kupplung (Schalter) bzw. 2. AT-Ölwechsel',
                    cost: '620–990 €',
                    ifIgnored: 'Klemmendes Thermostat überhitzt Zylinderkopf & verschlissene Kupplung rutscht',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Lenkhilfesensor prüfen & angerostete Hinterachs-Lenker/Buchsen tauschen',
                    cost: '460–780 €',
                    ifIgnored: 'Festgerostete Exzenterschrauben blockieren Spureinstellung & Reifen fahren schief ab',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette prüfen + alternde Kühlschläuche & rechtes Hydrolager erneuern',
                    cost: '440–740 €',
                    ifIgnored: 'Spröde Gummiteile verlieren Wasser oder brummen im Leerlauf (Alterung)',
                    damageCost: '1.100–1.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Дорестайлинговый цепной 2.0 MZR (147 л.с.)— без прямого впрыска и с надёжной',
                strengths: [
                  'Сбалансированный бензиновый мотор (147 л.с.) быстро прогревается и удобен в городе.',
                  'Без турбины и сложных систем очистки выхлопа спокойно ходит 250 000+ км.'
                ],
                watchouts: [
                  'Редкое масло коксует кольца к 150 тыс. км, а заслонки впуска начинают греметь.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.',
                  'Проверить щуп масла и расширительный бачок— жидкости должны быть чистыми без эмульсии.',
                  'Проверьте подтверждённую замену масла каждые 10 000–15 000 км и чеки на замену свечей.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодное масло 5W-30 + антикор заднего подрамника и кромок арок',
                    cost: '€180–280',
                    ifIgnored: 'Перепробеги коксуют кольца, а без антикора задние арки быстро ржавеют',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Смена масла 5-АКПП (60 тыс.), свечи + проверка стареющего ремня/шлангов (6 лет)',
                    cost: '€260–420',
                    ifIgnored: 'Старое масло портит соленоиды АКПП, а высохший ремень рвётся от лет',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Обслужить гремящие заслонки коллектора и смазать направляющие суппортов',
                    cost: '€280–450',
                    ifIgnored: 'Разрушенные заслонки летят в цилиндры, а закисшие суппорты греют диски',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Заменить термостат, помпу и сцепление (МКПП) или второе ТО 5-АКПП',
                    cost: '€620–990',
                    ifIgnored: 'Заклинивший термостат перегревает ГБЦ, а изношенное сцепление буксует',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Проверка датчика ЭУР + замена прикипевших задних рычагов и сайлентблоков',
                    cost: '€460–780',
                    ifIgnored: 'Закисшие болты сбивают развал и съедают резину, а ЭУР тянет руль',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Оценка цепи ГРМ + замена стареющих патрубков и правой гидроопоры мотора',
                    cost: '€440–740',
                    ifIgnored: 'Треснувшие от лет шланги сбрасывают антифриз, а опора даёт вибрацию',
                    damageCost: '€1 100–1 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.5,
            badges: {
              en: ['6-MT or Tough 5-Speed Auto', 'Proven Conventional Auto Box'],
              de: ['6-Gang oder robuste 5-AT', 'Sehr langlebige Wandlerautomatik'],
              ru: ['6-МКПП или крепкая 5-АКПП', 'Надёжный классический автомат']
            }
          },
          accelerationOvertaking: {
            score: 5.9,
            badges: {
              en: ['0–100 km/h: 9.9 s (6-MT)', '214 km/h Top Speed'],
              de: ['0–100 km/h: 9,9 s (6-Gang)', '214 km/h Spitze'],
              ru: ['0–100 км/ч: 9,9 с (6-МКПП)', 'Макс. 214 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.6,
            badges: {
              en: ['184 Nm • Rev-Happy Character', 'Slower With 5-Speed Auto'],
              de: ['184 Nm • Drehfreudig', 'Mit 5-Automatik etwas ruhiger'],
              ru: ['184 Н·м • Крутильный характер', 'Спокойнее в паре с 5-АКПП']
            }
          },
          efficiencyFuel: {
            score: 6.4,
            badges: {
              en: ['7.8 L/100km', '166–182 g/km CO2'],
              de: ['7,8 L/100km', '166–182 g/km CO2'],
              ru: ['7,8 л/100 км', '166–182 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.9,
            badges: {
              en: ['2.0L Petrol Tax • Euro 4/5', 'Affordable 147 HP Sedan Class'],
              de: ['2.0-Benzin-Steuer • Euro 4/5', 'Faire 147-PS-Versicherung'],
              ru: ['Налог 2,0 бензин • Евро 4/5', 'Умеренная страховка 147 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 8.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000–80,000 km', de: 'Alle 60.000–80.000 km', ru: 'Каждые 60–80 тыс. км' }, action: { en: 'Change 6-MT or 5-AT fluid & inspect belt tensioner', de: '6-Gang- oder 5-AT-Getriebeöl wechseln & Riemenspanner prüfen', ru: 'Замена масла в 6-МКПП или 5-АКПП и проверка натяжителя ремня' }, cost: '€140–250' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace iridium spark plugs & flush FL22 coolant', de: 'Iridium-Zündkerzen wechseln & FL22-Kühlmittel erneuern', ru: 'Замена иридиевых свечей и антифриза FL22' }, cost: '€170–250' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Rear subframe & arch anti-rust treatment + intake swirl-flap check', de: 'Hinterachs-/Radlauf-Rostschutz & Saugrohr-Drallklappen prüfen', ru: 'Антикор заднего подрамника и проверка заслонок коллектора' }, cost: '€260–550', risk: { en: 'Salt corrosion on subframe seams or rattling intake manifold flaps', de: 'Korrosion am Achsträger oder klappernde Drallklappen im Saugrohr', ru: 'Коррозия подрамника или стук заслонок впускного коллектора' }, damage: '€1,100–1,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'Thermostat stuck open & hydraulic right-hand engine mount sag', de: 'Thermostat (offen klemmend) & rechtes Hydrolager erneuern', ru: 'Замена термостата и правой гидроопоры двигателя' }, cost: '€240–420', risk: { en: 'Engine runs cold with high fuel use; heavy cabin vibration at idle', de: 'Motor erreicht keine Betriebstemperatur; starke Vibrationen im Leerlauf', ru: 'Двигатель не греется (растёт расход) и сильная вибрация на холостых' }, damage: '€500–850' }
              ]
            },
            badges: {
              en: ['Zero Direct-Injection Carbon', 'Cheap Independent Servicing'],
              de: ['Keine DISI-Verkokung', 'Günstiger Unterhalt ohne Turbo'],
              ru: ['Нет прямого впрыска и турбины', 'Недорогие запчасти и ТО']
            }
          },
          depreciationResale: {
            score: 6.9,
            badges: {
              en: ['Good Pre-Facelift Value', 'Check Steering & Rust History'],
              de: ['Solider Gebrauchtwert', 'Gepflegte rostarme Wagen gefragt'],
              ru: ['Выгодная цена дорестайлинга', 'Спрос на живой негнилой кузов']
            }
          }
        }
      },
      {
        id: '2.5-mzr',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [{ id: '6-mt-sc', isDefault: true }],
        buyerFitGroup: 'na-petrol',
        dossierGroup: 'petrol-6mt',
        isDefault: false,
        fuelType: 'petrol',
        hp: 170,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.5 MZR',
        fullName: '2010 Mazda 6 2.5 MZR',
        engineBadge: '2.5L MZR • 170 HP',
        engineSubLabel: {
          en: '2.5L MZR Multi-Point Chain Petrol (2008–2012) • 6-MT • 226 Nm • FWD',
          de: '2.5L MZR Saugrohr-Kettenmotor (2008–2012) • 6-Gang • 226 Nm • FWD',
          ru: '2.5L MZR цепной атмосферник (2008–2012) • 6-ст. МКПП • 226 Н·м • FWD'
        },
        rarityLabel: {
          en: 'ENTHUSIAST FLAGSHIP',
          de: 'TOP-SAUGMOTOR',
          ru: 'РЕДКИЙ ТОП-АТМОСФЕРНИК'
        },
        originalMsrp: {
          en: '€28,990 New',
          de: '28.990 € Neu',
          ru: '€28 990 новый'
        },
        estUsedPrice: '€7,800',
        perkLabel: {
          en: '✦ 8.0s 0–100 km/h • Bulletproof Non-Turbo 2.5L Chain • Rare Top-Spec Trim',
          de: '✦ 8,0s auf 100 km/h • Unverwüstlicher 2.5L Kettenmotor • Meist Top-Ausstattung',
          ru: '✦ 8,0 с до 100 км/ч • Вечный цепной 2.5 без турбины • Топовая комплектация'
        },
        remarkablePositives: {
          en: [
            'BRISK 8.0S • 220 KM/H TOP SPEED',
            'BULLETPROOF 2.5L CHAIN RELIABILITY',
            'ZERO TURBO OR DPF COMPLEXITY',
            'SPORT TRIM: BOSE AUDIO & 18" WHEELS',
            'STRONG ENTHUSIAST RESALE DEMAND'
          ],
          de: [
            'FLOTTE 8,0S • 220 KM/H SPITZE',
            'SEHR LANGLEBIGER 2.5L-KETTENMOTOR',
            'KEIN TURBO-, DPF- ODER DISI-RISIKO',
            'MEIST SPORT-TRIM MIT BOSE & 18"',
            'BELIEBT BEI KENNER-SAMMLERN'
          ],
          ru: [
            'ДИНАМИЧНЫЕ 8,0 С И МАКС. 220 КМ/Ч',
            'ОГРОМНЫЙ РЕСУРС ЦЕПНОГО 2.5',
            'НЕТ ТУРБИНЫ, DPF И ПРЯМОГО ВПРЫСКА',
            'БОГАТЫЙ СПОРТ-ОБВЕС, BOSE И 18"',
            'ВЫСОКАЯ ЦЕННОСТЬ НА РЫНКЕ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 8.3 L/100KM IN CITY USE',
            'HIGHER 2.5L TAX & INSURANCE',
            'CHECK RIGHT ENGINE MOUNT & RUST',
            'HARDER TO FIND UNABUSED SEDANS'
          ],
          de: [
            'HOHER STADTVERBRAUCH (8,3 L/100KM)',
            'TEURERE 2.5L-STEUER & VERSICHERUNG',
            'RECHTES HYDROLAGER & ROST PRÜFEN',
            'ALS GEPFLEGTE LIMOUSINE SELTEN'
          ],
          ru: [
            'РАСХОД В ГОРОДЕ 8,3+ Л/100 КМ',
            'ВЫШЕ НАЛОГ И СТРАХОВКА 2,5 Л',
            'ПРОВЕРЯТЬ ГИДРООПОРУ И РЖАВЧИНУ',
            'ТРУДНО НАЙТИ ЖИВОЙ НЕБИТЫЙ СЕДАН'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.4,
          comfortCabin: 7.6,
          spacePracticality: 8.3,
          performanceDynamics: 8.0,
          runningCostsTco: 7.5
        },
        specOverrides: {
          engineName: { en: '2.5L I4 MZR Sport (Chain)', de: '2.5L Reihenvierzylinder Sport', ru: '2.5L R4 MZR Sport (Цепь)' },
          forcedInduction: '@na',
          injection: '@port',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          payloadRoof: '550 kg · 100 kg',
          towingBraked: '1,600 kg',
          sprint0100: '8.0 s',
          topSpeed: '220 km/h',
          peakTorque: '226 Nm @ 4,000 rpm',
          passingPunch: { en: 'Instant Linear 2.5L Pull', de: 'Spontaner linearer 2.5L-Schub', ru: 'Мгновенный линейный отклик 2.5L' },
          realWorldFuel: '8.3 L/100km',
          tankRange: '64 L (~770 km)',
          euroNorm: 'Euro 4/5 (Petrol)',
          taxInsurance: '@tierModHigh',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.8,
            badges: {
              en: ['Updated 2010+ Steering Sensor', 'Proven Japanese Switchgear'],
              de: ['Verbesserte Lenkung ab 2010', 'Sehr solide Japan-Elektronik'],
              ru: ['Доработанный ЭУР с 2010 г.', 'Надёжная японская электрика']
            }
          },
          rideNoiseComfort: {
            score: 6.9,
            badges: {
              en: ['2010+ Retuned Supple Ride', 'Noticeable Road Noise Above 130'],
              de: ['Ab 2010 feiner abgestimmt', 'Hörbare Abrollgeräusche ab 130'],
              ru: ['С 2010 г. подвеска мягче', 'Шум шин выше 130 км/ч']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['550 kg Payload', '1,600 kg Braked Towing'],
              de: ['550 kg Zuladung', '1,600 kg Anhängelast'],
              ru: ['Нагрузка 550 кг', 'Прицеп до 1,600 кг']
            }
          },
          handlingAgility: {
            score: 9.0,
            badges: {
              en: ['Top-Trim Sport Suspension & 18"', 'Sharp 2.5 Flagship Balance'],
              de: ['Top-Sportfahrwerk & 18-Zoll', 'Sehr direktes Einlenken'],
              ru: ['Спортивная настройка и 18" диски', 'Лучший баланс в линейке']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 2.5 Port Chain NA', '300,000+ km Long-Stroke Unit'],
              de: ['Extrem robuster 2.5-Kettenmotor', '300.000+ km Langhuber-Potential'],
              ru: ['Вечный цепной атмосферник 2.5', 'Ресурс 300 000+ км без турбины']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'L5-VE (MZR 2.5) · 2,488 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Balance Shafts + Port Injection', de: 'Reihenvierzylinder Alu · Ausgleichswellen + Saugrohr', ru: 'Рядный 4-цил. алюминий · Балансирные валы + распредел. впрыск' } }], note: { en: 'Enthusiast gem: 8.0 s sprint, instant naturally aspirated throttle, stout 6-speed manual, and none of the turbo or diesel repair traps.', de: 'Liebhaber-Tipp: 8,0 s auf 100, direkter Sauger-Antritt, knackiger 6-Gang-Schalter und keine Turbo- oder Diesel-Kostenfallen.', ru: 'Находка для энтузиаста: 8,0 с до 100, мгновенный отклик атмосферника 2.5, чёткая 6-МКПП и отсутствие турбо/дизельных проблем.' } },
              forcedInduction: '@naNoTurbo',
              injection: '@portInj',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Rare 2.5L Naturally Aspirated Flagship— Smooth 170 HP Muscle With Rock-Solid Longevity',
                strengths: [
                  'No turbo, no direct-injection carbon, zero diesel filters, and deeply durable internals capable of 300,000+ km.',
                  'Pulls smoothly from low revs in high gears with top-trim equipment like Bose audio, xenon lamps, and half-leather seats.'
                ],
                watchouts: [
                  'Above 150,000 km listen for cold-start chain rattle and check the fluid-filled right rubber engine mount for sagging.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Start from cold and listen cleanly near the left timing cover for any rattling chain noise before oil pressure builds.',
                  'Put your hand on the steering wheel at idle: strong shaking through the cabin usually means the fluid-filled right rubber engine mount has collapsed.',
                  'Check under the rear boot floor and rear suspension frame for corrosion, and expect ~8.3 L/100km average petrol use.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual fresh synthetic oil + wax-seal rear arches & subframe against winter salt',
                    cost: '€180–290',
                    ifIgnored: 'Unsealed underbody seams gather salt rust even on clean-running cars',
                    damageCost: '€900–1,700'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace iridium spark plugs, gearbox oil & check 6-yr drive belt/hoses',
                    cost: '€240–390',
                    ifIgnored: 'Old spark plugs miss under hard pull & age-cracked belt snaps',
                    damageCost: '€900–1,600'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace right hydraulic engine mount (rubber ages) & grease brake slide pins',
                    cost: '€280–480',
                    ifIgnored: 'Collapsed mount shakes cabin at traffic lights & sticky pins warp rotors',
                    damageCost: '€1,000–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Inspect timing chain tensioner, replace aging water pump & clutch kit (MT)',
                    cost: '€680–1,120',
                    ifIgnored: 'Stretched timing chain risks skipping a tooth & slipping clutch fails uphill',
                    damageCost: '€2,000–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Renew aging coolant thermostat, oxygen sensors & rusted rear control arms',
                    cost: '€460–780',
                    ifIgnored: 'Lazy oxygen sensors bump petrol consumption & corroded arms ruin tyres',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace brittle cooling hoses, shocks (18" wheels work them) & exhaust box',
                    cost: '€520–860',
                    ifIgnored: 'Tired dampers bounce on motorway joints & old rubber hoses split over time',
                    damageCost: '€1,200–1,900'
                  }
                ]
              },
              de: {
                headline: 'Seltener Top-Benziner 2.5L MZR (170 PS)— kräftiger Langhuber mit 300.000-km-Potential',
                strengths: [
                  'Kein Turbo, keine Verkokung, kein Partikelfilter und extrem haltbare Mechanik.',
                  'Zieht schon ab niedrigen Drehzahlen geschmeidig durch, meist in Vollausstattung (Bose, Xenon, 18-Zoll).',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Alterndes Motorlager sorgt für Brummen im Leerlauf; beim Kaltstart auf Kettenrasseln achten.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Beim Kaltstart an der Steuerketten-Seite horchen: Kurzes Rasseln oder Klappern deutet auf gelängte Kette oder schwachen Spanner hin.',
                  'Im Leerlauf auf Vibrationen im Lenkrad achten— das ölgefüllte rechte Motorlager altert und kostet spürbar Geld.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich frisches Synthetiköl + Hinterachse & Radläufe mit Wachs schützen',
                    cost: '180–290 €',
                    ifIgnored: 'Ungeschützte Falze am Heck rosten im Winter unbemerkt',
                    damageCost: '900–1.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Iridium-Zündkerzen, Getriebeöl & 6-J.-Keilriemen samt Schläuchen prüfen',
                    cost: '240–390 €',
                    ifIgnored: 'Alte Kerzen kosten Drehfreude & poröser Riemen reißt altersbedingt',
                    damageCost: '900–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Rechtes Hydrolager (Gummi altert) ersetzen & Bremssattelbolzen fetten',
                    cost: '280–480 €',
                    ifIgnored: 'Defektes Hydrolager schüttelt im Stand & feste Bolzen verziehen Scheiben',
                    damageCost: '1.000–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Steuerkette & Spanner prüfen + gealterte Wasserpumpe & Kupplung ersetzen',
                    cost: '680–1.120 €',
                    ifIgnored: 'Stark gelängte Kette kann überspringen & Kupplung rutscht unter 226 Nm',
                    damageCost: '2.000–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Thermostat, Lambdasonden & angerostete Hinterachs-Lenker erneuern',
                    cost: '460–780 €',
                    ifIgnored: 'Müde Sonden treiben den Benzinverbrauch hoch & rostige Lenker stören Spur',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Alternde Kühlschläuche, 18-Zoll-Stoßdämpfer & Auspufftopf auffrischen',
                    cost: '520–860 €',
                    ifIgnored: 'Spröde Schläuche reißen unter Hitze & müde Dämpfer poltern (Alterung)',
                    damageCost: '1.200–1.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Редкий флагманский атмосферник 2.5 MZR (170 л.с.)— тяга, тишина и ресурс 300 000+ км',
                strengths: [
                  'Нет турбины, нагара прямого впрыска и сажевых фильтров.',
                  'Уверенно тянет с низов, почти всегда идёт в максимальной версии Sport с Bose и 18" дисками.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Резиногидравлическая опора стареет и даёт вибрацию, а цепь важно прослушать на холодную.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Заведите на холодную и послушайте цепь ГРМ слева под капотом— посторонний лязг означает износ натяжителя или цепи.',
                  'Подержитесь за руль на холостом ходу: ощутимая дрожь почти всегда выдаёт порванную правую гидроопору двигателя.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная синтетика + антикор задних арок и подрамника от соли',
                    cost: '€180–290',
                    ifIgnored: 'Зимние реагенты быстро портят незащищённые задние арки и подрамник',
                    damageCost: '€900–1 700'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Иридиевые свечи, масло 6-МКПП + проверка стареющего ремня/шлангов (6 лет)',
                    cost: '€240–390',
                    ifIgnored: 'Изношенные свечи дают пропуски под тягой, а высохший ремень рвётся',
                    damageCost: '€900–1 600'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить стареющую правую гидроопору ДВС + смазать пальцы тормозов',
                    cost: '€280–480',
                    ifIgnored: 'Порванная опора передаёт тряску на кузов, а закисшие суппорты греют диски',
                    damageCost: '€1 000–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Проверить цепь ГРМ и натяжитель + заменить старую помпу и сцепление',
                    cost: '€680–1 120',
                    ifIgnored: 'Растянутая цепь может перескочить, а сцепление срывается под тягой 226 Н·м',
                    damageCost: '€2 000–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Обновить термостат, кислородные датчики и закисшие задние рычаги',
                    cost: '€460–780',
                    ifIgnored: 'Старые датчики поднимают расход, а ржавые рычаги портят геометрию колёс',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить хрупкие шланги охлаждения, амортизаторы (на 18" изношены) и глушитель',
                    cost: '€520–860',
                    ifIgnored: 'Треснувшие от лет патрубки текут в жару, а подвеска стучит (старение)',
                    damageCost: '€1 200–1 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.7,
            badges: {
              en: ['Crisp Sport 6-Speed Manual', 'Stout 2.5 Clutch & Halfshafts'],
              de: ['Präzises Sport-6-Gang', 'Kräftige 2.5-Kupplung & Wellen'],
              ru: ['Спортивная чёткая 6-МКПП', 'Усиленное сцепление и приводы']
            }
          },
          accelerationOvertaking: {
            score: 7.6,
            badges: {
              en: ['0–100 km/h: 8.0 s', '220 km/h Top Speed'],
              de: ['0–100 km/h: 8,0 s', '220 km/h Spitze'],
              ru: ['0–100 км/ч: 8,0 с', 'Макс. 220 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.0,
            badges: {
              en: ['226 Nm Instant Throttle', 'Linear Big-Capacity Pull'],
              de: ['226 Nm spontanes Ansprechen', 'Kräftiger Großvolumen-Schub'],
              ru: ['226 Н·м без турбоямы', 'Ровная тяга большого объёма']
            }
          },
          efficiencyFuel: {
            score: 5.2,
            badges: {
              en: ['Thirsty (8.3 L/100km)', '192 g/km CO2'],
              de: ['Durstig (8,3 L/100km)', '192 g/km CO2'],
              ru: ['Прожорливый (8,3 л/100 км)', '192 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.8,
            badges: {
              en: ['Higher 2.5L CO2 Tax', 'Sport-Trim 170 HP Insurance'],
              de: ['Höhere 2.5-Steuer • 192 g CO2', 'Teurere Sport-Versicherung'],
              ru: ['Выше налог за 2,5 л', 'Дороже страховка за 170 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 8.5,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000–80,000 km', de: 'Alle 60.000–80.000 km', ru: 'Каждые 60–80 тыс. км' }, action: { en: 'Change 6-MT gearbox oil & inspect serpentine belt / tensioner', de: '6-Gang-Getriebeöl wechseln & Riemenspanner prüfen', ru: 'Замена масла в 6-МКПП и проверка приводного ремня с роликом' }, cost: '€150–230' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace iridium spark plugs & flush FL22 long-life coolant', de: 'Iridium-Zündkerzen wechseln & FL22-Kühlmittel erneuern', ru: 'Замена иридиевых свечей и антифриза FL22' }, cost: '€180–270' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Rear subframe & arch cavity-waxing + right hydraulic engine mount', de: 'Hinterachs-Konservierung & rechtes Hydrolager erneuern', ru: 'Антикор заднего подрамника и замена правой гидроопоры' }, cost: '€320–620', risk: { en: 'Subframe rust in winter salt regions; harsh engine-bay vibration', de: 'Rost am Hinterachsträger im Winter; spürbare Vibrationen im Leerlauf', ru: 'Коррозия подрамника зимой; жёсткие вибрации двигателя на кузове' }, damage: '€1,200–1,900' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: 'VVT cam-phaser rattle on cold start & valve-cover gasket weep', de: 'VVT-Nockenwellenversteller (Kaltstart-Rasseln) & Ventildeckeldichtung', ru: 'Муфта VVT (треск при холодном пуске) и прокладка клапанной крышки' }, cost: '€420–780', risk: { en: 'Oil seepage into spark-plug wells and rough variable-cam timing', de: 'Öl in den Zündkerzenschächten und verzögerte Steuerzeiten', ru: 'Масло в свечных колодцах и сбой фаз газораспределения' }, damage: '€1,100–1,600' }
              ]
            },
            badges: {
              en: ['No Turbo / DPF / Injector Bills', 'Hydro Mount & 18" Tyre Costs'],
              de: ['Kein Turbo / DPF / Injektor', 'Hydrolager & 18-Zoll-Reifen'],
              ru: ['Нет турбины и форсунок DPF', 'Траты на 18" шины и опору']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Cult Rare 2.5 Enthusiast Trim', 'Clean Cars Hold Strong Money'],
              de: ['Gesuchter seltener 2.5-Sauger', 'Sehr wertstabil bei Pflege'],
              ru: ['Редкая коллекционная версия 2.5', 'Высокая цена за живой экземпляр']
            }
          }
        }
      },
      {
        id: '2.0-mzr-cd',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 140,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.0 MZR-CD',
        fullName: '2008 Mazda 6 2.0 MZR-CD',
        engineBadge: '2.0L MZR-CD • 140 HP',
        engineSubLabel: {
          en: '2.0L MZR-CD Belt Turbo-Diesel (2008–01/2009) • 6-MT • 330 Nm • FWD',
          de: '2.0L MZR-CD Zahnriemen-Turbodiesel (2008–01/2009) • 6-Gang • 330 Nm • FWD',
          ru: '2.0L MZR-CD ременной турбодизель (2008–01/2009) • 6-ст. МКПП • 330 Н·м • FWD'
        },
        rarityLabel: {
          en: '2008 BELT DIESEL',
          de: 'FRÜHER ZAHNRIEMEN-DIESEL',
          ru: 'РАННИЙ РЕМЕННОЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€26,400 New',
          de: '26.400 € Neu',
          ru: '€26 400 новый'
        },
        estUsedPrice: '€4,500',
        perkLabel: {
          en: '✦ Low Used Entry Price • 330 Nm & 6.1 L/100km • Needs Strict Copper Washer & Belt History',
          de: '✦ Niedrigster Einkaufspreis • 330 Nm & 6,1 L/100km • Kupferringe & Zahnriemen Pflicht',
          ru: '✦ Минимальная цена на рынке • 330 Н·м и 6,1 л/100 км • Важна история шайб и ремня ГРМ'
        },
        remarkablePositives: {
          en: [
            'CHEAPEST ENTRY PRICE FOR A 6 GH',
            'STRONG 330 NM TORQUE PULL',
            'FRUGAL 6.1 L/100KM HIGHWAY',
            'CRISP 6-MT & SHARP CHASSIS',
            '519L BOOT + 1,600 KG TOWING'
          ],
          de: [
            'GÜNSTIGSTER KAUFPREIS IM TEST',
            'KRÄFTIGE 330 NM DURCHZUG',
            'SPARSAME 6,1 L/100KM AUF REISEN',
            'AGILES FAHRWERK & 6-GANG',
            '519L KOFFERRAUM + 1.600 KG ZUG'
          ],
          ru: [
            'САМАЯ НИЗКАЯ ЦЕНА ПОКУПКИ',
            'УВЕРЕННАЯ ТЯГА 330 Н·М',
            'ЭКОНОМИЧНЫЕ 6,1 Л/100 КМ НА ТРАССЕ',
            'ЧЁТКАЯ 6-МКПП И ОТЛИЧНОЕ ШАССИ',
            'БАГАЖНИК 519 Л И ПРИЦЕП 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'COPPER WASHERS CLOG OIL STRAINER',
            'DIESEL OIL DILUTION ("X" MARK)',
            'EXPENSIVE BELT + TENSIONER JOB',
            'EURO 4 EMISSIONS ONLY (2008)'
          ],
          de: [
            'KUPFERRINGE VERSTOPFEN ÖLSIEB',
            'ÖLVERDÜNNUNG BIS "X"-MARKE',
            'TEURER ZAHNRIEMEN + SPANNER',
            'NUR EURO-4-ABGASNORM (2008)'
          ],
          ru: [
            'ПРОГАР ШАЙБ ЗАБИВАЕТ МАСЛОПРИЁМНИК',
            'РАЗЖИЖЕНИЕ МАСЛА ДО МЕТКИ "X"',
            'ДОРОГАЯ ЗАМЕНА РЕМНЯ И НАТЯЖИТЕЛЯ',
            'ТОЛЬКО СТАРЫЙ СТАНДАРТ ЕВРО-4'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.4,
          comfortCabin: 7.6,
          spacePracticality: 8.3,
          performanceDynamics: 7.7,
          runningCostsTco: 7.1
        },
        specOverrides: {
          engineName: { en: '2.0L I4 MZR-CD Diesel (Belt)', de: '2.0L Reihenvierzylinder Diesel (Riemen)', ru: '2.0L R4 MZR-CD Дизель (Ремень)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@belt',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,600 kg',
          sprint0100: '10.5 s',
          topSpeed: '204 km/h',
          peakTorque: '330 Nm @ 2,000 rpm',
          passingPunch: { en: 'Strong 330 Nm Mid-Range', de: 'Kräftiger 330-Nm-Durchzug', ru: 'Уверенная тяга 330 Н·м' },
          realWorldFuel: '6.1 L/100km',
          tankRange: '64 L (~1,050 km)',
          euroNorm: 'Euro 4 (Diesel)',
          taxInsurance: '@tierHigh',
          serviceWear: '@tierModHigh'
        },
        subStats: {
          buildQualityRust: {
            score: 5.3,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 7.9,
            badges: {
              en: ['Proven Relays & Modules', 'Check Early Torque Steering Pull'],
              de: ['Solide Relais & Schalter', 'Frühe Lenkhilfe auf Spiel prüfen'],
              ru: ['Надёжная базовая электрика', 'Проверить ранний датчик ЭУР']
            }
          },
          rideNoiseComfort: {
            score: 6.6,
            badges: {
              en: ['Crisp Euro-Tuned Damping', 'Thicker Tyre/Road Hum on Concrete'],
              de: ['Straff-dynamische Abstimmung', 'Spürbare Abrollgeräusche'],
              ru: ['Собранная упругая подвеска', 'Заметный гул шин по трассе']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.1,
            badges: {
              en: ['540 kg Payload', '1,600 kg Braked Towing'],
              de: ['540 kg Zuladung', '1,600 kg Anhängelast'],
              ru: ['Нагрузка 540 кг', 'Прицеп до 1,600 кг']
            }
          },
          handlingAgility: {
            score: 8.3,
            badges: {
              en: ['Stable Heavy-Nose Highway Poise', 'Double-Wishbone Turn-In'],
              de: ['Ruhiger Autobahn-Geradeauslauf', 'Gute Vorderachs-Präzision'],
              ru: ['Устойчивый ход по трассе', 'Чёткая передняя двухрычажка']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['Belt-Driven 2.0 Diesel', 'Copper Injector Seals & Oil Strainer Critical'],
              de: ['2.0-Zahnriemendiesel', 'Injektor-Kupferringe & Ölsieb kritisch'],
              ru: ['Ременной 2.0 турбодизель', 'Критичны шайбы форсунок и маслоприёмник']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'RF7J (MZR-CD) · 1,998 cc' }, { k: 'architecture', v: { en: 'Inline-4 Iron-Block Diesel · Timing Belt (120k km)', de: 'Reihenvierzylinder Grauguss-Diesel · Zahnriemen (120 Tkm)', ru: 'Рядный 4-цил. чугунный дизель · Ремень ГРМ (120 тыс. км)' } }], note: { en: 'Frugal 1,000+ km cruiser, but demands strict injector copper-washer replacement and sump-strainer cleaning to prevent sudden oil starvation.', de: 'Sparsamer Langstrecken-Diesel, braucht aber zwingend neue Injektor-Kupferdichtringe und Sieb-Kontrolle gegen Ölmangel-Motorschaden.', ru: 'Экономичный трассовый дизель, но обязательно меняйте медные шайбы форсунок и чистите маслоприёмник от кокса.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Early 2.0L Belt Diesel — High Risk of Leaking Injector Washers & Blocked Sump',
                lowScoreReasons: [
                  'Leaking Copper Injector Washers & Clogged Oil Strainer: If the copper seals under the injectors leak, combustion soot turns engine oil into sludge and blocks the sump pickup strainer — starving bearings (€2,000–€3,500+ engine failure).',
                  'Severe Diesel Oil Dilution ("X" Mark): Aborted city DPF regenerations thin the engine oil with raw diesel above the dipstick "X" mark, risking runaway or bearing damage.'
                ],
                strengths: [
                  'Strong 330 Nm mid-range torque and ~6.1 L/100km highway economy when maintained by a specialist.',
                  'Can reach 220,000–250,000 km if copper washers are replaced every 100,000 km and the sump strainer is kept clean.'
                ],
                watchouts: [
                  'Timing belt and water pump require replacement every 120,000 km or 6–7 years.',
                  'Strictly unsuitable for short urban commutes due to early DPF saturation.'
                ],
                beforeYouBuy: [
                  'Pull the dipstick immediately — if oil sits near or above the "X" mark, diesel has diluted the oil.',
                  'Demand receipts proving the sump oil strainer was cleaned, copper injector washers replaced, and timing belt changed.',
                  'Open the oil filler cap with the engine idling — heavy pulsing smoke signals leaking injector washers.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict low-ash diesel oil every 10–15k km & check oil level below X mark',
                    cost: '€180–280',
                    ifIgnored: 'Diesel fuel dilution thins oil and ruins crankshaft bearings early',
                    damageCost: '€2,500–4,200'
                  },
                  {
                    tier: 'red',
                    km: '60,000–100,000 km • 4–7 yrs',
                    action: 'Replace copper injector washers, clean oil pan pickup strainer & check DPF',
                    cost: '€320–560',
                    ifIgnored: 'Black soot leaks into oil, clogs sump strainer and seizes turbo/engine',
                    damageCost: '€2,800–4,500'
                  },
                  {
                    tier: 'red',
                    km: '100,000–130,000 km • 6–8 yrs',
                    action: 'Replace rubber timing belt, hydraulic tensioner & water pump (max 7 yrs!)',
                    cost: '€580–920',
                    ifIgnored: 'Aged brittle belt or leaking tensioner snaps and destroys cylinder valves',
                    damageCost: '€2,400–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Clean EGR valve, replace dual-mass flywheel + clutch & particulate filter clean',
                    cost: '€850–1,420',
                    ifIgnored: 'Rattling flywheel damages gearbox & soot-choked DPF kills turbocharger',
                    damageCost: '€1,900–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: '2nd copper injector seal check, aging intercooler hoses & rusted rear arms',
                    cost: '€460–780',
                    ifIgnored: 'Split rubber boost hoses blow black smoke & rusted rear bolts eat tyres',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'red',
                    km: '210,000–245,000 km • 13–15+ yrs',
                    action: '2nd timing belt kit + hydraulic tensioner + aging engine mounts & injectors',
                    cost: '€650–1,080',
                    ifIgnored: 'Aged belt snaps past interval or tired injectors melt pistons (time/age matter)',
                    damageCost: '€2,500–4,000'
                  }
                ]
              },
              de: {
                headline: 'Früher 2.0L Zahnriemen-Diesel — Risiko durch Injektor-Dichtringe & Ölsieb',
                lowScoreReasons: [
                  'Undichte Kupfer-Dichtringe & verstopftes Ölsieb: Undichte Injektor-Dichtungen verkoken das Motoröl zu Teerschlamm und verstopfen das Ölsieb in der Ölwanne — akute Motorschadengefahr (2.000–3.500 €+).',
                  'Starke Ölverdünnung ("X"-Markierung): Abgebrochene DPF-Reinigungen im Stadtverkehr verdünnen das Öl gefährlich mit Diesel.'
                ],
                strengths: [
                  'Kräftige 330 Nm Drehmoment und ca. 6,1 L/100km Verbrauch auf der Langstrecke.',
                  'Erreicht 220.000–250.000 km bei regelmäßigem Tausch der Kupferringe (alle 100.000 km) und sauberem Ölsieb.'
                ],
                watchouts: [
                  'Zahnriemen und Wasserpumpe alle 120.000 km oder 6–7 Jahre fällig.',
                  'Für reine Kurzstrecken wegen schneller DPF-Sättigung völlig ungeeignet.'
                ],
                beforeYouBuy: [
                  'Sofort den Ölmessstab ziehen — steht das Öl nahe oder über der "X"-Marke, ist es mit Diesel verdünnt.',
                  'Belege für gereinigtes Ölsieb, neue Injektor-Kupferscheiben und den Zahnriemenwechsel verlangen.',
                  'Bei laufendem Motor den Öldeckel leicht öffnen — starker Rauchstoß deutet auf undichte Injektor-Dichtringe hin.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10–15 Tkm DPF-Dieselöl + Ölstand stets unter "X"-Marke prüfen',
                    cost: '180–280 €',
                    ifIgnored: 'Verdünntes Öl schmiert Kurbelwelle und Turbolader zu schlecht',
                    damageCost: '2.500–4.200 €'
                  },
                  {
                    tier: 'red',
                    km: '60.000–100.000 km • 4–7 J.',
                    action: 'Injektor-Kupferdichtringe erneuern, Ölsieb reinigen & DPF-Werte prüfen',
                    cost: '320–560 €',
                    ifIgnored: 'Ölkohle verstopft das Ölsieb — drohender Kurbelwellen- & Turboschaden',
                    damageCost: '2.800–4.500 €'
                  },
                  {
                    tier: 'red',
                    km: '100.000–130.000 km • 6–8 J.',
                    action: 'Zahnriemen, hydraulischen Spanner & Wasserpumpe tauschen (spätestens alle 7 J.!)',
                    cost: '580–920 €',
                    ifIgnored: 'Gealterter Riemen oder defekter Hydraulikspanner reißt — Kapital-Motorschaden',
                    damageCost: '2.400–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'AGR reinigen, Zweimassenschwungrad + Kupplung & Partikelfilter spülen',
                    cost: '850–1.420 €',
                    ifIgnored: 'Klapperndes ZMS zerstört Getriebelager & voller DPF überhitzt Turbo',
                    damageCost: '1.900–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: '2. Kupferring-Kontrolle + poröse Ladeluftschläuche & Hinterachsbuchsen',
                    cost: '460–780 €',
                    ifIgnored: 'Rissige Schläuche kosten Leistung & füllen den DPF extrem schnell mit Ruß',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–245.000 km • 13–15+ J.',
                    action: '2. Zahnriemen-Satz + Motorlager & alternde Diesel-Injektoren prüfen',
                    cost: '650–1.080 €',
                    ifIgnored: 'Gealterter Gummi-Riemen reißt zeitbedingt & Injektoren brennen Kolben durch',
                    damageCost: '2.500–4.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Ранний ременной дизель 2.0 — высокий риск закоксовки маслозаборника',
                lowScoreReasons: [
                  'Прогар медных шайб форсунок и засор сетки маслоприёмника: Прорыв газов под форсунками превращает масло в гудрон и забивает маслозаборник — мотор клинит от масляного голодания (€2 000–3 500+).',
                  'Сильное разжижение масла соляркой (метка "X"): Незавершённые прожиги DPF в городе быстро поднимают уровень масла выше отметки "X".'
                ],
                strengths: [
                  'Тяговитые 330 Н·м и экономичный расход ~6,1 л/100 км на трассе при грамотном сервисе.',
                  'Проходит 220 000–250 000 км при замене медных шайб каждые 100 тыс. км и чистке маслозаборника.'
                ],
                watchouts: [
                  'Ремень ГРМ и помпа требуют замены каждые 120 000 км или 6–7 лет.',
                  'Совершенно не подходит для коротких городских поездок из-за раннего DPF.'
                ],
                beforeYouBuy: [
                  'Сразу вынуть масляный щуп — уровень около или выше метки "X" означает разжижение масла соляркой.',
                  'Требовать чеки на чистку сетки поддона, замену медных шайб под форсунками и ремня ГРМ.',
                  'Приоткрыть маслозаливную крышку на холостых — пульсирующий дым выдаёт прогар шайб форсунок.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Строго малозольное масло раз в 10–15 тыс. км + контроль уровня ниже метки X',
                    cost: '€180–280',
                    ifIgnored: 'Разжиженное топливом масло резко изнашивает вкладыши и турбину',
                    damageCost: '€2 500–4 200'
                  },
                  {
                    tier: 'red',
                    km: '60 000–100 000 км • 4–7 лет',
                    action: 'Заменить медные шайбы под форсунками, почистить маслоприёмник в поддоне',
                    cost: '€320–560',
                    ifIgnored: 'Сажа закоксовывает сетку маслоприёмника и мотор ловит масляное голодание',
                    damageCost: '€2 800–4 500'
                  },
                  {
                    tier: 'red',
                    km: '100 000–130 000 км • 6–8 лет',
                    action: 'Заменить ремень ГРМ, гидронатяжитель и помпу (не реже раза в 7 лет!)',
                    cost: '€580–920',
                    ifIgnored: 'Высохший старый ремень или уставший гидронатяжитель рвутся и гнут клапаны',
                    damageCost: '€2 400–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Чистка ЕГР, замена двухмассового маховика сцепления и промывка сажевого DPF',
                    cost: '€850–1 420',
                    ifIgnored: 'Разбитый маховик ломает КПП, а забитый сажевый перегревает турбину',
                    damageCost: '€1 900–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Повторная смена шайб форсунок + стареющие патрубки турбины и задние рычаги',
                    cost: '€460–780',
                    ifIgnored: 'Лопнувшие от возраста шланги вызывают дым и быстрый засор фильтра DPF',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'red',
                    km: '210 000–245 000 км • 13–15+ лет',
                    action: 'Вторая замена комплекта ремня ГРМ + проверка форсунок и опор двигателя',
                    cost: '€650–1 080',
                    ifIgnored: 'Старый ремень рвётся, а льющие форсунки прожигают поршни (возрастной износ)',
                    damageCost: '€2 500–4 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.2,
            badges: {
              en: ['6-MT • Heavy 330 Nm Flywheel', 'Budget DMF At 150k+ km'],
              de: ['6-Gang • ZMS ab 150.000 km prüfen', 'Nur als Schaltgetriebe'],
              ru: ['6-МКПП • Маховик под 330 Н·м', 'Замена маховика ближе к 160 тыс.']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 10.5 s', '204 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '204 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5 с', 'Макс. 204 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.0,
            badges: {
              en: ['330 Nm @ 2,000 rpm', 'Strong Mid-Range Pull'],
              de: ['330 Nm bei 2.000 U/min', 'Kräftiger Turbo-Schub'],
              ru: ['330 Н·м при 2 000 об/мин', 'Уверенный подхват на трассе']
            }
          },
          efficiencyFuel: {
            score: 8.0,
            badges: {
              en: ['6.1 L/100km', '149 g/km CO2 (Euro 4)'],
              de: ['6,1 L/100km', '149 g/km CO2 (Euro 4)'],
              ru: ['6,1 л/100 км', '149 г/км CO2 (Евро-4)']
            }
          },
          taxInsuranceNorm: {
            score: 7.0,
            badges: {
              en: ['2.0L Euro 4 Diesel Tax', 'Old Euro 4 Urban Zone Risk'],
              de: ['2.0-Euro-4-Diesel-Steuer', 'Euro-4-Umweltzonen beachten'],
              ru: ['Налог 2,0 дизель Евро-4', 'Ограничения въезда для Евро-4']
            }
          },
          maintenanceRepairCosts: {
            score: 4.6,
            repairGuide: {
              routine: [
                { when: { en: 'Every 120,000 km / 6 yrs', de: 'Alle 120.000 km / 6 J.', ru: 'Каждые 120 000 км / 6 лет' }, action: { en: 'Replace timing belt, hydraulic tensioner & water pump', de: 'Zahnriemen, hydraulischen Spanner & Wasserpumpe erneuern', ru: 'Замена ремня ГРМ, гидронатяжителя и помпы' }, cost: '€580–850' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Check mechanical valve clearances & replace diesel fuel filter', de: 'Ventilspiel prüfen/einstellen & Dieselfilter ersetzen', ru: 'Регулировка клапанов и замена топливного фильтра' }, cost: '€180–280' }
              ],
              critical: [
                { when: { en: 'Every 100,000–120,000 km', de: 'Alle 100.000–120.000 km', ru: 'Каждые 100–120 тыс. км' }, action: { en: 'Replace copper injector washers & drop sump to clean oil pickup screen', de: 'Injektor-Kupferdichtringe wechseln & Ölsieb in der Ölwanne reinigen', ru: 'Замена медных шайб форсунок и чистка сетки маслоприёмника' }, cost: '€320–520', risk: { en: 'Blow-by carbon clogs the oil strainer and seizes turbo & crankshaft bearings', de: 'Verkoktes Ölsieb führt zu Öldruckverlust, Turbo- und Motorschaden', ru: 'Кокс забивает маслоприёмник — падение давления масла и клин мотора' }, damage: '€3,500–5,500' },
                { when: { en: '140,000–200,000 km', de: '140.000–200.000 km', ru: '140 000–200 000 км' }, action: { en: 'Dual-mass flywheel + clutch & DPF oil-dilution check (dipstick X-mark)', de: 'ZMS + Kupplung & DPF-Ölverdünnung prüfen (Ölmessstab X-Marke)', ru: 'Двухмассовый маховик + сцепление и контроль уровня масла (метка X)' }, cost: '€1,050–1,550', risk: { en: 'Failed DPF regens raise oil level past X-mark causing engine runaway', de: 'Abgebrochene DPF-Regenerationen verdünnen das Öl bis zum Motorschaden', ru: 'Срывы регенерации DPF разжижают масло выше метки X — риск разноса' }, damage: '€2,500–4,500' }
              ]
            },
            badges: {
              en: ['Belt + Copper Washers + Sump', 'DMF & Early DPF Expenses'],
              de: ['Zahnriemen + Kupferringe + ZMS', 'Höheres Wartungsrisiko im Alter'],
              ru: ['Ремень ГРМ + шайбы + поддон', 'Маховик и ранний DPF недёшевы']
            }
          },
          depreciationResale: {
            score: 5.3,
            badges: {
              en: ['Cheap Used Buy Price', 'Buyers Shy Away From Early DPF'],
              de: ['Sehr günstiger Einkaufspreis', 'Vorsicht vor ungepflegten Euro-4'],
              ru: ['Низкая цена покупки', 'Опасения из-за старого Евро-4']
            }
          }
        }
      },
      {
        id: '2.2-mzr-cd-129',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 129,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.2 MZR-CD 129',
        fullName: '2010 Mazda 6 2.2 MZR-CD 129',
        engineBadge: '2.2L MZR-CD • 129 HP',
        engineSubLabel: {
          en: '2.2L MZR-CD Chain Turbo-Diesel (2009–2012) • 125/129 HP • 6-MT • 340 Nm • FWD',
          de: '2.2L MZR-CD Ketten-Turbodiesel (2009–2012) • 125/129 PS • 6-Gang • 340 Nm • FWD',
          ru: '2.2L MZR-CD цепной турбодизель (2009–2012) • 125/129 л.с. • 6-ст. МКПП • 340 Н·м • FWD'
        },
        rarityLabel: {
          en: 'FRUGAL MILE-EATER',
          de: 'LANGSTRECKEN-SPARER',
          ru: 'ТРАССОВЫЙ ЭКОНОМ'
        },
        originalMsrp: {
          en: '€26,190 New',
          de: '26.190 € Neu',
          ru: '€26 190 новый'
        },
        estUsedPrice: '€5,300',
        perkLabel: {
          en: '✦ Lowest 5.6 L/100km Fuel Burn • 340 Nm Low-Rev Torque • Gentle on Clutch vs 180 HP',
          de: '✦ Sparsame 5,6 L/100km im Alltag • 340 Nm Schub • Schont Kupplung gegenüber 180 PS',
          ru: '✦ Лучший расход 5,6 л/100 км • Тяга 340 Н·м с низов • Мягче грузит сцепление, чем 180 л.с.'
        },
        remarkablePositives: {
          en: [
            'FRUGAL 5.6 L/100KM DIESEL',
            '340 NM RELAXED CRUISING',
            'STRONGER DRIVELINE MARGIN VS 180',
            'EURO 5 CLEANER THAN 2.0 DIESEL',
            '519L BOOT + 1,600 KG TOWING'
          ],
          de: [
            'SPARSAMER 5,6-L-DIESELVERBRAUCH',
            'GELASSENE 340 NM DREHMOMENT',
            'SCHONENDERE KUPPLUNG ALS 180 PS',
            'EURO 5 STATT ALTEM EURO-4-DIESEL',
            '519L KOFFERRAUM + 1.600 KG ZUG'
          ],
          ru: [
            'МИНИМАЛЬНЫЙ РАСХОД 5,6 Л/100 КМ',
            'СПОКОЙНАЯ ТЯГА 340 Н·М',
            'МЕНЬШЕ ГРУЗИТ МАХОВИК, ЧЕМ 180 Л.С.',
            'СТАНДАРТ ЕВРО-5 И МЯГКАЯ РАБОТА',
            'БАГАЖНИК 519 Л И ПРИЦЕП 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'STILL NEEDS TIMING CHAIN CHECK',
            'COPPER WASHERS & SUMP SCREEN CARE',
            'OIL DILUTION ("X" MARK) IN CITY',
            'NO AUTOMATIC GEARBOX OPTION'
          ],
          de: [
            'STEUERKETTEN-LÄNGUNG PRÜFEN',
            'KUPFERRINGE & ÖLSIEB WICHTIG',
            'ÖLVERDÜNNUNG BEI KURZSTRECKE',
            'NUR MIT SCHALTGETRIEBE'
          ],
          ru: [
            'НУЖЕН КОНТРОЛЬ ЦЕПИ ГРМ',
            'ОБЯЗАТЕЛЬНЫ ШАЙБЫ И СЕТКА ПОДДОНА',
            'РОСТ УРОВНЯ МАСЛА В ГОРОДЕ',
            'ТОЛЬКО 6-СТ. МЕХАНИКА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.8,
          comfortCabin: 7.6,
          spacePracticality: 8.3,
          performanceDynamics: 7.7,
          runningCostsTco: 7.5
        },
        specOverrides: {
          engineName: { en: '2.2L I4 MZR-CD 129 (Chain)', de: '2.2L Reihenvierzylinder 129 PS', ru: '2.2L R4 MZR-CD 129 (Цепь)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          payloadRoof: '555 kg · 100 kg',
          towingBraked: '1,600 kg',
          sprint0100: '10.7 s',
          topSpeed: '198 km/h',
          peakTorque: '340 Nm @ 1,800 rpm',
          passingPunch: { en: 'Easy 340 Nm Highway Pull', de: 'Entspannte 340 Nm ab 1.800/min', ru: 'Лёгкая тяга 340 Н·м с 1 800 об/мин' },
          realWorldFuel: '5.6 L/100km',
          tankRange: '64 L (~1,140 km)',
          euroNorm: 'Euro 5 (Diesel)',
          taxInsurance: '@tierMod',
          serviceWear: '@tierModHigh'
        },
        subStats: {
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.5,
            badges: {
              en: ['Updated 2010+ Steering Sensor', 'Proven Japanese Switchgear'],
              de: ['Verbesserte Lenkung ab 2010', 'Sehr solide Japan-Elektronik'],
              ru: ['Доработанный ЭУР с 2010 г.', 'Надёжная японская электрика']
            }
          },
          rideNoiseComfort: {
            score: 7.1,
            badges: {
              en: ['2010+ Retuned Supple Ride', 'Noticeable Road Noise Above 130'],
              de: ['Ab 2010 feiner abgestimmt', 'Hörbare Abrollgeräusche ab 130'],
              ru: ['С 2010 г. подвеска мягче', 'Шум шин выше 130 км/ч']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['555 kg Payload', '1,600 kg Braked Towing'],
              de: ['555 kg Zuladung', '1,600 kg Anhängelast'],
              ru: ['Нагрузка 555 кг', 'Прицеп до 1,600 кг']
            }
          },
          handlingAgility: {
            score: 8.5,
            badges: {
              en: ['Planted Long-Distance Poise', 'Double-Wishbone Turn-In Grip'],
              de: ['Souveräner Autobahn-Gleiter', 'Präzise Doppelquerlenker-Achse'],
              ru: ['Отличная курсовая устойчивость', 'Цепкая передняя двухрычажка']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['129 HP Chain 2.2 Diesel', 'Monitor Timing Chain Stretch & Injector Seals'],
              de: ['129-PS Ketten-Diesel 2.2', 'Steuerkette, Kupferringe & Ölstand prüfen'],
              ru: ['Цепной дизель 2.2 (129 л.с.)', 'Контроль цепи, шайб и уровня масла']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'R2BF (2.2 MZR-CD) · 2,184 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Timing Chain (Monitor Stretch)', de: 'Reihenvierzylinder Alu-Diesel · Steuerkette (Längung prüfen)', ru: 'Рядный 4-цил. алюминиевый дизель · Цепь ГРМ (контроль растяжения)' } }], note: { en: 'Detuned 129 HP version of Mazda’s 2.2 R2 diesel — super frugal (5.6 L/100km), but still requires copper injector-washer and timing-chain stretch checks.', de: 'Gedrosselte 129-PS-Version des 2.2-R2-Diesels — sehr sparsam (5,6 L/100km), erfordert aber Injektor-Dichtring- und Steuerketten-Kontrolle.', ru: 'Дефорсированный дизель 2.2 R2 (129 л.с.) — очень экономичный (5,6 л), но требует контроля медных шайб форсунок и растяжения цепи.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '129 HP Entry 2.2L Chain Diesel— Lowest Fuel Bills',
                strengths: [
                  'Replaced the 2008 belt motor with a smooth, quiet 2.2-litre diesel built for long motorway commutes.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'This 2.2 diesel can stretch its timing chain early— often warned by a flashing DPF light or rough rattle before serious damage occurs.',
                  'Just like earlier Mazda diesels, inspect the oil dipstick "X" mark and replace copper seals every 100,000 km.'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick for rising oil near the "X" mark AND confirm a flashing DPF warning light has never appeared (a classic Mazda sign the timing chain has stretched!).',
                  'Ask for documented timing chain replacement around 120,000–160,000 km plus copper injector washer / sump strainer service.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict low-ash diesel oil every 10–15k km & check oil sits well below X mark',
                    cost: '€190–290',
                    ifIgnored: 'Unburnt diesel in city traffic dilutes oil and accelerates chain wear',
                    damageCost: '€2,400–4,000'
                  },
                  {
                    tier: 'red',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace copper injector washers, clean oil pan strainer & check 6-yr belt',
                    cost: '€320–560',
                    ifIgnored: 'Clogged oil strainer starves turbo bearings & soot ruins engine oil',
                    damageCost: '€2,600–4,300'
                  },
                  {
                    tier: 'red',
                    km: '110,000–155,000 km • 7–9 yrs',
                    action: 'Measure/replace stretched timing chain kit + tensioner (critical check!)',
                    cost: '€850–1,400',
                    ifIgnored: 'Over-stretched chain triggers flashing DPF warning or jumps engine timing',
                    damageCost: '€2,800–4,600'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–190,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel + clutch kit, clean EGR & check DPF ash load',
                    cost: '€880–1,450',
                    ifIgnored: 'High 340 Nm torque chatters worn flywheel and clogged DPF cuts power',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: '2nd injector copper seal check, aging turbo hoses & rusted rear control arms',
                    cost: '€480–820',
                    ifIgnored: 'Split aged rubber boost hoses choke turbo and trigger sudden limp mode',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Service water pump, alternator clutch pulley & aged rubber engine mounts',
                    cost: '€460–780',
                    ifIgnored: 'Seized alternator pulley snaps belt & sagged mounts rattle cabin (parts age)',
                    damageCost: '€1,200–1,900'
                  }
                ]
              },
              de: {
                headline: '129-PS-Einstieg des 2.2L-Kettendiesels— niedrigster Verbrauch & geringere Kupplungslast',
                strengths: [
                  'Läuft kultiviert und sparsam und glänzt mit entspanntem Durchzug auf langen Autobahnetappen.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Typische Schwachstelle des 2.2 Diesels— eine blinkende DPF-Leuchte warnt oft direkt vor einer gelängten Kette.',
                  'Undichte Injektor-Kupferscheiben verkoken das Öl; steigender Ölstand bis "X" zeigt Diesel im Öl an.'
                ],
                beforeYouBuy: [
                  'Unbedingt Ölstand ("X"-Marke) prüfen und sicherstellen, dass die DPF-Lampe nicht blinkt— bei Mazda warnt das oft vor einer gelängten Steuerkette.',
                  'Rechnung über Steuerketten-Prüfung/Tausch sowie neue Injektor-Kupferdichtringe und gereinigtes Ölsieb verlangen.',
                  'Im 4. Gang ab 60 km/h voll beschleunigen und auf Brummen oder Zittern des Zweimassenschwungrads achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10–15 Tkm DPF-Dieselöl + Ölstand stets unter "X"-Marke prüfen',
                    cost: '190–290 €',
                    ifIgnored: 'Diesel im Öl verdünnt den Schmierfilm und längt die Steuerkette früh',
                    damageCost: '2.400–4.000 €'
                  },
                  {
                    tier: 'red',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Injektor-Kupferringe tauschen, Ölwannen-Sieb reinigen & 6-J.-Riemen checken',
                    cost: '320–560 €',
                    ifIgnored: 'Verstopftes Ölsieb führt zu Lagerschäden und frisst den Turbolader',
                    damageCost: '2.600–4.300 €'
                  },
                  {
                    tier: 'red',
                    km: '110.000–155.000 km • 7–9 J.',
                    action: 'Gelängte Steuerkette & Spanner messen/erneuern (wichtigster Check!)',
                    cost: '850–1.400 €',
                    ifIgnored: 'Gelängte Kette löst DPF-Blinken aus und kann überspringen (Motortotalschaden)',
                    damageCost: '2.800–4.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–190.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad + Kupplung ersetzen, AGR & DPF reinigen',
                    cost: '880–1.450 €',
                    ifIgnored: 'Hohe 340 Nm zerlegen müdes ZMS & voller DPF würgt Turbolader ab',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: '2. Kupferring-Kontrolle + alternde Ladeschläuche & Hinterachs-Lenker',
                    cost: '480–820 €',
                    ifIgnored: 'Poröse Turboschläuche platzen unter Druck und schalten Notlauf ein',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe, Lima-Freilauf & gealterte Motorlager erneuern',
                    cost: '460–780 €',
                    ifIgnored: 'Fester Lima-Freilauf wirft Keilriemen ab (Teile altern auch kalendarisch)',
                    damageCost: '1.200–1.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Базовый 2.2 MZR-CD (129 л.с.)— минимальный расход топлива и щадящая нагрузка на трансмиссию',
                strengths: [
                  'Тихий, тяговитый и экономичный 2,2-литровый дизель для дальних трассовых поездок.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Главная болячка 2.2-литровых моторов Mazda— мигающая лампа DPF часто сигнализирует о растянутой цепи!',
                  'Регулярно следите за уровнем масла и меняйте шайбы каждые 100 тыс. км.'
                ],
                beforeYouBuy: [
                  'Проверьте масляный щуп до метки "X" и уточните, не мигала ли лампа DPF (у 2.2 это часто первый сигнал растяжения цепи ГРМ!).',
                  'Ищите чеки на замену цепи ГРМ (120–160 тыс. км), чистку сетки маслозаборника и замену медных шайб под форсунками.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Малозольное масло раз в 10–15 тыс. км + контроль уровня строго ниже метки X',
                    cost: '€190–290',
                    ifIgnored: 'Топливо в масле быстро растягивает цепь ГРМ и губит турбину',
                    damageCost: '€2 400–4 000'
                  },
                  {
                    tier: 'red',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Смена медных шайб форсунок, чистка сетки в поддоне + проверка ремня (6 лет)',
                    cost: '€320–560',
                    ifIgnored: 'Кокс забивает маслоприёмник и мотор ловит проворот вкладышей',
                    damageCost: '€2 600–4 300'
                  },
                  {
                    tier: 'red',
                    km: '110 000–155 000 км • 7–9 лет',
                    action: 'Проверить/заменить растянутую цепь ГРМ с натяжителем (ключевое ТО!)',
                    cost: '€850–1 400',
                    ifIgnored: 'Мигание DPF переходит в перескок цепи и встречу клапанов с поршнями',
                    damageCost: '€2 800–4 600'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–190 000 км • 9–11 лет',
                    action: 'Двухмассовый маховик со сцеплением, чистка ЕГР и сажевого фильтра',
                    cost: '€880–1 450',
                    ifIgnored: 'Крутящий момент 340 Н·м разбивает старый маховик, а забитый DPF греет мотор',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Повторная замена шайб форсунок + стареющие патрубки турбины и задние рычаги',
                    cost: '€480–820',
                    ifIgnored: 'Высохшие от лет шланги наддува лопаются на обгоне с падением в аварию',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Помпа, обгонная муфта генератора и стареющие опоры двигателя',
                    cost: '€460–780',
                    ifIgnored: 'Заклинившая муфта рвёт ремень навесного (детали стареют и по годам)',
                    damageCost: '€1 200–1 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT • Heavy 340 Nm Clutch/DMF', 'No Automatic Option'],
              de: ['6-Gang • Starke 340 Nm Belastung', 'Nur als Schaltgetriebe'],
              ru: ['6-МКПП • Маховик под 340 Н·м', 'Версий с АКПП не было']
            }
          },
          accelerationOvertaking: {
            score: 5.3,
            badges: {
              en: ['0–100 km/h: 10.7 s', '198 km/h Top Speed'],
              de: ['0–100 km/h: 10,7 s', '198 km/h Spitze'],
              ru: ['0–100 км/ч: 10,7 с', 'Макс. 198 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.2,
            badges: {
              en: ['340 Nm @ 1,800 rpm', 'Effortless Highway Passing'],
              de: ['340 Nm ab 1.800 U/min', 'Müheloses Überholen auf Autobahn'],
              ru: ['340 Н·м с 1 800 об/мин', 'Уверенная тяга на трассе']
            }
          },
          efficiencyFuel: {
            score: 8.8,
            badges: {
              en: ['5.6 L/100km', '133–138 g/km CO2 (Euro 5)'],
              de: ['5,6 L/100km', '133–138 g/km CO2 (Euro 5)'],
              ru: ['5,6 л/100 км', '133–138 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 7.0,
            badges: {
              en: ['2.2L Euro 5 Diesel Tax', '129 HP Midsize Class'],
              de: ['2.2-Euro-5-Diesel-Steuer', '129-PS-Mittelklasse-Tarif'],
              ru: ['Налог 2,2 дизель Евро-5', 'Страховка на 129 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.6,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Read timing-chain stretch angle via OBD & replace diesel fuel filter', de: 'Steuerketten-Längungswinkel per Diagnose prüfen & Dieselfilter wechseln', ru: 'Проверка угла растяжения цепи сканером и замена топливного фильтра' }, cost: '€100–160' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Change 6-MT oil & clean EGR valve / intake flap', de: '6-Gang-Getriebeöl wechseln & AGR-Ventil reinigen', ru: 'Замена масла в 6-МКПП и чистка клапана EGR' }, cost: '€200–320' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Replace injector copper washers + clean oil pickup screen & check chain stretch', de: 'Injektor-Kupferdichtringe + Ölsieb reinigen & Steuerkette bei Längung ersetzen', ru: 'Замена медных шайб форсунок + чистка маслоприёмника и контроль цепи' }, cost: '€450–1,350', risk: { en: 'Clogged oil pickup starves bearings; stretched chain triggers flashing DPF light & jumps teeth', de: 'Verstopftes Ölsieb zerstört Lager; gelängte Kette lässt DPF-Lampe blinken und überspringt', ru: 'Забитая сетка гробит вкладыши; растянутая цепь зажигает DPF и перескакивает' }, damage: '€3,500–5,500' },
                { when: { en: '150,000–210,000 km', de: '150.000–210.000 km', ru: '150 000–210 000 км' }, action: { en: 'Dual-mass flywheel + clutch & DPF oil-dilution watch', de: 'Zweimassenschwungrad + Kupplung & DPF-Ölverdünnung beobachten', ru: 'Двухмассовый маховик + сцепление и контроль разжижения масла DPF' }, cost: '€1,050–1,500', risk: { en: 'Clutch judder or rising oil level past dipstick X-mark', de: 'Kupplungsrupfen oder steigender Ölstand über die X-Marke', ru: 'Вибрации сцепления или рост уровня масла выше метки X' }, damage: '€2,400–4,000' }
              ]
            },
            badges: {
              en: ['Timing Chain & Copper Washers', 'Budget Chain + DMF Care'],
              de: ['Steuerkette, Kupferringe & ZMS', 'Teurere Diesel-Wartung beachten'],
              ru: ['Цепь ГРМ, шайбы и маховик', 'Требует бюджета на ТО дизеля']
            }
          },
          depreciationResale: {
            score: 6.3,
            badges: {
              en: ['Chain History Drives Value', 'Discounts Without Proof'],
              de: ['Ketten-Historie bestimmt Preis', 'Abschlag ohne Nachweise'],
              ru: ['Цена зависит от замены цепи', 'Торг без чеков по ГРМ']
            }
          }
        }
      },
      {
        id: '2.2-mzr-cd-163',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 163,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.2 MZR-CD 163',
        fullName: '2010 Mazda 6 2.2 MZR-CD 163',
        engineBadge: '2.2L MZR-CD • 163 HP',
        engineSubLabel: {
          en: '2.2L MZR-CD Chain Turbo-Diesel (2009–2012) • 6-MT • 360 Nm • FWD',
          de: '2.2L MZR-CD Ketten-Turbodiesel (2009–2012) • 6-Gang • 360 Nm • FWD',
          ru: '2.2L MZR-CD цепной турбодизель (2009–2012) • 6-ст. МКПП • 360 Н·м • FWD'
        },
        rarityLabel: {
          en: 'DIESEL SWEET SPOT',
          de: 'BESTER DIESEL-KOMPROMISS',
          ru: 'ЗОЛОТАЯ СЕРЕДИНА ДИЗЕЛЯ'
        },
        originalMsrp: {
          en: '€28,290 New',
          de: '28.290 € Neu',
          ru: '€28 290 новый'
        },
        estUsedPrice: '€5,700',
        perkLabel: {
          en: '✦ Balanced 9.0s Pace & 360 Nm Grunt • Frugal 5.9 L/100km • Strong Highway Cruiser',
          de: '✦ Starke 9,0s & 360 Nm Durchzug • Nur 5,9 L/100km • Idealer Autobahn-Gleiter',
          ru: '✦ Бодрые 9,0 с и тяга 360 Н·м • Расход 5,9 л/100 км • Отличный трассовый лайнер'
        },
        remarkablePositives: {
          en: [
            'SWEET-SPOT 360 NM TORQUE & 9.0S',
            '5.9 L/100KM',
            'LESS CLUTCH STRAIN THAN 180 HP',
            'LONG 6-SPEED MOTORWAY GEARING',
            'SHARP DOUBLE-WISHBONE HANDLING'
          ],
          de: [
            'IDEALER MIX: 360 NM & 9,0S',
            'NUR 5,9 L/100KM VERBRAUCH',
            'VERTRÄGLICHER FÜR ZMS ALS 180 PS',
            'LANGE 6-GANG-AUTOBAHN-ÜBERSETZUNG',
            'SEHR PRÄZISE KURVENLAGE'
          ],
          ru: [
            'ОПТИМАЛЬНЫЕ 360 Н·М И 9,0 С ДО 100',
            'РАСХОД ВСЕГО 5,9 Л/100 КМ',
            'БЕРЕЖНЕЕ К МАХОВИКУ, ЧЕМ 180 Л.С.',
            'ЭКОНОМИЧНАЯ 6-Я ПЕРЕДАЧА',
            'ОТТОЧЕННАЯ УПРАВЛЯЕМОСТЬ'
          ]
        },
        notableNegatives: {
          en: [
            'TIMING CHAIN STRETCH (110–160K KM)',
            'COPPER WASHERS & SUMP SCREEN CARE',
            'OIL DILUTION ("X" MARK) IN CITY',
            'HIGHER 2.2L TAX & NO AUTO BOX'
          ],
          de: [
            'STEUERKETTEN-LÄNGUNG AB 110 TKM',
            'KUPFERRINGE & ÖLSIEB WICHTIG',
            'ÖLVERDÜNNUNG BEI KURZSTRECKE',
            'HÖHERE 2.2-STEUER • KEINE AUTOMATIK'
          ],
          ru: [
            'РАСТЯЖЕНИЕ ЦЕПИ ГРМ (110–160 ТЫС.)',
            'НУЖНА СМЕНА ШАЙБ И ЧИСТКА ПОДДОНА',
            'РОСТ УРОВНЯ МАСЛА В ПРОБКАХ',
            'НАЛОГ НА 2,2 Л • ТОЛЬКО МКПП'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.8,
          comfortCabin: 7.6,
          spacePracticality: 8.3,
          performanceDynamics: 8.2,
          runningCostsTco: 7.4
        },
        specOverrides: {
          engineName: { en: '2.2L I4 MZR-CD 163 (Chain)', de: '2.2L Reihenvierzylinder 163 PS', ru: '2.2L R4 MZR-CD 163 (Цепь)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          payloadRoof: '555 kg · 100 kg',
          towingBraked: '1,600 kg',
          sprint0100: '9.0 s',
          topSpeed: '212 km/h',
          peakTorque: '360 Nm @ 1,800 rpm',
          passingPunch: { en: 'Effortless 360 Nm Surge', de: 'Souveräner 360-Nm-Schub', ru: 'Уверенный подхват 360 Н·м' },
          realWorldFuel: '5.9 L/100km',
          tankRange: '64 L (~1,085 km)',
          euroNorm: 'Euro 5 (Diesel)',
          taxInsurance: '@tierMod',
          serviceWear: '@tierModHigh'
        },
        subStats: {
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.5,
            badges: {
              en: ['Updated 2010+ Steering Sensor', 'Proven Japanese Switchgear'],
              de: ['Verbesserte Lenkung ab 2010', 'Sehr solide Japan-Elektronik'],
              ru: ['Доработанный ЭУР с 2010 г.', 'Надёжная японская электрика']
            }
          },
          rideNoiseComfort: {
            score: 7.1,
            badges: {
              en: ['2010+ Retuned Supple Ride', 'Noticeable Road Noise Above 130'],
              de: ['Ab 2010 feiner abgestimmt', 'Hörbare Abrollgeräusche ab 130'],
              ru: ['С 2010 г. подвеска мягче', 'Шум шин выше 130 км/ч']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['555 kg Payload', '1,600 kg Braked Towing'],
              de: ['555 kg Zuladung', '1,600 kg Anhängelast'],
              ru: ['Нагрузка 555 кг', 'Прицеп до 1,600 кг']
            }
          },
          handlingAgility: {
            score: 8.6,
            badges: {
              en: ['Planted Long-Distance Poise', 'Double-Wishbone Turn-In Grip'],
              de: ['Souveräner Autobahn-Gleiter', 'Präzise Doppelquerlenker-Achse'],
              ru: ['Отличная курсовая устойчивость', 'Цепкая передняя двухрычажка']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['163 HP Chain 2.2 Diesel', 'Monitor Timing Chain Stretch & Injector Seals'],
              de: ['163-PS Ketten-Diesel 2.2', 'Steuerkette, Kupferringe & Ölstand prüfen'],
              ru: ['Цепной дизель 2.2 (163 л.с.)', 'Контроль цепи, шайб и уровня масла']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'R2AA (2.2 MZR-CD) · 2,184 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium Diesel · Twin Balance Shafts + Chain', de: 'Reihenvierzylinder Alu-Diesel · Ausgleichswellen + Kette', ru: 'Рядный 4-цил. алюминиевый дизель · Балансирные валы + цепь' } }], note: { en: 'Quick, refined 360 Nm Autobahn cruiser that easily tops 1,000 km per tank; treat injector washers, oil strainer, and chain stretch as mandatory maintenance.', de: 'Flotter, kultivierter 360-Nm-Autobahngleiter mit über 1.000 km Reichweite; Injektor-Dichtringe, Ölsieb und Steuerkette unbedingt im Blick behalten.', ru: 'Быстрый и мягкий трассовый дизель на 360 Н·м с запасом хода 1 000+ км; шайбы форсунок, маслоприёмник и цепь — обязательный регламент.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Balanced 163 HP 2.2L Chain Diesel— Best Blend of Fast Overtaking & 5.9 L/100km Cruising',
                strengths: [
                  'Strong 360 Nm mid-range torque for motorway gaps while staying frugal.',
                  'Replaced the 2008 belt motor with a smooth, quiet 2.2-litre diesel built for long motorway commutes.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'This 2.2 diesel can stretch its timing chain early— often warned by a flashing DPF light or rough rattle before serious damage occurs.',
                  'Just like earlier Mazda diesels, inspect the oil dipstick "X" mark and replace copper seals every 100,000 km.'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick for rising oil near the "X" mark AND confirm a flashing DPF warning light has never appeared (a classic Mazda sign the timing chain has stretched!).',
                  'Ask for documented timing chain replacement around 120,000–160,000 km plus copper injector washer / sump strainer service.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict low-ash diesel oil every 10–15k km & check oil sits well below X mark',
                    cost: '€190–290',
                    ifIgnored: 'Unburnt diesel in city traffic dilutes oil and accelerates chain wear',
                    damageCost: '€2,400–4,000'
                  },
                  {
                    tier: 'red',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace copper injector washers, clean oil pan strainer & check 6-yr belt',
                    cost: '€320–560',
                    ifIgnored: 'Clogged oil strainer starves turbo bearings & soot ruins engine oil',
                    damageCost: '€2,600–4,300'
                  },
                  {
                    tier: 'red',
                    km: '110,000–155,000 km • 7–9 yrs',
                    action: 'Measure/replace stretched timing chain kit + tensioner (critical check!)',
                    cost: '€850–1,400',
                    ifIgnored: 'Over-stretched chain triggers flashing DPF warning or jumps engine timing',
                    damageCost: '€2,800–4,600'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–190,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel + clutch kit, clean EGR & check DPF ash load',
                    cost: '€880–1,450',
                    ifIgnored: 'High 360 Nm torque chatters worn flywheel and clogged DPF cuts power',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: '2nd injector copper seal check, aging turbo hoses & rusted rear control arms',
                    cost: '€480–820',
                    ifIgnored: 'Split aged rubber boost hoses choke turbo and trigger sudden limp mode',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Service water pump, alternator clutch pulley & aged rubber engine mounts',
                    cost: '€460–780',
                    ifIgnored: 'Seized alternator pulley snaps belt & sagged mounts rattle cabin (parts age)',
                    damageCost: '€1,200–1,900'
                  }
                ]
              },
              de: {
                headline: 'Ausgewogener 163-PS-Diesel— bester Kompromiss aus Überholkraft & 5,9 L/100km',
                strengths: [
                  'Kräftige 360 Nm Drehmoment für souveräne Überholmanöver bei kaum höherem Alltagsverbrauch.',
                  'Läuft kultiviert und sparsam und glänzt mit entspanntem Durchzug auf langen Autobahnetappen.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Typische Schwachstelle des 2.2 Diesels— eine blinkende DPF-Leuchte warnt oft direkt vor einer gelängten Kette.',
                  'Undichte Injektor-Kupferscheiben verkoken das Öl; steigender Ölstand bis "X" zeigt Diesel im Öl an.'
                ],
                beforeYouBuy: [
                  'Unbedingt Ölstand ("X"-Marke) prüfen und sicherstellen, dass die DPF-Lampe nicht blinkt— bei Mazda warnt das oft vor einer gelängten Steuerkette.',
                  'Rechnung über Steuerketten-Prüfung/Tausch sowie neue Injektor-Kupferdichtringe und gereinigtes Ölsieb verlangen.',
                  'Im 4. Gang ab 60 km/h voll beschleunigen und auf Brummen oder Zittern des Zweimassenschwungrads achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10–15 Tkm DPF-Dieselöl + Ölstand stets unter "X"-Marke prüfen',
                    cost: '190–290 €',
                    ifIgnored: 'Diesel im Öl verdünnt den Schmierfilm und längt die Steuerkette früh',
                    damageCost: '2.400–4.000 €'
                  },
                  {
                    tier: 'red',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Injektor-Kupferringe tauschen, Ölwannen-Sieb reinigen & 6-J.-Riemen checken',
                    cost: '320–560 €',
                    ifIgnored: 'Verstopftes Ölsieb führt zu Lagerschäden und frisst den Turbolader',
                    damageCost: '2.600–4.300 €'
                  },
                  {
                    tier: 'red',
                    km: '110.000–155.000 km • 7–9 J.',
                    action: 'Gelängte Steuerkette & Spanner messen/erneuern (wichtigster Check!)',
                    cost: '850–1.400 €',
                    ifIgnored: 'Gelängte Kette löst DPF-Blinken aus und kann überspringen (Motortotalschaden)',
                    damageCost: '2.800–4.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–190.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad + Kupplung ersetzen, AGR & DPF reinigen',
                    cost: '880–1.450 €',
                    ifIgnored: 'Hohe 360 Nm zerlegen müdes ZMS & voller DPF würgt Turbolader ab',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: '2. Kupferring-Kontrolle + alternde Ladeschläuche & Hinterachs-Lenker',
                    cost: '480–820 €',
                    ifIgnored: 'Poröse Turboschläuche platzen unter Druck und schalten Notlauf ein',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe, Lima-Freilauf & gealterte Motorlager erneuern',
                    cost: '460–780 €',
                    ifIgnored: 'Fester Lima-Freilauf wirft Keilriemen ab (Teile altern auch kalendarisch)',
                    damageCost: '1.200–1.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Сбалансированный 2.2 MZR-CD (163 л.с.)— лучший баланс динамики и расхода 5,9 л/100 км',
                strengths: [
                  'Уверенный подхват 360 Н·м на обгонах при скромном расходе топлива.',
                  'Тихая, мягкая и экономичная работа на крейсерской скорости по трассе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Главная болячка 2.2-литровых моторов Mazda— мигающая лампа DPF часто сигнализирует о растянутой цепи!',
                  'Регулярно следите за уровнем масла и меняйте шайбы каждые 100 тыс. км.'
                ],
                beforeYouBuy: [
                  'Проверьте масляный щуп до метки "X" и уточните, не мигала ли лампа DPF (у 2.2 это часто первый сигнал растяжения цепи ГРМ!).',
                  'Ищите чеки на замену цепи ГРМ (120–160 тыс. км), чистку сетки маслозаборника и замену медных шайб под форсунками.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Малозольное масло раз в 10–15 тыс. км + контроль уровня строго ниже метки X',
                    cost: '€190–290',
                    ifIgnored: 'Топливо в масле быстро растягивает цепь ГРМ и губит турбину',
                    damageCost: '€2 400–4 000'
                  },
                  {
                    tier: 'red',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Смена медных шайб форсунок, чистка сетки в поддоне + проверка ремня (6 лет)',
                    cost: '€320–560',
                    ifIgnored: 'Кокс забивает маслоприёмник и мотор ловит проворот вкладышей',
                    damageCost: '€2 600–4 300'
                  },
                  {
                    tier: 'red',
                    km: '110 000–155 000 км • 7–9 лет',
                    action: 'Проверить/заменить растянутую цепь ГРМ с натяжителем (ключевое ТО!)',
                    cost: '€850–1 400',
                    ifIgnored: 'Мигание DPF переходит в перескок цепи и встречу клапанов с поршнями',
                    damageCost: '€2 800–4 600'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–190 000 км • 9–11 лет',
                    action: 'Двухмассовый маховик со сцеплением, чистка ЕГР и сажевого фильтра',
                    cost: '€880–1 450',
                    ifIgnored: 'Крутящий момент 360 Н·м разбивает старый маховик, а забитый DPF греет мотор',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Повторная замена шайб форсунок + стареющие патрубки турбины и задние рычаги',
                    cost: '€480–820',
                    ifIgnored: 'Высохшие от лет шланги наддува лопаются на обгоне с падением в аварию',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Помпа, обгонная муфта генератора и стареющие опоры двигателя',
                    cost: '€460–780',
                    ifIgnored: 'Заклинившая муфта рвёт ремень навесного (детали стареют и по годам)',
                    damageCost: '€1 200–1 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.2,
            badges: {
              en: ['6-MT • Heavy 360 Nm Clutch/DMF', 'No Automatic Option'],
              de: ['6-Gang • Starke 360 Nm Belastung', 'Nur als Schaltgetriebe'],
              ru: ['6-МКПП • Маховик под 360 Н·м', 'Версий с АКПП не было']
            }
          },
          accelerationOvertaking: {
            score: 6.7,
            badges: {
              en: ['0–100 km/h: 9.0 s', '212 km/h Top Speed'],
              de: ['0–100 km/h: 9,0 s', '212 km/h Spitze'],
              ru: ['0–100 км/ч: 9,0 с', 'Макс. 212 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.8,
            badges: {
              en: ['360 Nm @ 1,800 rpm', 'Effortless Highway Passing'],
              de: ['360 Nm ab 1.800 U/min', 'Müheloses Überholen auf Autobahn'],
              ru: ['360 Н·м с 1 800 об/мин', 'Уверенная тяга на трассе']
            }
          },
          efficiencyFuel: {
            score: 8.3,
            badges: {
              en: ['5.9 L/100km', '139–144 g/km CO2 (Euro 5)'],
              de: ['5,9 L/100km', '139–144 g/km CO2 (Euro 5)'],
              ru: ['5,9 л/100 км', '139–144 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 6.4,
            badges: {
              en: ['2.2L Euro 5 Diesel Tax', '163 HP Midsize Class'],
              de: ['2.2-Euro-5-Diesel-Steuer', '163-PS-Mittelklasse-Tarif'],
              ru: ['Налог 2,2 дизель Евро-5', 'Страховка на 163 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.6,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Check timing-chain stretch angle via OBD & replace diesel fuel filter', de: 'Steuerketten-Längung per Diagnose auslesen & Dieselfilter wechseln', ru: 'Контроль растяжения цепи сканером и замена топливного фильтра' }, cost: '€100–160' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Change 6-MT gearbox oil & clean EGR valve / intake manifold', de: '6-Gang-Getriebeöl wechseln & AGR-Ventil reinigen', ru: 'Замена масла в 6-МКПП и чистка клапана EGR' }, cost: '€210–330' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Injector copper washers + oil pickup strainer cleaning & chain kit if >10°', de: 'Injektor-Kupferdichtringe + Ölsieb reinigen & Steuerkette bei Längung', ru: 'Медные шайбы форсунок + чистка маслоприёмника и цепь при растяжении' }, cost: '€450–1,400', risk: { en: 'Oil starvation kills turbo/bearings; stretched chain jumps timing', de: 'Ölmangel zerstört Turbo/Lager; gelängte Kette überspringt', ru: 'Масляное голодание губит турбину и вкладыши; цепь перескакивает' }, damage: '€3,500–5,500' },
                { when: { en: '140,000–200,000 km', de: '140.000–200.000 km', ru: '140 000–200 000 км' }, action: { en: '360 Nm dual-mass flywheel + clutch kit & DPF soot/dilution check', de: '360-Nm-ZMS + Kupplungssatz & DPF-Ölverdünnung prüfen', ru: 'Двухмассовый маховик под 360 Н·м + сцепление и контроль DPF' }, cost: '€1,100–1,600', risk: { en: 'Heavy idle clatter and clutch slip in 5th/6th gear', de: 'Starkes Leerlauf-Klappern und Rutschen im 5./6. Gang', ru: 'Сильный стук на холостых и пробуксовка на 5–6 передачах' }, damage: '€2,400–3,800' }
              ]
            },
            badges: {
              en: ['Timing Chain & Copper Washers', 'Budget Chain + DMF Care'],
              de: ['Steuerkette, Kupferringe & ZMS', 'Teurere Diesel-Wartung beachten'],
              ru: ['Цепь ГРМ, шайбы и маховик', 'Требует бюджета на ТО дизеля']
            }
          },
          depreciationResale: {
            score: 6.9,
            badges: {
              en: ['Chain History Drives Value', 'Discounts Without Proof'],
              de: ['Ketten-Historie bestimmt Preis', 'Abschlag ohne Nachweise'],
              ru: ['Цена зависит от замены цепи', 'Торг без чеков по ГРМ']
            }
          }
        }
      },
      {
        id: '2.2-mzr-cd-180',
        defaultGearboxId: '6-mt-dmf',
        gearboxes: [{ id: '6-mt-dmf', isDefault: true }],
        buyerFitGroup: 'diesel',
        dossierGroup: 'diesel-6mt',
        isDefault: false,
        fuelType: 'diesel',
        hp: 180,
        drivetrain: 'FWD',
        shortTitle: 'MAZDA 6 2.2 MZR-CD 180',
        fullName: '2010 Mazda 6 2.2 MZR-CD 180',
        engineBadge: '2.2L MZR-CD • 180 HP',
        engineSubLabel: {
          en: '2.2L MZR-CD High-Output Chain Diesel (2009–2012) • 180/185 HP • 6-MT • 400 Nm • FWD',
          de: '2.2L MZR-CD Top-Kettendiesel (2009–2012) • 180/185 PS • 6-Gang • 400 Nm • FWD',
          ru: '2.2L MZR-CD топ-цепной турбодизель (2009–2012) • 180/185 л.с. • 6-ст. МКПП • 400 Н·м • FWD'
        },
        rarityLabel: {
          en: '400 NM FLAGSHIP DIESEL',
          de: '400-NM-TOP-DIESEL',
          ru: 'ФЛАГМАН 400 Н·М'
        },
        originalMsrp: {
          en: '€30,590 New',
          de: '30.590 € Neu',
          ru: '€30 590 новый'
        },
        estUsedPrice: '€6,100',
        perkLabel: {
          en: '✦ Massive 400 Nm Torque (8.5s 0–100) • 218 km/h Top Speed • Top-Trim Spec',
          de: '✦ Gewaltige 400 Nm Schub (8,5s 0–100) • 218 km/h Spitze • Top-Ausstattung',
          ru: '✦ Мощнейшая тяга 400 Н·м (8,5 с до 100) • 218 км/ч макс. • Богатые версии'
        },
        remarkablePositives: {
          en: [
            'MASSIVE 400 NM TORQUE • 8.5S',
            '218 KM/H EFFORTLESS AUTOBAHN PACE',
            '6.2 L/100KM FOR 180 HP OUTPUT',
            'SPORT / TOP-LEVEL CABIN EQUIPMENT',
            'SHARP DOUBLE-WISHBONE CHASSIS'
          ],
          de: [
            'STARKE 400 NM • 8,5S AUF 100 KM/H',
            '218 KM/H SOUVERÄNES REISE-TEMPO',
            'NUR 6,2 L/100KM TROTZ 180 PS',
            'MEIST TOP-AUSSTATTUNG MIT BOSE/18"',
            'PRÄZISES DOPPELQUERLENKER-CHASSIS'
          ],
          ru: [
            'ТЯГА 400 Н·М И 8,5 С ДО 100 КМ/Ч',
            'УВЕРЕННАЯ МАКСИМАЛКА 218 КМ/Ч',
            'РАСХОД 6,2 Л/100 КМ ПРИ 180 Л.С.',
            'ТОПОВЫЕ КОМПЛЕКТАЦИИ BOSE / 18"',
            'ОСТРАЯ УПРАВЛЯЕМОСТЬ СЕДАНА'
          ]
        },
        notableNegatives: {
          en: [
            '400 NM WEARS DMF, CLUTCH & TYRES',
            'TIMING CHAIN STRETCH (110–160K KM)',
            'HIGHER 180 HP TAX & INSURANCE',
            'STRICT COPPER-SEAL & OIL CARE'
          ],
          de: [
            '400 NM BELASTEN ZMS & KUPPLUNG',
            'STEUERKETTEN-LÄNGUNG AB 110 TKM',
            'HÖHERE 180-PS-STEUER & VERSICHERUNG',
            'STRENGE KUPFERRING- & ÖLPFLEGE'
          ],
          ru: [
            '400 Н·М БЫСТРЕЕ ИЗНАШИВАЮТ МАХОВИК',
            'ПРОВЕРЯТЬ ЦЕПЬ ГРМ (110–160 ТЫС.)',
            'ДОРОЖЕ НАЛОГ И СТРАХОВКА 180 Л.С.',
            'НУЖНА ЧАСТАЯ ПРОВЕРКА ШАЙБ И МАСЛА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.6,
          comfortCabin: 7.6,
          spacePracticality: 8.3,
          performanceDynamics: 8.5,
          runningCostsTco: 7.2
        },
        specOverrides: {
          engineName: { en: '2.2L I4 MZR-CD 180 (Chain)', de: '2.2L Reihenvierzylinder 180 PS', ru: '2.2L R4 MZR-CD 180 (Цепь)' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@chain',
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          payloadRoof: '555 kg · 100 kg',
          towingBraked: '1,600 kg',
          sprint0100: '8.5 s',
          topSpeed: '218 km/h',
          peakTorque: '400 Nm @ 1,800 rpm',
          passingPunch: { en: 'Muscular 400 Nm Mid-Range', de: 'Wuchtige 400 Nm ab 1.800/min', ru: 'Мощнейшая тяга 400 Н·м' },
          realWorldFuel: '6.2 L/100km',
          tankRange: '64 L (~1,030 km)',
          euroNorm: 'Euro 5 (Diesel)',
          taxInsurance: '@tierModHigh',
          serviceWear: '@tierHigh'
        },
        subStats: {
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Strong Mechanical Arms', 'Inspect Rear Arches & Subframe Rust'],
              de: ['Stabile Achsmechanik', 'Hintere Radläufe & Achsträger prüfen'],
              ru: ['Крепкая механика шасси', 'Осмотр задних арок и подрамника']
            }
          },
          electronicsReliability: {
            score: 8.5,
            badges: {
              en: ['Updated 2010+ Steering Sensor', 'Proven Japanese Switchgear'],
              de: ['Verbesserte Lenkung ab 2010', 'Sehr solide Japan-Elektronik'],
              ru: ['Доработанный ЭУР с 2010 г.', 'Надёжная японская электрика']
            }
          },
          rideNoiseComfort: {
            score: 7.1,
            badges: {
              en: ['2010+ Retuned Supple Ride', 'Noticeable Road Noise Above 130'],
              de: ['Ab 2010 feiner abgestimmt', 'Hörbare Abrollgeräusche ab 130'],
              ru: ['С 2010 г. подвеска мягче', 'Шум шин выше 130 км/ч']
            }
          },
          interiorQualityFeatures: {
            score: 6.8,
            badges: {
              en: ['Driver-Focused Controls • Good Seats', 'Dated Monochrome Top Screen'],
              de: ['Ergonomisches Cockpit • Gute Sitze', 'Schlichtes kleines Info-Display'],
              ru: ['Удобное кресло и руль', 'Устаревший верхний монохром']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.76 m Long Sedan • 11.4 m Turn', 'Sensors Needed For High Boot'],
              de: ['4,76 m Stufenheck • 11,4 m Kreis', 'Parkpiepser hinten ratsam'],
              ru: ['Седан 4,76 м • Разворот 11,4 м', 'Нужен парктроник за высоким багажником']
            }
          },
          safetyProtection: {
            score: 7.6,
            badges: {
              en: ['Euro NCAP 5★ (2009)', '6 Airbags + RVM Blind-Spot Opt.'],
              de: ['Euro NCAP 5★ (2009)', '6 Airbags + Totwinkel-Assistent Opt.'],
              ru: ['Euro NCAP 5★ (2009)', '6 подушек + контроль слепых зон']
            }
          },
          passengerSpaceErgonomics: {
            score: 8.3,
            badges: {
              en: ['Spacious 2,725 mm Wheelbase', 'Fold-Flat Lever Rear Seats'],
              de: ['Großzügiger Radstand hinten', 'Praktische Fernentriegelung'],
              ru: ['Просторный 2-й ряд (база 2 725 мм)', 'Быстрое складывание спинок']
            }
          },
          interiorBootSpace: {
            score: 8.3,
            badges: {
              en: ['519L Long Sedan Boot', 'Narrower Trunk Opening vs Liftback'],
              de: ['519L großer Stufenheck-Kofferraum', 'Kleinere Klappe als Fließheck'],
              ru: ['Багажник седана 519 л', 'Проём уже, чем у лифтбека']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['555 kg Payload', '1,600 kg Braked Towing'],
              de: ['555 kg Zuladung', '1,600 kg Anhängelast'],
              ru: ['Нагрузка 555 кг', 'Прицеп до 1,600 кг']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Planted Long-Distance Poise', 'Double-Wishbone Turn-In Grip'],
              de: ['Souveräner Autobahn-Gleiter', 'Präzise Doppelquerlenker-Achse'],
              ru: ['Отличная курсовая устойчивость', 'Цепкая передняя двухрычажка']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.8 m', '299 mm Discs • Linear Pedal'],
              de: ['100–0 km/h: 36,8 m', '299 mm Scheiben • Lineares Pedal'],
              ru: ['100–0 км/ч: 36,8 м', '299 мм диски • Линейная педаль']
            }
          },
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['180 HP Chain 2.2 Diesel', 'Monitor Timing Chain Stretch & Injector Seals'],
              de: ['180-PS Ketten-Diesel 2.2', 'Steuerkette, Kupferringe & Ölstand prüfen'],
              ru: ['Цепной дизель 2.2 (180 л.с.)', 'Контроль цепи, шайб и уровня масла']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'R2AA High-Output · 2,184 cc' }, { k: 'architecture', v: { en: 'Inline-4 High-Output Diesel · 400 Nm + Timing Chain', de: 'Reihenvierzylinder Top-Diesel · 400 Nm + Steuerkette', ru: 'Рядный 4-цил. форсированный дизель · 400 Н·м + цепь' } }], note: { en: 'Flagship 400 Nm diesel that turns the Mazda 6 into a rapid long-distance express; demands strict injector-washer, chain-stretch, and 400 Nm DMF upkeep.', de: 'Flaggschiff-Diesel mit 400 Nm für müheloses Langstrecken-Tempo; verlangt strikte Pflege von Injektor-Dichtringen, Steuerkette und ZMS.', ru: 'Флагманский дизель 400 Н·м для быстрых марш-бросков; требует строгого контроля шайб форсунок, цепи и двухмассового маховика.' } },
              forcedInduction: '@turboDiesel',
              injection: '@commonRailDi',
              timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Flagship 180 HP 2.2L Chain Diesel — 400 Nm Autobahn Punch With Heavy Driveline Stress',
                strengths: [
                  'Effortlessly overtakes at motorway speeds while loaded, typically fitted in richly equipped Sport-grade sedans.',
                  'Replaced the 2008 belt motor with a smooth, quiet 2.2-litre diesel built for long motorway commutes.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'This 2.2 diesel can stretch its timing chain early— often warned by a flashing DPF light or rough rattle before serious damage occurs.',
                  'Just like earlier Mazda diesels, inspect the oil dipstick "X" mark and replace copper seals every 100,000 km.'
                ],
                beforeYouBuy: [
                  'Check the oil dipstick for rising oil near the "X" mark AND confirm a flashing DPF warning light has never appeared (a classic Mazda sign the timing chain has stretched!).',
                  'Ask for documented timing chain replacement around 120,000–160,000 km plus copper injector washer / sump strainer service.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict low-ash diesel oil every 10–15k km & check oil sits well below X mark',
                    cost: '€190–290',
                    ifIgnored: 'Unburnt diesel in city traffic dilutes oil and accelerates chain wear',
                    damageCost: '€2,400–4,000'
                  },
                  {
                    tier: 'red',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace copper injector washers, clean oil pan strainer & check 6-yr belt',
                    cost: '€340–590',
                    ifIgnored: 'Clogged oil strainer starves turbo bearings & soot ruins engine oil',
                    damageCost: '€2,600–4,300'
                  },
                  {
                    tier: 'red',
                    km: '110,000–155,000 km • 7–9 yrs',
                    action: 'Measure/replace stretched timing chain kit + tensioner (critical check!)',
                    cost: '€890–1,480',
                    ifIgnored: 'Over-stretched chain triggers flashing DPF warning or jumps engine timing',
                    damageCost: '€2,800–4,600'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–190,000 km • 9–11 yrs',
                    action: 'Replace dual-mass flywheel + clutch kit, clean EGR & check DPF ash load',
                    cost: '€880–1,450',
                    ifIgnored: 'High 400 Nm torque chatters worn flywheel and clogged DPF cuts power',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: '2nd injector copper seal check, aging turbo hoses & rusted rear control arms',
                    cost: '€480–820',
                    ifIgnored: 'Split aged rubber boost hoses choke turbo and trigger sudden limp mode',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Service water pump, alternator clutch pulley & aged rubber engine mounts',
                    cost: '€460–780',
                    ifIgnored: 'Seized alternator pulley snaps belt & sagged mounts rattle cabin (parts age)',
                    damageCost: '€1,200–1,900'
                  }
                ]
              },
              de: {
                headline: 'Top-Diesel 2.2 MZR-CD (180 PS) — 400 Nm Schub',
                strengths: [
                  'Beschleunigt souverän bis in hohe Geschwindigkeiten und kommt oft als üppig ausgestattetes Topmodell.',
                  'Läuft kultiviert und sparsam und glänzt auf langen Autobahnetappen.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Typische Schwachstelle des 2.2 Diesels— eine blinkende DPF-Leuchte warnt oft direkt vor einer gelängten Kette.',
                  'Undichte Injektor-Kupferscheiben verkoken das Öl; steigender Ölstand bis "X" zeigt Diesel im Öl an.'
                ],
                beforeYouBuy: [
                  'Unbedingt Ölstand ("X"-Marke) prüfen und sicherstellen, dass die DPF-Lampe nicht blinkt— bei Mazda warnt das oft vor einer gelängten Steuerkette.',
                  'Rechnung über Steuerketten-Prüfung/Tausch sowie neue Injektor-Kupferdichtringe und gereinigtes Ölsieb verlangen.',
                  'Im 4. Gang ab 60 km/h voll beschleunigen und auf Brummen oder Zittern des Zweimassenschwungrads achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Streng alle 10–15 Tkm DPF-Dieselöl + Ölstand stets unter "X"-Marke prüfen',
                    cost: '190–290 €',
                    ifIgnored: 'Diesel im Öl verdünnt den Schmierfilm und längt die Steuerkette früh',
                    damageCost: '2.400–4.000 €'
                  },
                  {
                    tier: 'red',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Injektor-Kupferringe tauschen, Ölwannen-Sieb reinigen & 6-J.-Riemen checken',
                    cost: '340–590 €',
                    ifIgnored: 'Verstopftes Ölsieb führt zu Lagerschäden und frisst den Turbolader',
                    damageCost: '2.600–4.300 €'
                  },
                  {
                    tier: 'red',
                    km: '110.000–155.000 km • 7–9 J.',
                    action: 'Gelängte Steuerkette & Spanner messen/erneuern (wichtigster Check!)',
                    cost: '890–1.480 €',
                    ifIgnored: 'Gelängte Kette löst DPF-Blinken aus und kann überspringen (Motortotalschaden)',
                    damageCost: '2.800–4.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–190.000 km • 9–11 J.',
                    action: 'Zweimassenschwungrad + Kupplung ersetzen, AGR & DPF reinigen',
                    cost: '880–1.450 €',
                    ifIgnored: 'Hohe 400 Nm zerlegen müdes ZMS & voller DPF würgt Turbolader ab',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: '2. Kupferring-Kontrolle + alternde Ladeschläuche & Hinterachs-Lenker',
                    cost: '480–820 €',
                    ifIgnored: 'Poröse Turboschläuche platzen unter Druck und schalten Notlauf ein',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Wasserpumpe, Lima-Freilauf & gealterte Motorlager erneuern',
                    cost: '460–780 €',
                    ifIgnored: 'Fester Lima-Freilauf wirft Keilriemen ab (Teile altern auch kalendarisch)',
                    damageCost: '1.200–1.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Флагманский 2.2 MZR-CD (180 л.с.) — ураганные 400 Н·м при повышенной нагрузке',
                strengths: [
                  'Мощнейший подхват на любых скоростях трассы, обычно в богатой комплектации Sport.',
                  'Тихая и экономичная работа на дальних трассовых перегонах.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Главная болячка 2.2-литровых моторов Mazda— мигающая лампа DPF часто сигнализирует о растянутой цепи!',
                  'Регулярно следите за уровнем масла и меняйте шайбы каждые 100 тыс. км.'
                ],
                beforeYouBuy: [
                  'Проверьте масляный щуп до метки "X" и уточните, не мигала ли лампа DPF (у 2.2 это часто первый сигнал растяжения цепи ГРМ!).',
                  'Ищите чеки на замену цепи ГРМ (120–160 тыс. км), чистку сетки маслозаборника и замену медных шайб под форсунками.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Малозольное масло раз в 10–15 тыс. км + контроль уровня строго ниже метки X',
                    cost: '€190–290',
                    ifIgnored: 'Топливо в масле быстро растягивает цепь ГРМ и губит турбину',
                    damageCost: '€2 400–4 000'
                  },
                  {
                    tier: 'red',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Смена медных шайб форсунок, чистка сетки в поддоне + проверка ремня (6 лет)',
                    cost: '€340–590',
                    ifIgnored: 'Кокс забивает маслоприёмник и мотор ловит проворот вкладышей',
                    damageCost: '€2 600–4 300'
                  },
                  {
                    tier: 'red',
                    km: '110 000–155 000 км • 7–9 лет',
                    action: 'Проверить/заменить растянутую цепь ГРМ с натяжителем (ключевое ТО!)',
                    cost: '€890–1 480',
                    ifIgnored: 'Мигание DPF переходит в перескок цепи и встречу клапанов с поршнями',
                    damageCost: '€2 800–4 600'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–190 000 км • 9–11 лет',
                    action: 'Двухмассовый маховик со сцеплением, чистка ЕГР и сажевого фильтра',
                    cost: '€880–1 450',
                    ifIgnored: 'Крутящий момент 400 Н·м разбивает старый маховик, а забитый DPF греет мотор',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Повторная замена шайб форсунок + стареющие патрубки турбины и задние рычаги',
                    cost: '€480–820',
                    ifIgnored: 'Высохшие от лет шланги наддува лопаются на обгоне с падением в аварию',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Помпа, обгонная муфта генератора и стареющие опоры двигателя',
                    cost: '€460–780',
                    ifIgnored: 'Заклинившая муфта рвёт ремень навесного (детали стареют и по годам)',
                    damageCost: '€1 200–1 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 6.2,
            badges: {
              en: ['6-MT • Heavy 400 Nm Clutch/DMF', 'No Automatic Option'],
              de: ['6-Gang • Starke 400 Nm Belastung', 'Nur als Schaltgetriebe'],
              ru: ['6-МКПП • Маховик под 400 Н·м', 'Версий с АКПП не было']
            }
          },
          accelerationOvertaking: {
            score: 7.1,
            badges: {
              en: ['0–100 km/h: 8.5 s', '218 km/h Top Speed'],
              de: ['0–100 km/h: 8,5 s', '218 km/h Spitze'],
              ru: ['0–100 км/ч: 8,5 с', 'Макс. 218 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.0,
            badges: {
              en: ['400 Nm @ 1,800 rpm', 'Effortless Highway Passing'],
              de: ['400 Nm ab 1.800 U/min', 'Müheloses Überholen auf Autobahn'],
              ru: ['400 Н·м с 1 800 об/мин', 'Уверенная тяга на трассе']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['6.2 L/100km', '142–149 g/km CO2 (Euro 5)'],
              de: ['6,2 L/100km', '142–149 g/km CO2 (Euro 5)'],
              ru: ['6,2 л/100 км', '142–149 г/км CO2 (Евро-5)']
            }
          },
          taxInsuranceNorm: {
            score: 5.9,
            badges: {
              en: ['2.2L Euro 5 Diesel Tax', '180 HP Midsize Class'],
              de: ['2.2-Euro-5-Diesel-Steuer', '180-PS-Mittelklasse-Tarif'],
              ru: ['Налог 2,2 дизель Евро-5', 'Страховка на 180 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.6,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Read timing-chain stretch angle via OBD & replace diesel fuel filter', de: 'Steuerketten-Längung auslesen & Dieselfilter ersetzen', ru: 'Диагностика растяжения цепи и замена топливного фильтра' }, cost: '€100–160' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Change 6-MT gearbox oil & clean EGR valve / boost pipes', de: '6-Gang-Getriebeöl wechseln & AGR-Ventil / Ladeluftstrecke reinigen', ru: 'Замена масла в 6-МКПП и чистка EGR / патрубков наддува' }, cost: '€220–350' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'Injector copper washers + oil pickup screen clean & timing-chain kit', de: 'Injektor-Kupferdichtringe + Ölsieb reinigen & Steuerkettensatz', ru: 'Медные шайбы форсунок + чистка маслоприёмника и комплект цепи ГРМ' }, cost: '€480–1,450', risk: { en: 'Carbon-clogged strainer kills bearings/turbo; stretched chain jumps timing', de: 'Verkoktes Ölsieb zerstört Lager/Turbo; gelängte Kette überspringt', ru: 'Забитый маслоприёмник губит мотор и турбину; цепь перескакивает' }, damage: '€3,800–5,800' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130 000–190 000 км' }, action: { en: '400 Nm dual-mass flywheel + heavy-duty clutch & turbo/DPF check', de: '400-Nm-ZMS + Kupplung & Turbolader-/DPF-Prüfung', ru: 'Двухмассовый маховик под 400 Н·м + сцепление и проверка турбины/DPF' }, cost: '€1,200–1,800', risk: { en: 'Rapid DMF wear under 400 Nm torque and boost-leak limp mode', de: 'Schneller ZMS-Verschleiß bei 400 Nm und Notlauf bei Ladedruckverlust', ru: 'Ускоренный износ маховика от 400 Н·м и аварийный режим по наддуву' }, damage: '€2,600–4,200' }
              ]
            },
            badges: {
              en: ['Timing Chain & Copper Washers', 'Budget Chain + DMF Care'],
              de: ['Steuerkette, Kupferringe & ZMS', 'Teurere Diesel-Wartung beachten'],
              ru: ['Цепь ГРМ, шайбы и маховик', 'Требует бюджета на ТО дизеля']
            }
          },
          depreciationResale: {
            score: 7.2,
            badges: {
              en: ['Chain History Drives Value', 'Discounts Without Proof'],
              de: ['Ketten-Historie bestimmt Preis', 'Abschlag ohne Nachweise'],
              ru: ['Цена зависит от замены цепи', 'Торг без чеков по ГРМ']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Crystal White Pearl', code: '34K', hex: '#eef1f5', glow: 'rgba(238, 241, 245, 0.16)' },
    { name: 'Black Mica', code: '16W', hex: '#181a1f', glow: 'rgba(65, 76, 92, 0.18)' },
    { name: 'Aluminium Metallic', code: '38P', hex: '#b4bcc4', glow: 'rgba(180, 188, 196, 0.16)' },
    { name: 'Graphite Mica', code: '36C', hex: '#4e545c', glow: 'rgba(78, 84, 92, 0.18)' },
    { name: 'True Red', code: 'A4A', hex: '#c21e26', glow: 'rgba(194, 30, 38, 0.2)' },
    { name: 'Stormy Blue Mica', code: '35J', hex: '#263f62', glow: 'rgba(38, 63, 98, 0.2)' },
    { name: 'Brilliant Carbon Grey', code: '38J', hex: '#636970', glow: 'rgba(99, 105, 112, 0.18)' },
    { name: 'Lilac Silver', code: '32S', hex: '#9fa4ac', glow: 'rgba(159, 164, 172, 0.16)' },
    { name: 'Clearwater Blue', code: '40B', hex: '#4b7aa3', glow: 'rgba(75, 122, 163, 0.2)' },
    { name: 'Radiant Ebony', code: '28W', hex: '#39262c', glow: 'rgba(57, 38, 44, 0.18)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '2.0-mzr-disi',
    defaultGroupKey: 'petrol-disi',
    engineCosts: {
      '2.0-mzr-disi':   { group: 'petrol-disi', avgFuelL100: 7.5, fuelPrice: 1.75, tax: 162, ins: 610, service: 320 },
      '1.8-mzr':        { group: 'petrol-na',   avgFuelL100: 7.4, fuelPrice: 1.75, tax: 146, ins: 560, service: 290 },
      '2.0-mzr':        { group: 'petrol-na',   avgFuelL100: 7.8, fuelPrice: 1.75, tax: 168, ins: 600, service: 300 },
      '2.5-mzr':        { group: 'petrol-na',   avgFuelL100: 8.3, fuelPrice: 1.75, tax: 228, ins: 700, service: 340 },
      '2.0-mzr-cd':     { group: 'diesel-20',   avgFuelL100: 6.1, fuelPrice: 1.65, tax: 308, ins: 660, service: 410 },
      '2.2-mzr-cd-129': { group: 'diesel-22',   avgFuelL100: 5.6, fuelPrice: 1.65, tax: 280, ins: 640, service: 390 },
      '2.2-mzr-cd-163': { group: 'diesel-22',   avgFuelL100: 5.9, fuelPrice: 1.65, tax: 292, ins: 680, service: 400 },
      '2.2-mzr-cd-180': { group: 'diesel-22',   avgFuelL100: 6.2, fuelPrice: 1.65, tax: 304, ins: 720, service: 420 }
    },
    groups: {
      'petrol-disi': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average (Body Check)', note: 'Mechanicals & petrol emissions score cleanly; rear subframe & arch rust decide inspection' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Chain-driven 2.0 DISI facelift engine rarely strands drivers' },
            { source: 'WhatCar? Survey', value: '95.9% Reliability', note: 'Owners praise crisp handling and low garage frequency on petrol models' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich (Rost prüfen)', note: 'Technik und Abgaswerte meist top; Hinterachsträger & Radläufe entscheiden bei der HU' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Der kettengetriebene 2.0-DISI-Benziner ab Facelift läuft extrem pannenarm' },
            { source: 'WhatCar? Umfrage', value: '95,9 % Zuverlässigkeit', note: 'Hohe Besitzerzufriedenheit durch agiles Fahrwerk und seltene Defekte' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего (осмотр кузова)', note: 'Механика и выхлоп бензина отличные; итог осмотра зависит от ржавчины подрамника и арок' },
            { source: 'ADAC Pannenstatistik', value: 'Очень надёжен', note: 'Цепной рестайлинговый мотор 2.0 DISI крайне редко подводит в дороге' },
            { source: 'Рейтинг WhatCar?', value: '95,9% надёжности', note: 'Владельцы ценят управляемость и редкие обращения в сервис' }
          ]
        },
        extendedChecks: {
          en: [
            'Inspect rear wheel-arch lips, rocker sills, and the rear multi-link subframe for salt corrosion or flaky underseal.',
            'Listen for smooth cold idle and crisp throttle response — direct-injection intake valves benefit from periodic cleaning.',
            'On optional 5-speed automatic cars, verify 60,000 km ATF service and smooth gearshifts without flare.',
            'Test Bose amplifier output (if fitted), RVM blind-spot radar warnings, and check all rear brake calipers for sticking.'
          ],
          de: [
            'Hintere Radlaufkanten, Schweller und den hinteren Mehrlenker-Achsträger gründlich auf Streusalz-Rost prüfen.',
            'Kaltleerlauf und Gasannahme testen — Direkteinspritzung profitiert von regelmäßiger Ölpflege gegen Verkokung.',
            'Bei der optionalen 5-Stufen-Automatik auf weiche Schaltvorgänge und erfolgte Getriebeölwechsel achten.',
            'Bose-Verstärker (falls verbaut), Totwinkel-Assistent (RVM) und freigängige hintere Bremssättel testen.'
          ],
          ru: [
            'Осмотреть кромки задних арок, пороги и задний подрамник на предмет коррозии от зимних реагентов.',
            'Проверить ровный холодный запуск и отклик газа — прямому впрыску полезны частые замены масла.',
            'На версиях с 5-АКПП убедиться в плавности переключений и наличии замен ATF.',
            'Проверить работу усилителя Bose (если установлен), радара мёртвых зон RVM и задних суппортов.'
          ]
        },
        savingsNote: {
          en: 'At ~7.5 L/100 km and modest insurance, the Euro 5 2.0 DISI avoids diesel DPF/chain bills while offering sharper economy than older port-injected MZR units.',
          de: 'Mit ca. 7,5 L/100 km und moderater Versicherung spart der Euro-5-2.0-DISI teure DPF-/Dieselketten-Kosten bei spürbar besserer Effizienz als ältere Sauger.',
          ru: 'Расход около 7,5 л/100 км и умеренная страховка позволяют избежать дизельных трат на DPF и цепь, экономя топливо по сравнению со старым MZR.'
        },
        market: {
          supplyDemand: {
            en: 'Good availability of 2010–2012 facelift petrols; clean rust-free 2.0 DISI hatchbacks and sedans sell faster than diesels.',
            de: 'Gutes Angebot an 2010–2012er Facelift-Benzinern; rostfreie 2.0 DISI sind deutlich gefragter als ältere Diesel.',
            ru: 'Хороший выбор рестайлинговых машин 2010–2012 гг.; живые 2.0 DISI без ржавчины продаются быстрее дизелей.'
          },
          sweetSpot: {
            en: '2010–2012 Facelift 2.0 MZR-DISI Exclusive / Sports-Line under 140,000 km with underbody wax proof (€6,800–€8,600).',
            de: 'Facelift 2010–2012 2.0 MZR-DISI Exclusive / Sports-Line unter 140.000 km mit sauberem Unterboden (6.800–8.600 €).',
            ru: 'Рестайлинг 2010–2012 гг. 2.0 MZR-DISI Exclusive / Sports-Line до 140 тыс. км с живым днищем (€6 800–8 600).'
          },
          outlook3to5yr: {
            en: 'Holds near €4,400–€5,600 in 3–5 yrs; Euro 5 petrol status keeps it welcome in city zones long after Euro 4/5 diesels.',
            de: 'Stabilisiert sich in 3–5 Jahren um 4.400–5.600 € — Euro-5-Benziner bleibt auch in Innenstädten langfristig nutzbar.',
            ru: 'Сохранит стоимость на уровне €4 400–5 600 через 3–5 лет благодаря экологическому классу Euro 5 и надёжности.'
          }
        },
        watchoutExtra: {
          en: [
            'Factory underbody rust protection is thin; untreated rear subframes and wheel-arch seams corrode quickly in salt-belt climates.',
            'Direct-injection intake valves accumulate light carbon deposits if used solely on short urban trips.'
          ],
          de: [
            'Dünner Werks-Unterbodenschutz lässt unbehandelte Hinterachsträger und Radlauffalze im Winter schnell anrosten.',
            'Kurzstreckenbetrieb begünstigt leichte Ablagerungen an den Einlassventilen des Direkteinspritzers.'
          ],
          ru: [
            'Тонкий заводской антикор: без дополнительной обработки зимой быстро ржавеют задний подрамник и кромки арок.',
            'Частые короткие поездки по городу способствуют образованию нагара на впускных клапанах прямого впрыска.'
          ]
        }
      },
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid (Watch Rust)', note: 'Simple chain-driven MZR petrols pass emissions easily; inspect sills & arches' },
            { source: 'ADAC Pannenstatistik', value: 'Highly Reliable', note: 'Zero turbo, zero direct-injection pumps; very low roadside failure risk' },
            { source: 'WhatCar? Survey', value: '95.1% Reliability', note: 'Dependable daily transport; older 1.8/2.0 units need oil-level monitoring' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide (Rost im Blick)', note: 'Robuste MZR-Sauger mit unauffälliger Abgasprüfung; Schweller & Radläufe prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr pannensicher', note: 'Kein Turbo, keine Hochdruckpumpe — extrem geringes Ausfallrisiko unterwegs' },
            { source: 'WhatCar? Umfrage', value: '95,1 % Zuverlässigkeit', note: 'Verlässliche Alltagstechnik; bei älteren 1.8/2.0 regelmäßig Ölstand kontrollieren' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Надёжен (следить за кузовом)', note: 'Простые цепные атмосферники MZR легко проходят техосмотр; проверять пороги и арки' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Нет турбины и ТНВД — минимальный риск внезапной поломки в пути' },
            { source: 'Рейтинг WhatCar?', value: '95,1% надёжности', note: 'Крепкие моторы на каждый день; на старых 1.8/2.0 важно следить за уровнем масла' }
          ]
        },
        extendedChecks: {
          en: [
            'Check rear wheel arches, sills, and rear subframe closely on 2008–2009 pre-facelift cars for salt rust.',
            'Inspect spark plugs & tailpipe soot for signs of piston-ring oil consumption on high-mileage 1.8 / 2.0 MZR units.',
            'Listen at idle for timing-chain rattle or noisy intake manifold swirl-flap actuators.',
            'Test clutch bite point (especially on 2.5 MZR) and inspect front/rear shock absorbers for weeping oil.'
          ],
          de: [
            'Bei 2008–2009er Vorfacelift-Modellen hintere Radläufe, Schweller und Hinterachsträger sehr genau auf Rost prüfen.',
            'Endrohr und Service-Historie auf Ölverbrauch über die Kolbenringe bei älteren 1.8 / 2.0 MZR kontrollieren.',
            'Im Leerlauf auf ruhige Steuerkette und klapperfreie Drallklappen im Saugrohr achten.',
            'Kupplungsdruckpunkt (besonders beim 2.5 MZR) und trockene Stoßdämpfer prüfen.'
          ],
          ru: [
            'Тщательно осмотреть задние арки, пороги и подрамник на дорестайлинговых машинах 2008–2009 гг.',
            'Проверить историю расхода масла и отсутствие сизого дыма на пробежных 1.8 / 2.0 MZR.',
            'На холостых послушать тишину цепи ГРМ и отсутствие стука вихревых заслонок впускного коллектора.',
            'Оценить износ сцепления (особенно на 2.5 MZR) и сухость амортизаторов.'
          ]
        },
        savingsNote: {
          en: 'Simple port fuel injection keeps garage bills low (~€290–€340/yr routine service) and avoids direct-injection or DPF repairs, offsetting 7.4–8.3 L/100 km fuel burn.',
          de: 'Schlichte Saugrohreinspritzung hält Werkstattkosten niedrig (ca. 290–340 €/Jahr) und erspart teure DPF-/Turbo-Schäden bei 7,4–8,3 L/100 km.',
          ru: 'Простой распределённый впрыск удешевляет сервис (€290–340/год) и избавляет от трат на турбину и DPF, компенсируя расход 7,4–8,3 л/100 км.'
        },
        market: {
          supplyDemand: {
            en: 'Budget-friendly 1.8 and 2.0 MZR sedans sell steadily to private buyers; rare 2.5 MZR 170 HP models attract enthusiasts.',
            de: 'Günstige 1.8 und 2.0 MZR sind solide Alltagskäufer-Favoriten; der seltene 2.5 MZR (170 PS) zieht Kenner an.',
            ru: 'Доступные 1.8 и 2.0 MZR стабильно востребованы в бюджетном сегменте; редкий 2.5 MZR (170 л.с.) ценят любители.'
          },
          sweetSpot: {
            en: '2009–2011 2.0 MZR (147 HP) or clean 2.5 MZR Sports-Line under 150,000 km with rustproofing (€5,800–€8,000).',
            de: '2009–2011 2.0 MZR (147 PS) oder gepflegter 2.5 MZR Sports-Line unter 150.000 km mit Rostschutz (5.800–8.000 €).',
            ru: '2009–2011 гг. 2.0 MZR (147 л.с.) или ухоженный 2.5 MZR Sports-Line до 150 тыс. км с антикором (€5 800–8 000).'
          },
          outlook3to5yr: {
            en: 'Near bottomed out (~€3,500–€4,800 in 3–5 yrs); clean rust-free chassis condition matters more than odometer reading.',
            de: 'Wertverlust weitgehend abgeflacht (ca. 3.500–4.800 € in 3–5 Jahren) — Rostfreiheit zählt mehr als der Kilometerstand.',
            ru: 'Почти достиг ценового дна (€3 500–4 800 через 3–5 лет) — состояние кузова важнее цифр на одометре.'
          }
        },
        watchoutExtra: {
          en: [
            'Sticking intake manifold swirl flaps can rattle on older 1.8/2.0 MZR engines; check idle smoothness.',
            'High-mileage 1.8/2.0 MZR cars with extended oil changes may develop stuck oil-control rings.'
          ],
          de: [
            'Ausgeschlagene Drallklappen im Ansaugkrümmer können bei älteren 1.8/2.0 MZR klappern.',
            'Überzogene Ölwechselintervalle fördern bei hohen Laufleistungen festsitzende Ölabstreifringe.'
          ],
          ru: [
            'На старых 1.8/2.0 MZR нередко постукивают заслонки впускного коллектора — проверяйте на холостых.',
            'Редкая замена масла на больших пробегах приводит к залеганию маслосъёмных колец.'
          ]
        }
      },
      'diesel-20': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Below Average (Age/Rust)', note: 'Early Euro 4 diesels often show higher mileage wear, DPF & rust defects' },
            { source: 'ADAC Pannenstatistik', value: 'Caution (Sump/Washers)', note: 'Requires strict injector seal & sump strainer checks to avoid oil starvation' },
            { source: 'WhatCar? Survey', value: '86.4% Reliability', note: 'Dragged down by copper injector washer blow-by & urban DPF oil dilution' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Unterdurchschnittlich', note: 'Frühe Euro-4-Diesel zeigen oft hohe Laufleistung, DPF- und Rostmängel' },
            { source: 'ADAC Pannenstatistik', value: 'Wartungssensibel', note: 'Injektor-Kupferdichtungen und Ölsieb müssen zwingend kontrolliert werden' },
            { source: 'WhatCar? Umfrage', value: '86,4 % Zuverlässigkeit', note: 'Abzüge durch undichte Injektor-Dichtungen und Diesel-Ölverdünnung im DPF-Betrieb' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Ниже среднего', note: 'Ранние дизели Euro 4 чаще имеют большие пробеги, вопросы по DPF и коррозии' },
            { source: 'ADAC Pannenstatistik', value: 'Требует внимания', note: 'Критически важен контроль медных шайб форсунок и чистоты маслоприёмника' },
            { source: 'Рейтинг WhatCar?', value: '86,4% надёжности', note: 'Оценка снижена из-за прорыва газов под форсунки и разжижения масла сажевым фильтром' }
          ]
        },
        extendedChecks: {
          en: [
            'Open the oil filler cap with the engine idling — chuffing smoke/blow-by indicates leaking copper injector washers.',
            'Demand documented receipts for sump removal & oil pick-up strainer cleaning plus copper washer replacement.',
            'Verify timing-belt + water-pump replacement (every 120,000 km) and check the oil dipstick X-mark for diesel dilution.',
            'Inspect dual-mass flywheel noise at idle and check rear wheel arches/subframe thoroughly for rust.'
          ],
          de: [
            'Bei laufendem Motor Öleinfülldeckel öffnen — deutlicher Qualm/Druck weist auf undichte Injektor-Kupferscheiben hin.',
            'Belege für abgebaute Ölwanne, gereinigtes Ölsieb und erneuerte Injektor-Dichtringe vorlegen lassen.',
            'Zahnriemen- inkl. Wasserpumpenwechsel (alle 120.000 km) sowie X-Markierung am Ölpeilstab prüfen.',
            'Zweimassenschwungrad im Leerlauf abhören und hintere Radläufe/Achsträger auf Rost untersuchen.'
          ],
          ru: [
            'На работающем двигателе приоткрыть маслозаливную крышку: дым и пульсация газов выдают прогоревшие шайбы форсунок.',
            'Потребовать чеки на снятие поддона, чистку маслозаборника и замену медных уплотнительных колец.',
            'Проверить замену ремня ГРМ с помпой (раз в 120 тыс. км) и уровень масла на щупе до метки «X».',
            'Послушать двухмассовый маховик на холостых и осмотреть задние арки и подрамник на коррозию.'
          ]
        },
        savingsNote: {
          en: 'Low ~€4,500 entry price and 6.1 L/100 km fuel use look tempting, yet preventive copper-washer, sump-strainer, timing-belt & DPF upkeep easily erase savings on neglected cars.',
          de: 'Der günstige Kaufpreis (~4.500 €) und 6,1 L/100 km locken, doch Injektor-Dichtungen, Ölsieb, Zahnriemen und DPF fressen Ersparnisse schnell auf.',
          ru: 'Низкая цена (~€4 500) и расход 6,1 л/100 км заманчивы, но вложения в шайбы форсунок, маслозаборник, ремень ГРМ и DPF легко съедают экономию.'
        },
        market: {
          supplyDemand: {
            en: 'Weakest demand in the Mazda 6 GH lineup due to Euro 4 city restrictions and known sump/washer reputation; steep discounts apply.',
            de: 'Geringste Nachfrage in der GH-Reihe wegen Euro-4-Einstufung und bekannter Ölsieb-Thematik — deutliche Preisabschläge üblich.',
            ru: 'Самый низкий спрос в линейке из-за норм Euro 4 и репутации маслоприёмника — продаются с заметным дисконтом.'
          },
          sweetSpot: {
            en: 'Only documented highway 2008–2009 cars with proven copper-washer, sump-strainer, and timing-belt invoices (€4,200–€5,200).',
            de: 'Nur Langstrecken-Fahrzeuge mit nachweislich erneuerten Injektor-Dichtungen, Ölsieb-Reinigung und Zahnriemen (4.200–5.200 €).',
            ru: 'Только ухоженные трассовые авто с подтверждённой заменой шайб форсунок, чисткой поддона и свежим ГРМ (€4 200–5 200).'
          },
          outlook3to5yr: {
            en: 'Flattens near €2,600–€3,500 scrap/export floor in 3–5 yrs; strictly a budget motorway tool if mechanically vetted.',
            de: 'Fällt in 3–5 Jahren auf ein Restwert-Niveau von 2.600–3.500 € — nur für Vielfahrer nach gründlichem Check sinnvoll.',
            ru: 'Через 3–5 лет опустится к базовому уровню €2 600–3 500 — имеет смысл только для трассы после строгой диагностики.'
          }
        },
        watchoutExtra: {
          en: [
            'Leaking copper injector seals carbonize engine oil and plug the sump strainer — leading to catastrophic turbo & bearing failure.',
            'Euro 4 emission status limits urban low-emission zone access across major European cities.'
          ],
          de: [
            'Undichte Injektor-Kupferscheiben verkoken das Motoröl und verstopfen das Ölsieb — drohender Turbo- und Motorschaden.',
            'Euro-4-Abgasnorm schränkt die Einfahrt in viele europäische Umweltzonen ein.'
          ],
          ru: [
            'Прогар медных шайб форсунок закоксовывает масло и забивает сетку маслоприёмника — риск масляного голодания турбины и вкладышей.',
            'Экологический класс Euro 4 ограничивает въезд в центральные зоны ряда европейских городов.'
          ]
        }
      },
      'diesel-22': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Average (Chain/DPF)', note: 'Euro 5 2.2 diesels run strong on highways, but require chain & DPF verification' },
            { source: 'ADAC Pannenstatistik', value: 'Mixed (Watch Chain)', note: 'Dependable highway pullers once timing chain stretch & injector seals are checked' },
            { source: 'WhatCar? Survey', value: '89.5% Reliability', note: 'Better than early 2.0 CD, though chain stretch & DPF dilution hurt scores' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Durchschnitt (Kette/DPF)', note: 'Euro-5-2.2-Diesel laufen auf Langstrecke stark, brauchen aber Ketten- & DPF-Check' },
            { source: 'ADAC Pannenstatistik', value: 'Durchwachsen (Kette prüfen)', note: 'Starke Autobahn-Motoren, sofern Steuerketten-Längung & Injektor-Dichtungen geprüft sind' },
            { source: 'WhatCar? Umfrage', value: '89,5 % Zuverlässigkeit', note: 'Solider als der frühe 2.0 CD, doch Kettenlängung & Ölverdünnung kosten Punkte' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Средний (цепь/DPF)', note: 'Дизели 2.2 Euro 5 уверенно держат трассу, но требуют проверки цепи ГРМ и DPF' },
            { source: 'ADAC Pannenstatistik', value: 'Неровно (следить за цепью)', note: 'Тяговитые трассовые моторы при условии контроля растяжения цепи и шайб форсунок' },
            { source: 'Рейтинг WhatCar?', value: '89,5% надёжности', note: 'Надёжнее раннего 2.0 CD, но растяжение цепи и сажевый фильтр снижают итоговый балл' }
          ]
        },
        extendedChecks: {
          en: [
            'Check timing-chain stretch status (diagnostics cam/crank angle or flashing DPF warning light) and listen for cold-start rattle.',
            'Inspect oil dipstick for diesel dilution above the X-mark and ask for copper injector washer & sump-strainer service proof.',
            'Test clutch & dual-mass flywheel engagement under load in 4th/5th gear (especially on 163 / 180 HP models).',
            'Check rear subframe, brake lines, and rear wheel arches carefully for winter corrosion.'
          ],
          de: [
            'Steuerketten-Längung auslesen lassen (bzw. blinkende DPF-Lampe beachten) und beim Kaltstart genau hinhören.',
            'Ölpeilstab auf Dieselverdünnung über der X-Marke prüfen und Nachweise zu Injektor-Kupferscheiben & Ölsieb erfragen.',
            'Kupplung und Zweimassenschwungrad im 4./5. Gang unter Volllast testen (besonders bei 163 / 180 PS).',
            'Hinterachsträger, Bremsleitungen und hintere Radläufe gründlich auf Rost kontrollieren.'
          ],
          ru: [
            'Проверить растяжение цепи ГРМ диагностикой (или отсутствие мигающей лампы DPF) и послушать холодный пуск.',
            'Осмотреть масляный щуп на предмет уровня выше отметки «X» и спросить чеки на шайбы форсунок и чистку поддона.',
            'Проверить сцепление и маховик под нагрузкой на 4–5 передаче (особенно на версиях 163 и 180 л.с.).',
            'Осмотреть задний подрамник, тормозные трубки и задние арки на отсутствие ржавчины.'
          ]
        },
        savingsNote: {
          en: 'Frugal ~5.6–6.2 L/100 km highway economy suits 20,000+ km/yr commuters, but budget ~€900–€1,400 if timing-chain or DMF replacement has not yet been done.',
          de: 'Sparsame 5,6–6,2 L/100 km passen ab 20.000 km/Jahr, doch falls Steuerkette oder ZMS noch ausstehen, sollten 900–1.400 € eingeplant werden.',
          ru: 'Расход 5,6–6,2 л/100 км выгоден при пробегах свыше 20 тыс. км/год, но при отсутствии замен цепи ГРМ или маховика стоит заложить €900–1 400.'
        },
        market: {
          supplyDemand: {
            en: 'Affordable used pricing (€5,300–€6,500) makes 2.2 MZR-CD tempting, but knowledgeable buyers pay a clear premium for proven chain replacement.',
            de: 'Günstige Preise (5.300–6.500 €) locken, doch Kenner zahlen nur für Exemplare mit belegtem Steuerketten-Tausch volle Kurse.',
            ru: 'Доступная цена (€5 300–6 500) привлекает покупателей, но машины с подтверждённой заменой цепи ГРМ ценятся ощутимо дороже.'
          },
          sweetSpot: {
            en: '2010–2012 Facelift 2.2 MZR-CD 163 HP Exclusive / Sports-Line with documented timing-chain & washer replacement (€5,600–€7,200).',
            de: 'Facelift 2010–2012 2.2 MZR-CD 163 PS Exclusive / Sports-Line mit belegtem Ketten- & Dichtungswechsel (5.600–7.200 €).',
            ru: 'Рестайлинг 2010–2012 гг. 2.2 MZR-CD 163 л.с. Exclusive / Sports-Line с чеком на замену цепи и шайб (€5 600–7 200).'
          },
          outlook3to5yr: {
            en: 'Depreciates steadily toward €3,400–€4,500 over 3–5 yrs; best held long-term by high-mileage drivers once chain & washers are sorted.',
            de: 'Sinkt in 3–5 Jahren Richtung 3.400–4.500 € — für Langstreckenfahrer nach erledigter Kette ein starker Preis-Leistungs-Tipp.',
            ru: 'Снизится к €3 400–4 500 за 3–5 лет — выгодный вариант для долгих трассовых пробегов после обслуживания цепи ГРМ.'
          }
        },
        watchoutExtra: {
          en: [
            'Simplex timing chain stretches around 120,000–170,000 km if oil intervals are stretched or diluted by DPF regenerations.',
            'Copper injector seals & sump pick-up screen still require periodic checks just like the older 2.0 diesel.'
          ],
          de: [
            'Die Steuerkette längt sich bei überzogenen Ölwechseln oder DPF-Ölverdünnung oft zwischen 120.000 und 170.000 km.',
            'Auch der 2.2er benötigt regelmäßige Kontrolle der Injektor-Kupferscheiben und des Ölsiebs in der Ölwanne.'
          ],
          ru: [
            'Цепь ГРМ нередко растягивается к 120–170 тыс. км, особенно при затянутых ТО или разжижении масла соляркой.',
            'Как и на старом 2.0, на 2.2 важно периодически менять медные шайбы форсунок и проверять маслоприёмник.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (GH)', de: 'EU / DE Ausstattungslinien (GH)', ru: 'Европейские комплектации (GH)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2010+ facelift condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Facelift-Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: '2010 Facelift (GH II) Upgrades', de: 'Facelift-Upgrades ab 2010 (GH II)', ru: 'Обновления рестайлинга 2010 (GH II)' },
      faceliftKicker: { en: '2010+ Refresh', de: 'Facelift 2010+', ru: 'Рестайлинг 2010+' },
      trims: [
        {
          id: 'prime-line',
          tierClass: 'tier-1',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Prime-Line', de: 'Prime-Line', ru: 'Prime-Line' },
          delta: { en: '-€800 – €1,200', de: '-800 – 1.200 €', ru: '-€800 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Entry trim with steel wheels, manual A/C, and simple cloth interior — reliable basics only.',
            de: 'Schlichtes Basismodell mit Stahlfelgen, manueller Klima und einfachen Stoffsitzen.',
            ru: 'Базовая версия на штампованных дисках с ручным кондиционером и простой тканью.'
          },
          highlights: {
            en: ['16" steel wheels & manual A/C', '6 airbags, DSC & 4× electric windows', 'Basic CD/MP3 audio & cloth upholstery'],
            de: ['16"-Stahlfelgen & manuelle Klima', '6 Airbags, DSC & 4x Fensterheber', 'Basis-CD/MP3-Radio & Stoffsitze'],
            ru: ['Штампованные диски 16" и кондиционер', '6 подушек, DSC и полный электропакет', 'Базовая магнитола и тканевый салон']
          }
        },
        {
          id: 'center-line',
          tierClass: 'tier-2',
          tier: { en: 'Core Daily', de: 'Alltags-Basis', ru: 'Стандарт' },
          name: { en: 'Center-Line', de: 'Center-Line', ru: 'Center-Line' },
          delta: { en: '-€300 – €600', de: '-300 – 600 €', ru: '-€300 – €600' },
          isSweetSpot: false,
          summary: {
            en: 'Common daily spec adding dual-zone auto climate, 16"/17" alloys, and cruise control.',
            de: 'Solide Alltags-Ausstattung mit 2-Zonen-Klimaautomatik, Alufelgen und Tempomat.',
            ru: 'Популярная средняя комплектация с 2-зонным климатом, литыми дисками и круизом.'
          },
          highlights: {
            en: ['16" / 17" alloys & dual-zone climate', 'Cruise control & leather steering wheel', 'Rain/light sensors & fog lamps'],
            de: ['16"/17"-Alus & 2-Zonen-Klimaautomatik', 'Tempomat & Lederlenkrad', 'Licht-/Regensensor & Nebelscheinwerfer'],
            ru: ['Диски 16"/17" и 2-зонный климат', 'Круиз-контроль и кожаный руль', 'Датчики света/дождя и противотуманки']
          }
        },
        {
          id: 'exclusive-line',
          tierClass: 'tier-3',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Exclusive-Line', de: 'Exclusive-Line', ru: 'Exclusive-Line' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'The Mazda 6 GH sweet spot — adds heated seats, front/rear parking sensors, Bi-Xenon, and Bose audio.',
            de: 'Der beste GH-Sweet-Spot: Sitzheizung, Parksensoren v/h, Bi-Xenon (FL teils AFS) und Bose-Sound.',
            ru: 'Оптимальный выбор: подогрев сидений, парктроники вкруг, биксенон и акустика Bose.'
          },
          highlights: {
            en: ['Heated front seats & front/rear sensors', 'Bi-Xenon headlamps & RVM blind-spot radar', 'Bose 8-speaker audio + 6-CD / Bluetooth'],
            de: ['Sitzheizung vorn & Parksensoren v/h', 'Bi-Xenon & Spurwechselassistent (RVM)', 'Bose-8-Lautsprecher-System'],
            ru: ['Подогрев сидений и парктроники вкруг', 'Биксенон и контроль слепых зон RVM', 'Аудиосистема Bose (8 динамиков)']
          }
        },
        {
          id: 'sports-line',
          tierClass: 'tier-4',
          tier: { en: 'Sport Spec', de: 'Sport-Linie', ru: 'Спорт' },
          name: { en: 'Sports-Line', de: 'Sports-Line', ru: 'Sports-Line' },
          delta: { en: '+€400 – €800', de: '+400 – 800 €', ru: '+€400 – €800' },
          isSweetSpot: false,
          summary: {
            en: 'Sharp-looking sport package with 18" alloys, aero grille/bumpers, half-leather seats, and LED taillights.',
            de: 'Sportliche Linie mit 18"-Alus, Sport-Grill/Schürzen, Teilleder und LED-Rückleuchten.',
            ru: 'Спортивный пакет с дисками 18", обвесом, комбинированным салоном и LED-фонарями.'
          },
          highlights: {
            en: ['18" alloys & sporty honeycomb grille/skirts', 'Half-leather bolsters & aluminium pedals', 'Bi-Xenon AFS & Bose 8-speaker system'],
            de: ['18"-Alus & Sport-Grill/Seitenschweller', 'Teilleder-Sportsitze & Alupedale', 'Bi-Xenon AFS & Bose-Sound'],
            ru: ['Диски 18" и спортивный обвес', 'Комбинированный салон и накладки педалей', 'Адаптивный биксенон и Bose']
          }
        },
        {
          id: 'dynamic',
          tierClass: 'tier-6',
          tier: { en: 'Special Sport', de: 'Dynamic', ru: 'Спецспорт' },
          name: { en: 'Dynamic', de: 'Dynamic', ru: 'Dynamic' },
          delta: { en: '+€600 – €1,100', de: '+600 – 1.100 €', ru: '+€600 – €1 100' },
          isSweetSpot: false,
          summary: {
            en: 'Early flagship sport-luxury trim combining the aero look with full leather and keyless entry.',
            de: 'Sportliches Top-Paket (vor allem Vor-Facelift) mit Aero-Optik, Vollleder und Keyless Entry.',
            ru: 'Топовый спортивно-комфортный пакет с обвесом, полной кожей и бесключевым доступом.'
          },
          highlights: {
            en: ['Sport aero bumpers & 18" alloys', 'Full leather + heated electric seats', 'Keyless Entry & RVM blind-spot assist'],
            de: ['Sport-Stoßfänger & 18"-Alufelgen', 'Vollleder + elektrische Sitzmemory', 'Keyless Entry & RVM-Totwinkelwarner'],
            ru: ['Спортивные бамперы и диски 18"', 'Полная кожа + электропамять кресел', 'Бесключевой доступ и система RVM']
          }
        },
        {
          id: 'top',
          tierClass: 'tier-7',
          tier: { en: 'Flagship', de: 'Topmodell', ru: 'Флагман' },
          name: { en: 'Top', de: 'Top', ru: 'Top' },
          delta: { en: '+€800 – €1,500', de: '+800 – 1.500 €', ru: '+€800 – €1 500' },
          isSweetSpot: false,
          summary: {
            en: 'Full-loaded executive flagship featuring full leather, power memory driver seat, keyless start, and Bose.',
            de: 'Voll ausgestattete Top-Linie mit Vollleder, Memory-Fahrersitz, Startknopf, RVM und Bose-Audio.',
            ru: 'Максимальный флагман: кожаный салон, память кресла водителя, кнопка старта, RVM и Bose.'
          },
          highlights: {
            en: ['Full perforated leather + memory driver seat', 'Keyless Entry & push-button start', 'Bi-Xenon AFS, Bose & sunroof optional'],
            de: ['Vollleder + elektrischer Memory-Fahrersitz', 'Keyless Entry & Startknopf', 'Bi-Xenon AFS, Bose & Schiebedach opt.'],
            ru: ['Перфорированная кожа + память кресла', 'Бесключевой доступ и запуск с кнопки', 'Bi-Xenon AFS, Bose и люк опционально']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'std', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Front & Rear Parking Sensors', de: 'Parksensoren vorn & hinten', ru: 'Парктроники спереди и сзади' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Bi-Xenon Headlights (AFS on Facelift)', de: 'Bi-Xenon-Scheinwerfer (AFS ab Facelift)', ru: 'Биксеноновые фары (AFS на рестайле)' }, vals: ['no', 'no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Bose 8-Speaker Sound System', de: 'Bose 8-Lautsprecher-Soundsystem', ru: 'Аудиосистема Bose (8 динамиков)' }, vals: ['no', 'no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'RVM Blind-Spot Radar (2010+)', de: 'Spurwechselassistent RVM (ab 2010)', ru: 'Контроль слепых зон RVM (с 2010 г.)' }, vals: ['no', 'no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Full Leather + Electric Memory Seat', de: 'Vollleder + elektr. Memory-Sitz', ru: 'Полная кожа + память кресла' }, vals: ['no', 'no', 'no', 'no', 'std', 'std'] },
        { feature: { en: 'Keyless Entry & Push-Button Start', de: 'Keyless Entry & Startknopf', ru: 'Бесключевой доступ и кнопка старта' }, vals: ['no', 'no', 'no', 'opt', 'std', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Low, driver-focused seating position and legible gauges make the cabin feel sportier than Avensis or Mondeo.',
          'Older monochrome top strip display and firm lower plastics look dated, though switches hold up reliably.',
          'Generous 519 L trunk (or 510–1,702 L on the 5-door liftback) with handy Karakuri fold-flat levers.'
        ],
        de: [
          'Tiefe, fahraktive Sitzposition und klare Rundinstrumente sorgen für mehr Sport-Flair als bei Avensis oder Mondeo.',
          'Das schlichte Monochrom-Infodisplay und harte Kunststoffe unten wirken betagt, Schalter bleiben jedoch robust.',
          'Großer 519-L-Kofferraum (bis 1.702 L beim Fließheck) mit praktischen Karakuri-Hebeln zum flachen Umklappen.'
        ],
        ru: [
          'Низкая драйверская посадка и читаемые приборы создают более спортивное настроение, чем в Avensis или Mondeo.',
          'Монохромный верхний дисплей и жёсткий пластик внизу устарели, но кнопки и отделка служат без сбоев.',
          'Вместительный багажник 519 л (до 1 702 л у лифтбека) с удобными рычагами складывания Karakuri.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: 'MZR petrol cabins pair a crisp short-throw 5/6-speed manual (or durable 5-speed torque-converter auto on 2.0/2.0 DISI) with light steering-wheel feel and hushed cruising below 3,500 rpm.',
          de: 'Die MZR-Benziner bieten einen knackigen 5-/6-Gang-Handschalter (oder eine robuste 5-Stufen-Wandlerautomatik im 2.0/2.0 DISI) sowie ruhigen Lauf bis 3.500/min.',
          ru: 'Бензиновые версии MZR радуют коротким ходом 5/6-МКПП (либо надёжным 5-АКПП на 2.0/2.0 DISI) и тихой работой до 3 500 об/мин.'
        },
        diesel: {
          en: 'MZR-CD diesel models come exclusively with a 6-speed manual gearbox and slightly heavier clutch pedal, adding strong 330–400 Nm motorway pull alongside audible cold-idle clatter.',
          de: 'Die MZR-CD-Diesel sind ausschließlich mit 6-Gang-Schaltgetriebe gekoppelt und kombinieren kräftige 330–400 Nm Autobahnschub mit hörbarem Kaltlauf-Nageln.',
          ru: 'Дизельные MZR-CD оснащались только 6-МКПП с более плотной педалью сцепления, обеспечивая тягу 330–400 Н·м и заметный дизельный рокот на холодную.'
        },
        conventional: {
          en: 'Ergonomic Japanese cockpit with physical climate dials, CF-Net steering controls, and supportive front seats built for long journeys.',
          de: 'Ergonomisches Cockpit mit klaren Klimareglern, CF-Net-Lenkradtasten und gut stützenden Sitzen für weite Strecken.',
          ru: 'Эргономичный японский салон с удобными шайбами климата, кнопками на руле CF-Net и комфортными креслами.'
        }
      },
      faceliftUpgrades: {
        en: [
          'Revised 2010+ front grille, restyled headlights with adaptive Bi-Xenon AFS, and refreshed rear bumper.',
          'Piano-black center console accents and softer damper/steering bushing tuning to cut harsh bump impact.',
          'New 2.0 MZR-DISI direct-injection Euro 5 petrol replaced the older 147 HP 2.0 port-injected unit.',
          'Added Hill-Launch Assist, ESS emergency brake-flash, and wider RVM blind-spot radar availability.'
        ],
        de: [
          'Überarbeiteter Kühlergrill ab 2010, neu gezeichnete Scheinwerfer (mit Bi-Xenon-Kurvenlicht AFS) und Heckschürze.',
          'Klavierlack-Akzente in der Mittelkonsole sowie feiner abgestimmte Dämpfer und Lenkungsbuchsen für mehr Abrollkomfort.',
          'Neuer Euro-5-Direkteinspritzer 2.0 MZR-DISI (155 PS) löste den bisherigen 2.0 MZR (147 PS) ab.',
          'Berganfahrhilfe, Notbrems-Warnblinken (ESS) und breitere Verfügbarkeit des RVM-Totwinkelwarners.'
        ],
        ru: [
          'Обновлённая решётка радиатора 2010+, подправленная оптика с адаптивным биксеноном AFS и задний бампер.',
          'Глянцевые чёрные вставки на центральной консоли и перенастроенные амортизаторы с сайлентблоками рулевой рейки.',
          'Новый бензиновый мотор Euro 5 2.0 MZR-DISI (155 л.с.) сменил прежний 2.0 MZR (147 л.с.).',
          'Появились помощь при старте в гору, мигание стоп-сигналов ESS и более широкая доступность радара RVM.'
        ]
      }
    }
  }
});