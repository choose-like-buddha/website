---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["_includes/header.html","_includes/footer.html"]
---

# Homepage surface brief

Scope: `/` (index.html) plus the shared header and footer it uses. Other pages follow in a later pass. Visitor mode: **Persuade**.

Audience/job: mindfulness practitioners who want to bring practice into everyday decisions. Many arrive from a "What Would Buddha Do" post. Action: install the app from the App Store or Google Play.

Proof on hand: real screenshots in `assets/screens/`; the real poles of the five concepts (Practice Map page); the plan facts. There are no testimonials, ratings or user counts, and none may be invented. Session length is unconfirmed: avoid "one minute" and "few minutes", and say "five short items a day", which is true.

Constraints: keep the official store badges, all plan facts, and "Ask Buddha is not therapy". The FAQ keeps its content. Blog teaser stays.

## Direction contract

THESIS: The five concepts are a mandala's five positions, drawn the way a thangka painter drafts: gold construction lines first, then flat mineral pigment. This refuses the wellness-app default of a pastel gradient, a floating phone and a card grid.

OWN-WORLD: Deep indigo ground (#16203a) with gold hairline construction geometry (#c9a24a) and conch-white type (#efe9dc). Five flat pigments, one per concept position: azurite, orpiment, malachite, conch, and madder rose for Kindness. Cinnabar (#c8402a) is reserved for one meaning, the would/did gap. Unpractised positions are drawn as faint construction lines. The page alternates indigo drafting sheets and conch paper sheets. Type: a crisp display serif with Tibetan-print gravity for headlines, and a clean humanist sans for body text.

STORY: The visitor sees that this is a daily practice of two honest options, not a quiz. They see the five concepts and their real poles, and that Patterns shows the gap between what you'd do and what you did. They install.

FIRST VIEWPORT: Left, about 45% of the width: a three-line serif headline (no kicker), one sentence, the store badges, and the trust line. Right, about 55%: a square mandala plan drawn in gold. The centre square holds a sample item as two options. Four gate positions hold the other concepts, each with its two poles on a shared-scale line, a lean dot, and a cinnabar gap mark. Labelled "Sample".

FORM: Candidate 7 of 7 (thangka iconometry / five-family mandala plan), seed 62dcd931. Signature interaction: construction lines draw in, then pigment fills position by position. Selecting a concept in the Five Concepts section lights its position in a sticky plan. Reduced motion: static and fully filled.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Cited adaptations

- Hero gates show lean marks without pole names. The trapezoids are about 65px deep, so names there would drop below legible size. The real poles are set at full size in the Five Concepts section directly below.
- Below `lg` there is no sticky concepts plan, because a sticky figure on a phone would cover the list. Each row carries its position's pigment swatch instead.
- Below `md` the sample item moves from the centre square to a card under the plan, for legibility.
- The caption says the item is real (it is taken from the app) and only the lean marks are illustrative. "Sample" would mislabel it.
- The paper sheet is #f6f1e6, a lighter step of conch (#efe9dc). Conch stays for the centre square and fields, so the pigment reads against the page.
- The concepts plan rests in construction state and lights one position at a time. The closing plan draws in when it comes into view. The hero plan draws on load. So the three plans are three states, not three copies.
