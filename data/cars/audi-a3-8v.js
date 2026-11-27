// AutoDuel Vehicle Data — audi-a3-8v
registerAutoDuelVehicle({
  roster: {
    id: 'audi-a3-8v',
    number: '15',
    carType: 'hatchback',
    gridOrder: 15,
    gridLabel: 'Audi A3 (8V)',
    yearMake: '2012-2020 AUDI',
    shortTitle: 'A3 (8V)',
    fullName: '2012-2020 Audi A3 Sportback (8V)',
    rarityClass: 'rarity-common',
    drivetrain: 'FWD',
    image: 'assets/audi-a3-8v.webp',
    defaultEngineId: '2.0-tdi-150',
    sharedBuyerFit: {
      cards: {
        a38vInteriorClass: {
          en: 'You value class-leading interior quality: Metal rotary knobs, tight panel gaps, and refined acoustics still feel genuinely premium.',
          de: 'Du schätzt erstklassige Verarbeitung: Alu-Drehregler, exakte Spaltmaße und ruhige Dämmung setzen Maßstäbe in der Kompaktklasse.',
          ru: 'Ты ценишь лучший интерьер в классе: Алюминиевые регуляторы, идеальные зазоры и тишина ощущаются по-настоящему дорого.'
        },
        a38vMqbSolved: {
          en: 'You want the vastly improved MQB TFSI era: Belt-driven EA211 engines fix the older 8P timing-chain and oil-burning headaches.',
          de: 'Du willst die deutlich ausgereifteren MQB-TFSI-Motoren: Die Zahnriemen-EA211 beheben die alten 8P-Ketten- und Ölprobleme.',
          ru: 'Ты хочешь надёжное поколение MQB: Ременные моторы EA211 избавились от старых болезней цепи и масложора 8P.'
        },
        a38vEa288Diesel: {
          en: 'You want a refined belt-driven commuter: Modern EA288 engines feature 210,000 km timing belt intervals and 4.5–5.3 L/100km highway economy.',
          de: 'Du willst einen kultivierten Langstrecken-Motor: Moderne EA288 bieten 210.000 km Zahnriemenintervall und 4,5–5,3 L/100km Verbrauch.',
          ru: 'Тебе нужен экономичный трассовый мотор: Современный EA288 с интервалом ремня 210 000 км тратит 4,5–5,3 л/100 км.'
        },
        a38vSafetyTech: {
          en: 'You prioritize top crash safety: 5-star Euro NCAP (95% adult score), 7 airbags, and crisp chassis balance protect you well.',
          de: 'Du legst Wert auf Top-Sicherheit: 5 Sterne im Euro NCAP (95 % Insassenschutz), 7 Airbags und sicheres MQB-Fahrwerk.',
          ru: 'Тебе важна максимальная безопасность: 5 звёзд Euro NCAP (95% за взрослых), 7 подушек и отточенная управляемость.'
        },
        a38vBigEnginePoise: {
          en: 'You want effortless wet-DSG & multi-link poise: Higher-output trims add multi-link rear suspension and tougher wet-clutch DSGs.',
          de: 'Du willst souveräne Technik: Stärkere Motorisierungen bringen Mehrlenker-Hinterachse und das deutlich robustere Nasskupplungs-DSG.',
          ru: 'Тебе нужен запас по шасси и коробке: Мощные версии получают заднюю многорычажку и выносливую мокрую DSG.'
        },
        a38vEtronCommute: {
          en: 'You can charge daily at home or work: Silent ~35–42 km electric commuting plus 204 HP combined highway punch.',
          de: 'Du kannst täglich laden: Leises elektrisches Pendeln (~35–42 km) kombiniert mit 204 PS Systemleistung auf der Autobahn.',
          ru: 'У тебя есть ежедневная зарядка: Тихие поездки на электротяге (~35–42 км) и бодрые 204 л.с. на трассе.'
        },
        a38vGtronEconomy: {
          en: 'You have CNG stations nearby: Ultra-low fuel cost per km on natural gas with clean emissions.',
          de: 'Du hast Erdgas-Tankstellen in der Nähe: Extrem niedrige Kraftstoffkosten pro Kilometer im CNG-Betrieb.',
          ru: 'Рядом есть метановые заправки: Сверхнизкая стоимость километра на природном газе и чистый выхлоп.'
        },
        a38vWaterPumpWatch: {
          en: 'You want zero cooling-system leaks: MQB plastic water-pump and thermostat housings commonly seep coolant past 80k–120k km.',
          de: 'Du willst keinerlei Kühlmittel-Undichtigkeiten: MQB-Kunststoff-Wasserpumpen und Thermostatgehäuse schwitzen ab 80–120 Tkm häufiger.',
          ru: 'Ты не хочешь следить за системой охлаждения: Пластиковый корпус помпы и термостата на MQB нередко подтекает после 80–120 тыс. км.'
        },
        a38vDryDsgTraffic: {
          en: 'You drive daily in dense traffic with an automatic: This variant uses the 7-speed dry DSG, which wears clutches faster in jams.',
          de: 'Du stehst oft im Stadtstau mit Automatik: Diese Variante nutzt das trockene 7-Gang-DSG mit höherem Kupplungsverschleiß im Stop-and-Go.',
          ru: 'Ты часто ездишь в пробках на автомате: Эта версия оснащается сухой 7-DSG, сцепления которой быстрее изнашиваются в заторах.'
        },
        a38vCompactBoot: {
          en: 'You pack bulky family strollers often: The 380 L boot (and tall rear center tunnel) is tighter than a Civic or Octavia.',
          de: 'Du transportierst oft sperriges Familiengepäck: 380 L Kofferraum und der hohe Mitteltunnel bieten weniger Platz als ein Octavia.',
          ru: 'Тебе нужен просторный семейный багажник: Отсек 380 л и высокий центральный тоннель теснее, чем у Octavia или Civic.'
        },
        a38vSpecialBootShrink: {
          en: 'You need full trunk depth: Batteries or CNG tanks shrink the e-tron/g-tron boot down to just 280 L.',
          de: 'Du brauchst vollen Kofferraum: Akkus bzw. Gastanks verkleinern den Stauraum bei e-tron und g-tron auf nur 280 L.',
          ru: 'Тебе важен полный объём багажника: Батарея или газовые баллоны урезают багажник e-tron/g-tron до 280 л.'
        },
        a38vPremiumPrice: {
          en: 'You shop strictly on budget: Audi badge prestige keeps used purchase prices and dealer servicing higher than Golf/Leon siblings.',
          de: 'Du schaust streng auf den Preis: Das Audi-Image hält Gebrauchtwagenpreise und Werkstattstundensätze höher als bei Golf oder Leon.',
          ru: 'Ты строго ограничен в бюджете: Премиальный статус Audi делает покупку и обслуживание дороже соплатформенных Golf и Leon.'
        },
        a38vHigherFuel: {
          en: 'You chase ultra-low fuel consumption: 180–190 HP petrol engines drink noticeably more in spirited city driving.',
          de: 'Du jagst Minimalverbrauch: Die 180–190-PS-Benziner verbrauchen bei flotter Stadtfahrt spürbar mehr.',
          ru: 'Ты гонишься за минимальным расходом: Мощные бензиновые 180–190 л.с. заметно прожорливее в городе.'
        }
      }
    },
    buyerFitGroups: {
      'small-tfsi': {
        summary: {
          en: 'A refined, safe, upmarket compact hatch — much more reliable than the older 8P, best paired with the 6-speed manual for city jams.',
          de: 'Ein hochwertiger, sparsamer Kompakter — deutlich zuverlässiger als der Vorgänger 8P, im Stadtstau am besten als 6-Gang-Schalter.',
          ru: 'Качественный и тихий компактный хэтчбек — намного надёжнее прежнего 8P, в пробках лучше выбрать 6-МКПП.'
        },
        ideal: ['a38vMqbSolved', 'a38vInteriorClass', 'a38vSafetyTech', 'globalPetrolCityZones'],
        skip: ['a38vWaterPumpWatch', 'a38vDryDsgTraffic', 'a38vCompactBoot', 'a38vPremiumPrice']
      },
      'big-tfsi': {
        summary: {
          en: 'Quick, composed, and plush — upgrades to multi-link rear suspension and tougher wet-clutch DSG for confident highway pace.',
          de: 'Schnell, souverän und hochwertig — mit Mehrlenker-Hinterachse und robusterem Nasskupplungs-DSG für hohes Autobahntempo.',
          ru: 'Быстрый и собранный премиум-хэтчбек — получает заднюю многорычажку и крепкую мокрую DSG для трассы.'
        },
        ideal: ['a38vBigEnginePoise', 'a38vInteriorClass', 'a38vSafetyTech', 'globalPetrolCityZones'],
        skip: ['a38vWaterPumpWatch', 'a38vCompactBoot', 'a38vPremiumPrice', 'a38vHigherFuel']
      },
      phev: {
        summary: {
          en: 'A clever plug-in hybrid for daily chargers — silent EV commuting if a 280 L boot and HV battery checks work for you.',
          de: 'Ein cleverer Plug-in-Hybrid für tägliches Laden — leises E-Pendeln, sofern 280 L Kofferraum und Akku-Check passen.',
          ru: 'Умный подзаряжаемый гибрид для тех, у кого есть розетка — тихая езда на токе при багажнике 280 л.'
        },
        ideal: ['a38vEtronCommute', 'a38vInteriorClass', 'a38vSafetyTech', 'globalPetrolCityZones'],
        skip: ['a38vSpecialBootShrink', 'a38vWaterPumpWatch', 'a38vPremiumPrice', 'a38vDryDsgTraffic']
      },
      'small-tdi': {
        summary: {
          en: 'Ultra-frugal highway commuter with refined MQB cabin — best with the 6-speed manual and regular motorway runs.',
          de: 'Extrem sparsamer Langstrecken-Pendler im edlen Cockpit — am besten als 6-Gang-Schalter mit regelmäßigem Autobahnauslauf.',
          ru: 'Сверхэкономичный трассовый вариант в премиальном салоне — оптимален на 6-МКПП и дальних маршрутах.'
        },
        ideal: ['a38vEa288Diesel', 'a38vInteriorClass', 'a38vSafetyTech', 'globalDieselLongRange'],
        skip: [
          'globalDieselShortTripRisk',
          'a38vDryDsgTraffic',
          'a38vWaterPumpWatch',
          'a38vCompactBoot'
        ]
      },
      'big-tdi': {
        summary: {
          en: 'One of the strongest all-round compact cruisers — pairs 150–184 HP EA288 diesel punch with multi-link handling and wet DSG.',
          de: 'Einer der stärksten Kompakt-Tourer — kombiniert 150–184 PS EA288-Durchzug mit Mehrlenkerachse und Nasskupplungs-DSG.',
          ru: 'Один из лучших компактных трассовых авто — сочетает тягу 150–184 л.с., многорычажку и выносливую мокрую DSG.'
        },
        ideal: ['a38vBigEnginePoise', 'a38vEa288Diesel', 'a38vInteriorClass', 'globalDieselLongRange'],
        skip: [
          'globalDieselShortTripRisk',
          'a38vWaterPumpWatch',
          'a38vCompactBoot',
          'a38vPremiumPrice'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'MQB Galvanized Body • Tight Panel Gaps — Low Corrosion Risk on 2016+ Cars',
          strengths: [
            'MQB Galvanized Body • Tight Panel Gaps keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'MQB galvanized shell resists corrosion well; inspect front strut mounts and rear brake discs.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Verzinkte MQB-Karosserie • Enge Spaltmaße — Kaum Rostprobleme ab Facelift 2016',
          strengths: [
            'Verzinkte MQB-Karosserie • Enge Spaltmaße hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Verzinkte MQB-Karosserie rostet kaum; Domlager und hintere Bremsscheiben prüfen.',
            'Hintere Radlaufkanten, Achsträger-Aufnahmen und Bremsleitungen am Unterboden auf Winter-Korrosion prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Оцинкованный кузов MQB • Точная сборка — Низкий риск коррозии (особенно 2016+)',
          strengths: [
            'Оцинкованный кузов MQB • Точная сборка надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Оцинкованный кузов MQB отлично сопротивляется ржавчине; проверьте опорники и задние диски.',
            'Низкий риск коррозии (особенно 2016+).'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Class-Leading Interior Fit & Finish',
          strengths: [
            'Class-Leading Interior Fit & Finish ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Class-leading aluminum knobs and pop-up MMI, though the rear center seat tunnel is tall.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Bestes Interieur der Kompaktklasse',
          strengths: [
            'Bestes Interieur der Kompaktklasse sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Klassenbeste Verarbeitung mit Alu-Reglern; hoher Mitteltunnel engt den 5. Platz ein.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Лучший по качеству салон в классе',
          strengths: [
            'Лучший по качеству салон в классе обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Лучшая в классе отделка салона, но высокий центральный тоннель мешает третьему пассажиру сзади.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '4.31 m Length • 10.9 m Turning Circle',
          strengths: [
            '4.31 m Length • 10.9 m Turning Circle makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Slimmer pillars and optional sensors make the 4.31 m body easy to place in city streets.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '4,31 m Länge • 10,9 m Wendekreis',
          strengths: [
            '4,31 m Länge • 10,9 m Wendekreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Schlankere Säulen und Parksensoren machen den 4,31 m langen A3 sehr übersichtlich.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Длина 4,31 м • Разворот 10,9 м',
          strengths: [
            'Длина 4,31 м • Разворот 10,9 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Тонкие стойки и парктроники делают габариты 4,31 м очень понятными в городе.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (95% Adult) — 7 Airbags + Pre-Sense Front (Facelift)',
          strengths: [
            'Euro NCAP 5★ (95% Adult) provides solid passive crash protection for its class and era.',
            '7 Airbags + Pre-Sense Front (Facelift) standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (95% Insassen) — 7 Airbags + Pre-Sense Front (Facelift)',
          strengths: [
            'Euro NCAP 5★ (95% Insassen) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '7 Airbags + Pre-Sense Front (Facelift) serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (95% защита) — 7 подушек + Pre-Sense Front',
          strengths: [
            'Euro NCAP 5★ (95% защита) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '7 подушек + Pre-Sense Front входят в оснащение большинства версий.'
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
          headline: 'Great Front Ergonomics & Seat Support',
          strengths: [
            'Great Front Ergonomics & Seat Support keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Tight Center Rear Seat Tunnel.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Top-Ergonomie vorn • Gute Sitze',
          strengths: [
            'Top-Ergonomie vorn • Gute Sitze sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Hoher Mitteltunnel im Fond.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Отличная эргономика спереди',
          strengths: [
            'Отличная эргономика спереди обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Высокий центральный тоннель сзади.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '380 L Boot (1,220 L Folded)',
          strengths: [
            'Practical 380L boot (1,220L folded; e-tron/g-tron/Quattro drop to 280–340L).',
            'e-tron/g-tron/Quattro Drop to 280–340 L improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '380 L Kofferraum (1.220 L umgeklappt)',
          strengths: [
            'Praktischer Nutzwert: 380 L Kofferraum (1.220 L umgeklappt; e-tron/g-tron/Quattro 280–340 L).',
            'e-tron/g-tron/Quattro: 280–340 L erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 380 л (1220 л слож.)',
          strengths: [
            'Практичный объём: багажник 380 л (до 1 220 л; у e-tron/g-tron/Quattro — 280–340 л).',
            'У e-tron/g-tron/Quattro: 280–340 л добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Lighter MQB Chassis • Sharp Turn-In',
          strengths: [
            'Lighter MQB chassis delivers sharp turn-in (150 HP+ models feature multi-link rear suspension).',
            'Multi-Link Rear on 150 HP+ Models.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Leichtes MQB-Chassis • Agiles Einlenken',
          strengths: [
            'Leichte MQB-Plattform lenkt agil ein (Modelle ab 150 PS mit Mehrlenker-Hinterachse).',
            'Mehrlenkerachse ab 150 PS.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Лёгкая платформа MQB • Острый руль',
          strengths: [
            'Лёгкая платформа MQB отличается точным рулём (версии 150+ л.с. идут с многорычажкой).',
            'Многорычажка сзади от 150 л.с..'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 35.3 m — Crisp Bosch ESP & Strong Fade Resistance',
          strengths: [
            '100–0 km/h: 35.3 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 35,3 m — Präzises Pedal • Standfeste Scheiben',
          strengths: [
            '100–0 km/h: 35,3 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 35,3 м — Информативная педаль • Стойкость к перегреву',
          strengths: [
            '100–0 км/ч: 35,3 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '510–560 kg Payload • 75 kg Roof • 1,300–1,800 kg Braked Towing',
          strengths: [
            '510–560 kg Payload • 75 kg Roof and 1,300–1,800 kg Braked Towing handle typical cargo and trailer needs.'
          ],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '510–560 kg Zuladung • 75 kg Dachlast • 1.300–1.800 kg Anhängelast gebremst',
          strengths: [
            '510–560 kg Zuladung • 75 kg Dachlast und 1.300–1.800 kg Anhängelast gebremst bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Нагрузка 510–560 кг • Крыша 75 кг • Прицеп до 1300–1800 кг',
          strengths: [
            'Нагрузка 510–560 кг • Крыша 75 кг и Прицеп до 1300–1800 кг закрывают повседневные задачи по загрузке.'
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
          headline: 'Strongest Residual Value in Class',
          strengths: [
            'Strongest Residual Value in Class helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Sehr wertstabil im Kompakt-Segment',
          strengths: [
            'Sehr wertstabil im Kompakt-Segment sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Лучшая остаточная стоимость в классе',
          strengths: [
            'Лучшая остаточная стоимость в классе поддерживает стабильный спрос на вторичном рынке.',
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
            headline: '6-MT Solid • 7-DSG Dry-Clutch Care — Check Uphill Creep Smoothness',
            strengths: [
              '6-MT Solid • 7-DSG Dry-Clutch Care matches this powertrain well for everyday driving.',
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
            headline: '6-Gang solide • 7-DSG prüfen — Anfahren am Berg testen',
            strengths: [
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.',
              'Bewährte Schaltmechanik und haltbare Zahnräder bei rechtzeitigem Ölservice.'
            ],
            watchouts: [
              '6-Gang solide • 7-DSG prüfen passt gut zur Motorcharakteristik im Alltag.',
              'Das trockene 7-Gang-DSG verschleißt Kupplungen und Mechatronik im Stop-and-Go schneller.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '6-МКПП надёжна • 7-DSG проверять — Проверить старт в горку',
            strengths: [
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
            ],
            watchouts: [
              '6-МКПП надёжна • 7-DSG проверять хорошо сочетается с данным двигателем в повседневной езде.',
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
            headline: 'Solid MMI & Virtual Cockpit Hardware',
            strengths: [
              'Solid MMI & Virtual Cockpit Hardware keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Infotainment Pop-Up Screen Motor.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solides MMI & Virtual Cockpit',
            strengths: [
              'Solides MMI & Virtual Cockpit sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Ausfahrmechanik des Displays prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная мультимедиа MMI и приборка',
            strengths: [
              'Надёжная мультимедиа MMI и приборка упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить привод выдвижного экрана.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Refined Highway Isolation (Acoustic Glass Opt.)',
            strengths: [
              'Refined Highway Isolation (Acoustic Glass Opt.) delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              '1.6/1.0 Versions Use Torsion Beam Rear.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Sehr ruhiges Autobahn-Niveau',
            strengths: [
              'Sehr ruhiges Autobahn-Niveau sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Basis-Motoren mit Verbundlenkerachse.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Отличная шумоизоляция на трассе',
            strengths: [
              'Отличная шумоизоляция на трассе обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'У младших моторов сзади балка.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: '180k–210k Belt • Affordable Parts — DSG Service if Fitted',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'DSG Service if Fitted.',
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: '180–210 Tkm Riemen • Faire Teile — DSG-Wartung beachten',
            strengths: [
              '180–210 Tkm Riemen • Faire Teile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['DSG-Wartung beachten.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень 180–210 тыс. • Доступное ТО — Сервис DSG',
            strengths: [
              'Ремень 180–210 тыс. • Доступное ТО помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Сервис DSG.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'hybrid-wet-dsg': {
        transmissionDriveline: {
          en: {
            headline: 'Wet 6-DSG Hybrid Unit Tough — Service DSG Oil Every 60k km',
            strengths: [
              'Wet 6-DSG Hybrid Unit Tough matches this powertrain well for everyday driving.',
              'Proven 1.4 EA211 belt engine & wet 6-DSG.'
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
            headline: 'Nasses 6-DSG Hybrid-Getriebe robust — DSG-Öl alle 60 Tkm wechseln',
            strengths: [
              'Nasses 6-DSG Hybrid-Getriebe robust passt gut zur Motorcharakteristik im Alltag.',
              'Bewährter 1.4 EA211 & nasses 6-DSG.'
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
            headline: 'Мокрая 6-DSG надёжна — Масло DSG менять раз в 60 тыс.',
            strengths: [
              'Мокрая 6-DSG надёжна хорошо сочетается с данным двигателем в повседневной езде.',
              'Надёжный 1.4 EA211 и мокрая 6-DSG.'
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
            headline: 'Solid MMI & Virtual Cockpit Hardware',
            strengths: [
              'Solid MMI & Virtual Cockpit Hardware keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Infotainment Pop-Up Screen Motor.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solides MMI & Virtual Cockpit',
            strengths: [
              'Solides MMI & Virtual Cockpit sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Ausfahrmechanik des Displays prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная мультимедиа MMI и приборка',
            strengths: [
              'Надёжная мультимедиа MMI и приборка упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить привод выдвижного экрана.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Refined Highway Isolation (Acoustic Glass Opt.)',
            strengths: [
              'Refined Highway Isolation (Acoustic Glass Opt.) delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              '1.6/1.0 Versions Use Torsion Beam Rear.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Sehr ruhiges Autobahn-Niveau',
            strengths: [
              'Sehr ruhiges Autobahn-Niveau sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Basis-Motoren mit Verbundlenkerachse.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Отличная шумоизоляция на трассе',
            strengths: [
              'Отличная шумоизоляция на трассе обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'У младших моторов сзади балка.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: '60k DSG Service + Brake Corrosion — HV Parts Pricier',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['HV Parts Pricier.', '60k DSG Service + Brake Corrosion.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: '60 Tkm DSG + Bremsen-Rost prüfen — HV-Teile teurer',
            strengths: [
              'Planbare Wartungsintervalle mit klaren Vorgaben halten die laufenden Servicekosten kalkulierbar.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['HV-Teile teurer.', '60 Tkm DSG + Bremsen-Rost prüfen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'ТО DSG 60 тыс. + ржавчина тормозов — Детали HV дороже',
            strengths: [
              'ТО DSG 60 тыс. + ржавчина тормозов помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Детали HV дороже.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-wet-dsg': {
        transmissionDriveline: {
          en: {
            headline: 'Wet DSG & 6-MT Both Tough — Check Uphill Creep Smoothness',
            strengths: [
              'Wet DSG & 6-MT Both Tough matches this powertrain well for everyday driving.',
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
            headline: 'Nasses DSG & 6-Gang robust — Anfahren am Berg testen',
            strengths: [
              'Nasses DSG & 6-Gang robust passt gut zur Motorcharakteristik im Alltag.',
              'Anfahren am Berg testen.'
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
            headline: 'Мокрая DSG и 6-МКПП крепки — Проверить старт в горку',
            strengths: [
              'Мокрая DSG и 6-МКПП крепки хорошо сочетается с данным двигателем в повседневной езде.',
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
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
            headline: 'Solid MMI & Virtual Cockpit Hardware',
            strengths: [
              'Solid MMI & Virtual Cockpit Hardware keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check Infotainment Pop-Up Screen Motor.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solides MMI & Virtual Cockpit',
            strengths: [
              'Solides MMI & Virtual Cockpit sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Ausfahrmechanik des Displays prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная мультимедиа MMI и приборка',
            strengths: [
              'Надёжная мультимедиа MMI и приборка упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверить привод выдвижного экрана.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Refined Highway Isolation (Acoustic Glass Opt.)',
            strengths: [
              'Refined Highway Isolation (Acoustic Glass Opt.) delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.',
              '1.6/1.0 Versions Use Torsion Beam Rear.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Sehr ruhiges Autobahn-Niveau',
            strengths: [
              'Sehr ruhiges Autobahn-Niveau sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.',
              'Basis-Motoren mit Verbundlenkerachse.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Отличная шумоизоляция на трассе',
            strengths: [
              'Отличная шумоизоляция на трассе обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.',
              'У младших моторов сзади балка.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Updated Chain • Water Pump Watch — DSG Service if Fitted',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['DSG Service if Fitted.', 'Updated Chain • Water Pump Watch.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Robuste Kette • Wasserpumpe prüfen — DSG-Wartung beachten',
            strengths: [
              'Planbare Wartungsintervalle mit klaren Vorgaben halten die laufenden Servicekosten kalkulierbar.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['DSG-Wartung beachten.', 'Robuste Kette • Wasserpumpe prüfen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Цепь крепка • Проверить помпу — Сервис DSG',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Сервис DSG.', 'Цепь крепка • Проверить помпу.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-dry-dsg': {
        transmissionDriveline: {
          en: {
            headline: '6-MT Tough • 7-DSG Dry Care — 60k km Wet-DSG Oil Service',
            strengths: [
              '6-MT Tough • 7-DSG Dry Care matches this powertrain well for everyday driving.',
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
            headline: '6-Gang solide • 7-DSG prüfen — 60 Tkm DSG-Ölservice',
            strengths: [
              'Saubere Schaltführung und stimmige Übersetzung sorgen für ein ruhiges, berechenbares Fahrgefühl.',
              'Bewährte Schaltmechanik und haltbare Zahnräder bei rechtzeitigem Ölservice.'
            ],
            watchouts: [
              '6-Gang solide • 7-DSG prüfen passt gut zur Motorcharakteristik im Alltag.',
              'Das trockene 7-Gang-DSG verschleißt Kupplungen und Mechatronik im Stop-and-Go schneller.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '6-МКПП надёжна • 7-DSG проверять — Сервис мокрой DSG 60 тыс.',
            strengths: [
              'Чёткое переключение и удачные передаточные числа делают езду комфортной и предсказуемой.'
            ],
            watchouts: [
              '6-МКПП надёжна • 7-DSG проверять хорошо сочетается с данным двигателем в повседневной езде.',
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
            headline: 'Solid MMI & Virtual Cockpit Hardware',
            strengths: [
              'Solid MMI & Virtual Cockpit Hardware keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check Infotainment Pop-Up Screen Motor.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solides MMI & Virtual Cockpit',
            strengths: [
              'Solides MMI & Virtual Cockpit sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Ausfahrmechanik des Displays prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная мультимедиа MMI и приборка',
            strengths: [
              'Надёжная мультимедиа MMI и приборка упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Проверить привод выдвижного экрана.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Refined Highway Isolation (Acoustic Glass Opt.)',
            strengths: [
              'Refined Highway Isolation (Acoustic Glass Opt.) delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              '1.6/1.0 Versions Use Torsion Beam Rear.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Sehr ruhiges Autobahn-Niveau',
            strengths: [
              'Sehr ruhiges Autobahn-Niveau sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Basis-Motoren mit Verbundlenkerachse.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Отличная шумоизоляция на трассе',
            strengths: [
              'Отличная шумоизоляция на трассе обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'У младших моторов сзади балка.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: '210k km Belt Interval — Water Pump & EGR Main Items',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Water Pump & EGR Main Items.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: '210 Tkm Zahnriemen — Wasserpumpe & AGR Hauptpunkte',
            strengths: [
              '210 Tkm Zahnriemen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Wasserpumpe & AGR Hauptpunkte.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень 210 тыс. км — Основные траты — помпа и EGR',
            strengths: [
              'Ремень 210 тыс. км помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Основные траты — помпа и EGR.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-wet-dsg': {
        transmissionDriveline: {
          en: {
            headline: '6-MT & Wet DSG Very Tough — 60k km Wet-DSG Oil Service',
            strengths: [
              '6-MT & Wet DSG Very Tough matches this powertrain well for everyday driving.',
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
            headline: '6-Gang & nasses DSG sehr robust — 60 Tkm DSG-Ölservice',
            strengths: [
              '6-Gang & nasses DSG sehr robust passt gut zur Motorcharakteristik im Alltag.',
              '60 Tkm DSG-Ölservice.'
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
            headline: '6-МКПП и мокрая DSG крепки — Сервис мокрой DSG 60 тыс.',
            strengths: [
              '6-МКПП и мокрая DSG крепки хорошо сочетается с данным двигателем в повседневной езде.',
              'Сервис мокрой DSG 60 тыс.'
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
            headline: 'Solid MMI & Virtual Cockpit Hardware',
            strengths: [
              'Solid MMI & Virtual Cockpit Hardware keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check Infotainment Pop-Up Screen Motor.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solides MMI & Virtual Cockpit',
            strengths: [
              'Solides MMI & Virtual Cockpit sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Ausfahrmechanik des Displays prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная мультимедиа MMI и приборка',
            strengths: [
              'Надёжная мультимедиа MMI и приборка упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Проверить привод выдвижного экрана.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Refined Highway Isolation (Acoustic Glass Opt.)',
            strengths: [
              'Refined Highway Isolation (Acoustic Glass Opt.) delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              '1.6/1.0 Versions Use Torsion Beam Rear.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Sehr ruhiges Autobahn-Niveau',
            strengths: [
              'Sehr ruhiges Autobahn-Niveau sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Basis-Motoren mit Verbundlenkerachse.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Отличная шумоизоляция на трассе',
            strengths: [
              'Отличная шумоизоляция на трассе обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'У младших моторов сзади балка.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: '210k km Belt Interval — Water Pump & EGR Main Items',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Water Pump & EGR Main Items.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: '210 Tkm Zahnriemen — Wasserpumpe & AGR Hauptpunkte',
            strengths: [
              '210 Tkm Zahnriemen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Wasserpumpe & AGR Hauptpunkte.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Ремень 210 тыс. км — Основные траты — помпа и EGR',
            strengths: [
              'Ремень 210 тыс. км помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Основные траты — помпа и EGR.'],
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
      rideTuning: { en: 'Crisp MQB · Composed', de: 'Sattes MQB · Ausgewogen', ru: 'Собранная MQB · Комфорт' },
      highwayNoise: { en: '~66 dB · Class-Leading Quiet', de: '~66 dB · Klassenbeste Ruhe', ru: '~66 дБ · Лучшая тишина' },
      cabinMaterials: { en: 'Minimalist Benchmark Luxury', de: 'Minimalistische Top-Haptik', ru: 'Эталонный минимализм Audi' },
      controls: '@physButtons',
      turningCircle: '10.9 m',
      visibility: { en: 'Clean Glass · Clear Corners', de: 'Gute Rundumsicht', ru: 'Хороший круговой обзор' },
      euroNcap: '★★★★★ (2012)',
      safetyTech: { en: '✓ ESC · ✓ 7 Airbags + Opt. AEB', de: '✓ ESC · ✓ 7 Airbags + Opt. AEB', ru: '✓ ESC · ✓ 7 подушек + Опц. AEB' },
      rearRoom: { en: 'Improved MQB · 2 Adults', de: 'Verbessert (MQB) · 2 Erw.', ru: 'Просторнее 8P · 2 взрослых' },
      isofixEntry: { en: '✓ 2× ISOFIX · Sportback 5d', de: '✓ 2× ISOFIX · Sportback 5T', ru: '✓ 2× ISOFIX · Sportback 5дв' },
      bootVolume: '380 L / 1,220 L',
      seatUtility: { en: '✓ 60/40 Flat + Dual Floor', de: '✓ 60/40 + Doppelter Boden', ru: '✓ 60/40 + двойной пол' },
      payloadRoof: '535 kg · 75 kg',
      driveline: { en: 'FWD / Opt. Haldex V Quattro', de: 'Front / Opt. Haldex-5-Quattro', ru: 'Передний / Опц. Quattro' },
      chassisFeel: { en: 'Light MQB · Sharp & Refined', de: 'Leichter MQB · Präzise & satt', ru: 'Лёгкая MQB · Точное шасси' },
      tractionDiff: { en: 'FWD · ESC (Opt. Quattro)', de: 'Front · ESC (Opt. Quattro)', ru: 'Передний · ESC (Опц. Quattro)' },
      braking1000: '~35.2 m',
      brakeSetup: '@discs4',
      valueRetention: '@retVeryHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: '6-MT · Dry 7-DSG (DQ200 ≤250 Nm) / Wet 6/7-DSG (DQ250/DQ381)', de: '6-Gang · Trockenes 7-DSG (DQ200 ≤250 Nm) / Nasses 6/7-DSG', ru: '6-МКПП · Сухой 7-DSG (DQ200 ≤250 Н·м) / Мокрый 6/7-DSG' } }, { k: 'shiftQuality', v: { en: 'Lightning-Fast S tronic · Wet DSG Tough (60k Oil); Dry DQ200 Needs Smooth Creep', de: 'Blitzschnelle S tronic · Nasses DSG robust (60 Tkm Öl); DQ200 sensibler', ru: 'Быстрая S tronic · Мокрые DSG крепкие (60 тыс. масло); DQ200 бережнее' } }], note: { en: 'Engines ≥180 HP / ≥320 Nm get the tough wet-clutch DSG (service every 60,000 km); ≤150 HP engines use the dry DQ200 (check smooth uphill creep).', de: 'Ab 180 PS / 320 Nm gibt es das robuste nasse DSG (60.000-km-Ölwechsel); bis 150 PS arbeitet das trockene DQ200.', ru: 'Моторы от 180 л.с. / 320 Н·м оснащены крепким мокрым DSG; до 150 л.с. ставится сухой DQ200 (проверяйте плавность трогания).' } }, clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'MQB Platform · Multi-Link Rear (≥122 HP) / Torsion Beam (<122 HP)', de: 'MQB-Plattform · Mehrlenker hinten (ab 122 PS) / Verbundlenker (<122 PS)', ru: 'Платформа MQB · Многорычажка (от 122 л.с.) / Балка (<122 л.с.)' } },
            { k: 'seatSupport', v: { en: 'Superb Supportive Seats · S-Line Adds Extendable Thigh Bolsters', de: 'Top ergonomische Sitze · S-Line mit ausziehbarer Beinauflage', ru: 'Отличные кресла · В S-Line выдвижная поддержка ног' } }
          ],
          note: { en: 'Models with ≥122 HP get independent multi-link rear suspension for noticeably smoother rough-road poise than entry torsion-beam trims.', de: 'Modelle ab 122 PS erhalten die feinere Mehrlenker-Hinterachse und federn spürbar geschmeidiger als Einstiegs-Verbundlenker.', ru: 'Версии от 122 л.с. оснащены задней многорычажкой — заметно плавнее и точнее базовых версий с балкой.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~66 dB(A) at 130 km/h (Acoustic Windscreen Standard)', de: '~66 dB(A) bei 130 km/h (Akustik-Frontscheibe Serie)', ru: '~66 дБ(А) при 130 км/ч (Акустическое лобовое стекло в базе)' } },
            { k: 'acousticGlass', v: { en: 'Executive-Grade Door Seals & Acoustic Windscreen', de: 'Akustik-Verglasung vorn & doppelte Türdichtungen', ru: 'Акустическое стекло и двойные уплотнители дверей' } }
          ],
          note: { en: 'Arguably the quietest compact hatchback of the 2013–2020 generation — rivals midsize executive sedans on the Autobahn.', de: 'Wohl der leiseste Kompaktwagen der Generation 2013–2020 — auf der Autobahn auf Mittelklasse-Niveau.', ru: 'Один из самых тихих хэтчбеков 2013–2020 годов — по акустическому комфорту спорит с D-классом.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashboardTrim', v: { en: 'Minimalist Soft-Touch Dash · Jet-Turbine Metal Air Vents', de: 'Minimalistisches Soft-Touch-Cockpit · Turbinen-Aludüsen', ru: 'Минималистичная мягкая панель · Металлические дефлекторы' } },
            { k: 'seatUpholstery', v: { en: 'Premium Cloth, Alcantara/Leather or Full Leather + Virtual Cockpit (2016+)', de: 'Edler Stoff, Alcantara/Leder oder Vollleder + Virtual Cockpit (ab 2016)', ru: 'Ткань, алькантара/кожа + опц. цифровая приборка Virtual Cockpit (2016+)' } }
          ],
          note: { en: 'Widely regarded as the finest interior Audi ever built in the A3 — rotary MMI dial and physical climate knobs beat modern touchscreens.', de: 'Gilt als der edelste A3-Innenraum aller Zeiten — MMI-Drehrad und echte Klima-Regler sind modernen Touchscreens überlegen.', ru: 'Считается лучшим салоном в истории A3 — шайба MMI и физические крутилки климата удобнее современных экранов.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turnDiameter', v: { en: '10.9 m (Easy Urban Footprint)', de: '10,9 m (Sehr stadtfreundlich)', ru: '10,9 м (Удобный в городе)' } },
            { k: 'steeringType', v: { en: 'Electro-Mechanical Progressive Steering (Light & Direct)', de: 'Elektromechanische Lenkung (Leicht & direkt)', ru: 'Электромеханический руль (Лёгкий и точный)' } }
          ],
          note: { en: 'Compact 4.31 m Sportback length with optional reversing camera and acoustic front/rear sensors.', de: 'Kompakte 4,31 m Länge (Sportback) mit häufiger Einparkhilfe vorn/hinten und Rückfahrkamera.', ru: 'Компактная длина 4,31 м (Sportback), часто с парктрониками в круг и камерой.' }
        },
        visibility: {
          specs: [
            { k: 'allRoundView', v: { en: 'Slim Low-Mount Dash · Good Forward & Side Sightlines', de: 'Flaches Armaturenbrett · Gute Sicht nach vorn & seitlich', ru: 'Низкая панель · Хороший обзор вперёд и в стороны' } },
            { k: 'rearView', v: { en: 'Clean Hatchback Tail · Wide-Opening Mirrors', de: 'Gut abschätzbares Heck · Klare Außenspiegel', ru: 'Понятная корма · Удобные зеркала' } }
          ],
          note: { en: 'Low uncluttered dashboard and slim A-pillars give notably clearer forward visibility than newer rivals.', de: 'Das niedrige Cockpit und schlanke A-Säulen bieten eine deutlich bessere Sicht als viele neuere Konkurrenten.', ru: 'Низкая панель и аккуратные стойки обеспечивают отличный обзор.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'crashRating', v: { en: '5 Stars Euro NCAP (2012) · 95% Adult / 87% Child', de: '5 Sterne Euro NCAP (2012) · 95% Erwachsene / 87% Kinder', ru: '5 звёзд Euro NCAP (2012) · 95% взрослые / 87% дети' } },
            { k: 'bodyStructure', v: { en: 'Hot-Formed Steel MQB Safety Cell · 7 Airbags incl. Driver Knee', de: 'Warmgeformte MQB-Sicherheitszelle · 7 Airbags inkl. Knieairbag', ru: 'Силовая клетка MQB · 7 подушек (вкл. коленную)' } }
          ],
          note: { en: '95% adult protection score — one of the safest compact cars of its decade with a standard driver knee airbag.', de: '95% Erwachsenenschutz — einer der sichersten Kompaktwagen seiner Dekade mit Serien-Knieairbag.', ru: '95% защиты взрослых — один из самых безопасных компактных авто десятилетия.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeSafety', v: { en: 'ESC, Multi-Collision Brake, XDS+ & Fatigue Detection', de: 'ESC, Multikollisionsbremse, XDS+ & Müdigkeitserkennung', ru: 'ESC, система предотвращения вторичных столкновений и XDS+' } },
            { k: 'driverAssists', v: { en: '2016+ Facelift: Optional Audi Pre Sense Front (AEB), ACC & Matrix LED', de: 'Facelift ab 2016: Optional Pre Sense Front (Notbrems), ACC & Matrix-LED', ru: 'Рестайлинг 2016+: опц. автоторможение Pre Sense, ACC и Matrix LED' } }
          ],
          note: { en: '2016+ facelift models brought modern Adaptive Cruise, Autonomous Emergency Braking, and Matrix LED headlights.', de: 'Das Facelift ab 2016 brachte modernen Abstandstempomat, Notbremsassistent und Matrix-LED-Scheinwerfer.', ru: 'Рестайлинг 2016 года добавил современный адаптивный круиз, автоторможение и матричные фары.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'rearSpace', v: { en: 'Longer MQB Wheelbase (+58 mm vs 8P) · Good for 2 Adults', de: 'Längerer MQB-Radstand (+58 mm vs. 8P) · Gut für 2 Erw.', ru: 'Удлинённая база MQB (+58 мм к 8P) · Удобно для двоих' } },
            { k: 'frontErgo', v: { en: 'Benchmark Seating Geometry · Retractable MMI Screen', de: 'Referenz-Sitzposition · Ausfahrbarer MMI-Bildschirm', ru: 'Эталонная посадка водителя · Выдвижной экран MMI' } }
          ],
          note: { en: 'Noticeably airier in the back than the older 8P, though the tall centre tunnel still makes it a 4-adult car.', de: 'Hinten spürbar luftiger als der alte 8P, durch den hohen Mitteltunnel aber weiterhin ideal für 4 Erwachsene.', ru: 'Заметно просторнее старого 8P, но высокий центральный тоннель делает его комфортным скорее для четверых.' }
        },
        isofixEntry: {
          specs: [
            { k: 'childSeats', v: { en: '2× Outer Rear ISOFIX (+ Optional Front Passenger ISOFIX)', de: '2× ISOFIX hinten (+ optional Beifahrer-ISOFIX)', ru: '2× ISOFIX сзади (+ опц. на переднем пассажирском)' } },
            { k: 'doorAccess', v: { en: 'Wide Sportback Doors · Easy Clip-In Guides', de: 'Weite Sportback-Türen · Gut zugängliche ISOFIX-Führungen', ru: 'Широкие двери Sportback · Удобные направляющие ISOFIX' } }
          ],
          note: { en: 'Clean plastic ISOFIX guides make clicking child seats in and out quick and frustration-free.', de: 'Saubere Kunststoff-Führungen machen das Einklicken von Kindersitzen sekundenschnell.', ru: 'Аккуратные направляющие ISOFIX позволяют быстро устанавливать детские кресла.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootCapacity', v: { en: '380 L (Sportback) / 1,220 L (Folded) · 280 L on e-tron/g-tron', de: '380 L (Sportback) / 1.220 L (Umgeklappt) · 280 L bei e-tron/g-tron', ru: '380 л (Sportback) / 1 220 л (Сложено) · 280 л у e-tron/g-tron' } },
            { k: 'loadingLip', v: { en: 'Dual-Height Variable Boot Floor · Square Practical Shape', de: 'Variabler doppelter Ladeboden · Praktisch geschnitten', ru: 'Двойной пол багажника · Правильная прямоугольная форма' } }
          ],
          note: { en: '380 L matches a Golf 7 with a neat dual-height floor; note that e-tron hybrid and g-tron CNG versions lose ~100 L underfloor space.', de: '380 L auf Golf-7-Niveau mit doppeltem Ladeboden; e-tron und g-tron verlieren ~100 L durch Akku bzw. Gastanks.', ru: '380 л на уровне Golf 7 с удобным двойным полом; у версий e-tron и g-tron багажник меньше на ~100 л.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingSystem', v: { en: '✓ 60/40 (Opt. 40/20/40) Split Fold · Flush With Raised Floor', de: '✓ 60/40 (Opt. 40/20/40) · Eben bei oberem Ladeboden', ru: '✓ 60/40 (Опц. 40/20/40) · Ровный пол на верхнем уровне' } }
          ],
          note: { en: 'With the variable boot floor in the upper position, folding the rear seats creates a completely flat loading surface.', de: 'Mit dem Ladeboden in der oberen Stufe entsteht beim Umklappen eine komplett ebene Ladefläche.', ru: 'При установке полки в верхнее положение сложенные сиденья образуют абсолютно ровный пол.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: { en: '~535 kg (510–560 kg Depending on Engine)', de: '~535 kg (510–560 kg je nach Motor)', ru: '~535 кг (510–560 кг в зависимости от мотора)' } },
            { k: 'roofLoad', v: { en: '75 kg Approved Dynamic Roof Load', de: '75 kg zugelassene Dachlast', ru: '75 кг допустимая нагрузка на крышу' } }
          ],
          note: { en: 'Strong MQB payload and up to 1,800 kg braked towing on 2.0 TDI / Quattro versions.', de: 'Hohe MQB-Zuladung und bis zu 1.800 kg Anhängelast bei 2.0 TDI / Quattro.', ru: 'Отличная грузоподъёмность MQB и до 1 800 кг на фаркопе у версий 2.0 TDI / Quattro.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'steeringFeel', v: { en: 'Light, Crisp MQB Steering · ~80 kg Lighter Than Old 8P', de: 'Leichte, präzise MQB-Lenkung · ~80 kg leichter als der 8P', ru: 'Лёгкий и точный руль MQB · На ~80 кг легче старого 8P' } },
            { k: 'cornering', v: { en: 'Neutral, Agile Turn-In · Composed At 200+ km/h', de: 'Neutrales, agiles Einlenken · Souverän über 200 km/h', ru: 'Нейтральный азартный вход в поворот · Устойчив за 200 км/ч' } }
          ],
          note: { en: 'MQB weight reduction made the 8V noticeably sharper and livelier than the heavier 8P while keeping classic Audi Autobahn composure.', de: 'Die MQB-Gewichtsersparnis macht den 8V spürbar agiler als den 8P bei gewohnter Audi-Autobahnruhe.', ru: 'Платформа MQB сделала 8V заметно легче и проворнее 8P, сохранив фирменную стабильность на скорости.' }
        },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retVeryHigh', resaleDemand: '@demFast' }
    },
    sharedGearboxes: {
      'mq250-6mt-sc': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ250 · Manual · Single Clutch', de: 'MQ250 · Schaltgetriebe · Kupplung', ru: 'MQ250 · Механика · Одномассовое сцепление' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ250 6-Speed Manual', de: 'VW/Audi MQ250 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП VW/Audi MQ250' } }],
              note: { en: 'Proven mechanical 6-speed gearbox with zero mechatronic failure risk.', de: 'Bewährtes mechanisches 6-Gang-Getriebe ohne Mechatronik-Risiko.', ru: 'Надёжная 6-ст. механика без риска поломки мехатроника.' }
            },
            clutchDmf: '@clutchSingle'
          }
        },
        dossier: {
          en: {
            headline: 'Mechanical MQ250 6-Speed Manual — Affordable Single-Mass Clutch',
            strengths: ['Zero mechatronic or DSG clutch-pack failures; single-mass clutch replacement stays affordable (€550–€800).'],
            watchouts: ['Check smooth 1st-to-2nd synchro engagement when cold on high-mileage urban cars.'],
            beforeYouBuy: ['Shift 1st→2nd→3rd cold and feel for any notchiness or crunch.', 'Check clutch bite point and release bearing noise at idle.']
          },
          de: {
            headline: 'Mechanisches MQ250 6-Gang-Getriebe — Günstige Kupplung ohne ZMS',
            strengths: ['Kein Mechatronik- oder DSG-Risiko; Kupplungswechsel bleibt günstig (550–800 €).'],
            watchouts: ['Bei hohen Laufleistungen im Stadtverkehr Synchronisation von 1. auf 2. Gang kalt testen.'],
            beforeYouBuy: ['1.→2.→3. Gang im kalten Zustand sauber durchschalten.', 'Druckpunkt der Kupplung und Ausrücklager im Leerlauf prüfen.']
          },
          ru: {
            headline: 'Механическая КПП MQ250 — Надёжная 6-ст. коробка без ДММ',
            strengths: ['Нет риска отказа мехатроника и дорогих сцеплений; замена сцепления стоит разумно (€550–800).'],
            watchouts: ['На городских экземплярах проверяйте синхронизатор 1-й и 2-й передач на холодную.'],
            beforeYouBuy: ['Проверьте плавность переключений 1→2→3 на холодном авто.', 'Оцените выжим сцепления и отсутствие шума выжимного.']
          }
        }
      },
      'mq250-6mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ250 · Manual + DMF', de: 'MQ250 · Schaltgetriebe + ZMS', ru: 'MQ250 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ250 6-Speed Manual', de: 'VW/Audi MQ250 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП VW/Audi MQ250' } }],
              note: { en: 'Proven mechanical 6-speed gearbox paired with a dual-mass flywheel.', de: 'Bewährtes mechanisches 6-Gang-Getriebe mit Zweimassenschwungrad.', ru: 'Надёжная 6-ст. механика с двухмассовым маховиком.' }
            },
            clutchDmf: '@clutchDmf'
          }
        },
        dossier: {
          en: {
            headline: 'Mechanical MQ250 6-MT — Solid Gearbox, Watch Diesel/Turbo DMF',
            strengths: ['No DSG mechatronic failures and crisp mechanical shift feel.'],
            watchouts: ['Dual-mass flywheel wears around 160k–210k km (€900–€1,300 with clutch kit).'],
            beforeYouBuy: ['Listen for DMF rattle at idle with clutch half-pressed.', 'Test for clutch slip in 4th/5th gear from 1,800 rpm.']
          },
          de: {
            headline: 'Mechanisches MQ250 6-Gang — Robustes Getriebe, ZMS im Blick behalten',
            strengths: ['Kein DSG-Mechatronik-Risiko und präzises Schaltgefühl.'],
            watchouts: ['Zweimassenschwungrad verschleißt ab ca. 160–210 Tkm (900–1.300 € mit Kupplung).'],
            beforeYouBuy: ['Im Leerlauf bei halb getretener Kupplung auf ZMS-Klappern achten.', 'Im 4./5. Gang ab 1.800 U/min auf Durchrutschen testen.']
          },
          ru: {
            headline: 'Механическая КПП MQ250 — Крепкая коробка, контроль ДММ',
            strengths: ['Никакого риска мехатроника DSG и чёткие переключения.'],
            watchouts: ['Двухмассовый маховик обычно просит замены к 160–210 тыс. км (€900–1 300 со сцеплением).'],
            beforeYouBuy: ['Послушайте стук ДММ на холостых при полувыжатом сцеплении.', 'Проверьте сцепление под нагрузкой на 4/5-й передаче с 1 800 об/мин.']
          }
        }
      },
      'mq350-6mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ350 · Manual + DMF', de: 'MQ350 · Schaltgetriebe + ZMS', ru: 'MQ350 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'VW/Audi MQ350 6-Speed Manual', de: 'VW/Audi MQ350 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП VW/Audi MQ350' } }],
              note: { en: 'High-torque mechanical 6-speed gearbox paired with a dual-mass flywheel.', de: 'Drehmomentstarkes mechanisches 6-Gang-Getriebe mit Zweimassenschwungrad.', ru: 'Усиленная 6-ст. механика с двухмассовым маховиком.' }
            },
            clutchDmf: '@clutchDmf'
          }
        },
        dossier: {
          en: {
            headline: 'Heavy-Duty MQ350 6-Speed Manual — Handles 320–380 Nm Effortlessly',
            strengths: ['Overbuilt shafts and synchros handle high-torque TDI and 2.0 TFSI output with ease.'],
            watchouts: ['High torque loads the dual-mass flywheel and slave cylinder around 160k–200k km (€1,000–€1,450).'],
            beforeYouBuy: ['Test full-throttle pull in 4th gear at 2,000 rpm for any clutch slip.', 'Verify clean pedal return (concentric slave cylinder check).']
          },
          de: {
            headline: 'Verstärktes MQ350 6-Gang-Getriebe — Hält 320–380 Nm souverän aus',
            strengths: ['Sehr robuste Wellen und Synchronringe für starke TDI- und 2.0-TFSI-Motoren.'],
            watchouts: ['Hohes Drehmoment fordert ZMS und Zentralausrücker ab 160–200 Tkm (1.000–1.450 €).'],
            beforeYouBuy: ['Volllast im 4. Gang bei 2.000 U/min auf Kupplungsrutschen testen.', 'Sauberen Pedalrücklauf (Zentralausrücker) prüfen.']
          },
          ru: {
            headline: 'Усиленная 6-ст. МКПП MQ350 — Легко держит 320–380 Н·м',
            strengths: ['Усиленные валы и синхронизаторы спокойно переваривают тягу 2.0 TDI и 2.0 TFSI.'],
            watchouts: ['Высокий момент нагружает ДММ и рабочий цилиндр к 160–200 тыс. км (€1 000–1 450).'],
            beforeYouBuy: ['Проверьте отсутствие пробуксовки сцепления на 4-й передаче с 2 000 об/мин.', 'Оцените чёткий возврат педали сцепления.']
          }
        }
      },
      'dq200-7-dry': {
        category: 'automatic',
        label: { en: '7-Speed Dry S tronic', de: '7-Gang Trocken-S tronic', ru: '7-ст. Сухая S tronic' },
        shortLabel: { en: '7-DSG (Dry)', de: '7-DSG (Trocken)', ru: '7-DSG (Сух.)' },
        subLabel: { en: 'DQ200 · Dry Dual-Clutch', de: 'DQ200 · Trocken-Doppelkupplung', ru: 'DQ200 · Сухое двойное сцепление' },
        specOverrides: { gearbox: '@dsg7Dry', clutchDmf: '@dualClutchDry' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 6.1,
            badges: {
              en: ['Dry 7-DSG (DQ200)', 'Stop-Go Clutch & Mechatronic Risk'],
              de: ['Trocken-7-DSG (DQ200)', 'Stau-Kupplung & Mechatronik prüfen'],
              ru: ['Сухой 7-DSG (DQ200)', 'Риск сцеплений и мехатроника']
            }
          },
          maintenanceRepairCosts: {
            score: 6.4,
            badges: {
              en: ['Budget €1.2k–€2.2k DSG Clutch/Mech', 'Lower Traffic Durability'],
              de: ['1.200–2.200 € DSG-Rücklage', 'Verschleiß im Stop-and-Go'],
              ru: ['Резерв €1.2–2.2k на 7-DSG', 'Износ сцеплений в пробках']
            }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: '7-Speed Dry Dual-Clutch S tronic (DQ200)', de: '7-Gang Trocken-Doppelkupplung S tronic (DQ200)', ru: '7-ст. сухая РКПП S tronic (DQ200)' } }],
              note: { en: 'Fast shifts and low drag, but dry clutches wear faster in dense stop-and-go traffic and mechatronic pressure accumulators can fail (€1,200–€2,200).', de: 'Schnelle Schaltvorgänge und sparsam, aber Trockenkupplungen verschleißen im Stadtstau schneller; Mechatronik-Druckspeicher prüfen.', ru: 'Быстрая и экономичная коробка, но сухие сцепления быстрее изнашиваются в пробках и возможен ремонт мехатроника (€1 200–€2 200).' }
            },
            clutchDmf: '@dualClutchDry'
          }
        },
        dossier: {
          en: {
            headline: 'Dry 7-Speed DQ200 S tronic — Fast Shifts, Sensitive in Heavy Traffic',
            strengths: ['Crisp, rapid gear changes and low parasitic drag keep highway fuel economy strong.'],
            watchouts: ['Dry dual-clutch pack wears faster in city jams (100k–160k km) and mechatronic accumulator cracks cause pressure faults (€1,200–€2,200).'],
            beforeYouBuy: ['Creep slowly uphill in D1/D2 and feel for any clutch judder.', 'Verify smooth 1→2→3 shifts and check for delayed reverse engagement.']
          },
          de: {
            headline: 'Trockenes 7-Gang-DSG (DQ200) — Schnell & sparsam, aber stausensibel',
            strengths: ['Blitzschnelle Schaltvorgänge und geringe Schleppverluste auf der Autobahn.'],
            watchouts: ['Trockenkupplungen verschleißen im Stadtstau schneller (100–160 Tkm) und Mechatronik-Druckspeicher werden undicht (1.200–2.200 €).'],
            beforeYouBuy: ['Langsam bergauf im 1./2. Gang anfahren und auf Rupfen achten.', 'Sauberes 1→2→3-Schalten und verzögerungsfreien Rückwärtsgang prüfen.']
          },
          ru: {
            headline: 'Сухая 7-ст. S tronic (DQ200) — Быстрая и экономичная, но боится пробок',
            strengths: ['Мгновенные переключения и низкие потери на трассе.'],
            watchouts: ['Сухие сцепления быстрее изнашиваются в пробках (100–160 тыс. км), возможны трещины гидроаккумулятора мехатроника (€1 200–2 200).'],
            beforeYouBuy: ['Плавно троньтесь в горку в режиме D1/D2, проверяя отсутствие вибраций и рывков.', 'Убедитесь в быстром и мягком включении задней передачи R.']
          }
        },
        repairGuideExtra: {
          critical: [
            { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'DQ200 dry dual-clutch pack & mechatronic accumulator repair', de: 'DQ200 Trockenkupplungssatz & Mechatronik-Druckspeicher', ru: 'Замена сухого сцепления DQ200 и ремонт мехатроника' }, cost: '€1,200–2,200', risk: { en: 'Severe judder, gear loss, or PRNDS flashing fault', de: 'Starkes Rupfen, Gangverlust oder blinkende Ganganzeige', ru: 'Сильные рывки, пропадание передач, авария КПП' }, damage: '€2,400–3,500' }
          ]
        }
      },
      'dq250-6-wet': {
        category: 'automatic',
        label: { en: '6-Speed Wet S tronic', de: '6-Gang Nass-S tronic', ru: '6-ст. Мокрая S tronic' },
        shortLabel: { en: '6-DSG (Wet)', de: '6-DSG (Nass)', ru: '6-DSG (Мокр.)' },
        subLabel: { en: 'DQ250 · Wet Dual-Clutch + DMF', de: 'DQ250 · Nass-Doppelkupplung + ZMS', ru: 'DQ250 · Мокрое сцепление + ДММ' },
        specOverrides: { gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 7.7,
            badges: {
              en: ['Wet 6-DSG (DQ250)', 'Oil-Cooled Dual-Clutch'],
              de: ['Nass-6-DSG (DQ250)', 'Ölgekühlte Doppelkupplung'],
              ru: ['Мокрый 6-DSG (DQ250)', 'Мокрое двойное сцепление']
            }
          },
          maintenanceRepairCosts: {
            score: 7.1,
            badges: {
              en: ['€280–€380 DSG Oil Every 60k km', 'Far Tougher Than Dry DQ200'],
              de: ['280–380 € DSG-Öl alle 60 Tkm', 'Deutlich robuster als DQ200'],
              ru: ['€280–€380 масло каждые 60 тыс.', 'Надёжнее сухого DQ200']
            }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: '6-Speed Wet Dual-Clutch S tronic (DQ250)', de: '6-Gang Nass-Doppelkupplung S tronic (DQ250)', ru: '6-ст. мокрая РКПП S tronic (DQ250)' } }],
              note: { en: 'Much tougher oil-cooled wet dual-clutch unit — verify documented 60,000 km DSG oil & filter services.', de: 'Deutlich robustere ölgekühlte Nasskupplung — dokumentierte 60.000-km-DSG-Ölwechsel sind Pflicht.', ru: 'Значительно более выносливая мокрая DSG — обязательно проверяйте замену масла и фильтра каждые 60 000 км.' }
            },
            clutchDmf: '@dualClutchWet'
          }
        },
        dossier: {
          en: {
            headline: 'Oil-Cooled Wet 6-Speed DQ250 — Tough & Smooth When Serviced @ 60k km',
            strengths: ['Oil-bath clutches handle stop-and-go traffic and high diesel/TFSI torque far better than dry DQ200.'],
            watchouts: ['Strict 60,000 km DSG oil & filter service (€280–€380) is mandatory; DMF still wears around 180k km.'],
            beforeYouBuy: ['Confirm stamped 60,000 km / 120,000 km DSG fluid & filter invoices.', 'Test cold R→D engagement and gentle creeping without clunks.']
          },
          de: {
            headline: 'Ölgekühltes 6-Gang-Nass-DSG (DQ250) — Robust bei 60-Tkm-Ölwechsel',
            strengths: ['Ölbad-Kupplungen verkraften Stadtstau und hohes Drehmoment deutlich besser als das trockene DQ200.'],
            watchouts: ['Strikter 60.000-km-DSG-Öl- & Filterwechsel (280–380 €) nötig; ZMS altert ab ca. 180 Tkm.'],
            beforeYouBuy: ['Lückenlose 60.000-km-DSG-Ölwechsel-Rechnungen verlangen.', 'Kaltes Einlegen von R→D und sanftes Kriechen ohne Schläge testen.']
          },
          ru: {
            headline: 'Мокрая 6-ст. S tronic (DQ250) — Выносливый робот при замене масла раз в 60 тыс.',
            strengths: ['Сцепления в масляной ванне отлично держат высокий момент и городские пробки.'],
            watchouts: ['Требует строгой замены масла и фильтра DSG каждые 60 000 км (€280–380); ДММ ходит ~180 тыс. км.'],
            beforeYouBuy: ['Проверьте чеки на замену масла DSG каждые 60 тыс. км.', 'Оцените мягкость включения R→D и плавность ползущего режима на холодную.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'DQ250 wet DSG oil & cartridge filter service', de: 'DQ250 Nass-DSG Öl- & Filterwechsel', ru: 'Замена масла и фильтра мокрого DSG (DQ250)' }, cost: '€280–380' }
          ]
        }
      },
      'dq381-7-wet': {
        category: 'automatic',
        label: { en: '7-Speed Wet S tronic', de: '7-Gang Nass-S tronic', ru: '7-ст. Мокрая S tronic' },
        shortLabel: { en: '7-DSG (Wet)', de: '7-DSG (Nass)', ru: '7-DSG (Мокр.)' },
        subLabel: { en: 'DQ381 · Wet Dual-Clutch + DMF', de: 'DQ381 · Nass-Doppelkupplung + ZMS', ru: 'DQ381 · Мокрое сцепление + ДММ' },
        specOverrides: { gearbox: '@dsg7Wet', clutchDmf: '@dualClutchWet' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.1,
            badges: {
              en: ['Wet 7-DSG (DQ381)', 'Oil-Cooled High-Torque'],
              de: ['Nass-7-DSG (DQ381)', 'Ölgekühltes Hochdrehmoment'],
              ru: ['Мокрый 7-DSG (DQ381)', 'Усиленное мокрое сцепление']
            }
          },
          maintenanceRepairCosts: {
            score: 7.1,
            badges: {
              en: ['€320–€420 DSG Oil Service', 'Strong High-Mileage Durability'],
              de: ['320–420 € DSG-Ölservice', 'Hohe Langzeit-Haltbarkeit'],
              ru: ['€320–€420 сервис масла DSG', 'Высокий ресурс коробки']
            }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: '7-Speed Wet Dual-Clutch S tronic (DQ381)', de: '7-Gang Nass-Doppelkupplung S tronic (DQ381)', ru: '7-ст. мокрая РКПП S tronic (DQ381)' } }],
              note: { en: 'Latest-gen high-torque wet 7-speed DSG with tall highway 7th gear and strong reliability when serviced every 60,000–120,000 km.', de: 'Moderne drehmomentstarke 7-Gang-Nass-DSG-Generation mit langem 7. Gang und hoher Standfestigkeit.', ru: 'Современный усиленный мокрый 7-DSG с длинной 7-й передачей и высоким ресурсом при регулярном ТО.' }
            },
            clutchDmf: '@dualClutchWet'
          }
        },
        dossier: {
          en: {
            headline: 'Modern Wet 7-Speed DQ381 — Best S tronic Blend of Speed & Durability',
            strengths: ['Handles up to 420 Nm easily, adds a tall 7th motorway gear, and fixes older DSG heat/pressure weaknesses.'],
            watchouts: ['Change DSG oil well ahead of Audi’s 120,000 km interval (every 60,000–80,000 km recommended).'],
            beforeYouBuy: ['Check smooth downshifts from 4→3→2 when coasting to a stop.', 'Verify DSG fluid service history on higher-mileage cars.']
          },
          de: {
            headline: 'Modernes 7-Gang-Nass-DSG (DQ381) — Schnell, sparsam & sehr standfest',
            strengths: ['Verträgt bis 420 Nm problemlos, senkt dank 7. Gang die Drehzahl und ist deutlich ausgereifter.'],
            watchouts: ['Getriebeöl idealerweise schon alle 60.000–80.000 km statt erst bei 120.000 km wechseln.'],
            beforeYouBuy: ['Sanftes Herunterschalten 4→3→2 beim Ausrollen prüfen.', 'Bei höheren Laufleistungen auf vorgezogenen DSG-Ölwechsel achten.']
          },
          ru: {
            headline: 'Современная мокрая 7-ст. S tronic (DQ381) — Лучший баланс динамики и ресурса',
            strengths: ['Спокойно держит до 420 Н·м, экономит топливо за счёт 7-й передачи и очень надёжна.'],
            watchouts: ['Рекомендуется менять масло каждые 60–80 тыс. км, не дожидаясь 120 тыс. км по регламенту.'],
            beforeYouBuy: ['Проверьте плавность переключений вниз 4→3→2 при торможении.', 'Уточните историю замены масла DSG при пробеге выше 80 тыс. км.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000–80,000 km', de: 'Alle 60.000–80.000 km', ru: 'Каждые 60–80 тыс. км' }, action: { en: 'DQ381 wet 7-DSG oil & filter change', de: 'DQ381 Nass-7-DSG Öl- & Filterwechsel', ru: 'Замена масла и фильтра мокрого 7-DSG (DQ381)' }, cost: '€320–420' }
          ]
        }
      },
      'dq400e-6-wet': {
        category: 'automatic',
        label: { en: '6-Speed Hybrid S tronic', de: '6-Gang Hybrid-S tronic', ru: '6-ст. Гибридная S tronic' },
        shortLabel: { en: '6-DSG (PHEV)', de: '6-DSG (PHEV)', ru: '6-DSG (PHEV)' },
        subLabel: { en: 'DQ400E · Wet Dual-Clutch + E-Motor', de: 'DQ400E · Nass-DKG + E-Motor', ru: 'DQ400E · Мокрая РКПП + Электромотор' },
        specOverrides: { gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: '6-Speed Wet PHEV Dual-Clutch (DQ400E)', de: '6-Gang Nass-Hybrid-Doppelkupplung (DQ400E)', ru: '6-ст. гибридная РКПП (DQ400E)' } }],
              note: { en: 'Specialized wet 6-speed DSG housing the electric traction motor; requires strict 60,000 km fluid changes.', de: 'Spezielles nasses 6-Gang-DSG mit integriertem E-Motor; strikter 60.000-km-Ölwechsel nötig.', ru: 'Специальный мокрый 6-DSG со встроенным электромотором; требует строгой замены масла каждые 60 000 км.' }
            },
            clutchDmf: '@dualClutchWet'
          }
        },
        dossier: {
          en: {
            headline: 'PHEV Wet 6-Speed DQ400E — Smooth E-Drive Integration, Strict 60k Oil',
            strengths: ['Integrates the electric drive motor cleanly with wet-clutch durability and strong combined torque.'],
            watchouts: ['Complex hybrid-clutch housing is costly if neglected — never skip the 60,000 km DSG fluid service.'],
            beforeYouBuy: ['Test seamless transitions between pure EV mode and petrol engine kick-in.', 'Verify every 60,000 km DSG oil change in the Audi service book.']
          },
          de: {
            headline: 'PHEV-Nass-6-DSG (DQ400E) — Harmonischer E-Übergang, 60-Tkm-Ölpflicht',
            strengths: ['Integriert den E-Motor sauber in ein robustes Nasskupplungs-Getriebe.'],
            watchouts: ['Aufwendige Hybrid-Getriebeeinheit — den 60.000-km-DSG-Ölwechsel niemals überziehen.'],
            beforeYouBuy: ['Ruckfreien Übergang zwischen E-Modus und Verbrenner-Zuschaltung testen.', 'Jeden 60.000-km-DSG-Ölwechsel im Serviceheft prüfen.']
          },
          ru: {
            headline: 'Гибридная 6-ст. S tronic (DQ400E) — Плавный электроход, строгое ТО 60 тыс.',
            strengths: ['Встроенный электромотор работает плавно в паре с выносливыми мокрыми сцеплениями.'],
            watchouts: ['Сложный гибридный узел дорог в ремонте — никогда не пропускайте замену масла DSG каждые 60 000 км.'],
            beforeYouBuy: ['Проверьте плавность подключения бензинового мотора после езды на электротяге.', 'Убедитесь в наличии всех отметок о замене масла DSG каждые 60 тыс. км.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'DQ400E PHEV wet-DSG oil & filter change', de: 'DQ400E PHEV Nass-DSG Öl- & Filterwechsel', ru: 'Замена масла и фильтра гибридной РКПП DQ400E' }, cost: '€320–420' }
          ]
        }
      }
    },    engines: [
      {
        id: '1.4-g-tron',
        engineRef: 'vag-1.4-tgi-110',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€10,600',
            specOverrides: { sprint0100: '10.8 s', topSpeed: '197 km/h', realWorldFuel: '3.6 kg CNG / 5.4 L' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 9,
                badges: {
                  en: ['3.6 kg CNG / 5.4 L (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['3,6 kg CNG / 5,4 L (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['3,6 kg CNG / 5,4 L (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        buyerFitOverrides: {
          ideal: ['a38vGtronEconomy', 'a38vMqbSolved', 'a38vInteriorClass', 'globalPetrolCityZones'],
          skip: ['a38vSpecialBootShrink', 'a38vWaterPumpWatch', 'a38vDryDsgTraffic', 'a38vPremiumPrice']
        },
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 110,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.4 TFSI g-tron (8V)',
        fullName: '2016 Audi A3 1.4 TFSI g-tron (8V)',
        engineBadge: '1.4 TFSI g-tron • 110 HP',
        engineSubLabel: {
          en: '1.4 TFSI g-tron CNG + Petrol (02/2014–08/2018) • 6-MT / 7-DSG (Dry) • 200 Nm • FWD',
          de: '1.4 TFSI g-tron (02/2014–08/2018) • 6-MT / 7-DSG (Trocken) • 200 Nm • FWD',
          ru: '1.4 TFSI g-tron (02/2014–08/2018) • 6-MT / 7-DSG (сухая) • 200 Н·м • FWD'
        },
        rarityLabel: {
          en: 'CNG ECO',
          de: 'ERDGAS ECO',
          ru: 'ГАЗ + БЕНЗИН'
        },
        originalMsrp: {
          en: '€25,900 New',
          de: '25,900 € Neu',
          ru: '€25,900 новый'
        },
        estUsedPrice: '€9,600',
        perkLabel: {
          en: '✦ CNG + Petrol Dual-Fuel • 200 Nm • 5.2 L/100km',
          de: '✦ Erdgas + Benzin • 200 Nm • 5.2 L/100km',
          ru: '✦ Метан + бензин • 200 Н·м • 5.2 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 200 Nm turbo torque & 5.2 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 200 Nm & ca. 5.2 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 200 Н·м и расход ~5.2 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            '1.0/1.2 models use torsion-beam rear'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Basis-Modelle mit Verbundlenkerachse'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади балка на версиях до 125 л.с.'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L I4 TFSI g-tron (CNG)', de: '1.4L Reihenvierzylinder g-tron', ru: '1.4L R4 TFSI g-tron (CNG)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '10.8 s',
          topSpeed: '197 km/h',
          realWorldFuel: '3.5 kg CNG / 5.2 L',
          tankRange: '14.4 kg + 50 L (~1,150 km)',
          euroNorm: 'Euro 6 (CNG/Petrol)',
          taxInsurance: '@tierVeryLow',
          serviceWear: '@tierMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.3,
            badges: {
              en: ['0–100 km/h: 10.8 s • 197 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 10.8 s • 197 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 10.8 с • 197 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['3.5 kg CNG / 5.2 L/100km', 'Low Running Costs'],
              de: ['3,5 kg Erdgas / 5,2 L/100km', 'Günstig im Alltag'],
              ru: ['3,5 кг метана / 5,2 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 4 yrs (Mandatory)', de: 'Alle 4 Jahre (Pflicht)', ru: 'Каждые 4 года (Обязательно)' }, action: { en: 'Mandatory CNG composite tank visual/safety inspection + spark plugs every 60k', de: 'Vorgeschriebene CNG-Gastank-Prüfung (GAP) + Zündkerzen alle 60.000 km', ru: 'Обязательная поверка газовых баллонов CNG + свечи каждые 60 000 км' }, cost: '€220–360' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit & inspect CNG injector rails', de: 'EA211-Zahnriemensatz wechseln & CNG-Einblasventile prüfen', ru: 'Замена ремня ГРМ EA211 и проверка газовых форсунок' }, cost: '€550–820' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'CNG high-pressure regulator / solenoid valves & dry 7-DSG (if automatic)', de: 'CNG-Hochdruckregler / Tankventile & trockenes 7-DSG (falls Automatik)', ru: 'Газовый редуктор высокого давления / клапаны и сухой 7-DSG (если АКПП)' }, cost: '€650–1,600', risk: { en: 'Car refuses CNG mode and defaults to small petrol reserve tank', de: 'Kein Erdgasbetrieb mehr möglich — nur noch kleiner Benzin-Reservetank', ru: 'Отказ работы на газе — остаётся только маленький бензиновый бак' }, damage: '€1,400–2,400' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.0-tfsi',
        engineRef: 'vag-1.0-tsi-115',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€11,200',
            specOverrides: { sprint0100: '9.9 s', topSpeed: '206 km/h', realWorldFuel: '5.8 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 8.1,
                badges: {
                  en: ['5.8 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['5,8 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['5,8 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 115,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.0 TFSI (8V)',
        fullName: '2016 Audi A3 1.0 TFSI (8V)',
        engineBadge: '1.0 TFSI • 115 HP',
        engineSubLabel: {
          en: '1.0 TFSI 3-Cyl Belt (05/2016–08/2018) • 6-MT / 7-DSG (Dry) • 200 Nm • FWD',
          de: '1.0 TFSI (05/2016–08/2018) • 6-MT / 7-DSG (Trocken) • 200 Nm • FWD',
          ru: '1.0 TFSI (05/2016–08/2018) • 6-MT / 7-DSG (сухая) • 200 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€23,900 New',
          de: '23,900 € Neu',
          ru: '€23,900 новый'
        },
        estUsedPrice: '€10,200',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 200 Nm • 5.6 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 200 Nm • 5.6 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 200 Н·м • 5.6 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 200 Nm turbo torque & 5.6 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 200 Nm & ca. 5.6 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 200 Н·м и расход ~5.6 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            '1.0/1.2 models use torsion-beam rear'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Basis-Modelle mit Verbundlenkerachse'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади балка на версиях до 125 л.с.'
          ]
        },
        specOverrides: {
          engineName: { en: '1.0L I3 TFSI Turbo (Belt)', de: '1.0L Dreizylinder TFSI (Riemen)', ru: '1.0L R3 TFSI Турбо (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '9.9 s',
          topSpeed: '206 km/h',
          realWorldFuel: '5.6 L/100km',
          tankRange: '50 L (~890 km)',
          euroNorm: 'Euro 6 (Petrol)',
          taxInsurance: '@tierVeryLow',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 6,
            badges: {
              en: ['0–100 km/h: 9.9 s • 206 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 9.9 s • 206 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 9.9 с • 206 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.6 L/100km', 'Low Running Costs'],
              de: ['5.6 L/100km', 'Günstig im Alltag'],
              ru: ['5.6 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.2-tfsi-105',
        engineRef: 'vag-1.2-tsi-105',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€9,500',
            specOverrides: { sprint0100: '10.5 s', topSpeed: '193 km/h', realWorldFuel: '6.1 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.5,
                badges: {
                  en: ['0–100 km/h: 10.5 s (DSG)', '193 km/h Top Speed'],
                  de: ['0–100 km/h: 10,5 s (DSG)', '193 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,5 s (DSG)', 'Макс. 193 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.7,
                badges: {
                  en: ['6.1 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,1 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,1 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 105,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.2 TFSI (105) (8V)',
        fullName: '2016 Audi A3 1.2 TFSI (105) (8V)',
        engineBadge: '1.2 TFSI (105) • 105 HP',
        engineSubLabel: {
          en: '1.2 TFSI (105) Belt Petrol (02/2013–04/2014) • 6-MT / 7-DSG (Dry) • 175 Nm • FWD',
          de: '1.2 TFSI (105) (02/2013–04/2014) • 6-MT / 7-DSG (Trocken) • 175 Nm • FWD',
          ru: '1.2 TFSI (105) (02/2013–04/2014) • 6-MT / 7-DSG (сухая) • 175 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€22,500 New',
          de: '22,500 € Neu',
          ru: '€22,500 новый'
        },
        estUsedPrice: '€8,600',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 175 Nm • 5.9 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 175 Nm • 5.9 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 175 Н·м • 5.9 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 175 Nm turbo torque & 5.9 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 175 Nm & ca. 5.9 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 175 Н·м и расход ~5.9 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            '1.0/1.2 models use torsion-beam rear'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Basis-Modelle mit Verbundlenkerachse'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади балка на версиях до 125 л.с.'
          ]
        },
        specOverrides: {
          engineName: { en: '1.2L I4 TFSI 105 (Belt)', de: '1.2L Reihenvierzylinder 105 PS', ru: '1.2L R4 TFSI 105 (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '10.3 s',
          topSpeed: '193 km/h',
          realWorldFuel: '5.9 L/100km',
          tankRange: '50 L (~845 km)',
          euroNorm: 'Euro 5/6 (Petrol)',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.6,
            badges: {
              en: ['0–100 km/h: 10.3 s • 193 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 10.3 s • 193 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 10.3 с • 193 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.9 L/100km', 'Low Running Costs'],
              de: ['5.9 L/100km', 'Günstig im Alltag'],
              ru: ['5.9 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.2-tfsi-110',
        engineRef: 'vag-1.2-tsi-110',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€10,400',
            specOverrides: { sprint0100: '10.1 s', topSpeed: '198 km/h', realWorldFuel: '6.0 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.7,
                badges: {
                  en: ['0–100 km/h: 10.1 s (DSG)', '198 km/h Top Speed'],
                  de: ['0–100 km/h: 10,1 s (DSG)', '198 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,1 s (DSG)', 'Макс. 198 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.8,
                badges: {
                  en: ['6.0 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,0 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,0 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 110,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.2 TFSI (110) (8V)',
        fullName: '2016 Audi A3 1.2 TFSI (110) (8V)',
        engineBadge: '1.2 TFSI (110) • 110 HP',
        engineSubLabel: {
          en: '1.2 TFSI (110) Belt Petrol (05/2014–04/2016) • 6-MT / 7-DSG (Dry) • 175 Nm • FWD',
          de: '1.2 TFSI (110) (05/2014–04/2016) • 6-MT / 7-DSG (Trocken) • 175 Nm • FWD',
          ru: '1.2 TFSI (110) (05/2014–04/2016) • 6-MT / 7-DSG (сухая) • 175 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€23,100 New',
          de: '23,100 € Neu',
          ru: '€23,100 новый'
        },
        estUsedPrice: '€9,400',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 175 Nm • 5.8 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 175 Nm • 5.8 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 175 Н·м • 5.8 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 175 Nm turbo torque & 5.8 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 175 Nm & ca. 5.8 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 175 Н·м и расход ~5.8 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            '1.0/1.2 models use torsion-beam rear'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Basis-Modelle mit Verbundlenkerachse'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади балка на версиях до 125 л.с.'
          ]
        },
        specOverrides: {
          engineName: { en: '1.2L I4 TFSI 110 (Belt)', de: '1.2L Reihenvierzylinder 110 PS', ru: '1.2L R4 TFSI 110 (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '9.9 s',
          topSpeed: '198 km/h',
          realWorldFuel: '5.8 L/100km',
          tankRange: '50 L (~860 km)',
          euroNorm: 'Euro 6 (Petrol)',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.9,
            badges: {
              en: ['0–100 km/h: 9.9 s • 198 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 9.9 s • 198 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 9.9 с • 198 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.8 L/100km', 'Low Running Costs'],
              de: ['5.8 L/100km', 'Günstig im Alltag'],
              ru: ['5.8 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.4-tfsi-122',
        engineRef: 'vag-1.4-tsi-125',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€11,400',
            specOverrides: { sprint0100: '9.3 s', topSpeed: '206 km/h', realWorldFuel: '6.2 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.5,
                badges: {
                  en: ['6.2 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,2 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,2 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 125,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.4 TFSI (122/125) (8V)',
        fullName: '2016 Audi A3 1.4 TFSI (122/125) (8V)',
        engineBadge: '1.4 TFSI (122/125) • 125 HP',
        engineSubLabel: {
          en: '1.4 TFSI (122/125) Belt Petrol (05/2012–08/2018) • 6-MT / 7-DSG (Dry) • 200 Nm • FWD',
          de: '1.4 TFSI (122/125) (05/2012–08/2018) • 6-MT / 7-DSG (Trocken) • 200 Nm • FWD',
          ru: '1.4 TFSI (122/125) (05/2012–08/2018) • 6-MT / 7-DSG (сухая) • 200 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€24,800 New',
          de: '24,800 € Neu',
          ru: '€24,800 новый'
        },
        estUsedPrice: '€10,400',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 200 Nm • 6.0 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 200 Nm • 6.0 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 200 Н·м • 6.0 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 200 Nm turbo torque & 6.0 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 200 Nm & ca. 6.0 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 200 Н·м и расход ~6.0 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            '1.0/1.2 models use torsion-beam rear'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Basis-Modelle mit Verbundlenkerachse'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади балка на версиях до 125 л.с.'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L I4 TFSI 125 (Belt)', de: '1.4L Reihenvierzylinder 125 PS', ru: '1.4L R4 TFSI 125 (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,400 kg',
          sprint0100: '9.3 s',
          topSpeed: '206 km/h',
          realWorldFuel: '6.0 L/100km',
          tankRange: '50 L (~830 km)',
          euroNorm: 'Euro 5/6 (Petrol)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.5,
            badges: {
              en: ['0–100 km/h: 9.3 s • 206 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 9.3 s • 206 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 9.3 с • 206 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['6.0 L/100km', 'Low Running Costs'],
              de: ['6.0 L/100km', 'Günstig im Alltag'],
              ru: ['6.0 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.4-tfsi-140',
        engineRef: 'vag-1.4-tsi-140',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€10,900',
            specOverrides: { sprint0100: '8.4 s', topSpeed: '213 km/h', realWorldFuel: '6.3 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.4,
                badges: {
                  en: ['6.3 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,3 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,3 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 140,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.4 TFSI (140) (8V)',
        fullName: '2016 Audi A3 1.4 TFSI (140) (8V)',
        engineBadge: '1.4 TFSI (140) • 140 HP',
        engineSubLabel: {
          en: '1.4 TFSI (140) Belt Petrol (05/2012–04/2014) • 6-MT / 7-DSG (Dry) • 250 Nm • FWD',
          de: '1.4 TFSI (140) (05/2012–04/2014) • 6-MT / 7-DSG (Trocken) • 250 Nm • FWD',
          ru: '1.4 TFSI (140) (05/2012–04/2014) • 6-MT / 7-DSG (сухая) • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€26,200 New',
          de: '26,200 € Neu',
          ru: '€26,200 новый'
        },
        estUsedPrice: '€9,800',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 250 Nm • 6.1 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 250 Nm • 6.1 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 250 Н·м • 6.1 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 250 Nm turbo torque & 6.1 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 250 Nm & ca. 6.1 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 250 Н·м и расход ~6.1 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L I4 TFSI 140 (Belt)', de: '1.4L Reihenvierzylinder 140 PS', ru: '1.4L R4 TFSI 140 (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,500 kg',
          sprint0100: '8.4 s',
          topSpeed: '213 km/h',
          realWorldFuel: '6.1 L/100km',
          tankRange: '50 L (~820 km)',
          euroNorm: 'Euro 5/6 (Petrol)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.2,
            badges: {
              en: ['0–100 km/h: 8.4 s • 213 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 8.4 s • 213 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 8.4 с • 213 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['6.1 L/100km', 'Low Running Costs'],
              de: ['6.1 L/100km', 'Günstig im Alltag'],
              ru: ['6.1 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.4-tfsi-cod',
        engineRef: 'vag-1.4-tsi-150-cod',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€12,700',
            specOverrides: { sprint0100: '8.2 s', topSpeed: '220 km/h', realWorldFuel: '6.1 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.7,
                badges: {
                  en: ['6.1 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,1 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,1 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.4 TFSI COD (150) (8V)',
        fullName: '2016 Audi A3 1.4 TFSI COD (150) (8V)',
        engineBadge: '1.4 TFSI COD (150) • 150 HP',
        engineSubLabel: {
          en: '1.4 TFSI COD (150) Belt + COD (05/2014–03/2017) • 6-MT / 7-DSG (Dry) • 250 Nm • FWD',
          de: '1.4 TFSI COD (150) (05/2014–03/2017) • 6-MT / 7-DSG (Trocken) • 250 Nm • FWD',
          ru: '1.4 TFSI COD (150) (05/2014–03/2017) • 6-MT / 7-DSG (сухая) • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€27,400 New',
          de: '27,400 € Neu',
          ru: '€27,400 новый'
        },
        estUsedPrice: '€11,600',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 250 Nm • 5.9 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 250 Nm • 5.9 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 250 Н·м • 5.9 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 250 Nm turbo torque & 5.9 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 250 Nm & ca. 5.9 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 250 Н·м и расход ~5.9 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L I4 TFSI COD 150 (Belt)', de: '1.4L Reihenvierzylinder COD 150', ru: '1.4L R4 TFSI COD 150 (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,500 kg',
          sprint0100: '8.2 s',
          topSpeed: '220 km/h',
          realWorldFuel: '5.9 L/100km',
          tankRange: '50 L (~845 km)',
          euroNorm: 'Euro 6 (Petrol)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.2 s • 220 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 8.2 s • 220 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 8.2 с • 220 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['5.9 L/100km', 'Low Running Costs'],
              de: ['5.9 L/100km', 'Günstig im Alltag'],
              ru: ['5.9 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.5-tfsi-cod',
        engineRef: 'vag-1.5-tsi-150-cod',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€14,600',
            specOverrides: { sprint0100: '8.2 s', topSpeed: '220 km/h', realWorldFuel: '6.0 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.8,
                badges: {
                  en: ['6.0 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,0 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,0 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.5 TFSI COD (8V)',
        fullName: '2016 Audi A3 1.5 TFSI COD (8V)',
        engineBadge: '1.5 TFSI COD • 150 HP',
        engineSubLabel: {
          en: '1.5 TFSI COD Belt + COD (04/2017–08/2018) • 6-MT / 7-DSG (Dry) • 250 Nm • FWD',
          de: '1.5 TFSI COD (04/2017–08/2018) • 6-MT / 7-DSG (Trocken) • 250 Nm • FWD',
          ru: '1.5 TFSI COD (04/2017–08/2018) • 6-MT / 7-DSG (сухая) • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'EFFICIENT TURBO',
          de: 'EFFIZIENTER TURBO',
          ru: 'ЭКОНОМ-ТУРБО'
        },
        originalMsrp: {
          en: '€28,200 New',
          de: '28,200 € Neu',
          ru: '€28,200 новый'
        },
        estUsedPrice: '€13,400',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 250 Nm • 5.8 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 250 Nm • 5.8 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 250 Н·м • 5.8 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 250 Nm turbo torque & 5.8 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 250 Nm & ca. 5.8 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 250 Н·м и расход ~5.8 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '1.5L I4 TFSI Evo 150 (Belt)', de: '1.5L Reihenvierzylinder Evo 150', ru: '1.5L R4 TFSI Evo 150 (Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,500 kg',
          sprint0100: '8.2 s',
          topSpeed: '220 km/h',
          realWorldFuel: '5.8 L/100km',
          tankRange: '50 L (~860 km)',
          euroNorm: 'Euro 6d-TEMP (Petrol)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.2 s • 220 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 8.2 s • 220 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 8.2 с • 220 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['5.8 L/100km', 'Low Running Costs'],
              de: ['5.8 L/100km', 'Günstig im Alltag'],
              ru: ['5.8 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: 'e-tron',
        defaultGearboxId: 'dq400e-6-wet',
        gearboxes: [{ id: 'dq400e-6-wet', isDefault: true }],
        buyerFitGroup: 'phev',
        dossierGroup: 'hybrid-wet-dsg',
        isDefault: false,
        fuelType: 'hybrid',
        hp: 204,
        drivetrain: 'FWD',
        shortTitle: 'A3 e-tron (1.4 PHEV) (8V)',
        fullName: '2016 Audi A3 e-tron (1.4 PHEV) (8V)',
        engineBadge: 'e-tron (1.4 PHEV) • 204 HP PHEV',
        engineSubLabel: {
          en: 'e-tron (1.4 PHEV) 1.4 TFSI + Electric (07/2014–03/2018) • 6-DSG • 350 Nm • FWD',
          de: 'e-tron (1.4 PHEV) 1.4 TFSI + E-Motor (07/2014–03/2018) • 6-DSG • 350 Nm • FWD',
          ru: 'e-tron (1.4 PHEV) 1.4 TFSI + электромотор (07/2014–03/2018) • 6-DSG • 350 Н·м • FWD'
        },
        rarityLabel: {
          en: 'PLUG-IN HYBRID',
          de: 'PLUG-IN-HYBRID',
          ru: 'ГИБРИД PHEV'
        },
        originalMsrp: {
          en: '€38,400 New',
          de: '38,400 € Neu',
          ru: '€38,400 новый'
        },
        estUsedPrice: '€13,500',
        perkLabel: {
          en: '✦ 204 HP / 350 Nm • ~35 km Real EV Range • Tough 6-DSG',
          de: '✦ 204 PS / 350 Nm • ~35 km E-Reichweite • Robustes 6-DSG',
          ru: '✦ 204 л.с. / 350 Н·м • ~35 км на токе • Мокрая 6-DSG'
        },
        remarkablePositives: {
          en: [
            'Silent 30–38 km electric city commute',
            'Combined 204 hp / 350 Nm boost when needed',
            'Low road tax & tough wet 6-DSG'
          ],
          de: [
            '30–38 km rein elektrisch pendeln',
            '204 PS / 350 Nm Systemleistung',
            'Niedrige Steuer & robustes 6-DSG'
          ],
          ru: [
            '30–38 км по городу на чистом токе',
            'Суммарные 204 л.с. и 350 Н·м',
            'Низкий налог и крепкая 6-DSG'
          ]
        },
        notableNegatives: {
          en: [
            'Boot drops from 380 L to 280 L',
            'Extra weight (~1,540 kg) dulls agility',
            'High-voltage battery/coolant repairs costly out of warranty'
          ],
          de: [
            'Kofferraum schrumpft auf 280 L',
            'Höheres Gewicht (~1.540 kg)',
            'HV-Batterie/Kühlventile außerhalb Garantie teuer'
          ],
          ru: [
            'Багажник уменьшен до 280 л',
            'Выше масса (~1540 кг)',
            'Ремонт высоковольтной части дорог'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L PHEV e-tron (204 HP)', de: '1.4L Plug-in-Hybrid e-tron (204 PS)', ru: '1.4L PHEV e-tron (204 л.с.)' },
          forcedInduction: '@hybridEMotor', injection: '@direct', timingDrive: '@belt',
          gearbox: '@dsg6Wet', clutchDmf: '@dsg6Wet', towingBraked: '1,400 kg',
          sprint0100: '7.6 s', topSpeed: '222 km/h', peakTorque: '350 Nm Combined',
          passingPunch: { en: 'Instant Electric Launch', de: 'Sofortiger E-Boost (350 Nm)', ru: 'Мгновенный электроподхват' },
          realWorldFuel: '2.5–4.5 L/100km (Chg)', tankRange: '40 L + 8.8 kWh (~30–40 km EV)', euroNorm: 'Euro 6 (PHEV)', taxInsurance: '@tierVeryLow', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 7.6,
            badges: {
              en: ['Solid 1.4 EA211 + Electric', 'Watch HV Coolant Valve & Seals'],
              de: ['Solider 1.4 EA211 + E-Antrieb', 'HV-Kühlventil & Dichtungen prüfen'],
              ru: ['Надёжный 1.4 EA211 + электромотор', 'Проверить клапаны охлаждения HV']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CUKB + 75 kW E-Motor · 1,395 cc' }, { k: 'architecture', v: { en: '1.4 TFSI + Electric Motor · Wet 6-DSG (DQ400E) PHEV', de: '1.4 TFSI + E-Motor · Nasses 6-DSG (DQ400E) Plug-in-Hybrid', ru: '1.4 TFSI + электромотор · Мокрый 6-DSG (DQ400E) PHEV' } }], note: { en: '350 Nm instant punch and silent 30–40 km electric commuting if you can charge at home; without home charging, the smaller boot and extra weight make less sense.', de: '350 Nm Sofortschub und 30–40 km rein elektrisch mit Heim-Lademöglichkeit; ohne Wallbox schmälert das Gewicht den Vorteil.', ru: 'Мгновенные 350 Н·м и 30–40 км на электротяге при наличии домашней розетки; без зарядки лишний вес и меньший багажник теряют смысл.' } },
              forcedInduction: '@hybridEMotor', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Clever 204 hp plug-in hybrid— shines if you charge daily, check HV battery health.',
                strengths: [
                  'Silent EV commuting + 350 Nm combined highway punch.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  '8.8 kWh HV battery degradation on 2014–2016 cars.',
                  'HV coolant valve / charging flap actuator faults.'
                ],
                beforeYouBuy: [
                  'Test full EV range from 100% charge (should show ~35–42 km).',
                  'Verify AC charging works without fault lights.',
                  'Inspect rear brake discs for rust from regen braking.'
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
                    km: '160,000–180,000 km / 6–8 yrs',
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
                    km: '160,000–210,000 km / 10+ yrs',
                    action: 'HV battery capacity test, coolant 3-way valve & charging port seal check',
                    cost: '€500–€1,400',
                    ifIgnored: 'Moisture ingress or stuck valve disables EV drive',
                    damageCost: '€2,800–€6,000'
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
                headline: 'Starker 204-PS-Plug-in— ideal für Heim-Lader, HV-Akku-Zustand prüfen.',
                strengths: [
                  'Leises E-Pendeln + 350 Nm Systemleistung.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: ['Akku-Alterung bei frühen 2014–2016 Modellen.', 'Kühlventil & Ladeklappen-Stellmotor.'],
                beforeYouBuy: [
                  'Volle E-Reichweite testen (ca. 35–42 km).',
                  'Ladevorgang ohne Fehlermeldung prüfen.',
                  'Bremsscheiben auf Rekuperations-Rost prüfen.'
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
                    km: '160.000–180.000 km / 6–8 J.',
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
                    km: '160.000–210.000 km / 10+ J.',
                    action: 'HV-Akku-Diagnose, 3-Wege-Kühlventil & Ladebuchsen-Dichtung prüfen',
                    cost: '500–1.400 €',
                    ifIgnored: 'Feuchtigkeit oder defektes Ventil legt E-Antrieb lahm',
                    damageCost: '2.800–6.000 €'
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
                headline: 'Быстрый гибрид 204 л.с.— идеален при ежедневной зарядке, проверяйте батарею.',
                strengths: [
                  'Тихие поездки на токе + 350 Н·м на трассе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Деградация батареи 8,8 кВт·ч на ранних авто.',
                  'Клапан охлаждения HV и привод лючка зарядки.'
                ],
                beforeYouBuy: [
                  'Проверить запас хода на 100% заряде (~35–42 км).',
                  'Проверить зарядку от сети без ошибок.',
                  'Осмотреть диски на коррозию от рекуперации.'
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
                    km: '160 000–180 000 km / 6–8 лет',
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
                    km: '160 000–210 000 км / 10+ лет',
                    action: 'Диагностика тяговой батареи, клапана контура и уплотнителей зарядки',
                    cost: '€500–€1 400',
                    ifIgnored: 'Попадание влаги или клин клапана отключает гибрид',
                    damageCost: '€2 800–€6 000'
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
            score: 8.0,
            badges: {
              en: ['Wet 6-DSG Hybrid Unit Tough', 'Service DSG Oil Every 60k km'],
              de: ['Nasses 6-DSG Hybrid-Getriebe robust', 'DSG-Öl alle 60 Tkm wechseln'],
              ru: ['Мокрая 6-DSG надёжна', 'Масло DSG менять раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.9,
            badges: {
              en: ['0–100 km/h: 7.6 s • 222 km/h', 'Instant Electric Launch'],
              de: ['0–100 km/h: 7,6 s • 222 km/h', 'Spontaner E-Antritt'],
              ru: ['0–100 км/ч: 7,6 с • 222 км/ч', 'Мгновенный старт на электротяге']
            }
          },
          midRangeTorquePassing: {
            score: 8.5,
            badges: {
              en: ['350 Nm Combined Torque', 'Effortless Passing Punch'],
              de: ['350 Nm Systemdrehmoment', 'Kräftiger Zwischenspurt'],
              ru: ['350 Н·м суммарной тяги', 'Мощный подхват']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 9.1,
            badges: {
              en: ['2.0–4.5 L/100km (Charged)', '6.5 L/100km Battery Empty'],
              de: ['2,0–4,5 L/100km (geladen)', '6,5 L/100km bei leerem Akku'],
              ru: ['2,0–4,5 л/100 км (с зарядкой)', '6,5 л/100 км без зарядки']
            }
          },
          taxInsuranceNorm: {
            score: 8.5,
            badges: {
              en: ['Low PHEV Tax Incentives', 'Moderate Insurance'],
              de: ['Günstige Hybrid-Steuer', 'Normale Versicherung'],
              ru: ['Льготный налог для гибрида', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG hybrid oil (DQ400E) & replace spark plugs', de: 'Nasses 6-DSG-Hybridöl (DQ400E) wechseln & Zündkerzen erneuern', ru: 'Замена масла в гибридном мокром 6-DSG (DQ400E) и свечей' }, cost: '€320–480' },
                { when: { en: 'Every 180,000 km / 10 yrs', de: 'Alle 180.000 km / 10 J.', ru: 'Каждые 180 000 км / 10 лет' }, action: { en: 'Replace 1.4 TFSI EA211 timing belt & check HV battery cooling circuit', de: '1.4-TFSI-Zahnriemen wechseln & HV-Akku-Kühlkreislauf prüfen', ru: 'Замена ремня ГРМ 1.4 TFSI и проверка контура охлаждения ВВБ' }, cost: '€580–850' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km / 10+ yrs', de: '120.000–190.000 km / 10+ J.', ru: '120–190 тыс. км / 10+ лет' }, action: { en: 'HV battery capacity health / moisture seal & DQ400E K0 disconnect clutch', de: 'HV-Akku-Zustand / Abdichtung & DQ400E Trennkupplung / Mechatronik', ru: 'Состояние/герметичность ВВБ и сцепление/мехатроник DQ400E' }, cost: '€1,200–2,800', risk: { en: 'Reduced EV range, hybrid isolation fault, or jerky engine-to-EV handoff', de: 'Geringe E-Reichweite, Isolationsfehler oder ruckeliger Übergang Verbrenner/E-Motor', ru: 'Падение запаса хода на токе, ошибка изоляции или рывки при переходе на ДВС' }, damage: '€3,500–6,500' }
              ]
            },
            badges: {
              en: ['60k DSG Service + Brake Corrosion', 'HV Parts Pricier'],
              de: ['60 Tkm DSG + Bremsen-Rost prüfen', 'HV-Teile teurer'],
              ru: ['ТО DSG 60 тыс. + ржавчина тормозов', 'Детали HV дороже']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
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
            id: 'dq250-6-wet',
            estUsedPrice: '€13,400',
            specOverrides: { sprint0100: '6.8 s', topSpeed: '232 km/h', realWorldFuel: '7.4 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 8.6,
                badges: {
                  en: ['0–100 km/h: 6.8 s (DSG)', '232 km/h Top Speed'],
                  de: ['0–100 km/h: 6,8 s (DSG)', '232 km/h Spitze'],
                  ru: ['0–100 км/ч: 6,8 s (DSG)', 'Макс. 232 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.3,
                badges: {
                  en: ['7.4 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['7,4 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['7,4 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'big-tfsi',
        dossierGroup: 'petrol-wet-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 180,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.8 TFSI (8V)',
        fullName: '2016 Audi A3 1.8 TFSI (8V)',
        engineBadge: '1.8 TFSI • 180 HP',
        engineSubLabel: {
          en: '1.8 TFSI Chain Petrol (05/2012–04/2016) • 6-MT / Wet 6-DSG (or 7-DSG) • 250 Nm • FWD',
          de: '1.8 TFSI (05/2012–04/2016) • 6-MT / Nass 6-DSG (or 7-DSG) • 250 Nm • FWD',
          ru: '1.8 TFSI (05/2012–04/2016) • 6-MT / мокрая 6-DSG (or 7-DSG) • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'WARM HATCH',
          de: 'FLOTTER TURBO',
          ru: 'БЫСТРЫЙ 8V'
        },
        originalMsrp: {
          en: '€29,900 New',
          de: '29,900 € Neu',
          ru: '€29,900 новый'
        },
        estUsedPrice: '€12,200',
        perkLabel: {
          en: '✦ Gen3 Chain Engine • 250 Nm • 7.1 L/100km',
          de: '✦ Gen3-Kettenmotor • 250 Nm • 7.1 L/100km',
          ru: '✦ Цепной Gen3 • 250 Н·м • 7.1 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Updated Gen3 chain fixes 8P oil consumption',
            'Smooth 250 Nm turbo torque & 7.1 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Gen3-Motor löst 8P-Ölverbrauch',
            'Ruhige 250 Nm & ca. 7.1 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Gen3 решил проблему масложора 8P',
            'Ровная тяга 250 Н·м и расход ~7.1 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            'Higher fuel & insurance costs',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            'Höherer Verbrauch & Versicherung',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Выше расход и страховка',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '1.8L I4 TFSI 180 (EA888 Gen3)', de: '1.8L Reihenvierzylinder 180 PS', ru: '1.8L R4 TFSI 180 (EA888 Gen3)' },
          forcedInduction: '@turbo', injection: '@dualInj', timingDrive: '@chain',
          gearbox: '@manual6', clutchDmf: '@dsg6Wet', towingBraked: '1,600 kg',
          sprint0100: '7.2 s', topSpeed: '232 km/h', peakTorque: '250 Nm @ 1,250 rpm',
          passingPunch: { en: 'Rapid 7.2 s Warm-Hatch', de: 'Flotter 7,2-s-Antritt', ru: 'Бодрые 7,2 с до 100' },
          realWorldFuel: '7.1 L/100km', tankRange: '50 L (~705 km)', euroNorm: 'Euro 6 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.8,
            badges: {
              en: ['Gen3 Fixes 8P Oil Burn', 'Watch Plastic Water Pump Housing'],
              de: ['Gen3 ohne 8P-Ölproblem', 'Wasserpumpen-Gehäuse prüfen'],
              ru: ['Gen3 без масложора 8P', 'Проверить корпус помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CJSA / CJSB (EA888 Gen3) · 1,798 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron · Dual Port+Direct Injection (Chain)', de: 'Reihenvierzylinder Grauguss · Dual-Einspritzung (Kette)', ru: 'Рядный 4-цил. чугун · Комбинированный впрыск (Цепь)' } }], note: { en: 'Huge leap over the 8P 1.8 TFSI: EA888 Gen3 fixed the oil-ring and chain disasters, and dual injection keeps intake valves clean.', de: 'Riesensprung gegenüber dem 8P: Der EA888 Gen3 löst Ölverbrauchs- und Kettenprobleme und hält Ventile per Dual-Einspritzung sauber.', ru: 'Огромный шаг вперёд после 8P: EA888 Gen3 избавился от масложора и проблем цепи, а двойной впрыск чистит клапаны.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Modern MQB 1.8 TFSI— solves the 8P timing-chain/oil issues with crisp efficiency.',
                strengths: [
                  'Much higher reliability than 2007–2011 8P TFSI engines.',
                  'Refined, quiet and frugal in everyday driving.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Plastic water-pump / thermostat housing seepage.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Inspect underbonnet for pink coolant crust around thermostat/pump.',
                  'Check full service history (15,000 km oil changes best).',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
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
                    km: '150,000–200,000 km / 6–9 yrs',
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
                headline: 'Moderner MQB 1.8 TFSI— löst die alten 8P-Schwächen mit hoher Effizienz.',
                strengths: [
                  'Deutlich zuverlässiger als die alten 8P-TFSI.',
                  'Leise und sparsam im Alltag.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichtigkeiten am Kunststoff-Thermostatgehäuse.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Kühlmittelreste am Thermostat-/Pumpengehäuse suchen.',
                  'Regelmäßige Ölwechsel prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
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
                    km: '150.000–200.000 km / 6–9 J.',
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
                headline: 'Современный 1.8 TFSI на MQB— избавлен от детских болезней A3 8P.',
                strengths: [
                  'Заметно надёжнее старых TFSI на поколении 8P.',
                  'Тихий, плавный и экономичный.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекания пластикового корпуса термостата/помпы.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Осмотреть корпус помпы на розовый налёт антифриза.',
                  'Убедиться в регулярной замене масла.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
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
                    km: '150 000–200 000 km / 6–9 лет',
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
            score: 8.3,
            badges: {
              en: ['Wet DSG & 6-MT Both Tough', 'Check Uphill Creep Smoothness'],
              de: ['Nasses DSG & 6-Gang robust', 'Anfahren am Berg testen'],
              ru: ['Мокрая DSG и 6-МКПП крепки', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.3,
            badges: {
              en: ['0–100 km/h: 7.2 s • 232 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 7.2 s • 232 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 7.2 с • 232 км/ч', 'Бодрый отклик турбины']
            }
          },
          midRangeTorquePassing: {
            score: 7.6,
            badges: {
              en: ['250 Nm Turbo Torque', 'Clean Mid-Range Passing'],
              de: ['250 Nm Drehmoment', 'Sauberer Durchzug'],
              ru: ['250 Н·м крутящего момента', 'Уверенные обгоны']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.1,
            badges: {
              en: ['7.1 L/100km', 'Low Running Costs'],
              de: ['7.1 L/100km', 'Günstig im Alltag'],
              ru: ['7.1 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 7.5,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG (DQ250/DQ381) oil + Haldex Quattro oil (if AWD) & spark plugs', de: 'Nasses DSG-Öl (DQ250/DQ381) + Haldex-Öl (falls Quattro) & Zündkerzen wechseln', ru: 'Замена масла в мокром DSG + масло муфты Haldex (если Quattro) и свечи' }, cost: '€320–490' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect PCV oil separator & camshaft adjuster magnet valves', de: 'Ölabscheider (KGE) & Nockenwellen-Steuerventile prüfen', ru: 'Проверка маслоотделителя ВКГ и клапанов фазовращателей' }, cost: '€160–260' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'EA888 Gen3 plastic thermostat / water-pump housing (classic coolant leak)', de: 'EA888 Gen3 Kunststoff-Thermostatgehäuse / Wasserpumpe (typische Leckage)', ru: 'Пластиковый модуль термостата и помпы EA888 Gen3 (типичная течь ОЖ)' }, cost: '€650–1,050', risk: { en: 'Slow or sudden coolant leak leading to overheating if ignored', de: 'Schleichender bis starker Kühlwasserverlust bis zur Überhitzung', ru: 'Утечка антифриза вплоть до перегрева двигателя' }, damage: '€1,800–3,200' },
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Haldex V AWD pump strainer clean (Quattro) & wastegate actuator check', de: 'Haldex-5-Sieb reinigen (Quattro) & Turbo-Wastegate prüfen', ru: 'Чистка сетки насоса Haldex 5 (Quattro) и проверка актуатора турбины' }, cost: '€240–550', risk: { en: 'Clogged Haldex screen burns out AWD pump silently', de: 'Verstopftes Haldex-Sieb lässt die Allradpumpe unbemerkt durchbrennen', ru: 'Забитая сетка Haldex незаметно сжигает насос полного привода' }, damage: '€900–1,400' }
              ]
            },
            badges: {
              en: ['Updated Chain • Water Pump Watch', 'DSG Service if Fitted'],
              de: ['Robuste Kette • Wasserpumpe prüfen', 'DSG-Wartung beachten'],
              ru: ['Цепь крепка • Проверить помпу', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
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
            id: 'dq381-7-wet',
            estUsedPrice: '€16,800',
            specOverrides: { sprint0100: '6.4 s', topSpeed: '244 km/h', realWorldFuel: '7.5 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 9,
                badges: {
                  en: ['0–100 km/h: 6.4 s (DSG)', '244 km/h Top Speed'],
                  de: ['0–100 km/h: 6,4 s (DSG)', '244 km/h Spitze'],
                  ru: ['0–100 км/ч: 6,4 s (DSG)', 'Макс. 244 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.2,
                badges: {
                  en: ['7.5 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['7,5 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['7,5 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'big-tfsi',
        dossierGroup: 'petrol-wet-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 190,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TFSI (8V)',
        fullName: '2016 Audi A3 2.0 TFSI (8V)',
        engineBadge: '2.0 TFSI • 190 HP',
        engineSubLabel: {
          en: '2.0 TFSI Chain Petrol (05/2016–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 320 Nm • FWD',
          de: '2.0 TFSI (05/2016–08/2018) • 6-MT / Nass 6-DSG (or 7-DSG) • 320 Nm • FWD',
          ru: '2.0 TFSI (05/2016–08/2018) • 6-MT / мокрая 6-DSG (or 7-DSG) • 320 Н·м • FWD'
        },
        rarityLabel: {
          en: 'WARM HATCH',
          de: 'FLOTTER TURBO',
          ru: 'БЫСТРЫЙ 8V'
        },
        originalMsrp: {
          en: '€32,400 New',
          de: '32,400 € Neu',
          ru: '€32,400 новый'
        },
        estUsedPrice: '€15,400',
        perkLabel: {
          en: '✦ Gen3 Chain Engine • 320 Nm • 7.3 L/100km',
          de: '✦ Gen3-Kettenmotor • 320 Nm • 7.3 L/100km',
          ru: '✦ Цепной Gen3 • 320 Н·м • 7.3 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Updated Gen3 chain fixes 8P oil consumption',
            'Smooth 320 Nm turbo torque & 7.3 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Gen3-Motor löst 8P-Ölverbrauch',
            'Ruhige 320 Nm & ca. 7.3 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Gen3 решил проблему масложора 8P',
            'Ровная тяга 320 Н·м и расход ~7.3 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            'Higher fuel & insurance costs',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            'Höherer Verbrauch & Versicherung',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Выше расход и страховка',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TFSI 190 (EA888 Gen3)', de: '2.0L Reihenvierzylinder 190 PS', ru: '2.0L R4 TFSI 190 (EA888 Gen3)' },
          forcedInduction: '@turbo', injection: '@dualInj', timingDrive: '@chain',
          gearbox: '@manual6', clutchDmf: '@dsg7Wet', towingBraked: '1,600 kg',
          sprint0100: '6.7 s', topSpeed: '244 km/h', peakTorque: '320 Nm @ 1,500 rpm',
          passingPunch: { en: 'Effortless 320 Nm Express', de: 'Souveräner 320-Nm-Express', ru: 'Мощный 320-Н·м экспресс' },
          realWorldFuel: '7.3 L/100km', tankRange: '50 L (~685 km)', euroNorm: 'Euro 6 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.8,
            badges: {
              en: ['Gen3 Fixes 8P Oil Burn', 'Watch Plastic Water Pump Housing'],
              de: ['Gen3 ohne 8P-Ölproblem', 'Wasserpumpen-Gehäuse prüfen'],
              ru: ['Gen3 без масложора 8P', 'Проверить корпус помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CZPB (EA888 Gen3B) · 1,984 cc' }, { k: 'architecture', v: { en: 'Inline-4 B-Cycle Turbo · Dual Injection + Wet 7-DSG (DQ381)', de: 'Reihenvierzylinder B-Zyklus · Dual-Einspritzung + Nasses 7-DSG', ru: 'Рядный 4-цил. цикл B · Двойной впрыск + мокрый 7-DSG (DQ381)' } }], note: { en: 'Arguably the best petrol A3 8V: 6.7 s pace, tough wet 7-speed DQ381 DSG, optional Quattro, and surprisingly modest 7.3 L/100km fuel burn.', de: 'Wohl der beste Benziner im A3 8V: 6,7 s auf 100, robustes nasses 7-Gang-DSG (DQ381) und faire 7,3 L Verbrauch.', ru: 'Пожалуй, лучший бензиновый A3 8V: 6,7 с до 100, крепкий мокрый 7-DSG (DQ381), опция Quattro и скромные 7,3 л расхода.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Modern MQB 2.0 TFSI— solves the 8P timing-chain/oil issues with crisp efficiency.',
                strengths: [
                  'Much higher reliability than 2007–2011 8P TFSI engines.',
                  'Refined, quiet and frugal in everyday driving.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Plastic water-pump / thermostat housing seepage.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Inspect underbonnet for pink coolant crust around thermostat/pump.',
                  'Check full service history (15,000 km oil changes best).',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
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
                    km: '150,000–200,000 km / 6–9 yrs',
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
                headline: 'Moderner MQB 2.0 TFSI— löst die alten 8P-Schwächen mit hoher Effizienz.',
                strengths: [
                  'Deutlich zuverlässiger als die alten 8P-TFSI.',
                  'Leise und sparsam im Alltag.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichtigkeiten am Kunststoff-Thermostatgehäuse.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Kühlmittelreste am Thermostat-/Pumpengehäuse suchen.',
                  'Regelmäßige Ölwechsel prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
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
                    km: '150.000–200.000 km / 6–9 J.',
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
                headline: 'Современный 2.0 TFSI на MQB— избавлен от детских болезней A3 8P.',
                strengths: [
                  'Заметно надёжнее старых TFSI на поколении 8P.',
                  'Тихий, плавный и экономичный.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекания пластикового корпуса термостата/помпы.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Осмотреть корпус помпы на розовый налёт антифриза.',
                  'Убедиться в регулярной замене масла.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
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
                    km: '150 000–200 000 km / 6–9 лет',
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
            score: 8.3,
            badges: {
              en: ['Wet DSG & 6-MT Both Tough', 'Check Uphill Creep Smoothness'],
              de: ['Nasses DSG & 6-Gang robust', 'Anfahren am Berg testen'],
              ru: ['Мокрая DSG и 6-МКПП крепки', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.7,
            badges: {
              en: ['0–100 km/h: 6.7 s • 244 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 6.7 s • 244 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 6.7 с • 244 км/ч', 'Бодрый отклик турбины']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['320 Nm Turbo Torque', 'Clean Mid-Range Passing'],
              de: ['320 Nm Drehmoment', 'Sauberer Durchzug'],
              ru: ['320 Н·м крутящего момента', 'Уверенные обгоны']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.1,
            badges: {
              en: ['7.3 L/100km', 'Low Running Costs'],
              de: ['7.3 L/100km', 'Günstig im Alltag'],
              ru: ['7.3 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 7.5,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG (DQ250/DQ381) oil + Haldex Quattro oil (if AWD) & spark plugs', de: 'Nasses DSG-Öl (DQ250/DQ381) + Haldex-Öl (falls Quattro) & Zündkerzen wechseln', ru: 'Замена масла в мокром DSG + масло муфты Haldex (если Quattro) и свечи' }, cost: '€320–490' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect PCV oil separator & camshaft adjuster magnet valves', de: 'Ölabscheider (KGE) & Nockenwellen-Steuerventile prüfen', ru: 'Проверка маслоотделителя ВКГ и клапанов фазовращателей' }, cost: '€160–260' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'EA888 Gen3 plastic thermostat / water-pump housing (classic coolant leak)', de: 'EA888 Gen3 Kunststoff-Thermostatgehäuse / Wasserpumpe (typische Leckage)', ru: 'Пластиковый модуль термостата и помпы EA888 Gen3 (типичная течь ОЖ)' }, cost: '€650–1,050', risk: { en: 'Slow or sudden coolant leak leading to overheating if ignored', de: 'Schleichender bis starker Kühlwasserverlust bis zur Überhitzung', ru: 'Утечка антифриза вплоть до перегрева двигателя' }, damage: '€1,800–3,200' },
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Haldex V AWD pump strainer clean (Quattro) & wastegate actuator check', de: 'Haldex-5-Sieb reinigen (Quattro) & Turbo-Wastegate prüfen', ru: 'Чистка сетки насоса Haldex 5 (Quattro) и проверка актуатора турбины' }, cost: '€240–550', risk: { en: 'Clogged Haldex screen burns out AWD pump silently', de: 'Verstopftes Haldex-Sieb lässt die Allradpumpe unbemerkt durchbrennen', ru: 'Забитая сетка Haldex незаметно сжигает насос полного привода' }, damage: '€900–1,400' }
              ]
            },
            badges: {
              en: ['Updated Chain • Water Pump Watch', 'DSG Service if Fitted'],
              de: ['Robuste Kette • Wasserpumpe prüfen', 'DSG-Wartung beachten'],
              ru: ['Цепь крепка • Проверить помпу', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.6-tdi-105',
        engineRef: 'vag-1.6-tdi-105',
        defaultGearboxId: 'mq250-6mt-dmf',
        gearboxes: [
          { id: 'mq250-6mt-dmf', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€9,900',
            specOverrides: { sprint0100: '10.9 s', topSpeed: '195 km/h', realWorldFuel: '4.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.2,
                badges: {
                  en: ['0–100 km/h: 10.9 s (DSG)', '195 km/h Top Speed'],
                  de: ['0–100 km/h: 10,9 s (DSG)', '195 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,9 s (DSG)', 'Макс. 195 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.8,
                badges: {
                  en: ['4.8 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['4,8 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['4,8 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tdi',
        dossierGroup: 'diesel-dry-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 105,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 TDI (105) (8V)',
        fullName: '2016 Audi A3 1.6 TDI (105) (8V)',
        engineBadge: '1.6 TDI (105) • 105 HP',
        engineSubLabel: {
          en: '1.6 TDI (105) Common-Rail (08/2012–04/2014) • 6-MT / 7-DSG • 250 Nm • FWD',
          de: '1.6 TDI (105) Common-Rail (08/2012–04/2014) • 6-MT / 7-DSG • 250 Nm • FWD',
          ru: '1.6 TDI (105) Common-Rail (08/2012–04/2014) • 6-MT / 7-DSG • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'MAX ECONOMY',
          de: 'SPAR-MEISTER',
          ru: 'МАКС. ЭКОНОМИЯ'
        },
        originalMsrp: {
          en: '€25,400 New',
          de: '25,400 € Neu',
          ru: '€25,400 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ 250 Nm Common-Rail • 4.5 L/100km • 210k km Belt',
          de: '✦ 250 Nm Common-Rail • 4.5 L/100km • 210 Tkm Riemen',
          ru: '✦ 250 Н·м Common-Rail • 4.5 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '4.5 L/100km real-world highway economy',
            'Strong 250 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '4.5 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 250 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 4.5 л/100 км на трассе',
            'Уверенная тяга 250 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Torsion-beam rear on 1.6 TDI'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Verbundlenkerachse beim 1.6 TDI'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'У 1.6 TDI сзади балка'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 TDI 105 (EA288 Belt)', de: '1.6L Reihenvierzylinder 105 TDI', ru: '1.6L R4 TDI 105 (EA288 Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '10.7 s',
          topSpeed: '195 km/h',
          realWorldFuel: '4.5 L/100km',
          tankRange: '50 L (~1,110 km)',
          euroNorm: 'Euro 5 (Diesel)',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Tough • 7-DSG Dry Care', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang solide • 7-DSG prüfen', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 10.7 s • 195 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 10.7 s • 195 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 10.7 с • 195 км/ч', 'Уверенный разгон']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 9.0,
            badges: {
              en: ['Efficient (4.5 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (4.5 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (4.5 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.6-tdi-110',
        engineRef: 'vag-1.6-tdi-110',
        defaultGearboxId: 'mq250-6mt-dmf',
        gearboxes: [
          { id: 'mq250-6mt-dmf', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€11,200',
            specOverrides: { sprint0100: '10.7 s', topSpeed: '200 km/h', realWorldFuel: '4.7 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.3,
                badges: {
                  en: ['0–100 km/h: 10.7 s (DSG)', '200 km/h Top Speed'],
                  de: ['0–100 km/h: 10,7 s (DSG)', '200 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,7 s (DSG)', 'Макс. 200 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.9,
                badges: {
                  en: ['4.7 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['4,7 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['4,7 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tdi',
        dossierGroup: 'diesel-dry-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 110,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 TDI ultra (110) (8V)',
        fullName: '2016 Audi A3 1.6 TDI ultra (110) (8V)',
        engineBadge: '1.6 TDI ultra (110) • 110 HP',
        engineSubLabel: {
          en: '1.6 TDI ultra (110) Common-Rail (08/2013–03/2017) • 6-MT / 7-DSG • 250 Nm • FWD',
          de: '1.6 TDI ultra (110) Common-Rail (08/2013–03/2017) • 6-MT / 7-DSG • 250 Nm • FWD',
          ru: '1.6 TDI ultra (110) Common-Rail (08/2013–03/2017) • 6-MT / 7-DSG • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'MAX ECONOMY',
          de: 'SPAR-MEISTER',
          ru: 'МАКС. ЭКОНОМИЯ'
        },
        originalMsrp: {
          en: '€26,200 New',
          de: '26,200 € Neu',
          ru: '€26,200 новый'
        },
        estUsedPrice: '€10,100',
        perkLabel: {
          en: '✦ 250 Nm Common-Rail • 4.4 L/100km • 210k km Belt',
          de: '✦ 250 Nm Common-Rail • 4.4 L/100km • 210 Tkm Riemen',
          ru: '✦ 250 Н·м Common-Rail • 4.4 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '4.4 L/100km real-world highway economy',
            'Strong 250 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '4.4 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 250 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 4.4 л/100 км на трассе',
            'Уверенная тяга 250 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Torsion-beam rear on 1.6 TDI'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Verbundlenkerachse beim 1.6 TDI'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'У 1.6 TDI сзади балка'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 TDI 110 (EA288 Belt)', de: '1.6L Reihenvierzylinder 110 TDI', ru: '1.6L R4 TDI 110 (EA288 Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '10.5 s',
          topSpeed: '200 km/h',
          realWorldFuel: '4.4 L/100km',
          tankRange: '50 L (~1,135 km)',
          euroNorm: 'Euro 6 (Diesel)',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Tough • 7-DSG Dry Care', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang solide • 7-DSG prüfen', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.5,
            badges: {
              en: ['0–100 km/h: 10.5 s • 200 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 10.5 s • 200 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 10.5 с • 200 км/ч', 'Уверенный разгон']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 9.0,
            badges: {
              en: ['Efficient (4.4 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (4.4 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (4.4 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '1.6-tdi-115',
        engineRef: 'vag-1.6-tdi-115',
        defaultGearboxId: 'mq250-6mt-dmf',
        gearboxes: [
          { id: 'mq250-6mt-dmf', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€13,000',
            specOverrides: { sprint0100: '10.4 s', topSpeed: '202 km/h', realWorldFuel: '4.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.5,
                badges: {
                  en: ['0–100 km/h: 10.4 s (DSG)', '202 km/h Top Speed'],
                  de: ['0–100 km/h: 10,4 s (DSG)', '202 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,4 s (DSG)', 'Макс. 202 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.8,
                badges: {
                  en: ['4.8 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['4,8 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['4,8 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tdi',
        dossierGroup: 'diesel-dry-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 115,
        drivetrain: 'FWD',
        shortTitle: 'A3 1.6 TDI (115) (8V)',
        fullName: '2016 Audi A3 1.6 TDI (115) (8V)',
        engineBadge: '1.6 TDI (115) • 115 HP',
        engineSubLabel: {
          en: '1.6 TDI (115) Common-Rail (03/2017–08/2018) • 6-MT / 7-DSG • 250 Nm • FWD',
          de: '1.6 TDI (115) Common-Rail (03/2017–08/2018) • 6-MT / 7-DSG • 250 Nm • FWD',
          ru: '1.6 TDI (115) Common-Rail (03/2017–08/2018) • 6-MT / 7-DSG • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'MAX ECONOMY',
          de: 'SPAR-MEISTER',
          ru: 'МАКС. ЭКОНОМИЯ'
        },
        originalMsrp: {
          en: '€27,100 New',
          de: '27,100 € Neu',
          ru: '€27,100 новый'
        },
        estUsedPrice: '€11,900',
        perkLabel: {
          en: '✦ 250 Nm Common-Rail • 4.5 L/100km • 210k km Belt',
          de: '✦ 250 Nm Common-Rail • 4.5 L/100km • 210 Tkm Riemen',
          ru: '✦ 250 Н·м Common-Rail • 4.5 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '4.5 L/100km real-world highway economy',
            'Strong 250 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '4.5 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 250 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 4.5 л/100 км на трассе',
            'Уверенная тяга 250 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Torsion-beam rear on 1.6 TDI'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Verbundlenkerachse beim 1.6 TDI'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'У 1.6 TDI сзади балка'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 TDI 115 (EA288 Belt)', de: '1.6L Reihenvierzylinder 115 TDI', ru: '1.6L R4 TDI 115 (EA288 Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '10.2 s',
          topSpeed: '202 km/h',
          realWorldFuel: '4.5 L/100km',
          tankRange: '50 L (~1,110 km)',
          euroNorm: 'Euro 6 (Diesel)',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Tough • 7-DSG Dry Care', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang solide • 7-DSG prüfen', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.7,
            badges: {
              en: ['0–100 km/h: 10.2 s • 202 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 10.2 s • 202 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 10.2 с • 202 км/ч', 'Уверенный разгон']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 9.0,
            badges: {
              en: ['Efficient (4.5 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (4.5 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (4.5 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '2.0-tdi-150',
        engineRef: 'vag-2.0-tdi-150',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€13,000',
            specOverrides: { sprint0100: '8.3 s', topSpeed: '216 km/h', realWorldFuel: '5.2 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 7.2,
                badges: {
                  en: ['0–100 km/h: 8.3 s (DSG)', '216 km/h Top Speed'],
                  de: ['0–100 km/h: 8,3 s (DSG)', '216 km/h Spitze'],
                  ru: ['0–100 км/ч: 8,3 s (DSG)', 'Макс. 216 km/h']
                }
              },
              efficiencyFuel: {
                score: 8,
                badges: {
                  en: ['5.2 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['5,2 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['5,2 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'big-tdi',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: true,
        fuelType: 'diesel',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TDI (150) (8V)',
        fullName: '2016 Audi A3 2.0 TDI (150) (8V)',
        engineBadge: '2.0 TDI (150) • 150 HP',
        engineSubLabel: {
          en: '2.0 TDI (150) Common-Rail (05/2012–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 340 Nm • FWD/Quattro',
          de: '2.0 TDI (150) Common-Rail (05/2012–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 340 Nm • FWD/Quattro',
          ru: '2.0 TDI (150) Common-Rail (05/2012–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 340 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'SWEET-SPOT 8V',
          de: 'BESTWERT-8V',
          ru: 'ОПТИМАЛЬНЫЙ 8V'
        },
        originalMsrp: {
          en: '€29,200 New',
          de: '29,200 € Neu',
          ru: '€29,200 новый'
        },
        estUsedPrice: '€11,800',
        perkLabel: {
          en: '✦ 340 Nm Common-Rail • 4.9 L/100km • 210k km Belt',
          de: '✦ 340 Nm Common-Rail • 4.9 L/100km • 210 Tkm Riemen',
          ru: '✦ 340 Н·м Common-Rail • 4.9 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '4.9 L/100km real-world highway economy',
            'Strong 340 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '4.9 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 340 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 4.9 л/100 км на трассе',
            'Уверенная тяга 340 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Higher diesel tax'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Höhere Diesel-Steuer'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'Выше дизельный налог'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TDI 150 (EA288 Belt)', de: '2.0L Reihenvierzylinder 150 TDI', ru: '2.0L R4 TDI 150 (EA288 Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,600 kg',
          sprint0100: '8.6 s',
          topSpeed: '218 km/h',
          realWorldFuel: '4.9 L/100km',
          tankRange: '50 L (~1,020 km)',
          euroNorm: 'Euro 6 (Diesel)',
          taxInsurance: '@tierMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 8.4,
            badges: {
              en: ['6-MT & Wet DSG Very Tough', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang & nasses DSG sehr robust', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП и мокрая DSG крепки', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7,
            badges: {
              en: ['0–100 km/h: 8.6 s • 218 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 8.6 s • 218 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 8.6 с • 218 км/ч', 'Уверенный разгон']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.6,
            badges: {
              en: ['Efficient (4.9 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (4.9 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (4.9 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 7.6,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '2.0-tdi-184',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€14,900',
            specOverrides: { sprint0100: '6.9 s', topSpeed: '230 km/h', realWorldFuel: '5.8 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 8.5,
                badges: {
                  en: ['0–100 km/h: 6.9 s (DSG)', '230 km/h Top Speed'],
                  de: ['0–100 km/h: 6,9 s (DSG)', '230 km/h Spitze'],
                  ru: ['0–100 км/ч: 6,9 s (DSG)', 'Макс. 230 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.5,
                badges: {
                  en: ['5.8 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['5,8 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['5,8 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'big-tdi',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 184,
        drivetrain: 'FWD',
        shortTitle: 'A3 2.0 TDI (184) (8V)',
        fullName: '2016 Audi A3 2.0 TDI (184) (8V)',
        engineBadge: '2.0 TDI (184) • 184 HP',
        engineSubLabel: {
          en: '2.0 TDI (184) Common-Rail (05/2013–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 380 Nm • FWD/Quattro',
          de: '2.0 TDI (184) Common-Rail (05/2013–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 380 Nm • FWD/Quattro',
          ru: '2.0 TDI (184) Common-Rail (05/2013–08/2018) • 6-MT / Wet 6-DSG (or 7-DSG) • 380 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'AUTOBAHN EXPRESS',
          de: 'LANGSTRECKEN-EXPRESS',
          ru: 'ДЛЯ ТРАССЫ'
        },
        originalMsrp: {
          en: '€32,800 New',
          de: '32,800 € Neu',
          ru: '€32,800 новый'
        },
        estUsedPrice: '€13,600',
        perkLabel: {
          en: '✦ 380 Nm Common-Rail • 5.4 L/100km • 210k km Belt',
          de: '✦ 380 Nm Common-Rail • 5.4 L/100km • 210 Tkm Riemen',
          ru: '✦ 380 Н·м Common-Rail • 5.4 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '5.4 L/100km real-world highway economy',
            'Strong 380 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '5.4 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 380 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 5.4 л/100 км на трассе',
            'Уверенная тяга 380 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Higher diesel tax'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Höhere Diesel-Steuer'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'Выше дизельный налог'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 TDI 184 (EA288 Belt)', de: '2.0L Reihenvierzylinder 184 TDI', ru: '2.0L R4 TDI 184 (EA288 Ремень)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt',
          gearbox: '@manual6', clutchDmf: '@clutchDmf', towingBraked: '1,800 kg',
          sprint0100: '7.3 s', topSpeed: '234 km/h', peakTorque: '380 Nm @ 1,750 rpm',
          passingPunch: { en: 'Rapid 380 Nm Diesel GTD', de: 'Kräftige 380 Nm (GTD-Niveau)', ru: 'Мощный 380-Н·м дизель' },
          realWorldFuel: '5.4 L/100km', tankRange: '50 L (~925 km)', euroNorm: 'Euro 6 (Diesel)', taxInsurance: '@tierModHigh', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.4,
            badges: {
              en: ['Proven EA288 Common-Rail', '210k Belt • Watch Water Pump'],
              de: ['Bewährter EA288 Common-Rail', '210 Tkm Riemen • Wasserpumpe prüfen'],
              ru: ['Надёжный EA288 Common-Rail', 'Ремень 210 тыс. • Контроль помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'CUNA (EA288 184 HP) · 1,968 cc' }, { k: 'architecture', v: { en: 'Inline-4 High-Output Diesel · 380 Nm + Opt. Quattro', de: 'Reihenvierzylinder Top-Diesel · 380 Nm + Opt. Quattro', ru: 'Рядный 4-цил. форсированный дизель · 380 Н·м + опц. Quattro' } }], note: { en: 'Blistering 7.3 s / 234 km/h diesel express with 1,800 kg towing; check oil consumption on pre-2016 CUNA units past 150,000 km.', de: 'Schneller 7,3-s-Diesel-Express (234 km/h) mit 1.800 kg Anhängelast; bei frühen CUNA ab 150.000 km Ölverbrauch prüfen.', ru: 'Быстрый дизель (7,3 с, 234 км/ч) и 1 800 кг на фаркопе; на ранних CUNA после 150 тыс. км проверяйте расход масла.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Refined EA288 2.0 TDI (184)— built for high-mileage highway cruising with minimal drama.',
                strengths: [
                  '210,000 km timing belt interval and strong 300k+ km block.',
                  'Real 4.5–5.3 L/100km highway fuel economy.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Switchable water-pump sleeve sticking / weeping.',
                  'DPF / AdBlue / EGR issues if driven only in city traffic.'
                ],
                beforeYouBuy: [
                  'Check coolant level and ask if water pump was replaced.',
                  'Verify highway use & DPF/AdBlue warning-free dash.',
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
                    km: '190,000–240,000 km / 10+ yrs',
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
                headline: 'Kultivierter EA288 2.0 TDI (184)— gemacht für entspannte Langstrecken bei niedrigem Verbrauch.',
                strengths: [
                  '210.000 km Zahnriemenintervall und extrem haltbarer Block.',
                  'Nur 4,5–Sparsam (5,3 L/100km).',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichte/klemmende schaltbare Wasserpumpe.',
                  'DPF / AdBlue / AGR bei reiner Kurzstrecke.'
                ],
                beforeYouBuy: [
                  'Kühlmittelstand & Wasserpumpen-Tausch prüfen.',
                  'Langstrecken-Historie & AdBlue-System checken.',
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
                    km: '190.000–240.000 km / 10+ J.',
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
                headline: 'Тихий и ресурсный дизель EA288 2.0 TDI (184)— создан для уверенных поездок по трассе.',
                strengths: [
                  'Ресурсный блок и ремень на 210 тыс. км.',
                  'Реальный расход 4,5–5,3 л/100 км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекание или клин регулируемой помпы.',
                  'Загрязнение DPF/EGR при езде только по городу.'
                ],
                beforeYouBuy: [
                  'Проверить уровень антифриза и замену помпы.',
                  'Уточнить историю трассовых пробегов и AdBlue.',
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
                    km: '190 000–240 000 km / 10+ лет',
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
            score: 8.4,
            badges: {
              en: ['6-MT & Wet DSG Very Tough', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang & nasses DSG sehr robust', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП и мокрая DSG крепки', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.2,
            badges: {
              en: ['0–100 km/h: 7.3 s • 234 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 7.3 s • 234 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 7.3 с • 234 км/ч', 'Уверенный разгон']
            }
          },
          midRangeTorquePassing: {
            score: 8.5,
            badges: {
              en: ['380 Nm Common-Rail Torque', 'Strong Highway Overtaking'],
              de: ['380 Nm Drehmoment', 'Souveräner Durchzug'],
              ru: ['380 Н·м крутящего момента', 'Лёгкие обгоны на трассе']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.1,
            badges: {
              en: ['Efficient (5.4 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (5.4 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (5.4 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '30-tfsi',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€14,800',
            specOverrides: { sprint0100: '9.9 s', topSpeed: '206 km/h', realWorldFuel: '5.9 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 8,
                badges: {
                  en: ['5.9 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['5,9 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['5,9 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 116,
        drivetrain: 'FWD',
        shortTitle: 'A3 30 TFSI (8V)',
        fullName: '2016 Audi A3 30 TFSI (8V)',
        engineBadge: '30 TFSI • 116 HP',
        engineSubLabel: {
          en: '30 TFSI 3-Cyl Belt (08/2018–02/2020) • 6-MT / 7-DSG (Dry) • 200 Nm • FWD',
          de: '30 TFSI (08/2018–02/2020) • 6-MT / 7-DSG (Trocken) • 200 Nm • FWD',
          ru: '30 TFSI (08/2018–02/2020) • 6-MT / 7-DSG (сухая) • 200 Н·м • FWD'
        },
        rarityLabel: {
          en: 'WLTP PETROL',
          de: 'WLTP-BENZINER',
          ru: 'WLTP БЕНЗИН'
        },
        originalMsrp: {
          en: '€25,800 New',
          de: '25,800 € Neu',
          ru: '€25,800 новый'
        },
        estUsedPrice: '€13,600',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 200 Nm • 5.7 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 200 Nm • 5.7 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 200 Н·м • 5.7 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 200 Nm turbo torque & 5.7 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 200 Nm & ca. 5.7 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 200 Н·м и расход ~5.7 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            '1.0/1.2 models use torsion-beam rear'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Basis-Modelle mit Verbundlenkerachse'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади балка на версиях до 125 л.с.'
          ]
        },
        specOverrides: {
          engineName: { en: '1.0L I3 30 TFSI (WLTP Belt)', de: '1.0L Dreizylinder 30 TFSI', ru: '1.0L R3 30 TFSI (WLTP Ремень)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@belt',
          gearbox: '@manual6', clutchDmf: '@singleClutch', towingBraked: '1,300 kg',
          sprint0100: '9.9 s', topSpeed: '206 km/h', peakTorque: '200 Nm @ 2,000 rpm',
          passingPunch: { en: 'Perky Clean Euro-6d Turbo', de: 'Spritziger Euro-6d-Turbo', ru: 'Живой чистый Euro-6d турбо' },
          realWorldFuel: '5.7 L/100km', tankRange: '50 L (~875 km)', euroNorm: 'Euro 6d-TEMP (OPF)', taxInsurance: '@tierVeryLow', serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 7.9,
            badges: {
              en: ['Belt EA211 Much Tougher Than 8P', 'Watch Plastic Water Pump Housing'],
              de: ['EA211-Zahnriemen deutlich robuster', 'Wasserpumpen-Gehäuse prüfen'],
              ru: ['Ременной EA211 намного надёжнее', 'Проверить корпус помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'DKRF (EA211 WLTP) · 999 cc' }, { k: 'architecture', v: { en: 'Inline-3 Aluminium · Petrol Particulate Filter (OPF) + Belt', de: 'Dreizylinder Alu · Ottopartikelfilter (OPF) + Zahnriemen', ru: 'Рядный 3-цил. алюминий · Сажевый фильтр OPF + ремень' } }], note: { en: 'Late-run 2018–2020 badge-updated 1.0 TFSI with ultra-clean Euro 6d-TEMP emissions and proven EA211 belt reliability.', de: 'Späte 2018–2020er Ausbaustufe des 1.0 TFSI mit sauberer Euro-6d-TEMP-Norm und bewährtem EA211-Zahnriemen.', ru: 'Поздняя версия 1.0 TFSI (2018–2020) со строгим Euro 6d-TEMP и проверенной надёжностью ременного EA211.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Modern MQB 30 TFSI— solves the 8P timing-chain/oil issues with crisp efficiency.',
                strengths: [
                  'Much higher reliability than 2007–2011 8P TFSI engines.',
                  'Refined, quiet and frugal in everyday driving.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Plastic water-pump / thermostat housing seepage.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Inspect underbonnet for pink coolant crust around thermostat/pump.',
                  'Check full service history (15,000 km oil changes best).',
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
                    km: '180,000–210,000 km / 6–8 yrs',
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
                headline: 'Moderner MQB 30 TFSI— löst die alten 8P-Schwächen mit hoher Effizienz.',
                strengths: [
                  'Deutlich zuverlässiger als die alten 8P-TFSI.',
                  'Leise und sparsam im Alltag.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichtigkeiten am Kunststoff-Thermostatgehäuse.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Kühlmittelreste am Thermostat-/Pumpengehäuse suchen.',
                  'Regelmäßige Ölwechsel prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
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
                    km: '180.000–210.000 km / 6–8 J.',
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
                headline: 'Современный 30 TFSI на MQB— избавлен от детских болезней A3 8P.',
                strengths: [
                  'Заметно надёжнее старых TFSI на поколении 8P.',
                  'Тихий, плавный и экономичный.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекания пластикового корпуса термостата/помпы.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Осмотреть корпус помпы на розовый налёт антифриза.',
                  'Убедиться в регулярной замене масла.',
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
                    km: '180 000–210 000 km / 6–8 лет',
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
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 6,
            badges: {
              en: ['0–100 km/h: 9.9 s • 206 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 9.9 s • 206 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 9.9 с • 206 км/ч', 'Бодрый отклик турбины']
            }
          },
          midRangeTorquePassing: {
            score: 7.0,
            badges: {
              en: ['200 Nm Turbo Torque', 'Clean Mid-Range Passing'],
              de: ['200 Nm Drehmoment', 'Sauberer Durchzug'],
              ru: ['200 Н·м крутящего момента', 'Уверенные обгоны']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.7 L/100km', 'Low Running Costs'],
              de: ['5.7 L/100km', 'Günstig im Alltag'],
              ru: ['5.7 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.7,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '30-g-tron',
        engineRef: 'vag-1.5-tgi-130',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€14,400',
            specOverrides: { sprint0100: '9.4 s', topSpeed: '211 km/h', realWorldFuel: '3.6 kg CNG / 5.4 L' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 9,
                badges: {
                  en: ['3.6 kg CNG / 5.4 L (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['3,6 kg CNG / 5,4 L (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['3,6 kg CNG / 5,4 L (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        buyerFitOverrides: {
          ideal: ['a38vGtronEconomy', 'a38vMqbSolved', 'a38vInteriorClass', 'globalPetrolCityZones'],
          skip: ['a38vSpecialBootShrink', 'a38vWaterPumpWatch', 'a38vDryDsgTraffic', 'a38vPremiumPrice']
        },
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 131,
        drivetrain: 'FWD',
        shortTitle: 'A3 30 g-tron (8V)',
        fullName: '2016 Audi A3 30 g-tron (8V)',
        engineBadge: '30 g-tron • 131 HP',
        engineSubLabel: {
          en: '30 g-tron CNG + Petrol (03/2019–02/2020) • 6-MT / 7-DSG (Dry) • 200 Nm • FWD',
          de: '30 g-tron (03/2019–02/2020) • 6-MT / 7-DSG (Trocken) • 200 Nm • FWD',
          ru: '30 g-tron (03/2019–02/2020) • 6-MT / 7-DSG (сухая) • 200 Н·м • FWD'
        },
        rarityLabel: {
          en: 'CNG ECO',
          de: 'ERDGAS ECO',
          ru: 'ГАЗ + БЕНЗИН'
        },
        originalMsrp: {
          en: '€28,900 New',
          de: '28,900 € Neu',
          ru: '€28,900 новый'
        },
        estUsedPrice: '€13,200',
        perkLabel: {
          en: '✦ CNG + Petrol Dual-Fuel • 200 Nm • 5.1 L/100km',
          de: '✦ Erdgas + Benzin • 200 Nm • 5.1 L/100km',
          ru: '✦ Метан + бензин • 200 Н·м • 5.1 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 200 Nm turbo torque & 5.1 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 200 Nm & ca. 5.1 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 200 Н·м и расход ~5.1 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '1.5L I4 30 g-tron (CNG)', de: '1.5L Reihenvierzylinder 30 g-tron', ru: '1.5L R4 30 g-tron (CNG)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '9.4 s',
          topSpeed: '211 km/h',
          realWorldFuel: '3.5 kg CNG / 5.2 L',
          tankRange: '17.3 kg + 9 L (~490 km CNG)',
          euroNorm: 'Euro 6d-TEMP (CNG)',
          taxInsurance: '@tierVeryLow',
          serviceWear: '@tierMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.4,
            badges: {
              en: ['0–100 km/h: 9.4 s • 211 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 9.4 s • 211 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 9.4 с • 211 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['3.5 kg CNG / 5.2 L/100km', 'Low Running Costs'],
              de: ['3,5 kg Erdgas / 5,2 L/100km', 'Günstig im Alltag'],
              ru: ['3,5 кг метана / 5,2 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 4 yrs (Mandatory)', de: 'Alle 4 Jahre (Pflicht)', ru: 'Каждые 4 года (Обязательно)' }, action: { en: 'Mandatory CNG composite tank visual/safety inspection + spark plugs every 60k', de: 'Vorgeschriebene CNG-Gastank-Prüfung (GAP) + Zündkerzen alle 60.000 km', ru: 'Обязательная поверка газовых баллонов CNG + свечи каждые 60 000 км' }, cost: '€220–360' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit & inspect CNG injector rails', de: 'EA211-Zahnriemensatz wechseln & CNG-Einblasventile prüfen', ru: 'Замена ремня ГРМ EA211 и проверка газовых форсунок' }, cost: '€550–820' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'CNG high-pressure regulator / solenoid valves & dry 7-DSG (if automatic)', de: 'CNG-Hochdruckregler / Tankventile & trockenes 7-DSG (falls Automatik)', ru: 'Газовый редуктор высокого давления / клапаны и сухой 7-DSG (если АКПП)' }, cost: '€650–1,600', risk: { en: 'Car refuses CNG mode and defaults to small petrol reserve tank', de: 'Kein Erdgasbetrieb mehr möglich — nur noch kleiner Benzin-Reservetank', ru: 'Отказ работы на газе — остаётся только маленький бензиновый бак' }, damage: '€1,400–2,400' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '35-tfsi',
        engineRef: 'vag-1.5-tsi-150-cod',
        defaultGearboxId: 'mq250-6mt-sc',
        gearboxes: [
          { id: 'mq250-6mt-sc', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€16,900',
            specOverrides: { sprint0100: '8.2 s', topSpeed: '220 km/h', realWorldFuel: '6.1 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.7,
                badges: {
                  en: ['6.1 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['6,1 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['6,1 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tfsi',
        dossierGroup: 'petrol-dry-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'A3 35 TFSI (8V)',
        fullName: '2016 Audi A3 35 TFSI (8V)',
        engineBadge: '35 TFSI • 150 HP',
        engineSubLabel: {
          en: '35 TFSI Belt + COD (09/2018–02/2020) • 6-MT / 7-DSG (Dry) • 250 Nm • FWD',
          de: '35 TFSI (09/2018–02/2020) • 6-MT / 7-DSG (Trocken) • 250 Nm • FWD',
          ru: '35 TFSI (09/2018–02/2020) • 6-MT / 7-DSG (сухая) • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'WLTP PETROL',
          de: 'WLTP-BENZINER',
          ru: 'WLTP БЕНЗИН'
        },
        originalMsrp: {
          en: '€29,400 New',
          de: '29,400 € Neu',
          ru: '€29,400 новый'
        },
        estUsedPrice: '€15,600',
        perkLabel: {
          en: '✦ Updated Belt Engine (Fixes 8P Chain) • 250 Nm • 5.9 L/100km',
          de: '✦ Zahnriemen-Motor (ohne 8P-Kettenproblem) • 250 Nm • 5.9 L/100km',
          ru: '✦ Ремень ГРМ (без проблем цепи 8P) • 250 Н·м • 5.9 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Belt-driven EA211 solves 8P timing-chain issues',
            'Smooth 250 Nm turbo torque & 5.9 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Zahnriemen-EA211 löst 8P-Kettenprobleme',
            'Ruhige 250 Nm & ca. 5.9 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Ременной EA211 избавлен от проблем цепи 8P',
            'Ровная тяга 250 Н·м и расход ~5.9 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            '7-speed dry DSG needs smooth-shift check',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            '7-Gang-Trocken-DSG auf Ruckeln prüfen',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Проверить сухую 7-DSG в пробках',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '1.5L I4 35 TFSI (WLTP Belt)', de: '1.5L Reihenvierzylinder 35 TFSI', ru: '1.5L R4 35 TFSI (WLTP Ремень)' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,500 kg',
          sprint0100: '8.2 s',
          topSpeed: '220 km/h',
          realWorldFuel: '5.9 L/100km',
          tankRange: '50 L (~845 km)',
          euroNorm: 'Euro 6d-TEMP (OPF)',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 7.6,
            badges: {
              en: ['6-MT Solid • 7-DSG Dry-Clutch Care', 'Check Uphill Creep Smoothness'],
              de: ['6-Gang solide • 7-DSG prüfen', 'Anfahren am Berg testen'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.2 s • 220 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 8.2 s • 220 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 8.2 с • 220 км/ч', 'Бодрый отклик турбины']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['5.9 L/100km', 'Low Running Costs'],
              de: ['5.9 L/100km', 'Günstig im Alltag'],
              ru: ['5.9 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Replace spark plugs, inspect ignition coils & refresh 6-MT gearbox oil', de: 'Zündkerzen wechseln, Zündspulen & 6-Gang-Getriebeöl prüfen', ru: 'Замена свечей, проверка катушек и масла в 6-МКПП' }, cost: '€170–260' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 long-life timing belt & tensioner rollers', de: 'EA211 Longlife-Zahnriemen & Spannrollen präventiv erneuern', ru: 'Профилактическая замена долговечного ремня ГРМ EA211 и роликов' }, cost: '€520–780' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'Dry 7-DSG (DQ200) clutch pack / mechatronic (if automatic) & water-pump/thermostat module', de: 'Trockenes 7-DSG (DQ200) Kupplung/Mechatronik (falls AT) & Wasserpumpen-Thermostatmodul', ru: 'Сцепление/мехатроник сухого 7-DSG (DQ200, если АКПП) и модуль помпы/термостата' }, cost: '€480–1,800', risk: { en: 'Shuddering in 2nd gear (DQ200) or slow coolant weep from thermostat housing', de: 'Ruckeln im 2. Gang (DQ200) oder schleichender Kühlwasserverlust am Modul', ru: 'Рывки на 2-й передаче (DQ200) или течь антифриза из модуля термостата' }, damage: '€1,600–2,800' },
                { when: { en: '110,000–170,000 km', de: '110.000–170.000 km', ru: '110 000–170 000 км' }, action: { en: 'Turbo wastegate actuator rod sticking (EPC light / reduced boost)', de: 'Turbo-Wastegate-Gestänge fest (EPC-Lampe / reduzierter Ladedruck)', ru: 'Подклинивание тяги актуатора турбины (ошибка EPC / потеря наддува)' }, cost: '€220–580', risk: { en: 'Limp mode under acceleration; seized actuator can require turbo replacement', de: 'Notlauf beim Beschleunigen; festsitzende Welle erfordert oft neuen Lader', ru: 'Аварийный режим при разгоне; закисший шток может потребовать замены турбины' }, damage: '€1,200–1,900' }
              ]
            },
            badges: {
              en: ['180k–210k Belt • Affordable Parts', 'DSG Service if Fitted'],
              de: ['180–210 Tkm Riemen • Faire Teile', 'DSG-Wartung beachten'],
              ru: ['Ремень 180–210 тыс. • Доступное ТО', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '40-tfsi',
        defaultGearboxId: 'dq381-7-wet',
        gearboxes: [{ id: 'dq381-7-wet', isDefault: true }],
        buyerFitGroup: 'big-tfsi',
        dossierGroup: 'petrol-wet-dsg',
        isDefault: false,
        fuelType: 'petrol',
        hp: 190,
        drivetrain: 'FWD',
        shortTitle: 'A3 40 TFSI (8V)',
        fullName: '2016 Audi A3 40 TFSI (8V)',
        engineBadge: '40 TFSI • 190 HP',
        engineSubLabel: {
          en: '40 TFSI Chain Petrol (01/2019–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 320 Nm • FWD',
          de: '40 TFSI (01/2019–02/2020) • 6-MT / Nass 6-DSG (or 7-DSG) • 320 Nm • FWD',
          ru: '40 TFSI (01/2019–02/2020) • 6-MT / мокрая 6-DSG (or 7-DSG) • 320 Н·м • FWD'
        },
        rarityLabel: {
          en: 'WLTP PETROL',
          de: 'WLTP-BENZINER',
          ru: 'WLTP БЕНЗИН'
        },
        originalMsrp: {
          en: '€34,200 New',
          de: '34,200 € Neu',
          ru: '€34,200 новый'
        },
        estUsedPrice: '€17,800',
        perkLabel: {
          en: '✦ Gen3 Chain Engine • 320 Nm • 7.4 L/100km',
          de: '✦ Gen3-Kettenmotor • 320 Nm • 7.4 L/100km',
          ru: '✦ Цепной Gen3 • 320 Н·м • 7.4 л/100 км'
        },
        remarkablePositives: {
          en: [
            'Updated Gen3 chain fixes 8P oil consumption',
            'Smooth 320 Nm turbo torque & 7.4 L/100km economy',
            'Class-leading 8V interior & refinement'
          ],
          de: [
            'Gen3-Motor löst 8P-Ölverbrauch',
            'Ruhige 320 Nm & ca. 7.4 L/100km Verbrauch',
            'Top-Innenraum & hohe Wertstabilität'
          ],
          ru: [
            'Gen3 решил проблему масложора 8P',
            'Ровная тяга 320 Н·м и расход ~7.4 л/100 км',
            'Эталонный салон A3 8V'
          ]
        },
        notableNegatives: {
          en: [
            'Higher fuel & insurance costs',
            'Plastic water-pump / thermostat housing leaks over time',
            'Tighter rear space than Golf'
          ],
          de: [
            'Höherer Verbrauch & Versicherung',
            'Kunststoff-Wasserpumpe/-Thermostat im Alter undicht',
            'Fond enger als im Golf'
          ],
          ru: [
            'Выше расход и страховка',
            'Пластиковый корпус помпы/термостата со временем течёт',
            'Сзади теснее Golf'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 40 TFSI (190 HP)', de: '2.0L Reihenvierzylinder 40 TFSI', ru: '2.0L R4 40 TFSI (190 л.с.)' },
          forcedInduction: '@turbo', injection: '@dualInj', timingDrive: '@chain',
          gearbox: '@manual6', clutchDmf: '@dsg7Wet', towingBraked: '1,600 kg',
          sprint0100: '6.8 s', topSpeed: '242 km/h', peakTorque: '320 Nm @ 1,500 rpm',
          passingPunch: { en: 'Swift 320 Nm + Wet 7-DSG', de: 'Starke 320 Nm + Nasses 7-DSG', ru: 'Мощные 320 Н·м + мокрый 7-DSG' },
          realWorldFuel: '7.4 L/100km', tankRange: '50 L (~675 km)', euroNorm: 'Euro 6d-TEMP (OPF)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.8,
            badges: {
              en: ['Gen3 Fixes 8P Oil Burn', 'Watch Plastic Water Pump Housing'],
              de: ['Gen3 ohne 8P-Ölproblem', 'Wasserpumpen-Gehäuse prüfen'],
              ru: ['Gen3 без масложора 8P', 'Проверить корпус помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'DKZA (EA888 Gen3B) · 1,984 cc' }, { k: 'architecture', v: { en: 'Inline-4 B-Cycle Turbo · Wet 7-DSG (DQ381) + Opt. Quattro', de: 'Reihenvierzylinder B-Zyklus · Nasses 7-DSG (DQ381) + Opt. Quattro', ru: 'Рядный 4-цил. цикл B · Мокрый 7-DSG (DQ381) + опц. Quattro' } }], note: { en: 'Final-edition 190 HP petrol flagship (below S3): tough wet 7-DSG, 6.8 s pace, and clean Euro 6d-TEMP compliance.', de: 'Ausgereiftes 190-PS-Benzin-Topmodell (unterhalb S3) mit robustem nassem 7-DSG und sauberem Euro 6d-TEMP.', ru: 'Зрелый 190-сильный флагман (до S3) с крепким мокрым 7-DSG, разгоном 6,8 с и чистым Euro 6d-TEMP.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Modern MQB 40 TFSI— solves the 8P timing-chain/oil issues with crisp efficiency.',
                strengths: [
                  'Much higher reliability than 2007–2011 8P TFSI engines.',
                  'Refined, quiet and frugal in everyday driving.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Plastic water-pump / thermostat housing seepage.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Inspect underbonnet for pink coolant crust around thermostat/pump.',
                  'Check full service history (15,000 km oil changes best).',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
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
                    km: '150,000–200,000 km / 6–9 yrs',
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
                headline: 'Moderner MQB 40 TFSI— löst die alten 8P-Schwächen mit hoher Effizienz.',
                strengths: [
                  'Deutlich zuverlässiger als die alten 8P-TFSI.',
                  'Leise und sparsam im Alltag.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichtigkeiten am Kunststoff-Thermostatgehäuse.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Kühlmittelreste am Thermostat-/Pumpengehäuse suchen.',
                  'Regelmäßige Ölwechsel prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
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
                    km: '150.000–200.000 km / 6–9 J.',
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
                headline: 'Современный 40 TFSI на MQB— избавлен от детских болезней A3 8P.',
                strengths: [
                  'Заметно надёжнее старых TFSI на поколении 8P.',
                  'Тихий, плавный и экономичный.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекания пластикового корпуса термостата/помпы.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Осмотреть корпус помпы на розовый налёт антифриза.',
                  'Убедиться в регулярной замене масла.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
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
                    km: '150 000–200 000 km / 6–9 лет',
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
            score: 8.3,
            badges: {
              en: ['Wet DSG & 6-MT Both Tough', 'Check Uphill Creep Smoothness'],
              de: ['Nasses DSG & 6-Gang robust', 'Anfahren am Berg testen'],
              ru: ['Мокрая DSG и 6-МКПП крепки', 'Проверить старт в горку']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.6,
            badges: {
              en: ['0–100 km/h: 6.8 s • 242 km/h', 'Lively Turbo Response'],
              de: ['0–100 km/h: 6.8 s • 242 km/h', 'Spritziger Turbo'],
              ru: ['0–100 км/ч: 6.8 с • 242 км/ч', 'Бодрый отклик турбины']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['320 Nm Turbo Torque', 'Clean Mid-Range Passing'],
              de: ['320 Nm Drehmoment', 'Sauberer Durchzug'],
              ru: ['320 Н·м крутящего момента', 'Уверенные обгоны']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 7.1,
            badges: {
              en: ['7.4 L/100km', 'Low Running Costs'],
              de: ['7.4 L/100km', 'Günstig im Alltag'],
              ru: ['7.4 л/100 км', 'Низкие затраты на топливо']
            }
          },
          taxInsuranceNorm: {
            score: 7.5,
            badges: {
              en: ['Euro 6 Low Tax Bracket', 'Good Insurance Class'],
              de: ['Günstige Euro-6-Steuer', 'Faire Typklasse'],
              ru: ['Низкий налог Евро-6', 'Выгодная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.2,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG (DQ250/DQ381) oil + Haldex Quattro oil (if AWD) & spark plugs', de: 'Nasses DSG-Öl (DQ250/DQ381) + Haldex-Öl (falls Quattro) & Zündkerzen wechseln', ru: 'Замена масла в мокром DSG + масло муфты Haldex (если Quattro) и свечи' }, cost: '€320–490' },
                { when: { en: 'Every 120,000 km', de: 'Alle 120.000 km', ru: 'Каждые 120 000 км' }, action: { en: 'Inspect PCV oil separator & camshaft adjuster magnet valves', de: 'Ölabscheider (KGE) & Nockenwellen-Steuerventile prüfen', ru: 'Проверка маслоотделителя ВКГ и клапанов фазовращателей' }, cost: '€160–260' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'EA888 Gen3 plastic thermostat / water-pump housing (classic coolant leak)', de: 'EA888 Gen3 Kunststoff-Thermostatgehäuse / Wasserpumpe (typische Leckage)', ru: 'Пластиковый модуль термостата и помпы EA888 Gen3 (типичная течь ОЖ)' }, cost: '€650–1,050', risk: { en: 'Slow or sudden coolant leak leading to overheating if ignored', de: 'Schleichender bis starker Kühlwasserverlust bis zur Überhitzung', ru: 'Утечка антифриза вплоть до перегрева двигателя' }, damage: '€1,800–3,200' },
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'Haldex V AWD pump strainer clean (Quattro) & wastegate actuator check', de: 'Haldex-5-Sieb reinigen (Quattro) & Turbo-Wastegate prüfen', ru: 'Чистка сетки насоса Haldex 5 (Quattro) и проверка актуатора турбины' }, cost: '€240–550', risk: { en: 'Clogged Haldex screen burns out AWD pump silently', de: 'Verstopftes Haldex-Sieb lässt die Allradpumpe unbemerkt durchbrennen', ru: 'Забитая сетка Haldex незаметно сжигает насос полного привода' }, damage: '€900–1,400' }
              ]
            },
            badges: {
              en: ['Updated Chain • Water Pump Watch', 'DSG Service if Fitted'],
              de: ['Robuste Kette • Wasserpumpe prüfen', 'DSG-Wartung beachten'],
              ru: ['Цепь крепка • Проверить помпу', 'Сервис DSG']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '40-e-tron',
        defaultGearboxId: 'dq400e-6-wet',
        gearboxes: [{ id: 'dq400e-6-wet', isDefault: true }],
        buyerFitGroup: 'phev',
        dossierGroup: 'hybrid-wet-dsg',
        isDefault: false,
        fuelType: 'hybrid',
        hp: 204,
        drivetrain: 'FWD',
        shortTitle: 'A3 40 e-tron (8V)',
        fullName: '2016 Audi A3 40 e-tron (8V)',
        engineBadge: '40 e-tron • 204 HP PHEV',
        engineSubLabel: {
          en: '40 e-tron 1.4 TFSI + Electric (10/2019–02/2020) • 6-DSG • 350 Nm • FWD',
          de: '40 e-tron 1.4 TFSI + E-Motor (10/2019–02/2020) • 6-DSG • 350 Nm • FWD',
          ru: '40 e-tron 1.4 TFSI + электромотор (10/2019–02/2020) • 6-DSG • 350 Н·м • FWD'
        },
        rarityLabel: {
          en: 'PLUG-IN HYBRID',
          de: 'PLUG-IN-HYBRID',
          ru: 'ГИБРИД PHEV'
        },
        originalMsrp: {
          en: '€39,900 New',
          de: '39,900 € Neu',
          ru: '€39,900 новый'
        },
        estUsedPrice: '€17,400',
        perkLabel: {
          en: '✦ 204 HP / 350 Nm • ~35 km Real EV Range • Tough 6-DSG',
          de: '✦ 204 PS / 350 Nm • ~35 km E-Reichweite • Robustes 6-DSG',
          ru: '✦ 204 л.с. / 350 Н·м • ~35 км на токе • Мокрая 6-DSG'
        },
        remarkablePositives: {
          en: [
            'Silent 30–38 km electric city commute',
            'Combined 204 hp / 350 Nm boost when needed',
            'Low road tax & tough wet 6-DSG'
          ],
          de: [
            '30–38 km rein elektrisch pendeln',
            '204 PS / 350 Nm Systemleistung',
            'Niedrige Steuer & robustes 6-DSG'
          ],
          ru: [
            '30–38 км по городу на чистом токе',
            'Суммарные 204 л.с. и 350 Н·м',
            'Низкий налог и крепкая 6-DSG'
          ]
        },
        notableNegatives: {
          en: [
            'Boot drops from 380 L to 280 L',
            'Extra weight (~1,540 kg) dulls agility',
            'High-voltage battery/coolant repairs costly out of warranty'
          ],
          de: [
            'Kofferraum schrumpft auf 280 L',
            'Höheres Gewicht (~1.540 kg)',
            'HV-Batterie/Kühlventile außerhalb Garantie teuer'
          ],
          ru: [
            'Багажник уменьшен до 280 л',
            'Выше масса (~1540 кг)',
            'Ремонт высоковольтной части дорог'
          ]
        },
        specOverrides: {
          engineName: { en: '1.4L PHEV 40 e-tron (204 HP)', de: '1.4L Plug-in-Hybrid 40 e-tron', ru: '1.4L PHEV 40 e-tron (204 л.с.)' },
          forcedInduction: '@hybridEMotor', injection: '@direct', timingDrive: '@belt',
          gearbox: '@dsg6Wet', clutchDmf: '@dsg6Wet', towingBraked: '1,400 kg',
          sprint0100: '7.6 s', topSpeed: '222 km/h', peakTorque: '350 Nm Combined',
          passingPunch: { en: 'Silent EV + 350 Nm Boost', de: 'Lautlos elektrisch + 350 Nm', ru: 'Тихий EV + 350 Н·м рывок' },
          realWorldFuel: '2.5–4.5 L/100km (Chg)', tankRange: '40 L + 8.8 kWh (~35–42 km EV)', euroNorm: 'Euro 6d-TEMP (PHEV)', taxInsurance: '@tierVeryLow', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 7.6,
            badges: {
              en: ['Solid 1.4 EA211 + Electric', 'Watch HV Coolant Valve & Seals'],
              de: ['Solider 1.4 EA211 + E-Antrieb', 'HV-Kühlventil & Dichtungen prüfen'],
              ru: ['Надёжный 1.4 EA211 + электромотор', 'Проверить клапаны охлаждения HV']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'DGEA + 75 kW E-Motor · 1,395 cc' }, { k: 'architecture', v: { en: '1.4 TFSI + Electric Motor · Wet 6-DSG (DQ400E) Late PHEV', de: '1.4 TFSI + E-Motor · Nasses 6-DSG (DQ400E) spätes Facelift', ru: '1.4 TFSI + электромотор · Мокрый 6-DSG (DQ400E) поздний PHEV' } }], note: { en: 'Final-run plug-in hybrid A3 8V with strong 350 Nm punch and low urban emissions when charged daily at home.', de: 'Späte Facelift-Ausgabe des Plug-in-Hybrids mit 350 Nm Systemdrehmoment — ideal für tägliche Heim-Lader.', ru: 'Поздняя рестайлинговая версия PHEV с 350 Н·м — отлична при регулярной домашней зарядке.' } },
              forcedInduction: '@hybridEMotor', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Clever 204 hp plug-in hybrid— shines if you charge daily, check HV battery health.',
                strengths: [
                  'Silent EV commuting + 350 Nm combined highway punch.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  '8.8 kWh HV battery degradation on 2014–2016 cars.',
                  'HV coolant valve / charging flap actuator faults.'
                ],
                beforeYouBuy: [
                  'Test full EV range from 100% charge (should show ~35–42 km).',
                  'Verify AC charging works without fault lights.',
                  'Inspect rear brake discs for rust from regen braking.'
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
                    km: '160,000–180,000 km / 6–8 yrs',
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
                    km: '160,000–210,000 km / 10+ yrs',
                    action: 'HV battery capacity test, coolant 3-way valve & charging port seal check',
                    cost: '€500–€1,400',
                    ifIgnored: 'Moisture ingress or stuck valve disables EV drive',
                    damageCost: '€2,800–€6,000'
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
                headline: 'Starker 204-PS-Plug-in— ideal für Heim-Lader, HV-Akku-Zustand prüfen.',
                strengths: [
                  'Leises E-Pendeln + 350 Nm Systemleistung.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: ['Akku-Alterung bei frühen 2014–2016 Modellen.', 'Kühlventil & Ladeklappen-Stellmotor.'],
                beforeYouBuy: [
                  'Volle E-Reichweite testen (ca. 35–42 km).',
                  'Ladevorgang ohne Fehlermeldung prüfen.',
                  'Bremsscheiben auf Rekuperations-Rost prüfen.'
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
                    km: '160.000–180.000 km / 6–8 J.',
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
                    km: '160.000–210.000 km / 10+ J.',
                    action: 'HV-Akku-Diagnose, 3-Wege-Kühlventil & Ladebuchsen-Dichtung prüfen',
                    cost: '500–1.400 €',
                    ifIgnored: 'Feuchtigkeit oder defektes Ventil legt E-Antrieb lahm',
                    damageCost: '2.800–6.000 €'
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
                headline: 'Быстрый гибрид 204 л.с.— идеален при ежедневной зарядке, проверяйте батарею.',
                strengths: [
                  'Тихие поездки на токе + 350 Н·м на трассе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Деградация батареи 8,8 кВт·ч на ранних авто.',
                  'Клапан охлаждения HV и привод лючка зарядки.'
                ],
                beforeYouBuy: [
                  'Проверить запас хода на 100% заряде (~35–42 км).',
                  'Проверить зарядку от сети без ошибок.',
                  'Осмотреть диски на коррозию от рекуперации.'
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
                    km: '160 000–180 000 km / 6–8 лет',
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
                    km: '160 000–210 000 км / 10+ лет',
                    action: 'Диагностика тяговой батареи, клапана контура и уплотнителей зарядки',
                    cost: '€500–€1 400',
                    ifIgnored: 'Попадание влаги или клин клапана отключает гибрид',
                    damageCost: '€2 800–€6 000'
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
            score: 8.0,
            badges: {
              en: ['Wet 6-DSG Hybrid Unit Tough', 'Service DSG Oil Every 60k km'],
              de: ['Nasses 6-DSG Hybrid-Getriebe robust', 'DSG-Öl alle 60 Tkm wechseln'],
              ru: ['Мокрая 6-DSG надёжна', 'Масло DSG менять раз в 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.9,
            badges: {
              en: ['0–100 km/h: 7.6 s • 222 km/h', 'Instant Electric Launch'],
              de: ['0–100 km/h: 7,6 s • 222 km/h', 'Spontaner E-Antritt'],
              ru: ['0–100 км/ч: 7,6 с • 222 км/ч', 'Мгновенный старт на электротяге']
            }
          },
          midRangeTorquePassing: {
            score: 8.5,
            badges: {
              en: ['350 Nm Combined Torque', 'Effortless Passing Punch'],
              de: ['350 Nm Systemdrehmoment', 'Kräftiger Zwischenspurt'],
              ru: ['350 Н·м суммарной тяги', 'Мощный подхват']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 9.1,
            badges: {
              en: ['2.0–4.5 L/100km (Charged)', '6.5 L/100km Battery Empty'],
              de: ['2,0–4,5 L/100km (geladen)', '6,5 L/100km bei leerem Akku'],
              ru: ['2,0–4,5 л/100 км (с зарядкой)', '6,5 л/100 км без зарядки']
            }
          },
          taxInsuranceNorm: {
            score: 8.5,
            badges: {
              en: ['Low PHEV Tax Incentives', 'Moderate Insurance'],
              de: ['Günstige Hybrid-Steuer', 'Normale Versicherung'],
              ru: ['Льготный налог для гибрида', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet 6-DSG hybrid oil (DQ400E) & replace spark plugs', de: 'Nasses 6-DSG-Hybridöl (DQ400E) wechseln & Zündkerzen erneuern', ru: 'Замена масла в гибридном мокром 6-DSG (DQ400E) и свечей' }, cost: '€320–480' },
                { when: { en: 'Every 180,000 km / 10 yrs', de: 'Alle 180.000 km / 10 J.', ru: 'Каждые 180 000 км / 10 лет' }, action: { en: 'Replace 1.4 TFSI EA211 timing belt & check HV battery cooling circuit', de: '1.4-TFSI-Zahnriemen wechseln & HV-Akku-Kühlkreislauf prüfen', ru: 'Замена ремня ГРМ 1.4 TFSI и проверка контура охлаждения ВВБ' }, cost: '€580–850' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km / 10+ yrs', de: '120.000–190.000 km / 10+ J.', ru: '120–190 тыс. км / 10+ лет' }, action: { en: 'HV battery capacity health / moisture seal & DQ400E K0 disconnect clutch', de: 'HV-Akku-Zustand / Abdichtung & DQ400E Trennkupplung / Mechatronik', ru: 'Состояние/герметичность ВВБ и сцепление/мехатроник DQ400E' }, cost: '€1,200–2,800', risk: { en: 'Reduced EV range, hybrid isolation fault, or jerky engine-to-EV handoff', de: 'Geringe E-Reichweite, Isolationsfehler oder ruckeliger Übergang Verbrenner/E-Motor', ru: 'Падение запаса хода на токе, ошибка изоляции или рывки при переходе на ДВС' }, damage: '€3,500–6,500' }
              ]
            },
            badges: {
              en: ['60k DSG Service + Brake Corrosion', 'HV Parts Pricier'],
              de: ['60 Tkm DSG + Bremsen-Rost prüfen', 'HV-Teile teurer'],
              ru: ['ТО DSG 60 тыс. + ржавчина тормозов', 'Детали HV дороже']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '30-tdi',
        defaultGearboxId: 'mq250-6mt-dmf',
        gearboxes: [
          { id: 'mq250-6mt-dmf', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€15,000',
            specOverrides: { sprint0100: '10.6 s', topSpeed: '202 km/h', realWorldFuel: '4.9 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.4,
                badges: {
                  en: ['0–100 km/h: 10.6 s (DSG)', '202 km/h Top Speed'],
                  de: ['0–100 km/h: 10,6 s (DSG)', '202 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,6 s (DSG)', 'Макс. 202 km/h']
                }
              },
              efficiencyFuel: {
                score: 8.6,
                badges: {
                  en: ['4.9 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['4,9 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['4,9 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'small-tdi',
        dossierGroup: 'diesel-dry-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 116,
        drivetrain: 'FWD',
        shortTitle: 'A3 30 TDI (8V)',
        fullName: '2016 Audi A3 30 TDI (8V)',
        engineBadge: '30 TDI • 116 HP',
        engineSubLabel: {
          en: '30 TDI Common-Rail (08/2018–02/2020) • 6-MT / 7-DSG • 250 Nm • FWD',
          de: '30 TDI Common-Rail (08/2018–02/2020) • 6-MT / 7-DSG • 250 Nm • FWD',
          ru: '30 TDI Common-Rail (08/2018–02/2020) • 6-MT / 7-DSG • 250 Н·м • FWD'
        },
        rarityLabel: {
          en: 'WLTP DIESEL',
          de: 'WLTP-DIESEL',
          ru: 'WLTP ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€28,200 New',
          de: '28,200 € Neu',
          ru: '€28,200 новый'
        },
        estUsedPrice: '€13,800',
        perkLabel: {
          en: '✦ 250 Nm Common-Rail • 4.6 L/100km • 210k km Belt',
          de: '✦ 250 Nm Common-Rail • 4.6 L/100km • 210 Tkm Riemen',
          ru: '✦ 250 Н·м Common-Rail • 4.6 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '4.6 L/100km real-world highway economy',
            'Strong 250 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '4.6 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 250 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 4.6 л/100 км на трассе',
            'Уверенная тяга 250 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Torsion-beam rear on 1.6 TDI'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Verbundlenkerachse beim 1.6 TDI'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'У 1.6 TDI сзади балка'
          ]
        },
        specOverrides: {
          engineName: { en: '1.6L I4 30 TDI (Euro 6d)', de: '1.6L Reihenvierzylinder 30 TDI', ru: '1.6L R4 30 TDI (Euro 6d)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt',
          gearbox: '@manual6', clutchDmf: '@clutchDmf', towingBraked: '1,500 kg',
          sprint0100: '10.4 s', topSpeed: '202 km/h', peakTorque: '250 Nm @ 1,500 rpm',
          passingPunch: { en: 'Clean 1,085 km Euro-6d TDI', de: 'Sauberer 1.085-km-Pendler', ru: 'Чистый и экономичный TDI' },
          realWorldFuel: '4.6 L/100km', tankRange: '50 L (~1,085 km)', euroNorm: 'Euro 6d-TEMP (SCR)', taxInsurance: '@tierLow', serviceWear: '@tierLowMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.8,
            badges: {
              en: ['Proven EA288 Common-Rail', '210k Belt • Watch Water Pump'],
              de: ['Bewährter EA288 Common-Rail', '210 Tkm Riemen • Wasserpumpe prüfen'],
              ru: ['Надёжный EA288 Common-Rail', 'Ремень 210 тыс. • Контроль помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'DGTE (EA288 SCR) · 1,598 cc' }, { k: 'architecture', v: { en: 'Inline-4 Common-Rail · AdBlue SCR + 210k Timing Belt', de: 'Reihenvierzylinder Common-Rail · AdBlue-SCR + 210-Tkm-Riemen', ru: 'Рядный 4-цил. Common-Rail · AdBlue SCR + ремень 210 тыс.' } }], note: { en: 'Future-proof Euro 6d-TEMP AdBlue diesel with ~1,085 km highway range and very low tax.', de: 'Zukunftssicherer Euro-6d-TEMP-Diesel mit AdBlue, ~1.085 km Reichweite und günstiger Steuer.', ru: 'Чистый дизель Euro 6d-TEMP с AdBlue, запасом хода ~1 085 км и низким налогом.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Refined EA288 30 TDI— built for high-mileage highway cruising with minimal drama.',
                strengths: [
                  '210,000 km timing belt interval and strong 300k+ km block.',
                  'Real 4.5–5.3 L/100km highway fuel economy.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Switchable water-pump sleeve sticking / weeping.',
                  'DPF / AdBlue / EGR issues if driven only in city traffic.'
                ],
                beforeYouBuy: [
                  'Check coolant level and ask if water pump was replaced.',
                  'Verify highway use & DPF/AdBlue warning-free dash.',
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
                    km: '190,000–240,000 km / 10+ yrs',
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
                headline: 'Kultivierter EA288 30 TDI— gemacht für entspannte Langstrecken bei niedrigem Verbrauch.',
                strengths: [
                  '210.000 km Zahnriemenintervall und extrem haltbarer Block.',
                  'Nur 4,5–Sparsam (5,3 L/100km).',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichte/klemmende schaltbare Wasserpumpe.',
                  'DPF / AdBlue / AGR bei reiner Kurzstrecke.'
                ],
                beforeYouBuy: [
                  'Kühlmittelstand & Wasserpumpen-Tausch prüfen.',
                  'Langstrecken-Historie & AdBlue-System checken.',
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
                    km: '190.000–240.000 km / 10+ J.',
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
                headline: 'Тихий и ресурсный дизель EA288 30 TDI— создан для уверенных поездок по трассе.',
                strengths: [
                  'Ресурсный блок и ремень на 210 тыс. км.',
                  'Реальный расход 4,5–5,3 л/100 км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекание или клин регулируемой помпы.',
                  'Загрязнение DPF/EGR при езде только по городу.'
                ],
                beforeYouBuy: [
                  'Проверить уровень антифриза и замену помпы.',
                  'Уточнить историю трассовых пробегов и AdBlue.',
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
                    km: '190 000–240 000 km / 10+ лет',
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
              en: ['6-MT Tough • 7-DSG Dry Care', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang solide • 7-DSG prüfen', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП надёжна • 7-DSG проверять', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.6,
            badges: {
              en: ['0–100 km/h: 10.4 s • 202 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 10.4 s • 202 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 10.4 с • 202 км/ч', 'Уверенный разгон']
            }
          },
          midRangeTorquePassing: {
            score: 7.2,
            badges: {
              en: ['250 Nm Common-Rail Torque', 'Strong Highway Overtaking'],
              de: ['250 Nm Drehmoment', 'Souveräner Durchzug'],
              ru: ['250 Н·м крутящего момента', 'Лёгкие обгоны на трассе']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 9.0,
            badges: {
              en: ['Efficient (4.6 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (4.6 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (4.6 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 8.2,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '35-tdi',
        engineRef: 'vag-2.0-tdi-150',
        defaultGearboxId: 'mq350-6mt-dmf',
        gearboxes: [
          { id: 'mq350-6mt-dmf', isDefault: true },
          {
            id: 'dq381-7-wet',
            estUsedPrice: '€17,200',
            specOverrides: { sprint0100: '8.0 s', topSpeed: '218 km/h', realWorldFuel: '5.3 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 7.6,
                badges: {
                  en: ['0–100 km/h: 8.0 s (DSG)', '218 km/h Top Speed'],
                  de: ['0–100 km/h: 8,0 s (DSG)', '218 km/h Spitze'],
                  ru: ['0–100 км/ч: 8,0 s (DSG)', 'Макс. 218 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.9,
                badges: {
                  en: ['5.3 L/100km (DSG)', 'Dual-Clutch Shift Calibration'],
                  de: ['5,3 L/100km (DSG)', 'Doppelkupplungs-Abstimmung'],
                  ru: ['5,3 L/100km (DSG)', 'Калибровка робота DSG']
                }
              }
            }
          }
        ],        buyerFitGroup: 'big-tdi',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        drivetrain: 'FWD',
        shortTitle: 'A3 35 TDI (8V)',
        fullName: '2016 Audi A3 35 TDI (8V)',
        engineBadge: '35 TDI • 150 HP',
        engineSubLabel: {
          en: '35 TDI Common-Rail (11/2018–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 340 Nm • FWD/Quattro',
          de: '35 TDI Common-Rail (11/2018–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 340 Nm • FWD/Quattro',
          ru: '35 TDI Common-Rail (11/2018–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 340 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'WLTP DIESEL',
          de: 'WLTP-DIESEL',
          ru: 'WLTP ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€31,500 New',
          de: '31,500 € Neu',
          ru: '€31,500 новый'
        },
        estUsedPrice: '€15,900',
        perkLabel: {
          en: '✦ 340 Nm Common-Rail • 5.0 L/100km • 210k km Belt',
          de: '✦ 340 Nm Common-Rail • 5.0 L/100km • 210 Tkm Riemen',
          ru: '✦ 340 Н·м Common-Rail • 5.0 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '5.0 L/100km real-world highway economy',
            'Strong 340 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '5.0 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 340 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 5.0 л/100 км на трассе',
            'Уверенная тяга 340 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Higher diesel tax'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Höhere Diesel-Steuer'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'Выше дизельный налог'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 35 TDI (150 HP SCR)', de: '2.0L Reihenvierzylinder 35 TDI', ru: '2.0L R4 35 TDI (150 л.с. SCR)' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,600 kg',
          sprint0100: '8.1 s',
          topSpeed: '218 km/h',
          realWorldFuel: '5.0 L/100km',
          tankRange: '50 L (~1,000 km)',
          euroNorm: 'Euro 6d-TEMP (SCR)',
          taxInsurance: '@tierMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: {
            score: 8.4,
            badges: {
              en: ['6-MT & Wet DSG Very Tough', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang & nasses DSG sehr robust', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП и мокрая DSG крепки', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.5,
            badges: {
              en: ['0–100 km/h: 8.1 s • 218 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 8.1 s • 218 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 8.1 с • 218 км/ч', 'Уверенный разгон']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.6,
            badges: {
              en: ['Efficient (5.0 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (5.0 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (5.0 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 7.6,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      },
      {
        id: '40-tdi',
        defaultGearboxId: 'dq381-7-wet',
        gearboxes: [{ id: 'dq381-7-wet', isDefault: true }],
        buyerFitGroup: 'big-tdi',
        dossierGroup: 'diesel-wet-dsg',
        isDefault: false,
        fuelType: 'diesel',
        hp: 184,
        drivetrain: 'FWD',
        shortTitle: 'A3 40 TDI (8V)',
        fullName: '2016 Audi A3 40 TDI (8V)',
        engineBadge: '40 TDI • 184 HP',
        engineSubLabel: {
          en: '40 TDI Common-Rail (02/2019–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 380 Nm • FWD/Quattro',
          de: '40 TDI Common-Rail (02/2019–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 380 Nm • FWD/Quattro',
          ru: '40 TDI Common-Rail (02/2019–02/2020) • 6-MT / Wet 6-DSG (or 7-DSG) • 380 Н·м • FWD/Quattro'
        },
        rarityLabel: {
          en: 'WLTP DIESEL',
          de: 'WLTP-DIESEL',
          ru: 'WLTP ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€35,900 New',
          de: '35,900 € Neu',
          ru: '€35,900 новый'
        },
        estUsedPrice: '€17,600',
        perkLabel: {
          en: '✦ 380 Nm Common-Rail • 5.5 L/100km • 210k km Belt',
          de: '✦ 380 Nm Common-Rail • 5.5 L/100km • 210 Tkm Riemen',
          ru: '✦ 380 Н·м Common-Rail • 5.5 л/100 км • Ремень 210 тыс.'
        },
        remarkablePositives: {
          en: [
            '5.5 L/100km real-world highway economy',
            'Strong 380 Nm torque & quiet MQB isolation',
            '210,000 km timing belt interval'
          ],
          de: [
            '5.5 L/100km realer Langstrecken-Verbrauch',
            'Kräftige 380 Nm & ruhige Dämmung',
            '210.000 km Zahnriemen-Intervall'
          ],
          ru: [
            'Реальный расход 5.5 л/100 км на трассе',
            'Уверенная тяга 380 Н·м и отличная шумоизоляция',
            'Ремень ГРМ ходит 210 000 км'
          ]
        },
        notableNegatives: {
          en: [
            'EGR & DPF/AdBlue need regular highway runs',
            'Water pump can weep before 150,000 km',
            'Higher diesel tax'
          ],
          de: [
            'AGR & DPF/AdBlue brauchen Langstrecke',
            'Wasserpumpe teils vor 150.000 km undicht',
            'Höhere Diesel-Steuer'
          ],
          ru: [
            'EGR и DPF/AdBlue требуют трассовых пробегов',
            'Помпа может подтекать до 150 тыс. км',
            'Выше дизельный налог'
          ]
        },
        specOverrides: {
          engineName: { en: '2.0L I4 40 TDI (184 HP SCR)', de: '2.0L Reihenvierzylinder 40 TDI', ru: '2.0L R4 40 TDI (184 л.с. SCR)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@belt',
          gearbox: '@manual6', clutchDmf: '@clutchDmf', towingBraked: '1,800 kg',
          sprint0100: '6.9 s', topSpeed: '232 km/h', peakTorque: '380 Nm @ 1,750 rpm',
          passingPunch: { en: 'Blistering 380 Nm Quattro', de: 'Brachiale 380 Nm (Quattro)', ru: 'Мощнейшие 380 Н·м (Quattro)' },
          realWorldFuel: '5.5 L/100km', tankRange: '50 L (~910 km)', euroNorm: 'Euro 6d-TEMP (SCR)', taxInsurance: '@tierModHigh', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.4,
            badges: {
              en: ['Proven EA288 Common-Rail', '210k Belt • Watch Water Pump'],
              de: ['Bewährter EA288 Common-Rail', '210 Tkm Riemen • Wasserpumpe prüfen'],
              ru: ['Надёжный EA288 Common-Rail', 'Ремень 210 тыс. • Контроль помпы']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'DJGA (EA288 SCR 184) · 1,968 cc' }, { k: 'architecture', v: { en: 'Inline-4 High-Output Diesel · AdBlue + Wet 7-DSG + Quattro', de: 'Reihenvierzylinder Top-Diesel · AdBlue + Nasses 7-DSG + Quattro', ru: 'Рядный 4-цил. топ-дизель · AdBlue + мокрый 7-DSG + Quattro' } }], note: { en: 'Sub-7-second diesel rocket with standard Quattro & wet 7-DSG — fixes early CUNA oil-burn issues while keeping 5.5 L/100km economy.', de: 'Unter-7-Sekunden-Diesel-Express mit Quattro & nassem 7-DSG — behebt frühe CUNA-Ölverbrauchsprobleme bei 5,5 L Verbrauch.', ru: 'Дизельная ракета (6,9 с) с Quattro и мокрым 7-DSG — без проблем раннего CUNA и с расходом 5,5 л.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Refined EA288 40 TDI— built for high-mileage highway cruising with minimal drama.',
                strengths: [
                  '210,000 km timing belt interval and strong 300k+ km block.',
                  'Real 4.5–5.3 L/100km highway fuel economy.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Switchable water-pump sleeve sticking / weeping.',
                  'DPF / AdBlue / EGR issues if driven only in city traffic.'
                ],
                beforeYouBuy: [
                  'Check coolant level and ask if water pump was replaced.',
                  'Verify highway use & DPF/AdBlue warning-free dash.',
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
                    km: '190,000–240,000 km / 10+ yrs',
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
                headline: 'Kultivierter EA288 40 TDI— gemacht für entspannte Langstrecken bei niedrigem Verbrauch.',
                strengths: [
                  '210.000 km Zahnriemenintervall und extrem haltbarer Block.',
                  'Nur 4,5–Sparsam (5,3 L/100km).',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Undichte/klemmende schaltbare Wasserpumpe.',
                  'DPF / AdBlue / AGR bei reiner Kurzstrecke.'
                ],
                beforeYouBuy: [
                  'Kühlmittelstand & Wasserpumpen-Tausch prüfen.',
                  'Langstrecken-Historie & AdBlue-System checken.',
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
                    km: '190.000–240.000 km / 10+ J.',
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
                headline: 'Тихий и ресурсный дизель EA288 40 TDI— создан для уверенных поездок по трассе.',
                strengths: [
                  'Ресурсный блок и ремень на 210 тыс. км.',
                  'Реальный расход 4,5–5,3 л/100 км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Подтекание или клин регулируемой помпы.',
                  'Загрязнение DPF/EGR при езде только по городу.'
                ],
                beforeYouBuy: [
                  'Проверить уровень антифриза и замену помпы.',
                  'Уточнить историю трассовых пробегов и AdBlue.',
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
                    km: '190 000–240 000 km / 10+ лет',
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
            score: 8.4,
            badges: {
              en: ['6-MT & Wet DSG Very Tough', '60k km Wet-DSG Oil Service'],
              de: ['6-Gang & nasses DSG sehr robust', '60 Tkm DSG-Ölservice'],
              ru: ['6-МКПП и мокрая DSG крепки', 'Сервис мокрой DSG 60 тыс.']
            }
          },
          buildQualityRust: {
            score: 8.2,
            badges: {
              en: ['MQB Galvanized Body • Tight Panel Gaps', 'Low Corrosion Risk on 2016+ Cars'],
              de: ['Verzinkte MQB-Karosserie • Enge Spaltmaße', 'Kaum Rostprobleme ab Facelift 2016'],
              ru: ['Оцинкованный кузов MQB • Точная сборка', 'Низкий риск коррозии (особенно 2016+)']
            }
          },
          electronicsReliability: {
            score: 7.8,
            badges: {
              en: ['Solid MMI & Virtual Cockpit Hardware', 'Check Infotainment Pop-Up Screen Motor'],
              de: ['Solides MMI & Virtual Cockpit', 'Ausfahrmechanik des Displays prüfen'],
              ru: ['Надёжная мультимедиа MMI и приборка', 'Проверить привод выдвижного экрана']
            }
          },
          rideNoiseComfort: {
            score: 8.3,
            badges: {
              en: [
                'Refined Highway Isolation (Acoustic Glass Opt.)',
                '1.6/1.0 Versions Use Torsion Beam Rear'
              ],
              de: ['Sehr ruhiges Autobahn-Niveau', 'Basis-Motoren mit Verbundlenkerachse'],
              ru: ['Отличная шумоизоляция на трассе', 'У младших моторов сзади балка']
            }
          },
          interiorQualityFeatures: {
            score: 8.9,
            badges: {
              en: ['Class-Leading Interior Fit & Finish', 'Metal Rotary Knobs & Minimalist Dash'],
              de: ['Bestes Interieur der Kompaktklasse', 'Alu-Regler & klares Cockpit-Design'],
              ru: ['Лучший по качеству салон в классе', 'Алюминиевые регуляторы и лаконичность']
            }
          },
          visibilityManeuverability: {
            score: 7.9,
            badges: {
              en: ['4.31 m Length • 10.9 m Turning Circle', 'Slim Pillars + Parking Sensors Common'],
              de: ['4,31 m Länge • 10,9 m Wendekreis', 'Gute Übersicht + oft Einparkhilfe'],
              ru: ['Длина 4,31 м • Разворот 10,9 м', 'Хороший обзор + частые парктроники']
            }
          },
          safetyProtection: {
            score: 8.8,
            badges: {
              en: ['Euro NCAP 5★ (95% Adult)', '7 Airbags + Pre-Sense Front (Facelift)'],
              de: ['Euro NCAP 5★ (95% Insassen)', '7 Airbags + Pre-Sense Front (Facelift)'],
              ru: ['Euro NCAP 5★ (95% защита)', '7 подушек + Pre-Sense Front']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.8,
            badges: {
              en: ['Great Front Ergonomics & Seat Support', 'Tight Center Rear Seat Tunnel'],
              de: ['Top-Ergonomie vorn • Gute Sitze', 'Hoher Mitteltunnel im Fond'],
              ru: ['Отличная эргономика спереди', 'Высокий центральный тоннель сзади']
            }
          },
          interiorBootSpace: {
            score: 7.4,
            badges: {
              en: ['380 L Boot (1,220 L Folded)', 'e-tron/g-tron/Quattro Drop to 280–340 L'],
              de: ['380 L Kofferraum (1.220 L umgeklappt)', 'e-tron/g-tron/Quattro: 280–340 L'],
              ru: ['Багажник 380 л (1220 л слож.)', 'У e-tron/g-tron/Quattro: 280–340 л']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['510–560 kg Payload • 75 kg Roof', '1,300–1,800 kg Braked Towing'],
              de: ['510–560 kg Zuladung • 75 kg Dachlast', '1.300–1.800 kg Anhängelast gebremst'],
              ru: ['Нагрузка 510–560 кг • Крыша 75 кг', 'Прицеп до 1300–1800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.5,
            badges: {
              en: ['0–100 km/h: 6.9 s • 232 km/h', 'Effortless Speed'],
              de: ['0–100 km/h: 6.9 s • 232 km/h', 'Souveräner Vortrieb'],
              ru: ['0–100 км/ч: 6.9 с • 232 км/ч', 'Уверенный разгон']
            }
          },
          midRangeTorquePassing: {
            score: 8.5,
            badges: {
              en: ['380 Nm Common-Rail Torque', 'Strong Highway Overtaking'],
              de: ['380 Nm Drehmoment', 'Souveräner Durchzug'],
              ru: ['380 Н·м крутящего момента', 'Лёгкие обгоны на трассе']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Lighter MQB Chassis • Sharp Turn-In', 'Multi-Link Rear on 150 HP+ Models'],
              de: ['Leichtes MQB-Chassis • Agiles Einlenken', 'Mehrlenkerachse ab 150 PS'],
              ru: ['Лёгкая платформа MQB • Острый руль', 'Многорычажка сзади от 150 л.с.']
            }
          },
          brakingPerformance: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 35.3 m', 'Crisp Bosch ESP & Strong Fade Resistance'],
              de: ['100–0 km/h: 35,3 m', 'Präzises Pedal • Standfeste Scheiben'],
              ru: ['100–0 км/ч: 35,3 м', 'Информативная педаль • Стойкость к перегреву']
            }
          },
          efficiencyFuel: {
            score: 8.1,
            badges: {
              en: ['Efficient (5.5 L/100km)', '1,000+ km Tank Range'],
              de: ['Efficient (5.5 L/100km)', 'Über 1.000 km Reichweite'],
              ru: ['Экономичный (5.5 л/100 км)', 'Запас хода 1000+ км']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['Euro 5 / Euro 6 Diesel', 'Reasonable Insurance'],
              de: ['Euro-5 / Euro-6-Diesel', 'Faire Versicherung'],
              ru: ['Дизель Евро-5 / Евро-6', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 210,000 km / 10 yrs', de: 'Alle 210.000 km / 10 J.', ru: 'Каждые 210 000 км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, rollers & switchable water pump', de: 'EA288-Zahnriemensatz, Rollen & schaltbare Wasserpumpe erneuern', ru: 'Замена комплекта ремня ГРМ EA288, роликов и управляемой помпы' }, cost: '€620–890' },
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Change wet DSG oil (2.0 TDI DSG) + Haldex oil (if Quattro) & diesel fuel filter', de: 'Nasses DSG-Öl (2.0 TDI) + Haldex-Öl (Quattro) & Dieselfilter wechseln', ru: 'Замена масла в мокром DSG (2.0 TDI) + Haldex (Quattro) и топливного фильтра' }, cost: '€260–420' }
              ],
              critical: [
                { when: { en: '100,000–160,000 km', de: '100.000–160.000 km', ru: '100 000–160 000 км' }, action: { en: 'EA288 switchable water-pump sleeve sticking (causes sudden 110°C spikes!)', de: 'EA288 schaltbare Wasserpumpe (Schiebehülse klemmt → plötzliches Überhitzen!)', ru: 'Заклинивание шторки помпы EA288 (резкий скачок температуры!)' }, cost: '€580–850', risk: { en: 'Stuck sleeve blocks coolant flow on highway and warps cylinder head', de: 'Klemmende Hülse stoppt Kühlkreislauf auf der Autobahn — Kopfschaden', ru: 'Заклинившая шторка перекрывает ОЖ на трассе и ведёт к перегреву ГБЦ' }, damage: '€2,400–3,800' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: 'EGR cooler / DPF differential sensor & DMF + clutch (or DQ200 on 1.6 TDI)', de: 'AGR-Kühler / DPF-Sensor & ZMS + Kupplung (bzw. DQ200 beim 1.6 TDI)', ru: 'Охладитель EGR / датчик DPF и двухмассовый маховик (или DQ200 на 1.6 TDI)' }, cost: '€850–1,650', risk: { en: 'Limp mode, coolant loss into intake, or driveline vibration', de: 'Notlauf, Kühlwasserverlust im Ansaugtrakt oder starkes ZMS-Rasseln', ru: 'Аварийный режим, течь ОЖ во впуск или сильные вибрации трансмиссии' }, damage: '€1,800–3,000' }
              ]
            },
            badges: {
              en: ['210k km Belt Interval', 'Water Pump & EGR Main Items'],
              de: ['210 Tkm Zahnriemen', 'Wasserpumpe & AGR Hauptpunkte'],
              ru: ['Ремень 210 тыс. км', 'Основные траты — помпа и EGR']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strongest Residual Value in Class', 'High Demand for Facelift Sportback'],
              de: ['Sehr wertstabil im Kompakt-Segment', 'Gefragter Sportback ab Facelift'],
              ru: ['Лучшая остаточная стоимость в классе', 'Высокий спрос на рестайлинг Sportback']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Glacier White Metallic', code: 'LS9R', hex: '#eef1f6', glow: 'rgba(238, 241, 246, 0.16)', isDefault: true },
    { name: 'Ibis White', code: 'LY9C', hex: '#f4f6f8', glow: 'rgba(244, 246, 248, 0.16)' },
    { name: 'Mythos Black Metallic', code: 'LY9T', hex: '#17191e', glow: 'rgba(64, 74, 88, 0.18)' },
    { name: 'Brilliant Black', code: 'LY9B', hex: '#14161a', glow: 'rgba(60, 70, 84, 0.18)' },
    { name: 'Nardo Grey', code: 'LY7C', hex: '#777d84', glow: 'rgba(119, 125, 132, 0.18)' },
    { name: 'Monsoon Grey', code: 'LX7R', hex: '#60666e', glow: 'rgba(96, 102, 110, 0.18)' },
    { name: 'Daytona Grey Pearl', code: 'LZ7S', hex: '#494e56', glow: 'rgba(73, 78, 86, 0.18)' },
    { name: 'Floret Silver Metallic', code: 'LZ7G', hex: '#b8c0c8', glow: 'rgba(184, 192, 200, 0.16)' },
    { name: 'Tango Red Metallic', code: 'LY3U', hex: '#bd1e26', glow: 'rgba(189, 30, 38, 0.2)' },
    { name: 'Scuba Blue Metallic', code: 'LX5Q', hex: '#1e4a82', glow: 'rgba(30, 74, 130, 0.2)' },
    { name: 'Cosmos Blue Metallic', code: 'LX5F', hex: '#233b5c', glow: 'rgba(35, 59, 92, 0.2)' },
    { name: 'Vegas Yellow', code: 'LY1B', hex: '#e2b31e', glow: 'rgba(226, 179, 30, 0.2)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '2.0-tdi-150',
    defaultGroupKey: 'tdi-ea288',
    engineCosts: {
      '1.4-g-tron':  { group: 'g-tron',     avgFuelL100: 3.5, fuelPrice: 1.35, tax: 44,  ins: 560, service: 360 },
      '1.0-tfsi':    { group: 'tfsi-ea211', avgFuelL100: 5.6, fuelPrice: 1.75, tax: 48,  ins: 540, service: 310 },
      '1.2-tfsi-105':{ group: 'tfsi-ea211', avgFuelL100: 5.9, fuelPrice: 1.75, tax: 62,  ins: 550, service: 310 },
      '1.2-tfsi-110':{ group: 'tfsi-ea211', avgFuelL100: 5.8, fuelPrice: 1.75, tax: 60,  ins: 560, service: 310 },
      '1.4-tfsi-122':{ group: 'tfsi-ea211', avgFuelL100: 6.0, fuelPrice: 1.75, tax: 74,  ins: 590, service: 320 },
      '1.4-tfsi-140':{ group: 'tfsi-ea211', avgFuelL100: 6.1, fuelPrice: 1.75, tax: 78,  ins: 610, service: 330 },
      '1.4-tfsi-cod':{ group: 'tfsi-ea211', avgFuelL100: 5.9, fuelPrice: 1.75, tax: 78,  ins: 620, service: 340 },
      '1.5-tfsi-cod':{ group: 'tfsi-ea211', avgFuelL100: 5.8, fuelPrice: 1.75, tax: 92,  ins: 630, service: 340 },
      'e-tron':      { group: 'e-tron',     avgFuelL100: 3.5, fuelPrice: 1.75, tax: 28,  ins: 640, service: 410 },
      '1.8-tfsi':    { group: 'tfsi-ea888', avgFuelL100: 7.1, fuelPrice: 1.75, tax: 138, ins: 690, service: 380 },
      '2.0-tfsi':    { group: 'tfsi-ea888', avgFuelL100: 7.3, fuelPrice: 1.75, tax: 152, ins: 730, service: 390 },
      '1.6-tdi-105': { group: 'tdi-ea288',  avgFuelL100: 4.5, fuelPrice: 1.65, tax: 152, ins: 590, service: 340 },
      '1.6-tdi-110': { group: 'tdi-ea288',  avgFuelL100: 4.4, fuelPrice: 1.65, tax: 150, ins: 600, service: 340 },
      '1.6-tdi-115': { group: 'tdi-ea288',  avgFuelL100: 4.5, fuelPrice: 1.65, tax: 154, ins: 610, service: 350 },
      '2.0-tdi-150': { group: 'tdi-ea288',  avgFuelL100: 4.9, fuelPrice: 1.65, tax: 204, ins: 670, service: 360 },
      '2.0-tdi-184': { group: 'tdi-ea288',  avgFuelL100: 5.4, fuelPrice: 1.65, tax: 222, ins: 740, service: 390 },
      '30-tfsi':     { group: 'tfsi-ea211', avgFuelL100: 5.7, fuelPrice: 1.75, tax: 66,  ins: 560, service: 320 },
      '30-g-tron':   { group: 'g-tron',     avgFuelL100: 3.5, fuelPrice: 1.35, tax: 48,  ins: 580, service: 370 },
      '35-tfsi':     { group: 'tfsi-ea211', avgFuelL100: 5.9, fuelPrice: 1.75, tax: 96,  ins: 630, service: 340 },
      '40-tfsi':     { group: 'tfsi-ea888', avgFuelL100: 7.4, fuelPrice: 1.75, tax: 158, ins: 740, service: 400 },
      '40-e-tron':   { group: 'e-tron',     avgFuelL100: 3.5, fuelPrice: 1.75, tax: 28,  ins: 660, service: 420 },
      '30-tdi':      { group: 'tdi-ea288',  avgFuelL100: 4.6, fuelPrice: 1.65, tax: 164, ins: 610, service: 350 },
      '35-tdi':      { group: 'tdi-ea288',  avgFuelL100: 5.0, fuelPrice: 1.65, tax: 214, ins: 680, service: 370 },
      '40-tdi':      { group: 'tdi-ea288',  avgFuelL100: 5.5, fuelPrice: 1.65, tax: 232, ins: 750, service: 400 }
    },
    groups: {
      'tfsi-ea211': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 10% (MQB)', note: 'Huge leap over the older 8P; belt-driven EA211s show very few engine defects' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Timing-chain and oil-burning issues are solved; watch water pumps & dry DQ200 DSG' },
            { source: 'WhatCar? Survey', value: '95.1% Reliability', note: '6-speed manual 1.4/1.5 TFSI ranks among the best premium compact hatches' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 10 % (MQB)', note: 'Riesensprung gegenüber dem 8P; Zahnriemen-EA211 mit sehr geringer Mängelquote' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Ketten- und Ölverbrauchsprobleme gelöst; Wasserpumpe und DQ200 prüfen' },
            { source: 'WhatCar? Umfrage', value: '95,1 % Zuverlässigkeit', note: 'Als 6-Gang-Schalter gehört der 1.4/1.5 TFSI zu den solidesten Premium-Kompakten' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-10% (MQB)', note: 'Большой шаг вперёд по сравнению с 8P; ременные моторы EA211 крайне редко подводят' },
            { source: 'ADAC Pannenstatistik', value: 'Высокая надёжность', note: 'Болезни цепей и масложора решены; внимание только к помпе и сухой коробке DQ200' },
            { source: 'Рейтинг WhatCar?', value: '95,1% надёжности', note: 'Версии 1.4/1.5 TFSI с 6-МКПП входят в число самых беспроблемных премиум-хэтчбеков' }
          ]
        },
        extendedChecks: {
          en: [
            'Inspect the plastic water-pump/thermostat module underneath the intake side for pink coolant crust past 80,000 km.',
            'On S tronic automatics (7-speed dry DQ200), test gentle uphill creeping and slow traffic shifts for clutch judder.',
            'On 1.4/1.5 TFSI COD (35 TFSI), verify seamless 2-cylinder deactivation on steady cruise and smooth low-speed cold starts.',
            'Verify smooth pop-up MMI screen retraction (no gear grinding) and clean 15,000 km oil-change records.'
          ],
          de: [
            'Kunststoff-Wasserpumpen-/Thermostatmodul ab 80.000 km auf rosa Kühlmittelkrusten oder schleichenden Verlust prüfen.',
            'Bei S tronic (trockenes 7-Gang-DQ200) langsames Anrollen am Berg und Schaltvorgänge unter Teillast auf Rupfen testen.',
            'Beim 1.4/1.5 TFSI COD (35 TFSI) unmerkliche Zweizylinder-Abschaltung bei Konstantfahrt sowie ruckfreien Kaltlauf prüfen.',
            'Ausfahrenden MMI-Bildschirm auf geräuschfreie Mechanik testen und kurze 15.000-km-Ölwechsel bevorzugen.'
          ],
          ru: [
            'Осмотреть пластиковый модуль помпы и термостата на наличие розового налёта и подтёков антифриза после 80 тыс. км.',
            'С роботом S tronic (сухая 7-DSG DQ200) проверить плавное трогание в горку без дрожи сцеплений.',
            'На 1.4/1.5 TFSI COD (35 TFSI) убедиться в незаметном отключении 2 цилиндров на трассе и ровном холодном пуске.',
            'Проверить выдвижной экран MMI без посторонних скрипов и историю замены масла каждые 15 тыс. км.'
          ]
        },
        savingsNote: {
          en: '5.6–6.1 L/100 km real petrol consumption and very low Euro 6 road tax (€48–€96/yr) keep annual running costs close to mainstream rivals.',
          de: '5,6–6,1 L/100 km Realverbrauch und niedrige Euro-6-Steuer (48–96 €/J.) halten die laufenden Kosten erstaunlich dicht an Golf-Niveau.',
          ru: 'Расход 5,6–6,1 л/100 км и минимальный налог Euro 6 делают содержание сопоставимым с обычными массовыми хэтчбеками.'
        },
        market: {
          supplyDemand: {
            en: 'Very strong private demand; clean 2016+ facelift 1.4/1.5 TFSI Sport or S line models sell quickly.',
            de: 'Sehr hohe Privatnachfrage; gepflegte Facelift-Modelle ab 2016 mit 1.4/1.5 TFSI (Sport / S line) verkaufen sich rasch.',
            ru: 'Высокий спрос среди частных покупателей; свежие рестайлинговые 1.4/1.5 TFSI (Sport / S line) быстро находят владельцев.'
          },
          sweetSpot: {
            en: '2016–2019 1.4 TFSI COD / 1.5 TFSI (150 HP, 6-MT, Sport) with Virtual Cockpit & LED lights (€12,500–€15,500).',
            de: '2016–2019 1.4 TFSI COD / 1.5 TFSI (150 PS, 6-Gang, Sport) mit Virtual Cockpit & LED-Licht (12.500–15.500 €).',
            ru: '2016–2019 гг. 1.4 TFSI COD / 1.5 TFSI (150 л.с., 6-МКПП, Sport) с Virtual Cockpit и LED-фарами (€12 500–15 500).'
          },
          outlook3to5yr: {
            en: 'Strong value retention (~€8,500–€11,000 in 3–5 yrs); solved MQB petrol reliability protects resale far better than the 8P.',
            de: 'Sehr wertstabil (ca. 8.500–11.000 € in 3–5 Jahren); der gute Ruf der Zahnriemen-EA211 schützt den Wiederverkauf deutlich.',
            ru: 'Высокая остаточная стоимость (€8 500–11 000 через 3–5 лет); отличная репутация EA211 удерживает цену гораздо лучше 8P.'
          }
        },
        watchoutExtra: {
          en: [
            'Plastic water-pump/thermostat housings seep coolant past 80k–120k km, and the 7-speed dry DSG (DQ200) wears clutches faster in dense city traffic.',
            '1.0 / 1.2 / 1.4 ≤125 HP versions use a simpler torsion-beam rear axle (slightly firmer over sharp bumps than the multi-link ≥150 HP chassis).'
          ],
          de: [
            'Kunststoff-Wasserpumpen schwitzen oft ab 80–120 Tkm und das trockene 7-DSG (DQ200) verschleißt im Stadt-Stau schneller.',
            'Versionen bis 125 PS nutzen eine Verbundlenker-Hinterachse (etwas trockener über Querfugen als die Mehrlenker-Achse ab 150 PS).'
          ],
          ru: [
            'Пластиковый корпус помпы часто подтекает после 80–120 тыс. км, а сухая 7-DSG (DQ200) быстрее изнашивается в пробках.',
            'Версии до 125 л.с. оснащены полузависимой задней балкой — чуть жёстче на стыках, чем многорычажка на моделях от 150 л.с.'
          ]
        }
      },
      'tfsi-ea888': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 12% (MQB)', note: 'Multi-link rear chassis & wet-clutch DSG pairings show solid long-term durability' },
            { source: 'ADAC Pannenstatistik', value: 'Strong (Gen 3)', note: 'EA888 Gen 3 fixed old oil-burning rings; water-pump housing seepage is the main watchout' },
            { source: 'WhatCar? Survey', value: '93.8% Reliability', note: 'Durable powertrain when wet DSG oil and engine oil are serviced on schedule' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 12 % (MQB)', note: 'Mehrlenker-Hinterachse und nasses DSG halten bei guter Pflege dauerhaft solide' },
            { source: 'ADAC Pannenstatistik', value: 'Stark (Gen 3)', note: 'EA888 Gen 3 löste den Ölverbrauch der Vorgänger; typisch bleibt die Kunststoff-Wasserpumpe' },
            { source: 'WhatCar? Umfrage', value: '93,8 % Zuverlässigkeit', note: 'Langlebiger Antrieb, sofern DSG-Ölwechsel (60.000 km) und Motoröl-Intervalle stimmen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-12% (MQB)', note: 'Задняя многорычажка и мокрые DSG показывают высокую долговечность при регулярном ТО' },
            { source: 'ADAC Pannenstatistik', value: 'Крепкий (Gen 3)', note: 'EA888 Gen 3 избавился от массового масложора; главная слабость — пластиковая помпа и термостат' },
            { source: 'Рейтинг WhatCar?', value: '93,8% надёжности', note: 'Надёжный силовой агрегат при своевременной замене масла в двигателе и мокрой DSG' }
          ]
        },
        extendedChecks: {
          en: [
            'Inspect under the intake manifold and radiator area for dried pink coolant around the plastic water-pump/thermostat unit (€650–€950 fix).',
            'Verify wet-clutch DSG oil & filter flushes every 60,000 km (plus Haldex oil service every 3 yrs / 60,000 km if Quattro).',
            'Check for clean turbo pull with zero wastegate rattle or boost hesitation, and inspect service intervals (prefer 10k–15k km oil).',
            'Check front brake discs and inner tyre edges, as 180–190 HP front-wheel-drive cars work front tyres harder.'
          ],
          de: [
            'Unter dem Ansaugkrümmer gezielt auf Kühlmittelspuren am Kunststoff-Thermostat-/Wasserpumpengehäuse prüfen (ca. 650–950 €).',
            'Beim nassen DSG den 60.000-km-Ölwechsel sowie bei Quattro-Modellen den Haldex-Ölwechsel (alle 3 Jahre / 60 Tkm) nachweisen lassen.',
            'Sauberen Ladedruckaufbau ohne Wastegate-Rasseln testen und kurze 10–15-Tkm-Ölwechsel bevorzugen.',
            'Vordere Bremsscheiben und Reifeninnenkanten bei Fronttrieblern auf gleichmäßigen Verschleiß kontrollieren.'
          ],
          ru: [
            'Проверить зону под впускным коллектором на подтёки антифриза из пластикового корпуса помпы/термостата (€650–950).',
            'Убедиться в замене масла в мокрой DSG каждые 60 000 км (и в муфте Haldex на версиях Quattro).',
            'Проверить ровный разгон без звона вестгейта турбины и наличие интервалов замены масла не реже 10–15 тыс. км.',
            'Оценить износ передних тормозных дисков и резины на мощных переднеприводных версиях.'
          ]
        },
        savingsNote: {
          en: '7.1–7.4 L/100 km fuel use plus wet-DSG fluid changes cost ~€300–€450/yr more than the 1.4/1.5 TFSI, buying effortless pace and tougher gearbox hardware.',
          de: '7,1–7,4 L/100 km und DSG-Ölservice kosten ca. 300–450 €/Jahr mehr als ein 1.4/1.5 TFSI — dafür gibt es spürbar mehr Druck und das robuste nasse DSG.',
          ru: 'Расход 7,1–7,4 л/100 км и обслуживание мокрой DSG обходятся на €300–450 в год дороже 1.4/1.5 TFSI, но дают заметно лучшую динамику и ресурс КПП.'
        },
        market: {
          supplyDemand: {
            en: 'Desirable enthusiast middle ground below the S3; clean 190 HP 2.0 TFSI / 40 TFSI examples hold firm asking prices.',
            de: 'Gefragte Mittelklasse-Alternative unterhalb des S3; gepflegte 2.0 TFSI / 40 TFSI (190 PS) erzielen stabile Preise.',
            ru: 'Желанная золотая середина перед S3; ухоженные 2.0 TFSI / 40 TFSI (190 л.с.) уверенно держат цену.'
          },
          sweetSpot: {
            en: '2017–2019 2.0 TFSI / 40 TFSI (190 HP, wet 7-DSG, S line) under 100,000 km with clean DSG records (€15,200–€18,200).',
            de: '2017–2019 2.0 TFSI / 40 TFSI (190 PS, nasses 7-DSG, S line) unter 100.000 km mit DSG-Service (15.200–18.200 €).',
            ru: '2017–2019 гг. 2.0 TFSI / 40 TFSI (190 л.с., мокрая 7-DSG, S line) до 100 000 км с историей КПП (€15 200–18 200).'
          },
          outlook3to5yr: {
            en: 'Holds well around €10,500–€13,200 in 3–5 yrs; Euro 6 petrol and 190 HP wet-DSG hardware keep enthusiast demand healthy.',
            de: 'Hält sich in 3–5 Jahren bei starken 10.500–13.200 € — Euro-6-Benziner und nasses DSG bleiben hoch im Kurs.',
            ru: 'Сохранит цену на уровне €10 500–13 200 через 3–5 лет благодаря связке Euro 6 и выносливой мокрой DSG.'
          }
        },
        watchoutExtra: {
          en: [
            'EA888 Gen 3 plastic water-pump/thermostat housing leaks are common around 80k–130k km.',
            'Wet 6/7-speed DSG (and optional Haldex V Quattro coupling) require strict 60,000 km oil servicing to avoid pricey pump/mechatronic repairs.'
          ],
          de: [
            'Kunststoff-Wasserpumpe und Thermostatgehäuse des EA888 Gen 3 werden zwischen 80 und 130 Tkm häufig undicht.',
            'Nasses 6/7-Gang-DSG (und ggf. Haldex-V-Quattro) verlangen strikte 60.000-km-Ölwechsel für dauerhafte Zuverlässigkeit.'
          ],
          ru: [
            'Течь пластиковой помпы и термостата EA888 Gen 3 часто проявляется к 80–130 тыс. км.',
            'Мокрые 6/7-DSG (и муфта Haldex V на Quattro) требуют строгой замены масла каждые 60 000 км.'
          ]
        }
      },
      'tdi-ea288': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 12% (Highway)', note: 'EA288 diesels cover high Autobahn miles with minimal structural or electrical defects' },
            { source: 'ADAC Pannenstatistik', value: 'Highly Dependable', note: '2.0 TDI 150 HP + 6-MT/wet DSG is an endurance benchmark; watch water pump & AdBlue' },
            { source: 'WhatCar? Survey', value: '93.5% Reliability', note: 'DPF/EGR issues occur mostly on short urban commutes rather than motorway cars' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 12 % (Langstrecke)', note: 'EA288-Diesel bewältigen hohe Autobahn-Laufleistungen mit sehr wenigen Prüf-Mängeln' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr verlässlich', note: '2.0 TDI 150 PS ist ein Dauerläufer; gelegentlich fallen Wasserpumpe oder AdBlue-Sensoren auf' },
            { source: 'WhatCar? Umfrage', value: '93,5 % Zuverlässigkeit', note: 'DPF- und AGR-Störungen entstehen fast nur bei reinen Kurzstreckenfahrzeugen' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-12% (трассовый)', note: 'Дизели EA288 уверенно держат большие трассовые пробеги с минимумом замечаний' },
            { source: 'ADAC Pannenstatistik', value: 'Очень надёжен', note: '2.0 TDI 150 л.с. — эталон выносливости; изредка требуют внимания помпа или датчики AdBlue' },
            { source: 'Рейтинг WhatCar?', value: '93,5% надёжности', note: 'Проблемы с DPF и EGR возникают почти исключительно при частых коротких поездках по городу' }
          ]
        },
        extendedChecks: {
          en: [
            'Check the EA288 switchable water-pump sleeve — overheating on highway climbs indicates a stuck coolant shroud.',
            'Check AdBlue system status (on 2016+ Euro 6d-TEMP 30/35/40 TDI): ensure no countdown warnings or crystallized injector leaks.',
            'Verify clean DPF regeneration history and listen at idle for dual-mass flywheel chatter past 160,000 km.',
            'On 1.6 TDI automatics (dry DQ200), check uphill creep carefully; 2.0 TDI automatics use the tougher wet 6/7-speed DSG (verify 60k oil).'
          ],
          de: [
            'Schaltbare Wasserpumpe des EA288 prüfen — steigende Temperatur unter Autobahnbelastung deutet auf klemmenden Regelschieber hin.',
            'Bei späten Euro-6d-TEMP-Modellen (30/35/40 TDI) AdBlue-System auf Fehlermeldungen und kristallisierte Dosierventile checken.',
            'DPF-Füllstand auslesen und ab ca. 160.000 km im Leerlauf auf Klackern des Zweimassenschwungrads achten.',
            'Beim 1.6 TDI Automatik (trockenes DQ200) sanftes Anfahren testen; beim 2.0 TDI auf 60.000-km-Ölwechsel des nassen DSG achten.'
          ],
          ru: [
            'Проверить управляемую помпу EA288 — скачки температуры под нагрузкой говорят о подклинивании шторки.',
            'На поздних версиях Euro 6d-TEMP (30/35/40 TDI) проверить систему AdBlue на отсутствие ошибок и кристаллизации форсунки.',
            'Считать заполнение сажевого фильтра DPF и послушать двухмассовый маховик на холостых при пробеге за 160 тыс. км.',
            'На 1.6 TDI с сухой 7-DSG проверить плавность старта; на 2.0 TDI подтвердить смену масла в мокрой DSG каждые 60 тыс. км.'
          ]
        },
        savingsNote: {
          en: '4.4–5.5 L/100 km real diesel economy and 210,000 km timing belts save €350–€550/yr in fuel above 18,000 km/yr vs. comparable petrol models.',
          de: '4,4–5,5 L/100 km Realverbrauch und 210.000-km-Zahnriemenintervall sparen ab 18.000 km/Jahr ca. 350–550 € gegenüber Benzinern.',
          ru: 'Расход 4,4–5,5 л/100 км и интервал ремня ГРМ 210 000 км экономят €350–550 в год на топливе при пробегах от 18 тыс. км/год.'
        },
        market: {
          supplyDemand: {
            en: 'High supply of former fleet commuters; clean Euro 6 2.0 TDI 150 HP cars with documented highway mileage remain strong sellers.',
            de: 'Großes Angebot aus Dienstwagenflotten; saubere Euro-6-2.0-TDI (150 PS) mit ehrlicher Autobahn-Historie sind stark gefragt.',
            ru: 'Большой выбор из корпоративных парков; ухоженные Euro 6 2.0 TDI (150 л.с.) с трассовым пробегом стабильно ликвидны.'
          },
          sweetSpot: {
            en: '2016–2019 2.0 TDI 150 / 35 TDI (Euro 6, Sport, wet DSG or 6-MT) with 90,000–135,000 km (€12,500–€15,800).',
            de: '2016–2019 2.0 TDI 150 / 35 TDI (Euro 6, Sport, nasses DSG oder 6-Gang) mit 90.000–135.000 km (12.500–15.800 €).',
            ru: '2016–2019 гг. 2.0 TDI 150 / 35 TDI (Euro 6, Sport, мокрая DSG или 6-МКПП) с пробегом 90–135 тыс. км (€12 500–15 800).'
          },
          outlook3to5yr: {
            en: 'Gradual drop to €7,500–€10,200 in 3–5 yrs; Euro 6 / 6d-TEMP compliance protects resale far better than older Euro 5 diesels.',
            de: 'Ruhiger Rückgang auf 7.500–10.200 € in 3–5 Jahren — Euro 6 / 6d-TEMP schützt den Restwert deutlich besser als alte Euro-5-Diesel.',
            ru: 'Плавное снижение до €7 500–10 200 за 3–5 лет — стандарт Euro 6 / 6d-TEMP сохраняет ликвидность заметно лучше старых Euro 5.'
          }
        },
        watchoutExtra: {
          en: [
            'EA288 switchable water-pump shroud sticking (overheating) and AdBlue tank heater/sensor faults on late 30/35/40 TDI models.',
            '1.6 TDI automatics rely on the dry 7-speed DQ200, while all TDIs suffer faster EGR/DPF wear if driven only on short city trips.'
          ],
          de: [
            'Klemmende Regelschieber an der EA288-Wasserpumpe (Überhitzung) und AdBlue-Sensorik bei späten 30/35/40 TDI.',
            'Der 1.6 TDI Automatik nutzt das trocken laufende 7-DSG (DQ200); reine Stadtnutzung belastet DPF und AGR spürbar.'
          ],
          ru: [
            'Подклинивание управляемой шторки помпы EA288 (риск перегрева) и отказы датчиков/подогрева AdBlue на поздних версиях.',
            'Автоматический 1.6 TDI оснащён сухой 7-DSG (DQ200), а короткие городские поездки быстро забивают EGR и DPF.'
          ]
        }
      },
      'g-tron': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Strict Tank Check', note: 'Very clean emissions; TÜV requires visible corrosion-free CNG tanks (or composite inspection)' },
            { source: 'ADAC Pannenstatistik', value: 'Solid (CNG Regulators)', note: 'Reliable EA211 base; watch high-pressure CNG regulator and dry 7-DSG upkeep' },
            { source: 'WhatCar? Survey', value: '92.5% Reliability', note: 'Extremely cheap fuel per km where CNG pumps exist; niche infrastructure limits buyers' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Gastank-Prüfung', note: 'Top-Abgaswerte; bei der HU werden CNG-Drucktanks auf einwandfreien Zustand geprüft' },
            { source: 'ADAC Pannenstatistik', value: 'Solide (Druckregler)', note: 'Robuste EA211-Basis; Gasdruckregler und trockenes 7-Gang-DSG beobachten' },
            { source: 'WhatCar? Umfrage', value: '92,5 % Zuverlässigkeit', note: 'Extrem geringe Kilometerkosten bei CNG-Versorgung, jedoch dünneres Tankstellennetz' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Контроль баллонов', note: 'Отличная экология; на техосмотре обязательно проверяется состояние метановых баллонов' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен (редуктор)', note: 'Крепкая база EA211; внимания требуют газовый редуктор давления и сухая 7-DSG' },
            { source: 'Рейтинг WhatCar?', value: '92,5% надёжности', note: 'Минимальная стоимость километра при наличии метановых АЗС, но нишевая заправочная сеть' }
          ]
        },
        extendedChecks: {
          en: [
            'Verify clean TÜV CNG tank inspection records (composite tanks in A3 g-tron have a 20-year service life and must pass visual scuff/damage checks).',
            'Test cold start and seamless CNG-to-petrol switchover under full acceleration with zero misfires or fuel-rail warning lights.',
            'Check the high-pressure CNG regulator and filler-neck O-ring for gas odor or hissing, plus dry 7-DSG smoothness.',
            'Confirm whether the car is an early 1.4 g-tron (full 50 L petrol tank) or late 30 g-tron (tiny 9 L petrol reserve) matching local CNG stations.'
          ],
          de: [
            'Belege zur Gastank-Prüfung bei der HU kontrollieren (Composite-Tanks im A3 g-tron haben 20 Jahre Laufzeit und dürfen keine Scheuerstellen zeigen).',
            'Kaltstart sowie ruckfreien Wechsel zwischen Erdgas und Benzin unter Vollast ohne Warnleuchten testen.',
            'Gasdruckregler und Tankstutzen-Dichtung auf Gasgeruch prüfen sowie Schaltkomfort der 7-Gang S tronic testen.',
            'Prüfen, ob ein früher 1.4 g-tron (voller 50-L-Benzintank) oder später 30 g-tron (nur 9-L-Reservetank) zum eigenen CNG-Netz passt.'
          ],
          ru: [
            'Проверить документы осмотра композитных метановых баллонов (срок службы 20 лет, отсутствие повреждений и сколов защиты).',
            'Проверить холодный пуск и незаметный переход между газом и бензином под нагрузкой без ошибок и пропусков.',
            'Осмотреть газовый редуктор и уплотнение заправочной горловины на герметичность, а также плавность 7-DSG.',
            'Уточнить версию: ранний 1.4 g-tron сохранил полноценный 50-литровый бензобак, а поздний 30 g-tron имеет лишь 9-литровый резерв.'
          ]
        },
        savingsNote: {
          en: '~3.5 kg/100 km CNG at ~€1.35/kg cuts fuel costs by 40–50% vs. petrol A3s — unbeatable per-km thrift if CNG stations sit on your daily route.',
          de: 'Rund 3,5 kg/100 km CNG (~1,35 €/kg) senken die Spritkosten um 40–50 % gegenüber Benzinern — unschlagbar günstig bei passender CNG-Tankstelle.',
          ru: 'Около 3,5 кг/100 км метана (примерно €1,35/кг) снижают затраты на топливо на 40–50% относительно бензина при наличии АГНКС по пути.'
        },
        market: {
          supplyDemand: {
            en: 'Niche regional market; high value in areas with active CNG stations, slower resale in regions reducing natural-gas pumps.',
            de: 'Nischenmarkt mit starkem Regionalgefälle: sehr beliebt rund um dichte CNG-Netze, zäher Verkauf bei schwacher Infrastruktur.',
            ru: 'Нишевый региональный спрос: быстро находит покупателя там, где развиты метановые АЗС, и сложнее продаётся без них.'
          },
          sweetSpot: {
            en: '2016–2018 1.4 g-tron (retains the full 50 L petrol tank alongside 14.4 kg CNG) under 110,000 km (€10,200–€12,400).',
            de: '2016–2018 1.4 g-tron (kombiniert 14,4 kg CNG mit vollem 50-L-Benzintank) unter 110.000 km (10.200–12.400 €).',
            ru: '2016–2018 гг. 1.4 g-tron (сочетает 14,4 кг метана с полным 50-л бензобаком) до 110 000 км (€10 200–12 400).'
          },
          outlook3to5yr: {
            en: 'Moderates toward €6,200–€8,400 in 3–5 yrs; shrinking public CNG station networks in parts of Europe make resale location-dependent.',
            de: 'Sinkt in 3–5 Jahren Richtung 6.200–8.400 €; schrumpfende CNG-Tankstellennetze machen den Wiederverkauf stark regionsabhängig.',
            ru: 'Снизится к €6 200–8 400 через 3–5 лет; сокращение числа метановых заправок в ряде стран делает перепродажу зависимой от региона.'
          }
        },
        watchoutExtra: {
          en: [
            'CNG tanks sit under the boot floor, shrinking cargo capacity from 380 L to 280 L; late 30 g-tron models also shrink the petrol tank to just 9 L.',
            'High-pressure CNG regulators, gas injectors, and mandatory periodic tank inspections add specialized workshop steps.'
          ],
          de: [
            'Gastanks unter dem Ladeboden verkleinern den Kofferraum von 380 L auf 280 L; beim späten 30 g-tron schrumpft zudem der Benzintank auf 9 Liter.',
            'Gasdruckregler, Einblasventile und wiederkehrende Tankprüfungen erfordern spezialisierte Werkstätten.'
          ],
          ru: [
            'Газовые баллоны под полом уменьшают багажник с 380 л до 280 л, а у позднего 30 g-tron бензобак урезан всего до 9 литров.',
            'Газовый редуктор, форсунки и регулярная освидетельствование баллонов требуют профильного сервиса.'
          ]
        }
      },
      'e-tron': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 15% (Check Brakes)', note: 'Solid MQB chassis; regenerative braking causes rear discs to rust if underused' },
            { source: 'ADAC Pannenstatistik', value: 'Good (HV Seal Recall)', note: 'Check early 2014–2016 HV battery underbody seal recall & wet 6-DSG (DQ400e) oil' },
            { source: 'WhatCar? Survey', value: '91.2% Reliability', note: 'Extra PHEV mechatronic, coolant-valve & charging-port electronics lower scores slightly' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 15 % (Bremsen)', note: 'Solides MQB-Fahrwerk; hintere Bremsscheiben setzen durch Rekuperation oft Rost an' },
            { source: 'ADAC Pannenstatistik', value: 'Gut (Akku-Rückruf)', note: 'Wichtig: Rückruf zur HV-Batterie-Abdichtung (2014–2016) sowie DQ400e-DSG-Ölwechsel prüfen' },
            { source: 'WhatCar? Umfrage', value: '91,2 % Zuverlässigkeit', note: 'Zusätzliche PHEV-Elektronik, Kühlventile und Ladebuchsen senken die Quote etwas' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-15% (тормоза)', note: 'Крепкое шасси MQB; из-за рекуперации задние тормозные диски склонны к коррозии' },
            { source: 'ADAC Pannenstatistik', value: 'Хорошо (отзыв АКБ)', note: 'Проверить отзывную кампанию по герметизации батареи (2014–2016) и ТО мокрой DQ400e' },
            { source: 'Рейтинг WhatCar?', value: '91,2% надёжности', note: 'Дополнительная гибридная электроника, клапаны охлаждения и зарядный порт снижают итоговый балл' }
          ]
        },
        extendedChecks: {
          en: [
            'Run a full electric charge test and verify real EV range (~30–40 km mild weather) plus clean high-voltage charging-port lock operation.',
            'Confirm Audi recall completion for the 8.8 kWh HV battery housing seal (2014–2016) and test electric heater / A/C operation in EV mode.',
            'Verify 60,000 km oil service on the dedicated 6-speed wet e-tron DSG (DQ400e) and test smooth electric-to-petrol handover under throttle.',
            'Inspect rear brake discs for heavy rust lips and confirm the 280 L boot + Mode 2/3 charging cables fit your daily routine.'
          ],
          de: [
            'Vollständige AC-Ladung testen, reale E-Reichweite (ca. 30–40 km bei mildem Wetter) prüfen und Verriegelung des Ladeanschlusses kontrollieren.',
            'Rückruf-Erledigung zur Abdichtung der 8,8-kWh-HV-Batterie (2014–2016) belegen lassen und E-Heizung/Klima im EV-Modus testen.',
            '60.000-km-Ölwechsel beim speziellen 6-Gang-Hybrid-DSG (DQ400e) prüfen und sanftes Zuschalten des 1.4 TFSI unter Last testen.',
            'Hintere Bremsscheiben auf Rostränder prüfen und testen, ob 280 L Kofferraum plus Ladekabel im Alltag reichen.'
          ],
          ru: [
            'Проверить полную зарядку от сети, реальный запас хода на электротяге (~30–40 км) и чёткую фиксацию лючка/разъёма под эмблемой Audi.',
            'Убедиться в прохождении отзыва по герметизации батареи 8,8 кВт·ч (2014–2016) и работе электроотопителя в режиме EV.',
            'Проверить замену масла в специальной мокрой гибридной КПП DQ400e каждые 60 000 км и плавный старт ДВС под тягой.',
            'Осмотреть задние тормозные диски на предмет ржавчины и оценить достаточность 280-литрового багажника с кабелями.'
          ]
        },
        savingsNote: {
          en: 'Home-charging commuters save €500–€800/yr in petrol (~2.5–4.5 L/100 km blended) plus very low tax, though uncharged motorway driving burns ~6.5–7.2 L/100 km.',
          de: 'Heimlader sparen mit ca. 2,5–4,5 L/100 km plus Minimal-Steuer rund 500–800 €/Jahr; ohne Laden verbraucht der Hybrid auf der Autobahn ca. 6,5–7,2 L/100 km.',
          ru: 'При ежедневной зарядке дома смешанный расход 2,5–4,5 л/100 км и низкий налог экономят €500–800 в год; без розетки на трассе уходит 6,5–7,2 л/100 км.'
        },
        market: {
          supplyDemand: {
            en: 'Solid commuter demand where home/work charging exists; buyers increasingly compare 2016+ facelift e-trons against pure EVs.',
            de: 'Gute Nachfrage bei Pendlern mit eigener Wallbox/Steckdose; Facelift-Modelle ab 2016 bleiben als Übergangs-Allrounder beliebt.',
            ru: 'Хороший спрос среди владельцев с розеткой дома или в офисе; рестайлинг 2016+ остаётся удобным универсальным гибридом.'
          },
          sweetSpot: {
            en: '2016–2019 e-tron / 40 e-tron Facelift under 110,000 km with verified battery health & 60k DQ400e service (€14,200–€17,500).',
            de: '2016–2019 e-tron / 40 e-tron Facelift unter 110.000 km mit geprüftem Akku und DQ400e-Service (14.200–17.500 €).',
            ru: '2016–2019 гг. e-tron / 40 e-tron рестайлинг до 110 000 км с проверкой батареи и ТО КПП DQ400e (€14 200–17 500).'
          },
          outlook3to5yr: {
            en: 'Softens toward €8,500–€11,200 in 3–5 yrs as 8-year HV battery warranties expire and longer-range PHEVs/EVs become cheaper.',
            de: 'Sinkt in 3–5 Jahren Richtung 8.500–11.200 €, wenn die 8-jährige Akku-Garantie ausläuft und langstreckentaugliche E-Autos günstiger werden.',
            ru: 'Снизится к €8 500–11 200 через 3–5 лет по мере окончания 8-летней гарантии на батарею и удешевления новых электромобилей.'
          }
        },
        watchoutExtra: {
          en: [
            '8.8 kWh HV battery degrades over 8–12 years (~€6,000+ new pack cost), and the front grille charging-port actuator/wiring can fail.',
            'Batteries shrink the boot from 380 L to 280 L (and petrol tank to 40 L); DQ400e hybrid DSG repairs require EV-certified workshops.'
          ],
          de: [
            'Die 8,8-kWh-Batterie altert nach 8–12 Jahren (teurer Ersatz) und die Ladeklappen-Mechanik hinter den Audi-Ringen neigt zu Kontaktfehlern.',
            'Der Akku verkleinert den Kofferraum auf 280 L (Tank 40 L); Reparaturen am DQ400e-Hybridgetriebe erfordern HV-zertifizierte Betriebe.'
          ],
          ru: [
            'Батарея 8,8 кВт·ч постепенно деградирует к 8–12 годам (замена дорога), а лючок зарядки за эмблемой Audi иногда заклинивает.',
            'Батарея урезает багажник до 280 л (бак до 40 л), а ремонт гибридной КПП DQ400e требует профильного HV-сервиса.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (8V)', de: 'EU / DE Ausstattungslinien (8V)', ru: 'Европейские комплектации (8V)' },
      sectionHint: { en: 'Look for 2016+ facelift models featuring optional Virtual Cockpit and LED / Matrix LED headlamps', de: 'Besonders gesucht sind Facelift-Modelle ab 2016 mit optionalem Virtual Cockpit und LED- bzw. Matrix-LED-Licht', ru: 'Наиболее востребованы рестайлинговые версии с 2016 года с опциями Virtual Cockpit и Matrix LED' },
      faceliftTitle: { en: '2016 Facelift: Virtual Cockpit & Matrix LED', de: 'Facelift 2016: Virtual Cockpit & Matrix-LED', ru: 'Рестайлинг 2016: Virtual Cockpit и Matrix LED' },
      faceliftKicker: { en: '2016+ Facelift', de: 'Facelift ab 2016', ru: 'Рестайлинг 2016+' },
      trims: [
        {
          id: 'attraction-basis',
          tierClass: 'tier-1',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Attraction / Basis', de: 'Attraction / Basis', ru: 'Attraction / Basis' },
          delta: { en: '-€800 – €1,300', de: '-800 – 1.300 €', ru: '-€800 – €1 300' },
          isSweetSpot: false,
          summary: {
            en: 'Sparse fleet-focused base model; still well-screwed-together inside, yet missing climate and parking basics unless optioned.',
            de: 'Schlichtes Basis- und Flottenmodell; innen hochwertig verarbeitet, aber ohne teure Pakete oft mager ausgestattet.',
            ru: 'Сдержанная базовая версия с качественной сборкой, но без пакетов опций бедна на климат и парктроники.'
          },
          highlights: {
            en: ['16" wheels & standard comfort suspension', 'Manual A/C & 5.8" / 7" pop-up MMI Radio', 'Basic fabric seats & 4-spoke steering wheel'],
            de: ['16"-Räder & Komfort-Serienfahrwerk', 'Manuelle Klimaanlage & MMI Radio', 'Einfache Stoffsitze & 4-Speichen-Lenkrad'],
            ru: ['Колёса 16" и комфортная подвеска', 'Кондиционер и базовая система MMI', 'Простые тканевые кресла и 4-спицевый руль']
          }
        },
        {
          id: 'ambiente',
          tierClass: 'tier-2',
          tier: { en: 'Pre-FL Comfort', de: 'Vor-FL Komfort', ru: 'Дорест. Комфорт' },
          name: { en: 'Ambiente', de: 'Ambiente', ru: 'Ambiente' },
          delta: { en: '-€200 – €400', de: '-200 – 400 €', ru: '-€200 – €400' },
          isSweetSpot: false,
          summary: {
            en: 'Pre-facelift (2012–2016) comfort-oriented line adding cruise control, rear parking sensors, and light package.',
            de: 'Vor-Facelift-Komfortlinie (2012–2016) mit Tempomat, Einparkhilfe hinten und Innenlichtpaket.',
            ru: 'Дорестайлинговая комфортная версия (2012–2016) с круиз-контролем, задним парктроником и подсветкой.'
          },
          highlights: {
            en: ['16" 10-spoke alloys & cruise control', 'Rear parking sensors & interior light pack', 'Comfort seats & centre armrest'],
            de: ['16"-Alufelgen & Geschwindigkeitsregelanlage', 'Einparkhilfe hinten & Lichtpaket', 'Komfortsitze & Mittelarmlehne'],
            ru: ['Диски 16" и круиз-контроль', 'Задний парктроник и пакет подсветки', 'Комфортные кресла и подлокотник']
          }
        },
        {
          id: 'ambition',
          tierClass: 'tier-3',
          tier: { en: 'Pre-FL Sport', de: 'Vor-FL Sport', ru: 'Дорест. Спорт' },
          name: { en: 'Ambition', de: 'Ambition', ru: 'Ambition' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: false,
          summary: {
            en: 'Pre-facelift driver line featuring bolstered sports seats, 17" wheels, Audi Drive Select, and 15 mm sport chassis.',
            de: 'Sportliche Vor-Facelift-Linie mit Sportsitzen, 17"-Alus, Audi Drive Select und -15 mm Sportfahrwerk.',
            ru: 'Дорестайлинговая драйверская версия: спорткресла, диски 17", Drive Select и подвеска -15 мм.'
          },
          highlights: {
            en: ['Sports seats & 3-spoke leather wheel', '17" 5-arm alloys & Audi Drive Select', '15 mm lowered sports suspension'],
            de: ['Sportsitze & 3-Speichen-Sportlenkrad', '17"-Alufelgen & Audi Drive Select', 'Sportfahrwerk (-15 mm)'],
            ru: ['Спортивные сиденья и 3-спицевый руль', 'Диски 17" и система Audi Drive Select', 'Спортивная подвеска (-15 мм)']
          }
        },
        {
          id: 'design',
          tierClass: 'tier-4',
          tier: { en: 'Facelift Comfort', de: 'FL Komfort', ru: 'Рест. Комфорт' },
          name: { en: 'Design', de: 'Design', ru: 'Design' },
          delta: { en: '+€300 – €700', de: '+300 – 700 €', ru: '+€300 – €700' },
          isSweetSpot: false,
          summary: {
            en: 'Replaced Ambiente on 2016+ models — prioritizes plush ride comfort, ambient lighting, and chrome exterior accents.',
            de: 'Löste 2016 Ambiente ab — Fokus auf ruhigen Federungskomfort, Lichtpaket und elegante Chromakzente.',
            ru: 'Сменила Ambiente в 2016 году — акцент на плавность хода, пакет подсветки и хромированный декор.'
          },
          highlights: {
            en: ['17" multi-spoke alloys & chrome window trim', 'Comfort suspension & ambient LED lighting', '3D aluminium inlays & partial leatherette trim'],
            de: ['17"-Vielspeichen-Alus & Chrom-Zierleisten', 'Komfortfahrwerk & LED-Lichtpaket innen', '3D-Optik-Dekore & aufgewertete Sitzbezüge'],
            ru: ['Диски 17" и хромированная окантовка окон', 'Комфортная подвеска и контурная подсветка', 'Объёмный декор панели и улучшенная обивка']
          }
        },
        {
          id: 'sport',
          tierClass: 'tier-6',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Sport', de: 'Sport', ru: 'Sport' },
          delta: { en: '+€500 – €900', de: '+500 – 900 €', ru: '+€500 – €900' },
          isSweetSpot: true,
          summary: {
            en: 'Best used A3 8V sweet spot — replaced Ambition with bolstered sports seats, 3-spoke wheel, Audi Drive Select, and strong resale.',
            de: 'Bester Gebraucht-Sweet-Spot: löste Ambition ab und bringt Sportsitze, 3-Speichen-Lenkrad, Audi Drive Select und besten Wiederverkauf.',
            ru: 'Оптимальный выбор: цепкие спорткресла, 3-спицевый руль, Audi Drive Select и высокая ликвидность.'
          },
          highlights: {
            en: ['Supportive sports seats & 3-spoke leather wheel', 'Audi Drive Select & 17" 5-arm alloys', '15 mm sports suspension (or standard option)'],
            de: ['Konturierte Sportsitze & 3-Speichen-Sportlenkrad', 'Audi Drive Select & 17"-5-Arm-Alufelgen', 'Sportfahrwerk (-15 mm, oft auch abwählbar)'],
            ru: ['Спортивные сиденья и 3-спицевый кожаный руль', 'Система Audi Drive Select и диски 17"', 'Спортивная подвеска (-15 мм, возможен стандарт)']
          }
        },
        {
          id: 's-line',
          tierClass: 'tier-7',
          tier: { en: 'Top Sport', de: 'Top-Sport', ru: 'Топ-версия' },
          name: { en: 'S line', de: 'S line', ru: 'S line' },
          delta: { en: '+€1,200 – €2,100', de: '+1.200 – 2.100 €', ru: '+€1 200 – €2 100' },
          isSweetSpot: false,
          summary: {
            en: 'Flagship visual package adding aggressive S line bumpers, 18" wheels, black headliner, and half-leather sports seats.',
            de: 'Markanteste Top-Linie mit S-line-Schürzen, 18"-Felgen, schwarzem Dachhimmel und Teilleder-Sportsitzen.',
            ru: 'Максимальный спортивный образ: обвес S line, диски 18", чёрный потолок и комбинированный салон кожа/ткань.'
          },
          highlights: {
            en: ['S line exterior aero kit & 18" alloys', 'Part-leather / Alcantara S line sports seats', 'Flat-bottom wheel & 25 mm S line sports suspension'],
            de: ['S-line-Exterieurpaket & 18"-Leichtmetallräder', 'Teilleder-/Alcantara-Sportsitze mit S-Prägung', 'Abgeflachtes Lenkrad & S-line-Sportfahrwerk (-25 mm)'],
            ru: ['Аэродинамический обвес S line и колёса 18"', 'Комбинированные кресла кожа/алькантара S line', 'Скошенный руль и жёсткая подвеска (-25 мм)']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Audi Drive Select & Sports Seats', de: 'Audi Drive Select & Sportsitze', ru: 'Audi Drive Select и спортивные кресла' }, vals: ['no', 'no', 'std', 'no', 'std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['opt', 'opt', 'opt', 'std', 'std', 'std'] },
        { feature: { en: '17" / 18" Alloy Wheels', de: '17"- / 18"-Leichtmetallfelgen', ru: 'Литые диски 17" / 18"' }, vals: ['no', 'opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'LED / Matrix LED Headlights (2016+)', de: 'LED- / Matrix-LED-Scheinwerfer (ab 2016)', ru: 'Фары LED / Matrix LED (с 2016 г.)' }, vals: ['no', 'no', 'no', 'opt', 'opt', 'opt'] },
        { feature: { en: 'Audi Virtual Cockpit (2016+)', de: 'Audi Virtual Cockpit (ab 2016)', ru: 'Приборная панель Virtual Cockpit (с 2016 г.)' }, vals: ['no', 'no', 'no', 'opt', 'opt', 'opt'] },
        { feature: { en: 'Heated Front Seats & Parking Sensors', de: 'Sitzheizung vorn & Einparkhilfe', ru: 'Подогрев сидений и парктроники' }, vals: ['opt', 'std', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Sports Suspension (-15 / -25 mm)', de: 'Sportfahrwerk (-15 / -25 mm)', ru: 'Спортивная подвеска (-15 / -25 мм)' }, vals: ['no', 'no', 'std', 'no', 'std', 'std'] },
        { feature: { en: 'MMI Navigation Plus + Smartphone Interface', de: 'MMI Navigation Plus + Smartphone-Interface', ru: 'MMI Navigation Plus + Apple CarPlay/Android Auto' }, vals: ['opt', 'opt', 'opt', 'opt', 'opt', 'opt'] }
      ],
      interiorNotes: {
        en: [
          'Minimalist layout with knurled aluminium climate rings and solid rotary MMI dial still feels more premium than many 2020s touch-only cabins.',
          'Standard Sportback boot holds 380 L with a dual-height floor, though rear middle-seat comfort is limited by the tall transmission tunnel.',
          'Check the motorised 7" center screen pops up smoothly and quietly — worn ribbon cables or plastic gears can cause flickering.'
        ],
        de: [
          'Minimalistisches Cockpit mit Aluminium-Lüftungsdüsen und sattem MMI-Drehdrücksteller wirkt hochwertiger als viele moderne Touch-Innenräume.',
          'Der Sportback-Kofferraum fasst 380 Liter mit doppeltem Ladeboden; der mittlere Fondplatz ist durch den hohen Mitteltunnel eher schmal.',
          'Ausfahrbaren 7"-Zentralbildschirm mehrfach ein- und ausfahren — verschlissene Flachbandkabel können Flackern verursachen.'
        ],
        ru: [
          'Минималистичная передняя панель с алюминиевыми дефлекторами и шайбой MMI выглядит дороже многих современных сенсорных салонов.',
          'Обычный багажник Sportback вмещает 380 л с двойным полом, но сзади по центру мешает высокий тоннель.',
          'Проверить плавный подъём и опускание 7-дюймового экрана MMI без подёргиваний и мерцания шлейфа.'
        ]
      },
      cabinByPowertrain: {
        'e-tron': {
          en: 'A3 Sportback e-tron features a dedicated EV / Hybrid power meter replacing the tachometer, EV mode button on the dash, charging port hidden behind the front Audi grille rings, and an under-floor battery shrinking the boot from 380 L to 280 L.',
          de: 'Der A3 Sportback e-tron tauscht den Drehzahlmesser gegen ein Powermeter, bietet eine EV-Taste in der Mittelkonsole, den Ladeanschluss hinter den Audi-Ringen sowie die Batterie unter dem Ladeboden (Kofferraum schrumpft auf 280 L).',
          ru: 'A3 Sportback e-tron получил экономайзер-поверметр вместо тахометра, кнопку режимов EV, зарядный лючок за кольцами Audi на решётке и батарею под полом, сократившую багажник с 380 до 280 л.'
        },
        '40-e-tron': {
          en: '40 e-tron combines the 2016+ facelift Virtual Cockpit hybrid power gauge and Smartphone Interface with the hidden front-grille AC charge port and battery-reduced 280 L boot (40 L fuel tank).',
          de: 'Der 40 e-tron kombiniert das Facelift-Cockpit (Virtual Cockpit mit Hybrid-Anzeige) mit dem versteckten Front-Ladeanschluss und dem akkubedingt auf 280 Liter reduzierten Kofferraum (40-L-Tank).',
          ru: '40 e-tron сочетает обновлённую приборку Virtual Cockpit с гибридной графикой, зарядку под эмблемой спереди и уменьшенный до 280 л багажник (бак 40 л).'
        },
        '1.4-g-tron': {
          en: '1.4 g-tron adds dual fuel-level gauges (CNG + full 50 L petrol) in the instrument cluster and a CNG filler next to the petrol cap, while under-floor composite gas cylinders reduce boot space to 280 L.',
          de: 'Der 1.4 g-tron zeigt im Kombiinstrument getrennte Tankanzeigen für Erdgas und vollen 50-L-Benzintank; die Unterflur-Gastanks verringern den Kofferraum auf 280 Liter.',
          ru: 'Версия 1.4 g-tron оснащена двойным указателем уровня топлива (метан + 50 л бензина) и заправочным штуцером под лючком; баллоны под полом сокращают багажник до 280 л.'
        },
        '30-g-tron': {
          en: 'Late 30 g-tron upgrades to three CNG tanks (17.3 kg) for ~490 km gas range with dual CNG/petrol cluster readouts, but shrinks the petrol reserve to just 9 L and trims boot volume to 280 L.',
          de: 'Der späte 30 g-tron trägt drei CNG-Tanks (17,3 kg) für rund 490 km Gas-Reichweite samt Doppel-Anzeige, schrumpft den Benzinvorrat aber auf nur 9 Liter Reserve und den Kofferraum auf 280 Liter.',
          ru: 'Поздний 30 g-tron получил три баллона (17,3 кг метана, запас около 490 км), однако бензиновый резерв урезан до 9 л, а объём багажника — до 280 л.'
        },
        petrol: {
          en: 'Petrol A3 8V models keep the full 380 L dual-floor boot; ≤150 HP engines pair with 6-MT or dry 7-speed S tronic (DQ200), whereas 180–190 HP models upgrade to multi-link rear suspension and tougher wet 6/7-speed S tronic.',
          de: 'Benziner behalten den vollen 380-Liter-Kofferraum mit doppeltem Boden; bis 150 PS gibt es 6-Gang oder trockenes 7-Gang-DSG, ab 180 PS Mehrlenker-Hinterachse und nasses 6/7-Gang-DSG.',
          ru: 'Бензиновые версии сохраняют полный багажник 380 л с двойным полом; моторы до 150 л.с. идут с 6-МКПП или сухой 7-DSG, а 180–190 л.с. — с многорычажкой и мокрой DSG.'
        },
        diesel: {
          en: 'Diesel A3 8V models preserve the full 380 L cargo bay and quiet MQB cabin insulation; 1.6 TDI automatics use the dry 7-speed DQ200, while 150–184 HP 2.0 TDI automatics get the durable wet 6/7-speed S tronic.',
          de: 'Diesel-Modelle bieten den vollen 380-Liter-Kofferraum und ruhige MQB-Dämmung; der 1.6 TDI Automatik nutzt das trockene 7-DSG, der 2.0 TDI (150–184 PS) das robuste nasse 6/7-DSG.',
          ru: 'Дизельные версии сохраняют 380 л багажника и отличную шумоизоляцию MQB; 1.6 TDI с автоматом оснащён сухой 7-DSG, а 2.0 TDI (150–184 л.с.) — крепкой мокрой 6/7-DSG.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2016 facelift introduced the 12.3" Audi Virtual Cockpit digital gauge cluster with full-screen navigation and customizable views.',
          'Optional Matrix LED headlights with dynamic turn signals replaced pre-facelift Xenon units for dramatically brighter night visibility.',
          'Updated MMI infotainment gained Audi Smartphone Interface (Apple CarPlay & Android Auto) and simplified rotary menu logic.',
          'Sharper Singleframe grille, angular bumpers, and Euro 6d-TEMP engine updates (1.5 TFSI COD, 30/35/40 badging) modernized the lineup.'
        ],
        de: [
          'Das Facelift 2016 brachte das digitale 12,3"-Audi Virtual Cockpit mit Vollbild-Navigationskarte und frei wählbaren Ansichten.',
          'Optionale LED- und Matrix-LED-Scheinwerfer samt dynamischem Blinker lösten älteres Xenon mit deutlich besserer Ausleuchtung ab.',
          'Überarbeitetes MMI mit Audi Smartphone Interface (Apple CarPlay & Android Auto) und vereinfachter Menüführung.',
          'Geschärfter Singleframe-Grill, neue Schürzen und moderne Euro-6d-TEMP-Motoren (1.5 TFSI COD sowie 30/35/40-Nomenklatur).'
        ],
        ru: [
          'Рестайлинг 2016 года добавил цифровую приборную панель Audi Virtual Cockpit 12,3" с полноэкранной картой навигации.',
          'Опциональные светодиодные и матричные фары Matrix LED с динамическими поворотниками заменили прежний ксенон.',
          'Обновлённая система MMI получила поддержку Apple CarPlay и Android Auto и упрощённую логику меню.',
          'Острые грани решётки Singleframe, новые бамперы и переход на моторы Euro 6d-TEMP (1.5 TFSI COD и индексы 30/35/40).'
        ]
      }
    }
  }
});