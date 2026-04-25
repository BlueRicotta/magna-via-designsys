// ResultReveal.jsx — cinematic transition between Quiz and Results
// Pure atmosphere: Oracle floats in star-filled space holding the constellation seal.
// No UI chrome, no buttons, no nav. Auto-advances after 3s.

const rrStyles = {
  root: {
    position: 'absolute', inset: 0,
    background: '#0a0a14',
    overflow: 'hidden',
  },
  // Mystic purple radial glow centered at 55% from top
  purpleGlow: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(circle at 50% 55%, rgba(90,58,138,0.30) 0%, rgba(90,58,138,0.18) 30%, rgba(90,58,138,0.06) 55%, rgba(10,10,20,0) 80%)',
    pointerEvents: 'none',
  },
  // Oracle — 8%-72% of 812 = ~65px top, ~520px height
  oracleWrap: {
    position: 'absolute',
    top: '8%',
    left: 0, right: 0,
    height: '64%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    pointerEvents: 'none',
  },
  oracleImg: {
    width: '78%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    filter: 'drop-shadow(0 18px 36px rgba(0,0,0,0.55))',
  },
  // Warm gold glow emanating from her cupped hands (~lower-middle of Oracle zone)
  goldGlow: {
    position: 'absolute',
    left: '50%',
    top: '58%',
    width: 320,
    height: 320,
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, rgba(200,160,48,0.20) 0%, rgba(200,160,48,0.10) 30%, rgba(200,160,48,0.03) 55%, rgba(200,160,48,0) 75%)',
    pointerEvents: 'none',
    mixBlendMode: 'screen',
  },
  // Text zone — ~68-84%
  textZone: {
    position: 'absolute',
    top: '68%',
    left: 0, right: 0,
    padding: '0 32px',
    textAlign: 'center',
    pointerEvents: 'none',
    zIndex: 2,
  },
  processingLabel: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 400,
    fontSize: 12,
    color: '#887870',
    letterSpacing: '0.18em',
    margin: 0,
  },
  divider: {
    width: '40%',
    height: 1,
    margin: '12px auto',
    background: 'rgba(200,160,48,0.35)',
    border: 'none',
  },
  bigDisplay: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 1.18,
    color: '#e8e0d0',
    letterSpacing: '0.04em',
    margin: 0,
    textShadow: '0 2px 18px rgba(0,0,0,0.6)',
  },
  // Loading dots — 84-92%
  dotsWrap: {
    position: 'absolute',
    top: '86%',
    left: 0, right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    pointerEvents: 'none',
  },
  dotOuter: {
    width: 6, height: 6, borderRadius: 3,
    background: '#c8a030',
    opacity: 0.6,
  },
  dotMiddle: {
    width: 8, height: 8, borderRadius: 4,
    background: '#c8a030',
    boxShadow: '0 0 10px rgba(200,160,48,0.6)',
  },
};

// Dense star field — 45 stars at varied sizes and opacities (15-60%)
function StarField() {
  // Seeded pseudo-random so layout stays stable between renders
  const stars = React.useMemo(() => {
    const rand = (() => {
      let s = 9172;
      return () => ((s = (s * 16807) % 2147483647) / 2147483647);
    })();
    return Array.from({ length: 45 }, () => ({
      cx: rand() * 375,
      cy: rand() * 812,
      r: 0.5 + rand() * 1.4,
      o: 0.15 + rand() * 0.45,
    }));
  }, []);
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 375 812"
      preserveAspectRatio="xMidYMid slice"
    >
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#e8d4a8" opacity={s.o} />
      ))}
    </svg>
  );
}

// Loading-dot pulse keyframes (injected once)
function useDotsAnimation() {
  React.useEffect(() => {
    const id = 'rr-dots-anim';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @keyframes rrDotPulse {
        0%, 100% { opacity: 0.45; transform: scale(0.92); }
        50%      { opacity: 1;    transform: scale(1.08); }
      }
      .rr-dot { animation: rrDotPulse 1.2s ease-in-out infinite; }
      .rr-dot-0 { animation-delay: 0s; }
      .rr-dot-1 { animation-delay: 0.2s; }
      .rr-dot-2 { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);
  }, []);
}

function ResultReveal({ onAdvance }) {
  useDotsAnimation();

  React.useEffect(() => {
    const t = setTimeout(() => { if (onAdvance) onAdvance(); }, 3000);
    return () => clearTimeout(t);
  }, [onAdvance]);

  return (
    <div style={rrStyles.root}>
      {/* Layered atmosphere: purple aura, faint constellation lines, dense stars */}
      <div style={rrStyles.purpleGlow} />
      <ConstellationBg opacity={0.08} />
      <StarField />

      {/* Warm gold glow beneath cupped hands */}
      <div style={rrStyles.goldGlow} />

      {/* Oracle — floating in space, no card, no border */}
      <div style={rrStyles.oracleWrap}>
        <img
          src="assets/characters/cenayang-portrait.png"
          alt=""
          style={rrStyles.oracleImg}
        />
      </div>

      {/* Text zone */}
      <div style={rrStyles.textZone}>
        <p style={rrStyles.processingLabel}>Membaca resonansimu . . .</p>
        <hr style={rrStyles.divider} />
        <h1 style={rrStyles.bigDisplay}>Takdirmu Sedang Terungkap</h1>
      </div>

      {/* Loading dots */}
      <div style={rrStyles.dotsWrap}>
        <span className="rr-dot rr-dot-0" style={rrStyles.dotOuter} />
        <span className="rr-dot rr-dot-1" style={rrStyles.dotMiddle} />
        <span className="rr-dot rr-dot-2" style={rrStyles.dotOuter} />
      </div>
    </div>
  );
}

Object.assign(window, { ResultReveal });
