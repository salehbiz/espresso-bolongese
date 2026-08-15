"use client";

import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const avatars = [
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff537e88835c5190b950a2_hero-customer-image1.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff537e8700e8c47341f900_hero-customer-image2.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff537e97c995f03887244f_hero-customer-image3.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff537f0fa3c7b94663d9cd_hero-customer-image4.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff537ebd34c47772623885_hero-customer-image5.webp",
  ];

  return (
    <section
      id="home"
      className="hero-section relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Video with padding-bottom to place content at lower third */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center pb-20 sm:pb-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff4980c48c6f7c6be6a0a2_hero-video-poster-00001.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff4980c48c6f7c6be6a0a2_hero-video-transcode.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle dark luxury overlay matching Webflow linear-gradient */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content aligned at lower portion of screen */}
        <div className="relative z-10 w-full max-w-[1440px] px-5 sm:px-8 mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col items-center text-center gap-8 max-w-[850px] mx-auto">
            {/* Customer Rating Pill */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/25 bg-black/20 backdrop-blur-xs transition-all duration-1000 ease-out"
              style={{
                transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
                opacity: loaded ? 1 : 0,
                filter: loaded ? "blur(0px)" : "blur(5px)",
              }}
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Customer avatar"
                    className="inline-block h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="small-paragraph hero-review-text text-white text-sm font-semibold tracking-wide">
                Trusted by <span className="hero-review-number font-bold text-white">+159,648</span> Customer’s
              </span>
            </div>

            {/* Hero Main Headline */}
            <div
              className="hero-heading-div max-w-[700px] mx-auto transition-all duration-1000 delay-150 ease-out"
              style={{
                transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
                opacity: loaded ? 1 : 0,
                filter: loaded ? "blur(0px)" : "blur(5px)",
              }}
            >
              <h1 className="white-text text-white">
                Where time slows, <br />
                <em>Comfort deepens</em>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="large-paragraph hero-paragraph text-white text-center max-w-[350px] mx-auto leading-relaxed transition-all duration-1000 delay-300 ease-out"
              style={{
                color: "#ffffff",
                transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
                opacity: loaded ? 1 : 0,
                filter: loaded ? "blur(0px)" : "blur(5px)",
              }}
            >
              Private spaces, thoughtful service, and the quiet luxury of feeling at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
