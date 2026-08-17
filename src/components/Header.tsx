"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AirbaseIcon, CloseIcon } from "./Icons";

interface HeaderProps {
  onOpenModal: () => void;
  theme?: "light" | "dark";
}

export default function Header({ onOpenModal, theme = "light" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDarkHeader = theme === "dark" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Left Menu Items (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-start">
              <Link
                href="/about-us"
                className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isDarkHeader
                    ? "text-[#3E3226] hover:text-[#8C7355]"
                    : "text-white hover:text-white/80"
                }`}
              >
                About us
              </Link>
              <Link
                href="/dining"
                className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isDarkHeader
                    ? "text-[#3E3226] hover:text-[#8C7355]"
                    : "text-white hover:text-white/80"
                }`}
              >
                Dining
              </Link>
            </nav>

            {/* Centered Brand Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center justify-center shrink-0 px-4"
              aria-label="Espresso Bolognese Home"
            >
              <img
                src="/images/logo.svg"
                alt="Espresso Bolognese Logo"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Right Menu Items & Actions */}
            <div className="flex items-center gap-5 sm:gap-6 flex-1 justify-end">
              <nav className="hidden lg:flex items-center gap-8">
                <Link
                  href="/wellness"
                  className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isDarkHeader
                      ? "text-[#3E3226] hover:text-[#8C7355]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  Wellness
                </Link>
                <Link
                  href="/contact-us"
                  className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isDarkHeader
                      ? "text-[#3E3226] hover:text-[#8C7355]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  Contact Us
                </Link>
              </nav>

              {/* Check Availability Sharp Double-Text Button */}
              <button
                onClick={onOpenModal}
                className={`webflow-button shrink-0 ${
                  isDarkHeader ? "" : "btn-white"
                }`}
              >
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Check Availability</span>
                  <span className="btn-text btn-text-2">Check Availability</span>
                </div>
              </button>

              {/* Menu Toggle Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className={`flex items-center gap-2 px-2 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer ${
                  isDarkHeader
                    ? "text-[#3E3226] hover:text-[#8C7355]"
                    : "text-white hover:text-white/80"
                }`}
                aria-label="Open menu"
              >
                <span>MENU</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer matching Webflow navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-[420px] bg-[#FAF7F2] h-full shadow-2xl p-8 sm:p-12 flex flex-col justify-between overflow-y-auto z-10 border-l border-[#E5DCCE]">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#E5DCCE]">
                <img
                  src="/images/logo.svg"
                  alt="Espresso Bolognese Logo"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[#3E3226] hover:text-[#8C7355] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Menu Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {[
                  { name: "About us", href: "/about-us" },
                  { name: "Dining", href: "/dining" },
                  { name: "Wellness", href: "/wellness" },
                  { name: "Contact Us", href: "/contact-us" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-2xl font-semibold text-[#3E3226] hover:text-[#8C7355] transition-colors py-1 block"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="mt-12 pt-8 border-t border-[#E5DCCE]">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenModal();
                }}
                className="webflow-button w-full mb-6"
              >
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Check Availability</span>
                  <span className="btn-text btn-text-2">Check Availability</span>
                </div>
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px bg-[#D4C5B3] flex-1" />
                  <span className="text-xs text-[#3E3226] uppercase tracking-wider font-semibold">
                    Or booking with partners
                  </span>
                  <div className="h-px bg-[#D4C5B3] flex-1" />
                </div>

                <div className="flex items-center justify-center gap-3">
                  {[
                    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c7d0e0fb2320b9ae4e_instagram-image1.webp",
                    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c718ea9eeea142e979_instagram-image2.webp",
                    "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f4c78759ebf0ba955745_instagram-image3.webp",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Partner"
                      className="w-12 h-12 object-cover rounded-xs border border-[#E5DCCE]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
