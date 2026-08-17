"use client";

import React from "react";

export default function OurStorySection() {
  return (
    <section className="relative bg-[#3E3226] text-white overflow-hidden py-24 sm:py-32 border-t border-[#4E3F32]">
      {/* Background Gradient & Image for Desktop Large Screens */}
      <div
        className="absolute inset-0 hidden lg:block bg-no-repeat bg-right bg-cover opacity-25"
        style={{
          backgroundImage: `linear-gradient(106deg, #3E3226 40%, rgba(62, 50, 38, 0.95) 48%, rgba(62, 50, 38, 0) 65%), url("https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69021780d95d14f02682f330_our-story-background.webp")`,
          backgroundPosition: "0 0, 50% 0",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 max-w-[580px] flex flex-col gap-10">
            {/* Top Heading & Intro */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-white">
                Our <em className="text-[#FAF7F2] font-normal italic">Story</em>
              </h2>
              <p className="large-paragraph text-[#FAF7F2]/90 leading-relaxed">
                We envisioned more than a resort. We created a haven where
                nature’s raw beauty and modern comfort exist in effortless
                harmony. Every villa, every pathway, every view is crafted to
                let you reconnect with yourself, your loved ones, and the
                timeless spirit.
              </p>
            </div>

            {/* Quote & Founder Bio */}
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-heading text-xl sm:text-2xl text-white font-medium leading-relaxed italic">
                “We wanted Asatha to feel less like a destination and more like
                a return to what matters most.”
              </p>

              <div className="flex items-center gap-3.5">
                <img
                  src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690219859d825f1f4be68df0_owner-image.png"
                  alt="James Thompson"
                  className="w-11 h-11 rounded-full object-cover border border-white/50"
                />
                <div className="text-xs sm:text-sm text-[#FAF7F2]/90 font-medium leading-tight">
                  <div className="font-semibold text-white">James Thompson</div>
                  <div>Founder · From London, UK · @ASATHA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mobile Image Fallback */}
          <div className="lg:hidden w-full overflow-hidden shadow-md">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69021780d95d14f02682f330_our-story-background.webp"
              alt="Asatha Resort Landscape"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
