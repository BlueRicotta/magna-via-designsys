// Biodata.jsx — registration form before entering Arcadia
// Sits between Opening Narrative and Hobby Card Selection.

const CLASS_COLORS = {
  knight: '#c86030', mage: '#2060c8', bard: '#c86090',
  healer: '#309050', merchant: '#5a3a8a', scholar: '#7a8aaa',
  alchemist: '#a87040', commander: '#c83020',
};

const bdStyles = {
  root: { position: 'absolute', inset: 0, background: '#0a0a14', overflow: 'hidden' },
  bgImage: {
    position: 'absolute', inset: 0,
    backgroundImage: 'url(assets/backgrounds/arcadia-splash.png)',
    backgroundSize: 'cover', backgroundPosition: 'center',
    opacity: 0.08, filter: 'blur(14px)',
    pointerEvents: 'none',
  },
  scroller: {
    position: 'absolute', inset: 0, overflowY: 'auto',
    paddingTop: 110, paddingBottom: 30,
  },
  header: { textAlign: 'center', padding: '0 24px', marginBottom: 20 },
  quill: {
    width: 28, height: 28, margin: '0 auto 14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#c8a030',
  },
  title: { fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 26, color: '#e8e0d0', margin: '0 0 10px', letterSpacing: '0.06em' },
  subtitle: { fontFamily: "'Nunito', sans-serif", fontSize: 13, color: '#887870', lineHeight: 1.55, margin: '0 auto', maxWidth: '72%' },
  rule: {
    width: '50%', height: 1, margin: '18px auto 0',
    background: 'linear-gradient(90deg, rgba(200,160,48,0) 0%, rgba(200,160,48,0.6) 50%, rgba(200,160,48,0) 100%)',
  },

  form: {
    margin: '0 16px',
    background: '#14141e',
    border: '0.5px solid #2a2a40',
    borderRadius: 16,
    padding: 20,
    display: 'flex', flexDirection: 'column', gap: 12,
  },
  field: { display: 'flex', flexDirection: 'column', gap: 6 },
  label: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 500, color: '#887870', letterSpacing: '0.08em' },
  input: {
    height: 44, borderRadius: 8,
    background: '#0e0e1a',
    border: '0.5px solid #2a2a40',
    color: '#e8e0d0',
    fontFamily: "'Nunito', sans-serif", fontSize: 14,
    padding: '0 12px',
    outline: 'none',
    transition: 'border-color 160ms, box-shadow 160ms',
  },
  inputFocused: {
    border: '0.5px solid #c8a030',
    boxShadow: '0 0 0 3px rgba(200,160,48,0.12)',
  },

  bottom: {
    margin: '22px 16px 0',
    display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center',
  },
  disclaimer: {
    fontFamily: "'Nunito', sans-serif", fontSize: 10.5, color: '#3a3450',
    textAlign: 'center', lineHeight: 1.5, padding: '0 8px',
  },
};

function QuillIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 3.5c-4 1-8 3-11 7-1.5 2-2.5 4.5-3 7.5l7.5-7.5" />
      <path d="M14 10l3 3" />
      <path d="M6.5 21c1.5-1 3-1.5 4.5-1.5" />
    </svg>
  );
}

function Biodata({ onBack, onAdvance }) {
  const [focused, setFocused] = React.useState('nama'); // Field 1 focused by default
  const [values, setValues] = React.useState({ nama: '', usia: '', sekolah: '', kelas: '', email: '' });

  const fields = [
    { id: 'nama',     label: 'Nama Lengkap',     placeholder: 'Nama lengkapmu...' },
    { id: 'usia',     label: 'Usia',             placeholder: 'Usiamu saat ini', type: 'number' },
    { id: 'sekolah',  label: 'Asal Sekolah',     placeholder: 'Nama sekolah atau institusimu' },
    { id: 'kelas',    label: 'Kelas / Angkatan', placeholder: 'Contoh: XII IPA 2' },
    { id: 'email',    label: 'Alamat Email',     placeholder: 'emailkamu@domain.com', type: 'email' },
  ];

  return (
    <div style={bdStyles.root}>
      <div style={bdStyles.bgImage} />
      <ConstellationBg opacity={0.06} />
      <BackHeader onBack={onBack} step={3} total={8} />

      <div style={bdStyles.scroller}>
        <div style={bdStyles.header}>
          <div style={bdStyles.quill}><QuillIcon /></div>
          <h1 style={bdStyles.title}>Daftarkan Dirimu</h1>
          <p style={bdStyles.subtitle}>Sebelum memasuki Arcadia, perkenalkan dirimu kepada Dewan Kerajaan.</p>
          <div style={bdStyles.rule} />
        </div>

        <div style={bdStyles.form}>
          {fields.map(f => (
            <div key={f.id} style={bdStyles.field}>
              <label style={bdStyles.label}>{f.label}</label>
              <input
                type={f.type || 'text'}
                placeholder={f.placeholder}
                value={values[f.id]}
                onFocus={() => setFocused(f.id)}
                onBlur={() => setFocused(null)}
                onChange={e => setValues(v => ({ ...v, [f.id]: e.target.value }))}
                style={{
                  ...bdStyles.input,
                  ...(focused === f.id ? bdStyles.inputFocused : {}),
                }}
              />
            </div>
          ))}
        </div>

        <div style={bdStyles.bottom}>
          <GoldCTA onClick={onAdvance}>Masuk ke Arcadia</GoldCTA>
          <p style={bdStyles.disclaimer}>Data kamu hanya digunakan untuk keperluan penelitian.</p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Biodata, CLASS_COLORS });
