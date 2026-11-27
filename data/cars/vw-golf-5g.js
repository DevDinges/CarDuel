// AutoDuel Vehicle Data — vw-golf-5g
registerAutoDuelVehicle({
  roster: {
    id: 'vw-golf-5g',
    number: '16',
    carType: 'hatchback',
    gridOrder: 16,
    gridLabel: 'VW Golf VII',
    yearMake: '2012-2020 VOLKSWAGEN',
    shortTitle: 'GOLF VII (5G)',
    fullName: '2012-2020 Volkswagen Golf VII (5G)',
    rarityClass: 'rarity-legendary',
    rarityLabel: { en: 'BENCHMARK', de: 'REFERENZ', ru: 'ЭТАЛОН' },
    drivetrain: 'FWD',
    image: 'assets/vw-golf-5g.webp',
    defaultEngineId: '1.4-tsi-125',
    sharedDossierBreakdowns: {
      transmissionDriveline: {
        gearbox: {
          specs: [
            { k: 'architecture', v: { en: 'VW MQ200 / MQ250 / MQ350 Synchronized Manual', de: 'VW MQ200 / MQ250 / MQ350 Schaltgetriebe', ru: 'МКПП VW MQ200 / MQ250 / MQ350' } },
            { k: 'gearsStages', v: { en: '5 or 6 Forward + Reverse', de: '5 oder 6 Vorwärts + Rückwärts', ru: '5 или 6 вперёд + задняя' } },
            { k: 'fluidService', v: { en: 'G 052 512 / 75W Gear Oil (~100,000–120,000 km)', de: 'G 052 512 / 75W Getriebeöl (~100.000–120.000 km)', ru: 'Масло G 052 512 / 75W (~100–120 тыс. км)' } }
          ],
          note: { en: 'Precise Volkswagen MQB manual gearbox with light shift action and low mechanical fault rate.', de: 'Präzises VW-MQB-Schaltgetriebe mit kurzen Schaltwegen und geringer Defektanfälligkeit.', ru: 'Чёткая МКПП семейства VW MQB с лёгким переключением и высоким ресурсом.' }
        },
        clutchDmf: '@clutchDmf',
        driveline: '@driveFwd'
      },
      buildQualityRust: { rustProtection: '@rustGalvanized12y', suspensionWear: '@suspMultiLink' },
      electronicsReliability: { starterAlternator: '@starterStandard12v', electronicsRisk: '@elecSimpleEps' },
      rideNoiseComfort: {
        rideTuning: {
          specs: [
            { k: 'damperSetup', v: { en: 'MQB Comfort-Balanced Springs (Torsion <122 HP / Multi-Link ≥122 HP)', de: 'MQB-Komfortabstimmung (Verbundlenker <122 PS / Mehrlenker ≥122 PS)', ru: 'Комфортная подвеска MQB (балка <122 л.с. / многорычажка ≥122 л.с.)' } },
            { k: 'seatSupport', v: { en: 'ErgoActive / Comfortline Lumbar Support · Broad Adjustment', de: 'ErgoActive- / Comfortline-Sitze · Große Verstellbereiche', ru: 'Кресла Comfortline / ErgoActive · Широкие регулировки' } }
          ],
          note: { en: 'Benchmark compact-class ride composure; higher-output trims add an independent multi-link rear axle.', de: 'Klassenmaßstab beim Federungskomfort; stärkere Motorisierungen bieten die feinfühlige Mehrlenker-Hinterachse.', ru: 'Эталонный комфорт в гольф-классе; версии от 122 л.с. оснащаются многорычажной задней подвеской.' }
        },
        highwayNoise: {
          specs: [
            { k: 'cabinNoise130', v: { en: '~67.5 dB(A) at 130 km/h (Class Leader)', de: '~67,5 dB(A) bei 130 km/h (Klassenbester)', ru: '~67,5 дБ(А) при 130 км/ч (тише класса)' } },
            { k: 'acousticGlass', v: { en: 'Acoustic Windscreen · Triple Door Seals', de: 'Akustik-Frontscheibe · Dreifache Türdichtungen', ru: 'Акустическое лобовое · Тройные уплотнители' } }
          ],
          note: { en: 'Noticeably quieter wind and road-noise isolation at motorway speeds than most compact rivals.', de: 'Deutlich leisere Wind- und Abrollgeräusche auf der Autobahn als bei den meisten Wettbewerbern.', ru: 'Заметно тише большинства одноклассников по аэродинамике и шуму шин на трассе.' }
        }
      },
      interiorQualityFeatures: {
        cabinMaterials: {
          specs: [
            { k: 'dashTrim', v: { en: 'Soft-Touch Upper Dash · Felt-Lined Door Bins · Clean Trim', de: 'Soft-Touch-Cockpit · Filzausgekleidete Türfächer', ru: 'Мягкий верх панели · Карманы дверей с ворсом' } },
            { k: 'buildFit', v: { en: 'Tight MQB Panel Gaps · Low Long-Term Rattle Rate', de: 'Saubere Spaltmaße · Sehr geringe Klapperneigung', ru: 'Плотная сборка MQB · Минимум сверчков' } }
          ],
          note: { en: 'Classic intuitive VW ergonomics with physical climate dials and durable upholstery.', de: 'Klassisch-intuitive VW-Ergonomie mit echten Klima-Drehreglern und soliden Bezügen.', ru: 'Образцовая эргономика VW с физическими крутилками климата и износостойкой отделкой.' }
        },
        controls: '@controlsPhys'
      },
      visibilityManeuverability: {
        turningCircle: {
          specs: [
            { k: 'turningDiam', v: '10.9 m' },
            { k: 'bodyDimensions', v: '4,258 × 1,790 mm' }
          ],
          note: { en: 'Compact 4.26 m length and light progressive steering make tight city parking effortless.', de: 'Kompakte 4,26 m Länge und leichtgängige Lenkung machen Innenstadt-Parken mühelos.', ru: 'Компактная длина 4,26 м и лёгкий руль упрощают парковку в тесных дворах.' }
        },
        visibility: {
          specs: [
            { k: 'sightlines', v: { en: 'Clean Glasshouse · Thin A-Pillars · Classic C-Pillar', de: 'Gute Rundumsicht · Schlanke A-Säulen · Breite C-Säule', ru: 'Хороший обзор · Тонкие передние стойки · Широкая стойка C' } },
            { k: 'parkingAids', v: { en: 'Front & Rear PDC Common (Comfortline+)', de: 'PDC vorn/hinten häufig Serie (ab Comfortline)', ru: 'Парктроники спереди и сзади (от Comfortline)' } }
          ],
          note: { en: 'Low beltline and large side mirrors give confident all-round sightlines.', de: 'Niedrige Fensterlinie und große Spiegel sorgen für sichere Übersicht.', ru: 'Низкая линия остекления и крупные зеркала дают отличный обзор.' }
        }
      },
      safetyProtection: {
        euroNcap: {
          specs: [
            { k: 'ncapOverall', v: '★★★★★ (2012)' },
            { k: 'ncapBreakdown', v: { en: '94% Adult · 89% Child · 65% Pedestrian', de: '94 % Erwachsene · 89 % Kinder · 65 % Fußgänger', ru: '94% Взрослые · 89% Дети · 65% Пешеходы' } },
            { k: 'airbagsCount', v: { en: '7 Airbags (incl. Driver Knee Airbag)', de: '7 Airbags (inkl. Fahrer-Knieairbag)', ru: '7 подушек (вкл. коленную водителя)' } }
          ],
          note: { en: 'Strong 5-star MQB crash structure with standard Multi-Collision Brake and knee airbag.', de: 'Starke 5-Sterne-MQB-Zelle mit Multikollisionsbremse und Knieairbag serienmäßig.', ru: 'Крепкий 5-звёздочный кузов MQB с системой предотвращения вторичных столкновений.' }
        },
        safetyTech: {
          specs: [
            { k: 'activeAssists', v: { en: '✓ ESP · ✓ Multi-Collision Brake · ✓ Front Assist AEB (2017+)', de: '✓ ESP · ✓ Multikollisionsbremse · ✓ Front Assist (ab 2017)', ru: '✓ ESP · ✓ Мультиколлиз. тормоз · ✓ Front Assist (с 2017)' } }
          ],
          note: { en: 'Mk7.5 facelift models (2017+) commonly include Front Assist AEB and optional ACC.', de: 'Facelift-Modelle ab 2017 bieten häufig Front Assist Notbremsassistent und ACC.', ru: 'Рестайлинг Mk7.5 (с 2017) часто оснащён автоторможением Front Assist и ACC.' }
        }
      },
      passengerSpaceErgonomics: {
        rearRoom: {
          specs: [
            { k: 'wheelbase', v: '2,637 mm' },
            { k: 'rearLegHead', v: { en: 'Comfortable for Adults up to ~1.86 m', de: 'Bequem für Erwachsene bis ca. 1,86 m', ru: 'Комфортно для взрослых до ~1,86 м' } }
          ],
          note: { en: 'Generous rear knee room and upright seat posture for a compact hatchback.', de: 'Großzügiger Knieraum und angenehme Sitzhöhe im Fond für die Kompaktklasse.', ru: 'Просторный задний ряд с удобной посадкой для компактного хэтчбека.' }
        },
        isofixEntry: {
          specs: [
            { k: 'isofixAccess', v: { en: '✓ 2× Outer ISOFIX · Wide Rear Door Opening', de: '✓ 2× ISOFIX außen · Große Türausschnitte', ru: '✓ 2× ISOFIX · Широкий дверной проём' } }
          ],
          note: { en: 'Exposed ISOFIX guides make child-seat installation quick and hassle-free.', de: 'Gut zugängliche ISOFIX-Führungen erleichtern das Einbauen von Kindersitzen.', ru: 'Открытые направляющие ISOFIX облегчают установку детских кресел.' }
        }
      },
      interiorBootSpace: {
        bootVolume: {
          specs: [
            { k: 'bootUpDown', v: '380 L / 1,270 L' },
            { k: 'loadSill', v: { en: '~665 mm · Dual-Height Variable Floor', de: '~665 mm · Variabler Ladeboden', ru: '~665 мм · Двухуровневый пол' } }
          ],
          note: { en: 'Square, usable 380 L luggage bay with ski-hatch pass-through on Comfortline+.', de: 'Gut nutzbarer, rechteckiger 380-L-Kofferraum mit Durchladefunktion ab Comfortline.', ru: 'Правильный 380-литровый багажник с лючком для длинномеров.' }
        },
        seatUtility: {
          specs: [
            { k: 'foldingMech', v: { en: '60/40 Split-Fold · Flat Floor in Upper Setting', de: '60/40 klappbar · Ebener Ladeboden oben', ru: 'Спинка 60/40 · Ровный пол в верхнем положении' } }
          ],
          note: { en: 'Variable boot floor eliminates the step when rear seats are folded.', de: 'Variabler Boden schafft bei umgeklappter Rückbank eine ebene Fläche.', ru: 'Регулируемый пол убирает ступеньку при сложенных задних сиденьях.' }
        }
      },
      payloadTowing: {
        payloadRoof: {
          specs: [
            { k: 'maxPayload', v: '~510 kg' },
            { k: 'roofLoad', v: '75 kg' }
          ],
          note: { en: 'Generous payload and solid braked towing ratings across the MQB lineup.', de: 'Hohe Zuladung und praxistaugliche Anhängelasten über alle Motorisierungen.', ru: 'Хороший запас грузоподъёмности и достойная допустимая масса прицепа.' }
        },
        towingBraked: '@towingDynamic'
      },
      accelerationOvertaking: { sprint0100: '@sprintDynamic', topSpeed: '@vmaxDynamic' },
      midRangeTorquePassing: { peakTorque: '@torqueDynamic', passingPunch: '@passingDynamic' },
      handlingAgility: {
        chassisFeel: {
          specs: [
            { k: 'kerbWeight', v: '1,210–1,395 kg' },
            { k: 'handlingChar', v: { en: 'Neutral, Composed MQB Chassis · XDS+', de: 'Neutrales, sicheres MQB-Fahrwerk · XDS+', ru: 'Собранное и нейтральное шасси MQB · XDS+' } },
            { k: 'tyreSizes', v: '195/65 R15 · 205/55 R16 · 225/45 R17' }
          ],
          note: { en: 'Composed, predictable front-end grip with electronic XDS+ brake-vectoring.', de: 'Ausgewogene Kurvenlage mit sicherem Einlenken und elektronischer Quersperre XDS+.', ru: 'Точная и предсказуемая управляемость с электронной блокировкой XDS+.' }
        },
        tractionDiff: '@tractionFwdOpen'
      },
      brakingPerformance: { braking1000: '@brakingDistDynamic', brakeSetup: '@brakeSetupDiscs4' },
      efficiencyFuel: { realWorldFuel: '@fuelDynamic', tankRange: '@tankDynamic' },
      taxInsuranceNorm: { euroNorm: '@euroDynamic', taxInsurance: '@taxInsDynamic' },
      maintenanceRepairCosts: { timingDrive: '@timingDynamic', serviceWear: '@serviceDynamic' },
      depreciationResale: { valueRetention: '@retentionDynamic', resaleDemand: '@demandDynamic' }
    },
    sharedSpecs: {
      rustProtection: '@rustVeryGood',
      suspensionWear: '@suspMultiLink',
      starterAlternator: '@starter12v',
      electronicsRisk: '@elecLowMod',
      rideTuning: { en: 'MQB Comfort-Balanced', de: 'MQB-Komfortabstimmung', ru: 'Комфортная настройка MQB' },
      highwayNoise: { en: '~67.5 dB · Quiet Cabin', de: '~67,5 dB · Sehr leise', ru: '~67,5 дБ · Тихий салон' },
      cabinMaterials: { en: 'Soft-Touch Dash · Felt Bins', de: 'Soft-Touch · Filz-Fächer', ru: 'Мягкий пластик · Ворс в карманах' },
      controls: '@physButtons',
      turningCircle: '10.9 m',
      visibility: { en: 'Clear Glasshouse · Thin A-Pillars', de: 'Gute Sicht · Schlanke A-Säulen', ru: 'Хороший обзор · Тонкие стойки' },
      euroNcap: '★★★★★ (2012)',
      safetyTech: { en: '✓ ESP · ✓ 7 Airbags · ✓ Multi-Collision Brake', de: '✓ ESP · ✓ 7 Airbags · ✓ Multikollisionsbremse', ru: '✓ ESP · ✓ 7 подушек · ✓ Тормоз при ДТП' },
      rearRoom: { en: 'Spacious Adult Legroom', de: 'Gute Beinfreiheit hinten', ru: 'Просторно сзади' },
      isofixEntry: { en: '✓ 2× ISOFIX · Wide Doors', de: '✓ 2× ISOFIX · Weiter Einstieg', ru: '✓ 2× ISOFIX · Широкие двери' },
      bootVolume: '380 L / 1,270 L',
      seatUtility: { en: '60/40 Split · Variable Floor', de: '60/40 klappbar · Variabler Boden', ru: 'Спинка 60/40 · Двойной пол' },
      payloadRoof: '510 kg · 75 kg Roof',
      driveline: 'FWD · XDS+ Brake-Vectoring',
      chassisFeel: { en: 'Composed MQB Balance', de: 'Ausgewogene MQB-Balance', ru: 'Сбалансированное шасси MQB' },
      tractionDiff: 'FWD · XDS+ Electronic',
      braking1000: '~35.0 m',
      brakeSetup: '@discs4',
      valueRetention: '@retHigh',
      resaleDemand: '@demFast'
    },
    sharedBuyerFit: {
      cards: {
        golfTsiCommute: {
          en: 'You want a refined everyday compact: Quiet cabin, light controls, and low urban consumption.',
          de: 'Du suchst ein kultiviertes Alltagsauto: Leiser Innenraum, leichte Bedienung und niedriger Verbrauch.',
          ru: 'Тебе нужен тихий и комфортный городской авто: Мягкое управление и скромный расход.'
        },
        golfTsiMidSweetSpot: {
          en: 'You want the sweet-spot all-rounder: Effortless torque, multi-link rear axle, and strong resale liquidity.',
          de: 'Du willst den Preis-Leistungs-Allrounder: Souveräner Durchzug, Mehrlenker-Achse und top Wiederverkauf.',
          ru: 'Ты ищешь золотую середину: Уверенная тяга, многорычажка сзади и высокая ликвидность.'
        },
        golfTsiSmallLoad: {
          en: 'You regularly haul 4 adults uphill or cruise at 150+ km/h: The small-displacement TSI works harder under heavy load.',
          de: 'Du fährst oft vollbeladen oder über 150 km/h: Kleine Hubräume verlieren bei Last spürbar Reserven.',
          ru: 'Ты часто ездишь с полной загрузкой или быстрее 150 км/ч: Малому объёму не хватает запаса на обгонах.'
        },
        golfDryDsgRisk: {
          en: 'You buy high-mileage stop-and-go DSG blindly: Check DQ200 7-speed dry-clutch engagement smoothly before buying.',
          de: 'Du kaufst einen Stadt-DSG mit hoher Laufleistung unbesehen: Trockenkupplungs-DQ200 unbedingt warm auf Ruckeln prüfen.',
          ru: 'Ты берёшь возрастной DSG без проверки: Обязательно проверь плавность трогания сухого DQ200 в пробках.'
        },
        golfCngStations: {
          en: 'You have reliable CNG stations nearby: Ultra-low fuel cost per km with clean combustion and bivalent petrol backup.',
          de: 'Du hast Erdgas-Tankstellen in der Nähe: Extrem niedrige Kilometerkosten dank CNG plus Benzin-Reserve.',
          ru: 'У тебя рядом есть заправки метаном (CNG): Минимальные затраты на топливо и резервный бензобак.'
        },
        golfCngBoot: {
          en: 'You need maximum boot depth: CNG tanks under the floor trim boot volume down to ~291 L.',
          de: 'Du brauchst den vollen Kofferraum: Unterflur-Gastanks reduzieren das Volumen auf ca. 291 L.',
          ru: 'Тебе важен максимальный багажник: Баллоны CNG уменьшают объём примерно до 291 л.'
        },
        golfAwdGrip: {
          en: 'You drive snowy mountain passes: 180 HP 1.8 TSI with Haldex 4Motion and 6-speed wet DSG delivers all-weather traction.',
          de: 'Du fährst oft bei Schnee und Steigung: 180 PS mit 4Motion-Allrad und nassem 6-Gang-DSG bieten top Traktion.',
          ru: 'Ты ездишь по снегу и серпантинам: 180 л.с. с полным приводом 4Motion и мокрым 6-DSG дают отличный зацеп.'
        },
        golfAwdCosts: {
          en: 'You prioritize rock-bottom running costs: 4Motion AWD adds kerb weight, Haldex fluid service, and higher fuel use.',
          de: 'Du willst minimalen Verbrauch und Unterhalt: Allrad kostet Mehrgewicht, Haldex-Service und rund 1,5 L Mehrverbrauch.',
          ru: 'Ты ищешь минимальные расходы: Полный привод добавляет вес, обслуживание Haldex и расход топлива.'
        },
        golfMqbCabinQuality: {
          en: 'You value cabin build & quietness: Soft-touch materials, felt-lined bins, and ~67.5 dB motorway hush lead the class.',
          de: 'Du schätzt Verarbeitung & Ruhe: Soft-Touch-Cockpit, gefilzte Ablagen und ~67,5 dB Autobahnlaufruhe setzen Maßstäbe.',
          ru: 'Ты ценишь качество салона и тишину: Мягкий пластик, ворс в карманах и ~67,5 дБ на трассе — лучшие в классе.'
        },
        golfMqbSafetyErgo: {
          en: 'You want intuitive physical ergonomics: Real climate dials, 7 airbags, and 5-star Euro NCAP protection without touch-slider clutter.',
          de: 'Du willst intuitive Bedienung: Echte Klima-Drehregler, 7 Airbags und 5-Sterne-Euro-NCAP ohne Touch-Slider-Chaos.',
          ru: 'Ты любишь понятную эргономику: Настоящие крутилки климата, 7 подушек и 5 звёзд Euro NCAP без сенсорных ползунков.'
        },
        golfWaterPumpWatch: {
          en: 'You skip cooling-system checks: Plastic thermostat/water-pump housings on EA211/EA888 units often seep between 90–140k km.',
          de: 'Du vernachlässigst die Kühlung: Kunststoff-Wasserpumpenmodule neigen bei 90–140 Tkm zu schleichendem Kühlmittelverlust.',
          ru: 'Ты не проверяешь систему охлаждения: Пластиковый модуль помпы и термостата часто подтекает к 90–140 тыс. км.'
        },
        golfInfotainmentTouch: {
          en: 'You buy without testing the screen: Early MIB1/MIB2 touchscreens can develop dead touch zones or phantom inputs.',
          de: 'Du testest das Display nicht durch: Frühe MIB1/MIB2-Touchscreens zeigen teils tote Zonen oder Ghost-Touches.',
          ru: 'Ты не проверяешь мультимедиа: У экранов MIB1/MIB2 бывают мёртвые зоны или ложные срабатывания сенсора.'
        }
      }
    },
    buyerFitGroups: {
      'tsi-small': {
        summary: {
          en: 'Refined, economical EA211 belt-driven petrol Golf ideal for city commuting and relaxed country roads.',
          de: 'Kultivierter, sparsamer EA211-Zahnriemen-Benziner — ideal für Stadt, Pendler und entspannte Landstraße.',
          ru: 'Тихий и экономичный бензиновый Golf EA211 на ремне — отличный выбор для города и спокойных поездок.'
        },
        ideal: ['golfTsiCommute', 'golfMqbCabinQuality', 'golfMqbSafetyErgo', 'globalPetrolCityZones'],
        skip: ['golfTsiSmallLoad', 'golfDryDsgRisk', 'golfWaterPumpWatch']
      },
      'tsi-mid': {
        summary: {
          en: 'The definitive all-round Golf VII: belt-driven EA211 1.4 TSI with multi-link rear suspension and effortless mid-range.',
          de: 'Der ausgewogenste Golf VII: EA211 1.4 TSI mit Zahnriemen, Mehrlenker-Hinterachse und starkem Durchzug.',
          ru: 'Самый сбалансированный Golf VII: ременной 1.4 TSI EA211, многорычажка сзади и уверенная тяга.'
        },
        ideal: ['golfTsiMidSweetSpot', 'golfMqbCabinQuality', 'golfMqbSafetyErgo', 'globalPetrolCityZones'],
        skip: ['golfDryDsgRisk', 'golfWaterPumpWatch', 'golfInfotainmentTouch']
      },
      'tsi-evo': {
        summary: {
          en: 'Late-production Mk7.5 Miller-cycle 1.5 TSI EVO pairing brisk performance with ultra-low motorway fuel burn.',
          de: 'Moderner Mk7.5-Facelift-Benziner (1.5 TSI EVO) mit top Elastizität und sehr niedrigem Reiseverbrauch.',
          ru: 'Современный рестайлинговый 1.5 TSI EVO с циклом Миллера: отличная динамика и низкий расход на трассе.'
        },
        ideal: ['golfTsiMidSweetSpot', 'golfMqbCabinQuality', 'golfMqbSafetyErgo', 'globalPetrolCityZones'],
        skip: ['golfDryDsgRisk', 'golfWaterPumpWatch', 'golfInfotainmentTouch']
      },
      'tgi-cng': {
        summary: {
          en: 'Bivalent CNG + petrol commuter offering near-diesel fuel bills with clean urban emissions.',
          de: 'Bivalenter Erdgas-Golf (CNG + Benzin) mit extrem niedrigen Kraftstoffkosten und sauberer Verbrennung.',
          ru: 'Бивалентный метановый Golf (CNG + бензин) с минимальной ценой километра и чистым выхлопом.'
        },
        ideal: ['golfCngStations', 'golfMqbCabinQuality', 'golfMqbSafetyErgo', 'globalPetrolCityZones'],
        skip: ['golfCngBoot', 'golfDryDsgRisk', 'golfWaterPumpWatch']
      },
      'tsi-18-awd': {
        summary: {
          en: 'Rare Alltrack/4Motion-spec 1.8 TSI pairing strong 180 HP punch, wet 6-DSG, and all-wheel traction without GTI styling.',
          de: 'Seltener 1.8 TSI 4Motion mit 180 PS, nassem 6-Gang-DSG und Allrad-Traktion im dezenten Serienkleid.',
          ru: 'Редкий 1.8 TSI 4Motion на 180 л.с. с мокрым 6-DSG и полным приводом без спортивного обвеса.'
        },
        ideal: ['golfAwdGrip', 'golfMqbCabinQuality', 'golfMqbSafetyErgo', 'globalPetrolCityZones'],
        skip: ['golfAwdCosts', 'golfWaterPumpWatch', 'golfInfotainmentTouch']
      },
      'tdi-16': {
        summary: {
          en: 'Frugal 1.6 TDI EA288 commuter built for high annual mileage and effortless 900+ km tank range.',
          de: 'Sparsamer 1.6 TDI (EA288) Dauerläufer für Vielfahrer mit über 900 km Praxisreichweite.',
          ru: 'Экономичный 1.6 TDI EA288 для больших пробегов и запаса хода свыше 900 км на баке.'
        },
        ideal: ['globalDieselLongRange', 'golfMqbCabinQuality', 'golfMqbSafetyErgo', 'golfTsiCommute'],
        skip: ['globalDieselShortTripRisk', 'golfDryDsgRisk', 'golfWaterPumpWatch']
      },
      'tdi-20': {
        summary: {
          en: 'Long-distance autobahn benchmark: 340 Nm 2.0 TDI EA288 with multi-link rear axle and wet DSG option.',
          de: 'Autobahn-Referenz im Kompaktsegment: 340 Nm starker 2.0 TDI (EA288) mit Mehrlenker-Achse und nassem DSG.',
          ru: 'Эталон трассового хэтчбека: тяговитый 2.0 TDI EA288 (340 Н·м) с многорычажкой и мокрым DSG.'
        },
        ideal: ['globalDieselLongRange', 'golfTsiMidSweetSpot', 'golfMqbCabinQuality', 'golfMqbSafetyErgo'],
        skip: ['globalDieselShortTripRisk', 'golfWaterPumpWatch', 'golfInfotainmentTouch']
      }
    },
    sharedDossiers: {
      buildQualityRust: {
        en: {
          headline: 'Galvanized MQB Body — Watch Rear Subframe & Sill Drainage',
          strengths: ['Full hot-dip galvanized shell with tight panel gaps and clean paint longevity.', 'Plastic underbody trays shield brake and fuel lines from winter road salt.'],
          watchouts: ['Rear subframe surface corrosion and front strut top-mount bearings on 8+ yr winter cars.', 'Check behind front wheel-arch liners for trapped wet leaves near the sill seam.'],
          beforeYouBuy: ['Inspect lower door edges, sill jacking points, and rear subframe with a flashlight.']
        },
        de: {
          headline: 'Verzinkte MQB-Karosserie — Hinterachsträger & Schweller prüfen',
          strengths: ['Vollverzinkte Karosserie mit sauberem Lackaufbau und geringen Spaltmaßen.', 'Großflächige Unterbodenverkleidung schützt Leitungen vor Streusalz.'],
          watchouts: ['Flugrost am Hinterachsträger sowie knackende Domlager bei über 8 Jahre alten Fahrzeugen.', 'Hinter den vorderen Radhausschalen sammelt sich gern feuchtes Laub am Schwellerende.'],
          beforeYouBuy: ['Untere Türkanten, Wagenheberaufnahmen und Hinterachsträger mit Taschenlampe ableuchten.']
        },
        ru: {
          headline: 'Оцинкованный кузов MQB — осмотрите задний подрамник и пороги',
          strengths: ['Полностью оцинкованный кузов с прочным ЛКП и точными зазорами.', 'Пластиковые щитки днища хорошо защищают магистрали от зимних реагентов.'],
          watchouts: ['Поверхностная коррозия заднего подрамника и износ опорных подшипников стоек.', 'За передними подкрылками может скапливаться влажная листва у кромки порогов.'],
          beforeYouBuy: ['Осмотрите нижние кромки дверей, поддомкратники и задний подрамник с фонариком.']
        }
      },
      electronicsReliability: {
        en: {
          headline: 'Solid MQB Electrics — Check Infotainment Touch & Water Pump',
          strengths: ['Mature MQB CAN-bus architecture with strong parts availability and diagnostics.'],
          watchouts: ['Early MIB1/MIB2 touchscreens can develop dead touch zones or phantom touches.', 'Electric parking brake rear caliper actuators and door-lock microswitches age after 10 yrs.'],
          beforeYouBuy: ['Test every touchscreen corner, electric parking brake, and all four window switches.']
        },
        de: {
          headline: 'Solide MQB-Elektrik — Touchscreen & Parkbremse testen',
          strengths: ['Ausgereifte MQB-Elektronik mit günstiger Teileversorgung in jeder Werkstatt.'],
          watchouts: ['Bei frühen MIB1/MIB2-Displays treten vereinzelt Ghost-Touches oder tote Touch-Zonen auf.', 'Stellmotoren der elektrischen Parkbremse und Türschloss-Mikroschalter altern nach 10 Jahren.'],
          beforeYouBuy: ['Alle Display-Ecken, die elektrische Parkbremse sowie alle vier Fensterheber durchtesten.']
        },
        ru: {
          headline: 'Надёжная электрика MQB — проверьте экран MIB и электроручник',
          strengths: ['Отлаженная платформа MQB с доступной диагностикой и недорогими запчастями.'],
          watchouts: ['На экранах MIB1/MIB2 встречаются сбои сенсора или фантомные нажатия.', 'Моторчики заднего электроручника и концевики замков дверей устают к 10 годам.'],
          beforeYouBuy: ['Проверьте отклик сенсора во всех углах экрана, электроручник и все стеклоподъёмники.']
        }
      }
    },
    dossierGroups: {
      'mqb-standard': ['buildQualityRust', 'electronicsReliability']
    },
    sharedGearboxes: {
      'mq200-5mt': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'MQ200-5F · 5-Speed Single-Clutch Manual', de: 'MQ200-5F · 5-Gang-Schaltgetriebe', ru: 'MQ200-5F · 5-ст. Механика' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@singleClutch' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW MQ200-5F 5-Speed Synchronized Manual', de: 'VW MQ200-5F 5-Gang-Schaltgetriebe', ru: 'VW MQ200-5F 5-ст. синхрон. МКПП' } },
                { k: 'gearsStages', v: { en: '5 Forward + Reverse (200 Nm Rated)', de: '5 Vorwärts + Rückwärts (bis 200 Nm)', ru: '5 вперёд + задняя (до 200 Н·м)' } },
                { k: 'fluidService', v: { en: 'G 052 512 Gear Oil (~100,000–120,000 km)', de: 'G 052 512 Getriebeöl (~100.000–120.000 km)', ru: 'Масло G 052 512 (~100–120 тыс. км)' } }
              ],
              note: { en: 'Light single-clutch 5-speed manual with low upkeep and cheap clutch replacement.', de: 'Leichtes 5-Gang-Schaltgetriebe ohne ZMS mit sehr günstigen Kupplungskosten.', ru: 'Лёгкая 5-ст. механика без ДММ с недорогим обслуживанием.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Light-Weight MQ200 5-Speed — Reliable Daily Shifter',
            strengths: ['Simple, light single-mass flywheel clutch with low replacement costs.'],
            watchouts: ['Syncromesh into 2nd can feel notchy when cold; higher motorway revs than 6-speed.'],
            beforeYouBuy: ['Check smooth 1st-to-2nd shift when cold and listen for input-shaft bearing hum.']
          },
          de: {
            headline: 'Leichtes MQ200 5-Gang — Unkompliziert & Günstig',
            strengths: ['Einfache Kupplung ohne Zweimassenschwungrad und niedrige Tauschkosten.'],
            watchouts: ['2. Gang bei kaltem Öl teils etwas hakelig; auf der Autobahn höheres Drehzahlniveau.'],
            beforeYouBuy: ['Kalten Schaltvorgang vom 1. in den 2. Gang und Ausrücklager-Geräusche prüfen.']
          },
          ru: {
            headline: 'Лёгкая 5-ст. МКПП MQ200 — простая и недорогая',
            strengths: ['Простое сцепление без двухмассового маховика и дешёвая замена.'],
            watchouts: ['На холодную 2-я передача может включаться туговато; выше обороты на трассе.'],
            beforeYouBuy: ['Проверьте плавность включения 2-й передачи на холодную и тишину выжимного.']
          }
        },
        repairGuideExtra: { routine: [], critical: [] }
      },
      'mq200-6mt': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ200-6F · 6-Speed Single-Clutch Manual', de: 'MQ200-6F · 6-Gang-Schaltgetriebe', ru: 'MQ200-6F · 6-ст. Механика' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@singleClutch' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW MQ200-6F 6-Speed Synchronized Manual', de: 'VW MQ200-6F 6-Gang-Schaltgetriebe', ru: 'VW MQ200-6F 6-ст. синхрон. МКПП' } },
                { k: 'gearsStages', v: { en: '6 Forward + Reverse (200 Nm Rated)', de: '6 Vorwärts + Rückwärts (bis 200 Nm)', ru: '6 вперёд + задняя (до 200 Н·м)' } },
                { k: 'fluidService', v: { en: 'G 052 512 Gear Oil (~100,000–120,000 km)', de: 'G 052 512 Getriebeöl (~100.000–120.000 km)', ru: 'Масло G 052 512 (~100–120 тыс. км)' } }
              ],
              note: { en: 'Crisp 6-speed manual with tall 6th gear for relaxed highway cruising.', de: 'Präzises 6-Gang-Getriebe mit langem 6. Gang für ruhige Autobahnfahrten.', ru: 'Чёткая 6-ст. МКПП с длинной 6-й передачей для трассы.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Crisp MQ200 6-Speed — Quiet Highway 6th Gear',
            strengths: ['Well-spaced 6th gear drops motorway revs and improves fuel economy over 5-MT.'],
            watchouts: ['Release bearing noise above 160,000 km on heavy city-traffic cars.'],
            beforeYouBuy: ['Test all 6 gears smoothly and verify clean clutch bite without judder.']
          },
          de: {
            headline: 'Präzises MQ200 6-Gang — Ruhiger Autobahn-Gang',
            strengths: ['Langer 6. Gang senkt Autobahndrehzahl und Verbrauch spürbar.'],
            watchouts: ['Ausrücklager kann bei viel Stadtbetrieb ab 160.000 km Geräusche entwickeln.'],
            beforeYouBuy: ['Alle 6 Gänge sauber durchschalten und Kupplung auf rupffreies Anfahren testen.']
          },
          ru: {
            headline: 'Чёткая 6-ст. МКПП MQ200 — тихая езда по трассе',
            strengths: ['Длинная 6-я передача снижает обороты и расход на трассе.'],
            watchouts: ['После 160 тыс. км в городе может зашуметь выжимной подшипник.'],
            beforeYouBuy: ['Проверьте включение всех 6 передач и плавность сцепления при трогании.']
          }
        },
        repairGuideExtra: { routine: [], critical: [] }
      },
      'mq250-5mt': {
        category: 'manual',
        label: { en: '5-Speed Manual', de: '5-Gang-Schaltgetriebe', ru: '5-ст. Механика' },
        shortLabel: { en: '5-MT', de: '5-Gang', ru: '5-МКПП' },
        subLabel: { en: 'MQ250-5F · 5-Speed Manual + DMF', de: 'MQ250-5F · 5-Gang-Schaltgetriebe + ZMS', ru: 'MQ250-5F · 5-ст. Механика + ДММ' },
        specOverrides: { gearbox: '@manual5', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW MQ250-5F 5-Speed Synchronized Manual', de: 'VW MQ250-5F 5-Gang-Schaltgetriebe', ru: 'VW MQ250-5F 5-ст. синхрон. МКПП' } },
                { k: 'gearsStages', v: { en: '5 Forward + Reverse (250 Nm Rated)', de: '5 Vorwärts + Rückwärts (bis 250 Nm)', ru: '5 вперёд + задняя (до 250 Н·м)' } },
                { k: 'fluidService', v: { en: 'G 052 512 Gear Oil (~100,000–120,000 km)', de: 'G 052 512 Getriebeöl (~100.000–120.000 km)', ru: 'Масло G 052 512 (~100–120 тыс. км)' } }
              ],
              note: { en: 'Durable 250 Nm manual gearbox paired with a dual-mass flywheel on TDI models.', de: 'Standfestes 250-Nm-Schaltgetriebe mit Zweimassenschwungrad bei TDI-Modellen.', ru: 'Надёжная 5-ст. МКПП до 250 Н·м с двухмассовым маховиком на дизелях.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Robust MQ250 5-Speed — Watch Dual-Mass Flywheel on Diesels',
            strengths: ['Strong 250 Nm rated gearset that rarely suffers internal bearing failures.'],
            watchouts: ['Dual-mass flywheel (DMF) rattle at idle above 170,000 km on TDI models.'],
            beforeYouBuy: ['Press and release clutch at idle to listen for DMF chatter.']
          },
          de: {
            headline: 'Stabiles MQ250 5-Gang — ZMS bei TDI-Laufleistung prüfen',
            strengths: ['Kräftiges 250-Nm-Getriebe ohne typische Lagerschäden.'],
            watchouts: ['Zweimassenschwungrad (ZMS) neigt bei hohen TDI-Laufleistungen ab 170 Tkm zu Klappern.'],
            beforeYouBuy: ['Im Leerlauf Kupplung treten und loslassen — auf metallisches ZMS-Klackern achten.']
          },
          ru: {
            headline: 'Крепкая 5-ст. МКПП MQ250 — следите за ДММ на дизеле',
            strengths: ['Выносливые валы и шестерни до 250 Н·м без типичных поломок.'],
            watchouts: ['Двухмассовый маховик на дизелях может застучать к 170–200 тыс. км.'],
            beforeYouBuy: ['На холостых выжмите и отпустите сцепление, прислушавшись к стуку маховика.']
          }
        },
        repairGuideExtra: { routine: [], critical: [] }
      },
      'mq250-6mt': {
        category: 'manual',
        label: { en: '6-Speed Manual', de: '6-Gang-Schaltgetriebe', ru: '6-ст. Механика' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ250-6F · 6-Speed Manual + DMF', de: 'MQ250-6F · 6-Gang-Schaltgetriebe + ZMS', ru: 'MQ250-6F · 6-ст. Механика + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW MQ250-6F 6-Speed Synchronized Manual', de: 'VW MQ250-6F 6-Gang-Schaltgetriebe', ru: 'VW MQ250-6F 6-ст. синхрон. МКПП' } },
                { k: 'gearsStages', v: { en: '6 Forward + Reverse (250 Nm Rated)', de: '6 Vorwärts + Rückwärts (bis 250 Nm)', ru: '6 вперёд + задняя (до 250 Н·м)' } },
                { k: 'fluidService', v: { en: 'G 052 512 Gear Oil (~100,000–120,000 km)', de: 'G 052 512 Getriebeöl (~100.000–120.000 km)', ru: 'Масло G 052 512 (~100–120 тыс. км)' } }
              ],
              note: { en: 'Sweet-spot 6-speed manual combining 250 Nm capacity with low motorway revs.', de: 'Ausgewogenes 6-Gang-Schaltgetriebe mit 250 Nm Reserve und ruhigem 6. Gang.', ru: 'Удачная 6-ст. МКПП с запасом 250 Н·м и тихой 6-й передачей.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Sweet-Spot MQ250 6-Speed — Durable & Efficient',
            strengths: ['Crisp shift gate, 250 Nm torque headroom, and relaxed motorway cruising.'],
            watchouts: ['DMF + clutch kit is a normal wear item around 160,000–210,000 km.'],
            beforeYouBuy: ['Check 4th/5th gear pull from low revs for any clutch slip or vibration.']
          },
          de: {
            headline: 'Bewährtes MQ250 6-Gang — Langlebig & Präzise',
            strengths: ['Saubere Schaltgassen, 250 Nm Reserve und niedrige Autobahndrehzahl.'],
            watchouts: ['Kupplung samt ZMS ist zwischen 160.000 und 210.000 km ein regulärer Verschleißpunkt.'],
            beforeYouBuy: ['Im 4./5. Gang aus niedriger Drehzahl voll beschleunigen und auf Rutschen achten.']
          },
          ru: {
            headline: 'Удачная 6-ст. МКПП MQ250 — долговечная и экономичная',
            strengths: ['Чёткое включение передач, запас до 250 Н·м и комфортная трассовая 6-я.'],
            watchouts: ['Комплект сцепления с ДММ служит обычно 160–210 тыс. км.'],
            beforeYouBuy: ['Проверьте разгон на 4–5-й передаче с низких оборотов на отсутствие пробуксовки.']
          }
        },
        repairGuideExtra: { routine: [], critical: [] }
      },
      'mq350-6mt': {
        category: 'manual',
        label: { en: '6-Speed Heavy-Duty Manual', de: '6-Gang-Schaltgetriebe (MQ350)', ru: '6-ст. Механика (MQ350)' },
        shortLabel: { en: '6-MT', de: '6-Gang', ru: '6-МКПП' },
        subLabel: { en: 'MQ350-6F · 6-Speed Heavy-Duty Manual + DMF', de: 'MQ350-6F · 6-Gang-Schaltgetriebe + ZMS', ru: 'MQ350-6F · Усиленная 6-ст. МКПП + ДММ' },
        specOverrides: { gearbox: '@manual6', clutchDmf: '@clutchDmf' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW MQ350-6F 6-Speed Heavy-Duty Manual', de: 'VW MQ350-6F 6-Gang-Schaltgetriebe', ru: 'VW MQ350-6F Усиленная 6-ст. МКПП' } },
                { k: 'gearsStages', v: { en: '6 Forward + Reverse (350+ Nm Rated)', de: '6 Vorwärts + Rückwärts (über 350 Nm)', ru: '6 вперёд + задняя (свыше 350 Н·м)' } },
                { k: 'fluidService', v: { en: 'G 052 171 Gear Oil (~100,000–120,000 km)', de: 'G 052 171 Getriebeöl (~100.000–120.000 km)', ru: 'Масло G 052 171 (~100–120 тыс. км)' } }
              ],
              note: { en: 'Overbuilt 350+ Nm manual gearbox engineered for high-torque 2.0 TDI touring.', de: 'Massives 350-Nm-Schaltgetriebe für hohes 2.0-TDI-Drehmoment und Anhängerbetrieb.', ru: 'Усиленная механика на 350+ Н·м, созданная под тягу 2.0 TDI.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Overbuilt MQ350 6-Speed — Handles 350+ Nm Effortlessly',
            strengths: ['High-capacity 350 Nm gearset built for 2.0 TDI torque and towing.'],
            watchouts: ['Dual-mass flywheel wear shows as idle vibration or pedal chatter past 180,000 km.'],
            beforeYouBuy: ['Check pedal smoothness and cold 1st/2nd gear engagement.']
          },
          de: {
            headline: 'Massives MQ350 6-Gang — Ideal für 2.0 TDI Drehmoment',
            strengths: ['Auf über 350 Nm ausgelegtes Getriebe mit hoher Standfestigkeit.'],
            watchouts: ['ZMS-Verschleiß kündigt sich jenseits von 180.000 km durch Leerlauf-Vibrationen an.'],
            beforeYouBuy: ['Kupplungspedal-Gefühl und kalte Schaltbarkeit in den ersten beiden Gängen prüfen.']
          },
          ru: {
            headline: 'Усиленная 6-ст. МКПП MQ350 — уверенно держит момент 2.0 TDI',
            strengths: ['Большой запас прочности свыше 350 Н·м для трассы и прицепа.'],
            watchouts: ['К 180+ тыс. км возможен износ двухмассового маховика (вибрация на холостых).'],
            beforeYouBuy: ['Оцените лёгкость выжима сцепления и включение 1–2-й передач на холодную.']
          }
        },
        repairGuideExtra: { routine: [], critical: [] }
      },
      'dq200-7-dry': {
        category: 'automatic',
        label: { en: '7-Speed Dry DSG', de: '7-Gang-DSG (Trocken)', ru: '7-ст. DSG (Сухой)' },
        shortLabel: { en: '7-DSG', de: '7-DSG', ru: '7-DSG' },
        subLabel: { en: 'DQ200 (0CW) · 7-Speed Dry Dual-Clutch', de: 'DQ200 (0CW) · 7-Gang-Trocken-DSG', ru: 'DQ200 (0CW) · 7-ст. Сухой DSG' },
        specOverrides: { gearbox: '@dsg7Dry', clutchDmf: '@dualClutchDry' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW DQ200 (0CW) 7-Speed Dry Dual-Clutch', de: 'VW DQ200 (0CW) 7-Gang-Trocken-DSG', ru: 'VW DQ200 (0CW) 7-ст. сухой робот DSG' } },
                { k: 'gearsStages', v: { en: '7 Forward + Reverse (250 Nm Rated)', de: '7 Vorwärts + Rückwärts (bis 250 Nm)', ru: '7 вперёд + задняя (до 250 Н·м)' } },
                { k: 'fluidService', v: { en: '1.9 L Gear Oil + 1.0 L Mechatronics Hydraulic Fluid', de: '1,9 L Schaltöl + 1,0 L Mechatronik-Hydrauliköl', ru: '1,9 л в КПП + 1,0 л в мехатронике' } }
              ],
              note: { en: 'Fast, efficient dry dual-clutch automatic; inspect 1st–2nd gear creep smoothness when warm.', de: 'Schnelles, sparsames Trocken-DSG; bei Probefahrt warmes Anfahren in Gang 1–2 genau prüfen.', ru: 'Быстрый и экономичный сухой робот; на тесте проверьте плавность трогания на прогретом авто.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Snappy Dry 7-DSG — Refined Post-2014, Watch Clutch Pack & Mechatronics',
            strengths: ['Lightning-fast shifts and fuel economy matching or beating the manual.'],
            watchouts: ['Dry K1/K2 clutch shudder in 1st–2nd gear stop-and-go traffic around 120–170k km.', 'Mechatronics accumulator / hydraulic pressure loss can trigger gear-selection fault warnings.'],
            beforeYouBuy: ['Test slow uphill creeping and 1st-to-2nd shifts warm for any shudder or hesitation.']
          },
          de: {
            headline: 'Flinkes Trocken-7-DSG — Ab 2014 deutlich besser, Kupplung & Mechatronik prüfen',
            strengths: ['Blitzschnelle Schaltvorgänge und Verbrauch auf Handschalter-Niveau.'],
            watchouts: ['Trockenkupplung neigt bei 120–170 Tkm im Stau zu leichtem Rupfen beim Anfahren in Gang 1–2.', 'Mechatronik-Druckspeicher kann bei Undichtigkeit zu Getriebe-Fehlermeldungen führen.'],
            beforeYouBuy: ['Warmgefahrenes Kriechen am Berg und Schaltübergang 1–2–3 genau auf Ruckeln testen.']
          },
          ru: {
            headline: 'Быстрый сухой 7-DSG — следите за сцеплением и мехатроником',
            strengths: ['Мгновенные переключения и экономичность на уровне механики.'],
            watchouts: ['Сухое сцепление к 120–170 тыс. км в пробках может дёргаться на 1–2-й передачах.', 'Утечка давления в гидроаккумуляторе мехатроника вызывает ошибки переключения.'],
            beforeYouBuy: ['На прогретой машине проверьте плавность трогания в горку и переход с 1-й на 2-ю.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: '60,000 km (Preventive)', de: '60.000 km (Vorsorglich)', ru: '60 000 км (профилактика)' }, action: { en: 'Gearbox & mechatronics oil inspection/refresh', de: 'Getriebeöl & Mechatronik-Hydrauliköl prüfen', ru: 'Проверка и освежение масла КПП и мехатроника' }, cost: '€160–€240' }
          ],
          critical: [
            { when: { en: '120,000–175,000 km', de: '120.000–175.000 km', ru: '120–175 тыс. км' }, action: { en: 'DQ200 dry dual-clutch pack replacement', de: 'DQ200 Trocken-Doppelkupplung erneuern', ru: 'Замена сухого сцепления DQ200' }, cost: '€1,150–€1,650', risk: { en: 'Severe judder or loss of odd/even gears', de: 'Starkes Anfahrruckeln oder Ausfall gerader/ungerader Gänge', ru: 'Сильные рывки или пропажа чётных/нечётных передач' }, damage: '€1,800–€2,600' }
          ]
        }
      },
      'dq250-6-wet': {
        category: 'automatic',
        label: { en: '6-Speed Wet DSG', de: '6-Gang-DSG (Nass)', ru: '6-ст. DSG (Мокрый)' },
        shortLabel: { en: '6-DSG', de: '6-DSG', ru: '6-DSG' },
        subLabel: { en: 'DQ250 (0D9) · 6-Speed Wet Dual-Clutch', de: 'DQ250 (0D9) · 6-Gang-Nass-DSG', ru: 'DQ250 (0D9) · 6-ст. Мокрый DSG' },
        specOverrides: { gearbox: '@dsg6Wet', clutchDmf: '@dualClutchWet' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW DQ250 (0D9) 6-Speed Wet Dual-Clutch', de: 'VW DQ250 (0D9) 6-Gang-Nass-DSG', ru: 'VW DQ250 (0D9) 6-ст. мокрый DSG' } },
                { k: 'gearsStages', v: { en: '6 Forward + Reverse (350+ Nm Rated)', de: '6 Vorwärts + Rückwärts (über 350 Nm)', ru: '6 вперёд + задняя (свыше 350 Н·м)' } },
                { k: 'fluidService', v: { en: 'Mandatory ~5.5 L Wet DSG Oil + Filter Every 60,000 km', de: 'Pflicht: ~5,5 L Nass-DSG-Öl + Filter alle 60.000 km', ru: 'Обязательно: ~5,5 л масла DSG + фильтр каждые 60 тыс. км' } }
              ],
              note: { en: 'Oil-bath clutches handle high torque and urban stop-and-go far better than dry units.', de: 'Im Ölbad laufende Kupplungen verkraften hohes Drehmoment und Stauverkehr souverän.', ru: 'Мокрые фрикционы уверенно переносят высокий момент и городские пробки.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Durable Wet 6-DSG — Needs Strict 60,000 km Fluid & Filter Service',
            strengths: ['Oil-cooled clutches handle high torque and stop-and-go traffic far better than dry DQ200.'],
            watchouts: ['Delayed engagement or harsh downshifts if 60,000 km DSG oil changes were skipped.'],
            beforeYouBuy: ['Verify stamped 60,000 km DSG oil & filter invoices in the service book.']
          },
          de: {
            headline: 'Robustes Nass-6-DSG — Alle 60.000 km Öl- & Filterwechsel Pflicht',
            strengths: ['Im Ölbad laufende Kupplungen verkraften hohes Drehmoment und Stauverkehr souverän.'],
            watchouts: ['Verzögertes Einlegen oder harte Rückschaltungen bei überzogenem 60.000-km-Ölwechsel.'],
            beforeYouBuy: ['Belege für regelmäßigen DSG-Ölwechsel inkl. Filter alle 60.000 km prüfen.']
          },
          ru: {
            headline: 'Надёжный мокрый 6-DSG — обязательна замена масла раз в 60 тыс. км',
            strengths: ['Мокрые фрикционы уверенно переносят высокий момент и городские пробки.'],
            watchouts: ['Пинки или задержки при пропущенной замене масла и фильтра раз в 60 тыс. км.'],
            beforeYouBuy: ['Проверьте документальное подтверждение замены масла DSG каждые 60 000 км.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Wet DSG oil & external cartridge filter service', de: 'Nass-DSG-Ölwechsel inkl. Filter', ru: 'Замена масла и фильтра мокрого DSG' }, cost: '€260–€380' }
          ],
          critical: []
        }
      },
      'dq381-7-wet': {
        category: 'automatic',
        label: { en: '7-Speed Wet DSG', de: '7-Gang-DSG (Nass)', ru: '7-ст. DSG (Мокрый)' },
        shortLabel: { en: '7-DSG', de: '7-DSG', ru: '7-DSG' },
        subLabel: { en: 'DQ381 (0GC) · 7-Speed Wet Dual-Clutch', de: 'DQ381 (0GC) · 7-Gang-Nass-DSG', ru: 'DQ381 (0GC) · 7-ст. Мокрый DSG' },
        specOverrides: { gearbox: '@dsg7Wet', clutchDmf: '@dualClutchWet' },
        dossierBreakdowns: {
          transmissionDriveline: {
            gearbox: {
              specs: [
                { k: 'architecture', v: { en: 'VW DQ381 (0GC) 7-Speed Wet Dual-Clutch', de: 'VW DQ381 (0GC) 7-Gang-Nass-DSG', ru: 'VW DQ381 (0GC) 7-ст. мокрый DSG' } },
                { k: 'gearsStages', v: { en: '7 Forward + Reverse (420 Nm Rated)', de: '7 Vorwärts + Rückwärts (bis 420 Nm)', ru: '7 вперёд + задняя (до 420 Н·м)' } },
                { k: 'fluidService', v: { en: 'Wet DSG Fluid + Filter Service (~60,000–80,000 km)', de: 'Nass-DSG-Öl + Filter alle ~60.000–80.000 km empfohlen', ru: 'Масло и фильтр DSG (рекомендуется каждые 60–80 тыс. км)' } }
              ],
              note: { en: 'Refined 7-speed wet-clutch automatic pairing 420 Nm strength with tall motorway gearing.', de: 'Modernes 7-Gang-Nass-DSG mit 420 Nm Belastbarkeit und langem 7. Autobahngang.', ru: 'Современный 7-ст. мокрый робот с запасом 420 Н·м и длинной 7-й передачей.' }
            }
          }
        },
        dossier: {
          en: {
            headline: 'Modern Wet 7-DSG — Benchmark Refinement & Highway Economy',
            strengths: ['Combines wet-clutch durability with a tall 7th gear for low motorway revs.'],
            watchouts: ['Requires 120,000 km factory oil service (60,000–80,000 km recommended in practice).'],
            beforeYouBuy: ['Verify smooth launch creep and timely DSG oil service records.']
          },
          de: {
            headline: 'Modernes Nass-7-DSG — Top Komfort & Langer 7. Gang',
            strengths: ['Verbindet robuste Nasskupplungen mit langem 7. Gang für niedrige Autobahndrehzahl.'],
            watchouts: ['Regelmäßiger Ölwechsel alle 60.000–80.000 km hält die Mechatronik sauber.'],
            beforeYouBuy: ['Weiches Anfahren und nachgewiesenen DSG-Ölservice kontrollieren.']
          },
          ru: {
            headline: 'Современный мокрый 7-DSG — плавность и экономичность на трассе',
            strengths: ['Сочетает ресурс мокрого сцепления с длинной 7-й передачей для трассы.'],
            watchouts: ['Рекомендуется менять масло каждые 60–80 тыс. км для защиты мехатроника.'],
            beforeYouBuy: ['Проверьте плавность трогания и историю обслуживания масла DSG.']
          }
        },
        repairGuideExtra: {
          routine: [
            { when: { en: '60,000–80,000 km', de: '60.000–80.000 km', ru: '60–80 тыс. км' }, action: { en: 'Wet 7-DSG fluid & filter service', de: '7-Gang-Nass-DSG Öl- & Filterwechsel', ru: 'Замена масла и фильтра 7-DSG' }, cost: '€280–€420' }
          ],
          critical: []
        }
      }
    },
    engines: [      {
        id: '1.0-tsi-85',
        defaultGearboxId: 'mq200-5mt',
        gearboxes: [
          { id: 'mq200-5mt', isDefault: true }
        ],
        buyerFitGroup: 'tsi-small',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 85,
        drivetrain: 'FWD',
        engineBadge: '1.0 TSI (85) • 85 HP',
        engineSubLabel: {
          en: 'CHZD (03/2017–07/2018) • 5-MT • 175 Nm',
          de: 'CHZD (03/2017–07/2018) • 5-Gang • 175 Nm',
          ru: 'CHZD (03/2017–07/2018) • 5-МКПП • 175 Н·м'
        },
        originalMsrp: { en: '€17,850 New', de: '17.850 € Neu', ru: '€17 850 новый' },
        estUsedPrice: '€9,200',
        perkLabel: { en: 'Belt-Driven EA211 • Low Tax & Insurance', de: 'EA211 Zahnriemen • Niedriger Unterhalt', ru: 'Ременной EA211 • Недорогой в содержании' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Modest motorway acceleration', '5-speed manual revs higher at 130 km/h', 'Thermostat / water pump can seep around 110k km'], de: ['Zurückhaltende Autobahn-Beschleunigung', '5-Gang dreht bei 130 km/h höher', 'Wasserpumpenmodul ab ca. 110 Tkm prüfen'], ru: ['Спокойная динамика на трассе', '5-ступ. МКПП держит выше обороты на 130 км/ч', 'Осмотрите корпус помпы к 110 тыс. км'] },
        specOverrides: {
          engineName: { en: '1.0 TSI (85) I3 Turbo', de: '1.0 TSI (85) Dreizylinder-Turbo', ru: '1.0 TSI (85) R3 Турбо' },
          forcedInduction: '@turbo',
          injection: '@direct',
          gearbox: '@manual5',
          clutchDmf: '@singleClutch',
          towingBraked: '1,000 kg',
          sprint0100: '11.9 s',
          topSpeed: '180 km/h',
          peakTorque: '175 Nm @ 2,000 rpm',
          passingPunch: { en: 'Adequate Urban · Plan Overtakes', de: 'Stadttauglich · Überholen planen', ru: 'Для города · Обгон с запасом' },
          realWorldFuel: '5.4 L/100km',
          tankRange: '50 L (~920 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierVeryLow',
          timingDrive: '@belt',
          serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 7.7,
            badges: { en: ['CHZD Powertrain', 'Belt Drive'], de: ['CHZD Antrieb', 'Zahnriemen'], ru: ['Мотор CHZD', 'Ремень ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.0 TSI (85) I3 Turbo', de: '1.0 TSI (85) Dreizylinder-Turbo', ru: '1.0 TSI (85) R3 Турбо' } },
                  { k: 'engineCode', v: 'CHZD' },
                  { k: 'displacement', v: '999 cc · I3 Turbo' },
                  { k: 'output', v: { en: '63 kW (85 HP)', de: '63 kW (85 PS)', ru: '63 кВт (85 л.с.)' } }
                ],
                note: { en: 'Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.', de: 'Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.', ru: 'Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.' }
              },
              forcedInduction: '@turboPetrol',
              injection: '@directInjPetrol'
            },
            dossier: {
              en: {
                headline: 'Refined Belt-Driven EA211 TSI — Reliable When Serviced On Time',
                strengths: ['Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.'],
                watchouts: ['Plastic water-pump/thermostat housing seepage and turbo wastegate rod rattle.'],
                beforeYouBuy: [
                  'Inspect coolant reservoir level and check around the thermostat/water-pump housing for pink residue.',
                  'Listen at cold start for smooth idle and clean turbocharger spool without rattling.',
                  'Verify 15,000 km annual oil-change history rather than stretched 30,000 km LongLife intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Annual oil service (15,000 km max) & cabin filter', cost: '€180–€250', ifIgnored: 'Accelerated varnish & ring fouling', damageCost: '€500+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Spark/glow plugs, brake fluid & intake inspection', cost: '€210–€320', ifIgnored: 'Misfires or sluggish cold starts', damageCost: '€600–€1,100' },
                  { tier: 'orange', km: '90,000–135,000 km / 6–9 yrs', action: 'Water pump / thermostat housing & coolant flush', cost: '€480–€780', ifIgnored: 'Coolant loss & head-gasket overheat', damageCost: '€1,800–€3,200' },
                  { tier: 'orange', km: '135,000–180,000 km / 9–12 yrs', action: 'Clutch / DSG service & front wishbone bushes', cost: '€650–€1,250', ifIgnored: 'Driveline judder or uneven tyre wear', damageCost: '€1,400+' },
                  { tier: 'orange', km: '180,000–215,000 km / 11–14 yrs', action: 'Timing belt kit + tensioner & rear dampers', cost: '€620–€950', ifIgnored: 'Timing belt failure', damageCost: '€3,000–€4,800' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Turbocharger / intake carbon clean & emissions check', cost: '€750–€1,450', ifIgnored: 'Boost loss or failed MOT emissions', damageCost: '€2,200–€3,800' }
                ]
              },
              de: {
                headline: 'Kultivierter EA211-Zahnriemen-TSI — Solide bei kurzem Ölintervall',
                strengths: ['Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.'],
                watchouts: ['Kunststoff-Wasserpumpenmodul kann schwitzen; gelegentlich Rasseln am Turbolader-Gestänge.'],
                beforeYouBuy: [
                  'Kühlmittelstand und Bereich um Wasserpumpe/Thermostat auf rosa Krusten prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne Rasseln am Turbolader achten.',
                  'Kurze 15.000-km-Ölwechsel statt ausgereizter 30.000-km-LongLife-Intervalle bevorzugen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel (max. 15 Tkm) & Innenraumfilter', cost: '180–250 €', ifIgnored: 'Verkokung der Kolbenringe', damageCost: '500 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zünd-/Glühkerzen & Bremsflüssigkeit erneuern', cost: '210–320 €', ifIgnored: 'Zündaussetzer oder zäher Kaltstart', damageCost: '600–1.100 €' },
                  { tier: 'orange', km: '90.000–135.000 km / 6–9 J.', action: 'Wasserpumpe / Thermostatgehäuse & Kühlmittel', cost: '480–780 €', ifIgnored: 'Kühlmittelverlust & Überhitzung', damageCost: '1.800–3.200 €' },
                  { tier: 'orange', km: '135.000–180.000 km / 9–12 J.', action: 'Kupplung / DSG-Service & Querlenkerbuchsen', cost: '650–1.250 €', ifIgnored: 'Rupfen oder Sägezahn-Verschleiß', damageCost: '1.400 €+' },
                  { tier: 'orange', km: '180.000–215.000 km / 11–14 J.', action: 'Zahnriemen-Satz inkl. Spannrolle & Stoßdämpfer', cost: '620–950 €', ifIgnored: 'Zahnriemenriss / Motorschaden', damageCost: '3.000–4.800 €' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Turbolader / Ansaugtrakt-Reinigung & Abgasanlage', cost: '750–1.450 €', ifIgnored: 'Ladedruckverlust oder AU-Mangel', damageCost: '2.200–3.800 €' }
                ]
              },
              ru: {
                headline: 'Надёжный ременной EA211 TSI — долговечен при частой замене масла',
                strengths: ['Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.'],
                watchouts: ['Подтекание пластикового модуля помпы и люфт тяги актуатора турбины.'],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и следы розовых подтёков на корпусе помпы и термостата.',
                  'На холодном запуске оцените ровность работы без дребезга актуатора турбины.',
                  'Выбирайте машины с заменой масла раз в 10–15 тыс. км вместо редкого LongLife.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Замена масла (не реже 15 тыс. км) и фильтров', cost: '€180–250', ifIgnored: 'Закоксовывание колец', damageCost: '€500+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи и замена тормозной жидкости', cost: '€210–320', ifIgnored: 'Пропуски зажигания или трудный пуск', damageCost: '€600–1 100' },
                  { tier: 'orange', km: '90–135 тыс. км / 6–9 лет', action: 'Замена помпы / термостата и антифриза', cost: '€480–780', ifIgnored: 'Утечка антифриза и перегрев', damageCost: '€1 800–3 200' },
                  { tier: 'orange', km: '135–180 тыс. км / 9–12 лет', action: 'Сцепление / сервис DSG и сайлентблоки рычагов', cost: '€650–1 250', ifIgnored: 'Рывки трансмиссии и износ шин', damageCost: '€1 400+' },
                  { tier: 'orange', km: '180–215 тыс. км / 11–14 лет', action: 'Комплект ГРМ и задние амортизаторы', cost: '€620–950', ifIgnored: 'Обрыв ремня ГРМ', damageCost: '€3 000–4 800' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия турбины, чистка впуска и экологии', cost: '€750–1 450', ifIgnored: 'Потеря тяги или провал ТО', damageCost: '€2 200–3 800' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 8, badges: { en: ['5-MT Transmission', 'FWD Layout'], de: ['5-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 5-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.6, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.6, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 7.4, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 6.4, badges: { en: ['1,000 kg Braked', '510 kg Payload'], de: ['1,000 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,000 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 4.4, badges: { en: ['11.9s 0–100 km/h', '180 km/h Top'], de: ['11,9s 0–100 km/h', '180 km/h Spitze'], ru: ['11,9с 0–100 км/ч', 'Макс. 180 км/ч'] } },
          midRangeTorquePassing: { score: 5.4, badges: { en: ['175 Nm @ 2,000', 'Adequate Urban · Plan Overtakes'], de: ['175 Nm @ 2,000', 'Stadttauglich · Überholen planen'], ru: ['175 Н·м @ 2,000', 'Для города · Обгон с запасом'] } },
          handlingAgility: { score: 6.9, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 7.3, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 8.2, badges: { en: ['5.4 L/100km', '50 L (~920 km)'], de: ['5,4 L/100km', '50 L (~920 km)'], ru: ['5,4 л/100 км', '50 L (~920 km)'] } },
          taxInsuranceNorm: { score: 9, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 8.1,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.1, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.0-tsi-110',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€11,500',
            specOverrides: {
              sprint0100: '9.9 s',
              topSpeed: '196 km/h',
              realWorldFuel: '5.5 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 6.2, badges: { en: ['9.9s 0–100 km/h'], de: ['9,9s 0–100 km/h'], ru: ['9,9с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.1, badges: { en: ['5.5 L/100km', '50L Tank Range'], de: ['5,5 L/100km', '50L Tankreichweite'], ru: ['5,5 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-small',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 110,
        drivetrain: 'FWD',
        engineBadge: '1.0 TSI (110) • 110 HP',
        engineSubLabel: {
          en: 'CHZC (04/2017–08/2018) • 6-MT • 200 Nm',
          de: 'CHZC (04/2017–08/2018) • 6-Gang • 200 Nm',
          ru: 'CHZC (04/2017–08/2018) • 6-МКПП • 200 Н·м'
        },
        originalMsrp: { en: '€19,800 New', de: '19.800 € Neu', ru: '€19 800 новый' },
        estUsedPrice: '€10,600',
        perkLabel: { en: 'Belt-Driven EA211 • Low Tax & Insurance', de: 'EA211 Zahnriemen • Niedriger Unterhalt', ru: 'Ременной EA211 • Недорогой в содержании' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.0 TSI (110) I3 Turbo', de: '1.0 TSI (110) Dreizylinder-Turbo', ru: '1.0 TSI (110) R3 Турбо' },
          forcedInduction: '@turbo',
          injection: '@direct',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '9.9 s',
          topSpeed: '196 km/h',
          peakTorque: '200 Nm @ 2,000 rpm',
          passingPunch: { en: 'Responsive · Smooth Turbo Pull', de: 'Elastisch · Sauberer Turbo-Schub', ru: 'Бодрый отклик с низких оборотов' },
          realWorldFuel: '5.5 L/100km',
          tankRange: '50 L (~900 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierLow',
          timingDrive: '@belt',
          serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 7.8,
            badges: { en: ['CHZC Powertrain', 'Belt Drive'], de: ['CHZC Antrieb', 'Zahnriemen'], ru: ['Мотор CHZC', 'Ремень ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.0 TSI (110) I3 Turbo', de: '1.0 TSI (110) Dreizylinder-Turbo', ru: '1.0 TSI (110) R3 Турбо' } },
                  { k: 'engineCode', v: 'CHZC' },
                  { k: 'displacement', v: '999 cc · I3 Turbo' },
                  { k: 'output', v: { en: '81 kW (110 HP)', de: '81 kW (110 PS)', ru: '81 кВт (110 л.с.)' } }
                ],
                note: { en: 'Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.', de: 'Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.', ru: 'Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.' }
              },
              forcedInduction: '@turboPetrol',
              injection: '@directInjPetrol'
            },
            dossier: {
              en: {
                headline: 'Refined Belt-Driven EA211 TSI — Reliable When Serviced On Time',
                strengths: ['Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.'],
                watchouts: ['Plastic water-pump/thermostat housing seepage and turbo wastegate rod rattle.'],
                beforeYouBuy: [
                  'Inspect coolant reservoir level and check around the thermostat/water-pump housing for pink residue.',
                  'Listen at cold start for smooth idle and clean turbocharger spool without rattling.',
                  'Verify 15,000 km annual oil-change history rather than stretched 30,000 km LongLife intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Annual oil service (15,000 km max) & cabin filter', cost: '€180–€250', ifIgnored: 'Accelerated varnish & ring fouling', damageCost: '€500+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Spark/glow plugs, brake fluid & intake inspection', cost: '€210–€320', ifIgnored: 'Misfires or sluggish cold starts', damageCost: '€600–€1,100' },
                  { tier: 'orange', km: '90,000–135,000 km / 6–9 yrs', action: 'Water pump / thermostat housing & coolant flush', cost: '€480–€780', ifIgnored: 'Coolant loss & head-gasket overheat', damageCost: '€1,800–€3,200' },
                  { tier: 'orange', km: '135,000–180,000 km / 9–12 yrs', action: 'Clutch / DSG service & front wishbone bushes', cost: '€650–€1,250', ifIgnored: 'Driveline judder or uneven tyre wear', damageCost: '€1,400+' },
                  { tier: 'orange', km: '180,000–215,000 km / 11–14 yrs', action: 'Timing belt kit + tensioner & rear dampers', cost: '€620–€950', ifIgnored: 'Timing belt failure', damageCost: '€3,000–€4,800' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Turbocharger / intake carbon clean & emissions check', cost: '€750–€1,450', ifIgnored: 'Boost loss or failed MOT emissions', damageCost: '€2,200–€3,800' }
                ]
              },
              de: {
                headline: 'Kultivierter EA211-Zahnriemen-TSI — Solide bei kurzem Ölintervall',
                strengths: ['Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.'],
                watchouts: ['Kunststoff-Wasserpumpenmodul kann schwitzen; gelegentlich Rasseln am Turbolader-Gestänge.'],
                beforeYouBuy: [
                  'Kühlmittelstand und Bereich um Wasserpumpe/Thermostat auf rosa Krusten prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne Rasseln am Turbolader achten.',
                  'Kurze 15.000-km-Ölwechsel statt ausgereizter 30.000-km-LongLife-Intervalle bevorzugen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel (max. 15 Tkm) & Innenraumfilter', cost: '180–250 €', ifIgnored: 'Verkokung der Kolbenringe', damageCost: '500 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zünd-/Glühkerzen & Bremsflüssigkeit erneuern', cost: '210–320 €', ifIgnored: 'Zündaussetzer oder zäher Kaltstart', damageCost: '600–1.100 €' },
                  { tier: 'orange', km: '90.000–135.000 km / 6–9 J.', action: 'Wasserpumpe / Thermostatgehäuse & Kühlmittel', cost: '480–780 €', ifIgnored: 'Kühlmittelverlust & Überhitzung', damageCost: '1.800–3.200 €' },
                  { tier: 'orange', km: '135.000–180.000 km / 9–12 J.', action: 'Kupplung / DSG-Service & Querlenkerbuchsen', cost: '650–1.250 €', ifIgnored: 'Rupfen oder Sägezahn-Verschleiß', damageCost: '1.400 €+' },
                  { tier: 'orange', km: '180.000–215.000 km / 11–14 J.', action: 'Zahnriemen-Satz inkl. Spannrolle & Stoßdämpfer', cost: '620–950 €', ifIgnored: 'Zahnriemenriss / Motorschaden', damageCost: '3.000–4.800 €' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Turbolader / Ansaugtrakt-Reinigung & Abgasanlage', cost: '750–1.450 €', ifIgnored: 'Ladedruckverlust oder AU-Mangel', damageCost: '2.200–3.800 €' }
                ]
              },
              ru: {
                headline: 'Надёжный ременной EA211 TSI — долговечен при частой замене масла',
                strengths: ['Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.'],
                watchouts: ['Подтекание пластикового модуля помпы и люфт тяги актуатора турбины.'],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и следы розовых подтёков на корпусе помпы и термостата.',
                  'На холодном запуске оцените ровность работы без дребезга актуатора турбины.',
                  'Выбирайте машины с заменой масла раз в 10–15 тыс. км вместо редкого LongLife.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Замена масла (не реже 15 тыс. км) и фильтров', cost: '€180–250', ifIgnored: 'Закоксовывание колец', damageCost: '€500+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи и замена тормозной жидкости', cost: '€210–320', ifIgnored: 'Пропуски зажигания или трудный пуск', damageCost: '€600–1 100' },
                  { tier: 'orange', km: '90–135 тыс. км / 6–9 лет', action: 'Замена помпы / термостата и антифриза', cost: '€480–780', ifIgnored: 'Утечка антифриза и перегрев', damageCost: '€1 800–3 200' },
                  { tier: 'orange', km: '135–180 тыс. км / 9–12 лет', action: 'Сцепление / сервис DSG и сайлентблоки рычагов', cost: '€650–1 250', ifIgnored: 'Рывки трансмиссии и износ шин', damageCost: '€1 400+' },
                  { tier: 'orange', km: '180–215 тыс. км / 11–14 лет', action: 'Комплект ГРМ и задние амортизаторы', cost: '€620–950', ifIgnored: 'Обрыв ремня ГРМ', damageCost: '€3 000–4 800' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия турбины, чистка впуска и экологии', cost: '€750–1 450', ifIgnored: 'Потеря тяги или провал ТО', damageCost: '€2 200–3 800' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 7.9, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.6, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.7, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.1, badges: { en: ['1,300 kg Braked', '510 kg Payload'], de: ['1,300 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,300 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.1, badges: { en: ['9.9s 0–100 km/h', '196 km/h Top'], de: ['9,9s 0–100 km/h', '196 km/h Spitze'], ru: ['9,9с 0–100 км/ч', 'Макс. 196 км/ч'] } },
          midRangeTorquePassing: { score: 5.9, badges: { en: ['200 Nm @ 2,000', 'Responsive · Smooth Turbo Pull'], de: ['200 Nm @ 2,000', 'Elastisch · Sauberer Turbo-Schub'], ru: ['200 Н·м @ 2,000', 'Бодрый отклик с низких оборотов'] } },
          handlingAgility: { score: 7.1, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 8.1, badges: { en: ['5.5 L/100km', '50 L (~900 km)'], de: ['5,5 L/100km', '50 L (~900 km)'], ru: ['5,5 л/100 км', '50 L (~900 km)'] } },
          taxInsuranceNorm: { score: 8.8, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 9.1, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.0-tsi-115',
        engineRef: 'vag-1.0-tsi-115',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€12,100',
            specOverrides: {
              sprint0100: '9.7 s',
              topSpeed: '198 km/h',
              realWorldFuel: '5.5 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 6.4, badges: { en: ['9.7s 0–100 km/h'], de: ['9,7s 0–100 km/h'], ru: ['9,7с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.1, badges: { en: ['5.5 L/100km', '50L Tank Range'], de: ['5,5 L/100km', '50L Tankreichweite'], ru: ['5,5 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-small',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 115,
        drivetrain: 'FWD',
        engineBadge: '1.0 TSI (115) • 115 HP',
        engineSubLabel: {
          en: 'CHZD / DKRF (05/2015–07/2020) • 6-MT • 200 Nm',
          de: 'CHZD / DKRF (05/2015–07/2020) • 6-Gang • 200 Nm',
          ru: 'CHZD / DKRF (05/2015–07/2020) • 6-МКПП • 200 Н·м'
        },
        originalMsrp: { en: '€20,400 New', de: '20.400 € Neu', ru: '€20 400 новый' },
        estUsedPrice: '€11,200',
        perkLabel: { en: 'Belt-Driven EA211 • Low Tax & Insurance', de: 'EA211 Zahnriemen • Niedriger Unterhalt', ru: 'Ременной EA211 • Недорогой в содержании' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.0 TSI (115) I3 Turbo', de: '1.0 TSI (115) Dreizylinder-Turbo', ru: '1.0 TSI (115) R3 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '9.7 s',
          topSpeed: '198 km/h',
          realWorldFuel: '5.5 L/100km',
          tankRange: '50 L (~900 km)',
          euroNorm: 'Euro 6d-TEMP',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.6, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.7, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.1, badges: { en: ['1,300 kg Braked', '510 kg Payload'], de: ['1,300 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,300 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.3, badges: { en: ['9.7s 0–100 km/h', '198 km/h Top'], de: ['9,7s 0–100 km/h', '198 km/h Spitze'], ru: ['9,7с 0–100 км/ч', 'Макс. 198 км/ч'] } },
          handlingAgility: { score: 7.1, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 8.1, badges: { en: ['5.5 L/100km', '50 L (~900 km)'], de: ['5,5 L/100km', '50 L (~900 km)'], ru: ['5,5 л/100 км', '50 L (~900 km)'] } },
          taxInsuranceNorm: { score: 8.8, badges: { en: ['Euro 6d-TEMP', 'Low Petrol Tax'], de: ['Euro 6d-TEMP', 'Günstige Steuer'], ru: ['Euro 6d-TEMP', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 9.1, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.2-tsi-86',
        defaultGearboxId: 'mq200-5mt',
        gearboxes: [
          { id: 'mq200-5mt', isDefault: true }
        ],
        buyerFitGroup: 'tsi-small',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 86,
        drivetrain: 'FWD',
        engineBadge: '1.2 TSI (86) • 86 HP',
        engineSubLabel: {
          en: 'CJZB (11/2012–03/2017) • 5-MT • 160 Nm',
          de: 'CJZB (11/2012–03/2017) • 5-Gang • 160 Nm',
          ru: 'CJZB (11/2012–03/2017) • 5-МКПП • 160 Н·м'
        },
        originalMsrp: { en: '€16,975 New', de: '16.975 € Neu', ru: '€16 975 новый' },
        estUsedPrice: '€7,900',
        perkLabel: { en: 'Belt-Driven EA211 • Low Tax & Insurance', de: 'EA211 Zahnriemen • Niedriger Unterhalt', ru: 'Ременной EA211 • Недорогой в содержании' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Modest motorway acceleration', '5-speed manual revs higher at 130 km/h', 'Thermostat / water pump can seep around 110k km'], de: ['Zurückhaltende Autobahn-Beschleunigung', '5-Gang dreht bei 130 km/h höher', 'Wasserpumpenmodul ab ca. 110 Tkm prüfen'], ru: ['Спокойная динамика на трассе', '5-ступ. МКПП держит выше обороты на 130 км/ч', 'Осмотрите корпус помпы к 110 тыс. км'] },
        specOverrides: {
          engineName: { en: '1.2 TSI (86) I4 Turbo', de: '1.2 TSI (86) Reihenvierzylinder Turbo', ru: '1.2 TSI (86) R4 Турбо' },
          forcedInduction: '@turbo',
          injection: '@direct',
          gearbox: '@manual5',
          clutchDmf: '@singleClutch',
          towingBraked: '1,100 kg',
          sprint0100: '11.9 s',
          topSpeed: '179 km/h',
          peakTorque: '160 Nm @ 1,400 rpm',
          passingPunch: { en: 'Adequate Urban · Plan Overtakes', de: 'Stadttauglich · Überholen planen', ru: 'Для города · Обгон с запасом' },
          realWorldFuel: '5.8 L/100km',
          tankRange: '50 L (~860 km)',
          euroNorm: 'Euro 5/6',
          taxInsurance: '@tierVeryLow',
          timingDrive: '@belt',
          serviceWear: '@tierLow'
        },
        subStats: {
          powertrainDurability: {
            score: 7.6,
            badges: { en: ['CJZB Powertrain', 'Belt Drive'], de: ['CJZB Antrieb', 'Zahnriemen'], ru: ['Мотор CJZB', 'Ремень ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.2 TSI (86) I4 Turbo', de: '1.2 TSI (86) Reihenvierzylinder Turbo', ru: '1.2 TSI (86) R4 Турбо' } },
                  { k: 'engineCode', v: 'CJZB' },
                  { k: 'displacement', v: '1,197 cc · I4 Turbo' },
                  { k: 'output', v: { en: '63 kW (86 HP)', de: '63 kW (86 PS)', ru: '63 кВт (86 л.с.)' } }
                ],
                note: { en: 'Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.', de: 'Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.', ru: 'Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.' }
              },
              forcedInduction: '@turboPetrol',
              injection: '@directInjPetrol'
            },
            dossier: {
              en: {
                headline: 'Refined Belt-Driven EA211 TSI — Reliable When Serviced On Time',
                strengths: ['Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.'],
                watchouts: ['Plastic water-pump/thermostat housing seepage and turbo wastegate rod rattle.'],
                beforeYouBuy: [
                  'Inspect coolant reservoir level and check around the thermostat/water-pump housing for pink residue.',
                  'Listen at cold start for smooth idle and clean turbocharger spool without rattling.',
                  'Verify 15,000 km annual oil-change history rather than stretched 30,000 km LongLife intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Annual oil service (15,000 km max) & cabin filter', cost: '€180–€250', ifIgnored: 'Accelerated varnish & ring fouling', damageCost: '€500+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Spark/glow plugs, brake fluid & intake inspection', cost: '€210–€320', ifIgnored: 'Misfires or sluggish cold starts', damageCost: '€600–€1,100' },
                  { tier: 'orange', km: '90,000–135,000 km / 6–9 yrs', action: 'Water pump / thermostat housing & coolant flush', cost: '€480–€780', ifIgnored: 'Coolant loss & head-gasket overheat', damageCost: '€1,800–€3,200' },
                  { tier: 'orange', km: '135,000–180,000 km / 9–12 yrs', action: 'Clutch / DSG service & front wishbone bushes', cost: '€650–€1,250', ifIgnored: 'Driveline judder or uneven tyre wear', damageCost: '€1,400+' },
                  { tier: 'orange', km: '180,000–215,000 km / 11–14 yrs', action: 'Timing belt kit + tensioner & rear dampers', cost: '€620–€950', ifIgnored: 'Timing belt failure', damageCost: '€3,000–€4,800' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Turbocharger / intake carbon clean & emissions check', cost: '€750–€1,450', ifIgnored: 'Boost loss or failed MOT emissions', damageCost: '€2,200–€3,800' }
                ]
              },
              de: {
                headline: 'Kultivierter EA211-Zahnriemen-TSI — Solide bei kurzem Ölintervall',
                strengths: ['Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.'],
                watchouts: ['Kunststoff-Wasserpumpenmodul kann schwitzen; gelegentlich Rasseln am Turbolader-Gestänge.'],
                beforeYouBuy: [
                  'Kühlmittelstand und Bereich um Wasserpumpe/Thermostat auf rosa Krusten prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne Rasseln am Turbolader achten.',
                  'Kurze 15.000-km-Ölwechsel statt ausgereizter 30.000-km-LongLife-Intervalle bevorzugen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel (max. 15 Tkm) & Innenraumfilter', cost: '180–250 €', ifIgnored: 'Verkokung der Kolbenringe', damageCost: '500 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zünd-/Glühkerzen & Bremsflüssigkeit erneuern', cost: '210–320 €', ifIgnored: 'Zündaussetzer oder zäher Kaltstart', damageCost: '600–1.100 €' },
                  { tier: 'orange', km: '90.000–135.000 km / 6–9 J.', action: 'Wasserpumpe / Thermostatgehäuse & Kühlmittel', cost: '480–780 €', ifIgnored: 'Kühlmittelverlust & Überhitzung', damageCost: '1.800–3.200 €' },
                  { tier: 'orange', km: '135.000–180.000 km / 9–12 J.', action: 'Kupplung / DSG-Service & Querlenkerbuchsen', cost: '650–1.250 €', ifIgnored: 'Rupfen oder Sägezahn-Verschleiß', damageCost: '1.400 €+' },
                  { tier: 'orange', km: '180.000–215.000 km / 11–14 J.', action: 'Zahnriemen-Satz inkl. Spannrolle & Stoßdämpfer', cost: '620–950 €', ifIgnored: 'Zahnriemenriss / Motorschaden', damageCost: '3.000–4.800 €' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Turbolader / Ansaugtrakt-Reinigung & Abgasanlage', cost: '750–1.450 €', ifIgnored: 'Ladedruckverlust oder AU-Mangel', damageCost: '2.200–3.800 €' }
                ]
              },
              ru: {
                headline: 'Надёжный ременной EA211 TSI — долговечен при частой замене масла',
                strengths: ['Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.'],
                watchouts: ['Подтекание пластикового модуля помпы и люфт тяги актуатора турбины.'],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и следы розовых подтёков на корпусе помпы и термостата.',
                  'На холодном запуске оцените ровность работы без дребезга актуатора турбины.',
                  'Выбирайте машины с заменой масла раз в 10–15 тыс. км вместо редкого LongLife.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Замена масла (не реже 15 тыс. км) и фильтров', cost: '€180–250', ifIgnored: 'Закоксовывание колец', damageCost: '€500+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи и замена тормозной жидкости', cost: '€210–320', ifIgnored: 'Пропуски зажигания или трудный пуск', damageCost: '€600–1 100' },
                  { tier: 'orange', km: '90–135 тыс. км / 6–9 лет', action: 'Замена помпы / термостата и антифриза', cost: '€480–780', ifIgnored: 'Утечка антифриза и перегрев', damageCost: '€1 800–3 200' },
                  { tier: 'orange', km: '135–180 тыс. км / 9–12 лет', action: 'Сцепление / сервис DSG и сайлентблоки рычагов', cost: '€650–1 250', ifIgnored: 'Рывки трансмиссии и износ шин', damageCost: '€1 400+' },
                  { tier: 'orange', km: '180–215 тыс. км / 11–14 лет', action: 'Комплект ГРМ и задние амортизаторы', cost: '€620–950', ifIgnored: 'Обрыв ремня ГРМ', damageCost: '€3 000–4 800' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия турбины, чистка впуска и экологии', cost: '€750–1 450', ifIgnored: 'Потеря тяги или провал ТО', damageCost: '€2 200–3 800' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 8, badges: { en: ['5-MT Transmission', 'FWD Layout'], de: ['5-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 5-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.5, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.5, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 6.7, badges: { en: ['1,100 kg Braked', '510 kg Payload'], de: ['1,100 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,100 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 4.7, badges: { en: ['11.9s 0–100 km/h', '179 km/h Top'], de: ['11,9s 0–100 km/h', '179 km/h Spitze'], ru: ['11,9с 0–100 км/ч', 'Макс. 179 км/ч'] } },
          midRangeTorquePassing: { score: 5.3, badges: { en: ['160 Nm @ 1,400', 'Adequate Urban · Plan Overtakes'], de: ['160 Nm @ 1,400', 'Stadttauglich · Überholen planen'], ru: ['160 Н·м @ 1,400', 'Для города · Обгон с запасом'] } },
          handlingAgility: { score: 6.9, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.8, badges: { en: ['5.8 L/100km', '50 L (~860 km)'], de: ['5,8 L/100km', '50 L (~860 km)'], ru: ['5,8 л/100 км', '50 L (~860 km)'] } },
          taxInsuranceNorm: { score: 8.8, badges: { en: ['Euro 5/6', 'Low Petrol Tax'], de: ['Euro 5/6', 'Günstige Steuer'], ru: ['Euro 5/6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.8, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.2-tsi-105',
        engineRef: 'vag-1.2-tsi-105',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€9,500',
            specOverrides: {
              sprint0100: '10.2 s',
              topSpeed: '192 km/h',
              realWorldFuel: '5.9 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 5.9, badges: { en: ['10.2s 0–100 km/h'], de: ['10,2s 0–100 km/h'], ru: ['10,2с 0–100 км/ч'] } },
              efficiencyFuel: { score: 7.7, badges: { en: ['5.9 L/100km', '50L Tank Range'], de: ['5,9 L/100km', '50L Tankreichweite'], ru: ['5,9 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-small',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 105,
        drivetrain: 'FWD',
        engineBadge: '1.2 TSI (105) • 105 HP',
        engineSubLabel: {
          en: 'CJZA (11/2012–04/2014) • 6-MT • 175 Nm',
          de: 'CJZA (11/2012–04/2014) • 6-Gang • 175 Nm',
          ru: 'CJZA (11/2012–04/2014) • 6-МКПП • 175 Н·м'
        },
        originalMsrp: { en: '€18,825 New', de: '18.825 € Neu', ru: '€18 825 новый' },
        estUsedPrice: '€8,600',
        perkLabel: { en: 'Belt-Driven EA211 • Low Tax & Insurance', de: 'EA211 Zahnriemen • Niedriger Unterhalt', ru: 'Ременной EA211 • Недорогой в содержании' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.2 TSI (105) I4 Turbo', de: '1.2 TSI (105) Reihenvierzylinder Turbo', ru: '1.2 TSI (105) R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '10.2 s',
          topSpeed: '192 km/h',
          realWorldFuel: '5.9 L/100km',
          tankRange: '50 L (~845 km)',
          euroNorm: 'Euro 5',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: { score: 7.8, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.5, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.6, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.1, badges: { en: ['1,300 kg Braked', '510 kg Payload'], de: ['1,300 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,300 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 5.9, badges: { en: ['10.2s 0–100 km/h', '192 km/h Top'], de: ['10,2s 0–100 km/h', '192 km/h Spitze'], ru: ['10,2с 0–100 км/ч', 'Макс. 192 км/ч'] } },
          handlingAgility: { score: 7, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.7, badges: { en: ['5.9 L/100km', '50 L (~845 km)'], de: ['5,9 L/100km', '50 L (~845 km)'], ru: ['5,9 л/100 км', '50 L (~845 km)'] } },
          taxInsuranceNorm: { score: 8.5, badges: { en: ['Euro 5', 'Low Petrol Tax'], de: ['Euro 5', 'Günstige Steuer'], ru: ['Euro 5', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.9,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.7, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.2-tsi-110',
        engineRef: 'vag-1.2-tsi-110',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€10,500',
            specOverrides: {
              sprint0100: '9.9 s',
              topSpeed: '195 km/h',
              realWorldFuel: '5.7 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 6.2, badges: { en: ['9.9s 0–100 km/h'], de: ['9,9s 0–100 km/h'], ru: ['9,9с 0–100 км/ч'] } },
              efficiencyFuel: { score: 7.9, badges: { en: ['5.7 L/100km', '50L Tank Range'], de: ['5,7 L/100km', '50L Tankreichweite'], ru: ['5,7 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-small',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 110,
        drivetrain: 'FWD',
        engineBadge: '1.2 TSI (110) • 110 HP',
        engineSubLabel: {
          en: 'CYVB (04/2014–03/2017) • 6-MT • 175 Nm',
          de: 'CYVB (04/2014–03/2017) • 6-Gang • 175 Nm',
          ru: 'CYVB (04/2014–03/2017) • 6-МКПП • 175 Н·м'
        },
        originalMsrp: { en: '€19,550 New', de: '19.550 € Neu', ru: '€19 550 новый' },
        estUsedPrice: '€9,600',
        perkLabel: { en: 'Belt-Driven EA211 • Low Tax & Insurance', de: 'EA211 Zahnriemen • Niedriger Unterhalt', ru: 'Ременной EA211 • Недорогой в содержании' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.2 TSI (110) I4 Turbo', de: '1.2 TSI (110) Reihenvierzylinder Turbo', ru: '1.2 TSI (110) R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,300 kg',
          sprint0100: '9.9 s',
          topSpeed: '195 km/h',
          realWorldFuel: '5.7 L/100km',
          tankRange: '50 L (~875 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierLow',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.5, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.6, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.1, badges: { en: ['1,300 kg Braked', '510 kg Payload'], de: ['1,300 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,300 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.1, badges: { en: ['9.9s 0–100 km/h', '195 km/h Top'], de: ['9,9s 0–100 km/h', '195 km/h Spitze'], ru: ['9,9с 0–100 км/ч', 'Макс. 195 км/ч'] } },
          handlingAgility: { score: 7.1, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.9, badges: { en: ['5.7 L/100km', '50 L (~875 km)'], de: ['5,7 L/100km', '50 L (~875 km)'], ru: ['5,7 л/100 км', '50 L (~875 km)'] } },
          taxInsuranceNorm: { score: 8.6, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.9, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.4-tgi-110',
        engineRef: 'vag-1.4-tgi-110',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€10,300',
            specOverrides: {
              sprint0100: '10.9 s',
              topSpeed: '194 km/h',
              realWorldFuel: '4.1 kg CNG'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 5.4, badges: { en: ['10.9s 0–100 km/h'], de: ['10,9s 0–100 km/h'], ru: ['10,9с 0–100 км/ч'] } },
              efficiencyFuel: { score: 9.2, badges: { en: ['4.1 kg CNG', '50L Tank Range'], de: ['4,1 kg CNG', '50L Tankreichweite'], ru: ['4,1 kg CNG', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tgi-cng',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 110,
        drivetrain: 'FWD',
        engineBadge: '1.4 TGI CNG • 110 HP',
        engineSubLabel: {
          en: 'CPWA (06/2013–08/2018) • 6-MT • 200 Nm',
          de: 'CPWA (06/2013–08/2018) • 6-Gang • 200 Nm',
          ru: 'CPWA (06/2013–08/2018) • 6-МКПП • 200 Н·м'
        },
        originalMsrp: { en: '€23,400 New', de: '23.400 € Neu', ru: '€23 400 новый' },
        estUsedPrice: '€9,400',
        perkLabel: { en: 'Ultra-Low CNG Fuel Cost • Bivalent Range', de: 'Extrem günstige CNG-Kosten • Bivalent', ru: 'Минимальные затраты на газ • Бивалент' },
        remarkablePositives: { en: ['Ultra-low CNG fuel cost per km', 'Clean urban emissions & bivalent range', 'Quiet, refined MQB cabin', '5-star Euro NCAP & physical dials'], de: ['Extrem niedrige CNG-Spritkosten', 'Saubere Emissionen & bivalente Reichweite', 'Ruhiger, wertiger MQB-Innenraum', '5★ Euro NCAP & echte Drehregler'], ru: ['Минимальные затраты на метан (CNG)', 'Чистый выхлоп и двойной запас хода', 'Тихий и качественный салон MQB', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.4 TGI CNG I4 Turbo', de: '1.4 TGI CNG Reihenvierzylinder Turbo', ru: '1.4 TGI CNG R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,400 kg',
          sprint0100: '10.9 s',
          topSpeed: '194 km/h',
          realWorldFuel: '4.1 kg CNG',
          tankRange: '15 kg CNG + 50 L (~1,150 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierVeryLow',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.6, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.6, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['291L CNG Boot', 'Variable Floor'], de: ['291L CNG-Kofferraum', 'Variabler Boden'], ru: ['Багажник 291л', 'Двойной пол'] } },
          payloadTowing: { score: 7.3, badges: { en: ['1,400 kg Braked', '510 kg Payload'], de: ['1,400 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,400 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 5.5, badges: { en: ['10.9s 0–100 km/h', '194 km/h Top'], de: ['10,9s 0–100 km/h', '194 km/h Spitze'], ru: ['10,9с 0–100 км/ч', 'Макс. 194 км/ч'] } },
          handlingAgility: { score: 6.9, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 9.3, badges: { en: ['4.1 kg CNG', '15 kg CNG + 50 L (~1,150 km)'], de: ['4,1 kg CNG', '15 kg CNG + 50 L (~1,150 km)'], ru: ['4,1 kg CNG', '15 kg CNG + 50 L (~1,150 km)'] } },
          taxInsuranceNorm: { score: 9.1, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.5,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: 'Every 4 yrs (Mandatory)', de: 'Alle 4 Jahre (Pflicht)', ru: 'Каждые 4 года (Обязательно)' }, action: { en: 'Mandatory CNG tank visual/safety inspection (GAP)', de: 'Vorgeschriebene CNG-Gastank-Prüfung (GAP)', ru: 'Обязательная поверка газовых баллонов CNG' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.5, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.4-tsi-125',
        engineRef: 'vag-1.4-tsi-125',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€12,100',
            specOverrides: {
              sprint0100: '9.1 s',
              topSpeed: '204 km/h',
              realWorldFuel: '6.0 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 7, badges: { en: ['9.1s 0–100 km/h'], de: ['9,1s 0–100 km/h'], ru: ['9,1с 0–100 км/ч'] } },
              efficiencyFuel: { score: 7.7, badges: { en: ['6.0 L/100km', '50L Tank Range'], de: ['6,0 L/100km', '50L Tankreichweite'], ru: ['6,0 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-mid',
        dossierGroup: 'mqb-standard',
        isDefault: true,
        fuelType: 'petrol',
        hp: 125,
        drivetrain: 'FWD',
        engineBadge: '1.4 TSI (122/125) • 125 HP',
        engineSubLabel: {
          en: 'CMBA / CZCA (11/2012–03/2018) • 6-MT • 200 Nm',
          de: 'CMBA / CZCA (11/2012–03/2018) • 6-Gang • 200 Nm',
          ru: 'CMBA / CZCA (11/2012–03/2018) • 6-МКПП • 200 Н·м'
        },
        originalMsrp: { en: '€21,450 New', de: '21.450 € Neu', ru: '€21 450 новый' },
        estUsedPrice: '€11,200',
        perkLabel: { en: 'Multi-Link Rear • Balanced All-Rounder', de: 'Mehrlenker-Achse • Top Allrounder', ru: 'Многорычажка сзади • Баланс во всём' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.4 TSI (122/125) I4 Turbo', de: '1.4 TSI (122/125) Reihenvierzylinder Turbo', ru: '1.4 TSI (122/125) R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,400 kg',
          sprint0100: '9.1 s',
          topSpeed: '204 km/h',
          realWorldFuel: '6.0 L/100km',
          tankRange: '50 L (~830 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLow'
        },
        subStats: {
          transmissionDriveline: { score: 8, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.9, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 7.8, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.3, badges: { en: ['1,400 kg Braked', '510 kg Payload'], de: ['1,400 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,400 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.8, badges: { en: ['9.1s 0–100 km/h', '204 km/h Top'], de: ['9,1s 0–100 km/h', '204 km/h Spitze'], ru: ['9,1с 0–100 км/ч', 'Макс. 204 км/ч'] } },
          handlingAgility: { score: 7.5, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.6, badges: { en: ['6.0 L/100km', '50 L (~830 km)'], de: ['6,0 L/100km', '50 L (~830 km)'], ru: ['6,0 л/100 км', '50 L (~830 km)'] } },
          taxInsuranceNorm: { score: 8.4, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 9.0, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.4-tsi-140',
        engineRef: 'vag-1.4-tsi-140',
        defaultGearboxId: 'mq250-6mt',
        gearboxes: [
          { id: 'mq250-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€11,300',
            specOverrides: {
              sprint0100: '8.4 s',
              topSpeed: '212 km/h',
              realWorldFuel: '6.1 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 7.6, badges: { en: ['8.4s 0–100 km/h'], de: ['8,4s 0–100 km/h'], ru: ['8,4с 0–100 км/ч'] } },
              efficiencyFuel: { score: 7.6, badges: { en: ['6.1 L/100km', '50L Tank Range'], de: ['6,1 L/100km', '50L Tankreichweite'], ru: ['6,1 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-mid',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 140,
        drivetrain: 'FWD',
        engineBadge: '1.4 TSI ACT (140) • 140 HP',
        engineSubLabel: {
          en: 'CHPA / CPTA (11/2012–04/2014) • 6-MT • 250 Nm',
          de: 'CHPA / CPTA (11/2012–04/2014) • 6-Gang • 250 Nm',
          ru: 'CHPA / CPTA (11/2012–04/2014) • 6-МКПП • 250 Н·м'
        },
        originalMsrp: { en: '€23,200 New', de: '23.200 € Neu', ru: '€23 200 новый' },
        estUsedPrice: '€10,400',
        perkLabel: { en: 'Multi-Link Rear • Balanced All-Rounder', de: 'Mehrlenker-Achse • Top Allrounder', ru: 'Многорычажка сзади • Баланс во всём' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.4 TSI ACT (140) I4 Turbo', de: '1.4 TSI ACT (140) Reihenvierzylinder Turbo', ru: '1.4 TSI ACT (140) R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '8.4 s',
          topSpeed: '212 km/h',
          realWorldFuel: '6.1 L/100km',
          tankRange: '50 L (~820 km)',
          euroNorm: 'Euro 5/6',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.9, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 7.8, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.5, badges: { en: ['1,500 kg Braked', '510 kg Payload'], de: ['1,500 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,500 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 7.3, badges: { en: ['8.4s 0–100 km/h', '212 km/h Top'], de: ['8,4s 0–100 km/h', '212 km/h Spitze'], ru: ['8,4с 0–100 км/ч', 'Макс. 212 км/ч'] } },
          handlingAgility: { score: 7.6, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.5, badges: { en: ['6.1 L/100km', '50 L (~820 km)'], de: ['6,1 L/100km', '50 L (~820 km)'], ru: ['6,1 л/100 км', '50 L (~820 km)'] } },
          taxInsuranceNorm: { score: 8.1, badges: { en: ['Euro 5/6', 'Low Petrol Tax'], de: ['Euro 5/6', 'Günstige Steuer'], ru: ['Euro 5/6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.7,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.7, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.4-tsi-150',
        engineRef: 'vag-1.4-tsi-150-cod',
        defaultGearboxId: 'mq250-6mt',
        gearboxes: [
          { id: 'mq250-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€13,300',
            specOverrides: {
              sprint0100: '8.2 s',
              topSpeed: '216 km/h',
              realWorldFuel: '6.1 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 7.8, badges: { en: ['8.2s 0–100 km/h'], de: ['8,2s 0–100 km/h'], ru: ['8,2с 0–100 км/ч'] } },
              efficiencyFuel: { score: 7.6, badges: { en: ['6.1 L/100km', '50L Tank Range'], de: ['6,1 L/100km', '50L Tankreichweite'], ru: ['6,1 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-mid',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 150,
        drivetrain: 'FWD',
        engineBadge: '1.4 TSI ACT (150) • 150 HP',
        engineSubLabel: {
          en: 'CZDA / CZEA (04/2014–03/2018) • 6-MT • 250 Nm',
          de: 'CZDA / CZEA (04/2014–03/2018) • 6-Gang • 250 Nm',
          ru: 'CZDA / CZEA (04/2014–03/2018) • 6-МКПП • 250 Н·м'
        },
        originalMsrp: { en: '€24,150 New', de: '24.150 € Neu', ru: '€24 150 новый' },
        estUsedPrice: '€12,400',
        perkLabel: { en: 'Multi-Link Rear • Balanced All-Rounder', de: 'Mehrlenker-Achse • Top Allrounder', ru: 'Многорычажка сзади • Баланс во всём' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.4 TSI ACT (150) I4 Turbo', de: '1.4 TSI ACT (150) Reihenvierzylinder Turbo', ru: '1.4 TSI ACT (150) R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '8.2 s',
          topSpeed: '216 km/h',
          realWorldFuel: '6.1 L/100km',
          tankRange: '50 L (~820 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: { score: 8, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.9, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 7.9, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.5, badges: { en: ['1,500 kg Braked', '510 kg Payload'], de: ['1,500 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,500 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 7.5, badges: { en: ['8.2s 0–100 km/h', '216 km/h Top'], de: ['8,2s 0–100 km/h', '216 km/h Spitze'], ru: ['8,2с 0–100 км/ч', 'Макс. 216 км/ч'] } },
          handlingAgility: { score: 7.7, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.5, badges: { en: ['6.1 L/100km', '50 L (~820 km)'], de: ['6,1 L/100km', '50 L (~820 km)'], ru: ['6,1 л/100 км', '50 L (~820 km)'] } },
          taxInsuranceNorm: { score: 8.1, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 9.0, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.5-tsi-130',
        defaultGearboxId: 'mq200-6mt',
        gearboxes: [
          { id: 'mq200-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€14,400',
            specOverrides: {
              sprint0100: '9.1 s',
              topSpeed: '210 km/h',
              realWorldFuel: '5.6 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 7, badges: { en: ['9.1s 0–100 km/h'], de: ['9,1s 0–100 km/h'], ru: ['9,1с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.2, badges: { en: ['5.6 L/100km', '50L Tank Range'], de: ['5,6 L/100km', '50L Tankreichweite'], ru: ['5,6 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-evo',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 130,
        drivetrain: 'FWD',
        engineBadge: '1.5 TSI EVO (130) • 130 HP',
        engineSubLabel: {
          en: 'DACA (07/2017–07/2020) • 6-MT • 200 Nm',
          de: 'DACA (07/2017–07/2020) • 6-Gang • 200 Nm',
          ru: 'DACA (07/2017–07/2020) • 6-МКПП • 200 Н·м'
        },
        originalMsrp: { en: '€23,600 New', de: '23.600 € Neu', ru: '€23 600 новый' },
        estUsedPrice: '€13,500',
        perkLabel: { en: 'Multi-Link Rear • Balanced All-Rounder', de: 'Mehrlenker-Achse • Top Allrounder', ru: 'Многорычажка сзади • Баланс во всём' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.5 TSI EVO (130) I4 Turbo', de: '1.5 TSI EVO (130) Reihenvierzylinder Turbo', ru: '1.5 TSI EVO (130) R4 Турбо' },
          forcedInduction: '@turbo',
          injection: '@direct',
          gearbox: '@manual6',
          clutchDmf: '@singleClutch',
          towingBraked: '1,400 kg',
          sprint0100: '9.1 s',
          topSpeed: '210 km/h',
          peakTorque: '200 Nm @ 1,400 rpm',
          passingPunch: { en: 'Responsive · Smooth Turbo Pull', de: 'Elastisch · Sauberer Turbo-Schub', ru: 'Бодрый отклик с низких оборотов' },
          realWorldFuel: '5.6 L/100km',
          tankRange: '50 L (~890 km)',
          euroNorm: 'Euro 6d-TEMP',
          taxInsurance: '@tierLowMod',
          timingDrive: '@belt',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          powertrainDurability: {
            score: 8,
            badges: { en: ['DACA Powertrain', 'Belt Drive'], de: ['DACA Antrieb', 'Zahnriemen'], ru: ['Мотор DACA', 'Ремень ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.5 TSI EVO (130) I4 Turbo', de: '1.5 TSI EVO (130) Reihenvierzylinder Turbo', ru: '1.5 TSI EVO (130) R4 Турбо' } },
                  { k: 'engineCode', v: 'DACA' },
                  { k: 'displacement', v: '1,498 cc · I4 Turbo' },
                  { k: 'output', v: { en: '96 kW (130 HP)', de: '96 kW (130 PS)', ru: '96 кВт (130 л.с.)' } }
                ],
                note: { en: 'Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.', de: 'Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.', ru: 'Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.' }
              },
              forcedInduction: '@turboPetrol',
              injection: '@directInjPetrol'
            },
            dossier: {
              en: {
                headline: 'Refined Belt-Driven EA211 TSI — Reliable When Serviced On Time',
                strengths: ['Long-life toothed timing belt avoids the earlier EA111 timing-chain stretch.'],
                watchouts: ['Plastic water-pump/thermostat housing seepage and turbo wastegate rod rattle.'],
                beforeYouBuy: [
                  'Inspect coolant reservoir level and check around the thermostat/water-pump housing for pink residue.',
                  'Listen at cold start for smooth idle and clean turbocharger spool without rattling.',
                  'Verify 15,000 km annual oil-change history rather than stretched 30,000 km LongLife intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Annual oil service (15,000 km max) & cabin filter', cost: '€180–€250', ifIgnored: 'Accelerated varnish & ring fouling', damageCost: '€500+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Spark/glow plugs, brake fluid & intake inspection', cost: '€210–€320', ifIgnored: 'Misfires or sluggish cold starts', damageCost: '€600–€1,100' },
                  { tier: 'orange', km: '90,000–135,000 km / 6–9 yrs', action: 'Water pump / thermostat housing & coolant flush', cost: '€480–€780', ifIgnored: 'Coolant loss & head-gasket overheat', damageCost: '€1,800–€3,200' },
                  { tier: 'orange', km: '135,000–180,000 km / 9–12 yrs', action: 'Clutch / DSG service & front wishbone bushes', cost: '€650–€1,250', ifIgnored: 'Driveline judder or uneven tyre wear', damageCost: '€1,400+' },
                  { tier: 'orange', km: '180,000–215,000 km / 11–14 yrs', action: 'Timing belt kit + tensioner & rear dampers', cost: '€620–€950', ifIgnored: 'Timing belt failure', damageCost: '€3,000–€4,800' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Turbocharger / intake carbon clean & emissions check', cost: '€750–€1,450', ifIgnored: 'Boost loss or failed MOT emissions', damageCost: '€2,200–€3,800' }
                ]
              },
              de: {
                headline: 'Kultivierter EA211-Zahnriemen-TSI — Solide bei kurzem Ölintervall',
                strengths: ['Robuster Zahnriemen ersetzt die anfällige Steuerkette der Vorgängergeneration.'],
                watchouts: ['Kunststoff-Wasserpumpenmodul kann schwitzen; gelegentlich Rasseln am Turbolader-Gestänge.'],
                beforeYouBuy: [
                  'Kühlmittelstand und Bereich um Wasserpumpe/Thermostat auf rosa Krusten prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne Rasseln am Turbolader achten.',
                  'Kurze 15.000-km-Ölwechsel statt ausgereizter 30.000-km-LongLife-Intervalle bevorzugen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel (max. 15 Tkm) & Innenraumfilter', cost: '180–250 €', ifIgnored: 'Verkokung der Kolbenringe', damageCost: '500 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zünd-/Glühkerzen & Bremsflüssigkeit erneuern', cost: '210–320 €', ifIgnored: 'Zündaussetzer oder zäher Kaltstart', damageCost: '600–1.100 €' },
                  { tier: 'orange', km: '90.000–135.000 km / 6–9 J.', action: 'Wasserpumpe / Thermostatgehäuse & Kühlmittel', cost: '480–780 €', ifIgnored: 'Kühlmittelverlust & Überhitzung', damageCost: '1.800–3.200 €' },
                  { tier: 'orange', km: '135.000–180.000 km / 9–12 J.', action: 'Kupplung / DSG-Service & Querlenkerbuchsen', cost: '650–1.250 €', ifIgnored: 'Rupfen oder Sägezahn-Verschleiß', damageCost: '1.400 €+' },
                  { tier: 'orange', km: '180.000–215.000 km / 11–14 J.', action: 'Zahnriemen-Satz inkl. Spannrolle & Stoßdämpfer', cost: '620–950 €', ifIgnored: 'Zahnriemenriss / Motorschaden', damageCost: '3.000–4.800 €' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Turbolader / Ansaugtrakt-Reinigung & Abgasanlage', cost: '750–1.450 €', ifIgnored: 'Ladedruckverlust oder AU-Mangel', damageCost: '2.200–3.800 €' }
                ]
              },
              ru: {
                headline: 'Надёжный ременной EA211 TSI — долговечен при частой замене масла',
                strengths: ['Ремень ГРМ избавил серию EA211 от проблем с растяжением цепи прошлых лет.'],
                watchouts: ['Подтекание пластикового модуля помпы и люфт тяги актуатора турбины.'],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и следы розовых подтёков на корпусе помпы и термостата.',
                  'На холодном запуске оцените ровность работы без дребезга актуатора турбины.',
                  'Выбирайте машины с заменой масла раз в 10–15 тыс. км вместо редкого LongLife.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Замена масла (не реже 15 тыс. км) и фильтров', cost: '€180–250', ifIgnored: 'Закоксовывание колец', damageCost: '€500+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи и замена тормозной жидкости', cost: '€210–320', ifIgnored: 'Пропуски зажигания или трудный пуск', damageCost: '€600–1 100' },
                  { tier: 'orange', km: '90–135 тыс. км / 6–9 лет', action: 'Замена помпы / термостата и антифриза', cost: '€480–780', ifIgnored: 'Утечка антифриза и перегрев', damageCost: '€1 800–3 200' },
                  { tier: 'orange', km: '135–180 тыс. км / 9–12 лет', action: 'Сцепление / сервис DSG и сайлентблоки рычагов', cost: '€650–1 250', ifIgnored: 'Рывки трансмиссии и износ шин', damageCost: '€1 400+' },
                  { tier: 'orange', km: '180–215 тыс. км / 11–14 лет', action: 'Комплект ГРМ и задние амортизаторы', cost: '€620–950', ifIgnored: 'Обрыв ремня ГРМ', damageCost: '€3 000–4 800' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия турбины, чистка впуска и экологии', cost: '€750–1 450', ifIgnored: 'Потеря тяги или провал ТО', damageCost: '€2 200–3 800' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 8, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 8, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 7.9, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.3, badges: { en: ['1,400 kg Braked', '510 kg Payload'], de: ['1,400 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,400 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.8, badges: { en: ['9.1s 0–100 km/h', '210 km/h Top'], de: ['9,1s 0–100 km/h', '210 km/h Spitze'], ru: ['9,1с 0–100 км/ч', 'Макс. 210 км/ч'] } },
          midRangeTorquePassing: { score: 5.9, badges: { en: ['200 Nm @ 1,400', 'Responsive · Smooth Turbo Pull'], de: ['200 Nm @ 1,400', 'Elastisch · Sauberer Turbo-Schub'], ru: ['200 Н·м @ 1,400', 'Бодрый отклик с низких оборотов'] } },
          handlingAgility: { score: 7.5, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 8.0, badges: { en: ['5.6 L/100km', '50 L (~890 km)'], de: ['5,6 L/100km', '50 L (~890 km)'], ru: ['5,6 л/100 км', '50 L (~890 km)'] } },
          taxInsuranceNorm: { score: 8.5, badges: { en: ['Euro 6d-TEMP', 'Low Petrol Tax'], de: ['Euro 6d-TEMP', 'Günstige Steuer'], ru: ['Euro 6d-TEMP', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 9.2, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.5-tgi-130',
        engineRef: 'vag-1.5-tgi-130',
        defaultGearboxId: 'dq200-7-dry',
        gearboxes: [
          { id: 'dq200-7-dry', isDefault: true }
        ],
        buyerFitGroup: 'tgi-cng',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 130,
        drivetrain: 'FWD',
        engineBadge: '1.5 TGI CNG • 130 HP',
        engineSubLabel: {
          en: 'DHFA (11/2018–07/2020) • 7-DSG • 200 Nm',
          de: 'DHFA (11/2018–07/2020) • 7-DSG • 200 Nm',
          ru: 'DHFA (11/2018–07/2020) • 7-DSG • 200 Н·м'
        },
        originalMsrp: { en: '€27,900 New', de: '27.900 € Neu', ru: '€27 900 новый' },
        estUsedPrice: '€13,200',
        perkLabel: { en: 'Ultra-Low CNG Fuel Cost • Bivalent Range', de: 'Extrem günstige CNG-Kosten • Bivalent', ru: 'Минимальные затраты на газ • Бивалент' },
        remarkablePositives: { en: ['Ultra-low CNG fuel cost per km', 'Clean urban emissions & bivalent range', 'Quiet, refined MQB cabin', '5-star Euro NCAP & physical dials'], de: ['Extrem niedrige CNG-Spritkosten', 'Saubere Emissionen & bivalente Reichweite', 'Ruhiger, wertiger MQB-Innenraum', '5★ Euro NCAP & echte Drehregler'], ru: ['Минимальные затраты на метан (CNG)', 'Чистый выхлоп и двойной запас хода', 'Тихий и качественный салон MQB', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.5 TGI CNG I4 Turbo', de: '1.5 TGI CNG Reihenvierzylinder Turbo', ru: '1.5 TGI CNG R4 Турбо' },
          gearbox: '@dsg7Dry',
          clutchDmf: '@dualClutchDry',
          towingBraked: '1,400 kg',
          sprint0100: '9.6 s',
          topSpeed: '206 km/h',
          realWorldFuel: '4.0 kg CNG',
          tankRange: '17.3 kg CNG + 9 L (~490 km)',
          euroNorm: 'Euro 6d-TEMP',
          taxInsurance: '@tierVeryLow',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: { score: 7.6, badges: { en: ['7-DSG Transmission', 'FWD Layout'], de: ['7-DSG Getriebe', 'FWD Antrieb'], ru: ['КПП 7-DSG', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.9, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 7.9, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['291L CNG Boot', 'Variable Floor'], de: ['291L CNG-Kofferraum', 'Variabler Boden'], ru: ['Багажник 291л', 'Двойной пол'] } },
          payloadTowing: { score: 7.3, badges: { en: ['1,400 kg Braked', '510 kg Payload'], de: ['1,400 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,400 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.5, badges: { en: ['9.6s 0–100 km/h', '206 km/h Top'], de: ['9,6s 0–100 km/h', '206 km/h Spitze'], ru: ['9,6с 0–100 км/ч', 'Макс. 206 км/ч'] } },
          handlingAgility: { score: 7.2, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 9.4, badges: { en: ['4.0 kg CNG', '17.3 kg CNG + 9 L (~490 km)'], de: ['4,0 kg CNG', '17.3 kg CNG + 9 L (~490 km)'], ru: ['4,0 kg CNG', '17.3 kg CNG + 9 L (~490 km)'] } },
          taxInsuranceNorm: { score: 9, badges: { en: ['Euro 6d-TEMP', 'Low Petrol Tax'], de: ['Euro 6d-TEMP', 'Günstige Steuer'], ru: ['Euro 6d-TEMP', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.3,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: 'Every 4 yrs (Mandatory)', de: 'Alle 4 Jahre (Pflicht)', ru: 'Каждые 4 года (Обязательно)' }, action: { en: 'Mandatory CNG tank visual/safety inspection (GAP)', de: 'Vorgeschriebene CNG-Gastank-Prüfung (GAP)', ru: 'Обязательная поверка газовых баллонов CNG' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.8, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.5-tsi-150',
        engineRef: 'vag-1.5-tsi-150-cod',
        defaultGearboxId: 'mq250-6mt',
        gearboxes: [
          { id: 'mq250-6mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€15,300',
            specOverrides: {
              sprint0100: '8.3 s',
              topSpeed: '216 km/h',
              realWorldFuel: '6.0 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 7.7, badges: { en: ['8.3s 0–100 km/h'], de: ['8,3s 0–100 km/h'], ru: ['8,3с 0–100 км/ч'] } },
              efficiencyFuel: { score: 7.8, badges: { en: ['6.0 L/100km', '50L Tank Range'], de: ['6,0 L/100km', '50L Tankreichweite'], ru: ['6,0 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tsi-evo',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 150,
        drivetrain: 'FWD',
        engineBadge: '1.5 TSI EVO (150) • 150 HP',
        engineSubLabel: {
          en: 'DADA (03/2017–07/2020) • 6-MT • 250 Nm',
          de: 'DADA (03/2017–07/2020) • 6-Gang • 250 Nm',
          ru: 'DADA (03/2017–07/2020) • 6-МКПП • 250 Н·м'
        },
        originalMsrp: { en: '€25,500 New', de: '25.500 € Neu', ru: '€25 500 новый' },
        estUsedPrice: '€14,400',
        perkLabel: { en: 'Multi-Link Rear • Balanced All-Rounder', de: 'Mehrlenker-Achse • Top Allrounder', ru: 'Многорычажка сзади • Баланс во всём' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Plastic water-pump housing can seep at 90–140k km', 'DQ200 dry 7-DSG needs warm traffic check', 'MIB1/2 touchscreens can age'], de: ['Wasserpumpenmodul neigt bei 90–140 Tkm zu Lecks', 'Trocken-7-DSG warm auf Ruckeln prüfen', 'MIB1/2-Touchscreen teils träge'], ru: ['Пластиковый модуль помпы подтекает к 90–140 тыс. км', 'Сухой 7-DSG проверяйте в пробках', 'Сенсор MIB1/2 иногда сбоит'] },
        specOverrides: {
          engineName: { en: '1.5 TSI EVO (150) I4 Turbo', de: '1.5 TSI EVO (150) Reihenvierzylinder Turbo', ru: '1.5 TSI EVO (150) R4 Турбо' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '8.3 s',
          topSpeed: '216 km/h',
          realWorldFuel: '6.0 L/100km',
          tankRange: '50 L (~830 km)',
          euroNorm: 'Euro 6d-TEMP',
          taxInsurance: '@tierLowMod',
          serviceWear: '@tierLowMod'
        },
        subStats: {
          transmissionDriveline: { score: 8, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 8, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 8, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.5, badges: { en: ['1,500 kg Braked', '510 kg Payload'], de: ['1,500 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,500 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 7.5, badges: { en: ['8.3s 0–100 km/h', '216 km/h Top'], de: ['8,3s 0–100 km/h', '216 km/h Spitze'], ru: ['8,3с 0–100 км/ч', 'Макс. 216 км/ч'] } },
          handlingAgility: { score: 7.7, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 7.6, badges: { en: ['6.0 L/100km', '50 L (~830 km)'], de: ['6,0 L/100km', '50 L (~830 km)'], ru: ['6,0 л/100 км', '50 L (~830 km)'] } },
          taxInsuranceNorm: { score: 8.2, badges: { en: ['Euro 6d-TEMP', 'Low Petrol Tax'], de: ['Euro 6d-TEMP', 'Günstige Steuer'], ru: ['Euro 6d-TEMP', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 7.8,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA211 timing belt kit, idlers & coolant flush', de: 'EA211 Zahnriemen-Satz inkl. Rollen & Kühlmittel', ru: 'Замена ремня ГРМ EA211, роликов и антифриза' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 9.2, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.8-tsi-180',
        defaultGearboxId: 'dq250-6-wet',
        gearboxes: [
          { id: 'dq250-6-wet', isDefault: true }
        ],
        buyerFitGroup: 'tsi-18-awd',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'petrol',
        hp: 180,
        drivetrain: 'AWD',
        engineBadge: '1.8 TSI 4Motion • 180 HP',
        engineSubLabel: {
          en: 'CJSB (05/2015–08/2018) • 6-DSG • 280 Nm',
          de: 'CJSB (05/2015–08/2018) • 6-DSG • 280 Nm',
          ru: 'CJSB (05/2015–08/2018) • 6-DSG • 280 Н·м'
        },
        originalMsrp: { en: '€32,800 New', de: '32.800 € Neu', ru: '€32 800 новый' },
        estUsedPrice: '€15,800',
        perkLabel: { en: '180 HP 4Motion AWD • Wet 6-DSG', de: '180 PS 4Motion Allrad • Nasses 6-DSG', ru: '180 л.с. Полный привод • Мокрый 6-DSG' },
        remarkablePositives: { en: ['Quiet belt-driven EA211 refinement', 'Benchmark ~67.5 dB MQB cabin', '5-star Euro NCAP & physical dials', 'Strong resale & affordable parts'], de: ['Laufruhiger EA211-Zahnriemenmotor', 'Sehr leiser (~67,5 dB) MQB-Innenraum', '5★ Euro NCAP & echte Drehregler', 'Hoher Restwert & günstige Teile'], ru: ['Тихий ременной мотор EA211', 'Эталонная шумоизоляция (~67,5 дБ)', '5★ Euro NCAP и физические кнопки', 'Высокая ликвидность и доступное ТО'] },
        notableNegatives: { en: ['Higher fuel use (~7.7 L/100km)', 'Haldex AWD & wet DSG fluid upkeep', 'Thermostat housing can seep around 100k km'], de: ['Höherer Verbrauch (~7,7 L/100km)', 'Haldex- & Nass-DSG-Ölservice nötig', 'Thermostatgehäuse ab ca. 100 Tkm prüfen'], ru: ['Повышенный расход (~7,7 л/100 км)', 'Требует ТО муфты Haldex и 6-DSG', 'Корпус термостата подтекает к 100 тыс. км'] },
        specOverrides: {
          engineName: { en: '1.8 TSI 4Motion I4 Turbo', de: '1.8 TSI 4Motion Reihenvierzylinder Turbo', ru: '1.8 TSI 4Motion R4 Турбо' },
          forcedInduction: '@turbo',
          injection: '@dualInj',
          gearbox: '@dsg6Wet',
          clutchDmf: '@dualClutchWet',
          towingBraked: '1,800 kg',
          sprint0100: '7.8 s',
          topSpeed: '217 km/h',
          peakTorque: '280 Nm @ 1,350 rpm',
          passingPunch: { en: 'Strong · Clean Mid-Range Pull', de: 'Kräftig · Souveräner Durchzug', ru: 'Уверенная тяга в середине' },
          realWorldFuel: '7.7 L/100km',
          tankRange: '55 L (~715 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierModHigh',
          timingDrive: '@chain',
          serviceWear: '@tierModHigh'
        },
        subStats: {
          powertrainDurability: {
            score: 7.5,
            badges: { en: ['CJSB Powertrain', 'Chain Drive'], de: ['CJSB Antrieb', 'Steuerkette'], ru: ['Мотор CJSB', 'Цепь ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.8 TSI 4Motion I4 Turbo', de: '1.8 TSI 4Motion Reihenvierzylinder Turbo', ru: '1.8 TSI 4Motion R4 Турбо' } },
                  { k: 'engineCode', v: 'CJSB' },
                  { k: 'displacement', v: '1,798 cc · I4 Turbo' },
                  { k: 'output', v: { en: '132 kW (180 HP)', de: '132 kW (180 PS)', ru: '132 кВт (180 л.с.)' } }
                ],
                note: { en: 'Gen 3 EA888 resolves earlier piston-ring oil consumption issues.', de: 'EA888 Gen 3 beseitigt das frühere Kolbenring-Ölverbrauchsproblem.', ru: 'Мотор EA888 Gen 3 избавлен от прежнего масложора поршневых колец.' }
              },
              forcedInduction: '@turboPetrol',
              injection: '@directInjPetrol'
            },
            dossier: {
              en: {
                headline: 'Chain-Driven 1.8 TSI EA888 Gen 3 — Strong Punch, Check Thermostat',
                strengths: ['Gen 3 EA888 resolves earlier piston-ring oil consumption issues.'],
                watchouts: ['Plastic thermostat/water-pump housing coolant leaks around 90–140k km.'],
                beforeYouBuy: [
                  'Inspect coolant reservoir level and check around the thermostat/water-pump housing for pink residue.',
                  'Listen at cold start for smooth idle and clean turbocharger spool without rattling.',
                  'Verify 15,000 km annual oil-change history rather than stretched 30,000 km LongLife intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Annual oil service (15,000 km max) & cabin filter', cost: '€180–€250', ifIgnored: 'Accelerated varnish & ring fouling', damageCost: '€500+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Spark/glow plugs, brake fluid & intake inspection', cost: '€210–€320', ifIgnored: 'Misfires or sluggish cold starts', damageCost: '€600–€1,100' },
                  { tier: 'orange', km: '90,000–135,000 km / 6–9 yrs', action: 'Water pump / thermostat housing & coolant flush', cost: '€480–€780', ifIgnored: 'Coolant loss & head-gasket overheat', damageCost: '€1,800–€3,200' },
                  { tier: 'orange', km: '135,000–180,000 km / 9–12 yrs', action: 'Clutch / DSG service & front wishbone bushes', cost: '€650–€1,250', ifIgnored: 'Driveline judder or uneven tyre wear', damageCost: '€1,400+' },
                  { tier: 'orange', km: '180,000–215,000 km / 11–14 yrs', action: 'Timing belt kit + tensioner & rear dampers', cost: '€620–€950', ifIgnored: 'Timing belt failure', damageCost: '€3,000–€4,800' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Turbocharger / intake carbon clean & emissions check', cost: '€750–€1,450', ifIgnored: 'Boost loss or failed MOT emissions', damageCost: '€2,200–€3,800' }
                ]
              },
              de: {
                headline: 'Ketten-1.8-TSI (EA888 Gen 3) — Durchzugsstark, Thermostat prüfen',
                strengths: ['EA888 Gen 3 beseitigt das frühere Kolbenring-Ölverbrauchsproblem.'],
                watchouts: ['Kunststoff-Thermostatgehäuse neigt bei 90–140 Tkm zu Kühlmittelverlust.'],
                beforeYouBuy: [
                  'Kühlmittelstand und Bereich um Wasserpumpe/Thermostat auf rosa Krusten prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne Rasseln am Turbolader achten.',
                  'Kurze 15.000-km-Ölwechsel statt ausgereizter 30.000-km-LongLife-Intervalle bevorzugen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel (max. 15 Tkm) & Innenraumfilter', cost: '180–250 €', ifIgnored: 'Verkokung der Kolbenringe', damageCost: '500 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zünd-/Glühkerzen & Bremsflüssigkeit erneuern', cost: '210–320 €', ifIgnored: 'Zündaussetzer oder zäher Kaltstart', damageCost: '600–1.100 €' },
                  { tier: 'orange', km: '90.000–135.000 km / 6–9 J.', action: 'Wasserpumpe / Thermostatgehäuse & Kühlmittel', cost: '480–780 €', ifIgnored: 'Kühlmittelverlust & Überhitzung', damageCost: '1.800–3.200 €' },
                  { tier: 'orange', km: '135.000–180.000 km / 9–12 J.', action: 'Kupplung / DSG-Service & Querlenkerbuchsen', cost: '650–1.250 €', ifIgnored: 'Rupfen oder Sägezahn-Verschleiß', damageCost: '1.400 €+' },
                  { tier: 'orange', km: '180.000–215.000 km / 11–14 J.', action: 'Zahnriemen-Satz inkl. Spannrolle & Stoßdämpfer', cost: '620–950 €', ifIgnored: 'Zahnriemenriss / Motorschaden', damageCost: '3.000–4.800 €' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Turbolader / Ansaugtrakt-Reinigung & Abgasanlage', cost: '750–1.450 €', ifIgnored: 'Ladedruckverlust oder AU-Mangel', damageCost: '2.200–3.800 €' }
                ]
              },
              ru: {
                headline: 'Цепной 1.8 TSI EA888 Gen 3 — бодрый мотор, проверьте термостат',
                strengths: ['Мотор EA888 Gen 3 избавлен от прежнего масложора поршневых колец.'],
                watchouts: ['Пластиковый корпус термостата и помпы часто подтекает к 90–140 тыс. км.'],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и следы розовых подтёков на корпусе помпы и термостата.',
                  'На холодном запуске оцените ровность работы без дребезга актуатора турбины.',
                  'Выбирайте машины с заменой масла раз в 10–15 тыс. км вместо редкого LongLife.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Замена масла (не реже 15 тыс. км) и фильтров', cost: '€180–250', ifIgnored: 'Закоксовывание колец', damageCost: '€500+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи и замена тормозной жидкости', cost: '€210–320', ifIgnored: 'Пропуски зажигания или трудный пуск', damageCost: '€600–1 100' },
                  { tier: 'orange', km: '90–135 тыс. км / 6–9 лет', action: 'Замена помпы / термостата и антифриза', cost: '€480–780', ifIgnored: 'Утечка антифриза и перегрев', damageCost: '€1 800–3 200' },
                  { tier: 'orange', km: '135–180 тыс. км / 9–12 лет', action: 'Сцепление / сервис DSG и сайлентблоки рычагов', cost: '€650–1 250', ifIgnored: 'Рывки трансмиссии и износ шин', damageCost: '€1 400+' },
                  { tier: 'orange', km: '180–215 тыс. км / 11–14 лет', action: 'Комплект ГРМ и задние амортизаторы', cost: '€620–950', ifIgnored: 'Обрыв ремня ГРМ', damageCost: '€3 000–4 800' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия турбины, чистка впуска и экологии', cost: '€750–1 450', ifIgnored: 'Потеря тяги или провал ТО', damageCost: '€2 200–3 800' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 8.2, badges: { en: ['6-DSG Transmission', 'AWD Layout'], de: ['6-DSG Getriebe', 'AWD Antrieb'], ru: ['КПП 6-DSG', 'Привод AWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.9, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 8.1, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.4, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 8.1, badges: { en: ['1,800 kg Braked', '510 kg Payload'], de: ['1,800 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,800 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 7.8, badges: { en: ['7.8s 0–100 km/h', '217 km/h Top'], de: ['7,8s 0–100 km/h', '217 km/h Spitze'], ru: ['7,8с 0–100 км/ч', 'Макс. 217 км/ч'] } },
          midRangeTorquePassing: { score: 7.2, badges: { en: ['280 Nm @ 1,350', 'Strong · Clean Mid-Range Pull'], de: ['280 Nm @ 1,350', 'Kräftig · Souveräner Durchzug'], ru: ['280 Н·м @ 1,350', 'Уверенная тяга в середине'] } },
          handlingAgility: { score: 8.1, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 5.9, badges: { en: ['7.7 L/100km', '55 L (~715 km)'], de: ['7,7 L/100km', '55 L (~715 km)'], ru: ['7,7 л/100 км', '55 L (~715 km)'] } },
          taxInsuranceNorm: { score: 6.8, badges: { en: ['Euro 6', 'Low Petrol Tax'], de: ['Euro 6', 'Günstige Steuer'], ru: ['Euro 6', 'Низкий налог'] } },
          maintenanceRepairCosts: {
            score: 6.7,
            badges: { en: ['Wide Parts Supply', 'Chain Drive'], de: ['Günstige Teilelage', 'Steuerkette'], ru: ['Доступные запчасти', 'Цепь ГРМ'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Spark plugs & intake air filter service', de: 'Zündkerzen & Luftfilter-Service', ru: 'Свечи зажигания и воздушный фильтр' }, cost: '€170–€280' },
                { when: { en: '60,000 km / 3 yrs', de: '60.000 km / 3 Jahre', ru: '60 000 км / 3 года' }, action: { en: 'Haldex 4Motion AWD fluid & filter service + coolant flush', de: 'Haldex-Allrad-Ölservice inkl. Siebreinigung', ru: 'Обслуживание муфты Haldex 4Motion и замена антифриза' }, cost: '€210–€320' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '110,000–165,000 km', de: '110.000–165.000 km', ru: '110–165 тыс. км' }, action: { en: 'Turbo wastegate actuator / intake valve carbon clean', de: 'Turbolader-Gestänge / Einlassventile reinigen', ru: 'Актуатор вестгейта / чистка впускных клапанов' }, cost: '€420–€880', risk: { en: 'Boost limp mode or rough cold-start misfires', de: 'Ladedruck-Notlauf oder unruhiger Kaltlauf', ru: 'Аварийный режим наддува или троение' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.8, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.6-tdi-90',
        defaultGearboxId: 'mq250-5mt',
        gearboxes: [
          { id: 'mq250-5mt', isDefault: true }
        ],
        buyerFitGroup: 'tdi-16',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'diesel',
        hp: 90,
        drivetrain: 'FWD',
        engineBadge: '1.6 TDI (90) • 90 HP',
        engineSubLabel: {
          en: 'CLHB / CRKA (04/2013–03/2017) • 5-MT • 230 Nm',
          de: 'CLHB / CRKA (04/2013–03/2017) • 5-Gang • 230 Nm',
          ru: 'CLHB / CRKA (04/2013–03/2017) • 5-МКПП • 230 Н·м'
        },
        originalMsrp: { en: '€20,825 New', de: '20.825 € Neu', ru: '€20 825 новый' },
        estUsedPrice: '€7,800',
        perkLabel: { en: '900+ km Tank Range • Low Diesel Burn', de: '900+ km Reichweite • Sparsamer TDI', ru: 'Запас хода 900+ км • Тяговитый TDI' },
        remarkablePositives: { en: ['4.5 L/100km real-world economy', 'Strong 230 Nm torque & quiet MQB cabin', '210,000 km timing belt interval', '5-star Euro NCAP & physical dials'], de: ['4,5 L/100km Praxisverbrauch', 'Kräftige 230 Nm & ruhiger MQB-Innenraum', '210.000 km Zahnriemen-Intervall', '5★ Euro NCAP & echte Drehregler'], ru: ['Реальный расход 4,5 л/100 км', 'Тяга 230 Н·м и тихий салон MQB', 'Ремень ГРМ на 210 000 км', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['Modest motorway acceleration', '5-speed manual revs higher at 130 km/h', 'Thermostat / water pump can seep around 110k km'], de: ['Zurückhaltende Autobahn-Beschleunigung', '5-Gang dreht bei 130 km/h höher', 'Wasserpumpenmodul ab ca. 110 Tkm prüfen'], ru: ['Спокойная динамика на трассе', '5-ступ. МКПП держит выше обороты на 130 км/ч', 'Осмотрите корпус помпы к 110 тыс. км'] },
        specOverrides: {
          engineName: { en: '1.6 TDI (90) I4 Turbo-Diesel', de: '1.6 TDI (90) Reihenvierzylinder Turbodiesel', ru: '1.6 TDI (90) R4 Турбодизель' },
          forcedInduction: '@turbo',
          injection: '@commonRail',
          gearbox: '@manual5',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,400 kg',
          sprint0100: '11.9 s',
          topSpeed: '185 km/h',
          peakTorque: '230 Nm @ 1,400 rpm',
          passingPunch: { en: 'Adequate Urban · Plan Overtakes', de: 'Stadttauglich · Überholen planen', ru: 'Для города · Обгон с запасом' },
          realWorldFuel: '4.5 L/100km',
          tankRange: '50 L (~1,110 km)',
          euroNorm: 'Euro 5/6',
          taxInsurance: '@tierMod',
          timingDrive: '@belt',
          serviceWear: '@tierMod'
        },
        subStats: {
          powertrainDurability: {
            score: 7.6,
            badges: { en: ['CLHB / CRKA Powertrain', 'Belt Drive'], de: ['CLHB / CRKA Antrieb', 'Zahnriemen'], ru: ['Мотор CLHB / CRKA', 'Ремень ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '1.6 TDI (90) I4 Turbo-Diesel', de: '1.6 TDI (90) Reihenvierzylinder Turbodiesel', ru: '1.6 TDI (90) R4 Турбодизель' } },
                  { k: 'engineCode', v: 'CLHB / CRKA' },
                  { k: 'displacement', v: '1,598 cc · I4 Turbo-Diesel' },
                  { k: 'output', v: { en: '66 kW (90 HP)', de: '66 kW (90 PS)', ru: '66 кВт (90 л.с.)' } }
                ],
                note: { en: 'Long-life timing belt (210,000 km interval) and strong motorway endurance.', de: 'Langlebiger Zahnriemen (210.000 km Intervall) und hohe Langstrecken-Festigkeit.', ru: 'Долговечный ремень ГРМ (регламент 210 тыс. км) и большой ресурс на трассе.' }
              },
              forcedInduction: '@turboPetrol',
              injection: '@commonRailDi'
            },
            dossier: {
              en: {
                headline: 'Durable EA288 Diesel — Watch Water Pump & DPF History',
                strengths: ['Long-life timing belt (210,000 km interval) and strong motorway endurance.'],
                watchouts: ['Switchable water pump sleeve can stick and cause overheating around 110–160k km.'],
                beforeYouBuy: [
                  'Inspect coolant reservoir level and check around the thermostat/water-pump housing for pink residue.',
                  'Listen at cold start for smooth idle and clean turbocharger spool without rattling.',
                  'Verify 15,000 km annual oil-change history rather than stretched 30,000 km LongLife intervals.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45,000 km / 1–3 yrs', action: 'Annual oil service (15,000 km max) & cabin filter', cost: '€180–€250', ifIgnored: 'Accelerated varnish & ring fouling', damageCost: '€500+' },
                  { tier: 'yellow', km: '45,000–90,000 km / 3–6 yrs', action: 'Spark/glow plugs, brake fluid & intake inspection', cost: '€210–€320', ifIgnored: 'Misfires or sluggish cold starts', damageCost: '€600–€1,100' },
                  { tier: 'orange', km: '90,000–135,000 km / 6–9 yrs', action: 'Water pump / thermostat housing & coolant flush', cost: '€480–€780', ifIgnored: 'Coolant loss & head-gasket overheat', damageCost: '€1,800–€3,200' },
                  { tier: 'orange', km: '135,000–180,000 km / 9–12 yrs', action: 'Clutch / DSG service & front wishbone bushes', cost: '€650–€1,250', ifIgnored: 'Driveline judder or uneven tyre wear', damageCost: '€1,400+' },
                  { tier: 'orange', km: '180,000–215,000 km / 11–14 yrs', action: 'Timing belt kit + tensioner & rear dampers', cost: '€620–€950', ifIgnored: 'Timing belt failure', damageCost: '€3,000–€4,800' },
                  { tier: 'red', km: '215,000–250,000+ km / 13–16 yrs', action: 'Turbocharger / intake carbon clean & emissions check', cost: '€750–€1,450', ifIgnored: 'Boost loss or failed MOT emissions', damageCost: '€2,200–€3,800' }
                ]
              },
              de: {
                headline: 'Langlebiger EA288-Diesel — Wasserpumpe & DPF-Historie prüfen',
                strengths: ['Langlebiger Zahnriemen (210.000 km Intervall) und hohe Langstrecken-Festigkeit.'],
                watchouts: ['Schaltbare Wasserpumpe klemmt teils bei 110–160 Tkm (Überhitzungsgefahr).'],
                beforeYouBuy: [
                  'Kühlmittelstand und Bereich um Wasserpumpe/Thermostat auf rosa Krusten prüfen.',
                  'Beim Kaltstart auf ruhigen Leerlauf ohne Rasseln am Turbolader achten.',
                  'Kurze 15.000-km-Ölwechsel statt ausgereizter 30.000-km-LongLife-Intervalle bevorzugen.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45.000 km / 1–3 J.', action: 'Jährlicher Ölwechsel (max. 15 Tkm) & Innenraumfilter', cost: '180–250 €', ifIgnored: 'Verkokung der Kolbenringe', damageCost: '500 €+' },
                  { tier: 'yellow', km: '45.000–90.000 km / 3–6 J.', action: 'Zünd-/Glühkerzen & Bremsflüssigkeit erneuern', cost: '210–320 €', ifIgnored: 'Zündaussetzer oder zäher Kaltstart', damageCost: '600–1.100 €' },
                  { tier: 'orange', km: '90.000–135.000 km / 6–9 J.', action: 'Wasserpumpe / Thermostatgehäuse & Kühlmittel', cost: '480–780 €', ifIgnored: 'Kühlmittelverlust & Überhitzung', damageCost: '1.800–3.200 €' },
                  { tier: 'orange', km: '135.000–180.000 km / 9–12 J.', action: 'Kupplung / DSG-Service & Querlenkerbuchsen', cost: '650–1.250 €', ifIgnored: 'Rupfen oder Sägezahn-Verschleiß', damageCost: '1.400 €+' },
                  { tier: 'orange', km: '180.000–215.000 km / 11–14 J.', action: 'Zahnriemen-Satz inkl. Spannrolle & Stoßdämpfer', cost: '620–950 €', ifIgnored: 'Zahnriemenriss / Motorschaden', damageCost: '3.000–4.800 €' },
                  { tier: 'red', km: '215.000–250.000+ km / 13–16 J.', action: 'Turbolader / Ansaugtrakt-Reinigung & Abgasanlage', cost: '750–1.450 €', ifIgnored: 'Ladedruckverlust oder AU-Mangel', damageCost: '2.200–3.800 €' }
                ]
              },
              ru: {
                headline: 'Ресурсный дизель EA288 — следите за помпой и сажевым фильтром',
                strengths: ['Долговечный ремень ГРМ (регламент 210 тыс. км) и большой ресурс на трассе.'],
                watchouts: ['Управляемая помпа может заклинить на 110–160 тыс. км (риск перегрева).'],
                beforeYouBuy: [
                  'Проверьте уровень антифриза и следы розовых подтёков на корпусе помпы и термостата.',
                  'На холодном запуске оцените ровность работы без дребезга актуатора турбины.',
                  'Выбирайте машины с заменой масла раз в 10–15 тыс. км вместо редкого LongLife.'
                ],
                highMileage: [
                  { tier: 'yellow', km: '0–45 тыс. км / 1–3 г.', action: 'Замена масла (не реже 15 тыс. км) и фильтров', cost: '€180–250', ifIgnored: 'Закоксовывание колец', damageCost: '€500+' },
                  { tier: 'yellow', km: '45–90 тыс. км / 3–6 лет', action: 'Свечи и замена тормозной жидкости', cost: '€210–320', ifIgnored: 'Пропуски зажигания или трудный пуск', damageCost: '€600–1 100' },
                  { tier: 'orange', km: '90–135 тыс. км / 6–9 лет', action: 'Замена помпы / термостата и антифриза', cost: '€480–780', ifIgnored: 'Утечка антифриза и перегрев', damageCost: '€1 800–3 200' },
                  { tier: 'orange', km: '135–180 тыс. км / 9–12 лет', action: 'Сцепление / сервис DSG и сайлентблоки рычагов', cost: '€650–1 250', ifIgnored: 'Рывки трансмиссии и износ шин', damageCost: '€1 400+' },
                  { tier: 'orange', km: '180–215 тыс. км / 11–14 лет', action: 'Комплект ГРМ и задние амортизаторы', cost: '€620–950', ifIgnored: 'Обрыв ремня ГРМ', damageCost: '€3 000–4 800' },
                  { tier: 'red', km: '215–250+ тыс. км / 13–16 лет', action: 'Ревизия турбины, чистка впуска и экологии', cost: '€750–1 450', ifIgnored: 'Потеря тяги или провал ТО', damageCost: '€2 200–3 800' }
                ]
              }
            }
          },
          transmissionDriveline: { score: 8, badges: { en: ['5-MT Transmission', 'FWD Layout'], de: ['5-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 5-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.4, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.5, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.3, badges: { en: ['1,400 kg Braked', '510 kg Payload'], de: ['1,400 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,400 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 4.7, badges: { en: ['11.9s 0–100 km/h', '185 km/h Top'], de: ['11,9s 0–100 km/h', '185 km/h Spitze'], ru: ['11,9с 0–100 км/ч', 'Макс. 185 км/ч'] } },
          midRangeTorquePassing: { score: 6.4, badges: { en: ['230 Nm @ 1,400', 'Adequate Urban · Plan Overtakes'], de: ['230 Nm @ 1,400', 'Stadttauglich · Überholen planen'], ru: ['230 Н·м @ 1,400', 'Для города · Обгон с запасом'] } },
          handlingAgility: { score: 6.8, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 9.1, badges: { en: ['4.5 L/100km', '50 L (~1,110 km)'], de: ['4,5 L/100km', '50 L (~1,110 km)'], ru: ['4,5 л/100 км', '50 L (~1,110 km)'] } },
          taxInsuranceNorm: { score: 7.4, badges: { en: ['Euro 5/6', 'Moderate Tax'], de: ['Euro 5/6', 'Mittlere Steuer'], ru: ['Euro 5/6', 'Средний налог'] } },
          maintenanceRepairCosts: {
            score: 7.3,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Fuel filter & glow plug check (every 60–90k)', de: 'Kraftstofffilter & Glühkerzen-Check', ru: 'Топливный фильтр и проверка свечей накала' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, tensioners & water pump', de: 'EA288 Zahnriemen-Satz inkl. Spannrollen & Wasserpumpe', ru: 'Замена комплекта ремня ГРМ EA288 и помпы' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130–190 тыс. км' }, action: { en: 'DPF / EGR cooler cleaning & differential pressure sensor', de: 'DPF-Reinigung / AGR-Kühler & Differenzdrucksensor', ru: 'Чистка DPF / теплообменника EGR и датчик давления' }, cost: '€420–€880', risk: { en: 'Limp mode, clogged DPF or coolant loss into EGR', de: 'Notlauf, verstopfter DPF oder Kühlmittel im AGR', ru: 'Аварийный режим, засор DPF или утечка в EGR' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.4, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.6-tdi-105',
        engineRef: 'vag-1.6-tdi-105',
        defaultGearboxId: 'mq250-5mt',
        gearboxes: [
          { id: 'mq250-5mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€9,200',
            specOverrides: {
              sprint0100: '10.7 s',
              topSpeed: '192 km/h',
              realWorldFuel: '4.6 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 5.5, badges: { en: ['10.7s 0–100 km/h'], de: ['10,7s 0–100 km/h'], ru: ['10,7с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.8, badges: { en: ['4.6 L/100km', '50L Tank Range'], de: ['4,6 L/100km', '50L Tankreichweite'], ru: ['4,6 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tdi-16',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'diesel',
        hp: 105,
        drivetrain: 'FWD',
        engineBadge: '1.6 TDI (105) • 105 HP',
        engineSubLabel: {
          en: 'CLHA (11/2012–04/2014) • 5-MT • 250 Nm',
          de: 'CLHA (11/2012–04/2014) • 5-Gang • 250 Nm',
          ru: 'CLHA (11/2012–04/2014) • 5-МКПП • 250 Н·м'
        },
        originalMsrp: { en: '€21,825 New', de: '21.825 € Neu', ru: '€21 825 новый' },
        estUsedPrice: '€8,300',
        perkLabel: { en: '900+ km Tank Range • Low Diesel Burn', de: '900+ km Reichweite • Sparsamer TDI', ru: 'Запас хода 900+ км • Тяговитый TDI' },
        remarkablePositives: { en: ['4.6 L/100km real-world economy', 'Strong 250 Nm torque & quiet MQB cabin', '210,000 km timing belt interval', '5-star Euro NCAP & physical dials'], de: ['4,6 L/100km Praxisverbrauch', 'Kräftige 250 Nm & ruhiger MQB-Innenraum', '210.000 km Zahnriemen-Intervall', '5★ Euro NCAP & echte Drehregler'], ru: ['Реальный расход 4,6 л/100 км', 'Тяга 250 Н·м и тихий салон MQB', 'Ремень ГРМ на 210 000 км', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['DPF & EGR dislike short urban trips', 'Water pump can weep before 150,000 km', 'Higher diesel road tax'], de: ['DPF & AGR empfindlich bei reiner Kurzstrecke', 'Wasserpumpe schwitzt teils vor 150.000 km', 'Höhere Diesel-Kfz-Steuer'], ru: ['Сажевый фильтр и EGR не любят короткие поездки', 'Помпа может подтекать до 150 тыс. км', 'Выше налог и ТО дизеля'] },
        specOverrides: {
          engineName: { en: '1.6 TDI (105) I4 Turbo-Diesel', de: '1.6 TDI (105) Reihenvierzylinder Turbodiesel', ru: '1.6 TDI (105) R4 Турбодизель' },
          gearbox: '@manual5',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '10.7 s',
          topSpeed: '192 km/h',
          realWorldFuel: '4.6 L/100km',
          tankRange: '50 L (~1,085 km)',
          euroNorm: 'Euro 5',
          taxInsurance: '@tierMod',
          serviceWear: '@tierMod'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['5-MT Transmission', 'FWD Layout'], de: ['5-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 5-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.5, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.6, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.5, badges: { en: ['1,500 kg Braked', '510 kg Payload'], de: ['1,500 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,500 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 5.6, badges: { en: ['10.7s 0–100 km/h', '192 km/h Top'], de: ['10,7s 0–100 km/h', '192 km/h Spitze'], ru: ['10,7с 0–100 км/ч', 'Макс. 192 км/ч'] } },
          handlingAgility: { score: 6.9, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 9.0, badges: { en: ['4.6 L/100km', '50 L (~1,085 km)'], de: ['4,6 L/100km', '50 L (~1,085 km)'], ru: ['4,6 л/100 км', '50 L (~1,085 km)'] } },
          taxInsuranceNorm: { score: 7.2, badges: { en: ['Euro 5', 'Moderate Tax'], de: ['Euro 5', 'Mittlere Steuer'], ru: ['Euro 5', 'Средний налог'] } },
          maintenanceRepairCosts: {
            score: 7.3,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Fuel filter & glow plug check (every 60–90k)', de: 'Kraftstofffilter & Glühkerzen-Check', ru: 'Топливный фильтр и проверка свечей накала' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, tensioners & water pump', de: 'EA288 Zahnriemen-Satz inkl. Spannrollen & Wasserpumpe', ru: 'Замена комплекта ремня ГРМ EA288 и помпы' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130–190 тыс. км' }, action: { en: 'DPF / EGR cooler cleaning & differential pressure sensor', de: 'DPF-Reinigung / AGR-Kühler & Differenzdrucksensor', ru: 'Чистка DPF / теплообменника EGR и датчик давления' }, cost: '€420–€880', risk: { en: 'Limp mode, clogged DPF or coolant loss into EGR', de: 'Notlauf, verstopfter DPF oder Kühlmittel im AGR', ru: 'Аварийный режим, засор DPF или утечка в EGR' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.4, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.6-tdi-110',
        engineRef: 'vag-1.6-tdi-110',
        defaultGearboxId: 'mq250-5mt',
        gearboxes: [
          { id: 'mq250-5mt', isDefault: true },
          {
            id: 'mq250-6mt',
            estUsedPrice: '€10,100',
            specOverrides: {
              sprint0100: '10.5 s',
              topSpeed: '195 km/h',
              realWorldFuel: '4.5 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 8.0, badges: { en: ['Crisp 6-MT'], de: ['Präzises 6-Gang'], ru: ['Чёткая 6-МКПП'] } },
              accelerationOvertaking: { score: 5.7, badges: { en: ['10.5s 0–100 km/h'], de: ['10,5s 0–100 km/h'], ru: ['10,5с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.9, badges: { en: ['4.5 L/100km', '50L Tank Range'], de: ['4,5 L/100km', '50L Tankreichweite'], ru: ['4,5 л/100 км', 'Бак 50л'] } }
            }
          },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€10,100',
            specOverrides: {
              sprint0100: '10.5 s',
              topSpeed: '195 km/h',
              realWorldFuel: '4.5 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 5.7, badges: { en: ['10.5s 0–100 km/h'], de: ['10,5s 0–100 km/h'], ru: ['10,5с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.9, badges: { en: ['4.5 L/100km', '50L Tank Range'], de: ['4,5 L/100km', '50L Tankreichweite'], ru: ['4,5 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tdi-16',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'diesel',
        hp: 110,
        drivetrain: 'FWD',
        engineBadge: '1.6 TDI (110) • 110 HP',
        engineSubLabel: {
          en: 'CRKB / CXXB (04/2014–03/2017) • 5-MT • 250 Nm',
          de: 'CRKB / CXXB (04/2014–03/2017) • 5-Gang • 250 Nm',
          ru: 'CRKB / CXXB (04/2014–03/2017) • 5-МКПП • 250 Н·м'
        },
        originalMsrp: { en: '€22,600 New', de: '22.600 € Neu', ru: '€22 600 новый' },
        estUsedPrice: '€9,200',
        perkLabel: { en: '900+ km Tank Range • Low Diesel Burn', de: '900+ km Reichweite • Sparsamer TDI', ru: 'Запас хода 900+ км • Тяговитый TDI' },
        remarkablePositives: { en: ['4.5 L/100km real-world economy', 'Strong 250 Nm torque & quiet MQB cabin', '210,000 km timing belt interval', '5-star Euro NCAP & physical dials'], de: ['4,5 L/100km Praxisverbrauch', 'Kräftige 250 Nm & ruhiger MQB-Innenraum', '210.000 km Zahnriemen-Intervall', '5★ Euro NCAP & echte Drehregler'], ru: ['Реальный расход 4,5 л/100 км', 'Тяга 250 Н·м и тихий салон MQB', 'Ремень ГРМ на 210 000 км', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['DPF & EGR dislike short urban trips', 'Water pump can weep before 150,000 km', 'Higher diesel road tax'], de: ['DPF & AGR empfindlich bei reiner Kurzstrecke', 'Wasserpumpe schwitzt teils vor 150.000 km', 'Höhere Diesel-Kfz-Steuer'], ru: ['Сажевый фильтр и EGR не любят короткие поездки', 'Помпа может подтекать до 150 тыс. км', 'Выше налог и ТО дизеля'] },
        specOverrides: {
          engineName: { en: '1.6 TDI (110) I4 Turbo-Diesel', de: '1.6 TDI (110) Reihenvierzylinder Turbodiesel', ru: '1.6 TDI (110) R4 Турбодизель' },
          gearbox: '@manual5',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '10.5 s',
          topSpeed: '195 km/h',
          realWorldFuel: '4.5 L/100km',
          tankRange: '50 L (~1,110 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierMod',
          serviceWear: '@tierMod'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['5-MT Transmission', 'FWD Layout'], de: ['5-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 5-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.1, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.8, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.5, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.6, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 7.9, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.5, badges: { en: ['1,500 kg Braked', '510 kg Payload'], de: ['1,500 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,500 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 5.8, badges: { en: ['10.5s 0–100 km/h', '195 km/h Top'], de: ['10,5s 0–100 km/h', '195 km/h Spitze'], ru: ['10,5с 0–100 км/ч', 'Макс. 195 км/ч'] } },
          handlingAgility: { score: 7, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 9.1, badges: { en: ['4.5 L/100km', '50 L (~1,110 km)'], de: ['4,5 L/100km', '50 L (~1,110 km)'], ru: ['4,5 л/100 км', '50 L (~1,110 km)'] } },
          taxInsuranceNorm: { score: 7.4, badges: { en: ['Euro 6', 'Moderate Tax'], de: ['Euro 6', 'Mittlere Steuer'], ru: ['Euro 6', 'Средний налог'] } },
          maintenanceRepairCosts: {
            score: 7.3,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Fuel filter & glow plug check (every 60–90k)', de: 'Kraftstofffilter & Glühkerzen-Check', ru: 'Топливный фильтр и проверка свечей накала' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, tensioners & water pump', de: 'EA288 Zahnriemen-Satz inkl. Spannrollen & Wasserpumpe', ru: 'Замена комплекта ремня ГРМ EA288 и помпы' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130–190 тыс. км' }, action: { en: 'DPF / EGR cooler cleaning & differential pressure sensor', de: 'DPF-Reinigung / AGR-Kühler & Differenzdrucksensor', ru: 'Чистка DPF / теплообменника EGR и датчик давления' }, cost: '€420–€880', risk: { en: 'Limp mode, clogged DPF or coolant loss into EGR', de: 'Notlauf, verstopfter DPF oder Kühlmittel im AGR', ru: 'Аварийный режим, засор DPF или утечка в EGR' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.5, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '1.6-tdi-115',
        engineRef: 'vag-1.6-tdi-115',
        defaultGearboxId: 'mq250-5mt',
        gearboxes: [
          { id: 'mq250-5mt', isDefault: true },
          {
            id: 'dq200-7-dry',
            estUsedPrice: '€12,400',
            specOverrides: {
              sprint0100: '10.2 s',
              topSpeed: '198 km/h',
              realWorldFuel: '4.6 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 6.5, badges: { en: ['Snappy 7-DSG (Dry Clutch)'], de: ['Flinkes Trocken-7-DSG'], ru: ['Быстрый сухой 7-DSG'] } },
              accelerationOvertaking: { score: 5.9, badges: { en: ['10.2s 0–100 km/h'], de: ['10,2s 0–100 km/h'], ru: ['10,2с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.8, badges: { en: ['4.6 L/100km', '50L Tank Range'], de: ['4,6 L/100km', '50L Tankreichweite'], ru: ['4,6 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tdi-16',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'diesel',
        hp: 115,
        drivetrain: 'FWD',
        engineBadge: '1.6 TDI (115) • 115 HP',
        engineSubLabel: {
          en: 'DDYA / DGTE (03/2017–07/2020) • 5-MT • 250 Nm',
          de: 'DDYA / DGTE (03/2017–07/2020) • 5-Gang • 250 Nm',
          ru: 'DDYA / DGTE (03/2017–07/2020) • 5-МКПП • 250 Н·м'
        },
        originalMsrp: { en: '€24,300 New', de: '24.300 € Neu', ru: '€24 300 новый' },
        estUsedPrice: '€11,500',
        perkLabel: { en: '900+ km Tank Range • Low Diesel Burn', de: '900+ km Reichweite • Sparsamer TDI', ru: 'Запас хода 900+ км • Тяговитый TDI' },
        remarkablePositives: { en: ['4.6 L/100km real-world economy', 'Strong 250 Nm torque & quiet MQB cabin', '210,000 km timing belt interval', '5-star Euro NCAP & physical dials'], de: ['4,6 L/100km Praxisverbrauch', 'Kräftige 250 Nm & ruhiger MQB-Innenraum', '210.000 km Zahnriemen-Intervall', '5★ Euro NCAP & echte Drehregler'], ru: ['Реальный расход 4,6 л/100 км', 'Тяга 250 Н·м и тихий салон MQB', 'Ремень ГРМ на 210 000 км', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['DPF & EGR dislike short urban trips', 'Water pump can weep before 150,000 km', 'Higher diesel road tax'], de: ['DPF & AGR empfindlich bei reiner Kurzstrecke', 'Wasserpumpe schwitzt teils vor 150.000 km', 'Höhere Diesel-Kfz-Steuer'], ru: ['Сажевый фильтр и EGR не любят короткие поездки', 'Помпа может подтекать до 150 тыс. км', 'Выше налог и ТО дизеля'] },
        specOverrides: {
          engineName: { en: '1.6 TDI (115) I4 Turbo-Diesel', de: '1.6 TDI (115) Reihenvierzylinder Turbodiesel', ru: '1.6 TDI (115) R4 Турбодизель' },
          gearbox: '@manual5',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,500 kg',
          sprint0100: '10.2 s',
          topSpeed: '198 km/h',
          realWorldFuel: '4.6 L/100km',
          tankRange: '50 L (~1,085 km)',
          euroNorm: 'Euro 6d-TEMP',
          taxInsurance: '@tierMod',
          serviceWear: '@tierMod'
        },
        subStats: {
          transmissionDriveline: { score: 7.9, badges: { en: ['5-MT Transmission', 'FWD Layout'], de: ['5-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 5-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 7.6, badges: { en: ['Quiet ~67.5 dB', 'Comfort Tuned'], de: ['Leise ~67,5 dB', 'Komfort-Fahrwerk'], ru: ['Тихо ~67,5 дБ', 'Комфортная'] } },
          interiorQualityFeatures: { score: 7.7, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.5, badges: { en: ['1,500 kg Braked', '510 kg Payload'], de: ['1,500 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,500 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 6.0, badges: { en: ['10.2s 0–100 km/h', '198 km/h Top'], de: ['10,2s 0–100 km/h', '198 km/h Spitze'], ru: ['10,2с 0–100 км/ч', 'Макс. 198 км/ч'] } },
          handlingAgility: { score: 7, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 9.0, badges: { en: ['4.6 L/100km', '50 L (~1,085 km)'], de: ['4,6 L/100km', '50 L (~1,085 km)'], ru: ['4,6 л/100 км', '50 L (~1,085 km)'] } },
          taxInsuranceNorm: { score: 7.6, badges: { en: ['Euro 6d-TEMP', 'Moderate Tax'], de: ['Euro 6d-TEMP', 'Mittlere Steuer'], ru: ['Euro 6d-TEMP', 'Средний налог'] } },
          maintenanceRepairCosts: {
            score: 7.3,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Fuel filter & glow plug check (every 60–90k)', de: 'Kraftstofffilter & Glühkerzen-Check', ru: 'Топливный фильтр и проверка свечей накала' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, tensioners & water pump', de: 'EA288 Zahnriemen-Satz inkl. Spannrollen & Wasserpumpe', ru: 'Замена комплекта ремня ГРМ EA288 и помпы' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130–190 тыс. км' }, action: { en: 'DPF / EGR cooler cleaning & differential pressure sensor', de: 'DPF-Reinigung / AGR-Kühler & Differenzdrucksensor', ru: 'Чистка DPF / теплообменника EGR и датчик давления' }, cost: '€420–€880', risk: { en: 'Limp mode, clogged DPF or coolant loss into EGR', de: 'Notlauf, verstopfter DPF oder Kühlmittel im AGR', ru: 'Аварийный режим, засор DPF или утечка в EGR' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.8, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      },
      {
        id: '2.0-tdi-150',
        engineRef: 'vag-2.0-tdi-150',
        defaultGearboxId: 'mq350-6mt',
        gearboxes: [
          { id: 'mq350-6mt', isDefault: true },
          {
            id: 'dq250-6-wet',
            estUsedPrice: '€13,700',
            specOverrides: {
              sprint0100: '8.6 s',
              topSpeed: '216 km/h',
              realWorldFuel: '5.1 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 8.0, badges: { en: ['Smooth Wet DSG'], de: ['Robustes Nass-DSG'], ru: ['Надёжный мокрый DSG'] } },
              accelerationOvertaking: { score: 7.4, badges: { en: ['8.6s 0–100 km/h'], de: ['8,6s 0–100 km/h'], ru: ['8,6с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.4, badges: { en: ['5.1 L/100km', '50L Tank Range'], de: ['5,1 L/100km', '50L Tankreichweite'], ru: ['5,1 л/100 км', 'Бак 50л'] } }
            }
          },
          {
            id: 'dq381-7-wet',
            estUsedPrice: '€13,700',
            specOverrides: {
              sprint0100: '8.6 s',
              topSpeed: '216 km/h',
              realWorldFuel: '5.1 L/100km'
            },
            subStatDeltas: {
              transmissionDriveline: { score: 8.2, badges: { en: ['Smooth Wet DSG'], de: ['Robustes Nass-DSG'], ru: ['Надёжный мокрый DSG'] } },
              accelerationOvertaking: { score: 7.4, badges: { en: ['8.6s 0–100 km/h'], de: ['8,6s 0–100 km/h'], ru: ['8,6с 0–100 км/ч'] } },
              efficiencyFuel: { score: 8.4, badges: { en: ['5.1 L/100km', '50L Tank Range'], de: ['5,1 L/100km', '50L Tankreichweite'], ru: ['5,1 л/100 км', 'Бак 50л'] } }
            }
          }
        ],
        buyerFitGroup: 'tdi-20',
        dossierGroup: 'mqb-standard',
        isDefault: false,
        fuelType: 'diesel',
        hp: 150,
        drivetrain: 'FWD',
        engineBadge: '2.0 TDI (150) • 150 HP',
        engineSubLabel: {
          en: 'CRBC / CRLB / DFFA (11/2012–07/2020) • 6-MT • 340 Nm',
          de: 'CRBC / CRLB / DFFA (11/2012–07/2020) • 6-Gang • 340 Nm',
          ru: 'CRBC / CRLB / DFFA (11/2012–07/2020) • 6-МКПП • 340 Н·м'
        },
        originalMsrp: { en: '€26,900 New', de: '26.900 € Neu', ru: '€26 900 новый' },
        estUsedPrice: '€12,800',
        perkLabel: { en: '900+ km Tank Range • Low Diesel Burn', de: '900+ km Reichweite • Sparsamer TDI', ru: 'Запас хода 900+ км • Тяговитый TDI' },
        remarkablePositives: { en: ['5.1 L/100km real-world economy', 'Strong 340 Nm torque & quiet MQB cabin', '210,000 km timing belt interval', '5-star Euro NCAP & physical dials'], de: ['5,1 L/100km Praxisverbrauch', 'Kräftige 340 Nm & ruhiger MQB-Innenraum', '210.000 km Zahnriemen-Intervall', '5★ Euro NCAP & echte Drehregler'], ru: ['Реальный расход 5,1 л/100 км', 'Тяга 340 Н·м и тихий салон MQB', 'Ремень ГРМ на 210 000 км', '5★ Euro NCAP и физические кнопки'] },
        notableNegatives: { en: ['DPF & EGR dislike short urban trips', 'Water pump can weep before 150,000 km', 'Higher diesel road tax'], de: ['DPF & AGR empfindlich bei reiner Kurzstrecke', 'Wasserpumpe schwitzt teils vor 150.000 km', 'Höhere Diesel-Kfz-Steuer'], ru: ['Сажевый фильтр и EGR не любят короткие поездки', 'Помпа может подтекать до 150 тыс. км', 'Выше налог и ТО дизеля'] },
        specOverrides: {
          engineName: { en: '2.0 TDI (150) I4 Turbo-Diesel', de: '2.0 TDI (150) Reihenvierzylinder Turbodiesel', ru: '2.0 TDI (150) R4 Турбодизель' },
          gearbox: '@manual6',
          clutchDmf: '@clutchDmf',
          towingBraked: '1,600 kg',
          sprint0100: '8.6 s',
          topSpeed: '216 km/h',
          realWorldFuel: '5.1 L/100km',
          tankRange: '50 L (~980 km)',
          euroNorm: 'Euro 6',
          taxInsurance: '@tierModHigh',
          serviceWear: '@tierMod'
        },
        subStats: {
          transmissionDriveline: { score: 8.2, badges: { en: ['6-MT Transmission', 'FWD Layout'], de: ['6-Gang Getriebe', 'FWD Antrieb'], ru: ['КПП 6-МКПП', 'Привод FWD'] } },
          buildQualityRust: { score: 8.2, badges: { en: ['Galvanized MQB', '12-Yr Rust Warranty'], de: ['Verzinkter MQB', '12 J. Rostgarantie'], ru: ['Оцинкованный MQB', 'Гарантия 12 лет'] } },
          electronicsReliability: { score: 7.9, badges: { en: ['Mature MQB Bus', 'Check MIB Screen'], de: ['Ausgereifte Elektronik', 'MIB-Display prüfen'], ru: ['Отлаженная электрика', 'Тест экрана MIB'] } },
          rideNoiseComfort: { score: 8, badges: { en: ['Quiet ~67.5 dB', 'Multi-Link Rear'], de: ['Leise ~67,5 dB', 'Mehrlenker-HA'], ru: ['Тихо ~67,5 дБ', 'Многорычажка'] } },
          interiorQualityFeatures: { score: 7.9, badges: { en: ['Physical Dials', 'Soft-Touch Cabin'], de: ['Echte Drehregler', 'Soft-Touch-Cockpit'], ru: ['Физ. кнопки', 'Мягкий пластик'] } },
          visibilityManeuverability: { score: 7.8, badges: { en: ['10.9m Turning', '4.26m Compact'], de: ['10,9m Wendekreis', '4,26m Kompakt'], ru: ['Разворот 10,9м', 'Длина 4,26м'] } },
          safetyProtection: { score: 8, badges: { en: ['5★ Euro NCAP', '7 Airbags + ESP'], de: ['5★ Euro NCAP', '7 Airbags + ESP'], ru: ['5★ Euro NCAP', '7 подушек + ESP'] } },
          passengerSpaceErgonomics: { score: 7.5, badges: { en: ['Good Rear Room', '2× ISOFIX'], de: ['Guter Fondplatz', '2× ISOFIX'], ru: ['Просторный ряд', '2× ISOFIX'] } },
          interiorBootSpace: { score: 6.5, badges: { en: ['380L Square Boot', 'Variable Floor'], de: ['380L Kofferraum', 'Variabler Boden'], ru: ['Багажник 380л', 'Двойной пол'] } },
          payloadTowing: { score: 7.8, badges: { en: ['1,600 kg Braked', '510 kg Payload'], de: ['1,600 kg Zuglast', '510 kg Zuladung'], ru: ['Прицеп 1,600 kg', 'Нагрузка 510 кг'] } },
          accelerationOvertaking: { score: 7.2, badges: { en: ['8.6s 0–100 km/h', '216 km/h Top'], de: ['8,6s 0–100 km/h', '216 km/h Spitze'], ru: ['8,6с 0–100 км/ч', 'Макс. 216 км/ч'] } },
          handlingAgility: { score: 7.6, badges: { en: ['MQB XDS+', 'Neutral Grip'], de: ['MQB XDS+', 'Sicheres Fahrverhalten'], ru: ['Шасси MQB XDS+', 'Точный руль'] } },
          brakingPerformance: { score: 8.4, badges: { en: ['4× Discs · ~35m', 'Multi-Collision Brake'], de: ['4× Scheiben · ~35m', 'Multikollisionsbremse'], ru: ['4× диски · ~35м', 'Тормоз при ДТП'] } },
          efficiencyFuel: { score: 8.5, badges: { en: ['5.1 L/100km', '50 L (~980 km)'], de: ['5,1 L/100km', '50 L (~980 km)'], ru: ['5,1 л/100 км', '50 L (~980 km)'] } },
          taxInsuranceNorm: { score: 7.1, badges: { en: ['Euro 6', 'Moderate Tax'], de: ['Euro 6', 'Mittlere Steuer'], ru: ['Euro 6', 'Средний налог'] } },
          maintenanceRepairCosts: {
            score: 7.2,
            badges: { en: ['Wide Parts Supply', '180–210k Belt'], de: ['Günstige Teilelage', '180–210 Tkm Riemen'], ru: ['Доступные запчасти', 'Ремень 180–210 тыс.'] },
            repairGuide: {
              routine: [
                { when: { en: '60,000 km / 4 yrs', de: '60.000 km / 4 Jahre', ru: '60 000 км / 4 года' }, action: { en: 'Fuel filter & glow plug check (every 60–90k)', de: 'Kraftstofffilter & Glühkerzen-Check', ru: 'Топливный фильтр и проверка свечей накала' }, cost: '€170–€280' },
                { when: { en: '180,000–210,000 km / 10 yrs', de: '180.000–210.000 km / 10 J.', ru: '180–210 тыс. км / 10 лет' }, action: { en: 'Replace EA288 timing belt kit, tensioners & water pump', de: 'EA288 Zahnriemen-Satz inkl. Spannrollen & Wasserpumpe', ru: 'Замена комплекта ремня ГРМ EA288 и помпы' }, cost: '€620–€950' },
                { when: { en: '100,000–120,000 km', de: '100.000–120.000 km', ru: '100–120 тыс. км' }, action: { en: 'Manual transmission oil & serpentine drive belt refresh', de: 'Schaltgetriebeöl & Keilrippenriemen erneuern', ru: 'Замена масла МКПП и приводного ремня' }, cost: '€180–€290' }
              ],
              critical: [
                { when: { en: '90,000–140,000 km', de: '90.000–140.000 km', ru: '90–140 тыс. км' }, action: { en: 'Thermostat / water-pump housing replacement', de: 'Wasserpumpen-/Thermostatmodul erneuern', ru: 'Замена модуля помпы и термостата' }, cost: '€480–€780', risk: { en: 'Coolant leak and engine overheating', de: 'Kühlmittelverlust und Überhitzung', ru: 'Утечка антифриза и перегрев двигателя' }, damage: '€1,800–€3,200' },
                { when: { en: '130,000–190,000 km', de: '130.000–190.000 km', ru: '130–190 тыс. км' }, action: { en: 'DPF / EGR cooler cleaning & differential pressure sensor', de: 'DPF-Reinigung / AGR-Kühler & Differenzdrucksensor', ru: 'Чистка DPF / теплообменника EGR и датчик давления' }, cost: '€420–€880', risk: { en: 'Limp mode, clogged DPF or coolant loss into EGR', de: 'Notlauf, verstopfter DPF oder Kühlmittel im AGR', ru: 'Аварийный режим, засор DPF или утечка в EGR' }, damage: '€1,400–€2,600' },
                { when: { en: '140,000–195,000 km', de: '140.000–195.000 km', ru: '140–195 тыс. км' }, action: { en: 'Front wishbone rear bushes & strut top-mount bearings', de: 'Querlenkerbuchsen vorn & Domlager erneuern', ru: 'Замена задних сайлентблоков рычагов и опор стоек' }, cost: '€340–€580', risk: { en: 'Knocking over bumps & inner tyre shoulder wear', de: 'Poltern bei Bodenwellen & einseitiger Reifenverschleiß', ru: 'Стуки на кочках и неравномерный износ шин' }, damage: '€900–€1,400' }
              ]
            }
          },
          depreciationResale: { score: 8.8, badges: { en: ['High Liquidity', 'Fast Resale'], de: ['Sehr gefragt', 'Hoher Restwert'], ru: ['Высокий спрос', 'Ликвидный'] } }
        }
      }
    ]
  },
  angles: ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  mirroredAngles: null,
  paints: [
    { name: 'Pure White', code: 'LC9A', hex: '#f4f6f9', glow: 'rgba(244, 246, 249, 0.16)' },
    { name: 'Oryx White Pearl', code: 'L0K1', hex: '#eceef2', glow: 'rgba(236, 238, 242, 0.16)' },
    { name: 'Reflex Silver Metallic', code: 'LA7W', hex: '#b6bec8', glow: 'rgba(182, 190, 200, 0.16)', isDefault: true },
    { name: 'Tungsten Silver Metallic', code: 'LB7W', hex: '#8b939d', glow: 'rgba(139, 147, 157, 0.18)' },
    { name: 'Indium Grey Metallic', code: 'LR7H', hex: '#545b63', glow: 'rgba(84, 91, 99, 0.18)' },
    { name: 'Deep Black Pearl', code: 'LC9X', hex: '#1a1d22', glow: 'rgba(70, 82, 98, 0.18)' },
    { name: 'Tornado Red', code: 'LY3D', hex: '#b81d24', glow: 'rgba(184, 29, 36, 0.2)' },
    { name: 'Atlantic Blue Metallic', code: 'LC5B', hex: '#284a70', glow: 'rgba(40, 74, 112, 0.2)' },
    { name: 'Night Blue Metallic', code: 'LH5X', hex: '#1c2b45', glow: 'rgba(28, 43, 69, 0.2)' },
    { name: 'Kurkuma Yellow Metallic', code: 'LH1X', hex: '#c79a26', glow: 'rgba(199, 154, 38, 0.2)' }
  ],
  engineDates: {    '1.0-tsi-85': '03/2017–07/2018',
    '1.0-tsi-110': '04/2017–08/2018',
    '1.0-tsi-115': '05/2015–07/2020',
    '1.2-tsi-86': '11/2012–03/2017',
    '1.2-tsi-105': '11/2012–04/2014',
    '1.2-tsi-110': '04/2014–03/2017',
    '1.4-tgi-110': '06/2013–08/2018',
    '1.4-tsi-125': '11/2012–03/2018',
    '1.4-tsi-140': '11/2012–04/2014',
    '1.4-tsi-150': '04/2014–03/2018',
    '1.5-tsi-130': '07/2017–07/2020',
    '1.5-tgi-130': '11/2018–07/2020',
    '1.5-tsi-150': '03/2017–07/2020',
    '1.8-tsi-180': '05/2015–08/2018',
    '1.6-tdi-90': '04/2013–03/2017',
    '1.6-tdi-105': '11/2012–04/2014',
    '1.6-tdi-110': '04/2014–03/2017',
    '1.6-tdi-115': '03/2017–07/2020',
    '2.0-tdi-150': '11/2012–07/2020'
  },
  inDepth: {
    defaultEngineId: '1.4-tsi-125',
    defaultGroupKey: 'tsi-mid',
    engineCosts: {      '1.0-tsi-85': { group: 'tsi-small', avgFuelL100: 5.4, fuelPrice: 1.76, tax: 96, ins: 490, service: 270 },
      '1.0-tsi-110': { group: 'tsi-small', avgFuelL100: 5.5, fuelPrice: 1.76, tax: 96, ins: 490, service: 270 },
      '1.0-tsi-115': { group: 'tsi-small', avgFuelL100: 5.5, fuelPrice: 1.76, tax: 96, ins: 490, service: 270 },
      '1.2-tsi-86': { group: 'tsi-small', avgFuelL100: 5.8, fuelPrice: 1.76, tax: 96, ins: 490, service: 270 },
      '1.2-tsi-105': { group: 'tsi-small', avgFuelL100: 5.9, fuelPrice: 1.76, tax: 96, ins: 490, service: 270 },
      '1.2-tsi-110': { group: 'tsi-small', avgFuelL100: 5.7, fuelPrice: 1.76, tax: 96, ins: 490, service: 270 },
      '1.4-tgi-110': { group: 'tgi-cng', avgFuelL100: 4.1, fuelPrice: 1.48, tax: 96, ins: 490, service: 270 },
      '1.4-tsi-125': { group: 'tsi-mid', avgFuelL100: 6.0, fuelPrice: 1.76, tax: 96, ins: 560, service: 270 },
      '1.4-tsi-140': { group: 'tsi-mid', avgFuelL100: 6.1, fuelPrice: 1.76, tax: 96, ins: 560, service: 270 },
      '1.4-tsi-150': { group: 'tsi-mid', avgFuelL100: 6.1, fuelPrice: 1.76, tax: 96, ins: 640, service: 270 },
      '1.5-tsi-130': { group: 'tsi-evo', avgFuelL100: 5.6, fuelPrice: 1.76, tax: 96, ins: 560, service: 270 },
      '1.5-tgi-130': { group: 'tgi-cng', avgFuelL100: 4.0, fuelPrice: 1.48, tax: 96, ins: 560, service: 270 },
      '1.5-tsi-150': { group: 'tsi-evo', avgFuelL100: 6.0, fuelPrice: 1.76, tax: 96, ins: 640, service: 270 },
      '1.8-tsi-180': { group: 'tsi-18-awd', avgFuelL100: 7.7, fuelPrice: 1.76, tax: 168, ins: 640, service: 380 },
      '1.6-tdi-90': { group: 'tdi-16', avgFuelL100: 4.5, fuelPrice: 1.68, tax: 215, ins: 490, service: 340 },
      '1.6-tdi-105': { group: 'tdi-16', avgFuelL100: 4.6, fuelPrice: 1.68, tax: 215, ins: 490, service: 340 },
      '1.6-tdi-110': { group: 'tdi-16', avgFuelL100: 4.5, fuelPrice: 1.68, tax: 215, ins: 490, service: 340 },
      '1.6-tdi-115': { group: 'tdi-16', avgFuelL100: 4.6, fuelPrice: 1.68, tax: 215, ins: 490, service: 340 },
      '2.0-tdi-150': { group: 'tdi-20', avgFuelL100: 5.1, fuelPrice: 1.68, tax: 215, ins: 640, service: 340 }
    },
    groups: {
      'tsi-small': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Solid Mid-Table', note: 'Clean belt-driven EA211 reliability; watch front wishbones.' },
            { source: 'ADAC Pannenstatistik', value: 'Low Breakdowns', note: 'EA211 engines cured the early Golf VI timing-chain issues.' },
            { source: 'Owner Survey', value: '91.8% Reliability', note: 'Appreciated for quiet cabin and low fuel bills.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solides Mittelfeld', note: 'Unauffällige EA211-Motoren; Querlenker und Bremsen im Blick behalten.' },
            { source: 'ADAC Pannenstatistik', value: 'Wenig Pannen', note: 'Zahnriemen-EA211 beseitigt frühere Golf-VI-Steuerkettenprobleme.' },
            { source: 'Käufer-Feedback', value: '91,8 % Zuverlässigkeit', note: 'Gelobt für ruhigen Innenraum und niedrigen Verbrauch.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Уверенный середняк', note: 'Надёжные моторы EA211; следите за рычагами и тормозами.' },
            { source: 'ADAC Pannenstatistik', value: 'Редкие поломки', note: 'Ременные EA211 избавились от цепных проблем Golf VI.' },
            { source: 'Опрос владельцев', value: '91,8% надёжность', note: 'Ценят за тишину в салоне и скромный расход.' }
          ]
        },
        extendedChecks: {
          en: ['Inspect coolant level and thermostat/water-pump housing for seepage.', 'Verify smooth 1st–2nd shifting if fitted with DQ200 7-DSG.'],
          de: ['Kühlmittelstand und Wasserpumpenmodul auf Dichtheit prüfen.', 'Bei 7-Gang-DSG (DQ200) ruhiges Anfahren in Gang 1–2 testen.'],
          ru: ['Проверьте уровень антифриза и корпус помпы на течи.', 'На 7-DSG DQ200 проверьте плавность трогания без рывков.']
        },
        savingsNote: {
          en: 'Small-displacement TSI models combine low road tax and insurance with ~5.5 L/100km mixed consumption.',
          de: 'Kleine TSI-Motoren sparen bei Kfz-Steuer, Versicherung und ~5,5 L/100km Praxisverbrauch.',
          ru: 'Компактные моторы TSI экономят на налогах, страховке и расходуют около 5,5 л/100 км.'
        },
        market: {
          supplyDemand: { en: 'Massive EU used supply makes clean Comfortline examples easy to find.', de: 'Riesiges Angebot erleichtert die Suche nach gepflegten Comfortline-Modellen.', ru: 'Огромный выбор на рынке упрощает поиск ухоженного авто.' },
          sweetSpot: { en: '2017–2019 1.0 TSI 115 Comfortline with <90,000 km (€10,500–€12,800).', de: '2017–2019 1.0 TSI 115 Comfortline unter 90 Tkm (10.500–12.800 €).', ru: '2017–2019 1.0 TSI 115 Comfortline до 90 тыс. км (€10 500–12 800).' },
          outlook3to5yr: { en: 'Strong compact-class value retention backed by universal buyer demand.', de: 'Starker Werterhalt durch konstant hohe Nachfrage im Kompaktsegment.', ru: 'Отличная ликвидность благодаря стабильному спросу на Golf.' }
        },
        watchoutExtra: {
          en: ['Test all touchscreen corners on MIB1/MIB2 infotainment units.'],
          de: ['Touchscreen-Ecken beim MIB1/MIB2-Infotainment auf Aussetzer prüfen.'],
          ru: ['Проверьте работу сенсора по всем углам экрана MIB1/MIB2.']
        }
      },
      'tsi-mid': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Above Average', note: 'Multi-link rear axle and EA211 1.4 TSI age cleanly with regular servicing.' },
            { source: 'ADAC Pannenstatistik', value: 'Strong Record', note: 'Very low roadside breakdown rate on post-2014 1.4 TSI models.' },
            { source: 'Owner Survey', value: '93.2% Reliability', note: 'Widely regarded as the best all-round Golf VII powertrain.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Überdurchschnittlich', note: 'Mehrlenker-Achse und 1.4 TSI EA211 altern bei Pflege sehr sauber.' },
            { source: 'ADAC Pannenstatistik', value: 'Starkes Ergebnis', note: 'Sehr geringe Pannenquote besonders bei Modellen ab Baujahr 2014.' },
            { source: 'Käufer-Feedback', value: '93,2 % Zuverlässigkeit', note: 'Gilt als ausgewogenster Antrieb im Golf VII.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Выше среднего', note: 'Многорычажка и 1.4 TSI EA211 отлично сохраняются при должном ТО.' },
            { source: 'ADAC Pannenstatistik', value: 'Высокий рейтинг', note: 'Минимум поломок на дороге у версий после 2014 года.' },
            { source: 'Опрос владельцев', value: '93,2% надёжность', note: 'Считается самым сбалансированным мотором Golf VII.' }
          ]
        },
        extendedChecks: {
          en: [
            'Confirm 15,000 km annual oil history rather than stretched 30,000 km LongLife intervals.',
            'Inspect plastic thermostat/water-pump housing for pink coolant crust or seepage.',
            'Test DQ200 7-DSG warm in slow stop-and-go traffic and uphill starts for any clutch judder.',
            'Check all MIB1/MIB2 touchscreen corners, electric parking brake, and rear subframe for rust.'
          ],
          de: [
            'Kurze 15.000-km-Ölwechsel statt überzogener 30.000-km-LongLife-Intervalle belegen lassen.',
            'Wasserpumpen-/Thermostatmodul auf rosa Kühlmittelkrusten oder leichte Undichtigkeit prüfen.',
            '7-Gang-DSG (DQ200) warm im Stop-and-Go sowie am Berg auf sanftes Anfahren testen.',
            'MIB1/MIB2-Touchscreen-Ecken, elektrische Parkbremse und Hinterachsträger auf Rost prüfen.'
          ],
          ru: [
            'Проверьте историю замены масла каждые 15 тыс. км вместо редких 30-тысячных LongLife.',
            'Осмотрите корпус помпы и термостата на розовые следы подтёков антифриза.',
            'На прогретом 7-DSG DQ200 проверьте плавность трогания в пробке и в горку без рывков.',
            'Проверьте все углы экрана MIB1/MIB2, электроручник и задний подрамник на коррозию.'
          ]
        },
        savingsNote: {
          en: '1.4 TSI 125–150 HP delivers 2.0-class performance at compact petrol tax and 6.0 L/100km fuel economy.',
          de: '1.4 TSI (125–150 PS) bietet souveränen Durchzug bei günstiger Steuer und ~6,0 L/100km Verbrauch.',
          ru: '1.4 TSI (125–150 л.с.) дарит отличную динамику при скромном налоге и расходе ~6,0 л/100 км.'
        },
        market: {
          supplyDemand: { en: 'Highest buyer demand in the used Golf VII market — clean Highline cars sell quickly.', de: 'Größte Nachfrage im Golf-VII-Markt — gepflegte Highline sind schnell vergriffen.', ru: 'Самый высокий спрос на вторичке — ухоженные Highline уходят быстро.' },
          sweetSpot: { en: '2016–2018 1.4 TSI 125/150 Highline manual with <100,000 km (€11,500–€14,200).', de: '2016–2018 1.4 TSI 125/150 Highline Handschalter unter 100 Tkm (11.500–14.200 €).', ru: '2016–2018 1.4 TSI 125/150 Highline МКПП до 100 тыс. км (€11 500–14 200).' },
          outlook3to5yr: { en: 'Top-tier resale value stability among European C-segment hatchbacks.', de: 'Spitzenwert beim Restwert unter europäischen Kompaktwagen.', ru: 'Один из лучших показателей остаточной стоимости в классе C.' }
        },
        watchoutExtra: {
          en: ['Inspect ACT cylinder-deactivation versions (140/150 HP) for smooth transition at steady 60–90 km/h.'],
          de: ['Bei ACT-Zylinderabschaltung (140/150 PS) auf ruckfreien Übergang bei 60–90 km/h achten.'],
          ru: ['На версиях с ACT (140/150 л.с.) проверьте незаметность отключения цилиндров на 60–90 км/ч.']
        }
      },
      'tsi-evo': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Low Defect Rate', note: 'Younger Mk7.5 fleet shows clean suspension and emissions results.' },
            { source: 'ADAC Pannenstatistik', value: 'Dependable', note: 'Strong reliability once 2018–2019 ECU kangarooing software update was applied.' },
            { source: 'Owner Survey', value: '92.4% Reliability', note: 'Praised for quiet motorway cruising and low fuel burn.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Niedrige Mängelquote', note: 'Junge Mk7.5-Flotte mit sehr sauberen Fahrwerks- und Abgaswerten.' },
            { source: 'ADAC Pannenstatistik', value: 'Zuverlässig', note: 'Nach dem 2018/2019er Software-Update gegen Kalt-Ruckeln sehr souverän.' },
            { source: 'Käufer-Feedback', value: '92,4 % Zuverlässigkeit', note: 'Gelobt für Laufruhe und sparsamen Autobahnverbrauch.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Низкий % поломок', note: 'Свежие рестайлинги Mk7.5 отлично проходят техосмотр.' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжный', note: 'После обновления ПО 2018–2019 годов работает ровно и без рывков.' },
            { source: 'Опрос владельцев', value: '92,4% надёжность', note: 'Хвалят за тишину и малый расход на трассе.' }
          ]
        },
        extendedChecks: {
          en: ['Test cold-engine acceleration in 1st–2nd gear to verify the VW ECU smoothness update is installed.'],
          de: ['Kalten Motor im 1.–2. Gang testen, ob das VW-Software-Update gegen Ruckeln aufgespielt wurde.'],
          ru: ['Проверьте разгон на холодном моторе на 1–2-й передаче (обновление ПО от рывков).']
        },
        savingsNote: {
          en: 'Miller-cycle 1.5 TSI EVO saves ~0.4–0.6 L/100km on steady motorway commutes.',
          de: 'Miller-Zyklus im 1.5 TSI EVO spart ca. 0,4–0,6 L/100km auf ruhigen Pendlerstrecken.',
          ru: 'Цикл Миллера в 1.5 TSI EVO экономит 0,4–0,6 л/100 км на трассе.'
        },
        market: {
          supplyDemand: { en: 'High demand for late 2018–2020 Mk7.5 models with Digital Cockpit.', de: 'Starke Nachfrage nach späten 2018–2020er Mk7.5-Modellen mit Digital Cockpit.', ru: 'Высокий спрос на свежие Mk7.5 2018–2020 годов с цифровой приборкой.' },
          sweetSpot: { en: '2018–2020 1.5 TSI 130/150 Highline with <75,000 km (€13,500–€16,200).', de: '2018–2020 1.5 TSI 130/150 Highline unter 75 Tkm (13.500–16.200 €).', ru: '2018–2020 1.5 TSI 130/150 Highline до 75 тыс. км (€13 500–16 200).' },
          outlook3to5yr: { en: 'Strong resale stability as one of the cleanest Euro 6d-TEMP compacts.', de: 'Sehr wertstabil als moderner Euro-6d-TEMP-Benziner.', ru: 'Высокая ликвидность благодаря свежему эко-классу Euro 6d-TEMP.' }
        },
        watchoutExtra: {
          en: ['Verify GPF (petrol particulate filter) regeneration if driven only on ultra-short hops.'],
          de: ['Bei reiner Kurzstrecke auf sauberen Lauf des Ottopartikelfilters (OPF) achten.'],
          ru: ['Уточните состояние сажевого фильтра GPF/OPF при чисто городской эксплуатации.']
        }
      },
      'tgi-cng': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Check Tank Corrosion', note: 'Ensure steel CNG tanks (2013–2018) passed periodic corrosion inspection.' },
            { source: 'ADAC Pannenstatistik', value: 'Low Breakdowns', note: 'Mechanically durable; pressure regulator seals age after 8+ yrs.' },
            { source: 'Owner Survey', value: '90.5% Reliability', note: 'Lowest fuel cost per km in the entire Golf VII range.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Gastanks prüfen', note: 'Stahltanks (2013–2018) auf Korrosion und gültige Tankprüfung checken.' },
            { source: 'ADAC Pannenstatistik', value: 'Wenig Pannen', note: 'Mechanisch robust; Gasdruckregler altert teils nach 8+ Jahren.' },
            { source: 'Käufer-Feedback', value: '90,5 % Zuverlässigkeit', note: 'Unschlagbar niedrige Kraftstoffkosten pro Kilometer.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Проверка баллонов', note: 'Проверьте стальные баллоны CNG (2013–2018) на коррозию и освидетельствование.' },
            { source: 'ADAC Pannenstatistik', value: 'Редкие отказы', note: 'Мотор крепкий; редуктор давления газа требует внимания к 8+ годам.' },
            { source: 'Опрос владельцев', value: '90,5% надёжность', note: 'Самая низкая стоимость километра во всей линейке Golf VII.' }
          ]
        },
        extendedChecks: {
          en: ['Verify CNG tank inspection stamps and smooth petrol-to-CNG changeover.'],
          de: ['Nachweis der Gastank-Prüfung und ruckfreies Umschalten auf Erdgas testen.'],
          ru: ['Проверьте документы освидетельствования баллонов и плавный переход на газ.']
        },
        savingsNote: {
          en: 'CNG operation cuts fuel bills by roughly 35–45% compared to petrol equivalents.',
          de: 'Erdgasbetrieb senkt die Kraftstoffkosten um rund 35–45 % gegenüber Benzin.',
          ru: 'Работа на метане снижает расходы на топливо примерно на 35–45%.'
        },
        market: {
          supplyDemand: { en: 'Niche demand tied closely to regional CNG filling-station coverage.', de: 'Nischenmarkt — stark abhängig von der lokalen CNG-Tankstellendichte.', ru: 'Нишевый спрос, напрямую зависящий от наличия метановых АГНКС.' },
          sweetSpot: { en: '2016–2018 1.4 TGI with full 50 L petrol tank and documented CNG service.', de: '2016–2018 1.4 TGI mit vollem 50-L-Benzintank und dokumentierter Gaswartung.', ru: '2016–2018 1.4 TGI с 50-л бензобаком и сервисной историей ГБО.' },
          outlook3to5yr: { en: 'Lower resale liquidity than standard TSI models due to shrinking CNG stations.', de: 'Geringere Nachfrage als beim TSI aufgrund rückläufiger CNG-Tankstellen.', ru: 'Ликвидность ниже, чем у обычных TSI, из-за узкой сети заправок.' }
        },
        watchoutExtra: {
          en: ['Note: 2019+ 1.5 TGI shrinks the emergency petrol tank to just 9 L.'],
          de: ['Hinweis: Ab 2019 besitzt der 1.5 TGI nur noch einen 9-L-Benzin-Nottank.'],
          ru: ['Важно: у 1.5 TGI с 2019 года резервный бензобак уменьшен до 9 литров.']
        }
      },
      'tsi-18-awd': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Strong Build', note: 'Check Haldex AWD pump and thermostat housing on higher-mileage units.' },
            { source: 'ADAC Pannenstatistik', value: 'Dependable', note: 'Gen 3 EA888 + wet 6-DSG is mechanically robust.' },
            { source: 'Owner Survey', value: '91.4% Reliability', note: 'Praised for subtle all-weather pace without GTI flash.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Solide Basis', note: 'Haldex-Allradpumpe und Thermostatgehäuse bei höherer Laufleistung prüfen.' },
            { source: 'ADAC Pannenstatistik', value: 'Zuverlässig', note: 'EA888 Gen 3 mit nassem 6-DSG gilt als standfeste Kombination.' },
            { source: 'Käufer-Feedback', value: '91,4 % Zuverlässigkeit', note: 'Geschätzt für souveräne Traktion im dezenten Serienkleid.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Крепкая база', note: 'На пробеге осмотрите насос Haldex и корпус термостата.' },
            { source: 'ADAC Pannenstatistik', value: 'Надёжный', note: 'Связка EA888 Gen 3 + мокрый 6-DSG отличается хорошим запасом прочности.' },
            { source: 'Опрос владельцев', value: '91,4% надёжность', note: 'Ценят за уверенный полный привод в скромном кузове.' }
          ]
        },
        extendedChecks: {
          en: ['Verify 60,000 km DQ250 wet-DSG oil changes and 3-year Haldex AWD fluid service.'],
          de: ['60.000-km-DSG-Ölwechsel (DQ250) und regelmäßigen Haldex-Ölwechsel belegen lassen.'],
          ru: ['Проверьте замену масла в DQ250 (раз в 60 тыс. км) и в муфте Haldex (раз в 3 года).']
        },
        savingsNote: {
          en: 'Expect ~1.5 L/100km higher fuel use and extra Haldex + DSG fluid services vs FWD.',
          de: 'Rund 1,5 L/100km Mehrverbrauch sowie Haldex- und DSG-Ölservice gegenüber FWD einplanen.',
          ru: 'Расход примерно на 1,5 л/100 км выше, плюс регулярное ТО муфты Haldex и 6-DSG.'
        },
        market: {
          supplyDemand: { en: 'Scarce European supply — mainly sold in Alpine and Nordic markets.', de: 'Seltenes Angebot — vorwiegend in Alpenregionen und Skandinavien verbreitet.', ru: 'Редкая версия на рынке — чаще встречается в альпийских и северных странах.' },
          sweetSpot: { en: '2016–2018 1.8 TSI 4Motion with full VW DSG/Haldex history (€14,500–€17,200).', de: '2016–2018 1.8 TSI 4Motion mit lückenlosem DSG-/Haldex-Service (14.500–17.200 €).', ru: '2016–2018 1.8 TSI 4Motion с полной историей DSG и Haldex (€14 500–17 200).' },
          outlook3to5yr: { en: 'Niche collector/alpine appeal holds values well.', de: 'Nischen-Nachfrage in Bergregionen hält den Restwert stabil.', ru: 'Стабильный спрос в горных и снежных регионах удерживает цену.' }
        },
        watchoutExtra: {
          en: ['Test tight full-lock low-speed turns for Haldex binding or rear diff whine.'],
          de: ['Bei engem Volleinschlag langsam rollen, um Haldex-Verspannungen auszuschließen.'],
          ru: ['Проверьте разворот с полностью вывернутым рулём на отсутствие гула и закусывания Haldex.']
        }
      },
      'tdi-16': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'High-Mileage Workhorse', note: 'Clean chassis; high-mileage fleet units need injector & DPF checks.' },
            { source: 'ADAC Pannenstatistik', value: 'Low Breakdowns', note: 'Reliable EA288 diesel when driven on regular motorway runs.' },
            { source: 'Owner Survey', value: '91.0% Reliability', note: '900+ km tank range keeps highway commuters happy.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Vielfahrer-Motor', note: 'Solide Basis; Flottenwagen brauchen Prüfung von Injektoren & DPF.' },
            { source: 'ADAC Pannenstatistik', value: 'Wenig Pannen', note: 'Robuster EA288-Diesel bei regelmäßiger Langstrecken-Nutzung.' },
            { source: 'Käufer-Feedback', value: '91,0 % Zuverlässigkeit', note: 'Über 900 km Reichweite überzeugen Pendler.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Трассовый трудяга', note: 'Крепкий кузов; на больших пробегах проверьте форсунки и DPF.' },
            { source: 'ADAC Pannenstatistik', value: 'Редкие отказы', note: 'Надёжный дизель EA288 при регулярной езде по трассе.' },
            { source: 'Опрос владельцев', value: '91,0% надёжность', note: 'Запас хода 900+ км радует при дальних поездках.' }
          ]
        },
        extendedChecks: {
          en: ['Check DPF soot load / regeneration frequency and listen for injector rattle under light throttle.'],
          de: ['DPF-Aschebeladung auslesen lassen und bei Teillast auf ruhigen Injektorlauf achten.'],
          ru: ['Проверьте заполнение сажевого фильтра DPF и ровность работы форсунок под нагрузкой.']
        },
        savingsNote: {
          en: '4.5 L/100km real-world consumption makes 1.6 TDI ideal for 25,000+ km/year commuters.',
          de: '4,5 L/100km Praxisverbrauch lohnen sich besonders ab ca. 20.000–25.000 km pro Jahr.',
          ru: 'Реальный расход ~4,5 л/100 км окупает дизель при пробегах от 20–25 тыс. км в год.'
        },
        market: {
          supplyDemand: { en: 'Abundant ex-fleet supply; prioritize private Euro 6 units with verified mileage.', de: 'Großes Ex-Flotten-Angebot — gepflegte Euro-6-Privatwagen bevorzugen.', ru: 'Много машин из корпоративных парков — ищите частные Euro 6 с честным пробегом.' },
          sweetSpot: { en: '2016–2018 1.6 TDI 110/115 Euro 6 Comfortline (<120,000 km, €9,200–€11,800).', de: '2016–2018 1.6 TDI 110/115 Euro 6 Comfortline (<120 Tkm, 9.200–11.800 €).', ru: '2016–2018 1.6 TDI 110/115 Euro 6 Comfortline (<120 тыс. км, €9 200–11 800).' },
          outlook3to5yr: { en: 'Euro 6 units hold value steadily; Euro 5 diesels face steeper city-ban discounts.', de: 'Euro-6-Modelle bleiben wertstabil; Euro-5-Diesel spüren stärkere Abschläge.', ru: 'Версии Euro 6 держат цену лучше, тогда как Euro 5 дешевле из-за эко-зон.' }
        },
        watchoutExtra: {
          en: ['Inspect switchable water pump and timing-belt interval (210,000 km / 10 yrs).'],
          de: ['Schaltbare Wasserpumpe und Zahnriemen-Wechselintervall (210.000 km) prüfen.'],
          ru: ['Проверьте управляемую помпу и регламент замены ремня ГРМ (210 тыс. км).']
        }
      },
      'tdi-20': {
        stats: {
          en: [
            { source: 'TÜV Report', value: 'Class Benchmark', note: 'High-mileage 2.0 TDI EA288 units regularly pass 250,000+ km cleanly.' },
            { source: 'ADAC Pannenstatistik', value: 'Strong Record', note: 'Durable block + wet 6/7-DSG handles heavy motorway miles effortlessly.' },
            { source: 'Owner Survey', value: '93.0% Reliability', note: 'Favorite long-distance European compact.' }
          ],
          de: [
            { source: 'TÜV-Report', value: 'Klassen-Referenz', note: 'Langstrecken-2.0-TDI erreichen bei Pflege regelmäßig über 250.000 km.' },
            { source: 'ADAC Pannenstatistik', value: 'Starkes Ergebnis', note: 'Robuster EA288-Block samt nassem 6-/7-DSG ideal für Vielfahrer.' },
            { source: 'Käufer-Feedback', value: '93,0 % Zuverlässigkeit', note: 'Beliebtester Langstrecken-Kompakter in Europa.' }
          ],
          ru: [
            { source: 'Отчёт TÜV', value: 'Эталон класса', note: 'Дизели 2.0 TDI EA288 при трассовой езде спокойно ходят 250+ тыс. км.' },
            { source: 'ADAC Pannenstatistik', value: 'Высокий рейтинг', note: 'Крепкий блок с мокрым 6/7-DSG отлично переносит большие пробеги.' },
            { source: 'Опрос владельцев', value: '93,0% надёжность', note: 'Лучший дальнобойный хэтчбек своего поколения.' }
          ]
        },
        extendedChecks: {
          en: ['Verify 60,000 km wet-DSG oil service, timing belt/water pump, and AdBlue system health (late Euro 6d).'],
          de: ['60.000-km-DSG-Ölwechsel, Wasserpumpe/Zahnriemen und ggf. AdBlue-System (Euro 6d) prüfen.'],
          ru: ['Проверьте замену масла в мокром DSG (60 тыс. км), помпу/ГРМ и систему AdBlue (Euro 6d).']
        },
        savingsNote: {
          en: '340 Nm punch with ~5.1 L/100km consumption — unmatched motorway efficiency for the pace.',
          de: '340 Nm Durchzug bei nur ~5,1 L/100km Realverbrauch — ideale Autobahn-Effizienz.',
          ru: 'Тяга 340 Н·м при реальном расходе ~5,1 л/100 км — эталон экономичности на трассе.'
        },
        market: {
          supplyDemand: { en: 'Strong private & commuter demand keeps clean 2.0 TDI Highline prices firm.', de: 'Hohe Pendler-Nachfrage hält gepflegte 2.0 TDI Highline preisstabil.', ru: 'Стабильный спрос на ухоженные 2.0 TDI Highline удерживает цены.' },
          sweetSpot: { en: '2016–2019 2.0 TDI 150 Highline (6-MT or 7-DSG DQ381, €12,200–€15,500).', de: '2016–2019 2.0 TDI 150 Highline (6-Gang oder 7-DSG DQ381, 12.200–15.500 €).', ru: '2016–2019 2.0 TDI 150 Highline (6-МКПП или 7-DSG DQ381, €12 200–15 500).' },
          outlook3to5yr: { en: 'Holds value very well among high-mileage diesel buyers.', de: 'Sehr wertstabil bei Vielfahrern.', ru: 'Отлично сохраняет остаточную стоимость среди дизельных авто.' }
        },
        watchoutExtra: {
          en: ['Listen for dual-mass flywheel chatter at idle on high-mileage examples.'],
          de: ['Bei hohen Laufleistungen im Leerlauf auf ZMS-Geräusche achten.'],
          ru: ['На больших пробегах прислушайтесь к двухмассовому маховику на холостых.']
        }
      }
    },
    trimsData: {
      sectionTitle: { en: 'EU / DE Trim Levels', de: 'EU / DE Ausstattungslinien', ru: 'Европейские комплектации' },
      sectionHint: { en: 'Used-market price gaps reflect comparable mileage and condition', de: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung & Zustand', ru: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии' },
      faceliftTitle: { en: 'Mk7.5 Mid-Cycle Facelift (2017–2020)', de: 'Mk7.5 Facelift-Upgrades (2017–2020)', ru: 'Рестайлинг Mk7.5 (2017–2020)' },
      faceliftKicker: { en: 'Facelift', de: 'Facelift', ru: 'Рестайлинг' },
      trims: [
        {
          id: 'trendline',
          tierClass: 'tier-2',
          tier: { en: 'Entry', de: 'Basis', ru: 'Базовая' },
          name: { en: 'Trendline', de: 'Trendline', ru: 'Trendline' },
          delta: { en: '-€1,100 – €1,600', de: '-1.100 – 1.600 €', ru: '-€1 100 – €1 600' },
          isSweetSpot: false,
          summary: { en: 'Manual AC, 15" steel wheels, basic audio, and 7 airbags + ESP.', de: 'Manuelle Klima, 15"-Stahlfelgen, Basis-Radio und 7 Airbags + ESP.', ru: 'Кондиционер, стальные диски 15", базовая аудиосистема, 7 подушек.' },
          highlights: { en: ['7 Airbags & ESP', 'Electric Parking Brake'], de: ['7 Airbags & ESP', 'Elektrische Parkbremse'], ru: ['7 подушек и ESP', 'Электроручник'] }
        },
        {
          id: 'comfortline',
          tierClass: 'tier-4',
          tier: { en: 'Popular', de: 'Beliebt', ru: 'Популярная' },
          name: { en: 'Comfortline', de: 'Comfortline', ru: 'Comfortline' },
          delta: { en: '-€400 – €700', de: '-400 – 700 €', ru: '-€400 – €700' },
          isSweetSpot: false,
          summary: { en: '16" alloys, lumbar comfort seats, leather wheel, and front/rear parking sensors.', de: '16"-Alus, Komfortsitze mit Lordose, Lederlenkrad und PDC vorn/hinten.', ru: 'Диски 16", комфортные кресла с поясницей, кожаный руль, парктроники.' },
          highlights: { en: ['16" Alloys', 'Comfort Seats', 'Front/Rear PDC'], de: ['16"-Alufelgen', 'Komfortsitze', 'PDC vorn/hinten'], ru: ['Диски 16"', 'Комфорт-сиденья', 'Парктроники'] }
        },
        {
          id: 'highline',
          tierClass: 'tier-6',
          tier: { en: 'Sweet Spot', de: 'Empfehlung', ru: 'Рекомендуем' },
          name: { en: 'Highline', de: 'Highline', ru: 'Highline' },
          delta: { en: 'Baseline', de: 'Preis-Basis', ru: 'База цены' },
          isSweetSpot: true,
          summary: { en: 'Best all-round value: Climatronic, Alcantara/cloth sport seats, ambient LEDs & fog lights.', de: 'Bester Gegenwert: Klimaautomatik, Alcantara-Sportsitze, Ambientelicht & Nebelscheinwerfer.', ru: 'Лучший баланс: климат Climatronic, спорт-кресла с алькантарой и подсветка салона.' },
          highlights: { en: ['2-Zone Climatronic', 'Alcantara Sport Seats', 'Ambient Lighting'], de: ['2-Zonen-Climatronic', 'Alcantara-Sitze', 'Ambientelicht'], ru: ['2-зонный климат', 'Сиденья Alcantara', 'Подсветка салона'] }
        },
        {
          id: 'special-editions',
          tierClass: 'tier-7',
          tier: { en: 'Value Pack', de: 'Sondermodell', ru: 'Спецсерия' },
          name: { en: 'Allstar / Sound / IQ.Drive', de: 'Allstar / Sound / IQ.Drive', ru: 'Allstar / Sound / IQ.Drive' },
          delta: { en: '+€300 – €900', de: '+300 – 900 €', ru: '+€300 – €900' },
          isSweetSpot: false,
          summary: { en: 'Special-edition bundles packing Climatronic, heated seats, nav, and driver-assist extras.', de: 'Sondermodelle mit Klimaautomatik, Sitzheizung, Navi und Assistenzpaketen.', ru: 'Выгодные спецверсии с климатом, подогревом, навигацией и ассистентами.' },
          highlights: { en: ['Heated Seats', 'Navigation / CarPlay', 'Assist Bundle'], de: ['Sitzheizung', 'Navi / App-Connect', 'Assistenzpaket'], ru: ['Подогрев сидений', 'Навигация', 'Пакет ассистентов'] }
        },
        {
          id: 'r-line',
          tierClass: 'tier-9',
          tier: { en: 'Flagship Trim', de: 'Top-Optik', ru: 'Топ-пакет' },
          name: { en: 'R-Line', de: 'R-Line', ru: 'R-Line' },
          delta: { en: '+€1,400 – €2,200', de: '+1.400 – 2.200 €', ru: '+€1 400 – €2 200' },
          isSweetSpot: false,
          summary: { en: 'Sporty exterior bumpers, 17–18" alloys, flat-bottom wheel, and black headliner.', de: 'Sportliche Stoßfänger, 17–18"-Alus, Sportlenkrad und schwarzer Dachhimmel.', ru: 'Спортивный обвес, диски 17–18", скошенный руль и чёрный потолок.' },
          highlights: { en: ['R-Line Bodykit', '17–18" Alloys', 'Black Headliner'], de: ['R-Line Exterieur', '17–18"-Alus', 'Schwarzer Himmel'], ru: ['Обвес R-Line', 'Диски 17–18"', 'Чёрный потолок'] }
        }
      ],
      matrix: [
        { feature: { en: '2-Zone Climatronic', de: '2-Zonen-Climatronic', ru: '2-зонный климат' }, vals: ['opt', 'opt', 'std', 'std', 'std'] },
        { feature: { en: '16–17" Alloy Wheels', de: 'Alufelgen 16–17"', ru: 'Литые диски 16–17"' }, vals: ['no', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Front & Rear PDC', de: 'PDC vorn & hinten', ru: 'Парктроники 360' }, vals: ['opt', 'std', 'std', 'std', 'std'] },
        { feature: { en: 'Heated Front Seats', de: 'Sitzheizung vorn', ru: 'Подогрев сидений' }, vals: ['no', 'opt', 'std', 'std', 'std'] },
        { feature: { en: 'LED Headlights', de: 'LED-Scheinwerfer', ru: 'LED-фары' }, vals: ['no', 'opt', 'opt', 'opt', 'opt'] },
        { feature: { en: 'Adaptive Cruise (ACC)', de: 'Abstandstempomat (ACC)', ru: 'Адаптивный круиз' }, vals: ['no', 'opt', 'opt', 'std', 'opt'] },
        { feature: { en: 'Digital Cockpit', de: 'Active Info Display', ru: 'Цифровая приборка' }, vals: ['no', 'no', 'opt', 'opt', 'opt'] },
        { feature: { en: 'R-Line Styling Pack', de: 'R-Line Sportpaket', ru: 'Пакет R-Line' }, vals: ['no', 'no', 'no', 'no', 'std'] }
      ],
      interiorNotes: {
        en: ['Soft-touch dashboard, felt-lined door pockets, and physical climate dials age remarkably well.'],
        de: ['Soft-Touch-Armaturenbrett, gefilzte Ablagen und echte Klimadrehregler altern vorbildlich.'],
        ru: ['Мягкий пластик панели, ворс в карманах дверей и физические регуляторы климата отлично держат вид.']
      },
      cabinByPowertrain: {
        petrol: { en: 'Whisper-quiet idle and light clutch/shifter action across EA211 engines.', de: 'Flüsterleiser Leerlauf und leichtgängige Schaltung bei allen EA211-Benzinern.', ru: 'Очень тихий холостой ход и лёгкое управление у всех моторов EA211.' },
        diesel: { en: 'Well-damped TDI thrum at cruise; subtle clatter only on dead-cold mornings.', de: 'Gut gedämmtes TDI-Brummen auf der Autobahn; nur kalt morgens hörbar.', ru: 'Хорошо изолированный дизельный звук на трассе; слышен лишь при холодном запуске.' }
      },
      faceliftUpgrades: {
        en: ['2017 Mk7.5 added LED lighting, larger 8–9.2" MIB2 glass touchscreens, and optional Active Info Display.'],
        de: ['Das Mk7.5-Facelift 2017 brachte LED-Licht, größere 8–9,2"-Glasdisplays und optionales Digital Cockpit.'],
        ru: ['Рестайлинг Mk7.5 (2017) принёс LED-оптику, экраны 8–9,2" и цифровую приборную панель.']
      }
    }
  }
});