"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "El servicio fue excelente. Mi paquete llegó en tiempo récord, y el proceso de seguimiento fue muy sencillo. Definitivamente recomendaré este servicio a mis amigos y familiares.",
    name: "Francisco Romero",
  },
  {
    quote:
      "Muy rápido y seguro. Siempre llega a tiempo, y la atención al cliente es excepcional. Me siento muy tranquilo enviando mis paquetes con ellos.",
    name: "Laura Méndez",
  },
  {
    quote:
      "Perfecto para mis pedidos de Amazon y Temu. Nunca he tenido problemas con mis envíos, y siempre llegan en perfectas condiciones. ¡Un servicio de primera!",
    name: "Carlos Ruiz",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!api) return;
      indexRef.current = (indexRef.current + 1) % testimonials.length;
      api.scrollTo(indexRef.current);
    }, 10000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-orange-500 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Carousel opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {testimonials.map((item, i) => (
              <CarouselItem key={i} className="p-4">
                <div className="text-4xl mb-4">“</div>
                <p className="text-lg font-medium mb-2">{item.quote}</p>
                <p className="text-sm font-light">{item.name}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
