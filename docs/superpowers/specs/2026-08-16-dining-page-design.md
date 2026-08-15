# Asatha Luxury Resort - Dining Page Clone Design Spec

**Date:** 2026-08-16  
**Topic:** Dining Page 1:1 Pixel-Perfect Clone for Asatha Luxury Resort  
**Target URL:** `https://asatha-luxury-webflow-template.webflow.io/dining`

---

## 1. Objective
Build an exact, 1:1 pixel-perfect clone of the **Dining** page at `/dining` within the Next.js App Router application (`src/app/dining/page.tsx`). Remove "Villa and Suites" from the navigation menu as requested by the user, add "Dining" as a primary page link in the header drawer and footer quick links, and reproduce every visual section, exact typography (Cardo serif and Urbanist sans-serif), responsive 4-column staggered photo gallery, 2-column storytelling layouts, Chef Aruna review quote card, interactive tabbed menu filter (Starters, Mains, Desserts) with dynamic feature images, guest testimonial slider, and booking modal integration.

---

## 2. Navigation & Menu Updates
- **Remove "Villas & Suites"**:
  - `Header.tsx`: Remove `Villas & Suites` entry from the slide-out navigation drawer menu list.
  - `Footer.tsx`: Remove `Villas & Suites` from the Quick Links column.
- **Update "Dining" Routing**:
  - `Header.tsx`: Update the "Dining" link to point directly to `/dining` instead of `/#dining`.
  - `Footer.tsx`: Update the "Dining" link in Quick Links to point to `/dining`.
- **Global Modals Integration**:
  - Shared `AvailabilityModal.tsx` connected to all "Check Availability" buttons across Header, Section CTAs, and Booking Banner.

---

## 3. Section-by-Section Breakdown

### 1. Navigation Header & Availability Modal
- Transparent fixed header over hero, transitioning to white floating navigation bar on scroll (`window.scrollY > 40`).
- Logo switcher: Light logo on transparent hero, dark logo on white scrolled header.
- "Check Availability" dual-layer sliding roll button.
- Slide-out mobile / desktop full navigation drawer with menu items:
  - `About us` (`/about-us`)
  - `Dining` (`/dining`)
  - `Wellness` (`/#wellness`)
  - `Packages` (`/#packages`)
  - `News & Blogs` (`/#blog`)
  - `Contact Us` (`/#contact`)
- Airbase partner booking button and close toggle.
- Interactive booking pop-up modal with form fields (Services, Villas & Suites, Room count, Dates, Adults, Children).

### 2. Dining Hero Section (`DiningHeroSection.tsx`)
- **Background**: High-res dining photography (`69034fdf99469a7160660050_dining-hero-backround.webp`) with dark gradient overlay (`rgba(0,0,0,0.6)`).
- **H1 Headline**: `Dining` (Cardo serif font, white text, 64px–96px responsive scaling).
- **Sub-headline paragraph**: *"Dining is more than a meal — it is a journey. Heritage and global flavors, our chefs craft every dish with passion, precision, and artistry."*

### 3. A Culinary Journey Awaits (`CulinaryJourneySection.tsx`)
- **Background**: Warm `wood-50` (`#f8f6ef`) background.
- **Heading Block**:
  - H2: `A culinary` *`Journey awaits`* (Cardo serif with wood-700 bronze accent on italicized *Journey awaits*).
- **4-Column Staggered Photo Grid**:
  1. Image 1: `69034fdc84e7810e19da0e99_culinary-image1.webp` (People dining outdoors table)
  2. Image 2: `69034fdc956a03185f9038f0_culinary-image2.webp` (Table setting overlooking ocean/flowers, offset translateY -20px on desktop)
  3. Image 3: `69034fdb9ee3c88df5b34b18_culinary-image3.webp` (Friends dining by the sea)
  4. Image 4: `69034fdb559b3eb422fb872a_culinary-image4.webp` (Breakfast tray in room, offset translateY -20px on desktop)
- Micro-interaction: Subtle image hover zoom (`scale-105`) with smooth transitions.

### 4. An Experience Beyond Taste (`DiningExperienceSection.tsx`)
- **Layout**: 2-column responsive grid on white background.
- **Left Column**:
  - High-res landscape photography `69034fdd0480c03c3a1b3ca2_dining-experience-image.webp` (Oceanfront dining terrace with orchid).
- **Right Column**:
  - H2: `An experience` *`beyond taste`* (wood-700 accent).
  - Paragraph: *"Surrounded by lush gardens and ocean horizons, each dining space offers a setting that inspires connection and calm. From sunrise breakfasts to moonlit dinners, every moment is designed to linger."*
  - CTA Button: `Browse menu` (href="#menu", dual-layer rolling hover animation).

### 5. Executive Chef Review Section (`ChefQuoteSection.tsx`)
- **Card**: Centered testimonial card on clean white background.
- **Rating Icon**: 5 gold stars icon (`guest-story-review-star.svg`).
- **Quote**: *“Each dish carries the essence of our land and culture, blending tradition with innovation to create something truly unforgettable.”* (Cardo font, italicized).
- **Author Badge**: `Chef Aruna – Executive Chef` (Urbanist font, wood-700 accent).

### 6. Culinary Experiences (`CulinaryExperiencesSection.tsx`)
- **Background**: Warm `wood-50` (`#f8f6ef`).
- **Layout**: 2-column responsive grid (reversed compared to Section 4).
- **Left Column**:
  - H2: `Culinary` *`Experiences`* (wood-700 accent).
  - Paragraph: *"From hands-on cooking journeys with our chefs to intimate cliffside dinners beneath the stars. Each moment is designed to connect you with Bali’s culture, nature, and spirit — a celebration of flavor, place, and memory."*
  - CTA Button: `Browse menu` (href="#menu", dual-layer rolling hover animation).
- **Right Column**:
  - High-res culinary photography `69034fdf84e7810e19da0faf_culinary-experience-image.webp` (Plates of gourmet food on wooden table).

### 7. Browse Our Menus with Interactive Tabs (`DiningMenuSection.tsx`)
- **Anchor**: `id="menu"`
- **Heading**:
  - H2: `Browse our` *`Menus`*
  - Paragraph: *"Discover a selection of our finest culinary offerings, carefully crafted to delight every palate."*
- **Tab Buttons**:
  - `Starters` (active default), `Mains`, `Desserts`.
  - Active tab styling with dark wood-800 underline / background active indicator.
- **Tab Content Breakdown**:
  - **Starters**:
    - Dishes:
      1. **Balinese Tomato Soup** — `$18.00` ("Slow-roasted tomatoes, ginger, and coconut cream")
      2. **Green Mango Salad** — `$20.00` ("Crisp mango, fresh herbs, roasted cashews")
      3. **Chicken Satay** — `$24.00` ("Charcoal-grilled skewers, spiced peanut sauce")
      4. **Crispy Spring Rolls** — `$16.00` ("Vegetable filling, chili-lime dip, Chopped mushroom")
    - Footnote: `*Menu items subject to seasonal changes.`
    - Feature Image: `69034fdda444a222ed11e975_dining-starter-menu.webp` (Balinese soup bowl)
  - **Mains**:
    - Dishes:
      1. **Seared Sea Bass** — `$54.00` ("Coconut curry, kaffir lime, young vegetables")
      2. **Braised Rib Rendang** — `$62.00` ("Balinese spices, served with turmeric rice")
      3. **Vegetarian Nasi Campur** — `$38.00` ("Traditional Balinese plate with assorted plant-based")
      4. **Grilled Lobster with Tamarind Glaze** — `$68.00` ("Fragrant jasmine rice and seasonal greens")
    - Footnote: `*Menu items subject to seasonal changes.`
    - Feature Image: `69034fdee0762cbda79848af_dining-main-menu.webp` (Seafood / main platter)
  - **Desserts**:
    - Dishes:
      1. **Coconut Crème Brûlée** — `$18.00` ("Caramelized top, tropical twist on a classic")
      2. **Mango Sticky Rice** — `$16.00` ("Mango, sweet coconut, pandan-infused rice")
      3. **Chocolate Lava Cake** — `$20.00/per serve` ("Spiced chocolate, vanilla bean ice cream")
    - Footnote: `*Menu items subject to seasonal changes.`
    - Feature Image: `69034fdea92da38549744024_dining-dessert-menu.webp` (Dessert spread)

### 8. Guest Stories & Lifestyle Gallery (`GuestStoriesSection.tsx`)
- Variant with `wood-50` background (`#f8f6ef`).
- Testimonial carousel with 5 guest reviews (Daniel Roberts, Amara Patel, Luca Moretti, Sofia Klein, Kenji Tanaka) with previous/next navigation controls.
- 8-photo luxury mosaic grid (4 columns of 2 photos).

### 9. Book Your Stay CTA Banner (`BookingBanner.tsx`)
- Dining CTA background image `69034fe0e0b629b31a90954f_dining-cta-background.webp`.
- 5 Gold Stars rating pill (`4.9 | 15k+ Reviews`).
- H1: `Book Your Stay`.
- Description paragraph.
- Dual CTAs: "Check Availability" (white button) and "Explore Packages" (underline link).

### 10. Luxury Resort Footer (`Footer.tsx`)
- "Get inspired" newsletter signup with input field and "Reserve Stay" button.
- 4 navigation columns: Brand info & rating, Quick Links (updated without Villas & Suites, with `/dining`), More links, Utility links, Contact info & Bali address.
- Social media icons (Instagram, YouTube, X, Facebook).
- Instagram feed (5 luxury photos + "Follow @ASATHA" floating badge).
- Copyright footer.

---

## 4. Component Structure
```text
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                           # Homepage
│   ├── about-us/
│   │   └── page.tsx                       # About Us page
│   └── dining/
│       └── page.tsx                       # New Dining page
├── components/
│   ├── Header.tsx                         # Updated navigation (removed Villas & Suites, Dining -> /dining)
│   ├── Footer.tsx                         # Updated Quick Links
│   ├── AvailabilityModal.tsx              # Global booking modal
│   ├── BookingBanner.tsx                  # Accepts optional custom background image prop
│   ├── GuestStoriesSection.tsx            # Accepts optional background variant prop (wood-50 / white)
│   ├── Icons.tsx                          # SVG icon library
│   └── dining/
│       ├── DiningHeroSection.tsx          # Hero section with dining photography
│       ├── CulinaryJourneySection.tsx     # 4-image staggered photo gallery
│       ├── DiningExperienceSection.tsx    # 2-column dining story & CTA
│       ├── ChefQuoteSection.tsx           # Chef Aruna quotation card
│       ├── CulinaryExperiencesSection.tsx # 2-column culinary story & food image
│       └── DiningMenuSection.tsx          # Tabbed Starters/Mains/Desserts interactive menu
```

---

## 5. Verification & Acceptance Criteria
- [ ] Route `/dining` builds cleanly with zero Next.js compilation or TypeScript errors.
- [ ] Header drawer menu excludes "Villas & Suites" and includes "Dining" linking to `/dining`.
- [ ] Footer Quick Links excludes "Villas & Suites" and links "Dining" to `/dining`.
- [ ] "A culinary Journey awaits" displays 4 staggered images with correct responsive column layout.
- [ ] "An experience beyond taste" and "Culinary Experiences" sections render with 1:1 typography and image alignments.
- [ ] Chef Aruna review quote card displays 5 gold stars and quote text.
- [ ] Tabbed menu (`Starters`, `Mains`, `Desserts`) transitions between dish lists and updates feature images seamlessly.
- [ ] Check Availability buttons trigger the global `AvailabilityModal`.
- [ ] Mobile responsive layout (320px, 768px, 1024px, 1440px) renders pixel-perfect without horizontal scroll.
