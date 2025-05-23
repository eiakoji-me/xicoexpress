"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, ctaButton } from "@/config/site.config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo_header.svg"
            alt="XicoExpress Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/527641028914?text=Hola%20XicoExpress%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-transform hover:scale-105 shadow-md">
              Habla con un asesor
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ctaButton.href}
              target={ctaButton.target}
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-400 text-black mt-2 shadow-md w-full">
                {ctaButton.label}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
