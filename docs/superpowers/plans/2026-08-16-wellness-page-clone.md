# Wellness Page 1:1 Pixel-Perfect Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an exact, 1:1 pixel-perfect clone of the Asatha Luxury Resort Wellness page at `/wellness`, and update navigation links in the Header and Footer to route directly to `/wellness`.

**Architecture:** Next.js App Router (`src/app/wellness/page.tsx`) with modular, isolated React components in `src/components/wellness/`, reusing the global design system (Cardo serif, Urbanist sans, wood color palette), interactive tab state, and global booking modal integration.

**Tech Stack:** Next.js 16+ (App Router), React 19, TypeScript, Tailwind CSS / CSS design tokens.

## Global Constraints
- Target URL: `https://asatha-luxury-webflow-template.webflow.io/wellness`
- Update "Wellness" link in `Header.tsx` drawer menu and `Footer.tsx` Quick Links to point to `/wellness`.
- Preserve exact typography: `Cardo` for luxury serif headlines and pull-quotes; `Urbanist` for clean sans-serif UI text.
- Preserve responsive breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (1024px+ / 1440px container).
- Zero build warnings or runtime console errors.

---

### Task 1: Update Header & Footer Navigation Links for Wellness

**Files:**
- Modify: `src/components/Header.tsx:135-155`
- Modify: `src/components/Footer.tsx:145-165`

**Interfaces:**
- Header navigation items array: update Wellness item to `{ name: "Wellness", href: "/wellness" }`.
- Footer Quick Links array: update Wellness item to `{ name: "Wellness", href: "/wellness" }`.

- [ ] **Step 1: Update Header.tsx navigation links**

Update `Header.tsx` menu list in the slide-out drawer:
```tsx
const navItems = [
  { name: "About us", href: "/about-us" },
  { name: "Dining", href: "/dining" },
  { name: "Wellness", href: "/wellness" },
  { name: "Packages", href: "/#packages" },
  { name: "News & Blogs", href: "/#blog" },
  { name: "Contact Us", href: "/#contact" },
];
```

- [ ] **Step 2: Update Footer.tsx Quick Links**

Update `Footer.tsx` Quick Links column:
```tsx
const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Dining", href: "/dining" },
  { name: "Packages", href: "/#packages" },
  { name: "Wellness", href: "/wellness" },
];
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit navigation updates**

```bash
git add src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat(nav): route wellness to /wellness in Header and Footer"
```

---

### Task 2: Create WellnessHeroSection and WellnessPhilosophySection

**Files:**
- Create: `src/components/wellness/WellnessHeroSection.tsx`
- Create: `src/components/wellness/WellnessPhilosophySection.tsx`

**Interfaces:**
- `WellnessHeroSection`: React component rendering hero title "Wellness", subtitle, and dark gradient background.
- `WellnessPhilosophySection`: React component rendering H2 "Our Wellness Philosophy" with an 8-photo curated lifestyle gallery.

- [ ] **Step 1: Create WellnessHeroSection.tsx**

```tsx
import React from "react";

export default function WellnessHeroSection() {
  return (
    <section
      id="home"
      className="relative pt-[220px] pb-28 sm:pb-36 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[520px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448fa589de5d04ae340c8_wellness-hero-image.webp")`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-10 text-center">
        <h1 className="font-cardo text-5xl sm:text-7xl md:text-8xl text-white font-normal mb-6 tracking-tight">
          Wellness
        </h1>
        <p className="font-urbanist text-white/90 text-base sm:text-lg md:text-xl max-w-[640px] mx-auto font-light leading-relaxed">
          Wellness is not an indulgence — it is a way of life. our holistic offerings are designed to restore balance, inspire clarity, and leave you renewed.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create WellnessPhilosophySection.tsx**

```tsx
import React from "react";

export default function WellnessPhilosophySection() {
  const images = [
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f2c9ec3991ead719f9_wellness-philosophy1.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f1f9c27c1f9ff98121_wellness-philosophy2.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f07b937f505f8231ba_wellness-philosophy3.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f2dedb2207c5be11de_wellness-philosophy4.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f40e9ee5234941ff91_wellness-philosophy5.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f3a7fc1ee3da7292c6_wellness-philosophy6.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f4dabb058030babecc_wellness-philosophy7.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f5ba58c3bb564e259e_wellness-philosophy8.webp",
  ];

  return (
    <section className="section py-24 sm:py-32 bg-[#f8f6ef] overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8 mb-16">
        <div className="text-center max-w-[620px] mx-auto">
          <h2 className="text-[#3D3D3D] mb-4">
            Our Wellness <em className="wood-700-text font-cardo italic">Philosophy</em>
          </h2>
          <p className="large-paragraph text-[#6D6D6D] leading-relaxed">
            We believe true wellbeing comes from harmony — of body, mind, and nature. Every treatment, ritual, and practice is crafted to reconnect you with yourself and the beauty around you.
          </p>
        </div>
      </div>

      {/* 8-Photo Horizontal Gallery */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-none">
        <div className="flex gap-4 sm:gap-6 min-w-max px-5 sm:px-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="img-zoom-container relative h-[260px] sm:h-[320px] w-[200px] sm:w-[260px] overflow-hidden shadow-xs bg-[#e4dcc4] shrink-0"
            >
              <img
                src={src}
                alt={`Wellness Philosophy ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit hero and philosophy sections**

```bash
git add src/components/wellness/WellnessHeroSection.tsx src/components/wellness/WellnessPhilosophySection.tsx
git commit -m "feat(wellness): add WellnessHeroSection and WellnessPhilosophySection"
```

---

### Task 3: Create WellnessExperiencesSection and WellnessRetreatsSection

**Files:**
- Create: `src/components/wellness/WellnessExperiencesSection.tsx`
- Create: `src/components/wellness/WellnessRetreatsSection.tsx`

**Interfaces:**
- `WellnessExperiencesSection`: 3-card experience grid on white background.
- `WellnessRetreatsSection`: 2-column layout (Text + CTA Left, Image Right, wood-50 bg).

- [ ] **Step 1: Create WellnessExperiencesSection.tsx**

```tsx
import React from "react";

export default function WellnessExperiencesSection() {
  const experiences = [
    {
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f61e38e9f9f082ab7d_wellness-experience-image1.webp",
      titlePrefix: "The",
      titleHighlight: "Asatha Spa",
      description: "A tranquil haven offering bespoke therapies inspired by Balinese traditions and modern techniques",
    },
    {
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f61cccd96728251133_wellness-experience-image2.webp",
      titlePrefix: "Yoga &",
      titleHighlight: "Meditation",
      description: "Perched above the ocean, our open-air pavilion invites you to flow with the rhythm of nature.",
    },
    {
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f7fc5606fa6c56b4f6_wellness-experience-image3.webp",
      titlePrefix: "Holistic",
      titleHighlight: "Healing",
      description: "Discover sound therapy, breathwork, and energy-balancing sessions guided by experienced practitioners.",
    },
  ];

  return (
    <section className="section py-24 sm:py-32 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-[500px] mx-auto">
          <h2 className="text-[#3D3D3D]">
            Wellness <em className="wood-700-text font-cardo italic">Experiences</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="img-zoom-container relative h-[280px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden shadow-xs bg-[#f8f6ef] mb-6">
                <img
                  src={exp.image}
                  alt={`${exp.titlePrefix} ${exp.titleHighlight}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-cardo text-2xl sm:text-3xl text-[#3D3D3D] mb-3">
                  {exp.titlePrefix}{" "}
                  <em className="wood-700-text font-cardo italic">
                    {exp.titleHighlight}
                  </em>
                </h3>
                <p className="font-urbanist text-sm sm:text-base text-[#6D6D6D] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create WellnessRetreatsSection.tsx**

```tsx
import React from "react";

export default function WellnessRetreatsSection() {
  return (
    <section className="section py-24 sm:py-32 bg-[#f8f6ef]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Left */}
          <div className="max-w-[540px]">
            <h2 className="text-[#3D3D3D] mb-6">
              Wellness <em className="wood-700-text font-cardo italic">retreats</em>
            </h2>
            <p className="large-paragraph text-[#6D6D6D] leading-relaxed mb-8">
              From sunrise yoga overlooking the cliffs to healing spa rituals guided by ancient traditions. Every moment is crafted to restore balance, awaken the senses, and reconnect you with the rhythm of Bali.
            </p>
            <div>
              <a href="#menu" className="webflow-button inline-block">
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Browse menu</span>
                  <span className="btn-text btn-text-2">Browse menu</span>
                </div>
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="img-zoom-container relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden shadow-xs bg-[#e4dcc4]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f94f681a1ab84a9d84_wellness-retreats-image.webp"
              alt="Wellness Retreats"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit experiences and retreats sections**

```bash
git add src/components/wellness/WellnessExperiencesSection.tsx src/components/wellness/WellnessRetreatsSection.tsx
git commit -m "feat(wellness): add WellnessExperiencesSection and WellnessRetreatsSection"
```

---

### Task 4: Create Interactive WellnessMenuSection with Tabs

**Files:**
- Create: `src/components/wellness/WellnessMenuSection.tsx`

**Interfaces:**
- `WellnessMenuSection`: React client component with active tab state (`Traditional Therapies` | `Aroma Rituals` | `Wellness Packages`), treatment listings, pricing, duration, and dynamic feature images.

- [ ] **Step 1: Create WellnessMenuSection.tsx**

```tsx
"use client";

import React, { useState } from "react";

interface TreatmentItem {
  name: string;
  duration: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  titleHighlight: string;
  image: string;
  alt: string;
  items: TreatmentItem[];
}

export default function WellnessMenuSection() {
  const [activeTab, setActiveTab] = useState<
    "Traditional Therapies" | "Aroma Rituals" | "Wellness Packages"
  >("Traditional Therapies");

  const menuData: Record<
    "Traditional Therapies" | "Aroma Rituals" | "Wellness Packages",
    MenuCategory
  > = {
    "Traditional Therapies": {
      title: "Traditional",
      titleHighlight: "Therapies",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f870262b8c8c6faf57_wellness-therapies-menu.webp",
      alt: "Traditional Therapies Foot Reflexology",
      items: [
        {
          name: "Foot Reflexology",
          duration: "(45 min)",
          description: "Gentle pressure points to relieve tension and restore energy",
          price: "$50.00",
        },
        {
          name: "Balinese Herbal",
          duration: "(45 min)",
          description: "Heated herbal poultices soothe muscles and ease circulation",
          price: "$80.00",
        },
        {
          name: "Full Body Stretch",
          duration: "(2 hrs)",
          description: "Assisted stretches to enhance flexibility and deep relaxation",
          price: "$120.00",
        },
      ],
    },
    "Aroma Rituals": {
      title: "Aroma",
      titleHighlight: "Rituals",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448852b47cd5596d8dbec_wellness-rituals-menu.webp",
      alt: "Aroma Rituals Bath and Oils",
      items: [
        {
          name: "Aromatherapy",
          duration: "(60 min)",
          description: "Healing oils and flowing strokes for complete calm",
          price: "$90.00",
        },
        {
          name: "Flower Essence Bath",
          duration: "(30 min)",
          description: "A fragrant soak infused with local botanicals",
          price: "$80.00",
        },
      ],
    },
    "Wellness Packages": {
      title: "Wellness",
      titleHighlight: "Packages",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f8c62a04332f1b566f_wellness-packages-menu.webp",
      alt: "Wellness Packages Couple Spa",
      items: [
        {
          name: "Rejuvenation Journey",
          duration: "(3 hrs)",
          description: "Body scrub, aromatherapy massage, and nourishing facial",
          price: "$220.00",
        },
        {
          name: "Couples Harmony",
          duration: "(2.5 hrs)",
          description: "Side-by-side massage, flower bath, and sparkling wine",
          price: "$280.00",
        },
      ],
    },
  };

  const currentCategory = menuData[activeTab];

  return (
    <section id="menu" className="section py-24 sm:py-32 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <h2 className="text-[#3D3D3D] mb-4">
            Browse our <em className="wood-700-text font-cardo italic">Menus</em>
          </h2>
          <p className="large-paragraph text-[#6D6D6D] leading-relaxed">
            Each ritual is thoughtfully designed to restore balance, blending traditional techniques with contemporary luxury.
          </p>
        </div>

        {/* Tab Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-16">
          {(
            [
              "Traditional Therapies",
              "Aroma Rituals",
              "Wellness Packages",
            ] as const
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer border ${
                activeTab === tab
                  ? "bg-[#71553B] text-white border-[#71553B] shadow-sm"
                  : "bg-[#f8f6ef] text-[#71553B] border-[#e4dcc4] hover:border-[#71553B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 2-Column Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Menu Items Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-cardo text-3xl sm:text-4xl text-[#3D3D3D] mb-8 pb-4 border-b border-[#e4dcc4]">
              {currentCategory.title}{" "}
              <em className="wood-700-text font-cardo italic">
                {currentCategory.titleHighlight}
              </em>
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-[#f2efe2] last:border-0 transition-opacity duration-300"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h4 className="font-cardo text-xl sm:text-2xl text-[#3D3D3D] font-normal">
                      {item.name}{" "}
                      <em className="font-cardo italic text-[#71553B]">
                        {item.duration}
                      </em>
                    </h4>
                    <span className="font-urbanist text-base sm:text-lg font-semibold text-[#71553B] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-urbanist text-sm sm:text-base text-[#6D6D6D] font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-urbanist text-xs sm:text-sm text-[#8B6843] italic mt-8">
              *All treatments are subject to availability and advance booking is recommended.
            </p>
          </div>

          {/* Feature Image Right Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="img-zoom-container relative h-[380px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden shadow-xs bg-[#f8f6ef] border border-[#e4dcc4]">
              <img
                key={currentCategory.image}
                src={currentCategory.image}
                alt={currentCategory.alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit menu section**

```bash
git add src/components/wellness/WellnessMenuSection.tsx
git commit -m "feat(wellness): add interactive WellnessMenuSection with tabbed filter"
```

---

### Task 5: Assemble Wellness Page Route

**Files:**
- Create: `src/app/wellness/page.tsx`

**Interfaces:**
- Next.js App Router Page component for `/wellness` integrating all sections, `AvailabilityModal`, and `Footer`.

- [ ] **Step 1: Create src/app/wellness/page.tsx**

```tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityModal from "@/components/AvailabilityModal";
import WellnessHeroSection from "@/components/wellness/WellnessHeroSection";
import WellnessPhilosophySection from "@/components/wellness/WellnessPhilosophySection";
import WellnessExperiencesSection from "@/components/wellness/WellnessExperiencesSection";
import WellnessRetreatsSection from "@/components/wellness/WellnessRetreatsSection";
import WellnessMenuSection from "@/components/wellness/WellnessMenuSection";
import GuestStoriesSection from "@/components/GuestStoriesSection";
import BookingBanner from "@/components/BookingBanner";

export default function WellnessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#3D3D3D]">
      {/* Availability Booking Pop-up Modal */}
      <AvailabilityModal isOpen={modalOpen} onClose={handleCloseModal} />

      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* 1. Wellness Hero Section */}
        <WellnessHeroSection />

        {/* 2. Our Wellness Philosophy with 8-photo horizontal strip */}
        <WellnessPhilosophySection />

        {/* 3. Wellness Experiences - 3-Card Grid */}
        <WellnessExperiencesSection />

        {/* 4. Wellness Retreats - Text Left / Image Right */}
        <WellnessRetreatsSection />

        {/* 5. Browse our Menus - Interactive Tabs */}
        <WellnessMenuSection />

        {/* 6. Guest Stories & Lifestyle Mosaic Gallery (wood-50 background) */}
        <GuestStoriesSection variant="wood-50" />

        {/* 7. Book Your Stay CTA Banner with Wellness Backdrop */}
        <BookingBanner
          onOpenModal={handleOpenModal}
          backgroundImage="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f097121f6f0d6f6002_wellness-cta-background.webp"
        />
      </main>

      {/* Global Resort Footer */}
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit wellness page route**

```bash
git add src/app/wellness/page.tsx
git commit -m "feat(wellness): assemble Wellness page route with full section sequence"
```

---

### Task 6: Full Application Build & Verification

**Files:**
- Test all pages (`/`, `/about-us`, `/dining`, `/wellness`)

- [ ] **Step 1: Run Next.js production build**

Run: `npm run build`
Expected: Build succeeds with 0 errors and creates `/wellness` static route.

- [ ] **Step 2: Final commit**

```bash
git commit --allow-empty -m "chore(release): complete Wellness page clone verification"
```
