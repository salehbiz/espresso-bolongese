# Dining Page 1:1 Pixel-Perfect Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an exact, 1:1 pixel-perfect clone of the Asatha Luxury Resort Dining page at `/dining`, remove "Villas & Suites" from the navigation menu, and link "Dining" directly to the new page.

**Architecture:** Next.js App Router (`src/app/dining/page.tsx`) with modular, isolated React components in `src/components/dining/`, leveraging existing global design tokens (Cardo serif, Urbanist sans, wood color palette), responsive layout grids, interactive tab state, and global booking modal integration.

**Tech Stack:** Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS / Vanilla CSS design system.

## Global Constraints
- Target URL: `https://asatha-luxury-webflow-template.webflow.io/dining`
- Remove "Villas & Suites" from Header drawer menu and Footer quick links.
- Update "Dining" in Header drawer menu and Footer quick links to point to `/dining`.
- Preserve exact typography: `Cardo` for luxury serif headlines and pull-quotes; `Urbanist` for clean sans-serif UI text.
- Preserve responsive breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (1024px+ / 1440px container).
- Zero build warnings or runtime console errors.

---

### Task 1: Update Header & Footer Navigation Links

**Files:**
- Modify: `src/components/Header.tsx:135-155`
- Modify: `src/components/Footer.tsx:145-165`

**Interfaces:**
- Header navigation items array: remove `{ name: "Villas & Suites", href: "/#rooms" }`, update Dining item to `{ name: "Dining", href: "/dining" }`.
- Footer Quick Links array: remove `{ name: "Villas & Suites", href: "/#rooms" }`, update Dining item to `{ name: "Dining", href: "/dining" }`.

- [ ] **Step 1: Update Header.tsx navigation links**

Update `Header.tsx` menu list in the slide-out drawer:
```tsx
const navItems = [
  { name: "About us", href: "/about-us" },
  { name: "Dining", href: "/dining" },
  { name: "Wellness", href: "/#wellness" },
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
  { name: "Wellness", href: "/#wellness" },
];
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit navigation updates**

```bash
git add src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat(nav): remove villas & suites and route dining to /dining"
```

---

### Task 2: Enhance BookingBanner & GuestStoriesSection with Props

**Files:**
- Modify: `src/components/BookingBanner.tsx`
- Modify: `src/components/GuestStoriesSection.tsx`

**Interfaces:**
- `BookingBannerProps`: `{ onOpenModal: () => void; backgroundImage?: string }`
- `GuestStoriesSectionProps`: `{ variant?: "white" | "wood-50" }`

- [ ] **Step 1: Add custom backgroundImage prop to BookingBanner.tsx**

```tsx
interface BookingBannerProps {
  onOpenModal: () => void;
  backgroundImage?: string;
}

export default function BookingBanner({
  onOpenModal,
  backgroundImage = "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901e68b93f128fb517b66ee_cta-background.webp",
}: BookingBannerProps) {
  // Use backgroundImage in <img>
```

- [ ] **Step 2: Add variant prop to GuestStoriesSection.tsx**

```tsx
interface GuestStoriesSectionProps {
  variant?: "white" | "wood-50";
}

export default function GuestStoriesSection({
  variant = "white",
}: GuestStoriesSectionProps) {
  const bgClass = variant === "wood-50" ? "bg-[#f8f6ef]" : "bg-white";
  return (
    <section className={`section py-28 sm:py-36 ${bgClass}`}>
      {/* existing slider and gallery */}
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit component enhancements**

```bash
git add src/components/BookingBanner.tsx src/components/GuestStoriesSection.tsx
git commit -m "feat(components): add props to BookingBanner and GuestStoriesSection"
```

---

### Task 3: Create DiningHeroSection and CulinaryJourneySection

**Files:**
- Create: `src/components/dining/DiningHeroSection.tsx`
- Create: `src/components/dining/CulinaryJourneySection.tsx`

**Interfaces:**
- `DiningHeroSection`: React component rendering hero title, subtitle, and dark gradient background.
- `CulinaryJourneySection`: React component rendering H2 "A culinary Journey awaits" with 4-card staggered image grid.

- [ ] **Step 1: Create DiningHeroSection.tsx**

```tsx
import React from "react";

export default function DiningHeroSection() {
  return (
    <section
      id="home"
      className="relative pt-[220px] pb-28 sm:pb-36 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[520px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdf99469a7160660050_dining-hero-backround.webp")`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-10 text-center">
        <h1 className="font-cardo text-5xl sm:text-7xl md:text-8xl text-white font-normal mb-6 tracking-tight">
          Dining
        </h1>
        <p className="font-urbanist text-white/90 text-base sm:text-lg md:text-xl max-w-[620px] mx-auto font-light leading-relaxed">
          Dining is more than a meal — it is a journey. Heritage and global flavors, our chefs craft every dish with passion, precision, and artistry.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create CulinaryJourneySection.tsx**

```tsx
import React from "react";

export default function CulinaryJourneySection() {
  const images = [
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdc84e7810e19da0e99_culinary-image1.webp",
      alt: "People dining outdoors",
      offset: false,
    },
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdc956a03185f9038f0_culinary-image2.webp",
      alt: "Table setting with ocean view",
      offset: true,
    },
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdb9ee3c88df5b34b18_culinary-image3.webp",
      alt: "Friends dining by the sea",
      offset: false,
    },
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdb559b3eb422fb872a_culinary-image4.webp",
      alt: "Breakfast in bed tray",
      offset: true,
    },
  ];

  return (
    <section className="section py-24 sm:py-32 bg-[#f8f6ef]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-[500px] mx-auto">
          <h2 className="text-[#3D3D3D]">
            A culinary <em className="wood-700-text font-cardo italic">Journey awaits</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`img-zoom-container relative h-[320px] sm:h-[380px] w-full overflow-hidden shadow-xs bg-[#e4dcc4] ${
                item.offset ? "lg:-translate-y-5" : ""
              } transition-transform duration-300`}
            >
              <img
                src={item.src}
                alt={item.alt}
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

- [ ] **Step 4: Commit hero and journey sections**

```bash
git add src/components/dining/DiningHeroSection.tsx src/components/dining/CulinaryJourneySection.tsx
git commit -m "feat(dining): add DiningHeroSection and CulinaryJourneySection"
```

---

### Task 4: Create Dining Storytelling Sections and Chef Review Section

**Files:**
- Create: `src/components/dining/DiningExperienceSection.tsx`
- Create: `src/components/dining/ChefQuoteSection.tsx`
- Create: `src/components/dining/CulinaryExperiencesSection.tsx`

**Interfaces:**
- `DiningExperienceSection`: 2-column layout (Image Left, Copy + CTA Right).
- `ChefQuoteSection`: Centered quote card with 5 gold stars and Chef Aruna attribution.
- `CulinaryExperiencesSection`: 2-column layout (Copy + CTA Left, Image Right, wood-50 bg).

- [ ] **Step 1: Create DiningExperienceSection.tsx**

```tsx
import React from "react";

export default function DiningExperienceSection() {
  return (
    <section className="section py-24 sm:py-32 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="img-zoom-container relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden shadow-xs bg-[#f8f6ef]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdd0480c03c3a1b3ca2_dining-experience-image.webp"
              alt="Dining Experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="max-w-[540px]">
            <h2 className="text-[#3D3D3D] mb-6">
              An experience <em className="wood-700-text font-cardo italic">beyond taste</em>
            </h2>
            <p className="large-paragraph text-[#6D6D6D] leading-relaxed mb-8">
              Surrounded by lush gardens and ocean horizons, each dining space offers a setting that inspires connection and calm. From sunrise breakfasts to moonlit dinners, every moment is designed to linger.
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
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create ChefQuoteSection.tsx**

```tsx
import React from "react";

export default function ChefQuoteSection() {
  return (
    <section className="section py-20 sm:py-28 bg-white border-t border-[#f2efe2]">
      <div className="container max-w-[900px] mx-auto px-5 sm:px-8 text-center">
        {/* 5 Stars */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901bbcc9476bdcaad055331_bddc6d983660d93780c71901fcd8217f_guest-story-review-star.svg"
            alt="5 Gold Stars"
            className="h-4 sm:h-5 w-auto"
          />
        </div>

        {/* Quote */}
        <p className="font-cardo text-2xl sm:text-3xl md:text-4xl text-[#3D3D3D] italic leading-relaxed font-normal mb-6">
          &ldquo;Each dish carries the essence of our land and culture, blending tradition with innovation to create something truly unforgettable.&rdquo;
        </p>

        {/* Attribution */}
        <div className="font-urbanist text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#71553B]">
          Chef Aruna – Executive Chef
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create CulinaryExperiencesSection.tsx**

```tsx
import React from "react";

export default function CulinaryExperiencesSection() {
  return (
    <section className="section py-24 sm:py-32 bg-[#f8f6ef]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Left */}
          <div className="max-w-[540px] order-2 lg:order-1">
            <h2 className="text-[#3D3D3D] mb-6">
              Culinary <em className="wood-700-text font-cardo italic">Experiences</em>
            </h2>
            <p className="large-paragraph text-[#6D6D6D] leading-relaxed mb-8">
              From hands-on cooking journeys with our chefs to intimate cliffside dinners beneath the stars. Each moment is designed to connect you with Bali’s culture, nature, and spirit — a celebration of flavor, place, and memory.
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
          <div className="img-zoom-container relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden shadow-xs bg-[#e4dcc4] order-1 lg:order-2">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdf84e7810e19da0faf_culinary-experience-image.webp"
              alt="Culinary Experiences"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit storytelling sections**

```bash
git add src/components/dining/DiningExperienceSection.tsx src/components/dining/ChefQuoteSection.tsx src/components/dining/CulinaryExperiencesSection.tsx
git commit -m "feat(dining): add storytelling and chef quote sections"
```

---

### Task 5: Create Interactive DiningMenuSection with Tabs

**Files:**
- Create: `src/components/dining/DiningMenuSection.tsx`

**Interfaces:**
- `DiningMenuSection`: React client component with active tab state (`Starters` | `Mains` | `Desserts`), dish lists, pricing, descriptions, and dynamic feature images.

- [ ] **Step 1: Create DiningMenuSection.tsx**

```tsx
"use client";

import React, { useState } from "react";

interface MenuItem {
  name: string;
  nameHighlight?: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  image: string;
  alt: string;
  items: MenuItem[];
}

export default function DiningMenuSection() {
  const [activeTab, setActiveTab] = useState<"Starters" | "Mains" | "Desserts">("Starters");

  const menuData: Record<"Starters" | "Mains" | "Desserts", MenuCategory> = {
    Starters: {
      title: "Starters",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdda444a222ed11e975_dining-starter-menu.webp",
      alt: "Starters Soup Dish",
      items: [
        {
          name: "Balinese",
          nameHighlight: "Tomato Soup",
          description: "Slow-roasted tomatoes, ginger, and coconut cream",
          price: "$18.00",
        },
        {
          name: "Green",
          nameHighlight: "Mango Salad",
          description: "Crisp mango, fresh herbs, roasted cashews",
          price: "$20.00",
        },
        {
          name: "Chicken",
          nameHighlight: "Satay",
          description: "Charcoal-grilled skewers, spiced peanut sauce",
          price: "$24.00",
        },
        {
          name: "Crispy",
          nameHighlight: "Spring Rolls",
          description: "Vegetable filling, chili-lime dip, Chopped mushroom",
          price: "$16.00",
        },
      ],
    },
    Mains: {
      title: "Mains",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdee0762cbda79848af_dining-main-menu.webp",
      alt: "Mains Seafood Dish",
      items: [
        {
          name: "Seared",
          nameHighlight: "Sea Bass",
          description: "Coconut curry, kaffir lime, young vegetables",
          price: "$54.00",
        },
        {
          name: "Braised",
          nameHighlight: "Rib Rendang",
          description: "Balinese spices, served with turmeric rice",
          price: "$62.00",
        },
        {
          name: "Vegetarian",
          nameHighlight: "Nasi Campur",
          description: "Traditional Balinese plate with assorted plant-based",
          price: "$38.00",
        },
        {
          name: "Grilled Lobster",
          nameHighlight: "with Tamarind Glaze",
          description: "Fragrant jasmine rice and seasonal greens",
          price: "$68.00",
        },
      ],
    },
    Desserts: {
      title: "Desserts",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdea92da38549744024_dining-dessert-menu.webp",
      alt: "Dessert Sweet Dish",
      items: [
        {
          name: "Coconut",
          nameHighlight: "Crème Brûlée",
          description: "Caramelized top, tropical twist on a classic",
          price: "$18.00",
        },
        {
          name: "Mango",
          nameHighlight: "Sticky Rice",
          description: "Mango, sweet coconut, pandan-infused rice",
          price: "$16.00",
        },
        {
          name: "Chocolate",
          nameHighlight: "Lava Cake",
          description: "Spiced chocolate, vanilla bean ice cream",
          price: "$20.00/per serve",
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
            Discover a selection of our finest culinary offerings, carefully crafted to delight every palate.
          </p>
        </div>

        {/* Tab Filter Navigation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16">
          {(["Starters", "Mains", "Desserts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-sm sm:text-base font-semibold transition-all cursor-pointer border ${
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
            <h3 className="wood-700-text font-cardo italic text-3xl sm:text-4xl mb-8 pb-4 border-b border-[#e4dcc4]">
              {currentCategory.title}
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
                      {item.nameHighlight && (
                        <em className="font-cardo italic text-[#71553B]">
                          {item.nameHighlight}
                        </em>
                      )}
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
              *Menu items subject to seasonal changes.
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
git add src/components/dining/DiningMenuSection.tsx
git commit -m "feat(dining): add interactive DiningMenuSection with tabbed filter"
```

---

### Task 6: Assemble Dining Page Route

**Files:**
- Create: `src/app/dining/page.tsx`

**Interfaces:**
- Next.js App Router Page component for `/dining` integrating all sections and modals.

- [ ] **Step 1: Create src/app/dining/page.tsx**

```tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityModal from "@/components/AvailabilityModal";
import DiningHeroSection from "@/components/dining/DiningHeroSection";
import CulinaryJourneySection from "@/components/dining/CulinaryJourneySection";
import DiningExperienceSection from "@/components/dining/DiningExperienceSection";
import ChefQuoteSection from "@/components/dining/ChefQuoteSection";
import CulinaryExperiencesSection from "@/components/dining/CulinaryExperiencesSection";
import DiningMenuSection from "@/components/dining/DiningMenuSection";
import GuestStoriesSection from "@/components/GuestStoriesSection";
import BookingBanner from "@/components/BookingBanner";

export default function DiningPage() {
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
        {/* 1. Dining Hero Section */}
        <DiningHeroSection />

        {/* 2. A culinary Journey awaits - 4-Image Staggered Grid */}
        <CulinaryJourneySection />

        {/* 3. An experience beyond taste - Image Left / Text Right */}
        <DiningExperienceSection />

        {/* 4. Executive Chef Aruna Review Quote */}
        <ChefQuoteSection />

        {/* 5. Culinary Experiences - Text Left / Image Right */}
        <CulinaryExperiencesSection />

        {/* 6. Browse our Menus - Interactive Starters/Mains/Desserts Tabs */}
        <DiningMenuSection />

        {/* 7. Guest Stories & Lifestyle Mosaic Gallery (wood-50 background) */}
        <GuestStoriesSection variant="wood-50" />

        {/* 8. Book Your Stay CTA Banner with Dining Backdrop */}
        <BookingBanner
          onOpenModal={handleOpenModal}
          backgroundImage="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fe0e0b629b31a90954f_dining-cta-background.webp"
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

- [ ] **Step 3: Commit dining page route**

```bash
git add src/app/dining/page.tsx
git commit -m "feat(dining): assemble Dining page route with full section sequence"
```

---

### Task 7: Full Application Build & Verification

**Files:**
- Test all pages (`/`, `/about-us`, `/dining`)

- [ ] **Step 1: Run Next.js production build**

Run: `npm run build`
Expected: Build succeeds with 0 errors and creates `/dining` static route.

- [ ] **Step 2: Verify navigation and responsive layouts**

Run local dev server or check static routes for:
- Header menu drawer opens and shows `About us`, `Dining`, `Wellness`, `Packages`, `News & Blogs`, `Contact Us` (no Villas & Suites).
- `/dining` loads all 8 sections in proper visual harmony.
- Menu tabs switch between Starters, Mains, Desserts seamlessly.
- Modal opens on clicking "Check Availability".

- [ ] **Step 3: Final commit**

```bash
git commit --allow-empty -m "chore(release): complete Dining page clone verification"
```
