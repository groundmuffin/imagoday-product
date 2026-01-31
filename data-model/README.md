# Data Model

## Overview

The Imago Dei 2.0 conference website uses a simple data model centered around the conference content.

## Entities

### Speaker
A conference presenter with their name, photo, bio, title/role, and expertise area. Includes keynote speakers and facilitators who lead sessions, panels, and workshops.

### Session
A scheduled event in the 2-day program. This includes keynotes, panels, workshops, Q&A sessions, and networking breaks. Each session has a time slot, title, description, and is assigned to a specific day.

### Partner
An organization supporting the conference. Partners fall into different categories: organizers (Faithbase, IESR), institutional partners (MakeITinOradea, Episcopia Romano-Catolică), or sponsors. Each has a name, logo, and description.

### Venue
The conference location — Palatul Episcopal Romano Catolic in Oradea, Romania. Includes description, cultural and historical significance, photos, and address information.

### Objective
One of the 5 numbered conference objectives that define the event's purpose: Awareness, Interdisciplinary Dialogue, Education, Anticipation & Preparation, and Ethical Framework. Each has a title and description.

## Relationships

- Session has many Speakers (a panel or workshop may have multiple presenters)
- Speaker has many Sessions (a speaker may present at multiple events across the two days)

## Type Definitions

See `types.ts` for complete TypeScript interfaces for all entities.

## Sample Data

See `sample-data.json` for example data matching the type definitions.
