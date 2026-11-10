---
title: "viewer-360"
summary: "A TypeScript Canvas Web Component for frame-based product rotation, with drag rotation, zoom, high-resolution image swapping, network-aware progressive loading, and React, Vue, and Angular wrappers."
role: "Component library author"
type: "Open-source Web Component"
year: "2024"
order: 8
featured: true
stack:
  - Web Components
  - TypeScript
  - Canvas
  - Rollup
  - React/Vue/Angular wrappers
highlights:
  - "TypeScript Canvas Web Component with Shadow DOM isolation and React, Vue, and Angular wrappers."
  - "Drag rotation, pinch and scroll zoom, and high-resolution image swapping when zoomed."
  - "Progressive loading that prefers key and nearby frames, then continues in idle time and backs off on slow or save-data connections. Frame count is set by the image list."
links:
  - label: "GitHub"
    href: "https://github.com/usamakhangt4/viewer-360"
  - label: "npm"
    href: "https://www.npmjs.com/package/@usamakhangt4/viewer-360"
  - label: "Live demo"
    href: "https://usamakhangt4.github.io/viewer-360/demo/"
seo:
  title: "viewer-360 Case Study"
  description: "Case study for viewer-360, a TypeScript Canvas Web Component for frame-based product rotation with zoom, high-resolution swaps, and framework wrappers."
  keywords:
    - Web Components
    - TypeScript
    - Canvas
    - product viewer
    - frontend library
---

## Problem

Product rotation viewers often ship as framework-specific widgets, which makes the same frame sequence harder to reuse in React, Vue, Angular, and plain HTML. viewer-360 keeps the core portable and still offers a wrapper for each of those stacks.

## Approach

The core is a TypeScript Web Component rendered to Canvas. Dragging rotates through the `images` list. The list length is up to the caller. Zoom supports pinch, scroll, and discrete steps, and a parallel `highResImages` list swaps in when the user zooms. Loading is progressive: key frames and nearby frames first, then the rest during idle time, with lower concurrency on slow or save-data connections. React, Vue, and Angular wrappers sit on that custom element.

## Outcome

The package is published on npm with a public demo. One Canvas implementation covers drag rotation, zoom, high-resolution swapping, and network-aware loading, and the wrappers keep that behavior available in React, Vue, and Angular.
