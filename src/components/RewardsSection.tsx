"use client";

import React from "react";

export default function RewardsSection() {
  const rewards = [
    {
      title: "Travel, Earn, Indulge",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6900b498a58e8777723d5108_reward-image1.webp",
      description:
        "Every night at Asatha brings you closer to exclusive rewards. Collect points while you stay, dine, or rejuvenate at our spa—and spend them on the experiences you love most.",
    },
    {
      title: "Rewards beyond your stay",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6900b498ffacba2c653d5d88_reward-image2.webp",
      description:
        "Your benefits don’t end at check-out. Use or transfer points anytime with our select partners, or shop your favorite brands while staying connected to the Asatha lifestyle.",
    },
    {
      title: "A Universe of Privileges",
      image:
        "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6900b4984dba8d262522207b_reward-image3.webp",
      description:
        "From member-only offers to late check-out, priority upgrades, and bespoke experiences, Asatha Rewards ensures you’re always treated like a guest of honor.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-wood-50">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-[650px] mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-[#3D3D3D] mb-4">
            Asatha <em className="wood-700-text">Rewards</em>
          </h2>
          <p className="large-paragraph reward-paragraph text-center">
            A world of privileges, crafted to make every stay—and every day—more rewarding.
          </p>
        </div>

        {/* 3-Column Reward Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {rewards.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Image Container */}
              <div className="img-zoom-container relative h-[260px] sm:h-[320px] lg:h-[360px] w-full overflow-hidden mb-6 bg-[#e4dcc4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Description */}
              <div>
                <div className="h6-heading text-[#3D3D3D] mb-3">
                  {item.title}
                </div>
                <p className="paragraph text-[#6D6D6D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
