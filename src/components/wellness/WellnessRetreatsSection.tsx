import React from "react";

export default function WellnessRetreatsSection() {
  return (
    <section className="section py-24 sm:py-32 bg-[#3E3226] text-white">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Left */}
          <div className="max-w-[540px]">
            <h2 className="text-white mb-6">
              Wellness <em className="text-[#FAF7F2] font-normal italic">retreats</em>
            </h2>
            <p className="large-paragraph text-[#FAF7F2]/90 leading-relaxed mb-8">
              From sunrise yoga overlooking the cliffs to healing spa rituals guided by ancient traditions. Every moment is crafted to restore balance, awaken the senses, and reconnect you with the rhythm of Bali.
            </p>
            <div>
              <a href="#menu" className="webflow-button btn-white inline-block">
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Browse menu</span>
                  <span className="btn-text btn-text-2">Browse menu</span>
                </div>
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="img-zoom-container relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden shadow-xs bg-[#FAF7F2]/20">
            <img
              src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f94f681a1ab84a9d84_wellness-retreats-image.webp"
              alt="Wellness Retreats"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
