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
    <div className="relative min-h-screen bg-white text-[#3E3226]">
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
