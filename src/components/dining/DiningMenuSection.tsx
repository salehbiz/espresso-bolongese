"use client";

import React, { useState } from "react";

interface MenuItem {
  name: string;
  nameHighlight?: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  image: string;
  alt: string;
  items: MenuItem[];
}

export default function DiningMenuSection() {
  const [activeTab, setActiveTab] = useState<"Starters" | "Mains" | "Desserts">("Starters");

  const menuData: Record<"Starters" | "Mains" | "Desserts", MenuCategory> = {
    Starters: {
      title: "Starters",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdda444a222ed11e975_dining-starter-menu.webp",
      alt: "Starters Soup Dish",
      items: [
        {
          name: "Balinese",
          nameHighlight: "Tomato Soup",
          description: "Slow-roasted tomatoes, ginger, and coconut cream",
          price: "$18.00",
        },
        {
          name: "Green",
          nameHighlight: "Mango Salad",
          description: "Crisp mango, fresh herbs, roasted cashews",
          price: "$20.00",
        },
        {
          name: "Chicken",
          nameHighlight: "Satay",
          description: "Charcoal-grilled skewers, spiced peanut sauce",
          price: "$24.00",
        },
        {
          name: "Crispy",
          nameHighlight: "Spring Rolls",
          description: "Vegetable filling, chili-lime dip, Chopped mushroom",
          price: "$16.00",
        },
      ],
    },
    Mains: {
      title: "Mains",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdee0762cbda79848af_dining-main-menu.webp",
      alt: "Mains Seafood Dish",
      items: [
        {
          name: "Seared",
          nameHighlight: "Sea Bass",
          description: "Coconut curry, kaffir lime, young vegetables",
          price: "$54.00",
        },
        {
          name: "Braised",
          nameHighlight: "Rib Rendang",
          description: "Balinese spices, served with turmeric rice",
          price: "$62.00",
        },
        {
          name: "Vegetarian",
          nameHighlight: "Nasi Campur",
          description: "Traditional Balinese plate with assorted plant-based",
          price: "$38.00",
        },
        {
          name: "Grilled Lobster",
          nameHighlight: "with Tamarind Glaze",
          description: "Fragrant jasmine rice and seasonal greens",
          price: "$68.00",
        },
      ],
    },
    Desserts: {
      title: "Desserts",
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdea92da38549744024_dining-dessert-menu.webp",
      alt: "Dessert Sweet Dish",
      items: [
        {
          name: "Coconut",
          nameHighlight: "Crème Brûlée",
          description: "Caramelized top, tropical twist on a classic",
          price: "$18.00",
        },
        {
          name: "Mango",
          nameHighlight: "Sticky Rice",
          description: "Mango, sweet coconut, pandan-infused rice",
          price: "$16.00",
        },
        {
          name: "Chocolate",
          nameHighlight: "Lava Cake",
          description: "Spiced chocolate, vanilla bean ice cream",
          price: "$20.00/per serve",
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
          <p className="large-paragraph text-[#3E3226] leading-relaxed">
            Discover a selection of our finest culinary offerings, carefully crafted to delight every palate.
          </p>
        </div>

        {/* Tab Filter Navigation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16">
          {(["Starters", "Mains", "Desserts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-sm sm:text-base font-semibold tracking-wider uppercase transition-all cursor-pointer border ${
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
            <h3 className="wood-700-text font-cardo italic text-3xl sm:text-4xl mb-8 pb-4 border-b border-[#E5DCCE]">
              {currentCategory.title}
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
                      {item.nameHighlight && (
                        <em className="font-cardo italic text-[#8C7355]">
                          {item.nameHighlight}
                        </em>
                      )}
                    </h4>
                    <span className="font-urbanist text-base sm:text-lg font-semibold text-[#8C7355] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-urbanist text-sm sm:text-base text-[#3E3226] font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-urbanist text-xs sm:text-sm text-[#8C7355] italic mt-8">
              *Menu items subject to seasonal changes.
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
