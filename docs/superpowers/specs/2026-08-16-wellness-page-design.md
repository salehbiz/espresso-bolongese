# Asatha Luxury Resort - Wellness Page Clone Design Spec

**Date:** 2026-08-16  
**Topic:** Wellness Page 1:1 Pixel-Perfect Clone for Asatha Luxury Resort  
**Target URL:** `https://asatha-luxury-webflow-template.webflow.io/wellness`

---

## 1. Objective
Build an exact, 1:1 pixel-perfect clone of the **Wellness** page at `/wellness` within the Next.js App Router application (`src/app/wellness/page.tsx`). Link "Wellness" in the Header drawer and Footer quick links directly to `/wellness`, and reproduce every section, exact typography (Cardo serif and Urbanist sans-serif), 8-photo philosophy strip, 3-card experience grid, 2-column wellness retreats section with "Browse menu" button, interactive tabbed menu filter (Traditional Therapies, Aroma Rituals, Wellness Packages) with dynamic feature images, guest testimonial slider with wood-50 background, and booking modal integration.

---

## 2. Navigation & Routing Architecture
- **Route**: `src/app/wellness/page.tsx`
- **Navigation Update**:
  - `Header.tsx`: Update the "Wellness" link to point directly to `/wellness`.
  - `Footer.tsx`: Update the "Wellness" link in Quick Links to point to `/wellness`.
  - Shared `AvailabilityModal.tsx` connected across Header, Hero, Section CTAs, and Booking Banner.

---

## 3. Section-by-Section Breakdown

### 1. Navigation Header & Availability Modal
- Transparent fixed header over hero, transitioning to white floating navigation bar on scroll (`window.scrollY > 40`).
- Logo switcher: Light logo on transparent hero, dark logo on white scrolled header.
- "Check Availability" dual-layer sliding roll button.
- Slide-out mobile / desktop full navigation drawer with menu items:
  - `About us` (`/about-us`)
  - `Dining` (`/dining`)
  - `Wellness` (`/wellness`)
  - `Packages` (`/#packages`)
  - `News & Blogs` (`/#blog`)
  - `Contact Us` (`/#contact`)
- Interactive booking pop-up modal.

### 2. Wellness Hero Section (`WellnessHeroSection.tsx`)
- **Background**: High-res spa massage photography (`690448fa589de5d04ae340c8_wellness-hero-image.webp`) with dark gradient overlay (`rgba(0,0,0,0.6)`).
- **H1 Headline**: `Wellness` (Cardo serif font, white text, 64px–96px responsive scaling).
- **Sub-headline paragraph**: *"Wellness is not an indulgence — it is a way of life. our holistic offerings are designed to restore balance, inspire clarity, and leave you renewed."*

### 3. Our Wellness Philosophy (`WellnessPhilosophySection.tsx`)
- **Background**: Warm `wood-50` (`#f8f6ef`) background.
- **Heading Block**:
  - H2: `Our Wellness` *`Philosophy`* (Cardo serif with wood-700 bronze accent on italicized *Philosophy*).
  - Paragraph: *"We believe true wellbeing comes from harmony — of body, mind, and nature. Every treatment, ritual, and practice is crafted to reconnect you with yourself and the beauty around you."*
- **8-Photo Curated Horizontal Lifestyle Gallery**:
  1. `690448f2c9ec3991ead719f9_wellness-philosophy1.webp` (Spa candles & oils)
  2. `690448f1f9c27c1f9ff98121_wellness-philosophy2.webp` (Outdoor wellness meditation)
  3. `690448f07b937f505f8231ba_wellness-philosophy3.webp` (Outdoor yoga in nature)
  4. `690448f2dedb2207c5be11de_wellness-philosophy4.webp` (Relaxing spa treatment with candles)
  5. `690448f40e9ee5234941ff91_wellness-philosophy5.webp` (Outdoor yoga pose by lake/ocean)
  6. `690448f3a7fc1ee3da7292c6_wellness-philosophy6.webp` (Sound healing bowl ritual)
  7. `690448f4dabb058030babecc_wellness-philosophy7.webp` (Herbal bath relaxation)
  8. `690448f5ba58c3bb564e259e_wellness-philosophy8.webp` (Sunrise yoga stretch)

### 4. Wellness Experiences (`WellnessExperiencesSection.tsx`)
- **Layout**: Clean white background with 3-card responsive grid.
- **Heading**:
  - H2: `Wellness` *`Experiences`* (wood-700 accent on italicized *Experiences*).
- **3 Experience Cards**:
  1. **The Asatha Spa**:
     - Image: `690448f61e38e9f9f082ab7d_wellness-experience-image1.webp`
     - H4: `The` *`Asatha Spa`*
     - Paragraph: *"A tranquil haven offering bespoke therapies inspired by Balinese traditions and modern techniques"*
  2. **Yoga & Meditation**:
     - Image: `690448f61cccd96728251133_wellness-experience-image2.webp`
     - H4: `Yoga &` *`Meditation`*
     - Paragraph: *"Perched above the ocean, our open-air pavilion invites you to flow with the rhythm of nature."*
  3. **Holistic Healing**:
     - Image: `690448f7fc5606fa6c56b4f6_wellness-experience-image3.webp`
     - H4: `Holistic` *`Healing`*
     - Paragraph: *"Discover sound therapy, breathwork, and energy-balancing sessions guided by experienced practitioners."*

### 5. Wellness Retreats (`WellnessRetreatsSection.tsx`)
- **Background**: Warm `wood-50` (`#f8f6ef`).
- **Layout**: 2-column responsive grid.
- **Left Column**:
  - H2: `Wellness` *`retreats`* (wood-700 accent on italicized *retreats*).
  - Paragraph: *"From sunrise yoga overlooking the cliffs to healing spa rituals guided by ancient traditions. Every moment is crafted to restore balance, awaken the senses, and reconnect you with the rhythm of Bali."*
  - CTA Button: `Browse menu` (href="#menu", dual-layer rolling hover animation).
- **Right Column**:
  - High-res photography `690448f94f681a1ab84a9d84_wellness-retreats-image.webp` (Outdoor yoga meditation in lush nature).

### 6. Browse Our Menus with Interactive Tabs (`WellnessMenuSection.tsx`)
- **Anchor**: `id="menu"`
- **Heading**:
  - H2: `Browse our` *`Menus`*
  - Paragraph: *"Each ritual is thoughtfully designed to restore balance, blending traditional techniques with contemporary luxury."*
- **Tab Buttons**:
  - `Traditional Therapies` (active default), `Aroma Rituals`, `Wellness Packages`.
  - Active tab styling with dark wood `#71553B` background / border.
- **Tab Content Breakdown**:
  - **Traditional Therapies**:
    - Treatments:
      1. **Foot Reflexology** *(45 min)* — `$50.00` ("Gentle pressure points to relieve tension and restore energy")
      2. **Balinese Herbal** *(45 min)* — `$80.00` ("Heated herbal poultices soothe muscles and ease circulation")
      3. **Full Body Stretch** *(2 hrs)* — `$120.00` ("Assisted stretches to enhance flexibility and deep relaxation")
    - Footnote: `*All treatments are subject to availability and advance booking is recommended.`
    - Feature Image: `690448f870262b8c8c6faf57_wellness-therapies-menu.webp` (Foot massage / reflexology)
  - **Aroma Rituals**:
    - Treatments:
      1. **Aromatherapy** *(60 min)* — `$90.00` ("Healing oils and flowing strokes for complete calm")
      2. **Flower Essence Bath** *(30 min)* — `$80.00` ("A fragrant soak infused with local botanicals")
    - Footnote: `*All treatments are subject to availability and advance booking is recommended.`
    - Feature Image: `690448852b47cd5596d8dbec_wellness-rituals-menu.webp` (Aromatherapy oils and candles)
  - **Wellness Packages**:
    - Treatments:
      1. **Rejuvenation Journey** *(3 hrs)* — `$220.00` ("Body scrub, aromatherapy massage, and nourishing facial")
      2. **Couples Harmony** *(2.5 hrs)* — `$280.00` ("Side-by-side massage, flower bath, and sparkling wine")
    - Footnote: `*All treatments are subject to availability and advance booking is recommended.`
    - Feature Image: `690448f8c62a04332f1b566f_wellness-packages-menu.webp` (Couple massage / relaxation)

### 7. Guest Stories & Lifestyle Gallery (`GuestStoriesSection.tsx`)
- Variant with `wood-50` background (`#f8f6ef`).
- Testimonial carousel with 5 guest reviews with previous/next controls.
- 8-photo luxury mosaic grid (4 columns of 2 photos).

### 8. Book Your Stay CTA Banner (`BookingBanner.tsx`)
- Wellness CTA background image `690448f097121f6f0d6f6002_wellness-cta-background.webp` (Head / face relaxation massage).
- 5 Gold Stars rating pill (`4.9 | 15k+ Reviews`).
- H1: `Book Your Stay`.
- Description paragraph.
- Dual CTAs: "Check Availability" (white button) and "Explore Packages" (underline link).

### 9. Luxury Resort Footer (`Footer.tsx`)
- "Get inspired" newsletter signup.
- 4 navigation columns with updated `/wellness` link.
- Social media icons & Instagram feed.
- Copyright footer.

---

## 4. Component Structure
```text
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                             # Homepage
│   ├── about-us/
│   │   └── page.tsx                         # About Us page
│   ├── dining/
│   │   └── page.tsx                         # Dining page
│   └── wellness/
│       └── page.tsx                         # New Wellness page
├── components/
│   ├── Header.tsx                           # Updated: Wellness -> /wellness
│   ├── Footer.tsx                           # Updated: Wellness -> /wellness
│   ├── AvailabilityModal.tsx                # Global booking modal
│   ├── BookingBanner.tsx                    # Shared CTA banner with custom background
│   ├── GuestStoriesSection.tsx              # Shared Guest stories section with wood-50 variant
│   └── wellness/
│       ├── WellnessHeroSection.tsx          # Hero section with spa photography
│       ├── WellnessPhilosophySection.tsx    # "Our Wellness Philosophy" with 8-photo strip
│       ├── WellnessExperiencesSection.tsx   # 3-card experience grid (Spa, Yoga, Healing)
│       ├── WellnessRetreatsSection.tsx      # 2-column wellness retreats story & CTA
│       └── WellnessMenuSection.tsx          # Tabbed Traditional Therapies/Aroma/Packages menu
```

---

## 5. Verification & Acceptance Criteria
- [ ] Route `/wellness` builds cleanly with zero Next.js compilation or TypeScript errors.
- [ ] Header drawer menu links "Wellness" directly to `/wellness`.
- [ ] Footer Quick Links links "Wellness" directly to `/wellness`.
- [ ] "Our Wellness Philosophy" displays 8 high-res wellness photos in a sleek responsive layout.
- [ ] "Wellness Experiences" renders 3 structured cards (The Asatha Spa, Yoga & Meditation, Holistic Healing).
- [ ] "Wellness retreats" renders 2-column layout with "Browse menu" button scrolling to `#menu`.
- [ ] Tabbed menu (`Traditional Therapies`, `Aroma Rituals`, `Wellness Packages`) switches between treatment lists and updates feature images seamlessly.
- [ ] Check Availability buttons trigger the global `AvailabilityModal`.
- [ ] Mobile responsive layout (320px, 768px, 1024px, 1440px) renders pixel-perfect without horizontal scroll.
