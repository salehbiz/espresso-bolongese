# Asatha Luxury Resort - About Us Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a 1:1 pixel-perfect clone of the Asatha Luxury Resort About Us page at `/about-us` in Next.js App Router, complete with all sections, animations, video lightbox modal, amenities gallery, testimonial slider, booking modal integration, and responsive navigation.

**Architecture:** Modular component architecture using Next.js App Router and React 19. Shared components (`Header`, `Footer`, `AvailabilityModal`, `AwardSection`, `GuestStoriesSection`, `BookingBanner`) will be paired with dedicated About Us sections in `src/components/about/` (`AboutHeroSection`, `EscapeToBlissSection`, `OurStorySection`, `AmenitiesSection`) and interactive modals (`VideoLightboxModal`).

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide / custom inline SVG icons, Cardo & Urbanist Google Fonts.

## Global Constraints
- Typography: Headings must use Cardo (`font-cardo`), body must use Urbanist (`font-urbanist`).
- Colors: Brand palette using `#3D3D3D` (dark), `#8B6843` (wood-700 bronze), `#71553B` (wood-800), `#F8F6EF` (wood-50 background), `#E4DCC4` (wood-200 border), `#FFAC26` (gold star ratings).
- Buttons: Authentic Webflow rolling hover interaction (`.webflow-button`).
- Pixel fidelity: Sharp geometric borders, identical text copy, responsive breakpoints (479px, 767px, 991px, 1440px).

---

### Task 1: Navigation & Header Link Updates

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: Next.js `Link`, `usePathname` from `next/navigation`
- Produces: Navigation links pointing to `/about-us` and `/` with active indicator styling

- [ ] **Step 1: Update Header.tsx navigation items and active state**
  Update the menu navigation items to include `href: "/about-us"` for About us and `href: "/"` for Home, with proper path highlighting.
- [ ] **Step 2: Update Footer.tsx Quick Links**
  Update the footer Quick Links so "About Us" links directly to `/about-us` and brand logo links to `/`.
- [ ] **Step 3: Verify navigation links**
  Run build / dev check to ensure no TypeScript or syntax issues.
- [ ] **Step 4: Commit**
  ```bash
  git add src/components/Header.tsx src/components/Footer.tsx
  git commit -m "feat(nav): update Header and Footer links for /about-us route"
  ```

---

### Task 2: Video Lightbox Modal Component

**Files:**
- Create: `src/components/VideoLightboxModal.tsx`

**Interfaces:**
- Produces: `VideoLightboxModal` component accepting `{ isOpen: boolean; onClose: () => void; videoUrl?: string }`

- [ ] **Step 1: Implement VideoLightboxModal.tsx**
  Build an accessible modal component with backdrop blur, smooth fade-in, ESC key listener, close button, and responsive 16:9 YouTube/video iframe embed.
- [ ] **Step 2: Verify component rendering**
  Ensure clean export and types.
- [ ] **Step 3: Commit**
  ```bash
  git add src/components/VideoLightboxModal.tsx
  git commit -m "feat(modal): create VideoLightboxModal component"
  ```

---

### Task 3: About Hero Section Component

**Files:**
- Create: `src/components/about/AboutHeroSection.tsx`

**Interfaces:**
- Produces: `AboutHeroSection` component

- [ ] **Step 1: Implement AboutHeroSection.tsx**
  - Background: Full-width high-resolution pool view with subtle dark vignette.
  - Review Badge: 5 gold stars rating + `4.9 | 15k+ Reviews`.
  - H1 Heading: `Asatha is where` *`you feel restored.`* (Cardo serif, 96px desktop / responsive scaling).
  - Sub-paragraph: *"A haven where thoughtful design and unspoiled surroundings create an experience of quiet luxury."*
- [ ] **Step 2: Verify layout and typography**
  Ensure correct line-height, letter-spacing, and italic styling.
- [ ] **Step 3: Commit**
  ```bash
  git add src/components/about/AboutHeroSection.tsx
  git commit -m "feat(about): create AboutHeroSection component"
  ```

---

### Task 4: Escape to Bliss Section with Video & Stats

**Files:**
- Create: `src/components/about/EscapeToBlissSection.tsx`

**Interfaces:**
- Produces: `EscapeToBlissSection` component accepting `{ onOpenModal: () => void; onOpenVideo: () => void }`

- [ ] **Step 1: Implement EscapeToBlissSection.tsx**
  - Section Header: H2 `Escape to` *`Bliss.`*, large paragraph, and `Reserve Stay` button linking to modal / villas.
  - Video Player Box: Looping muted video background (`about-video-transcode.mp4`) with poster fallback and centered hover-scaling luxury play button icon.
  - 4 Metric Counters Grid:
    1. `4.9/5` — Guest Rating
    2. `15k+` — Reviews Worldwide
    3. `2,348` — Villas and Resorts Worldwide
    4. `20+` — Activities
- [ ] **Step 2: Verify responsiveness and click handlers**
  Ensure play button triggers `onOpenVideo` and CTA triggers booking modal.
- [ ] **Step 3: Commit**
  ```bash
  git add src/components/about/EscapeToBlissSection.tsx
  git commit -m "feat(about): create EscapeToBlissSection component"
  ```

---

### Task 5: Our Story Section Component

**Files:**
- Create: `src/components/about/OurStorySection.tsx`

**Interfaces:**
- Produces: `OurStorySection` component

- [ ] **Step 1: Implement OurStorySection.tsx**
  - Left column:
    - H2: `Our` *`Story`* (wood-700 accent).
    - Story description paragraph.
    - Founder pull-quote: *“We wanted Asatha to feel less like a destination and more like a return to what matters most.”*
    - Founder info card: Circular avatar image of James Thompson + London, UK attribution.
  - Right column:
    - High-resolution architectural villa photo (`our-story-background.webp`) with clean geometric borders.
- [ ] **Step 2: Verify 2-column responsive layout**
  Ensure clean stacking on mobile and side-by-side on desktop.
- [ ] **Step 3: Commit**
  ```bash
  git add src/components/about/OurStorySection.tsx
  git commit -m "feat(about): create OurStorySection component"
  ```

---

### Task 6: Amenities Section with Circular Hover Cards

**Files:**
- Create: `src/components/about/AmenitiesSection.tsx`

**Interfaces:**
- Produces: `AmenitiesSection` component accepting `{ onOpenModal: () => void }`

- [ ] **Step 1: Implement AmenitiesSection.tsx**
  - Header: H2 `Amenities`, description paragraph, `Reserve Stay` rolling button.
  - 5 Circular Amenity Cards:
    1. Infinity Pool (`amenity-image1.webp` + custom pool SVG)
    2. Wellness & Spa Space (`amenity-image2.webp` + lotus SVG)
    3. Oceanfront Yoga (`amenity-image3.webp` + yoga SVG)
    4. Fitness Studio (`amenity-image4.webp` + dumbbell SVG)
    5. Children's play area (`amenity-image5.webp` + play area SVG)
  - Circular mask styling (`w-36 h-36` to `w-48 h-48` rounded-full), dark overlay, centered icon, label underneath.
- [ ] **Step 2: Verify hover zoom and icon alignment**
  Ensure smooth transform scale on hover.
- [ ] **Step 3: Commit**
  ```bash
  git add src/components/about/AmenitiesSection.tsx
  git commit -m "feat(about): create AmenitiesSection component"
  ```

---

### Task 7: Assemble About Us Page & Route Verification

**Files:**
- Create: `src/app/about-us/page.tsx`
- Modify: `src/app/globals.css` (if any utility adjustments needed)

**Interfaces:**
- Produces: Next.js page at `/about-us` with metadata and full interactive layout

- [ ] **Step 1: Implement src/app/about-us/page.tsx**
  Assemble:
  1. `AvailabilityModal`
  2. `VideoLightboxModal`
  3. `Header`
  4. `AboutHeroSection`
  5. `EscapeToBlissSection`
  6. `OurStorySection`
  7. `AmenitiesSection`
  8. `AwardSection`
  9. `GuestStoriesSection`
  10. `BookingBanner`
  11. `Footer`
- [ ] **Step 2: Verify build and routing**
  Run `npm run build` to verify clean compilation without any lint or TypeScript errors.
- [ ] **Step 3: Visual and functional verification**
  Run dev server and test in browser using `browser_subagent` to capture screenshots and verify 1:1 fidelity against the Webflow source.
- [ ] **Step 4: Commit**
  ```bash
  git add src/app/about-us/page.tsx src/app/globals.css
  git commit -m "feat(page): assemble and launch About Us page clone"
  ```
