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
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  const instaImages = [
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690200930bda57da8b31c90e_insta-post1.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902009350c2d4f50e19c049_insta-post2.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902009333f9651a09fe15f8_insta-post3.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69020093293bc9a4e972097a_insta-post4.webp",
    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690200933593cbb25333e916_insta-post5.webp",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f2efe2] pt-20 pb-12 border-t border-[#e4dcc4]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Newsletter Section */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 shadow-xs border border-[#e4dcc4] mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-[540px]">
            <h3 className="wood-800-text text-3xl sm:text-4xl mb-3">
              Get inspired
            </h3>
            <p className="large-paragraph newsletter-paragraph text-[#71553b]">
              To receive updates about exclusive experiences, events, new
              destinations and more, please register your interest.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[300px] sm:min-w-[420px]">
            {subscribed ? (
              <div className="bg-[#f8f6ef] text-[#71553b] text-sm font-semibold py-4 px-6 text-center border border-[#e4dcc4]">
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
                  className="px-5 py-3.5 bg-[#f8f6ef] border border-[#e4dcc4] text-sm text-[#3D3D3D] focus:outline-none focus:border-[#71553b] flex-1"
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
        <div className="w-full h-px bg-[#e4dcc4] mb-16" />

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
              <span className="text-xs font-semibold text-[#71553b]">
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
                  className="w-10 h-10 flex items-center justify-center border border-[#e4dcc4] text-[#71553b] hover:border-[#71553b] hover:text-[#3D3D3D] transition-colors bg-[#f8f6ef]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553b]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Dining", href: "/dining" },
                { name: "Packages", href: "/#packages" },
                { name: "Wellness", href: "/#wellness" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="large-paragraph footer-text-link text-[#71553b] hover:text-[#3D3D3D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553b]">
              More
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Contact", href: "#contact" },
                { name: "News & Blogs", href: "#blog" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="large-paragraph footer-text-link text-[#71553b] hover:text-[#3D3D3D] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553b]">
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
                    className="large-paragraph footer-text-link text-[#71553b] hover:text-[#3D3D3D] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553b]">
              Contact
            </h4>
            <p className="large-paragraph footer-paragraph text-[#71553b] text-sm leading-relaxed">
              123 Jl. Labuan Sait No. 88, Pecatu, South Kuta, Badung Regency, Bali 80361, Indonesia
            </p>
            <div className="space-y-1 text-sm pt-2">
              <div className="text-[#71553b]">
                P: <span className="text-[#3D3D3D] font-medium">+62 812 3456 7890</span>
              </div>
              <div className="text-[#71553b]">
                E: <span className="text-[#3D3D3D] font-medium">stay@asatha.com</span>
              </div>
              <div className="text-[#71553b]">
                Reception: <span className="text-[#3D3D3D] font-medium">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e4dcc4] mb-10" />

        {/* 5-Photo Instagram Strip with Floating Pill */}
        <div className="relative mb-12">
          {/* Floating Instagram Follow Button */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 z-10 hidden sm:block">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white border border-[#e4dcc4] text-xs font-bold uppercase tracking-wider text-[#3D3D3D] hover:bg-[#8B6843] hover:text-white transition-colors shadow-md"
            >
              <SocialInstagramIcon />
              <span>Follow @ASATHA</span>
            </a>
          </div>

          {/* 5-Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {instaImages.map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="img-zoom-container relative h-32 sm:h-44 w-full overflow-hidden bg-[#e4dcc4] shadow-xs"
              >
                <img
                  src={src}
                  alt={`Instagram highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e4dcc4] mb-8" />

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#71553bb3]">
          <div>
            © ASATHA - VILLA AND RESORT.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://flowcub.com/?utm_source=webflow&utm_medium=asatha-luxury"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3D3D3D] hover:text-[#71553b] transition-colors"
            >
              <span>Made by</span>
              <FlowcubIcon />
              <span className="font-semibold">Flowcub design.</span>
            </a>

            <a
              href="https://webflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3D3D3D] hover:text-[#71553b] transition-colors"
            >
              <span>Powered by</span>
              <WebflowLogoIcon />
              <span className="font-semibold">Webflow.</span>
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 flex items-center justify-center bg-[#71553b] hover:bg-[#8B6843] text-white transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <TopArrowIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
