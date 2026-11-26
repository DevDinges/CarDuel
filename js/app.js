// ============================================================================
// AUTO DUEL — Shell Orchestrator, URL Router, HUD Controls & Boot
// ============================================================================

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
  if (navShowroomLabel) {
    const activeVehicleId = getNavVehicleTargetId();
    const activeVehicleBase = activeVehicleId ? getBaseCarById(activeVehicleId) : null;
    navShowroomLabel.textContent = activeVehicleBase
      ? (activeVehicleBase.gridLabel || activeVehicleBase.shortTitle)
      : ui.navVehicle;
  }
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
  document.getElementById('expand-label-left').textContent = ui.expandFullCar;
  document.getElementById('expand-label-right').textContent = ui.expandFullCar;
  ['left', 'right'].forEach((side) => {
    const labelEl = document.getElementById(`duel-indepth-label-${side}`);
    const btnEl = document.getElementById(`duel-indepth-${side}`);
    if (labelEl) labelEl.textContent = ui.inspectCardBtn;
    if (btnEl) btnEl.setAttribute('aria-label', ui.inspectCardBtn);
    const swapLabelEl = document.getElementById(`swap-car-label-${side}`);
    const swapBtnEl = document.getElementById(`swap-car-${side}-btn`);
    if (swapLabelEl) swapLabelEl.textContent = ui.swapCarBtn;
    if (swapBtnEl) {
      swapBtnEl.title = ui.swapCarTitle;
      swapBtnEl.setAttribute('aria-label', ui.swapCarTitle);
    }
  });
  const navCompareHint = document.getElementById('nav-compare-hint');
  if (navCompareHint) navCompareHint.textContent = ui.compareNeedTwoCars;
  document.getElementById('lightbox-close-btn').textContent = ui.closeBtn;
  const prevDosBtn = document.getElementById('dossier-nav-prev');
  const nextDosBtn = document.getElementById('dossier-nav-next');
  const engPickClose = document.getElementById('engine-picker-close-btn');
  if (prevDosBtn) prevDosBtn.setAttribute('aria-label', ui.ariaPrevDossier);
  if (nextDosBtn) nextDosBtn.setAttribute('aria-label', ui.ariaNextDossier);
  if (engPickClose) engPickClose.setAttribute('aria-label', ui.closeBtn);

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
  const catalogBrandTrigger = document.getElementById('catalog-brand-trigger');
  if (catalogBrandTrigger) catalogBrandTrigger.setAttribute('aria-label', ui.brandLabel);
  const catalogSortLabel = document.getElementById('catalog-sort-label');
  if (catalogSortLabel) catalogSortLabel.textContent = ui.sortLabel;
  if (typeof renderSearchHelpPopover === 'function') renderSearchHelpPopover();
  if (typeof renderBrandDropdown === 'function') renderBrandDropdown();
  if (typeof renderCatalogFilters === 'function') renderCatalogFilters();
  if (typeof renderSortDropdown === 'function') renderSortDropdown();

  if (typeof renderWeightEqualizer === 'function') renderWeightEqualizer();
  renderHomeLanding();
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

let isRestoringHistory = false;
let lastHistoryKey = '';

function getCurrentHistorySnapshot(modal = null) {
  const bothSelected = Boolean(selectedLeftId && selectedRightId);
  const view = isHomeView
    ? 'home'
    : isVehicleView
      ? 'vehicle'
      : bothSelected && !smashPickerForceOpen
        ? 'compare'
        : 'showroom';
  return {
    autoDuelHistory: true,
    view,
    modal: modal || null,
    vehicleViewCarId,
    vehicleViewEngineId,
    vehicleViewGearboxId,
    selectedLeftId,
    selectedLeftEngineId,
    selectedLeftGearboxId,
    selectedRightId,
    selectedRightEngineId,
    selectedRightGearboxId,
    smashPickerForceOpen: view === 'showroom' && bothSelected
  };
}

function getHistoryStateKey(snap) {
  if (!snap) return '';
  let base = snap.view || 'showroom';
  if (snap.view === 'vehicle') {
    base = `vehicle:${snap.vehicleViewCarId || ''}`;
  } else if (snap.view === 'compare') {
    base = `compare:${snap.selectedLeftId || ''}+${snap.selectedRightId || ''}`;
  }
  return snap.modal ? `${base}|modal:${snap.modal}` : base;
}

function buildHistoryHash(snap) {
  if (!snap) return '#home';
  if (snap.view === 'home') return '#home';
  if (snap.view === 'vehicle') return `#vehicle/${snap.vehicleViewCarId || ''}`;
  if (snap.view === 'compare') return `#compare/${snap.selectedLeftId || ''}+${snap.selectedRightId || ''}`;
  return '#showroom';
}

function syncBrowserHistory() {
  if (isRestoringHistory || !window.history || typeof window.history.pushState !== 'function') return;
  const snap = getCurrentHistorySnapshot(null);
  const key = getHistoryStateKey(snap);
  const hash = buildHistoryHash(snap);
  const replacingModal = Boolean(window.history.state && window.history.state.autoDuelHistory && window.history.state.modal);
  try {
    if (!lastHistoryKey || key === lastHistoryKey || replacingModal) {
      window.history.replaceState(snap, '', hash);
    } else {
      window.history.pushState(snap, '', hash);
    }
    lastHistoryKey = key;
  } catch {}
}

function pushModalHistory(modalName) {
  if (isRestoringHistory || !window.history || typeof window.history.pushState !== 'function') return;
  const cur = window.history.state;
  if (cur && cur.autoDuelHistory && cur.modal === modalName) return;
  const snap = getCurrentHistorySnapshot(modalName);
  try {
    window.history.pushState(snap, '', buildHistoryHash(snap));
    lastHistoryKey = getHistoryStateKey(snap);
  } catch {}
}

function popModalHistory(modalName, skipHistory = false) {
  if (skipHistory === true || isRestoringHistory || !window.history) return;
  const cur = window.history.state;
  if (cur && cur.autoDuelHistory && cur.modal === modalName) {
    try {
      window.history.back();
    } catch {}
  }
}

function restoreHistoryState(event) {
  isRestoringHistory = true;
  try {
    const st = event && event.state;
    if (!st || !st.autoDuelHistory) {
      closeAllMenusAndModals(true);
      return;
    }

    const currentBaseKey = getHistoryStateKey(getCurrentHistorySnapshot(null));
    const targetKey = getHistoryStateKey(st);
    closeAllMenusAndModals(true);

    if (!st.modal && targetKey === currentBaseKey) {
      lastHistoryKey = targetKey;
      return;
    }

    cancelDuelTransition();
    selectedLeftId = normalizeCarId(st.selectedLeftId) || null;
    selectedLeftEngineId = st.selectedLeftEngineId || null;
    selectedLeftGearboxId = st.selectedLeftGearboxId || null;
    selectedRightId = normalizeCarId(st.selectedRightId) || null;
    selectedRightEngineId = st.selectedRightEngineId || null;
    selectedRightGearboxId = st.selectedRightGearboxId || null;
    vehicleViewCarId = normalizeCarId(st.vehicleViewCarId) || null;
    vehicleViewEngineId = st.vehicleViewEngineId || null;
    vehicleViewGearboxId = st.vehicleViewGearboxId || null;

    if (st.view === 'home') {
      isHomeView = true;
      isVehicleView = false;
      smashPickerForceOpen = false;
    } else if (st.view === 'vehicle') {
      isHomeView = false;
      isVehicleView = true;
      smashPickerForceOpen = false;
    } else if (st.view === 'compare' && selectedLeftId && selectedRightId) {
      isHomeView = false;
      isVehicleView = false;
      smashPickerForceOpen = false;
    } else {
      isHomeView = false;
      isVehicleView = false;
      smashPickerForceOpen = Boolean(selectedLeftId && selectedRightId);
    }

    lastHistoryKey = getHistoryStateKey(getCurrentHistorySnapshot(null));
    updateArena();
  } finally {
    isRestoringHistory = false;
  }
}

function getNavVehicleTargetId() {
  return vehicleViewCarId || selectedLeftId || selectedRightId || null;
}

function syncTopNavState() {
  const bothSelected = Boolean(selectedLeftId && selectedRightId);
  const showHome = Boolean(isHomeView);
  const showVehicle = !showHome && Boolean(isVehicleView);
  const showSmashGrid = !showHome && !showVehicle && (!bothSelected || smashPickerForceOpen);
  const showDuel = !showHome && !showVehicle && bothSelected && !smashPickerForceOpen;

  const navCatalog = document.getElementById('nav-catalog-btn');
  const navShowroom = document.getElementById('nav-showroom-btn');
  const navShowroomLabel = document.getElementById('nav-showroom-label');
  const navCompare = document.getElementById('nav-compare-btn');
  const navCompareDot = document.getElementById('nav-compare-dot');

  const activeVehicleId = getNavVehicleTargetId();
  const activeVehicleBase = activeVehicleId ? getBaseCarById(activeVehicleId) : null;

  if (navCatalog) navCatalog.classList.toggle('active', showSmashGrid);
  if (navShowroom) {
    navShowroom.disabled = !activeVehicleBase;
    navShowroom.classList.toggle('active', showVehicle);
  }
  if (navShowroomLabel) {
    navShowroomLabel.textContent = activeVehicleBase
      ? (activeVehicleBase.gridLabel || activeVehicleBase.shortTitle)
      : t().navVehicle;
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
  const showVehicle = !showHome && Boolean(isVehicleView);
  const showSmashGrid = !showHome && !showVehicle && (!bothSelected || smashPickerForceOpen);
  const pendingVehicleLoad = showVehicle && needsVehicleHydration(vehicleViewCarId);
  const pendingCompareLoad =
    !showHome &&
    !showVehicle &&
    !showSmashGrid &&
    bothSelected &&
    (needsVehicleHydration(selectedLeftId) || needsVehicleHydration(selectedRightId));

  const duelStage = document.querySelector('.duel-stage');
  const versusArena = document.getElementById('versus-arena');
  const homeStage = document.getElementById('home-landing-stage');
  const smashStage = document.getElementById('smash-picker-stage');
  const vehicleStage = document.getElementById('vehicle-stage');

  document.body.classList.toggle('is-home-view', showHome);
  if (duelStage) {
    duelStage.classList.toggle('no-left-car', showHome || showVehicle || showSmashGrid || pendingCompareLoad || !selectedLeftId);
    duelStage.classList.toggle('no-right-car', showHome || showVehicle || showSmashGrid || pendingCompareLoad || !selectedRightId);
  }
  if (versusArena) {
    versusArena.classList.toggle('awaiting-selection', showHome || showVehicle || showSmashGrid || pendingCompareLoad);
    versusArena.classList.toggle('has-left-car', !showHome && !showVehicle && Boolean(selectedLeftId));
    versusArena.classList.toggle('has-right-car', !showHome && !showVehicle && Boolean(selectedRightId));
  }
  if (homeStage) {
    homeStage.classList.toggle('is-hidden', !showHome);
    homeStage.setAttribute('aria-hidden', String(!showHome));
  }
  if (smashStage) {
    smashStage.classList.toggle('is-hidden', !showSmashGrid);
    smashStage.setAttribute('aria-hidden', String(!showSmashGrid));
  }
  if (vehicleStage) {
    vehicleStage.classList.toggle('is-hidden', !showVehicle);
    vehicleStage.setAttribute('aria-hidden', String(!showVehicle));
  }

  applyStaticTranslations();
  syncTopNavState();
  syncBrowserHistory();
  renderSmashPicker();

  if (showVehicle) {
    const statsCenter = document.getElementById('stats-center');
    if (statsCenter) statsCenter.innerHTML = '';
    if (pendingVehicleLoad) {
      ensureVehiclesLoaded([vehicleViewCarId]).then(() => updateArena());
      return;
    }
    renderVehicleView();
    return;
  }

  if (showHome || showSmashGrid || !bothSelected) {
    const statsCenter = document.getElementById('stats-center');
    if (statsCenter) statsCenter.innerHTML = '';
    return;
  }

  if (pendingCompareLoad) {
    ensureVehiclesLoaded([selectedLeftId, selectedRightId]).then(() => updateArena());
    return;
  }

  const leftCar = getCarById(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId);
  const rightCar = getCarById(selectedRightId, selectedRightEngineId, selectedRightGearboxId);

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

  // Render Interactive Engine & Gearbox Selector Buttons & Dropdown Menus
  renderEngineSelector('left', leftCar);
  renderEngineSelector('right', rightCar);
  renderGearboxSelector('left', leftCar);
  renderGearboxSelector('right', rightCar);

  // Render Remarkable Positive & Negative Traits directly under each Car Picture
  renderCarTraitsTray(leftCar, 'traits-left');
  renderCarTraitsTray(rightCar, 'traits-right');
  syncCarViewportAlignment();

  if (smashAlignmentTimer) clearTimeout(smashAlignmentTimer);
  smashAlignmentTimer = setTimeout(() => {
    syncCarViewportAlignment();
  }, 430);
}

// Initialize Interactive Engine Selector Menus on Both Sides
function initEngineSelectorMenus() {
  const leftWrapper = document.getElementById('engine-wrapper-left');
  const leftBtn = document.getElementById('engine-btn-left');
  const leftDropdown = document.getElementById('engine-dropdown-left');

  const rightWrapper = document.getElementById('engine-wrapper-right');
  const rightBtn = document.getElementById('engine-btn-right');
  const rightDropdown = document.getElementById('engine-dropdown-right');

  const gbLeftWrapper = document.getElementById('gearbox-wrapper-left');
  const gbLeftBtn = document.getElementById('gearbox-btn-left');
  const gbLeftDropdown = document.getElementById('gearbox-dropdown-left');

  const gbRightWrapper = document.getElementById('gearbox-wrapper-right');
  const gbRightBtn = document.getElementById('gearbox-btn-right');
  const gbRightDropdown = document.getElementById('gearbox-dropdown-right');

  const closeAllSelectorMenus = (exceptDropdown = null) => {
    [
      [leftBtn, leftDropdown],
      [rightBtn, rightDropdown],
      [gbLeftBtn, gbLeftDropdown],
      [gbRightBtn, gbRightDropdown]
    ].forEach(([b, d]) => {
      if (b && d && d !== exceptDropdown) setPopupOpen(b, d, false);
    });
  };

  leftBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !leftDropdown.classList.contains('open');
    closeAllSelectorMenus(leftDropdown);
    setPopupOpen(leftBtn, leftDropdown, open);
  });

  rightBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !rightDropdown.classList.contains('open');
    closeAllSelectorMenus(rightDropdown);
    setPopupOpen(rightBtn, rightDropdown, open);
  });

  if (gbLeftBtn && gbLeftDropdown) {
    gbLeftBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !gbLeftDropdown.classList.contains('open');
      closeAllSelectorMenus(gbLeftDropdown);
      setPopupOpen(gbLeftBtn, gbLeftDropdown, open);
    });
  }

  if (gbRightBtn && gbRightDropdown) {
    gbRightBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !gbRightDropdown.classList.contains('open');
      closeAllSelectorMenus(gbRightDropdown);
      setPopupOpen(gbRightBtn, gbRightDropdown, open);
    });
  }

  document.addEventListener('click', (e) => {
    if (!leftWrapper.contains(e.target)) {
      setPopupOpen(leftBtn, leftDropdown, false);
    }
    if (!rightWrapper.contains(e.target)) {
      setPopupOpen(rightBtn, rightDropdown, false);
    }
    if (gbLeftWrapper && !gbLeftWrapper.contains(e.target)) {
      setPopupOpen(gbLeftBtn, gbLeftDropdown, false);
    }
    if (gbRightWrapper && !gbRightWrapper.contains(e.target)) {
      setPopupOpen(gbRightBtn, gbRightDropdown, false);
    }
  });

  const openSingleCarSwap = (targetSlot) => {
    cancelDuelTransition();
    closeAllMenusAndModals(true);
    activeRosterTarget = targetSlot;
    isHomeView = false;
    isVehicleView = false;
    smashPickerForceOpen = true;
    updateArena();
  };
  const swapLeftBtn = document.getElementById('swap-car-left-btn');
  const swapRightBtn = document.getElementById('swap-car-right-btn');
  if (swapLeftBtn) swapLeftBtn.addEventListener('click', () => openSingleCarSwap('p1'));
  if (swapRightBtn) swapRightBtn.addEventListener('click', () => openSingleCarSwap('p2'));
}

// Initialize Top Navigation Bar (Showroom | Vehicle | Compare)
function initTopNav() {
  const navCatalog = document.getElementById('nav-catalog-btn');
  const navShowroom = document.getElementById('nav-showroom-btn');
  const navCompare = document.getElementById('nav-compare-btn');
  const compareWrap = document.getElementById('nav-compare-wrap');
  const vehicleBackBtn = document.getElementById('vehicle-back-btn');

  if (navCatalog) {
    navCatalog.addEventListener('click', () => {
      cancelDuelTransition();
      closeAllMenusAndModals(true);
      isHomeView = false;
      isVehicleView = false;
      smashPickerForceOpen = true;
      updateArena();
    });
  }

  if (navShowroom) {
    navShowroom.addEventListener('click', () => {
      const targetId = getNavVehicleTargetId();
      if (!targetId) return;
      openVehicleView(targetId);
    });
  }

  if (vehicleBackBtn) {
    vehicleBackBtn.addEventListener('click', () => {
      cancelDuelTransition();
      closeAllMenusAndModals(true);
      isHomeView = false;
      isVehicleView = false;
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
      closeAllMenusAndModals(true);
      isHomeView = false;
      isVehicleView = false;
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

function closeAllMenusAndModals(skipHistory = false) {
  closeCarLightbox(skipHistory);
  closeStatDossier(skipHistory);
  closeEnginePickerModal(skipHistory);
  closeSearchHelpPopover();
  hideCompareHint();
  document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
  const brandWrap = document.getElementById('catalog-brand-dropdown');
  const brandTrig = document.getElementById('catalog-brand-trigger');
  if (brandWrap) brandWrap.classList.remove('open');
  if (brandTrig) brandTrig.setAttribute('aria-expanded', 'false');
  const sortWrap = document.getElementById('catalog-sort-dropdown');
  const sortTrig = document.getElementById('catalog-sort-trigger');
  if (sortWrap) sortWrap.classList.remove('open');
  if (sortTrig) sortTrig.setAttribute('aria-expanded', 'false');
  const vJumpWrap = document.getElementById('vehicle-car-jump-wrap');
  const vJumpTrig = document.getElementById('vehicle-car-jump-trigger');
  if (vJumpWrap) vJumpWrap.classList.remove('open');
  if (vJumpTrig) vJumpTrig.setAttribute('aria-expanded', 'false');
  const vEngWrap = document.getElementById('vehicle-engine-dropdown');
  const vEngTrig = document.getElementById('vehicle-engine-trigger');
  if (vEngWrap) vEngWrap.classList.remove('open');
  if (vEngTrig) vEngTrig.setAttribute('aria-expanded', 'false');
  const vGbWrap = document.getElementById('vehicle-gearbox-dropdown');
  const vGbTrig = document.getElementById('vehicle-gearbox-trigger');
  if (vGbWrap) vGbWrap.classList.remove('open');
  if (vGbTrig) vGbTrig.setAttribute('aria-expanded', 'false');
  [
    ['engine-btn-left', 'engine-dropdown-left'],
    ['engine-btn-right', 'engine-dropdown-right'],
    ['gearbox-btn-left', 'gearbox-dropdown-left'],
    ['gearbox-btn-right', 'gearbox-dropdown-right'],
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
function initAutoDuel() {
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
      isVehicleView = false;
      smashPickerForceOpen = false;
      updateArena();
    });
  }

  // Center AUTO DUEL brand logo -> Return to Homepage (and reset contender selection)
  const brandHomeBtn = document.getElementById('hud-brand-home-btn');
  if (brandHomeBtn) {
    const goHome = () => {
      if (isHomeView) return;
      cancelDuelTransition();
      isHomeView = true;
      isVehicleView = false;
      selectedLeftId = null;
      selectedRightId = null;
      selectedLeftEngineId = null;
      selectedRightEngineId = null;
      selectedLeftGearboxId = null;
      selectedRightGearboxId = null;
      smashPickerForceOpen = false;
      activeRosterTarget = 'p1';
      const smashStage = document.getElementById('smash-picker-stage');
      if (smashStage) smashStage.scrollTop = 0;
      closeAllMenusAndModals(true);
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

  // Close open market price popovers and Vehicle dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.price-info-anchor')) {
      document.querySelectorAll('.price-info-anchor.is-open').forEach((el) => el.classList.remove('is-open'));
    }
    const vJumpWrap = document.getElementById('vehicle-car-jump-wrap');
    const vJumpTrig = document.getElementById('vehicle-car-jump-trigger');
    if (vJumpWrap && !vJumpWrap.contains(e.target)) {
      vJumpWrap.classList.remove('open');
      if (vJumpTrig) vJumpTrig.setAttribute('aria-expanded', 'false');
    }
    const vEngWrap = document.getElementById('vehicle-engine-dropdown');
    const vEngTrig = document.getElementById('vehicle-engine-trigger');
    if (vEngWrap && !vEngWrap.contains(e.target)) {
      vEngWrap.classList.remove('open');
      if (vEngTrig) vEngTrig.setAttribute('aria-expanded', 'false');
    }
    const vGbWrap = document.getElementById('vehicle-gearbox-dropdown');
    const vGbTrig = document.getElementById('vehicle-gearbox-trigger');
    if (vGbWrap && !vGbWrap.contains(e.target)) {
      vGbWrap.classList.remove('open');
      if (vGbTrig) vGbTrig.setAttribute('aria-expanded', 'false');
    }
  });

  // Expand full car picture buttons & image wrappers
  document.querySelectorAll('.car-image-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('click', (e) => {
      if (e.target.closest('.duel-indepth-pill')) return;
      const side = wrapper.getAttribute('data-side');
      openCarLightbox(side);
    });
  });

  // Compare-tab left/right In-Depth pills -> open active contender + engine in Vehicle Stage
  document.querySelectorAll('[data-indepth-side]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const side = btn.getAttribute('data-indepth-side');
      if (side === 'left' && selectedLeftId) {
        openVehicleView(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId);
      } else if (side === 'right' && selectedRightId) {
        openVehicleView(selectedRightId, selectedRightEngineId, selectedRightGearboxId);
      }
    });
  });

  document.getElementById('lightbox-close-btn').addEventListener('click', () => closeCarLightbox());
  document.getElementById('lightbox-backdrop').addEventListener('click', () => closeCarLightbox());
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
  if (dossierCloseBtn) dossierCloseBtn.addEventListener('click', () => closeStatDossier());
  if (dossierBackdrop) dossierBackdrop.addEventListener('click', () => closeStatDossier());

  const engPickerCloseBtn = document.getElementById('engine-picker-close-btn');
  const engPickerBackdrop = document.getElementById('engine-picker-backdrop');
  if (engPickerCloseBtn) engPickerCloseBtn.addEventListener('click', () => closeEnginePickerModal());
  if (engPickerBackdrop) engPickerBackdrop.addEventListener('click', () => closeEnginePickerModal());

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
        if (activeDossierSide !== 'vehicle' && activeDossierStatKey && activeDossierSide !== 'left') {
          openStatDossier(activeDossierStatKey, 'left');
        }
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeDossierSide !== 'vehicle' && activeDossierStatKey && activeDossierSide !== 'right') {
          openStatDossier(activeDossierStatKey, 'right');
        }
        return;
      }
    }
    const engPickerModal = document.getElementById('engine-picker-modal');
    const isInput = e.target && /^(INPUT|TEXTAREA|SELECT)$/i.test(e.target.tagName);
    if (
      isVehicleView &&
      !isInput &&
      (!dossierModal || !dossierModal.classList.contains('open')) &&
      (!engPickerModal || !engPickerModal.classList.contains('open'))
    ) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepVehicleAngle(-1);
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepVehicleAngle(1);
        return;
      }
    }
    if (e.key === 'Escape') {
      closeAllMenusAndModals();
    }
  });

  window.addEventListener('resize', syncCarViewportAlignment);
  window.addEventListener('popstate', restoreHistoryState);

  initSpecHoverTooltip();
  initHomeDevBanner();
  updateArena();
}

document.addEventListener('DOMContentLoaded', initAutoDuel);
