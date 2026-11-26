// AutoDuel Vehicle Data — mercedes-c-class-w204
registerAutoDuelVehicle({
  roster: {
    id: 'mercedes-c-class-w204',
    number: '09',
    carType: 'sedan',
    gridOrder: 9,
    gridLabel: 'Mercedes C-Class',
    yearMake: '2007-2015 MERCEDES-BENZ',
    shortTitle: 'C-CLASS (W204)',
    fullName: '2007-2015 Mercedes-Benz C-Class (W204)',
    rarityClass: 'rarity-dependable',
    drivetrain: 'RWD',
    image: 'assets/mercedes-c-class-w204.webp',
    defaultEngineId: 'c220-cdi-om651',
    sharedBuyerFit: {
      cards: {
        w204CabinQuality: {
          en: 'You appreciate solid German build quality: Firm switchgear, planted doors, and timeless Mercedes cabin materials make daily drives feel special.',
          de: 'Du schätzt solide deutsche Wertigkeit: Schwere Türen, satte Schalterhaptik und zeitlose Materialien geben dir echtes Mercedes-Gefühl.',
          ru: 'Ты ценишь добротное немецкое качество: Плотные двери, чёткие кнопки и качественная отделка создают настоящее ощущение Mercedes.'
        },
        w204RwdTurn: {
          en: 'You want a surprisingly nimble sedan: Rear-wheel drive gives a tight 10.8 m turning circle and effortless Autobahn stability.',
          de: 'Du willst eine handliche Limousine: Der Heckantrieb sorgt für einen kleinen 10,8-m-Wendekreis und ruhigen Geradeauslauf auf der Autobahn.',
          ru: 'Тебе нужен манёвренный седан: Задний привод даёт малый разворот (10,8 м) и отличную устойчивость на трассе.'
        },
        w204AutoSmooth: {
          en: 'You want a proven torque-converter automatic: The 5G-Tronic or 7G-Tronic Plus shifts smoothly without dry dual-clutch jerkiness.',
          de: 'Du willst eine bewährte Wandlerautomatik: Die 5G- oder 7G-Tronic Plus schaltet sanft und hält bei 60.000-km-Ölwechseln sehr lange.',
          ru: 'Тебе нужен надёжный классический автомат: 5G-Tronic или 7G-Tronic Plus переключаются плавно и служат долго при смене масла.'
        },
        w204PowerfulCruiser: {
          en: 'You want strong power in a relaxed cruiser: Effortless acceleration and passing muscle without the stiff suspension of a hot hatch.',
          de: 'Du willst kräftige Leistung im entspannten Cruiser: Souveräner Durchzug und Überholreserven ohne die harte Federung eines Sportwagens.',
          ru: 'Тебе нужна мощь в спокойном комфортном кузове: Уверенный разгон и запас тяги на обгонах без жёсткой спортивной подвески.'
        },
        w204KompressorCare: {
          en: 'You want zero timing-chain vigilance: Even with simpler port injection, the supercharged M271 simplex chain needs cold-start checks.',
          de: 'Du willst keinerlei Steuerketten-Kontrolle: Trotz Saugrohreinspritzung verlangt die dünne M271-Steuerkette beim Kaltstart Aufmerksamkeit.',
          ru: 'Ты не хочешь следить за цепью ГРМ: Даже при простом впрыске тонкая цепь компрессорного M271 требует проверки на холодную.'
        },
        w204FourCylThirst: {
          en: 'You want sub-7 L/100km city fuel bills: Supercharged or turbo 4-cylinder petrols average 8–9.5 L/100km in mixed urban driving.',
          de: 'Du erwartest unter 7 L/100km im Alltag: Die 4-Zylinder-Benziner verbrauchen im Stadt- und Mischverkehr real meist 8–9,5 L/100km.',
          ru: 'Ты ждёшь расхода до 7 л/100 км: Бензиновые 4-цилиндровые версии в городе и смешанном цикле берут 8–9,5 л/100 км.'
        },
        w204CgiChainRisk: {
          en: 'You want zero timing-chain surprises: Early M271 CGI turbo engines can need a €1,800–€2,600 timing chain and cam-gear job around 100k–140k km.',
          de: 'Du willst keine teuren Steuerketten-Risiken: Frühe M271-CGI-Turbos brauchen oft zwischen 100.000 und 140.000 km Kette und Versteller (1.800–2.600 €).',
          ru: 'Ты не хочешь рисковать дорогой заменой цепи: На ранних турбо M271 CGI цепь и звёзды часто просят €1 800–2 600 к 100–140 тыс. км.'
        },
        w204M274Updated: {
          en: 'You want a late facelift petrol without M271 chain woes: The 2012+ 1.6L M274 turbo fixes the earlier chain issues with crisp low-end torque.',
          de: 'Du willst einen späten Facelift-Benziner ohne M271-Kettenangst: Der 2012+ 1.6L M274 behebt die früheren Kettenprobleme souverän.',
          ru: 'Ты ищешь свежий рестайлинг без проблем цепи M271: Мотор 1.6 M274 (с 2012 г.) избавился от прежней слабости ГРМ.'
        },
        w204M274CoolantWatch: {
          en: 'You want zero cooling-system seepage: The M274 plastic thermostat housing and water pump can weep coolant past 100,000 km.',
          de: 'Du willst keinerlei Kühlmittel-Undichtigkeiten: Kunststoff-Thermostat und Wasserpumpe am M274 schwitzen ab 100.000 km gelegentlich.',
          ru: 'Ты не хочешь следить за охлаждением: Пластиковый термостат и помпа M274 иногда подтекают после 100 000 км.'
        },
        w204V6Refinement: {
          en: 'You love silky six-cylinder refinement: Smooth V6 delivery and effortless cruising suit long-distance drivers who value quietness.',
          de: 'Du liebst laufruhige Sechszylinder-Kultur: Seidiger V6-Lauf und souveräner Durchzug machen lange Etappen extrem entspannt.',
          ru: 'Ты любишь бархатную тягу V6: Плавный 6-цилиндровый мотор дарит комфорт и тишину на любой скорости.'
        },
        w204EarlyV6Sprocket: {
          en: 'You want to skip serial-number checks on early cars: 2007 M272 V6 builds need verification that the balance-shaft sprocket was updated.',
          de: 'Du willst bei frühen Baujahren nichts prüfen müssen: Bei 2007er M272-V6 muss das Ausgleichswellen-Kettenrad auf Aktualisierung geprüft werden.',
          ru: 'Ты не хочешь проверять ранние выпуски: На V6 M272 2007 года важно убедиться в обновлённой шестерне балансирного вала.'
        },
        w204CgiPiezoCost: {
          en: 'You want cheap direct-injection parts: Stratified-charge C 350 CGI piezo injectors and NOx sensors are pricey if they fail.',
          de: 'Du willst günstige Einspritzteile: Piezo-Injektoren und NOx-Sensoren des C 350 CGI gehen im Defektfall spürbar ins Geld.',
          ru: 'Ты не хочешь дорогих форсунок: Пьезофорсунки и датчики NOx на C 350 CGI стоят недёшево при замене.'
        },
        w204M276Tensioner: {
          en: 'You want zero cold-start checks: 2011–2012 M276 V6 builds may need updated chain tensioner check-valves if a brief startup rattle occurs.',
          de: 'Du willst keinerlei Kaltstart-Checks: Frühe M276-V6 (2011–2012) brauchen bei kurzem Startrasseln die nachgerüsteten Rückschlagventile.',
          ru: 'Ты не хочешь проверок на холодную: Ранним M276 (2011–2012) при коротком стуке на пуске нужны обратные клапаны натяжителей.'
        },
        w204Om646Legend: {
          en: 'You want 400,000+ km taxi-proven diesel durability: The iron-block OM646 with front duplex chain outlasts most modern rivals.',
          de: 'Du willst echte 400.000+ km Taxi-Haltbarkeit: Der Grauguss-OM646 mit vorderer Duplex-Kette gehört zu den langlebigsten Dieseln seiner Zeit.',
          ru: 'Тебе нужна выносливость уровня 400 000+ км: Чугунный OM646 с передней двухрядной цепью переживает большинство конкурентов.'
        },
        w204C180CdiGentle: {
          en: 'You want thrifty fleet-proven economy: The detuned 120 HP 2.1L OM651 runs under minimal thermal stress for huge highway mileage.',
          de: 'Du willst extrem sparsame Dauerhaltbarkeit: Der gedrosselte 120-PS-OM651 läuft thermisch sehr entspannt für hohe Laufleistungen.',
          ru: 'Тебе нужна максимальная экономичность: Дефорсированный 120-сильный OM651 работает с минимальной нагрузкой на ресурс.'
        },
        w204Om651Torque: {
          en: 'You cover fast Autobahn miles: Twin-stage OM651 torque (360–400 Nm) pairs low fuel burn with effortless 7G-Tronic cruising.',
          de: 'Du fährst viel Autobahn: Der durchzugsstarke OM651 (360–400 Nm) verbindet niedrigen Verbrauch mit souveränem 7G-Tronic-Komfort.',
          ru: 'Ты часто ездишь по трассе: Тяговитый OM651 (360–400 Н·м) сочетает скромный расход с плавностью автомата 7G-Tronic.'
        },
        w204C250CdiTorque: {
          en: 'You want 500 Nm pull with 4-cylinder economy: Twin-turbo 204 HP torque overtakes effortlessly while sipping under 6 L/100km.',
          de: 'Du willst 500 Nm Durchzug bei 4-Zylinder-Verbrauch: Der 204-PS-Bi-Turbo überholt souverän und bleibt unter 6 L/100km.',
          ru: 'Ты хочешь тягу 500 Н·м при расходе 4 цилиндров: Би-турбо на 204 л.с. обгоняет уверенно и укладывается в ~6 л/100 км.'
        },
        w204Om651RearChain: {
          en: 'You want simple timing-chain access: OM651 uses a rear-mounted simplex chain, and 2009–2011 builds need proof of the injector recall.',
          de: 'Du willst einfache Kettenwartung: Beim OM651 sitzt die Steuerkette hinten und 2009–2011er Modelle brauchen den Injektor-Rückruf-Beleg.',
          ru: 'Ты хочешь простого доступа к ГРМ: У OM651 цепь стоит сзади, а на машинах 2009–2011 гг. нужна проверка отзыва по форсункам.'
        },
        w204DieselClatter: {
          en: 'You want whisper-quiet urban idle: 4-cylinder diesel clatter is noticeable when cold compared to V6 or petrol C-Class models.',
          de: 'Du erwartest flüsterleisen Leerlauf: Das 4-Zylinder-Dieselnageln ist kalt deutlich hörbarer als beim V6 oder Benziner.',
          ru: 'Ты ждёшь тишины на холостых: 4-цилиндровый дизель на холодную работает заметно громче бензиновых версий и V6.'
        },
        w204RearSubframeRust: {
          en: 'You never want to inspect underbody rust: W204 rear axle subframes are notorious for hidden salt corrosion and must be checked on a lift.',
          de: 'Du willst dich nie mit Unterbodenrost befassen: Der hintere W204-Achsträger rostet oft unbemerkt und muss auf der Bühne geprüft werden.',
          ru: 'Ты не хочешь проверять днище на ржавчину: Задний подрамник W204 склонен к скрытой коррозии и требует осмотра на подъёмнике.'
        },
        w204TightRearSpace: {
          en: 'You carry tall adults or bulky strollers daily: Rear knee room is snugger than a Mondeo and split-folding seats were often optional.',
          de: 'Du brauchst viel Fond- und Familienplatz: Knieraum hinten ist knapper als im Mondeo und umklappbare Lehnen waren oft aufpreispflichtig.',
          ru: 'Ты часто возишь взрослых сзади или коляски: Места для ног меньше, чем в Mondeo, а складная спинка была опцией.'
        },
        w204V6RunningCosts: {
          en: 'You want low fuel and tax bills: Six-cylinder fuel burn (8–11 L/100km), 8.5L oil fills, and higher V6/insurance costs add up.',
          de: 'Du achtest streng auf Verbrauch und Steuern: V6-Durst, 8,5 L Ölvolumen und höhere Steuern sowie Werkstattkosten summieren sich.',
          ru: 'Ты строго экономишь на топливе и налогах: Расход V6, 8,5 л масла на ТО и повышенные налоги заметно дороже 4-цилиндровых версий.'
        },
        w204Euro4DieselZones: {
          en: 'You drive into strict Euro 5/6 diesel city zones: Older pre-2009 Euro 4 OM646 diesels face urban access restrictions.',
          de: 'Du fährst in strenge Umweltzonen: Ältere Euro-4-OM646-Diesel (vor 2009) stoßen in manchen Innenstädten an Einfahrtsgrenzen.',
          ru: 'Ты часто въезжаешь в строгие эко-зоны городов: Дизели OM646 стандарта Евро-4 могут иметь ограничения на въезд.'
        }
      }
    },
    buyerFitGroups: {
      kompressor: {
        summary: {
          en: 'A solid, refined rear-drive Mercedes cruiser with simple port injection — inspect the M271 timing chain and rear subframe.',
          de: 'Ein solider, kultivierter Hecktriebler mit Saugrohreinspritzung — Steuerkette und hinteren Achsträger genau prüfen.',
          ru: 'Добротный заднеприводный Mercedes с простым впрыском — проверьте цепь ГРМ M271 и задний подрамник.'
        },
        ideal: ['w204CabinQuality', 'w204RwdTurn', 'w204AutoSmooth', 'globalPetrolCityZones'],
        skip: [
          'w204KompressorCare',
          'w204FourCylThirst',
          'w204RearSubframeRust',
          'w204TightRearSpace'
        ]
      },
      'cgi-4': {
        summary: {
          en: 'A punchy, comfortable executive sedan — great once M271 timing chain history and rear subframe health are verified.',
          de: 'Eine durchzugsstarke, komfortable Business-Limousine — stark, sofern Steuerkette und Achsträger belegt bzw. rostfrei sind.',
          ru: 'Динамичный и комфортный бизнес-седан — хорош при подтверждённой замене цепи M271 и живом подрамнике.'
        },
        ideal: ['w204CabinQuality', 'w204RwdTurn', 'w204AutoSmooth', 'globalPetrolCityZones'],
        skip: ['w204CgiChainRisk', 'w204FourCylThirst', 'w204RearSubframeRust', 'w204TightRearSpace']
      },
      'v6-petrol': {
        summary: {
          en: 'A silky, effortless six-cylinder highway cruiser — ideal if you value refinement and relaxed power over fuel and tax budgets.',
          de: 'Ein seidiger Sechszylinder-Gleiter — ideal, wenn dir Laufkultur und entspannte Kraft wichtiger sind als Sprit- und Steuerkosten.',
          ru: 'Плавный 6-цилиндровый седан для трассы — отличный выбор, если тишина и мощь важнее расходов на топливо и налог.'
        },
        ideal: ['w204V6Refinement', 'w204PowerfulCruiser', 'w204CabinQuality', 'globalPetrolCityZones'],
        skip: [
          'w204V6RunningCosts',
          'w204EarlyV6Sprocket',
          'w204RearSubframeRust',
          'w204TightRearSpace'
        ]
      },
      'om646-diesel': {
        summary: {
          en: 'One of Mercedes’ toughest high-mileage diesels — built for 400,000+ km distance runs if city diesel bans don’t affect you.',
          de: 'Einer der robustesten Mercedes-Langläufer überhaupt — gebaut für 400.000+ km, sofern Euro 4 für dich passt.',
          ru: 'Один из самых неубиваемых дизелей Mercedes — создан для пробегов 400 000+ км, если не мешает Евро-4.'
        },
        ideal: ['w204Om646Legend', 'w204AutoSmooth', 'w204CabinQuality', 'globalDieselLongRange'],
        skip: [
          'globalDieselShortTripRisk',
          'w204Euro4DieselZones',
          'w204RearSubframeRust',
          'w204TightRearSpace'
        ]
      },
      'om651-diesel': {
        summary: {
          en: 'A frugal, high-torque Autobahn mile-eater — ideal for long commutes once recall injectors and rear-chain health are checked.',
          de: 'Ein sparsamer, drehmomentstarker Autobahn-Kilometerfresser — stark auf Langstrecke mit geprüften Injektoren und Achsträger.',
          ru: 'Экономичный и тяговитый трассовый лайнер — идеален для дальних поездок при проверенных форсунках и цепи.'
        },
        ideal: ['w204Om651Torque', 'w204AutoSmooth', 'w204CabinQuality', 'w204RwdTurn'],
        skip: [
          'globalDieselShortTripRisk',
          'w204Om651RearChain',
          'w204DieselClatter',
          'w204RearSubframeRust'
        ]
      },
      'v6-diesel': {
        summary: {
          en: 'Effortless V6 diesel muscle in a relaxed luxury cruiser — built for fast highway touring if you budget for V6 upkeep.',
          de: 'Souveräne V6-Dieselkraft im entspannten Cruiser — ideal für schnelle Langstrecken bei entsprechendem Wartungsbudget.',
          ru: 'Мощный дизельный V6 в комфортном кузове — создан для быстрой трассы при готовности к обслуживанию V6.'
        },
        ideal: ['w204V6Refinement', 'w204PowerfulCruiser', 'w204CabinQuality', 'globalDieselLongRange'],
        skip: [
          'w204V6RunningCosts',
          'globalDieselShortTripRisk',
          'w204RearSubframeRust',
          'w204TightRearSpace'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Galvanized Body Panels — Known Rear Subframe Rust',
          strengths: [
            'Galvanized Body Panels keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Always inspect the rear axle subframe for hidden structural corrosion (often covered by Mercedes goodwill).',
            'Known Rear Subframe Rust.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Verzinkte Außenhaut — Hinterachsträger-Rost bekannt',
          strengths: [
            'Verzinkte Außenhaut hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Unbedingt den hinteren Achsträger auf Durchrostung prüfen (häufig Kulanzthema bei Mercedes).',
            'Hinterachsträger-Rost bekannt.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Оцинкованные панели кузова — Коррозия заднего подрамника',
          strengths: [
            'Оцинкованные панели кузова надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Обязательно проверьте задний подрамник на подъёмнике на предмет сквозной коррозии.',
            'Коррозия заднего подрамника.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Bank-Vault Switchgear Feel',
          strengths: [
            'Bank-Vault Switchgear Feel ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Bank-vault switchgear quality, though rear knee space and center tunnel feel snug.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Solide Haptik & Drehregler',
          strengths: [
            'Solide Haptik & Drehregler sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Extrem solide Schalterhaptik, aber etwas knapper Knieraum im Fond durch Kardantunnel.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Эталонная сборка и кнопки',
          strengths: [
            'Эталонная сборка и кнопки обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Монументальное качество кнопок, но сзади тесновато в коленях из-за тоннеля.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '10.8 m Tight RWD Turn',
          strengths: [
            '10.8 m Tight RWD Turn makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Tight 10.8 m RWD turning circle and upright pillars make maneuvering surprisingly easy.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: 'Enge 10,8 m RWD-Wendekreis',
          strengths: [
            'Enge 10,8 m RWD-Wendekreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Kleiner 10,8-m-Heckantriebs-Wendekreis und klare Konturen erleichtern das Rangieren.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Разворот 10,8 м (задний привод)',
          strengths: [
            'Разворот 10,8 м (задний привод) делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Малый радиус разворота (10,8 м) и чёткие габариты упрощают парковку.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2007/09) — 7 Airbags + Pre-Safe + Attention',
          strengths: [
            'Euro NCAP 5★ (2007/09) provides solid passive crash protection for its class and era.',
            '7 Airbags + Pre-Safe + Attention standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2007/09) — 7 Airbags + Pre-Safe + Müdigkeit',
          strengths: [
            'Euro NCAP 5★ (2007/09) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            '7 Airbags + Pre-Safe + Müdigkeit serienmäßig bzw. weit verbreitet.'
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
          headline: 'Euro NCAP 5★ (2007/09) — 7 подушек + Pre-Safe',
          strengths: [
            'Euro NCAP 5★ (2007/09) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '7 подушек + Pre-Safe входят в оснащение большинства версий.'
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
          headline: 'Great Tall-Driver Front Fit',
          strengths: [
            'Great Tall-Driver Front Fit keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Tight Rear Legroom & Tunnel.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Viel Platz für große Fahrer',
          strengths: [
            'Viel Platz für große Fahrer sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Knapper Fond & Kardantunnel.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Удобно высоким водителям',
          strengths: [
            'Удобно высоким водителям обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Тесно сзади и высокий тоннель.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '475L Sedan Boot',
          strengths: [
            'Practical 475L sedan boot; note split-folding rear seats were optional on base trims.',
            'Split Rear Seats Often Optional improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '475L Stufenheck-Kofferraum',
          strengths: [
            'Praktischer Nutzwert: 475 L Limousinen-Kofferraum (geteilte Rückbank war oft aufpreispflichtig).',
            'Umklappbare Bank oft Extra erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник седана 475 л',
          strengths: [
            'Практичный объём: багажник седана 475 л (складная спинка была опцией на базовых версиях).',
            'Складная спинка — опция добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Balanced RWD Chassis',
          strengths: [
            'Balanced RWD chassis and strong Autobahn brakes offer rock-solid composure above 180 km/h.',
            '10.8 m Tight Turning Circle.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Ausgewogener Heckantrieb',
          strengths: [
            'Ausbalanciertes Heckantriebs-Fahrwerk und standfeste Bremsen glänzen bei Autobahntempo.',
            '10,8 m kleiner Wendekreis.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Сбалансированный задний привод',
          strengths: [
            'Сбалансированное заднеприводное шасси и мощные тормоза созданы для автобанов.',
            'Малый радиус разворота 10,8 м.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 35.5 m — Strong Autobahn Stopping Power',
          strengths: [
            '100–0 km/h: 35.5 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 35,5 m — Starke Autobahn-Verzögerung',
          strengths: [
            '100–0 km/h: 35,5 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 35,5 м — Уверенное торможение с высоких скоростей',
          strengths: [
            '100–0 км/ч: 35,5 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '1,800 kg Braked Tow • 535 kg Payload',
          strengths: ['1,800 kg Braked Tow and 535 kg Payload handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '1.800 kg Anhängelast • 535 kg Zuladung',
          strengths: [
            '1.800 kg Anhängelast und 535 kg Zuladung bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Прицеп до 1 800 кг • Грузоподъёмность 535 кг',
          strengths: [
            'Прицеп до 1 800 кг и Грузоподъёмность 535 кг закрывают повседневные задачи по загрузке.'
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
          headline: 'Price Bottomed Out',
          strengths: [
            'Price Bottomed Out helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Wertverlust am Boden',
          strengths: [
            'Wertverlust am Boden sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Минимальная потеря цены',
          strengths: [
            'Минимальная потеря цены поддерживает стабильный спрос на вторичном рынке.',
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
            headline: 'Bulletproof 5-Speed Auto / 6-MT — Simple 722.6 Converter Box',
            strengths: [
              'Bulletproof 5-Speed Auto / 6-MT matches this powertrain well for everyday driving.',
              'Simple 722.6 Converter Box.'
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
            headline: 'Unverwüstliche 5G-AT / 6-Gang — Robuster Wandlerautomat',
            strengths: [
              'Unverwüstliche 5G-AT / 6-Gang passt gut zur Motorcharakteristik im Alltag.',
              'Robuster Wandlerautomat.'
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
            headline: 'Неубиваемый 5-АКПП / 6-МКПП — Простой гидротрансформатор',
            strengths: [
              'Неубиваемый 5-АКПП / 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Простой гидротрансформатор.'
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
            headline: 'Solid CAN-Bus & Alternator',
            strengths: [
              'Solid CAN-Bus & Alternator keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Steering Lock (ELV).'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Stabiles CAN-Bordnetz',
            strengths: [
              'Stabiles CAN-Bordnetz sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Lenkradschloss (ELV) bekannt.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная шина CAN',
            strengths: [
              'Надёжная шина CAN упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Риск блокиратора руля (ELV).'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Agility Control Damping',
            strengths: [
              'Agility Control Damping delivers pleasant everyday composure.',
              'Quiet 67 dB Autobahn Cabin.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Agility-Control-Fahrwerk',
            strengths: [
              'Agility-Control-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser 67-dB-Autobahnkomfort.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Адаптивная подвеска Agility',
            strengths: [
              'Адаптивная подвеска Agility обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон 67 дБ на трассе.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Cheap Aftermarket W204 Parts — Budget ~€800 Chain Refresh',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Budget ~€800 Chain Refresh.',
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige W204-Zubehörteile — Steuerkette (~800 €) einplanen',
            strengths: [
              'Günstige W204-Zubehörteile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Steuerkette (~800 €) einplanen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Много недорогих аналогов — Бюджет на замену цепи (~€800)',
            strengths: [
              'Много недорогих аналогов помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Бюджет на замену цепи (~€800).'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'petrol-7g': {
        transmissionDriveline: {
          en: {
            headline: '5-AT / 7G-Tronic Plus / 6-MT — Proven RWD / Opt. 4Matic',
            strengths: [
              '5-AT / 7G-Tronic Plus / 6-MT matches this powertrain well for everyday driving.',
              'Proven RWD / Opt. 4Matic.'
            ],
            watchouts: [
              '7G-Tronic needs fluid and filter changes every 60,000 km; old fluid causes harsh downshifts.',
              'Limp mode or a stuck gear usually points to a failed conductor-plate speed sensor.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '5G / 7G-Plus / 6-Gang — Bewährter Heck-/Allradantrieb',
            strengths: [
              '5G / 7G-Plus / 6-Gang passt gut zur Motorcharakteristik im Alltag.',
              'Bewährter Heck-/Allradantrieb.'
            ],
            watchouts: [
              '7G-Tronic braucht alle 60.000 km Öl- und Filterwechsel — altes Öl führt zu harten Rückschaltungen.',
              'Notlauf oder ein hängender Gang deuten meist auf einen defekten Drehzahlsensor der Leiterplatte.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '5-AT / 7G-Plus / 6-МКПП — Надёжный задний и полный привод',
            strengths: [
              '5-AT / 7G-Plus / 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Надёжный задний и полный привод.'
            ],
            watchouts: [
              'В 7G-Tronic менять масло и фильтр каждые 60 000 км — старое масло вызывает жёсткие понижения.',
              'Аварийный режим или зависание передачи обычно указывают на отказ датчика скорости на плате управления.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Facelift Electrics Improved',
            strengths: [
              'Facelift Electrics Improved keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check ELV Lock & Taillights.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Facelift-Elektrik verbessert',
            strengths: [
              'Facelift-Elektrik verbessert sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'ELV & Rückleuchten-Masse prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Улучшенная электрика рест.',
            strengths: [
              'Улучшенная электрика рест. упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Замок руля ELV и масса фонарей.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Agility Control Damping',
            strengths: [
              'Agility Control Damping delivers pleasant everyday composure.',
              'Quiet 67 dB Autobahn Cabin.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Agility-Control-Fahrwerk',
            strengths: [
              'Agility-Control-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser 67-dB-Autobahnkomfort.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Адаптивная подвеска Agility',
            strengths: [
              'Адаптивная подвеска Agility обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон 67 дБ на трассе.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Affordable Routine Oils & Pads — Expensive Chain & Cam Gears',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              'Expensive Chain & Cam Gears.',
              'Age-related wear on suspension bushings, exhaust flex-pipes, and brake discs/calipers still requires steady annual upkeep.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Normale Öl- & Bremsenpreise — Teure Kette & Nockenwellenräder',
            strengths: [
              'Normale Öl- & Bremsenpreise hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teure Kette & Nockenwellenräder.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Доступное мелкое ТО — Дорогая замена цепи и звёзд ГРМ',
            strengths: [
              'Доступное мелкое ТО помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогая замена цепи и звёзд ГРМ.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-7g': {
        transmissionDriveline: {
          en: {
            headline: '5-AT / 7G-Tronic Plus / 6-MT — Proven RWD / Opt. 4Matic',
            strengths: [
              '5-AT / 7G-Tronic Plus / 6-MT matches this powertrain well for everyday driving.',
              'Proven RWD / Opt. 4Matic.'
            ],
            watchouts: [
              '7G-Tronic needs fluid and filter changes every 60,000 km; old fluid causes harsh downshifts.',
              'Limp mode or a stuck gear usually points to a failed conductor-plate speed sensor.'
            ],
            beforeYouBuy: [
              'Demand service receipts for transmission fluid changes every 40,000–60,000 km.',
              'Test Reverse-to-Drive engagement when warm and creep gently uphill to confirm zero jerk or slip.'
            ]
          },
          de: {
            headline: '5G / 7G-Plus / 6-Gang — Bewährter Heck-/Allradantrieb',
            strengths: [
              '5G / 7G-Plus / 6-Gang passt gut zur Motorcharakteristik im Alltag.',
              'Bewährter Heck-/Allradantrieb.'
            ],
            watchouts: [
              '7G-Tronic braucht alle 60.000 km Öl- und Filterwechsel — altes Öl führt zu harten Rückschaltungen.',
              'Notlauf oder ein hängender Gang deuten meist auf einen defekten Drehzahlsensor der Leiterplatte.'
            ],
            beforeYouBuy: [
              'Nachweise für Getriebeölwechsel alle 40.000–60.000 km prüfen.',
              'Im warmen Zustand von R auf D schalten und am Hang sanft anrollen — ohne Ruckeln oder Verzögerung.'
            ]
          },
          ru: {
            headline: '5-AT / 7G-Plus / 6-МКПП — Надёжный задний и полный привод',
            strengths: [
              '5-AT / 7G-Plus / 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Надёжный задний и полный привод.'
            ],
            watchouts: [
              'В 7G-Tronic менять масло и фильтр каждые 60 000 км — старое масло вызывает жёсткие понижения.',
              'Аварийный режим или зависание передачи обычно указывают на отказ датчика скорости на плате управления.'
            ],
            beforeYouBuy: [
              'Запросить чеки о замене масла в коробке каждые 40 000–60 000 км.',
              'На прогретой машине проверить плавность переключения R–D и ровное трогание в горку без рывков.'
            ]
          }
        },
        electronicsReliability: {
          en: {
            headline: 'Facelift Electrics Improved',
            strengths: [
              'Facelift Electrics Improved keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Check ELV Lock & Taillights.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Facelift-Elektrik verbessert',
            strengths: [
              'Facelift-Elektrik verbessert sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'ELV & Rückleuchten-Masse prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Улучшенная электрика рест.',
            strengths: [
              'Улучшенная электрика рест. упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Замок руля ELV и масса фонарей.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Agility Control Damping',
            strengths: [
              'Agility Control Damping delivers pleasant everyday composure.',
              'Quiet 67 dB Autobahn Cabin.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Agility-Control-Fahrwerk',
            strengths: [
              'Agility-Control-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Leiser 67-dB-Autobahnkomfort.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Адаптивная подвеска Agility',
            strengths: [
              'Адаптивная подвеска Agility обеспечивает комфортную езду в повседневных поездках.',
              'Тихий салон 67 дБ на трассе.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Shared 2.1L OM651 Parts — 16" Tyres • Standard DPF Care',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: [
              '16" Tyres • Standard DPF Care.',
              'Plan a reserve for higher-mileage diesel wear parts such as dual-mass flywheel, clutch, injectors, or DPF cleaning.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstige 16-Zoll-Reifen — Normale OM651-Wartung',
            strengths: [
              'Günstige 16-Zoll-Reifen hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Normale OM651-Wartung.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Доступные шины 16" и расходники — Штатный сервис OM651',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: [
              'Штатный сервис OM651.',
              'На больших пробегах закладывайте бюджет на дизельные расходники: маховик, сцепление, форсунки или чистку DPF.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: 'Bulletproof 5-Speed Auto / 6-MT — Simple 722.6 Converter Box',
            strengths: [
              'Bulletproof 5-Speed Auto / 6-MT matches this powertrain well for everyday driving.',
              'Simple 722.6 Converter Box.'
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
            headline: 'Unverwüstliche 5G-AT / 6-Gang — Robuster Wandlerautomat',
            strengths: [
              'Unverwüstliche 5G-AT / 6-Gang passt gut zur Motorcharakteristik im Alltag.',
              'Robuster Wandlerautomat.'
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
            headline: 'Неубиваемый 5-АКПП / 6-МКПП — Простой гидротрансформатор',
            strengths: [
              'Неубиваемый 5-АКПП / 6-МКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Простой гидротрансформатор.'
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
            headline: 'Solid CAN-Bus & Alternator',
            strengths: [
              'Solid CAN-Bus & Alternator keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'Watch Steering Lock (ELV).'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Stabiles CAN-Bordnetz',
            strengths: [
              'Stabiles CAN-Bordnetz sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'Lenkradschloss (ELV) bekannt.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная шина CAN',
            strengths: [
              'Надёжная шина CAN упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Риск блокиратора руля (ELV).'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Supple W204 Suspension',
            strengths: [
              'Supple W204 Suspension delivers pleasant everyday composure.',
              'Balanced chassis damping keeps cruising settled and predictable on smooth roads.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.',
              'Audible Pre-FL Diesel Clatter.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Komfortables W204-Fahrwerk',
            strengths: [
              'Komfortables W204-Fahrwerk sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Auf gutem Asphalt liegt das Fahrwerk ruhig und berechenbar.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.',
              'Hörbares OM646-Nageln kalt.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Комфортная подвеска W204',
            strengths: [
              'Комфортная подвеска W204 обеспечивает комфортную езду в повседневных поездках.',
              'На ровном покрытии подвеска работает собранно и предсказуемо.'
            ],
            watchouts: [
              'Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.',
              'Дизель OM646 шумнее на холодную.'
            ],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Very Cheap Taxi-Hero Parts — Solenoid Injectors Easy To Fix',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Solenoid Injectors Easy To Fix.'
            ],
            watchouts: [
              'Budget for higher diesel wear items past 160,000 km (DPF cleaning, injectors, clutch/flywheel).',
              'Very Cheap Taxi-Hero Parts.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Sehr günstige Taxi-Ersatzteile — Magnet-Injektoren preiswert',
            strengths: [
              'Sehr günstige Taxi-Ersatzteile hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Magnet-Injektoren preiswert.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дешёвые такси-запчасти — Ремонтопригодные форсунки',
            strengths: [
              'Дешёвые такси-запчасти помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Ремонтопригодные форсунки.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspMultiLink',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLowMod',
      rideTuning: { en: 'Plush Executive (Agility)', de: 'Souverän (Agility Control)', ru: 'Благородная (Agility Control)' },
      highwayNoise: { en: '~66 dB · Executive Quiet', de: '~66 dB · Oberklasse-Ruhe', ru: '~66 дБ · Тишина бизнес-класса' },
      cabinMaterials: { en: 'Solid Mopf 2011+ Luxury', de: 'Solider Mopf-Premium-Mix', ru: 'Добротный премиум (Mopf)' },
      controls: '@physButtons',
      turningCircle: '10.8 m',
      visibility: { en: 'Classic 3-Box · Easy Corners', de: 'Klassisches Stufenheck · Gut', ru: 'Классический седан · Хорошо' },
      euroNcap: '★★★★★ (2007)',
      safetyTech: { en: '✓ ESP · ✓ 7 Airbags + PRE-SAFE', de: '✓ ESP · ✓ 7 Airbags + PRE-SAFE', ru: '✓ ESP · ✓ 7 подушек + PRE-SAFE' },
      rearRoom: { en: 'Snug Behind Tall Drivers', de: 'Eher kompakt im Fond', ru: 'Скромно за высоким водителем' },
      isofixEntry: { en: '✓ 2× ISOFIX · Classic Doors', de: '✓ 2× ISOFIX · Gute Türen', ru: '✓ 2× ISOFIX · Удобные двери' },
      bootVolume: '475 L / 1,350 L',
      seatUtility: { en: 'Opt. 60/40 Split Fold', de: 'Opt. 60/40 umklappbar', ru: 'Опц. спинка 60/40' },
      payloadRoof: '530 kg · 100 kg',
      driveline: { en: 'RWD (Opt. 4MATIC AWD)', de: 'Heckantrieb (Opt. 4MATIC)', ru: 'Задний привод (Опц. 4MATIC)' },
      chassisFeel: { en: 'Balanced RWD · Autobahn King', de: 'Ausgewogener Heckantrieb', ru: 'Баланс RWD · Король автобана' },
      tractionDiff: { en: 'RWD · ESP (Opt. 4MATIC)', de: 'Heckantrieb · ESP (Opt. 4MATIC)', ru: 'Задний привод · ESP (Опц. 4MATIC)' },
      braking1000: '~35.8 m',
      brakeSetup: '@discs4',
      valueRetention: '@retHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: { specs: [{ k: 'gearboxModel', v: { en: '5G-Tronic (722.6) / 7G-Tronic Plus (722.9) / 6-MT', de: '5G-Tronic (722.6) / 7G-Tronic Plus (722.9) / 6-Gang', ru: '5G-Tronic (722.6) / 7G-Tronic Plus (722.9) / 6-МКПП' } }, { k: 'shiftQuality', v: { en: 'Silky Longitudinal Automatics · 60,000 km ATF Flush Mandatory', de: 'Seidige Längs-Automatiken · 60.000-km-Ölspülung Pflicht', ru: 'Плавные продольные автоматы · Замена ATF каждые 60 000 км' } }], note: { en: 'Both the old-school 5G-Tronic and upgraded 2011+ 7G-Tronic Plus are durable when flushed every 60,000 km; avoid unserviced early 722.9 boxes.', de: 'Sowohl die unverwüstliche 5G-Tronic als auch die 7G-Tronic Plus ab 2011 halten ewig mit 60.000-km-Ölwechsel.', ru: 'И 5G-Tronic, и обновлённая 7G-Tronic Plus (2011+) служат долго при замене масла каждые 60 000 км.' } }, clutchDmf: '@clutchTorqueConv', driveline: { specs: [{ k: 'drivelineArch', v: { en: 'Longitudinal Rear-Wheel Drive (Optional 4MATIC AWD)', de: 'Längsmotor mit Heckantrieb (Optional 4MATIC Allrad)', ru: 'Продольный мотор и задний привод (Опционально 4MATIC)' } }, { k: 'transferCase', v: { en: 'Zero Torque Steer · Tight 10.8 m Turning Circle', de: 'Keine Antriebseinflüsse in der Lenkung · 10,8 m Wendekreis', ru: 'Чистый руль без силовых подруливаний · Разворот 10,8 м' } }], note: { en: 'True RWD balance delivers effortless Autobahn poise and a tighter turning circle than front-drive rivals.', de: 'Echter Heckantrieb sorgt für überlegene Autobahn-Ruhe und einen engeren Wendekreis als Fronttriebler.', ru: 'Классический задний привод даёт благородную устойчивость на трассе и малый радиус разворота.' } } },
      buildQualityRust: {
        rustProtection: {
          specs: [
            { k: 'antiCorrosion', v: { en: 'Galvanized Body Panels (Huge Leap Over Rusty W203)', de: 'Vollverzinkte Karosserie (Riesensprung gegenüber W203)', ru: 'Оцинкованный кузов (на порядок лучше ржавеющего W203)' } },
            { k: 'watchAreas', v: { en: 'CRITICAL: Rear Steel Subframe Rusts From Inside (MB Goodwill!)', de: 'WICHTIG: Hinterachsträger rostet von innen (MB-Kulanz prüfen!)', ru: 'ВАЖНО: Задний подрамник гниёт изнутри (проверяйте замену!)' } }
          ],
          note: { en: 'Outer body panels stay virtually rust-free, but inspect the rear subframe on a lift — Mercedes frequently replaces rusted W204 subframes on goodwill.', de: 'Die Außenhaut bleibt nahezu rostfrei, aber der Hinterachsträger rostet gern von innen — oft auf Mercedes-Kulanz getauscht.', ru: 'Кузов отлично держит коррозию, но обязательно осмотрите задний подрамник на подъёмнике — известная болезнь W204.' }
        },
        suspensionWear: '@suspMultiLink'
      },
      electronicsReliability: {
        starterAlternator: '@starterStandard12v',
        electronicsRisk: {
          specs: [
            { k: 'busArch', v: { en: 'Mature Mercedes CAN-Bus · Rotary COMAND Dial + Hard Keys', de: 'Ausgereifter Mercedes-CAN-Bus · COMAND-Drehregler + Tasten', ru: 'Надёжная шина CAN · Шайба COMAND и физические кнопки' } },
            { k: 'knownWatchout', v: { en: 'Electronic Steering Lock (ELV/ESL) Motor Can Fail Past 150k km', de: 'Elektronische Lenkradverriegelung (ELV) kann ab 150 Tkm streiken', ru: 'Моторчик блокиратора руля (ELV/ESL) может отказать после 150 тыс. км' } }
          ],
          note: { en: 'Overall one of the most reliable modern Mercedes electronics platforms; budget once for the ELV steering-lock motor if never replaced.', de: 'Insgesamt eine der zuverlässigsten modernen Mercedes-Plattformen; lediglich die ELV-Lenkradverriegelung ist ein typisches Verschleißteil.', ru: 'Одна из самых надёжных платформ Mercedes по электрике; главное слабое место — блокиратор руля ELV.' }
        }
      },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'Agility Control Amplitude-Selective Dampers · Multi-Link Rear', de: 'Agility-Control-Dämpfer (amplitudenselektiv) · Mehrlenker hinten', ru: 'Амортизаторы Agility Control · Многорычажная задняя подвеска' } },
            { k: 'seatSupport', v: { en: 'Ergonomic Long-Distance German Seats · Effortless 800 km Days', de: 'Langstrecken-Sitze auf Oberklasse-Niveau · Ermüdungsfrei', ru: 'Удобнейшие немецкие кресла для дальних перегонов' } }
          ],
          note: { en: 'Standard Elegance/Classic trims glide like an E-Class; Avantgarde/AMG-Line adds firmer springs and sharper turn-in.', de: 'Elegance/Classic gleiten fast wie eine E-Klasse; Avantgarde/AMG-Line fahren straffer und direkter.', ru: 'Версии Elegance/Classic плывут почти как E-Class; Avantgarde и AMG-Line ощутимо собраннее.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~66 dB(A) at 130 km/h (Whisper-Quiet Cabin)', de: '~66 dB(A) bei 130 km/h (Flüsterleiser Innenraum)', ru: '~66 дБ(А) при 130 км/ч (Тишина бизнес-класса)' } },
            { k: 'acousticGlass', v: { en: 'Heavy Soundproofing & Tight Aero Sealing (0.26–0.27 Cd)', de: 'Aufwendige Dämmung & exzellente Aerodynamik (0,26–0,27 cW)', ru: 'Мощная шумоизоляция и отличная аэродинамика (0,26 Cd)' } }
          ],
          note: { en: 'Noticeably quieter at 150–180 km/h than mainstream midsize sedans — built for all-day Autobahn cruising.', de: 'Bei 150–180 km/h spürbar leiser als Volumen-Mittelklasse — wie geschaffen für lange Autobahnetappen.', ru: 'На 150–180 км/ч заметно тише массовых седанов — идеален для дальних трасс.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashboardTrim', v: { en: '2011+ Mopf Facelift Upgraded Soft Dash & Integrated Screen', de: 'Ab Mopf 2011 deutlich edleres Cockpit & integriertes Display', ru: 'С рестайлинга 2011 (Mopf) — богатая панель и встроенный экран' } },
            { k: 'seatUpholstery', v: { en: 'Cloth, Artico Synthetic (Watch Side-Bolster Cracks) or Real Leather', de: 'Stoff, Artico-Kunstleder (Wangen prüfen) oder Echtleder', ru: 'Ткань, экокожа Artico (проверяйте боковины) или натуральная кожа' } }
          ],
          note: { en: '2011+ Mopf facelift transformed the interior feel; check Artico driver seat bolsters for splitting.', de: 'Die Modellpflege 2011 wertete den Innenraum massiv auf; bei Artico-Kunstleder die Fahrersitzwange auf Risse prüfen.', ru: 'Рестайлинг 2011 года сильно поднял уровень салона; на экокоже Artico проверяйте трещины боковины.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turnDiameter', v: { en: '10.8 m (Class-Leading RWD Turning Radius)', de: '10,8 m (Klassenbester Heckantrieb-Wendekreis)', ru: '10,8 м (Лучший в классе разворот благодаря RWD)' } },
            { k: 'steeringType', v: { en: 'Speed-Sensitive Hydraulic / Parametric Steering (Crisp Feel)', de: 'Parameterlenkung · Exaktes Feedback & leicht beim Parken', ru: 'Параметрический усилитель руля · Точность и лёгкость' } }
          ],
          note: { en: 'Without front driveshafts, the front wheels turn sharper than any FWD rival — U-turns feel effortless.', de: 'Ohne Antriebswellen vorn schlagen die Räder weiter ein als bei Fronttrieblern — extrem handlich beim Wenden.', ru: 'Отсутствие передних приводов даёт огромный угол поворота колёс — разворачиваться в городе очень легко.' }
        },
        visibility: {
          specs: [
            { k: 'allRoundView', v: { en: 'Classic 3-Box Proportions · Clear Sightlines', de: 'Klassische Proportionen · Sehr übersichtlich', ru: 'Классические пропорции · Понятные габариты' } },
            { k: 'rearView', v: { en: 'Front & Rear Parktronic Sensors Widely Fitted', de: 'Parktronic-Sensoren vorn & hinten weit verbreitet', ru: 'Парктроники Parktronic спереди и сзади есть у большинства' } }
          ],
          note: { en: 'Traditional upright glasshouse and visible bonnet corners make judging tight gaps easy.', de: 'Klassische Fensterflächen und gut erkennbare Motorhaube machen das Rangieren angenehm einfach.', ru: 'Классическое остекление и чёткие углы кузова упрощают маневрирование.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'crashRating', v: { en: '5 Stars Euro NCAP (2007) · 7 Airbags incl. Driver Knee', de: '5 Sterne Euro NCAP (2007) · 7 Airbags inkl. Knieairbag', ru: '5 звёзд Euro NCAP (2007) · 7 подушек (вкл. коленную)' } },
            { k: 'bodyStructure', v: { en: '70% High-Strength Steel Executive Safety Cell', de: '70% hochfester Stahl in der Fahrgastzelle', ru: '70% высокопрочной стали в силовой клетке кузова' } }
          ],
          note: { en: 'Tank-like structural rigidity with 7 airbags, NECK-PRO active headrests, and available PRE-SAFE.', de: 'Extrem verwindungssteife Sicherheitszelle mit 7 Airbags, NECK-PRO-Kopfstützen und optionalem PRE-SAFE.', ru: 'Исключительная жёсткость кузова, 7 подушек, активные подголовники NECK-PRO и система PRE-SAFE.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeSafety', v: { en: 'ESP, Attention Assist, Adaptive Brake + Hill Hold', de: 'ESP, Attention Assist, Adaptive Brake + Berganfahrhilfe', ru: 'ESP, контроль усталости, Adaptive Brake и помощь в горку' } },
            { k: 'driverAssists', v: { en: 'Optional Distronic Plus, Blind-Spot & Lane Assist (2011+)', de: 'Optional Distronic Plus, Totwinkel- & Spurassistent (ab 2011)', ru: 'Опционально Distronic Plus, контроль слепых зон и полосы (2011+)' } }
          ],
          note: { en: '2011+ facelift cars offered radar cruise and blind-spot tech years ahead of mainstream competitors.', de: 'Ab Facelift 2011 gab es Radar-Abstandstempomat und Totwinkel-Assistent — der Konkurrenz Jahre voraus.', ru: 'После рестайлинга 2011 года доступны радарный круиз и контроль слепых зон на уровне более новых авто.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'rearSpace', v: { en: 'Cozy Rear Kneeroom · Tall RWD Propshaft Tunnel', de: 'Kompakter Fond · Hoher Kardanwellen-Tunnel', ru: 'Скромный запас сзади · Высокий тоннель кардана' } },
            { k: 'frontErgo', v: { en: 'First-Class Front Cockpit · Huge Seat Travel', de: 'Erstklassiges Cockpit vorn · Riesiger Verstellbereich', ru: 'Превосходный передний ряд · Огромный запас регулировок' } }
          ],
          note: { en: 'Superb for two front occupants and kids in back, but noticeably tighter rear knee room than a Mondeo or Avensis.', de: 'Vorn erstklassig, im Fond aber spürbar knapper als in Mondeo oder Avensis — eher für 2 Erwachsene + Kinder.', ru: 'Великолепен спереди, но сзади заметно теснее Mondeo или Avensis — оптимален для семьи с детьми.' }
        },
        isofixEntry: {
          specs: [
            { k: 'childSeats', v: { en: '2× Outer Rear ISOFIX + Top-Tether Anchors', de: '2× ISOFIX außen hinten + Top-Tether', ru: '2× ISOFIX сзади + якорные крепления' } },
            { k: 'doorAccess', v: { en: 'Solid Heavy Doors · Check Space for Large Rear-Facing Seats', de: 'Solide Türen · Platz für große Reboarder vorher testen', ru: 'Тяжёлые добротные двери · Проверьте запас под крупное кресло' } }
          ],
          note: { en: 'ISOFIX points are easy to click in, though tall front drivers reduce space behind them for bulky rear-facing seats.', de: 'ISOFIX ist gut zugänglich, bei sehr großen Fahrern wird es hinter dem Fahrersitz für große Reboarder aber eng.', ru: 'Крепления ISOFIX удобны, но за высоким водителем крупному детскому креслу может быть тесновато.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootCapacity', v: { en: '475 L (Sedan) / 485–1,500 L (T-Model Wagon)', de: '475 L (Limousine) / 485–1.500 L (T-Modell Kombi)', ru: '475 л (Седан) / 485–1 500 л (Универсал T-Model)' } },
            { k: 'loadingLip', v: { en: 'Deep Well-Trimmed Sedan Trunk · Clean Square Floor', de: 'Tiefer, edel verkleideter Kofferraum · Sauber geschnitten', ru: 'Глубокий, аккуратно обитый багажник правильной формы' } }
          ],
          note: { en: '475 L easily holds holiday suitcases; verify whether a used sedan has the optional folding rear seatback.', de: '475 L reichen locker für Urlaubsgepäck; bei der Limousine prüfen, ob die optionale umklappbare Rückbank verbaut ist.', ru: '475 л хватает для путешествий; у седана проверяйте наличие опции складной задней спинки.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingSystem', v: { en: 'Optional 60/40 Split-Fold Rear Seat on Sedan (Standard on Wagon)', de: '60/40-Umklappung bei Limousine optional (Kombi Serie)', ru: 'Складная спинка 60/40 — опция на седане (база на универсале)' } }
          ],
          note: { en: 'Folding rear seats were a paid option on the W204 sedan — confirm the release handles inside the trunk before buying.', de: 'Umklappbare Rücksitze waren bei der Limousine aufpreispflichtig — vor dem Kauf die Hebel im Kofferraum checken.', ru: 'Складная спинка была платной опцией для седана — обязательно проверьте рычаги в багажнике.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: { en: '~530 kg (525–540 kg Depending on Engine)', de: '~530 kg (525–540 kg je nach Motor)', ru: '~530 кг (525–540 кг в зависимости от мотора)' } },
            { k: 'roofLoad', v: { en: '100 kg Approved Dynamic Roof Load', de: '100 kg zugelassene Dachlast', ru: '100 кг допустимая нагрузка на крышу' } }
          ],
          note: { en: 'Strong 100 kg roof load and 1,800 kg RWD towing stability make the W204 an outstanding tow vehicle.', de: 'Starke 100 kg Dachlast und 1.800 kg Anhängelast mit Heckantrieb machen den W204 zum erstklassigen Zugwagen.', ru: '100 кг на крышу и 1 800 кг на фаркопе с задним приводом делают W204 отличным тягачом.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'steeringFeel', v: { en: 'Pure Uncorrupted RWD Steering · Sharp Turn-In', de: 'Saubere Heckantriebs-Lenkung · Präzises Einlenken', ru: 'Чистый руль заднего привода · Точные реакции' } },
            { k: 'cornering', v: { en: 'Near-50/50 Balance · Rock-Solid at 200+ km/h', de: 'Ausgewogene Balance · Felsenfest auch über 200 km/h', ru: 'Отличная развесовка · Непоколебим на 200+ км/ч' } }
          ],
          note: { en: 'Combines genuine driver engagement with unmistakable German Autobahn stability.', de: 'Verbindet echten Heckantriebs-Fahrspaß mit unverkennbarer Mercedes-Autobahnruhe.', ru: 'Сочетает удовольствие от заднего привода с фирменной стабильностью Mercedes на автобане.' }
        },
        tractionDiff: { specs: [{ k: 'tractionSystem', v: { en: 'Rear-Wheel Drive + Mercedes ESP (4MATIC AWD on Select Trims)', de: 'Heckantrieb + Mercedes-ESP (4MATIC Allrad optional)', ru: 'Задний привод + ESP (полный привод 4MATIC на части версий)' } }], note: { en: 'Superb dry-road traction off the line; fit quality winter tyres for snowy climbs unless choosing 4MATIC.', de: 'Sehr gute Traktion auf trockener Straße; im Winter gute Winterreifen fahren oder 4MATIC wählen.', ru: 'Отличный зацеп на сухом асфальте; для снежной зимы ставьте хорошую зимнюю резину или берите 4MATIC.' } }
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retHigh', resaleDemand: '@demFast' }
    },
    sharedGearboxes: {
      '6-mt': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Mercedes 716.6 · Manual + DMF', de: 'Mercedes 716.6 · Schaltgetriebe + ZMS', ru: 'Mercedes 716.6 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.4,
            badges: { en: ['Mercedes 716.6 6-MT', 'Zero Automatic Valvebody Risk'], de: ['Mercedes 716.6 6-Gang', 'Kein Automatik-Risiko'], ru: ['Механика Mercedes 716.6', 'Без риска гидроблока'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mercedes-Benz 716.6 6-Speed Manual', de: 'Mercedes-Benz 716.6 6-Gang-Schaltgetriebe', ru: '6-ст. МКПП Mercedes-Benz 716.6' } }], note: { en: 'Long-lived RWD mechanical gearbox, though notchy when cold and less sought-after than 5G/7G automatics.', de: 'Sehr haltbares Heckantrieb-Schaltgetriebe, kalt etwas knorrig; weniger gesucht als Automatik.', ru: 'Очень живучая заднеприводная механика, но на холодную включается туговато.' } },
            clutchDmf: '@clutchDmf'
          }
        },
        dossier: {
          en: { headline: 'Mercedes 716.6 6-Speed Manual — Bulletproof Simplicity, Lower Resale', strengths: ['Avoids 7G-Tronic conductor-plate bills and returns ~0.4–0.5 L/100km lower fuel burn.'], watchouts: ['Slightly rubbery cold 1→2 shift; dual-mass flywheel wears around 180k km (€950–€1,400).'], beforeYouBuy: ['Test cold 1st→2nd engagement and check clutch bite height.'] },
          de: { headline: 'Mercedes 716.6 6-Gang-Getriebe — Extrem simpel, geringerer Wiederverkauf', strengths: ['Spart 7G-Tronic-Steuergeräte-Risiken und ca. 0,4–0,5 L/100km Verbrauch.'], watchouts: ['Kalt etwas knorriges 1→2-Schalten; ZMS ab ca. 180 Tkm prüfen (950–1.400 €).'], beforeYouBuy: ['Kaltes Schalten 1→2 und Kupplungsdruckpunkt prüfen.'] },
          ru: { headline: 'Механика Mercedes 716.6 6-МКПП — Простая и крепкая, но реже на рынке', strengths: ['Избавляет от ремонта платы 7G-Tronic и экономит ~0,4–0,5 л/100 км.'], watchouts: ['На холодную 1→2 включается туговато; ДММ ходит ~180 тыс. км (€950–1 400).'], beforeYouBuy: ['Проверьте переключения на холодную и момент схватывания сцепления.'] }
        }
      },
      '5g-tronic': {
        category: 'automatic',
        label: { en: '5G-Tronic', de: '5G-Tronic Automatik', ru: '5G-Tronic Автомат' },
        shortLabel: { en: '5G-AT', de: '5G-AT', ru: '5G-АКПП' },
        subLabel: { en: 'Mercedes 722.6 · Hydraulic Torque Converter', de: 'Mercedes 722.6 · Wandlerautomatik', ru: 'Mercedes 722.6 · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto5', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 9.0,
            badges: { en: ['Legendary 722.6 5G-Tronic', 'Cheap Conductor Plate Fix'], de: ['Legendäre 722.6 5G-Tronic', 'Günstige Elektrikplatine'], ru: ['Легендарный 722.6 5G-Tronic', 'Недорогая электроплата'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mercedes 722.6 5G-Tronic Torque Auto', de: 'Mercedes 722.6 5G-Tronic Wandlerautomatik', ru: '5-ст. АКПП Mercedes 722.6 5G-Tronic' } }], note: { en: 'One of Mercedes’ toughest automatics ever built; change ATF every 60,000 km and check the cheap €15 pilot bushing seal.', de: 'Eine der robustesten Mercedes-Automatiken überhaupt; ATF alle 60.000 km wechseln und 15-€-Steckerhülse prüfen.', ru: 'Один из самых надёжных автоматов Mercedes; замена ATF каждые 60 тыс. км и контроль разъёма.' } },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: { headline: 'Legendary 722.6 5G-Tronic — Tougher & Cheaper to Fix Than Early 7G', strengths: ['Routinely clears 400k+ km; pilot-bushing seal and conductor plate are cheap DIY-friendly fixes.'], watchouts: ['Only 5 gears raise motorway rpm and fuel burn vs 7G-Tronic Plus.'], beforeYouBuy: ['Check the 13-pin connector sleeve for ATF weeping and test smooth warm 2→3 shifts.'] },
          de: { headline: 'Legendäre 722.6 5G-Tronic — Haltbarer & günstiger als frühe 7G', strengths: ['Erreicht regelmäßig 400.000+ km; Steckerhülse und Platine sind preiswert reparabel.'], watchouts: ['5 Gänge bedeuten etwas mehr Verbrauch als bei der 7G-Tronic Plus.'], beforeYouBuy: ['13-Pol-Stecker auf Ölfeuchtigkeit und sanfte 2→3-Schaltvorgänge prüfen.'] },
          ru: { headline: 'Легендарный 722.6 5G-Tronic — Надёжнее и дешевле ранней 7G', strengths: ['Спокойно ходит 400+ тыс. км; втулка разъёма и плата стоят недорого.'], watchouts: ['5 передач дают чуть больший расход по сравнению с 7G-Tronic Plus.'], beforeYouBuy: ['Проверьте сухость круглого разъёма и мягкость переключений 2→3 на горячую.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: '722.6 5G-Tronic ATF & filter + pilot bushing O-ring check', de: '722.6 5G-Tronic Getriebeölwechsel + Steckerhülse prüfen', ru: 'Замена масла 5G-Tronic 722.6 и проверка втулки разъёма' }, cost: '€220–320' }] }
      },
      '7g-tronic': {
        category: 'automatic',
        label: { en: '7G-Tronic', de: '7G-Tronic Automatik', ru: '7G-Tronic Автомат' },
        shortLabel: { en: '7G-AT', de: '7G-AT', ru: '7G-АКПП' },
        subLabel: { en: 'Mercedes 722.9 · Hydraulic Torque Converter', de: 'Mercedes 722.9 · Wandlerautomatik', ru: 'Mercedes 722.9 · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto7', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.1,
            badges: { en: ['722.9 7G-Tronic', 'Check Speed Sensor / Plate'], de: ['722.9 7G-Tronic', 'Steuergerät/Sensoren prüfen'], ru: ['722.9 7G-Tronic', 'Контроль платы и датчиков'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mercedes 722.9 7G-Tronic Torque Auto', de: 'Mercedes 722.9 7G-Tronic Wandlerautomatik', ru: '7-ст. АКПП Mercedes 722.9 7G-Tronic' } }], note: { en: 'Smooth 7-speed auto; early 2007–2010 units need 60k km ATF changes and can suffer Y3/8n1 speed-sensor conductor-plate faults (€450–€900).', de: 'Komfortable 7-Stufen-Automatik; frühe 722.9 brauchen 60-Tkm-Ölwechsel, gelegentlich Drehzahlsensor-Defekt (450–900 €).', ru: 'Плавный 7-ст. автомат; ранние 722.9 требуют замены ATF раз в 60 тыс. км, возможен ремонт датчиков платы (€450–900).' } },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: { headline: 'Mercedes 722.9 7G-Tronic — Smooth 7-Speed Cruise, Needs 60k ATF', strengths: ['Tall 7th gear keeps highway rpm low and suits V6/V6-CDI torque effortlessly.'], watchouts: ['Early 722.9 conductor-plate speed sensors fail occasionally (€450–€900); never skip 60k ATF service.'], beforeYouBuy: ['Test warm 2→1 downshift smoothness and verify 60,000 km ATF service records.'] },
          de: { headline: 'Mercedes 722.9 7G-Tronic — Ruhiges 7-Gang-Gleiten, 60-Tkm-Ölpflicht', strengths: ['Langer 7. Gang senkt die Drehzahl und passt perfekt zu V6-Motoren.'], watchouts: ['Drehzahlsensoren der EHS-Platine fallen gelegentlich aus (450–900 €).'], beforeYouBuy: ['Sanftes Herunterschalten 2→1 warm testen und Getriebeölwechsel belegen lassen.'] },
          ru: { headline: 'АКПП Mercedes 722.9 7G-Tronic — Комфортные 7 передач, масло раз в 60 тыс.', strengths: ['Длинная 7-я передача снижает обороты и отлично подходит мощным моторам.'], watchouts: ['Датчики скорости на плате гидроблока иногда выходят из строя (€450–900).'], beforeYouBuy: ['Проверьте мягкость переключения 2→1 на горячую и историю замены ATF.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: '722.9 7G-Tronic ATF & filter service', de: '722.9 7G-Tronic Getriebeöl- & Filterwechsel', ru: 'Замена масла и фильтра АКПП 7G-Tronic 722.9' }, cost: '€280–390' }] }
      },
      '7g-tronic-plus': {
        category: 'automatic',
        label: { en: '7G-Tronic Plus', de: '7G-Tronic Plus Automatik', ru: '7G-Tronic Plus Автомат' },
        shortLabel: { en: '7G+ AT', de: '7G+ AT', ru: '7G+ АКПП' },
        subLabel: { en: 'Mercedes 722.9 Plus · Hydraulic Torque Converter', de: 'Mercedes 722.9 Plus · Wandlerautomatik', ru: 'Mercedes 722.9 Plus · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto7', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.8,
            badges: { en: ['Updated 7G-Tronic Plus (2011+)', 'Blue ATF · Improved Lockup'], de: ['Überarbeitete 7G-Tronic Plus', 'Blaues ATF · Sehr standfest'], ru: ['Обновлённая 7G-Tronic Plus', 'Синяя ATF · Высокий ресурс'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: { specs: [{ k: 'gearboxModel', v: { en: 'Mercedes 722.9 7G-Tronic Plus (2011+)', de: 'Mercedes 722.9 7G-Tronic Plus (ab 2011)', ru: '7-ст. АКПП Mercedes 722.9 7G-Tronic Plus' } }], note: { en: 'Facelift 7G-Tronic Plus with revised torque converter, FE blue ATF, and much stronger reliability; service every 60,000–80,000 km.', de: 'Facelift-7G-Tronic Plus mit verbessertem Wandler und blauem FE-Öl — sehr zuverlässig bei 60–80 Tkm Service.', ru: 'Рестайлинговая 7G-Tronic Plus с доработанным гидротрансформатором и высокой надёжностью.' } },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: { headline: 'Facelift 7G-Tronic Plus (2011+) — Refined, Fuel-Saving & Reliable', strengths: ['Revised converter lockup and updated electronics fix most early 7G-Tronic complaints.'], watchouts: ['Change blue MB 236.15 ATF ahead of the 125k km schedule (every 60k–80k km).'], beforeYouBuy: ['Test smooth Start/Stop re-engagement and crisp paddle/manual shifts when warm.'] },
          de: { headline: 'Facelift 7G-Tronic Plus (ab 2011) — Sparsam, sanft & ausgereift', strengths: ['Überarbeiteter Wandler und bessere Elektronik beheben frühe 7G-Schwächen.'], watchouts: ['Blaues MB-236.15-Öl idealerweise schon alle 60–80 Tkm wechseln.'], beforeYouBuy: ['Sanftes Anrollen nach Start/Stopp und ruhiges Schalten im warmen Zustand prüfen.'] },
          ru: { headline: 'Рестайлинг 7G-Tronic Plus (2011+) — Экономичная и доработанная', strengths: ['Обновлённый гидротрансформатор и плата устранили большинство ранних болезней 7G.'], watchouts: ['Синее масло MB 236.15 лучше менять каждые 60–80 тыс. км.'], beforeYouBuy: ['Проверьте мягкость старта после Start/Stop и плавность переключений на горячую.'] }
        },
        repairGuideExtra: { routine: [{ when: { en: 'Every 60,000–80,000 km', de: 'Alle 60.000–80.000 km', ru: 'Каждые 60–80 тыс. км' }, action: { en: '7G-Tronic Plus MB 236.15 blue ATF & filter service', de: '7G-Tronic Plus MB 236.15 Öl- & Filterwechsel', ru: 'Замена масла MB 236.15 и фильтра 7G-Tronic Plus' }, cost: '€290–400' }] }
      }
    },
    engines: [
      {
        id: 'c180-kompressor-1.8',
        defaultGearboxId: '5g-tronic',
        gearboxes: [
          { id: '5g-tronic', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€6,400',
            specOverrides: { sprint0100: '9.5 s', topSpeed: '223 km/h', realWorldFuel: '7.8 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 6.5,
                badges: {
                  en: ['7.8 L/100km (6-MT)'],
                  de: ['7,8 L/100km (6-MT)'],
                  ru: ['7,8 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'kompressor',
        dossierGroup: 'petrol-conv-auto',
        isDefault: false,
        fuelType: 'petrol',
        hp: 156,
        shortTitle: 'C 180 KOMPRESSOR 1.8',
        fullName: '2008 Mercedes-Benz C 180 Kompressor 1.8',
        engineBadge: 'C 180 Kompressor (1.8L) • 156 HP',
        engineSubLabel: {
          en: '1.8L Supercharged M271 (03/2007–10/2008) • 6-MT / 5-AT • 230 Nm',
          de: '1.8L Kompressor M271 (03/2007–10/2008) • 6-Gang / 5-AT • 230 Nm',
          ru: '1.8 Компрессор M271 (03/2007–10/2008) • 6-МКПП / 5-АКПП • 230 Н·м'
        },
        rarityLabel: {
          en: 'RWD EXECUTIVE CRUISER',
          de: 'HECKANTRIEB-KLASSIKER',
          ru: 'ЗАДНЕПРИВОДНЫЙ КЛАССИК'
        },
        originalMsrp: {
          en: '€30,523 New',
          de: '30.523 € Neu',
          ru: '€30 523 новый'
        },
        estUsedPrice: '€6,900',
        perkLabel: {
          en: '✦ Instant Supercharger Pull • Bulletproof 5-Speed Auto • 10.8m RWD Turn',
          de: '✦ Spontaner Kompressor-Antritt • Robuste 5-Stufen-Automatik • 10,8m Wendekreis',
          ru: '✦ Мгновенный отклик компрессора • Неубиваемый 5-АКПП • Разворот 10,8 м'
        },
        remarkablePositives: {
          en: [
            'CRISP RWD CHASSIS BALANCE',
            'SMOOTH SUPERCHARGED RESPONSE',
            'ROBUST 5-SPEED AUTOMATIC',
            'SOLID W204 TÜV TRACK RECORD',
            '1,800 KG BRAKED TOWING'
          ],
          de: [
            'AUSGEWOGENES HECKANTRIEB-FAHRWERK',
            'SPONTANER KOMPRESSOR-ANTRITT',
            'SEHR ROBUSTE 5G-TRONIC AUTOMATIK',
            'STARKE TÜV-LANGZEITBILANZ',
            '1.800 KG ANHÄNGELAST GEBREMST'
          ],
          ru: [
            'СБАЛАНСИРОВАННЫЙ ЗАДНИЙ ПРИВОД',
            'РОВНАЯ ТЯГА КОМПРЕССОРА БЕЗ ЯМ',
            'НАДЁЖНЫЙ 5-СТ. АВТОМАТ 722.6',
            'ВЫСОКАЯ НАДЁЖНОСТЬ ПО TÜV',
            'БУКСИРОВКА ДО 1 800 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'TIMING CHAIN STRETCH PAST 120K KM',
            'CHECK REAR AXLE SUBFRAME RUST',
            'THIRSTY 8.2 L/100KM'
          ],
          de: [
            'STEUERKETTE AB 120 TKM PRÜFEN',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN',
            'DURSTIG: 8,2 L/100KM'
          ],
          ru: [
            'РАСТЯЖЕНИЕ ЦЕПИ ГРМ ПОСЛЕ 120 ТЫС.',
            'ПРОВЕРЯТЬ КОРРОЗИЮ ЗАДНЕГО ПОДРАМНИКА',
            'РАСХОД 8,2 Л/100 КМ В РЕАЛЬНОСТИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 7.6,
          runningCostsTco: 7.5
        },
        specOverrides: {
          engineName: { en: '1.8L I4 Kompressor (Chain)', de: '1.8L Reihenvierzylinder Kompressor', ru: '1.8L R4 Kompressor (Цепь)' },
          forcedInduction: '@supercharger', injection: '@port', timingDrive: '@chain',
          gearbox: '@auto5',
          clutchDmf: '@torqueConv', payloadRoof: '535 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '9.5 s', topSpeed: '223 km/h', peakTorque: '230 Nm @ 2,800 rpm',
          passingPunch: { en: 'Instant Supercharger Pull', de: 'Spontaner Kompressor-Antritt', ru: 'Мгновенная тяга компрессора' },
          realWorldFuel: '8.2 L/100km', tankRange: '66 L (~805 km)', euroNorm: 'Euro 4 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.1,
            badges: {
              en: ['M271 Simplex Chain Watch-Out', 'Durable Roots Supercharger'],
              de: ['M271 Simplex-Kette prüfen', 'Robuster Roots-Kompressor'],
              ru: ['Контроль цепи ГРМ M271', 'Надёжный механический компрессор']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M271 E18 ML · 1,796 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Roots Supercharger + Port Injection', de: 'Reihenvierzylinder Alu · Kompressor + Saugrohreinspritzung', ru: 'Рядный 4-цил. алюминий · Компрессор + распредел. впрыск' } }], note: { en: 'Zero turbo lag and port injection (no intake carbon), paired with the bulletproof 5G-Tronic; budget once for the M271 simplex timing chain.', de: 'Kein Turboloch, keine Verkokung und unverwüstliche 5G-Tronic; lediglich die M271-Simplex-Steuerkette im Blick behalten.', ru: 'Нет турбоямы и нагара на клапанах, крепчайший 5G-Tronic; главный регламент — цепь и звёзды M271.' } },
              forcedInduction: { specs: [{ k: 'boostType', v: { en: 'Belt-Driven Roots Supercharger (Instant Boost)', de: 'Mechanischer Kompressor (sofortiger Ladedruck)', ru: 'Механический компрессор Roots (мгновенный наддув)' } }], note: { en: 'Instant throttle response from idle with no turbo lag; supercharger unit itself is very durable.', de: 'Direktes Ansprechverhalten ab Leerlauf ohne Turboloch; der Kompressor selbst gilt als sehr langlebig.', ru: 'Мгновенный отклик с холостых без турбоямы; сам компрессор очень ресурсный.' } },
              injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Port-Injected Supercharged Four',
                strengths: [
                  'Washes intake valves cleanly with zero direct-injection carbon deposits.',
                  'Belt-driven blower runs cool without exhaust heat stress or fragile turbo actuators.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Simplex timing chain and camshaft adjuster sprockets often stretch around 110,000–150,000 km— listen for cold-start rattle.',
                  'Fit Mercedes oil-blocker adapter cables on camshaft magnets so oil does not wick into the engine wiring harness, and replace cracked crankcase breather hoses.'
                ],
                beforeYouBuy: [
                  'Start the engine completely cold and listen closely for a 2 to 3 second metal rattle— that points to a stretched timing chain.',
                  'Look for receipts showing the timing chain, cam gears, and hidden rubber air hoses under the airbox were already replaced.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Change synthetic oil every 10–12,000 km / 1 yr & flush brake fluid at 2 yrs (1.8L supercharged)',
                    cost: '€160–260',
                    ifIgnored: 'Long 25k oil intervals thin oil & wear the slim timing chain early',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G gearbox oil (60k / 4–5 yrs), fit cam-sensor oil blockers & check 6-yr rubber hoses',
                    cost: '€380–620',
                    ifIgnored: 'Aged gearbox oil shifts harshly & perished hoses/seals weep oil into wiring',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Replace cracked rubber air breather hoses & change gearbox oil',
                    cost: '€350–550',
                    ifIgnored: 'Rough idle, air leaks, and jerky gear shifts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'red',
                    km: '115,000–155,000 km • 9–11 yrs',
                    action: 'Replace stretched timing chain, cam gears & leaky front sensor seals',
                    cost: '€1,200–1,900',
                    ifIgnored: 'Jumped timing chain & bent engine valves or oil-ruined computer (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,500–5,500'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–195,000 km • 11–13 yrs',
                    action: 'Replace aging thermostat, water pump & brittle cooling pipes',
                    cost: '€380–620',
                    ifIgnored: 'Sudden coolant loss & warped engine top on highway',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '190,000–245,000 km • 13–15+ yrs',
                    action: 'Service supercharger oil, alternator pulley & worn front suspension arms',
                    cost: '€550–900',
                    ifIgnored: 'Snapped drive belt, steering knock & heavy supercharger wear',
                    damageCost: '€1,400–2,200'
                  }
                ]
              },
              de: {
                headline: 'Robuster Kompressor-Saugrohreinspritzer mit Top-Automatik— Steuerkette im Blick behalten',
                strengths: [
                  'Keine Verkokung der Einlassventile und unempfindlich im Kurzstreckenbetrieb.',
                  'Mechanisch angetrieben ohne Abgashitze oder anfällige Turbolader-Stellmotoren.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Die Simplex-Steuerkette und Nockenwellenversteller neigen zwischen 110.000 und 150.000 km zur Längung— auf Kaltstartrasseln achten.',
                  'Ölstoppkabel an den Nockenwellen-Verstellmagneten nachrüsten (verhindert Öl im Motorkabelbaum) und poröse Teillastentlüftungs-Schläuche prüfen.'
                ],
                beforeYouBuy: [
                  'Motor komplett kalt starten und genau auf ein 2–3 Sekunden langes Metallrasseln achten– das deutet auf eine gelängte Steuerkette hin.',
                  'Vordere Nockenwellen-Stecker auf Öl prüfen– Öl kann durch den Kabelbaum bis ins Motorsteuergerät wandern.',
                  'Nach Belegen für gewechselte Steuerkette, Zahnräder und die versteckten Gummischläuche unter dem Luftfilter fragen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Motoröl alle 10–12.000 km / 1 J. wechseln & Bremsflüssigkeit alle 2 J. (1.8L Kompressor)',
                    cost: '160–260 €',
                    ifIgnored: 'Zu lange 25.000er-Intervalle lassen die schmale Steuerkette früh verschleißen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60 Tkm / 4–5 J.) wechseln, Ölstoppkabel verbauen & 6-J.-Schläuche prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Gealtertes Getriebeöl schaltet hart & poröse 6-J.-Dichtungen ölen den Kabelbaum ein',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: 'Brüchige Entlüftungsschläuche erneuern & Getriebeöl wechseln',
                    cost: '350–550 €',
                    ifIgnored: 'Unruhiger Leerlauf, Falschluft und ruckeliges Schalten (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'red',
                    km: '115.000–155.000 km • 9–11 J.',
                    action: 'Steuerkette, Nockenwellenräder & undichte Magnet-Dichtungen tauschen',
                    cost: '1.200–1.900 €',
                    ifIgnored: 'Übersprungene Kette mit Motorschaden oder veröltem Steuergerät (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.500–5.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–195.000 km • 11–13 J.',
                    action: 'Thermostat, Wasserpumpe & gealterte Kühlerschläuche ersetzen',
                    cost: '380–620 €',
                    ifIgnored: 'Plötzlicher Kühlwasserverlust & überhitzter Zylinderkopf',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '190.000–245.000 km • 13–15+ J.',
                    action: 'Kompressoröl wechseln sowie Freilauf & vordere Querlenker prüfen',
                    cost: '550–900 €',
                    ifIgnored: 'Gerissener Riemen, Poltern vorn & teurer Kompressorschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.400–2.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Компрессорный мотор с распределённым впрыском— требует контроля цепи ГРМ',
                strengths: [
                  'Клапаны всегда чистые— нет проблем с нагаром и ТНВД.',
                  'Нет перегрева от выхлопных газов и актуаторов турбины.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Однорядная цепь ГРМ и звёзды фазовращателей нередко растягиваются к 110–150 тыс. км— слушайте треск при холодном пуске.',
                  'Проверяйте наличие масляных стоп-кабелей на магнитах распредвалов (защита жгута ЭБУ от масла) и трубки ВКГ под компрессором.'
                ],
                beforeYouBuy: [
                  'Заводите двигатель полностью холодным и слушайте металлический треск первые 2–3 секунды— так шумит растянутая цепь.',
                  'Осмотрите передние разъёмы датчиков на предмет масла— по проводам оно может дойти прямо до блока управления.',
                  'Ищите заказ-наряды на замену цепи ГРМ, звёздочек и резиновых трубок вентиляции под воздушным фильтром.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло каждые 10–12 тыс. км / 1 год и тормозную жидкость раз в 2 года (1.8 компрессор)',
                    cost: '€160–260',
                    ifIgnored: 'Редкие ТО по 25 тыс. км быстро изнашивают тонкую цепь ГРМ',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в АКПП (60 тыс. / 4–5 лет), поставить маслосъёмные жгуты и проверить шланги',
                    cost: '€380–620',
                    ifIgnored: 'Старое масло даёт пинки, а рассохшиеся к 6 годам трубки и уплотнения текут',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Заменить треснувшие трубки вентиляции и сменить масло в коробке',
                    cost: '€350–550',
                    ifIgnored: 'Плавают обороты, подсос воздуха и толчки при переключении (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'red',
                    km: '115 000–155 000 км • 9–11 лет',
                    action: 'Заменить цепь ГРМ, звёздочки и текущие уплотнения передних датчиков',
                    cost: '€1 200–1 900',
                    ifIgnored: 'Перескок цепи с загибом клапанов или залитый маслом блок управления (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 500–5 500'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–195 000 км • 11–13 лет',
                    action: 'Заменить термостат, водяной насос и старые патрубки охлаждения',
                    cost: '€380–620',
                    ifIgnored: 'Внезапная утечка антифриза и перегрев головки блока (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '190 000–245 000 км • 13–15+ лет',
                    action: 'Сменить масло в компрессоре, обновить ролик генератора и передние рычаги',
                    cost: '€550–900',
                    ifIgnored: 'Обрыв ремня, стук в подвеске и износ компрессора (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 400–2 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 5-Speed Auto / 6-MT', 'Simple 722.6 Converter Box'],
              de: ['Unverwüstliche 5G-AT / 6-Gang', 'Robuster Wandlerautomat'],
              ru: ['Неубиваемый 5-АКПП / 6-МКПП', 'Простой гидротрансформатор']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '535 kg Payload'],
              de: ['1.800 kg Anhängelast', '535 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 535 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.2,
            badges: {
              en: ['0–100 km/h: 9.5 s', '223 km/h Top Speed'],
              de: ['0–100 km/h: 9,5 s', '223 km/h Spitze'],
              ru: ['0–100 км/ч: 9,5 с', 'Макс. 223 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.6,
            badges: {
              en: ['230 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['230 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['230 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Balanced RWD Chassis', '10.8 m Tight Turning Circle'],
              de: ['Ausgewogener Heckantrieb', '10,8 m kleiner Wendekreis'],
              ru: ['Сбалансированный задний привод', 'Малый радиус разворота 10,8 м']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 6.0,
            badges: {
              en: ['Thirsty (8.2 L/100km)', '177 g/km CO2'],
              de: ['Durstig (8,2 L/100km)', '177 g/km CO2'],
              ru: ['Прожорливый (8,2 л/100 км)', '177 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.8,
            badges: {
              en: ['Affordable 1.8L Tax • Euro 4', 'Reasonable C-Class Insurance'],
              de: ['Günstige 1.8-Steuer • Euro 4', 'Faire C-Klasse-Versicherung'],
              ru: ['Доступный налог 1,8 • Euro 4', 'Умеренная страховка C-Class']
            }
          },
          maintenanceRepairCosts: {
            score: 7.3,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G-Tronic (722.6) ATF + filter & inspect cam-magnet oil blocker leads', de: '5G-Tronic-Öl (722.6) + Filter wechseln & Ölstoppkabel an Nockenwellenmagneten prüfen', ru: 'Замена масла/фильтра 5G-Tronic (722.6) и проверка магнитов фазовращателей' }, cost: '€240–360' },
                { when: { en: 'Every 80,000–100,000 km', de: 'Alle 80.000–100.000 km', ru: 'Каждые 80–100 тыс. км' }, action: { en: 'Replace spark plugs, crankcase breather hoses & supercharger belt', de: 'Zündkerzen, Teillastentlüftung (Schläuche) & Kompressorriemen ersetzen', ru: 'Замена свечей, шлангов вентиляции картера и ремня компрессора' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '110,000–160,000 km', de: '110.000–160.000 km', ru: '110 000–160 000 км' }, action: { en: 'M271 simplex timing chain & worn camshaft adjuster sprockets', de: 'M271 Simplex-Steuerkette & abgenutzte Nockenwellenversteller-Räder', ru: 'Замена тонкой цепи ГРМ M271 и звёзд фазовращателей' }, cost: '€1,100–1,900', risk: { en: 'Stretched chain shears sprocket teeth, jumps timing, and bends valves', de: 'Gelängte Kette fräst Zahnräder ab und überspringt — Motorschaden', ru: 'Растянутая цепь стачивает зубья звёзд, перескакивает и гнёт клапаны' }, damage: '€3,500–5,500' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust inspection & ELV steering-lock motor', de: 'W204 Hinterachsträger-Rostprüfung (MB-Kulanz) & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника на коррозию и моторчик ELV руля' }, cost: '€350–1,200', risk: { en: 'Rusted subframe fails inspection; failed ELV prevents ignition turn-on', de: 'Durchrostung stoppt HU; defekte ELV blockiert den Fahrzeugstart', ru: 'Гнилой подрамник опасен; отказ ELV полностью блокирует запуск' }, damage: '€1,500–2,600' }
              ]
            },
            badges: {
              en: ['Cheap Aftermarket W204 Parts', 'Budget ~€800 Chain Refresh'],
              de: ['Günstige W204-Zubehörteile', 'Steuerkette (~800 €) einplanen'],
              ru: ['Много недорогих аналогов', 'Бюджет на замену цепи (~€800)']
            }
          },
          depreciationResale: {
            score: 8.1,
            badges: {
              en: ['Price Bottomed Out', 'Steady Mercedes Demand'],
              de: ['Wertverlust am Boden', 'Stabile Nachfrage'],
              ru: ['Минимальная потеря цены', 'Высокий спрос на W204']
            }
          }
        }
      },
      {
        id: 'c180-kompressor-1.6-be',
        defaultGearboxId: '5g-tronic',
        gearboxes: [
          { id: '5g-tronic', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€6,800',
            specOverrides: { sprint0100: '9.5 s', topSpeed: '230 km/h', realWorldFuel: '7.4 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.1,
                badges: {
                  en: ['7.4 L/100km (6-MT)'],
                  de: ['7,4 L/100km (6-MT)'],
                  ru: ['7,4 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'kompressor',
        dossierGroup: 'petrol-conv-auto',
        isDefault: false,
        fuelType: 'petrol',
        hp: 156,
        shortTitle: 'C 180 K BLUEEFFICIENCY',
        fullName: '2009 Mercedes-Benz C 180 Kompressor BlueEfficiency',
        engineBadge: 'C 180 Kompressor (1.6L) • 156 HP',
        engineSubLabel: {
          en: '1.6L Supercharged M271 BE (04/2008–04/2010) • 6-MT / 5-AT • 230 Nm',
          de: '1.6L Kompressor M271 BE (04/2008–04/2010) • 6-Gang / 5-AT • 230 Nm',
          ru: '1.6 Компрессор M271 BE (04/2008–04/2010) • 6-МКПП / 5-АКПП • 230 Н·м'
        },
        rarityLabel: {
          en: 'ECO-GEARED SUPERCHARGER',
          de: 'SPAR-KOMPRESSOR',
          ru: 'ЭКОНОМИЧНЫЙ КОМПРЕССОР'
        },
        originalMsrp: {
          en: '€31,773 New',
          de: '31.773 € Neu',
          ru: '€31 773 новый'
        },
        estUsedPrice: '€7,300',
        perkLabel: {
          en: '✦ Lower 1.6L Road Tax • 7.8 L/100km • Proven Port Injection',
          de: '✦ Günstigere 1.6L Kfz-Steuer • 7,8 L/100km • Robuste Saugrohreinspritzung',
          ru: '✦ Ниже налог за 1.6 л • 7,8 л/100 км • Надёжный распределённый впрыск'
        },
        remarkablePositives: {
          en: [
            'LOWER FUEL BILLS THAN 1.8K',
            'PORT INJECTION (NO CARBON BUILDUP)',
            'CRISP RWD CHASSIS BALANCE',
            '1,800 KG BRAKED TOWING'
          ],
          de: [
            'SPARSAMER ALS DER ALTE 1.8K',
            'KEINE VERKOKUNG (SAUGROHR)',
            'AUSGEWOGENES HECKANTRIEB-FAHRWERK',
            '1.800 KG ANHÄNGELAST GEBREMST'
          ],
          ru: [
            'ЭКОНОМИЧНЕЕ СТАРОГО 1.8 KOMPRESSOR',
            'ЧИСТЫЕ КЛАПАНЫ (MPI ВПРЫСК)',
            'ОТЛИЧНЫЙ ЗАДНИЙ ПРИВОД',
            'БУКСИРОВКА ДО 1 800 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'SAME M271 TIMING CHAIN WATCH-OUT',
            'LONG GEARING REDUCES HIGHWAY AGILITY',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'GLEICHE M271 STEUERKETTEN-SCHWÄCHE',
            'LÄNGERE ÜBERSETZUNG NIMMT ETWAS AGILITÄT',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'ТА ЖЕ ЦЕПЬ ГРМ СЕМЕЙСТВА M271',
            'ДЛИННЫЕ ПЕРЕДАЧИ СНИЖАЮТ ДИНАМИКУ',
            'ПРОВЕРЯТЬ ЗАДНИЙ ПОДРАМНИК НА РЖАВЧИНУ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 7.6,
          runningCostsTco: 7.7
        },
        specOverrides: {
          engineName: { en: '1.6L I4 Kompressor BE (Chain)', de: '1.6L Reihenvierzylinder Kompressor', ru: '1.6L R4 Kompressor BE (Цепь)' },
          forcedInduction: '@supercharger', injection: '@port', timingDrive: '@chain',
          gearbox: '@auto5',
          clutchDmf: '@torqueConv', payloadRoof: '535 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '9.5 s', topSpeed: '230 km/h', peakTorque: '230 Nm @ 3,000 rpm',
          passingPunch: { en: 'Crisp Low-End Kompressor', de: 'Spontaner Kompressor-Schub', ru: 'Бодрый отклик компрессора' },
          realWorldFuel: '7.8 L/100km', tankRange: '66 L (~845 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierLowMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.1,
            badges: {
              en: ['M271 1.6L Port Injection', 'Watch Simplex Timing Chain'],
              de: ['M271 1.6L Saugrohreinspritzer', 'Simplex-Steuerkette prüfen'],
              ru: ['Цепной M271 1.6L MPI', 'Следить за однорядной цепью']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M271 E16 ML (BlueEfficiency) · 1,597 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · 1.6L Supercharged Port Injection', de: 'Reihenvierzylinder Alu · 1.6L Kompressor-Saugrohr', ru: 'Рядный 4-цил. алюминий · 1.6L компрессор' } }], note: { en: 'Lower CO2 and road tax than the 1.8L Kompressor with the same 156 HP and reliable 5G-Tronic; keep an eye on the M271 simplex chain.', de: 'Günstigere Steuer und weniger Verbrauch als der 1.8 Kompressor bei gleichen 156 PS; M271-Steuerkette beobachten.', ru: 'Экономичнее 1.8 Kompressor при тех же 156 л.с. и надёжной 5G-Tronic; следите за цепью ГРМ M271.' } },
              forcedInduction: { specs: [{ k: 'boostType', v: { en: 'Belt-Driven Roots Supercharger (BlueEfficiency)', de: 'Mechanischer Kompressor (BlueEfficiency)', ru: 'Механический компрессор Roots (BlueEfficiency)' } }], note: { en: 'Linear, lag-free pull without direct-injection carbon buildup.', de: 'Linearer Antritt ohne Turboloch und ohne Direkteinspritz-Verkokung.', ru: 'Ровная тяга без турбоямы и без проблем с нагаром прямого впрыска.' } },
              injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Downsized 1.6L Supercharged M271 with Port Injection— Lower Tax, Same Chain Maintenance',
                strengths: [
                  'Clean Port Injection: Avoids direct-injection carbon deposits and costly piezo injectors of the later CGI engines.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Shares the M271 simplex timing chain and cam adjuster wear pattern past 110,000–140,000 km.',
                  'Check camshaft magnet oil-blocker harness cables and crankcase breather hoses under the intake.'
                ],
                beforeYouBuy: [
                  'Listen carefully on a cold morning start for a short chain rattle— this 1.6 supercharged model shares the thin timing chain.',
                  'Unplug or inspect the two round sensor magnets on the front of the engine to be sure no oil is seeping into the wiring.',
                  'Check that throttle response is smooth from low revs with no whistling or uneven idle from split rubber hoses.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Change synthetic oil every 10–12,000 km / 1 yr & flush brake fluid at 2 yrs (1.6L supercharged)',
                    cost: '€160–260',
                    ifIgnored: 'Long 25k oil intervals thin oil & wear the slim timing chain early',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G gearbox oil (60k / 4–5 yrs), fit cam-sensor oil blockers & check 6-yr rubber hoses',
                    cost: '€380–620',
                    ifIgnored: 'Aged gearbox oil shifts harshly & perished hoses/seals weep oil into wiring',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Swap oil-wicking front cam sensor seals & fit protective wire adapters',
                    cost: '€200–340',
                    ifIgnored: 'Engine oil slowly ruins oxygen sensors and main computer (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–2,200'
                  },
                  {
                    tier: 'red',
                    km: '115,000–155,000 km • 9–11 yrs',
                    action: 'Renew timing chain, worn cam sprockets & hidden breather hoses',
                    cost: '€1,250–1,950',
                    ifIgnored: 'Timing chain skips teeth on startup & destroys valves (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,500–5,200'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–195,000 km • 11–13 yrs',
                    action: 'Replace electric thermostat, coolant pump & transmission oil',
                    cost: '€500–800',
                    ifIgnored: 'Overheating engine & hesitant gearbox shifting (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '190,000–245,000 km • 13–15+ yrs',
                    action: 'Refresh alternator freewheel pulley, supercharger oil & front ball joints',
                    cost: '€520–850',
                    ifIgnored: 'Shredded belt, dead battery & loose steering feel',
                    damageCost: '€1,200–2,000'
                  }
                ]
              },
              de: {
                headline: 'Sparsamer 1.6L-Kompressor mit Saugrohreinspritzung— günstige Steuer, Kette beachten',
                strengths: [
                  'Keine Injektor-Probleme und keine Verkokung wie bei späteren CGI-Direkteinspritzern.',
                  'Unterbodenverkleidung und geregelte Servolenkung senken den Realverbrauch um ca. 0,4 L/100km.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Teilt sich mit dem 1.8K die empfindliche Simplex-Steuerkette samt Nockenwellenverstellern (ab ca. 110–140 tkm prüfen).',
                  'Ölstoppkabel an den Verstellmagneten und die Kurbelgehäuseentlüftung auf Porosität kontrollieren.'
                ],
                beforeYouBuy: [
                  'Beim echten Kaltstart auf kurzes Kettenrasseln achten– auch der 1.6 Kompressor nutzt die empfindliche Einreihkette.',
                  'Vordere Rundstecker am Motor auf Ölfeuchte prüfen, damit kein Öl in den teuren Kabelbaum kriecht.',
                  'Sauberen Durchzug aus niedrigen Drehzahlen testen– Pfeifen oder unrunder Leerlauf zeigen oft poröse Schläuche.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Motoröl alle 10–12.000 km / 1 J. wechseln & Bremsflüssigkeit alle 2 J. (1.6L Kompressor)',
                    cost: '160–260 €',
                    ifIgnored: 'Zu lange 25.000er-Intervalle lassen die schmale Steuerkette früh verschleißen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60 Tkm / 4–5 J.) wechseln, Ölstoppkabel verbauen & 6-J.-Schläuche prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Gealtertes Getriebeöl schaltet hart & poröse 6-J.-Dichtungen ölen den Kabelbaum ein',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: 'Vordere Verstellmagnet-Dichtungen samt Ölstoppkabel nachrüsten',
                    cost: '200–340 €',
                    ifIgnored: 'Kriechöl beschädigt Lambdasonden und Motorsteuergerät (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–2.200 €'
                  },
                  {
                    tier: 'red',
                    km: '115.000–155.000 km • 9–11 J.',
                    action: 'Steuerkette, Nockenwellenräder & verdeckte Entlüftungsschläuche tauschen',
                    cost: '1.250–1.950 €',
                    ifIgnored: 'Kette springt beim Start über und verbiegt die Ventile (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.500–5.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–195.000 km • 11–13 J.',
                    action: 'Kennfeld-Thermostat, Wasserpumpe & Getriebeöl erneuern',
                    cost: '500–800 €',
                    ifIgnored: 'Überhitzung des Motors & zähe, ruckelige Schaltvorgänge (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '190.000–245.000 km • 13–15+ J.',
                    action: 'Generator-Freilauf, Kompressoröl & vordere Traggelenke erneuern',
                    cost: '520–850 €',
                    ifIgnored: 'Riemenriss, leere Batterie & schwammige Lenkung (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–2.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Сниженный объём 1.6 л с компрессором и впрыском MPI— ниже налог и расход',
                strengths: [
                  'Нет дорогостоящих форсунок и нагара на впускных клапанах.',
                  'Аэродинамика днища и отключаемые агрегаты экономят ~0,4 л/100 км.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Унаследовал склонность к растяжению однорядной цепи ГРМ M271 к 110–140 тыс. км.',
                  'Обязательны масляные стоп-кабели на магнитах распредвалов и проверка трубок вентиляции картера.'
                ],
                beforeYouBuy: [
                  'Прислушайтесь к холодному пуску— кратковременный металлический лязг говорит о растяжении тонкой цепи 1.6 компрессора.',
                  'Проверьте сухие ли передние круглые датчики на моторе: масло может пойти по жгуту в блок управления.',
                  'Убедитесь в ровном разгоне с низов без свиста и вибраций от треснувших резиновых трубок.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло каждые 10–12 тыс. км / 1 год и тормозную жидкость раз в 2 года (1.6 компрессор)',
                    cost: '€160–260',
                    ifIgnored: 'Редкие ТО по 25 тыс. км быстро изнашивают тонкую цепь ГРМ',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в АКПП (60 тыс. / 4–5 лет), поставить маслосъёмные жгуты и проверить шланги',
                    cost: '€380–620',
                    ifIgnored: 'Старое масло даёт пинки, а рассохшиеся к 6 годам трубки и уплотнения текут',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Заменить текущие магниты распредвалов и поставить защитные переходники',
                    cost: '€200–340',
                    ifIgnored: 'Масло по проводам выводит из строя датчики и электронный блок',
                    damageCost: '€1 200–2 200'
                  },
                  {
                    tier: 'red',
                    km: '115 000–155 000 км • 9–11 лет',
                    action: 'Заменить цепь ГРМ, звёздочки и скрытые трубки вентиляции картера',
                    cost: '€1 250–1 950',
                    ifIgnored: 'Перескок цепи при запуске и дорогой ремонт головки блока (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 500–5 200'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–195 000 км • 11–13 лет',
                    action: 'Заменить электронный термостат, помпу и масло в коробке передач',
                    cost: '€500–800',
                    ifIgnored: 'Перегрев двигателя и грубая работа автомата (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '190 000–245 000 км • 13–15+ лет',
                    action: 'Обновить обгонную муфту генератора, масло компрессора и шаровые опоры',
                    cost: '€520–850',
                    ifIgnored: 'Обрыв приводного ремня, разряд и люфт в рулевом управлении (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 200–2 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 5-Speed Auto / 6-MT', 'Simple 722.6 Converter Box'],
              de: ['Unverwüstliche 5G-AT / 6-Gang', 'Robuster Wandlerautomat'],
              ru: ['Неубиваемый 5-АКПП / 6-МКПП', 'Простой гидротрансформатор']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '535 kg Payload'],
              de: ['1.800 kg Anhängelast', '535 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 535 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.2,
            badges: {
              en: ['0–100 km/h: 9.5 s', '230 km/h Top Speed'],
              de: ['0–100 km/h: 9,5 s', '230 km/h Spitze'],
              ru: ['0–100 км/ч: 9,5 с', 'Макс. 230 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.6,
            badges: {
              en: ['230 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['230 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['230 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Balanced RWD Chassis', 'Low Rolling-Resistance Tyres'],
              de: ['Agiler Heckantrieb', 'Leichtlauf-Abstimmung'],
              ru: ['Сбалансированное шасси', 'Шины с низким сопротивлением']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 6.6,
            badges: {
              en: ['7.8 L/100km', '159 g/km CO2'],
              de: ['7,8 L/100km', '159 g/km CO2'],
              ru: ['7,8 л/100 км', '159 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.0,
            badges: {
              en: ['Low 1.6L Tax (159 g) • Euro 4', 'Reasonable C-Class Insurance'],
              de: ['Günstige 1.6-Steuer • Euro 4', 'Faire C-Klasse-Versicherung'],
              ru: ['Малый налог 1,6 • Euro 4', 'Умеренная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.3,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G-Tronic (722.6) ATF + filter & inspect cam-magnet oil blocker leads', de: '5G-Tronic-Öl (722.6) + Filter wechseln & Ölstoppkabel an Nockenwellenmagneten prüfen', ru: 'Замена масла/фильтра 5G-Tronic (722.6) и проверка магнитов фазовращателей' }, cost: '€240–360' },
                { when: { en: 'Every 80,000–100,000 km', de: 'Alle 80.000–100.000 km', ru: 'Каждые 80–100 тыс. км' }, action: { en: 'Replace spark plugs, crankcase breather hoses & supercharger belt', de: 'Zündkerzen, Teillastentlüftung (Schläuche) & Kompressorriemen ersetzen', ru: 'Замена свечей, шлангов вентиляции картера и ремня компрессора' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '110,000–160,000 km', de: '110.000–160.000 km', ru: '110 000–160 000 км' }, action: { en: 'M271 simplex timing chain & worn camshaft adjuster sprockets', de: 'M271 Simplex-Steuerkette & abgenutzte Nockenwellenversteller-Räder', ru: 'Замена тонкой цепи ГРМ M271 и звёзд фазовращателей' }, cost: '€1,100–1,900', risk: { en: 'Stretched chain shears sprocket teeth, jumps timing, and bends valves', de: 'Gelängte Kette fräst Zahnräder ab und überspringt — Motorschaden', ru: 'Растянутая цепь стачивает зубья звёзд, перескакивает и гнёт клапаны' }, damage: '€3,500–5,500' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust inspection & ELV steering-lock motor', de: 'W204 Hinterachsträger-Rostprüfung (MB-Kulanz) & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника на коррозию и моторчик ELV руля' }, cost: '€350–1,200', risk: { en: 'Rusted subframe fails inspection; failed ELV prevents ignition turn-on', de: 'Durchrostung stoppt HU; defekte ELV blockiert den Fahrzeugstart', ru: 'Гнилой подрамник опасен; отказ ELV полностью блокирует запуск' }, damage: '€1,500–2,600' }
              ]
            },
            badges: {
              en: ['Cheap Aftermarket W204 Parts', 'Budget ~€800 Chain Refresh'],
              de: ['Günstige W204-Zubehörteile', 'Steuerkette (~800 €) einplanen'],
              ru: ['Много недорогих аналогов', 'Бюджет на замену цепи (~€800)']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Popular German Entry Benz', 'Steady Used Value'],
              de: ['Beliebter Einstiegs-Benz', 'Solider Restwert'],
              ru: ['Популярная версия в Германии', 'Уверенный спрос']
            }
          }
        }
      },
      {
        id: 'c180-cgi-1.8',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '5g-tronic',
            estUsedPrice: '€8,000',
            specOverrides: { sprint0100: '9.0 s', topSpeed: '223 km/h', realWorldFuel: '8.0 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 6.5,
                badges: {
                  en: ['8.0 L/100km (5G-AT)'],
                  de: ['8,0 L/100km (5G-AT)'],
                  ru: ['8,0 L/100km (5G-AT)']
                }
              }
            }
          },
          {
            id: '6-mt',
            estUsedPrice: '€7,800',
            specOverrides: { sprint0100: '8.9 s', topSpeed: '225 km/h', realWorldFuel: '7.2 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.4,
                badges: {
                  en: ['7.2 L/100km (6-MT)'],
                  de: ['7,2 L/100km (6-MT)'],
                  ru: ['7,2 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'cgi-4',
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 156,
        shortTitle: 'C 180 CGI 1.8 TURBO',
        fullName: '2011 Mercedes-Benz C 180 CGI BlueEfficiency',
        engineBadge: 'C 180 CGI (1.8L) • 156 HP',
        engineSubLabel: {
          en: '1.8L Turbo M271 (11/2009–04/2012) • 6-MT / 5-AT / 7G-Plus • 250 Nm',
          de: '1.8L Turbo M271 (11/2009–04/2012) • 6-Gang / 5-AT / 7G-Plus • 250 Nm',
          ru: '1.8 Турбо M271 (11/2009–04/2012) • 6-МКПП / 5-АКПП / 7G-Plus • 250 Н·м'
        },
        rarityLabel: {
          en: 'TURBOCHARGED REFINEMENT',
          de: 'TURBO-REISELIMOUSINE',
          ru: 'ТУРБО-СЕДАН'
        },
        originalMsrp: {
          en: '€32,665 New',
          de: '32.665 € Neu',
          ru: '€32 665 новый'
        },
        estUsedPrice: '€8,400',
        perkLabel: {
          en: '✦ 250 Nm Early Turbo Torque • Optional 7G-Tronic Plus • Quieter 1.8T',
          de: '✦ 250 Nm frühes Turbo-Drehmoment • Oft mit 7G-Tronic Plus • Leiser Lauf',
          ru: '✦ Тяга 250 Н·м с 1 600 об/мин • Доступна 7G-Tronic Plus • Тихий ход'
        },
        remarkablePositives: {
          en: [
            '250 NM FROM 1,600 RPM',
            'SMOOTH 7G-TRONIC PLUS OPTION',
            '8.9S 0–100 QUICKER THAN KOMPRESSOR',
            'QUIETER TURBO REFINEMENT',
            '1,800 KG BRAKED TOWING'
          ],
          de: [
            '250 NM SCHON AB 1.600 U/MIN',
            'SANFTE 7G-TRONIC PLUS OPTIONAL',
            '8,9S 0–100 ZÜGIGER ALS KOMPRESSOR',
            'LEISERER MOTORLAUF IM INNENRAUM',
            '1.800 KG ANHÄNGELAST GEBREMST'
          ],
          ru: [
            '250 Н·М УЖЕ С 1 600 ОБ/МИН',
            'ПЛАВНАЯ 7-СТ. АКПП 7G-TRONIC PLUS',
            'РАЗГОН 8,9 С БЫСТРЕЕ КОМПРЕССОРА',
            'ТИШЕ В САЛОНЕ НА ТРАССЕ',
            'БУКСИРОВКА ДО 1 800 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH TIMING CHAIN & CAM GEAR RISK',
            'FUEL-IN-OIL DILUTION ON SHORT TRIPS',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'BEKANNTE STEUERKETTEN- & VERSTELLERRISIKEN',
            'ÖLVERDÜNNUNG BEI VIEL KURZSTRECKE',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'РИСК ИЗНОСА ЦЕПИ И ФАЗОВРАЩАТЕЛЕЙ',
            'РАЗЖИЖЕНИЕ МАСЛА ПРИ КОРОТКИХ ПОЕЗДКАХ',
            'ПРОВЕРЯТЬ ЗАДНИЙ ПОДРАМНИК НА РЖАВЧИНУ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.8,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 7.8,
          runningCostsTco: 7.6
        },
        specOverrides: {
          engineName: { en: '1.8L I4 CGI Turbo (Chain)', de: '1.8L Reihenvierzylinder CGI Turbo', ru: '1.8L R4 CGI Турбо (Цепь)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '525 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '8.9 s', topSpeed: '225 km/h', peakTorque: '250 Nm @ 1,600 rpm',
          passingPunch: { en: 'Smooth 250 Nm Turbo Wave', de: 'Souveräne 250 Nm ab 1.600/min', ru: 'Плавная волна 250 Н·м' },
          realWorldFuel: '7.6 L/100km', tankRange: '66 L (~870 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['M271 EVO Chain & Gear Risk', 'Verify Service Replacement'],
              de: ['M271 EVO Ketten- & Verstellerrisiko', 'Wechsel-Nachweis prüfen'],
              ru: ['Риск цепи и звёзд M271 EVO', 'Искать авто после замены ГРМ']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M271 EVO (DE18 AL) · 1,796 cc' }, { k: 'architecture', v: { en: 'Inline-4 Turbo Direct Injection · Simplex Chain + Cam Phasers', de: 'Reihenvierzylinder Turbo-DI · Kette + Nockenwellenversteller', ru: 'Рядный 4-цил. турбо DI · Цепь + фазовращатели' } }], note: { en: 'Refined and punchy 1.8 turbo, but verify cold-start silence — worn M271 EVO cam adjusters and stretched chains are the #1 repair item.', de: 'Ruhiger, kräftiger 1.8-Turbo — aber Kaltstart zwingend anhören, da M271-EVO-Nockenwellenversteller und Steuerkette oft fällig sind.', ru: 'Тихий и тяговитый турбомотор, но слушайте холодный пуск — муфты фазовращателей и цепь M271 EVO требуют внимания.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Smooth 156 HP Direct-Injection Turbo — Verify M271 Chain & Cam Gear Overhaul',
                lowScoreReasons: [
                  'M271 EVO Timing Chain & Cam Adjuster Stretch: Shares the same thin simplex chain and wearing camshaft adjuster gears (€1,800–€2,600 between 90,000 and 140,000 km).',
                  'Short-Trip Fuel Dilution: Petrol mixing into engine oil on cold city hops accelerates chain and tensioner wear.'
                ],
                strengths: [
                  'Mild 156 HP / 250 Nm tune runs cooler with lower turbo heat stress than the C 250 CGI.',
                  'Can reach 200,000–250,000+ km once timing chain & cam gears are updated and oil is changed every 10,000–12,000 km.'
                ],
                watchouts: [
                  'Inspect the plastic oil-filter housing and thermostat housing for oil or coolant weeping.',
                  'Stick strictly to 10,000–12,000 km oil changes rather than 25,000 km factory intervals.'
                ],
                beforeYouBuy: [
                  'Listen to a stone-cold start for a 2-second metallic rattle or slow starter cranking.',
                  'Smell the oil dipstick for raw petrol and check the plastic oil-filter housing for leaks.',
                  'Ask for invoices showing timing chain and camshaft adjuster replacement.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Change synthetic oil every 10–12,000 km / 1 yr & flush brake fluid at 2 yrs (1.8L turbo direct-injection)',
                    cost: '€160–260',
                    ifIgnored: 'Long 25k oil intervals thin oil & wear the slim timing chain early',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G gearbox oil (60k / 4–5 yrs), fit cam-sensor oil blockers & check 6-yr rubber hoses',
                    cost: '€380–620',
                    ifIgnored: 'Aged gearbox oil shifts harshly & perished hoses/seals weep oil into wiring',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Replace leaking plastic oil filter housing gasket & front magnet seals',
                    cost: '€320–520',
                    ifIgnored: 'Oil and coolant mix into leaks or oil climbs into main wiring loom (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,300–2,300'
                  },
                  {
                    tier: 'red',
                    km: '115,000–155,000 km • 9–11 yrs',
                    action: 'Replace stretched timing chain & worn intake/exhaust cam adjuster gears',
                    cost: '€1,600–2,500',
                    ifIgnored: 'Skipped chain & wrecked valves costing almost as much as an engine (components & fluids also degrade over years)',
                    damageCost: '€4,000–6,000'
                  },
                  {
                    tier: 'orange',
                    km: '145,000–190,000 km • 11–13 yrs',
                    action: 'Service high-pressure fuel pump check & clean intake valve carbon buildup',
                    cost: '€550–950',
                    ifIgnored: 'Long cranking starts, petrol mixing into oil & loss of power (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,700–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '185,000–235,000 km • 13–15+ yrs',
                    action: 'Replace turbo oil feed pipe seals, water pump & thermostat',
                    cost: '€480–780',
                    ifIgnored: 'Oil dripping onto hot exhaust or sudden turbo starvation (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,600'
                  }
                ]
              },
              de: {
                headline: 'Ruhiger 156-PS-Direkteinspritzer — M271-Steuerkette & Versteller prüfen',
                lowScoreReasons: [
                  'M271-Steuerkette & Nockenwellenversteller: Gleiche dünne Simplex-Kette wie im C 200 CGI — teurer Tausch (1.800–2.600 €) meist zwischen 90.000 und 140.000 km fällig.',
                  'Ölverdünnung im Kurzstreckenbetrieb: Kraftstoffeintrag ins Motoröl lässt Kette und Spanner deutlich schneller verschleißen.'
                ],
                strengths: [
                  'Moderate 156 PS / 250 Nm laufen thermisch entspannter als der stärker aufgeladene C 250 CGI.',
                  'Erreicht 200.000–250.000+ km nach überholter Steuerkette und Ölwechseln alle 10.000–12.000 km.'
                ],
                watchouts: [
                  'Kunststoff-Ölfiltergehäuse und Thermostat auf Öl- oder Kühlmittelverlust prüfen.',
                  '25.000er-Serviceintervalle unbedingt auf 10.000–12.000 km verkürzen.'
                ],
                beforeYouBuy: [
                  'Beim völlig kalten Start auf metallisches Klappern oder zähes Anspringen achten.',
                  'Am Ölmessstab auf Benzingeruch prüfen und das Ölfiltergehäuse auf Undichtigkeit kontrollieren.',
                  'Belege für den Wechsel von Steuerkette und Nockenwellenverstellern prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Motoröl alle 10–12.000 km / 1 J. wechseln & Bremsflüssigkeit alle 2 J. (1.8L Turbo-Direkteinspritzer)',
                    cost: '160–260 €',
                    ifIgnored: 'Zu lange 25.000er-Intervalle lassen die schmale Steuerkette früh verschleißen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60 Tkm / 4–5 J.) wechseln, Ölstoppkabel verbauen & 6-J.-Schläuche prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Gealtertes Getriebeöl schaltet hart & poröse 6-J.-Dichtungen ölen den Kabelbaum ein',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Undichtes Kunststoff-Ölfiltergehäuse & vordere Magnetdichtungen tauschen',
                    cost: '320–520 €',
                    ifIgnored: 'Öl-/Kühlmittelverlust oder Kriechöl im teuren Motorkabelbaum (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.300 €'
                  },
                  {
                    tier: 'red',
                    km: '115.000–155.000 km • 9–11 J.',
                    action: 'Steuerkette & eingelaufene Ein-/Auslass-Nockenwellenversteller ersetzen',
                    cost: '1.600–2.500 €',
                    ifIgnored: 'Übersprungene Kette und schwerer Ventilschaden am Motor (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '4.000–6.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '145.000–190.000 km • 11–13 J.',
                    action: 'Hochdruck-Kraftstoffpumpe prüfen & Einlassventile von Ölkohle reinigen',
                    cost: '550–950 €',
                    ifIgnored: 'Schlechtes Anspringen, Benzin im Motoröl & Leistungsverlust (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.700–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '185.000–235.000 km • 13–15+ J.',
                    action: 'Turbo-Ölleitung neu abdichten sowie Wasserpumpe & Thermostat wechseln',
                    cost: '480–780 €',
                    ifIgnored: 'Öl auf dem heißen Auspuff oder Unterversorgung des Turboladers (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.600 €'
                  }
                ]
              },
              ru: {
                headline: 'Спокойный турбо 156 л.с. — обязательна проверка цепи и звёзд M271',
                lowScoreReasons: [
                  'Износ цепи ГРМ и фазорегуляторов M271 EVO: Та же тонкая цепь, что и на C 200 CGI — замена (€1 800–2 600) часто требуется к 90–140 тыс. км.',
                  'Разжижение масла топливом: Короткие городские поездки ускоряют вытяжку цепи и износ натяжителя.'
                ],
                strengths: [
                  'Умеренная форсировка (156 л.с. / 250 Н·м) работает при меньших тепловых нагрузках, чем C 250 CGI.',
                  'Ходит 200 000–250 000+ км после замены цепи со звёздами и при смене масла раз в 10–12 тыс. км.'
                ],
                watchouts: [
                  'Осмотрите пластиковый корпус масляного фильтра и термостат на подтёки.',
                  'Меняйте масло каждые 10–12 тыс. км вместо заводских 25 тыс. км.'
                ],
                beforeYouBuy: [
                  'Послушать холодный пуск на предмет 2-секундного треска цепи.',
                  'Проверить щуп на запах бензина и корпус фильтра на сухость.',
                  'Запросить чеки о замене цепи ГРМ и фазорегуляторов.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло каждые 10–12 тыс. км / 1 год и тормозную жидкость раз в 2 года (1.8 турбо прямой впрыск)',
                    cost: '€160–260',
                    ifIgnored: 'Редкие ТО по 25 тыс. км быстро изнашивают тонкую цепь ГРМ',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в АКПП (60 тыс. / 4–5 лет), поставить маслосъёмные жгуты и проверить шланги',
                    cost: '€380–620',
                    ifIgnored: 'Старое масло даёт пинки, а рассохшиеся к 6 годам трубки и уплотнения текут',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Заменить прокладку корпуса масляного фильтра и уплотнения передних датчиков',
                    cost: '€320–520',
                    ifIgnored: 'Течи масла и антифриза или масло в проводке блока управления (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 300–2 300'
                  },
                  {
                    tier: 'red',
                    km: '115 000–155 000 км • 9–11 лет',
                    action: 'Заменить растянутую цепь ГРМ и оба фазорегулятора распредвалов',
                    cost: '€1 600–2 500',
                    ifIgnored: 'Перескок цепи и удар поршней по клапанам (узлы и жидкости также стареют с годами)',
                    damageCost: '€4 000–6 000'
                  },
                  {
                    tier: 'orange',
                    km: '145 000–190 000 км • 11–13 лет',
                    action: 'Проверить топливный насос высокого давления и почистить нагар на клапанах',
                    cost: '€550–950',
                    ifIgnored: 'Долгий запуск, разжижение масла бензином и потеря тяги (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 700–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '185 000–235 000 км • 13–15+ лет',
                    action: 'Обновить уплотнения маслоподачи турбины, помпу и термостат',
                    cost: '€480–780',
                    ifIgnored: 'Капли масла на горячем выпуске или масляное голодание турбины (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 600'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '525 kg Payload'],
              de: ['1.800 kg Anhängelast', '525 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 525 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.7,
            badges: {
              en: ['0–100 km/h: 8.9 s', '225 km/h Top Speed'],
              de: ['0–100 km/h: 8,9 s', '225 km/h Spitze'],
              ru: ['0–100 км/ч: 8,9 с', 'Макс. 225 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.9,
            badges: {
              en: ['250 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['250 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['250 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Light 4-Cyl RWD Nose', 'Composed Autobahn Stability'],
              de: ['Leichte 4-Zyl.-Vorderachse', 'Souveräner Geradeauslauf'],
              ru: ['Лёгкий передок 4-цил.', 'Устойчивость на автобане']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 7.0,
            badges: {
              en: ['7.6 L/100km', '155 g/km CO2'],
              de: ['7,6 L/100km', '155 g/km CO2'],
              ru: ['7,6 л/100 км', '155 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.9,
            badges: {
              en: ['1.8L CO2 Tax • Euro 5', 'Moderate W204 Insurance'],
              de: ['Faire 1.8-Steuer • Euro 5', 'Solide W204-Versicherung'],
              ru: ['Налог за 1,8 л • Euro 5', 'Умеренная страховка W204']
            }
          },
          maintenanceRepairCosts: {
            score: 4.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G/7G-Tronic Plus ATF + filter & replace spark plugs', de: '5G/7G-Tronic-Plus-Öl + Filter wechseln & Zündkerzen erneuern', ru: 'Замена масла/фильтра АКПП 5G/7G-Tronic и свечей зажигания' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Check fuel-in-oil dilution & thermostat / crankcase ventilation valve', de: 'Kraftstoff-Ölverdünnung, Thermostat & Kurbelgehäuseentlüftung prüfen', ru: 'Проверка попадания бензина в масло, термостата и клапана ВКГ' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'M271 EVO timing chain + both camshaft adjusters (2-sec cold-start rattle!)', de: 'M271 EVO Steuerkette + beide Nockenwellenversteller (Kaltstart-Rasseln!)', ru: 'Цепь ГРМ M271 EVO и обе муфты фазовращателей (треск при пуске!)' }, cost: '€1,500–2,400', risk: { en: 'Worn lock pins & stretched chain jump timing and destroy cylinder head', de: 'Ausgeschlagene Versteller lassen Kette überspringen — Motorschaden', ru: 'Износ муфт и растяжение цепи ведут к перескоку и ремонту ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust check & ELV electronic steering lock', de: 'W204 Hinterachsträger auf Rost prüfen & ELV-Lenkradverriegelung', ru: 'Осмотр заднего подрамника на коррозию и блокиратор руля ELV' }, cost: '€350–1,200', risk: { en: 'Subframe corrosion or no-start from jammed steering lock', de: 'Durchrostung oder Startblockade durch defekte ELV', ru: 'Коррозия подрамника или невозможность включить зажигание' }, damage: '€1,500–2,600' }
              ]
            },
            badges: {
              en: ['Affordable Routine Oils & Pads', 'Expensive Chain & Cam Gears'],
              de: ['Normale Öl- & Bremsenpreise', 'Teure Kette & Nockenwellenräder'],
              ru: ['Доступное мелкое ТО', 'Дорогая замена цепи и звёзд ГРМ']
            }
          },
          depreciationResale: {
            score: 8.1,
            badges: {
              en: ['Steady Facelift Demand', 'Chain Proof Boosts Price'],
              de: ['Gute Mopf-Nachfrage', 'Ketten-Beleg steigert Wert'],
              ru: ['Хороший спрос на рестайлинг', 'Замена ГРМ в плюсе к цене']
            }
          }
        }
      },
      {
        id: 'c180-1.6-turbo',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€10,200',
            specOverrides: { sprint0100: '8.5 s', topSpeed: '225 km/h', realWorldFuel: '6.7 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 8.3,
                badges: {
                  en: ['6.7 L/100km (6-MT)'],
                  de: ['6,7 L/100km (6-MT)'],
                  ru: ['6,7 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'cgi-4',
        buyerFitOverrides: {
          ideal: ['w204M274Updated', 'w204CabinQuality', 'w204AutoSmooth', 'globalPetrolCityZones'],
          skip: [
            'w204M274CoolantWatch',
            'w204FourCylThirst',
            'w204RearSubframeRust',
            'w204TightRearSpace'
          ]
        },
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 156,
        shortTitle: 'C 180 1.6 TURBO (M274)',
        fullName: '2013 Mercedes-Benz C 180 1.6 Turbo',
        engineBadge: 'C 180 (1.6L Turbo) • 156 HP',
        engineSubLabel: {
          en: '1.6L Turbo M274 (04/2012–06/2015) • 6-MT / 7G-Tronic Plus • 250 Nm',
          de: '1.6L Turbo M274 (04/2012–06/2015) • 6-Gang / 7G-Tronic Plus • 250 Nm',
          ru: '1.6 Турбо M274 (04/2012–06/2015) • 6-МКПП / 7G-Tronic Plus • 250 Н·м'
        },
        rarityLabel: {
          en: 'BEST PETROL FOUR',
          de: 'BESTER 4-ZYL.-BENZINER',
          ru: 'ЛУЧШИЙ БЕНЗИНОВЫЙ 4-ЦИЛ.'
        },
        originalMsrp: {
          en: '€33,290 New',
          de: '33.290 € Neu',
          ru: '€33 290 новый'
        },
        estUsedPrice: '€10,900',
        perkLabel: {
          en: '✦ Modern M274 Turbo • 7.0 L/100km • No M271 Timing Chain Failures',
          de: '✦ Moderner M274-Turbo • 7,0 L/100km • Ohne M271-Kettenproblem',
          ru: '✦ Современный M274 • 7,0 л/100 км • Без проблем цепи M271'
        },
        remarkablePositives: {
          en: [
            'MOST RELIABLE W204 4-CYL PETROL',
            '7.0 L/100KM ECONOMY',
            '8.5S 0–100 + 250 NM FROM 1,250 RPM',
            'LATEST FACELIFT CABIN & TECH',
            '7G-TRONIC PLUS START-STOP'
          ],
          de: [
            'ZUVERLÄSSIGSTER W204 4-ZYL.-BENZINER',
            '7,0 L/100KM VERBRAUCH',
            '8,5S 0–100 + 250 NM AB 1.250 U/MIN',
            'MODERNSTER MOPF-INNENRAUM',
            '7G-TRONIC PLUS START-STOPP'
          ],
          ru: [
            'САМЫЙ НАДЁЖНЫЙ БЕНЗИНОВЫЙ 4-ЦИЛ. W204',
            'РАСХОД ВСЕГО 7,0 Л/100 КМ',
            '8,5 С ДО 100 + 250 Н·М С 1 250 ОБ/МИН',
            'ЛУЧШАЯ ОТДЕЛКА РЕСТАЙЛИНГА',
            'АКПП 7G-TRONIC PLUS СО СТАРТ-СТОП'
          ]
        },
        notableNegatives: {
          en: [
            'HIGHER USED ENTRY PRICE',
            'CHECK REAR AXLE SUBFRAME RUST',
            'WATCH PLASTIC THERMOSTAT HOUSING'
          ],
          de: [
            'HÖHERER GEBRAUCHTPREIS',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN',
            'KUNSTSTOFF-THERMOSTATGEHÄUSE PRÜFEN'
          ],
          ru: [
            'ВЫШЕ ЦЕНА НА ВТОРИЧНОМ РЫНКЕ',
            'ПРОВЕРЯТЬ ЗАДНИЙ ПОДРАМНИК',
            'СЛЕДИТЬ ЗА КОРПУСОМ ТЕРМОСТАТА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.3,
          comfortCabin: 8.7,
          spacePracticality: 7.6,
          performanceDynamics: 7.9,
          runningCostsTco: 8.3
        },
        specOverrides: {
          engineName: { en: '1.6L I4 M274 Turbo (Chain)', de: '1.6L Reihenvierzylinder M274 Turbo', ru: '1.6L R4 M274 Турбо (Цепь)' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '525 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '8.5 s', topSpeed: '225 km/h', peakTorque: '250 Nm @ 1,250 rpm',
          passingPunch: { en: 'Refined 250 Nm From 1,250', de: 'Ruhige 250 Nm ab 1.250/min', ru: 'Тяга 250 Н·м уже с 1 250' },
          realWorldFuel: '7.0 L/100km', tankRange: '66 L (~940 km)', euroNorm: 'Euro 5/6 (Petrol)', taxInsurance: '@tierLowMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.7,
            badges: {
              en: ['Upgraded M274 Timing Drive', 'Watch Thermostat & Water Pump'],
              de: ['Standfester M274-Kettentrieb', 'Thermostat & Wasserpumpe prüfen'],
              ru: ['Доработанный ГРМ M274', 'Проверить термостат и помпу']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M274 DE16 AL · 1,595 cc' }, { k: 'architecture', v: { en: 'Inline-4 Modern Aluminium Turbo · Replaced M271 (2012+)', de: 'Reihenvierzylinder Alu-Turbo · Moderner M271-Nachfolger', ru: 'Рядный 4-цил. алюминиевый турбо · Преемник M271 (2012+)' } }], note: { en: 'The smartest 4-cylinder petrol W204: fixes the M271 cam-chain weakness, pairs with upgraded 7G-Tronic Plus, and sips just 7.0 L/100km.', de: 'Der klügste 4-Zylinder-Benziner im W204: löst das M271-Kettenproblem, kommt mit 7G-Tronic Plus und braucht nur 7,0 L/100km.', ru: 'Самый удачный 4-цилиндровый бензин W204: избавлен от проблем цепи M271, экономичный (7,0 л) и с 7G-Tronic Plus.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Late-Facelift M274 Direct-Injection Turbo— Solves the Earlier M271 Timing Chain Woes',
                strengths: [
                  'The 2012+ M274 replaced the M271, dropping the notorious cam-gear & timing chain failure rates dramatically.',
                  'Broad Torque Plateau: Hits 250 Nm at just 1,250 rpm for effortless overtaking with 7.0 L/100km real-world consumption.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Minor coolant leaks at the plastic thermostat housing or crankcase breather valve can appear past 100,000 km.',
                  'Use high-quality fuel and timely spark plugs to protect the piezo injectors.'
                ],
                beforeYouBuy: [
                  'Listen at cold idle on 2012–2013 cars for a rhythmic tapping sound inside the engine (early piston pin wear).',
                  'Check under the bonnet for dried pink coolant crust near the water pump and electric thermostat.',
                  'Take a spirited test drive to ensure there is no check-engine light or limp mode from a slipped camshaft sensor ring.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km synthetic oil changes & 2-yr brake fluid flush (skipping hurts turbo)',
                    cost: '€160–260',
                    ifIgnored: 'Stretched 25k oil intervals thicken oil & stress turbo and direct injectors',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G-Tronic Plus gearbox oil (60–80k / 5 yrs), swap plugs & check 6-yr aging rubber vent/pump hoses',
                    cost: '€380–600',
                    ifIgnored: 'Aged gearbox fluid shudders & 6-yr brittle plastic/rubber water pipes begin leaking',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Replace cracked crankcase vent hose & upgrade spark plugs and coils',
                    cost: '€260–420',
                    ifIgnored: 'Oil fumes, misfires under load & failed catalytic converter (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Replace leaking electric water pump & thermostat valve unit',
                    cost: '€450–720',
                    ifIgnored: 'Coolant warning on dashboard & sudden engine overheating (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '160,000–205,000 km • 11–13 yrs',
                    action: 'Fix slipped camshaft pulse wheel / sensor or high-pressure fuel line',
                    cost: '€550–900',
                    ifIgnored: 'Engine stuck in limp mode with long starting delays (components & fluids also degrade over years)',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'orange',
                    km: '195,000–245,000 km • 13–15+ yrs',
                    action: 'Clean direct-injection intake valve carbon & change gearbox fluid',
                    cost: '€480–780',
                    ifIgnored: 'Rough cold idle, higher fuel burn & bumpy shifting (components & fluids also degrade over years)',
                    damageCost: '€1,300–2,100'
                  }
                ]
              },
              de: {
                headline: 'Später Mopf-Turbobenziner (M274)— löst die Steuerketten-Probleme des Vorgängers',
                strengths: [
                  'Ab 04/2012 löst der M274 den M271 ab und beseitigt die hohen Ketten- und Verstellerschäden.',
                  '250 Nm schon ab 1.250 U/min sorgen für elastischen Durchzug bei rund 7,0 L/100km Verbrauch.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Ab ca. 100.000 km gelegentlich Kühlmittelverlust am Kunststoff-Thermostatgehäuse oder Entlüftungsventil.',
                  'Regelmäßige Zündkerzenwechsel und gutes Motoröl schützen die Piezo-Injektoren.'
                ],
                beforeYouBuy: [
                  'Bei Baujahr 2012–2013 im kalten Leerlauf auf ein rhythmisches Tickern aus dem Motorblock hören (früher Kolbenbolzen-Verschleiß).',
                  'Im Motorraum nach rosa verkrusteten Kühlwasserresten an der schaltbaren Wasserpumpe und dem Thermostat suchen.',
                  'Zügige Probefahrt machen: Geht die Motorkontrollleuchte an oder fehlt plötzlich Leistung, ist oft das Impulsrad verrutscht.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Öl alle 10–15.000 km / 1 J. wechseln & alle 2 J. Bremsflüssigkeit (schont Turbo & Kette)',
                    cost: '160–260 €',
                    ifIgnored: 'Lange 25.000er-Intervalle lassen Altöl verklumpen & belasten den Lader',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Tronic-Plus-Öl (60–80 Tkm / 5 J.) & Kerzen wechseln; nach 6 J. gealterte Entlüftung/Pumpe prüfen',
                    cost: '380–600 €',
                    ifIgnored: 'Altes Automatiköl ruckt & poröse 6-J.-Kunststoffleitungen an der Pumpe werden undicht',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Gerissene Kurbelgehäuse-Entlüftung, Zündkerzen & Spulen erneuern',
                    cost: '260–420 €',
                    ifIgnored: 'Öldunst, Zündaussetzer unter Last & Kat-Schaden (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Undichte schaltbare Wasserpumpe & Thermostat-Modul ersetzen',
                    cost: '450–720 €',
                    ifIgnored: 'Kühlmittelverlust & plötzliches Überhitzen auf der Autobahn (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '160.000–205.000 km • 11–13 J.',
                    action: 'Verrutschtes Nockenwellen-Impulsrad prüfen & Kraftstoffleitung abdichten',
                    cost: '550–900 €',
                    ifIgnored: 'Dauerhafter Notlauf, langes Starten & Benzingeruch (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'orange',
                    km: '195.000–245.000 km • 13–15+ J.',
                    action: 'Einlassventile von Verkokung reinigen & Getriebeöl wechseln',
                    cost: '480–780 €',
                    ifIgnored: 'Ruckeln beim Kaltstart, höherer Verbrauch & harte Gangwechsel (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.300–2.100 €'
                  }
                ]
              },
              ru: {
                headline: 'Рестайлинговый турбомотор M274— решил проблемы цепи ГРМ серии M271',
                strengths: [
                  'Двигатель M274 с 2012 года избавился от массового износа звёзд и цепи ранних M271.',
                  '250 Н·м уже с 1 250 об/мин при реальном расходе около 7,0 л/100 км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'После 100 тыс. км возможны подтекания пластикового корпуса термостата или клапана вентиляции картера.',
                  'Чувствителен к качеству топлива и своевременной замене свечей для сохранности пьезофорсунок.'
                ],
                beforeYouBuy: [
                  'На машинах 2012–2013 годов послушайте холодный мотор: ритмичный стук может указывать на ранний износ поршневых пальцев.',
                  'Осмотрите двигатель на предмет розового налёта антифриза у управляемого водяного насоса и термостата.',
                  'На тест-драйве убедитесь, что не загорается ошибка двигателя из-за провернувшегося задающего диска распредвала.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло раз в 10–15 тыс. км / 1 год и тормозную жидкость каждые 2 года (для турбины)',
                    cost: '€160–260',
                    ifIgnored: 'Длинные интервалы по 25 тыс. км густеют в моторах с прямым впрыском и губят турбину',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic Plus (60–80 тыс. / 5 лет), свечи и осмотреть стареющие шланги/помпу к 6 годам',
                    cost: '€380–600',
                    ifIgnored: 'Старая жидкость даёт рывки АКПП, а пластик и трубки охлаждения к 6 годам подтекают',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Заменить трубку вентиляции картера, свечи и катушки зажигания',
                    cost: '€260–420',
                    ifIgnored: 'Запах масла, пропуски зажигания и повреждение катализатора',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Заменить подтекающую управляемую помпу и электронный термостат',
                    cost: '€450–720',
                    ifIgnored: 'Утечка антифриза и перегрев мотора на трассе (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '160 000–205 000 км • 11–13 лет',
                    action: 'Восстановить положение диска датчика распредвала и проверить топливные трубки',
                    cost: '€550–900',
                    ifIgnored: 'Переход в аварийный режим и долгий запуск двигателя (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'orange',
                    km: '195 000–245 000 км • 13–15+ лет',
                    action: 'Почистить нагар на впускных клапанах и обновить масло в коробке',
                    cost: '€480–780',
                    ifIgnored: 'Неровный холодный запуск, рост расхода и жёсткие переключения (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 300–2 100'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.2,
            badges: {
              en: ['Refined 7G-Tronic Plus / 6-MT', 'Upgraded Low-Wear Converter'],
              de: ['Feine 7G-Tronic Plus / 6-Gang', 'Verbesserter Wandlerautomat'],
              ru: ['Обновлённый 7G-Tronic Plus', 'Плавный и надёжный автомат']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.4,
            badges: {
              en: ['Late Facelift W204 Electrics', 'Fewer ELV & Taillight Faults'],
              de: ['Späte W204-Facelift-Elektrik', 'Ausgereifte Steuergeräte'],
              ru: ['Доработанная электрика Mopf', 'Минимум проблем с ELV']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 9.2,
            badges: {
              en: ['Soft-Touch Mopf Dash & Chrome', 'Color Cluster & Dual-Zone'],
              de: ['Edler Facelift-Innenraum', 'Farbdisplay & Klimaautomatik'],
              ru: ['Мягкий салон рестайлинга', 'Цветной экран и двухзонный климат']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.4,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '525 kg Payload'],
              de: ['1.800 kg Anhängelast', '525 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 525 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.1,
            badges: {
              en: ['0–100 km/h: 8.5 s', '225 km/h Top Speed'],
              de: ['0–100 km/h: 8,5 s', '225 km/h Spitze'],
              ru: ['0–100 км/ч: 8,5 с', 'Макс. 225 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.9,
            badges: {
              en: ['250 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['250 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['250 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.9,
            badges: {
              en: ['Light 1.6L Front Axle', 'Crisp Facelift Steering'],
              de: ['Leichte 1.6L Vorderachse', 'Präzise Mopf-Lenkung'],
              ru: ['Лёгкий передок 1.6L', 'Точное рулевое управление']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 8.0,
            badges: {
              en: ['7.0 L/100km', '136 g/km CO2'],
              de: ['7,0 L/100km', '136 g/km CO2'],
              ru: ['7,0 л/100 км', '136 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 8.4,
            badges: {
              en: ['Low 1.6L Tax (136 g) • Euro 5', 'Reasonable W204 Insurance'],
              de: ['Niedrige 1.6-Steuer (136 g)', 'Solide W204-Versicherung'],
              ru: ['Малый налог 1,6 (136 г) • Euro 5', 'Умеренная страховка W204']
            }
          },
          maintenanceRepairCosts: {
            score: 8.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic Plus (722.9) ATF + filter & replace spark plugs', de: '7G-Tronic-Plus-Öl (722.9) + Filter wechseln & Zündkerzen erneuern', ru: 'Замена масла/фильтра 7G-Tronic Plus и свечей зажигания' }, cost: '€300–450' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect electronic thermostat housing & coolant pump vacuum valve', de: 'Elektronisches Thermostat & schaltbare Wasserpumpe prüfen', ru: 'Проверка электронного термостата и вакуумного клапана помпы' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'M274 camshaft impulse wheel slip / cam-adjuster & thermostat replacement', de: 'M274 Nockenwellen-Geberrad / Versteller & Thermostat erneuern', ru: 'Проворот импульсного диска распредвала M274 / муфта и термостат' }, cost: '€650–1,350', risk: { en: 'Check Engine light, rough idle, or slow warm-up with high fuel burn', de: 'Motorkontrollleuchte, unrunder Lauf oder dauerhaft zu kalter Motor', ru: 'Ошибка фаз, неровная работа или постоянный недогрев двигателя' }, damage: '€1,600–2,400' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust check & ELV steering-lock motor', de: 'W204 Hinterachsträger-Rostprüfung & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника и блокиратора руля ELV' }, cost: '€350–1,200', risk: { en: 'Structural rear subframe corrosion or locked ignition', de: 'Hinterachs-Durchrostung oder blockierte Zündung', ru: 'Коррозия подрамника или блокировка запуска' }, damage: '€1,500–2,500' }
              ]
            },
            badges: {
              en: ['Fewer Unexpected Failures', 'Standard Mercedes Parts Pricing'],
              de: ['Wenige außerplanmäßige Defekte', 'Normale Mercedes-Teilepreise'],
              ru: ['Минимум неплановых поломок', 'Стандартные цены Mercedes']
            }
          },
          depreciationResale: {
            score: 8.7,
            badges: {
              en: ['Top Petrol Resale Demand', 'Late-Model Facelift Premium'],
              de: ['Sehr gefragter Benziner', 'Starker Mopf-Werterhalt'],
              ru: ['Высокий спрос на M274', 'Отличная ликвидность']
            }
          }
        }
      },
      {
        id: 'c200-kompressor',
        defaultGearboxId: '5g-tronic',
        gearboxes: [
          { id: '5g-tronic', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€7,100',
            specOverrides: { sprint0100: '8.6 s', topSpeed: '235 km/h', realWorldFuel: '8.1 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 6.1,
                badges: {
                  en: ['8.1 L/100km (6-MT)'],
                  de: ['8,1 L/100km (6-MT)'],
                  ru: ['8,1 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'kompressor',
        dossierGroup: 'petrol-conv-auto',
        isDefault: false,
        fuelType: 'petrol',
        hp: 184,
        shortTitle: 'C 200 KOMPRESSOR',
        fullName: '2008 Mercedes-Benz C 200 Kompressor',
        engineBadge: 'C 200 Kompressor • 184 HP',
        engineSubLabel: {
          en: '1.8L Supercharged M271 (03/2007–04/2010) • 6-MT / 5-AT • 250 Nm',
          de: '1.8L Kompressor M271 (03/2007–04/2010) • 6-Gang / 5-AT • 250 Nm',
          ru: '1.8 Компрессор M271 (03/2007–04/2010) • 6-МКПП / 5-АКПП • 250 Н·м'
        },
        rarityLabel: {
          en: 'LIVELY SUPERCHARGED SEDAN',
          de: 'SPRITZIGER KOMPRESSOR',
          ru: 'БОДРЫЙ КОМПРЕССОР'
        },
        originalMsrp: {
          en: '€33,201 New',
          de: '33.201 € Neu',
          ru: '€33 201 новый'
        },
        estUsedPrice: '€7,600',
        perkLabel: {
          en: '✦ 184 HP Zero-Lag Supercharger • 235 km/h • Bulletproof 5-Speed Auto',
          de: '✦ 184 PS ohne Turboloch • 235 km/h Spitze • Robuste 5G-Tronic Automatik',
          ru: '✦ 184 л.с. без турбоямы • Макс. 235 км/ч • Надёжная АКПП 5G-Tronic'
        },
        remarkablePositives: {
          en: [
            '184 HP & 8.6S 0–100 PACE',
            'NO DIRECT-INJECTION CARBON ISSUES',
            'ROBUST 5-SPEED AUTOMATIC',
            'CRISP RWD CHASSIS BALANCE',
            '235 KM/H AUTOBAHN CAPABILITY'
          ],
          de: [
            '184 PS & 8,6S 0–100 DURCHZUG',
            'KEINE VERKOKUNG (SAUGROHR)',
            'UNVERWÜSTLICHE 5G-TRONIC',
            'AUSGEWOGENER HECKANTRIEB',
            '235 KM/H AUTOBAHN-TEMPO'
          ],
          ru: [
            '184 Л.С. И РАЗГОН 8,6 С ДО 100',
            'НЕТ НАГАРА НА КЛАПАНАХ (MPI)',
            'НЕУБИВАЕМАЯ 5G-TRONIC',
            'ЧЁТКИЙ ЗАДНИЙ ПРИВОД',
            'УВЕРЕННЫЕ 235 КМ/Ч НА ТРАССЕ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTIER 8.5 L/100KM CONSUMPTION',
            'TIMING CHAIN STRETCH PAST 120K KM',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'DURSTIG: 8,5 L/100KM',
            'STEUERKETTE AB 120 TKM PRÜFEN',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'РАСХОД 8,5 Л/100 КМ',
            'ЦЕПЬ ГРМ ТРЕБУЕТ ПРОВЕРКИ ПОСЛЕ 120 ТЫС.',
            'ОСМОТРЕТЬ ЗАДНИЙ ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 7.8,
          runningCostsTco: 7.4
        },
        specOverrides: {
          engineName: { en: '1.8L I4 Kompressor 184', de: '1.8L Reihenvierzylinder 184 PS', ru: '1.8L R4 Kompressor 184' },
          forcedInduction: '@supercharger', injection: '@port', timingDrive: '@chain',
          gearbox: '@auto5',
          clutchDmf: '@torqueConv', payloadRoof: '535 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '8.6 s', topSpeed: '235 km/h', peakTorque: '250 Nm @ 2,800 rpm',
          passingPunch: { en: 'Brisk Lag-Free Supercharger', de: 'Kräftiger Kompressor-Schub', ru: 'Бодрый безынерционный подхват' },
          realWorldFuel: '8.5 L/100km', tankRange: '66 L (~775 km)', euroNorm: 'Euro 4 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.1,
            badges: {
              en: ['M271 184 HP Port-Injected', 'Watch Simplex Chain & Oil Cables'],
              de: ['M271 184 PS Saugrohr-Block', 'Simplex-Kette & Ölstoppkabel'],
              ru: ['M271 184 л.с. (впрыск MPI)', 'Контроль цепи и стоп-кабелей']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M271 E18 ML (184 HP) · 1,796 cc' }, { k: 'architecture', v: { en: 'Inline-4 Aluminium · Higher-Boost Kompressor + Port Inj.', de: 'Reihenvierzylinder Alu · Stärkerer Kompressor + Saugrohr', ru: 'Рядный 4-цил. алюминий · Форсированный компрессор' } }], note: { en: 'Noticeably livelier than the C180 Kompressor with the same bulletproof 5G-Tronic and port-injection simplicity; inspect M271 timing chain.', de: 'Merklich spritziger als der C180 Kompressor bei gleicher robuster 5G-Tronic; M271-Steuerkette prüfen.', ru: 'Заметно бодрее C180 Kompressor при той же неубиваемой 5G-Tronic; проверяйте состояние цепи M271.' } },
              forcedInduction: { specs: [{ k: 'boostType', v: { en: 'Belt-Driven Roots Supercharger (184 HP Spec)', de: 'Mechanischer Kompressor (184-PS-Auslegung)', ru: 'Механический компрессор Roots (184 л.с.)' } }], note: { en: 'Crisp, immediate throttle response with classic Mercedes mechanical durability.', de: 'Direkter Antritt ohne Verzögerung und sehr robuste Kompressor-Mechanik.', ru: 'Мгновенная реакция на газ и высокая механическая надёжность.' } },
              injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Higher-Output Port-Injected Supercharger— Punchier Than C 180K',
                strengths: [
                  '184 HP and 250 Nm with zero turbo lag or complex variable turbo vanes.',
                  'Clean intake valves and simple fuel system tolerate urban commuting far better than direct-injection CGIs.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Simplex timing chain and camshaft adjuster wear around 110,000–145,000 km— listen carefully at cold idle.',
                  'Verify oil-blocker adapter cables on cam magnets and check cracked breather hoses under the supercharger.'
                ],
                beforeYouBuy: [
                  'Insist on hearing a dead-cold startup: any rattling in the first two seconds means the timing chain or gears are due.',
                  'Check service history for 10,000–15,000 km oil changes— extra supercharger power punishes neglected oil.',
                  'Inspect under the front timing cover and sensor plugs for oil leaks and check that power builds briskly with zero hesitation.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Change synthetic oil every 10–12,000 km / 1 yr & flush brake fluid at 2 yrs (higher-boost 1.8L supercharged)',
                    cost: '€160–260',
                    ifIgnored: 'Long 25k oil intervals thin oil & wear the slim timing chain early',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G gearbox oil (60k / 4–5 yrs), fit cam-sensor oil blockers & check 6-yr rubber hoses',
                    cost: '€380–620',
                    ifIgnored: 'Aged gearbox oil shifts harshly & perished hoses/seals weep oil into wiring',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Replace split intake breather hoses & refresh transmission fluid',
                    cost: '€360–560',
                    ifIgnored: 'Air leaks, check-engine lights & rougher gearbox shifts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–2,000'
                  },
                  {
                    tier: 'red',
                    km: '115,000–155,000 km • 9–11 yrs',
                    action: 'Replace timing chain, worn gear teeth & front cam magnet seals',
                    cost: '€1,250–1,950',
                    ifIgnored: 'Chain jumps timing & bends valves or oils the wiring harness (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,600–5,500'
                  },
                  {
                    tier: 'orange',
                    km: '155,000–200,000 km • 11–13 yrs',
                    action: 'Replace water pump, thermostat & supercharger drive belt kit',
                    cost: '€420–680',
                    ifIgnored: 'Overheating engine or snapped belt leaving you stranded (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,400'
                  },
                  {
                    tier: 'orange',
                    km: '195,000–245,000 km • 13–15+ yrs',
                    action: 'Change supercharger oil & replace worn engine mounts and suspension bushings',
                    cost: '€600–950',
                    ifIgnored: 'Noisy supercharger rotors & heavy cabin vibration at idle (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,400'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger 184-PS-Kompressor mit Saugrohreinspritzung— deutlich spritziger als C 180K',
                strengths: [
                  'Keine empfindlichen Hochdruckinjektoren und keine Einlass-Verkokung.',
                  'Mit regelmäßiger Öl-Spülung extrem langlebig.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Simplex-Steuerkette und Nockenwellenversteller zwischen 110.000 und 145.000 km prüfen.',
                  'Ölstoppkabel an den Verstellmagneten und die Kurbelgehäuseentlüftung unter dem Kompressor checken.'
                ],
                beforeYouBuy: [
                  'Auf einem echten Kaltstart bestehen: Rasselt es 1–2 Sekunden metallisch, sind Steuerkette oder Zahnräder fällig.',
                  'Kurze Ölwechsel alle 10.000–15.000 km prüfen– der kräftigere Kompressor bestraft verschlepptes Öl besonders schnell.',
                  'Frontabdeckung und Stecker auf Öl prüfen und testen, ob der Motor spontan und ohne Ruckeln durchzieht.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Motoröl alle 10–12.000 km / 1 J. wechseln & Bremsflüssigkeit alle 2 J. (kräftiger 1.8L Kompressor)',
                    cost: '160–260 €',
                    ifIgnored: 'Zu lange 25.000er-Intervalle lassen die schmale Steuerkette früh verschleißen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60 Tkm / 4–5 J.) wechseln, Ölstoppkabel verbauen & 6-J.-Schläuche prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Gealtertes Getriebeöl schaltet hart & poröse 6-J.-Dichtungen ölen den Kabelbaum ein',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Rissige Entlüftungsschläuche tauschen & Getriebeöl wechseln',
                    cost: '360–560 €',
                    ifIgnored: 'Motorkontrollleuchte durch Falschluft & ruppige Schaltvorgänge (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–2.000 €'
                  },
                  {
                    tier: 'red',
                    km: '115.000–155.000 km • 9–11 J.',
                    action: 'Steuerkette, Zahnräder & vordere Verstellmagnet-Dichtungen erneuern',
                    cost: '1.250–1.950 €',
                    ifIgnored: 'Übersprungene Kette mit Ventilschaden oder veröltem Kabelbaum (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.600–5.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '155.000–200.000 km • 11–13 J.',
                    action: 'Wasserpumpe, Thermostat & Riementrieb komplett erneuern',
                    cost: '420–680 €',
                    ifIgnored: 'Motorüberhitzung oder Riemenriss mitten auf der Fahrt (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '195.000–245.000 km • 13–15+ J.',
                    action: 'Kompressoröl wechseln sowie Motorlager & Vorderachsbuchsen erneuern',
                    cost: '600–950 €',
                    ifIgnored: 'Heulender Kompressor & starkes Brummen im Stand (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Мощный компрессор 184 л.с. без турбоямы— простая топливная система',
                strengths: [
                  '184 л.с. и 250 Н·м без запаздывания наддува.',
                  'Нет ТНВД, пьезофорсунок и нагара на впуске.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Однорядная цепь ГРМ и звёзды фазовращателей требуют внимания к 110–145 тыс. км.',
                  'Проверить стоп-кабели магнитов распредвалов и шланги ВКГ под компрессором.'
                ],
                beforeYouBuy: [
                  'Настаивайте на запуске на холодную: лязг первые 1–2 секунды означает износ цепи или звёздочек.',
                  'Ищите частую замену масла раз в 10–15 тыс. км— более мощный компрессор чувствителен к старому маслу.',
                  'Проверьте отсутствие подтёков масла спереди мотора и убедитесь в ровной тяге без провалов.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло каждые 10–12 тыс. км / 1 год и тормозную жидкость раз в 2 года (мощный 1.8 компрессор)',
                    cost: '€160–260',
                    ifIgnored: 'Редкие ТО по 25 тыс. км быстро изнашивают тонкую цепь ГРМ',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в АКПП (60 тыс. / 4–5 лет), поставить маслосъёмные жгуты и проверить шланги',
                    cost: '€380–620',
                    ifIgnored: 'Старое масло даёт пинки, а рассохшиеся к 6 годам трубки и уплотнения текут',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Заменить рассохшиеся трубки вентиляции и масло в трансмиссии',
                    cost: '€360–560',
                    ifIgnored: 'Ошибки по смеси, нестабильный холостой ход и пинки коробки',
                    damageCost: '€1 200–2 000'
                  },
                  {
                    tier: 'red',
                    km: '115 000–155 000 км • 9–11 лет',
                    action: 'Заменить цепь ГРМ, звёздочки и уплотнения передних датчиков',
                    cost: '€1 250–1 950',
                    ifIgnored: 'Перескок цепи с поломкой клапанов или масло в проводке (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 600–5 500'
                  },
                  {
                    tier: 'orange',
                    km: '155 000–200 000 км • 11–13 лет',
                    action: 'Заменить водяной насос, термостат и приводной ремень с роликами',
                    cost: '€420–680',
                    ifIgnored: 'Перегрев двигателя или обрыв ремня в дороге (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 400'
                  },
                  {
                    tier: 'orange',
                    km: '195 000–245 000 км • 13–15+ лет',
                    action: 'Сменить масло в компрессоре, обновить опоры двигателя и сайлентблоки',
                    cost: '€600–950',
                    ifIgnored: 'Гул роторов компрессора и сильная вибрация на холостых (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 5-Speed Auto / 6-MT', 'Simple 722.6 Converter Box'],
              de: ['Unverwüstliche 5G-AT / 6-Gang', 'Robuster Wandlerautomat'],
              ru: ['Неубиваемый 5-АКПП / 6-МКПП', 'Простой гидротрансформатор']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '535 kg Payload'],
              de: ['1.800 kg Anhängelast', '535 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 535 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.0,
            badges: {
              en: ['0–100 km/h: 8.6 s', '235 km/h Top Speed'],
              de: ['0–100 km/h: 8,6 s', '235 km/h Spitze'],
              ru: ['0–100 км/ч: 8,6 с', 'Макс. 235 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.9,
            badges: {
              en: ['250 Nm Boost From Low RPM', 'Easy Highway Overtaking'],
              de: ['250 Nm früher Schub', 'Guter Durchzug auf Autobahn'],
              ru: ['250 Н·м ровной тяги', 'Лёгкий обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Crisp RWD Balance', 'Composed Cornering Grip'],
              de: ['Direkte Heckantriebs-Balance', 'Spurstabile Kurvenlage'],
              ru: ['Отточенный баланс RWD', 'Уверенная устойчивость в поворотах']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 5.6,
            badges: {
              en: ['Thirsty (8.5 L/100km)', '185 g/km CO2'],
              de: ['Durstig (8,5 L/100km)', '185 g/km CO2'],
              ru: ['Прожорливый (8,5 л/100 км)', '185 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.3,
            badges: {
              en: ['1.8L Tax Saves Over V6 • Euro 4', 'Mid-Class 184 HP Insurance'],
              de: ['1.8-Steuer spart ggü. V6', 'Mittlere 184-PS-Versicherung'],
              ru: ['Налог 1,8 ниже V6 • Euro 4', 'Средняя страховка (184 л.с.)']
            }
          },
          maintenanceRepairCosts: {
            score: 7.3,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G-Tronic (722.6) ATF + filter & inspect cam-magnet oil blocker leads', de: '5G-Tronic-Öl (722.6) + Filter wechseln & Ölstoppkabel an Nockenwellenmagneten prüfen', ru: 'Замена масла/фильтра 5G-Tronic (722.6) и проверка магнитов фазовращателей' }, cost: '€240–360' },
                { when: { en: 'Every 80,000–100,000 km', de: 'Alle 80.000–100.000 km', ru: 'Каждые 80–100 тыс. км' }, action: { en: 'Replace spark plugs, crankcase breather hoses & supercharger belt', de: 'Zündkerzen, Teillastentlüftung (Schläuche) & Kompressorriemen ersetzen', ru: 'Замена свечей, шлангов вентиляции картера и ремня компрессора' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '110,000–160,000 km', de: '110.000–160.000 km', ru: '110 000–160 000 км' }, action: { en: 'M271 simplex timing chain & worn camshaft adjuster sprockets', de: 'M271 Simplex-Steuerkette & abgenutzte Nockenwellenversteller-Räder', ru: 'Замена тонкой цепи ГРМ M271 и звёзд фазовращателей' }, cost: '€1,100–1,900', risk: { en: 'Stretched chain shears sprocket teeth, jumps timing, and bends valves', de: 'Gelängte Kette fräst Zahnräder ab und überspringt — Motorschaden', ru: 'Растянутая цепь стачивает зубья звёзд, перескакивает и гнёт клапаны' }, damage: '€3,500–5,500' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust inspection & ELV steering-lock motor', de: 'W204 Hinterachsträger-Rostprüfung (MB-Kulanz) & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника на коррозию и моторчик ELV руля' }, cost: '€350–1,200', risk: { en: 'Rusted subframe fails inspection; failed ELV prevents ignition turn-on', de: 'Durchrostung stoppt HU; defekte ELV blockiert den Fahrzeugstart', ru: 'Гнилой подрамник опасен; отказ ELV полностью блокирует запуск' }, damage: '€1,500–2,600' }
              ]
            },
            badges: {
              en: ['No High-Pressure Fuel Parts', 'Budget Timing Chain Check'],
              de: ['Keine teure Hochdrucktechnik', 'Steuerkette rechtzeitig prüfen'],
              ru: ['Нет дорогой топливной DI', 'Профилактика цепи ГРМ']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strong Price-Performance Floor', 'Good Enthusiast Demand'],
              de: ['Top Preis-Leistung gebraucht', 'Gute Nachfrage'],
              ru: ['Отличная цена за 184 л.с.', 'Хорошая ликвидность']
            }
          }
        }
      },
      {
        id: 'c200-cgi',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '5g-tronic',
            estUsedPrice: '€9,300',
            specOverrides: { sprint0100: '8.1 s', topSpeed: '235 km/h', realWorldFuel: '8.2 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 7.4,
                badges: {
                  en: ['0–100 km/h: 8.1 s (5G-AT)', '235 km/h Top Speed'],
                  de: ['0–100 km/h: 8,1 s (5G-AT)', '235 km/h Spitze'],
                  ru: ['0–100 км/ч: 8,1 s (5G-AT)', 'Макс. 235 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.3,
                badges: {
                  en: ['8.2 L/100km (5G-AT)'],
                  de: ['8,2 L/100km (5G-AT)'],
                  ru: ['8,2 L/100km (5G-AT)']
                }
              }
            }
          },
          {
            id: '6-mt',
            estUsedPrice: '€9,200',
            specOverrides: { sprint0100: '7.8 s', topSpeed: '237 km/h', realWorldFuel: '7.4 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 7.2,
                badges: {
                  en: ['7.4 L/100km (6-MT)'],
                  de: ['7,4 L/100km (6-MT)'],
                  ru: ['7,4 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'cgi-4',
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 184,
        shortTitle: 'C 200 CGI TURBO',
        fullName: '2012 Mercedes-Benz C 200 CGI',
        engineBadge: 'C 200 CGI • 184 HP',
        engineSubLabel: {
          en: '1.8L Turbo M271 (11/2009–06/2015) • 6-MT / 5-AT / 7G-Plus • 270 Nm',
          de: '1.8L Turbo M271 (11/2009–06/2015) • 6-Gang / 5-AT / 7G-Plus • 270 Nm',
          ru: '1.8 Турбо M271 (11/2009–06/2015) • 6-МКПП / 5-АКПП / 7G-Plus • 270 Н·м'
        },
        rarityLabel: {
          en: 'SWEET-SPOT TURBO SEDAN',
          de: 'AUSGEWOGENER TURBO',
          ru: 'ЗОЛОТАЯ СЕРЕДИНА БЕНЗИН'
        },
        originalMsrp: {
          en: '€36,116 New',
          de: '36.116 € Neu',
          ru: '€36 116 новый'
        },
        estUsedPrice: '€9,800',
        perkLabel: {
          en: '✦ 7.8s 0–100 & 270 Nm • 7G-Tronic Plus (2011+) • 7.8 L/100km',
          de: '✦ 7,8s 0–100 & 270 Nm • 7G-Tronic Plus (ab 2011) • 7,8 L/100km',
          ru: '✦ 7,8 с до 100 и 270 Н·м • 7G-Tronic Plus (2011+) • 7,8 л/100 км'
        },
        remarkablePositives: {
          en: [
            'STRONG 270 NM MID-RANGE PUNCH',
            '7.8S 0–100 • 237 KM/H TOP SPEED',
            'SMOOTH 7G-TRONIC PLUS (2011+)',
            'CRISP RWD CHASSIS BALANCE',
            'REASONABLE 7.8 L/100KM ECONOMY'
          ],
          de: [
            'KRAFTVOLLE 270 NM DURCHZUG',
            '7,8S 0–100 • 237 KM/H SPITZE',
            'SANFTE 7G-TRONIC PLUS (AB 2011)',
            'AGILES HECKANTRIEB-FAHRWERK',
            'SOLIDE 7,8 L/100KM VERBRAUCH'
          ],
          ru: [
            'УВЕРЕННАЯ ТЯГА 270 Н·М',
            '7,8 С ДО 100 • МАКС. 237 КМ/Ч',
            'ПЛАВНАЯ 7G-TRONIC PLUS (2011+)',
            'ОСТРОЕ ШАССИ С ЗАДНИМ ПРИВОДОМ',
            'УМЕРЕННЫЙ РАСХОД 7,8 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH TIMING CHAIN & CAM GEAR RISK',
            'FUEL-IN-OIL DILUTION ON SHORT TRIPS',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'HOHES STEUERKETTEN- & VERSTELLERRISIKO',
            'ÖLVERDÜNNUNG BEI KURZSTRECKE',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'РИСК ИЗНОСА ЦЕПИ И ФАЗОВРАЩАТЕЛЕЙ',
            'РАЗЖИЖЕНИЕ МАСЛА НА КОРОТКИХ ПОЕЗДКАХ',
            'ПРОВЕРЯТЬ ЗАДНИЙ ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.8,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 8.0,
          runningCostsTco: 7.5
        },
        specOverrides: {
          engineName: { en: '1.8L I4 CGI 184 Turbo', de: '1.8L Reihenvierzylinder 184 CGI', ru: '1.8L R4 CGI 184 Турбо' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '525 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '7.8 s', topSpeed: '237 km/h', peakTorque: '270 Nm @ 1,800 rpm',
          passingPunch: { en: 'Brisk 270 Nm Autobahn Pull', de: 'Flotter 270-Nm-Durchzug', ru: 'Уверенный подхват 270 Н·м' },
          realWorldFuel: '7.8 L/100km', tankRange: '66 L (~845 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierMod', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['M271 EVO Chain & Gear Risk', 'Check Verified Chain Overhaul'],
              de: ['M271 EVO Ketten- & Verstellerrisiko', 'Ketten-Beleg verlangen'],
              ru: ['Риск цепи и звёзд M271 EVO', 'Нужна история замены ГРМ']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M271 EVO (184 HP) · 1,796 cc' }, { k: 'architecture', v: { en: 'Inline-4 Direct-Injection Turbo · Simplex Chain', de: 'Reihenvierzylinder Turbo-DI · Simplex-Kette', ru: 'Рядный 4-цил. турбо DI · Цепь M271 EVO' } }], note: { en: 'Sub-8-second pace with sensible 7.8 L/100km economy; always confirm updated M271 EVO cam adjusters and chain on cold start.', de: 'Unter 8 Sekunden auf 100 bei fairen 7,8 L/100km; unbedingt M271-EVO-Steuerkette und Versteller beim Kaltstart prüfen.', ru: 'Разгон 7,8 с при умеренном расходе 7,8 л; обязательно проверьте цепь и муфты M271 EVO на холодную.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Punchy 184 HP Turbo Four — Vulnerable M271 Timing Chain & Cam Adjusters',
                lowScoreReasons: [
                  'M271 EVO Timing Chain & Cam Gear Wear: Thin simplex timing chain and camshaft adjuster sprockets wear prematurely between 90,000 and 140,000 km (€1,800–€2,600 repair).',
                  'Short-Trip Petrol Dilution & Filter Housing Leaks: Fuel thinning the oil speeds up chain wear, while plastic oil-filter housings seep oil or coolant.'
                ],
                strengths: [
                  'Strong 270 Nm low-end turbo torque makes everyday passing effortless.',
                  'Can reach 200,000–250,000+ km once updated timing chain and cam gears are fitted and oil is changed every 10,000 km.'
                ],
                watchouts: [
                  'Check high-pressure fuel pump and thermostat housing for age seepage past 120,000 km.',
                  'Keep 10,000–12,000 km synthetic oil intervals to avoid fuel dilution.'
                ],
                beforeYouBuy: [
                  'Demand a dead-cold startup and listen for a 2-second metallic chain rattle or slow cranking.',
                  'Look for workshop invoices proving timing chain and camshaft adjuster gear replacement.',
                  'Check around the plastic oil filter housing and turbo pipes for wet oil or coolant spots.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Change synthetic oil every 10–12,000 km / 1 yr & flush brake fluid at 2 yrs (1.8L turbo 184 hp)',
                    cost: '€160–260',
                    ifIgnored: 'Long 25k oil intervals thin oil & wear the slim timing chain early',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G gearbox oil (60k / 4–5 yrs), fit cam-sensor oil blockers & check 6-yr rubber hoses',
                    cost: '€380–620',
                    ifIgnored: 'Aged gearbox oil shifts harshly & perished hoses/seals weep oil into wiring',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Replace leaking oil filter housing seals & add oil-blocker wire leads',
                    cost: '€340–540',
                    ifIgnored: 'Coolant/oil mixing leak & engine oil damaging main wiring',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'red',
                    km: '115,000–155,000 km • 9–11 yrs',
                    action: 'Replace timing chain, tensioner & both variable cam gears',
                    cost: '€1,650–2,550',
                    ifIgnored: 'Skipped chain destroys cylinder head valves in seconds (components & fluids also degrade over years)',
                    damageCost: '€4,200–6,200'
                  },
                  {
                    tier: 'orange',
                    km: '150,000–195,000 km • 11–13 yrs',
                    action: 'Check high-pressure fuel pump, injectors & clean intake valves',
                    cost: '€600–1,000',
                    ifIgnored: 'Hard starts, petrol in engine oil & sluggish passing power (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,900'
                  },
                  {
                    tier: 'orange',
                    km: '190,000–240,000 km • 13–15+ yrs',
                    action: 'Replace turbo oil/coolant pipes, thermostat & 7-speed gearbox oil',
                    cost: '€580–900',
                    ifIgnored: 'Turbo oil leaks onto exhaust & jerky automatic shifts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,800'
                  }
                ]
              },
              de: {
                headline: 'Durchzugsstarker 184-PS-Turbo — M271-Steuerkette & Nockenwellenversteller anfällig',
                lowScoreReasons: [
                  'Verschleiß von M271-Steuerkette & Verstellern: Die dünne Simplex-Kette und beide Nockenwellenversteller verschleißen oft zwischen 90.000 und 140.000 km (1.800–2.600 €).',
                  'Ölverdünnung durch Kurzstrecken & Ölfiltergehäuse: Benzin im Öl beschleunigt den Kettenverschleiß; das Kunststoff-Ölfiltergehäuse wird oft undicht.'
                ],
                strengths: [
                  'Kräftige 270 Nm Drehmoment ab niedrigster Drehzahl sorgen für souveränen Alltagsdurchzug.',
                  'Erreicht 200.000–250.000+ km, sobald Kette & Versteller erneuert sind und Öl alle 10.000 km gewechselt wird.'
                ],
                watchouts: [
                  'Hochdruck-Kraftstoffpumpe und Thermostatgehäuse ab ca. 120.000 km auf Undichtigkeit prüfen.',
                  'Ölwechsel alle 10.000–12.000 km einhalten, um Ölverdünnung zu begrenzen.'
                ],
                beforeYouBuy: [
                  'Echten Kaltstart verlangen und genau auf kurzes Kettenrasseln oder langsames Durchdrehen achten.',
                  'Rechnungen über bereits erneuerte Steuerkette und Nockenwellenversteller prüfen.',
                  'Rund um das Kunststoff-Ölfiltergehäuse und die Turborohre auf Öl- oder Kühlmittelspuren schauen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Motoröl alle 10–12.000 km / 1 J. wechseln & Bremsflüssigkeit alle 2 J. (1.8L Turbo 184 PS)',
                    cost: '160–260 €',
                    ifIgnored: 'Zu lange 25.000er-Intervalle lassen die schmale Steuerkette früh verschleißen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60 Tkm / 4–5 J.) wechseln, Ölstoppkabel verbauen & 6-J.-Schläuche prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Gealtertes Getriebeöl schaltet hart & poröse 6-J.-Dichtungen ölen den Kabelbaum ein',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Ölfiltergehäuse abdichten & Ölstoppkabel an den Verstellmagneten verbauen',
                    cost: '340–540 €',
                    ifIgnored: 'Öl-/Wasserverlust sowie verölter Motorkabelbaum (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'red',
                    km: '115.000–155.000 km • 9–11 J.',
                    action: 'Steuerkette, Spanner & beide Nockenwellenversteller erneuern',
                    cost: '1.650–2.550 €',
                    ifIgnored: 'Übersprungene Kette zerstört die Ventile im Zylinderkopf (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '4.200–6.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '150.000–195.000 km • 11–13 J.',
                    action: 'Hochdruckpumpe & Injektoren prüfen sowie Einlassventile reinigen',
                    cost: '600–1.000 €',
                    ifIgnored: 'Startprobleme, Ölverdünnung durch Benzin & zäher Durchzug (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '190.000–240.000 km • 13–15+ J.',
                    action: 'Turbo-Leitungen, Thermostat & Automatikgetriebeöl wechseln',
                    cost: '580–900 €',
                    ifIgnored: 'Öltropfen auf dem Auspuff & ruckelige Gangwechsel (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Бодрый турбо 184 л.с. — уязвимые цепь ГРМ и фазорегуляторы M271 EVO',
                lowScoreReasons: [
                  'Износ цепи и звёзд распредвалов M271 EVO: Однорядная цепь и фазорегуляторы часто требуют замены уже к 90–140 тыс. км (€1 800–2 600).',
                  'Разжижение масла бензином и течи корпуса фильтра: Короткие поездки ускоряют износ цепи, а пластиковый стакан фильтра часто подтекает.'
                ],
                strengths: [
                  'Уверенные 270 Н·м тяги с низов делают обгоны в городе и на трассе лёгкими.',
                  'Проходит 200 000–250 000+ км после обновления цепи со звёздами и при замене масла каждые 10 000 км.'
                ],
                watchouts: [
                  'Проверяйте ТНВД и корпус термостата на течи после 120 000 км.',
                  'Соблюдайте короткие интервалы смены масла (10–12 тыс. км).'
                ],
                beforeYouBuy: [
                  'Выполнить холодный пуск и послушать отсутствие 2-секундного треска цепи.',
                  'Запросить заказ-наряды на замену цепи и фазорегуляторов распредвалов.',
                  'Осмотреть пластиковый корпус фильтра и патрубки турбины на подтёки масла и антифриза.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло каждые 10–12 тыс. км / 1 год и тормозную жидкость раз в 2 года (1.8 турбо 184 л.с.)',
                    cost: '€160–260',
                    ifIgnored: 'Редкие ТО по 25 тыс. км быстро изнашивают тонкую цепь ГРМ',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в АКПП (60 тыс. / 4–5 лет), поставить маслосъёмные жгуты и проверить шланги',
                    cost: '€380–620',
                    ifIgnored: 'Старое масло даёт пинки, а рассохшиеся к 6 годам трубки и уплотнения текут',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Заменить прокладки корпуса фильтра и поставить защитные жгуты датчиков',
                    cost: '€340–540',
                    ifIgnored: 'Течь масла с антифризом и попадание масла в проводку мотора (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'red',
                    km: '115 000–155 000 км • 9–11 лет',
                    action: 'Заменить цепь ГРМ, натяжитель и оба фазорегулятора',
                    cost: '€1 650–2 550',
                    ifIgnored: 'Перескок цепи приводит к встрече поршней с клапанами (узлы и жидкости также стареют с годами)',
                    damageCost: '€4 200–6 200'
                  },
                  {
                    tier: 'orange',
                    km: '150 000–195 000 км • 11–13 лет',
                    action: 'Проверить ТНВД с форсунками и очистить впускные клапаны от нагара',
                    cost: '€600–1 000',
                    ifIgnored: 'Трудный пуск, разжижение масла бензином и падение мощности (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 900'
                  },
                  {
                    tier: 'orange',
                    km: '190 000–240 000 км • 13–15+ лет',
                    action: 'Заменить трубки турбины, термостат и масло в 7-ступенчатом автомате',
                    cost: '€580–900',
                    ifIgnored: 'Подтекание масла на выпуск и толчки автоматической коробки (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '525 kg Payload'],
              de: ['1.800 kg Anhängelast', '525 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 525 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.7,
            badges: {
              en: ['0–100 km/h: 7.8 s', '237 km/h Top Speed'],
              de: ['0–100 km/h: 7,8 s', '237 km/h Spitze'],
              ru: ['0–100 км/ч: 7,8 с', 'Макс. 237 км/ч']
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
            score: 8.9,
            badges: {
              en: ['Light 4-Cyl RWD Balance', 'Direct Facelift Turn-In'],
              de: ['Agiler 4-Zyl.-Heckantrieb', 'Präzises Einlenken'],
              ru: ['Лёгкий передок и RWD', 'Точная управляемость']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 6.8,
            badges: {
              en: ['7.8 L/100km', '154 g/km CO2'],
              de: ['7,8 L/100km', '154 g/km CO2'],
              ru: ['7,8 л/100 км', '154 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.4,
            badges: {
              en: ['1.8L CO2 Tax • Euro 5', 'Reasonable 184 HP Insurance'],
              de: ['Faire 1.8-Steuer • Euro 5', 'Solide 184-PS-Versicherung'],
              ru: ['Умеренный налог 1,8 • Euro 5', 'Страховка за 184 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G/7G-Tronic Plus ATF + filter & replace spark plugs', de: '5G/7G-Tronic-Plus-Öl + Filter wechseln & Zündkerzen erneuern', ru: 'Замена масла/фильтра АКПП 5G/7G-Tronic и свечей зажигания' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Check fuel-in-oil dilution & thermostat / crankcase ventilation valve', de: 'Kraftstoff-Ölverdünnung, Thermostat & Kurbelgehäuseentlüftung prüfen', ru: 'Проверка попадания бензина в масло, термостата и клапана ВКГ' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'M271 EVO timing chain + both camshaft adjusters (2-sec cold-start rattle!)', de: 'M271 EVO Steuerkette + beide Nockenwellenversteller (Kaltstart-Rasseln!)', ru: 'Цепь ГРМ M271 EVO и обе муфты фазовращателей (треск при пуске!)' }, cost: '€1,500–2,400', risk: { en: 'Worn lock pins & stretched chain jump timing and destroy cylinder head', de: 'Ausgeschlagene Versteller lassen Kette überspringen — Motorschaden', ru: 'Износ муфт и растяжение цепи ведут к перескоку и ремонту ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust check & ELV electronic steering lock', de: 'W204 Hinterachsträger auf Rost prüfen & ELV-Lenkradverriegelung', ru: 'Осмотр заднего подрамника на коррозию и блокиратор руля ELV' }, cost: '€350–1,200', risk: { en: 'Subframe corrosion or no-start from jammed steering lock', de: 'Durchrostung oder Startblockade durch defekte ELV', ru: 'Коррозия подрамника или невозможность включить зажигание' }, damage: '€1,500–2,600' }
              ]
            },
            badges: {
              en: ['Shared W204 Service Parts', 'Expensive Chain & Cam Gears'],
              de: ['Gute W204-Teileverfügbarkeit', 'Teure Kette & Nockenwellenräder'],
              ru: ['Доступные расходники W204', 'Дорогая замена цепи и муфт']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Popular All-Rounder Spec', 'Good Facelift Resale'],
              de: ['Gefragter Allrounder', 'Guter Mopf-Restwert'],
              ru: ['Востребованная версия', 'Хорошая ликвидность']
            }
          }
        }
      },
      {
        id: 'c250-cgi',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '5g-tronic',
            estUsedPrice: '€10,600',
            specOverrides: { sprint0100: '7.4 s', topSpeed: '240 km/h', realWorldFuel: '8.7 L/100km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 8.0,
                badges: {
                  en: ['0–100 km/h: 7.4 s (5G-AT)', '240 km/h Top Speed'],
                  de: ['0–100 km/h: 7,4 s (5G-AT)', '240 km/h Spitze'],
                  ru: ['0–100 км/ч: 7,4 s (5G-AT)', 'Макс. 240 km/h']
                }
              },
              efficiencyFuel: {
                score: 5.7,
                badges: {
                  en: ['8.7 L/100km (5G-AT)'],
                  de: ['8,7 L/100km (5G-AT)'],
                  ru: ['8,7 L/100km (5G-AT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'cgi-4',
        buyerFitOverrides: {
          ideal: ['w204PowerfulCruiser', 'w204CabinQuality', 'w204AutoSmooth', 'globalPetrolCityZones']
        },
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 204,
        shortTitle: 'C 250 CGI TURBO',
        fullName: '2012 Mercedes-Benz C 250 CGI',
        engineBadge: 'C 250 CGI • 204 HP',
        engineSubLabel: {
          en: '1.8L Turbo M271 (06/2009–06/2015) • 5-AT / 7G-Tronic Plus • 310 Nm',
          de: '1.8L Turbo M271 (06/2009–06/2015) • 5-AT / 7G-Tronic Plus • 310 Nm',
          ru: '1.8 Турбо M271 (06/2009–06/2015) • 5-АКПП / 7G-Tronic Plus • 310 Н·м'
        },
        rarityLabel: {
          en: 'LIGHTWEIGHT SPORT SEDAN',
          de: 'FLOTTER SPORT-TURBO',
          ru: 'ДИНАМИЧНЫЙ ТУРБО-СЕДАН'
        },
        originalMsrp: {
          en: '€39,984 New',
          de: '39.984 € Neu',
          ru: '€39 984 новый'
        },
        estUsedPrice: '€11,400',
        perkLabel: {
          en: '✦ 204 HP / 310 Nm • 7.2s 0–100 • Lighter Nose Than V6',
          de: '✦ 204 PS / 310 Nm • 7,2s 0–100 • Leichtere Front als der V6',
          ru: '✦ 204 л.с. / 310 Н·м • 7,2 с до 100 • Легче V6 спереди'
        },
        remarkablePositives: {
          en: [
            '310 NM TURBO PUNCH (7.2S 0–100)',
            'LIGHTER FRONT AXLE THAN V6',
            '240 KM/H AUTOBAHN TOP SPEED',
            'STANDARD AUTOMATIC (5-AT / 7G-PLUS)',
            'THIRSTY 8.2 L/100KM (204 HP)'
          ],
          de: [
            '310 NM TURBO-SCHUB (7,2S 0–100)',
            'HANDLICHER ALS DIE SCHWEREN V6',
            '240 KM/H SPITZENGESCHWINDIGKEIT',
            'SERIENMÄSSIGE AUTOMATIK',
            '8,2 L/100KM FÜR 204 PS SPARSAM'
          ],
          ru: [
            'ТЯГА 310 Н·М (7,2 С ДО 100)',
            'МАНЁВРЕННЕЕ ТЯЖЁЛЫХ V6',
            'МАКС. СКОРОСТЬ 240 КМ/Ч',
            'ТОЛЬКО НАДЁЖНЫЕ АВТОМАТЫ',
            'РАСХОД 8,2 Л/100 КМ ПРИ 204 Л.С.'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH-BOOST M271 TIMING CHAIN WEAR',
            'NO MANUAL GEARBOX OPTION',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'STARKE BELASTUNG FÜR M271-STEUERKETTE',
            'NICHT ALS SCHALTER ERHÄLTLICH',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'ПОВЫШЕННАЯ НАГРУЗКА НА ЦЕПЬ M271 EVO',
            'НЕТ ВЕРСИИ НА МЕХАНИКЕ',
            'ПРОВЕРЯТЬ ЗАДНИЙ ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.7,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 8.2,
          runningCostsTco: 7.3
        },
        specOverrides: {
          engineName: { en: '1.8L I4 CGI 204 Turbo', de: '1.8L Reihenvierzylinder 204 CGI', ru: '1.8L R4 CGI 204 Турбо' },
          forcedInduction: '@turbo', injection: '@direct', timingDrive: '@chain',
          gearbox: { en: '7G-Tronic Plus / 5-AT', de: '7G-Tronic Plus / 5G-Tronic', ru: '7G-Tronic Plus / 5G-Tronic' },
          clutchDmf: '@torqueConv', payloadRoof: '525 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '7.2 s', topSpeed: '240 km/h', peakTorque: '310 Nm @ 2,000 rpm',
          passingPunch: { en: 'Strong 310 Nm Mid-Range', de: 'Kräftige 310 Nm Durchzug', ru: 'Мощная тяга 310 Н·м' },
          realWorldFuel: '8.2 L/100km', tankRange: '66 L (~805 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierModHigh', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 4.6,
            badges: {
              en: ['High-Output M271 EVO', 'Timing Chain & Turbo Heat Watch'],
              de: ['Hochbelasteter M271 EVO', 'Steuerkette & Turbo-Öl prüfen'],
              ru: ['Форсированный M271 EVO', 'Контроль цепи ГРМ и турбины']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M271 EVO (204 HP) · 1,796 cc' }, { k: 'architecture', v: { en: 'Inline-4 High-Boost Turbo DI · 310 Nm', de: 'Reihenvierzylinder High-Boost Turbo · 310 Nm', ru: 'Рядный 4-цил. форсированный турбо · 310 Н·м' } }], note: { en: 'Matches the old V6 for speed (7.2 s) while saving 1.5–2.0 L/100km; higher boost makes M271 EVO chain & cam-phaser maintenance vital.', de: 'So schnell wie der alte V6 (7,2 s) bei 1,5–2 L weniger Verbrauch; M271-EVO-Kette und Versteller sind Pflicht-Check.', ru: 'Едет на уровне старого V6 (7,2 с), но заметно экономичнее; строго следите за цепью и муфтами M271 EVO.' } },
              forcedInduction: '@turboPetrol', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'High-Boost 204 HP Turbo — High-Stress M271 Timing Chain & Cam Gear Risk',
                lowScoreReasons: [
                  'Premature M271 EVO Timing Chain & Cam Adjuster Failure: Pushing 204 HP / 310 Nm through a thin simplex timing chain wears the chain and camshaft adjuster sprockets between 80,000 and 130,000 km (€1,800–€2,800 repair).',
                  'Short-Trip Fuel Dilution & Oil Filter Housing Leaks: Petrol diluting the engine oil speeds up chain and turbo bearing wear, while plastic oil-filter/coolant housings leak.'
                ],
                strengths: [
                  'Strong 310 Nm turbo punch with a light 4-cylinder front-axle balance.',
                  'Can reach 200,000–240,000+ km once updated timing chain/cam gears are fitted and oil is changed every 10,000 km.'
                ],
                watchouts: [
                  'Inspect turbo oil-feed/coolant lines and crankcase breather hoses for heat-hardened seepage.',
                  'Verify high-pressure fuel pump behavior — rough cold starts can warn of fuel pressure wear.'
                ],
                beforeYouBuy: [
                  'Demand documented invoices showing the timing chain and both camshaft adjuster gears were replaced.',
                  'Start the engine dead cold and listen for a 2-second metallic chain rattle or slow cranking.',
                  'Smell the oil dipstick for raw petrol and check the plastic oil filter housing for oil or coolant puddles.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Change synthetic oil every 10–12,000 km / 1 yr & flush brake fluid at 2 yrs (high-output 204 hp turbo)',
                    cost: '€160–260',
                    ifIgnored: 'Long 25k oil intervals thin oil & wear the slim timing chain early',
                    damageCost: '€1,800–3,200'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G gearbox oil (60k / 4–5 yrs), fit cam-sensor oil blockers & check 6-yr rubber hoses',
                    cost: '€380–620',
                    ifIgnored: 'Aged gearbox oil shifts harshly & perished hoses/seals weep oil into wiring',
                    damageCost: '€1,500–2,600'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Reseal plastic oil filter housing, cam magnets & boost hoses',
                    cost: '€360–580',
                    ifIgnored: 'Boost drops under load & oil damages engine wiring (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'red',
                    km: '110,000–150,000 km • 9–11 yrs',
                    action: 'Replace timing chain, tensioner & both cam adjuster gears',
                    cost: '€1,700–2,600',
                    ifIgnored: 'Jumped chain & heavy internal engine valve damage (components & fluids also degrade over years)',
                    damageCost: '€4,200–6,400'
                  },
                  {
                    tier: 'orange',
                    km: '145,000–185,000 km • 11–13 yrs',
                    action: 'Replace turbo oil/coolant lines & check high-pressure fuel pump',
                    cost: '€650–1,050',
                    ifIgnored: 'Burnt oil smoke, fuel dilution & starved turbo bearings (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,000–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '185,000–235,000 km • 13–15+ yrs',
                    action: 'Clean intake valve carbon, swap water pump & service automatic transmission',
                    cost: '€650–1,000',
                    ifIgnored: 'Misfires under full throttle & worn gearbox clutches (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,900–3,000'
                  }
                ]
              },
              de: {
                headline: 'Starker 204-PS-Turbo — höchste Belastung für die anfällige M271-Steuerkette',
                lowScoreReasons: [
                  'Vorzeitiger Verschleiß von Steuerkette & Nockenwellenverstellern (M271 EVO): 204 PS / 310 Nm belasten die dünne Simplex-Kette stark — Kettenlängung und eingelaufene Versteller treten oft schon bei 80.000–130.000 km auf (1.800–2.800 €).',
                  'Ölverdünnung durch Kurzstrecken & Ölfiltergehäuse: Kraftstoff im Öl beschleunigt Ketten- und Turboverschleiß; zudem werden Kunststoff-Ölfiltergehäuse häufig undicht.'
                ],
                strengths: [
                  'Kräftige 310 Nm Drehmoment bei angenehm geringem Gewicht auf der Vorderachse.',
                  'Erreicht 200.000–240.000+ km, sobald Kette & Versteller erneuert sind und Öl alle 10.000 km gewechselt wird.'
                ],
                watchouts: [
                  'Öl- und Kühlmittelleitungen am Turbolader sowie Kurbelgehäuse-Schläuche auf Hitze-Alterung prüfen.',
                  'Auf sauberes Startverhalten achten — langes Orgeln deutet oft auf die Hochdruck-Kraftstoffpumpe hin.'
                ],
                beforeYouBuy: [
                  'Rechnungen verlangen, die den Tausch von Steuerkette und beiden Nockenwellenverstellern belegen.',
                  'Motor völlig kalt starten und genau auf 2-sekündiges Kettenrasseln oder träges Anspringen achten.',
                  'Am Ölmessstab riechen (Benzingeruch?) und das Kunststoff-Ölfiltergehäuse auf Öl-/Kühlmittelspuren prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Motoröl alle 10–12.000 km / 1 J. wechseln & Bremsflüssigkeit alle 2 J. (starker 204-PS-Turbo)',
                    cost: '160–260 €',
                    ifIgnored: 'Zu lange 25.000er-Intervalle lassen die schmale Steuerkette früh verschleißen',
                    damageCost: '1.800–3.200 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60 Tkm / 4–5 J.) wechseln, Ölstoppkabel verbauen & 6-J.-Schläuche prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Gealtertes Getriebeöl schaltet hart & poröse 6-J.-Dichtungen ölen den Kabelbaum ein',
                    damageCost: '1.500–2.600 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: 'Ölfiltergehäuse, Verstellmagnete & Ladedruckschläuche erneuern',
                    cost: '360–580 €',
                    ifIgnored: 'Leistungsabfall unter Last & Kriechöl im Kabelbaum (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'red',
                    km: '110.000–150.000 km • 9–11 J.',
                    action: 'Steuerkette, Spanner & beide Nockenwellenversteller ersetzen',
                    cost: '1.700–2.600 €',
                    ifIgnored: 'Kettenübersprung mit schwerem Motorschaden an den Ventilen (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '4.200–6.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '145.000–185.000 km • 11–13 J.',
                    action: 'Turbo-Öl-/Kühlleitungen tauschen & Hochdruckpumpe prüfen',
                    cost: '650–1.050 €',
                    ifIgnored: 'Ölrauch, Ölverdünnung durch Benzin & trockengelaufener Turbo (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.000–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '185.000–235.000 km • 13–15+ J.',
                    action: 'Einlassventile reinigen, Wasserpumpe erneuern & Getriebeöl wechseln',
                    cost: '650–1.000 €',
                    ifIgnored: 'Zündaussetzer bei Vollgas & verschleißende Getriebekupplungen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.900–3.000 €'
                  }
                ]
              },
              ru: {
                headline: 'Мощный 204-сильный турбо — повышенный риск износа цепи и звёзд M271 EVO',
                lowScoreReasons: [
                  'Растяжение тонкой цепи ГРМ и износ фазорегуляторов (M271 EVO): Высокий наддув (204 л.с. / 310 Н·м) ускоряет износ однорядной цепи и муфт распредвалов уже к 80–130 тыс. км (ремонт €1 800–2 800).',
                  'Разжижение масла бензином и течи корпуса фильтра: Попадание топлива в масло в городе губит цепь и турбину, а пластиковый стакан фильтра часто подтекает.'
                ],
                strengths: [
                  'Мощная тяга 310 Н·м в сочетании с лёгкой 4-цилиндровой передней осью.',
                  'Проходит 200 000–240 000+ км после замены цепи со звёздами и при замене масла каждые 10 000 км.'
                ],
                watchouts: [
                  'Следите за масляными и водяными трубками турбины и шлангами вентиляции картера.',
                  'Долгий запуск на холодную часто указывает на износ ТНВД.'
                ],
                beforeYouBuy: [
                  'Запросить чеки о замене цепи ГРМ вместе с обоими фазорегуляторами распредвалов.',
                  'Выполнить полностью холодный запуск и послушать 2-секундный треск цепи или долгий пуск.',
                  'Понюхать масляный щуп (нет ли запаха бензина) и осмотреть пластиковый корпус фильтра на подтёки.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Менять масло каждые 10–12 тыс. км / 1 год и тормозную жидкость раз в 2 года (мощный 204-сильный турбо)',
                    cost: '€160–260',
                    ifIgnored: 'Редкие ТО по 25 тыс. км быстро изнашивают тонкую цепь ГРМ',
                    damageCost: '€1 800–3 200'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло в АКПП (60 тыс. / 4–5 лет), поставить маслосъёмные жгуты и проверить шланги',
                    cost: '€380–620',
                    ifIgnored: 'Старое масло даёт пинки, а рассохшиеся к 6 годам трубки и уплотнения текут',
                    damageCost: '€1 500–2 600'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Переуплотнить корпус фильтра, датчики спереди и патрубки наддува',
                    cost: '€360–580',
                    ifIgnored: 'Провалы тяги и попадание масла в электропроводку (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'red',
                    km: '110 000–150 000 км • 9–11 лет',
                    action: 'Заменить цепь ГРМ, натяжитель и оба фазорегулятора',
                    cost: '€1 700–2 600',
                    ifIgnored: 'Перескок цепи с серьёзным повреждением клапанов (узлы и жидкости также стареют с годами)',
                    damageCost: '€4 200–6 400'
                  },
                  {
                    tier: 'orange',
                    km: '145 000–185 000 км • 11–13 лет',
                    action: 'Заменить трубки охлаждения и масла турбины, проверить ТНВД',
                    cost: '€650–1 050',
                    ifIgnored: 'Дым от сгоревшего масла и износ подшипников турбины (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 000–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '185 000–235 000 км • 13–15+ лет',
                    action: 'Очистить клапаны от нагара, поменять помпу и масло в АКПП',
                    cost: '€650–1 000',
                    ifIgnored: 'Пропуски зажигания под нагрузкой и износ фрикционов коробки (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 900–3 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '525 kg Payload'],
              de: ['1.800 kg Anhängelast', '525 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 525 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.2,
            badges: {
              en: ['0–100 km/h: 7.2 s', '240 km/h Top Speed'],
              de: ['0–100 km/h: 7,2 s', '240 km/h Spitze'],
              ru: ['0–100 км/ч: 7,2 с', 'Макс. 240 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.7,
            badges: {
              en: ['310 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['310 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['310 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.9,
            badges: {
              en: ['Lighter Nose Than V6', 'Crisp RWD Turn-In'],
              de: ['Handlicher als V6-Modelle', 'Agiler Heckantrieb'],
              ru: ['Легче V6 на переднюю ось', 'Острая рулёжка RWD']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 6.2,
            badges: {
              en: ['Thirsty (8.2 L/100km)', '152 g/km CO2'],
              de: ['Durstig (8,2 L/100km)', '152 g/km CO2'],
              ru: ['Прожорливый (8,2 л/100 км)', '152 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['1.8L Tax Saves Over V6 • Euro 5', 'Higher 204 HP Insurance'],
              de: ['1.8-Steuer statt V6 • Euro 5', 'Teurere 204-PS-Versicherung'],
              ru: ['Налог 1,8 вместо V6 • Euro 5', 'Дороже страховка за 204 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G/7G-Tronic Plus ATF + filter & replace spark plugs', de: '5G/7G-Tronic-Plus-Öl + Filter wechseln & Zündkerzen erneuern', ru: 'Замена масла/фильтра АКПП 5G/7G-Tronic и свечей зажигания' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Check fuel-in-oil dilution & thermostat / crankcase ventilation valve', de: 'Kraftstoff-Ölverdünnung, Thermostat & Kurbelgehäuseentlüftung prüfen', ru: 'Проверка попадания бензина в масло, термостата и клапана ВКГ' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '90,000–150,000 km', de: '90.000–150.000 km', ru: '90 000–150 000 км' }, action: { en: 'M271 EVO timing chain + both camshaft adjusters (2-sec cold-start rattle!)', de: 'M271 EVO Steuerkette + beide Nockenwellenversteller (Kaltstart-Rasseln!)', ru: 'Цепь ГРМ M271 EVO и обе муфты фазовращателей (треск при пуске!)' }, cost: '€1,500–2,400', risk: { en: 'Worn lock pins & stretched chain jump timing and destroy cylinder head', de: 'Ausgeschlagene Versteller lassen Kette überspringen — Motorschaden', ru: 'Износ муфт и растяжение цепи ведут к перескоку и ремонту ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust check & ELV electronic steering lock', de: 'W204 Hinterachsträger auf Rost prüfen & ELV-Lenkradverriegelung', ru: 'Осмотр заднего подрамника на коррозию и блокиратор руля ELV' }, cost: '€350–1,200', risk: { en: 'Subframe corrosion or no-start from jammed steering lock', de: 'Durchrostung oder Startblockade durch defekte ELV', ru: 'Коррозия подрамника или невозможность включить зажигание' }, damage: '€1,500–2,600' }
              ]
            },
            badges: {
              en: ['More Brake & Tyre Wear (204 HP)', 'Budget Chain & Cam-Gear Kit'],
              de: ['Mehr Brems-/Reifenverschleiß', 'Ketten- & Verstellersatz teuer'],
              ru: ['Выше износ шин и тормозов', 'Дорогая замена цепи и фазорегуляторов']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Strong 204 HP Demand', 'AMG-Line Packs Hold Value'],
              de: ['Gefragte 204-PS-Klasse', 'AMG-Line sehr wertstabil'],
              ru: ['Хороший спрос на 204 л.с.', 'Пакеты AMG в цене']
            }
          }
        }
      },
      {
        id: 'c230-v6',
        defaultGearboxId: '7g-tronic',
        gearboxes: [
          { id: '7g-tronic', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€7,900',
            specOverrides: { sprint0100: '8.4 s', topSpeed: '240 km/h', realWorldFuel: '9.4 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 5.2,
                badges: {
                  en: ['9.4 L/100km (6-MT)'],
                  de: ['9,4 L/100km (6-MT)'],
                  ru: ['9,4 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'v6-petrol',
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 204,
        shortTitle: 'C 230 V6',
        fullName: '2008 Mercedes-Benz C 230 V6',
        engineBadge: 'C 230 V6 • 204 HP',
        engineSubLabel: {
          en: '2.5L V6 NA M272 (03/2007–06/2009) • 6-MT / 7G-Tronic • 245 Nm',
          de: '2.5L V6-Saugmotor M272 (03/2007–06/2009) • 6-Gang / 7G-Tronic • 245 Nm',
          ru: '2.5 V6 Атмо M272 (03/2007–06/2009) • 6-МКПП / 7G-Tronic • 245 Н·м'
        },
        rarityLabel: {
          en: 'SMOOTH NATURALLY ASPIRATED V6',
          de: 'KULTIVIERTER V6-SAUGMOTOR',
          ru: 'ПЛАВНЫЙ АТМОСФЕРНЫЙ V6'
        },
        originalMsrp: {
          en: '€36,176 New',
          de: '36.176 € Neu',
          ru: '€36 176 новый'
        },
        estUsedPrice: '€8,500',
        perkLabel: {
          en: '✦ Silky 2.5L V6 Soundtrack • Port Injection • Zero Turbo Hardware',
          de: '✦ Seidiger 2.5L V6-Klang • Saugrohreinspritzung • Kein Turbolader',
          ru: '✦ Бархатный звук V6 2.5 • Распределённый впрыск • Без турбины'
        },
        remarkablePositives: {
          en: [
            'REFINED 6-CYLINDER SOUND & SMOOTHNESS',
            'PORT INJECTION (NO CARBON BUILDUP)',
            'NO TURBO OR HIGH-PRESSURE FUEL SYSTEM',
            '2008+ UNITS AVOID BALANCE-SHAFT ISSUE',
            '240 KM/H AUTOBAHN TOP SPEED'
          ],
          de: [
            'SEIDIGER SECHSZYLINDER-LAUF & KLANG',
            'SAUGROHREINSPRITZUNG (KEIN VERKOKEN)',
            'KEIN TURBOLADER / KEINE INJEKTOREN',
            'AB 2008 OHNE AUSGLEICHSWELLEN-PROBLEM',
            '240 KM/H SPITZENGESCHWINDIGKEIT'
          ],
          ru: [
            'БЛАГОРОДНЫЙ ЗВУК И ПЛАВНОСТЬ V6',
            'ЧИСТЫЙ ВПУСК БЕЗ НАГАРА (MPI)',
            'НЕТ ТУРБИНЫ И СЛОЖНОГО ТНВД',
            'С 2008 Г. ИСПРАВЛЕНА ШЕСТЕРНЯ БАЛАНСИРА',
            'МАКСИМАЛЬНАЯ СКОРОСТЬ 240 КМ/Ч'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 9.8 L/100KM FUEL CONSUMPTION',
            'CHECK PRE-2008 BALANCE-SHAFT SPROCKET',
            'PLASTIC INTAKE MANIFOLD FLAPS WEAR'
          ],
          de: [
            'DURSTIGE DURSTIG: 9,8 L/100KM',
            'BIS ENDE 2007 AUSGLEICHSWELLE PRÜFEN',
            'SAUGROHR-DRALLKLAPPEN VERSCHLEISSEN'
          ],
          ru: [
            'ПРОЖОРЛИВЫЙ: 9,8 Л/100 КМ',
            'ДО 2008 Г. ПРОВЕРИТЬ ЗВЕЗДУ БАЛАНСИРА',
            'ИЗНОС ЗАСЛОНОК ВПУСКНОГО КОЛЛЕКТОРА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.7,
          spacePracticality: 7.5,
          performanceDynamics: 7.6,
          runningCostsTco: 6.8
        },
        specOverrides: {
          engineName: { en: '2.5L V6 NA Petrol (Chain)', de: '2.5L V6 Sauger (Kette)', ru: '2.5L V6 Атмосферный (Цепь)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '8.4 s', topSpeed: '240 km/h', peakTorque: '245 Nm @ 2,900 rpm',
          passingPunch: { en: 'Silky V6 Linear Revs', de: 'Seidiger V6-Sauger', ru: 'Бархатный линейный V6' },
          realWorldFuel: '9.8 L/100km', tankRange: '66 L (~675 km)', euroNorm: 'Euro 4 (Petrol)', taxInsurance: '@tierModHigh', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 8.0,
            badges: {
              en: ['Smooth M272 V6 (2008+ Safe)', 'Watch Intake Manifold Flaps'],
              de: ['Laufruhiger M272 V6 (ab 2008 top)', 'Saugrohr-Drallklappen prüfen'],
              ru: ['Плавный M272 V6 (с 2008 г. надёжен)', 'Следить за вихревыми заслонками']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M272 E25 · 2,496 cc V6' }, { k: 'architecture', v: { en: '90° V6 Aluminium · Naturally Aspirated Port Injection', de: '90°-V6 Alu · Saugrohreinspritzung (ohne Turbo)', ru: 'V6 90° алюминий · Атмосферник с распредел. впрыском' } }], note: { en: 'Silky entry-level Mercedes V6 with zero turbo complexity; thirstier than the 4-cylinders, so mainly for smooth-sound fans.', de: 'Seidiger Einstiegs-V6 ohne Turbo-Technik; durstiger als die Vierzylinder, aber herrlich kultiviert.', ru: 'Мягкий базовый V6 без турбины; прожорливее четвёрок, но радует благородным звуком и плавностью.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Naturally Aspirated 2.5L V6— Silky Reliability on 2008+ Builds After Balance-Shaft Fix',
                strengths: [
                  'Conventional port injection, robust aluminum block, and smooth 7,000 rpm character.',
                  'Engines past serial #30 468993 received the hardened balance-shaft sprocket permanently.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Very early 2007 models (before late-2007 engine serial #30 468993) risked soft balance-shaft sprocket wear— verify engine number before buying a 2007 car.',
                  'Plastic tumble-flap linkages inside the intake manifold (Saugrohr) and oil centrifuge cover wear out around 140,000–180,000 km.'
                ],
                beforeYouBuy: [
                  'On early 2007 cars, have a diagnostic scan run for timing codes— early balance gears inside the front of the V6 can wear down.',
                  'Shine a flashlight at the front of the air intake box to see if the little plastic flap lever is cracked or broken.',
                  'Check behind the cylinder heads for oil dripping onto the hot exhaust pipes and test smooth automatic shifts.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre synthetic oil change (every 10–15k / 1 yr) & 2-yr brake fluid flush',
                    cost: '€190–300',
                    ifIgnored: 'Stretched V6 oil intervals coat timing gears & gum up plastic intake flaps early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G-Tronic auto oil (60k / 4–5 yrs), plugs & check 6-yr aging belt, seals & rear oil plugs',
                    cost: '€420–680',
                    ifIgnored: 'Aged "lifetime" gearbox fluid wears 7-speed plate & 6-yr plastic seals dry/weep',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace leaking rear engine oil plugs, drip tray & thermostat',
                    cost: '€260–420',
                    ifIgnored: 'Burnt oil smell inside cabin & engine running too cold (rubber/plastic & seals also harden with age)',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'orange',
                    km: '135,000–180,000 km • 9–11 yrs',
                    action: 'Replace cracking plastic intake manifold swirl flap kit & gearbox oil',
                    cost: '€650–1,050',
                    ifIgnored: 'Broken plastic bits sucked into engine & check-engine light (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,200–3,800'
                  },
                  {
                    tier: 'red',
                    km: '150,000–200,000 km • 11–13 yrs',
                    action: 'On affected 2007 units: inspect/replace early worn balance shaft gear',
                    cost: '€2,000–3,200',
                    ifIgnored: 'Constant engine warning light & heavy timing wear inside V6',
                    damageCost: '€3,800–5,800'
                  },
                  {
                    tier: 'orange',
                    km: '185,000–240,000 km • 13–15+ yrs',
                    action: 'Refresh 7-speed gearbox sensor plate, engine mounts & front crank sensor',
                    cost: '€750–1,200',
                    ifIgnored: 'Gearbox stuck in one gear & engine stalling when hot (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,900'
                  }
                ]
              },
              de: {
                headline: 'Kultivierter 2.5L V6-Sauger— ab Baujahr 2008 sehr standfest ohne Turbo-Risiken',
                strengths: [
                  'Klassische Saugrohreinspritzung sorgt für saubere Ventile und ruhigen Lauf.',
                  'Ab Motornummer 30 468993 ist das bekannte Ausgleichswellen-Problem ab Werk behoben.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Frühe 2007er Baujahre (vor Motornummer 30 468993) konnten an einem weichen Kettenrad der Ausgleichswelle leiden— zwingend vor Kauf prüfen!',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Bei frühen Baujahren 2007 unbedingt Fehlercodes auslesen lassen– das frühe Ausgleichswellen-Zahnrad nutzt sich bei diesen Motoren ab.',
                  'Vorne am Ansaugkrümmer mit der Taschenlampe prüfen, ob der kleine Kunststoff-Stellhebel gebrochen ist.',
                  'Hinten an den Zylinderköpfen nach Ölverlust auf dem Auspuff schauen und weiche Automatik-Schaltvorgänge testen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich die 8 Liter Synthetiköl wechseln (10–15 Tkm) & alle 2 J. Bremsflüssigkeit erneuern',
                    cost: '190–300 €',
                    ifIgnored: 'Überzogenes V6-Altöl verschleißt Steuerketten-Zahnräder & verklebt Saugrohrklappen',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Tronic-Öl (60 Tkm / 4–5 J.) & Kerzen wechseln sowie 6-J.-Riemen, Dichtungen & hintere Stopfen prüfen',
                    cost: '420–680 €',
                    ifIgnored: 'Alterndes Automatiköl ruiniert die Steuerplatte; Kunststoffdichtungen härten aus',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Undichte hintere Ölstopfen, Ölabscheider & Thermostat erneuern',
                    cost: '260–420 €',
                    ifIgnored: 'Verbrannter Ölgeruch im Innenraum & zu kalt laufender Motor (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '135.000–180.000 km • 9–11 J.',
                    action: 'Ansaugbrücke/Drallklappen-Hebel auf Metall umrüsten & Getriebeöl wechseln',
                    cost: '650–1.050 €',
                    ifIgnored: 'Abgebrochene Kunststoffteile im Brennraum & Leistungsverlust (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '150.000–200.000 km • 11–13 J.',
                    action: 'Bei frühen 2007ern: Abgenutztes Ausgleichswellenrad prüfen/erneuern',
                    cost: '2.000–3.200 €',
                    ifIgnored: 'Dauerhafte Motorkontrollleuchte & starker Steuerketten-Verschleiß',
                    damageCost: '3.800–5.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '185.000–240.000 km • 13–15+ J.',
                    action: '7-Gang-Getriebe-Sensorplatte, Motorlager & Kurbelwellensensor ersetzen',
                    cost: '750–1.200 €',
                    ifIgnored: 'Getriebe bleibt im Notlauf hängen & Motor geht warm aus (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Атмосферный 2.5L V6— высокая надёжность с 2008 года после замены шестерни балансира',
                strengths: [
                  'Простой атмосферник с распределённым впрыском и ровной тягой до отсечки.',
                  'Моторы после номера #30 468993 получили усиленную звезду балансирного вала.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'На самых ранних авто 2007 г. (до номера #30 468993) стиралась мягкая шестерня балансирного вала— обязательна проверка по VIN.',
                  'К 140–180 тыс. км изнашиваются пластиковые тяги заслонок впускного коллектора (Saugrohr) и маслоотделитель.'
                ],
                beforeYouBuy: [
                  'На ранних машинах 2007 года сделайте диагностику ошибок— на первых версиях V6 изнашивается шестерня балансирного вала.',
                  'Посветите фонариком на переднюю часть впускного коллектора: пластиковые тяги заслонок со временем обламываются.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена 8 литров синтетики (раз в 10–15 тыс.) и смена тормозной раз в 2 года',
                    cost: '€190–300',
                    ifIgnored: 'Редкие ТО ускоряют износ звёзд V6 и закоксовывают пластиковые заслонки впуска',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), свечи, осмотреть стареющий ремень и задние заглушки',
                    cost: '€420–680',
                    ifIgnored: '«Вечное» масло АКПП стареет и бьёт по плате, а пластик и сальники к 6 годам текут',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить текущие заглушки сзади головки блока, маслоотделитель и термостат',
                    cost: '€260–420',
                    ifIgnored: 'Запах горелого масла в салоне и недогрев двигателя (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'orange',
                    km: '135 000–180 000 км • 9–11 лет',
                    action: 'Заменить тяги или впускной коллектор и обновить масло в коробке',
                    cost: '€650–1 050',
                    ifIgnored: 'Обломки пластика попадают в цилиндры, горит ошибка двигателя (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 200–3 800'
                  },
                  {
                    tier: 'red',
                    km: '150 000–200 000 км • 11–13 лет',
                    action: 'Для ранних 2007 г.: заменить изношенную шестерню балансирного вала',
                    cost: '€2 000–3 200',
                    ifIgnored: 'Постоянная ошибка фаз газораспределения и износ цепи ГРМ',
                    damageCost: '€3 800–5 800'
                  },
                  {
                    tier: 'orange',
                    km: '185 000–240 000 км • 13–15+ лет',
                    action: 'Заменить электронную плату 7-ступ. АКПП, опоры мотора и датчик коленвала',
                    cost: '€750–1 200',
                    ifIgnored: 'Коробка уходит в аварийный режим, а горячий мотор глохнет (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.8,
            badges: {
              en: ['Smooth 7G-Tronic Auto / 6-MT', 'Needs 60k km ATF Service'],
              de: ['Sanfte 7G-Tronic-Automatik', 'Alle 60.000 km ATF-Spülung'],
              ru: ['Плавный 7G-Tronic / 6-МКПП', 'Замена масла раз в 60 тыс. км']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '540 kg Payload'],
              de: ['1.800 kg Anhängelast', '540 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 540 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.1,
            badges: {
              en: ['0–100 km/h: 8.4 s', '240 km/h Top Speed'],
              de: ['0–100 km/h: 8,4 s', '240 km/h Spitze'],
              ru: ['0–100 км/ч: 8,4 с', 'Макс. 240 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.8,
            badges: {
              en: ['245 Nm Smooth Linear Pull', 'Strongest Above 3,500 RPM'],
              de: ['245 Nm linearer Sauger', 'Am stärksten ab 3.500/min'],
              ru: ['245 Н·м ровный атмосферник', 'Живеет после 3 500 об/мин']
            }
          },
          handlingAgility: {
            score: 8.6,
            badges: {
              en: ['Balanced V6 RWD Chassis', '240 km/h Composure'],
              de: ['Sattes V6-Fahrverhalten', '240 km/h Autobahn-Ruhe'],
              ru: ['Плотная поступь V6 RWD', 'Стабильность до 240 км/ч']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 4.8,
            badges: {
              en: ['Thirsty (9.8 L/100km)', '216 g/km CO2'],
              de: ['Durstig (9,8 L/100km)', '216 g/km CO2'],
              ru: ['Прожорливый (9,8 л/100 км)', '216 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.4,
            badges: {
              en: ['High 2.5L CO2 Tax (216 g)', 'Mid-High V6 Insurance'],
              de: ['Hohe 2.5-CO2-Steuer (216 g)', 'Gehobene V6-Versicherung'],
              ru: ['Высокий налог 2,5 л (216 г)', 'Страховка V6 выше среднего']
            }
          },
          maintenanceRepairCosts: {
            score: 5.4,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & rear diff / 4MATIC oil', de: '7G-Tronic-Öl (722.9) + Filter & Hinterachs-/4MATIC-Öl wechseln', ru: 'Замена масла 7G-Tronic + фильтр и масло в редукторе / 4MATIC' }, cost: '€320–480' },
                { when: { en: 'Every 80,000 km', de: 'Alle 80.000 km', ru: 'Каждые 80 000 км' }, action: { en: 'Replace 6× iridium spark plugs & inspect oil-cooler gasket for seepage', de: '6× Iridium-Zündkerzen wechseln & Ölkühlerdichtung auf Schwitzen prüfen', ru: 'Замена 6 свечей и проверка прокладки теплообменника' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'M272 plastic intake manifold tumble-flap lever (upgrade to aluminium kit)', de: 'M272 Saugrohr-Drallklappen-Hebel (auf Alu-Reparatursatz umrüsten)', ru: 'Тяга заслонок впускного коллектора M272 (замена на алюминиевую)' }, cost: '€450–1,100', risk: { en: 'Broken plastic lever causes limp torque or loose flaps entering valves', de: 'Abgebrochene Kunststoffhebel kosten Leistung oder schädigen Ventile', ru: 'Сломанная тяга душит тягу, а обломки заслонок опасны для клапанов' }, damage: '€1,800–3,200' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: '7G-Tronic conductor plate / speed sensor & rear subframe rust check', de: '7G-Tronic Steuereinheit / Drehzahlsensor & Hinterachsträger-Check', ru: 'Плата управления 7G-Tronic (датчик оборотов) и осмотр подрамника' }, cost: '€650–1,300', risk: { en: 'Gearbox locked in 2nd gear limp mode or subframe rust', de: 'Getriebe bleibt im Notlauf hängen oder Achsträger rostet durch', ru: 'Аварийный режим АКПП на 2-й передаче или коррозия подрамника' }, damage: '€1,800–2,800' }
              ]
            },
            badges: {
              en: ['6 Plugs & 8L Synthetic Oil', 'Moderate V6 Intake-Flap Repair'],
              de: ['6 Kerzen & 8L Synthetiköl', 'Bezahlbare Saugrohr-Reparatur'],
              ru: ['6 свечей и 8 л масла V6', 'Умеренная цена ремонта впуска']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Cult NA V6 Appreciation', 'Rare Manual Units Sought After'],
              de: ['Gefragter Sechszylinder', 'Handschalter besonders rar'],
              ru: ['Редкий атмосферный V6', 'Ценятся версии на МКПП']
            }
          }
        }
      },
      {
        id: 'c280-c300-v6',
        defaultGearboxId: '7g-tronic',
        gearboxes: [{ id: '7g-tronic', isDefault: true }],
        buyerFitGroup: 'v6-petrol',
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 231,
        shortTitle: 'C 280 / C 300 V6',
        fullName: '2009 Mercedes-Benz C 280 / C 300 V6',
        engineBadge: 'C 280 / C 300 V6 • 231 HP',
        engineSubLabel: {
          en: '3.0L V6 NA M272 (03/2007–02/2011) • 6-MT / 7G-Tronic / Opt. 4Matic • 300 Nm',
          de: '3.0L V6-Saugmotor M272 (03/2007–02/2011) • 6-Gang / 7G-Tronic / Opt. 4Matic • 300 Nm',
          ru: '3.0 V6 Атмо M272 (03/2007–02/2011) • 6-МКПП / 7G-Tronic / Опц. 4Matic • 300 Н·м'
        },
        rarityLabel: {
          en: 'CLASSIC V6 CRUISER',
          de: 'SOUVERÄNER V6-GLEITER',
          ru: 'БЛАГОРОДНЫЙ V6 КРЕЙСЕР'
        },
        originalMsrp: {
          en: '€40,162 New',
          de: '40.162 € Neu',
          ru: '€40 162 новый'
        },
        estUsedPrice: '€9,900',
        perkLabel: {
          en: '✦ 3.0L V6 231 HP / 300 Nm • 7.2s 0–100 • 2008+ Balance-Shaft Fixed',
          de: '✦ 3.0L V6 231 PS / 300 Nm • 7,2s 0–100 • Ab 2008 ohne Wellenproblem',
          ru: '✦ 3.0L V6 231 л.с. / 300 Н·м • 7,2 с до 100 • Надёжный с 2008 г.'
        },
        remarkablePositives: {
          en: [
            '231 HP & 300 NM SMOOTH V6 PULL',
            '7.2S 0–100 • 250 KM/H TOP SPEED',
            'PORT INJECTION (NO CARBON BUILDUP)',
            'OPTIONAL 4MATIC ALL-WHEEL GRIP',
            '2009–2011 C 300 VERY DURABLE'
          ],
          de: [
            '231 PS & 300 NM V6-DURCHZUG',
            '7,2S 0–100 • 250 KM/H SPITZE',
            'SAUGROHR-V6 (KEINE VERKOKUNG)',
            'OPTIONAL MIT 4MATIC ALLRAD',
            'C 300 (2009–2011) SEHR STANDFEST'
          ],
          ru: [
            'ТЯГА 3.0 V6 (231 Л.С. / 300 Н·М)',
            '7,2 С ДО 100 • МАКС. 250 КМ/Ч',
            'НАДЁЖНЫЙ ВПРЫСК MPI БЕЗ НАГАРА',
            'ДОСТУПЕН ПОЛНЫЙ ПРИВОД 4MATIC',
            'ВЕРСИИ C 300 (2009–2011) ОЧЕНЬ КРЕПКИЕ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 10.2 L/100KM FUEL CONSUMPTION',
            'CHECK PRE-2008 C 280 BALANCE SHAFT',
            'PLASTIC INTAKE MANIFOLD FLAPS WEAR'
          ],
          de: [
            'DURSTIGE DURSTIG: 10,2 L/100KM',
            'FRÜHE 2007ER C 280 AUSGLEICHSWELLE PRÜFEN',
            'SAUGROHR-DRALLKLAPPEN VERSCHLEISSEN'
          ],
          ru: [
            'РАСХОД 10,2 Л/100 КМ В ГОРОДЕ И ТРАССЕ',
            'РАННИЕ C 280 2007 Г. — ПРОВЕРКА БАЛАНСИРА',
            'ИЗНОС ЗАСЛОНОК ВПУСКНОГО КОЛЛЕКТОРА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 8.0,
          runningCostsTco: 6.6
        },
        specOverrides: {
          engineName: { en: '3.0L V6 NA Petrol (Chain)', de: '3.0L V6 Sauger (Kette)', ru: '3.0L V6 Атмосферный (Цепь)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@chain',
          gearbox: { en: '7G-Tronic (Opt. 4MATIC)', de: '7G-Tronic (Opt. 4MATIC)', ru: '7G-Tronic (Опц. 4MATIC)' },
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '7.2 s', topSpeed: '250 km/h', peakTorque: '300 Nm @ 2,500 rpm',
          passingPunch: { en: 'Effortless 3.0L V6 Pull', de: 'Souveräner 3.0L-V6-Schub', ru: 'Благородная тяга 3.0 V6' },
          realWorldFuel: '10.2 L/100km', tankRange: '66 L (~645 km)', euroNorm: 'Euro 4/5 (Petrol)', taxInsurance: '@tierHigh', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 8.1,
            badges: {
              en: ['Updated 3.0L V6 (C 300 Ideal)', 'Watch Intake Manifold Flaps'],
              de: ['Robuster 3.0L V6 (C 300 top)', 'Drallklappen-Gestänge prüfen'],
              ru: ['Проверенный 3.0L V6 (C 300 топ)', 'Проверить тяги коллектора']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M272 E30 · 2,996 cc V6' }, { k: 'architecture', v: { en: '90° V6 Aluminium · Naturally Aspirated + Opt. 4MATIC', de: '90°-V6 Alu · Saugmotor + Optional 4MATIC', ru: 'V6 90° алюминий · Атмосферник + опц. 4MATIC' } }], note: { en: 'Sweet-sounding 3.0 V6 that avoids the M271 simplex-chain headaches; just budget for 10+ L/100km fuel and the intake tumble-flap lever.', de: 'Klangvoller 3.0-V6 ohne die M271-Kettenprobleme; lediglich 10+ L Verbrauch und den Saugrohr-Hebel einplanen.', ru: 'Отличный атмосферный 3.0 V6 без проблем цепи M271; требует лишь 10+ л топлива и внимания к заслонкам впуска.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '3.0L Port-Injected M272 V6 (Rebadged C 280-> C 300)— Sweet-Spot Six-Cylinder Cruiser',
                strengths: [
                  'Noticeably stronger mid-range torque (300 Nm) than the 2.5L C 230 with zero turbocharger lag or complexity.',
                  'When Mercedes renamed C 280 to C 300 in 06/2009, the hardened balance-shaft gear was already standard.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'On early 2007 C 280 units (before engine serial #30 468993), verify balance-shaft sprocket condition via fault codes / inspection.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Check that the little plastic flap linkage on the front of the V6 intake manifold moves smoothly and is not snapped.',
                  'On early 2007–2008 C280s, scan for camshaft timing warnings; C300 facelift models already received updated stronger internals.',
                  'Test the 7-speed automatic in traffic when hot— harsh downshifts into 2nd or getting stuck in one gear point to the internal sensor plate.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre synthetic oil change (every 10–15k / 1 yr) & 2-yr brake fluid flush',
                    cost: '€190–300',
                    ifIgnored: 'Stretched V6 oil intervals coat timing gears & gum up plastic intake flaps early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G-Tronic auto oil (60k / 4–5 yrs), plugs & check 6-yr aging belt, seals & front axle oil if 4MATIC',
                    cost: '€420–680',
                    ifIgnored: 'Aged "lifetime" gearbox fluid wears 7-speed plate & 6-yr plastic seals dry/weep',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace weeping rear engine plugs, oil separator & cooling thermostat',
                    cost: '€280–450',
                    ifIgnored: 'Burnt oil smell on exhaust & slow warm-up in winter (rubber/plastic & seals also harden with age)',
                    damageCost: '€950–1,600'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Replace intake manifold swirl flap assembly & change 7-speed gearbox oil',
                    cost: '€700–1,150',
                    ifIgnored: 'Broken flaps drop into cylinders or clog throttle movement (components & fluids also degrade over years)',
                    damageCost: '€2,400–4,000'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–215,000 km • 11–13 yrs',
                    action: 'Replace 7-speed gearbox internal speed sensor plate & crank sensor',
                    cost: '€680–1,050',
                    ifIgnored: 'Automatic locks into limp gear & warm engine refuses to restart (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace engine mounts, water pump & oil cooler gasket leaks',
                    cost: '€580–950',
                    ifIgnored: 'Heavy vibration at stoplights & mixing coolant/oil seals (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,400'
                  }
                ]
              },
              de: {
                headline: 'Souveräner 3.0L V6-Saugmotor (C 280 / C 300)— besonders als C 300 ab 2009 sehr robust',
                strengths: [
                  'Deutlich souveräner als der C 230, völlig ohne Turbolader oder Direkteinspritzung.',
                  'Zur Umbenennung 06/2009 war das gehärtete Kettenrad längst Standard.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Nur frühe 2007er C 280 (vor Motornummer 30 468993) können unter der weichen Ausgleichswellen-Verzahnung leiden.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Am vorderen Ansaugkrümmer prüfen, ob die kleine Kunststoff-Verbindung für die Luftklappen noch intakt und beweglich ist.',
                  'Bei frühen C280 (2007–2008) Fehlercodes auslesen; spätere C300 haben bereits das verbesserte Ausgleichswellen-Zahnrad.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich die 8 Liter Synthetiköl wechseln (10–15 Tkm) & alle 2 J. Bremsflüssigkeit erneuern',
                    cost: '190–300 €',
                    ifIgnored: 'Überzogenes V6-Altöl verschleißt Steuerketten-Zahnräder & verklebt Saugrohrklappen',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Tronic-Öl (60 Tkm / 4–5 J.) & Kerzen wechseln sowie 6-J.-Riemen, Dichtungen & ggf. 4MATIC-Öl prüfen',
                    cost: '420–680 €',
                    ifIgnored: 'Alterndes Automatiköl ruiniert die Steuerplatte; Kunststoffdichtungen härten aus',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Hinteres Zentrifugal-Ölventil, Stopfen & Thermostat erneuern',
                    cost: '280–450 €',
                    ifIgnored: 'Ölgestank aus dem Motorraum & hoher Verbrauch im Winter (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '950–1.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Ansaugbrücke mit Klappenmechanik erneuern & Getriebeöl wechseln',
                    cost: '700–1.150 €',
                    ifIgnored: 'Abgebrochene Klappenteile fallen in den Motor & kosten Leistung (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.400–4.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–215.000 km • 11–13 J.',
                    action: 'Drehzahlsensor-Platte der 7G-Automatik & Kurbelwellensensor tauschen',
                    cost: '680–1.050 €',
                    ifIgnored: 'Getriebe schaltet nicht mehr hoch & heißer Motor startet nicht (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Motorlager, Wasserpumpe & Ölkühler-Dichtung erneuern',
                    cost: '580–950 €',
                    ifIgnored: 'Brummen an der Ampel & Öl-/Wasserverlust am Filterbock (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Атмосферный 3.0L V6 (C 280 / C 300)— золотая классика, особенно ревизия C 300 с 2009 г.',
                strengths: [
                  'Заметно тяговитее C 230 на трассе, без турбонаддува и прямого впрыска.',
                  'К переименованию в 06/2009 усиленная шестерня балансира уже стояла на всех авто.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Ранние C 280 2007 г. (до номера двигателя #30 468993) проверять на износ шестерни балансирного вала.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Проверьте целостность пластиковой тяги заслонок на передней части впускного коллектора V6.',
                  'На ранних C280 (2007–2008) проверьте ошибки по распредвалам; на более свежих C300 эта проблема уже исправлена.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена 8 литров синтетики (раз в 10–15 тыс.) и смена тормозной раз в 2 года',
                    cost: '€190–300',
                    ifIgnored: 'Редкие ТО ускоряют износ звёзд V6 и закоксовывают пластиковые заслонки впуска',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), свечи, осмотреть стареющий ремень и и масло 4MATIC',
                    cost: '€420–680',
                    ifIgnored: '«Вечное» масло АКПП стареет и бьёт по плате, а пластик и сальники к 6 годам текут',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить маслоотделитель, задние пластиковые заглушки и термостат',
                    cost: '€280–450',
                    ifIgnored: 'Запах горелого масла и медленный прогрев зимой (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€950–1 600'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Заменить впускной коллектор с заслонками и масло в АКПП',
                    cost: '€700–1 150',
                    ifIgnored: 'Разрушение пластика внутри впуска с риском поломки цилиндров (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 400–4 000'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–215 000 км • 11–13 лет',
                    action: 'Заменить электронную плату 7-ступенчатого автомата и датчик коленвала',
                    cost: '€680–1 050',
                    ifIgnored: 'Аварийный режим коробки и отказ запуска на горячую (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Обновить опоры двигателя, водяной насос и прокладку теплообменника',
                    cost: '€580–950',
                    ifIgnored: 'Сильная вибрация на светофорах и течи масла с антифризом (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.6,
            badges: {
              en: ['7G-Tronic • Opt. 4Matic AWD', 'Check 60k ATF & Transfer Case'],
              de: ['7G-Tronic • Opt. 4Matic', 'ATF & Verteilergetriebe prüfen'],
              ru: ['7G-Tronic • Опция 4Matic', 'Проверка раздатки и масла АКПП']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m RWD / 11.1 m 4Matic', 'Upright Pillars & Clear Mirrors'],
              de: ['10,8 m RWD / 11,1 m 4Matic', 'Schmale Säulen & gute Übersicht'],
              ru: ['10,8 м RWD / 11,1 м 4Matic', 'Хорошая обзорность и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '540 kg Payload'],
              de: ['1.800 kg Anhängelast', '540 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 540 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.2,
            badges: {
              en: ['0–100 km/h: 7.2 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 7,2 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 7,2 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 7.0,
            badges: {
              en: ['300 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['300 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['300 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.6,
            badges: {
              en: ['Composed RWD or 4Matic Grip', 'Speed-Sensitive Steering'],
              de: ['RWD oder 4Matic Traktion', 'Parameterlenkung'],
              ru: ['Задний привод или 4Matic', 'Параметрический руль']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 4.5,
            badges: {
              en: ['Thirsty (10.2 L/100km)', '224 g/km CO2'],
              de: ['Durstig (10,2 L/100km)', '224 g/km CO2'],
              ru: ['Прожорливый (10,2 л/100 км)', '224 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 4.8,
            badges: {
              en: ['High 3.0L CO2 Tax (224 g)', 'High V6 Mercedes Insurance'],
              de: ['Hohe 3.0-CO2-Steuer (224 g)', 'Teure V6-Versicherung'],
              ru: ['Высокий налог 3,0 л (224 г)', 'Дорогая страховка V6']
            }
          },
          maintenanceRepairCosts: {
            score: 4.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & rear diff / 4MATIC oil', de: '7G-Tronic-Öl (722.9) + Filter & Hinterachs-/4MATIC-Öl wechseln', ru: 'Замена масла 7G-Tronic + фильтр и масло в редукторе / 4MATIC' }, cost: '€320–480' },
                { when: { en: 'Every 80,000 km', de: 'Alle 80.000 km', ru: 'Каждые 80 000 км' }, action: { en: 'Replace 6× iridium spark plugs & inspect oil-cooler gasket for seepage', de: '6× Iridium-Zündkerzen wechseln & Ölkühlerdichtung auf Schwitzen prüfen', ru: 'Замена 6 свечей и проверка прокладки теплообменника' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'M272 plastic intake manifold tumble-flap lever (upgrade to aluminium kit)', de: 'M272 Saugrohr-Drallklappen-Hebel (auf Alu-Reparatursatz umrüsten)', ru: 'Тяга заслонок впускного коллектора M272 (замена на алюминиевую)' }, cost: '€450–1,100', risk: { en: 'Broken plastic lever causes limp torque or loose flaps entering valves', de: 'Abgebrochene Kunststoffhebel kosten Leistung oder schädigen Ventile', ru: 'Сломанная тяга душит тягу, а обломки заслонок опасны для клапанов' }, damage: '€1,800–3,200' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: '7G-Tronic conductor plate / speed sensor & rear subframe rust check', de: '7G-Tronic Steuereinheit / Drehzahlsensor & Hinterachsträger-Check', ru: 'Плата управления 7G-Tronic (датчик оборотов) и осмотр подрамника' }, cost: '€650–1,300', risk: { en: 'Gearbox locked in 2nd gear limp mode or subframe rust', de: 'Getriebe bleibt im Notlauf hängen oder Achsträger rostet durch', ru: 'Аварийный режим АКПП на 2-й передаче или коррозия подрамника' }, damage: '€1,800–2,800' }
              ]
            },
            badges: {
              en: ['8L Oil + 7G-Tronic ATF Service', 'Moderate V6 Intake-Flap Repair'],
              de: ['8L Öl + 7G-Tronic-Getriebeöl', 'Bezahlbare Saugrohr-Reparatur'],
              ru: ['8 л масла + сервис АКПП 7G', 'Умеренная цена ремонта впуска']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Sought-After NA V6', 'Clean C 300s Hold Value'],
              de: ['Beliebter V6-Saugmotor', 'Gepflegte C 300 wertstabil'],
              ru: ['Любимый атмосферный V6', 'C 300 отлично держит цену']
            }
          }
        }
      },
      {
        id: 'c350-m272',
        defaultGearboxId: '7g-tronic',
        gearboxes: [{ id: '7g-tronic', isDefault: true }],
        buyerFitGroup: 'v6-petrol',
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 272,
        shortTitle: 'C 350 V6 (M272)',
        fullName: '2009 Mercedes-Benz C 350 V6',
        engineBadge: 'C 350 V6 • 272 HP',
        engineSubLabel: {
          en: '3.5L V6 NA M272 (03/2007–02/2011) • 7G-Tronic / Opt. 4Matic • 350 Nm',
          de: '3.5L V6-Saugmotor M272 (03/2007–02/2011) • 7G-Tronic / Opt. 4Matic • 350 Nm',
          ru: '3.5 V6 Атмо M272 (03/2007–02/2011) • 7G-Tronic / Опц. 4Matic • 350 Н·м'
        },
        rarityLabel: {
          en: 'HIGH-MUSCLE V6 SEDAN',
          de: 'KRAFTVOLLER 3.5L V6',
          ru: 'МОЩНЫЙ АТМОСФЕРНЫЙ V6'
        },
        originalMsrp: {
          en: '€44,744 New',
          de: '44.744 € Neu',
          ru: '€44 744 новый'
        },
        estUsedPrice: '€11,800',
        perkLabel: {
          en: '✦ 272 HP / 350 Nm Port-Injected V6 • 6.4s 0–100 • Big 322mm Brakes',
          de: '✦ 272 PS / 350 Nm Saugrohr-V6 • 6,4s 0–100 • Große 322mm Bremsen',
          ru: '✦ 272 л.с. / 350 Н·м V6 MPI • 6,4 с до 100 • Тормоза 322 мм'
        },
        remarkablePositives: {
          en: [
            '272 HP • 6.4S 0–100 PERFORMANCE',
            'PORT INJECTION (NO PIEZO INJECTORS)',
            'UPGRADED 322MM SPORT BRAKES',
            'OPTIONAL 4MATIC TRACTION',
            '250 KM/H TOP SPEED'
          ],
          de: [
            '272 PS • 6,4S 0–100 PERFORMANCE',
            'OHNE ANFÄLLIGE PIEZO-INJEKTOREN',
            'GROSSE 322MM BREMSANLAGE',
            'OPTIONAL MIT 4MATIC ALLRAD',
            '250 KM/H AUTOBAHN-EXPRESS'
          ],
          ru: [
            'ДИНАМИКА 6,4 С ДО 100 (272 Л.С.)',
            'БЕЗ ДОРОГИХ ПЬЕЗОФОРСУНОК',
            'УСИЛЕННЫЕ ТОРМОЗА 322 ММ',
            'ОПЦИЯ ПОЛНОГО ПРИВОДА 4MATIC',
            'КРЕЙСЕРСКИЕ 250 КМ/Ч'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 10.8 L/100KM',
            'CHECK PRE-2008 BALANCE SHAFT',
            'HIGHER 3.5L TAX & RUNNING COSTS'
          ],
          de: [
            'DURSTIG: 10,8 L/100KM',
            'FRÜHE 2007ER AUSGLEICHSWELLE PRÜFEN',
            'HÖHERE 3.5L STEUER & UNTERHALT'
          ],
          ru: [
            'РАСХОД 10,8 Л/100 КМ',
            'ДО 2008 Г. ПРОВЕРИТЬ БАЛАНСИРНЫЙ ВАЛ',
            'ДОРОГОЕ СОДЕРЖАНИЕ И НАЛОГ ЗА 3.5 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 8.5,
          runningCostsTco: 6.4
        },
        specOverrides: {
          engineName: { en: '3.5L V6 M272 Petrol (Chain)', de: '3.5L V6 Sauger M272 (Kette)', ru: '3.5L V6 M272 Бензин (Цепь)' },
          forcedInduction: '@na', injection: '@port', timingDrive: '@chain',
          gearbox: { en: '7G-Tronic (Opt. 4MATIC)', de: '7G-Tronic (Opt. 4MATIC)', ru: '7G-Tronic (Опц. 4MATIC)' },
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '6.4 s', topSpeed: '250 km/h', peakTorque: '350 Nm @ 2,400 rpm',
          passingPunch: { en: 'Effortless 350 Nm V6 Surge', de: 'Souveräner 350-Nm-V6-Schub', ru: 'Мощная ровная тяга 350 Н·м' },
          realWorldFuel: '10.8 L/100km', tankRange: '66 L (~610 km)', euroNorm: 'Euro 4/5 (Petrol)', taxInsurance: '@tierHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 8.0,
            badges: {
              en: ['Port-Injected 3.5L V6', 'Check Early 2007 Balance Shaft'],
              de: ['Saugrohr-3.5L-V6 (2008+ top)', '2007er Ausgleichswelle prüfen'],
              ru: ['Атмосферник 3.5 V6 MPI', 'На 2007 г. проверить балансир']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M272 E35 · 3,498 cc V6' }, { k: 'architecture', v: { en: '90° V6 Aluminium · 272 HP Port-Injected Naturally Aspirated', de: '90°-V6 Alu · 272 PS Saugmotor mit Saugrohreinspritzung', ru: 'V6 90° алюминий · 272 л.с. атмосферный' } }], note: { en: 'Rapid 6.4 s classic naturally aspirated V6 with a 250 km/h limiter; thirsty in city traffic, but remarkably smooth and reliable once intake flaps are upgraded.', de: 'Schneller 6,4-s-V6-Sauger mit 250 km/h Spitze; im Stadtverkehr durstig, aber extrem kultiviert und solide.', ru: 'Быстрый атмосферный V6 (6,4 с, 250 км/ч); прожорлив в городе, зато очень плавный и крепкий.' } },
              forcedInduction: '@naNoTurbo', injection: '@portInj', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '272 HP Port-Injected 3.5L V6— Simple Fueling & Big Muscle (2008+ Safe From Sprocket Wear)',
                strengths: [
                  'Unlike the later C 350 CGI, this 272 HP M272 avoids expensive piezo injectors and NOx sensors.',
                  'Units built from late 2007 onward have the factory-updated hardened balance-shaft sprocket.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Avoid or inspect 2007 early builds carefully for balance-shaft sprocket wear (before engine serial #30 468993).',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Check the front of the V6 air intake for a snapped plastic flap arm— a very common wear point on the 3.5-litre V6.',
                  'On pre-2008 examples, verify the engine scan has zero timing codes to rule out early balance gear wear.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre synthetic oil change (every 10–15k / 1 yr) & 2-yr brake fluid flush',
                    cost: '€190–300',
                    ifIgnored: 'Stretched V6 oil intervals coat timing gears & gum up plastic intake flaps early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G-Tronic auto oil (60k / 4–5 yrs), plugs & check 6-yr aging belt, seals & front axle oil if 4MATIC',
                    cost: '€420–680',
                    ifIgnored: 'Aged "lifetime" gearbox fluid wears 7-speed plate & 6-yr plastic seals dry/weep',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace rear oil drip tray, seals & cooling thermostat + pulleys',
                    cost: '€300–480',
                    ifIgnored: 'Oil smoke near exhaust & belt squealing or snap risk (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,000–1,700'
                  },
                  {
                    tier: 'red',
                    km: '135,000–180,000 km • 9–11 yrs',
                    action: 'Replace cracking intake manifold assembly before plastic flaps break off',
                    cost: '€750–1,200',
                    ifIgnored: 'Broken swirl flaps fall into cylinders & score engine walls (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,800–4,500'
                  },
                  {
                    tier: 'orange',
                    km: '165,000–215,000 km • 11–13 yrs',
                    action: 'Service 7-speed gearbox conductor plate & fluid under higher V6 torque',
                    cost: '€680–1,050',
                    ifIgnored: 'Harsh shifts, error codes & gearbox stuck in 2nd gear (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace worn V6 hydraulic engine mounts, water pump & oil cooler seals',
                    cost: '€620–980',
                    ifIgnored: 'Cabin shudder on acceleration & oil leaking down engine front (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,600'
                  }
                ]
              },
              de: {
                headline: 'Kräftiger 272-PS-Saugrohr-V6— einfacher aufgebaut als der spätere CGI, ab 2008 sehr solide',
                strengths: [
                  'Deutlich günstigere Einspritztechnik als beim C 350 CGI— verträgt auch Kurzstrecken gut.',
                  'Das gehärtete Ausgleichswellen-Kettenrad eliminiert das größte Frühserien-Risiko.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Frühe 2007er Modelle (vor Motornummer 30 468993) zwingend auf Ausgleichswellen-Verschleiß prüfen.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Vorne am V6-Saugrohr prüfen, ob die Kunststoff-Umlenkung der Saugrohrklappen gebrochen ist– sehr typisch beim 3.5er.',
                  'Bei Baujahren vor 2008 Fehlerspeicher auf Nockenwellen-Codes prüfen (frühes Ausgleichswellenrad).',
                  'Ölkühlergehäuse auf Ölspuren kontrollieren und weiche Schaltvorgänge der 7-Gang-Automatik unter Last testen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich die 8 Liter Synthetiköl wechseln (10–15 Tkm) & alle 2 J. Bremsflüssigkeit erneuern',
                    cost: '190–300 €',
                    ifIgnored: 'Überzogenes V6-Altöl verschleißt Steuerketten-Zahnräder & verklebt Saugrohrklappen',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Tronic-Öl (60 Tkm / 4–5 J.) & Kerzen wechseln sowie 6-J.-Riemen, Dichtungen & ggf. 4MATIC-Öl prüfen',
                    cost: '420–680 €',
                    ifIgnored: 'Alterndes Automatiköl ruiniert die Steuerplatte; Kunststoffdichtungen härten aus',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Hinteren Ölabscheider, Stopfen, Thermostat & Riemenrollen erneuern',
                    cost: '300–480 €',
                    ifIgnored: 'Öldampf am heißen Auspuff & reißender Keilrippenriemen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.000–1.700 €'
                  },
                  {
                    tier: 'red',
                    km: '135.000–180.000 km • 9–11 J.',
                    action: 'Ansaugbrücke mit Klappen rechtzeitig komplett erneuern',
                    cost: '750–1.200 €',
                    ifIgnored: 'Abgebrochene Kunststoffklappen geraten in die Zylinder',
                    damageCost: '2.800–4.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '165.000–215.000 km • 11–13 J.',
                    action: '7G-Automatik-Sensorplatte & Getriebeöl wegen hohem V6-Drehmoment warten',
                    cost: '680–1.050 €',
                    ifIgnored: 'Ruckeliges Herunterschalten & Getriebe-Notlauf im 2. Gang (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Hydraulische Motorlager, Wasserpumpe & Ölkühlerdichtung erneuern',
                    cost: '620–980 €',
                    ifIgnored: 'Starkes Schütteln beim Gasgeben & Ölverlust an der Motorfront (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.600 €'
                  }
                ]
              },
              ru: {
                headline: 'Мощный 3.5L V6 с распределённым впрыском— проще позднего CGI и крепок с 2008 г.',
                strengths: [
                  'Нет дорогих пьезофорсунок и датчиков NOx, как у C 350 CGI.',
                  'Оснащён усиленной звездой балансирного вала без заводского брака.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Автомобили 2007 года (до мотора #30 468993) требуют обязательной проверки шестерни балансирного вала.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Осмотрите переднюю часть впускного коллектора V6 3.5— пластиковый привод заслонок там ломается очень часто.',
                  'На машинах до 2008 года проверьте сканером отсутствие ошибок по валам (ранняя шестерня балансира).',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена 8 литров синтетики (раз в 10–15 тыс.) и смена тормозной раз в 2 года',
                    cost: '€190–300',
                    ifIgnored: 'Редкие ТО ускоряют износ звёзд V6 и закоксовывают пластиковые заслонки впуска',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), свечи, осмотреть стареющий ремень и и масло 4MATIC',
                    cost: '€420–680',
                    ifIgnored: '«Вечное» масло АКПП стареет и бьёт по плате, а пластик и сальники к 6 годам текут',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить задний маслоотделитель, заглушки, термостат и ролики ремня',
                    cost: '€300–480',
                    ifIgnored: 'Дым масла на горячем выпуске и риск обрыва приводного ремня (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 000–1 700'
                  },
                  {
                    tier: 'red',
                    km: '135 000–180 000 км • 9–11 лет',
                    action: 'Заменить впускной коллектор целиком до обрыва пластиковых заслонок',
                    cost: '€750–1 200',
                    ifIgnored: 'Осколки заслонок попадают в цилиндры и задирают стенки (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 800–4 500'
                  },
                  {
                    tier: 'orange',
                    km: '165 000–215 000 км • 11–13 лет',
                    action: 'Обслужить плату датчиков и масло 7-ступ. АКПП при нагрузках V6',
                    cost: '€680–1 050',
                    ifIgnored: 'Жёсткие удары при переключении и зависание на 2-й передаче (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить гидравлические опоры двигателя, помпу и прокладки теплообменника',
                    cost: '€620–980',
                    ifIgnored: 'Сильная дрожь при разгоне и течи масла по передней части мотора (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 600'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.6,
            badges: {
              en: ['7G-Tronic • Opt. 4Matic AWD', 'Check 60k ATF & Transfer Case'],
              de: ['7G-Tronic • Opt. 4Matic', 'ATF & Verteilergetriebe prüfen'],
              ru: ['7G-Tronic • Опция 4Matic', 'Проверка раздатки и масла АКПП']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m RWD / 11.1 m 4Matic', 'Upright Pillars & Clear Mirrors'],
              de: ['10,8 m RWD / 11,1 m 4Matic', 'Schmale Säulen & gute Übersicht'],
              ru: ['10,8 м RWD / 11,1 м 4Matic', 'Хорошая обзорность и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '540 kg Payload'],
              de: ['1.800 kg Anhängelast', '540 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 540 кг']
            }
          },
          accelerationOvertaking: {
            score: 9.2,
            badges: {
              en: ['0–100 km/h: 6.4 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,4 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,4 с', 'Макс. 250 км/ч']
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
            score: 8.9,
            badges: {
              en: ['Dynamic Handling Pack Common', 'Crisp RWD / 4Matic Traction'],
              de: ['Oft mit Fahrdynamik-Paket', 'Starke Traktion & Spurtreue'],
              ru: ['Часто адаптивная подвеска', 'Отличная устойчивость']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 4.0,
            badges: {
              en: ['Thirsty (10.8 L/100km)', '232 g/km CO2'],
              de: ['Durstig (10,8 L/100km)', '232 g/km CO2'],
              ru: ['Прожорливый (10,8 л/100 км)', '232 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 4.5,
            badges: {
              en: ['Very High 3.5L CO2 Tax (232 g)', 'High 272 HP Insurance Class'],
              de: ['Sehr hohe 3.5-Steuer (232 g)', 'Hohe 272-PS-Versicherung'],
              ru: ['Очень высокий налог 3,5 л', 'Дорогая страховка за 272 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.5,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & rear diff / 4MATIC oil', de: '7G-Tronic-Öl (722.9) + Filter & Hinterachs-/4MATIC-Öl wechseln', ru: 'Замена масла 7G-Tronic + фильтр и масло в редукторе / 4MATIC' }, cost: '€320–480' },
                { when: { en: 'Every 80,000 km', de: 'Alle 80.000 km', ru: 'Каждые 80 000 км' }, action: { en: 'Replace 6× iridium spark plugs & inspect oil-cooler gasket for seepage', de: '6× Iridium-Zündkerzen wechseln & Ölkühlerdichtung auf Schwitzen prüfen', ru: 'Замена 6 свечей и проверка прокладки теплообменника' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'M272 plastic intake manifold tumble-flap lever (upgrade to aluminium kit)', de: 'M272 Saugrohr-Drallklappen-Hebel (auf Alu-Reparatursatz umrüsten)', ru: 'Тяга заслонок впускного коллектора M272 (замена на алюминиевую)' }, cost: '€450–1,100', risk: { en: 'Broken plastic lever causes limp torque or loose flaps entering valves', de: 'Abgebrochene Kunststoffhebel kosten Leistung oder schädigen Ventile', ru: 'Сломанная тяга душит тягу, а обломки заслонок опасны для клапанов' }, damage: '€1,800–3,200' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: '7G-Tronic conductor plate / speed sensor & rear subframe rust check', de: '7G-Tronic Steuereinheit / Drehzahlsensor & Hinterachsträger-Check', ru: 'Плата управления 7G-Tronic (датчик оборотов) и осмотр подрамника' }, cost: '€650–1,300', risk: { en: 'Gearbox locked in 2nd gear limp mode or subframe rust', de: 'Getriebe bleibt im Notlauf hängen oder Achsträger rostet durch', ru: 'Аварийный режим АКПП на 2-й передаче или коррозия подрамника' }, damage: '€1,800–2,800' }
              ]
            },
            badges: {
              en: ['322 mm Brakes & 17"/18" Tyres', '8L Oil + Early Balance Shaft'],
              de: ['322-mm-Bremsen & 17/18" Reifen', '8 L Öl + Ausgleichswelle (2007)'],
              ru: ['Тормоза 322 мм и шины 17–18"', 'Дороже ТО V6 и впуск']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['High Enthusiast V6 Demand', 'Holding Value Firmly'],
              de: ['Starke V6-Liebhabernachfrage', 'Sehr wertstabil'],
              ru: ['Высокий спрос на 3.5 V6', 'Хорошо держит цену']
            }
          }
        }
      },
      {
        id: 'c350-cgi',
        defaultGearboxId: '7g-tronic',
        gearboxes: [{ id: '7g-tronic', isDefault: true }],
        buyerFitGroup: 'v6-petrol',
        buyerFitOverrides: {
          skip: ['w204V6RunningCosts', 'w204CgiPiezoCost', 'w204RearSubframeRust', 'w204TightRearSpace']
        },
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 292,
        shortTitle: 'C 350 CGI V6',
        fullName: '2010 Mercedes-Benz C 350 CGI BlueEfficiency',
        engineBadge: 'C 350 CGI V6 • 292 HP',
        engineSubLabel: {
          en: '3.5L V6 DI M272 (10/2008–02/2011) • 7G-Tronic • 365 Nm',
          de: '3.5L Schichtlade-V6 M272 (10/2008–02/2011) • 7G-Tronic • 365 Nm',
          ru: '3.5 V6 CGI M272 (10/2008–02/2011) • 7G-Tronic • 365 Н·м'
        },
        rarityLabel: {
          en: 'HIGH-TECH V6 SLEEPER',
          de: 'SELTENER SCHICHTLADE-V6',
          ru: 'РЕДКИЙ ТЕХНОЛОГИЧНЫЙ V6'
        },
        originalMsrp: {
          en: '€46,767 New',
          de: '46.767 € Neu',
          ru: '€46 767 новый'
        },
        estUsedPrice: '€12,400',
        perkLabel: {
          en: '✦ 292 HP / 365 Nm • 6.2s 0–100 • Always Post-Balance-Shaft Fix',
          de: '✦ 292 PS / 365 Nm • 6,2s 0–100 • Immer ohne Ausgleichswellen-Problem',
          ru: '✦ 292 л.с. / 365 Н·м • 6,2 с до 100 • Все экземпляры с крепким ГРМ'
        },
        remarkablePositives: {
          en: [
            '292 HP • 6.2S 0–100 ACCELERATION',
            'GOOD 9.6 L/100KM ECONOMY FOR A 3.5L V6',
            'ALL UNITS POST-BALANCE-SHAFT FIX',
            'UPGRADED 322MM FRONT BRAKES',
            'RARE COLLECTOR SPEC'
          ],
          de: [
            '292 PS • 6,2S 0–100 SPRINT',
            'GUTE 9,6 L/100KM FÜR EINEN 3.5L V6',
            'ALLE OHNE AUSGLEICHSWELLEN-DEFEKT',
            'GROSSE 322MM SPORTBREMSEN',
            'SELTENES SAMMLER-MODELL'
          ],
          ru: [
            'РАЗГОН 6,2 С ДО 100 (292 Л.С.)',
            'ЭКОНОМИЧНЫЕ 9,6 Л/100 КМ ДЛЯ 3.5 V6',
            'БЕЗ ПРОБЛЕМЫ ШЕСТЕРНИ БАЛАНСИРА',
            'УСИЛЕННЫЕ ТОРМОЗА 322 ММ',
            'РЕДКАЯ И ЦЕННАЯ МОДИФИКАЦИЯ'
          ]
        },
        notableNegatives: {
          en: [
            'EXPENSIVE PIEZO INJECTORS & NOX SENSORS',
            'STRICTER DIRECT-INJECTION FUEL CARE',
            'NO 4MATIC OPTION ON CGI'
          ],
          de: [
            'TEURE PIEZO-INJEKTOREN & NOX-SENSOREN',
            'EMPFINDLICHERE DIREKTEINSPRITZUNG',
            'ALS CGI NICHT MIT 4MATIC ERHÄLTLICH'
          ],
          ru: [
            'ДОРОГИЕ ПЬЕЗОФОРСУНКИ И ДАТЧИКИ NOx',
            'ТРЕБОВАТЕЛЕН К КАЧЕСТВУ ТОПЛИВА',
            'НЕ БЫВАЕТ С ПОЛНЫМ ПРИВОДОМ 4MATIC'
          ]
        },
        pillarScores: {
          reliabilityQuality: 7.9,
          comfortCabin: 8.7,
          spacePracticality: 7.5,
          performanceDynamics: 8.6,
          runningCostsTco: 6.5
        },
        specOverrides: {
          engineName: { en: '3.5L V6 CGI Petrol (Chain)', de: '3.5L V6 CGI Sauger (Kette)', ru: '3.5L V6 CGI Бензин (Цепь)' },
          forcedInduction: '@na', injection: '@direct', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '525 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '6.2 s', topSpeed: '250 km/h', peakTorque: '365 Nm @ 3,000 rpm',
          passingPunch: { en: 'Crisp 292 HP V6 Punch', de: 'Druckvoller 292-PS-V6', ru: 'Сочный подхват 292 л.с. V6' },
          realWorldFuel: '9.6 L/100km', tankRange: '66 L (~685 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 6.9,
            badges: {
              en: ['No Balance-Shaft Risk', 'Watch Piezo Injectors & NOx'],
              de: ['Ohne Wellenproblem', 'Piezo-Injektoren & NOx beachten'],
              ru: ['Без дефекта балансира', 'Дорогие пьезофорсунки и NOx']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M272 DE35 (CGI) · 3,498 cc V6' }, { k: 'architecture', v: { en: '90° V6 Aluminium · Piezo Direct Injection (Rare Spec)', de: '90°-V6 Alu · Piezo-Direkteinspritzung (selten)', ru: 'V6 90° алюминий · Пьезо-прямой впрыск (редкий)' } }], note: { en: 'Faster and ~1 L/100km thriftier than the port-injected C350, though piezo injectors and high-pressure pumps cost more if ever needed.', de: 'Schneller und ~1 L sparsamer als der normale C350, allerdings sind Piezo-Injektoren im Ersatz teurer.', ru: 'Быстрее и экономичнее обычного C350, но пьезофорсунки и ТНВД дороже при замене.' } },
              forcedInduction: '@naNoTurbo', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '292 HP Stratified-Charge V6— Faster & Cleaner Than Standard M272, With Piezo Injector Costs',
                strengths: [
                  'Introduced in late 2008, every C 350 CGI features the revised balance-shaft sprocket.',
                  'Lean-burn stratified direct injection trims real consumption to ~9.6 L/100km.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  'Piezo direct-injection fuel injectors, high-pressure pump, and twin NOx exhaust sensors are expensive parts if they fault.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Start the engine dead cold and sniff for unburnt fuel— leaking direct-injection fuel injectors are expensive on this rare model.',
                  'Check service bills for replaced exhaust gas sensors and high-pressure fuel pump work.',
                  'Verify the intake manifold flap linkage moves freely and the 7-speed automatic shifts cleanly.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre synthetic oil change (every 10–15k / 1 yr) & 2-yr brake fluid flush',
                    cost: '€190–300',
                    ifIgnored: 'Stretched V6 oil intervals coat timing gears & gum up plastic intake flaps early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G-Tronic auto oil (60k / 4–5 yrs), plugs & check 6-yr aging belt, seals & early fuel injector check',
                    cost: '€420–680',
                    ifIgnored: 'Aged "lifetime" gearbox fluid wears 7-speed plate & 6-yr plastic seals dry/weep',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Clean carbon from intake ports & replace spark plugs / rear oil seals',
                    cost: '€450–720',
                    ifIgnored: 'Shaky morning starts & oil dripping onto exhaust pipes (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'red',
                    km: '125,000–170,000 km • 9–11 yrs',
                    action: 'Test/replace aging high-pressure piezo fuel injectors & exhaust sensor',
                    cost: '€1,200–2,400',
                    ifIgnored: 'Raw fuel washes cylinder walls & wrecks costly catalytic converters',
                    damageCost: '€3,500–5,500'
                  },
                  {
                    tier: 'orange',
                    km: '155,000–200,000 km • 11–13 yrs',
                    action: 'Replace high-pressure fuel pump & intake manifold flap linkage',
                    cost: '€900–1,450',
                    ifIgnored: 'No-start conditions, check-engine lights & lost V6 power (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,400–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '195,000–245,000 km • 13–15+ yrs',
                    action: 'Service 7-speed gearbox sensor plate, fluid & engine mounts',
                    cost: '€750–1,150',
                    ifIgnored: 'Gearbox stuck in limp gear & heavy idle vibration (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,900–3,000'
                  }
                ]
              },
              de: {
                headline: '292-PS-Schichtlade-V6— spürbar schneller und sparsamer, aber teure Injektortechnik',
                strengths: [
                  'Da erst ab 10/2008 gebaut, besitzen alle C 350 CGI das gehärtete Kettenrad.',
                  'Dank Mager-Schichtladung rund Durstig (9,6 L/100km) bei 292 PS.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Schwachstellen sind teure Piezo-Injektoren, Hochdruckpumpe und NOx-Sensoren im Abgasstrang.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Kalt starten und auf Benzingeruch sowie unrunden Lauf achten– die Direkteinspritz-Injektoren dieses seltenen Modells sind teuer.',
                  'Nach Rechnungen für getauschte NOx-Abgassensoren und Arbeiten an der Hochdruckpumpe fragen.',
                  'Kunststoff-Hebel am Saugrohr auf freien Lauf prüfen und auf saubere Schaltvorgänge der 7-Gang-Automatik achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich die 8 Liter Synthetiköl wechseln (10–15 Tkm) & alle 2 J. Bremsflüssigkeit erneuern',
                    cost: '190–300 €',
                    ifIgnored: 'Überzogenes V6-Altöl verschleißt Steuerketten-Zahnräder & verklebt Saugrohrklappen',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Tronic-Öl (60 Tkm / 4–5 J.) & Kerzen wechseln sowie 6-J.-Riemen, Dichtungen & Injektor-Prüfung prüfen',
                    cost: '420–680 €',
                    ifIgnored: 'Alterndes Automatiköl ruiniert die Steuerplatte; Kunststoffdichtungen härten aus',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Einlasskanäle entkoken sowie Zündkerzen & hintere Dichtstopfen wechseln',
                    cost: '450–720 €',
                    ifIgnored: 'Ruckelnder Kaltstart & verbrannter Ölgeruch am Auspuff (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'red',
                    km: '125.000–170.000 km • 9–11 J.',
                    action: 'Piezo-Hochdruckinjektoren & Abgassensor (NOx) prüfen/erneuern',
                    cost: '1.200–2.400 €',
                    ifIgnored: 'Tropfende Injektoren ruinieren Zylinderwände und teure Kats (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '3.500–5.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '155.000–200.000 km • 11–13 J.',
                    action: 'Hochdruck-Kraftstoffpumpe & Saugrohrklappen-Einheit ersetzen',
                    cost: '900–1.450 €',
                    ifIgnored: 'Startverweigerung, Notlauf & abgebrochene Saugrohrteile (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.400–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '195.000–245.000 km • 13–15+ J.',
                    action: '7G-Steuerplatte, Getriebeöl & Motorlager erneuern',
                    cost: '750–1.150 €',
                    ifIgnored: 'Automatik blockiert im Notprogramm & spürbare Motorvibrationen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.900–3.000 €'
                  }
                ]
              },
              ru: {
                headline: '292-сильный V6 с послойным впрыском— быстрее и экономичнее обычного 3.5, но сложнее в ремонте',
                strengths: [
                  'Выпускался с конца 2008 года, поэтому шестерня балансирного вала уже усиленная.',
                  'Послойный впрыск снижает расход до ~9,6 л/100 км при 292 л.с.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Главный риск— дорогие пьезофорсунки, ТНВД и датчики оксидов азота NOx.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'На холодном запуске прислушайтесь к ровной работе без запаха бензина— пьезофорсунки на этой редкой версии дорогие.',
                  'Проверьте в истории замену датчика NOx и проверки топливного насоса высокого давления.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена 8 литров синтетики (раз в 10–15 тыс.) и смена тормозной раз в 2 года',
                    cost: '€190–300',
                    ifIgnored: 'Редкие ТО ускоряют износ звёзд V6 и закоксовывают пластиковые заслонки впуска',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), свечи, осмотреть стареющий ремень и проверку форсунок',
                    cost: '€420–680',
                    ifIgnored: '«Вечное» масло АКПП стареет и бьёт по плате, а пластик и сальники к 6 годам текут',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Очистить нагар на впуске, заменить свечи и задние уплотнения',
                    cost: '€450–720',
                    ifIgnored: 'Тряска по утрам и дым от капель масла на выпуске',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'red',
                    km: '125 000–170 000 км • 9–11 лет',
                    action: 'Проверить/заменить пьезофорсунки прямого впрыска и датчик NOx',
                    cost: '€1 200–2 400',
                    ifIgnored: 'Текущие форсунки смывают масло со стенок и портят катализаторы (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 500–5 500'
                  },
                  {
                    tier: 'orange',
                    km: '155 000–200 000 км • 11–13 лет',
                    action: 'Заменить ТНВД и впускной коллектор с механизмом заслонок',
                    cost: '€900–1 450',
                    ifIgnored: 'Проблемы с запуском, ошибки и риск обрыва заслонок',
                    damageCost: '€2 400–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '195 000–245 000 км • 13–15+ лет',
                    action: 'Заменить плату датчиков 7-ступ. АКПП, масло и опоры двигателя',
                    cost: '€750–1 150',
                    ifIgnored: 'Аварийный режим автомата и сильная вибрация на холостых (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 900–3 000'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.8,
            badges: {
              en: ['Smooth 7G-Tronic Auto / 6-MT', 'Needs 60k km ATF Service'],
              de: ['Sanfte 7G-Tronic-Automatik', 'Alle 60.000 km ATF-Spülung'],
              ru: ['Плавный 7G-Tronic / 6-МКПП', 'Замена масла раз в 60 тыс. км']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.5,
            badges: {
              en: ['Solid CAN-Bus Electrics', 'Watch NOx Sensors & ELV'],
              de: ['Stabiles CAN-Bordnetz', 'NOx-Sensoren & ELV beachten'],
              ru: ['Надёжная шина CAN', 'Датчики NOx и замок руля ELV']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '525 kg Payload'],
              de: ['1.800 kg Anhängelast', '525 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 525 кг']
            }
          },
          accelerationOvertaking: {
            score: 9.3,
            badges: {
              en: ['0–100 km/h: 6.2 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,2 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,2 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.3,
            badges: {
              en: ['365 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['365 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['365 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 9.0,
            badges: {
              en: ['RWD-Only Pure Balance', 'Dynamic Handling Pack Common'],
              de: ['Reiner Heckantrieb', 'Oft mit Sportfahrwerk'],
              ru: ['Чистый задний привод', 'Часто со спортподвеской']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 4.8,
            badges: {
              en: ['Thirsty (9.6 L/100km)', '193 g/km CO2'],
              de: ['Durstig (9,6 L/100km)', '193 g/km CO2'],
              ru: ['Прожорливый (9,6 л/100 км)', '193 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.0,
            badges: {
              en: ['High 3.5L CO2 Tax (193 g)', 'High 292 HP Insurance Class'],
              de: ['Hohe 3.5-CO2-Steuer (193 g)', 'Teure 292-PS-Versicherung'],
              ru: ['Высокий налог 3,5 л (193 г)', 'Дорогая страховка за 292 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 3.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & rear diff / 4MATIC oil', de: '7G-Tronic-Öl (722.9) + Filter & Hinterachs-/4MATIC-Öl wechseln', ru: 'Замена масла 7G-Tronic + фильтр и масло в редукторе / 4MATIC' }, cost: '€320–480' },
                { when: { en: 'Every 80,000 km', de: 'Alle 80.000 km', ru: 'Каждые 80 000 км' }, action: { en: 'Replace 6× iridium spark plugs & inspect oil-cooler gasket for seepage', de: '6× Iridium-Zündkerzen wechseln & Ölkühlerdichtung auf Schwitzen prüfen', ru: 'Замена 6 свечей и проверка прокладки теплообменника' }, cost: '€220–340' }
              ],
              critical: [
                { when: { en: '120,000–180,000 km', de: '120.000–180.000 km', ru: '120 000–180 000 км' }, action: { en: 'M272 plastic intake manifold tumble-flap lever (upgrade to aluminium kit)', de: 'M272 Saugrohr-Drallklappen-Hebel (auf Alu-Reparatursatz umrüsten)', ru: 'Тяга заслонок впускного коллектора M272 (замена на алюминиевую)' }, cost: '€450–1,100', risk: { en: 'Broken plastic lever causes limp torque or loose flaps entering valves', de: 'Abgebrochene Kunststoffhebel kosten Leistung oder schädigen Ventile', ru: 'Сломанная тяга душит тягу, а обломки заслонок опасны для клапанов' }, damage: '€1,800–3,200' },
                { when: { en: '140,000–210,000 km', de: '140.000–210.000 km', ru: '140 000–210 000 км' }, action: { en: '7G-Tronic conductor plate / speed sensor & rear subframe rust check', de: '7G-Tronic Steuereinheit / Drehzahlsensor & Hinterachsträger-Check', ru: 'Плата управления 7G-Tronic (датчик оборотов) и осмотр подрамника' }, cost: '€650–1,300', risk: { en: 'Gearbox locked in 2nd gear limp mode or subframe rust', de: 'Getriebe bleibt im Notlauf hängen oder Achsträger rostet durch', ru: 'Аварийный режим АКПП на 2-й передаче или коррозия подрамника' }, damage: '€1,800–2,800' }
              ]
            },
            badges: {
              en: ['8L Oil & 322 mm Sport Brakes', 'Very Expensive Piezo Injectors'],
              de: ['8 L Öl & 322-mm-Bremsen', 'Sehr teure Piezo-Injektoren'],
              ru: ['8 л масла и 322 мм тормоза', 'Очень дорогие пьезофорсунки']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Rare 292 HP Collector Appeal', 'Firm Enthusiast Pricing'],
              de: ['Seltener 292-PS-Geheimtipp', 'Wertstabil'],
              ru: ['Редкая версия 292 л.с.', 'Стабильная цена']
            }
          }
        }
      },
      {
        id: 'c350-m276',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [{ id: '7g-tronic-plus', isDefault: true }],
        buyerFitGroup: 'v6-petrol',
        buyerFitOverrides: {
          skip: [
            'w204V6RunningCosts',
            'w204M276Tensioner',
            'w204RearSubframeRust',
            'w204TightRearSpace'
          ]
        },
        dossierGroup: 'petrol-7g',
        isDefault: false,
        fuelType: 'petrol',
        hp: 306,
        shortTitle: 'C 350 V6 (M276)',
        fullName: '2012 Mercedes-Benz C 350 V6',
        engineBadge: 'C 350 V6 • 306 HP',
        engineSubLabel: {
          en: '3.5L V6 DI M276 (03/2011–06/2015) • 7G-Tronic Plus / Opt. 4Matic • 370 Nm',
          de: '3.5L 60°-V6 M276 (03/2011–06/2015) • 7G-Tronic Plus / Opt. 4Matic • 370 Nm',
          ru: '3.5 V6 DI M276 (03/2011–06/2015) • 7G-Tronic Plus / Опц. 4Matic • 370 Н·м'
        },
        rarityLabel: {
          en: 'CROWN-JEWEL V6 SLEEPER',
          de: 'MEISTERSTÜCK V6',
          ru: 'ЛУЧШИЙ V6 СЕРИИ'
        },
        originalMsrp: {
          en: '€46,886 New',
          de: '46.886 € Neu',
          ru: '€46 886 новый'
        },
        estUsedPrice: '€16,500',
        perkLabel: {
          en: '✦ 306 HP / 6.0s 0–100 • Bulletproof M276 V6 • Thirsty (8.8 L/100km)',
          de: '✦ 306 PS / 6,0s 0–100 • Robuster M276-V6 • Nur Durstig (8,8 L/100km)',
          ru: '✦ 306 л.с. / 6,0 с до 100 • Надёжный V6 M276 • Расход 8,8 л/100 км'
        },
        remarkablePositives: {
          en: [
            '306 HP • SPORTY 6.0S 0–100 PERFORMANCE',
            'GOOD ECO 8.8 L/100KM FOR 3.5L V6',
            'ROBUST & MODERN M276 ENGINE',
            'FACELIFT CABIN + 7G-TRONIC PLUS',
            'OPTIONAL 4MATIC + 322MM BRAKES'
          ],
          de: [
            '306 PS • 6,0S 0–100 SPRINTWERT',
            'GUTE 8,8 L/100KM FÜR EINEN 3.5L V6',
            'ROBUSTER & MODERNER M276-MOTOR',
            'MOPF-COCKPIT + 7G-TRONIC PLUS',
            'OPTIONAL 4MATIC + 322MM BREMSEN'
          ],
          ru: [
            '306 Л.С. • РАЗГОН ВСЕГО 6,0 С ДО 100',
            'ЭКОНОМИЧНЫЕ 8,8 Л/100 КМ ДЛЯ 3.5 V6',
            'НАДЁЖНЫЙ И СОВРЕМЕННЫЙ МОТОР M276',
            'РЕСТАЙЛИНГОВЫЙ САЛОН + 7G-TRONIC PLUS',
            'ОПЦИЯ 4MATIC И ТОРМОЗА 322 ММ'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH COLLECTOR USED PRICES (€16.5K+)',
            'EARLY 2011–2012 CHAIN TENSIONER CHECK-VALVE TSB',
            '3.5L TAX & INSURANCE BRACKET'
          ],
          de: [
            'HOHER GEBRAUCHTPREIS (AB CA. 16.500 €)',
            '2011–2012 KETTENSPANNER-RÜCKSCHLAGVENTILE PRÜFEN',
            'HOHE 3.5L STEUER & VERSICHERUNG'
          ],
          ru: [
            'ВЫСОКАЯ ЦЕНА НА ВТОРИЧКЕ (€16 500+)',
            'НА АВТО 2011–2012 Г. ОБНОВИТЬ НАТЯЖИТЕЛИ',
            'ДОРОГОЙ НАЛОГ И СТРАХОВКА ЗА 3.5 Л'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.4,
          comfortCabin: 8.7,
          spacePracticality: 7.6,
          performanceDynamics: 8.8,
          runningCostsTco: 7.1
        },
        specOverrides: {
          engineName: { en: '3.5L V6 M276 (306 HP Chain)', de: '3.5L V6 M276 (306 PS Kette)', ru: '3.5L V6 M276 (306 л.с. Цепь)' },
          forcedInduction: '@na', injection: '@direct', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '530 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '6.0 s', topSpeed: '250 km/h', peakTorque: '370 Nm @ 3,500 rpm',
          passingPunch: { en: 'Rapid 306 HP V6 Express', de: 'Souveräner 306-PS-Express', ru: 'Мощнейший 306-сильный V6' },
          realWorldFuel: '8.8 L/100km', tankRange: '66 L (~750 km)', euroNorm: 'Euro 5 (Petrol)', taxInsurance: '@tierHigh', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 9.3,
            badges: {
              en: ['Bulletproof Modern M276 V6', 'Check Tensioner Valves (2011–12)'],
              de: ['Sehr robuster M276-V6', 'Spanner-Ventile 2011–12 prüfen'],
              ru: ['Один из лучших V6 M276', 'Клапаны натяжителей (2011–12)']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'M276 DE35 · 3,498 cc 60° V6' }, { k: 'architecture', v: { en: '60° V6 Aluminium · 306 HP Direct Injection + 7G-Tronic Plus', de: '60°-V6 Alu · 306 PS Direkteinspritzung + 7G-Tronic Plus', ru: 'V6 60° алюминий · 306 л.с. DI + 7G-Tronic Plus' } }], note: { en: 'Crown jewel of the non-AMG W204 range: 6.0 s sprint, only 8.8 L/100km, and rock-solid M276 reliability once chain check-valves are updated.', de: 'Krönung aller Nicht-AMG-W204: 6,0 s auf 100, nur 8,8 L Verbrauch und sehr hoher M276-Langzeitqualität.', ru: 'Жемчужина линейки W204 (кроме AMG): 6,0 с до 100, расход всего 8,8 л и отличный ресурс мотора M276.' } },
              forcedInduction: '@naNoTurbo', injection: '@directInjPetrol', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Mercedes’ Modern 60° M276 V6— 306 HP Muscle with Class-Leading Reliability & Economy',
                strengths: [
                  'True 60° V6 Architecture: Eliminates the M272’s balance shaft entirely, delivering smoother operation and vastly better durability.',
                  'Multi-spark ignition and BlueDirect injection cut consumption to ~8.8 L/100km despite 306 HP.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  '2011–2012 builds can rattle for 2 seconds on cold start if early chain tensioners lack check-valves (straightforward Mercedes TSB update).',
                  'High-mileage piezo injectors and camshaft position sensors (oil wicking check) are worth inspecting.'
                ],
                beforeYouBuy: [
                  'Start the engine dead cold with the bonnet open: a sharp 2-second rattle points to missing upgraded timing chain check valves.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.',
                  'Check the oil dipstick and coolant expansion tank for clean fluids without milky residue.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre synthetic oil change (every 10–15k / 1 yr) & 2-yr brake fluid flush',
                    cost: '€190–300',
                    ifIgnored: 'Stretched V6 oil intervals coat timing gears & gum up plastic intake flaps early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G-Tronic auto oil (60k / 4–5 yrs), plugs & check 6-yr aging belt, seals & cam-sensor oil blockers & 4MATIC oil',
                    cost: '€420–680',
                    ifIgnored: 'Aged "lifetime" gearbox fluid wears 7-speed plate & 6-yr plastic seals dry/weep',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Fit protective oil-blocker pigtails on front cam sensors & fresh plugs',
                    cost: '€250–400',
                    ifIgnored: 'Creeping oil silently ruins sensors and main engine computer (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '125,000–170,000 km • 9–11 yrs',
                    action: 'Install updated chain tensioners & check valves if cold rattle appears',
                    cost: '€700–1,200',
                    ifIgnored: 'Dry cold starts wear timing chains and cam gears prematurely (components & fluids also degrade over years)',
                    damageCost: '€2,800–4,600'
                  },
                  {
                    tier: 'orange',
                    km: '160,000–205,000 km • 11–13 yrs',
                    action: 'Reseal front timing covers & replace aging ignition coils / coolant hose',
                    cost: '€550–900',
                    ifIgnored: 'Oil dripping onto alternator & sudden highway misfires',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'orange',
                    km: '195,000–245,000 km • 13–15+ yrs',
                    action: 'Clean direct-injection intake carbon, change gearbox fluid & engine mounts',
                    cost: '€700–1,100',
                    ifIgnored: 'Rough idle, sluggish throttle & worn 7-speed gearbox clutches (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,000–3,200'
                  }
                ]
              },
              de: {
                headline: 'Moderner 60°-V6 (M276, 306 PS)— die Krone der nicht-AMG W204 mit Top-Haltbarkeit',
                strengths: [
                  'Konstruktiv robuster als der alte M272 und extrem laufruhig.',
                  'Trotz 306 PS liegt der Realverbrauch dank BlueDirect bei rund 8,8 L/100km.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Frühe 2011–2012er M276 können beim Kaltstart kurz rasseln, falls noch keine Rückschlagventile an den Kettenspannern verbaut wurden (einfaches Update).',
                  'Stecker der Nockenwellensensoren auf Ölfeuchtigkeit kontrollieren.'
                ],
                beforeYouBuy: [
                  'Kaltstart bei offener Haube anhören: Ein kurzes, hartes Rasseln für 2 Sekunden deutet auf fehlende Rückschlagventile an den Kettenspannern hin.',
                  'Die vier vorderen Nockenwellen-Stecker auf Ölfeuchte prüfen, bevor Öl in den Kabelbaum kriecht.',
                  'Vordere Stirndeckel auf Schwitzöl prüfen und saubere Schaltvorgänge der 7G-Plus-Automatik testen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich die 8 Liter Synthetiköl wechseln (10–15 Tkm) & alle 2 J. Bremsflüssigkeit erneuern',
                    cost: '190–300 €',
                    ifIgnored: 'Überzogenes V6-Altöl verschleißt Steuerketten-Zahnräder & verklebt Saugrohrklappen',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Tronic-Öl (60 Tkm / 4–5 J.) & Kerzen wechseln sowie 6-J.-Riemen, Dichtungen & Ölstoppkabel & ggf. 4MATIC-Öl prüfen',
                    cost: '420–680 €',
                    ifIgnored: 'Alterndes Automatiköl ruiniert die Steuerplatte; Kunststoffdichtungen härten aus',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Ölstoppkabel an den vorderen Sensoren nachrüsten & Zündkerzen wechseln',
                    cost: '250–400 €',
                    ifIgnored: 'Kriechöl wandert bis in Lambdasonden und Motorsteuergerät (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '125.000–170.000 km • 9–11 J.',
                    action: 'Verbesserte Kettenspanner & Rückschlagventile bei Kaltstartrasseln einbauen',
                    cost: '700–1.200 €',
                    ifIgnored: 'Trockene Kaltstarts verschleißen Kette und Nockenwellenversteller (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.800–4.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '160.000–205.000 km • 11–13 J.',
                    action: 'Vordere Stirndeckel abdichten sowie Zündspulen & Kühlschlauch erneuern',
                    cost: '550–900 €',
                    ifIgnored: 'Öl tropft auf die Lichtmaschine & plötzliche Zündaussetzer (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'orange',
                    km: '195.000–245.000 km • 13–15+ J.',
                    action: 'Einlasskanäle reinigen, Automatiköl wechseln & Motorlager tauschen',
                    cost: '700–1.100 €',
                    ifIgnored: 'Unruhiger Leerlauf, träge Gasannahme & Getriebeverschleiß (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.000–3.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Современный 60° V6 (M276, 306 л.с.)— лучший не-AMG двигатель W204 с огромным ресурсом',
                strengths: [
                  'Лишён слабых мест предыдущего M272 и работает мягче.',
                  'При 306 л.с. реальный расход составляет около 8,8 л/100 км.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'На моторах 2011–2012 гг. возможен короткий треск при холодном пуске— лечится установкой обратных клапанов и новых натяжителей цепи.',
                  'Проверять разъёмы датчиков распредвала на сухость и следить за качеством бензина.'
                ],
                beforeYouBuy: [
                  'При открытом капоте на холодную послушайте первые 2 секунды: резкий треск говорит об износе натяжителей без обратных клапанов.',
                  'Осмотрите четыре передних разъёма датчиков распредвалов— масло не должно идти по проводам в проводку.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодная замена 8 литров синтетики (раз в 10–15 тыс.) и смена тормозной раз в 2 года',
                    cost: '€190–300',
                    ifIgnored: 'Редкие ТО ускоряют износ звёзд V6 и закоксовывают пластиковые заслонки впуска',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), свечи, осмотреть стареющий ремень и защиту проводки от масла',
                    cost: '€420–680',
                    ifIgnored: '«Вечное» масло АКПП стареет и бьёт по плате, а пластик и сальники к 6 годам текут',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Установить защитные переходники на передние датчики и заменить свечи',
                    cost: '€250–400',
                    ifIgnored: 'Масло по жгуту проводов выводит из строя блок управления (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '125 000–170 000 км • 9–11 лет',
                    action: 'Поставить обновлённые натяжители и обратные клапаны при шуме на запуске',
                    cost: '€700–1 200',
                    ifIgnored: 'Масляное голодание при пуске изнашивает цепи и фазорегуляторы (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 800–4 600'
                  },
                  {
                    tier: 'orange',
                    km: '160 000–205 000 км • 11–13 лет',
                    action: 'Переуплотнить передние крышки, заменить катушки и шланг охлаждения',
                    cost: '€550–900',
                    ifIgnored: 'Масло попадает на генератор, возникают пропуски зажигания (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'orange',
                    km: '195 000–245 000 км • 13–15+ лет',
                    action: 'Очистить впуск от нагара, поменять масло в АКПП и опоры двигателя',
                    cost: '€700–1 100',
                    ifIgnored: 'Вибрация на холостых, вялый отклик и износ автомата (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 000–3 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.2,
            badges: {
              en: ['Refined 7G-Tronic Plus / 6-MT', 'Upgraded Low-Wear Converter'],
              de: ['Feine 7G-Tronic Plus / 6-Gang', 'Verbesserter Wandlerautomat'],
              ru: ['Обновлённый 7G-Tronic Plus', 'Плавный и надёжный автомат']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.4,
            badges: {
              en: ['Late Facelift W204 Electrics', 'Fewer ELV & Taillight Faults'],
              de: ['Späte W204-Facelift-Elektrik', 'Ausgereifte Steuergeräte'],
              ru: ['Доработанная электрика Mopf', 'Минимум проблем с ELV']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 9.2,
            badges: {
              en: ['Top Facelift Cabin & Trim', 'NTG 4.5 + Rich Equipment'],
              de: ['Top-Facelift-Verarbeitung', 'NTG 4.5 & viel Ausstattung'],
              ru: ['Богатая отделка рестайлинга', 'Мультимедиа NTG 4.5']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m RWD / 11.1 m 4Matic', 'Upright Pillars & Clear Mirrors'],
              de: ['10,8 m RWD / 11,1 m 4Matic', 'Schmale Säulen & gute Übersicht'],
              ru: ['10,8 м RWD / 11,1 м 4Matic', 'Хорошая обзорность и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.4,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '530 kg Payload'],
              de: ['1.800 kg Anhängelast', '530 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 530 кг']
            }
          },
          accelerationOvertaking: {
            score: 9.4,
            badges: {
              en: ['0–100 km/h: 6.0 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,0 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,0 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['370 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['370 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['370 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 9.3,
            badges: {
              en: ['Facelift Steering + RWD/4Matic', 'Sport Suspension Standard/Opt.'],
              de: ['Präzise Mopf-Lenkung', 'Sportfahrwerk verbreitet'],
              ru: ['Острый рестайл-руль', 'Часто со спортподвеской']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 5.6,
            badges: {
              en: ['Thirsty (8.8 L/100km)', '159 g/km CO2'],
              de: ['Durstig (8,8 L/100km)', '159 g/km CO2'],
              ru: ['Прожорливый (8,8 л/100 км)', '159 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.5,
            badges: {
              en: ['Cleaner 159 g CO2 V6 • Euro 5', 'High 306 HP Insurance Class'],
              de: ['159 g CO2 für 3.5 V6 • Euro 5', 'Hohe 306-PS-Versicherung'],
              ru: ['Низкий CO2 для 3,5 V6 • Euro 5', 'Дорогая страховка за 306 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 6.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic Plus (722.9) ATF + filter & rear differential oil', de: '7G-Tronic-Plus-Öl (722.9) + Filter & Hinterachsöl wechseln', ru: 'Замена масла 7G-Tronic Plus + фильтр и масло в заднем редукторе' }, cost: '€320–480' },
                { when: { en: 'Every 80,000 km', de: 'Alle 80.000 km', ru: 'Каждые 80 000 км' }, action: { en: 'Replace 6× direct-injection spark plugs & inspect cam-sensor plugs for oil', de: '6× Zündkerzen wechseln & Nockenwellensensor-Stecker auf Öl prüfen', ru: 'Замена 6 свечей и проверка разъёмов датчиков распредвалов на масло' }, cost: '€240–360' }
              ],
              critical: [
                { when: { en: '100,000–170,000 km', de: '100.000–170.000 km', ru: '100 000–170 000 км' }, action: { en: 'M276 secondary timing-chain tensioners & check-valve update (cold rattle)', de: 'M276 Sekundärkettenspanner & Rückschlagventile (Kaltstart-Rasseln)', ru: 'Натяжители вторичных цепей M276 и обратные клапаны (треск при пуске)' }, cost: '€650–1,200', risk: { en: 'Oil drain-back causes cold-start chain rattle and cam-phaser wear', de: 'Leergelaufene Spanner verschleißen Nockenwellenversteller rapide', ru: 'Масляное голодание при пуске быстро изнашивает муфты фаз' }, damage: '€2,400–3,800' },
                { when: { en: '120,000–200,000 km', de: '120.000–200.000 km', ru: '120 000–200 000 км' }, action: { en: 'W204 rear subframe rust check & ELV steering lock', de: 'W204 Hinterachsträger-Rostprüfung & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника и блокиратора руля ELV' }, cost: '€350–1,200', risk: { en: 'Subframe rust or jammed electronic steering lock', de: 'Hinterachs-Korrosion oder blockiertes Lenkradschloss', ru: 'Коррозия подрамника или отказ блокиратора руля' }, damage: '€1,500–2,500' }
              ]
            },
            badges: {
              en: ['Clean M276 Cuts Surprises', 'V6 Oil, Plugs & 322 mm Brakes'],
              de: ['Robuster M276 spart Defekte', 'V6-Ölmenge & 322-mm-Bremsen'],
              ru: ['Надёжный M276 без сюрпризов', 'Расходы на V6 ТО и 322 мм тормоза']
            }
          },
          depreciationResale: {
            score: 8.8,
            badges: {
              en: ['Future Classic Demand', 'Minimal Depreciation Left'],
              de: ['Gesuchter Youngtimer-Kandidat', 'Extrem wertstabil'],
              ru: ['Культовая модификация', 'Почти не теряет в цене']
            }
          }
        }
      },
      {
        id: 'c180-cdi',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€7,300',
            specOverrides: { sprint0100: '10.5 s', topSpeed: '208 km/h', realWorldFuel: '5.0 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 9.3,
                badges: {
                  en: ['5.0 L/100km (6-MT)'],
                  de: ['5,0 L/100km (6-MT)'],
                  ru: ['5,0 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'om651-diesel',
        buyerFitOverrides: {
          ideal: ['w204C180CdiGentle', 'w204AutoSmooth', 'w204CabinQuality', 'globalDieselLongRange']
        },
        dossierGroup: 'diesel-7g',
        isDefault: false,
        fuelType: 'diesel',
        hp: 120,
        shortTitle: 'C 180 CDI',
        fullName: '2012 Mercedes-Benz C 180 CDI',
        engineBadge: 'C 180 CDI • 120 HP',
        engineSubLabel: {
          en: '2.1L Diesel OM651 (04/2010–03/2014) • 6-MT / 5-AT / 7G-Plus • 300 Nm',
          de: '2.1L Diesel OM651 (04/2010–03/2014) • 6-Gang / 5-AT / 7G-Plus • 300 Nm',
          ru: '2.1 Дизель OM651 (04/2010–03/2014) • 6-МКПП / 5-АКПП / 7G-Plus • 300 Н·м'
        },
        rarityLabel: {
          en: 'ULTRA-FRUGAL FLEET CRUISER',
          de: 'SPARSAMER DAUERLÄUFER',
          ru: 'СВЕРХЭКОНОМИЧНЫЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€31,713 New',
          de: '31.713 € Neu',
          ru: '€31 713 новый'
        },
        estUsedPrice: '€7,900',
        perkLabel: {
          en: '✦ Efficient 5.3 L/100km • Under-Stressed 2.1L Block • 300 Nm',
          de: '✦ Sparsam (5,3 L/100km) • Entspannter 2.1L Block • 300 Nm',
          ru: '✦ Расход 5,3 л/100 км • Дефорсированный 2.1 л • 300 Н·м'
        },
        remarkablePositives: {
          en: [
            'EFFICIENT 5.3 L/100KM',
            '300 NM FROM DETUNED 2.1L BLOCK',
            'LOW STRESS ON ENGINE INTERNALS',
            'CRISP RWD CHASSIS BALANCE',
            '1,800 KG BRAKED TOWING'
          ],
          de: [
            'SPARSAM: 5,3 L/100KM',
            '300 NM TROTZ GEDROSSELTER LEISTUNG',
            'GERINGE MOTORBELASTUNG (LANGLEBIG)',
            'AUSGEWOGENES HECKANTRIEB-FAHRWERK',
            '1.800 KG ANHÄNGELAST GEBREMST'
          ],
          ru: [
            'РЕАЛЬНЫЙ РАСХОД 5,3 Л/100 КМ',
            'ТЯГА 300 Н·М С НИЗКИХ ОБОРОТОВ',
            'МИНИМАЛЬНАЯ НАГРУЗКА НА БЛОК 2.1 Л',
            'СБАЛАНСИРОВАННЫЙ ЗАДНИЙ ПРИВОД',
            'БУКСИРОВКА ДО 1 800 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'MODEST 10.5S 0–100 TOP-END PACE',
            'WATCH OM651 REAR TIMING CHAIN & WATER PUMP',
            'EURO 5 CITY DIESEL RESTRICTIONS'
          ],
          de: [
            'GEMÄCHLICHE 10,5S 0–100 OBENHERAUS',
            'OM651 STEUERKETTE & WASSERPUMPE PRÜFEN',
            'EURO-5-UMWELTZONEN-LIMIT'
          ],
          ru: [
            'СПОКОЙНЫЙ РАЗГОН 10,5 С ДО 100',
            'ПРОВЕРЯТЬ ЦЕПЬ ГРМ И ПОМПУ OM651',
            'НОРМЫ EURO 5 ДЛЯ ЦЕНТРА ГОРОДОВ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 7.7,
          runningCostsTco: 8.1
        },
        specOverrides: {
          engineName: { en: '2.1L I4 OM651 CDI 120', de: '2.1L Reihenvierzylinder OM651', ru: '2.1L R4 OM651 CDI 120' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '530 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '10.5 s', topSpeed: '208 km/h', peakTorque: '300 Nm @ 1,400 rpm',
          passingPunch: { en: 'Understressed 300 Nm Torque', de: 'Entspannte 300 Nm ab 1.400/min', ru: 'Спокойная тяга 300 Н·м' },
          realWorldFuel: '5.3 L/100km', tankRange: '66 L (~1,245 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierLowMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.1,
            badges: {
              en: ['Under-Stressed 120 HP 2.1L', 'Check Recall Injectors & Chain'],
              de: ['Entspannter 120-PS 2.1L', 'Rückruf-Injektoren & Kette prüfen'],
              ru: ['Ненагруженный 2.1L (120 л.с.)', 'Отзыв форсунок и цепь ГРМ']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM651 DE22 LA red. · 2,143 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron Diesel · Detuned 2.1L + Rear Chain', de: 'Reihenvierzylinder Grauguss · Gedrosselter 2.1L + Heckkette', ru: 'Рядный 4-цил. чугунный дизель · Дефорсированный 2.1L' } }], note: { en: 'Heavily understressed 2.1-litre fleet diesel delivering 1,245 km per tank; still check OM651 plastic coolant flange and rear timing chain.', de: 'Stark gedrosselter 2,1-Liter-Flottendiesel mit 1.245 km Reichweite; OM651-Kühlwasserstutzen und hintere Steuerkette prüfen.', ru: 'Сильно дефорсированный дизель 2.1 с запасом хода 1 245 км; следите за фланцем ОЖ и задней цепью OM651.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Detuned 2.1L OM651 Taxi Spec— Minimal Mechanical Stress, Huge Highway Longevity',
                strengths: [
                  'Software-Detuned 2.1L Block: Uses the exact same 2,143 cc displacement as higher-output models at only 120 HP, reducing thermal and turbo stress.',
                  'German taxis regularly take OM651 engines past 400,000+ km with diligent oil changes.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Early 2010–2011 units originally had Delphi piezo injectors (confirm Mercedes recall replacement to solenoid injectors) and watch rear-mounted timing chain rattle on cold start.',
                  'Check plastic water pump / fuel-filter coolant neck leaks and oil cooler housing gaskets.'
                ],
                beforeYouBuy: [
                  'Listen at cold idle from behind the engine (near the cabin firewall) for a sharp timing chain rattle— the chain sits at the back.',
                  'Inspect under the air intake for wet coolant puddles from the plastic water pump or plastic fuel filter neck.',
                  'Check service records for early diesel injector upgrades and verify smooth turbo pull without soot filter warnings.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km low-ash oil (never 25k!), diesel fuel filter & regular highway runs',
                    cost: '€190–310',
                    ifIgnored: 'Diluted 25k oil wears chain/turbos early & city commutes choke soot filter',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G auto oil (60–80k / 5 yrs) & check 6-yr aging rubber belt, hoses & plastic water pump neck',
                    cost: '€380–620',
                    ifIgnored: 'Aged automatic oil shifts hard & 6-yr heat-aged plastic/rubber leaks coolant/boost',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace leaking plastic water pump & plastic coolant/fuel filter neck',
                    cost: '€380–600',
                    ifIgnored: 'Slow coolant leaks turning into sudden overheating on the motorway (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'orange',
                    km: '140,000–185,000 km • 9–11 yrs',
                    action: 'Replace split intercooler air hoses & clean soot filter + exhaust valve',
                    cost: '€450–780',
                    ifIgnored: 'Hissing under throttle, black smoke & limp-mode power cuts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'red',
                    km: '165,000–215,000 km • 11–13 yrs',
                    action: 'Replace rear timing chain & tensioner (requires gearbox removal)',
                    cost: '€1,350–2,100',
                    ifIgnored: 'Snapped single-row rear chain causing severe engine destruction (components & fluids also degrade over years)',
                    damageCost: '€3,800–5,800'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Refurbish diesel injectors, glow plugs & clutch or automatic oil',
                    cost: '€750–1,250',
                    ifIgnored: 'Hard winter starts, smoky exhaust & slipping clutch or rough shifts (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,900'
                  }
                ]
              },
              de: {
                headline: 'Gedrosselter 2.1L OM651— geringste thermische Belastung für extrem hohe Laufleistungen',
                strengths: [
                  'Durchzugsstarker 120-PS-Diesel für entspannte Langstrecken bei regelmäßiger Wartung.',
                  'Der OM651 erreicht im Flottenbetrieb regelmäßig 400.000+ km bei kurzen Ölintervallen.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Auf erledigten Rückruf der frühen Delphi-Piezo-Injektoren achten; die hinten sitzende Steuerkette beim Kaltstart abhören.',
                  'Kunststoff-Wasserpumpe und Ölfiltergehäuse-Dichtung auf Kühlmittel- bzw. Ölverlust prüfen.'
                ],
                beforeYouBuy: [
                  'Im kalten Leerlauf in Richtung Spritzwand lauschen– ein Rasseln hinten am Motor deutet auf die dort verbaute Steuerkette hin.',
                  'Unter dem Luftfilter nach Kühlwasser-Resten rund um die Kunststoff-Wasserpumpe und den Kraftstofffilter-Stutzen schauen.',
                  'Prüfen, ob frühe Injektoren bereits getauscht wurden und der Diesel sauber ohne Partikelfilter-Warnung durchzieht.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich alle 10–15 Tkm Low-Ash-Öl (nie 25 Tkm!), Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '190–310 €',
                    ifIgnored: 'Mit Diesel verdünntes 25.000er-Öl verschleißt Kette/Lader; Stadtbetrieb verrußt DPF',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60–80 Tkm / 5 J.) wechseln sowie 6-J.-Keilriemen, Schläuche & Kunststoff-Wasserstutzen prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Altes Getriebeöl ruckt & gealterte Kunststoff-/Gummiteile verlieren Wasser oder Druck',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Undichte Kunststoff-Wasserpumpe & Kühlwasserstutzen vorsorglich tauschen',
                    cost: '380–600 €',
                    ifIgnored: 'Schleichender Kühlwasserverlust bis zur Motorüberhitzung (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '140.000–185.000 km • 9–11 J.',
                    action: 'Gerissene Ladeluftschläuche tauschen sowie Rußpartikelfilter & Abgasventil reinigen',
                    cost: '450–780 €',
                    ifIgnored: 'Zischen beim Gasgeben, Leistungsverlust & Notlauf auf der Bahn (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'red',
                    km: '165.000–215.000 km • 11–13 J.',
                    action: 'Hintere Steuerkette & Spanner erneuern (Getriebe muss dafür heraus)',
                    cost: '1.350–2.100 €',
                    ifIgnored: 'Reißende Einfach-Steuerkette mit kapitalem Motorschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '3.800–5.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Injektoren prüfen, Glühkerzen erneuern & Kupplung/Getriebeöl warten',
                    cost: '750–1.250 €',
                    ifIgnored: 'Schlechter Kaltstart im Winter & rutschende Kupplung (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Дефорсированный 2.1L OM651— минимальная нагрузка на железо и огромный ресурс в такси',
                strengths: [
                  'Те же 2,1 литра при отдаче 120 л.с. работают с минимальной тепловой нагрузкой.',
                  'При замене масла каждые 10–15 тыс. км моторы OM651 проходят 400 000+ км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Проверьте замену ранних пьезофорсунок Delphi по отзывной кампании и отсутствие треска задней цепи ГРМ при холодном пуске.',
                  'Контролируйте пластиковую помпу/патрубки охлаждения и прокладки теплообменника.'
                ],
                beforeYouBuy: [
                  'На холодную прислушайтесь ближе к моторному щиту— цепь ГРМ стоит сзади, и её износ слышно по звонкому шелесту.',
                  'Поищите следы антифриза под пластиковой помпой и пластиковым штуцером топливного фильтра.',
                  'Проверьте, менялись ли ранние проблемные форсунки и нет ли ошибок по сажевому фильтру.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло Low-Ash строго раз в 10–15 тыс. (не 25 тыс.!), топливный фильтр и выезд на трассу',
                    cost: '€190–310',
                    ifIgnored: 'Разжиженное масло изнашивает цепь и турбину, а пробки рано забивают фильтр сажи',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло АКПП (60–80 тыс. / 5 лет), проверить старые к 6 годам ремень, шланги и пластиковый штуцер помпы',
                    cost: '€380–620',
                    ifIgnored: 'Старая жидкость портит автомат, а пластик и резина к 6 годам теряют герметичность',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить текущую пластиковую помпу и штуцер охлаждения у фильтра',
                    cost: '€380–600',
                    ifIgnored: 'Постоянная утечка антифриза и риск перегрева на трассе (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'orange',
                    km: '140 000–185 000 км • 9–11 лет',
                    action: 'Заменить треснувший патрубок наддува и почистить сажевый фильтр с клапаном ЕГР',
                    cost: '€450–780',
                    ifIgnored: 'Свист при разгоне, дым и уход в аварийный режим (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'red',
                    km: '165 000–215 000 км • 11–13 лет',
                    action: 'Заменить заднюю цепь ГРМ и натяжитель (со снятием коробки)',
                    cost: '€1 350–2 100',
                    ifIgnored: 'Обрыв однорядной цепи и полное разрушение двигателя (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 800–5 800'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Проверить форсунки, свечи накала и обслужить сцепление или АКПП',
                    cost: '€750–1 250',
                    ifIgnored: 'Плохой запуск в мороз и пробуксовка сцепления (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '530 kg Payload'],
              de: ['1.800 kg Anhängelast', '530 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 530 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 10.5 s', '208 km/h Top Speed'],
              de: ['0–100 km/h: 10,5 s', '208 km/h Spitze'],
              ru: ['0–100 км/ч: 10,5 с', 'Макс. 208 км/ч']
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
            score: 8.8,
            badges: {
              en: ['Balanced RWD Chassis', '10.8 m Tight Turning Circle'],
              de: ['Ausgewogener Heckantrieb', '10,8 m kleiner Wendekreis'],
              ru: ['Сбалансированный задний привод', 'Малый радиус разворота 10,8 м']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 9.1,
            badges: {
              en: ['Efficient (5.3 L/100km)', '125 g/km CO2'],
              de: ['Sparsam (5,3 L/100km)', '125 g/km CO2'],
              ru: ['Экономичный (5,3 л/100 км)', '125 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.4,
            badges: {
              en: ['2.1L Diesel Tax • Euro 5', 'Lowest W204 Diesel Insurance'],
              de: ['2.1-Dieselsteuer • Euro 5', 'Günstigste W204-Diesel-Vers.'],
              ru: ['Дизельный налог 2,1 • Euro 5', 'Дешёвая дизельная страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 7.8,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic Plus / 5G-Tronic ATF + filter & diesel fuel filter', de: '7G/5G-Tronic-Öl + Filter & Dieselfilter wechseln', ru: 'Замена масла АКПП 7G/5G-Tronic + фильтр и топливный фильтр' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect plastic coolant outlet flange, water pump & EGR cooler', de: 'Kühlmittel-Kunststoffflansch, Wasserpumpe & AGR-Kühler prüfen', ru: 'Проверка пластикового фланца ОЖ, помпы и охладителя EGR' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '130,000–200,000 km', de: '130.000–200.000 km', ru: '130 000–200 000 км' }, action: { en: 'OM651 rear simplex timing chain + updated hydraulic tensioner', de: 'OM651 hinten liegende Simplex-Steuerkette + verbesserter Spanner', ru: 'Задняя однорядная цепь ГРМ OM651 и обновлённый натяжитель' }, cost: '€1,100–1,800', risk: { en: 'Cold-start chain rattle progresses to skipped teeth and bent valves', de: 'Kaltstart-Rasseln führt zu Überspringen und kapitalem Motorschaden', ru: 'Грохот цепи при пуске ведёт к перескоку и разрушению ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'Plastic fuel-filter coolant flange leak & rear subframe rust check', de: 'Undichter Kühlwasserstutzen am Kraftstofffilter & Hinterachsträger-Check', ru: 'Течь пластикового фланца ОЖ у топливного фильтра и осмотр подрамника' }, cost: '€320–750', risk: { en: 'Sudden coolant loss on highway or structural subframe rust', de: 'Plötzlicher Kühlwasserverlust auf der Autobahn oder Achsträger-Rost', ru: 'Резкая потеря антифриза на трассе или коррозия подрамника' }, damage: '€1,600–2,800' }
              ]
            },
            badges: {
              en: ['Shared 2.1L OM651 Parts', '16" Tyres • Standard DPF Care'],
              de: ['Günstige 16-Zoll-Reifen', 'Normale OM651-Wartung'],
              ru: ['Доступные шины 16" и расходники', 'Штатный сервис OM651']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['High Commuter Demand', 'Steady Used Pricing'],
              de: ['Starke Pendler-Nachfrage', 'Solider Restwert'],
              ru: ['Популярен для трассы', 'Стабильная цена']
            }
          }
        }
      },
      {
        id: 'c200-cdi-om646',
        defaultGearboxId: '5g-tronic',
        gearboxes: [
          { id: '5g-tronic', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€6,300',
            specOverrides: { sprint0100: '10.4 s', topSpeed: '215 km/h', realWorldFuel: '5.8 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 8.7,
                badges: {
                  en: ['5.8 L/100km (6-MT)'],
                  de: ['5,8 L/100km (6-MT)'],
                  ru: ['5,8 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'om646-diesel',
        dossierGroup: 'diesel-conv-auto',
        isDefault: false,
        fuelType: 'diesel',
        hp: 136,
        shortTitle: 'C 200 CDI (OM646)',
        fullName: '2008 Mercedes-Benz C 200 CDI (OM646)',
        engineBadge: 'C 200 CDI (OM646) • 136 HP',
        engineSubLabel: {
          en: '2.1L Diesel OM646 EVO (03/2007–06/2009) • 6-MT / 5-AT • 270 Nm',
          de: '2.1L Diesel OM646 EVO (03/2007–06/2009) • 6-Gang / 5-AT • 270 Nm',
          ru: '2.1 Дизель OM646 EVO (03/2007–06/2009) • 6-МКПП / 5-АКПП • 270 Н·м'
        },
        rarityLabel: {
          en: 'MILLION-KM TAXI LEGEND',
          de: 'TAXI-DAUERLÄUFER',
          ru: 'ЛЕГЕНДА МИЛЛИОННИК'
        },
        originalMsrp: {
          en: '€31,892 New',
          de: '31.892 € Neu',
          ru: '€31 892 новый'
        },
        estUsedPrice: '€6,800',
        perkLabel: {
          en: '✦ Bulletproof Duplex-Chain OM646 • Tough 5-Speed Auto • 6.1 L/100km',
          de: '✦ Unverwüstlicher Duplex-Ketten-OM646 • 5G-Tronic • 6,1 L/100km',
          ru: '✦ Неубиваемая двухрядная цепь OM646 • 5G-Tronic • 6,1 л/100 км'
        },
        remarkablePositives: {
          en: [
            'LEGENDARY DUPLEX-CHAIN OM646 ENGINE',
            'IRON BLOCK & FRONT-ACCESS TIMING CHAIN',
            'BULLETPROOF 5-SPEED AUTOMATIC',
            '6.1 L/100KM',
            'CHEAPEST RELIABLE DIESEL ENTRY'
          ],
          de: [
            'LEGENDÄRER DUPLEX-KETTEN-OM646',
            'GRAUGUSS-BLOCK & SOLIDE VORDER-KETTE',
            'UNVERWÜSTLICHE 5G-TRONIC AUTOMATIK',
            '6,1 L/100KM VERBRAUCH',
            'GÜNSTIGSTER ROBUSTER DIESEL-EINSTIEG'
          ],
          ru: [
            'ЛЕГЕНДАРНЫЙ МОТОР OM646 С ДВОЙНОЙ ЦЕПЬЮ',
            'ЧУГУННЫЙ БЛОК И ПЕРЕДНЯЯ ЦЕПЬ ГРМ',
            'НЕУБИВАЕМЫЙ 5-СТ. АВТОМАТ',
            'РЕАЛЬНЫЙ РАСХОД 6,1 Л/100 КМ',
            'ЛУЧШИЙ БЮДЖЕТНЫЙ ДИЗЕЛЬ ПО НАДЁЖНОСТИ'
          ]
        },
        notableNegatives: {
          en: [
            'EURO 4 CITY BAN RESTRICTIONS',
            'MODEST 10.4S 0–100 PACE (270 NM)',
            'CHECK INJECTOR COPPER SEALS & SUBFRAME'
          ],
          de: [
            'EURO-4-DIESEL (UMWELTZONEN-LIMIT)',
            'GEMÄCHLICHE 10,4S 0–100 (270 NM)',
            'INJEKTORDICHTUNGEN & HINTERACHSE PRÜFEN'
          ],
          ru: [
            'ЭКОКЛАСС EURO 4 (ОГРАНИЧЕНИЯ В ЕС)',
            'СПОКОЙНЫЙ РАЗГОН 10,4 С ДО 100',
            'ПРОВЕРЯТЬ ШАЙБЫ ФОРСУНОК И ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.5,
          comfortCabin: 8.5,
          spacePracticality: 7.5,
          performanceDynamics: 7.6,
          runningCostsTco: 7.6
        },
        specOverrides: {
          engineName: { en: '2.1L I4 OM646 CDI (Duplex)', de: '2.1L Reihenvierzylinder OM646', ru: '2.1L R4 OM646 CDI (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@auto5',
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '10.4 s', topSpeed: '215 km/h', peakTorque: '270 Nm @ 1,600 rpm',
          passingPunch: { en: 'Steady Taxi-Grade Pull', de: 'Ruhiger Dauerläufer-Schub', ru: 'Ровная выносливая тяга' },
          realWorldFuel: '6.1 L/100km', tankRange: '66 L (~1,080 km)', euroNorm: 'Euro 4 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierLowMod'
        },
        subStats: {
          powertrainDurability: {
            score: 9.5,
            badges: {
              en: ['Duplex-Chain OM646 Legend', 'No Delphi Piezo Recall Risk'],
              de: ['Duplex-Ketten-Legende OM646', 'Ohne Piezo-Injektor-Risiko'],
              ru: ['Двухрядная цепь OM646', 'Простые электромагнитные форсунки']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM646 EVO · 2,148 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron · Front Duplex Timing Chain', de: 'Reihenvierzylinder Grauguss · Vordere Duplex-Steuerkette', ru: 'Рядный 4-цил. чугун · Передняя двухрядная цепь' } }], note: { en: 'Legendary German taxi powertrain: front duplex chain + cast-iron OM646 + bulletproof 5G-Tronic routinely clear 400,000+ km.', de: 'Legendärer Taxi-Antrieb: vordere Duplexkette + Grauguss-OM646 + unverwüstliche 5G-Tronic schaffen problemlos 400.000+ km.', ru: 'Легендарная связка такси: двухрядная цепь OM646 + 5G-Tronic спокойно проходят 400 000+ км.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Front-Mounted Duplex Timing Chain & Iron Block— Mercedes’ Famous 500,000+ km Taxi Workhorse',
                strengths: [
                  'Unlike the later OM651’s rear-mounted single chain, the OM646 EVO uses a heavy front-mounted duplex chain that rarely fails.',
                  'Solenoid Injectors & Cast-Iron Block: Avoids the early Delphi piezo injector headaches and tolerates extreme mileage easily.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Check around injector bases under the plastic cover for leaking copper seals ("black death" carbon tar) and stuck thermostats running cold.',
                  'DPF clogging on purely short urban trips and rear axle subframe rust inspection.'
                ],
                beforeYouBuy: [
                  'Lift the black plastic top engine cover if possible and check for black crusty tar around the fuel injectors or raw diesel smell inside the cabin.',
                  'Watch the dashboard temperature gauge on a 10-minute drive— it should climb steadily to ~90°C and stay there (stuck thermostats run cold).',
                  'This older-style diesel has a super-strong front chain, so just check for smooth warm restarts and clean turbo boost.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km low-ash oil (never 25k!), diesel fuel filter & regular highway runs',
                    cost: '€190–310',
                    ifIgnored: 'Diluted 25k oil wears chain/turbos early & city commutes choke soot filter',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G auto oil (60–80k / 5 yrs) & check 6-yr aging rubber belt, hoses & copper injector seals & thermostat',
                    cost: '€380–620',
                    ifIgnored: 'Aged automatic oil shifts hard & 6-yr heat-aged plastic/rubber leaks coolant/boost',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace worn copper injector washers & stuck cooling thermostat',
                    cost: '€260–440',
                    ifIgnored: 'Hard black tar glues injectors into engine & cold running wastes fuel (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–2,000'
                  },
                  {
                    tier: 'orange',
                    km: '145,000–190,000 km • 9–11 yrs',
                    action: 'Replace glow plug relay/plugs & cracked rubber turbo boost hose',
                    cost: '€380–620',
                    ifIgnored: 'Won’t start in frost & loud hissing with sudden power drop (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,000–1,700'
                  },
                  {
                    tier: 'orange',
                    km: '175,000–225,000 km • 11–13 yrs',
                    action: 'Clean clogged soot filter / exhaust valve & service gearbox oil',
                    cost: '€520–850',
                    ifIgnored: 'Choked exhaust backpressure & rough shifts on high-mile cars (components & fluids also degrade over years)',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Rebuild/test high-mile diesel injectors, water pump & engine mounts',
                    cost: '€750–1,250',
                    ifIgnored: 'Excess smoke, hard hot starting & rattling idle vibration (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,900'
                  }
                ]
              },
              de: {
                headline: 'Grauguss-Block mit Duplex-Steuerkette— einer der haltbarsten Mercedes-Diesel aller Zeiten',
                strengths: [
                  'Im Gegensatz zur späteren OM651-Einzelkette hinten gilt der Kettentrieb des OM646 EVO als nahezu unkaputtbar.',
                  'Keine frühen Piezo-Injektor-Ausfälle wie beim ersten OM651.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Auf undichte Injektor-Kupferdichtungen ("Verkokung unter der Abdeckung") und defekte Thermostate achten.',
                  'Nur Euro 4 (grüne Plakette, aber Fahrverbote in einigen Umweltzonen); DPF bei Kurzstrecke prüfen.'
                ],
                beforeYouBuy: [
                  'Plastik-Motorabdeckung abnehmen lassen und um die Injektoren nach schwarzer Verkrustung (Verkokung) oder Dieselgeruch im Innenraum suchen.',
                  'Bei einer 10-Minuten-Fahrt die Temperaturanzeige beobachten: Sie muss zügig auf ~90 °C steigen (oft hängt der Thermostat offen).',
                  'Dieser robuste Vierzylinder hat noch eine sehr langlebige Doppelkette vorn– auf sauberen Durchzug ohne Notlauf achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich alle 10–15 Tkm Low-Ash-Öl (nie 25 Tkm!), Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '190–310 €',
                    ifIgnored: 'Mit Diesel verdünntes 25.000er-Öl verschleißt Kette/Lader; Stadtbetrieb verrußt DPF',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60–80 Tkm / 5 J.) wechseln sowie 6-J.-Keilriemen, Schläuche & Injektor-Dichtringe & Thermostat prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Altes Getriebeöl ruckt & gealterte Kunststoff-/Gummiteile verlieren Wasser oder Druck',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Kupferdichtringe der Injektoren & hängendes Thermostat erneuern',
                    cost: '260–440 €',
                    ifIgnored: 'Harte Teerkruste backt Injektoren fest & kalter Motor verbraucht viel',
                    damageCost: '1.100–2.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '145.000–190.000 km • 9–11 J.',
                    action: 'Glühsteuergerät samt Kerzen & gerissenen Turboschlauch tauschen',
                    cost: '380–620 €',
                    ifIgnored: 'Startprobleme bei Frost & Pfeifen mit plötzlichem Leistungsverlust (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.000–1.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '175.000–225.000 km • 11–13 J.',
                    action: 'Partikelfilter & Abgasrückführung reinigen sowie Getriebeöl wechseln',
                    cost: '520–850 €',
                    ifIgnored: 'Verstopfter Auspuff mit Turboschaden-Risiko & hartes Schalten (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Laufstarke Injektoren prüfen, Wasserpumpe & Motorlager erneuern',
                    cost: '750–1.250 €',
                    ifIgnored: 'Starker Rauch, zäher Warmstart & brummende Vibration im Stand (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.900 €'
                  }
                ]
              },
              ru: {
                headline: 'Чугунный блок и двухрядная цепь спереди— легендарный дизель-миллионник',
                strengths: [
                  'В отличие от более нового OM651 с задней цепью, ГРМ у OM646 EVO почти вечный.',
                  'Нет дорогих капризов ранних пьезофорсунок Delphi.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Проверять медные шайбы под форсунками (следы нагара под крышкой) и рабочий термостат.',
                  'Нормы Euro 4 (в Германии возможны ограничения в центрах городов) и контроль сажевого фильтра.'
                ],
                beforeYouBuy: [
                  'Снимите пластиковую крышку двигателя и проверьте, нет ли чёрного нагара вокруг форсунок и запаха солярки в салоне.',
                  'За 10 минут поездки стрелка температуры должна дойти до ~90 °C— заклинивший термостат не даёт мотору прогреться.',
                  'У этого проверенного дизеля стоит крепкая передняя цепь, поэтому важно проверить лишь лёгкий запуск и тягу турбины.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло Low-Ash строго раз в 10–15 тыс. (не 25 тыс.!), топливный фильтр и выезд на трассу',
                    cost: '€190–310',
                    ifIgnored: 'Разжиженное масло изнашивает цепь и турбину, а пробки рано забивают фильтр сажи',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло АКПП (60–80 тыс. / 5 лет), проверить старые к 6 годам ремень, шланги и шайбы форсунок и термостат',
                    cost: '€380–620',
                    ifIgnored: 'Старая жидкость портит автомат, а пластик и резина к 6 годам теряют герметичность',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить медные шайбы под форсунками и неисправный термостат',
                    cost: '€260–440',
                    ifIgnored: 'Чёрная смола намертво приклеит форсунки, а мотор не будет греться (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–2 000'
                  },
                  {
                    tier: 'orange',
                    km: '145 000–190 000 км • 9–11 лет',
                    action: 'Заменить блок розжига со свечами накала и треснувший патрубок наддува',
                    cost: '€380–620',
                    ifIgnored: 'Мотор не заведётся в мороз, а трещина в шланге урежет тягу (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 000–1 700'
                  },
                  {
                    tier: 'orange',
                    km: '175 000–225 000 км • 11–13 лет',
                    action: 'Почистить сажевый фильтр с клапаном ЕГР и поменять масло в коробке',
                    cost: '€520–850',
                    ifIgnored: 'Перегрузка турбины противодавлением и толчки при переключениях (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить форсунки на стенде, обновить помпу и опоры двигателя',
                    cost: '€750–1 250',
                    ifIgnored: 'Чёрный дым, долгий запуск на горячую и сильная дрожь на холостых (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 800–2 900'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 5-Speed Auto / 6-MT', 'Simple 722.6 Converter Box'],
              de: ['Unverwüstliche 5G-AT / 6-Gang', 'Robuster Wandlerautomat'],
              ru: ['Неубиваемый 5-АКПП / 6-МКПП', 'Простой гидротрансформатор']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 8.6,
            badges: {
              en: ['Supple W204 Suspension', 'Audible Pre-FL Diesel Clatter'],
              de: ['Komfortables W204-Fahrwerk', 'Hörbares OM646-Nageln kalt'],
              ru: ['Комфортная подвеска W204', 'Дизель OM646 шумнее на холодную']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '540 kg Payload'],
              de: ['1.800 kg Anhängelast', '540 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 540 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.5,
            badges: {
              en: ['0–100 km/h: 10.4 s', '215 km/h Top Speed'],
              de: ['0–100 km/h: 10,4 s', '215 km/h Spitze'],
              ru: ['0–100 км/ч: 10,4 с', 'Макс. 215 км/ч']
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
            score: 8.6,
            badges: {
              en: ['Balanced RWD Chassis', 'Agility Control Dampers'],
              de: ['Ausgewogener Heckantrieb', 'Agility-Control-Fahrwerk'],
              ru: ['Сбалансированный задний привод', 'Адаптивные амортизаторы']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['6.1 L/100km', '156 g/km CO2'],
              de: ['6,1 L/100km', '156 g/km CO2'],
              ru: ['6,1 л/100 км', '156 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.5,
            badges: {
              en: ['High €331/yr Euro 4 Tax', 'Euro 4 Urban Zone Bans'],
              de: ['Hohe 331-€-Euro-4-Steuer', 'Umweltzonen-Risiko (Euro 4)'],
              ru: ['Высокий налог €331 • Euro 4', 'Ограничения въезда Euro 4']
            }
          },
          maintenanceRepairCosts: {
            score: 8.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G-Tronic (722.6) ATF + filter & replace diesel fuel filter', de: '5G-Tronic-Öl (722.6) + Filter & Dieselfilter wechseln', ru: 'Замена масла 5G-Tronic + фильтр и топливный фильтр' }, cost: '€250–380' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect injector seats for black tar ("black death") & thermostat', de: 'Injektorsitze auf Verkokung prüfen & Thermostat kontrollieren', ru: 'Проверка посадочных мест форсунок на кокс и проверка термостата' }, cost: '€140–240' }
              ],
              critical: [
                { when: { en: '150,000–240,000 km', de: '150.000–240.000 km', ru: '150 000–240 000 км' }, action: { en: 'Copper injector sealing washers + stretch bolts & 5G-Tronic plug bush', de: 'Injektor-Kupferdichtringe + Dehnschrauben & 722.6-Steckerbuchse', ru: 'Медные шайбы форсунок + болты и разъём АКПП 722.6 (от течи масла)' }, cost: '€320–620', risk: { en: 'Leaking injector seals bake solid black carbon; ATF wicks into TCU', de: 'Undichte Injektoren verkoken massiv; Getriebeöl wandert ins Steuergerät', ru: 'Прогар шайб забивает крышку коксом; масло АКПП идёт по косе в блок' }, damage: '€1,400–2,400' },
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'W204 rear subframe rust check & ELV steering lock', de: 'W204 Hinterachsträger-Rostprüfung & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника и блокиратора руля ELV' }, cost: '€350–1,200', risk: { en: 'Subframe rust or jammed electronic steering lock', de: 'Durchrostung oder Startblockade durch ELV', ru: 'Коррозия подрамника или блокировка зажигания ELV' }, damage: '€1,500–2,500' }
              ]
            },
            badges: {
              en: ['Very Cheap Taxi-Hero Parts', 'Solenoid Injectors Easy To Fix'],
              de: ['Sehr günstige Taxi-Ersatzteile', 'Magnet-Injektoren preiswert'],
              ru: ['Дешёвые такси-запчасти', 'Ремонтопригодные форсунки']
            }
          },
          depreciationResale: {
            score: 8.0,
            badges: {
              en: ['Export & Taxi Hero Demand', 'Euro 4 City Discount'],
              de: ['Gefragter Dauerläufer', 'Euro-4-Preisabschlag'],
              ru: ['Легендарный спрос за ресурс', 'Уценка из-за Euro 4']
            }
          }
        }
      },
      {
        id: 'c200-cdi-om651',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€7,800',
            specOverrides: { sprint0100: '9.1 s', topSpeed: '218 km/h', realWorldFuel: '5.2 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 9.1,
                badges: {
                  en: ['5.2 L/100km (6-MT)'],
                  de: ['5,2 L/100km (6-MT)'],
                  ru: ['5,2 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'om651-diesel',
        dossierGroup: 'diesel-7g',
        isDefault: false,
        fuelType: 'diesel',
        hp: 136,
        shortTitle: 'C 200 CDI (OM651)',
        fullName: '2012 Mercedes-Benz C 200 CDI BlueEfficiency',
        engineBadge: 'C 200 CDI (OM651) • 136 HP',
        engineSubLabel: {
          en: '2.1L Diesel OM651 BE (04/2008–03/2014) • 6-MT / 5-AT / 7G-Plus • 360 Nm',
          de: '2.1L Diesel OM651 BE (04/2008–03/2014) • 6-Gang / 5-AT / 7G-Plus • 360 Nm',
          ru: '2.1 Дизель OM651 BE (04/2008–03/2014) • 6-МКПП / 5-АКПП / 7G-Plus • 360 Н·м'
        },
        rarityLabel: {
          en: 'TORQUE-RICH ECO DIESEL',
          de: 'DURCHZUGSSTARKER SPAR-DIESEL',
          ru: 'ТЯГОВИТЫЙ ЭКО-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€33,141 New',
          de: '33.141 € Neu',
          ru: '€33 141 новый'
        },
        estUsedPrice: '€8,400',
        perkLabel: {
          en: '✦ Huge 360 Nm Upgrade (+90 Nm Over OM646) • 5.5 L/100km • Euro 5',
          de: '✦ Kräftige 360 Nm (+90 Nm vs. OM646) • 5,5 L/100km • Euro 5',
          ru: '✦ Мощные 360 Н·м (+90 Н·м к OM646) • 5,5 л/100 км • Euro 5'
        },
        remarkablePositives: {
          en: [
            'BIG 360 NM MID-RANGE PUNCH',
            'EFFICIENT 5.5 L/100KM',
            'EURO 5 & 7G-TRONIC PLUS OPTION',
            'PROVEN 350K+ KM FLEET BASE'
          ],
          de: [
            'STARKE 360 NM DREHMOMENT-AUSBEUTE',
            'SPARSAM: 5,5 L/100KM',
            'EURO 5 & 7G-TRONIC PLUS OPTIONAL',
            'LANGSTRECKENERPROBTE TAXI-BASIS'
          ],
          ru: [
            'ОЩУТИМЫЕ 360 Н·М ТЯГИ В СЕРЕДИНЕ',
            'РАСХОД ВСЕГО 5,5 Л/100 КМ',
            'EURO 5 И АКПП 7G-TRONIC PLUS',
            'ПРОВЕРЕННЫЙ КОРПОРАТИВНЫЙ РЕСУРС'
          ]
        },
        notableNegatives: {
          en: [
            'WATCH OM651 REAR TIMING CHAIN & WATER PUMP',
            'EARLY 2009–2011 DELPHI INJECTOR RECALL',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'OM651 STEUERKETTE HINTEN & WASSERPUMPE',
            'FRÜHE 2009–11 DELPHI-INJEKTOR-AKTION PRÜFEN',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'ЗАДНЯЯ ЦЕПЬ ГРМ И ПОМПА OM651',
            'ПРОВЕРИТЬ ЗАМЕНУ ФОРСУНОК DELPHI (2009–11)',
            'ОСМОТРЕТЬ ЗАДНИЙ ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.6,
          spacePracticality: 7.5,
          performanceDynamics: 8.0,
          runningCostsTco: 8.0
        },
        specOverrides: {
          engineName: { en: '2.1L I4 OM651 CDI 136', de: '2.1L Reihenvierzylinder OM651', ru: '2.1L R4 OM651 CDI 136' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '530 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '9.1 s', topSpeed: '218 km/h', peakTorque: '360 Nm @ 1,600 rpm',
          passingPunch: { en: 'Strong 360 Nm Mid-Range', de: 'Souveräne 360 Nm Durchzug', ru: 'Уверенная тяга 360 Н·м' },
          realWorldFuel: '5.5 L/100km', tankRange: '66 L (~1,200 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.0,
            badges: {
              en: ['360 Nm OM651 Workhorse', 'Verify Injector Recall & Chain'],
              de: ['360 Nm OM651 Dauerläufer', 'Injektor-Rückruf & Kette prüfen'],
              ru: ['Тяговитый OM651 (360 Н·м)', 'Проверить форсунки и цепь']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM651 DE22 LA · 2,143 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron Diesel · Single Turbo + 360 Nm', de: 'Reihenvierzylinder Grauguss · Mono-Turbo + 360 Nm', ru: 'Рядный 4-цил. чугун · Одна турбина + 360 Н·м' } }], note: { en: 'Huge 90 Nm torque jump over the older OM646 C200 CDI while burning less fuel (1,200 km range); inspect coolant flange and rear timing chain.', de: 'Satte 90 Nm mehr als der alte OM646 bei geringerem Verbrauch (1.200 km Reichweite); Kühlwasserstutzen & hintere Kette prüfen.', ru: 'На 90 Н·м тяговитее старого OM646 при меньшем расходе (1 200 км на баке); следите за фланцем ОЖ и задней цепью.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Huge 360 Nm Upgrade Over Earlier OM646— High-Mileage Champion Once Recall-Updated',
                strengths: [
                  'Despite keeping 136 HP for German insurance classes, torque jumps from 270 to 360 Nm for far stronger real-world flexibility.',
                  'Updated post-2011 OM651 units routinely clock 300,000–450,000 km on European highways.'
                ],
                watchouts: [
                  '2009–2011 cars must have had the Delphi piezo-injector replacement completed; listen for rear-mounted simplex timing chain rattle on cold start.',
                  'Inspect plastic water pump / thermostat neck coolant leaks and oil-cooler housing seals.'
                ],
                beforeYouBuy: [
                  'Listen closely on a cold start near the dashboard firewall— the timing chain is at the rear and rattling means an expensive job.',
                  'Check service invoices to verify early piezo fuel injectors were swapped under the factory recall.',
                  'Inspect around the left engine mount and plastic fuel filter neck for dried coolant leaks.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km low-ash oil (never 25k!), diesel fuel filter & regular highway runs',
                    cost: '€190–310',
                    ifIgnored: 'Diluted 25k oil wears chain/turbos early & city commutes choke soot filter',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G auto oil (60–80k / 5 yrs) & check 6-yr aging rubber belt, hoses & plastic coolant housing & recall injectors',
                    cost: '€380–620',
                    ifIgnored: 'Aged automatic oil shifts hard & 6-yr heat-aged plastic/rubber leaks coolant/boost',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace leaking plastic water pump & plastic coolant housing neck',
                    cost: '€380–620',
                    ifIgnored: 'Stealthy coolant leaks causing sudden overheating warning (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'orange',
                    km: '135,000–180,000 km • 9–11 yrs',
                    action: 'Swap split boost hose, clean soot filter & service gearbox oil',
                    cost: '€480–800',
                    ifIgnored: 'Loss of boost power, warning lights & harsh shifting (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'red',
                    km: '165,000–215,000 km • 11–13 yrs',
                    action: 'Replace stretched rear timing chain & guides (gearbox-out work)',
                    cost: '€1,350–2,100',
                    ifIgnored: 'Snapped timing chain destroying valves and camshafts (components & fluids also degrade over years)',
                    damageCost: '€3,800–5,800'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Service diesel injectors, glow plugs & worn dual-mass flywheel / clutch',
                    cost: '€850–1,400',
                    ifIgnored: 'Rattling vibration at idle & slipping clutch under highway load (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,000–3,100'
                  }
                ]
              },
              de: {
                headline: '90 Nm stärker als der alte OM646— nach Injektor-Update ein erstklassiger Langstreckenläufer',
                strengths: [
                  'Bei identischen 136 PS bietet der OM651 spürbar mehr Durchzug als der frühe OM646.',
                  'Ab Modelljahr 2012 technisch ausgereift für 300.000+ km.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Baujahre 2009–2011 zwingend auf erfolgte Delphi-Injektor-Umrüstung prüfen; auf Rasseln der hinteren Steuerkette achten.',
                  'Kunststoff-Wasserpumpe und Ölfiltergehäuse-Dichtungen auf Dichtheit kontrollieren.'
                ],
                beforeYouBuy: [
                  'Nach Belegen fragen, ob anfällige frühe Piezo-Injektoren per Rückruf gegen die haltbareren Injektoren getauscht wurden.',
                  'Links am Motor und am Kraftstofffilter-Stutzen nach angetrockneten Kühlwasser-Spuren suchen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich alle 10–15 Tkm Low-Ash-Öl (nie 25 Tkm!), Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '190–310 €',
                    ifIgnored: 'Mit Diesel verdünntes 25.000er-Öl verschleißt Kette/Lader; Stadtbetrieb verrußt DPF',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60–80 Tkm / 5 J.) wechseln sowie 6-J.-Keilriemen, Schläuche & Kühlwasserstutzen & Injektoren prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Altes Getriebeöl ruckt & gealterte Kunststoff-/Gummiteile verlieren Wasser oder Druck',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Kunststoff-Wasserpumpe & undichten Kühlwasserstutzen vorsorglich tauschen',
                    cost: '380–620 €',
                    ifIgnored: 'Schleichender Wasserverlust bis zur Überhitzung auf langer Fahrt (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '135.000–180.000 km • 9–11 J.',
                    action: 'Ladedruckschlauch ersetzen, Partikelfilter reinigen & Getriebeöl wechseln',
                    cost: '480–800 €',
                    ifIgnored: 'Notlauf unter Last, Warnleuchten & ruckelnde Gangwechsel (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'red',
                    km: '165.000–215.000 km • 11–13 J.',
                    action: 'Hintere Steuerkette & Spanner tauschen (Ausbau des Getriebes nötig)',
                    cost: '1.350–2.100 €',
                    ifIgnored: 'Reißende Steuerkette mit schwerem Motorschaden im Zylinderkopf (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '3.800–5.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Injektoren prüfen, Glühkerzen erneuern & Zweimassenschwungrad warten',
                    cost: '850–1.400 €',
                    ifIgnored: 'Klappern im Stand & durchrutschende Kupplung bei Überholmanövern (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.000–3.100 €'
                  }
                ]
              },
              ru: {
                headline: 'На 90 Н·м тяговитее прежнего OM646— отличный трассовый дизель после отзывной кампании',
                strengths: [
                  'При тех же 136 л.с. (выгодная страховка в Германии) едет намного увереннее старого OM646.',
                  'Машины 2012–2014 гг. спокойно выхаживают за 350 тыс. км.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'На авто 2009–2011 гг. проверить замену проблемных форсунок Delphi и отсутствие шума задней цепи ГРМ.',
                  'Осматривать пластиковый узел помпы/термостата и прокладки теплообменника.'
                ],
                beforeYouBuy: [
                  'На холодную прислушайтесь в районе щита салона: цепь стоит сзади, и её лязг означает дорогой ремонт.',
                  'Уточните по чекам, заменили ли ранние капризные пьезофорсунки по отзывной кампании на надёжные.',
                  'Осмотрите левую часть мотора и штуцер топливного фильтра на следы подтекающего антифриза.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло Low-Ash строго раз в 10–15 тыс. (не 25 тыс.!), топливный фильтр и выезд на трассу',
                    cost: '€190–310',
                    ifIgnored: 'Разжиженное масло изнашивает цепь и турбину, а пробки рано забивают фильтр сажи',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло АКПП (60–80 тыс. / 5 лет), проверить старые к 6 годам ремень, шланги и пластиковый патрубок и форсунки',
                    cost: '€380–620',
                    ifIgnored: 'Старая жидкость портит автомат, а пластик и резина к 6 годам теряют герметичность',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить текущую пластиковую помпу и штуцер системы охлаждения',
                    cost: '€380–620',
                    ifIgnored: 'Незаметная потеря антифриза и перегрев на трассе (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'orange',
                    km: '135 000–180 000 км • 9–11 лет',
                    action: 'Заменить лопнувший шланг наддува, промыть сажевый фильтр и сменить масло КПП',
                    cost: '€480–800',
                    ifIgnored: 'Падение тяги, аварийный режим и жёсткие переключения (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'red',
                    km: '165 000–215 000 км • 11–13 лет',
                    action: 'Заменить заднюю цепь ГРМ и натяжитель (со снятием коробки передач)',
                    cost: '€1 350–2 100',
                    ifIgnored: 'Обрыв цепи с тяжёлым разрушением головки блока (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 800–5 800'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Проверить форсунки, свечи накала и заменить двухмассовый маховик/сцепление',
                    cost: '€850–1 400',
                    ifIgnored: 'Стук на холостых и пробуксовка при обгоне (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 000–3 100'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.0,
            badges: {
              en: ['1,800 kg Braked Tow', '530 kg Payload'],
              de: ['1.800 kg Anhängelast', '530 kg Zuladung'],
              ru: ['Прицеп до 1 800 кг', 'Грузоподъёмность 530 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.5,
            badges: {
              en: ['0–100 km/h: 9.1 s', '218 km/h Top Speed'],
              de: ['0–100 km/h: 9,1 s', '218 km/h Spitze'],
              ru: ['0–100 км/ч: 9,1 с', 'Макс. 218 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.4,
            badges: {
              en: ['360 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['360 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['360 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.9,
            badges: {
              en: ['Balanced RWD Chassis', 'Composed Autobahn Turn-In'],
              de: ['Ausgewogener Heckantrieb', 'Direktes Einlenkverhalten'],
              ru: ['Сбалансированный задний привод', 'Чёткая реакция на руль']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 8.9,
            badges: {
              en: ['Efficient (5.5 L/100km)', '127 g/km CO2'],
              de: ['Sparsam (5,5 L/100km)', '127 g/km CO2'],
              ru: ['Экономичный (5,5 л/100 км)', '127 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.2,
            badges: {
              en: ['2.1L Euro 5 Diesel Tax', '136 HP Insurance Sweet Spot'],
              de: ['2.1-Euro-5-Dieselsteuer', 'Günstige 136-PS-Versicherung'],
              ru: ['Налог 2,1 Euro 5', 'Выгодная страховка за 136 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 7.1,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic Plus / 5G-Tronic ATF + filter & diesel fuel filter', de: '7G/5G-Tronic-Öl + Filter & Dieselfilter wechseln', ru: 'Замена масла АКПП 7G/5G-Tronic + фильтр и топливный фильтр' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect plastic coolant outlet flange, water pump & EGR cooler', de: 'Kühlmittel-Kunststoffflansch, Wasserpumpe & AGR-Kühler prüfen', ru: 'Проверка пластикового фланца ОЖ, помпы и охладителя EGR' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '130,000–200,000 km', de: '130.000–200.000 km', ru: '130 000–200 000 км' }, action: { en: 'OM651 rear simplex timing chain + updated hydraulic tensioner', de: 'OM651 hinten liegende Simplex-Steuerkette + verbesserter Spanner', ru: 'Задняя однорядная цепь ГРМ OM651 и обновлённый натяжитель' }, cost: '€1,100–1,800', risk: { en: 'Cold-start chain rattle progresses to skipped teeth and bent valves', de: 'Kaltstart-Rasseln führt zu Überspringen und kapitalem Motorschaden', ru: 'Грохот цепи при пуске ведёт к перескоку и разрушению ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'Plastic fuel-filter coolant flange leak & rear subframe rust check', de: 'Undichter Kühlwasserstutzen am Kraftstofffilter & Hinterachsträger-Check', ru: 'Течь пластикового фланца ОЖ у топливного фильтра и осмотр подрамника' }, cost: '€320–750', risk: { en: 'Sudden coolant loss on highway or structural subframe rust', de: 'Plötzlicher Kühlwasserverlust auf der Autobahn oder Achsträger-Rost', ru: 'Резкая потеря антифриза на трассе или коррозия подрамника' }, damage: '€1,600–2,800' }
              ]
            },
            badges: {
              en: ['Huge OM651 Parts Supply', 'Budget Water Pump & 7G ATF'],
              de: ['Riesige OM651-Teileauswahl', 'Wasserpumpe & 7G-ATF einplanen'],
              ru: ['Изобилие деталей OM651', 'Контроль помпы и масла 7G-Tronic']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['High German Used Demand', 'Facelift Holds Value Well'],
              de: ['Hohe Nachfrage in Deutschland', 'Mopf sehr wertstabil'],
              ru: ['Высокий спрос на рынке б/у', 'Рестайл держит цену']
            }
          }
        }
      },
      {
        id: 'c220-cdi-om646',
        defaultGearboxId: '5g-tronic',
        gearboxes: [
          { id: '5g-tronic', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€7,100',
            specOverrides: { sprint0100: '8.5 s', topSpeed: '229 km/h', realWorldFuel: '5.9 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 8.6,
                badges: {
                  en: ['5.9 L/100km (6-MT)'],
                  de: ['5,9 L/100km (6-MT)'],
                  ru: ['5,9 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'om646-diesel',
        dossierGroup: 'diesel-conv-auto',
        isDefault: false,
        fuelType: 'diesel',
        hp: 170,
        shortTitle: 'C 220 CDI (OM646)',
        fullName: '2008 Mercedes-Benz C 220 CDI (OM646)',
        engineBadge: 'C 220 CDI (OM646) • 170 HP',
        engineSubLabel: {
          en: '2.1L Diesel OM646 EVO (03/2007–06/2009) • 6-MT / 5-AT • 400 Nm',
          de: '2.1L Diesel OM646 EVO (03/2007–06/2009) • 6-Gang / 5-AT • 400 Nm',
          ru: '2.1 Дизель OM646 EVO (03/2007–06/2009) • 6-МКПП / 5-АКПП • 400 Н·м'
        },
        rarityLabel: {
          en: 'INDESTRUCTIBLE WORKHORSE',
          de: 'UNVERWÜSTLICHER KLASSIKER',
          ru: 'ВЕЧНЫЙ ДИЗЕЛЬ-РАБОТЯГА'
        },
        originalMsrp: {
          en: '€34,391 New',
          de: '34.391 € Neu',
          ru: '€34 391 новый'
        },
        estUsedPrice: '€7,600',
        perkLabel: {
          en: '✦ 170 HP / 400 Nm + Duplex-Chain OM646 • Bulletproof 5-Speed Auto',
          de: '✦ 170 PS / 400 Nm + Duplex-Ketten-OM646 • Robuste 5G-Tronic Automatik',
          ru: '✦ 170 л.с. / 400 Н·м + Двухрядная цепь OM646 • Вечный автомат 5G-Tronic'
        },
        remarkablePositives: {
          en: [
            '170 HP & 400 NM AUTOBAHN PUNCH',
            'LEGENDARY DUPLEX-CHAIN OM646 BLOCK',
            'INDESTRUCTIBLE 5-SPEED AUTOMATIC',
            '6.3 L/100KM',
            'NO PIEZO INJECTOR RECALL ISSUES'
          ],
          de: [
            '170 PS & 400 NM AUTOBAHN-DURCHZUG',
            'UNZERSTÖRBARER DUPLEX-KETTEN-OM646',
            'ROBUSTE 5G-TRONIC WANDLERAUTOMATIK',
            '6,3 L/100KM VERBRAUCH',
            'OHNE PIEZO-INJEKTOR-PROBLEME'
          ],
          ru: [
            '170 Л.С. И 400 Н·М ДЛЯ ТРАССЫ',
            'ЛЕГЕНДАРНЫЙ OM646 С ДВОЙНОЙ ЦЕПЬЮ',
            'НЕУБИВАЕМАЯ АКПП 5G-TRONIC',
            'РАСХОД 6,3 Л/100 КМ',
            'БЕЗ КАПРИЗНЫХ ПЬЕЗОФОРСУНОК'
          ]
        },
        notableNegatives: {
          en: [
            'EURO 4 EMISSIONS CITY LIMIT',
            'LOUDER ENGINE NOISE THAN FACELIFT MODEL',
            'CHECK INJECTOR SEALS & REAR SUBFRAME'
          ],
          de: [
            'NUR EURO 4 (STADT-FAHRVERBOTSRISIKO)',
            'KERNIGERER KLANG ALS FACELIFT-OM651',
            'INJEKTORDICHTUNGEN & HINTERACHSE PRÜFEN'
          ],
          ru: [
            'НОРМЫ EURO 4 (ОГРАНИЧЕНИЯ В ЕВРОПЕ)',
            'БОЛЕЕ ШУМНЫЙ МОТОР ПО СРАВНЕНИЮ С РЕСТАЙЛИНГОМ',
            'ПРОВЕРЯТЬ ШАЙБЫ ФОРСУНОК И ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.5,
          comfortCabin: 8.5,
          spacePracticality: 7.6,
          performanceDynamics: 8.2,
          runningCostsTco: 7.6
        },
        specOverrides: {
          engineName: { en: '2.1L I4 OM646 170 (Duplex)', de: '2.1L Reihenvierzylinder OM646', ru: '2.1L R4 OM646 170 (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@auto5',
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '8.5 s', topSpeed: '229 km/h', peakTorque: '400 Nm @ 2,000 rpm',
          passingPunch: { en: 'Effortless 400 Nm Cruiser', de: 'Souveräne 400 Nm Zugkraft', ru: 'Уверенная тяга 400 Н·м' },
          realWorldFuel: '6.3 L/100km', tankRange: '66 L (~1,045 km)', euroNorm: 'Euro 4 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierLowMod'
        },
        subStats: {
          powertrainDurability: {
            score: 9.5,
            badges: {
              en: ['Duplex-Chain OM646 (400 Nm)', '500k+ km Proven Endurance'],
              de: ['Duplex-Ketten-OM646 (400 Nm)', '500.000+ km Taxi-Bewährt'],
              ru: ['Двухрядный OM646 (400 Н·м)', 'Ресурс 500 000+ км']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM646 EVO (170 HP) · 2,148 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron · Front Duplex Chain + 400 Nm', de: 'Reihenvierzylinder Grauguss · Duplexkette + 400 Nm', ru: 'Рядный 4-цил. чугун · Двухрядная цепь + 400 Н·м' } }], note: { en: 'Arguably the highest-mileage reliability champion in the entire W204 lineup: 400 Nm punch, duplex timing chain, and bulletproof 5G-Tronic.', de: 'Wohl der langlebigste Dauerläufer der gesamten W204-Baureihe: 400 Nm, Duplex-Steuerkette und unverwüstliche 5G-Tronic.', ru: 'Главный чемпион ресурса среди всех W204: 400 Н·м, двухрядная цепь ГРМ и неубиваемая 5G-Tronic.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'The Cult Favorite Pre-Facelift Diesel— 400 Nm Grunt with Duplex Chain & Iron Block',
                strengths: [
                  'Duplex Timing Chain & Simple Architecture: Avoids the rear-mounted timing chain access issues and early piezo injectors of the OM651.',
                  'Effortless 400 Nm Pull: Hits 0–100 km/h in 8.5s and 229 km/h with effortless passing stability.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Inspect under the engine cover for leaking copper injector seals ("black death" carbon deposits) and sticking thermostats.',
                  'Euro 4 emissions restrict access to some German city low-emission zones; verify DPF health and rear axle subframe.'
                ],
                beforeYouBuy: [
                  'Remove the plastic engine cover to look for sticky black tar around the fuel injectors or smell for diesel fumes inside the car.',
                  'Check during the test drive that the temperature gauge reaches ~90°C within 10 minutes— a stuck thermostat hurts fuel economy and soot filter cleaning.',
                  'Inspect the rubber boost pipe on the right side for oil mist and test strong 170 hp pull with zero limp-mode cutouts.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km low-ash oil (never 25k!), diesel fuel filter & regular highway runs',
                    cost: '€190–310',
                    ifIgnored: 'Diluted 25k oil wears chain/turbos early & city commutes choke soot filter',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G auto oil (60–80k / 5 yrs) & check 6-yr aging rubber belt, hoses & copper injector seals & rubber boost hose',
                    cost: '€380–620',
                    ifIgnored: 'Aged automatic oil shifts hard & 6-yr heat-aged plastic/rubber leaks coolant/boost',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace leaking copper injector seals & stuck thermostat',
                    cost: '€280–460',
                    ifIgnored: 'Baked tar glues injectors shut & soot filter stops cleaning itself (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,200–2,200'
                  },
                  {
                    tier: 'orange',
                    km: '145,000–190,000 km • 9–11 yrs',
                    action: 'Replace split intercooler boost pipe, glow relay & intake flap link',
                    cost: '€450–760',
                    ifIgnored: 'Power drops suddenly on highway & black smoke from excess fuel (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–225,000 km • 11–13 yrs',
                    action: 'Deep-clean soot filter + exhaust valve & change automatic/manual oil',
                    cost: '€520–850',
                    ifIgnored: 'Blocked exhaust chokes turbo & wears out transmission (components & fluids also degrade over years)',
                    damageCost: '€1,700–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Service worn injectors, water pump & automatic conductor plate / flywheel',
                    cost: '€850–1,400',
                    ifIgnored: 'Rough idle knock, smoky acceleration & stranded gearbox (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,100–3,300'
                  }
                ]
              },
              de: {
                headline: 'Der Geheimtipp unter Kennern— 400 Nm Zugkraft kombiniert mit legendärer OM646-Haltbarkeit',
                strengths: [
                  'Mechanisch noch robuster als der Nachfolger OM651 und frei von Piezo-Injektor-Pannen.',
                  'Beschleunigt in 8,5 Sekunden auf 100 km/h bei nur ~6,3 L/100km.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Undichte Injektor-Kupferdichtungen ("Verkokung") und hängende Kühlmittel-Thermostate.',
                  'Euro-4-Abgasnorm sowie Zustand von DPF und Hinterachsträger vor dem Kauf prüfen.'
                ],
                beforeYouBuy: [
                  'Plastikabdeckung abheben und rund um die Injektoren nach schwarzem Teer („Verkokung“) oder Dieselgeruch im Innenraum schauen.',
                  'Auf der Probefahrt prüfen, ob die Temperaturanzeige binnen 10 Minuten ~90 °C erreicht– sonst funktioniert auch die Filter-Reinigung nicht.',
                  'Rechten Gummischlauch der Ladeluft auf Ölnebel prüfen und satten 170-PS-Durchzug ohne Notlauf testen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich alle 10–15 Tkm Low-Ash-Öl (nie 25 Tkm!), Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '190–310 €',
                    ifIgnored: 'Mit Diesel verdünntes 25.000er-Öl verschleißt Kette/Lader; Stadtbetrieb verrußt DPF',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60–80 Tkm / 5 J.) wechseln sowie 6-J.-Keilriemen, Schläuche & Injektor-Dichtringe & Turboschlauch prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Altes Getriebeöl ruckt & gealterte Kunststoff-/Gummiteile verlieren Wasser oder Druck',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Undichte Injektor-Kupferdichtungen & hängendes Thermostat erneuern',
                    cost: '280–460 €',
                    ifIgnored: 'Eingebackene Injektoren & verstopfter Filter durch kalten Motor (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.200–2.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '145.000–190.000 km • 9–11 J.',
                    action: 'Gerissenen Ladeluftschlauch, Glührelais & Drallklappengestänge ersetzen',
                    cost: '450–760 €',
                    ifIgnored: 'Plötzlicher Leistungsabfall beim Überholen & starker Rußausstoß (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–225.000 km • 11–13 J.',
                    action: 'Partikelfilter samt Abgasventil reinigen & Getriebeöl wechseln',
                    cost: '520–850 €',
                    ifIgnored: 'Hoher Abgasgegendruck schädigt Turbo und Getriebe (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.700–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Injektoren überholen, Wasserpumpe & Schwungrad / Getriebeplatte prüfen',
                    cost: '850–1.400 €',
                    ifIgnored: 'Nageln im Leerlauf, Rauch unter Last & Getriebestörung (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.100–3.300 €'
                  }
                ]
              },
              ru: {
                headline: 'Выбор знатоков дорестайлинга— 400 Н·м тяги и неубиваемая механика OM646',
                strengths: [
                  'Проще и долговечнее более позднего OM651 в плане привода ГРМ и форсунок.',
                  '8,5 с до 100 км/ч и 229 км/ч при расходе около 6,3 л/100 км.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'Осматривать колодцы форсунок на прорыв газов (медные шайбы) и проверять термостат.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Снимите крышку двигателя и проверьте отсутствие чёрной смолы вокруг форсунок и запаха солярки в салоне.',
                  'За 10 минут езды мотор должен выйти на ~90 °C— иначе при неисправном термостате не очищается сажевый фильтр.',
                  'Осмотрите правый патрубок наддува на предмет масляного налёта и проверьте уверенную тягу 170 л.с. без провалов.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло Low-Ash строго раз в 10–15 тыс. (не 25 тыс.!), топливный фильтр и выезд на трассу',
                    cost: '€190–310',
                    ifIgnored: 'Разжиженное масло изнашивает цепь и турбину, а пробки рано забивают фильтр сажи',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло АКПП (60–80 тыс. / 5 лет), проверить старые к 6 годам ремень, шланги и шайбы форсунок и патрубок',
                    cost: '€380–620',
                    ifIgnored: 'Старая жидкость портит автомат, а пластик и резина к 6 годам теряют герметичность',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить медные кольца под форсунками и термостат охлаждения',
                    cost: '€280–460',
                    ifIgnored: 'Нагар намертво заклинит форсунки, а недогрев забьёт фильтр (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 200–2 200'
                  },
                  {
                    tier: 'orange',
                    km: '145 000–190 000 км • 9–11 лет',
                    action: 'Заменить лопнувший патрубок наддува, блок свечей и тяги вихревых заслонок',
                    cost: '€450–760',
                    ifIgnored: 'Резкая потеря тяги при обгоне и сильная дымность (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–225 000 км • 11–13 лет',
                    action: 'Промыть сажевый фильтр с клапаном ЕГР и поменять масло в коробке',
                    cost: '€520–850',
                    ifIgnored: 'Перегрев и поломка турбины из-за забитого выхлопа (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 700–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Обслужить форсунки, помпу и маховик с платой автомата',
                    cost: '€850–1 400',
                    ifIgnored: 'Жёсткий стук на холостых, дым под нагрузкой и отказ коробки (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 100–3 300'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Bulletproof 5-Speed Auto / 6-MT', 'Simple 722.6 Converter Box'],
              de: ['Unverwüstliche 5G-AT / 6-Gang', 'Robuster Wandlerautomat'],
              ru: ['Неубиваемый 5-АКПП / 6-МКПП', 'Простой гидротрансформатор']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.7,
            badges: {
              en: ['Solid CAN-Bus & Alternator', 'Watch Steering Lock (ELV)'],
              de: ['Stabiles CAN-Bordnetz', 'Lenkradschloss (ELV) bekannt'],
              ru: ['Надёжная шина CAN', 'Риск блокиратора руля (ELV)']
            }
          },
          rideNoiseComfort: {
            score: 8.6,
            badges: {
              en: ['Supple W204 Suspension', 'Slightly Louder Pre-FL Diesel'],
              de: ['Komfortables W204-Fahrwerk', 'Etwas rauer als OM651/V6'],
              ru: ['Комфортная подвеска W204', 'Дизель заметнее при разгоне']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.2,
            badges: {
              en: ['1,800 kg Braked Tow', 'Strong 400 Nm Towing Torque'],
              de: ['1.800 kg Anhängelast', 'Starke 400 Nm Zugkraft'],
              ru: ['Прицеп до 1 800 кг', 'Мощная тяга 400 Н·м']
            }
          },
          accelerationOvertaking: {
            score: 7.1,
            badges: {
              en: ['0–100 km/h: 8.5 s', '229 km/h Top Speed'],
              de: ['0–100 km/h: 8,5 s', '229 km/h Spitze'],
              ru: ['0–100 км/ч: 8,5 с', 'Макс. 229 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.9,
            badges: {
              en: ['400 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['400 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['400 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Balanced RWD Chassis', 'Agility Control Dampers'],
              de: ['Agiler Heckantrieb', 'Agility-Control-Fahrwerk'],
              ru: ['Сбалансированный RWD', 'Адаптивные амортизаторы']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['6.3 L/100km', '159 g/km CO2'],
              de: ['6,3 L/100km', '159 g/km CO2'],
              ru: ['6,3 л/100 км', '159 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.2,
            badges: {
              en: ['High €331/yr Euro 4 Tax', 'Euro 4 Bans • Mid Insurance'],
              de: ['Hohe 331-€-Euro-4-Steuer', 'Umweltzonen-Risiko (Euro 4)'],
              ru: ['Высокий налог €331 • Euro 4', 'Ограничения въезда Euro 4']
            }
          },
          maintenanceRepairCosts: {
            score: 8.0,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 5G-Tronic (722.6) ATF + filter & replace diesel fuel filter', de: '5G-Tronic-Öl (722.6) + Filter & Dieselfilter wechseln', ru: 'Замена масла 5G-Tronic + фильтр и топливный фильтр' }, cost: '€250–380' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect injector seats for black tar ("black death") & thermostat', de: 'Injektorsitze auf Verkokung prüfen & Thermostat kontrollieren', ru: 'Проверка посадочных мест форсунок на кокс и проверка термостата' }, cost: '€140–240' }
              ],
              critical: [
                { when: { en: '150,000–240,000 km', de: '150.000–240.000 km', ru: '150 000–240 000 км' }, action: { en: 'Copper injector sealing washers + stretch bolts & 5G-Tronic plug bush', de: 'Injektor-Kupferdichtringe + Dehnschrauben & 722.6-Steckerbuchse', ru: 'Медные шайбы форсунок + болты и разъём АКПП 722.6 (от течи масла)' }, cost: '€320–620', risk: { en: 'Leaking injector seals bake solid black carbon; ATF wicks into TCU', de: 'Undichte Injektoren verkoken massiv; Getriebeöl wandert ins Steuergerät', ru: 'Прогар шайб забивает крышку коксом; масло АКПП идёт по косе в блок' }, damage: '€1,400–2,400' },
                { when: { en: '140,000–220,000 km', de: '140.000–220.000 km', ru: '140 000–220 000 км' }, action: { en: 'W204 rear subframe rust check & ELV steering lock', de: 'W204 Hinterachsträger-Rostprüfung & ELV-Lenkradschloss', ru: 'Проверка заднего подрамника и блокиратора руля ELV' }, cost: '€350–1,200', risk: { en: 'Subframe rust or jammed electronic steering lock', de: 'Durchrostung oder Startblockade durch ELV', ru: 'Коррозия подрамника или блокировка зажигания ELV' }, damage: '€1,500–2,500' }
              ]
            },
            badges: {
              en: ['Very Cheap Taxi-Hero Parts', 'Duplex Chain Rarely Needs Work'],
              de: ['Sehr günstige Taxi-Ersatzteile', 'Duplex-Steuerkette langlebig'],
              ru: ['Дешёвые такси-запчасти', 'Вечная двухрядная цепь']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Cult Reliability Demand', 'Bottomed-Out Price Floor'],
              de: ['Sehr gefragter Dauerläufer', 'Kaum noch Wertverlust'],
              ru: ['Высокий спрос за надёжность', 'Минимальное падение цены']
            }
          }
        }
      },
      {
        id: 'c220-cdi-om651',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [
          { id: '7g-tronic-plus', isDefault: true },
          {
            id: '6-mt',
            estUsedPrice: '€9,100',
            specOverrides: { sprint0100: '8.1 s', topSpeed: '232 km/h', realWorldFuel: '5.3 L/100km' },
            subStatDeltas: {
              efficiencyFuel: {
                score: 9.1,
                badges: {
                  en: ['5.3 L/100km (6-MT)'],
                  de: ['5,3 L/100km (6-MT)'],
                  ru: ['5,3 L/100km (6-MT)']
                }
              }
            }
          }
        ],
        buyerFitGroup: 'om651-diesel',
        dossierGroup: 'diesel-7g',
        isDefault: true,
        fuelType: 'diesel',
        hp: 170,
        shortTitle: 'C 220 CDI (OM651)',
        fullName: '2012 Mercedes-Benz C 220 CDI',
        engineBadge: 'C 220 CDI • 170 HP',
        engineSubLabel: {
          en: '2.1L Bi-Turbo OM651 (06/2009–06/2015) • 6-MT / 5-AT / 7G-Plus / Opt. 4Matic • 400 Nm',
          de: '2.1L Bi-Turbo OM651 (06/2009–06/2015) • 6-Gang / 5-AT / 7G-Plus / Opt. 4Matic • 400 Nm',
          ru: '2.1 Би-турбо OM651 (06/2009–06/2015) • 6-МКПП / 5-АКПП / 7G-Plus / Опц. 4Matic • 400 Н·м'
        },
        rarityLabel: {
          en: 'GERMAN AUTOBAHN BENCHMARK',
          de: 'DER DEUTSCHE REISE-KLASSIKER',
          ru: 'ЭТАЛОН НЕМЕЦКОГО АВТОБАНА'
        },
        originalMsrp: {
          en: '€36,295 New',
          de: '36.295 € Neu',
          ru: '€36 295 новый'
        },
        estUsedPrice: '€9,800',
        perkLabel: {
          en: '✦ #1 Bestselling W204 • 400 Nm Bi-Turbo • 5.6 L/100km & 7G-Tronic Plus',
          de: '✦ Bestseller Nr. 1 • 400 Nm Bi-Turbo • 5,6 L/100km & 7G-Tronic Plus',
          ru: '✦ Бестселлер W204 • 400 Н·м Би-турбо • 5,6 л/100 км и 7G-Tronic Plus'
        },
        remarkablePositives: {
          en: [
            '400 NM BI-TURBO SMOOTH PULL (8.1S)',
            '5.6 L/100KM HIGHWAY',
            '7G-TRONIC PLUS + OPTIONAL 4MATIC',
            '1,800 KG BRAKED TOWING CAPACITY',
            'HIGHEST PARTS & MECHANIC SUPPORT'
          ],
          de: [
            '400 NM BI-TURBO-DURCHZUG (8,1S)',
            '5,6 L/100KM AUTOBAHN',
            '7G-TRONIC PLUS + OPTIONAL 4MATIC',
            '1.800 KG STARKE ANHÄNGELAST',
            'BESTE TEILE- & WERKSTATTVERSORGUNG'
          ],
          ru: [
            '400 Н·М БИ-ТУРБО (8,1 С ДО 100)',
            'РАСХОД 5,6 Л/100 КМ НА ТРАССЕ',
            '7G-TRONIC PLUS И ОПЦИЯ 4MATIC',
            'БУКСИРОВКА ПРИЦЕПА ДО 1 800 КГ',
            'МАКСИМУМ ЗАПЧАСТЕЙ И ОПЫТА СЕРВИСА'
          ]
        },
        notableNegatives: {
          en: [
            'WATCH OM651 REAR TIMING CHAIN & WATER PUMP',
            'EARLY 2009–2011 DELPHI INJECTOR RECALL',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            'OM651 STEUERKETTE HINTEN & WASSERPUMPE',
            'FRÜHE 2009–11 DELPHI-INJEKTOR-AKTION PRÜFEN',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'ЗАДНЯЯ ЦЕПЬ ГРМ И ПОМПА OM651',
            'НА 2009–11 ПРОВЕРИТЬ ЗАМЕНУ ФОРСУНОК',
            'ОСМОТРЕТЬ ЗАДНИЙ ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.2,
          comfortCabin: 8.6,
          spacePracticality: 7.6,
          performanceDynamics: 8.4,
          runningCostsTco: 7.9
        },
        specOverrides: {
          engineName: { en: '2.1L I4 OM651 170 (Bi-Turbo)', de: '2.1L Reihenvierzylinder OM651', ru: '2.1L R4 OM651 170 (Би-турбо)' },
          forcedInduction: '@twinTurbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '530 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '8.1 s', topSpeed: '232 km/h', peakTorque: '400 Nm @ 1,400 rpm',
          passingPunch: { en: 'Instant 400 Nm Twin-Turbo', de: 'Sofortige 400 Nm (Bi-Turbo)', ru: 'Мгновенные 400 Н·м (Би-турбо)' },
          realWorldFuel: '5.6 L/100km', tankRange: '66 L (~1,180 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierMod', serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8.3,
            badges: {
              en: ['400 Nm Sequential Bi-Turbo', 'Verify Recall Injectors & Chain'],
              de: ['400 Nm Register-Bi-Turbo', 'Injektor-Update & Kette prüfen'],
              ru: ['Би-турбо OM651 (400 Н·м)', 'Обновл. форсунки и цепь ГРМ']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM651 DE22 LA (170 HP) · 2,143 cc' }, { k: 'architecture', v: { en: 'Inline-4 Cast-Iron · Sequential Twin-Turbo + Rear Chain', de: 'Reihenvierzylinder Grauguss · Stufenaufladung + Heckkette', ru: 'Рядный 4-цил. чугун · Последовательный би-турбо + задняя цепь' } }], note: { en: 'The #1 European bestseller W204: 400 Nm from just 1,400 rpm, 1,180 km range, and slick 7G-Tronic Plus; watch rear chain tensioner & coolant flange.', de: 'Der meistgekaufte W204: 400 Nm schon ab 1.400/min, 1.180 km Reichweite und 7G-Tronic Plus; hintere Kette & Kühlwasserflansch prüfen.', ru: 'Хит продаж W204: 400 Н·м с 1 400 об/мин, 1 180 км на баке и 7G-Tronic Plus; контролируйте цепь и фланец ОЖ.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'The Iconic W204 C 220 CDI— Sequential Bi-Turbo Torque Built for 400,000+ km Autobahn Life',
                strengths: [
                  'A small high-pressure turbo eliminates lag at 1,400 rpm while the large turbo delivers 400 Nm effortlessly on the Autobahn.',
                  'Every independent Mercedes specialist knows the OM651 inside-out with plentiful OEM and aftermarket parts.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Confirm 2009–2011 cars received the Mercedes recall replacement of Delphi piezo injectors; listen for cold-start chain rattle from the rear-mounted timing chain.',
                  'Inspect the plastic coolant outlet / water pump housing and oil-filter cooler seals for slow seepage.'
                ],
                beforeYouBuy: [
                  'Confirm with paperwork that early piezo fuel injectors (on 2009–2011 models) were replaced under the Mercedes recall.',
                  'Test brisk highway acceleration— a split twin-turbo boost hose or plastic intake leak will trigger instant limp mode.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km low-ash oil (never 25k!), diesel fuel filter & regular highway runs',
                    cost: '€190–310',
                    ifIgnored: 'Diluted 25k oil wears chain/turbos early & city commutes choke soot filter',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G auto oil (60–80k / 5 yrs) & check 6-yr aging rubber belt, hoses & twin-turbo hoses & plastic water pump',
                    cost: '€380–620',
                    ifIgnored: 'Aged automatic oil shifts hard & 6-yr heat-aged plastic/rubber leaks coolant/boost',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace leaking plastic water pump & plastic fuel filter coolant neck',
                    cost: '€380–620',
                    ifIgnored: 'Coolant loss cracks engine head if driven low on fluid (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,600'
                  },
                  {
                    tier: 'orange',
                    km: '135,000–180,000 km • 9–11 yrs',
                    action: 'Replace split twin-turbo boost hoses & clean soot filter / EGR valve',
                    cost: '€480–820',
                    ifIgnored: 'Sudden limp mode when overtaking & choked exhaust (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,500'
                  },
                  {
                    tier: 'red',
                    km: '160,000–210,000 km • 11–13 yrs',
                    action: 'Replace rear timing chain & tensioner (requires gearbox removal)',
                    cost: '€1,400–2,150',
                    ifIgnored: 'Snapped single-row rear chain destroys internal engine parts (components & fluids also degrade over years)',
                    damageCost: '€4,000–6,000'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Service injectors, twin-turbo vacuum valves & 7-speed oil / flywheel',
                    cost: '€900–1,450',
                    ifIgnored: 'Smoky starts, sluggish twin-turbo handoff & transmission wear (components & fluids also degrade over years)',
                    damageCost: '€2,200–3,400'
                  }
                ]
              },
              de: {
                headline: 'Der meistgekaufte W204 Deutschlands— 400 Nm Register-Bi-Turbo für höchste Laufleistungen',
                strengths: [
                  'Kleiner Lader für spontanen Antritt ab 1.400 U/min, großer Lader für souveränes Autobahntempo mit 400 Nm.',
                  'Jede freie Werkstatt kennt den OM651 perfekt— günstige Versorgung für 400.000+ km.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Bei Baujahren 2009–2011 prüfen, ob der Rückruf der Delphi-Injektoren durchgeführt wurde; hintere Steuerkette beim Kaltstart abhören.',
                  'Kunststoff-Wasserpumpe, Kühlmittelstutzen am Kraftstofffilter und Ölfiltergehäuse-Dichtung.'
                ],
                beforeYouBuy: [
                  'Bei 2009–2011er Modellen per Rechnung prüfen, ob frühe Piezo-Injektoren im Werk-Rückruf ersetzt wurden.',
                  'Zügig auf Landstraße/Autobahn durchbeschleunigen– gerissene Biturbo-Schläuche lösen sofort den Notlauf aus.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich alle 10–15 Tkm Low-Ash-Öl (nie 25 Tkm!), Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '190–310 €',
                    ifIgnored: 'Mit Diesel verdünntes 25.000er-Öl verschleißt Kette/Lader; Stadtbetrieb verrußt DPF',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60–80 Tkm / 5 J.) wechseln sowie 6-J.-Keilriemen, Schläuche & Biturbo-Schläuche & Wasserpumpe prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Altes Getriebeöl ruckt & gealterte Kunststoff-/Gummiteile verlieren Wasser oder Druck',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Kunststoff-Wasserpumpe & Kühlwasserstutzen am Kraftstofffilter erneuern',
                    cost: '380–620 €',
                    ifIgnored: 'Unbemerkter Wasserverlust bis zur Überhitzung auf der Autobahn (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.600 €'
                  },
                  {
                    tier: 'orange',
                    km: '135.000–180.000 km • 9–11 J.',
                    action: 'Biturbo-Ladeluftschläuche tauschen & Partikelfilter samt Abgasventil reinigen',
                    cost: '480–820 €',
                    ifIgnored: 'Plötzlicher Leistungsverlust beim Überholen & verstopfter Auspuff (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.500 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–210.000 km • 11–13 J.',
                    action: 'Hintere Steuerkette & Spanner ersetzen (Getriebeausbau erforderlich)',
                    cost: '1.400–2.150 €',
                    ifIgnored: 'Reißende Einreihkette führt zum Totalschaden am Zylinderkopf (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '4.000–6.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Injektoren prüfen, Turbo-Unterdruckventile & Getriebeöl/Schwungrad warten',
                    cost: '900–1.450 €',
                    ifIgnored: 'Ruckelnder Biturbo-Übergang, Qualm & Getriebeverschleiß (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.200–3.400 €'
                  }
                ]
              },
              ru: {
                headline: 'Главный бестселлер W204— двухступенчатый би-турбо 400 Н·м с огромным пробеговым потенциалом',
                strengths: [
                  'Малая даёт мгновенный подхват с 1 400 об/мин, а большая уверенно тянет на автобане (400 Н·м).',
                  'Мотор OM651 отлично изучен всеми сервисами и обеспечен запчастями.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'На машинах 2009–2011 гг. убедитесь в замене пьезофорсунок Delphi по отзыву и отсутствии звона задней цепи на холодную.',
                  'Проверяйте пластиковую помпу, патрубок у топливного фильтра и уплотнения теплообменника.'
                ],
                beforeYouBuy: [
                  'На машинах 2009–2011 годов проверьте отметку о замене проблемных пьезофорсунок по отзыву.',
                  'Ускорьтесь по трассе: треснувший патрубок битурбо или трещина впуска сразу вызывают аварийный режим.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло Low-Ash строго раз в 10–15 тыс. (не 25 тыс.!), топливный фильтр и выезд на трассу',
                    cost: '€190–310',
                    ifIgnored: 'Разжиженное масло изнашивает цепь и турбину, а пробки рано забивают фильтр сажи',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло АКПП (60–80 тыс. / 5 лет), проверить старые к 6 годам ремень, шланги и шланги битурбо и помпу',
                    cost: '€380–620',
                    ifIgnored: 'Старая жидкость портит автомат, а пластик и резина к 6 годам теряют герметичность',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить текущую пластиковую помпу и штуцер охлаждения у фильтра',
                    cost: '€380–620',
                    ifIgnored: 'Скрытая утечка антифриза приведёт к перегреву головки блока (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 600'
                  },
                  {
                    tier: 'orange',
                    km: '135 000–180 000 км • 9–11 лет',
                    action: 'Заменить шланги битурбо-наддува, промыть сажевый фильтр и клапан ЕГР',
                    cost: '€480–820',
                    ifIgnored: 'Потеря тяги на обгоне и забитый выхлоп (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 500'
                  },
                  {
                    tier: 'red',
                    km: '160 000–210 000 км • 11–13 лет',
                    action: 'Заменить заднюю цепь ГРМ и натяжитель (со снятием КПП)',
                    cost: '€1 400–2 150',
                    ifIgnored: 'Обрыв однорядной цепи полностью выводит двигатель из строя (узлы и жидкости также стареют с годами)',
                    damageCost: '€4 000–6 000'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Обслужить форсунки, вакуумные клапаны турбин и масло в АКПП/маховик',
                    cost: '€900–1 450',
                    ifIgnored: 'Провал между турбинами, дым и износ трансмиссии (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 200–3 400'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m RWD / 11.1 m 4Matic', 'Upright Pillars & Clear Mirrors'],
              de: ['10,8 m RWD / 11,1 m 4Matic', 'Schmale Säulen & gute Übersicht'],
              ru: ['10,8 м RWD / 11,1 м 4Matic', 'Хорошая обзорность и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.4,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['1,800 kg Braked Tow', '400 Nm Effortless Hauling'],
              de: ['1.800 kg Anhängelast', 'Souveräne 400 Nm Zugkraft'],
              ru: ['Прицеп до 1 800 кг', 'Мощная тяга 400 Н·м']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 8.1 s', '232 km/h Top Speed'],
              de: ['0–100 km/h: 8,1 s', '232 km/h Spitze'],
              ru: ['0–100 км/ч: 8,1 с', 'Макс. 232 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.9,
            badges: {
              en: ['400 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['400 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['400 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 9.0,
            badges: {
              en: ['Balanced RWD / Opt. 4Matic', 'Planted High-Speed Grip'],
              de: ['Heckantrieb oder 4Matic', 'Hohe Spurtreue bei 200+ km/h'],
              ru: ['RWD или полный привод 4Matic', 'Уверенный держак на высокой скорости']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 8.8,
            badges: {
              en: ['5.6 L/100km', '128 g/km CO2'],
              de: ['5,6 L/100km', '128 g/km CO2'],
              ru: ['5,6 л/100 км', '128 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.7,
            badges: {
              en: ['2.1L Euro 5 Diesel Tax', 'High Fleet-Use Insurance'],
              de: ['2.1-Euro-5-Dieselsteuer', 'Höhere Vielfahrer-Versicherung'],
              ru: ['Налог 2,1 Euro 5', 'Повышенная ставка страховки']
            }
          },
          maintenanceRepairCosts: {
            score: 6.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic Plus / 5G-Tronic ATF + filter & diesel fuel filter', de: '7G/5G-Tronic-Öl + Filter & Dieselfilter wechseln', ru: 'Замена масла АКПП 7G/5G-Tronic + фильтр и топливный фильтр' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect plastic coolant outlet flange, water pump & EGR cooler', de: 'Kühlmittel-Kunststoffflansch, Wasserpumpe & AGR-Kühler prüfen', ru: 'Проверка пластикового фланца ОЖ, помпы и охладителя EGR' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '130,000–200,000 km', de: '130.000–200.000 km', ru: '130 000–200 000 км' }, action: { en: 'OM651 rear simplex timing chain + updated hydraulic tensioner', de: 'OM651 hinten liegende Simplex-Steuerkette + verbesserter Spanner', ru: 'Задняя однорядная цепь ГРМ OM651 и обновлённый натяжитель' }, cost: '€1,100–1,800', risk: { en: 'Cold-start chain rattle progresses to skipped teeth and bent valves', de: 'Kaltstart-Rasseln führt zu Überspringen und kapitalem Motorschaden', ru: 'Грохот цепи при пуске ведёт к перескоку и разрушению ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'Plastic fuel-filter coolant flange leak & rear subframe rust check', de: 'Undichter Kühlwasserstutzen am Kraftstofffilter & Hinterachsträger-Check', ru: 'Течь пластикового фланца ОЖ у топливного фильтра и осмотр подрамника' }, cost: '€320–750', risk: { en: 'Sudden coolant loss on highway or structural subframe rust', de: 'Plötzlicher Kühlwasserverlust auf der Autobahn oder Achsträger-Rost', ru: 'Резкая потеря антифриза на трассе или коррозия подрамника' }, damage: '€1,600–2,800' }
              ]
            },
            badges: {
              en: ['Massive Used Parts Market', 'Bi-Turbo Hoses, Pump & 7G ATF'],
              de: ['Riesiger Teilemarkt', 'Ladeluftschlauch, Pumpe & ATF'],
              ru: ['Огромный выбор запчастей', 'Патрубки, помпа и масло 7G-Tronic']
            }
          },
          depreciationResale: {
            score: 8.8,
            badges: {
              en: ['#1 W204 Resale Demand', 'Strong Facelift Value'],
              de: ['Bestseller-Wertstabilität', 'Sehr hohe Nachfrage'],
              ru: ['Лидер ликвидности W204', 'Стабильный спрос']
            }
          }
        }
      },
      {
        id: 'c250-cdi',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [{ id: '7g-tronic-plus', isDefault: true }],
        buyerFitGroup: 'om651-diesel',
        buyerFitOverrides: {
          ideal: [
            'w204C250CdiTorque',
            'w204PowerfulCruiser',
            'w204CabinQuality',
            'globalDieselLongRange'
          ]
        },
        dossierGroup: 'diesel-7g',
        isDefault: false,
        fuelType: 'diesel',
        hp: 204,
        shortTitle: 'C 250 CDI',
        fullName: '2012 Mercedes-Benz C 250 CDI',
        engineBadge: 'C 250 CDI • 204 HP',
        engineSubLabel: {
          en: '2.1L Bi-Turbo OM651 (10/2008–06/2015) • 6-MT / 5-AT / 7G-Plus / Opt. 4Matic • 500 Nm',
          de: '2.1L Bi-Turbo OM651 (10/2008–06/2015) • 6-Gang / 5-AT / 7G-Plus / Opt. 4Matic • 500 Nm',
          ru: '2.1 Би-турбо OM651 (10/2008–06/2015) • 6-МКПП / 5-АКПП / 7G-Plus / Опц. 4Matic • 500 Н·м'
        },
        rarityLabel: {
          en: '500 NM HIGHWAY WEAPON',
          de: '500 NM SPAR-SPRINTER',
          ru: '500 Н·М ДИЗЕЛЬ-РАКЕТА'
        },
        originalMsrp: {
          en: '€40,162 New',
          de: '40.162 € Neu',
          ru: '€40 162 новый'
        },
        estUsedPrice: '€10,900',
        perkLabel: {
          en: '✦ V8-Matching 500 Nm Torque • 7.0s 0–100 • Only 5.9 L/100km',
          de: '✦ Brachiale 500 Nm (V8-Niveau) • 7,0s 0–100 • Nur 5,9 L/100km',
          ru: '✦ Паровозные 500 Н·м • 7,0 с до 100 • Расход лишь 5,9 л/100 км'
        },
        remarkablePositives: {
          en: [
            'MONSTROUS 500 NM FROM 4-CYLINDER',
            '7.0S 0–100 • 240 KM/H TOP SPEED',
            'ONLY 5.9 L/100KM',
            'LIGHTER FRONT END THAN V6 CDI',
            '7G-TRONIC PLUS + OPTIONAL 4MATIC'
          ],
          de: [
            'BRACHIALE 500 NM AUS VIER ZYLINDERN',
            '7,0S 0–100 • 240 KM/H SPITZE',
            'NUR 5,9 L/100KM VERBRAUCH',
            'HANDLICHER ALS DIE SCHWEREN V6 CDI',
            '7G-TRONIC PLUS + OPTIONAL 4MATIC'
          ],
          ru: [
            'ВПЕЧАТЛЯЮЩИЕ 500 Н·М С 2.1 ЛИТРА',
            '7,0 С ДО 100 • МАКС. 240 КМ/Ч',
            'РАСХОД ВСЕГО 5,9 Л/100 КМ',
            'ЛЕГЧЕ ТЯЖЁЛЫХ ДИЗЕЛЕЙ V6 НА НОСУ',
            '7G-TRONIC PLUS И ОПЦИЯ 4MATIC'
          ]
        },
        notableNegatives: {
          en: [
            'EARLY 2008–11 DELPHI INJECTORS CRITICAL',
            'HIGHER STRESS ON OM651 CHAIN & TURBOS',
            'CHECK REAR AXLE SUBFRAME RUST'
          ],
          de: [
            '2008–11 DELPHI-INJEKTOR-RÜCKRUF PFLICHT',
            'STÄRKERE BELASTUNG FÜR KETTE & LADER',
            'HINTERACHSTRÄGER AUF ROST PRÜFEN'
          ],
          ru: [
            'КРИТИЧНА ЗАМЕНА ФОРСУНОК DELPHI (2008–11)',
            'ВЫШЕ НАГРУЗКА НА ЦЕПЬ ГРМ И БИ-ТУРБО',
            'ОСМОТРЕТЬ ЗАДНИЙ ПОДРАМНИК'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.6,
          spacePracticality: 7.6,
          performanceDynamics: 8.9,
          runningCostsTco: 7.7
        },
        specOverrides: {
          engineName: { en: '2.1L I4 OM651 204 (Bi-Turbo)', de: '2.1L Reihenvierzylinder 204 PS', ru: '2.1L R4 OM651 204 (Би-турбо)' },
          forcedInduction: '@twinTurbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: { en: '7G-Tronic Plus (Opt. 4MATIC)', de: '7G-Tronic Plus (Opt. 4MATIC)', ru: '7G-Tronic Plus (Опц. 4MATIC)' },
          clutchDmf: '@torqueConv', payloadRoof: '530 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '7.0 s', topSpeed: '240 km/h', peakTorque: '500 Nm @ 1,600 rpm',
          passingPunch: { en: 'Ferocious 500 Nm 4-Cyl Surge', de: 'Brachiale 500 Nm (4-Zyl.)', ru: 'Ураганные 500 Н·м' },
          realWorldFuel: '5.9 L/100km', tankRange: '66 L (~1,120 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierModHigh', serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 7.4,
            badges: {
              en: ['500 Nm High-Output OM651', 'Post-2012 Units Strongly Preferred'],
              de: ['500 Nm Top-OM651', 'Ab 2012 (Mopf) klar bevorzugt'],
              ru: ['Мощный OM651 (500 Н·м)', 'Лучше брать рестайлинг 2012+']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM651 DE22 LA (204 HP) · 2,143 cc' }, { k: 'architecture', v: { en: 'Inline-4 Sequential Twin-Turbo · 500 Nm High-Output', de: 'Reihenvierzylinder Bi-Turbo · 500 Nm Top-Ausbaustufe', ru: 'Рядный 4-цил. би-турбо · 500 Н·м форсированная версия' } }], note: { en: 'V6-rivaling 500 Nm and 7.0 s pace with 4-cylinder 5.9 L/100km economy; change oil every 15,000 km to keep the high-boost chain and turbos happy.', de: 'V6-Drehmoment (500 Nm) und 7,0 s bei nur 5,9 L Verbrauch; bei dieser Literleistung Öl strikt alle 15.000 km wechseln.', ru: 'Тяга как у V6 (500 Н·м, 7,0 с) при расходе 5,9 л; из-за высокой форсировки меняйте масло каждые 15 000 км.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: '500 Nm From 2.1 Liters — Effortless Bi-Turbo Thrust With Frugal Economy (Choose 2012+ Facelift)',
                strengths: [
                  '500 Nm Sequential Bi-Turbo: Delivers huge mid-range overtaking thrust while sipping under 6.0 L/100km.',
                  'Lower 2.1L Tax & Weight: Keeps displacement-based road tax reasonable and reduces weight over the front wheels.',
                  'Reaches 200,000–250,000 km when oil, cooling, and timing care stay strictly on schedule.'
                ],
                watchouts: [
                  '2008–2011 C 250 CDIs were the worst affected by the original Delphi piezo injector failures— confirm full solenoid replacement.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Verify recall history for the piezo injectors— 204 hp twin-turbo models work injectors hard and need updated units.',
                  'Check under the bonnet for split boost hoses, coolant crust near the water pump, and smooth twin-turbo surge without black smoke.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 10–15,000 km low-ash oil (never 25k!), diesel fuel filter & regular highway runs',
                    cost: '€190–310',
                    ifIgnored: 'Diluted 25k oil wears chain/turbos early & city commutes choke soot filter',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 5-AT/7G auto oil (60–80k / 5 yrs) & check 6-yr aging rubber belt, hoses & twin-turbo boost hoses & plastic pump housing',
                    cost: '€380–620',
                    ifIgnored: 'Aged automatic oil shifts hard & 6-yr heat-aged plastic/rubber leaks coolant/boost',
                    damageCost: '€1,400–2,400'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–135,000 km • 7–9 yrs',
                    action: 'Replace leaking plastic coolant neck, water pump & split boost hoses',
                    cost: '€420–680',
                    ifIgnored: 'High twin-turbo heat leaks coolant or dumps car into limp mode (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'orange',
                    km: '135,000–180,000 km • 9–11 yrs',
                    action: 'Clean soot filter + exhaust cooler & swap oil cooler housing seal',
                    cost: '€580–950',
                    ifIgnored: 'Blocked exhaust overheats twin turbos & oil drips onto belt (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,900–3,100'
                  },
                  {
                    tier: 'red',
                    km: '155,000–205,000 km • 11–13 yrs',
                    action: 'Replace rear timing chain & tensioner (gearbox removal needed)',
                    cost: '€1,400–2,150',
                    ifIgnored: '500 Nm torque snaps worn chain & wrecks valves (components & fluids also degrade over years)',
                    damageCost: '€4,200–6,400'
                  },
                  {
                    tier: 'orange',
                    km: '195,000–245,000 km • 13–15+ yrs',
                    action: 'Test injectors, turbo changeover valves & service 7-speed / clutch',
                    cost: '€950–1,550',
                    ifIgnored: 'Twin-turbo lag/hesitation & slipping drivetrain under load (components & fluids also degrade over years)',
                    damageCost: '€2,400–3,600'
                  }
                ]
              },
              de: {
                headline: '500 Nm aus 2,1 Litern — Bi-Turbo-Durchzug bei niedrigem Verbrauch (Mopf ab 2012 empfohlen)',
                strengths: [
                  '204 PS / 500 Nm sprinten in 7,0 Sekunden bei unter 6 L/100km Realverbrauch.',
                  'Moderater 2,1-Liter-Steuersatz und angenehm geringes Gewicht auf der Vorderachse.',
                  'Hält 200.000–250.000 km bei strikter Öl-, Kühlungs- und Steuerzeiten-Pflege.'
                ],
                watchouts: [
                  'Frühe C 250 CDI (2008–2011) waren am stärksten vom Delphi-Piezo-Injektor-Problem betroffen— Umrüstungs-Nachweis prüfen!',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Rückruf-Belege zu den Piezo-Injektoren prüfen– der 204-PS-Biturbo fordert die Einspritzung stark und braucht den neueren Stand.',
                  'Nach Kühlwasserresten an der Wasserpumpe sowie Rissen in Ladedruckschläuchen schauen und vollen Durchzug testen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich alle 10–15 Tkm Low-Ash-Öl (nie 25 Tkm!), Dieselfilter & regelmäßige Autobahnfahrten',
                    cost: '190–310 €',
                    ifIgnored: 'Mit Diesel verdünntes 25.000er-Öl verschleißt Kette/Lader; Stadtbetrieb verrußt DPF',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Automatiköl (60–80 Tkm / 5 J.) wechseln sowie 6-J.-Keilriemen, Schläuche & Biturbo-Schläuche & Pumpengehäuse prüfen',
                    cost: '380–620 €',
                    ifIgnored: 'Altes Getriebeöl ruckt & gealterte Kunststoff-/Gummiteile verlieren Wasser oder Druck',
                    damageCost: '1.400–2.400 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–135.000 km • 7–9 J.',
                    action: 'Kunststoff-Kühlstutzen, Wasserpumpe & Ladedruckschläuche erneuern',
                    cost: '420–680 €',
                    ifIgnored: 'Hohe Biturbo-Hitze verursacht Wasserverlust oder sofortigen Notlauf (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '135.000–180.000 km • 9–11 J.',
                    action: 'Partikelfilter samt Abgaskühler reinigen & Ölkühlerdichtung erneuern',
                    cost: '580–950 €',
                    ifIgnored: 'Abgasstau überhitzt beide Turbolader & Öl verdirbt den Riemen (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.900–3.100 €'
                  },
                  {
                    tier: 'red',
                    km: '155.000–205.000 km • 11–13 J.',
                    action: 'Hintere Steuerkette & Spanner tauschen (Getriebe muss heraus)',
                    cost: '1.400–2.150 €',
                    ifIgnored: '500 Nm Drehmoment lassen alte Kette reißen – Motorschaden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '4.200–6.400 €'
                  },
                  {
                    tier: 'orange',
                    km: '195.000–245.000 km • 13–15+ J.',
                    action: 'Injektoren, Turboumschalt-Ventile & Automatiköl / Kupplung warten',
                    cost: '950–1.550 €',
                    ifIgnored: 'Leistungslöcher beim Beschleunigen & rutschendes Getriebe (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.400–3.600 €'
                  }
                ]
              },
              ru: {
                headline: '500 Н·м с 2,1 литра — мощная би-турбо тяга при скромном расходе (рекомендуется с 2012 г.)',
                strengths: [
                  'Мощный подхват 500 Н·м на обгонах при реальном расходе ~5,9 л/100 км.',
                  'Легче на переднюю ось и заметно дешевле в содержании и налоге в Европе.',
                  'Проходит 200 000–250 000 км при строгом контроле масла, охлаждения и ГРМ.'
                ],
                watchouts: [
                  'Ранние C 250 CDI (2008–2011) больше всех страдали от брака пьезофорсунок Delphi— обязательна проверка замены.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Проверьте замену пьезофорсунок по отзыву— 204-сильный битурбо сильно нагружает топливную систему.',
                  'Проверьте помпу на следы антифриза, шланги наддува на трещины и убедитесь в ровной мощной тяге без дыма.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло Low-Ash строго раз в 10–15 тыс. (не 25 тыс.!), топливный фильтр и выезд на трассу',
                    cost: '€190–310',
                    ifIgnored: 'Разжиженное масло изнашивает цепь и турбину, а пробки рано забивают фильтр сажи',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло АКПП (60–80 тыс. / 5 лет), проверить старые к 6 годам ремень, шланги и патрубки битурбо и корпус помпы',
                    cost: '€380–620',
                    ifIgnored: 'Старая жидкость портит автомат, а пластик и резина к 6 годам теряют герметичность',
                    damageCost: '€1 400–2 400'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–135 000 км • 7–9 лет',
                    action: 'Заменить пластиковые патрубки охлаждения, помпу и шланги наддува',
                    cost: '€420–680',
                    ifIgnored: 'Высокий нагрев битурбо ведёт к утечке антифриза и аварийному режиму (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'orange',
                    km: '135 000–180 000 км • 9–11 лет',
                    action: 'Почистить сажевый фильтр с теплообменником ЕГР и сменить прокладку маслоохладителя',
                    cost: '€580–950',
                    ifIgnored: 'Забитый выхлоп перегревает турбины, а масло заливает ремень (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 900–3 100'
                  },
                  {
                    tier: 'red',
                    km: '155 000–205 000 км • 11–13 лет',
                    action: 'Заменить заднюю цепь ГРМ и натяжитель (со снятием КПП)',
                    cost: '€1 400–2 150',
                    ifIgnored: 'Крутящий момент в 500 Нм рвёт изношенную цепь и ломает клапаны (узлы и жидкости также стареют с годами)',
                    damageCost: '€4 200–6 400'
                  },
                  {
                    tier: 'orange',
                    km: '195 000–245 000 км • 13–15+ лет',
                    action: 'Проверить форсунки, клапаны переключения турбин и обслужить АКПП/сцепление',
                    cost: '€950–1 550',
                    ifIgnored: 'Провалы при разгоне и износ сцепления или гидротрансформатора (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 400–3 600'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['5-AT / 7G-Tronic Plus / 6-MT', 'Proven RWD / Opt. 4Matic'],
              de: ['5G / 7G-Plus / 6-Gang', 'Bewährter Heck-/Allradantrieb'],
              ru: ['5-AT / 7G-Plus / 6-МКПП', 'Надёжный задний и полный привод']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m RWD / 11.1 m 4Matic', 'Upright Pillars & Clear Mirrors'],
              de: ['10,8 m RWD / 11,1 m 4Matic', 'Schmale Säulen & gute Übersicht'],
              ru: ['10,8 м RWD / 11,1 м 4Matic', 'Хорошая обзорность и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.4,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['1,800 kg Braked Tow', '500 Nm Mountain Hauler'],
              de: ['1.800 kg Anhängelast', '500 Nm Berg-Zugpferd'],
              ru: ['Прицеп до 1 800 кг', 'Тянет любые подъёмы']
            }
          },
          accelerationOvertaking: {
            score: 8.6,
            badges: {
              en: ['0–100 km/h: 7.0 s', '240 km/h Top Speed'],
              de: ['0–100 km/h: 7,0 s', '240 km/h Spitze'],
              ru: ['0–100 км/ч: 7,0 с', 'Макс. 240 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.7,
            badges: {
              en: ['500 Nm Low-RPM Surge', 'Effortless 80–120 Passing'],
              de: ['500 Nm ab 1.400/min', 'Müheloses Überholen im 6.'],
              ru: ['500 Н·м с низов', 'Молниеносный обгон на трассе']
            }
          },
          handlingAgility: {
            score: 9.3,
            badges: {
              en: ['Agile Nose + 500 Nm Punch', 'Sport Suspension Common'],
              de: ['Agiler als V6 CDI', 'Oft mit Sportfahrwerk'],
              ru: ['Маневреннее V6 на входе', 'Часто со спортподвеской']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['5.9 L/100km', '134 g/km CO2'],
              de: ['5,9 L/100km', '134 g/km CO2'],
              ru: ['5,9 л/100 км', '134 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.4,
            badges: {
              en: ['2.1L Tax Saves Over V6 • Euro 5', 'Higher 204 HP Insurance'],
              de: ['2.1-Steuer statt V6 • Euro 5', 'Teurere 204-PS-Versicherung'],
              ru: ['Налог 2,1 вместо V6 • Euro 5', 'Дороже страховка за 204 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 6.5,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic Plus / 5G-Tronic ATF + filter & diesel fuel filter', de: '7G/5G-Tronic-Öl + Filter & Dieselfilter wechseln', ru: 'Замена масла АКПП 7G/5G-Tronic + фильтр и топливный фильтр' }, cost: '€280–420' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Inspect plastic coolant outlet flange, water pump & EGR cooler', de: 'Kühlmittel-Kunststoffflansch, Wasserpumpe & AGR-Kühler prüfen', ru: 'Проверка пластикового фланца ОЖ, помпы и охладителя EGR' }, cost: '€180–300' }
              ],
              critical: [
                { when: { en: '130,000–200,000 km', de: '130.000–200.000 km', ru: '130 000–200 000 км' }, action: { en: 'OM651 rear simplex timing chain + updated hydraulic tensioner', de: 'OM651 hinten liegende Simplex-Steuerkette + verbesserter Spanner', ru: 'Задняя однорядная цепь ГРМ OM651 и обновлённый натяжитель' }, cost: '€1,100–1,800', risk: { en: 'Cold-start chain rattle progresses to skipped teeth and bent valves', de: 'Kaltstart-Rasseln führt zu Überspringen und kapitalem Motorschaden', ru: 'Грохот цепи при пуске ведёт к перескоку и разрушению ГБЦ' }, damage: '€4,000–6,000' },
                { when: { en: '110,000–180,000 km', de: '110.000–180.000 km', ru: '110 000–180 000 км' }, action: { en: 'Plastic fuel-filter coolant flange leak & rear subframe rust check', de: 'Undichter Kühlwasserstutzen am Kraftstofffilter & Hinterachsträger-Check', ru: 'Течь пластикового фланца ОЖ у топливного фильтра и осмотр подрамника' }, cost: '€320–750', risk: { en: 'Sudden coolant loss on highway or structural subframe rust', de: 'Plötzlicher Kühlwasserverlust auf der Autobahn oder Achsträger-Rost', ru: 'Резкая потеря антифриза на трассе или коррозия подрамника' }, damage: '€1,600–2,800' }
              ]
            },
            badges: {
              en: ['500 Nm Wears Rear Tyres Faster', '322 mm Pads + Boost Plumbing'],
              de: ['500 Nm fressen Hinterreifen', '322-mm-Bremsen & Ladeluftwege'],
              ru: ['500 Н·м быстрее стачивают шины', 'Колодки 322 мм и патрубки турбин']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['High Enthusiast Diesel Demand', 'Strong Facelift Resale'],
              de: ['Gefragter Sport-Diesel', 'Sehr wertstabil als Mopf'],
              ru: ['Высокий спрос на 250 CDI', 'Отличная ликвидность']
            }
          }
        }
      },
      {
        id: 'c320-cdi',
        defaultGearboxId: '7g-tronic',
        gearboxes: [{ id: '7g-tronic', isDefault: true }],
        buyerFitGroup: 'v6-diesel',
        dossierGroup: 'diesel-7g',
        isDefault: false,
        fuelType: 'diesel',
        hp: 224,
        shortTitle: 'C 320 CDI V6',
        fullName: '2008 Mercedes-Benz C 320 CDI V6',
        engineBadge: 'C 320 / 350 CDI V6 • 224 HP',
        engineSubLabel: {
          en: '3.0L V6 Diesel OM642 (03/2007–11/2009) • 6-MT / 7G-Tronic / Opt. 4Matic • 510 Nm',
          de: '3.0L V6-Diesel OM642 (03/2007–11/2009) • 6-Gang / 7G-Tronic / Opt. 4Matic • 510 Nm',
          ru: '3.0 V6 Дизель OM642 (03/2007–11/2009) • 6-МКПП / 7G-Tronic / Опц. 4Matic • 510 Н·м'
        },
        rarityLabel: {
          en: 'SILKY V6 DIESEL EXPRESS',
          de: 'KULTIVIERTER V6-DIESEL',
          ru: 'БЛАГОРОДНЫЙ ДИЗЕЛЬ V6'
        },
        originalMsrp: {
          en: '€42,483 New',
          de: '42.483 € Neu',
          ru: '€42 483 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ Silky 3.0L V6 Torque (510 Nm) • 6.9s 0–100 • 250 km/h Autobahn',
          de: '✦ Seidiger 3.0L V6-Schub (510 Nm) • 6,9s 0–100 • 250 km/h Spitze',
          ru: '✦ Бархатный V6 3.0 (510 Н·м) • 6,9 с до 100 • Макс. 250 км/ч'
        },
        remarkablePositives: {
          en: [
            'REFINED 6-CYLINDER DIESEL SMOOTHNESS',
            'STRONG 510 NM TORQUE (6.9S 0–100)',
            '250 KM/H AUTOBAHN CRUISER',
            'OPTIONAL 4MATIC + 322MM BRAKES',
            'PROVEN 400K+ KM V6 BOTTOM END'
          ],
          de: [
            'SEIDIGE SECHSZYLINDER-LAUFRUHE',
            '510 NM DREHMOMENT-WELLE (6,9S 0–100)',
            '250 KM/H AUTOBAHN-EXPRESS',
            'OPTIONAL 4MATIC + 322MM BREMSEN',
            'ROBUSTER 400.000+ KM RUMPFMOTOR'
          ],
          ru: [
            'ПЛАВНОСТЬ И ЗВУК 6-ЦИЛИНДРОВОГО ДИЗЕЛЯ',
            'ТЯГА 510 Н·М (6,9 С ДО 100)',
            'КРЕЙСЕРСКИЕ 250 КМ/Ч НА ТРАССЕ',
            'ОПЦИЯ 4MATIC И ТОРМОЗА 322 ММ',
            'ВЫНОСЛИВЫЙ БЛОК С РЕСУРСОМ 400+ ТЫС. КМ'
          ]
        },
        notableNegatives: {
          en: [
            'OIL COOLER SEALS IN V-VALLEY LEAK',
            'EURO 4 EMISSIONS & HIGH 3.0L TAX',
            'THIRSTIER 7.6 L/100KM CONSUMPTION',
            'SWIRL FLAP MOTOR WEARS OUT'
          ],
          de: [
            'ÖLKÜHLER-DICHTUNGEN IM V-RAUM UNDICHT',
            'EURO 4 & HOHE 3.0L DIESELSTEUER',
            'HÖHERER VERBRAUCH (7,6 L/100KM)',
            'DRALLKLAPPEN-STELLMOTOR VERSCHLEISST'
          ],
          ru: [
            'ТЕЧЬ ТЕПЛООБМЕННИКА В РАЗВАЛЕ V6',
            'НОРМЫ EURO 4 И ВЫСОКИЙ НАЛОГ НА 3.0 Л',
            'РАСХОД 7,6 Л/100 КМ В СМЕШАННОМ ЦИКЛЕ',
            'ИЗНОС ПРИВОДА ЗАСЛОНОК ВПУСКА'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.0,
          comfortCabin: 8.6,
          spacePracticality: 7.6,
          performanceDynamics: 8.8,
          runningCostsTco: 6.6
        },
        specOverrides: {
          engineName: { en: '3.0L V6 OM642 CDI (Chain)', de: '3.0L V6 Diesel OM642 (Kette)', ru: '3.0L V6 OM642 Дизель (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: { en: '7G-Tronic (Opt. 4MATIC)', de: '7G-Tronic (Opt. 4MATIC)', ru: '7G-Tronic (Опц. 4MATIC)' },
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '6.9 s', topSpeed: '250 km/h', peakTorque: '510 Nm @ 1,600 rpm',
          passingPunch: { en: 'Silky 510 Nm V6 Wave', de: 'Seidige 510-Nm-V6-Welle', ru: 'Бархатная волна 510 Н·м V6' },
          realWorldFuel: '7.6 L/100km', tankRange: '66 L (~870 km)', euroNorm: 'Euro 4 (Diesel)', taxInsurance: '@tierHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 8.3,
            badges: {
              en: ['Tough 3.0L OM642 V6 Core', 'Watch V-Valley Oil Cooler Seals'],
              de: ['Robuster OM642 V6-Kern', 'Ölkühler-Dichtung im V beachten'],
              ru: ['Крепкий блок V6 OM642', 'Уплотнения теплообменника в V']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM642 DE30 LA (224 HP) · 2,987 cc V6' }, { k: 'architecture', v: { en: '72° V6 Aluminium Diesel · Duplex Chain + 510 Nm', de: '72°-V6 Alu-Diesel · Duplex-Steuerkette + 510 Nm', ru: 'V6 72° алюминиевый дизель · Цепь + 510 Н·м' } }], note: { en: 'Whisper-smooth V6 diesel luxury with 510 Nm; mechanically huge longevity once the notorious V-valley oil-cooler seals are upgraded to purple Viton.', de: 'Flüsterleiser V6-Diesel-Luxus mit 510 Nm; mechanisch extrem haltbar, sobald die Ölkühlerdichtungen im V auf Viton umgerüstet wurden.', ru: 'Тихий и бархатный V6 дизель на 510 Н·м; огромный ресурс после замены прокладок теплообменника в развале V.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Ultra-Refined 3.0L V6 Diesel (Badged C 320 CDI-> Early C 350 CDI)— Huge Mileage Once Oil Cooler Resealed',
                strengths: [
                  'Bottom end, crankshaft, and Bosch common-rail system handle 400,000+ km comfortably.',
                  'Far quieter, smoother, and more cultured than any 4-cylinder diesel.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'Oil cooler seals deep inside the engine V-valley leak oil down the bellhousing (~8–10 hours labor to replace with updated purple Viton seals).',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Check if the red rubber pipe seal going into the turbo is dripping oil onto the electric flap motor directly below it.',
                  'Verify glow plug warning light goes out cleanly after starting and listen on cold start for stretched V6 chain rattle.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre low-ash V6 diesel oil (10–15k), clean fuel filter & motorway runs for soot filter',
                    cost: '€220–350',
                    ifIgnored: 'Stretched oil services coke V6 turbo bearings & overload soot filter early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G auto oil (60k / 4–5 yrs), check 6-yr aging red turbo intake seal/belt & optional 4MATIC front axle oil',
                    cost: '€460–750',
                    ifIgnored: '500–620 Nm ages auto fluid fast & hardened 6-yr red rubber seal drips oil onto swirl motor',
                    damageCost: '€1,900–3,300'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Replace red turbo intake rubber seal & glow plug control module',
                    cost: '€240–420',
                    ifIgnored: 'Leaking oil fries intake flap motor below & cold starts fail in winter (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'red',
                    km: '135,000–185,000 km • 9–11 yrs',
                    action: 'Replace V-valley oil cooler seals with upgraded purple Viton seals',
                    cost: '€900–1,450',
                    ifIgnored: 'Heavy oil leak ruins rubber hoses, starter & leaves puddles everywhere (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,200–3,500'
                  },
                  {
                    tier: 'orange',
                    km: '175,000–225,000 km • 11–13 yrs',
                    action: 'Replace turbo electronic actuator / exhaust backpressure sensor & gearbox oil',
                    cost: '€680–1,100',
                    ifIgnored: 'Sudden limp mode on highway & bumpy 7-speed downshifts (components & fluids also degrade over years)',
                    damageCost: '€1,900–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check stretched V6 timing chain & refurbish high-mile injectors',
                    cost: '€1,400–2,200',
                    ifIgnored: 'Loud cold rattle, soot-choked exhaust & uneven running (components & fluids also degrade over years)',
                    damageCost: '€3,500–5,200'
                  }
                ]
              },
              de: {
                headline: 'Kultivierter 3.0L V6-Diesel (C 320 / früher C 350 CDI)— extrem haltbar nach Ölkühler-Abdichtung',
                strengths: [
                  'Kurbeltrieb und Bosch-Einspritzung halten bei Pflege mühelos 400.000+ km.',
                  'Der ab 06/2009 kurzzeitig verkaufte erste C 350 CDI (224 PS) nutzt exakt diesen Antrieb.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Öltropfen von der Turbo-Dichtung zerstören oft den darunter sitzenden EKAS-Drallklappen-Stellmotor.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Prüfen, ob am roten Turboschlauch-Gummi Öl auf den direkt darunter sitzenden Einlasskanal-Stellmotor tropft.',
                  'Auf verlöschende Vorglühleuchte achten und beim Kaltstart lauschen, ob die lange V6-Steuerkette bereits rasselt.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 8 Liter Low-Ash-V6-Öl (10–15 Tkm), Dieselfilter & regelmäßige Autobahn-Regeneration',
                    cost: '220–350 €',
                    ifIgnored: 'Überzogenes Altöl verkokt den großen V6-Turbolader & füllt den Partikelfilter früh',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Automatiköl (60 Tkm / 4–5 J.) wechseln, rote 6-J.-Turbodichtung/Riemen & ggf. 4MATIC-Achsöl prüfen',
                    cost: '460–750 €',
                    ifIgnored: '500–620 Nm altern Getriebeöl rasch; harte rote Dichtung tropft auf den Stellmotor',
                    damageCost: '1.900–3.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Rote Turbo-Ansaugdichtung & Glühzeit-Steuergerät vorbeugend tauschen',
                    cost: '240–420 €',
                    ifIgnored: 'Tropfendes Öl zerstört den Stellmotor darunter & Kaltstart streikt (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'red',
                    km: '135.000–185.000 km • 9–11 J.',
                    action: 'Ölkühler-Dichtungen im V auf verbesserte violette Dichtungen umrüsten',
                    cost: '900–1.450 €',
                    ifIgnored: 'Starker Ölverlust zerfrisst Schläuche, Anlasser & markiert den Stellplatz (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.200–3.500 €'
                  },
                  {
                    tier: 'orange',
                    km: '175.000–225.000 km • 11–13 J.',
                    action: 'Turbo-Stellmotor / Abgasgegendrucksensor & 7-Gang-Getriebeöl erneuern',
                    cost: '680–1.100 €',
                    ifIgnored: 'Notlauf beim Beschleunigen & harte Schaltstöße der Automatik (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.900–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Gelängte V6-Steuerkette prüfen & laufstarke Injektoren überholen',
                    cost: '1.400–2.200 €',
                    ifIgnored: 'Lautes Kaltstartrasseln, verrußter Partikelfilter & unrunder Lauf (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '3.500–5.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Благородный дизель V6 (C 320 / ранний C 350 CDI)— огромный ресурс после замены прокладок теплообменника',
                strengths: [
                  'Блок, коленвал и топливная аппаратура Bosch легко проходят 400+ тыс. км.',
                  'Работает заметно тише и благороднее любого 4-цилиндрового дизеля.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'Фирменная болезнь OM642— течь прокладок масляного теплообменника в развале блока (трудоёмкая замена на фиолетовый Viton).',
                  'Масло из стыка турбины нередко выводит из строя сервопривод вихревых заслонок EKAS под ним.'
                ],
                beforeYouBuy: [
                  'Проверьте красный резиновый уплотнитель перед турбиной— масло с него капает прямо на электромотор заслонок впуска.',
                  'Убедитесь, что спираль накала гаснет без повторного загорания, а на холодном старте цепь V6 не гремит.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно 8 л малозольного масла (10–15 тыс. км), топливный фильтр и прогоны по трассе',
                    cost: '€220–350',
                    ifIgnored: 'Старое масло коксует турбину V6 и ускоряет засорение сажевого фильтра',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), проверить красное кольцо турбины (6 лет) и и редукторы 4MATIC',
                    cost: '€460–750',
                    ifIgnored: 'Момент 500–620 Нм быстро старит масло, а дубовая к 6 годам резинка льёт на моторчик',
                    damageCost: '€1 900–3 300'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Заменить красную прокладку патрубка турбины и блок розжига свечей',
                    cost: '€240–420',
                    ifIgnored: 'Масло заливает электропривод заслонок, а зимой мотор не заводится (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'red',
                    km: '135 000–185 000 км • 9–11 лет',
                    action: 'Заменить прокладки теплообменника в развале блока на усиленные фиолетовые',
                    cost: '€900–1 450',
                    ifIgnored: 'Сильная течь масла портит шланги, стартер и пачкает всё днище',
                    damageCost: '€2 200–3 500'
                  },
                  {
                    tier: 'orange',
                    km: '175 000–225 000 км • 11–13 лет',
                    action: 'Обслужить актуатор турбины, датчик противодавления и масло 7-ступ. АКПП',
                    cost: '€680–1 100',
                    ifIgnored: 'Потеря наддува на трассе и грубые переключения автомата (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 900–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить растяжение цепи V6 и отремонтировать форсунки',
                    cost: '€1 400–2 200',
                    ifIgnored: 'Громкий звон при запуске, забитый сажевый фильтр и вибрации (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 500–5 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.6,
            badges: {
              en: ['7G-Tronic • Opt. 4Matic AWD', 'Check 60k ATF & Transfer Case'],
              de: ['7G-Tronic • Opt. 4Matic', 'ATF & Verteilergetriebe prüfen'],
              ru: ['7G-Tronic • Опция 4Matic', 'Проверка раздатки и масла АКПП']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 7.5,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.0,
            badges: {
              en: ['Agility Control Damping', 'Quiet 67 dB Autobahn Cabin'],
              de: ['Agility-Control-Fahrwerk', 'Leiser 67-dB-Autobahnkomfort'],
              ru: ['Адаптивная подвеска Agility', 'Тихий салон 67 дБ на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.1,
            badges: {
              en: ['10.8 m RWD / 11.1 m 4Matic', 'Upright Pillars & Clear Mirrors'],
              de: ['10,8 m RWD / 11,1 m 4Matic', 'Schmale Säulen & gute Übersicht'],
              ru: ['10,8 м RWD / 11,1 м 4Matic', 'Хорошая обзорность и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.1,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.2,
            badges: {
              en: ['1,800 kg Braked Tow', '510 Nm Heavy Towing Ease'],
              de: ['1.800 kg Anhängelast', '510 Nm Zugkraft-Reserven'],
              ru: ['Прицеп до 1 800 кг', 'Запас тяги 510 Н·м']
            }
          },
          accelerationOvertaking: {
            score: 8.7,
            badges: {
              en: ['0–100 km/h: 6.9 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,9 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,9 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.7,
            badges: {
              en: ['510 Nm Low-RPM Surge', 'Effortless 80–120 Passing'],
              de: ['510 Nm ab 1.400/min', 'Müheloses Überholen im 6.'],
              ru: ['510 Н·м с низов', 'Молниеносный обгон на трассе']
            }
          },
          handlingAgility: {
            score: 8.6,
            badges: {
              en: ['Slightly Heavier V6 Nose', 'Rock-Solid 250 km/h Stability'],
              de: ['Etwas schwerere V6-Front', 'Souveräner Geradeauslauf'],
              ru: ['Чуть тяжелее передок V6', 'Монументальность на 250 км/ч']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 6.7,
            badges: {
              en: ['7.6 L/100km', '182 g/km CO2'],
              de: ['7,6 L/100km', '182 g/km CO2'],
              ru: ['7,6 л/100 км', '182 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 4.1,
            badges: {
              en: ['High €463/yr 3.0L Euro 4 Tax', 'Euro 4 Bans + High V6 Ins.'],
              de: ['Sehr hohe 463-€-Euro-4-Steuer', 'Euro-4-Verbot + V6-Versicherung'],
              ru: ['Очень высокий налог Euro 4', 'Запреты Euro 4 + дорогая страховка']
            }
          },
          maintenanceRepairCosts: {
            score: 3.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & 4MATIC/diff oil + fuel filter', de: '7G-Tronic-Öl (722.9) + Filter, Diff-/4MATIC-Öl & Dieselfilter wechseln', ru: 'Замена масла 7G-Tronic + фильтр, масла редукторов и топливный фильтр' }, cost: '€360–520' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace turbo-inlet orange seal (prevents oil dripping on swirl motor!)', de: 'Rote Turbolader-Dichtung ersetzen (schützt Drallklappen-Stellmotor!)', ru: 'Замена уплотнительного кольца на впуске турбины (защита мотора заслонок!)' }, cost: '€120–200' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'OM642 V-valley oil-cooler seals (upgrade to purple Viton) & swirl motor', de: 'OM642 Ölkühlerdichtungen im V (lila Viton) & Drallklappen-Stellmotor', ru: 'Прокладки теплообменника в развале V OM642 (фиолетовые Viton) и актуатор заслонок' }, cost: '€1,100–1,800', risk: { en: 'Heavy oil pool in V-valley drips onto starter & shorts swirl actuator', de: 'Ölsee im V tropft auf Anlasser und zerstört den Drallklappen-Motor', ru: 'Масло в развале заливает стартер и выводит из строя актуатор заслонок' }, damage: '€2,200–3,400' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: '600+ Nm 7G-Tronic conductor plate & rear subframe rust check', de: '7G-Tronic-Steuereinheit (bei 510–620 Nm) & Hinterachsträger-Check', ru: 'Плата АКПП 7G-Tronic (при 510–620 Н·м) и осмотр заднего подрамника' }, cost: '€750–1,450', risk: { en: 'Harsh shifts / limp mode or rear subframe rust', de: 'Harte Schaltschläge / Notlauf oder Hinterachs-Korrosion', ru: 'Пинки / аварийный режим АКПП или коррозия подрамника' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['8.5L Oil + Tight V6 Engine Bay', 'Expensive Oil Cooler Seal Labor'],
              de: ['8,5 L Öl + enger V6-Motorraum', 'Teurer Ölkühler-Dichtungswechsel'],
              ru: ['8,5 л масла и тесный отсек V6', 'Дорогая работа по теплообменнику']
            }
          },
          depreciationResale: {
            score: 8.1,
            badges: {
              en: ['Loyal V6 Diesel Fanbase', 'Euro 4 Urban Discount'],
              de: ['Treue V6-Diesel-Kundschaft', 'Euro-4-Preisabschlag'],
              ru: ['Стабильный спрос на V6 CDI', 'Уценка из-за Euro 4']
            }
          }
        }
      },
      {
        id: 'c300-cdi-4matic',
        defaultGearboxId: '7g-tronic',
        gearboxes: [{ id: '7g-tronic', isDefault: true }],
        buyerFitGroup: 'v6-diesel',
        dossierGroup: 'diesel-7g',
        isDefault: false,
        fuelType: 'diesel',
        drivetrain: 'AWD',
        hp: 231,
        shortTitle: 'C 300 CDI 4MATIC',
        fullName: '2011 Mercedes-Benz C 300 CDI 4Matic',
        engineBadge: 'C 300 / 350 CDI V6 • 231 HP',
        engineSubLabel: {
          en: '3.0L V6 Diesel OM642 (11/2009–03/2014) • 7G-Tronic / 4Matic • 540 Nm',
          de: '3.0L V6-Diesel OM642 (11/2009–03/2014) • 7G-Tronic / 4Matic • 540 Nm',
          ru: '3.0 V6 Дизель OM642 (11/2009–03/2014) • 7G-Tronic / 4Matic • 540 Н·м'
        },
        rarityLabel: {
          en: 'ALL-WEATHER V6 EXPRESS',
          de: 'ALLWETTER V6-EXPRESS',
          ru: 'ВСЕПОГОДНЫЙ ДИЗЕЛЬ V6'
        },
        originalMsrp: {
          en: '€45,577 New',
          de: '45.577 € Neu',
          ru: '€45 577 новый'
        },
        estUsedPrice: '€11,500',
        perkLabel: {
          en: '✦ Standard 4Matic AWD • 540 Nm V6 Muscle • 6.4s 0–100 All-Season Grip',
          de: '✦ Serienmäßiger 4Matic Allrad • 540 Nm V6-Schub • 6,4s bei jedem Wetter',
          ru: '✦ Полный привод 4Matic • 540 Н·м тяги V6 • 6,4 с в любую погоду'
        },
        remarkablePositives: {
          en: [
            'ALL-WEATHER 4MATIC AWD TRACTION',
            '540 NM V6 TORQUE (6.4S 0–100)',
            'EURO 5 & REVISED VITON SEALS (2011+)',
            '250 KM/H AUTOBAHN STABILITY',
            '322MM BRAKES + 7G-TRONIC PLUS'
          ],
          de: [
            'ALLWETTER-TRAKTION DURCH 4MATIC',
            '540 NM V6-DREHMOMENT (6,4S 0–100)',
            'EURO 5 & BESSERE DICHTUNGEN AB 2011',
            '250 KM/H AUTOBAHN-SOUVERÄNITÄT',
            '322MM BREMSEN + 7G-TRONIC PLUS'
          ],
          ru: [
            'УВЕРЕННЫЙ ПОЛНЫЙ ПРИВОД 4MATIC',
            '540 Н·М КРУТЯЩЕГО МОМЕНТА (6,4 С)',
            'EURO 5 И УЛУЧШЕННЫЕ САЛЬНИКИ (2011+)',
            'НЕЗЫБЛЕМАЯ СТАБИЛЬНОСТЬ НА 250 КМ/Ч',
            'ТОРМОЗА 322 ММ + 7G-TRONIC PLUS'
          ]
        },
        notableNegatives: {
          en: [
            'WATCH OM642 OIL COOLER & EKAS MOTOR',
            '7.5 L/100KM + AWD WEIGHT',
            'HIGHER 3.0L TAX & TRANSFER CASE SERVICE'
          ],
          de: [
            'OM642 ÖLKÜHLER-DICHTUNG & EKAS PRÜFEN',
            '7,5 L/100KM + ALLRAD-GEWICHT',
            'HOHE 3.0L STEUER & 4MATIC-WARTUNG'
          ],
          ru: [
            'ТЕПЛООБМЕННИК И ЗАСЛОНКИ EKAS OM642',
            'РАСХОД 7,5 Л/100 КМ И МАССА ПОЛНОГО ПРИВОДА',
            'ДОРОГОЙ НАЛОГ И ОБСЛУЖИВАНИЕ 4MATIC'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.1,
          comfortCabin: 8.6,
          spacePracticality: 7.6,
          performanceDynamics: 9.1,
          runningCostsTco: 6.9
        },
        specOverrides: {
          engineName: { en: '3.0L V6 OM642 4MATIC (Chain)', de: '3.0L V6 OM642 4MATIC (Kette)', ru: '3.0L V6 OM642 4MATIC (Цепь)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: { en: '7G-Tronic + 4MATIC AWD', de: '7G-Tronic + 4MATIC Allrad', ru: '7G-Tronic + 4MATIC AWD' },
          clutchDmf: '@torqueConv', driveline: '@awdFull',
          tractionDiff: { en: '4MATIC Full-Time AWD · ESP', de: '4MATIC Dauer-Allrad · ESP', ru: 'Постоянный 4MATIC · ESP' },
          payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '6.4 s', topSpeed: '250 km/h', peakTorque: '540 Nm @ 1,600 rpm',
          passingPunch: { en: 'All-Weather 540 Nm V6', de: 'Allwetter-540-Nm-V6', ru: 'Всепогодные 540 Н·м V6' },
          realWorldFuel: '7.5 L/100km', tankRange: '66 L (~880 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 8.5,
            badges: {
              en: ['Updated 231 HP OM642 V6', 'Watch V-Valley Oil Cooler Seals'],
              de: ['Überarb. 231 PS OM642 V6', 'Ölkühlerdichtungen im V prüfen'],
              ru: ['Обновл. V6 OM642 (231 л.с.)', 'Прокладки теплообменника в развале']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM642 DE30 LA (231 HP) · 2,987 cc V6' }, { k: 'architecture', v: { en: '72° V6 Aluminium Diesel · Standard 4MATIC + 540 Nm', de: '72°-V6 Alu-Diesel · Serien-4MATIC + 540 Nm', ru: 'V6 72° алюминиевый дизель · Полный 4MATIC + 540 Н·м' } }], note: { en: 'Ultimate all-season Autobahn cruiser combining 540 Nm V6 torque with full-time 4MATIC traction; watch V-valley oil cooler & transfer-case bearings.', de: 'Ultimativer Allwetter-Autobahngleiter mit 540 Nm und 4MATIC; Ölkühler im V und Verteilergetriebelager prüfen.', ru: 'Идеальный всепогодный экспресс с 540 Н·м и полным приводом 4MATIC; проверяйте теплообменник и подшипник раздатки.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Updated 231 HP / 540 Nm OM642 V6 (Shared with 231 HP C 350 CDI BlueEfficiency) + 4Matic AWD',
                strengths: [
                  'Facelift 2011+ builds upgraded the infamous V-valley oil cooler seals from orange to durable purple Viton.',
                  'Capable of 240,000–280,000+ km with timely 10,000–15,000 km oil changes.'
                ],
                watchouts: [
                  'On 2009–2010 builds, check for V-valley oil cooler leaks and turbo-drip damage to the EKAS swirl-flap motor.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.',
                  'Check coolant level and inspect around the injectors and turbo pipes for oil mist or black tar.',
                  'Verify regular highway mileage and 10,000–15,000 km low-ash oil changes in the service book.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre low-ash V6 diesel oil (10–15k), clean fuel filter & motorway runs for soot filter',
                    cost: '€220–350',
                    ifIgnored: 'Stretched oil services coke V6 turbo bearings & overload soot filter early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G auto oil (60k / 4–5 yrs), check 6-yr aging red turbo intake seal/belt & 4MATIC transfer case & front differential oil',
                    cost: '€460–750',
                    ifIgnored: '500–620 Nm ages auto fluid fast & hardened 6-yr red rubber seal drips oil onto swirl motor',
                    damageCost: '€1,900–3,300'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Change 7-speed gearbox, 4MATIC transfer case & front differential oil + turbo seal',
                    cost: '€450–700',
                    ifIgnored: 'Grinding AWD bearings, bumpy shifts & oil dripping onto flap motor (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,200–3,800'
                  },
                  {
                    tier: 'red',
                    km: '140,000–190,000 km • 9–11 yrs',
                    action: 'Replace V-valley oil cooler seals & inspect front propshaft joint',
                    cost: '€1,050–1,650',
                    ifIgnored: 'Seized front shaft can smash the gearbox housing; oil ruins hoses (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,500–6,000'
                  },
                  {
                    tier: 'orange',
                    km: '175,000–225,000 km • 11–13 yrs',
                    action: 'Clean soot filter, replace exhaust backpressure sensor & glow module',
                    cost: '€520–880',
                    ifIgnored: 'Limp-mode cutouts & winter starting trouble (components & fluids also degrade over years)',
                    damageCost: '€1,600–2,700'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check V6 timing chain, transfer case bearings & front 4MATIC driveshafts',
                    cost: '€1,300–2,100',
                    ifIgnored: 'Loud driveline whine & worn chain rattle on startup (components & fluids also degrade over years)',
                    damageCost: '€3,200–5,200'
                  }
                ]
              },
              de: {
                headline: 'Überarbeiteter 231-PS-V6 (technisch identisch zum C 350 CDI 231 PS) mit Allrad-Traktion',
                strengths: [
                  'Spätere Baujahre erhielten ab Werk die haltbareren lila Viton-Ölkühlerdichtungen.',
                  'Erreicht bei Ölwechseln alle 10.000–15.000 km rund 240.000–280.000+ km.'
                ],
                watchouts: [
                  'Vor-Facelift-Einheiten (2009–2010) auf Ölkühler-Undichtigkeit im V und den EKAS-Stellmotor kontrollieren.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Am Getriebeübergang nach Ölpfützen (Ölkühler im V) und am Kreuzgelenk der vorderen Kardanwelle nach Spiel suchen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.',
                  'Kühlmittelstand sowie Injektoren und Ladeluftrohre auf Ölnebel oder Verkokung prüfen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 8 Liter Low-Ash-V6-Öl (10–15 Tkm), Dieselfilter & regelmäßige Autobahn-Regeneration',
                    cost: '220–350 €',
                    ifIgnored: 'Überzogenes Altöl verkokt den großen V6-Turbolader & füllt den Partikelfilter früh',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Automatiköl (60 Tkm / 4–5 J.) wechseln, rote 6-J.-Turbodichtung/Riemen & 4MATIC-Verteilergetriebe- & Vorderachsöl prüfen',
                    cost: '460–750 €',
                    ifIgnored: '500–620 Nm altern Getriebeöl rasch; harte rote Dichtung tropft auf den Stellmotor',
                    damageCost: '1.900–3.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Automatik-, 4MATIC-Vorderachsöl & rote Turbodichtung tauschen',
                    cost: '450–700 €',
                    ifIgnored: 'Mahlende Allrad-Lager, harte Schaltung & verölter Klappenmotor (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.200–3.800 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–190.000 km • 9–11 J.',
                    action: 'Ölkühler-Dichtungen im V erneuern & vordere Kardanwelle prüfen',
                    cost: '1.050–1.650 €',
                    ifIgnored: 'Ausgeschlagenes Kardangelenk zerschlägt das Getriebegehäuse (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.500–6.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '175.000–225.000 km • 11–13 J.',
                    action: 'Partikelfilter reinigen sowie Abgassensor & Glühsteuergerät tauschen',
                    cost: '520–880 €',
                    ifIgnored: 'Notlauf bei Volllast & Startprobleme bei Minusgraden (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.600–2.700 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'V6-Steuerkette, Verteilergetriebe-Lager & vordere Antriebswellen warten',
                    cost: '1.300–2.100 €',
                    ifIgnored: 'Lautes Heulen im Allradstrang & Kettenrasseln beim Start (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.200–5.200 €'
                  }
                ]
              },
              ru: {
                headline: 'Обновлённый V6 231 л.с. (идентичен C 350 CDI 231 л.с.) с постоянным полным приводом 4Matic',
                strengths: [
                  'Поздние версии с завода получили более стойкие фиолетовые прокладки теплообменника.',
                  'Способен пройти 240 000–280 000+ км при замене масла каждые 10 000–15 000 км.'
                ],
                watchouts: [
                  'На машинах 2009–2010 гг. проверять течь в развале V6 и сервопривод вихревых заслонок EKAS.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.',
                  'Проверить уровень антифриза, форсунки и патрубки турбины на отсутствие нагара и подтёков масла.',
                  'Убедиться в трассовых пробегах и замене малозольного масла каждые 10 000–15 000 км.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно 8 л малозольного масла (10–15 тыс. км), топливный фильтр и прогоны по трассе',
                    cost: '€220–350',
                    ifIgnored: 'Старое масло коксует турбину V6 и ускоряет засорение сажевого фильтра',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), проверить красное кольцо турбины (6 лет), раздатку и редуктор 4MATIC',
                    cost: '€460–750',
                    ifIgnored: 'Момент 500–620 Нм быстро старит масло, а дубовая к 6 годам резинка льёт на моторчик',
                    damageCost: '€1 900–3 300'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Сменить масло в АКПП, раздатке и переднем редукторе + кольцо турбины',
                    cost: '€450–700',
                    ifIgnored: 'Гул подшипников полного привода, пинки и поломка привода заслонок (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 200–3 800'
                  },
                  {
                    tier: 'red',
                    km: '140 000–190 000 км • 9–11 лет',
                    action: 'Заменить прокладки теплообменника в развале и проверить передний кардан',
                    cost: '€1 050–1 650',
                    ifIgnored: 'Разбитая крестовина кардана пробивает корпус коробки передач (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€3 500–6 000'
                  },
                  {
                    tier: 'orange',
                    km: '175 000–225 000 км • 11–13 лет',
                    action: 'Промыть сажевый фильтр, заменить датчик противодавления и блок розжига',
                    cost: '€520–880',
                    ifIgnored: 'Аварийный режим на трассе и проблемы с пуском зимой (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 700'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить цепь V6, подшипники раздатки и передние приводы 4MATIC',
                    cost: '€1 300–2 100',
                    ifIgnored: 'Гул в трансмиссии и треск цепи при запуске (узлы и жидкости также стареют с годами)',
                    damageCost: '€3 200–5 200'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 8.5,
            badges: {
              en: ['7G-Tronic + 4Matic AWD', 'Watch Transfer Case & Shafts'],
              de: ['7G-Tronic + 4Matic Allrad', 'Verteilergetriebe & Kardanwelle'],
              ru: ['7G-Tronic + привод 4Matic', 'Контроль раздатки и кардана']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.0,
            badges: {
              en: ['Facelift Electrics Improved', 'Check ELV Lock & Taillights'],
              de: ['Facelift-Elektrik verbessert', 'ELV & Rückleuchten-Masse prüfen'],
              ru: ['Улучшенная электрика рест.', 'Замок руля ELV и масса фонарей']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 8.8,
            badges: {
              en: ['Bank-Vault Switchgear Feel', 'Tactile Rotary Controller'],
              de: ['Solide Haptik & Drehregler', 'Wertige Schalter & Klima'],
              ru: ['Эталонная сборка и кнопки', 'Удобная шайба управления']
            }
          },
          visibilityManeuverability: {
            score: 8.0,
            badges: {
              en: ['11.1 m 4Matic Turning Circle', 'Upright Pillars & Clear Mirrors'],
              de: ['11,1 m 4Matic-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 11,1 м (4Matic)', 'Хороший обзор и зеркала']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.4,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.5,
            badges: {
              en: ['1,800 kg Braked Tow', 'AWD Traction in Snow / Mud'],
              de: ['1.800 kg Anhängelast', 'Allrad-Grip am Berg & Schnee'],
              ru: ['Прицеп до 1 800 кг', 'Полный привод на скользком']
            }
          },
          accelerationOvertaking: {
            score: 9.2,
            badges: {
              en: ['0–100 km/h: 6.4 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,4 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,4 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.8,
            badges: {
              en: ['540 Nm Low-RPM Surge', 'Effortless 80–120 Passing'],
              de: ['540 Nm ab 1.400/min', 'Müheloses Überholen im 6.'],
              ru: ['540 Н·м с низов', 'Молниеносный обгон на трассе']
            }
          },
          handlingAgility: {
            score: 9.3,
            badges: {
              en: ['4Matic All-Weather Grip', 'Planted High-Speed Composure'],
              de: ['4Matic Allwetter-Traktion', 'Stoische Spurstabilität'],
              ru: ['Уверенный держак 4Matic', 'Непоколебимость на трассе']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 6.8,
            badges: {
              en: ['7.5 L/100km', '174 g/km CO2'],
              de: ['7,5 L/100km', '174 g/km CO2'],
              ru: ['7,5 л/100 км', '174 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 4.7,
            badges: {
              en: ['High ~€400/yr V6 Tax • Euro 5', 'High V6 4Matic Insurance'],
              de: ['Hohe ~400-€-V6-Steuer • Euro 5', 'Teure V6-4Matic-Versicherung'],
              ru: ['Высокий налог V6 ~€400 • Euro 5', 'Дорогая страховка V6 4Matic']
            }
          },
          maintenanceRepairCosts: {
            score: 3.9,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & 4MATIC/diff oil + fuel filter', de: '7G-Tronic-Öl (722.9) + Filter, Diff-/4MATIC-Öl & Dieselfilter wechseln', ru: 'Замена масла 7G-Tronic + фильтр, масла редукторов и топливный фильтр' }, cost: '€360–520' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace turbo-inlet orange seal (prevents oil dripping on swirl motor!)', de: 'Rote Turbolader-Dichtung ersetzen (schützt Drallklappen-Stellmotor!)', ru: 'Замена уплотнительного кольца на впуске турбины (защита мотора заслонок!)' }, cost: '€120–200' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'OM642 V-valley oil-cooler seals (upgrade to purple Viton) & swirl motor', de: 'OM642 Ölkühlerdichtungen im V (lila Viton) & Drallklappen-Stellmotor', ru: 'Прокладки теплообменника в развале V OM642 (фиолетовые Viton) и актуатор заслонок' }, cost: '€1,100–1,800', risk: { en: 'Heavy oil pool in V-valley drips onto starter & shorts swirl actuator', de: 'Ölsee im V tropft auf Anlasser und zerstört den Drallklappen-Motor', ru: 'Масло в развале заливает стартер и выводит из строя актуатор заслонок' }, damage: '€2,200–3,400' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: '600+ Nm 7G-Tronic conductor plate & rear subframe rust check', de: '7G-Tronic-Steuereinheit (bei 510–620 Nm) & Hinterachsträger-Check', ru: 'Плата АКПП 7G-Tronic (при 510–620 Н·м) и осмотр заднего подрамника' }, cost: '€750–1,450', risk: { en: 'Harsh shifts / limp mode or rear subframe rust', de: 'Harte Schaltschläge / Notlauf oder Hinterachs-Korrosion', ru: 'Пинки / аварийный режим АКПП или коррозия подрамника' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['8.5L Oil + 4Matic Drivetrain', 'Oil Cooler Seal & Shaft Labor'],
              de: ['8,5 L Öl + 4Matic-Wartung', 'Ölkühler- & Allrad-Arbeiten teuer'],
              ru: ['8,5 л масла + ТО 4Matic', 'Дорогой ремонт теплообменника']
            }
          },
          depreciationResale: {
            score: 8.6,
            badges: {
              en: ['High Alpine / Winter Demand', 'Strong 4Matic Resale'],
              de: ['Hohe Allrad-Nachfrage', 'Sehr wertstabile 4Matic-Modelle'],
              ru: ['Высокий спрос на 4Matic', 'Хорошо держит цену']
            }
          }
        }
      },
      {
        id: 'c350-cdi-265',
        defaultGearboxId: '7g-tronic-plus',
        gearboxes: [{ id: '7g-tronic-plus', isDefault: true }],
        buyerFitGroup: 'v6-diesel',
        dossierGroup: 'diesel-7g',
        isDefault: false,
        fuelType: 'diesel',
        hp: 265,
        shortTitle: 'C 350 CDI (265 HP)',
        fullName: '2012 Mercedes-Benz C 350 CDI BlueEfficiency',
        engineBadge: 'C 350 CDI V6 • 265 HP',
        engineSubLabel: {
          en: '3.0L V6 Diesel OM642 LS (06/2011–03/2014) • 7G-Tronic Plus • 620 Nm',
          de: '3.0L V6-Diesel OM642 LS (06/2011–03/2014) • 7G-Tronic Plus • 620 Nm',
          ru: '3.0 V6 Дизель OM642 LS (06/2011–03/2014) • 7G-Tronic Plus • 620 Н·м'
        },
        rarityLabel: {
          en: '620 NM DIESEL KING',
          de: '620 NM AUTOBAHN-KÖNIG',
          ru: 'КОРОЛЬ АВТОБАНА (620 Н·М)'
        },
        originalMsrp: {
          en: '€46,231 New',
          de: '46.231 € Neu',
          ru: '€46 231 новый'
        },
        estUsedPrice: '€13,500',
        perkLabel: {
          en: '✦ Monstrous 620 Nm Torque • 6.0s 0–100 • Updated OM642 LS + 7G-Plus',
          de: '✦ Gigantische 620 Nm Drehmoment • 6,0s 0–100 • Überarbeiteter OM642 LS',
          ru: '✦ Колоссальные 620 Н·м • 6,0 с до 100 • Доработанный V6 OM642 LS'
        },
        remarkablePositives: {
          en: [
            '620 NM TORQUE MONSTER',
            '6.0S 0–100 • 250 KM/H AUTOBAHN KING',
            'ONLY 7.2 L/100KM FOR 265 HP V6',
            'REVISED OM642 LS WITH UPGRADED SEALS',
            'FACELIFT CABIN + 7G-TRONIC PLUS'
          ],
          de: [
            '620 NM DREHMOMENT-MONSTER',
            '6,0S 0–100 • 250 KM/H AUTOBAHN-KÖNIG',
            'NUR 7,2 L/100KM FÜR 265 PS V6',
            'ÜBERARBEITETER OM642 LS (VERBESSERTE DICHTUNGEN)',
            'MOPF-INNENRAUM + 7G-TRONIC PLUS'
          ],
          ru: [
            'МОНСТРУОЗНАЯ ТЯГА 620 Н·М',
            '6,0 С ДО 100 • МАКС. 250 КМ/Ч',
            'РАСХОД ЛИШЬ 7,2 Л/100 КМ ПРИ 265 Л.С.',
            'МОДЕРНИЗИРОВАННЫЙ OM642 LS (УЛУЧШЕННЫЕ ПРОКЛАДКИ)',
            'РЕСТАЙЛИНГ + АКПП 7G-TRONIC PLUS'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH 3.0L DIESEL TAX & INSURANCE',
            'HIGH TORQUE WEARS REAR TYRES & DRIVELINE FASTER',
            'STILL WATCH OM642 COOLER SEALS AT HIGH KM'
          ],
          de: [
            'HOHE 3.0L DIESELSTEUER & VERSICHERUNG',
            'HOHES DREHMOMENT VERSCHLEISST HINTERREIFEN & ANTRIEB SCHNELLER',
            'AB HOHER LAUFLEISTUNG ÖLKÜHLER PRÜFEN'
          ],
          ru: [
            'ДОРОГОЙ НАЛОГ И СТРАХОВКА ЗА 3.0 Л',
            'ВЫСОКИЙ МОМЕНТ БЫСТРЕЕ ИЗНАШИВАЕТ ЗАДНИЕ ШИНЫ И ПРИВОД',
            'НА БОЛЬШИХ ПРОБЕГАХ СЛЕДИТЬ ЗА ТЕПЛООБМЕННИКОМ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.3,
          comfortCabin: 8.8,
          spacePracticality: 7.6,
          performanceDynamics: 9.2,
          runningCostsTco: 7.1
        },
        specOverrides: {
          engineName: { en: '3.0L V6 OM642 265 (620 Nm)', de: '3.0L V6 OM642 265 PS (620 Nm)', ru: '3.0L V6 OM642 265 (620 Н·м)' },
          forcedInduction: '@turbo', injection: '@commonRail', timingDrive: '@chain',
          gearbox: '@auto7',
          clutchDmf: '@torqueConv', payloadRoof: '540 kg · 100 kg', towingBraked: '1,800 kg',
          sprint0100: '6.0 s', topSpeed: '250 km/h', peakTorque: '620 Nm @ 1,600 rpm',
          passingPunch: { en: 'Locomotive 620 Nm V6 Thrust', de: 'Lokomotiv-Schub (620 Nm)', ru: 'Локомотивная тяга 620 Н·м' },
          realWorldFuel: '7.2 L/100km', tankRange: '66 L (~915 km)', euroNorm: 'Euro 5 (Diesel)', taxInsurance: '@tierHigh', serviceWear: '@tierHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 8.8,
            badges: {
              en: ['Revised 265 HP OM642 LS', 'Factory Purple Viton Seals'],
              de: ['Überarbeiteter OM642 LS (265 PS)', 'Ab Werk Viton-Dichtungen'],
              ru: ['Доработанный OM642 LS (265 л.с.)', 'Усиленные прокладки Viton']
            },
            specBreakdown: {
              engineName: { specs: [{ k: 'engineCode', v: 'OM642 LS (265 HP) · 2,987 cc V6' }, { k: 'architecture', v: { en: '72° V6 Upgraded Diesel · 620 Nm + 7G-Tronic Plus', de: '72°-V6 Überarbeiteter Diesel · 620 Nm + 7G-Tronic Plus', ru: 'V6 72° модернизированный дизель · 620 Н·м + 7G-Tronic Plus' } }], note: { en: 'The diesel flagship: 620 Nm (more than a C63 AMG!) and 6.0 s sprint while still returning 7.2 L/100km; keep 7G-Tronic Plus oil fresh every 60,000 km.', de: 'Das Diesel-Flaggschiff: 620 Nm (mehr als ein C63 AMG!) und 6,0 s bei 7,2 L Verbrauch; 7G-Tronic-Plus-Öl alle 60.000 km pflegen.', ru: 'Дизельный флагман: 620 Н·м (больше, чем у C63 AMG!) и 6,0 с до 100 при расходе 7,2 л; меняйте масло в 7G-Tronic каждые 60 000 км.' } },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi', timingDrive: '@timingDynamic'
            },
            dossier: {
              en: {
                headline: 'Ultimate Non-AMG Diesel W204— Revised OM642 LS Delivers 620 Nm & Improved Reliability',
                strengths: [
                  'Upgraded ball-bearing Garrett turbocharger, improved oil cooler Viton seals, and cleaner combustion drop fuel consumption to ~7.2 L/100km.',
                  'Matches the V8 C 55 AMG’s real-world highway acceleration from 80 to 200 km/h while cruising at 1,800 rpm.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Even with factory Viton updates, check V-valley cooler and turbo inlet seals past 180,000+ km.',
                  'Keep oil changes under 15,000 km and take regular highway runs to protect the DPF and turbo.'
                ],
                beforeYouBuy: [
                  'Ensure the 620 Nm V6 shifts smoothly through all 7 gears under both gentle and brisk throttle with zero shudder.',
                  'Inspect turbo intake seals, glow plug light behavior, and verify clean exhaust / soot filter status with zero fault lights.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual 8-litre low-ash V6 diesel oil (10–15k), clean fuel filter & motorway runs for soot filter',
                    cost: '€220–350',
                    ifIgnored: 'Stretched oil services coke V6 turbo bearings & overload soot filter early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Change 7G auto oil (60k / 4–5 yrs), check 6-yr aging red turbo intake seal/belt & purple V-valley cooler seal dryness check',
                    cost: '€460–750',
                    ifIgnored: '500–620 Nm ages auto fluid fast & hardened 6-yr red rubber seal drips oil onto swirl motor',
                    damageCost: '€1,900–3,300'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Change 7-speed gearbox oil & replace weeping turbo air inlet seal',
                    cost: '€380–600',
                    ifIgnored: '620 Nm wears old fluid fast; oil drips spoil swirl motor below (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,600–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '145,000–190,000 km • 9–11 yrs',
                    action: 'Replace V6 exhaust backpressure sensor, glow plugs & worn engine mounts',
                    cost: '€520–850',
                    ifIgnored: 'Power cuts on motorway & heavy V6 torque shakes cabin (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'orange',
                    km: '175,000–225,000 km • 11–13 yrs',
                    action: 'Refresh purple V-valley oil cooler seals if weeping & clean soot filter',
                    cost: '€950–1,500',
                    ifIgnored: 'Oil puddles under car & choked exhaust straining turbocharger (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,400–3,800'
                  },
                  {
                    tier: 'orange',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Check timing chain stretch, turbo actuator & propshaft flex discs',
                    cost: '€1,200–1,950',
                    ifIgnored: 'Chain rattle, driveline thump under hard pull & boost failure (rubber/plastic & seals also harden with age)',
                    damageCost: '€3,000–4,800'
                  }
                ]
              },
              de: {
                headline: 'Der ultimative nicht-AMG Diesel-W204— 620 Nm mit überarbeitetem OM642 LS & Top-Verbrauch',
                strengths: [
                  'Kugelgelagerter Garrett-Lader, verbesserte Viton-Ölkühlerdichtungen und geringere Reibung drücken den Verbrauch auf ~7,2 L/100km.',
                  'Drückt zwischen 80 und 200 km/h wie ein Achtzylinder und bleibt dabei extrem sparsam.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Ab 180.000+ km trotzdem Ölkühler-Bereich und Turbo-Ansaugdichtung auf leichtes Schwitzen prüfen.',
                  'Ölwechsel unter 15.000 km einhalten und regelmäßig Autobahn fahren, um DPF und Turbo zu schonen.'
                ],
                beforeYouBuy: [
                  'Sicherstellen, dass die 7-Gang-Automatik die gewaltigen 620 Nm bei sanfter wie zügiger Fahrt völlig ruckfrei verarbeitet.',
                  'Turbo-Dichtung, Vorglühleuchte und Partikelfilter-Status ohne Fehleranzeige prüfen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich 8 Liter Low-Ash-V6-Öl (10–15 Tkm), Dieselfilter & regelmäßige Autobahn-Regeneration',
                    cost: '220–350 €',
                    ifIgnored: 'Überzogenes Altöl verkokt den großen V6-Turbolader & füllt den Partikelfilter früh',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: '7G-Automatiköl (60 Tkm / 4–5 J.) wechseln, rote 6-J.-Turbodichtung/Riemen & trockenen Sitz im V-Motorraum prüfen',
                    cost: '460–750 €',
                    ifIgnored: '500–620 Nm altern Getriebeöl rasch; harte rote Dichtung tropft auf den Stellmotor',
                    damageCost: '1.900–3.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: '7G-Automatiköl frühzeitig wechseln & Turbo-Ansaugdichtung erneuern',
                    cost: '380–600 €',
                    ifIgnored: '620 Nm altern altes Öl schnell; Öltropfen schädigen Klappenmotor',
                    damageCost: '1.600–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '145.000–190.000 km • 9–11 J.',
                    action: 'Abgasgegendrucksensor, Glühkerzen & kräftig belastete Motorlager tauschen',
                    cost: '520–850 €',
                    ifIgnored: 'Notlauf bei Vollgas & spürbares Wanken beim Lastwechsel (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'orange',
                    km: '175.000–225.000 km • 11–13 J.',
                    action: 'Violette Ölkühler-Dichtungen bei Ölfeuchte erneuern & Partikelfilter reinigen',
                    cost: '950–1.500 €',
                    ifIgnored: 'Ölflecken unterm Auto & hohe Hitze am großen Turbolader (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.400–3.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette, Turbo-Stellmotor & Kardan-Gelenkscheiben prüfen/tauschen',
                    cost: '1.200–1.950 €',
                    ifIgnored: 'Kettenrasseln, Schläge im Antrieb & aussetzender Ladedruck (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '3.000–4.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Вершина дизельных W204— обновлённый OM642 LS с 620 Н·м и улучшенными уплотнениями',
                strengths: [
                  'Новая турбина на шарикоподшипниках, заводские прокладки Viton и улучшенный тепловой режим снизили расход до ~7,2 л/100 км.',
                  'На обгонах с 80 до 200 км/ч едет на уровне спорткаров при минимальных оборотах.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'К пробегу 180+ тыс. км всё равно стоит инспектировать сухость развала V6 и стык впуска турбины.',
                  'Меняйте масло чаще 15 000 км и регулярно выезжайте на трассу для защиты DPF и турбины.'
                ],
                beforeYouBuy: [
                  'Убедитесь, что V6 с 620 Н·м плавно переключает все 7 передач при мягком и резком газе без вибраций.',
                  'Осмотрите входной патрубок турбины, работу свечей накала и отсутствие ошибок по сажевому фильтру.',
                  'Запустить дизель на холодную — работа должна быть ровной без стука форсунок и сизого дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно 8 л малозольного масла (10–15 тыс. км), топливный фильтр и прогоны по трассе',
                    cost: '€220–350',
                    ifIgnored: 'Старое масло коксует турбину V6 и ускоряет засорение сажевого фильтра',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Сменить масло 7G-Tronic (60 тыс. / 4–5 лет), проверить красное кольцо турбины (6 лет) и сухость развала V6',
                    cost: '€460–750',
                    ifIgnored: 'Момент 500–620 Нм быстро старит масло, а дубовая к 6 годам резинка льёт на моторчик',
                    damageCost: '€1 900–3 300'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Сменить масло в 7-ступ. АКПП и заменить уплотнитель на впуске турбины',
                    cost: '€380–600',
                    ifIgnored: 'Момент 620 Нм быстро старит масло, а течь портит привод заслонок (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 600–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '145 000–190 000 км • 9–11 лет',
                    action: 'Заменить датчик противодавления выхлопа, свечи накала и опоры двигателя',
                    cost: '€520–850',
                    ifIgnored: 'Аварийный режим на обгоне и сильные толчки от тяги V6 (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'orange',
                    km: '175 000–225 000 км • 11–13 лет',
                    action: 'При появлении течи обновить прокладки в развале V6 и промыть сажевый фильтр',
                    cost: '€950–1 500',
                    ifIgnored: 'Лужи масла под машиной и перегрев турбины из-за забитого выхлопа (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 400–3 800'
                  },
                  {
                    tier: 'orange',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Проверить цепь ГРМ, актуатор турбины и эластичные муфты кардана',
                    cost: '€1 200–1 950',
                    ifIgnored: 'Звон цепи, удары в трансмиссии под газом и потеря наддува (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€3 000–4 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.0,
            badges: {
              en: ['Updated 7G-Tronic Plus', 'Handles 620 Nm • 60k ATF'],
              de: ['Starke 7G-Tronic Plus', '620 Nm fest • ATF pflegen'],
              ru: ['Усиленный 7G-Tronic Plus', 'Держит 620 Н·м • Сервис масла']
            }
          },
          buildQualityRust: {
            score: 6.3,
            badges: {
              en: ['Galvanized Body Panels', 'Known Rear Subframe Rust'],
              de: ['Verzinkte Außenhaut', 'Hinterachsträger-Rost bekannt'],
              ru: ['Оцинкованные панели кузова', 'Коррозия заднего подрамника']
            }
          },
          electronicsReliability: {
            score: 8.4,
            badges: {
              en: ['Late Facelift W204 Electrics', 'Fewer ELV & Taillight Faults'],
              de: ['Späte W204-Facelift-Elektrik', 'Ausgereifte Steuergeräte'],
              ru: ['Доработанная электрика Mopf', 'Минимум проблем с ELV']
            }
          },
          rideNoiseComfort: {
            score: 9.2,
            badges: {
              en: ['Whisper-Quiet V6 Refinement', 'Agility Control Highway Soak'],
              de: ['Flüsterleise V6-Laufkultur', 'Souveräne Autobahn-Federung'],
              ru: ['Тишина и плавность V6', 'Премиальный комфорт на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 9.2,
            badges: {
              en: ['Top Facelift Cabin & Trim', 'Color Cluster + Executive Spec'],
              de: ['Top-Facelift-Verarbeitung', 'Farb-KI & gehobene Ausstattung'],
              ru: ['Богатый салон рестайлинга', 'Хорошее штатное оснащение']
            }
          },
          visibilityManeuverability: {
            score: 8.5,
            badges: {
              en: ['10.8 m Tight RWD Turn', 'Upright Pillars & Clear Mirrors'],
              de: ['Enge 10,8 m RWD-Wendekreis', 'Schmale Säulen & gute Übersicht'],
              ru: ['Разворот 10,8 м (задний привод)', 'Тонкие стойки и обзорность']
            }
          },
          safetyProtection: {
            score: 8.9,
            badges: {
              en: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Attention'],
              de: ['Euro NCAP 5★ (2007/09)', '7 Airbags + Pre-Safe + Müdigkeit'],
              ru: ['Euro NCAP 5★ (2007/09)', '7 подушек + Pre-Safe']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.8,
            badges: {
              en: ['Great Tall-Driver Front Fit', 'Tight Rear Legroom & Tunnel'],
              de: ['Viel Platz für große Fahrer', 'Knapper Fond & Kardantunnel'],
              ru: ['Удобно высоким водителям', 'Тесно сзади и высокий тоннель']
            }
          },
          interiorBootSpace: {
            score: 6.4,
            badges: {
              en: ['475L Sedan Boot', 'Split Rear Seats Often Optional'],
              de: ['475L Stufenheck-Kofferraum', 'Umklappbare Bank oft Extra'],
              ru: ['Багажник седана 475 л', 'Складная спинка — опция']
            }
          },
          payloadTowing: {
            score: 7.2,
            badges: {
              en: ['1,800 kg Braked Tow', '620 Nm Effortless Pulling'],
              de: ['1.800 kg Anhängelast', '620 Nm Zugkraft-Gigant'],
              ru: ['Прицеп до 1 800 кг', 'Неудержимая тяга 620 Н·м']
            }
          },
          accelerationOvertaking: {
            score: 9.4,
            badges: {
              en: ['0–100 km/h: 6.0 s', '250 km/h Top Speed'],
              de: ['0–100 km/h: 6,0 s', '250 km/h Spitze'],
              ru: ['0–100 км/ч: 6,0 с', 'Макс. 250 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 9.8,
            badges: {
              en: ['620 Nm Low-RPM Surge', 'Effortless 80–120 Passing'],
              de: ['620 Nm ab 1.400/min', 'Müheloses Überholen im 6.'],
              ru: ['620 Н·м с низов', 'Молниеносный обгон на трассе']
            }
          },
          handlingAgility: {
            score: 9.3,
            badges: {
              en: ['RWD-Only 620 Nm Thrill', 'Sport Suspension Common'],
              de: ['Reiner Heckantrieb mit 620 Nm', 'Oft mit Sportfahrwerk'],
              ru: ['Задний привод и 620 Н·м', 'Часто со спортподвеской']
            }
          },
          brakingPerformance: {
            score: 8.4,
            badges: {
              en: ['100–0 km/h: 35.5 m', 'Strong Autobahn Stopping Power'],
              de: ['100–0 km/h: 35,5 m', 'Starke Autobahn-Verzögerung'],
              ru: ['100–0 км/ч: 35,5 м', 'Уверенное торможение с высоких скоростей']
            }
          },
          efficiencyFuel: {
            score: 7.3,
            badges: {
              en: ['7.2 L/100km', '154 g/km CO2'],
              de: ['7,2 L/100km', '154 g/km CO2'],
              ru: ['7,2 л/100 км', '154 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 4.8,
            badges: {
              en: ['High ~€370/yr V6 Tax • Euro 5', 'High 265 HP Insurance Class'],
              de: ['Hohe ~370-€-V6-Steuer • Euro 5', 'Teure 265-PS-Versicherung'],
              ru: ['Высокий налог V6 ~€370 • Euro 5', 'Дорогая страховка за 265 л.с.']
            }
          },
          maintenanceRepairCosts: {
            score: 4.7,
            repairGuide: {
              routine: [
                { when: { en: 'Every 60,000 km', de: 'Alle 60.000 km', ru: 'Каждые 60 000 км' }, action: { en: 'Flush 7G-Tronic (722.9) ATF + filter & 4MATIC/diff oil + fuel filter', de: '7G-Tronic-Öl (722.9) + Filter, Diff-/4MATIC-Öl & Dieselfilter wechseln', ru: 'Замена масла 7G-Tronic + фильтр, масла редукторов и топливный фильтр' }, cost: '€360–520' },
                { when: { en: 'Every 100,000 km', de: 'Alle 100.000 km', ru: 'Каждые 100 000 км' }, action: { en: 'Replace turbo-inlet orange seal (prevents oil dripping on swirl motor!)', de: 'Rote Turbolader-Dichtung ersetzen (schützt Drallklappen-Stellmotor!)', ru: 'Замена уплотнительного кольца на впуске турбины (защита мотора заслонок!)' }, cost: '€120–200' }
              ],
              critical: [
                { when: { en: '120,000–190,000 km', de: '120.000–190.000 km', ru: '120 000–190 000 км' }, action: { en: 'OM642 V-valley oil-cooler seals (upgrade to purple Viton) & swirl motor', de: 'OM642 Ölkühlerdichtungen im V (lila Viton) & Drallklappen-Stellmotor', ru: 'Прокладки теплообменника в развале V OM642 (фиолетовые Viton) и актуатор заслонок' }, cost: '€1,100–1,800', risk: { en: 'Heavy oil pool in V-valley drips onto starter & shorts swirl actuator', de: 'Ölsee im V tropft auf Anlasser und zerstört den Drallklappen-Motor', ru: 'Масло в развале заливает стартер и выводит из строя актуатор заслонок' }, damage: '€2,200–3,400' },
                { when: { en: '150,000–220,000 km', de: '150.000–220.000 km', ru: '150 000–220 000 км' }, action: { en: '600+ Nm 7G-Tronic conductor plate & rear subframe rust check', de: '7G-Tronic-Steuereinheit (bei 510–620 Nm) & Hinterachsträger-Check', ru: 'Плата АКПП 7G-Tronic (при 510–620 Н·м) и осмотр заднего подрамника' }, cost: '€750–1,450', risk: { en: 'Harsh shifts / limp mode or rear subframe rust', de: 'Harte Schaltschläge / Notlauf oder Hinterachs-Korrosion', ru: 'Пинки / аварийный режим АКПП или коррозия подрамника' }, damage: '€2,000–3,200' }
              ]
            },
            badges: {
              en: ['Upgraded Seals Cut Leaks', '620 Nm Tyre Wear + V6 Service'],
              de: ['Dichtungen verbessert', '620 Nm Reifenverschleiß + V6-TO'],
              ru: ['Улучшенные прокладки с завода', '620 Н·м изнашивают шины и трансмиссию']
            }
          },
          depreciationResale: {
            score: 9.0,
            badges: {
              en: ['Cult 265 HP Collector Status', 'Very Firm Resale Prices'],
              de: ['Gesuchter 265-PS-Liebling', 'Extrem wertstabil'],
              ru: ['Культовая версия 265 л.с.', 'Высочайшая ликвидность']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Obsidian Black', code: '197', hex: '#181a1f', glow: 'rgba(66, 76, 92, 0.18)' },
    { name: 'Iridium Silver', code: '775', hex: '#b6bec6', glow: 'rgba(182, 190, 198, 0.16)' },
    { name: 'Tenorite Grey', code: '755', hex: '#4c535b', glow: 'rgba(76, 83, 91, 0.18)' },
    { name: 'Palladium Silver', code: '792', hex: '#8c949d', glow: 'rgba(140, 148, 157, 0.18)' },
    { name: 'Calcite White', code: '650', hex: '#f2f4f6', glow: 'rgba(242, 244, 246, 0.16)' },
    { name: 'Diamond White Bright', code: '799', hex: '#eceef2', glow: 'rgba(236, 238, 242, 0.16)' },
    { name: 'Fire Opal Red', code: '590', hex: '#ba1f26', glow: 'rgba(186, 31, 38, 0.2)' },
    { name: 'Cavansite Blue', code: '890', hex: '#1e3454', glow: 'rgba(30, 52, 84, 0.2)' },
    { name: 'Tanzanite Blue', code: '359', hex: '#26384d', glow: 'rgba(38, 56, 77, 0.2)' },
    { name: 'Cuprite Brown', code: '497', hex: '#4a382f', glow: 'rgba(74, 56, 47, 0.18)' },
    { name: 'Indium Grey', code: '963', hex: '#63686f', glow: 'rgba(99, 104, 111, 0.18)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: 'c220-cdi-om651',
    defaultGroupKey: 'cdi-4cyl',
    engineCosts: {
      'c180-kompressor-1.8':    { group: 'kompressor', avgFuelL100: 8.2,  fuelPrice: 1.75, tax: 184, ins: 680, service: 390 },
      'c180-kompressor-1.6-be': { group: 'kompressor', avgFuelL100: 7.8,  fuelPrice: 1.75, tax: 146, ins: 660, service: 380 },
      'c180-cgi-1.8':           { group: 'cgi-turbo',  avgFuelL100: 7.6,  fuelPrice: 1.75, tax: 152, ins: 690, service: 430 },
      'c180-1.6-turbo':         { group: 'cgi-turbo',  avgFuelL100: 7.0,  fuelPrice: 1.75, tax: 124, ins: 680, service: 400 },
      'c200-kompressor':        { group: 'kompressor', avgFuelL100: 8.5,  fuelPrice: 1.75, tax: 198, ins: 730, service: 410 },
      'c200-cgi':               { group: 'cgi-turbo',  avgFuelL100: 7.8,  fuelPrice: 1.75, tax: 164, ins: 740, service: 440 },
      'c250-cgi':               { group: 'cgi-turbo',  avgFuelL100: 8.2,  fuelPrice: 1.75, tax: 180, ins: 790, service: 460 },
      'c230-v6':                { group: 'v6-petrol',  avgFuelL100: 9.8,  fuelPrice: 1.75, tax: 268, ins: 820, service: 490 },
      'c280-c300-v6':           { group: 'v6-petrol',  avgFuelL100: 10.2, fuelPrice: 1.75, tax: 310, ins: 860, service: 510 },
      'c350-m272':              { group: 'v6-petrol',  avgFuelL100: 10.8, fuelPrice: 1.75, tax: 356, ins: 940, service: 550 },
      'c350-cgi':               { group: 'v6-petrol',  avgFuelL100: 9.6,  fuelPrice: 1.75, tax: 320, ins: 950, service: 570 },
      'c350-m276':              { group: 'v6-petrol',  avgFuelL100: 8.8,  fuelPrice: 1.75, tax: 278, ins: 960, service: 530 },
      'c180-cdi':               { group: 'cdi-4cyl',   avgFuelL100: 5.3,  fuelPrice: 1.65, tax: 248, ins: 680, service: 410 },
      'c200-cdi-om646':         { group: 'cdi-4cyl',   avgFuelL100: 6.1,  fuelPrice: 1.65, tax: 320, ins: 720, service: 390 },
      'c200-cdi-om651':         { group: 'cdi-4cyl',   avgFuelL100: 5.5,  fuelPrice: 1.65, tax: 258, ins: 710, service: 420 },
      'c220-cdi-om646':         { group: 'cdi-4cyl',   avgFuelL100: 6.3,  fuelPrice: 1.65, tax: 320, ins: 760, service: 400 },
      'c220-cdi-om651':         { group: 'cdi-4cyl',   avgFuelL100: 5.6,  fuelPrice: 1.65, tax: 266, ins: 750, service: 430 },
      'c250-cdi':               { group: 'cdi-4cyl',   avgFuelL100: 5.9,  fuelPrice: 1.65, tax: 278, ins: 810, service: 470 },
      'c320-cdi':               { group: 'cdi-v6',     avgFuelL100: 7.6,  fuelPrice: 1.65, tax: 460, ins: 920, service: 560 },
      'c300-cdi-4matic':        { group: 'cdi-v6',     avgFuelL100: 7.5,  fuelPrice: 1.65, tax: 430, ins: 910, service: 570 },
      'c350-cdi-265':           { group: 'cdi-v6',     avgFuelL100: 7.2,  fuelPrice: 1.65, tax: 415, ins: 950, service: 580 }
    },
    groups: {
      kompressor: {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 15% (Chassis)', note: 'Strong suspension and brake pass rates; watch rear axle subframe corrosion' },
            { source: 'ADAC Pannenstatistik', value: 'Solid (Check Chain)', note: 'Simple port injection avoids HPFP bills, though simplex M271 chain needs care' },
            { source: 'WhatCar? Survey', value: '93.8% Reliability', note: 'Praised for sturdy 5G-Tronic pairing; main glitches are ESL steering locks' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 15 % (Fahrwerk)', note: 'Starke Quoten bei Achsen und Bremsen; Hinterachsträger auf Rost prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Solide (Steuerkette)', note: 'Robuste Saugrohreinspritzung ohne Injektor-Ärger; M271-Kette beobachten' },
            { source: 'WhatCar? Umfrage', value: '93,8 % Zuverlässigkeit', note: 'Sehr langlebig mit 5G-Tronic; typische Alters-Macken sind ELV-Lenkschlösser' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-15% (шасси)', note: 'Отличные показатели подвески и тормозов; важно проверять коррозию заднего подрамника' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен (следить за цепью)', note: 'Простой распределённый впрыск без дорогого ТНВД, но тонкая цепь M271 требует внимания' },
            { source: 'Рейтинг WhatCar?', value: '93,8% надёжности', note: 'Хорош в паре с 5G-Tronic; типичная возрастная болячка — блокиратор руля ELV' }
          ]
        },
        extendedChecks: {
          en: [
            'Inspect the rear axle subframe thoroughly on a lift — salt corrosion often triggers Mercedes goodwill replacement.',
            'Listen closely on cold startup for 2–3 seconds of M271 timing-chain rattle and check camshaft adjuster oil weeping.',
            'Confirm smooth steering-lock (ESL) release when inserting the key; slow or silent clicks signal imminent failure.',
            'Verify 5G-Tronic ATF fluid changes every 60,000 km and smooth shifting with zero torque-converter shudder.'
          ],
          de: [
            'Hinterachsträger auf der Hebebühne gründlich ableuchten — Durchrostungen werden oft auf Kulanz getauscht.',
            'Beim Kaltstart genau auf kurzes Rasseln der M271-Steuerkette achten und Nockenwellenversteller auf Ölverlust prüfen.',
            'Beim Einstecken des Schlüssels auf sattes Entriegeln der ELV-Lenksäule achten — Verzögerung kündigt Defekt an.',
            'Regelmäßige 60.000-km-Ölwechsel der 5G-Tronic prüfen und auf ruckfreie Wandlerübergänge achten.'
          ],
          ru: [
            'Тщательно осмотреть задний подрамник на подъёмнике — скрытая сквозная коррозия часто встречается у машин с солёных дорог.',
            'На холодном пуске послушать отсутствие 2–3-секундного треска цепи M271 и проверить магниты фазорегуляторов на течь масла.',
            'Проверить чёткий звук разблокировки руля (ESL/ELV) при вставлении ключа — заминка говорит о скором отказе.',
            'Проверить историю замены масла в АКПП 5G-Tronic каждые 60 000 км и плавность переключений под нагрузкой.'
          ]
        },
        savingsNote: {
          en: 'Higher 7.8–8.5 L/100 km fuel use than CGI turbos, yet port injection and affordable buy-in (€6,900–€7,600) avoid €1,500+ direct-injection repairs.',
          de: 'Etwas höherer Verbrauch (7,8–8,5 L/100 km) als bei den CGI-Turbos, dafür vermeidet Saugrohreinspritzung teure Injektor-Rechnungen.',
          ru: 'Расход выше, чем у турбо-версий CGI (7,8–8,5 л/100 км), но низкая цена входа и простой распределённый впрыск страхуют от дорогих форсунок.'
        },
        market: {
          supplyDemand: {
            en: 'Wide entry-level supply; well-kept Avantgarde or Elegance cars with clean rear subframes sell steadily to private buyers.',
            de: 'Großes Angebot im Einstiegssegment; gepflegte Avantgarde- oder Elegance-Exemplare mit gesundem Achsträger sind gesucht.',
            ru: 'Широкий выбор на вторичке; ухоженные Avantgarde и Elegance с живым подрамником стабильно востребованы.'
          },
          sweetSpot: {
            en: '2008–2009 C 200 Kompressor (184 HP, Avantgarde) with documented chain check & 5G-Tronic service (€7,200–€8,500).',
            de: '2008–2009 C 200 Kompressor (184 PS, Avantgarde) mit Ketten-Check und 5G-Tronic-Servicehistorie (7.200–8.500 €).',
            ru: '2008–2009 гг. C 200 Kompressor (184 л.с., Avantgarde) с проверкой цепи и историей ТО 5G-Tronic (€7 200–8 500).'
          },
          outlook3to5yr: {
            en: 'Near its bottom plateau (~€4,500–€5,800 in 3–5 yrs); clean corrosion-free C-Class petrol sedans hold steady floor value.',
            de: 'Nahe am Preisboden (ca. 4.500–5.800 € in 3–5 Jahren); rostfreie Benziner halten ihr Basisniveau sehr stabil.',
            ru: 'Близок к ценовому дну (около €4 500–5 800 через 3–5 лет); экземпляры без ржавчины хорошо держат остаточную цену.'
          }
        },
        watchoutExtra: {
          en: [
            'Simplex M271 timing chain and camshaft sprockets wear past 110,000–150,000 km; skipped replacement risks catastrophic valve damage.',
            'Rear axle subframe corrosion from inside out and ESL electronic steering lock motor wear affect pre-facelift W204s most.'
          ],
          de: [
            'Einfache M271-Steuerkette und Nockenwellenräder verschleißen oft zwischen 110.000 und 150.000 km — Ignorieren droht mit Motorschaden.',
            'Von innen rostender Hinterachsträger und verschleißende ELV-Lenkschlossmotoren sind die häufigsten Vor-MoPf-Schwachstellen.'
          ],
          ru: [
            'Однорядная цепь M271 и звёзды распредвалов нередко изнашиваются к 110–150 тыс. км — затягивание грозит встречей клапанов.',
            'Коррозия заднего подрамника изнутри и отказ моторчика блокиратора руля ELV — главные риски ранних W204.'
          ]
        }
      },
      'cgi-turbo': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 12% (MoPf 2011+)', note: 'Post-2011 facelift builds excel on suspension, lights & emissions checks' },
            { source: 'ADAC Pannenstatistik', value: 'Mixed (M271 vs M274)', note: '1.8 CGI needs chain/cam-gear proof; 2012+ 1.6L M274 is far sturdier' },
            { source: 'WhatCar? Survey', value: '93.1% Reliability', note: 'Refined highway cruiser; fuel-diluted short-trip oil accelerates M271 wear' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 12 % (ab MoPf 2011)', note: 'Facelift-Modelle ab 2011 punkten mit sehr geringen Fahrwerks- und Lichtmängeln' },
            { source: 'ADAC Pannenstatistik', value: 'Zweigeteilt (M271 / M274)', note: '1.8 CGI braucht Ketten-/Versteller-Beleg; 1.6 Turbo (M274 ab 2012) deutlich robuster' },
            { source: 'WhatCar? Umfrage', value: '93,1 % Zuverlässigkeit', note: 'Kultivierter Gleiter; Ölverdünnung bei Kurzstrecke belastet frühe M271-Steuerketten' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-12% (рестайлинг 2011+)', note: 'Рестайлинговые машины отлично проходят проверки подвески, света и экологии' },
            { source: 'ADAC Pannenstatistik', value: 'Зависит от мотора', note: '1.8 CGI требует проверки цепи и муфт; 1.6 Turbo M274 (с 2012 г.) заметно надёжнее' },
            { source: 'Рейтинг WhatCar?', value: '93,1% надёжности', note: 'Тихий и комфортный; короткие поездки разжижают масло и ускоряют износ цепи M271' }
          ]
        },
        extendedChecks: {
          en: [
            'On 1.8L M271 EVO CGI engines (C 180/200/250 CGI), insist on invoices for timing chain and cam-adjuster replacement.',
            'Check the oil filler cap and dipstick for strong petrol smell (fuel dilution on short-trip CGI direct-injection cars).',
            'On late 2012+ C 180 1.6L Turbo (M274), inspect the plastic thermostat housing and water pump for dried coolant crusts.',
            'Check the rear subframe on a lift and verify 7G-Tronic Plus transmission oil service every 60,000 km.'
          ],
          de: [
            'Bei 1,8L M271 EVO (C 180/200/250 CGI) zwingend Rechnungen über erneuerte Steuerkette und Nockenwellenversteller vorlegen lassen.',
            'Öldeckel und Messstab auf starken Benzingeruch prüfen — Kurzstreckenbetrieb führt bei CGI-Direkteinspritzern zu Ölverdünnung.',
            'Beim späten C 180 1.6 Turbo (M274 ab 2012) Kunststoff-Thermostatgehäuse und Wasserpumpe auf Kühlmittelspuren prüfen.',
            'Hinterachsträger auf der Bühne kontrollieren und 60.000-km-Getriebeölwechsel der 7G-Tronic Plus nachweisen lassen.'
          ],
          ru: [
            'На 1.8 M271 EVO (C 180/200/250 CGI) обязательно проверить заказ-наряды на замену цепи ГРМ и фазорегуляторов.',
            'Понюхать масляный щуп и крышку горловины — частые короткие поездки вызывают попадание бензина в масло.',
            'На позднем C 180 1.6 Turbo (M274, с 2012 г.) осмотреть пластиковый корпус термостата и помпу на следы антифриза.',
            'Осмотреть задний подрамник на подъёмнике и подтвердить замену масла в 7G-Tronic Plus каждые 60 000 км.'
          ]
        },
        savingsNote: {
          en: '7.0–8.2 L/100 km real fuel burn and Euro 5/6 compliance keep annual petrol bills ~€200–€350 below older Kompressors or V6 models.',
          de: '7,0–8,2 L/100 km Realverbrauch und Euro 5/6 halten die jährlichen Kraftstoffkosten rund 200–350 € unter Kompressor und V6.',
          ru: 'Расход 7,0–8,2 л/100 км и класс Euro 5/6 экономят около €200–350 в год по топливу по сравнению с Kompressor и V6.'
        },
        market: {
          supplyDemand: {
            en: 'Strong demand for 2011–2014 MoPf petrol sedans with 7G-Tronic Plus; late 1.6 M274 models command a clear premium.',
            de: 'Hohe Nachfrage nach 2011–2014 MoPf-Benzinern mit 7G-Tronic Plus; späte 1.6 M274 erzielen spürbare Preisaufschläge.',
            ru: 'Высокий спрос на рестайлинговые бензиновые седаны 2011–2014 гг. с 7G-Tronic Plus; поздний 1.6 M274 стоит дороже.'
          },
          sweetSpot: {
            en: '2012–2014 C 180 1.6 Turbo (M274) or chain-rebuilt C 200 CGI MoPf Avantgarde under 125,000 km (€9,800–€11,800).',
            de: '2012–2014 C 180 1.6 Turbo (M274) oder kettenrevidierter C 200 CGI MoPf Avantgarde unter 125.000 km (9.800–11.800 €).',
            ru: '2012–2014 гг. C 180 1.6 Turbo (M274) или обслуженный C 200 CGI MoPf Avantgarde до 125 000 км (€9 800–11 800).'
          },
          outlook3to5yr: {
            en: 'Settles around €6,500–€8,200 in 3–5 yrs; facelift 2011+ styling and Euro 5/6 petrol status preserve value better than pre-2011 diesels.',
            de: 'Pendelt sich in 3–5 Jahren bei ca. 6.500–8.200 € ein; MoPf-Optik und Euro-5/6-Benziner bleiben gefragter als frühe Diesel.',
            ru: 'Через 3–5 лет удержится в районе €6 500–8 200; свежий рестайлинг и бензин Euro 5/6 ликвиднее ранних дизелей.'
          }
        },
        watchoutExtra: {
          en: [
            '1.8L M271 EVO CGI timing chains and camshaft phasers frequently wear around 90k–130k km if oil intervals stretched beyond 12,000 km.',
            '722.9 7G-Tronic Plus transmissions require strict 60,000 km fluid/filter servicing and can develop conductor-plate speed-sensor faults.'
          ],
          de: [
            'Steuerkette und Nockenwellenversteller des 1.8 M271 EVO CGI verschleißen bei langen Ölintervallen oft schon zwischen 90 und 130 Tkm.',
            'Die 7G-Tronic Plus (722.9) braucht alle 60.000 km frisches Öl; gelegentlich melden Drehzahlsensoren der Platine Fehler.'
          ],
          ru: [
            'На 1.8 M271 EVO CGI цепь и муфты распредвалов при затянутых интервалах ТО часто сдаются уже к 90–130 тыс. км.',
            'Коробка 7G-Tronic Plus (722.9) требует замены масла каждые 60 000 км; иногда выходят из строя датчики скорости на плате.'
          ]
        }
      },
      'v6-petrol': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Strong (Low-Km Cars)', note: 'Enthusiast-owned V6s often have lower mileage; inspect rear subframe & bushes' },
            { source: 'ADAC Pannenstatistik', value: 'Mechanically Sound', note: 'Naturally aspirated M272/M276 V6s avoid turbo wear; watch early balance shafts' },
            { source: 'WhatCar? Survey', value: '94.5% Reliability', note: 'Silky 6-cylinder refinement with durable 7G-Tronic; higher routine running costs' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Stark (Gepflegte V6)', note: 'Oft geringere Laufleistungen aus Liebhaberhand; Hinterachsträger & Lager prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Mechanisch robust', note: 'Saug-V6 (M272/M276) ohne Turbo-Risiken; frühe M272 auf Ausgleichswelle prüfen' },
            { source: 'WhatCar? Umfrage', value: '94,5 % Zuverlässigkeit', note: 'Seidige Laufkultur mit standfester 7G-Tronic, aber spürbar höhere Unterhaltskosten' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Отлично (малые пробеги)', note: 'V6 часто покупались как машины выходного дня; важен осмотр подрамника и сайлентблоков' },
            { source: 'ADAC Pannenstatistik', value: 'Крепкая механика', note: 'Атмосферные V6 M272/M276 лишены турбин; на ранних M272 проверить балансирный вал' },
            { source: 'Рейтинг WhatCar?', value: '94,5% надёжности', note: 'Образцовая плавность хода и крепкая 7G-Tronic при повышенных расходах на содержание' }
          ]
        },
        extendedChecks: {
          en: [
            'For 2007 M272 V6 models (C 230 / C 280 / C 350), verify engine serial number is past the balance-shaft sprocket update.',
            'Listen on C 350 M276 (2011–2012) cold start for a 1-second chain tensioner rattle — check for updated check-valve retrofit.',
            'Check the M272 plastic intake manifold swirl-flap linkage for snapping and listen for quiet 7G-Tronic downshifts.',
            'Inspect rear axle subframe, brake pipes, and rear tyre inner edges (high V6 torque wears rear tyres quickly).'
          ],
          de: [
            'Bei frühen M272-V6 (2007, C 230 / C 280 / C 350) Motornummer auf verbesserte Ausgleichswelle prüfen.',
            'Beim C 350 M276 (2011–2012) beim Kaltstart auf kurzes 1-Sekunden-Rasseln achten (Rückschlagventil-Nachrüstung).',
            'Kunststoff-Saugrohrklappen (Drallklappen) beim M272 auf Bruch prüfen und sanftes Zurückschalten der 7G-Tronic testen.',
            'Hinterachsträger, Bremsleitungen und Innenkanten der Hinterreifen begutachten (hohes Drehmoment fordert Reifen).'
          ],
          ru: [
            'На ранних M272 (2007 г., C 230 / C 280 / C 350) проверить по номеру двигателя отсутствие дефектной шестерни балансирного вала.',
            'На C 350 M276 (2011–2012) при холодном пуске проверить отсутствие стука цепи (установка обратных клапанов).',
            'Осмотреть тяги вихревых заслонок впускного коллектора M272 и оценить плавность понижений 7G-Tronic.',
            'Проверить задний подрамник, тормозные трубки и внутренний износ задних шин.'
          ]
        },
        savingsNote: {
          en: 'No turbocharger or DPF bills offset part of the upkeep, yet 8.8–10.8 L/100 km fuel use and larger tyres/brakes cost €550–€850/yr more than a 4-cylinder.',
          de: 'Fehlende Turbo- und DPF-Teile sparen Werkstatt-Risiko, doch 8,8–10,8 L/100 km sowie größere Bremsen/Reifen kosten ca. 550–850 €/Jahr mehr.',
          ru: 'Отсутствие турбин и сажевого фильтра упрощает жизнь, но расход 8,8–10,8 л/100 км и крупные тормоза/шины обходятся на €550–850 в год дороже 4 цилиндров.'
        },
        market: {
          supplyDemand: {
            en: 'Niche enthusiast market; clean European naturally aspirated V6 C-Classes are scarce and sought-after compared to 4-cylinder cars.',
            de: 'Liebhabermarkt mit begrenztem Angebot; saubere Saug-V6 sind deutlich seltener und gesuchter als Standard-Vierzylinder.',
            ru: 'Нишевый спрос среди ценителей; ухоженные атмосферные V6 встречаются редко и ценятся выше базовых версий.'
          },
          sweetSpot: {
            en: '2008–2010 C 280 / C 300 (updated M272) or 2012–2014 C 350 M276 (306 HP, 8.8 L/100 km) with full 7G-Tronic records (€9,900–€16,500).',
            de: '2008–2010 C 280 / C 300 (überarbeiteter M272) oder 2012–2014 C 350 M276 (306 PS) mit 7G-Tronic-Pflege (9.900–16.500 €).',
            ru: '2008–2010 гг. C 280 / C 300 (обновлённый M272) или 2012–2014 гг. C 350 M276 (306 л.с.) с историей ТО (€9 900–16 500).'
          },
          outlook3to5yr: {
            en: 'Strong collector-like retention (~€7,200–€11,500 in 3–5 yrs); the final naturally aspirated V6 C-Class generation holds value well.',
            de: 'Starke Wertstabilität (ca. 7.200–11.500 € in 3–5 Jahren); als letzte Generation mit frei saugendem V6 zunehmend gesucht.',
            ru: 'Высокая остаточная стоимость (€7 200–11 500 через 3–5 лет) — последняя C-Class с классическим атмосферным V6.'
          }
        },
        watchoutExtra: {
          en: [
            'M272 plastic intake-manifold tumble flaps & early 2007 balance-shaft sprockets, plus pricey piezo injectors on the rare C 350 CGI.',
            'V6 tax, insurance, 8 L oil capacity (200+ km/h Autobahn cruising) and larger brake discs raise annual upkeep.'
          ],
          de: [
            'M272-Saugrohrklappen und 2007er Ausgleichswellen-Kettenrad beachten; beim seltenen C 350 CGI sind Piezo-Injektoren teuer.',
            'Höhere Steuer & Versicherung, 8 Liter Ölmenge sowie größere Bremsscheiben treiben die laufenden Kosten spürbar nach oben.'
          ],
          ru: [
            'Пластиковые заслонки впуска M272 и ранняя шестерня балансира (2007 г.), а на C 350 CGI — дорогие пьезофорсунки.',
            'Повышенный налог и страховка, большой заправочный объём масла и крупные тормозные диски увеличивают расходы.'
          ]
        }
      },
      'cdi-4cyl': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 15% (High-Km)', note: 'Built for 300k+ km highway duty; watch rear subframe rust and worn front bushes' },
            { source: 'ADAC Pannenstatistik', value: 'High Mileage Legend', note: 'OM646 (2007–09) is taxi-tough; OM651 (2009+) needs injector-recall verification' },
            { source: 'WhatCar? Survey', value: '95.2% Reliability', note: 'C 220 CDI is the benchmark European W204 commuter with proven automatic boxes' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 15 % (Dauerläufer)', note: 'Gebaut für 300.000+ km; typische Prüfpunkte sind Hinterachsträger und Querlenker' },
            { source: 'ADAC Pannenstatistik', value: 'Taxi-Legende', note: 'OM646 (2007–09) extrem zäh; beim OM651 (ab 2009) Piezo-Injektor-Rückruf prüfen' },
            { source: 'WhatCar? Umfrage', value: '95,2 % Zuverlässigkeit', note: 'Der C 220 CDI gilt mit Wandlerautomatik als Paradebeispiel für Langstrecken-W204' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-15% (большие пробеги)', note: 'Создан для пробегов 300+ тыс. км; главная проверка на техосмотре — задний подрамник и рычаги' },
            { source: 'ADAC Pannenstatistik', value: 'Легенда такси', note: 'Чугунный OM646 неубиваем; на OM651 (с 2009 г.) нужно подтверждение замены форсунок по отзыву' },
            { source: 'Рейтинг WhatCar?', value: '95,2% надёжности', note: 'C 220 CDI с классическим автоматом считается эталоном выносливого трассового W204' }
          ]
        },
        extendedChecks: {
          en: [
            'Check the rear axle subframe carefully for hidden corrosion and verify Mercedes recall/goodwill replacement history.',
            'On OM651 (2009–2011 C 200/220/250 CDI), confirm Delphi piezo injectors were replaced under recall and inspect plastic fuel-filter housing for coolant leaks.',
            'Listen at the rear of the OM651 engine on cold startup for timing-chain slap (rear-mounted simplex chain).',
            'On OM646 (2007–2009), check injector copper-washer seats ("black death" tar) and verify 60,000 km 5G/7G-Tronic ATF flushes.'
          ],
          de: [
            'Hinterachsträger gründlich auf Rostbefall untersuchen und prüfen, ob bereits ein Kulanz-Austausch erfolgt ist.',
            'Beim OM651 (2009–2011) Beleg für den Delphi-Injektor-Rückruf prüfen sowie Kunststoff-Kraftstofffiltergehäuse auf Kühlmittelverlust checken.',
            'Beim Kaltstart des OM651 hinten zur Spritzwand auf Schleif- oder Rasselgeräusche der rückseitigen Steuerkette achten.',
            'Beim OM646 Injektorsitze auf Verkokung kontrollieren und regelmäßige 60.000-km-Ölwechsel der Automatik prüfen.'
          ],
          ru: [
            'Внимательно проверить задний подрамник на коррозию и наличие отметки о замене по отзывной кампании.',
            'На OM651 (2009–2011) убедиться в замене пьезофорсунок Delphi и осмотреть пластиковый корпус топливного фильтра на течь антифриза.',
            'При холодном пуске OM651 послушать заднюю часть мотора у моторного щита на предмет шума цепи ГРМ.',
            'На OM646 осмотреть колодцы форсунок на отсутствие нагара и проверить историю замены масла в 5G/7G-Tronic.'
          ]
        },
        savingsNote: {
          en: '5.3–6.3 L/100 km real diesel economy saves €400–€650/yr in fuel on 15k+ km commutes, though higher diesel road tax eats part of the gap under 12k km/yr.',
          de: '5,3–6,3 L/100 km Realverbrauch sparen ab 15.000 km/Jahr rund 400–650 € Spritkosten; bei Wenigfahrern frisst die höhere Diesel-Steuer den Vorteil auf.',
          ru: 'Расход 5,3–6,3 л/100 км экономит €400–650 в год на топливе при пробегах от 15 тыс. км, но при малых пробегах экономию съедает более высокий налог.'
        },
        market: {
          supplyDemand: {
            en: 'Highest liquidity in the W204 lineup; clean MoPf C 220 CDI (OM651) automatics with documented miles still find buyers quickly.',
            de: 'Größte Nachfrage in der gesamten W204-Baureihe; gepflegte MoPf C 220 CDI Automatik mit ehrlicher Historie bleiben Bestseller.',
            ru: 'Самые ликвидные версии W204; ухоженные рестайлинговые C 220 CDI с честным пробегом продаются быстрее остальных.'
          },
          sweetSpot: {
            en: '2011–2014 C 220 CDI MoPf (OM651, 170 HP, 7G-Tronic Plus, Avantgarde) with clean subframe & 130k–170k km (€9,200–€11,200).',
            de: '2011–2014 C 220 CDI MoPf (OM651, 170 PS, 7G-Tronic Plus, Avantgarde) mit gesundem Achsträger (9.200–11.200 €).',
            ru: '2011–2014 гг. C 220 CDI MoPf (OM651, 170 л.с., 7G-Tronic Plus, Avantgarde) с целым подрамником (€9 200–11 200).'
          },
          outlook3to5yr: {
            en: 'Gradual fade toward €5,500–€7,200 in 3–5 yrs; Euro 5 status weighs slightly on city prices, yet strong export & commuter demand supports floor values.',
            de: 'Moderater Rückgang auf 5.500–7.200 € in 3–5 Jahren; Euro-5-Einstufung drückt etwas, aber starke Langstrecken-Nachfrage stützt den Preis.',
            ru: 'Плавное снижение до €5 500–7 200 за 3–5 лет; экологический класс Euro 5 сдерживает цену, но спрос трассовых водителей держит рынок.'
          }
        },
        watchoutExtra: {
          en: [
            'OM651 uses a rear-facing timing chain (engine/gearbox drop required if stretched) plus plastic coolant/filter housings that weep with age.',
            'Watch clocked odometers on ex-fleet/taxi diesels and inspect DPF/EGR health if the car did short urban hops.'
          ],
          de: [
            'Beim OM651 sitzt die Steuerkette getriebeseitig (teurer Ausbau bei Längung) und Kunststoff-Kühlmittelstutzen altern.',
            'Auf Manipulationen am Kilometerstand bei ehemaligen Flotten-/Taxi-Dieseln achten sowie DPF/AGR auf Kurzstreckenschäden prüfen.'
          ],
          ru: [
            'Заднее расположение цепи на OM651 удорожает её замену (требуется снятие мотора/КПП), также стареют пластиковые патрубки охлаждения.',
            'Тщательно проверять реальность пробега на бывших корпоративных и такси-машинах, а также состояние DPF и EGR.'
          ]
        }
      },
      'cdi-v6': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Strong Autobahn Build', note: 'Robust OM642 V6 bottom end; heavy nose accelerates front-arm & tyre wear' },
            { source: 'ADAC Pannenstatistik', value: 'Solid (Oil Cooler Seals)', note: 'Known valley oil-cooler seal seepage and intake swirl-motor wear past 150k km' },
            { source: 'WhatCar? Survey', value: '93.0% Reliability', note: 'Effortless 540–620 Nm highway express; higher maintenance than 4-cyl CDIs' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Starker Langstrecken-V6', note: 'Robuster OM642-Rumpfmotor; höheres Vorderachsgewicht beansprucht Querlenker & Bremsen' },
            { source: 'ADAC Pannenstatistik', value: 'Solide (Ölkühler-Dichtung)', note: 'Bekannte Schwachstellen sind Ölkühler im V-Raum und Drallklappen-Stellmotor ab 150 Tkm' },
            { source: 'WhatCar? Umfrage', value: '93,0 % Zuverlässigkeit', note: 'Souveräner Autobahn-Gleiter mit 540–620 Nm, aber teurer in der Wartung als 4-Zylinder' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Крепкий трассовый V6', note: 'Выносливый блок OM642; тяжёлый передок быстрее изнашивает передние рычаги и тормоза' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжен (теплообменник)', note: 'Типичные возрастные работы после 150 тыс. км — прокладки теплообменника в развале V6 и сервопривод заслонок' },
            { source: 'Рейтинг WhatCar?', value: '93,0% надёжности', note: 'Мощнейший лайнер для трассы с моментом 540–620 Н·м и более дорогим обслуживанием' }
          ]
        },
        extendedChecks: {
          en: [
            'Inspect under the bellhousing and lower engine tray for dark oil dripping down from the V-valley oil cooler seals (€900–€1,400 labor).',
            'Check the intake swirl-flap actuator (M55 motor) underneath the turbo intake — oil dripping from the PCV seal kills it.',
            'Verify smooth 7G-Tronic shifts (plus 4MATIC transfer-case quietness on C 300/350 CDI 4MATIC) and check front suspension arms.',
            'Inspect exhaust manifold cracks/soot smell in the cabin and check rear axle subframe corrosion on a lift.'
          ],
          de: [
            'Getriebeglocke und Unterfahrschutz auf Öl-Tropfen aus dem V-Raum prüfen (undichter Ölkühler kostet ca. 900–1.400 € Arbeitszeit).',
            'Drallklappen-Stellmotor (M55) unter dem Turbolader-Ansaugrohr auf Ölbenetzung und Fehlercodes prüfen.',
            'Sanfte Schaltvorgänge der 7G-Tronic (sowie ruhiges 4MATIC-Verteilergetriebe) und spielfreie Vorderachs-Lenker testen.',
            'Abgaskrümmer auf Rußgeruch im Innenraum sowie Hinterachsträger auf Durchrostung kontrollieren.'
          ],
          ru: [
            'Осмотреть стык ДВС и АКПП снизу на подтёки масла из развала блока (прокладки теплообменника OM642 требуют трудоёмкой замены).',
            'Проверить сервопривод вихревых заслонок под впуском турбины — масло из сапуна часто выводит его из строя.',
            'Оценить плавность 7G-Tronic, тишину раздатки на 4MATIC и состояние передних рычагов подвески.',
            'Проверить отсутствие запаха выхлопа под капотом (выпускные коллекторы) и состояние заднего подрамника.'
          ]
        },
        savingsNote: {
          en: '7.2–7.6 L/100 km delivers brisk V6 performance for far less fuel than a petrol V6, though 3.0L diesel tax (€415–€460/yr) and oil-cooler repairs raise TCO.',
          de: '7,2–7,6 L/100 km bieten V6-Leistung deutlich sparsamer als ein V6-Benziner, doch 3,0L-Dieselsteuer (415–460 €) und Ölkühler-Arbeit erhöhen den Unterhalt.',
          ru: 'Расход 7,2–7,6 л/100 км экономичнее бензинового V6, но высокий налог на 3.0 дизель и трудоёмкое обслуживание повышают итоговую стоимость владения.'
        },
        market: {
          supplyDemand: {
            en: 'Smaller supply than 4-cylinder CDIs; clean 2011+ MoPf C 350 CDI (265 HP) cars command strong interest from long-distance buyers.',
            de: 'Kleineres Angebot als bei 4-Zylindern; gepflegte 2011+ MoPf C 350 CDI (265 PS) bleiben bei Langstrecken-Fans sehr beliebt.',
            ru: 'Предложение меньше, чем у 4-цилиндровых дизелей; рестайлинговый C 350 CDI (265 л.с.) высоко ценится любителями трассовых лайнеров.'
          },
          sweetSpot: {
            en: '2011–2013 C 350 CDI MoPf (265 HP, 7G-Tronic Plus) with purple/Viton oil-cooler seals already replaced (€11,800–€14,200).',
            de: '2011–2013 C 350 CDI MoPf (265 PS, 7G-Tronic Plus) mit bereits erneuerter Ölkühler-Dichtung (11.800–14.200 €).',
            ru: '2011–2013 гг. C 350 CDI MoPf (265 л.с., 7G-Tronic Plus) с уже заменёнными прокладками теплообменника (€11 800–14 200).'
          },
          outlook3to5yr: {
            en: 'Holds around €7,500–€9,500 in 3–5 yrs for sorted MoPf C 350 CDI examples; rarer 6-cylinder diesels attract loyal private buyers.',
            de: 'Hält sich in 3–5 Jahren bei ca. 7.500–9.500 € für gepflegte MoPf C 350 CDI — Sechszylinder-Diesel behalten treue Käufer.',
            ru: 'Сохраняет цену на уровне €7 500–9 500 через 3–5 лет — редкий 6-цилиндровый дизель продолжает цениться на вторичке.'
          }
        },
        watchoutExtra: {
          en: [
            'V-valley oil cooler Viton seal leak (labor-intensive turbo/manifold removal) and swirl-flap actuator contamination are classic 140k+ km jobs.',
            'High 3.0L diesel road tax, front suspension wear from nose weight, and 4MATIC front-shaft/transfer-case checks add upkeep.'
          ],
          de: [
            'Undichte Ölkühler-Dichtung im Zylinder-V (aufwendiger Turbolader-Ausbau) sowie verölte Drallklappen-Stellmotoren ab ca. 140 Tkm.',
            'Hohe 3,0L-Kfz-Steuer, höherer Verschleiß an der Vorderachse und Kontrolle von Verteilergetriebe/Antriebswellen beim 4MATIC.'
          ],
          ru: [
            'Течь теплообменника в развале блока (дорогая работа со снятием турбины) и замасливание привода вихревых заслонок после 140 тыс. км.',
            'Повышенный налог на 3,0-литровый дизель, нагрузка на переднюю подвеску и проверка раздатки на версиях 4MATIC.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (W204)', de: 'EU / DE Ausstattungslinien (W204)', ru: 'Европейские комплектации (W204)' },
      sectionHint: { en: 'Used values depend heavily on 2011+ MoPf facelift status and documented rear-subframe condition', de: 'Gebrauchtpreise hängen stark vom MoPf-Facelift ab 2011 und dem Zustand des Hinterachsträgers ab', ru: 'Цена на вторичке сильно зависит от рестайлинга MoPf 2011+ и состояния заднего подрамника' },
      faceliftTitle: { en: '2011 MoPf Facelift Cabin & Corrosion Watch', de: '2011 MoPf Facelift-Upgrades & Rost-Check', ru: 'Рестайлинг 2011 MoPf и защита от коррозии' },
      faceliftKicker: { en: '2011+ MoPf', de: 'MoPf ab 2011', ru: 'MoPf 2011+' },
      trims: [
        {
          id: 'classic',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Classic', de: 'Classic', ru: 'Classic' },
          delta: { en: '-€900 – €1,500', de: '-900 – 1.500 €', ru: '-€900 – €1 500' },
          isSweetSpot: false,
          summary: {
            en: 'Traditional upright-star bonnet grille with understated dark trim, cloth seats, and comfort suspension.',
            de: 'Klassische Basis mit stehendem Stern auf der Haube, schlichten Dekoren, Stoffsitzen und Komfortfahrwerk.',
            ru: 'Классическая версия со звездой на капоте, строгим салоном, тканью и комфортной подвеской.'
          },
          highlights: {
            en: ['Standing Mercedes star on bonnet', '16" alloys & Thermatic 2-zone climate', 'Comfort suspension & fabric upholstery'],
            de: ['Stehender Stern auf der Motorhaube', '16"-Alus & Thermatic-Klimaautomatik', 'Komfortfahrwerk & Stoffbezüge'],
            ru: ['Звезда на капоте и сдержанный декор', 'Диски 16" и 2-зонный климат Thermatic', 'Комфортная подвеска и тканевый салон']
          }
        },
        {
          id: 'elegance',
          tierClass: 'tier-3',
          tier: { en: 'Classic Luxury', de: 'Komfort-Luxus', ru: 'Комфорт-люкс' },
          name: { en: 'Elegance', de: 'Elegance', ru: 'Elegance' },
          delta: { en: '-€200 – €500', de: '-200 – 500 €', ru: '-€200 – €500' },
          isSweetSpot: false,
          summary: {
            en: 'Chrome-trimmed executive spec keeping the standing bonnet star, walnut wood inlays, and plush ride.',
            de: 'Gediegene Chrom-Linie mit stehendem Haubenstern, Edelholz-Einlagen und besonders sanfter Abstimmung.',
            ru: 'Солидная линия с хромом, звездой на капоте, отделкой под орех и максимально мягким ходом.'
          },
          highlights: {
            en: ['Standing star + multi-slat chrome grille', 'Burl walnut wood trim & ambient lighting', 'Comfort suspension & 16"/17" alloys'],
            de: ['Haubenstern + Lamellen-Chromgrill', 'Wurzelholz-Dekore & Ambientebeleuchtung', 'Komfortfahrwerk & 16"/17"-Felgen'],
            ru: ['Звезда на капоте и хромированная решётка', 'Вставки из дерева и пакет подсветки', 'Мягкая подвеска и диски 16"/17"']
          }
        },
        {
          id: 'avantgarde',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Avantgarde', de: 'Avantgarde', ru: 'Avantgarde' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'The iconic W204 sweet spot — swaps the bonnet star for the big grille star, brushed aluminium, and Bi-Xenon.',
            de: 'Der beliebteste W204: großer Zentralstern im Grill, gebürstetes Aluminium, Teilleder und meist Bi-Xenon.',
            ru: 'Самый популярный W204: крупная звезда в решётке, алюминий в салоне, комбинированная обивка и частый ксенон.'
          },
          highlights: {
            en: ['Big grille-mounted star & brushed alu trim', 'Part-ARTICO / cloth seats & 17" alloys', 'Agility Control + frequent Bi-Xenon ILS'],
            de: ['Großer Zentralstern & Alu-Dekore', 'Teilleder-Optik ARTICO & 17"-Alus', 'Agility Control + oft Bi-Xenon ILS'],
            ru: ['Крупная звезда в решётке и алюминий', 'Комбинированный салон ARTICO и диски 17"', 'Подвеска Agility Control и частый Bi-Xenon']
          }
        },
        {
          id: 'edition-c',
          tierClass: 'tier-6',
          tier: { en: 'Late Special', de: 'Sondermodell', ru: 'Спецверсия' },
          name: { en: 'Edition C', de: 'Edition C', ru: 'Edition C' },
          delta: { en: '+€500 – €1,100', de: '+500 – 1.100 €', ru: '+€500 – €1 100' },
          isSweetSpot: false,
          summary: {
            en: 'Late 2013–2014 run-out edition blending dark-tinted headlamps, DINAMICA/ARTICO seats, and contrast stitching.',
            de: 'Spätes Sondermodell (2013–2014) mit abgedunkelten Scheinwerfern, ARTICO/DINAMICA-Sitzen und Kontrastnähten.',
            ru: 'Поздняя спецверсия 2013–2014 гг. с затемнённой оптикой, креслами ARTICO/DINAMICA и контрастной строчкой.'
          },
          highlights: {
            en: ['Dark-bezel headlamps & gloss-black grille', 'ARTICO / DINAMICA microfibre sport seats', 'Multifunction flat-bottom wheel & 17" two-tone'],
            de: ['Abgedunkelte Scheinwerfer & schwarzer Grill', 'ARTICO / DINAMICA Sportsitze', 'Abgeflachtes Lenkrad & 17"-Zweifarbfelgen'],
            ru: ['Затемнённые фары и чёрная решётка', 'Спорткресла ARTICO / DINAMICA', 'Скошенный руль и 17" двухцветные диски']
          }
        },
        {
          id: 'amg-sportpaket',
          tierClass: 'tier-7',
          tier: { en: 'Top Sport', de: 'Top-Sport', ru: 'Топ-спорт' },
          name: { en: 'AMG Sportpaket', de: 'AMG Sportpaket', ru: 'AMG Sportpaket' },
          delta: { en: '+€1,300 – €2,400', de: '+1.300 – 2.400 €', ru: '+€1 300 – €2 400' },
          isSweetSpot: false,
          summary: {
            en: 'Flagship AMG Line appearance & chassis package with body kit, 18" wheels, perforated brakes, and paddle shifters.',
            de: 'Sportliches Topmodell mit AMG-Styling, 18"-Rädern, gelochten Bremsen, Schaltwippen und -15 mm Sportfahrwerk.',
            ru: 'Флагманский пакет AMG: обвес, диски 18", перфорированные тормоза, подрулевые лепестки и спортподвеска.'
          },
          highlights: {
            en: ['AMG front/rear aprons & 18" twin-spoke alloys', '15 mm lowered sports suspension & direct steering', '3-spoke AMG wheel with paddles & black headliner'],
            de: ['AMG-Bodykit & 18"-Doppelspeichen-Alus', 'Sportfahrwerk (-15 mm) & Parameterlenkung', '3-Speichen-Sportlenkrad + schwarzer Himmel'],
            ru: ['Обвес AMG и диски 18" с двойными спицами', 'Заниженное спортшасси (-15 мм)', 'Спортруль с лепестками и чёрный потолок']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Grille-Mounted Big Star & Chrome Exhaust', de: 'Zentralstern im Grill & Chrom-Endrohr', ru: 'Крупная звезда в решётке и хром-выхлоп' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Part-ARTICO / DINAMICA Upholstery', de: 'Teilleder ARTICO / DINAMICA', ru: 'Комбинированный салон ARTICO / DINAMICA' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Bi-Xenon Intelligent Light System (ILS)', de: 'Bi-Xenon Intelligent Light System (ILS)', ru: 'Адаптивный биксенон ILS' }, vals: ['opt', 'opt', 'opt', 'opt', 'opt'] },
        { feature: { en: '17" / 18" Alloy Wheels', de: '17"- / 18"-Leichtmetallfelgen', ru: 'Литые диски 17" / 18"' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Parktronic Front & Rear Sensors', de: 'Parktronic vorn & hinten', ru: 'Парктроники Parktronic спереди/сзади' }, vals: ['opt', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['opt', 'opt', 'opt', 'std', 'std'] },
        { feature: { en: '15 mm Lowered Sports Suspension & AMG Kit', de: 'Sportfahrwerk (-15 mm) & AMG-Styling', ru: 'Спортподвеска (-15 мм) и обвес AMG' }, vals: ['no', 'no', 'no', 'opt', 'std'] },
        { feature: { en: 'COMAND Online Navigation + Rear Camera', de: 'COMAND Online Navi + Rückfahrkamera', ru: 'Навигация COMAND Online + камера' }, vals: ['opt', 'opt', 'opt', 'opt', 'opt'] }
      ],
      interiorNotes: {
        en: [
          'Solid bank-vault door heft, intuitive COMAND rotary dial, and physical climate switches age far better than touch-heavy modern rivals.',
          'Watch driver-side ARTICO faux-leather bolster cracking after ~120,000 km; fabric or full real leather lasts much longer.',
          '475 L sedan boot is practical in length, though split-folding 60/40 rear backrests were an optional extra — verify latches inside the trunk.'
        ],
        de: [
          'Sattes Türschließgeräusch, intuitiver COMAND-Drehdrücksteller und echte Klimaknöpfe altern deutlich würdevoller als moderne Touchscreens.',
          'Bei ARTICO-Kunstleder reißen die äußeren Sitzwangen oft ab ca. 120.000 km — Stoff oder Echtleder ist spürbar haltbarer.',
          '475 Liter Kofferraum sind lang und tief, aber umklappbare Rücksitzlehnen waren aufpreispflichtig — Entriegelungshebel im Kofferraum prüfen.'
        ],
        ru: [
          'Увесистые двери, удобная шайба COMAND и физические кнопки климата стареют гораздо благороднее современных сенсоров.',
          'Экокожа ARTICO на боковине водительского кресла часто трескается к 120 000 км — ткань или натуральная кожа служат дольше.',
          'Багажник седана объёмом 475 л удобен по длине, но складывающаяся спинка 60/40 была опцией — проверяйте наличие рычагов в багажнике.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: 'Petrol W204s feature crisp white-backed MoPf gauges up to 260 km/h and quiet cold-idle acoustics; 4-cylinders came standard with 6-MT (5G/7G-Tronic optional), while all V6 models pair with smooth 7G-Tronic paddle-capable automatics.',
          de: 'Benzin-W204 bieten ruhigen Leerlauf und je nach Motorisierung 6-Gang-Schaltgetriebe oder 5G-/7G-Tronic; alle V6-Modelle fahren serienmäßig mit der geschmeidigen 7G-Tronic.',
          ru: 'Бензиновые W204 радуют тихим холостым ходом; 4-цилиндровые версии оснащались 6-МКПП или автоматами 5G/7G-Tronic, а все V6 шли только с плавной 7G-Tronic.'
        },
        diesel: {
          en: 'Diesel cabins gain noticeably better refinement after the 2011 MoPf sound-insulation update; C 300 CDI 4MATIC adds permanent AWD traction with a slightly thicker front center-tunnel footwell, and all automatics use the durable 5G or 7G-Tronic selector.',
          de: 'Diesel-Modelle profitieren spürbar von der verbesserten 2011er MoPf-Geräuschdämmung; der C 300 CDI 4MATIC bietet Allrad-Traktion bei minimal schmalerem Fußraum vorn und robuster 7G-Tronic.',
          ru: 'Дизельные версии стали заметно тише после шумоизоляции рестайлинга MoPf 2011; C 300 CDI 4MATIC добавляет полный привод и сочетается с выносливой 7G-Tronic.'
        }
      },
      faceliftUpgrades: {
        en: [
          '2011 MoPf completely replaced the blocky pop-up screen flap with a sleek hooded center display and upscale textured dash plastics.',
          'New 3-spoke leather steering wheel, vivid color TFT center speedometer display, and upgraded Audio 20 / COMAND Online NTG 4.5 with Bluetooth streaming.',
          'Weight-saving aluminium hood/fenders, sharper LED DRL/tail-lamp styling, and 7G-Tronic Plus transmission with improved lock-up smoothness.',
          'Critical structural check across all years: inspect the rear axle subframe from underneath for salt corrosion (Mercedes often replaces perforated frames under goodwill).'
        ],
        de: [
          'Die 2011er MoPf tauschte den kantigen Klapp-Bildschirm gegen ein integriertes Zentraldisplay, feinere Armaturentafel-Materialien und edlere Zierleisten.',
          'Neues 3-Speichen-Lenkrad, hochauflösendes Farb-TFT im Tacho und NTG-4.5-Infotainment mit modernem Bluetooth-Audiostreaming.',
          'Aluminium-Motorhaube, markante LED-Leuchten und die überarbeitete 7G-Tronic Plus mit besserer Wandlerüberbrückung.',
          'Wichtigster Langzeit-Check aller Baujahre: Hinterachsträger auf Durchrostung prüfen — Mercedes tauscht stark befallene Achsträger häufig auf Kulanz.'
        ],
        ru: [
          'Рестайлинг 2011 MoPf убрал выдвижной экран с крышкой, заменив его интегрированным дисплеем, мягкой торпедо и качественным декором.',
          'Новый 3-спицевый руль, цветной экран в приборной панели и мультимедиа NTG 4.5 с полноценным Bluetooth-аудио.',
          'Алюминиевый капот, современная светодиодная оптика и модернизированный автомат 7G-Tronic Plus с улучшенным гидротрансформатором.',
          'Главная проверка для любого года: осмотр заднего подрамника снизу на скрытую коррозию — при сквозных очагах дилеры нередко меняли его по куланцу.'
        ]
      }
    }
  }
});