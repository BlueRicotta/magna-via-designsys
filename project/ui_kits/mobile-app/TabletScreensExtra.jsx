// TabletScreensExtra.jsx — Splash, Biodata, Quiz, ClassResult, CenayangChat
// For tablet (1024 × 1366 portrait). Centered, capped content widths.

const txStyles = {
  stage: {
    width: 1024, height: 1366,
    position: 'relative', overflow: 'hidden',
    background: '#0a0a14', color: '#e8e0d0',
    fontFamily: "'Nunito', sans-serif",
  },
  ctaPrimary: {
    height: 60, padding: '0 36px', borderRadius: 12,
    background: '#c8a030', color: '#1a0e00',
    fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 14,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    border: 'none', cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0.5px rgba(232,208,144,0.55), 0 0 28px rgba(200,160,48,0.26)',
  },
  ctaSecondary: {
    height: 60, padding: '0 28px', borderRadius: 12,
    background: 'transparent', color: '#c8b890',
    fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 13,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    border: '0.5px solid #2a2a40', cursor: 'pointer',
  },
  backPill: {
    position: 'absolute', top: 60, left: 48, zIndex: 10,
    padding: '10px 18px 10px 12px', borderRadius: 999,
    border: '0.5px solid #2a2a40', background: 'rgba(20,20,30,0.6)',
    color: '#c8b890', fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
    textTransform: 'uppercase', fontFamily: "'Cinzel', serif", cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 10,
  },
};

// ─── SPLASH ─────────────────────────────────────────────
function TabletSplash({ onBegin }) {
  return (
    <div style={txStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        background: "url('../../assets/backgrounds/arcadia-splash.png') center/cover no-repeat",
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,10,20,0.55) 0%, rgba(10,10,20,0.15) 40%, rgba(10,10,20,0.85) 75%, #0a0a14 100%)',
      }} />
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 120, padding: '0 56px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <img src="../../assets/logos/magna-via-logo-dark.svg" alt="Magna Via"
             style={{ width: 340, height: 'auto', marginBottom: 20,
                      filter: 'drop-shadow(0 0 48px rgba(200,160,48,0.3))', mixBlendMode: 'screen' }} />
        <div style={{
          fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 19,
          color: '#c8b890', marginBottom: 42, textAlign: 'center',
        }}>Temukan jalanmu di antara bintang-bintang.</div>
        <button onClick={onBegin} style={{ ...txStyles.ctaPrimary, width: '100%', maxWidth: 400 }}>
          Mulai Perjalanan
        </button>
        <div style={{
          marginTop: 22, fontFamily: "'Nunito', sans-serif", fontSize: 11.5,
          color: '#887870', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center',
        }}>✦  Perjalanan ini untuk pelajar kelas 12  ✦</div>
      </div>
    </div>
  );
}

// ─── BIODATA ────────────────────────────────────────────
function TabletBiodata({ onBack, onAdvance }) {
  const [focused, setFocused] = React.useState('nama');
  const [values, setValues] = React.useState({ nama: '', usia: '', sekolah: '', kelas: '', email: '' });
  const fields = [
    { id: 'nama',    label: 'Nama Lengkap',     placeholder: 'Nama lengkapmu...' },
    { id: 'usia',    label: 'Usia',             placeholder: 'Usiamu saat ini', type: 'number' },
    { id: 'sekolah', label: 'Asal Sekolah',     placeholder: 'Nama sekolah atau institusimu' },
    { id: 'kelas',   label: 'Kelas / Angkatan', placeholder: 'Contoh: XII IPA 2' },
    { id: 'email',   label: 'Alamat Email',     placeholder: 'emailkamu@domain.com', type: 'email' },
  ];
  return (
    <div style={txStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        background: "url('../../assets/backgrounds/arcadia-splash.png') center/cover no-repeat",
        opacity: 0.08, filter: 'blur(14px)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #0a0a14 0%, #14141e 50%, #0a0a14 100%)', opacity: 0.9,
      }} />

      <div style={txStyles.backPill} onClick={onBack}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        Kembali
      </div>

      <div style={{
        position: 'absolute', top: 130, left: 0, right: 0, bottom: 0,
        overflowY: 'auto', padding: '0 56px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 620, textAlign: 'center', marginBottom: 30 }}>
          <div style={{ color: '#c8a030', marginBottom: 14 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto', display: 'block' }}>
              <path d="M20.5 3.5c-4 1-8 3-11 7-1.5 2-2.5 4.5-3 7.5l7.5-7.5"/>
              <path d="M14 10l3 3"/>
              <path d="M6.5 21c1.5-1 3-1.5 4.5-1.5"/>
            </svg>
          </div>
          <h1 style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 40,
            color: '#e8e0d0', letterSpacing: '0.08em', margin: '0 0 12px',
          }}>Daftarkan Dirimu</h1>
          <p style={{
            fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 18,
            color: '#a090d0', lineHeight: 1.5, margin: 0,
          }}>Sebelum memasuki Arcadia, perkenalkan dirimu kepada Dewan Kerajaan.</p>
        </div>

        <div style={{
          width: '100%', maxWidth: 620,
          background: '#14141e', border: '0.5px solid #2a2a40', borderRadius: 18,
          padding: 28, display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {fields.map(f => (
            <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 600,
                color: '#887870', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>{f.label}</label>
              <input type={f.type || 'text'} placeholder={f.placeholder}
                     value={values[f.id]}
                     onFocus={() => setFocused(f.id)} onBlur={() => setFocused(null)}
                     onChange={e => setValues(v => ({ ...v, [f.id]: e.target.value }))}
                     style={{
                       height: 52, borderRadius: 10,
                       background: '#0e0e1a',
                       border: focused === f.id ? '0.5px solid #c8a030' : '0.5px solid #2a2a40',
                       boxShadow: focused === f.id ? '0 0 0 3px rgba(200,160,48,0.12)' : 'none',
                       color: '#e8e0d0', fontFamily: "'Nunito', sans-serif", fontSize: 15,
                       padding: '0 18px', outline: 'none',
                       transition: 'border-color 160ms, box-shadow 160ms',
                     }} />
            </div>
          ))}
        </div>

        <button onClick={onAdvance} style={{ ...txStyles.ctaPrimary, width: '100%', maxWidth: 400, marginTop: 28 }}>
          Masuk ke Arcadia
        </button>
        <p style={{
          marginTop: 14, fontFamily: "'Nunito', sans-serif", fontSize: 12,
          color: '#3a3450', textAlign: 'center',
        }}>Data kamu hanya digunakan untuk keperluan penelitian.</p>
      </div>
    </div>
  );
}

// ─── QUIZ SCENARIO ──────────────────────────────────────
function TabletQuiz({ onBack, onAdvance }) {
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
    <div style={txStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(../../assets/questions/${S.n}.png)`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,20,0) 0%, rgba(10,10,20,0.35) 35%, rgba(10,10,20,0.92) 62%, rgba(10,10,20,0.98) 100%)',
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#2a2a40', zIndex: 5 }}>
        <div style={{
          height: '100%', width: `${(S.n / TOTAL) * 100}%`,
          background: '#c8a030', boxShadow: '0 0 12px rgba(200,160,48,0.55)',
        }} />
      </div>
      <div style={{
        position: 'absolute', top: 24, right: 48, zIndex: 5,
        fontFamily: "'Nunito', sans-serif", fontSize: 13, color: '#c8b890', letterSpacing: '0.14em',
      }}>{S.n} / {TOTAL}</div>
      <div style={{
        position: 'absolute', top: 48, left: 48, zIndex: 6,
        width: 44, height: 44, borderRadius: 12,
        background: 'rgba(10,10,20,0.7)', border: '0.5px solid #2a2a40', color: '#c8b890',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', backdropFilter: 'blur(6px)',
      }} onClick={onBack}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, top: '45%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 48px 60px',
      }}>
        <div style={{ width: '100%', maxWidth: 720, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
          <div style={{
            background: 'rgba(10,10,20,0.85)', border: '0.5px solid #2a2a40',
            borderRadius: 14, padding: '18px 22px', marginBottom: 18,
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              fontFamily: "'Nunito', sans-serif", fontSize: 11, color: '#887870',
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8,
            }}>Skenario {S.n} · <span style={{ color: '#c8a030' }}>{S.title}</span></div>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontSize: 16, color: '#e8e0d0',
              lineHeight: 1.6, margin: 0,
            }}>{S.text}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
            {S.choices.map((c, i) => {
              const active = picked === i;
              return (
                <button key={i} onClick={() => setPicked(i)} style={{
                  position: 'relative', textAlign: 'left',
                  padding: '14px 44px 14px 20px', borderRadius: 12,
                  background: active ? '#1e1a10' : 'rgba(20,20,30,0.9)',
                  border: active ? '1px solid #c8a030' : '0.5px solid #2a2a40',
                  color: active ? '#e8e0d0' : '#c8b890',
                  fontFamily: "'Nunito', sans-serif", fontSize: 14, lineHeight: 1.55,
                  cursor: 'pointer', backdropFilter: 'blur(6px)',
                  boxShadow: active ? 'inset 0 0 22px rgba(200,160,48,0.18), 0 0 18px rgba(200,160,48,0.22)' : 'none',
                  transition: 'all 160ms',
                }}>
                  {c}
                  {active && (
                    <span style={{
                      position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                      width: 20, height: 20, borderRadius: 10,
                      background: '#c8a030', color: '#1a0e00',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 700,
                    }}>✓</span>
                  )}
                </button>
              );
            })}
          </div>
          <button disabled={picked === null}
                  onClick={() => picked !== null && onAdvance && onAdvance(picked)}
                  style={{
                    ...txStyles.ctaPrimary, width: '100%', maxWidth: 400, margin: '0 auto',
                    ...(picked === null ? { background: '#2a2a40', color: '#5a5468', cursor: 'not-allowed', boxShadow: 'none' } : {}),
                  }}>Lanjutkan Perjalanan</button>
        </div>
      </div>
    </div>
  );
}

// ─── CLASS RESULT ───────────────────────────────────────
function TabletClassResult({ onBack, onConsult, onRestart }) {
  const border = '#c86030';
  const values = { R: 0.95, I: 0.55, A: 0.22, S: 0.45, E: 0.78, C: 0.60 };
  const axes = ['R','I','A','S','E','C'];
  const size = 300, cx = size/2, cy = size/2, rMax = size*0.38;
  const pt = (i, r) => {
    const a = (-90 + i*60) * Math.PI/180;
    return [cx + Math.cos(a)*r, cy + Math.sin(a)*r];
  };
  return (
    <div style={txStyles.stage}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse at 50% 40%, rgba(200,96,48,0.22) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 30%, rgba(200,160,48,0.1) 0%, transparent 40%),
          linear-gradient(180deg, #0a0a14 0%, #14141e 50%, #0a0a14 100%)
        `,
      }} />
      <svg viewBox="0 0 1024 1366" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }}>
        {Array.from({ length: 80 }).map((_, i) => {
          const seed = i*9301 + 49297;
          return <circle key={i} cx={(seed*131)%1024} cy={(seed*257)%1366}
                         r={0.6 + ((seed*53)%100)/100*1.2}
                         fill="#e8d090" opacity={0.2 + ((seed*37)%100)/100*0.4} />;
        })}
      </svg>

      <div style={txStyles.backPill} onClick={onBack}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        Kembali
      </div>

      <div style={{
        position: 'absolute', top: 60, left: 0, right: 0, bottom: 0,
        overflowY: 'auto', padding: '80px 48px 48px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 720, textAlign: 'center', marginBottom: 24 }}>
          <div style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
            color: '#c8a030', letterSpacing: '0.34em', textTransform: 'uppercase',
          }}>Bintang Telah Berbicara</div>
          <h1 style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 42,
            color: '#e8d4a0', margin: '12px 0 8px', letterSpacing: '0.08em',
          }}>The Knight of Arcadia</h1>
          <p style={{
            fontFamily: "'Crimson Text', serif", fontStyle: 'italic', fontSize: 17,
            color: '#c8b890', margin: 0,
          }}>"Pedangmu tajam, perisaimu teguh."</p>
        </div>

        <div style={{
          width: 260, aspectRatio: '3/4',
          background: '#14141e', border: `1px solid ${border}`,
          borderRadius: 16, overflow: 'hidden', position: 'relative',
          boxShadow: `0 0 36px ${border}44`, marginBottom: 28,
        }}>
          <img src="../../assets/classes/the-knight.png" alt="The Knight"
               style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div style={{ width: 300, height: 300 }}>
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
              return <circle key={k} cx={x} cy={y} r="2.8" fill="#c86030" />;
            })}
            {axes.map((k,i) => {
              const [x,y] = pt(i, rMax + 18);
              return <text key={k} x={x} y={y} fill="#c8b890" fontFamily="Cinzel, serif"
                           fontWeight="700" fontSize="14" textAnchor="middle" dominantBaseline="central"
                           letterSpacing="0.1em">{k}</text>;
            })}
          </svg>
        </div>

        <div style={{ textAlign: 'center', marginTop: 14, marginBottom: 28 }}>
          <div style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 10.5, fontWeight: 700,
            color: '#887870', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 10,
          }}>Dimensi Dominan</div>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 16,
            color: '#e8e0d0', letterSpacing: '0.1em', marginBottom: 14,
          }}>Realistic · Enterprising</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 520 }}>
            {['Teknik Mesin','Teknik Sipil','Manajemen','+5 lagi'].map(t => (
              <span key={t} style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
                color: '#c8a030', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: 999,
                border: '0.5px solid #c8a030', background: 'rgba(200,160,48,0.06)',
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 400 }}>
          <button onClick={onConsult} style={txStyles.ctaPrimary}>
            Konsultasi dengan Cenayang
          </button>
          <button onClick={onRestart} style={txStyles.ctaSecondary}>
            Ulangi Perjalanan
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CENAYANG CHAT ──────────────────────────────────────
function TabletChat({ onBack }) {
  return (
    <div style={{ ...txStyles.stage, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(90,58,138,0.08) 0%, rgba(10,10,20,0) 70%)',
      }} />

      <div style={{
        flexShrink: 0, background: '#14141e', borderBottom: '0.5px solid #2a2a40',
        padding: '22px 48px', display: 'flex', alignItems: 'center', gap: 18,
        position: 'relative', zIndex: 5,
      }}>
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 10, background: 'transparent',
          border: 'none', color: '#887870', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div style={{
          width: 52, height: 52, borderRadius: 26, overflow: 'hidden',
          border: '1.5px solid #c8a030', boxShadow: '0 0 12px rgba(200,160,48,0.3)',
        }}>
          <img src="../../assets/characters/cenayang-avatar.png" alt=""
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 18,
            color: '#e8e0d0', letterSpacing: '0.04em',
          }}>Cenayang</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <span style={{ width: 7, height: 7, borderRadius: 4,
                           background: '#4aa06a', boxShadow: '0 0 6px rgba(74,160,106,0.6)' }} />
            <span style={{ fontSize: 13, color: '#887870' }}>Hadir untukmu</span>
          </div>
        </div>
        <div style={{
          background: '#1a0a1a', border: '0.5px solid #5a3a8a', color: '#c090f0',
          fontSize: 13, fontWeight: 500, padding: '7px 16px', borderRadius: 999,
        }}>4 sesi tersisa</div>
      </div>

      <div style={{
        position: 'absolute', top: 96, left: 0, right: 0, bottom: 128,
        overflowY: 'auto', padding: '28px 0',
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 700, padding: '0 32px' }}>
          <ChatBubble oracle
            text="Selamat atas perjalananmu, Pejuang. Sebagai The Knight, kekuatanmu ada pada tindakan nyata dan kemampuan membangun sesuatu dengan tanganmu sendiri."
            time="10:24" size={15} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '16px 0 24px' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(58,52,80,0.35)' }} />
            <span style={{ fontSize: 12, color: '#3a3450', letterSpacing: '0.1em' }}>Hari ini</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(58,52,80,0.35)' }} />
          </div>
          <ChatBubble text="Jurusan apa yang paling cocok untukku sebagai The Knight?" size={15} />
          <ChatBubble oracle
            text="Berdasarkan profil Realistic dan Enterprising-mu, jurusan Teknik Sipil, Teknik Mesin, atau Manajemen sangat selaras dengan karaktermu. Kamu bekerja paling baik saat hasilnya bisa dilihat dan dirasakan secara nyata."
            size={15} />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 80, left: 0, right: 0,
        background: '#1a0a0a', borderTop: '0.5px solid #c83020',
        padding: '8px 16px', textAlign: 'center', zIndex: 4,
      }}>
        <span style={{ fontSize: 13, color: '#c86030' }}>Sesi konsultasimu hampir habis</span>
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#14141e', borderTop: '0.5px solid #2a2a40',
        padding: '16px 48px', display: 'flex', alignItems: 'center', gap: 14, zIndex: 5,
      }}>
        <input type="text" placeholder="Tanyakan sesuatu..." style={{
          flex: 1, height: 48, background: '#0e0e1a', border: '0.5px solid #2a2a40',
          borderRadius: 24, padding: '0 22px', color: '#e8e0d0',
          fontFamily: "'Nunito', sans-serif", fontSize: 15, outline: 'none',
        }} />
        <button style={{
          width: 48, height: 48, borderRadius: 24, background: '#5a3a8a',
          color: '#fff', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 12px rgba(90,58,138,0.45)',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { TabletSplash, TabletBiodata, TabletQuiz, TabletClassResult, TabletChat });
