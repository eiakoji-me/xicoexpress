"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { KeenSliderInstance } from "keen-slider";

// Autoplay plugin
function AutoplayPlugin(slider: KeenSliderInstance) {
  let timeout: ReturnType<typeof setTimeout>;
  const clearNextTimeout = () => clearTimeout(timeout);
  const nextTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  };

  slider.on("created", () => {
    nextTimeout();
    slider.container.addEventListener("mouseover", clearNextTimeout);
    slider.container.addEventListener("mouseout", nextTimeout);
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const brands = [
  { name: "DHL", src: "/logos/dhl.svg" },
  { name: "UPS", src: "/logos/ups.svg" },
  { name: "JTExpress", src: "/logos/jt_express_logo.svg" },
  { name: "FedEx", src: "/logos/fedex.svg" },
  { name: "Estafeta", src: "/logos/estafeta.svg" },
];

export default function TrustedBrands() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
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
    },
    [AutoplayPlugin]
  );

  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8 px-4">
        <h2 className="text-xl font-semibold">
          Trabajamos con los mejores carriers
          <br />
          nacionales e internacionales
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div ref={sliderRef} className="keen-slider">
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
      </div>
    </section>
  );
}
