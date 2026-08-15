# Asatha Luxury Resort - About Us Page Clone Design Spec

**Date:** 2026-08-16  
**Topic:** About Us Page 1:1 Pixel-Perfect Clone for Asatha Luxury Resort  
**Target URL:** `https://asatha-luxury-webflow-template.webflow.io/about-us`

---

## 1. Objective
Build an exact, 1:1 pixel-perfect clone of the **About Us** page at `/about-us` within the Next.js App Router application (`src/app/about-us/page.tsx`). The page will reproduce every section, exact typography (Cardo serif and Urbanist sans-serif), responsive grid behaviors, subtle animations, interactive video lightbox player, review metrics, amenities circular gallery, guest testimonial slider, booking modal integration, and responsive navigation drawer.

---

## 2. Navigation & Routing Architecture
- **Route**: `src/app/about-us/page.tsx`
- **Navigation Update**:
  - `Header.tsx`: Update the menu drawer and navigation links so "About us" links to `/about-us` and highlights active status when on `/about-us`.
  - `Footer.tsx`: Update Quick Links "About Us" to point to `/about-us`.
  - Shared `AvailabilityModal.tsx` seamlessly triggered across Header, Hero, Section CTA buttons, and Booking Banner.

---

## 3. Section-by-Section Breakdown

### 1. Navigation Header & Availability Modal
- Transparent fixed header over hero, transitioning to white floating navigation bar on scroll (`window.scrollY > 40`).
- Logo switcher: Light logo on transparent hero, dark logo on white scrolled header.
- "Check Availability" dual-layer sliding roll button.
- Slide-out mobile / desktop full navigation drawer with menu items (`About us`, `Villas & Suites`, `Dining`, `Wellness`, `Packages`, `News & Blogs`, `Contact Us`), Airbase partner booking button, and close toggle.
- Interactive booking pop-up modal with form fields (Services, Villas & Suites, Room count, Dates, Adults, Children).

### 2. About Hero Section (`AboutHeroSection.tsx`)
- **Background**: High-res luxury pool and lounge photography (`6905b16f4666d726ed543320_3504d98fd235f65862824642600d0957_asatha-open-graph.webp` / hero pool asset) with subtle dark gradient overlay.
- **Rating badge**: Centered 5 gold star icons + text: `4.9 | 15k+ Reviews`.
- **H1 Headline**: `Asatha is where` *`you feel restored.`* (Serif Cardo font, italicized emphasis, white text, 96px desktop / responsive scaling).
- **Sub-headline paragraph**: *"A haven where thoughtful design and unspoiled surroundings create an experience of quiet luxury."*

### 3. Escape to Bliss & Video Feature (`EscapeToBlissSection.tsx`)
- **Heading Block**:
  - H2: `Escape to` *`Bliss.`* (with wood-700 bronze accent on Bliss).
  - Description paragraph: *"Discover a perfect balance of refined luxury and natural wonder at Asatha. Every moment here is designed to linger — from sunrise yoga to sunsets that silence the world around you."*
  - CTA Button: `Reserve Stay` (dual-text rolling hover animation).
- **Background Video Player & Lightbox**:
  - Autoplay looping HTML5 video (`about-video-transcode.mp4` / `about-video-poster-00001.jpg`).
  - Centered large luxury SVG play button icon.
  - Clicking video opens an interactive Video Lightbox Modal playing the full video with sound.
- **4-Column Metric Stats Grid**:
  1. **4.9/5** — *Guest Rating*
  2. **15k+** — *Reviews Worldwide*
  3. **2,348** — *Villas and Resorts Worldwide*
  4. **20+** — *Activities*

### 4. Our Story Section (`OurStorySection.tsx`)
- **Left Column**:
  - H2: `Our` *`Story`* (wood-700 accent).
  - Narrative paragraph explaining the resort's vision and philosophy.
  - Founder Pull-Quote: *“We wanted Asatha to feel less like a destination and more like a return to what matters most.”*
  - Founder Info Card: Circular avatar photo of James Thompson + label: `James Thompson · Founder · From London, UK · @ASATHA`.
- **Right Column**:
  - Landscape photography of the Asatha resort architectural complex on green grounds (`our-story-background.webp`).

### 5. Amenities Showcase (`AmenitiesSection.tsx`)
- **Header**:
  - H2: `Amenities`
  - Paragraph: *"Luxury is found in details, both grand and subtle. Our curated facilities are designed to inspire balance and ease."*
  - CTA Button: `Reserve Stay`.
- **5 Circular Amenity Cards**:
  1. **Infinity Pool** (`amenity-image1.webp` + custom pool swimmer SVG icon).
  2. **Wellness & Spa Space** (`amenity-image2.webp` + lotus flower SVG icon).
  3. **Oceanfront Yoga** (`amenity-image3.webp` + yoga pose SVG icon).
  4. **Fitness Studio** (`amenity-image4.webp` + dumbbell/fitness SVG icon).
  5. **Children's play area** (`amenity-image5.webp` + playground castle SVG icon).
- Interactive hover effects: Smooth image zoom inside circular masks with semi-transparent overlay and centered icon highlight.

### 6. Award-Winning Escape Section (`AwardSection.tsx`)
- Warm wood-50 (`#f8f6ef`) background.
- Left: H2 `An Award-winning escape` + descriptive text.
- Right: 3 luxury gold laurel wreath award emblems (`award-image1.svg`, `award-image2.svg`, `award-image3.svg`).

### 7. Guest Stories & Lifestyle Gallery (`GuestStoriesSection.tsx`)
- **Top Badge**: `200+ happy guests so far`
- **H2 Headline**: `Guest` *`stories`*
- **Interactive Testimonial Carousel**:
  - 5 guest reviews (Daniel Roberts, Amara Patel, Luca Moretti, Sofia Klein, Kenji Tanaka) with Asatha logo, 5 gold stars, full testimonial quote, guest name, country, and villa stayed.
  - Previous / Next navigation arrows and slide dot indicators.
- **8-Photo Mosaic Grid**:
  - 8 curated lifestyle and resort experience images with subtle hover zoom effect.

### 8. Book Your Stay CTA Banner (`BookingBanner.tsx`)
- Full-width pool relaxation photography background with dark overlay.
- 5 Gold Stars rating pill (`4.9 | 15k+ Reviews`).
- H1: `Book Your Stay`.
- Description paragraph.
- Dual CTAs: "Check Availability" (white button) and "Explore Packages" (underline link).

### 9. Luxury Resort Footer (`Footer.tsx`)
- "Get inspired" newsletter signup with input field and "Reserve Stay" button.
- 4 navigation columns: Brand info & rating, Quick Links, More links, Utility links, Contact info & Bali address.
- Social media icons (Telegram, Instagram, YouTube, X, Facebook).
- Instagram feed (5 luxury photos + "Follow @ASATHA" floating badge).
- Copyright footer: "© ASATHA - VILLA AND RESORT. Made by Flowcub design. Powered by Webflow."

---

## 4. Component Structure
```text
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                       # Homepage
│   └── about-us/
│       └── page.tsx                   # New About Us page
├── components/
│   ├── Header.tsx                     # Global Header with active link support
│   ├── Footer.tsx                     # Global Footer
│   ├── AvailabilityModal.tsx          # Global Availability Pop-up Modal
│   ├── VideoLightboxModal.tsx         # Video player lightbox modal
│   ├── Icons.tsx                      # SVG Icons library
│   ├── about/
│   │   ├── AboutHeroSection.tsx       # Hero section with pool background
│   │   ├── EscapeToBlissSection.tsx   # Video & stats counter section
│   │   ├── OurStorySection.tsx        # Founder story & architecture showcase
│   │   └── AmenitiesSection.tsx       # 5 circular amenity items
│   ├── AwardSection.tsx               # Reusable Award section
│   ├── GuestStoriesSection.tsx        # Reusable Guest stories & photo grid
│   └── BookingBanner.tsx              # Reusable CTA booking banner
```

---

## 5. Verification & Acceptance Criteria
- [ ] Route `/about-us` loads cleanly with zero console warnings or errors.
- [ ] Header and Drawer links correctly navigate between Home and About Us.
- [ ] All typography (Cardo headings with italics, Urbanist body) matches Webflow styling exactly.
- [ ] All 5 circular amenity cards display correct SVG icons and hover zoom animations.
- [ ] Background video in Escape to Bliss section plays continuously and opens interactive Lightbox when clicked.
- [ ] 4 counter stats are formatted accurately (4.9/5, 15k+, 2,348, 20+).
- [ ] Testimonial slider smoothly transitions between all 5 guest reviews.
- [ ] Check Availability modal opens from any trigger button on the page.
- [ ] Mobile responsive views (320px, 768px, 1024px, 1440px) render pixel-perfect without layout shift.
