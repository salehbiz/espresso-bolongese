# Asatha Luxury Resort - Homepage Clone Design Spec

**Date:** 2026-08-15  
**Topic:** Homepage Exact Clone of Asatha Luxury Resort Webflow Template  
**Target URL:** `https://asatha-luxury-webflow-template.webflow.io/`

---

## 1. Objective
Create an exact, 1:1 pixel-perfect clone of the homepage for the **Asatha Luxury Resort** website. The clone will reproduce all visual layouts, animations, typography (Cardo & Urbanist Google Fonts), responsive behaviors, interactive modals, sliders, and navigation states without altering any layout or content.

---

## 2. Architecture & File Structure

We will adopt a **Hybrid Local/CDN** architecture:
- **Core HTML**: Standard semantic HTML5 (`index.html`) formatted and syntax-validated.
- **Local CSS**: Downloaded and hosted locally in `css/style.css` for instant loading and future style customization.
- **Local JS**: Downloaded Webflow runtime chunks & jQuery in `js/` for reliable interaction without remote script blockages.
- **Media & Fonts**: High-resolution photography, background video (`hero-video-transcode.mp4`), and Google Webfonts referenced via their high-speed CDN endpoints.

```text
/Espresso Bolongese
├── css/
│   └── style.css                                # Webflow core stylesheet (downloaded locally)
├── js/
│   ├── jquery-3.5.1.min.js                     # Core jQuery library
│   ├── webflow.schunk.36b8fb49256177c8.js      # Webflow animation/interaction chunk 1
│   ├── webflow.schunk.aa2d91ede837c115.js      # Webflow animation/interaction chunk 2
│   ├── webflow.schunk.9dfb96661114d3db.js      # Webflow animation/interaction chunk 3
│   └── webflow.d96590f4.cfb109a3d84b364b.js    # Webflow main script
├── index.html                                   # Homepage markup with local CSS/JS references
└── docs/
    └── superpowers/specs/                       # Design specifications
```

---

## 3. Homepage Components & Section Breakdown

1. **Availability Modal (`.contact-modal`)**:
   - Slide-in / pop-up booking form.
   - Fields: Services, Villas & Suites, Room count, Check-in date, Check-out date, Adults, Children.
   - Third-party partner booking button (Airbase/Airbnb integration).

2. **Navigation Header (`.header.w-nav`)**:
   - Dual logo states (light logo on transparent hero, dark logo on scrolled nav).
   - Navigation links: About Us, Villas & Suites, Dining, Wellness, Packages, News & Blogs, Contact Us.
   - "Check Availability" modal trigger button and mobile hamburger toggle menu.

3. **Hero Section (`.hero-section`)**:
   - Autoplay looping background video (`hero-video-transcode.mp4`) with poster fallback.
   - Customer trust pill with avatar stack ("Trusted by +159,648 Customers").
   - Luxury serif headline: *"Where time slows, Comfort deepens"*.
   - Subtitle text and intro paragraph.

4. **Timeless Luxury Intro (`.section.background-wood-50`)**:
   - Decorative three-wave SVG divider.
   - Headline and two-paragraph brand statement.
   - Staggered 5-image masonry/grid layout featuring luxury resort imagery with reveal animation wrappers.

5. **Rooms & Suites Slider (`.villa-wrapper`)**:
   - Webflow interactive slider with carousel navigation.
   - Villa cards for: *Amber Suite*, *Skyline Villa*, *Clifftop Mansion*, *Sunset Estate*, *Serenity Suite*.
   - Thumbnail images, attribute specs (e.g. "Spacious Layout · Designer Furnishings"), and details links.

6. **Asatha Rewards (`.reward-grid`)**:
   - 3-column card grid:
     1. *Travel, Earn, Indulge*
     2. *Rewards beyond your stay*
     3. *A Universe of Privileges*
   - Image cards with overlay effects and descriptions.

7. **Dine at Asatha (`.dine-section`)**:
   - Centered dining invitation badge with SVG cloche icon.
   - Multi-image culinary collage layout.
   - CTA buttons to explore the restaurant menu.

8. **Wellness & Retreats / Experience Highlights**:
   - Grid showcasing spa therapies, nature walks, and sunset yoga.

9. **Guest Reviews & Testimonials**:
   - Featured quote, star ratings, and guest attribution.

10. **Instagram & Lifestyle Gallery**:
    - 8-grid photo layout displaying daily life at the resort.

11. **Popular Packages**:
    - 2-card package spotlight (*Cultural Package*, *Wellness Retreat*) with pricing and booking buttons.

12. **Accreditations & Footer Booking Banner**:
    - Award badges and full-width pool photo banner with *"Book Your Stay"* CTA.
    - Comprehensive luxury footer: newsletter signup, navigation columns, location details, social links, and copyright notice.

---

## 4. Sub-Agent Work Distribution Plan

To complete the cloning quickly and reliably, we will dispatch parallel subagents:

- **Subagent A (Asset Downloader & Localizer)**:
  - Fetches the compiled CSS stylesheet from Webflow CDN and writes to `css/style.css`.
  - Fetches all required JS chunks and jQuery library into `js/`.
  - Verifies all downloaded assets for completeness.

- **Subagent B (HTML Integration & Path Refactoring)**:
  - Updates `index.html` to reference local `css/style.css` and local `js/` scripts.
  - Ensures clean syntax, metadata, Open Graph tags, and accessibility attributes.

- **Subagent C (Local Dev Server & Verification)**:
  - Spins up a local HTTP server.
  - Validates page responsiveness, asset loading (HTTP 200 checks), and console log sanity.

---

## 5. Verification & Acceptance Criteria
- [ ] Homepage renders identically to `https://asatha-luxury-webflow-template.webflow.io/`.
- [ ] CSS stylesheet is served locally from `css/style.css`.
- [ ] Scripts are served locally from `js/`.
- [ ] Background video, images, and fonts render properly with no broken links.
- [ ] Availability modal opens and closes correctly.
- [ ] Sliders and mobile navigation function as expected.
