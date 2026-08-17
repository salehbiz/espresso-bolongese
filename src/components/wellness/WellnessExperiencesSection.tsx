import React from "react";

export default function WellnessExperiencesSection() {
  const experiences = [
    {
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f61e38e9f9f082ab7d_wellness-experience-image1.webp",
      titlePrefix: "The",
      titleHighlight: "Asatha Spa",
      description: "A tranquil haven offering bespoke therapies inspired by Balinese traditions and modern techniques",
    },
    {
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f61cccd96728251133_wellness-experience-image2.webp",
      titlePrefix: "Yoga &",
      titleHighlight: "Meditation",
      description: "Perched above the ocean, our open-air pavilion invites you to flow with the rhythm of nature.",
    },
    {
      image: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/690448f7fc5606fa6c56b4f6_wellness-experience-image3.webp",
      titlePrefix: "Holistic",
      titleHighlight: "Healing",
      description: "Discover sound therapy, breathwork, and energy-balancing sessions guided by experienced practitioners.",
    },
  ];

  return (
    <section className="section py-24 sm:py-32 bg-[#FAF7F2]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-[500px] mx-auto">
          <h2 className="text-[#3E3226]">
            Wellness <em className="wood-700-text font-cardo italic">Experiences</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="img-zoom-container relative h-[280px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden shadow-xs bg-[#FAF7F2] mb-6">
                <img
                  src={exp.image}
                  alt={`${exp.titlePrefix} ${exp.titleHighlight}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-cardo text-2xl sm:text-3xl text-[#3E3226] mb-3">
                  {exp.titlePrefix}{" "}
                  <em className="wood-700-text font-cardo italic">
                    {exp.titleHighlight}
                  </em>
                </h3>
                <p className="font-urbanist text-sm sm:text-base text-[#3E3226] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
