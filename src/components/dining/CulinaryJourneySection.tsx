import React from "react";

export default function CulinaryJourneySection() {
  const images = [
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdc84e7810e19da0e99_culinary-image1.webp",
      alt: "People dining outdoors",
      offset: false,
    },
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdc956a03185f9038f0_culinary-image2.webp",
      alt: "Table setting with ocean view",
      offset: true,
    },
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdb9ee3c88df5b34b18_culinary-image3.webp",
      alt: "Friends dining by the sea",
      offset: false,
    },
    {
      src: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69034fdb559b3eb422fb872a_culinary-image4.webp",
      alt: "Breakfast in bed tray",
      offset: true,
    },
  ];

  return (
    <section className="section py-24 sm:py-32 bg-[#f8f6ef]">
      <div className="container max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-[500px] mx-auto">
          <h2 className="text-[#3D3D3D]">
            A culinary <em className="wood-700-text font-cardo italic">Journey awaits</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`img-zoom-container relative h-[320px] sm:h-[380px] w-full overflow-hidden shadow-xs bg-[#e4dcc4] ${
                item.offset ? "lg:-translate-y-5" : ""
              } transition-transform duration-300`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
