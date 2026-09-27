# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The website (chooselikebuddha.com) is the marketing and content surface for a native iOS and Android app. The app itself is not built in this repo.

## Users

Primary: people who already practise mindfulness — they meditate, or read Buddhist ideas — and want to carry that practice into real, everyday decisions rather than keep it on the cushion. They know the wise response in theory; the gap is choosing it in the moment.

Many arrive cold through the "What Would Buddha Do" blog (search, Pinterest, social) on a specific hard moment, then reach the homepage deciding whether to install.

## Product Purpose

A short daily practice that trains responding instead of reacting. Each day brings five brief items across five concepts: a check-in on what you noticed, something you already did, and something you might do. Over time the app shows where you actually lean.

Success for the website: a practitioner understands the practice and installs the app. Success for the product: the gap between what someone would do and what they did narrows.

## Positioning

- **Two honest options, no score, no right answer.** Both choices are defensible; the practice is noticing, not passing.
- **Patterns shows the would/did gap.** The app places you between each concept's two poles and shows the distance between what you'd choose and what you actually did.
- Ask Buddha (AI guidance) and the breathing techniques support the practice; they are not the lead.
- Built by one independent developer. No ads, no account required, privacy-respecting.

## Operating Context

- The practice is a fixed five-item daily session, the same on both plans.
- The five concepts, each a real tension: Right Speech, Kindness, Patience, Letting Go, Mindfulness.
- Blog posts follow the series "What Would Buddha Do… When X?". Titles are phrased as questions to complete that stem.
- Downloads go through the App Store and Google Play. The site shows the official store badges.

## Capabilities and Constraints

- **Plans** (source of truth: `_config.yml`, `_data/plans.yml`, `_data/faq.yml`, which mirror the app's `constants/subscription.ts` and `constants/breathing.ts`):
  - Free Path, free. The full daily practice, 2 Ask Buddha questions a day, the 7 most recent answers kept, Sama (Box) breathing, Patterns, reflections, streaks, 27 mandala badges, Apple Health sync.
  - Enlightened Path, $3.99/month, monthly only. 20 Ask Buddha questions a day, unlimited history, all four breathing techniques (Sama, Ānāpānasati, Mettā, Vase).
  - No annual plan and no one-time purchase. Billing goes through the stores.
- Ask Buddha is AI-generated and is **not** therapy. Copy must never imply it is.
- No Buddhist belief is required. Buddhism is a practical lens, not religious instruction.
- Every feature claim must be checkable against the app's constants. The existing data files enforce this discipline; keep it.
- Stack: Jekyll, Tailwind v4 via `@tailwindcss/cli`, GitHub Pages with a daily rebuild workflow. PostHog analytics loads only after cookie consent.
- **Open:** the true length of a session. The homepage says "one minute" in two places and "A Few Minutes a Day" in the features grid. Confirm before the copy is changed.
- **Known stale copy:** `_pages/about.md` still describes the old model ("one answer is the logical choice… only one leads to greater awareness"). This contradicts the current no-right-answer practice.

## Brand Commitments

- Name: Choose Like Buddha. Free plan: "Free Path". Premium plan: "Enlightened Path". Feature names: "Ask Buddha", "Patterns", "Practice Map", "Breathe".
- Tagline: "Train your mind to respond, not react."
- Voice: calm, honest, plain. No hype and no overclaiming. Understated trust lines such as "Free · No ads · No account required".
- Assets: app icon `assets/logo.png`; official store badges `assets/appstore.png` and `assets/playstore.png`; real app screenshots in `assets/screens/`.

## Evidence on Hand

- Real app screenshots: `assets/screens/`.
- About 170 posts in the "What Would Buddha Do" series (`_posts/`, some of them scheduled for later dates), with a topic backlog in `todo.txt`.
- A public changelog (`_pages/changelog.md`) and a Product Hunt listing.
- **Unconfirmed:** store ratings, reviews, user counts, testimonials and press. Do not show or invent any until the owner supplies them.

## Product Principles

1. **Practice over preaching.** Show the practice of choosing; don't lecture about Buddhism.
2. **Honesty as a feature.** Both options are honest, nothing is scored, and nothing is overclaimed on the site or in the app.
3. **Small and daily beats big and rare.** Sell the habit, not a transformation.
4. **The gap is the insight.** What you'd do versus what you did is the product's distinctive truth. Lead with it.
5. **Respect the practitioner.** The audience already knows the ideas. Speak to them as peers, not beginners to be converted.
