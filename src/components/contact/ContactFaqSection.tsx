"use client";

import React, { useState } from "react";

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can I book my stay at Asatha?",
      a: "You can book directly on our website using the Book Now button, or contact our reservations team via email or WhatsApp for personalized assistance.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit cards, international debit cards, and secure bank transfers. For on-site payments, we also accept digital wallets.",
    },
    {
      q: "Can I modify my booking after confirmation?",
      a: "Yes, bookings can be modified up to 7 days before your arrival date, subject to availability and any applicable rate changes.",
    },
    {
      q: "What is the cancellation policy at Asatha?",
      a: "Cancellations made 14 days prior to arrival are free of charge. Cancellations within 14 days may incur one night’s stay as a fee. No-shows will be charged the full amount.",
    },
    {
      q: "Do you offer seasonal promotions or packages?",
      a: "Yes, we offer exclusive seasonal deals, wellness packages, and honeymoon specials throughout the year.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section py-24 sm:py-32 bg-[#FAF7F2]">
      <div className="container max-w-[900px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#3E3226]">Help &amp; FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#E5DCCE] pb-4 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-3 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-urbanist text-base sm:text-lg font-medium text-[#3E3226] group-hover:text-[#8C7355] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 flex items-center justify-center shrink-0 text-[#3E3226] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#8C7355]" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.43906 12.1382L15.8191 4.73778C16.0607 4.49531 16.0603 4.10275 15.8178 3.86069C15.5753 3.61881 15.1826 3.61944 14.9407 3.86194L7.99997 10.8219L1.05925 3.86169C0.817375 3.61922 0.424846 3.61859 0.182346 3.86044C0.0607843 3.98178 2.86102e-06 4.14075 2.86102e-06 4.29972C2.86102e-06 4.45828 0.0603781 4.61662 0.181096 4.73774L7.56091 12.1382C7.6771 12.255 7.83522 12.3206 7.99997 12.3206C8.16472 12.3206 8.32266 12.2548 8.43906 12.1382Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-4 font-urbanist text-sm sm:text-base text-[#3E3226] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
