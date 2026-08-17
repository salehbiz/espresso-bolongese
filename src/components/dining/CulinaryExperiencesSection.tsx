import React from "react";

export default function CulinaryExperiencesSection() {
  return (
    <section className="section py-24 sm:py-32 bg-[#FAF7F2] text-[#3E3226]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Left */}
          <div className="max-w-[540px] order-2 lg:order-1">
            <h2 className="text-[#3E3226] mb-6">
              Culinary <em className="text-[#8C7355] font-normal italic">Experiences</em>
            </h2>
            <p className="large-paragraph text-[#7A6F64] leading-relaxed mb-8">
              From hands-on cooking journeys with our chefs to intimate cliffside dinners beneath the stars. Each moment is designed to connect you with Bali’s culture, nature, and spirit — a celebration of flavor, place, and memory.
            </p>
            <div>
              <a href="#menu" className="webflow-button inline-block">
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Browse menu</span>
                  <span className="btn-text btn-text-2">Browse menu</span>
                </div>
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="img-zoom-container relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden shadow-xs bg-[#E5DCCE] order-1 lg:order-2">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdf84e7810e19da0faf_culinary-experience-image.webp"
              alt="Culinary Experiences"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
