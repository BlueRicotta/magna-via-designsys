# Magna Via — Mobile App UI Kit

Visual recreation of the core Magna Via mobile-app flow in HTML/React (no live codebase was provided).

**Frame:** 375 × 812 iPhone 14, portrait.

## Screens included in `index.html`
1. **Splash** — full-bleed Arcadia castle, wordmark, "Mulai Perjalanan"
2. **Oracle Intro** — Cenayang welcomes the Pejuang (Crimson italic dialogue, tap-to-advance)
3. **Birth Star Selection** — choose Ignis / Aqua / Terra / Ventus
4. **Hobby Cards** — pick up to 3 from a 3×3 grid, gold ring on selected
5. **Result** — character-class reveal with dimension badges and CTA

Tap the CTA on each screen to advance. Use ← at top-left to step back.

## Components (`*.jsx`)
- `App.jsx` — screen router + phone frame
- `PhoneFrame.jsx` — iPhone chrome + safe areas
- `Splash.jsx`, `OracleIntro.jsx`, `BirthStarSelect.jsx`, `HobbyCards.jsx`, `ClassResult.jsx`
- `Primitives.jsx` — `Button`, `GoldCTA`, `IconButton`, `Eyebrow`, `Scrim`, `BackHeader`

All visuals derive from `../../colors_and_type.css`; all imagery from `../../assets/`.
