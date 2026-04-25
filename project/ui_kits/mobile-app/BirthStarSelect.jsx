// BirthStarSelect.jsx — choose one of four elements
const STARS = [
  { id: 'ignis',  name: 'Ignis',  label: 'Api',   desc: 'Berani, gagah, bertindak cepat.',     color: '#c83020', glow: 'rgba(200,48,32,0.5)' },
  { id: 'aqua',   name: 'Aqua',   label: 'Air',   desc: 'Empatis, mengalir, menghubungkan.',  color: '#2060c8', glow: 'rgba(32,96,200,0.5)' },
  { id: 'terra',  name: 'Terra',  label: 'Bumi',  desc: 'Teguh, teratur, membangun.',          color: '#309050', glow: 'rgba(48,144,80,0.5)' },
  { id: 'ventus', name: 'Ventus', label: 'Angin', desc: 'Ingin tahu, berpikir, merenungi.',    color: '#7030c0', glow: 'rgba(112,48,192,0.55)' },
];

const bsStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  header: { position: 'absolute', top: 110, left: 0, right: 0, padding: '0 24px', textAlign: 'center' },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase' },
  title: { fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 28, color: '#e8e0d0', margin: '10px 0 6px', letterSpacing: '0.04em' },
  subtitle: { fontFamily: "'Nunito', sans-serif", fontSize: 14, color: '#c8b890', lineHeight: 1.5, margin: 0 },
  grid: {
    position: 'absolute', top: 240, left: 0, right: 0, padding: '0 20px',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
  },
  card: {
    position: 'relative', aspectRatio: '1/1.15',
    background: '#14141e', border: '0.5px solid #2a2a40', borderRadius: 14,
    overflow: 'hidden', cursor: 'pointer', transition: 'all 220ms cubic-bezier(.4,0,.2,1)',
  },
  cardImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 },
  cardScrim: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,20,0.95) 0%, rgba(10,10,20,0) 55%)' },
  cardLabel: { position: 'absolute', left: 10, right: 10, bottom: 8 },
  cardTitle: { fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 16, letterSpacing: '0.1em', textTransform: 'uppercase' },
  cardDesc: { fontFamily: "'Nunito', sans-serif", fontSize: 11, color: '#c8b890', marginTop: 2, lineHeight: 1.3 },
  bottom: { position: 'absolute', left: 20, right: 20, bottom: 46 },
};

function BirthStarCard({ star, selected, onSelect }) {
  const style = {
    ...bsStyles.card,
    borderColor: selected ? star.color : '#2a2a40',
    boxShadow: selected ? `0 0 24px ${star.glow}, inset 0 0 0 0.5px ${star.color}` : 'none',
    transform: selected ? 'translateY(-2px)' : 'none',
  };
  return (
    <div style={style} onClick={() => onSelect(star.id)}>
      <img src={`../../assets/birth-stars/${star.id}.png`} style={bsStyles.cardImg} alt="" />
      <div style={bsStyles.cardScrim} />
      <div style={bsStyles.cardLabel}>
        <div style={{ ...bsStyles.cardTitle, color: selected ? star.color : '#e8e0d0' }}>{star.name}</div>
        <div style={bsStyles.cardDesc}>{star.label} · {star.desc}</div>
      </div>
      {selected && (
        <div style={{ position: 'absolute', top: 8, right: 8, width: 22, height: 22, borderRadius: 11, background: star.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>✓</div>
      )}
    </div>
  );
}

function BirthStarSelect({ onBack, onAdvance }) {
  const [sel, setSel] = React.useState(null);
  return (
    <div style={bsStyles.root}>
      <ConstellationBg opacity={0.09} />
      <BackHeader onBack={onBack} step={2} total={5} />
      <div style={bsStyles.header}>
        <div style={bsStyles.eyebrow}>Bab I · Bintang Lahirmu</div>
        <h1 style={bsStyles.title}>Pilih Bintangmu</h1>
        <p style={bsStyles.subtitle}>Keempat elemen ini menuntun pejuang-pejuang Arcadia. Mana yang berdenyut di dalammu?</p>
      </div>
      <div style={bsStyles.grid}>
        {STARS.map(s => <BirthStarCard key={s.id} star={s} selected={sel === s.id} onSelect={setSel} />)}
      </div>
      <div style={bsStyles.bottom}>
        <GoldCTA onClick={() => onAdvance(sel)} disabled={!sel}>
          {sel ? 'Kunci Bintangmu' : 'Pilih untuk lanjut'}
        </GoldCTA>
      </div>
    </div>
  );
}

Object.assign(window, { BirthStarSelect });
