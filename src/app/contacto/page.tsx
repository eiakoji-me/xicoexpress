"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-[300px] rounded-lg overflow-hidden shadow"
    >
      {isVisible ? (
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.047157862905!2d-97.96438658566582!3d20.27664881815159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d0f42a5dcb0f21%3A0x16e2cdbdb16b8b0!2sDel%20Gavil%C3%A1n%20112%20Local%20B%2C%20Xicotepec%2C%20Pue.%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1716405670557!5m2!1ses!2smx"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
          Cargando mapa...
        </div>
      )}
    </div>
  );
}

export default function ContactoPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Address + Map */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Address */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contáctanos</h2>
          <p className="text-gray-600">
            Visítanos o escríbenos, estamos para ayudarte.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span>Del Gavil&aacute;n 112 Local B, Xicotepec, Puebla, México</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5" />
              <span>+52 764 102 8914</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5" />
              <span>contacto@xicoexpress.com</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <LazyMap />
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Tu nombre" required />
            <Input type="email" placeholder="Tu correo" required />
          </div>
          <Input type="text" placeholder="Asunto" required />
          <Textarea
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            required
          />
          <Button
            type="submit"
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-transform hover:scale-105 shadow-md"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
}
