// ============================================================================
// AUTO DUEL — App State, Lazy Hydration, Pure 1x Scoring & Shared Helpers
// ============================================================================

function resolveSpecEntry(val) {
  if (typeof val === 'string' && val.startsWith('@') && SPEC_TOKENS[val]) {
    return SPEC_TOKENS[val];
  }
  return val;
}

// Category 01 (Reliability & Durability) Row-Level Buyer Explanations

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
let isVehicleView = false;
let vehicleViewCarId = null;
let vehicleViewEngineId = null;
let vehicleViewGearboxId = null;
let vehicleViewAngleIdx = 1;
let vehicleViewPaintIdx = 0;
let vehicleActiveTab = null;
let vehicleExpandedPillars = new Set();
let vehicleReliabilityDepth = 'simple';
let vehicleAnnualKm = 15000;


function getCarInDepthEntry(car) {
  return (typeof CAR_INDEPTH_DATA !== 'undefined' && car && CAR_INDEPTH_DATA[car.id]) || null;
}

function parseGearboxFuelL100(fuelVal) {
  const raw = resolvePlainSpecText(fuelVal);
  if (!raw || /CNG|kWh/i.test(raw)) return null;
  const rangeM = raw.match(/(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)\s*L\s*\/\s*100/i);
  if (rangeM) return Math.round(((parseFloat(rangeM[1]) + parseFloat(rangeM[2])) / 2) * 10) / 10;
  const singleM = raw.match(/(\d+(?:\.\d+)?)\s*L\s*\/\s*100/i);
  return singleM ? parseFloat(singleM[1]) : null;
}

function getCarInDepthEngineData(car) {
  const entry = getCarInDepthEntry(car);
  if (!entry) return { entry: null, cost: null, grp: null };
  const costs = entry.engineCosts || {};
  const groups = entry.groups || {};
  const id = (car && car.selectedEngineId) || entry.defaultEngineId || '';
  const baseCost = costs[id] || costs[entry.defaultEngineId] || Object.values(costs)[0] || null;
  const gbFuel =
    car && car.selectedGearbox && car.selectedGearbox.specOverrides && car.selectedGearbox.specOverrides.realWorldFuel
      ? parseGearboxFuelL100(car.selectedGearbox.specOverrides.realWorldFuel)
      : null;
  const cost = baseCost && gbFuel !== null ? { ...baseCost, avgFuelL100: gbFuel } : baseCost;
  const grpKey = (cost && cost.group) || entry.defaultGroupKey || '';
  const grp = groups[grpKey] || groups[entry.defaultGroupKey] || Object.values(groups)[0] || null;
  return { entry, cost, grp };
}

let selectedLeftId = null;
let selectedRightId = null;
let selectedLeftEngineId = null;
let selectedRightEngineId = null;
let selectedLeftGearboxId = null;
let selectedRightGearboxId = null;
let smashPickerForceOpen = false;
let smashAlignmentTimer = null;
let smashLockInTimer = null;
let duelClashTimer = null;
let duelSettleTimer = null;
let activeRosterTarget = 'p1'; // 'p1' (left) or 'p2' (right)
let currentLang = 'en'; // 'en' | 'de' | 'ru'
let currentTheme = 'dark'; // 'dark' | 'light'
let catalogQuery = '';
let catalogBrand = 'all';
let catalogFilter = 'all';
let catalogSort = 'curated';
const expandedPillars = new Set();
let activeStatsScrollSide = 'left';

function formatPowerUnit(text) {
  const s = String(text || '');
  if (currentLang === 'de') return s.replace(/\bHP\b/g, 'PS');
  if (currentLang === 'ru') return s.replace(/\bHP\b/g, 'л.с.');
  return s;
}

function getEngineDateSpan(carId, eng) {
  if (!eng) return '';
  const sub = (eng.engineSubLabel && eng.engineSubLabel.en) || '';
  const m = sub.match(/\(((?:\d{2}\/)?\d{4}\s*[–-]\s*(?:\d{2}\/)?\d{4})\)/);
  if (m) return m[1].replace(/\s*-\s*/, '–');
  const fallback = typeof ENGINE_DATE_FALLBACKS !== 'undefined' && ENGINE_DATE_FALLBACKS[`${carId}:${eng.id}`];
  if (fallback) return fallback;
  const carObj = typeof CAR_ROSTER !== 'undefined' ? CAR_ROSTER.find((c) => c.id === carId) : null;
  const ym = carObj && carObj.yearMake ? String(carObj.yearMake).match(/\d{4}\s*[–-]\s*\d{4}|\d{4}/) : null;
  return ym ? ym[0].replace(/\s*[–-]\s*/, '–') : '';
}

function getPaintsForCar(carId) {
  return (typeof CAR_FACTORY_PAINTS !== 'undefined' && CAR_FACTORY_PAINTS[carId]) || [
    { name: 'Studio Silver Metallic', code: 'OEM-01', hex: '#aeb5be', glow: 'rgba(216, 180, 108, 0.18)' }
  ];
}

function applyAmbientPaintGlow(glowValue) {
  document.documentElement.style.setProperty('--paint-glow', glowValue || 'rgba(0, 180, 255, 0.14)');
}

function attachOrbitDrag(el, onStep) {
  if (!el) return;
  let startX = null;
  let pointerId = null;

  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    startX = e.clientX;
    pointerId = e.pointerId;
    el.classList.add('dragging');
    try { el.setPointerCapture(pointerId); } catch (_) {}
  });

  el.addEventListener('pointermove', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) >= 52) {
      onStep(dx > 0 ? -1 : 1);
      startX = e.clientX;
    }
  });

  const endDrag = () => {
    startX = null;
    if (pointerId !== null) {
      try { el.releasePointerCapture(pointerId); } catch (_) {}
      pointerId = null;
    }
    el.classList.remove('dragging');
  };

  el.addEventListener('pointerup', endDrag);
  el.addEventListener('pointercancel', endDrag);
}

// Easy-to-tweak timing constants (ms) for Selection -> Duel transition (3300ms total)

function t() {
  return UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
}


// Vehicle Data Hydration & Legacy-ID Registry
const _vehicleLoadPromises = new Map();
const _vehicleLoadFailed = new Set();

function normalizeCarId(id) {
  if (!id) return id;
  if (typeof LEGACY_CAR_ID_MAP !== 'undefined' && LEGACY_CAR_ID_MAP[id]) {
    return LEGACY_CAR_ID_MAP[id];
  }
  return id;
}

function isVehicleHydrated(id) {
  const normId = normalizeCarId(id);
  if (!normId || typeof CAR_ROSTER === 'undefined') return false;
  const entry = CAR_ROSTER.find((car) => car.id === normId);
  return Boolean(entry && entry._hydrated !== false);
}

function needsVehicleHydration(id) {
  const normId = normalizeCarId(id);
  return Boolean(normId) && !isVehicleHydrated(normId) && !_vehicleLoadFailed.has(normId);
}

window.registerAutoDuelVehicle = function registerAutoDuelVehicle(def) {
  if (!def || !def.roster || !def.roster.id) return;
  const id = def.roster.id;
  def.roster._hydrated = true;

  if (typeof CAR_ROSTER !== 'undefined') {
    const idx = CAR_ROSTER.findIndex((car) => car.id === id);
    if (idx >= 0) {
      CAR_ROSTER[idx] = def.roster;
    } else {
      CAR_ROSTER.push(def.roster);
    }
  }
  if (typeof CAR_AVAILABLE_ANGLES !== 'undefined' && def.angles) {
    CAR_AVAILABLE_ANGLES[id] = def.angles;
  }
  if (typeof CAR_MIRRORED_ANGLES !== 'undefined' && def.mirroredAngles) {
    CAR_MIRRORED_ANGLES[id] = def.mirroredAngles;
  }
  if (typeof CAR_FACTORY_PAINTS !== 'undefined' && Array.isArray(def.paints)) {
    CAR_FACTORY_PAINTS[id] = def.paints;
  }
  if (typeof ENGINE_DATE_FALLBACKS !== 'undefined' && def.engineDates) {
    Object.keys(def.engineDates).forEach((engId) => {
      ENGINE_DATE_FALLBACKS[`${id}:${engId}`] = def.engineDates[engId];
    });
  }
  if (typeof CAR_INDEPTH_DATA !== 'undefined' && def.inDepth) {
    CAR_INDEPTH_DATA[id] = def.inDepth;
  }
};

function ensureVehicleLoaded(id) {
  const normId = normalizeCarId(id);
  if (!normId || isVehicleHydrated(normId) || _vehicleLoadFailed.has(normId)) return Promise.resolve();
  if (_vehicleLoadPromises.has(normId)) return _vehicleLoadPromises.get(normId);

  const p = new Promise((resolve) => {
    const script = document.createElement('script');
    const ver = typeof CAR_DATA_VERSION !== 'undefined' ? CAR_DATA_VERSION : '1';
    script.src = `data/cars/${encodeURIComponent(normId)}.js?v=${encodeURIComponent(ver)}`;
    script.async = true;
    script.onload = () => {
      if (!isVehicleHydrated(normId)) {
        _vehicleLoadFailed.add(normId);
        _vehicleLoadPromises.delete(normId);
        console.error('Failed to hydrate vehicle:', normId);
      }
      resolve();
    };
    script.onerror = () => {
      _vehicleLoadFailed.add(normId);
      _vehicleLoadPromises.delete(normId);
      resolve();
    };
    document.head.appendChild(script);
  });

  _vehicleLoadPromises.set(normId, p);
  return p;
}

function ensureVehiclesLoaded(ids) {
  const unique = Array.from(new Set((ids || []).filter(Boolean).map((id) => normalizeCarId(id))));
  if (!unique.length) return Promise.resolve();
  return Promise.all(unique.map((id) => ensureVehicleLoaded(id)));
}

// Helper: Get raw base car entry from CAR_ROSTER
function getBaseCarById(id) {
  const normId = normalizeCarId(id);
  return CAR_ROSTER.find((car) => car.id === normId) || CAR_ROSTER[0];
}

// Helper: Resolve a car's available gearboxes for a given engine (with graceful 1-option fallback)
function getEngineGearboxes(baseCar, engineObj) {
  if (!engineObj) return [];
  const catalog = (baseCar && baseCar.sharedGearboxes) || {};
  if (Array.isArray(engineObj.gearboxes) && engineObj.gearboxes.length > 0) {
    return engineObj.gearboxes.map((entry) => {
      const baseGb = catalog[entry.id] || {};
      return {
        ...baseGb,
        ...entry,
        specOverrides: {
          ...(baseGb.specOverrides || {}),
          ...(entry.specOverrides || {})
        },
        dossierBreakdowns:
          baseGb.dossierBreakdowns || entry.dossierBreakdowns
            ? { ...(baseGb.dossierBreakdowns || {}), ...(entry.dossierBreakdowns || {}) }
            : null,
        subStatDeltas:
          baseGb.subStatDeltas || entry.subStatDeltas
            ? { ...(baseGb.subStatDeltas || {}), ...(entry.subStatDeltas || {}) }
            : null
      };
    });
  }

  const rawGb =
    (engineObj.specOverrides && engineObj.specOverrides.gearbox) ||
    (baseCar && baseCar.sharedSpecs && baseCar.sharedSpecs.gearbox);
  const rawClutch =
    (engineObj.specOverrides && engineObj.specOverrides.clutchDmf) ||
    (baseCar && baseCar.sharedSpecs && baseCar.sharedSpecs.clutchDmf);
  const resolvedGb = rawGb ? resolveSpecEntry(rawGb) : null;
  const gbEn = typeof resolvedGb === 'string' ? resolvedGb : (resolvedGb && resolvedGb.en) || '6-Speed Manual';
  const isAuto = /auto|cvt|dsg|tronic|tiptronic|steptronic|powershift/i.test(gbEn);
  const labelObj =
    resolvedGb && typeof resolvedGb === 'object'
      ? resolvedGb
      : { en: gbEn, de: gbEn, ru: gbEn };
  const resolvedClutch = rawClutch ? resolveSpecEntry(rawClutch) : null;
  const subObj =
    resolvedClutch && typeof resolvedClutch === 'object'
      ? resolvedClutch
      : resolvedClutch
        ? { en: String(resolvedClutch), de: String(resolvedClutch), ru: String(resolvedClutch) }
        : { en: '', de: '', ru: '' };

  return [
    {
      id: isAuto ? 'auto' : 'manual',
      category: isAuto ? 'automatic' : 'manual',
      label: labelObj,
      shortLabel: labelObj,
      subLabel: subObj
    }
  ];
}

// Helper: Resolve a car object merged with a specific engine and gearbox configuration
function getCarById(id, engineId, gearboxId = null) {
  const baseCar = getBaseCarById(id);
  const targetEngineId = engineId || baseCar.defaultEngineId;
  const engineObj =
    baseCar.engines.find((eng) => eng.id === targetEngineId) ||
    baseCar.engines.find((eng) => eng.id === baseCar.defaultEngineId) ||
    baseCar.engines[0];

  const gearboxes = getEngineGearboxes(baseCar, engineObj);
  const targetGbId = gearboxId || engineObj.defaultGearboxId || (gearboxes[0] && gearboxes[0].id);
  const gbObj = gearboxes.find((g) => g.id === targetGbId) || gearboxes[0] || null;

  const resolvedSpecs =
    baseCar.sharedSpecs || engineObj.specOverrides || (gbObj && gbObj.specOverrides)
      ? {
          ...(baseCar.sharedSpecs || {}),
          ...(engineObj.specOverrides || {}),
          ...(gbObj && gbObj.specOverrides ? gbObj.specOverrides : {})
        }
      : null;

  let resolvedSubStats = engineObj.subStats;
  if (gbObj && (gbObj.subStatDeltas || gbObj.dossier || gbObj.repairGuideExtra) && engineObj.subStats) {
    const cloned = { ...engineObj.subStats };
    if (gbObj.subStatDeltas) {
      Object.keys(gbObj.subStatDeltas).forEach((statKey) => {
        const prev = cloned[statKey] || {};
        const delta = gbObj.subStatDeltas[statKey] || {};
        cloned[statKey] = {
          ...prev,
          ...delta,
          badges: delta.badges ? delta.badges : prev.badges
        };
      });
    }
    if (gbObj.dossier && cloned.transmissionDriveline) {
      cloned.transmissionDriveline = {
        ...cloned.transmissionDriveline,
        dossier: gbObj.dossier
      };
    }
    if (gbObj.repairGuideExtra && cloned.maintenanceRepairCosts && cloned.maintenanceRepairCosts.repairGuide) {
      const prevGuide = cloned.maintenanceRepairCosts.repairGuide;
      const extra = gbObj.repairGuideExtra;
      cloned.maintenanceRepairCosts = {
        ...cloned.maintenanceRepairCosts,
        repairGuide: {
          ...prevGuide,
          routine: extra.routine ? [...(prevGuide.routine || []), ...extra.routine] : prevGuide.routine,
          critical: extra.critical ? [...(prevGuide.critical || []), ...extra.critical] : prevGuide.critical
        }
      };
    }
    resolvedSubStats = cloned;
  }

  let resolvedBreakdowns = baseCar.sharedDossierBreakdowns;
  if (gbObj && gbObj.dossierBreakdowns && baseCar.sharedDossierBreakdowns) {
    resolvedBreakdowns = { ...baseCar.sharedDossierBreakdowns };
    Object.keys(gbObj.dossierBreakdowns).forEach((statKey) => {
      resolvedBreakdowns[statKey] = {
        ...(resolvedBreakdowns[statKey] || {}),
        ...gbObj.dossierBreakdowns[statKey]
      };
    });
  }

  return {
    ...baseCar,
    ...engineObj,
    id: baseCar.id,
    shortTitle: baseCar.shortTitle || engineObj.shortTitle,
    fullName: baseCar.fullName || engineObj.fullName,
    selectedEngineId: engineObj.id,
    selectedGearboxId: gbObj ? gbObj.id : null,
    selectedGearbox: gbObj,
    availableGearboxes: gearboxes,
    drivetrain: (gbObj && gbObj.drivetrain) || engineObj.drivetrain || baseCar.drivetrain,
    estUsedPrice: (gbObj && gbObj.estUsedPrice) || engineObj.estUsedPrice,
    specs: resolvedSpecs,
    subStats: resolvedSubStats,
    sharedDossierBreakdowns: resolvedBreakdowns
  };
}

// Helper: Calculate aggregated 100%-weighted score (0.0 - 10.0) for a single Pillar on a car
function getPillarScore(car, pillar) {
  if (!car || !pillar || !Array.isArray(pillar.subRatings) || !pillar.subRatings.length) return 0;
  const fallbackW = 1 / pillar.subRatings.length;
  let weightedSum = 0;
  let weightTotal = 0;
  pillar.subRatings.forEach((sub) => {
    const w = typeof sub.weight === 'number' ? sub.weight : fallbackW;
    const s = (car.subStats && car.subStats[sub.key] && car.subStats[sub.key].score) || 0;
    weightedSum += s * w;
    weightTotal += w;
  });
  const avg = weightTotal > 0 ? weightedSum / weightTotal : 0;
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
    localStorage.removeItem('autoduel_pillar_weights');
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

/** Map a 0.0–10.0 numeric score to its Forza Index tier metadata. */
function getIndexTierForScore(piNum) {
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

  return { piClass, piBadgeText, piClassCss };
}

// Helper: Calculate Overall Rating & Index Class as an exact 1x weighted average of the 5 pillars (0.0 - 10.0)
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
  const clamped = Math.max(0, Math.min(10, weightedAvg));
  const piNum = Math.round(clamped * 10) / 10;
  const piScore = piNum === 10 ? '10' : piNum.toFixed(1);
  const { piClass, piBadgeText, piClassCss } = getIndexTierForScore(piNum);

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
  const isS = val >= 9.0 && val < 9.6;
  if (isSPlus) {
    barColorClass = 'fill-s-plus';
  }

  return { indicatorSymbol, squareClass, valueColorClass, barColorClass, isSPlus, isS };
}

// Build a Forza-style Stat Column HTML with Two-Level 4-Pillar Accordion
function parseEuroPrice(priceStr) {
  const digits = String(priceStr || '').replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
}

function formatEuroAmount(amount) {
  return `€${Math.round(amount).toLocaleString('en-US')}`;
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
  if (depPctNum >= 72) {
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

/** Compute shared historical and 3-year projected value curve for a car. */
function computeDepreciationCurveModel(car, m) {
  const years = String(car.yearMake || '').match(/\d{4}/g);
  const startYr = years && years.length ? Math.round((Number(years[0]) + Number(years[years.length - 1])) / 2) : 2015;
  const todayYr = 2026;
  const age = Math.max(2, todayYr - startYr);
  const msrp = Math.max(1000, m.msrp);
  const used = Math.max(500, m.used);
  const maxVal = Math.ceil((msrp * 1.08) / 5000) * 5000;

  const isBottomed = Number(m.depPct) >= 72;
  const isStrong = !isBottomed && m.retainedPctNum >= 40;

  const k = isBottomed ? 3.5 : isStrong ? 2.2 : 2.8;
  const valueAt = (tFrac) => {
    const ek = Math.exp(-k);
    const norm = (Math.exp(-k * tFrac) - ek) / (1 - ek);
    return used + (msrp - used) * norm;
  };

  const floorRatio = isBottomed ? 0.14 : isStrong ? 0.18 : 0.15;
  const floorVal = Math.min(used * 0.78, msrp * floorRatio);
  const annualRate = 1 - Math.pow(Math.max(0.15, used / msrp), 1 / age);
  const forwardAnnualRate = Math.min(0.085, Math.max(0.025, annualRate * (isBottomed ? 0.45 : isStrong ? 0.78 : 0.72)));
  const futureVal = Math.round(floorVal + (used - floorVal) * Math.pow(1 - forwardAnnualRate, 3));

  return { startYr, todayYr, age, msrp, used, maxVal, valueAt, futureVal };
}


function setPopupOpen(btn, menu, isOpen) {
  if (!btn || !menu) return;
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
  menu.classList.toggle('open', isOpen);
  menu.setAttribute('aria-hidden', String(!isOpen));
}


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

function getEngineDisplacement(eng) {
  if (!eng) return 99;
  const specEngine = eng.specOverrides && eng.specOverrides.engine;
  const specStr = typeof specEngine === 'string' ? specEngine : (specEngine && specEngine.en) || '';
  const sources = [eng.engineBadge, eng.id, eng.engineSubLabel && eng.engineSubLabel.en, specStr];
  for (const src of sources) {
    if (!src) continue;
    const m = String(src).match(/(\d+\.\d{1,2})\s*L?\b/i);
    if (m) return parseFloat(m[1]);
  }
  const wltp = String(eng.engineBadge || '').match(/\b(30|35|40)\s+(TFSI|TDI|g-tron|e-tron)/i);
  if (wltp) {
    const code = Number(wltp[1]);
    const kind = wltp[2].toLowerCase();
    if (kind === 'tdi') return code === 30 ? 1.6 : 2.0;
    if (kind === 'e-tron') return 1.4;
    if (kind === 'g-tron') return 1.5;
    return code === 30 ? 1.0 : code === 35 ? 1.5 : 2.0;
  }
  return 99;
}

function sortEnginesByDisplacement(engines) {
  return [...(engines || [])].sort((a, b) => {
    const dispDiff = getEngineDisplacement(a) - getEngineDisplacement(b);
    if (Math.abs(dispDiff) > 0.001) return dispDiff;
    const hpDiff = getEngineHp(a) - getEngineHp(b);
    if (hpDiff !== 0) return hpDiff;
    return String(a.engineBadge || '').localeCompare(String(b.engineBadge || ''));
  });
}

function formatEngineSubLabelClean(eng) {
  const raw = (eng && eng.engineSubLabel && (eng.engineSubLabel[currentLang] || eng.engineSubLabel.en)) || '';
  return raw
    .replace(/\s*\((?:\d{2}\/)?\d{4}\s*[–-]\s*(?:\d{2}\/)?\d{4}\)/g, '')
    .replace(/((?:Nm|Нм))\s+(?:Torque|Drehmoment|крутящего\s+момента|момента)\b/gi, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function getEngineTelemetryChipsHtml(candidateCar, ui) {
  const specs = (candidateCar && candidateCar.specs) || {};
  const sprint = specs.sprint0100 ? resolveLocalizedSpecVal(specs.sprint0100) : '';
  const fuel = specs.realWorldFuel ? resolveLocalizedSpecVal(specs.realWorldFuel) : '';
  const used = getPriceBreakdownMetrics(candidateCar, ui).used;
  const chips = [];
  if (sprint && sprint !== '—') chips.push(`<span class="engine-opt-chip">0–100: ${sprint}</span>`);
  if (fuel && fuel !== '—') chips.push(`<span class="engine-opt-chip">${fuel}</span>`);
  if (used > 0) chips.push(`<span class="engine-opt-chip is-price">~${formatEuroAmount(used)}</span>`);
  return chips.length ? `<div class="engine-opt-telemetry">${chips.join('')}</div>` : '';
}

function getGearboxIconSvg(category) {
  if (category === 'automatic') {
    return `
      <svg class="gearbox-icon-svg is-automatic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="6" y="4" width="6" height="16" rx="3" />
        <rect x="4" y="10" width="10" height="4" rx="1.5" fill="currentColor" />
        <line x1="2.5" y1="12" x2="4" y2="12" />
        <circle cx="18.5" cy="5.5" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="18.5" cy="9.8" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="18.5" cy="14.2" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="18.5" cy="18.5" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    `;
  }
  return `
    <svg class="gearbox-icon-svg is-manual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="6.5" x2="5" y2="17.5" />
      <line x1="12" y1="6.5" x2="12" y2="17.5" />
      <line x1="19" y1="6.5" x2="19" y2="12" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <circle cx="5" cy="5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="5" cy="19" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  `;
}

function formatGearboxCount(count) {
  const ui = t();
  if (count === 1) return ui.gearboxCountSingular || '1 gearbox';
  return (ui.gearboxCountPlural || '{n} gearboxes').replace('{n}', String(count));
}

function resolveGearboxText(val) {
  if (!val) return '';
  return typeof val === 'string' ? val : (val[currentLang] || val.en || '');
}

function buildGearboxOptionInnerHtml(defaultGearboxId, gb, candidateCar, ui) {
  const { piBadgeText, piScore, piClassCss } = calculateOverallIndex(candidateCar);
  const isDefault = Boolean(gb.isDefault || gb.id === defaultGearboxId);
  const label = resolveGearboxText(gb.label);
  const subText = resolveGearboxText(gb.subLabel);
  const starHtml = isDefault
    ? `<span class="engine-star-lime" title="${escapeHtmlAttr(ui.defaultGearboxTitle)}">★</span>`
    : '';
  const subHtml = subText ? `<div class="engine-option-sub">${subText}</div>` : '';

  return `
    <div class="engine-option-main">
      <div class="engine-option-title">
        ${getGearboxIconSvg(gb.category)}
        <span>${label}</span>
        ${starHtml}
      </div>
      ${subHtml}
    </div>
    <span class="roster-class-pill ${piClassCss} engine-option-pi">${piBadgeText} ${piScore}/10</span>
  `;
}

function buildGearboxMenuGroupsHtml(carId, engineId, gearboxes, activeGbId, defaultGbId, ui, opts = {}) {
  const optionClass = opts.optionClass || 'engine-option-btn';
  const dataAttr = opts.dataAttr || 'data-gearbox-id';
  const categories = [
    { key: 'automatic', label: ui.gearboxCategoryAutomatic },
    { key: 'manual', label: ui.gearboxCategoryManual }
  ];

  return categories
    .map((cat) => {
      const gbsInCat = (gearboxes || []).filter((gb) => (gb.category || 'manual') === cat.key);
      if (gbsInCat.length === 0) return '';

      const itemsHtml = gbsInCat
        .map((gb) => {
          const candidateCar = getCarById(carId, engineId, gb.id);
          const isSelected = gb.id === activeGbId;
          const activeClass = isSelected ? (optionClass === 'engine-custom-option' ? 'selected' : 'active') : '';
          const innerHtml = buildGearboxOptionInnerHtml(defaultGbId, gb, candidateCar, ui);
          return `
            <button type="button" class="${optionClass} ${activeClass}" ${dataAttr}="${gb.id}">
              ${innerHtml}
            </button>
          `;
        })
        .join('');

      return `
        <div class="engine-custom-group-box gb-${cat.key}">
          <div class="engine-custom-group">${cat.label}</div>
          ${itemsHtml}
        </div>
      `;
    })
    .join('');
}

function buildEngineOptionInnerHtml(baseCarId, defaultEngineId, eng, candidateCar, ui, includeTelemetry = false) {
  const { piBadgeText, piScore, piClassCss } = calculateOverallIndex(candidateCar);
  const isDefault = Boolean(eng.isDefault || eng.id === defaultEngineId);
  const dateSpan = getEngineDateSpan(baseCarId, eng);
  const dateHtml = dateSpan ? `<div class="engine-date-tag">${dateSpan}</div>` : '';
  const starHtml = isDefault
    ? `<span class="engine-star-lime" title="${escapeHtmlAttr(ui.defaultEngineTitle)}">★</span>`
    : '';
  const subText = formatEngineSubLabelClean(eng);
  const subHtml = subText ? `<div class="engine-option-sub">${subText}</div>` : '';
  const telemetryHtml = includeTelemetry ? getEngineTelemetryChipsHtml(candidateCar, ui) : '';

  return `
    <div class="engine-option-main">
      <div class="engine-option-title">
        <span>${formatPowerUnit(eng.engineBadge)}</span>
        ${starHtml}
      </div>
      ${dateHtml}
      ${subHtml}
      ${telemetryHtml}
    </div>
    <span class="roster-class-pill ${piClassCss} engine-option-pi">${piBadgeText} ${piScore}/10</span>
  `;
}

// Render Interactive Engine Selector Button & Dropdown Menu for Left or Right Car

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
  const { piClass, piClassCss } = getIndexTierForScore(piNum);

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

