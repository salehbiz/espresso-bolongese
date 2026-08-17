"use client";

import React, { useState } from "react";

interface GuestStoriesSectionProps {
  variant?: "white" | "wood-50";
}

export default function GuestStoriesSection({
  variant = "white",
}: GuestStoriesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      quote:
        "“Every corner of Espresso Bolognese felt intentional - beautiful yet effortless. Three nights here reminded me how to slow down and breathe again.”",
      name: "Daniel Roberts",
      details: "FROM UK · Stayed in Ocean Suite",
    },
    {
      quote:
        "“The quiet wasn’t silence, it was music. Waking up to soft light and freshly roasted espresso made this trip unforgettable.”",
      name: "Amara Patel",
      details: "FROM India · Stayed in Garden Villa",
    },
    {
      quote:
        "“I’ve traveled often, but never felt this cared for. The staff remembered my name, my coffee, even my favorite view.”",
      name: "Luca Moretti",
      details: "FROM Italy · Stayed in Horizon Pavilion",
    },
    {
      quote:
        "“Espresso Bolognese felt like a pause from life, but one that gave me more energy than before. I left lighter, calmer, and deeply inspired.”",
      name: "Sofia Klein",
      details: "FROM Germany · Stayed in Serenity Suite",
    },
    {
      quote:
        "“It was more than a resort—it felt like home, but more peaceful, more beautiful, more complete.”",
      name: "Kenji Tanaka",
      details: "FROM Japan · Stayed in The Residence",
    },
  ];

  const galleryCols = [
    [
      "/images/stories/story-1.jpg",
      "/images/stories/story-2.jpg",
    ],
    [
      "/images/stories/story-3.jpg",
      "/images/stories/story-4.jpg",
    ],
    [
      "/images/stories/story-5.jpg",
      "/images/stories/story-6.jpg",
    ],
    [
      "/images/stories/story-7.jpg",
      "/images/stories/story-8.jpg",
    ],
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className="section py-28 sm:py-36 bg-[#FAF7F2] text-[#3E3226]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="large-paragraph mb-2 text-[#3E3226] font-semibold">
            200+ happy guests so far
          </p>
          <h2 className="text-[#3E3226] font-bold">
            Guest <em className="text-[#8C7355] font-normal italic">stories</em>
          </h2>
        </div>

        {/* Testimonial Quote Card with Arrows */}
        <div className="relative max-w-[900px] mx-auto mb-20 px-10 sm:px-16">
          <div className="text-center">
            {/* Top Stars & Brand Logo */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src="/images/logo.svg"
                alt="Brand logo"
                className="h-6 w-auto"
              />
              <div className="w-8 h-px bg-[#E5DCCE]" />
              <img
                src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901bbcc9476bdcaad055331_bddc6d983660d93780c71901fcd8217f_guest-story-review-star.svg"
                alt="5 Stars"
                className="h-3.5 sm:h-4 w-auto"
              />
            </div>

            {/* Testimonial Quote */}
            <p className="font-heading text-2xl sm:text-3xl md:text-[34px] text-[#3E3226] leading-relaxed font-semibold mb-6">
              {stories[currentSlide].quote}
            </p>

            {/* Guest Info */}
            <div>
              <div className="font-body text-base font-bold text-[#3E3226] mb-1">
                {stories[currentSlide].name}
              </div>
              <div className="small-paragraph text-[#4E3F32] font-semibold uppercase tracking-wider text-xs">
                {stories[currentSlide].details}
              </div>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[#3E3226] hover:text-[#8C7355] transition-colors cursor-pointer"
            aria-label="Previous story"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75813 13.2316L19.709 0.316633C20.1333 -0.106263 20.8203 -0.105552 21.2439 0.318821C21.6671 0.74314 21.666 1.4305 21.2417 1.85373L9.06172 14L21.2421 26.1463C21.6664 26.5696 21.6675 27.2565 21.2443 27.6809C21.0319 27.8936 20.7538 28 20.4756 28C20.1981 28 19.921 27.8943 19.709 27.6831L6.75813 14.7684C6.55376 14.5651 6.43908 14.2884 6.43908 14C6.43908 13.7117 6.55409 13.4353 6.75813 13.2316Z" fill="currentColor"/>
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#3E3226] hover:text-[#8C7355] transition-colors cursor-pointer"
            aria-label="Next story"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2419 13.2316L8.29105 0.316633C7.86673 -0.106263 7.17975 -0.105552 6.75614 0.318821C6.33286 0.74314 6.33395 1.4305 6.75833 1.85373L18.9383 14L6.75789 26.1463C6.33357 26.5696 6.33248 27.2565 6.7557 27.6809C6.96805 27.8936 7.24625 28 7.52444 28C7.80192 28 8.07902 27.8943 8.29099 27.6831L21.2419 14.7684C21.4462 14.5651 21.5609 14.2884 21.5609 14C21.5609 13.7117 21.4459 13.4353 21.2419 13.2316Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* 8-Photo Lifestyle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {galleryCols.map((col, cIdx) => (
            <div key={cIdx} className="flex flex-col gap-4 sm:gap-6">
              {col.map((imgSrc, rIdx) => (
                <div
                  key={rIdx}
                  className="img-zoom-container relative h-[200px] sm:h-[260px] md:h-[320px] w-full overflow-hidden shadow-xs bg-[#E5DCCE]"
                >
                  <img
                    src={imgSrc}
                    alt={`Guest experience photo ${cIdx * 2 + rIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
