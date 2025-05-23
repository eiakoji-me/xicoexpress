import {
  ContactInfo,
  CtaButton,
  FooterSection,
  NavLink,
  SocialLink,
} from "./types";

// Header configuration for the site
export const navLinks: NavLink[] = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/contacto", label: "Contáctanos" },
];

export const ctaButton: CtaButton = {
  label: "Habla con un asesor",
  href: "https://wa.me/527641028914?text=Hola%20XicoExpress%2C%20quiero%20más%20información%20sobre%20sus%20servicios.",
  target: "_blank",
};

// Footer configuration for the site
export const footerLinks: FooterSection[] = [
  {
    title: "Sobre Nosotros",
    links: [
      { label: "Quiénes somos", href: "/nosotros" },
      { label: "Novedades", href: "/novedades" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Paquetería", href: "/servicios#paqueteria" },
      { label: "Etiquetas", href: "/servicios#etiquetas" },
      { label: "Devoluciones", href: "/servicios#devoluciones" },
    ],
  },
  {
    title: "Enlaces",
    links: [
      { label: "Bolsa de trabajo", href: "/trabajo" },
      { label: "Preguntas Frecuentes", href: "/faq" },
      { label: "Política de Privacidad", href: "/politicas/privacidad" },
      {
        label: "Términos y Condiciones",
        href: "/politicas/terminos-condiciones",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", show: true, iconKey: "facebook" },
  { label: "Instagram", href: "#", show: true, iconKey: "instagram" },
  {
    label: "WhatsApp",
    href: "https://wa.me/527641028914",
    external: true,
    show: true,
    iconKey: "whatsapp",
  },
  { label: "Google", href: "#", show: false, iconKey: "google" },
  { label: "Youtube", href: "#", show: true, iconKey: "youtube" },
  { label: "TikTok", href: "#", show: true, iconKey: "tiktok" },
];


export const contactInfo: ContactInfo = {
  address: "Del Gavilán 112-Local B\nXicotepec, Puebla",
  phone: "+52 764 102 8914",
};
