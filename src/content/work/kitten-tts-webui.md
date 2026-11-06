---
title: "KittenTTS WebUI"
summary: "A Windows web UI for local text-to-speech with the KittenTTS 2 model, including 47 built-in voices, sample texts, and a history of generated clips."
role: "Local AI tooling"
type: "Local speech web UI"
year: "2026"
order: 7
tier: flagship
featured: true
stack:
  - FastAPI
  - PyTorch
  - KittenTTS 2
  - CUDA
  - Windows
highlights:
  - "Local Windows UI for the 1.7B KittenTTS 2 model, with an NVIDIA GPU path and a CPU fallback."
  - "47 built-in voices, ready-made sample texts, and a history of generated WAV clips."
  - "Published samples were generated on an RTX 3060. The project documents about 4.7 GB of VRAM while the model is loaded."
links:
  - label: "GitHub"
    href: "https://github.com/usamakhangt4/kitten-tts-webui"
  - label: "Samples"
    href: "https://usamakhangt4.github.io/kitten-tts-webui/"
seo:
  title: "KittenTTS WebUI Case Study"
  description: "Case study for a local Windows web UI that runs KittenTTS 2 text-to-speech with FastAPI and PyTorch."
  keywords:
    - KittenTTS
    - text to speech
    - FastAPI
    - PyTorch
    - local inference
---

## Problem

Running a speech model locally usually means a script, a manual download, and no simple way to try voices or keep the clips. KittenTTS WebUI is a single-page Windows UI for that workflow.

## Approach

The UI and scripts in the repository are an unofficial project. They are not affiliated with or endorsed by KittenML or Stellon Labs. Setup is Windows-only (`setup.bat` and `start.bat`). The server is FastAPI, the runtime is PyTorch, and the model is KittenTTS 2, a 1.7B speech model loaded through the `kittenml` package. Model weights download on first run and are not stored in the repository.

An NVIDIA GPU is the intended device. The project documents about 4.7 GB of VRAM while the model is loaded, and recommends a card with 6 GB or more. Without a supported GPU it falls back to the CPU. The page lists 47 built-in voices: 38 English voices plus 9 language voices. Sample texts fill the box, and every clip is saved and listed in a history.

## Outcome

The public sample page plays clips generated on an RTX 3060. The app itself stays on the machine: after the model download, generation does not require an account or a hosted API.
