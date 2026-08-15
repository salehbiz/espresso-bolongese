import React from "react";

export default function ChefQuoteSection() {
  return (
    <section className="section py-20 sm:py-28 bg-white border-t border-[#f2efe2]">
      <div className="container max-w-[900px] mx-auto px-5 sm:px-8 text-center">
        {/* 5 Stars */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901bbcc9476bdcaad055331_bddc6d983660d93780c71901fcd8217f_guest-story-review-star.svg"
            alt="5 Gold Stars"
            className="h-4 sm:h-5 w-auto"
          />
        </div>

        {/* Quote */}
        <p className="font-cardo text-2xl sm:text-3xl md:text-4xl text-[#3D3D3D] italic leading-relaxed font-normal mb-6">
          &ldquo;Each dish carries the essence of our land and culture, blending tradition with innovation to create something truly unforgettable.&rdquo;
        </p>

        {/* Attribution */}
        <div className="font-urbanist text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#71553B]">
          Chef Aruna – Executive Chef
        </div>
      </div>
    </section>
  );
}
