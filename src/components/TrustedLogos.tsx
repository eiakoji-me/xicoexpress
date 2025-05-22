"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const brands = [
  { name: "DHL", src: "/logos/dhl.svg" },
  { name: "UPS", src: "/logos/ups.svg" },
  { name: "JTExpress", src: "/logos/jt_express_logo.svg" },
  { name: "FedEx", src: "/logos/fedex.svg" },
  { name: "Estafeta", src: "/logos/estafeta.svg" },
];

export default function TrustedBrands() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
    slides: { perView: 1, spacing: 8 },
  });

  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8 px-4">
        <h2 className="text-xl font-semibold">
          Trabajamos con los mejores carriers
          <br />
          nacionales e internacionales
        </h2>
      </div>
      <div ref={sliderRef} className="keen-slider px-4">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="keen-slider__slide flex justify-center items-center h-16"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={120}
              height={64}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
