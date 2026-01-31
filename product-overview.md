# Imago Dei 2.0 — Product Overview

## Summary

A conference website for an international event that brings together perspectives from technology, ethics, and theology to discuss artificial intelligence, humanity, and moral responsibility. The conference takes place March 6-7, 2026 in Oradea, Romania, at a rare historical inflection point where AI challenges us to rethink what it means to be human.

## Planned Sections

1. **Hero & Inflection Point** — Conference headline with tagline "Inflection Point", dates (March 6-7, 2026), and location. Plus the philosophical manifesto: the rare historical moment where AI challenges us to rethink what it means to be human, and the moral responsibility we carry at this inflection point in history.

2. **Objectives** — The 5 numbered objectives: Awareness, Interdisciplinary Dialogue, Education, Anticipation & Preparation, and Ethical Framework.

3. **Speakers** — Main speakers (Dr. Noreen Herzfeld, Timmy Ghiurău) plus other speakers & facilitators (Dr. Natan Mladin, Dr. Susana Dragomir, Daniel Alb) with photos and bios.

4. **Program** — Two-day schedule: Day 1 evening (keynotes, panel, Q&A) and Day 2 full day (plenary sessions, parallel workshops, networking & final panel).

5. **Venue** — Palatul Episcopal Romano Catolic showcase with description, cultural significance, and location in Oradea.

6. **Partners** — Partnership philosophy, benefits grid, target audience, organizers (Faithbase, IESR), and institutional partners (MakeITinOradea, Episcopia Romano-Catolică).

7. **Contact** — Closing quote and contact emails (office@imagodei20.org, daniel@faithbase.tech).

## Data Model

**Entities:**
- **Speaker** — Conference presenters with name, photo, bio, title/role, and expertise area
- **Session** — Scheduled events including keynotes, panels, workshops, Q&A sessions, and networking breaks
- **Partner** — Organizations supporting the conference (organizers and institutional partners)
- **Venue** — The conference location with description, photos, and address
- **Objective** — The 5 numbered conference objectives

**Relationships:**
- Session has many Speakers (a panel or workshop may have multiple presenters)
- Speaker has many Sessions (a speaker may present at multiple events across the two days)

## Design System

**Colors:**
- Primary: `sky` — Used for buttons, links, key accents
- Secondary: `cyan` — Used for highlights, secondary elements
- Neutral: `zinc` — Used for backgrounds, text, borders
- Section Backgrounds: Mostly dark, with light backgrounds for Venue and Partners sections

**Typography:**
- Heading: Space Grotesk
- Body: Inter
- Mono: JetBrains Mono

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, routing structure, and application shell
2. **Hero & Inflection Point** — Conference identity, CTAs, about statement, and manifesto
3. **Objectives** — 5 numbered objectives in a 3+2 grid layout
4. **Speakers** — Two-tier speaker showcase with expandable bios
5. **Program** — Two-day schedule in side-by-side layout
6. **Venue** — Full-bleed venue showcase with directions
7. **Partners** — Partnership philosophy, benefits, and partner logos
8. **Contact** — Closing quote and contact emails

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
