// QuizScenario.jsx — story-decision moment (15 scenarios, one shared layout)
// Scene image bleeds full-screen. Narrative sits in a dark container.
// Choice cards stack above the fold. A "Lanjutkan Perjalanan" button
// slides up AFTER a card is picked — tap to advance.

const SCENARIOS = [
  {
    n: 1, title: 'Persimpangan Jalan',
    text: "Setelah perjalanan panjang, kamu tiba di gerbang Kerajaan Timur bernama Arcadia. Seorang penjaga bertanya: 'Apa tujuanmu datang ke sini, Pejuang?'",
    choices: [
      "Aku ingin bekerja keras dan membangun sesuatu yang nyata dengan tanganku sendiri.",
      "Aku ingin memahami rahasia dunia ini melalui pengetahuan dan penelitian.",
      "Aku ingin mengekspresikan diri dan meninggalkan karya yang semua orang akan kenang.",
      "Aku ingin membantu orang-orang yang lemah di kerajaan ini dan membuat mereka bahagia.",
    ],
  },
];

const TOTAL = 15;

const qsStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  bg: {
    position: 'absolute', inset: 0,
    backgroundSize: 'cover', backgroundPosition: 'center top',
  },
  scrim: {
    position: 'absolute', left: 0, right: 0, top: '34%', bottom: 0,
    background: 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, rgba(10,10,20,0.6) 38%, rgba(10,10,20,0.85) 68%, rgba(10,10,20,0.95) 100%)',
    pointerEvents: 'none',
  },

  progressTrack: { position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#2a2a40', zIndex: 5 },
  progressFill: { height: '100%', background: '#c8a030', boxShadow: '0 0 10px rgba(200,160,48,0.55)', transition: 'width 360ms cubic-bezier(.4,0,.2,1)' },
  progressLabel: {
    position: 'absolute', top: 10, right: 20, zIndex: 5,
    fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 400,
    color: '#887870', letterSpacing: '0.08em',
  },

  backBtn: {
    position: 'absolute', top: 52, left: 16, zIndex: 6,
    width: 36, height: 36, borderRadius: 10,
    background: 'rgba(10,10,20,0.7)',
    border: '0.5px solid #2a2a40',
    color: '#887870',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', padding: 0,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
  },

  // Scenario narrative container — sits 38-54%
  narrativeBox: {
    position: 'absolute', top: '38%', left: 16, right: 16,
    background: 'rgba(10,10,20,0.85)',
    border: '0.5px solid #2a2a40',
    borderRadius: 12,
    padding: '14px 16px',
    zIndex: 3,
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
  scenarioLabel: {
    fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 400,
    color: '#887870', letterSpacing: '0.04em', marginBottom: 6,
  },
  sep: { display: 'inline-block', margin: '0 6px', color: '#c8a030' },
  narrative: {
    fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 400,
    color: '#e8e0d0', lineHeight: 1.6, margin: 0,
  },

  // Choices — fixed above the confirm button slot
  choicesWrap: {
    position: 'absolute', left: 16, right: 16, bottom: 100,
    display: 'flex', flexDirection: 'column', gap: 8, zIndex: 4,
  },
  choice: {
    position: 'relative',
    minHeight: 48,
    padding: '8px 34px 8px 14px',
    borderRadius: 10,
    background: 'rgba(20,20,30,0.9)',
    border: '0.5px solid #2a2a40',
    color: '#c8b890',
    fontFamily: "'Nunito', sans-serif", fontSize: 12.5, fontWeight: 400,
    lineHeight: 1.4,
    display: 'flex', alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 160ms cubic-bezier(.4,0,.2,1)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    opacity: 0.8,
  },
  choiceActive: {
    background: '#1e1a10',
    border: '1px solid #c8a030',
    color: '#e8e0d0',
    opacity: 1,
    boxShadow: 'inset 0 0 22px rgba(200,160,48,0.18), 0 0 18px rgba(200,160,48,0.22)',
  },
  checkDot: {
    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
    width: 16, height: 16, borderRadius: 8,
    background: '#c8a030', color: '#1a0e00',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, fontWeight: 700,
    boxShadow: '0 0 8px rgba(200,160,48,0.55)',
  },

  // Confirm button + its scrim (always visible)
  confirmScrim: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    height: '18%',
    background: 'linear-gradient(to top, rgba(10,10,20,0.92) 0%, rgba(10,10,20,0.8) 40%, rgba(10,10,20,0) 100%)',
    zIndex: 4, pointerEvents: 'none',
  },
  confirmWrap: {
    position: 'absolute', left: 16, right: 16, bottom: 24, zIndex: 5,
  },
  confirmBtn: {
    width: '100%', height: 52,
    borderRadius: 12,
    background: '#c8a030',
    color: '#1a0e00',
    fontFamily: "'Cinzel', Georgia, serif",
    fontWeight: 700, fontSize: 14,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    border: 'none', cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0.5px rgba(232,208,144,0.5), 0 0 22px rgba(200,160,48,0.25)',
    transition: 'all 200ms ease',
  },
  confirmBtnDisabled: {
    background: '#2a2a40',
    color: '#5a5468',
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
};

function QuizScenario({ scenarioIndex = 0, onAdvance, onBack }) {
  const s = SCENARIOS[scenarioIndex] || SCENARIOS[0];
  const [picked, setPicked] = React.useState(null);
  const pct = (s.n / TOTAL) * 100;
  const hasPick = picked !== null;

  // Internal crossfade between scenarios (background + content fade through).
  const [displayed, setDisplayed] = React.useState(s);
  const [fading, setFading] = React.useState(false);
  React.useEffect(() => {
    if (displayed === s) return;
    setFading(true);
    const swap = setTimeout(() => { setDisplayed(s); setPicked(null); }, 175);
    const done = setTimeout(() => setFading(false), 350);
    return () => { clearTimeout(swap); clearTimeout(done); };
  }, [s]);
  const d = displayed;
  const fadeStyle = { transition: 'opacity 175ms ease-in-out', opacity: fading ? 0 : 1 };

  return (
    <div style={qsStyles.root}>
      <div style={{ ...qsStyles.bg, backgroundImage: `url(../../assets/questions/${d.n}.png)`, ...fadeStyle }} />
      <div style={qsStyles.scrim} />

      <div style={qsStyles.progressTrack}>
        <div style={{ ...qsStyles.progressFill, width: `${pct}%` }} />
      </div>
      <div style={qsStyles.progressLabel}>{d.n} / {TOTAL}</div>

      <button style={qsStyles.backBtn} onClick={onBack} aria-label="Back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div style={{ ...qsStyles.narrativeBox, ...fadeStyle }}>
        <div style={qsStyles.scenarioLabel}>
          Skenario {d.n}<span style={qsStyles.sep}>·</span>{d.title}
        </div>
        <p style={qsStyles.narrative}>{d.text}</p>
      </div>

      <div style={{ ...qsStyles.choicesWrap, ...fadeStyle }}>
        {d.choices.map((c, i) => (
          <button
            key={i}
            style={{ ...qsStyles.choice, ...(picked === i ? qsStyles.choiceActive : {}) }}
            onClick={() => setPicked(i)}
          >
            {c}
            {picked === i && <span style={qsStyles.checkDot}>✓</span>}
          </button>
        ))}
      </div>

      <div style={qsStyles.confirmScrim} />
      <div style={qsStyles.confirmWrap}>
        <button
          style={{ ...qsStyles.confirmBtn, ...(hasPick ? {} : qsStyles.confirmBtnDisabled) }}
          disabled={!hasPick}
          onClick={() => hasPick && onAdvance && onAdvance(picked)}
        >
          Lanjutkan Perjalanan
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { QuizScenario, SCENARIOS });
