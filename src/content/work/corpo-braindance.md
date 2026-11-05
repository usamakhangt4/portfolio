---
title: "Corpo Braindance"
summary: "A local-first cyberpunk interface that turns a few words into a corporate brief and keeps up to 20 of them in the browser."
role: "Product and frontend engineering"
type: "Local-first web app"
order: 6
tier: flagship
featured: true
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - Tailwind CSS 4
  - Zustand
highlights:
  - "Cyberpunk product interface for generating and saving corporate briefs."
  - "Static export. Up to 20 briefs stay in localStorage, with no backend and no accounts."
  - "Skip link and keyboard-operable controls. Vitest and smoke coverage are documented with the project."
links:
  - label: "Live demo"
    href: "https://corpo-braindance.vercel.app/"
seo:
  title: "Corpo Braindance Case Study"
  description: "Case study for Corpo Braindance, a local-first Next.js interface that generates corporate briefs and stores up to 20 of them in the browser."
  keywords:
    - Corpo Braindance
    - Next.js
    - React
    - Zustand
    - local-first
---

## Problem

A corporate-brief generator is only useful as a product if someone can open it, tune the voice, and keep a few results without creating an account or sending the text anywhere.

## Approach

Corpo Braindance is a static Next.js 16, React 19, TypeScript, and Tailwind CSS 4 export. Zustand holds the interface state. The live app is a cyberpunk console: a speech fabricator, voice and scope controls, a generated memo, and an archive. Generate, copy, and save run in the browser. Saved briefs use localStorage, capped at 20 slots. There is no backend and no account.

The page includes a skip link, and the generation, copy, and save actions are keyboard-operable buttons. Vitest and smoke coverage are documented with the project.

## Outcome

The live demo at corpo-braindance.vercel.app generates a brief on the device and lists saved briefs as slots out of 20. Closing the tab leaves that archive in the browser rather than on a server.
