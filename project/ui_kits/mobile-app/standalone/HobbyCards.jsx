// HobbyCards.jsx — choose up to 3 from the six Hobby Cards (2×3 grid, scrollable)
// Tarot/RPG-card style: illustration bleeds to every edge, title sits as a
// gradient overlay at the bottom. Hobby Cards are DISTINCT from the Character
// Class portraits — never substitute class portraits for hobby art.

const HOBBIES = [
  { id: 'fighter',  name: "The Fighter's Path",     img: 'fighter.png',           desc: 'Mereka yang menempa tubuh dan tekad' },
  { id: 'scholar',  name: "The Scholar's Scroll",   img: 'scholar.png',           desc: 'Mereka yang mencari kebenaran dunia' },
  { id: 'artist',   name: "The Artist's Brush",     img: 'artist.png',            desc: 'Mereka yang menciptakan dari imajinasi' },
  { id: 'guardian', name: "The Guardian's Lantern", img: 'guardians-lantern.png', desc: 'Mereka yang kekuatannya ada pada sesama' },
  { id: 'leader',   name: "The Leader's Crown",     img: 'leaders-crown.png',     desc: 'Mereka yang lahir untuk memimpin' },
  { id: 'keeper',   name: "The Keeper's Codex",     img: 'keepers-codex.png',     desc: 'Mereka yang menjaga segalanya tetap rapi' },
];

const hcStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  header: { position: 'absolute', top: 110, left: 0, right: 0, padding: '0 24px', textAlign: 'center', zIndex: 3 },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase' },
  title: { fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 24, color: '#e8e0d0', margin: '10px 0 6px', letterSpacing: '0.04em' },
  subtitle: { fontFamily: "'Nunito', sans-serif", fontSize: 13, color: '#c8b890', lineHeight: 1.5, margin: 0 },
  counterWrap: {
    position: 'absolute', top: 238, left: 0, right: 0, display: 'flex', justifyContent: 'center',
    zIndex: 4, background: 'linear-gradient(to bottom, #0a0a14 60%, rgba(10,10,20,0))',
    paddingBottom: 10,
  },
  counter: {
    display: 'inline-block',
    padding: '5px 12px', borderRadius: 999, border: '0.5px solid #c8a030',
    color: '#c8a030', background: 'rgba(200,160,48,0.12)',
    fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
  },
  scroller: {
    position: 'absolute', top: 282, left: 0, right: 0, bottom: 108,
    overflowY: 'auto',
    padding: '0 16px 18px',
    WebkitOverflowScrolling: 'touch',
  },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  // Tarot card: 3:4 portrait, illustration fills entire card, title overlay at bottom
  card: {
    position: 'relative',
    aspectRatio: '3 / 4',
    background: '#14141e',
    border: '0.5px solid #2a2a40',
    borderRadius: 12,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 180ms cubic-bezier(.4,0,.2,1)',
  },
  cardImg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'center top',
    transition: 'filter 220ms, transform 220ms',
  },
  placeholderFill: {
    position: 'absolute', inset: 0,
    background: '#14141e',
    display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
    color: '#c8a030', fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 12,
    letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 12px',
  },
  // Bottom 28% gradient scrim that sits over the illustration, holding title + description
  labelOverlay: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    height: '28%',
    background: 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, rgba(10,10,20,0.85) 55%, rgba(10,10,20,0.85) 100%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
    padding: '0 8px 10px',
    pointerEvents: 'none',
  },
  cardTitle: {
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 11,
    color: '#e8e0d0', letterSpacing: '0.08em', textTransform: 'uppercase',
    textAlign: 'center', lineHeight: 1.2,
    textShadow: '0 1px 4px rgba(0,0,0,0.9)',
  },
  cardDesc: {
    fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: 10,
    color: '#887870', textAlign: 'center', lineHeight: 1.2,
    marginTop: 4,
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
    maxWidth: '100%',
    textShadow: '0 1px 3px rgba(0,0,0,0.9)',
  },
  stickyCta: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    padding: '20px 20px 28px',
    background: 'linear-gradient(to top, #0a0a14 55%, rgba(10,10,20,0.85) 85%, rgba(10,10,20,0))',
    zIndex: 5,
  },
};

function HobbyCard({ h, selected, disabled, onToggle }) {
  const [broken, setBroken] = React.useState(false);
  const style = {
    ...hcStyles.card,
    border: selected ? '1.5px solid #c8a030' : '0.5px solid #2a2a40',
    boxShadow: selected ? '0 0 20px rgba(200,160,48,0.4)' : 'none',
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };
  const imgStyle = {
    ...hcStyles.cardImg,
    filter: selected ? 'brightness(1.12) saturate(1.08)' : 'brightness(1)',
  };
  return (
    <div style={style} onClick={() => !disabled && onToggle(h.id)}>
      {h.img && !broken ? (
        <img src={window.__resources['hobby_' + h.id]} style={imgStyle} alt="" onError={() => setBroken(true)} />
      ) : (
        <div style={hcStyles.placeholderFill}>{h.name}</div>
      )}
      <div style={hcStyles.labelOverlay}>
        <div style={{ ...hcStyles.cardTitle, color: selected ? '#f0dca0' : '#e8e0d0' }}>{h.name}</div>
        <div style={hcStyles.cardDesc}>{h.desc}</div>
      </div>
      {selected && (
        <div style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: 10, background: '#c8a030', color: '#1a0e00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, boxShadow: '0 0 10px rgba(200,160,48,0.6)' }}>✓</div>
      )}
    </div>
  );
}

function HobbyCards({ onBack, onAdvance }) {
  const [sel, setSel] = React.useState([]);
  const toggle = (id) => {
    setSel(prev => prev.includes(id) ? prev.filter(x => x !== id) : (prev.length >= 3 ? prev : [...prev, id]));
  };
  const atMax = sel.length >= 3;
  return (
    <div style={hcStyles.root}>
      <ConstellationBg opacity={0.07} />
      <BackHeader onBack={onBack} step={4} total={8} />
      <div style={hcStyles.header}>
        <div style={hcStyles.eyebrow}>Bab II · Kartu Hobi</div>
        <h1 style={hcStyles.title}>Pilih Jalurmu</h1>
        <p style={hcStyles.subtitle}>Pilih hingga tiga Hobby Card yang mencerminkan dirimu.</p>
      </div>
      <div style={hcStyles.counterWrap}>
        <div style={hcStyles.counter}>{sel.length} / 3 dipilih</div>
      </div>
      <div style={hcStyles.scroller}>
        <div style={hcStyles.grid}>
          {HOBBIES.map(h => <HobbyCard key={h.id} h={h} selected={sel.includes(h.id)} disabled={atMax && !sel.includes(h.id)} onToggle={toggle} />)}
        </div>
      </div>
      <div style={hcStyles.stickyCta}>
        <GoldCTA onClick={() => onAdvance(sel)} disabled={sel.length === 0}>
          {sel.length === 0 ? 'Pilih setidaknya satu' : 'Lanjutkan'}
        </GoldCTA>
      </div>
    </div>
  );
}

Object.assign(window, { HobbyCards });
