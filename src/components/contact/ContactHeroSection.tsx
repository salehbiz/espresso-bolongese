import React from "react";

export default function ContactHeroSection() {
  return (
    <section id="home" className="pt-[140px] sm:pt-[160px] pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column: Heading (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-cardo text-5xl sm:text-6xl md:text-7xl text-[#3D3D3D] font-normal mb-4 tracking-tight">
              Reach <em className="wood-700-text font-cardo italic">out us</em>
            </h1>
            <p className="font-urbanist text-base sm:text-lg text-[#6D6D6D] max-w-[480px] font-normal leading-relaxed">
              Your dream retreat at Asatha is just a conversation away.
            </p>
          </div>

          {/* Right Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            {/* Contact */}
            <div>
              <h3 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553B] mb-3">
                Contact
              </h3>
              <div className="space-y-1 text-sm font-urbanist text-[#3D3D3D]">
                <div>
                  P: <span className="font-medium text-[#71553B]">+62 812 3456 7890</span>
                </div>
                <div>
                  E: <span className="font-medium text-[#71553B]">stay@asatha.com</span>
                </div>
                <div>
                  Reception: <span className="font-medium text-[#71553B]">WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Find Us */}
            <div>
              <h3 className="font-urbanist text-xs font-bold uppercase tracking-widest text-[#71553B] mb-3">
                Find Us
              </h3>
              <p className="font-urbanist text-sm text-[#3D3D3D] leading-relaxed">
                123 Jl. Labuan Sait No. 88, Pecatu, South Kuta, Badung Regency, Bali 80361, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Full-Bleed Landscape Photography */}
        <div className="img-zoom-container relative h-[360px] sm:h-[480px] md:h-[580px] w-full overflow-hidden shadow-xs bg-[#f8f6ef]">
          <img
            src="https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6904a441db80d8a84b2705e2_contact-image.webp"
            alt="Asatha Resort Pool Complex"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
