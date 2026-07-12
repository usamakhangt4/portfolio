---
title: "Weather Explorer"
summary: "A typed weather search interface supporting city, ZIP code, and coordinate-based forecasts with reusable data states and validated inputs."
role: "Frontend engineer"
type: "Weather data application"
year: "2022"
order: 9
tier: "supporting"
featured: true
stack:
  - Next.js
  - TypeScript
  - TanStack Query
  - React Hook Form
  - Ant Design
highlights:
  - "Created separate weather lookup flows for city names, ZIP codes, and latitude/longitude coordinates."
  - "Centralized API access and asynchronous server-state handling with Axios and React Query."
  - "Built reusable form, selection, weather-card, and data-display components with typed validation."
links:
  - label: "GitHub"
    href: "https://github.com/usamakhangt4/weather-app"
seo:
  title: "Weather Explorer Next.js Project"
  description: "A TypeScript weather application with multiple search modes, validated forms, reusable UI components, and React Query data fetching."
  keywords:
    - Next.js
    - TypeScript
    - weather API
    - React Query
    - React Hook Form
---

## Problem

Weather interfaces need to support more than one way of locating a forecast while keeping loading, error, validation, and result states consistent across every search flow.

## Approach

The application separates city, ZIP code, and coordinate-based searches into focused components. Shared API services handle the weather requests, React Query manages asynchronous state, and React Hook Form with Yup provides structured input validation. Reusable weather cards and data components keep the result presentation consistent.

## Outcome

The project demonstrates a typed, component-based frontend for external API data. Users can choose the lookup method that matches the information they have while receiving a consistent interface for validation and weather results.
