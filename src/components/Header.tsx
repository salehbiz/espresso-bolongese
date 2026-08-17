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
            ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="relative z-10 flex items-center">
              <img
                src={
                  isDarkHeader
                    ? "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f22a1108ac6f33917525_logo-dark.svg"
                    : "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/68ff686aec269ed2084b2db0_logo-light.svg"
                }
                alt="Asatha Resort Logo"
                className="h-7 sm:h-8 w-auto transition-opacity duration-300"
              />
            </Link>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Check Availability Sharp Double-Text Button */}
              <button
                onClick={onOpenModal}
                className={`webflow-button ${
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
                className={`flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer ${
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
                  src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6901f22a1108ac6f33917525_logo-dark.svg"
                  alt="Logo"
                  className="h-7 w-auto"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[#3E3226] hover:text-[#8C7355] transition-colors"
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
                    className="font-cardo text-2xl text-[#3E3226] hover:text-[#8C7355] transition-colors py-1 block"
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

                <a
                  href="https://www.airbnb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 border border-[#D4C5B3] text-xs font-semibold uppercase tracking-wider text-[#3E3226] hover:border-[#8C7355] hover:text-[#8C7355] transition-colors bg-transparent"
                >
                  <AirbaseIcon className="text-[#8C7355]" />
                  <span>Booking with Airbase</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
