// ============================================================================
// CAR DUEL — Two-Level 5-Pillar Head-to-Head Car Comparison System
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
    contender1: 'CONTENDER',
    opponentP2: 'OPPONENT',
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
    statsHeader: 'Stats (5 Pillars)',
    expandAll: '+ Expand All',
    collapseAll: '− Collapse All',
    ratingCol: 'Rating',
    vsOppCol: 'Opp',
    originalMsrp: 'Original MSRP',
    estUsedMarket: 'Est. Used Market',
    overallRating: 'Overall Rating',
    classSuffix: '-Class',
    indexClassesBtn: 'INDEX',
    indexClassesTitle: 'INDEX CLASSES',
    weightMenuBtn: 'WEIGHTS',
    weightPopoverTitle: 'PRIORITY EQUALIZER',
    weightResetBtn: 'RESET',
    weightDefaultLabel: 'Default',
    weightHint: 'Adjust pillar priorities',
    fwdTooltip: 'Front-Wheel Drive',
    rwdTooltip: 'Rear-Wheel Drive',
    awdTooltip: 'All-Wheel Drive (Real Time 4WD)',
    selectEngineHeader: 'SELECT ENGINE CONFIGURATION',
    engineCategoryPetrol: 'Petrol',
    engineCategoryDiesel: 'Diesel',
    engineCategoryHybrid: 'Hybrid',
    defaultEngineBadge: 'DEFAULT',
    selectCarHeader: 'SELECT VEHICLE BY TYPE',
    carSortUnsorted: 'UNSORTED',
    carTypeSubcompact: 'Subcompact',
    carTypeHatchback: 'Hatchback',
    carTypeHotHatch: 'Hot-Hatch',
    carTypeSedan: 'Sedan',
    carTypeSuv: 'SUV',
    dossierStrengths: 'Core Engineering Strengths',
    dossierWatchouts: 'Maintenance & Known Watch-Outs',
    dossierBeforeYouBuy: 'Before You Buy:',
    dossierHighMileage: 'Service, Repair & Cost Roadmap (0 – 250,000 km)',
    dossierIfIgnored: 'If ignored:',
    dossierTierYellow: 'Routine',
    dossierTierOrange: 'Watch-Out',
    dossierTierRed: 'Critical',
    dossierShowRoadmap: 'Show Roadmap ▾',
    dossierHideRoadmap: 'Hide Roadmap ▴',
    dossierOpponentContrast: 'Head-to-Head Opponent Contrast',
    dossierInspectBtn: 'View Powertrain Durability Dossier',
    dossierDefaultStrength: 'Standard factory component reliability.',
    dossierDefaultWatchout: 'Standard scheduled maintenance intervals required.',
    angleFront: 'Front',
    angleFrontSide: 'Front-Side',
    angleSide: 'Side',
    angleSideRear: 'Side-Rear',
    angleRear: 'Rear',
    chooseCarPlaceholder: 'Select a Car...',
    smashTitle: 'CHOOSE YOUR CONTENDERS',
    smashPickingHint: 'Click a car below to assign',
    smashReadyHint: 'Both contenders locked in!',
    smashClearSlot: 'Clear',
    backToGridBtn: 'CAR SELECTION MENU',
    priceTitle: 'MARKET & DEPRECIATION',
    priceMsrpLabel: 'Original MSRP',
    priceCurrentLabel: 'Current Value',
    priceDepTotalLabel: 'Total Depreciation',
    priceRetainedLabel: 'Value Retained',
    priceAnnualLabel: 'Avg. Loss / Year',
    priceOutlookLabel: 'Value Expectation',
    outlookFloor: 'Bottomed Out • Minimal Further Drop',
    outlookStrong: 'Strong Resale • High Demand',
    outlookEnthusiast: 'Enthusiast Icon • Rising / Firm',
    outlookSteady: 'Steady • Predictable Curve'
  },
  de: {
    code: 'DE',
    contender1: 'KANDIDAT',
    opponentP2: 'GEGNER',
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
    statsHeader: 'Werte (5 Säulen)',
    expandAll: '+ Alle öffnen',
    collapseAll: '− Alle schließen',
    ratingCol: 'Wertung',
    vsOppCol: 'Geg.',
    originalMsrp: 'Neupreis (UVP)',
    estUsedMarket: 'Gebrauchtmarkt (ca.)',
    overallRating: 'Gesamtwertung',
    classSuffix: '-Klasse',
    indexClassesBtn: 'INDEX',
    indexClassesTitle: 'INDEX-KLASSEN',
    weightMenuBtn: 'GEWICHTUNG',
    weightPopoverTitle: 'PRIORITÄTEN-EQUALIZER',
    weightResetBtn: 'RESET',
    weightDefaultLabel: 'Standard',
    weightHint: 'Kategorie-Prioritäten anpassen',
    fwdTooltip: 'Frontantrieb',
    rwdTooltip: 'Hinterradantrieb',
    awdTooltip: 'Allradantrieb (Real Time 4WD)',
    selectEngineHeader: 'MOTORISIERUNG WÄHLEN',
    engineCategoryPetrol: 'Benzin',
    engineCategoryDiesel: 'Diesel',
    engineCategoryHybrid: 'Hybrid',
    defaultEngineBadge: 'STANDARD',
    selectCarHeader: 'FAHRZEUG NACH TYP WÄHLEN',
    carSortUnsorted: 'UNSORTIERT',
    carTypeSubcompact: 'Kleinwagen',
    carTypeHatchback: 'Kompaktwagen (Hatchback)',
    carTypeHotHatch: 'Hot-Hatch',
    carTypeSedan: 'Limousine (Sedan)',
    carTypeSuv: 'SUV',
    dossierStrengths: 'Konstruktive Stärken & Zuverlässigkeit',
    dossierWatchouts: 'Wartung & Bekannte Schwachstellen',
    dossierBeforeYouBuy: 'Vor dem Kauf prüfen:',
    dossierHighMileage: 'Wartungs-, Reparatur- & Kosten-Fahrplan (0 – 250.000 km)',
    dossierIfIgnored: 'Wenn ignoriert:',
    dossierTierYellow: 'Wartung',
    dossierTierOrange: 'Wichtig',
    dossierTierRed: 'Kritisch',
    dossierShowRoadmap: 'Fahrplan anzeigen ▾',
    dossierHideRoadmap: 'Fahrplan ausblenden ▴',
    dossierOpponentContrast: 'Direkter Vergleich mit dem Gegner',
    dossierInspectBtn: 'Technik-Dossier ansehen',
    dossierDefaultStrength: 'Serienmäßige Zuverlässigkeit der Werkskomponenten.',
    dossierDefaultWatchout: 'Regelmäßige Wartungsintervalle nach Herstellervorgabe erforderlich.',
    angleFront: 'Front',
    angleFrontSide: 'Front-Seite',
    angleSide: 'Seite',
    angleSideRear: 'Heck-Seite',
    angleRear: 'Heck',
    chooseCarPlaceholder: 'Fahrzeug wählen...',
    smashTitle: 'WÄHLE DEINE FAHRZEUGE',
    smashPickingHint: 'Klicke unten auf ein Auto zur Auswahl',
    smashReadyHint: 'Beide Fahrzeuge ausgewählt!',
    smashClearSlot: 'Entfernen',
    backToGridBtn: 'FAHRZEUGAUSWAHL-MENÜ',
    priceTitle: 'MARKT & WERTVERLUST',
    priceMsrpLabel: 'Neupreis (UVP)',
    priceCurrentLabel: 'Aktueller Wert',
    priceDepTotalLabel: 'Wertverlust Gesamt',
    priceRetainedLabel: 'Restwert-Anteil',
    priceAnnualLabel: 'Ø Verlust / Jahr',
    priceOutlookLabel: 'Werterwartung',
    outlookFloor: 'Talsohle erreicht • Kaum weiterer Verlust',
    outlookStrong: 'Wertstabil • Hohe Nachfrage',
    outlookEnthusiast: 'Liebhaber-Status • Stabil bis steigend',
    outlookSteady: 'Solide • Planbarer Wertverlauf'
  },
  ru: {
    code: 'RU',
    contender1: 'УЧАСТНИК',
    opponentP2: 'СОПЕРНИК',
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
    statsHeader: 'Статистика (5 категорий)',
    expandAll: '+ Развернуть',
    collapseAll: '− Свернуть',
    ratingCol: 'Оценка',
    vsOppCol: 'Соп.',
    originalMsrp: 'Цена нового',
    estUsedMarket: 'Рынок б/у (прим.)',
    overallRating: 'Общий рейтинг',
    classSuffix: '-Класс',
    indexClassesBtn: 'ИНДЕКС',
    indexClassesTitle: 'КЛАССЫ ИНДЕКСА',
    weightMenuBtn: 'ВЕСА',
    weightPopoverTitle: 'ЭКВАЛАЙЗЕР ПРИОРИТЕТОВ',
    weightResetBtn: 'СБРОС',
    weightDefaultLabel: 'Стандарт',
    weightHint: 'Настройте приоритеты категорий',
    fwdTooltip: 'Передний привод',
    rwdTooltip: 'Задний привод',
    awdTooltip: 'Полный привод (Real Time 4WD)',
    selectEngineHeader: 'ВЫБЕРИТЕ ДВИГАТЕЛЬ',
    engineCategoryPetrol: 'Бензин',
    engineCategoryDiesel: 'Дизель',
    engineCategoryHybrid: 'Гибрид',
    defaultEngineBadge: 'ОСНОВНОЙ',
    selectCarHeader: 'ВЫБЕРИТЕ АВТО ПО ТИПУ',
    carSortUnsorted: 'БЕЗ СОРТИРОВКИ',
    carTypeSubcompact: 'Субкомпакт',
    carTypeHatchback: 'Хэтчбек',
    carTypeHotHatch: 'Хот-хэтч',
    carTypeSedan: 'Седан',
    carTypeSuv: 'SUV (Кроссовер)',
    dossierStrengths: 'Конструктивные преимущества и надёжность',
    dossierWatchouts: 'Обслуживание и слабые места',
    dossierBeforeYouBuy: 'Перед покупкой:',
    dossierHighMileage: 'План обслуживания, ремонтов и расходов (0 – 250 000 км)',
    dossierIfIgnored: 'Если запустить:',
    dossierTierYellow: 'Планово',
    dossierTierOrange: 'Важно',
    dossierTierRed: 'Критично',
    dossierShowRoadmap: 'Показать план ▾',
    dossierHideRoadmap: 'Скрыть план ▴',
    dossierOpponentContrast: 'Сравнение с соперником',
    dossierInspectBtn: 'Открыть техническое досье',
    dossierDefaultStrength: 'Стандартная заводская надёжность узлов и агрегатов.',
    dossierDefaultWatchout: 'Требуется соблюдение регламентных интервалов ТО.',
    angleFront: 'Спереди',
    angleFrontSide: 'Спереди сбоку',
    angleSide: 'Сбоку',
    angleSideRear: 'Сзади сбоку',
    angleRear: 'Сзади',
    chooseCarPlaceholder: 'Выберите авто...',
    smashTitle: 'ВЫБЕРИТЕ АВТОМОБИЛИ',
    smashPickingHint: 'Нажмите на автомобиль ниже для выбора',
    smashReadyHint: 'Оба автомобиля выбраны!',
    smashClearSlot: 'Сбросить',
    backToGridBtn: 'МЕНЮ ВЫБОРА АВТО',
    priceTitle: 'РЫНОК И АМОРТИЗАЦИЯ',
    priceMsrpLabel: 'Цена нового',
    priceCurrentLabel: 'Текущая цена',
    priceDepTotalLabel: 'Общая потеря цены',
    priceRetainedLabel: 'Остаточная стоимость',
    priceAnnualLabel: 'Потеря в год (ср.)',
    priceOutlookLabel: 'Прогноз цены',
    outlookFloor: 'Дно рынка • Минимальное падение',
    outlookStrong: 'Высокая ликвидность • Хороший спрос',
    outlookEnthusiast: 'Культовая модель • Стабильный / рост',
    outlookSteady: 'Умеренное снижение • Предсказуемо'
  }
};

const PILLAR_ICONS = {
  reliabilityQuality: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11.2 16.2l-.7-.1-.7 1.1H7.9l-.6-1.3-1.2-.5-1.2.6-1.4-1.4.6-1.2-.5-1.2-1.3-.6V9.7l1.3-.6.5-1.2-.6-1.2 1.4-1.4 1.2.6 1.2-.5.6-1.3h1.9l.6 1.3 1.2.5 1.2-.6 1.4 1.4-.6 1.2.5 1.2 1.3.6v1.4"/><circle cx="8.9" cy="10.7" r="2.4"/><path d="M17 11.4l4.4 1.7v3.2c0 2.8-1.9 4.9-4.4 5.8-2.5-.9-4.4-3-4.4-5.8v-3.2l4.4-1.7z"/><path d="M15 16.7l1.4 1.4 2.8-2.9"/></svg>`,
  comfortCabin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.2" y="3.5" width="2.4" height="3" rx="1"/><path d="M2.6 8l1.7 9.2c.2.9 1 1.5 1.9 1.5h6.3"/><circle cx="10.2" cy="5.2" r="2.1" fill="currentColor" stroke="none"/><path d="M8.8 9.2l1.4 5.4h4.4l2.9 4.2" stroke-width="2.4"/><path d="M9.5 10.6l3.3 1.5 3.2-1.2" stroke-width="2"/><path d="M18.6 7.8l-1.3 5.2M18 10.4l2.8.7" stroke-width="1.8"/></svg>`,
  spacePracticality: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.2 4.6h3.2c2.1 0 3.7 1.1 4.8 3l1.4 2.3 4.8.7c1.4.2 2.4 1.2 2.4 2.6v2.2c0 .8-.5 1.3-1.3 1.3h-3.6"/><path d="M2.2 16.7h4.3"/><circle cx="10.2" cy="16.7" r="3.3"/><path d="M11.6 9.9c1.5-1.5 3.3-2.3 5.5-2.3"/><path d="M18.8 15.2h2.2a1.2 1.2 0 001.2-1.2v-1"/></svg>`,
  performanceDynamics: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.2 17.5a9 9 0 1115.6 0"/><path d="M12 4.5v2M5.6 7.6l1.4 1.4M18.4 7.6l-1.4 1.4M3.8 13.5h2M18.2 13.5h2"/><circle cx="12" cy="14.5" r="1.8"/><path d="M13.3 13.2L17 9.5"/></svg>`,
  runningCostsTco: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="9.2" cy="6.2" rx="6.2" ry="2.4"/><path d="M3 6.2v9.6M15.4 6.2v2.4"/><path d="M3 9.4a6.2 2.4 0 008.2 1.8M3 12.6a6.2 2.4 0 006.8 1.9M3 15.8a6.2 2.4 0 007.4 1.9"/><circle cx="15.2" cy="14.8" r="6.2"/><path d="M17.3 12.4a3.1 3.1 0 100 4.8M12.4 14h3.6M12.4 15.6h3.2"/></svg>`
};

const STAT_PILLARS = [
  {
    id: 'reliabilityQuality',
    number: '1',
    label: {
      en: 'Reliability & Durability',
      de: 'Zuverlässigkeit & Haltbarkeit',
      ru: 'Надёжность и ресурс'
    },
    subtitle: {
      en: 'Engine, Gearbox, Rust, Electrics',
      de: 'Motor, Getriebe, Rost, Elektrik',
      ru: 'Мотор, КПП, кузов, электрика'
    },
    unitHint: {
      en: 'Average of 4 mechanical, structural & electrical reliability ratings (1–10)',
      de: 'Durchschnitt aus 4 Mechanik-, Rost- & Elektrik-Wertungen (1–10)',
      ru: 'Средний балл по 4 показателям надёжности агрегатов, кузова и электрики (1–10)'
    },
    subRatings: [
      {
        key: 'powertrainDurability',
        label: {
          en: 'Engine & Turbo/Injection',
          de: 'Motor, Turbo & Einspritzung',
          ru: 'Двигатель, турбина и впрыск'
        },
        unitHint: {
          en: 'TÜV / ADAC defect rate, internal engine wear, timing drive & injection longevity',
          de: 'TÜV-/ADAC-Mängelquote, Motorblock, Steuerkette/Zahnriemen, Turbo & Einspritzung',
          ru: 'Ресурс двигателя, ГРМ, турбины и топливной аппаратуры по рейтингам TÜV / ADAC'
        }
      },
      {
        key: 'transmissionDriveline',
        label: {
          en: 'Gearbox, Clutch & Driveline',
          de: 'Getriebe, Kupplung & Antrieb',
          ru: 'КПП, сцепление и привод'
        },
        unitHint: {
          en: 'Gearbox longevity, shift smoothness, clutch/DMF or automatic/e-CVT durability',
          de: 'Getriebehaltbarkeit, Schaltkomfort, Kupplung/ZMS bzw. Automatik-/e-CVT-Robustheit',
          ru: 'Ресурс коробки передач, сцепления/маховика или автомата и приводов'
        }
      },
      {
        key: 'buildQualityRust',
        label: {
          en: 'Rust Protection & Chassis Wear',
          de: 'Rostschutz & Fahrwerksverschleiß',
          ru: 'Защита от коррозии и подвеска'
        },
        unitHint: {
          en: 'Underbody & subframe corrosion protection plus suspension/axle TÜV wear rates',
          de: 'Unterboden- & Achsträger-Rostschutz sowie Fahrwerks-/Achs-Verschleiß (TÜV)',
          ru: 'Антикоррозийная стойкость днища/подрамника и ресурс элементов подвески'
        }
      },
      {
        key: 'electronicsReliability',
        label: {
          en: 'Electrical & Sensor Reliability',
          de: 'Elektrik- & Sensor-Zuverlässigkeit',
          ru: 'Надёжность электрики и датчиков'
        },
        unitHint: {
          en: 'Pure electrical fault resistance: sensors, ECUs, alternator, starter & wiring',
          de: 'Störungsfreiheit bei Sensorik, Steuergeräten, Lichtmaschine, Anlasser & Kabelbaum',
          ru: 'Безотказность датчиков, блоков ЭБУ, проводки, стартера и генератора'
        }
      }
    ]
  },
  {
    id: 'comfortCabin',
    number: '2',
    label: {
      en: 'Comfort, Cabin & Safety',
      de: 'Komfort, Innenraum & Sicherheit',
      ru: 'Комфорт, салон и безопасность'
    },
    subtitle: {
      en: 'Ride, Materials, Visibility, Safety',
      de: 'Federung, Material, Sicht, Sicherheit',
      ru: 'Плавность, салон, обзор, безопасность'
    },
    unitHint: {
      en: 'Average of 4 ride comfort, cabin quality, visibility & safety ratings (1–10)',
      de: 'Durchschnitt aus 4 Komfort-, Innenraum-, Sicht- & Sicherheits-Wertungen (1–10)',
      ru: 'Средний балл по 4 показателям комфорта, салона, обзорности и безопасности (1–10)'
    },
    subRatings: [
      {
        key: 'rideNoiseComfort',
        label: {
          en: 'Ride, Seat & Noise Comfort (NVH)',
          de: 'Federungs-, Sitz- & Geräuschkomfort',
          ru: 'Плавность хода, сиденья и шумоизоляция'
        },
        unitHint: {
          en: 'Bump absorption, long-trip seat support & highway cabin quietness (NVH)',
          de: 'Abrollkomfort auf schlechten Straßen, Langstreckensitze & Geräuschdämmung',
          ru: 'Энергоёмкость подвески, удобство кресел на дальняке и тишина на трассе'
        }
      },
      {
        key: 'interiorQualityFeatures',
        label: {
          en: 'Interior Quality, Controls & Features',
          de: 'Materialqualität, Bedienung & Ausstattung',
          ru: 'Качество салона, эргономика и оснащение'
        },
        unitHint: {
          en: 'Cabin materials & switchgear feel, control ergonomics & comfort equipment',
          de: 'Haptik, Verarbeitung, Bedienbarkeit von Klima/Audio & Serienausstattung',
          ru: 'Качество отделки, удобство органов управления, климата и мультимедиа'
        }
      },
      {
        key: 'visibilityManeuverability',
        label: {
          en: 'Visibility & City Maneuverability',
          de: 'Rundumsicht & Wendigkeit (Stadt)',
          ru: 'Обзорность и манёвренность'
        },
        unitHint: {
          en: 'All-round visibility, blind spots, turning circle & urban parking ease',
          de: 'Übersichtlichkeit, tote Winkel, Wendekreis & Einparktauglichkeit im Alltag',
          ru: 'Обзорность с места водителя, радиус разворота и удобство парковки в городе'
        }
      },
      {
        key: 'safetyProtection',
        label: {
          en: 'Active & Passive Safety',
          de: 'Aktive & Passive Sicherheit',
          ru: 'Активная и пассивная безопасность'
        },
        unitHint: {
          en: 'Euro NCAP crash protection, airbags, ESP stability & driver-assistance systems',
          de: 'Euro-NCAP-Crashtest, Airbags, ESP-Stabilität & Assistenzsysteme',
          ru: 'Рейтинг краш-тестов Euro NCAP, подушки безопасности, ESP и ассистенты'
        }
      }
    ]
  },
  {
    id: 'spacePracticality',
    number: '3',
    label: {
      en: 'Space & Practicality',
      de: 'Platzangebot & Alltag',
      ru: 'Простор и практичность'
    },
    subtitle: {
      en: 'Passenger Room, Boot, Towing',
      de: 'Raumangebot, Kofferraum, Zuladung',
      ru: 'Салон, багажник, грузоподъёмность'
    },
    unitHint: {
      en: 'Average of 3 cabin space, cargo utility & towing/payload ratings (1–10)',
      de: 'Durchschnitt aus 3 Platz-, Kofferraum- & Zuladungs-Wertungen (1–10)',
      ru: 'Средний балл по 3 показателям простора салона, багажника и грузоподъёмности (1–10)'
    },
    subRatings: [
      {
        key: 'passengerSpaceErgonomics',
        label: {
          en: 'Passenger Room & Cabin Access',
          de: 'Platzangebot (Passagiere) & Einstieg',
          ru: 'Простор для пассажиров и посадка'
        },
        unitHint: {
          en: 'Front/rear knee and headroom, 3-across width, door access & ISOFIX ease',
          de: 'Kopf- und Beinfreiheit vorn/hinten, Einstiegskomfort & ISOFIX-Zugang',
          ru: 'Запас места для ног и над головой, удобство входа и креплений ISOFIX'
        }
      },
      {
        key: 'interiorBootSpace',
        label: {
          en: 'Boot Space & Loading',
          de: 'Kofferraum & Beladung',
          ru: 'Багажник и удобство погрузки'
        },
        unitHint: {
          en: 'Boot volume (VDA liters), folding seat geometry, opening width & load height',
          de: 'Kofferraumvolumen (Liter), Klappmechanik, Ladekante & Variabilität',
          ru: 'Объём багажника в литрах, трансформация сидений и удобство погрузки'
        }
      },
      {
        key: 'payloadTowing',
        label: {
          en: 'Payload, Roof Load & Towing',
          de: 'Zuladung, Dach- & Anhängelast',
          ru: 'Грузоподъёмность и буксировка'
        },
        unitHint: {
          en: 'Max payload (kg), roof load limit & unbraked/braked trailer towing capacity',
          de: 'Maximale Zuladung (kg), Dachlast sowie ungebremste/gebremste Anhängelast',
          ru: 'Полезная нагрузка (кг), нагрузка на крышу и масса буксируемого прицепа'
        }
      }
    ]
  },
  {
    id: 'performanceDynamics',
    number: '4',
    label: {
      en: 'Performance & Dynamics',
      de: 'Fahrleistung & Dynamik',
      ru: 'Динамика и управляемость'
    },
    subtitle: {
      en: 'Sprint, Torque, Handling, Brakes',
      de: 'Sprint, Durchzug, Kurven, Bremsen',
      ru: 'Разгон, тяга, шасси, тормоза'
    },
    unitHint: {
      en: 'Average of 4 acceleration, mid-range torque, handling & braking performance ratings (1–10)',
      de: 'Durchschnitt aus 4 Beschleunigungs-, Durchzugs-, Fahrwerks- & Brems-Wertungen (1–10)',
      ru: 'Средний балл по 4 показателям разгона, эластичности, управляемости и тормозов (1–10)'
    },
    subRatings: [
      {
        key: 'accelerationOvertaking',
        label: {
          en: 'Acceleration & Top Speed (0–100)',
          de: 'Beschleunigung & Höchstgeschwindigkeit',
          ru: 'Разгон 0–100 км/ч и макс. скорость'
        },
        unitHint: {
          en: '0–100 km/h sprint & top speed (Road-car scale: 10 = ≤4.8 s / 270+ km/h)',
          de: '0–100 km/h Sprint & Höchstgeschwindigkeit (Pkw-Maßstab: 10 = ≤4,8 s / 270+ km/h)',
          ru: 'Разгон 0–100 км/ч и макс. скорость (Шкала для авто: 10 = ≤4,8 с / 270+ км/ч)'
        }
      },
      {
        key: 'midRangeTorquePassing',
        label: {
          en: 'Mid-Range Torque & Overtaking (Nm)',
          de: 'Durchzug & Überholkraft (Nm)',
          ru: 'Тяга и эластичность (80–120 км/ч)'
        },
        unitHint: {
          en: 'Peak torque (Nm), turbo/diesel passing punch & 80–120 km/h highway elasticity',
          de: 'Drehmoment (Nm), Elastizität bei 80–120 km/h & Überholreserve ohne Herunterschalten',
          ru: 'Крутящий момент (Н·м) и уверенность обгонов на трассе (80–120 км/ч)'
        }
      },
      {
        key: 'handlingAgility',
        label: {
          en: 'Handling, Steering & Traction',
          de: 'Kurvenverhalten, Lenkung & Traktion',
          ru: 'Управляемость, рулевое и зацеп'
        },
        unitHint: {
          en: 'Cornering composure, steering precision & FWD/RWD/AWD wet/winter traction',
          de: 'Kurvenstabilität, Lenkpräzision sowie Traktion bei Nässe und Winter (FWD/RWD/AWD)',
          ru: 'Точность руля, устойчивость в поворотах и зацеп (FWD/RWD/AWD)'
        }
      },
      {
        key: 'brakingPerformance',
        label: {
          en: 'Braking Performance & Fade Resistance',
          de: 'Bremsleistung & Standfestigkeit',
          ru: 'Тормозная динамика и выносливость'
        },
        unitHint: {
          en: '100–0 km/h stopping distance, pedal modulation & thermal fade resistance',
          de: 'Bremsweg 100–0 km/h, Pedaldosierbarkeit & Fading-Resistenz',
          ru: 'Тормозной путь 100–0 км/ч, информативность педали и стойкость к перегреву'
        }
      }
    ]
  },
  {
    id: 'runningCostsTco',
    number: '5',
    label: {
      en: 'Running Costs & Value',
      de: 'Unterhaltskosten & Wert',
      ru: 'Расходы и ликвидность'
    },
    subtitle: {
      en: 'Fuel, Tax, Insurance, Service, Resale',
      de: 'Verbrauch, Steuer, Versicherung, Wartung, Wert',
      ru: 'Расход, налог, страховка, ТО, ликвидность'
    },
    unitHint: {
      en: 'Average of 4 fuel economy, tax/insurance, maintenance & resale value ratings (1–10)',
      de: 'Durchschnitt aus 4 Verbrauchs-, Steuer/Versicherungs-, Wartungs- & Wertstabilitäts-Wertungen (1–10)',
      ru: 'Средний балл по 4 показателям расхода топлива, налогов/страховки, стоимости ТО и ликвидности (1–10)'
    },
    subRatings: [
      {
        key: 'efficiencyFuel',
        label: {
          en: 'Real-World Fuel Economy & Range',
          de: 'Praxisverbrauch & Reichweite',
          ru: 'Реальный расход топлива и запас хода'
        },
        unitHint: {
          en: 'Real-world mixed fuel consumption (L/100 km) & full-tank driving range',
          de: 'Realer Kraftstoffverbrauch im Alltag (L/100km) & Tankreichweite',
          ru: 'Реальный расход топлива в смешанном цикле (л/100 км) и запас хода'
        }
      },
      {
        key: 'taxInsuranceNorm',
        label: {
          en: 'Tax, Insurance & Euro Norm',
          de: 'Steuer, Versicherung & Umweltnorm',
          ru: 'Налог, страховка и эко-класс'
        },
        unitHint: {
          en: 'Annual road tax (CO2/displacement), insurance class (KH/TK/VK) & Euro emissions zone status',
          de: 'Kfz-Steuer, Versicherungs-Typklassen (KH/TK/VK) & Euro-Abgasnorm / Umweltzone',
          ru: 'Ежегодный налог, стоимость страховки и экологический класс Euro'
        }
      },
      {
        key: 'maintenanceRepairCosts',
        label: {
          en: 'Maintenance, Wear Parts & Repairs',
          de: 'Wartung, Verschleiß & Reparaturkosten',
          ru: 'Обслуживание, расходники и ремонт'
        },
        unitHint: {
          en: 'Routine service bills, tyres/brakes wear parts & potential major repair costs',
          de: 'Inspektionskosten, Verschleißteile (Bremsen/Reifen) & mögliche Reparaturrisiken',
          ru: 'Стоимость планового ТО, расходников и потенциального крупного ремонта'
        }
      },
      {
        key: 'depreciationResale',
        label: {
          en: 'Used Market & Depreciation',
          de: 'Gebrauchtmarkt & Wertstabilität',
          ru: 'Вторичный рынок и ликвидность'
        },
        unitHint: {
          en: 'Used market demand, value retention over 3/5+ years & resale liquidity',
          de: 'Werterhalt, Nachfrage auf dem Gebrauchtwagenmarkt & Wiederverkaufswert',
          ru: 'Спрос на вторичном рынке, сохранность остаточной стоимости и ликвидность'
        }
      }
    ]
  }
];

// Vehicle roster data (CAR_ROSTER) lives in cars-data.js (loaded before app.js)

// Maximum number of standout pros / cons displayed per car
const MAX_TRAITS_PER_GROUP = 7;

// Application State (Default: awaiting contender selection on the Smash-style grid)
let selectedLeftId = null;
let selectedRightId = null;
let selectedLeftEngineId = null;
let selectedRightEngineId = null;
let smashPickerForceOpen = false;
let smashAlignmentTimer = null;
let activeRosterTarget = 'p1'; // 'p1' (left) or 'p2' (right)
let currentLang = 'en'; // 'en' | 'de' | 'ru'
let currentTheme = 'dark'; // 'dark' | 'light' | 'dark-soft' | 'light-soft'
const expandedPillars = new Set();
let activeStatsScrollSide = 'left';

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
    shortTitle: baseCar.shortTitle || engineObj.shortTitle,
    fullName: baseCar.fullName || engineObj.fullName,
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

const WEIGHT_LEVEL_MULTIPLIERS = {
  1: 0.25,
  2: 0.6,
  3: 1.0,
  4: 1.5,
  5: 2.0
};

const DEFAULT_PILLAR_WEIGHTS = {
  reliabilityQuality: 3,
  comfortCabin: 3,
  spacePracticality: 3,
  performanceDynamics: 3,
  runningCostsTco: 3
};

function loadPillarWeights() {
  try {
    localStorage.removeItem('carduel_pillar_weights');
  } catch (e) {
    // ignore storage errors
  }
  return { ...DEFAULT_PILLAR_WEIGHTS };
}

let pillarWeights = loadPillarWeights();

function savePillarWeights() {
  // Weights reset to default (3/5) on page reload
}

function hasCustomPillarWeights() {
  return Object.keys(DEFAULT_PILLAR_WEIGHTS).some((k) => pillarWeights[k] !== 3);
}

// Helper: Calculate Overall Rating & Index Class on the 0.0 to 10 scale (x/10)
function calculateOverallIndex(car) {
  let weightedSum = 0;
  let totalWeight = 0;

  STAT_PILLARS.forEach((p) => {
    const pScore = getPillarScore(car, p);
    const level = pillarWeights[p.id] || 3;
    const w = WEIGHT_LEVEL_MULTIPLIERS[level] || 1.0;
    weightedSum += pScore * w;
    totalWeight += w;
  });

  const weightedAvg = totalWeight > 0 ? weightedSum / totalWeight : 0;
  const avgWeight = totalWeight / STAT_PILLARS.length || 1.0;

  // Dealbreaker penalty: critical reliability / maintenance flaws below 6.5 pull the score down
  const criticalStats = [
    { key: 'powertrainDurability', pillarId: 'reliabilityQuality' },
    { key: 'transmissionDriveline', pillarId: 'reliabilityQuality' },
    { key: 'buildQualityRust', pillarId: 'reliabilityQuality' },
    { key: 'maintenanceRepairCosts', pillarId: 'runningCostsTco' }
  ];

  let penalty = 0;
  criticalStats.forEach(({ key, pillarId }) => {
    const val = car.subStats && car.subStats[key] ? Number(car.subStats[key].score) : 0;
    if (val > 0 && val < 6.5) {
      const pWeight = WEIGHT_LEVEL_MULTIPLIERS[pillarWeights[pillarId] || 3] || 1.0;
      const relWeight = Math.min(1.5, Math.max(0.25, pWeight / avgWeight));
      penalty += (6.5 - val) * 0.18 * relWeight;
    }
  });
  penalty = Math.min(1.8, penalty);

  const effectiveAvg = weightedAvg - penalty;
  // Contrast stretch so mainstream cars span a realistic ~5.5–9.2 range instead of clustering at 7.7–8.2
  const stretched = Math.max(0, Math.min(10, 7.5 + (effectiveAvg - 7.8) * 2.5));
  const piNum = Math.round(stretched * 10) / 10;
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

// SVG icon for FWD / RWD / AWD drivetrain badge (Forza style mini chassis diagram)
function getDrivetrainSvg(drivetrain) {
  const isFwd = drivetrain === 'FWD';
  const isRwd = drivetrain === 'RWD';
  const isAwd = drivetrain === 'AWD';
  const frontWheelColor = isFwd || isAwd ? '#111' : '#777';
  const frontAxleColor = isFwd || isAwd ? '#111' : '#888';
  const frontAxleWidth = isFwd || isAwd ? '2.2' : '1.6';
  const rearWheelColor = isRwd || isAwd ? '#111' : '#777';
  const rearAxleColor = isRwd || isAwd ? '#111' : '#888';
  const rearAxleWidth = isRwd || isAwd ? '2.2' : '1.6';
  const shaftColor = isRwd || isAwd ? '#111' : '#555';

  return `
    <svg class="chassis-svg" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="1" width="6" height="3.5" rx="1" fill="${frontWheelColor}"/>
      <rect x="6" y="13.5" width="6" height="3.5" rx="1" fill="${frontWheelColor}"/>
      <rect x="24" y="1" width="6" height="3.5" rx="1" fill="${rearWheelColor}"/>
      <rect x="24" y="13.5" width="6" height="3.5" rx="1" fill="${rearWheelColor}"/>
      <line x1="9" y1="4.5" x2="9" y2="13.5" stroke="${frontAxleColor}" stroke-width="${frontAxleWidth}"/>
      <line x1="27" y1="4.5" x2="27" y2="13.5" stroke="${rearAxleColor}" stroke-width="${rearAxleWidth}"/>
      <line x1="9" y1="9" x2="27" y2="9" stroke="${shaftColor}" stroke-width="2"/>
      ${isFwd || isAwd ? '<circle cx="9" cy="9" r="2.3" fill="#111"/>' : ''}
      ${isRwd || isAwd ? '<circle cx="27" cy="9" r="2.3" fill="#111"/>' : ''}
    </svg>
  `;
}

// Helper: Get comparison classes & symbol for two scores
function getComparisonState(val, oppVal) {
  const diff = Number((val - oppVal).toFixed(1));
  let indicatorSymbol = '~';
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
function parseEuroPrice(priceStr) {
  const digits = String(priceStr || '').replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
}

function formatEuroAmount(amount) {
  return `€${Math.round(amount).toLocaleString('en-US')}`;
}

function buildPriceBreakdownHtml(car, ui) {
  const msrp = parseEuroPrice(car.originalMsrp && car.originalMsrp.en);
  const used = parseEuroPrice(car.estUsedPrice);
  const depTotal = Math.max(0, msrp - used);
  const depPct = msrp > 0 ? ((depTotal / msrp) * 100).toFixed(1) : '0.0';
  const retainedPct = msrp > 0 ? ((used / msrp) * 100).toFixed(1) : '100.0';

  // Estimate model age relative to 2026 from production span (e.g. "2012-2019 TOYOTA")
  const years = String(car.yearMake || '').match(/\d{4}/g);
  let avgYear = 2016;
  if (years && years.length >= 2) {
    avgYear = Math.round((Number(years[0]) + Number(years[1])) / 2);
  } else if (years && years.length === 1) {
    avgYear = Number(years[0]);
  }
  const ageYears = Math.max(1, 2026 - avgYear);
  const annualLoss = depTotal / ageYears;

  let outlook = ui.outlookSteady;
  if (Number(retainedPct) >= 62 || car.id === 'honda-civic-type-r-2015') {
    outlook = ui.outlookEnthusiast;
  } else if (Number(depPct) >= 72) {
    outlook = ui.outlookFloor;
  } else if ((car.subStats && car.subStats.depreciationResale && car.subStats.depreciationResale.score >= 8.0) || Number(retainedPct) >= 40) {
    outlook = ui.outlookStrong;
  }

  return `
    <div class="price-popover" role="dialog" aria-label="${ui.priceTitle}">
      <div class="price-popover-header">${ui.priceTitle}</div>
      <div class="price-popover-grid">
        <div class="price-metric-row">
          <span class="price-metric-label">${ui.priceMsrpLabel}</span>
          <span class="price-metric-val">${formatEuroAmount(msrp)}</span>
        </div>
        <div class="price-metric-row">
          <span class="price-metric-label">${ui.priceCurrentLabel}</span>
          <span class="price-metric-val is-accent">${formatEuroAmount(used)}</span>
        </div>
        <div class="price-metric-row">
          <span class="price-metric-label">${ui.priceDepTotalLabel}</span>
          <span class="price-metric-val is-loss">-${formatEuroAmount(depTotal)} (-${depPct}%)</span>
        </div>
        <div class="price-metric-row">
          <span class="price-metric-label">${ui.priceRetainedLabel}</span>
          <span class="price-metric-val">${retainedPct}%</span>
        </div>
        <div class="price-metric-row">
          <span class="price-metric-label">${ui.priceAnnualLabel}</span>
          <span class="price-metric-val">~${formatEuroAmount(annualLoss)}/yr</span>
        </div>
      </div>
      <div class="price-outlook-bar">
        <span class="price-outlook-label">${ui.priceOutlookLabel}</span>
        <span class="price-outlook-val">${outlook}</span>
      </div>
    </div>
  `;
}

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

    // Build the sub-ratings for this pillar
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
        <span class="drivetrain-badge" title="${car.drivetrain === 'AWD' ? ui.awdTooltip : car.drivetrain === 'RWD' ? ui.rwdTooltip : ui.fwdTooltip}">
          <span>${car.drivetrain}</span>
          ${getDrivetrainSvg(car.drivetrain)}
        </span>
      </div>
    </div>

    <!-- Two-Level 5-Pillar Accordion Stats Table -->
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
        <span class="price-value-wrap">
          <span class="price-info-anchor">
            <button type="button" class="cr-badge price-info-trigger" title="${ui.priceTitle}" aria-label="${ui.priceTitle}">€</button>
            ${buildPriceBreakdownHtml(car, ui)}
          </span>
          <span>${car.estUsedPrice}</span>
        </span>
      </div>
      <div class="forza-secondary-box ${piClassCss}">
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

  document.querySelectorAll('.price-info-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const anchor = btn.closest('.price-info-anchor');
      if (!anchor) return;
      const wasOpen = anchor.classList.contains('is-open');
      document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
      if (!wasOpen) anchor.classList.add('is-open');
    });
  });

  // Synchronize scrolling between Left and Right Stats boxes using active-side leader tracking
  const leftList = document.querySelector('#stats-left .stats-rows-list');
  const rightList = document.querySelector('#stats-right .stats-rows-list');

  if (leftList && rightList) {
    [
      ['left', leftList, rightList],
      ['right', rightList, leftList]
    ].forEach(([side, sourceList, targetList]) => {
      const claimLead = () => {
        activeStatsScrollSide = side;
      };
      ['wheel', 'touchstart', 'pointerdown', 'mouseenter'].forEach((evt) => {
        sourceList.addEventListener(evt, claimLead, { passive: true });
      });
      sourceList.addEventListener(
        'scroll',
        () => {
          if (activeStatsScrollSide !== side) return;
          if (targetList.scrollTop !== sourceList.scrollTop) {
            targetList.scrollTop = sourceList.scrollTop;
          }
        },
        { passive: true }
      );
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
  if (!selectedLeftId || !selectedRightId) return;
  const leftCar = getCarById(selectedLeftId, selectedLeftEngineId);
  const rightCar = getCarById(selectedRightId, selectedRightEngineId);

  const leftList = document.querySelector('#stats-left .stats-rows-list');
  const rightList = document.querySelector('#stats-right .stats-rows-list');
  const activeList = activeStatsScrollSide === 'right' ? (rightList || leftList) : (leftList || rightList);
  const sharedScrollTop = activeList ? activeList.scrollTop : 0;

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

const CAR_TYPE_ORDER = ['subcompact', 'hatchback', 'hot-hatch', 'sedan', 'suv'];
let carListSortMode = 'byType';

function getCarType(baseCar) {
  return (baseCar && baseCar.carType) || 'hatchback';
}

function renderCarSelectorSide(side, selectedCarId, selectedEngineId) {
  const ui = t();
  const pillSpan = document.getElementById(side === 'left' ? 'car-pill-left' : 'car-pill-right');
  const dropdown = document.getElementById(side === 'left' ? 'car-dropdown-left' : 'car-dropdown-right');
  const btn = document.getElementById(side === 'left' ? 'car-btn-left' : 'car-btn-right');

  if (!pillSpan || !dropdown || !btn) return;

  if (selectedCarId) {
    const activeCar = getCarById(selectedCarId, selectedEngineId);
    const activePi = calculateOverallIndex(activeCar);
    pillSpan.textContent = `#${activeCar.number} — ${activeCar.fullName} [${activePi.piClass} ${activePi.piScore}/10]`;
  } else {
    pillSpan.textContent = ui.chooseCarPlaceholder;
  }

  const buildCarOptionHtml = (baseCar) => {
    const isSelected = baseCar.id === selectedCarId;
    const engineId = isSelected ? selectedEngineId : baseCar.defaultEngineId;
    const car = getCarById(baseCar.id, engineId);
    const { piBadgeText, piScore, piClassCss } = calculateOverallIndex(car);

    return `
      <button
        type="button"
        class="engine-option-btn ${isSelected ? 'active' : ''}"
        data-car-id="${car.id}"
      >
        <div class="engine-option-main">
          <div class="engine-option-title">
            <span>#${car.number} — ${car.fullName}</span>
          </div>
          <div class="engine-option-sub">${car.engineBadge}</div>
        </div>
        <span class="roster-class-pill ${piClassCss} engine-option-pi">${piBadgeText} ${piScore}/10</span>
      </button>
    `;
  };

  let bodyHtml = '';
  if (carListSortMode === 'unsorted') {
    const sortedByNumber = [...CAR_ROSTER].sort((a, b) => Number(a.number) - Number(b.number));
    bodyHtml = `<div class="engine-category-group">${sortedByNumber.map(buildCarOptionHtml).join('')}</div>`;
  } else {
    const categories = [
      { key: 'subcompact', label: ui.carTypeSubcompact },
      { key: 'hatchback', label: ui.carTypeHatchback },
      { key: 'hot-hatch', label: ui.carTypeHotHatch },
      { key: 'sedan', label: ui.carTypeSedan },
      { key: 'suv', label: ui.carTypeSuv }
    ];

    bodyHtml = categories
      .map((cat) => {
        const carsInCat = CAR_ROSTER
          .filter((baseCar) => getCarType(baseCar) === cat.key)
          .sort((a, b) => Number(a.number) - Number(b.number));

        if (carsInCat.length === 0) return '';

        return `
          <div class="engine-category-group">
            <div class="engine-category-header car-cat-${cat.key}">
              <span class="engine-category-dot"></span>
              <span>${cat.label}</span>
            </div>
            ${carsInCat.map(buildCarOptionHtml).join('')}
          </div>
        `;
      })
      .filter(Boolean)
      .join('');
  }

  dropdown.innerHTML = `
    <div class="engine-dropdown-header car-dropdown-header">
      <button type="button" class="car-sort-tab ${carListSortMode === 'unsorted' ? 'active' : ''}" data-car-sort="unsorted">${ui.carSortUnsorted}</button>
      <button type="button" class="car-sort-tab ${carListSortMode === 'byType' ? 'active' : ''}" data-car-sort="byType">${ui.selectCarHeader}</button>
    </div>
    ${bodyHtml}
  `;

  dropdown.querySelectorAll('[data-car-sort]').forEach((sortBtn) => {
    sortBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextMode = sortBtn.getAttribute('data-car-sort');
      if (nextMode && nextMode !== carListSortMode) {
        carListSortMode = nextMode;
        renderDropdowns();
        setPopupOpen(btn, dropdown, true);
      }
    });
  });

  dropdown.querySelectorAll('.engine-option-btn').forEach((optBtn) => {
    optBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosenId = optBtn.getAttribute('data-car-id');
      if (side === 'left') {
        selectedLeftId = chosenId;
        selectedLeftEngineId = getBaseCarById(chosenId).defaultEngineId;
      } else {
        selectedRightId = chosenId;
        selectedRightEngineId = getBaseCarById(chosenId).defaultEngineId;
      }
      if (selectedLeftId && selectedRightId) {
        smashPickerForceOpen = false;
      }
      setPopupOpen(btn, dropdown, false);
      updateArena();
    });
  });
}

// Render Top Select Dropdowns (Grouped & Sorted by Car Type)
function renderDropdowns() {
  renderCarSelectorSide('left', selectedLeftId, selectedLeftEngineId);
  renderCarSelectorSide('right', selectedRightId, selectedRightEngineId);
}

function getEngineCategory(eng) {
  if (eng.fuelType) return eng.fuelType;
  const descriptor = `${eng.id} ${eng.engineBadge} ${(eng.engineSubLabel && eng.engineSubLabel.en) || ''}`;
  if (/hybrid|hsd/i.test(descriptor)) return 'hybrid';
  if (/\b(?:diesel|d-4d|i-dtec|tdi|tdci|hdi|cdi)\b/i.test(descriptor)) return 'diesel';
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
      if (selectedLeftId && selectedRightId) {
        smashPickerForceOpen = false;
      }
      setPopupOpen(btn, dropdown, false);
      updateArena();
    });
  });
}

// Render Car Selection Menu Button at bottom of center arena
function renderVerdictBanner() {
  const ui = t();
  const verdictBar = document.getElementById('duel-verdict-bar');
  if (!verdictBar) return;

  verdictBar.innerHTML = `
    <button type="button" class="verdict-grid-btn" id="back-to-grid-btn">${ui.backToGridBtn}</button>
  `;

  const backToGridBtn = document.getElementById('back-to-grid-btn');
  if (backToGridBtn) {
    backToGridBtn.addEventListener('click', () => {
      smashPickerForceOpen = true;
      updateArena();
    });
  }
}

// Update Static HUD Text for Current Language
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

  document.getElementById('index-classes-btn-label').textContent = ui.indexClassesBtn;
  document.getElementById('index-classes-popover-title').textContent = ui.indexClassesTitle;

  const weightBtnLabel = document.getElementById('weight-menu-btn-label');
  const weightPopoverTitle = document.getElementById('weight-popover-title');
  const weightResetBtn = document.getElementById('weight-reset-btn');
  if (weightBtnLabel) weightBtnLabel.textContent = ui.weightMenuBtn;
  if (weightPopoverTitle) weightPopoverTitle.textContent = ui.weightPopoverTitle;
  if (weightResetBtn) weightResetBtn.textContent = ui.weightResetBtn;
  if (typeof renderWeightEqualizer === 'function') renderWeightEqualizer();
}

let lightboxGallery = [];
let lightboxIndex = 1;
let lightboxCarName = '';

// Showroom angle maps (CAR_AVAILABLE_ANGLES, CAR_MIRRORED_ANGLES) live in cars-data.js

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
  const frontSideIdx = lightboxGallery.findIndex((g) => g.src === car.image);
  lightboxIndex = frontSideIdx >= 0 ? frontSideIdx : 0; // Default to Front-Side (same as main stage)
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

  const hasBuyerGuide =
    dossier &&
    ((Array.isArray(dossier.beforeYouBuy) && dossier.beforeYouBuy.length > 0) ||
      (Array.isArray(dossier.highMileage) && dossier.highMileage.length > 0));

  const buyerGuideHtml = hasBuyerGuide
    ? `
    <!-- Pre-Purchase Checklist & Click-to-Expand Future Repair Roadmap (100k–250k km) -->
    <div class="dossier-buyer-guide-wrap">
      <div class="dossier-card before-buy-card">
        <div class="dossier-card-title before-buy-title">
          <span>☑</span>
          <span>${ui.dossierBeforeYouBuy}</span>
        </div>
        <ul class="dossier-bullets-list">
          ${(dossier.beforeYouBuy || [])
            .map(
              (item) => `
            <li class="dossier-bullet-item buyer-check">
              <span class="buyer-check-box" aria-hidden="true">☐</span>
              <span>${item}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>

      ${
        dossier.highMileage && dossier.highMileage.length > 0
          ? `
      <div class="dossier-roadmap-accordion">
        <button type="button" class="dossier-roadmap-toggle-btn" id="dossier-roadmap-toggle" aria-expanded="false">
          <div class="roadmap-toggle-left">
            <div class="dossier-card-title high-mileage-title">
              <span>⏱</span>
              <span>${ui.dossierHighMileage}</span>
            </div>
            <div class="hm-tier-legend">
              <span class="hm-tier-chip is-yellow">! ${ui.dossierTierYellow}</span>
              <span class="hm-tier-chip is-orange">⚠ ${ui.dossierTierOrange}</span>
              <span class="hm-tier-chip is-red">❗ ${ui.dossierTierRed}</span>
            </div>
          </div>
          <span class="roadmap-toggle-cta">${ui.dossierShowRoadmap}</span>
        </button>

        <div class="dossier-roadmap-drawer" id="dossier-roadmap-drawer">
          <ul class="dossier-hm-list">
            ${dossier.highMileage
              .map((hm) => {
                const tier = hm.tier === 'red' || hm.tier === 'orange' ? hm.tier : 'yellow';
                const symbol = tier === 'red' ? '❗' : tier === 'orange' ? '⚠' : '!';
                return `
              <li class="dossier-hm-item tier-${tier}">
                <span class="hm-status-badge tier-${tier}" aria-hidden="true">${symbol}</span>
                <div class="hm-content">
                  <div class="hm-step-top">
                    <span class="hm-km-pill">${hm.km}</span>
                    <span class="hm-arrow">➔</span>
                    <span class="hm-action-text">${hm.action}</span>
                    <span class="hm-cost-pill">${hm.cost}</span>
                  </div>
                  <div class="hm-step-consequence">
                    <span class="hm-arrow-sub">↳ ${ui.dossierIfIgnored}</span>
                    <span class="hm-risk-text">${hm.ifIgnored}</span>
                    <span class="hm-damage-pill">${hm.damageCost}</span>
                  </div>
                </div>
              </li>
            `;
              })
              .join('')}
          </ul>
        </div>
      </div>
      `
          : ''
      }
    </div>
  `
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
        <span class="mini-p-badge ${side === 'left' ? 'p1-badge' : 'p2-badge'}">${side === 'left' ? 'C1' : 'C2'}</span>
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

    ${buyerGuideHtml}

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

  const roadmapToggle = document.getElementById('dossier-roadmap-toggle');
  const roadmapDrawer = document.getElementById('dossier-roadmap-drawer');
  if (roadmapToggle && roadmapDrawer) {
    roadmapToggle.addEventListener('click', () => {
      const isOpen = roadmapDrawer.classList.toggle('open');
      roadmapToggle.classList.toggle('open', isOpen);
      roadmapToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const ctaEl = roadmapToggle.querySelector('.roadmap-toggle-cta');
      if (ctaEl) {
        ctaEl.textContent = isOpen ? ui.dossierHideRoadmap : ui.dossierShowRoadmap;
      }
    });
  }

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

  if (viewportLeft && viewportRight) {
    const stage = document.querySelector('.duel-stage');
    const statsCard = document.querySelector('#stats-left .forza-stats-card');
    if (stage && statsCard) {
      const stageRect = stage.getBoundingClientRect();
      const statsRect = statsCard.getBoundingClientRect();
      const alignedTop = Math.max(52, Math.round(statsRect.top - stageRect.top));
      viewportLeft.style.paddingTop = `${alignedTop}px`;
      viewportRight.style.paddingTop = `${alignedTop}px`;
    }
  }

  const vsMedallion = document.getElementById('swap-cars-btn');
  const arena = document.querySelector('.versus-arena');
  const firstImgWrap = viewportLeft ? viewportLeft.querySelector('.car-image-wrapper') : null;
  if (vsMedallion && arena && firstImgWrap) {
    const arenaRect = arena.getBoundingClientRect();
    const imgRect = firstImgWrap.getBoundingClientRect();
    const gapAbovePictures = imgRect.top - arenaRect.top;
    const medallionHeight = vsMedallion.offsetHeight || 70;
    const centeredTop = Math.max(8, Math.round((gapAbovePictures - medallionHeight) / 2));
    vsMedallion.style.top = `${centeredTop}px`;
  }

  let maxTraitsHeight = 240;
  if (viewportLeft) {
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
const CAR_TYPE_DOT_COLORS = {
  subcompact: '#2dd4bf',
  hatchback: '#38bdf8',
  'hot-hatch': '#f97316',
  sedan: '#a78bfa',
  suv: '#ccff00'
};

function getSmashGridLabel(baseCar) {
  return baseCar.gridLabel || baseCar.shortTitle || baseCar.fullName;
}

function renderSmashPicker() {
  const ui = t();
  const titleEl = document.getElementById('smash-title');
  const hintEl = document.getElementById('smash-hint');
  const slotsBar = document.getElementById('smash-slots-bar');
  const gridEl = document.getElementById('smash-car-grid');
  if (!slotsBar || !gridEl) return;

  if (!selectedLeftId) activeRosterTarget = 'p1';
  else if (!selectedRightId) activeRosterTarget = 'p2';

  const bothSelected = Boolean(selectedLeftId && selectedRightId);
  if (titleEl) titleEl.textContent = ui.smashTitle;
  if (hintEl) hintEl.textContent = bothSelected ? ui.smashReadyHint : ui.smashPickingHint;

  const leftBase = selectedLeftId ? getBaseCarById(selectedLeftId) : null;
  const rightBase = selectedRightId ? getBaseCarById(selectedRightId) : null;

  slotsBar.innerHTML = `
    <div class="smash-slot-pill slot-p1 ${activeRosterTarget === 'p1' ? 'is-target' : ''}" data-slot="p1" role="button" tabindex="0">
      <span class="smash-slot-tag p1">C1</span>
      <span>${leftBase ? getSmashGridLabel(leftBase) : ui.chooseCarPlaceholder}</span>
      ${leftBase ? `<button type="button" class="smash-slot-clear" data-clear-slot="p1" title="${ui.smashClearSlot}">✕</button>` : ''}
    </div>
    <div class="smash-slot-pill slot-p2 ${activeRosterTarget === 'p2' ? 'is-target' : ''}" data-slot="p2" role="button" tabindex="0">
      <span class="smash-slot-tag p2">C2</span>
      <span>${rightBase ? getSmashGridLabel(rightBase) : ui.chooseCarPlaceholder}</span>
      ${rightBase ? `<button type="button" class="smash-slot-clear" data-clear-slot="p2" title="${ui.smashClearSlot}">✕</button>` : ''}
    </div>
  `;

  slotsBar.querySelectorAll('.smash-slot-pill').forEach((pill) => {
    pill.addEventListener('click', (e) => {
      if (e.target.closest('[data-clear-slot]')) return;
      activeRosterTarget = pill.getAttribute('data-slot') || 'p1';
      renderSmashPicker();
    });
    pill.addEventListener('keydown', (e) => {
      if (e.target.closest('[data-clear-slot]')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activeRosterTarget = pill.getAttribute('data-slot') || 'p1';
        renderSmashPicker();
      }
    });
  });

  slotsBar.querySelectorAll('[data-clear-slot]').forEach((clearBtn) => {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slot = clearBtn.getAttribute('data-clear-slot');
      if (slot === 'p1') {
        selectedLeftId = null;
        selectedLeftEngineId = null;
        activeRosterTarget = 'p1';
      } else {
        selectedRightId = null;
        selectedRightEngineId = null;
        activeRosterTarget = 'p2';
      }
      smashPickerForceOpen = false;
      updateArena();
    });
  });

  const orderedCars = [...CAR_ROSTER].sort(
    (a, b) => (a.gridOrder ?? Number(a.number)) - (b.gridOrder ?? Number(b.number))
  );

  gridEl.innerHTML = orderedCars.map((baseCar) => {
    const isP1 = baseCar.id === selectedLeftId;
    const isP2 = baseCar.id === selectedRightId;
    let stateClass = '';
    if (isP1 && isP2) stateClass = 'selected-both';
    else if (isP1) stateClass = 'selected-p1';
    else if (isP2) stateClass = 'selected-p2';

    const dotColor = CAR_TYPE_DOT_COLORS[getCarType(baseCar)] || '#38bdf8';
    const mirrorClass = (baseCar.imageFacing || 'right') === 'left' ? 'mirrored-car' : '';

    return `
      <button type="button" class="smash-car-tile ${stateClass}" data-smash-car-id="${baseCar.id}">
        <div class="smash-car-thumb-wrap">
          <img class="smash-car-thumb ${mirrorClass}" src="${baseCar.image}" alt="${getSmashGridLabel(baseCar)}" draggable="false" />
          <div class="smash-car-badges">
            ${isP1 ? '<span class="mini-p-badge p1-badge">C1</span>' : ''}
            ${isP2 ? '<span class="mini-p-badge p2-badge">C2</span>' : ''}
          </div>
        </div>
        <div class="smash-car-nameplate">
          <span class="smash-car-name">${getSmashGridLabel(baseCar)}</span>
          <span class="smash-car-type-dot" style="background:${dotColor}"></span>
        </div>
      </button>
    `;
  }).join('');

  gridEl.querySelectorAll('.smash-car-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const chosenId = tile.getAttribute('data-smash-car-id');
      const baseCar = getBaseCarById(chosenId);

      if (activeRosterTarget === 'p1') {
        selectedLeftId = chosenId;
        selectedLeftEngineId = baseCar.defaultEngineId;
        if (!selectedRightId) activeRosterTarget = 'p2';
      } else {
        selectedRightId = chosenId;
        selectedRightEngineId = baseCar.defaultEngineId;
        if (!selectedLeftId) activeRosterTarget = 'p1';
      }

      if (selectedLeftId && selectedRightId) {
        smashPickerForceOpen = false;
      }
      updateArena();
    });
  });
}

function updateArena() {
  const bothSelected = Boolean(selectedLeftId && selectedRightId);
  const showSmashGrid = !bothSelected || smashPickerForceOpen;

  const duelStage = document.querySelector('.duel-stage');
  const versusArena = document.getElementById('versus-arena');
  const smashStage = document.getElementById('smash-picker-stage');

  if (duelStage) duelStage.classList.toggle('awaiting-selection', !bothSelected);
  if (versusArena) versusArena.classList.toggle('awaiting-selection', showSmashGrid);
  if (smashStage) {
    smashStage.classList.toggle('is-hidden', !showSmashGrid);
    smashStage.setAttribute('aria-hidden', String(!showSmashGrid));
  }

  applyStaticTranslations();
  renderDropdowns();
  renderSmashPicker();

  if (!bothSelected) {
    const statsLeft = document.getElementById('stats-left');
    const statsRight = document.getElementById('stats-right');
    if (statsLeft) statsLeft.innerHTML = '';
    if (statsRight) statsRight.innerHTML = '';
    return;
  }

  const leftCar = getCarById(selectedLeftId, selectedLeftEngineId);
  const rightCar = getCarById(selectedRightId, selectedRightEngineId);

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

  if (smashAlignmentTimer) clearTimeout(smashAlignmentTimer);
  smashAlignmentTimer = setTimeout(() => {
    syncCarViewportAlignment();
  }, 430);

  // Render Car Selection Menu Button
  renderVerdictBanner();
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

function getEqCurveGeometry() {
  // 5 rows centered vertically at y = 16, 56, 96, 136, 176 in a 200x192 SVG viewBox
  const width = 200;
  const ys = [16, 56, 96, 136, 176];
  const pts = STAT_PILLARS.map((p, idx) => {
    const level = pillarWeights[p.id] || 3;
    const norm = (level - 1) / 4; // 0..1
    const x = norm * width;
    return { x, y: ys[idx] };
  });

  let linePath = `M ${pts[0].x.toFixed(1)} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const curr = pts[i];
    const next = pts[i + 1];
    const cy = ((curr.y + next.y) / 2).toFixed(1);
    linePath += ` C ${curr.x.toFixed(1)} ${cy}, ${next.x.toFixed(1)} ${cy}, ${next.x.toFixed(1)} ${next.y}`;
  }
  return { linePath };
}

function getEqFillSegment(level) {
  const pct = ((level - 1) / 4) * 100;
  if (pct >= 50) {
    return { left: 50, width: pct - 50 };
  }
  return { left: pct, width: 50 - pct };
}

function updateWeightEqualizerVisuals() {
  const isCustom = hasCustomPillarWeights();
  const toggleBtn = document.getElementById('weight-menu-toggle-btn');
  if (toggleBtn) {
    toggleBtn.classList.toggle('has-custom-weights', isCustom);
  }
  const resetBtn = document.getElementById('weight-reset-btn');
  if (resetBtn) {
    resetBtn.classList.toggle('has-custom-weights', isCustom);
  }

  const lineEl = document.getElementById('eq-curve-line');
  if (lineEl) {
    const { linePath } = getEqCurveGeometry();
    lineEl.setAttribute('d', linePath);
  }

  STAT_PILLARS.forEach((p) => {
    const row = document.querySelector(`.eq-row[data-pillar-id="${p.id}"]`);
    if (!row) return;
    const level = pillarWeights[p.id] || 3;
    const pct = ((level - 1) / 4) * 100;
    const seg = getEqFillSegment(level);
    const mult = WEIGHT_LEVEL_MULTIPLIERS[level] || 1.0;

    const fill = row.querySelector('.eq-h-fill');
    const dot = row.querySelector('.eq-h-thumb');
    const multEl = row.querySelector('.eq-row-mult');
    const rangeEl = row.querySelector('.eq-h-range');
    if (fill) {
      fill.style.left = `${seg.left}%`;
      fill.style.width = `${seg.width}%`;
    }
    if (dot) dot.style.left = `${pct}%`;
    if (rangeEl) rangeEl.value = String(level);
    if (multEl) multEl.textContent = `${mult.toFixed(2).replace(/\.00$/, '.0').replace(/0$/, '')}×`;
    row.classList.toggle('is-boosted', level > 3);
    row.classList.toggle('is-reduced', level < 3);
  });
}

function renderWeightEqualizer() {
  const board = document.getElementById('weight-eq-board');
  if (!board) return;
  if (board.dataset.lang === currentLang && board.querySelector('.eq-rows-wrap')) {
    updateWeightEqualizerVisuals();
    return;
  }
  board.dataset.lang = currentLang;
  const ui = t();
  const { linePath } = getEqCurveGeometry();

  const rowsHtml = STAT_PILLARS.map((p) => {
    const level = pillarWeights[p.id] || 3;
    const pct = ((level - 1) / 4) * 100;
    const seg = getEqFillSegment(level);
    const mult = WEIGHT_LEVEL_MULTIPLIERS[level] || 1.0;
    const multText = `${mult.toFixed(2).replace(/\.00$/, '.0').replace(/0$/, '')}×`;
    const stateCls = level > 3 ? 'is-boosted' : level < 3 ? 'is-reduced' : '';
    const shortName = p.label[currentLang] || p.label.en;
    const iconSvg = PILLAR_ICONS[p.id] || '';

    return `
      <div class="eq-row ${stateCls}" data-pillar-id="${p.id}">
        <div class="eq-row-label" title="${shortName}">
          <span class="eq-col-icon">${iconSvg}</span>
          <span class="eq-col-name">${shortName}</span>
        </div>
        <div class="eq-h-track-wrap">
          <div class="eq-h-ticks" aria-hidden="true">
            <span class="eq-snap-tick"></span>
            <span class="eq-snap-tick"></span>
            <span class="eq-snap-tick is-mid"></span>
            <span class="eq-snap-tick"></span>
            <span class="eq-snap-tick"></span>
          </div>
          <div class="eq-h-rail" aria-hidden="true">
            <div class="eq-h-fill" style="left: ${seg.left}%; width: ${seg.width}%;"></div>
          </div>
          <div class="eq-h-thumb" style="left: ${pct}%;" aria-hidden="true"></div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value="${level}"
            class="eq-h-range"
            data-pillar-id="${p.id}"
            aria-label="${shortName}"
          />
        </div>
        <div class="eq-row-mult">${multText}</div>
      </div>
    `;
  }).join('');

  board.innerHTML = `
    <div class="eq-scale-header">
      <span></span>
      <div class="eq-scale-ticks" aria-hidden="true">
        <span></span>
        <span class="eq-axis-mid">${ui.weightDefaultLabel}</span>
        <span></span>
      </div>
      <span></span>
    </div>
    <div class="eq-rows-wrap">
      <svg class="eq-vcurve-svg" viewBox="0 0 200 192" preserveAspectRatio="none" aria-hidden="true">
        <path id="eq-curve-line" class="eq-curve-line" d="${linePath}"></path>
      </svg>
      ${rowsHtml}
    </div>
    <div class="eq-hint-bar">${ui.weightHint}</div>
  `;

  board.querySelectorAll('.eq-h-track-wrap').forEach((trackWrap) => {
    const row = trackWrap.closest('.eq-row');
    const pid = row ? row.getAttribute('data-pillar-id') : null;
    if (!pid) return;

    const applyClientX = (clientX) => {
      const rect = trackWrap.getBoundingClientRect();
      if (!rect.width) return;
      const norm = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const val = Math.round(norm * 4) + 1;
      if (pillarWeights[pid] !== val) {
        pillarWeights[pid] = val;
        savePillarWeights();
        updateWeightEqualizerVisuals();
        updateArena();
      }
    };

    trackWrap.addEventListener('dragstart', (e) => e.preventDefault());

    trackWrap.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      applyClientX(e.clientX);

      const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();
        applyClientX(moveEvt.clientX);
      };

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('blur', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('blur', onMouseUp);
    });

    trackWrap.addEventListener('touchstart', (e) => {
      if (!e.touches || !e.touches.length) return;
      e.preventDefault();
      e.stopPropagation();
      applyClientX(e.touches[0].clientX);

      const onTouchMove = (moveEvt) => {
        if (!moveEvt.touches || !moveEvt.touches.length) return;
        moveEvt.preventDefault();
        applyClientX(moveEvt.touches[0].clientX);
      };

      const onTouchEnd = () => {
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        window.removeEventListener('touchcancel', onTouchEnd);
      };

      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);
      window.addEventListener('touchcancel', onTouchEnd);
    }, { passive: false });
  });

  board.querySelectorAll('.eq-h-range').forEach((input) => {
    input.addEventListener('input', (e) => {
      const pid = e.target.getAttribute('data-pillar-id');
      const val = Number(e.target.value);
      if (pid && [1, 2, 3, 4, 5].includes(val) && pillarWeights[pid] !== val) {
        pillarWeights[pid] = val;
        savePillarWeights();
        updateWeightEqualizerVisuals();
        updateArena();
      }
    });
  });

  updateWeightEqualizerVisuals();
}

function initWeightEqualizerMenu() {
  const toggleBtn = document.getElementById('weight-menu-toggle-btn');
  const popover = document.getElementById('weight-menu-popover');
  const closeBtn = document.getElementById('weight-popover-close');
  const resetBtn = document.getElementById('weight-reset-btn');
  const wrapper = document.getElementById('weight-menu-wrapper');
  if (!toggleBtn || !popover || !wrapper) return;

  renderWeightEqualizer();

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isCurrentlyOpen = popover.classList.contains('open');
    setPopupOpen(toggleBtn, popover, !isCurrentlyOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPopupOpen(toggleBtn, popover, false);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      pillarWeights = { ...DEFAULT_PILLAR_WEIGHTS };
      savePillarWeights();
      renderWeightEqualizer();
      updateArena();
    });
  }

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      setPopupOpen(toggleBtn, popover, false);
    }
  });
}

function initCarSelectorMenus() {
  const leftWrapper = document.getElementById('car-wrapper-left');
  const leftBtn = document.getElementById('car-btn-left');
  const leftDropdown = document.getElementById('car-dropdown-left');

  const rightWrapper = document.getElementById('car-wrapper-right');
  const rightBtn = document.getElementById('car-btn-right');
  const rightDropdown = document.getElementById('car-dropdown-right');

  if (!leftBtn || !rightBtn || !leftDropdown || !rightDropdown) return;

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
    if (leftWrapper && !leftWrapper.contains(e.target)) {
      setPopupOpen(leftBtn, leftDropdown, false);
    }
    if (rightWrapper && !rightWrapper.contains(e.target)) {
      setPopupOpen(rightBtn, rightDropdown, false);
    }
  });
}

// Initialize Event Listeners
function initCarDuel() {
  initHudUtilityMenus();
  initCarSelectorMenus();
  initEngineSelectorMenus();
  initClassIndexMenu();
  initWeightEqualizerMenu();

  // Close open market price popovers on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.price-info-anchor')) {
      document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
    }
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
      document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
      setPopupOpen(
        document.getElementById('car-btn-left'),
        document.getElementById('car-dropdown-left'),
        false
      );
      setPopupOpen(
        document.getElementById('car-btn-right'),
        document.getElementById('car-dropdown-right'),
        false
      );
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
      setPopupOpen(
        document.getElementById('weight-menu-toggle-btn'),
        document.getElementById('weight-menu-popover'),
        false
      );
    }
  });

  window.addEventListener('resize', syncCarViewportAlignment);

  updateArena();
}

document.addEventListener('DOMContentLoaded', initCarDuel);
