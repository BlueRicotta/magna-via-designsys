// Splash.jsx — title screen with full-bleed castle background
const splashStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  bg: {
    position: 'absolute', inset: 0,
    background: "url('../../assets/backgrounds/arcadia-splash.png') center/cover no-repeat",
  },
  topScrim: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 180,
    background: 'linear-gradient(to bottom, #0a0a14 0%, rgba(10,10,20,0) 100%)',
  },
  bottomScrim: {
    position: 'absolute', left: 0, right: 0, bottom: 0, height: 420,
    background: 'linear-gradient(to top, #0a0a14 0%, #0a0a14 20%, rgba(10,10,20,0.85) 55%, rgba(10,10,20,0) 100%)',
  },
  inner: {
    position: 'absolute', left: 0, right: 0, bottom: 0, top: 0,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
    padding: '0 32px 48px',
  },
  logo: { width: 220, height: 'auto', marginBottom: 14, filter: 'drop-shadow(0 0 40px rgba(200,160,48,.25))' },
  tagline: {
    fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 15,
    color: '#c8b890', letterSpacing: '0.02em', marginBottom: 36, textAlign: 'center',
  },
  hint: {
    fontFamily: "'Nunito', sans-serif", fontSize: 11, color: '#887870',
    letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 14, textAlign: 'center',
  },
};

function Splash({ onBegin }) {
  return (
    <div style={splashStyles.root}>
      <div style={splashStyles.bg} />
      <div style={splashStyles.topScrim} />
      <div style={splashStyles.bottomScrim} />
      <div style={splashStyles.inner}>
        <img src="../../assets/logos/magna-via-logo-dark.svg" alt="Magna Via" style={{ ...splashStyles.logo, background: 'transparent', mixBlendMode: 'screen' }} />
        <div style={splashStyles.tagline}>Temukan jalanmu di antara bintang-bintang.</div>
        <div style={{ width: '100%' }}>
          <GoldCTA onClick={onBegin}>Mulai Perjalanan</GoldCTA>
        </div>
        <div style={splashStyles.hint}>✦  Perjalanan ini untuk pelajar kelas 12  ✦</div>
      </div>
    </div>
  );
}

Object.assign(window, { Splash });
