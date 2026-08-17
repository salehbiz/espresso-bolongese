"use client";

import React from "react";
import { WaveDivider } from "./Icons";

export default function AboutSection() {
  return (
    <section id="about" className="section pt-28 sm:pt-32 pb-0 bg-[#FAF7F2]">
      {/* Top Container with Header & Copy */}
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8 mb-16 sm:mb-20 text-center">
        <div className="flex flex-col items-center justify-start gap-8 max-w-[700px] mx-auto">
          {/* Wave SVG Icon */}
          <div className="svg-icon text-[#3E3226]">
            <WaveDivider />
          </div>

          {/* Heading */}
          <div className="home-about-heading-div max-w-[400px] mx-auto">
            <h2 className="text-[#3E3226]">
              Timeless luxury, <br className="hidden sm:inline" />
              <em className="text-[#8C7355]">crafted for you</em>
            </h2>
          </div>

          {/* 2 Paragraphs */}
          <div className="space-y-4 max-w-[560px] mx-auto">
            <p className="large-paragraph home-about-paragraph text-[#7A6F64]">
              Asatha was created with one vision: to redefine the art of luxury
              hospitality. Rooted in warmth and inspired by nature, we offer not
              just a destination, but a sanctuary where every moment is designed
              to be unforgettable.
            </p>
            <p className="large-paragraph home-about-paragraph text-[#7A6F64]">
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
          <div className="md:col-span-3 img-zoom-container h-[300px] sm:h-[380px] lg:h-[400px] w-full bg-[#E5DCCE]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690088c0717b22bee39e5ed1_home-about-image1.webp"
              alt="Resort pool loungers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 1, Image 2 (Spans 3 Columns = 50%) */}
          <div className="md:col-span-3 img-zoom-container h-[300px] sm:h-[380px] lg:h-[400px] w-full bg-[#E5DCCE]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690088bed5355dda34e35de4_home-about-image2.webp"
              alt="Resort evening patio lounge"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* Row 2, Image 3 (Spans 2 Columns = 33.333%) */}
          <div className="md:col-span-2 img-zoom-container h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-[#E5DCCE]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690088be458ff5d001975320_home-about-image3.webp"
              alt="Beach umbrellas and ocean view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2, Image 4 (Spans 2 Columns = 33.333%) */}
          <div className="md:col-span-2 img-zoom-container h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-[#E5DCCE]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690088be388271ca4925ad72_home-about-image4.webp"
              alt="Resort tropical architecture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2, Image 5 (Spans 2 Columns = 33.333%) */}
          <div className="md:col-span-2 img-zoom-container h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-[#E5DCCE]">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690088bfdd72485041516c8e_home-about-image5.webp"
              alt="Infinity pool view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
