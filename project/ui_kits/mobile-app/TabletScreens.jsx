// TabletScreens.jsx — Native tablet layouts (1024×1366 portrait iPad)
// Principles (v2):
//  • Content lives in a CENTERED column (max-width ~720) with generous side gutters.
//  • Consistent top-to-bottom rhythm: Eyebrow · Title · Description · Content · CTA.
//  • Oracle uses the SAME dialog-box pattern as mobile (portrait above, bubble below).
//  • Nothing stretches edge-to-edge; there is visible breathing space.

const STARS_T = [
  { id: 'ignis',  name: 'Ignis',  label: 'Api',   desc: 'Berani, gagah, bertindak cepat.',     color: '#c83020', glow: 'rgba(200,48,32,0.5)' },
  { id: 'aqua',   name: 'Aqua',   label: 'Air',   desc: 'Empatis, mengalir, menghubungkan.',  color: '#2060c8', glow: 'rgba(32,96,200,0.5)' },
  { id: 'terra',  name: 'Terra',  label: 'Bumi',  desc: 'Teguh, teratur, membangun.',          color: '#309050', glow: 'rgba(48,144,80,0.5)' },
  { id: 'ventus', name: 'Ventus', label: 'Angin', desc: 'Ingin tahu, berpikir, merenungi.',    color: '#7030c0', glow: 'rgba(112,48,192,0.55)' },
];

const HOBBIES_T = [
  { id: 'fighter',  name: "The Fighter's Path",     img: 'fighter.png',           desc: 'Mereka yang menempa tubuh dan tekad' },
  { id: 'scholar',  name: "The Scholar's Scroll",   img: 'scholar.png',           desc: 'Mereka yang mencari kebenaran dunia' },
  { id: 'artist',   name: "The Artist's Brush",     img: 'artist.png',            desc: 'Mereka yang menciptakan dari imajinasi' },
  { id: 'guardian', name: "The Guardian's Lantern", img: 'guardians-lantern.png', desc: 'Mereka yang kekuatannya ada pada sesama' },
  { id: 'leader',   name: "The Leader's Crown",     img: 'leaders-crown.png',     desc: 'Mereka yang lahir untuk memimpin' },
  { id: 'keeper',   name: "The Keeper's Codex",     img: 'keepers-codex.png',     desc: 'Mereka yang menjaga segalanya tetap rapi' },
];

const TABLET_MAX = 760; // centered content column width

const tStyles = {
  stage: {
    width: 1024, height: 1366,
    position: 'relative', overflow: 'hidden',
    background: '#0a0a14',
    color: '#e8e0d0', fontFamily: "'Nunito', sans-serif",
  },
  statusBar: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 44, zIndex: 20,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 32px', color: '#e8e0d0',
    fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 600,
    pointerEvents: 'none',
  },
  header: {
    position: 'absolute', top: 44, left: 0, right: 0, zIndex: 12,
    padding: '18px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  backPill: {
    display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px 10px 12px',
    borderRadius: 999, border: '0.5px solid #2a2a40', background: 'rgba(20,20,30,0.6)',
    color: '#c8b890', fontSize: 13, fontWeight: 600, letterSpacing: '0.14em',
    textTransform: 'uppercase', fontFamily: "'Cinzel', serif", cursor: 'pointer',
  },
  stepPill: {
    padding: '8px 16px', borderRadius: 999,
    border: '0.5px solid #c8a030', background: 'rgba(200,160,48,0.08)',
    color: '#c8a030', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'Nunito', sans-serif",
  },
  wordmark: {
    fontFamily: "'Cinzel', serif", fontWeight: 700, color: '#c8a030',
    letterSpacing: '0.34em', textTransform: 'uppercase', fontSize: 14,
    textShadow: '0 0 18px rgba(200,160,48,0.35)',
  },
  // Content column — centered, capped width
  contentCol: {
    position: 'absolute',
    top: 140, left: 0, right: 0, bottom: 0,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '0 32px',
  },
  innerCol: {
    width: '100%', maxWidth: TABLET_MAX,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    flex: 1, minHeight: 0,
  },
  eyebrow: {
    fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
    color: '#887870', letterSpacing: '0.32em', textTransform: 'uppercase',
    marginBottom: 14, textAlign: 'center',
  },
  title: {
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 44,
    color: '#e8e0d0', letterSpacing: '0.06em', lineHeight: 1.1,
    margin: '0 0 14px', textAlign: 'center',
  },
  desc: {
    fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 18,
    color: '#a090d0', lineHeight: 1.55, margin: '0 0 36px',
    textAlign: 'center', maxWidth: 580,
  },
  ctaPrimary: {
    height: 58, padding: '0 44px', borderRadius: 12,
    background: '#c8a030', color: '#1a0e00',
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 14,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    border: 'none', cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0.5px rgba(232,208,144,0.55), 0 0 28px rgba(200,160,48,0.28)',
    minWidth: 280,
  },
  ctaDisabled: {
    background: 'rgba(200,160,48,0.22)', color: 'rgba(26,14,0,0.5)',
    cursor: 'not-allowed', boxShadow: 'none',
  },
};

// ── Shared atmospheric backdrop ──
function TabletBackdrop() {
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 50% 40%, rgba(200,160,48,0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 15% 10%, rgba(90,58,138,0.12) 0%, transparent 55%),
          radial-gradient(ellipse at 88% 92%, rgba(200,96,48,0.07) 0%, transparent 55%),
          linear-gradient(180deg, #0a0a14 0%, #14141e 50%, #0a0a14 100%)
        `,
      }} />
      <svg viewBox="0 0 1024 1366" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.55 }}>
        {Array.from({ length: 80 }).map((_, i) => {
          const seed = i * 9301 + 49297;
          const x = (seed * 131) % 1024;
          const y = (seed * 257) % 1366;
          const r = 0.6 + ((seed * 53) % 100) / 100 * 1.3;
          const o = 0.15 + ((seed * 37) % 100) / 100 * 0.5;
          return <circle key={i} cx={x} cy={y} r={r} fill="#e8d090" opacity={o} />;
        })}
      </svg>
      <svg viewBox="0 0 1024 1366" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08 }}>
        <g stroke="#c8a030" strokeWidth="0.8" fill="none">
          <path d="M 140 200 L 330 120 L 480 260 L 640 180 L 820 310" />
          <path d="M 860 900 L 700 1000 L 820 1130 L 960 1060" />
          <path d="M 80 1000 L 240 1120 L 400 1040 L 560 1180" />
        </g>
      </svg>
    </React.Fragment>
  );
}

function TabletStatusBar() {
  return (
    <div style={tStyles.statusBar}>
      <span>9:41</span>
      <span style={tStyles.wordmark}>✦ Magna Via ✦</span>
      <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx="1"/><rect x="4" y="4" width="3" height="6" rx="1"/><rect x="8" y="2" width="3" height="8" rx="1"/><rect x="12" y="0" width="3" height="10" rx="1"/></svg>
        <span style={{ fontSize: 13, fontWeight: 600 }}>100%</span>
        <svg width="24" height="11" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="1" width="18" height="8" rx="2"/><rect x="2" y="2.5" width="15" height="5" rx="1" fill="currentColor"/><rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>
      </span>
    </div>
  );
}

function TabletHeader({ step, total, onBack, label }) {
  return (
    <div style={tStyles.header}>
      <div style={tStyles.backPill} onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Kembali
      </div>
      <div style={tStyles.stepPill}>{label ? label : `Bab ${step} · ${total}`}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TABLET — ORACLE INTRO
// Mirror of mobile pattern: portrait above, dialog bubble below,
// CTA at the bottom. Centered, max-width column.
// ─────────────────────────────────────────────────────────────
function TabletOracle({ onBack, onAdvance }) {
  return (
    <div style={tStyles.stage}>
      <TabletBackdrop />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 38%, rgba(90,58,138,0.45) 0%, rgba(90,58,138,0.12) 38%, rgba(10,10,20,0) 70%)',
        pointerEvents: 'none',
      }} />
      <TabletStatusBar />
      <TabletHeader step="I" total="V" onBack={onBack} />

      <div style={{
        position: 'absolute', top: 130, left: 0, right: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 32px 60px',
      }}>
        <div style={{
          width: '100%', maxWidth: 640,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          flex: 1, minHeight: 0,
        }}>
          {/* Portrait — flex:1 so dialog & CTA anchor to bottom */}
          <div style={{
            flex: 1, width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 0,
            marginBottom: 24,
          }}>
            <img src="../../assets/characters/cenayang-portrait.png" alt=""
                 style={{
                   maxHeight: '100%', maxWidth: 420, objectFit: 'contain',
                   filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.75)) drop-shadow(0 0 60px rgba(200,160,48,0.12))',
                 }} />
          </div>

          {/* Dialog box — mirrors mobile */}
          <div style={{
            width: '100%',
            background: 'linear-gradient(180deg, rgba(30,20,50,0.92), rgba(20,14,36,0.96))',
            border: '0.5px solid #3a2a60',
            borderRadius: 18,
            padding: '20px 24px 18px',
            boxShadow: '0 0 48px rgba(90,58,138,0.32), 0 14px 36px rgba(0,0,0,0.55)',
            marginBottom: 22,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 16, overflow: 'hidden',
                border: '0.5px solid #c8a030', boxShadow: '0 0 10px rgba(200,160,48,.35)',
              }}>
                <img src="../../assets/characters/cenayang-avatar.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
              </div>
              <span style={{
                fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 13,
                color: '#c8a030', letterSpacing: '0.2em', textTransform: 'uppercase',
              }}>Cenayang</span>
              <span style={{
                marginLeft: 'auto', fontFamily: "'Nunito', sans-serif", fontSize: 10,
                fontWeight: 700, color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>Pesan 1 / 3</span>
            </div>
            <p style={{
              fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 19,
              color: '#e8d4b0', lineHeight: 1.55, margin: 0,
            }}>
              “Selamat datang, Pejuang. Arcadia telah lama menanti kedatanganmu. Mari kita baca bintang-bintang yang menuntun langkahmu…”
            </p>
            <div style={{
              marginTop: 14, textAlign: 'right',
              fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 600,
              color: '#887870', letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Tap untuk lanjut</div>
          </div>

          {/* CTA */}
          <button onClick={onAdvance} style={{ ...tStyles.ctaPrimary, width: '100%', maxWidth: 360 }}>
            Teruskan
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TABLET — BIRTH STAR SELECT
// Layout: Eyebrow · Title · Description · 2×2 card grid · CTA.
// All centered, capped at 760px wide.
// ─────────────────────────────────────────────────────────────
function TabletBirthStar({ onBack, onAdvance }) {
  const [sel, setSel] = React.useState('ignis');

  return (
    <div style={tStyles.stage}>
      <TabletBackdrop />
      <TabletStatusBar />
      <TabletHeader step="II" total="V" onBack={onBack} />

      <div style={tStyles.contentCol}>
        <div style={tStyles.innerCol}>
          <div style={tStyles.eyebrow}>Bab I · Bintang Lahirmu</div>
          <h1 style={tStyles.title}>Pilih Bintangmu</h1>
          <p style={tStyles.desc}>
            Keempat elemen ini menuntun pejuang-pejuang Arcadia. Mana yang berdenyut di dalammu?
          </p>

          {/* 2×2 grid — width-capped, aspect-stable */}
          <div style={{
            width: '100%',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 20, marginBottom: 36,
          }}>
            {STARS_T.map(s => {
              const isSel = s.id === sel;
              return (
                <div key={s.id}
                     onClick={() => setSel(s.id)}
                     style={{
                       position: 'relative', aspectRatio: '1 / 1.12',
                       background: '#14141e',
                       border: isSel ? `1.5px solid ${s.color}` : '0.5px solid #2a2a40',
                       borderRadius: 16,
                       overflow: 'hidden', cursor: 'pointer',
                       transition: 'all 280ms cubic-bezier(.4,0,.2,1)',
                       transform: isSel ? 'translateY(-4px)' : 'none',
                       boxShadow: isSel ? `0 0 32px ${s.glow}` : 'none',
                     }}>
                  <img src={`../../assets/birth-stars/${s.id}.png`}
                       alt=""
                       style={{
                         position: 'absolute', inset: 0, width: '100%', height: '100%',
                         objectFit: 'cover',
                         transform: isSel ? 'scale(1.04)' : 'scale(1)',
                         transition: 'transform 420ms cubic-bezier(.4,0,.2,1)',
                       }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,20,0.96) 0%, rgba(10,10,20,0.3) 55%, rgba(10,10,20,0) 100%)',
                  }} />
                  <div style={{ position: 'absolute', left: 18, right: 18, bottom: 16 }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 22,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: isSel ? s.color : '#e8e0d0',
                      textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                    }}>{s.name}</div>
                    <div style={{
                      fontFamily: "'Nunito', sans-serif", fontSize: 12,
                      color: '#c8b890', marginTop: 3, lineHeight: 1.35,
                    }}>{s.label} · {s.desc}</div>
                  </div>
                  {isSel && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      width: 28, height: 28, borderRadius: 14,
                      background: s.color, color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 14,
                      boxShadow: `0 0 12px ${s.glow}`,
                    }}>✓</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA — bottom of centered column */}
          <button onClick={() => onAdvance && onAdvance(sel)}
                  style={{ ...tStyles.ctaPrimary, width: '100%', maxWidth: 420 }}>
            Kunci Bintangmu ✦
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TABLET — HOBBY CARDS
// Mirror desktop's layout: Title · Desc · horizontal scroll row of cards · CTA.
// ─────────────────────────────────────────────────────────────
function TabletHobbyCards({ onBack, onAdvance }) {
  const [sel, setSel] = React.useState(['fighter', 'scholar']);
  const toggle = (id) => setSel(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : (prev.length >= 3 ? prev : [...prev, id])
  );

  return (
    <div style={tStyles.stage}>
      <TabletBackdrop />
      <TabletStatusBar />
      <TabletHeader onBack={onBack} label={`${sel.length} / 3 dipilih`} />

      <div style={{
        position: 'absolute', top: 130, left: 0, right: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 0 50px',
      }}>
        {/* Title column is capped; card scroll is full-width for room */}
        <div style={{ width: '100%', maxWidth: 780, padding: '0 32px', textAlign: 'center' }}>
          <div style={tStyles.eyebrow}>Bab II · Kartu Hobi</div>
          <h1 style={{ ...tStyles.title, fontSize: 44 }}>Pilih Jalurmu</h1>
          <p style={tStyles.desc}>
            Pilih hingga tiga kartu yang paling mencerminkan siapa dirimu.
          </p>
        </div>

        {/* Horizontally scrollable card track */}
        <div style={{
          width: '100%', flex: 1, minHeight: 0,
          display: 'flex', alignItems: 'center',
          overflowX: 'auto', overflowY: 'hidden',
          padding: '16px 48px 24px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#c8a030 #14141e',
        }}>
          <div style={{
            display: 'flex', gap: 18, margin: '0 auto', paddingRight: 8,
          }}>
            {HOBBIES_T.map(h => {
              const isSel = sel.includes(h.id);
              const disabled = !isSel && sel.length >= 3;
              return (
                <div key={h.id}
                     onClick={() => !disabled && toggle(h.id)}
                     style={{
                       position: 'relative', flexShrink: 0,
                       width: 220, height: 320,
                       background: '#14141e',
                       border: isSel ? '1.5px solid #c8a030' : '0.5px solid #2a2a40',
                       borderRadius: 14,
                       overflow: 'hidden',
                       cursor: disabled ? 'not-allowed' : 'pointer',
                       opacity: disabled ? 0.4 : 1,
                       transition: 'all 220ms',
                       boxShadow: isSel ? '0 0 26px rgba(200,160,48,0.42)' : 'none',
                       transform: isSel ? 'translateY(-6px)' : 'none',
                     }}>
                  <img src={`../../assets/hobbies/${h.img}`}
                       alt=""
                       style={{
                         position: 'absolute', inset: 0, width: '100%', height: '100%',
                         objectFit: 'cover', objectPosition: 'center top',
                         filter: isSel ? 'brightness(1.1) saturate(1.1)' : 'brightness(0.95)',
                       }} />
                  <div style={{
                    position: 'absolute', left: 0, right: 0, bottom: 0, height: '42%',
                    background: 'linear-gradient(to top, rgba(10,10,20,0.97) 10%, rgba(10,10,20,0) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', left: 12, right: 12, bottom: 12, textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 12,
                      color: isSel ? '#e8d090' : '#e8e0d0', letterSpacing: '0.08em',
                      textTransform: 'uppercase', lineHeight: 1.2,
                      textShadow: '0 2px 6px rgba(0,0,0,0.9)',
                    }}>{h.name}</div>
                    <div style={{
                      fontFamily: "'Nunito', sans-serif", fontSize: 10,
                      color: '#887870', marginTop: 6, lineHeight: 1.35,
                    }}>{h.desc}</div>
                  </div>
                  {isSel && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      width: 24, height: 24, borderRadius: 12,
                      background: '#c8a030', color: '#1a0e00',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 13,
                      boxShadow: '0 0 10px rgba(200,160,48,0.6)',
                    }}>✓</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <button onClick={() => sel.length && onAdvance && onAdvance(sel)}
                disabled={sel.length === 0}
                style={{
                  ...tStyles.ctaPrimary,
                  ...(sel.length ? {} : tStyles.ctaDisabled),
                  width: '100%', maxWidth: 420,
                  marginTop: 18,
                }}>
          {sel.length === 0 ? 'Pilih setidaknya satu' : 'Lanjutkan Perjalanan'}
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { TabletBirthStar, TabletHobbyCards, TabletOracle });
