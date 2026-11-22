// ============================================================================
// CAR DUEL — Two-Level 5-Pillar Head-to-Head Car Comparison System
// Full Multi-Language (EN / DE / RU) & Dark/Light Studio Theme Support
// ============================================================================

const UI_TRANSLATIONS = {
  en: {
    code: 'EN',
    opponentP2: 'OPPONENT',
    brandSubtitle: 'AUTOMOTIVE SHOWROOM',
    navShowroom: 'Showroom',
    navVehicle: 'Vehicle',
    navCompare: 'Compare',
    compareNeedTwoCars: 'Select two vehicles first',
    themeToggleTitle: 'Toggle Dark / Light Theme',
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
    indexClassesBtn: 'Index',
    indexClassesTitle: 'INDEX CLASSES',
    weightMenuBtn: 'Weights',
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
    dossierStrengths: 'Key Strengths',
    dossierWatchouts: 'Watch-Outs & Trade-Offs',
    dossierBeforeYouBuy: 'Before You Buy:',
    dossierHighMileage: 'Service, Repair & Cost Roadmap (0 – 250,000 km)',
    dossierIfIgnored: 'If ignored:',
    dossierTierYellow: 'Routine',
    dossierTierOrange: 'Watch-Out',
    dossierTierRed: 'Critical',
    dossierShowRoadmap: 'Show Roadmap ▾',
    dossierHideRoadmap: 'Hide Roadmap ▴',
    dossierOpponentContrast: 'Head-to-Head Opponent Contrast',
    dossierInspectBtn: 'View Category Details',
    dossierCriticalFlaws: 'Critical Flaws & Failure Risks',
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
    outlookSteady: 'Steady • Predictable Curve',
    priceCurveTitle: 'Value & Depreciation Curve',
    priceCurveHint: 'Hover points or rows to inspect',
    homeKicker: 'AUTOMOTIVE SHOWDOWN',
    homeTitle: 'HEAD-TO-HEAD CAR COMPARISON',
    homeIntro: 'Pick two contenders, choose their engines, and put them head-to-head across {pillars} categories and {ratings} ratings. Adjust your priority weights to match what matters most and find the car that suits you best.',
    homeStartBtn: 'CHOOSE YOUR CONTENDERS',
    homeRosterMeta: '{cars} Vehicles • Multiple Engine Variants • Custom Priority Weights',
    homeBrandTooltip: 'Return to Homepage',
    buyerFitBtn: 'BUYER FIT — WHO IS THIS FOR?',
    buyerFitCategory: 'BUYER FIT & PRACTICAL SUMMARY',
    buyerFitIdealTitle: 'Great Fit For',
    buyerFitNotIdealTitle: 'Rather Not For',
    searchPlaceholder: 'Search make, model, engine...',
    filterAll: 'All Models',
    sortLabel: 'Sort',
    sortCurated: 'Unsorted',
    sortScore: 'Highest Rated',
    sortPrice: 'Lowest Used Price',
    sortPower: 'Most Power',
    sortName: 'Name A–Z',
    lineupAvgTitle: 'Lineup Average',
    medianUsedPriceTitle: 'Median Used Market Price',
    engineSingular: 'engine',
    enginesCount: 'engines',
    noResults: 'No models match your current filter.',
    searchHelpTooltip: 'Search methods & examples',
    searchHelpTitle: 'SEARCH METHODS',
    searchHelpHint: 'Click any example to try',
    searchHelpFooter: 'Combine terms freely (e.g. Honda Diesel 2010-2014).',
    searchMethodBrand: 'Brand / Make',
    searchMethodModel: 'Model',
    searchMethodEngine: 'Engine / Code',
    searchMethodYear: 'Year / Range',
    searchMethodPower: 'Power',
    searchMethodPrice: 'Used Price',
    searchMethodFuel: 'Fuel / Gearbox',
    searchMethodDrive: 'Drive / Body',
    searchMethodTier: 'Tier / Combo',
    searchExPower1: '150+ HP',
    searchExPower2: '100-150 HP',
    searchExFuel1: 'Petrol',
    searchExFuel2: 'Automatic',
    searchExTier: 'A-Class',
    searchExCombo: 'Honda Diesel'
  },
  de: {
    code: 'DE',
    opponentP2: 'GEGNER',
    brandSubtitle: 'AUTOMOBIL-SHOWROOM',
    navShowroom: 'Showroom',
    navVehicle: 'Fahrzeug',
    navCompare: 'Vergleich',
    compareNeedTwoCars: 'Wähle zuerst zwei Fahrzeuge aus',
    themeToggleTitle: 'Hell / Dunkel wechseln',
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
    indexClassesBtn: 'Index',
    indexClassesTitle: 'INDEX-KLASSEN',
    weightMenuBtn: 'Gewichtung',
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
    dossierStrengths: 'Stärken & Vorteile',
    dossierWatchouts: 'Schwachstellen & Hinweise',
    dossierBeforeYouBuy: 'Vor dem Kauf prüfen:',
    dossierHighMileage: 'Wartungs-, Reparatur- & Kosten-Fahrplan (0 – 250.000 km)',
    dossierIfIgnored: 'Wenn ignoriert:',
    dossierTierYellow: 'Wartung',
    dossierTierOrange: 'Wichtig',
    dossierTierRed: 'Kritisch',
    dossierShowRoadmap: 'Fahrplan anzeigen ▾',
    dossierHideRoadmap: 'Fahrplan ausblenden ▴',
    dossierOpponentContrast: 'Direkter Vergleich mit dem Gegner',
    dossierInspectBtn: 'Kategorie-Details ansehen',
    dossierCriticalFlaws: 'Kritische Schwachstellen & Risiken',
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
    outlookSteady: 'Solide • Planbarer Wertverlauf',
    priceCurveTitle: 'Wert- & Wertverlustkurve',
    priceCurveHint: 'Punkte oder Zeilen hovern',
    homeKicker: 'KOPF-AN-KOPF',
    homeTitle: 'WELCHES AUTO PASST ZU DIR?',
    homeIntro: 'Schicke zwei Autos ins direkte Duell über {pillars} Kategorien und {ratings} Einzelwertungen. Gewichte, was für dich zählt, und finde deinen persönlichen Sieger.',
    homeStartBtn: 'MODELLE WÄHLEN',
    homeRosterMeta: '{cars} FAHRZEUGE • MEHRERE MOTORISIERUNGEN • EIGENE GEWICHTUNG',
    homeBrandTooltip: 'Zurück zur Startseite',
    buyerFitBtn: 'FÜR WEN GEEIGNET? • FAZIT',
    buyerFitCategory: 'KAUFBERATUNG & ZIELGRUPPE',
    buyerFitIdealTitle: 'Ideal geeignet für',
    buyerFitNotIdealTitle: 'Eher nicht geeignet für',
    searchPlaceholder: 'Marke, Modell oder Motor suchen...',
    filterAll: 'Alle Modelle',
    sortLabel: 'Sortieren',
    sortCurated: 'Unsortiert',
    sortScore: 'Beste Wertung',
    sortPrice: 'Günstigster Gebrauchtpreis',
    sortPower: 'Meiste Leistung',
    sortName: 'Name A–Z',
    lineupAvgTitle: 'Baureihen-Durchschnitt',
    medianUsedPriceTitle: 'Median-Gebrauchtmarktpreis',
    engineSingular: 'Motor',
    enginesCount: 'Motoren',
    noResults: 'Keine Fahrzeuge entsprechen deiner Suche.',
    searchHelpTooltip: 'Suchmethoden & Beispiele',
    searchHelpTitle: 'SUCHMETHODEN',
    searchHelpHint: 'Beispiel anklicken zum Testen',
    searchHelpFooter: 'Begriffe frei kombinierbar (z. B. Honda Diesel 2010-2014).',
    searchMethodBrand: 'Marke',
    searchMethodModel: 'Modell',
    searchMethodEngine: 'Motor / Code',
    searchMethodYear: 'Baujahr / Spanne',
    searchMethodPower: 'Leistung',
    searchMethodPrice: 'Gebrauchtpreis',
    searchMethodFuel: 'Antriebsart / Getr.',
    searchMethodDrive: 'Antrieb / Karosserie',
    searchMethodTier: 'Klasse / Kombi',
    searchExPower1: '150+ PS',
    searchExPower2: '100-150 PS',
    searchExFuel1: 'Benzin',
    searchExFuel2: 'Automatik',
    searchExTier: 'A-Klasse',
    searchExCombo: 'Honda Diesel'
  },
  ru: {
    code: 'RU',
    opponentP2: 'СОПЕРНИК',
    brandSubtitle: 'АВТОМОБИЛЬНЫЙ ШОУРУМ',
    navShowroom: 'Шоурум',
    navVehicle: 'Автомобиль',
    navCompare: 'Сравнение',
    compareNeedTwoCars: 'Сначала выберите два автомобиля',
    themeToggleTitle: 'Сменить тему',
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
    indexClassesBtn: 'Индекс',
    indexClassesTitle: 'КЛАССЫ ИНДЕКСА',
    weightMenuBtn: 'Веса',
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
    dossierStrengths: 'Ключевые преимущества',
    dossierWatchouts: 'Слабые места и нюансы',
    dossierBeforeYouBuy: 'Перед покупкой:',
    dossierHighMileage: 'План обслуживания, ремонтов и расходов (0 – 250 000 км)',
    dossierIfIgnored: 'Если запустить:',
    dossierTierYellow: 'Планово',
    dossierTierOrange: 'Важно',
    dossierTierRed: 'Критично',
    dossierShowRoadmap: 'Показать план ▾',
    dossierHideRoadmap: 'Скрыть план ▴',
    dossierOpponentContrast: 'Сравнение с соперником',
    dossierInspectBtn: 'Подробнее о категории',
    dossierCriticalFlaws: 'Критические слабые места и риски',
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
    outlookSteady: 'Умеренное снижение • Предсказуемо',
    priceCurveTitle: 'Кривая стоимости и амортизации',
    priceCurveHint: 'Наведите на точки или строки',
    homeKicker: 'АВТОМОБИЛЬНАЯ ДУЭЛЬ',
    homeTitle: 'ПРЯМАЯ ДУЭЛЬ АВТОМОБИЛЕЙ',
    homeIntro: 'Выберите двух претендентов, укажите их двигатели и сравните их лицом к лицу по {pillars} категориям и {ratings} оценкам. Настройте приоритеты под то, что для вас важнее всего, и найдите автомобиль, который подходит именно вам.',
    homeStartBtn: 'ВЫБЕРИТЕ АВТОМОБИЛИ',
    homeRosterMeta: '{cars} автомобилей • Разные двигатели • Настройка приоритетов',
    homeBrandTooltip: 'Вернуться на главную',
    buyerFitBtn: 'КОМУ ПОДОЙДЁТ? • ИТОГ',
    buyerFitCategory: 'КОМУ ПОДОЙДЁТ АВТОМОБИЛЬ',
    buyerFitIdealTitle: 'Отлично подойдёт',
    buyerFitNotIdealTitle: 'Скорее не подойдёт',
    searchPlaceholder: 'Поиск марки, модели, мотора...',
    filterAll: 'Все модели',
    sortLabel: 'Сортировка',
    sortCurated: 'Без сортировки',
    sortScore: 'Лучший рейтинг',
    sortPrice: 'Ниже цена б/у',
    sortPower: 'Больше мощность',
    sortName: 'По алфавиту',
    lineupAvgTitle: 'Средний рейтинг линейки',
    medianUsedPriceTitle: 'Медианная цена на рынке б/у',
    engineSingular: 'мотор',
    engineFew: 'мотора',
    enginesCount: 'моторов',
    noResults: 'По вашему запросу ничего не найдено.',
    searchHelpTooltip: 'Способы поиска и примеры',
    searchHelpTitle: 'СПОСОБЫ ПОИСКА',
    searchHelpHint: 'Нажмите на пример для теста',
    searchHelpFooter: 'Комбинируйте запросы (напр. Honda Дизель 2010-2014).',
    searchMethodBrand: 'Марка',
    searchMethodModel: 'Модель',
    searchMethodEngine: 'Мотор / Код',
    searchMethodYear: 'Год / Период',
    searchMethodPower: 'Мощность',
    searchMethodPrice: 'Цена б/у',
    searchMethodFuel: 'Топливо / КПП',
    searchMethodDrive: 'Привод / Кузов',
    searchMethodTier: 'Класс / Комбо',
    searchExPower1: '150+ л.с.',
    searchExPower2: '100-150 л.с.',
    searchExFuel1: 'Бензин',
    searchExFuel2: 'Автомат',
    searchExTier: 'A-Класс',
    searchExCombo: 'Honda Дизель'
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
      en: 'Measures long-term dependability across engine, gearbox, rust protection, and electronics (average of 4 ratings, max 10.0). Crucial for avoiding surprise workshop bills on used cars.',
      de: 'Bewertet die Langzeit-Zuverlässigkeit bei Motor, Getriebe, Rostschutz und Elektrik (Schnitt aus 4 Wertungen, max. 10,0). Entscheidend, um teure Werkstatt-Überraschungen zu vermeiden.',
      ru: 'Оценивает долгосрочную надёжность двигателя, КПП, защиты от коррозии и электрики (среднее из 4 оценок, макс. 10.0). Главный ориентир, чтобы избежать дорогих ремонтов.'
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
      en: 'Covers ride smoothness, highway quietness, interior build quality, visibility, and crash/assist safety (average of 4 ratings, max 10.0). Shows how pleasant and secure the car feels every day.',
      de: 'Bewertet Federung, Geräuschdämmung, Materialqualität, Rundumsicht sowie Crash- & Assistenzsicherheit (Schnitt aus 4 Wertungen, max. 10,0). Zeigt, wie angenehm und sicher sich der Alltag anfühlt.',
      ru: 'Оценивает плавность хода, шумоизоляцию, качество салона, обзорность и безопасность (среднее из 4 оценок, макс. 10.0). Показывает уровень уюта и защищённости каждый день.'
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
      en: 'Evaluates rear passenger room, boot capacity, seat folding flexibility, payload, and towing limits (average of 3 ratings, max 10.0). Key for families, road trips, and hauling gear.',
      de: 'Bewertet Fond-Platz, Kofferraumvolumen, Sitz-Variabilität, Zuladung und Anhängelast (Schnitt aus 3 Wertungen, max. 10,0). Entscheidend für Familie, Urlaub und Transporte.',
      ru: 'Оценивает простор для пассажиров, объём багажника, трансформацию сидений, грузоподъёмность и буксировку (среднее из 3 оценок, макс. 10.0). Важно для семьи и путешествий.'
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
      en: 'Rates 0–100 sprint, mid-range overtaking torque, cornering composure, and braking distance (average of 4 ratings, max 10.0). Reflects both driving fun and effortless highway reserves.',
      de: 'Bewertet Sprint (0–100), Durchzug beim Überholen, Kurvenverhalten und Bremsleistung (Schnitt aus 4 Wertungen, max. 10,0). Spiegelt Fahrspaß ebenso wie souveräne Überholreserven wider.',
      ru: 'Оценивает разгон 0–100, тягу на обгонах, управляемость и эффективность тормозов (среднее из 4 оценок, макс. 10.0). Показывает запас динамики и удовольствие от вождения.'
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
      en: 'Tracks real-world fuel economy, road tax & insurance tier, routine service costs, and resale value retention (average of 4 ratings, max 10.0). Shows what the car truly costs to own over time.',
      de: 'Bewertet Praxisverbrauch, Steuer & Versicherung, Wartungs-/Reparaturkosten sowie Werterhalt (Schnitt aus 4 Wertungen, max. 10,0). Zeigt, was das Auto im Alltag langfristig wirklich kostet.',
      ru: 'Оценивает реальный расход топлива, налоги и страховку, стоимость ТО и сохранность цены (среднее из 4 оценок, макс. 10.0). Показывает реальную стоимость владения авто.'
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
          en: 'Annual road tax (CO2/displacement), insurance cost tier & Euro emissions zone status',
          de: 'Steuer & Versicherung (CO2/Hubraum, Tarifniveau) & Euro-Abgasnorm / Umweltzone',
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

const SUB_STAT_SPEC_ROWS = {
  powertrainDurability: [
    { key: 'engineName', label: { en: 'Engine', de: 'Motor', ru: 'Двигатель' } },
    { key: 'forcedInduction', label: { en: 'Turbo / E-Assist', de: 'Turbo / E-Motor', ru: 'Турбо / Эл. мотор' } },
    { key: 'injection', label: { en: 'Injection', de: 'Einspritzung', ru: 'Впрыск' } }
  ],
  transmissionDriveline: [
    { key: 'gearbox', label: { en: 'Gearbox', de: 'Getriebe', ru: 'КПП' } },
    { key: 'clutchDmf', label: { en: 'Clutch / DMF', de: 'Kupplung / ZMS', ru: 'Сцепление / Мах.' } },
    { key: 'driveline', label: { en: 'Driveline', de: 'Antrieb', ru: 'Привод' } }
  ],
  buildQualityRust: [
    { key: 'rustProtection', label: { en: 'Rust Protection', de: 'Rostschutz', ru: 'Антикор' } },
    { key: 'suspensionWear', label: { en: 'Suspension', de: 'Fahrwerk', ru: 'Подвеска' } }
  ],
  electronicsReliability: [
    { key: 'starterAlternator', label: { en: 'Starter / Alt.', de: 'Anlasser / LiMa', ru: 'Стартер / Ген.' } },
    { key: 'electronicsRisk', label: { en: 'Electronics', de: 'Elektrik', ru: 'Электрика' } }
  ],
  rideNoiseComfort: [
    { key: 'rideTuning', label: { en: 'Ride Tuning', de: 'Federung', ru: 'Плавность' } },
    { key: 'highwayNoise', label: { en: 'Noise (130 km/h)', de: 'Lärm (130 km/h)', ru: 'Шум (130 км/ч)' } }
  ],
  interiorQualityFeatures: [
    { key: 'cabinMaterials', label: { en: 'Materials', de: 'Materialien', ru: 'Материалы' } },
    { key: 'controls', label: { en: 'Controls', de: 'Bedienung', ru: 'Управление' } }
  ],
  visibilityManeuverability: [
    { key: 'turningCircle', label: { en: 'Turning Circle', de: 'Wendekreis', ru: 'Разворот' } },
    { key: 'visibility', label: { en: 'Visibility', de: 'Rundumsicht', ru: 'Обзорность' } }
  ],
  safetyProtection: [
    { key: 'euroNcap', label: { en: 'Euro NCAP', de: 'Euro NCAP', ru: 'Euro NCAP' } },
    { key: 'safetyTech', label: { en: 'Safety Tech', de: 'Assistenten', ru: 'Ассистенты' } }
  ],
  passengerSpaceErgonomics: [
    { key: 'rearRoom', label: { en: 'Rear Space', de: 'Fond-Platz', ru: 'Места сзади' } },
    { key: 'isofixEntry', label: { en: 'ISOFIX / Entry', de: 'ISOFIX / Einstieg', ru: 'ISOFIX / Посадка' } }
  ],
  interiorBootSpace: [
    { key: 'bootVolume', label: { en: 'Boot Volume', de: 'Kofferraum', ru: 'Багажник' } },
    { key: 'seatUtility', label: { en: 'Seat Folding', de: 'Sitzkonzept', ru: 'Трансформация' } }
  ],
  payloadTowing: [
    { key: 'payloadRoof', label: { en: 'Payload / Roof', de: 'Zuladung / Dach', ru: 'Нагрузка / Крыша' } },
    { key: 'towingBraked', label: { en: 'Towing (Braked)', de: 'Anhängelast', ru: 'Прицеп (торм.)' } }
  ],
  accelerationOvertaking: [
    { key: 'sprint0100', label: { en: '0–100 km/h', de: '0–100 km/h', ru: '0–100 км/ч' } },
    { key: 'topSpeed', label: { en: 'Top Speed', de: 'Vmax', ru: 'Макс. скорость' } }
  ],
  midRangeTorquePassing: [
    { key: 'peakTorque', label: { en: 'Peak Torque', de: 'Drehmoment', ru: 'Момент' } },
    { key: 'passingPunch', label: { en: 'Passing Punch', de: 'Durchzug', ru: 'Эластичность' } }
  ],
  handlingAgility: [
    { key: 'chassisFeel', label: { en: 'Chassis Feel', de: 'Kurvenverhalten', ru: 'Шасси' } },
    { key: 'tractionDiff', label: { en: 'Traction / Diff', de: 'Traktion / Diff', ru: 'Зацеп / Дифф.' } }
  ],
  brakingPerformance: [
    { key: 'braking1000', label: { en: '100–0 km/h', de: '100–0 km/h', ru: '100–0 км/ч' } },
    { key: 'brakeSetup', label: { en: 'Brake Setup', de: 'Bremsanlage', ru: 'Тормоза' } }
  ],
  efficiencyFuel: [
    { key: 'realWorldFuel', label: { en: 'Real Fuel', de: 'Praxisverbrauch', ru: 'Реал. расход' } },
    { key: 'tankRange', label: { en: 'Tank / Range', de: 'Tank / Reichw.', ru: 'Бак / Запас' } }
  ],
  taxInsuranceNorm: [
    { key: 'euroNorm', label: { en: 'Euro Norm', de: 'Abgasnorm', ru: 'Эко-норма' } },
    { key: 'taxInsurance', label: { en: 'Tax & Insurance', de: 'Steuer & Vers.', ru: 'Налог и страх.' } }
  ],
  maintenanceRepairCosts: [
    { key: 'timingDrive', label: { en: 'Timing Drive', de: 'Steuerung', ru: 'Привод ГРМ' } },
    { key: 'serviceWear', label: { en: 'Service & Wear', de: 'Wartung & Teile', ru: 'ТО и расходн.' } }
  ],
  depreciationResale: [
    { key: 'valueRetention', label: { en: 'Value Retention', de: 'Werterhalt', ru: 'Сохр. цены' } },
    { key: 'resaleDemand', label: { en: 'Resale Demand', de: 'Nachfrage', ru: 'Ликвидность' } }
  ]
};

// Reusable Trilingual Spec Tokens (@token) for DRY cars-data.js entries
const SPEC_TOKENS = {
  // Forced Induction / E-Assist
  '@na': { en: '✕ Turbo / E-Motor', de: '✕ Turbo / E-Motor', ru: '✕ Турбо / Эл. мотор' },
  '@turbo': { en: '✓ Turbo · ✕ E-Motor', de: '✓ Turbo · ✕ E-Motor', ru: '✓ Турбо · ✕ Эл. мотор' },
  '@twinTurbo': { en: '✓ Twin-Turbo · ✕ E-Motor', de: '✓ Biturbo · ✕ E-Motor', ru: '✓ Битурбо · ✕ Эл. мотор' },
  '@supercharger': { en: '✓ Supercharger · ✕ E-Motor', de: '✓ Kompressor · ✕ E-Motor', ru: '✓ Компрессор · ✕ Эл. мотор' },
  '@hybridEMotor': { en: '✓ E-Motor · ✕ Turbo', de: '✓ E-Motor · ✕ Turbo', ru: '✓ Эл. мотор · ✕ Турбо' },
  '@evOnly': { en: '✓ E-Motor Only', de: '✓ Reiner E-Antrieb', ru: '✓ Только электромотор' },

  // Fuel Injection
  '@port': { en: '✓ Port (Indirect)', de: '✓ Saugrohr (Indirekt)', ru: '✓ Распред. (непрямой)' },
  '@direct': { en: '✓ Direct Injection', de: '✓ Direkteinspritzung', ru: '✓ Прямой впрыск' },
  '@dualInj': { en: '✓ Dual (Port + Direct)', de: '✓ Dual (Saugrohr + Direkt)', ru: '✓ Комбин. (прям.+распр.)' },
  '@commonRail': { en: '✓ Common-Rail DI', de: '✓ Common-Rail Direkt', ru: '✓ Common-Rail прямой' },
  '@pumpDuse': { en: '✓ Pumpe-Düse (PD)', de: '✓ Pumpe-Düse (PD)', ru: '✓ Насос-форсунки (PD)' },
  '@noInjEv': { en: '✕ None (EV)', de: '✕ Keine (E-Auto)', ru: '✕ Нет (электро)' },

  // Gearboxes
  '@manual5': { en: '5-Speed Manual', de: '5-Gang Schaltgetriebe', ru: '5-ст. Механика' },
  '@manual6': { en: '6-Speed Manual', de: '6-Gang Schaltgetriebe', ru: '6-ст. Механика' },
  '@eCvt': { en: 'Planetary e-CVT', de: 'Planeten-e-CVT', ru: 'Планетарный e-CVT' },
  '@cvt': { en: 'CVT Automatic', de: 'CVT-Automatik', ru: 'Вариатор CVT' },
  '@auto5': { en: '5-Speed Torque Auto', de: '5-Gang Wandler', ru: '5-ст. Автомат' },
  '@auto6': { en: '6-Speed Torque Auto', de: '6-Gang Wandler', ru: '6-ст. Автомат' },
  '@auto7': { en: '7-Speed Torque Auto', de: '7-Gang Wandler', ru: '7-ст. Автомат' },
  '@dsg6Wet': { en: '6-Speed Wet DSG', de: '6-Gang Nass-DSG', ru: '6-ст. Мокрый DSG' },
  '@dsg7Dry': { en: '7-Speed Dry DSG', de: '7-Gang Trocken-DSG', ru: '7-ст. Сухой DSG' },
  '@dsg7Wet': { en: '7-Speed Wet DSG', de: '7-Gang Nass-DSG', ru: '7-ст. Мокрый DSG' },

  // Clutch / DMF
  '@noClutch': { en: '✕ No Clutch / DMF', de: '✕ Ohne Kupplung/ZMS', ru: '✕ Без сцепл. и мах.' },
  '@singleClutch': { en: '✓ Single Clutch (✕ DMF)', de: '✓ Kupplung (✕ ZMS)', ru: '✓ Сцепление (✕ ДММ)' },
  '@clutchDmf': { en: '✓ Clutch + DMF', de: '✓ Kupplung + ZMS', ru: '✓ Сцепление + ДММ' },
  '@torqueConv': { en: '✓ Torque Converter', de: '✓ Drehmomentwandler', ru: '✓ Гидротрансформатор' },
  '@dualClutchWet': { en: '✓ Wet Dual-Clutch + DMF', de: '✓ Nass-DKG + ZMS', ru: '✓ Мокрый робот + ДММ' },
  '@dualClutchDry': { en: '✓ Dry Dual-Clutch', de: '✓ Trocken-DKG', ru: '✓ Сухой робот' },

  // Driveline
  '@awdHaldex': { en: 'AWD (Haldex)', de: 'Allrad (Haldex)', ru: 'Полный (Haldex)' },
  '@awdDualPump': { en: 'AWD (Dual-Pump)', de: 'Allrad (Dual-Pump)', ru: 'Полный (Dual-Pump)' },
  '@awdOnDemand': { en: 'AWD (On-Demand)', de: 'Allrad (Zuschaltbar)', ru: 'Полный (подключ.)' },
  '@awdFull': { en: 'AWD (Permanent)', de: 'Allrad (Permanent)', ru: 'Полный (постоянный)' },

  // Rust / Suspension / Electrics
  '@rustVeryGood': { en: 'Very Good (Galvanized)', de: 'Sehr gut (Verzinkt)', ru: 'Отличная (оцинковка)' },
  '@rustGood': { en: 'Good (Galvanized)', de: 'Gut (Verzinkt)', ru: 'Хорошая (оцинковка)' },
  '@rustWatch': { en: 'Average (Check Underbody)', de: 'Mittel (Unterboden prüfen)', ru: 'Средняя (провер. днище)' },
  '@suspMultiLink': { en: 'Multi-Link Rear', de: 'Mehrlenker-HA', ru: 'Многорычажка сзади' },
  '@suspTorsion': { en: 'Torsion Beam (Simple)', de: 'Verbundlenker (Simpel)', ru: 'Балка (простая)' },
  '@suspDoubleWishbone': { en: 'Double Wishbone', de: 'Doppelquerlenker', ru: 'Двухрычажная' },
  '@suspSport': { en: 'Sport Suspension (Firm)', de: 'Sportfahrwerk (Straff)', ru: 'Спортподвеска (жёсткая)' },
  '@starter12v': { en: '✓ Standard 12V', de: '✓ Klassisch 12V', ru: '✓ Обычные 12В' },
  '@starterHybrid': { en: '✕ None (Hybrid MG)', de: '✕ Keine (Hybrid-MG)', ru: '✕ Нет (гибрид MG)' },
  '@elecLow': { en: 'Low (Simple Bus)', de: 'Gering (Robust)', ru: 'Низкий риск' },
  '@elecLowMod': { en: 'Low–Moderate', de: 'Gering–Mittel', ru: 'Низкий–Средний' },
  '@elecMod': { en: 'Moderate (Complex)', de: 'Mittel (Komplexer)', ru: 'Средний (сложнее)' },

  // Controls / Brakes / Timing
  '@physButtons': { en: '✓ Physical Buttons', de: '✓ Echte Tasten', ru: '✓ Физ. кнопки' },
  '@discs4': { en: '4× Disc Brakes', de: '4× Scheibenbremsen', ru: '4× Дисковые' },
  '@discsRegen': { en: '✓ Regen + 4× Discs', de: '✓ Rekup. + 4× Scheibe', ru: '✓ Рекуп. + 4× Диски' },
  '@discsPerf': { en: 'Large Perf. Discs (Brembo/Alcon)', de: 'Große Sport-Bremsanlage', ru: 'Усиленные спорт-тормоза' },
  '@chain': { en: '✓ Timing Chain', de: '✓ Steuerkette', ru: '✓ Цепь ГРМ' },
  '@belt': { en: 'Timing Belt (Interval)', de: 'Zahnriemen (Intervall)', ru: 'Ремень ГРМ (регламент)' },
  '@wetBelt': { en: 'Wet Timing Belt (Check)', de: 'Ölbad-Zahnriemen (Prüfen)', ru: 'Ремень в масле (риск)' },

  // Universal Cost & Value Tiers
  '@tierVeryLow': { en: 'Very Low', de: 'Sehr niedrig', ru: 'Очень низкие' },
  '@tierLow': { en: 'Low', de: 'Niedrig', ru: 'Низкие' },
  '@tierLowMod': { en: 'Low–Moderate', de: 'Niedrig–Mittel', ru: 'Низкие–Средние' },
  '@tierMod': { en: 'Moderate', de: 'Mittel', ru: 'Средние' },
  '@tierModHigh': { en: 'Moderate–High', de: 'Mittel–Hoch', ru: 'Средние–Высокие' },
  '@tierHigh': { en: 'High', de: 'Hoch', ru: 'Высокие' },
  '@retVeryHigh': { en: 'Very High', de: 'Sehr hoch', ru: 'Очень высокий' },
  '@retHigh': { en: 'High', de: 'Hoch', ru: 'Высокий' },
  '@retMod': { en: 'Moderate', de: 'Mittel', ru: 'Средний' },
  '@retModLow': { en: 'Below Average', de: 'Unter Durchschnitt', ru: 'Ниже среднего' },
  '@demFast': { en: 'Fast Seller', de: 'Sehr gefragt', ru: 'Быстрая продажа' },
  '@demSteady': { en: 'Steady Demand', de: 'Stabile Nachfrage', ru: 'Стабильный спрос' },
  '@demNiche': { en: 'Enthusiast / Niche', de: 'Liebhaber / Nische', ru: 'Для энтузиастов' }
};

// Trilingual Technical Datasheet Row Labels (Single Source of Truth)
const DOSSIER_TECH_LABELS = {
  fullName: { en: 'Full Designation', de: 'Vollbezeichnung', ru: 'Полное название' },
  engineCode: { en: 'Engine Code', de: 'Motorcode', ru: 'Код двигателя' },
  boostType: { en: 'Forced Induction', de: 'Aufladung', ru: 'Тип наддува' },
  injectionType: { en: 'Injection System', de: 'Einspritzsystem', ru: 'Система впрыска' },
  gearboxModel: { en: 'Gearbox Model', de: 'Getriebetyp', ru: 'Коробка передач' },
  shiftQuality: { en: 'Shift & Durability', de: 'Schaltverhalten & Haltbarkeit', ru: 'Работа и ресурс' },
  drivelineArch: { en: 'Driveline Layout', de: 'Antriebslayout', ru: 'Схема привода' },
  transferCase: { en: 'Transfer / Diff', de: 'Verteilergetriebe / Diff', ru: 'Раздатка / Редуктор' },
  antiCorrosion: { en: 'Anti-Corrosion', de: 'Korrosionsschutz', ru: 'Антикоррозийная защита' },
  watchAreas: { en: 'Inspection Points', de: 'Prüfpunkte', ru: 'Зоны осмотра' },
  busArch: { en: 'Bus Architecture', de: 'Bordnetz-Architektur', ru: 'Архитектура сети' },
  knownWatchout: { en: 'Known Watch-Out', de: 'Typische Schwachstelle', ru: 'Известное слабое место' },
  dashboardTrim: { en: 'Dashboard & Trim', de: 'Cockpit & Materialien', ru: 'Отделка панели' },
  seatUpholstery: { en: 'Seat Upholstery', de: 'Sitzbezüge', ru: 'Обивка сидений' },
  turnDiameter: { en: 'Turning Circle', de: 'Wendekreis', ru: 'Диаметр разворота' },
  steeringType: { en: 'Steering System', de: 'Lenkungssystem', ru: 'Рулевое управление' },
  allRoundView: { en: 'All-Round View', de: 'Rundumsicht', ru: 'Круговой обзор' },
  rearView: { en: 'Rear Visibility', de: 'Sicht nach hinten', ru: 'Обзор назад' },
  crashRating: { en: 'Euro NCAP Rating', de: 'Euro-NCAP-Wertung', ru: 'Рейтинг Euro NCAP' },
  bodyStructure: { en: 'Safety Structure', de: 'Sicherheitsstruktur', ru: 'Силовая структура' },
  activeSafety: { en: 'Active Safety', de: 'Aktive Sicherheit', ru: 'Активная безопасность' },
  driverAssists: { en: 'Driver Assists', de: 'Fahrassistenten', ru: 'Ассистенты водителя' },
  rearSpace: { en: 'Rear Seating', de: 'Fond-Platzangebot', ru: 'Задний ряд' },
  frontErgo: { en: 'Front Ergonomics', de: 'Ergonomie vorn', ru: 'Эргономика спереди' },
  childSeats: { en: 'Child Seats (ISOFIX)', de: 'Kindersitze (ISOFIX)', ru: 'Детские кресла (ISOFIX)' },
  doorAccess: { en: 'Door Access', de: 'Einstieg & Türen', ru: 'Удобство посадки' },
  bootCapacity: { en: 'Volume (Up / Folded)', de: 'Volumen (Normal / Geklappt)', ru: 'Объём (обычн. / слож.)' },
  loadingLip: { en: 'Loading Bay', de: 'Laderaum & Ladekante', ru: 'Погрузка и проём' },
  foldingSystem: { en: 'Seat Folding System', de: 'Klappmechanik', ru: 'Складывание сидений' },
  steeringFeel: { en: 'Steering & Balance', de: 'Lenkung & Balance', ru: 'Руль и баланс' },
  cornering: { en: 'Cornering Behavior', de: 'Kurvenverhalten', ru: 'Поведение в поворотах' },
  tractionSystem: { en: 'Traction & Drive', de: 'Traktion & Antrieb', ru: 'Зацеп и привод' },
  displacement: { en: 'Displacement', de: 'Hubraum', ru: 'Объём двигателя' },
  cylinders: { en: 'Cylinders / Valves', de: 'Zylinder / Ventile', ru: 'Цилиндры / Клапаны' },
  output: { en: 'Power Output', de: 'Leistung (kW / PS)', ru: 'Мощность (кВт / л.с.)' },
  fuelTiming: { en: 'Fuel / Timing Drive', de: 'Kraftstoff / Steuerung', ru: 'Топливо / Привод ГРМ' },
  forcedInduction: { en: 'Forced Induction', de: 'Aufladung', ru: 'Наддув' },
  electricMotors: { en: 'Electric Motors', de: 'E-Motoren', ru: 'Электромоторы' },
  hybridBattery: { en: 'Hybrid Battery', de: 'Hybridbatterie', ru: 'Гибридная батарея' },
  boostCooling: { en: 'Charge Cooling', de: 'Ladeluftkühlung', ru: 'Охлаждение наддува' },
  injectionSystem: { en: 'Injection System', de: 'Einspritzsystem', ru: 'Система впрыска' },
  valveWash: { en: 'Intake Valve Wash', de: 'Einlassventil-Spülung', ru: 'Омывание клапанов' },
  // 1.2 Gearbox, Clutch & Driveline
  architecture: { en: 'Architecture', de: 'Bauart', ru: 'Конструкция' },
  gearsStages: { en: 'Gears / Stages', de: 'Gänge / Stufen', ru: 'Передачи / Ступени' },
  fluidService: { en: 'Fluid Service', de: 'Getriebeöl-Service', ru: 'Обслуживание масла' },
  clutchType: { en: 'Clutch Type', de: 'Kupplungstyp', ru: 'Тип сцепления' },
  flywheel: { en: 'Flywheel', de: 'Schwungrad', ru: 'Маховик' },
  lifespan: { en: 'Typical Lifespan', de: 'Typische Lebensdauer', ru: 'Типичный ресурс' },
  driveLayout: { en: 'Drive Layout', de: 'Antriebslayout', ru: 'Схема привода' },
  diffAxles: { en: 'Differential / Axles', de: 'Differenzial / Wellen', ru: 'Дифференциал / Приводы' },
  // 1.3 Rust Protection & Chassis Wear
  bodyProtection: { en: 'Body Protection', de: 'Karosserieschutz', ru: 'Защита кузова' },
  underbody: { en: 'Underbody Shielding', de: 'Unterbodenschutz', ru: 'Защита днища' },
  rustWarranty: { en: 'Corrosion Warranty', de: 'Durchrostungsgarantie', ru: 'Гарантия от коррозии' },
  frontAxle: { en: 'Front Axle', de: 'Vorderachse', ru: 'Передняя ось' },
  rearAxle: { en: 'Rear Axle', de: 'Hinterachse', ru: 'Задняя ось' },
  wearComplexity: { en: 'Wear Complexity', de: 'Verschleiß-Komplexität', ru: 'Сложность обслуживания' },
  // 1.4 Electrical & Sensor Reliability
  startingSystem: { en: 'Starting System', de: 'Startsystem', ru: 'Система запуска' },
  chargingSystem: { en: 'Charging System', de: 'Ladesystem', ru: 'Система зарядки' },
  auxBattery: { en: '12V Aux Battery', de: '12V-Bordbatterie', ru: 'АКБ 12В' },
  elecArch: { en: 'Bus Architecture', de: 'Bordnetz-Architektur', ru: 'Архитектура сети' },
  powerSteering: { en: 'Power Steering', de: 'Servolenkung', ru: 'Усилитель руля' },
  highRiskModules: { en: 'High-Risk Modules', de: 'Risiko-Steuergeräte', ru: 'Сложные модули риска' },
  // 2.1 Ride, Seat & Noise Comfort (NVH)
  damperSetup: { en: 'Suspension Bias', de: 'Fahrwerksabstimmung', ru: 'Настройка подвески' },
  seatSupport: { en: 'Seat Ergonomics', de: 'Sitzergonomie', ru: 'Эргономика сидений' },
  cabinNoise130: { en: 'Cabin Noise (130 km/h)', de: 'Innenraumpegel (130 km/h)', ru: 'Шум в салоне (130 км/ч)' },
  acousticGlass: { en: 'Sound Insulation', de: 'Geräuschdämmung', ru: 'Шумоизоляция' },
  // 2.2 Interior Quality, Controls & Features
  dashTrim: { en: 'Dashboard & Trim', de: 'Cockpit & Materialien', ru: 'Отделка панели' },
  buildFit: { en: 'Build & Rattle Resistance', de: 'Verarbeitung & Klapperfreiheit', ru: 'Качество сборки' },
  climateUi: { en: 'Climate & Audio UI', de: 'Klima- & Audio-Bedienung', ru: 'Климат и мультимедиа' },
  // 2.3 Visibility & City Maneuverability
  turningDiam: { en: 'Turning Circle (Wall)', de: 'Wendekreis', ru: 'Диаметр разворота' },
  bodyDimensions: { en: 'Length × Width', de: 'Länge × Breite', ru: 'Длина × Ширина' },
  sightlines: { en: 'All-Round Sightlines', de: 'Rundumsicht', ru: 'Обзорность' },
  parkingAids: { en: 'Parking Aids', de: 'Einparkhilfen', ru: 'Помощь при парковке' },
  // 2.4 Active & Passive Safety
  ncapOverall: { en: 'Euro NCAP Rating', de: 'Euro-NCAP-Wertung', ru: 'Рейтинг Euro NCAP' },
  ncapBreakdown: { en: 'Adult / Child Protection', de: 'Erwachsene / Kinder', ru: 'Защита взр. / детей' },
  airbagsCount: { en: 'Airbags', de: 'Airbags', ru: 'Подушки безопасности' },
  activeAssists: { en: 'ESP & Driver Assists', de: 'ESP & Assistenten', ru: 'ESP и ассистенты' },
  // 3.1 Passenger Room & Cabin Access
  wheelbase: { en: 'Wheelbase', de: 'Radstand', ru: 'Колёсная база' },
  rearLegHead: { en: 'Rear Leg / Headroom', de: 'Fond Bein- / Kopffreiheit', ru: 'Сзади (ноги / голова)' },
  isofixAccess: { en: 'ISOFIX & Door Access', de: 'ISOFIX & Einstieg', ru: 'ISOFIX и посадка' },
  // 3.2 Boot Space & Loading
  bootUpDown: { en: 'Volume (Up / Folded)', de: 'Volumen (Normal / Geklappt)', ru: 'Объём (обычн. / слож.)' },
  loadSill: { en: 'Load Sill Height', de: 'Ladekantenhöhe', ru: 'Высота погрузки' },
  foldingMech: { en: 'Seat Folding System', de: 'Klappmechanik', ru: 'Складывание сидений' },
  // 3.3 Payload, Roof Load & Towing
  maxPayload: { en: 'Max Payload', de: 'Max. Zuladung', ru: 'Макс. грузоподъёмность' },
  roofLoad: { en: 'Max Roof Load', de: 'Max. Dachlast', ru: 'Нагрузка на крышу' },
  towingCap: { en: 'Towing (Braked)', de: 'Anhängelast (gebremst)', ru: 'Прицеп (с тормозами)' },
  // 4.1 Acceleration & Top Speed
  sprintTime: { en: '0–100 km/h Sprint', de: '0–100 km/h Sprint', ru: 'Разгон 0–100 км/ч' },
  engineOutput: { en: 'Rated Power', de: 'Nennleistung', ru: 'Мощность' },
  topSpeedVal: { en: 'Factory Top Speed', de: 'Höchstgeschwindigkeit', ru: 'Макс. скорость' },
  // 4.2 Mid-Range Torque & Overtaking
  torqueVal: { en: 'Peak Torque', de: 'Max. Drehmoment', ru: 'Пиковый момент' },
  elasticityFeel: { en: 'Overtaking Behavior', de: 'Überholverhalten', ru: 'Поведение на обгоне' },
  // 4.3 Handling, Steering & Traction
  kerbWeight: { en: 'Kerb Weight', de: 'Leergewicht', ru: 'Снаряжённая масса' },
  handlingChar: { en: 'Cornering & Steering', de: 'Kurven & Lenkung', ru: 'Повороты и руль' },
  tyreSizes: { en: 'Typical Tyre Sizes', de: 'Typische Reifengrößen', ru: 'Типичные шины' },
  tractionSys: { en: 'Traction & Differential', de: 'Traktion & Differenzial', ru: 'Зацеп и дифференциал' },
  // 4.4 Braking Performance & Fade Resistance
  stopDist: { en: '100–0 km/h Braking', de: 'Bremsweg 100–0 km/h', ru: 'Тормозной путь 100–0' },
  discHardware: { en: 'Brake Disc Hardware', de: 'Bremsscheiben-Aufbau', ru: 'Конструкция тормозов' },
  // 5.1 Real-World Fuel Economy & Range
  realFuelVal: { en: 'Real-World Mixed', de: 'Praxisverbrauch (Mix)', ru: 'Реальный расход (смеш.)' },
  tankRangeVal: { en: 'Tank & Practical Range', de: 'Tank & Praxisreichweite', ru: 'Бак и реальный запас' },
  // 5.2 Tax, Insurance & Euro Norm
  emissionsClass: { en: 'Emissions Standard', de: 'Abgasnorm', ru: 'Эко-стандарт' },
  taxInsTier: { en: 'Tax & Insurance Level', de: 'Steuer & Versicherung', ru: 'Налог и страховка' },
  // 5.3 Maintenance, Wear Parts & Repairs
  timingSystem: { en: 'Timing Drive', de: 'Ventilsteuerung', ru: 'Привод ГРМ' },
  serviceLevel: { en: 'Routine Service Cost', de: 'Wartungs- & Teilekosten', ru: 'Стоимость ТО и расходн.' },
  // 5.4 Used Market & Depreciation
  retainedVal: { en: 'Value Retained', de: 'Restwert-Anteil', ru: 'Остаточная стоимость' },
  annualLossVal: { en: 'Avg. Loss / Year', de: 'Wertverlust / Jahr', ru: 'Потеря цены / год' },
  marketLiquidity: { en: 'Market Demand', de: 'Marktnachfrage', ru: 'Спрос на рынке' },
  resaleOutlook: { en: 'Value Expectation', de: 'Wertentwicklung', ru: 'Прогноз цены' }
};

// Reusable Trilingual Technical Datasheet Presets (DRY Hardware Blocks)
const SPEC_DOSSIER_PRESETS = {
  '@hybridEMotor': {
    specs: [
      { k: 'forcedInduction', v: { en: 'None (Naturally Aspirated)', de: 'Keine (Saugmotor)', ru: 'Нет (атмосферный)' } },
      { k: 'electricMotors', v: { en: '2× AC Synchronous (MG1 + MG2 · 60 kW / 207 Nm)', de: '2× AC-Synchron (MG1 + MG2 · 60 kW / 207 Nm)', ru: '2× AC-синхр. (MG1 + MG2 · 60 кВт / 207 Н·м)' } },
      { k: 'hybridBattery', v: { en: '1.31 kWh NiMH (201.6 V · Air-Cooled)', de: '1,31 kWh NiMH (201,6 V · Luftgekühlt)', ru: '1.31 кВт·ч NiMH (201.6 В · возд. охл.)' } }
    ],
    note: {
      en: 'Zero turbo heat stress; brushless electric motors replace starter, alternator, and drive belts.',
      de: 'Keine Turbo-Hitze; bürstenlose E-Motoren ersetzen Anlasser, Lichtmaschine und Keilriemen.',
      ru: 'Нет перегрева турбины; бесщёточные электромоторы заменяют стартер, генератор и ремни.'
    }
  },
  '@naNoTurbo': {
    specs: [
      { k: 'forcedInduction', v: { en: 'None (Naturally Aspirated)', de: 'Keine (Saugmotor)', ru: 'Нет (атмосферный)' } },
      { k: 'electricMotors', v: { en: 'None (Pure ICE)', de: 'Keine (Reiner Verbrenner)', ru: 'Нет (чистый ДВС)' } }
    ],
    note: {
      en: 'Maximum mechanical simplicity — zero turbocharger, intercooler, or boost plumbing to wear out.',
      de: 'Maximale mechanische Schlichtheit — kein Turbolader, kein Ladeluftkühler, keine Ladedruck-Lecks.',
      ru: 'Максимальная простота — нет турбины, интеркулера и магистралей наддува.'
    }
  },
  '@turboPetrol': {
    specs: [
      { k: 'forcedInduction', v: { en: 'Single-Scroll Exhaust Turbocharger', de: 'Abgasturbolader (Single-Scroll)', ru: 'Турбокомпрессор (Single-Scroll)' } },
      { k: 'boostCooling', v: { en: 'Water-to-Air Intercooler + Water-Cooled Manifold', de: 'Wasser-Ladeluftkühler + gekühlter Krümmer', ru: 'Водяной интеркулер + охл. коллектор' } }
    ],
    note: {
      en: 'Water-cooled turbo housing protects bearings well when paired with timely 10–15k km oil changes.',
      de: 'Wassergekühltes Turbogehäuse schützt die Lagerung zuverlässig bei pünktlichen 10–15tkm-Ölwechseln.',
      ru: 'Водяное охлаждение турбины хорошо бережёт подшипники при замене масла каждые 10–15 тыс. км.'
    }
  },
  '@turboDiesel': {
    specs: [
      { k: 'forcedInduction', v: { en: 'Variable-Geometry Diesel Turbo (VGT)', de: 'VTG-Dieselturbolader (variable Geometrie)', ru: 'Дизельная турбина с изменяемой геометрией (VGT)' } },
      { k: 'boostCooling', v: { en: 'Air-to-Air Intercooler', de: 'Luft-Ladeluftkühler', ru: 'Воздушный интеркулер' } }
    ],
    note: {
      en: 'High motorway longevity when warmed up regularly; benefits from clean oil and highway runs.',
      de: 'Hohe Langstrecken-Standfestigkeit bei regelmäßigem Warmfahren und frischem Öl.',
      ru: 'Отличный ресурс на трассе при регулярном прогреве и своевременной замене масла.'
    }
  },
  '@portInj': {
    specs: [
      { k: 'injectionSystem', v: { en: 'Multi-Point Port Fuel Injection (Indirect EFI)', de: 'Multi-Point Saugrohreinspritzung (Indirekt)', ru: 'Распределённый впрыск во впуск (EFI)' } },
      { k: 'valveWash', v: { en: '✓ Continuous valve wash (Low carbon buildup)', de: '✓ Dauerhafte Ventilspülung (Kaum Verkokung)', ru: '✓ Постоянное омывание клапанов (без нагара)' } }
    ],
    note: {
      en: 'Low-pressure injectors rarely fail and keep intake valves naturally clean over 300,000+ km.',
      de: 'Niederdruck-Injektoren fallen extrem selten aus und halten die Einlassventile über 300.000+ km sauber.',
      ru: 'Форсунки низкого давления почти не ломаются и сохраняют впускные клапаны чистыми 300 000+ км.'
    }
  },
  '@directInjPetrol': {
    specs: [
      { k: 'injectionSystem', v: { en: 'High-Pressure Direct Petrol Injection (D-4T)', de: 'Hochdruck-Benzin-Direkteinspritzung (D-4T)', ru: 'Прямой впрыск бензина высокого давления (D-4T)' } },
      { k: 'valveWash', v: { en: '✕ Bypassed (No fuel wash on intake valves)', de: '✕ Keine Ventilspülung (Direkt in Brennraum)', ru: '✕ Не омываются (впрыск прямо в цилиндр)' } }
    ],
    note: {
      en: 'Sharp efficiency and cooling under boost; quality petrol and highway drives help limit intake deposits.',
      de: 'Hoher Wirkungsgrad unter Turbolast; guter Kraftstoff und Langstrecken bremsen Ablagerungen.',
      ru: 'Высокий КПД под наддувом; качественный бензин и трасса помогают сдерживать нагар.'
    }
  },
  '@commonRailDi': {
    specs: [
      { k: 'injectionSystem', v: { en: 'High-Pressure Common-Rail Direct Injection', de: 'Hochdruck-Common-Rail-Direkteinspritzung', ru: 'Дизельный прямой впрыск Common-Rail' } },
      { k: 'valveWash', v: { en: 'Direct in-cylinder (Multi-pulse spray)', de: 'Direkt im Brennraum (Mehrfacheinspritzung)', ru: 'Прямой в цилиндр (многофазный впрыск)' } }
    ],
    note: {
      en: 'Very frugal and durable on clean diesel with timely fuel-filter replacements.',
      de: 'Sehr sparsam und langlebig bei sauberem Diesel und pünktlichem Kraftstofffilter-Wechsel.',
      ru: 'Очень экономичен и надёжен на чистом дизеле при регулярной замене топливного фильтра.'
    }
  },
  // 1.2 Gearbox, Clutch & Driveline Presets
  '@gbECvt': {
    specs: [
      { k: 'architecture', v: { en: 'Toyota PSD Planetary Gearset (P410)', de: 'Toyota PSD Planetenradsatz (P410)', ru: 'Планетарная передача Toyota PSD (P410)' } },
      { k: 'gearsStages', v: { en: '1 Planetary Stage (Stepless · No Belts)', de: '1 Planetenstufe (Stufenlos · Ohne Riemen)', ru: '1 планетарная ступень (без ремней)' } },
      { k: 'fluidService', v: { en: 'ATF-WS (~3.8 L · Advised @ 90,000 km)', de: 'ATF-WS (~3,8 L · Empfohlen bei 90.000 km)', ru: 'ATF-WS (~3.8 л · рек. раз в 90 000 км)' } }
    ],
    note: {
      en: 'No belts, no shift solenoids, and no hydraulic clutch packs — one of the longest-lasting transmissions ever made.',
      de: 'Keine Riemen, keine Schaltventile, keine Lamellenkupplungen — eines der haltbarsten Getriebe auf dem Markt.',
      ru: 'Без ремней, соленоидов и пакетов фрикционов — одна из самых долговечных трансмиссий в истории.'
    }
  },
  '@gbManual6Toyota': {
    specs: [
      { k: 'architecture', v: { en: 'Toyota 6-Speed Synchronized Manual (EC60)', de: 'Toyota 6-Gang-Schaltgetriebe (EC60)', ru: '6-ст. синхронизированная МКПП Toyota' } },
      { k: 'gearsStages', v: { en: '6 Forward + Reverse', de: '6 Vorwärtsgänge + Rückwärtsgang', ru: '6 передач вперёд + задняя' } },
      { k: 'fluidService', v: { en: '75W LV Gear Oil (~2.4 L · ~120,000 km)', de: '75W LV Getriebeöl (~2,4 L · ~120.000 km)', ru: 'Масло 75W LV (~2.4 л · ~120 000 км)' } }
    ],
    note: {
      en: 'Simple, proven manual gearbox with low upkeep costs and far lower failure risk than dual-clutch automatics.',
      de: 'Schlichtes, bewährtes Schaltgetriebe mit geringen Kosten und deutlich niedrigerem Risiko als Doppelkuppler.',
      ru: 'Простая и надёжная механика с минимальным риском дорогого ремонта по сравнению с роботами.'
    }
  },
  '@gbManual6Honda': {
    specs: [
      { k: 'architecture', v: { en: 'Honda 6-Speed Short-Throw Synchronized Manual', de: 'Honda 6-Gang-Schaltgetriebe (Kurze Schaltwege)', ru: '6-ст. короткоходная МКПП Honda' } },
      { k: 'gearsStages', v: { en: '6 Forward + Reverse', de: '6 Vorwärtsgänge + Rückwärtsgang', ru: '6 передач вперёд + задняя' } },
      { k: 'fluidService', v: { en: 'Honda MTF-3 (~1.9 L · ~120,000 km)', de: 'Honda MTF-3 (~1,9 L · ~120.000 km)', ru: 'Honda MTF-3 (~1.9 л · ~120 000 км)' } }
    ],
    note: {
      en: 'Famous for crisp shift feel and long-life brass/carbon synchros that routinely exceed 300,000 km.',
      de: 'Bekannt für knackiges Schaltgefühl und sehr langlebige Synchronringe jenseits der 300.000 km.',
      ru: 'Славится чётким переключением и износостойкими синхронизаторами с ресурсом 300 000+ км.'
    }
  },
  '@clutchNone': {
    specs: [
      { k: 'clutchType', v: { en: 'None (Electric Motor Torque Split)', de: 'Keine (Elektrische Drehmomentverteilung)', ru: 'Отсутствует (электро-распределение)' } },
      { k: 'flywheel', v: { en: 'Solid Torsional Damper (✕ No DMF)', de: 'Fester Torsionsdämpfer (✕ Kein ZMS)', ru: 'Жёсткий демпфер (✕ Без ДММ)' } },
      { k: 'lifespan', v: { en: 'Lifetime (Zero friction wear)', de: 'Fahrzeugleben (Kein Reibverschleiß)', ru: 'На весь срок службы (нет трения)' } }
    ],
    note: {
      en: 'Completely eliminates the €1,000–€1,800 clutch and dual-mass flywheel replacement bill on used cars.',
      de: 'Spart komplett die typische 1.000–1.800 € Rechnung für Kupplung und Zweimassenschwungrad.',
      ru: 'Полностью исключает типичную замену сцепления и двухмассового маховика на €1 000–1 800.'
    }
  },
  '@clutchSingle': {
    specs: [
      { k: 'clutchType', v: { en: 'Dry Single-Plate Hydraulic Clutch', de: 'Trockene Einscheiben-Hydraulikkupplung', ru: 'Сухое однодисковое с гидроприводом' } },
      { k: 'flywheel', v: { en: 'Solid Single-Mass Flywheel (✕ No DMF)', de: 'Einmassenschwungrad (✕ Kein ZMS)', ru: 'Одномассовый маховик (✕ Без ДММ)' } },
      { k: 'lifespan', v: { en: '180,000–250,000+ km (Driver-dependent)', de: '180.000–250.000+ km (Fahrprofilabhängig)', ru: '180 000–250 000+ км (зависит от стиля)' } }
    ],
    note: {
      en: 'Solid single-mass flywheel never rattles or fails — replacement clutch kits stay inexpensive.',
      de: 'Robustes Einmassenschwungrad kennt kein ZMS-Rasseln — ein späterer Kupplungswechsel bleibt günstig.',
      ru: 'Простой одномассовый маховик не стучит и служит вечно — замена комплекта сцепления стоит недорого.'
    }
  },
  '@clutchDmf': {
    specs: [
      { k: 'clutchType', v: { en: 'Dry Single-Plate Hydraulic Clutch', de: 'Trockene Einscheiben-Hydraulikkupplung', ru: 'Сухое однодисковое с гидроприводом' } },
      { k: 'flywheel', v: { en: '✓ Dual-Mass Flywheel (DMF · Vibration Damper)', de: '✓ Zweimassenschwungrad (ZMS · Schwingungsdämpfer)', ru: '✓ Двухмассовый маховик (ДММ)' } },
      { k: 'lifespan', v: { en: '140,000–200,000 km (Typical DMF window)', de: '140.000–200.000 km (Typischer ZMS-Bereich)', ru: '140 000–200 000 км (типичный ресурс ДММ)' } }
    ],
    note: {
      en: 'Smooths out high turbo/diesel torque pulses cleanly; budget for DMF + clutch together on high-mileage cars.',
      de: 'Dämpft hohe Turbo-/Diesel-Drehmomente sauber; bei hoher Laufleistung ZMS + Kupplung zusammen einplanen.',
      ru: 'Хорошо гасит вибрации турбо/дизеля; на больших пробегах обычно меняется в паре со сцеплением.'
    }
  },
  '@driveFwd': {
    specs: [
      { k: 'driveLayout', v: { en: 'Front-Wheel Drive (Transverse)', de: 'Frontantrieb (Quermotor)', ru: 'Передний привод (поперечный)' } },
      { k: 'diffAxles', v: { en: 'Open Front Differential · 2× CV Half-Shafts', de: 'Offenes Frontdifferenzial · 2× Antriebswellen', ru: 'Открытый дифференциал · 2 ШРУС-привода' } }
    ],
    note: {
      en: 'Simple 2-axle layout with no transfer case, rear differential, or AWD coupling fluids to service.',
      de: 'Schlichter Frontantrieb ohne Verteilergetriebe, Hinterachs-Differenzial oder Allrad-Kupplungsöl.',
      ru: 'Простая схема без раздатки, заднего редуктора и муфты полного привода.'
    }
  },
  // 1.3 Rust Protection & Chassis Wear Presets
  '@rustGalvanized12y': {
    specs: [
      { k: 'bodyProtection', v: { en: 'Zinc-Galvanized Steel Panels + Cavity Wax', de: 'Verzinkte Karosseriebleche + Hohlraumwachs', ru: 'Оцинкованные панели + восковая обработка' } },
      { k: 'underbody', v: { en: 'PVC Underbody Coating + Aero Undertrays', de: 'PVC-Unterbodenschutz + Aero-Verkleidung', ru: 'ПВХ-покрытие днища + пластиковые экраны' } },
      { k: 'rustWarranty', v: { en: '12 Years (Factory Perforation)', de: '12 Jahre (Werks-Durchrostungsgarantie)', ru: '12 лет (заводская от сквозной коррозии)' } }
    ],
    note: {
      en: 'Outer body panels resist rust well; in salted winters inspect rear subframe and brake lines first.',
      de: 'Außenbleche sind gut geschützt; bei Winterautos zuerst Hinterachsträger und Bremsleitungen prüfen.',
      ru: 'Внешние панели стойки к коррозии; в регионах с реагентами в первую очередь осматривайте подрамник.'
    }
  },
  '@suspMultiLink': {
    specs: [
      { k: 'frontAxle', v: { en: 'MacPherson Strut + Stabilizer Bar', de: 'MacPherson-Federbein + Stabilisator', ru: 'Стойки McPherson + стабилизатор' } },
      { k: 'rearAxle', v: { en: 'Independent Double-Wishbone / Multi-Link', de: 'Einzelrad-Doppelquerlenker / Mehrlenker', ru: 'Независимая многорычажная сзади' } },
      { k: 'wearComplexity', v: { en: 'Medium (More Rear Bushings & Links)', de: 'Mittel (Mehr Lager & Querlenker hinten)', ru: 'Средняя (больше сайлентблоков сзади)' } }
    ],
    note: {
      en: 'Delivers refined ride and stability; rear bushings and drop-links are normal wear items past 150,000 km.',
      de: 'Bietet hohen Fahrkomfort und Stabilität; hintere Buchsen und Koppelstangen sind ab 150.000 km normale Verschleißteile.',
      ru: 'Отличная плавность и устойчивость; после 150 000 км планово проверяются задние сайлентблоки и стойки.'
    }
  },
  '@suspTorsionBeam': {
    specs: [
      { k: 'frontAxle', v: { en: 'MacPherson Strut + Stabilizer Bar', de: 'MacPherson-Federbein + Stabilisator', ru: 'Стойки McPherson + стабилизатор' } },
      { k: 'rearAxle', v: { en: 'Semi-Independent Torsion-Beam Axle', de: 'Verbundlenker-Hinterachse', ru: 'Полузависимая торсионная балка' } },
      { k: 'wearComplexity', v: { en: 'Low (2 Main Bushings · Minimal Alignment Drift)', de: 'Gering (2 Hauptlager · Kaum Spurverstellung)', ru: 'Низкая (2 основных сайлентблока)' } }
    ],
    note: {
      en: 'Rugged, low-maintenance rear axle with very few joints — rarely fails inspections and cheap to refresh.',
      de: 'Robuste, wartungsarme Hinterachse mit wenigen Gelenken — selten TÜV-auffällig und günstig instand zu halten.',
      ru: 'Крепкая и неприхотливая балка с минимумом шарниров — редко требует вложений и дёшево ремонтируется.'
    }
  },
  // 1.4 Electrical & Sensor Reliability Presets
  '@starterHybridMg': {
    specs: [
      { k: 'startingSystem', v: { en: 'High-Voltage MG1 Motor-Generator (✕ No 12V Starter)', de: 'Hochvolt-MG1-Motorgenerator (✕ Kein 12V-Anlasser)', ru: 'Высоковольтный MG1 (✕ Без стартера 12В)' } },
      { k: 'chargingSystem', v: { en: 'Solid-State DC-DC Inverter (✕ No Alternator)', de: 'DC-DC-Wandler im Inverter (✕ Keine Lichtmaschine)', ru: 'DC-DC инвертор (✕ Без генератора)' } },
      { k: 'auxBattery', v: { en: 'Compact 12V AGM Aux Battery (Boot · Powers ECUs)', de: 'Kompakte 12V-AGM-Batterie (Kofferraum · Bordnetz)', ru: 'Компактная 12В AGM в багажнике (питание ЭБУ)' } }
    ],
    note: {
      en: 'Brushless hybrid motor-generators remove classic starter/alternator failures entirely.',
      de: 'Bürstenlose Hybrid-E-Motoren schließen klassische Anlasser- und Lichtmaschinendefekte komplett aus.',
      ru: 'Бесщёточные электромоторы полностью исключают поломки классического стартера и генератора.'
    }
  },
  '@starterStandard12v': {
    specs: [
      { k: 'startingSystem', v: { en: '12V Electric Pinion Starter Motor', de: '12V-Elektro-Anlasser', ru: 'Классический стартер 12В' } },
      { k: 'chargingSystem', v: { en: 'Belt-Driven 12V Alternator', de: 'Riemengetriebene 12V-Lichtmaschine', ru: 'Ременной генератор 12В' } },
      { k: 'auxBattery', v: { en: 'Standard Engine-Bay 12V Lead-Acid / EFB', de: 'Standard 12V-Starterbatterie (Motorraum)', ru: 'Стандартная 12В АКБ под капотом' } }
    ],
    note: {
      en: 'Proven standard 12V starter and alternator hardware — reliable everyday service life and affordable to replace if worn.',
      de: 'Bewährte Standard-12V-Komponenten — solide Lebensdauer und im Verschleißfall günstig zu ersetzen.',
      ru: 'Проверенные стандартные узлы 12В — хороший ресурс и недорогая замена при износе.'
    }
  },
  '@elecSimpleEps': {
    specs: [
      { k: 'elecArch', v: { en: 'Conservative CAN-Bus · Dedicated Physical Controls', de: 'Konservativer CAN-Bus · Echte Bedienmodule', ru: 'Простая шина CAN · отдельные физические блоки' } },
      { k: 'powerSteering', v: { en: 'Electric Power Steering (EPS · No Hydraulic Leaks)', de: 'Elektrische Servolenkung (EPS · Keine Hydraulik)', ru: 'Электроусилитель руля (ЭУР · без жидкости)' } },
      { k: 'highRiskModules', v: { en: 'None (No Air Suspension or Complex Active Dampers)', de: 'Keine (Kein Luftfahrwerk / Komplexe Dämpfer)', ru: 'Нет (без пневмоподвески и сложных блоков)' } }
    ],
    note: {
      en: 'Straightforward wiring and conservative sensor architecture keep random warning lights rare as the car ages.',
      de: 'Übersichtliche Elektrik und konservative Sensorik sorgen für wenige Fehlermeldungen im Alter.',
      ru: 'Простая проводка и консервативная электроника редко беспокоят ложными ошибками с возрастом.'
    }
  },
  // 2.2 Controls Preset
  '@controlsPhys': {
    specs: [
      { k: 'climateUi', v: { en: '✓ Dedicated Physical Buttons & Dials', de: '✓ Echte Tasten & Drehregler (Klima/Audio)', ru: '✓ Отдельные физические кнопки и крутилки' } }
    ],
    note: {
      en: 'Eyes-free climate and audio operation without digging through laggy touchscreens.',
      de: 'Blind bedienbare Klima- und Audio-Tasten ohne Ablenkung durch verschachtelte Touchmenüs.',
      ru: 'Удобное управление климатом и аудио вслепую без отвлечения на сенсорные меню.'
    }
  },
  // 3.3 Dynamic Towing Preset
  '@towingDynamic': {
    specs: [
      { k: 'towingCap', v: '{specs.towingBraked}' }
    ],
    note: {
      en: 'Braked trailer capacity depends on powertrain cooling and transmission torque limits.',
      de: 'Gebremste Anhängelast richtet sich nach Kühlleistung und Getriebe-Auslegung der jeweiligen Motorisierung.',
      ru: 'Допустимая масса прицепа зависит от системы охлаждения и конструкции трансмиссии версии.'
    }
  },
  // 4.1 Acceleration & Top Speed Dynamic Presets
  '@sprintDynamic': {
    specs: [
      { k: 'sprintTime', v: '{specs.sprint0100}' },
      { k: 'engineOutput', v: '{car.hp}' }
    ],
    note: {
      en: 'Measured 0–100 km/h sprint for this engine variant; everyday responsiveness also depends on gearing.',
      de: 'Werks-Sprintwert 0–100 km/h dieser Motorisierung; gefühlter Antritt hängt zusätzlich von der Übersetzung ab.',
      ru: 'Паспортный разгон 0–100 км/ч данной версии; реальная живость зависит также от настроек КПП.'
    }
  },
  '@vmaxDynamic': {
    specs: [
      { k: 'topSpeedVal', v: '{specs.topSpeed}' }
    ],
    note: {
      en: 'Higher top speed reflects taller highway gearing and calmer cruising revs at 130 km/h.',
      de: 'Höhere Höchstgeschwindigkeit steht meist für entspanntere Drehzahlreserven bei 130 km/h Richtgeschwindigkeit.',
      ru: 'Более высокая максимальная скорость обычно означает спокойные обороты и запас мощности на трассе.'
    }
  },
  // 4.2 Torque & Passing Dynamic Presets
  '@torqueDynamic': {
    specs: [
      { k: 'torqueVal', v: '{specs.peakTorque}' }
    ],
    note: {
      en: 'Peak torque and delivery rpm govern how effortlessly the car pulls away from low speeds.',
      de: 'Maximales Drehmoment und Drehzahlpunkt bestimmen, wie mühelos der Wagen aus niedrigen Drehzahlen anzieht.',
      ru: 'Пиковый момент и обороты его полки определяют, насколько легко машина ускоряется с малых скоростей.'
    }
  },
  '@passingDynamic': {
    specs: [
      { k: 'elasticityFeel', v: '{specs.passingPunch}' }
    ],
    note: {
      en: 'Shows whether highway overtaking happens effortlessly in-gear or rewards a quick downshift.',
      de: 'Zeigt, ob Überholmanöver souverän im hohen Gang gelingen oder ein gezieltes Herunterschalten erfordern.',
      ru: 'Показывает, хватает ли тяги на обгоне без переключений или мотор любит пониженную передачу.'
    }
  },
  // 4.3 Traction Preset
  '@tractionFwdOpen': {
    specs: [
      { k: 'tractionSys', v: { en: 'FWD · Open Differential + Electronic Stability (ESP)', de: 'Frontantrieb · Offenes Differenzial + ESP', ru: 'Передний привод · Свободный дифф. + ESP' } }
    ],
    note: {
      en: 'Predictable wet and winter grip with gentle, safe understeer at the limit.',
      de: 'Gutmütige Traktion bei Nässe und Winter mit sicherem, berechenbarem Untersteuern im Grenzbereich.',
      ru: 'Предсказуемое поведение в дождь и снег с безопасной недостаточной поворачиваемостью на пределе.'
    }
  },
  // 4.4 Braking Dynamic Presets
  '@brakingDistDynamic': {
    specs: [
      { k: 'stopDist', v: '{specs.braking1000}' }
    ],
    note: {
      en: 'Warm emergency stopping distance on quality tyres — solid, consistent road-car performance.',
      de: 'Vollbremsweg aus 100 km/h auf guten Reifen — verlässliches, standfestes Alltags-Niveau.',
      ru: 'Тормозной путь со 100 км/ч на качественных шинах — стабильный и предсказуемый результат.'
    }
  },
  '@brakeSetupRegen': {
    specs: [
      { k: 'discHardware', v: { en: 'Regenerative E-Motor Braking + 4× Disc Brakes', de: 'Rekuperation (E-Motor) + 4× Scheibenbremsen', ru: 'Рекуперация электромотором + 4× дисковые тормоза' } }
    ],
    note: {
      en: 'Electric regeneration handles most daily slowing, often doubling brake-pad life past 100,000+ km.',
      de: 'Rekuperation übernimmt den Großteil der Alltagsbremsungen — Bremsbeläge halten oft über 100.000+ km.',
      ru: 'Рекуперация берёт на себя основное замедление, часто удваивая ресурс колодок свыше 100 000 км.'
    }
  },
  '@brakeSetupDiscs4': {
    specs: [
      { k: 'discHardware', v: { en: 'Ventilated Front Discs + Solid Rear Discs (ABS/EBD)', de: 'Innenbelüftete Scheiben vorn + Scheiben hinten (ABS/EBD)', ru: 'Вентилируемые диски спереди + диски сзади (ABS/EBD)' } }
    ],
    note: {
      en: 'Clean pedal modulation and straightforward, affordable disc/pad replacements.',
      de: 'Gut dosierbares Bremspedal sowie unkomplizierter, günstiger Scheiben- und Belagwechsel.',
      ru: 'Информативная педаль тормоза и недорогая замена дисков и колодок.'
    }
  },
  // 5.1 Fuel & Range Dynamic Presets
  '@fuelDynamic': {
    specs: [
      { k: 'realFuelVal', v: '{specs.realWorldFuel}' }
    ],
    note: {
      en: 'Realistic mixed everyday consumption across city, country roads, and highway cruising.',
      de: 'Realistischer Praxisverbrauch im Mix aus Stadt, Landstraße und Autobahn.',
      ru: 'Реальный смешанный расход топлива в повседневном цикле город/трасса.'
    }
  },
  '@tankDynamic': {
    specs: [
      { k: 'tankRangeVal', v: '{specs.tankRange}' }
    ],
    note: {
      en: 'Practical distance per fill-up before reserve under normal everyday driving.',
      de: 'Praxisnahe Reichweite pro Tankfüllung bei normaler Alltagsfahrweise.',
      ru: 'Реальный запас хода на одном баке при обычной повседневной езде.'
    }
  },
  // 5.2 Tax & Euro Norm Dynamic Presets
  '@euroDynamic': {
    specs: [
      { k: 'emissionsClass', v: '{specs.euroNorm}' }
    ],
    note: {
      en: 'Determines urban low-emission zone access and future regulatory peace of mind.',
      de: 'Relevant für grüne Umweltplakette, Innenstadt-Umweltzonen und langfristige Planungssicherheit.',
      ru: 'Определяет допуск в экологические зоны городов и перспективные ограничения.'
    }
  },
  '@taxInsDynamic': {
    specs: [
      { k: 'taxInsTier', v: '{specs.taxInsurance}' }
    ],
    note: {
      en: 'Combined annual road tax and typical insurance burden relative to similar used cars.',
      de: 'Kombiniertes Jahresniveau für Steuer & Versicherung im Vergleich zu ähnlichen Gebrauchtwagen.',
      ru: 'Совокупный уровень ежегодных расходов на налог и страховку относительно класса.'
    }
  },
  // 5.3 Maintenance Dynamic Presets (Roadmap renders directly beneath!)
  '@timingDynamic': {
    specs: [
      { k: 'timingSystem', v: '{specs.timingDrive}' }
    ],
    note: {
      en: 'Timing chains avoid fixed €600–€900 belt changes when engine oil is refreshed on time.',
      de: 'Steuerketten sparen planmäßige 600–900 € Zahnriemenwechsel bei pünktlicher Ölpflege.',
      ru: 'Цепь ГРМ избавляет от плановой замены ремня (€600–900) при своевременной замене масла.'
    }
  },
  '@serviceDynamic': {
    specs: [
      { k: 'serviceLevel', v: '{specs.serviceWear}' }
    ],
    note: {
      en: 'Open the 15-Year / 250,000 km Service & Repair Guide below for model-specific maintenance and known weak spots.',
      de: 'Öffne den 15-Jahre / 250.000 km Wartungs- & Reparaturplan unten für modellspezifische Arbeiten und bekannte Schwachstellen.',
      ru: 'Откройте план обслуживания и ремонтов (15 лет / 250 000 км) ниже — там собраны специфические работы и слабые места.'
    }
  },
  // 5.4 Used Market & Depreciation Dynamic Presets
  '@retentionDynamic': {
    specs: [
      { k: 'retainedVal', v: '{price.retainedPct}' },
      { k: 'annualLossVal', v: '{price.annualLoss}' }
    ],
    note: {
      en: 'Stronger value retention directly reduces your real net cost over 3–5 years of ownership.',
      de: 'Hoher Werterhalt senkt deine realen Gesamtkosten über 3–5 Jahre Haltedauer spürbar.',
      ru: 'Высокая сохранность стоимости напрямую снижает реальные потери за 3–5 лет владения.'
    }
  },
  '@demandDynamic': {
    specs: [
      { k: 'marketLiquidity', v: '{specs.resaleDemand}' },
      { k: 'resaleOutlook', v: '{price.outlook}' }
    ],
    note: {
      en: 'Reflects how quickly well-maintained examples find buyers when you resell.',
      de: 'Zeigt, wie zügig gepflegte Exemplare beim Weiterverkauf wieder einen Käufer finden.',
      ru: 'Показывает, насколько быстро ухоженные экземпляры продаются на вторичном рынке.'
    }
  },
  // Additional Reusable Hardware Presets (Batch 1+)
  '@hybridIma': {
    specs: [
      { k: 'forcedInduction', v: { en: 'None (Naturally Aspirated)', de: 'Keine (Saugmotor)', ru: 'Нет (атмосферный)' } },
      { k: 'electricMotors', v: { en: '1× Thin DC Brushless IMA Assist (10 kW / 78 Nm)', de: '1× IMA-E-Motor zwischen Motor & Getriebe (10 kW / 78 Nm)', ru: '1× электромотор IMA (10 кВт / 78 Н·м)' } },
      { k: 'hybridBattery', v: { en: '0.6 kWh NiMH (100.8 V · Under Boot Floor)', de: '0,6 kWh NiMH (100,8 V · Unter Kofferraumboden)', ru: '0.6 кВт·ч NiMH (100.8 В · под полом багажника)' } }
    ],
    note: {
      en: 'Simple parallel mild-hybrid assist; car still drives normally on the petrol engine even if the IMA pack ages.',
      de: 'Simpler Parallel-Hybrid; selbst bei gealtertem Akku bleibt der Benziner voll fahrbereit.',
      ru: 'Простая параллельная схема IMA — машина остаётся на ходу на бензине даже при старении батареи.'
    }
  },
  '@turboHotHatch': {
    specs: [
      { k: 'forcedInduction', v: { en: 'High-Output Twin-Scroll Exhaust Turbocharger', de: 'Hochleistungs-Twin-Scroll-Abgasturbolader', ru: 'Высокопроизводительная турбина Twin-Scroll' } },
      { k: 'boostCooling', v: { en: 'Large Front-Mount Air-to-Air Intercooler', de: 'Großer Front-Ladeluftkühler', ru: 'Крупный фронтальный интеркулер' } }
    ],
    note: {
      en: 'Engineered for high boost and track heat — demands strict 10,000 km full-synthetic oil changes and cool-down laps.',
      de: 'Ausgelegt für hohen Ladedruck — verlangt strikte 10.000-km-Ölwechsel und konsequentes Warm-/Kaltfahren.',
      ru: 'Рассчитана на высокое давление наддува — обязательна замена масла раз в 10 тыс. км и бережное охлаждение.'
    }
  },
  '@gbManual5Honda': {
    specs: [
      { k: 'architecture', v: { en: 'Honda 5-Speed Synchronized Manual', de: 'Honda 5-Gang-Schaltgetriebe', ru: '5-ст. МКПП Honda' } },
      { k: 'gearsStages', v: { en: '5 Forward + Reverse', de: '5 Vorwärtsgänge + Rückwärtsgang', ru: '5 передач вперёд + задняя' } },
      { k: 'fluidService', v: { en: 'Honda MTF-3 (~1.5 L · ~100,000 km)', de: 'Honda MTF-3 (~1,5 L · ~100.000 km)', ru: 'Honda MTF-3 (~1.5 л · ~100 000 км)' } }
    ],
    note: {
      en: 'Light, crisp urban gearbox; check input-shaft bearing noise on high-mileage Jazz examples.',
      de: 'Leichtgängiges Stadtgetriebe; bei hohen Laufleistungen auf ruhiges Getriebeeingangslager achten.',
      ru: 'Лёгкая и чёткая коробка; на больших пробегах проверяйте шум подшипника первичного вала.'
    }
  },
  '@gbCvtHonda': {
    specs: [
      { k: 'architecture', v: { en: 'Honda Steel-Belt CVT Automatic', de: 'Honda Schubgliederband-CVT-Automatik', ru: 'Вариатор Honda CVT со стальным ремнём' } },
      { k: 'gearsStages', v: { en: 'Continuously Variable (Stepless)', de: 'Stufenlos variabel', ru: 'Бесступенчатый' } },
      { k: 'fluidService', v: { en: 'Honda HMMF / CVTF (~3.2 L · Strictly @ 40,000 km)', de: 'Honda HMMF / CVTF (~3,2 L · Strikt alle 40.000 km)', ru: 'Honda HMMF / CVTF (~3.2 л · строго раз в 40 000 км)' } }
    ],
    note: {
      en: 'Smooth and durable in city driving when CVT fluid is changed strictly every 40,000 km.',
      de: 'Sanft und langlebig im Stadtverkehr, solange das CVT-Öl strikt alle 40.000 km gewechselt wird.',
      ru: 'Плавный и надёжный в городе при строгой замене масла каждые 40 000 км.'
    }
  },
  '@gbManual6Ford': {
    specs: [
      { k: 'architecture', v: { en: 'Ford / Getrag 6-Speed Manual (MMT6 / M66)', de: 'Ford / Getrag 6-Gang-Schaltgetriebe (MMT6 / M66)', ru: '6-ст. МКПП Ford / Getrag (MMT6 / M66)' } },
      { k: 'gearsStages', v: { en: '6 Forward + Reverse', de: '6 Vorwärtsgänge + Rückwärtsgang', ru: '6 передач вперёд + задняя' } },
      { k: 'fluidService', v: { en: '75W FE Gear Oil (~2.0 L · ~120,000 km)', de: '75W FE Getriebeöl (~2,0 L · ~120.000 km)', ru: 'Масло 75W FE (~2.0 л · ~120 000 км)' } }
    ],
    note: {
      en: 'Sturdy manual box well matched to highway torque — noticeably safer long-term than Ford PowerShift DCT.',
      de: 'Robustes Schaltgetriebe für hohe Drehmomente — langfristig deutlich risikoärmer als das PowerShift-DKG.',
      ru: 'Крепкая механика — гораздо надёжнее и дешевле в эксплуатации, чем робот PowerShift.'
    }
  },
  '@gbManual5Ford': {
    specs: [
      { k: 'architecture', v: { en: 'Ford 5-Speed Manual (IB5 / MTX-75)', de: 'Ford 5-Gang-Schaltgetriebe (IB5 / MTX-75)', ru: '5-ст. МКПП Ford (IB5 / MTX-75)' } },
      { k: 'gearsStages', v: { en: '5 Forward + Reverse', de: '5 Vorwärtsgänge + Rückwärtsgang', ru: '5 передач вперёд + задняя' } },
      { k: 'fluidService', v: { en: '75W-90 Gear Oil (~2.0 L · ~120,000 km)', de: '75W-90 Getriebeöl (~2,0 L · ~120.000 km)', ru: 'Масло 75W-90 (~2.0 л · ~120 000 км)' } }
    ],
    note: {
      en: 'Simple, proven 5-speed manual with low repair costs and easy parts availability.',
      de: 'Schlichtes, bewährtes 5-Gang-Getriebe mit günstigen Ersatzteilen und geringem Defektrisiko.',
      ru: 'Простая и проверенная 5-ступенчатая механика с недорогими запчастями.'
    }
  },
  '@gbAuto6Ford': {
    specs: [
      { k: 'architecture', v: { en: 'Aisin 6-Speed Hydraulic Torque-Converter Auto (TF-80SC)', de: 'Aisin 6-Gang-Wandlerautomatik (TF-80SC)', ru: '6-ст. классический автомат Aisin (TF-80SC)' } },
      { k: 'gearsStages', v: { en: '6 Forward + Reverse', de: '6 Vorwärtsgänge + Rückwärtsgang', ru: '6 передач вперёд + задняя' } },
      { k: 'fluidService', v: { en: 'ATF (~7.0 L · Advised @ 60–80,000 km)', de: 'ATF (~7,0 L · Empfohlen alle 60–80.000 km)', ru: 'ATF (~7.0 л · рек. раз в 60–80 тыс. км)' } }
    ],
    note: {
      en: 'Classic Japanese Aisin torque-converter automatic — far more durable in traffic than dual-clutch units.',
      de: 'Klassische japanische Aisin-Wandlerautomatik — im Stop-and-Go deutlich robuster als Doppelkuppler.',
      ru: 'Классический японский автомат Aisin — намного выносливее в пробках, чем роботы.'
    }
  },
  '@gbManual6Psa': {
    specs: [
      { k: 'architecture', v: { en: 'Reinforced 6-Speed Manual (MCM) + Torsen LSD', de: 'Verstärktes 6-Gang-Schaltgetriebe (MCM) + Torsen-Sperre', ru: 'Усиленная 6-ст. МКПП (MCM) + блокировка Torsen' } },
      { k: 'gearsStages', v: { en: '6 Forward + Reverse (Close-Ratio)', de: '6 Vorwärtsgänge + Rückwärtsgang (Kurz übersetzt)', ru: '6 сближенных передач + задняя' } },
      { k: 'fluidService', v: { en: '75W-80 Gear Oil (~2.1 L · ~60,000 km)', de: '75W-80 Getriebeöl (~2,1 L · ~60.000 km)', ru: 'Масло 75W-80 (~2.1 л · ~60 000 км)' } }
    ],
    note: {
      en: 'Reinforced shafts and integrated Torsen differential built specifically for 263 HP GTi duty.',
      de: 'Verstärkte Wellen und integriertes Torsen-Differenzial speziell für 263 PS GTi-Belastung.',
      ru: 'Усиленные валы и встроенный дифференциал Torsen рассчитаны на 263 л.с.'
    }
  },
  '@clutchTorqueConv': {
    specs: [
      { k: 'clutchType', v: { en: 'Hydraulic Torque Converter (✕ No Dry Friction Clutch)', de: 'Hydraulischer Drehmomentwandler (✕ Keine Trockenkupplung)', ru: 'Гидротрансформатор (✕ Без сухого сцепления)' } },
      { k: 'flywheel', v: { en: 'Flexplate (✕ No Dual-Mass Flywheel)', de: 'Mitnehmerscheibe (✕ Kein ZMS)', ru: 'Ведущий диск (✕ Без ДММ)' } },
      { k: 'lifespan', v: { en: '250,000+ km with periodic ATF refreshes', de: '250.000+ km bei regelmäßigem ATF-Wechsel', ru: '250 000+ км при регулярной замене ATF' } }
    ],
    note: {
      en: 'Smooth stop-and-go launches with zero dry-clutch wear or DMF rattle.',
      de: 'Sanftes Anfahren im Stau ohne Trockenkupplungs-Verschleiß oder ZMS-Rasseln.',
      ru: 'Плавный старт в пробках без износа сухого сцепления и стуков маховика.'
    }
  },
  '@driveAwdDualPump': {
    specs: [
      { k: 'driveLayout', v: { en: 'On-Demand All-Wheel Drive (Honda Dual-Pump)', de: 'Zuschaltbarer Allradantrieb (Honda Dual-Pump)', ru: 'Подключаемый полный привод (Honda Dual-Pump)' } },
      { k: 'diffAxles', v: { en: 'Mechanical Dual-Pump Rear Coupling · 4× Half-Shafts', de: 'Mechanische Dual-Pump-Hinterachskupplung · 4× Wellen', ru: 'Механическая муфта Dual-Pump · 4 привода' } }
    ],
    note: {
      en: 'Simple mechanical AWD with no fragile electronics — change rear DPSF fluid every 60,000 km to keep it silent.',
      de: 'Simpler mechanischer Allrad ohne anfällige Elektronik — Hinterachsöl (DPSF) alle 60.000 km wechseln.',
      ru: 'Простой механический полный привод — меняйте масло DPSF в редукторе раз в 60 тыс. км.'
    }
  },
  '@driveFwdLsd': {
    specs: [
      { k: 'driveLayout', v: { en: 'Front-Wheel Drive (Performance Geometry)', de: 'Frontantrieb (Performance-Vorderachse)', ru: 'Передний привод (спортивная геометрия)' } },
      { k: 'diffAxles', v: { en: '✓ Mechanical Helical / Torsen Limited-Slip Diff', de: '✓ Mechanisches Torsen-Sperrdifferenzial', ru: '✓ Механическая блокировка дифференциала (LSD)' } }
    ],
    note: {
      en: 'Pure mechanical gear-type LSD requires zero clutch-pack rebuilds and transforms corner-exit traction.',
      de: 'Rein mechanische Torsen-Sperre arbeitet verschleißarm und bringt hohe Leistung sauber auf den Asphalt.',
      ru: 'Чисто механическая блокировка не требует замены фрикционов и отлично реализует мощность.'
    }
  },
  '@suspDoubleWishbone': {
    specs: [
      { k: 'frontAxle', v: { en: 'Double-Wishbone Independent Front', de: 'Doppelquerlenker-Vorderachse', ru: 'Двухрычажная независимая спереди' } },
      { k: 'rearAxle', v: { en: 'Multi-Link Independent Rear', de: 'Mehrlenker-Hinterachse', ru: 'Многорычажная независимая сзади' } },
      { k: 'wearComplexity', v: { en: 'Medium–High (Premium Alignment & Bushings)', de: 'Mittel–Hoch (Mehr Lenker & Buchsen)', ru: 'Средне-высокая (больше рычагов и сайлентблоков)' } }
    ],
    note: {
      en: 'BMW-rivaling double-wishbone chassis delivers superb composure; upper ball joints & bushings age normally past 160k km.',
      de: 'Hochwertiges Doppelquerlenker-Fahrwerk mit top Stabilität; obere Traggelenke & Buchsen ab 160tkm prüfen.',
      ru: 'Породистая двухрычажная подвеска дарит отличную управляемость; шаровые и сайлентблоки планово проверяются после 160 тыс. км.'
    }
  },
  '@suspSportHotHatch': {
    specs: [
      { k: 'frontAxle', v: { en: 'Reinforced Performance Front Struts + Heavy Stabilizer', de: 'Verstärktes Sportfahrwerk vorn + dicker Stabilisator', ru: 'Усиленная спортподвеска спереди + мощный стабилизатор' } },
      { k: 'rearAxle', v: { en: 'Stiffened Performance Rear Axle + Sport Dampers', de: 'Abgestimmtes Sportfahrwerk hinten + Sportdämpfer', ru: 'Жёсткая задняя ось + спортивные амортизаторы' } },
      { k: 'wearComplexity', v: { en: 'Medium (Higher Tyre & Damper Load)', de: 'Mittel (Höhere Belastung für Reifen & Dämpfer)', ru: 'Средняя (повышенная нагрузка на шины и амортизаторы)' } }
    ],
    note: {
      en: 'Track-capable sport suspension stays tight and predictable; inspect front ball joints and damper leaks on driven examples.',
      de: 'Präzises Sportfahrwerk mit hoher Kurvenstabilität; bei sportlich gefahrenen Exemplaren Dämpfer & Lager prüfen.',
      ru: 'Точная спортподвеска для активной езды; на динамичных авто проверяйте амортизаторы и шаровые.'
    }
  },
  '@tractionFwdLsd': {
    specs: [
      { k: 'tractionSys', v: { en: 'FWD · ✓ Mechanical Torsen / Helical LSD + Sport ESP', de: 'Frontantrieb · ✓ Mechanische Differenzialsperre + Sport-ESP', ru: 'Передний привод · ✓ Механическая блокировка LSD + Sport ESP' } }
    ],
    note: {
      en: 'Pulls cleanly out of tight apexes under full throttle with minimal torque steer.',
      de: 'Zieht unter Volllast sauber aus engen Kurven ohne störendes Zerren in der Lenkung.',
      ru: 'Уверенно вытягивает из поворотов под полным газом с минимальной пробуксовкой.'
    }
  },
  '@tractionAwd': {
    specs: [
      { k: 'tractionSys', v: { en: 'All-Wheel Drive (On-Demand) + Electronic Stability (ESP)', de: 'Allradantrieb (Zuschaltbar) + ESP', ru: 'Полный привод (подключаемый) + ESP' } }
    ],
    note: {
      en: 'Confident traction on wet, snowy, or gravel roads and when pulling trailers.',
      de: 'Sichere Traktion bei Nässe, Schnee, Schotter und im Anhängerbetrieb.',
      ru: 'Уверенный зацеп в дождь, снег, на грунтовке и при буксировке прицепа.'
    }
  },
  '@brakeSetupPerf': {
    specs: [
      { k: 'discHardware', v: { en: 'Large Ventilated Front Discs (350–380 mm) + 4-Piston Fixed Calipers', de: 'Große Sport-Bremsscheiben (350–380 mm) + 4-Kolben-Festsättel', ru: 'Крупные спорт-диски (350–380 мм) + 4-поршневые суппорты' } }
    ],
    note: {
      en: 'Immense stopping power and fade resistance; replacement two-piece front discs are noticeably pricier than standard hatches.',
      de: 'Enorme Verzögerung und Fading-Resistenz; Ersatz-Bremsscheiben vorn sind spürbar teurer als bei Serienmodellen.',
      ru: 'Мощнейшее замедление и стойкость к перегреву, но передние составные диски заметно дороже обычных.'
    }
  }
};

function resolveDossierSpecItem(entry) {
  if (!entry) return null;
  if (typeof entry === 'string' && entry.startsWith('@') && SPEC_DOSSIER_PRESETS[entry]) {
    return SPEC_DOSSIER_PRESETS[entry];
  }
  return entry;
}

function resolveDossierTechVal(val, car) {
  if (val == null) return '—';
  let resolved = resolveSpecEntry(val);
  if (typeof resolved === 'string' && resolved.startsWith('{') && resolved.endsWith('}') && car) {
    const token = resolved.slice(1, -1);
    if (token.startsWith('specs.')) {
      const sKey = token.slice(6);
      resolved = car.specs ? resolveSpecEntry(car.specs[sKey]) : '—';
    } else if (token === 'car.hp') {
      const hp = Number(car.hp) || 0;
      const kw = Math.round(hp * 0.7355);
      resolved = currentLang === 'de' ? `${kw} kW (${hp} PS)` : currentLang === 'ru' ? `${kw} кВт (${hp} л.с.)` : `${kw} kW (${hp} HP)`;
    } else if (token.startsWith('price.')) {
      const ui = t();
      const pm = getPriceBreakdownMetrics(car, ui);
      const pField = token.slice(6);
      if (pField === 'retainedPct') resolved = `${pm.retainedPct}%`;
      else if (pField === 'annualLoss') {
        const suffix = currentLang === 'de' ? '/J.' : currentLang === 'ru' ? '/год' : '/yr';
        resolved = `~${formatEuroAmount(pm.annualLoss)}${suffix}`;
      } else if (pField === 'outlook') resolved = pm.outlook;
    }
  }
  const raw = resolved == null ? '—' : typeof resolved === 'string' ? resolved : (resolved[currentLang] || resolved.en || '—');
  return raw
    .replace(/✓/g, '<span class="spec-mark spec-mark-yes">✓</span>')
    .replace(/✕/g, '<span class="spec-mark spec-mark-no">✕</span>');
}

function resolveDynamicDossierNote(rowKey, item, car) {
  const rawVal = car && car.specs ? resolveSpecEntry(car.specs[rowKey]) : null;
  const rawStr = rawVal == null ? '' : typeof rawVal === 'string' ? rawVal : (rawVal.en || '');
  const pick = (obj) => obj[currentLang] || obj.en;

  // Rule: 0 kg (No Tow) -> Red X negative callout
  if (rowKey === 'towingBraked' && /^0\s*kg/i.test(rawStr.trim())) {
    return {
      negative: true,
      text: pick({
        en: 'Not approved for a tow bar — 0 kg towing capacity due to rear aero/exhaust layout or powertrain limits.',
        de: 'Keine Anhängerkupplung zugelassen — 0 kg Anhängelast aufgrund von Heckdiffusor/Abgasanlage oder Antrieb.',
        ru: 'Установка фаркопа не предусмотрена — буксировка прицепа запрещена (0 кг).'
      })
    };
  }

  // Only replace generic preset notes with value-tiered verdicts (preserve custom per-car notes!)
  const isPresetRef = typeof item === 'string' && item.startsWith('@');
  if (isPresetRef) {
    if (rowKey === 'sprint0100') {
      const m = rawStr.match(/([\d.]+)/);
      const sec = m ? parseFloat(m[1]) : 10;
      if (sec <= 6.5) {
        return { negative: false, text: pick({ en: 'Blistering hot-hatch pace — genuine sports-car thrust off the line and on motorway merges.', de: 'Brachiale Hot-Hatch-Beschleunigung — echtes Sportwagen-Niveau beim Sprint und Einfädeln.', ru: 'Взрывной разгон уровня спорткара — молниеносные обгоны и старт с места.' }) };
      }
      if (sec <= 8.6) {
        return { negative: false, text: pick({ en: 'Brisk, effortless acceleration with plenty of reserve for fast highway merges.', de: 'Flotter, souveräner Sprint mit reichlich Leistungsreserve für schnelle Überholmanöver.', ru: 'Бодрая, уверенная динамика с хорошим запасом для быстрых перестроений.' }) };
      }
      if (sec <= 11.2) {
        return { negative: false, text: pick({ en: 'Solid everyday pace — smooth in city traffic and comfortable for normal highway cruising.', de: 'Solides Alltagstempo — harmonisch im Stadtverkehr und entspannt auf normalen Etappen.', ru: 'Уверенный повседневный темп — комфортно в городе и спокойно на трассе.' }) };
      }
      return { negative: true, text: pick({ en: 'Relaxed, economy-first acceleration — built for calm city commuting rather than quick sprints.', de: 'Gemächliche, auf Effizienz ausgelegte Beschleunigung — klar für ruhigen Alltag statt Sprints.', ru: 'Спокойный экономичный разгон — рассчитан на неспешную городскую езду.' }) };
    }

    if (rowKey === 'topSpeed') {
      const m = rawStr.match(/(\d+)/);
      const vmax = m ? parseInt(m[1], 10) : 190;
      if (vmax >= 245) {
        return { negative: false, text: pick({ en: 'Unrestricted Autobahn express speed — effortless stability well past 200 km/h.', de: 'Echtes Autobahn-Express-Tempo — souveräne Stabilität weit jenseits der 200 km/h.', ru: 'Спорткаровская максималка — уверенная стабильность далеко за 200 км/ч.' }) };
      }
      if (vmax >= 205) {
        return { negative: false, text: pick({ en: 'Strong motorway cruising reserve — holds 130–160 km/h calmly without straining.', de: 'Souveräne Autobahn-Reserve — hält 130–160 km/h angenehm entspannt.', ru: 'Хороший запас по скорости — спокойно держит 130–160 км/ч без напряжения.' }) };
      }
      return { negative: false, text: pick({ en: 'Focused on urban efficiency and moderate highway speeds (120–130 km/h sweet spot).', de: 'Ausgelegt auf Effizienz und entspanntes Reisetempo (120–130 km/h Wohlfühlbereich).', ru: 'Оптимально для города и спокойного крейсерского темпа 110–130 км/ч.' }) };
    }

    if (rowKey === 'peakTorque') {
      const ft = car && car.fuelType;
      const m = rawStr.match(/(\d+)/);
      const nm = m ? parseInt(m[1], 10) : 160;
      if (nm >= 320) {
        return { negative: false, text: pick({ en: 'Heavyweight mid-range muscle — pulls effortlessly from low rpm even in high gears.', de: 'Bärenstarker Durchzug aus dem Drehzahlkeller — zieht selbst in hohen Gängen mühelos an.', ru: 'Мощнейшая тяга с низов — легко ускоряется даже на высших передачах.' }) };
      }
      if (nm >= 200) {
        return { negative: false, text: pick({ en: 'Strong, usable mid-range pull that makes highway overtaking relaxed without frequent downshifts.', de: 'Kräftige Mitte für entspanntes Überholen auf Landstraße und Autobahn.', ru: 'Хорошая тяга в среднем диапазоне — уверенные обгоны без лишних переключений.' }) };
      }
      if (ft === 'hybrid') {
        return { negative: false, text: pick({ en: 'Electric motor fills in low-end torque instantly — effortless off the line and in city traffic, with steady, smooth highway acceleration.', de: 'Der E-Motor füllt das Drehmoment untenherum sofort auf — müheloser Antritt im Stadtverkehr und gleichmäßiger Schub auf der Autobahn.', ru: 'Электромотор мгновенно добавляет тягу с низов — лёгкий старт в городе и плавное, ровное ускорение на трассе.' }) };
      }
      return { negative: false, text: pick({ en: 'Modest naturally aspirated torque — smooth around town, rewards a downshift for brisk passing.', de: 'Typisches Saugmotor-Drehmoment — sanft im Alltag, verlangt beim Überholen einen Gang tiefer.', ru: 'Умеренный момент атмосферника — ровно в городе, но для обгона лучше переключиться ниже.' }) };
    }

    if (rowKey === 'passingPunch') {
      const ft = car && car.fuelType;
      const tqStr = car && car.specs && car.specs.peakTorque ? String(resolveSpecEntry(car.specs.peakTorque)) : '';
      const tqM = tqStr.match(/(\d+)/);
      const nm = tqM ? parseInt(tqM[1], 10) : 160;
      if (nm >= 320) {
        return { negative: false, text: pick({ en: 'Instantaneous in-gear overtaking surge — clears slower traffic in a heartbeat.', de: 'Sofortiger Überholschub im hohen Gang — lässt langsamere Fahrzeuge mühelos hinter sich.', ru: 'Мгновенный подхват на обгоне — проходит фуры на одном дыхании.' }) };
      }
      if (ft === 'hybrid') {
        return { negative: false, text: pick({ en: 'Snappy electric response in city traffic; steady, predictable acceleration at motorway speeds.', de: 'Spontaner E-Antritt in der Stadt; auf der Autobahn gleichmäßig und ruhig.', ru: 'Бодрый электро-отклик в городе; ровный и спокойный разгон на трассе.' }) };
      }
      if (nm >= 200) {
        return { negative: false, text: pick({ en: 'Confident 80–120 km/h highway elasticity with minimal gear-shifting required.', de: 'Souveräne 80–120-km/h-Elastizität ohne hektisches Herunterschalten.', ru: 'Уверенная эластичность 80–120 км/ч без частых переключений.' }) };
      }
      return { negative: false, text: pick({ en: 'Predictable linear delivery — drop one or two gears for confident country-road overtakes.', de: 'Lineare Kraftentfaltung — für zügiges Überholen einfach ein bis zwei Gänge herunterschalten.', ru: 'Линейный характер — для быстрого обгона на трассе достаточно сбросить 1–2 передачи.' }) };
    }

    if (rowKey === 'braking1000') {
      const m = rawStr.match(/([\d.]+)/);
      const dist = m ? parseFloat(m[1]) : 36.5;
      if (dist <= 34.5) {
        return { negative: false, text: pick({ en: 'Sports-car stopping distance — ferocious bite and high thermal stability under repeated hard stops.', de: 'Sportwagen-Bremsweg — enormer Biss und hohe Standfestigkeit selbst bei wiederholten Vollbremsungen.', ru: 'Тормозной путь уровня спорткара — мощнейшая хватка и стойкость к перегреву.' }) };
      }
      if (dist <= 36.8) {
        return { negative: false, text: pick({ en: 'Confident, short everyday stopping distance with reassuring pedal feel.', de: 'Verlässlicher, kurzer Alltags-Bremsweg mit gut dosierbarem Pedalgefühl.', ru: 'Короткий и уверенный тормозной путь с понятной педалью тормоза.' }) };
      }
      return { negative: false, text: pick({ en: 'Average stopping distance for its weight class — quality touring tyres noticeably sharpen wet braking.', de: 'Solider Bremsweg für die Gewichtsklasse — gute Markenreifen verkürzen den Nassbremsweg spürbar.', ru: 'Стандартный тормозной путь для своей массы — хорошие шины заметно улучшают торможение.' }) };
    }
  }

  const resolvedItem = resolveDossierSpecItem(item);
  const noteText =
    resolvedItem && resolvedItem.note
      ? typeof resolvedItem.note === 'string'
        ? resolvedItem.note
        : (resolvedItem.note[currentLang] || resolvedItem.note.en)
      : '';
  return noteText ? { negative: Boolean(resolvedItem.negative), text: noteText } : null;
}

function buildMarketDepreciationDossierHtml(car, oppCar, ui) {
  const m = getPriceBreakdownMetrics(car, ui);
  const oppM = oppCar ? getPriceBreakdownMetrics(oppCar, ui) : null;
  const retWin = oppM && m.retainedPctNum > oppM.retainedPctNum + 0.05 ? 'is-win' : '';
  const lossWin = oppM && m.annualLoss < oppM.annualLoss - 5 ? 'is-win' : '';
  const yrSuffix = currentLang === 'de' ? '/J.' : currentLang === 'ru' ? '/год' : '/yr';
  const demandText = car && car.specs && car.specs.resaleDemand ? resolveLocalizedSpecVal(car.specs.resaleDemand) : '';

  return `
    <div class="dossier-datasheet-box dossier-market-sheet">
      <div class="dossier-sheet-head">
        <span class="dossier-spec-card-label">${ui.priceTitle}</span>
        ${demandText ? `<span class="dossier-spec-card-pill">${demandText}</span>` : ''}
      </div>
      <div class="dossier-tech-table dossier-market-table">
        <div class="dossier-tech-row">
          <span class="dossier-tech-label">${ui.priceMsrpLabel}</span>
          <span class="dossier-tech-val">${formatEuroAmount(m.msrp)}</span>
        </div>
        <div class="dossier-tech-row">
          <span class="dossier-tech-label">${ui.priceCurrentLabel}</span>
          <span class="dossier-tech-val is-accent">${formatEuroAmount(m.used)}</span>
        </div>
        <div class="dossier-tech-row">
          <span class="dossier-tech-label">${ui.priceDepTotalLabel}</span>
          <span class="dossier-tech-val is-loss">-${formatEuroAmount(m.depTotal)} (-${m.depPct}%)</span>
        </div>
        <div class="dossier-tech-row">
          <span class="dossier-tech-label">${ui.priceRetainedLabel}</span>
          <span class="dossier-tech-val ${retWin}">${m.retainedPct}%</span>
        </div>
        <div class="dossier-tech-row">
          <span class="dossier-tech-label">${ui.priceAnnualLabel}</span>
          <span class="dossier-tech-val ${lossWin}">~${formatEuroAmount(m.annualLoss)}${yrSuffix}</span>
        </div>
      </div>
      <hr class="dossier-sheet-divider" aria-hidden="true" />
      <div class="dossier-market-outlook">
        <span class="dossier-market-outlook-label">${ui.priceOutlookLabel}</span>
        <span class="dossier-market-outlook-val">${m.outlook}</span>
      </div>
    </div>
  `;
}

function buildDossierSpecBreakdownHtml(car, statKey, oppCar) {
  if (statKey === 'depreciationResale' && car && car.specs) {
    return buildMarketDepreciationDossierHtml(car, oppCar, t());
  }

  const subObj = car && car.subStats && car.subStats[statKey];
  const sharedBd = car && car.sharedDossierBreakdowns && car.sharedDossierBreakdowns[statKey];
  const engineBd = subObj && subObj.specBreakdown;
  const breakdown = sharedBd || engineBd ? { ...(sharedBd || {}), ...(engineBd || {}) } : null;
  const specRows = SUB_STAT_SPEC_ROWS[statKey];
  if (!breakdown || !specRows || !specRows.length) return '';

  const sections = specRows
    .map((row) => {
      const rawEntry = breakdown[row.key];
      const item = resolveDossierSpecItem(rawEntry);
      if (!item) return '';
      const valHtml = car.specs && car.specs[row.key] != null ? resolveLocalizedSpecVal(car.specs[row.key]) : '';
      const techRows = Array.isArray(item.specs) ? item.specs : [];
      const noteObj = resolveDynamicDossierNote(row.key, rawEntry, car);

      const techTableHtml = techRows.length
        ? `<div class="dossier-tech-table">
            ${techRows
              .map((tr) => {
                const labelObj = DOSSIER_TECH_LABELS[tr.k];
                const labelTxt = labelObj ? (labelObj[currentLang] || labelObj.en) : tr.k;
                const valTxt = resolveDossierTechVal(tr.v, car);
                return `
                  <div class="dossier-tech-row">
                    <span class="dossier-tech-label">${labelTxt}</span>
                    <span class="dossier-tech-val">${valTxt}</span>
                  </div>
                `;
              })
              .join('')}
          </div>`
        : '';

      return `
        <div class="dossier-sheet-section">
          <div class="dossier-sheet-head">
            <span class="dossier-spec-card-label">${row.label[currentLang] || row.label.en}</span>
            ${valHtml ? `<span class="dossier-spec-card-pill">${valHtml}</span>` : ''}
          </div>
          ${techTableHtml}
          ${
            noteObj && noteObj.text
              ? `<div class="dossier-sheet-note ${noteObj.negative ? 'is-negative' : ''}">
                  <span class="dossier-sheet-note-icon" aria-hidden="true">${noteObj.negative ? '✕' : '✓'}</span>
                  <span>${noteObj.text}</span>
                </div>`
              : ''
          }
        </div>
      `;
    })
    .filter(Boolean);

  if (!sections.length) return '';
  return `<div class="dossier-datasheet-box">${sections.join('<hr class="dossier-sheet-divider" aria-hidden="true" />')}</div>`;
}
const REPAIR_GUIDE_I18N = {
  en: {
    title: '15-YEAR / 250,000 KM SERVICE & REPAIR GUIDE',
    routineTitle: 'MODEL-SPECIFIC ROUTINE SERVICE',
    criticalTitle: 'KNOWN WEAK SPOTS & CRITICAL REPAIRS',
    routineTag: 'Routine',
    criticalTag: 'Critical',
    show: 'SHOW GUIDE ▾',
    hide: 'HIDE GUIDE ▴',
    ifIgnored: 'If ignored:',
    noneCritical: 'No chronic model-specific mechanical flaws recorded on this powertrain.'
  },
  de: {
    title: '15-JAHRE / 250.000 KM WARTUNGS- & REPARATURPLAN',
    routineTitle: 'MODELLSPEZIFISCHE ROUTINE-WARTUNG',
    criticalTitle: 'BEKANNTE SCHWACHSTELLEN & KRITISCHE TEILE',
    routineTag: 'Routine',
    criticalTag: 'Kritisch',
    show: 'PLAN ANZEIGEN ▾',
    hide: 'PLAN AUSBLENDEN ▴',
    ifIgnored: 'Bei Ignorieren:',
    noneCritical: 'Keine chronischen modellspezifischen Schwachstellen bei diesem Antrieb bekannt.'
  },
  ru: {
    title: 'ПЛАН ОБСЛУЖИВАНИЯ И РЕМОНТОВ (15 ЛЕТ / 250 000 КМ)',
    routineTitle: 'СПЕЦИФИЧЕСКОЕ ПЛАНОВОЕ ОБСЛУЖИВАНИЕ',
    criticalTitle: 'СЛАБЫЕ МЕСТА И КРИТИЧНЫЕ УЗЛЫ',
    routineTag: 'Планово',
    criticalTag: 'Критично',
    show: 'ПОКАЗАТЬ ПЛАН ▾',
    hide: 'СКРЫТЬ ПЛАН ▴',
    ifIgnored: 'Если игнорировать:',
    noneCritical: 'Хронических конструктивных «болячек» у данного агрегата не отмечено.'
  }
};

function buildRepairGuideAccordionHtml(car) {
  const subObj = car && car.subStats && car.subStats.maintenanceRepairCosts;
  const guide = subObj && subObj.repairGuide;
  if (!guide) return '';

  const rg = REPAIR_GUIDE_I18N[currentLang] || REPAIR_GUIDE_I18N.en;
  const routineItems = Array.isArray(guide.routine) ? guide.routine : [];
  const criticalItems = Array.isArray(guide.critical) ? guide.critical : [];
  if (!routineItems.length && !criticalItems.length) return '';

  const pick = (v) => (v == null ? '' : typeof v === 'string' ? v : (v[currentLang] || v.en || ''));

  const routineRowsHtml = routineItems
    .map(
      (item) => `
      <div class="rg-row rg-row-routine">
        <span class="rg-when">${pick(item.when)}</span>
        <span class="rg-action">${pick(item.action)}</span>
        <span class="rg-cost">${pick(item.cost)}</span>
      </div>
    `
    )
    .join('');

  const criticalRowsHtml = criticalItems.length
    ? criticalItems
        .map(
          (item) => `
      <div class="rg-row-wrap rg-row-critical">
        <div class="rg-row">
          <span class="rg-when is-crit">${pick(item.when)}</span>
          <span class="rg-action">${pick(item.action)}</span>
          <span class="rg-cost is-crit">${pick(item.cost)}</span>
        </div>
        ${
          item.risk
            ? `<div class="rg-risk-line">
                <span class="rg-risk-prefix">↳ ${rg.ifIgnored}</span>
                <span class="rg-risk-text">${pick(item.risk)}</span>
                ${item.damage ? `<span class="rg-damage-pill">${pick(item.damage)}</span>` : ''}
              </div>`
            : ''
        }
      </div>
    `
        )
        .join('')
    : `<div class="rg-empty-note">${rg.noneCritical}</div>`;

  return `
    <div class="dossier-roadmap-accordion dossier-datasheet-roadmap dossier-repair-guide">
      <button type="button" class="dossier-roadmap-toggle-btn rg-toggle-btn" id="dossier-roadmap-toggle" aria-expanded="false" data-show-label="${escapeHtmlAttr(rg.show)}" data-hide-label="${escapeHtmlAttr(rg.hide)}">
        <div class="rg-toggle-left">
          <span class="rg-toggle-title">${rg.title}</span>
          <div class="rg-count-pills">
            <span class="rg-count-pill is-routine">${routineItems.length} ${rg.routineTag}</span>
            <span class="rg-count-pill is-critical">${criticalItems.length} ${rg.criticalTag}</span>
          </div>
        </div>
        <span class="roadmap-toggle-cta">${rg.show}</span>
      </button>

      <div class="dossier-roadmap-drawer rg-drawer" id="dossier-roadmap-drawer">
        ${
          routineItems.length
            ? `<div class="rg-section">
                <div class="rg-section-head is-routine">${rg.routineTitle}</div>
                <div class="rg-rows-list">${routineRowsHtml}</div>
              </div>`
            : ''
        }
        ${routineItems.length ? '<hr class="dossier-sheet-divider" aria-hidden="true" />' : ''}
        <div class="rg-section">
          <div class="rg-section-head is-critical">${rg.criticalTitle}</div>
          <div class="rg-rows-list">${criticalRowsHtml}</div>
        </div>
      </div>
    </div>
  `;
}

function resolveSpecEntry(val) {
  if (typeof val === 'string' && val.startsWith('@') && SPEC_TOKENS[val]) {
    return SPEC_TOKENS[val];
  }
  return val;
}

const SPEC_DOSSIER_HINT = {
  en: 'Click to open Engineering Dossier ↗',
  de: 'Klicken für Technik-Dossier ↗',
  ru: 'Нажмите для тех. досье ↗'
};

// Category 01 (Reliability & Durability) Row-Level Buyer Explanations
const SPEC_ROW_HINTS = {
  engineName: {
    en: 'The core engine architecture. Simpler naturally aspirated and proven hybrid engines typically age with fewer costly surprises than complex high-output units.',
    de: 'Die grundlegende Motorbauart. Schlichte Saugmotoren und bewährte Hybride altern meist mit deutlich weniger teuren Überraschungen als komplexe Hochleistungsmotoren.',
    ru: 'Базовая конструкция двигателя. Простые атмосферники и проверенные гибриды обычно служат дольше и дешевле в ремонте, чем сложные форсированные моторы.'
  },
  forcedInduction: {
    en: 'Whether the engine uses a turbocharger, supercharger, or electric motor assist. Turbos add torque but introduce an extra high-heat wear component on high-mileage used cars.',
    de: 'Zeigt, ob ein Turbolader, Kompressor oder E-Motor verbaut ist. Turbos bringen Durchzug, sind bei hoher Laufleistung aber ein zusätzliches Verschleißteil.',
    ru: 'Наличие турбины, компрессора или электромотора. Турбина даёт тягу, но на больших пробегах становится дополнительным узлом риска.'
  },
  injection: {
    en: 'How fuel enters the engine. Port (indirect) injection washes intake valves clean; direct injection boosts efficiency/power but can build carbon deposits over time.',
    de: 'Art der Kraftstoffeinspritzung. Saugrohr-Einspritzung (indirekt) hält Einlassventile sauber; Direkteinspritzung ist effizienter, neigt aber eher zu Verkokung.',
    ru: 'Тип впрыска топлива. Распределённый (непрямой) впрыск омывает клапаны и не коксуется; прямой впрыск экономичнее, но склонен к нагару.'
  },
  gearbox: {
    en: 'Transmission design determines long-term shifting reliability and service costs. Planetary e-CVTs and proven manuals are typically the lowest-risk choices on used cars.',
    de: 'Die Getriebebauart entscheidet über Haltbarkeit und Wartungskosten. Planeten-e-CVTs und robuste Schaltgetriebe gelten gebraucht als besonders risikoarm.',
    ru: 'Конструкция КПП напрямую влияет на ресурс и стоимость ремонта. Планетарные e-CVT и проверенная механика — самые надёжные варианты с пробегом.'
  },
  clutchDmf: {
    en: 'Clutch and Dual-Mass Flywheel (DMF) are major wear items on manual/diesel cars. Replacing a DMF + clutch typically costs €1,000–€1,800.',
    de: 'Kupplung und Zweimassenschwungrad (ZMS) sind typische Verschleißteile. Ein Tausch von Kupplung + ZMS kostet bei Gebrauchtwagen oft 1.000–1.800 €.',
    ru: 'Сцепление и двухмассовый маховик (ДММ) — дорогие расходники. Их замена на подержанном авто часто обходится в €1 000–1 800.'
  },
  driveline: {
    en: 'Which wheels are driven (FWD, RWD, AWD). Simpler 2WD layouts have fewer diffs, transfer cases, and axles to maintain than all-wheel drive.',
    de: 'Antriebskonzept (FWD, RWD, AWD). Reine Front- oder Hecktriebler haben weniger Achsen, Verteilergetriebe und Öle als Allradantriebe.',
    ru: 'Тип привода (FWD, RWD, AWD). Монопривод проще и дешевле в обслуживании, так как нет раздатки, муфты и лишних приводов.'
  },
  rustProtection: {
    en: 'Factory galvanizing and underbody sealing quality. Crucial on 10+ year old cars to avoid expensive welding work on sills, wheel arches, and subframes.',
    de: 'Qualität von Verzinkung und Unterbodenschutz ab Werk. Bei über 10 Jahre alten Autos entscheidend, um teure Schweißarbeiten an Schwellern und Achsträgern zu vermeiden.',
    ru: 'Качество заводской оцинковки и антикора днища. Критично для машин старше 10 лет, чтобы избежать дорогой сварки порогов и подрамника.'
  },
  suspensionWear: {
    en: 'Rear axle and suspension complexity. Torsion beams are cheap and simple to maintain; multi-link axles ride better but have more bushings and arms that eventually wear.',
    de: 'Bauart von Hinterachse und Fahrwerk. Verbundlenkerachsen sind simpel und günstig; Mehrlenkerachsen fahren komfortabler, haben aber mehr Lager und Lenker.',
    ru: 'Конструкция подвески. Балка проста и дешева в ремонте; многорычажка комфортнее, но имеет больше сайлентблоков и рычагов.'
  },
  starterAlternator: {
    en: 'Traditional 12V starter motors and alternators wear out around 150,000–220,000 km. Full hybrids replace both with brushless electric motor-generators.',
    de: 'Klassische 12V-Anlasser und Lichtmaschinen verschleißen oft bei 150.000–220.000 km. Vollhybride ersetzen beides durch bürstenlose E-Motorgeneratoren.',
    ru: 'Обычные стартер и генератор часто требуют ремонта к 150–220 тыс. км. В полных гибридах их заменяют бесщёточные электромоторы.'
  },
  electronicsRisk: {
    en: 'Overall wiring, ECU, and sensor fault likelihood. Simpler electrical architectures generally suffer far fewer random warning lights as cars age.',
    de: 'Allgemeine Störanfälligkeit von Kabelbaum, Steuergeräten und Sensoren. Schlichtere Bordelektronik produziert im Alter deutlich seltener Fehlermeldungen.',
    ru: 'Общий риск сбоев проводки, блоков ЭБУ и датчиков. Более простая электроника реже выдаёт случайные ошибки с возрастом.'
  },

  // Category 02 — Comfort, Cabin & Safety
  rideTuning: {
    en: 'How the suspension handles bumps, potholes, and expansion joints. Softer setups shine on rough city streets; firmer tuning trades cushion for cornering control.',
    de: 'Wie das Fahrwerk Bodenwellen, Schlaglöcher und Querfugen schluckt. Weichere Abstimmungen glänzen im Alltag; straffere bieten mehr Rückmeldung in Kurven.',
    ru: 'Как подвеска отрабатывает ямы и стыки. Мягкая настройка комфортнее в городе, жёсткая даёт лучшую собранность в поворотах.'
  },
  highwayNoise: {
    en: 'Cabin wind, tyre, and engine noise at ~130 km/h highway cruise. Every 3 dB reduction feels noticeably calmer and less tiring on long trips.',
    de: 'Wind-, Abroll- und Motorgeräusche bei ca. 130 km/h Autobahnfahrt. Jede 3 dB weniger wirken auf langen Strecken spürbar entspannter.',
    ru: 'Уровень шума ветра, шин и мотора на трассе при ~130 км/ч. Снижение на каждые 3 дБ делает дальние поездки заметно тише.'
  },
  cabinMaterials: {
    en: 'Dashboard, door-card, and trim quality plus resistance to squeaks and wear. Soft-touch trims feel upscale; durable hard plastics often resist scratches well.',
    de: 'Qualität von Armaturenbrett, Türverkleidungen und Verarbeitung. Soft-Touch wirkt wertiger; robuste Kunststoffe sind oft kratzresistenter.',
    ru: 'Качество отделки панели, дверей и сборки. Мягкий пластик выглядит солиднее, а жёсткий часто лучше держит царапины.'
  },
  controls: {
    en: 'How easy climate, audio, and driving functions are to use eyes-free. Physical dials and buttons are much safer and faster to operate while driving than touch-only menus.',
    de: 'Wie intuitiv Klima, Audio und Funktionen blind bedienbar sind. Echte Tasten und Drehregler sind während der Fahrt deutlich sicherer als reine Touch-Menüs.',
    ru: 'Удобство управления климатом и мультимедиа вслепую. Физические кнопки и крутилки намного безопаснее и быстрее сенсорных экранов.'
  },
  turningCircle: {
    en: 'Wall-to-wall U-turn diameter. Under 10.8 m feels nimble in tight garages and city streets; over 11.5 m requires more three-point turns.',
    de: 'Wendekreis von Bordstein zu Bordstein. Unter 10,8 m fährt sich in engen Parkhäusern und Innenstädten spürbar handlicher als über 11,5 m.',
    ru: 'Диаметр разворота от стены до стены. До 10.8 м машина ощущается очень юркой во дворах и паркингах, свыше 11.5 м — менее манёвренной.'
  },
  visibility: {
    en: 'Sightlines through the windshield, pillars, and rear window. Thin pillars and big glass make lane changes and parallel parking far less stressful.',
    de: 'Übersichtlichkeit durch Frontscheibe, Säulen und Heckfenster. Schlanke Säulen und große Glasflächen erleichtern Spurwechsel und Einparken enorm.',
    ru: 'Обзорность через стёкла и стойки кузова. Тонкие стойки и крупное заднее стекло сильно упрощают перестроения и парковку.'
  },
  euroNcap: {
    en: 'Official European crash-test star rating and test year. Note that newer test years apply stricter crash and assist criteria than older ones.',
    de: 'Offizielle Euro-NCAP-Crashtest-Sterne inklusive Testjahr. Neuere Testjahre legen deutlich strengere Maßstäbe an als ältere Jahrgänge.',
    ru: 'Официальный рейтинг краш-теста Euro NCAP и год испытаний. В более свежих годах требования к защите и ассистентам значительно строже.'
  },
  safetyTech: {
    en: 'Electronic stability control (ESP) and active crash-avoidance assists like Autonomous Emergency Braking (AEB). AEB cuts low-speed rear-end collisions dramatically.',
    de: 'Stabilitätskontrolle (ESP) und aktive Assistenten wie Notbremsassistent (AEB). Ein Notbremsassistent verhindert Auffahrunfälle im Stadtverkehr extrem zuverlässig.',
    ru: 'Система стабилизации (ESP) и активные ассистенты вроде автоторможения (AEB), которое резко снижает риск городских столкновений.'
  },

  // Category 03 — Space & Practicality
  rearRoom: {
    en: 'Back-seat knee room and headroom for full-size adults. Crucial if you regularly carry adult passengers or bulky rear-facing child seats.',
    de: 'Bein- und Kopffreiheit im Fond für Erwachsene. Entscheidend für Mitfahrer auf Langstrecken oder sperrige Reboarder-Kindersitze.',
    ru: 'Запас места для ног и над головой сзади для взрослых пассажиров и крупных детских кресел.'
  },
  isofixEntry: {
    en: 'ISOFIX child-seat anchor availability plus door opening angle and sill height — determines how easily kids, seniors, or car seats get in and out.',
    de: 'ISOFIX-Kindersitzanker sowie Türöffnungswinkel und Einstiegshöhe — entscheidend für komfortables Ein- und Aussteigen im Alltag.',
    ru: 'Наличие креплений ISOFIX, ширина проёма дверей и высота порога — от этого зависит удобство посадки семьи и установки кресел.'
  },
  bootVolume: {
    en: 'Usable luggage capacity with rear seats up vs. folded flat (VDA liters). Around 350–400 L suits weekly shopping; 450+ L handles family holiday luggage easily.',
    de: 'Nutzbares Kofferraumvolumen mit aufgestellter vs. umgeklappter Rückbank (Liter). Ab 450 L passen Kinderwagen und Urlaubsgepäck entspannt hinein.',
    ru: 'Полезный объём багажника в обычном и сложенном виде (литры). От 450 л легко помещаются коляска и багаж всей семьи.'
  },
  seatUtility: {
    en: 'How flexibly the rear bench folds (flat floor, 60/40 split, sliding bench, or Honda Magic Seats) for hauling long or tall items.',
    de: 'Flexibilität der Rückbank (ebener Ladeboden, verschiebbare Bank, Magic Seats) beim Transport sperriger oder hoher Gegenstände.',
    ru: 'Удобство трансформации заднего ряда (ровный пол, сдвижной диван, Magic Seats) для перевозки длинных или высоких грузов.'
  },
  payloadRoof: {
    en: 'Maximum legal weight the car can carry (passengers + luggage) and maximum roof-rack load for roof boxes or bikes.',
    de: 'Maximale Zuladung (Passagiere + Gepäck) sowie zulässige Dachlast für Dachboxen oder Fahrradträger.',
    ru: 'Максимальная полезная нагрузка (пассажиры + груз) и допустимая нагрузка на крышу для автобокса или велосипедов.'
  },
  towingBraked: {
    en: 'Maximum braked trailer weight allowed. Important for caravans, boat trailers, or heavy utility trailers (many hybrids have very low limits).',
    de: 'Maximale gebremste Anhängelast. Wichtig für Wohnwagen oder größere Anhänger (viele Hybride dürfen nur sehr wenig ziehen).',
    ru: 'Максимальная масса прицепа с тормозами. Важно для кемперов и тяжёлых прицепов (у многих гибридов лимит очень низкий).'
  },

  // Category 04 — Performance & Dynamics
  sprint0100: {
    en: 'Official 0–100 km/h acceleration time. Under 8.0 s feels genuinely quick; 9–11 s is comfortable daily pace; over 12 s feels relaxed.',
    de: 'Beschleunigung von 0 auf 100 km/h. Unter 8,0 s wirkt spürbar flott, 9–11 s sind solides Alltagstempo, über 12 s eher gemächlich.',
    ru: 'Разгон 0–100 км/ч. Быстрее 8.0 с — реально динамично, 9–11 с — уверенный городской темп, свыше 12 с — спокойно.'
  },
  topSpeed: {
    en: 'Factory maximum speed. Even if you never drive at Vmax, higher top speed usually reflects relaxed highway gearing and reserve power.',
    de: 'Werks-Höchstgeschwindigkeit. Auch abseits von Vollgas deutet eine höhere Vmax meist auf entspanntere Autobahn-Reserven hin.',
    ru: 'Максимальная скорость по паспорту. Более высокий показатель обычно означает лучшую динамику и запас мощности на трассе.'
  },
  peakTorque: {
    en: 'Maximum twisting force (Nm) and the rpm where it arrives. High torque below 2,000 rpm makes everyday acceleration feel effortless.',
    de: 'Maximales Drehmoment (Nm) und Drehzahlpunkt. Hohes Drehmoment unter 2.000 U/min sorgt für mühelosen Durchzug im Alltag.',
    ru: 'Пиковый крутящий момент (Н·м) и обороты его достижения. Высокая тяга до 2000 об/мин делает езду лёгкой без раскрутки мотора.'
  },
  passingPunch: {
    en: 'Real-world mid-range overtaking feel (e.g., 80–120 km/h). Turbocharged and diesel engines pull strongly in-gear; naturally aspirated engines need a downshift.',
    de: 'Praxis-Durchzug beim Überholen (z. B. 80–120 km/h). Turbos und Diesel ziehen direkt an; Saugmotoren verlangen meist einen Gang tiefer.',
    ru: 'Реальная эластичность на обгонах (80–120 км/ч). Турбо и дизели тянут сразу, атмосферникам обычно нужно переключиться ниже.'
  },
  chassisFeel: {
    en: 'How composed, predictable, and engaging the car feels through corners and quick lane changes.',
    de: 'Wie stabil, präzise und agil sich das Auto in Kurven und bei schnellen Ausweichmanövern anfühlt.',
    ru: 'Насколько собранно, точно и предсказуемо автомобиль ведёт себя в поворотах и при перестроениях.'
  },
  tractionDiff: {
    en: 'Driven wheels and differential hardware. Mechanical LSDs put hot-hatch power down cleanly; AWD maximizes wet and winter launch grip.',
    de: 'Antriebsart und Differenzial. Mechanische Sperrdifferenziale bringen hohe Leistung sauber auf die Straße; Allrad maximiert Winter-Traktion.',
    ru: 'Привод и тип дифференциала. Механическая блокировка реализует мощность хот-хэтчей, а полный привод даёт максимум зацепа зимой.'
  },
  braking1000: {
    en: 'Emergency stopping distance from 100 km/h to standstill. Around 35–37 m is strong for road cars; under 35 m is sports-car territory.',
    de: 'Bremsweg aus 100 km/h bis zum Stillstand. Rund 35–37 m sind sehr gut für Alltagsautos; unter 35 m liegt auf Sportwagen-Niveau.',
    ru: 'Тормозной путь со 100 км/ч до полной остановки. 35–37 м — отличный показатель для обычного авто, короче 35 м — уровень спорткаров.'
  },
  brakeSetup: {
    en: 'Brake hardware and regenerative braking. Hybrids with regen braking often double brake-pad lifespan because the electric motor handles light stops.',
    de: 'Bremsanlage und Rekuperation. Hybride mit Rekuperation schonen Beläge und Scheiben enorm, da der E-Motor leichtes Bremsen übernimmt.',
    ru: 'Тип тормозной системы и наличие рекуперации. На гибридах рекуперация вдвое продлевает срок службы колодок и дисков.'
  },

  // Category 05 — Running Costs & Value
  realWorldFuel: {
    en: 'Realistic mixed everyday consumption (not optimistic lab figures) across city, country roads, and highway driving.',
    de: 'Realistischer Alltagsverbrauch im Mix aus Stadt, Landstraße und Autobahn — keine geschönten Werks-Normwerte.',
    ru: 'Реальный смешанный расход топлива в повседневной езде (город, трасса), без приукрашенных паспортных цифр.'
  },
  tankRange: {
    en: 'Fuel tank capacity and realistic driving distance per fill-up before the reserve light comes on.',
    de: 'Tankvolumen und realistische Praxis-Reichweite pro Tankfüllung im Alltag.',
    ru: 'Объём топливного бака и реальный запас хода на одной заправке.'
  },
  euroNorm: {
    en: 'European exhaust emissions standard. Determines access to urban low-emission zones — especially relevant for older Euro 4/5 diesels.',
    de: 'Europäische Abgasnorm — relevant für Umweltzonen und künftige Fahrverbote, besonders bei älteren Euro-4/5-Dieseln.',
    ru: 'Экологический стандарт выхлопа. Влияет на въезд в экологические зоны Европы, особенно важно для дизелей Euro 4/5.'
  },
  taxInsurance: {
    en: 'Universal annual ownership burden combining road tax (CO2/displacement) and typical insurance cost level — higher for diesels and hot hatches.',
    de: 'Allgemeines Kostenniveau für Steuer & Versicherung (CO2/Hubraum und typische Einstufung) — höher bei großen Dieseln und Sportmodellen.',
    ru: 'Общий уровень ежегодных расходов на налог и страховку — выше у мощных, дизельных и спортивных версий.'
  },
  timingDrive: {
    en: 'Timing chain vs. timing belt. Chains usually last the life of the engine if oil is changed on time; belts require scheduled replacement (~€500–€900).',
    de: 'Steuerkette vs. Zahnriemen. Ketten halten bei guter Ölpflege oft ein Autoleben lang; Zahnriemen brauchen planmäßige Wechsel (ca. 500–900 €).',
    ru: 'Цепь ГРМ против ремня ГРМ. Цепь при своевременной замене масла служит очень долго, а ремень требует плановой замены (€500–900).'
  },
  serviceWear: {
    en: 'Expected routine inspection costs plus wear items like tyres, brakes, and fluids compared to segment averages.',
    de: 'Typische Kosten für Inspektionen sowie Verschleißteile wie Reifen, Bremsen und Flüssigkeiten im Klassenvergleich.',
    ru: 'Средний уровень затрат на плановое ТО и расходники (шины, тормоза, масла) относительно класса авто.'
  },
  valueRetention: {
    en: 'How well the model holds its used-market price over 3–5 years of ownership. High retention lowers your true net cost of ownership.',
    de: 'Wie stabil das Modell seinen Gebrauchtwagenwert über 3–5 Jahre hält. Hoher Werterhalt senkt die echten Gesamtkosten deutlich.',
    ru: 'Насколько хорошо модель сохраняет остаточную стоимость за 3–5 лет владения. Высокая сохранность снижает реальные потери.'
  },
  resaleDemand: {
    en: 'How quickly clean examples sell on the used market when you eventually decide to move on to your next car.',
    de: 'Wie schnell gepflegte Exemplare auf dem Gebrauchtwagenmarkt wieder einen Käufer finden, wenn du das Auto weiterverkaufst.',
    ru: 'Насколько быстро ухоженный экземпляр продаётся на вторичном рынке, когда вы решите сменить автомобиль.'
  }
};

// Reusable Plain-Language Value Glossary for Category 01 Hardware Terms
const SPEC_VALUE_GLOSSARY = [
  {
    rows: ['engineName'],
    match: /hybrid/i,
    tip: {
      en: 'Atkinson-cycle naturally aspirated petrol engine paired with an electric motor. Very low mechanical stress and proven 300,000+ km longevity.',
      de: 'Atkinson-Saugbenziner kombiniert mit E-Motor. Sehr geringe mechanische Belastung und bewährte Laufleistungen über 300.000 km.',
      ru: 'Атмосферный бензиновый мотор по циклу Аткинсона в паре с электромотором. Минимальная нагрузка и проверенный ресурс 300 000+ км.'
    }
  },
  {
    rows: ['engineName'],
    match: /i-vtec/i,
    tip: {
      en: 'Honda naturally aspirated petrol engine with variable valve timing and a durable timing chain — famous for long, trouble-free service.',
      de: 'Honda-Saugbenziner mit variabler Ventilsteuerung und langlebiger Steuerkette — bekannt für extrem hohe Zuverlässigkeit.',
      ru: 'Атмосферный бензиновый мотор Honda с системой i-VTEC и надёжной цепью ГРМ — славится большим ресурсом без капризов.'
    }
  },
  {
    rows: ['engineName'],
    match: /valvematic|dual vvt-i/i,
    tip: {
      en: 'Simple Toyota naturally aspirated petrol engine with timing chain and no turbo. Very forgiving on short trips and cheap to maintain.',
      de: 'Schlichter Toyota-Saugbenziner mit Steuerkette und ohne Turbo. Sehr kurzstreckentauglich und günstig im Unterhalt.',
      ru: 'Простой атмосферный мотор Toyota с цепью ГРМ и без турбины. Отлично переносит короткие поездки и дёшев в сервисе.'
    }
  },
  {
    rows: ['engineName'],
    match: /turbo/i,
    tip: {
      en: 'Small-displacement turbocharged petrol engine. Delivers strong low-end torque, but benefits from strict oil-change intervals and proper warm-up.',
      de: 'Kleiner Turbobenziner mit kräftigem Durchzug von unten. Mag strikte Ölwechselintervalle sowie behutsames Warm- und Kaltfahren.',
      ru: 'Малообъёмный турбобензин. Отличная тяга с низов, но требует частой замены масла и бережного прогрева/охлаждения.'
    }
  },
  {
    rows: ['engineName'],
    match: /d-4d|i-dtec|diesel/i,
    tip: {
      en: 'Turbocharged diesel built for high-mileage highway cruising. Very economical on long trips, but short city trips can clog the particulate filter (DPF).',
      de: 'Turbodiesel für lange Autobahn-Etappen. Auf Langstrecken sehr sparsam, häufige Kurzstrecken belasten jedoch Partikelfilter (DPF) und AGR.',
      ru: 'Турбодизель для трассы и больших пробегов. Очень экономичен на дальних дистанциях, но короткие городские поездки вредят сажевому фильтру (DPF).'
    }
  },
  {
    rows: ['forcedInduction'],
    match: /e-motor.*turbo/i,
    tip: {
      en: 'Uses an electric motor for instant city pull with no turbocharger to overheat or fail.',
      de: 'Nutzt einen E-Motor für direkten Antritt im Stadtverkehr — ganz ohne anfälligen Turbolader.',
      ru: 'Электромотор даёт мгновенный подхват в городе, при этом отсутствует турбина как потенциальный узел риска.'
    }
  },
  {
    rows: ['forcedInduction'],
    match: /✕\s*turbo\s*\/\s*e-motor/i,
    tip: {
      en: 'Pure naturally aspirated engine — no turbo, supercharger, or hybrid battery. Less low-end punch, but maximum mechanical simplicity.',
      de: 'Reiner Saugmotor — kein Turbo, kein Kompressor, kein E-Antrieb. Weniger Schub untenrum, dafür maximale mechanische Schlichtheit.',
      ru: 'Чистый атмосферник — без турбины и гибридной части. Меньше тяги на низах, зато максимальная механическая простота.'
    }
  },
  {
    rows: ['forcedInduction'],
    match: /✓\s*turbo/i,
    tip: {
      en: 'Exhaust-driven turbocharger boosts mid-range torque and overtaking ease, while adding a high-heat component to inspect on used cars.',
      de: 'Abgasturbolader sorgt für kräftigen Durchzug beim Überholen, ist bei Gebrauchtwagen aber ein wichtiges Prüfteil.',
      ru: 'Турбокомпрессор даёт мощную тягу на обгонах, но при покупке авто с пробегом требует проверки состояния.'
    }
  },
  {
    rows: ['injection'],
    match: /port|indirect/i,
    tip: {
      en: 'Fuel sprays ahead of the intake valves, naturally washing them clean — avoids the intake carbon buildup common on direct-injection engines.',
      de: 'Kraftstoff wird vor die Einlassventile gespritzt und spült diese sauber — verhindert die bei Direkteinspritzern typische Verkokung.',
      ru: 'Топливо подаётся перед впускными клапанами и постоянно их очищает — нет проблемы нагара, типичной для прямого впрыска.'
    }
  },
  {
    rows: ['injection'],
    match: /common-rail/i,
    tip: {
      en: 'High-pressure diesel direct injection. Very fuel-efficient, though injectors and the high-pressure pump dislike poor fuel quality at high mileage.',
      de: 'Hochdruck-Diesel-Direkteinspritzung. Sehr sparsam, allerdings sind Injektoren und Hochdruckpumpe bei hoher Laufleistung empfindlich gegen schlechten Kraftstoff.',
      ru: 'Дизельный прямой впрыск высокого давления. Очень экономичен, но форсунки и ТНВД требовательны к качеству топлива на больших пробегах.'
    }
  },
  {
    rows: ['injection'],
    match: /direct/i,
    tip: {
      en: 'Sprays petrol directly into the cylinder for sharper response and lower consumption, though intake valves can slowly collect carbon over high mileage.',
      de: 'Spritzt Benzin direkt in den Brennraum für Effizienz und Ansprechverhalten; Einlassventile können bei hoher Laufleistung langsam verkoken.',
      ru: 'Прямой впрыск бензина в цилиндры улучшает экономичность и отклик, но на больших пробегах возможен нагар на впускных клапанах.'
    }
  },
  {
    rows: ['gearbox'],
    match: /e-cvt/i,
    tip: {
      en: 'Toyota planetary gearset hybrid transmission — no belts, no clutches, and no shift shocks. One of the most durable transmissions ever built.',
      de: 'Toyota Planetenrad-Hybridgetriebe — keine Riemen, keine Kupplung, keine Schaltrucke. Eines der haltbarsten Getriebe auf dem Markt.',
      ru: 'Планетарная гибридная трансмиссия Toyota — без ремней, сцеплений и рывков. Одна из самых надёжных КПП в истории.'
    }
  },
  {
    rows: ['gearbox'],
    match: /6-speed manual/i,
    tip: {
      en: 'Proven 6-speed manual gearbox. Low maintenance, crisp control, and far cheaper to repair than complex dual-clutch automatics.',
      de: 'Bewährtes 6-Gang-Schaltgetriebe. Wartungsarm, direktes Schaltgefühl und deutlich günstiger zu reparieren als komplexe Doppelkuppler.',
      ru: 'Проверенная 6-ступенчатая механика. Недорога в обслуживании и гораздо проще в ремонте, чем сложные роботы.'
    }
  },
  {
    rows: ['clutchDmf'],
    match: /no clutch/i,
    tip: {
      en: 'No friction clutch and no Dual-Mass Flywheel at all — completely eliminates a €1,000–€1,800 used-car wear bill.',
      de: 'Weder Reibungskupplung noch Zweimassenschwungrad verbaut — eine typische 1.000–1.800 € Verschleißrechnung entfällt komplett.',
      ru: 'Сцепления и двухмассового маховика нет вообще — полностью исключает типичный ремонт на €1 000–1 800.'
    }
  },
  {
    rows: ['clutchDmf'],
    match: /single clutch/i,
    tip: {
      en: 'Uses a simple single-mass flywheel with a standard clutch — much cheaper and longer-lasting than a Dual-Mass Flywheel (DMF).',
      de: 'Einfaches Einmassenschwungrad mit klassischer Kupplung — deutlich langlebiger und günstiger als ein Zweimassenschwungrad (ZMS).',
      ru: 'Обычное сцепление с простым одномассовым маховиком — служит долго и стоит значительно дешевле двухмассового.'
    }
  },
  {
    rows: ['clutchDmf'],
    match: /clutch \+ dmf/i,
    tip: {
      en: 'Equipped with a Dual-Mass Flywheel to smooth out turbo/diesel torque pulses. Listen for rattling at idle on high-mileage cars.',
      de: 'Zweimassenschwungrad dämpft die Drehmomentspitzen von Turbo/Diesel. Bei hoher Laufleistung im Leerlauf auf Rasselgeräusche achten.',
      ru: 'Оснащён двухмассовым маховиком для гашения вибраций турбо/дизеля. На больших пробегах проверяйте на стуки на холостом ходу.'
    }
  },
  {
    rows: ['driveline'],
    match: /^fwd$/i,
    tip: {
      en: 'Front-wheel drive: simple, lightweight, predictable in wet/winter weather, and low maintenance with no rear differential.',
      de: 'Frontantrieb: leicht, gutmütig bei Nässe/Schnee und wartungsarm ohne Hinterachs-Differenzial.',
      ru: 'Передний привод: лёгкий, предсказуемый зимой и в дождь, минимум узлов для обслуживания.'
    }
  },
  {
    rows: ['rustProtection'],
    match: /galvanized/i,
    tip: {
      en: 'Zinc-galvanized body panels resist surface rust well; still inspect underbody seams and rear suspension arms on cars driven in salted winters.',
      de: 'Verzinkte Karosserie schützt gut vor Flächenrost; bei Winterautos dennoch Unterboden-Falze und Hinterachsteile prüfen.',
      ru: 'Оцинкованный кузов хорошо сопротивляется коррозии, но в регионах с реагентами всё равно стоит осмотреть днище и заднюю подвеску.'
    }
  },
  {
    rows: ['suspensionWear'],
    match: /multi-link/i,
    tip: {
      en: 'Independent multi-link rear suspension improves ride smoothness and cornering composure, with slightly more bushings to check over 150,000 km.',
      de: 'Einzelrad-Mehrlenkerachse verbessert Federungskomfort und Kurvenlage; über 150.000 km gibt es etwas mehr Buchsen zu prüfen.',
      ru: 'Независимая многорычажка улучшает плавность хода и управляемость, но после 150 тыс. км требует осмотра большего числа сайлентблоков.'
    }
  },
  {
    rows: ['suspensionWear'],
    match: /torsion beam/i,
    tip: {
      en: 'Simple, rugged torsion-beam rear axle with very few moving joints — cheap to maintain and rarely fails inspections.',
      de: 'Robuste, simple Verbundlenker-Hinterachse mit wenigen Lagern — sehr günstig im Unterhalt und selten TÜV-auffällig.',
      ru: 'Простая и крепкая полузависимая балка с минимумом шарниров — дешёвая в обслуживании и очень долговечная.'
    }
  },
  {
    rows: ['starterAlternator'],
    match: /hybrid mg/i,
    tip: {
      en: 'No 12V starter motor, no belt-driven alternator, and no serpentine belt — the hybrid electric motors handle starting and charging seamlessly.',
      de: 'Kein 12V-Anlasser, keine Keilriemen-Lichtmaschine — die Hybrid-E-Motoren übernehmen Starten und Laden verschleißfrei.',
      ru: 'Нет 12В стартера, генератора и приводных ремней — запуск и зарядку выполняют бесщёточные электромоторы гибрида.'
    }
  },
  {
    rows: ['starterAlternator'],
    match: /standard 12v/i,
    tip: {
      en: 'Conventional 12V starter motor and belt-driven alternator — reliable and inexpensive to replace if they eventually wear out.',
      de: 'Klassischer 12V-Anlasser und riemengetriebene Lichtmaschine — bewährt und im Verschleißfall günstig zu ersetzen.',
      ru: 'Классический стартер 12В и генератор с ремнём — проверенная и недорогая в замене схема.'
    }
  },
  {
    rows: ['electronicsRisk'],
    match: /low/i,
    tip: {
      en: 'Conservative, well-proven electronics with far fewer touchscreens, air-suspension sensors, or flaky modules than luxury rivals.',
      de: 'Konservative, ausgereifte Elektronik mit deutlich weniger anfälligen Modulen und Sensoren als komplexe Oberklasse-Fahrzeuge.',
      ru: 'Проверенная и не перегруженная электроника — гораздо меньше капризных блоков и датчиков, чем у сложных премиум-моделей.'
    }
  },
  {
    rows: ['gearbox'],
    match: /wet dsg/i,
    tip: {
      en: 'Oil-cooled dual-clutch automatic with crisp shifts. Very durable as long as the gearbox oil is changed strictly every 60,000 km.',
      de: 'Ölgekühltes Doppelkupplungsgetriebe mit schnellen Schaltvorgängen. Sehr haltbar, wenn das DSG-Öl strikt alle 60.000 km gewechselt wird.',
      ru: 'Мокрый робот с двойным сцеплением. Переключает очень быстро и служит долго при строгой замене масла каждые 60 000 км.'
    }
  },
  {
    rows: ['gearbox'],
    match: /dry dsg/i,
    tip: {
      en: 'Dry-clutch 7-speed dual-clutch automatic. Very fuel-efficient, but stop-and-go city traffic wears clutches and mechatronics faster than wet-clutch units.',
      de: 'Trockenes 7-Gang-DSG. Sehr sparsam, aber häufiger Stop-and-Go-Verkehr belastet Kupplungspaket und Mechatronik stärker als Nass-DSGs.',
      ru: 'Сухой 7-ступенчатый робот. Очень экономичен, но в частых пробках сцепление и мехатроник изнашиваются быстрее, чем у мокрого DSG.'
    }
  },
  {
    rows: ['gearbox'],
    match: /torque auto/i,
    tip: {
      en: 'Classic hydraulic torque-converter automatic. Smooth in traffic and far more robust in stop-and-go driving than dry dual-clutch gearboxes.',
      de: 'Klassische Wandlerautomatik. Sehr sanft im Stop-and-Go und deutlich robuster im Stadtverkehr als trockene Doppelkupplungsgetriebe.',
      ru: 'Классический гидротрансформаторный автомат. Плавно едет в пробках и намного выносливее сухих роботов.'
    }
  },
  {
    rows: ['driveline'],
    match: /^rwd$/i,
    tip: {
      en: 'Rear-wheel drive: balanced weight distribution and crisp steering feel, though good winter tyres are essential on snow and ice.',
      de: 'Hinterradantrieb: ausgewogene Gewichtsverteilung und feines Lenkgefühl, im Winter sind gute Winterreifen jedoch Pflicht.',
      ru: 'Задний привод: отличная развесовка и чистый руль, но зимой обязательна качественная зимняя резина.'
    }
  },
  {
    rows: ['driveline'],
    match: /awd/i,
    tip: {
      en: 'All-wheel drive boosts traction in rain, snow, and towing, while adding slightly higher fuel use and occasional rear-diff/coupling fluid service.',
      de: 'Allradantrieb maximiert Traktion bei Regen, Schnee und Anhängerbetrieb — erfordert etwas mehr Verbrauch und gelegentlichen Ölwechsel an Kupplung/Differenzial.',
      ru: 'Полный привод даёт отличный зацеп в дождь, снег и с прицепом, но чуть повышает расход и требует обслуживания муфты/редуктора.'
    }
  },
  {
    rows: ['controls'],
    match: /physical buttons/i,
    tip: {
      en: 'Dedicated physical buttons and dials for climate and audio — easy to operate without taking your eyes off the road.',
      de: 'Echte Tasten und Drehregler für Klima und Audio — sicher und blind bedienbar, ohne den Blick von der Straße zu nehmen.',
      ru: 'Отдельные физические кнопки и регуляторы климата и аудио — удобно нажимать вслепую, не отвлекаясь от дороги.'
    }
  },
  {
    rows: ['seatUtility'],
    match: /magic seats/i,
    tip: {
      en: 'Honda Magic Seats flip upward like cinema chairs so you can stand tall plants, bikes, or boxes right behind the front seats.',
      de: 'Hondas Magic Seats klappen wie Kinositze hoch — perfekt für hohe Pflanzen, Fahrräder oder sperrige Kartons im Fond.',
      ru: 'Сиденья Honda Magic Seats поднимаются вертикально, как кресла в кинотеатре, позволяя перевозить высокие грузы и велосипеды.'
    }
  },
  {
    rows: ['tractionDiff'],
    match: /lsd|torsen/i,
    tip: {
      en: 'Mechanical Limited-Slip Differential pulls the nose cleanly through corners under full throttle without wasting power in inside-wheel spin.',
      de: 'Mechanische Differenzialsperre zieht das Auto unter Volllast sauber aus Kurven, statt Leistung im durchdrehenden Innenrad zu verpuffen.',
      ru: 'Механическая блокировка дифференциала позволяет уверенно разгоняться на выходе из поворота без пробуксовки внутреннего колеса.'
    }
  },
  {
    rows: ['brakeSetup'],
    match: /regen/i,
    tip: {
      en: 'Regenerative braking uses the electric motor to slow the car and recharge the battery — brake pads often last 100,000+ km.',
      de: 'Rekuperation bremst überwiegend über den E-Motor und lädt den Akku — Bremsbeläge halten dadurch oft über 100.000 km.',
      ru: 'Рекуперация замедляет авто электромотором и заряжает батарею — тормозные колодки часто служат более 100 000 км.'
    }
  },
  {
    rows: ['timingDrive'],
    match: /timing chain/i,
    tip: {
      en: 'Metal timing chain with no fixed replacement interval — keep oil changes fresh (every 10,000–15,000 km) for maximum longevity.',
      de: 'Metall-Steuerkette ohne festes Wechselintervall — regelmäßige Ölwechsel (alle 10.000–15.000 km) sichern maximale Lebensdauer.',
      ru: 'Металлическая цепь ГРМ без жёсткого регламента замены — для долгой службы важно вовремя менять масло (раз в 10–15 тыс. км).'
    }
  },
  {
    rows: ['timingDrive'],
    match: /wet timing belt/i,
    tip: {
      en: 'Rubber timing belt running in engine oil — sensitive to wrong oil specs or overdue changes. Verify belt condition and service history.',
      de: 'Im Öl laufender Zahnriemen — empfindlich gegen falsche Ölspezifikation oder überzogene Intervalle. Zustand und Historie genau prüfen.',
      ru: 'Ремень ГРМ в масляной ванне — чувствителен к допуску и интервалу замены масла. Обязательно проверьте историю обслуживания.'
    }
  },
  {
    rows: ['timingDrive'],
    match: /timing belt/i,
    tip: {
      en: 'Rubber timing belt with a scheduled replacement interval (typically every 5–10 years or 120,000–210,000 km). Check invoice proof before buying.',
      de: 'Zahnriemen mit festem Wechselintervall (meist alle 5–10 Jahre bzw. 120.000–210.000 km). Vor dem Kauf Nachweis über den letzten Wechsel prüfen.',
      ru: 'Ремень ГРМ требует плановой замены (обычно раз в 5–10 лет или 120–210 тыс. км). Перед покупкой проверьте документы о замене.'
    }
  }
];

function escapeHtmlAttr(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getSpecValueTooltip(rowKey, rawVal) {
  if (rawVal == null) return null;
  const resolved = resolveSpecEntry(rawVal);
  const canonicalEn = typeof resolved === 'string' ? resolved : (resolved.en || '');
  const match = SPEC_VALUE_GLOSSARY.find(
    (entry) => entry.rows.includes(rowKey) && entry.match.test(canonicalEn)
  );
  if (match) {
    return match.tip[currentLang] || match.tip.en;
  }
  const rowFallback = SPEC_ROW_HINTS[rowKey];
  return rowFallback ? (rowFallback[currentLang] || rowFallback.en) : null;
}

function resolvePlainSpecText(val) {
  if (val == null) return '—';
  const resolved = resolveSpecEntry(val);
  return typeof resolved === 'string' ? resolved : (resolved[currentLang] || resolved.en || '—');
}

function initSpecHoverTooltip() {
  if (document.getElementById('spec-hover-tooltip')) return;
  const tipEl = document.createElement('div');
  tipEl.id = 'spec-hover-tooltip';
  tipEl.className = 'spec-hover-tooltip';
  tipEl.setAttribute('role', 'tooltip');
  tipEl.setAttribute('aria-hidden', 'true');
  document.body.appendChild(tipEl);

  let activeTarget = null;
  let showTimer = null;

  const hideTip = () => {
    clearTimeout(showTimer);
    showTimer = null;
    activeTarget = null;
    tipEl.classList.remove('is-visible');
    tipEl.setAttribute('aria-hidden', 'true');
  };

  const positionTip = (el) => {
    const rect = el.getBoundingClientRect();
    const tipRect = tipEl.getBoundingClientRect();
    const margin = 10;
    const gap = 8;

    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    left = Math.max(margin, Math.min(window.innerWidth - tipRect.width - margin, left));

    let top = rect.top - tipRect.height - gap;
    if (top < margin) {
      top = rect.bottom + gap;
    }
    if (top + tipRect.height > window.innerHeight - margin) {
      top = Math.max(margin, window.innerHeight - tipRect.height - margin);
    }

    tipEl.style.left = `${Math.round(left)}px`;
    tipEl.style.top = `${Math.round(top)}px`;
  };

  const showTip = (el) => {
    const title = el.getAttribute('data-tip-title') || '';
    const body = el.getAttribute('data-tip-body') || '';
    const hint = el.getAttribute('data-tip-hint') || '';
    if (!body) return;

    tipEl.innerHTML = `
      ${title ? `<div class="spec-tip-title">${title}</div>` : ''}
      <div class="spec-tip-body">${body}</div>
      ${hint ? `<div class="spec-tip-hint">${hint}</div>` : ''}
    `;
    tipEl.setAttribute('aria-hidden', 'false');
    tipEl.classList.add('is-visible');
    positionTip(el);
  };

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tip-body]');
    if (!target) {
      if (activeTarget) hideTip();
      return;
    }
    if (target === activeTarget) return;
    const wasVisible = tipEl.classList.contains('is-visible');
    activeTarget = target;
    clearTimeout(showTimer);
    if (wasVisible) {
      showTip(target);
    } else {
      showTimer = setTimeout(() => {
        if (activeTarget === target) showTip(target);
      }, 130);
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (!activeTarget) return;
    const related = e.relatedTarget;
    if (related && activeTarget.contains(related)) return;
    if (related && related.closest && related.closest('[data-tip-body]')) return;
    hideTip();
  });

  document.addEventListener('mousedown', hideTip, { passive: true });
  document.addEventListener('scroll', hideTip, { capture: true, passive: true });
}

function resolveLocalizedSpecVal(val) {
  if (val == null) return '—';
  const resolved = resolveSpecEntry(val);
  const raw = typeof resolved === 'string' ? resolved : (resolved[currentLang] || resolved.en || '—');
  return raw
    .replace(/✓/g, '<span class="spec-mark spec-mark-yes">✓</span>')
    .replace(/✕/g, '<span class="spec-mark spec-mark-no">✕</span>');
}

// Vehicle roster data (CAR_ROSTER) lives in cars-data.js (loaded before app.js)

// Maximum number of standout pros / cons displayed per car
const MAX_TRAITS_PER_GROUP = 7;

// Application State (Default: Homepage landing view, then Smash-style contender selection)
let isHomeView = true;
let selectedLeftId = null;
let selectedRightId = null;
let selectedLeftEngineId = null;
let selectedRightEngineId = null;
let smashPickerForceOpen = false;
let smashAlignmentTimer = null;
let smashLockInTimer = null;
let duelClashTimer = null;
let duelSettleTimer = null;
let activeRosterTarget = 'p1'; // 'p1' (left) or 'p2' (right)
let currentLang = 'en'; // 'en' | 'de' | 'ru'
let currentTheme = 'dark'; // 'dark' | 'light'
let catalogQuery = '';
let catalogFilter = 'all';
let catalogSort = 'curated';
const expandedPillars = new Set();
let activeStatsScrollSide = 'left';

// Easy-to-tweak timing constants (ms) for Selection -> Duel transition (3300ms total)
const DUEL_TRANSITION_TIMING = {
  lockInMs: 800,       // Beat 1: Selected C1/C2 grid tiles pulse & others dim
  clashMs: 1600,       // Beat 2: Arcade "VS" clash beat (cars slam in + VS impact)
  revealSettleMs: 1252 // Beat 3: Staggered sidebars, pillars & traits settle
};

function syncDuelTransitionCssVars() {
  const root = document.documentElement;
  if (!root) return;
  root.style.setProperty('--duel-lockin-ms', `${DUEL_TRANSITION_TIMING.lockInMs}ms`);
  root.style.setProperty('--duel-clash-ms', `${DUEL_TRANSITION_TIMING.clashMs}ms`);
  root.style.setProperty('--duel-reveal-ms', `${DUEL_TRANSITION_TIMING.revealSettleMs}ms`);
}

function cancelDuelTransition() {
  if (smashLockInTimer) {
    clearTimeout(smashLockInTimer);
    smashLockInTimer = null;
  }
  if (duelClashTimer) {
    clearTimeout(duelClashTimer);
    duelClashTimer = null;
  }
  if (duelSettleTimer) {
    clearTimeout(duelSettleTimer);
    duelSettleTimer = null;
  }
  const smashStage = document.getElementById('smash-picker-stage');
  const versusArena = document.getElementById('versus-arena');
  const duelStage = document.querySelector('.duel-stage');
  const overlay = document.getElementById('duel-clash-overlay');
  const wrapL = document.querySelector('#viewport-left .car-image-wrapper');
  const wrapR = document.querySelector('#viewport-right .car-image-wrapper');
  [wrapL, wrapR].forEach((w) => {
    if (w) {
      w.style.transition = '';
      w.style.transform = '';
      w.style.transformOrigin = '';
    }
  });
  if (smashStage) smashStage.classList.remove('is-locking-in');
  if (versusArena) versusArena.classList.remove('is-duel-entering');
  if (duelStage) duelStage.classList.remove('is-duel-entering');
  if (overlay) {
    overlay.classList.remove('is-active', 'is-exiting');
    overlay.setAttribute('aria-hidden', 'true');
  }
}

function ensureDuelClashOverlay() {
  let overlay = document.getElementById('duel-clash-overlay');
  if (overlay) return overlay;
  const versusArena = document.getElementById('versus-arena');
  if (!versusArena) return null;

  overlay = document.createElement('div');
  overlay.id = 'duel-clash-overlay';
  overlay.className = 'duel-clash-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="duel-clash-backdrop"></div>
    <div class="duel-clash-slash"></div>
    <div class="duel-clash-contenders">
      <div class="duel-clash-card clash-left">
        <span class="duel-clash-tag p1">C1</span>
        <img class="duel-clash-img" id="duel-clash-img-left" src="" alt="" draggable="false" />
        <span class="duel-clash-name" id="duel-clash-name-left"></span>
      </div>
      <div class="duel-clash-crest">
        <div class="duel-clash-ring"></div>
        <span class="duel-clash-vs">VS</span>
      </div>
      <div class="duel-clash-card clash-right">
        <span class="duel-clash-tag p2">C2</span>
        <img class="duel-clash-img" id="duel-clash-img-right" src="" alt="" draggable="false" />
        <span class="duel-clash-name" id="duel-clash-name-right"></span>
      </div>
    </div>
  `;
  versusArena.appendChild(overlay);
  return overlay;
}

function runDuelEntranceSequence({ fromSmashPicker = true } = {}) {
  cancelDuelTransition();
  syncDuelTransitionCssVars();

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !selectedLeftId || !selectedRightId) {
    smashPickerForceOpen = false;
    updateArena();
    return;
  }

  const leftBase = getBaseCarById(selectedLeftId);
  const rightBase = getBaseCarById(selectedRightId);
  const smashStage = document.getElementById('smash-picker-stage');
  const versusArena = document.getElementById('versus-arena');
  const duelStage = document.querySelector('.duel-stage');

  const startClashBeat = () => {
    const overlay = ensureDuelClashOverlay();
    if (!overlay || !leftBase || !rightBase) {
      smashPickerForceOpen = false;
      updateArena();
      return;
    }

    const imgL = document.getElementById('duel-clash-img-left');
    const imgR = document.getElementById('duel-clash-img-right');
    const nameL = document.getElementById('duel-clash-name-left');
    const nameR = document.getElementById('duel-clash-name-right');

    if (imgL) {
      imgL.src = leftBase.image;
      imgL.alt = getSmashGridLabel(leftBase);
      imgL.className = `duel-clash-img ${(leftBase.imageFacing || 'right') === 'left' ? 'mirrored-car' : ''}`;
    }
    if (imgR) {
      imgR.src = rightBase.image;
      imgR.alt = getSmashGridLabel(rightBase);
      imgR.className = `duel-clash-img ${(rightBase.imageFacing || 'right') === 'right' ? 'mirrored-car' : ''}`;
    }
    if (nameL) nameL.textContent = getSmashGridLabel(leftBase);
    if (nameR) nameR.textContent = getSmashGridLabel(rightBase);

    if (smashStage) smashStage.classList.remove('is-locking-in');

    // Restart overlay CSS animations cleanly while keeping sidebars hidden until reveal
    overlay.classList.remove('is-active', 'is-exiting');
    void overlay.offsetWidth;
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');

    const exitLeadMs = Math.max(140, Math.round(DUEL_TRANSITION_TIMING.clashMs * 0.78));
    duelClashTimer = setTimeout(() => {
      duelClashTimer = null;
      if (isHomeView || !selectedLeftId || !selectedRightId) return;

      // FLIP First: measure clash card images before switching to duel layout
      const fromLeft = imgL ? imgL.getBoundingClientRect() : null;
      const fromRight = imgR ? imgR.getBoundingClientRect() : null;

      smashPickerForceOpen = false;
      updateArena();

      // Snap grid-template-columns immediately before measuring final FLIP rects
      if (versusArena) versusArena.classList.add('is-duel-entering');
      if (duelStage) duelStage.classList.add('is-duel-entering');

      // FLIP Last & Invert: position real car-image-wrappers over the clash images
      const wrapL = document.querySelector('#viewport-left .car-image-wrapper');
      const wrapR = document.querySelector('#viewport-right .car-image-wrapper');
      const invertWrap = (wrap, fromRect) => {
        if (!wrap || !fromRect || !fromRect.width) return false;
        const toRect = wrap.getBoundingClientRect();
        if (!toRect.width) return false;
        const dx = (fromRect.left + fromRect.width / 2) - (toRect.left + toRect.width / 2);
        const dy = (fromRect.top + fromRect.height / 2) - (toRect.top + toRect.height / 2);
        const s = fromRect.width / toRect.width;
        wrap.style.transition = 'none';
        wrap.style.transformOrigin = 'center center';
        wrap.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;
        return true;
      };

      const hasFlipL = invertWrap(wrapL, fromLeft);
      const hasFlipR = invertWrap(wrapR, fromRight);
      if (versusArena) void versusArena.offsetWidth;

      overlay.classList.add('is-exiting');

      // FLIP Play on next frame so the browser commits the inverted start state cleanly
      requestAnimationFrame(() => {
        const playFlip = (wrap) => {
          if (!wrap) return;
          wrap.style.transition = 'transform var(--duel-reveal-ms) cubic-bezier(0.25, 1, 0.35, 1)';
          wrap.style.transform = 'translate(0, 0) scale(1)';
        };
        if (hasFlipL) playFlip(wrapL);
        if (hasFlipR) playFlip(wrapR);
      });

      duelSettleTimer = setTimeout(() => {
        duelSettleTimer = null;
        overlay.classList.remove('is-active', 'is-exiting');
        overlay.setAttribute('aria-hidden', 'true');
        if (versusArena) versusArena.classList.remove('is-duel-entering');
        if (duelStage) duelStage.classList.remove('is-duel-entering');
        [wrapL, wrapR].forEach((w) => {
          if (w) {
            w.style.transition = '';
            w.style.transform = '';
            w.style.transformOrigin = '';
          }
        });
      }, DUEL_TRANSITION_TIMING.revealSettleMs);
    }, exitLeadMs);
  };

  if (fromSmashPicker && smashStage) {
    smashPickerForceOpen = true;
    updateArena();
    smashStage.classList.add('is-locking-in');
    smashLockInTimer = setTimeout(() => {
      smashLockInTimer = null;
      if (!isHomeView && selectedLeftId && selectedRightId) {
        startClashBeat();
      }
    }, DUEL_TRANSITION_TIMING.lockInMs);
  } else {
    startClashBeat();
  }
}

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

  const resolvedSpecs =
    baseCar.sharedSpecs || engineObj.specOverrides
      ? { ...(baseCar.sharedSpecs || {}), ...(engineObj.specOverrides || {}) }
      : null;

  return {
    ...baseCar,
    ...engineObj,
    id: baseCar.id,
    shortTitle: baseCar.shortTitle || engineObj.shortTitle,
    fullName: baseCar.fullName || engineObj.fullName,
    selectedEngineId: engineObj.id,
    specs: resolvedSpecs
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

// Helper: Pure unweighted sum of all 5 pillar scores (0.0 - 50.0) for objective rankings
function getCarTotalPillarScore(car) {
  if (!car) return 0;
  const total = STAT_PILLARS.reduce((acc, pillar) => acc + getPillarScore(car, pillar), 0);
  return Math.round(total * 10) / 10;
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

const NEGATIVE_SUBSTAT_BADGE_RE =
  /(thirsty|durstig|прожорлив|very high|mid-high|\bhigher\b|high .*insurance|\bhigh\b[^.;]*\b(?:tax|steuer|налог)|(?<!günstig\w*\s)teure|(?<![нН]е)дорог|costly|expensive|pricey|needs downshift|herunterschalten|пониженн|high-rev|drehzahl|крутить|sluggish|slow|modest|relaxed|calm|träg|gemächlich|медлен|спокойн|скромн|1[2-9][.,]\d\s*s\b|(?:^|\D)0\s*(?:\/\s*0\s*)?kg\b|no towing|keine anhäng|буксировка запрещ|choppy|hoppel|stiff|hartes|жёстк|loud|laut|громк|\bгул\w*|roar|wear|(?<!günstig\w*\s)(?<!günstige\s)verschleiß|износ|(?<!no\s)(?<!low\s)(?<!ohne\s)(?<!kein\s)risk|(?<!kein\s)(?<!ohne\s)risiko|(?<![нН]изкий\s)(?<![бБ]ез\s)(?<![нН]ет\s)риск|check |watch |inspect |prüfen|провер)/i;

function isNegativeSubStatBadge(text) {
  const s = String(text || '').trim();
  if (!s) return false;
  if (/^(no |zero |without |avoids?\s|cheap |low risk|kein\w* |ohne |günstig\w* |без |нет |недорог\w* |низк\w* риск)/i.test(s)) {
    return false;
  }
  return NEGATIVE_SUBSTAT_BADGE_RE.test(s);
}

function buildAutoSubStatDossier(car, statKey) {
  const subObj = car && car.subStats && car.subStats[statKey];
  if (!subObj) return null;

  const lang = currentLang;
  const badges = (subObj.badges && subObj.badges[lang]) || [];
  const b0 = badges[0] || '';
  const b1 = badges[1] || '';
  const score = Number(subObj.score || 0);
  const fuel = car.fuelType || 'petrol';
  const hp = car.hp ? `${car.hp} HP` : '';
  const isTurbo =
    /(turbo|tfsi|tsi|thp|ecoboost|kompressor|cdi|tdi|d-4d|d-cat|crdi|tdci|i-dtec|i-ctdi|mzr-cd|bi-turbo)/i.test(
      `${car.id || ''} ${car.engineBadge || ''} ${car.shortTitle || ''}`
    ) && !/\bNA\b/i.test(car.engineBadge || '');

  const headline = [b0, b1].filter(Boolean).join(' • ') || car.engineBadge || car.shortTitle;

  const fuelNote = {
    en: {
      hybrid: 'Hybrid electric assist delivers smooth city response with minimal mechanical strain.',
      diesel: 'Strong low-rpm pull for highway trips; short city commutes require DPF regeneration runs.',
      petrol: 'Clean cold-weather warm-up with unrestricted low-emission city access.'
    },
    de: {
      hybrid: 'Elektro-Unterstützung sorgt für sanften Stadt-Antritt bei minimalem Verschleiß.',
      diesel: 'Kräftiger Durchzug auf der Langstrecke; häufige Kurzstrecken fordern den Partikelfilter.',
      petrol: 'Schnelle Warmlaufphase im Winter und freie Fahrt in allen Umweltzonen.'
    },
    ru: {
      hybrid: 'Электротяга даёт плавный старт в городе при минимальной нагрузке на двигатель.',
      diesel: 'Уверенная тяга на трассе; частые короткие поездки требуют регулярного прожига DPF.',
      petrol: 'Быстрый прогрев зимой и отсутствие ограничений в городских эко-зонах.'
    }
  }[lang][fuel];

  const strengths = [];
  const taxPosB0 = statKey === 'taxInsuranceNorm' && b0 && !isNegativeSubStatBadge(b0) && isNegativeSubStatBadge(b1);
  if (score >= 7.0) {
    if (b0 && !isNegativeSubStatBadge(b0)) {
      strengths.push(b0 + (hp && (statKey === 'accelerationOvertaking' || statKey === 'midRangeTorquePassing') ? ` (${hp})` : '') + '.');
    }
    if (b1 && score >= 7.5 && !isNegativeSubStatBadge(b1)) strengths.push(`${b1}.`);
    if (strengths.length === 0 && (statKey === 'efficiencyFuel' || statKey === 'taxInsuranceNorm')) {
      strengths.push(fuelNote);
    }
  } else if (taxPosB0) {
    strengths.push({
      en: `${b0} keeps fixed annual road-tax rules straightforward for this class.`,
      de: `${b0} sorgt für eine klare, planbare jährliche Grundsteuer-Einstufung.`,
      ru: `${b0} обеспечивает понятный и прозрачный базовый расчёт налога.`
    }[lang]);
  }

  const watchouts = [];
  if (score >= 7.0 && b1 && isNegativeSubStatBadge(b1)) {
    watchouts.push(`${b1}.`);
  }

  const trBadgeEn = String(car?.subStats?.transmissionDriveline?.badges?.en?.[0] || '');
  const isAutoTrans = /(e-cvt|cvt|dsg|powershift|7g-tronic|5g-tronic|tiptronic|auto|\bat\b)/i.test(`${trBadgeEn} ${car.id || ''}`);

  const statGuidance = {
    accelerationOvertaking: {
      w: {
        en: 'Peak acceleration builds cleanly in the engine’s mid-to-upper rev band.',
        de: 'Volle Beschleunigung steht im mittleren bis oberen Drehzahlbereich bereit.',
        ru: 'Наилучшая динамика раскрывается в среднем и высоком диапазоне оборотов.'
      },
      b: {
        en: ['Test full-throttle acceleration from 60 to 100 km/h on an open road with zero hesitation.', 'Confirm smooth throttle response without misfires or limp-mode warnings under load.'],
        de: ['Durchzug von 60 auf 100 km/h ohne Ruckeln oder Zögern auf freier Strecke testen.', 'Prüfen, ob der Motor unter Last sauber hochdreht ohne Notlauf-Meldung.'],
        ru: ['Проверить разгон с 60 до 100 км/ч без рывков, провалов и затупов.', 'Убедиться в ровной тяге под нагрузкой без перехода в аварийный режим.']
      }
    },
    midRangeTorquePassing: {
      w: {
        en: 'Turbocharged or larger-displacement rivals feel punchier when fully loaded.',
        de: 'Bei voller Beladung spürt man mehr Elastizität vor allem bei hubraumstärkeren Motoren.',
        ru: 'При полной загрузке запас эластичности ниже, чем у более объёмных моторов.'
      },
      b: {
        en: [
          isAutoTrans
            ? 'Floor the accelerator smoothly from 50 km/h to verify instant, lag-free kickdown or electric-assist response.'
            : 'Accelerate firmly in 4th gear from 50 km/h to verify smooth, rattle-free mid-range pull.',
          isTurbo
            ? 'Check for any surging or boost drop-off during steady highway overtaking.'
            : 'Rev smoothly past 4,000 rpm once warm to confirm clean cam-phaser pull without flat spots.'
        ],
        de: [
          isAutoTrans
            ? 'Bei 50 km/h zügig durchtreten und auf spontanes Ansprechen ohne Ruckeln achten.'
            : 'Im 4. Gang ab 50 km/h beschleunigen und auf ruckfreien Durchzug achten.',
          isTurbo
            ? 'Auf gleichmäßigen Leistungsaufbau ohne Ladedruck-Schwankungen beim Überholen prüfen.'
            : 'Warmgefahren sauber über 4.000 U/min drehen, um gleichmäßigen Durchzug ohne Leistungsloch zu prüfen.'
        ],
        ru: [
          isAutoTrans
            ? 'Плавно нажать газ в пол с 50 км/ч — отклик должен быть быстрым и ровным без толчков.'
            : 'Плавно нажать газ на 4-й передаче с 50 км/ч — тяга должна нарастать ровно.',
          isTurbo
            ? 'Проверить отсутствие провалов и скачков наддува при ускорении на трассе.'
            : 'На прогретом моторе плавно раскрутить выше 4 000 об/мин — тяга должна быть ровной без провалов.'
        ]
      }
    },
    efficiencyFuel: {
      w: {
        en: fuel === 'hybrid'
          ? 'Sustained motorway speeds above 130 km/h and cold winter trips raise fuel use.'
          : 'Brisk motorway driving and stop-and-go city traffic increase real-world fuel use.',
        de: fuel === 'hybrid'
          ? 'Dauertempo über 130 km/h und kurze Winterfahrten erhöhen den Praxisverbrauch.'
          : 'Zügiges Autobahntempo und dichter Stadtverkehr treiben den Verbrauch nach oben.',
        ru: fuel === 'hybrid'
          ? 'Скорость выше 130 км/ч и короткие зимние поездки заметно повышают расход.'
          : 'Быстрая езда по трассе и пробки ощутимо увеличивают реальный расход топлива.'
      },
      b: {
        en: ['Check the trip computer’s long-term average fuel consumption to see how the car was driven.', 'Verify tire pressures, clean air filter, and smooth brake roll (dragging calipers hurt economy).'],
        de: ['Langzeit-Durchschnittsverbrauch im Bordcomputer ablesen, um das bisherige Fahrprofil einzuschätzen.', 'Reifendruck, Luftfilter und freigängige Bremsen prüfen — schwergängige Sättel treiben den Verbrauch hoch.'],
        ru: ['Посмотреть долговременный средний расход на бортовом компьютере.', 'Проверить давление в шинах и лёгкость качения (подклинивающие тормоза повышают расход).']
      }
    },
    taxInsuranceNorm: {
      w: {
        en: fuel === 'diesel'
          ? 'Verify local Euro 5 vs Euro 6 diesel low-emission zone rules and higher annual diesel tax.'
          : 'Annual road tax and insurance premiums vary by local emissions rules, trim, and driver profile.',
        de: fuel === 'diesel'
          ? 'Euro-5-/Euro-6-Umweltzonenregeln und die höhere jährliche Diesel-Kfz-Steuer einplanen.'
          : 'Steuer & Versicherung variieren je nach CO2-Einstufung, Motorisierung und regionaler Tarifklasse.',
        ru: fuel === 'diesel'
          ? 'Учитывайте экологический класс (Euro 5/6) и повышенные ставки налога на дизель.'
          : 'Итоговая стоимость налога и страховки зависит от мощности, возраста и региона.'
      },
      b: {
        en: ['Verify the exact emission standard (Euro 5 / Euro 6) and CO2 figure on the registration document.', 'Run an insurance quote using the exact engine HP and trim before finalizing purchase.'],
        de: ['Schadstoffklasse (Euro 5 / Euro 6) und CO2-Wert direkt im Fahrzeugschein prüfen.', 'Vor dem Kauf ein konkretes Versicherungsangebot für genau diese Motorisierung einholen.'],
        ru: ['Проверить точный экологический класс (Euro 5/6) и выбросы CO2 в документах автомобиля.', 'Заранее рассчитать стоимость страховки для конкретной мощности и комплектации.']
      }
    }
  };

  const entry = statGuidance[statKey];
  if (entry && score >= 7.0) {
    watchouts.push(entry.w[lang]);
  }

  const beforeYouBuy = entry ? entry.b[lang] : [];

  return { headline, strengths, watchouts, beforeYouBuy };
}

function buildAutoLowScoreReasons(car, statKey, subObj) {
  const lang = currentLang;
  const badges = (subObj && subObj.badges && subObj.badges[lang]) || [];
  const b0 = badges[0] || '';
  const b1 = badges[1] || '';
  const fuel = (car && car.fuelType) || 'petrol';
  const hp = car && car.hp ? `${car.hp} HP` : '';
  const trBadgeEn = String(car?.subStats?.transmissionDriveline?.badges?.en?.[0] || '');
  const isAutoTrans = /(e-cvt|cvt|dsg|powershift|7g-tronic|5g-tronic|tiptronic|auto|\bat\b)/i.test(`${trBadgeEn} ${car?.id || ''}`);

  const map = {
    transmissionDriveline: {
      en: [
        `${b0 ? `${b0}: ` : ''}Higher-risk automatic/dual-clutch setup where missed fluid intervals lead to jerky shifts and costly mechatronic or clutch repairs.`,
        b1 ? `${b1}.` : 'Always verify documented transmission oil changes before buying.'
      ],
      de: [
        `${b0 ? `${b0}: ` : ''}Empfindlichere Getriebebauart — überzogene Ölwechsel führen schnell zu Ruckeln sowie teuren Mechatronik- oder Kupplungsschäden.`,
        b1 ? `${b1}.` : 'Lückenlose Getriebeöl-Rechnungen sind vor dem Kauf Pflicht.'
      ],
      ru: [
        `${b0 ? `${b0}: ` : ''}Требовательная трансмиссия — пропущенная замена масла ведёт к рывкам и дорогому ремонту мехатроника или сцепления.`,
        b1 ? `${b1}.` : 'Перед покупкой обязательны чеки о своевременной смене масла.'
      ]
    },
    maintenanceRepairCosts: {
      en: [
        `${b0 ? `${b0}: ` : ''}Significantly higher wear-part and specialist repair costs than mainstream rivals in this class.`,
        b1 ? `${b1}.` : 'Major scheduled services and specialized parts add notable annual ownership cost.'
      ],
      de: [
        `${b0 ? `${b0}: ` : ''}Deutlich höhere Verschleißteil- und Werkstattkosten als bei normalen Klassenrivalen.`,
        b1 ? `${b1}.` : 'Spezifische Komponenten und größere Wartungen treiben die laufenden Kosten spürbar hoch.'
      ],
      ru: [
        `${b0 ? `${b0}: ` : ''}Заметно более дорогие расходники и сложный ремонт по сравнению с обычными конкурентами.`,
        b1 ? `${b1}.` : 'Специфические узлы и плановые работы ощутимо увеличивают стоимость владения.'
      ]
    },
    rideNoiseComfort: {
      en: [
        `${b0 ? `${b0}: ` : ''}Performance-focused suspension tuning and large wheels transmit sharp urban bumps and road noise into the cabin.`,
        b1 ? `${b1}.` : 'Long motorway trips feel noticeably firmer and louder than standard trims.'
      ],
      de: [
        `${b0 ? `${b0}: ` : ''}Straffe Sportabstimmung und große Felgen geben harte Stöße und Abrollgeräusche spürbar in den Innenraum weiter.`,
        b1 ? `${b1}.` : 'Auf langen Autobahnetappen deutlich härter und lauter als Standardmodelle.'
      ],
      ru: [
        `${b0 ? `${b0}: ` : ''}Жёсткая спортивная настройка подвески и крупные шины передают тычки от ям и гул дороги в салон.`,
        b1 ? `${b1}.` : 'На дальних трассах заметно жёстче и шумнее обычных версий.'
      ]
    },
    payloadTowing: {
      en: [
        `${b0 ? `${b0} (${b1 || '0 kg towing'})` : '0 kg towing homologation'}: Not rated or strictly limited for trailer towing.`,
        'Modest payload capacity limits heavy cargo or multi-passenger holiday loads.'
      ],
      de: [
        `${b0 ? `${b0} (${b1 || '0 kg Anhängelast'})` : 'Keine Anhänger-Freigabe'}: Keine oder stark eingeschränkte Anhängelast ab Werk.`,
        'Begrenzte Zuladung schränkt schwere Transporte oder volle Urlaubsbeladung ein.'
      ],
      ru: [
        `${b0 ? `${b0} (${b1 || 'буксировка запрещена'})` : 'Буксировка не разрешена'}: Отсутствует или жёстко ограничена допустимая масса прицепа.`,
        'Скромная грузоподъёмность ограничивает перевозку тяжёлых грузов с пассажирами.'
      ]
    },
    accelerationOvertaking: {
      en: [
        `Modest ${hp ? `${hp} ` : ''}power-to-weight ratio (${b0 || 'relaxed pace'}) holds back highway acceleration and quick overtakes.`,
        isAutoTrans
          ? 'Needs sustained high engine revs and longer overtaking gaps when loaded or climbing grades.'
          : 'Requires downshifting and longer overtaking gaps when loaded or climbing grades.'
      ],
      de: [
        `Zurückhaltendes Leistungsgewicht (${hp || b0 || 'gemächliches Tempo'}) begrenzt den Sprint und zügige Überholmanöver.`,
        isAutoTrans
          ? 'Beladen oder bergauf sind hohe Drehzahlen und mehr Überholweg nötig.'
          : 'Beladen oder bergauf sind rechtzeitiges Herunterschalten und mehr Überholweg nötig.'
      ],
      ru: [
        `Скромная энерговооружённость (${hp || b0 || 'спокойная динамика'}) ограничивает разгон и быстрые обгоны на трассе.`,
        isAutoTrans
          ? 'При загрузке и на подъёмах требуются высокие обороты и больший запас дистанции.'
          : 'При загрузке и на подъёмах требуются пониженная передача и больший запас дистанции.'
      ]
    },
    midRangeTorquePassing: {
      en: [
        `Low torque reserves in higher gears (${b0 || 'modest mid-range'}) mean sluggish in-gear roll-on acceleration.`,
        isAutoTrans
          ? 'Needs sustained high revs to keep pace on steep hills or motorway merges.'
          : 'Needs higher revs and frequent downshifting to keep pace on steep hills or motorway merges.'
      ],
      de: [
        `Geringes Drehmoment in hohen Gängen (${b0 || 'schmaler Durchzug'}) sorgt für zähe Elastizität.`,
        isAutoTrans
          ? 'Steigungen und Auffahrten verlangen spürbar höhere Drehzahlen.'
          : 'Steigungen und Auffahrten verlangen höhere Drehzahlen und häufiges Herunterschalten.'
      ],
      ru: [
        `Небольшой запас тяги на средних оборотах (${b0 || 'скромная эластичность'}) снижает отклик на высших передачах.`,
        isAutoTrans
          ? 'На подъёмах и при обгонах силовой установке требуются высокие обороты.'
          : 'На подъёмах и при обгонах мотор приходится активно крутить и переключаться вниз.'
      ]
    },
    efficiencyFuel: {
      en: [
        `${b0 ? `${b0}: ` : ''}Noticeably higher real-world fuel consumption than modern downsized or hybrid rivals.`,
        'Urban stop-and-go traffic and fast motorway cruising quickly push fuel bills into the 9–11+ L/100km range.'
      ],
      de: [
        `${b0 ? `${b0}: ` : ''}Deutlich höherer Praxisverbrauch als bei modernen Spar- oder Hybridmodellen.`,
        'Stadtverkehr und zügiges Autobahntempo treiben den Verbrauch spürbar in Richtung 9–11+ L/100km.'
      ],
      ru: [
        `${b0 ? `${b0}: ` : ''}Заметно более высокий реальный расход топлива по сравнению с экономичными конкурентами.`,
        'Пробки и быстрая езда по трассе легко поднимают расход до 9–11+ л/100 км.'
      ]
    },
    taxInsuranceNorm: (b0 && !isNegativeSubStatBadge(b0) && b1 && isNegativeSubStatBadge(b1))
      ? {
          en: [
            `${b1}: Steep insurance risk class and performance premiums push annual fixed ownership costs well above standard hatchbacks.`,
            'Younger drivers or urban postcodes face especially high annual comprehensive insurance quotes.'
          ],
          de: [
            `${b1}: Hohe Versicherungseinstufung und sportliche Tarife treiben die jährlichen Fixkosten deutlich über klassenübliche Modelle.`,
            'Besonders Fahranfänger oder Großstadt-Tarife führen zu spürbar höheren Jahresprämien.'
          ],
          ru: [
            `${b1}: Высокий коэффициент риска и спортивные тарифы заметно увеличивают ежегодную стоимость страховки.`,
            'Для молодых водителей и жителей крупных городов полисы обходятся особенно дорого.'
          ]
        }
      : {
          en: [
            `${b0 ? `${b0}: ` : ''}Higher annual road tax, ${fuel === 'diesel' ? 'older Euro emissions restrictions, ' : ''}or steeper insurance premiums than smaller base engines.`,
            b1 ? `${b1}.` : 'Factor local CO2/displacement tax and insurance quotes into your budget.'
          ],
          de: [
            `${b0 ? `${b0}: ` : ''}Höhere jährliche Kfz-Steuer${fuel === 'diesel' ? ', strengere Euro-Umweltzonenregeln' : ''} oder teurere Versicherung als bei kleineren Basis-Motoren.`,
            b1 ? `${b1}.` : 'Steuer & Versicherung für diese Motorisierung vor dem Kauf konkret prüfen.'
          ],
          ru: [
            `${b0 ? `${b0}: ` : ''}Повышенный транспортный налог${fuel === 'diesel' ? ', ограничения по эконормам Euro' : ''} или более дорогая страховка по сравнению с базовыми версиями.`,
            b1 ? `${b1}.` : 'Заранее проверьте локальные ставки налога и страховки.'
          ]
        }
  };

  const entry = map[statKey];
  if (entry) return entry[lang];

  return {
    en: [
      `${b0 ? `${b0}: ` : ''}Noticeably weaker in real-world capability or reliability than most rivals in this segment.`,
      b1 ? `${b1}.` : 'Check this category closely before committing to purchase.'
    ],
    de: [
      `${b0 ? `${b0}: ` : ''}Im Alltag spürbar schwächer oder anfälliger als die meisten Konkurrenten dieser Klasse.`,
      b1 ? `${b1}.` : 'Diesen Punkt vor dem Kauf besonders gründlich prüfen.'
    ],
    ru: [
      `${b0 ? `${b0}: ` : ''}Заметно уступает большинству конкурентов в классе по надёжности или характеристикам.`,
      b1 ? `${b1}.` : 'Обязательно проверьте этот аспект особенно внимательно перед покупкой.'
    ]
  }[lang];
}

const BADGE_HEADLINE_STATS = new Set([
  'maintenanceRepairCosts',
  'transmissionDriveline',
  'payloadTowing',
  'depreciationResale',
  'rideNoiseComfort',
  'electronicsReliability',
  'handlingAgility',
  'brakingPerformance'
]);

function getSubStatDossier(car, statKey) {
  if (!car) return null;
  const hasFullDossiers = Boolean(car.sharedDossiers || car.dossierGroups);
  const subObj = car.subStats && car.subStats[statKey];
  const engDossier = subObj && subObj.dossier && subObj.dossier[currentLang];
  const groupKey = car.dossierGroup;
  const groupObj = groupKey && car.dossierGroups && car.dossierGroups[groupKey];
  const groupDossier = groupObj && groupObj[statKey] && groupObj[statKey][currentLang];
  const shared = car.sharedDossiers && car.sharedDossiers[statKey];

  let resolved = engDossier || groupDossier || (shared && shared[currentLang]) || null;
  if (!resolved && hasFullDossiers) {
    resolved = buildAutoSubStatDossier(car, statKey);
  }
  if (!resolved) return null;

  if (!engDossier && BADGE_HEADLINE_STATS.has(statKey)) {
    const badges = (subObj && subObj.badges && subObj.badges[currentLang]) || [];
    const badgeHeadline = badges.filter(Boolean).join(' — ');
    if (badgeHeadline) {
      resolved = { ...resolved, headline: badgeHeadline };
    }
  }

  if (statKey === 'powertrainDurability' && resolved.highMileage) {
    return { ...resolved, highMileage: null };
  }
  if (statKey === 'maintenanceRepairCosts' && !resolved.highMileage) {
    const ptDossier = car.subStats?.powertrainDurability?.dossier?.[currentLang];
    if (ptDossier && ptDossier.highMileage) {
      return { ...resolved, highMileage: ptDossier.highMileage };
    }
  }
  return resolved;
}

function renderCarTraitsTray(car, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  const ui = t();
  const side = elementId === 'traits-left' ? 'left' : 'right';
  const hasBuyerFit = Boolean(getBuyerFit(car));

  const buyerFitBtnHtml = hasBuyerFit
    ? `<div class="traits-buyer-fit-row">
        <button type="button" class="traits-buyer-fit-btn" data-buyer-fit-side="${side}">
          <span class="traits-buyer-fit-meter" aria-hidden="true">
            <span class="meter-pro"></span>
            <span class="meter-con"></span>
          </span>
          <span class="traits-buyer-fit-label">${ui.buyerFitBtn}</span>
          <span class="traits-buyer-fit-arrow" aria-hidden="true">↗</span>
        </button>
      </div>`
    : '';

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

  container.innerHTML = `${buyerFitBtnHtml}${positivesHtml}${negativesHtml}`;

  const fitBtn = container.querySelector('[data-buyer-fit-side]');
  if (fitBtn) {
    fitBtn.addEventListener('click', () => {
      openBuyerFitModal(side);
    });
  }
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

  bindFusedPricePopoverEvents();

  // Sync mirrored C1 (left) & C2 (right) custom scrollbars on fused stats list
  const fusedShell = document.querySelector('#stats-center .fused-scroll-shell');
  const fusedList = fusedShell ? fusedShell.querySelector('.fused-stats-list') : null;
  if (fusedShell && fusedList) {
    const rails = Array.from(fusedShell.querySelectorAll('.fused-scrollbar'));
    const thumbs = rails.map((r) => r.querySelector('.fused-scrollbar-thumb'));

    const updateScrollbars = () => {
      const scrollH = fusedList.scrollHeight;
      const clientH = fusedList.clientHeight;
      const maxScroll = scrollH - clientH;
      const hasOverflow = maxScroll > 2;

      rails.forEach((rail, idx) => {
        rail.classList.toggle('is-inactive', !hasOverflow);
        const thumb = thumbs[idx];
        if (!thumb || !hasOverflow) return;
        const railH = rail.clientHeight || clientH;
        const thumbH = Math.max(28, Math.round((clientH / scrollH) * railH));
        const maxTravel = Math.max(0, railH - thumbH);
        const ratio = maxScroll > 0 ? fusedList.scrollTop / maxScroll : 0;
        thumb.style.height = `${thumbH}px`;
        thumb.style.transform = `translateY(${Math.round(ratio * maxTravel)}px)`;
      });
    };

    fusedList.addEventListener('scroll', updateScrollbars, { passive: true });

    rails.forEach((rail, idx) => {
      const thumb = thumbs[idx];
      rail.addEventListener('pointerdown', (e) => {
        if (rail.classList.contains('is-inactive')) return;
        e.preventDefault();
        const railRect = rail.getBoundingClientRect();
        const scrollH = fusedList.scrollHeight;
        const clientH = fusedList.clientHeight;
        const maxScroll = Math.max(1, scrollH - clientH);
        const thumbH = thumb ? thumb.offsetHeight : 32;
        const maxTravel = Math.max(1, railRect.height - thumbH);

        const setFromClientY = (clientY) => {
          const pos = Math.max(0, Math.min(maxTravel, clientY - railRect.top - thumbH / 2));
          fusedList.scrollTop = (pos / maxTravel) * maxScroll;
        };

        let startY = e.clientY;
        let startScrollTop = fusedList.scrollTop;
        const draggingThumb = e.target === thumb;
        if (!draggingThumb) {
          setFromClientY(e.clientY);
          startY = e.clientY;
          startScrollTop = fusedList.scrollTop;
        }

        rail.classList.add('is-dragging');
        const onMove = (moveEvt) => {
          const dy = moveEvt.clientY - startY;
          fusedList.scrollTop = Math.max(0, Math.min(maxScroll, startScrollTop + (dy / maxTravel) * maxScroll));
        };
        const onUp = () => {
          rail.classList.remove('is-dragging');
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      });
    });

    requestAnimationFrame(updateScrollbars);
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

function buildFusedMatchupBannerHtml(leftCar, rightCar, ui) {
  const buildSide = (car, side) => {
    const { piScore, piBadgeText, piClassLabel, piClassCss } = calculateOverallIndex(car);
    const piBadgeHtml = `
      <span class="pi-badge fused-matchup-pi" title="${ui.overallRating}: ${piScore}/10 (${piClassLabel})">
        <span class="pi-class ${piClassCss}">${piBadgeText}</span>
        <span class="pi-score">${piScore}</span>
      </span>
    `;
    const drivetrainHtml = `
      <span class="drivetrain-badge fused-matchup-drive" title="${car.drivetrain === 'AWD' ? ui.awdTooltip : car.drivetrain === 'RWD' ? ui.rwdTooltip : ui.fwdTooltip}">
        <span>${car.drivetrain}</span>
        ${getDrivetrainSvg(car.drivetrain)}
      </span>
    `;
    const rarityHtml = `<span class="rarity-badge fused-matchup-rarity">${car.rarityLabel[currentLang]}</span>`;

    const titleRowHtml =
      side === 'left'
        ? `<div class="car-model-title">${car.shortTitle}</div>${piBadgeHtml}`
        : `${piBadgeHtml}<div class="car-model-title">${car.shortTitle}</div>`;

    const badgesRowHtml =
      side === 'left'
        ? `${rarityHtml}${drivetrainHtml}`
        : `${drivetrainHtml}${rarityHtml}`;

    return `
      <div class="fused-matchup-side fused-matchup-${side}" data-side="${side}">
        <div class="fused-matchup-title-row">${titleRowHtml}</div>
        <div class="car-year-make fused-matchup-year">${car.yearMake}</div>
        <div class="forza-badges-row fused-matchup-badges">${badgesRowHtml}</div>
      </div>
    `;
  };

  return `
    <div class="forza-header-card fused-matchup-banner">
      ${buildSide(leftCar, 'left')}
      <div class="fused-matchup-vs" aria-hidden="true">
        <span class="fused-matchup-vs-pill">VS</span>
      </div>
      ${buildSide(rightCar, 'right')}
    </div>
  `;
}

function getPriceBreakdownMetrics(car, ui) {
  const msrp = parseEuroPrice(car.originalMsrp && car.originalMsrp.en);
  const used = parseEuroPrice(car.estUsedPrice);
  const depTotal = Math.max(0, msrp - used);
  const depPctNum = msrp > 0 ? (depTotal / msrp) * 100 : 0;
  const retainedPctNum = msrp > 0 ? (used / msrp) * 100 : 100;

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
  if (retainedPctNum >= 62 || car.id === 'honda-civic-type-r-2015') {
    outlook = ui.outlookEnthusiast;
  } else if (depPctNum >= 72) {
    outlook = ui.outlookFloor;
  } else if (
    (car.subStats && car.subStats.depreciationResale && car.subStats.depreciationResale.score >= 8.0) ||
    retainedPctNum >= 40
  ) {
    outlook = ui.outlookStrong;
  }

  return {
    msrp,
    used,
    depTotal,
    depPct: depPctNum.toFixed(1),
    retainedPct: retainedPctNum.toFixed(1),
    retainedPctNum,
    annualLoss,
    outlook
  };
}

function buildFusedDepMiniGraphHtml(car, m, side, ui) {
  const isLeft = side === 'left';
  const sideCls = isLeft ? 'is-c1' : 'is-c2';
  const sideTag = isLeft ? 'C1' : 'C2';
  const accentColor = isLeft ? 'var(--p1-accent)' : 'var(--p2-accent)';
  const gradId = isLeft ? 'fusedDepAreaC1' : 'fusedDepAreaC2';

  const years = String(car.yearMake || '').match(/\d{4}/g);
  const startYr = years && years.length ? Math.round((Number(years[0]) + Number(years[years.length - 1])) / 2) : 2015;
  const todayYr = 2026;
  const age = Math.max(2, todayYr - startYr);
  const msrp = Math.max(1000, m.msrp);
  const used = Math.max(500, m.used);
  const maxVal = Math.ceil((msrp * 1.08) / 5000) * 5000;

  const isEnthusiast = m.retainedPctNum >= 62 || car.id === 'honda-civic-type-r-2015';
  const isBottomed = !isEnthusiast && Number(m.depPct) >= 72;
  const isStrong = !isEnthusiast && !isBottomed && m.retainedPctNum >= 40;

  const k = isBottomed ? 3.5 : isStrong ? 2.2 : 2.8;
  const valueAt = (tFrac) => {
    if (isEnthusiast) {
      const dipFloor = Math.min(used * 0.9, msrp * 0.66);
      const decay = Math.exp(-3.1 * tFrac);
      const rebound = tFrac > 0.45 ? Math.pow((tFrac - 0.45) / 0.55, 1.5) * (used - dipFloor) : 0;
      const base = dipFloor + (msrp - dipFloor) * decay;
      const raw = base + rebound;
      const rawEnd = dipFloor + (msrp - dipFloor) * Math.exp(-3.1) + (used - dipFloor);
      return raw + (used - rawEnd) * tFrac;
    }
    const ek = Math.exp(-k);
    const norm = (Math.exp(-k * tFrac) - ek) / (1 - ek);
    return used + (msrp - used) * norm;
  };

  let futureVal;
  if (isEnthusiast) {
    futureVal = Math.round(used * 1.04);
  } else {
    const floorRatio = isBottomed ? 0.14 : isStrong ? 0.18 : 0.15;
    const floorVal = Math.min(used * 0.78, msrp * floorRatio);
    const annualRate = 1 - Math.pow(Math.max(0.15, used / msrp), 1 / age);
    const forwardAnnualRate = Math.min(0.085, Math.max(0.025, annualRate * (isBottomed ? 0.45 : isStrong ? 0.78 : 0.72)));
    futureVal = Math.round(floorVal + (used - floorVal) * Math.pow(1 - forwardAnnualRate, 3));
  }

  const padL = 36, padR = 14, padT = 10, padB = 20;
  const w = 290, h = 114;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const todayFracX = 0.76;
  const xFor = (frac) => (padL + frac * plotW).toFixed(1);
  const yFor = (val) => (padT + (1 - Math.max(0, Math.min(1, val / maxVal))) * plotH).toFixed(1);

  const samples = [];
  const steps = 14;
  for (let i = 0; i <= steps; i++) {
    const tf = i / steps;
    samples.push({ x: xFor(tf * todayFracX), y: yFor(valueAt(tf)) });
  }

  const solidPath = samples.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${solidPath} L ${samples[steps].x} ${(padT + plotH).toFixed(1)} L ${samples[0].x} ${(padT + plotH).toFixed(1)} Z`;

  const fMidX = xFor(todayFracX + (1 - todayFracX) * 0.5);
  const fMidY = yFor(used + (futureVal - used) * 0.58);
  const fEndX = xFor(1.0);
  const fEndY = yFor(futureVal);
  const forecastPath = `M ${samples[steps].x} ${samples[steps].y} Q ${fMidX} ${fMidY}, ${fEndX} ${fEndY}`;

  const midT = 0.45;
  const midCurveX = xFor(midT * todayFracX);
  const midCurveY = yFor(valueAt(midT));

  const pts = [
    {
      key: 'msrp',
      x: samples[0].x,
      y: samples[0].y,
      yr: String(startYr),
      readout: `${ui.priceMsrpLabel}: ${formatEuroAmount(msrp)}`,
      color: 'var(--text-main)'
    },
    {
      key: 'depreciation',
      x: midCurveX,
      y: midCurveY,
      yr: String(Math.round(startYr + age * midT)),
      readout: `${ui.priceDepTotalLabel}: -${formatEuroAmount(m.depTotal)} (-${m.depPct}%)`,
      color: isLeft ? 'var(--loss-red)' : 'var(--p1-accent)'
    },
    {
      key: 'current',
      x: samples[steps].x,
      y: samples[steps].y,
      yr: String(todayYr),
      readout: `${ui.priceCurrentLabel}: ${formatEuroAmount(used)} (${m.retainedPct}%)`,
      color: 'var(--win-green)'
    },
    {
      key: 'outlook',
      x: fEndX,
      y: fEndY,
      yr: String(todayYr + 3),
      readout: `${ui.priceOutlookLabel} (${todayYr + 3}): ~${formatEuroAmount(futureVal)}`,
      color: 'var(--forza-lime)'
    }
  ];

  const yTicks = [1, 0.5, 0].map((f) => {
    const val = Math.round((maxVal * f) / 1000) * 1000;
    const y = yFor(val);
    return `
      <line class="fused-dep-grid-line" x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}"></line>
      <text class="fused-dep-axis-text" x="${padL - 5}" y="${Number(y) + 3}" text-anchor="end">€${Math.round(val / 1000)}k</text>
    `;
  }).join('');

  const svgPointsHtml = pts
    .map(
      (pt) => `
      <g class="fused-dep-point" data-dep-side="${side}" data-dep-key="${pt.key}" data-dep-readout="${escapeHtmlAttr(pt.readout)}">
        <circle class="fused-dep-ring" cx="${pt.x}" cy="${pt.y}" r="8.5"></circle>
        <circle class="fused-dep-dot" cx="${pt.x}" cy="${pt.y}" r="4.5" fill="${pt.color}"></circle>
        <circle cx="${pt.x}" cy="${pt.y}" r="15" fill="transparent"></circle>
        <text class="fused-dep-axis-text fused-dep-year-text" x="${pt.x}" y="${h - 5}" text-anchor="middle">${pt.yr}</text>
      </g>
    `
    )
    .join('');

  return `
    <div class="fused-dep-card ${sideCls}" data-dep-side="${side}">
      <div class="fused-dep-card-head">
        <span class="fused-dep-card-car"><span class="fused-dep-dot-badge" aria-hidden="true"></span>${sideTag} · ${car.shortTitle}</span>
      </div>
      <div class="fused-dep-readout" data-dep-readout="${side}">${ui.priceCurveHint}</div>
      <svg class="fused-dep-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeHtmlAttr(`${car.shortTitle} — ${ui.priceCurveTitle}`)}">
        <defs>
          <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.58"></stop>
            <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
        ${yTicks}
        <path class="fused-dep-area" style="fill:url(#${gradId})" d="${areaPath}"></path>
        <path class="fused-dep-path" data-dep-curve-path d="${solidPath}"></path>
        <path class="fused-dep-flow" data-dep-curve-flow d="${solidPath}"></path>
        <path class="fused-dep-hit" data-dep-side="${side}" data-dep-key="depreciation" data-dep-readout="${escapeHtmlAttr(`${ui.priceDepTotalLabel}: -${formatEuroAmount(m.depTotal)} (-${m.depPct}%)`)}" d="${solidPath}"></path>
        <path class="fused-dep-forecast" d="${forecastPath}"></path>
        ${svgPointsHtml}
      </svg>
    </div>
  `;
}

function buildFusedPriceBreakdownHtml(leftCar, rightCar, ui) {
  const l = getPriceBreakdownMetrics(leftCar, ui);
  const r = getPriceBreakdownMetrics(rightCar, ui);

  const lRetWin = l.retainedPctNum > r.retainedPctNum + 0.05 ? 'is-win' : '';
  const rRetWin = r.retainedPctNum > l.retainedPctNum + 0.05 ? 'is-win' : '';
  const lLossWin = l.annualLoss < r.annualLoss - 5 ? 'is-win' : '';
  const rLossWin = r.annualLoss < l.annualLoss - 5 ? 'is-win' : '';
  const yrSuffix = currentLang === 'de' ? '/J.' : currentLang === 'ru' ? '/год' : '/yr';

  return `
    <div class="price-popover fused-price-popover" role="dialog" aria-label="${ui.priceTitle}" data-fused-dep-scope>
      <div class="fused-price-popover-header">
        <span class="fused-price-car-tag fused-price-car-c1">${leftCar.shortTitle}</span>
        <span class="price-popover-header-title">${ui.priceTitle}</span>
        <span class="fused-price-car-tag fused-price-car-c2">${rightCar.shortTitle}</span>
      </div>
      <div class="fused-price-grid">
        <div class="fused-price-row" data-dep-row="msrp">
          <span class="price-metric-val fused-pm-left" data-dep-val-side="left">${formatEuroAmount(l.msrp)}</span>
          <span class="price-metric-label fused-pm-label">${ui.priceMsrpLabel}</span>
          <span class="price-metric-val fused-pm-right" data-dep-val-side="right">${formatEuroAmount(r.msrp)}</span>
        </div>
        <div class="fused-price-row" data-dep-row="depreciation">
          <span class="price-metric-val is-loss fused-pm-left" data-dep-val-side="left">-${formatEuroAmount(l.depTotal)} (-${l.depPct}%)</span>
          <span class="price-metric-label fused-pm-label">${ui.priceDepTotalLabel}</span>
          <span class="price-metric-val is-loss fused-pm-right" data-dep-val-side="right">-${formatEuroAmount(r.depTotal)} (-${r.depPct}%)</span>
        </div>
        <div class="fused-price-row" data-dep-row="depreciation">
          <span class="price-metric-val ${lLossWin} fused-pm-left" data-dep-val-side="left">~${formatEuroAmount(l.annualLoss)}${yrSuffix}</span>
          <span class="price-metric-label fused-pm-label">${ui.priceAnnualLabel}</span>
          <span class="price-metric-val ${rLossWin} fused-pm-right" data-dep-val-side="right">~${formatEuroAmount(r.annualLoss)}${yrSuffix}</span>
        </div>
        <div class="fused-price-row" data-dep-row="current">
          <span class="price-metric-val is-accent fused-pm-left" data-dep-val-side="left">${formatEuroAmount(l.used)}</span>
          <span class="price-metric-label fused-pm-label">${ui.priceCurrentLabel}</span>
          <span class="price-metric-val is-accent fused-pm-right" data-dep-val-side="right">${formatEuroAmount(r.used)}</span>
        </div>
        <div class="fused-price-row" data-dep-row="current">
          <span class="price-metric-val ${lRetWin} fused-pm-left" data-dep-val-side="left">${l.retainedPct}%</span>
          <span class="price-metric-label fused-pm-label">${ui.priceRetainedLabel}</span>
          <span class="price-metric-val ${rRetWin} fused-pm-right" data-dep-val-side="right">${r.retainedPct}%</span>
        </div>
      </div>

      <div class="fused-dep-section">
        <div class="fused-dep-section-header">
          <span class="fused-dep-section-title">${ui.priceCurveTitle}</span>
          <span class="fused-dep-legend">
            <span class="fused-dep-legend-item is-c1"><i></i>C1</span>
            <span class="fused-dep-legend-item is-c2"><i></i>C2</span>
          </span>
        </div>
        <div class="fused-dep-grid">
          ${buildFusedDepMiniGraphHtml(leftCar, l, 'left', ui)}
          ${buildFusedDepMiniGraphHtml(rightCar, r, 'right', ui)}
        </div>
      </div>

      <hr class="fused-dep-divider" aria-hidden="true" />

      <div class="fused-price-outlook" data-dep-row="outlook">
        <div class="price-outlook-label fused-outlook-title">${ui.priceOutlookLabel}</div>
        <div class="fused-outlook-split">
          <span class="price-outlook-text fused-outlook-left" data-dep-val-side="left">${l.outlook}</span>
          <span class="price-outlook-text fused-outlook-right" data-dep-val-side="right">${r.outlook}</span>
        </div>
      </div>
    </div>
  `;
}

function bindFusedPricePopoverEvents() {
  const hintText = t().priceCurveHint;
  document.querySelectorAll('[data-fused-dep-scope]').forEach((scope) => {
    const setDepHighlight = (key, side) => {
      const sidesToHighlight = !key ? [] : (side === 'both' ? ['left', 'right'] : [side]);

      scope.querySelectorAll('.fused-dep-point.is-active').forEach((el) => el.classList.remove('is-active'));
      scope.querySelectorAll('[data-dep-curve-path].is-curve-active, [data-dep-curve-flow].is-curve-active').forEach((el) => el.classList.remove('is-curve-active'));
      scope.querySelectorAll('[data-dep-row].is-dep-row-active').forEach((el) => el.classList.remove('is-dep-row-active'));
      scope.querySelectorAll('[data-dep-val-side].is-dep-highlight').forEach((el) => {
        el.classList.remove('is-dep-highlight', 'is-dep-hl-c1', 'is-dep-hl-c2');
      });

      ['left', 'right'].forEach((s) => {
        const readout = scope.querySelector(`[data-dep-readout="${s}"]`);
        if (!readout) return;
        if (!key || !sidesToHighlight.includes(s)) {
          readout.textContent = hintText;
          readout.classList.remove('is-active');
        }
      });

      if (!key) return;

      scope.querySelectorAll(`[data-dep-row="${key}"]`).forEach((row) => {
        row.classList.add('is-dep-row-active');
        sidesToHighlight.forEach((s) => {
          const valCls = s === 'left' ? 'is-dep-hl-c1' : 'is-dep-hl-c2';
          row.querySelectorAll(`[data-dep-val-side="${s}"]`).forEach((cell) => {
            cell.classList.add('is-dep-highlight', valCls);
          });
        });
      });

      sidesToHighlight.forEach((s) => {
        const card = scope.querySelector(`.fused-dep-card[data-dep-side="${s}"]`);
        if (!card) return;
        const pt = card.querySelector(`.fused-dep-point[data-dep-key="${key}"]`);
        if (pt) {
          pt.classList.add('is-active');
          const readout = card.querySelector(`[data-dep-readout="${s}"]`);
          const ptText = pt.getAttribute('data-dep-readout');
          if (readout && ptText) {
            readout.textContent = ptText;
            readout.classList.add('is-active');
          }
        }
        if (key === 'depreciation') {
          const path = card.querySelector('[data-dep-curve-path]');
          const flow = card.querySelector('[data-dep-curve-flow]');
          if (path) path.classList.add('is-curve-active');
          if (flow) flow.classList.add('is-curve-active');
        }
      });
    };

    scope.querySelectorAll('.fused-dep-point, .fused-dep-hit').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setDepHighlight(el.getAttribute('data-dep-key'), el.getAttribute('data-dep-side'));
      });
      el.addEventListener('mouseleave', () => setDepHighlight(null, null));
    });

    scope.querySelectorAll('[data-dep-row]').forEach((row) => {
      row.addEventListener('mouseenter', () => {
        setDepHighlight(row.getAttribute('data-dep-row'), 'both');
      });
      row.addEventListener('mouseleave', () => setDepHighlight(null, null));
    });
  });
}

function buildFusedBottomSummaryHtml(leftCar, rightCar, ui) {
  const leftIdx = calculateOverallIndex(leftCar);
  const rightIdx = calculateOverallIndex(rightCar);

  return `
    <div class="forza-bottom-stack fused-bottom-summary">
      <!-- Row 1: Original MSRP (Native Forza Strip) -->
      <div class="market-price-strip fused-summary-row fused-summary-msrp">
        <span class="fused-sum-val fused-sum-left price-old">${leftCar.originalMsrp[currentLang]}</span>
        <span class="msrp-label fused-sum-label">${ui.originalMsrp}</span>
        <span class="fused-sum-val fused-sum-right price-old">${rightCar.originalMsrp[currentLang]}</span>
      </div>

      <!-- Row 2: Est. Used Market (Single Centered € Trigger -> Fused Comparison Popover) -->
      <div class="forza-purchase-box fused-summary-row fused-summary-used">
        <span class="fused-sum-val fused-sum-left">${leftCar.estUsedPrice}</span>
        <span class="price-info-anchor fused-price-anchor">
          <button type="button" class="cr-badge price-info-trigger" aria-label="${ui.priceTitle}">€</button>
          <span class="fused-sum-label fused-used-label">${ui.estUsedMarket}</span>
          ${buildFusedPriceBreakdownHtml(leftCar, rightCar, ui)}
        </span>
        <span class="fused-sum-val fused-sum-right">${rightCar.estUsedPrice}</span>
      </div>

      <!-- Row 3: Full-Bleed Split Forza Overall Rating Bar -->
      <div class="fused-overall-bar">
        <div class="fused-overall-half fused-overall-half-left ${leftIdx.piClassCss}">
          <span class="fused-overall-score-txt">${leftIdx.piScore} / 10</span>
          <span class="fused-overall-cls-txt">(${leftIdx.piClassLabel})</span>
        </div>
        <div class="fused-overall-half fused-overall-half-right ${rightIdx.piClassCss}">
          <span class="fused-overall-cls-txt">(${rightIdx.piClassLabel})</span>
          <span class="fused-overall-score-txt">${rightIdx.piScore} / 10</span>
        </div>
        <span class="fused-overall-center-label">${ui.overallRating}</span>
      </div>
    </div>
  `;
}

function buildFusedStatConsoleHtml(leftCar, rightCar) {
  const ui = t();
  const allExpanded = expandedPillars.size === STAT_PILLARS.length;

  const formatScoreHtml = (val, cmp) =>
    cmp.isSPlus
      ? `<span class="stat-stock-val score-s-plus" title="S+ (9.6–10)">✦ ${val.toFixed(1)}</span>`
      : `<span class="stat-stock-val ${cmp.valueColorClass}">${val.toFixed(1)}</span>`;

  const buildSegmentsHtml = (val, oppVal, isSPlus) => {
    const segClass = isSPlus ? 'seg-s-plus' : val < oppVal ? 'seg-loss' : 'seg-win';
    return Array.from({ length: 10 }, (_, idx) => {
      const fillRatio = Math.max(0, Math.min(1, val - idx));
      const fillPct = Math.round(fillRatio * 100);
      return `<div class="hud-seg"><div class="hud-seg-fill ${segClass}" style="width: ${fillPct}%"></div></div>`;
    }).join('');
  };

  const pillarsHtml = STAT_PILLARS.map((pillar) => {
    const leftVal = getPillarScore(leftCar, pillar);
    const rightVal = getPillarScore(rightCar, pillar);
    const isExpanded = expandedPillars.has(pillar.id);
    const leftCmp = getComparisonState(leftVal, rightVal);
    const rightCmp = getComparisonState(rightVal, leftVal);

    const subRowsHtml = pillar.subRatings
      .map((sub) => {
        const leftSubObj = (leftCar.subStats && leftCar.subStats[sub.key]) || { score: 0, badges: {} };
        const rightSubObj = (rightCar.subStats && rightCar.subStats[sub.key]) || { score: 0, badges: {} };
        const lVal = leftSubObj.score;
        const rVal = rightSubObj.score;
        const lCmp = getComparisonState(lVal, rVal);
        const rCmp = getComparisonState(rVal, lVal);

        const leftBadges = (leftSubObj.badges && leftSubObj.badges[currentLang]) || [];
        const rightBadges = (rightSubObj.badges && rightSubObj.badges[currentLang]) || [];

        const leftHasDossier = Boolean(getSubStatDossier(leftCar, sub.key));
        const rightHasDossier = Boolean(getSubStatDossier(rightCar, sub.key));

        const makeInfoBtn = (side, hasDossier) =>
          hasDossier
            ? `<button type="button" class="stat-info-btn" data-dossier-stat="${sub.key}" data-side="${side}" title="${ui.dossierInspectBtn}" aria-label="${ui.dossierInspectBtn}"><svg class="stat-info-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="4.25" r="1.3" fill="currentColor" /><path d="M8 7.25V12.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>`
            : '';

        const specRowDefs = SUB_STAT_SPEC_ROWS[sub.key] || [];
        const hasStructuredSpecs =
          Boolean(leftCar.specs && rightCar.specs) &&
          specRowDefs.length > 0 &&
          specRowDefs.some((row) => leftCar.specs[row.key] != null || rightCar.specs[row.key] != null);

        let subDetailHtml = '';
        if (hasStructuredSpecs) {
          const dossierHintText = SPEC_DOSSIER_HINT[currentLang] || SPEC_DOSSIER_HINT.en;
          const rowsMarkup = specRowDefs
            .map((row) => {
              const lRaw = leftCar.specs[row.key];
              const rRaw = rightCar.specs[row.key];
              const lSpecHtml = resolveLocalizedSpecVal(lRaw);
              const rSpecHtml = resolveLocalizedSpecVal(rRaw);

              const rowHint = SPEC_ROW_HINTS[row.key] ? (SPEC_ROW_HINTS[row.key][currentLang] || SPEC_ROW_HINTS[row.key].en) : '';
              const lTipBody = getSpecValueTooltip(row.key, lRaw);
              const rTipBody = getSpecValueTooltip(row.key, rRaw);

              const rowLabelTipAttrs = rowHint
                ? `data-tip-title="${escapeHtmlAttr(row.label[currentLang])}" data-tip-body="${escapeHtmlAttr(rowHint)}"`
                : '';
              const lTipAttrs = lTipBody
                ? `data-tip-title="${escapeHtmlAttr(resolvePlainSpecText(lRaw))}" data-tip-body="${escapeHtmlAttr(lTipBody)}" ${leftHasDossier ? `data-tip-hint="${escapeHtmlAttr(dossierHintText)}"` : ''}`
                : '';
              const rTipAttrs = rTipBody
                ? `data-tip-title="${escapeHtmlAttr(resolvePlainSpecText(rRaw))}" data-tip-body="${escapeHtmlAttr(rTipBody)}" ${rightHasDossier ? `data-tip-hint="${escapeHtmlAttr(dossierHintText)}"` : ''}`
                : '';

              return `
                <div class="fused-spec-row">
                  <div class="fused-spec-val fused-spec-left ${leftHasDossier ? 'has-dossier' : ''}" ${leftHasDossier ? `data-dossier-stat="${sub.key}" data-side="left"` : ''} ${lTipAttrs}><span class="fused-spec-text">${lSpecHtml}</span></div>
                  <div class="fused-spec-label ${rowHint ? 'has-tip' : ''}" ${rowLabelTipAttrs}>${row.label[currentLang]}</div>
                  <div class="fused-spec-val fused-spec-right ${rightHasDossier ? 'has-dossier' : ''}" ${rightHasDossier ? `data-dossier-stat="${sub.key}" data-side="right"` : ''} ${rTipAttrs}><span class="fused-spec-text">${rSpecHtml}</span></div>
                </div>
              `;
            })
            .join('');
          subDetailHtml = `<div class="fused-spec-table">${rowsMarkup}</div>`;
        } else {
          const leftBadgesHtml = leftBadges.map((b) => `<span class="detail-badge">${b}</span>`).join('');
          const rightBadgesHtml = rightBadges.map((b) => `<span class="detail-badge">${b}</span>`).join('');
          if (leftBadgesHtml || rightBadgesHtml) {
            subDetailHtml = `
              <div class="fused-sub-badges-split">
                <div class="fused-badges-half fused-badges-left ${leftHasDossier ? 'has-dossier' : ''}" ${leftHasDossier ? `data-dossier-stat="${sub.key}" data-side="left"` : ''}>
                  ${leftBadgesHtml}
                </div>
                <div class="fused-badges-half fused-badges-right ${rightHasDossier ? 'has-dossier' : ''}" ${rightHasDossier ? `data-dossier-stat="${sub.key}" data-side="right"` : ''}>
                  ${rightBadgesHtml}
                </div>
              </div>
            `;
          }
        }

        const subTitleTipAttrs = `data-tip-title="${escapeHtmlAttr(sub.label[currentLang])}" data-tip-body="${escapeHtmlAttr(sub.unitHint[currentLang])}"`;

        return `
          <div class="sub-stat-row fused-sub-row">
            <div class="fused-sub-header">
              <div class="fused-sub-score fused-sub-score-left ${leftHasDossier ? 'has-dossier' : ''}" ${leftHasDossier ? `data-dossier-stat="${sub.key}" data-side="left"` : ''}>
                <span class="diff-arrow ${lCmp.valueColorClass}">${lCmp.indicatorSymbol}</span>
                ${formatScoreHtml(lVal, lCmp)}
                ${makeInfoBtn('left', leftHasDossier)}
              </div>
              <div class="fused-sub-title has-tip" ${subTitleTipAttrs}>
                <span class="stat-name">${sub.label[currentLang]}</span>
              </div>
              <div class="fused-sub-score fused-sub-score-right ${rightHasDossier ? 'has-dossier' : ''}" ${rightHasDossier ? `data-dossier-stat="${sub.key}" data-side="right"` : ''}>
                ${makeInfoBtn('right', rightHasDossier)}
                ${formatScoreHtml(rVal, rCmp)}
                <span class="diff-arrow ${rCmp.valueColorClass}">${rCmp.indicatorSymbol}</span>
              </div>
            </div>
            ${subDetailHtml}
          </div>
        `;
      })
      .join('');

    const pillarIconHtml = PILLAR_ICONS[pillar.id] || '';
    const pillarNumFormatted = String(pillar.number).padStart(2, '0');
    const pillarSubTagsHtml = pillar.subtitle[currentLang]
      .split(/\s*[,&•]\s*/)
      .filter(Boolean)
      .map((tag) => `<span class="pillar-sub-tag">${tag.trim()}</span>`)
      .join('');

    const leftSegmentsHtml = buildSegmentsHtml(leftVal, rightVal, leftCmp.isSPlus);
    const rightSegmentsHtml = buildSegmentsHtml(rightVal, leftVal, rightCmp.isSPlus);

    return `
      <div class="pillar-cluster fused-pillar-cluster ${isExpanded ? 'expanded' : ''}" data-pillar-id="${pillar.id}">
        <button
          type="button"
          class="pillar-cluster-header fused-pillar-header"
          data-pillar-toggle="${pillar.id}"
          aria-expanded="${isExpanded}"
        >
          <div class="fused-pillar-main">
            <div class="fused-score-cell fused-score-left">
              <span class="diff-arrow ${leftCmp.valueColorClass}">${leftCmp.indicatorSymbol}</span>
              ${formatScoreHtml(leftVal, leftCmp)}
            </div>
            <div class="fused-pillar-center">
              <div class="fused-pillar-title-row">
                <span class="pillar-icon-plain fused-pillar-icon">${pillarIconHtml}</span>
                <span class="stat-name"><span class="pillar-num-accent fused-total-tip-trigger" data-tip-title="${escapeHtmlAttr(`${pillarNumFormatted} // ${pillar.label[currentLang]}`)}" data-tip-body="${escapeHtmlAttr(pillar.unitHint[currentLang])}">${pillarNumFormatted} //</span> ${pillar.label[currentLang]}</span>
                <span class="accordion-chevron">▸</span>
              </div>
              <span class="stat-realworld fused-pillar-subtags">${pillarSubTagsHtml}</span>
            </div>
            <div class="fused-score-cell fused-score-right">
              ${formatScoreHtml(rightVal, rightCmp)}
              <span class="diff-arrow ${rightCmp.valueColorClass}">${rightCmp.indicatorSymbol}</span>
            </div>
          </div>
          <div class="fused-twin-bars">
            <div class="hud-seg-bar fused-bar-left" title="${leftCar.shortTitle}: ${leftVal.toFixed(1)}">
              ${leftSegmentsHtml}
            </div>
            <span class="fused-bar-center-pin" aria-hidden="true"></span>
            <div class="hud-seg-bar fused-bar-right" title="${rightCar.shortTitle}: ${rightVal.toFixed(1)}">
              ${rightSegmentsHtml}
            </div>
          </div>
        </button>

        <div class="pillar-sub-list fused-sub-list">
          ${subRowsHtml}
        </div>
      </div>
    `;
  }).join('');

  // Compute unweighted 5-Pillar Total Score (XX.X / 50) + Pillar Win Tally
  const leftTotal = getCarTotalPillarScore(leftCar);
  const rightTotal = getCarTotalPillarScore(rightCar);
  let leftPillarWins = 0;
  let rightPillarWins = 0;
  let pillarTies = 0;
  STAT_PILLARS.forEach((p) => {
    const lv = getPillarScore(leftCar, p);
    const rv = getPillarScore(rightCar, p);
    if (lv > rv) leftPillarWins++;
    else if (rv > lv) rightPillarWins++;
    else pillarTies++;
  });

  const leftTotalCmp = getComparisonState(leftTotal, rightTotal);
  const rightTotalCmp = getComparisonState(rightTotal, leftTotal);
  const leftTotalSegments = buildSegmentsHtml(leftTotal / STAT_PILLARS.length, rightTotal / STAT_PILLARS.length, leftTotal >= 48.0);
  const rightTotalSegments = buildSegmentsHtml(rightTotal / STAT_PILLARS.length, leftTotal / STAT_PILLARS.length, rightTotal >= 48.0);

  const totalLabels = {
    en: {
      title: 'TOTAL SCORE',
      pillars: 'PILLARS',
      tie: 'TIE',
      tipBody: 'Pure unweighted sum of all 5 category scores (max 50.0). Independent of your personal Priority Weights — used as the objective baseline for global & category rankings.'
    },
    de: {
      title: 'GESAMTPUNKTE',
      pillars: 'SÄULEN',
      tie: 'REMIS',
      tipBody: 'Reine ungewichtete Summe aller 5 Kategorie-Wertungen (max. 50,0). Unabhängig von deiner Gewichtung — dient als objektive Basis für Gesamt- & Kategorie-Rankings.'
    },
    ru: {
      title: 'ИТОГО БАЛЛОВ',
      pillars: 'КАТЕГОРИИ',
      tie: 'НИЧЬЯ',
      tipBody: 'Чистая невзвешенная сумма всех 5 категорий (макс. 50.0). Не зависит от ползунков весов — служит объективной базой для общего и категорийного рейтинга.'
    }
  };
  const tl = totalLabels[currentLang] || totalLabels.en;
  const tallyText =
    pillarTies > 0
      ? `${leftPillarWins}–${rightPillarWins} ${tl.pillars} · ${pillarTies} ${tl.tie}`
      : `${leftPillarWins}–${rightPillarWins} ${tl.pillars}`;

  const totalScoreCardHtml = `
    <hr class="fused-total-divider" aria-hidden="true" />
    <div class="pillar-cluster fused-total-card">
      <div class="fused-total-inner">
        <div class="fused-pillar-main fused-total-main">
          <div class="fused-score-cell fused-score-left">
            <span class="diff-arrow ${leftTotalCmp.valueColorClass}">${leftTotalCmp.indicatorSymbol}</span>
            <span class="stat-stock-val fused-total-num ${leftTotalCmp.valueColorClass}">${leftTotal.toFixed(1)}<span class="fused-total-denom">/50</span></span>
          </div>
          <div class="fused-pillar-center">
            <div class="fused-pillar-title-row">
              <span class="stat-name"><span class="pillar-num-accent fused-total-tip-trigger" data-tip-title="${escapeHtmlAttr(tl.title)} ( / 50 )" data-tip-body="${escapeHtmlAttr(tl.tipBody)}">Σ //</span> ${tl.title}</span>
            </div>
            <span class="stat-realworld fused-total-tally">${tallyText}</span>
          </div>
          <div class="fused-score-cell fused-score-right">
            <span class="stat-stock-val fused-total-num ${rightTotalCmp.valueColorClass}">${rightTotal.toFixed(1)}<span class="fused-total-denom">/50</span></span>
            <span class="diff-arrow ${rightTotalCmp.valueColorClass}">${rightTotalCmp.indicatorSymbol}</span>
          </div>
        </div>
        <div class="fused-twin-bars">
          <div class="hud-seg-bar fused-bar-left" title="${leftCar.shortTitle}: ${leftTotal.toFixed(1)} / 50">
            ${leftTotalSegments}
          </div>
          <span class="fused-bar-center-pin" aria-hidden="true"></span>
          <div class="hud-seg-bar fused-bar-right" title="${rightCar.shortTitle}: ${rightTotal.toFixed(1)} / 50">
            ${rightTotalSegments}
          </div>
        </div>
      </div>
    </div>
  `;

  return `
    <!-- Unified Mirrored Matchup Banner -->
    ${buildFusedMatchupBannerHtml(leftCar, rightCar, ui)}

    <!-- Fused 5-Pillar Accordion Stats Table -->
    <div class="forza-stats-card fused-stats-card">
      <div class="stats-table-header fused-stats-header">
        <span class="fused-side-pill fused-side-c1">C1</span>
        <div class="fused-header-center">
          <span>${ui.statsHeader}</span>
          <button type="button" class="expand-all-btn" data-action="toggle-all-pillars">
            ${allExpanded ? ui.collapseAll : ui.expandAll}
          </button>
        </div>
        <span class="fused-side-pill fused-side-c2">C2</span>
      </div>
      <div class="fused-scroll-shell">
        <div class="fused-scrollbar fused-scrollbar-left" data-scroll-rail="left" aria-hidden="true">
          <div class="fused-scrollbar-thumb"></div>
        </div>
        <div class="stats-rows-list fused-stats-list">
          ${pillarsHtml}
          ${totalScoreCardHtml}
        </div>
        <div class="fused-scrollbar fused-scrollbar-right" data-scroll-rail="right" aria-hidden="true">
          <div class="fused-scrollbar-thumb"></div>
        </div>
      </div>
    </div>

    <!-- Unified 3-Column Market Price & Overall Rating Summary -->
    ${buildFusedBottomSummaryHtml(leftCar, rightCar, ui)}
  `;
}

// Update Stat Columns while preserving synchronized scroll position
function updateStatColumnsOnly() {
  const statsCenterEl = document.getElementById('stats-center');
  if (statsCenterEl) {
    if (!selectedLeftId || !selectedRightId) {
      statsCenterEl.innerHTML = '';
      return;
    }
    const leftCar = getCarById(selectedLeftId, selectedLeftEngineId);
    const rightCar = getCarById(selectedRightId, selectedRightEngineId);
    const prevList = statsCenterEl.querySelector('.stats-rows-list');
    const prevScrollTop = prevList ? prevList.scrollTop : 0;

    statsCenterEl.innerHTML = buildFusedStatConsoleHtml(leftCar, rightCar);

    const nextList = statsCenterEl.querySelector('.stats-rows-list');
    if (nextList) nextList.scrollTop = prevScrollTop;

    bindStatColumnEvents();
    return;
  }

}

function setPopupOpen(btn, menu, isOpen) {
  if (!btn || !menu) return;
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
  menu.classList.toggle('open', isOpen);
  menu.setAttribute('aria-hidden', String(!isOpen));
}

const CAR_TYPE_ORDER = ['subcompact', 'hatchback', 'hot-hatch', 'sedan', 'suv'];

function getCarType(baseCar) {
  return (baseCar && baseCar.carType) || 'hatchback';
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
      cancelDuelTransition();
      smashPickerForceOpen = true;
      updateArena();
    });
  }
}

// Render Homepage Hero Content & 5-Pillar Strip
function renderHomeLanding() {
  const ui = t();
  const kickerEl = document.getElementById('home-kicker');
  const titleEl = document.getElementById('home-title');
  const introEl = document.getElementById('home-intro');
  const startTextEl = document.getElementById('home-start-btn-text');
  const metaEl = document.getElementById('home-roster-meta');
  const pillarsStrip = document.getElementById('home-pillars-strip');
  const brandHomeBtn = document.getElementById('hud-brand-home-btn');

  const carCount = Array.isArray(CAR_ROSTER) ? CAR_ROSTER.length : 0;
  const pillarCount = Array.isArray(STAT_PILLARS) ? STAT_PILLARS.length : 0;
  const ratingCount = Array.isArray(STAT_PILLARS)
    ? STAT_PILLARS.reduce((sum, p) => sum + (Array.isArray(p.subRatings) ? p.subRatings.length : 0), 0)
    : 0;

  const formatCounts = (str) =>
    String(str || '')
      .replace(/\{cars\}/g, carCount)
      .replace(/\{pillars\}/g, pillarCount)
      .replace(/\{ratings\}/g, ratingCount);

  if (kickerEl) kickerEl.textContent = formatCounts(ui.homeKicker);
  if (titleEl) titleEl.textContent = ui.homeTitle;
  if (introEl) introEl.textContent = formatCounts(ui.homeIntro);
  if (startTextEl) startTextEl.textContent = ui.homeStartBtn;
  if (metaEl) metaEl.textContent = formatCounts(ui.homeRosterMeta);
  if (brandHomeBtn) brandHomeBtn.title = ui.homeBrandTooltip;

  if (pillarsStrip) {
    pillarsStrip.innerHTML = STAT_PILLARS.map((p) => {
      const label = p.label[currentLang] || p.label.en;
      const iconSvg = PILLAR_ICONS[p.id] || '';
      return `
        <div class="home-pillar-chip">
          <span class="home-pillar-chip-icon">${iconSvg}</span>
          <span class="home-pillar-chip-label">${p.number}. ${label}</span>
        </div>
      `;
    }).join('');
  }

  const marqueeEl = document.getElementById('home-bg-marquee');
  if (marqueeEl && !marqueeEl.dataset.populated) {
    const orderedCars = [...CAR_ROSTER].sort(
      (a, b) => (a.gridOrder ?? Number(a.number)) - (b.gridOrder ?? Number(b.number))
    );
    const buildMarqueeTile = (baseCar, isPriority = false) => {
      const mirrorClass = (baseCar.imageFacing || 'right') === 'left' ? 'mirrored-car' : '';
      const label = getSmashGridLabel(baseCar);
      const priorityAttr = isPriority ? ' fetchpriority="high"' : '';
      const thumbSrc = getCarThumbSrc(baseCar.image);
      return `
        <div class="home-marquee-tile">
          <div class="home-marquee-thumb-wrap">
            <img class="home-marquee-thumb ${mirrorClass}" src="${thumbSrc}" onerror="if(!this.dataset.fb){this.dataset.fb='1';this.src='${baseCar.image}';}" alt="" decoding="async"${priorityAttr} draggable="false" />
          </div>
          <div class="home-marquee-nameplate">
            <span class="home-marquee-name">${label}</span>
          </div>
        </div>
      `;
    };
    const firstSetHtml = orderedCars.map((car, idx) => buildMarqueeTile(car, idx < 6)).join('');
    const repeatSetHtml = orderedCars.map((car) => buildMarqueeTile(car, false)).join('');
    marqueeEl.innerHTML = `
      <div class="home-marquee-track is-loading">
        <div class="home-marquee-set">${firstSetHtml}</div>
        <div class="home-marquee-set">${repeatSetHtml}</div>
      </div>
    `;
    const trackEl = marqueeEl.querySelector('.home-marquee-track');
    const imgs = Array.from(marqueeEl.querySelectorAll('.home-marquee-thumb'));
    let settledCount = 0;
    const targetInitial = Math.min(6, orderedCars.length);
    const unlockTrack = () => {
      if (trackEl) trackEl.classList.remove('is-loading');
    };
    const safetyTimer = setTimeout(unlockTrack, 900);

    imgs.forEach((img, idx) => {
      const markLoaded = () => {
        img.classList.add('is-loaded');
        if (idx < targetInitial) {
          settledCount += 1;
          if (settledCount >= targetInitial) {
            clearTimeout(safetyTimer);
            unlockTrack();
          }
        }
      };
      if (img.complete && img.naturalWidth > 0) {
        markLoaded();
      } else {
        img.addEventListener('load', markLoaded, { once: true });
        img.addEventListener('error', markLoaded, { once: true });
      }
    });
    marqueeEl.dataset.populated = 'true';
  }
}

// Update Static HUD Text for Current Language
function applyStaticTranslations() {
  const ui = t();
  document.documentElement.lang = currentLang;

  const brandSubtitle = document.getElementById('brand-subtitle');
  if (brandSubtitle) brandSubtitle.textContent = ui.brandSubtitle;

  const navCatalogLabel = document.getElementById('nav-catalog-label');
  const navCatalogCount = document.getElementById('nav-catalog-count');
  const navShowroomLabel = document.getElementById('nav-showroom-label');
  const navCompareLabel = document.getElementById('nav-compare-label');
  if (navCatalogLabel) navCatalogLabel.textContent = ui.navShowroom;
  if (navCatalogCount) navCatalogCount.textContent = String(Array.isArray(CAR_ROSTER) ? CAR_ROSTER.length : 0);
  if (navShowroomLabel) navShowroomLabel.textContent = ui.navVehicle;
  if (navCompareLabel) navCompareLabel.textContent = ui.navCompare;

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.title = ui.themeToggleTitle;
    themeToggleBtn.setAttribute('aria-label', ui.themeToggleTitle);
  }

  document.querySelectorAll('.lang-btn[data-lang-choice]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-choice') === currentLang);
  });

  document.getElementById('tag-car-1').textContent = ui.car1Tag;
  document.getElementById('tag-opponent').textContent = ui.opponentTag;
  const vsSwapLabelEl = document.getElementById('vs-swap-label');
  if (vsSwapLabelEl) vsSwapLabelEl.textContent = ui.swapLabel;
  document.getElementById('expand-label-left').textContent = ui.expandFullCar;
  document.getElementById('expand-label-right').textContent = ui.expandFullCar;
  const navCompareHint = document.getElementById('nav-compare-hint');
  if (navCompareHint) navCompareHint.textContent = ui.compareNeedTwoCars;
  document.getElementById('lightbox-close-btn').textContent = ui.closeBtn;

  const indexBtnLabel = document.getElementById('index-classes-btn-label');
  const indexPopoverTitle = document.getElementById('index-classes-popover-title');
  if (indexBtnLabel) indexBtnLabel.textContent = ui.indexClassesBtn;
  if (indexPopoverTitle) indexPopoverTitle.textContent = ui.indexClassesTitle;

  const weightBtnLabel = document.getElementById('weight-menu-btn-label');
  const weightPopoverTitle = document.getElementById('weight-popover-title');
  const weightResetBtn = document.getElementById('weight-reset-btn');
  if (weightBtnLabel) weightBtnLabel.textContent = ui.weightMenuBtn;
  if (weightPopoverTitle) weightPopoverTitle.textContent = ui.weightPopoverTitle;
  if (weightResetBtn) weightResetBtn.textContent = ui.weightResetBtn;

  const catalogSearch = document.getElementById('catalog-search');
  if (catalogSearch) catalogSearch.placeholder = ui.searchPlaceholder;
  const catalogSortLabel = document.getElementById('catalog-sort-label');
  if (catalogSortLabel) catalogSortLabel.textContent = ui.sortLabel;
  if (typeof renderSearchHelpPopover === 'function') renderSearchHelpPopover();
  if (typeof renderCatalogFilters === 'function') renderCatalogFilters();
  if (typeof renderSortDropdown === 'function') renderSortDropdown();

  if (typeof renderWeightEqualizer === 'function') renderWeightEqualizer();
  renderHomeLanding();
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

function getBuyerFit(car) {
  if (!car) return null;

  if (car.buyerFit && car.buyerFit[currentLang]) {
    return car.buyerFit[currentLang];
  }

  const cards = (car.sharedBuyerFit && car.sharedBuyerFit.cards) || {};
  const globalCards = typeof SHARED_BUYER_FIT_CARDS !== 'undefined' ? SHARED_BUYER_FIT_CARDS : {};
  const group = car.buyerFitGroup && car.buyerFitGroups && car.buyerFitGroups[car.buyerFitGroup];
  if (!group) return null;

  const overrides = car.buyerFitOverrides || {};
  const summaryObj = overrides.summary || group.summary;
  const idealKeys = overrides.ideal || group.ideal || [];
  const skipKeys = overrides.skip || group.skip || [];

  const resolveKeys = (keys) =>
    keys
      .map((key) => {
        const entry = cards[key] || globalCards[key];
        return entry ? (entry[currentLang] || entry.en) : null;
      })
      .filter(Boolean);

  const summary = summaryObj ? (summaryObj[currentLang] || summaryObj.en || '') : '';
  const idealFor = resolveKeys(idealKeys);
  const notIdealFor = resolveKeys(skipKeys);

  if (!summary && idealFor.length === 0 && notIdealFor.length === 0) return null;
  return { summary, idealFor, notIdealFor };
}

function splitBuyerFitPoint(text) {
  const idx = String(text || '').indexOf(':');
  if (idx === -1) {
    return { title: String(text || '').trim(), desc: '' };
  }
  return {
    title: text.slice(0, idx).trim(),
    desc: text.slice(idx + 1).trim(),
  };
}

// Open Buyer Fit ("Who Is This For?") Summary Modal
function openBuyerFitModal(side) {
  const ui = t();
  const modal = document.getElementById('stat-dossier-modal');
  const body = document.getElementById('stat-dossier-body');
  const categoryLabel = document.getElementById('dossier-category-label');
  const statTitle = document.getElementById('dossier-stat-title');
  if (!modal || !body) return;
  modal.classList.remove('buyer-fit-mode');

  const currentCar =
    side === 'left'
      ? (selectedLeftId ? getCarById(selectedLeftId, selectedLeftEngineId) : null)
      : (selectedRightId ? getCarById(selectedRightId, selectedRightEngineId) : null);
  const fit = getBuyerFit(currentCar);
  if (!fit) return;

  const idealItems = fit.idealFor || [];
  const notIdealItems = fit.notIdealFor || [];

  activeDossierStatKey = null;
  hideDossierNavPills();
  modal.classList.add('buyer-fit-mode');
  categoryLabel.textContent = ui.buyerFitCategory;
  statTitle.textContent = `${currentCar.shortTitle} — ${currentCar.engineBadge}`;

  const renderPersonaCards = (items, kind) =>
    items
      .map((raw) => {
        const { title, desc } = splitBuyerFitPoint(raw);
        const icon = kind === 'ideal' ? '✔' : '✖';
        return `
        <div class="buyer-fit-item is-${kind}">
          <span class="buyer-fit-item-badge" aria-hidden="true">${icon}</span>
          <div class="buyer-fit-item-text">
            <div class="buyer-fit-item-title">${title}</div>
            ${desc ? `<div class="buyer-fit-item-desc">${desc}</div>` : ''}
          </div>
        </div>`;
      })
      .join('');

  body.innerHTML = `
    <div class="buyer-fit-hero">
      <div class="buyer-fit-hero-visual">
        <img src="${currentCar.image}" alt="${currentCar.fullName}" class="buyer-fit-hero-img" />
      </div>
      <div class="buyer-fit-hero-content">
        <div class="buyer-fit-hero-meta">
          <span class="mini-p-badge ${side === 'left' ? 'p1-badge' : 'p2-badge'}">${side === 'left' ? 'C1' : 'C2'}</span>
          <span class="buyer-fit-hero-car">${currentCar.fullName}</span>
          <span class="buyer-fit-hero-engine">${currentCar.engineBadge}</span>
        </div>
        ${fit.summary ? `<div class="buyer-fit-verdict">${fit.summary}</div>` : ''}
      </div>
    </div>

    <div class="buyer-fit-columns">
      <div class="buyer-fit-col is-ideal">
        <div class="buyer-fit-col-header">
          <div class="buyer-fit-col-title-wrap">
            <span class="buyer-fit-col-dot" aria-hidden="true"></span>
            <span class="buyer-fit-col-title">${ui.buyerFitIdealTitle}</span>
          </div>
          <span class="buyer-fit-col-count">${idealItems.length}</span>
        </div>
        <div class="buyer-fit-items-list">
          ${renderPersonaCards(idealItems, 'ideal')}
        </div>
      </div>

      <div class="buyer-fit-col is-skip">
        <div class="buyer-fit-col-header">
          <div class="buyer-fit-col-title-wrap">
            <span class="buyer-fit-col-dot" aria-hidden="true"></span>
            <span class="buyer-fit-col-title">${ui.buyerFitNotIdealTitle}</span>
          </div>
          <span class="buyer-fit-col-count">${notIdealItems.length}</span>
        </div>
        <div class="buyer-fit-items-list">
          ${renderPersonaCards(notIdealItems, 'skip')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

let activeDossierStatKey = null;
let activeDossierSide = 'left';

function getOrderedSubRatings() {
  const list = [];
  STAT_PILLARS.forEach((pillar) => {
    pillar.subRatings.forEach((sub) => {
      list.push({ pillar, sub });
    });
  });
  return list;
}

function hideDossierNavPills() {
  const prevBtn = document.getElementById('dossier-nav-prev');
  const nextBtn = document.getElementById('dossier-nav-next');
  if (prevBtn) prevBtn.classList.add('is-hidden');
  if (nextBtn) nextBtn.classList.add('is-hidden');
}

function updateDossierNavPills(statKey) {
  const prevBtn = document.getElementById('dossier-nav-prev');
  const nextBtn = document.getElementById('dossier-nav-next');
  const prevText = document.getElementById('dossier-nav-prev-text');
  const nextText = document.getElementById('dossier-nav-next-text');
  if (!prevBtn || !nextBtn) return;

  const list = getOrderedSubRatings();
  const idx = list.findIndex((item) => item.sub.key === statKey);
  if (idx < 0) {
    hideDossierNavPills();
    return;
  }

  const prevItem = idx > 0 ? list[idx - 1] : null;
  const nextItem = idx < list.length - 1 ? list[idx + 1] : null;

  if (prevItem) {
    const pNum = String(prevItem.pillar.number).padStart(2, '0');
    if (prevText) prevText.textContent = `${pNum} // ${prevItem.sub.label[currentLang] || prevItem.sub.label.en}`;
    prevBtn.setAttribute('data-target-stat', prevItem.sub.key);
    prevBtn.classList.remove('is-hidden');
  } else {
    prevBtn.removeAttribute('data-target-stat');
    prevBtn.classList.add('is-hidden');
  }

  if (nextItem) {
    const nNum = String(nextItem.pillar.number).padStart(2, '0');
    if (nextText) nextText.textContent = `${nNum} // ${nextItem.sub.label[currentLang] || nextItem.sub.label.en}`;
    nextBtn.setAttribute('data-target-stat', nextItem.sub.key);
    nextBtn.classList.remove('is-hidden');
  } else {
    nextBtn.removeAttribute('data-target-stat');
    nextBtn.classList.add('is-hidden');
  }
}

function stepStatDossier(delta) {
  if (!activeDossierStatKey) return;
  const list = getOrderedSubRatings();
  const idx = list.findIndex((item) => item.sub.key === activeDossierStatKey);
  if (idx < 0) return;
  const nextIdx = idx + delta;
  if (nextIdx < 0 || nextIdx >= list.length) return;
  openStatDossier(list[nextIdx].sub.key, activeDossierSide);
}

// Open Engineering Sub-Stat Dossier Modal (Option 1)
function openStatDossier(statKey, side) {
  const ui = t();
  const modal = document.getElementById('stat-dossier-modal');
  const body = document.getElementById('stat-dossier-body');
  const categoryLabel = document.getElementById('dossier-category-label');
  const statTitle = document.getElementById('dossier-stat-title');
  if (!modal || !body) return;
  modal.classList.remove('buyer-fit-mode');

  const currentCar =
    side === 'left'
      ? (selectedLeftId ? getCarById(selectedLeftId, selectedLeftEngineId) : null)
      : (selectedRightId ? getCarById(selectedRightId, selectedRightEngineId) : null);
  if (!currentCar) return;
  const oppCar =
    side === 'left'
      ? (selectedRightId ? getCarById(selectedRightId, selectedRightEngineId) : null)
      : (selectedLeftId ? getCarById(selectedLeftId, selectedLeftEngineId) : null);

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
  const oppSubObj = oppCar ? (oppCar.subStats && oppCar.subStats[statKey]) || { score: 0 } : null;
  const dossier = getSubStatDossier(currentCar, statKey);
  const oppDossier = oppSubObj && oppSubObj.dossier ? oppSubObj.dossier[currentLang] || null : null;

  const isSPlus = subObj.score >= 9.6;
  const scoreDisplayHtml = isSPlus
    ? `<span class="stat-stock-val score-s-plus" title="S+ (9.6–10)">✦ ${subObj.score.toFixed(1)}</span>`
    : `<span class="stat-stock-val">${subObj.score.toFixed(1)}</span>`;

  const isLowScore = Number(subObj.score || 0) < 7.0;
  const lowReasons = isLowScore
    ? (dossier && Array.isArray(dossier.lowScoreReasons) && dossier.lowScoreReasons.length > 0
        ? dossier.lowScoreReasons
        : buildAutoLowScoreReasons(currentCar, statKey, subObj))
    : [];

  const normOverlapText = (txt) => String(txt || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const lowNorms = lowReasons.map(normOverlapText).filter(Boolean);
  const badgesList = (subObj && subObj.badges && subObj.badges[currentLang]) || [];
  const negBadgeNorms = isLowScore ? badgesList.filter(isNegativeSubStatBadge).map(normOverlapText).filter(Boolean) : [];
  const overlapsLow = (txt) => {
    const tn = normOverlapText(txt);
    if (!tn) return true;
    return lowNorms.some((ln) => ln.includes(tn) || tn.includes(ln)) || negBadgeNorms.some((bn) => tn.includes(bn) || bn.includes(tn));
  };

  const filteredStrengths =
    dossier && Array.isArray(dossier.strengths)
      ? dossier.strengths.filter((s) => (!isLowScore ? Boolean(s) : !overlapsLow(s)))
      : [];

  const strengthsCardHtml =
    filteredStrengths.length > 0
      ? `
      <div class="dossier-card">
        <div class="dossier-card-title strengths-title">
          <span>⚙</span>
          <span>${ui.dossierStrengths}</span>
        </div>
        <ul class="dossier-bullets-list">
          ${filteredStrengths
            .map(
              (str) => `
            <li class="dossier-bullet-item strength">
              <span class="bullet-icon">✔</span>
              <span>${str}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    `
      : '';

  const filteredWatchouts =
    dossier && Array.isArray(dossier.watchouts)
      ? dossier.watchouts.filter((w) => (!isLowScore ? Boolean(w) : !overlapsLow(w)))
      : [];

  const watchoutsCardHtml =
    filteredWatchouts.length > 0
      ? `
      <div class="dossier-card">
        <div class="dossier-card-title watchouts-title">
          <span>🔧</span>
          <span>${ui.dossierWatchouts}</span>
        </div>
        <ul class="dossier-bullets-list">
          ${filteredWatchouts
            .map(
              (w) => `
            <li class="dossier-bullet-item watchout">
              <span class="bullet-icon">⚠</span>
              <span>${w}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    `
      : '';

  const sectionsGridHtml =
    strengthsCardHtml || watchoutsCardHtml
      ? `
    <!-- Core Strengths & Known Watchouts Grid -->
    <div class="dossier-sections-grid"${strengthsCardHtml && watchoutsCardHtml ? '' : ' style="grid-template-columns: 1fr;"'}>
      ${strengthsCardHtml}
      ${watchoutsCardHtml}
    </div>
  `
      : '';

  const headlineHtml =
    dossier && dossier.headline
      ? `<div class="dossier-headline-box">${dossier.headline}</div>`
      : '';

  const criticalFlawsHtml =
    isLowScore && lowReasons.length > 0
      ? `
    <div class="dossier-card critical-flaws-card">
      <div class="dossier-card-title critical-flaws-title">
        <svg class="critical-flaws-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style="flex-shrink:0;">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#ffffff" stroke="#ef4444" stroke-width="2.4" stroke-linejoin="round" />
          <path d="M12 9v5" stroke="#111317" stroke-width="2.3" stroke-linecap="round" />
          <circle cx="12" cy="17.2" r="1.25" fill="#111317" />
        </svg>
        <span>${ui.dossierCriticalFlaws} (${subObj.score.toFixed(1)} / 10)</span>
      </div>
      <ul class="dossier-bullets-list">
        ${lowReasons
          .map(
            (reason) => `
          <li class="dossier-bullet-item critical-flaw">
            <span class="bullet-icon">❗</span>
            <span>${reason}</span>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `
      : '';

  const hasBeforeBuy = Array.isArray(dossier?.beforeYouBuy) && dossier.beforeYouBuy.length > 0;
  const hasRoadmap = Array.isArray(dossier?.highMileage) && dossier.highMileage.length > 0;
  const hasBuyerGuide = Boolean(hasBeforeBuy || hasRoadmap);

  const buyerGuideHtml = hasBuyerGuide
    ? `
    <!-- Pre-Purchase Checklist & Click-to-Expand Future Repair Roadmap (100k–250k km) -->
    <div class="dossier-buyer-guide-wrap">
      ${
        hasBeforeBuy
          ? `
      <div class="dossier-card before-buy-card">
        <div class="dossier-card-title before-buy-title">
          <span>☑</span>
          <span>${ui.dossierBeforeYouBuy}</span>
        </div>
        <ul class="dossier-bullets-list">
          ${dossier.beforeYouBuy
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
      `
          : ''
      }

      ${
        hasRoadmap
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
  let contrastCardHtml = '';
  if (oppCar && oppSubObj) {
    const diff = Number((subObj.score - oppSubObj.score).toFixed(1));
    const catName = foundSub.label[currentLang] || foundSub.label.en;
    let contrastSummary = '';
    if (currentLang === 'de') {
      if (diff > 0) {
        contrastSummary = `<strong>+${diff} Punkte Vorteil</strong> gegenüber <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) in der Kategorie <strong>${catName}</strong>.`;
      } else if (diff < 0) {
        contrastSummary = `<strong>${diff} Punkte im Vergleich</strong>: <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) liegt bei <strong>${catName}</strong> vorn.`;
      } else {
        contrastSummary = `<strong>Gleichstand (${subObj.score.toFixed(1)})</strong>: Beide Fahrzeuge liegen bei <strong>${catName}</strong> gleichauf.`;
      }
    } else if (currentLang === 'ru') {
      if (diff > 0) {
        contrastSummary = `<strong>Преимущество на +${diff} балла</strong> над <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) в категории <strong>${catName}</strong>.`;
      } else if (diff < 0) {
        contrastSummary = `<strong>Разница ${diff} балла</strong>: <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) опережает в категории <strong>${catName}</strong>.`;
      } else {
        contrastSummary = `<strong>Паритет (${subObj.score.toFixed(1)})</strong>: Оба автомобиля равны в категории <strong>${catName}</strong>.`;
      }
    } else {
      if (diff > 0) {
        contrastSummary = `<strong>+${diff} Point Advantage</strong> over <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) in <strong>${catName}</strong>.`;
      } else if (diff < 0) {
        contrastSummary = `<strong>${diff} Points vs Opponent</strong>: <em>${oppCar.shortTitle}</em> (${oppSubObj.score.toFixed(1)}) scores higher in <strong>${catName}</strong>.`;
      } else {
        contrastSummary = `<strong>Dead Heat (${subObj.score.toFixed(1)})</strong>: Both vehicles are evenly matched in <strong>${catName}</strong>.`;
      }
    }

    contrastCardHtml = `
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
        </div>
      </div>
    `;
  }

  const specBreakdownHtml = buildDossierSpecBreakdownHtml(currentCar, statKey, oppCar);
  const useSpecBreakdownLayout = Boolean(specBreakdownHtml);

  let switcherHtml = '';
  if (useSpecBreakdownLayout && oppCar && oppSubObj) {
    const leftCarObj = side === 'left' ? currentCar : oppCar;
    const rightCarObj = side === 'right' ? currentCar : oppCar;
    const leftSubScore = side === 'left' ? subObj.score : oppSubObj.score;
    const rightSubScore = side === 'right' ? subObj.score : oppSubObj.score;
    switcherHtml = `
      <div class="dossier-side-switcher" role="tablist" aria-label="Switch contender">
        <button type="button" class="dossier-switch-btn is-c1 ${side === 'left' ? 'is-active' : ''}" data-switch-side="left" role="tab" aria-selected="${side === 'left'}">
          <span class="mini-p-badge p1-badge">C1</span>
          <span class="dossier-switch-name">${leftCarObj.shortTitle}</span>
          <span class="dossier-switch-score">${leftSubScore.toFixed(1)}</span>
        </button>
        <button type="button" class="dossier-switch-btn is-c2 ${side === 'right' ? 'is-active' : ''}" data-switch-side="right" role="tab" aria-selected="${side === 'right'}">
          <span class="mini-p-badge p2-badge">C2</span>
          <span class="dossier-switch-name">${rightCarObj.shortTitle}</span>
          <span class="dossier-switch-score">${rightSubScore.toFixed(1)}</span>
        </button>
      </div>
    `;
  }

  const customRepairGuideHtml = useSpecBreakdownLayout && statKey === 'maintenanceRepairCosts' ? buildRepairGuideAccordionHtml(currentCar) : '';
  const roadmapOnlyHtml = customRepairGuideHtml || (
    useSpecBreakdownLayout && hasRoadmap
      ? `
    <div class="dossier-roadmap-accordion dossier-datasheet-roadmap">
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
      : '');
  body.innerHTML = useSpecBreakdownLayout
    ? `
    ${switcherHtml}

    ${specBreakdownHtml}

    ${roadmapOnlyHtml}
  `
    : `
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

    ${criticalFlawsHtml}

    ${sectionsGridHtml}

    ${buyerGuideHtml}

    ${contrastCardHtml}
  `;

  body.querySelectorAll('[data-switch-side]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetSide = btn.getAttribute('data-switch-side');
      if (targetSide && targetSide !== side) {
        openStatDossier(statKey, targetSide);
      }
    });
  });

  const roadmapToggle = document.getElementById('dossier-roadmap-toggle');
  const roadmapDrawer = document.getElementById('dossier-roadmap-drawer');
  if (roadmapToggle && roadmapDrawer) {
    roadmapToggle.addEventListener('click', () => {
      const isOpen = roadmapDrawer.classList.toggle('open');
      roadmapToggle.classList.toggle('open', isOpen);
      roadmapToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const ctaEl = roadmapToggle.querySelector('.roadmap-toggle-cta');
      if (ctaEl) {
        const showLbl = roadmapToggle.getAttribute('data-show-label') || ui.dossierShowRoadmap;
        const hideLbl = roadmapToggle.getAttribute('data-hide-label') || ui.dossierHideRoadmap;
        ctaEl.textContent = isOpen ? hideLbl : showLbl;
      }
    });
  }

  activeDossierStatKey = statKey;
  activeDossierSide = side;
  updateDossierNavPills(statKey);
  body.scrollTop = 0;
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
    const statsCard = document.querySelector('#stats-center .forza-stats-card') || document.querySelector('#stats-left .forza-stats-card');
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

function getCarThumbSrc(imagePath) {
  return imagePath ? imagePath.replace(/^assets\/([^/]+)\.(png|jpe?g|webp)$/i, 'assets/thumbs/$1.webp') : '';
}

function getCarTypeLabel(typeKey) {
  const ui = t();
  const map = {
    subcompact: ui.carTypeSubcompact,
    hatchback: ui.carTypeHatchback,
    'hot-hatch': ui.carTypeHotHatch,
    sedan: ui.carTypeSedan,
    suv: ui.carTypeSuv
  };
  return map[typeKey] || typeKey;
}

function formatEngineCount(count) {
  const ui = t();
  if (currentLang === 'ru') {
    const mod100 = count % 100;
    const mod10 = count % 10;
    if (mod10 === 1 && mod100 !== 11) return `${count} ${ui.engineSingular}`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} ${ui.engineFew}`;
    return `${count} ${ui.enginesCount}`;
  }
  return `${count} ${count === 1 ? ui.engineSingular : ui.enginesCount}`;
}

function getCarPowerRange(baseCar) {
  const hps = (baseCar.engines || []).map((e) => getEngineHp(e)).filter((n) => n > 0);
  if (!hps.length) return '';
  const min = Math.min(...hps);
  const max = Math.max(...hps);
  const unit = currentLang === 'de' ? 'PS' : currentLang === 'ru' ? 'л.с.' : 'HP';
  return min === max ? `${min} ${unit}` : `${min}–${max} ${unit}`;
}

function calculateLineupAverageIndex(baseCar) {
  const engines = baseCar.engines || [];
  if (engines.length <= 1) {
    const single = calculateOverallIndex(getCarById(baseCar.id, baseCar.defaultEngineId));
    return { ...single, isAverage: false };
  }
  const scores = engines.map((eng) => calculateOverallIndex(getCarById(baseCar.id, eng.id)).piNum);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const piNum = Math.round(avg * 10) / 10;
  const piScore = piNum === 10 ? '10' : piNum.toFixed(1);

  let piClass = 'F';
  let piClassCss = 'class-f';
  if (piNum >= 9.6) { piClass = 'S+'; piClassCss = 'class-s-plus'; }
  else if (piNum >= 9.0) { piClass = 'S'; piClassCss = 'class-s'; }
  else if (piNum >= 8.0) { piClass = 'A'; piClassCss = 'class-a'; }
  else if (piNum >= 7.0) { piClass = 'B'; piClassCss = 'class-b'; }
  else if (piNum >= 6.0) { piClass = 'C'; piClassCss = 'class-c'; }
  else if (piNum >= 5.0) { piClass = 'D'; piClassCss = 'class-d'; }

  return {
    piNum,
    piScore,
    piClass,
    piClassCss,
    isAverage: true
  };
}

function calculateMedianUsedPrice(baseCar) {
  const engines = baseCar.engines || [];
  const prices = engines
    .map((e) => parseEuroPrice(e.estUsedPrice))
    .filter((n) => n > 0)
    .sort((a, b) => a - b);
  if (!prices.length) {
    const fallback = getCarById(baseCar.id, baseCar.defaultEngineId);
    return parseEuroPrice(fallback && fallback.estUsedPrice);
  }
  const mid = Math.floor(prices.length / 2);
  if (prices.length % 2 === 1) return prices[mid];
  return Math.round((prices[mid - 1] + prices[mid]) / 2);
}

function buildForzaIndexBlock(idx, compact = true) {
  const ui = t();
  const avgTag = idx.isAverage ? `<span class="fib-avg-tag" title="${ui.lineupAvgTitle}">Ø</span>` : '';
  return `
    <div class="forza-index-block ${compact ? 'compact' : ''}" data-tier="${idx.piClassCss}">
      <span class="fib-class">${idx.piClass}</span>
      <span class="fib-score">${avgTag}${idx.piScore}</span>
    </div>
  `;
}

function renderCatalogFilters() {
  const ui = t();
  const container = document.getElementById('catalog-filter-pills');
  if (!container) return;

  const types = [{ key: 'all', label: ui.filterAll }].concat(
    CAR_TYPE_ORDER.map((k) => ({ key: k, label: getCarTypeLabel(k) }))
  );

  container.innerHTML = types
    .map(
      (item) =>
        `<button type="button" class="filter-pill-btn ${catalogFilter === item.key ? 'active' : ''}" data-filter="${item.key}">${item.label}</button>`
    )
    .join('');

  container.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      catalogFilter = btn.getAttribute('data-filter') || 'all';
      renderCatalogFilters();
      renderSmashPicker();
    });
  });
}

function renderSortDropdown() {
  const ui = t();
  const options = [
    { val: 'curated', label: ui.sortCurated },
    { val: 'score-desc', label: ui.sortScore },
    { val: 'price-asc', label: ui.sortPrice },
    { val: 'power-desc', label: ui.sortPower },
    { val: 'name-asc', label: ui.sortName }
  ];
  const active = options.find((o) => o.val === catalogSort) || options[0];
  const curEl = document.getElementById('catalog-sort-current');
  const menuEl = document.getElementById('catalog-sort-menu');
  if (curEl) curEl.textContent = active.label;
  if (!menuEl) return;

  menuEl.innerHTML = options
    .map(
      (o) =>
        `<button type="button" class="sort-custom-option ${o.val === catalogSort ? 'selected' : ''}" data-sort-val="${o.val}">${o.label}</button>`
    )
    .join('');

  menuEl.querySelectorAll('[data-sort-val]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      catalogSort = btn.getAttribute('data-sort-val') || 'curated';
      const wrap = document.getElementById('catalog-sort-dropdown');
      const trig = document.getElementById('catalog-sort-trigger');
      if (wrap) wrap.classList.remove('open');
      if (trig) trig.setAttribute('aria-expanded', 'false');
      renderSortDropdown();
      renderSmashPicker();
    });
  });
}

let searchHelpPinned = false;
let searchHelpLeaveTimer = null;

function setSearchHelpOpen(isOpen) {
  const btn = document.getElementById('catalog-search-help-btn');
  const popover = document.getElementById('catalog-search-help-popover');
  if (!btn || !popover) return;
  btn.classList.toggle('is-open', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
  popover.classList.toggle('open', isOpen);
  popover.setAttribute('aria-hidden', String(!isOpen));
}

function closeSearchHelpPopover() {
  clearTimeout(searchHelpLeaveTimer);
  searchHelpLeaveTimer = null;
  searchHelpPinned = false;
  setSearchHelpOpen(false);
}

function renderSearchHelpPopover() {
  const ui = t();
  const btn = document.getElementById('catalog-search-help-btn');
  const popover = document.getElementById('catalog-search-help-popover');
  if (btn) {
    btn.removeAttribute('title');
    btn.setAttribute('aria-label', ui.searchHelpTooltip);
  }
  if (!popover) return;

  const rows = [
    { method: ui.searchMethodBrand, examples: ['Toyota', 'Honda'] },
    { method: ui.searchMethodModel, examples: ['Auris', 'Civic'] },
    { method: ui.searchMethodEngine, examples: ['1.8', 'K20'] },
    { method: ui.searchMethodYear, examples: ['2010', '2010-2014'] },
    { method: ui.searchMethodPower, examples: [ui.searchExPower1, ui.searchExPower2] },
    { method: ui.searchMethodPrice, examples: ['<8000€', '6000-9000€'] },
    { method: ui.searchMethodFuel, examples: [ui.searchExFuel1, ui.searchExFuel2] },
    { method: ui.searchMethodDrive, examples: ['AWD', 'SUV'] },
    { method: ui.searchMethodTier, examples: [ui.searchExTier, ui.searchExCombo] }
  ];

  const rowsHtml = rows
    .map(
      (r) => `
        <div class="search-help-row">
          <span class="search-help-method">${r.method}</span>
          <div class="search-help-chips">
            ${r.examples
              .map(
                (ex) =>
                  `<button type="button" class="search-help-chip" data-search-example="${escapeHtmlAttr(ex)}">${escapeHtmlAttr(ex)}</button>`
              )
              .join('')}
          </div>
        </div>
      `
    )
    .join('');

  popover.innerHTML = `
    <div class="search-help-header">
      <span class="search-help-title">${ui.searchHelpTitle}</span>
      <span class="search-help-sub">${ui.searchHelpHint}</span>
    </div>
    <div class="search-help-list">${rowsHtml}</div>
    <div class="search-help-footer">${ui.searchHelpFooter}</div>
  `;

  popover.querySelectorAll('.search-help-chip[data-search-example]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const ex = chip.getAttribute('data-search-example') || '';
      const searchInput = document.getElementById('catalog-search');
      catalogQuery = ex;
      if (searchInput) {
        searchInput.value = ex;
        searchInput.focus();
      }
      closeSearchHelpPopover();
      renderSmashPicker();
    });
  });
}

function matchesCatalogQuery(item, rawQuery) {
  const normalized = String(rawQuery || '')
    .trim()
    .toLowerCase()
    .replace(/(\d)[,.](\d{3})(?!\d)/g, '$1$2')
    .replace(/€\s*(\d)/g, '€$1')
    .replace(/(\d)\s*[–—-]\s*(€?\d)/g, '$1-$2')
    .replace(/([<>]=?)\s*(€?\d)/g, '$1$2')
    .replace(/(\d+(?:-\d+)?\+?)\s*(hp|ps|л\.с\.|лс|€|eur)(?=\s|$)/gi, '$1$2');

  const tokens = normalized.split(/\s+/).filter(Boolean);
  if (!tokens.length) return true;

  const ui = t();
  const { baseCar, idx, medianUsedNum } = item;
  const fuelLabels = {
    petrol: ui.engineCategoryPetrol,
    diesel: ui.engineCategoryDiesel,
    hybrid: ui.engineCategoryHybrid
  };

  const years = String(baseCar.yearMake || '').match(/\d{4}/g) || [];
  const startY = years.length ? Number(years[0]) : 0;
  const endY = years.length > 1 ? Number(years[years.length - 1]) : startY;
  const engineHps = (baseCar.engines || []).map((e) => getEngineHp(e)).filter((n) => n > 0);

  const typeLabel = getCarTypeLabel(getCarType(baseCar));
  const engineHay = (baseCar.engines || [])
    .map((e) => {
      const cat = getEngineCategory(e);
      const subEn = e.engineSubLabel && e.engineSubLabel.en ? e.engineSubLabel.en : '';
      const subCur = e.engineSubLabel && e.engineSubLabel[currentLang] ? e.engineSubLabel[currentLang] : '';
      return `${e.engineBadge || ''} ${e.fullName || ''} ${e.fuelType || ''} ${fuelLabels[cat] || ''} ${e.drivetrain || ''} ${subEn} ${subCur}`;
    })
    .join(' ');
  const hay = `${baseCar.fullName} ${getSmashGridLabel(baseCar)} ${baseCar.yearMake} ${baseCar.drivetrain} ${baseCar.carType} ${typeLabel} ${engineHay}`.toLowerCase();

  const testCmp = (actual, op, val) => {
    if (op === '>') return actual > val;
    if (op === '>=') return actual >= val;
    if (op === '<') return actual < val;
    if (op === '<=') return actual <= val;
    return actual === val;
  };

  const tierMap = { а: 'a', в: 'b', с: 'c' };

  return tokens.every((tok) => {
    const powerMatch = tok.match(/^(>=|<=|>|<)?(\d{2,4})(?:-(\d{2,4}))?(\+)?(?:hp|ps|л\.с\.|лс)$/);
    if (powerMatch) {
      const [, op, v1Str, v2Str, plus] = powerMatch;
      const v1 = Number(v1Str);
      if (v2Str) {
        const v2 = Number(v2Str);
        const lo = Math.min(v1, v2);
        const hi = Math.max(v1, v2);
        return engineHps.some((hp) => hp >= lo && hp <= hi);
      }
      if (plus) return engineHps.some((hp) => hp >= v1);
      return engineHps.some((hp) => testCmp(hp, op || '=', v1));
    }

    const yearRangeMatch = tok.match(/^(19\d{2}|20\d{2})-(19\d{2}|20\d{2})$/);
    if (yearRangeMatch) {
      if (!startY) return false;
      const y1 = Number(yearRangeMatch[1]);
      const y2 = Number(yearRangeMatch[2]);
      const lo = Math.min(y1, y2);
      const hi = Math.max(y1, y2);
      return startY <= hi && endY >= lo;
    }

    const yearSingleMatch = tok.match(/^(19\d{2}|20\d{2})$/);
    if (yearSingleMatch) {
      const y = Number(yearSingleMatch[1]);
      return (startY && startY <= y && y <= endY) || hay.includes(tok);
    }

    const yearCmpMatch = tok.match(/^(>=|<=|>|<)(19\d{2}|20\d{2})$/);
    if (yearCmpMatch) {
      if (!startY) return false;
      const [, op, yStr] = yearCmpMatch;
      const y = Number(yStr);
      return op === '>' || op === '>=' ? testCmp(endY, op, y) : testCmp(startY, op, y);
    }

    const priceMatch = tok.match(/^(>=|<=|>|<)?€?(\d{3,6})(?:-€?(\d{3,6}))?(?:€|eur)$|^(>=|<=|>|<)€(\d{3,6})$|^(>=|<=|>|<)(\d{4,6})$/);
    if (priceMatch) {
      const op = priceMatch[1] || priceMatch[4] || priceMatch[6] || '';
      const v1 = Number(priceMatch[2] || priceMatch[5] || priceMatch[7]);
      const v2 = priceMatch[3] ? Number(priceMatch[3]) : null;
      if (v2 !== null) {
        const lo = Math.min(v1, v2);
        const hi = Math.max(v1, v2);
        return medianUsedNum >= lo && medianUsedNum <= hi;
      }
      if (op) return testCmp(medianUsedNum, op, v1);
      return Math.abs(medianUsedNum - v1) <= 500 || hay.includes(tok);
    }

    const barePowerMatch = tok.match(/^(>=|<=|>|<)(\d{2,3})$|^(\d{2,3})\+$/);
    if (barePowerMatch) {
      if (barePowerMatch[3]) {
        const v = Number(barePowerMatch[3]);
        return engineHps.some((hp) => hp >= v);
      }
      const op = barePowerMatch[1];
      const v = Number(barePowerMatch[2]);
      return engineHps.some((hp) => testCmp(hp, op, v));
    }

    const tierMatch = tok.match(/^(s\+|s|a|b|c|d|f|а|в|с)-(?:class|klasse|класс)$/);
    if (tierMatch) {
      const wanted = tierMap[tierMatch[1]] || tierMatch[1];
      return idx.piClass.toLowerCase() === wanted;
    }

    if (/^(automatic|auto|automatik|автомат|акпп)$/.test(tok)) {
      return /(e-?cvt|\bcvt\b|\bdsg\b|s-?tronic|\bdct\b|powershift|multidrive|[4-9]g-?tronic|\b[4-9]-?at\b|automatik|automatic|акпп|вариатор)/i.test(engineHay);
    }

    if (/^(manual|schalter|schaltgetriebe|механика|мкпп)$/.test(tok)) {
      return /(\b[5-6]-?mt\b|manual|schaltgetriebe|schalter|мкпп)/i.test(engineHay);
    }

    return hay.includes(tok);
  });
}

function initCatalogControls() {
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      catalogQuery = e.target.value || '';
      renderSmashPicker();
    });
  }

  const searchWrap = document.getElementById('catalog-search-wrap');
  const helpBtn = document.getElementById('catalog-search-help-btn');
  const helpPopover = document.getElementById('catalog-search-help-popover');
  const sortWrap = document.getElementById('catalog-sort-dropdown');
  const sortTrigger = document.getElementById('catalog-sort-trigger');

  if (searchWrap && helpBtn && helpPopover) {
    const cancelLeave = () => {
      clearTimeout(searchHelpLeaveTimer);
      searchHelpLeaveTimer = null;
    };

    const scheduleLeave = () => {
      if (searchHelpPinned) return;
      cancelLeave();
      searchHelpLeaveTimer = setTimeout(() => {
        if (!searchHelpPinned) setSearchHelpOpen(false);
      }, 150);
    };

    const openFromHover = () => {
      cancelLeave();
      if (sortWrap) sortWrap.classList.remove('open');
      if (sortTrigger) sortTrigger.setAttribute('aria-expanded', 'false');
      setSearchHelpOpen(true);
    };

    helpBtn.addEventListener('mouseenter', openFromHover);
    helpPopover.addEventListener('mouseenter', openFromHover);
    helpBtn.addEventListener('mouseleave', scheduleLeave);
    helpPopover.addEventListener('mouseleave', scheduleLeave);

    helpBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cancelLeave();
      searchHelpPinned = !searchHelpPinned;
      if (searchHelpPinned) {
        if (sortWrap) sortWrap.classList.remove('open');
        if (sortTrigger) sortTrigger.setAttribute('aria-expanded', 'false');
        setSearchHelpOpen(true);
      } else {
        setSearchHelpOpen(false);
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchWrap.contains(e.target)) {
        closeSearchHelpPopover();
      }
    });
  }

  if (sortWrap && sortTrigger) {
    sortTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSearchHelpPopover();
      const willOpen = !sortWrap.classList.contains('open');
      sortWrap.classList.toggle('open', willOpen);
      sortTrigger.setAttribute('aria-expanded', String(willOpen));
    });

    document.addEventListener('click', (e) => {
      if (!sortWrap.contains(e.target)) {
        sortWrap.classList.remove('open');
        sortTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function renderSmashPicker() {
  const ui = t();
  const titleEl = document.getElementById('smash-title');
  const hintEl = document.getElementById('smash-hint');
  const slotsBar = document.getElementById('smash-slots-bar');
  const gridEl = document.getElementById('smash-car-grid');
  if (!slotsBar || !gridEl) return;

  if (activeRosterTarget !== 'p1' && activeRosterTarget !== 'p2') {
    activeRosterTarget = 'p1';
  }

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

  const clearSlotSelection = (slot) => {
    cancelDuelTransition();
    if (slot === 'p1') {
      selectedLeftId = null;
      selectedLeftEngineId = null;
      activeRosterTarget = 'p1';
    } else if (slot === 'p2') {
      selectedRightId = null;
      selectedRightEngineId = null;
      activeRosterTarget = 'p2';
    } else if (slot === 'both') {
      selectedLeftId = null;
      selectedLeftEngineId = null;
      selectedRightId = null;
      selectedRightEngineId = null;
      activeRosterTarget = 'p1';
    }
    smashPickerForceOpen = false;
    updateArena();
  };

  slotsBar.querySelectorAll('[data-clear-slot]').forEach((clearBtn) => {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearSlotSelection(clearBtn.getAttribute('data-clear-slot'));
    });
  });

  let items = CAR_ROSTER.map((baseCar) => {
    const idx = calculateLineupAverageIndex(baseCar);
    const medianUsedNum = calculateMedianUsedPrice(baseCar);
    const maxHp = Math.max(...(baseCar.engines || []).map((e) => getEngineHp(e)), 0);
    return { baseCar, idx, medianUsedNum, maxHp };
  });

  if (catalogFilter !== 'all') {
    items = items.filter((item) => getCarType(item.baseCar) === catalogFilter);
  }

  if (catalogQuery.trim()) {
    items = items.filter((item) => matchesCatalogQuery(item, catalogQuery));
  }

  if (catalogSort === 'curated') {
    items.sort((a, b) => (a.baseCar.gridOrder ?? Number(a.baseCar.number)) - (b.baseCar.gridOrder ?? Number(b.baseCar.number)));
  } else if (catalogSort === 'score-desc') {
    items.sort((a, b) => b.idx.piNum - a.idx.piNum);
  } else if (catalogSort === 'price-asc') {
    items.sort((a, b) => a.medianUsedNum - b.medianUsedNum);
  } else if (catalogSort === 'power-desc') {
    items.sort((a, b) => b.maxHp - a.maxHp);
  } else if (catalogSort === 'name-asc') {
    items.sort((a, b) => getSmashGridLabel(a.baseCar).localeCompare(getSmashGridLabel(b.baseCar)));
  }

  if (!items.length) {
    gridEl.innerHTML = `<div class="catalog-empty-state">${ui.noResults}</div>`;
    return;
  }

  gridEl.innerHTML = items.map(({ baseCar, idx, medianUsedNum }) => {
    const isP1 = baseCar.id === selectedLeftId;
    const isP2 = baseCar.id === selectedRightId;
    let stateClass = '';
    if (isP1 && isP2) stateClass = 'selected-both';
    else if (isP1) stateClass = 'selected-p1';
    else if (isP2) stateClass = 'selected-p2';

    const clearTarget = isP1 && isP2 ? 'both' : isP1 ? 'p1' : isP2 ? 'p2' : '';
    const mirrorClass = (baseCar.imageFacing || 'right') === 'left' ? 'mirrored-car' : '';
    const thumbSrc = getCarThumbSrc(baseCar.image);
    const medianPriceStr = formatEuroAmount(medianUsedNum);
    const powerRange = getCarPowerRange(baseCar);
    const engineCountStr = formatEngineCount((baseCar.engines || []).length);

    return `
      <div role="button" tabindex="0" class="smash-car-tile ${stateClass}" data-smash-car-id="${baseCar.id}">
        <div class="smash-car-thumb-wrap">
          <img class="smash-car-thumb ${mirrorClass}" src="${thumbSrc}" onerror="if(!this.dataset.fb){this.dataset.fb='1';this.src='${baseCar.image}';}" alt="${getSmashGridLabel(baseCar)}" draggable="false" />
          <div class="catalog-card-badges">
            <span class="catalog-type-tag">${getCarTypeLabel(getCarType(baseCar))}</span>
            ${buildForzaIndexBlock(idx, true)}
          </div>
          ${(isP1 || isP2) ? `<div class="smash-car-badges">${isP1 ? '<span class="mini-p-badge p1-badge">C1</span>' : ''}${isP2 ? '<span class="mini-p-badge p2-badge">C2</span>' : ''}</div>` : ''}
          ${clearTarget ? `<button type="button" class="smash-tile-clear" data-clear-slot="${clearTarget}" title="${ui.smashClearSlot}" aria-label="${ui.smashClearSlot}">✕</button>` : ''}
        </div>
        <div class="catalog-card-body">
          <span class="card-watermark" aria-hidden="true">#${baseCar.number}</span>
          <div>
            <div class="catalog-card-kicker">${baseCar.yearMake} · ${baseCar.drivetrain}</div>
            <h3 class="catalog-card-title">${getSmashGridLabel(baseCar)}</h3>
          </div>
          <div class="catalog-card-meta">
            <span title="${ui.medianUsedPriceTitle}">${ui.estUsedMarket}: <strong class="catalog-price-val">${medianPriceStr}</strong></span>
            <span>${powerRange} · ${engineCountStr}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  gridEl.querySelectorAll('[data-clear-slot]').forEach((clearBtn) => {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearSlotSelection(clearBtn.getAttribute('data-clear-slot'));
    });
  });

  gridEl.querySelectorAll('.smash-car-tile').forEach((tile) => {
    const selectTileCar = () => {
      const wasBothSelected = Boolean(selectedLeftId && selectedRightId);
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

      cancelDuelTransition();

      if (selectedLeftId && selectedRightId) {
        if (!wasBothSelected) {
          runDuelEntranceSequence({ fromSmashPicker: true });
          return;
        }
        smashPickerForceOpen = false;
      }
      updateArena();
    };

    tile.addEventListener('click', (e) => {
      if (e.target.closest('[data-clear-slot]')) return;
      selectTileCar();
    });
    tile.addEventListener('keydown', (e) => {
      if (e.target.closest('[data-clear-slot]')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectTileCar();
      }
    });
  });
}

let compareHintTimer = null;
let compareShakeTimer = null;

function hideCompareHint() {
  clearTimeout(compareHintTimer);
  compareHintTimer = null;
  const hint = document.getElementById('nav-compare-hint');
  if (hint) {
    hint.classList.remove('is-visible');
    hint.setAttribute('aria-hidden', 'true');
  }
}

function triggerCompareGuardFeedback() {
  const btn = document.getElementById('nav-compare-btn');
  const hint = document.getElementById('nav-compare-hint');
  if (btn) {
    clearTimeout(compareShakeTimer);
    btn.classList.remove('is-shaking');
    void btn.offsetWidth;
    btn.classList.add('is-shaking');
    compareShakeTimer = setTimeout(() => {
      btn.classList.remove('is-shaking');
    }, 400);
  }
  if (hint) {
    hint.textContent = t().compareNeedTwoCars;
    hint.classList.add('is-visible');
    hint.setAttribute('aria-hidden', 'false');
    clearTimeout(compareHintTimer);
    compareHintTimer = setTimeout(() => {
      hideCompareHint();
    }, 2400);
  }
}

function syncTopNavState() {
  const bothSelected = Boolean(selectedLeftId && selectedRightId);
  const showHome = Boolean(isHomeView);
  const showSmashGrid = !showHome && (!bothSelected || smashPickerForceOpen);
  const showDuel = !showHome && bothSelected && !smashPickerForceOpen;

  const navCatalog = document.getElementById('nav-catalog-btn');
  const navShowroom = document.getElementById('nav-showroom-btn');
  const navCompare = document.getElementById('nav-compare-btn');
  const navCompareDot = document.getElementById('nav-compare-dot');

  if (navCatalog) navCatalog.classList.toggle('active', showSmashGrid);
  if (navShowroom) {
    navShowroom.disabled = true;
    navShowroom.classList.remove('active');
  }
  if (navCompare) {
    navCompare.disabled = false;
    navCompare.classList.toggle('active', showDuel);
    navCompare.classList.toggle('is-locked', !bothSelected);
  }
  if (navCompareDot) {
    navCompareDot.hidden = !bothSelected;
  }
  if (bothSelected) {
    hideCompareHint();
  }
}

function updateArena() {
  const bothSelected = Boolean(selectedLeftId && selectedRightId);
  const showHome = Boolean(isHomeView);
  const showSmashGrid = !showHome && (!bothSelected || smashPickerForceOpen);

  const duelStage = document.querySelector('.duel-stage');
  const versusArena = document.getElementById('versus-arena');
  const homeStage = document.getElementById('home-landing-stage');
  const smashStage = document.getElementById('smash-picker-stage');

  document.body.classList.toggle('is-home-view', showHome);
  if (duelStage) {
    duelStage.classList.toggle('no-left-car', showHome || showSmashGrid || !selectedLeftId);
    duelStage.classList.toggle('no-right-car', showHome || showSmashGrid || !selectedRightId);
  }
  if (versusArena) {
    versusArena.classList.toggle('awaiting-selection', showHome || showSmashGrid);
    versusArena.classList.toggle('has-left-car', !showHome && Boolean(selectedLeftId));
    versusArena.classList.toggle('has-right-car', !showHome && Boolean(selectedRightId));
  }
  if (homeStage) {
    homeStage.classList.toggle('is-hidden', !showHome);
    homeStage.setAttribute('aria-hidden', String(!showHome));
  }
  if (smashStage) {
    smashStage.classList.toggle('is-hidden', !showSmashGrid);
    smashStage.setAttribute('aria-hidden', String(!showSmashGrid));
  }

  applyStaticTranslations();
  syncTopNavState();
  renderSmashPicker();

  if (showHome || showSmashGrid || !bothSelected) {
    const statsCenter = document.getElementById('stats-center');
    if (statsCenter) statsCenter.innerHTML = '';
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

// Initialize Top Navigation Bar (Showroom | Vehicle | Compare)
function initTopNav() {
  const navCatalog = document.getElementById('nav-catalog-btn');
  const navCompare = document.getElementById('nav-compare-btn');
  const compareWrap = document.getElementById('nav-compare-wrap');

  if (navCatalog) {
    navCatalog.addEventListener('click', () => {
      cancelDuelTransition();
      closeAllMenusAndModals();
      isHomeView = false;
      smashPickerForceOpen = true;
      updateArena();
    });
  }

  if (navCompare) {
    navCompare.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!(selectedLeftId && selectedRightId)) {
        triggerCompareGuardFeedback();
        return;
      }
      hideCompareHint();
      cancelDuelTransition();
      closeAllMenusAndModals();
      isHomeView = false;
      smashPickerForceOpen = false;
      updateArena();
    });
  }

  if (compareWrap) {
    document.addEventListener('click', (e) => {
      if (!compareWrap.contains(e.target)) {
        hideCompareHint();
      }
    });
  }
}

// Initialize Theme & Segmented Language Controls in Top HUD
function initHudUtilityMenus() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
    });
  }

  document.querySelectorAll('.lang-btn[data-lang-choice]').forEach((item) => {
    item.addEventListener('click', () => {
      const nextLang = item.getAttribute('data-lang-choice');
      if (!nextLang || nextLang === currentLang) return;
      currentLang = nextLang;
      updateArena();
    });
  });
}

// Initialize Clickable Index Classes Popover Menu
function initClassIndexMenu() {
  const toggleBtn = document.getElementById('class-menu-toggle-btn');
  const popover = document.getElementById('class-menu-popover');
  const closeBtn = document.getElementById('class-popover-close');
  const wrapper = document.getElementById('class-menu-wrapper');
  if (!toggleBtn || !popover || !wrapper) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isCurrentlyOpen = popover.classList.contains('open');
    if (!isCurrentlyOpen) {
      setPopupOpen(
        document.getElementById('weight-menu-toggle-btn'),
        document.getElementById('weight-menu-popover'),
        false
      );
    }
    setPopupOpen(toggleBtn, popover, !isCurrentlyOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPopupOpen(toggleBtn, popover, false);
    });
  }

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
  const activeDot = document.getElementById('weight-active-dot');
  if (activeDot) {
    activeDot.hidden = !isCustom;
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
    if (!isCurrentlyOpen) {
      setPopupOpen(
        document.getElementById('class-menu-toggle-btn'),
        document.getElementById('class-menu-popover'),
        false
      );
    }
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

function closeAllMenusAndModals() {
  closeCarLightbox();
  closeStatDossier();
  closeSearchHelpPopover();
  hideCompareHint();
  document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
  const sortWrap = document.getElementById('catalog-sort-dropdown');
  const sortTrig = document.getElementById('catalog-sort-trigger');
  if (sortWrap) sortWrap.classList.remove('open');
  if (sortTrig) sortTrig.setAttribute('aria-expanded', 'false');
  [
    ['engine-btn-left', 'engine-dropdown-left'],
    ['engine-btn-right', 'engine-dropdown-right'],
    ['class-menu-toggle-btn', 'class-menu-popover'],
    ['weight-menu-toggle-btn', 'weight-menu-popover']
  ].forEach(([btnId, menuId]) => {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (btn && menu) setPopupOpen(btn, menu, false);
  });
}

function initGarageDoorIntro() {
  const door = document.getElementById('garage-door-intro');
  if (!door) return;

  const prefersReduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    door.classList.add('is-complete');
    return;
  }

  let finished = false;
  const finishDoor = () => {
    if (finished) return;
    finished = true;
    door.classList.add('is-complete');
  };

  requestAnimationFrame(() => {
    door.classList.add('is-charging');
    setTimeout(() => {
      door.classList.add('is-opening');
    }, 680);
  });

  const leftPanel = door.querySelector('.door-panel-left');
  if (leftPanel) {
    leftPanel.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'transform') finishDoor();
    });
  }
  setTimeout(finishDoor, 2900);
}

// Initialize Event Listeners
function initCarDuel() {
  initGarageDoorIntro();
  initTopNav();
  initCatalogControls();
  initHudUtilityMenus();
  initEngineSelectorMenus();
  initClassIndexMenu();
  initWeightEqualizerMenu();

  // Homepage CTA button -> Choose Your Contenders picker
  const homeStartBtn = document.getElementById('home-start-btn');
  if (homeStartBtn) {
    homeStartBtn.addEventListener('click', () => {
      isHomeView = false;
      smashPickerForceOpen = false;
      updateArena();
    });
  }

  // Center CAR DUEL brand logo -> Return to Homepage (and reset contender selection)
  const brandHomeBtn = document.getElementById('hud-brand-home-btn');
  if (brandHomeBtn) {
    const goHome = () => {
      if (isHomeView) return;
      cancelDuelTransition();
      isHomeView = true;
      selectedLeftId = null;
      selectedRightId = null;
      selectedLeftEngineId = null;
      selectedRightEngineId = null;
      smashPickerForceOpen = false;
      activeRosterTarget = 'p1';
      const smashStage = document.getElementById('smash-picker-stage');
      if (smashStage) smashStage.scrollTop = 0;
      closeAllMenusAndModals();
      updateArena();
    };
    brandHomeBtn.addEventListener('click', goHome);
    brandHomeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goHome();
      }
    });
  }

  // Close open market price popovers on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.price-info-anchor')) {
      document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
    }
  });

  // Swap button in center VS medallion (swaps both cars and their active engines)
  const swapCarsBtn = document.getElementById('swap-cars-btn');
  if (swapCarsBtn) swapCarsBtn.addEventListener('click', () => {
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

  const dossierPrevBtn = document.getElementById('dossier-nav-prev');
  const dossierNextBtn = document.getElementById('dossier-nav-next');
  if (dossierPrevBtn) {
    dossierPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepStatDossier(-1);
    });
  }
  if (dossierNextBtn) {
    dossierNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepStatDossier(1);
    });
  }

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
    const dossierModal = document.getElementById('stat-dossier-modal');
    if (dossierModal && dossierModal.classList.contains('open') && !dossierModal.classList.contains('buyer-fit-mode')) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        stepStatDossier(-1);
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        stepStatDossier(1);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeDossierStatKey && activeDossierSide !== 'left') {
          openStatDossier(activeDossierStatKey, 'left');
        }
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeDossierStatKey && activeDossierSide !== 'right') {
          openStatDossier(activeDossierStatKey, 'right');
        }
        return;
      }
    }
    if (e.key === 'Escape') {
      closeAllMenusAndModals();
    }
  });

  window.addEventListener('resize', syncCarViewportAlignment);

  initSpecHoverTooltip();
  updateArena();
}

document.addEventListener('DOMContentLoaded', initCarDuel);
