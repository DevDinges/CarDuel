// ============================================================================
// AUTO DUEL — Two-Level 5-Pillar Head-to-Head Car Comparison System
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
    inspectCardBtn: 'In-Depth',
    backToCatalog: 'All Models',
    inDepthTitle: 'IN-DEPTH LOOK',
    orbitBadge: '360° STUDIO ORBIT',
    orbitHint: 'Drag image or use ← → keys',
    fullscreenBtn: 'Fullscreen',
    engineLabel: 'Engine Configuration',
    paintLabel: 'Factory Paint Palette',
    paintOemCode: 'OEM Code',
    compareCta: '+ Compare with Contender',
    compareEnginesBtn: '+ Compare Engines',
    enginePickerKicker: 'SAME-MODEL ENGINE DUEL',
    enginePickerTitle: 'Select Rival Engine',
    currentEngineTag: 'CURRENT C1',
    defaultEngineTitle: 'Featured Default Engine',
    themeToggleTitle: 'Toggle Dark / Light Theme',
    car1Tag: 'C1',
    opponentTag: 'C2',
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
    subWeightShareLabel: 'Category weight',
    swapCarBtn: 'Swap Car',
    swapCarTitle: 'Pick a different car for this slot',
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
    gearboxLabel: 'Gearbox',
    selectGearboxHeader: 'SELECT GEARBOX',
    gearboxCategoryAutomatic: 'Automatic',
    gearboxCategoryManual: 'Manual',
    defaultGearboxTitle: 'Factory default / most common gearbox',
    gearboxCountSingular: '1 gearbox',
    gearboxCountPlural: '{n} gearboxes',
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
    priceTitle: 'MARKET & DEPRECIATION',
    priceMsrpLabel: 'Original MSRP',
    priceCurrentLabel: 'Current Value',
    priceDepTotalLabel: 'Total Depreciation',
    priceRetainedLabel: 'Value Retained',
    priceAnnualLabel: 'Avg. Loss / Year',
    priceOutlookLabel: 'Value Expectation',
    outlookFloor: 'Bottomed Out • Minimal Further Drop',
    outlookStrong: 'Strong Resale • High Demand',
    outlookSteady: 'Steady • Predictable Curve',
    priceCurveTitle: 'Value & Depreciation Curve',
    priceCurveHint: 'Hover points or rows to inspect',
    homeKicker: 'AUTOMOTIVE SHOWDOWN',
    homeTitle: 'HEAD-TO-HEAD CAR COMPARISON',
    homeIntro: 'Pick two contenders, choose their engines, and put them head-to-head across {pillars} categories and {ratings} ratings. Adjust your priority weights to match what matters most and find the car that suits you best.',
    homeStartBtn: 'CHOOSE YOUR CONTENDERS',
    homeRosterMeta: '{cars} Vehicles • Multiple Engine Variants • Custom Priority Weights',
    homeBrandTooltip: 'Return to Homepage',
    homeDevBadge: 'DEV',
    homeDevNotice: '(Under active development) Version 1.0 — new features roll out every other day.',
    homeDevLatestLabel: 'Last change',
    homeDevChangelog: 'View Changelog',
    homeDevClose: 'Dismiss notice',
    buyerFitBtn: 'BUYER FIT — WHO IS THIS FOR?',
    buyerFitCategory: 'BUYER FIT & PRACTICAL SUMMARY',
    buyerFitIdealTitle: 'Great Fit For',
    buyerFitNotIdealTitle: 'Rather Not For',
    searchPlaceholder: 'Search make, model, engine...',
    filterAll: 'All Models',
    brandLabel: 'Brand',
    brandAll: 'All Brands',
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
    ariaSwitchContender: 'Switch contender',
    ariaScrollPaintsLeft: 'Scroll paints left',
    ariaScrollPaintsRight: 'Scroll paints right',
    ariaPrevDossier: 'Previous rating dossier',
    ariaNextDossier: 'Next rating dossier',
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
    inspectCardBtn: 'Details',
    backToCatalog: 'Alle Modelle',
    inDepthTitle: 'DETAILANSICHT',
    orbitBadge: '360° STUDIO-ANSICHT',
    orbitHint: 'Ziehen oder ← → Tasten nutzen',
    fullscreenBtn: 'Vollbild',
    engineLabel: 'Motorisierung',
    paintLabel: 'Werkslackierungen',
    paintOemCode: 'Farbcode',
    compareCta: '+ Mit Gegner vergleichen',
    compareEnginesBtn: '+ Motoren vergleichen',
    enginePickerKicker: 'MOTOR-DUELL IM SELBEN MODELL',
    enginePickerTitle: 'Gegner-Motor wählen',
    currentEngineTag: 'AKTUELL C1',
    defaultEngineTitle: 'Empfohlener Standard-Motor',
    themeToggleTitle: 'Hell / Dunkel wechseln',
    car1Tag: 'C1',
    opponentTag: 'C2',
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
    subWeightShareLabel: 'Kategorie-Anteil',
    swapCarBtn: 'Auto tauschen',
    swapCarTitle: 'Anderes Fahrzeug für diesen Platz wählen',
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
    gearboxLabel: 'Getriebe',
    selectGearboxHeader: 'GETRIEBE WÄHLEN',
    gearboxCategoryAutomatic: 'Automatik',
    gearboxCategoryManual: 'Schaltgetriebe',
    defaultGearboxTitle: 'Standard- / häufigstes Getriebe',
    gearboxCountSingular: '1 Getriebe',
    gearboxCountPlural: '{n} Getriebe',
    selectCarHeader: 'FAHRZEUG NACH TYP WÄHLEN',
    carSortUnsorted: 'UNSORTIERT',
    carTypeSubcompact: 'Kleinwagen',
    carTypeHatchback: 'Kompaktwagen (Fließheck)',
    carTypeHotHatch: 'Hot-Hatch',
    carTypeSedan: 'Limousine (Kombi)',
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
    priceTitle: 'MARKT & WERTVERLUST',
    priceMsrpLabel: 'Neupreis (UVP)',
    priceCurrentLabel: 'Aktueller Wert',
    priceDepTotalLabel: 'Wertverlust Gesamt',
    priceRetainedLabel: 'Restwert-Anteil',
    priceAnnualLabel: 'Ø Verlust / Jahr',
    priceOutlookLabel: 'Werterwartung',
    outlookFloor: 'Talsohle erreicht • Kaum weiterer Verlust',
    outlookStrong: 'Wertstabil • Hohe Nachfrage',
    outlookSteady: 'Solide • Planbarer Wertverlauf',
    priceCurveTitle: 'Wert- & Wertverlustkurve',
    priceCurveHint: 'Punkte oder Zeilen hovern',
    homeKicker: 'KOPF-AN-KOPF',
    homeTitle: 'WELCHES AUTO PASST ZU DIR?',
    homeIntro: 'Schicke zwei Autos ins direkte Duell über {pillars} Kategorien und {ratings} Einzelwertungen. Gewichte, was für dich zählt, und finde deinen persönlichen Sieger.',
    homeStartBtn: 'MODELLE WÄHLEN',
    homeRosterMeta: '{cars} FAHRZEUGE • MEHRERE MOTORISIERUNGEN • EIGENE GEWICHTUNG',
    homeBrandTooltip: 'Zurück zur Startseite',
    homeDevBadge: 'DEV',
    homeDevNotice: '(In aktiver Entwicklung) Version 1.0 — alle paar Tage erscheinen neue Funktionen.',
    homeDevLatestLabel: 'Letzte Änderung',
    homeDevChangelog: 'Changelog ansehen',
    homeDevClose: 'Hinweis schließen',
    buyerFitBtn: 'FÜR WEN GEEIGNET? • FAZIT',
    buyerFitCategory: 'KAUFBERATUNG & ZIELGRUPPE',
    buyerFitIdealTitle: 'Ideal geeignet für',
    buyerFitNotIdealTitle: 'Eher nicht geeignet für',
    searchPlaceholder: 'Marke, Modell oder Motor suchen...',
    filterAll: 'Alle Modelle',
    brandLabel: 'Marke',
    brandAll: 'Alle Marken',
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
    ariaSwitchContender: 'Fahrzeug wechseln',
    ariaScrollPaintsLeft: 'Lackfarben nach links scrollen',
    ariaScrollPaintsRight: 'Lackfarben nach rechts scrollen',
    ariaPrevDossier: 'Vorheriges Wertungs-Dossier',
    ariaNextDossier: 'Nächstes Wertungs-Dossier',
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
    inspectCardBtn: 'Обзор',
    backToCatalog: 'Все модели',
    inDepthTitle: 'ОБЗОР МОДЕЛИ',
    orbitBadge: '360° ОБЗОР В СТУДИИ',
    orbitHint: 'Тяните фото или жмите ← →',
    fullscreenBtn: 'Во весь экран',
    engineLabel: 'Двигатель',
    paintLabel: 'Заводская палитра',
    paintOemCode: 'Код краски',
    compareCta: '+ Сравнить с соперником',
    compareEnginesBtn: '+ Сравнить двигатели',
    enginePickerKicker: 'ДУЭЛЬ ДВИГАТЕЛЕЙ ОДНОЙ МОДЕЛИ',
    enginePickerTitle: 'Выберите двигатель-соперник',
    currentEngineTag: 'ТЕКУЩИЙ C1',
    defaultEngineTitle: 'Базовый рекомендуемый мотор',
    themeToggleTitle: 'Сменить тему',
    car1Tag: 'C1',
    opponentTag: 'C2',
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
    subWeightShareLabel: 'Вес в категории',
    swapCarBtn: 'Сменить авто',
    swapCarTitle: 'Выбрать другой автомобиль для этого слота',
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
    gearboxLabel: 'КПП',
    selectGearboxHeader: 'ВЫБЕРИТЕ КПП',
    gearboxCategoryAutomatic: 'Автомат',
    gearboxCategoryManual: 'Механика',
    defaultGearboxTitle: 'Базовая / самая частая КПП',
    gearboxCountSingular: '1 КПП',
    gearboxCountPlural: '{n} КПП',
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
    priceTitle: 'РЫНОК И АМОРТИЗАЦИЯ',
    priceMsrpLabel: 'Цена нового',
    priceCurrentLabel: 'Текущая цена',
    priceDepTotalLabel: 'Общая потеря цены',
    priceRetainedLabel: 'Остаточная стоимость',
    priceAnnualLabel: 'Потеря в год (ср.)',
    priceOutlookLabel: 'Прогноз цены',
    outlookFloor: 'Дно рынка • Минимальное падение',
    outlookStrong: 'Высокая ликвидность • Хороший спрос',
    outlookSteady: 'Умеренное снижение • Предсказуемо',
    priceCurveTitle: 'Кривая стоимости и амортизации',
    priceCurveHint: 'Наведите на точки или строки',
    homeKicker: 'АВТОМОБИЛЬНАЯ ДУЭЛЬ',
    homeTitle: 'ПРЯМАЯ ДУЭЛЬ АВТОМОБИЛЕЙ',
    homeIntro: 'Выберите двух претендентов, укажите их двигатели и сравните их лицом к лицу по {pillars} категориям и {ratings} оценкам. Настройте приоритеты под то, что для вас важнее всего, и найдите автомобиль, который подходит именно вам.',
    homeStartBtn: 'ВЫБЕРИТЕ АВТОМОБИЛИ',
    homeRosterMeta: '{cars} автомобилей • Разные двигатели • Настройка приоритетов',
    homeBrandTooltip: 'Вернуться на главную',
    homeDevBadge: 'DEV',
    homeDevNotice: '(В активной разработке) Версия 1.0 — новые функции выходят каждые пару дней.',
    homeDevLatestLabel: 'Последнее изменение',
    homeDevChangelog: 'История изменений',
    homeDevClose: 'Скрыть уведомление',
    buyerFitBtn: 'КОМУ ПОДОЙДЁТ? • ИТОГ',
    buyerFitCategory: 'КОМУ ПОДОЙДЁТ АВТОМОБИЛЬ',
    buyerFitIdealTitle: 'Отлично подойдёт',
    buyerFitNotIdealTitle: 'Скорее не подойдёт',
    searchPlaceholder: 'Поиск марки, модели, мотора...',
    filterAll: 'Все модели',
    brandLabel: 'Марка',
    brandAll: 'Все марки',
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
    searchExCombo: 'Honda Дизель',
    ariaSwitchContender: 'Переключить автомобиль',
    ariaScrollPaintsLeft: 'Прокрутить цвета влево',
    ariaScrollPaintsRight: 'Прокрутить цвета вправо',
    ariaPrevDossier: 'Предыдущее досье оценки',
    ariaNextDossier: 'Следующее досье оценки'
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
    id: 'performanceDynamics',
    number: '1',
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
      en: 'Rates 0–100 sprint (30%), mid-range overtaking torque (30%), cornering composure (25%), and braking (15%) — weighted 100% total (max 10.0). Reflects both driving fun and highway reserves.',
      de: 'Bewertet Sprint 0–100 (30 %), Durchzug (30 %), Kurvenverhalten (25 %) und Bremsen (15 %) — gewichtete 100 %-Wertung (max. 10,0). Spiegelt Fahrspaß und Überholreserven wider.',
      ru: 'Оценивает разгон 0–100 (30%), тягу на обгонах (30%), управляемость (25%) и тормоза (15%) — взвешенные 100% (макс. 10.0). Показывает запас динамики и удовольствие от вождения.'
    },
    subRatings: [
      {
        key: 'accelerationOvertaking',
        weight: 0.30,
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
        weight: 0.30,
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
        weight: 0.25,
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
        weight: 0.15,
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
    id: 'reliabilityQuality',
    number: '2',
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
      en: 'Measures long-term dependability weighted by real repair impact: engine (45%), gearbox/driveline (25%), rust/chassis (15%), and electronics (15%) — 100% total (max 10.0).',
      de: 'Bewertet Langzeit-Haltbarkeit nach realem Kostenrisiko: Motor (45 %), Getriebe/Antrieb (25 %), Rost/Fahrwerk (15 %) und Elektrik (15 %) — 100 % gesamt (max. 10,0).',
      ru: 'Оценивает надёжность с учётом цены ремонта: двигатель (45%), КПП и привод (25%), кузов/подвеска (15%) и электрика (15%) — 100% в сумме (макс. 10.0).'
    },
    subRatings: [
      {
        key: 'powertrainDurability',
        weight: 0.45,
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
        weight: 0.25,
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
        weight: 0.15,
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
        weight: 0.15,
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
    id: 'runningCostsTco',
    number: '3',
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
      en: 'Tracks ownership costs weighted by wallet impact: maintenance & repair risk (35%), real-world fuel economy (30%), resale retention (20%), and tax & insurance (15%) — 100% total (max 10.0).',
      de: 'Bewertet Unterhaltskosten nach Budget-Einfluss: Wartung & Reparaturrisiko (35 %), Praxisverbrauch (30 %), Werterhalt (20 %) sowie Steuer & Versicherung (15 %) — 100 % gesamt (max. 10,0).',
      ru: 'Оценивает стоимость владения: обслуживание и ремонт (35%), реальный расход топлива (30%), ликвидность (20%), налог и страховка (15%) — 100% в сумме (макс. 10.0).'
    },
    subRatings: [
      {
        key: 'efficiencyFuel',
        weight: 0.30,
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
        weight: 0.15,
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
        weight: 0.35,
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
        weight: 0.20,
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
  },
  {
    id: 'comfortCabin',
    number: '4',
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
      en: 'Covers ride & highway quietness (30%), cabin build & controls (25%), crash/assist safety (25%), and visibility & city ease (20%) — 100% total (max 10.0).',
      de: 'Bewertet Federungs- & Geräuschkomfort (30 %), Innenraum & Bedienung (25 %), Sicherheit (25 %) sowie Rundumsicht & Stadt-Wendigkeit (20 %) — 100 % gesamt (max. 10,0).',
      ru: 'Оценивает плавность и тишину (30%), качество салона (25%), безопасность (25%) и обзорность в городе (20%) — 100% в сумме (макс. 10.0).'
    },
    subRatings: [
      {
        key: 'rideNoiseComfort',
        weight: 0.30,
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
        weight: 0.25,
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
        weight: 0.20,
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
        weight: 0.25,
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
    number: '5',
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
      en: 'Evaluates passenger room & access (40%), boot volume & seat folding (40%), and payload/towing limits (20%) — 100% total (max 10.0).',
      de: 'Bewertet Platzangebot & Einstieg (40 %), Kofferraum & Klappkonzept (40 %) sowie Zuladung & Anhängelast (20 %) — 100 % gesamt (max. 10,0).',
      ru: 'Оценивает простор салона (40%), багажник и трансформацию (40%), а также грузоподъёмность и буксировку (20%) — 100% в сумме (макс. 10.0).'
    },
    subRatings: [
      {
        key: 'passengerSpaceErgonomics',
        weight: 0.40,
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
        weight: 0.40,
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
        weight: 0.20,
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
  '@eCvt': { en: 'Planetary e-CVT (Automatic)', de: 'Planeten-e-CVT (Automatik)', ru: 'Планетарный e-CVT (Автомат)' },
  '@cvt': { en: 'CVT Automatic', de: 'CVT-Automatik', ru: 'Вариатор CVT (Автомат)' },
  '@auto5': { en: '5-Speed Torque Auto', de: '5-Gang Wandler-Automatik', ru: '5-ст. Автомат' },
  '@auto6': { en: '6-Speed Torque Auto', de: '6-Gang Wandler-Automatik', ru: '6-ст. Автомат' },
  '@auto7': { en: '7-Speed Torque Auto', de: '7-Gang Wandler-Automatik', ru: '7-ст. Автомат' },
  '@dsg6Wet': { en: '6-Speed Wet DSG (Automatic)', de: '6-Gang Nass-DSG (Automatik)', ru: '6-ст. Мокрый DSG (Автомат)' },
  '@dsg7Dry': { en: '7-Speed Dry DSG (Automatic)', de: '7-Gang Trocken-DSG (Automatik)', ru: '7-ст. Сухой DSG (Автомат)' },
  '@dsg7Wet': { en: '7-Speed Wet DSG (Automatic)', de: '7-Gang Nass-DSG (Automatik)', ru: '7-ст. Мокрый DSG (Автомат)' },

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
  transmissionType: {
    en: 'Plainly classifies whether this configuration uses a clutch-pedal Manual gearbox, a self-shifting Automatic (such as Torque Auto, CVT, e-CVT, or DSG), or offers both.',
    de: 'Zeigt klar, ob diese Motorisierung als Schaltgetriebe (mit Kupplungspedal), als selbstschaltende Automatik (z. B. Wandler, CVT, e-CVT, DSG) oder in beiden Varianten angeboten wird.',
    ru: 'Наглядно показывает, оснащена ли версия механической КПП с педалью сцепления, автоматической трансмиссией (автомат, вариатор CVT/e-CVT, робот DSG) или доступна с обоими вариантами.'
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
    en: 'Real-world mid-range overtaking feel (e.g., 80–120 km/h). Turbocharged and diesel engines pull strongly in-gear; smaller naturally aspirated engines need a downshift.',
    de: 'Praxis-Durchzug beim Überholen (z. B. 80–120 km/h). Turbos und Diesel ziehen direkt an; kleinere Saugmotoren verlangen meist einen Gang tiefer.',
    ru: 'Реальная эластичность на обгонах (80–120 км/ч). Турбо и дизели тянут сразу; небольшим атмосферникам обычно нужно переключиться ниже.'
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


const VEHICLE_TABS_I18N = {
  en: {
    tabs: {
      overview: 'Overview & Verdict',
      ratings: '5-Pillar Rating',
      specs: 'Technical Specs',
      trims: 'Trims & Interior',
      reliability: 'Reliability & Known Issues',
      costs: 'Running Costs',
      market: 'Market & Pricing'
    },
    strengthsTitle: 'Standout Strengths & Trade-Offs',
    missionTitle: 'Mission Profile',
    bestRoleLabel: 'Best Role',
    missionCity: 'City Commute',
    missionHighway: 'Highway Cruise',
    missionFamily: 'Family & Cargo',
    missionFun: 'Driving Fun',
    missionBudget: 'Budget & Long-Term',
    pillarsTitle: '5-Pillar Telemetry Overview',
    clickToExpandHint: 'Click any pillar to inspect its sub-ratings',
    buyerFitTitle: 'Buyer Fit — Who Is This For?',
    ratingsTitle: '5-Pillar Rating Breakdown',
    ratingsHint: 'Click any sub-rating row to open its full Engineering Dossier',
    expandAll: '+ EXPAND ALL',
    collapseAll: '− COLLAPSE ALL',
    totalScoreTitle: 'TOTAL SCORE',
    totalScoreSub: 'UNWEIGHTED 5-PILLAR BASELINE',
    specsTitle: 'Complete Technical Specifications',
    specsHint: 'Hover any value or row for engineering context',
    secPowertrain: 'Engine & Drivetrain',
    secPerfChassis: 'Performance & Chassis',
    secDimSpace: 'Dimensions & Practicality',
    secComfortSafety: 'Comfort, Safety & Build',
    secEffOwnership: 'Efficiency & Ownership',
    trimsSectionTitle: 'EU / DE Trim Levels',
    trimsSectionHint: 'Used-market price deltas reflect comparable mileage and condition',
    trimsSweetSpotBadge: 'Sweet Spot',
    trimsMatrixTitle: 'Equipment Comparison Matrix',
    trimsMatrixFeatureCol: 'Feature / Equipment',
    trimsLegendStd: 'Standard',
    trimsLegendOpt: 'Optional / Package',
    trimsLegendNone: 'Not available',
    trimsInteriorTitle: 'Interior Quality & Ergonomics',
    trimsInteriorKicker: 'Cabin Craft',
    trimsEngineCabinTitle: 'Selected Powertrain Cabin Notes',
    trimsFaceliftTitle: 'Facelift & Model-Year Updates',
    trimsFaceliftKicker: 'Lifecycle Updates',
    relStatsTitle: 'Independent Reliability Track Record',
    relDepthSimple: 'Simple',
    relDepthThorough: 'Thorough',
    relSimpleHint: 'Essential buying verdict & key pre-purchase checks',
    relThoroughHint: 'Full inspection checklist, weak spots, repair costs & 0–250,000 km roadmap',
    relVerdictKicker: 'Powertrain Durability Verdict',
    relBoosters: '+ Score Boosters',
    relDrags: '− Watch-Outs',
    relTopChecks: 'Key Checks Before Buying',
    relTopIssues: 'Top Known Weak Spots',
    relExtendedChecks: 'Extended Thorough Inspection Checklist',
    relRepairTitle: 'Common Repairs & Wear Guide',
    relRoadmapTitle: '0–250,000 km High-Mileage Service & Risk Roadmap',
    relRoutineTitle: 'Model-Specific Routine Service',
    relCriticalTitle: 'Known Weak Spots & Critical Repairs',
    relNoneCritical: 'No chronic mechanical weak spots recorded for this engine.',
    relIfIgnored: 'If ignored:',
    costsEstTitle: 'Estimated Annual Ownership Cost',
    costsEstHint: 'Estimated European averages based on real-world consumption & selected mileage',
    costsFuelLabel: 'Fuel',
    costsTaxLabel: 'Road Tax',
    costsInsLabel: 'Insurance Est.',
    costsServiceLabel: 'Routine Service',
    costsTotalYrLabel: 'Est. Annual Total',
    costsPerMoLabel: 'Monthly Avg.',
    costsSavingsLabel: 'vs. Compact Petrol Class Avg.',
    costsSegmentLabels: {
      subcompact: 'vs. Subcompact Class Avg.',
      hatchback: 'vs. Compact Petrol Class Avg.',
      'hot-hatch': 'vs. Hot-Hatch Class Avg.',
      sedan: 'vs. Mid-Size / Exec Class Avg.',
      suv: 'vs. Compact SUV Class Avg.'
    },
    costsClassAvgLabel: 'Class baseline',
    costsRatingsTitle: 'Running Costs Sub-Ratings',
    costsClickDossier: 'Click any card to open its full Dossier',
    perYr: '/yr',
    perMo: '/mo',
    depGraphTitle: 'Value & Depreciation Curve',
    depGraphHint: 'Hover points or cards to inspect',
    marketInsightsTitle: 'Market Insights & 3–5 Year Outlook',
    marketSupplyLabel: 'Current Supply & Demand',
    marketSweetSpotLabel: 'Buyer Sweet Spot',
    marketOutlook35Label: '3–5 Year Value Expectation',
    ariaScrollTrims: 'Scroll trims',
    ariaScrollLeft: 'Scroll left',
    ariaScrollRight: 'Scroll right',
    ariaDetailDepth: 'Detail depth',
    ariaAnnualMileage: 'Annual mileage'
  },
  de: {
    tabs: {
      overview: 'Übersicht & Fazit',
      ratings: '5-Säulen-Wertung',
      specs: 'Technische Daten',
      trims: 'Ausstattung & Interieur',
      reliability: 'Zuverlässigkeit & Schwachstellen',
      costs: 'Unterhaltskosten',
      market: 'Markt & Preise'
    },
    comingSoonBadge: 'IN ARBEIT',
    comingSoonTitle: 'Detail-Dossier folgt in Kürze',
    comingSoonText: 'Alle 7 Detail-Tabs, Kaufberatung, Kostenrechner und Marktprognose stehen aktuell beim Toyota Auris zur Verfügung, bis das Layout finalisiert ist.',
    strengthsTitle: 'Stärken & Kompromisse',
    missionTitle: 'Einsatzprofil',
    bestRoleLabel: 'Ideal für',
    missionCity: 'Stadt & Pendeln',
    missionHighway: 'Autobahn & Reise',
    missionFamily: 'Familie & Kofferraum',
    missionFun: 'Fahrspaß',
    missionBudget: 'Budget & Langzeit',
    pillarsTitle: '5-Säulen-Übersicht',
    clickToExpandHint: 'Säule anklicken, um alle Teilwertungen anzuzeigen',
    buyerFitTitle: 'Kaufberatung — Für wen geeignet?',
    ratingsTitle: '5-Säulen-Detailwertung',
    ratingsHint: 'Teilwertung anklicken, um das vollständige Technik-Dossier zu öffnen',
    expandAll: '+ ALLE AUFKLAPPEN',
    collapseAll: '− ALLE ZUKLAPPEN',
    totalScoreTitle: 'GESAMTPUNKTE',
    totalScoreSub: 'UNGEWICHTETE 5-SÄULEN-BASIS',
    specsTitle: 'Vollständige Technische Daten',
    specsHint: 'Für technische Details über Wert oder Zeile fahren',
    secPowertrain: 'Motor & Antrieb',
    secPerfChassis: 'Fahrleistung & Fahrwerk',
    secDimSpace: 'Maße & Alltagsnutzen',
    secComfortSafety: 'Komfort, Sicherheit & Substanz',
    secEffOwnership: 'Effizienz & Unterhalt',
    trimsSectionTitle: 'EU / DE Ausstattungslinien',
    trimsSectionHint: 'Preisunterschiede beziehen sich auf vergleichbare Laufleistung und Pflegezustand',
    trimsSweetSpotBadge: 'Sweet Spot',
    trimsMatrixTitle: 'Ausstattungs-Matrix im Vergleich',
    trimsMatrixFeatureCol: 'Ausstattung / Merkmal',
    trimsLegendStd: 'Serie',
    trimsLegendOpt: 'Optional / Paket',
    trimsLegendNone: 'Nicht verfügbar',
    trimsInteriorTitle: 'Innenraumqualität & Ergonomie',
    trimsInteriorKicker: 'Cockpit & Haptik',
    trimsEngineCabinTitle: 'Cockpit-Hinweise zur gewählten Motorisierung',
    trimsFaceliftTitle: 'Modellpflege & Baujahr-Upgrades',
    trimsFaceliftKicker: 'Modellpflege',
    relStatsTitle: 'Unabhängige Zuverlässigkeits-Statistik',
    relDepthSimple: 'Kompakt',
    relDepthThorough: 'Gründlich',
    relSimpleHint: 'Wichtigstes Fazit & Pflicht-Checks beim Kauf',
    relThoroughHint: 'Erweiterte Checkliste, Schwachstellen, Reparaturkosten & 0–250.000-km-Fahrplan',
    relVerdictKicker: 'Antriebs-Haltbarkeit im Fazit',
    relBoosters: '+ Pluspunkte',
    relDrags: '− Kritikpunkte',
    relTopChecks: 'Wichtigste Prüf-Checks vor dem Kauf',
    relTopIssues: 'Häufigste bekannte Schwachstellen',
    relExtendedChecks: 'Erweiterte Kauf-Checkliste (Gründlich)',
    relRepairTitle: 'Typische Reparaturen & Verschleißteile',
    relRoadmapTitle: 'Wartungs- & Risiko-Fahrplan (0–250.000 km)',
    relRoutineTitle: 'Modellspezifische Routine-Wartung',
    relCriticalTitle: 'Bekannte Schwachstellen & teure Defekte',
    relNoneCritical: 'Keine chronischen mechanischen Schwachstellen bei diesem Motor bekannt.',
    relIfIgnored: 'Bei Ignorieren:',
    costsEstTitle: 'Geschätzte jährliche Unterhaltskosten',
    costsEstHint: 'Europäische Richtwerte auf Basis realer Verbräuche & gewählter Fahrleistung',
    costsFuelLabel: 'Kraftstoff',
    costsTaxLabel: 'Kfz-Steuer',
    costsInsLabel: 'Versicherung (ca.)',
    costsServiceLabel: 'Wartung & Service',
    costsTotalYrLabel: 'Jährlich gesamt (ca.)',
    costsPerMoLabel: 'Monatsschnitt',
    costsSavingsLabel: 'vs. Kompaktklasse-Benziner-Schnitt',
    costsSegmentLabels: {
      subcompact: 'vs. Kleinwagen-Klassenschnitt',
      hatchback: 'vs. Kompaktklasse-Benziner-Schnitt',
      'hot-hatch': 'vs. Kompaktsportler-Schnitt',
      sedan: 'vs. Mittelklasse-Schnitt',
      suv: 'vs. Kompakt-SUV-Klassenschnitt'
    },
    costsClassAvgLabel: 'Klassen-Richtwert',
    costsRatingsTitle: 'Unterhaltskosten im Detail',
    costsClickDossier: 'Karte anklicken für das vollständige Dossier',
    perYr: '/J.',
    perMo: '/Monat',
    depGraphTitle: 'Wert- & Wertverlustkurve',
    depGraphHint: 'Punkte oder Karten für Details berühren',
    marketInsightsTitle: 'Marktlage & 3–5-Jahres-Ausblick',
    marketSupplyLabel: 'Aktuelles Angebot & Nachfrage',
    marketSweetSpotLabel: 'Kauf-Sweet-Spot',
    marketOutlook35Label: 'Werterwartung (3–5 Jahre)',
    ariaScrollTrims: 'Ausstattungslinien scrollen',
    ariaScrollLeft: 'Nach links scrollen',
    ariaScrollRight: 'Nach rechts scrollen',
    ariaDetailDepth: 'Detailtiefe',
    ariaAnnualMileage: 'Jährliche Fahrleistung'
  },
  ru: {
    tabs: {
      overview: 'Обзор и вердикт',
      ratings: 'Оценка (5 категорий)',
      specs: 'Характеристики',
      trims: 'Комплектации и салон',
      reliability: 'Надёжность и болячки',
      costs: 'Расходы на содержание',
      market: 'Рынок и цены'
    },
    comingSoonBadge: 'В РАЗРАБОТКЕ',
    comingSoonTitle: 'Подробное досье скоро появится',
    comingSoonText: 'Полные 7 вкладок с характеристиками, гайдом покупателя, калькулятором расходов и прогнозом рынка сейчас доступны для Toyota Auris.',
    strengthsTitle: 'Главные плюсы и компромиссы',
    missionTitle: 'Профиль задач',
    bestRoleLabel: 'Лучшая роль',
    missionCity: 'Город и пробки',
    missionHighway: 'Трасса и круиз',
    missionFamily: 'Семья и багажник',
    missionFun: 'Драйв и рулёжка',
    missionBudget: 'Экономия и ресурс',
    pillarsTitle: 'Обзор 5 категорий',
    clickToExpandHint: 'Нажмите на категорию, чтобы открыть детали оценки',
    buyerFitTitle: 'Кому подойдёт автомобиль?',
    ratingsTitle: 'Рейтинг по 5 категориям',
    ratingsHint: 'Нажмите на любой пункт, чтобы открыть полное инженерное досье',
    expandAll: '+ РАЗВЕРНУТЬ ВСЕ',
    collapseAll: '− СВЕРНУТЬ ВСЕ',
    totalScoreTitle: 'ИТОГО БАЛЛОВ',
    totalScoreSub: 'НЕВЗВЕШЕННАЯ СУММА 5 КАТЕГОРИЙ',
    specsTitle: 'Полные технические характеристики',
    specsHint: 'Наведите на значение или строку для пояснения',
    secPowertrain: 'Двигатель и трансмиссия',
    secPerfChassis: 'Динамика и шасси',
    secDimSpace: 'Габариты и практичность',
    secComfortSafety: 'Комфорт, безопасность и кузов',
    secEffOwnership: 'Экономичность и ликвидность',
    trimsSectionTitle: 'Европейские комплектации',
    trimsSectionHint: 'Разница в цене на вторичке указана при сопоставимом пробеге и состоянии',
    trimsSweetSpotBadge: 'Sweet Spot',
    trimsMatrixTitle: 'Сводная матрица оснащения',
    trimsMatrixFeatureCol: 'Опция / оборудование',
    trimsLegendStd: 'В базе',
    trimsLegendOpt: 'Опция / пакет',
    trimsLegendNone: 'Недоступно',
    trimsInteriorTitle: 'Качество салона и эргономика',
    trimsInteriorKicker: 'Салон и эргономика',
    trimsEngineCabinTitle: 'Особенности салона для выбранного мотора',
    trimsFaceliftTitle: 'Рестайлинг и обновления по годам',
    trimsFaceliftKicker: 'Обновления',
    relStatsTitle: 'Независимая статистика надёжности',
    relDepthSimple: 'Кратко',
    relDepthThorough: 'Подробно',
    relSimpleHint: 'Главный вывод и ключевые проверки перед покупкой',
    relThoroughHint: 'Расширенный чек-лист осмотра, слабые места, цены ремонта и план 0–250 000 км',
    relVerdictKicker: 'Вердикт по ресурсу силового агрегата',
    relBoosters: '+ Что повышает оценку',
    relDrags: '− На что обратить внимание',
    relTopChecks: 'Главные проверки перед покупкой',
    relTopIssues: 'Основные известные слабые места',
    relExtendedChecks: 'Расширенный чек-лист осмотра (Подробно)',
    relRepairTitle: 'Типовые работы и известные неисправности',
    relRoadmapTitle: 'Карта обслуживания и рисков (0–250 000 км)',
    relRoutineTitle: 'Специфическое плановое ТО',
    relCriticalTitle: 'Слабые места и критичные ремонты',
    relNoneCritical: 'Хронических конструктивных проблем у этого двигателя не выявлено.',
    relIfIgnored: 'Если игнорировать:',
    costsEstTitle: 'Оценочные годовые расходы',
    costsEstHint: 'Ориентировочный европейский расчёт по реальному расходу и пробегу',
    costsFuelLabel: 'Топливо',
    costsTaxLabel: 'Налог',
    costsInsLabel: 'Страховка (ориент.)',
    costsServiceLabel: 'Плановое ТО',
    costsTotalYrLabel: 'Итого в год (ориент.)',
    costsPerMoLabel: 'В месяц',
    costsSavingsLabel: 'vs. средний бензин C-класса',
    costsSegmentLabels: {
      subcompact: 'vs. средний B-класс',
      hatchback: 'vs. средний бензин C-класса',
      'hot-hatch': 'vs. средний хот-хэтч',
      sedan: 'vs. средний D-класс',
      suv: 'vs. средний компакт-кроссовер'
    },
    costsClassAvgLabel: 'База класса',
    costsRatingsTitle: 'Оценки стоимости владения',
    costsClickDossier: 'Нажмите на карточку, чтобы открыть досье',
    perYr: '/год',
    perMo: '/мес.',
    depGraphTitle: 'Кривая стоимости и амортизации',
    depGraphHint: 'Наведите на точки или карточки для деталей',
    marketInsightsTitle: 'Рынок и прогноз цены на 3–5 лет',
    marketSupplyLabel: 'Спрос и предложение',
    marketSweetSpotLabel: 'Оптимальный выбор (Sweet Spot)',
    marketOutlook35Label: 'Прогноз стоимости через 3–5 лет',
    ariaScrollTrims: 'Прокрутка комплектаций',
    ariaScrollLeft: 'Прокрутить влево',
    ariaScrollRight: 'Прокрутить вправо',
    ariaDetailDepth: 'Уровень детализации',
    ariaAnnualMileage: 'Годовой пробег'
  }
};


const SHARED_BUYER_FIT_CARDS = {
  globalPetrolCityZones: {
    en: 'You drive in urban low-emission zones: Clean Euro 5/6 petrol status means zero diesel-ban headaches and predictable road tax.',
    de: 'Du fährst in Umweltzonen: Sauberer Euro-5/6-Benziner ohne Fahrverbots-Sorgen und mit überschaubarer Kfz-Steuer.',
    ru: 'Ты ездишь по крупным городам: Чистый бензиновый класс Euro 5/6 избавляет от дизельных ограничений и лишних налогов.'
  },
  globalSimpleNoTurbo: {
    en: 'You want simple mechanics: No turbocharger, no high-pressure diesel pump, and no costly dual-mass flywheel to fail on you.',
    de: 'Du willst simple Technik: Kein Turbolader, keine Hochdruck-Dieselpumpe und kein teures Zweimassenschwungrad, das kaputtgehen kann.',
    ru: 'Тебе нужна простая конструкция: Без турбины, дорогого ТНВД и двухмассового маховика, которым нечему ломаться.'
  },
  globalDieselShortTripRisk: {
    en: 'You only drive short city hops: DPF, EGR valve, and dual-mass flywheel suffer badly if the diesel rarely reaches full motorway temperature.',
    de: 'Du fährst meist nur Kurzstrecke in der Stadt: Partikelfilter, AGR-Ventil und Zweimassenschwungrad leiden stark, wenn der Diesel selten richtig warm wird.',
    ru: 'Ты ездишь в основном на короткие дистанции: Сажевый фильтр, клапан EGR и двухмассовый маховик быстро страдают без регулярных прогревов на трассе.'
  },
  globalDieselLongRange: {
    en: 'You cover regular motorway miles: Strong mid-range torque and low cruising consumption make long commutes effortless for you.',
    de: 'Du spulst regelmäßig Autobahn-Kilometer ab: Kräftiger Durchzug bei mittleren Drehzahlen und niedriger Verbrauch machen lange Strecken entspannt.',
    ru: 'Ты часто ездишь по трассе: Уверенная тяга в среднем диапазоне и скромный расход делают дальние поездки лёгкими.'
  },
  globalHotHatchStiff: {
    en: 'You want a soft daily commuter: Firm track-tuned suspension and low-profile tyres pass sharp bumps straight into the cabin.',
    de: 'Du suchst ein weiches Alltagsauto: Das straffe Sportfahrwerk und flache Reifen reichen Querfugen und Schlaglöcher direkt an dich weiter.',
    ru: 'Тебе нужна мягкая машина на каждый день: Жёсткая спортивная подвеска и низкопрофильные шины передают неровности прямо в салон.'
  },
  globalHotHatchRunningCosts: {
    en: 'You shop on a tight running-cost budget: Performance tyres, large brakes, and higher tax & insurance cost noticeably more than a standard hatch.',
    de: 'Du achtest streng aufs Budget: Sportreifen, große Bremsen sowie höhere Steuer & Versicherung kosten spürbar mehr als beim Standard-Kompakten.',
    ru: 'Ты строго считаешь расходы на содержание: Спортивная резина, крупные тормоза и повышенные налоги со страховкой обходятся заметно дороже обычного хэтчбека.'
  },
  globalNoTowingHotHatch: {
    en: 'You need to pull a trailer: Hot-hatch cooling and center-exit exhaust packaging leave zero approved towing capacity.',
    de: 'Du musst einen Anhänger ziehen: Kühlung und Sportauspuff-Führung lassen null kg Anhängelast zu.',
    ru: 'Тебе нужно таскать прицеп: Компоновка охлаждения и выхлопа горячего хэтча не допускает буксировку прицепа.'
  }
};


const CAR_TYPE_ORDER = ['subcompact', 'hatchback', 'hot-hatch', 'sedan', 'suv'];

