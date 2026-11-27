// ============================================================================
// AUTO DUEL — Single-Car Vehicle Stage & 7-Tab In-Depth Look
// ============================================================================

// ============================================================================
// SINGLE-CAR VEHICLE STAGE (Hero-Only In-Depth Look + Same-Model Engine Duel)
// ============================================================================
function openVehicleView(carId, engineId = null, gearboxId = null) {
  const targetId = normalizeCarId(carId || vehicleViewCarId || selectedLeftId || (CAR_ROSTER[0] && CAR_ROSTER[0].id));
  const base = getBaseCarById(targetId);
  if (!base) return;
  ensureVehiclesLoaded([base.id]);

  const prevCarId = vehicleViewCarId;
  const prevEngineId = vehicleViewEngineId;
  vehicleViewCarId = base.id;
  vehicleViewEngineId = engineId || (prevCarId === base.id && vehicleViewEngineId ? vehicleViewEngineId : base.defaultEngineId);
  vehicleViewGearboxId =
    gearboxId || (prevCarId === base.id && prevEngineId === vehicleViewEngineId ? vehicleViewGearboxId : null);
  const paints = getPaintsForCar(base.id);
  const defaultPaintIdx = paints.findIndex((p) => p && p.isDefault);
  vehicleViewPaintIdx = defaultPaintIdx >= 0 ? defaultPaintIdx : 0;

  const gallery = getCarGallery(getCarById(base.id, vehicleViewEngineId, vehicleViewGearboxId));
  const fsIdx = gallery.findIndex((g) => g.src === base.image);
  vehicleViewAngleIdx = fsIdx >= 0 ? fsIdx : 0;

  cancelDuelTransition();
  closeAllMenusAndModals(true);
  const wasInVehicleView = isVehicleView;
  if (!wasInVehicleView) {
    vehicleActiveTab = null;
  }
  isHomeView = false;
  isVehicleView = true;
  smashPickerForceOpen = false;

  const vehicleStage = document.getElementById('vehicle-stage');
  if (vehicleStage) vehicleStage.scrollTop = 0;
  updateArena();
}

function buildVehicleEngineDropdownHtml(baseCar, selectedEngineId) {
  const ui = t();
  const activeEng =
    (baseCar.engines || []).find((e) => e.id === selectedEngineId) ||
    (baseCar.engines || []).find((e) => e.id === baseCar.defaultEngineId) ||
    (baseCar.engines || [])[0];
  const activeCat = getEngineCategory(activeEng);
  const catLabels = {
    hybrid: ui.engineCategoryHybrid,
    petrol: ui.engineCategoryPetrol,
    diesel: ui.engineCategoryDiesel
  };
  const isDef = activeEng.id === baseCar.defaultEngineId;

  const groups = { hybrid: [], petrol: [], diesel: [] };
  (baseCar.engines || []).forEach((eng) => {
    const c = getEngineCategory(eng);
    if (!groups[c]) groups[c] = [];
    groups[c].push(eng);
  });

  const menuHtml = ['hybrid', 'petrol', 'diesel']
    .filter((cat) => groups[cat] && groups[cat].length)
    .map((cat) => {
      const opts = sortEnginesByDisplacement(groups[cat])
        .map((eng) => {
          const isSel = eng.id === activeEng.id;
          const candidateCar = getCarById(baseCar.id, eng.id);
          const innerHtml = buildEngineOptionInnerHtml(
            baseCar.id,
            baseCar.defaultEngineId,
            eng,
            candidateCar,
            ui,
            true
          );
          return `
            <button type="button" class="engine-custom-option ${isSel ? 'selected' : ''}" data-eng-opt="${eng.id}">
              ${innerHtml}
            </button>
          `;
        })
        .join('');
      return `<div class="engine-custom-group-box fuel-${cat}"><div class="engine-custom-group">${catLabels[cat]}</div>${opts}</div>`;
    })
    .join('');

  const activeDate = getEngineDateSpan(baseCar.id, activeEng);
  return `
    <div class="engine-custom-wrap" id="vehicle-engine-dropdown">
      <button type="button" class="engine-custom-trigger" id="vehicle-engine-trigger" aria-expanded="false">
        <span class="engine-trigger-main">
          <span class="engine-fuel-tag fuel-${activeCat}">${catLabels[activeCat] || activeCat}</span>
          <span class="engine-trigger-label">${formatPowerUnit(activeEng.engineBadge)}${activeDate ? `<span class="engine-date-tag">${activeDate}</span>` : ''}</span>
          ${isDef ? `<span class="engine-star-lime" title="${escapeHtmlAttr(ui.defaultEngineTitle)}">★</span>` : ''}
        </span>
        <span class="engine-chevron">▾</span>
      </button>
      <div class="engine-custom-menu" role="listbox">${menuHtml}</div>
    </div>
  `;
}

function buildVehicleGearboxDropdownHtml(baseCar, resolvedCar, selectedGearboxId) {
  const ui = t();
  const gearboxes = resolvedCar.availableGearboxes || [];
  const activeGb =
    gearboxes.find((g) => g.id === selectedGearboxId) ||
    resolvedCar.selectedGearbox ||
    gearboxes[0];
  if (!activeGb) return '';

  const defaultGbId = resolvedCar.defaultGearboxId || (gearboxes[0] && gearboxes[0].id);
  const isDef = Boolean(activeGb.isDefault || activeGb.id === defaultGbId);
  const menuHtml = buildGearboxMenuGroupsHtml(
    baseCar.id,
    resolvedCar.selectedEngineId,
    gearboxes,
    activeGb.id,
    defaultGbId,
    ui,
    { optionClass: 'engine-custom-option', dataAttr: 'data-gb-opt' }
  );

  return `
    <div class="engine-custom-wrap" id="vehicle-gearbox-dropdown">
      <button type="button" class="engine-custom-trigger" id="vehicle-gearbox-trigger" aria-expanded="false">
        <span class="engine-trigger-main">
          ${getGearboxIconSvg(activeGb.category)}
          <span class="engine-trigger-label">${resolveGearboxText(activeGb.label)}</span>
          ${isDef ? `<span class="engine-star-lime" title="${escapeHtmlAttr(ui.defaultGearboxTitle)}">★</span>` : ''}
        </span>
        <span class="engine-chevron">▾</span>
      </button>
      <div class="engine-custom-menu" role="listbox">${menuHtml}</div>
    </div>
  `;
}

function updateVehicleAngleOnly(carRef = null, galleryRef = null) {
  const car = carRef || (vehicleViewCarId ? getCarById(vehicleViewCarId, vehicleViewEngineId, vehicleViewGearboxId) : null);
  if (!car) return;
  const gallery = galleryRef || getCarGallery(car);
  const slide = gallery[vehicleViewAngleIdx] || gallery[0];
  const img = document.getElementById('vehicle-turntable-img');
  if (img && slide) {
    img.src = slide.src;
    img.alt = `${car.fullName} — ${slide.label}`;
    img.classList.toggle('mirrored-car', Boolean(slide.mirrored));
  }
  document.querySelectorAll('#vehicle-angles-bar [data-angle-idx]').forEach((b) => {
    b.classList.toggle('active', Number(b.getAttribute('data-angle-idx')) === vehicleViewAngleIdx);
  });
}

function stepVehicleAngle(delta) {
  if (!isVehicleView || !vehicleViewCarId) return;
  const car = getCarById(vehicleViewCarId, vehicleViewEngineId, vehicleViewGearboxId);
  const gallery = getCarGallery(car);
  if (!gallery.length) return;
  vehicleViewAngleIdx = (vehicleViewAngleIdx + delta + gallery.length) % gallery.length;
  updateVehicleAngleOnly(car, gallery);
}

function openEnginePickerModal(carId, currentEngineId, currentGearboxId = null) {
  const ui = t();
  const baseCar = getBaseCarById(carId);
  if (baseCar && needsVehicleHydration(baseCar.id)) {
    ensureVehiclesLoaded([baseCar.id]).then(() => openEnginePickerModal(baseCar.id, currentEngineId, currentGearboxId));
    return;
  }
  const kickerEl = document.getElementById('engine-picker-kicker');
  const titleEl = document.getElementById('engine-picker-title');
  if (kickerEl) kickerEl.textContent = ui.enginePickerKicker;
  if (titleEl) titleEl.textContent = `${getSmashGridLabel(baseCar)} — ${ui.enginePickerTitle}`;

  const groups = { hybrid: [], petrol: [], diesel: [] };
  (baseCar.engines || []).forEach((eng) => {
    const cat = getEngineCategory(eng);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(eng);
  });

  const catLabels = {
    hybrid: ui.engineCategoryHybrid,
    petrol: ui.engineCategoryPetrol,
    diesel: ui.engineCategoryDiesel
  };

  const listEl = document.getElementById('engine-picker-list');
  if (!listEl) return;
  listEl.innerHTML = ['hybrid', 'petrol', 'diesel']
    .filter((cat) => groups[cat] && groups[cat].length)
    .map((cat) => {
      const rows = sortEnginesByDisplacement(groups[cat])
        .map((eng) => {
          const resolved = getCarById(carId, eng.id);
          const idx = calculateOverallIndex(resolved);
          const isCur = eng.id === currentEngineId;
          const dateSpan = getEngineDateSpan(carId, eng);
          const dateHtml = dateSpan ? `<span class="engine-date-tag">${dateSpan}</span>` : '';
          const sub = formatEngineSubLabelClean(eng);
          return `
            <button type="button" class="engine-picker-row ${isCur ? 'is-current' : ''}" data-pick-engine="${eng.id}">
              <div>
                <div class="engine-picker-name">${formatPowerUnit(eng.engineBadge)}${dateHtml} ${isCur ? `<span class="mini-p-badge p1-badge" style="margin-left:6px;">${ui.currentEngineTag}</span>` : ''}</div>
                <div class="engine-picker-sub">${sub ? `${sub} · ` : ''}${resolved.estUsedPrice}</div>
              </div>
              ${buildForzaIndexBlock(idx, true)}
            </button>
          `;
        })
        .join('');
      return `<div class="engine-picker-group-label fuel-${cat}">${catLabels[cat]}</div>${rows}`;
    })
    .join('');

  listEl.querySelectorAll('[data-pick-engine]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pickedEngId = btn.getAttribute('data-pick-engine');
      if (!pickedEngId || pickedEngId === currentEngineId) return;
      closeEnginePickerModal(true);
      selectedLeftId = carId;
      selectedLeftEngineId = currentEngineId;
      selectedLeftGearboxId = currentGearboxId;
      selectedRightId = carId;
      selectedRightEngineId = pickedEngId;
      selectedRightGearboxId = null;
      isHomeView = false;
      isVehicleView = false;
      smashPickerForceOpen = false;
      runDuelEntranceSequence({ fromSmashPicker: false });
    });
  });

  const modal = document.getElementById('engine-picker-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    pushModalHistory('engine-picker');
  }
}

function closeEnginePickerModal(skipHistory = false) {
  const modal = document.getElementById('engine-picker-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  popModalHistory('engine-picker', skipHistory);
}

function renderVehicleView() {
  const ui = t();
  const targetId = vehicleViewCarId || selectedLeftId || (CAR_ROSTER[0] && CAR_ROSTER[0].id);
  const baseCar = getBaseCarById(targetId);
  if (!baseCar) return;
  vehicleViewCarId = baseCar.id;
  if (!vehicleViewEngineId || !(baseCar.engines || []).some((e) => e.id === vehicleViewEngineId)) {
    vehicleViewEngineId = baseCar.defaultEngineId;
    vehicleViewGearboxId = null;
  }

  const car = getCarById(baseCar.id, vehicleViewEngineId, vehicleViewGearboxId);
  vehicleViewGearboxId = car.selectedGearboxId;
  const idx = calculateOverallIndex(car);
  const gallery = getCarGallery(car);
  const paints = getPaintsForCar(car.id);

  if (vehicleViewAngleIdx >= gallery.length) vehicleViewAngleIdx = 0;
  if (vehicleViewPaintIdx >= paints.length) vehicleViewPaintIdx = 0;

  const activeSlide = gallery[vehicleViewAngleIdx] || gallery[0];
  const activePaint = paints[vehicleViewPaintIdx] || paints[0];
  applyAmbientPaintGlow(activePaint.glow);

  const backLabel = document.getElementById('vehicle-back-label');
  const titleEl = document.getElementById('vehicle-indepth-title');
  if (backLabel) backLabel.textContent = ui.backToCatalog;
  if (titleEl) titleEl.textContent = ui.inDepthTitle;

  const switcher = document.getElementById('vehicle-quick-switcher');
  if (switcher) {
    const sortedRoster = CAR_ROSTER.slice().sort((a, b) => (a.gridOrder ?? Number(a.number)) - (b.gridOrder ?? Number(b.number)));
    switcher.innerHTML = `
      <div class="sort-custom-wrap vehicle-jump-wrap" id="vehicle-car-jump-wrap">
        <button type="button" class="sort-custom-trigger" id="vehicle-car-jump-trigger" aria-expanded="false">
          <span>#${baseCar.number} ${getSmashGridLabel(baseCar)}</span>
          <span class="sort-chevron">▾</span>
        </button>
        <div class="sort-custom-menu vehicle-jump-menu" role="listbox">
          ${sortedRoster
            .map(
              (c) =>
                `<button type="button" class="sort-custom-option ${c.id === car.id ? 'selected' : ''}" data-jump-car="${c.id}">#${c.number} ${getSmashGridLabel(c)}</button>`
            )
            .join('')}
        </div>
      </div>
    `;

    const jumpWrap = document.getElementById('vehicle-car-jump-wrap');
    const jumpTrig = document.getElementById('vehicle-car-jump-trigger');
    if (jumpWrap && jumpTrig) {
      jumpTrig.addEventListener('click', (e) => {
        e.stopPropagation();
        const engWrap = document.getElementById('vehicle-engine-dropdown');
        const engTrig = document.getElementById('vehicle-engine-trigger');
        if (engWrap) engWrap.classList.remove('open');
        if (engTrig) engTrig.setAttribute('aria-expanded', 'false');
        const gbWrap = document.getElementById('vehicle-gearbox-dropdown');
        const gbTrig = document.getElementById('vehicle-gearbox-trigger');
        if (gbWrap) gbWrap.classList.remove('open');
        if (gbTrig) gbTrig.setAttribute('aria-expanded', 'false');
        const open = jumpWrap.classList.toggle('open');
        jumpTrig.setAttribute('aria-expanded', String(open));
      });
      jumpWrap.querySelectorAll('[data-jump-car]').forEach((opt) => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          openVehicleView(opt.getAttribute('data-jump-car'));
        });
      });
    }
  }

  const hero = document.getElementById('vehicle-hero');
  if (!hero) return;
  const perkText = car.perkLabel ? (car.perkLabel[currentLang] || car.perkLabel.en) : '';

  hero.innerHTML = `
    <div class="vehicle-turntable-card">
      <div class="vehicle-turntable-stage" id="vehicle-turntable-stage">
        <img id="vehicle-turntable-img" src="${activeSlide.src}" alt="${escapeHtmlAttr(`${car.fullName} — ${activeSlide.label}`)}" class="${activeSlide.mirrored ? 'mirrored-car' : ''}" draggable="false" />
        <div class="vehicle-turntable-overlay-top">
          <span class="vehicle-orbit-badge">⟳ ${ui.orbitBadge}</span>
          <button type="button" class="vehicle-fullscreen-btn" id="vehicle-fullscreen-btn">⤢ ${ui.fullscreenBtn}</button>
        </div>
      </div>
      <div class="vehicle-turntable-footer">
        <div class="vehicle-angles-bar" id="vehicle-angles-bar">
          ${gallery
            .map(
              (g, i) =>
                `<button type="button" class="vehicle-angle-pill ${i === vehicleViewAngleIdx ? 'active' : ''}" data-angle-idx="${i}">${g.label}</button>`
            )
            .join('')}
        </div>
        <span class="vehicle-drag-hint">${ui.orbitHint}</span>
      </div>
    </div>

    <aside class="vehicle-telemetry-rail">
      <div class="vehicle-rail-watermark-clip" aria-hidden="true">
        <span class="vehicle-rail-watermark">#${baseCar.number}</span>
      </div>
      <div class="vehicle-rail-head">
        <div class="vehicle-rail-identity">
          <span class="vehicle-rail-kicker">${car.yearMake}</span>
          <h1 class="vehicle-rail-title">${car.shortTitle}</h1>
          <div class="vehicle-rail-tags">
            <span class="vehicle-rail-tag">${getCarTypeLabel(getCarType(baseCar))}</span>
            <span class="vehicle-rail-tag">${car.drivetrain}</span>
            ${perkText ? `<span class="vehicle-rail-tag">${perkText}</span>` : ''}
          </div>
        </div>
        ${buildForzaIndexBlock(idx, false)}
      </div>

      <div class="vehicle-engine-block">
        <div class="engine-config-header">
          <span class="engine-config-title">${ui.engineLabel}</span>
          <span class="engine-config-count">${formatEngineCount((baseCar.engines || []).length)}</span>
        </div>
        ${buildVehicleEngineDropdownHtml(baseCar, car.selectedEngineId)}
      </div>

      <div class="vehicle-engine-block vehicle-gearbox-block">
        <div class="engine-config-header">
          <span class="engine-config-title">${ui.gearboxLabel}</span>
          <span class="engine-config-count">${formatGearboxCount((car.availableGearboxes || []).length)}</span>
        </div>
        ${buildVehicleGearboxDropdownHtml(baseCar, car, car.selectedGearboxId)}
      </div>

      <div class="vehicle-paint-block">
        <div class="vehicle-rail-section-label">
          <span>${ui.paintLabel}</span>
          <span class="paint-code-tag" id="vehicle-paint-code">${ui.paintOemCode}: ${activePaint.code}</span>
        </div>
        <div class="paint-slider-shell">
          ${paints.length > 6 ? `<button type="button" class="paint-slider-btn" data-paint-scroll="-1" aria-label="${escapeHtmlAttr(ui.ariaScrollPaintsLeft)}">‹</button>` : ''}
          <div class="paint-swatches-row" id="vehicle-paint-swatches">
            ${paints
              .map(
                (p, i) =>
                  `<button type="button" class="paint-swatch-btn ${i === vehicleViewPaintIdx ? 'active' : ''}" data-paint-idx="${i}" title="${escapeHtmlAttr(`${p.name} (${p.code})`)}" aria-label="${escapeHtmlAttr(p.name)}"><span style="background:${p.hex}"></span></button>`
              )
              .join('')}
          </div>
          ${paints.length > 6 ? `<button type="button" class="paint-slider-btn" data-paint-scroll="1" aria-label="${escapeHtmlAttr(ui.ariaScrollPaintsRight)}">›</button>` : ''}
        </div>
        <div class="paint-active-meta">
          <span id="vehicle-paint-name">${activePaint.name}</span>
          <span class="paint-count-pill" id="vehicle-paint-count">${vehicleViewPaintIdx + 1}/${paints.length}</span>
        </div>
      </div>

      <div class="vehicle-rail-price-grid">
        <div>
          <span class="rail-price-label">${ui.estUsedMarket}</span>
          <span class="rail-price-value highlight">${car.estUsedPrice}</span>
        </div>
        <div>
          <span class="rail-price-label">${ui.originalMsrp}</span>
          <span class="rail-price-value">${car.originalMsrp ? (car.originalMsrp[currentLang] || car.originalMsrp.en) : '—'}</span>
        </div>
      </div>

      <div class="vehicle-rail-cta-stack">
        <button type="button" class="vehicle-btn-contender" id="vehicle-compare-cta">${ui.compareCta}</button>
        ${(baseCar.engines || []).length > 1 ? `<button type="button" class="vehicle-btn-engines" id="vehicle-compare-engines-cta">${ui.compareEnginesBtn}</button>` : ''}
      </div>
    </aside>
  `;

  attachOrbitDrag(document.getElementById('vehicle-turntable-stage'), (delta) => {
    stepVehicleAngle(delta);
  });

  document.querySelectorAll('#vehicle-angles-bar [data-angle-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      vehicleViewAngleIdx = Number(btn.getAttribute('data-angle-idx'));
      updateVehicleAngleOnly(car, gallery);
    });
  });

  const fullBtn = document.getElementById('vehicle-fullscreen-btn');
  if (fullBtn) {
    fullBtn.addEventListener('click', () => {
      openCarLightbox('vehicle', car, vehicleViewAngleIdx);
    });
  }

  const engWrap = document.getElementById('vehicle-engine-dropdown');
  const engTrigger = document.getElementById('vehicle-engine-trigger');
  if (engWrap && engTrigger) {
    engTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const jumpWrap = document.getElementById('vehicle-car-jump-wrap');
      const jumpTrig = document.getElementById('vehicle-car-jump-trigger');
      if (jumpWrap) jumpWrap.classList.remove('open');
      if (jumpTrig) jumpTrig.setAttribute('aria-expanded', 'false');
      const gbWrap = document.getElementById('vehicle-gearbox-dropdown');
      const gbTrig = document.getElementById('vehicle-gearbox-trigger');
      if (gbWrap) gbWrap.classList.remove('open');
      if (gbTrig) gbTrig.setAttribute('aria-expanded', 'false');
      const open = engWrap.classList.toggle('open');
      engTrigger.setAttribute('aria-expanded', String(open));
    });
    engWrap.querySelectorAll('[data-eng-opt]').forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        vehicleViewEngineId = opt.getAttribute('data-eng-opt');
        vehicleViewGearboxId = null;
        renderVehicleView();
      });
    });
  }

  const gbWrap = document.getElementById('vehicle-gearbox-dropdown');
  const gbTrigger = document.getElementById('vehicle-gearbox-trigger');
  if (gbWrap && gbTrigger) {
    gbTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const jumpWrap = document.getElementById('vehicle-car-jump-wrap');
      const jumpTrig = document.getElementById('vehicle-car-jump-trigger');
      if (jumpWrap) jumpWrap.classList.remove('open');
      if (jumpTrig) jumpTrig.setAttribute('aria-expanded', 'false');
      if (engWrap) engWrap.classList.remove('open');
      if (engTrigger) engTrigger.setAttribute('aria-expanded', 'false');
      const open = gbWrap.classList.toggle('open');
      gbTrigger.setAttribute('aria-expanded', String(open));
    });
    gbWrap.querySelectorAll('[data-gb-opt]').forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        vehicleViewGearboxId = opt.getAttribute('data-gb-opt');
        renderVehicleView();
      });
    });
  }

  const paintTrack = document.getElementById('vehicle-paint-swatches');
  const paintPrevBtn = document.querySelector('[data-paint-scroll="-1"]');
  const paintNextBtn = document.querySelector('[data-paint-scroll="1"]');
  const syncPaintScrollBtns = () => {
    if (!paintTrack) return;
    if (paintPrevBtn) paintPrevBtn.disabled = paintTrack.scrollLeft <= 2;
    if (paintNextBtn) paintNextBtn.disabled = paintTrack.scrollLeft + paintTrack.clientWidth >= paintTrack.scrollWidth - 2;
  };
  if (paintTrack && (paintPrevBtn || paintNextBtn)) {
    document.querySelectorAll('[data-paint-scroll]').forEach((sbtn) => {
      sbtn.addEventListener('click', () => {
        const dir = Number(sbtn.getAttribute('data-paint-scroll')) || 1;
        paintTrack.scrollBy({ left: dir * 160, behavior: 'smooth' });
      });
    });
    paintTrack.addEventListener('scroll', syncPaintScrollBtns, { passive: true });
    requestAnimationFrame(syncPaintScrollBtns);
  }
  if (paintTrack) {
    const activeSwatch = paintTrack.querySelector(`[data-paint-idx="${vehicleViewPaintIdx}"]`);
    if (activeSwatch) {
      requestAnimationFrame(() => {
        activeSwatch.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
        syncPaintScrollBtns();
      });
    }
  }

  document.querySelectorAll('#vehicle-paint-swatches [data-paint-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextIdx = Number(btn.getAttribute('data-paint-idx'));
      const chosen = paints[nextIdx] || paints[0];
      if (!chosen) return;
      vehicleViewPaintIdx = nextIdx;
      document.querySelectorAll('#vehicle-paint-swatches [data-paint-idx]').forEach((b) => {
        b.classList.toggle('active', Number(b.getAttribute('data-paint-idx')) === nextIdx);
      });
      const codeEl = document.getElementById('vehicle-paint-code');
      const nameEl = document.getElementById('vehicle-paint-name');
      const countEl = document.getElementById('vehicle-paint-count');
      if (codeEl) codeEl.textContent = `${ui.paintOemCode}: ${chosen.code}`;
      if (nameEl) nameEl.textContent = chosen.name;
      if (countEl) countEl.textContent = `${nextIdx + 1}/${paints.length}`;
      applyAmbientPaintGlow(chosen.glow);
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    });
  });

  const compareBtn = document.getElementById('vehicle-compare-cta');
  if (compareBtn) {
    compareBtn.addEventListener('click', () => {
      cancelDuelTransition();
      closeAllMenusAndModals(true);
      selectedLeftId = car.id;
      selectedLeftEngineId = car.selectedEngineId;
      selectedLeftGearboxId = car.selectedGearboxId;
      selectedRightId = null;
      selectedRightEngineId = null;
      selectedRightGearboxId = null;
      activeRosterTarget = 'p2';
      isHomeView = false;
      isVehicleView = false;
      smashPickerForceOpen = true;
      const smashStage = document.getElementById('smash-picker-stage');
      if (smashStage) smashStage.scrollTop = 0;
      updateArena();
    });
  }

  const cmpEngBtn = document.getElementById('vehicle-compare-engines-cta');
  if (cmpEngBtn) {
    cmpEngBtn.addEventListener('click', () => {
      openEnginePickerModal(car.id, car.selectedEngineId, car.selectedGearboxId);
    });
  }

  renderVehicleInDepthTabs(car);
}

function buildVehiclePipBar(score, { variant = 'lime', compact = false } = {}) {
  const s = Math.max(0, Math.min(10, Number(score) || 0));
  const segClass =
    variant === 'win'
      ? 'is-win'
      : variant === 'c1'
        ? 'is-c1'
        : variant === 'warn'
          ? 'is-warn'
          : variant === 'tier'
            ? 'is-tier'
            : 'is-lime';
  const pips = Array.from({ length: 10 }, (_, idx) => {
    const pct = Math.round(Math.max(0, Math.min(1, s - idx)) * 100);
    return `<span class="v-pip"><span class="v-pip-fill ${segClass}" style="width:${pct}%"></span></span>`;
  }).join('');
  return `<div class="v-pip-bar ${compact ? 'compact' : ''}">${pips}</div>`;
}

function computeVehicleMissionProfile(car, vt) {
  const sub = (k) => (car.subStats && car.subStats[k] ? Number(car.subStats[k].score) : 7.0);
  const clamp = (v) => Math.max(1.0, Math.min(9.9, Math.round(v * 10) / 10));
  const fuel = getEngineCategory(car);
  const cityAdj = fuel === 'diesel' ? -1.6 : fuel === 'hybrid' ? 0.45 : 0;
  const hwyAdj = fuel === 'diesel' ? 0.45 : fuel === 'hybrid' ? -0.15 : 0;

  const roles = [
    { key: 'city', label: vt.missionCity, score: clamp(sub('visibilityManeuverability') * 0.45 + sub('efficiencyFuel') * 0.35 + sub('rideNoiseComfort') * 0.2 + cityAdj) },
    { key: 'highway', label: vt.missionHighway, score: clamp(sub('rideNoiseComfort') * 0.4 + sub('midRangeTorquePassing') * 0.35 + sub('safetyProtection') * 0.25 + hwyAdj) },
    { key: 'family', label: vt.missionFamily, score: clamp(sub('interiorBootSpace') * 0.4 + sub('passengerSpaceErgonomics') * 0.35 + sub('payloadTowing') * 0.25) },
    { key: 'fun', label: vt.missionFun, score: clamp(sub('handlingAgility') * 0.4 + sub('accelerationOvertaking') * 0.35 + sub('brakingPerformance') * 0.25) },
    { key: 'budget', label: vt.missionBudget, score: clamp(sub('powertrainDurability') * 0.35 + sub('maintenanceRepairCosts') * 0.35 + sub('depreciationResale') * 0.3) }
  ];
  const best = roles.reduce((a, b) => (b.score > a.score ? b : a), roles[0]);
  return { roles, best };
}

function getScoreTierMeta(score, includeTierLetter = false) {
  const val = Number(score || 0);
  const numStr = val.toFixed(1);
  if (val >= 9.6) {
    return {
      cls: 'score-s-plus',
      text: includeTierLetter ? `✦ S+ · ${numStr}` : `✦ ${numStr}`
    };
  }
  if (val >= 9.0) {
    return {
      cls: 'score-s',
      text: includeTierLetter ? `✦ S · ${numStr}` : `✦ ${numStr}`
    };
  }
  return { cls: '', text: numStr };
}

function buildVehicleTabOverviewHtml(car, vt) {
  const ui = t();
  const bf = getBuyerFit(car);
  const { roles, best } = computeVehicleMissionProfile(car, vt);

  const missionHtml = `
    <div class="v-mission-box">
      <div class="v-mission-head">
        <h3>${vt.missionTitle}</h3>
        <span class="v-mission-role-pill">${vt.bestRoleLabel}: ${best.label}</span>
      </div>
      ${bf && bf.summary ? `<p class="v-mission-verdict">${bf.summary}</p>` : ''}
      <div class="v-mission-bars">
        ${roles
          .map(
            (r) => `
          <div class="v-mission-row">
            <span class="v-mission-label">${r.label}</span>
            ${buildVehiclePipBar(r.score, { variant: r.key === best.key ? 'win' : 'c1', compact: true })}
            <span class="v-mission-val">${r.score.toFixed(1)}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  const renderFitCards = (items, kind) =>
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

  const buyerFitHtml = bf
    ? `
      <div class="v-overview-buyerfit">
        <h3 class="v-sub-heading">${vt.buyerFitTitle}</h3>
        <div class="buyer-fit-columns">
          <div class="buyer-fit-col is-ideal">
            <div class="buyer-fit-col-header">
              <div class="buyer-fit-col-title-wrap">
                <span class="buyer-fit-col-dot" aria-hidden="true"></span>
                <span class="buyer-fit-col-title">${ui.buyerFitIdealTitle}</span>
              </div>
              <span class="buyer-fit-col-count">${(bf.idealFor || []).length}</span>
            </div>
            <div class="buyer-fit-items-list">${renderFitCards(bf.idealFor || [], 'ideal')}</div>
          </div>
          <div class="buyer-fit-col is-skip">
            <div class="buyer-fit-col-header">
              <div class="buyer-fit-col-title-wrap">
                <span class="buyer-fit-col-dot" aria-hidden="true"></span>
                <span class="buyer-fit-col-title">${ui.buyerFitNotIdealTitle}</span>
              </div>
              <span class="buyer-fit-col-count">${(bf.notIdealFor || []).length}</span>
            </div>
            <div class="buyer-fit-items-list">${renderFitCards(bf.notIdealFor || [], 'skip')}</div>
          </div>
        </div>
      </div>
    `
    : '';

  const pillarsHtml = STAT_PILLARS.map((p) => {
    const score = getPillarScore(car, p);
    const pNum = String(p.number).padStart(2, '0');
    const sMeta = getScoreTierMeta(score, true);
    return `
      <button type="button" class="v-pillar-bar-item" data-v-jump-pillar="${p.id}">
        <div class="v-pillar-bar-head">
          <span class="v-pillar-bar-name">
            <span class="pillar-icon-plain">${PILLAR_ICONS[p.id] || ''}</span>
            <span class="v-pillar-num">${pNum} //</span>
            <span>${p.label[currentLang] || p.label.en}</span>
          </span>
          <span class="v-pillar-bar-score ${sMeta.cls}">${sMeta.text}</span>
        </div>
        ${buildVehiclePipBar(score, { variant: 'lime' })}
      </button>
    `;
  }).join('');

  return `
    <div class="v-overview-grid">
      <div class="v-ed-card">
        ${missionHtml}
        ${buyerFitHtml}
      </div>
      <div class="v-ed-card v-overview-pillars-card">
        <h3>${vt.pillarsTitle}</h3>
        <p class="v-card-hint">${vt.clickToExpandHint}</p>
        <div class="v-pillar-overview-list">${pillarsHtml}</div>
      </div>
    </div>
  `;
}

function buildVehicleTabRatingsHtml(car, vt) {
  const ui = t();
  const allExpanded = vehicleExpandedPillars.size === STAT_PILLARS.length;
  const totalScore = getCarTotalPillarScore(car);
  const totalAvg = totalScore / STAT_PILLARS.length;
  const idx = calculateOverallIndex(car);

  const pillarsHtml = STAT_PILLARS.map((pillar) => {
    const pScore = getPillarScore(car, pillar);
    const pNum = String(pillar.number).padStart(2, '0');
    const isExpanded = vehicleExpandedPillars.has(pillar.id);
    const barVar = pScore >= 8.5 ? 'win' : pScore < 7.0 ? 'warn' : 'c1';
    const tagsHtml = (pillar.subtitle[currentLang] || pillar.subtitle.en)
      .split(/\s*[,&•]\s*/)
      .filter(Boolean)
      .map((tag) => `<span class="pillar-sub-tag">${tag.trim()}</span>`)
      .join('');

    const subsHtml = pillar.subRatings
      .map((sub) => {
        const subObj = (car.subStats && car.subStats[sub.key]) || { score: 0, badges: {} };
        const sVal = Number(subObj.score || 0);
        const sVar = sVal >= 8.5 ? 'win' : sVal < 7.0 ? 'warn' : 'c1';
        const badges = (subObj.badges && (subObj.badges[currentLang] || subObj.badges.en)) || [];
        const hasDossier = Boolean(getSubStatDossier(car, sub.key) || (car.specs && SUB_STAT_SPEC_ROWS[sub.key]));
        const sMeta = getScoreTierMeta(sVal, false);
        const weightPct = Math.round((typeof sub.weight === 'number' ? sub.weight : 1 / pillar.subRatings.length) * 100);
        return `
          <button type="button" class="v-subrating-row ${hasDossier ? 'has-dossier' : ''}" data-v-dossier-stat="${sub.key}">
            <div class="v-subrating-main">
              <div class="v-subrating-title-wrap">
                <span class="v-subrating-name">${sub.label[currentLang] || sub.label.en}<span class="sub-weight-tag">${weightPct}%</span></span>
                ${badges.length ? `<div class="v-subrating-badges">${badges.slice(0, 2).map((b) => `<span class="v-mini-badge">${b}</span>`).join('')}</div>` : ''}
              </div>
              <div class="v-subrating-meter">
                ${buildVehiclePipBar(sVal, { variant: sVar, compact: true })}
                <span class="v-subrating-score ${sMeta.cls}">${sMeta.text}</span>
                <span class="v-subrating-arrow" aria-hidden="true">›</span>
              </div>
            </div>
          </button>
        `;
      })
      .join('');

    const pMeta = getScoreTierMeta(pScore, true);

    return `
      <div class="pillar-cluster v-pillar-cluster ${isExpanded ? 'expanded' : ''}">
        <button type="button" class="pillar-cluster-header v-pillar-header" data-v-pillar-toggle="${pillar.id}" aria-expanded="${isExpanded}">
          <div class="v-pillar-header-top">
            <div class="v-pillar-header-left">
              <span class="pillar-icon-plain">${PILLAR_ICONS[pillar.id] || ''}</span>
              <span class="v-pillar-header-title"><span class="pillar-num-accent">${pNum} //</span> ${pillar.label[currentLang] || pillar.label.en}</span>
              <span class="accordion-chevron">▸</span>
            </div>
            <div class="v-pillar-header-score ${pMeta.cls}">${pMeta.text}</div>
          </div>
          <div class="v-pillar-header-sub">${tagsHtml}</div>
          ${buildVehiclePipBar(pScore, { variant: barVar })}
        </button>
        <div class="pillar-sub-list v-pillar-sub-list">${subsHtml}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="v-ratings-toolbar">
      <div>
        <h3 class="v-section-heading">${vt.ratingsTitle}</h3>
        <p class="v-card-hint" style="margin:2px 0 0;">${vt.ratingsHint}</p>
      </div>
      <button type="button" class="expand-all-btn" id="v-expand-all-btn">${allExpanded ? vt.collapseAll : vt.expandAll}</button>
    </div>
    <div class="v-ratings-accordion">${pillarsHtml}</div>
    <div class="v-total-score-card" data-tier="${idx.piClassCss}">
      <div class="v-total-score-top">
        <div>
          <span class="v-total-score-title"><span class="pillar-num-accent">Σ //</span> ${vt.totalScoreTitle}</span>
          <span class="v-total-score-sub">${vt.totalScoreSub}</span>
        </div>
        <span class="v-total-score-val">${totalScore.toFixed(1)}<span class="v-total-score-denom">/50</span></span>
      </div>
      ${buildVehiclePipBar(totalAvg, { variant: 'tier' })}
    </div>
  `;
}

function getTransmissionTypeSpec(gearboxRaw) {
  if (gearboxRaw == null) return null;
  const resolved = resolveSpecEntry(gearboxRaw);
  const en = typeof resolved === 'string' ? resolved : (resolved.en || '');
  if (!en) return null;
  const hasManual = /\b(?:manual|5-mt|6-mt|5mt|6mt)\b/i.test(en);
  const hasAuto = /\b(?:auto|automatic|e-?cvt|cvt|dsg|s-tronic|7g(?:-?tronic)?|powershift|tiptronic|steptronic|multidrive|\d-?at)\b/i.test(en);
  if (hasManual && hasAuto) {
    return { en: 'Manual / Automatic', de: 'Schaltgetriebe / Automatik', ru: 'Механика / Автомат' };
  }
  if (hasAuto) {
    return { en: 'Automatic', de: 'Automatik', ru: 'Автомат' };
  }
  return { en: 'Manual', de: 'Schaltgetriebe', ru: 'Механика' };
}

function buildVehicleTabSpecsHtml(car, vt) {
  const rowLabelMap = {
    transmissionType: { en: 'Transmission Type', de: 'Getriebeart', ru: 'Тип КПП' }
  };
  Object.values(SUB_STAT_SPEC_ROWS).forEach((arr) => {
    arr.forEach((r) => {
      rowLabelMap[r.key] = r.label;
    });
  });

  const sections = [
    { cat: 'powertrain', title: vt.secPowertrain, keys: ['engineName', 'forcedInduction', 'injection', 'gearbox', 'transmissionType', 'clutchDmf', 'driveline', 'timingDrive'] },
    { cat: 'perf', title: vt.secPerfChassis, keys: ['sprint0100', 'topSpeed', 'peakTorque', 'passingPunch', 'chassisFeel', 'tractionDiff', 'braking1000', 'brakeSetup', 'suspensionWear'] },
    { cat: 'dim', title: vt.secDimSpace, keys: ['rearRoom', 'isofixEntry', 'bootVolume', 'seatUtility', 'payloadRoof', 'towingBraked', 'turningCircle', 'visibility'] },
    { cat: 'comfort', title: vt.secComfortSafety, keys: ['rideTuning', 'highwayNoise', 'cabinMaterials', 'controls', 'euroNcap', 'safetyTech', 'rustProtection', 'starterAlternator', 'electronicsRisk'] },
    { cat: 'eff', title: vt.secEffOwnership, keys: ['realWorldFuel', 'tankRange', 'euroNorm', 'taxInsurance', 'serviceWear', 'valueRetention', 'resaleDemand'] }
  ];

  const cardsHtml = sections
    .map((sec) => {
      const rowsHtml = sec.keys
        .map((rowKey) => {
          const raw =
            rowKey === 'transmissionType'
              ? getTransmissionTypeSpec(car.specs && car.specs.gearbox)
              : (car.specs ? car.specs[rowKey] : null);
          if (raw == null) return '';
          const lblObj = rowLabelMap[rowKey];
          const lbl = lblObj ? (lblObj[currentLang] || lblObj.en) : rowKey;
          const valHtml = formatPowerUnit(resolveLocalizedSpecVal(raw));
          const plainVal = resolvePlainSpecText(raw);
          const negCls = /^0\s*kg/i.test(plainVal) ? 'is-negative' : '';
          const tipBody = getSpecValueTooltip(rowKey, raw);
          const tipAttrs = tipBody
            ? `data-tip-title="${escapeHtmlAttr(`${lbl}: ${plainVal}`)}" data-tip-body="${escapeHtmlAttr(tipBody)}"`
            : '';
          return `
            <div class="v-spec-row ${tipBody ? 'has-tip' : ''}" ${tipAttrs}>
              <span class="v-spec-k">${lbl}</span>
              <span class="v-spec-v ${negCls}">${valHtml}</span>
            </div>
          `;
        })
        .filter(Boolean)
        .join('');
      return `
        <div class="v-spec-group-card" data-spec-cat="${sec.cat}">
          <h4 class="v-spec-group-title">${sec.title}</h4>
          <div class="v-spec-rows-list">${rowsHtml}</div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="v-section-header">
      <h3 class="v-section-heading">${vt.specsTitle}</h3>
      <span class="v-card-hint" style="margin:0;">${vt.specsHint}</span>
    </div>
    <div class="v-specs-grid">${cardsHtml}</div>
  `;
}

function getTrimTierClass(index, total, explicitTierClass) {
  if (typeof explicitTierClass === 'string' && /^tier-(10|[1-9])$/.test(explicitTierClass)) {
    return explicitTierClass;
  }
  let tierNum = 2;
  if (total <= 2) {
    tierNum = index === 0 ? 2 : 7;
  } else if (total === 3) {
    tierNum = [2, 4, 7][index] || 7;
  } else if (total === 4) {
    tierNum = [2, 3, 4, 7][index] || 7;
  } else if (total === 5) {
    tierNum = [2, 3, 4, 6, 7][index] || 7;
  } else if (total === 6) {
    tierNum = [1, 2, 3, 4, 6, 7][index] || 7;
  } else if (total === 7) {
    tierNum = [1, 2, 3, 4, 5, 6, 7][index] || 7;
  } else if (total === 8) {
    tierNum = [1, 2, 3, 4, 5, 6, 7, 8][index] || 8;
  } else if (total === 9) {
    tierNum = [1, 2, 3, 4, 5, 6, 7, 8, 9][index] || 9;
  } else {
    tierNum = Math.min(10, Math.max(1, Math.round((index / Math.max(1, total - 1)) * 9) + 1));
  }
  return `tier-${tierNum}`;
}

function buildVehicleTabTrimsHtml(car, vt) {
  const entry = getCarInDepthEntry(car);
  const td = entry && entry.trimsData;
  if (!td) return '';

  const pick = (v) => (v == null ? '' : typeof v === 'string' ? v : (v[currentLang] || v.en || ''));
  const lang = currentLang === 'de' || currentLang === 'ru' ? currentLang : 'en';
  const cat = getEngineCategory(car);
  const cabinKey = cat === 'hybrid' ? 'hybrid' : 'conventional';
  const cabinNoteObj =
    td.cabinByPowertrain &&
    (td.cabinByPowertrain[car.selectedEngineId] ||
      td.cabinByPowertrain[cat] ||
      td.cabinByPowertrain[cabinKey] ||
      td.cabinByPowertrain.default);

  const totalTrims = td.trims.length;
  const isScrollable = totalTrims > 4;

  const trimCardsHtml = td.trims
    .map((tr, idx) => {
      const resolvedTier = getTrimTierClass(idx, totalTrims, tr.tierClass);
      return `
      <div class="v-trim-card ${resolvedTier} ${tr.isSweetSpot ? 'is-sweet-spot' : ''}">
        <div class="v-trim-card-head">
          <span class="v-trim-tier-tag">${pick(tr.tier)}</span>
          ${tr.isSweetSpot ? `<span class="v-trim-sweet-pill">${vt.trimsSweetSpotBadge}</span>` : ''}
        </div>
        <h4 class="v-trim-name">${pick(tr.name)}</h4>
        <span class="v-trim-delta">${pick(tr.delta)}</span>
        <p class="v-trim-summary">${pick(tr.summary)}</p>
        <ul class="v-trim-highlights">
          ${(tr.highlights[lang] || tr.highlights.en)
            .map((hl) => `<li><span class="v-trim-bullet" aria-hidden="true">▸</span><span>${hl}</span></li>`)
            .join('')}
        </ul>
      </div>
    `;
    })
    .join('');

  const cellHtml = (code) => {
    if (code === 'std') return `<span class="v-tm-std" aria-label="${vt.trimsLegendStd}">✓</span>`;
    if (code === 'opt') return `<span class="v-tm-opt">${vt.trimsLegendOpt.split(' / ')[0]}</span>`;
    return `<span class="v-tm-no" aria-label="${vt.trimsLegendNone}">—</span>`;
  };

  const matrixRowsHtml = td.matrix
    .map(
      (row) => `
      <tr>
        <td>${pick(row.feature)}</td>
        ${row.vals.map((v) => `<td>${cellHtml(v)}</td>`).join('')}
      </tr>
    `
    )
    .join('');

  return `
    <div class="v-trims-layout">
      <div class="v-section-header">
        <h3 class="v-section-heading">${pick(td.sectionTitle) || vt.trimsSectionTitle}</h3>
        <div class="v-trims-scroll-controls">
          <span class="v-card-hint" style="margin:0;">${pick(td.sectionHint) || vt.trimsSectionHint}</span>
          ${
            isScrollable
              ? `<div class="v-trim-scroll-nav" aria-label="${escapeHtmlAttr(vt.ariaScrollTrims)}">
                   <button type="button" class="v-trim-scroll-btn" data-v-trim-scroll="-1" aria-label="${escapeHtmlAttr(vt.ariaScrollLeft)}">‹</button>
                   <button type="button" class="v-trim-scroll-btn" data-v-trim-scroll="1" aria-label="${escapeHtmlAttr(vt.ariaScrollRight)}">›</button>
                 </div>`
              : ''
          }
        </div>
      </div>

      <div class="v-trims-cards-grid ${isScrollable ? 'is-scrollable' : ''}" ${isScrollable ? 'id="v-trims-scroll-track"' : ''} data-trim-count="${totalTrims}">${trimCardsHtml}</div>

      <div class="v-ed-card">
        <div class="v-trim-matrix-head">
          <h3 style="margin:0;">${vt.trimsMatrixTitle}</h3>
          <div class="v-trim-matrix-legend">
            <span><strong class="v-tm-std">✓</strong> ${vt.trimsLegendStd}</span>
            <span><span class="v-tm-opt">${vt.trimsLegendOpt.split(' / ')[0]}</span> ${vt.trimsLegendOpt}</span>
            <span><span class="v-tm-no">—</span> ${vt.trimsLegendNone}</span>
          </div>
        </div>
        <div class="v-trim-matrix-wrap">
          <table class="v-trim-matrix-table">
            <thead>
              <tr>
                <th>${vt.trimsMatrixFeatureCol}</th>
                ${td.trims
                  .map((tr, idx) => `<th class="${getTrimTierClass(idx, totalTrims, tr.tierClass)} ${tr.isSweetSpot ? 'is-sweet-spot' : ''}">${pick(tr.name)}</th>`)
                  .join('')}
              </tr>
            </thead>
            <tbody>${matrixRowsHtml}</tbody>
          </table>
        </div>
      </div>

      <div class="v-interior-grid">
        <div class="v-ed-card v-interior-card">
          <div class="v-interior-card-head">
            <h3>${vt.trimsInteriorTitle}</h3>
            <span class="v-interior-kicker">${vt.trimsInteriorKicker}</span>
          </div>
          <ul class="v-interior-list">
            ${(td.interiorNotes[lang] || td.interiorNotes.en)
              .map((note) => `<li><span class="v-interior-icon" aria-hidden="true">◆</span><span>${note}</span></li>`)
              .join('')}
          </ul>
          ${
            cabinNoteObj
              ? `
          <div class="v-interior-engine-box ${cabinKey === 'hybrid' ? 'is-hybrid' : ''}">
            <span class="v-interior-engine-kicker">${vt.trimsEngineCabinTitle}</span>
            <p class="v-interior-engine-text">${pick(cabinNoteObj)}</p>
          </div>`
              : ''
          }
        </div>

        <div class="v-ed-card v-interior-card is-facelift">
          <div class="v-interior-card-head">
            <h3>${pick(td.faceliftTitle) || vt.trimsFaceliftTitle}</h3>
            <span class="v-interior-kicker">${pick(td.faceliftKicker) || vt.trimsFaceliftKicker}</span>
          </div>
          <ul class="v-interior-list">
            ${(td.faceliftUpgrades[lang] || td.faceliftUpgrades.en)
              .map((up) => `<li><span class="v-interior-icon" aria-hidden="true">✦</span><span>${up}</span></li>`)
              .join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function buildVehicleTabReliabilityHtml(car, vt) {
  const ui = t();
  const { grp } = getCarInDepthEngineData(car);
  const stats = (grp && grp.stats && (grp.stats[currentLang] || grp.stats.en)) || [];
  const extChecks = (grp && grp.extendedChecks && (grp.extendedChecks[currentLang] || grp.extendedChecks.en)) || [];

  const ptSub = car.subStats && car.subStats.powertrainDurability;
  const ptScore = ptSub ? Number(ptSub.score || 0) : 0;
  const ptDossier = getSubStatDossier(car, 'powertrainDurability') || {};
  const ptBadges = (ptSub && ptSub.badges && (ptSub.badges[currentLang] || ptSub.badges.en)) || [];
  const watchoutExtras = (grp && grp.watchoutExtra && (grp.watchoutExtra[currentLang] || grp.watchoutExtra.en)) || [];

  const boosters = [...(ptDossier.strengths || [])];
  if (ptBadges[0] && boosters.length < 3) boosters.push(ptBadges[0]);
  const drags = [...new Set([...(ptDossier.lowScoreReasons || []), ...(ptDossier.watchouts || []), ...watchoutExtras])];

  const beforeBuy = Array.isArray(ptDossier.beforeYouBuy) ? ptDossier.beforeYouBuy : [];
  const highMileage = Array.isArray(ptDossier.highMileage) ? ptDossier.highMileage : [];
  const guide = car.subStats?.maintenanceRepairCosts?.repairGuide;
  const pick = (v) => (v == null ? '' : typeof v === 'string' ? v : (v[currentLang] || v.en || ''));

  const defaultStatTone =
    ptScore >= 8.5 ? 'is-great' : ptScore >= 7.0 ? 'is-solid' : ptScore >= 5.5 ? 'is-caution' : 'is-poor';

  const statsStripHtml = `
    <div class="v-rel-stats-wrap">
      <h3 class="v-section-heading">${vt.relStatsTitle}</h3>
      <div class="v-rel-stats-grid">
        ${stats
          .map((st) => {
            const toneCls = st.tone ? `is-${st.tone}` : defaultStatTone;
            return `
          <div class="v-rel-stat-card ${toneCls}">
            <span class="v-rel-stat-source">${st.source}</span>
            <span class="v-rel-stat-value">${st.value}</span>
            <p class="v-rel-stat-note">${st.note}</p>
          </div>
        `;
          })
          .join('')}
      </div>
    </div>
  `;

  const depthToggleHtml = `
    <div class="v-depth-bar">
      <div class="v-depth-pills" role="group" aria-label="${escapeHtmlAttr(vt.ariaDetailDepth)}">
        <button type="button" class="v-depth-btn ${vehicleReliabilityDepth === 'simple' ? 'active' : ''}" data-v-rel-depth="simple">${vt.relDepthSimple}</button>
        <button type="button" class="v-depth-btn ${vehicleReliabilityDepth === 'thorough' ? 'active' : ''}" data-v-rel-depth="thorough">${vt.relDepthThorough}</button>
      </div>
      <span class="v-card-hint" style="margin:0;">${vehicleReliabilityDepth === 'simple' ? vt.relSimpleHint : vt.relThoroughHint}</span>
    </div>
  `;

  const verdictCardHtml = `
    <div class="v-rel-verdict-card ${ptScore < 7.0 ? 'is-caution' : ''}">
      <div class="v-rel-verdict-top">
        <div>
          <span class="v-rel-kicker">${vt.relVerdictKicker}</span>
          <h3 class="v-rel-headline">${ptDossier.headline || formatPowerUnit(car.engineBadge)}</h3>
        </div>
        <span class="v-rel-score-badge ${ptScore < 7.0 ? 'is-caution' : ''}">${ptScore.toFixed(1)} / 10</span>
      </div>
      <div class="v-rel-drivers-grid">
        <div class="v-rel-driver-col">
          <span class="v-rel-driver-head is-pos">${vt.relBoosters}</span>
          ${boosters.slice(0, 3).map((x) => `<div class="v-rel-driver-tile is-pos">✓ ${x}</div>`).join('')}
        </div>
        <div class="v-rel-driver-col">
          <span class="v-rel-driver-head is-warn">${vt.relDrags}</span>
          ${drags.slice(0, 3).map((x) => `<div class="v-rel-driver-tile is-warn">⚠ ${x}</div>`).join('')}
        </div>
      </div>
    </div>
  `;

  const routine = guide && Array.isArray(guide.routine) ? guide.routine : [];
  const critical = guide && Array.isArray(guide.critical) ? guide.critical : [];

  let depthContentHtml = '';
  if (vehicleReliabilityDepth === 'simple') {
    depthContentHtml = `
      <div class="v-ed-card v-rel-checks-solo">
        <h3>${vt.relTopChecks}</h3>
        <ul class="v-check-list">
          ${beforeBuy.map((item) => `<li><span class="v-check-box" aria-hidden="true">☐</span><span>${item}</span></li>`).join('')}
        </ul>
      </div>
    `;
  } else {
    const repairsHtml =
      routine.length || critical.length
        ? `
      <div class="v-rg-wrap">
        <h3 class="v-section-heading">${vt.relRepairTitle}</h3>
        <div class="v-rg-grid">
          <div class="v-rg-section is-routine">
            <div class="v-rg-head">
              <span>${vt.relRoutineTitle}</span>
              <span class="v-rg-count">${routine.length}</span>
            </div>
            ${routine
              .map(
                (item) => `
              <div class="v-rg-row">
                <div class="v-rg-row-top">
                  <span class="v-rg-when">${pick(item.when)}</span>
                  <span class="v-rg-cost">${pick(item.cost)}</span>
                </div>
                <div class="v-rg-action">${pick(item.action)}</div>
              </div>
            `
              )
              .join('')}
          </div>
          <div class="v-rg-section is-critical">
            <div class="v-rg-head">
              <span>${vt.relCriticalTitle}</span>
              <span class="v-rg-count">${critical.length}</span>
            </div>
            ${
              critical.length
                ? critical
                    .map(
                      (item) => `
                  <div class="v-rg-row">
                    <div class="v-rg-row-top">
                      <span class="v-rg-when is-crit">${pick(item.when)}</span>
                      <span class="v-rg-cost">${pick(item.cost)}</span>
                    </div>
                    <div class="v-rg-action">${pick(item.action)}</div>
                    ${
                      item.risk
                        ? `<div class="v-rg-risk">
                            <span>↳ <strong>${vt.relIfIgnored}</strong> ${pick(item.risk)}</span>
                            ${item.damage ? `<span class="v-rg-damage">${pick(item.damage)}</span>` : ''}
                          </div>`
                        : ''
                    }
                  </div>
                `
                    )
                    .join('')
                : `<div class="v-rg-empty">${vt.relNoneCritical}</div>`
            }
          </div>
        </div>
      </div>
    `
        : '';

    const roadmapHtml = highMileage.length
      ? `
      <div class="v-roadmap-wrap">
        <div class="v-roadmap-head">
          <h3 class="v-section-heading">${vt.relRoadmapTitle}</h3>
          <div class="hm-tier-legend">
            <span class="hm-tier-chip is-yellow">! ${ui.dossierTierYellow}</span>
            <span class="hm-tier-chip is-orange">⚠ ${ui.dossierTierOrange}</span>
            <span class="hm-tier-chip is-red">❗ ${ui.dossierTierRed}</span>
          </div>
        </div>
        <ul class="dossier-hm-list">
          ${highMileage
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
    `
      : '';

    depthContentHtml = `
      <div class="v-rel-simple-grid">
        <div class="v-ed-card">
          <h3>${vt.relTopChecks}</h3>
          <ul class="v-check-list">
            ${beforeBuy.map((item) => `<li><span class="v-check-box" aria-hidden="true">☐</span><span>${item}</span></li>`).join('')}
          </ul>
        </div>
        <div class="v-ed-card">
          <h3>${vt.relExtendedChecks}</h3>
          <ul class="v-check-list">
            ${extChecks.map((item) => `<li><span class="v-check-box" aria-hidden="true">☐</span><span>${item}</span></li>`).join('')}
          </ul>
        </div>
      </div>
      ${repairsHtml}
      ${roadmapHtml}
    `;
  }

  return `
    <div class="v-reliability-layout">
      ${statsStripHtml}
      ${depthToggleHtml}
      ${verdictCardHtml}
      ${depthContentHtml}
    </div>
  `;
}

function buildVehicleTabCostsHtml(car, vt) {
  const { cost, grp } = getCarInDepthEngineData(car);
  const km = vehicleAnnualKm;
  const fuelYr = Math.round((km / 100) * cost.avgFuelL100 * cost.fuelPrice);
  const scaleFactor = 0.4 + 0.6 * (km / 15000);
  const serviceYr = Math.round(cost.service * scaleFactor);
  const totalYr = fuelYr + cost.tax + cost.ins + serviceYr;
  const perMo = Math.round(totalYr / 12);
  const shareDenom = totalYr > 0 ? totalYr : 1;
  const fuelWidth = ((fuelYr / shareDenom) * 100).toFixed(1);
  const taxWidth = ((cost.tax / shareDenom) * 100).toFixed(1);
  const insWidth = ((cost.ins / shareDenom) * 100).toFixed(1);
  const serviceWidth = ((serviceYr / shareDenom) * 100).toFixed(1);
  const fuelPct = Math.round((fuelYr / shareDenom) * 100);
  const taxPct = Math.round((cost.tax / shareDenom) * 100);
  const insPct = Math.round((cost.ins / shareDenom) * 100);
  const servicePct = Math.max(0, 100 - fuelPct - taxPct - insPct);
  const SEGMENT_COST_BASELINES = {
    subcompact: { fuelL100: 6.0, tax: 90, ins: 520, service: 280 },
    hatchback:  { fuelL100: 7.0, tax: 120, ins: 600, service: 320 },
    'hot-hatch':{ fuelL100: 8.8, tax: 210, ins: 880, service: 520 },
    sedan:      { fuelL100: 7.8, tax: 175, ins: 690, service: 390 },
    suv:        { fuelL100: 8.4, tax: 195, ins: 680, service: 380 }
  };
  const segKey = getCarType(car);
  const segBase = SEGMENT_COST_BASELINES[segKey] || SEGMENT_COST_BASELINES.hatchback;
  const classFuelYr = Math.round((km / 100) * segBase.fuelL100 * 1.75);
  const classServiceYr = Math.round(segBase.service * scaleFactor);
  const classBaseline = classFuelYr + segBase.tax + segBase.ins + classServiceYr;
  const savingsLabel = (vt.costsSegmentLabels && vt.costsSegmentLabels[segKey]) || vt.costsSavingsLabel;
  const savingsYr = classBaseline - totalYr;
  const savingsNote = (grp && grp.savingsNote && (grp.savingsNote[currentLang] || grp.savingsNote.en)) || '';

  const tcoPillar = STAT_PILLARS.find((p) => p.id === 'runningCostsTco');
  const subCardsHtml = (tcoPillar ? tcoPillar.subRatings : [])
    .map((sub) => {
      const subObj = car.subStats && car.subStats[sub.key];
      const score = subObj ? Number(subObj.score) : 0;
      const badges = (subObj && subObj.badges && (subObj.badges[currentLang] || subObj.badges.en)) || [];
      return `
        <button type="button" class="v-cost-rating-card" data-v-dossier-stat="${sub.key}">
          <div class="v-pillar-bar-head">
            <span class="v-cost-rating-name">${sub.label[currentLang] || sub.label.en}</span>
            <span class="v-pillar-bar-score">${score.toFixed(1)}</span>
          </div>
          ${buildVehiclePipBar(score, { variant: score >= 8.5 ? 'win' : score < 7.0 ? 'warn' : 'c1', compact: true })}
          ${badges.length ? `<div class="v-cost-rating-badges">${badges.join(' · ')}</div>` : ''}
        </button>
      `;
    })
    .join('');

  return `
    <div class="v-costs-layout">
      <div class="v-ed-card v-cost-estimator-card">
        <div class="v-cost-est-top">
          <div>
            <h3>${vt.costsEstTitle}</h3>
            <p class="v-card-hint" style="margin:2px 0 0;">${vt.costsEstHint}</p>
          </div>
          <div class="v-km-pills" role="group" aria-label="${escapeHtmlAttr(vt.ariaAnnualMileage)}">
            ${[10000, 15000, 20000]
              .map(
                (val) =>
                  `<button type="button" class="v-km-btn ${km === val ? 'active' : ''}" data-v-annual-km="${val}">${val.toLocaleString('en-US')} km${vt.perYr}</button>`
              )
              .join('')}
          </div>
        </div>

        <div class="v-cost-kpi-row">
          <div class="v-cost-kpi is-fuel">
            <div class="v-cost-kpi-top">
              <span class="v-cost-kpi-label">${vt.costsFuelLabel} (${cost.avgFuelL100.toFixed(1)} L/100)</span>
              <span class="v-cost-kpi-pct">${fuelPct}%</span>
            </div>
            <span class="v-cost-kpi-val">${formatEuroAmount(fuelYr)}${vt.perYr}</span>
          </div>
          <div class="v-cost-kpi is-tax">
            <div class="v-cost-kpi-top">
              <span class="v-cost-kpi-label">${vt.costsTaxLabel}</span>
              <span class="v-cost-kpi-pct">${taxPct}%</span>
            </div>
            <span class="v-cost-kpi-val">${formatEuroAmount(cost.tax)}${vt.perYr}</span>
          </div>
          <div class="v-cost-kpi is-ins">
            <div class="v-cost-kpi-top">
              <span class="v-cost-kpi-label">${vt.costsInsLabel}</span>
              <span class="v-cost-kpi-pct">${insPct}%</span>
            </div>
            <span class="v-cost-kpi-val">${formatEuroAmount(cost.ins)}${vt.perYr}</span>
          </div>
          <div class="v-cost-kpi is-service">
            <div class="v-cost-kpi-top">
              <span class="v-cost-kpi-label">${vt.costsServiceLabel}</span>
              <span class="v-cost-kpi-pct">${servicePct}%</span>
            </div>
            <span class="v-cost-kpi-val">${formatEuroAmount(serviceYr)}${vt.perYr}</span>
          </div>
          <div class="v-cost-kpi is-total">
            <span class="v-cost-kpi-label">${vt.costsTotalYrLabel}</span>
            <div class="v-cost-kpi-total-row">
              <span class="v-cost-kpi-val is-accent">${formatEuroAmount(totalYr)}${vt.perYr}</span>
              <span class="v-cost-kpi-mo-pill">~${formatEuroAmount(perMo)}${vt.perMo}</span>
            </div>
          </div>
        </div>

        <div class="v-cost-share-bar" aria-hidden="true">
          <span class="v-cost-share-seg is-fuel" style="width:${fuelWidth}%;" title="${escapeHtmlAttr(`${vt.costsFuelLabel}: ${formatEuroAmount(fuelYr)}${vt.perYr} (${fuelPct}%)`)}"></span>
          <span class="v-cost-share-seg is-tax" style="width:${taxWidth}%;" title="${escapeHtmlAttr(`${vt.costsTaxLabel}: ${formatEuroAmount(cost.tax)}${vt.perYr} (${taxPct}%)`)}"></span>
          <span class="v-cost-share-seg is-ins" style="width:${insWidth}%;" title="${escapeHtmlAttr(`${vt.costsInsLabel}: ${formatEuroAmount(cost.ins)}${vt.perYr} (${insPct}%)`)}"></span>
          <span class="v-cost-share-seg is-service" style="width:${serviceWidth}%;" title="${escapeHtmlAttr(`${vt.costsServiceLabel}: ${formatEuroAmount(serviceYr)}${vt.perYr} (${servicePct}%)`)}"></span>
        </div>

        <div class="v-cost-savings-banner ${savingsYr >= 0 ? 'is-pos' : 'is-warn'}">
          <div class="v-cost-savings-head">
            <span class="v-cost-savings-badge">${savingsYr >= 0 ? `+${formatEuroAmount(savingsYr)}${vt.perYr}` : `−${formatEuroAmount(Math.abs(savingsYr))}${vt.perYr}`}</span>
            <strong>${savingsLabel}</strong>
            <span class="v-cost-savings-base">(${vt.costsClassAvgLabel}: ~${formatEuroAmount(classBaseline)}${vt.perYr} @ ${km.toLocaleString('en-US')} km)</span>
          </div>
          ${savingsNote ? `<p class="v-cost-savings-note">${savingsNote}</p>` : ''}
        </div>
      </div>

      <div class="v-costs-ratings-section">
        <div class="v-section-header">
          <h3 class="v-section-heading">${vt.costsRatingsTitle}</h3>
          <span class="v-card-hint" style="margin:0;">${vt.costsClickDossier}</span>
        </div>
        <div class="v-costs-ratings-grid">${subCardsHtml}</div>
      </div>
    </div>
  `;
}

function buildVehicleTabMarketHtml(car, vt) {
  const ui = t();
  const m = getPriceBreakdownMetrics(car, ui);
  const { grp } = getCarInDepthEngineData(car);
  const market = (grp && grp.market) || {};
  const pick = (v) => (v == null ? '' : typeof v === 'string' ? v : (v[currentLang] || v.en || ''));

  const { startYr, todayYr, age, msrp, used, maxVal, valueAt, futureVal } = computeDepreciationCurveModel(car, m);

  const padL = 52, padR = 24, padT = 22, padB = 30;
  const w = 460, h = 215;
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
  const pts = [
    { key: 'msrp', x: samples[0].x, y: samples[0].y, yr: `${startYr}`, readout: `${ui.priceMsrpLabel}: ${formatEuroAmount(msrp)}`, color: 'var(--text-main)' },
    { key: 'depreciation', x: xFor(midT * todayFracX), y: yFor(valueAt(midT)), yr: `${Math.round(startYr + age * midT)}`, readout: `${ui.priceDepTotalLabel}: −${formatEuroAmount(m.depTotal)} (${m.depPct}%)`, color: 'var(--p2-accent)' },
    { key: 'current', x: samples[steps].x, y: samples[steps].y, yr: `${todayYr}`, readout: `${ui.priceCurrentLabel}: ~${formatEuroAmount(used)} (${m.retainedPct}%)`, color: 'var(--win-green)' },
    { key: 'outlook', x: fEndX, y: fEndY, yr: `${todayYr + 3}`, readout: `${ui.priceOutlookLabel} (${todayYr + 3}): ~${formatEuroAmount(futureVal)}`, prefix: `${ui.priceOutlookLabel} (${todayYr + 3}): `, highlightVal: `~${formatEuroAmount(futureVal)}`, color: 'var(--forza-lime)' }
  ];

  const yTicks = [1, 0.5, 0].map((f) => {
    const val = Math.round((maxVal * f) / 1000) * 1000;
    const y = yFor(val);
    return `
      <line class="fused-dep-grid-line" x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}"></line>
      <text class="fused-dep-axis-text" x="${padL - 8}" y="${Number(y) + 3}" text-anchor="end">€${Math.round(val / 1000)}k</text>
    `;
  }).join('');

  const svgPointsHtml = pts
    .map(
      (pt) => `
      <g class="fused-dep-point" data-v-dep-key="${pt.key}" data-v-dep-readout="${escapeHtmlAttr(pt.readout)}"${pt.highlightVal ? ` data-v-dep-prefix="${escapeHtmlAttr(pt.prefix)}" data-v-dep-val="${escapeHtmlAttr(pt.highlightVal)}"` : ''}>
        <circle class="fused-dep-ring" cx="${pt.x}" cy="${pt.y}" r="10"></circle>
        <circle class="fused-dep-dot" cx="${pt.x}" cy="${pt.y}" r="5.5" fill="${pt.color}"></circle>
        <circle cx="${pt.x}" cy="${pt.y}" r="18" fill="transparent"></circle>
        <text class="fused-dep-axis-text fused-dep-year-text" x="${pt.x}" y="${h - 8}" text-anchor="middle">${pt.yr}</text>
      </g>
    `
    )
    .join('');

  return `
    <div class="v-market-hero-grid" data-v-dep-scope>
      <div class="v-dep-graph-card">
        <div class="v-dep-graph-head">
          <span class="v-dep-graph-title">${vt.depGraphTitle}</span>
          <span class="v-dep-hover-readout" data-v-dep-readout-el>${vt.depGraphHint}</span>
        </div>
        <div class="v-dep-svg-wrap">
          <svg class="v-dep-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${vt.depGraphTitle}">
            <defs>
              <linearGradient id="vehicleDepAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--p1-accent)" stop-opacity="0.6"></stop>
                <stop offset="100%" stop-color="var(--p1-accent)" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
            ${yTicks}
            <path class="fused-dep-area" style="fill:url(#vehicleDepAreaGrad)" d="${areaPath}"></path>
            <path class="v-dep-path" data-v-dep-curve-path d="${solidPath}"></path>
            <path class="fused-dep-flow" data-v-dep-curve-flow d="${solidPath}"></path>
            <path class="fused-dep-hit" data-v-dep-curve="depreciation" d="${solidPath}"></path>
            <path class="fused-dep-forecast" d="${forecastPath}"></path>
            ${svgPointsHtml}
          </svg>
        </div>
      </div>

      <div class="v-market-stats-grid">
        <div class="v-market-kpi-card" data-v-dep-card="msrp">
          <span class="v-market-kpi-label">${ui.priceMsrpLabel}</span>
          <span class="v-market-kpi-val">${formatEuroAmount(m.msrp)}</span>
        </div>
        <div class="v-market-kpi-card" data-v-dep-card="current">
          <span class="v-market-kpi-label">${ui.priceCurrentLabel}</span>
          <span class="v-market-kpi-val is-pos">~${formatEuroAmount(m.used)}</span>
        </div>
        <div class="v-market-kpi-card" data-v-dep-card="depreciation">
          <span class="v-market-kpi-label">${ui.priceDepTotalLabel}</span>
          <span class="v-market-kpi-val is-warn">−${formatEuroAmount(m.depTotal)} (${m.depPct}%)</span>
        </div>
        <div class="v-market-kpi-card" data-v-dep-card="current">
          <span class="v-market-kpi-label">${ui.priceRetainedLabel}</span>
          <span class="v-market-kpi-val">${m.retainedPct}%</span>
        </div>
        <div class="v-market-kpi-card" data-v-dep-card="depreciation">
          <span class="v-market-kpi-label">${ui.priceAnnualLabel}</span>
          <span class="v-market-kpi-val">~${formatEuroAmount(Math.round(m.annualLoss))}${vt.perYr}</span>
        </div>
        <div class="v-market-kpi-card" data-v-dep-card="outlook">
          <span class="v-market-kpi-label">${ui.priceOutlookLabel}</span>
          <span class="v-market-kpi-val is-text">${m.outlook}</span>
          <span class="v-market-kpi-est">${todayYr + 3}: <strong class="v-market-kpi-est-num">~${formatEuroAmount(futureVal)}</strong></span>
        </div>
      </div>
    </div>

    <div class="v-ed-card v-market-outlook-card">
      <h3>${vt.marketInsightsTitle}</h3>
      <div class="v-market-outlook-rows">
        <div class="v-market-outlook-item">
          <span class="v-market-outlook-k">${vt.marketSupplyLabel}</span>
          <p class="v-market-outlook-v">${pick(market.supplyDemand)}</p>
        </div>
        <div class="v-market-outlook-item">
          <span class="v-market-outlook-k is-sweet-spot">${vt.marketSweetSpotLabel}</span>
          <p class="v-market-outlook-v">${pick(market.sweetSpot)}</p>
        </div>
        <div class="v-market-outlook-item">
          <span class="v-market-outlook-k is-forecast">${vt.marketOutlook35Label}</span>
          <p class="v-market-outlook-v">${pick(market.outlook3to5yr)}</p>
        </div>
      </div>
    </div>
  `;
}

function renderVehicleInDepthTabs(car) {
  const shell = document.getElementById('vehicle-indepth-shell');
  const tabsBar = document.getElementById('vehicle-tabs-bar');
  const panel = document.getElementById('vehicle-tab-panel');
  if (!shell || !tabsBar || !panel || !car) return;

  const vt = VEHICLE_TABS_I18N[currentLang] || VEHICLE_TABS_I18N.en;

  if (!getCarInDepthEntry(car)) {
    tabsBar.hidden = true;
    tabsBar.innerHTML = '';
    panel.hidden = true;
    panel.innerHTML = '';
    return;
  }

  const tabDefs = [
    { id: 'overview', label: vt.tabs.overview },
    { id: 'ratings', label: vt.tabs.ratings },
    { id: 'specs', label: vt.tabs.specs },
    { id: 'trims', label: vt.tabs.trims },
    { id: 'reliability', label: vt.tabs.reliability },
    { id: 'costs', label: vt.tabs.costs },
    { id: 'market', label: vt.tabs.market }
  ];

  tabsBar.hidden = false;
  tabsBar.innerHTML = tabDefs
    .map(
      (tb) =>
        `<button type="button" class="v-tab-btn ${vehicleActiveTab === tb.id ? 'active' : ''}" data-v-tab="${tb.id}" role="tab" aria-selected="${vehicleActiveTab === tb.id}">${tb.label}</button>`
    )
    .join('');

  tabsBar.querySelectorAll('[data-v-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextTab = btn.getAttribute('data-v-tab');
      vehicleActiveTab = vehicleActiveTab === nextTab ? null : nextTab;
      renderVehicleInDepthTabs(car);
    });
  });

  if (!vehicleActiveTab) {
    panel.hidden = true;
    panel.innerHTML = '';
    return;
  }

  panel.hidden = false;

  if (vehicleActiveTab === 'overview') {
    panel.innerHTML = buildVehicleTabOverviewHtml(car, vt);
    panel.querySelectorAll('[data-v-jump-pillar]').forEach((el) => {
      el.addEventListener('click', () => {
        const pid = el.getAttribute('data-v-jump-pillar');
        vehicleActiveTab = 'ratings';
        if (pid) vehicleExpandedPillars.add(pid);
        renderVehicleInDepthTabs(car);
      });
    });
  } else if (vehicleActiveTab === 'ratings') {
    panel.innerHTML = buildVehicleTabRatingsHtml(car, vt);
    const expAllBtn = document.getElementById('v-expand-all-btn');
    if (expAllBtn) {
      expAllBtn.addEventListener('click', () => {
        if (vehicleExpandedPillars.size === STAT_PILLARS.length) {
          vehicleExpandedPillars.clear();
        } else {
          STAT_PILLARS.forEach((p) => vehicleExpandedPillars.add(p.id));
        }
        renderVehicleInDepthTabs(car);
      });
    }
    panel.querySelectorAll('[data-v-pillar-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-v-pillar-toggle');
        if (vehicleExpandedPillars.has(pid)) vehicleExpandedPillars.delete(pid);
        else vehicleExpandedPillars.add(pid);
        renderVehicleInDepthTabs(car);
      });
    });
    panel.querySelectorAll('[data-v-dossier-stat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openStatDossier(btn.getAttribute('data-v-dossier-stat'), 'vehicle');
      });
    });
  } else if (vehicleActiveTab === 'specs') {
    panel.innerHTML = buildVehicleTabSpecsHtml(car, vt);
  } else if (vehicleActiveTab === 'trims') {
    panel.innerHTML = buildVehicleTabTrimsHtml(car, vt);
    const track = document.getElementById('v-trims-scroll-track');
    if (track) {
      const prevBtn = panel.querySelector('[data-v-trim-scroll="-1"]');
      const nextBtn = panel.querySelector('[data-v-trim-scroll="1"]');
      const syncScrollButtons = () => {
        if (prevBtn) prevBtn.disabled = track.scrollLeft <= 4;
        if (nextBtn) nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      };
      panel.querySelectorAll('[data-v-trim-scroll]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const dir = Number(btn.getAttribute('data-v-trim-scroll')) || 1;
          track.scrollBy({ left: dir * 300, behavior: 'smooth' });
        });
      });
      track.addEventListener('scroll', syncScrollButtons, { passive: true });
      requestAnimationFrame(syncScrollButtons);
    }
  } else if (vehicleActiveTab === 'reliability') {
    panel.innerHTML = buildVehicleTabReliabilityHtml(car, vt);
    panel.querySelectorAll('[data-v-rel-depth]').forEach((btn) => {
      btn.addEventListener('click', () => {
        vehicleReliabilityDepth = btn.getAttribute('data-v-rel-depth');
        renderVehicleInDepthTabs(car);
      });
    });
  } else if (vehicleActiveTab === 'costs') {
    panel.innerHTML = buildVehicleTabCostsHtml(car, vt);
    panel.querySelectorAll('[data-v-annual-km]').forEach((btn) => {
      btn.addEventListener('click', () => {
        vehicleAnnualKm = Number(btn.getAttribute('data-v-annual-km')) || 15000;
        renderVehicleInDepthTabs(car);
      });
    });
    panel.querySelectorAll('[data-v-dossier-stat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openStatDossier(btn.getAttribute('data-v-dossier-stat'), 'vehicle');
      });
    });
  } else if (vehicleActiveTab === 'market') {
    panel.innerHTML = buildVehicleTabMarketHtml(car, vt);
    panel.querySelectorAll('[data-v-dep-scope]').forEach((scope) => {
      const readout = scope.querySelector('[data-v-dep-readout-el]');
      const curvePath = scope.querySelector('[data-v-dep-curve-path]');
      const curveFlow = scope.querySelector('[data-v-dep-curve-flow]');
      const setHighlight = (key) => {
        const isCurve = key === 'depreciation';
        if (curvePath) curvePath.classList.toggle('is-curve-active', isCurve);
        if (curveFlow) curveFlow.classList.toggle('is-curve-active', isCurve);
        const activePoint = key ? scope.querySelector(`[data-v-dep-key="${key}"]`) : null;
        scope.querySelectorAll('[data-v-dep-key]').forEach((g) => {
          const match = key && g.getAttribute('data-v-dep-key') === key;
          g.classList.toggle('is-active', Boolean(match));
        });
        scope.querySelectorAll('[data-v-dep-card]').forEach((c) => {
          c.classList.toggle('is-linked-hover', Boolean(key && c.getAttribute('data-v-dep-card') === key));
        });
        if (readout) {
          readout.classList.toggle('is-highlighted', Boolean(key));
          if (activePoint) {
            const prefix = activePoint.getAttribute('data-v-dep-prefix');
            const val = activePoint.getAttribute('data-v-dep-val');
            if (prefix && val) {
              readout.innerHTML = `${escapeHtmlAttr(prefix)}<span class="v-dep-est-highlight">${escapeHtmlAttr(val)}</span>`;
            } else {
              readout.textContent = activePoint.getAttribute('data-v-dep-readout') || vt.depGraphHint;
            }
          } else {
            readout.textContent = vt.depGraphHint;
          }
        }
      };
      scope.querySelectorAll('[data-v-dep-key]').forEach((g) => {
        g.addEventListener('mouseenter', () => setHighlight(g.getAttribute('data-v-dep-key')));
        g.addEventListener('mouseleave', () => setHighlight(null));
      });
      scope.querySelectorAll('[data-v-dep-curve]').forEach((c) => {
        c.addEventListener('mouseenter', () => setHighlight('depreciation'));
        c.addEventListener('mouseleave', () => setHighlight(null));
      });
      scope.querySelectorAll('[data-v-dep-card]').forEach((c) => {
        c.addEventListener('mouseenter', () => setHighlight(c.getAttribute('data-v-dep-card')));
        c.addEventListener('mouseleave', () => setHighlight(null));
      });
    });
  }
}

