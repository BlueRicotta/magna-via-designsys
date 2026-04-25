// ScreenTransitions.jsx — cinematic transitions between screens.
//
// Exposes a <ScreenStage> component that animates from one screen to the next.
// The parent passes the current screen key + the React node; this component
// keeps the previous node alive during the transition and animates both layers
// according to the named transition spec.
//
// TRANSITIONS (spec-driven):
//   fade-black-600        splash → oracle (fade out to true black, then in)
//   crossfade-400         narrative panel → panel (pure crossfade)
//   slide-up-500          oracle → biodata (new slides up from bottom)
//   slide-left-350        biodata → hobbies (standard forward slide)
//   slide-left-scale-400  hobbies → stars (slide + scale-in from 95%)
//   fade-black-500        stars → quiz (fade to black + back in, shorter)
//   fade-black-hold-1100  quiz → reveal (fade 300 / hold 200 / fade in 600)
//   ceremonial-fade-800   reveal → result (slow gentle fade)
//   slide-up-450          result → chat (modal sheet up)
//   slide-right-300       BACK navigation (mirror of slide-left)
//
// Timing curves: ease-out forward, ease-in back, linear for fade-to-black holds.

const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
const EASE_IN  = 'cubic-bezier(0.4, 0, 1, 1)';
const EASE_IO  = 'cubic-bezier(0.4, 0, 0.2, 1)';

// Per-screen ordering — index in this array determines forward vs. back.
const SCREEN_ORDER = ['splash', 'oracle', 'biodata', 'hobbies', 'stars', 'quiz', 'reveal', 'result', 'chat'];

// Explicit transition table keyed by "from→to".
// If a direction is missing, we pick a default based on screen-order direction.
const TRANSITIONS = {
  'splash→oracle':   { kind: 'fade-black',      duration: 600, out: 300, hold: 0,   in: 300 },
  'oracle→biodata':  { kind: 'slide-up',        duration: 500, ease: EASE_OUT },
  'biodata→hobbies': { kind: 'slide-left',      duration: 350, ease: EASE_IO },
  'hobbies→stars':   { kind: 'slide-left-scale',duration: 400, ease: EASE_OUT },
  'stars→quiz':      { kind: 'fade-black',      duration: 500, out: 250, hold: 0,   in: 250 },
  'quiz→reveal':     { kind: 'fade-black',      duration: 1100, out: 300, hold: 200, in: 600 },
  'reveal→result':   { kind: 'ceremonial-fade', duration: 800 },
  'result→chat':     { kind: 'slide-up',        duration: 450, ease: EASE_OUT },
};

function transitionFor(fromKey, toKey) {
  if (!fromKey || fromKey === toKey) return null;
  const explicit = TRANSITIONS[`${fromKey}→${toKey}`];
  if (explicit) return { ...explicit, direction: 'forward' };

  // Reverse of an explicit forward?
  const reverse = TRANSITIONS[`${toKey}→${fromKey}`];
  if (reverse) {
    // Back nav. Mirror the forward type where sensible.
    if (reverse.kind === 'slide-left' || reverse.kind === 'slide-left-scale') {
      return { kind: 'slide-right', duration: 300, ease: EASE_IN, direction: 'back' };
    }
    if (reverse.kind === 'slide-up') {
      return { kind: 'slide-down', duration: 300, ease: EASE_IN, direction: 'back' };
    }
    if (reverse.kind === 'fade-black') {
      return { kind: 'fade-black', duration: 500, out: 250, hold: 0, in: 250, direction: 'back' };
    }
    if (reverse.kind === 'ceremonial-fade') {
      return { kind: 'ceremonial-fade', duration: 400, direction: 'back' };
    }
  }

  // Fallback: compare ordering to infer direction.
  const fi = SCREEN_ORDER.indexOf(fromKey);
  const ti = SCREEN_ORDER.indexOf(toKey);
  if (fi >= 0 && ti >= 0) {
    return ti > fi
      ? { kind: 'slide-left',  duration: 350, ease: EASE_IO, direction: 'forward' }
      : { kind: 'slide-right', duration: 300, ease: EASE_IN, direction: 'back' };
  }
  return { kind: 'crossfade', duration: 300, direction: 'forward' };
}

// Layer styles — full-cover absolute within the phone screen.
const LAYER = {
  position: 'absolute', inset: 0,
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden',
};

// Compute the per-layer style for a given phase of a transition.
// phase: 'enter-start' | 'enter-end' | 'exit-start' | 'exit-end'
function phaseStyle(tr, phase) {
  if (!tr) return {};
  const { kind } = tr;

  // Incoming layer
  if (phase === 'enter-start' || phase === 'enter-end') {
    const atEnd = phase === 'enter-end';
    switch (kind) {
      case 'slide-left':
        return { transform: atEnd ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)', opacity: 1 };
      case 'slide-right':
        return { transform: atEnd ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)', opacity: 1 };
      case 'slide-up':
        return { transform: atEnd ? 'translate3d(0,0,0)' : 'translate3d(0,100%,0)', opacity: 1 };
      case 'slide-down':
        return { transform: atEnd ? 'translate3d(0,0,0)' : 'translate3d(0,-100%,0)', opacity: 1 };
      case 'slide-left-scale':
        return atEnd
          ? { transform: 'translate3d(0,0,0) scale(1)', opacity: 1 }
          : { transform: 'translate3d(100%,0,0) scale(0.95)', opacity: 1 };
      case 'crossfade':
      case 'ceremonial-fade':
      case 'fade-black':
        return { opacity: atEnd ? 1 : 0 };
      default:
        return { opacity: atEnd ? 1 : 0 };
    }
  }

  // Outgoing layer
  const atEnd = phase === 'exit-end';
  switch (kind) {
    case 'slide-left':
      // Old slides out to the left
      return { transform: atEnd ? 'translate3d(-30%,0,0)' : 'translate3d(0,0,0)', opacity: atEnd ? 0.6 : 1 };
    case 'slide-right':
      return { transform: atEnd ? 'translate3d(30%,0,0)' : 'translate3d(0,0,0)', opacity: atEnd ? 0.6 : 1 };
    case 'slide-up':
      // Old stays put under the incoming sheet
      return { transform: 'translate3d(0,0,0)', opacity: 1 };
    case 'slide-down':
      return { transform: atEnd ? 'translate3d(0,100%,0)' : 'translate3d(0,0,0)', opacity: 1 };
    case 'slide-left-scale':
      return { transform: atEnd ? 'translate3d(-20%,0,0) scale(0.98)' : 'translate3d(0,0,0) scale(1)', opacity: atEnd ? 0.6 : 1 };
    case 'crossfade':
    case 'ceremonial-fade':
    case 'fade-black':
      return { opacity: atEnd ? 0 : 1 };
    default:
      return { opacity: atEnd ? 0 : 1 };
  }
}

// Transition duration on the inner CSS transition (ms).
function layerTransitionCss(tr, which /* 'enter' | 'exit' */) {
  if (!tr) return 'none';
  if (tr.kind === 'fade-black') {
    // Layer-level opacity isn't driving this — the black overlay does.
    // Layers cut instantly at the midpoint; they have no transition.
    return 'none';
  }
  const ease = tr.direction === 'back' ? EASE_IN : (tr.ease || EASE_OUT);
  return `transform ${tr.duration}ms ${ease}, opacity ${tr.duration}ms ${ease}`;
}

function ScreenStage({ screenKey, children }) {
  const [current, setCurrent] = React.useState({ key: screenKey, node: children });
  const [previous, setPrevious] = React.useState(null);
  const [tr, setTr] = React.useState(null);
  const [phase, setPhase] = React.useState('idle'); // 'idle' | 'animating'
  const [blackOpacity, setBlackOpacity] = React.useState(0);

  // When screenKey changes, begin a transition.
  React.useEffect(() => {
    if (screenKey === current.key) {
      // Same screen, just keep the node fresh (for internal state swaps the parent manages).
      setCurrent({ key: screenKey, node: children });
      return;
    }
    const nextTr = transitionFor(current.key, screenKey);
    if (!nextTr) {
      setCurrent({ key: screenKey, node: children });
      return;
    }

    // Kick off transition
    setPrevious(current);
    setCurrent({ key: screenKey, node: children });
    setTr(nextTr);
    setPhase('enter');

    // Fade-to-black is a 3-phase choreography.
    if (nextTr.kind === 'fade-black') {
      const { out, hold, in: fadeIn } = nextTr;
      // Phase 1: old screen stays, black overlay fades to 1 over `out`ms.
      setBlackOpacity(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setBlackOpacity(1)));

      setTimeout(() => {
        // Swap screens silently behind the black overlay.
        setPrevious(null);
      }, out);

      setTimeout(() => {
        // Phase 3: fade black back down.
        setBlackOpacity(0);
      }, out + hold);

      setTimeout(() => {
        setTr(null);
        setPhase('idle');
      }, out + hold + fadeIn + 20);
      return;
    }

    // Regular animated transition: set start positions, then flush to end.
    // rAF twice so the browser registers the starting styles before transitioning.
    requestAnimationFrame(() => requestAnimationFrame(() => setPhase('running')));

    setTimeout(() => {
      setPrevious(null);
      setTr(null);
      setPhase('idle');
    }, nextTr.duration + 20);
  }, [screenKey]);

  // Keep the current node synced when its children prop changes (same key).
  React.useEffect(() => {
    if (screenKey === current.key) setCurrent({ key: screenKey, node: children });
  }, [children, screenKey, current.key]);

  // Compute styles for both layers.
  const noAnim = !tr;
  const isSlideUpLike = tr && (tr.kind === 'slide-up' || tr.kind === 'slide-down');

  const enterP = phase === 'enter' ? 'enter-start' : 'enter-end';
  const exitP  = phase === 'enter' ? 'exit-start'  : 'exit-end';

  const enterStyle = {
    ...LAYER,
    zIndex: isSlideUpLike ? 3 : 2,
    transition: layerTransitionCss(tr, 'enter'),
    ...(tr ? phaseStyle(tr, enterP) : {}),
  };
  const exitStyle = {
    ...LAYER,
    zIndex: 1,
    transition: layerTransitionCss(tr, 'exit'),
    ...(tr ? phaseStyle(tr, exitP) : {}),
  };

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {previous && (
        <div style={exitStyle} key={`prev-${previous.key}`} aria-hidden="true">
          {previous.node}
        </div>
      )}
      <div style={noAnim ? LAYER : enterStyle} key={`cur-${current.key}`}>
        {current.node}
      </div>
      {/* True-black cinematic overlay for fade-to-black transitions */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: '#000000',
          opacity: blackOpacity,
          transition: tr && tr.kind === 'fade-black'
            ? `opacity ${blackOpacity === 1 ? tr.out : tr.in}ms ${blackOpacity === 1 ? EASE_IN : EASE_OUT}`
            : 'none',
          pointerEvents: blackOpacity > 0.02 ? 'auto' : 'none',
          zIndex: 50,
        }}
      />
    </div>
  );
}

Object.assign(window, { ScreenStage });
