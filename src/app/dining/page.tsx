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
    <div className="relative min-h-screen bg-white text-[#3E3226]">
      {/* Availability Booking Pop-up Modal */}
      <AvailabilityModal isOpen={modalOpen} onClose={handleCloseModal} />

      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* 1. Dining Hero Section with dark overlay */}
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
