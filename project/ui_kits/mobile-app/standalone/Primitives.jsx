// Primitives.jsx — shared buttons, headers, scrims, eyebrows
// All visual rules come from colors_and_type.css

const pStyles = {
  goldCTA: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    background: '#c8a030',
    color: '#1a0e00',
    fontFamily: "'Cinzel', Georgia, serif",
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0.5px rgba(232,208,144,0.5), 0 0 22px rgba(200,160,48,0.22)',
    transition: 'transform 180ms cubic-bezier(.4,0,.2,1), box-shadow 220ms',
  },
  secondary: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    background: 'transparent',
    color: '#c8a030',
    fontFamily: "'Cinzel', Georgia, serif",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    border: '0.5px solid #c8a030',
    cursor: 'pointer',
  },
  ghost: {
    background: 'transparent',
    color: '#c8b890',
    border: 'none',
    fontFamily: "'Cinzel', Georgia, serif",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: 10,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    border: '0.5px solid #2a2a40',
    background: 'rgba(20,20,30,0.6)',
    color: '#c8b890',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: 18,
    padding: 0,
  },
  eyebrow: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    color: '#887870',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
  },
  bottomScrim: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    height: 220,
    background: 'linear-gradient(to top, #0a0a14 0%, rgba(10,10,20,0.85) 40%, rgba(10,10,20,0) 100%)',
    pointerEvents: 'none',
  },
};

function GoldCTA({ children, onClick, disabled }) {
  const s = { ...pStyles.goldCTA };
  if (disabled) {
    s.background = 'rgba(200,160,48,0.35)';
    s.color = 'rgba(26,14,0,0.6)';
    s.boxShadow = 'none';
    s.cursor = 'not-allowed';
  }
  return <button style={s} onClick={disabled ? undefined : onClick}>{children}</button>;
}

function SecondaryButton({ children, onClick }) {
  return <button style={pStyles.secondary} onClick={onClick}>{children}</button>;
}

function GhostButton({ children, onClick }) {
  return <button style={pStyles.ghost} onClick={onClick}>{children}</button>;
}

function IconButton({ children, onClick, ariaLabel }) {
  return <button style={pStyles.iconBtn} onClick={onClick} aria-label={ariaLabel}>{children}</button>;
}

function Eyebrow({ children, color = '#887870' }) {
  return <div style={{ ...pStyles.eyebrow, color }}>{children}</div>;
}

function BackHeader({ onBack, step, total, title }) {
  return (
    <div style={{
      position: 'absolute', top: 56, left: 0, right: 0, zIndex: 5,
      padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <IconButton onClick={onBack} ariaLabel="Back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </IconButton>
      <div style={{ flex: 1 }}>
        {step ? <Eyebrow>{`Step ${step} of ${total}`}</Eyebrow> : null}
        {title ? <div style={{ fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 600, color: '#e8e0d0', letterSpacing: '0.04em', marginTop: 2 }}>{title}</div> : null}
      </div>
    </div>
  );
}

function BottomScrim() {
  return <div style={pStyles.bottomScrim} />;
}

function ConstellationBg({ opacity = 0.08 }) {
  // A sparse constellation pattern rendered as SVG, used as atmospheric texture
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none' }} viewBox="0 0 375 812" preserveAspectRatio="xMidYMid slice">
      <g stroke="#c8a030" strokeWidth="0.6" fill="none">
        <line x1="40" y1="120" x2="120" y2="180"/><line x1="120" y1="180" x2="210" y2="140"/>
        <line x1="210" y1="140" x2="300" y2="220"/><line x1="60" y1="360" x2="150" y2="410"/>
        <line x1="150" y1="410" x2="240" y2="370"/><line x1="240" y1="370" x2="320" y2="440"/>
        <line x1="80" y1="600" x2="180" y2="650"/><line x1="180" y1="650" x2="290" y2="610"/>
      </g>
      <g fill="#e8d090">
        <circle cx="40" cy="120" r="1.6"/><circle cx="120" cy="180" r="2"/><circle cx="210" cy="140" r="1.8"/><circle cx="300" cy="220" r="2"/>
        <circle cx="60" cy="360" r="1.6"/><circle cx="150" cy="410" r="2"/><circle cx="240" cy="370" r="1.8"/><circle cx="320" cy="440" r="2"/>
        <circle cx="80" cy="600" r="1.6"/><circle cx="180" cy="650" r="2"/><circle cx="290" cy="610" r="1.8"/>
      </g>
    </svg>
  );
}

Object.assign(window, { GoldCTA, SecondaryButton, GhostButton, IconButton, Eyebrow, BackHeader, BottomScrim, ConstellationBg });
