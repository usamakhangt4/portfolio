---
title: "Lumenweave"
summary: "An AI room visualizer. A React, Vite, and Three.js embed calls a FastAPI photo API, which uses a separate Windows GPU service for segmentation, depth, and inpainting."
role: "Applied AI engineering"
type: "AI room visualizer"
order: 1
kind: company
tier: flagship
featured: true
stack:
  - React
  - Vite
  - Three.js
  - FastAPI
  - SAM 3
  - Depth Anything V2
  - FLUX.2 [klein] 4B
highlights:
  - "React/Vite and Three.js embed, a CPU-hosted FastAPI photo API, and a separate authenticated Windows GPU inference service."
  - "SAM 3 segmentation, Depth Anything V2 depth, and FLUX.2 [klein] 4B inpainting with Nunchaku INT4 and 3 steps on an RTX 3060 12 GB."
  - "Warm removal of about 5.2–7.7 seconds on this test setup, with no pixels changed outside the mask."
seo:
  title: "Lumenweave Case Study"
  description: "Case study for Lumenweave, an AI room visualizer with SAM 3, Depth Anything V2, and local FLUX.2 inpainting on an RTX 3060 12 GB."
  keywords:
    - Lumenweave
    - computer vision
    - SAM 3
    - Depth Anything V2
    - FLUX.2
    - local inference
---

## Problem

Lumenweave is an AI room visualizer. A photo has to be edited inside a selected region, with depth available for the scene, while the surrounding pixels stay unchanged.

## Contribution

I built the path from the embedded visualizer through the photo API to the GPU inference service: segmentation, depth estimation, and masked inpainting.

## Architecture

The embed is a React and Vite application using Three.js. It calls a Python FastAPI photo API hosted on a CPU machine. Inference runs in a separate authenticated Windows service on a GPU.

That service uses SAM 3 for segmentation, Depth Anything V2 for depth estimation, and FLUX.2 [klein] 4B for inpainting. Inpainting runs with Nunchaku INT4 and 3 steps, locally on an RTX 3060 12 GB.

## Technical decisions

The photo API stays on the CPU host. Model inference stays on the separate Windows GPU service, behind authentication.

FLUX.2 [klein] 4B is the inpainting model, quantized with Nunchaku INT4 and run for 3 steps on the 12 GB card. Prompt prewarming is part of the inference path, and compositing is done on the GPU.

## Results

These figures are measurements from this hardware and test setup, an RTX 3060 12 GB. They describe that setup.

- Warm removal took approximately 5.2–7.7 seconds.
- Zero pixels changed outside the mask.
- Prompt prewarming reduced cold prompt encoding from 13.6 seconds to 3.3 seconds. Those figures are prompt encoding time.
- GPU compositing saved 0.4–1.6 seconds.
- An 11-room regression QA harness exercises the flow.
