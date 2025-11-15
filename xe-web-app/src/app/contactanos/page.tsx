"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.047157862905!2d-97.96438658566582!3d20.27664881815159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d0f42a5dcb0f21%3A0x16e2cdbdb16b8b0!2sDel%20Gavilán%20112%20Local%20B%2C%20Xicotepec%2C%20Pue.%2C%20México!5e0!3m2!1ses!2smx!4v1716405670557!5m2!1ses!2smx"
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
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Estamos aquí para ayudarte con envíos, devoluciones, fletes y mucho
          más.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Main 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Right Column: Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg ring-1 ring-gray-200 h-full flex flex-col justify-between">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full space-y-6 animate-fade-in">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h2 className="text-2xl font-bold text-green-700">
                  ¡Gracias por contactarnos!
                </h2>
                <p className="text-gray-700 max-w-md">
                  Hemos recibido tu mensaje y nuestro equipo se pondrá en
                  contacto contigo lo antes posible. Mientras tanto, puedes
                  <a
                    href="/servicios"
                    className="text-yellow-500 underline mx-1"
                  >
                    explorar nuestros servicios
                  </a>
                  o
                  <a
         href="https://wa.me/527641028914"           
                    className="text-yellow-500 underline mx-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hablar con un asistente por WhatsApp
                  </a>
                  .
                </p>
                <Button
                  asChild
                  className="bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  <Link href="/">Ir al inicio</Link>
                </Button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={() => {
                  setSubmitted(true);
                }}
                className="flex flex-col gap-4 flex-grow"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <Select name="motivo" required>
                  <SelectTrigger id="motivo" className="w-full">
                    <SelectValue placeholder="Selecciona el motivo de contacto" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="envios">Envíos</SelectItem>
                    <SelectItem value="fletes">Fletes</SelectItem>
                    <SelectItem value="comercio">
                      Comercio electrónico
                    </SelectItem>
                    <SelectItem value="negocios">
                      Soluciones para negocios
                    </SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
                <div className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu correo"
                    required
                  />
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  required
                />
                <Textarea
                  name="mensaje"
                  rows={8}
                  placeholder="Escribe tu mensaje aquí..."
                  aria-label="Mensaje"
                  required
                />
                <div className="mt-auto">
                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-transform hover:scale-105 shadow-md"
                  >
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Left Column: Address + Map */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Nuestra ubicación</h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>
                    Del Gavilán 112 Local B, Xicotepec, Puebla, México
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+52 764 102 8914</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>contacto@xicoexpress.com</span>
                </div>
              </div>
            </div>
            <LazyMap />
          </div>
        </div>
      </div>
    </section>
  );
}
