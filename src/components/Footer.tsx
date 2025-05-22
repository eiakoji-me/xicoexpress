import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/logo_footer.svg"
            alt="XicoExpress Logo"
            width={150}
            height={150}
            className="mb-4"
          />
          <p className="flex items-start gap-2 mb-2 text-sm leading-relaxed">
            <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
            <span>
              Del Gavilán 112-Local B<br />
              Xicotepec, Puebla
            </span>
          </p>
          <p className="flex items-center gap-2 text-sm leading-relaxed">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>+52 764 102 8914</span>
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2">Sobre Nosotros</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/conocenos" className="hover:text-primary">
                ¿Quiénes somos?
              </Link>
            </li>
            <li>
              <Link href="/como-funciona" className="hover:text-primary">
                ¿Cómo funciona?
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2">Servicios</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/servicios#paqueteria" className="hover:text-primary">
                Paquetería
              </Link>
            </li>
            <li>
              <Link href="/servicios#etiquetas" className="hover:text-primary">
                Etiquetas
              </Link>
            </li>
            <li>
              <Link
                href="/servicios#devoluciones"
                className="hover:text-primary"
              >
                Devoluciones
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2">Newsletter</h4>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-accent transition-transform hover:scale-105 shadow-md">
              Suscribirse
            </Button>
          </form>
          <div className="text-center mt-4">
            <div className="flex justify-center gap-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="h-7 w-7 text-muted-foreground hover:text-primary transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="h-7 w-7 text-muted-foreground hover:text-primary transition" />
              </a>
              <a href="https://wa.me/527641028914" aria-label="WhatsApp">
                <FaWhatsapp className="h-7 w-7 text-muted-foreground hover:text-primary transition" />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok className="h-7 w-7 text-muted-foreground hover:text-primary transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} XicoExpress. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
