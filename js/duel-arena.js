// ============================================================================
// AUTO DUEL — Duel Viewports, Fused Console, Engineering Dossier & Lightbox
// ============================================================================

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

  ensureVehiclesLoaded([selectedLeftId, selectedRightId]);
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

      const finishDuelReveal = () => {
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
      };

      if (needsVehicleHydration(selectedLeftId) || needsVehicleHydration(selectedRightId)) {
        ensureVehiclesLoaded([selectedLeftId, selectedRightId]).then(finishDuelReveal);
      } else {
        finishDuelReveal();
      }
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
  const SHOW_DUEL_BUYER_FIT_BTN = false;
  const hasBuyerFit = Boolean(getBuyerFit(car));

  const buyerFitBtnHtml = SHOW_DUEL_BUYER_FIT_BTN && hasBuyerFit
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


function buildFusedDepMiniGraphHtml(car, m, side, ui) {
  const isLeft = side === 'left';
  const sideCls = isLeft ? 'is-c1' : 'is-c2';
  const sideTag = isLeft ? 'C1' : 'C2';
  const accentColor = isLeft ? 'var(--p1-accent)' : 'var(--p2-accent)';
  const gradId = isLeft ? 'fusedDepAreaC1' : 'fusedDepAreaC2';

  const { startYr, todayYr, age, msrp, used, maxVal, valueAt, futureVal } = computeDepreciationCurveModel(car, m);

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
      readout: `${ui.priceCurrentLabel}: ~${formatEuroAmount(used)} (${m.retainedPct}%)`,
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
      : cmp.isS
        ? `<span class="stat-stock-val score-s" title="S (9.0–9.5)">✦ ${val.toFixed(1)}</span>`
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
          const rowsMarkup = specRowDefs
            .map((row) => {
              const lRaw = leftCar.specs[row.key];
              const rRaw = rightCar.specs[row.key];
              const lSpecHtml = resolveLocalizedSpecVal(lRaw);
              const rSpecHtml = resolveLocalizedSpecVal(rRaw);

              const rowHint = SPEC_ROW_HINTS[row.key] ? (SPEC_ROW_HINTS[row.key][currentLang] || SPEC_ROW_HINTS[row.key].en) : '';

              const rowLabelTipAttrs = rowHint
                ? `data-tip-title="${escapeHtmlAttr(row.label[currentLang])}" data-tip-body="${escapeHtmlAttr(rowHint)}"`
                : '';

              return `
                <div class="fused-spec-row">
                  <div class="fused-spec-val fused-spec-left ${leftHasDossier ? 'has-dossier' : ''}" ${leftHasDossier ? `data-dossier-stat="${sub.key}" data-side="left"` : ''}><span class="fused-spec-text">${lSpecHtml}</span></div>
                  <div class="fused-spec-label ${rowHint ? 'has-tip' : ''}" ${rowLabelTipAttrs}>${row.label[currentLang]}</div>
                  <div class="fused-spec-val fused-spec-right ${rightHasDossier ? 'has-dossier' : ''}" ${rightHasDossier ? `data-dossier-stat="${sub.key}" data-side="right"` : ''}><span class="fused-spec-text">${rSpecHtml}</span></div>
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

        const weightPct = Math.round((typeof sub.weight === 'number' ? sub.weight : 1 / pillar.subRatings.length) * 100);
        const subTipBody = `${sub.unitHint[currentLang]} • ${ui.subWeightShareLabel}: ${weightPct}%`;
        const subTitleTipAttrs = `data-tip-title="${escapeHtmlAttr(sub.label[currentLang])}" data-tip-body="${escapeHtmlAttr(subTipBody)}"`;

        return `
          <div class="sub-stat-row fused-sub-row">
            <div class="fused-sub-header">
              <div class="fused-sub-score fused-sub-score-left ${leftHasDossier ? 'has-dossier' : ''}" ${leftHasDossier ? `data-dossier-stat="${sub.key}" data-side="left"` : ''}>
                <span class="diff-arrow ${lCmp.valueColorClass}">${lCmp.indicatorSymbol}</span>
                ${formatScoreHtml(lVal, lCmp)}
                ${makeInfoBtn('left', leftHasDossier)}
              </div>
              <div class="fused-sub-title has-tip" ${subTitleTipAttrs}>
                <span class="stat-name">${sub.label[currentLang]}</span><span class="sub-weight-tag">${weightPct}%</span>
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
    const leftCar = getCarById(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId);
    const rightCar = getCarById(selectedRightId, selectedRightEngineId, selectedRightGearboxId);
    const prevList = statsCenterEl.querySelector('.stats-rows-list');
    const prevScrollTop = prevList ? prevList.scrollTop : 0;

    statsCenterEl.innerHTML = buildFusedStatConsoleHtml(leftCar, rightCar);

    const nextList = statsCenterEl.querySelector('.stats-rows-list');
    if (nextList) nextList.scrollTop = prevScrollTop;

    bindStatColumnEvents();
    return;
  }

}


function renderEngineSelector(side, resolvedCar) {
  const ui = t();
  const pillSpan = document.getElementById(side === 'left' ? 'spec-pill-left' : 'spec-pill-right');
  const dropdown = document.getElementById(
    side === 'left' ? 'engine-dropdown-left' : 'engine-dropdown-right'
  );
  const btn = document.getElementById(side === 'left' ? 'engine-btn-left' : 'engine-btn-right');

  if (!pillSpan || !dropdown || !btn) return;

  pillSpan.textContent = formatPowerUnit(resolvedCar.engineBadge);

  const categories = [
    { key: 'hybrid', label: ui.engineCategoryHybrid },
    { key: 'petrol', label: ui.engineCategoryPetrol },
    { key: 'diesel', label: ui.engineCategoryDiesel }
  ];

  const engineGroupsHtml = categories
    .map((cat) => {
      const enginesInCat = sortEnginesByDisplacement(
        resolvedCar.engines.filter((eng) => getEngineCategory(eng) === cat.key)
      );

      if (enginesInCat.length === 0) return '';

      const itemsHtml = enginesInCat
        .map((eng) => {
          const candidateCar = getCarById(resolvedCar.id, eng.id);
          const isSelected = eng.id === resolvedCar.selectedEngineId;
          const innerHtml = buildEngineOptionInnerHtml(
            resolvedCar.id,
            resolvedCar.defaultEngineId,
            eng,
            candidateCar,
            ui,
            false
          );

          return `
            <button
              type="button"
              class="engine-option-btn ${isSelected ? 'active' : ''}"
              data-engine-id="${eng.id}"
            >
              ${innerHtml}
            </button>
          `;
        })
        .join('');

      return `
        <div class="engine-custom-group-box fuel-${cat.key}">
          <div class="engine-custom-group">${cat.label}</div>
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
        selectedLeftGearboxId = null;
      } else {
        selectedRightEngineId = chosenEngineId;
        selectedRightGearboxId = null;
      }
      if (selectedLeftId && selectedRightId) {
        smashPickerForceOpen = false;
      }
      setPopupOpen(btn, dropdown, false);
      updateArena();
    });
  });
}

function renderGearboxSelector(side, resolvedCar) {
  const ui = t();
  const iconSlot = document.getElementById(side === 'left' ? 'gearbox-icon-left' : 'gearbox-icon-right');
  const pillSpan = document.getElementById(side === 'left' ? 'gearbox-pill-left' : 'gearbox-pill-right');
  const dropdown = document.getElementById(
    side === 'left' ? 'gearbox-dropdown-left' : 'gearbox-dropdown-right'
  );
  const btn = document.getElementById(side === 'left' ? 'gearbox-btn-left' : 'gearbox-btn-right');

  if (!pillSpan || !dropdown || !btn) return;

  const gearboxes = resolvedCar.availableGearboxes || [];
  const activeGb = resolvedCar.selectedGearbox || gearboxes[0];
  if (!activeGb) return;

  if (iconSlot) {
    iconSlot.innerHTML = getGearboxIconSvg(activeGb.category);
  }
  pillSpan.textContent = resolveGearboxText(activeGb.shortLabel || activeGb.label);

  const defaultGbId = resolvedCar.defaultGearboxId || (gearboxes[0] && gearboxes[0].id);
  const groupsHtml = buildGearboxMenuGroupsHtml(
    resolvedCar.id,
    resolvedCar.selectedEngineId,
    gearboxes,
    resolvedCar.selectedGearboxId,
    defaultGbId,
    ui,
    { optionClass: 'engine-option-btn', dataAttr: 'data-gearbox-id' }
  );

  dropdown.innerHTML = `
    <div class="engine-dropdown-header">${ui.selectGearboxHeader}</div>
    ${groupsHtml}
  `;

  dropdown.querySelectorAll('[data-gearbox-id]').forEach((optBtn) => {
    optBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosenGbId = optBtn.getAttribute('data-gearbox-id');
      if (side === 'left') {
        selectedLeftGearboxId = chosenGbId;
      } else {
        selectedRightGearboxId = chosenGbId;
      }
      setPopupOpen(btn, dropdown, false);
      updateArena();
    });
  });
}

// Render Car Selection Menu Button at bottom of center arena

let lightboxGallery = [];
let lightboxIndex = 1;
let lightboxCarName = '';

// Showroom angle maps (CAR_AVAILABLE_ANGLES, CAR_MIRRORED_ANGLES) live in data/manifest.js

function getCarGallery(car) {
  const ui = t();
  const extMatch = String(car.image || '').match(/\.(webp|png|jpe?g)$/i);
  const ext = extMatch ? extMatch[0].toLowerCase() : '.webp';
  const basePath = String(car.image || '').replace(/\.(webp|png|jpe?g)$/i, '');
  const mirroredMap = CAR_MIRRORED_ANGLES[car.id] || {};
  const allAngles = {
    front: { src: `${basePath}-front${ext}`, label: ui.angleFront, mirrored: Boolean(mirroredMap.front) },
    frontSide: { src: car.image, label: ui.angleFrontSide, mirrored: Boolean(mirroredMap.frontSide) },
    side: { src: `${basePath}-side${ext}`, label: ui.angleSide, mirrored: Boolean(mirroredMap.side) },
    sideRear: { src: `${basePath}-side-rear${ext}`, label: ui.angleSideRear, mirrored: Boolean(mirroredMap.sideRear) },
    rear: { src: `${basePath}-rear${ext}`, label: ui.angleRear, mirrored: Boolean(mirroredMap.rear) }
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
function openCarLightbox(side, customCar = null, startAngleIdx = null) {
  const ui = t();
  const car =
    customCar ||
    (side === 'left'
      ? getCarById(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId)
      : getCarById(selectedRightId, selectedRightEngineId, selectedRightGearboxId));
  if (!car) return;
  const { piClassLabel, piScore } = calculateOverallIndex(car);
  const lightbox = document.getElementById('car-lightbox');
  const badge = document.getElementById('lightbox-badge');
  const title = document.getElementById('lightbox-title');
  const spec = document.getElementById('lightbox-spec');

  if (customCar) {
    const baseCar = getBaseCarById(car.id);
    badge.textContent = `#${baseCar.number} · ${getCarTypeLabel(getCarType(baseCar))}`;
    badge.className = 'lightbox-badge p1-badge';
  } else {
    badge.textContent = side === 'left' ? ui.car1Tag : ui.opponentTag;
    badge.className = `lightbox-badge ${side === 'left' ? 'p1-badge' : 'p2-badge'}`;
  }
  title.textContent = car.fullName;
  spec.textContent = `${piClassLabel} (${piScore}/10) • ${formatPowerUnit(car.engineBadge)} • ${car.perkLabel[currentLang]}`;

  lightboxCarName = car.fullName;
  lightboxGallery = getCarGallery(car);
  const frontSideIdx = lightboxGallery.findIndex((g) => g.src === car.image);
  lightboxIndex =
    typeof startAngleIdx === 'number' && startAngleIdx >= 0 && startAngleIdx < lightboxGallery.length
      ? startAngleIdx
      : frontSideIdx >= 0
        ? frontSideIdx
        : 0;
  renderLightboxSlide();

  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  pushModalHistory('lightbox');
}

function closeCarLightbox(skipHistory = false) {
  const lightbox = document.getElementById('car-lightbox');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  popModalHistory('lightbox', skipHistory);
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
      ? (selectedLeftId ? getCarById(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId) : null)
      : (selectedRightId ? getCarById(selectedRightId, selectedRightEngineId, selectedRightGearboxId) : null);
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
          <span class="mini-p-badge ${side === 'right' ? 'p2-badge' : 'p1-badge'}">${side === 'vehicle' ? `#${currentCar.number}` : side === 'left' ? 'C1' : 'C2'}</span>
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
  pushModalHistory('dossier');
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
    side === 'vehicle'
      ? (vehicleViewCarId ? getCarById(vehicleViewCarId, vehicleViewEngineId, vehicleViewGearboxId) : null)
      : side === 'left'
        ? (selectedLeftId ? getCarById(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId) : null)
        : (selectedRightId ? getCarById(selectedRightId, selectedRightEngineId, selectedRightGearboxId) : null);
  if (!currentCar) return;
  const oppCar =
    side === 'vehicle'
      ? null
      : side === 'left'
        ? (selectedRightId ? getCarById(selectedRightId, selectedRightEngineId, selectedRightGearboxId) : null)
        : (selectedLeftId ? getCarById(selectedLeftId, selectedLeftEngineId, selectedLeftGearboxId) : null);

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
  const isS = subObj.score >= 9.0 && subObj.score < 9.6;
  const scoreDisplayHtml = isSPlus
    ? `<span class="stat-stock-val score-s-plus" title="S+ (9.6–10)">✦ ${subObj.score.toFixed(1)}</span>`
    : isS
      ? `<span class="stat-stock-val score-s" title="S (9.0–9.5)">✦ ${subObj.score.toFixed(1)}</span>`
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
      <div class="dossier-side-switcher" role="tablist" aria-label="${escapeHtmlAttr(t().ariaSwitchContender)}">
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
        <span class="mini-p-badge ${side === 'right' ? 'p2-badge' : 'p1-badge'}">${side === 'vehicle' ? `#${currentCar.number}` : side === 'left' ? 'C1' : 'C2'}</span>
        <div class="dossier-car-text">
          <div class="dossier-car-name">${currentCar.fullName}</div>
          <div class="dossier-engine-badge">${currentCar.engineBadge}</div>
        </div>
      </div>
      <div class="dossier-rating-block">
        <div class="dossier-score-chip ${isSPlus ? 'is-s-plus' : isS ? 'is-s' : ''}">
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
  pushModalHistory('dossier');
}

function closeStatDossier(skipHistory = false) {
  const modal = document.getElementById('stat-dossier-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  popModalHistory('dossier', skipHistory);
}

// Synchronize the height of both car traits trays so the car with fewer lines
// matches the taller side while letting .car-viewport CSS padding control top spacing:
// 1. C1/C2 engine bar -> 2. #x watermark -> 3. car picture -> 4. pros/cons.
function syncCarViewportAlignment() {
  const traitsLeft = document.getElementById('traits-left');
  const traitsRight = document.getElementById('traits-right');
  const viewportLeft = document.querySelector('.viewport-left');
  const viewportRight = document.querySelector('.viewport-right');
  if (!traitsLeft || !traitsRight) return;

  if (viewportLeft && viewportRight) {
    viewportLeft.style.paddingTop = '';
    viewportRight.style.paddingTop = '';
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

// Catalog Showcase Helpers
