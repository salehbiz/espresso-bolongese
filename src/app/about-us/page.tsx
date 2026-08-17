"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityModal from "@/components/AvailabilityModal";
import VideoLightboxModal from "@/components/VideoLightboxModal";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import EscapeToBlissSection from "@/components/about/EscapeToBlissSection";
import OurStorySection from "@/components/about/OurStorySection";
import AmenitiesSection from "@/components/about/AmenitiesSection";
import AwardSection from "@/components/AwardSection";
import GuestStoriesSection from "@/components/GuestStoriesSection";
import BookingBanner from "@/components/BookingBanner";

export default function AboutUsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenVideo = () => {
    setVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#3E3226]">
      {/* Availability Booking Pop-up Modal */}
      <AvailabilityModal isOpen={modalOpen} onClose={handleCloseModal} />

      {/* Video Lightbox Modal */}
      <VideoLightboxModal isOpen={videoOpen} onClose={handleCloseVideo} />

      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* 1. About Hero Section with luxury pool background */}
        <AboutHeroSection />

        {/* 2. Escape to Bliss with video showcase & 4-stat counters */}
        <EscapeToBlissSection
          onOpenModal={handleOpenModal}
          onOpenVideo={handleOpenVideo}
        />

        {/* 3. Our Story narrative & Founder James Thompson pull-quote */}
        <OurStorySection />

        {/* 4. Curated 5 circular amenities showcase */}
        <AmenitiesSection onOpenModal={handleOpenModal} />

        {/* 5. Award-winning escape accreditations (wood-50 background) */}
        <AwardSection variant="wood-50" />

        {/* 6. Guest Stories & 8-photo lifestyle gallery */}
        <GuestStoriesSection />

        {/* 7. Book Your Stay CTA Banner */}
        <BookingBanner onOpenModal={handleOpenModal} />
      </main>

      {/* Luxury Resort Footer */}
      <Footer />
    </div>
  );
}
