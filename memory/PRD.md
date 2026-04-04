# PARTYBOSS - Party Bus Rental Website PRD

## Original Problem Statement
Build a PARTYBOSS party bus rental website for Austria based on reference site partyboss.at. Requirements:
- Stylish fonts
- Modern, up-to-date design
- Each section on SEPARATE PAGE (not scrolling)
- Dark background (NOT light)
- Festive, party-like, evening/night vibe
- EmailJS for contact form notifications
- SEO-optimized content for Oberösterreich (Linz, Wels, Steyr, Braunau am Inn)
- Use 3 user-provided photos (branded PARTYBUS-OÖ bus, school bus, double-decker)

## User Personas
1. **Young Adults (18-35)** - Planning JGA, bachelor/bachelorette parties, birthday celebrations
2. **Corporate Event Planners** - Organizing company parties, Christmas events, team building
3. **Students** - Maturaball afterparties, student parties
4. **Wedding Parties** - After-wedding celebrations, guest transport
5. **Oberösterreich Locals** - Linz, Wels, Steyr, Braunau am Inn residents looking for local party bus rental

## Core Requirements (Static)
- Multi-page React website (not single-page scrolling)
- Dark theme with neon purple/pink colors (nightclub vibe)
- German language content
- Contact form with backend storage
- Mobile responsive design
- SEO-optimized pages for Austrian cities (focus: Oberösterreich)

## What's Been Implemented

### Feb 7, 2026 - Initial Build
- Project scaffolding and environment setup (React + FastAPI)
- Extracted Word doc content and mapped to siteData.js
- UI/UX Design system (Dark/Neon theme)
- Multi-page React routing (Home, Kontakt, Preise, Partybusse, Events, Cities)
- Replaced CDN images with Unsplash images
- Created PRD

### Feb 8, 2026 - Homepage SEO Redesign & City Expansion
- **Homepage completely redesigned** with SEO-optimized content for Oberösterreich
  - New H1: "Partybus mieten in Oberösterreich | Dein Fest auf Rädern in Linz, Wels & Steyr"
  - Block 1: About Us with 4 advantages (Soundsystem, Lichtshow, Gaming-Zone, Flexibilität)
  - Block 2: Geographic Focus with 4 locations (Linz, Wels, Steyr, Braunau am Inn)
  - Block 3: Social Proof with testimonial and 3 "Why Us" cards
  - Provocative CTA: "Nicht nach Wien fahren — feiere bei dir!"
- **3 user-uploaded photos integrated**: branded PARTYBUS-OÖ bus (hero), school bus (about section), double-decker (geographic section)
- **2 new city pages created**: Wels (/partybus-wels), Steyr (/partybus-steyr)
- **Cities expanded** from 4 to 6: Linz, Wels, Steyr, Wien, Salzburg, Graz
- All tests passed (100% frontend)

### Frontend (React)
- **Home Page**: Hero, About/Uniqueness, Geographic Focus (SEO), Social Proof, Events, Buses, Regions, FAQ, CTA
- **Partybusse Page**: Grid of 10 party buses
- **Bus Detail Pages**: Individual bus pages
- **Event Pages**: JGA, Geburtstag, Firmenfeier, Maturaball, Hochzeit
- **City Pages**: Wien, Linz, Wels, Steyr, Salzburg, Graz
- **Preise Page**: 3 pricing packages
- **Ablauf Page**: 4-step booking process
- **Über uns Page**: Company story
- **Kontakt Page**: Contact form

### Backend (FastAPI)
- `/api/health` - Health check
- `/api/contact` - POST contact form submissions (MongoDB)
- `/api/contact-requests` - GET all contact requests

### Design System
- **Fonts**: Anton (headlines), Unbounded (subheadings), Manrope (body)
- **Colors**: #050505 (bg), #D900FF (primary neon pink), #00F0FF (secondary cyan)
- **Effects**: Glassmorphism, neon glow, gradient borders

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] Multi-page website structure
- [x] Dark theme with neon colors
- [x] All 10 bus listings with images
- [x] Contact form with backend storage
- [x] Mobile responsive design
- [x] SEO-optimized homepage for Oberösterreich
- [x] User-provided photos integrated
- [x] Wels & Steyr city pages

### P1 (High Priority) - PENDING
- [ ] EmailJS integration (requires user API keys: Service ID, Template ID, Public Key)
- [ ] Image gallery/lightbox for buses
- [ ] Testimonials section with real reviews

### P2 (Medium Priority)
- [ ] Blog/Magazine section
- [ ] Online booking calendar integration
- [ ] WhatsApp click-to-chat button
- [ ] Cookie consent banner

### P3 (Future Enhancements)
- [ ] Live availability checker
- [ ] Price calculator
- [ ] Virtual bus tour (360° images)
- [ ] Multi-language support (EN)

## Next Tasks
1. User needs to configure EmailJS (Service ID, Template ID, Public Key)
2. Add real bus images from the client
3. Collect and add customer testimonials
4. SEO optimization with proper meta tags for all pages
