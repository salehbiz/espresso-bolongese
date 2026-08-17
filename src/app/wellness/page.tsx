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
    <div className="relative min-h-screen bg-white text-[#3E3226]">
      {/* Availability Booking Pop-up Modal */}
      <AvailabilityModal isOpen={modalOpen} onClose={handleCloseModal} />

      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* 1. Wellness Hero Section with dark overlay */}
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
