---
title: "Giolindo"
summary: "A React and Next.js product with two viewing systems: a 32-image frame-based Canvas rotation viewer, and a separate 3D/AR configurator with runtime materials."
role: "Senior Software Engineer, frontend lead"
type: "Product rotation and 3D/AR"
order: 3
kind: company
tier: flagship
featured: true
stack:
  - React
  - Next.js
  - TypeScript
  - Tailwind CSS
  - viewer-360
  - Canvas
highlights:
  - "Frontend delivery for the React and Next.js product, built at FOCUS, Jul 2024 – Present."
  - "A 32-image, frame-based Canvas rotation viewer powered by the public viewer-360 library."
  - "A separate 3D/AR configurator: product models and materials, textures stripped on save, materials applied at runtime, with AR viewing."
links:
  - label: "viewer-360 library"
    href: "https://github.com/usamakhangt4/viewer-360"
seo:
  title: "Giolindo Case Study"
  description: "Case study for Giolindo: a 32-image Canvas rotation viewer using viewer-360, and a separate 3D/AR product configurator."
  keywords:
    - Giolindo
    - viewer-360
    - product viewer
    - 3D
    - AR
    - React
    - Next.js
---

## Problem

Giolindo needs shoppers to inspect a product by rotating through photographs, and, separately, to configure a 3D model with material choices and view it in AR.

## Contribution

I lead frontend delivery for this React and Next.js product at FOCUS (Jul 2024 – Present). That includes component structure, TypeScript and Tailwind interfaces, and mentoring other engineers. The viewing work below is part of that product.

## Frame-based rotation

One system is a 32-image, frame-based Canvas viewer. Dragging rotates through the frames. It is powered by my public viewer-360 library. viewer-360 is used only for that frame rotation. The image count in this implementation is 32; the library itself takes whatever frame list it is given.

## 3D/AR configuration

The other system is a separate 3D/AR configurator. Admins upload product-specific 3D models and multiple material options. Original textures and materials are stripped during saving. The selected materials are applied at runtime. AR viewing is implemented.

## Technical decisions

The React and Next.js application keeps the two viewing systems apart. Photographic rotation stays in the Canvas viewer and viewer-360. Model upload, material choices, texture stripping, runtime material application, and AR viewing stay in the configurator.

Delivery around the product uses ESLint, Prettier, pre-commit checks, and Turbopack.
