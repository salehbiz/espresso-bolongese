"use client";

import React, { useState } from "react";
import { CloseIcon, AirbaseIcon } from "./Icons";

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AvailabilityModal({
  isOpen,
  onClose,
}: AvailabilityModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    services: "",
    villa: "",
    room: "",
    checkIn: "",
    checkOut: "",
    adults: "2 Adults",
    children: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[620px] bg-white shadow-2xl p-8 sm:p-12 max-h-[90vh] overflow-y-auto border border-[#E5DCCE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#3E3226] hover:text-[#8C7355] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        {/* Heading */}
        <div className="mb-6">
          <h5 className="text-[#3E3226] text-3xl font-normal mb-1">
            Check <em className="wood-700-text">Availability</em>
          </h5>
          <p className="large-paragraph text-sm text-[#3E3226]">
            You’ll receive a confirmation within 24h.
          </p>
          <div className="w-full h-px bg-[#E5DCCE] mt-5" />
        </div>

        {submitted ? (
          <div className="bg-[#FAF7F2] border border-[#E5DCCE] p-8 text-center my-6">
            <h4 className="text-[#8C7355] text-2xl mb-2">
              Thank You!
            </h4>
            <p className="paragraph text-[#3E3226]">
              Your inquiry has been received! Our concierge will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Choose Services */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Choose Services*
                </label>
                <select
                  required
                  value={formData.services}
                  onChange={(e) =>
                    setFormData({ ...formData, services: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="Villas & Suites">Villas & Suites</option>
                  <option value="Dining">Dining</option>
                  <option value="Wellness">Wellness</option>
                </select>
              </div>

              {/* Choose Villas & Suites */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Choose Villas & Suites*
                </label>
                <select
                  required
                  value={formData.villa}
                  onChange={(e) =>
                    setFormData({ ...formData, villa: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="The Pavilion Residence">The Pavilion Residence</option>
                  <option value="Cliffside Villa">Cliffside Villa</option>
                  <option value="Oceanfront Pavilion">Oceanfront Pavilion</option>
                  <option value="Garden Villa">Garden Villa</option>
                  <option value="Serenity Suite">Serenity Suite</option>
                  <option value="Sunset Estate">Sunset Estate</option>
                  <option value="Clifftop Mansion">Clifftop Mansion</option>
                  <option value="Skyline Villa">Skyline Villa</option>
                  <option value="Amber Suite">Amber Suite</option>
                </select>
              </div>

              {/* Select Room */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Select Room*
                </label>
                <select
                  required
                  value={formData.room}
                  onChange={(e) =>
                    setFormData({ ...formData, room: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedroom">2 Bedroom</option>
                  <option value="3 Bedroom">3 Bedroom</option>
                  <option value="4 Bedroom">4 Bedroom</option>
                </select>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Check-in*
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, checkIn: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                />
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Check-out*
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({ ...formData, checkOut: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                />
              </div>

              {/* Adults */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Adults (Age 21+)*
                </label>
                <select
                  required
                  value={formData.adults}
                  onChange={(e) =>
                    setFormData({ ...formData, adults: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                >
                  <option value="2 Adults">2 Adults</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="4 Adults">4 Adults</option>
                  <option value="5 Adults">5 Adults</option>
                  <option value="5+ Adults">5+ Adults</option>
                </select>
              </div>

              {/* Children */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-1.5">
                  Children (Ages 2–12)*
                </label>
                <select
                  value={formData.children}
                  onChange={(e) =>
                    setFormData({ ...formData, children: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                >
                  <option value="">No children</option>
                  <option value="1 Child">1 Child</option>
                  <option value="2 Child">2 Child</option>
                  <option value="3 Child">3 Child</option>
                  <option value="3+ Child">3+ Child</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="webflow-button w-full mt-4"
            >
              <div className="btn-text-wrapper">
                <span className="btn-text btn-text-1">Check Availability</span>
                <span className="btn-text btn-text-2">Check Availability</span>
              </div>
            </button>
          </form>
        )}

        {/* Partner Booking */}
        <div className="mt-8 pt-6 border-t border-[#E5DCCE]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px bg-[#E5DCCE] flex-1" />
            <span className="text-xs text-[#3E3226] uppercase tracking-wider font-semibold">
              Or booking with partners
            </span>
            <div className="h-px bg-[#E5DCCE] flex-1" />
          </div>

          <a
            href="https://www.airbnb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 border border-[#D4C5B3] text-xs font-semibold uppercase tracking-wider text-[#3E3226] hover:border-[#8C7355] hover:text-[#8C7355] transition-colors bg-transparent"
          >
            <AirbaseIcon className="text-[#8C7355]" />
            <span>Booking with Airbase</span>
          </a>
        </div>
      </div>
    </div>
  );
}
