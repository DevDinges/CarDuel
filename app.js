// ============================================================================
// CAR DUEL — Two-Level 4-Pillar Head-to-Head Car Comparison System
// Full Multi-Language (EN / DE / RU) & 4-Theme Support
// ============================================================================

const FLAG_SVGS = {
  en: `<svg viewBox="0 0 21 14" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><rect x="-1" y="-1" width="23" height="16" fill="#012169"/><path d="M0,0 L21,14 M21,0 L0,14" stroke="#ffffff" stroke-width="3"/><path d="M0,0 L21,14 M21,0 L0,14" stroke="#C8102E" stroke-width="1.8"/><path d="M10.5,-1 V15 M-1,7 H22" stroke="#ffffff" stroke-width="4.6"/><path d="M10.5,-1 V15 M-1,7 H22" stroke="#C8102E" stroke-width="2.8"/></svg>`,
  de: `<svg viewBox="0 0 21 14" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><rect x="-1" y="-1" width="23" height="6" fill="#000000"/><rect x="-1" y="4.66" width="23" height="5" fill="#DD0000"/><rect x="-1" y="9.33" width="23" height="6" fill="#FFCE00"/></svg>`,
  ru: `<svg viewBox="0 0 21 14" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><rect x="-1" y="-1" width="23" height="6" fill="#ffffff"/><rect x="-1" y="4.66" width="23" height="5" fill="#0039A6"/><rect x="-1" y="9.33" width="23" height="6" fill="#D52B1E"/></svg>`
};

const UI_TRANSLATIONS = {
  en: {
    code: 'EN',
    contender1: 'CONTENDER 1',
    opponentP2: 'OPPONENT (P2)',
    brandSubtitle: 'HEAD-TO-HEAD CAR COMPARISON',
    themeBtn: 'Theme',
    selectTheme: 'SELECT THEME',
    themeDark: 'Dark Mode',
    themeLight: 'White Mode',
    themeDarkSoft: 'Dark Mode (Soft Colors)',
    themeLightSoft: 'White Mode (Soft Colors)',
    langHeader: 'LANGUAGE',
    car1Tag: 'CAR 1',
    opponentTag: 'OPPONENT',
    swapLabel: '⇄ SWAP',
    expandFullCar: 'EXPAND FULL CAR',
    closeBtn: '✕ CLOSE',
    statsHeader: 'Stats (4 Pillars)',
    expandAll: '+ Expand All',
    collapseAll: '− Collapse All',
    ratingCol: 'Rating',
    vsOppCol: 'vs Opp',
    originalMsrp: 'Original MSRP',
    estUsedMarket: 'Est. Used Market',
    overallRating: 'Overall Rating',
    classSuffix: '-Class',
    selectYourCar: 'SELECT YOUR CAR',
    pickingP1: 'Picking for: <strong>P1 (Left)</strong>',
    pickingP2: 'Picking for: <strong>Opponent (Right)</strong>',
    indexClassesBtn: 'INDEX CLASSES',
    indexClassesTitle: 'INDEX CLASSES (0.0 – 10.0)',
    carLabel: 'CAR',
    p1Pillars: 'P1 PILLARS',
    p2Pillars: 'P2 PILLARS',
    mirrorMatch: 'MIRROR MATCH',
    overallRatingEdge: 'OVERALL RATING EDGE',
    deadHeat: 'DEAD HEAT: <strong>EQUAL OVERALL RATING</strong>',
    fwdTooltip: 'Front-Wheel Drive',
    awdTooltip: 'All-Wheel Drive (Real Time 4WD)',
    selectEngineHeader: 'SELECT ENGINE CONFIGURATION',
    engineCategoryPetrol: 'Petrol',
    engineCategoryDiesel: 'Diesel',
    engineCategoryHybrid: 'Hybrid',
    defaultEngineBadge: 'DEFAULT',
    hideRosterTooltip: 'Hide Car Selection',
    showRosterTooltip: 'Show Car Selection',
    dossierTitle: 'ENGINEERING DOSSIER',
    dossierCategory: '1. RELIABILITY & QUALITY',
    dossierStrengths: 'Core Engineering Strengths',
    dossierWatchouts: 'Maintenance & Known Watch-Outs',
    dossierOpponentContrast: 'Head-to-Head Opponent Contrast',
    dossierInspectBtn: 'View Powertrain Durability Dossier',
    dossierDefaultStrength: 'Standard factory component reliability.',
    dossierDefaultWatchout: 'Standard scheduled maintenance intervals required.',
    angleFront: 'Front',
    angleFrontSide: 'Front-Side',
    angleSide: 'Side',
    angleSideRear: 'Side-Rear',
    angleRear: 'Rear'
  },
  de: {
    code: 'DE',
    contender1: 'KANDIDAT 1',
    opponentP2: 'GEGNER (P2)',
    brandSubtitle: 'DIREKTER FAHRZEUGVERGLEICH',
    themeBtn: 'Design',
    selectTheme: 'DESIGN WÄHLEN',
    themeDark: 'Dunkelmodus',
    themeLight: 'Hellmodus (Weiß)',
    themeDarkSoft: 'Dunkelmodus (Dezente Farben)',
    themeLightSoft: 'Hellmodus (Dezente Farben)',
    langHeader: 'SPRACHE',
    car1Tag: 'AUTO 1',
    opponentTag: 'GEGNER',
    swapLabel: '⇄ TAUSCH',
    expandFullCar: 'VOLLBILD ANZEIGEN',
    closeBtn: '✕ SCHLIESSEN',
    statsHeader: 'Werte (4 Säulen)',
    expandAll: '+ Alle öffnen',
    collapseAll: '− Alle schließen',
    ratingCol: 'Wertung',
    vsOppCol: 'vgl. Geg.',
    originalMsrp: 'Neupreis (UVP)',
    estUsedMarket: 'Gebrauchtmarkt (ca.)',
    overallRating: 'Gesamtwertung',
    classSuffix: '-Klasse',
    selectYourCar: 'WÄHLE DEIN AUTO',
    pickingP1: 'Auswahl für: <strong>P1 (Links)</strong>',
    pickingP2: 'Auswahl für: <strong>Gegner (Rechts)</strong>',
    indexClassesBtn: 'INDEX-KLASSEN',
    indexClassesTitle: 'INDEX-KLASSEN (0.0 – 10.0)',
    carLabel: 'AUTO',
    p1Pillars: 'P1 SÄULEN',
    p2Pillars: 'P2 SÄULEN',
    mirrorMatch: 'SPIEGEL-DUELL',
    overallRatingEdge: 'GESAMTWERTUNG VORTEIL',
    deadHeat: 'GLEICHSTAND: <strong>GLEICHE GESAMTWERTUNG</strong>',
    fwdTooltip: 'Frontantrieb',
    awdTooltip: 'Allradantrieb (Real Time 4WD)',
    selectEngineHeader: 'MOTORISIERUNG WÄHLEN',
    engineCategoryPetrol: 'Benzin',
    engineCategoryDiesel: 'Diesel',
    engineCategoryHybrid: 'Hybrid',
    defaultEngineBadge: 'STANDARD',
    hideRosterTooltip: 'Fahrzeugauswahl ausblenden',
    showRosterTooltip: 'Fahrzeugauswahl einblenden',
    dossierTitle: 'TECHNIK-DOSSIER',
    dossierCategory: '1. ZUVERLÄSSIGKEIT & QUALITÄT',
    dossierStrengths: 'Konstruktive Stärken & Zuverlässigkeit',
    dossierWatchouts: 'Wartung & Bekannte Schwachstellen',
    dossierOpponentContrast: 'Direkter Vergleich mit dem Gegner',
    dossierInspectBtn: 'Technik-Dossier ansehen',
    dossierDefaultStrength: 'Serienmäßige Zuverlässigkeit der Werkskomponenten.',
    dossierDefaultWatchout: 'Regelmäßige Wartungsintervalle nach Herstellervorgabe erforderlich.',
    angleFront: 'Front',
    angleFrontSide: 'Front-Seite',
    angleSide: 'Seite',
    angleSideRear: 'Heck-Seite',
    angleRear: 'Heck'
  },
  ru: {
    code: 'RU',
    contender1: 'УЧАСТНИК 1',
    opponentP2: 'СОПЕРНИК (P2)',
    brandSubtitle: 'ПРЯМОЕ СРАВНЕНИЕ АВТОМОБИЛЕЙ',
    themeBtn: 'Тема',
    selectTheme: 'ВЫБЕРИТЕ ТЕМУ',
    themeDark: 'Тёмная тема',
    themeLight: 'Светлая тема',
    themeDarkSoft: 'Тёмная (Мягкие цвета)',
    themeLightSoft: 'Светлая (Мягкие цвета)',
    langHeader: 'ЯЗЫК',
    car1Tag: 'АВТО 1',
    opponentTag: 'СОПЕРНИК',
    swapLabel: '⇄ МЕНЯТЬ',
    expandFullCar: 'ПОЛНОЕ ФОТО',
    closeBtn: '✕ ЗАКРЫТЬ',
    statsHeader: 'Статистика (4 категории)',
    expandAll: '+ Развернуть',
    collapseAll: '− Свернуть',
    ratingCol: 'Оценка',
    vsOppCol: 'vs Соп.',
    originalMsrp: 'Цена нового',
    estUsedMarket: 'Рынок б/у (прим.)',
    overallRating: 'Общий рейтинг',
    classSuffix: '-Класс',
    selectYourCar: 'ВЫБЕРИТЕ АВТОМОБИЛЬ',
    pickingP1: 'Выбор для: <strong>P1 (Слева)</strong>',
    pickingP2: 'Выбор для: <strong>Соперника (Справа)</strong>',
    indexClassesBtn: 'КЛАССЫ ИНДЕКСА',
    indexClassesTitle: 'КЛАССЫ ИНДЕКСА (0.0 – 10.0)',
    carLabel: 'АВТО',
    p1Pillars: 'P1 КАТЕГОРИИ',
    p2Pillars: 'P2 КАТЕГОРИИ',
    mirrorMatch: 'ЗЕРКАЛЬНЫЙ МАТЧ',
    overallRatingEdge: 'ЛИДЕР ОБЩЕГО РЕЙТИНГА',
    deadHeat: 'НИЧЬЯ: <strong>РАВНЫЙ ОБЩИЙ РЕЙТИНГ</strong>',
    fwdTooltip: 'Передний привод',
    awdTooltip: 'Полный привод (Real Time 4WD)',
    selectEngineHeader: 'ВЫБЕРИТЕ ДВИГАТЕЛЬ',
    engineCategoryPetrol: 'Бензин',
    engineCategoryDiesel: 'Дизель',
    engineCategoryHybrid: 'Гибрид',
    defaultEngineBadge: 'ОСНОВНОЙ',
    hideRosterTooltip: 'Скрыть выбор авто',
    showRosterTooltip: 'Показать выбор авто',
    dossierTitle: 'ТЕХНИЧЕСКОЕ ДОСЬЕ',
    dossierCategory: '1. НАДЁЖНОСТЬ И КАЧЕСТВО',
    dossierStrengths: 'Конструктивные преимущества и надёжность',
    dossierWatchouts: 'Обслуживание и слабые места',
    dossierOpponentContrast: 'Сравнение с соперником',
    dossierInspectBtn: 'Открыть техническое досье',
    dossierDefaultStrength: 'Стандартная заводская надёжность узлов и агрегатов.',
    dossierDefaultWatchout: 'Требуется соблюдение регламентных интервалов ТО.',
    angleFront: 'Спереди',
    angleFrontSide: 'Спереди сбоку',
    angleSide: 'Сбоку',
    angleSideRear: 'Сзади сбоку',
    angleRear: 'Сзади'
  }
};

const PILLAR_ICONS = {
  reliabilityQuality: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9.6 2.3l1.3.3.5 1.3c.4.1.8.3 1.1.5l1.2-.6.9.9-.6 1.2c.2.3.4.7.5 1.1l1.3.5.3 1.3-1.1.7a5 5 0 010 1.2l1.1.7-.3 1.3-1.3.5a4.5 4.5 0 01-.5 1.1l.6 1.2-.9.9-1.2-.6c-.3.2-.7.4-1.1.5l-.5 1.3-1.3.3-.7-1.1a5 5 0 01-1.2 0l-.7 1.1-1.3-.3-.5-1.3a4.5 4.5 0 01-1.1-.5l-1.2.6-.9-.9.6-1.2a4.5 4.5 0 01-.5-1.1l-1.3-.5-.3-1.3 1.1-.7a5 5 0 010-1.2l-1.1-.7.3-1.3 1.3-.5c.1-.4.3-.8.5-1.1l-.6-1.2.9-.9 1.2.6c.3-.2.7-.4 1.1-.5l.5-1.3 1.3-.3.7 1.1a5 5 0 011.2 0l.7-1.1z" fill="currentColor"/><circle cx="9.6" cy="9.8" r="2.6" fill="#202328"/><path d="M16.5 11.2l4.5 1.7v3.4c0 2.9-1.9 5.3-4.5 6.2-2.6-.9-4.5-3.3-4.5-6.2v-3.4l4.5-1.7z" fill="currentColor" stroke="#202328" stroke-width="1.3" stroke-linejoin="round"/><path d="M14.6 16.5l1.3 1.3 2.6-2.7" stroke="#202328" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  practicalityDaily: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 4h6a2 2 0 012 2v1h3a2 2 0 012 2v3H2V9a2 2 0 012-2h3V6a2 2 0 012-2zm0 3h6V6H9v1zm-7 7h20v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z"/></svg>`,
  performanceDynamics: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M 4.5 17.5 A 8.5 8.5 0 1 1 19.5 17.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="12" y1="4.5" x2="12" y2="6.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="6.3" y1="7.1" x2="7.9" y2="8.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="17.7" y1="7.1" x2="16.1" y2="8.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="3.8" y1="12.8" x2="6.0" y2="12.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="20.2" y1="12.8" x2="18.0" y2="12.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="14" x2="16.5" y2="9.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="14" r="2.2" fill="currentColor"/></svg>`,
  runningCostsTco: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><ellipse cx="7.2" cy="11.5" rx="4.2" ry="1.5" fill="currentColor"/><path d="M 3.0 13.5 A 4.2 1.5 0 0 0 11.4 13.5 L 11.4 15.2 A 4.2 1.5 0 0 1 3.0 15.2 Z" fill="currentColor"/><path d="M 3.0 16.4 A 4.2 1.5 0 0 0 11.4 16.4 L 11.4 18.1 A 4.2 1.5 0 0 1 3.0 18.1 Z" fill="currentColor"/><ellipse cx="16.8" cy="5.7" rx="4.2" ry="1.5" fill="currentColor"/><path d="M 12.6 7.7 A 4.2 1.5 0 0 0 21.0 7.7 L 21.0 9.4 A 4.2 1.5 0 0 1 12.6 9.4 Z" fill="currentColor"/><path d="M 12.6 10.6 A 4.2 1.5 0 0 0 21.0 10.6 L 21.0 12.3 A 4.2 1.5 0 0 1 12.6 12.3 Z" fill="currentColor"/><path d="M 12.6 13.5 A 4.2 1.5 0 0 0 21.0 13.5 L 21.0 15.2 A 4.2 1.5 0 0 1 12.6 15.2 Z" fill="currentColor"/><path d="M 12.6 16.4 A 4.2 1.5 0 0 0 21.0 16.4 L 21.0 18.1 A 4.2 1.5 0 0 1 12.6 18.1 Z" fill="currentColor"/></svg>`
};

const STAT_PILLARS = [
  {
    id: 'reliabilityQuality',
    number: '1',
    label: {
      en: 'Reliability & Quality',
      de: 'Zuverlässigkeit & Qualität',
      ru: 'Надёжность и качество'
    },
    subtitle: {
      en: 'Powertrain, Electronics & Build Quality',
      de: 'Antrieb, Elektronik & Verarbeitung',
      ru: 'Двигатель, электроника и сборка'
    },
    unitHint: {
      en: 'Empirical defect rates (TÜV/ADAC), electronics & rust prevention',
      de: 'Empirische Mängelquoten (TÜV/ADAC), Elektronik & Rostschutz',
      ru: 'Статистика отказов (TÜV/ADAC), электроника и защита от коррозии'
    },
    subRatings: [
      {
        key: 'powertrainDurability',
        label: {
          en: 'Powertrain Durability',
          de: 'Antriebs-Haltbarkeit',
          ru: 'Ресурс двигателя и КПП'
        },
        unitHint: {
          en: 'TÜV / ADAC / Consumer Reports defect rate & engine/gearbox longevity',
          de: 'TÜV-/ADAC-Mängelquote sowie Motor- und Getriebelebensdauer',
          ru: 'Надёжность мотора и коробки передач по рейтингам TÜV / ADAC'
        }
      },
      {
        key: 'electronicsInfotainment',
        label: {
          en: 'Electronics & Infotainment',
          de: 'Elektronik & Infotainment',
          ru: 'Электроника и мультимедиа'
        },
        unitHint: {
          en: 'Sensor & software reliability, electrical system stability',
          de: 'Zuverlässigkeit von Sensorik, Software und Bordnetz',
          ru: 'Стабильность датчиков, электрики и мультимедийной системы'
        }
      },
      {
        key: 'buildQualityRust',
        label: {
          en: 'Build Quality & Rust Prevention',
          de: 'Verarbeitung & Rostschutz',
          ru: 'Качество сборки и защита от ржавчины'
        },
        unitHint: {
          en: 'Chassis corrosion protection & interior assembly quality',
          de: 'Karosserie-Korrosionsschutz & Innenraumverarbeitung',
          ru: 'Антикоррозийная стойкость кузова и качество салона'
        }
      }
    ]
  },
  {
    id: 'practicalityDaily',
    number: '2',
    label: {
      en: 'Practicality & Daily Use',
      de: 'Alltagstauglichkeit',
      ru: 'Практичность и быт'
    },
    subtitle: {
      en: 'Boot Space, Ergonomics & Payload',
      de: 'Kofferraum, Ergonomie & Zuladung',
      ru: 'Багажник, эргономика и нагрузка'
    },
    unitHint: {
      en: 'Normalized hard data: VDA boot volume, turning circle & payload',
      de: 'Harte Daten: Kofferraumvolumen (VDA), Wendekreis & Zuladung',
      ru: 'Объём багажника (VDA), радиус разворота и грузоподъёмность'
    },
    subRatings: [
      {
        key: 'interiorBootSpace',
        label: {
          en: 'Interior & Boot Space',
          de: 'Platzangebot & Kofferraum',
          ru: 'Салон и объём багажника'
        },
        unitHint: {
          en: 'Boot volume (VDA liters), rear legroom & cargo versatility',
          de: 'Kofferraumvolumen in Litern, Beinfreiheit & Variabilität',
          ru: 'Объём багажника в литрах, место сзади и трансформация салона'
        }
      },
      {
        key: 'cabinErgonomicsVisibility',
        label: {
          en: 'Cabin Ergonomics & Visibility',
          de: 'Bedienung & Rundumsicht',
          ru: 'Эргономика и обзорность'
        },
        unitHint: {
          en: 'ISOFIX accessibility, all-round visibility & turning circle',
          de: 'ISOFIX-Zugänglichkeit, Rundumsicht & Wendekreis',
          ru: 'Удобство посадки, обзорность, габариты и крепления ISOFIX'
        }
      },
      {
        key: 'payloadTowing',
        label: {
          en: 'Payload & Towing Capacity',
          de: 'Zuladung & Anhängelast',
          ru: 'Грузоподъёмность и буксировка'
        },
        unitHint: {
          en: 'Max payload (kg) & unbraked/braked towing capability',
          de: 'Maximale Zuladung (kg) sowie ungebremste/gebremste Anhängelast',
          ru: 'Полезная нагрузка (кг) и масса буксируемого прицепа'
        }
      }
    ]
  },
  {
    id: 'performanceDynamics',
    number: '3',
    label: {
      en: 'Performance & Driving',
      de: 'Fahrdynamik & Sicherheit',
      ru: 'Динамика и ходовые качества'
    },
    subtitle: {
      en: 'Acceleration, Handling & Braking Safety',
      de: 'Beschleunigung, Fahrwerk & Bremsen',
      ru: 'Разгон, управляемость и тормоза'
    },
    unitHint: {
      en: '0–100 km/h sprint, top speed, handling & 100–0 km/h braking (Benchmark: 10 = ≤3.0 s / 300+ km/h)',
      de: '0–100 km/h Sprint, Spitze, Fahrwerk & Bremsweg (Maßstab: 10 = ≤3,0 s / 300+ km/h)',
      ru: 'Разгон 0–100 км/ч, макс. скорость, подвеска и тормозной путь (Эталон: 10 = ≤3,0 с / 300+ км/ч)'
    },
    subRatings: [
      {
        key: 'accelerationOvertaking',
        label: {
          en: 'Acceleration & Overtaking',
          de: 'Beschleunigung & Durchzug',
          ru: 'Разгон и обгон'
        },
        unitHint: {
          en: '0–100 km/h sprint & top speed (Benchmark: 10 = ≤3.0 s / 300+ km/h)',
          de: '0–100 km/h Sprint & Höchstgeschwindigkeit (Maßstab: 10 = ≤3,0 s / 300+ km/h)',
          ru: 'Разгон 0–100 км/ч и максимальная скорость (Эталон: 10 = ≤3,0 с / 300+ км/ч)'
        }
      },
      {
        key: 'handlingAgility',
        label: {
          en: 'Handling & Agility',
          de: 'Fahrwerk & Agilität',
          ru: 'Управляемость и плавность'
        },
        unitHint: {
          en: 'Suspension composure, steering precision & cornering stability',
          de: 'Fahrwerksabstimmung, Lenkpräzision & Kurvenstabilität',
          ru: 'Настройка подвески, точность руля и устойчивость в поворотах'
        }
      },
      {
        key: 'brakingSafety',
        label: {
          en: 'Braking & Safety',
          de: 'Bremsen & Sicherheit',
          ru: 'Тормоза и безопасность'
        },
        unitHint: {
          en: '100–0 km/h braking distance (warm/cold) & safety equipment',
          de: 'Bremsweg 100–0 km/h (warm/kalt) & Sicherheitsausstattung',
          ru: 'Тормозной путь 100–0 км/ч и оснащение системами безопасности'
        }
      }
    ]
  },
  {
    id: 'runningCostsTco',
    number: '4',
    label: {
      en: 'Running Costs & TCO',
      de: 'Betriebs- & Haltungskosten',
      ru: 'Расходы на содержание (TCO)'
    },
    subtitle: {
      en: 'Fuel Economy, Depreciation & Maintenance',
      de: 'Verbrauch, Wertverlust & Unterhalt',
      ru: 'Расход топлива, амортизация и ТО'
    },
    unitHint: {
      en: 'Real-world fuel consumption, 3/5-year resale value & insurance/service',
      de: 'Reale Verbräuche, Restwert nach 3/5 Jahren & Versicherung/Wartung',
      ru: 'Реальный расход топлива, потеря стоимости и цена обслуживания'
    },
    subRatings: [
      {
        key: 'efficiencyFuel',
        label: {
          en: 'Efficiency / Fuel Consumption',
          de: 'Effizienz / Realverbrauch',
          ru: 'Экономичность / Расход топлива'
        },
        unitHint: {
          en: 'Real-world fuel consumption vs. official WLTP/NEDC rating',
          de: 'Realer Kraftstoffverbrauch im Alltag (L/100km)',
          ru: 'Реальный расход топлива в смешанном цикле (л/100 км)'
        }
      },
      {
        key: 'depreciationResale',
        label: {
          en: 'Depreciation (Resale Value)',
          de: 'Wertstabilität (Wiederverkauf)',
          ru: 'Ликвидность (Сохранение цены)'
        },
        unitHint: {
          en: 'Value retention after 3/5+ years on the used market',
          de: 'Werterhalt und Nachfrage auf dem Gebrauchtwagenmarkt',
          ru: 'Медленная потеря стоимости и спрос на вторичном рынке'
        }
      },
      {
        key: 'maintenanceInsurance',
        label: {
          en: 'Maintenance & Insurance',
          de: 'Wartung & Versicherung',
          ru: 'ТО, ремонт и страховка'
        },
        unitHint: {
          en: 'Insurance class rating (Typklasse), tax & service/wear costs',
          de: 'Typklassen-Einstufung, Kfz-Steuer & Verschleißteilkosten',
          ru: 'Стоимость запчастей, страховки, налога и регулярного ТО'
        }
      }
    ]
  }
];

const CAR_ROSTER = [
  {
    id: 'toyota-auris-2014',
    number: '01',
    yearMake: '2014 TOYOTA',
    rarityClass: 'rarity-legendary',
    drivetrain: 'FWD',
    image: 'assets/toyota-auris-2014.png',
    defaultEngineId: '1.8-hybrid',
    engines: [
      {
        id: '1.8-hybrid',
        isDefault: true,
        shortTitle: 'AURIS 1.8 HYBRID',
        fullName: '2014 Toyota Auris 1.8 Hybrid',
        engineBadge: '1.8L HSD e-CVT • 136 HP',
        engineSubLabel: {
          en: '2ZR-FXE Hybrid Synergy Drive • e-CVT • 142 Nm',
          de: '2ZR-FXE Vollhybrid (HSD) • Planeten-e-CVT • 142 Nm',
          ru: '2ZR-FXE Гибрид (HSD) • Планетарная e-CVT • 142 Н·м'
        },
        rarityLabel: {
          en: 'HYBRID ICON',
          de: 'HYBRID-IKONE',
          ru: 'ИКОНА ГИБРИДОВ'
        },
        originalMsrp: {
          en: '€24,950 New',
          de: '24.950 € Neu',
          ru: '€24 950 новый'
        },
        estUsedPrice: '€9,400',
        perkLabel: {
          en: '✦ 9.8 Reliability (TÜV Top 3%) • 4.1 L/100km Economy',
          de: '✦ 9.8 Zuverlässigkeit (TÜV Top 3%) • 4,1 L/100km Realverbrauch',
          ru: '✦ 9.8 Надёжность (TÜV Топ 3%) • Расход 4,1 л/100 км'
        },
        remarkablePositives: {
          en: [
            'TÜV TOP 3% RELIABILITY',
            '4.1L/100KM REAL ECONOMY',
            'LOW RUNNING COSTS',
            'FEWER PARTS THAT CAN BREAK',
            'SILENT EV CITY DRIVING'
          ],
          de: [
            'TÜV TOP 3% ZUVERLÄSSIGKEIT',
            '4,1 L/100KM REALVERBRAUCH',
            'NIEDRIGE HALTUNGSKOSTEN',
            'WENIGER VERSCHLEISSTEILE',
            'LAUTLOSES EV-STADTFAHREN'
          ],
          ru: [
            'НАДЁЖНОСТЬ ТОП 3% TÜV',
            'РАСХОД 4,1 Л/100 КМ',
            'ДЕШЁВОЕ ОБСЛУЖИВАНИЕ',
            'МЕНЬШЕ ДЕТАЛЕЙ ДЛЯ ПОЛОМОК',
            'ТИХИЙ EV-РЕЖИМ В ГОРОДЕ'
          ]
        },
        notableNegatives: {
          en: [
            '385 KG TOWING LIMIT',
            'COMPACT 360L BOOT',
            'ENGINE DRONE ON INCLINES'
          ],
          de: [
            'NUR 385 KG ANHÄNGELAST',
            'KOMPAKTER 360L KOFFERRAUM',
            'MOTORHEULEN AM BERG'
          ],
          ru: [
            'БУКСИРОВКА ЛИШЬ 385 КГ',
            'СКРОМНЫЙ БАГАЖНИК 360 Л',
            'ГУЛ МОТОРА НА ПОДЪЁМАХ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.8,
            badges: {
              en: ['TÜV Top 3% Defects', 'Planetary e-CVT'],
              de: ['TÜV Top 3% Mängel', 'Planeten-e-CVT'],
              ru: ['Топ 3% TÜV', 'Планетарная e-CVT']
            },
            dossier: {
              en: {
                headline: 'Bulletproof Atkinson Hybrid with Virtually Zero Mechanical Wear Parts',
                strengths: [
                  'Port Fuel Injection (Multi-Point): Fuel continuously washes the back of intake valves, preventing intake carbon buildup common in modern direct-injection engines.',
                  'Planetary Gear Power-Split Device (e-CVT): No friction clutches, no dual-mass flywheel, no torque converter, and no CVT belts. Two electric motor-generators (MG1/MG2) run in synthetic ATF with near-zero wear.',
                  'Ancillaries Eliminated: No starter motor (cranked by MG1) and no alternator (12V charged via high-voltage DC-DC converter). No serpentine belt tensioners to fail.',
                  'Empirical Reliability: Consistently ranked in TÜV Report top 3% lowest defect rate cohorts; extensively proven in European taxi fleets to comfortably exceed 400,000+ km.'
                ],
                watchouts: [
                  'Exhaust Gas Recirculation (EGR) cooler & pipe cleaning advised around 150,000 km to avoid uneven cylinder temperatures and potential head gasket stress.',
                  'Hybrid battery cooling fan inlet filter under the rear seat must be kept clear of dust/lint for optimal battery longevity.'
                ]
              },
              de: {
                headline: 'Unverwüstlicher Atkinson-Hybrid mit minimalem mechanischen Verschleiß',
                strengths: [
                  'Saugrohreinspritzung (Multi-Point): Kraftstoff spült die Einlassventile kontinuierlich, daher keine Verkokung wie bei Direkteinspritzern.',
                  'Planetengetriebe (e-CVT): Keine Reibungskupplung, kein Zweimassenschwungrad, kein Drehmomentwandler und keine Schubgliederbänder. Nahezu verschleißfrei in ATF laufend.',
                  'Wegfall anfälliger Anbauteile: Kein klassischer Anlasser (Start über MG1) und keine Lichtmaschine (12V-Ladung über DC-DC-Wandler). Kein Keilrippenriemen-Verschleiß.',
                  'Empirische Dauerhaltbarkeit: Regelmäßig in den Top 3% des TÜV-Reports mit geringster Mängelquote; im Taxibetrieb mit über 400.000 km bewährt.'
                ],
                watchouts: [
                  'AGR-Kühler und -Rohr sollten ab ca. 150.000 km gereinigt werden, um thermische Belastungen der Zylinderkopfdichtung zu vermeiden.',
                  'Lüftergitter der Hybridbatterie unter der Rücksitzbank sauber halten für maximale Batterielebensdauer.'
                ]
              },
              ru: {
                headline: 'Неубиваемый гибрид Аткинсона с минимальным износом механических узлов',
                strengths: [
                  'Распределённый впрыск (MPI): Бензин постоянно омывает впускные клапаны — полное отсутствие нагара, в отличие от моторов с прямым впрыском.',
                  'Планетарный редуктор e-CVT: Нет сцепления, двухмассового маховика, гидротрансформатора и ремней вариатора. Износ сведён практически к нулю.',
                  'Нет традиционных узлов износа: Нет стартера (запуск через MG1) и генератора (заряд 12В через DC-DC конвертер от тяговой батареи).',
                  'Подтверждённый ресурс: Входит в топ 3% надёжности отчётов TÜV; проверен в европейских таксопарках с пробегами свыше 400 000–500 000 км.'
                ],
                watchouts: [
                  'Рекомендуется чистка теплообменника и клапана EGR на пробеге около 150 000 км для защиты прокладки ГБЦ от локального перегрева.',
                  'Периодически очищайте воздухозаборник вентилятора гибридной батареи под задним сиденьем от пыли.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 9.0,
            badges: {
              en: ['Robust Hybrid Inverter', 'Touch 2 Audio'],
              de: ['Robuster Inverter', 'Touch-2-System'],
              ru: ['Надёжный инвертор', 'Система Touch 2']
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Rattle-Free Cabin'],
              de: ['Guter Rostschutz', 'Klapperfreier Bau'],
              ru: ['Защита от ржавчины', 'Крепкий салон']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Compact Rear Space'],
              de: ['360L Boot (1.200L Max)', 'Kompakter Fond'],
              ru: ['Багажник 360–1 200 л', 'Тесновато сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.4,
            badges: {
              en: ['10.4 m Turning Circle', 'Rear-View Camera'],
              de: ['10,4 m Wendekreis', 'Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Камера заднего вида']
            }
          },
          payloadTowing: {
            score: 7.3,
            badges: {
              en: ['425 kg Payload', '385 / 385 kg Towing'],
              de: ['425 kg Zuladung', '385 / 385 kg Zuglast'],
              ru: ['Нагрузка 425 кг', 'Прицеп: 385 / 385 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.8,
            badges: {
              en: ['0–100 km/h: 10.9 s', '180 km/h Top Speed'],
              de: ['0–100 km/h: 10,9 s', '180 km/h Spitze'],
              ru: ['0–100 км/ч: 10,9 с', 'Макс. 180 км/ч']
            }
          },
          handlingAgility: {
            score: 6.1,
            badges: {
              en: ['Comfort Suspension', 'Light City Steering'],
              de: ['Komfort-Fahrwerk', 'Leichte Stadtlenkung'],
              ru: ['Мягкая подвеска', 'Лёгкий руль']
            }
          },
          brakingSafety: {
            score: 7.0,
            badges: {
              en: ['100–0 km/h: 36.2 m', 'NCAP 5★ (7 Airbags)'],
              de: ['100–0 km/h: 36,2 m', 'NCAP 5★ (7 Airbags)'],
              ru: ['100–0 км/ч: 36,2 м', 'NCAP 5★ (7 подушек)']
            }
          },
          efficiencyFuel: {
            score: 9.5,
            badges: {
              en: ['4.1 L/100km Real', 'Silent EV City Mode'],
              de: ['4,1 L/100km Real', 'Lautloser EV-Modus'],
              ru: ['4,1 л/100 км в жизни', 'EV-режим в городе']
            }
          },
          depreciationResale: {
            score: 8.9,
            badges: {
              en: ['High Hybrid Demand', '15-Yr Relax Warranty'],
              de: ['Hohe Hybrid-Nachfrage', '15 J. Relax-Garantie'],
              ru: ['Высокий спрос б/у', 'Гарантия Relax 15 лет']
            }
          },
          maintenanceInsurance: {
            score: 9.2,
            badges: {
              en: ['€36/yr DE Tax (84g CO2)', 'Regen Saves Brakes'],
              de: ['Nur 36 €/J. Kfz-Steuer', 'Schont Bremsbeläge'],
              ru: ['Налог €36/год (84 г CO2)', 'Бережёт колодки']
            }
          }
        }
      },
      {
        id: '1.33-dual-vvti',
        isDefault: false,
        shortTitle: 'AURIS 1.33 DUAL VVT-i',
        fullName: '2014 Toyota Auris 1.33 Dual VVT-i',
        engineBadge: '1.33L Dual VVT-i • 99 HP',
        engineSubLabel: {
          en: '1NR-FE Naturally Aspirated Petrol • 6-MT • 128 Nm',
          de: '1NR-FE Saugbenziner • 6-Gang-Schaltgetriebe • 128 Nm',
          ru: '1NR-FE Атмосферный бензин • 6-ст. МКПП • 128 Н·м'
        },
        rarityLabel: {
          en: 'ENTRY CITY SAVER',
          de: 'BASIS-SPARMEISTER',
          ru: 'ГОРОДСКОЙ БАЗОВЫЙ'
        },
        originalMsrp: {
          en: '€15,950 New',
          de: '15.950 € Neu',
          ru: '€15 950 новый'
        },
        estUsedPrice: '€6,900',
        perkLabel: {
          en: '✦ €6,900 Entry Price • Simple 1.33 NA Chain Engine • 1,000 kg Towing',
          de: '✦ 6.900 € Einstiegspreis • Einfacher 1.33 Kettenmotor • 1.000 kg Anhängelast',
          ru: '✦ Доступная цена €6 900 • Простой цепной мотор 1.33 • Буксировка 1 000 кг'
        },
        remarkablePositives: {
          en: [
            'LOW €6,900 ENTRY PRICE',
            'SIMPLE 1.33 CHAIN ENGINE',
            'LOW TAX & INSURANCE',
            '1,000 KG BRAKED TOWING',
            'LIGHT CITY STEERING'
          ],
          de: [
            '6.900 € EINSTIEGSPREIS',
            'SIMPLER 1.33 KETTENMOTOR',
            'NIEDRIGE STEUER & TYP',
            '1.000 KG ANHÄNGELAST',
            'LEICHTE STADTLENKUNG'
          ],
          ru: [
            'ЦЕНА ОТ €6 900 Б/У',
            'ЦЕПНОЙ МОТОР 1.33 NA',
            'НИЗКИЙ НАЛОГ И СТРАХОВКА',
            'БУКСИРОВКА ДО 1 000 КГ',
            'ЛЁГКИЙ РУЛЬ В ГОРОДЕ'
          ]
        },
        notableNegatives: {
          en: [
            'WEAK OVERTAKING (128 NM)',
            'SLOW 12.6S 0–100 KM/H',
            'COMMON PISTON RING ISSUES',
            'COMPACT 360L BOOT',
            'BUMPIER REAR RIDE'
          ],
          de: [
            'WENIG DURCHZUG (128 NM)',
            'TRÄGE 12,6S 0–100 KM/H',
            'BEKANNTE KOLBENRING-PROBLEME',
            'KOMPAKTER 360L KOFFERRAUM',
            'HOLPRIGERE HINTERACHSE'
          ],
          ru: [
            'СЛАБАЯ ТЯГА (128 Н·М)',
            'РАЗГОН 12,6 С ДО 100',
            'ЧАСТЫЕ ПРОБЛЕМЫ С КОЛЬЦАМИ',
            'СКРОМНЫЙ БАГАЖНИК 360 Л',
            'ЖЁСТЧЕ НА КОЧКАХ СЗАДИ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.4,
            badges: {
              en: ['Chain-Driven 1.33 NA', 'Watch Short-Trip Oil Use'],
              de: ['1.33 Saugmotor (Kette)', 'Ölverbrauch beachten'],
              ru: ['Цепной мотор 1.33', 'Контроль расхода масла']
            }
          },
          electronicsInfotainment: {
            score: 9.1,
            badges: {
              en: ['Minimal Electronics', 'Simple Touch Audio'],
              de: ['Simples Bordnetz', 'Solides Basis-Audio'],
              ru: ['Минимум электроники', 'Простая электрика']
            }
          },
          buildQualityRust: {
            score: 9.0,
            badges: {
              en: ['Good Underbody Sealing', 'Durable Cloth Trim'],
              de: ['Guter Rostschutz', 'Robuste Stoffsitze'],
              ru: ['Защита от ржавчины', 'Прочный салон']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Compact Rear Space'],
              de: ['360L Boot (1.200L Max)', 'Kompakter Fond'],
              ru: ['Багажник 360–1 200 л', 'Тесновато сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.3,
            badges: {
              en: ['10.4 m Turning Circle', 'Clear Analog Gauges'],
              de: ['10,4 m Wendekreis', 'Klare Rundinstrumente'],
              ru: ['Разворот 10,4 м', 'Аналоговые приборы']
            }
          },
          payloadTowing: {
            score: 7.9,
            badges: {
              en: ['485 kg Payload', '450 / 1,000 kg Towing'],
              de: ['485 kg Zuladung', '450 / 1.000 kg Zuglast'],
              ru: ['Нагрузка 485 кг', 'Прицеп: 450 / 1 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 3.7,
            badges: {
              en: ['0–100 km/h: 12.6 s', '128 Nm (175 km/h)'],
              de: ['0–100 km/h: 12,6 s', '128 Nm (175 km/h)'],
              ru: ['0–100 км/ч: 12,6 с', '128 Н·м (175 км/ч)']
            }
          },
          handlingAgility: {
            score: 6.0,
            badges: {
              en: ['1,195 kg Curb Weight', 'Basic Rear Suspension'],
              de: ['1.195 kg Leergewicht', 'Einfache Hinterachse'],
              ru: ['Малый вес 1 195 кг', 'Простая задняя подвеска']
            }
          },
          brakingSafety: {
            score: 7.0,
            badges: {
              en: ['100–0 km/h: 36.0 m', 'NCAP 5★ (7 Airbags)'],
              de: ['100–0 km/h: 36,0 m', 'NCAP 5★ (7 Airbags)'],
              ru: ['100–0 км/ч: 36,0 м', 'NCAP 5★ (7 подушек)']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['6.1 L/100km Real', 'Stop & Start System'],
              de: ['6,1 L/100km Real', 'Start-Stopp-System'],
              ru: ['6,1 л/100 км в жизни', 'Система Старт-Стоп']
            }
          },
          depreciationResale: {
            score: 8.2,
            badges: {
              en: ['Low Price Floor', 'Popular Starter Car'],
              de: ['Geringer Wertverlust', 'Beliebtes Stadtauto'],
              ru: ['Малая потеря цены', 'Ликвидный хэтчбек']
            }
          },
          maintenanceInsurance: {
            score: 8.9,
            badges: {
              en: ['Low 1.33L Road Tax', 'Cheap Parts & Tyres'],
              de: ['Niedrige 1.33L Steuer', 'Günstige Wartung'],
              ru: ['Малый налог и ОСАГО', 'Дешёвые расходники']
            }
          }
        }
      },
      {
        id: '1.6-valvematic',
        isDefault: false,
        shortTitle: 'AURIS 1.6 VALVEMATIC',
        fullName: '2014 Toyota Auris 1.6 Valvematic',
        engineBadge: '1.6L Valvematic • 132 HP',
        engineSubLabel: {
          en: '1ZR-FAE Naturally Aspirated Petrol • 6-MT • 160 Nm',
          de: '1ZR-FAE Valvematic Saugbenziner • 6-MT • 160 Nm',
          ru: '1ZR-FAE Атмосферный бензин • 6-ст. МКПП • 160 Н·м'
        },
        rarityLabel: {
          en: 'NA ALL-ROUNDER',
          de: 'SAUGER-ALLROUNDER',
          ru: 'КЛАССИЧЕСКИЙ АТМО'
        },
        originalMsrp: {
          en: '€19,750 New',
          de: '19.750 € Neu',
          ru: '€19 750 новый'
        },
        estUsedPrice: '€8,200',
        perkLabel: {
          en: '✦ Bulletproof 1.6 Valvematic • 1,300 kg Towing • Multi-Link Rear',
          de: '✦ Robuster 1.6 Valvematic • 1.300 kg Anhängelast • Mehrlenkerachse',
          ru: '✦ Неубиваемый 1.6 Valvematic • Буксировка 1 300 кг • Многорычажка'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 1.6 CHAIN NA',
            '1,300 KG BRAKED TOWING',
            'MULTI-LINK REAR AXLE',
            'NO TURBO OR HYBRID PARTS',
            'SMOOTH 6-MT (200 KM/H)'
          ],
          de: [
            'ROBUSTER 1.6 KETTENMOTOR',
            '1.300 KG ANHÄNGELAST',
            'MEHRLENKER-HINTERACHSE',
            'OHNE TURBO-KOMPLEXITÄT',
            '6-GANG-SCHALTER (200 KM/H)'
          ],
          ru: [
            'НАДЁЖНЫЙ ЦЕПНОЙ 1.6 NA',
            'БУКСИРОВКА ДО 1 300 КГ',
            'МНОГОРЫЧАЖКА СЗАДИ',
            'БЕЗ ТУРБИНЫ И ГИБРИДА',
            '6-СТ. МКПП (200 КМ/Ч)'
          ]
        },
        notableNegatives: {
          en: [
            'NEEDS REVS FOR TORQUE',
            '6.6 L/100KM REAL FUEL USE',
            'COMPACT 360L BOOT'
          ],
          de: [
            'BRAUCHT VIEL DREHZAHL',
            '6,6 L/100KM REALVERBRAUCH',
            'KOMPAKTER 360L KOFFERRAUM'
          ],
          ru: [
            'ТРЕБУЕТ ВЫСОКИХ ОБОРОТОВ',
            'РАСХОД 6,6 Л/100 КМ',
            'СКРОМНЫЙ БАГАЖНИК 360 Л'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.4,
            badges: {
              en: ['1.6 Timing Chain NA', '300,000+ km Lifespan'],
              de: ['1.6 Ketten-Saugmotor', '300.000+ km Laufleistung'],
              ru: ['Цепной мотор 1.6', 'Ресурс 300 000+ км']
            }
          },
          electronicsInfotainment: {
            score: 9.0,
            badges: {
              en: ['Simple NA Sensors', 'Touch 2 Infotainment'],
              de: ['Simpler Saugmotor', 'Touch-2-System'],
              ru: ['Простая электрика', 'Система Touch 2']
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Rattle-Free Cabin'],
              de: ['Guter Rostschutz', 'Klapperfreier Bau'],
              ru: ['Защита от ржавчины', 'Крепкий салон']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Compact Rear Space'],
              de: ['360L Boot (1.200L Max)', 'Kompakter Fond'],
              ru: ['Багажник 360–1 200 л', 'Тесновато сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.4,
            badges: {
              en: ['10.4 m Turning Circle', 'Rear-View Camera'],
              de: ['10,4 m Wendekreis', 'Rückfahrkamera'],
              ru: ['Разворот 10,4 м', 'Камера заднего вида']
            }
          },
          payloadTowing: {
            score: 8.6,
            badges: {
              en: ['520 kg Payload', '450 / 1,300 kg Towing'],
              de: ['520 kg Zuladung', '450 / 1.300 kg Zuglast'],
              ru: ['Нагрузка 520 кг', 'Прицеп: 450 / 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.1,
            badges: {
              en: ['0–100 km/h: 10.0 s', '160 Nm (200 km/h)'],
              de: ['0–100 km/h: 10,0 s', '160 Nm (200 km/h)'],
              ru: ['0–100 км/ч: 10,0 с', '160 Н·м (200 км/ч)']
            }
          },
          handlingAgility: {
            score: 6.5,
            badges: {
              en: ['Multi-Link Rear Axle', 'Balanced Front Weight'],
              de: ['Mehrlenker-Hinterachse', 'Gute Achslastbalance'],
              ru: ['Многорычажка сзади', 'Хороший баланс осей']
            }
          },
          brakingSafety: {
            score: 7.1,
            badges: {
              en: ['100–0 km/h: 35.8 m', 'NCAP 5★ (7 Airbags)'],
              de: ['100–0 km/h: 35,8 m', 'NCAP 5★ (7 Airbags)'],
              ru: ['100–0 км/ч: 35,8 м', 'NCAP 5★ (7 подушек)']
            }
          },
          efficiencyFuel: {
            score: 7.2,
            badges: {
              en: ['6.6 L/100km Real', 'Valvematic Lift'],
              de: ['6,6 L/100km Real', 'Valvematic-System'],
              ru: ['6,6 л/100 км в жизни', 'Фазы Valvematic']
            }
          },
          depreciationResale: {
            score: 8.5,
            badges: {
              en: ['Sought-After 1.6 NA', 'Strong Private Resale'],
              de: ['Gefragter 1.6 Sauger', 'Hohe Wertstabilität'],
              ru: ['Спрос на 1.6 атмо', 'Отличная ликвидность']
            }
          },
          maintenanceInsurance: {
            score: 8.7,
            badges: {
              en: ['No Turbo / DPF Parts', 'Low Service Costs'],
              de: ['Kein Turbo / DPF', 'Günstige Wartung'],
              ru: ['Нет турбины и DPF', 'Недорогое ТО']
            }
          }
        }
      },
      {
        id: '1.4-d4d',
        isDefault: false,
        shortTitle: 'AURIS 1.4 D-4D',
        fullName: '2014 Toyota Auris 1.4 D-4D',
        engineBadge: '1.4L D-4D • 90 HP',
        engineSubLabel: {
          en: '1ND-TV 8v Turbo-Diesel • 6-MT • 205 Nm Torque',
          de: '1ND-TV 1.4L Turbodiesel • 6-Gang-Schaltgetriebe • 205 Nm',
          ru: '1ND-TV 1.4L Турбодизель • 6-ст. МКПП • 205 Н·м'
        },
        rarityLabel: {
          en: 'FRUGAL DIESEL',
          de: 'SPAR-DIESEL',
          ru: 'ЭКОНОМ-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€19,200 New',
          de: '19.200 € Neu',
          ru: '€19 200 новый'
        },
        estUsedPrice: '€7,100',
        perkLabel: {
          en: '✦ 4.7 L/100km Diesel Economy • Tough 8v 1ND-TV Block • Low Tax',
          de: '✦ 4,7 L/100km Dieselverbrauch • Robuster 1ND-TV Motor • Günstige Steuer',
          ru: '✦ Расход 4,7 л/100 км • Надёжный дизель 1ND-TV • Малый налог'
        },
        remarkablePositives: {
          en: [
            '4.7L/100KM REAL ECONOMY',
            'TOUGH 1.4 DIESEL ENGINE',
            'CHEAPER CLUTCH REPAIRS',
            'LOW 1.4L DIESEL ROAD TAX',
            '1,000 KG BRAKED TOWING'
          ],
          de: [
            '4,7 L/100KM REALVERBRAUCH',
            'ROBUSTER 1.4 DIESELMOTOR',
            'GÜNSTIGERE KUPPLUNGSREPARATUR',
            'NIEDRIGE 1.4L KFZ-STEUER',
            '1.000 KG ANHÄNGELAST'
          ],
          ru: [
            'РАСХОД 4,7 Л/100 КМ',
            'НАДЁЖНЫЙ ДИЗЕЛЬ 1.4',
            'ДЕШЁВЫЙ РЕМОНТ СЦЕПЛЕНИЯ',
            'МАЛЫЙ НАЛОГ И СТРАХОВКА',
            'БУКСИРОВКА ДО 1 000 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 12.5S 0–100 KM/H',
            'DPF DISLIKES SHORT TRIPS',
            'EURO 5 CITY RESTRICTIONS',
            'COMPACT 360L BOOT'
          ],
          de: [
            'TRÄGE 12,5S 0–100 KM/H',
            'DPF MAG KEINE KURZSTRECKE',
            'EURO-5-UMWELTZONEN',
            'KOMPAKTER 360L KOFFERRAUM'
          ],
          ru: [
            'РАЗГОН 12,5 С ДО 100',
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'СКРОМНЫЙ БАГАЖНИК 360 Л'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.9,
            badges: {
              en: ['Simple 8v Chain Diesel', 'Single-Mass Flywheel'],
              de: ['Simpler 8V Kettenmotor', 'Einmassenschwungrad'],
              ru: ['Простой 8-кл. дизель', 'Одномассовый маховик']
            }
          },
          electronicsInfotainment: {
            score: 8.8,
            badges: {
              en: ['Simple Diesel Sensors', 'Touch 2 System'],
              de: ['Simpler Diesel-Kabelbaum', 'Touch-2-System'],
              ru: ['Простая топливная', 'Система Touch 2']
            }
          },
          buildQualityRust: {
            score: 9.0,
            badges: {
              en: ['Good Underbody Sealing', 'Rattle-Free Cabin'],
              de: ['Guter Rostschutz', 'Klapperfreier Bau'],
              ru: ['Защита от ржавчины', 'Крепкий салон']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Compact Rear Space'],
              de: ['360L Boot (1.200L Max)', 'Kompakter Fond'],
              ru: ['Багажник 360–1 200 л', 'Тесновато сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.3,
            badges: {
              en: ['10.4 m Turning Circle', 'Quick PTC Heater'],
              de: ['10,4 m Wendekreis', 'Schneller Zuheizer'],
              ru: ['Разворот 10,4 м', 'Быстрый электроотопитель']
            }
          },
          payloadTowing: {
            score: 8.0,
            badges: {
              en: ['505 kg Payload', '450 / 1,000 kg Towing'],
              de: ['505 kg Zuladung', '450 / 1.000 kg Zuglast'],
              ru: ['Нагрузка 505 кг', 'Прицеп: 450 / 1 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 3.8,
            badges: {
              en: ['0–100 km/h: 12.5 s', '205 Nm (180 km/h)'],
              de: ['0–100 km/h: 12,5 s', '205 Nm (180 km/h)'],
              ru: ['0–100 км/ч: 12,5 с', '205 Н·м (180 км/ч)']
            }
          },
          handlingAgility: {
            score: 6.0,
            badges: {
              en: ['Light 1.4L Front Axle', 'Basic Rear Suspension'],
              de: ['Leichte 1.4L Vorderachse', 'Einfache Hinterachse'],
              ru: ['Лёгкий дизель 1.4', 'Простая задняя подвеска']
            }
          },
          brakingSafety: {
            score: 7.0,
            badges: {
              en: ['100–0 km/h: 36.1 m', 'NCAP 5★ (7 Airbags)'],
              de: ['100–0 km/h: 36,1 m', 'NCAP 5★ (7 Airbags)'],
              ru: ['100–0 км/ч: 36,1 м', 'NCAP 5★ (7 подушек)']
            }
          },
          efficiencyFuel: {
            score: 9.0,
            badges: {
              en: ['4.7 L/100km Real', '1,000+ km Tank Range'],
              de: ['4,7 L/100km Real', '1.000+ km Reichweite'],
              ru: ['4,7 л/100 км в жизни', 'Запас хода 1 000+ км']
            }
          },
          depreciationResale: {
            score: 7.6,
            badges: {
              en: ['Euro 5 City Discount', 'Popular Commuter Car'],
              de: ['Euro-5-Abschlag', 'Gefragtes Pendlerauto'],
              ru: ['Эко-класс Евро-5', 'Ликвидный дизель']
            }
          },
          maintenanceInsurance: {
            score: 8.3,
            badges: {
              en: ['Low 1.4L Diesel Tax', 'No DMF Replacement'],
              de: ['Niedrige 1.4L Steuer', 'Kein teures ZMS'],
              ru: ['Малый налог (1.4 л)', 'Без двухмасса']
            }
          }
        }
      },
      {
        id: '2.0-d4d',
        isDefault: false,
        shortTitle: 'AURIS 2.0 D-4D',
        fullName: '2014 Toyota Auris 2.0 D-4D',
        engineBadge: '2.0L D-4D • 124 HP',
        engineSubLabel: {
          en: '1AD-FTV 16v Turbo-Diesel • 6-MT • 310 Nm Torque',
          de: '1AD-FTV 2.0L Turbodiesel • 6-Gang-Schaltgetriebe • 310 Nm',
          ru: '1AD-FTV 2.0L Турбодизель • 6-ст. МКПП • 310 Н·м'
        },
        rarityLabel: {
          en: 'HIGHWAY CRUISER',
          de: 'AUTOBAHN-GLEITER',
          ru: 'ТРАССОВЫЙ КРУИЗЕР'
        },
        originalMsrp: {
          en: '€23,150 New',
          de: '23.150 € Neu',
          ru: '€23 150 новый'
        },
        estUsedPrice: '€7,600',
        perkLabel: {
          en: '✦ 310 Nm Torque • 1,500 kg Braked Towing • Multi-Link Rear',
          de: '✦ 310 Nm Drehmoment • 1.500 kg Anhängelast • Mehrlenkerachse',
          ru: '✦ Тяга 310 Н·м • Буксировка 1 500 кг • Многорычажная подвеска'
        },
        remarkablePositives: {
          en: [
            '310 NM LOW-RPM TORQUE',
            '1,500 KG BRAKED TOWING',
            'MULTI-LINK REAR AXLE',
            '200 KM/H HIGHWAY CRUISER',
            '5.3L/100KM REAL ECONOMY'
          ],
          de: [
            '310 NM DREHMOMENT',
            '1.500 KG ANHÄNGELAST',
            'MEHRLENKER-HINTERACHSE',
            '200 KM/H AUTOBAHN-GLEITER',
            '5,3 L/100KM REALVERBRAUCH'
          ],
          ru: [
            'ТЯГА 310 Н·М С НИЗОВ',
            'БУКСИРОВКА ДО 1 500 КГ',
            'МНОГОРЫЧАЖКА СЗАДИ',
            'КРУИЗЕР (200 КМ/Ч)',
            'РАСХОД 5,3 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'HIGH 2.0L DIESEL ROAD TAX',
            'EGR & DPF DISLIKE CITY USE',
            'EURO 5 CITY RESTRICTIONS',
            'COMPACT 360L BOOT'
          ],
          de: [
            'HÖHERE 2.0L KFZ-STEUER',
            'AGR & DPF BEI KURZSTRECKE',
            'EURO-5-UMWELTZONEN',
            'KOMPAKTER 360L KOFFERRAUM'
          ],
          ru: [
            'ВЫШЕ НАЛОГ (2.0 ДИЗЕЛЬ)',
            'EGR И DPF В ПРОБКАХ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'СКРОМНЫЙ БАГАЖНИК 360 Л'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.7,
            badges: {
              en: ['Revised 2.0 Chain Block', 'Periodic EGR Cleaning'],
              de: ['Robuster 2.0 Kettenmotor', 'AGR-Reinigung ratsam'],
              ru: ['Цепной дизель 2.0', 'Чистка EGR и DPF']
            }
          },
          electronicsInfotainment: {
            score: 8.6,
            badges: {
              en: ['Denso Common-Rail', 'Touch 2 Infotainment'],
              de: ['Denso-Einspritzung', 'Touch-2-System'],
              ru: ['Топливная Denso', 'Система Touch 2']
            }
          },
          buildQualityRust: {
            score: 9.1,
            badges: {
              en: ['Good Underbody Sealing', 'Extra Hood Insulation'],
              de: ['Guter Rostschutz', 'Extra Motor-Dämmung'],
              ru: ['Защита от ржавчины', 'Шумоизоляция капота']
            }
          },
          interiorBootSpace: {
            score: 7.6,
            badges: {
              en: ['360L Boot (1,200L Max)', 'Compact Rear Space'],
              de: ['360L Boot (1.200L Max)', 'Kompakter Fond'],
              ru: ['Багажник 360–1 200 л', 'Тесновато сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.2,
            badges: {
              en: ['10.8 m Turning Circle', 'Rear-View Camera'],
              de: ['10,8 m Wendekreis', 'Rückfahrkamera'],
              ru: ['Разворот 10,8 м', 'Камера заднего вида']
            }
          },
          payloadTowing: {
            score: 9.1,
            badges: {
              en: ['535 kg Payload', '450 / 1,500 kg Towing'],
              de: ['535 kg Zuladung', '450 / 1.500 kg Zuglast'],
              ru: ['Нагрузка 535 кг', 'Прицеп: 450 / 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.3,
            badges: {
              en: ['0–100 km/h: 10.0 s', '310 Nm (200 km/h)'],
              de: ['0–100 km/h: 10,0 s', '310 Nm (200 km/h)'],
              ru: ['0–100 км/ч: 10,0 с', '310 Н·м (200 км/ч)']
            }
          },
          handlingAgility: {
            score: 6.4,
            badges: {
              en: ['Multi-Link Rear Axle', 'Planted Highway Ride'],
              de: ['Mehrlenker-Hinterachse', 'Starker Geradeauslauf'],
              ru: ['Многорычажка сзади', 'Устойчив на трассе']
            }
          },
          brakingSafety: {
            score: 7.1,
            badges: {
              en: ['100–0 km/h: 36.0 m', 'NCAP 5★ (7 Airbags)'],
              de: ['100–0 km/h: 36,0 m', 'NCAP 5★ (7 Airbags)'],
              ru: ['100–0 км/ч: 36,0 м', 'NCAP 5★ (7 подушек)']
            }
          },
          efficiencyFuel: {
            score: 8.5,
            badges: {
              en: ['5.3 L/100km Real', '940+ km Tank Range'],
              de: ['5,3 L/100km Real', '940+ km Reichweite'],
              ru: ['5,3 л/100 км в жизни', 'Запас хода 940+ км']
            }
          },
          depreciationResale: {
            score: 7.5,
            badges: {
              en: ['Euro 5 City Discount', 'Popular Tow / Tourer'],
              de: ['Euro-5-Abschlag', 'Gefragtes Zugfahrzeug'],
              ru: ['Эко-класс Евро-5', 'Ценится для трассы']
            }
          },
          maintenanceInsurance: {
            score: 7.6,
            badges: {
              en: ['Higher 2.0L Road Tax', 'DMF & DPF Service'],
              de: ['Höhere 2.0L Steuer', 'ZMS- & DPF-Wartung'],
              ru: ['Выше налог (2.0 л)', 'Маховик и фильтр DPF']
            }
          }
        }
      }
    ]
  },
  {
    id: 'honda-civic-2014',
    number: '02',
    yearMake: '2014 HONDA',
    rarityClass: 'rarity-dependable',
    drivetrain: 'FWD',
    image: 'assets/honda-civic-2014.png',
    defaultEngineId: '1.8-ivtec',
    engines: [
      {
        id: '1.8-ivtec',
        isDefault: true,
        shortTitle: 'CIVIC 1.8 i-VTEC',
        fullName: '2014 Honda Civic 1.8 i-VTEC',
        engineBadge: '1.8L i-VTEC NA • 142 HP',
        engineSubLabel: {
          en: 'R18Z4 Naturally Aspirated Petrol • 6-MT • 174 Nm',
          de: 'R18Z4 Saugbenziner • 6-Gang-Schaltgetriebe • 174 Nm',
          ru: 'R18Z4 Атмосферный бензин • 6-ст. МКПП • 174 Н·м'
        },
        rarityLabel: {
          en: 'SPACE MASTER',
          de: 'RAUMWUNDER',
          ru: 'МАСТЕР ПРОСТРАНСТВА'
        },
        originalMsrp: {
          en: '€23,200 New',
          de: '23.200 € Neu',
          ru: '€23 200 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ 477L Class-Leading Boot • Fold-Up Magic Seats',
          de: '✦ 477L Klassenbester Kofferraum • Magic Seats',
          ru: '✦ Лучший багажник 477 л • Сиденья Magic Seats'
        },
        remarkablePositives: {
          en: [
            'CLASS-LEADING 477L BOOT',
            'FOLD-UP MAGIC SEATS',
            'BULLETPROOF 1.8L NA VTEC',
            '1,400 KG BRAKED TOWING'
          ],
          de: [
            'KLASSENBESTE 477L KOFFERRAUM',
            'HOCHKLAPPBARE MAGIC SEATS',
            'UNZERSTÖRBARER 1.8L SAUGMOTOR',
            '1.400 KG GEBREMSTE ANHÄNGELAST'
          ],
          ru: [
            'ЛУЧШИЙ В КЛАССЕ БАГАЖНИК 477 Л',
            'СКЛАДНЫЕ СИДЕНЬЯ MAGIC SEATS',
            'НЕУБИВАЕМЫЙ АТМОСФЕРНИК 1.8 i-VTEC',
            'БУКСИРОВКА ДО 1 400 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'IMPAIRED REAR VISIBILITY',
            'THIRSTIER IN URBAN TRAFFIC',
            'FIRMER CITY RIDE'
          ],
          de: [
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'HÖHERER STADTVERBRAUCH',
            'STRAFFERES FAHRWERK IN DER STADT'
          ],
          ru: [
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ПОВЫШЕННЫЙ РАСХОД В ПРОБКАХ',
            'БОЛЕЕ ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.5,
            badges: {
              en: ['1.8 Chain-Driven NA', 'Crisp 6-Speed Manual'],
              de: ['1.8 Ketten-Saugmotor', 'Präzises 6-Gang-Getriebe'],
              ru: ['Цепной мотор 1.8', 'Чёткая 6-ст. МКПП']
            },
            dossier: {
              en: {
                headline: 'Legendary Low-Friction SOHC VTEC with Lifetime Timing Chain',
                strengths: [
                  'Port Fuel Injection: Multi-point injection ensures intake valves remain spotless with zero direct-injection carbon fouling.',
                  'Maintenance-Free Timing Chain: High-durability silent roller chain engineered for vehicle lifetime without stretch or tensioner failure.',
                  'Highway Economy VTEC Cam: Shifts into Atkinson-like high-expansion valve timing at low-load cruise for high efficiency without turbo heat/pressure.',
                  'Ultra-Robust 6-Speed Manual: Heavy-duty single-mass flywheel and durable clutch with Honda hallmark mechanical shifting precision.'
                ],
                watchouts: [
                  'Manual screw-type valve clearance check recommended every 100,000 km (rarely requires adjustment).',
                  'Use specified low-viscosity 0W-20 or 5W-30 synthetic oil to maintain VTEC spool valve solenoid operation.'
                ]
              },
              de: {
                headline: 'Legendärer reibungsarmer SOHC-VTEC mit wartungsfreier Steuerkette',
                strengths: [
                  'Saugrohreinspritzung: Saubere Einlassventile ohne Verkokungsprobleme moderner Direkteinspritzer.',
                  'Wartungsfreie Steuerkette: Hochfeste Zahnkette ohne Dehnungsprobleme über die gesamte Fahrzeuglebensdauer.',
                  'Sparsamer VTEC-Teillastmodus: Schaltet bei Autobahn-Konstantfahrt in Atkinson-Steuerzeiten für maximale Effizienz ohne Turbo-Belastung.',
                  'Solides 6-Gang-Schaltgetriebe: Langlebiges Einmassenschwungrad und robuste Kupplung mit typisch knackiger Honda-Schaltpräzision.'
                ],
                watchouts: [
                  'Ventilspielkontrolle per Einstellschrauben alle 100.000 km empfohlen (verstellt sich selten).',
                  'Vorgeschriebenes 0W-20 oder 5W-30 Synthetiköl einhalten für einwandfreie Funktion des VTEC-Ventils.'
                ]
              },
              ru: {
                headline: 'Легендарный атмосферный SOHC i-VTEC с вечной цепью ГРМ',
                strengths: [
                  'Распределённый впрыск топлива: Клапаны всегда остаются чистыми, нет проблем с нагаром, как у турбомоторов с прямым впрыском.',
                  'Не растягивающаяся цепь ГРМ: Рассчитана на весь срок службы автомобиля и не требует плановой замены.',
                  'Экономичный режим VTEC: На крейсерской скорости переходит на поздний впуск (цикл Аткинсона) для экономии топлива без тепловых перегрузок.',
                  'Надёжная 6-ступенчатая механика: Простое одномассовое сцепление и фирменная эталонная чёткость переключений Honda.'
                ],
                watchouts: [
                  'Проверка тепловых зазоров клапанов (винтовая регулировка) каждые 100 000 км.',
                  'Регулярная замена качественного масла 0W-20 / 5W-30 для безупречной работы соленоида VTEC.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 8.7,
            badges: {
              en: ['Dual-Screen i-MID', 'Low Sensor Count'],
              de: ['Solides i-MID Display', 'Wenig Sensorik'],
              ru: ['Экран i-MID', 'Простая электрика']
            }
          },
          buildQualityRust: {
            score: 8.9,
            badges: {
              en: ['Solid Chassis Sealing', 'Durable Cabin Trim'],
              de: ['Solider Rostschutz', 'Robuster Innenraum'],
              ru: ['Защита кузова', 'Прочный салон']
            }
          },
          interiorBootSpace: {
            score: 9.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Boot (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.4,
            badges: {
              en: ['10.9 m Turning Circle', 'Split Rear Glass'],
              de: ['10,9 m Wendekreis', 'Geteilte Heckscheibe'],
              ru: ['Разворот 10,9 м', 'Раздельное стекло']
            }
          },
          payloadTowing: {
            score: 8.9,
            badges: {
              en: ['490 kg Payload', '500 / 1,400 kg Towing'],
              de: ['490 kg Zuladung', '500 / 1.400 kg Zuglast'],
              ru: ['Нагрузка 490 кг', 'Прицеп: 500 / 1 400 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.8,
            badges: {
              en: ['0–100 km/h: 9.1 s', '174 Nm (215 km/h)'],
              de: ['0–100 km/h: 9,1 s', '174 Nm (215 km/h)'],
              ru: ['0–100 км/ч: 9,1 с', '174 Н·м (215 км/ч)']
            }
          },
          handlingAgility: {
            score: 7.1,
            badges: {
              en: ['Direct Steering Feel', 'Firmer City Ride'],
              de: ['Direkte Lenkung', 'Straffes Stadt-Setup'],
              ru: ['Точный руль', 'Жёстче в городе']
            }
          },
          brakingSafety: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 35.8 m', 'NCAP 5★ + City Brake'],
              de: ['100–0 km/h: 35,8 m', 'NCAP 5★ + City-Bremse'],
              ru: ['100–0 км/ч: 35,8 м', 'NCAP 5★ + автотормоз']
            }
          },
          efficiencyFuel: {
            score: 7.4,
            badges: {
              en: ['6.3 L/100km Real', 'ECON Eco Mode'],
              de: ['6,3 L/100km Real', 'ECON-Sparmodus'],
              ru: ['6,3 л/100 км в жизни', 'Эко-режим ECON']
            }
          },
          depreciationResale: {
            score: 8.5,
            badges: {
              en: ['Popular 1.8 VTEC', 'Strong Private Demand'],
              de: ['Gefragter 1.8 VTEC', 'Hohe Wertstabilität'],
              ru: ['Ликвидный 1.8 VTEC', 'Высокий спрос б/у']
            }
          },
          maintenanceInsurance: {
            score: 8.3,
            badges: {
              en: ['Cheap OEM Service', 'Moderate Insurance'],
              de: ['Günstige Ersatzteile', 'Moderate Typklasse'],
              ru: ['Доступное ТО', 'Умеренная страховка']
            }
          }
        }
      },
      {
        id: '1.4-ivtec',
        isDefault: false,
        shortTitle: 'CIVIC 1.4 i-VTEC',
        fullName: '2014 Honda Civic 1.4 i-VTEC',
        engineBadge: '1.4L i-VTEC NA • 100 HP',
        engineSubLabel: {
          en: 'L13Z4 Naturally Aspirated Petrol • 6-MT • 127 Nm',
          de: 'L13Z4 Saugbenziner • 6-Gang-Schaltgetriebe • 127 Nm',
          ru: 'L13Z4 Атмосферный бензин • 6-ст. МКПП • 127 Н·м'
        },
        rarityLabel: {
          en: 'PRACTICAL SAVER',
          de: 'RAUM-SPARMEISTER',
          ru: 'ПРАКТИЧНЫЙ БАЗОВЫЙ'
        },
        originalMsrp: {
          en: '€16,950 New',
          de: '16.950 € Neu',
          ru: '€16 950 новый'
        },
        estUsedPrice: '€7,400',
        perkLabel: {
          en: '✦ Bulletproof 1.4 i-VTEC • 477L Boot & Magic Seats • Low Running Costs',
          de: '✦ Unverwüstlicher 1.4 i-VTEC • 477L Kofferraum & Magic Seats',
          ru: '✦ Надёжный 1.4 i-VTEC • Багажник 477 л и сиденья Magic Seats'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 1.4 CHAIN NA',
            '477L BOOT & MAGIC SEATS',
            'LOWEST CIVIC TAX & INS.',
            'LIGHT 1,180 KG AGILITY',
            '1,200 KG BRAKED TOWING'
          ],
          de: [
            'ROBUSTER 1.4 KETTENMOTOR',
            '477L BOOT & MAGIC SEATS',
            'NIEDRIGSTE STEUER & TYP',
            'LEICHTE 1.180 KG AGILITÄT',
            '1.200 KG ANHÄNGELAST'
          ],
          ru: [
            'НАДЁЖНЫЙ ЦЕПНОЙ 1.4 NA',
            'БАГАЖНИК 477 Л + MAGIC SEATS',
            'НИЗКИЙ НАЛОГ И СТРАХОВКА',
            'ЛЁГКИЙ КУЗОВ (1 180 КГ)',
            'БУКСИРОВКА ДО 1 200 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 13.4S 0–100 KM/H',
            'NEEDS FREQUENT DOWNSHIFTS',
            'IMPAIRED REAR VISIBILITY',
            'FIRMER CITY RIDE'
          ],
          de: [
            'TRÄGE 13,4S 0–100 KM/H',
            'WENIG DURCHZUG AM BERG',
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'STRAFFERES STADTFAHRWERK'
          ],
          ru: [
            'РАЗГОН 13,4 С ДО 100',
            'СЛАБАЯ ТЯГА ПОД НАГРУЗКОЙ',
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.6,
            badges: {
              en: ['1.4 Chain-Driven NA', 'Indestructible Block'],
              de: ['1.4 Ketten-Saugmotor', 'Unverwüstlicher Bau'],
              ru: ['Цепной мотор 1.4', 'Вечный ресурс']
            }
          },
          electronicsInfotainment: {
            score: 8.8,
            badges: {
              en: ['Simple ECU Sensors', 'Dual-Screen i-MID'],
              de: ['Simples Bordnetz', 'Solides i-MID Display'],
              ru: ['Простая электрика', 'Экран i-MID']
            }
          },
          buildQualityRust: {
            score: 8.9,
            badges: {
              en: ['Solid Chassis Sealing', 'Durable Cabin Trim'],
              de: ['Solider Rostschutz', 'Robuster Innenraum'],
              ru: ['Защита кузова', 'Прочный салон']
            }
          },
          interiorBootSpace: {
            score: 9.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Boot (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.5,
            badges: {
              en: ['10.6 m Turning Circle', 'Split Rear Glass'],
              de: ['10,6 m Wendekreis', 'Geteilte Heckscheibe'],
              ru: ['Разворот 10,6 м', 'Раздельное стекло']
            }
          },
          payloadTowing: {
            score: 8.4,
            badges: {
              en: ['495 kg Payload', '500 / 1,200 kg Towing'],
              de: ['495 kg Zuladung', '500 / 1.200 kg Zuglast'],
              ru: ['Нагрузка 495 кг', 'Прицеп: 500 / 1 200 кг']
            }
          },
          accelerationOvertaking: {
            score: 3.4,
            badges: {
              en: ['0–100 km/h: 13.4 s', '127 Nm (187 km/h)'],
              de: ['0–100 km/h: 13,4 s', '127 Nm (187 km/h)'],
              ru: ['0–100 км/ч: 13,4 с', '127 Н·м (187 км/ч)']
            }
          },
          handlingAgility: {
            score: 6.8,
            badges: {
              en: ['Light 1,180 kg Weight', 'Firmer City Ride'],
              de: ['Leichte 1.180 kg', 'Straffes Stadt-Setup'],
              ru: ['Малый вес 1 180 кг', 'Жёстче в городе']
            }
          },
          brakingSafety: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 35.6 m', 'NCAP 5★ + City Brake'],
              de: ['100–0 km/h: 35,6 m', 'NCAP 5★ + City-Bremse'],
              ru: ['100–0 км/ч: 35,6 м', 'NCAP 5★ + автотормоз']
            }
          },
          efficiencyFuel: {
            score: 8.0,
            badges: {
              en: ['5.9 L/100km Real', 'ECON + Idle Stop'],
              de: ['5,9 L/100km Real', 'ECON & Start-Stopp'],
              ru: ['5,9 л/100 км в жизни', 'ECON + Старт-Стоп']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Low Price Floor', 'Popular City Hatch'],
              de: ['Geringer Wertverlust', 'Gefragtes Stadtauto'],
              ru: ['Малая потеря цены', 'Высокий спрос б/у']
            }
          },
          maintenanceInsurance: {
            score: 9.0,
            badges: {
              en: ['Lowest Civic Tax/Ins.', 'Minimal Service Cost'],
              de: ['Niedrige Steuer & Typ', 'Minimale Wartung'],
              ru: ['Малый налог и ОСАГО', 'Дешёвое ТО']
            }
          }
        }
      },
      {
        id: '1.6-idtec',
        isDefault: false,
        shortTitle: 'CIVIC 1.6 i-DTEC',
        fullName: '2014 Honda Civic 1.6 i-DTEC',
        engineBadge: '1.6L i-DTEC • 120 HP',
        engineSubLabel: {
          en: 'N16A1 Earth Dreams Turbo-Diesel • 6-MT • 300 Nm',
          de: 'N16A1 Earth Dreams Turbodiesel • 6-MT • 300 Nm',
          ru: 'N16A1 Earth Dreams Турбодизель • 6-ст. МКПП • 300 Н·м'
        },
        rarityLabel: {
          en: 'EFFICIENCY KING',
          de: 'EFFIZIENZ-MEISTER',
          ru: 'КОРОЛЬ ЭКОНОМИИ'
        },
        originalMsrp: {
          en: '€21,950 New',
          de: '21.950 € Neu',
          ru: '€21 950 новый'
        },
        estUsedPrice: '€8,600',
        perkLabel: {
          en: '✦ 4.3 L/100km Economy • 300 Nm Earth Dreams Diesel • 477L Boot',
          de: '✦ 4,3 L/100km Realverbrauch • 300 Nm Earth-Dreams-Diesel • 477L Boot',
          ru: '✦ Расход 4,3 л/100 км • 300 Н·м дизель Earth Dreams • Багажник 477 л'
        },
        remarkablePositives: {
          en: [
            '4.3L/100KM REAL ECONOMY',
            '1,100+ KM TANK RANGE',
            '300 NM TORQUE (N16A1)',
            '477L BOOT & MAGIC SEATS',
            '1,400 KG BRAKED TOWING'
          ],
          de: [
            '4,3 L/100KM REALVERBRAUCH',
            '1.100+ KM TANKREICHWEITE',
            '300 NM ALU-DIESEL (N16A1)',
            '477L BOOT & MAGIC SEATS',
            '1.400 KG ANHÄNGELAST'
          ],
          ru: [
            'РАСХОД 4,3 Л/100 КМ',
            'ЗАПАС ХОДА 1 100+ КМ',
            'ТЯГА 300 Н·М (N16A1)',
            'БАГАЖНИК 477 Л + MAGIC SEATS',
            'БУКСИРОВКА ДО 1 400 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'DPF DISLIKES SHORT TRIPS',
            'EURO 5 CITY RESTRICTIONS',
            'IMPAIRED REAR VISIBILITY',
            'FIRMER CITY RIDE'
          ],
          de: [
            'DPF MAG KEINE KURZSTRECKE',
            'EURO-5-UMWELTZONEN',
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'STRAFFERES STADTFAHRWERK'
          ],
          ru: [
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.2,
            badges: {
              en: ['Earth Dreams 1.6 Chain', 'Low-Friction Alu Block'],
              de: ['1.6 Alu-Kettenmotor', 'Reibungsarmer Block'],
              ru: ['Цепной 1.6 дизель', 'Алюминиевый блок']
            }
          },
          electronicsInfotainment: {
            score: 8.6,
            badges: {
              en: ['Dual-Screen i-MID', 'Bosch Injection'],
              de: ['Solides i-MID Display', 'Bosch-Einspritzung'],
              ru: ['Экран i-MID', 'Впрыск Bosch']
            }
          },
          buildQualityRust: {
            score: 8.9,
            badges: {
              en: ['Solid Chassis Sealing', 'Durable Cabin Trim'],
              de: ['Solider Rostschutz', 'Robuster Innenraum'],
              ru: ['Защита кузова', 'Прочный салон']
            }
          },
          interiorBootSpace: {
            score: 9.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Boot (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.4,
            badges: {
              en: ['10.9 m Turning Circle', 'Split Rear Glass'],
              de: ['10,9 m Wendekreis', 'Geteilte Heckscheibe'],
              ru: ['Разворот 10,9 м', 'Раздельное стекло']
            }
          },
          payloadTowing: {
            score: 8.9,
            badges: {
              en: ['490 kg Payload', '500 / 1,400 kg Towing'],
              de: ['490 kg Zuladung', '500 / 1.400 kg Zuglast'],
              ru: ['Нагрузка 490 кг', 'Прицеп: 500 / 1 400 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.0,
            badges: {
              en: ['0–100 km/h: 10.5 s', '300 Nm (207 km/h)'],
              de: ['0–100 km/h: 10,5 s', '300 Nm (207 km/h)'],
              ru: ['0–100 км/ч: 10,5 с', '300 Н·м (207 км/ч)']
            }
          },
          handlingAgility: {
            score: 7.0,
            badges: {
              en: ['Light 1.6 Alu Front', 'Sharp Turn-In'],
              de: ['Leichte Alu-Vorderachse', 'Agiles Einlenken'],
              ru: ['Лёгкий передок', 'Точный вход в поворот']
            }
          },
          brakingSafety: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 35.7 m', 'NCAP 5★ + City Brake'],
              de: ['100–0 km/h: 35,7 m', 'NCAP 5★ + City-Bremse'],
              ru: ['100–0 км/ч: 35,7 м', 'NCAP 5★ + автотормоз']
            }
          },
          efficiencyFuel: {
            score: 9.4,
            badges: {
              en: ['4.3 L/100km Real', '1,100+ km Tank Range'],
              de: ['4,3 L/100km Real', '1.100+ km Reichweite'],
              ru: ['4,3 л/100 км в жизни', 'Запас хода 1 100+ км']
            }
          },
          depreciationResale: {
            score: 8.1,
            badges: {
              en: ['Top Civic Diesel', 'High Commuter Demand'],
              de: ['Gefragtester Diesel', 'Beliebt bei Pendlern'],
              ru: ['Ликвидный дизель', 'Высокий спрос б/у']
            }
          },
          maintenanceInsurance: {
            score: 8.2,
            badges: {
              en: ['Moderate 1.6L Tax', 'Chain-Driven (No Belt)'],
              de: ['Moderate 1.6L Steuer', 'Steuerkette (Kein Riemen)'],
              ru: ['Умеренный налог (1.6)', 'Цепь ГРМ (без ремня)']
            }
          }
        }
      },
      {
        id: '2.2-idtec',
        isDefault: false,
        shortTitle: 'CIVIC 2.2 i-DTEC',
        fullName: '2014 Honda Civic 2.2 i-DTEC',
        engineBadge: '2.2L i-DTEC • 150 HP',
        engineSubLabel: {
          en: 'N22B4 2.2L Turbo-Diesel • 6-MT • 350 Nm Torque',
          de: 'N22B4 2.2L Turbodiesel • 6-Gang-Schaltgetriebe • 350 Nm',
          ru: 'N22B4 2.2L Турбодизель • 6-ст. МКПП • 350 Н·м'
        },
        rarityLabel: {
          en: 'TORQUE TOURER',
          de: 'LANGSTRECKEN-ASS',
          ru: 'ДИЗЕЛЬНЫЙ ТУРЕР'
        },
        originalMsrp: {
          en: '€25,650 New',
          de: '25.650 € Neu',
          ru: '€25 650 новый'
        },
        estUsedPrice: '€8,400',
        perkLabel: {
          en: '✦ 350 Nm Torque • 5.1 L/100km • 477L Boot & Magic Seats',
          de: '✦ 350 Nm Drehmoment • 5,1 L/100km • 477L Kofferraum',
          ru: '✦ 350 Н·м тяги • 5,1 л/100 км • Багажник 477 л'
        },
        remarkablePositives: {
          en: [
            '350 NM HIGHWAY TORQUE',
            '5.1L/100KM REAL ECONOMY',
            'CLASS-LEADING 477L BOOT',
            'FOLD-UP MAGIC SEATS',
            '1,500 KG BRAKED TOWING',
            'TOUGH N22B4 ALU DIESEL'
          ],
          de: [
            '350 NM AUTOBAHN-DURCHZUG',
            '5,1 L/100KM REALVERBRAUCH',
            '477L KOFFERRAUM',
            'HOCHKLAPPBARE MAGIC SEATS',
            '1.500 KG ANHÄNGELAST',
            'ROBUSTER N22B4 DIESEL'
          ],
          ru: [
            'ТЯГА 350 Н·М НА ТРАССЕ',
            'РАСХОД 5,1 Л/100 КМ',
            'БАГАЖНИК 477 Л',
            'СИДЕНЬЯ MAGIC SEATS',
            'БУКСИРОВКА ДО 1 500 КГ',
            'НАДЁЖНЫЙ ДИЗЕЛЬ N22B4'
          ]
        },
        notableNegatives: {
          en: [
            'DPF DISLIKES SHORT TRIPS',
            'HIGH 2.2L DIESEL ROAD TAX',
            'EURO 5 CITY RESTRICTIONS',
            'IMPAIRED REAR VISIBILITY',
            'FIRMER CITY RIDE'
          ],
          de: [
            'DPF MAG KEINE KURZSTRECKE',
            'HÖHERE 2.2L KFZ-STEUER',
            'EURO-5-UMWELTZONEN',
            'EINGESCHRÄNKTE SICHT NACH HINTEN',
            'STRAFFERES STADTFAHRWERK'
          ],
          ru: [
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ВЫШЕ НАЛОГ (2.2 ДИЗЕЛЬ)',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС',
            'ОГРАНИЧЕННЫЙ ОБЗОР СЗАДИ',
            'ЖЁСТКАЯ ПОДВЕСКА В ГОРОДЕ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.1,
            badges: {
              en: ['2.2 Chain-Driven Block', 'Watch DPF & DMF Wear'],
              de: ['Robuster 2.2 Kettenmotor', 'DPF & ZMS beachten'],
              ru: ['Цепной дизель 2.2', 'Внимание к DPF и ZMS']
            }
          },
          electronicsInfotainment: {
            score: 8.5,
            badges: {
              en: ['Dual-Screen i-MID', 'DPF Pressure Sensors'],
              de: ['Solides i-MID Display', 'DPF-Drucksensorik'],
              ru: ['Экран i-MID', 'Датчики фильтра DPF']
            }
          },
          buildQualityRust: {
            score: 8.9,
            badges: {
              en: ['Solid Chassis Sealing', 'Insulated Diesel Cabin'],
              de: ['Solider Rostschutz', 'Gute Diesel-Dämmung'],
              ru: ['Защита кузова', 'Хорошая шумоизоляция']
            }
          },
          interiorBootSpace: {
            score: 9.6,
            badges: {
              en: ['477L Boot (1,378L Max)', 'Fold-Up Magic Seats'],
              de: ['477L Boot (1.378L Max)', 'Magic Seats Rückbank'],
              ru: ['Багажник 477–1 378 л', 'Сиденья Magic Seats']
            }
          },
          cabinErgonomicsVisibility: {
            score: 8.3,
            badges: {
              en: ['11.3 m Turning Circle', 'Split Rear Glass'],
              de: ['11,3 m Wendekreis', 'Geteilte Heckscheibe'],
              ru: ['Разворот 11,3 м', 'Раздельное стекло']
            }
          },
          payloadTowing: {
            score: 9.2,
            badges: {
              en: ['500 kg Payload', '500 / 1,500 kg Towing'],
              de: ['500 kg Zuladung', '500 / 1.500 kg Zuglast'],
              ru: ['Нагрузка 500 кг', 'Прицеп: 500 / 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.3,
            badges: {
              en: ['0–100 km/h: 8.5 s', '350 Nm (217 km/h)'],
              de: ['0–100 km/h: 8,5 s', '350 Nm (217 km/h)'],
              ru: ['0–100 км/ч: 8,5 с', '350 Н·м (217 км/ч)']
            }
          },
          handlingAgility: {
            score: 6.7,
            badges: {
              en: ['Stable Highway Cruiser', 'Heavier 2.2 Front Axle'],
              de: ['Souverän auf Autobahn', 'Schwerere 2.2-Achse'],
              ru: ['Устойчив на трассе', 'Тяжелее передок (2.2)']
            }
          },
          brakingSafety: {
            score: 7.2,
            badges: {
              en: ['100–0 km/h: 35.9 m', 'NCAP 5★ + City Brake'],
              de: ['100–0 km/h: 35,9 m', 'NCAP 5★ + City-Bremse'],
              ru: ['100–0 км/ч: 35,9 м', 'NCAP 5★ + автотормоз']
            }
          },
          efficiencyFuel: {
            score: 8.8,
            badges: {
              en: ['5.1 L/100km Real', '950+ km Tank Range'],
              de: ['5,1 L/100km Real', '950+ km Reichweite'],
              ru: ['5,1 л/100 км в жизни', 'Запас хода 950+ км']
            }
          },
          depreciationResale: {
            score: 7.7,
            badges: {
              en: ['Euro 5 City Discount', 'Popular Highway Tourer'],
              de: ['Euro-5-Abschlag', 'Beliebt für Langstrecke'],
              ru: ['Эко-класс Евро-5', 'Ценится для трассы']
            }
          },
          maintenanceInsurance: {
            score: 7.5,
            badges: {
              en: ['Higher 2.2L Road Tax', 'DPF & DMF Service'],
              de: ['Höhere 2.2L Steuer', 'ZMS- & DPF-Wartung'],
              ru: ['Выше налог (2.2 л)', 'Маховик и фильтр DPF']
            }
          }
        }
      }
    ]
  },
  {
    id: 'honda-crv-2010',
    number: '03',
    yearMake: '2010 HONDA',
    rarityClass: 'rarity-common',
    drivetrain: 'AWD',
    image: 'assets/honda-crv-2010.png',
    defaultEngineId: '2.0-ivtec',
    engines: [
      {
        id: '2.0-ivtec',
        isDefault: true,
        shortTitle: 'CR-V 2.0 i-VTEC',
        fullName: '2010 Honda CR-V 2.0 i-VTEC',
        engineBadge: '2.0L i-VTEC AWD • 150 HP',
        engineSubLabel: {
          en: 'R20A2 Naturally Aspirated Petrol • 6-MT • 192 Nm • Real Time AWD',
          de: 'R20A2 Saugbenziner • 6-Gang-Schaltgetriebe • 192 Nm • Allrad',
          ru: 'R20A2 Атмосферный бензин • 6-ст. МКПП • 192 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'FAMILY SUV ICON',
          de: 'FAMILIEN-SUV-IKONE',
          ru: 'ЭТАЛОН КРОССОВЕРА'
        },
        originalMsrp: {
          en: '€28,900 New',
          de: '28.900 € Neu',
          ru: '€28 900 новый'
        },
        estUsedPrice: '€9,800',
        perkLabel: {
          en: '✦ 556L Double-Deck Boot • Bulletproof 2.0 i-VTEC • Real Time AWD',
          de: '✦ 556L Doppelboden-Kofferraum • Robuster 2.0 i-VTEC • Allrad',
          ru: '✦ Багажник 556 л (2 уровня) • Вечный 2.0 i-VTEC • Полный привод'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 2.0 NA ENGINE',
            '556L DOUBLE-DECK BOOT',
            'SLIDING 40:20:40 REAR SEATS',
            'COMMANDING SUV VISIBILITY',
            '1,600 KG TOWING + AWD'
          ],
          de: [
            'ROBUSTER 2.0 KETTENMOTOR',
            '556L DOPPELBODEN-BOOT',
            'VERSCHIEBBARE RÜCKBANK',
            'TOP SUV-RUNDSICHT',
            '1.600 KG ZUGLAST & ALLRAD'
          ],
          ru: [
            'ВЕЧНЫЙ ЦЕПНОЙ 2.0 R20A2',
            'БАГАЖНИК 556 Л (2 ПОЛКИ)',
            'СДВИЖНОЙ ЗАДНИЙ РЯД',
            'ОТЛИЧНАЯ ОБЗОРНОСТЬ SUV',
            'БУКСИРОВКА 1 600 КГ + AWD'
          ]
        },
        notableNegatives: {
          en: [
            '8.4L/100KM REAL ECONOMY',
            'WEAK PULLING POWER (192 NM)',
            'REACTIVE DUAL-PUMP AWD',
            'SUV BODY ROLL IN CORNERS'
          ],
          de: [
            '8,4 L/100KM REALVERBRAUCH',
            'WENIG DURCHZUG (192 NM)',
            'TRÄGER DUAL-PUMP-ALLRAD',
            'MEHR KURVEN-SEITENNEIGUNG'
          ],
          ru: [
            'РАСХОД 8,4 Л/100 КМ',
            'СЛАБАЯ ТЯГА НА НИЗАХ (192 Н·М)',
            'ЗАДЕРЖКА МУФТЫ AWD',
            'КРЕНЫ КУЗОВА В ПОВОРОТАХ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.6,
            badges: {
              en: ['2.0 Chain-Driven NA', '350,000+ km Lifespan'],
              de: ['2.0 Ketten-Saugmotor', '350.000+ km Laufleistung'],
              ru: ['Цепной мотор 2.0', 'Ресурс 350 000+ км']
            },
            dossier: {
              en: {
                headline: 'Heavy-Duty 2.0L SOHC Workhorse with Cast-Iron Cylinder Liners',
                strengths: [
                  'Rigid Open-Deck Aluminum Block: Cast-iron cylinder sleeves provide extreme structural resistance against thermal cycling and continuous heavy load.',
                  'Heavy-Duty Timing Chain: Engineered for lifetime durability without replacement, paired with ultra-reliable hydraulic tensioners.',
                  'Naturally Aspirated Simplicity: No turbochargers, no direct-injection soot, and modest operating pressures ensure minimal failure points.',
                  'Real Time 4WD Mechanical Durability: Purely hydraulic dual-pump rear diff system with zero sensitive electronic clutch packs.'
                ],
                watchouts: [
                  'Dual-Pump Rear Differential Fluid (DPS-F) must be renewed every 40,000–50,000 km to avoid differential judder/groaning on full lock.',
                  'Valve clearance check (screw adjustment) recommended around 100,000 km.'
                ]
              },
              de: {
                headline: 'Robuster 2.0L-SOHC-Dauerläufer mit Grauguss-Zylinderlaufbuchsen',
                strengths: [
                  'Open-Deck-Alublock mit Graugussbuchsen: Extrem verzugsfest und thermisch unempfindlich selbst bei dauerhafter Zuglast.',
                  'Wartungsfreie Steuerkette: Auf Fahrzeuglebensdauer ausgelegte Rollenkette ohne Längungsprobleme.',
                  'Konstruktive Einfachheit: Reiner Saugmotor ohne Turbo, Ladeluftkühler oder Rußpartikelfilter-Risiken.',
                  'Langlebiger Real-Time-Allrad: Rein hydraulisches Dual-Pump-System ohne anfällige Lamellen-Elektronik.'
                ],
                watchouts: [
                  'Hinterachsdifferential-Öl (DPS-F) alle 40.000–50.000 km wechseln, um Ruckeln bei engen Kurvenradien zu verhindern.',
                  'Ventilspielkontrolle per Einstellschrauben alle 100.000 km empfohlen.'
                ]
              },
              ru: {
                headline: 'Выносливый 2.0L атмосферный двигатель с чугунными гильзами',
                strengths: [
                  'Алюминиевый блок с чугунными гильзами: Высокая термостойкость и огромная прочность при постоянной нагрузке и буксировке.',
                  'Вечная цепь ГРМ: Рассчитана на пробег свыше 350 000+ км без замены.',
                  'Конструктивная простота: Атмосферный мотор без турбин, ТНВД и дорогостоящих датчиков прямого впрыска.',
                  'Проверенный полный привод Real Time 4WD: Полностью гидравлическая система с двумя насосами без капризной электроники.'
                ],
                watchouts: [
                  'Замена спецжидкости DPS-F в заднем редукторе каждые 40 000–50 000 км во избежание гула при вывороте руля.',
                  'Контроль зазоров клапанов каждые 100 000 км.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 8.9,
            badges: {
              en: ['Hydraulic Dual-Pump AWD', 'Solid Facelift Wiring'],
              de: ['Hydraulischer Allrad', 'Solide Facelift-Elektrik'],
              ru: ['Гидромуфта AWD', 'Надёжная электрика']
            }
          },
          buildQualityRust: {
            score: 8.8,
            badges: {
              en: ['Improved 2010 Trim', 'Check Rear Subframe Rust'],
              de: ['Bessere 2010er Dämmung', 'Hinterachs-Flugrost prüfen'],
              ru: ['Шумоизоляция 2010', 'Проверка подрамника']
            }
          },
          interiorBootSpace: {
            score: 9.7,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear + Shelf'],
              de: ['556L Boot (1.532L Max)', 'Schiebebank & Doppelboden'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной ряд + полка']
            }
          },
          cabinErgonomicsVisibility: {
            score: 9.1,
            badges: {
              en: ['11.4 m Turning Circle', 'High SUV Seating'],
              de: ['11,4 m Wendekreis', 'Hohe SUV-Sitzposition'],
              ru: ['Разворот 11,4 м', 'Высокая посадка SUV']
            }
          },
          payloadTowing: {
            score: 9.1,
            badges: {
              en: ['535 kg Payload', '600 / 1,600 kg Towing'],
              de: ['535 kg Zuladung', '600 / 1.600 kg Zuglast'],
              ru: ['Нагрузка 535 кг', 'Прицеп: 600 / 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 4.9,
            badges: {
              en: ['0–100 km/h: 10.2 s', '192 Nm (190 km/h)'],
              de: ['0–100 km/h: 10,2 s', '192 Nm (190 km/h)'],
              ru: ['0–100 км/ч: 10,2 с', '192 Н·м (190 км/ч)']
            }
          },
          handlingAgility: {
            score: 5.8,
            badges: {
              en: ['185 mm Clearance + AWD', 'Comfort SUV Suspension'],
              de: ['185 mm Bodenfreiheit', 'Komfort-SUV-Fahrwerk'],
              ru: ['Клиренс 185 мм + AWD', 'Мягкая подвеска']
            }
          },
          brakingSafety: {
            score: 6.6,
            badges: {
              en: ['100–0 km/h: 37.2 m', 'Trailer Assist + 6 Bags'],
              de: ['100–0 km/h: 37,2 m', 'Gespann-ESP + 6 Airbags'],
              ru: ['100–0 км/ч: 37,2 м', 'TSA прицепа + 6 подушек']
            }
          },
          efficiencyFuel: {
            score: 6.4,
            badges: {
              en: ['8.4 L/100km Real', 'SUV Aero & AWD Drag'],
              de: ['8,4 L/100km Real', 'SUV-Luftwiderstand'],
              ru: ['8,4 л/100 км в жизни', 'Аэродинамика SUV']
            }
          },
          depreciationResale: {
            score: 9.0,
            badges: {
              en: ['High Used SUV Demand', 'Rock-Solid Resale'],
              de: ['Extrem gefragtes SUV', 'Starker Werterhalt'],
              ru: ['Огромный спрос б/у', 'Высокая ликвидность']
            }
          },
          maintenanceInsurance: {
            score: 8.4,
            badges: {
              en: ['No Turbo / DPF Parts', 'Simple Rear Diff Oil'],
              de: ['Kein Turbo / DPF', 'Günstige Wartung'],
              ru: ['Нет турбины и DPF', 'Недорогое ТО']
            }
          }
        }
      },
      {
        id: '2.4-ivtec',
        isDefault: false,
        shortTitle: 'CR-V 2.4 i-VTEC',
        fullName: '2010 Honda CR-V 2.4 i-VTEC',
        engineBadge: '2.4L i-VTEC AWD • 166 HP',
        engineSubLabel: {
          en: 'K24Z1/K24Z4 DOHC i-VTEC Petrol • 5-AT • 220 Nm • Real Time AWD',
          de: 'K24Z1/K24Z4 DOHC Saugbenziner • 5-Stufen-Automatik • 220 Nm • Allrad',
          ru: 'K24Z1/K24Z4 Атмосферный бензин • 5-ст. АКПП • 220 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'K-SERIES FLAGSHIP',
          de: 'K-SERIE TOPMODELL',
          ru: 'ФЛАГМАН K24'
        },
        originalMsrp: {
          en: '€31,800 New',
          de: '31.800 € Neu',
          ru: '€31 800 новый'
        },
        estUsedPrice: '€10,500',
        perkLabel: {
          en: '✦ Legendary K24 2.4L i-VTEC + 5-AT • 556L Boot • Real Time AWD',
          de: '✦ Legendärer K24 2.4L i-VTEC + 5-AT • 556L Kofferraum • Allrad',
          ru: '✦ Легендарный мотор 2.4 K24 + классическая 5-АКПП • Багажник 556 л'
        },
        remarkablePositives: {
          en: [
            'LEGENDARY 2.4 K24 ENGINE',
            'BULLETPROOF 5-SPEED AUTO',
            '556L DOUBLE-DECK BOOT',
            'STRONG 220 NM PULL',
            '1,500 KG TOWING + AWD'
          ],
          de: [
            'LEGENDÄRER 2.4 K24 MOTOR',
            'ROBUSTE 5-GANG-AUTOMATIK',
            '556L DOPPELBODEN-BOOT',
            'SOUVERÄNE 220 NM KRAFT',
            '1.500 KG ZUGLAST & ALLRAD'
          ],
          ru: [
            'ЛЕГЕНДАРНЫЙ МОТОР 2.4 K24',
            'ВЕЧНЫЙ 5-СТ. АВТОМАТ',
            'БАГАЖНИК 556 Л (2 ПОЛКИ)',
            'УВЕРЕННАЯ ТЯГА 220 Н·М',
            'БУКСИРОВКА 1 500 КГ + AWD'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 9.6L/100KM',
            'HIGHER 2.4L ROAD TAX',
            'REACTIVE DUAL-PUMP AWD',
            'SUV BODY ROLL IN CORNERS'
          ],
          de: [
            'DURSTIGE 9,6 L/100KM',
            'HÖHERE 2.4L KFZ-STEUER',
            'TRÄGER DUAL-PUMP-ALLRAD',
            'MEHR KURVEN-SEITENNEIGUNG'
          ],
          ru: [
            'ВЫСОКИЙ РАСХОД 9,6 Л/100',
            'ДО 12 Л/100 В ПРОБКАХ',
            'ЗАДЕРЖКА МУФТЫ AWD',
            'КРЕНЫ КУЗОВА В ПОВОРОТАХ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.7,
            badges: {
              en: ['Legendary 2.4 Chain NA', 'Bulletproof 5-Speed Auto'],
              de: ['Legendärer 2.4 Kettenmotor', 'Robuste 5-Gang-Automatik'],
              ru: ['Легендарный 2.4 цепной', 'Вечная 5-ст. АКПП']
            }
          },
          electronicsInfotainment: {
            score: 8.9,
            badges: {
              en: ['Hydraulic Dual-Pump AWD', 'Reliable Executive Trim'],
              de: ['Hydraulischer Allrad', 'Solide Bordelektronik'],
              ru: ['Гидромуфта AWD', 'Надёжная электрика']
            }
          },
          buildQualityRust: {
            score: 8.9,
            badges: {
              en: ['Plush Leather & Insulation', 'Check Rear Subframe Rust'],
              de: ['Gute Dämmung & Leder', 'Hinterachs-Flugrost prüfen'],
              ru: ['Кожа и шумоизоляция', 'Проверка подрамника']
            }
          },
          interiorBootSpace: {
            score: 9.7,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear + Shelf'],
              de: ['556L Boot (1.532L Max)', 'Schiebebank & Doppelboden'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной ряд + полка']
            }
          },
          cabinErgonomicsVisibility: {
            score: 9.2,
            badges: {
              en: ['11.4 m Turning Circle', 'Dash 5-AT Frees Space'],
              de: ['11,4 m Wendekreis', 'Freier Durchstieg vorn'],
              ru: ['Разворот 11,4 м', 'Ровный пол спереди']
            }
          },
          payloadTowing: {
            score: 8.9,
            badges: {
              en: ['525 kg Payload', '600 / 1,500 kg Towing'],
              de: ['525 kg Zuladung', '600 / 1.500 kg Zuglast'],
              ru: ['Нагрузка 525 кг', 'Прицеп: 600 / 1 500 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.0,
            badges: {
              en: ['0–100 km/h: 10.0 s', '220 Nm (190 km/h)'],
              de: ['0–100 km/h: 10,0 s', '220 Nm (190 km/h)'],
              ru: ['0–100 км/ч: 10,0 с', '220 Н·м (190 км/ч)']
            }
          },
          handlingAgility: {
            score: 5.8,
            badges: {
              en: ['185 mm Clearance + AWD', 'Smooth Comfort Ride'],
              de: ['185 mm Bodenfreiheit', 'Komfort-Fahrwerk'],
              ru: ['Клиренс 185 мм + AWD', 'Плавная подвеска']
            }
          },
          brakingSafety: {
            score: 6.6,
            badges: {
              en: ['100–0 km/h: 37.4 m', 'Trailer Assist + 6 Bags'],
              de: ['100–0 km/h: 37,4 m', 'Gespann-ESP + 6 Airbags'],
              ru: ['100–0 км/ч: 37,4 м', 'TSA прицепа + 6 подушек']
            }
          },
          efficiencyFuel: {
            score: 5.5,
            badges: {
              en: ['9.6 L/100km Real', '2.4 NA + 5-AT Thirst'],
              de: ['9,6 L/100km Real', 'Durstig im Stadtverkehr'],
              ru: ['9,6 л/100 км в жизни', 'Расход 2.4 АКПП в городе']
            }
          },
          depreciationResale: {
            score: 9.2,
            badges: {
              en: ['Rare 2.4 Auto Demand', 'Top Class Resale'],
              de: ['Begehrte 2.4 Automatik', 'Spitzen-Werterhalt'],
              ru: ['Бешеный спрос на 2.4', 'Рекордная ликвидность']
            }
          },
          maintenanceInsurance: {
            score: 8.0,
            badges: {
              en: ['Higher 2.4L Road Tax', 'Zero Turbo / DPF Risk'],
              de: ['Höhere 2.4L Steuer', 'Kein Turbo-/DPF-Risiko'],
              ru: ['Умеренный налог (166 л.с.)', 'Нет турбины и DPF']
            }
          }
        }
      },
      {
        id: '2.2-idtec',
        isDefault: false,
        shortTitle: 'CR-V 2.2 i-DTEC',
        fullName: '2010 Honda CR-V 2.2 i-DTEC',
        engineBadge: '2.2L i-DTEC AWD • 150 HP',
        engineSubLabel: {
          en: 'N22B3 2.2L Turbo-Diesel • 6-MT • 350 Nm • Real Time AWD',
          de: 'N22B3 2.2L Turbodiesel • 6-Gang-Schaltgetriebe • 350 Nm • Allrad',
          ru: 'N22B3 2.2L Турбодизель • 6-ст. МКПП • 350 Н·м • Полный привод'
        },
        rarityLabel: {
          en: 'TOWING WORKHORSE',
          de: 'ZUGPFERD-SUV',
          ru: 'ТЯГОВЫЙ КРОССОВЕР'
        },
        originalMsrp: {
          en: '€31,400 New',
          de: '31.400 € Neu',
          ru: '€31 400 новый'
        },
        estUsedPrice: '€8,900',
        perkLabel: {
          en: '✦ 2,000 kg Braked Towing • 350 Nm Torque • 556L Boot & AWD',
          de: '✦ 2.000 kg Anhängelast • 350 Nm Drehmoment • 556L Kofferraum',
          ru: '✦ Буксировка 2 000 кг • Тяга 350 Н·м • Багажник 556 л и AWD'
        },
        remarkablePositives: {
          en: [
            '2,000 KG BRAKED TOWING',
            '350 NM DIESEL TORQUE',
            '556L DOUBLE-DECK BOOT',
            '6.7L/100KM SUV ECONOMY',
            'REFINED N22B3 ALU DIESEL'
          ],
          de: [
            '2.000 KG ANHÄNGELAST',
            '350 NM DIESEL-DREHMOMENT',
            '556L DOPPELBODEN-BOOT',
            '6,7 L/100KM SUV-VERBRAUCH',
            'ROBUSTER N22B3 ALU-DIESEL'
          ],
          ru: [
            'БУКСИРОВКА ДО 2 000 КГ',
            'ТЯГА ДИЗЕЛЯ 350 Н·М',
            'БАГАЖНИК 556 Л (2 ПОЛКИ)',
            'РАСХОД 6,7 Л/100 КМ',
            'НАДЁЖНЫЙ ДИЗЕЛЬ N22B3'
          ]
        },
        notableNegatives: {
          en: [
            'DPF DISLIKES SHORT TRIPS',
            'HIGH 2.2L DIESEL ROAD TAX',
            'CLUTCH & DMF WEAR RISK',
            'EURO 5 CITY RESTRICTIONS'
          ],
          de: [
            'DPF MAG KEINE KURZSTRECKE',
            'HOHE 2.2L DIESEL-STEUER',
            'ZMS- & KUPPLUNGSVERSCHLEISS',
            'EURO-5-UMWELTZONEN'
          ],
          ru: [
            'DPF НЕ ЛЮБИТ ПРОБКИ',
            'ДОРОГОЙ НАЛОГ И ТО 2.2',
            'ИЗНОС ДВУХМАССА И СЦЕПЛЕНИЯ',
            'ОГРАНИЧЕНИЯ ЕВРО-5 В ЕС'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.9,
            badges: {
              en: ['Updated 2.2 Chain Block', 'Watch DPF & DMF Wear'],
              de: ['2.2 Alu-Kettenmotor', 'DPF & ZMS beachten'],
              ru: ['Цепной дизель 2.2', 'Внимание к DPF и ZMS']
            }
          },
          electronicsInfotainment: {
            score: 8.5,
            badges: {
              en: ['Hydraulic Dual-Pump AWD', 'DPF Pressure Sensors'],
              de: ['Hydraulischer Allrad', 'DPF-Drucksensorik'],
              ru: ['Гидромуфта AWD', 'Датчики фильтра DPF']
            }
          },
          buildQualityRust: {
            score: 8.8,
            badges: {
              en: ['2010 Sound Deadening', 'Check Rear Subframe Rust'],
              de: ['2010er Geräuschdämmung', 'Hinterachs-Flugrost prüfen'],
              ru: ['Шумоизоляция 2010', 'Проверка подрамника']
            }
          },
          interiorBootSpace: {
            score: 9.7,
            badges: {
              en: ['556L Boot (1,532L Max)', 'Sliding Rear + Shelf'],
              de: ['556L Boot (1.532L Max)', 'Schiebebank & Doppelboden'],
              ru: ['Багажник 556–1 532 л', 'Сдвижной ряд + полка']
            }
          },
          cabinErgonomicsVisibility: {
            score: 9.1,
            badges: {
              en: ['11.4 m Turning Circle', 'High SUV Seating'],
              de: ['11,4 m Wendekreis', 'Hohe SUV-Sitzposition'],
              ru: ['Разворот 11,4 м', 'Высокая посадка SUV']
            }
          },
          payloadTowing: {
            score: 9.6,
            badges: {
              en: ['550 kg Payload', '600 / 2,000 kg Towing'],
              de: ['550 kg Zuladung', '600 / 2.000 kg Zuglast'],
              ru: ['Нагрузка 550 кг', 'Прицеп: 600 / 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.4,
            badges: {
              en: ['0–100 km/h: 9.6 s', '350 Nm (190 km/h)'],
              de: ['0–100 km/h: 9,6 s', '350 Nm (190 km/h)'],
              ru: ['0–100 км/ч: 9,6 с', '350 Н·м (190 км/ч)']
            }
          },
          handlingAgility: {
            score: 5.7,
            badges: {
              en: ['185 mm Clearance + AWD', 'Heavier 2.2 Front Axle'],
              de: ['185 mm Bodenfreiheit', 'Schwerere 2.2-Achse'],
              ru: ['Клиренс 185 мм + AWD', 'Тяжелее передок (2.2)']
            }
          },
          brakingSafety: {
            score: 6.6,
            badges: {
              en: ['100–0 km/h: 37.5 m', 'Trailer Assist + 6 Bags'],
              de: ['100–0 km/h: 37,5 m', 'Gespann-ESP + 6 Airbags'],
              ru: ['100–0 км/ч: 37,5 м', 'TSA прицепа + 6 подушек']
            }
          },
          efficiencyFuel: {
            score: 7.8,
            badges: {
              en: ['6.7 L/100km Real', '850+ km Tank Range'],
              de: ['6,7 L/100km Real', '850+ km Reichweite'],
              ru: ['6,7 л/100 км в жизни', 'Запас хода 850+ км']
            }
          },
          depreciationResale: {
            score: 7.9,
            badges: {
              en: ['Popular Caravan Tow Car', 'Euro 5 City Discount'],
              de: ['Beliebtes Zugfahrzeug', 'Euro-5-Abschlag'],
              ru: ['Ценится для буксировки', 'Эко-класс Евро-5']
            }
          },
          maintenanceInsurance: {
            score: 7.3,
            badges: {
              en: ['High 2.2L Tax & Ins.', 'Clutch / DMF & DPF Cost'],
              de: ['Hohe 2.2L Kfz-Steuer', 'ZMS-, Kupplungs- & DPF'],
              ru: ['Дороже налог (2.2 л)', 'Маховик, сцепление, DPF']
            }
          }
        }
      }
    ]
  },
  {
    id: 'peugeot-308-gti-2019',
    number: '04',
    yearMake: '2019 PEUGEOT',
    rarityClass: 'rarity-epic',
    drivetrain: 'FWD',
    image: 'assets/peugeot-308-gti-2019.png',
    imageFacing: 'left',
    defaultEngineId: '1.6-thp-263',
    engines: [
      {
        id: '1.6-thp-263',
        isDefault: true,
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
            'MECHANICAL TORSEN LSD',
            'BIG BRAKES FROM FACTORY (380MM)',
            '6.0S 0–100 • 250 KM/H TOP SPEED',
            '7.4L/100KM REAL ECONOMY',
            '420L BOOT & MASSAGE SEATS'
          ],
          de: [
            'NUR 1.205 KG LEERGEWICHT',
            'MECHANISCHE TORSEN-SPERRE',
            'GROSSE BREMSEN AB WERK (380MM)',
            '6,0S 0–100 • 250 KM/H SPITZE',
            '7,4 L/100KM REALVERBRAUCH',
            '420L BOOT & MASSAGESITZE'
          ],
          ru: [
            'ВЕС ВСЕГО 1 205 КГ',
            'САМОБЛОК TORSEN В МКПП',
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
        subStats: {
          powertrainDurability: {
            score: 7.7,
            badges: {
              en: ['Forged Mahle Pistons', '8–10k km Oil Service'],
              de: ['Mahle-Schmiedekolben', 'Ölwechsel alle 8–10k km'],
              ru: ['Кованые поршни Mahle', 'Масло каждые 7–8 тыс. км']
            },
            dossier: {
              en: {
                headline: 'Reinforced Peugeot Sport Turbo Engine with High Service Demands',
                strengths: [
                  'Forged Mahle Racing Pistons: High-strength Mahle lightweight forged pistons with dedicated cooling galleries and polymer-coated main bearings withstand high cylinder pressures.',
                  'High-Performance Valvetrain: Sodium-filled exhaust valves and reinforced cylinder head engineered specifically for the 263/270 HP GTi.',
                  'Updated Timing Chain System: Features the revised hydraulic tensioner and hardened chain links, fixing early pre-2015 Prince THP stretching issues.'
                ],
                watchouts: [
                  'Direct Injection Valve Coking: Direct injection means fuel never washes the intake valves; manual walnut shell decoking is typically required around 80,000–100,000 km.',
                  'Strict 8,000–10,000 km Oil Changes: With 164 HP per liter output, oil degrades rapidly. Exceeding 10k km leads to turbo oil feed coking and timing chain tensioner fatigue.',
                  'High-Pressure Fuel Pump (HPFP): Demands high-quality 98+ octane fuel; sensitive to thermal cycles.'
                ]
              },
              de: {
                headline: 'Verstärkter Peugeot-Sport-Turbomotor mit hohem Wartungsanspruch',
                strengths: [
                  'Mahle-Schmiedekolben: Hochfeste Leichtbau-Schmiedekolben mit integrierten Kühlkanälen und polymerbeschichteten Lagern für extreme Zylinderdrücke.',
                  'Motorsport-Ventiltrieb: Natrium-gefüllte Auslassventile und verstärkter Zylinderkopf speziell für den 263/270-PS-GTi.',
                  'Überarbeitete Steuerkette: Ausgestattet mit verstärkter Kette und optimiertem Kettenspanner (behebt die Probleme früher Prince-Motoren vor 2015).'
                ],
                watchouts: [
                  'Einlassventil-Verkokung: Durch die Benzindirekteinspritzung verrußen die Einlassventile; Walnussschalen-Reinigung ab ca. 80.000–100.000 km ratsam.',
                  'Strikte 8.000–10.000 km Ölwechselintervalle: Bei 164 PS/Liter thermisch hoch belastet. Überzogene Intervalle schädigen Turbolader-Ölleitungen und Spanner.',
                  'Hochdruck-Kraftstoffpumpe (HPFP): Benötigt zwingend Super Plus (98/102 Oktan) für maximale Haltbarkeit.'
                ]
              },
              ru: {
                headline: 'Усиленный турбомотор Peugeot Sport с высокими требованиями к сервису',
                strengths: [
                  'Кованые поршни Mahle: Лёгкие и сверхпрочные поршни с масляными каналами охлаждения и полимерным напылением коренных вкладышей.',
                  'Спортивный ГРМ: Выпускные клапаны с натриевым наполнением и усиленная ГБЦ, разработанная специально под 263/270 л.с.',
                  'Модернизированная цепь ГРМ: Установлен усиленный гидравлический натяжитель и надёжная цепь (детские болезни моторов THP до 2015 года устранены).'
                ],
                watchouts: [
                  'Нагар на впускных клапанах: Прямой впрыск не омывает клапаны; к 80 000–100 000 км требуется чистка ореховой скорлупой (Walnut blasting).',
                  'Строгая замена масла каждые 8 000–10 000 км: Высокая форсировка (164 л.с. с литра) быстро окисляет масло. Затягивание ведёт к закоксовке маслоподачи турбины.',
                  'Топливная система (ТНВД): Требует качественный бензин АИ-98 / АИ-100 и чувствительна к перегревам.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.3,
            badges: {
              en: ['Touch-Only Climate', 'Sport Pack Telemetry'],
              de: ['Klima im Touchscreen', 'Sport-Pack-Telemetrie'],
              ru: ['Климат в тачскрине', 'Телеметрия Sport Pack']
            }
          },
          buildQualityRust: {
            score: 8.1,
            badges: {
              en: ['Alcantara Bucket Seats', 'Galvanized EMP2 Body'],
              de: ['Alcantara-Schalensitze', 'Verzinkte Karosserie'],
              ru: ['Ковши из алькантары', 'Оцинкованный кузов']
            }
          },
          interiorBootSpace: {
            score: 8.4,
            badges: {
              en: ['420L Boot (1,228L Max)', 'Large Hot-Hatch Boot'],
              de: ['420L Boot (1.228L Max)', 'Groß für 263-PS-Sportler'],
              ru: ['Багажник 420–1 228 л', 'Большой для хот-хэтча']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['10.4 m Turning Circle', 'Small i-Cockpit Wheel'],
              de: ['10,4 m Wendekreis', 'Kleines i-Cockpit-Rad'],
              ru: ['Разворот 10,4 м', 'Малый руль i-Cockpit']
            }
          },
          payloadTowing: {
            score: 5.8,
            badges: {
              en: ['470 kg Payload', '0 / 0 kg Towing'],
              de: ['470 kg Zuladung', '0 / 0 kg Anhängelast'],
              ru: ['Нагрузка 470 кг', 'Прицеп: 0 / 0 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.7,
            badges: {
              en: ['0–100 km/h: 6.0 s', '340 Nm (250 km/h)'],
              de: ['0–100 km/h: 6,0 s', '340 Nm (250 km/h)'],
              ru: ['0–100 км/ч: 6,0 с', '340 Н·м (250 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.6,
            badges: {
              en: ['Torsen LSD + 1,205 kg', 'Sport Chassis (-11 mm)'],
              de: ['Torsen-Sperre + 1.205 kg', 'Sportfahrwerk (-11 mm)'],
              ru: ['Torsen + вес 1 205 кг', 'Шасси Sport (-11 мм)']
            }
          },
          brakingSafety: {
            score: 8.8,
            badges: {
              en: ['100–0 km/h: 33.2 m', '380 mm Alcon Brakes'],
              de: ['100–0 km/h: 33,2 m', '380 mm Alcon-Bremse'],
              ru: ['100–0 км/ч: 33,2 м', 'Тормоза Alcon 380 мм']
            }
          },
          efficiencyFuel: {
            score: 8.1,
            badges: {
              en: ['7.4 L/100km Real', 'Light 1.6L Efficiency'],
              de: ['7,4 L/100km Real', 'Sparsamer 1.6L Turbo'],
              ru: ['7,4 л/100 км в жизни', 'Экономичный 1.6 турбо']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Final Pure-ICE GTi', '2019 Collector Status'],
              de: ['Letzter Verbrenner-GTi', '2019er Sammlerstatus'],
              ru: ['Последний бенз. GTi', 'Редкий 2019 год']
            }
          },
          maintenanceInsurance: {
            score: 6.4,
            badges: {
              en: ['Costly 380 mm Discs', '19" Tyres & GTi Ins.'],
              de: ['Teure 380-mm-Scheiben', '19"-Reifen & GTi-Tarif'],
              ru: ['Дорогие диски 380 мм', 'Шины R19 и страховка']
            }
          }
        }
      }
    ]
  },
  {
    id: 'ford-mondeo-2012',
    number: '05',
    yearMake: '2012 FORD',
    rarityClass: 'rarity-dependable',
    drivetrain: 'FWD',
    image: 'assets/ford-mondeo-2012.png',
    defaultEngineId: '1.6-ecoboost',
    engines: [
      {
        id: '1.6-ecoboost',
        isDefault: true,
        shortTitle: 'MONDEO 1.6 ECOBOOST',
        fullName: '2012 Ford Mondeo 1.6 EcoBoost',
        engineBadge: '1.6L EcoBoost Turbo • 160 HP',
        engineSubLabel: {
          en: 'JTBA 1.6L GTDi Turbo Petrol • 6-MT • 240 Nm',
          de: 'JTBA 1.6L GTDi Turbobenziner • 6-Gang • 240 Nm',
          ru: 'JTBA 1.6L GTDi Турбобензин • 6-ст. МКПП • 240 Н·м'
        },
        rarityLabel: {
          en: 'HIGHWAY CRUISER',
          de: 'LANGSTRECKEN-PROFI',
          ru: 'ТРАССОВЫЙ КРЕЙСЕР'
        },
        originalMsrp: {
          en: '€27,950 New',
          de: '27.950 € Neu',
          ru: '€27 950 новый'
        },
        estUsedPrice: '€6,900',
        perkLabel: {
          en: '✦ Huge 550L Sedan Boot • 240 Nm Turbo Torque • Composed Autobahn Ride',
          de: '✦ Riesiger 550L Kofferraum • 240 Nm Turbo-Drehmoment • Ruhiger Gleiter',
          ru: '✦ Огромный багажник 550 л • Тяга 240 Н·м • Комфорт на трассе'
        },
        remarkablePositives: {
          en: [
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING',
            '7.7L/100KM REAL ECONOMY',
            '1,600 KG BRAKED TOWING'
          ],
          de: [
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG',
            '7,7 L/100KM REALVERBRAUCH',
            '1.600 KG ANHÄNGELAST'
          ],
          ru: [
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ',
            'РАСХОД 7,7 Л/100 КМ',
            'БУКСИРОВКА ДО 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'COOLANT & HEAD GASKET RISK',
            'VALVE CARBON BUILDUP RISK',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'KÜHLMITTEL- & ZYLINDERKOPF-RISIKO',
            'VERKOKUNG DER EINLASSVENTILE',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'РИСК ПЕРЕГРЕВА И ПРОКЛАДКИ ГБЦ',
            'НАГАР НА ВПУСКНЫХ КЛАПАНАХ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 6.8,
            badges: {
              en: ['Coolant Line Recall', '6-Speed Manual'],
              de: ['Kühlwasser-Rückruf prüfen', '6-Gang-Schaltgetriebe'],
              ru: ['Проверить отзыв по ОЖ', '6-ст. МКПП']
            },
            dossier: {
              en: {
                headline: 'Punchy Downsized Turbo with Known Cooling System Weaknesses',
                strengths: [
                  'Strong Low-End Torque: 240 Nm (270 Nm overboost) from 1,600 rpm makes the heavy Mondeo feel effortless in daily driving.',
                  'Durable 6-Speed Manual: Paired exclusively with the 6-speed M66/B6 manual, avoiding the troublesome PowerShift dual-clutch gearbox.'
                ],
                watchouts: [
                  'Cooling System & Head Gasket Risk: Early 1.6 EcoBoost units suffer from brittle coolant return pipes and low-coolant overheating, which can warp the aluminum head.',
                  'Direct Injection Valve Coking: Fuel does not wash intake valves, leading to carbon buildup over 100,000 km.',
                  'Timing Belt Service: Wet-belt/timing belt requires timely replacement around 160,000 km or 8–10 years.'
                ]
              },
              de: {
                headline: 'Kräftiger Downsizing-Turbo mit bekannten Kühlsystem-Schwächen',
                strengths: [
                  'Starkes Drehmoment: 240 Nm (270 Nm Overboost) ab 1.600/min sorgen für souveränen Durchzug im schweren Mondeo.',
                  'Solides 6-Gang-Schaltgetriebe: Ausschließlich mit Schaltgetriebe ausgeliefert – kein anfälliges PowerShift-Getriebe.'
                ],
                watchouts: [
                  'Kühlmittel- & Überhitzungsrisiko: Spröde Kühlmittelschläuche können zu unbemerktem Wasserverlust und verzogenem Zylinderkopf führen (Rückruf prüfen).',
                  'Einlassventil-Verkokung: Direkteinspritzung führt ab ca. 100.000 km zu Ablagerungen.',
                  'Zahnriemenwechsel: Spätestens alle 8–10 Jahre bzw. 160.000 km fällig.'
                ]
              },
              ru: {
                headline: 'Тяговитый турбомотор с известной слабостью системы охлаждения',
                strengths: [
                  'Отличная тяга с низов: 240 Н·м (270 Н·м в овербусте) с 1 600 об/мин легко тянут крупный седан.',
                  'Надёжная 6-ст. МКПП: На 1.6 EcoBoost не ставился проблемный робот PowerShift.'
                ],
                watchouts: [
                  'Риск утечки ОЖ и перегрева: Тонкие трубки охлаждения могут треснуть, что быстро ведёт к перегреву алюминиевой ГБЦ (проверить доработку по отзыву).',
                  'Нагар на клапанах: Прямой впрыск требует периодической чистки впуска после 100 тыс. км.',
                  'Ремень ГРМ: Требует замены каждые 8–10 лет или 160 тыс. км.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.4,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.5,
            badges: {
              en: ['585 kg Payload', '1,600 kg Braked Tow'],
              de: ['585 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 585 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.4,
            badges: {
              en: ['0–100 km/h: 9.3 s', '240 Nm (215 km/h)'],
              de: ['0–100 km/h: 9,3 s', '240 Nm (215 km/h)'],
              ru: ['0–100 км/ч: 9,3 с', '240 Н·м (215 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.2,
            badges: {
              en: ['Class-Leading Chassis', 'Stable at 180+ km/h'],
              de: ['Klassenbestes Fahrwerk', 'Stabil bei 180+ km/h'],
              ru: ['Эталонное шасси', 'Стабилен на 180+ км/ч']
            }
          },
          brakingSafety: {
            score: 8.1,
            badges: {
              en: ['100–0 km/h: 37.5 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,5 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,5 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 7.6,
            badges: {
              en: ['7.7 L/100km Real', '149 g/km CO2'],
              de: ['7,7 L/100km Real', '149 g/km CO2'],
              ru: ['7,7 л/100 км в жизни', '149 г/км CO2']
            }
          },
          depreciationResale: {
            score: 7.9,
            badges: {
              en: ['High Value Used Buy', 'Affordable Entry Price'],
              de: ['Viel Auto fürs Geld', 'Günstiger Einstiegspreis'],
              ru: ['Много авто за свои деньги', 'Доступная цена на вторичке']
            }
          },
          maintenanceInsurance: {
            score: 7.2,
            badges: {
              en: ['Cheap Ford Parts', 'Cooling Repairs Risk'],
              de: ['Günstige Ford-Teile', 'Kühlsystem-Risiko'],
              ru: ['Недорогие запчасти', 'Риск ремонта охлаждения']
            }
          }
        }
      },
      {
        id: '1.6-tivct',
        isDefault: false,
        shortTitle: 'MONDEO 1.6 Ti-VCT',
        fullName: '2012 Ford Mondeo 1.6 Ti-VCT',
        engineBadge: '1.6L Ti-VCT NA • 120 HP',
        engineSubLabel: {
          en: 'KGBA 1.6L Naturally Aspirated • 5-MT • 160 Nm',
          de: 'KGBA 1.6L Saugbenziner • 5-Gang • 160 Nm',
          ru: 'KGBA 1.6L Атмосферный бензин • 5-ст. МКПП • 160 Н·м'
        },
        rarityLabel: {
          en: 'SIMPLE ENTRY',
          de: 'SOLIDE BASIS',
          ru: 'ПРОСТАЯ БАЗА'
        },
        originalMsrp: {
          en: '€24,500 New',
          de: '24.500 € Neu',
          ru: '€24 500 новый'
        },
        estUsedPrice: '€5,900',
        perkLabel: {
          en: '✦ No Turbo or Direct Injection • 550L Boot • Lowest Routine Repair Risk',
          de: '✦ Kein Turbo & keine Direkteinspritzung • 550L Kofferraum • Geringstes Risiko',
          ru: '✦ Без турбины и прямого впрыска • Багажник 550 л • Простая обслуга'
        },
        remarkablePositives: {
          en: [
            'SIMPLE NO-TURBO ENGINE',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING',
            '8.0L/100KM REAL ECONOMY'
          ],
          de: [
            'EINFACHER SAUGMOTOR OHNE TURBO',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG',
            '8,0 L/100KM REALVERBRAUCH'
          ],
          ru: [
            'ПРОСТОЙ АТМОСФЕРНИК БЕЗ ТУРБИНЫ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ',
            'РАСХОД 8,0 Л/100 КМ'
          ]
        },
        notableNegatives: {
          en: [
            'WEAK 160 NM FOR 1.5-TON WEIGHT',
            '5-SPEED MANUAL (HIGH REVS)',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'SCHWACHE 160 NM FÜR 1,5 TONNEN',
            'NUR 5 GÄNGE (HOHE DREHZAHL)',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'СЛАБЫЕ 160 Н·М НА 1,5 ТОННЫ',
            '5-СТ. МКПП (ВЫСОКИЕ ОБОРОТЫ)',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.6,
            badges: {
              en: ['Port-Injected NA', 'No Turbo / No DMF'],
              de: ['Saugrohreinspritzung', 'Kein Turbo / Kein ZMS'],
              ru: ['Распределённый впрыск', 'Без турбины и двухмасс.']
            },
            dossier: {
              en: {
                headline: 'Simple Port-Injected 1.6L Built for Low Maintenance, Not Speed',
                strengths: [
                  'Zero Turbo or Direct-Injection Complexity: Port fuel injection keeps intake valves clean, and there is no turbocharger or high-pressure fuel pump to fail.',
                  'Simple 5-Speed Manual: Uses a conventional single-mass flywheel clutch setup that is inexpensive to replace.'
                ],
                watchouts: [
                  'Timing Belt Replacement: Unlike the 2.0/2.3 Duratec chains, the 1.6 Ti-VCT uses a timing belt that must be changed every 8–10 years or 160,000 km.',
                  'Works Hard Under Load: With 160 Nm moving a large D-segment sedan, overtaking on highways requires downshifting.'
                ]
              },
              de: {
                headline: 'Schlichter Saugmotor für geringe Wartungskosten statt Tempo',
                strengths: [
                  'Keine Turbo- oder Direkteinspritzungs-Probleme: Saugrohreinspritzung verhindert Verkokung, kein Turbolader und keine Hochdruckpumpe.',
                  'Robuste 5-Gang-Technik: Günstige Kupplung ohne teures Zweimassenschwungrad.'
                ],
                watchouts: [
                  'Zahnriemenwechsel: Anders als beim 2.0/2.3 mit Kette ist beim 1.6 Ti-VCT alle 8–10 Jahre bzw. 160.000 km ein Zahnriemenwechsel fällig.',
                  'Wenig Reserven bei Beladung: 160 Nm erfordern auf der Autobahn fleißiges Herunterschalten.'
                ]
              },
              ru: {
                headline: 'Простой атмосферник для недорогой эксплуатации без спешки',
                strengths: [
                  'Минимум сложных узлов: Распределённый впрыск не даёт нагара на клапанах, нет турбины и дорогого ТНВД.',
                  'Простая 5-ст. МКПП: Обычное сцепление без дорогого двухмассового маховика.'
                ],
                watchouts: [
                  'Ремень ГРМ: В отличие от цепных 2.0 и 2.3, здесь ремень — замена каждые 8–10 лет или 160 тыс. км.',
                  'Скромная динамика: 160 Н·м с трудом хватает для обгонов на трассе при полной загрузке.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.4,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 7.4,
            badges: {
              en: ['590 kg Payload', '1,100 kg Braked Tow'],
              de: ['590 kg Zuladung', '1.100 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 1 100 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.5,
            badges: {
              en: ['0–100 km/h: 12.3 s', '160 Nm (195 km/h)'],
              de: ['0–100 km/h: 12,3 s', '160 Nm (195 km/h)'],
              ru: ['0–100 км/ч: 12,3 с', '160 Н·м (195 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Lighter Front Nose'],
              de: ['Klassenbestes Fahrwerk', 'Leichtere Vorderachse'],
              ru: ['Эталонное шасси', 'Лёгкий передок']
            }
          },
          brakingSafety: {
            score: 8.0,
            badges: {
              en: ['100–0 km/h: 37.8 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,8 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,8 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 7.3,
            badges: {
              en: ['8.0 L/100km Real', '159 g/km CO2'],
              de: ['8,0 L/100km Real', '159 g/km CO2'],
              ru: ['8,0 л/100 км в жизни', '159 г/км CO2']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Lowest Entry Price', 'Sought by Budget Buyers'],
              de: ['Günstigster Einstieg', 'Beliebt bei Sparfüchsen'],
              ru: ['Самая низкая цена', 'Популярен у экономных']
            }
          },
          maintenanceInsurance: {
            score: 8.4,
            badges: {
              en: ['Very Cheap Maintenance', 'Low Insurance Group'],
              de: ['Sehr günstige Wartung', 'Niedrige Versicherung'],
              ru: ['Дешёвое обслуживание', 'Низкая страховка']
            }
          }
        }
      },
      {
        id: '2.0-duratec',
        isDefault: false,
        shortTitle: 'MONDEO 2.0 DURATEC',
        fullName: '2012 Ford Mondeo 2.0',
        engineBadge: '2.0L Duratec NA • 145 HP',
        engineSubLabel: {
          en: 'AOBA 2.0L Naturally Aspirated • 5-MT • 185 Nm',
          de: 'AOBA 2.0L Saugbenziner • 5-Gang • 185 Nm',
          ru: 'AOBA 2.0L Атмосферный бензин • 5-ст. МКПП • 185 Н·м'
        },
        rarityLabel: {
          en: 'BULLETPROOF NA',
          de: 'DAUERLÄUFER',
          ru: 'НЕУБИВАЕМЫЙ'
        },
        originalMsrp: {
          en: '€26,450 New',
          de: '26.450 € Neu',
          ru: '€26 450 новый'
        },
        estUsedPrice: '€6,600',
        perkLabel: {
          en: '✦ Bulletproof 2.0 Chain NA • 550L Boot • Most Reliable Mk4 Petrol',
          de: '✦ Unverwüstlicher 2.0-Kettenmotor • 550L Kofferraum • Zuverlässigster Benziner',
          ru: '✦ Неубиваемый цепной 2.0 • Багажник 550 л • Самый надёжный бензин Mk4'
        },
        remarkablePositives: {
          en: [
            'BULLETPROOF 2.0 NA ENGINE',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING',
            '1,600 KG BRAKED TOWING'
          ],
          de: [
            'UNZERSTÖRBARER 2.0 SAUGMOTOR',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG',
            '1.600 KG ANHÄNGELAST'
          ],
          ru: [
            'НЕУБИВАЕМЫЙ МОТОР 2.0',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ',
            'БУКСИРОВКА ДО 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            '5-SPEED MANUAL (HIGH REVS)',
            '8.6L/100KM REAL ECONOMY',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'NUR 5 GÄNGE (HOHE DREHZAHL)',
            '8,6 L/100KM REALVERBRAUCH',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            '5-СТ. МКПП (ВЫСОКИЕ ОБОРОТЫ)',
            'РАСХОД 8,6 Л/100 КМ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 9.2,
            badges: {
              en: ['2.0 Chain-Driven NA', 'Zero Turbo / DI Issues'],
              de: ['2.0 Ketten-Saugmotor', 'Kein Turbo / Keine DI'],
              ru: ['Цепной мотор 2.0', 'Без турбины и ТНВД']
            },
            dossier: {
              en: {
                headline: 'Mazda-Derived L-Series Chain Engine: The Gold Standard for Mk4 Longevity',
                strengths: [
                  'Lifetime Timing Chain & Port Injection: No timing belt intervals, no turbocharger, and no direct-injection valve coking—easily exceeds 300,000 km with basic oil changes.',
                  'Proven 5-Speed Manual: Simple, stout gearbox without PowerShift mechatronic risks.'
                ],
                watchouts: [
                  'Thermostat Housing & Swirl Flaps: Plastic thermostat housings can seep coolant with age; pre-2010 swirl flaps should be checked on high-mileage cars.',
                  'Missing 6th Gear: Cruises around 3,500+ rpm at 130 km/h, increasing noise and fuel use on long Autobahn trips.'
                ]
              },
              de: {
                headline: 'Mazda-basierter Ketten-Saugmotor: Der langlebigste Benziner im Mondeo',
                strengths: [
                  'Steuerkette & Saugrohreinspritzung: Kein Zahnriemenwechsel, kein Turbolader, keine Verkokung – läuft bei guter Pflege weit über 300.000 km.',
                  'Robustes 5-Gang-Getriebe: Keine teuren PowerShift-Risiken.'
                ],
                watchouts: [
                  'Thermostatgehäuse: Alternde Kunststoff-Thermostate können leicht undicht werden.',
                  'Fehlender 6. Gang: Bei 130 km/h auf der Autobahn etwas höheres Drehzahlniveau.'
                ]
              },
              ru: {
                headline: 'Цепной мотор серии L (Mazda): эталон надёжности среди бензиновых Mk4',
                strengths: [
                  'Цепь ГРМ и распределённый впрыск: Нет ремня, турбины и нагара на клапанах — спокойно ходит 300+ тыс. км при своевременной замене масла.',
                  'Надёжная 5-ст. МКПП: Никаких рисков с роботом PowerShift.'
                ],
                watchouts: [
                  'Корпус термостата: На больших пробегах пластиковый корпус может начать подтекать.',
                  'Нет 6-й передачи: На трассе при 130 км/ч обороты держатся около 3 500 об/мин.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.4,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['595 kg Payload', '1,600 kg Braked Tow'],
              de: ['595 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 595 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.0,
            badges: {
              en: ['0–100 km/h: 9.9 s', '185 Nm (210 km/h)'],
              de: ['0–100 km/h: 9,9 s', '185 Nm (210 km/h)'],
              ru: ['0–100 км/ч: 9,9 с', '185 Н·м (210 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Class-Leading Chassis', 'Linear NA Response'],
              de: ['Klassenbestes Fahrwerk', 'Direktes Ansprechverhalten'],
              ru: ['Эталонное шасси', 'Линейный отклик']
            }
          },
          brakingSafety: {
            score: 8.1,
            badges: {
              en: ['100–0 km/h: 37.5 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,5 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,5 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 6.8,
            badges: {
              en: ['8.6 L/100km Real', '179 g/km CO2'],
              de: ['8,6 L/100km Real', '179 g/km CO2'],
              ru: ['8,6 л/100 км в жизни', '179 г/км CO2']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Strong Used Demand', 'Valued for Reliability'],
              de: ['Gefragter Gebrauchter', 'Beliebt für Zuverlässigkeit'],
              ru: ['Высокий спрос на вторичке', 'Ценят за надёжность']
            }
          },
          maintenanceInsurance: {
            score: 8.2,
            badges: {
              en: ['Low Repair Bills', 'Higher CO2 Tax (179g)'],
              de: ['Geringe Reparaturkosten', 'Höhere CO2-Steuer (179g)'],
              ru: ['Недорогой ремонт', 'Выше налог (179 г CO2)']
            }
          }
        }
      },
      {
        id: '2.0-ecoboost',
        isDefault: false,
        shortTitle: 'MONDEO 2.0 ECOBOOST',
        fullName: '2012 Ford Mondeo 2.0 EcoBoost',
        engineBadge: '2.0L EcoBoost • 203 / 240 HP',
        engineSubLabel: {
          en: 'TNBA/TPBA 2.0L Turbo • 6-Speed PowerShift • 300–340 Nm',
          de: 'TNBA/TPBA 2.0L Turbo • 6-Gang PowerShift • 300–340 Nm',
          ru: 'TNBA/TPBA 2.0L Турбо • 6-ст. PowerShift • 300–340 Н·м'
        },
        rarityLabel: {
          en: 'AUTO EXPRESS',
          de: 'AUTOBAHN-EXPRESS',
          ru: 'БЫСТРЫЙ АВТОМАТ'
        },
        originalMsrp: {
          en: '€33,400 New',
          de: '33.400 € Neu',
          ru: '€33 400 новый'
        },
        estUsedPrice: '€7,900',
        perkLabel: {
          en: '✦ 203 or 240 HP Turbo • 7.5–7.9s 0–100 • 1,800 kg Towing',
          de: '✦ 203 oder 240 PS Turbo • 7,5–7,9s 0–100 • 1.800 kg Anhängelast',
          ru: '✦ 203 или 240 л.с. Турбо • 7,5–7,9 с до 100 • Прицеп 1 800 кг'
        },
        remarkablePositives: {
          en: [
            'FAST 203 / 240 HP TURBO',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            '1,800 KG BRAKED TOWING',
            'SHARP MONDEO STEERING'
          ],
          de: [
            'SCHNELLE 203 / 240 PS TURBO',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            '1.800 KG ANHÄNGELAST',
            'PRÄZISE MONDEO-LENKUNG'
          ],
          ru: [
            'БЫСТРЫЙ ТУРБО 203 / 240 Л.С.',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ'
          ]
        },
        notableNegatives: {
          en: [
            'RISKY POWERSHIFT AUTO',
            'THIRSTY 9.6L/100KM',
            'VALVE CARBON BUILDUP RISK',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'ANFÄLLIGES POWERSHIFT-GETRIEBE',
            'HOHER VERBRAUCH (9,6L/100KM)',
            'VERKOKUNG DER EINLASSVENTILE',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'КАПРИЗНЫЙ РОБОТ POWERSHIFT',
            'ВЫСОКИЙ РАСХОД 9,6 Л/100 КМ',
            'НАГАР НА ВПУСКНЫХ КЛАПАНАХ',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 6.2,
            badges: {
              en: ['PowerShift 60k Oil Req.', '203 HP / 240 HP Tunes'],
              de: ['PowerShift alle 60k km Öl', '203 PS / 240 PS Stufen'],
              ru: ['Масло в PowerShift 60к км', 'Версии 203 и 240 л.с.']
            },
            dossier: {
              en: {
                headline: 'Strong 2.0L Turbo Engine Paired with Service-Sensitive PowerShift DCT',
                strengths: [
                  'Effortless Highway Pace: Combines both 203 HP (300 Nm, 7.9s) and 240 HP (340 Nm, 7.5s) factory tunes on the same chain-driven 2.0 EcoBoost block.',
                  'Stronger Block than 1.6 EcoBoost: Does not share the 1.6L cylinder-head overheating flaw.'
                ],
                watchouts: [
                  'PowerShift (MPS6) Wet-Clutch DCT: Requires strict oil + filter changes every 60,000 km. Neglected units suffer jerky shifts, clutch damper wear, and costly mechatronic failures.',
                  'Exhaust Manifold & Turbo Wastegate: Integrated exhaust manifold/turbo housing can crack or rattle at high mileage; DI valves accumulate carbon.'
                ]
              },
              de: {
                headline: 'Starker 2.0-Turbomotor mit wartungsintensivem PowerShift-Getriebe',
                strengths: [
                  'Souveräne Fahrleistungen: Vereint die 203-PS- (300 Nm, 7,9s) und 240-PS-Stufe (340 Nm, 7,5s) auf demselben kettengetriebenen 2.0-EcoBoost-Block.',
                  'Robuster als der 1.6 EcoBoost: Keine typischen Zylinderkopf-Überhitzungsschäden.'
                ],
                watchouts: [
                  'PowerShift-Doppelkupplungsgetriebe (MPS6): Zwingend alle 60.000 km Öl- und Filterwechsel nötig; sonst drohen teure Kupplungs- oder Mechatronikschäden.',
                  'Abgaskrümmer & Turbolader: Risse am Krümmer/Wastegate sowie Verkokung bei hoher Laufleistung möglich.'
                ]
              },
              ru: {
                headline: 'Мощный 2.0 турбо в паре с требовательным роботом PowerShift',
                strengths: [
                  'Динамика бизнес-класса: Объединяет заводские версии 203 л.с. (300 Н·м, 7,9 с) и 240 л.с. (340 Н·м, 7,5 с) на одном цепном блоке 2.0 EcoBoost.',
                  'Надёжнее 1.6 EcoBoost: Не страдает массовым перегревом ГБЦ.'
                ],
                watchouts: [
                  'Робот PowerShift (MPS6): Требует строгой замены масла и фильтра каждые 60 000 км; без этого изнашиваются демпфер сцепления и мехатроник.',
                  'Выпускной коллектор и нагар: Трещины коллектора/вестгейта и нагар на впускных клапанах на больших пробегах.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.5,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.7,
            badges: {
              en: ['580 kg Payload', '1,800 kg Braked Tow'],
              de: ['580 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 580 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.3,
            badges: {
              en: ['0–100: 7.5–7.9 s', '300–340 Nm (232–246 km/h)'],
              de: ['0–100: 7,5–7,9 s', '300–340 Nm (232–246 km/h)'],
              ru: ['0–100: 7,5–7,9 с', '300–340 Н·м (232–246 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Class-Leading Chassis', 'Heavier Front End'],
              de: ['Klassenbestes Fahrwerk', 'Schwerere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжелее передок']
            }
          },
          brakingSafety: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 37.2 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,2 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,2 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 5.9,
            badges: {
              en: ['9.6 L/100km Real', '179 g/km CO2'],
              de: ['9,6 L/100km Real', '179 g/km CO2'],
              ru: ['9,6 л/100 км в жизни', '179 г/км CO2']
            }
          },
          depreciationResale: {
            score: 7.5,
            badges: {
              en: ['Steep Initial Drop', 'PowerShift Discounts'],
              de: ['Hoher Wertverlust', 'PowerShift-Abschlag'],
              ru: ['Сильная уценка', 'Скидка из-за PowerShift']
            }
          },
          maintenanceInsurance: {
            score: 6.1,
            badges: {
              en: ['Expensive DCT Service', 'Higher Insurance Class'],
              de: ['Teurer DCT-Service', 'Höhere Versicherung'],
              ru: ['Дорогое ТО робота', 'Дороже страховка']
            }
          }
        }
      },
      {
        id: '2.3-duratec',
        isDefault: false,
        shortTitle: 'MONDEO 2.3 AUTO',
        fullName: '2012 Ford Mondeo 2.3',
        engineBadge: '2.3L Duratec NA • 161 HP',
        engineSubLabel: {
          en: 'SEBA 2.3L NA (03/2007–04/2010) • 6-Speed Aisin Auto • 208 Nm',
          de: 'SEBA 2.3L Saugmotor (03/2007–04/2010) • 6-Gang Aisin-Automatik • 208 Nm',
          ru: 'SEBA 2.3L Атмосферник (03/2007–04/2010) • 6-ст. АКПП Aisin • 208 Н·м'
        },
        rarityLabel: {
          en: 'TOUGH AUTO',
          de: 'SOLIDE AUTOMATIK',
          ru: 'НАДЁЖНЫЙ АВТОМАТ'
        },
        originalMsrp: {
          en: '€30,650 New',
          de: '30.650 € Neu',
          ru: '€30 650 новый'
        },
        estUsedPrice: '€6,400',
        perkLabel: {
          en: '✦ Durable 6-Speed Aisin Auto • Bulletproof 2.3 Chain NA • 550L Boot',
          de: '✦ Robuste 6-Gang-Aisin-Automatik • Haltbarer 2.3-Kettenmotor • 550L Kofferraum',
          ru: '✦ Надёжный автомат Aisin • Цепной 2.3 атмосферник • Багажник 550 л'
        },
        remarkablePositives: {
          en: [
            'DURABLE 6-SPEED AUTO',
            'BULLETPROOF 2.3 NA ENGINE',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            '1,600 KG BRAKED TOWING'
          ],
          de: [
            'ROBUSTE 6-GANG-AUTOMATIK',
            'UNZERSTÖRBARER 2.3 SAUGMOTOR',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            '1.600 KG ANHÄNGELAST'
          ],
          ru: [
            'НАДЁЖНЫЙ 6-СТ. АВТОМАТ AISIN',
            'НЕУБИВАЕМЫЙ МОТОР 2.3',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'БУКСИРОВКА ДО 1 600 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 10.2L/100KM',
            'PRE-FACELIFT ONLY (TO 2010)',
            'HIGH CO2 TAX (223G)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'HOHER VERBRAUCH (10,2L/100KM)',
            'NUR VORFACELIFT (BIS 04/2010)',
            'HOHE CO2-STEUER (223G)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'БОЛЬШОЙ РАСХОД 10,2 Л/100 КМ',
            'ТОЛЬКО ДОРЕСТАЙЛ (ДО 04/2010)',
            'ВЫСОКИЙ НАЛОГ (223 Г CO2)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.9,
            badges: {
              en: ['Aisin 6-Speed Auto', '2.3 Chain-Driven NA'],
              de: ['Aisin 6-Gang-Wandler', '2.3 Ketten-Saugmotor'],
              ru: ['Классический АКПП Aisin', 'Цепной мотор 2.3']
            },
            dossier: {
              en: {
                headline: 'The Safest Automatic Mondeo Mk4: Mazda 2.3L Chain + Aisin Torque Converter',
                strengths: [
                  'True Torque-Converter Automatic: Uses the Japanese Aisin AF21 6-speed automatic instead of PowerShift—far smoother and much longer-lasting.',
                  'Simple Chain-Driven 2.3L NA: No turbo, no direct injection, and a durable timing chain (produced 03/2007–04/2010 before 2.0 EcoBoost replaced it).'
                ],
                watchouts: [
                  'Transmission Fluid Changes: Even the tough Aisin 6-speed benefits from ATF drain-and-fill every 60,000–80,000 km.',
                  'High Fuel & Tax: Old-school NA + torque converter drinks 10+ L/100km in mixed use.'
                ]
              },
              de: {
                headline: 'Die sicherste Mondeo-Automatik: Mazda 2.3L Kette + Aisin-Wandler',
                strengths: [
                  'Echte Wandlerautomatik: Nutzt die japanische Aisin-AF21-6-Gang-Automatik statt PowerShift – deutlich haltbarer und ruckfreier.',
                  'Robuster 2.3-Ketten-Saugmotor: Kein Turbo, keine Direkteinspritzung (gebaut 03/2007–04/2010).'
                ],
                watchouts: [
                  'Automatikölwechsel: Alle 60.000–80.000 km empfohlen für lange Lebensdauer.',
                  'Hoher Verbrauch & CO2-Steuer: Über 10 L/100km im Alltag.'
                ]
              },
              ru: {
                headline: 'Самый надёжный Mondeo на автомате: цепной 2.3 + гидротрансформатор Aisin',
                strengths: [
                  'Классический 6-ст. автомат Aisin AF21: В отличие от робота PowerShift, работает плавно и служит сотни тысяч километров.',
                  'Простой цепной мотор 2.3: Без турбины и прямого впрыска (выпускался 03/2007–04/2010).'
                ],
                watchouts: [
                  'Замена масла в АКПП: Желательно обновлять ATF каждые 60–80 тыс. км.',
                  'Высокий расход топлива: Более 10 л/100 км в смешанном цикле.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.3,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.7,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.3,
            badges: {
              en: ['580 kg Payload', '1,600 kg Braked Tow'],
              de: ['580 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 580 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.7,
            badges: {
              en: ['0–100 km/h: 10.5 s', '208 Nm (207 km/h)'],
              de: ['0–100 km/h: 10,5 s', '208 Nm (207 km/h)'],
              ru: ['0–100 км/ч: 10,5 с', '208 Н·м (207 км/ч)']
            }
          },
          handlingAgility: {
            score: 7.9,
            badges: {
              en: ['Class-Leading Chassis', 'Relaxed Auto Tuning'],
              de: ['Klassenbestes Fahrwerk', 'Komfort-Abstimmung'],
              ru: ['Эталонное шасси', 'Комфортная настройка']
            }
          },
          brakingSafety: {
            score: 8.1,
            badges: {
              en: ['100–0 km/h: 37.5 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,5 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,5 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 5.2,
            badges: {
              en: ['10.2 L/100km Real', '223 g/km CO2'],
              de: ['10,2 L/100km Real', '223 g/km CO2'],
              ru: ['10,2 л/100 км в жизни', '223 г/км CO2']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Rare Reliable Auto', 'Pre-2010 Age Factor'],
              de: ['Seltene Top-Automatik', 'Alter vor 2010'],
              ru: ['Редкий надёжный АКПП', 'Возраст до 2010 года']
            }
          },
          maintenanceInsurance: {
            score: 7.1,
            badges: {
              en: ['Low Auto Repair Risk', 'High Fuel & Tax Cost'],
              de: ['Geringes Getriebe-Risiko', 'Hohe Sprit- & Steuerkosten'],
              ru: ['Надёжная АКПП', 'Высокий расход и налог']
            }
          }
        }
      },
      {
        id: '2.5t',
        isDefault: false,
        shortTitle: 'MONDEO 2.5T',
        fullName: '2012 Ford Mondeo 2.5T',
        engineBadge: '2.5L 5-Cyl Turbo • 220 HP',
        engineSubLabel: {
          en: 'HUBA 2.5L Volvo I5 Turbo (03/2007–11/2010) • 6-MT • 320 Nm',
          de: 'HUBA 2.5L Volvo R5-Turbo (03/2007–11/2010) • 6-Gang • 320 Nm',
          ru: 'HUBA 2.5L Volvo R5 Турбо (03/2007–11/2010) • 6-ст. МКПП • 320 Н·м'
        },
        rarityLabel: {
          en: '5-CYL SLEEPER',
          de: '5-ZYLINDER-SLEEPER',
          ru: '5-ЦИЛИНДРОВЫЙ СЛИПЕР'
        },
        originalMsrp: {
          en: '€32,750 New',
          de: '32.750 € Neu',
          ru: '€32 750 новый'
        },
        estUsedPrice: '€8,200',
        perkLabel: {
          en: '✦ Iconic Volvo 5-Cyl Sound • 245 km/h Sleeper • 1,800 kg Towing',
          de: '✦ Legendärer Volvo 5-Zylinder-Sound • 245 km/h • 1.800 kg Anhängelast',
          ru: '✦ Культовый звук 5 цилиндров Volvo • 245 км/ч • Прицеп 1 800 кг'
        },
        remarkablePositives: {
          en: [
            'ICONIC 5-CYLINDER SOUND',
            '7.5S 0–100 • 245 KM/H',
            'DURABLE ENGINE FROM VOLVO',
            'HUGE 550L SEDAN BOOT',
            '1,800 KG BRAKED TOWING'
          ],
          de: [
            'LEGENDÄRER 5-ZYLINDER-SOUND',
            '7,5S 0–100 • 245 KM/H',
            'ROBUSTER MOTOR VON VOLVO',
            'RIESIGER 550L KOFFERRAUM',
            '1.800 KG ANHÄNGELAST'
          ],
          ru: [
            'КУЛЬТОВЫЙ ЗВУК 5 ЦИЛИНДРОВ',
            '7,5 С ДО 100 • МАКС. 245 КМ/Ч',
            'НАДЁЖНЫЙ ДВИГАТЕЛЬ ОТ VOLVO',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'БУКСИРОВКА ДО 1 800 КГ'
          ]
        },
        notableNegatives: {
          en: [
            'THIRSTY 10.8L/100KM',
            'HIGH CO2 TAX (222G)',
            'PRE-FACELIFT ONLY (TO 2010)',
            'PCV OIL TRAP & HOSE WEAR'
          ],
          de: [
            'HOHER VERBRAUCH (10,8L/100KM)',
            'HOHE CO2-STEUER (222G)',
            'NUR VORFACELIFT (BIS 11/2010)',
            'KURBELGEHÄUSE-ENTLÜFTUNG (PCV)'
          ],
          ru: [
            'БОЛЬШОЙ РАСХОД 10,8 Л/100 КМ',
            'ВЫСОКИЙ НАЛОГ (222 Г CO2)',
            'ТОЛЬКО ДОРЕСТАЙЛ (ДО 11/2010)',
            'ВКГ (МАСЛОУЛОВИТЕЛЬ) И ШЛАНГИ'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.1,
            badges: {
              en: ['Volvo 5-Cyl Block', 'M66 6-Speed Manual'],
              de: ['Volvo 5-Zylinder-Block', 'M66 6-Gang-Getriebe'],
              ru: ['Блок Volvo 5 цилиндров', 'Крепкая 6-ст. МКПП M66']
            },
            dossier: {
              en: {
                headline: 'Over-Engineered Volvo B5254T3 5-Cylinder Turbo with Cult Following',
                strengths: [
                  'Port-Injected 5-Cylinder Toughness: Shared with the Focus ST and Volvo S60 T5; zero direct-injection carbon issues and a stout M66 6-speed manual.',
                  '320 Nm Mid-Range Pull: Broad torque plateau from 1,500–4,800 rpm delivers effortless Autobahn acceleration.'
                ],
                watchouts: [
                  'PCV Oil Trap Diaphragm: A torn PCV membrane causes a loud whistling noise and crankcase pressure that can blow out cam/crank seals.',
                  'Timing Belt & Intercooler Hoses: Belt + water pump due every 10 years / 160,000 km; aging rubber boost hoses can split.'
                ]
              },
              de: {
                headline: 'Überdimensionierter Volvo-5-Zylinder-Turbo mit Kultstatus',
                strengths: [
                  'Robuste 5-Zylinder-Technik: Verwandt mit Focus ST und Volvo T5; Saugrohreinspritzung ohne Verkokung und starkes M66-6-Gang-Getriebe.',
                  '320 Nm Durchzug: Kraftvolles Drehmomentplateau von 1.500 bis 4.800/min.'
                ],
                watchouts: [
                  'Kurbelgehäuseentlüftung (Ölfalle): Defekte Membran führt zu Pfeifen und undichten Simmerringen.',
                  'Zahnriemen & Ladeluftschläuche: Zahnriemen alle 10 Jahre/160.000 km; poröse Turboschläuche prüfen.'
                ]
              },
              ru: {
                headline: 'Ресурсный 5-цилиндровый турбомотор Volvo с культовым статусом',
                strengths: [
                  'Надёжность 5 цилиндров: Родственник Focus ST и Volvo T5; распределённый впрыск без нагара и крепкая 6-ст. МКПП M66.',
                  'Мощная тяга 320 Н·м: Ровная полка момента с 1 500 до 4 800 об/мин.'
                ],
                watchouts: [
                  'Мембрана ВКГ (маслоуловитель): При разрыве появляется свист и давит сальники двигателя.',
                  'Ремень ГРМ и патрубки: Замена ремня раз в 10 лет / 160 тыс. км; резиновые патрубки наддува со временем трескаются.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.3,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.7,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.7,
            badges: {
              en: ['575 kg Payload', '1,800 kg Braked Tow'],
              de: ['575 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 575 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.3,
            badges: {
              en: ['0–100 km/h: 7.5 s', '320 Nm (245 km/h)'],
              de: ['0–100 km/h: 7,5 s', '320 Nm (245 km/h)'],
              ru: ['0–100 км/ч: 7,5 с', '320 Н·м (245 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.2,
            badges: {
              en: ['Class-Leading Chassis', 'Effortless 5-Cyl Torque'],
              de: ['Klassenbestes Fahrwerk', 'Satter 5-Zylinder-Schub'],
              ru: ['Эталонное шасси', 'Мощная тяга 5 цилиндров']
            }
          },
          brakingSafety: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 37.0 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,0 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,0 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 4.8,
            badges: {
              en: ['10.8 L/100km Real', '222 g/km CO2'],
              de: ['10,8 L/100km Real', '222 g/km CO2'],
              ru: ['10,8 л/100 км в жизни', '222 г/км CO2']
            }
          },
          depreciationResale: {
            score: 8.5,
            badges: {
              en: ['Enthusiast Collector Value', 'Rare 5-Cyl Sedan'],
              de: ['Liebhaber-Wertstabilität', 'Seltener 5-Zylinder'],
              ru: ['Ценится фанатами', 'Редкий 5-цил. седан']
            }
          },
          maintenanceInsurance: {
            score: 6.0,
            badges: {
              en: ['Volvo Engine Parts', 'High Fuel & CO2 Tax'],
              de: ['Volvo-Motorteile', 'Hohe Sprit- & Steuerkosten'],
              ru: ['Запчасти от Volvo', 'Высокий расход и налог']
            }
          }
        }
      },
      {
        id: '1.6-tdci',
        isDefault: false,
        shortTitle: 'MONDEO 1.6 TDCi',
        fullName: '2012 Ford Mondeo 1.6 TDCi',
        engineBadge: '1.6L TDCi Diesel • 115 HP',
        engineSubLabel: {
          en: 'T1BA 1.6L 8v Turbo-Diesel (12/2010–08/2014) • 6-MT • 270 Nm',
          de: 'T1BA 1.6L 8V Turbodiesel (12/2010–08/2014) • 6-Gang • 270 Nm',
          ru: 'T1BA 1.6L 8v Турбодизель (12/2010–08/2014) • 6-ст. МКПП • 270 Н·м'
        },
        rarityLabel: {
          en: 'ECO COMMUTER',
          de: 'SPAR-DIESEL',
          ru: 'ЭКО-ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€27,250 New',
          de: '27.250 € Neu',
          ru: '€27 250 новый'
        },
        estUsedPrice: '€6,300',
        perkLabel: {
          en: '✦ 5.4 L/100km Real Economy • 109–114g CO2 • Huge 550L Sedan Boot',
          de: '✦ 5,4 L/100km Realverbrauch • 109–114g CO2 • Riesiger 550L Kofferraum',
          ru: '✦ Расход 5,4 л/100 км • 109–114 г CO2 • Огромный багажник 550 л'
        },
        remarkablePositives: {
          en: [
            '5.4L/100KM REAL ECONOMY',
            'LOW 1.6L DIESEL TAX',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT',
            'SHARP MONDEO STEERING'
          ],
          de: [
            '5,4 L/100KM REALVERBRAUCH',
            'GÜNSTIGE 1.6L DIESEL-STEUER',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT',
            'PRÄZISE MONDEO-LENKUNG'
          ],
          ru: [
            'РАСХОД 5,4 Л/100 КМ',
            'НИЗКИЙ НАЛОГ НА 1.6 ДИЗЕЛЬ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ',
            'ОСТРОЕ РУЛЕВОЕ УПРАВЛЕНИЕ'
          ]
        },
        notableNegatives: {
          en: [
            'SLOW 11.9S 0–100 ACCEL',
            'CLOGGED DPF ON SHORT TRIPS',
            'INJECTOR SEAL & TURBO WEAR',
            'NARROW BOOT OPENING (4-DOOR SEDAN)'
          ],
          de: [
            'TRÄGE 11,9S 0–100 BESCHL.',
            'DPF-VERSTOPFUNG IM KURZSTRECKEN-BETRIEB',
            'INJEKTORDICHTUNGEN & TURBO-VERSCHLEISS',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)'
          ],
          ru: [
            'МЕДЛЕННЫЙ РАЗГОН 11,9 С ДО 100',
            'САЖЕВЫЙ ФИЛЬТР НЕ ЛЮБИТ ГОРОД',
            'РИСК ПО ФОРСУНКАМ И ТУРБИНЕ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 7.1,
            badges: {
              en: ['Updated 8v PSA DV6', '15k km Oil Rule'],
              de: ['Überarbeiteter 8V DV6', '15.000 km Öl-Regel'],
              ru: ['Обновлённый 8v PSA DV6', 'Масло каждые 15 тыс. км']
            },
            dossier: {
              en: {
                headline: 'Updated 8-Valve PSA 1.6 TDCi: Frugal Cruiser if Oil & DPF Are Respected',
                strengths: [
                  'Improved 8-Valve Design (2010+): Fixed many of the earlier 16v DV6 oil-sludge issues; paired with a durable 6-speed manual.',
                  '270 Nm Overboost Torque: Pulls cleanly in town and cruises quietly at 120 km/h.'
                ],
                watchouts: [
                  'Injector Copper Seals & Oil Feed: Leaking injector seals ("black death") contaminate engine oil and can starve the turbocharger if ignored.',
                  'DPF Clogging: Strictly needs regular highway runs; short city commutes quickly clog the particulate filter.'
                ]
              },
              de: {
                headline: 'Überarbeiteter 8V PSA 1.6 TDCi: Sparsamer Gleiter bei guter Ölpflege',
                strengths: [
                  'Verbesserter 8-Ventiler (ab 2010): Deutlich weniger Ölschlamm-Probleme als der alte 16V; solides 6-Gang-Schaltgetriebe.',
                  '270 Nm Overboost: Ausreichend Durchzug für ruhiges Langstrecken-Pendeln.'
                ],
                watchouts: [
                  'Injektordichtungen & Turbo-Ölversorgung: Undichte Kupferringe verrußen das Öl und können den Turbolader schädigen.',
                  'DPF-Kurzstreckenrisiko: Benötigt regelmäßige Autobahnetappen zur Regeneration.'
                ]
              },
              ru: {
                headline: 'Обновлённый 8-клапанный PSA 1.6 TDCi: экономичный, но требует ухода',
                strengths: [
                  'Доработанная 8v версия (с 2010 года): Решены многие проблемы старого 16v; надёжная 6-ст. МКПП.',
                  'Тяга 270 Н·м в овербусте: Спокойно держит крейсерскую скорость на трассе.'
                ],
                watchouts: [
                  'Медные шайбы форсунок и трубка турбины: Прогар шайб закоксовывает масло и убивает турбину при затянутых ТО.',
                  'Сажевый фильтр (DPF): Противопоказаны короткие городские поездки без выезда на трассу.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.4,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 7.6,
            badges: {
              en: ['590 kg Payload', '1,300 kg Braked Tow'],
              de: ['590 kg Zuladung', '1.300 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 1 300 кг']
            }
          },
          accelerationOvertaking: {
            score: 5.8,
            badges: {
              en: ['0–100 km/h: 11.9 s', '270 Nm (190 km/h)'],
              de: ['0–100 km/h: 11,9 s', '270 Nm (190 km/h)'],
              ru: ['0–100 км/ч: 11,9 с', '270 Н·м (190 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Class-Leading Chassis', 'Light Front Axle'],
              de: ['Klassenbestes Fahrwerk', 'Leichte Vorderachse'],
              ru: ['Эталонное шасси', 'Лёгкий передок']
            }
          },
          brakingSafety: {
            score: 8.1,
            badges: {
              en: ['100–0 km/h: 37.5 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,5 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,5 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 9.0,
            badges: {
              en: ['5.4 L/100km Real', '109–114 g/km CO2'],
              de: ['5,4 L/100km Real', '109–114 g/km CO2'],
              ru: ['5,4 л/100 км в жизни', '109–114 г/км CO2']
            }
          },
          depreciationResale: {
            score: 7.8,
            badges: {
              en: ['Low Running Costs', 'Budget Commuter Pick'],
              de: ['Geringer Unterhalt', 'Beliebter Pendler-Diesel'],
              ru: ['Низкие затраты', 'Популярный эконом-дизель']
            }
          },
          maintenanceInsurance: {
            score: 7.8,
            badges: {
              en: ['Lowest Diesel Road Tax', 'Watch Injectors & DPF'],
              de: ['Günstigste Diesel-Steuer', 'Injektoren & DPF prüfen'],
              ru: ['Низкий налог на дизель', 'Следить за форсунками']
            }
          }
        }
      },
      {
        id: '1.8-tdci',
        isDefault: false,
        shortTitle: 'MONDEO 1.8 TDCi',
        fullName: '2012 Ford Mondeo 1.8 TDCi',
        engineBadge: '1.8L TDCi • 100 / 125 HP',
        engineSubLabel: {
          en: 'FFBA/QYBA 1.8L Ford Lynx Diesel (03/2007–09/2007) • 5/6-MT • 280–320 Nm',
          de: 'FFBA/QYBA 1.8L Ford-Lynx-Diesel (03/2007–09/2007) • 5/6-Gang • 280–320 Nm',
          ru: 'FFBA/QYBA 1.8L Дизель Ford Lynx (03/2007–09/2007) • 5/6-ст. МКПП • 280–320 Н·м'
        },
        rarityLabel: {
          en: 'OLD-SCHOOL DIESEL',
          de: 'KLASSIK-DIESEL',
          ru: 'СТАРАЯ ШКОЛА'
        },
        originalMsrp: {
          en: '€26,900 New',
          de: '26.900 € Neu',
          ru: '€26 900 новый'
        },
        estUsedPrice: '€4,900',
        perkLabel: {
          en: '✦ 100 or 125 HP • Often No Factory DPF (2007) • 6.3 L/100km Real Economy',
          de: '✦ 100 oder 125 PS • Oft ohne DPF (2007) • 6,3 L/100km Realverbrauch',
          ru: '✦ 100 или 125 л.с. • Часто без сажевого фильтра (2007) • 6,3 л/100 км'
        },
        remarkablePositives: {
          en: [
            'TOUGH CAST-IRON BLOCK',
            '6.3L/100KM REAL ECONOMY',
            'OFTEN NO DPF CLOGGING (2007)',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT'
          ],
          de: [
            'ROBUSTER GUSS-MOTORBLOCK',
            '6,3 L/100KM REALVERBRAUCH',
            'OFT OHNE DPF-PROBLEME (2007)',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT'
          ],
          ru: [
            'КРЕПКИЙ ЧУГУННЫЙ БЛОК',
            'РАСХОД 6,3 Л/100 КМ',
            'ЧАСТО БЕЗ САЖЕВОГО (2007)',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ'
          ]
        },
        notableNegatives: {
          en: [
            'NOISIER & ROUGHER DIESEL',
            'WET TIMING BELT RISK',
            'PRE-FACELIFT ONLY (2007)',
            'NARROW BOOT OPENING (4-DOOR SEDAN)'
          ],
          de: [
            'RAUER & LAUTER DIESEL-LAUF',
            'NASSER ZAHNRIEMEN (ÖLBAD)',
            'NUR FRÜHES BAUJAHR (2007)',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)'
          ],
          ru: [
            'ШУМНЫЙ И ЖЁСТКИЙ В РАБОТЕ',
            'РИСК МОКРОГО РЕМНЯ В МАСЛЕ',
            'ТОЛЬКО РАННИЙ 2007 ГОД',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 7.6,
            badges: {
              en: ['Cast-Iron Ford Block', 'Check Wet Belt Service'],
              de: ['Robuster Gussblock', 'Ölbad-Riemen prüfen'],
              ru: ['Чугунный блок Ford', 'Проверить мокрый ремень']
            },
            dossier: {
              en: {
                headline: 'Ford Lynx 1.8 TDCi (100 & 125 HP): Tough Cast-Iron Block with One Big Catch',
                strengths: [
                  'Combines 100 HP (280 Nm) & 125 HP (320 Nm): Built on Ford’s own cast-iron Lynx block, often sold in 2007 without a DPF.',
                  'Strong Low-End Pull: Punchy torque and simple manual gearboxes.'
                ],
                watchouts: [
                  'Oil-Bathed Wet Timing Belt: Early 2007 units use a timing chain, while later/updated setups use a wet belt running in engine oil to drive the fuel pump—if it snaps, the engine is ruined.',
                  'Dual-Mass Flywheel & Rough Idle: Noisier than PSA 2.0 TDCi and hard on DMFs.'
                ]
              },
              de: {
                headline: 'Ford Lynx 1.8 TDCi (100 & 125 PS): Robuster Gussblock mit einer Schwachstelle',
                strengths: [
                  'Vereint 100 PS (280 Nm) & 125 PS (320 Nm): Bewährter Ford-Gussblock, 2007 oft noch ab Werk ohne DPF.',
                  'Kräftiger Antritt: Solides Drehmoment mit robustem Schaltgetriebe.'
                ],
                watchouts: [
                  'Zahnriemen im Ölbad (Wet Belt): Der Antrieb der Hochdruckpumpe läuft im Öl – vernachlässigte Wechsel führen zum Motorschaden.',
                  'Zweimassenschwungrad & Laufkultur: Deutlich rauer und lauter als der 2.0 TDCi.'
                ]
              },
              ru: {
                headline: 'Ford Lynx 1.8 TDCi (100 и 125 л.с.): крепкий чугунный блок с нюансом по ГРМ',
                strengths: [
                  'Версии 100 л.с. (280 Н·м) и 125 л.с. (320 Н·м): Чугунный блок собственной разработки Ford, в 2007 году часто шёл без DPF.',
                  'Уверенная тяга: Хороший подхват с низов и простая механика.'
                ],
                watchouts: [
                  'Мокрый ремень в масле (Wet Belt): Привод ТНВД в масляной ванне требует своевременной замены (часто меняют на цепь), иначе обрыв гнёт клапаны.',
                  'Шумность и маховик: Работает заметно жёстче, чем 2.0 TDCi.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.2,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.7,
            badges: {
              en: ['Solid Body Shell', 'Check Rear Wheel Arches'],
              de: ['Solide Karosserie', 'Radläufe auf Rost prüfen'],
              ru: ['Крепкий кузов', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.1,
            badges: {
              en: ['585 kg Payload', '1,600 kg Braked Tow'],
              de: ['585 kg Zuladung', '1.600 kg Anhängelast'],
              ru: ['Нагрузка 585 кг', 'Прицеп до 1 600 кг']
            }
          },
          accelerationOvertaking: {
            score: 6.4,
            badges: {
              en: ['0–100: 10.5–12.3 s', '280–320 Nm (185–200 km/h)'],
              de: ['0–100: 10,5–12,3 s', '280–320 Nm (185–200 km/h)'],
              ru: ['0–100: 10,5–12,3 с', '280–320 Н·м (185–200 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.0,
            badges: {
              en: ['Class-Leading Chassis', 'Heavy Diesel Nose'],
              de: ['Klassenbestes Fahrwerk', 'Schwerere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжёлый дизельный нос']
            }
          },
          brakingSafety: {
            score: 8.0,
            badges: {
              en: ['100–0 km/h: 37.6 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,6 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,6 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 8.2,
            badges: {
              en: ['6.3 L/100km Real', '154 g/km CO2'],
              de: ['6,3 L/100km Real', '154 g/km CO2'],
              ru: ['6,3 л/100 км в жизни', '154 г/км CO2']
            }
          },
          depreciationResale: {
            score: 7.7,
            badges: {
              en: ['Very Cheap Used Buy', 'Pre-2008 Age Factor'],
              de: ['Sehr günstiger Preis', 'Frühes Baujahr 2007'],
              ru: ['Очень низкая цена', 'Возраст 2007 года']
            }
          },
          maintenanceInsurance: {
            score: 7.2,
            badges: {
              en: ['Wet Belt & DMF Cost', 'No DPF Repair Hassle'],
              de: ['Ölbad-Riemen & ZMS', 'Kein DPF-Ärger (oft)'],
              ru: ['Замена мокрого ремня', 'Без проблем с DPF']
            }
          }
        }
      },
      {
        id: '2.0-tdci',
        isDefault: false,
        shortTitle: 'MONDEO 2.0 TDCi',
        fullName: '2012 Ford Mondeo 2.0 TDCi',
        engineBadge: '2.0L TDCi • 115 / 130 / 140 / 163 HP',
        engineSubLabel: {
          en: 'DW10 PSA 2.0L Turbo-Diesel (2007–2014) • 6-MT / Opt. Auto • 300–340 Nm',
          de: 'DW10 PSA 2.0L Turbodiesel (2007–2014) • 6-Gang / Opt. Automatik • 300–340 Nm',
          ru: 'DW10 PSA 2.0L Турбодизель (2007–2014) • 6-ст. МКПП / Опц. АКПП • 300–340 Н·м'
        },
        rarityLabel: {
          en: 'BEST MK4 DIESEL',
          de: 'BESTSELLER-DIESEL',
          ru: 'ЛУЧШИЙ ДИЗЕЛЬ'
        },
        originalMsrp: {
          en: '€29,950 New',
          de: '29.950 € Neu',
          ru: '€29 950 новый'
        },
        estUsedPrice: '€7,200',
        perkLabel: {
          en: '✦ 115–163 HP PSA DW10 • 6.4 L/100km Real • 1,800 kg Towing • 400k+ km Proven',
          de: '✦ 115–163 PS PSA DW10 • 6,4 L/100km Real • 1.800 kg Anhängelast • Dauerläufer',
          ru: '✦ 115–163 л.с. PSA DW10 • 6,4 л/100 км • Прицеп 1 800 кг • Ресурс 400+ тыс. км'
        },
        remarkablePositives: {
          en: [
            'PROVEN 400K+ KM DIESEL',
            '6.4L/100KM REAL ECONOMY',
            '1,800 KG BRAKED TOWING',
            'HUGE 550L SEDAN BOOT',
            'HIGHWAY CRUISER COMFORT'
          ],
          de: [
            'BEWÄHRTER 400.000-KM-DIESEL',
            '6,4 L/100KM REALVERBRAUCH',
            '1.800 KG ANHÄNGELAST',
            'RIESIGER 550L KOFFERRAUM',
            'HOHER LANGSTRECKEN-KOMFORT'
          ],
          ru: [
            'РЕСУРСНЫЙ ДИЗЕЛЬ 400+ ТЫС. КМ',
            'РАСХОД 6,4 Л/100 КМ',
            'БУКСИРОВКА ДО 1 800 КГ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'КОМФОРТ НА ДАЛЬНИХ ТРАССАХ'
          ]
        },
        notableNegatives: {
          en: [
            'AVOID NEGLECTED POWERSHIFT',
            'EGR & DPF ON SHORT TRIPS',
            'NARROW BOOT OPENING (4-DOOR SEDAN)',
            'WIDE 11.4M TURNING CIRCLE'
          ],
          de: [
            'UNGEPFLEGTES POWERSHIFT MEIDEN',
            'AGR & DPF AUF KURZSTRECKEN',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)',
            'GROSSER 11,4M WENDEKREIS'
          ],
          ru: [
            'ОСТОРОЖНО С РОБОТОМ POWERSHIFT',
            'ЕГР И САЖЕВЫЙ В ГОРОДЕ',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)',
            'БОЛЬШОЙ РАЗВОРОТ 11,4 М'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.8,
            badges: {
              en: ['PSA DW10 Workhorse', 'Manual Best; Watch PowerShift'],
              de: ['PSA DW10 Dauerläufer', 'Schalter top; PowerShift prüfen'],
              ru: ['Надёжный PSA DW10', 'МКПП топ; робот проверять']
            },
            dossier: {
              en: {
                headline: 'PSA DW10 2.0 TDCi (115 / 130 / 140 / 163 HP): The Sweet Spot of the Mk4 Range',
                strengths: [
                  'Taxi-Proven Longevity: Combines all 4 power tunes (115, 130, 140 & 163 HP, 300–340 Nm) on the ultra-tough PSA DW10 block—regularly reaches 400,000+ km.',
                  'Smooth & Refined: Far quieter and smoother than the older 1.8 TDCi.'
                ],
                watchouts: [
                  'Manual vs PowerShift: 6-speed manual (and pre-2010 Aisin 6-AT on 130/140 HP) are tough; post-2010 PowerShift DCT requires strict 60,000 km fluid changes.',
                  'DPF Vaporizer & EGR: Facelift 2.0 TDCi uses a DPF fuel vaporizer that can fail, plus standard EGR/crank-sensor wear at high mileage.'
                ]
              },
              de: {
                headline: 'PSA DW10 2.0 TDCi (115 / 130 / 140 / 163 PS): Der beste Mondeo-Mk4-Diesel',
                strengths: [
                  'Taxi-erprobte Haltbarkeit: Vereint alle Leistungsstufen (115, 130, 140 & 163 PS, 300–340 Nm) auf dem robusten PSA-DW10-Block – läuft oft über 400.000 km.',
                  'Ruhiger Lauf: Deutlich kultivierter als der alte 1.8 TDCi.'
                ],
                watchouts: [
                  'Schaltgetriebe vs. PowerShift: 6-Gang-Schalter (und alte Aisin-Wandler bis 2010) sind top; PowerShift ab 2010 braucht zwingend alle 60.000 km Ölwechsel.',
                  'DPF-Verdampfer & AGR: Bei Kurzstrecken drohen AGR- und DPF-Probleme.'
                ]
              },
              ru: {
                headline: 'PSA DW10 2.0 TDCi (115 / 130 / 140 / 163 л.с.): лучший дизель Mondeo Mk4',
                strengths: [
                  'Проверен таксистами: Объединяет все версии (115, 130, 140 и 163 л.с., 300–340 Н·м) на ресурсом блоке PSA DW10 — ходит 400+ тыс. км.',
                  'Тихая работа: Намного мягче и тише старого 1.8 TDCi.'
                ],
                watchouts: [
                  'МКПП против PowerShift: 6-ст. МКПП (и классический автомат Aisin до 2010 года) надёжны; робот PowerShift с 2010 года требует замены масла каждые 60 тыс. км.',
                  'ЕГР и сажевый фильтр: В городе возможны ошибки по клапану ЕГР и форсунке прожига DPF.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.5,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 8.7,
            badges: {
              en: ['590 kg Payload', '1,800 kg Braked Tow'],
              de: ['590 kg Zuladung', '1.800 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 1 800 кг']
            }
          },
          accelerationOvertaking: {
            score: 7.5,
            badges: {
              en: ['0–100: 8.9–10.9 s', '300–340 Nm (192–215 km/h)'],
              de: ['0–100: 8,9–10,9 s', '300–340 Nm (192–215 km/h)'],
              ru: ['0–100: 8,9–10,9 с', '300–340 Н·м (192–215 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.2,
            badges: {
              en: ['Class-Leading Chassis', 'Effortless Overtaking'],
              de: ['Klassenbestes Fahrwerk', 'Souveräner Durchzug'],
              ru: ['Эталонное шасси', 'Уверенные обгоны']
            }
          },
          brakingSafety: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 37.3 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,3 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,3 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 8.4,
            badges: {
              en: ['6.4 L/100km Real', '139–156 g/km CO2'],
              de: ['6,4 L/100km Real', '139–156 g/km CO2'],
              ru: ['6,4 л/100 км в жизни', '139–156 г/км CO2']
            }
          },
          depreciationResale: {
            score: 8.4,
            badges: {
              en: ['Highest Used Demand', 'Easy Parts & Resale'],
              de: ['Gefragtester Mondeo', 'Leichter Wiederverkauf'],
              ru: ['Самый ликвидный Mondeo', 'Легко продать и чинить']
            }
          },
          maintenanceInsurance: {
            score: 7.8,
            badges: {
              en: ['Abundant PSA Parts', 'Manual Keeps Bills Low'],
              de: ['Günstige PSA-Teile', 'Schalter sehr sparsam'],
              ru: ['Доступные запчасти PSA', 'МКПП недорога в ремонте']
            }
          }
        }
      },
      {
        id: '2.2-tdci',
        isDefault: false,
        shortTitle: 'MONDEO 2.2 TDCi',
        fullName: '2012 Ford Mondeo 2.2 TDCi',
        engineBadge: '2.2L TDCi • 175 / 200 HP',
        engineSubLabel: {
          en: 'DW12 PSA 2.2L Turbo-Diesel (2008–2014) • 6-MT / Opt. Aisin 6-AT • 400–420 Nm',
          de: 'DW12 PSA 2.2L Turbodiesel (2008–2014) • 6-Gang / Opt. Aisin-6-AT • 400–420 Nm',
          ru: 'DW12 PSA 2.2L Турбодизель (2008–2014) • 6-ст. МКПП / Опц. АКПП Aisin • 400–420 Н·м'
        },
        rarityLabel: {
          en: 'TORQUE MONSTER',
          de: 'DREHMOMENT-KÖNIG',
          ru: 'КОРОЛЬ ТЯГИ'
        },
        originalMsrp: {
          en: '€34,950 New',
          de: '34.950 € Neu',
          ru: '€34 950 новый'
        },
        estUsedPrice: '€8,100',
        perkLabel: {
          en: '✦ 175 or 200 HP • 420 Nm Torque (450 Overboost) • 1,800–2,000 kg Towing',
          de: '✦ 175 oder 200 PS • 420 Nm (450 Overboost) • Bis 2.000 kg Anhängelast',
          ru: '✦ 175 или 200 л.с. • 420 Н·м (450 овербуст) • Прицеп до 2 000 кг'
        },
        remarkablePositives: {
          en: [
            'MASSIVE 420 NM TORQUE',
            '2,000 KG BRAKED TOWING',
            '7.2L/100KM REAL ECONOMY',
            'HUGE 550L SEDAN BOOT',
            'RELIABLE AISIN 6-AT OPTION'
          ],
          de: [
            'GEWALTIGE 420 NM DREHMOMENT',
            'BIS 2.000 KG ANHÄNGELAST',
            '7,2 L/100KM REALVERBRAUCH',
            'RIESIGER 550L KOFFERRAUM',
            'ROBUSTE AISIN-6-AUTOMATIK'
          ],
          ru: [
            'МОЩНЕЙШАЯ ТЯГА 420 Н·М',
            'БУКСИРОВКА ДО 2 000 КГ',
            'РАСХОД 7,2 Л/100 КМ',
            'ОГРОМНЫЙ БАГАЖНИК 550 Л',
            'НАДЁЖНЫЙ АВТОМАТ AISIN'
          ]
        },
        notableNegatives: {
          en: [
            'HEAVY CLUTCH & DMF WEAR',
            'HIGH 2.2L DIESEL ROAD TAX',
            'OIL-PUMP CHAIN WEAR RISK',
            'NARROW BOOT OPENING (4-DOOR SEDAN)'
          ],
          de: [
            'HOHER KUPPLUNGS- & ZMS-VERSCHLEISS',
            'HOHE 2.2L DIESEL-STEUER',
            'ÖLPUMPENKETTEN-RISIKO (VIEL KM)',
            'SCHMALE LADELUKE (4-TÜRER-LIMO)'
          ],
          ru: [
            'БЫСТРЫЙ ИЗНОС СЦЕПЛЕНИЯ И ZMS',
            'ВЫСОКИЙ НАЛОГ НА 2.2 ДИЗЕЛЬ',
            'РИСК ИЗНОСА ЦЕПИ МАСЛОНАСОСА',
            'УЗКИЙ ПРОЁМ (ТОЛЬКО У СЕДАНА)'
          ]
        },
        subStats: {
          powertrainDurability: {
            score: 8.0,
            badges: {
              en: ['PSA DW12 175/200 HP', 'No PowerShift (Aisin AT)'],
              de: ['PSA DW12 175/200 PS', 'Kein PowerShift (Aisin AT)'],
              ru: ['PSA DW12 175/200 л.с.', 'Без PowerShift (АКПП Aisin)']
            },
            dossier: {
              en: {
                headline: 'Flagship PSA DW12 2.2 TDCi (175 & 200 HP): Huge Torque & Aisin Auto',
                strengths: [
                  'Combines 175 HP (2008–2010, 400 Nm) & 200 HP (2010–2014, 420 Nm / 450 Nm overboost): Effortless Autobahn overtaking and top-tier towing.',
                  'Aisin 6-Speed Auto (200 HP): Too torquey for PowerShift, so automatic 2.2 TDCi cars got the far tougher Aisin torque-converter automatic!'
                ],
                watchouts: [
                  'Clutch & Dual-Mass Flywheel: Massive 420–450 Nm torque wears manual clutches and DMFs faster if driven hard or towing heavy trailers.',
                  'Oil Pump Chain & DPF: High-mileage units (180k+ km) should have oil pressure / oil-pump chain tensioner checked.'
                ]
              },
              de: {
                headline: 'Top-Diesel PSA DW12 2.2 TDCi (175 & 200 PS): Gewaltiger Schub & Aisin-Automatik',
                strengths: [
                  'Vereint 175 PS (2008–2010, 400 Nm) & 200 PS (2010–2014, 420 Nm / 450 Nm Overboost): Souveräne Autobahn-Performance.',
                  'Aisin 6-Gang-Automatik (200 PS): Zu stark für PowerShift – daher mit der haltbaren Aisin-Wandlerautomatik kombiniert.'
                ],
                watchouts: [
                  'Kupplung & ZMS: 420–450 Nm belasten Kupplung und Zweimassenschwungrad beim Handschalter stark.',
                  'Ölpumpenkette & DPF: Ab ca. 180.000 km Öldruck/Ölpumpenkette im Blick behalten.'
                ]
              },
              ru: {
                headline: 'Флагманский дизель PSA DW12 2.2 TDCi (175 и 200 л.с.): огромная тяга и АКПП Aisin',
                strengths: [
                  'Объединяет 175 л.с. (2008–2010, 400 Н·м) и 200 л.с. (2010–2014, 420 Н·м / 450 Н·м в овербусте): Ураганная тяга на трассе.',
                  'Классический автомат Aisin (200 л.с.): Из-за огромного момента сюда ставили надёжный гидротрансформатор Aisin вместо робота PowerShift!'
                ],
                watchouts: [
                  'Сцепление и двухмассовый маховик: 420–450 Н·м быстро изнашивают маховик на МКПП при активной езде или буксировке.',
                  'Цепь маслонасоса: На пробегах 180+ тыс. км стоит контролировать состояние привода маслонасоса.'
                ]
              }
            }
          },
          electronicsInfotainment: {
            score: 7.5,
            badges: {
              en: ['Convers+ Cluster', 'Heated Windscreen'],
              de: ['Convers+ Tacho', 'Beheizbare Frontscheibe'],
              ru: ['Приборка Convers+', 'Обогрев лобового']
            }
          },
          buildQualityRust: {
            score: 7.8,
            badges: {
              en: ['Quiet Cabin Insulation', 'Check Rear Wheel Arches'],
              de: ['Gute Geräuschdämmung', 'Radläufe auf Rost prüfen'],
              ru: ['Тихий салон', 'Проверить задние арки']
            }
          },
          interiorBootSpace: {
            score: 8.7,
            badges: {
              en: ['550L Sedan Boot', 'Huge Rear Legroom'],
              de: ['550L Stufenheck-Kofferraum', 'Viel Beinfreiheit hinten'],
              ru: ['Багажник 550 л', 'Огромный запас сзади']
            }
          },
          cabinErgonomicsVisibility: {
            score: 7.6,
            badges: {
              en: ['11.4 m Turning Circle', 'Narrow 4-Door Trunk Opening'],
              de: ['11,4 m Wendekreis', 'Schmale 4-Türer-Ladeluke'],
              ru: ['Разворот 11,4 м', 'Узкий проём (4-дв. седан)']
            }
          },
          payloadTowing: {
            score: 9.0,
            badges: {
              en: ['590 kg Payload', 'Up to 2,000 kg Tow'],
              de: ['590 kg Zuladung', 'Bis 2.000 kg Anhängelast'],
              ru: ['Нагрузка 590 кг', 'Прицеп до 2 000 кг']
            }
          },
          accelerationOvertaking: {
            score: 8.2,
            badges: {
              en: ['0–100: 8.1–8.7 s', '400–420 Nm (223–230 km/h)'],
              de: ['0–100: 8,1–8,7 s', '400–420 Nm (223–230 km/h)'],
              ru: ['0–100: 8,1–8,7 с', '400–420 Н·м (223–230 км/ч)']
            }
          },
          handlingAgility: {
            score: 8.1,
            badges: {
              en: ['Class-Leading Chassis', 'Heavy Front Axle'],
              de: ['Klassenbestes Fahrwerk', 'Schwere Vorderachse'],
              ru: ['Эталонное шасси', 'Тяжёлая передняя ось']
            }
          },
          brakingSafety: {
            score: 8.2,
            badges: {
              en: ['100–0 km/h: 37.2 m', '5-Star Euro NCAP'],
              de: ['100–0 km/h: 37,2 m', '5 Sterne Euro NCAP'],
              ru: ['100–0 км/ч: 37,2 м', '5 звёзд Euro NCAP']
            }
          },
          efficiencyFuel: {
            score: 7.6,
            badges: {
              en: ['7.2 L/100km Real', '165–179 g/km CO2'],
              de: ['7,2 L/100km Real', '165–179 g/km CO2'],
              ru: ['7,2 л/100 км в жизни', '165–179 г/км CO2']
            }
          },
          depreciationResale: {
            score: 8.3,
            badges: {
              en: ['Sought-After 200 HP', 'Strong Towing Demand'],
              de: ['Gesuchter 200-PS-Diesel', 'Beliebt als Zugfahrzeug'],
              ru: ['Востребован на вторичке', 'Ценят как тягач']
            }
          },
          maintenanceInsurance: {
            score: 6.7,
            badges: {
              en: ['High 2.2L Road Tax', 'Costly DMF & Clutch'],
              de: ['Hohe 2.2L Kfz-Steuer', 'Teure Kupplung & ZMS'],
              ru: ['Высокий налог 2.2 л', 'Дорогое сцепление и ZMS']
            }
          }
        }
      }
    ]
  }
];

// Maximum number of standout pros / cons displayed per car
const MAX_TRAITS_PER_GROUP = 7;

// Application State
let selectedLeftId = 'toyota-auris-2014';
let selectedRightId = 'honda-civic-2014';
let selectedLeftEngineId = '1.8-hybrid';
let selectedRightEngineId = '1.8-ivtec';
let activeRosterTarget = 'p1'; // 'p1' (left) or 'p2' (right)
let currentLang = 'en'; // 'en' | 'de' | 'ru'
let currentTheme = 'dark'; // 'dark' | 'light' | 'dark-soft' | 'light-soft'
const expandedPillars = new Set();
let isSyncingScroll = false;
let rosterDragMoved = false;
let isDockCollapsed = true;

// Helper: Current language dictionary
function t() {
  return UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
}

// Helper: Get raw base car entry from CAR_ROSTER
function getBaseCarById(id) {
  return CAR_ROSTER.find((car) => car.id === id) || CAR_ROSTER[0];
}

// Helper: Resolve a car object merged with a specific engine configuration (defaults to car.defaultEngineId)
function getCarById(id, engineId) {
  const baseCar = getBaseCarById(id);
  const targetEngineId = engineId || baseCar.defaultEngineId;
  const engineObj =
    baseCar.engines.find((eng) => eng.id === targetEngineId) ||
    baseCar.engines.find((eng) => eng.id === baseCar.defaultEngineId) ||
    baseCar.engines[0];

  return {
    ...baseCar,
    ...engineObj,
    id: baseCar.id,
    selectedEngineId: engineObj.id
  };
}

// Helper: Calculate aggregated score (0.0 - 10.0) for a single Pillar on a car
function getPillarScore(car, pillar) {
  const sum = pillar.subRatings.reduce(
    (acc, sub) => acc + ((car.subStats && car.subStats[sub.key] && car.subStats[sub.key].score) || 0),
    0
  );
  const avg = sum / pillar.subRatings.length;
  return Math.round(avg * 10) / 10;
}

// Helper: Calculate Overall Rating & Index Class on the 0.0 to 10 scale (x/10)
function calculateOverallIndex(car) {
  const pillarScores = STAT_PILLARS.map((p) => getPillarScore(car, p));
  const rawAvg = pillarScores.reduce((acc, v) => acc + v, 0) / pillarScores.length;
  const piNum = Math.round(rawAvg * 10) / 10;
  const piScore = piNum === 10 ? '10' : piNum.toFixed(1);

  let piClass = 'F';
  let piBadgeText = 'F';
  let piClassCss = 'class-f';

  if (piNum >= 9.6) {
    piClass = 'S+';
    piBadgeText = '✦ S+';
    piClassCss = 'class-s-plus';
  } else if (piNum >= 9.0) {
    piClass = 'S';
    piBadgeText = '✦ S';
    piClassCss = 'class-s';
  } else if (piNum >= 8.0) {
    piClass = 'A';
    piBadgeText = 'A';
    piClassCss = 'class-a';
  } else if (piNum >= 7.0) {
    piClass = 'B';
    piBadgeText = 'B';
    piClassCss = 'class-b';
  } else if (piNum >= 6.0) {
    piClass = 'C';
    piBadgeText = 'C';
    piClassCss = 'class-c';
  } else if (piNum >= 5.0) {
    piClass = 'D';
    piBadgeText = 'D';
    piClassCss = 'class-d';
  }

  return {
    piNum,
    piScore,
    piClass,
    piBadgeText,
    piClassLabel: `${piClass}${t().classSuffix}`,
    piClassCss
  };
}

// SVG icon for FWD / AWD drivetrain badge (Forza style mini chassis diagram)
function getDrivetrainSvg(drivetrain) {
  const isAwd = drivetrain === 'AWD';
  const rearWheelColor = isAwd ? '#111' : '#777';
  const rearAxleColor = isAwd ? '#111' : '#888';
  const rearAxleWidth = isAwd ? '2.2' : '1.6';
  const shaftColor = isAwd ? '#111' : '#555';

  return `
    <svg class="chassis-svg" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="1" width="6" height="3.5" rx="1" fill="#111"/>
      <rect x="6" y="13.5" width="6" height="3.5" rx="1" fill="#111"/>
      <rect x="24" y="1" width="6" height="3.5" rx="1" fill="${rearWheelColor}"/>
      <rect x="24" y="13.5" width="6" height="3.5" rx="1" fill="${rearWheelColor}"/>
      <line x1="9" y1="4.5" x2="9" y2="13.5" stroke="#111" stroke-width="2.2"/>
      <line x1="27" y1="4.5" x2="27" y2="13.5" stroke="${rearAxleColor}" stroke-width="${rearAxleWidth}"/>
      <line x1="9" y1="9" x2="27" y2="9" stroke="${shaftColor}" stroke-width="2"/>
      <circle cx="9" cy="9" r="2.3" fill="#111"/>
      ${isAwd ? '<circle cx="27" cy="9" r="2.3" fill="#111"/>' : ''}
    </svg>
  `;
}

// Helper: Get comparison classes & symbol for two scores
function getComparisonState(val, oppVal) {
  const diff = Number((val - oppVal).toFixed(1));
  let indicatorSymbol = '—';
  let squareClass = '';
  let valueColorClass = '';
  let barColorClass = '';

  if (diff > 0) {
    indicatorSymbol = '▲';
    squareClass = 'diff-win';
    valueColorClass = 'score-win';
    barColorClass = 'fill-win';
  } else if (diff < 0) {
    indicatorSymbol = '▼';
    squareClass = 'diff-loss';
    valueColorClass = 'score-loss';
    barColorClass = 'fill-loss';
  }

  const isSPlus = val >= 9.6;
  if (isSPlus) {
    barColorClass = 'fill-s-plus';
  }

  return { indicatorSymbol, squareClass, valueColorClass, barColorClass, isSPlus };
}

// Build a Forza-style Stat Column HTML with Two-Level 4-Pillar Accordion
function buildForzaStatColumnHtml(car, opponent, side = 'left') {
  const ui = t();
  const { piScore, piBadgeText, piClassLabel, piClassCss } = calculateOverallIndex(car);
  const allExpanded = expandedPillars.size === STAT_PILLARS.length;

  const pillarsHtml = STAT_PILLARS.map((pillar) => {
    const val = getPillarScore(car, pillar);
    const oppVal = getPillarScore(opponent, pillar);
    const isExpanded = expandedPillars.has(pillar.id);
    const { indicatorSymbol, squareClass, valueColorClass, barColorClass, isSPlus } =
      getComparisonState(val, oppVal);

    // Build the 3 sub-ratings for this pillar
    const subRowsHtml = pillar.subRatings
      .map((sub) => {
        const subObj = (car.subStats && car.subStats[sub.key]) || { score: 0, badges: {} };
        const oppSubObj = (opponent.subStats && opponent.subStats[sub.key]) || { score: 0, badges: {} };
        const sVal = subObj.score;
        const sOppVal = oppSubObj.score;
        const subCmp = getComparisonState(sVal, sOppVal);

        const localizedBadges = (subObj.badges && subObj.badges[currentLang]) || [];

        const ratingDisplayHtml = subCmp.isSPlus
          ? `<span class="stat-stock-val score-s-plus" title="S+ (9.6–10)">✦ ${sVal.toFixed(1)}</span>`
          : `<span class="stat-stock-val ${subCmp.valueColorClass}">${sVal.toFixed(1)}</span>`;

        const hasDossier = Boolean(subObj.dossier && subObj.dossier[currentLang]);
        const infoBtnHtml = hasDossier
          ? `<button type="button" class="stat-info-btn" data-dossier-stat="${sub.key}" data-side="${side}" title="${ui.dossierInspectBtn}" aria-label="${ui.dossierInspectBtn}"><svg class="stat-info-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="4.25" r="1.3" fill="currentColor" /><path d="M8 7.25V12.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>`
          : '';

        const badgesHtml =
          localizedBadges.length > 0
            ? `<div class="detail-badges-row">${localizedBadges
                .map((b) => `<span class="detail-badge">${b}</span>`)
                .join('')}</div>`
            : '';

        return `
          <div class="sub-stat-row ${hasDossier ? 'has-dossier' : ''}" ${hasDossier ? `data-dossier-stat="${sub.key}" data-side="${side}"` : ''} title="${sub.unitHint[currentLang]}">
            <div class="stat-row-main">
              <div class="stat-label-wrap">
                <span class="stat-name">• ${sub.label[currentLang]}${infoBtnHtml}</span>
              </div>
              <div class="stat-stock-cell">
                <span class="diff-arrow ${subCmp.valueColorClass}">${subCmp.indicatorSymbol}</span>
                ${ratingDisplayHtml}
              </div>
              <div class="stat-current-cell">
                <span class="stat-opp-val">${sOppVal.toFixed(1)}</span>
              </div>
            </div>
            ${badgesHtml}
          </div>
        `;
      })
      .join('');

    const pillarRatingHtml = isSPlus
      ? `<span class="stat-stock-val score-s-plus" title="S+ (9.6–10)">✦ ${val.toFixed(1)}</span>`
      : `<span class="stat-stock-val ${valueColorClass}">${val.toFixed(1)}</span>`;

    const pillarIconHtml = PILLAR_ICONS[pillar.id] || '';
    const pillarNumFormatted = String(pillar.number).padStart(2, '0');
    const pillarSubTagsHtml = pillar.subtitle[currentLang]
      .split(/\s*[,&•]\s*/)
      .filter(Boolean)
      .map((tag) => `<span class="pillar-sub-tag">${tag.trim()}</span>`)
      .join('');

    const segmentStateClass = isSPlus ? 'seg-s-plus' : val < oppVal ? 'seg-loss' : 'seg-win';
    const segmentsHtml = Array.from({ length: 10 }, (_, idx) => {
      const fillRatio = Math.max(0, Math.min(1, val - idx));
      const fillPct = Math.round(fillRatio * 100);
      return `<div class="hud-seg"><div class="hud-seg-fill ${segmentStateClass}" style="width: ${fillPct}%"></div></div>`;
    }).join('');

    return `
      <div class="pillar-cluster ${isExpanded ? 'expanded' : ''}" data-pillar-id="${pillar.id}">
        <button
          type="button"
          class="pillar-cluster-header"
          data-pillar-toggle="${pillar.id}"
          aria-expanded="${isExpanded}"
          title="${pillar.unitHint[currentLang]}"
        >
          <div class="stat-row-main">
            <div class="stat-label-wrap">
              <div class="pillar-title-line">
                <div class="pillar-icon-col">
                  <span class="pillar-icon-plain">${pillarIconHtml}</span>
                  <span class="accordion-chevron">▸</span>
                </div>
                <div class="pillar-title-text">
                  <span class="stat-name"><span class="pillar-num-accent">${pillarNumFormatted} //</span> ${pillar.label[currentLang]}</span>
                  <span class="stat-realworld">${pillarSubTagsHtml}</span>
                </div>
              </div>
            </div>
            <div class="stat-stock-cell">
              <span class="diff-arrow ${valueColorClass}">${indicatorSymbol}</span>
              ${pillarRatingHtml}
            </div>
            <div class="stat-current-cell">
              <span class="stat-opp-val">${oppVal.toFixed(1)}</span>
            </div>
          </div>
          <div class="hud-seg-bar">
            ${segmentsHtml}
            <div class="stat-bar-opp-marker" style="left: calc(${(oppVal * 10).toFixed(1)}%)" title="${opponent.shortTitle}: ${oppVal.toFixed(1)}"></div>
          </div>
        </button>

        <div class="pillar-sub-list">
          ${subRowsHtml}
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Top Identity Card -->
    <div class="forza-header-card">
      <div class="car-model-title">${car.shortTitle}</div>
      <div class="car-year-make">${car.yearMake}</div>
      <div class="forza-badges-row">
        <span class="rarity-badge ${car.rarityClass}">${car.rarityLabel[currentLang]}</span>
        <span class="pi-badge" title="${ui.overallRating}: ${piScore}/10 (${piClassLabel})">
          <span class="pi-class ${piClassCss}">${piBadgeText}</span>
          <span class="pi-score">${piScore}</span>
        </span>
        <span class="drivetrain-badge" title="${car.drivetrain === 'AWD' ? ui.awdTooltip : ui.fwdTooltip}">
          <span>${car.drivetrain}</span>
          ${getDrivetrainSvg(car.drivetrain)}
        </span>
      </div>
    </div>

    <!-- Two-Level 4-Pillar Accordion Stats Table -->
    <div class="forza-stats-card">
      <div class="stats-table-header">
        <div class="stats-header-left">
          <span>${ui.statsHeader}</span>
          <button type="button" class="expand-all-btn" data-action="toggle-all-pillars">
            ${allExpanded ? ui.collapseAll : ui.expandAll}
          </button>
        </div>
        <span>${ui.ratingCol}</span>
        <span>${ui.vsOppCol}</span>
      </div>
      <div class="stats-rows-list">
        ${pillarsHtml}
      </div>
    </div>

    <!-- Bottom Market Price & Overall Rating Summary -->
    <div class="forza-bottom-stack">
      <div class="market-price-strip">
        <span class="msrp-label">${ui.originalMsrp}</span>
        <span class="price-old">${car.originalMsrp[currentLang]}</span>
      </div>
      <div class="forza-purchase-box">
        <span>${ui.estUsedMarket}</span>
        <span><span class="cr-badge">€</span>${car.estUsedPrice}</span>
      </div>
      <div class="forza-secondary-box">
        <span>${ui.overallRating} (${piClassLabel})</span>
        <span>${piScore} / 10</span>
      </div>
    </div>
  `;
}

// Render Remarkable Positive & Negative Traits (up to 7 each) directly under each Car Picture
function renderCarTraitsTray(car, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  const positives = ((car.remarkablePositives && car.remarkablePositives[currentLang]) || []).slice(
    0,
    MAX_TRAITS_PER_GROUP
  );
  const negatives = ((car.notableNegatives && car.notableNegatives[currentLang]) || []).slice(
    0,
    MAX_TRAITS_PER_GROUP
  );

  const positivesHtml =
    positives.length > 0
      ? `<div class="traits-group-row">
          ${positives
            .map((trait) => `<span class="value-tag">${trait}</span>`)
            .join('')}
        </div>`
      : '';

  const negativesHtml =
    negatives.length > 0
      ? `<div class="traits-group-row">
          ${negatives
            .map((trait) => `<span class="value-tag-negative">− ${trait}</span>`)
            .join('')}
        </div>`
      : '';

  container.innerHTML = `${positivesHtml}${negativesHtml}`;
}

// Attach Accordion & Synchronized Scroll Event Listeners inside both Stat Columns
function bindStatColumnEvents() {
  document.querySelectorAll('[data-pillar-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pillarId = btn.getAttribute('data-pillar-toggle');
      if (expandedPillars.has(pillarId)) {
        expandedPillars.delete(pillarId);
      } else {
        expandedPillars.add(pillarId);
      }
      updateStatColumnsOnly();
    });
  });

  document.querySelectorAll('[data-action="toggle-all-pillars"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (expandedPillars.size === STAT_PILLARS.length) {
        expandedPillars.clear();
      } else {
        STAT_PILLARS.forEach((p) => expandedPillars.add(p.id));
      }
      updateStatColumnsOnly();
    });
  });

  // Synchronize scrolling between Left and Right Stats boxes
  const leftList = document.querySelector('#stats-left .stats-rows-list');
  const rightList = document.querySelector('#stats-right .stats-rows-list');

  if (leftList && rightList) {
    leftList.addEventListener('scroll', () => {
      if (isSyncingScroll) return;
      isSyncingScroll = true;
      rightList.scrollTop = leftList.scrollTop;
      requestAnimationFrame(() => {
        isSyncingScroll = false;
      });
    });

    rightList.addEventListener('scroll', () => {
      if (isSyncingScroll) return;
      isSyncingScroll = true;
      leftList.scrollTop = rightList.scrollTop;
      requestAnimationFrame(() => {
        isSyncingScroll = false;
      });
    });
  }

  // Click on sub-stat rows or ⓘ buttons to open Engineering Dossier modal
  document.querySelectorAll('[data-dossier-stat]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const statKey = el.getAttribute('data-dossier-stat');
      const side = el.getAttribute('data-side') || 'left';
      if (statKey) {
        openStatDossier(statKey, side);
      }
    });
  });
}

// Update Stat Columns while preserving synchronized scroll position
function updateStatColumnsOnly() {
  const leftCar = getCarById(selectedLeftId, selectedLeftEngineId);
  const rightCar = getCarById(selectedRightId, selectedRightEngineId);

  const leftList = document.querySelector('#stats-left .stats-rows-list');
  const sharedScrollTop = leftList ? leftList.scrollTop : 0;

  document.getElementById('stats-left').innerHTML = buildForzaStatColumnHtml(
    leftCar,
    rightCar,
    'left'
  );
  document.getElementById('stats-right').innerHTML = buildForzaStatColumnHtml(
    rightCar,
    leftCar,
    'right'
  );

  const newLeftList = document.querySelector('#stats-left .stats-rows-list');
  const newRightList = document.querySelector('#stats-right .stats-rows-list');
  if (newLeftList) newLeftList.scrollTop = sharedScrollTop;
  if (newRightList) newRightList.scrollTop = sharedScrollTop;

  bindStatColumnEvents();
}

function setPopupOpen(btn, menu, isOpen) {
  if (!btn || !menu) return;
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
  menu.classList.toggle('open', isOpen);
  menu.setAttribute('aria-hidden', String(!isOpen));
}

function buildCarSelectOptionsHtml(selectedCarId, selectedEngineId) {
  return CAR_ROSTER.map((baseCar) => {
    const engineId = baseCar.id === selectedCarId ? selectedEngineId : baseCar.defaultEngineId;
    const car = getCarById(baseCar.id, engineId);
    const { piClass, piScore } = calculateOverallIndex(car);
    return `<option value="${car.id}">#${car.number} — ${car.fullName} [${piClass} ${piScore}/10]</option>`;
  }).join('');
}

// Render Top Select Dropdowns
function renderDropdowns() {
  const selectLeft = document.getElementById('select-car-left');
  const selectRight = document.getElementById('select-car-right');

  selectLeft.innerHTML = buildCarSelectOptionsHtml(selectedLeftId, selectedLeftEngineId);
  selectRight.innerHTML = buildCarSelectOptionsHtml(selectedRightId, selectedRightEngineId);

  selectLeft.value = selectedLeftId;
  selectRight.value = selectedRightId;
}

function getEngineCategory(eng) {
  if (eng.fuelType) return eng.fuelType;
  const descriptor = `${eng.id} ${eng.engineBadge} ${(eng.engineSubLabel && eng.engineSubLabel.en) || ''}`;
  if (/hybrid|hsd/i.test(descriptor)) return 'hybrid';
  if (/\b(?:diesel|d-4d|i-dtec|tdi|tdci|hdi)\b/i.test(descriptor)) return 'diesel';
  return 'petrol';
}

function getEngineHp(eng) {
  if (typeof eng.hp === 'number') return eng.hp;
  const match = String(eng.engineBadge || '').match(/(\d+)\s*HP/i);
  return match ? Number(match[1]) : 0;
}

// Render Interactive Engine Selector Button & Dropdown Menu for Left or Right Car
function renderEngineSelector(side, resolvedCar) {
  const ui = t();
  const pillSpan = document.getElementById(side === 'left' ? 'spec-pill-left' : 'spec-pill-right');
  const dropdown = document.getElementById(
    side === 'left' ? 'engine-dropdown-left' : 'engine-dropdown-right'
  );
  const btn = document.getElementById(side === 'left' ? 'engine-btn-left' : 'engine-btn-right');

  if (!pillSpan || !dropdown || !btn) return;

  pillSpan.textContent = resolvedCar.engineBadge;

  const categories = [
    { key: 'petrol', label: ui.engineCategoryPetrol },
    { key: 'diesel', label: ui.engineCategoryDiesel },
    { key: 'hybrid', label: ui.engineCategoryHybrid }
  ];

  const engineGroupsHtml = categories
    .map((cat) => {
      const enginesInCat = resolvedCar.engines
        .filter((eng) => getEngineCategory(eng) === cat.key)
        .sort((a, b) => getEngineHp(a) - getEngineHp(b));

      if (enginesInCat.length === 0) return '';

      const itemsHtml = enginesInCat
        .map((eng) => {
          const candidateCar = getCarById(resolvedCar.id, eng.id);
          const { piBadgeText, piScore, piClassCss } = calculateOverallIndex(candidateCar);
          const isSelected = eng.id === resolvedCar.selectedEngineId;
          const defaultPillHtml = eng.isDefault
            ? `<span class="engine-default-pill">${ui.defaultEngineBadge}</span>`
            : '';

          return `
            <button
              type="button"
              class="engine-option-btn ${isSelected ? 'active' : ''}"
              data-engine-id="${eng.id}"
            >
              <div class="engine-option-main">
                <div class="engine-option-title">
                  <span>${eng.engineBadge}</span>
                  ${defaultPillHtml}
                </div>
                <div class="engine-option-sub">${eng.engineSubLabel[currentLang]}</div>
              </div>
              <span class="roster-class-pill ${piClassCss} engine-option-pi">${piBadgeText} ${piScore}/10</span>
            </button>
          `;
        })
        .join('');

      return `
        <div class="engine-category-group">
          <div class="engine-category-header engine-cat-${cat.key}">
            <span class="engine-category-dot"></span>
            <span>${cat.label}</span>
          </div>
          ${itemsHtml}
        </div>
      `;
    })
    .join('');

  dropdown.innerHTML = `
    <div class="engine-dropdown-header">${ui.selectEngineHeader}</div>
    ${engineGroupsHtml}
  `;

  dropdown.querySelectorAll('[data-engine-id]').forEach((optBtn) => {
    optBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosenEngineId = optBtn.getAttribute('data-engine-id');
      if (side === 'left') {
        selectedLeftEngineId = chosenEngineId;
      } else {
        selectedRightEngineId = chosenEngineId;
      }
      setPopupOpen(btn, dropdown, false);
      updateArena();
    });
  });
}

// Update Left/Right Arrow Disabled States on Bottom Roster Carousel
function updateRosterArrowStates() {
  const rosterStrip = document.getElementById('roster-strip');
  const leftArrow = document.getElementById('roster-arrow-left');
  const rightArrow = document.getElementById('roster-arrow-right');
  if (!rosterStrip || !leftArrow || !rightArrow) return;

  const maxScroll = Math.max(0, rosterStrip.scrollWidth - rosterStrip.clientWidth);
  const atStart = rosterStrip.scrollLeft <= 2;
  const atEnd = rosterStrip.scrollLeft >= maxScroll - 2;

  leftArrow.classList.toggle('at-edge', atStart);
  rightArrow.classList.toggle('at-edge', atEnd);
}

// Render Bottom Car Selection Roster Strip
function renderFighterRoster() {
  const ui = t();
  const rosterStrip = document.getElementById('roster-strip');
  const previousScrollLeft = rosterStrip ? rosterStrip.scrollLeft : 0;

  rosterStrip.innerHTML = CAR_ROSTER.map((baseCar) => {
    const isP1 = baseCar.id === selectedLeftId;
    const isP2 = baseCar.id === selectedRightId;
    const activeEngineId = isP1
      ? selectedLeftEngineId
      : isP2
      ? selectedRightEngineId
      : baseCar.defaultEngineId;
    const car = getCarById(baseCar.id, activeEngineId);
    const { piBadgeText, piScore, piClassCss } = calculateOverallIndex(car);

    let tileStateClass = '';
    if (isP1 && isP2) tileStateClass = 'selected-both';
    else if (isP1) tileStateClass = 'selected-p1';
    else if (isP2) tileStateClass = 'selected-p2';

    return `
      <div class="fighter-tile ${tileStateClass}" data-car-id="${car.id}">
        <img class="fighter-thumb" src="${car.image}" alt="${car.fullName}" draggable="false" />
        <div class="fighter-info">
          <div class="fighter-number">
            <span>${ui.carLabel} #${car.number}</span>
            <span class="roster-class-pill ${piClassCss}">${piBadgeText} ${piScore}/10</span>
          </div>
          <div class="fighter-name">${car.fullName}</div>
          <div class="fighter-sub">${car.perkLabel[currentLang]}</div>
        </div>
        <div class="fighter-selection-badges">
          ${isP1 ? '<span class="mini-p-badge p1-badge">P1</span>' : ''}
          ${isP2 ? '<span class="mini-p-badge p2-badge">P2</span>' : ''}
        </div>
      </div>
    `;
  }).join('');

  rosterStrip.scrollLeft = previousScrollLeft;
  requestAnimationFrame(updateRosterArrowStates);

  // Attach click handlers to car tiles (selecting a car resets to its default/most popular engine)
  rosterStrip.querySelectorAll('.fighter-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      if (rosterDragMoved) return;
      const chosenId = tile.getAttribute('data-car-id');
      const baseCar = getBaseCarById(chosenId);
      if (activeRosterTarget === 'p1') {
        selectedLeftId = chosenId;
        selectedLeftEngineId = baseCar.defaultEngineId;
      } else {
        selectedRightId = chosenId;
        selectedRightEngineId = baseCar.defaultEngineId;
      }
      updateArena();
    });
  });
}

// Render Verdict Banner at bottom of center arena
function renderVerdictBanner(leftCar, rightCar) {
  const ui = t();
  const verdictBar = document.getElementById('duel-verdict-bar');
  let leftPillarWins = 0;
  let rightPillarWins = 0;

  STAT_PILLARS.forEach((pillar) => {
    const l = getPillarScore(leftCar, pillar);
    const r = getPillarScore(rightCar, pillar);
    if (l > r) leftPillarWins++;
    else if (r > l) rightPillarWins++;
  });

  const leftPi = calculateOverallIndex(leftCar);
  const rightPi = calculateOverallIndex(rightCar);
  const piDiff = Math.abs(leftPi.piNum - rightPi.piNum).toFixed(1);

  let headline = '';
  if (leftCar.id === rightCar.id && leftCar.selectedEngineId === rightCar.selectedEngineId) {
    headline = `${ui.mirrorMatch}: <strong>${leftCar.fullName}</strong> (${leftPi.piClassLabel} • ${leftPi.piScore}/10)`;
  } else if (leftPi.piNum > rightPi.piNum) {
    headline = `${ui.overallRatingEdge}: <strong>${leftCar.shortTitle}</strong> (${leftPi.piScore}/10 vs ${rightPi.piScore}/10 • +${piDiff})`;
  } else if (rightPi.piNum > leftPi.piNum) {
    headline = `${ui.overallRatingEdge}: <strong>${rightCar.shortTitle}</strong> (${rightPi.piScore}/10 vs ${leftPi.piScore}/10 • +${piDiff})`;
  } else {
    headline = `${ui.deadHeat} (${leftPi.piScore}/10)`;
  }

  verdictBar.innerHTML = `
    <span class="verdict-score-pill verdict-p1">${ui.p1Pillars}: ${leftPillarWins}/4</span>
    <span class="verdict-summary">${headline}</span>
    <span class="verdict-score-pill verdict-p2">${ui.p2Pillars}: ${rightPillarWins}/4</span>
  `;
}

// Update Static HUD & Dock Text for Current Language
function applyStaticTranslations() {
  const ui = t();
  document.documentElement.lang = currentLang;

  document.getElementById('label-contender-1').textContent = ui.contender1;
  document.getElementById('label-opponent-2').textContent = ui.opponentP2;
  document.getElementById('brand-subtitle').textContent = ui.brandSubtitle;

  document.getElementById('theme-btn-label').textContent = ui.themeBtn;
  document.getElementById('theme-menu-header').textContent = ui.selectTheme;
  document.getElementById('theme-opt-dark').textContent = ui.themeDark;
  document.getElementById('theme-opt-light').textContent = ui.themeLight;
  document.getElementById('theme-opt-dark-soft').textContent = ui.themeDarkSoft;
  document.getElementById('theme-opt-light-soft').textContent = ui.themeLightSoft;

  document.getElementById('lang-menu-header').textContent = ui.langHeader;
  document.getElementById('current-lang-code').textContent = ui.code;
  document.getElementById('current-lang-flag').innerHTML = FLAG_SVGS[currentLang];

  document.getElementById('tag-car-1').textContent = ui.car1Tag;
  document.getElementById('tag-opponent').textContent = ui.opponentTag;
  document.getElementById('vs-swap-label').textContent = ui.swapLabel;
  document.getElementById('expand-label-left').textContent = ui.expandFullCar;
  document.getElementById('expand-label-right').textContent = ui.expandFullCar;
  document.getElementById('lightbox-close-btn').textContent = ui.closeBtn;

  document.getElementById('dock-title-label').textContent = ui.selectYourCar;
  document.getElementById('target-p1-btn').innerHTML = ui.pickingP1;
  document.getElementById('target-p2-btn').innerHTML = ui.pickingP2;
  document.getElementById('index-classes-btn-label').textContent = ui.indexClassesBtn;
  document.getElementById('index-classes-popover-title').textContent = ui.indexClassesTitle;

  const collapseBtn = document.getElementById('dock-collapse-btn');
  if (collapseBtn) {
    collapseBtn.title = isDockCollapsed ? ui.showRosterTooltip : ui.hideRosterTooltip;
  }
}

let lightboxGallery = [];
let lightboxIndex = 1;
let lightboxCarName = '';

const CAR_AVAILABLE_ANGLES = {
  'toyota-auris-2014': ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  'honda-civic-2014': ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  'honda-crv-2010': ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  'peugeot-308-gti-2019': ['front', 'frontSide', 'side', 'sideRear', 'rear'],
  'ford-mondeo-2012': ['front', 'frontSide', 'side', 'rear']
};

const CAR_MIRRORED_ANGLES = {
  'toyota-auris-2014': { sideRear: true }
};

function getCarGallery(car) {
  const ui = t();
  const basePath = car.image.replace(/\.png$/i, '');
  const mirroredMap = CAR_MIRRORED_ANGLES[car.id] || {};
  const allAngles = {
    front: { src: `${basePath}-front.png`, label: ui.angleFront, mirrored: Boolean(mirroredMap.front) },
    frontSide: { src: car.image, label: ui.angleFrontSide, mirrored: Boolean(mirroredMap.frontSide) },
    side: { src: `${basePath}-side.png`, label: ui.angleSide, mirrored: Boolean(mirroredMap.side) },
    sideRear: { src: `${basePath}-side-rear.png`, label: ui.angleSideRear, mirrored: Boolean(mirroredMap.sideRear) },
    rear: { src: `${basePath}-rear.png`, label: ui.angleRear, mirrored: Boolean(mirroredMap.rear) }
  };
  const keys = CAR_AVAILABLE_ANGLES[car.id] || ['frontSide'];
  return keys.map((k) => allAngles[k]);
}

function renderLightboxSlide() {
  if (!lightboxGallery.length) return;
  const item = lightboxGallery[lightboxIndex];
  const img = document.getElementById('lightbox-img');
  const angleLabel = document.getElementById('lightbox-angle-label');
  const dotsWrap = document.getElementById('lightbox-dots');

  if (img) {
    img.src = item.src;
    img.alt = `${lightboxCarName} — ${item.label}`;
    img.classList.toggle('mirrored-car', Boolean(item.mirrored));
  }
  if (angleLabel) {
    angleLabel.textContent = `${item.label} (${lightboxIndex + 1}/${lightboxGallery.length})`;
  }
  if (dotsWrap) {
    dotsWrap.innerHTML = lightboxGallery
      .map(
        (g, idx) =>
          `<button type="button" class="lightbox-dot-btn ${idx === lightboxIndex ? 'active' : ''}" data-gallery-idx="${idx}" aria-label="${g.label}"></button>`
      )
      .join('');
    dotsWrap.querySelectorAll('[data-gallery-idx]').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxIndex = Number(dot.getAttribute('data-gallery-idx'));
        renderLightboxSlide();
      });
    });
  }
}

function stepLightbox(delta) {
  if (!lightboxGallery.length) return;
  lightboxIndex = (lightboxIndex + delta + lightboxGallery.length) % lightboxGallery.length;
  renderLightboxSlide();
}

// Open Full-Picture Car Lightbox
function openCarLightbox(side) {
  const ui = t();
  const car =
    side === 'left'
      ? getCarById(selectedLeftId, selectedLeftEngineId)
      : getCarById(selectedRightId, selectedRightEngineId);
  const { piClassLabel, piScore } = calculateOverallIndex(car);
  const lightbox = document.getElementById('car-lightbox');
  const badge = document.getElementById('lightbox-badge');
  const title = document.getElementById('lightbox-title');
  const spec = document.getElementById('lightbox-spec');

  badge.textContent = side === 'left' ? ui.car1Tag : ui.opponentP2;
  badge.className = `lightbox-badge ${side === 'left' ? 'p1-badge' : 'p2-badge'}`;
  title.textContent = car.fullName;
  spec.textContent = `${piClassLabel} (${piScore}/10) • ${car.engineBadge} • ${car.perkLabel[currentLang]}`;

  lightboxCarName = car.fullName;
  lightboxGallery = getCarGallery(car);
  lightboxIndex = 1; // Default to Front-Side (same as main stage)
  renderLightboxSlide();

  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeCarLightbox() {
  const lightbox = document.getElementById('car-lightbox');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

// Open Engineering Sub-Stat Dossier Modal (Option 1)
function openStatDossier(statKey, side) {
  const ui = t();
  const modal = document.getElementById('stat-dossier-modal');
  const body = document.getElementById('stat-dossier-body');
  const categoryLabel = document.getElementById('dossier-category-label');
  const statTitle = document.getElementById('dossier-stat-title');
  if (!modal || !body) return;

  const currentCar =
    side === 'left'
      ? getCarById(selectedLeftId, selectedLeftEngineId)
      : getCarById(selectedRightId, selectedRightEngineId);
  const oppCar =
    side === 'left'
      ? getCarById(selectedRightId, selectedRightEngineId)
      : getCarById(selectedLeftId, selectedLeftEngineId);

  // Find pillar and subRating definition
  let foundPillar = null;
  let foundSub = null;
  for (const pillar of STAT_PILLARS) {
    for (const sub of pillar.subRatings) {
      if (sub.key === statKey) {
        foundPillar = pillar;
        foundSub = sub;
        break;
      }
    }
    if (foundSub) break;
  }

  if (!foundSub) return;

  categoryLabel.textContent = `${foundPillar.number}. ${foundPillar.label[currentLang].toUpperCase()}`;
  statTitle.textContent = foundSub.label[currentLang].toUpperCase();

  const subObj = (currentCar.subStats && currentCar.subStats[statKey]) || { score: 0 };
  const oppSubObj = (oppCar.subStats && oppCar.subStats[statKey]) || { score: 0 };
  const dossier = (subObj.dossier && subObj.dossier[currentLang]) || null;
  const oppDossier = (oppSubObj.dossier && oppSubObj.dossier[currentLang]) || null;

  const isSPlus = subObj.score >= 9.6;
  const scoreDisplayHtml = isSPlus
    ? `<span class="stat-stock-val score-s-plus" title="S+ (9.6–10)">✦ ${subObj.score.toFixed(1)}</span>`
    : `<span class="stat-stock-val">${subObj.score.toFixed(1)}</span>`;

  const strengthsListHtml =
    dossier && dossier.strengths && dossier.strengths.length > 0
      ? dossier.strengths
          .map(
            (str) => `
        <li class="dossier-bullet-item strength">
          <span class="bullet-icon">✔</span>
          <span>${str}</span>
        </li>
      `
          )
          .join('')
      : `<li class="dossier-bullet-item strength"><span class="bullet-icon">✔</span><span>${ui.dossierDefaultStrength}</span></li>`;

  const watchoutsListHtml =
    dossier && dossier.watchouts && dossier.watchouts.length > 0
      ? dossier.watchouts
          .map(
            (w) => `
        <li class="dossier-bullet-item watchout">
          <span class="bullet-icon">⚠</span>
          <span>${w}</span>
        </li>
      `
          )
          .join('')
      : `<li class="dossier-bullet-item watchout"><span class="bullet-icon">⚠</span><span>${ui.dossierDefaultWatchout}</span></li>`;

  const headlineHtml =
    dossier && dossier.headline
      ? `<div class="dossier-headline-box">${dossier.headline}</div>`
      : '';

  // Opponent Contrast takeaway
  const diff = Number((subObj.score - oppSubObj.score).toFixed(1));
  let contrastSummary = '';
  if (currentLang === 'de') {
    if (diff > 0) {
      contrastSummary = `<strong>+${diff} Punkte Vorteil</strong> gegenüber <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}). Überlegene konstruktive Haltbarkeit und deutlich geringeres Ausfallrisiko bei hoher Laufleistung.`;
    } else if (diff < 0) {
      contrastSummary = `<strong>${diff} Punkte im Vergleich</strong>: <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) bietet konstruktiv einfachere Baugruppen oder geringere Verschleißanfälligkeit.`;
    } else {
      contrastSummary = `<strong>Gleichstand (${subObj.score.toFixed(1)})</strong>: Beide Antriebe weisen in dieser Kategorie eine vergleichbare Haltbarkeit auf.`;
    }
  } else if (currentLang === 'ru') {
    if (diff > 0) {
      contrastSummary = `<strong>Преимущество на +${diff} балла</strong> над <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}). Выдающийся запас прочности агрегатов и минимальный риск отказов на больших пробегах.`;
    } else if (diff < 0) {
      contrastSummary = `<strong>Разница ${diff} балла</strong>: У <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) конструкция проще или менее требовательна к обслуживанию.`;
    } else {
      contrastSummary = `<strong>Паритет (${subObj.score.toFixed(1)})</strong>: Оба силовых агрегата демонстрируют сопоставимую конструктивную надёжность.`;
    }
  } else {
    if (diff > 0) {
      contrastSummary = `<strong>+${diff} Point Advantage</strong> over <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}). Superior long-term component durability and significantly lower mechanical failure risk at high mileage.`;
    } else if (diff < 0) {
      contrastSummary = `<strong>${diff} Points vs Opponent</strong>: <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) offers simpler architecture or less demanding service requirements.`;
    } else {
      contrastSummary = `<strong>Dead Heat (${subObj.score.toFixed(1)})</strong>: Both powertrains demonstrate comparable engineering durability in this category.`;
    }
  }

  body.innerHTML = `
    <!-- Hero Car & Rating Strip -->
    <div class="dossier-car-hero">
      <div class="dossier-car-info">
        <span class="mini-p-badge ${side === 'left' ? 'p1-badge' : 'p2-badge'}">${side === 'left' ? 'P1' : 'P2'}</span>
        <div class="dossier-car-text">
          <div class="dossier-car-name">${currentCar.fullName}</div>
          <div class="dossier-engine-badge">${currentCar.engineBadge}</div>
        </div>
      </div>
      <div class="dossier-rating-block">
        <div class="dossier-score-chip ${isSPlus ? 'is-s-plus' : ''}">
          ${scoreDisplayHtml} <span class="dossier-score-denom">/ 10</span>
        </div>
      </div>
    </div>

    ${headlineHtml}

    <!-- Core Strengths & Known Watchouts Grid -->
    <div class="dossier-sections-grid">
      <div class="dossier-card">
        <div class="dossier-card-title strengths-title">
          <span>⚙</span>
          <span>${ui.dossierStrengths}</span>
        </div>
        <ul class="dossier-bullets-list">
          ${strengthsListHtml}
        </ul>
      </div>

      <div class="dossier-card">
        <div class="dossier-card-title watchouts-title">
          <span>🔧</span>
          <span>${ui.dossierWatchouts}</span>
        </div>
        <ul class="dossier-bullets-list">
          ${watchoutsListHtml}
        </ul>
      </div>
    </div>

    <!-- Head-to-Head Contrast with Active Opponent -->
    <div class="dossier-contrast-card">
      <div class="dossier-contrast-header">
        <div class="dossier-card-title contrast-title">
          <span>⇄</span>
          <span>${ui.dossierOpponentContrast}</span>
        </div>
        <div class="dossier-contrast-car-name">
          vs ${oppCar.fullName} [${oppSubObj.score.toFixed(1)}/10]
        </div>
      </div>
      <div class="dossier-contrast-body">
        ${contrastSummary}
        ${
          oppDossier && oppDossier.headline
            ? `<div class="dossier-contrast-note">"${oppDossier.headline}"</div>`
            : ''
        }
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeStatDossier() {
  const modal = document.getElementById('stat-dossier-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// Synchronize the height of both car traits trays so the car with the most lines below it
// acts as the "leading one", and the car with fewer lines acts as the "adapting one",
// capped at ~4-5 lines (142px, Screenshot 2 size) when the bottom dock is open, or up to 240px
// when the bottom dock is hidden (with the car pictures aligned to the top of "Stats (4 Pillars)").
function syncCarViewportAlignment() {
  const traitsLeft = document.getElementById('traits-left');
  const traitsRight = document.getElementById('traits-right');
  const viewportLeft = document.querySelector('.viewport-left');
  const viewportRight = document.querySelector('.viewport-right');
  if (!traitsLeft || !traitsRight) return;

  if (isDockCollapsed && viewportLeft && viewportRight) {
    const stage = document.querySelector('.duel-stage');
    const statsCard = document.querySelector('#stats-left .forza-stats-card');
    if (stage && statsCard) {
      const stageRect = stage.getBoundingClientRect();
      const statsRect = statsCard.getBoundingClientRect();
      const alignedTop = Math.max(52, Math.round(statsRect.top - stageRect.top));
      viewportLeft.style.paddingTop = `${alignedTop}px`;
      viewportRight.style.paddingTop = `${alignedTop}px`;
    }
  } else if (viewportLeft && viewportRight) {
    viewportLeft.style.paddingTop = '';
    viewportRight.style.paddingTop = '';
  }

  let maxTraitsHeight = 142;
  if (isDockCollapsed && viewportLeft) {
    const vpRect = viewportLeft.getBoundingClientRect();
    const imgWrap = viewportLeft.querySelector('.car-image-wrapper');
    const imgBottom = imgWrap ? imgWrap.getBoundingClientRect().bottom : vpRect.top;
    // Use all freed-up space below the car image down to the bottom verdict bar
    const availableBelowImage = Math.floor(vpRect.bottom - 78 - imgBottom);
    maxTraitsHeight = Math.max(240, availableBelowImage);
  }

  // Measure natural height with overflow hidden so a phantom scrollbar never steals width
  traitsLeft.style.overflowY = 'hidden';
  traitsRight.style.overflowY = 'hidden';
  traitsLeft.style.height = 'auto';
  traitsRight.style.height = 'auto';
  traitsLeft.style.minHeight = '0px';
  traitsRight.style.minHeight = '0px';
  traitsLeft.style.maxHeight = `${maxTraitsHeight}px`;
  traitsRight.style.maxHeight = `${maxTraitsHeight}px`;

  const leftScroll = traitsLeft.scrollHeight;
  const rightScroll = traitsRight.scrollHeight;
  const naturalLeadingHeight = Math.max(leftScroll, rightScroll);
  const targetHeight = Math.min(naturalLeadingHeight, maxTraitsHeight);

  traitsLeft.style.height = leftScroll > maxTraitsHeight ? `${targetHeight}px` : 'auto';
  traitsRight.style.height = rightScroll > maxTraitsHeight ? `${targetHeight}px` : 'auto';
  traitsLeft.style.minHeight = `${targetHeight}px`;
  traitsRight.style.minHeight = `${targetHeight}px`;
  traitsLeft.style.overflowY = leftScroll > maxTraitsHeight ? 'auto' : 'visible';
  traitsRight.style.overflowY = rightScroll > maxTraitsHeight ? 'auto' : 'visible';
}

// Master Update Function
function updateArena() {
  const leftCar = getCarById(selectedLeftId, selectedLeftEngineId);
  const rightCar = getCarById(selectedRightId, selectedRightEngineId);

  applyStaticTranslations();
  renderDropdowns();

  // Render Left and Right Forza Stat Columns
  updateStatColumnsOnly();

  // Update Center Split-Screen Images & Labels (always face each other toward the center VS line)
  const imgLeft = document.getElementById('img-left');
  const imgRight = document.getElementById('img-right');
  imgLeft.src = leftCar.image;
  imgLeft.alt = leftCar.fullName;
  imgLeft.classList.toggle('mirrored-car', (leftCar.imageFacing || 'right') === 'left');
  imgRight.src = rightCar.image;
  imgRight.alt = rightCar.fullName;
  imgRight.classList.toggle('mirrored-car', (rightCar.imageFacing || 'right') === 'right');

  document.getElementById('watermark-left').textContent = `#${leftCar.number}`;
  document.getElementById('watermark-right').textContent = `#${rightCar.number}`;

  // Render Interactive Engine Selector Buttons & Dropdown Menus
  renderEngineSelector('left', leftCar);
  renderEngineSelector('right', rightCar);

  // Render Remarkable Positive & Negative Traits directly under each Car Picture
  renderCarTraitsTray(leftCar, 'traits-left');
  renderCarTraitsTray(rightCar, 'traits-right');
  syncCarViewportAlignment();

  // Render Verdict Banner & Bottom Roster
  renderVerdictBanner(leftCar, rightCar);
  renderFighterRoster();
}

// Initialize Interactive Engine Selector Menus on Both Sides
function initEngineSelectorMenus() {
  const leftWrapper = document.getElementById('engine-wrapper-left');
  const leftBtn = document.getElementById('engine-btn-left');
  const leftDropdown = document.getElementById('engine-dropdown-left');

  const rightWrapper = document.getElementById('engine-wrapper-right');
  const rightBtn = document.getElementById('engine-btn-right');
  const rightDropdown = document.getElementById('engine-dropdown-right');

  leftBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !leftDropdown.classList.contains('open');
    setPopupOpen(leftBtn, leftDropdown, open);
    setPopupOpen(rightBtn, rightDropdown, false);
  });

  rightBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !rightDropdown.classList.contains('open');
    setPopupOpen(rightBtn, rightDropdown, open);
    setPopupOpen(leftBtn, leftDropdown, false);
  });

  document.addEventListener('click', (e) => {
    if (!leftWrapper.contains(e.target)) {
      setPopupOpen(leftBtn, leftDropdown, false);
    }
    if (!rightWrapper.contains(e.target)) {
      setPopupOpen(rightBtn, rightDropdown, false);
    }
  });
}

// Initialize Theme & Language Menus in Top HUD
function initHudUtilityMenus() {
  // Populate static flag icons inside the language dropdown
  document.querySelectorAll('[data-flag-render]').forEach((el) => {
    const code = el.getAttribute('data-flag-render');
    if (FLAG_SVGS[code]) {
      el.innerHTML = FLAG_SVGS[code];
    }
  });

  const themeWrapper = document.getElementById('theme-menu-wrapper');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeDropdown = document.getElementById('theme-dropdown');

  const langWrapper = document.getElementById('lang-menu-wrapper');
  const langBtn = document.getElementById('lang-toggle-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  themeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !themeDropdown.classList.contains('open');
    setPopupOpen(themeBtn, themeDropdown, open);
    setPopupOpen(langBtn, langDropdown, false);
  });

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !langDropdown.classList.contains('open');
    setPopupOpen(langBtn, langDropdown, open);
    setPopupOpen(themeBtn, themeDropdown, false);
  });

  // Theme option clicks
  themeDropdown.querySelectorAll('[data-theme-choice]').forEach((item) => {
    item.addEventListener('click', () => {
      currentTheme = item.getAttribute('data-theme-choice');
      document.documentElement.setAttribute('data-theme', currentTheme);

      themeDropdown.querySelectorAll('[data-theme-choice]').forEach((btn) => {
        btn.classList.toggle('active', btn === item);
      });

      setPopupOpen(themeBtn, themeDropdown, false);
    });
  });

  // Language option clicks
  langDropdown.querySelectorAll('[data-lang-choice]').forEach((item) => {
    item.addEventListener('click', () => {
      currentLang = item.getAttribute('data-lang-choice');

      langDropdown.querySelectorAll('[data-lang-choice]').forEach((btn) => {
        btn.classList.toggle('active', btn === item);
      });

      setPopupOpen(langBtn, langDropdown, false);
      updateArena();
    });
  });

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!themeWrapper.contains(e.target)) {
      setPopupOpen(themeBtn, themeDropdown, false);
    }
    if (!langWrapper.contains(e.target)) {
      setPopupOpen(langBtn, langDropdown, false);
    }
  });
}

// Initialize Clickable Index Classes Popover Menu
function initClassIndexMenu() {
  const toggleBtn = document.getElementById('class-menu-toggle-btn');
  const popover = document.getElementById('class-menu-popover');
  const closeBtn = document.getElementById('class-popover-close');
  const wrapper = document.getElementById('class-menu-wrapper');

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isCurrentlyOpen = popover.classList.contains('open');
    setPopupOpen(toggleBtn, popover, !isCurrentlyOpen);
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setPopupOpen(toggleBtn, popover, false);
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      setPopupOpen(toggleBtn, popover, false);
    }
  });
}

// Initialize Side-Scrollable Bottom Roster Carousel (Click-and-Drag + Left/Right Arrow Buttons + Wheel)
function initRosterCarousel() {
  const rosterStrip = document.getElementById('roster-strip');
  const leftArrow = document.getElementById('roster-arrow-left');
  const rightArrow = document.getElementById('roster-arrow-right');
  if (!rosterStrip || !leftArrow || !rightArrow) return;

  let isPointerDown = false;
  let startX = 0;
  let startScrollLeft = 0;

  function getScrollStep() {
    const firstTile = rosterStrip.querySelector('.fighter-tile');
    return firstTile ? firstTile.offsetWidth + 14 : 340;
  }

  leftArrow.addEventListener('click', () => {
    rosterStrip.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    rosterStrip.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  });

  rosterStrip.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isPointerDown = true;
    rosterDragMoved = false;
    startX = e.pageX;
    startScrollLeft = rosterStrip.scrollLeft;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPointerDown) return;
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 5) {
      rosterDragMoved = true;
      rosterStrip.classList.add('is-dragging');
    }
    if (rosterDragMoved) {
      e.preventDefault();
      rosterStrip.scrollLeft = startScrollLeft - dx;
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isPointerDown) return;
    isPointerDown = false;
    rosterStrip.classList.remove('is-dragging');
    if (rosterDragMoved) {
      setTimeout(() => {
        rosterDragMoved = false;
      }, 0);
    }
  });

  // Allow mouse wheel over the bottom roster to scroll horizontally
  rosterStrip.addEventListener(
    'wheel',
    (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        rosterStrip.scrollLeft += e.deltaY;
      }
    },
    { passive: false }
  );

  rosterStrip.addEventListener('scroll', updateRosterArrowStates);
  window.addEventListener('resize', updateRosterArrowStates);
}

// Initialize Collapse / Expand Toggle Button on Top Edge of Bottom "SELECT YOUR CAR" Dock
function initDockCollapseToggle() {
  const dock = document.getElementById('fighter-dock');
  const collapseBtn = document.getElementById('dock-collapse-btn');
  const classPopover = document.getElementById('class-menu-popover');
  const classToggleBtn = document.getElementById('class-menu-toggle-btn');
  if (!dock || !collapseBtn) return;

  collapseBtn.addEventListener('click', () => {
    isDockCollapsed = !isDockCollapsed;
    dock.classList.toggle('collapsed', isDockCollapsed);
    document.body.classList.toggle('dock-is-collapsed', isDockCollapsed);
    collapseBtn.setAttribute('aria-expanded', String(!isDockCollapsed));
    collapseBtn.title = isDockCollapsed ? t().showRosterTooltip : t().hideRosterTooltip;

    if (isDockCollapsed && classPopover && classToggleBtn) {
      setPopupOpen(classToggleBtn, classPopover, false);
    }

    requestAnimationFrame(() => {
      syncCarViewportAlignment();
      updateRosterArrowStates();
    });
    setTimeout(syncCarViewportAlignment, 220);
  });
}

// Initialize Event Listeners
function initCarDuel() {
  initHudUtilityMenus();
  initEngineSelectorMenus();
  initClassIndexMenu();
  initRosterCarousel();
  initDockCollapseToggle();

  document.getElementById('select-car-left').addEventListener('change', (e) => {
    selectedLeftId = e.target.value;
    selectedLeftEngineId = getBaseCarById(selectedLeftId).defaultEngineId;
    updateArena();
  });

  document.getElementById('select-car-right').addEventListener('change', (e) => {
    selectedRightId = e.target.value;
    selectedRightEngineId = getBaseCarById(selectedRightId).defaultEngineId;
    updateArena();
  });

  // Swap button in center VS medallion (swaps both cars and their active engines)
  document.getElementById('swap-cars-btn').addEventListener('click', () => {
    const tempCar = selectedLeftId;
    selectedLeftId = selectedRightId;
    selectedRightId = tempCar;

    const tempEng = selectedLeftEngineId;
    selectedLeftEngineId = selectedRightEngineId;
    selectedRightEngineId = tempEng;

    updateArena();
  });

  // Expand full car picture buttons & image wrappers
  document.querySelectorAll('.car-image-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('click', () => {
      const side = wrapper.getAttribute('data-side');
      openCarLightbox(side);
    });
  });

  document.getElementById('lightbox-close-btn').addEventListener('click', closeCarLightbox);
  document.getElementById('lightbox-backdrop').addEventListener('click', closeCarLightbox);
  document.getElementById('lightbox-prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    stepLightbox(-1);
  });
  document.getElementById('lightbox-next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    stepLightbox(1);
  });

  // Engineering Stat Dossier Modal Close Handlers (Option 1)
  const dossierCloseBtn = document.getElementById('dossier-close-btn');
  const dossierBackdrop = document.getElementById('stat-dossier-backdrop');
  if (dossierCloseBtn) dossierCloseBtn.addEventListener('click', closeStatDossier);
  if (dossierBackdrop) dossierBackdrop.addEventListener('click', closeStatDossier);

  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('car-lightbox');
    if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepLightbox(-1);
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepLightbox(1);
        return;
      }
    }
    if (e.key === 'Escape') {
      closeCarLightbox();
      closeStatDossier();
      setPopupOpen(
        document.getElementById('engine-btn-left'),
        document.getElementById('engine-dropdown-left'),
        false
      );
      setPopupOpen(
        document.getElementById('engine-btn-right'),
        document.getElementById('engine-dropdown-right'),
        false
      );
      setPopupOpen(
        document.getElementById('theme-toggle-btn'),
        document.getElementById('theme-dropdown'),
        false
      );
      setPopupOpen(
        document.getElementById('lang-toggle-btn'),
        document.getElementById('lang-dropdown'),
        false
      );
      setPopupOpen(
        document.getElementById('class-menu-toggle-btn'),
        document.getElementById('class-menu-popover'),
        false
      );
    }
  });

  // Car roster target slot buttons (P1 vs P2)
  const btnP1 = document.getElementById('target-p1-btn');
  const btnP2 = document.getElementById('target-p2-btn');

  btnP1.addEventListener('click', () => {
    activeRosterTarget = 'p1';
    btnP1.className = 'slot-btn active-p1';
    btnP2.className = 'slot-btn';
  });

  btnP2.addEventListener('click', () => {
    activeRosterTarget = 'p2';
    btnP1.className = 'slot-btn';
    btnP2.className = 'slot-btn active-p2';
  });

  window.addEventListener('resize', syncCarViewportAlignment);

  updateArena();
}

document.addEventListener('DOMContentLoaded', initCarDuel);
