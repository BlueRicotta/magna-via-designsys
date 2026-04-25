// ChatBubble.jsx — shared chat bubble for tablet/desktop Cenayang chat
// Matches the mobile CenayangChat visual language.

function ChatBubble({ oracle, text, time, size = 13 }) {
  return (
    <div style={{
      display: 'flex', justifyContent: oracle ? 'flex-start' : 'flex-end',
      marginBottom: 14,
    }}>
      <div style={{
        maxWidth: '78%',
        padding: '12px 18px',
        borderRadius: oracle ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
        background: oracle ? 'rgba(90,58,138,0.18)' : 'rgba(200,160,48,0.16)',
        border: oracle ? '0.5px solid rgba(144,96,208,0.35)' : '0.5px solid rgba(200,160,48,0.35)',
        color: oracle ? '#e8d4f0' : '#e8e0d0',
        fontFamily: "'Nunito', sans-serif", fontSize: size, lineHeight: 1.55,
        boxShadow: oracle ? '0 0 18px rgba(90,58,138,0.2)' : '0 0 18px rgba(200,160,48,0.12)',
      }}>
        {text}
        {time && (
          <div style={{
            marginTop: 6, fontSize: 10, color: '#887870',
            letterSpacing: '0.08em', textAlign: 'right',
          }}>{time}</div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ChatBubble });
