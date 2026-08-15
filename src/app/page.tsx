"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomsSlider from "@/components/RoomsSlider";
import RewardsSection from "@/components/RewardsSection";
import DiningSection from "@/components/DiningSection";
import AboutMentorSection from "@/components/AboutMentorSection";
import GuestStoriesSection from "@/components/GuestStoriesSection";
import PackagesSection from "@/components/PackagesSection";
import AwardSection from "@/components/AwardSection";
import BookingBanner from "@/components/BookingBanner";
import Footer from "@/components/Footer";
import AvailabilityModal from "@/components/AvailabilityModal";

export default function Home() {
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
        {/* 1. Hero Video Section */}
        <HeroSection />

        {/* 2. Timeless Luxury Intro with 5-Photo Mosaic */}
        <AboutSection />

        {/* 3. Rooms & Suites Carousel */}
        <RoomsSlider onOpenModal={handleOpenModal} />

        {/* 4. Asatha Rewards Tier Grid */}
        <RewardsSection />

        {/* 5. Culinary Collage - Dine at Asatha */}
        <DiningSection />

        {/* 6. Villas & Sanctuary Story */}
        <AboutMentorSection onOpenModal={handleOpenModal} />

        {/* 7. Guest Stories & Testimonial Gallery */}
        <GuestStoriesSection />

        {/* 8. Popular Packages (Cultural Package & Wellness Escape) */}
        <PackagesSection onOpenModal={handleOpenModal} />

        {/* 9. Award Badges & Accreditations */}
        <AwardSection />

        {/* 10. Book Your Stay Call-to-Action Banner */}
        <BookingBanner onOpenModal={handleOpenModal} />
      </main>

      {/* 11. Luxury Resort Footer */}
      <Footer />
    </div>
  );
}
