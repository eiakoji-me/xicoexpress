"use client";

import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Agilidad y confianza en cada envío.",
    description:
      "XicoExpress te conecta con tus paquetes a USA de forma rápida y segura.",
    image: "/images/van-placeholder.png",
  },
  {
    title: "Tu compra en USA, directo a tu puerta.",
    description: "Almacenamos y reenviamos tus paquetes sin complicaciones.",
    image: "/images/van-placeholder.png",
  },
  {
    title: "Servicio de recolección local",
    description: "Recibimos tus devoluciones de Shein, Temu y más.",
    image: "/images/van-placeholder.png",
  },
];

const Hero = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
    },
  });

  useEffect(() => {
    if (!slider) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 4000); // Change slide every 4 seconds
    };

    autoplay();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section className="bg-background py-10">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="max-w-5xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8">
              {/* Text Column */}
              <div className="md:w-[45%] text-center md:text-left">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  {slide.description}
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-accent transition-transform hover:scale-105 shadow-md">
                  Conocer más
                </Button>
              </div>

              {/* Image Column */}
              <div className="md:w-[45%] relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
