"use client";

import React from "react";

interface BookingBannerProps {
  onOpenModal: () => void;
  backgroundImage?: string;
}

export default function BookingBanner({
  onOpenModal,
  backgroundImage = "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901e68b93f128fb517b66ee_cta-background.webp",
}: BookingBannerProps) {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center bg-black">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Luxury pool night view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-5 text-center text-white">
        {/* Rating Stars */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="flex gap-1 text-[#FFAC26]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-sm font-semibold tracking-wide">
            4.9 | 15k+ Reviews
          </span>
        </div>

        <h2 className="white-text text-white text-4xl sm:text-6xl md:text-7xl mb-6">
          Book Your Stay
        </h2>

        <p className="large-paragraph cta-paragraph text-white text-center max-w-[520px] mx-auto font-normal leading-relaxed mb-10">
          Boutique villas, bespoke experiences, and timeless comfort - crafted
          for those who seek more than just a stay.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onOpenModal}
            className="webflow-button btn-white shadow-xl"
          >
            <div className="btn-text-wrapper">
              <span className="btn-text btn-text-1">Check Availability</span>
              <span className="btn-text btn-text-2">Check Availability</span>
            </div>
          </button>

          <a
            href="#packages"
            className="text-sm font-medium text-white hover:text-white/80 underline underline-offset-8 transition-colors"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
}
