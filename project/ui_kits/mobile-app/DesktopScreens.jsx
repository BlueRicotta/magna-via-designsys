// DesktopScreens.jsx — Native desktop layouts (1440×900)
// Principles (v2):
//  • Content lives in a CENTERED column (max-width ~1100) with visible side gutters.
//  • Consistent top-to-bottom rhythm: Eyebrow · Title · Description · Content · CTA.
//  • Oracle uses the SAME dialog-box pattern as mobile/tablet (portrait + bubble + CTA).
//  • Card heights reduced; no full-width stretching.

const STARS_D = [
  { id: 'ignis',  name: 'Ignis',  label: 'Api',   desc: 'Berani, gagah, bertindak cepat.',     color: '#c83020', glow: 'rgba(200,48,32,0.5)' },
  { id: 'aqua',   name: 'Aqua',   label: 'Air',   desc: 'Empatis, mengalir, menghubungkan.',  color: '#2060c8', glow: 'rgba(32,96,200,0.5)' },
  { id: 'terra',  name: 'Terra',  label: 'Bumi',  desc: 'Teguh, teratur, membangun.',          color: '#309050', glow: 'rgba(48,144,80,0.5)' },
  { id: 'ventus', name: 'Ventus', label: 'Angin', desc: 'Ingin tahu, berpikir, merenungi.',    color: '#7030c0', glow: 'rgba(112,48,192,0.55)' },
];

const HOBBIES_D = [
  { id: 'fighter',  name: "The Fighter's Path",     img: 'fighter.png',           desc: 'Mereka yang menempa tubuh dan tekad' },
  { id: 'scholar',  name: "The Scholar's Scroll",   img: 'scholar.png',           desc: 'Mereka yang mencari kebenaran dunia' },
  { id: 'artist',   name: "The Artist's Brush",     img: 'artist.png',            desc: 'Mereka yang menciptakan dari imajinasi' },
  { id: 'guardian', name: "The Guardian's Lantern", img: 'guardians-lantern.png', desc: 'Mereka yang kekuatannya ada pada sesama' },
  { id: 'leader',   name: "The Leader's Crown",     img: 'leaders-crown.png',     desc: 'Mereka yang lahir untuk memimpin' },
  { id: 'keeper',   name: "The Keeper's Codex",     img: 'keepers-codex.png',     desc: 'Mereka yang menjaga segalanya tetap rapi' },
];

const DESK_MAX = 1080;

const dStyles = {
  stage: {
    width: 1440, height: 900,
    position: 'relative', overflow: 'hidden',
    background: '#0a0a14',
    color: '#e8e0d0', fontFamily: "'Nunito', sans-serif",
  },
  topbar: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 72, zIndex: 20,
    padding: '0 56px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: '0.5px solid rgba(200,160,48,0.12)',
    background: 'linear-gradient(180deg, rgba(10,10,20,0.85), rgba(10,10,20,0.55))',
    backdropFilter: 'blur(8px)',
  },
  wordmark: {
    display: 'flex', alignItems: 'center', gap: 14,
    fontFamily: "'Cinzel', serif", fontWeight: 700, color: '#c8a030',
    letterSpacing: '0.34em', textTransform: 'uppercase', fontSize: 15,
  },
  nav: {
    display: 'flex', alignItems: 'center', gap: 40,
    fontFamily: "'Cinzel', serif", fontSize: 11, fontWeight: 600,
    letterSpacing: '0.26em', textTransform: 'uppercase',
  },
  navItem: { color: '#6a6070', cursor: 'pointer' },
  navItemActive: {
    color: '#c8a030',
    borderBottom: '0.5px solid #c8a030',
    paddingBottom: 4,
  },
  profilePill: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '8px 16px', borderRadius: 999,
    border: '0.5px solid rgba(200,160,48,0.3)',
    background: 'rgba(200,160,48,0.05)',
    color: '#c8b890', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em',
    fontFamily: "'Cinzel', serif", textTransform: 'uppercase',
  },
  // Centered content column
  contentCol: {
    position: 'absolute',
    top: 72, left: 0, right: 0, bottom: 0,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '0 56px',
  },
  innerCol: {
    width: '100%', maxWidth: DESK_MAX,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    flex: 1, minHeight: 0,
    paddingTop: 36, paddingBottom: 40,
  },
  eyebrow: {
    fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
    color: '#887870', letterSpacing: '0.34em', textTransform: 'uppercase',
    marginBottom: 12, textAlign: 'center',
  },
  title: {
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 48,
    color: '#e8e0d0', letterSpacing: '0.08em', lineHeight: 1.08,
    margin: '0 0 14px', textAlign: 'center',
  },
  desc: {
    fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 18,
    color: '#a090d0', lineHeight: 1.55, margin: '0 0 32px',
    textAlign: 'center', maxWidth: 620,
  },
  ctaPrimary: {
    height: 56, padding: '0 40px', borderRadius: 12,
    background: '#c8a030', color: '#1a0e00',
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 13,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    border: 'none', cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0.5px rgba(232,208,144,0.55), 0 0 28px rgba(200,160,48,0.26)',
  },
  ctaDisabled: {
    background: 'rgba(200,160,48,0.22)', color: 'rgba(26,14,0,0.5)',
    cursor: 'not-allowed', boxShadow: 'none',
  },
};

// ── Backdrop ──
function DesktopBackdrop() {
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 50% 30%, rgba(200,160,48,0.06) 0%, transparent 55%),
          radial-gradient(ellipse at 10% 10%, rgba(90,58,138,0.12) 0%, transparent 55%),
          radial-gradient(ellipse at 92% 95%, rgba(200,96,48,0.08) 0%, transparent 55%),
          linear-gradient(180deg, #0a0a14 0%, #14141e 55%, #0a0a14 100%)
        `,
      }} />
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.55 }}>
        {Array.from({ length: 90 }).map((_, i) => {
          const seed = i * 9301 + 49297;
          const x = (seed * 131) % 1440;
          const y = (seed * 257) % 900;
          const r = 0.6 + ((seed * 53) % 100) / 100 * 1.2;
          const o = 0.15 + ((seed * 37) % 100) / 100 * 0.5;
          return <circle key={i} cx={x} cy={y} r={r} fill="#e8d090" opacity={o} />;
        })}
      </svg>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08 }}>
        <g stroke="#c8a030" strokeWidth="0.7" fill="none">
          <path d="M 120 160 L 330 100 L 480 240 L 640 160 L 820 280" />
          <path d="M 1080 620 L 1220 540 L 1340 680 L 1260 780" />
        </g>
      </svg>
    </React.Fragment>
  );
}

function DesktopTopBar({ active = 'oracle' }) {
  return (
    <div style={dStyles.topbar}>
      <div style={dStyles.wordmark}>
        <span style={{ color: '#c8a030' }}>✦</span> Magna Via <span style={{ color: '#c8a030' }}>✦</span>
      </div>
      <nav style={dStyles.nav}>
        <span style={{ ...dStyles.navItem, ...(active === 'oracle' ? dStyles.navItemActive : {}) }}>Cenayang</span>
        <span style={{ ...dStyles.navItem, ...(active === 'star' ? dStyles.navItemActive : {}) }}>Bintang Lahir</span>
        <span style={{ ...dStyles.navItem, ...(active === 'hobby' ? dStyles.navItemActive : {}) }}>Kartu Hobi</span>
        <span style={dStyles.navItem}>Kuis Jiwa</span>
        <span style={dStyles.navItem}>Gulungan</span>
      </nav>
      <div style={dStyles.profilePill}>
        <span style={{ width: 8, height: 8, borderRadius: 4, background: '#c8a030', boxShadow: '0 0 6px #c8a030' }} />
        Pejuang Baru
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP — ORACLE INTRO (dialog-box pattern)
// Portrait centered above, dialog bubble below, CTA at bottom.
// Capped content width; whitespace on both sides.
// ─────────────────────────────────────────────────────────────
function DesktopOracle({ onAdvance }) {
  return (
    <div style={dStyles.stage}>
      <DesktopBackdrop />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(90,58,138,0.42) 0%, rgba(90,58,138,0.1) 42%, rgba(10,10,20,0) 72%)',
        pointerEvents: 'none',
      }} />
      <DesktopTopBar active="oracle" />

      <div style={{
        position: 'absolute', top: 72, left: 0, right: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '24px 56px 40px',
      }}>
        <div style={{
          width: '100%', maxWidth: 720,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          flex: 1, minHeight: 0,
        }}>
          {/* Portrait area */}
          <div style={{
            flex: 1, width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 0, marginBottom: 20,
          }}>
            <img src="../../assets/characters/cenayang-portrait.png" alt=""
                 style={{
                   maxHeight: '100%', maxWidth: 340, objectFit: 'contain',
                   filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.75)) drop-shadow(0 0 60px rgba(200,160,48,0.12))',
                 }} />
          </div>

          {/* Dialog box */}
          <div style={{
            width: '100%',
            background: 'linear-gradient(180deg, rgba(30,20,50,0.92), rgba(20,14,36,0.96))',
            border: '0.5px solid #3a2a60',
            borderRadius: 18,
            padding: '18px 22px 16px',
            boxShadow: '0 0 48px rgba(90,58,138,0.3), 0 14px 36px rgba(0,0,0,0.55)',
            marginBottom: 18,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 15, overflow: 'hidden',
                border: '0.5px solid #c8a030', boxShadow: '0 0 10px rgba(200,160,48,.35)',
              }}>
                <img src="../../assets/characters/cenayang-avatar.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
              </div>
              <span style={{
                fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 12,
                color: '#c8a030', letterSpacing: '0.2em', textTransform: 'uppercase',
              }}>Cenayang</span>
              <span style={{
                marginLeft: 'auto', fontFamily: "'Nunito', sans-serif", fontSize: 9,
                fontWeight: 700, color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>Pesan 1 / 3</span>
            </div>
            <p style={{
              fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 18,
              color: '#e8d4b0', lineHeight: 1.55, margin: 0,
            }}>
              “Selamat datang, Pejuang. Arcadia telah lama menanti kedatanganmu. Mari kita baca bintang-bintang yang menuntun langkahmu…”
            </p>
            <div style={{
              marginTop: 12, textAlign: 'right',
              fontFamily: "'Nunito', sans-serif", fontSize: 9, fontWeight: 600,
              color: '#887870', letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Tap untuk lanjut</div>
          </div>

          {/* CTA */}
          <button onClick={onAdvance} style={{ ...dStyles.ctaPrimary, width: '100%', maxWidth: 340 }}>
            Teruskan
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP — BIRTH STAR SELECT
// Top-to-bottom: Eyebrow · Title · Description · 4-card row · CTA.
// Cards in a single row, scrollable if needed. All centered.
// ─────────────────────────────────────────────────────────────
function DesktopBirthStar({ onAdvance }) {
  const [sel, setSel] = React.useState('ignis');

  return (
    <div style={dStyles.stage}>
      <DesktopBackdrop />
      <DesktopTopBar active="star" />

      <div style={{
        position: 'absolute', top: 72, left: 0, right: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '36px 56px 40px',
      }}>
        {/* Title block — centered, narrow */}
        <div style={{ width: '100%', maxWidth: 720, textAlign: 'center' }}>
          <div style={dStyles.eyebrow}>Bab I · Bintang Lahirmu</div>
          <h1 style={dStyles.title}>Pilih Bintangmu</h1>
          <p style={dStyles.desc}>
            Keempat elemen ini menuntun pejuang-pejuang Arcadia. Mana yang berdenyut di dalammu?
          </p>
        </div>

        {/* Horizontal card row — 4 cards, centered, compact */}
        <div style={{
          width: '100%', maxWidth: 1200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 20, marginBottom: 28,
          flex: '0 1 auto',
        }}>
          {STARS_D.map(s => {
            const isSel = s.id === sel;
            return (
              <div key={s.id}
                   onClick={() => setSel(s.id)}
                   style={{
                     position: 'relative', flex: '1 1 0', minWidth: 0,
                     maxWidth: 260, aspectRatio: '3 / 4',
                     background: '#14141e',
                     border: isSel ? `1.5px solid ${s.color}` : '0.5px solid #2a2a40',
                     borderRadius: 16,
                     overflow: 'hidden', cursor: 'pointer',
                     transition: 'all 280ms cubic-bezier(.4,0,.2,1)',
                     transform: isSel ? 'translateY(-6px)' : 'none',
                     boxShadow: isSel ? `0 0 36px ${s.glow}` : 'none',
                   }}>
                <img src={`../../assets/birth-stars/${s.id}.png`}
                     alt=""
                     style={{
                       position: 'absolute', inset: 0, width: '100%', height: '100%',
                       objectFit: 'cover',
                       transform: isSel ? 'scale(1.05)' : 'scale(1)',
                       transition: 'transform 420ms cubic-bezier(.4,0,.2,1)',
                     }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,20,0.96) 0%, rgba(10,10,20,0.3) 55%, rgba(10,10,20,0) 100%)',
                }} />
                <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
                  <div style={{
                    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 18,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: isSel ? s.color : '#e8e0d0',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                  }}>{s.name}</div>
                  <div style={{
                    fontFamily: "'Nunito', sans-serif", fontSize: 11,
                    color: '#c8b890', marginTop: 3, lineHeight: 1.35,
                  }}>{s.label} · {s.desc}</div>
                </div>
                {isSel && (
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    width: 26, height: 26, borderRadius: 13,
                    background: s.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 13,
                    boxShadow: `0 0 12px ${s.glow}`,
                  }}>✓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button onClick={() => onAdvance && onAdvance(sel)}
                style={{ ...dStyles.ctaPrimary, width: '100%', maxWidth: 380 }}>
          Kunci Bintangmu ✦
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP — HOBBY CARDS
// Top-to-bottom: Title · Desc · horizontal card row (scrollable) · CTA.
// Card heights reduced so nothing gets cropped.
// ─────────────────────────────────────────────────────────────
function DesktopHobbyCards({ onAdvance }) {
  const [sel, setSel] = React.useState(['fighter', 'scholar']);
  const toggle = (id) => setSel(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : (prev.length >= 3 ? prev : [...prev, id])
  );

  return (
    <div style={dStyles.stage}>
      <DesktopBackdrop />
      <DesktopTopBar active="hobby" />

      <div style={{
        position: 'absolute', top: 72, left: 0, right: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '32px 0 36px',
      }}>
        {/* Title block */}
        <div style={{ width: '100%', maxWidth: 780, textAlign: 'center', padding: '0 56px' }}>
          <div style={dStyles.eyebrow}>Bab II · Kartu Hobi</div>
          <h1 style={{ ...dStyles.title, fontSize: 46 }}>Pilih Jalurmu</h1>
          <p style={dStyles.desc}>
            Pilih hingga tiga kartu yang paling mencerminkan siapa dirimu.{' '}
            <span style={{ color: '#c8a030', fontStyle: 'normal', fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: '0.14em' }}>
              {sel.length} / 3
            </span>
          </p>
        </div>

        {/* Card row — scrollable horizontally */}
        <div style={{
          width: '100%', flex: 1, minHeight: 0,
          display: 'flex', alignItems: 'center',
          overflowX: 'auto', overflowY: 'hidden',
          padding: '12px 56px 20px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#c8a030 #14141e',
        }}>
          <div style={{ display: 'flex', gap: 18, margin: '0 auto', paddingRight: 8 }}>
            {HOBBIES_D.map(h => {
              const isSel = sel.includes(h.id);
              const disabled = !isSel && sel.length >= 3;
              return (
                <div key={h.id}
                     onClick={() => !disabled && toggle(h.id)}
                     style={{
                       position: 'relative', flexShrink: 0,
                       width: 180, height: 260,
                       background: '#14141e',
                       border: isSel ? '1.5px solid #c8a030' : '0.5px solid #2a2a40',
                       borderRadius: 14,
                       overflow: 'hidden',
                       cursor: disabled ? 'not-allowed' : 'pointer',
                       opacity: disabled ? 0.4 : 1,
                       transition: 'all 220ms',
                       boxShadow: isSel ? '0 0 24px rgba(200,160,48,0.42)' : 'none',
                       transform: isSel ? 'translateY(-6px)' : 'none',
                     }}>
                  <img src={`../../assets/hobbies/${h.img}`}
                       alt=""
                       style={{
                         position: 'absolute', inset: 0, width: '100%', height: '100%',
                         objectFit: 'cover', objectPosition: 'center top',
                         filter: isSel ? 'brightness(1.12) saturate(1.1)' : 'brightness(0.95)',
                       }} />
                  <div style={{
                    position: 'absolute', left: 0, right: 0, bottom: 0, height: '44%',
                    background: 'linear-gradient(to top, rgba(10,10,20,0.97) 10%, rgba(10,10,20,0) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', left: 10, right: 10, bottom: 12, textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 11,
                      color: isSel ? '#e8d090' : '#e8e0d0', letterSpacing: '0.08em',
                      textTransform: 'uppercase', lineHeight: 1.22,
                      textShadow: '0 2px 6px rgba(0,0,0,0.9)',
                    }}>{h.name}</div>
                    <div style={{
                      fontFamily: "'Nunito', sans-serif", fontSize: 9.5,
                      color: '#887870', marginTop: 5, lineHeight: 1.4,
                    }}>{h.desc}</div>
                  </div>
                  {isSel && (
                    <div style={{
                      position: 'absolute', top: 8, right: 8,
                      width: 22, height: 22, borderRadius: 11,
                      background: '#c8a030', color: '#1a0e00',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 12,
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
                  ...dStyles.ctaPrimary,
                  ...(sel.length ? {} : dStyles.ctaDisabled),
                  width: '100%', maxWidth: 380, marginTop: 10,
                }}>
          {sel.length === 0 ? 'Pilih setidaknya satu' : 'Lanjutkan Perjalanan'}
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { DesktopOracle, DesktopBirthStar, DesktopHobbyCards });
