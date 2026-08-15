"use client";

import React, { useEffect, useRef, useState } from "react";
import { ClocheIcon } from "./Icons";

export default function DiningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable > 0) {
            const current = -rect.top;
            const progress = Math.min(Math.max(current / totalScrollable, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="dining"
      className="dine-section relative w-full h-[220vh] bg-[#ffffff]"
    >
      {/* Sticky Fullscreen Center Card */}
      <div className="dine-wrapper sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-20">
        <div className="container max-w-[1440px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          <div className="dine-heading-div pointer-events-auto max-w-[540px] mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 bg-white/80 sm:bg-white/60 backdrop-blur-xs py-8 px-6 sm:px-10 border border-[#e4dcc4]/50 shadow-sm">
            {/* Cloche Icon */}
            <div className="dine-icon text-[#8B6843]">
              <ClocheIcon />
            </div>

            {/* Heading */}
            <h2 className="text-[#3D3D3D]">
              Dine at Asatha
            </h2>

            {/* Subtitle */}
            <p className="large-paragraph text-[#6D6D6D] text-center max-w-[440px]">
              An intimate journey of flavors, crafted with care and served against a
              backdrop of timeless beauty.
            </p>

            {/* Explore Button */}
            <div className="dine-button-div pt-2">
              <a
                href="#contact"
                className="webflow-button"
              >
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Explore Our Restaurant</span>
                  <span className="btn-text btn-text-2">Explore Our Restaurant</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Collage Images with Differential Parallax Speed */}
      <div className="dine-image-div absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
        {/* Image 1: Top Left (Juice and fruit) */}
        <div
          className="absolute left-[3%] md:left-[6%] w-[32vw] md:w-[28vw] max-w-[440px] h-[35vh] md:h-[47vh] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out"
          style={{
            top: "14%",
            transform: `translate3d(0, ${scrollProgress * -260}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f08b496dcedc1793e8_dine-image1.webp"
            alt="Dining with fresh juice"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2: Top Center Above Heading */}
        <div
          className="absolute left-1/2 w-[240px] sm:w-[350px] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out hidden sm:block"
          style={{
            top: "5%",
            transform: `translate3d(-50%, ${scrollProgress * -360}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f01f4160f9e639168e_dine-image2.webp"
            alt="Artisanal cuisine delicacy"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 3: Top Right (Candlelight table) */}
        <div
          className="absolute right-[3%] md:right-[6%] w-[32vw] md:w-[28vw] max-w-[440px] h-[35vh] md:h-[47vh] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out"
          style={{
            top: "12%",
            transform: `translate3d(0, ${scrollProgress * -230}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f0265f2697a20cd6af_dine-image3.webp"
            alt="Candlelit dinner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4: Middle Right (Sunny terrace lunch) */}
        <div
          className="absolute right-[4%] md:right-[10%] w-[32vw] md:w-[28vw] max-w-[440px] h-[36vh] md:h-[47vh] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out"
          style={{
            top: "46%",
            transform: `translate3d(0, ${scrollProgress * -380}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f22c6a234d7a794e39_dine-image5.webp"
            alt="Terrace lunch"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5: Middle Left (Floating pool breakfast) */}
        <div
          className="absolute left-[4%] md:left-[8%] w-[38vw] md:w-[36vw] max-w-[540px] h-[42vh] md:h-[55vh] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out"
          style={{
            top: "50%",
            transform: `translate3d(0, ${scrollProgress * -440}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f176b6fb4ec2ef724f_dine-image6.webp"
            alt="Floating pool breakfast"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 6: Bottom Left */}
        <div
          className="absolute left-0 w-[34vw] md:w-[32vw] max-w-[480px] h-[38vh] md:h-[50vh] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out"
          style={{
            top: "76%",
            transform: `translate3d(0, ${scrollProgress * -560}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f0753fe2df16f80bc4_dine-image4.webp"
            alt="Family dining dinner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 7: Bottom Right */}
        <div
          className="absolute right-[20px] w-[33vw] md:w-[30vw] max-w-[460px] h-[40vh] md:h-[52vh] overflow-hidden bg-[#e4dcc4] shadow-md transition-transform duration-75 ease-out"
          style={{
            top: "74%",
            transform: `translate3d(0, ${scrollProgress * -510}px, 0)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901a1f08c81a35743950548_dine-image8.webp"
            alt="Evening cocktails toast"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
