"use client";

import React from "react";
import { SlashDivider } from "./Icons";

interface PackagesSectionProps {
  onOpenModal: () => void;
}

export default function PackagesSection({ onOpenModal }: PackagesSectionProps) {
  const packages = [
    {
      title: "Cultural Package",
      price: "$2,999",
      logo: "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6901db4df6a6ac87fe71ec5a_Package-logo4.svg",
      description:
        "Journey into Bali’s heart with visits to temples, waterfalls, and hidden beaches. Authentic cultural encounters paired with luxury comfort create a memorable escape.",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6901db499926a8e428d175dc_Package-thumb-image4.jpg",
      reverse: false,
    },
    {
      title: "Wellness Retreat",
      price: "$2,999",
      logo: "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6901db2bc4faa81c5e7c306a_Package-logo3.svg",
      description:
        "Our curated wellness package invites you to slow down and reconnect. From daily yoga by the ocean to personalized spa treatments and nourishing meals, every moment is designed to leave you feeling refreshed and renewed.",
      image:
        "https://cdn.prod.website-files.com/6900a5e3933b5a6e9ca7f33a/6901db2593373b5f43274eeb_Package-thumb-image3.jpg",
      reverse: true,
    },
  ];

  return (
    <section id="packages" className="section py-28 sm:py-36 bg-[#3E3226] text-white">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-white font-bold">
            Popular <em className="text-[#FAF7F2] font-normal italic">Packages</em>
          </h2>
        </div>

        {/* 2 Package Cards across Full 1440px Width */}
        <div className="space-y-12 sm:space-y-16 w-full">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch w-full ${
                pkg.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Card with White Background */}
              <div
                className={`bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-lg text-[#3E3226] ${
                  pkg.reverse ? "lg:col-start-2" : ""
                }`}
              >
                <div>
                  {/* Badge & Price Line */}
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={pkg.logo}
                      alt="Package Badge"
                      className="h-6 w-auto"
                    />
                    <SlashDivider />
                    <div className="flex items-baseline gap-1 text-sm text-[#3E3226]">
                      <span className="text-[#4E3F32] font-medium">from </span>
                      <strong className="font-bold text-[#3E3226] text-base">
                        {pkg.price}
                      </strong>
                      <span className="text-[#4E3F32] font-medium">/night</span>
                    </div>
                  </div>

                  <h2 className="text-[#3E3226] text-3xl sm:text-4xl md:text-[44px] mb-5 font-bold">
                    {pkg.title}
                  </h2>

                  <p className="large-paragraph package-paragraph mb-8 text-[#3E3226] leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={onOpenModal}
                    className="webflow-button"
                  >
                    <div className="btn-text-wrapper">
                      <span className="btn-text btn-text-1">Explore Package</span>
                      <span className="btn-text btn-text-2">Explore Package</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`w-full ${
                  pkg.reverse ? "lg:col-start-1" : ""
                }`}
              >
                <div className="img-zoom-container relative w-full h-full min-h-[340px] sm:min-h-[460px] shadow-xs bg-[#E5DCCE]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
