# Asatha Luxury Resort - Contact Us Page Clone Design Spec

**Date:** 2026-08-16  
**Topic:** Contact Us Page 1:1 Pixel-Perfect Clone for Asatha Luxury Resort  
**Target URL:** `https://asatha-luxury-webflow-template.webflow.io/contact-us`

---

## 1. Objective
Build an exact, 1:1 pixel-perfect clone of the **Contact Us** page at `/contact-us` within the Next.js App Router application (`src/app/contact-us/page.tsx`). Remove all uncloned links from the navigation menu and footer, keeping only the cloned pages (`About us`, `Dining`, `Wellness`, `Contact Us`). Reproduce every visual section, exact typography (Cardo serif and Urbanist sans-serif), hero header with contact details and resort pool image, interactive contact form with validation and success feedback, and the 5-item "Help & FAQs" accordion section on `#f8f6ef`.

---

## 2. Navigation & Menu Cleanup
- **Keep ONLY Cloned Pages in Navigation**:
  - `Header.tsx`: Navigation items in the drawer menu:
    - `About us` (`/about-us`)
    - `Dining` (`/dining`)
    - `Wellness` (`/wellness`)
    - `Contact Us` (`/contact-us`)
  - `Footer.tsx`:
    - Quick Links: `About Us`, `Dining`, `Wellness`, `Contact Us`.
    - More Links: remove uncloned links.
- **Header Theme Variant Support**:
  - On `/contact-us`, since the hero background is clean white `#ffffff` instead of a dark photography background, the header renders in dark logo / dark text mode immediately (or on scroll).

---

## 3. Section-by-Section Breakdown

### 1. Navigation Header & Availability Modal
- Clean navigation header with dark logo and dark text option on white background.
- "Check Availability" dual-layer sliding roll button.
- Slide-out drawer with only cloned pages (`About us`, `Dining`, `Wellness`, `Contact Us`).
- Global booking modal (`AvailabilityModal.tsx`).

### 2. Contact Hero Section (`ContactHeroSection.tsx`)
- **Background**: Clean white (`#ffffff`), `pt-[160px] pb-16`.
- **Top Information Grid**:
  - **Left Column**:
    - H1: `Reach` *`out us`* (Cardo serif font, 56px–80px, with wood-700 bronze accent on italicized *out us*).
    - Paragraph: *"Your dream retreat at Asatha is just a conversation away."*
  - **Right Column** (2 sub-columns):
    - Sub-col 1: **Contact**
      - `P: +62 812 3456 7890`
      - `E: stay@asatha.com`
      - `Reception: WhatsApp`
    - Sub-col 2: **Find Us**
      - `123 Jl. Labuan Sait No. 88, Pecatu, South Kuta, Badung Regency, Bali 80361, Indonesia`
- **Full-Width Hero Photography**:
  - High-res resort pool & architecture landscape: `https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6904a441db80d8a84b2705e2_contact-image.webp` (1500px wide).

### 3. Contact Form Section (`ContactFormSection.tsx`)
- **Background**: Clean white (`#ffffff`), `py-24 sm:py-32`.
- **Heading Block**:
  - H2: `Contact` *`form`* (Cardo serif with wood-700 bronze accent on italicized *form*).
  - Paragraph: *"Fill out the form below and let us help you plan your perfect getaway."*
- **Interactive Form Grid**:
  - **Full Name***: Text input, placeholder `Rakesh Shah`.
  - **Email Address***: Email input, placeholder `your@gmail.com`.
  - **Phone Number***: Tel input, placeholder `+91 01234 56789`.
  - **Subject***: Select dropdown options:
    - `Select one...`
    - `Booking Enquiry`
    - `Room Availability`
    - `Event & Celebration Booking`
    - `Dining Reservation`
    - `Spa & Wellness Appointment`
    - `Corporate Partnership`
    - `Media & Collaboration`
    - `Feedback or Complaint`
    - `General Inquiry`
  - **Message**: Textarea, placeholder `Write your message here...`.
  - **Terms Checkbox**: "I agree with the Terms & Conditions".
  - **Submit Button**: `Submit Message` with dual-text sliding roll animation.
- **Success State**: "Thank you! Your submission has been received!".

### 4. Help & FAQs Section (`ContactFaqSection.tsx`)
- **Background**: Warm `wood-50` (`#f8f6ef`), `py-24 sm:py-32`.
- **Heading**: H2 `Help & FAQs` (Cardo serif, centered).
- **Accordion Questions List** (expandable with chevron rotation):
  1. **How can I book my stay at Asatha?**
     - Answer: *"You can book directly on our website using the Book Now button, or contact our reservations team via email or WhatsApp for personalized assistance."*
  2. **What payment methods are accepted?**
     - Answer: *"We accept all major credit cards, international debit cards, and secure bank transfers. For on-site payments, we also accept digital wallets."*
  3. **Can I modify my booking after confirmation?**
     - Answer: *"Yes, bookings can be modified up to 7 days before your arrival date, subject to availability and any applicable rate changes."*
  4. **What is the cancellation policy at Asatha?**
     - Answer: *"Cancellations made 14 days prior to arrival are free of charge. Cancellations within 14 days may incur one night’s stay as a fee. No-shows will be charged the full amount."*
  5. **Do you offer seasonal promotions or packages?**
     - Answer: *"Yes, we offer exclusive seasonal deals, wellness packages, and honeymoon specials throughout the year."*

### 5. Luxury Resort Footer (`Footer.tsx`)
- "Get inspired" newsletter signup.
- Updated navigation columns with only cloned pages (`About Us`, `Dining`, `Wellness`, `Contact Us`).
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
│   ├── wellness/
│   │   └── page.tsx                         # Wellness page
│   └── contact-us/
│       └── page.tsx                         # New Contact Us page
├── components/
│   ├── Header.tsx                           # Updated: Only cloned pages in drawer menu
│   ├── Footer.tsx                           # Updated: Only cloned pages in Quick Links
│   ├── AvailabilityModal.tsx                # Global booking modal
│   └── contact/
│       ├── ContactHeroSection.tsx           # Hero title, contact info columns, resort pool image
│       ├── ContactFormSection.tsx           # Contact form with inputs, select, and validation
│       └── ContactFaqSection.tsx            # Help & FAQs accordion with 5 questions
```

---

## 5. Verification & Acceptance Criteria
- [ ] Route `/contact-us` builds cleanly with zero Next.js compilation or TypeScript errors.
- [ ] Drawer menu in `Header.tsx` only lists the 4 cloned pages (`About us`, `Dining`, `Wellness`, `Contact Us`).
- [ ] Footer Quick Links only lists the 4 cloned pages.
- [ ] Contact Hero renders H1 `Reach out us`, contact details, and resort pool photo.
- [ ] Contact form renders all input fields, handles submission state, and resets cleanly.
- [ ] Help & FAQs accordion expands and collapses smoothly on click.
- [ ] Check Availability buttons trigger the global `AvailabilityModal`.
- [ ] Mobile responsive layout (320px, 768px, 1024px, 1440px) renders pixel-perfect without horizontal scroll.
