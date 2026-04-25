// OracleIntro.jsx — Cenayang welcome screen with dialogue box

const oracleStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  aura: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(closest-side at 50% 42%, rgba(90,58,138,0.55) 0%, rgba(90,58,138,0.15) 40%, rgba(10,10,20,0) 72%)',
  },
  portrait: {
    position: 'absolute', top: 50, left: 0, right: 0,
    height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  portraitImg: { height: '100%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.6))' },
  dialogBox: {
    position: 'absolute', left: 20, right: 20, bottom: 132,
    background: 'linear-gradient(180deg, rgba(30,20,50,0.92), rgba(20,14,36,0.96))',
    border: '0.5px solid #3a2a60',
    borderRadius: 16,
    padding: '18px 20px 16px',
    boxShadow: '0 0 40px rgba(90,58,138,0.35), 0 10px 32px rgba(0,0,0,0.55)',
    backdropFilter: 'blur(6px)',
  },
  speaker: {
    display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
  },
  speakerAvatar: {
    width: 28, height: 28, borderRadius: 14, overflow: 'hidden',
    border: '0.5px solid #c8a030', boxShadow: '0 0 10px rgba(200,160,48,.35)',
  },
  speakerName: {
    fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 12,
    color: '#c8a030', letterSpacing: '0.18em', textTransform: 'uppercase',
  },
  quote: {
    fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 17,
    color: '#e8d4b0', lineHeight: 1.55, margin: 0,
  },
  tapHint: {
    display: 'block', marginTop: 12, textAlign: 'right',
    fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 600,
    color: '#887870', letterSpacing: '0.18em', textTransform: 'uppercase',
  },
  cta: { position: 'absolute', left: 20, right: 20, bottom: 52 },
};

function OracleIntro({ onAdvance, onBack }) {
  return (
    <div style={oracleStyles.root}>
      <div style={oracleStyles.aura} />
      <ConstellationBg opacity={0.1} />
      <BackHeader onBack={onBack} step={1} total={5} title="Cenayang" />
      <div style={oracleStyles.portrait}>
        <img src="../../assets/characters/cenayang-portrait.png" style={oracleStyles.portraitImg} alt="" />
      </div>
      <div style={oracleStyles.dialogBox}>
        <div style={oracleStyles.speaker}>
          <div style={oracleStyles.speakerAvatar}>
            <img src="../../assets/characters/cenayang-avatar.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
          </div>
          <span style={oracleStyles.speakerName}>Cenayang</span>
        </div>
        <p style={oracleStyles.quote}>"Selamat datang, Pejuang. Arcadia telah lama menanti kedatanganmu. Mari kita baca bintang-bintang yang menuntun langkahmu..."</p>
        <span style={oracleStyles.tapHint}>Tap untuk lanjut</span>
      </div>
      <div style={oracleStyles.cta}>
        <GoldCTA onClick={onAdvance}>Teruskan</GoldCTA>
      </div>
    </div>
  );
}

Object.assign(window, { OracleIntro });
