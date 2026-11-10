---
title: "Corpo Braindance"
summary: "A local-first cyberpunk interface that turns a few words into a corporate brief, tunes its voice and scope, and keeps up to 20 briefs in the browser with no backend."
role: "Product and frontend engineering"
type: "Local-first web app"
order: 10
tier: flagship
featured: true
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - Tailwind CSS 4
  - Zustand
  - Vitest
highlights:
  - "A bold, editorial cyberpunk product interface: speech fabricator, voice and scope tuning, jargon-density readout, and a 20-slot archive."
  - "Static Next.js export with Zustand state and localStorage persistence. No backend, no accounts, and nothing leaves the device."
  - "Accessibility built in: skip link, keyboard-operable controls, aria-live announcements, prefers-reduced-motion and forced-colors support."
  - "Vitest and smoke tests cover the core generate, copy, and save flows."
links:
  - label: "Live demo"
    href: "https://corpo-braindance.vercel.app/"
seo:
  title: "Corpo Braindance Case Study"
  description: "Case study for Corpo Braindance, a local-first Next.js 16 and React 19 interface with Zustand, localStorage persistence, and built-in accessibility."
  keywords:
    - Corpo Braindance
    - Next.js
    - React
    - Zustand
    - local-first
    - accessibility
---

## Problem

Generators are usually a text box and a button. The goal here was a product-grade interface: a strong visual identity, controls that shape the output, a way to keep results, and no account or server in the way.

## Interface design

The app is a cyberpunk "internal comms" console. A speech fabricator produces a headline quote and memo, a Tune panel sets voice and scope, a jargon-density readout reacts to each result, and an archive shows saved briefs as slots out of 20. The layout keeps one primary action (Generate) and two secondary ones (Copy memo, Save brief) in a single row.

## Frontend architecture

Corpo Braindance is a static Next.js 16 export with React 19, TypeScript, and Tailwind CSS 4. Zustand holds the interface state. Saved briefs persist to localStorage with a 20-slot cap, so briefs never leave the device and no server is involved.

## Accessibility

A skip link leads to the main content. Every action is a real button that works from the keyboard. New results are announced through an aria-live region. Motion respects prefers-reduced-motion, and forced-colors styles keep the interface usable in Windows high-contrast mode.

## Testing

Vitest and smoke tests cover the core generate, copy, and save flows.

## Outcome

A fast, account-free product UI where a brief is generated, tuned, copied, or saved in a few clicks, and the archive stays in the browser rather than on a server.
