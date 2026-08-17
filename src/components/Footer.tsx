"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SocialInstagramIcon,
  SocialYouTubeIcon,
  SocialXIcon,
  SocialFacebookIcon,
  FlowcubIcon,
  WebflowLogoIcon,
  TopArrowIcon,
} from "./Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F4ECE1] pt-20 pb-12 border-t border-[#E5DCCE]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Newsletter Section */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 shadow-xs border border-[#E5DCCE] mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-[540px]">
            <h3 className="text-[#3E3226] text-3xl sm:text-4xl mb-3 font-bold">
              Get inspired
            </h3>
            <p className="large-paragraph newsletter-paragraph text-[#3E3226]">
              To receive updates about exclusive experiences, events, new
              destinations and more, please register your interest.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[300px] sm:min-w-[420px]">
            {subscribed ? (
              <div className="bg-[#FAF7F2] text-[#3E3226] text-sm font-semibold py-4 px-6 text-center border border-[#E5DCCE]">
                Thank you! Your submission has been received!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-0"
              >
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-3.5 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] flex-1 font-medium placeholder:text-[#8C7355]"
                />
                <button
                  type="submit"
                  className="webflow-button shrink-0"
                >
                  <div className="btn-text-wrapper">
                    <span className="btn-text btn-text-1">Reserve Stay</span>
                    <span className="btn-text btn-text-2">Reserve Stay</span>
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5DCCE] mb-16" />

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Brand & Reviews Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/">
              <img
                src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f22a1108ac6f33917525_logo-dark.svg"
                alt="Asatha Resort Logo"
                className="h-8 w-auto"
              />
            </Link>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex gap-1 text-[#FFAC26]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-[#3E3226]">
                4.9 | 15k+ Reviews
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: <SocialInstagramIcon />, href: "https://www.instagram.com/" },
                { icon: <SocialYouTubeIcon />, href: "https://www.youtube.com/" },
                { icon: <SocialXIcon />, href: "https://x.com/" },
                { icon: <SocialFacebookIcon />, href: "https://www.facebook.com/" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#E5DCCE] text-[#3E3226] hover:border-[#8C7355] hover:text-[#8C7355] transition-colors bg-[#FAF7F2]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#3E3226]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Dining", href: "/dining" },
                { name: "Wellness", href: "/wellness" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="large-paragraph footer-text-link text-[#3E3226] hover:text-[#8C7355] font-semibold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#3E3226]">
              Utility
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "404", href: "/404" },
                { name: "Style Guide", href: "#" },
                { name: "Changelog", href: "#" },
                { name: "Licenses", href: "#" },
                { name: "More Templates", href: "https://webflow.com/" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="large-paragraph footer-text-link text-[#3E3226] hover:text-[#8C7355] font-semibold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#3E3226]">
              Contact
            </h4>
            <p className="large-paragraph footer-paragraph text-[#3E3226] text-sm leading-relaxed font-medium">
              123 Jl. Labuan Sait No. 88, Pecatu, South Kuta, Badung Regency, Bali 80361, Indonesia
            </p>
            <div className="space-y-1 text-sm pt-2 font-medium">
              <div className="text-[#3E3226]">
                P: <span className="text-[#3E3226] font-bold">+62 812 3456 7890</span>
              </div>
              <div className="text-[#3E3226]">
                E: <span className="text-[#3E3226] font-bold">stay@asatha.com</span>
              </div>
              <div className="text-[#3E3226]">
                Reception: <span className="text-[#3E3226] font-bold">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5DCCE] mb-10" />

        {/* 5-Photo Instagram Strip with Floating Pill */}
        <div className="relative mb-12">
          {/* Floating Instagram Follow Button */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 z-10 hidden sm:block">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white border border-[#E5DCCE] text-xs font-bold uppercase tracking-wider text-[#3E3226] hover:bg-[#3E3226] hover:text-white transition-colors shadow-md"
            >
              <SocialInstagramIcon />
              <span>Instagram</span>
            </a>
          </div>

          {/* 5 Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c7d0e0fb2320b9ae4e_instagram-image1.webp",
              "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c718ea9eeea142e979_instagram-image2.webp",
              "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c78759ebf0ba955745_instagram-image3.webp",
              "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c73083c65c64188b43_instagram-image4.webp",
              "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c803ff24009bb3aa64_instagram-image5.webp",
            ].map((src, i) => (
              <div
                key={i}
                className="img-zoom-container relative h-32 sm:h-44 w-full overflow-hidden bg-[#E5DCCE] shadow-xs"
              >
                <img
                  src={src}
                  alt={`Instagram photo ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5DCCE] mb-8" />

        {/* Bottom Bar: Copyright & Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#3E3226] font-medium">
          <div>
            © {new Date().getFullYear()} Asatha Resort. All rights reserved. Powered by Webflow.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FlowcubIcon />
              <span className="font-bold text-[#3E3226]">TripAdvisor 5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <WebflowLogoIcon />
              <span className="font-bold text-[#3E3226]">Google 4.9</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center bg-[#3E3226] hover:bg-[#8C7355] text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <TopArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
