"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { footerLinks, socialLinks, contactInfo } from "@/config/site.config";
import {socialIconMap} from "@/shared/utils/social-icon-map";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Contact Info */}
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
            <span className="whitespace-pre-line">{contactInfo.address}</span>
          </p>
          <p className="flex items-center gap-2 text-sm leading-relaxed">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href={`tel:${contactInfo.phone}`} className="hover:underline">
              {contactInfo.phone}
            </a>
          </p>
        </div>

        {/* Footer Link Columns */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-base font-semibold mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter + Social Icons */}
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
              {socialLinks
                .filter((s) => s.show !== false)
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                  >
                    {socialIconMap[s.iconKey ?? ""]}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 px-4 text-xs text-gray-600 text-center flex flex-col items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} XicoExpress. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
