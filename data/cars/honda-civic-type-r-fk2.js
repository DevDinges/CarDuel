// AutoDuel Vehicle Data — honda-civic-type-r-fk2
registerAutoDuelVehicle({
  roster: {
    id: 'honda-civic-type-r-fk2',
    number: '06',
    carType: 'hot-hatch',
    gridOrder: 3,
    gridLabel: 'Civic Type-R',
    yearMake: '2015-2017 HONDA',
    shortTitle: 'CIVIC TYPE R (FK2)',
    fullName: '2015-2017 Honda Civic Type R (FK2)',
    rarityClass: 'rarity-epic',
    drivetrain: 'FWD',
    image: 'assets/honda-civic-type-r-fk2.webp',
    defaultEngineId: '2.0-vtec-turbo',
    sharedSpecs: {
      rustProtection: '@rustGood',
      suspensionWear: '@suspSport',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLow',
      rideTuning: { en: 'Very Firm (+R Adaptive)', de: 'Sehr straff (+R Adaptiv)', ru: 'Очень жёсткая (+R)' },
      highwayNoise: { en: '~73 dB · Loud Tyres', de: '~73 dB · Laut (Reifen)', ru: '~73 дБ · Громкие шины' },
      cabinMaterials: { en: 'Red Suede Buckets · Sport', de: 'Rote Alcantara-Schalen', ru: 'Красные ковши · Спорт' },
      controls: '@physButtons',
      turningCircle: '12.6 m',
      visibility: { en: 'Limited Rear (Wing + Split)', de: 'Eingeschränkt (Spoiler)', ru: 'Ограничен сзади (спойлер)' },
      euroNcap: '★★★★★ (2012)',
      safetyTech: { en: '✓ ESP · ✓ CTBA & Blind-Spot', de: '✓ ESP · ✓ Notbrems & Totwinkel', ru: '✓ ESP · ✓ CTBA и слепые зоны' },
      rearRoom: { en: 'Generous (4-Seater)', de: 'Großzügig (4-Sitzer)', ru: 'Просторно (4 места)' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Doors', de: '✓ 2× ISOFIX · Breit', ru: '✓ 2× ISOFIX · Широкие' },
      bootVolume: '498 L / 1,427 L',
      seatUtility: { en: '60/40 Split-Fold Rear Seats', de: '60/40 Klappbare Rückbank', ru: 'Складывание 60/40' },
      payloadRoof: '390 kg · 0 kg Roof',
      driveline: 'FWD · Helical LSD',
      chassisFeel: { en: 'Track-Grade · Dual-Axis', de: 'Rennstrecken-Präzision · Dual-Axis', ru: 'Трековая · Dual-Axis' },
      tractionDiff: { en: 'FWD · ✓ Mechanical Helical LSD', de: 'FWD · ✓ Mechanische Sperre', ru: 'FWD · ✓ Блокировка LSD' },
      braking1000: '~33.5 m',
      brakeSetup: { en: '350 mm Brembo 4-Piston', de: '350 mm Brembo 4-Kolben', ru: '350 мм Brembo 4-поршн.' },
      valueRetention: '@retVeryHigh',
      resaleDemand: '@demNiche'
    },
    sharedDossierBreakdowns: {
      transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchDmf', driveline: '@driveFwdLsd' },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspSportHotHatch' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: '4-Point Adaptive Sport Suspension (+R Track Mode)', de: 'Adaptives 4-Punkt-Sportfahrwerk (+R Modus)', ru: 'Адаптивная спортподвеска (+R режим)' } },
            { k: 'seatSupport', v: { en: 'Deep Bolstered Suede Bucket Seats (Race Hold)', de: 'Tiefe rote Alcantara-Schalensitze (Top Seitenhalt)', ru: 'Глубокие спортивные ковши с развитой поддержкой' } }
          ],
          note: { en: 'Uncompromisingly firm on broken pavement, especially in +R mode; built for smooth tarmac and circuits.', de: 'Kompromisslos straff auf schlechten Straßen — klar auf Performance und Sportfahrwerk abgestimmt.', ru: 'Бескомпромиссно жёсткий на ямах — создан для ровного асфальта и трека.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~73 dB(A) at 130 km/h (Wide 19" Sport Tyres)', de: '~73 dB(A) bei 130 km/h (Breite 19"-Sportreifen)', ru: '~73 дБ(А) при 130 км/ч (широкие шины 19")' } },
            { k: 'acousticGlass', v: { en: 'Weight-Saved Insulation · Prominent Exhaust & Tyre Roar', de: 'Leichtbau-Dämmung · Präsenter Abroll- & Auspuffklang', ru: 'Облегчённая шумоизоляция · Слышны шины и выхлоп' } }
          ],
          note: { en: 'Focused sports-car acoustics rather than hushed motorway touring.', de: 'Klar sportliche Akustik statt gedämmtem Langstrecken-Komfort.', ru: 'Спортивный звук и обратная связь вместо тихого круиза.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashTrim', v: { en: 'Suede-Trimmed Buckets · Machined Aluminium Shift Knob', de: 'Alcantara-Schalen · Gefräster Alu-Schaltknauf', ru: 'Ковши из замши · Алюминиевый набалдашник КПП' } },
            { k: 'buildFit', v: { en: 'Solid Civic FK Cabin + Numbered Build Plaque', de: 'Solides Civic-Cockpit + nummerierte Plakette', ru: 'Крепкий салон FK + номерная табличка' } }
          ],
          note: { en: 'One of the best driver interfaces and gearshift feels in hot-hatch history.', de: 'Eines der besten Fahrer-Cockpits und Schaltgefühle der gesamten Hot-Hatch-Geschichte.', ru: 'Одна из лучших посадок и механизмов переключения КПП среди хот-хэтчей.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: { specs: [{ k: 'turningDiam', v: '12.6 m (Wide Track)' }, { k: 'bodyDimensions', v: '4,390 × 1,878 mm' }], note: { en: 'Wide front track and Dual-Axis struts give a broad 12.6 m turning circle.', de: 'Breite Spur und Dual-Axis-Achse sorgen für einen großen 12,6 m Wendekreis.', ru: 'Широкая колея и передняя ось Dual-Axis дают большой разворот 12.6 м.' } },
        visibility: { specs: [{ k: 'sightlines', v: { en: 'Good Forward · Large Rear Wing + Split Glass', de: 'Gut vorn · Großer Heckflügel + geteilte Scheibe', ru: 'Хорошо спереди · Большое антикрыло сзади' } }, { k: 'parkingAids', v: { en: 'Standard Reversing Camera + Parking Sensors (GT)', de: 'Rückfahrkamera & Parksensoren (GT-Paket)', ru: 'Камера заднего вида и парктроники (GT)' } }], note: { en: 'Rear camera is essential in tight car parks.', de: 'Die Rückfahrkamera ist im engen Parkhaus unverzichtbar.', ru: 'Камера заднего вида крайне полезна при парковке.' } }
      },
      safetyProtection: {
        euroNcap: { specs: [{ k: 'ncapOverall', v: '★★★★★ (2012 Civic Base)' }, { k: 'ncapBreakdown', v: { en: '94% Adult · 83% Child · 69% Pedestrian', de: '94 % Erwachsene · 83 % Kinder · 69 % Fußgänger', ru: '94% Взрослые · 83% Дети · 69% Пешеходы' } }, { k: 'airbagsCount', v: { en: '6 Airbags', de: '6 Airbags', ru: '6 подушек безопасности' } }], note: { en: 'Stiffened Civic FK shell with massive Brembo stopping reserves.', de: 'Versteifte Civic-FK-Karosserie mit riesigen Brembo-Bremsreserven.', ru: 'Усиленный кузов Civic FK и огромные тормоза Brembo.' } },
        safetyTech: { specs: [{ k: 'activeAssists', v: { en: '✓ VSA/ESP · ✓ CTBA, Blind-Spot & Cross-Traffic (GT)', de: '✓ VSA/ESP · ✓ Notbrems, Totwinkel & Querverkehr (GT)', ru: '✓ VSA/ESP · ✓ CTBA и контроль слепых зон (GT)' } }], note: { en: 'GT pack adds full modern active-safety suite without diluting driving feel.', de: 'GT-Paket bringt moderne Assistenzsysteme ohne den Fahrspaß zu dämpfen.', ru: 'Пакет GT добавляет современные ассистенты без ущерба драйву.' } }
      },
      passengerSpaceErgonomics: {
        rearRoom: { specs: [{ k: 'wheelbase', v: '2,594 mm' }, { k: 'rearLegHead', v: { en: 'Generous 4-Seater Layout (2 Sculpted Rear Seats)', de: 'Großzügiger 4-Sitzer (2 konturierte Fondplätze)', ru: 'Просторный 4-местный салон' } }], note: { en: 'Strict 4-seater homologation with ample knee room.', de: 'Als reiner 4-Sitzer zugelassen, aber mit sehr viel Platz im Fond.', ru: 'Строго 4-местный, но с большим запасом места для ног.' } },
        isofixEntry: { specs: [{ k: 'isofixAccess', v: { en: '✓ 2× ISOFIX · Practical 5-Door Access', de: '✓ 2× ISOFIX · Praktischer 5-Türer', ru: '✓ 2× ISOFIX · Удобный 5-дверный кузов' } }], note: { en: 'Rare track weapon that doubles as a genuinely usable family hatch.', de: 'Seltener Rundstrecken-Sportler mit vollwertiger 5-Türer-Alltagstauglichkeit.', ru: 'Редкий трековый спорткар с практичностью 5-дверного хэтчбека.' } }
      },
      interiorBootSpace: {
        bootVolume: { specs: [{ k: 'bootUpDown', v: '498 L / 1,427 L' }, { k: 'loadSill', v: { en: '~675 mm · Huge Deep Well', de: '~675 mm · Riesiges Unterbodenfach', ru: '~675 мм · Огромная ниша' } }], note: { en: 'Insane 498 L boot — bigger than many compact SUVs.', de: 'Enorme 498 L Kofferraum — größer als bei vielen Kompakt-SUVs.', ru: 'Невероятные 498 литров — больше многих кроссоверов.' } },
        seatUtility: { specs: [{ k: 'foldingMech', v: { en: '60/40 Split-Fold Rear Bench (No Magic Seats on FK2 Type-R)', de: '60/40 umklappbare Rückbank (Keine Magic Seats im FK2 Type-R)', ru: 'Складывание спинки 60/40 (без Magic Seats на FK2 Type-R)' } }], note: { en: 'FK2 Type-R omits standard Civic Magic Seats for weight saving and rear floor stiffness, while keeping a huge 1,427 L folded bay.', de: 'Der FK2 Type-R verzichtet aus Gewichts- und Steifigkeitsgründen auf Magic Seats, behält aber riesige 1.427 L Ladevolumen.', ru: 'В FK2 Type-R отказались от Magic Seats ради снижения веса и жёсткости кузова, сохранив 1427 л объёма.' } }
      },
      payloadTowing: {
        payloadRoof: { specs: [{ k: 'maxPayload', v: '~390 kg' }, { k: 'roofLoad', v: '0 kg (Not Approved)' }], negative: true, note: { en: 'Strict 4-person homologation (~390 kg) with no roof-rack approval.', de: 'Strikte 4-Sitzer-Zulassung (~390 kg) ohne Dachlast-Freigabe.', ru: 'Строго 4-местная омологация (~390 кг), багажник на крышу не допускается.' } },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'kerbWeight', v: '1,382 kg' },
            { k: 'handlingChar', v: { en: 'Dual-Axis Strut Front · Zero Torque-Steer Precision', de: 'Dual-Axis-Vorderachse · Extreme Kurvenpräzision', ru: 'Передняя ось Dual-Axis · Бритвенная точность' } },
            { k: 'tyreSizes', v: '235/35 R19' }
          ],
          note: { en: 'Benchmark FWD chassis grip and steering feedback.', de: 'Referenzklasse bei Frontantriebs-Grip und Lenkpräzision.', ru: 'Эталонный зацеп и точность руля среди переднеприводных авто.' }
        },
        tractionDiff: '@tractionFwdLsd'
      },
      brakingPerformance: {
        braking1000: '@brakingDistDynamic',
        brakeSetup: {
          specs: [
            { k: 'discHardware', v: { en: '350 mm Cross-Drilled Brembo Front Discs + 4-Piston Monoblock Calipers', de: '350 mm gelochte Brembo-Scheiben vorn + 4-Kolben-Monoblock-Sättel', ru: '350 мм перфорированные диски Brembo + 4-поршневые суппорты' } }
          ],
          note: { en: 'Track-tuned Brembo 4-piston setup with dedicated front cooling ducts — crisp pedal feel and significantly cheaper replacement discs than Peugeot’s 380 mm Alcons.', de: 'Rennstrecken-erprobte Brembo-4-Kolben-Anlage mit Bremsenkühlung — präziser Druckpunkt und spürbar günstigere Ersatzscheiben als beim 308 GTi.', ru: 'Трековые 4-поршневые Brembo с каналами охлаждения — чёткая педаль и заметно дешевле в замене, чем Alcon у 308 GTi.' }
        }
      },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },    sharedBuyerFit: {
      cards: {
        typeRTrackPace: {
          en: 'You want raw, front-drive track performance: The 310 HP K20C1 turbo, helical LSD, and dual-axis front suspension deliver relentless pace.',
          de: 'Du willst kompromisslose Fronttriebler-Performance: 310-PS-K20C1-Turbo, Sperrdifferenzial und Dual-Axis-Aufhängung liefern brutalen Vortrieb.',
          ru: 'Тебе нужна бескомпромиссная динамика переднего привода: 310-сильный турбо-K20C1, самоблок и подвеска Dual-Axis дарят мощнейший темп.'
        },
        typeRHugeBoot: {
          en: 'You need a surprisingly big boot: Even with track hardware, the 498 L hatchback luggage bay beats many family crossovers.',
          de: 'Du brauchst unerwartet viel Stauraum: Selbst mit Sportfahrwerk übertrifft der 498-L-Kofferraum viele Familien-SUVs.',
          ru: 'Тебе нужен неожиданно большой багажник: Даже со спортивной начинкой отсек на 498 л больше, чем у многих кроссоверов.'
        },
        typeRLowSplitter: {
          en: 'You tackle steep ramps or rough curbs: The deep front aero splitter sits very low and scrapes easily on speed bumps.',
          de: 'Du fährst oft steile Tiefgaragen oder hohe Bordsteine: Der tiefe Front-Splitter setzt an Rampen und Schwellen schnell auf.',
          ru: 'Ты часто заезжаешь на крутые пандусы и бордюры: Низкий передний сплиттер легко цепляет лежачих полицейских.'
        },
        typeRVisibility: {
          en: 'You want clean all-round visibility: The tall rear wing cuts straight across the rear glass in your mirror.',
          de: 'Du willst freien Rundumblick: Der große Heckflügel teilt die Sicht durch die Heckscheibe genau auf Augenhöhe.',
          ru: 'Тебе важен чистый обзор назад: Массивное антикрыло перекрывает значительную часть заднего стекла.'
        },
        typeRBremboGearbox: {
          en: 'You crave mechanical feedback: Crisp short-throw 6-speed shifts and 350 mm Brembo brakes feel built for track days.',
          de: 'Du willst echtes Mechanik-Feedback: Ultrapräzise 6-Gang-Schaltung und 350-mm-Brembo-Bremsen sind direkt für Trackdays gemacht.',
          ru: 'Ты ценишь чистую механику: Чёткая 6-МКПП с коротким ходом и 350-мм тормоза Brembo созданы для трек-дней.'
        }
      }
    },
    buyerFitGroups: {
      'hot-hatch': {
        summary: {
          en: 'A hardcore, track-bred 310 HP hot hatch with a huge boot — built for driving thrills, not soft urban commuting.',
          de: 'Ein kompromissloser 310-PS-Rundstrecken-Sportler mit riesigem Kofferraum — gebaut für Fahrspaß, nicht für weiches Stadt-Pendeln.',
          ru: 'Хардкорный 310-сильный хот-хэтч для трека с огромным багажником — создан ради драйва, а не мягкой езды по городу.'
        },
        ideal: ['typeRTrackPace', 'typeRBremboGearbox', 'typeRHugeBoot', 'globalPetrolCityZones'],
        skip: [
          'globalHotHatchStiff',
          'globalHotHatchRunningCosts',
          'typeRLowSplitter',
          'typeRVisibility'
        ]
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Solid Underbody Sealing — Inspect Front Pivot Joints',
          strengths: [
            'Solid Underbody Sealing keeps core structural panels solid when maintained.',
            'Suspension arms and body seals age predictably with readily available parts.'
          ],
          watchouts: [
            'Check dual-axis front knuckle joints, adaptive dampers, and Brembo caliper seals.',
            'Inspect front bumper/splitter and bonnet edge for stone chips and track-curb scrapes.'
          ],
          beforeYouBuy: [
            'Inspect sills, wheel-arch lips, and rear subframe on a lift or with a flashlight.',
            'Listen over speed bumps for suspension knocks from worn bushes or drop links.'
          ]
        },
        de: {
          headline: 'Guter Karosserie-Rostschutz — Vorderachslager (Rennstrecke)',
          strengths: [
            'Guter Karosserie-Rostschutz hält tragende Karosseriestrukturen bei Pflege dauerhaft stabil.',
            'Achskomponenten und Dichtungen altern berechenbar mit guter Ersatzteilversorgung.'
          ],
          watchouts: [
            'Vordere Dual-Axis-Achsschenkel, adaptive Dämpfer und Brembo-Sättel prüfen.',
            'Frontsplitter und Motorhaubenkante auf Steinschlag und Aufsetzer kontrollieren.'
          ],
          beforeYouBuy: [
            'Schweller, Radlaufkanten und hinteren Achsträger auf der Bühne oder mit Lampe prüfen.',
            'Auf Kopfsteinpflaster oder Bodenwellen auf Poltern von Querlenkern oder Koppelstangen achten.'
          ]
        },
        ru: {
          headline: 'Хорошая защита кузова — Проверка передних шаровых',
          strengths: [
            'Хорошая защита кузова надёжно защищает силовую структуру кузова при должном уходе.',
            'Элементы подвески и уплотнители служат предсказуемо и легко доступны.'
          ],
          watchouts: [
            'Осмотрите шаровые передней подвески Dual-Axis, адаптивные стойки и суппорты Brembo.',
            'Проверьте передний сплиттер и кромку капота на сколы и следы задевания бордюров.'
          ],
          beforeYouBuy: [
            'Осмотрите пороги, кромки арок и задний подрамник с фонариком или на подъёмнике.',
            'Проедьте по неровностям — не должно быть стуков стоек стабилизатора и сайлентблоков.'
          ]
        }
      },
      interiorQualityFeatures: {
        en: {
          headline: 'Suede Type-R Buckets & Alloy',
          strengths: [
            'Suede Type-R Buckets & Alloy ensures intuitive daily ergonomics.',
            'Seat frames and major switches hold up cleanly over high mileage.'
          ],
          watchouts: [
            'Homologated strictly for 4 seats; Garmin infotainment lags compared to modern systems.',
            'Check AC cooling output and all window/infotainment buttons on older trims.'
          ],
          beforeYouBuy: ['Test climate control cold/hot flaps, seat heaters (if fitted), and Bluetooth/audio.']
        },
        de: {
          headline: 'Wildleder-Schalen & Alu-Knauf',
          strengths: [
            'Wildleder-Schalen & Alu-Knauf sorgt für eine intuitive Bedienung im Alltag.',
            'Sitzpolster und Hauptschalter bleiben auch bei hoher Laufleistung robust.'
          ],
          watchouts: [
            'Streng als 4-Sitzer zugelassen; älteres Garmin-Infotainment reagiert träge.',
            'Klimaleistung, alle Fensterheber und Infotainment-Tasten vor dem Kauf testen.'
          ],
          beforeYouBuy: [
            'Klimaanlage (kalt/warm), Sitzheizung (falls vorhanden) und Audio/Bluetooth durchtesten.'
          ]
        },
        ru: {
          headline: 'Ковши из алькантары и металл',
          strengths: [
            'Ковши из алькантары и металл обеспечивает удобную и понятную эргономику на каждый день.',
            'Каркасы сидений и основные кнопки хорошо переносят большие пробеги.'
          ],
          watchouts: [
            'Строго 4-местный салон; штатная система Garmin работает неспешно.',
            'Проверьте эффективность кондиционера, стеклоподъёмники и кнопки мультимедиа.'
          ],
          beforeYouBuy: ['Проверьте работу климата на холод и тепло, подогревы сидений и мультимедиа.']
        }
      },
      visibilityManeuverability: {
        en: {
          headline: 'Wide 11.8 m Turning Circle',
          strengths: [
            'Standard reverse camera and parking sensors compensate well for the rear wing.',
            'Good side-mirror coverage and clear forward sightlines.'
          ],
          watchouts: [
            'Wide 11.8 m turning circle and tall rear GT wing reduce rearward visibility.',
            'Check that parking sensors or reverse camera work reliably in wet weather.'
          ],
          beforeYouBuy: ['Perform a tight U-turn and reverse-park test during the test drive.']
        },
        de: {
          headline: 'Großer 11,8-m-Wendekreis',
          strengths: [
            'Serienmäßige Rückfahrkamera und Parksensoren gleichen den hohen Heckflügel beim Rangieren gut aus.',
            'Gut dimensionierte Außenspiegel und klare Sicht nach vorn.'
          ],
          watchouts: [
            '11,8 m Wendekreis und der große Heckflügel schränken die Rundumsicht ein.',
            'Funktionsfähigkeit von Parksensoren und Rückfahrkamera bei Nässe prüfen.'
          ],
          beforeYouBuy: ['Bei der Probefahrt einmal eng wenden und rückwärts einparken.']
        },
        ru: {
          headline: 'Большой разворот 11,8 м',
          strengths: [
            'Штатная камера заднего вида и парктроники хорошо компенсируют перекрытый обзор.',
            'Хорошая обзорность вперёд и информативные боковые зеркала.'
          ],
          watchouts: [
            'Радиус разворота 11,8 м и высокое антикрыло ухудшают обзор назад.',
            'Убедитесь в исправной работе парктроников и камеры заднего вида.'
          ],
          beforeYouBuy: ['Сделайте плотный разворот и проверьте парковку задним ходом во время тест-драйва.']
        }
      },
      safetyProtection: {
        en: {
          headline: 'Euro NCAP 5★ Chassis — Forward Collision + Lane Warn',
          strengths: [
            'Euro NCAP 5★ Chassis provides solid passive crash protection for its class and era.',
            'Forward Collision + Lane Warn standard or widely fitted across trims.'
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
          headline: 'Euro NCAP 5★ Basis — Kollisions- & Spurwarner',
          strengths: [
            'Euro NCAP 5★ Basis bietet soliden passiven Insassenschutz für Klasse und Baujahr.',
            'Kollisions- & Spurwarner serienmäßig bzw. weit verbreitet.'
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
          headline: 'База Euro NCAP 5★ — Контроль полосы и сближения',
          strengths: [
            'База Euro NCAP 5★ обеспечивает достойную пассивную безопасность для своего класса и возраста.',
            'Контроль полосы и сближения входят в оснащение большинства версий.'
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
          headline: 'Strict 4-Seater Homologation',
          strengths: [
            'Strict 4-Seater Homologation keeps daily passengers comfortable.',
            'Supportive front driving position with good steering/seat adjustability.'
          ],
          watchouts: ['Deep Front Buckets Take Knee Room.'],
          beforeYouBuy: [
            'Sit in the driver seat and then directly behind it to verify real knee room and ISOFIX access.'
          ]
        },
        de: {
          headline: 'Reiner 4-Sitzer ab Werk',
          strengths: [
            'Reiner 4-Sitzer ab Werk sorgt für guten Reisekomfort auf den Sitzplätzen.',
            'Gute Sitzposition vorn mit großem Verstellbereich für Lenkrad und Sitz.'
          ],
          watchouts: ['Tiefe Schalen kosten Knieraum.'],
          beforeYouBuy: [
            'Erst vorn einstellen, dann dahinter Platz nehmen und Beinfreiheit sowie ISOFIX testen.'
          ]
        },
        ru: {
          headline: 'Строго 4-местная посадка',
          strengths: [
            'Строго 4-местная посадка обеспечивает достойный комфорт для водителя и пассажиров.',
            'Удобная посадка с широкими диапазонами регулировки кресла и руля.'
          ],
          watchouts: ['Толстые ковши скрадывают место.'],
          beforeYouBuy: [
            'Настройте водительское кресло под себя и сядьте сзади, чтобы оценить реальный запас места.'
          ]
        }
      },
      interiorBootSpace: {
        en: {
          headline: '498L Boot (1,427L Max)',
          strengths: [
            'Practical 498L boot (1,427L max) makes it one of the most practical hot hatches.',
            'Huge Hot-Hatch Practicality improves cargo versatility for trips and strollers.'
          ],
          watchouts: [
            'Check whether the specific trim includes split-folding seats and a spare tire vs repair kit.'
          ],
          beforeYouBuy: [
            'Fold the rear seats flat and lift the boot floor carpet to inspect for dampness or missing tools.'
          ]
        },
        de: {
          headline: '498L Kofferraum (1.427L Max)',
          strengths: [
            'Praktischer Nutzwert: 498 L Kofferraum (max. 1.427 L) machen ihn extrem alltagstauglich.',
            'Riesig für einen Hot-Hatch erhöht die Alltagsvariabilität für Reisen und Einkäufe.'
          ],
          watchouts: ['Prüfen, ob das konkrete Fahrzeug geteilte Lehnen und ein Reserverad mitbringt.'],
          beforeYouBuy: [
            'Rückbank einmal umklappen und unter den Kofferraumboden auf Trockenheit und Werkzeug schauen.'
          ]
        },
        ru: {
          headline: 'Багажник 498–1 427 л',
          strengths: [
            'Практичный объём: багажник 498 л (до 1 427 л) делает его одним из самых практичных хот-хэтчей.',
            'Огромный для хот-хэтча добавляет удобства при перевозке габаритных вещей.'
          ],
          watchouts: [
            'Уточните наличие складной спинки по частям и запасного колеса в выбранной комплектации.'
          ],
          beforeYouBuy: ['Сложите задний ряд и загляните под пол багажника на предмет сухости и комплектности.']
        }
      },
      handlingAgility: {
        en: {
          headline: 'Helical LSD + Dual-Axis Front',
          strengths: [
            'Dual-axis front strut, helical LSD, and 350 mm Brembo brakes eliminate torque steer.',
            'Direct 2.2-turn steering rack and flat body control inspire huge cornering confidence.'
          ],
          watchouts: [
            'Worn shocks, tired tyres, or misaligned rear geometry dull handling noticeably on 10+ year cars.'
          ],
          beforeYouBuy: [
            'Drive straight on a flat road to verify steering wheel centering and zero pulling to either side.'
          ]
        },
        de: {
          headline: 'Sperrdiff. + Dual-Axis-Achse',
          strengths: [
            'Dual-Axis-Aufhängung, Sperrdifferenzial und 350-mm-Brembo-Anlage bieten Rennstrecken-Präzision.',
            'Direkte Lenkung und minimale Seitenneigung sorgen für enormes Vertrauen in schnellen Kurven.'
          ],
          watchouts: [
            'Verschlissene Stoßdämpfer, alte Reifen oder verstellte Spur trüben das Fahrverhalten spürbar.'
          ],
          beforeYouBuy: [
            'Auf ebener Strecke prüfen, ob das Lenkrad gerade steht und das Auto nicht zur Seite zieht.'
          ]
        },
        ru: {
          headline: 'Самоблок + Dual-Axis спереди',
          strengths: [
            'Подвеска Dual-Axis, самоблок и 350-мм тормоза Brembo исключают силовое подруливание.',
            'Острый руль и минимальные крены кузова дарят максимальную точность в поворотах.'
          ],
          watchouts: [
            'Изношенные амортизаторы, старые шины или сбитый развал заметно ухудшают управляемость.'
          ],
          beforeYouBuy: ['На ровной дороге проверьте положение руля и отсутствие увода автомобиля в сторону.']
        }
      },
      brakingPerformance: {
        en: {
          headline: '100–0 km/h: 34.5 m — 350 mm Brembo 4-Pot • Track Ready',
          strengths: [
            '100–0 km/h: 34.5 m provides confident everyday stopping power.',
            'Four-wheel disc setup with straightforward pad and rotor availability.'
          ],
          watchouts: ['Rear brake discs and handbrake calipers tend to rust or stick if the car sat unused.'],
          beforeYouBuy: [
            'Brake firmly from 80 km/h — there should be zero steering shake, and check rear discs for rust.'
          ]
        },
        de: {
          headline: '100–0 km/h: 34,5 m — 350 mm Brembo 4-Kolben • Rennstrecke',
          strengths: [
            '100–0 km/h: 34,5 m bietet souveräne Verzögerungswerte im Alltag.',
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
          headline: '100–0 км/ч: 34,5 м — 350 мм Brembo 4-поршн. • Трек',
          strengths: [
            '100–0 км/ч: 34,5 м обеспечивает уверенное торможение в повседневных условиях.',
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
          headline: '410 kg Payload • 0 / 0 kg Towing',
          lowScoreReasons: [
            'Zero factory towing approval (0 kg braked/unbraked) due to the center triple exhaust and rear diffuser.',
            'Track-oriented aero and stiff rear suspension are not built for trailer or heavy roof-rack duty.'
          ],
          strengths: ['410 kg payload capacity easily handles four adults and weekend luggage.'],
          watchouts: [
            'Low rear diffuser and stiff rear springs sit closer to bump stops when carrying 4 adults plus full holiday luggage.'
          ],
          beforeYouBuy: ['Inspect rear springs and diffuser tabs for scrapes or heavy track-day cargo wear.']
        },
        de: {
          headline: '410 kg Zuladung • 0 / 0 kg Anhängelast',
          lowScoreReasons: [
            'Keine Anhängelast-Freigabe ab Werk (0 kg gebremst/ungebremst) wegen mittiger Abgasanlage und Heckdiffusor.',
            'Aerodynamik und straffes Sportfahrwerk sind nicht für Anhänger- oder Dachlast-Einsätze ausgelegt.'
          ],
          strengths: ['410 kg Zuladung reichen problemlos für vier Erwachsene samt Wochenendgepäck.'],
          watchouts: [
            'Tiefer Heckdiffusor und straffe Hinterfedern haben bei voller Besetzung samt Urlaubsgepäck wenig Einfahrreserve an steilen Rampen.'
          ],
          beforeYouBuy: ['Hintere Federn und Heckdiffusor auf Aufsetzer oder Überlastungsspuren prüfen.']
        },
        ru: {
          headline: 'Нагрузка 410 кг • Прицеп: 0 / 0 кг',
          lowScoreReasons: [
            'Заводская буксировка полностью запрещена (0 кг) из-за центрального тройного выхлопа и заднего диффузора.',
            'Трековая аэродинамика и жёсткая задняя подвеска не рассчитаны на прицепы и тяжёлые багажники.'
          ],
          strengths: ['Полезной нагрузки 410 кг хватает для четырёх взрослых и багажа на уик-энд.'],
          watchouts: [
            'Низкий задний диффузор требует аккуратности на крутых съездах при полной загрузке салона и багажника.'
          ],
          beforeYouBuy: ['Осмотрите задние пружины и нижний диффузор на отсутствие просадки и повреждений.']
        }
      },
      depreciationResale: {
        en: {
          headline: 'Collector Type R Status',
          strengths: [
            'Collector Type R Status helps keep used demand healthy.',
            'Largest initial depreciation has already passed, limiting further annual value drop.'
          ],
          watchouts: [
            'Clean service records, Rust-free underbody, and desirable trims determine actual resale speed.'
          ],
          beforeYouBuy: ['Keep invoices, TÜV/inspection reports, and both keys to protect future resale value.']
        },
        de: {
          headline: 'Sammler-Status Type R',
          strengths: [
            'Sammler-Status Type R sorgt für stabile Nachfrage auf dem Gebrauchtwagenmarkt.',
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
          headline: 'Коллекционный статус',
          strengths: [
            'Коллекционный статус поддерживает стабильный спрос на вторичном рынке.',
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
            headline: 'Crisp Short-Throw 6-MT + LSD — Check 2nd-Gear Synchro Cold',
            strengths: [
              'Crisp Short-Throw 6-MT + LSD matches this powertrain well for everyday driving.',
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
            headline: 'Knackiges Short-Throw + Sperre — 2.-Gang-Synchronring prüfen',
            strengths: [
              'Knackiges Short-Throw + Sperre passt gut zur Motorcharakteristik im Alltag.',
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
            headline: 'Чёткая 6-МКПП + самоблок LSD — Проверка синхронизатора 2-й',
            strengths: [
              'Чёткая 6-МКПП + самоблок LSD хорошо сочетается с данным двигателем в повседневной езде.',
              'Механический самоблок эффективно реализует высокий крутящий момент на передней оси.'
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
            headline: 'Reliable K20C1 ECU & Loom',
            strengths: [
              'Reliable K20C1 ECU & Loom keeps electrical diagnostics straightforward.',
              'Core engine ECU and interior modules hold up cleanly when the 12V battery is healthy.'
            ],
            watchouts: [
              'Aging 12V / Start-Stop AGM batteries cause false warning lights and sensor glitches first.',
              'Check adaptive damper sensors and wheel-speed wiring for moisture damage.'
            ],
            beforeYouBuy: [
              'Test all electrical features (AC, windows, central locking, parking sensors) and check battery age.'
            ]
          },
          de: {
            headline: 'Solide K20C1-Elektronik',
            strengths: [
              'Solide K20C1-Elektronik sorgt für eine überschaubare und gut wartbare Fahrzeugelektrik.',
              'Steuergeräte und Komfortmodule arbeiten zuverlässig bei intakter 12V-Batterie.'
            ],
            watchouts: [
              'Alternde 12V-/Start-Stopp-Batterien lösen oft als Erstes Fehlermeldungen aus.',
              'Dämpfer-Sensorik prüfen.'
            ],
            beforeYouBuy: [
              'Alle elektrischen Verbraucher (Klima, Fensterheber, Zentralverriegelung, Sensoren) durchtesten.'
            ]
          },
          ru: {
            headline: 'Надёжная проводка K20C1',
            strengths: [
              'Надёжная проводка K20C1 упрощает диагностику и обслуживание электрооборудования.',
              'Блок управления и салонная электроника работают стабильно при живой АКБ.'
            ],
            watchouts: [
              'Просадка старого аккумулятора часто вызывает первые ложные ошибки электроники.',
              'Проверьте датчики адаптивных амортизаторов на предмет окисления контактов.'
            ],
            beforeYouBuy: [
              'Проверьте все электроприборы (климат, стеклоподъёмники, замки, датчики) и состояние АКБ.'
            ]
          }
        },
        rideNoiseComfort: {
          en: {
            headline: 'Very Stiff +R Track Dampers',
            lowScoreReasons: [
              'Track-calibrated adaptive dampers transmit sharp bumps and broken tarmac directly into the cabin.',
              'Wide 19-inch performance tyres generate noticeable road roar above 110 km/h.'
            ],
            strengths: [
              'Supportive suede bucket seats hold you comfortably on long motorway journeys.',
              'Standard Normal damper mode is noticeably more compliant than +R track mode.'
            ],
            watchouts: [
              'Very stiff suspension setup and low-profile 19" tyres make rough city streets tiring.',
              'Wind and tyre noise rise noticeably at 130+ km/h motorway cruising speeds.'
            ],
            beforeYouBuy: [
              'Drive over rough tarmac in both Normal and +R modes and cruise at 110–120 km/h to judge real tyre roar.'
            ]
          },
          de: {
            headline: 'Sehr hartes +R-Sportfahrwerk',
            lowScoreReasons: [
              'Die rennstreckenorientierten Adaptivdämpfer geben Querfugen und Schlaglöcher hart an die Insassen weiter.',
              'Breite 19-Zoll-Sportreifen erzeugen ab 110 km/h deutlich hörbares Abrollgeräusch.'
            ],
            strengths: [
              'Die stark konturierten Wildleder-Sportsitze bieten auch auf langen Etappen guten Halt.',
              'Im Standard-Fahrmodus arbeitet das Fahrwerk spürbar nachgiebiger als im harten +R-Modus.'
            ],
            watchouts: [
              'Sehr straffe Grundabstimmung und flache 19-Zoll-Reifen machen schlechte Stadtstraßen unkomfortabel.',
              'Ab 130 km/h nehmen Wind- und Abrollgeräusche im Innenraum spürbar zu.'
            ],
            beforeYouBuy: [
              'Schlechte Straße sowohl im Normal- als auch im +R-Modus fahren und bei 110–120 km/h auf Abrollgeräusche achten.'
            ]
          },
          ru: {
            headline: 'Очень жёсткие стойки (+R)',
            lowScoreReasons: [
              'Адаптивные стойки с трековой калибровкой жёстко передают стыки и ямы в салон.',
              'Широкие 19-дюймовые шины заметно шумят на шершавом асфальте уже со 110 км/ч.'
            ],
            strengths: [
              'Анатомические ковши из алькантары хорошо поддерживают спину на дальних перегонах.',
              'В обычном режиме амортизаторы заметно мягче, чем в экстремальном режиме +R.'
            ],
            watchouts: [
              'Очень плотная подвеска и низкопрофильные 19" шины утомляют на разбитых городских дорогах.',
              'После 130 км/ч растут шумы ветра и гул широких покрышек.'
            ],
            beforeYouBuy: [
              'Проедьте по неровностям в обычном режиме и в +R, а также разгонитесь до 110–120 км/h для оценки шума.'
            ]
          }
        },
        maintenanceRepairCosts: {
          en: {
            headline: 'Pricey 19" Tyres & Brembo Pads — Frequent Fluid & Spark Care',
            strengths: [
              'Predictable scheduled servicing with clear inspection intervals helps keep annual bills steady.',
              'Wide independent-garage familiarity and affordable aftermarket service parts.'
            ],
            watchouts: ['Frequent Fluid & Spark Care.', 'Pricey 19" Tyres & Brembo Pads.'],
            beforeYouBuy: [
              'Open the Service, Repair & Cost Roadmap below and match upcoming milestones against existing receipts.'
            ]
          },
          de: {
            headline: 'Teure 19-Zoll-Reifen & Brembo — Kurze Sport-Serviceintervalle',
            strengths: [
              'Planbare Wartungsintervalle mit klaren Vorgaben halten die laufenden Servicekosten kalkulierbar.',
              'Hohe Werkstatt-Kompetenz und breite Auswahl günstiger Marken-Ersatzteile.'
            ],
            watchouts: ['Kurze Sport-Serviceintervalle.', 'Teure 19-Zoll-Reifen & Brembo.'],
            beforeYouBuy: [
              'Untenstehenden Kosten-Fahrplan öffnen und fällige Meilensteine mit vorhandenen Rechnungen abgleichen.'
            ]
          },
          ru: {
            headline: 'Дорогие 19" шины и Brembo — Частое спортивное обслуживание',
            strengths: [
              'Предсказуемый регламент обслуживания помогает держать ежегодные затраты на ТО под контролем.',
              'Машина хорошо знакома любому сервису, а качественные запчасти широко доступны.'
            ],
            watchouts: ['Частое спортивное обслуживание.', 'Дорогие 19" шины и Brembo.'],
            beforeYouBuy: ['Откройте план обслуживания ниже и сверьте предстоящие работы с имеющимися чеками.']
          }
        }
      }
    },
    sharedGearboxes: {
      '6-mt-lsd': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'Honda K20C1 M6 · Manual + Helical LSD', de: 'Honda K20C1 M6 · Schaltgetriebe + Sperrdiff.', ru: 'Honda K20C1 M6 · Механика + Блокировка LSD' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: { transmissionDriveline: { gearbox: '@gbManual6Honda', clutchDmf: '@clutchDmf' } },
        dossier: {
          en: {
            headline: 'Bespoke FK2 6-Speed Manual + Helical LSD — Built for 400 Nm Track Loads',
            strengths: ['Short-throw mechanical linkage and factory helical limited-slip diff put 310 HP down cleanly.'],
            watchouts: ['Hard track launches accelerate 2nd-gear synchro and clutch/DMF wear (€1,200–€1,600).'],
            beforeYouBuy: ['Snap-shift 1→2 and 2→3 at 5,500+ rpm to confirm zero synchro crunch.', 'Verify MTF-3 transmission oil changes on track-driven examples.']
          },
          de: {
            headline: 'FK2 6-Gang-Schaltgetriebe + Sperrdiff. — Ausgelegt für 400 Nm',
            strengths: ['Ultrakurz geführte Schaltung und mechanische Torsen-/Helical-Sperre bringen 310 PS sauber auf die Straße.'],
            watchouts: ['Harte Ampelstarts oder Trackdays belasten 2.-Gang-Synchronring und Kupplung/ZMS (1.200–1.600 €).'],
            beforeYouBuy: ['Zügiges Schalten 1→2→3 über 5.500 U/min ohne Kratzen prüfen.', 'MTF-3-Getriebeölwechsel bei sportlich bewegten Exemplaren erfragen.']
          },
          ru: {
            headline: 'Усиленная 6-МКПП FK2 с блокировкой LSD — Держит 400 Н·м трека',
            strengths: ['Короткоходная кулиса и винтовая блокировка LSD отлично реализуют 310 л.с.'],
            watchouts: ['Жёсткие старты и трек-дни ускоряют износ синхронизатора 2-й передачи и сцепления/ДММ (€1 200–1 600).'],
            beforeYouBuy: ['Проверьте быстрые переключения 1→2→3 на высоких оборотах без хруста.', 'Уточните историю замены масла MTF-3.']
          }
        }
      }
    },
    engines: [
      {
        id: '2.0-vtec-turbo',
        defaultGearboxId: '6-mt-lsd',
        gearboxes: [{ id: '6-mt-lsd', isDefault: true }],
        specOverrides: {
          engineName: { en: '2.0L VTEC Turbo', de: '2.0L VTEC Turbo', ru: '2.0L VTEC Турбо' },
          forcedInduction: '@turbo', injection: '@direct', gearbox: '@manual6', clutchDmf: '@clutchDmf',
          towingBraked: '0 kg (No Tow)', sprint0100: '5.7 s', topSpeed: '270 km/h', peakTorque: '400 Nm @ 2,500',
          passingPunch: { en: 'Ferocious Turbo Punch', de: 'Brachialer Turbo-Schub', ru: 'Ураганный турбо-подхват' },
          realWorldFuel: '8.5–10.5 L/100 km', tankRange: '50 L · ~530 km', euroNorm: 'Euro 6',
          taxInsurance: '@tierHigh', timingDrive: '@chain', serviceWear: '@tierHigh'
        },
        dossierGroup: 'petrol-6mt-lsd',
        buyerFitGroup: 'hot-hatch',
        isDefault: true,
        fuelType: 'petrol',
        hp: 310,
        shortTitle: 'CIVIC TYPE R (FK2)',
        fullName: '2015-2017 Honda Civic Type R (FK2)',
        engineBadge: '2.0L VTEC Turbo • 310 HP',
        engineSubLabel: {
          en: 'K20C1 (FK2) 2.0L VTEC Turbo • 6-MT + Helical LSD • 400 Nm',
          de: 'K20C1 (FK2) 2.0L VTEC-Turbo • 6-Gang + Sperrdiff. • 400 Nm',
          ru: 'K20C1 (FK2) 2.0L VTEC Турбо • 6-ст. МКПП + Самоблок • 400 Н·м'
        },
        rarityLabel: {
          en: 'TRACK WEAPON',
          de: 'RUNDSTRECKEN-IKONE',
          ru: 'ТРЕКОВЫЙ БОЕЦ'
        },
        originalMsrp: {
          en: '€34,500 New',
          de: '34.500 € Neu',
          ru: '€34 500 новый'
        },
        estUsedPrice: '€24,900',
        perkLabel: {
          en: '✦ 5.7s 0–100 • 270 km/h Top Speed • Brembo 350mm Brakes & 498L Boot',
          de: '✦ 5,7s 0–100 • 270 km/h Spitze • 350mm Brembo-Bremse & 498L Kofferraum',
          ru: '✦ 5,7 с до 100 • Макс. 270 км/ч • Тормоза Brembo 350 мм и багажник 498 л'
        },
        remarkablePositives: {
          en: [
            '5.7S 0–100 • 270 KM/H TOP SPEED',
            'ROBUST K20C1 TURBO ENGINE',
            'BIG BREMBO BRAKES (350MM)',
            'HIGH-GRIP FRONT DIFF',
            'HUGE 498L HOT-HATCH BOOT'
          ],
          de: [
            '5,7S 0–100 • 270 KM/H SPITZE',
            'ROBUSTER K20C1 TURBOMOTOR',
            'GROSSE BREMBO-BREMSEN (350MM)',
            'TRAKTIONSSTARKE VORDERACHSE',
            'RIESIGER 498L KOFFERRAUM'
          ],
          ru: [
            '5,7 С ДО 100 • МАКС. 270 КМ/Ч',
            'КРЕПКИЙ ТУРБОМОТОР K20C1',
            'БОЛЬШИЕ ТОРМОЗА BREMBO 350 ММ',
            'САМОБЛОК НА ПЕРЕДНЕЙ ОСИ',
            'ОГРОМНЫЙ БАГАЖНИК 498 Л'
          ]
        },
        notableNegatives: {
          en: [
            'IMPAIRED REAR VISIBILITY',
            'THIRSTY 9.8L/100KM',
            'STIFF TRACK-TUNED RIDE',
            'LOW FRONT SPLITTER SCRAPES',
            '0 KG TOWING (NO TRAILER)'
          ],
          de: [
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'HOHER VERBRAUCH (9,8L/100KM)',
            'SEHR HARTES SPORTFAHRWERK',
            'TIEFER FRONT-SPLITTER SETZT AUF',
            '0 KG ANHÄNGELAST (KEINE AHK)'
          ],
          ru: [
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'РАСХОД 9,8 Л/100 КМ',
            'ЖЁСТКАЯ ТРЕКОВАЯ ПОДВЕСКА',
            'НИЗКАЯ ГУБА БАМПЕРА ЦЕПЛЯЕТ',
            '0 КГ БУКСИРОВКА (БЕЗ ТСУ)'
          ]
        },
        pillarScores: {
          reliabilityQuality: 8.7,
          comfortCabin: 6.8,
          spacePracticality: 7.3,
          performanceDynamics: 9.1,
          runningCostsTco: 6.7
        },
        subStats: {
          powertrainDurability: {
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0L VTEC Turbo Inline-4 (K20C1)', de: '2.0L VTEC Reihenvierzylinder Turbo (K20C1)', ru: '2.0L VTEC рядный 4-цил. турбо (K20C1)' } },
                  { k: 'displacement', v: '1,996 cc' },
                  { k: 'cylinders', v: { en: '4 Cylinders · 16V DOHC VTEC', de: '4 Zylinder · 16V DOHC VTEC', ru: '4 цилиндра · 16V DOHC VTEC' } },
                  { k: 'output', v: { en: '228 kW (310 HP)', de: '228 kW (310 PS)', ru: '228 кВт (310 л.с.)' } },
                  { k: 'fuelTiming', v: { en: 'Petrol (98 RON) · Timing Chain', de: 'Super Plus · Steuerkette', ru: 'Бензин (АИ-98) · Цепь ГРМ' } }
                ],
                note: { en: 'Over-engineered K20C1 block built to survive track abuse with remarkably few internal failures.', de: 'Extrem standfest gebauter K20C1-Motor — übersteht selbst harte Rennstrecken-Einsätze bemerkenswert zuverlässig.', ru: 'Сверхкрепкий мотор K20C1 с огромным запасом прочности даже для трек-дней.' }
              },
              forcedInduction: '@turboHotHatch', injection: '@directInjPetrol'
            },
            score: 8.9,
            badges: {
              en: ['K20C1 Forged Internals', 'Upgraded Oil Cooler & Cooling'],
              de: ['K20C1 Schmiede-Basis', 'Standfester Ölkühler & Kühlung'],
              ru: ['Крепкий K20C1', 'Усиленный маслоохладитель и СОЖ']
            },
            dossier: {
              en: {
                headline: 'Honda’s First Turbo Type R (K20C1): Overbuilt & Track-Proven 2.0L',
                strengths: [
                  'Forged crankshaft/connecting rods, sodium-filled exhaust valves, and oil-jet piston cooling handle 310 HP reliably.',
                  'Expected to run 280,000–300,000+ km with basic scheduled maintenance.'
                ],
                watchouts: [
                  'Sustained hot-weather track lapping can trigger high coolant/oil temps on stock radiator.',
                  'Follow annual 10,000–15,000 km synthetic oil intervals and inspect coolant hoses for age seepage.'
                ],
                beforeYouBuy: [
                  'Verify strict oil changes every 8,000–10,000 km with high-grade synthetic oil.',
                  'Listen to a stone-cold start for steady idle and zero metallic timing-chain rattle.',
                  'Check the oil dipstick and coolant expansion tank for clean fluids without milky residue.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50,000 km • 1–3 yrs',
                    action: 'Strict 6–8,000 km / 1 yr synthetic oil + 2-yr racing brake fluid & LSD gearbox oil at 30–40k km / 2–3 yrs',
                    cost: '€240–390',
                    ifIgnored: '310 hp thermal loads shear aged oil & scorch 2nd-gear gearbox synchros early',
                    damageCost: '€1,800–3,000'
                  },
                  {
                    tier: 'orange',
                    km: '50,000–100,000 km • 4–7 yrs',
                    action: 'Replace hot-running iridium plugs at 50–60k, flush coolant & inspect 5–6 yr heat-aged silicone/rubber hoses',
                    cost: '€360–580',
                    ifIgnored: 'Worn aged plugs cause dangerous turbo knock & heat-hardened hoses split under boost',
                    damageCost: '€1,900–3,300'
                  },
                  {
                    tier: 'orange',
                    km: '100,000–130,000 km • 7–9 yrs',
                    action: 'Replace front Brembo discs/pads & change gearbox oil',
                    cost: '€750–1,150',
                    ifIgnored: 'Cracked brakes & worsening 2nd/4th gear crunching (components & fluids also degrade over years)',
                    damageCost: '€1,800–2,800'
                  },
                  {
                    tier: 'orange',
                    km: '130,000–170,000 km • 9–11 yrs',
                    action: 'Clean intake valves, replace spark plugs & check turbo valve',
                    cost: '€450–750',
                    ifIgnored: 'Power cuts under hard throttle & warning lights (rubber/plastic & seals also harden with age)',
                    damageCost: '€1,400–2,200'
                  },
                  {
                    tier: 'red',
                    km: '160,000–200,000 km • 11–13 yrs',
                    action: 'Replace high-torque clutch, flywheel & front ball joints',
                    cost: '€1,200–1,750',
                    ifIgnored: 'Slipping clutch & dangerous loose front wheel play (components & fluids also degrade over years)',
                    damageCost: '€2,200–3,200'
                  },
                  {
                    tier: 'red',
                    km: '200,000–250,000 km • 13–15+ yrs',
                    action: 'Replace timing chain kit, water pump & electronic shocks',
                    cost: '€1,100–1,800',
                    ifIgnored: 'Skipped timing chain or pricey adaptive shock failure (rubber/plastic & seals also harden with age)',
                    damageCost: '€2,800–4,500'
                  }
                ]
              },
              de: {
                headline: 'Hondas erster Turbo-Type-R (K20C1): Überdimensioniert & rennstreckenfest',
                strengths: [
                  'Geschmiedete Kurbelwelle/Pleuel und natriumgefüllte Auslassventile für hohe Dauerbelastung.',
                  'Läuft bei normaler Grundwartung zuverlässig 280.000–300.000+ km.'
                ],
                watchouts: [
                  'Bei langen Rennstrecken-Einsätzen im Sommer steigen Öl- und Wassertemperaturen.',
                  'Jährliche Ölwechsel (10.000–15.000 km) einhalten und Kühlerschläuche auf Alterungsrisse prüfen.'
                ],
                beforeYouBuy: [
                  'Auf der Probefahrt flott vom 1. in den 2. und 3. Gang schalten— Kratzen verrät verschlissene Synchronringe.',
                  'Strikte Ölwechsel alle 8.000–10.000 km mit hochwertigem Vollsynthetik-Öl nachweisen lassen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne metallisches Steuerketten-Rasseln achten.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50.000 km • 1–3 J.',
                    action: 'Strikte Ölwechsel alle 6–8.000 km / 1 J. + Sperrdiff-Getriebeöl alle 30–40 Tkm / 2–3 J. wechseln',
                    cost: '240–390 €',
                    ifIgnored: '310 PS Hitze zersetzt Altöl schnell & verschleißt die Synchronringe des 2. Gangs früh',
                    damageCost: '1.800–3.000 €'
                  },
                  {
                    tier: 'orange',
                    km: '50.000–100.000 km • 4–7 J.',
                    action: 'Hochleistungs-Zündkerzen bei 50–60 Tkm ersetzen & 5–6-J.-hitzegealterte Schläuche prüfen',
                    cost: '360–580 €',
                    ifIgnored: 'Alte Kerzen führen zu Klopfschäden; ausgehärtete Turboschläuche reißen unter Ladedruck',
                    damageCost: '1.900–3.300 €'
                  },
                  {
                    tier: 'orange',
                    km: '100.000–130.000 km • 7–9 J.',
                    action: 'Brembo-Bremsen vorn & Getriebeöl komplett erneuern',
                    cost: '750–1.150 €',
                    ifIgnored: 'Rissige Scheiben & bleibendes Kratzen im 2./4. Gang (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.800–2.800 €'
                  },
                  {
                    tier: 'orange',
                    km: '130.000–170.000 km • 9–11 J.',
                    action: 'Einlassventile säubern, Zündkerzen & Turbo-Ventil tauschen',
                    cost: '450–750 €',
                    ifIgnored: 'Leistungsabfall unter Volllast & Warnmeldungen (Bauteile & Flüssigkeiten altern auch mit den Jahren)',
                    damageCost: '1.400–2.200 €'
                  },
                  {
                    tier: 'red',
                    km: '160.000–200.000 km • 11–13 J.',
                    action: 'Hochlast-Kupplung, Schwungrad & vordere Traggelenke erneuern',
                    cost: '1.200–1.750 €',
                    ifIgnored: 'Rutschende Kupplung & gefährliches Spiel in der Vorderachse (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.200–3.200 €'
                  },
                  {
                    tier: 'red',
                    km: '200.000–250.000 km • 13–15+ J.',
                    action: 'Steuerkettensatz, Wasserpumpe & elektronische Dämpfer tauschen',
                    cost: '1.100–1.800 €',
                    ifIgnored: 'Übersprungene Kette oder Ausfall des adaptiven Fahrwerks (Gummi, Kunststoff & Dichtungen altern auch zeitlich)',
                    damageCost: '2.800–4.500 €'
                  }
                ]
              },
              ru: {
                headline: 'Первый турбо-Type R (K20C1): огромный запас прочности для трека и дорог',
                strengths: [
                  'Кованый коленвал и шатуны, клапаны с натрием и масляные форсунки спокойно держат 310 л.с.',
                  'При регулярном базовом обслуживании ресурс составляет 280 000–300 000+ км.'
                ],
                watchouts: [
                  'В жару при длительных заездах на треке возможен перегрев без доп. радиатора.',
                  'Соблюдайте замену масла раз в 10 000–15 000 км и проверяйте патрубки охлаждения на утечки.'
                ],
                beforeYouBuy: [
                  'Проверить чеки замены качественной синтетики каждые 8–10 тыс. км.',
                  'Послушать запуск на холодную— холостой ход должен быть ровным без металлического звона цепи.',
                  'Проверить щуп масла и расширительный бачок— жидкости должны быть чистыми без эмульсии.'
                ],
                highMileage: [
                  {
                    tier: 'yellow',
                    km: '0–50 000 км • 1–3 года',
                    action: 'Масло строго каждые 6–8 тыс. км / 1 год, тормозная жидкость и масло КПП с блокировкой — раз в 30–40 тыс. / 2–3 года',
                    cost: '€240–390',
                    ifIgnored: 'Высокий нагрев 310 л.с. убивает старое масло и быстро изнашивает синхронизатор 2-й передачи',
                    damageCost: '€1 800–3 000'
                  },
                  {
                    tier: 'orange',
                    km: '50 000–100 000 км • 4–7 лет',
                    action: 'Заменить иридиевые свечи к 50–60 тыс., антифриз и проверить задубевшие от жара шланги к 5–6 годам',
                    cost: '€360–580',
                    ifIgnored: 'Изношенные свечи опасны детонацией, а высохшие от температуры патрубки лопаются',
                    damageCost: '€1 900–3 300'
                  },
                  {
                    tier: 'orange',
                    km: '100 000–130 000 км • 7–9 лет',
                    action: 'Заменить передние тормоза Brembo и масло в механической коробке',
                    cost: '€750–1 150',
                    ifIgnored: 'Перегрев тормозов и прогрессирующий хруст передач (узлы и жидкости также стареют с годами)',
                    damageCost: '€1 800–2 800'
                  },
                  {
                    tier: 'orange',
                    km: '130 000–170 000 км • 9–11 лет',
                    action: 'Почистить впуск, поменять свечи и проверить тягу турбины',
                    cost: '€450–750',
                    ifIgnored: 'Отсечки наддува при разгоне и ошибки двигателя',
                    damageCost: '€1 400–2 200'
                  },
                  {
                    tier: 'red',
                    km: '160 000–200 000 км • 11–13 лет',
                    action: 'Заменить усиленное сцепление, маховик и передние шаровые опоры',
                    cost: '€1 200–1 750',
                    ifIgnored: 'Пробуксовка сцепления и опасный люфт передней подвески (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 200–3 200'
                  },
                  {
                    tier: 'red',
                    km: '200 000–250 000 км • 13–15+ лет',
                    action: 'Заменить цепь двигателя, помпу и проверить адаптивные стойки',
                    cost: '€1 100–1 800',
                    ifIgnored: 'Перескок цепи или дорогая замена электронных амортизаторов (резина, пластик и уплотнения стареют и по годам)',
                    damageCost: '€2 800–4 500'
                  }
                ]
              }
            }
          },
          transmissionDriveline: {
            score: 9.3,
            badges: {
              en: ['Crisp Short-Throw 6-MT + LSD', 'Check 2nd-Gear Synchro Cold'],
              de: ['Knackiges Short-Throw + Sperre', '2.-Gang-Synchronring prüfen'],
              ru: ['Чёткая 6-МКПП + самоблок LSD', 'Проверка синхронизатора 2-й']
            }
          },
          buildQualityRust: {
            score: 8.4,
            badges: {
              en: ['Solid Underbody Sealing', 'Inspect Front Pivot Joints'],
              de: ['Guter Karosserie-Rostschutz', 'Vorderachslager (Rennstrecke)'],
              ru: ['Хорошая защита кузова', 'Проверка передних шаровых']
            }
          },
          electronicsReliability: {
            score: 8.9,
            badges: {
              en: ['Reliable K20C1 ECU & Loom', 'Damper Sensor Checks'],
              de: ['Solide K20C1-Elektronik', 'Dämpfer-Sensorik prüfen'],
              ru: ['Надёжная проводка K20C1', 'Датчики адаптивных стоек']
            }
          },
          rideNoiseComfort: {
            score: 4.6,
            badges: {
              en: ['Very Stiff +R Track Dampers', 'Loud 19" Tyre Roar On Rough Roads'],
              de: ['Sehr hartes +R-Sportfahrwerk', 'Lautes 19-Zoll-Abrollgeräusch'],
              ru: ['Очень жёсткие стойки (+R)', 'Громкий гул 19" шин на трассе']
            }
          },
          interiorQualityFeatures: {
            score: 7.5,
            badges: {
              en: ['Suede Type-R Buckets & Alloy', 'Lagging Garmin Touchscreen'],
              de: ['Wildleder-Schalen & Alu-Knauf', 'Träges Garmin-Infotainment'],
              ru: ['Ковши из алькантары и металл', 'Устаревшая система Garmin']
            }
          },
          visibilityManeuverability: {
            score: 5.5,
            badges: {
              en: ['Wide 11.8 m Turning Circle', 'GT Wing Partially Blocks Rear'],
              de: ['Großer 11,8-m-Wendekreis', 'Heckflügel stört Rückblick'],
              ru: ['Большой разворот 11,8 м', 'Антикрыло закрывает обзор']
            }
          },
          safetyProtection: {
            score: 8.0,
            badges: {
              en: ['Euro NCAP 5★ Chassis', 'Forward Collision + Lane Warn'],
              de: ['Euro NCAP 5★ Basis', 'Kollisions- & Spurwarner'],
              ru: ['База Euro NCAP 5★', 'Контроль полосы и сближения']
            }
          },
          passengerSpaceErgonomics: {
            score: 6.1,
            badges: {
              en: ['Strict 4-Seater Homologation', 'Deep Front Buckets Take Knee Room'],
              de: ['Reiner 4-Sitzer ab Werk', 'Tiefe Schalen kosten Knieraum'],
              ru: ['Строго 4-местная посадка', 'Толстые ковши скрадывают место']
            }
          },
          interiorBootSpace: {
            score: 7.9,
            badges: {
              en: ['498L Boot (1,427L Max)', 'Huge Hot-Hatch Practicality'],
              de: ['498L Kofferraum (1.427L Max)', 'Riesig für einen Hot-Hatch'],
              ru: ['Багажник 498–1 427 л', 'Огромный для хот-хэтча']
            }
          },
          payloadTowing: {
            score: 2.2,
            badges: {
              en: ['410 kg Payload', '0 / 0 kg Towing'],
              de: ['410 kg Zuladung', '0 / 0 kg Anhängelast'],
              ru: ['Нагрузка 410 кг', 'Прицеп: 0 / 0 кг']
            }
          },
          accelerationOvertaking: {
            score: 9.7,
            badges: {
              en: ['0–100 km/h: 5.7 s', '270 km/h Top Speed'],
              de: ['0–100 km/h: 5,7 s', '270 km/h Spitze'],
              ru: ['0–100 км/ч: 5,7 с', 'Макс. 270 км/ч']
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
            score: 9.6,
            badges: {
              en: ['Helical LSD + Dual-Axis Front', 'Extreme Grip • Firm City Ride'],
              de: ['Sperrdiff. + Dual-Axis-Achse', 'Extremer Grip • Straff im Alltag'],
              ru: ['Самоблок + Dual-Axis спереди', 'Предельный зацеп • Жёстко в городе']
            }
          },
          brakingPerformance: {
            score: 9.4,
            badges: {
              en: ['100–0 km/h: 34.5 m', '350 mm Brembo 4-Pot • Track Ready'],
              de: ['100–0 km/h: 34,5 m', '350 mm Brembo 4-Kolben • Rennstrecke'],
              ru: ['100–0 км/ч: 34,5 м', '350 мм Brembo 4-поршн. • Трек']
            }
          },
          efficiencyFuel: {
            score: 3.1,
            badges: {
              en: ['Thirsty (9.8 L/100km)', '170 g/km CO2'],
              de: ['Durstig (9,8 L/100km)', '170 g/km CO2'],
              ru: ['Прожорливый (9,8 л/100 км)', '170 г/км CO2']
            }
          },
          taxInsuranceNorm: {
            score: 4.8,
            badges: {
              en: ['€176/yr Road Tax • Euro 6', 'Very High Sport Insurance'],
              de: ['176 €/Jahr Steuer • Euro 6', 'Sehr teure Sport-Versicherung'],
              ru: ['Налог €176/год • Euro 6', 'Очень дорогая спорт-страховка']
            }
          },
          maintenanceRepairCosts: {
            repairGuide: {
              routine: [
                { when: '~40,000 km · 3 yrs', action: { en: 'Honda MTF-3 Gearbox Fluid (Protects 2nd-Gear Synchro)', de: 'Honda MTF-3 Getriebeöl wechseln (Schützt 2.-Gang-Synchronring)', ru: 'Замена масла MTF-3 (защита синхронизатора 2-й передачи)' }, cost: '€120–190' },
                { when: '~60,000 km · 4 yrs', action: { en: 'Iridium Spark Plugs & Valve-Clearance Check', de: 'Iridium-Zündkerzen & Ventilspiel prüfen', ru: 'Иридиевые свечи и проверка зазоров клапанов' }, cost: '€240–380' }
              ],
              critical: [
                { when: '60–120k km · Driven', action: { en: '2nd-Gear Synchro / Shift-Fork Wear (Hard Shifts)', de: 'Synchronring 2. Gang (bei hartem Schalten)', ru: 'Износ синхронизатора 2-й передачи при жёстких переключениях' }, cost: '€800–1,400', risk: { en: 'Crunch into 2nd gear at high rpm', de: 'Kratzen beim schnellen Schalten in den 2. Gang', ru: 'Хруст при быстром включении 2-й передачи' }, damage: '€1,600–2,400' },
                { when: '80–140k km · 6–10 yrs', action: { en: '350 mm Brembo Front Discs & Adaptive Damper Seepage', de: '350 mm Brembo-Scheiben vorn & adaptive Dämpfer prüfen', ru: 'Передние диски Brembo 350 мм и адаптивные амортизаторы' }, cost: '€750–1,400', risk: { en: 'Brake judder or harsh knocking damper', de: 'Bremsrubbeln oder polternder Stoßdämpfer', ru: 'Биение тормозов или стук амортизатора' }, damage: '€1,800–2,600' }
              ]
            },
            score: 3.5,
            badges: {
              en: ['Pricey 19" Tyres & Brembo Pads', 'Frequent Fluid & Spark Care'],
              de: ['Teure 19-Zoll-Reifen & Brembo', 'Kurze Sport-Serviceintervalle'],
              ru: ['Дорогие 19" шины и Brembo', 'Частое спортивное обслуживание']
            }
          },
          depreciationResale: {
            score: 8.7,
            badges: {
              en: ['Collector Type R Status', 'Strong Value Retention'],
              de: ['Sammler-Status Type R', 'Sehr wertstabil'],
              ru: ['Коллекционный статус', 'Отлично держит цену']
            }
          }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Championship White', code: 'NH-0', hex: '#f3f1e8', glow: 'rgba(243, 241, 232, 0.18)', isDefault: true },
    { name: 'Milano Red', code: 'R-81', hex: '#ca1d24', glow: 'rgba(202, 29, 36, 0.22)' },
    { name: 'Crystal Black Pearl', code: 'NH-731P', hex: '#16181d', glow: 'rgba(64, 74, 88, 0.18)' },
    { name: 'Polished Metal Metallic', code: 'NH-737M', hex: '#5b6168', glow: 'rgba(91, 97, 104, 0.18)' },
    { name: 'Brilliant Sporty Blue', code: 'B-593M', hex: '#1c5db6', glow: 'rgba(28, 93, 182, 0.2)' }
  ],
  engineDates: {
    '2.0-vtec-turbo': '07/2015–03/2017'
  },
  inDepth: {
    defaultEngineId: '2.0-vtec-turbo',
    defaultGroupKey: 'petrol-turbo',
    engineCosts: {
      '2.0-vtec-turbo': { group: 'petrol-turbo', avgFuelL100: 9.6, fuelPrice: 1.75, tax: 176, ins: 980, service: 560 }
    },
    groups: {
      'petrol-turbo': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Strong Chassis', note: 'Overbuilt K20C1 drivetrain holds up well; inspections mainly flag tyres, brakes, and splitter scuffs' },
            { source: 'ADAC Pannenstatistik', value: 'Low Breakdowns', note: 'Forged K20C1 internals rarely strand owners; check battery & heat-aged hoses' },
            { source: 'WhatCar? Survey', value: '95.1% Reliability', note: 'One of the most dependable 300+ HP hot hatches when serviced every 6–8k km' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide Basis', note: 'Überdimensionierter K20C1-Antrieb hält stark durch; Prüfstellen schauen vor allem auf Bremsen & Reifen' },
            { source: 'ADAC Pannenstatistik', value: 'Wenig Pannen', note: 'Geschmiedeter Motor ist extrem standfest; eher auf 12V-Batterie und Schläuche achten' },
            { source: 'WhatCar? Umfrage', value: '95,1 % Zuverlässigkeit', note: 'Einer der verlässlichsten 300-PS-Kompaktsportler bei kurzen 6–8-Tkm-Ölwechseln' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Крепкая база', note: 'Усиленный агрегат K20C1 отлично держит нагрузки; основные замечания — по шинам и тормозам' },
            { source: 'ADAC Pannenstatistik', value: 'Редкие поломки', note: 'Кованая база мотора редко подводит в пути; важно следить за охлаждением и АКБ' },
            { source: 'Рейтинг WhatCar?', value: '95,1% надёжности', note: 'Один из самых надёжных хот-хэтчей 300+ л.с. при замене масла каждые 6–8 тыс. км' }
          ]
        },
        extendedChecks: {
          en: [
            'Test fast cold-to-warm upshifts into 2nd and 4th gears — abused track cars can show early 2nd-gear synchro crunch.',
            'Measure remaining thickness on the 350 mm Brembo front rotors and check for heat-checked pads or uneven 19" tyre wear.',
            'Inspect the low carbon-effect front splitter and side skirts for curb scrapes, and check all 4 adaptive dampers for oil mist.',
            'Verify clean service history with 98 RON fuel use, strict 6,000–10,000 km oil changes, and stock ECU software.'
          ],
          de: [
            'Schnelles Hochschalten in den 2. und 4. Gang testen — hart bewegte Exemplare neigen zu Synchronring-Kratzen im 2. Gang.',
            'Reststärke der 350-mm-Brembo-Scheiben vorn sowie Zustand der 19"-Sportreifen genau prüfen.',
            'Tiefen Front-Splitter auf Aufsetzer checken und alle 4 adaptiven Stoßdämpfer auf Ölnebel kontrollieren.',
            'Saubere Historie mit Super Plus (98 ROZ), kurzen Ölwechseln alle 6–10 Tkm und originaler Motorsoftware verifizieren.'
          ],
          ru: [
            'Проверить быстрое включение 2-й и 4-й передач — после жёстких заездов бывает хруст синхронизатора 2-й передачи.',
            'Замерить остаток передних дисков Brembo 350 мм и проверить равномерность износа шин 19".',
            'Осмотреть низкую переднюю губу на сколы и все 4 адаптивных амортизатора на сухость без подтёков.',
            'Убедиться в заправке АИ-98, частых заменах масла (раз в 6–10 тыс. км) и отсутствии сомнительного чип-тюнинга.'
          ]
        },
        savingsNote: {
          en: 'Running costs reflect 310 HP hardware (~9.6 L/100 km of 98 RON, pricey 19" rubber & Brembos), yet K20C1 durability spares owners the engine-rebuild bills seen on rivals.',
          de: 'Unterhalt spiegelt 310-PS-Technik wider (~9,6 L Super Plus, teure 19"-Reifen & Brembo), doch der standfeste K20C1 erspart teure Motorschäden mancher Rivalen.',
          ru: 'Расходы соответствуют классу 310 л.с. (~9,6 л АИ-98, шины 19" и Brembo), но высокая живучесть K20C1 избавляет от капитальных ремонтов мотора.'
        },
        market: {
          supplyDemand: {
            en: 'Limited 2015–2017 European production run makes unmolested, stock-ECU Type R GT models scarce and strongly contested by collectors.',
            de: 'Die kurze Bauzeit 2015–2017 macht unverbastelte, serienmäßige Type R GT zu gesuchten Sammler- und Enthusiasten-Fahrzeugen.',
            ru: 'Ограниченный выпуск 2015–2017 гг. делает стоковые Type R GT без доработок редкими и крайне востребованными среди энтузиастов.'
          },
          sweetSpot: {
            en: '2016–2017 Type R GT with 50,000–95,000 km, original paint, stock intake/ECU, and full Honda service stamps (€23,500–€28,000).',
            de: '2016–2017 Type R GT mit 50–95 Tkm, Erstlack, serienmäßigem Motor und lückenlosem Honda-Scheckheft (23.500–28.000 €).',
            ru: '2016–2017 гг. Type R GT с пробегом 50–95 тыс. км, в родной краске, без тюнинга и с полной историей (€23 500–28 000).'
          },
          outlook3to5yr: {
            en: 'Slow, predictable depreciation (~€22,000–€24,500 in 3–5 yrs) thanks to limited 2015–2017 EU supply and strong enthusiast demand.',
            de: 'Langsamer, kalkulierbarer Wertverlust (ca. 22.000–24.500 € in 3–5 Jahren) dank geringer Stückzahl von 2015–2017 und stabiler Nachfrage.',
            ru: 'Медленное, предсказуемое снижение цены (~€22 000–24 500 через 3–5 лет) за счёт малого тиража 2015–2017 гг. и устойчивого спроса.'
          }
        },
        watchoutExtra: {
          en: [
            'Aggressive 2nd-gear shifts when gearbox oil is cold accelerate 2nd-gear synchro wear; frequent MTF-3 fluid changes help.',
            '19" 235/35 R19 tyres, Brembo two-piece rotors, and adaptive dampers carry sports-car replacement costs.'
          ],
          de: [
            'Hastiges Schalten in den 2. Gang bei kaltem Getriebeöl belastet den Synchronring spürbar — häufige MTF-3-Wechsel beugen vor.',
            'Reifen in 235/35 R19, 350-mm-Brembo-Scheiben und adaptive Dämpfer liegen preislich klar auf Sportwagen-Niveau.'
          ],
          ru: [
            'Резкие переключения на 2-ю передачу «на холодную» ускоряют износ синхронизатора — спасает регулярная замена MTF-3.',
            'Шины 235/35 R19, диски Brembo 350 мм и адаптивные стойки обходятся заметно дороже обычных версий Civic.'
          ]
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels (Type R FK2)', de: 'EU / DE Ausstattungslinien (Type R FK2)', ru: 'Европейские комплектации (Type R FK2)' },
      sectionHint: { en: 'Only two factory specs were offered in Europe during the limited 2015–2017 FK2 run', de: 'Während der kurzen Bauzeit 2015–2017 gab es in Europa nur zwei Ausstattungslinien', ru: 'За короткий выпуск 2015–2017 гг. в Европе предлагались только две версии' },
      faceliftTitle: { en: '2015–2017 Halo Run & Cockpit Highlights', de: '2015–2017 Sonderserie & Technik-Highlights', ru: 'Особенности серии 2015–2017 и Black Edition' },
      faceliftKicker: { en: '2015–2017 Run', de: 'Serie 2015–2017', ru: 'Серия 2015–2017' },
      trims: [
        {
          id: 'type-r',
          tierClass: 'tier-silver',
          tier: { en: 'Purist Base', de: 'Purist-Basis', ru: 'База пуриста' },
          name: { en: 'Type R', de: 'Type R', ru: 'Type R' },
          delta: { en: '-€1,500 – €2,200', de: '-1.500 – 2.200 €', ru: '-€1 500 – €2 200' },
          isSweetSpot: false,
          summary: {
            en: 'Full mechanical weapon with identical 310 HP K20C1, helical LSD, Brembo brakes, and +R mode — skips GT comfort and ADAS kit.',
            de: 'Identische 310-PS-Technik mit Sperrdiff., Brembo und +R-Modus, aber ohne GT-Komfort- und Assistenzpaket.',
            ru: 'Та же техника (310 л.с., самоблок, Brembo и режим +R), но без комфортных опций и ассистентов GT.'
          },
          highlights: {
            en: ['Identical 310 HP K20C1 + Helical LSD', '+R adaptive dampers & Brembo 350 mm', 'Manual A/C & lighter daily spec'],
            de: ['Identischer 310-PS-Motor + Sperrdiff.', '+R-Adaptivfahrwerk & 350-mm-Brembo', 'Manuelle Klima & leichtere Basis'],
            ru: ['Те же 310 л.с. + самоблок и Brembo', 'Адаптивная подвеска +R в базе', 'Обычный кондиционер, меньший вес']
          }
        },
        {
          id: 'type-r-gt',
          tierClass: 'tier-gold',
          tier: { en: 'Recommended', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Type R GT', de: 'Type R GT', ru: 'Type R GT' },
          delta: { en: 'Baseline (Most Common)', de: 'Markt-Standard', ru: 'Стандарт рынка' },
          isSweetSpot: true,
          summary: {
            en: 'Accounts for ~85% of EU cars — adds dual-zone climate, Garmin sat-nav, parking sensors, red trim accents, and safety assists.',
            de: 'Macht ca. 85 % der EU-Fahrzeuge aus — bringt 2-Zonen-Klima, Navi, Parksensoren, rote Akzente und Sicherheitsassistenten.',
            ru: 'Около 85% машин в Европе — добавляет 2-зонный климат, навигацию, парктроники, красный декор и пакет безопасности.'
          },
          highlights: {
            en: ['Front/rear sensors + rear camera', 'Garmin Navi + 320W 8-speaker audio', 'Dual-zone climate & ADAS safety suite'],
            de: ['Parksensoren vorn/hinten + Kamera', 'Garmin-Navi + 320W-Soundsystem', '2-Zonen-Klima & Assistenzpaket'],
            ru: ['Парктроники спереди/сзади + камера', 'Навигация Garmin + аудио 320 Вт', '2-зонный климат и ассистенты ADAS']
          }
        }
      ],
      matrix: [
        { feature: { en: '4-Point Adaptive Dampers & +R Mode', de: 'Adaptives 4-Punkt-Sportfahrwerk (+R)', ru: 'Адаптивная подвеска и режим +R' }, vals: ['std', 'std'] },
        { feature: { en: 'Red Suede Bucket Seats & Alloy Knob', de: 'Rote Alcantara-Schalen & Alu-Knauf', ru: 'Красные ковши и алюминиевый набалдашник' }, vals: ['std', 'std'] },
        { feature: { en: 'Dual-Zone Auto Climate Control', de: '2-Zonen-Klimaautomatik', ru: '2-зонный климат-контроль' }, vals: ['no', 'std'] },
        { feature: { en: 'Front & Rear Parking Sensors', de: 'Parksensoren vorn & hinten', ru: 'Парктроники спереди и сзади' }, vals: ['no', 'std'] },
        { feature: { en: 'Honda Connect Garmin Navi & 320W Audio', de: 'Honda Connect Garmin-Navi & 320W-Audio', ru: 'Навигация Garmin и аудиосистема 320 Вт' }, vals: ['no', 'std'] },
        { feature: { en: 'Blind-Spot & Cross-Traffic Alerts', de: 'Totwinkel- & Ausparkassistent', ru: 'Мониторинг слепых зон и выезда с парковки' }, vals: ['no', 'std'] },
        { feature: { en: 'Auto LED Headlights & Rain Wipers', de: 'LED-Lichtautomatik & Regensensor', ru: 'Автосвет LED и датчик дождя' }, vals: ['no', 'std'] },
        { feature: { en: 'Red Exterior Splitter Accents & Fold Mirrors', de: 'Rote Splitter-Akzente & klappb. Spiegel', ru: 'Красные акценты обвеса и складные зеркала' }, vals: ['no', 'std'] }
      ],
      interiorNotes: {
        en: [
          'Pressing the +R button turns dash illumination crimson, sharpens throttle/steering, firms dampers by ~30%, and opens turbo boost & G-meter telemetry.',
          'Deep red suede-effect Type R bucket seats and the machined aluminium ball shift knob deliver genuine race-car hold.',
          'Despite wild track aero, the FK2 keeps a 498 L boot and four adult seats (2+2 rear bench replaces Magic Seats).'
        ],
        de: [
          'Die +R-Taste färbt das Cockpit rot, schärft Gas und Lenkung, strafft die Dämpfer um ~30 % und zeigt Ladedruck sowie G-Kräfte.',
          'Tiefe rote Alcantara-Schalensitze und der gefräste Alu-Schaltknauf bieten echten Motorsport-Halt.',
          'Trotz extremem Sportfahrwerk-Auftritt bleiben 498 L Kofferraum und vier vollwertige Sitze (ohne Magic Seats) voll alltagstauglich.'
        ],
        ru: [
          'Кнопка +R переводит подсветку в красный цвет, обостряет отклик, зажимает амортизаторы на ~30% и выводит телеметрию наддува и перегрузок.',
          'Глубокие красные спортивные ковши из замши и цельнометаллический набалдашник КПП дают эталонную фиксацию и чувство рычага.',
          'При всей агрессии FK2 сохраняет 498 л багажника и 4 места (задний диван упрощён без Magic Seats).'
        ]
      },
      cabinByPowertrain: {
        petrol: {
          en: 'Exclusive to the 2.0L K20C1 Turbo: upper LED shift-light strip across the digital brow, dedicated +R telemetry screens (boost pressure, oil temp, oil pressure, lap timer), and one of the sharpest 6-speed mechanical gearshifts in front-drive history.',
          de: 'Exklusiv für den 2.0L K20C1 Turbo: LED-Schaltblitzleiste im oberen Display, +R-Telemetrie (Ladedruck, Öltemperatur, Öldruck, Rundenzeit) und eine der präzisesten 6-Gang-Schaltungen ihrer Klasse.',
          ru: 'Эксклюзив для 2.0L K20C1 Turbo: светодиодный блинкер переключения передач, экраны телеметрии +R (наддув, температура и давление масла, секундомер круга) и эталонная по чёткости 6-ст. механика.'
        }
      },
      faceliftUpgrades: {
        en: [
          'Limited 2015–2017 European production (~2,500–3,000 EU units) with individually numbered aluminium console plaque (R-00001+).',
          'Dual-Axis Strut front suspension mechanically separates steering knuckles from damper forces to tame 400 Nm torque steer.',
          'Four-point adaptive dampers adjust each wheel independently in milliseconds between road comfort and +R track firmness.',
          '2017 Black Edition farewell run (final 100 UK / limited EU cars) added gloss-black rear wing endplates and red interior trim accents.'
        ],
        de: [
          'Limitierte EU-Kleinserie 2015–2017 mit fortlaufend nummerierter Alu-Plakette auf der Mittelkonsole (R-00001+).',
          'Dual-Axis-Vorderachse entkoppelt Lenk- und Federungskräfte und hält die 400 Nm Antriebseinflüsse sauber im Zaum.',
          'Adaptives 4-Punkt-Fahrwerk regelt jedes Rad in Millisekunden zwischen Straßenmodus und hartem +R-Sportfahrwerk-Setup.',
          'Zum Abschied 2017 erschien die rare Black Edition mit roten Flügel-Endplatten und speziellen roten Innenraum-Akzenten.'
        ],
        ru: [
          'Короткий европейский выпуск 2015–2017 гг. с индивидуальным номером модели на алюминиевой табличке (R-00001+).',
          'Передняя подвеска Dual-Axis Strut отделила поворотные кулаки от стоек, минимизировав силовое подруливание при 400 Н·м.',
          'Адаптивные амортизаторы с 4 датчиками за миллисекунды меняют жёсткость между обычным режимом и трековым +R.',
          'Финальная спецсерия 2017 Black Edition получила чёрные акценты обвеса с красными торцевыми пластинами антикрыла.'
        ]
      }
    }
  }
});