# PARTYBOSS - Party Bus Rental Website PRD

## Original Problem Statement
Build a PARTYBOSS party bus rental website for Austria based on reference site partyboss.at. Requirements:
- Stylish fonts, modern design
- Each section on SEPARATE PAGE (not scrolling)
- Dark background, festive nightclub vibe
- EmailJS for contact form notifications
- SEO-optimized content for Oberösterreich and Wien
- AI-indexable structured data

## Core Requirements (Static)
- Multi-page React website (not single-page scrolling)
- Dark theme with neon purple/pink colors (nightclub vibe)
- German language content
- Contact form with backend storage
- Mobile responsive design
- SEO-optimized pages for Austrian cities and fleet
- Schema.org structured data for AI indexing

## What's Been Implemented

### Feb 7, 2026 - Initial Build
- Project scaffolding (React + FastAPI + MongoDB)
- Multi-page routing, dark neon theme
- All 10 bus listings, event pages, city pages
- Contact form with backend storage

### Feb 8, 2026 - Homepage SEO Redesign
- Homepage redesigned with Oberösterreich SEO content
- 3 user-uploaded photos integrated
- 2 new city pages (Wels, Steyr)
- Cities expanded from 4 to 6

### Feb 8, 2026 - Fleet Page SEO Overhaul
- **Partybusse page completely redesigned** for AI-indexability:
  - New H1: "Partybus Flotte Wien — 10 Partybusse von 8 bis 50 Personen"
  - Quick Answer Block for AI snippets
  - Comparison table (all buses sorted by capacity with categories)
  - Occasion-based recommendations (JGA, Firmenevents, Geburtstage, Hochzeiten)
  - Standard equipment section (6 items)
  - Detailed bus descriptions (10 buses with structured format)
  - Bus-specific FAQ (7 questions)
  - 4-step booking process
  - Schema.org JSON-LD (ItemList + Vehicle, FAQPage)
- **Bus data enhanced** with: Roman numerals (I-X), categories (Mini/Mittel/Groß/XL/XXL), specialEquipment, detailDescription, bestFor fields

### Architecture
- Frontend: React + Tailwind + Framer Motion
- Backend: FastAPI + MongoDB
- Design: Anton/Unbounded/Manrope fonts, #050505 bg, #D900FF primary, #00F0FF secondary

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] Multi-page website structure
- [x] Dark theme with neon colors
- [x] All 10 bus listings with enhanced data
- [x] Contact form with backend storage
- [x] Mobile responsive design
- [x] SEO-optimized homepage for Oberösterreich
- [x] User-provided photos integrated
- [x] Wels & Steyr city pages
- [x] Fleet page comparison table
- [x] Schema.org JSON-LD markup
- [x] Fleet FAQ (7 bus-specific questions)
- [x] Occasion-based bus recommendations
- [x] Booking process visualization

### P1 (High Priority) - PENDING
- [ ] EmailJS integration (requires user API keys: Service ID, Template ID, Public Key)
- [ ] Image gallery/lightbox for buses
- [ ] Testimonials section with real reviews

### P2 (Medium Priority)
- [ ] Blog/Magazine section
- [ ] WhatsApp click-to-chat button
- [ ] Cookie consent banner
- [ ] Online booking calendar

### P3 (Future)
- [ ] Live availability checker
- [ ] Price calculator
- [ ] Virtual bus tour (360°)
- [ ] Multi-language support (EN)

## Next Tasks
1. EmailJS integration (user keys needed)
2. Add real bus images from client
3. SEO meta tags for all pages
4. Customer testimonials
