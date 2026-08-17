"use client";

import React, { useState, useRef } from "react";

interface RoomsSliderProps {
  onOpenModal: () => void;
}

export default function RoomsSlider({ onOpenModal }: RoomsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const villas = [
    {
      title: "Amber Suite",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6900aaa202b02d4533e8aa49_villa-thumb9.jpg",
      specs: "Spacious Layout · Designer Furnishings · Evening Service",
    },
    {
      title: "Skyline Villa",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6900aa53b7193ea188ff9961_villa-thumb8.jpg",
      specs: "Rooftop Deck · Sunset Views · Open Living Space",
    },
    {
      title: "Clifftop Mansion",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6900a92856ca0f3aa6f4bcff_villa-thumb7.jpg",
      specs: "5 Bedrooms · Infinity Edge Pool · Private Cinema",
    },
    {
      title: "Sunset Estate",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6900a88798695eabecb0ad27_villa-thumb6.jpg",
      specs: "Clifftop Views · 4 Bedrooms · Infinity Pool · Private Chef",
    },
    {
      title: "Serenity Suite",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6900a83fe8812c140add6479_villa-thumb5.jpg",
      specs: "Private Balcony · Lounge Area · Dedicated Concierge",
    },
  ];

  // Touch and Mouse drag handling
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && currentIndex < villas.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        isDragging.current = false;
      } else if (diff > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
        isDragging.current = false;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section id="rooms" className="section py-28 sm:py-36 bg-[#3E3226] text-white overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="common-heading-div mb-12 sm:mb-16">
          <h2 className="text-white">
            Rooms &amp; Suites
          </h2>
          <p className="large-paragraph text-[#FAF7F2]/90">
            Discover spaces designed for unhurried living.
          </p>
        </div>
      </div>

      {/* Villa Slider Wrapper */}
      <div className="villa-wrapper w-full overflow-hidden">
        <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
          <div
            className="villa-slider-mask relative overflow-visible cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(-${currentIndex * 490}px, 0, 0)`,
              }}
            >
              {villas.map((villa, idx) => (
                <div
                  key={idx}
                  className="villa-slider w-[320px] sm:w-[420px] md:w-[450px] shrink-0 mr-8 md:mr-10 flex flex-col group cursor-pointer"
                  onClick={onOpenModal}
                >
                  {/* Sharp Image with Hover Zoom */}
                  <div className="villa-thumb-image-div img-zoom-container relative h-[280px] sm:h-[360px] md:h-[400px] w-full overflow-hidden mb-6 bg-[#FAF7F2]/20">
                    <img
                      src={villa.image}
                      alt={villa.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Title & Specs */}
                  <div className="villa-slider-detail-div mb-4">
                    <div className="h6-heading text-white group-hover:text-[#FAF7F2] transition-colors mb-2">
                      {villa.title}
                    </div>
                    <p className="small-paragraph villa-paragraph text-[#FAF7F2]/80 max-w-[320px] leading-relaxed">
                      {villa.specs}
                    </p>
                  </div>

                  {/* View Details Link */}
                  <div>
                    <span className="font-heading text-base font-semibold text-white border-b border-white pb-0.5 group-hover:text-[#FAF7F2] group-hover:border-[#FAF7F2] transition-colors inline-block">
                      View Details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Nav Dots */}
          <div className="villa-slide-nav flex justify-center items-center gap-2 mt-12">
            {villas.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
