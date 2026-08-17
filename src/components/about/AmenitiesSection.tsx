"use client";

import React from "react";

interface AmenitiesSectionProps {
  onOpenModal: () => void;
}

export default function AmenitiesSection({ onOpenModal }: AmenitiesSectionProps) {
  const amenities = [
    {
      name: "Infinity Pool",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902f0fa29ef888a2a1591ea_amenity-image1.webp",
      icon: (
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M0.573866 34.4393C-0.189806 33.6774 -0.191368 32.4408 0.570448 31.6771C1.33217 30.9134 2.56879 30.9119 3.33256 31.6736C3.65336 31.9936 4.0765 32.1772 4.4935 32.1775H4.49437C4.92885 32.1775 5.3435 32.0009 5.66205 31.6802C6.71928 30.6155 8.1182 30.0291 9.60121 30.0291H9.60404C11.0678 30.0297 12.4591 30.6138 13.5215 31.6738C13.8331 31.9847 14.2746 32.173 14.7023 32.1776C15.1495 32.1818 15.622 31.9893 15.9385 31.6736C17.0017 30.613 18.3909 30.0291 19.8511 30.0291H19.8602C21.303 30.0313 22.7301 30.6308 23.7754 31.6738C24.0875 31.9852 24.5496 32.1775 24.9837 32.1775H24.9943C25.4247 32.1743 25.884 31.9813 26.1924 31.6736C27.3022 30.5665 28.7312 29.9314 30.1128 29.9314C31.4919 29.9314 32.9194 30.5665 34.0292 31.6737C34.3418 31.9855 34.8066 32.1777 35.2459 32.1777C35.2519 32.1777 35.2578 32.1777 35.2636 32.1776C35.6928 32.1726 36.1349 31.9843 36.4462 31.6737C37.556 30.5665 38.9878 29.9314 40.3747 29.9314C41.7688 29.9313 43.157 30.5501 44.2832 31.6738C44.5948 31.9846 45.0632 32.1775 45.5058 32.1775H45.5068C45.9238 32.1772 46.3469 31.9936 46.6677 31.6736C47.4315 30.912 48.6681 30.9135 49.4298 31.6771C50.1916 32.4408 50.1901 33.6774 49.4264 34.4393C48.3795 35.4834 46.9518 36.0829 45.5092 36.0838C45.5081 36.0838 45.507 36.0838 45.5058 36.0838C44.0233 36.0838 42.5724 35.4845 41.5245 34.4393C41.1525 34.0681 40.7121 33.8377 40.3748 33.8377C40.0304 33.8377 39.5713 34.0737 39.2051 34.4391C38.1746 35.4672 36.7547 36.0666 35.3096 36.0837C35.2881 36.0839 35.2666 36.0841 35.2452 36.0841C33.766 36.0841 32.3206 35.4867 31.2705 34.4392C30.8986 34.0682 30.455 33.8377 30.1129 33.8377C29.7683 33.8377 29.3231 34.0682 28.9512 34.4392C27.9141 35.4736 26.4823 36.0729 25.0226 36.0836C23.5312 36.0962 22.0747 35.495 21.0165 34.4392C20.6963 34.1196 20.2725 33.936 19.8538 33.9354C19.8531 33.9354 19.8522 33.9354 19.8514 33.9354C19.4327 33.9354 19.023 34.1142 18.6973 34.4391C17.6333 35.5004 16.1591 36.0958 14.6601 36.0837C13.2151 36.0681 11.7946 35.4687 10.7626 34.4392C10.4418 34.1191 10.0189 33.9355 9.60219 33.9354C9.60189 33.9354 9.6016 33.9354 9.60131 33.9354C9.16674 33.9354 8.75228 34.1119 8.43393 34.4326C7.3765 35.4975 5.97738 36.0838 4.49418 36.0838C4.4932 36.0838 4.49232 36.0838 4.49135 36.0838C3.02728 36.0828 1.63607 35.4987 0.573866 34.4393Z" />
        </svg>
      ),
    },
    {
      name: "Wellness & Spa Space",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902f0f8d81435b5257d3a9c_amenity-image2.webp",
      icon: (
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M43.1641 50H11.7188C5.25703 50 0 44.743 0 38.2812V11.7188C0 5.25703 5.25703 0 11.7188 0H15.332C16.4107 0 17.2852 0.874414 17.2852 1.95312C17.2852 3.03184 16.4107 3.90625 15.332 3.90625H11.7188C7.41094 3.90625 3.90625 7.41094 3.90625 11.7188V29.5537C5.98105 27.6946 8.72021 26.5625 11.7188 26.5625H40.2344C43.4652 26.5625 46.0938 23.934 46.0938 20.7031V11.7188C46.0938 7.41094 42.5891 3.90625 38.2812 3.90625H35.9375C34.8588 3.90625 33.9844 3.03184 33.9844 1.95312C33.9844 0.874414 34.8588 0 35.9375 0H38.2812C44.743 0 50 5.25703 50 11.7188V20.7031C50 26.088 45.6192 30.4688 40.2344 30.4688H11.7188C7.41094 30.4688 3.90625 33.9734 3.90625 38.2812C3.90625 42.5891 7.41094 46.0938 11.7188 46.0938H43.1641C44.7795 46.0938 46.0938 44.7795 46.0938 43.1641C46.0938 41.5486 44.7795 40.2344 43.1641 40.2344H11.7188C10.64 40.2344 9.76562 39.36 9.76562 38.2812C9.76562 37.2025 10.64 36.3281 11.7188 36.3281H43.1641C44.2118 36.3281 45.2054 36.5651 46.0938 36.9883V33.9844C46.0938 32.9057 46.9682 32.0312 48.0469 32.0312C49.1256 32.0312 50 32.9057 50 33.9844V43.1641C50 46.9334 46.9334 50 43.1641 50Z" />
        </svg>
      ),
    },
    {
      name: "Oceanfront Yoga",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902f0f84e53103f11317a9a_amenity-image3.webp",
      icon: (
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M40.2544 0H13.6919C6.15322 0 0.0200195 6.1332 0.0200195 13.6719V38.2812C0.0200195 44.743 5.27705 50 11.7388 50H31.4653C37.9271 50 43.1841 44.743 43.1841 38.2812V19.0824C53.6955 15.5517 51.4677 0.260645 40.2544 0ZM39.2778 38.2812C39.2778 42.5891 35.7731 46.0938 31.4653 46.0938H11.7388C7.43096 46.0938 3.92627 42.5891 3.92627 38.2812V13.6719C3.77441 3.72773 18.672 -0.354297 19.5514 9.76562C19.5512 12.9965 16.9227 15.625 13.6918 15.625C12.6148 15.625 11.7387 14.7488 11.7387 13.6719C11.7387 12.5949 12.6148 11.7188 13.6918 11.7188C14.7705 11.7188 15.6449 10.8443 15.6449 9.76562C15.6449 8.68691 14.7705 7.8125 13.6918 7.8125C5.91875 8.13408 5.9207 19.2106 13.6918 19.5312H39.2777L39.2778 38.2812Z" />
        </svg>
      ),
    },
    {
      name: "Fitness Studio",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902f0f8f9f11f31c0a1c285_amenity-image4.webp",
      icon: (
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M4.71525 25.9498C1.66222 29.0028 1.66173 33.9448 4.71525 36.9983L13.0017 45.2847C16.0478 48.3307 21.0041 48.3308 24.0502 45.2847C27.0961 42.2387 27.0964 37.2824 24.0502 34.2362L21.2881 31.4741L31.474 21.288L34.2361 24.0502C37.2822 27.0963 42.2386 27.0963 45.2847 24.0502C48.3377 20.9971 48.3382 16.0551 45.2847 13.0016L36.9983 4.7152C33.9522 1.6692 28.9958 1.6691 25.9497 4.7152C22.9036 7.76139 22.9037 12.7176 25.9497 15.7637L28.7118 18.5258L18.526 28.7119L15.7639 25.9498C12.7177 22.9037 7.76134 22.9037 4.71525 25.9498Z" />
        </svg>
      ),
    },
    {
      name: "Children's play area",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6902f0f929ef888a2a1591d3_amenity-image5.webp",
      icon: (
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-10 h-10 text-white">
          <path d="M29.2969 19.5312C32.5277 19.5312 35.1562 16.9027 35.1562 13.6719C35.1562 11.708 34.1799 9.88467 32.5443 8.79424L20.8255 0.981641C19.862 0.339453 18.7391 0 17.5781 0C16.4172 0 15.2943 0.339453 14.3306 0.981738L2.61182 8.79424H2.61172C0.976367 9.88467 0 11.708 0 13.6719C0 16.2181 1.63301 18.389 3.90625 19.1953V32.4219C3.90625 34.9681 5.53926 37.139 7.8125 37.9453V44.1406C7.8125 45.2176 6.93633 46.0938 5.85938 46.0938C4.78066 46.0938 3.90625 46.9682 3.90625 48.0469C3.90625 49.1256 4.78066 50 5.85938 50Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#F4ECE1]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="max-w-[420px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3E3226]">
              Amenities
            </h2>
          </div>

          <p className="large-paragraph text-[#7A6F64] max-w-[540px] leading-relaxed">
            Luxury is found in details, both grand and subtle. Our curated
            facilities are designed to inspire balance and ease.
          </p>

          <div className="shrink-0">
            <button onClick={onOpenModal} className="webflow-button">
              <div className="btn-text-wrapper">
                <span className="btn-text btn-text-1">Reserve Stay</span>
                <span className="btn-text btn-text-2">Reserve Stay</span>
              </div>
            </button>
          </div>
        </div>

        {/* 5 Circular Amenity Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-5 group cursor-pointer"
              onClick={onOpenModal}
            >
              {/* Circular Image Mask */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden shadow-sm bg-[#F4ECE1]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300 rounded-full" />

                {/* Centered Amenity SVG Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Label Underneath */}
              <h3 className="font-urbanist text-base sm:text-lg font-medium text-[#3E3226] group-hover:text-[#8C7355] transition-colors leading-snug">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
