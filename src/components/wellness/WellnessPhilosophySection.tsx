import React from "react";

export default function WellnessPhilosophySection() {
  const images = [
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f2c9ec3991ead719f9_wellness-philosophy1.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f1f9c27c1f9ff98121_wellness-philosophy2.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f07b937f505f8231ba_wellness-philosophy3.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f2dedb2207c5be11de_wellness-philosophy4.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f40e9ee5234941ff91_wellness-philosophy5.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f3a7fc1ee3da7292c6_wellness-philosophy6.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f4dabb058030babecc_wellness-philosophy7.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f5ba58c3bb564e259e_wellness-philosophy8.webp",
  ];

  return (
    <section className="section py-24 sm:py-32 bg-[#8C7355] text-white overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8 mb-16">
        <div className="text-center max-w-[620px] mx-auto">
          <h2 className="text-white mb-4">
            Our Wellness <em className="text-[#FAF7F2] font-normal italic">Philosophy</em>
          </h2>
          <p className="large-paragraph text-[#FAF7F2]/90 leading-relaxed">
            We believe true wellbeing comes from harmony — of body, mind, and nature. Every treatment, ritual, and practice is crafted to reconnect you with yourself and the beauty around you.
          </p>
        </div>
      </div>

      {/* 8-Photo Horizontal Gallery Strip */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-none">
        <div className="flex gap-4 sm:gap-6 min-w-max px-5 sm:px-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="img-zoom-container relative h-[260px] sm:h-[320px] w-[200px] sm:w-[260px] overflow-hidden shadow-xs bg-[#FAF7F2]/20 shrink-0"
            >
              <img
                src={src}
                alt={`Wellness Philosophy ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
