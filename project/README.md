# Magna Via — Design System

> *"Selamat datang, Pejuang. Arcadia telah menanti..."*

**Magna Via** is a gamified **medieval-RPG career-guidance mobile app** for Indonesian high-school students (Class 12). Under the hood it's a RIASEC interest assessment; in the interface it's an oracle-led quest through the kingdom of **Arcadia**, where the student chooses a **Birth Star**, collects **Hobby Cards**, and is ultimately crowned with a **Character Class** that maps to suggested university majors.

The visual identity is **dark and atmospheric** — deep space backgrounds, ancient gold accents, constellation motifs, and a **Shovel Knight-inspired illustrated character style**. Every screen should feel like you are *inside* a living medieval world, not using a standard mobile app.

**Platform:** React Native, iOS + Android. Portrait-only mobile. Reference frame **375 × 812** (iPhone 14). Sizing is proportional, not hardcoded.

**Primary language:** Bahasa Indonesia. Character class names and system terms (e.g. "The Knight", "Birth Star") remain in stylized English.

---

## Sources

This system was assembled from:

| Source | Location | Notes |
|---|---|---|
| Figma file | `Magna Via — Design System.fig` (mounted VFS) | 1 page, 5 frames. Defines palette, type, logo lockups. Figma file ID lives with the user. |
| Brand assets | `uploads/*.png`, `uploads/*.svg` | Logos, birth-star illustrations, 8 character classes, Cenayang oracle portraits, artifacts, hobby-card samples, splash background. |
| Brand brief | User-provided spec | Color tokens, type scale, component patterns, atmosphere rules. |

No live codebase was attached — UI kit components are reconstructed faithfully from the brief + brand illustrations. See **Caveats** at the bottom of this README.

---

## Index — what's in this folder

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent-skill entrypoint (portable)
├── colors_and_type.css        ← single source of truth for tokens
├── assets/
│   ├── logos/                 ← wordmark, icon, full lockups (SVG)
│   ├── backgrounds/           ← arcadia-splash.png (full-bleed castle)
│   ├── birth-stars/           ← ignis · aqua · terra · ventus
│   ├── characters/            ← Cenayang (oracle) avatar + portrait
│   ├── classes/               ← 8 RPG character classes (results)
│   ├── hobbies/               ← hobby-card illustrations
│   ├── artifacts/             ← lantern · codex · crown (milestones)
│   └── misc/                  ← numbered 1–5 generic assets
├── preview/                   ← design-system cards (rendered in the Design System tab)
└── ui_kits/
    └── mobile-app/            ← click-thru prototype of the core screens
        ├── README.md
        ├── index.html
        └── *.jsx
```

---

## CONTENT FUNDAMENTALS

### Voice
Magna Via speaks as an **Oracle welcoming a young traveler** — warm, reverent, mythic. Never corporate, never "funnel-speak", never cheerful app-speak. The guide is on the user's side: this is a journey *they* are taking, not a product serving them.

### Language
- **Primary:** Bahasa Indonesia. This is for Indonesian Class-12 students.
- **System + character terms stay in English, stylized:** *Birth Star*, *Hobby Card*, *Arcadia*, *The Knight*, *The Mage*. This preserves the RPG flavor — like a game menu inside an Indonesian story.
- **Oracle speech** is exclusively Bahasa Indonesia, often with archaic/poetic phrasing ("Pejuang", "Arcadia telah menanti", "Pilih Bintangmu").

### Tone examples
| Context | Use | Avoid |
|---|---|---|
| Splash CTA | **"Mulai Perjalanan"** · *Begin Your Journey* | "Get Started" |
| Instruction | *"Pilih hingga tiga Hobby Card yang mencerminkan dirimu."* | *"Select up to 3 cards"* |
| Oracle greeting | *"Selamat datang, Pejuang. Arcadia telah menanti..."* | *"Hi! Let's set up your profile 👋"* |
| Result flavor | *"Dimensi Dominan: Realistic · Enterprising"* | *"Your score: R=8, E=7"* |

### Casing
- **ALL-CAPS:** wordmark, eyebrow labels, buttons, micro-tags. Letter-spaced (0.08–0.18em).
- **Title Case:** screen titles, section headers, class names (*The Knight of Arcadia*).
- **Sentence case:** body, oracle dialogue, descriptions.

### Pronouns
Second-person, familiar — **"kamu" / "-mu"** (e.g. *Bintangmu* = "Your Star"). Never the formal *"Anda"*. The oracle addresses the student as *"Pejuang"* (Warrior / Seeker).

### Emoji
**None.** Emoji break the world. Use illustrated glyphs, the gold 8-point star (✦) as a one-off accent, or actual iconography. If you feel tempted to reach for 🎯 or 🏆, you've already lost.

### Vibe
Cinematic, intentional, quiet. The interface *breathes* — it does not shout. When in doubt: fewer words, more space, let the illustration carry the moment.

---

## VISUAL FOUNDATIONS

### Colors
Everything lives on a **three-step dark substrate** — Kingdom Night `#0a0a14` → Arcadia Dark `#14141e` → Stone Wall `#1e1e30`. Surfaces get **darker when pressed**, lighter when elevated. There is **one** bright accent — **Ancient Gold `#c8a030`** — and it is the *only* bright hue allowed on dark backgrounds. Mystic Purple and Ember Dusk are reserved for Oracle moments and horizon scrims respectively. The four **Birth Star** element colors are *never* used as UI chrome — only as content color when that specific element is the subject.

White, light greys, and bluish-purple gradients are **forbidden** surface colors. If a screen ever looks "light", something is wrong.

### Typography
Three families, three jobs, no overlap:
- **Cinzel** — ceremonial. Display, H1, H2, buttons. Wide letter-spacing and uppercase feel carved in stone.
- **Nunito** — utilitarian. Body, labels, captions, metadata. Never used for headings.
- **Crimson Text italic** — oracular. *Only* Cenayang's dialogue and narrative flavor text. Italic is the signal this is a **voice**, not UI.

See `colors_and_type.css` for the full scale. Minimum on mobile: 14px for body, 12px for caption, 44×44pt hit targets.

### Spacing
4pt grid. Screen side-padding is **16px** (`--sp-4`); section gaps are 24–32px. Primary CTAs sit **32px from screen edges** (full-width minus 32px) at the safe bottom.

### Backgrounds
- App base is always Kingdom Night (`#0a0a14`).
- Hero / splash / narrative screens layer a **full-bleed illustrated PNG** (see `assets/backgrounds/arcadia-splash.png` — hand-illustrated castle + moon + horizon glow) with a **bottom scrim** (`--scrim-bottom`) fading to base so text sits on solid color.
- Constellation line patterns sit at **6–12% opacity** as atmospheric texture behind character portraits and narrative panels. Think "stars connecting into shapes", not a noisy repeat pattern.
- Character illustrations (Cenayang, the 8 classes, the 4 elements) **float on the dark background without card containers** — they are part of the world, not UI objects.

### Gradients
Radial glows (gold at 6–8% over transparent) behind logos and key symbols. Linear vertical scrims at screen bottoms and tops for text protection. **No diagonal gradients, no multi-hue gradients, no "modern gradient blob" backgrounds.**

### Borders, shadows, elevation
- Default border: **0.5px `#2a2a40`**. Hairline strokes everywhere — this isn't a flat-material UI.
- Primary buttons get an **inner stroke** of 0.5px `#e8d090` at 40% opacity — a subtle "gold leaf" rim.
- **Shadows are mostly glows**, not drop shadows. The world is lit from within, not by ambient sunlight. Gold glow on active CTAs (`--glow-gold`), purple glow on Oracle cards, ember glow on Ignis elements.
- Real drop shadows exist (`--shadow-card`), but are deep and soft — dark surfaces absorbing darker shadows.

### Corners
12px radius on cards and primary buttons. 8px on inputs. 6px on small chips/tags. Pill radius (999px) on status badges + avatars only.

### Cards
Stone Wall (`#1e1e30`) fill, 0.5px Cobblestone border, 12px radius, 16px internal padding. Cards **never float off the background with a drop shadow** in the conventional sense — they are *embedded* into the surface, distinguished by fill and hairline stroke.

### Imagery
- Style: **Shovel Knight-inspired** flat illustration with heavy black line art, warm inner glow, minimal gradient shading. Saturated where elemental (fire = deep red + gold highlights; water = cobalt + cyan; earth = forest + bronze; wind = violet + silver), desaturated in the ambient world (stone greys, deep indigo, moonlit castle).
- Color vibe overall: **warm indigo night + gold firelight** — never cool/neon, never B&W.
- No photography, no 3D renders, no AI-ambient gradients. Only illustrations.

### Transparency & blur
- Scrims: solid color with alpha (see `--scrim-bottom`). No backdrop-blur.
- Oracle dialogue panels may use ~92% opacity over the narrative background.
- Modal/overlay: 70% black scrim + card beneath; no blur.

### Animation
- **Durations:** 120ms taps, 220ms standard, 420ms entrances/transitions.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` standard; `0.2, 0.7, 0.2, 1` for soft entries.
- **Vocabulary:** fade + 4–8px rise on entry; tap = 95% scale; gold CTAs have a slow breathing glow (3–4s sine on `--glow-gold-soft` opacity). Stars twinkle (opacity 0.6 → 1.0). **No bouncy physics, no spring-overshoot, no kinetic "pop".** The world is ceremonial.

### States
- **Hover** (web mirror): CTA fill lightens toward `#d4af40`, glow intensity +25%.
- **Press/Active:** 95% scale + gold fill dims to `--mv-gold-lo` (`#8a6e20`); secondary buttons fill with a 10% gold wash.
- **Focus:** 0.5px `--mv-gold` ring + soft gold glow. Inputs switch border from `#2a2a40` → `#c8a030` on focus.
- **Disabled:** 40% opacity on fill, text = `#3a3450`, no glow, no interaction.

### Layout rules
- Status bar + safe-area respected on all screens.
- Primary CTA **fixed to bottom** above a 32px safe area, within a bottom scrim.
- Back arrow + step indicator **fixed to top** of flow screens, top padding 16px from safe area.
- Full-bleed illustrations extend edge-to-edge; never inside cards.

---

## ICONOGRAPHY

Magna Via's icon approach is **two-tiered**:

**Hero iconography** is **hand-painted PNG illustration** at high resolution — Birth Star element creatures (Ignis the lion-wreathed-in-fire, Aqua the serpent-in-the-tide, Terra the stag-in-the-grove, Ventus the stag-in-the-wind), the 8 character classes, the 3 artifacts (Guardian's Lantern, Keeper's Codex, Leader's Crown), and the Cenayang oracle herself. These live in `assets/` and are **never redrawn in SVG or replaced with emoji**. They are the product's soul.

**System iconography** is sparse and functional — chevrons, back arrows, close, checkmarks, search, settings. No proprietary icon font is shipped. We substitute **Lucide** (MIT-licensed, `lucide.dev`) loaded from CDN for all UI chrome icons — it has the right stroke weight (1.5–2px), balanced geometry, and outline-only style that reads as "inscribed line" rather than "filled UI blob". All UI icons are rendered **in gold `#c8a030`** when interactive, **Aged Cream `#c8b890`** when decorative, at **20–24px** for touch and **16px** for inline labels.

**Unicode / glyphs:** the **✦** (U+2726 Black Four-Pointed Star) and **✧** variant are on-brand and used sparingly as decorative dividers between eyebrow labels (`DIMENSI ✦ DOMINAN`). The "★" (five-pointed) is **not** used — it's too consumer-review and breaks the world.

**Emoji:** forbidden. See Content Fundamentals.

**Logo marks:** `assets/logos/` contains four SVGs:
- `magna-via-logo-dark.svg` — full lockup on dark bg (constellation + wordmark + tagline). Splash screens.
- `magna-via-logo-light.svg` — dark marks on parchment bg. Light / print contexts.
- `magna-via-icon.svg` — symbol mark only (constellation with the 8-point star). App icon, avatar-sized placements.
- `magna-via-wordmark.svg` — inline wordmark for navigation bars.

---

## CAVEATS

- **No live codebase was attached.** The UI kit is reconstructed from the brand brief, Figma design tokens, and the supplied illustrations. Component structure is faithful to the spec but is not copied from real React Native source — it is a **visual recreation** in HTML/JSX for design-time use.
- **Fonts:** Cinzel, Nunito, and Crimson Text are loaded from Google Fonts (CDN). If you need local `.ttf`/`.woff2` files bundled, please drop them into `fonts/` — we'll wire them up. The brief mentions *Crimson Text italic*; the Figma file also references *Crimson Pro*. We've used **Crimson Text** per the brief; flag if Pro is preferred.
- **System icons:** no brand-native icon set was provided, so we link **Lucide** from CDN. If you have a preferred icon family (or hand-drawn inscribed icons), ship them and we'll swap.
- **Birth Star ↔ RIASEC mapping (CONFIRMED):**

  | Birth Star | Element | RIASEC Primary | RIASEC Secondary |
  |---|---|---|---|
  | Ignis  | Api / Fire    | Enterprising (E) +3 | Realistic (R) +1 |
  | Aqua   | Air / Water   | Social (S) +3       | Artistic (A) +1  |
  | Terra  | Bumi / Earth  | Conventional (C) +3 | Realistic (R) +1 |
  | Ventus | Angin / Wind  | Investigative (I) +3| Artistic (A) +1  |

- **Hobby Card set:** three of six hobby illustrations shipped (Fighter, Scholar, Artist). The other three (Guardian's Lantern, Leader's Crown, Keeper's Codex) exist only in `assets/artifacts/` — hobby grid currently shows letter placeholders for the remaining six cards. Upload the 6 dedicated hobby-card PNGs when ready and I'll swap them in.
- **Narrative panels 2–5** + quiz-scene backgrounds (15 scenes, default *S1 Persimpangan Jalan*) are pending upload — Oracle intro and quiz screens will get atmospheric upgrades once provided.
- **Copy tone:** semi-formal Bahasa, "kamu" not "Anda", narrative not clinical. All approved phrases (*Pilih Jalurmu, Bintang Kelahiranmu, Mulai Perjalanan, Temukan Jalanmu, Membaca resonansimu, Takdirmu sedang terungkap, Hadir untukmu, sesi tersisa, Tanyakan sesuatu*) are on file for future screens.
- **No codebase** — design phase only. Visual recreation is the deliverable; React Native handoff to Claude Code follows. Production must use percentage-based responsive sizing.
- **No parchment/scroll chrome** — dark surfaces + gold accents carry the medieval feel; illustrations do the rest.
- Nunito still loads from Google Fonts (no .ttf provided); Cinzel variable + Crimson Text family use the uploaded local files.
- **All UI kit copy is in Bahasa Indonesia.** A translator / native speaker should pass over it — we've used natural but not-yet-review-read phrasing.

---

## CLEAR ASK

**Please help me iterate toward pixel-perfection.** Specifically:

1. **Spot-check the tone + Bahasa Indonesia copy** in `ui_kits/mobile-app/` — anything that sounds AI-translated, flag it.
2. **Confirm the Birth Star → RIASEC mapping** (see Caveats) so we can lock the result logic.
3. **Drop local font files** (Cinzel, Nunito, Crimson Text woff2) into `fonts/` if you need true offline behavior; otherwise Google Fonts CDN is fine.
4. **Share any extra illustrated assets** — additional hobby cards, narrative backgrounds beyond the Arcadia splash, scroll/parchment UI elements if you have them. The more painted assets we have, the more the app feels like a world.
5. **If there's a live React Native codebase**, please attach it — we'll upgrade the UI kit from "visual recreation" to "mirrors production components exactly".
