// ClassResult.jsx — final reveal of the student's RPG class + RIASEC radar
// Portrait sits inside a 1px ember-bordered dark surface (color matches class).
// Ember aura behind the container remains.

const CLASS_BORDER = {
  knight: '#c86030', mage: '#2060c8', bard: '#c86090',
  healer: '#309050', merchant: '#5a3a8a', scholar: '#7a8aaa',
  alchemist: '#a87040', commander: '#c83020',
};

const crStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  aura: {
    position: 'absolute', top: '16%', left: '50%', transform: 'translateX(-50%)',
    width: 420, height: 420,
    background: 'radial-gradient(closest-side, rgba(200,96,48,0.45) 0%, rgba(200,96,48,0.18) 40%, rgba(10,10,20,0) 72%)',
    pointerEvents: 'none', filter: 'blur(2px)',
  },
  goldHalo: {
    position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
    width: 300, height: 300,
    background: 'radial-gradient(closest-side, rgba(200,160,48,0.20) 0%, rgba(10,10,20,0) 70%)',
    pointerEvents: 'none',
  },
  backBtn: { position: 'absolute', top: 56, left: 16, zIndex: 5 },
  scroller: {
    position: 'absolute', inset: 0, overflowY: 'auto',
    paddingTop: 100, paddingBottom: 32,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  header: { textAlign: 'center', padding: '0 24px', zIndex: 2, position: 'relative' },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: '#c8a030', letterSpacing: '0.28em', textTransform: 'uppercase' },
  title: { fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 28, color: '#e8d4a0', margin: '10px 0 6px', letterSpacing: '0.06em' },
  sub: { fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 14, color: '#c8b890', margin: 0 },

  // Portrait container — 82% of screen width, ember-orange border, fills entirely
  portraitCard: {
    width: '82%',
    height: 450,
    flexShrink: 0,
    margin: '18px 0 14px',
    background: '#14141e',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative', zIndex: 2,
  },
  portraitImg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'center top',
  },

  radarWrap: { width: '65%', aspectRatio: '1 / 1', margin: '12px 0 14px', position: 'relative', zIndex: 2 },

  majorsBlock: { width: 'calc(100% - 40px)', padding: '0 4px', zIndex: 2, position: 'relative' },
  majorsLabel: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 10 },
  majorsValue: { fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 14, color: '#e8e0d0', letterSpacing: '0.08em', textAlign: 'center', marginBottom: 14 },
  tags: { display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 22 },
  tag: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: '#c8a030', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 11px', borderRadius: 999, border: '0.5px solid #c8a030', background: 'rgba(200,160,48,0.06)', whiteSpace: 'nowrap' },
  actions: { width: 'calc(100% - 40px)', display: 'flex', flexDirection: 'column', gap: 10, zIndex: 2, position: 'relative' },
};

function RiasecRadar({ values }) {
  const axes = ['R', 'I', 'A', 'S', 'E', 'C'];
  const size = 260, cx = size / 2, cy = size / 2, rMax = size * 0.38;
  const pointFor = (i, r) => {
    const a = (-90 + i * 60) * Math.PI / 180;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };
  const rings = [0.25, 0.5, 0.75, 1.0].map(f => (
    <polygon key={f} points={axes.map((_, i) => pointFor(i, rMax * f).join(',')).join(' ')}
             fill="none" stroke="#2a2a40" strokeWidth="0.6" />
  ));
  const spokes = axes.map((_, i) => {
    const [x, y] = pointFor(i, rMax);
    return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#2a2a40" strokeWidth="0.6" />;
  });
  const dataPts = axes.map((k, i) => pointFor(i, rMax * values[k]).join(',')).join(' ');
  const labelR = rMax + 18;
  const labels = axes.map((k, i) => {
    const [x, y] = pointFor(i, labelR);
    return (
      <text key={k} x={x} y={y} fill="#c8b890" fontFamily="Cinzel, serif" fontWeight="700"
            fontSize="13" textAnchor="middle" dominantBaseline="central" letterSpacing="0.1em">{k}</text>
    );
  });
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
      {rings}{spokes}
      <polygon points={dataPts} fill="#c86030" fillOpacity="0.35"
               stroke="#c86030" strokeOpacity="0.7" strokeWidth="1.4" strokeLinejoin="round" />
      {axes.map((k, i) => {
        const [x, y] = pointFor(i, rMax * values[k]);
        return <circle key={k} cx={x} cy={y} r="2.4" fill="#c86030" />;
      })}
      {labels}
    </svg>
  );
}

function ClassResult({ onBack, onRestart, onConsult, characterClass = 'knight' }) {
  const knightProfile = { R: 0.95, I: 0.55, A: 0.22, S: 0.45, E: 0.78, C: 0.60 };
  const borderColor = CLASS_BORDER[characterClass] || '#c86030';

  return (
    <div style={crStyles.root}>
      <ConstellationBg opacity={0.09} />
      <div style={crStyles.aura} />
      <div style={crStyles.goldHalo} />

      <div style={crStyles.backBtn}>
        <IconButton onClick={onBack} ariaLabel="Back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </IconButton>
      </div>

      <div style={crStyles.scroller}>
        <div style={crStyles.header}>
          <div style={crStyles.eyebrow}>Bintang Telah Berbicara</div>
          <h1 style={crStyles.title}>The Knight of Arcadia</h1>
          <p style={crStyles.sub}>"Pedangmu tajam, perisaimu teguh."</p>
        </div>

        <div style={{ ...crStyles.portraitCard, border: `1px solid ${borderColor}`, boxShadow: `0 0 36px ${borderColor}33` }}>
          <img src="../../assets/classes/the-knight.png" alt="The Knight" style={crStyles.portraitImg} />
        </div>

        <div style={crStyles.radarWrap}>
          <RiasecRadar values={knightProfile} />
        </div>

        <div style={crStyles.majorsBlock}>
          <div style={crStyles.majorsLabel}>Dimensi Dominan</div>
          <div style={crStyles.majorsValue}>Realistic · Enterprising</div>
          <div style={crStyles.tags}>
            <span style={crStyles.tag}>Teknik Mesin</span>
            <span style={crStyles.tag}>Teknik Sipil</span>
            <span style={crStyles.tag}>Manajemen</span>
            <span style={crStyles.tag}>+5 lagi</span>
          </div>
        </div>

        <div style={crStyles.actions}>
          <GoldCTA onClick={onConsult || onRestart}>Konsultasi dengan Cenayang</GoldCTA>
          <SecondaryButton onClick={onRestart}>Ulangi Perjalanan</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ClassResult });
