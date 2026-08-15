import React from "react";

export default function DiningHeroSection() {
  return (
    <section
      id="home"
      className="relative pt-[220px] pb-28 sm:pb-36 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[520px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdf99469a7160660050_dining-hero-backround.webp")`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-10 text-center">
        <h1 className="font-cardo text-5xl sm:text-7xl md:text-8xl text-white font-normal mb-6 tracking-tight">
          Dining
        </h1>
        <p className="font-urbanist text-white/90 text-base sm:text-lg md:text-xl max-w-[640px] mx-auto font-light leading-relaxed">
          Dining is more than a meal — it is a journey. Heritage and global flavors, our chefs craft every dish with passion, precision, and artistry.
        </p>
      </div>
    </section>
  );
}
