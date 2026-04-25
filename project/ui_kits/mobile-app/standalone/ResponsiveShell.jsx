// ResponsiveShell.jsx — phone / tablet / desktop layouts for the mobile-app prototype.
// Brand rule: app is portrait-only mobile. Phone frame stays 375×812 everywhere;
// the SHELL around it changes per breakpoint. No landscape rework of the frame itself.

const BREAKPOINTS = { tablet: 641, desktop: 1024, wide: 1440 };

function useViewport() {
  const [vp, setVp] = React.useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 1280,
    h: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  React.useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const mode = vp.w >= BREAKPOINTS.desktop ? 'desktop'
             : vp.w >= BREAKPOINTS.tablet  ? 'tablet'
             : 'phone';
  return { ...vp, mode };
}

// Fits phone frame (395×832 outer) into an available box by uniform scaling.
// No floor — if the viewport is short, we'd rather shrink below 1:1 than clip.
// Also applies a 2% safety margin so sub-pixel rounding never crops the frame.
function usePhoneScale(maxW, maxH, frameW = 395, frameH = 832) {
  const safeW = Math.max(maxW * 0.98, 1);
  const safeH = Math.max(maxH * 0.98, 1);
  const scale = Math.min(safeW / frameW, safeH / frameH, 1.25);
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

// ── Screen metadata ──────────────────────────────────────────────────────────
const SCREEN_META = {
  splash:  { label: '01 · Splash',          blurb: 'Arcadia menanti. Gerbang pertama perjalananmu — pilih untuk memulai.' },
  oracle:  { label: '02 · Oracle Intro',    blurb: 'Cenayang menyapamu. Suaranya lembut, kuno, dan penuh pertanda.' },
  biodata: { label: '03 · Biodata',         blurb: 'Beri tahu Cenayang siapa dirimu — nama, sekolah, dan asal.' },
  hobbies: { label: '04 · Hobby Cards',     blurb: 'Pilih hingga tiga kartu yang paling mencerminkan dirimu.' },
  stars:   { label: '05 · Birth Star',      blurb: 'Ignis, Aqua, Terra, atau Ventus — bintang yang memanggilmu.' },
  quiz:    { label: '06 · Scenario',        blurb: 'Sebuah persimpangan. Setiap jawaban membentuk takdirmu.' },
  reveal:  { label: '07 · Result Reveal',   blurb: 'Resonansimu terbaca. Takdirmu sedang terungkap…' },
  result:  { label: '08 · Class Result',    blurb: 'Kelasmu telah ditetapkan. Lihat jalanmu di Arcadia.' },
  chat:    { label: '09 · Cenayang Chat',   blurb: 'Tanyakan apa pun. Cenayang masih hadir untukmu.' },
};

const NAV_ORDER = [
  ['splash', 'Splash'], ['oracle', 'Oracle'], ['biodata', 'Biodata'],
  ['hobbies', 'Hobby Cards'], ['stars', 'Birth Star'], ['quiz', 'Quiz'],
  ['reveal', 'Reveal'], ['result', 'Result'], ['chat', 'Chat'],
];

// ── Atmospheric backdrop (constellation dots + radial glow) ──────────────────
function Backdrop({ mode }) {
  // Deterministic star positions so SSR-ish rerenders don't reshuffle.
  const stars = React.useMemo(() => {
    const out = [];
    let seed = 9301;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const count = mode === 'desktop' ? 110 : mode === 'tablet' ? 70 : 40;
    for (let i = 0; i < count; i++) {
      out.push({
        x: rnd() * 100,
        y: rnd() * 100,
        r: 0.4 + rnd() * 1.4,
        o: 0.18 + rnd() * 0.6,
        tw: 2 + rnd() * 4,
        d: rnd() * 4,
      });
    }
    return out;
  }, [mode]);

  return (
    <div aria-hidden="true" style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      background: `
        radial-gradient(ellipse at 50% 55%, rgba(200,160,48,0.06) 0%, transparent 45%),
        radial-gradient(ellipse at 20% 10%, rgba(90,58,138,0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 85% 90%, rgba(200,96,48,0.06) 0%, transparent 55%),
        linear-gradient(180deg, #0a0a14 0%, #14141e 50%, #0a0a14 100%)
      `,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r * 0.1} fill="#e8d090" opacity={s.o}>
            <animate attributeName="opacity"
              values={`${s.o};${Math.min(1, s.o + 0.4)};${s.o}`}
              dur={`${s.tw}s`} begin={`${s.d}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      {/* Faint constellation line pattern over horizon */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.08 }} preserveAspectRatio="none" viewBox="0 0 800 600">
        <g fill="none" stroke="#c8a030" strokeWidth="0.5">
          <path d="M 120 140 L 260 90 L 340 180 L 460 130 L 540 220" />
          <path d="M 640 380 L 540 440 L 620 520 L 720 470" />
          <path d="M 60 420 L 170 500 L 280 460" />
        </g>
      </svg>
    </div>
  );
}

// ── Side panel (desktop narrative chrome) ────────────────────────────────────
function NarrativePanel({ screen, side = 'left' }) {
  const meta = SCREEN_META[screen] || { label: screen, blurb: '' };
  return (
    <div style={{
      width: 280,
      color: '#c8b890',
      fontFamily: "'Nunito', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: side === 'left' ? 'flex-end' : 'flex-start',
      textAlign: side === 'left' ? 'right' : 'left',
    }}>
      {side === 'left' && (
        <>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, color: '#c8a030',
            letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 11,
          }}>
            ✦ Magna Via
          </div>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 600, color: '#e8d090',
            letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 13,
            lineHeight: 1.5,
          }}>
            {meta.label}
          </div>
          <div style={{
            fontFamily: "'Crimson Text', serif", fontStyle: 'italic',
            color: '#a080d0', fontSize: 16, lineHeight: 1.55, maxWidth: 260,
            borderRight: '0.5px solid rgba(200,160,48,0.25)', paddingRight: 14,
          }}>
            “{meta.blurb}”
          </div>
        </>
      )}
      {side === 'right' && (
        <>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, color: '#c8a030',
            letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 11,
          }}>
            Kingdom of Arcadia
          </div>
          <div style={{
            fontSize: 12, color: '#887870', lineHeight: 1.6, maxWidth: 260,
            borderLeft: '0.5px solid rgba(200,160,48,0.25)', paddingLeft: 14,
          }}>
            Prototype shell — the Magna Via app is designed portrait-only for
            iOS &amp; Android. This showcase renders the live 375×812 frame
            centered inside the world it belongs to.
          </div>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 600,
            color: '#c8a030', letterSpacing: '0.16em', textTransform: 'uppercase',
            fontSize: 10, borderLeft: '0.5px solid rgba(200,160,48,0.25)', paddingLeft: 14,
          }}>
            Portrait Locked ✦ Mobile First
          </div>
        </>
      )}
    </div>
  );
}

// ── Screen chooser (pills on desktop/tablet, dropdown on phone) ──────────────
function ScreenChooser({ screen, setScreen, mode }) {
  if (mode === 'phone') {
    return (
      <div style={{
        position: 'fixed', top: 12, left: 12, zIndex: 50,
        background: 'rgba(20,20,30,0.92)',
        border: '0.5px solid #2a2a40', borderRadius: 10,
        padding: '6px 10px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
      }}>
        <select
          value={screen}
          onChange={(e) => setScreen(e.target.value)}
          style={{
            background: 'transparent', color: '#c8a030', border: 'none',
            fontFamily: "'Cinzel', serif", fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase', outline: 'none',
            padding: '4px 2px',
          }}
        >
          {NAV_ORDER.map(([s, label]) => (
            <option key={s} value={s} style={{ background: '#14141e', color: '#e8d090' }}>{label}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex', flexDirection: mode === 'desktop' ? 'row' : 'row',
      flexWrap: 'wrap', gap: 6, justifyContent: 'center',
      maxWidth: mode === 'desktop' ? 720 : 560,
    }}>
      {NAV_ORDER.map(([s, label]) => {
        const active = screen === s;
        return (
          <button
            key={s}
            onClick={() => setScreen(s)}
            className="mv-nav-pill"
            data-active={active}
            style={{
              cursor: 'pointer', padding: '7px 12px', borderRadius: 999,
              background: active ? 'rgba(200,160,48,0.14)' : 'transparent',
              color: active ? '#e8d090' : '#887870',
              border: `0.5px solid ${active ? '#c8a030' : '#2a2a40'}`,
              fontFamily: "'Cinzel', serif", fontSize: 10, fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              transition: 'all 220ms cubic-bezier(0.4,0,0.2,1)',
              boxShadow: active ? '0 0 14px rgba(200,160,48,0.25)' : 'none',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ── Step dots (visible on tablet + desktop below phone frame) ────────────────
function StepDots({ screen, setScreen }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {NAV_ORDER.map(([s]) => {
        const active = s === screen;
        return (
          <span
            key={s}
            onClick={() => setScreen(s)}
            style={{
              cursor: 'pointer',
              width: active ? 22 : 6, height: 6, borderRadius: 3,
              background: active ? '#c8a030' : 'rgba(200,184,144,0.25)',
              transition: 'all 220ms cubic-bezier(0.4,0,0.2,1)',
              boxShadow: active ? '0 0 10px rgba(200,160,48,0.55)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

// ── Main shell ───────────────────────────────────────────────────────────────
function ResponsiveApp() {
  const [screen, setScreen] = React.useState('splash');
  const { w, h, mode } = useViewport();

  const screens = {
    splash:   <Splash onBegin={() => setScreen('oracle')} />,
    oracle:   <OracleIntro onBack={() => setScreen('splash')} onAdvance={() => setScreen('biodata')} />,
    biodata:  <Biodata onBack={() => setScreen('oracle')} onAdvance={() => setScreen('hobbies')} />,
    hobbies:  <HobbyCards onBack={() => setScreen('biodata')} onAdvance={() => setScreen('stars')} />,
    stars:    <BirthStarSelect onBack={() => setScreen('hobbies')} onAdvance={() => setScreen('quiz')} />,
    quiz:     <QuizScenario scenarioIndex={0} onBack={() => setScreen('stars')} onAdvance={() => setScreen('reveal')} />,
    reveal:   <ResultReveal onAdvance={() => setScreen('result')} />,
    result:   <ClassResult onBack={() => setScreen('quiz')} onRestart={() => setScreen('splash')} onConsult={() => setScreen('chat')} />,
    chat:     <CenayangChat onBack={() => setScreen('result')} />,
  };

  // Budget for phone area. Chrome shrinks on short viewports so the frame
  // stays on screen on a 13" laptop + open devtools (~600vh). Budgets
  // empirically include header + footer + gaps + padding with slack.
  const isShort = h < 760;
  const chromeV = mode === 'phone'
    ? 80
    : mode === 'tablet'
      ? (isShort ? 160 : 200)
      : (isShort ? 190 : 230);
  const chromeH = mode === 'phone'
    ? 16
    : mode === 'tablet'
      ? 64
      : (w >= BREAKPOINTS.wide ? 640 : 440);
  const scale = usePhoneScale(w - chromeH, h - chromeV);

  // Wrap the scaled phone in a container sized to its post-scale dimensions so
  // layout reserves the right amount of space (transform: scale alone doesn't
  // shrink layout footprint).
  const phone = (
    <div style={{
      width: 395 * scale,
      height: 832 * scale,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'width 320ms cubic-bezier(0.4,0,0.2,1), height 320ms cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1)',
      }}>
        <PhoneFrame>
          <ScreenStage screenKey={screen}>
            {screens[screen]}
          </ScreenStage>
        </PhoneFrame>
      </div>
    </div>
  );

  // ── PHONE LAYOUT ───────────────────────────────────────────────────────────
  if (mode === 'phone') {
    return (
      <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Backdrop mode={mode} />
        <ScreenChooser screen={screen} setScreen={setScreen} mode={mode} />
        <div style={{
          position: 'relative', zIndex: 1,
          minHeight: '100vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '60px 0 20px',
        }}>
          {phone}
        </div>
      </div>
    );
  }

  // ── TABLET LAYOUT ──────────────────────────────────────────────────────────
  if (mode === 'tablet') {
    return (
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Backdrop mode={mode} />
        <div style={{
          position: 'relative', zIndex: 1,
          height: '100vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'space-between',
          padding: isShort ? '14px 24px' : '28px 24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <div style={{
              fontFamily: "'Cinzel', serif", fontWeight: 700, color: '#c8a030',
              letterSpacing: '0.32em', textTransform: 'uppercase', fontSize: 13,
              textShadow: '0 0 18px rgba(200,160,48,0.35)',
            }}>
              ✦ Magna Via ✦
            </div>
            <ScreenChooser screen={screen} setScreen={setScreen} mode={mode} />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {phone}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <StepDots screen={screen} setScreen={setScreen} />
            <div style={{
              fontFamily: "'Crimson Text', serif", fontStyle: 'italic',
              color: '#a080d0', fontSize: 14, textAlign: 'center', maxWidth: 520, lineHeight: 1.5,
            }}>
              “{SCREEN_META[screen]?.blurb}”
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── DESKTOP LAYOUT ─────────────────────────────────────────────────────────
  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Backdrop mode={mode} />
      <div style={{
        position: 'relative', zIndex: 1,
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'minmax(220px, 1fr) auto minmax(220px, 1fr)',
        gridTemplateRows: 'auto 1fr auto',
        gap: isShort ? '12px 32px' : '24px 40px',
        padding: isShort ? '16px 40px' : '32px 56px',
        alignItems: 'center', justifyItems: 'center',
      }}>
        {/* Header — full width */}
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, color: '#c8a030',
            letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: 14,
            textShadow: '0 0 22px rgba(200,160,48,0.4)',
          }}>
            ✦ &nbsp; Magna Via &nbsp; ✦
          </div>
          <ScreenChooser screen={screen} setScreen={setScreen} mode={mode} />
        </div>

        {/* Left panel */}
        <NarrativePanel screen={screen} side="left" />

        {/* Phone center */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {phone}
        </div>

        {/* Right panel */}
        <NarrativePanel screen={screen} side="right" />

        {/* Footer */}
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <StepDots screen={screen} setScreen={setScreen} />
          <div style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11,
            color: '#555065', letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            Reference frame · 375 × 812 · iPhone 14
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ResponsiveApp />);
