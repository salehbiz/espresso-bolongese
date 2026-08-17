"use client";

import React from "react";

interface AboutMentorSectionProps {
  onOpenModal: () => void;
}

export default function AboutMentorSection({
  onOpenModal,
}: AboutMentorSectionProps) {
  return (
    <section className="py-24 sm:py-36 bg-[#3E3226] text-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="space-y-6 max-w-[580px]">
            <h2 className="text-white">
              About our{" "}
              <em className="text-[#FAF7F2] font-normal italic">
                villas and resort
              </em>
            </h2>

            <div className="space-y-4">
              <p className="large-paragraph text-[#FAF7F2]/90">
                Every villa at Asatha has been thoughtfully crafted, blending
                modern design with timeless character. No two spaces are
                alike—each reflects its own unique story, with details that
                honor the spirit of Asatha and the calm beauty of its
                surroundings.
              </p>
              <p className="large-paragraph text-[#FAF7F2]/90">
                Set on dramatic cliffs overlooking the Indian Ocean, Asatha
                brings together the artistry of boutique living and the
                serenity of nature. Here, architecture, landscape, and
                hospitality come together in perfect harmony to create an
                experience unlike any other.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="webflow-button btn-white"
              >
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Explore ASATHA Story</span>
                  <span className="btn-text btn-text-2">Explore ASATHA Story</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full">
            <div className="img-zoom-container relative w-full h-[380px] sm:h-[480px] lg:h-[540px] overflow-hidden shadow-xs bg-[#FAF7F2]/20">
              <img
                src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901b6e63083c65c64e02108_about-mentor.webp"
                alt="About Asatha Resort and villas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
