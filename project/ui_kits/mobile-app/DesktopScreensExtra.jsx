// DesktopScreensExtra.jsx — Splash, Biodata, Quiz, ClassResult, CenayangChat
// For desktop (1440 × 900). Centered content, capped widths.

const DESK_MAX_X = 1080;

const dxStyles = {
  stage: {
    width: 1440, height: 900,
    position: 'relative', overflow: 'hidden',
    background: '#0a0a14', color: '#e8e0d0',
    fontFamily: "'Nunito', sans-serif",
  },
  eyebrow: {
    fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
    color: '#887870', letterSpacing: '0.34em', textTransform: 'uppercase',
    marginBottom: 12, textAlign: 'center',
  },
  title: {
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 46,
    color: '#e8e0d0', letterSpacing: '0.08em', lineHeight: 1.1,
    margin: '0 0 14px', textAlign: 'center',
  },
  desc: {
    fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 18,
    color: '#a090d0', lineHeight: 1.55, margin: '0 0 28px',
    textAlign: 'center', maxWidth: 620,
  },
  ctaPrimary: {
    height: 56, padding: '0 40px', borderRadius: 12,
    background: '#c8a030', color: '#1a0e00',
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 13,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    border: 'none', cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0.5px rgba(232,208,144,0.55), 0 0 28px rgba(200,160,48,0.26)',
  },
  ctaSecondary: {
    height: 56, padding: '0 32px', borderRadius: 12,
    background: 'transparent', color: '#c8b890',
    fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 12,
    letterSpacing: '0.2em', textTransform: 'uppercase',
    border: '0.5px solid #2a2a40', cursor: 'pointer',
  },
};

// ─── SPLASH ─────────────────────────────────────────────
function DesktopSplash({ onBegin }) {
  return (
    <div style={dxStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        background: "url('../../assets/backgrounds/arcadia-splash.png') center/cover no-repeat",
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,10,20,0.65) 0%, rgba(10,10,20,0.2) 40%, rgba(10,10,20,0.85) 80%, #0a0a14 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        padding: '0 56px 80px',
      }}>
        <div style={{ width: '100%', maxWidth: 520, textAlign: 'center' }}>
          <img src="../../assets/logos/magna-via-logo-dark.svg" alt="Magna Via"
               style={{ width: 300, height: 'auto', marginBottom: 18,
                        filter: 'drop-shadow(0 0 48px rgba(200,160,48,0.3))', mixBlendMode: 'screen' }} />
          <div style={{
            fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 18,
            color: '#c8b890', marginBottom: 36,
          }}>Temukan jalanmu di antara bintang-bintang.</div>
          <button onClick={onBegin} style={{ ...dxStyles.ctaPrimary, width: '100%', maxWidth: 360 }}>
            Mulai Perjalanan
          </button>
          <div style={{
            marginTop: 20, fontFamily: "'Nunito', sans-serif", fontSize: 11,
            color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>✦  Perjalanan ini untuk pelajar kelas 12  ✦</div>
        </div>
      </div>
    </div>
  );
}

// ─── BIODATA ────────────────────────────────────────────
function DesktopBiodata({ onBack, onAdvance }) {
  const [focused, setFocused] = React.useState('nama');
  const [values, setValues] = React.useState({ nama: '', usia: '', sekolah: '', kelas: '', email: '' });
  const fields = [
    { id: 'nama', label: 'Nama Lengkap', placeholder: 'Nama lengkapmu...' },
    { id: 'usia', label: 'Usia', placeholder: 'Usiamu saat ini', type: 'number' },
    { id: 'sekolah', label: 'Asal Sekolah', placeholder: 'Nama sekolah atau institusimu' },
    { id: 'kelas', label: 'Kelas / Angkatan', placeholder: 'Contoh: XII IPA 2' },
    { id: 'email', label: 'Alamat Email', placeholder: 'emailkamu@domain.com', type: 'email' },
  ];
  return (
    <div style={dxStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        background: "url('../../assets/backgrounds/arcadia-splash.png') center/cover no-repeat",
        opacity: 0.08, filter: 'blur(14px)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #0a0a14 0%, #14141e 50%, #0a0a14 100%)', opacity: 0.88,
      }} />

      <div style={{
        position: 'absolute', top: 32, left: 56, zIndex: 10,
        padding: '10px 18px 10px 12px', borderRadius: 999,
        border: '0.5px solid #2a2a40', background: 'rgba(20,20,30,0.6)',
        color: '#c8b890', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', fontFamily: "'Cinzel', serif", cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 10,
      }} onClick={onBack}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        Kembali
      </div>

      <div style={{
        position: 'absolute', top: 80, left: 0, right: 0, bottom: 0,
        overflowY: 'auto', padding: '0 56px 40px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 680, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ color: '#c8a030', marginBottom: 14 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto', display: 'block' }}>
              <path d="M20.5 3.5c-4 1-8 3-11 7-1.5 2-2.5 4.5-3 7.5l7.5-7.5"/>
              <path d="M14 10l3 3"/>
              <path d="M6.5 21c1.5-1 3-1.5 4.5-1.5"/>
            </svg>
          </div>
          <h1 style={{ ...dxStyles.title, fontSize: 40 }}>Daftarkan Dirimu</h1>
          <p style={dxStyles.desc}>Sebelum memasuki Arcadia, perkenalkan dirimu kepada Dewan Kerajaan.</p>
        </div>

        <div style={{
          width: '100%', maxWidth: 680,
          background: '#14141e', border: '0.5px solid #2a2a40', borderRadius: 18,
          padding: 28, display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {fields.map(f => (
            <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 600,
                color: '#887870', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>{f.label}</label>
              <input type={f.type || 'text'} placeholder={f.placeholder}
                     value={values[f.id]}
                     onFocus={() => setFocused(f.id)} onBlur={() => setFocused(null)}
                     onChange={e => setValues(v => ({ ...v, [f.id]: e.target.value }))}
                     style={{
                       height: 48, borderRadius: 10,
                       background: '#0e0e1a',
                       border: focused === f.id ? '0.5px solid #c8a030' : '0.5px solid #2a2a40',
                       boxShadow: focused === f.id ? '0 0 0 3px rgba(200,160,48,0.12)' : 'none',
                       color: '#e8e0d0', fontFamily: "'Nunito', sans-serif", fontSize: 14,
                       padding: '0 16px', outline: 'none',
                       transition: 'border-color 160ms, box-shadow 160ms',
                     }} />
            </div>
          ))}
        </div>

        <button onClick={onAdvance} style={{ ...dxStyles.ctaPrimary, width: '100%', maxWidth: 360, marginTop: 26 }}>
          Masuk ke Arcadia
        </button>
        <p style={{
          marginTop: 12, fontFamily: "'Nunito', sans-serif", fontSize: 11,
          color: '#3a3450', textAlign: 'center',
        }}>Data kamu hanya digunakan untuk keperluan penelitian.</p>
      </div>
    </div>
  );
}

// ─── QUIZ SCENARIO ──────────────────────────────────────
function DesktopQuiz({ onBack, onAdvance }) {
  const [picked, setPicked] = React.useState(null);
  const S = {
    n: 1, title: 'Persimpangan Jalan',
    text: "Setelah perjalanan panjang, kamu tiba di gerbang Kerajaan Timur bernama Arcadia. Seorang penjaga bertanya: 'Apa tujuanmu datang ke sini, Pejuang?'",
    choices: [
      "Aku ingin bekerja keras dan membangun sesuatu yang nyata dengan tanganku sendiri.",
      "Aku ingin memahami rahasia dunia ini melalui pengetahuan dan penelitian.",
      "Aku ingin mengekspresikan diri dan meninggalkan karya yang semua orang akan kenang.",
      "Aku ingin membantu orang-orang yang lemah di kerajaan ini dan membuat mereka bahagia.",
    ],
  };
  const TOTAL = 15;
  return (
    <div style={dxStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(../../assets/questions/${S.n}.png)`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, rgba(10,10,20,0.35) 30%, rgba(10,10,20,0.88) 55%, rgba(10,10,20,0.96) 100%)',
      }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#2a2a40', zIndex: 5 }}>
        <div style={{
          height: '100%', width: `${(S.n / TOTAL) * 100}%`,
          background: '#c8a030', boxShadow: '0 0 12px rgba(200,160,48,0.55)',
        }} />
      </div>
      <div style={{
        position: 'absolute', top: 18, right: 40, zIndex: 5,
        fontFamily: "'Nunito', sans-serif", fontSize: 12, color: '#c8b890', letterSpacing: '0.14em',
      }}>{S.n} / {TOTAL}</div>
      <div style={{
        position: 'absolute', top: 40, left: 40, zIndex: 6,
        width: 42, height: 42, borderRadius: 11,
        background: 'rgba(10,10,20,0.7)', border: '0.5px solid #2a2a40', color: '#c8b890',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', backdropFilter: 'blur(6px)',
      }} onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, top: '40%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 56px 40px',
      }}>
        <div style={{ width: '100%', maxWidth: 820, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
          <div style={{
            background: 'rgba(10,10,20,0.85)', border: '0.5px solid #2a2a40',
            borderRadius: 14, padding: '16px 22px', marginBottom: 16,
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              fontFamily: "'Nunito', sans-serif", fontSize: 11, color: '#887870',
              letterSpacing: '0.1em', marginBottom: 6,
            }}>Skenario {S.n} · <span style={{ color: '#c8a030' }}>{S.title}</span></div>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontSize: 15, color: '#e8e0d0',
              lineHeight: 1.55, margin: 0,
            }}>{S.text}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
            {S.choices.map((c, i) => {
              const active = picked === i;
              return (
                <button key={i} onClick={() => setPicked(i)} style={{
                  position: 'relative', textAlign: 'left',
                  padding: '12px 40px 12px 16px', borderRadius: 12,
                  background: active ? '#1e1a10' : 'rgba(20,20,30,0.9)',
                  border: active ? '1px solid #c8a030' : '0.5px solid #2a2a40',
                  color: active ? '#e8e0d0' : '#c8b890',
                  fontFamily: "'Nunito', sans-serif", fontSize: 13, lineHeight: 1.5,
                  cursor: 'pointer', backdropFilter: 'blur(6px)',
                  boxShadow: active ? 'inset 0 0 22px rgba(200,160,48,0.18), 0 0 18px rgba(200,160,48,0.22)' : 'none',
                  transition: 'all 160ms',
                }}>
                  {c}
                  {active && (
                    <span style={{
                      position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                      width: 18, height: 18, borderRadius: 9,
                      background: '#c8a030', color: '#1a0e00',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700,
                    }}>✓</span>
                  )}
                </button>
              );
            })}
          </div>
          <button disabled={picked === null}
                  onClick={() => picked !== null && onAdvance && onAdvance(picked)}
                  style={{
                    ...dxStyles.ctaPrimary, width: '100%', maxWidth: 380, margin: '0 auto',
                    ...(picked === null ? { background: '#2a2a40', color: '#5a5468', cursor: 'not-allowed', boxShadow: 'none' } : {}),
                  }}>Lanjutkan Perjalanan</button>
        </div>
      </div>
    </div>
  );
}

// ─── CLASS RESULT ───────────────────────────────────────
function DesktopClassResult({ onBack, onConsult, onRestart }) {
  const border = '#c86030';
  const values = { R: 0.95, I: 0.55, A: 0.22, S: 0.45, E: 0.78, C: 0.60 };
  const axes = ['R','I','A','S','E','C'];
  const size = 280, cx = size/2, cy = size/2, rMax = size*0.38;
  const pt = (i, r) => {
    const a = (-90 + i*60) * Math.PI/180;
    return [cx + Math.cos(a)*r, cy + Math.sin(a)*r];
  };
  return (
    <div style={dxStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse at 50% 45%, rgba(200,96,48,0.2) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 35%, rgba(200,160,48,0.1) 0%, transparent 40%),
          linear-gradient(180deg, #0a0a14 0%, #14141e 50%, #0a0a14 100%)
        `,
      }} />
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }}>
        {Array.from({ length: 70 }).map((_, i) => {
          const seed = i*9301 + 49297;
          return <circle key={i} cx={(seed*131)%1440} cy={(seed*257)%900}
                         r={0.6 + ((seed*53)%100)/100*1.2}
                         fill="#e8d090" opacity={0.2 + ((seed*37)%100)/100*0.4} />;
        })}
      </svg>

      <div style={{ position: 'absolute', top: 32, left: 56, zIndex: 10 }}>
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'rgba(20,20,30,0.6)', border: '0.5px solid #2a2a40',
          color: '#c8b890', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      </div>

      <div style={{
        position: 'absolute', top: 32, left: 0, right: 0, bottom: 0,
        padding: '24px 56px 40px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        overflowY: 'auto',
      }}>
        <div style={{ width: '100%', maxWidth: 880, textAlign: 'center', marginBottom: 20 }}>
          <div style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
            color: '#c8a030', letterSpacing: '0.34em', textTransform: 'uppercase',
          }}>Bintang Telah Berbicara</div>
          <h1 style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 44,
            color: '#e8d4a0', margin: '12px 0 6px', letterSpacing: '0.08em',
          }}>The Knight of Arcadia</h1>
          <p style={{
            fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 17,
            color: '#c8b890', margin: 0,
          }}>"Pedangmu tajam, perisaimu teguh."</p>
        </div>

        {/* Two-column: portrait | radar+tags */}
        <div style={{
          width: '100%', maxWidth: 980,
          display: 'grid', gridTemplateColumns: '280px 1fr', gap: 40, alignItems: 'center',
        }}>
          <div style={{
            width: 280, aspectRatio: '3/4',
            background: '#14141e', border: `1px solid ${border}`,
            borderRadius: 16, overflow: 'hidden', position: 'relative',
            boxShadow: `0 0 40px ${border}44`,
          }}>
            <img src="../../assets/classes/the-knight.png" alt="The Knight"
                 style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                          objectFit: 'cover', objectPosition: 'center top' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 280, height: 280 }}>
              <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
                {[0.25, 0.5, 0.75, 1].map(f => (
                  <polygon key={f} points={axes.map((_, i) => pt(i, rMax*f).join(',')).join(' ')}
                           fill="none" stroke="#2a2a40" strokeWidth="0.6" />
                ))}
                {axes.map((_, i) => {
                  const [x,y] = pt(i, rMax);
                  return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#2a2a40" strokeWidth="0.6" />;
                })}
                <polygon points={axes.map((k,i) => pt(i, rMax*values[k]).join(',')).join(' ')}
                         fill="#c86030" fillOpacity="0.35" stroke="#c86030"
                         strokeOpacity="0.75" strokeWidth="1.5" strokeLinejoin="round" />
                {axes.map((k,i) => {
                  const [x,y] = pt(i, rMax*values[k]);
                  return <circle key={k} cx={x} cy={y} r="2.6" fill="#c86030" />;
                })}
                {axes.map((k,i) => {
                  const [x,y] = pt(i, rMax + 18);
                  return <text key={k} x={x} y={y} fill="#c8b890" fontFamily="Cinzel, serif"
                               fontWeight="700" fontSize="13" textAnchor="middle" dominantBaseline="central"
                               letterSpacing="0.1em">{k}</text>;
                })}
              </svg>
            </div>

            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <div style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700,
                color: '#887870', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 8,
              }}>Dimensi Dominan</div>
              <div style={{
                fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 15,
                color: '#e8e0d0', letterSpacing: '0.1em', marginBottom: 14,
              }}>Realistic · Enterprising</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {['Teknik Mesin','Teknik Sipil','Manajemen','+5 lagi'].map(t => (
                  <span key={t} style={{
                    fontFamily: "'Nunito', sans-serif", fontSize: 10.5, fontWeight: 700,
                    color: '#c8a030', letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '6px 14px', borderRadius: 999,
                    border: '0.5px solid #c8a030', background: 'rgba(200,160,48,0.06)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
          <button onClick={onConsult} style={{ ...dxStyles.ctaPrimary, minWidth: 320 }}>
            Konsultasi dengan Cenayang
          </button>
          <button onClick={onRestart} style={{ ...dxStyles.ctaSecondary, minWidth: 220 }}>
            Ulangi Perjalanan
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CENAYANG CHAT ──────────────────────────────────────
function DesktopChat({ onBack }) {
  return (
    <div style={{ ...dxStyles.stage, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(90,58,138,0.06) 0%, rgba(10,10,20,0) 70%)',
      }} />

      <div style={{
        flexShrink: 0, background: '#14141e', borderBottom: '0.5px solid #2a2a40',
        padding: '20px 56px', display: 'flex', alignItems: 'center', gap: 18,
        position: 'relative', zIndex: 5,
      }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, borderRadius: 10, background: 'transparent',
          border: 'none', color: '#887870', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div style={{
          width: 48, height: 48, borderRadius: 24, overflow: 'hidden',
          border: '1.5px solid #c8a030', boxShadow: '0 0 12px rgba(200,160,48,0.3)',
        }}>
          <img src="../../assets/characters/cenayang-avatar.png" alt=""
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 17,
            color: '#e8e0d0', letterSpacing: '0.04em',
          }}>Cenayang</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
            <span style={{ width: 7, height: 7, borderRadius: 4,
                           background: '#4aa06a', boxShadow: '0 0 6px rgba(74,160,106,0.6)' }} />
            <span style={{ fontSize: 12, color: '#887870' }}>Hadir untukmu</span>
          </div>
        </div>
        <div style={{
          background: '#1a0a1a', border: '0.5px solid #5a3a8a', color: '#c090f0',
          fontSize: 12, fontWeight: 500, padding: '6px 14px', borderRadius: 999,
        }}>4 sesi tersisa</div>
      </div>

      <div style={{
        position: 'absolute', top: 88, left: 0, right: 0, bottom: 96,
        overflowY: 'auto', padding: '24px 0',
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 780, padding: '0 32px' }}>
          <ChatBubble oracle
            text="Selamat atas perjalananmu, Pejuang. Sebagai The Knight, kekuatanmu ada pada tindakan nyata dan kemampuan membangun sesuatu dengan tanganmu sendiri."
            time="10:24" size={14} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '14px 0 22px' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(58,52,80,0.35)' }} />
            <span style={{ fontSize: 11, color: '#3a3450', letterSpacing: '0.1em' }}>Hari ini</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(58,52,80,0.35)' }} />
          </div>
          <ChatBubble text="Jurusan apa yang paling cocok untukku sebagai The Knight?" size={14} />
          <ChatBubble oracle
            text="Berdasarkan profil Realistic dan Enterprising-mu, jurusan Teknik Sipil, Teknik Mesin, atau Manajemen sangat selaras dengan karaktermu. Kamu bekerja paling baik saat hasilnya bisa dilihat dan dirasakan secara nyata."
            size={14} />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 60, left: 0, right: 0,
        background: '#1a0a0a', borderTop: '0.5px solid #c83020',
        padding: '6px 16px', textAlign: 'center', zIndex: 4,
      }}>
        <span style={{ fontSize: 12, color: '#c86030' }}>Sesi konsultasimu hampir habis</span>
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#14141e', borderTop: '0.5px solid #2a2a40',
        padding: '14px 56px', display: 'flex', alignItems: 'center', gap: 14, zIndex: 5,
      }}>
        <input type="text" placeholder="Tanyakan sesuatu..." style={{
          flex: 1, height: 44, background: '#0e0e1a', border: '0.5px solid #2a2a40',
          borderRadius: 22, padding: '0 20px', color: '#e8e0d0',
          fontFamily: "'Nunito', sans-serif", fontSize: 14, outline: 'none',
        }} />
        <button style={{
          width: 44, height: 44, borderRadius: 22, background: '#5a3a8a',
          color: '#fff', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 12px rgba(90,58,138,0.45)',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { DesktopSplash, DesktopBiodata, DesktopQuiz, DesktopClassResult, DesktopChat });
