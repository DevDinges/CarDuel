// ============================================================================
// AUTO DUEL — Homepage Landing Stage & Smash Contender Catalog
// ============================================================================

const GITHUB_COMMIT_API_URL = 'https://api.github.com/repos/DevDinges/AutoDuel/commits/main';
const GITHUB_COMMITS_WEB_URL = 'https://github.com/DevDinges/AutoDuel/commits/main/';
const HOME_DEV_COMMIT_CACHE_KEY = 'autoduel_latest_commit_v2';
const HOME_DEV_COMMIT_CACHE_TTL_MS = 15 * 60 * 1000;
const HOME_DEV_DISMISSED_KEY = 'autoduel_home_dev_banner_dismissed';
const HOME_DEV_FALLBACK_DATE_ISO = '2026-11-26T12:00:00Z';

let latestRepoCommit = null;

function formatHomeDevCommitDate(dateIso) {
  if (!dateIso) return '';
  const dt = new Date(dateIso);
  if (Number.isNaN(dt.getTime())) return '';
  const locale = currentLang === 'de' ? 'de-DE' : currentLang === 'ru' ? 'ru-RU' : 'en-US';
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(dt);
  } catch {
    return dt.toISOString().slice(0, 10);
  }
}

function renderHomeDevBanner() {
  const ui = t();
  const badgeEl = document.getElementById('home-dev-badge');
  const noticeEl = document.getElementById('home-dev-notice');
  const closeBtn = document.getElementById('home-dev-close');
  const commitWrap = document.getElementById('home-dev-commit-wrap');
  const bannerEl = document.getElementById('home-dev-banner');

  if (bannerEl && ui.homeDevBadge) {
    bannerEl.setAttribute('aria-label', ui.homeDevBadge);
  }
  if (badgeEl) badgeEl.textContent = ui.homeDevBadge;
  if (noticeEl) noticeEl.textContent = ui.homeDevNotice;
  if (closeBtn) {
    closeBtn.title = ui.homeDevClose;
    closeBtn.setAttribute('aria-label', ui.homeDevClose);
  }
  if (!commitWrap) return;

  if (latestRepoCommit && latestRepoCommit.title) {
    const formattedDate = formatHomeDevCommitDate(latestRepoCommit.dateIso || HOME_DEV_FALLBACK_DATE_ISO);
    const metaLabel = formattedDate
      ? `${ui.homeDevLatestLabel} (${formattedDate}):`
      : `${ui.homeDevLatestLabel}:`;
    const safeTitle = escapeHtmlAttr(latestRepoCommit.title);
    const commitHref =
      latestRepoCommit.commitUrl && String(latestRepoCommit.commitUrl).toLowerCase().startsWith('https://github.com/')
        ? latestRepoCommit.commitUrl
        : GITHUB_COMMITS_WEB_URL;
    commitWrap.innerHTML = `
      <span class="home-dev-commit-meta">${escapeHtmlAttr(metaLabel)}</span>
      <a class="home-dev-commit-link" href="${escapeHtmlAttr(commitHref)}" target="_blank" rel="noopener noreferrer" title="${safeTitle}">
        <span class="home-dev-commit-title">&ldquo;${safeTitle}&rdquo;</span>
        <span class="home-dev-commit-arrow" aria-hidden="true">↗</span>
      </a>
    `;
  } else {
    const fallbackDate = formatHomeDevCommitDate(HOME_DEV_FALLBACK_DATE_ISO);
    const fallbackMeta = fallbackDate
      ? `${ui.homeDevLatestLabel} (${fallbackDate}):`
      : `${ui.homeDevLatestLabel}:`;
    commitWrap.innerHTML = `
      <span class="home-dev-commit-meta">${escapeHtmlAttr(fallbackMeta)}</span>
      <a class="home-dev-commit-link" href="${GITHUB_COMMITS_WEB_URL}" target="_blank" rel="noopener noreferrer">
        <span>${escapeHtmlAttr(ui.homeDevChangelog)}</span>
        <span class="home-dev-commit-arrow" aria-hidden="true">↗</span>
      </a>
    `;
  }
}

async function initHomeDevBanner() {
  const bannerEl = document.getElementById('home-dev-banner');
  const closeBtn = document.getElementById('home-dev-close');
  if (!bannerEl) return;

  try {
    if (sessionStorage.getItem(HOME_DEV_DISMISSED_KEY) === '1') {
      bannerEl.classList.add('is-dismissed');
      bannerEl.setAttribute('aria-hidden', 'true');
    }
  } catch {}

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bannerEl.classList.add('is-dismissed');
      bannerEl.setAttribute('aria-hidden', 'true');
      try {
        sessionStorage.setItem(HOME_DEV_DISMISSED_KEY, '1');
      } catch {}
    });
  }

  let cacheFresh = false;
  try {
    const rawCache = localStorage.getItem(HOME_DEV_COMMIT_CACHE_KEY);
    if (rawCache) {
      const parsed = JSON.parse(rawCache);
      if (parsed && parsed.title) {
        latestRepoCommit = {
          title: String(parsed.title),
          dateIso: parsed.dateIso ? String(parsed.dateIso) : '',
          commitUrl: parsed.commitUrl ? String(parsed.commitUrl) : ''
        };
        if (typeof parsed.fetchedAt === 'number' && Date.now() - parsed.fetchedAt < HOME_DEV_COMMIT_CACHE_TTL_MS) {
          cacheFresh = true;
        }
      }
    }
  } catch {}

  renderHomeDevBanner();
  if (cacheFresh) return;

  try {
    const res = await fetch(GITHUB_COMMIT_API_URL, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!res.ok) return;
    const data = await res.json();
    const rawMsg = data && data.commit && data.commit.message ? String(data.commit.message) : '';
    const title = rawMsg.split(/\r?\n/)[0].trim();
    const dateIso =
      (data && data.commit && data.commit.committer && data.commit.committer.date) ||
      (data && data.commit && data.commit.author && data.commit.author.date) ||
      '';
    const commitUrl = data && data.html_url ? String(data.html_url) : GITHUB_COMMITS_WEB_URL;
    if (!title) return;

    latestRepoCommit = { title, dateIso, commitUrl };
    try {
      localStorage.setItem(
        HOME_DEV_COMMIT_CACHE_KEY,
        JSON.stringify({ title, dateIso, commitUrl, fetchedAt: Date.now() })
      );
    } catch {}
    renderHomeDevBanner();
  } catch {}
}

// Render Homepage Hero Content & 5-Pillar Strip
function renderHomeLanding() {
  const ui = t();
  renderHomeDevBanner();
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


const BRAND_UPPERCASE_ACRONYMS = new Set(['BMW', 'VW', 'MG', 'BYD', 'GWM', 'GMC']);

function getCarBrand(car) {
  const raw = String((car && car.yearMake) || '')
    .replace(/^\d{4}(?:\s*[-–—]\s*\d{4})?\s+/, '')
    .trim();
  if (!raw) return '';
  return raw
    .split(/\s+/)
    .map((word) =>
      word
        .split('-')
        .map((part) => {
          const upper = part.toUpperCase();
          if (BRAND_UPPERCASE_ACRONYMS.has(upper)) return upper;
          return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        })
        .join('-')
    )
    .join(' ');
}

function getCatalogBrands() {
  const counts = new Map();
  (CAR_ROSTER || []).forEach((car) => {
    const label = getCarBrand(car);
    if (!label) return;
    const key = label.toLowerCase();
    const existing = counts.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(key, { key, label, count: 1 });
    }
  });
  return Array.from(counts.values()).sort((a, b) => a.label.localeCompare(b.label));
}

function renderBrandDropdown() {
  const ui = t();
  const brands = getCatalogBrands();
  const active = brands.find((b) => b.key === catalogBrand) || null;
  if (catalogBrand !== 'all' && !active) {
    catalogBrand = 'all';
  }
  const curEl = document.getElementById('catalog-brand-current');
  const menuEl = document.getElementById('catalog-brand-menu');
  if (curEl) curEl.textContent = active ? active.label : ui.brandAll;
  if (!menuEl) return;

  const totalCount = Array.isArray(CAR_ROSTER) ? CAR_ROSTER.length : 0;
  const options = [{ key: 'all', label: ui.brandAll, count: totalCount }].concat(brands);

  menuEl.innerHTML = options
    .map(
      (b) => `
        <button type="button" class="sort-custom-option brand-custom-option ${catalogBrand === b.key ? 'selected' : ''}" data-brand-val="${escapeHtmlAttr(b.key)}">
          <span>${escapeHtmlAttr(b.label)}</span>
          <span class="brand-option-count">${b.count}</span>
        </button>
      `
    )
    .join('');

  menuEl.querySelectorAll('[data-brand-val]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      catalogBrand = btn.getAttribute('data-brand-val') || 'all';
      const wrap = document.getElementById('catalog-brand-dropdown');
      const trig = document.getElementById('catalog-brand-trigger');
      if (wrap) wrap.classList.remove('open');
      if (trig) trig.setAttribute('aria-expanded', 'false');
      renderBrandDropdown();
      renderSmashPicker();
    });
  });
}

function syncFilterPillsScrollFades() {
  const wrap = document.getElementById('catalog-filter-pills-wrap');
  const scroller = document.getElementById('catalog-filter-pills');
  if (!wrap || !scroller) return;
  const maxScroll = scroller.scrollWidth - scroller.clientWidth;
  const hasOverflow = maxScroll > 2;
  wrap.classList.toggle('has-scroll-left', hasOverflow && scroller.scrollLeft > 2);
  wrap.classList.toggle('has-scroll-right', hasOverflow && scroller.scrollLeft < maxScroll - 2);
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

  requestAnimationFrame(syncFilterPillsScrollFades);
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

const ENGINE_BRAND_STRIP_RE = /\b(?:bmw|volvo|psa|renault|mercedes(?:-benz)?|audi|toyota|honda|ford|peugeot|citro[eë]n|mazda|kia|hyundai|vw|volkswagen|skoda|škoda|seat|opel|vauxhall|nissan|subaru|suzuki|fiat|alfa(?:\s+romeo)?|porsche|lexus|mini|mitsubishi|chrysler|chevrolet|jaguar|land\s+rover|saab|dacia)\b/gi;

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
      const subEn = e.engineSubLabel && e.engineSubLabel.en
        ? e.engineSubLabel.en.replace(ENGINE_BRAND_STRIP_RE, ' ')
        : '';
      const subCur = e.engineSubLabel && e.engineSubLabel[currentLang]
        ? e.engineSubLabel[currentLang].replace(ENGINE_BRAND_STRIP_RE, ' ')
        : '';
      const gbSearch = Array.isArray(e.gearboxes) && baseCar.sharedGearboxes
        ? e.gearboxes
            .map((g) => {
              const sg = baseCar.sharedGearboxes[g.id] || {};
              const lbl = g.label || sg.label;
              const slbl = g.shortLabel || sg.shortLabel;
              const subl = g.subLabel || sg.subLabel;
              const pickTxt = (v) => (!v ? '' : typeof v === 'string' ? v : `${v.en || ''} ${v[currentLang] || ''}`);
              return `${g.category || sg.category || ''} ${g.id || ''} ${pickTxt(lbl)} ${pickTxt(slbl)} ${pickTxt(subl)}`;
            })
            .join(' ')
        : (e.gearboxSearch || '');
      return `${e.engineBadge || ''} ${e.fullName || ''} ${e.fuelType || ''} ${fuelLabels[cat] || ''} ${e.drivetrain || ''} ${subEn} ${subCur} ${gbSearch}`;
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
  const brandWrap = document.getElementById('catalog-brand-dropdown');
  const brandTrigger = document.getElementById('catalog-brand-trigger');
  const sortWrap = document.getElementById('catalog-sort-dropdown');
  const sortTrigger = document.getElementById('catalog-sort-trigger');
  const filterPills = document.getElementById('catalog-filter-pills');

  const closeBrandMenu = () => {
    if (brandWrap) brandWrap.classList.remove('open');
    if (brandTrigger) brandTrigger.setAttribute('aria-expanded', 'false');
  };

  const closeSortMenu = () => {
    if (sortWrap) sortWrap.classList.remove('open');
    if (sortTrigger) sortTrigger.setAttribute('aria-expanded', 'false');
  };

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
      closeBrandMenu();
      closeSortMenu();
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
        closeBrandMenu();
        closeSortMenu();
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

  if (brandWrap && brandTrigger) {
    brandTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSearchHelpPopover();
      closeSortMenu();
      const willOpen = !brandWrap.classList.contains('open');
      brandWrap.classList.toggle('open', willOpen);
      brandTrigger.setAttribute('aria-expanded', String(willOpen));
    });

    document.addEventListener('click', (e) => {
      if (!brandWrap.contains(e.target)) {
        closeBrandMenu();
      }
    });
  }

  if (sortWrap && sortTrigger) {
    sortTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSearchHelpPopover();
      closeBrandMenu();
      const willOpen = !sortWrap.classList.contains('open');
      sortWrap.classList.toggle('open', willOpen);
      sortTrigger.setAttribute('aria-expanded', String(willOpen));
    });

    document.addEventListener('click', (e) => {
      if (!sortWrap.contains(e.target)) {
        closeSortMenu();
      }
    });
  }

  if (filterPills) {
    filterPills.addEventListener('scroll', syncFilterPillsScrollFades, { passive: true });
    filterPills.addEventListener(
      'wheel',
      (e) => {
        if (filterPills.scrollWidth <= filterPills.clientWidth) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          filterPills.scrollBy({ left: e.deltaY, behavior: 'auto' });
        }
      },
      { passive: false }
    );
    window.addEventListener('resize', syncFilterPillsScrollFades);
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
    const prevLeftId = selectedLeftId;
    const prevRightId = selectedRightId;
    if (slot === 'p1') {
      selectedLeftId = null;
      selectedLeftEngineId = null;
      selectedLeftGearboxId = null;
      activeRosterTarget = 'p1';
    } else if (slot === 'p2') {
      selectedRightId = null;
      selectedRightEngineId = null;
      selectedRightGearboxId = null;
      activeRosterTarget = 'p2';
    } else if (slot === 'both') {
      selectedLeftId = null;
      selectedLeftEngineId = null;
      selectedLeftGearboxId = null;
      selectedRightId = null;
      selectedRightEngineId = null;
      selectedRightGearboxId = null;
      activeRosterTarget = 'p1';
    }
    if (
      slot === 'both' ||
      (slot === 'p1' && vehicleViewCarId === prevLeftId) ||
      (slot === 'p2' && vehicleViewCarId === prevRightId)
    ) {
      vehicleViewCarId = selectedLeftId || selectedRightId || null;
      vehicleViewEngineId = selectedLeftId
        ? selectedLeftEngineId
        : (selectedRightId ? selectedRightEngineId : null);
      vehicleViewGearboxId = selectedLeftId
        ? selectedLeftGearboxId
        : (selectedRightId ? selectedRightGearboxId : null);
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

  if (catalogBrand !== 'all') {
    items = items.filter((item) => getCarBrand(item.baseCar).toLowerCase() === catalogBrand);
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
          <button type="button" class="catalog-inspect-pill" data-inspect-car="${baseCar.id}" aria-label="${escapeHtmlAttr(`${ui.inspectCardBtn}: ${getSmashGridLabel(baseCar)}`)}"><span aria-hidden="true">⤢</span> ${ui.inspectCardBtn}</button>
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

  gridEl.querySelectorAll('[data-inspect-car]').forEach((inspectBtn) => {
    inspectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVehicleView(inspectBtn.getAttribute('data-inspect-car'));
    });
  });

  gridEl.querySelectorAll('.smash-car-tile').forEach((tile) => {
    const selectTileCar = () => {
      const wasBothSelected = Boolean(selectedLeftId && selectedRightId);
      const chosenId = tile.getAttribute('data-smash-car-id');
      const baseCar = getBaseCarById(chosenId);
      ensureVehiclesLoaded([chosenId]);

      if (activeRosterTarget === 'p1') {
        selectedLeftId = chosenId;
        selectedLeftEngineId = baseCar.defaultEngineId;
        selectedLeftGearboxId = null;
        vehicleViewCarId = chosenId;
        vehicleViewEngineId = baseCar.defaultEngineId;
        vehicleViewGearboxId = null;
        if (!selectedRightId) activeRosterTarget = 'p2';
      } else {
        selectedRightId = chosenId;
        selectedRightEngineId = baseCar.defaultEngineId;
        selectedRightGearboxId = null;
        if (!vehicleViewCarId) {
          vehicleViewCarId = chosenId;
          vehicleViewEngineId = baseCar.defaultEngineId;
          vehicleViewGearboxId = null;
        }
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
      if (e.target.closest('[data-clear-slot]') || e.target.closest('[data-inspect-car]')) return;
      selectTileCar();
    });
    tile.addEventListener('keydown', (e) => {
      if (e.target.closest('[data-clear-slot]') || e.target.closest('[data-inspect-car]')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectTileCar();
      }
    });
  });
}

