import React from "react";

const partners = [
  {
    name: "TRANSFORM",
    src: "https://i.pinimg.com/736x/ac/35/22/ac352247ee522da0fcdbf6818bc01992.jpg",
  },
  {
    name: "Unilever",
    src: "https://i.pinimg.com/736x/4e/8a/9f/4e8a9f7132bcb166350f0b89f5d1ddd2.jpg",
  },
  {
    name: "UK International Development",
    src: "https://i.pinimg.com/1200x/33/91/ad/3391adaea241e1b4a761ac8aea799388.jpg",
  },
  {
    name: "EY",
    src: "https://i.pinimg.com/1200x/15/12/95/1512959db3ec17244a8c9f81d580cd29.jpg",
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#0b2e13] sm:text-3xl md:text-4xl lg:text-[46px]">
            Supporting Tribal Coffee Farmers Livelihoods
          </h2>

          <p className="mt-5 text-base font-bold text-black sm:text-lg md:text-xl lg:text-[24px]">
            (Project under the TRANSFORM programme funded by Unilever and FCDO)
          </p>
        </div>

        {/* Logos */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-12 md:mt-28 md:gap-x-12 lg:mt-36 lg:flex-nowrap lg:justify-between lg:gap-x-8">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex w-[42%] items-center justify-center sm:w-[40%] md:w-[45%] lg:w-auto lg:flex-1"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className={`h-auto w-full object-contain ${
                  partner.name === "TRANSFORM"
                    ? "max-w-[220px]"
                    : partner.name === "Unilever"
                    ? "max-w-[220px]"
                    : partner.name === "UK International Development"
                    ? "max-w-[500px]"
                    : "max-w-[200px]"
                }`}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}