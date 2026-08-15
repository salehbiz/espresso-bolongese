"use client";

import React from "react";

export default function AboutHeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902077c6f843df425c2883f_about-hero.webp")`,
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 py-32 sm:py-40 flex flex-col items-center justify-center text-center z-10">
        {/* 5-Star Review Badge */}
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

        {/* Heading */}
        <div className="max-w-[800px] mx-auto mb-6">
          <h1 className="white-text text-white text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[1.05] tracking-tight font-normal">
            Asatha is where <em className="italic">you feel restored.</em>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="large-paragraph text-white/90 text-base sm:text-lg md:text-xl max-w-[620px] mx-auto font-normal leading-relaxed">
          A haven where thoughtful design and unspoiled surroundings create an
          experience of quiet luxury.
        </p>
      </div>
    </section>
  );
}
