"use client";

import React from "react";

interface EscapeToBlissSectionProps {
  onOpenModal: () => void;
  onOpenVideo: () => void;
}

export default function EscapeToBlissSection({
  onOpenModal,
  onOpenVideo,
}: EscapeToBlissSectionProps) {
  const stats = [
    { number: "4.9/5", label: "Guest Rating" },
    { number: "15k+", label: "Reviews Worldwide" },
    { number: "2,348", label: "Villas and Resorts Worldwide" },
    { number: "20+", label: "Activities" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="max-w-[420px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D]">
              Escape to <em className="wood-700-text">Bliss.</em>
            </h2>
          </div>

          <p className="large-paragraph text-[#6D6D6D] max-w-[540px] leading-relaxed">
            Discover a perfect balance of refined luxury and natural wonder at
            Asatha. Every moment here is designed to linger — from sunrise yoga
            to sunsets that silence the world around you.
          </p>

          <div className="shrink-0">
            <button onClick={onOpenModal} className="webflow-button">
              <div className="btn-text-wrapper">
                <span className="btn-text btn-text-1">Reserve Stay</span>
                <span className="btn-text btn-text-2">Reserve Stay</span>
              </div>
            </button>
          </div>
        </div>

        {/* Video Wrapper */}
        <div className="relative w-full h-[380px] sm:h-[500px] md:h-[650px] lg:h-[750px] bg-black overflow-hidden group cursor-pointer shadow-lg mb-16 sm:mb-20">
          {/* Autoplay Looping Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69020d2253548aefcd2e3d9e_about-video-poster-00001.jpg"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onClick={onOpenVideo}
          >
            <source
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69020d2253548aefcd2e3d9e_about-video-transcode.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Overlay on Hover */}
          <div
            className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300"
            onClick={onOpenVideo}
          />

          {/* Centered Play Button Icon */}
          <button
            onClick={onOpenVideo}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer"
            aria-label="Play Asatha resort video"
          >
            <svg
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-lg"
            >
              <path
                d="M77.8281 39.015L11.1954 0.544197C10.5836 0.191036 9.88966 0.00512485 9.18328 0.00514984C8.4769 0.00517484 7.78297 0.191135 7.17124 0.544339C6.5595 0.897544 6.05151 1.40555 5.69833 2.0173C5.34514 2.62905 5.15921 3.32298 5.15921 4.02936V80.9706C5.1566 81.678 5.34091 82.3736 5.69348 82.9869C6.04606 83.6002 6.55438 84.1094 7.16702 84.4632C7.77965 84.8169 8.47485 85.0025 9.18227 85.0012C9.88968 84.9999 10.5842 84.8117 11.1955 84.4558L77.8281 45.985C78.4398 45.6318 78.9478 45.1238 79.3011 44.5121C79.6543 43.9003 79.8402 43.2064 79.8402 42.5C79.8402 41.7936 79.6543 41.0997 79.3011 40.4879C78.9478 39.8762 78.4398 39.3682 77.8281 39.015ZM10.4717 78.7394V6.26061L73.2399 42.5L10.4717 78.7394Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        {/* 4 Counter Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-[1200px] mx-auto text-center lg:text-left">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <h2 className="font-urbanist text-4xl sm:text-5xl md:text-[56px] font-medium text-[#3D3D3D] leading-none tracking-tight">
                {item.number}
              </h2>
              <div className="font-urbanist text-base sm:text-lg text-[#6D6D6D] font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
