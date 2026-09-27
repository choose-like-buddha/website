---
name: Choose Like Buddha
description: Train your mind to respond, not react. A thangka drafting sheet in indigo, gold hairline and flat mineral pigment.
colors:
  ink: "#16203a"
  ink-deep: "#0f1729"
  ink-soft: "#b9bfcc"
  ink-muted: "#4a5268"
  gold: "#c9a24a"
  gold-ink: "#7a5a16"
  conch: "#efe9dc"
  paper: "#f6f1e6"
  paper-line: "#ddd3bd"
  azurite: "#3a64b0"
  orpiment: "#e2b23c"
  malachite: "#2c6c51"
  madder: "#a1455a"
  cinnabar: "#d9452c"
typography:
  display:
    fontFamily: "Young Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Young Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Young Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body-lead:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-prose:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  caption:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  hairline: "2px"
  option: "6px"
  sm: "8px"
  icon: "12px"
  card: "16px"
  plate: "20px"
  plate-inner: "15px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  section: "80px"
  section-lg: "112px"
  row: "24px"
  header: "72px"
  container: "72rem"
  reading: "48rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.conch}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "44px"
  button-pill-on-ink:
    backgroundColor: "{colors.conch}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
    height: "44px"
  button-pill-on-ink-hover:
    backgroundColor: "{colors.paper}"
  link-line:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "10px 0"
  input-search:
    backgroundColor: "{colors.conch}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 44px"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.body}"
    padding: "12px 0"
  nav-link-active:
    textColor: "{colors.conch}"
  cta-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.conch}"
    rounded: "{rounded.card}"
    padding: "40px"
  plate:
    backgroundColor: "{colors.ink-deep}"
    rounded: "{rounded.plate}"
    padding: "5px"
  option-chip:
    backgroundColor: "{colors.conch}"
    textColor: "{colors.ink}"
    rounded: "{rounded.option}"
    padding: "6px 9px"
---

# Design System: Choose Like Buddha

## Overview

**Creative North Star: "The Thangka Drafting Sheet"**

Every surface is a sheet on a thangka painter's table. The indigo sheet is the drafting ground, where gold construction lines are laid down first; the conch-paper sheet is the reading ground, where the same gold survives only as hairline rules. Pigment arrives last, flat and mineral, and only where it means something: five pigments for the five concepts, and one red for the gap between what you would do and what you did.

The system is quiet, exact and geometric. Density is low; sections breathe with 80 to 112px of vertical space and one idea each. Hierarchy comes from a single-weight display serif set large against a humanist sans, not from boxes, badges or colour blocks. The five-position mandala plan is the signature figure; it appears in three states (drawn on load, resting as underdrawing, completed at the close) rather than as repeated decoration.

The world was chosen explicitly against the wellness-app default: pastel gradients, a floating phone mockup and a grid of feature cards. None of those belong here.

**Key Characteristics:**
- Two alternating sheets, indigo ink and conch paper, with a gold hairline at the drafting edge.
- Gold is line, never fill: construction geometry, dividers, focus rings, list markers.
- Five flat pigments bound to the five concept positions; cinnabar reserved for the would/did gap.
- Young Serif at one weight for every heading; Figtree for everything read.
- Flat surfaces. Depth only for things that genuinely float.
- Real app screenshots on a gold-hairline plate, never inside drawn device chrome.

## Colors

Deep indigo and warm conch, joined by gold line work, with five mineral pigments and one signal red.

### Primary
- **Drafting Indigo** (ink): the ground of every ink sheet, header, post title band and in-content CTA; also the primary text colour on paper.
- **Night Indigo** (ink-deep): the footer ground, the plate behind screenshots, and the hover state of ink buttons. One step deeper than the drafting ground, never used as a large section fill elsewhere.

### Secondary
- **Construction Gold** (gold): hairlines and geometry only. The mandala's guide (28% opacity, 0.75 stroke) and wall lines (1.25 stroke), the header and footer edge (40%), concept-list dividers (40%), the pole scale (60%), plate borders (60%), card borders (50%), focus outlines on ink, text selection, prose bullets and blockquote rules. Also the uppercase footer column headings on ink.
- **Gilt Ink** (gold-ink): gold when it must be read as text or icon on paper (5.6:1). FAQ plus icons, check marks, prose counters, post-title hover, focus outlines on paper.

### Tertiary: the five pigments
- **Orpiment** (orpiment): Right Speech's position and swatch.
- **Madder Rose** (madder): Kindness's position and swatch.
- **Azurite** (azurite): Patience's position and swatch; also the translucent petals of the breathing flower.
- **Malachite** (malachite): Letting Go's position and swatch.
- **Conch** (conch): Mindfulness, the centre square. Conch is also the primary type colour on ink, the field of the search input and the mobile sample card.
- **Cinnabar** (cinnabar): the would/did gap mark and its legend. Nothing else.

On the dark pigments (madder, malachite, azurite) labels and pole lines switch to conch; on orpiment and conch they stay ink.

### Neutral
- **Conch Paper** (paper): the reading sheet and page body background. A lighter step of conch so conch-filled elements still read against it.
- **Paper Rule** (paper-line): dividers, table borders and FAQ rules on paper.
- **Mist** (ink-soft): secondary text on ink (9.6:1): hero sentence, captions, nav links at rest, footer links.
- **Slate** (ink-muted): secondary text on paper (7.3:1): body paragraphs, descriptions, dates, prose body.

### Deprecated legacy
`main.css` still defines `--color-primary` (#4a6cf7), `--color-primary-dark` (#3b5de7), `--color-body` (#637381), `--color-dark` (#1e2238), `--color-gray-bg` (#f8f9ff), `--color-stroke` (#ebecf0) and the `gradient-1`, `gradient-2`, `gradient-hero` and `shadow-card` utilities. No template uses them. They are remnants of the previous blue world, are not part of this system, and must not be used on new surfaces. (The base `body` rule still points at `--color-body`; the default layout overrides it with ink.)

### Named Rules
**The One Meaning Rule.** Cinnabar means the gap between what you would do and what you did, and nothing else. No red buttons, no red errors dressed as brand, no red accents.

**The Pigment Position Rule.** Each pigment belongs to its concept. Use it as a flat fill for that concept's position or swatch, never as text colour, gradient stop or general decoration.

**The Gold Is Line Rule.** Gold draws; it does not fill. It appears as 1px hairlines, strokes, rings and small marks. As readable text on paper, use gilt ink instead.

## Typography

**Display Font:** Young Serif (with ui-serif, Georgia), self-hosted, weight 400 only, latin and latin-ext subsets (carries ā and ē for Ānāpānasati and Mettā).
**Body Font:** Figtree (with ui-sans-serif, system-ui), self-hosted variable 300 to 900.

**Character:** Young Serif has the blunt, inked gravity of a woodblock print; Figtree is open and plain. The serif carries every heading and quoted item; the sans carries every sentence meant to be read or scanned.

### Hierarchy
- **Display** (400, 2.5rem mobile to 3.75rem, hero 3.125 to 3.5rem at lg/xl, 1.08): the hero headline, post titles, blog index title. Balanced wrapping.
- **Headline** (400, 2.25rem to 3rem, 1.08): section headings, one per sheet, usually capped at 12 to 18ch.
- **Title** (400, 1.5rem to 1.875rem, 1.15): concept names (to 2.5rem), feature names, post titles in lists, definition terms, plan names.
- **Body lead** (Figtree 400, 1.125rem to 1.25rem, 1.625): the paragraph under a headline, 34rem to 60ch wide.
- **Body** (400, 1rem, 1.625): descriptions, FAQ answers (62ch), feature copy.
- **Body prose** (400, 1.0625rem, 1.75): long-form reading in page, post and contact layouts, headings inside in Young Serif.
- **Label** (600, 0.8125rem, 0.08em, uppercase): names set on a figure, such as mandala position labels and the concept names above Patterns demo rows. Footer column headings use 0.75rem at 0.12em in gold.
- **Caption** (400, 0.875rem, 1.5): trust lines, dates (tabular numerals), figure captions, legends.

Weights in the sans: 400 for reading, 500 for FAQ questions and options, 600 for links and labels.

### Named Rules
**The One Weight Rule.** Young Serif is set at 400 only, with -0.015em tracking. Hierarchy is made by size and space, never by faux-bolding the display face.

**The No Kicker Rule.** A headline stands alone. No eyebrow or kicker label above section headings; uppercase labels name parts of a figure or a navigation group, nothing more.

## Layout

A single centred container (72rem) with gutters of 16, 24 and 32px at base, sm and lg. Reading surfaces (pages, posts, contact, FAQ) narrow to 48rem. Each section is one full-bleed sheet with 80px vertical padding, 112px from sm; the sticky header is 72px tall.

Sections use asymmetric two-column grids built from fractional minmax tracks (7fr/4fr, 5fr/6fr, 4fr/7fr) with 56 to 80px gaps, alternating which side holds the figure. The first viewport is text left, mandala right at lg; below lg everything stacks. Lists are ruled rather than boxed: definition rows, concept rows, FAQ items and post lists are separated by 1px rules with 24 to 44px of vertical padding, and post lists use a three-column title / description / date grid from md.

Responsive adaptations are part of the system: below lg the concepts plan is not sticky and each row carries its pigment swatch instead; below md the sample item leaves the mandala's centre square for a conch card under the plan. Tailwind breakpoints are used unchanged (sm 640, md 768, lg 1024, xl 1280).

## Elevation & Depth

The world is flat. Depth is expressed by sheet change (ink to paper), by gold hairlines, and by the mandala's layering of construction line under pigment. Nothing rests on a shadow.

### Shadow Vocabulary
- **Overlay** (`box-shadow: 0 16px 40px -12px rgb(8 12 24 / 0.45)`, 0.4 on the cookie banner): only for elements that genuinely float over content, the search dropdown and the cookie banner.
- **Badge hairline** (`box-shadow: 0 0 0 1px color-mix(in srgb, #efe9dc 30%, transparent)`): a ring, not a shadow, so the black store badges do not dissolve into the indigo ground.

### Named Rules
**The Flat Pigment Rule.** Surfaces are flat at rest and on hover. A shadow is allowed only on an element that sits above the page in z-order; cards, plates and tables never get one.

## Shapes

Geometry is square and ruled: the mandala is a square palace with trapezoid quadrants and T-shaped gates inside concentric circles, and dividers are straight 1px lines. Corners soften only on objects you hold or read at small scale: 16px for cards and panels (CTA card, pricing table, dropdown, cookie banner, breathing tool), 20px outer / 15px inner for the screenshot plate (18px / 14px with 4px padding for the small plate), 8px for rectangular buttons and option chips on mobile, 6px for options inside the mandala, 12px for the app icon, full rounds for the search field, pill buttons, social buttons and gap/would/did marks. Concept swatches are 14px squares rotated 45 degrees with a gold ring: a diamond, the one angled form.

### Named Rules
**The Plate Not Phone Rule.** App screenshots sit on a night-indigo plate with a 1px gold hairline (60%). The screenshots already carry the status and tab bars; never draw device chrome, notches or tilted phones around them.

## Components

### Buttons
The site's main action is always the official store badges; bespoke buttons are few and plain.
- **Store badges:** official App Store and Google Play artwork at 48px height, 16px apart, hover to 85% opacity. On ink they take the badge hairline ring and 10px corners.
- **Primary (ink):** ink ground, conch text, 600 at 0.875rem, 8px radius, 44px minimum height; hover to night indigo.
- **Secondary (outline):** ink text, 1px ink border at 30%, darkening to full ink on hover.
- **Pill on ink:** conch ground, ink text, full round, 12px by 28px; hover to paper, press scales to 0.98.
- **Focus:** 2px gold outline offset 3px on ink; gilt ink on paper.

### Text links
- **Line link:** 600 weight, underline 1px at 0.3em offset in the current colour at 45%, rising to full on hover over 200ms. At least 10px vertical padding so it is a real target. This is the default secondary action ("How Patterns works", "All posts").

### Cards / Containers
- **CTA card:** an ink sheet inset on paper, 16px radius, 1px gold border at 50%, 32 to 40px padding, display heading, badges, trust line. Closes pages and posts.
- **Pricing table:** paper field, 16px radius, paper-line border; the premium column is set in ink with conch text.
- **Plate:** see Shapes; night-indigo field, 5px padding.
- **Shadow Strategy:** none; see Elevation.

### Inputs / Fields
- **Search:** conch field, full round, ink text, slate placeholder, 20px search icon inset left and a clear button right. Focus is a 2px gold ring offset 2px against ink. Results drop into a paper panel with a gold hairline border, 16px radius and the overlay shadow; rows highlight in conch.

### Navigation
- **Header:** sticky ink sheet with a gold hairline bottom edge, app icon plus wordmark in Young Serif at 1.25rem. Desktop links in Figtree at 1rem, mist at rest, conch on hover and for the current page, 32px apart. Mobile menu is a stacked list ruled in gold at 20 to 30%.
- **Footer:** night-indigo ground, gold hairline top edge, gold uppercase column headings, mist links brightening to conch, 44px round social targets.

### Accordion (FAQ)
Ruled rows, no boxes. Question in Figtree 500 at 1.125 to 1.25rem, a 16px gilt-ink plus that rotates 45 degrees to a cross when open (300ms), answer in slate at 62ch.

### Mandala Plan (signature)
The five-position plan: Mindfulness at the conch centre, the four other concepts in pigment trapezoids, faint gold guides under gold walls and gates. Each quadrant carries a pole line with an open conch ring (would), a filled dot (did) and a 5px round cinnabar run (the gap). Labels are real HTML text. States: **drawn** (guides trace in over 1.6s with `cubic-bezier(0.65, 0, 0.35, 1)`, walls follow at 0.5s, pigment fills position by position from 1.5s to 2.15s), **resting underdrawing** (all positions at 16% until one is lit), **focused** (one position at full opacity, transitions 500ms `cubic-bezier(0.16, 1, 0.3, 1)`), **pending** (blank until scrolled into view). Reduced motion or no JS: static and fully painted. It always carries a caption saying which values are illustrative.

### Pole Scale and Gap Row
A 1px gold scale with 9px end ticks under each concept name, poles set at full size beneath it. The Patterns demo row repeats the vocabulary on paper: a 1px ink line at 35%, the cinnabar run, a paper ring with 2px ink border for would and a solid ink dot for did, with a legend.

### Breathing Tool
An ink panel with a gold hairline border, six translucent azurite petals blended in screen mode, blooming on a 16s box-breathing cycle, phase words in Young Serif, a conch pill toggle. Reduced motion halves the speed.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed ink and paper sheets, one idea per sheet, with 80 to 112px of vertical padding.
- **Do** draw with gold at 1px and 40 to 60% opacity for dividers; use gilt ink (#7a5a16) whenever gold must be read on paper.
- **Do** bind each pigment to its concept: orpiment Right Speech, madder Kindness, azurite Patience, malachite Letting Go, conch Mindfulness.
- **Do** set every heading in Young Serif 400 with -0.015em tracking and balanced wrapping; set everything read in Figtree.
- **Do** separate list items with ruled lines instead of cards.
- **Do** put screenshots on the gold-hairline plate and use the official store badges as the primary action.
- **Do** caption any figure whose marks are illustrative, and ship reduced-motion states that are static and fully painted.

### Don't:
- **Don't** use cinnabar for anything but the would/did gap.
- **Don't** use gradients, glows or pastel washes; pigment is flat.
- **Don't** put shadows on cards, plates or tables; only floating overlays get the overlay shadow.
- **Don't** wrap screenshots in drawn phone frames or float them at an angle.
- **Don't** add an eyebrow or kicker above a headline.
- **Don't** bold Young Serif or introduce a third typeface.
- **Don't** use the legacy blue tokens (`primary`, `body`, `dark`, `gray-bg`, `stroke`) or the `gradient-*` and `shadow-card` utilities.
