"use client";

import React from "react";

interface AwardSectionProps {
  variant?: "white" | "wood-50";
}

export default function AwardSection({ variant = "white" }: AwardSectionProps) {
  const awards = [
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901e38431f0faeff57e1390_award-image1.svg",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901e384dcfc2232898bd0df_award-image2.svg",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901e3843661147d5d1e9f4f_award-image3.svg",
  ];

  const bgClass = variant === "wood-50" ? "bg-[#FAF7F2]" : "bg-white";

  return (
    <section className={`py-20 sm:py-28 ${bgClass} border-t border-[#F4ECE1]`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          {/* Left Text */}
          <div className="max-w-[560px]">
            <h2 className="text-[#3E3226] text-3xl sm:text-4xl md:text-[46px] mb-3">
              An Award-winning escape
            </h2>
            <p className="large-paragraph award-paragraph text-[#7A6F64]">
              Wake up to endless ocean horizons and sunsets painted just for you,
              from the comfort of your private Uluwatu villa.
            </p>
          </div>

          {/* Right Award Logos */}
          <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12">
            {awards.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Award recognition ${i + 1}`}
                className="h-12 sm:h-16 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
