# Contact Us Page 1:1 Pixel-Perfect Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an exact, 1:1 pixel-perfect clone of the Asatha Luxury Resort Contact Us page at `/contact-us`, remove all uncloned menu links from Header and Footer, and retain only the cloned pages (`About us`, `Dining`, `Wellness`, `Contact Us`).

**Architecture:** Next.js App Router (`src/app/contact-us/page.tsx`) with modular, isolated React components in `src/components/contact/`, header theme variant support for light backgrounds, interactive form handling with success feedback, and expandable FAQ accordions.

**Tech Stack:** Next.js 16+ (App Router), React 19, TypeScript, Tailwind CSS / CSS design tokens.

## Global Constraints
- Target URL: `https://asatha-luxury-webflow-template.webflow.io/contact-us`
- Menu cleanup: Header drawer menu and Footer links must ONLY contain the cloned pages: `About us` (`/about-us`), `Dining` (`/dining`), `Wellness` (`/wellness`), and `Contact Us` (`/contact-us`).
- Preserve exact typography: `Cardo` for luxury serif headlines; `Urbanist` for clean sans-serif UI text.
- Preserve responsive breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (1024px+ / 1440px container).
- Zero build warnings or runtime console errors.

---

### Task 1: Clean Up Header & Footer Navigation Links

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- `HeaderProps`: `{ onOpenModal: () => void; theme?: "light" | "dark" }`
- Drawer navigation array in `Header.tsx`: only `{ name: "About us", href: "/about-us" }`, `{ name: "Dining", href: "/dining" }`, `{ name: "Wellness", href: "/wellness" }`, `{ name: "Contact Us", href: "/contact-us" }`.
- Quick Links array in `Footer.tsx`: `About Us`, `Dining`, `Wellness`, `Contact Us`.

- [ ] **Step 1: Update Header.tsx navigation items and theme support**

```tsx
interface HeaderProps {
  onOpenModal: () => void;
  theme?: "light" | "dark";
}

// In Header component:
const isDarkHeader = theme === "dark" || isScrolled;
// Navigation items:
const navItems = [
  { name: "About us", href: "/about-us" },
  { name: "Dining", href: "/dining" },
  { name: "Wellness", href: "/wellness" },
  { name: "Contact Us", href: "/contact-us" },
];
```

- [ ] **Step 2: Update Footer.tsx navigation links**

```tsx
const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Dining", href: "/dining" },
  { name: "Wellness", href: "/wellness" },
  { name: "Contact Us", href: "/contact-us" },
];
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit navigation cleanup**

```bash
git add src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat(nav): clean up navigation to only include cloned pages"
```

---

### Task 2: Create ContactHeroSection Component

**Files:**
- Create: `src/components/contact/ContactHeroSection.tsx`

**Interfaces:**
- `ContactHeroSection`: React component rendering H1 "Reach out us", 2 contact info columns, and high-res resort pool photography.

- [ ] **Step 1: Create ContactHeroSection.tsx**

```tsx
import React from "react";

export default function ContactHeroSection() {
  return (
    <section id="home" className="pt-[140px] sm:pt-[160px] pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column: Heading (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-cardo text-5xl sm:text-6xl md:text-7xl text-[#3D3D3D] font-normal mb-4 tracking-tight">
              Reach <em className="wood-700-text font-cardo italic">out us</em>
            </h1>
            <p className="font-urbanist text-base sm:text-lg text-[#6D6D6D] max-w-[480px] font-normal leading-relaxed">
              Your dream retreat at Asatha is just a conversation away.
            </p>
          </div>

          {/* Right Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            {/* Contact */}
            <div>
              <h3 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553B] mb-3">
                Contact
              </h3>
              <div className="space-y-1 text-sm font-urbanist text-[#3D3D3D]">
                <div>
                  P: <span className="font-medium text-[#71553B]">+62 812 3456 7890</span>
                </div>
                <div>
                  E: <span className="font-medium text-[#71553B]">stay@asatha.com</span>
                </div>
                <div>
                  Reception: <span className="font-medium text-[#71553B]">WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Find Us */}
            <div>
              <h3 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553B] mb-3">
                Find Us
              </h3>
              <p className="font-urbanist text-sm text-[#3D3D3D] leading-relaxed">
                123 Jl. Labuan Sait No. 88, Pecatu, South Kuta, Badung Regency, Bali 80361, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Full-Bleed Landscape Photography */}
        <div className="img-zoom-container relative h-[360px] sm:h-[480px] md:h-[580px] w-full overflow-hidden shadow-xs bg-[#f8f6ef]">
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6904a441db80d8a84b2705e2_contact-image.webp"
            alt="Asatha Resort Pool Complex"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit ContactHeroSection**

```bash
git add src/components/contact/ContactHeroSection.tsx
git commit -m "feat(contact): add ContactHeroSection component"
```

---

### Task 3: Create ContactFormSection Component

**Files:**
- Create: `src/components/contact/ContactFormSection.tsx`

**Interfaces:**
- `ContactFormSection`: Client React component managing form inputs, subject select dropdown, agree checkbox, dual-layer sliding submit button, and submission state.

- [ ] **Step 1: Create ContactFormSection.tsx**

```tsx
"use client";

import React, { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.agreed) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section py-24 sm:py-32 bg-white">
      <div className="container max-w-[1000px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-[540px] mx-auto">
          <h2 className="text-[#3D3D3D] mb-4">
            Contact <em className="wood-700-text font-cardo italic">form</em>
          </h2>
          <p className="large-paragraph text-[#6D6D6D] leading-relaxed">
            Fill out the form below and let us help you plan your perfect getaway.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#f8f6ef] border border-[#e4dcc4] p-10 text-center">
            <h3 className="font-cardo text-2xl text-[#3D3D3D] mb-2">Thank you!</h3>
            <p className="font-urbanist text-[#71553B] text-base">
              Your submission has been received! Our reservations team will reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3D3D] mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rakesh Shah"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#e4dcc4] text-sm text-[#3D3D3D] focus:outline-none focus:border-[#71553B] transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3D3D] mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#e4dcc4] text-sm text-[#3D3D3D] focus:outline-none focus:border-[#71553B] transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3D3D] mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 01234 56789"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#e4dcc4] text-sm text-[#3D3D3D] focus:outline-none focus:border-[#71553B] transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3D3D] mb-2">
                  Subject*
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#e4dcc4] text-sm text-[#3D3D3D] focus:outline-none focus:border-[#71553B] transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="Booking Enquiry">Booking Enquiry</option>
                  <option value="Room Availability">Room Availability</option>
                  <option value="Event & Celebration Booking">Event & Celebration Booking</option>
                  <option value="Dining Reservation">Dining Reservation</option>
                  <option value="Spa & Wellness Appointment">Spa & Wellness Appointment</option>
                  <option value="Corporate Partnership">Corporate Partnership</option>
                  <option value="Media & Collaboration">Media & Collaboration</option>
                  <option value="Feedback or Complaint">Feedback or Complaint</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3D3D] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3.5 bg-white border border-[#e4dcc4] text-sm text-[#3D3D3D] focus:outline-none focus:border-[#71553B] transition-colors"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="w-4 h-4 accent-[#71553B] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs sm:text-sm font-urbanist text-[#6D6D6D] cursor-pointer select-none"
              >
                I agree with the <span className="text-[#3D3D3D] font-semibold underline">Terms & Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="webflow-button">
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Submit Message</span>
                  <span className="btn-text btn-text-2">Submit Message</span>
                </div>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit ContactFormSection**

```bash
git add src/components/contact/ContactFormSection.tsx
git commit -m "feat(contact): add ContactFormSection component"
```

---

### Task 4: Create ContactFaqSection Component

**Files:**
- Create: `src/components/contact/ContactFaqSection.tsx`

**Interfaces:**
- `ContactFaqSection`: Client React component managing accordion state for 5 FAQ questions on `#f8f6ef` background.

- [ ] **Step 1: Create ContactFaqSection.tsx**

```tsx
"use client";

import React, { useState } from "react";

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can I book my stay at Asatha?",
      a: "You can book directly on our website using the Book Now button, or contact our reservations team via email or WhatsApp for personalized assistance.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit cards, international debit cards, and secure bank transfers. For on-site payments, we also accept digital wallets.",
    },
    {
      q: "Can I modify my booking after confirmation?",
      a: "Yes, bookings can be modified up to 7 days before your arrival date, subject to availability and any applicable rate changes.",
    },
    {
      q: "What is the cancellation policy at Asatha?",
      a: "Cancellations made 14 days prior to arrival are free of charge. Cancellations within 14 days may incur one night’s stay as a fee. No-shows will be charged the full amount.",
    },
    {
      q: "Do you offer seasonal promotions or packages?",
      a: "Yes, we offer exclusive seasonal deals, wellness packages, and honeymoon specials throughout the year.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section py-24 sm:py-32 bg-[#f8f6ef]">
      <div className="container max-w-[900px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#3D3D3D]">Help &amp; FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#e4dcc4] pb-4 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-3 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-urbanist text-base sm:text-lg font-medium text-[#3D3D3D] group-hover:text-[#71553B] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 flex items-center justify-center shrink-0 text-[#3D3D3D] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#71553B]" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.43906 12.1382L15.8191 4.73778C16.0607 4.49531 16.0603 4.10275 15.8178 3.86069C15.5753 3.61881 15.1826 3.61944 14.9407 3.86194L7.99997 10.8219L1.05925 3.86169C0.817375 3.61922 0.424846 3.61859 0.182346 3.86044C0.0607843 3.98178 2.86102e-06 4.14075 2.86102e-06 4.29972C2.86102e-06 4.45828 0.0603781 4.61662 0.181096 4.73774L7.56091 12.1382C7.6771 12.255 7.83522 12.3206 7.99997 12.3206C8.16472 12.3206 8.32266 12.2548 8.43906 12.1382Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-4 font-urbanist text-sm sm:text-base text-[#6D6D6D] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit ContactFaqSection**

```bash
git add src/components/contact/ContactFaqSection.tsx
git commit -m "feat(contact): add ContactFaqSection component"
```

---

### Task 5: Assemble Contact Us Page Route

**Files:**
- Create: `src/app/contact-us/page.tsx`

**Interfaces:**
- Next.js App Router Page component for `/contact-us` integrating `Header` (with dark theme), `ContactHeroSection`, `ContactFormSection`, `ContactFaqSection`, `AvailabilityModal`, and `Footer`.

- [ ] **Step 1: Create src/app/contact-us/page.tsx**

```tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityModal from "@/components/AvailabilityModal";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";

export default function ContactUsPage() {
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

      {/* Navigation Header with Dark Theme on Light Background */}
      <Header onOpenModal={handleOpenModal} theme="dark" />

      <main>
        {/* 1. Contact Hero Section with Contact Details and Resort Image */}
        <ContactHeroSection />

        {/* 2. Contact Form with Luxury Styling & Validation */}
        <ContactFormSection />

        {/* 3. Help & FAQs Expandable Accordion */}
        <ContactFaqSection />
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

- [ ] **Step 3: Commit contact-us page route**

```bash
git add src/app/contact-us/page.tsx
git commit -m "feat(contact): assemble Contact Us page route with full section sequence"
```

---

### Task 6: Full Application Build & Verification

**Files:**
- Test all pages (`/`, `/about-us`, `/dining`, `/wellness`, `/contact-us`)

- [ ] **Step 1: Run Next.js production build**

Run: `npm run build`
Expected: Build succeeds with 0 errors and creates `/contact-us` static route.

- [ ] **Step 2: Final commit**

```bash
git commit --allow-empty -m "chore(release): complete Contact Us page clone verification"
```
