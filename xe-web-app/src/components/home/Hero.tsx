"use client";

import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";

// Banner artwork already contains its headline, copy and call to action,
// so the alt text carries that content for screen readers.
const slides = [
  {
    image: "/images/banner-envios-mexico.jpg",
    alt: "Envía a todo México desde $185 pesos. Cotiza tu envío. Cobertura nacional, seguimiento en tiempo real y empaque seguro.",
    href: "/herramientas",
  },
  {
    image: "/images/banner-mercado-libre.jpg",
    alt: "¿Compras en Mercado Libre? ¡Recíbelo en XicoExpress! Compra en línea y recibe tus paquetes con nosotros, fácil, seguro y cerca de ti. Conoce más.",
    href: "/servicios/compras-y-devoluciones",
  },
  {
    image: "/images/banner-fletes.jpg",
    alt: "¿No cabe en una caja? Nosotros lo llevamos. Fletes locales y foráneos: paquetes voluminosos, recolección a domicilio y servicio local y foráneo.",
    href: "/servicios/envios-y-fletes",
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
    <section className="bg-background">
      <h1 className="sr-only">
        XicoExpress: envíos a todo México, compras en Mercado Libre y fletes
      </h1>
      <div ref={sliderRef} className="keen-slider max-w-[1600px] mx-auto">
        {slides.map((slide, index) => (
          <div key={slide.image} className="keen-slider__slide">
            <Link
              href={slide.href}
              className="relative block w-full aspect-[1600/583]"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-contain"
                sizes="(max-width: 1600px) 100vw, 1600px"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
