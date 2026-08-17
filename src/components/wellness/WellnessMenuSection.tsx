"use client";

import React, { useState } from "react";

interface TreatmentItem {
  name: string;
  duration: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  titleHighlight: string;
  image: string;
  alt: string;
  items: TreatmentItem[];
}

export default function WellnessMenuSection() {
  const [activeTab, setActiveTab] = useState<
    "Traditional Therapies" | "Aroma Rituals" | "Wellness Packages"
  >("Traditional Therapies");

  const menuData: Record<
    "Traditional Therapies" | "Aroma Rituals" | "Wellness Packages",
    MenuCategory
  > = {
    "Traditional Therapies": {
      title: "Traditional",
      titleHighlight: "Therapies",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f870262b8c8c6faf57_wellness-therapies-menu.webp",
      alt: "Traditional Therapies Foot Reflexology",
      items: [
        {
          name: "Foot Reflexology",
          duration: "(45 min)",
          description: "Gentle pressure points to relieve tension and restore energy",
          price: "$50.00",
        },
        {
          name: "Balinese Herbal",
          duration: "(45 min)",
          description: "Heated herbal poultices soothe muscles and ease circulation",
          price: "$80.00",
        },
        {
          name: "Full Body Stretch",
          duration: "(2 hrs)",
          description: "Assisted stretches to enhance flexibility and deep relaxation",
          price: "$120.00",
        },
      ],
    },
    "Aroma Rituals": {
      title: "Aroma",
      titleHighlight: "Rituals",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448852b47cd5596d8dbec_wellness-rituals-menu.webp",
      alt: "Aroma Rituals Bath and Oils",
      items: [
        {
          name: "Aromatherapy",
          duration: "(60 min)",
          description: "Healing oils and flowing strokes for complete calm",
          price: "$90.00",
        },
        {
          name: "Flower Essence Bath",
          duration: "(30 min)",
          description: "A fragrant soak infused with local botanicals",
          price: "$80.00",
        },
      ],
    },
    "Wellness Packages": {
      title: "Wellness",
      titleHighlight: "Packages",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f8c62a04332f1b566f_wellness-packages-menu.webp",
      alt: "Wellness Packages Couple Spa",
      items: [
        {
          name: "Rejuvenation Journey",
          duration: "(3 hrs)",
          description: "Body scrub, aromatherapy massage, and nourishing facial",
          price: "$220.00",
        },
        {
          name: "Couples Harmony",
          duration: "(2.5 hrs)",
          description: "Side-by-side massage, flower bath, and sparkling wine",
          price: "$280.00",
        },
      ],
    },
  };

  const currentCategory = menuData[activeTab];

  return (
    <section id="menu" className="section py-24 sm:py-32 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <h2 className="text-[#3E3226] mb-4">
            Browse our <em className="wood-700-text font-cardo italic">Menus</em>
          </h2>
          <p className="large-paragraph text-[#7A6F64] leading-relaxed">
            Each ritual is thoughtfully designed to restore balance, blending traditional techniques with contemporary luxury.
          </p>
        </div>

        {/* Tab Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-16">
          {(
            [
              "Traditional Therapies",
              "Aroma Rituals",
              "Wellness Packages",
            ] as const
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer border ${
                activeTab === tab
                  ? "bg-[#8C7355] text-white border-[#8C7355] shadow-sm"
                  : "bg-[#FAF7F2] text-[#8C7355] border-[#E5DCCE] hover:border-[#8C7355]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 2-Column Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Menu Items Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-cardo text-3xl sm:text-4xl text-[#3E3226] mb-8 pb-4 border-b border-[#E5DCCE]">
              {currentCategory.title}{" "}
              <em className="wood-700-text font-cardo italic">
                {currentCategory.titleHighlight}
              </em>
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-[#F4ECE1] last:border-0 transition-opacity duration-300"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h4 className="font-cardo text-xl sm:text-2xl text-[#3E3226] font-normal">
                      {item.name}{" "}
                      <em className="font-cardo italic text-[#8C7355]">
                        {item.duration}
                      </em>
                    </h4>
                    <span className="font-urbanist text-base sm:text-lg font-semibold text-[#8C7355] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-urbanist text-sm sm:text-base text-[#7A6F64] font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-urbanist text-xs sm:text-sm text-[#8C7355] italic mt-8">
              *All treatments are subject to availability and advance booking is recommended.
            </p>
          </div>

          {/* Feature Image Right Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="img-zoom-container relative h-[380px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden shadow-xs bg-[#FAF7F2] border border-[#E5DCCE]">
              <img
                key={currentCategory.image}
                src={currentCategory.image}
                alt={currentCategory.alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
