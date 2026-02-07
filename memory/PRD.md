# PARTYBOSS - Party Bus Rental Website PRD

## Original Problem Statement
Build a PARTYBOSS party bus rental website for Austria based on reference site partyboss.at. Requirements:
- Stylish fonts
- Modern, up-to-date design
- Each section on SEPARATE PAGE (not scrolling)
- Dark background (NOT light)
- Festive, party-like, evening/night vibe
- EmailJS for contact form notifications

## User Personas
1. **Young Adults (18-35)** - Planning JGA, bachelor/bachelorette parties, birthday celebrations
2. **Corporate Event Planners** - Organizing company parties, Christmas events, team building
3. **Students** - Maturaball afterparties, student parties
4. **Wedding Parties** - After-wedding celebrations, guest transport

## Core Requirements (Static)
- Multi-page React website (not single-page scrolling)
- Dark theme with neon purple/pink colors (nightclub vibe)
- German language content
- Contact form with backend storage
- Mobile responsive design
- SEO-optimized pages for Austrian cities

## What's Been Implemented (Feb 7, 2026)

### Frontend (React)
- **Home Page**: Hero section, event types, featured buses, features, regions, FAQ, CTA
- **Partybusse Page**: Grid of 10 party buses with images and details
- **Bus Detail Pages**: Individual pages for each bus with features and capacity
- **Event Pages**: JGA, Geburtstag, Firmenfeier, Maturaball, Hochzeit
- **City Pages**: Wien, Linz, Salzburg, Graz with local SEO
- **Preise Page**: 3 pricing packages (Starter, Deluxe, Tagestour)
- **Ablauf Page**: 4-step booking process visualization
- **Über uns Page**: Company story, values, equipment list
- **Kontakt Page**: Full contact form with all fields

### Backend (FastAPI)
- `/api/health` - Health check endpoint
- `/api/contact` - POST contact form submissions (saves to MongoDB)
- `/api/contact-requests` - GET all contact requests

### Design System
- **Fonts**: Anton (headlines), Unbounded (subheadings), Manrope (body)
- **Colors**: #050505 (bg), #D900FF (primary neon pink), #00F0FF (secondary cyan)
- **Effects**: Glassmorphism, neon glow, gradient borders

### Contact Information
- Phone: 0660 2081 542
- Email: manager@partybus-oesterreich.at
- Address: Kimmersdorfer Straße 16, 4502 Sankt Marien, Austria
- Social: Instagram & Facebook linked

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] Multi-page website structure
- [x] Dark theme with neon colors
- [x] All 10 bus listings with images
- [x] Contact form with backend storage
- [x] Mobile responsive design

### P1 (High Priority) - PENDING
- [ ] EmailJS integration (requires user API keys)
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
4. SEO optimization with proper meta tags
