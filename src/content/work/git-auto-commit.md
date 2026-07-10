---
title: "git-auto-commit"
summary: "A Rust CLI that reads staged Git changes, asks a local Ollama model for a commit message, and confirms before running the commit."
role: "CLI tool author"
type: "Developer tooling"
year: "2026"
order: 3
tier: "flagship"
featured: true
stack:
  - Rust
  - Ollama
  - clap
  - reqwest
  - Git
highlights:
  - "Built a working command-line tool around a real developer workflow."
  - "Reads staged diffs, filters noisy artifacts, and generates commit messages through a local Ollama model."
  - "Ships with integration tests, install scripts, and GitHub release workflows."
links:
  - label: "GitHub"
    href: "https://github.com/usamakhangt4/git-auto-commit"
seo:
  title: "git-auto-commit Case Study"
  description: "Case study for a Rust CLI that generates Git commit messages from staged changes using a local Ollama model."
  keywords:
    - Rust
    - CLI
    - Ollama
    - Git
    - developer tooling
---

## Problem

Writing commit messages is small work, but it interrupts flow. The useful version of this idea is not a magic auto-commit button; it is a tool that reads the staged change, proposes a message, and still lets the developer confirm before anything is committed.

## Approach

The CLI is written in Rust and uses `clap` for command-line structure. It reads staged Git diffs, skips common build artifacts and noisy files, sends the useful diff context to a local Ollama model, and prompts for confirmation before running `git commit`.

## Outcome

This is a strong portfolio project because it solves a real developer workflow and works as described. It also proves comfort outside frontend-only work: Rust, local AI tooling, Git automation, tests, install scripts, and release workflows.
