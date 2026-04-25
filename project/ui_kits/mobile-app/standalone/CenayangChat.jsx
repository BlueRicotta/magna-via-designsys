// CenayangChat.jsx — final screen (9 of 9). AI oracle consultation.
// Users land here from Results via "Konsultasi dengan Cenayang".
// Dark mystical palette, Cinzel for the name, bubble colors tuned to feel
// like communicating with an ancient sage through a magical medium.

const ccStyles = {
  // Root is a flex column: header, chat, warn, input are siblings that
  // naturally reserve their own space. No absolute positioning → no overlap.
  root: {
    position: 'absolute', inset: 0,
    background: '#0a0a14', overflow: 'hidden',
    fontFamily: "'Nunito', sans-serif",
    display: 'flex', flexDirection: 'column',
  },
  // Very faint mystic purple glow at dead center
  centerGlow: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(90,58,138,0.05) 0%, rgba(90,58,138,0.02) 40%, rgba(10,10,20,0) 70%)',
    pointerEvents: 'none',
  },

  // Header — flex child. Takes its own height; not absolute.
  header: {
    flexShrink: 0,
    background: '#14141e',
    borderBottom: '0.5px solid #2a2a40',
    padding: '10px 16px',
    paddingTop: 44,
    paddingBottom: 12,
    display: 'flex', alignItems: 'center', gap: 10,
    position: 'relative', zIndex: 5,
  },
  backBtn: {
    width: 28, height: 28, borderRadius: 8,
    background: 'transparent', border: 'none',
    color: '#887870',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', padding: 0, flexShrink: 0,
  },
  avatar: {
    width: 40, height: 40, borderRadius: 20,
    overflow: 'hidden',
    border: '1.5px solid #c8a030',
    boxShadow: '0 0 8px rgba(200,160,48,0.25)',
    flexShrink: 0,
  },
  avatarImg: { width: '100%', height: '100%', objectFit: 'cover' },
  identity: { flex: 1, minWidth: 0, marginLeft: 2 },
  name: {
    fontFamily: "'Cinzel', serif", fontWeight: 700,
    fontSize: 14, color: '#e8e0d0', letterSpacing: '0.04em',
    lineHeight: 1.1,
  },
  presence: {
    display: 'flex', alignItems: 'center', gap: 6,
    marginTop: 3,
  },
  presenceDot: {
    width: 6, height: 6, borderRadius: 3,
    background: '#4aa06a',
    boxShadow: '0 0 6px rgba(74,160,106,0.6)',
  },
  presenceText: {
    fontSize: 11, fontWeight: 400,
    color: '#887870', letterSpacing: '0.01em',
  },
  sessionPill: {
    background: '#1a0a1a',
    border: '0.5px solid #5a3a8a',
    color: '#c090f0',
    fontSize: 11, fontWeight: 500,
    padding: '4px 10px',
    borderRadius: 20,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },

  // Chat area — flex:1 flex child. Owns its scrollable region and starts
  // immediately below the header with 12px breathing room on top.
  chatArea: {
    flex: 1, minHeight: 0,
    overflowY: 'auto',
    padding: '12px 16px 20px',
    WebkitOverflowScrolling: 'touch',
    position: 'relative', zIndex: 2,
  },

  // Oracle (left) row
  oracleRow: {
    display: 'flex', alignItems: 'flex-end', gap: 8,
    marginBottom: 16,
  },
  oracleAvatar: {
    width: 28, height: 28, borderRadius: 14,
    overflow: 'hidden',
    border: '0.5px solid rgba(200,160,48,0.4)',
    flexShrink: 0,
    marginBottom: 14, // sit flush with bubble bottom line
  },
  oracleBubble: {
    background: '#1e1428',
    border: '0.5px solid #2a2a40',
    borderRadius: '4px 12px 12px 12px',
    padding: '12px 14px',
    maxWidth: '78%',
  },
  oracleText: {
    fontSize: 13, fontWeight: 400, color: '#e8e0d0',
    lineHeight: 1.6, margin: 0,
  },
  bubbleTime: {
    fontSize: 10, color: '#3a3450',
    marginTop: 6, marginLeft: 4,
  },

  // User (right) row
  userRow: {
    display: 'flex', justifyContent: 'flex-end',
    marginBottom: 16,
    width: '100%',
  },
  userCol: {
    maxWidth: '72%',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
  },
  userBubble: {
    background: '#2a1a3a',
    border: '0.5px solid #5a3a8a',
    borderRadius: '12px 4px 12px 12px',
    padding: '12px 14px',
    maxWidth: '72%',
  },
  userText: {
    fontSize: 13, fontWeight: 400, color: '#e8e0d0',
    lineHeight: 1.6, margin: 0,
  },

  // Date separator
  dateSep: {
    display: 'flex', alignItems: 'center', gap: 10,
    margin: '8px 0 18px',
  },
  dateLine: { flex: 1, height: 1, background: 'rgba(58,52,80,0.35)' },
  dateText: {
    fontSize: 10, fontWeight: 400, color: '#3a3450',
    letterSpacing: '0.08em',
  },

  // Session warning bar — flex child, sits above input bar.
  warnBar: {
    flexShrink: 0,
    background: '#1a0a0a',
    borderTop: '0.5px solid #c83020',
    padding: '6px 16px',
    textAlign: 'center',
    position: 'relative', zIndex: 4,
  },
  warnText: {
    fontSize: 11, fontWeight: 400, color: '#c86030',
    letterSpacing: '0.02em',
  },

  // Input bar — flex child at the bottom.
  inputBar: {
    flexShrink: 0,
    background: '#14141e',
    borderTop: '0.5px solid #2a2a40',
    padding: '10px 12px',
    paddingBottom: 18,
    display: 'flex', alignItems: 'center', gap: 10,
    position: 'relative', zIndex: 5,
  },
  textInput: {
    flex: 1,
    height: 40,
    background: '#0e0e1a',
    border: '0.5px solid #2a2a40',
    borderRadius: 20,
    padding: '0 16px',
    color: '#e8e0d0',
    fontFamily: "'Nunito', sans-serif",
    fontSize: 13,
    outline: 'none',
  },
  sendBtn: {
    width: 40, height: 40, borderRadius: 20,
    background: '#5a3a8a',
    color: '#ffffff',
    border: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    boxShadow: '0 0 12px rgba(90,58,138,0.45)',
    padding: 0,
  },
};

// Faint, stable star field — ~20 tiny dots at 15-25% opacity
function ChatStarField() {
  const stars = React.useMemo(() => {
    let s = 41237;
    const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    return Array.from({ length: 20 }, () => ({
      cx: rand() * 375,
      cy: rand() * 812,
      r: 0.5 + rand() * 0.9,
      o: 0.15 + rand() * 0.1,
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

function CenayangChat({ onBack }) {
  const chatRef = React.useRef(null);

  return (
    <div style={ccStyles.root}>
      <div style={ccStyles.centerGlow} />
      <ChatStarField />

      {/* Header */}
      <div style={ccStyles.header}>
        <button style={ccStyles.backBtn} onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div style={ccStyles.avatar}>
          <img src="assets/characters/cenayang-avatar.png" alt="" style={ccStyles.avatarImg} />
        </div>
        <div style={ccStyles.identity}>
          <div style={ccStyles.name}>Cenayang</div>
          <div style={ccStyles.presence}>
            <span style={ccStyles.presenceDot} />
            <span style={ccStyles.presenceText}>Hadir untukmu</span>
          </div>
        </div>
        <div style={ccStyles.sessionPill}>4 sesi tersisa</div>
      </div>

      {/* Chat area */}
      <div style={ccStyles.chatArea} ref={chatRef}>
        {/* Message 1 — Oracle */}
        <div style={ccStyles.oracleRow}>
          <div style={ccStyles.oracleAvatar}>
            <img src="assets/characters/cenayang-avatar.png" alt="" style={ccStyles.avatarImg} />
          </div>
          <div>
            <div style={ccStyles.oracleBubble}>
              <p style={ccStyles.oracleText}>
                Selamat atas perjalananmu, Pejuang. Sebagai The Knight, kekuatanmu ada pada tindakan nyata dan kemampuan membangun sesuatu dengan tanganmu sendiri.
              </p>
            </div>
            <div style={ccStyles.bubbleTime}>10:24</div>
          </div>
        </div>

        {/* Date separator */}
        <div style={ccStyles.dateSep}>
          <div style={ccStyles.dateLine} />
          <span style={ccStyles.dateText}>Hari ini</span>
          <div style={ccStyles.dateLine} />
        </div>

        {/* Message 2 — User */}
        <div style={ccStyles.userRow}>
          <div style={ccStyles.userCol}>
            <div style={ccStyles.userBubble}>
              <p style={ccStyles.userText}>
                Jurusan apa yang paling cocok untukku sebagai The Knight?
              </p>
            </div>
          </div>
        </div>

        {/* Message 3 — Oracle (partially cut off to invite scrolling) */}
        <div style={ccStyles.oracleRow}>
          <div style={ccStyles.oracleAvatar}>
            <img src="assets/characters/cenayang-avatar.png" alt="" style={ccStyles.avatarImg} />
          </div>
          <div>
            <div style={ccStyles.oracleBubble}>
              <p style={ccStyles.oracleText}>
                Berdasarkan profil Realistic dan Enterprising-mu, jurusan Teknik Sipil, Teknik Mesin, atau Manajemen sangat selaras dengan karaktermu. Kamu bekerja paling baik saat hasilnya bisa dilihat dan dirasakan secara nyata. Pertimbangkan pula bidang yang memadukan kepemimpinan dan keterampilan teknis — di sanalah pedang dan perisaimu akan paling bersinar. Ingatlah, setiap jalan memiliki tantangannya sendiri; yang penting adalah kesesuaian antara dirimu dan tempat kamu akan berdiri. Arcadia memanggil mereka yang berani membangun masa depan dengan tangan mereka sendiri...
              </p>
            </div>
          </div>
        </div>
        {/* Spacer to guarantee overflow so Message 3 is cut off at bottom */}
        <div style={{ height: 60 }} />
      </div>

      {/* Session warning bar */}
      <div style={ccStyles.warnBar}>
        <span style={ccStyles.warnText}>Sesi konsultasimu hampir habis</span>
      </div>

      {/* Input bar */}
      <div style={ccStyles.inputBar}>
        <input
          type="text"
          placeholder="Tanyakan sesuatu..."
          style={ccStyles.textInput}
        />
        <button style={ccStyles.sendBtn} aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { CenayangChat });
