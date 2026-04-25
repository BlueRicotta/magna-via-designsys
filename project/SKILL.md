---
name: magna-via-design
description: Use this skill to generate well-branded interfaces and assets for Magna Via, a medieval-RPG career-guidance mobile app for Indonesian high-school students. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping or production work.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

- **Tokens:** `colors_and_type.css` — single source of truth. Import it or copy the `--mv-*` custom properties.
- **Fonts:** `fonts/` — Cinzel variable (display) and Crimson Text family (oracle dialogue). Nunito loads from Google Fonts.
- **Brand assets:** `assets/logos/`, `assets/backgrounds/`, `assets/birth-stars/`, `assets/classes/`, `assets/characters/`, `assets/artifacts/`, `assets/hobbies/`. Copy — never redraw.
- **Preview cards:** `preview/*.html` — rendered specimens of every token and component state.
- **UI kit:** `ui_kits/mobile-app/` — React visual recreation of the core 5-screen flow (Splash → Oracle → Birth Star → Hobby Cards → Result).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Non-negotiables when designing for Magna Via:**
- Always dark surfaces — `#0a0a14` / `#14141e` / `#1e1e30`. Never white or light grey.
- Gold `#c8a030` is the only bright accent on dark backgrounds.
- Cinzel for headings + buttons (uppercase, letter-spaced). Nunito for body. Crimson Text italic only for Oracle / Cenayang dialogue.
- Copy is in Bahasa Indonesia, second-person familiar ("kamu"). System/class terms stay in stylized English ("The Knight", "Birth Star").
- No emoji. Hand-painted PNGs carry character, not icons.
- Mobile frame is 375 × 812 portrait.
