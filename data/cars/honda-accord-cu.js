// AutoDuel Vehicle Data — honda-accord-cu
registerAutoDuelVehicle({
  roster: {
    id: 'honda-accord-cu',
    number: '07',
    carType: 'sedan',
    gridOrder: 7,
    gridLabel: 'Honda Accord',
    yearMake: '2008-2015 HONDA',
    shortTitle: 'ACCORD (CU)',
    fullName: '2008-2015 Honda Accord (CU)',
    rarityClass: 'rarity-legendary',
    drivetrain: 'FWD',
    image: 'assets/honda-accord-cu.webp',
    defaultEngineId: '2.0-ivtec',
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspDoubleWishbone',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Composed / Refined', de: 'Souverän / Komfortabel', ru: 'Собранная / Комфортная' },
      highwayNoise: { en: '~68 dB · Quiet', de: '~68 dB · Sehr ruhig', ru: '~68 дБ · Тихо' },
      cabinMaterials: { en: 'Premium Soft-Touch', de: 'Hochwertig / Soft-Touch', ru: 'Премиальный мягкий салон' },
      controls: '@physButtons',
      turningCircle: '11.4 m',
      visibility: { en: 'Good Forward · High Boot', de: 'Gut vorn · Hohes Heck', ru: 'Хорошо спереди · Высокий багажник' },
      euroNcap: '★★★★★ (2008)',
      safetyTech: { en: '✓ ESP/VSA · ✓ LKAS/CMBS (Opt.)', de: '✓ ESP/VSA · ✓ ACC/Spur (Opt.)', ru: '✓ ESP/VSA · ✓ ACC/LKAS (опц.)' },
      rearRoom: { en: 'Adequate (Mid-Size)', de: 'Solide (Mittelklasse)', ru: 'Норма (бизнес-класс)' },
      isofixEntry: { en: '✓ 2× ISOFIX · Low Sedan', de: '✓ 2× ISOFIX · Flach', ru: '✓ 2× ISOFIX · Низкий седан' },
      bootVolume: '467 L (Sedan)',
      seatUtility: { en: '60/40 Split-Fold', de: '60/40 Klappbank', ru: 'Складывание 60/40' },
      payloadRoof: '465 kg · 75 kg',
      driveline: 'FWD',
      chassisFeel: { en: 'Sharp · Planted Highway', de: 'Präzise · Souverän', ru: 'Точное · Устойчивое' },
      tractionDiff: { en: 'FWD · Open Diff', de: 'FWD · Offen', ru: 'FWD · Своб. дифф.' },
      braking1000: '~36.2 m',
      brakeSetup: '@discs4',
      valueRetention: '@retVeryHigh',
      resaleDemand: '@demFast'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchSingle', driveline: '@driveFwd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspDoubleWishbone' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: { specs: [{ k: 'damperSetup', v: { en: 'Double-Wishbone Front + Multi-Link Rear', de: 'Doppelquerlenker vorn + Mehrlenker hinten', ru: 'Двухрычажка спереди + многорычажка сзади' } }, { k: 'seatSupport', v: { en: 'Executive Long-Distance Contoured Seats', de: 'Sehr bequeme Langstrecken-Sitze', ru: 'Отличные кресла для дальних поездок' } }], note: { en: 'Feels genuinely near-premium on long motorway trips.', de: 'Fährt sich auf langen Autobahnetappen auf Oberklasse-Niveau.', ru: 'На трассе ощущается на уровне премиальных седанов.' } },
        highwayNoise: { specs: [{ k: 'cabinNoise130', v: { en: '~68 dB(A) at 130 km/h (Very Quiet)', de: '~68 dB(A) bei 130 km/h (Sehr leise)', ru: '~68 дБ(А) при 130 км/ч (очень тихо)' } }, { k: 'acousticGlass', v: { en: 'Thick Door Seals + Low 0.28 Cd Drag', de: 'Dicke Türdichtungen + niedriger cW-Wert 0,28', ru: 'Плотные уплотнители + аэродинамика 0.28' } }], note: { en: 'Noticeably quieter than compact hatches at 140–160 km/h.', de: 'Bei 140–160 km/h spürbar ruhiger als Kompaktwagen.', ru: 'Заметно тише хэтчбеков на высоких скоростях.' } }
      },
      interiorQualityFeatures: {
        cabinMaterials: { specs: [{ k: 'dashTrim', v: { en: 'Near-Premium Soft-Touch Wraparound Cockpit', de: 'Sehr wertiges Soft-Touch-Cockpit', ru: 'Качественный мягкий пластик и отделка' } }, { k: 'buildFit', v: { en: 'Japanese Built (Sayama) · Exceptional Aging', de: 'Japan-Fertigung (Sayama) · Extrem langlebig', ru: 'Японская сборка · Прекрасно держится с годами' } }], note: { en: 'Widely praised as one of Honda’s best-built European cabins.', de: 'Gilt als einer der bestverarbeiteten Honda-Innenräume in Europa.', ru: 'Считается одним из лучших салонов Honda по качеству сборки.' } },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: { specs: [{ k: 'turningDiam', v: '11.4 m' }, { k: 'bodyDimensions', v: '4,726 × 1,840 mm' }], note: { en: 'Wide 1.84 m body feels planted on highways but wide in narrow alleys.', de: 'Breite 1,84 m Karosserie liegt satt auf der Autobahn, braucht aber Platz beim Parken.', ru: 'Широкий кузов (1.84 м) солидно стоит на трассе, но требует аккуратности во дворах.' } },
        visibility: { specs: [{ k: 'sightlines', v: { en: 'Good Forward · Tall Sedan Boot Lid', de: 'Gut vorn · Hohe Kofferraumkante hinten', ru: 'Хорошо спереди · Высокая кромка багажника' } }, { k: 'parkingAids', v: { en: 'Front & Rear Sensors Standard on Most Trims', de: 'Parksensoren vorn & hinten meist Serie', ru: 'Парктроники спереди и сзади в большинстве версий' } }], note: { en: 'Standard parking sensors make reversing the long sedan effortless.', de: 'Serienmäßige Parksensoren erleichtern das Einparken der Limousine deutlich.', ru: 'Штатные парктроники делают парковку седана простой.' } }
      },
      safetyProtection: {
        euroNcap: { specs: [{ k: 'ncapOverall', v: '★★★★★ (2008)' }, { k: 'ncapBreakdown', v: { en: '35/37 Adult · 4★ Child · 3★ Pedestrian', de: '35/37 Erwachsene · 4★ Kinder · 3★ Fußgänger', ru: '35/37 Взрослые · 4★ Дети · 3★ Пешеходы' } }, { k: 'airbagsCount', v: { en: '6 Airbags + Active Front Headrests', de: '6 Airbags + aktive Kopfstützen vorn', ru: '6 подушек + активные подголовники' } }], note: { en: 'Top-tier 5-star sedan crash safety.', de: 'Erstklassige 5-Sterne-Limousinen-Sicherheit.', ru: 'Высочайший уровень пассивной безопасности.' } },
        safetyTech: { specs: [{ k: 'activeAssists', v: { en: '✓ VSA/ESP · ✓ Optional ACC, LKAS & CMBS Braking', de: '✓ VSA/ESP · ✓ Optional ACC, Spurhalte- & Notbremsassistent', ru: '✓ VSA/ESP · ✓ Опционально ACC, LKAS и CMBS' } }], note: { en: 'Ahead of its time — Executive ADAS models already featured adaptive cruise and lane keep.', de: 'Seiner Zeit voraus — Top-Modelle boten schon damals ACC und Spurhalteassistent.', ru: 'Опередил время — топ-версии уже имели адаптивный круиз и удержание в полосе.' } }
      },
      passengerSpaceErgonomics: {
        rearRoom: { specs: [{ k: 'wheelbase', v: '2,705 mm' }, { k: 'rearLegHead', v: { en: 'Good Adult Comfort · Tighter than Mondeo/Passat', de: 'Solider Fondplatz · Etwas kompakter als Mondeo/Passat', ru: 'Комфортно сзади · Чуть теснее Mondeo/Passat' } }], note: { en: 'Sporty sedan proportions prioritize front cockpit feel.', de: 'Sportliche Proportionen legen den Schwerpunkt auf den Fahrerplatz.', ru: 'Спортивный профиль с акцентом на передние места.' } },
        isofixEntry: { specs: [{ k: 'isofixAccess', v: { en: '✓ 2× Outer ISOFIX · Low Sleek Sedan Entry', de: '✓ 2× ISOFIX außen · Flacher Limousinen-Einstieg', ru: '✓ 2× ISOFIX · Низкая посадка седана' } }], note: { en: 'Easy ISOFIX access with wide front seats.', de: 'Gut zugängliche ISOFIX-Punkte.', ru: 'Удобный доступ к креплениям ISOFIX.' } }
      },
      interiorBootSpace: {
        bootVolume: { specs: [{ k: 'bootUpDown', v: '467 L (Sedan)' }, { k: 'loadSill', v: { en: '~670 mm · Narrower Sedan Aperture', de: '~670 mm · Typische Limousinen-Ladeöffnung', ru: '~670 мм · Проём классического седана' } }], note: { en: 'Deep 467 L trunk for suitcases; bulky tall boxes need the Tourer estate.', de: 'Tiefer 467-L-Kofferraum für Koffer; für sehr sperrige Güter empfiehlt sich der Tourer.', ru: 'Глубокий багажник 467 л для чемоданов; для крупногабарита лучше универсал.' } },
        seatUtility: { specs: [{ k: 'foldingMech', v: { en: '60/40 Split-Fold Rear Seatbacks (Release in Boot)', de: '60/40 umklappbar (Fernentriegelung im Kofferraum)', ru: 'Складывание 60/40 (рычажки из багажника)' } }], note: { en: 'Handy trunk release levers let you slide long items through.', de: 'Praktische Fernentriegelung im Kofferraum für lange Gegenstände.', ru: 'Удобные рычажки в багажнике для перевозки длинномеров.' } }
      },
      payloadTowing: {
        payloadRoof: { specs: [{ k: 'maxPayload', v: '~465 kg' }, { k: 'roofLoad', v: '75 kg' }], note: { en: 'Solid mid-size touring capacity.', de: 'Solide Mittelklasse-Zuladung.', ru: 'Хорошая загрузка для бизнес-седана.' } },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: { specs: [{ k: 'kerbWeight', v: '1,450–1,590 kg' }, { k: 'handlingChar', v: { en: 'Balanced Double-Wishbone Precision · High-Speed Poise', de: 'Präzise Doppelquerlenker-Balance · Hohe Autobahn-Ruhe', ru: 'Точность двухрычажки · Монолитность на трассе' } }, { k: 'tyreSizes', v: '225/50 R17 · 235/45 R18' }], note: { en: 'One of the sharpest-handling FWD executive sedans of its decade.', de: 'Eine der präzisesten Frontantriebs-Limousinen ihrer Zeit.', ru: 'Один из лучших переднеприводных седанов по управляемости.' } },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },    sharedBuyerFit: {
      cards: {
        accordRefinedDrive: {
          en: 'You want a refined, engaging Japanese sedan: Crisp steering, double-wishbone front suspension, and quiet motorway manners.',
          de: 'Du willst eine kultivierte, präzise Limousine: Direkte Lenkung, Doppelquerlenker-Vorderachse und ruhiger Lauf auf der Autobahn.',
          ru: 'Тебе нужен собранный и комфортный японский седан: Точный руль, двухрычажка спереди и тишина на трассе.'
        },
        accordVtecDurability: {
          en: 'You value long-term mechanical trust: Naturally aspirated i-VTEC engines with timing chains age gracefully with basic oil changes.',
          de: 'Du setzt auf Langzeit-Zuverlässigkeit: Die i-VTEC-Sauger mit Steuerkette altern bei regelmäßigem Ölwechsel extrem souverän.',
          ru: 'Ты ценишь долговечность техники: Цепные атмосферники i-VTEC при своевременной замене масла служат очень долго.'
        },
        accord24HighRev: {
          en: 'You enjoy a sporty 201 HP rev-happy sedan: The 2.4 i-VTEC loves high revs while remaining smooth in daily traffic.',
          de: 'Du magst drehfreudige 201 PS: Der 2.4 i-VTEC läuft im Alltag kultiviert und liefert obenrum echten Sport-Charakter.',
          ru: 'Тебе нравится крутильный мотор 201 л.с.: 2.4 i-VTEC плавен в городе и радует бодрым подхватом на высоких оборотах.'
        },
        accordRearSpaceBoot: {
          en: 'You need maximum rear legroom and hatchback loading: Rear knee space is tighter than a Mondeo and the saloon boot opening is narrower.',
          de: 'Du brauchst maximale Beinfreiheit und Heckklappe: Hinten sitzt man knapper als im Mondeo, die Stufenheck-Luke ist schmaler.',
          ru: 'Тебе нужен максимум места сзади и широкая крышка багажника: Сзади теснее, чем в Mondeo, а проём седана уже.'
        },
        accordDieselAutoNote: {
          en: 'You prefer a traditional 5-speed auto or crisp 6-speed manual: Smooth torque-converter shifts or direct manual gearing pair effortlessly with the diesel torque.',
          de: 'Du bevorzugst eine klassische 5-Stufen-Automatik oder 6-Gang-Schaltung: Sanfte Wandler-Schaltvorgänge oder knackige Gänge passen ideal zum Diesel-Durchzug.',
          ru: 'Ты предпочитаешь классический 5-АКПП или чёткую 6-МКПП: Плавный гидротрансформатор или точная механика отлично сочетаются с тягой дизеля.'
        },
        accordFirmSuspension: {
          en: 'You expect floating comfort-sedan isolation: Sporty damper tuning lets sharp road joints through more than softer rivals.',
          de: 'Du erwartest weiche Sänften-Abstimmung: Das straffere Fahrwerk gibt kurze Querfugen deutlicher weiter als komfortbetonte Rivalen.',
          ru: 'Ты ждёшь мягкой плавности хода: Упругая подвеска заметнее передаёт острые стыки, чем у более мягких конкурентов.'
        },
        accordPetrolConsumption: {
          en: 'You want low motorway fuel bills: Naturally aspirated i-VTEC engines need revs for quick overtakes and burn more fuel.',
          de: 'Du willst minimalen Autobahn-Verbrauch: Die i-VTEC-Sauger brauchen für zügige Überholmanöver Drehzahl und entsprechend mehr Sprit.',
          ru: 'Ты хочешь минимальный расход на трассе: Атмосферным i-VTEC для бодрых обгонов нужны обороты, что повышает расход топлива.'
        },
        accordArchRustCheck: {
          en: 'You want zero rust or brake checks: Rear wheel-arch lips, windscreen top seams, and rear calipers need periodic care.',
          de: 'Du willst keine Rost- oder Bremsen-Kontrollen: Hintere Radläufe, oberer Scheibenrahmen und hintere Bremssättel brauchen Pflege.',
          ru: 'Ты не хочешь следить за арками и суппортами: Задние кромки арок, рамка лобового стекла и задние тормоза требуют внимания.'
        },
        accordHighwayCruiser: {
          en: 'You cover long Autobahn distances: 350–380 Nm diesel pull and double-wishbone stability eat up motorway miles effortlessly.',
          de: 'Du fährst weite Autobahnstrecken: 350–380 Nm Drehmoment und die Doppelquerlenker-Achse meistern lange Etappen souverän.',
          ru: 'Ты ездишь на дальние расстояния по трассе: Тяга 350–380 Н·м и двухрычажная подвеска уверенно держат высокую скорость.'
        }
      }
    },
    buyerFitGroups: {
      'na-petrol': {
        summary: {
          en: 'A polished, driver-focused Japanese sedan with bulletproof petrol mechanics — ideal if you prefer build quality over huge rear legroom.',
          de: 'Eine kultivierte, fahraktive Limousine mit extrem robuster Benziner-Technik — ideal, wenn Qualität vor maximalem Fond-Platz zählt.',
          ru: 'Добротный и драйверский японский седан с неубиваемым бензиновым мотором — идеален, если качество важнее простора сзади.'
        },
        ideal: [
          'accordRefinedDrive',
          'accordVtecDurability',
          'globalSimpleNoTurbo',
          'globalPetrolCityZones'
        ],
        skip: [
          'accordRearSpaceBoot',
          'accordFirmSuspension',
          'accordPetrolConsumption',
          'accordArchRustCheck'
        ]
      },
      diesel: {
        summary: {
          en: 'A quiet, enduring Japanese motorway sedan with strong diesel torque — wasted on short urban trips.',
          de: 'Eine ruhige, langstreckentaugliche Reiselimousine mit kräftigem Diesel-Durchzug — für reine Stadt-Kurzstrecken ungeeignet.',
          ru: 'Тихий и выносливый дизельный седан для трассы — не лучший выбор для коротких городских поездок.'
        },
        ideal: [
          'accordRefinedDrive',
          'accordHighwayCruiser',
          'globalDieselLongRange',
          'accordDieselAutoNote'
        ],
        skip: [
          'globalDieselShortTripRisk',
          'accordRearSpaceBoot',
          'accordFirmSuspension',
          'accordArchRustCheck'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Tough Double-Wishbone Base — Check Rear Arches & Sills',
          strengths: [
            'Tough Double-Wishbone Base keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Check rear wheel arches, sills, and windscreen top seam for early rust bubbles.',
            'Check Rear Arches & Sills.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Stabile Doppelquerlenker — Radläufe & Schweller prüfen',
          strengths: [
            'Stabile Doppelquerlenker hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Hintere Radläufe, Schweller und oberen Frontscheibenrahmen auf Rostblasen prüfen.',
            'Radläufe & Schweller prüfen.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Крепкая многорычажная база — Ржавчина задних арок и порогов',
          strengths: [
            'Крепкая многорычажная база надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Осмотрите задние арки, пороги и верхнюю кромку лобового стекла на очаги коррозии.',
            'Ржавчина задних арок и порогов.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Thick Soft-Touch Dashboard',
          strengths: [
            'Thick Soft-Touch Dashboard ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Rear legroom is tighter than a Mondeo and the sedan trunk opening is narrow.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Satt geschäumtes Armaturenbrett',
          strengths: [
            'Satt geschäumtes Armaturenbrett sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Beinfreiheit im Fond knapper als im Mondeo, schmale Limousinen-Ladeluke.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Толстый мягкий пластик',
          strengths: [
            'Толстый мягкий пластик обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Места для ног сзади меньше, чем в Mondeo, а проём багажника узок.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: '4.73 m Length • 11.4 m Turn',
          strengths: [
            '4.73 m Length • 11.4 m Turn makes city maneuvering predictable.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Low front bumper overhang scrapes tall curbs; 11.4 m turn feels wide in tight lots.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: '4,73 m Länge • 11,4 m Kreis',
          strengths: [
            '4,73 m Länge • 11,4 m Kreis macht das Rangieren im Stadtverkehr gut einschätzbar.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            'Tiefer Frontüberhang setzt an hohen Bordsteinen auf; 11,4 m Wendekreis.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Длина 4,73 м • Разворот 11,4 м',
          strengths: [
            'Длина 4,73 м • Разворот 11,4 м делает маневрирование и парковку в городе предсказуемыми.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Низкий передний свес цепляет бордюры; разворот 11,4 м требует запаса.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ (2008) — 6 Airbags + VSA + LKAS Opt.',
          strengths: [
            'Euro NCAP 5★ (2008) provides solid passive crash protection for its class and era.',
            '6 Airbags + VSA + LKAS Opt. standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ (2008) — 6 Airbags + VSA-ESP',
          strengths: [
            'Euro NCAP 5★ (2008) bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
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
          headline: 'Euro NCAP 5★ (2008) — 6 подушек + VSA (ESP)',
          strengths: [
            'Euro NCAP 5★ (2008) обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            '6 подушек + VSA (ESP) входят в оснащение большинства версий.'
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
          headline: 'Generous Front Captain Space',
          strengths: [
            'Generous Front Captain Space keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Compact Rear Legroom For Class.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Großzügiger Raum vorn',
          strengths: [
            'Großzügiger Raum vorn sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Fond für Klasse recht kompakt.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Просторно на первом ряду',
          strengths: [
            'Просторно на первом ряду обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Тесноватый для класса второй ряд.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '467L Sedan Boot',
          strengths: [
            'Practical 467L sedan boot with generous captain-style front seating.',
            'Narrow Trunk Pass-Through improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '467L Kofferraum',
          strengths: [
            'Praktischer Nutzwert: 467 L Limousinen-Kofferraum bei großzügigem Platzangebot vorn.',
            'Schmale Ladeöffnung erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник седана 467 л',
          strengths: [
            'Практичный объём: багажник седана 467 л и просторные передние кресла.',
            'Узкий проём погрузки добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Double-Wishbone Front',
          strengths: [
            'Double-wishbone front suspension delivers planted, refined highway composure.',
            'Composed Highway Grip.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Doppelquerlenker vorn',
          strengths: [
            'Doppelquerlenker-Vorderachse vermittelt souveräne Straßenlage und Lenkpräzision.',
            'Sehr spurstabil.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Двухрычажка спереди',
          strengths: [
            'Передняя двухрычажная подвеска дарит собранность и точность на высокой скорости.',
            'Отличная курсовая устойчивость.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 36.4 m — 300 mm Front Discs • Firm Pedal',
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
          headline: '100–0 km/h: 36,4 m — 300 mm Scheiben vorn • Druckpunkt',
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
          headline: '100–0 км/ч: 36,4 м — 300 мм спереди • Информативность',
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
          headline: '1,500 kg Braked Tow • 475 kg Payload',
          strengths: ['1,500 kg Braked Tow and 475 kg Payload handle typical cargo and trailer needs.'],
          watchouts: [
            'Verify exact braked towing limits on the registration card if fitting or using a tow bar.'
          ],
          beforeYouBuy: [
            'If a tow hitch is already fitted, inspect rear springs for sagging and check clutch/auto smoothness.'
          ]
        },
        de: {
          headline: '1.500 kg Anhängelast • 475 kg Zuladung',
          strengths: [
            '1.500 kg Anhängelast und 475 kg Zuladung bieten praxisgerechte Zuladung und Zugkraft.'
          ],
          watchouts: [
            'Bei Anhängerbetrieb die exakte gebremste Anhängelast im Fahrzeugschein für den konkreten Motor prüfen.'
          ],
          beforeYouBuy: [
            'Ist eine Anhängerkupplung montiert, Hinterfedern auf Durchhängen und Getriebe/Kupplung genau testen.'
          ]
        },
        ru: {
          headline: 'Прицеп до 1 500 кг • Грузоподъёмность 475 кг',
          strengths: [
            'Прицеп до 1 500 кг и Грузоподъёмность 475 кг закрывают повседневные задачи по загрузке.'
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
          headline: 'High Honda Resale Demand',
          strengths: [
            'High Honda Resale Demand helps keep used demand healthy.',
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
      'petrol-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: 'Crisp 6-MT / Tough 5-AT — Long Clutch & ATF Life',
            strengths: [
              'Crisp 6-MT / Tough 5-AT matches this powertrain well for everyday driving.',
              'Long Clutch & ATF Life.'
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
            headline: 'Präzise 6-Gang / Robuste 5-AT — Langlebige Kupplung & Öl',
            strengths: [
              'Präzise 6-Gang / Robuste 5-AT passt gut zur Motorcharakteristik im Alltag.',
              'Langlebige Kupplung & Öl.'
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
            headline: 'Чёткая 6-МКПП / 5-АКПП — Большой ресурс узлов',
            strengths: [
              'Чёткая 6-МКПП / 5-АКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Большой ресурс узлов.'
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
            headline: 'Rock-Solid Denso Electrics',
            strengths: [
              'Rock-Solid Denso Electrics keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Watch Bluetooth Battery Drain.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Stabile Denso-Elektronik',
            strengths: [
              'Stabile Denso-Elektronik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Bluetooth-Modul Ruhestrom.'
            ],
            watchouts: ['Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.'],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная электрика Denso',
            strengths: [
              'Надёжная электрика Denso упрощает диагностику и обслуживание электрооборудования.',
              'Утечка через модуль Bluetooth.'
            ],
            watchouts: ['Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.'],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Double-Wishbone Road Soak',
            strengths: [
              'Double-Wishbone Road Soak delivers pleasant everyday composure.',
              'Refined Wind Insulation.'
            ],
            watchouts: [
              'Wind and tyre roar increase at 130+ km/h; large 18–19" wheels make city bumps firmer.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveränes Doppelquerlenker-Bild',
            strengths: [
              'Souveränes Doppelquerlenker-Bild sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Autobahn-Dämmung.'
            ],
            watchouts: [
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche zu; große Felgen machen den Stadtkomfort straffer.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавная многорычажка',
            strengths: [
              'Плавная многорычажка обеспечивает комфортную езду в повседневных поездках.',
              'Тишина и удобные кресла.'
            ],
            watchouts: ['После 130 км/ч растут шумы ветра и шин, а большие диски делают ход жёстче.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Simple NA Routine Servicing — Very Few Unexpected Repairs',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Very Few Unexpected Repairs.'
            ],
            watchouts: [
              'Aging 10+ year rubber hoses, suspension bushings, and brake/tyre wear still add routine upkeep.',
              'Simple NA Routine Servicing.'
            ],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Günstiger Sauger-Service — Kaum teure Reparaturen',
            strengths: [
              'Günstiger Sauger-Service hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Kaum teure Reparaturen.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Простое регламентное ТО — Минимум неплановых трат',
            strengths: [
              'Простое регламентное ТО помогает держать ежегодные затраты на ТО под контролем.',
              'Минимум неплановых трат.'
            ],
            watchouts: [
              'Даже при простом моторе спустя 10+ лет требуют трат шланги, сайлентблоки, тормоза и шины.'
            ],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      },
      'diesel-conv-auto': {
        transmissionDriveline: {
          en: {
            headline: '6-MT / Proven 5-AT — 350–380 Nm Clutch & DMF Wear',
            strengths: [
              '6-MT / Proven 5-AT matches this powertrain well for everyday driving.',
              'Paired safely without brittle dry dual-clutch gearboxes; highway examples exceed 300,000+ km.'
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
            headline: '6-Gang / Robuste 5-Automatik — Kupplungs- & ZMS-Verschleiß',
            strengths: [
              '6-Gang / Robuste 5-Automatik passt gut zur Motorcharakteristik im Alltag.',
              'Keine anfälligen Doppelkuppler; gepflegte Langstreckenwagen schaffen über 300.000 km.'
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
            headline: '6-МКПП / Надёжный 5-АКПП — Нагрузка на маховик (до 380 Н·м)',
            strengths: [
              '6-МКПП / Надёжный 5-АКПП хорошо сочетается с данным двигателем в повседневной езде.',
              'Отсутствуют капризные роботы; на трассах моторы ходят более 300 000 км.'
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
            headline: 'Solid Denso Electronics',
            strengths: [
              'Solid Denso Electronics keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Diesel emissions sensors (DPF pressure, glow plugs, EGR) can trigger check lights past 140,000 km.',
              'DPF & Exhaust Temp Sensors.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solide Denso-Elektronik',
            strengths: [
              'Solide Denso-Elektronik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Abgassensoren (DPF-Differenzdruck, Glühkerzen, AGR) melden sich häufiger ab 140.000 km.',
              'DPF- & Abgastemp.-Sensoren.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Крепкая электрика Denso',
            strengths: [
              'Крепкая электрика Denso упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Дизельные датчики (давления DPF, свечи накала, EGR) требуют внимания после 140 000 км.',
              'Датчики сажевого фильтра.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Double-Wishbone Road Soak',
            strengths: [
              'Double-Wishbone Road Soak delivers pleasant everyday composure.',
              'Refined Wind Insulation.'
            ],
            watchouts: [
              'Cold diesel clatter, high motorway revs, or oversized alloy wheels raise cabin noise noticeably.'
            ],
            beforeYouBuy: [
              'Take the car up to 110–120 km/h to judge real wind noise, tyre hum, and suspension smoothness.'
            ]
          },
          de: {
            headline: 'Souveränes Doppelquerlenker-Bild',
            strengths: [
              'Souveränes Doppelquerlenker-Bild sorgt für ein angenehmes Fahrgefühl im Alltag.',
              'Gute Autobahn-Dämmung.'
            ],
            watchouts: [
              'Kaltes Diesel-Nageln oder große 18–19"-Felgen erhöhen den Geräuschpegel im Innenraum spürbar.'
            ],
            beforeYouBuy: [
              'Bei der Probefahrt kurz 110–120 km/h fahren, um Wind-, Reifen- und Abrollgeräusche real zu prüfen.'
            ]
          },
          ru: {
            headline: 'Плавная многорычажка',
            strengths: [
              'Плавная многорычажка обеспечивает комфортную езду в повседневных поездках.',
              'Тишина и удобные кресла.'
            ],
            watchouts: ['Холодный дизельный рокот и крупные диски заметно усиливают шум в салоне.'],
            beforeYouBuy: [
              'Прокатитесь 110–120 км/ч, чтобы оценить реальный уровень шума ветра, шин и мягкость хода.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Tough Closed-Deck Diesel — Costly DPF, Clutch & DMF',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Costly DPF, Clutch & DMF.', 'Tough Closed-Deck Diesel.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Robuster Diesel-Motorblock — Teurer DPF-, Kupplungs- & ZMS-Tausch',
            strengths: [
              'Robuster Diesel-Motorblock hält die planbaren jährlichen Wartungskosten im Rahmen.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Teurer DPF-, Kupplungs- & ZMS-Tausch.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Выносливый блок дизеля — Дорогие DPF, сцепление и маховик',
            strengths: [
              'Выносливый блок дизеля помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Дорогие DPF, сцепление и маховик.'],
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
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchSingle' } },
        dossier: {
          en: {
            headline: 'Honda M6 6-Speed Manual — Slick Linkage & Simple Single Clutch',
            strengths: ['Direct mechanical shift feel and affordable single-mass clutch replacement (€550–€800).'],
            watchouts: ['Check clutch master cylinder creak or dampness around the pedal.'],
            beforeYouBuy: ['Test crisp 2nd/3rd gear engagement cold and check clutch bite height.']
          },
          de: {
            headline: 'Honda M6 6-Gang-Getriebe — Präzise Führung ohne ZMS',
            strengths: ['Direktes Schaltgefühl und günstige Einmassen-Kupplung (550–800 €).'],
            watchouts: ['Kupplungsgeberzylinder auf Knarzen oder Feuchtigkeit am Pedal prüfen.'],
            beforeYouBuy: ['Kaltes Schalten in 2./3. Gang und Kupplungsdruckpunkt testen.']
          },
          ru: {
            headline: 'Механика Honda M6 6-МКПП — Чёткие ходы и простое сцепление',
            strengths: ['Отличная избирательность и недорогое одномассовое сцепление (€550–800).'],
            watchouts: ['Проверьте главный цилиндр сцепления на скрип или подтекание.'],
            beforeYouBuy: ['Проверьте включение 2-й и 3-й передач на холодную.']
          }
        }
      },
      '6-mt-dmf': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Honda M6 · Manual + DMF', de: 'Honda M6 · Schaltgetriebe + ZMS', ru: 'Honda M6 · Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: {
            headline: 'Honda M6 6-Speed Manual — Solid Diesel Box, Watch DMF',
            strengths: ['Strong gearsets handle 350 Nm i-DTEC torque cleanly.'],
            watchouts: ['Dual-mass flywheel & clutch wear around 160k–210k km (€950–€1,400).'],
            beforeYouBuy: ['Accelerate hard in 4th gear from 1,800 rpm to rule out clutch slip.']
          },
          de: {
            headline: 'Honda M6 6-Gang-Getriebe — Robust für Diesel, ZMS beachten',
            strengths: ['Standfeste Zahnräder verkraften 350 Nm i-DTEC-Drehmoment mühelos.'],
            watchouts: ['ZMS und Kupplung sind bei ca. 160–210 Tkm fällig (950–1.400 €).'],
            beforeYouBuy: ['Im 4. Gang ab 1.800 U/min voll beschleunigen, um Kupplungsrutschen auszuschließen.']
          },
          ru: {
            headline: 'Механика Honda M6 6-МКПП — Держит 350 Н·м, контроль ДММ',
            strengths: ['Крепкие валы легко справляются с тягой 2.2 i-DTEC.'],
            watchouts: ['Двухмассовый маховик и сцепление служат 160–210 тыс. км (€950–1 400).'],
            beforeYouBuy: ['Ускорьтесь на 4-й передаче с 1 800 об/мин для проверки сцепления.']
          }
        }
      },
      '5-at': {
        category: 'automatic',
        label: { en: '5-Speed Torque Auto', de: '5-Stufen-Wandlerautomatik', ru: '5-ст. Автомат' },
        shortLabel: { en: '5-AT', de: '5-AT', ru: '5-АКПП' },
        subLabel: { en: 'Honda 5AT · Hydraulic Torque Converter', de: 'Honda 5AT · Wandlerautomatik', ru: 'Honda 5AT · Гидротрансформатор' },
        specOverrides: { gearbox: '@auto5', clutchDmf: '@torqueConv' },
        subStatDeltas: {
          transmissionDriveline: {
            score: 8.8,
            badges: { en: ['Proven Honda 5AT', 'Hydraulic Torque Converter'], de: ['Robuste Honda 5AT', 'Wandlerautomatik'], ru: ['Надёжная 5-АКПП Honda', 'Гидротрансформатор'] }
          }
        },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [{ k: 'gearboxModel', v: { en: 'Honda 5-Speed Hydraulic Automatic (5AT)', de: 'Honda 5-Stufen-Wandlerautomatik (5AT)', ru: '5-ст. гидромеханическая АКПП Honda (5AT)' } }],
              note: { en: 'Very durable multi-shaft 5-speed automatic; drain-and-fill with Honda ATF DW-1 every 50,000 km.', de: 'Sehr haltbare 5-Stufen-Automatik; alle 50.000 km Teilölwechsel mit Honda ATF DW-1.', ru: 'Очень живучий 5-ст. автомат; частичная замена масла Honda ATF DW-1 каждые 50 тыс. км.' }
            },
            clutchDmf: '@clutchTorqueConv'
          }
        },
        dossier: {
          en: {
            headline: 'Honda 5-Speed Torque Auto — Long-Lived Cruiser, Mildly Thirstier',
            strengths: ['Eliminates diesel DMF/clutch bills and shifts smoothly for 250k+ km with ATF DW-1 changes.'],
            watchouts: ['Only 5 ratios blunt 0–100 sprints and add ~0.7–0.8 L/100 km.'],
            beforeYouBuy: ['Inspect ATF color on the dipstick and test smooth R→D engagement warm and cold.']
          },
          de: {
            headline: 'Honda 5-Stufen-Automatik — Langlebiger Gleiter mit leichtem Mehrverbrauch',
            strengths: ['Spart Kupplung/ZMS und erreicht mit ATF DW-1 hohe Laufleistungen.'],
            watchouts: ['Nur 5 Gänge kosten Beschleunigung und ~0,7–0,8 L/100 km Mehrverbrauch.'],
            beforeYouBuy: ['ATF-Zustand am Peilstab prüfen und sanftes Schalten R→D testen.']
          },
          ru: {
            headline: 'Автомат Honda 5AT — Надёжный круизёр с умеренной доплатой по расходу',
            strengths: ['Нет расходов на сцепление и ДММ; ресурс 250+ тыс. км при свежем ATF DW-1.'],
            watchouts: ['5 передач замедляют разгон и добавляют ~0,7–0,8 л/100 км расхода.'],
            beforeYouBuy: ['Проверьте чистоту ATF на щупе и мягкость включения R→D.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: 'Every 50,000 km', de: 'Alle 50.000 km', ru: 'Каждые 50 000 км' }, action: { en: 'Honda 5AT drain-and-fill with ATF DW-1', de: 'Honda 5AT Teilölwechsel mit ATF DW-1', ru: 'Частичная замена ATF DW-1 в АКПП 5AT' }, cost: '€140–210' }
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
            estUsedPrice: '€9,700',
            specOverrides: { sprint0100: '10.7 s', topSpeed: '212 km/h', realWorldFuel: '8.1–8.9 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.3,
                badges: {
                  en: ['0–100 km/h: 10.7 s (5-AT)', '212 km/h Top Speed'],
                  de: ['0–100 km/h: 10,7 s (5-AT)', '212 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,7 s (5-AT)', 'Макс. 212 km/h']
                }
              },
              efficiencyFuel: {
                score: 6.5,
                badges: {
                  en: ['8.1–8.9 L/100 km (5-AT)'],
                  de: ['8,1–8,9 L/100 km (5-AT)'],
                  ru: ['8,1–8,9 L/100 km (5-AT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.0L i-VTEC NA', de: '2.0L i-VTEC Sauger', ru: '2.0L i-VTEC Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual6', clutchDmf: '@singleClutch',
          towingBraked: '1,500 kg', sprint0100: '9.4 s', topSpeed: '215 km/h', peakTorque: '192 Nm @ 4,100',
          passingPunch: { en: 'Smooth · Likes Revs', de: 'Kultiviert · Drehfreudig', ru: 'Плавно · Любит обороты' },
          realWorldFuel: '7.4–8.2 L/100 km', tankRange: '65 L · ~830 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierMod', timingDrive: '@chain', serviceWear: '@tierLow'
        },
        dossierGroup: 'petrol-conv-auto',
        buyerFitGroup: 'na-petrol',
        isDefault: true,
        fuelType: 'petrol',
        hp: 156,
        shortTitle: 'ACCORD 2.0 i-VTEC',
        fullName: '2011 Honda Accord 2.0 i-VTEC',
        engineBadge: '2.0L i-VTEC NA • 156 HP',
        engineSubLabel: {
          en: 'R20A3 SOHC Chain NA (2008–2015) • 6-MT / Opt. 5-AT • 192 Nm',
          de: 'R20A3 SOHC-Ketten-Saugmotor (2008–2015) • 6-Gang / Opt. 5-AT • 192 Nm',
          ru: 'Атмосферный R20A3 с цепью (2008–2015) • 6-ст. МКПП / Опц. 5-АКПП • 192 Н·м'
        },
        rarityLabel: {
          en: 'RELIABILITY ICON',
          de: 'ZUVERLÄSSIGKEITS-IKONE',
          ru: 'ИКОНА НАДЁЖНОСТИ'
        },
        originalMsrp: {
          en: '€27,900 New',
          de: '27.900 € Neu',
          ru: '€27 900 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ Bulletproof R20A3 Chain NA • Double-Wishbone Front • Japanese Build Quality',
          de: '✦ Unverwüstlicher R20A3 Kettenmotor • Doppelquerlenker vorn • Top-Verarbeitung',
          ru: '✦ Вечный цепной R20A3 • Двухрычажная подвеска • Японская сборка'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF R20A3 CHAIN NA',
            'DOUBLE-WISHBONE HANDLING',
            'LOWEST ROUTINE REPAIR RISK',
            'QUIET & COMFORTABLE RIDE',
            '1,500 KG BRAKED TOWING'
          ],
          de: [
            'UNVERWÜSTLICHER R20A3 MOTOR',
            'DOPPELQUERLENKER-FAHRWERK',
            'SEHR GERINGES REPARATURRISIKO',
            'LEISER & KOMFORTABLER FAHRKOMFORT',
            '1.500 KG ANHÄNGELAST'
          ],
          ru: [
            'ВЕЧНЫЙ ЦЕПНОЙ ДВИГАТЕЛЬ R20A3',
            'ДВУХРЫЧАЖНАЯ ПОДВЕСКА',
            'МИНИМАЛЬНЫЙ РИСК ПОЛОМОК',
            'ТИХИЙ И КОМФОРТНЫЙ ХОД',
            'БУКСИРОВКА ДО 1 500 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'MODEST TORQUE (192 NM)',
            'NARROW 467L SEDAN TRUNK OPENING',
            'TIGHT REAR HEADROOM FOR TALL ADULTS'
          ],
          de: [
            'MÄSSIGES DREHMOMENT (192 NM)',
            'SCHMALE 467L LIMO-LADELUKE',
            'KNAPPE KOPFFREIHEIT HINTEN'
          ],
          ru: [
            'СКРОМНАЯ ТЯГА (192 Н·М)',
            'УЗКИЙ ПРОЁМ БАГАЖНИКА (467 Л)',
            'ТЕСНОВАТО ПО ВЫСОТЕ СЗАДИ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.8,
          comfortCabin: 8.2,
          spacePracticality: 7.5,
          performanceDynamics: 7.2,
          runningCostsTco: 8.2
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L i-VTEC Inline-4 NA (R20A3)', de: '2.0L i-VTEC Reihenvierzylinder Sauger (R20A3)', ru: '2.0L i-VTEC рядный 4-цил. атмосферный (R20A3)' } },
                  { k: 'displacement', v: '1,997 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V SOHC', de: '4 Zylinder · 16V SOHC', ru: '4 цилиндра · 16V SOHC' } },
                  { k: 'output', v: { en: '115 kW (156 HP)', de: '115 kW (156 PS)', ru: '115 кВт (156 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Ultra-reliable R20 naturally aspirated engine — effortless 350,000+ km longevity.', de: 'Extrem zuverlässiger R20-Sauger mit bewährter Laufleistung über 350.000+ km.', ru: 'Сверхнадёжный атмосферник R20 с ресурсом 350 000+ км.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.7,
            badges: {
              en: ['R20A3 Chain SOHC NA', 'No Turbo / No Injectors Risk'],
              de: ['R20A3 SOHC-Kettenmotor', 'Kein Turbo / Direkteinspritzer'],
              ru: ['Цепной R20A3 без турбины', 'Простой распределённый впрыск']
            },
            dossier: {
              en: {
                headline: 'Ultra-Durable R20A3 SOHC Chain Engine— Peak Japanese Simplicity With Minimal Failure Points',
                strengths: [
                  'Clean intake valves with zero direct-injection carbon deposits and no belt intervals.',
                  'Effortlessly reaches 300,000–400,000 km with routine synthetic oil changes.'
                ],
                watchouts: [
                  'Inspect screw-adjustable valve lash every 100,000 km and use 0W-20/5W-30 oil to avoid slight ring coking past 200k km.',
                  'Simple ancillary wear items rather than internal engine defects.'
                ],
                beforeYouBuy: [
                  'Feel the rear brake discs after a short drive— seized rear handbrake calipers overheat and drag easily.',
                  'Check service history for regular valve clearance adjustments and smooth automatic or manual shifting.',
                  'Inspect around the windscreen top edge, sunroof border, and rear wheel arches for early rust.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual synthetic oil, 2-yr brake fluid & change Honda 5-AT auto oil at 45k km / 3 yrs (if auto)',
                    cost: '€150–270',
                    ifIgnored: 'Stale 5-speed automatic fluid shifts harshly & dirty oil ages piston rings early',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Adjust valve gaps (~80k), swap spark plugs & inspect 6–7 yr aging rubber drive belt and coolant hoses',
                    cost: '€280–440',
                    ifIgnored: 'Tight aged exhaust valves burn & dried 6-yr serpentine belt + hoses crack',
                    damageCost: '€1,000–1,700'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Adjust engine valves, replace spark plugs & free rear calipers',
                    cost: '€250–420',
                    ifIgnored: 'Overheated rear brakes & uneven idle from tight valves (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'yellow',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Change manual or 5-speed automatic gearbox oil',
                    cost: '€150–280',
                    ifIgnored: 'Jerky gear changes or worn gearbox synchro rings (components & fluids also degrade over years)',
                    damageCost: '€1,400–2,200'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Replace clutch kit (manual) & front lower suspension ball joints',
                    cost: '€650–1,000',
                    ifIgnored: 'Slipping clutch or dangerous worn front wheel ball joint (components & fluids also degrade over years)',
                    damageCost: '€1,500–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Refresh starter motor, alternator brushes & water pump',
                    cost: '€320–550',
                    ifIgnored: 'Sudden no-start or leaking water pump',
                    damageCost: '€900–1,500'
                  }
                ]
              },
              de: {
                headline: 'Extrem haltbarer R20A3 SOHC-Kettenmotor— maximale Einfachheit und geringstes Defektrisiko',
                strengths: [
                  'Keine Einlassverkokung wie bei Direkteinspritzern und keine teuren Zahnriemenwechsel.',
                  'Erreicht bei regulärem Ölservice problemlos 300.000 bis 400.000 km Laufleistung.'
                ],
                watchouts: [
                  'Ventilspiel alle 100.000 km prüfen; Ölwechsel unter 15.000 km beugen Ölkohle an Ringen ab 200 Tkm vor.',
                  'Typischer Nebenaggregat-Verschleiß ohne strukturelle Motorschäden.',
                  'Unteren Simmerring der Servolenkung und Schläuche auf leichtes Schwitzen kontrollieren.'
                ],
                beforeYouBuy: [
                  'Nach der Probefahrt vorsichtig an den hinteren Bremsfelgen fühlen— festsitzende Handbrems-Sättel überhitzen schnell.',
                  'Scheibenrahmen oben, Schiebedachkante und hintere Radläufe gründlich auf Rostblasen untersuchen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Synthetiköl, alle 2 J. Bremsflüssigkeit & bei 5-Gang-Automatik Öl alle 45 Tkm / 3 J.',
                    cost: '150–270 €',
                    ifIgnored: 'Gealtertes Automatiköl schaltet hart & schmutziges Motoröl fördert Ringverschleiß',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ventilspiel einstellen (~80 Tkm), Kerzen wechseln & 6–7-J.-Riemen sowie Kühlerschläuche prüfen',
                    cost: '280–440 €',
                    ifIgnored: 'Zu enges Ventilspiel verbrennt Ventile; gealterter Riemen und Schläuche reißen',
                    damageCost: '1.000–1.700 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ventilspiel einstellen, Kerzen & hintere Bremssättel überholen',
                    cost: '250–420 €',
                    ifIgnored: 'Glühende Bremsen hinten & verbrannte Auslassventile (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'yellow',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Getriebeöl (Schalter oder 5-Gang-Automatik) erneuern',
                    cost: '150–280 €',
                    ifIgnored: 'Ruckelige Schaltwechsel oder hakelige Gänge',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Kupplungssatz & vordere untere Traggelenke ersetzen',
                    cost: '650–1.000 €',
                    ifIgnored: 'Rutschende Kupplung oder gefährlich ausgeschlagenes Gelenk (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Anlasser, Lichtmaschinen-Kohlen & Wasserpumpe warten',
                    cost: '320–550 €',
                    ifIgnored: 'Plötzliches Nicht-Anspringen oder Kühlwasserverlust (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '900–1.500 €'
                  }
                ]
              },
              ru: {
                headline: 'Неубиваемый цепной R20A3 SOHC— максимум японской простоты и минимума поломок',
                strengths: [
                  'Впускные клапаны всегда чистые без нагара, а привод ГРМ служит весь ресурс мотора.',
                  'При регулярной замене масла спокойно проходит 300 000–400 000 км без капитального ремонта.'
                ],
                watchouts: [
                  'Проверяйте клапаны каждые 100 000 км и меняйте масло до 10–12 тыс. км для защиты маслосъёмных колец.',
                  'Стандартный износ навесного без проблем с самим блоком.'
                ],
                beforeYouBuy: [
                  'Пощупайте задние диски после короткой поездки — прикипевшие суппорты стояночного тормоза перегреваются и подклинивают.',
                  'Проверьте по истории регулярную регулировку клапанов и плавность переключений.',
                  'Осмотреть верхнюю кромку лобового стекла, люк и задние арки на очаги ржавчины.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно менять масло и тормозную раз в 2 года, а на 5-ст. АКПП масло — каждые 45 тыс. / 3 года',
                    cost: '€150–270',
                    ifIgnored: 'Старая жидкость вызывает рывки автомата, а старое масло изнашивает кольца',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Отрегулировать клапаны (~80 тыс.), заменить свечи и проверить стареющие за 6–7 лет ремень и шланги',
                    cost: '€280–440',
                    ifIgnored: 'Зажатые клапаны прогорают, а потрескавшиеся от возраста шланги и ремень подведут в пути',
                    damageCost: '€1 000–1 700'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Отрегулировать клапаны, свечи и перебрать задние суппорты',
                    cost: '€250–420',
                    ifIgnored: 'Перегрев задних тормозов и прогар пережатых клапанов (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'yellow',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Сменить масло в механике или 5-ступенчатом автомате',
                    cost: '€150–280',
                    ifIgnored: 'Жёсткие толчки коробки или износ синхронизаторов (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 400–2 200'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Заменить сцепление (МКПП) и нижние шаровые опоры спереди',
                    cost: '€650–1 000',
                    ifIgnored: 'Пробуксовка сцепления или вырыв изношенной шаровой (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Обслужить стартер, щётки генератора и водяной насос',
                    cost: '€320–550',
                    ifIgnored: 'Неожиданный отказ пуска или течь антифриза (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€900–1 500'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.4,
            badges: {
              en: ['Crisp 6-MT / Tough 5-AT', 'Long Clutch & ATF Life'],
              de: ['Präzise 6-Gang / Robuste 5-AT', 'Langlebige Kupplung & Öl'],
              ru: ['Чёткая 6-МКПП / 5-АКПП', 'Большой ресурс узлов']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Tough Double-Wishbone Base', 'Check Rear Arches & Sills'],
              de: ['Stabile Doppelquerlenker', 'Radläufe & Schweller prüfen'],
              ru: ['Крепкая многорычажная база', 'Ржавчина задних арок и порогов']
            }
          },
          electronicsReliability: {
            score: 9.1,
            badges: {
              en: ['Rock-Solid Denso Electrics', 'Watch Bluetooth Battery Drain'],
              de: ['Stabile Denso-Elektronik', 'Bluetooth-Modul Ruhestrom'],
              ru: ['Надёжная электрика Denso', 'Утечка через модуль Bluetooth']
            }
          },
          rideNoiseComfort: {
            score: 8.6,
            badges: {
              en: ['Double-Wishbone Road Soak', 'Refined Wind Insulation'],
              de: ['Souveränes Doppelquerlenker-Bild', 'Gute Autobahn-Dämmung'],
              ru: ['Плавная многорычажка', 'Тишина и удобные кресла']
            }
          },
          interiorQualityFeatures: {
            score: 8.6,
            badges: {
              en: ['Thick Soft-Touch Dashboard', 'Damped Physical Climate Buttons'],
              de: ['Satt geschäumtes Armaturenbrett', 'Klare physische Klimatasten'],
              ru: ['Толстый мягкий пластик', 'Удобные физические кнопки']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.73 m Length • 11.4 m Turn', 'Low Nose • Tight Park Spaces'],
              de: ['4,73 m Länge • 11,4 m Kreis', 'Breite Karosserie beim Parken'],
              ru: ['Длина 4,73 м • Разворот 11,4 м', 'Широкий в тесных дворах']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2008)', '6 Airbags + VSA + LKAS Opt.'],
              de: ['Euro NCAP 5★ (2008)', '6 Airbags + VSA-ESP'],
              ru: ['Euro NCAP 5★ (2008)', '6 подушек + VSA (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.4,
            badges: {
              en: ['Generous Front Captain Space', 'Compact Rear Legroom For Class'],
              de: ['Großzügiger Raum vorn', 'Fond für Klasse recht kompakt'],
              ru: ['Просторно на первом ряду', 'Тесноватый для класса второй ряд']
            }
          },
          interiorBootSpace: {
            score: 6.9,
            badges: {
              en: ['467L Sedan Boot', 'Narrow Trunk Pass-Through'],
              de: ['467L Kofferraum', 'Schmale Ladeöffnung'],
              ru: ['Багажник седана 467 л', 'Узкий проём погрузки']
            }
          },
          payloadTowing: {
            score: 5.8,
            badges: {
              en: ['1,500 kg Braked Tow', '475 kg Payload'],
              de: ['1.500 kg Anhängelast', '475 kg Zuladung'],
              ru: ['Прицеп до 1 500 кг', 'Грузоподъёмность 475 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.4,
            badges: {
              en: ['0–100 km/h: 9.3 s', '215 km/h Top Speed'],
              de: ['0–100 km/h: 9,3 s', '215 km/h Spitze'],
              ru: ['0–100 км/ч: 9,3 с', 'Макс. 215 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 5.1,
            badges: {
              en: ['192 Nm • High-Rev Delivery', 'Needs Downshifts To Pass'],
              de: ['192 Nm • Drehzahl nötig', 'Herunterschalten zum Überholen'],
              ru: ['192 Н·м • Любит обороты', 'Требует понижения передачи']
            }
          },
          handlingAgility: {
            score: 8.5,
            badges: {
              en: ['Double-Wishbone Front', 'Composed Highway Grip'],
              de: ['Doppelquerlenker vorn', 'Sehr spurstabil'],
              ru: ['Двухрычажка спереди', 'Отличная курсовая устойчивость']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', '300 mm Front Discs • Firm Pedal'],
              de: ['100–0 km/h: 36,4 m', '300 mm Scheiben vorn • Druckpunkt'],
              ru: ['100–0 км/ч: 36,4 м', '300 мм спереди • Информативность']
            }
          },
          efficiencyFuel: {
            score: 7.3,
            badges: {
              en: ['7.6 L/100km', '165 g/km CO2'],
              de: ['7,6 L/100km', '165 g/km CO2'],
              ru: ['7,6 л/100 км', '165 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 7.9,
            badges: {
              en: ['Moderate 2.0L Tax • Euro 5', 'Reasonable Sedan Insurance'],
              de: ['Faire 2.0-Steuer • Euro 5', 'Normale Limousinen-Versicherung'],
              ru: ['Умеренный налог 2,0 • Euro 5', 'Средняя страховка седана']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Valve-Clearance Check & Iridium Spark Plugs', de: 'Ventilspiel prüfen & Iridium-Zündkerzen wechseln', ru: 'Регулировка клапанов и иридиевые свечи' }, cost: '€220–350' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Oil Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '150–210k km · 10–14 yrs', action: { en: 'Front Upper Ball Joints & EPS Steering Rack Bushing', de: 'Obere Traggelenke vorn & Lenkgetriebe-Buchse', ru: 'Верхние шаровые опоры и втулка рулевой рейки' }, cost: '€280–520', risk: { en: 'Knocking over bumps & steering play', de: 'Poltern auf Bodenwellen & Lenkungsspiel', ru: 'Стук на неровностях и люфт руля' }, damage: '€900–1,500' }
              ]
            },
            score: 9.1,
            badges: {
              en: ['Simple NA Routine Servicing', 'Very Few Unexpected Repairs'],
              de: ['Günstiger Sauger-Service', 'Kaum teure Reparaturen'],
              ru: ['Простое регламентное ТО', 'Минимум неплановых трат']
            }
          },
          depreciationResale: {
            score: 9.0,
            badges: {
              en: ['High Honda Resale Demand', 'Slow Value Drop'],
              de: ['Hohe Gebrauchtnachfrage', 'Sehr wertstabil'],
              ru: ['Высокий спрос на вторичке', 'Медленно теряет в цене']
            }
          }
        }
      },
      {
        id: '2.4-ivtec',
        defaultGearboxId: '6-mt-sc',
        gearboxes: [
          { id: '6-mt-sc', isDefault: true },
          {
            id: '5-at',
            estUsedPrice: '€12,200',
            specOverrides: { sprint0100: '9.7 s', topSpeed: '227 km/h', realWorldFuel: '9.5–10.6 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 6.0,
                badges: {
                  en: ['0–100 km/h: 9.7 s (5-AT)', '227 km/h Top Speed'],
                  de: ['0–100 km/h: 9,7 s (5-AT)', '227 km/h Spitze'],
                  ru: ['0–100 км/ч: 9,7 s (5-AT)', 'Макс. 227 km/h']
                }
              },
              efficiencyFuel: {
                score: 4.5,
                badges: {
                  en: ['9.5–10.6 L/100 km (5-AT)'],
                  de: ['9,5–10,6 L/100 km (5-AT)'],
                  ru: ['9,5–10,6 L/100 km (5-AT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.4L i-VTEC NA', de: '2.4L i-VTEC Sauger', ru: '2.4L i-VTEC Атм.' },
          forcedInduction: '@na', injection: '@port', gearbox: '@manual6', clutchDmf: '@singleClutch',
          towingBraked: '1,600 kg', sprint0100: '8.1 s', topSpeed: '227 km/h', peakTorque: '234 Nm @ 4,300',
          passingPunch: { en: 'Crisp High-Rev Pull', de: 'Drehfreudig & stark', ru: 'Мощный подхват на верхах' },
          realWorldFuel: '8.8–9.8 L/100 km', tankRange: '65 L · ~700 km', euroNorm: 'Euro 5',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierLowMod'
        },
        dossierGroup: 'petrol-conv-auto',
        buyerFitGroup: 'na-petrol',
        buyerFitOverrides: {
          ideal: [
            'accordRefinedDrive',
            'accord24HighRev',
            'accordVtecDurability',
            'globalPetrolCityZones'
          ]
        },
        isDefault: false,
        fuelType: 'petrol',
        hp: 201,
        shortTitle: 'ACCORD 2.4 i-VTEC',
        fullName: '2011 Honda Accord 2.4 i-VTEC',
        engineBadge: '2.4L i-VTEC NA • 201 HP',
        engineSubLabel: {
          en: 'K24Z3 DOHC Chain NA (2008–2015) • 6-MT / Opt. 5-AT • 234 Nm',
          de: 'K24Z3 DOHC-Ketten-Saugmotor (2008–2015) • 6-Gang / Opt. 5-AT • 234 Nm',
          ru: 'Легендарный цепной K24Z3 (2008–2015) • 6-ст. МКПП / Опц. 5-АКПП • 234 Н·м'
        },
        rarityLabel: {
          en: 'NA DRIVER\'S SEDAN',
          de: 'SAUGMOTOR-KLASSIKER',
          ru: 'АТМОСФЕРНЫЙ ХИТ'
        },
        originalMsrp: {
          en: '€34,400 New',
          de: '34.400 € Neu',
          ru: '€34 400 новый'
        },
        estUsedPrice: '€11,500',
        perkLabel: {
          en: '✦ Legendary K24Z3 201 HP • 7,100 RPM VTEC • Bulletproof Chain NA',
          de: '✦ Legendärer K24Z3 (201 PS) • 7.100 U/min VTEC • Robuste Steuerkette',
          ru: '✦ Легендарный K24Z3 (201 л.с.) • 7 100 об/мин VTEC • Вечная цепь'
        },
        remarkablePositives: {
          en: [
            'LEGENDARY K24Z3 NA ENGINE',
            '7.8S 0–100 • 227 KM/H TOP SPEED',
            'DOUBLE-WISHBONE CHASSIS',
            'GOOD BRAKES (320MM)',
            'STRONG ENTHUSIAST RESALE'
          ],
          de: [
            'LEGENDÄRER K24Z3 SAUGMOTOR',
            '7,8S 0–100 • 227 KM/H SPITZE',
            'DOPPELQUERLENKER-FAHRWERK',
            'STARKE BREMSEN (320MM)',
            'STARKER WERTERHALT'
          ],
          ru: [
            'ЛЕГЕНДАРНЫЙ АТМОСФЕРНЫЙ K24Z3',
            '7,8 С ДО 100 • МАКС. 227 КМ/Ч',
            'ДВУХРЫЧАЖНАЯ ПОДВЕСКА',
            'ХОРОШИЕ ТОРМОЗА (320 ММ)',
            'ОТЛИЧНАЯ ЛИКВИДНОСТЬ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 9.1 L/100KM',
            'CHECK OIL LEVEL BETWEEN SERVICES',
            'NARROW 467L SEDAN TRUNK OPENING'
          ],
          de: ['DURSTIGE 9,1 L/100KM', 'ÖLSTAND REGELMÄSSIG PRÜFEN', 'SCHMALE 467L LIMO-LADELUKE'],
          ru: ['РАСХОД 9,1 Л/100 КМ', 'КОНТРОЛЬ УРОВНЯ МАСЛА В K24', 'УЗКИЙ ПРОЁМ БАГАЖНИКА (467 Л)']
        },
        pillarScores: {
          reliabilityQuality: 8.7,
          comfortCabin: 8.2,
          spacePracticality: 7.5,
          performanceDynamics: 7.7,
          runningCostsTco: 7.3
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.4L i-VTEC Inline-4 NA (K24Z3)', de: '2.4L i-VTEC Reihenvierzylinder Sauger (K24Z3)', ru: '2.4L i-VTEC рядный 4-цил. атмосферный (K24Z3)' } },
                  { k: 'displacement', v: '2,354 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '148 kW (201 HP)', de: '148 kW (201 PS)', ru: '148 кВт (201 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol · Timing Chain', de: 'Benzin · Steuerkette', ru: 'Бензин · Цепь ГРМ' } }
                ],
                note: { en: 'Iconic 201 HP Honda K24 engine — combines thrilling 7,000 rpm response with legendary durability.', de: 'Legendärer 201-PS-K24-Sauger — vereint Drehfreude bis 7.000 U/min mit höchster Haltbarkeit.', ru: 'Культовый 201-сильный K24 — яркий характер и легендарная выносливость.' }
              },
              forcedInduction: '@naNoTurbo', injection: '@portInj'
            },
            score: 9.6,
            badges: {
              en: ['K24Z3 Chain DOHC NA', 'Forged Internals & Chain'],
              de: ['K24Z3 DOHC-Kettenmotor', 'Geschmiedeter Kurbeltrieb'],
              ru: ['Цепной K24Z3 DOHC', 'Надёжный цепной ГРМ']
            },
            dossier: {
              en: {
                headline: 'High-Revving K24Z3 DOHC 2.4L Chain Engine— Forged Internals Built for Big Mileage',
                strengths: [
                  'Motor-sport-grade bottom end paired with port injection and zero turbo lag or heat stress.',
                  'Loves high rpm up to 7,100 rpm while comfortably exceeding 350,000 km with regular servicing.'
                ],
                watchouts: [
                  'A 1-second startup rattle from the VTC pin is common after 140k km (fixable with updated spring/actuator).',
                  'Spirited VTEC driving or 20,000 km oil intervals can varnish piston oil rings; check dipstick level and use 5W-30.',
                  'Check valve clearance every 100,000 km to protect cam lobes on higher-mileage units.'
                ],
                beforeYouBuy: [
                  'Listen at cold morning start for a 2-second rattling/grinding sound— worn upper camshaft gear and chain tension.',
                  'Check the dipstick oil level closely: high-revving 2.4 engines burn oil if pushed hard on old oil.',
                  'Check rear brake discs for dragging/overheating and front suspension ball joints for knocking.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict 10,000 km / 1 yr synthetic oil (protects cam gear!) & 5-AT auto fluid every 45k km / 3 yrs',
                    cost: '€160–290',
                    ifIgnored: 'Dirty aged oil causes cold cam-gear rattle & premature 2.4 piston-ring oil use',
                    damageCost: '€1,400–2,300'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Adjust valve gaps, replace plugs & check 6-yr aging high-pressure steering hose + serpentine belt',
                    cost: '€300–480',
                    ifIgnored: 'Heat-aged power-steering hose splits & sprays flammable fluid onto hot exhaust',
                    damageCost: '€1,100–1,900'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Top up oil frequently, adjust valves & change gearbox oil',
                    cost: '€250–420',
                    ifIgnored: 'Low oil level stretches timing chain very quickly (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Replace rattling cold-start camshaft gear & tensioner',
                    cost: '€600–900',
                    ifIgnored: 'Chain jumps timing tooth and triggers engine faults',
                    damageCost: '€2,000–3,200'
                  },
                  {
                    tier: 'orange',
                    km: '170,000–210,000 km • 11–13 yrs',
                    action: 'Replace clutch kit & front lower suspension wishbone bushes',
                    cost: '€700–1,100',
                    ifIgnored: 'Slipping clutch & loose steering wander at highway speed (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,500–2,300'
                  },
                  {
                    tier: 'red',
                    km: '210,000–250,000 km • 13–15+ yrs',
                    action: 'Replace full timing chain kit, guides & water pump',
                    cost: '€850–1,250',
                    ifIgnored: 'Stretched chain snaps or bends engine valves (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,500–3,800'
                  }
                ]
              },
              de: {
                headline: 'Drehfreudiger K24Z3 2.4L DOHC-Kettenmotor— geschmiedete Innereien für hohe Laufleistungen',
                strengths: [
                  'Extrem standfester Kurbeltrieb kombiniert mit Saugrohreinspritzung ohne Turbo-Verschleiß.',
                  'Drehfreudig bis über 7.000/min und bei guter Pflege problemlos gut für über 350.000 km.'
                ],
                watchouts: [
                  'Kurzes 1-Sekunden-Rasseln beim Kaltstart ab ca. 140 Tkm bekannt; rechtzeitig instand setzen.',
                  'Häufiges Ausdrehen oder lange Ölintervalle fördern Ringverkokung— Ölstand regelmäßig prüfen und 5W-30 fahren.',
                  'Ventilspiel alle 100.000 km kontrollieren, um Nockenverschleiß bei hohen Laufleistungen auszuschließen.'
                ],
                beforeYouBuy: [
                  'Beim Kaltstart 2 Sekunden genau hinhören— kurzes Rasseln verrät ein verschlissenes Nockenwellen-Verstellrad.',
                  'Ölstand am Peilstab prüfen: Drehzahlfreudige 2,4-Liter-Motoren verbrauchen bei vernachlässigtem Öl spürbar Öl.',
                  'Hintere Bremsen auf Schleifen sowie vordere Traggelenke auf Poltern testen.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Öl streng alle 10 Tkm / 1 J. wechseln (schützt Nockenwellenrad) & Automatiköl alle 45 Tkm / 3 J.',
                    cost: '160–290 €',
                    ifIgnored: 'Altöl führt früh zum Kaltstart-Rasseln des Verstellers & steigendem Ölverbrauch',
                    damageCost: '1.400–2.300 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Ventile einstellen, Kerzen erneuern & 6-J.-Hochdruck-Servoschlauch samt Keilriemen prüfen',
                    cost: '300–480 €',
                    ifIgnored: 'Altersbrüchiger Servoschlauch platzt und sprüht Servoöl auf den heißen Auspuff',
                    damageCost: '1.100–1.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Ölstand eng prüfen, Ventile einstellen & Getriebeöl wechseln',
                    cost: '250–420 €',
                    ifIgnored: 'Zu wenig Öl längt die Steuerkette im Zeitraffer (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Rasselndes Nockenwellen-Verstellrad & Kettenspanner ersetzen',
                    cost: '600–900 €',
                    ifIgnored: 'Steuerkette überspringt Zahn und meldet Motorfehler (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.000–3.200 €'
                  },
                  {
                    tier: 'orange',
                    km: '170.000–210.000 km • 11–13 J.',
                    action: 'Kupplungssatz & vordere Querlenkerbuchsen erneuern',
                    cost: '700–1.100 €',
                    ifIgnored: 'Rutschende Kupplung & unruhige Lenkung auf der Autobahn (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.500–2.300 €'
                  },
                  {
                    tier: 'red',
                    km: '210.000–250.000 km • 13–15+ J.',
                    action: 'Kompletten Steuerkettensatz, Schienen & Wasserpumpe tauschen',
                    cost: '850–1.250 €',
                    ifIgnored: 'Kettenriss oder Übersprung verbiegt alle Ventile (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.500–3.800 €'
                  }
                ]
              },
              ru: {
                headline: 'Высокооборотистый цепной K24Z3 2.4 DOHC— кованый низ и огромный ресурс',
                strengths: [
                  'Прочнейшая поршневая группа с распределённым впрыском без турбокомпрессора и ТНВД.',
                  'Охотно крутится свыше 7 000 об/мин и при качественном ТО легко проходит 350 000+ км.'
                ],
                watchouts: [
                  'Частая особенность серии K24 после 140 тыс. км (кратковременный треск в первые 1–2 секунды).',
                  'Регулярная работа во VTEC и затянутые интервалы ТО подсаживают кольца— контролируйте уровень масла.',
                  'Регулировка каждые 100 000 км продлевает жизнь кулачкам распредвала.'
                ],
                beforeYouBuy: [
                  'Послушать холодный пуск— короткий треск в первые 2 секунды указывает на износ шестерни распредвала.',
                  'Оценить масло щупом: оборотистый 2.4 при редкой замене любит подъедать масло.',
                  'Проверить задние тормоза на подклинивание и переднюю подвеску на стуки.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло строго раз в 10 тыс. / 1 год (беречь фазорегулятор!) и масло 5-АКПП каждые 45 тыс. / 3 года',
                    cost: '€160–290',
                    ifIgnored: 'Грязное масло вызывает утренний треск шестерни распредвала и ранний масложор',
                    damageCost: '€1 400–2 300'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Регулировка клапанов, свечи и проверка стареющего к 6 годам шланга высокого давления ГУР и ремня',
                    cost: '€300–480',
                    ifIgnored: 'Рассохшийся шланг ГУР лопается и может пролить жидкость на горячий выпуск',
                    damageCost: '€1 100–1 900'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Следить за уровнем масла, настроить клапаны и сменить масло КПП',
                    cost: '€250–420',
                    ifIgnored: 'Масляное голодание мгновенно вытягивает цепь двигателя (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Заменить трещащую на холодную шестерню распредвала и натяжитель',
                    cost: '€600–900',
                    ifIgnored: 'Перескок цепи на зуб и ошибка синхронизации мотора',
                    damageCost: '€2 000–3 200'
                  },
                  {
                    tier: 'orange',
                    km: '170 000–210 000 км • 11–13 лет',
                    action: 'Заменить сцепление (МКПП) и сайлентблоки передних рычагов',
                    cost: '€700–1 100',
                    ifIgnored: 'Пробуксовка сцепления и рысканье машины по колее (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€1 500–2 300'
                  },
                  {
                    tier: 'red',
                    km: '210 000–250 000 км • 13–15+ лет',
                    action: 'Заменить полный комплект цепи, успокоители и водяной насос',
                    cost: '€850–1 250',
                    ifIgnored: 'Обрыв или перескок цепи с загибом клапанов (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 500–3 800'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.3,
            badges: {
              en: ['Crisp 6-MT / Tough 5-AT', 'Handles 7,000 RPM Shifts'],
              de: ['Präzise 6-Gang / Starke 5-AT', 'Drehzahlfestes Schaltwerk'],
              ru: ['6-МКПП / Выносливая 5-АКПП', 'Чёткие переключения']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Tough Double-Wishbone Base', 'Check Rear Arches & Sills'],
              de: ['Stabile Doppelquerlenker', 'Radläufe & Schweller prüfen'],
              ru: ['Крепкая многорычажная база', 'Ржавчина задних арок и порогов']
            }
          },
          electronicsReliability: {
            score: 9.1,
            badges: {
              en: ['Rock-Solid Denso Electrics', 'Watch Bluetooth Battery Drain'],
              de: ['Stabile Denso-Elektronik', 'Bluetooth-Modul Ruhestrom'],
              ru: ['Надёжная электрика Denso', 'Утечка через модуль Bluetooth']
            }
          },
          rideNoiseComfort: {
            score: 8.6,
            badges: {
              en: ['Double-Wishbone Road Soak', 'Refined Wind Insulation'],
              de: ['Souveränes Doppelquerlenker-Bild', 'Gute Autobahn-Dämmung'],
              ru: ['Плавная многорычажка', 'Тишина и удобные кресла']
            }
          },
          interiorQualityFeatures: {
            score: 8.6,
            badges: {
              en: ['Thick Soft-Touch Dashboard', 'Damped Physical Climate Buttons'],
              de: ['Satt geschäumtes Armaturenbrett', 'Klare physische Klimatasten'],
              ru: ['Толстый мягкий пластик', 'Удобные физические кнопки']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.73 m Length • 11.4 m Turn', 'Low Nose • Tight Park Spaces'],
              de: ['4,73 m Länge • 11,4 m Kreis', 'Breite Karosserie beim Parken'],
              ru: ['Длина 4,73 м • Разворот 11,4 м', 'Широкий в тесных дворах']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2008)', '6 Airbags + VSA + LKAS Opt.'],
              de: ['Euro NCAP 5★ (2008)', '6 Airbags + VSA-ESP'],
              ru: ['Euro NCAP 5★ (2008)', '6 подушек + VSA (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.4,
            badges: {
              en: ['Generous Front Captain Space', 'Compact Rear Legroom For Class'],
              de: ['Großzügiger Raum vorn', 'Fond für Klasse recht kompakt'],
              ru: ['Просторно на первом ряду', 'Тесноватый для класса второй ряд']
            }
          },
          interiorBootSpace: {
            score: 6.9,
            badges: {
              en: ['467L Sedan Boot', 'Narrow Trunk Pass-Through'],
              de: ['467L Kofferraum', 'Schmale Ladeöffnung'],
              ru: ['Багажник седана 467 л', 'Узкий проём погрузки']
            }
          },
          payloadTowing: {
            score: 5.8,
            badges: {
              en: ['1,500 kg Braked Tow', '470 kg Payload'],
              de: ['1.500 kg Anhängelast', '470 kg Zuladung'],
              ru: ['Прицеп до 1 500 кг', 'Грузоподъёмность 470 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.7,
            badges: {
              en: ['0–100 km/h: 7.8 s', '227 km/h Top Speed'],
              de: ['0–100 km/h: 7,8 s', '227 km/h Spitze'],
              ru: ['0–100 км/ч: 7,8 с', 'Макс. 227 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 6.0,
            badges: {
              en: ['234 Nm Smooth Linear Pull', 'Strongest Above 3,500 RPM'],
              de: ['234 Nm linearer Sauger', 'Am stärksten ab 3.500/min'],
              ru: ['234 Н·м ровный атмосферник', 'Живеет после 3 500 об/мин']
            }
          },
          handlingAgility: {
            score: 8.8,
            badges: {
              en: ['Double-Wishbone Front', 'Firm Executive Balance'],
              de: ['Doppelquerlenker vorn', 'Straffe Reise-Abstimmung'],
              ru: ['Двухрычажка спереди', 'Собранное шасси']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', '300 mm Front Discs • Firm Pedal'],
              de: ['100–0 km/h: 36,4 m', '300 mm Scheiben vorn • Druckpunkt'],
              ru: ['100–0 км/ч: 36,4 м', '300 мм спереди • Информативность']
            }
          },
          efficiencyFuel: {
            score: 5.1,
            badges: {
              en: ['Thirsty (9.1 L/100km)', '204 g/km CO2'],
              de: ['Durstig (9,1 L/100km)', '204 g/km CO2'],
              ru: ['Прожорливый (9,1 л/100 км)', '204 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 5.9,
            badges: {
              en: ['High 2.4L CO2 Tax (204 g)', 'Higher 201 HP Insurance'],
              de: ['Hohe 2.4L-CO2-Steuer (204 g)', 'Teurere 201-PS-Versicherung'],
              ru: ['Высокий налог 2,4 л (204 г)', 'Дорогая страховка за 201 л.с.']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~100,000 km · 6 yrs', action: { en: 'Valve-Clearance Check & Iridium Spark Plugs', de: 'Ventilspiel prüfen & Iridium-Zündkerzen wechseln', ru: 'Регулировка клапанов и иридиевые свечи' }, cost: '€220–350' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Oil Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '150–210k km · 10–14 yrs', action: { en: 'Front Upper Ball Joints & EPS Steering Rack Bushing', de: 'Obere Traggelenke vorn & Lenkgetriebe-Buchse', ru: 'Верхние шаровые опоры и втулка рулевой рейки' }, cost: '€280–520', risk: { en: 'Knocking over bumps & steering play', de: 'Poltern auf Bodenwellen & Lenkungsspiel', ru: 'Стук на неровностях и люфт руля' }, damage: '€900–1,500' }
              ]
            },
            score: 7.8,
            badges: {
              en: ['Low Engine Breakdown Risk', '17"/18" Tyres & 320 mm Brakes'],
              de: ['Kaum Motorschäden bekannt', 'Teurere 17/18" Reifen & Bremsen'],
              ru: ['Низкий риск поломок мотора', 'Дороже шины 17–18" и тормоза 320 мм']
            }
          },
          depreciationResale: {
            score: 9.2,
            badges: {
              en: ['High 2.4L Accord Demand', 'Appreciating Clean Units'],
              de: ['Hohe 2.4L Nachfrage', 'Sehr hoher Werterhalt'],
              ru: ['Высокий спрос на 2.4 л', 'Почти не теряет в цене']
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
            estUsedPrice: '€9,300',
            specOverrides: { sprint0100: '10.1 s', topSpeed: '207 km/h', realWorldFuel: '6.6–7.4 L/100 km' },
            subStatDeltas: {
              accelerationOvertaking: {
                score: 5.6,
                badges: {
                  en: ['0–100 km/h: 10.1 s (5-AT)', '207 km/h Top Speed'],
                  de: ['0–100 km/h: 10,1 s (5-AT)', '207 km/h Spitze'],
                  ru: ['0–100 км/ч: 10,1 s (5-AT)', 'Макс. 207 km/h']
                }
              },
              efficiencyFuel: {
                score: 7.4,
                badges: {
                  en: ['6.6–7.4 L/100 km (5-AT)'],
                  de: ['6,6–7,4 L/100 km (5-AT)'],
                  ru: ['6,6–7,4 L/100 km (5-AT)']
                }
              }
            }
          }
        ],
        specOverrides: {
          engineName: { en: '2.2L i-DTEC Diesel', de: '2.2L i-DTEC Diesel', ru: '2.2L i-DTEC Дизель' },
          forcedInduction: '@turbo', injection: '@commonRail', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '1,700 kg', sprint0100: '9.6 s', topSpeed: '212 km/h', peakTorque: '350 Nm @ 2,000',
          passingPunch: { en: 'Effortless Highway', de: 'Souveräner Durchzug', ru: 'Мощная тяга на трассе' },
          realWorldFuel: '5.8–6.6 L/100 km', tankRange: '65 L · ~1,050 km', euroNorm: 'Euro 5 (DPF)',
          taxInsurance: '@tierModHigh', timingDrive: '@chain', serviceWear: '@tierMod'
        },
        dossierGroup: 'diesel-conv-auto',
        buyerFitGroup: 'diesel',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        shortTitle: 'ACCORD 2.2 i-DTEC',
        fullName: '2011 Honda Accord 2.2 i-DTEC',
        engineBadge: '2.2L i-DTEC • 150 / 180 HP',
        engineSubLabel: {
          en: 'N22B1 / N22B2 Closed-Deck Diesel (2008–2015) • 6-MT / 5-AT • 350–380 Nm',
          de: 'N22B1 / N22B2 Alu-Ketten-Diesel (2008–2015) • 6-Gang / 5-AT • 350–380 Nm',
          ru: 'Дизель N22B1 / N22B2 с цепью (2008–2015) • 6-МКПП / 5-АКПП • 350–380 Н·м'
        },
        rarityLabel: {
          en: 'AUTOBAHN CRUISER',
          de: 'LANGSTRECKEN-EXPRESS',
          ru: 'ТРАССОВЫЙ КРЕЙСЕР'
        },
        originalMsrp: {
          en: '€32,200 New',
          de: '32.200 € Neu',
          ru: '€32 200 новый'
        },
        estUsedPrice: '€8,400',
        perkLabel: {
          en: '✦ 350–380 Nm Diesel Torque • 5.9 L/100km • 1,700 kg Towing',
          de: '✦ 350–380 Nm Diesel-Drehmoment • 5,9 L/100km • 1.700 kg Zuglast',
          ru: '✦ Тяга 350–380 Н·м • Расход 5,9 л/100 км • Прицеп 1 700 кг'
        },
        remarkablePositives: {
          en: [
            '350–380 NM HIGHWAY TORQUE',
            '5.9 L/100KM ECONOMY',
            '1,700 KG BRAKED TOWING',
            'DOUBLE-WISHBONE CHASSIS',
            'QUIET REFINED N22B DIESEL'
          ],
          de: [
            '350–380 NM AUTOBAHN-DURCHZUG',
            '5,9 L/100KM VERBRAUCH',
            '1.700 KG ANHÄNGELAST',
            'DOPPELQUERLENKER-FAHRWERK',
            'LAUFRUHIGER N22B DIESEL'
          ],
          ru: [
            'МОЩНАЯ ТЯГА 350–380 Н·М',
            'РАСХОД 5,9 Л/100 КМ',
            'БУКСИРОВКА ДО 1 700 КГ',
            'ДВУХРЫЧАЖНАЯ ПОДВЕСКА',
            'ТИХИЙ ДИЗЕЛЬ N22B'
          ]
        },
        notableNegatives: {
          en: [
            'DPF CLOGGING ON SHORT CITY TRIPS',
            'EXPENSIVE DUAL-MASS FLYWHEEL',
            'EURO 5 CITY BAN RESTRICTIONS'
          ],
          de: ['DPF MAG KEINE KURZSTRECKE', 'TEURES ZWEIMASSENSCHWUNGRAD', 'EURO-5-UMWELTZONEN-LIMIT'],
          ru: [
            'DPF НЕ ЛЮБИТ КОРОТКИЕ ПОЕЗДКИ',
            'ДОРОГОЙ ДВУХМАССОВЫЙ МАХОВИК',
            'НОРМЫ EURO 5 ДЛЯ ЦЕНТРА ГОРОДОВ'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.3,
          comfortCabin: 8.2,
          spacePracticality: 7.6,
          performanceDynamics: 8.0,
          runningCostsTco: 7.5
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.2L i-DTEC Inline-4 Turbodiesel (N22B1)', de: '2.2L i-DTEC Reihenvierzylinder Turbodiesel (N22B1)', ru: '2.2L i-DTEC рядный 4-цил. турбодизель (N22B1)' } },
                  { k: 'displacement', v: '2,199 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC', de: '4 Zylinder · 16V DOHC', ru: '4 цилиндра · 16V DOHC' } },
                  { k: 'output', v: { en: '110 kW (150 HP)', de: '110 kW (150 PS)', ru: '110 кВт (150 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Diesel · Timing Chain', de: 'Diesel · Steuerkette', ru: 'Дизель · Цепь ГРМ' } }
                ],
                note: { en: 'Quiet, 1,000+ km-range motorway diesel with proven 300,000+ km chain reliability.', de: 'Leiser Langstrecken-Diesel mit über 1.000 km Reichweite und bewährter Steuerkette.', ru: 'Тихий трассовый дизель с запасом хода 1 000+ км и крепкой цепью.' }
              },
              forcedInduction: '@turboDiesel', injection: '@commonRailDi'
            },
            score: 9.3,
            badges: {
              en: ['Updated 2.2 Chain Block', 'Watch City DPF & EGR'],
              de: ['Überarb. 2.2 Kettenmotor', 'DPF & AGR-Kühler beachten'],
              ru: ['Обновл. цепной дизель 2.2', 'Следить за DPF и клапаном EGR']
            },
            dossier: {
              en: {
                headline: 'Second-Generation N22B 2.2L Aluminum Diesel— Smooth Long-Distance Tourer With Sorted Manifold',
                strengths: [
                  'Fixed the cracked cast exhaust manifold and early timing-chain tension issues of the 2003–2008 i-CTDi.',
                  'Remarkably smooth for a 4-cylinder diesel with a strong 350–380 Nm punch for effortless highway cruising.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'DPF Saturation & Oil Dilution Risk: Needs sustained 70+ km/h highway runs; check dipstick for diesel-diluted oil above the max mark.',
                  'Periodic cleaning and checking silicone DPF sensor hoses keep limp-mode lights away.'
                ],
                beforeYouBuy: [
                  'Verify regular highway trips so the diesel soot filter stayed clear, and smell for exhaust leaks in the cabin.',
                  'Check rear brake discs for seizing/overheating and front lower suspension joints for play.',
                  'Start the engine cold and verify smooth idle with no injector knock or blue-grey smoke.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Annual low-ash oil, clean fuel filter every 30k & 5-AT auto oil at 45k / 3 yrs (if auto) + highway runs',
                    cost: '€180–320',
                    ifIgnored: 'Urban short commutes clog diesel soot filter early & dirty fuel wears injectors',
                    damageCost: '€1,300–2,100'
                  },
                  {
                    tier: 'yellow',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Flush gearbox fluid, check brake/coolant fluids & inspect 6–7 yr aging rubber boost hoses and belt',
                    cost: '€270–440',
                    ifIgnored: 'Perished aged rubber boost hoses split under 350+ Nm & send car into limp mode',
                    damageCost: '€900–1,500'
                  },
                  {
                    tier: 'yellow',
                    km: '100,000–140,000 km • 7–9 yrs',
                    action: 'Clean exhaust valve (EGR) & intake air sensor + fuel filter',
                    cost: '€220–380',
                    ifIgnored: 'Hesitant throttle response & clogged diesel filter (components & fluids also degrade over years)',
                    damageCost: '€1,100–1,800'
                  },
                  {
                    tier: 'red',
                    km: '140,000–180,000 km • 9–11 yrs',
                    action: 'Replace slipping clutch & dual-mass flywheel (manual)',
                    cost: '€1,050–1,550',
                    ifIgnored: 'Severe vibration shakes gearbox & ruins bearings (components & fluids also degrade over years)',
                    damageCost: '€2,000–2,900'
                  },
                  {
                    tier: 'orange',
                    km: '180,000–220,000 km • 11–13 yrs',
                    action: 'Deep-clean diesel soot filter & replace copper injector seals',
                    cost: '€420–750',
                    ifIgnored: 'Permanent limp mode & diesel diluting engine oil (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace stretched timing chain & exhaust manifold gasket',
                    cost: '€850–1,350',
                    ifIgnored: 'Timing chain rattle & exhaust fumes leaking inside (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,400–3,600'
                  }
                ]
              },
              de: {
                headline: 'Weiterentwickelter N22B 2.2L Alu-Diesel— laufruhiger Langstrecken-Gleiter ohne Krümmermängel',
                strengths: [
                  'Behebt die bekannten Abgaskrümmer-Risse und Kettenprobleme des älteren Accord VII (i-CTDi).',
                  'Mit Ausgleichswellen und 350–380 Nm Drehmoment ideal für entspannte Langstrecken und 1.500 kg Zuglast.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Benötigt regelmäßige Autobahnetappen zur aktiven Regeneration; Ölstand auf Überfüllung prüfen.',
                  'Verrußte AGR-Kühler und alternde Sensor-Schläuche sind die häufigsten Ursachen für Notlauf-Warnungen.'
                ],
                beforeYouBuy: [
                  'Regelmäßige Autobahnfahrten erfragen (Partikelfilter) und im Innenraum auf Abgasgeruch achten.',
                  'Hintere Bremsscheiben auf Überhitzung und vordere Traggelenke auf Spiel prüfen.',
                  'Kalten Motor starten und auf ruhigen Leerlauf ohne Injektor-Nageln oder blauen Rauch achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Jährlich Low-Ash-Öl, alle 30 Tkm Dieselfilter & bei Automatik Öl alle 45 Tkm / 3 J. + Langstrecke',
                    cost: '180–320 €',
                    ifIgnored: 'Stadt-Kurzstrecken verstopfen Partikelfilter früh & Schmutz schadet den Injektoren',
                    damageCost: '1.300–2.100 €'
                  },
                  {
                    tier: 'yellow',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Getriebe-, Brems-/Kühlflüssigkeit erneuern & 6–7-J.-Gummiturboschläuche sowie Riemen prüfen',
                    cost: '270–440 €',
                    ifIgnored: 'Altersbrüchige Ladeluftschläuche reißen bei über 350 Nm und lösen Notlauf aus',
                    damageCost: '900–1.500 €'
                  },
                  {
                    tier: 'yellow',
                    km: '100.000–140.000 km • 7–9 J.',
                    action: 'Abgas-Rückführventil reinigen & Kraftstofffilter ersetzen',
                    cost: '220–380 €',
                    ifIgnored: 'Zähe Gasannahme & verstopfter Partikelfilter (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.100–1.800 €'
                  },
                  {
                    tier: 'red',
                    km: '140.000–180.000 km • 9–11 J.',
                    action: 'Kupplung zusammen mit Zweimassenschwungrad erneuern',
                    cost: '1.050–1.550 €',
                    ifIgnored: 'Starkes Schlagen ruiniert Lager im Schaltgetriebe (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '2.000–2.900 €'
                  },
                  {
                    tier: 'orange',
                    km: '180.000–220.000 km • 11–13 J.',
                    action: 'Partikelfilter spülen & Kupfer-Dichtringe der Düsen tauschen',
                    cost: '420–750 €',
                    ifIgnored: 'Notlauf-Sperre & Ölverdünnung zerstören Turbolader (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkette ersetzen & Abgaskrümmer-Dichtung prüfen',
                    cost: '850–1.350 €',
                    ifIgnored: 'Kettenrasseln & Abgase im Lüftungssystem (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.400–3.600 €'
                  }
                ]
              },
              ru: {
                headline: 'Второе поколение алюминиевого дизеля N22B 2.2— тихий лайнер без проблем с коллектором',
                strengths: [
                  'Полностью решены проблемы раннего 2.2 i-CTDi с трещинами выпускного коллектора и быстрым износом цепи.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'В городском режиме падает ресурс масла из-за частых недожёгов фильтра DPF.',
                  'Очистка системы рециркуляции и проверка датчиков предотвращают аварийный режим.'
                ],
                beforeYouBuy: [
                  'Уточнить наличие трассовых поездок для очистки сажевого фильтра и принюхаться к запаху выхлопа в салоне.',
                  'Проверить задние тормоза на подклинивание и люфт передних шаровых опор.',
                  'Запустить дизель на холодную— работа должна быть ровной без стука форсунок и дыма.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Ежегодно малозольное масло, топливный фильтр раз в 30 тыс., масло АКПП раз в 45 тыс. / 3 года и трасса',
                    cost: '€180–320',
                    ifIgnored: 'Городские пробки быстро забивают фильтр сажи, а грязное топливо вредит форсункам',
                    damageCost: '€1 300–2 100'
                  },
                  {
                    tier: 'yellow',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Обновить масла/жидкости КПП и охлаждения, проверить стареющие за 6–7 лет патрубки наддува и ремень',
                    cost: '€270–440',
                    ifIgnored: 'Потерявшие эластичность от времени шланги лопаются под нагрузкой и глушат тягу',
                    damageCost: '€900–1 500'
                  },
                  {
                    tier: 'yellow',
                    km: '100 000–140 000 км • 7–9 лет',
                    action: 'Почистить клапан выхлопных газов и сменить топливный фильтр',
                    cost: '€220–380',
                    ifIgnored: 'Задумчивость при нажатии газа и засор сажевого фильтра (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 100–1 800'
                  },
                  {
                    tier: 'red',
                    km: '140 000–180 000 км • 9–11 лет',
                    action: 'Заменить комплект сцепления и двухмассовый маховик',
                    cost: '€1 050–1 550',
                    ifIgnored: 'Сильные удары при старте разбивают подшипники коробки (узлы и жидкости также стареют с годами)',
                    damageCost: '€2 000–2 900'
                  },
                  {
                    tier: 'orange',
                    km: '180 000–220 000 км • 11–13 лет',
                    action: 'Промыть сажевый фильтр и заменить уплотнения форсунок',
                    cost: '€420–750',
                    ifIgnored: 'Аварийный режим и попадание солярки в масло (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить цепь двигателя и прокладку выпускного коллектора',
                    cost: '€850–1 350',
                    ifIgnored: 'Стук цепи и проникновение выхлопа в салон (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 400–3 600'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 7.8,
            badges: {
              en: ['6-MT / Proven 5-AT', '350–380 Nm Clutch & DMF Wear'],
              de: ['6-Gang / Robuste 5-Automatik', 'Kupplungs- & ZMS-Verschleiß'],
              ru: ['6-МКПП / Надёжный 5-АКПП', 'Нагрузка на маховик (до 380 Н·м)']
            }
          },
          buildQualityRust: {
            score: 6.6,
            badges: {
              en: ['Tough Double-Wishbone Base', 'Check Rear Arches & Sills'],
              de: ['Stabile Doppelquerlenker', 'Radläufe & Schweller prüfen'],
              ru: ['Крепкая многорычажная база', 'Ржавчина задних арок и порогов']
            }
          },
          electronicsReliability: {
            score: 8.7,
            badges: {
              en: ['Solid Denso Electronics', 'DPF & Exhaust Temp Sensors'],
              de: ['Solide Denso-Elektronik', 'DPF- & Abgastemp.-Sensoren'],
              ru: ['Крепкая электрика Denso', 'Датчики сажевого фильтра']
            }
          },
          rideNoiseComfort: {
            score: 8.6,
            badges: {
              en: ['Double-Wishbone Road Soak', 'Refined Wind Insulation'],
              de: ['Souveränes Doppelquerlenker-Bild', 'Gute Autobahn-Dämmung'],
              ru: ['Плавная многорычажка', 'Тишина и удобные кресла']
            }
          },
          interiorQualityFeatures: {
            score: 8.6,
            badges: {
              en: ['Thick Soft-Touch Dashboard', 'Damped Physical Climate Buttons'],
              de: ['Satt geschäumtes Armaturenbrett', 'Klare physische Klimatasten'],
              ru: ['Толстый мягкий пластик', 'Удобные физические кнопки']
            }
          },
          visibilityManeuverability: {
            score: 6.6,
            badges: {
              en: ['4.73 m Length • 11.4 m Turn', 'Low Nose • Tight Park Spaces'],
              de: ['4,73 m Länge • 11,4 m Kreis', 'Breite Karosserie beim Parken'],
              ru: ['Длина 4,73 м • Разворот 11,4 м', 'Широкий в тесных дворах']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ (2008)', '6 Airbags + VSA + LKAS Opt.'],
              de: ['Euro NCAP 5★ (2008)', '6 Airbags + VSA-ESP'],
              ru: ['Euro NCAP 5★ (2008)', '6 подушек + VSA (ESP)']
            }
          },
          passengerSpaceErgonomics: {
            score: 7.4,
            badges: {
              en: ['Generous Front Captain Space', 'Compact Rear Legroom For Class'],
              de: ['Großzügiger Raum vorn', 'Fond für Klasse recht kompakt'],
              ru: ['Просторно на первом ряду', 'Тесноватый для класса второй ряд']
            }
          },
          interiorBootSpace: {
            score: 6.9,
            badges: {
              en: ['467L Sedan Boot', 'Narrow Trunk Pass-Through'],
              de: ['467L Kofferraum', 'Schmale Ladeöffnung'],
              ru: ['Багажник седана 467 л', 'Узкий проём погрузки']
            }
          },
          payloadTowing: {
            score: 6.4,
            badges: {
              en: ['1,700 kg Braked Tow', 'Strong Diesel Pull'],
              de: ['1.700 kg Anhängelast', 'Starker Durchzug'],
              ru: ['Прицеп до 1 700 кг', 'Уверенная тяга с грузом']
            }
          },
          accelerationOvertaking: {
            score: 6.7,
            badges: {
              en: ['0–100 km/h: 8.5–9.6 s', '207–220 km/h Top Speed'],
              de: ['0–100 km/h: 8,5–9,6 s', '207–220 km/h Spitze'],
              ru: ['0–100 км/ч: 8,5–9,6 с', 'Макс. 207–220 км/ч']
            }
          },
          midRangeTorquePassing: {
            score: 8.6,
            badges: {
              en: ['350–380 Nm Strong Mid-Range', 'No Downshift Needed To Pass'],
              de: ['350–380 Nm kräftiger Durchzug', 'Überholen ohne Herunterschalten'],
              ru: ['350–380 Н·м тяги в середине', 'Уверенный обгон без кикдауна']
            }
          },
          handlingAgility: {
            score: 8.3,
            badges: {
              en: ['Double-Wishbone Front', 'Slightly Heavier Nose'],
              de: ['Doppelquerlenker vorn', 'Etwas schwerere Front'],
              ru: ['Двухрычажка спереди', 'Чуть тяжелее передок']
            }
          },
          brakingPerformance: {
            score: 7.6,
            badges: {
              en: ['100–0 km/h: 36.4 m', '300 mm Front Discs • Firm Pedal'],
              de: ['100–0 km/h: 36,4 m', '300 mm Scheiben vorn • Druckpunkt'],
              ru: ['100–0 км/ч: 36,4 м', '300 мм спереди • Информативность']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['5.9 L/100km', '147 g/km CO2'],
              de: ['5,9 L/100km', '147 g/km CO2'],
              ru: ['5,9 л/100 км', '147 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 6.6,
            badges: {
              en: ['Higher 2.2L Diesel Tax • Euro 5', 'Mid-High Sedan Insurance'],
              de: ['Hohe 2.2-Dieselsteuer • Euro 5', 'Gehobene Versicherungsklasse'],
              ru: ['Повышенный налог 2,2 • Euro 5', 'Страховка выше среднего']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~60,000 km · 4 yrs', action: { en: 'Diesel Fuel Filter & EGR Valve Check', de: 'Dieselfilter wechseln & AGR-Ventil prüfen', ru: 'Топливный фильтр и проверка клапана EGR' }, cost: '€160–250' },
                { when: '~110,000 km · 7 yrs', action: { en: 'Honda MTF-3 Manual Gearbox Oil Change', de: 'Honda MTF-3 Schaltgetriebeöl wechseln', ru: 'Замена масла в МКПП (Honda MTF-3)' }, cost: '€120–190' }
              ],
              critical: [
                { when: '140–200k km · 9–13 yrs', action: { en: 'Dual-Mass Flywheel (DMF) + Clutch Kit', de: 'Zweimassenschwungrad (ZMS) + Kupplungssatz', ru: 'Двухмассовый маховик (ДММ) + сцепление' }, cost: '€1,200–1,800', risk: { en: 'Clutch slip under 350 Nm torque & idle knock', de: 'Rutschende Kupplung & ZMS-Klopfen im Leerlauf', ru: 'Пробуксовка сцепления и стук маховика' }, damage: '€2,100–2,900' },
                { when: '140–210k km · 9–14 yrs', action: { en: 'DPF Soot Cleaning & Differential Pressure Sensor', de: 'DPF-Reinigung & Differenzdrucksensor', ru: 'Чистка DPF и датчик давления' }, cost: '€350–650', risk: { en: 'Limp mode & turbocharger backpressure wear', de: 'Notlauf & erhöhter Abgasgegendruck am Turbo', ru: 'Аварийный режим и нагрузка на турбину' }, damage: '€1,500–2,300' }
              ]
            },
            score: 6.2,
            badges: {
              en: ['Tough Closed-Deck Diesel', 'Costly DPF, Clutch & DMF'],
              de: ['Robuster Diesel-Motorblock', 'Teurer DPF-, Kupplungs- & ZMS-Tausch'],
              ru: ['Выносливый блок дизеля', 'Дорогие DPF, сцепление и маховик']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Steady Diesel Demand', 'Euro 5 Zone Discount'],
              de: ['Solide Diesel-Nachfrage', 'Euro-5-Abschlag'],
              ru: ['Стабильный спрос', 'Уценка из-за Euro 5']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Crystal Black Pearl', code: 'NH-731P', hex: '#17191e', glow: 'rgba(64, 74, 88, 0.18)' },
    { name: 'Alabaster Silver', code: 'NH-700M', hex: '#b6bec6', glow: 'rgba(182, 190, 198, 0.16)' },
    { name: 'Polished Metal Metallic', code: 'NH-737M', hex: '#5a6068', glow: 'rgba(90, 96, 104, 0.18)' },
    { name: 'White Orchid Pearl', code: 'NH-788P', hex: '#eff2f6', glow: 'rgba(239, 242, 246, 0.16)' },
    { name: 'Cobalt Blue Pearl', code: 'B-553P', hex: '#234a7a', glow: 'rgba(35, 74, 122, 0.2)' },
    { name: 'Milano Red', code: 'R-81', hex: '#c41d24', glow: 'rgba(196, 29, 36, 0.2)' },
    { name: 'Burano Silver', code: 'NH-704M', hex: '#7f858d', glow: 'rgba(127, 133, 141, 0.18)' },
    { name: 'Royal Blue Pearl', code: 'B-536P', hex: '#1d324c', glow: 'rgba(29, 50, 76, 0.2)' },
    { name: 'Volcano Grey', code: 'NH-736M', hex: '#4a4e54', glow: 'rgba(74, 78, 84, 0.18)' }
  ],
  engineDates: {},
  inDepth: {
    defaultEngineId: '2.0-ivtec',
    defaultGroupKey: 'petrol-na',
    engineCosts: {
      '2.0-ivtec': { group: 'petrol-na',   avgFuelL100: 7.8, fuelPrice: 1.75, tax: 168, ins: 640, service: 330 },
      '2.4-ivtec': { group: 'petrol-perf', avgFuelL100: 9.3, fuelPrice: 1.75, tax: 224, ins: 780, service: 390 },
      '2.2-idtec': { group: 'diesel',      avgFuelL100: 6.2, fuelPrice: 1.65, tax: 308, ins: 720, service: 410 }
    },
    groups: {
      'petrol-na': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 8%', note: 'Very low mechanical & emissions failure rates even past 10–14 years' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Simple R20 SOHC chain petrol rarely suffers roadside breakdowns' },
            { source: 'WhatCar? Survey', value: '96.5% Reliability', note: 'Strong owner satisfaction for drivetrain longevity and low repair bills' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 8 %', note: 'Sehr geringe Mängelquote bei Antrieb und Abgasuntersuchung im Alter' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Schlichter R20-SOHC-Kettenbenziner fällt praktisch nie unterwegs aus' },
            { source: 'WhatCar? Umfrage', value: '96,5 % Zuverlässigkeit', note: 'Hohe Zufriedenheit dank robuster Technik und planbarer Werkstattkosten' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-8%', note: 'Минимум технических и экологических нареканий даже после 10–14 лет' },
            { source: 'ADAC Pannenstatistik', value: 'Очень надёжен', note: 'Простой цепной атмосферник R20 SOHC крайне редко встаёт в дороге' },
            { source: 'Рейтинг WhatCar?', value: '96,5% надёжности', note: 'Высокие оценки владельцев за долговечность мотора и редкий ремонт' }
          ]
        },
        extendedChecks: {
          en: [
            'Check the top windscreen seam, sunroof edge (if fitted), and rear wheel-arch lips for bubbling paint.',
            'Confirm whether the car has the smooth 5-speed automatic (check 45,000 km ATF changes) or crisp 6-speed manual.',
            'Test A/C clutch engagement and check the radiator/condenser lower fins for stone damage.',
            'Verify smooth steering on center without clunks from front upper wishbone ball joints or drop links.'
          ],
          de: [
            'Oberen Windschutzscheiben-Rahmen, Schiebedachkante (falls vorhanden) und hintere Radläufe auf Rostblasen prüfen.',
            'Bei der 5-Gang-Wandlerautomatik regelmäßige Ölwechsel (alle 45.000 km) prüfen; beim 6-Gang auf saubere Gänge achten.',
            'Klimakompressor-Kupplung testen und den unteren Klimakondensator auf Steinschläge kontrollieren.',
            'Auf unebener Straße auf Poltern der oberen Querlenker-Kugelgelenke oder Koppelstangen achten.'
          ],
          ru: [
            'Осмотреть верхнюю рамку лобового стекла, кромку люка (если есть) и задние арки на отсутствие вздутий краски.',
            'При выборе 5-АКПП проверить замены ATF каждые 45 000 км; на 6-МКПП — чёткость включения передач.',
            'Проверить включение муфты кондиционера и состояние сот радиатора снизу.',
            'Проехать по кочкам и прислушаться к стукам шаровых верхних рычагов и стоек стабилизатора.'
          ]
        },
        savingsNote: {
          en: 'At ~7.8 L/100 km fuel use sits mid-pack for a 1.5-tonne sedan, yet zero turbo, DPF, or direct-injection injector bills keep total annual ownership predictable.',
          de: 'Rund 7,8 L/100 km sind für eine 1,5-Tonnen-Limousine solide, doch ohne Turbo, DPF oder teure Injektoren bleiben die Gesamtkosten sehr gut planbar.',
          ru: 'Расход около 7,8 л/100 км типичен для 1,5-тонного седана, а отсутствие турбины, DPF и дорогих форсунок делает содержание максимально предсказуемым.'
        },
        market: {
          supplyDemand: {
            en: 'Healthy enthusiast & family demand for clean rust-free 2.0 i-VTEC manuals and automatics; clean low-owner sedans sell rapidly.',
            de: 'Gute Nachfrage nach rostfreien 2.0 i-VTEC (Schalter wie Automatik); gepflegte Ersthand-Limousinen sind schnell vergriffen.',
            ru: 'Стабильно высокий спрос на ухоженные 2.0 i-VTEC без коррозии; экземпляры с прозрачной историей уходят быстро.'
          },
          sweetSpot: {
            en: '2011–2014 Facelift 2.0 i-VTEC Elegance (6-MT or 5-AT) under 150,000 km with clean arches (€8,500–€10,500).',
            de: 'Facelift 2011–2014 2.0 i-VTEC Elegance (6-Gang oder 5-AT) unter 150.000 km ohne Radlaufrost (8.500–10.500 €).',
            ru: 'Рестайлинг 2011–2014 гг. 2.0 i-VTEC Elegance до 150 000 км с чистыми арками (€8 500–10 500).'
          },
          outlook3to5yr: {
            en: 'Firm depreciation floor (~€5,800–€7,200 in 3–5 yrs) as simple Japanese NA petrols become harder to find in Europe.',
            de: 'Sehr stabiler Restwert (ca. 5.800–7.200 € in 3–5 Jahren), da haltbare japanische Saugmotoren immer seltener werden.',
            ru: 'Очень плавное снижение цены (€5 800–7 200 через 3–5 лет): надёжные японские атмосферники высоко ценятся на вторичке.'
          }
        },
        watchoutExtra: {
          en: [
            'Power steering rack electric assist modules or weeping fluid lines (pre-facelift EPS sensors) should be checked for smooth effort both ways.',
            'Front lower compliance bushes and upper wishbone joints wear around 140,000–180,000 km on rough roads.'
          ],
          de: [
            'Lenkgetriebe/EPS-Sensorik auf gleichmäßige Lenkkraft links wie rechts prüfen.',
            'Vordere Querlenker-Gummilager und obere Traggelenke verschleißen auf schlechten Straßen ab ca. 140.000–180.000 km.'
          ],
          ru: [
            'Проверить электроусилитель руля на равномерность усилия в обе стороны без закусываний.',
            'К 140–180 тыс. км на плохих дорогах изнашиваются сайлентблоки передних рычагов и верхние шаровые.'
          ]
        }
      },
      'petrol-perf': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Top 10%', note: 'Forged K24 internals pass mechanical & emissions tests cleanly when serviced' },
            { source: 'ADAC Pannenstatistik', value: 'Very Reliable', note: 'Chain-driven 2.4 DOHC unit rarely fails; watch VTC actuator & oil level' },
            { source: 'WhatCar? Survey', value: '95.8% Reliability', note: 'Slightly higher brake/tyre wear from 201 HP performance, otherwise rock-solid' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Top 10 %', note: 'Robuste K24-Technik besteht Haupt- und Abgasuntersuchung sehr souverän' },
            { source: 'ADAC Pannenstatistik', value: 'Sehr zuverlässig', note: 'Kettengetriebener 2.4 DOHC ohne Turbo-Ausfälle; VTC-Steller & Ölstand prüfen' },
            { source: 'WhatCar? Umfrage', value: '95,8 % Zuverlässigkeit', note: 'Etwas höherer Bremsen-/Reifenverschleiß durch 201 PS, mechanisch äußerst zäh' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Топ-10%', note: 'Крепкий мотор K24 уверенно проходит техосмотры при должном обслуживании' },
            { source: 'ADAC Pannenstatistik', value: 'Очень надёжен', note: 'Цепной 2.4 DOHC без турбины крайне редко подводит в пути' },
            { source: 'Рейтинг WhatCar?', value: '95,8% надёжности', note: 'Выше износ тормозов и шин из-за 201 л.с., но ресурс агрегата огромный' }
          ]
        },
        extendedChecks: {
          en: [
            'Listen strictly on a cold start for the 1–2 second metallic VTC cam-gear rattle (common K24 trait).',
            'Check engine oil level & exhaust tailpipes for blue smoke — high-mileage K24Z3 units pushed hard can consume oil.',
            'Inspect 18-inch alloy rims, brake rotors (320 mm front), and suspension bushes for hard-driving wear.',
            'Verify clean 5-AT paddle-shift response or 6-MT 2nd/3rd gear synchro smoothness at higher revs.'
          ],
          de: [
            'Unbedingt beim echten Kaltstart auf kurzes 1–2-Sekunden-Rasseln des VTC-Nockenwellenverstellers achten.',
            'Ölstand und Endrohre prüfen — stark beanspruchte K24Z3 können bei hoher Laufleistung etwas Öl verbrauchen.',
            '18-Zoll-Felgen, 320-mm-Bremsscheiben vorn und Querlenkerbuchsen auf Verschleiß kontrollieren.',
            'Bei der 5-AT-Automatik Schaltwippen sauber durchschalten; beim 6-Gang auf Synchronisierung in Gang 2 und 3 achten.'
          ],
          ru: [
            'Обязательно послушать холодный пуск: кратковременный треск 1–2 сек указывает на износ шестерни VTC.',
            'Проверить уровень масла и выхлоп: при активной езде моторы K24Z3 на больших пробегах склонны к расходу масла.',
            'Осмотреть 18-дюймовые диски, передние 320-мм тормоза и сайлентблоки после динамичной эксплуатации.',
            'Проверить плавность переключений подрулевых лепестков 5-АКПП или синхронизаторы 2–3 передач на 6-МКПП.'
          ]
        },
        savingsNote: {
          en: 'Higher ~9.3 L/100 km petrol burn and steeper insurance/tax cost ~€550–€750/yr more than the 2.0 i-VTEC, trading economy for 201 HP character.',
          de: 'Rund 9,3 L/100 km Verbrauch sowie höhere Steuer & Versicherung kosten ca. 550–750 €/Jahr mehr als beim 2.0 i-VTEC — der Preis für 201 PS.',
          ru: 'Расход около 9,3 л/100 км и повышенные налоги со страховкой обходятся на €550–750/год дороже 2.0 i-VTEC, но дарят характер 201 л.с.'
        },
        market: {
          supplyDemand: {
            en: 'Scarce on the European market; clean Type S and Executive 2.4 manuals carry strong collector-like enthusiast demand.',
            de: 'Auf dem Markt rar gesät; unverbastelte Type S und Executive 2.4 erzielen unter Kennern stabile Liebhaberpreise.',
            ru: 'Редкий гость на рынке; ухоженные Type S и Executive 2.4 в стоке пользуются высоким спросом у ценителей.'
          },
          sweetSpot: {
            en: 'Unmodified 2011–2014 2.4 i-VTEC Type S or Executive under 160,000 km with VTC & ATF records (€10,800–€13,200).',
            de: 'Unverbastelter 2011–2014 2.4 i-VTEC Type S oder Executive unter 160.000 km mit VTC-/Getriebe-Belegen (10.800–13.200 €).',
            ru: 'Недооснащённый тюнингом 2.4 i-VTEC Type S или Executive 2011–2014 гг. до 160 тыс. км (€10 800–13 200).'
          },
          outlook3to5yr: {
            en: 'Very flat value curve (~€8,200–€9,800 in 3–5 yrs); clean 2.4 i-VTEC Accords are transitioning into modern-classic territory.',
            de: 'Sehr flacher Wertverlust (ca. 8.200–9.800 € in 3–5 Jahren) — gepflegte 2.4-Liter entwickeln sich zum gefragten Youngtimer.',
            ru: 'Минимальное падение цены (€8 200–9 800 через 3–5 лет): живые Accord 2.4 постепенно переходят в статус культовых моделей.'
          }
        },
        watchoutExtra: {
          en: [
            'High-mileage 2.4L engines run hotter under spirited driving — check for weeping valve-cover gaskets and radiator upper tank seams.',
            'Previous tuning, lowered springs, or mismatched tyres are common on Type S examples; inspect alignment carefully.'
          ],
          de: [
            'Bei sportlich bewegten 2.4L-Modellen Ventildeckeldichtung und oberen Kühlerkasten auf Schwitzen prüfen.',
            'Bei Type-S-Modellen genau auf Nachrüst-Tieferlegungen, Tuning oder ungleichen Reifenverschleiß achten.'
          ],
          ru: [
            'На активно ездивших 2.4 проверить прокладку клапанной крышки и верхний бачок радиатора на сухость.',
            'Среди Type S часто встречаются машины после тюнинга — проверьте штатность пружин и развал-схождение.'
          ]
        }
      },
      diesel: {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average', note: 'Sorted N22B block beats early i-CTDi; DPF & rear brakes are main checks' },
            { source: 'ADAC Pannenstatistik', value: 'Solid Highway Car', note: 'Strong motorway reliability; urban short-trip DPF clogging causes limp mode' },
            { source: 'WhatCar? Survey', value: '93.1% Reliability', note: 'High mileage endurance if oil dilution & DPF regenerations are respected' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich', note: 'Ausgereifter N22B-Block besser als früher i-CTDi; DPF & hintere Bremsen prüfen' },
            { source: 'ADAC Pannenstatistik', value: 'Solider Langstrecker', note: 'Stark auf der Autobahn; Kurzstrecken-DPF führt jedoch gelegentlich zum Notlauf' },
            { source: 'WhatCar? Umfrage', value: '93,1 % Zuverlässigkeit', note: 'Hohe Dauerhaltbarkeit bei Beachtung von Ölverdünnung & DPF-Regeneration' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего', note: 'Доработанный N22B надёжнее раннего i-CTDi; главные пункты — DPF и задние тормоза' },
            { source: 'ADAC Pannenstatistik', value: 'Крепкий на трассе', note: 'Уверен на дальних дистанциях; городская езда быстро забивает сажевый фильтр' },
            { source: 'Рейтинг WhatCar?', value: '93,1% надёжности', note: 'Большой ресурс при регулярных трассовых прожигах DPF и свежем масле' }
          ]
        },
        extendedChecks: {
          en: [
            'Pull the oil dipstick before the test drive — level well above the upper dot indicates diesel dilution from aborted DPF regens.',
            'Inspect silicone differential pressure hoses near the DPF and listen for exhaust soot smell in the cabin.',
            'Test clutch bite point & dual-mass flywheel noise at idle (on 6-MT) or smooth lock-up on the 5-AT automatic.',
            'Check glow-plug light cold-start delay and verify crisp boost delivery from 1,750 rpm without black smoke.'
          ],
          de: [
            'Vor der Probefahrt Ölpeilstab ziehen: Stand deutlich über Max zeigt Diesel-Ölverdünnung durch abgebrochene DPF-Regenerationen.',
            'Silikonschläuche des DPF-Differenzdrucksensors prüfen und im Innenraum auf Abgasgeruch achten.',
            'Beim 6-Gang auf ZMS-Rasseln im Leerlauf achten; bei der 5-AT auf saubere Wandlerüberbrückung prüfen.',
            'Vorglühverhalten beim Kaltstart sowie sauberen Ladedruckaufbau ab 1.750/min ohne Rußwolke testen.'
          ],
          ru: [
            'До поездки вытащить щуп масла: уровень выше максимума говорит о разжижении соляркой из-за частых прерываний прожига DPF.',
            'Проверить трубки датчика дифференциального давления DPF и отсутствие запаха выхлопа в салоне.',
            'На 6-МКПП послушать двухмассовый маховик на холостых, на 5-АКПП — плавность блокировки гидротрансформатора.',
            'Оценить уверенный холодный запуск и ровный подхват турбины с 1 750 об/мин без чёрного дыма.'
          ]
        },
        savingsNote: {
          en: 'At ~6.2 L/100 km and 1,000+ km tank range it saves ~€350–€500/yr in fuel over the 2.0 petrol, though higher diesel tax & DMF/DPF upkeep require 18,000+ km/yr.',
          de: 'Mit ca. 6,2 L/100 km und über 1.000 km Reichweite spart er 350–500 €/J. Sprit vs. 2.0 Benziner — lohnt durch höhere Steuer/ZMS/DPF ab ca. 18.000 km/J.',
          ru: 'Расход ~6,2 л/100 км и запас хода 1 000+ км экономят €350–500/год на топливе против 2.0 бензина, но из-за налога и DPF дизель выгоден от 18 000 км/год.'
        },
        market: {
          supplyDemand: {
            en: 'Lower urban buyer demand due to Euro 5 diesel rules keeps entry prices roughly €500–€1,000 below equivalent petrol Accords.',
            de: 'Geringere Nachfrage in Umweltzonen drückt den Preis des Euro-5-Diesels rund 500–1.000 € unter vergleichbare Benziner.',
            ru: 'Ограничения Euro 5 снижают спрос в крупных городах, делая дизельный Accord на €500–1 000 дешевле бензиновых версий.'
          },
          sweetSpot: {
            en: '2011–2014 Facelift 2.2 i-DTEC Elegance (150 HP, 6-MT) with documented highway miles around 140,000–185,000 km (€7,600–€9,400).',
            de: 'Facelift 2011–2014 2.2 i-DTEC Elegance (150 PS, 6-Gang) mit Langstrecken-Nachweis und 140–185 Tkm (7.600–9.400 €).',
            ru: 'Рестайлинг 2011–2014 гг. 2.2 i-DTEC Elegance (150 л.с., МКПП) с трассовым пробегом 140–185 тыс. км (€7 600–9 400).'
          },
          outlook3to5yr: {
            en: 'Gradual drop toward €4,800–€6,200 over 3–5 yrs; best bought by long-distance commuters planning to run the car long-term.',
            de: 'Sinkt in 3–5 Jahren Richtung 4.800–6.200 € — ideal für Pendler, die den Wagen auf der Langstrecke zu Ende fahren.',
            ru: 'Постепенное снижение к €4 800–6 200 за 3–5 лет — оптимален для частых поездок по трассе с долгим сроком владения.'
          }
        },
        watchoutExtra: {
          en: [
            'Short-trip city driving forces frequent failed DPF regenerations, raising oil level and stressing turbo bearings.',
            'High-torque 180 HP Type S diesels and 150 HP manuals wear dual-mass flywheels around 160,000–200,000 km.'
          ],
          de: [
            'Häufiger Stadtverkehr provoziert abgebrochene DPF-Regenerationen mit Ölverdünnung und erhöhtem Turbolader-Verschleiß.',
            'Hohes Drehmoment beansprucht das Zweimassenschwungrad beim Handschalter meist zwischen 160.000 und 200.000 km.'
          ],
          ru: [
            'Короткие городские поездки срывают прожиг сажевого фильтра, вызывая попадание топлива в масло.',
            'Высокий крутящий момент дизеля изнашивает двухмассовый маховик МКПП примерно к 160–200 тыс. км.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (CU / CW)', de: 'EU / DE Ausstattungslinien (CU / CW)', ru: 'Европейские комплектации (CU / CW)' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and 2011+ facelift condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Facelift-Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: '2011 Facelift (CU II) Upgrades', de: 'Facelift-Upgrades ab 2011 (CU II)', ru: 'Обновления рестайлинга 2011 (CU II)' },
      faceliftKicker: { en: '2011+ Refresh', de: 'Facelift 2011+', ru: 'Рестайлинг 2011+' },
      trims: [
        {
          id: 'comfort',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Comfort', de: 'Comfort', ru: 'Comfort' },
          delta: { en: '-€800 – €1,300', de: '-800 – 1.300 €', ru: '-€800 – €1 300' },
          isSweetSpot: false,
          summary: {
            en: 'Entry Accord spec keeping dual-zone climate and 16" alloys, but skipping heated seats and Xenon.',
            de: 'Basis-Accord mit 2-Zonen-Klimaautomatik und 16"-Alus, jedoch ohne Sitzheizung und Xenon.',
            ru: 'Базовый Accord с 2-зонным климатом и дисками 16", но без подогрева сидений и ксенона.'
          },
          highlights: {
            en: ['16" alloys & dual-zone auto climate', '8 airbags, VSA & trailer stability', 'Cloth seats & basic 6-speaker audio'],
            de: ['16"-Alus & 2-Zonen-Klimaautomatik', '8 Airbags, VSA & Gespannstabilisierung', 'Stoffsitze & 6-Lautsprecher-Audio'],
            ru: ['Диски 16" и 2-зонный климат-контроль', '8 подушек и система стабилизации VSA', 'Тканевый салон и 6 динамиков']
          }
        },
        {
          id: 'elegance',
          tierClass: 'tier-3',
          tier: { en: 'Core Daily', de: 'Komfort', ru: 'Комфорт' },
          name: { en: 'Elegance', de: 'Elegance', ru: 'Elegance' },
          delta: { en: '-€300 – €600', de: '-300 – 600 €', ru: '-€300 – €600' },
          isSweetSpot: false,
          summary: {
            en: 'Popular everyday spec adding cruise control, rain/light sensors, Bluetooth, and heated mirrors.',
            de: 'Solide Alltags-Linie mit Tempomat, Licht-/Regensensor, Bluetooth und beheizten Spiegeln.',
            ru: 'Популярная средняя версия с круиз-контролем, датчиками света/дождя и Bluetooth.'
          },
          highlights: {
            en: ['17" alloys & cruise control', 'Rain/light sensors & auto-dimming mirror', 'Bluetooth & cooled centre console box'],
            de: ['17"-Alus & Geschwindigkeitsregelanlage', 'Licht-/Regensensor & Abblendspiegel', 'Bluetooth & gekühltes Mittelkonsolenfach'],
            ru: ['Диски 17" и круиз-контроль', 'Датчики света/дождя и автозатемнение', 'Bluetooth и охлаждаемый бокс']
          }
        },
        {
          id: 'lifestyle',
          tierClass: 'tier-4',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Lifestyle', de: 'Lifestyle', ru: 'Lifestyle' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: {
            en: 'Best used Accord CU sweet spot — bundles Bi-Xenon, heated seats, parking sensors, and 10-speaker subwoofer audio.',
            de: 'Der beste Accord-Sweet-Spot: Bi-Xenon, Sitzheizung, Parksensoren v/h und 10-Lautsprecher-Premiumsound.',
            ru: 'Оптимальный выбор: биксенон, подогрев сидений, парктроники вкруг и премиум-аудио с сабвуфером.'
          },
          highlights: {
            en: ['Bi-Xenon headlamps + high-beam assist', 'Heated front seats & front/rear sensors', '10-speaker premium audio + subwoofer'],
            de: ['Bi-Xenon-Licht + Fernlichtassistent', 'Sitzheizung vorn & Parksensoren v/h', '10-Lautsprecher-Sound + Subwoofer'],
            ru: ['Биксенон + автодальний свет', 'Подогрев сидений и парктроники вкруг', 'Премиум-аудио (10 динамиков + сабвуфер)']
          }
        },
        {
          id: 'type-s',
          tierClass: 'tier-6',
          tier: { en: 'Sport Spec', de: 'Sport-Linie', ru: 'Спорт' },
          name: { en: 'Type S', de: 'Type S', ru: 'Type S' },
          delta: { en: '+€600 – €1,200', de: '+600 – 1.200 €', ru: '+€600 – €1 200' },
          isSweetSpot: false,
          summary: {
            en: 'Sharp sport-styled trim with 18" alloys, aero skirts, red ambient gauges, and half-leather/Alcantara bolsters.',
            de: 'Sportliche Linie mit 18"-Alus, Aero-Schürzen, roter Tacho-Beleuchtung und Teilleder/Alcantara.',
            ru: 'Спортивный пакет: диски 18", обвес, красная подсветка приборов и салон кожа/алькантара.'
          },
          highlights: {
            en: ['18" alloys & factory Type S aero body kit', 'Half-leather / Alcantara seats & red cluster', 'Bi-Xenon, heated seats & 10-speaker audio'],
            de: ['18"-Alus & Type-S-Stylingpaket', 'Teilleder/Alcantara & rote Instrumente', 'Bi-Xenon, Sitzheizung & Premium-Audio'],
            ru: ['Диски 18" и заводской обвес Type S', 'Салон кожа/алькантара и красная приборка', 'Биксенон, подогрев и премиум-аудио']
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
            en: 'Full luxury flagship adding perforated leather, electric memory seats, glass sunroof, and optional ACC/LKAS.',
            de: 'Voll ausgestattetes Topmodell mit Vollleder, Memory-Sitzen, Glasschiebedach und optionalem ACC/LKAS.',
            ru: 'Максимальный флагман с перфорированной кожей, памятью кресел, люком и опциями ACC/LKAS.'
          },
          highlights: {
            en: ['Full leather + electric memory driver seat', 'Electric glass sunroof & rear-view camera', 'Optional ACC adaptive cruise & LKAS lane assist'],
            de: ['Vollleder + elektrischer Memory-Fahrersitz', 'Elektrisches Glasschiebedach & Kamera', 'Optional ACC-Abstandstempomat & Spurhalteassistent'],
            ru: ['Полная кожа + память кресла водителя', 'Электролюк и камера заднего вида', 'Опционально адаптивный круиз ACC и LKAS']
          }
        }
      ],
      matrix: [
        { feature: { en: 'Dual-Zone Auto Climate', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['std', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев передних сидений' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Front & Rear Parking Sensors', de: 'Parksensoren vorn & hinten', ru: 'Парктроники спереди и сзади' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'Bi-Xenon Headlights', de: 'Bi-Xenon-Scheinwerfer', ru: 'Биксеноновые фары' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'Half / Full Leather Upholstery', de: 'Teilleder / Vollleder', ru: 'Комбинированный / кожаный салон' }, vals: ['no', 'no', 'no', 'std', 'std'] },
        { feature: { en: 'Electric Memory Driver Seat & Sunroof', de: 'Memory-Fahrersitz & Glasschiebedach', ru: 'Память кресла и электролюк' }, vals: ['no', 'no', 'no', 'no', 'std'] },
        { feature: { en: '10-Speaker Premium Audio + Subwoofer', de: '10-Lautsprecher-Sound + Subwoofer', ru: 'Премиум-аудио (10 динамиков + саб)' }, vals: ['no', 'no', 'std', 'std', 'std'] },
        { feature: { en: 'ACC Adaptive Cruise & LKAS Lane Assist', de: 'ACC-Abstandstempomat & Spurhalteassistent', ru: 'Адаптивный круиз ACC и удержание в полосе' }, vals: ['no', 'no', 'no', 'no', 'opt'] }
      ],
      interiorNotes: {
        en: [
          'Wraparound cockpit with thick soft-touch plastics and physical switchgear that ages with virtually zero squeaks.',
          'Deeply contoured front seats give superb long-haul support, though rear knee space is tighter than a Mondeo.',
          '467 L sedan boot is deep for suitcases; bulky loads benefit from the fold-flat rear release levers.'
        ],
        de: [
          'Fahrerorientiertes Cockpit mit sattem Soft-Touch-Kunststoff und Tasten, die auch im Alter kaum knarzen.',
          'Ausgeformte Vordersitze bieten tollen Langstreckenhalt, hinten geht es etwas enger zu als im Mondeo.',
          '467 Liter Kofferraum reichen für Reisekoffer; Fernentriegelungshebel klappen die Rückbank bequem um.'
        ],
        ru: [
          'Обволакивающая передняя панель из толстого мягкого пластика и физические кнопки почти не скрипят с возрастом.',
          'Профилированные передние кресла отлично держат спину на трассе, но сзади места меньше, чем в Mondeo.',
          'Багажник седана объёмом 467 л глубок и удобен для чемоданов; спинка складывается рычажками из отсека.'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: 'i-VTEC petrol cabins pair a crisp short-throw 6-speed manual (or 5-speed automatic with steering paddles on 2.4 / Executive) with quiet idle refinement and a 7,000+ rpm tachometer.',
          de: 'Die i-VTEC-Benziner kombinieren eine knackige 6-Gang-Schaltung (oder 5-Stufen-Automatik mit Schaltwippen bei 2.4 / Executive) mit sehr ruhigem Leerlauf und drehfreudiger Abstimmung.',
          ru: 'Бензиновые версии i-VTEC сочетают чёткую 6-МКПП (либо 5-АКПП с подрулевыми лепестками на 2.4 и Executive) с тихим холостым ходом и раскруткой до 7 000+ об/мин.'
        },
        diesel: {
          en: '2.2 i-DTEC diesel models receive extra firewall acoustic damping for hushed motorway cruising, pairing 350 Nm pull with a slightly heavier clutch or relaxed 5-speed torque-converter auto.',
          de: 'Der 2.2 i-DTEC besitzt zusätzliche Stirnwand-Dämmung für ruhiges Autobahn-Reisen und kombiniert 350 Nm Durchzug mit einer festeren Kupplung oder der sanften 5-Stufen-Automatik.',
          ru: 'Дизельные 2.2 i-DTEC получили усиленную шумоизоляцию моторного щита для тихой езды по трассе, объединяя тягу 350 Н·м с 6-МКПП или мягким 5-АКПП.'
        },
        conventional: {
          en: 'Driver-centric wraparound dashboard with clear backlit dials, physical dual-zone climate buttons, and durable Japanese interior assembly.',
          de: 'Fahrerorientiertes Cockpit mit klar ablesbaren Rundinstrumenten, echten Klimatasten und extrem solider Verarbeitung.',
          ru: 'Ориентированная на водителя панель с чёткими приборами, физическими кнопками климата и добротной японской сборкой.'
        }
      },
      faceliftUpgrades: {
        en: [
          'Revised 2011+ front bumper, sharper twin-bar grille, and clear-lens rear tail lamps.',
          'Bi-Xenon headlights gained active cornering illumination and automatic high-beam assist.',
          'Thicker underbody & wheel-arch acoustic insulation plus retuned rear dampers for calmer motorway ride.',
          'Subtle cabin chrome accents, upgraded dark seat fabrics, and crisper blue/white instrument backlighting.'
        ],
        de: [
          'Überarbeitete Frontschürze ab 2011, markanterer Kühlergrill und hellere Klarglas-Rückleuchten.',
          'Bi-Xenon-Scheinwerfer erhielten aktives Kurvenlicht sowie einen automatischen Fernlichtassistenten.',
          'Verbesserte Unterboden- und Radhausdämmung samt feiner abgestimmten Hinterachsdämpfern.',
          'Neue Chrom-Akzente im Cockpit, strapazierfähigere Stoffe und blau-weiß beleuchtete Instrumente.'
        ],
        ru: [
          'Обновлённый в 2011 году передний бампер, изменённая решётка радиатора и светлые задние фонари.',
          'Биксеноновые фары получили подсветку поворотов и автоматическое переключение дальнего света.',
          'Усиленная шумоизоляция днища и арок, а также перенастроенные задние амортизаторы для мягкости хода.',
          'Обновлённые хромированные акценты в салоне, улучшенная обивка и бело-синяя подсветка приборов.'
        ]
      }
    }
  }
});