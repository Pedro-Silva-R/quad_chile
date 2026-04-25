---
name: Kinetic Brutalism V2
version: 2.0
colors:
  # Core brand anchors (do not drift)
  white: "#ffffff"
  black: "#000000"
  red: "#ff0000"
  metal: "#8a8d8f"
  blue: "#0057ff"

  # Light mode (default)
  light:
    background: "#f9f9f9"
    surface: "#ffffff"
    surface-dim: "#f3f3f3"
    surface-variant: "#e8e8e8"
    on-background: "#111111"
    on-surface: "#111111"
    on-surface-muted: "#3a3a3a"
    border: "#000000"
    border-muted: "#8a8d8f"
    primary: "#ff0000"
    on-primary: "#ffffff"
    accent: "#0057ff"
    on-accent: "#ffffff"
    link: "#0057ff"
    focus: "#0057ff"
    success: "#0b8f3a"
    warning: "#b35c00"
    error: "#ba1a1a"

  # Dark mode (toggle)
  dark:
    background: "#0b0b0b"
    surface: "#111111"
    surface-dim: "#0f0f0f"
    surface-variant: "#1a1a1a"
    on-background: "#f2f2f2"
    on-surface: "#f2f2f2"
    on-surface-muted: "#bdbdbd"
    border: "#f2f2f2"
    border-muted: "#8a8d8f"
    primary: "#ff0000"
    on-primary: "#000000"
    accent: "#5aa2ff"
    on-accent: "#000000"
    link: "#5aa2ff"
    focus: "#5aa2ff"
    success: "#28c66f"
    warning: "#ff9a3c"
    error: "#ff6b6b"

typography:
  # Font stack suggestion:
  # - Display: Epilogue (variable, 700–900)
  # - UI/Text: Space Grotesk (variable, 400–700)
  # - Technical labels/chips: IBM Plex Mono (400–700)
  fonts:
    display: "Epilogue"
    ui: "Space Grotesk"
    technical: "IBM Plex Mono"

  # Use fluid type in implementation (CSS clamp), values here are targets.
  display-xl:
    fontFamily: Epilogue
    fontSize: "clamp(3rem, 6vw, 7.5rem)"
    fontWeight: "900"
    lineHeight: "0.95"
    letterSpacing: "-0.04em"
    italic: true
  headline-lg:
    fontFamily: Epilogue
    fontSize: "clamp(2rem, 3.2vw, 4rem)"
    fontWeight: "800"
    lineHeight: "1.05"
    letterSpacing: "-0.02em"
    italic: false
  headline-md:
    fontFamily: Epilogue
    fontSize: "clamp(1.5rem, 2.2vw, 2.5rem)"
    fontWeight: "750"
    lineHeight: "1.15"
    letterSpacing: "-0.01em"
    italic: false
  body-lg:
    fontFamily: Space Grotesk
    fontSize: "clamp(1rem, 0.9vw, 1.125rem)"
    fontWeight: "450"
    lineHeight: "1.55"
  body-sm:
    fontFamily: Space Grotesk
    fontSize: "clamp(0.875rem, 0.7vw, 0.95rem)"
    fontWeight: "450"
    lineHeight: "1.5"
  label-technical:
    fontFamily: IBM Plex Mono
    fontSize: "clamp(0.72rem, 0.6vw, 0.78rem)"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "0.12em"
    transform: uppercase

spacing:
  base: 8px
  gutter: "clamp(16px, 3vw, 28px)"
  container-max: 1180px
  edge-safe: "clamp(14px, 2.4vw, 40px)"
  diagonal-offset: 12px
  shadow-offset: 6px

shapes:
  radius: 0px
  chamfer: 12px
  border-width: 3px

motion:
  fast: 120ms
  base: 180ms
  slow: 260ms
  easing: "cubic-bezier(.2,.8,.2,1)"
  reduce-motion: true
---

## Brand & Style

Kinetic Brutalism is built to feel like high-performance machinery: raw energy, hard edges, and technical clarity. The interface should communicate speed and impact without becoming noisy or inaccessible.

## Color Rules (clarified)

- **No decorative gradients.** Flat blocks rule the system.
- **Functional overlays are allowed** (especially on hero video) to guarantee legibility. Prefer solid overlays; if needed, use a subtle utilitarian fade only for readability.
- **Red = action/impact.** Use it for primary CTAs and key “power” moments.
- **Blue = information/links/focus.** Use it for links, focus rings, and secondary highlights (it keeps the system “technical” and helps a11y).
- **Metal = structure.** Secondary borders, dividers, tags, and UI scaffolding.

## Typography Rules (adjusted)

- Headlines use **Epilogue** for impact.
- **Italics are not mandatory** everywhere. Reserve italics for:
  - Hero H1 / major hero callouts
  - Select “speed” moments (short headlines, not long paragraphs)
- Body/UI uses **Space Grotesk** for readability.
- Technical labels and chips use **IBM Plex Mono** (serial-number vibe).

## Layout & Spacing (with guardrails)

The layout is asymmetric and dynamic, but must remain stable on mobile.

- Use a **12-column grid** on desktop; collapse to a single column on mobile.
- Prefer **intentional misalignment** via offsets rather than random centering.
- **Diagonal Rule:** use 15° for section slashes; reserve 45° for small accents (tags, corner cuts).
- **Overflow guardrails:**
  - Avoid diagonals that force horizontal scroll on 360px screens.
  - Use `overflow-x: clip` on slash backgrounds/overlap wrappers where needed.
  - Keep primary text blocks inside a “safe edge” using `edge-safe`.

## Elevation & Depth (brutalist, but readable)

- **Hard offsets only:** 0 blur, 100% opacity, offset 4–8px.
- **Technical borders:** 2–4px solid strokes, typically black (light) or off-white (dark).
- **Grain:** optional and subtle (2–4% opacity), applied to large backgrounds only; never reduce text clarity.

## Shapes

- Default corners are **sharp** (`radius: 0`).
- For secondary elements, use **chamfers** (45° clipped corners) instead of rounding.

## Components (production-ready states)

### Buttons

- Primary: red fill, high-contrast text, technical border, hard offset shadow.
- Hover: shift position by `-4px` on both axes (only if not reduced-motion).
- Focus-visible: strong outline using **blue** (not just color shift).
- Disabled: reduced contrast but still readable; keep border visible.
- Loading: show inline spinner + maintain layout width (no jitter).

### Links

- Default blue with underline.
- Focus-visible: 2–3px outline (blue) + underline thickening.

### Cards

- White (light) / near-black (dark) surface, strong border, hard shadow.
- Include a **technical label** (top-right) for indexing (e.g., “01”, “A-3”, “SIG/04”).
- At least one chamfer/diagonal cut per card group, but keep text inside safe padding.

### Input Fields

- Bottom-border (2–3px) + label above.
- Focus: border + label turn blue; keep a visible focus ring.
- Error: border + helper text in error color, no “soft” effects.
- Success: subtle (avoid green dominance), still consistent with brutalism.

### Technical Chips

- Mono label, uppercase, letter spacing.
- Black/metal border; optional bracket/crosshair icon.
- Must remain readable at 320–360px widths.

### Timeline / Activity Items

- Category badge + date + title + excerpt.
- Date uses technical mono style.
- “Next” item gets a red/blue marker (one, not both) to avoid clutter.

## Accessibility & Performance Notes (enforced)

- Focus styles must be obvious in both themes.
- Minimum tap target: **44px**.
- Respect `prefers-reduced-motion`: remove positional shifts and autoplay transitions; keep state changes instant.
- Hero video:
  - Must include `poster`
  - `preload="metadata"`
  - Provide readable overlay and fallback background color.

