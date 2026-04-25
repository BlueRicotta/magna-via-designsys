// App.jsx — screen router with cinematic transitions (see ScreenTransitions.jsx)

function App() {
  const [screen, setScreen] = React.useState('splash');
  const [quizIdx, setQuizIdx] = React.useState(0);

  const nav = [
    ['splash', 'Splash'], ['oracle', 'Oracle'], ['biodata', 'Biodata'],
    ['hobbies', 'Hobby Cards'], ['stars', 'Birth Star'], ['quiz', 'Quiz Scenario'],
    ['reveal', 'Result Reveal'], ['result', 'Result'], ['chat', 'Cenayang Chat'],
  ];

  const screens = {
    splash:   <Splash onBegin={() => setScreen('oracle')} />,
    oracle:   <OracleIntro onBack={() => setScreen('splash')} onAdvance={() => setScreen('biodata')} />,
    biodata:  <Biodata onBack={() => setScreen('oracle')} onAdvance={() => setScreen('hobbies')} />,
    hobbies:  <HobbyCards onBack={() => setScreen('biodata')} onAdvance={() => setScreen('stars')} />,
    stars:    <BirthStarSelect onBack={() => setScreen('hobbies')} onAdvance={() => setScreen('quiz')} />,
    quiz:     <QuizScenario scenarioIndex={quizIdx} onBack={() => setScreen('stars')} onAdvance={() => setScreen('reveal')} />,
    reveal:   <ResultReveal onAdvance={() => setScreen('result')} />,
    result:   <ClassResult onBack={() => setScreen('quiz')} onRestart={() => setScreen('splash')} onConsult={() => setScreen('chat')} />,
    chat:     <CenayangChat onBack={() => setScreen('result')} />,
  };

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(closest-side at 50% 40%, #14141e 0%, #0a0a14 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 40, flexWrap: 'wrap' }}>
      <PhoneFrame>
        <ScreenStage screenKey={screen}>
          {screens[screen]}
        </ScreenStage>
      </PhoneFrame>
      <div style={{ width: 220, color: '#c8b890', fontFamily: "'Nunito', sans-serif", fontSize: 13 }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, color: '#c8a030', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Jump to</div>
        {nav.map(([s, label]) => (
          <div key={s} onClick={() => setScreen(s)} style={{ cursor: 'pointer', padding: '8px 12px', borderRadius: 8, marginBottom: 4, background: screen === s ? 'rgba(200,160,48,0.1)' : 'transparent', color: screen === s ? '#c8a030' : '#c8b890', border: `0.5px solid ${screen === s ? '#c8a030' : '#2a2a40'}`, fontFamily: "'Cinzel', serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
