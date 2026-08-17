"use client";

import React from "react";
import { WaveDivider } from "./Icons";

export default function AboutSection() {
  return (
    <section id="about" className="section background-wood-50 padding-bottom pt-28 sm:pt-32 pb-0 bg-wood-50">
      {/* Top Container with Header & Copy */}
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8 mb-16 sm:mb-20 text-center">
        <div className="flex flex-col items-center justify-start gap-8 max-w-[700px] mx-auto">
          {/* Wave SVG Icon */}
          <div className="svg-icon text-[#3D3D3D]">
            <WaveDivider />
          </div>

          {/* Heading */}
          <div className="home-about-heading-div max-w-[400px] mx-auto">
            <h2 className="text-[#3D3D3D]">
              Timeless luxury, <br className="hidden sm:inline" />
              <em className="wood-700-text">crafted for you</em>
            </h2>
          </div>

          {/* 2 Paragraphs */}
          <div className="space-y-4 max-w-[560px] mx-auto">
            <p className="large-paragraph home-about-paragraph">
              Asatha was created with one vision: to redefine the art of luxury
              hospitality. Rooted in warmth and inspired by nature, we offer not
              just a destination, but a sanctuary where every moment is designed
              to be unforgettable.
            </p>
            <p className="large-paragraph home-about-paragraph">
              From serene suites to curated experiences, Asatha is more than a
              resort—it’s a retreat for the soul. Here, every detail is
              thoughtfully designed to celebrate the art of living beautifully.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Width Edge-To-Edge 5-Image Mosaic Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-0 w-full">
          {/* Row 1, Image 1 (Spans 3 Columns = 50%) */}
          <div className="md:col-span-3 img-zoom-container h-[300px] sm:h-[380px] lg:h-[400px] w-full bg-[#e4dcc4]">
            <img
              src="/images/Luxury_coffee_product_photoshoot_202608170611.jpeg"
              alt="Luxury coffee product photoshoot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 1, Image 2 (Spans 3 Columns = 50%) */}
          <div className="md:col-span-3 img-zoom-container h-[300px] sm:h-[380px] lg:h-[400px] w-full bg-[#e4dcc4]">
            <img
              src="/images/Iced_strawberry_matcha_in_glass_202608170611.jpeg"
              alt="Iced strawberry matcha in glass"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2, Image 3 (Spans 2 Columns = 33.333%) */}
          <div className="md:col-span-2 img-zoom-container h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-[#e4dcc4]">
            <img
              src="/images/Photographs_of_iced_blended_coffee_202608170610.jpeg"
              alt="Photographs of iced blended coffee"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2, Image 4 (Spans 2 Columns = 33.333%) */}
          <div className="md:col-span-2 img-zoom-container h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-[#e4dcc4]">
            <img
              src="/images/Iced_vanilla_latte_on_table_202608170610.jpeg"
              alt="Iced vanilla latte on table"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2, Image 5 (Spans 2 Columns = 33.333%) */}
          <div className="md:col-span-2 img-zoom-container h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-[#e4dcc4]">
            <img
              src="/images/Iced_coconut_matcha_latte_202608170610.jpeg"
              alt="Iced coconut matcha latte"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
