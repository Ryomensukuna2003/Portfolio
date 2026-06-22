# Product

## Register

brand

## Users

Recruiters, hiring managers, and fellow engineers evaluating Shivanshu Mishra
for a role or collaboration. They arrive from a résumé link, GitHub, or a DM,
often on mobile, and spend under a minute forming an impression. Their job: in
that minute, decide "is this person worth a conversation?"

## Product Purpose

A personal portfolio. The product *is* the design — it has to communicate
craft, taste, and capability faster than the words on it can be read. Success
is a recruiter reaching the Work or Contact page and acting (clicking a
project, copying the email).

## Brand Personality

Confident, precise, a little playful. Terminal-coded but not cold — the
monospace + pure-black canvas signals "engineer", while the crosshair cursor,
the sleeping `oneko` cat easter egg, the scare-quoted `"student"`, and the
console greeting to "curious dev" signal a real person with a sense of humor.
Three words: **technical, deliberate, human.**

## Anti-references

- Templated "card grid of projects with icon + heading + blurb" dev portfolios.
- Gradient-heavy, glassmorphic SaaS-landing aesthetics.
- The over-saturated "hacker green on black" terminal cliché — we deliberately
  use a warm vermilion-orange signal accent instead of Matrix green.
- Anything that reads as AI-generated default.

## Design Principles

1. **Identity over trend.** The mono + black + crosshair + cat is the voice;
   every change sharpens it rather than replacing it.
2. **One signal color, used with intent.** Vermilion-orange
   (`oklch(0.72 0.20 38)`, exposed as the `signal` token) marks exactly what
   matters: active nav, primary links, project-type tags, the cursor dot,
   status. Never decorative.
3. **Hierarchy from size, color, and space — not weight.** GeistMono is
   effectively single-weight, so contrast is carried by scale and the accent,
   not bold.
4. **Every interactive thing is reachable and legible.** Real routes, visible
   focus rings, accessible headings, AA contrast, and a reduced-motion path are
   table stakes, not polish.
5. **Show, don't pad.** No filler projects or duplicate links; each card earns
   its place.

## Accessibility & Inclusion

- WCAG AA target: body text ≥ 4.5:1 (signal accent is 7.4:1 on black).
- Single `<h1>` per page; animated headings expose full-text accessible labels
  (not letter-by-letter) with decorative spans marked `aria-hidden`.
- `prefers-reduced-motion: reduce` collapses all entrance/letter animations to
  an instant render; content is never gated behind a transition.
- Visible `:focus-visible` ring (the custom cursor is hidden for keyboard and
  touch users via `pointer: fine`).
- Active navigation conveyed by both color and `aria-current="page"`.
