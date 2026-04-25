// PhoneFrame.jsx — iPhone 14 bezel with status bar and home indicator

const phoneStyles = {
  outer: {
    width: 395,
    height: 832,
    borderRadius: 54,
    padding: 10,
    background: 'linear-gradient(145deg,#1a1a24,#0a0a14)',
    boxShadow: '0 40px 80px rgba(0,0,0,.6), 0 0 0 1px #222',
    position: 'relative',
  },
  screen: {
    width: 375,
    height: 812,
    borderRadius: 44,
    overflow: 'hidden',
    position: 'relative',
    background: '#0a0a14',
  },
  notch: {
    position: 'absolute',
    top: 18,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 120,
    height: 30,
    background: '#0a0a14',
    borderRadius: 20,
    zIndex: 10,
  },
  statusBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 48,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 28px 8px',
    color: '#e8e0d0',
    fontFamily: "'Nunito', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    zIndex: 9,
    pointerEvents: 'none',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 134,
    height: 5,
    background: '#e8e0d0',
    opacity: 0.6,
    borderRadius: 3,
    zIndex: 10,
  },
};

function PhoneFrame({ children }) {
  return (
    <div style={phoneStyles.outer}>
      <div style={phoneStyles.screen}>
        <div style={phoneStyles.notch} />
        <div style={phoneStyles.statusBar}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx="1"/><rect x="4" y="4" width="3" height="6" rx="1"/><rect x="8" y="2" width="3" height="8" rx="1"/><rect x="12" y="0" width="3" height="10" rx="1"/></svg>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="1" width="18" height="8" rx="2"/><rect x="2" y="2.5" width="15" height="5" rx="1" fill="currentColor"/><rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>
          </span>
        </div>
        {children}
        <div style={phoneStyles.homeIndicator} />
      </div>
    </div>
  );
}

Object.assign(window, { PhoneFrame });
