// ============================================================================
// AUTO DUEL -- Shared Engine: vag-2.0-tdi-150
// Single source of truth for engine-owned data (durability dossier, torque,
// induction, injection, timing drive). Cars reference it via engineRef and keep
// only car-owned values (0-100, top speed, braking, towing, prices, tax, resale).
// ============================================================================
window.registerAutoDuelEngine({
  id: 'vag-2.0-tdi-150',
  definition: {
    engines: [
      {
        id: 'vag-2.0-tdi-150',
        fuelType: 'diesel',
        hp: 150,
        specOverrides: {
          forcedInduction: '@turbo',
          injection: '@commonRail',
          timingDrive: '@belt',
          peakTorque: '340 Nm @ 1,750 rpm',
          passingPunch: { en: 'Strong · Clean Mid-Range Pull', de: 'Kräftig · Souveräner Durchzug', ru: 'Уверенная тяга в середине' }
        },
        subStats: {
          powertrainDurability: {
            score: 8.2,
            badges: { en: ['CRBC / CRLB / DFFA Powertrain', 'Belt Drive'], de: ['CRBC / CRLB / DFFA Antrieb', 'Zahnriemen'], ru: ['Мотор CRBC / CRLB / DFFA', 'Ремень ГРМ'] },
            specBreakdown: {
              engineName: {
                specs: [
                  { k: 'fullName', v: { en: '2.0 TDI (150) I4 Turbo-Diesel', de: '2.0 TDI (150) Reihenvierzylinder Turbodiesel', ru: '2.0 TDI (150) R4 Турбодизель' } },
                  { k: 'engineCode', v: 'CRBC / CRLB / DFFA' },
                  { k: 'displacement', v: '1,968 cc · I4 Turbo-Diesel' },
                  { k: 'output', v: { en: '110 kW (150 HP)', de: '110 kW (150 PS)', ru: '110 кВт (150 л.с.)' } }
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
          midRangeTorquePassing: { score: 8.2, badges: { en: ['340 Nm @ 1,750', 'Strong · Clean Mid-Range Pull'], de: ['340 Nm @ 1,750', 'Kräftig · Souveräner Durchzug'], ru: ['340 Н·м @ 1,750', 'Уверенная тяга в середине'] } }
        }
      }
    ]
  }
});
