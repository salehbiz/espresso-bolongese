import React from "react";

export default function WellnessHeroSection() {
  return (
    <section
      id="home"
      className="relative pt-[220px] pb-28 sm:pb-36 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[520px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448fa589de5d04ae340c8_wellness-hero-image.webp")`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-10 text-center">
        <h1 className="font-cardo text-5xl sm:text-7xl md:text-8xl text-white font-normal mb-6 tracking-tight">
          Wellness
        </h1>
        <p className="font-urbanist text-white/90 text-base sm:text-lg md:text-xl max-w-[640px] mx-auto font-light leading-relaxed">
          Wellness is not an indulgence — it is a way of life. our holistic offerings are designed to restore balance, inspire clarity, and leave you renewed.
        </p>
      </div>
    </section>
  );
}
